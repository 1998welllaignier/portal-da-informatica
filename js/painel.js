/* ============================================================
   PAINEL DO PROFESSOR — Portal da Informática
   Professor Welington Laignier
   ------------------------------------------------------------
   Só abre com a conta Google de professor (as regras do banco
   de dados recusam qualquer outra conta).
   Turmas, alunos, códigos, missões, presença, importação de
   listas e virada de ano. Nenhum nome de aluno fica no código.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const N = P.nuvem;
  if (!N || !N.pronto) return;
  const { esc, h } = P.util;
  const cat = () => P.catalogo;
  const db = () => N.db();
  const auth = () => N.auth();

  // 22/11/2026: o 5º ano (atendimento por vontade própria, fora das turmas oficiais) vai para o FIM de todas as listas e do Panorama
  // 🎒 26/11/2026: o 5º ano entrou na turma 🎒 Agregados (turma livre, sem horário), que fica no FIM; as turmas antigas do 5º
  //    ficam arquivadas (só o histórico). turmasDeAula() = só as turmas com aula (sem os Agregados): aula, placar, diário, prova…
  const todasTurmas = () => { const r = []; cat().series.filter(s => !s.agregados).concat(cat().series.filter(s => s.agregados)).forEach(s => s.turmas.filter(t => !t.arquivada).forEach(t => r.push({ ...t, serie: s }))); return r; };
  const turmasDeAula = () => todasTurmas().filter(t => !t.livre);
  // 🕘 turma do horário: sem turma escolhida, o painel abre na turma que está em aula agora (15 min de folga antes
  // e depois) ou na próxima aula de hoje. Se o professor trocar de turma à mão, a escolha vale até a próxima aula começar.
  const ss = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} } };
  function turmaDaHora(turmas) {
    const ag = new Date(), dia = ag.getDay(), min = ag.getHours() * 60 + ag.getMinutes();
    const meiaNoite = new Date(ag.getFullYear(), ag.getMonth(), ag.getDate()).getTime();
    const hoje = turmas.filter(t => t.aula && t.aula.dia === dia && t.aula.ini).map(t => { const [hh, mm] = t.aula.ini.split(":").map(Number); return { t, ini: hh * 60 + mm }; }).sort((a, b) => a.ini - b.ini || (a.t.serie.id === "5") - (b.t.serie.id === "5")); // no mesmo horário, a turma regular vem antes do 5º ano
    const atual = hoje.find(x => min >= x.ini - 15 && min < x.ini + 90);
    if (atual) return { id: atual.t.id, desde: meiaNoite + (atual.ini - 15) * 60000 };
    const prox = hoje.find(x => x.ini - 15 > min);
    if (prox) { const antes = hoje.filter(x => x.ini + 90 <= min).pop(); return { id: prox.t.id, desde: meiaNoite + (antes ? antes.ini + 90 : 0) * 60000 }; }
    return null;
  }
  function escolherTurma(tid, turmas) {
    const tem = id => id && turmas.some(x => x.id === id);   // 🎒 a turma guardada pode não estar nesta lista (ex.: Agregados fora das telas de aula)
    if (tem(tid)) { if (tid !== ss.get("painel:turma")) ss.set("painel:turmaManual", String(Date.now())); return tid; }
    const a = turmaDaHora(turmas), manual = +ss.get("painel:turmaManual") || 0;
    if (a && manual < a.desde) return a.id;
    const g = ss.get("painel:turma");
    return (tem(g) && g) || (a && a.id) || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
  }
  // 🔁 missão sugerida pela mesma regra do Panorama: a da aula de hoje (registrada › portal › próxima que falta);
  // fora do dia da aula, a da próxima aula. Sem histórico, cai no cronograma antigo (missaoDoDia).
  const _sug = {};
  // histórico da turma guardado por um dia (usado pela sugestão e pelas listas de missão)
  const historicoCache = t => { const k = t.id + "|" + N.hoje(); if (!_sug[k]) _sug[k] = historicoTurma(t); return _sug[k]; };
  // ✅/⏳ ao lado de cada missão nas listas: "(✅ dada em 03/11, 10/11)" ou "(⏳ ainda não dada)" (pedido em 14/11/2026)
  async function situacaoMissoes(t) {
    try { const h = await historicoCache(t); const r = {};
      Object.keys(h.dadas || {}).forEach(m => { r[m] = "✅ dada em " + h.dadas[m].map(d => dataBR(d).slice(0, 5)).join(", "); });
      return r; } catch (e) { return null; }
  }
  const sitMis = (sit, mid) => sit ? " (" + (sit[mid] || "⏳ ainda não dada") + ")" : "";
  async function missaoSugerida(t, C) {
    const ok = m => m && C.missoes.some(x => x.id === m);
    try {
      const h = await historicoCache(t), hoje = N.hoje();
      const l = h.linhas.find(x => x.d === hoje && !x.ocorr && ok(x.mid)) || h.linhas.find(x => x.d > hoje && !x.ocorr && ok(x.mid));
      if (l) return l.mid;
    } catch (e) { console.warn("missão sugerida", e); }
    return missaoDoDia(t, C);
  }
  // missão do dia pelo cronograma da turma (a de hoje ou a última que já passou)
  function missaoDoDia(t, C) {
    const ag = new Date(), hoje = `${ag.getFullYear()}-${String(ag.getMonth() + 1).padStart(2, "0")}-${String(ag.getDate()).padStart(2, "0")}`;
    const ok = Object.entries(missoes4Bim(t)).filter(([d, m]) => d <= hoje && C.missoes.some(x => x.id === m)).sort();
    return ok.length ? ok[ok.length - 1][1] : null;
  }
  const nomeTurma = id => { const t = todasTurmas().find(x => x.id === id) || (P.turma && P.turma(id)); return t ? (t.livre ? "🎒 " : "") + t.nome + (t.serie.id === "5" ? " (5º ano)" : "") : id; };
  // 🏷️ missão sempre com número e título: "M2 · Listas e grafos no dia a dia" (pedido em 14/11/2026)
  const tituloCurto = m => String((m && m.titulo) || "").replace(/^[^–]*–\s*/, "");
  const SIG = mid => mid === "rv" ? "🔁" : mid === "ae" ? "⭐" : String(mid || "").toUpperCase(); // 🔁 Revisão não vira "RV"
  const rotMis = (C, mid) => { const m = C && (C.missoes || []).find(x => x.id === mid); return SIG(mid) + (m ? " · " + tituloCurto(m) : ""); };
  // 🕘 nas listas de turma: nome + dia e hora da aula (ex.: "6º A · qui 13:30"), em todo lugar (pedido em 14/11/2026)
  const rotuloTurma = id => { const t = todasTurmas().find(x => x.id === id); return nomeTurma(id) + (t && t.aula && t.aula.ini ? " · " + ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][t.aula.dia] + " " + t.aula.ini : ""); };
  const dataBR = d => { const [a, m, dd] = d.split("-"); return `${dd}/${m}/${a}`; };
  const semana = d => ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][new Date(d + "T12:00:00").getDay()];
  const novoId = () => "a" + Math.random().toString(36).slice(2, 9);
  const normNome = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  const arrumarNome = s => String(s || "").replace(/\s+/g, " ").trim();
  const toast = m => P.toast(m);

  function sorteiaCodigo(usados) {
    for (let i = 0; i < 5000; i++) {
      const c = String(1000 + Math.floor(Math.random() * 9000));
      if (usados.has(c) || /^(\d)\1{3}$/.test(c) || "0123456789".includes(c) || "9876543210".includes(c)) continue;
      usados.add(c); return c;
    }
    throw new Error("Sem códigos livres nesta turma.");
  }

  /* ---------------- leitura ---------------- */
  async function alunosDaTurma(tid) {
    const q = await db().collection("alunos").where("turma", "==", tid).get();
    return q.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }
  async function progressoDaTurma(tid) {
    const q = await db().collection("progresso").where("turma", "==", tid).get();
    return q.docs.map(d => ({ id: d.id, ...d.data() }));
  }
  /* 👥 Quem participa da aula desta turma AGORA (18/11/2026): os alunos dela + os marcados "🏫 frequenta a aula desta turma"
     + os da turma da mesma série iniciada junto (👥 aula dupla). Vale para o 📺 painel ao vivo, o 🏆 placar e o pódio.
     A presença, o diário e as notas continuam cada um na sua turma. */
  async function participantes(t) {
    const hoje = N.hoje();
    const [proprios, visit0, hj, vis5] = await Promise.all([alunosDaTurma(t.id),
      db().collection("alunos").where("outraTurma", "==", t.id).get().then(q => q.docs.map(d => ({ id: d.id, ...d.data() }))).catch(() => []),
      db().collection("config").doc("hoje_" + t.id).get().catch(() => null),
      // 🎒 5º ano que veio assistir a esta aula hoje (progresso/<aluno>_visita, gravado pelo aluno; 25/11/2026)
      db().collection("progresso").where("tipo", "==", "visita").where("dia", "==", hoje).get().then(q => q.docs.map(d => d.data()).filter(x => x.aulaTurma === t.id)).catch(() => [])]);
    const alunos5 = (await Promise.all(vis5.map(v => db().collection("alunos").doc(v.alunoId).get().then(d => d.exists ? { id: d.id, ...d.data(), visitante: true, quinto: true } : null).catch(() => null)))).filter(Boolean);
    const visit = [...visit0, ...alunos5];
    const hd = hj && hj.exists ? hj.data() : {};
    // 🎒 agregados incluídos hoje nesta aula (botão 🎒 da aba Aula): participam como alunos da turma (roleta, vídeo, leitura, placar, pódio)
    if (hd.dia === hoje && hd.iniciadaDia === hoje && (hd.agregados || []).length) {
      const ags = (await Promise.all(hd.agregados.map(id => db().collection("alunos").doc(id).get().then(d => d.exists ? { id: d.id, ...d.data(), visitante: true, agregado: true } : null).catch(() => null)))).filter(Boolean);
      visit.push(...ags);
    }
    const juntas = hd.dia === hoje ? (hd.junto || []).filter(id => { const x = todasTurmas().find(y => y.id === id); return x && x.id !== t.id && x.serie.id === t.serie.id; }) : [];
    const deJuntas = (await Promise.all(juntas.map(id => alunosDaTurma(id).catch(() => [])))).flat();
    const m = new Map(); [...proprios, ...deJuntas, ...visit].forEach(a => { if (!m.has(a.id)) m.set(a.id, a); });
    const alunos = [...m.values()].filter(a => a.ativo !== false && !a.teste).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    // 🎒 a turma Agregados entra sempre na escuta do progresso: um agregado incluído com a tela já aberta aparece na hora
    //    (sessão/online para a roleta, pontos no placar) sem precisar fechar e abrir de novo (26/11/2026)
    const temAG = !t.livre && cat().series.some(x => x.agregados);
    const r = { t, alunos, turmasProg: [...new Set([t.id, ...alunos.map(a => a.turma), ...(temAG ? ["AG"] : [])])] };
    PARTS.add(r); if (PARTS.size > 40) PARTS.delete(PARTS.values().next().value);
    // escuta a lista de agregados desta aula (vale também para a janela do projetor e outra aba do painel)
    if (temAG && !OUV_AG[t.id]) { let ult = JSON.stringify((hd.dia === hoje && hd.iniciadaDia === hoje && hd.agregados) || []);
      try { OUV_AG[t.id] = db().collection("config").doc("hoje_" + t.id).onSnapshot(sn => { const d = sn.exists ? sn.data() : {}, hj2 = N.hoje();
        const ids = d.dia === hj2 && d.iniciadaDia === hj2 ? (d.agregados || []) : [], k = JSON.stringify(ids); if (k === ult) return; ult = k; atualizarAgregados(t.id, ids).catch(() => {}); }, () => {}); } catch (e) {} }
    return r;
  }
  /* 🎒 telas abertas (placar, Ao vivo, sala de espera, Aula ao vivo, roleta) guardam a lista de quem participa; quando o professor
     inclui ou tira um agregado (botão 🎒), a lista de TODAS elas é atualizada no mesmo lugar (mesma lista), sem reabrir nada. */
  const PARTS = new Set(), OUV_AG = {};
  async function atualizarAgregados(tid, ids) {
    const docs = (await Promise.all(ids.map(id => db().collection("alunos").doc(id).get().then(d => d.exists ? { id: d.id, ...d.data(), visitante: true, agregado: true } : null).catch(() => null)))).filter(a => a && a.ativo !== false);
    PARTS.forEach(r => { if (!r.t || r.t.id !== tid) return;
      for (let i = r.alunos.length - 1; i >= 0; i--) if (r.alunos[i].agregado && !ids.includes(r.alunos[i].id)) r.alunos.splice(i, 1);
      docs.forEach(a => { if (!r.alunos.some(x => x.id === a.id)) r.alunos.push(a); });
      r.alunos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
      if (!r.turmasProg.includes("AG")) r.turmasProg.push("AG"); });
  }
  // 🏫 alunos de outras turmas que frequentam a aula desta turma (alunos/{id}.outraTurma = esta turma), 18/11/2026
  async function visitantesDe(tid) {
    try { const q = await db().collection("alunos").where("outraTurma", "==", tid).get(); return q.docs.map(d => ({ id: d.id, ...d.data(), visitante: true })).filter(a => a.ativo !== false && !a.teste); } catch (e) { return []; }
  }
  const tagVisitante = a => a.agregado ? ` <span class="pp-visit pp-visit-ag" title="Agregado incluído nesta aula: participa como aluno da turma, sem diário e sem nota">🎒 agregado${(cat().series.find(x => x.id === a.serie) || {}).nome ? " · " + esc(cat().series.find(x => x.id === a.serie).nome) : ""} · participa desta aula</span>`
    : a.visitante ? ` <span class="pp-visit" title="Não é desta turma no sistema: participa da aula daqui">🏫 da turma ${esc(nomeTurma(a.turma))} · participa desta aula</span>` : "";
  const tagOutra = a => a.outraTurma && !a.visitante ? ` <span class="pp-visit pp-visit-fora" title="Frequenta a aula de outra turma">🏫 frequenta a aula do ${esc(nomeTurma(a.outraTurma))}</span>` : "";
  async function lerProg(turmaIds) { return (await Promise.all(turmaIds.map(id => progressoDaTurma(id)))).flat(); }
  function ouvirProg(turmaIds, cb, onErr) {
    const por = {}; const uns = turmaIds.map(id => db().collection("progresso").where("turma", "==", id).onSnapshot(q => { por[id] = q.docs.map(d => ({ id: d.id, ...d.data() })); cb(Object.values(por).flat()); }, onErr));
    return () => uns.forEach(u => { try { u(); } catch (e) {} });
  }
  const tagTurma = (a, t) => a.turma && a.turma !== t.id ? ` <span class="pv-outra" title="Aluno de outra turma participando desta aula">🏫 ${esc(nomeTurma(a.turma))}</span>` : "";
  async function codigosUsados(tid) {
    const q = await db().collection("acessos").where("turma", "==", tid).get();
    return new Set(q.docs.map(d => d.id.split("_").pop()));
  }

  /* ---------------- escrita ---------------- */
  async function lotes(ops) {
    for (let i = 0; i < ops.length; i += 400) {
      const b = db().batch();
      ops.slice(i, i + 400).forEach(f => f(b));
      await b.commit();
    }
  }
  /* 👣🧩 Marcações que passam de um ano para o outro (20/11/2026, pedido do professor):
     quem usava a Trilha Passo a Passo (👣) ou era atípico (🧩) no ano anterior volta já marcado ao ser importado no ano novo.
     O 9º ano fica de fora do relatório (sai da escola); quem repetir o 9º e for importado volta marcado igual. A busca é pelo nome completo; com nome repetido, não marca e avisa no relatório. */
  async function marcadosDoAnoPassado(anoNovo) {
    const [qt, qa] = await Promise.all([db().collection("alunos").where("trilha", "==", true).get(), db().collection("alunos").where("atipico", "==", true).get()]);
    const m = new Map();
    [...qt.docs, ...qa.docs].forEach(d => { const a = { id: d.id, ...d.data() };
      if (a.ativo || a.teste || !(Number(a.ano) < Number(anoNovo))) return;
      m.set(a.id, a); });
    const porNome = new Map();
    [...m.values()].sort((x, y) => Number(y.ano) - Number(x.ano)).forEach(a => {
      const k = normNome(a.nome), ja = porNome.get(k);
      if (!ja) porNome.set(k, a);
      else if (Number(ja.ano) === Number(a.ano) && ja.turma !== a.turma) porNome.set(k, { ...ja, repetido: true });
    });
    return porNome;
  }
  async function adicionarAlunos(tid, lista, ano, serieAG) {   // serieAG: só nos 🎒 Agregados (a série do aluno)
    const usados = await codigosUsados(tid);
    const atuais = await alunosDaTurma(tid);
    const passados = await marcadosDoAnoPassado(ano).catch(() => new Map());
    const jaTem = new Set(atuais.map(a => normNome(a.nome)));
    const idsUsados = new Set(atuais.map(a => a.id));
    const ops = [], feitos = [];
    lista.forEach(x => {
      const nome = arrumarNome(x.nome);
      if (!nome || jaTem.has(normNome(nome))) return;
      let id = x.id && /^[A-Za-z0-9]{3,30}$/.test(x.id) ? x.id : novoId();
      if (idsUsados.has(id)) id = novoId();
      idsUsados.add(id); jaTem.add(normNome(nome));
      const codigo = sorteiaCodigo(usados);
      const ant = passados.get(normNome(nome)), herda = ant && !ant.repetido ? ant : null;
      const marcas = herda ? { ...(herda.trilha ? { trilha: true } : {}), ...(herda.atipico ? { atipico: true } : {}), veioDe: herda.id } : {};
      const sx = serieAG ? { serie: String(serieAG) } : {};
      ops.push(b => b.set(db().collection("alunos").doc(id), { nome, turma: tid, codigo, ativo: true, ano, criadoEm: Date.now(), ...marcas, ...sx }));
      ops.push(b => b.set(db().collection("acessos").doc(tid + "_" + codigo), { alunoId: id, turma: tid, ativo: true, nome, ...(marcas.trilha ? { trilha: true } : {}), ...sx }));
      feitos.push({ id, nome, codigo, trilha: !!marcas.trilha, atipico: !!marcas.atipico, duvida: !!(ant && ant.repetido) });
    });
    await lotes(ops);
    return feitos;
  }
  async function mudarAtivo(a, ativo) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { ativo }),
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: a.id, turma: a.turma, ativo, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })
    ]);
  }
  /* op.serie: a série do aluno nos 🎒 Agregados; op.mesmoCodigo: na mudança de turma, tenta manter o código (se estiver livre lá) */
  async function novoCodigo(a, novaTurma, op = {}) {
    const tid = novaTurma || a.turma, usados = await codigosUsados(tid);
    const codigo = op.mesmoCodigo && novaTurma && a.codigo && !usados.has(String(a.codigo)) ? String(a.codigo) : sorteiaCodigo(usados);
    const tt = P.turma && P.turma(tid), serieX = op.serie || (tt && tt.livre ? a.serie : "");
    const ativo = op.manterAtivo ? a.ativo !== false : true;
    await lotes([
      b => b.delete(db().collection("acessos").doc(a.turma + "_" + a.codigo)),
      b => b.update(db().collection("alunos").doc(a.id), { turma: tid, codigo, ativo, ...(serieX ? { serie: String(serieX) } : {}), ...(novaTurma ? { turmaAnterior: a.turma, trocouEm: Date.now() } : {}) }),
      b => b.set(db().collection("acessos").doc(tid + "_" + codigo), { alunoId: a.id, turma: tid, ativo, nome: a.nome, ...(a.trilha ? { trilha: true } : {}), ...(serieX ? { serie: String(serieX) } : {}) })
    ]);
    return codigo;
  }
  // 🎒 série do aluno nos Agregados: o portal do aluno lê no código (acessos) e o painel no cadastro (alunos)
  async function mudarSerieAG(a, serieX) {
    await lotes([b => b.update(db().collection("alunos").doc(a.id), { serie: String(serieX) }),
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { serie: String(serieX) }, { merge: true })]);
  }
  const OPS_SERIE = () => cat().series.filter(x => !x.agregados).map(x => [x.id, x.nome]);
  const perguntarSerie = (nome) => P.escolher(`Qual é a série de ${nome}? Nos 🎒 Agregados, cada aluno faz as missões da série dele.`, OPS_SERIE());
  /* 📌 Apostila diferenciada: o código do aluno passa a abrir a Trilha Passo a Passo da série */
  async function marcarTrilha(a, on) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { trilha: on }),
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: a.id, turma: a.turma, ativo: a.ativo, nome: a.nome, ...(on ? { trilha: true } : {}) })
    ]);
  }
  async function renomear(a, nome) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { nome }),
      b => b.update(db().collection("acessos").doc(a.turma + "_" + a.codigo), { nome })
    ]);
  }
  async function config() {
    const s = await db().collection("config").doc("geral").get();
    const d = s.exists ? s.data() : {}; if (d.periodo) P._periodo = d.periodo; P._periodoLido = true; // 🗓️ bimestre em uso
    return Object.assign({ ano: new Date().getFullYear() }, d);
  }

  /* ============================================================
     TELAS
     ============================================================ */
  let mountFn;
  const tela = html => { const r = mountFn(`<section class="tela painel-prof">${html}</section>`); medirTopo(); return r; };
  /* a barra do painel fica fixa logo abaixo da barra escura do portal; mede a altura dela (muda com a largura da tela) */
  function medirTopo() { try { const tb = document.getElementById("topbar"), pt = document.querySelector(".pp-topo"), st = document.documentElement.style;
    st.setProperty("--pp-top", (tb && getComputedStyle(tb).position === "sticky" ? tb.offsetHeight : 0) + "px");
    if (pt) st.setProperty("--pp-alt", pt.offsetHeight + "px"); } catch (e) {} }
  window.addEventListener("resize", () => medirTopo());
  /* 🧭 TOPO COMPACTO (22/11/2026, avaliação do painel): antes o título, a linha da escola, 8 botões, as abas e a ajuda
     ocupavam uns 400 px em toda aba. Agora é uma barra só, fina e fixa no alto (acompanha a rolagem), com as abas à esquerda,
     os botões da aula no meio e os de consulta só com o ícone (o nome aparece ao passar o mouse). */
  const topo = (u, ativo) => `<div class="pp-topo" role="navigation" aria-label="Painel do professor">
    <nav class="pp-abas">${[["aula", "🎤 Aula"], ["", "🏫 Turmas"], ["diario", "📒 Diário"], ["panorama", "🗺️ Panorama"], ["prova", "📝 Prova"], ["config", "⚙️ Configurar"]].map(([k, r]) =>
      `<a href="#/painel${k ? "/" + k : ""}" class="${ativo === k ? "atual" : ""}">${r}</a>`).join("")}</nav>
    <div class="pp-user">
      <button class="btn btn-peq pp-ini-btn" id="pp-ini" type="button" title="Iniciar uma aula agora (abre as tarefas da turma)">▶️ Iniciar aula</button><button class="btn btn-peq pp-fim-btn" id="pp-fim" type="button" title="Finaliza a aula agora: fecha as tarefas e mostra o pódio">🏁 Finalizar</button><button class="btn btn-peq pp-vivo-btn" id="pp-vivo" type="button" title="Painel ao vivo da turma">🔴 Ao vivo</button><button class="btn btn-peq pp-placar-btn" id="pp-placar" type="button" title="Abre numa aba nova, para deixar no projetor">🏆 Placar</button>
      <span class="pp-icones"><button class="btn btn-peq pp-ic" id="pp-busca" type="button" title="🔎 Procurar um aluno (em todas as turmas) e abrir a ficha dele" aria-label="Procurar aluno">🔎</button><button class="btn btn-peq pp-ic" id="pp-semana" type="button" title="📅 Minha semana: as aulas de segunda a quinta, com a missão de cada turma e o que falta registrar" aria-label="Minha semana">📅</button><button class="btn btn-peq pp-ic" id="pp-cod" type="button" title="🔑 Códigos dos alunos (para quem esqueceu)" aria-label="Códigos">🔑</button><button class="btn btn-peq pp-ic" id="pp-hor" type="button" title="🕘 Horários da sala de informática" aria-label="Horários">🕘</button><button class="btn btn-peq pp-ic pp-sino" id="pp-sino" type="button" title="🔔 Datas de hoje: abre de novo as datas e lembretes do dia, inclusive os que você deixou para ver depois" aria-label="Datas de hoje">🔔<span class="pp-sino-n" id="pp-sino-n" hidden></span></button>${ajudaAba(ativo)}<details class="pp-conta"><summary class="btn btn-peq pp-ic" title="Conta: ${esc(u.email)}" aria-label="Conta">👤</summary><div class="pp-conta-c"><b>${esc(cat().professor)}</b><span class="pp-email">${esc(u.email)}</span><button class="btn btn-sec btn-peq" id="pp-sair" type="button">Sair do painel</button></div></details></span>
    </div></div>`;
  /* ❓ quadro "Para que serve e como usar" de cada aba (fica fechado; o professor abre quando quiser) */
  const AJUDA = {
    aula: ["Use durante a aula, projetando ou no seu computador.", [
      "<b>🎒 Agregados</b> (botão na barra da turma): depois do ▶️ Iniciar aula, se tiver agregado no portal o painel pergunta sozinho se quer incluir; quem chegar no meio da aula aparece numa faixa com <b>✔ Incluir na aula</b>. O agregado incluído participa como aluno da turma (sala de espera, vídeo, leitura guiada, roleta, placar e pódio), <b>sem diário, sem nota e sem prova</b>, e a tela dele entra na aula em até 15 segundos. Vale só nesta aula: quando ela acaba, ele volta às missões da série dele.",
      "<b>✏️ Pincel e ⬜ Quadro branco</b>: os botões redondos no canto direito (nesta aba, na 👀 apostila do aluno e no 🎬 modo apresentação). ✏️ = riscar, sublinhar, passar marca-texto, formas, texto, laser e carimbos <b>por cima da página</b> (os riscos acompanham a rolagem; 🖱️ Mouse deixa a página clicável de novo; ⇄ muda a barra de lugar; Ctrl+Z desfaz). ⬜ = quadro branco em tela cheia, com fundos (branco, quadriculado, pautado, lousa verde), páginas, colar imagem (Ctrl+V) e 💾 salvar em imagem. Espelhando a tela, os alunos veem tudo.",
      "<b>🎤 Aula ao vivo</b> (o caminho do começo da aula): ▶️ Iniciar a aula → 🚦 os alunos esperam na <b>sala de espera</b> → <b>🎬 Vídeo</b> ou <b>📖 Leitura guiada</b> em todas as telas ao mesmo tempo (troque quando quiser) → ✕ fechar = todos voltam para a sala de espera → <b>🏁 Dar a largada</b> (cada um vai para a missão, no próprio ritmo; a largada não abre vídeo). Use os botões do quadro 🚦 Sala de espera ou da barra 🧰. <b>Telas</b>: 🖥️ <b>1 tela</b> (o projetor repete o seu monitor; comandos numa barra embaixo e 👥 A turma num botão) ou 🖥️📽️ <b>2 telas</b> (abre a janela do projetor, só com o conteúdo e o vídeo com som: clique uma vez nela; no seu monitor ficam o slide, os comandos e a turma). Na leitura: 🎡 sortear quem lê, ✔ Leu, ◀ ▶ slides, ✏️ Riscar, 🔴 Laser, 🧽 Apagar, 🖱️ Mouse (para clicar na palavra pontilhada e abrir para todos). As 🤔 perguntas relâmpago são slides: quando todos responderem, a certa aparece sozinha com quem acertou e quem errou. No vídeo: ▶️/⏸, 🔇/🔊, ⏮ voltar ao início (pausado). Os alunos não precisam clicar em nada. 🖥️ Mostrar minha tela e ⬜ Quadro continuam na barra 🧰.",
      "<b>▶️ Iniciar a aula</b>: as tarefas da turma só abrem quando você inicia a aula. No horário, o painel pergunta sozinho (turma, 📌 missão, 🔒 travar). Fora do horário (reposição), use o botão verde <b>▶️ Iniciar aula</b> na barra de cima (é o único; nesta aba ele já vem com a turma que está aberta). O <b>🏁 Finalizar aula</b> fecha na hora e mostra o pódio; se você não finalizar, <b>as tarefas fecham sozinhas no fim do horário da aula</b> (+15 min). Aula iniciada fora do horário (reposição) dura 1h15 (+15 min) a partir do início. Antes de iniciar, os alunos entram e leem, mas veem “Aguardando o professor”.",
      "<b>🧭 Como a aba está arrumada</b>: no alto, a turma e a 📌 Missão de hoje; logo depois, o 📖 roteiro da aula (falas e respostas). 🎤 Aula ao vivo, 🎬 Vídeo, 📖 Leitura guiada, 🎡 Roleta, 🖥️ Mostrar minha tela, ⬜ Quadro, 🔗 Vídeo do YouTube (cole qualquer link e passe em todos os computadores), 📺 Outros vídeos e 🧩 Apoios ficam em <b>🧰 Ferramentas da aula</b>, depois do roteiro. Para chegar a qualquer parte com um toque, use o <b>Ir para</b> (abaixo da Missão de hoje) ou os atalhos da barra fixa do roteiro.",
      "<b>🟧 Meus recados</b> (🔒 só você vê; os alunos não veem): o lugar dos recados é o <b>📒 Diário › 🟧 Meus recados</b> (escrever, marcar como lido e ver o histórico). Aqui na aula aparecem só os <b>pendentes</b> da turma, num quadro laranja no alto; toque em “✔ Já li” e ele vai para o histórico. Sem recado pendente, o quadro não aparece. Para falar com os alunos, use 🏫 Turmas › 📣 Avisos para os alunos.",
      "<b>🗣️ Para falar à turma</b>: aparecem no topo com a fala pronta. Depois de falar, toque em “✔ Já avisei esta turma” (o aviso some só daquela turma, neste computador).",
      "<b>🕘 A turma já vem certa</b>: ao abrir o painel, ele escolhe sozinho a turma que está em aula agora (ou a próxima aula de hoje) e a missão do dia pela mesma regra do 🗺️ Panorama (a próxima missão que a turma ainda não fez). Para ver outra turma, é só trocar na lista; a sua escolha vale até a próxima aula começar.",
      "<b>A missão da aula</b> é a 📌 Missão de hoje (o roteiro abre nela). Para só olhar o roteiro de outra missão, abra “👁️ Só olhar o roteiro de outra missão”. Aparece o roteiro da aula com as falas, as respostas de cada atividade e quantos alunos já entraram e concluíram o Básico.",
      "<b>🔁 Revisão para a prova</b>: na última aula antes da prova, escolha 🔁 Revisão na Missão de hoje. Ao ▶️ Iniciar, o painel grava quais missões a turma já estudou e cada aluno vê só os blocos dessas missões (📚 Relembre + atividades com correção automática, Desafio e Turbo misturando as missões). Conta no placar como uma missão.",
      "<b>👀 Abrir a apostila do aluno</b>: abre, numa aba nova, a apostila exatamente como o aluno vê. Nada do que você fizer ali conta.",
      "<b>📺 Vídeo da missão</b>: quando a missão já tem vídeo no seu canal do YouTube (não listado), o player aparece nesta aba. Dê o play ali mesmo ou toque em <b>↗️ Abrir player em nova aba</b>, que abre só o vídeo numa aba própria, ocupando a tela toda (bom para projetar). Só você vê; os alunos não.",
      "<b>📋 Cartaz de entrada</b>: abre, numa aba nova, o mesmo cartaz da porta (endereço do site e os 4 passos para entrar), em tela cheia, para projetar no começo da aula. Aperte F11 para tela cheia.",
      "<b>📌 Missão de hoje</b>: escolha a missão na lista do quadro amarelo (qualquer uma, não precisa abrir antes). Quando o aluno digitar o código, ele cai direto nela. Ao escolher, ela já vem 🔒 travada: as tarefas das outras missões ficam fechadas para os alunos (desmarque se quiser liberar). A escolha fica anotada no 📒 Diário, na aula do dia. Vale só para hoje; para tirar, escolha “nenhuma”.",
      "<b>🔒 Travar só nela</b> (opcional): as tarefas das outras missões fecham hoje. Os textos continuam abertos. Quem você liberou individualmente (falta, reposição) continua podendo fazer as outras.",
      "<b>🚨 Se precisar</b> (dentro do quadro da Missão de hoje): libera a turma toda agora, fecha antes da hora ou volta ao normal.",
      "<b>🧩 Apoios</b>: o que fazer com cada aluno atípico da turma. Só você vê."]],
    "": ["A lista de alunos de cada turma, com códigos e progresso.", [
      "<b>Toque no nome do aluno</b> para: gerar novo código, corrigir o nome, mudar de turma, marcar 🧩 (tem PEI), escrever os 📝 Apoios, usar a 👣 Trilha Passo a Passo, marcar 🧪 aluno de teste, liberar as tarefas fora do horário só para ele e marcar que ele frequenta a aula de outra turma.",
      "<b>🎒 Agregados</b> (turma livre, sem horário): para quem não é seu aluno oficial (o antigo 5º ano e alunos do 6º ao 9º de fora das turmas). Cada aluno faz as missões <b>da série dele</b>, na hora que quiser, <b>uma por vez</b> (a que começou fica aberta até terminar o 🟢 Básico; as outras ficam 🔒), e a 🎮 Sala de jogos fica sempre aberta. Ao <b>➕ Adicionar aluno</b> ou <b>🔀 Mudar de turma</b> para os Agregados, o painel pergunta a série; para trocar depois, use <b>🎓 Mudar a série</b> no ⚙️. Os Agregados não aparecem nas telas de aula (Aula, Placar, Diário, Prova).",
      "<b>🏠 Estuda em casa</b>: o aluno faz as missões de casa, sem trava de aula: ao entrar vê a tela “🏠 Estudo em casa” (vídeo de instruções na 1ª vez, prazo e sugestão de semanas), faz <b>uma missão por dia, até 2 horas</b> (cronômetro no canto), assiste ao vídeo da missão até o fim antes das tarefas (o longo, quando houver). No Diário fica J (justificada) sozinho.",
      "<b>📣 Avisos para os alunos</b> (botão nesta aba): para todos, só presenciais, só os de casa ou um aluno; escolha quantas vezes aparece (1, 2, 3, 5 ou até apagar) e uma data para sumir. O aluno lê um aviso de cada vez, com um cronômetro de leitura antes do “OK, já li”. Aqui você vê 👀 quem já leu.",
      "<b>🧪 Aluno de teste</b> não conta na presença, no diário, nas notas nem nos relatórios. Use nos seus próprios cadastros.",
      "<b>👣 Trilha</b>: o aluno passa a abrir a apostila mais simples da série (e faz a prova da Trilha)."]],
    diario: ["O Diário de Classe: chamada, vistos, frequência, notas e registro das aulas.", [
      "<b>✅ Chamada</b>: escolha a data. O que veio do portal aparece com ⚡ (entrou com o código, concluiu o Básico, completou o Desafio ou o Turbo). Você só corrige: o que você marca vale mais que o ⚡.",
      "<b>P</b> presente, <b>F</b> falta, <b>J</b> falta justificada (conta como presença na frequência). Quem veio mas não entrou no portal: toque em P. <b>J🔁</b>: faltou, mas depois concluiu o Básico da missão daquele dia (reposição) — vira justificada sozinha.",
      "<b>🚦 Aula que não aconteceu normalmente</b>: na Chamada, abra “Esta aula não aconteceu normalmente?”. <b>🚫 Nenhum aluno veio</b> dá falta para todos. <b>🙋 O professor não pôde vir</b>, <b>🎉 Feriado</b> (inclusive os municipais), <b>🏫 Sem aula na escola</b> (formação, evento) e <b>📌 Outro motivo</b> não contam na frequência de ninguém. Escreva uma anotação para lembrar depois.",
      "<b>❔ Aulas sem registro</b>: quando você abre o painel, ele pergunta sozinho sobre as aulas que já passaram sem nenhuma presença, chamada ou registro, para você responder na hora.",
      "<b>Básico</b>: toque para avançar — ◐ Parcial (não vale nota) → ✓ Básico (1,0) → ✓✓ ×2 (reposição) → sem visto. <b>Desafio/Turbo</b>: 0,25 cada.",
      "<b>🗓️ Frequência</b> e <b>🧮 Boletim</b> são calculados sozinhos. A nota da prova e a da 📝 atividade de recuperação do portal entram sozinhas (⚡); se digitar outra nota, vale a sua (prova em papel de 0 a 5, recuperação de 0 a 10).",
      "<b>📝 Registro</b>: o que aconteceu em cada aula. <b>🟧 Recados</b>: aparecem no topo da chamada e na aba 🎤 Aula."]],
    panorama: ["Ver de uma vez como foram as aulas de todas as turmas.", [
      "<b>Datas pelo calendário da rede</b>: a prova cai no dia da turma na semana de Avaliação Bimestral. A <b>última aula antes da prova é sempre a 🔁 Revisão</b> (aula inteira de atividades, só com as missões que a turma estudou: escolha 🔁 Revisão na Missão de hoje ao ▶️ Iniciar). As aulas antes dela recebem as missões que faltam; se ainda sobrar aula, entra a <b>M4</b>. Missão que não couber fica para depois da prova, e a prova só cobra o que foi dado. Depois da prova: 2ª chamada/recuperação.",
      "<b>🧩 Alunos atípicos que frequentam</b>: abra o quadro no topo para ver quantas vezes cada aluno com PEI entrou no portal.",
      "Cada cartão é uma aula: a data, se aconteceu (✅) ou por que não (🚫 ninguém veio, 🙋 eu não fui, 🎉 feriado, 🏫 sem aula na escola), a missão dada e 👥 quantos alunos vieram.",
      "<b>❔ Sem registro</b>: dia de aula que já passou sem nada anotado. Abra o cartão e registre no Diário.",
      "<b>Próximas aulas se ajustam sozinhas</b>: mostram a próxima missão que ainda falta dar (se a turma repetiu a M1, a próxima vira M2). Se faltar aula para todas, aparece ⚠️ Não cabe no calendário.",
      "<b>A missão de cada aula</b> vem, nesta ordem: 📌 a Missão de hoje escolhida no painel; ⚡ a missão que a maioria dos alunos abriu no portal naquele dia; 📅 o cronograma (só quando não há outra informação).",
      "Toque no cartão para abrir a ✅ Chamada daquele dia (a lista de quem veio fica lá). A 📝 Prova usa este mesmo histórico para marcar as missões já dadas."]],
    prova: ["A prova do bimestre, feita no portal.", [
      "<b>Antes de ligar</b>: confira as missões marcadas. O painel já marca as missões <b>dadas de verdade</b> (com a data de cada aula, mesmo fora da ordem) e deixa desmarcadas as que ainda não foram dadas. Você pode desmarcar ou marcar à vontade.",
      "<b>📝 Ligar o Dia de prova</b>: o aluno digita o código e cai direto na prova. O relógio vai até o horário-limite; quando acaba, a prova é enviada sozinha.",
      "<b>3 alternativas</b>: toque no aluno 🧩 cujo PEI pede prova adaptada.",
      "<b>Liberar recuperação</b>: abre uma 2ª tentativa da prova só para aquele aluno. Vale a maior nota.",
      "<b>📝 Atividade de recuperação</b> (📝 Prova › coluna Atividade de recuperação): libere por aluno; ele faz a missão 📝 Recuperação no portal (só das missões que a turma estudou, sem dica) e a nota de 0 a 10 entra sozinha no Boletim.",
      "<b>⏹️ Encerrar</b> ao fim da aula. As notas vão sozinhas para o 🧮 Boletim do Diário."]],
    config: ["Configurações: importar alunos, ano letivo, “Iniciar a aula” e o 🎨 tema do portal.", [
      "<b>📥 Importar alunos</b>: cole a lista da turma (um nome por linha). Cada aluno ganha um código de 4 números.",
      "<b>📅 Ano letivo e aulas</b>: 🗓️ escolhe o <b>bimestre em uso</b> (o que os alunos veem e o que o painel usa; os outros ficam guardados), liga/desliga o ▶️ “tarefas só depois de Iniciar a aula” e começa um ano novo.",
      "<b>🎨 Tema</b>: decoração do portal por época do ano."]],
    importar: ["Colocar as listas de alunos no portal.", [
      "Cole a lista da turma (um nome por linha). Cada aluno ganha um código de 4 números.",
      "Imprima os cartões com os códigos para entregar aos alunos."]],
    ano: ["Configurações gerais.", [
      "<b>▶️ Tarefas só depois de Iniciar a aula</b>: ligado, as tarefas de cada turma abrem quando você inicia a aula e fecham no 🏁 Finalizar aula. Desligado, ficam sempre abertas.",
      "<b>Começar novo ano</b>: só no início do ano letivo. Desativa todos os alunos (o histórico fica guardado)."]]
  };
  const ajudaAba = k => { const a = AJUDA[k]; return a ? `<details class="pp-ajuda"><summary class="btn btn-peq pp-ic" title="❓ Para que serve esta aba e como usar" aria-label="Ajuda desta aba">❓</summary><div class="pp-ajuda-c"><p><b>❓ Para que serve esta aba e como usar</b></p><p>${a[0]}</p><ul>${a[1].map(x => `<li>${x}</li>`).join("")}</ul></div></details>` : ""; };
  /* 🗓️ quadro de horários (igual ao da página inicial): a aula que está acontecendo pisca; fora do horário, avisa que não há aula */
  const COR_S = { "5": ["#16a34a", "#dcfce7"], "6": ["#2563eb", "#dbeafe"], "7": ["#7c3aed", "#ede9fe"], "8": ["#ea580c", "#ffedd5"], "9": ["#db2777", "#fce7f3"] };
  const DIAS_L = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"], EMO_D = ["", "🌅", "🚀", "⚡", "🎯"]; let DUR = 75;
  const hm = x => { const [a, b] = x.split(":").map(Number); return a * 60 + b; }, fhm = m => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;
  function agoraBR() { const d = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000); return { dia: d.getDay(), m: d.getHours() * 60 + d.getMinutes() }; }
  function abrirHorarios() {
    DUR = cat().duracaoAula || 75;
    if (document.querySelector(".pp-hor-dlg")) return;
    const H = todasTurmas().filter(t => t.aula && t.aula.ini).map(t => ({ t, dia: t.aula.dia, i: hm(t.aula.ini) })).sort((a, b) => a.dia - b.dia || a.i - b.i || (a.t.serie.id === "5") - (b.t.serie.id === "5"));
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-hor-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🕘 Horários da Sala de Informática</h2><span class="row-btns"><button class="btn btn-peq" type="button" id="ph-imp" title="Folha A4 em pé para entregar aos alunos (preto e branco ou colorida); sai sempre com os horários atuais">🖨️ Imprimir horários</button><button class="btn btn-sec btn-peq" value="x">Fechar</button></span></div>
      <div class="pp-agora"><span class="pulso"></span><span id="ph-txt"></span></div><div class="pp-semana" id="ph-sem"></div>
      <p class="ajuda">Cada aula dura 1h15. A aula que está acontecendo agora pisca. Toque numa turma para abrir a aula dela no painel.</p></form></dialog>`);
    const desenhar = () => {
      const { dia, m } = agoraBR(); let html = "";
      for (let d = 1; d <= 4; d++) {
        const xs = H.filter(x => x.dia === d);
        html += `<div class="ph-dia ${d === dia ? "hoje" : ""}"><h3>${EMO_D[d]} ${DIAS_L[d]}</h3>` + xs.map((x, k) => {
          const f = x.i + DUR, cls = d === dia ? (m >= f ? "ja" : m >= x.i ? "ag" : "") : "", [cor, bg] = COR_S[x.t.serie.id] || ["#334155", "#f1f5f9"];
          const tarde = x.i >= 720, antes = k ? xs[k - 1].i >= 720 : null, rot = antes === tarde ? "" : `<div class="ph-turno ${tarde ? "tarde" : ""}">${tarde ? "🌇 Tarde" : "☀️ Manhã"}</div>`;
          return rot + `<a class="ph-aula ${cls} ${x.t.serie.id === "5" ? "cinco" : ""}" href="#/painel/aula/${x.t.id}" style="--cor:${cor};--bg:${bg}"><span class="t">${fhm(x.i)}</span><span class="tu">${esc(nomeTurma(x.t.id))}</span>${cls === "ag" ? '<span class="vivo">AGORA</span>' : ""}</a>`;
        }).join("") + "</div>";
      }
      dlg.querySelector("#ph-sem").innerHTML = html;
      const hoje = H.filter(x => x.dia === dia), atuais = hoje.filter(x => m >= x.i && m < x.i + DUR), prox = hoje.find(x => x.i > m);
      let txt;
      if (atuais.length) txt = `<b>Agora:</b> aula do <b>${atuais.map(x => esc(nomeTurma(x.t.id))).join("</b> e do <b>")}</b> (até ${fhm(atuais[0].i + DUR)})`;
      else if (prox) txt = `<b>Sem aula agora.</b> Próxima hoje: <b>${esc(nomeTurma(prox.t.id))}</b> às ${fhm(prox.i)}`;
      else { let d = dia, ach = null; for (let k = 1; k <= 7 && !ach; k++) { d = (dia + k) % 7; ach = H.find(x => x.dia === d); }
        txt = ach ? `<b>Sem aula agora.</b> Próxima: <b>${esc(nomeTurma(ach.t.id))}</b> na ${DIAS_L[ach.dia].toLowerCase()} às ${fhm(ach.i)}` : "<b>Sem aula agora.</b>"; }
      dlg.querySelector("#ph-txt").innerHTML = txt;
      dlg.querySelector(".pp-agora").classList.toggle("vivo", !!atuais.length);
    };
    desenhar(); const iv = setInterval(desenhar, 30000);
    // 🖨️ 26/11/2026: folha dos horários para os alunos (js/horarios-impressao.js), sempre com os horários atuais do catálogo
    dlg.querySelector("#ph-imp").onclick = async () => { if (!P.horariosImpressao) return P.aviso("Atualize a página (F5) e tente de novo.");
      const modo = await P.escolher("Vai imprimir em qual impressora?", [["mono", "⚫ Preto e branco"], ["cor", "🎨 Colorida"]]); if (!modo) return;
      P.horariosImpressao.abrir(todasTurmas(), modo); };
    document.body.appendChild(dlg); dlg.showModal();
    dlg.addEventListener("click", e => { if (e.target.closest(".ph-aula")) dlg.close(); });
    dlg.addEventListener("close", () => { clearInterval(iv); dlg.remove(); });
  }
  /* 🔎 PROCURAR ALUNO (22/11/2026, avaliação do painel): digita parte do nome e acha o aluno em qualquer turma,
     sem precisar saber a turma; toque no nome para abrir a 📇 ficha do aluno. */
  async function abrirBusca() {
    if (document.querySelector(".pp-busca-dlg")) return;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-busca-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🔎 Procurar aluno</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <input type="search" id="pb-q" class="pp-cod-busca" placeholder="Digite parte do nome (em todas as turmas)…" autocomplete="off">
      <label class="pp-auto"><input type="checkbox" id="pb-inat"> mostrar também os desativados</label>
      <div id="pb-l"><p class="ajuda">Carregando os alunos de todas as turmas…</p></div>
      <p class="ajuda">Toque no nome para abrir a 📇 ficha do aluno (turma, presença no portal, missões, apoios e atalhos).</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const inp = dlg.querySelector("#pb-q"); setTimeout(() => inp.focus(), 50);
    let todos = [];
    try { todos = (await Promise.all(todasTurmas().map(t => alunosDaTurma(t.id).catch(() => [])))).flat(); }
    catch (e) { dlg.querySelector("#pb-l").innerHTML = `<p class="ajuda">Não consegui carregar: ${esc(e.message || e)}</p>`; return; }
    const pintar = () => {
      const q = normNome(inp.value), inat = dlg.querySelector("#pb-inat").checked;
      const xs = todos.filter(a => (inat || a.ativo !== false) && (!q || normNome(a.nome).includes(q)));
      dlg.querySelector("#pb-l").innerHTML = !q ? `<p class="ajuda">${todos.filter(a => a.ativo !== false && !a.teste).length} alunos ativos em ${todasTurmas().length} turmas. Comece a digitar o nome.</p>`
        : xs.length ? `<ul class="pp-busca-lista">${xs.slice(0, 60).map(a => `<li><button type="button" class="pp-busca-it" data-pb="${esc(a.id)}"><b>${esc(a.nome)}</b> <span class="pp-busca-t">${esc(nomeTurma(a.turma))}</span>${a.atipico ? " 🧩" : ""}${a.trilha ? " 👣" : ""}${a.modoHelena ? " 🌟" : ""}${a.emCasa ? " 🏠" : ""}${a.teste ? " 🧪" : ""}${a.ativo === false ? " <small>(desativado)</small>" : ""}</button></li>`).join("")}</ul>${xs.length > 60 ? `<p class="ajuda">Mostrando 60 de ${xs.length}. Digite mais letras.</p>` : ""}`
        : `<p class="ajuda">Nenhum aluno com “${esc(inp.value)}”.</p>`;
      dlg.querySelectorAll("[data-pb]").forEach(b => b.onclick = () => { const a = todos.find(x => x.id === b.dataset.pb); dlg.close(); abrirFicha(a); });
    };
    inp.oninput = pintar; dlg.querySelector("#pb-inat").onchange = pintar;
    inp.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); const b = dlg.querySelector("[data-pb]"); if (b) b.click(); } };
    pintar();
  }
  /* 📇 FICHA DO ALUNO (22/11/2026): tudo de um aluno numa janela só, com atalhos para o relatório, a turma e o diário */
  async function abrirFicha(a) {
    if (!a) return;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-ficha-dlg"><form method="dialog"><div class="pp-hor-top"><h2>📇 ${a.atipico ? "🧩 " : ""}${esc(a.nome)}</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <p class="pp-ficha-tags"><span class="pp-ficha-tag">🏫 ${esc(nomeTurma(a.turma))}</span>${a.ativo === false ? `<span class="pp-ficha-tag cinza">desativado</span>` : ""}${a.trilha ? `<span class="pp-ficha-tag">👣 Trilha Passo a Passo</span>` : ""}${a.modoHelena ? `<span class="pp-ficha-tag">🌟 Modo Helena</span>` : ""}${a.emCasa ? `<span class="pp-ficha-tag">🏠 Estuda em casa${a.emCasaObs ? ": " + esc(a.emCasaObs) : ""}</span>` : ""}${a.teste ? `<span class="pp-ficha-tag cinza">🧪 aluno de teste</span>` : ""}${a.outraTurma ? `<span class="pp-ficha-tag">🏫 frequenta a aula do ${esc(nomeTurma(a.outraTurma))}</span>` : ""}
        <button type="button" class="btn btn-link btn-peq" id="pf-cod" title="O código é pessoal: mostre só para o próprio aluno">🔑 Ver código</button></p>
      <div class="pp-dlg-btns"><a class="btn" href="#/painel/relatorio/${esc(a.id)}">📄 Relatório do aluno (PDF)</a><a class="btn btn-sec" href="#/painel/turma/${esc(a.turma)}" id="pf-turma" title="Abre a turma com as opções deste aluno (código, nome, apoios, Trilha…)">⚙️ Opções do aluno na turma</a><a class="btn btn-sec" href="#/painel/diario/${esc(a.turma)}/frequencia">🗓️ Frequência da turma</a></div>
      <div id="pf-c"><p class="ajuda">Carregando o que ele fez no portal…</p></div>
      ${a.atipico ? `<details class="pp-apoios" ${a.apoio ? "open" : ""}><summary><strong>🧩 Apoios</strong></summary><div class="ap-lista">${cartaoApoio(a)}</div></details>` : ""}</form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelector("#pf-cod").onclick = e => { e.target.outerHTML = `<span class="pp-ficha-tag">🔑 <b class="pp-cod">${esc(a.codigo)}</b></span>`; };
    dlg.querySelector("#pf-turma").onclick = () => { try { sessionStorage.setItem("painel:abrirAluno", a.id); } catch (e) {} dlg.close(); };
    dlg.querySelectorAll("a[href^='#/']").forEach(x => x.addEventListener("click", () => setTimeout(() => dlg.open && dlg.close(), 0)));
    try {
      const prog = (await db().collection("progresso").where("alunoId", "==", a.id).get()).docs.map(d => ({ id: d.id, ...d.data() }));
      await Promise.all([...new Set(prog.map(p => p.aid))].map(id => P.carregarApostila(id).catch(() => null)));
      const dias = new Set(); prog.forEach(p => Object.keys(p.dias || {}).forEach(d => dias.add(d)));
      const ds = [...dias].sort(), ult = ds[ds.length - 1];
      const ms = prog.filter(p => p.mid && p.mid !== "rc" && P.conteudo[p.aid] && P.doPeriodo(cat().apostilas.find(y => y.id === p.aid) || {}))
        .sort((x, y) => (x.aid < y.aid ? -1 : x.aid > y.aid ? 1 : (+String(x.mid).slice(1) || 99) - (+String(y.mid).slice(1) || 99)));
      const cheio = v => v && v[1] && v[0] === v[1];
      const linha = p => { const C = P.conteudo[p.aid], b = p.basico || [0, 0];
        return `<tr><td>${esc(rotMis(C, p.mid))}${/trilha/.test(p.aid) ? " <small>👣</small>" : ""}</td><td>${p.basicoOk ? "✔" : `${b[0]}/${b[1]}`}</td><td>${cheio(p.desafio) ? "⭐" : p.desafio && p.desafio[1] ? `${p.desafio[0]}/${p.desafio[1]}` : "—"}</td><td>${cheio(p.turbo) ? "🚀" : p.turbo && p.turbo[1] ? `${p.turbo[0]}/${p.turbo[1]}` : "—"}</td><td><small>${Object.keys(p.dias || {}).sort().map(d => dataBR(d).slice(0, 5)).join(", ")}</small></td></tr>`; };
      dlg.querySelector("#pf-c").innerHTML = `<div class="pp-ficha-num"><span><b>${dias.size}</b> dia${dias.size === 1 ? "" : "s"} no portal</span><span>Último acesso: <b>${ult ? dataBR(ult) : "nunca"}</b></span><span><b>${ms.filter(p => p.basicoOk).length}</b> Básico${ms.filter(p => p.basicoOk).length === 1 ? "" : "s"} concluído${ms.filter(p => p.basicoOk).length === 1 ? "" : "s"}</span></div>
        ${ms.length ? `<div class="tabela-wrap"><table class="pp-tabela pp-ficha-tab"><thead><tr><th>Missão (bimestre em uso)</th><th>Básico</th><th>Desafio</th><th>Turbo</th><th>Dias</th></tr></thead><tbody>${ms.map(linha).join("")}</tbody></table></div>` : `<p class="ajuda">Ainda não fez nenhuma missão neste bimestre.</p>`}
        <p class="ajuda">Notas, frequência e prova: 📄 Relatório do aluno ou 📒 Diário › 🧮 Boletim.</p>`;
    } catch (e) { dlg.querySelector("#pf-c").innerHTML = `<p class="ajuda">Não consegui carregar o progresso: ${esc(e.message || e)}</p>`; }
  }
  /* 📅 MINHA SEMANA (22/11/2026): de segunda a sexta, cada aula com a turma, o horário, a missão (dada ou prevista),
     quem veio e os recados pendentes da turma; o que já passou sem registro aparece com ❔. Toque no cartão = Chamada do dia. */
  async function abrirSemana() {
    if (document.querySelector(".pp-semana-dlg")) return;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-semana-dlg"><form method="dialog"><div class="pp-hor-top"><h2>📅 Minha semana</h2><span class="row-btns"><button class="btn btn-sec btn-peq" type="button" data-sw="-1">◀ Anterior</button><button class="btn btn-sec btn-peq" type="button" data-sw="0">Hoje</button><button class="btn btn-sec btn-peq" type="button" data-sw="1">Próxima ▶</button><button class="btn btn-sec btn-peq" value="x">Fechar</button></span></div>
      <div id="sw-c"><p class="ajuda">Carregando as aulas de todas as turmas…</p></div>
      <p class="ajuda">✅ dada · ❔ já passou e está sem registro · “previsto” = o que o cronograma planejou · 🟧 recados seus pendentes para a turma. Toque num cartão para abrir a ✅ Chamada daquele dia.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const turmas = todasTurmas().filter(t => t.aula && t.aula.ini);
    let hs, rec = {};
    try {
      [hs] = await Promise.all([Promise.all(turmas.map(t => historicoCache(t).catch(e => ({ t, erro: e })))),
        Promise.all(turmas.map(t => db().collection(DIARIO).doc(t.id).get().then(sn => { rec[t.id] = ((sn.exists && sn.data().lembretes) || []).filter(l => !l.feito).length; }).catch(() => {})))]);
    } catch (e) { dlg.querySelector("#sw-c").innerHTML = `<p class="ajuda">Não consegui carregar: ${esc(e.message || e)}</p>`; return; }
    const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    // no sábado e no domingo, abre já na semana que vem (é quando se planeja)
    let desl = [0, 6].includes(new Date(N.hoje() + "T12:00:00").getDay()) ? 1 : 0;
    const desenhar = () => {
      const seg = new Date(N.hoje() + "T12:00:00"); seg.setDate(seg.getDate() - ((seg.getDay() + 6) % 7) + 7 * desl);
      const dias = [0, 1, 2, 3, 4].map(k => { const d = new Date(seg); d.setDate(seg.getDate() + k); return iso(d); }), hoje = N.hoje();
      const col = dias.map((d, k) => {
        const xs = hs.filter(x => !x.erro).flatMap(x => x.linhas.filter(l => l.d === d).map(l => ({ l, t: x.t })))
          .sort((a, b) => (a.t.aula.ini > b.t.aula.ini ? 1 : -1));
        if (k === 4 && !xs.length) return "";
        return `<div class="sw-dia ${d === hoje ? "hoje" : ""}"><h3>${["Segunda", "Terça", "Quarta", "Quinta", "Sexta"][k]} <small>${dataBR(d).slice(0, 5)}</small></h3>${xs.length ? xs.map(({ l, t }) => `<div class="sw-aula"><p class="sw-t"><b>${esc(t.aula.ini)}</b> ${esc(nomeTurma(t.id))}${rec[t.id] ? ` <a class="sw-rec" href="#/painel/diario/${t.id}/lembretes" title="Recados seus pendentes para esta turma">🟧 ${rec[t.id]}</a>` : ""}</p>${cartaoAula(l, t.id)}</div>`).join("") : `<p class="ajuda">Sem aula.</p>`}</div>`;
      }).join("");
      const semReg = hs.filter(x => !x.erro).flatMap(x => x.linhas.filter(l => dias.includes(l.d) && l.status === "semregistro")).length;
      dlg.querySelector("#sw-c").innerHTML = `<p class="sw-res">Semana de ${dataBR(dias[0]).slice(0, 5)} a ${dataBR(dias[4]).slice(0, 5)}${semReg ? ` · <b>❔ ${semReg} aula${semReg > 1 ? "s" : ""} sem registro</b>` : ""}</p><div class="sw-grade">${col}</div>`;
    };
    const desl0 = desl; dlg.querySelectorAll("[data-sw]").forEach(b => b.onclick = () => { desl = b.dataset.sw === "0" ? desl0 : desl + (+b.dataset.sw); desenhar(); });
    dlg.addEventListener("click", e => { if (e.target.closest(".pan-c, .sw-rec")) setTimeout(() => dlg.open && dlg.close(), 0); });
    desenhar();
  }
  /* 🔑 códigos da turma do horário (para o aluno que esqueceu): abre num modal, com busca e troca de turma */
  async function abrirCodigos() {
    if (document.querySelector(".pp-cod-dlg")) return;
    const turmas = todasTurmas(); let tid = escolherTurma(null, turmas);
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-cod-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🔑 Códigos dos alunos</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <div class="row-btns"><label>Turma <select id="pc-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
      <input type="search" id="pc-b" class="pp-cod-busca grow" placeholder="Procurar pelo nome…" autocomplete="off"></div><div id="pc-l"><p class="ajuda">Carregando…</p></div>
      <p class="ajuda">Abre na turma do horário. O código é pessoal: mostre só para o próprio aluno.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    let lista = [];
    const pintar = () => { const q = normNome(dlg.querySelector("#pc-b").value); const xs = lista.filter(a => !q || normNome(a.nome).includes(q));
      dlg.querySelector("#pc-l").innerHTML = xs.length ? `<ul class="pp-cod-lista">${xs.map(a => `<li${a.visitante ? ' class="visit"' : ""}><span>${a.atipico ? "🧩 " : ""}${esc(a.nome)}${tagVisitante(a)}${tagOutra(a)}</span><span class="cod">${esc(a.codigo || "—")}</span></li>`).join("")}</ul>` : `<p class="ajuda">Nenhum aluno encontrado.</p>`; };
    const carregarT = async () => { dlg.querySelector("#pc-l").innerHTML = `<p class="ajuda">Carregando…</p>`;
      try { const [pr, vi] = await Promise.all([alunosDaTurma(tid), visitantesDe(tid)]); lista = pr.filter(a => a.ativo !== false && !a.teste).concat(vi); } catch (e) { lista = []; toast("Não foi possível carregar: " + (e.message || e)); } pintar(); };
    dlg.querySelector("#pc-t").onchange = e => { tid = e.target.value; carregarT(); };
    dlg.querySelector("#pc-b").oninput = pintar;
    await carregarT(); dlg.querySelector("#pc-b").focus();
  }
  /* 🏁 finalizar a aula: grava o pódio (config/podio_<turma>, que os alunos leem) e fecha as tarefas até o fim da aula */
  async function carregarSerie(t) { await Promise.all(cat().apostilas.filter(a => a.serie === t.serie.id && P.doPeriodo(a)).map(a => P.carregarApostila(a.id).catch(() => null))); }
  /* 👑 rei da sala: o painel (placar ou ao vivo aberto) grava quem está em 1º lugar em config/rei_<turma>, que a tela do aluno lê */
  const reiGravado = {};
  function marcarRei(rk) { const rs = P.podio.reis(rk); rk.forEach(e => { e.rei = rs.includes(e); }); return rs; }
  // também grava a posição e os pontos de cada um (só os códigos internos, sem nomes): a tela do aluno mostra "você está em Nº lugar"
  // ▶️ só grava algo da aula (rei, pódio, fechamento automático) se a aula foi INICIADA hoje (14/11/2026):
  //    abrir o placar, o Ao vivo ou clicar para testar não gera registro nenhum.
  const _ini = {};
  async function aulaIniciadaHoje(tid) {
    const c = _ini[tid]; if (c && Date.now() - c.t < 30000) return c.v;
    let v = false; try { const g = await config(); if (g.modoAula === false) v = true; else { const sn = await db().collection("config").doc("hoje_" + tid).get(); v = !!(sn.exists && sn.data().iniciadaDia === N.hoje()); } } catch (e) {}
    _ini[tid] = { t: Date.now(), v }; return v;
  }
  // 🏁 botão Finalizar só fica disponível se a aula da turma foi iniciada hoje (em todo o painel)
  async function botaoFinalizar(btn, tid, rotulo) {
    if (!btn) return; _ini[tid] = null; const ok = await aulaIniciadaHoje(tid);
    btn.dataset.rot = btn.dataset.rot || rotulo || btn.innerHTML;
    btn.disabled = !ok; btn.classList.toggle("pp-off", !ok);
    btn.innerHTML = ok ? btn.dataset.rot : `🏁 Finalizar aula <small>(só depois de ▶️ Iniciar)</small>`;
    btn.title = ok ? "Finaliza a aula agora: fecha as tarefas e mostra o pódio" : "A aula desta turma ainda não foi iniciada hoje: não há o que finalizar.";
  }
  async function publicarRei(t, rk, congelado, outras) {
    if (!await aulaIniciadaHoje(t.id)) return;
    let dados, chave;
    if (congelado) { chave = N.hoje() + "|congelado"; dados = { dia: N.hoje(), congelado: true, em: Date.now() }; }
    else { const rs = marcarRei(rk), grupos = rs.map(e => ({ ids: e.ids, titulo: P.podio.tituloRei(e.avatares) })), lista = rk.map(e => ({ ids: e.ids, pos: e.pos, pontos: e.pontos, nomes: e.nomes, missao: e.missao || 0, extra: e.espera || 0 }));   // 🏆 20/11/2026: nomes OFICIAIS (como no projetor) para o placar na tela do aluno
      chave = N.hoje() + "|" + JSON.stringify(lista);
      dados = { dia: N.hoje(), congelado: false, ids: [].concat(...grupos.map(g => g.ids)), grupos, lista, total: rk.length, mid: rk.mid || "", em: Date.now() }; }
    if (reiGravado[t.id] === chave) return; reiGravado[t.id] = chave;
    // 🏫 também na turma de quem veio de outra turma para esta aula: assim eles veem a posição e o placar
    const alvo = [...new Set([t.id, ...(outras || [])])];
    try { await Promise.all(alvo.map(id => db().collection("config").doc("rei_" + id).set(dados, { merge: true }))); } catch (e) { reiGravado[t.id] = null; console.warn("rei", e); }
  }
  async function finalizarAula(t, alunos, prog, mid) {
    _ini[t.id] = null;
    if (!await aulaIniciadaHoje(t.id)) throw new Error("a aula desta turma não foi iniciada hoje. Nada foi registrado (toque em ▶️ Iniciar aula antes)");
    await carregarSerie(t);
    const hoje = N.hoje();
    try { const sn = await db().collection("config").doc("palco_" + t.id).get(); const d = sn.exists ? sn.data() : null; if (d && d.dia) P.podio.setBonus(t.id, d.dia, d.xp); } catch (e) {}   // ⭐ XP da leitura guiada entra no pódio mesmo sem o placar aberto
    const rk = P.podio.ranking(alunos, prog, mid, hoje);
    await publicarRei(t, rk);
    const ranking = rk.map(e => ({ ids: e.ids, nomes: e.nomes, pontos: e.pontos, pos: e.pos, avatares: e.avatares.map(a => a || null), trilha: !!e.trilha }));
    await db().collection("config").doc("podio_" + t.id).set({ dia: hoje, mid, finalizadaEm: Date.now(), ranking });
    let ate = Date.now() + 60000;
    if (t.aula && t.aula.ini) { const d = new Date(), [H, M] = t.aula.ini.split(":").map(Number); d.setHours(H, M + (cat().duracaoAula || 75) + (cat().toleranciaTarefas || 15), 0, 0); ate = Math.max(ate, d.getTime()); }
    await db().collection("config").doc("liberar_" + t.id).set({ fechadaAte: ate, ate: 0 }, { merge: true });
    try { await db().collection("config").doc("hoje_" + t.id).set({ iniciadaDia: "", finalizadaEm: Date.now() }, { merge: true }); } catch (e) {}
    setTimeout(() => lembrarFamilias({ turma: t.id }).catch(e => console.warn("lembrete família", e)), 1500);   // 🎬 18/11/2026
    return rk;
  }
  // missão em que a turma realmente está hoje: a que tem mais alunos com progresso de hoje (empate: a do cronograma)
  function missaoDaTurmaHoje(prog, padrao) {
    const hoje = N.hoje(), quem = {};
    prog.forEach(p => { if (p.mid && p.dias && p.dias[hoje]) (quem[p.mid] = quem[p.mid] || new Set()).add(p.alunoId); });
    let melhor = padrao, n = quem[padrao] ? quem[padrao].size : 0;
    Object.keys(quem).forEach(m => { if (quem[m].size > n) { melhor = m; n = quem[m].size; } });
    return melhor;
  }
  // garante que a apostila de cada progresso esteja carregada (sem ela os pontos dariam 0: ex. aluno na trilha adaptada)
  async function carregarAids(prog) { const aids = [...new Set(prog.map(p => p.aid).filter(a => a && !P.conteudo[a]))];
    for (const a of aids) { try { await P.carregarApostila(a); } catch (e) {} } }
  /* 🖥️ MODO DE TELAS (23/11/2026, pedido do professor): "2" = a tela dele vai para o projetor (tudo fica no placar);
     "3" = projetor só para os alunos + monitor dele + Veyon: o placar no projetor fica limpo (só 🔊 som e ⛶ tela cheia) e
     📖 Leitura guiada, 🎡 Roleta e 🏁 Finalizar ficam no painel, na tela dele. Guardado neste computador (o placar, em outra aba, acompanha). */
  const modoTelas = () => { try { return localStorage.getItem("portal:telas") === "3" ? "3" : "2"; } catch (e) { return "2"; } };
  const setModoTelas = m => { try { localStorage.setItem("portal:telas", m); } catch (e) {} };
  P.modoTelas = modoTelas;
  // abre a 📖 leitura guiada ou a 🎡 roleta a partir do painel (modo 3 telas): carrega a turma e o progresso só enquanto estiverem abertas
  async function ferramentaLeitura(t, qual, op) {
    // 🎤 23/11/2026: "leitura"/"video"/"palco" abrem a Aula ao vivo (js/palco.js); "roleta" continua só a roleta
    if (P.palco && P.palco.aberto() && qual !== "roleta") { const ab = P.palco.aberto(); if (qual === "video" || qual === "leitura") ab.ir(qual, op); else ab.restaurar(); return; }
    if (document.querySelector(".pc-prof, .lgc, .lgc-escolha, .rl-cobre")) return;
    const modo = modoTelas(); let jan0 = null;
    if (qual !== "roleta" && modo === "3") jan0 = window.open("#/telao/" + t.id, "telao-" + t.id, "popup,width=1280,height=720");   // 2 telas: abre a janela do projetor já no clique (o navegador bloqueia se abrir depois)
    await carregarSerie(t);
    const PART = await participantes(t), alunos = PART.alunos, So = P.sons; let prog = [];
    const u1 = ouvirProg(PART.turmasProg, async lista => { prog = lista; }, () => {});
    await new Promise(r => setTimeout(r, 900));   // dá tempo de chegar a lista de quem está online
    const aberto = () => !!document.querySelector(".pc-prof, .lgc, .lgc-escolha, .rl-cobre");
    const rol = o => roleta(t, alunos, () => prog, PART.turmasProg, So, o);
    if (qual === "roleta") rol();
    else { const hjL = await missaoDeHoje(t); const aidL = hjL.aid || (cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha) || {}).id;
      const midL = hjL.fixo ? hjL.mid : missaoDaTurmaHoje(prog, hjL.mid);
      let juntas = []; try { const sh = await db().collection("config").doc("hoje_" + t.id).get(); const hd = sh.exists ? sh.data() : {}; if (hd.dia === N.hoje()) juntas = hd.junto || []; } catch (e) {}
      if (!P.palco) return toast("Aula ao vivo indisponível.");
      P.palco.abrir({ t, alunos, getProg: () => prog, turmas: PART.turmasProg, turmasJuntas: juntas, aid: aidL, mid: midL, nomeTurma: nomeTurma(t.id), roleta: rol, modo, jan: jan0 }, Object.assign({ momento: qual === "palco" ? "espera" : qual }, op || {})); }
    let vazio = 0; const iv = setInterval(() => { if (aberto()) { vazio = 0; return; } if (++vazio >= 3) { clearInterval(iv); try { u1(); } catch (e) {} } }, 5000);
  }
  P.aulaAoVivo = ferramentaLeitura;
  async function missaoDeHoje(t) {
    const ap = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a));
    await P.carregarApostila(ap.id); const C = P.conteudo[ap.id];
    try { const h = await db().collection("config").doc("hoje_" + t.id).get(); if (h.exists && h.data().dia === N.hoje() && h.data().mid) { const hd = h.data();
      // ⭐ aula especial: a missão "ae" está na apostila especial gravada em hd.aid
      if (hd.mid === "ae" && hd.aid && hd.aid !== ap.id) { await P.carregarApostila(hd.aid).catch(() => null); if (P.conteudo[hd.aid]) return { mid: "ae", C: P.conteudo[hd.aid], fixo: true, aid: hd.aid }; }
      return { mid: hd.mid, C, fixo: true }; } } catch (e) {}
    return { mid: (await missaoSugerida(t, C)) || C.missoes[0].id, C };
  }
  /* 🎡 ROLETA DA LEITURA (20/11/2026, pedido do professor): dentro do placar ao vivo (o placar fica por trás).
     Sorteia só quem está ONLINE agora (código de 4 dígitos, sessão viva há menos de 3 min), inclusive quem veio de outra turma.
     Ninguém repete até TODOS os online terem sido sorteados; aí recomeça (config/roleta_<turma>.ja). O nome que aparece é o
     OFICIAL do cadastro, nunca o apelido; ele aparece grande no projetor e no meio da tela de todos os alunos. Som: clec-clec. */
  async function roleta(t, alunos, getProg, turmas, So, op) {
    op = op || {};   // 📖 leitura guiada: { leitura: true, pular: id que acabou de ser pulado, aoEscolher(aluno) }
    if (document.querySelector(".rl-cobre")) return;
    const msT = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;
    const ref = db().collection("config").doc("roleta_" + t.id);
    let ja = []; try { const sn = await ref.get(); const d = sn.exists ? sn.data() : {}; if (d.dia === N.hoje()) ja = d.ja || []; } catch (e) {}
    const cx = h(`<div class="rl-cobre" role="dialog" aria-label="Roleta da leitura"><div class="rl-caixa"><button type="button" class="rl-x" aria-label="Fechar a roleta">${op.leitura ? "✕ Fechar" : "✕ Voltar ao placar"}</button>
      <h2>🎡 Roleta da leitura</h2><p class="rl-sub">Quem vai ler o texto? A roleta decide!</p><div class="rl-area"></div><div class="rl-bts"></div><p class="rl-info"></p></div></div>`);
    document.body.appendChild(cx);
    const fechar = () => { cx.remove(); }; cx.querySelector(".rl-x").onclick = fechar;
    const area = cx.querySelector(".rl-area"), bts = cx.querySelector(".rl-bts"), info = cx.querySelector(".rl-info");
    const online = () => { const prog = getProg(), agora = Date.now();
      return alunos.filter(a => { const d = prog.find(p => p.tipo === "sessao" && p.alunoId === a.id); const pg = d && msT(d.ping); return pg && agora - pg < 180000; }); };
    const CORES = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#14b8a6", "#f97316", "#84cc16", "#6366f1"];
    const curto = n => P.podio.nomeCurto(n);
    function desenha(lista, ang) {
      const N2 = lista.length, R = 200, cxy = 210, fat = 360 / N2;
      const arco = i => { const a0 = (i * fat - 90) * Math.PI / 180, a1 = ((i + 1) * fat - 90) * Math.PI / 180;
        return N2 === 1 ? `<circle cx="${cxy}" cy="${cxy}" r="${R}" fill="${CORES[0]}"/>` : `<path d="M${cxy},${cxy} L${cxy + R * Math.cos(a0)},${cxy + R * Math.sin(a0)} A${R},${R} 0 ${fat > 180 ? 1 : 0} 1 ${cxy + R * Math.cos(a1)},${cxy + R * Math.sin(a1)} Z" fill="${CORES[i % CORES.length]}" stroke="#fff" stroke-width="3"/>`; };
      const txt = (a, i) => { const m = i * fat + fat / 2, esq = m > 180;   // na metade esquerda, o nome gira 180° para não ficar de cabeça para baixo
        return `<text transform="rotate(${esq ? m + 90 : m - 90} ${cxy} ${cxy}) translate(${esq ? cxy - R * 0.58 : cxy + R * 0.58} ${cxy})" text-anchor="middle" dominant-baseline="middle" font-size="${N2 > 14 ? 13 : N2 > 8 ? 16 : 20}" font-weight="800" fill="#fff" stroke="rgba(0,0,0,.35)" stroke-width=".6">${esc(curto(a.nome))}</text>`; };
      area.innerHTML = `<div class="rl-roda"><svg viewBox="0 0 420 420" class="rl-svg" style="transform:rotate(${ang}deg)">${lista.map((a, i) => arco(i)).join("")}${lista.map(txt).join("")}<circle cx="210" cy="210" r="26" fill="#0f172a" stroke="#fff" stroke-width="5"/></svg><div class="rl-ponteiro" aria-hidden="true">▼</div></div>`;
    }
    function inicio() {
      const on = online(); let pool = on.filter(a => !ja.includes(a.id) && a.id !== op.pular), recomecou = false;
      if (on.length && !pool.length && op.pular && on.some(a => a.id !== op.pular)) pool = on.filter(a => a.id !== op.pular);
      if (on.length && !pool.length) { ja = ja.filter(id => !on.some(a => a.id === id)); pool = on.slice(); recomecou = true; }
      if (!on.length) { area.innerHTML = `<p class="rl-vazio">😴 Ninguém online agora.<br><small>Só entra na roleta quem está com o portal aberto (entrou com o código).</small></p>`; bts.innerHTML = ""; info.textContent = ""; return; }
      desenha(pool, 0);
      bts.innerHTML = `<button type="button" class="btn btn-grande btn-ok rl-girar">🎡 Girar a roleta!</button>`;
      const lidos = on.filter(a => ja.includes(a.id));
      info.innerHTML = `${recomecou ? "🔁 Todos os online já leram: a roleta recomeçou com todo mundo. " : ""}Na roleta: <b>${pool.length}</b> de ${on.length} online${lidos.length ? ` · já leram hoje: ${lidos.map(a => esc(curto(a.nome))).join(", ")}` : ""}`;
      bts.querySelector(".rl-girar").onclick = () => girar(pool);
    }
    const publicar = dados => Promise.all([...new Set([t.id, ...(turmas || [])])].map(id => db().collection("config").doc("roleta_" + id).set(Object.assign({ dia: N.hoje(), em: Date.now() }, dados), { merge: true }))).catch(e => console.warn("roleta", e));
    function girar(pool) {
      bts.innerHTML = ""; const n = pool.length, fat = 360 / n, k = Math.floor(Math.random() * n);
      // o ponteiro fica em cima (0°): a fatia k para embaixo dele
      const final = 360 * (5 + Math.floor(Math.random() * 2)) + (360 - (k * fat + fat / 2)) + (Math.random() - .5) * fat * 0.6;
      const svg = area.querySelector(".rl-svg"), T0 = performance.now(), DUR = 6500; let ultFat = -1;
      // 23/11/2026: a mesma roda gira no projetor e na tela dos alunos (mesmos nomes, mesmo ângulo final, mesmo tempo)
      publicar({ girando: true, id: null, nome: null, roda: { nomes: pool.map(a => curto(a.nome)), final, dur: DUR, t0: Date.now() } });
      const ease = x => 1 - Math.pow(1 - x, 3.2);
      const passo = agora => { if (!cx.isConnected) return; const x = Math.min(1, (agora - T0) / DUR), a = final * ease(x); svg.style.transform = `rotate(${a}deg)`;
        const f = Math.floor(((360 - (a % 360)) % 360) / fat); if (f !== ultFat) { ultFat = f; So && So.clec(); }
        if (x < 1) requestAnimationFrame(passo); else parou(pool[k]); };
      requestAnimationFrame(passo);
    }
    function parou(a) {
      if (!ja.includes(a.id)) ja.push(a.id);
      ref.set({ dia: N.hoje(), ja }, { merge: true }).catch(() => {});
      publicar({ girando: false, id: a.id, nome: a.nome, roda: null });
      So && So.sorteado();
      const big = h(op.leitura ? `<div class="rl-nome"><p class="rl-sup">📖 Quem vai ler este trecho é…</p><h1>${esc(a.nome)}</h1><div class="rl-bts2"><button type="button" class="btn btn-grande btn-ok rl-vai">✔ Pode ler!</button><button type="button" class="btn btn-grande btn-sec rl-pula">⏭ Pular (sortear outro)</button></div></div>`
        : `<div class="rl-nome"><p class="rl-sup">📖 Quem vai ler é…</p><h1>${esc(a.nome)}</h1><div class="rl-bts2"><button type="button" class="btn btn-grande btn-ok rl-de-novo">🎡 Sortear outro</button><button type="button" class="btn btn-grande btn-sec rl-volta">✕ Voltar ao placar</button></div></div>`);
      area.appendChild(big); P.podio.confete && P.podio.confete(big);
      if (op.leitura) {
        big.querySelector(".rl-vai").onclick = () => { fechar(); op.aoEscolher && op.aoEscolher(a); };
        // ⏭ pulou (vergonha, dificuldade…): volta para a roleta, sem contar como "já leu"
        big.querySelector(".rl-pula").onclick = () => { ja = ja.filter(id => id !== a.id); ref.set({ dia: N.hoje(), ja }, { merge: true }).catch(() => {}); op.pular = a.id; inicio(); };
      } else { big.querySelector(".rl-volta").onclick = fechar; big.querySelector(".rl-de-novo").onclick = inicio; }
    }
    inicio();
  }
  /* 🏆 Placar ao vivo (para o projetor): ranking que muda na hora; congela nos últimos 5 min; vira pódio ao finalizar */
  async function telaPlacar(u, tid) {
    const turmas = turmasDeAula(), t = turmas.find(x => x.id === tid) || turmas.find(x => x.id === escolherTurma(null, turmas));
    DUR = cat().duracaoAula || 75;
    document.body.classList.add("modo-placar");
    window.addEventListener("hashchange", function sai() { document.body.classList.remove("modo-placar"); window.removeEventListener("hashchange", sai); });
    await carregarSerie(t);
    const hj = await missaoDeHoje(t), C = hj.C; let mid = hj.mid; const missao = C.missoes.find(x => x.id === mid) || {};
    const PART = await participantes(t), alunos = PART.alunos;   // 👥 todos que participam desta aula (18/11/2026)
    const DSEM = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const dataHoje = () => { const d = new Date(N.hoje() + "T12:00:00"); return `${DSEM[d.getDay()]}, ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`; };
    const horaAgora = () => new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" });
    // faixa da marca (aparece nas fotos que os alunos tiram do placar e do pódio): professor em destaque, turma, data e hora
    const marca = `<div class="pl-marca"><img src="img/icone-192.png?v=f2" alt="" width="64" height="64"><div class="pl-marca-txt"><b>💻 Aula de Informática</b><span>com o <strong>${esc(cat().professor)}</strong> · ${esc(nomeTurma(t.id))}</span></div>
      <div class="pl-marca-data"><span class="pl-data">📅 ${dataHoje()}</span><span class="pl-hora" id="pl-hora">🕒 ${horaAgora()}</span></div></div>`;
    const el = tela(`<div class="pl-tela">${marca}<header class="pl-cab"><div><p class="pl-sup">🏆 Placar ao vivo · ${esc(nomeTurma(t.id))}</p><h1 id="pl-h1">${esc(missao.icone || "")} ${esc(missao.titulo || SIG(mid))}</h1>
        <p class="pl-aviso">Pontos do pódio (não são nota) · ${esc(cat().professor)}</p></div>
        <div class="pl-dir"><div class="pl-relogio" id="pl-rel"></div><div class="pl-bts"><button type="button" class="btn btn-peq btn-sec pl-som" id="pl-som"></button><button type="button" class="btn btn-peq pl-lg-bt" id="pl-leitura" title="Leitura guiada do “Para começar”: todos veem o mesmo trecho; a roleta escolhe quem lê">📖 Leitura guiada</button><button type="button" class="btn btn-peq pl-rol-bt" id="pl-roleta" title="Sorteia quem vai ler, entre os alunos online agora">🎡 Roleta da leitura</button><button type="button" class="btn btn-peq btn-sec" id="pl-tela">⛶ Tela cheia</button><button type="button" class="btn btn-peq" id="pl-fim">🏁 Finalizar aula</button><button type="button" class="btn btn-peq btn-sec" id="pl-volta" hidden>↩ Voltar ao placar</button></div></div></header>
      <div class="pl-corpo" id="pl-corpo"></div></div>`);
    let prog = [], pod = null, vendoPodio = false, finalizando = false, reiAntes = null, jaCongelou = false;
    const corpo = el.querySelector("#pl-corpo");
    // 🔊 som (só no computador do professor): o navegador exige um clique na página antes de tocar
    const So = P.sons, bSom = el.querySelector("#pl-som");
    const pintaSom = () => { if (!So) { bSom.hidden = true; return; } const ok = So.pronto();
      bSom.textContent = !So.ligado ? "🔇 Som desligado" : ok ? "🔊 Som ligado" : "🔊 Toque para ligar o som"; bSom.classList.toggle("pisca-som", So.ligado && !ok); };
    bSom.onclick = async () => { if (!So) return; if (So.ligado && (!So.pronto() || bSom.classList.contains("pisca-som"))) { /* "toque para ligar": só destrava (a música ambiente pode ter destravado o som um instante antes) */ await So.destravar(); So.teste(); } else { So.setLigado(!So.ligado); await So.destravar(); if (So.ligado) So.teste(); } pintaSom(); };
    el.addEventListener("click", async e => { if (So && e.target !== bSom && So.ligado && !So.pronto()) { await So.destravar(); pintaSom(); } });
    pintaSom();
    const relogio = () => { const { dia, m } = agoraBR(); const ini = t.aula && t.aula.ini ? hm(t.aula.ini) : null; if (ini == null || t.aula.dia !== dia) return { fora: true };
      const s = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000), seg = s.getHours() * 3600 + s.getMinutes() * 60 + s.getSeconds(), fim = (ini + DUR) * 60;
      return { antes: seg < ini * 60, depois: seg >= fim, r: fim - seg, fimTxt: fhm(ini + DUR) }; };
    const pintarPlacar = () => {
      if (vendoPodio) return;
      const rel = relogio(), congelado = !rel.fora && !rel.antes && !rel.depois && rel.r <= 300;
      if (congelado) { publicarRei(t, [], true, PART.turmasProg); if (!jaCongelou) { jaCongelou = true; So && So.congelou(); } corpo.innerHTML = `<div class="pl-cong"><p>🤫</p><h2>Placar congelado!</h2><p>Faltam menos de 5 minutos. O resultado só aparece no pódio… Corram!</p></div>`; return; }
      // a missão do placar é a que a turma está fazendo de verdade hoje (se a turma ainda está na M1, conta a M1), a não ser que o professor tenha fixado a missão do dia
      const m2 = hj.fixo ? mid : missaoDaTurmaHoje(prog, mid);
      if (m2 !== mid) { mid = m2; const mi = C.missoes.find(x => x.id === mid) || {}; el.querySelector("#pl-h1").textContent = `${mi.icone || ""} ${mi.titulo || SIG(mid)}`; }
      const rk = P.podio.ranking(alunos, prog, mid, N.hoje());
      publicarRei(t, rk, false, PART.turmasProg);
      const reiAgora = rk.filter(e => e.rei).map(e => e.ids.join("+")).join(",");
      if (reiAgora && reiAntes !== null && reiAgora !== reiAntes) So && So.coroa(); reiAntes = reiAgora;
      if (!rk.length) { corpo.innerHTML = `<div class="pl-cong"><p>⏳</p><h2>Esperando a turma entrar…</h2><p>O placar começa assim que os alunos entrarem com o código.</p></div>`; return; }
      let lista = corpo.querySelector(".pl-lista"); if (!lista) { corpo.innerHTML = `<div class="pl-lista"></div>`; lista = corpo.querySelector(".pl-lista"); }
      lista.style.height = rk.length * 4.6 + "rem";
      const vivos = new Set();
      rk.forEach((e, i) => { const k = e.ids.join("+"); vivos.add(k); let n = lista.querySelector(`[data-k="${CSS.escape(k)}"]`);
        const novo = h(P.podio.linhaPlacar(e, i));
        if (n) { n.className = novo.className; n.innerHTML = novo.innerHTML; n.style.top = i * 4.6 + "rem"; } else lista.appendChild(novo); });
      lista.querySelectorAll(".pl-lin").forEach(n => { if (!vivos.has(n.dataset.k)) n.remove(); });
    };
    const mostrarPodio = () => { if (!pod) return; vendoPodio = true; el.querySelector("#pl-volta").hidden = false;
      corpo.innerHTML = `<div class="pd-tela"><h2 class="pd-tit">🏆 Pódio da aula!</h2><p class="pd-credito">💻 Aula de Informática com o <b>${esc(cat().professor)}</b> · ${esc(nomeTurma(t.id))} · ${dataHoje()}</p>${P.podio.podioHTML(pod.ranking || [])}</div>`; P.podio.confete(corpo.querySelector(".pd-tela")); So && So.podio(); };
    el.querySelector("#pl-volta").onclick = () => { vendoPodio = false; el.querySelector("#pl-volta").hidden = true; corpo.innerHTML = ""; pintarPlacar(); };
    el.querySelector("#pl-roleta").onclick = () => roleta(t, alunos, () => prog, PART.turmasProg, So);
    // 📖 leitura guiada (20/11/2026): vídeo → leitura em trechos com a roleta → liberar
    // 🎤 23/11/2026: a leitura guiada mora na Aula ao vivo do painel (não no placar)
    { const bl = el.querySelector("#pl-leitura"); if (bl) bl.remove(); }
    // ⭐ XP da leitura guiada de hoje entra no placar (mesmo se o placar for reaberto)
    const u3 = P.podio.ouvirBonus(t.id, () => pintarPlacar());   // ⭐ XP da leitura guiada de hoje (o mesmo para placar, painel ao vivo e pódio)
    const pintaTelas = () => { const tres = modoTelas() === "3"; ["#pl-leitura", "#pl-roleta", "#pl-fim"].forEach(s => { const b = el.querySelector(s); if (b) b.hidden = tres; }); };
    pintaTelas(); addEventListener("storage", e => { if (e.key === "portal:telas" && document.body.contains(el)) pintaTelas(); });
    // modo 3 telas: a roleta é girada no painel do professor; aqui no projetor aparece a MESMA roda girando e depois o nome
    let plRolVisto = "", plRolCx = null;
    const u4 = db().collection("config").doc("roleta_" + t.id).onSnapshot(sn => { const r = sn.exists ? sn.data() : null;
      if (!r || r.dia !== N.hoje() || !r.em || Date.now() - r.em > 90000 || document.querySelector(".rl-cobre")) return;
      const k = r.em + (r.girando ? "g" : "n"); if (k === plRolVisto) return; plRolVisto = k; if (plRolCx) plRolCx.remove();
      plRolCx = h(`<div class="rol-aluno telao"><div>${r.girando ? (r.roda && P.rodaRoletaHTML ? `<h2 class="rol-tit-roda">🎡 A roleta está girando…</h2>${P.rodaRoletaHTML(r.roda)}` : `<p class="rol-ic rol-gira">🎡</p><h2>A roleta está girando…</h2>`)
        : `<div class="rol-festa" aria-hidden="true">${["🎉", "✨", "🎊", "⭐", "🎉", "✨", "🎊", "⭐", "🎉", "✨"].map((x, i) => `<i style="--k:${i}">${x}</i>`).join("")}</div><p class="rol-ic">📖</p><p class="rol-sup">Quem vai ler é:</p><h2>${esc(r.nome || "")}</h2>`}</div></div>`);
      document.body.appendChild(plRolCx); const cx2 = plRolCx; if (r.girando && r.roda && P.rodaGirar) P.rodaGirar(cx2, r.roda); else So && So.sorteado && So.sorteado();
      setTimeout(() => { if (cx2.isConnected) cx2.remove(); }, r.girando ? 15000 : 8000); }, () => {});
    el.querySelector("#pl-tela").onclick = () => { const d = document.documentElement; (document.fullscreenElement ? document.exitFullscreen() : d.requestFullscreen()).catch(() => {}); };
    const finalizar = async auto => { if (finalizando) return; finalizando = true;
      try { await finalizarAula(t, alunos, prog, mid); if (!auto) { toast("🏁 Aula finalizada!"); finalizarJuntas(t).catch(() => {}); } } catch (err) { toast("Não foi possível finalizar: " + (err.message || err)); } finalizando = false; };
    botaoFinalizar(el.querySelector("#pl-fim"), t.id);
    const ivFim = setInterval(() => { if (!document.body.contains(el)) { clearInterval(ivFim); return; } botaoFinalizar(el.querySelector("#pl-fim"), t.id); }, 30000);
    el.querySelector("#pl-fim").onclick = async () => { if (await P.confirmar("Finalizar a aula agora? As tarefas fecham e o pódio aparece aqui e na tela dos alunos.")) finalizar(false); };
    const u1 = ouvirProg(PART.turmasProg, async lista => { prog = lista; await carregarAids(prog); pintarPlacar(); }, err => toast("Placar: " + (err.message || err)));
    let jaVi = 0;
    const u2 = db().collection("config").doc("podio_" + t.id).onSnapshot(sn => { const d = sn.exists ? sn.data() : null;
      pod = d && d.dia === N.hoje() ? d : null; if (pod && pod.finalizadaEm !== jaVi) { jaVi = pod.finalizadaEm; mostrarPodio(); } });
    const iv = setInterval(() => {
      if (!document.body.contains(el)) { clearInterval(iv); u1(); u2(); try { u3(); u4(); } catch (e) {} return; }
      const ph = el.querySelector("#pl-hora"); if (ph) ph.textContent = "🕒 " + horaAgora();
      const rel = relogio(), r = el.querySelector("#pl-rel");
      if (rel.fora) r.innerHTML = `<span class="pl-r-txt">Fora do horário da aula</span>`;
      else if (rel.antes) r.innerHTML = `<span class="pl-r-txt">A aula ainda não começou</span>`;
      else if (rel.depois) { r.innerHTML = `<span class="pl-r-txt">⏰ Tempo esgotado</span>`; if (!pod && prog.length) aulaIniciadaHoje(t.id).then(ok => { if (ok) finalizar(true); }); }
      else { r.className = "pl-relogio" + (rel.r <= 300 ? " fim pisca" : rel.r <= 600 ? " fim" : ""); r.innerHTML = `⏱️ <b>${Math.floor(rel.r / 60)}:${String(rel.r % 60).padStart(2, "0")}</b><span class="pl-r-txt">termina às ${rel.fimTxt}</span>`; }
      if (!vendoPodio && !rel.fora && !rel.antes && !rel.depois && rel.r <= 300 && !corpo.querySelector(".pl-cong")) pintarPlacar();
    }, 1000);
  }

  /* 🔴 Ao vivo: quem entrou na aula hoje, em que parte da missão está, o que falta e quanto tempo falta para o fim da aula.
     Lê o progresso que o portal já grava (só leitura) e atualiza sozinho quando um aluno avança. */
  async function abrirAoVivo() {
    DUR = cat().duracaoAula || 75;
    if (document.querySelector(".pp-vivo-dlg")) return;
    const turmas = turmasDeAula(); let tid = escolherTurma(null, turmas), unsub = null, iv = null;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-vivo-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🔴 Ao vivo</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <div class="row-btns"><label>Turma <select id="pv-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label><span class="grow" id="pv-rel"></span><button type="button" class="btn btn-peq pp-placar-btn" id="pv-placar">🏆 Placar no projetor</button><button type="button" class="btn btn-peq" id="pv-fim">🏁 Finalizar aula</button></div>
      <div id="pv-c"><p class="ajuda">Carregando…</p></div>
      <p class="ajuda">Atualiza sozinho quando um aluno avança. “Parado” = sem nenhuma atividade há mais de 10 minutos.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal();
    dlg.addEventListener("close", () => { if (unsub) unsub(); if (unsub0) unsub0(); clearInterval(iv); dlg.remove(); });
    let estado = null;
    const hojeS = () => N.hoje(), hhmm = ms => { const d = new Date(ms); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); };
    const pinta = () => {
      if (!estado) return; const { t, alunos, prog, C, mid, aid } = estado, hoje = hojeS(), agora = Date.now();
      // relógio da aula
      const { dia, m } = agoraBR(), ini = t.aula && t.aula.ini ? hm(t.aula.ini) : null, fim = ini != null ? ini + DUR : null;
      let rel;
      if (ini == null || t.aula.dia !== dia) rel = `<span class="pv-rel fora">Hoje não é dia de aula desta turma${t.aula ? ` (${DIAS_L[t.aula.dia].toLowerCase()} às ${fhm(ini)})` : ""}.</span>`;
      else if (m < ini) rel = `<span class="pv-rel fora">A aula começa às ${fhm(ini)} (faltam ${ini - m} min).</span>`;
      else if (m >= fim) rel = `<span class="pv-rel fora">A aula terminou às ${fhm(fim)}.</span>`;
      else rel = `<span class="pv-rel">⏱️ <b>Faltam ${fim - m} min</b> para o fim da aula (${fhm(ini)}–${fhm(fim)})<span class="pv-barra"><i style="width:${Math.round(100 * (m - ini) / DUR)}%"></i></span></span>`;
      dlg.querySelector("#pv-rel").innerHTML = rel;
      if (!estado.fixo) { const m2 = missaoDaTurmaHoje(prog, estado.midPadrao); if (m2 !== mid) { estado.mid = m2; return pinta(); } }
      const missao = C.missoes.find(x => x.id === mid) || {};
      // 👑 rei da sala (mesma pontuação do placar); nos últimos 5 min não muda (placar congelado)
      const rk = P.podio.ranking(alunos, prog, mid, hoje), congelado = ini != null && t.aula.dia === dia && m >= fim - 5 && m < fim;
      if (!congelado) publicarRei(t, rk); else { marcarRei(rk); publicarRei(t, rk, true); }
      const reisV = rk.filter(e => e.rei), ehRei = new Set([].concat(...reisV.map(e => e.ids)));
      const linhas = alunos.map(a => {
        const ps = prog.filter(p => p.alunoId === a.id), ent = ps.find(p => p.tipo === "entrada"), entrou = ent && ent.dias && ent.dias[hoje];
        const daHoje = ps.filter(p => p.mid && p.dias && p.dias[hoje]).sort((x, y) => (y.atualizado || 0) - (x.atualizado || 0));
        const pm = ps.filter(p => p.mid === mid).sort((x, y) => (y.atualizado || 0) - (x.atualizado || 0))[0];
        const ult = Math.max(entrou || 0, ...daHoje.map(p => +p.atualizado || 0));
        const outra = daHoje[0] && daHoje[0].mid !== mid ? daHoje[0] : null;
        const tl = ps.find(p => p.tipo === "tela"), saidas = (tl && tl.saidas && +tl.saidas[hoje]) || 0;   // 🖥️ saídas da tela cheia hoje
        return { a, entrou, pm, ult, outra, saidas };
      });
      const dentro = linhas.filter(x => x.entrou).sort((x, y) => x.a.nome.localeCompare(y.a.nome, "pt-BR")), fora = linhas.filter(x => !x.entrou);
      // ⭐ XP e posição de cada aluno (mesma pontuação do placar) e ⚠️ quem precisa de atenção (14/11/2026)
      const xp = {}; rk.forEach(e => (e.ids || []).forEach(id => { xp[id] = e; }));
      const metade = ini != null && t.aula.dia === dia && m - ini > DUR / 2;
      const par10 = x => agora - x.ult > 600000 && !(x.pm && x.pm.basicoOk);
      const atencao = { parados: dentro.filter(par10), semComecar: dentro.filter(x => !x.pm && !par10(x)),
        atras: dentro.filter(x => metade && x.pm && !x.pm.basicoOk && !par10(x) && x.pm.basico && x.pm.basico[1] && x.pm.basico[0] / x.pm.basico[1] < .5) };
      const nomesA = l => l.map(x => esc(x.a.nome.split(" ").slice(0, 2).join(" "))).join(", ");
      atencao.tela = dentro.filter(x => x.saidas > 0).sort((x, y) => y.saidas - x.saidas);
      // 🎲 chutômetro (20/11/2026): quantos erros rápidos demais (menos de 4 s) cada aluno teve na missão de hoje
      const chutesDe = x => { try { const v = x.pm && x.pm.atv ? (typeof x.pm.atv === "string" ? JSON.parse(x.pm.atv) : x.pm.atv) : {}; return Object.values(v).reduce((t, st) => t + ((st && st.chutes) || 0), 0); } catch (e) { return 0; } };
      dentro.forEach(x => { x.chutes = chutesDe(x); });
      atencao.chute = dentro.filter(x => x.chutes >= 4).sort((x, y) => y.chutes - x.chutes);
      // 🔐 um computador por vez (20/11/2026): quem tentou entrar com um código que já estava aberto em outro computador hoje
      const msT = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;
      const ini0 = new Date(); ini0.setHours(0, 0, 0, 0);
      atencao.bloq = alunos.map(a => { const d = prog.find(p => p.tipo === "sessao" && p.alunoId === a.id); return d && d.bloqueio && msT(d.bloqueio.em) >= ini0.getTime() ? { a, b: d.bloqueio } : null; }).filter(Boolean);
      const nomesTela = atencao.tela.map(x => `${esc(x.a.nome.split(" ").slice(0, 2).join(" "))} (${x.saidas}×)`).join(", ");
      const boxAtencao = (atencao.parados.length + atencao.semComecar.length + atencao.atras.length + atencao.tela.length + atencao.chute.length + atencao.bloq.length)
        ? `<div class="pv-atencao"><p class="pv-at-tit">⚠️ Precisam de atenção agora</p>${atencao.tela.length ? `<p><b>🖥️ Saíram da tela cheia hoje:</b> ${nomesTela}</p>` : ""}${atencao.bloq.length ? `<p><b>🔐 Tentaram entrar com um código que já estava aberto em outro computador:</b> ${atencao.bloq.map(x => `${esc(x.a.nome.split(" ").slice(0, 2).join(" "))} (${hhmm(msT(x.b.em))}, tentou no ${esc(/^PC\d+$/.test(x.b.pc || "") ? "💻 PC " + x.b.pc.slice(2) : "computador " + (x.b.pc || "?"))}${/^PC\d+$/.test(x.b.pcDono || "") ? `, código aberto no 💻 PC ${esc(x.b.pcDono.slice(2))}` : ""}) <button type="button" class="btn btn-peq" data-lib-sessao="${esc(x.a.id)}" data-turma="${esc(x.a.turma || t.id)}" title="Use quando o próprio aluno trocou de computador: o computador antigo sai e o novo entra">🔓 Liberar entrada</button>`).join(" · ")}<br><small>Se o aluno está no computador certo e outra pessoa tentou entrar com o código dele, não libere.</small></p>` : ""}${atencao.chute.length ? `<p><b>🎲 Parecem estar chutando</b> (muitos erros rápidos demais): ${atencao.chute.map(x => esc(x.a.nome.split(" ").slice(0, 2).join(" ")) + ` (${x.chutes}×)`).join(", ")}</p>` : ""}${atencao.parados.length ? `<p><b>😴 Parados há mais de 10 min:</b> ${nomesA(atencao.parados)}</p>` : ""}${atencao.semComecar.length ? `<p><b>🚫 Entraram, mas não começaram a missão:</b> ${nomesA(atencao.semComecar)}</p>` : ""}${atencao.atras.length ? `<p><b>🐢 Atrasados</b> (passou da metade da aula e fizeram menos da metade do Básico): ${nomesA(atencao.atras)}</p>` : ""}</div>`
        : (dentro.length ? `<div class="pv-atencao ok"><p class="pv-at-tit">✅ Ninguém precisa de atenção agora</p></div>` : "");
      // 🏆 24/11/2026: o número grande é o MESMO do placar (missão + sala de espera + leitura guiada); embaixo, de onde veio cada parte
      const xpCel = (xm, xa) => { if (!xa || !xa.pontos) return xm ? `<b>${xm}</b> pts` : `<b>0</b> pts`;
        const dupla = xa.ids && xa.ids.length > 1, partes = [`⚡ ${xa.missao} da missão`];
        if (xa.pEsp) partes.push(`🚦 ${xa.pEsp} da sala de espera`); if (xa.pLei) partes.push(`📖 ${xa.pLei} da leitura guiada`);
        return `<b>${xa.pontos}</b> pts <small>${xa.pos}º lugar no placar${dupla ? " (dupla)" : ""}</small><small class="pv-xp-de">${partes.join(" + ")}</small>`; };
      const fr = (v, rot, cls) => { const [f, tt] = v || [0, 0]; if (!tt) return ""; const ok = f === tt;
        return `<span class="pv-n ${cls} ${ok ? "ok" : ""}" title="${rot}: ${f} de ${tt}">${rot} ${ok ? "✔" : f + "/" + tt}<i style="width:${Math.round(100 * f / tt)}%"></i></span>`; };
      const nB = dentro.filter(x => x.pm && x.pm.basicoOk).length, nD = dentro.filter(x => x.pm && x.pm.desafio && x.pm.desafio[1] && x.pm.desafio[0] === x.pm.desafio[1]).length,
        nT = dentro.filter(x => x.pm && x.pm.turbo && x.pm.turbo[1] && x.pm.turbo[0] === x.pm.turbo[1]).length, nPar = dentro.filter(x => agora - x.ult > 600000).length;
      dlg.querySelector("#pv-c").innerHTML = `<p class="pv-mis">📌 ${esc(missao.icone || "")} <b>${esc(missao.titulo || SIG(mid))}</b></p>
        <div class="pv-chips"><span class="pv-chip">👥 <b>${dentro.length}</b> de ${alunos.length} entraram hoje</span><span class="pv-chip ok">🟢 Básico ✔ <b>${nB}</b>/${dentro.length}</span>
          <span class="pv-chip">🟡 Desafio ✔ <b>${nD}</b></span><span class="pv-chip">🔴 Turbo ✔ <b>${nT}</b></span>${reisV.length ? `<span class="pv-chip rei">👑 ${reisV.map(e => `${P.podio.tituloRei(e.avatares).replace(/ da sala$/, "")}: <b>${e.nomes.map(esc).join(" & ")}</b> (${e.pontos} pts)`).join(" · ")}</span>` : ""}${nPar ? `<span class="pv-chip alerta">😴 Parados <b>${nPar}</b></span>` : ""}</div>
        ${dentro.length ? `${boxAtencao}<div class="tabela-wrap"><table class="pv-tab"><thead><tr><th>Aluno</th><th title="O mesmo número do placar e do pódio: XP da missão + pontos da sala de espera + XP da leitura guiada (embaixo, de onde veio cada parte). Com os mesmos pontos, fica na frente quem terminou o Básico primeiro">🏆 Pontos (placar)</th><th>Entrou</th><th>Progresso na missão de hoje</th><th>Situação</th><th>Última atividade</th></tr></thead><tbody>${dentro.map(({ a, entrou, pm, ult, outra, saidas, chutes }) => {
          const p = pm || {}, okB = !!p.basicoOk, falta = p.basico && p.basico[1] ? p.basico[1] - p.basico[0] : null, par = agora - ult > 600000;
          const sit = okB ? (p.turbo && p.turbo[1] && p.turbo[0] === p.turbo[1] ? `<span class="sit ok">🏆 Missão completa</span>` : `<span class="sit ok">✔ Básico feito (visto)</span>`)
            : falta === 0 && p.basicoAprov != null ? `<span class="sit wait" title="Terminou o Básico, mas o visto pede ${p.basicoLimiar || 70}% de aproveitamento">◐ Básico ${p.basicoAprov}% (visto com ${p.basicoLimiar || 70}%)</span>`
            : falta != null ? `<span class="sit wait">Faltam ${falta} do Básico</span>` : `<span class="sit bad">Ainda não começou a missão</span>`;
          const xa = xp[a.id];
          // ⚡ XP da missão (a barra do aluno); a célula mostra o total do placar com esta parte separada (24/11/2026)
          let atvA = {}; try { atvA = p.atv ? (typeof p.atv === "string" ? JSON.parse(p.atv) : p.atv) : {}; } catch (e) {}
          const xm = pm ? (typeof pm.xp === "number" ? P.podio.xpDe(pm, atvA) : P.podio.xpDoc(aid, mid, atvA)) : 0;   // 26/11/2026: o número que o aluno vê
          // 💻 em qual computador da sala o aluno está (número dado ao PC pelo atalho ?pc=N; 20/11/2026)
          const sS = prog.find(q => q.tipo === "sessao" && q.alunoId === a.id), pcN = sS && /^PC\d+$/.test(sS.pc || "") && msT(sS.ping) >= ini0.getTime() ? sS.pc.slice(2) : "";
          return `<tr class="${okB ? "feito" : par ? "parado" : "fazendo"}"><td data-rot="Aluno">${ehRei.has(a.id) ? `<span class="pv-coroa" title="Rei da sala: 1º lugar">${P.podio.coroa(22)}</span>` : ""}${a.atipico ? "🧩 " : ""}${esc(a.nome)}${pcN ? ` <span class="pv-pc" title="Computador da sala onde este aluno entrou">💻 PC ${esc(pcN)}</span>` : ""}${a.trilha ? " 👣" : ""}${tagTurma(a, estado.t)}${saidas ? ` <span class="pv-tela" title="Saiu da tela cheia ${saidas} vez(es) hoje">🖥️ saiu ${saidas}×</span>` : ""}${chutes >= 2 ? ` <span class="pv-tela pv-chute" title="Erros rápidos demais (menos de 4 segundos) nesta missão: sinal de chute">🎲 ${chutes} chutes</span>` : ""}${outra ? `<br><small>está na ${esc(rotMis(C, outra.mid))}</small>` : ""}</td><td data-rot="🏆 Pontos (placar)" class="pv-xp">${xpCel(xm, xa)}</td><td data-rot="Entrou">${hhmm(entrou)}</td>
            <td class="pv-bars" data-rot="Progresso">${fr(p.leitura, "📖 Leitura", "l")}${fr(p.basico, "🟢 Básico", "b")}${fr(p.desafio, "🟡 Desafio", "d")}${fr(p.turbo, "🔴 Turbo", "t")}${!pm ? "<small>—</small>" : ""}</td>
            <td data-rot="Situação">${sit}</td><td data-rot="Última atividade">${par ? "😴 " : ""}há ${Math.max(0, Math.round((agora - ult) / 60000))} min</td></tr>`; }).join("")}</tbody></table></div>`
        : `<p class="ajuda">Nenhum aluno desta turma entrou hoje ainda.</p>`}
        ${fora.length ? `<details class="pv-fora"><summary>👀 Alunos que faltaram (${fora.length}) · clique para ver</summary><p>${fora.map(x => esc(x.a.nome)).join(" · ")}</p></details>` : ""}`;
      dlg.querySelectorAll("[data-lib-sessao]").forEach(b => b.onclick = async () => { b.disabled = true;
        try { await db().collection("config").doc("liberar_" + b.dataset.turma).set({ sessaoLivre: { [b.dataset.libSessao]: firebase.firestore.FieldValue.serverTimestamp() } }, { merge: true });
          b.textContent = "✅ liberado: peça para ele entrar de novo"; toast("🔓 Entrada liberada: o aluno digita o código de novo no computador novo; o antigo sai sozinho."); }
        catch (e) { b.disabled = false; toast("Não foi possível liberar: " + (e.message || e)); } });
    };
    let unsub0 = null;
    const carregarT = async () => {
      if (unsub) { unsub(); unsub = null; } if (unsub0) { unsub0(); unsub0 = null; }
      dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Carregando…</p>`;
      const t = turmas.find(x => x.id === tid);
      const ap = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a));
      await P.carregarApostila(ap.id); await carregarSerie(t); const C = P.conteudo[ap.id], mid = (await missaoSugerida(t, C)) || C.missoes[0].id;
      const PART = await participantes(t), alunos = PART.alunos;   // 👥 todos que participam desta aula (18/11/2026)
      let fixo = false; try { const hh = await db().collection("config").doc("hoje_" + t.id).get(); fixo = hh.exists && hh.data().dia === N.hoje() && hh.data().mid === mid; } catch (e) {}
      estado = { t, alunos, prog: [], C, mid, midPadrao: mid, fixo, aid: ap.id };
      botaoFinalizar(dlg.querySelector("#pv-fim"), tid);
      const uB = [...new Set([t.id, ...(PART.turmasProg || [])])].map(id => P.podio.ouvirBonus(id, () => { if (estado && estado.t.id === tid) pinta(); }));   // ⭐ XP da leitura guiada (igual ao placar)
      unsub0 = () => uB.forEach(f => f());
      unsub = ouvirProg(PART.turmasProg, async lista => { if (estado && estado.t.id === tid) { estado.prog = lista; await carregarAids(estado.prog); pinta(); } },
        err => { dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Não foi possível acompanhar ao vivo: ${esc(err.message || err)}</p>`; });
    };
    dlg.querySelector("#pv-t").onchange = e => { tid = e.target.value; carregarT(); };
    dlg.querySelector("#pv-placar").onclick = () => window.open("#/painel/placar/" + tid, "_blank");
    dlg.querySelector("#pv-fim").onclick = async () => { if (!estado || !await P.confirmar("Finalizar a aula agora? As tarefas fecham e o pódio aparece no placar e na tela dos alunos.")) return;
      try { await finalizarAula(estado.t, estado.alunos, estado.prog, estado.mid); toast("🏁 Aula finalizada! O pódio está no placar."); finalizarJuntas(estado.t).catch(() => {}); } catch (err) { toast("Não foi possível finalizar: " + (err.message || err)); } };
    iv = setInterval(() => { pinta(); if (estado) botaoFinalizar(dlg.querySelector("#pv-fim"), estado.t.id); }, 30000);
    try { await carregarT(); } catch (err) { dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Erro: ${esc(err.message || err)}</p>`; }
  }
  document.addEventListener("click", e => { if (e.target.closest("#pp-sino")) mostrarAvisos({ manual: true }); if (e.target.closest("#pp-ini")) { let tid; try { if (/^#\/painel\/aula/.test(location.hash)) tid = sessionStorage.getItem("painel:turma") || undefined; } catch (x) {} iniciarAula(null, { manual: true, tid }); } if (e.target.closest("#pp-busca")) abrirBusca(); if (e.target.closest("#pp-semana")) abrirSemana(); if (!e.target.closest(".pp-ajuda, .pp-conta")) document.querySelectorAll(".pp-ajuda[open], .pp-conta[open]").forEach(d => d.open = false); if (e.target.closest("#cfg-tema")) abrirTema(); { const pc = e.target.closest("[data-pan-dia]"); if (pc) try { sessionStorage.setItem("painel:diario:" + pc.dataset.panT, pc.dataset.panDia); } catch (x) {} } if (e.target.closest("#pp-hor")) abrirHorarios(); if (e.target.closest("#pp-cod")) abrirCodigos(); if (e.target.closest("#pp-vivo")) abrirAoVivo(); if (e.target.closest("#pp-placar")) window.open("#/painel/placar/" + escolherTurma(null, todasTurmas()), "_blank"); if (e.target.closest("#pp-fim")) finalizarAgora(); if (e.target.closest("#pp-tema")) abrirTema(); });
  // 🎨 tema do portal: automático pela data, ou ligado/desligado à mão (vale para todos os computadores)
  async function abrirTema() {
    if (document.querySelector(".pp-tema-dlg")) return;
    let atual = "auto"; try { const sn = await db().collection("config").doc("tema").get(); if (sn.exists) atual = sn.data().modo || "auto"; } catch (e) {}
    const cal = P.temaCalendario ? P.temaCalendario() : [], hojeT = P.temaPelaData ? P.temaPelaData(new Date()) : null, nomeHoje = (cal.find(x => x.id === hojeT) || {}).nome;
    const ops = [["auto", "📅 Automático pela data (recomendado)", `Entra e sai sozinho no calendário abaixo. Hoje: ${nomeHoje || "sem tema"}.`]]
      .concat([["byte", "🎮 Byte 8 bits (videogame antigo)", "Tema manual, sem data: o portal inteiro no estilo da página inicial, com o robozinho Byte. Fica até você trocar."]])
      .concat(cal.map(x => [x.id, x.nome + " agora", `No automático: de ${x.ini} a ${x.fim}`])).concat([["nenhum", "⚪ Sem tema", "Portal normal, mesmo nas datas comemorativas"]]);
    const dlg = h(`<dialog class="pp-dlg pp-tema-dlg"><form method="dialog"><h2>🎨 Tema do portal</h2>
      <p class="ajuda">Vale para todos os computadores (alunos, placar e o seu), a partir da próxima vez que a página abrir.</p>
      <div class="pp-tema-ops pp-tema-rolar">${ops.map(([v, r, d]) => `<label class="pp-tema-op"><input type="radio" name="tm" value="${v}" ${v === atual ? "checked" : ""}><span><b>${r}</b><small>${d}</small></span></label>`).join("")}</div>
      <p class="erro" id="tm-e" hidden></p>
      <div class="row-btns"><button type="button" class="btn" id="tm-ok">Salvar</button><button class="btn btn-sec" value="x">Fechar</button></div>
      <details class="pp-tema-reset"><summary>🔄 Refazer a janela do tema para uma turma inteira</summary>
        <p class="ajuda">Apaga o “já viu” das curiosidades e do desafio do relógio: na próxima entrada com o código, a janela abre de novo para todos da turma escolhida. Pontos e tarefas não mudam. Para um aluno só, use o ⚙️ ao lado do nome dele.</p>
        <div class="row-btns"><label>Turma <select id="tm-rt">${turmasDeAula().map(x => `<option value="${x.id}" ${x.id === escolherTurma(null, turmasDeAula()) ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
        <button type="button" class="btn btn-sec" id="tm-reset">🔄 Refazer para esta turma</button></div></details></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelector("#tm-reset").onclick = async () => { const tid = dlg.querySelector("#tm-rt").value;
      if (!await P.confirmar(`Refazer a janela do tema para toda a turma ${nomeTurma(tid)}? Na próxima entrada, cada aluno vê de novo as curiosidades com o relógio e o desafio.`, "Sim, refazer")) return;
      try { const q = await db().collection("progresso").where("turma", "==", tid).get(); const ds = q.docs.filter(d => /_temas$/.test(d.id));
        await Promise.all(ds.map(d => d.ref.delete())); toast(`🔄 Pronto: ${ds.length} aluno(s) do ${nomeTurma(tid)} vão ver a janela do tema de novo ao entrar.`); }
      catch (err) { await P.aviso("Não foi possível refazer: " + (err.message || err)); } };
    dlg.querySelector("#tm-ok").onclick = async () => { const v = dlg.querySelector('input[name="tm"]:checked').value;
      try { await db().collection("config").doc("tema").set({ modo: v, em: Date.now() }); P.aplicarTemaGlobal && P.aplicarTemaGlobal(v); dlg.close(); toast("🎨 Tema salvo! Os alunos veem ao abrir ou recarregar a página."); }
      catch (err) { const e = dlg.querySelector("#tm-e"); e.textContent = "Não foi possível salvar: " + (err.message || err); e.hidden = false; } };
  }
  // 👥 aula dupla: ao finalizar uma turma iniciada junto com outra(s), pergunta se finaliza as outras também (17/11/2026)
  async function finalizarJuntas(t) {
    const hoje = N.hoje(), sn = await db().collection("config").doc("hoje_" + t.id).get(), hd = sn.exists ? sn.data() : {};
    if (hd.dia !== hoje || !(hd.junto || []).length) return;   // (o finalizarAula já apagou o iniciadaDia desta turma)
    const outras = [];
    for (const id of hd.junto) {
      if (id === t.id) continue;
      const [h2, l2] = await Promise.all([db().collection("config").doc("hoje_" + id).get(), db().collection("config").doc("liberar_" + id).get()]);
      if (h2.exists && h2.data().iniciadaDia === hoje && !(((l2.exists ? l2.data() : {}).fechadaAte || 0) > Date.now())) outras.push(id);
    }
    if (!outras.length || !await P.confirmar(`Esta aula foi iniciada junto com ${outras.map(nomeTurma).join(" e ")}. Finalizar ${outras.length > 1 ? "essas turmas" : "essa turma"} também?`)) return;
    for (const id of outras) {
      const t2 = todasTurmas().find(x => x.id === id); if (!t2) continue;
      const [hj, PT] = await Promise.all([missaoDeHoje(t2), participantes(t2)]);
      const prog = await lerProg(PT.turmasProg); await carregarAids(prog);
      await finalizarAula(t2, PT.alunos, prog, hj.fixo ? hj.mid : missaoDaTurmaHoje(prog, hj.mid));
    }
    toast("🏁 Finalizada também: " + outras.map(nomeTurma).join(" e ") + ".");
  }
  // 🏁 finalizar à força pelo cabeçalho do painel (turma do horário; dá para trocar)
  async function finalizarAgora() {
    if (document.querySelector(".pp-fim-dlg")) return;
    const turmas = turmasDeAula(), tid = escolherTurma(null, turmas);
    const dlg = h(`<dialog class="pp-dlg pp-fim-dlg"><form method="dialog"><h2>🏁 Finalizar a aula agora?</h2>
      <p><label>Turma <select id="ff-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label></p>
      <p class="ajuda">As tarefas fecham, o pódio aparece no placar (com confete) e cada aluno vê na tela a sua posição, também com confete. Os pontos do pódio não são nota.</p>
      <p class="erro" id="ff-e" hidden></p>
      <div class="row-btns"><button type="button" class="btn btn-grande" id="ff-ok">🏁 Sim, finalizar agora</button><button class="btn btn-sec" value="x">Cancelar</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const conferir = async () => { const ok = dlg.querySelector("#ff-ok"), tt = dlg.querySelector("#ff-t").value; await botaoFinalizar(ok, tt, "🏁 Sim, finalizar agora");
      const e = dlg.querySelector("#ff-e"); if (ok.disabled) { e.innerHTML = `A aula do <b>${esc(rotuloTurma(tt))}</b> não foi iniciada hoje, então não há o que finalizar.`; e.hidden = false; } else e.hidden = true; };
    dlg.querySelector("#ff-t").onchange = conferir; conferir();
    dlg.querySelector("#ff-ok").onclick = async () => {
      const b = dlg.querySelector("#ff-ok"), t = turmas.find(x => x.id === dlg.querySelector("#ff-t").value); b.disabled = true; b.textContent = "Finalizando…";
      try { const [hj, PT] = await Promise.all([missaoDeHoje(t), participantes(t)]);
        const prog = await lerProg(PT.turmasProg); await carregarAids(prog);
        await finalizarAula(t, PT.alunos, prog, hj.fixo ? hj.mid : missaoDaTurmaHoje(prog, hj.mid));
        dlg.close(); toast("🏁 Aula finalizada! Abra o 🏆 Placar para ver o pódio."); finalizarJuntas(t).catch(() => {});
      } catch (err) { const e = dlg.querySelector("#ff-e"); e.textContent = "Não foi possível finalizar: " + (err.message || err); e.hidden = false; b.disabled = false; b.textContent = "🏁 Sim, finalizar agora"; }
    };
  }

  /* ▶️ ASSISTENTE "INICIAR A AULA" (14/11/2026): as tarefas ficam fechadas até o professor iniciar a aula.
     Abre sozinho no horário de uma aula (uma vez por aula) ou pelo botão ▶️ Iniciar aula (reposição, fora do horário).
     Grava em config/hoje_<turma>: dia, missão (ou nenhuma = o aluno escolhe), travar e iniciadaDia. */
  function turmaAgora(turmas) {
    const ag = new Date(), min = ag.getHours() * 60 + ag.getMinutes(), dur = cat().duracaoAula || 75;
    return turmas.filter(t => t.aula && t.aula.dia === ag.getDay() && t.aula.ini).find(t => { const [h, m] = t.aula.ini.split(":").map(Number); const i = h * 60 + m; return min >= i - 15 && min < i + dur; }) || null;
  }
  const casaLivreAtivo = a => !!a.casaLivre && String(a.casaLivre) === String(new Date().getFullYear());
  async function sincronizarCasa(t, alunos) {
    const casa = {}, casaLivre = {}; alunos.filter(a => a.emCasa && a.ativo !== false).forEach(a => { casa[a.id] = true; if (a.casaLivre) casaLivre[a.id] = a.casaLivre; });
    await db().collection("config").doc("liberar_" + t.id).set({ casa, casaLivre }, { merge: true });
    return Object.keys(casa).length;
  }
  async function iniciarAula(u, op = {}) {
    const turmas = turmasDeAula(), atual = op.tid ? turmas.find(x => x.id === op.tid) : turmaAgora(turmas);
    const dlg = h(`<dialog class="pp-dlg pp-ini-dlg"><form method="dialog"><div id="ini-c"></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal();
    const fechado = new Promise(r => dlg.addEventListener("close", () => { dlg.remove(); r(); }));
    const c = dlg.querySelector("#ini-c");
    const passo2 = async () => {
      c.innerHTML = `<h2>▶️ Iniciar a aula</h2>
        <p><label>Turma <select id="ini-t">${turmas.map(x => `<option value="${x.id}" ${atual && x.id === atual.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label></p>
        <p class="pp-ini-casa" id="ini-casa" hidden></p>
        <p><label>📌 Missão de hoje <select id="ini-m"><option value="">Carregando…</option></select></label></p>
        <p><label class="pp-auto"><input type="checkbox" id="ini-trav" checked> 🔒 Travar nela (o aluno cai direto nesta missão e as outras ficam fechadas)</label></p>
        <div class="pp-ini-dupla" id="ini-dupla" hidden></div>
        <p><label class="pp-auto"><input type="checkbox" id="ini-espera" checked> 🚦 Sala de espera: as tarefas só abrem quando você der a 🏁 largada (quem chega cedo joga o aquecimento, monta o avatar e ganha pontos)</label></p>
        <p><label class="pp-auto"><input type="checkbox" id="ini-tela"> 🖥️ Exigir tela cheia dos alunos (fora da tela cheia, a apostila trava)</label></p>
        <p class="ajuda">Antes de você iniciar, os alunos já podem entrar e ler os textos, mas as tarefas ficam fechadas.</p>
        <p class="erro" id="ini-e" hidden></p>
        <div class="row-btns"><button type="button" class="btn btn-grande" id="ini-ok">▶️ Iniciar a aula</button><button class="btn btn-sec" value="x">Cancelar</button></div>`;
      const selT = c.querySelector("#ini-t"), selM = c.querySelector("#ini-m"), trav = c.querySelector("#ini-trav");
      let ctx = null;
      const carregar = async () => {
        const t = turmas.find(x => x.id === selT.value);
        selM.innerHTML = `<option>Carregando…</option>`; c.querySelector("#ini-casa").hidden = true;
        const ap = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a));
        await P.carregarApostila(ap.id); const C = P.conteudo[ap.id];
        const [sug, alunos, sit] = await Promise.all([missaoSugerida(t, C), alunosDaTurma(t.id), situacaoMissoes(t)]);
        ctx = { t, ap, C, alunos: alunos.filter(a => a.ativo !== false && !a.teste) };
        selM.innerHTML = `<option value="">— nenhuma: os alunos escolhem —</option>` + C.missoes.filter(m => m.id !== "rc").map(m => `<option value="${esc(m.id)}" ${m.id === sug ? "selected" : ""}>${esc(SIG(m.id))} · ${esc(((m.titulo || "").replace(/^[^–]*–\s*/, "")).slice(0, 60))}${m.id === sug ? " · ⭐ sugerida" : ""}${esc(sitMis(sit, m.id))}</option>`).join("") + (() => { const esp = cat().apostilas.filter(a => a.especial && a.serie === t.serie.id); return esp.length ? `<optgroup label="⭐ Aulas especiais">${esp.map(a => `<option value="esp|${esc(a.id)}">⭐ ${esc(a.titulo)}</option>`).join("")}</optgroup>` : ""; })();
        trav.disabled = !selM.value; if (!selM.value) trav.checked = false;
        const casa = ctx.alunos.filter(a => a.emCasa);
        const cx = c.querySelector("#ini-casa");
        await montarDupla(t).catch(e => console.warn("aula dupla", e));
        if (casa.length) { cx.innerHTML = `🏠 Esta turma tem <strong>${casa.length} aluno${casa.length > 1 ? "s" : ""} que estuda${casa.length > 1 ? "m" : ""} em casa</strong>: ${casa.map(a => esc(a.nome)).join(", ")}. Para ${casa.length > 1 ? "eles" : "ele"} as tarefas ficam sempre abertas.`; cx.hidden = false; }
      };
      // 👥 AULA DUPLA (17/11/2026): turmas com aula no mesmo dia e horário podem ser iniciadas juntas
      //    (cada uma com a sua missão e o seu diário) ou separadas. Desliga em Configurações › "Nunca juntar turmas".
      let dupla = null; const AULA_DUPLA = false;
      const montarDupla = async t => {
        const bx = c.querySelector("#ini-dupla"); dupla = null; bx.hidden = true; bx.innerHTML = "";
        // 26/11/2026: desligado de vez (o 5º ano, que dividia horário, virou 🎒 Agregados; nenhuma turma coincide mais)
        if (!AULA_DUPLA) return;
        const g = await config(); if (g.nuncaJuntar) return;
        const par = turmas.filter(x => x.id !== t.id && x.aula && t.aula && x.aula.ini && x.aula.dia === t.aula.dia && x.aula.ini === t.aula.ini);
        if (!par.length) return;
        const hojeD = N.hoje(), jaIni = {};
        await Promise.all(par.map(x => db().collection("config").doc("hoje_" + x.id).get().then(sn => { jaIni[x.id] = sn.exists && sn.data().iniciadaDia === hojeD; }).catch(() => {})));
        const livres = par.filter(x => !jaIni[x.id]); if (!livres.length) return;
        bx.innerHTML = `<p><b>👥 No mesmo horário também tem aula ${livres.length > 1 ? "das turmas" : "da turma"} ${livres.map(x => esc(nomeTurma(x.id))).join(", ")}.</b></p>
          <p><label class="pp-auto"><input type="radio" name="ini-dp" value="so" checked> Iniciar só ${esc(nomeTurma(t.id))}</label></p>
          <p><label class="pp-auto"><input type="radio" name="ini-dp" value="juntas"> Iniciar ${livres.length > 1 ? "todas" : "as duas"} juntas (cada turma com a sua missão e o seu diário)</label></p>
          <div id="ini-dp-ms" hidden>${livres.map(x => `<p><label>📌 Missão ${esc(nomeTurma(x.id))} <select data-dpm="${esc(x.id)}"><option>Carregando…</option></select></label></p>`).join("")}</div>
          <p class="ajuda">Juntas, as turmas fazem a aula ao mesmo tempo, mas a presença, o placar e o diário continuam separados por turma. Se ninguém de uma turma vier, ela fica com todos ausentes, normalmente.</p>`;
        bx.hidden = false; dupla = { livres, ctx: {} };
        await Promise.all(livres.map(async x => {
          const apx = cat().apostilas.find(a => a.serie === x.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === x.serie.id && P.doPeriodo(a));
          await P.carregarApostila(apx.id); const Cx = P.conteudo[apx.id];
          const [sg, al] = await Promise.all([missaoSugerida(x, Cx), alunosDaTurma(x.id)]);
          dupla.ctx[x.id] = { t: x, ap: apx, C: Cx, alunos: al.filter(a => a.ativo !== false && !a.teste) };
          const sel = bx.querySelector(`[data-dpm="${x.id}"]`);
          sel.innerHTML = `<option value="">— nenhuma: os alunos escolhem —</option>` + Cx.missoes.filter(m => m.id !== "rc").map(m => `<option value="${esc(m.id)}" ${m.id === sg ? "selected" : ""}>${esc(SIG(m.id))} · ${esc(((m.titulo || "").replace(/^[^–]*–\s*/, "")).slice(0, 60))}${m.id === sg ? " · ⭐ sugerida" : ""}</option>`).join("");
        }));
        bx.querySelectorAll('input[name="ini-dp"]').forEach(r => r.onchange = () => { bx.querySelector("#ini-dp-ms").hidden = bx.querySelector('input[name="ini-dp"]:checked').value !== "juntas"; });
      };
      // grava o início de UMA turma (o mesmo que o botão sempre fez)
      const gravarInicio = async (t, ap, C, alunos, v, esp, travar, tela, junto, espera) => {
        const hoje = N.hoje();
        if (esp) await P.carregarApostila(esp);
        const m = esp ? (P.conteudo[esp].missoes.find(x => x.id === "ae")) : C.missoes.find(x => x.id === v);
        const titulo = m ? (esp ? "⭐ Aula especial – " + m.titulo.replace(/^[^–]*– ?/, "") : m.titulo.replace(/ –.*/, "") + " – " + m.titulo.replace(/^[^–]*– ?/, "")) : "";
        const revisa = v === "rv" ? await revisaDaTurma(t) : [];
        await db().collection("config").doc("hoje_" + t.id).set({ dia: hoje, aid: esp || ap.base || ap.id, mid: v, titulo, travar: !!(v && travar), iniciadaDia: hoje, iniciadaEm: Date.now(), revisa, junto: junto || [], espera: !!espera, largadaEm: 0, agregados: [] }, { merge: true });
        await db().collection("config").doc("liberar_" + t.id).set({ fechadaAte: 0 }, { merge: true });
        await db().collection("config").doc("tela_" + t.id).set({ cheia: !!tela, dia: hoje, em: Date.now() }, { merge: true });
        await sincronizarCasa(t, alunos).catch(() => {});
        if (v) await registrarMissaoDoDia(t.id, { mid: v, titulo, travar: !!travar });
        try { sessionStorage.setItem("painel:ini:" + t.id + ":" + hoje, "1"); } catch (e) {}
      };
      const lerTela = () => db().collection("config").doc("tela_" + selT.value).get().then(sn => { const d = sn.exists ? sn.data() : {}; c.querySelector("#ini-tela").checked = !!d.cheia; }).catch(() => {});
      lerTela(); selT.addEventListener("change", lerTela);
      selT.onchange = () => carregar().catch(e => console.warn(e));
      selM.onchange = () => { trav.disabled = !selM.value; trav.checked = !!selM.value; };
      await carregar();
      c.querySelector("#ini-ok").onclick = async () => {
        const b = c.querySelector("#ini-ok"); b.disabled = true; b.textContent = "Iniciando…";
        try {
          const { t, ap, C } = ctx, esp = selM.value.startsWith("esp|") ? selM.value.split("|")[1] : null;
          const v = esp ? "ae" : selM.value, tela = !!c.querySelector("#ini-tela").checked, espera = !!c.querySelector("#ini-espera").checked;
          const juntas = dupla && (c.querySelector('input[name="ini-dp"]:checked') || {}).value === "juntas" ? dupla.livres : [];
          const grupo = [t.id, ...juntas.map(x => x.id)];
          await gravarInicio(t, ap, C, ctx.alunos, v, esp, trav.checked, tela, grupo.length > 1 ? grupo : [], espera);
          for (const x of juntas) {
            const cx = dupla.ctx[x.id]; if (!cx) continue;
            const vx = (c.querySelector(`[data-dpm="${x.id}"]`) || {}).value || "";
            await gravarInicio(x, cx.ap, cx.C, cx.alunos, vx, null, !!vx, tela, grupo, espera);
          }
          try { sessionStorage.setItem("painel:turma", t.id); } catch (e) {}
          const outras = juntas.length ? " + " + juntas.map(x => nomeTurma(x.id)).join(" + ") : "";
          dlg.close(); toast("▶️ Aula iniciada: " + nomeTurma(t.id) + outras + (v ? " · " + (esp ? "⭐ Aula especial" : rotMis(C, v)) + (trav.checked ? " 🔒" : "") : " · os alunos escolhem a missão") + (espera ? " · 🚦 Sala de espera: dê a 🏁 largada quando a turma estiver pronta" : ""));
          location.hash = "#/painel/aula/" + t.id + (v ? "/" + v : "");
        } catch (err) { const e = c.querySelector("#ini-e"); e.textContent = "Não foi possível iniciar: " + (err.message || err); e.hidden = false; b.disabled = false; b.textContent = "▶️ Iniciar a aula"; }
      };
    };
    if (op.manual) { passo2().catch(e => console.warn(e)); return fechado; }
    c.innerHTML = `<h2>👋 Olá, professor!</h2><p>${atual ? `Agora é a aula do <strong>${esc(nomeTurma(atual.id))}</strong>. ` : ""}Vai dar aula agora ou só vai olhar o sistema?</p>
      <div class="row-btns"><button type="button" class="btn btn-grande" id="ini-sim">🎤 Vou dar aula agora</button><button class="btn btn-sec" value="x">👀 Só vou olhar</button></div>`;
    c.querySelector("#ini-sim").onclick = () => passo2().catch(e => console.warn(e));
    return fechado;
  }
  const semanaCurta = d => ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][d] || "";
  /* 📣 AVISOS DO PROFESSOR PARA OS ALUNOS (14/11/2026): aparecem quando o aluno entra no portal, só se houver.
     Para: todos · só presenciais · só os que estudam em casa · um aluno só. Fica em config/avisos_<turma>
     (o aluno só guarda o id, nunca o nome). */
  async function abrirAvisosAlunos(t, alunos) {
    const ref = db().collection("config").doc("avisos_" + t.id);
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga"><form method="dialog"><div class="pp-hor-top"><h2>📣 Avisos para os alunos · ${esc(nomeTurma(t.id))}</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div><div id="av-c">Carregando…</div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const c = dlg.querySelector("#av-c"), PARA = { todos: "👥 Todos", presencial: "🏫 Só os presenciais", casa: "🏠 Só os que estudam em casa", aluno: "👤 Um aluno" };
    const nomeDe = id => (alunos.find(a => a.id === id) || { nome: "(aluno)" }).nome;
    const desenhar = async () => {
      const [sn, pg] = await Promise.all([ref.get(), progressoDaTurma(t.id).catch(() => [])]), lista = (sn.exists ? sn.data().lista : null) || [], hoje = N.hoje();
      const leram = id => pg.filter(p => p.tipo === "avisos" && ((p.lidos || {})[id] || 0) > 0).map(p => nomeDe(p.alunoId));
      const VZ = v => v > 0 ? `aparece ${v} vez${v > 1 ? "es" : ""}` : "aparece até você apagar";
      c.innerHTML = `<p class="pp-alunos-veem">👀 <b>Os alunos veem.</b> O aviso aparece para o aluno quando ele digita o código e entra no portal. Some sozinho depois da data escolhida (ou quando você apagar). Não escreva nada sigiloso.</p>
        ${lista.length ? `<ul class="pp-av-lista">${lista.map(a => `<li class="${a.ate && a.ate < hoje ? "venc" : ""}"><span><b>${esc(PARA[a.alvo] || a.alvo)}${a.alvo === "aluno" ? ": " + esc(nomeDe(a.alunoId)) : ""}</b>${a.ate ? ` · até ${esc(dataBR(a.ate))}` : ""} · ${VZ(a.vezes || 0)}<br>${esc(a.texto)}<br><small title="${esc(leram(a.id).join(", "))}">👀 lido por ${leram(a.id).length} aluno${leram(a.id).length === 1 ? "" : "s"}${leram(a.id).length ? ": " + esc(leram(a.id).slice(0, 6).join(", ")) + (leram(a.id).length > 6 ? "…" : "") : ""}</small></span><button class="btn btn-sec btn-peq" type="button" data-del="${a.id}">🗑️ Apagar</button></li>`).join("")}</ul>` : `<p>Nenhum aviso ativo nesta turma.</p>`}
        <h3>Novo aviso</h3>
        <p><label>Para <select id="av-para">${Object.entries(PARA).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select></label>
          <label id="av-al" hidden> Aluno <select id="av-aluno">${alunos.map(a => `<option value="${a.id}">${a.emCasa ? "🏠 " : ""}${esc(a.nome)}</option>`).join("")}</select></label></p>
        <p><label>Mensagem<br><textarea id="av-txt" rows="3" style="width:100%" placeholder="Ex.: Lembrem de terminar o Básico da Missão 2 até sexta!"></textarea></label></p>
        <p><label>Quantas vezes aparece para cada aluno <select id="av-vz"><option value="1">1 vez</option><option value="2">2 vezes</option><option value="3" selected>3 vezes</option><option value="5">5 vezes</option><option value="0">Até eu apagar</option></select></label></p>
        <p><label>Mostrar até <input type="date" id="av-ate" min="${hoje}"></label> <small>(em branco = sem data)</small></p>
        <p class="ajuda">O aluno lê um aviso de cada vez e só pode tocar em "OK, já li" depois de um tempinho de leitura (calculado pelo tamanho do texto).</p>
        <div class="row-btns"><button class="btn" type="button" id="av-ok">📣 Publicar aviso</button></div>`;
      const para = c.querySelector("#av-para"); para.onchange = () => { c.querySelector("#av-al").hidden = para.value !== "aluno"; };
      c.querySelectorAll("[data-del]").forEach(b => b.onclick = async () => { if (!await P.confirmar("Apagar este aviso?")) return; await ref.set({ lista: lista.filter(x => x.id !== b.dataset.del) }); toast("Aviso apagado."); desenhar(); });
      c.querySelector("#av-ok").onclick = async () => {
        const texto = c.querySelector("#av-txt").value.trim(); if (!texto) { toast("Escreva a mensagem do aviso."); return; }
        const novo = { id: "a" + Date.now(), texto, alvo: para.value, vezes: +c.querySelector("#av-vz").value, criadoEm: Date.now() };
        if (para.value === "aluno") novo.alunoId = c.querySelector("#av-aluno").value;
        const ate = c.querySelector("#av-ate").value; if (ate) novo.ate = ate;
        await ref.set({ lista: [...lista.filter(x => !(x.ate && x.ate < hoje)), novo] });
        toast("📣 Aviso publicado."); desenhar();
      };
    };
    desenhar().catch(e => { c.textContent = "Não foi possível abrir os avisos: " + (e.message || e); });
  }
  /* 📅 plano para quem estuda em casa: em que semana fazer cada missão (mesmo cronograma dos presenciais,
     pelo histórico do Panorama) e o dia da prova. Gravado em config/plano_<turma> uma vez por dia. */
  const semanaDe = d => { const x = new Date(d + "T12:00:00"), dw = (x.getDay() + 6) % 7; const ini = new Date(x); ini.setDate(x.getDate() - dw); const fim = new Date(ini); fim.setDate(ini.getDate() + 6); const f = y => y.toISOString().slice(0, 10); return [f(ini), f(fim)]; };
  // 🔁 missões que a turma já estudou (para a Revisão mostrar só elas aos alunos)
  async function revisaDaTurma(t) { try { const h = await historicoTurma(t); return Object.keys(h.dadas).filter(m => /^m\d+$/.test(m)).sort(); } catch (e) { return []; } }
  async function gravarPlanoCasa(t) {
    const hst = await historicoTurma(t); const C = hst.base && P.conteudo[hst.base.id]; if (!C) return;
    const quando = m => (hst.dadas[m] || [])[0] || (hst.linhas.find(l => l.mid === m && l.d >= N.hoje()) || {}).d || "";
    const missoes = C.missoes.filter(m => m.id !== "rc").map(m => { const d = quando(m.id); const [ini, fim] = d ? semanaDe(d) : ["", ""]; return { mid: m.id, titulo: m.titulo, ini, fim }; }).sort((a, b) => (a.ini || "9") < (b.ini || "9") ? -1 : (a.ini || "9") > (b.ini || "9") ? 1 : 0);
    const revisa = Object.keys(hst.dadas).filter(m => /^m\d+$/.test(m)).sort();
    await db().collection("config").doc("plano_" + t.id).set({ aid: hst.base.id, missoes, prova: hst.prova || "", revisa, atualizado: Date.now() });
  }
  async function perguntarInicio(u) {
    // 🏠 uma vez por dia, atualiza em todas as turmas a lista de quem estuda em casa (fica sem trava)
    if (!ss.get("painel:casa:" + N.hoje())) { ss.set("painel:casa:" + N.hoje(), "1"); turmasDeAula().forEach(t => alunosDaTurma(t.id).then(al => sincronizarCasa(t, al).then(() => gravarPlanoCasa(t))).catch(() => {})); }
    try {
      const g = await config(); if (g.modoAula === false) return;
      const t = turmaAgora(turmasDeAula()); if (!t) return;
      const hoje = N.hoje(), k = "painel:ini:" + t.id + ":" + hoje;
      if (ss.get(k)) return; ss.set(k, "1");
      const hs = await db().collection("config").doc("hoje_" + t.id).get();
      if (hs.exists && hs.data().iniciadaDia === hoje) return;
      await iniciarAula(u);
    } catch (e) { console.warn("iniciar aula", e); }
  }
  function ligarSair(el) { el.querySelector("#pp-sair").onclick = async () => { await auth().signOut(); location.hash = "#/painel"; }; }

  async function entrar() {
    const u = auth().currentUser;
    if (u && !u.isAnonymous && u.email === N.EMAIL_PROFESSOR) return u;
    const el = tela(`<nav class="migalhas"><a href="#/">Início</a> › Painel do professor</nav>
      <div class="painel pp-login"><h1>📊 Painel do professor</h1>
        <p>${esc(cat().portal)} · <strong>${esc(cat().professor)}</strong></p>
        <p>Entre com a <strong>conta Google de professor</strong>. Os alunos não têm acesso a esta área.</p>
        <button class="btn btn-grande" id="g" type="button">Entrar com o Google</button>
        <p class="erro" id="e" role="alert" hidden></p>
        <p class="ajuda">Use este painel só no seu computador. No computador dos alunos, saia do painel ao terminar.</p></div>`);
    return new Promise(ok => {
      el.querySelector("#g").onclick = async () => {
        const e = el.querySelector("#e"); e.hidden = true;
        try {
          if (u && u.isAnonymous) await auth().signOut();
          const prov = new firebase.auth.GoogleAuthProvider();
          prov.setCustomParameters({ prompt: "select_account", login_hint: N.EMAIL_PROFESSOR });
          const r = await auth().signInWithPopup(prov);
          if (r.user.email !== N.EMAIL_PROFESSOR) { await auth().signOut(); e.textContent = "Esta conta não é a do professor. Entre com " + N.EMAIL_PROFESSOR + "."; e.hidden = false; return; }
          ok(r.user);
        } catch (err) {
          e.textContent = /popup|blocked/i.test(err.code || "") ? "O navegador bloqueou a janela de entrada. Permita pop-ups para este site e tente de novo." :
            /unauthorized-domain|operation-not-supported/i.test(err.code || "") ? "Abra o painel pelo endereço do GitHub (1998welllaignier.github.io), não pela pasta do computador." : "Não foi possível entrar: " + (err.message || err);
          e.hidden = false;
        }
      };
    });
  }

  /* -------- Turmas: visão geral de uma turma -------- */
  async function telaTurmas(u, tid) {
    const turmas = todasTurmas();
    tid = escolherTurma(tid, turmas);
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "") + `<div class="painel pp-barra">
        <label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
        <label><input type="checkbox" id="inat"> mostrar desativados</label>
        <span class="pp-acoes"><button class="btn btn-sec btn-peq" id="add" type="button">➕ Adicionar aluno</button>
        <button class="btn btn-sec btn-peq" id="avs" type="button">📣 Avisos para os alunos</button><button class="btn btn-sec btn-peq" id="fimav" type="button" title="Recados para você mesmo, que aparecem na tela no fim de toda aula desta turma">⏰ Avisos para mim no fim da aula</button><button class="btn btn-sec btn-peq" id="cart" type="button">🖨️ Imprimir os códigos</button>
        <button class="btn btn-sec btn-peq" id="csv" type="button">📥 Planilha (CSV)</button>
        <button class="btn btn-sec btn-peq" id="att" type="button">🔄 Atualizar</button>${Object.values(P.catalogo.videosApresentacao || {}).some(Boolean) ? `<button class="btn btn-sec btn-peq" id="apr" type="button" title="Vídeos de apresentação do portal, para mostrar à direção, à Secretaria ou às famílias">🎬 Apresentação do portal</button>` : ""}</span></div>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/turma/" + e.target.value; };
    el.querySelector("#att").onclick = () => telaTurmas(u, t.id);
    el.querySelector("#fimav").onclick = () => editarAvisosFim(t);
    const apr = el.querySelector("#apr"); if (apr) apr.onclick = () => {
      const V = P.catalogo.videosApresentacao || {}, dlg = document.createElement("dialog"); dlg.className = "dlg-apresentacao";
      const bloco = (id, tit, sub) => id ? P.videoLeve(id, { titulo: tit, sub }) + `<p class="pp-video-acoes"><a class="btn btn-sec btn-peq" href="https://youtu.be/${id}" target="_blank" rel="noopener">↗️ Abrir no YouTube</a> <button class="btn btn-link btn-peq" type="button" data-copia="https://youtu.be/${id}">🔗 Copiar link</button></p>` : "";
      dlg.innerHTML = `<h2>🎬 Apresentação do Portal da Informática</h2>
        ${bloco(V.gestores, "🏛️ Para gestores", "Direção, coordenação e Secretaria de Educação (3:53).")}
        ${bloco(V.familias, "👨‍👩‍👧 Para alunos e famílias", "O mesmo vídeo que aparece na página inicial do portal (3:09).")}
        <p class="ajuda">Para enviar pelo WhatsApp, use “Copiar link”: o vídeo é não listado, só abre quem tem o link.</p>
        <div class="dlg-acoes"><button class="btn" type="button" data-fecha>Fechar</button></div>`;
      document.body.appendChild(dlg); P.ligarVideoLeve(dlg);
      dlg.querySelectorAll("[data-copia]").forEach(b => b.onclick = async () => { try { await navigator.clipboard.writeText(b.dataset.copia); toast("Link copiado!"); } catch (e) { toast(b.dataset.copia); } });
      dlg.querySelector("[data-fecha]").onclick = () => dlg.close(); dlg.onclose = () => dlg.remove(); dlg.showModal();
    };
    el.querySelector("#avs").onclick = async () => abrirAvisosAlunos(t, (await alunosDaTurma(t.id)).filter(a => a.ativo !== false && !a.teste));
    // 🎒 Agregados (26/11/2026): cada aluno tem a SUA série (alunos/<id>.serie); o progresso vem pelo aluno (o antigo, do 5º ano, ficou com a turma de antes)
    const ehAG = !!t.livre, alunosAG = ehAG ? await alunosDaTurma(t.id) : null;
    const seriesT = ehAG ? cat().series.filter(x => !x.agregados && alunosAG.some(a => a.serie === x.id)).map(x => x.id) : [t.serie.id];
    const aps = cat().apostilas.filter(a => seriesT.includes(a.serie) && P.doPeriodo(a) && !a.oculta);
    await Promise.all(cat().apostilas.filter(a => seriesT.includes(a.serie) && P.doPeriodo(a)).map(a => P.carregarApostila(a.id).catch(() => null)));
    const progPorAluno = lst => Promise.all(lst.map(v => db().collection("progresso").where("alunoId", "==", v.id).get().then(q => q.docs.map(d => ({ id: d.id, ...d.data() }))).catch(() => []))).then(x => x.flat());
    const [alunos0, prog0, visit] = await Promise.all([ehAG ? alunosAG : alunosDaTurma(t.id), ehAG ? progPorAluno(alunosAG) : progressoDaTurma(t.id), ehAG ? [] : visitantesDe(t.id)]);
    // 🏫 quem é de outra turma mas frequenta esta aula aparece no fim, com a etiqueta (o progresso dele vem da turma dele)
    const progVis = (await Promise.all(visit.map(v => db().collection("progresso").where("alunoId", "==", v.id).get().then(q => q.docs.map(d => ({ id: d.id, ...d.data() }))).catch(() => [])))).flat();
    const alunos = alunos0.concat(visit), prog = prog0.concat(progVis);
    const pm = {}; prog.forEach(p => { (pm[p.alunoId] = pm[p.alunoId] || []).push(p); });
    const missoes = []; aps.forEach(a => { const C = P.conteudo[a.id]; if (C) C.missoes.filter(m => m.id !== "rc").forEach(m => missoes.push({ aid: a.id, m, serie: a.serie })); });
    const corpo = el.querySelector("#corpo");
    /* 🎒 Juntar as turmas antigas do 5º ano nos Agregados (26/11/2026): um botão, sem apagar ninguém. Cada aluno vem com a série
       5º ano, o MESMO código (se já existir igual nos Agregados, sorteia outro e avisa) e o mesmo histórico (progresso fica no aluno). */
    if (ehAG) (async () => {
      const arq = cat().series.flatMap(x => x.turmas.filter(y => y.arquivada).map(y => ({ id: y.id, nome: y.nome, se: x })));
      const antigos = (await Promise.all(arq.map(y => alunosDaTurma(y.id).then(l => l.map(a => ({ ...a, _se: y.se.id }))).catch(() => [])))).flat();
      if (!antigos.length || !el.isConnected) return;
      const box = h(`<div class="painel pp-ag-migra"><h3>🎒 Juntar o 5º ano aqui</h3>
        <p>Ainda há <b>${antigos.length} aluno${antigos.length > 1 ? "s" : ""}</b> nas turmas antigas do 5º ano (${arq.map(y => esc(y.nome)).join(" e ")}). Toque no botão para trazer todos para os 🎒 Agregados, com a série 5º ano.</p>
        <p class="ajuda">Ninguém é apagado: o histórico, os pontos e o avatar continuam. O código continua o mesmo; só muda se já existir um igual aqui (o painel avisa quem mudou). Desativados continuam desativados.</p>
        <button class="btn btn-ok" type="button">🎒 Trazer os ${antigos.length} alunos do 5º ano</button></div>`);
      corpo.before(box);
      box.querySelector("button").onclick = async () => {
        if (!await P.confirmar(`Trazer ${antigos.length} aluno(s) do 5º ano para os Agregados? Eles passam a entrar pela fase 🎒 Agregados da página inicial.`, "Sim, trazer todos")) return;
        const b = box.querySelector("button"); b.disabled = true; b.textContent = "Juntando…";
        const mudou = [], erros = [];
        for (const a of antigos) { try { const c = await novoCodigo(a, t.id, { serie: a.serie || a._se, mesmoCodigo: true, manterAtivo: true }); if (String(c) !== String(a.codigo)) mudou.push(`${a.nome}: novo código ${c}`); } catch (e) { erros.push(a.nome); } }
        await P.aviso(`Pronto! ${antigos.length - erros.length} aluno(s) agora estão nos 🎒 Agregados.` + (mudou.length ? `\n\nCódigos que mudaram (já existia igual aqui):\n${mudou.join("\n")}` : "\n\nTodos continuam com o mesmo código.") + (erros.length ? `\n\n⚠️ Não deu para trazer: ${erros.join(", ")}. Tente de novo.` : ""));
        telaTurmas(u, t.id);
      };
    })();
    function desenhar() {
      const verInat = el.querySelector("#inat").checked;
      const lista = alunos.filter(a => verInat || a.ativo);
      if (!alunos.length) { corpo.innerHTML = `<div class="painel"><p>Nenhum aluno cadastrado nesta turma ainda.</p><p>Use <strong>➕ Adicionar aluno</strong> ou a aba <a href="#/painel/importar">📥 Importar alunos</a>.</p></div>`; return; }
      const cel = (a, x) => {
        const p = (pm[a.id] || []).find(q => (q.aid === x.aid || (cat().apostilas.find(y => y.id === q.aid) || {}).base === x.aid) && q.mid === x.m.id);
        if (!p) return `<td class="pp-c vazio" title="não começou">—</td>`;
        const b = p.basico || [0, 0], d = p.desafio || [0, 0];
        const tit = `Básico ${b[0]}/${b[1]}` + (d[1] ? ` · Desafio ${d[0]}/${d[1]}` : "") + (p.dias ? ` · dias: ${Object.keys(p.dias).sort().map(dataBR).join(", ")}` : "");
        return `<td class="pp-c ${p.basicoOk ? "ok" : "meio"} pp-clic" title="${esc(tit)} · clique para ver as respostas" data-ver="${esc(p.id)}" tabindex="0">${p.basicoOk ? "✔" : `${b[0]}/${b[1]}`}${d[1] && d[0] === d[1] ? "⭐" : ""}</td>`;
      };
      const dias = a => { const s = new Set(); (pm[a.id] || []).forEach(p => Object.keys(p.dias || {}).forEach(d => s.add(d))); return s.size; };
      const tabela = (L, M) => `<table class="pp-tabela"><thead><tr><th>Aluno</th><th>Código</th><th title="dias em que entrou no portal">Dias</th>${M.map(x => `<th title="${esc(x.m.titulo)}">${esc(x.m.icone)}<br><small>${esc(SIG(x.m.id))}</small><br><span class="pp-th-t">${esc(tituloCurto(x.m))}</span></th>`).join("")}<th></th></tr></thead>
        <tbody>${L.map(a => `<tr class="${a.ativo ? "" : "inativo"}${a.visitante ? " visit" : ""}"><td>${a.atipico ? '<span title="Aluno atípico (tem PEI)">🧩</span> ' : ""}${esc(a.nome)}${tagVisitante(a)}${tagOutra(a)}${a.trilha ? ' <span title="Usa a Trilha Passo a Passo">👣</span>' : ""}${a.emCasa ? ' <span title="Estuda em casa, pelo portal">🏠</span>' : ""}${a.lembreteFamilia ? ' <span title="Lembrete da família no fim de cada aula">🎬</span>' : ""}${a.emCasa && casaLivreAtivo(a) ? ' <span title="Todas as missões abertas, uma por dia (liberação semanal desligada neste ano)">🚀</span>' : ""}${a.ativo ? "" : " <small>(desativado)</small>"}</td><td class="pp-cod">${esc(a.codigo)}</td><td>${dias(a)}</td>${M.map(x => cel(a, x)).join("")}
          <td><button class="btn btn-link btn-peq" data-a="${a.id}" type="button">⚙️</button></td></tr>`).join("")}</tbody></table>`;
      const ajudaTopo = `<p class="ajuda">✔ Básico concluído · ⭐ Desafio completo · 3/5 = andamento do Básico · — não começou. Passe o mouse para ver os detalhes. <strong>${alunos.filter(a => a.ativo && !a.visitante).length}</strong> alunos ativos${alunos.some(a => a.visitante) ? ` + <strong>${alunos.filter(a => a.visitante).length}</strong> de outra turma que participam desta aula (🏫)` : ""}.</p>
        `;
      if (!ehAG) corpo.innerHTML = `<div class="painel pp-tabela-wrap">${ajudaTopo}${tabela(lista, missoes)}</div>`;
      else {   // 🎒 Agregados: uma tabela por série, cada uma com as missões da série
        const grupos = cat().series.filter(x => !x.agregados).map(x => ({ se: x, L: lista.filter(a => a.serie === x.id) })).filter(g => g.L.length);
        const semSerie = lista.filter(a => !cat().series.some(x => !x.agregados && x.id === a.serie));
        corpo.innerHTML = `<div class="painel pp-ag-info"><p>🎒 <b>Turma livre, sem horário.</b> Cada aluno faz as missões <b>da série dele</b>, na hora que quiser, <b>uma por vez</b>: a que ele começou fica aberta até terminar o 🟢 Básico; as outras ficam 🔒. A 🎮 Sala de jogos fica sempre aberta. A série de cada um fica no ⚙️ (🎓 Mudar a série).</p></div>
          ${semSerie.length ? `<div class="painel pp-ag-sem"><h3>⚠️ Sem série marcada (${semSerie.length})</h3><p class="ajuda">Estes alunos ainda não entram: toque no ⚙️ e escolha 🎓 Mudar a série.</p>${tabela(semSerie, [])}</div>` : ""}
          ${grupos.map(g => `<div class="painel pp-tabela-wrap pp-ag-grupo" style="--cor:${g.se.cor}"><h3>${esc(g.se.nome)} <small>(${g.L.length} aluno${g.L.length > 1 ? "s" : ""})</small></h3>${ajudaTopo}${tabela(g.L, missoes.filter(x => x.serie === g.se.id))}</div>`).join("")}`;
      }
      corpo.querySelectorAll("[data-a]").forEach(b => b.onclick = () => menuAluno(alunos.find(a => a.id === b.dataset.a)));
      corpo.querySelectorAll("[data-ver]").forEach(td => { const f = () => verRespostas(prog.find(p => p.id === td.dataset.ver)); td.onclick = f; td.onkeydown = e => { if (e.key === "Enter") f(); }; });
    }
    el.querySelector("#inat").onchange = desenhar;
    desenhar();
    try { const ab = sessionStorage.getItem("painel:abrirAluno"); if (ab) { sessionStorage.removeItem("painel:abrirAluno"); const x = alunos.find(y => y.id === ab); if (x) menuAluno(x); } } catch (e) {}

    function verRespostas(p) {
      if (!p) return;
      const a = alunos.find(x => x.id === p.alunoId) || { nome: "?" };
      let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (e) {}
      const { m, pages } = P.montarMissao(p.aid, p.mid);
      const sit = st => ({ certo: "✔ certo sem ajuda", ajuda: "✔ com ajuda", enviado: "📝 enviada (professor confere)", feito: "✔ feita" }[st && st.status] || "⬜ não feita");
      const resp = (at, st) => {
        if (!st) return "";
        const T = P.tipos[at.tipo] || {};
        let r = "";
        if (st.resposta) r = Object.values(st.resposta).map(x => `<blockquote>${esc(x).replace(/\n/g, "<br>")}</blockquote>`).join("");
        else if (st.conf) r = Object.values(st.conf).map(x => `<code>${esc(x)}</code>`).join(" · ");
        else if (T.resumoResposta) { try { r = T.resumoResposta(at, st); } catch (e) {} }
        return r ? `<div class="pp-resp">${r}</div>` : "";
      };
      const itens = [];
      pages.forEach(pg => (pg.atividades || []).forEach(at => { if ((P.tipos[at.tipo] || {}).semStatus) return; const st = atv[at.id];
        itens.push(`<li><strong>${esc(P.util.semTags(at.titulo || ""))}</strong> <small>(${esc(pg.rotulo)})</small><br>${sit(st)}${st && st.tentativas ? ` · ${st.tentativas} erro(s)` : ""}${resp(at, st)}</li>`); }));
      const dlg = h(`<dialog class="pp-dlg pp-dlg-larga"><h2>${esc(a.nome)}</h2><p>${esc(m.icone)} ${esc(m.titulo)}</p><ol class="pp-resps">${itens.join("")}</ol>
        <form method="dialog"><button class="btn">Fechar</button></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    }

    function menuAluno(a) {
      const dlg = h(`<dialog class="pp-dlg"><form method="dialog"><h2>${a.atipico ? "🧩 " : ""}${a.teste ? "🧪 " : ""}${a.emCasa ? "🏠 " : ""}${esc(a.nome)}</h2>${a.emCasa ? `<p class="pp-casa">🏠 <strong>Estuda em casa</strong>${a.emCasaObs ? ": " + esc(a.emCasaObs) : ""}${casaLivreAtivo(a) ? " · 🚀 todas as missões abertas, uma por dia (neste ano)" : ""}. Faz as missões <strong>em casa, pelo portal</strong>: o que ele fizer fica registrado nas missões, no placar e no relatório. No 📒 Diário, a presença dele é J automática.</p>` : ""}<p>${esc(nomeTurma(a.turma))} · código <strong>${esc(a.codigo)}</strong> · ${a.ativo ? "ativo" : "desativado"}${a.outraTurma ? ` · também frequenta a aula do ${esc(nomeTurma(a.outraTurma))}` : ""}</p>
        <div class="pp-dlg-btns">
          <a class="btn" href="#/painel/relatorio/${esc(a.id)}">📄 Relatório do aluno (PDF)</a>
          <button class="btn btn-sec" value="cod" type="button" data-x="cod">🔑 Gerar novo código</button>
          <button class="btn btn-sec" value="nome" type="button" data-x="nome">✏️ Corrigir nome</button>
          <button class="btn btn-sec" type="button" data-x="turma">🔀 Mudar de turma</button>
          ${(P.turma(a.turma) || {}).livre ? `<button class="btn btn-sec" type="button" data-x="serie">🎓 Mudar a série (Agregados) · hoje: ${esc((cat().series.find(y => y.id === a.serie) || { nome: "sem série" }).nome)}</button>` : ""}
          <button class="btn btn-sec" type="button" data-x="atipico">${a.atipico ? "🧩 Tirar a marcação de aluno atípico" : "🧩 Marcar como aluno atípico (tem PEI)"}</button>
          ${a.atipico ? `<button class="btn btn-sec" type="button" data-x="apoio">📝 Apoios na aula (só você vê)</button>` : ""}
          <button class="btn btn-sec" type="button" data-x="trilha">${a.trilha ? "👣 Tirar a Trilha Passo a Passo" : "👣 Usar a Trilha Passo a Passo (apostila diferenciada)"}</button>
          <button class="btn btn-sec" type="button" data-x="helena">${a.modoHelena ? "🌟 Tirar o Modo Helena" : "🌟 Usar o Modo Helena (Vez da Helena: cartas de um toque em dupla e trilha própria sozinho)"}</button>
          <button class="btn btn-sec" type="button" data-x="casa">${a.emCasa ? "🏠 Tirar “estuda em casa”" : "🏠 Marcar: estuda em casa (pelo portal)"}</button>
          ${a.emCasa ? `<button class="btn btn-sec" type="button" data-x="casalivre">${casaLivreAtivo(a) ? "📅 Voltar à liberação semanal (uma missão nova por semana)" : "🚀 Abrir todas as missões já, uma por dia (começou com o bimestre quase no fim)"}</button>` : ""}
          <button class="btn btn-sec" type="button" data-x="teste">${a.teste ? "🧪 Voltar a ser aluno comum" : "🧪 Marcar como aluno de teste (não conta na presença, no diário, nas notas e nos relatórios)"}</button>
          <button class="btn btn-sec" type="button" data-x="libera">🔓 Liberar as tarefas fora do horário (só este aluno: 1 h, 2 h, 3 h, o dia…)</button>
          <button class="btn btn-sec" type="button" data-x="avatar">🧍 Deixar montar o avatar de novo (salvou sem querer)</button>
          <button class="btn btn-sec" type="button" data-x="temas">🎉 Refazer a janela do tema (curiosidades + desafio do relógio)</button>
          <button class="btn btn-sec" type="button" data-x="outra">🏫 Frequenta a aula de outra turma</button>
          <button class="btn btn-sec" type="button" data-x="familia">${a.lembreteFamilia ? "🎬 Desligar o lembrete da família (no fim de cada aula)" : "🎬 Lembrar de mandar o relatório/vídeo à família no fim de cada aula"}</button>
          <button class="btn btn-sec" type="button" data-x="ativo">${a.ativo ? "⛔ Desativar (saiu da escola)" : "✅ Reativar"}</button>
          <button class="btn" value="x">Fechar</button></div></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal();
      dlg.addEventListener("close", () => dlg.remove());
      dlg.querySelector('a[href^="#/painel/relatorio/"]').addEventListener("click", () => dlg.close());
      dlg.querySelectorAll("[data-x]").forEach(b => b.onclick = async () => {
        const x = b.dataset.x;
        try {
          if (x === "cod") { if (!await P.confirmar("Gerar um código novo? O código antigo deixa de funcionar.")) return; const c = await novoCodigo(a); await P.aviso(`Novo código de ${a.nome}: ${c}`); }
          if (x === "nome") { const n = arrumarNome(await P.perguntar("Nome completo:", a.nome)); if (!n || n === a.nome) return; await renomear(a, n); }
          if (x === "turma") {
            const opc = todasTurmas().filter(y => y.id !== a.turma);
            const r = await P.perguntar("Para qual turma? Digite o código da turma (antes do parêntese): " + opc.map(y => y.id + " (" + rotuloTurma(y.id) + ")").join(", "));
            const nt = opc.find(y => y.id.toLowerCase() === String(r || "").trim().toLowerCase()); if (!nt) { if (r) await P.aviso("Turma não encontrada."); return; }
            // 🎒 para os Agregados: escolhe a série dele e tenta manter o mesmo código
            let sx = ""; if (nt.livre) { sx = await perguntarSerie(a.nome); if (!sx) return; }
            const c = await novoCodigo(a, nt.id, nt.livre ? { serie: sx, mesmoCodigo: true } : {});
            await P.aviso(`${a.nome} agora está ${nt.livre ? "nos" : "no"} ${nomeTurma(nt.id)}${sx ? " (" + (cat().series.find(y => y.id === sx) || {}).nome + ")" : ""}. ${String(c) === String(a.codigo) ? "O código continua o mesmo: " : "Novo código: "}${c}. O histórico continua guardado.`);
          }
          if (x === "serie") { const sx = await perguntarSerie(a.nome); if (!sx || sx === a.serie) return; await mudarSerieAG(a, sx);
            await P.aviso(`Pronto! ${a.nome} agora faz as missões do ${(cat().series.find(y => y.id === sx) || {}).nome}. O código continua o mesmo; se estiver no portal, peça para sair e entrar de novo.`); }
          if (x === "avatar") { if (!await P.confirmar(`Apagar o avatar de ${a.nome}? Na próxima entrada com o código, ${a.nome.split(" ")[0]} monta um avatar novo (só desta vez). Se já estiver na aula, peça para clicar em Sair e entrar de novo.`)) return;
            await db().collection("progresso").doc(a.id + "_avatar").delete(); await P.aviso(`Pronto! ${a.nome.split(" ")[0]} pode sair e entrar de novo com o código: o portal abre a tela de montar o avatar. Os pontos e as tarefas não mudam.`); }
          if (x === "temas") { // 🎉 19/11/2026: o aluno entrou, a janela do tema deu errado e ele ficou sem fazer: apaga o "já viu" para abrir de novo
            if (!await P.confirmar(`Fazer ${a.nome} ver de novo a janela do tema (as curiosidades com o relógio e o desafio)? Na próxima entrada com o código, ela abre outra vez. Os pontos e as tarefas não mudam.`, "Sim, refazer")) return;
            await db().collection("progresso").doc(a.id + "_temas").delete();
            await P.aviso(`Pronto! Peça para ${a.nome.split(" ")[0]} clicar em Sair e entrar de novo com o código: a janela do tema abre outra vez, com o relógio e o desafio.`); }
          if (x === "atipico") { await db().collection("alunos").doc(a.id).update({ atipico: !a.atipico }); }
          if (x === "apoio") { const v = await P.perguntar("Apoios para este aluno na aula (aparecem na Tela da aula, só para você):", a.apoio || ""); if (v === null) return; await db().collection("alunos").doc(a.id).update({ apoio: v.trim() }); }
          if (x === "trilha") {
            const tem = cat().apostilas.some(y => y.trilha && y.serie === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            if (!a.trilha && !tem && !await P.confirmar("Esta série ainda não tem Trilha Passo a Passo. A marcação fica guardada e passa a valer quando a Trilha existir. Marcar mesmo assim?")) return;
            await marcarTrilha(a, !a.trilha);
            await P.aviso(a.trilha ? `${a.nome} volta a usar a apostila da turma.` : `Pronto! Quando ${a.nome} digitar o código, o portal abre direto a Trilha Passo a Passo.`);
          }
          if (x === "helena") {
            /* 🌟 Modo Helena (25/11/2026): em dupla, a carta "Vez da <nome>" em cada etapa; sozinho, a Trilha própria (js/helena.js).
               O visto do dia vem da presença. O aluno lê config/liberar_<turma>.helena; o painel guarda alunos/<id>.modoHelena */
            const on = !a.modoHelena;
            await db().collection("alunos").doc(a.id).update({ modoHelena: on });
            await db().collection("config").doc("liberar_" + a.turma).set({ helena: { [a.id]: on } }, { merge: true });
            await P.aviso(on ? `Pronto! 🌟 Modo Helena ligado para ${a.nome}.\n\n• Em dupla: a dupla faz a apostila normal e, em cada etapa, aparece a carta "Agora é a vez da ${a.nome.split(" ")[0]}!" (o colega lê em voz alta, ${a.nome.split(" ")[0]} responde com um toque).\n• Sozinho(a): abre a Trilha própria, com cartas de um toque e uma pausa para descansar.\n• O visto do dia vem da presença (não precisa terminar tarefas).` : `${a.nome} voltou ao modo normal.`);
          }
          if (x === "casa") {
            if (a.emCasa) { await db().collection("alunos").doc(a.id).update({ emCasa: false, emCasaObs: "", casaLivre: "" }); await db().collection("config").doc("liberar_" + a.turma).set({ casaLivre: { [a.id]: "" } }, { merge: true }); }
            else { const o = await P.perguntar("Observação (opcional). Ex.: estuda à noite; vem só para a prova.", ""); if (o === null) return; await db().collection("alunos").doc(a.id).update({ emCasa: true, emCasaObs: o.trim() }); }
            // 🏠 quem estuda em casa fica sem trava (o portal do aluno lê config/liberar_<turma>.casa)
            await db().collection("config").doc("liberar_" + a.turma).set({ casa: { [a.id]: !a.emCasa } }, { merge: true });
            if (!a.emCasa) { const tt = todasTurmas().find(x => x.id === a.turma); if (tt) gravarPlanoCasa(tt).catch(e => console.warn("plano casa", e)); }
          }
          if (x === "casalivre") {
            // 🚀 18/11/2026: desliga a liberação semanal só para este aluno, só neste ano; fica a regra de uma missão por dia
            const ativo = casaLivreAtivo(a), ano = String(new Date().getFullYear());
            if (!ativo && !await P.confirmar(`Abrir todas as missões para ${a.nome}, com a regra de uma missão por dia?\n\nUse para quem começou o estudo em casa com o bimestre quase no fim. Vale só em ${ano}: no próximo ano, volta sozinha a liberação semanal. O aluno vê um aviso explicando isso quando entrar.`)) return;
            await db().collection("alunos").doc(a.id).update({ casaLivre: ativo ? "" : ano });
            await db().collection("config").doc("liberar_" + a.turma).set({ casaLivre: { [a.id]: ativo ? "" : ano } }, { merge: true });
            await P.aviso(ativo ? `${a.nome} volta à liberação semanal: abre uma missão nova por semana.` : `Pronto! Todas as missões estão abertas para ${a.nome}, uma por dia, até o fim de ${ano}. Na próxima vez que entrar, ${a.nome} vê o aviso.`);
          }
          if (x === "teste") { await db().collection("alunos").doc(a.id).update({ teste: !a.teste }); }
          if (x === "libera") {
            // ⏱️ por quanto tempo (24/11/2026, pedido do professor): 1, 2 ou 3 horas, até o fim de hoje, vários dias ou tirar
            const escolha = await new Promise(res => {
              const dl = document.createElement("dialog"); dl.className = "pp-dlg lib-tempo";
              dl.innerHTML = `<h2>🔓 Liberar ${esc(a.nome)} por quanto tempo?</h2><p class="ajuda">As tarefas abrem só para este aluno, fora do horário da turma.</p>
                <div class="lib-tempo-bts"><button type="button" class="btn btn-ok" data-t="60">⏱️ 1 hora</button><button type="button" class="btn btn-ok" data-t="120">⏱️ 2 horas</button><button type="button" class="btn btn-ok" data-t="180">⏱️ 3 horas</button>
                <button type="button" class="btn" data-t="dia">🌙 Até o fim de hoje (23h59)</button><button type="button" class="btn btn-sec" data-t="dias">📅 Vários dias…</button></div>
                <div class="row-btns"><button type="button" class="btn btn-sec" data-t="0">🚫 Tirar a liberação</button><button type="button" class="btn btn-sec" data-t="x">Cancelar</button></div>`;
              document.body.appendChild(dl); let r = "x"; dl.addEventListener("close", () => { dl.remove(); res(r); });
              dl.querySelectorAll("[data-t]").forEach(bt => bt.onclick = () => { r = bt.dataset.t; dl.close(); }); dl.showModal();
            });
            if (escolha === "x") return;
            let d = 1; const fim = new Date();
            if (escolha === "0") d = 0;
            else if (escolha === "dia") fim.setHours(23, 59, 0, 0);
            else if (escolha === "dias") { const n = await P.perguntar(`Liberar ${a.nome} por quantos dias? (1 = até o fim de hoje)`, "2"); if (n === null || !(+n > 0)) return; d = +n; fim.setHours(23, 59, 0, 0); fim.setDate(fim.getDate() + d - 1); }
            else fim.setTime(Date.now() + (+escolha) * 60000);
            const ateTxt = fim.toDateString() === new Date().toDateString() ? `hoje, até as ${String(fim.getHours()).padStart(2, "0")}h${String(fim.getMinutes()).padStart(2, "0")}` : `${fim.toLocaleDateString("pt-BR")}, 23h59`;
            // pergunta QUAL missão liberar, para o aluno não entrar na missão dos outros dias (12/11/2026)
            let ms = null, lista = [];
            if (+d > 0) {
              // a lista é montada na hora a partir do catálogo e do conteúdo: missão nova ou ⭐ aula especial
              // acrescentada depois aparece sozinha aqui (17/11/2026)
              try {
                const tt = todasTurmas().find(z => z.id === a.turma);
                const aps = cat().apostilas.filter(y => y.serie === tt.serie.id && P.doPeriodo(y) && !y.trilha && !/trilha/.test(y.id) && (!y.oculta || y.especial));
                aps.sort((x, y) => (x.especial ? 1 : 0) - (y.especial ? 1 : 0));
                for (const apx of aps) {
                  try { await P.carregarApostila(apx.id); } catch (e) { continue; }
                  ((P.conteudo[apx.id] || {}).missoes || []).filter(m => m.id !== "rc").forEach(m => {
                    if (lista.some(z => z.id === m.id)) return;
                    const t = (m.titulo || "").replace(/^[^–]*–\s*/, "");
                    lista.push({ id: m.id, aid: apx.base || apx.id, esp: !!apx.especial, ic: m.icone || "", t: apx.especial ? "⭐ Aula especial – " + t : SIG(m.id) + " · " + t });
                  });
                }
              } catch (e) {}
              // 🎯 escolher a missão por BOTÕES (24/11/2026, pedido do professor): todas · ⭐ sugerida (a 1ª que ele não terminou) ·
              //    📌 a missão de hoje da turma · cada botão mostra ✔ feita, ◐ começou, ○ não começou
              const prog = m => (pm[a.id] || []).find(q => (q.aid === m.aid || (cat().apostilas.find(y => y.id === q.aid) || {}).base === m.aid) && q.mid === m.id);
              const sit = m => { const q = prog(m); return !q ? ["○", "não começou"] : q.basicoOk ? ["✔", "terminou o Básico"] : ["◐", `começou (${(q.basico || [0, 0])[0]}/${(q.basico || [0, 0])[1]})`]; };
              let midHoje = ""; try { const sh = await db().collection("config").doc("hoje_" + a.turma).get(); midHoje = (sh.exists && sh.data().mid) || ""; } catch (e) {}
              const sug = lista.find(m => !m.esp && !(prog(m) || {}).basicoOk);
              const r = await new Promise(res => {
                const dl = document.createElement("dialog"); dl.className = "pp-dlg lib-missao";
                const bt = (m, extra) => { const [ic, txt] = sit(m); return `<button type="button" class="btn ${m === sug ? "btn-ok" : "btn-sec"} lib-m" data-m="${esc(m.id)}"><span class="lib-m-sit" title="${esc(txt)}">${ic}</span><span class="lib-m-t">${esc(m.ic)} ${esc(m.t)}${extra || ""}</span><small>${esc(txt)}</small></button>`; };
                const normais = lista.filter(m => !m.esp), esps = lista.filter(m => m.esp);
                dl.innerHTML = `<h2>🎯 Qual missão ${esc(a.nome)} vai fazer?</h2><p class="ajuda">O aluno só abre as tarefas da missão escolhida (e as da missão de hoje da turma).</p>
                  ${sug ? `<p class="lib-sug-t">⭐ Sugerida: a primeira que ainda não foi terminada</p>${bt(sug, midHoje === sug.id ? " · 📌 hoje" : "")}` : ""}
                  <button type="button" class="btn lib-todas" data-m="*">🔓 Todas as missões</button>
                  <details class="lib-lista" ${sug ? "" : "open"}><summary>📚 Escolher outra missão (${normais.length + esps.length})</summary>
                    <div class="lib-ms">${normais.filter(m => m !== sug).map(m => bt(m, midHoje === m.id ? " · 📌 hoje" : "")).join("")}${esps.length ? `<p class="lib-sug-t">⭐ Aulas especiais</p>${esps.map(m => bt(m)).join("")}` : ""}</div></details>
                  <details class="lib-lista lib-repo"><summary>🏠 Reposição em casa: marcar várias missões</summary>
                    <p class="ajuda">Para quem faltou: o aluno faz <strong>de casa</strong> as missões marcadas, na hora que quiser, até a data escolhida (até ${Math.round((cat().casaMinutos || 120) / 60)} h por dia, com o vídeo antes das tarefas). As outras aparecem com 🔒 “feita na aula, com a turma”.</p>
                    <div class="lib-repo-ms">${normais.map(m => { const [ic, txt] = sit(m); return `<label class="lib-repo-m"><input type="checkbox" value="${esc(m.id)}"> <span title="${esc(txt)}">${ic}</span> ${esc(m.ic)} ${esc(m.t)}</label>`; }).join("")}</div>
                    <p class="row-btns"><button type="button" class="btn btn-ok" data-repo="1">🏠 Liberar as marcadas para fazer de casa</button></p></details>
                  <div class="row-btns"><button type="button" class="btn btn-sec" data-m="x">Cancelar</button></div>`;
                document.body.appendChild(dl); let v = null; dl.addEventListener("close", () => { dl.remove(); res(v); });
                dl.querySelectorAll("[data-m]").forEach(b2 => b2.onclick = () => { v = b2.dataset.m === "x" ? null : b2.dataset.m; dl.close(); });
                dl.querySelector("[data-repo]").onclick = async () => { const ms2 = [...dl.querySelectorAll(".lib-repo-m input:checked")].map(c => c.value);
                  if (!ms2.length) { await P.aviso("Marque pelo menos uma missão para a reposição em casa."); return; } v = { repo: ms2 }; dl.close(); };
                dl.showModal();
              });
              if (r === null) return;
              // 🏠🔓 reposição em casa (25/11/2026): grava só em liberar_<turma>.repo; a liberação de aula não muda
              if (r && r.repo) {
                await db().collection("config").doc("liberar_" + a.turma).set({ repo: { [a.id]: { mids: r.repo, ate: fim.getTime(), em: Date.now() } } }, { merge: true });
                const nomes = r.repo.map(id => (lista.find(m => m.id === id) || {}).t || SIG(id));
                await P.aviso(`Pronto! ${a.nome} pode fazer de casa, na hora que quiser, até ${ateTxt}:\n\n• ${nomes.join("\n• ")}\n\nSão até ${Math.round((cat().casaMinutos || 120) / 60)} horas por dia, com o vídeo antes das tarefas. As outras missões continuam na aula, com a turma.`); dlg.close(); return;
              }
              if (r !== "*") ms = r;
            }
            // 🚫 tirar a liberação também tira a reposição em casa (25/11/2026)
            await db().collection("config").doc("liberar_" + a.turma).set(Object.assign({ alunos: { [a.id]: +d > 0 ? fim.getTime() : 0 }, alunosMissao: { [a.id]: ms } }, +d > 0 ? {} : { repo: { [a.id]: { mids: [], ate: 0 } } }), { merge: true });
            await P.aviso(+d > 0 ? `Pronto! ${a.nome} pode fazer ${ms ? "só: " + ((lista.find(m => m.id === ms) || {}).t || SIG(ms)) + " (e a missão de hoje da turma)" : "as tarefas de todas as missões"} ${ateTxt}. Depois disso, a liberação acaba sozinha.` : "Liberação retirada."); dlg.close(); return;
          }
          if (x === "familia") {
            if (a.lembreteFamilia) { await db().collection("alunos").doc(a.id).update({ lembreteFamilia: "" }); await P.aviso(`Lembrete da família desligado para ${a.nome}.`); }
            else { const o = await P.perguntar(`O que fazer no fim de cada aula de ${a.nome}? (aparece no aviso)`, "Gerar o relatório e o vídeo para a família e mandar pelo WhatsApp."); if (o === null || !o.trim()) return;
              await db().collection("alunos").doc(a.id).update({ lembreteFamilia: o.trim() });
              await P.aviso(`Pronto! Toda vez que a aula de ${a.nome} terminar (no 🏁 Finalizar aula ou no fim do horário), o painel avisa na hora. Se o painel estiver fechado, o aviso aparece quando você entrar.`); }
          }
          if (x === "outra") {
            const opc = todasTurmas().filter(y => y.id !== a.turma && y.serie.id === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            const r = await P.perguntar(`${a.nome} também frequenta a aula de qual turma? (as tarefas abrem no horário dela; a presença e as notas continuam na turma dele)\nDigite o código (antes do parêntese): ${opc.map(y => y.id + " (" + rotuloTurma(y.id) + ")").join(", ")}\nDeixe em branco para tirar.`, "");
            if (r === null) return; const nt = opc.find(y => y.id.toLowerCase() === r.trim().toLowerCase());
            if (r.trim() && !nt) { await P.aviso("Turma não encontrada."); return; }
            await db().collection("config").doc("liberar_" + a.turma).set({ outra: { [a.id]: nt ? nt.id : null } }, { merge: true });
            await db().collection("alunos").doc(a.id).update({ outraTurma: nt ? nt.id : null });
            await P.aviso(nt ? `Pronto! As tarefas de ${a.nome} abrem também no horário do ${nomeTurma(nt.id)}.` : "Pronto! Voltou ao horário da própria turma.");
          }
          if (x === "ativo") { if (a.ativo && !await P.confirmar(`Desativar ${a.nome}? O código para de funcionar, mas o histórico fica guardado.`)) return; await mudarAtivo(a, !a.ativo); }
          dlg.close(); toast("Feito!"); telaTurmas(u, t.id);
        } catch (err) { await P.aviso("Não foi possível: " + (err.message || err)); }
      });
    }

    el.querySelector("#add").onclick = async () => {
      const n = arrumarNome(await P.perguntar(`Nome completo do aluno novo (${nomeTurma(t.id)}):`));
      if (!n) return;
      if (n.split(" ").length < 2) return await P.aviso("Digite nome e sobrenome.");
      let sx = ""; if (t.livre) { sx = await perguntarSerie(n); if (!sx) return; }   // 🎒 Agregados: a série dele
      try {
        const cfg = await config();
        const r = await adicionarAlunos(t.id, [{ nome: n }], cfg.ano, sx);
        if (!r.length) return await P.aviso("Já existe um aluno com esse nome nesta turma.");
        await P.aviso(`${r[0].nome} foi adicionado(a). Código: ${r[0].codigo}`);
        telaTurmas(u, t.id);
      } catch (err) { await P.aviso("Não foi possível adicionar: " + (err.message || err)); }
    };
    el.querySelector("#cart").onclick = () => imprimirCartoes(t, alunos.filter(a => a.ativo));
    el.querySelector("#csv").onclick = () => {
      const lin = [["Aluno", "Código", "Situação", "Dias no portal"].concat(missoes.map(x => SIG(x.m.id) + " — " + x.m.titulo))];
      alunos.forEach(a => {
        const dd = new Set(); (pm[a.id] || []).forEach(p => Object.keys(p.dias || {}).forEach(d => dd.add(d)));
        lin.push([a.nome, a.codigo, a.ativo ? "ativo" : "desativado", dd.size].concat(missoes.map(x => {
          const p = (pm[a.id] || []).find(q => (q.aid === x.aid || (cat().apostilas.find(y => y.id === q.aid) || {}).base === x.aid) && q.mid === x.m.id);
          return !p ? "" : p.basicoOk ? "Básico concluído" + ((p.desafio || [])[1] && p.desafio[0] === p.desafio[1] ? " + Desafio" : "") : `Básico ${(p.basico || [0, 0]).join("/")}`;
        })));
      });
      baixar(`turma-${t.id}.csv`, "﻿" + lin.map(l => l.map(v => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\r\n"));
    };
  }

  /* 🖨️ Cartões com os códigos (19/11/2026): o professor escolhe o formato da impressão
     ✂️ cartões para recortar (um por aluno) ou 📋 folha da turma inteira (preto e branco, 1 folha; no máximo frente e verso) */
  function imprimirCartoes(t, alunos) {
    if (document.querySelector(".pp-imp-dlg")) return;
    const dlg = h(`<dialog class="pp-dlg pp-imp-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🖨️ Imprimir os códigos — ${esc(nomeTurma(t.id))}</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <p class="ajuda">Escolha o formato da impressão (${alunos.length} aluno${alunos.length === 1 ? "" : "s"} ativo${alunos.length === 1 ? "" : "s"}):</p>
      <div class="row-btns"><button type="button" class="btn" id="imp-cart">✂️ Cartões para recortar<br><small>um cartão por aluno</small></button>
      <button type="button" class="btn" id="imp-folha">📋 Folha da turma inteira<br><small>todos os códigos · preto e branco · 1 folha</small></button></div>
      <p class="ajuda">A folha da turma serve para todas as aulas: cada aluno procura o próprio nome e digita o seu código.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelector("#imp-cart").onclick = () => { dlg.close(); imprimirRecortar(t, alunos); };
    dlg.querySelector("#imp-folha").onclick = () => { dlg.close(); imprimirFolhaTurma(t, alunos); };
  }

  /* 📋 folha da turma inteira, pensada para a impressora monocromática da sala: só preto, sem fundos;
     o endereço da página inicial (professorwell.com.br) em letra grande no topo de cada página, com o caminho até o código; cabe em 1 folha (até 46 alunos);
     passou disso, vai para o verso, com o endereço repetido no topo */
  function imprimirFolhaTurma(t, alunos) {
    const w = window.open("", "_blank");
    if (!w) return P.aviso("Permita pop-ups para imprimir a folha da turma.");
    const site = "professorwell.com.br"; // página inicial: o aluno aprende o caminho (Sou aluno: entrar → série → turma → código), a pedido do professor (19/11/2026)
    const lista = alunos.slice().sort((a, b) => normNome(a.nome).localeCompare(normNome(b.nome)));
    const POR_PAG = 50, pags = [];
    for (let i = 0; i < lista.length; i += POR_PAG) pags.push(lista.slice(i, i + POR_PAG));
    if (!pags.length) pags.push([]);
    const mt = nomeTurma(t.id).match(/^(\d+º)\s*(.*)$/), serieTxt = mt ? `${mt[1]} ANO · TURMA ${mt[2].toUpperCase()}` : nomeTurma(t.id).toUpperCase();
    const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], aulaTxt = t.aula && t.aula.ini ? `Aula de Informática: ${DIAS[t.aula.dia]}-feira, às ${t.aula.ini}`.replace("sábado-feira", "sábado").replace("domingo-feira", "domingo") : "";
        const tab = (xs, ini) => `<table><tr><th class="nn">Nº</th><th>Aluno</th><th class="cc">Código</th></tr>${xs.map((a, i) => `<tr><td class="nn">${ini + i + 1}</td><td>${esc(a.nome)}</td><td class="cc">${esc(a.codigo || "—")}</td></tr>`).join("")}</table>`;
    const pagina = (xs, k) => { const meio = Math.ceil(xs.length / 2), ini = k * POR_PAG;
      return `<section class="pg"><div class="serie">${esc(serieTxt)}</div>${aulaTxt ? `<div class="aula">${esc(aulaTxt)}</div>` : ""}<header><div class="r">1. Abra o navegador e digite o endereço:</div><div class="site">${esc(site)}</div>
        <div class="r">2. Clique em <b>Sou aluno: entrar</b> e depois na sua série e na sua turma (<b>${esc(nomeTurma(t.id))}</b>).</div><div class="r">3. Digite o <b>seu</b> código (está ao lado do seu nome).</div></header>
        <div class="tt">${esc(cat().portal)} · ${esc(cat().professor)}${pags.length > 1 ? ` · ${k === 0 ? "frente" : "verso"} (${k + 1}/${pags.length})` : ""}</div>
        <div class="cols">${tab(xs.slice(0, meio), ini)}${xs.length > 1 ? tab(xs.slice(meio), ini + meio) : ""}</div>
        <p class="pe">Procure o seu nome na lista e digite o código que está ao lado dele.</p></section>`; };
    w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Códigos — ${esc(nomeTurma(t.id))} (turma inteira)</title>
      <style>@page{size:A4;margin:10mm}*{box-sizing:border-box}body{font-family:Arial,"Segoe UI",sans-serif;color:#000;margin:0;background:#fff}
      .pg{--fs:18pt;width:190mm;margin:0 auto;height:276mm;overflow:hidden;page-break-after:always;break-after:page}.pg:last-child{page-break-after:auto;break-after:auto}
      .serie{font-size:26pt;font-weight:900;text-align:center;border-bottom:3px solid #000;padding-bottom:1mm;margin-bottom:1mm}.aula{font-size:12pt;text-align:center;margin-bottom:2.5mm}
      header{border:3px solid #000;border-radius:4mm;padding:3mm 5mm;text-align:center;margin-bottom:3mm}
      .r{font-size:12.5pt}.site{font-size:30pt;font-weight:900;letter-spacing:.5pt;margin:1mm 0 1.5mm;font-family:"Courier New",monospace}
      .tt{font-size:12pt;margin:0 0 3mm;text-align:center}.cols{display:flex;gap:5mm;align-items:flex-start}
      table{flex:1;border-collapse:collapse;font-size:var(--fs)}th,td{border:1.2px solid #000;padding:calc(var(--fs) * .2) 2mm;text-align:left}
      th{font-size:calc(var(--fs) * .8);text-transform:uppercase}.nn{width:9mm;text-align:center}.cc{font-family:"Courier New",monospace;font-weight:900;font-size:calc(var(--fs) * 1.2);letter-spacing:1.5pt;text-align:center;white-space:nowrap;width:1%}th.cc{font-size:calc(var(--fs) * .75);letter-spacing:0;font-family:Arial,sans-serif}
      .pe{font-size:10.5pt;text-align:center;margin-top:3mm}.x{font-family:Arial,sans-serif;margin:4mm;padding:3mm;border:1px solid #999}
      @media print{.x{display:none}}</style></head><body>
      <p class="x"><button onclick="print()">🖨️ Imprimir</button> Folha da turma inteira, em preto e branco${pags.length > 1 ? ". Tem frente e verso: imprima a 1ª página, vire a folha e imprima a 2ª" : ", numa folha só"}.</p>
      ${pags.map(pagina).join("")}
      <script>document.querySelectorAll('.pg').forEach(function(g){var f=18;while(f>9&&g.scrollHeight>g.clientHeight+1){f-=.5;g.style.setProperty('--fs',f+'pt');}});<\/script></body></html>`);
    w.document.close();
  }

  async function imprimirRecortar(t, alunos) {
    const w = window.open("", "_blank");
    if (!w) return await P.aviso("Permita pop-ups para imprimir os cartões.");
    const base = location.href.split("#")[0];
    w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Códigos — ${esc(nomeTurma(t.id))}</title>
      <style>body{font-family:"Segoe UI",Arial,sans-serif;margin:10mm}h1{font-size:14pt;margin:0 0 6mm}
      .g{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}.c{border:1.5px dashed #555;border-radius:3mm;padding:4mm;break-inside:avoid}
      .p{font-size:8pt;color:#555}.n{font-weight:700;font-size:10.5pt;margin:2mm 0;min-height:9mm}.t{font-size:9pt}.k{font-size:22pt;font-weight:800;letter-spacing:3mm;margin-top:1mm}
      @media print{.x{display:none}}</style></head><body>
      <p class="x"><button onclick="print()">🖨️ Imprimir</button> Recorte os cartões e entregue a cada aluno.</p>
      <h1>💻 ${esc(cat().portal)} — ${esc(nomeTurma(t.id))}</h1><div class="g">${alunos.map(a => `<div class="c"><div class="p">💻 ${esc(cat().portal)} · ${esc(cat().professor)}</div>
      <div class="n">${a.atipico ? "🧩 " : ""}${esc(a.nome)}</div><div class="t">Turma: <strong>${esc(nomeTurma(t.id))}</strong></div><div class="t">Seu código:</div><div class="k">${esc(a.codigo)}</div>
      <div class="p">Não mostre o seu código para os colegas.</div></div>`).join("")}</div></body></html>`);
    w.document.close();
  }

  function baixar(nome, texto) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([texto], { type: "text/csv;charset=utf-8" }));
    a.download = nome; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* -------- Presença: quem entrou em cada dia -------- */
  async function telaPresenca(u, tid) {
    const turmas = turmasDeAula();
    tid = escolherTurma(tid, turmas);
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "presenca") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label></div>
      <details class="painel" id="atip"><summary><strong>🧩 Alunos atípicos que frequentam</strong> (todas as turmas)</summary><div id="atip-c"><p>Carregando…</p></div></details>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { try { sessionStorage.setItem("painel:turma", e.target.value); } catch (x) {} location.hash = "#/painel/presenca/" + e.target.value; };
    ligarAtipicos(el);
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id && P.doPeriodo(a));
    await Promise.all(aps.map(a => P.carregarApostila(a.id).catch(() => null)));
    const [alunosTodos, prog] = await Promise.all([alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const alunos = alunosTodos.filter(a => !a.teste);
    const testes = new Set(alunosTodos.filter(a => a.teste).map(a => a.id));
    const porDia = {};
    prog.filter(p => !testes.has(p.alunoId) && p.mid !== "rc").forEach(p => Object.entries(p.dias || {}).forEach(([d, ts]) => {
      const x = (porDia[d] = porDia[d] || {}); const r = (x[p.alunoId] = x[p.alunoId] || { ini: ts, fim: ts, basico: false, missoes: [] });
      r.ini = Math.min(r.ini, ts); r.fim = Math.max(r.fim, ts);
      if (p.basicoOkEm && p.basicoOkEm[d]) r.basico = true;
      if (p.mid) r.missoes.push(p);
    }));
    const dias = Object.keys(porDia).sort().reverse();
    const nome = id => { const a = alunosTodos.find(x => x.id === id) || { nome: "(aluno removido)" }; return (a.atipico ? "🧩 " : "") + (a.emCasa ? "🏠 " : "") + a.nome; };
    const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR").slice(0, 5);
    const tituloMissao = p => { const C = P.conteudo[p.aid]; const m = C && C.missoes.find(x => x.id === p.mid); return m ? m.titulo : p.mid; };
    const fr = (r, k) => (r[k] || [0, 0])[1] ? `${r[k][0]}/${r[k][1]}` : "";
    const situacao = p => {
      const partes = [`Básico ${p.basicoOk ? "✔ concluído" : "⏳ " + fr(p, "basico")}`];
      if ((p.desafio || [0, 0])[1] && p.desafio[0]) partes.push(`Desafio ${p.desafio[0] === p.desafio[1] ? "✔ completo" : fr(p, "desafio")}`);
      if ((p.turbo || [0, 0])[1] && p.turbo[0]) partes.push(`Turbo ${p.turbo[0] === p.turbo[1] ? "✔ completo" : fr(p, "turbo")}`);
      return partes.join(" · ");
    };
    function relatorio(d) {
      const pres = porDia[d], ids = Object.keys(pres).sort((a, b) => nome(a).localeCompare(nome(b), "pt-BR"));
      const aus = alunos.filter(a => a.ativo && !pres[a.id]);
      const ini = Math.min(...ids.map(i => pres[i].ini)), fim = Math.max(...ids.map(i => pres[i].fim));
      const missoes = {}; ids.forEach(i => pres[i].missoes.forEach(p => { missoes[p.mid] = tituloMissao(p); }));
      const nB = ids.filter(i => pres[i].basico || pres[i].missoes.some(p => p.basicoOk)).length;
      const nD = ids.filter(i => pres[i].missoes.some(p => (p.desafio || [0, 0])[1] && p.desafio[0] === p.desafio[1])).length;
      const linhas = ids.map(i => {
        const ms = pres[i].missoes;
        return `- ${nome(i)} [${i}] — entrou ${hhmm(pres[i].ini)}` + (ms.length ? "\n" + ms.map(p => `    ${SIG(p.mid)} (${tituloMissao(p)}): ${situacao(p)}`).join("\n") : "\n    (entrou, mas não fez atividades)");
      });
      return [
        "📋 RELATÓRIO DA AULA — Portal da Informática",
        `Turma: ${nomeTurma(t.id)} (código no diário: ${t.id.toLowerCase()})`,
        `Data: ${dataBR(d)} (${semana(d)})`,
        `Horário registrado: ${hhmm(ini)} às ${hhmm(fim)}`,
        `Missões trabalhadas: ${Object.entries(missoes).map(([k, v]) => SIG(k) + " — " + v).join("; ") || "nenhuma"}`,
        `Resumo: ${ids.length} presentes · ${aus.length} ausentes · ${nB} concluíram o Básico · ${nD} completaram o Desafio`,
        "",
        `PRESENTES (${ids.length}):`,
        ...linhas,
        "",
        `AUSENTES (${aus.length}):`,
        ...(aus.length ? aus.map(a => `- ${a.nome} [${a.id}]`) : ["- nenhum"]),
        "",
        "Claude: lance no Diário de Classe a presença (P para os presentes, F para os ausentes), o Básico concluído de quem terminou, os pontos extras de quem completou o Desafio e o registro da aula."
      ].join("\n");
    }
    el.querySelector("#corpo").innerHTML = dias.length ? dias.map(d => {
      const ids = Object.keys(porDia[d]).sort((a, b) => nome(a).localeCompare(nome(b), "pt-BR"));
      const aus = alunos.filter(a => a.ativo && !porDia[d][a.id]);
      const okB = i => porDia[d][i].basico || porDia[d][i].missoes.some(p => p.basicoOk);
      return `<details class="painel pp-dia" ${d === dias[0] ? "open" : ""}><summary><strong>${dataBR(d)}</strong> (${semana(d)}) · <strong>${ids.length}</strong> presentes · ${ids.filter(okB).length} concluíram o Básico</summary>
        <div class="pp-rel"><p><strong>📋 Relatório da aula</strong> — copie e cole na conversa com o Claude para lançar tudo no Diário de Classe.</p>
          <textarea class="pp-area pp-rel-txt" rows="8" readonly data-rel="${d}"></textarea>
          <div class="row-btns"><button class="btn" type="button" data-copiar="${d}">📋 Copiar relatório</button></div></div>
        <ol>${ids.map(i => `<li>${esc(nome(i))} <small>entrou às ${hhmm(porDia[d][i].ini)}${okB(i) ? " · ✔ Básico" : ""}</small></li>`).join("")}</ol>
        <details><summary>Ausentes (${aus.length})</summary><p>${aus.map(a => esc(a.nome)).join(" · ") || "—"}</p></details></details>`;
    }).join("") : `<div class="painel"><p>Ainda não há registros nesta turma. A presença aparece aqui quando os alunos entram no portal com o código.</p></div>`;
    el.querySelectorAll("[data-rel]").forEach(ta => { ta.value = relatorio(ta.dataset.rel); });
    el.querySelectorAll("[data-copiar]").forEach(b => b.onclick = () => {
      const ta = el.querySelector(`[data-rel="${b.dataset.copiar}"]`);
      const ok = () => { toast("Relatório copiado! Agora é só colar na conversa com o Claude."); b.textContent = "✔ Copiado"; setTimeout(() => { b.textContent = "📋 Copiar relatório"; }, 2500); };
      navigator.clipboard.writeText(ta.value).then(ok, () => { ta.select(); document.execCommand("copy"); ok(); });
    });
  }

  /* -------- Tela da aula: roteiro visual + respostas + contador ao vivo -------- */
  /* -------- Prova do bimestre: Dia de prova, notas, recuperação e gabarito -------- */
  async function telaProvaPainel(u, tid) {
    const turmas = turmasDeAula();
    tid = escolherTurma(tid, turmas);
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "prova") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label></div>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/prova/" + e.target.value; };
    const hoje = N.hoje();
    const cfgRef0 = db().collection("config").doc(P.docProva(t.id));   // 📒 uma configuração de prova por bimestre
    // as regras do Firebase conferem o envio da prova em config/prova_<turma>: fora do bimestre legado, os campos que
    // liberam o envio (aberta, horário, recuperação) são copiados para lá também
    const cfgRef = { get: () => cfgRef0.get(), set: async (patch, op) => { await cfgRef0.set(patch, op);
      if (!P.ehLegado()) { const g = {}; ["aberta", "dia", "abertaEm", "ate", "ateTs", "recuperacao", "encerradaEm"].forEach(k => { if (k in patch) g[k] = patch[k]; });
        if (Object.keys(g).length) await db().collection("config").doc("prova_" + t.id).set(g, { merge: true }); } } };
    const [cfgSnap, alunosTodos, provasSnap, progRc] = await Promise.all([cfgRef.get(), alunosDaTurma(t.id), db().collection("provas").where("turma", "==", t.id).get(),
      db().collection("progresso").where("turma", "==", t.id).where("mid", "==", "rc").get().catch(() => ({ docs: [] }))]);
    const cfg = cfgSnap.exists ? cfgSnap.data() : {};
    const agora = Date.now();
    const ligada = !!cfg.aberta && cfg.dia === hoje && !(cfg.ate && agora > cfg.ate + 3 * 60000);
    const tempoAcabou = !!cfg.aberta && cfg.dia === hoje && !ligada;
    const hm = ms => new Date(ms).toTimeString().slice(0, 5);
    // horário-limite padrão: fim da aula da turma (início + 1h15) se hoje é o dia dela; senão, daqui a 1h15
    const fimPadrao = (() => {
      const dur = (cat().duracaoAula || 75) * 60000, d = new Date();
      if (t.aula && d.getDay() === t.aula.dia) { const [H, M] = t.aula.ini.split(":").map(Number); const ini = new Date(d); ini.setHours(H, M, 0, 0); if (ini.getTime() + dur > agora) return ini.getTime() + dur; }
      return agora + dur;
    })();
    const rec = new Set(cfg.recuperacao || []);
    const recAtv = new Set(cfg.recAtv || []);   // 📝 atividade de recuperação liberada (15/11/2026)
    const alunos = alunosTodos.filter(a => a.ativo && !a.teste);
    const base = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha);
    const trilha = base && cat().apostilas.find(a => a.trilha && a.base === base.id);
    const aidDe = a => (a.trilha && trilha ? trilha.id : base && base.id);
    const aids = [...new Set([base && base.id, trilha && alunos.some(a => a.trilha) ? trilha.id : null].filter(Boolean))];
    await Promise.all(aids.map(x => P.prova.carregar(x).catch(() => null)));
    // a nota é recalculada aqui, a partir das respostas (não depende do que o navegador do aluno calculou)
    const acertos = d => { const Pv = P.provas[d.aid]; if (!Pv) return d.acertos || 0; const qs = d.qs ? Pv.questoes.filter(q => d.qs.includes(q.id)) : Pv.questoes; return qs.filter(q => d.respostas && d.respostas[q.id] != null && P.provaHash(d.aid, q.id, d.respostas[q.id]) === q.h).length; };
    const res = {}; provasSnap.docs.filter(x => P.aidDoPeriodo(x.data().aid)).forEach(x => { const d = x.data(); const ac = acertos(d), nq = d.nq || (d.qs || []).length || 10; (res[d.alunoId] = res[d.alunoId] || {})[d.tentativa] = { ...d, ac, nq, nt: P.prova.notaDe(ac, nq) }; });
    const nota = n => n.toFixed(1).replace(".", ",");
    // missões que a turma estudou DE VERDADE (pelo histórico das aulas: Missão de hoje › portal › cronograma), mesmo fora da ordem.
    // O painel já marca sozinho; o professor confere e pode desmarcar.
    const nomesM = (P.provas[base && base.id] || {}).missoes || [];
    const hist = await historicoTurma(t).catch(e => { console.warn("histórico", e); return { linhas: [], dadas: {} }; });
    const dadas = hist.dadas;
    const estudadas = cfg.dia === hoje && cfg.missoes ? cfg.missoes : nomesM.map(m => m.id).filter(id => dadas[id]);
    const tres = new Set(alunos.filter(a => a.prova3).map(a => a.id));
    const hhmm = d => d.enviadoEm && d.enviadoEm.toDate ? d.enviadoEm.toDate().toLocaleString("pt-BR").slice(0, 17) : (d.dia ? dataBR(d.dia) : "");
    const fizeram = alunos.filter(a => res[a.id]).length;
    const aidsBim = new Set([base && base.id, trilha && trilha.id].filter(Boolean));
    const rcNota = {}; progRc.docs.forEach(x => { const d = x.data(); if (d.notaRec != null && aidsBim.has(d.aid)) rcNota[d.alunoId] = { n: +d.notaRec, f: d.recFeitas, tot: d.recTotal }; });
    const linhas = alunos.map(a => {
      const r = res[a.id] || {}; const t1 = r[1], t2 = r[2];
      const fin = Math.max(t1 ? t1.nt : -1, t2 ? t2.nt : -1);
      return `<tr><td>${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}${a.emCasa ? " 🏠" : ""}${a.atipico ? `<br><button class="btn btn-sec btn-peq" data-tres="${a.id}" type="button">${tres.has(a.id) ? "✅ 3 alternativas" : "⬜ 3 alternativas"}</button>` : ""}</td>
        <td>${t1 ? `<strong>${nota(t1.nt)}</strong> <small>(${t1.ac}/${t1.nq} · ${esc(hhmm(t1))})</small>` : "—"}</td>
        <td>${t2 ? `<strong>${nota(t2.nt)}</strong> <small>(${t2.ac}/${t2.nq})</small>` : rec.has(a.id) ? "<small>liberada</small>" : "—"}</td>
        <td>${fin >= 0 ? `<strong>${nota(fin)}</strong>` : "—"}</td>
        <td>${t1 && !t2 ? `<button class="btn btn-sec btn-peq" data-rec="${a.id}" type="button">${rec.has(a.id) ? "Cancelar recuperação" : "Liberar recuperação"}</button>` : ""}</td>
        <td>${rcNota[a.id] ? `<strong>${nota(rcNota[a.id].n)}</strong> <small>(${rcNota[a.id].f} de ${rcNota[a.id].tot})</small><br>` : ""}<button class="btn btn-sec btn-peq" data-recatv="${a.id}" type="button">${recAtv.has(a.id) ? "🔓 Liberada · fechar" : "📝 Liberar"}</button></td></tr>`;
    }).join("");
    const gab = aids.map(x => { const Pv = P.provas[x]; if (!Pv) return ""; const ap = P.apostila(x);
      const li = q => `<li>${q.tipo === "vf" ? "<em>V ou F:</em> " : ""}${esc(q.p)}<br>${q.opcoes.map(o => P.provaHash(x, q.id, o) === q.h ? `<span class="certa">✔ ${esc(o)}</span>` : `<span>${esc(o)}</span>`).join(" · ")}</li>`;
      const grupos = Pv.missoes ? Pv.missoes.map(m => `<h4>${esc(m.titulo)}${estudadas.includes(m.id) ? "" : " <small>(não entra na prova desta turma)</small>"}</h4><ol>${Pv.questoes.filter(q => q.m === m.id).map(li).join("")}</ol>`).join("") : `<ol>${Pv.questoes.map(li).join("")}</ol>`;
      return `<h3>${esc(ap ? ap.titulo : x)}</h3>${grupos}`; }).join("");
    const passadas = hist.linhas.filter(l => l.d <= hoje);
    const aulasTxt = passadas.length ? `<details class="pp-cron-det"><summary><strong>Aulas da turma neste bimestre</strong> (${passadas.filter(l => l.status === "dada").length} dadas) · ver a lista</summary><div class="pan-fila">${hist.linhas.map(l => cartaoAula(l, t.id)).join("")}</div></details>` : "";
    const dds = l => l.map(d => dataBR(d).slice(0, 5)).join(", ");
    const ck = m => { const on = estudadas.includes(m.id), dd = dadas[m.id];
      return `<label class="pp-mis-ck ${dd ? "dada" : "nao"}"><input type="checkbox" data-m="${m.id}" ${on ? "checked" : ""} ${ligada ? "disabled" : ""}>
        <span><b>${esc(m.titulo)}</b><small>${dd ? `✅ dada em ${esc(dds(dd))}${hist.linhas.some(l => l.mid === m.id && l.status === "dada" && l.fonte === "cronograma") ? " <em>(previsto no cronograma)</em>" : ""}` : "⏳ ainda não foi dada"}</small></span></label>`; };
    const jaM = nomesM.filter(m => dadas[m.id]), naoM = nomesM.filter(m => !dadas[m.id]);
    const caixasM = `<div class="pp-mis-col"><h4>✅ Já dadas (${jaM.length})</h4>${jaM.map(ck).join("") || `<p class="ajuda">Nenhuma missão dada ainda.</p>`}</div>
      <div class="pp-mis-col nao"><h4>⏳ Ainda não dadas (${naoM.length})</h4>${naoM.map(ck).join("") || `<p class="ajuda">Todas já foram dadas. 🎉</p>`}</div>`;
    const corpo = el.querySelector("#corpo");
    corpo.innerHTML = `<div class="painel"><h2>📝 Prova do bimestre · ${esc(nomeTurma(t.id))}</h2>
        <p>Situação: <span class="pp-prova-st ${ligada ? "on" : "off"}">${ligada ? `🟢 Dia de prova LIGADO · termina às ${cfg.ate ? hm(cfg.ate) : "fim do dia"}` : tempoAcabou ? "⏰ Tempo da prova acabou" : "⚪ Desligado"}</span></p>
        ${t.aula ? `<p class="ajuda">Aula da turma: ${["", "segunda", "terça", "quarta", "quinta", "sexta"][t.aula.dia]}, das ${t.aula.ini} às ${hm(new Date("2000-01-01T" + t.aula.ini + ":00").getTime() + (cat().duracaoAula || 75) * 60000)}.</p>` : ""}
        ${hist.prova ? `<p class="pp-dia-prova">📆 <strong>Dia da prova desta turma</strong> (semana de Avaliação Bimestral do calendário da rede): <strong>${esc(semana(hist.prova))}, ${esc(dataBR(hist.prova))}</strong>${hist.linhas.some(l => l.trabalho) ? " · nenhuma missão dada: vira 📝 Trabalho avaliativo em aula" : ""}</p>` : ""}
        ${aulasTxt}
        <div class="pp-missoes-prova"><p><strong>A prova cobra só as missões marcadas</strong>. O painel já marcou as que foram dadas nas aulas (com a data de cada uma); confira antes de ligar. Pode desmarcar ou marcar à vontade.</p><div class="pp-mis-grade">${caixasM}</div></div>
        <p class="ajuda">Ligado, o aluno digita o código e cai direto na prova. Um relógio mostra quanto falta até o horário-limite; quando o tempo acaba, a prova é enviada sozinha com as respostas marcadas. Ao terminar, o aluno vê a nota e o portal sai sozinho.</p>
        <div class="row-btns">${ligada ? `<button class="btn" id="pv-off" type="button">⏹️ Encerrar a prova</button>` : `<label>A prova termina às <input type="time" id="pv-ate" value="${hm(fimPadrao)}"></label><button class="btn btn-grande" id="pv-on" type="button">📝 Ligar o Dia de prova</button>`}
          <button class="btn btn-sec" id="pv-cp" type="button">📋 Copiar notas</button>
          <button class="btn btn-sec" id="pv-gab" type="button">👁️ Mostrar gabarito</button></div></div>
      <div class="painel pp-gab" id="gab"><h2>Gabarito</h2>${gab}</div>
      <div class="painel"><h2>Notas (${fizeram} de ${alunos.length} fizeram)</h2>
        <div class="tabela-wrap"><table><thead><tr><th>Aluno</th><th>1ª tentativa</th><th>Recuperação</th><th>Nota final</th><th></th><th>📝 Atividade de recuperação (0 a 10)</th></tr></thead><tbody>${linhas}</tbody></table></div>
        <p class="ajuda">A prova tem até 10 questões, só das missões marcadas, e vale até 5,0 (nota proporcional aos acertos). 🧩 <strong>3 alternativas</strong>: para o aluno cujo PEI pede, a prova mostra só 3 opções em cada questão. Na nota final vale a maior entre a prova e a recuperação. A recuperação abre só para quem você liberar, quando o Dia de prova estiver ligado.</p>
        <p class="ajuda">📝 <strong>Atividade de recuperação</strong>: é uma missão do portal, só com as missões marcadas acima, sem dica nem resolução. Abre a qualquer hora (na aula ou em casa) só para quem você liberar. Vale de 0 a 10 (certa de primeira = ponto inteiro; cada erro tira um pouco) e a nota entra sozinha no 🧮 Boletim, no lugar da recuperação, quando for maior que a nota do aluno. Se você digitar outra nota no Boletim, vale a sua.</p></div>`;
    const recarregar = () => telaProvaPainel(u, t.id);
    const on = corpo.querySelector("#pv-on"), off = corpo.querySelector("#pv-off");
    if (on) on.onclick = async () => {
      const v = (corpo.querySelector("#pv-ate").value || hm(fimPadrao)).split(":").map(Number);
      const fim = new Date(); fim.setHours(v[0], v[1], 0, 0);
      if (fim.getTime() <= Date.now() + 5 * 60000) { toast("Escolha um horário-limite pelo menos 5 minutos à frente."); return; }
      const missoes = [...corpo.querySelectorAll("[data-m]:checked")].map(c => c.dataset.m);
      if (!missoes.length) { toast("Marque pelo menos uma missão que a turma estudou."); return; }
      on.disabled = true;
      const ts = firebase.firestore.Timestamp ? firebase.firestore.Timestamp.fromMillis(fim.getTime()) : fim.getTime();
      await cfgRef.set({ aberta: true, dia: hoje, abertaEm: Date.now(), ate: fim.getTime(), ateTs: ts, recuperacao: [...rec], missoes, tres: [...tres], recAtv: [...recAtv], ...(cfg.recMissoes ? { recMissoes: cfg.recMissoes } : {}) });
      toast("Dia de prova ligado até as " + hm(fim.getTime())); recarregar(); };
    if (off) off.onclick = async () => { off.disabled = true; await cfgRef.set({ aberta: false, encerradaEm: Date.now() }, { merge: true }); toast("Prova encerrada."); recarregar(); };
    corpo.querySelector("#pv-gab").onclick = e => { const g = corpo.querySelector("#gab"); g.classList.toggle("on"); e.target.textContent = g.classList.contains("on") ? "🙈 Esconder gabarito" : "👁️ Mostrar gabarito"; };
    corpo.querySelector("#pv-cp").onclick = async () => {
      const txt = `Notas da prova — ${nomeTurma(t.id)}\n` + alunos.map(a => { const r = res[a.id] || {}; const f = Math.max(r[1] ? r[1].nt : -1, r[2] ? r[2].nt : -1); return `${a.nome}: ${f >= 0 ? nota(f) : "não fez"}`; }).join("\n");
      try { await navigator.clipboard.writeText(txt); toast("Notas copiadas."); } catch (e) { await P.perguntar("Copie as notas:", txt); }
    };
    corpo.querySelectorAll("[data-tres]").forEach(b => b.onclick = async () => {
      const id = b.dataset.tres, v = !tres.has(id); b.disabled = true;
      await db().collection("alunos").doc(id).update({ prova3: v });
      if (v) tres.add(id); else tres.delete(id);
      if (cfgSnap.exists) await cfgRef.set({ tres: [...tres] }, { merge: true });
      recarregar();
    });
    corpo.querySelectorAll("[data-recatv]").forEach(b => b.onclick = async () => {
      const id = b.dataset.recatv; if (recAtv.has(id)) recAtv.delete(id); else recAtv.add(id);
      const ms = [...corpo.querySelectorAll("[data-m]:checked")].map(c => c.dataset.m);
      b.disabled = true; await cfgRef.set({ recAtv: [...recAtv], ...(ms.length ? { recMissoes: ms } : {}) }, { merge: true });
      toast(recAtv.has(id) ? "📝 Atividade de recuperação liberada (só com as missões marcadas)." : "Atividade de recuperação fechada para este aluno."); recarregar();
    });
    corpo.querySelectorAll("[data-rec]").forEach(b => b.onclick = async () => {
      const id = b.dataset.rec; if (rec.has(id)) rec.delete(id); else rec.add(id);
      b.disabled = true; await cfgRef.set({ recuperacao: [...rec] }, { merge: true }); recarregar();
    });
  }

  /* -------- 📒 Diário de Classe: chamada, vistos, frequência, boletim, registro e lembretes --------
     Fica em prof/diario/turmas/<turma> (cronograma, lembretes, notas manuais, auto) e
     prof/diario/turmas/<turma>/aulas/<data> (presencas, carimbos, parciais, extras, encontro, registro).
     O que vem do portal (⚡) é calculado na hora: quem entrou, quem concluiu o Básico, quem completou
     o Desafio e o Turbo. O que o professor marca à mão sempre vale mais que o automático. */
  const DIARIO = "prof/diario/turmas";
  // 📌 a Missão de hoje fica anotada na aula do dia no Diário (aulas/<data>.missaoHoje), para saber depois "dia tal, missão tal"
  async function registrarMissaoDoDia(tid, m) {
    const d = N.hoje();
    try { await db().collection(DIARIO + "/" + tid + "/aulas").doc(d).set({ data: d, missaoHoje: m ? { mid: m.mid, titulo: m.titulo || m.mid, travar: !!m.travar, em: new Date().toISOString() } : null }, { merge: true }); }
    catch (e) { console.warn("registro da missão do dia", e); }
  }
  const missaoTxt = a => a && a.missaoHoje && a.missaoHoje.mid ? `📌 ${esc(SIG(a.missaoHoje.mid))} · ${esc(String(a.missaoHoje.titulo || "").replace(/^[^–]*–\s*/, ""))}${a.missaoHoje.travar ? " 🔒" : ""}` : "";
  // 🚦 aula que não aconteceu normalmente. "ninguem" = falta para todos; os outros não contam na frequência de ninguém.
  const OCORR = { ninguem: "🚫 Nenhum aluno veio", professor: "🙋 O professor não pôde vir", feriado: "🎉 Feriado ou ponto facultativo", formacao: "🏫 Sem aula na escola (formação, evento, reunião)", outro: "📌 Sem aula por outro motivo" };
  const OCORR_CURTO = { ninguem: "🚫 Ninguém veio", professor: "🙋 Eu não fui", feriado: "🎉 Feriado", formacao: "🏫 Sem aula na escola", outro: "📌 Outro motivo" };
  const semAula = a => !!(a && a.ocorrencia && a.ocorrencia.tipo && a.ocorrencia.tipo !== "ninguem");
  const ocorrDe = a => (a && a.ocorrencia && a.ocorrencia.tipo) ? a.ocorrencia : null;
  /* 🗺️ HISTÓRICO DA TURMA: para cada data de aula, se aconteceu (ou por que não), quantos vieram e qual missão foi dada.
     Usado pelo 🗺️ Panorama e pela 📝 Prova (que marca sozinha as missões já dadas, mesmo fora da ordem).
     De onde vem a missão de cada aula, nesta ordem:
       1) 📌 a Missão de hoje escolhida no painel (fica gravada na aula do dia);
       2) ⚡ a missão que a maioria dos alunos abriu no portal naquele dia;
       3) 📅 o cronograma (o que estava previsto para a data). */
  /* 📆 Calendário da rede: a prova cai no dia da turma dentro da semana de Avaliação Bimestral. Antes dela, todas as aulas
     futuras são vagas para as missões que faltam (ou revisão); depois dela, 2ª chamada / recuperação. Vale para o Panorama,
     a Prova e o Diário, por cima do cronograma antigo. */
  const ESPECIAL = /^\s*(📝\s*)?(Avalia|Prova|Segunda chamada|2ª chamada|Projeto final|Revis|Trabalho)/i;
  function cronComRede(t, cron) {
    const R = cat().calendarioRede; if (!R || !t.aula) return cron;
    const sem = new Set(R.semAula || []), [pi, pf] = R.provaBimestral;
    const datas = (ini, fim) => { const out = []; for (let d = new Date(ini + "T12:00:00"); ; d.setDate(d.getDate() + 1)) { const s = d.toISOString().slice(0, 10); if (s > fim) break; if (d.getDay() === t.aula.dia && !sem.has(s)) out.push(s); } return out; };
    const prova = datas(pi, pf)[0]; if (!prova) return cron;
    const hoje = N.hoje();
    const out = cron.filter(c => c.data < pi && !sem.has(c.data) && !ESPECIAL.test(c.encontro || ""));
    const tem = new Set(out.map(c => c.data));
    if (hoje < pi) datas(hoje, pi).filter(d => d < pi && !tem.has(d)).forEach(d => out.push({ data: d, encontro: "Aula", vaga: true }));
    out.push({ data: prova, encontro: "Avaliação bimestral", prova: true });
    datas(pf, R.fimAulas || pf).filter(d => d > prova).forEach(d => out.push({ data: d, encontro: "2ª chamada / recuperação" }));
    return out.sort((a, b) => a.data < b.data ? -1 : 1);
  }
  const midDoTexto = s => { const m = /Miss[aã]o\s*(\d+)/i.exec(s || ""); return m ? "m" + m[1] : null; };
  /* 📒 Diário por bimestre (15/11/2026): só as aulas com data dentro do bimestre em uso, o cronograma, as notas
     e o progresso das apostilas daquele bimestre. O que foi salvo antes da separação vale para o bimestre legado. */
  const cronDoBim = T => { const pid = P.periodoAtual(); const c = (T.cronogramaPor || {})[pid] || (P.ehLegado(pid) ? T.cronograma : null); return c && c.length ? c : null; };
  const missoes4Bim = t => P.ehLegado() ? (t.missoes4 || {}) : {};
  const aulasDoBim = snap => { const o = {}; snap.docs.forEach(d => { if (P.noPeriodo(d.id)) o[d.id] = d.data(); }); return o; };
  const progDoBim = prog => prog.filter(p => !p.aid || P.aidDoPeriodo(p.aid));
  const notasDoBim = T => { const pid = P.periodoAtual(), leg = P.ehLegado(pid) ? (T.notas || {}) : {}, nv = (T.notasPor || {})[pid] || {};
    return { prova: { ...(leg.prova || {}), ...(nv.prova || {}) }, rec: { ...(leg.rec || {}), ...(nv.rec || {}) } }; };
  const cronFiltro = l => l.filter(c => P.noPeriodo(c.data));
  async function historicoTurma(t) {
    const hoje = N.hoje();
    let [tSnap, aulasSnap, alunosTodos, progTodos] = await Promise.all([db().collection(DIARIO).doc(t.id).get(), db().collection(DIARIO + "/" + t.id + "/aulas").get(), alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const T = tSnap.exists ? tSnap.data() : {};
    const aulas = aulasDoBim(aulasSnap);
    const alunos = alunosTodos.filter(a => a.ativo !== false && !a.teste);
    const ids = new Set(alunos.map(a => a.id));
    progTodos = progDoBim(progTodos);
    const base = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha);
    if (base) await P.carregarApostila(base.id).catch(() => null);
    const tituloM = m => { const C = base && P.conteudo[base.id]; const x = C && C.missoes.find(y => y.id === m); return x ? x.titulo : SIG(m); };
    const cron = cronFiltro(cronComRede(t, (cronDoBim(T) || Object.entries(missoes4Bim(t)).map(([data, m]) => ({ data, encontro: tituloM(m), mid: m }))).slice().sort((a, b) => a.data < b.data ? -1 : 1)));
    const ehDiaDeAula = d => P.noPeriodo(d) && (!!aulas[d] || cron.some(c => c.data === d) || (t.aula && new Date(d + "T12:00:00").getDay() === t.aula.dia));
    const auto = T.auto !== false;
    const VEIO = {}, MIS = {};   // VEIO[d] = Set(alunos que abriram o portal); MIS[d][mid] = Set(alunos naquela missão)
    progTodos.forEach(p => { if (!ids.has(p.alunoId)) return;
      Object.keys(p.dias || {}).filter(ehDiaDeAula).forEach(d => {
        (VEIO[d] = VEIO[d] || new Set()).add(p.alunoId);
        if (p.mid) { const M = MIS[d] = MIS[d] || {}; (M[p.mid] = M[p.mid] || new Set()).add(p.alunoId); } }); });
    const inicio = cron.length ? cron[0].data : "";
    const datas = [...new Set([...cron.map(c => c.data), ...Object.keys(aulas), ...(auto ? Object.keys(VEIO) : [])])].filter(d => /^\d{4}-\d\d-\d\d$/.test(d) && d >= inicio).sort();
    const linhas = datas.map(d => {
      const a = aulas[d], oc = ocorrDe(a);
      const cr = cron.find(c => c.data === d) || {};
      const encontro = (cr.prova || cr.vaga || d >= hoje) && cr.encontro ? cr.encontro : (a && a.encontro) || cr.encontro || "";
      let presentes = null;
      if (!oc) presentes = alunos.filter(x => { const man = a && a.presencas && a.presencas[x.id]; return man ? man === "P" : (auto && VEIO[d] && VEIO[d].has(x.id)); }).length;
      const status = oc ? oc.tipo : presentes > 0 ? "dada" : d > hoje ? "prevista" : d === hoje ? "hoje" : "semregistro";
      let mid = null, fonte = null;
      if (a && a.missaoHoje && a.missaoHoje.mid) { mid = a.missaoHoje.mid; fonte = "registrada"; }
      else if (MIS[d]) { const top = Object.entries(MIS[d]).sort((x, y) => y[1].size - x[1].size)[0]; if (top) { mid = top[0]; fonte = "portal"; } }
      const plano = cr.prova ? null : (a && a.encontro && d < hoje) ? midDoTexto(a.encontro) : (cr.mid || midDoTexto(encontro));
      if (!mid && plano) { mid = plano; fonte = "cronograma"; }
      return { d, status, ocorr: oc, presentes, mid, fonte, titulo: mid ? tituloM(mid) : encontro, encontro, vaga: !!cr.vaga && !mid, prova: !!cr.prova, temAlgo: !!(a && String(a.registro || "").trim()) };
    // data solta fora do dia da turma, sem nada registrado (nem presença, nem ocorrência, nem missão, nem texto) = não houve aula: some
    }).filter(l => !(t.aula && new Date(l.d + "T12:00:00").getDay() !== t.aula.dia && !l.ocorr && !l.presentes && !l.temAlgo));
    // missões efetivamente dadas: só nas aulas que aconteceram (veio pelo menos 1 aluno)
    const dadas = {}; linhas.filter(l => l.status === "dada" && l.mid).forEach(l => { (dadas[l.mid] = dadas[l.mid] || []).push(l.d); });
    // 🔁 próximas aulas se ajustam ao que já foi dado: na ordem do cronograma, entra a próxima missão que ainda falta
    // (se a turma repetiu a M1, a próxima aula vira M2, e assim por diante). Avaliação, Projeto final etc. ficam onde estão.
    const ordem = [...new Set(cron.map(c => c.mid || midDoTexto(c.encontro)).filter(m => m && m !== "rv"))];
    const faltam = ordem.filter(m => !dadas[m]);
    /* Regra combinada em 14/11/2026: a ÚLTIMA aula antes da prova é sempre a 🔁 Revisão (aula inteira de atividades,
       só com as missões dadas). As outras recebem, em ordem, as missões que faltam; se ainda sobrar aula, entra a
       missão extra da apostila (a M4). Missão que não couber fica para depois da prova (a prova só cobra o que foi dado). */
    const Cb = base && P.conteudo[base.id], temRv = !!(Cb && Cb.missoes.some(m => m.id === "rv"));
    const extras = Cb ? Cb.missoes.map(m => m.id).filter(m => /^m\d+$/.test(m) && !ordem.includes(m) && !dadas[m]) : [];
    const lpd = (linhas.find(l => l.prova) || {}).d || "9999";
    const futuras = linhas.filter(l => l.d >= hoje && l.d < lpd && (l.fonte === "cronograma" || l.vaga) && !l.ocorr && (l.status === "prevista" || l.status === "hoje"));
    const fila = [...faltam, ...extras];
    futuras.forEach((l, i) => {
      const jaTem = Object.keys(dadas).some(m => m !== "rv") || i > 0; // revisão só se a turma tiver (ou for ter) alguma missão
      const ultima = i === futuras.length - 1 && lpd !== "9999" && jaTem;
      const novo = ultima ? null : (fila.shift() || null);
      if (novo === l.mid && !l.vaga) return;
      if (!l.vaga && l.mid) l.plano = l.mid;
      l.mid = novo; l.vaga = false;
      if (novo) { l.fonte = "cronograma"; l.titulo = tituloM(novo); }
      else if (temRv) { l.mid = "rv"; l.fonte = "cronograma"; l.titulo = tituloM("rv"); l.encontro = "Revisão para a prova"; }
      else { l.fonte = null; l.encontro = l.titulo = "Revisão para a prova"; }
    });
    const semVaga = fila.filter(m => faltam.includes(m) && !(Cb && /^m\d+$/.test(m) && !ordem.includes(m)));
    // nenhuma missão dada até o dia da prova → no lugar da prova, um trabalho avaliativo que começa e termina na aula
    const lp = linhas.find(l => l.prova);
    if (lp && !Object.keys(dadas).length && !linhas.some(l => l.d < lp.d && l.d >= hoje && l.mid && l.mid !== "rv")) { lp.encontro = lp.titulo = "📝 Trabalho avaliativo em aula"; lp.trabalho = true; }
    return { t, alunos, linhas, dadas, tituloM, base, semVaga, prova: lp ? lp.d : null };
  }
  const ST_PAN = { dada: ["✅", "Aula dada"], prevista: ["⏩", "Próxima aula"], hoje: ["⏳", "Hoje"], semregistro: ["❔", "Sem registro"] };
  const FONTE_M = { registrada: "📌 escolhida no painel", portal: "⚡ pelo que os alunos abriram", cronograma: "previsto no cronograma (sem registro do que foi dado)" };
  const curtoM = s => String(s || "").replace(/^[^–-]*[–-]\s*/, "");
  const DIASEM = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  // 🧩 relatório "alunos atípicos que frequentam" (antes na aba Presença; desde 14/11/2026 no 🗺️ Panorama)
  function ligarAtipicos(el) {
    el.querySelector("#atip").addEventListener("toggle", async ev => {
      if (!ev.target.open || ev.target.dataset.ok) return; ev.target.dataset.ok = 1;
      const c = el.querySelector("#atip-c");
      try {
        const [qa, qe] = await Promise.all([db().collection("alunos").where("atipico", "==", true).get(), db().collection("progresso").where("tipo", "==", "entrada").get()]);
        const ent = {}; qe.docs.forEach(d => { const x = d.data(); ent[x.alunoId] = Object.keys(x.dias || {}).sort(); });
        const lista = qa.docs.map(d => ({ id: d.id, ...d.data() })).filter(a => a.ativo !== false)
          .map(a => ({ ...a, dias: ent[a.id] || [] })).sort((a, b) => b.dias.length - a.dias.length || a.turma.localeCompare(b.turma) || a.nome.localeCompare(b.nome, "pt-BR"));
        const vieram = lista.filter(a => a.dias.length);
        c.innerHTML = `<p>${vieram.length} de ${lista.length} alunos com 🧩 já entraram no portal. Conte também a chamada do diário: quem faltou no portal pode ter vindo sem entrar.</p>
          <div class="tabela-wrap"><table><thead><tr><th>Aluno</th><th>Turma</th><th>Dias no portal</th><th>Última vez</th></tr></thead><tbody>${lista.map(a => `<tr><td>🧩 ${esc(a.nome)}${a.trilha ? " 👣" : ""}</td><td>${esc(nomeTurma(a.turma))}</td><td><strong>${a.dias.length}</strong></td><td>${a.dias.length ? dataBR(a.dias[a.dias.length - 1]) : "nunca"}</td></tr>`).join("")}</tbody></table></div>`;
      } catch (err) { c.innerHTML = `<p class="erro">Não foi possível carregar: ${esc(err.message || err)}</p>`; }
    });
  }
  /* -------- 🗺️ Panorama: todas as turmas, uma linha de cartões por turma (uma aula por cartão) -------- */
  async function telaPanorama(u) {
    const turmas = todasTurmas().filter(t => t.aula || Object.keys(t.missoes4 || {}).length);
    const el = tela(topo(u, "panorama") + `<div class="painel pp-barra"><label><input type="checkbox" id="pan-fut"> Mostrar também as próximas aulas</label>
        <span class="pan-leg">✅ dada · 🚫 ninguém veio · 🙋 eu não fui · 🎉 feriado · 🏫 sem aula na escola · ❔ sem registro · 📝 prova · M1, M2… = missão dada · “previsto” = só o que o cronograma planejou</span></div>
      <details class="painel" id="atip"><summary><strong>🧩 Alunos atípicos que frequentam</strong> (todas as turmas)</summary><div id="atip-c"><p>Carregando…</p></div></details>
      <div id="corpo"><p class="painel">Carregando as aulas de todas as turmas…</p></div>`);
    ligarSair(el); ligarAtipicos(el);
    const hoje = N.hoje();
    const hs = await Promise.all(turmas.map(t => historicoTurma(t).catch(e => ({ t, erro: e }))));
    let fut = false; try { fut = sessionStorage.getItem("painel:pan:fut") === "1"; } catch (e) {}
    const cx = el.querySelector("#pan-fut"); cx.checked = fut;
    const desenhar = () => {
      el.querySelector("#corpo").innerHTML = hs.map(h => {
        if (h.erro) return `<div class="painel"><h2>${esc(nomeTurma(h.t.id))}</h2><p>Não consegui carregar: ${esc(h.erro.message || h.erro)}</p></div>`;
        const ls = h.linhas.filter(l => fut || l.d <= hoje);
        const n = s => h.linhas.filter(l => l.d <= hoje && s(l)).length;
        const dadas = n(l => l.status === "dada"), sem = n(l => l.ocorr), semReg = n(l => l.status === "semregistro");
        const mis = Object.keys(h.dadas).sort((a, b) => (+a.slice(1) || 0) - (+b.slice(1) || 0));
        const tAula = h.t.aula ? h.t : todasTurmas().find(x => x.id === h.t.id), hor = tAula && tAula.aula ? `${["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"][tAula.aula.dia]} · ${tAula.aula.ini.replace(/^0/, "").replace(":00", "h").replace(":", "h")}` : "";
        return `<div class="painel pan-turma"><div class="pan-cab"><h2><a href="#/painel/diario/${h.t.id}/frequencia">${esc(nomeTurma(h.t.id))}</a>${hor ? `<span class="pan-hor" title="Dia e horário de início da aula">🕘 ${esc(hor)}</span>` : ""}</h2>
          <span class="pan-res">✅ ${dadas} aula${dadas === 1 ? "" : "s"} dada${dadas === 1 ? "" : "s"}${sem ? ` · 🚫 ${sem} sem aula` : ""}${semReg ? ` · <b>❔ ${semReg} sem registro</b>` : ""}${mis.length ? ` · missões dadas: <b>${mis.map(m => esc(rotMis(h.base && P.conteudo[h.base.id], m))).join(" · ")}</b>` : ""}${h.semVaga && h.semVaga.length ? ` · <b class="pan-alerta">⚠️ Não cabe${h.semVaga.length > 1 ? "m" : ""} no calendário: ${h.semVaga.map(m => esc(rotMis(h.base && P.conteudo[h.base.id], m))).join(" · ")}</b> (falta${h.semVaga.length > 1 ? "m" : ""} ${h.semVaga.length} aula${h.semVaga.length > 1 ? "s" : ""})` : ""}</span></div>
          ${ls.length ? `<div class="pan-fila">${ls.map(l => cartaoAula(l, h.t.id)).join("")}</div>` : `<p class="ajuda">Nenhuma aula registrada ainda.</p>`}</div>`;
      }).join("") + `<p class="ajuda painel">Toque em um cartão para abrir a ✅ Chamada daquele dia no Diário (lá fica a lista de quem veio). No nome da turma, abre a 🗓️ Frequência.</p>`;
    };
    cx.onchange = () => { fut = cx.checked; try { sessionStorage.setItem("painel:pan:fut", fut ? "1" : ""); } catch (e) {} desenhar(); };
    desenhar();
  }
  function cartaoAula(l, tid) {
    const st = l.ocorr ? [OCORR_CURTO[l.status] ? OCORR_CURTO[l.status].split(" ")[0] : "📌", OCORR_CURTO[l.status] ? OCORR_CURTO[l.status].replace(/^\S+\s/, "") : "Sem aula"] : ST_PAN[l.status];
    const classe = l.status === "dada" ? "ok" : l.status === "ninguem" ? "ninguem" : l.ocorr ? "sem" : l.status;
    const [, mm, dd] = l.d.split("-");
    const missao = l.ocorr ? "" : l.prova ? `<span class="pan-m pan-m-prova">📝 ${l.trabalho ? "Trabalho" : "Prova"}</span>` : l.mid ? `<span class="pan-m${l.fonte === "cronograma" ? " pan-m-prev" : ""}" title="${esc(l.titulo)}${l.fonte ? " · " + FONTE_M[l.fonte] : ""}${l.plano ? " · ajustado (o cronograma previa " + esc(l.plano.toUpperCase()) + ")" : ""}">${esc(SIG(l.mid))}${l.fonte === "cronograma" ? " <small>previsto</small>" : ""}</span><span class="pan-t">${esc(tituloCurto({ titulo: l.titulo }))}</span>` : (l.encontro ? `<span class="pan-m pan-m-txt" title="${esc(l.encontro)}">${esc(l.encontro.split(/ [–-] /)[0].trim())}</span>` : "");
    const pres = l.status === "dada" ? `<span class="pan-p">👥 ${l.presentes}</span>` : "";
    const nota = l.ocorr && l.ocorr.nota ? ` · ${l.ocorr.nota}` : "";
    return `<a class="pan-c pan-${classe}" href="#/painel/diario/${tid}/chamada" data-pan-dia="${l.d}" data-pan-t="${tid}" title="${esc(dataBR(l.d))} · ${esc(st[1] + nota)}${l.mid ? " · " + esc(l.titulo) : ""}">
      <span class="pan-d">${dd}/${mm}<small>${DIASEM[new Date(l.d + "T12:00:00").getDay()]}</small></span>
      <span class="pan-s">${st[0]} ${esc(st[1])}</span>${missao}${pres}</a>`;
  }
  // dias de aula já passados (desde o início do cronograma) em que não há nenhum registro: nem presença do portal,
  // nem chamada à mão, nem registro escrito, nem ocorrência. O painel pergunta logo que abre.
  async function aulasPendentes() {
    const ag = new Date(), hoje = N.hoje(), min = ag.getHours() * 60 + ag.getMinutes(), out = [];
    await Promise.all(todasTurmas().filter(t => t.aula && t.aula.ini && Object.keys(t.missoes4 || {}).length).map(async t => {
      const ini = Object.keys(t.missoes4).sort()[0], [hh, mm] = t.aula.ini.split(":").map(Number), dias = [];
      for (let d = new Date(ini + "T12:00:00"); ; d.setDate(d.getDate() + 1)) {
        const ds = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        if (ds > hoje) break;
        if (!P.noPeriodo(ds)) continue;   // 📒 só o bimestre em uso
        if (d.getDay() !== t.aula.dia && !(t.missoes4 || {})[ds]) continue;
        if (ds === hoje && min < hh * 60 + mm + 90) continue; // a aula de hoje ainda não terminou
        dias.push(ds);
      }
      if (!dias.length) return;
      const [aSnap, prog, alunos] = await Promise.all([db().collection(DIARIO + "/" + t.id + "/aulas").get(), progressoDaTurma(t.id), alunosDaTurma(t.id)]);
      const validos = new Set(alunos.filter(a => a.ativo !== false && !a.teste).map(a => a.id));
      if (!validos.size) return;
      const aulas = {}; aSnap.docs.forEach(x => { aulas[x.id] = x.data(); });
      const veio = new Set(); prog.forEach(p => { if (validos.has(p.alunoId)) Object.keys(p.dias || {}).forEach(d => veio.add(d)); });
      dias.forEach(d => { const a = aulas[d] || {};
        if (ocorrDe(a) || veio.has(d) || String(a.registro || "").trim() || Object.values(a.presencas || {}).some(v => v)) return;
        out.push({ t, d }); });
    }));
    return out.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : a.t.aula.ini < b.t.aula.ini ? -1 : 1);
  }
  async function salvarOcorrencia(tid, d, tipo, nota) {
    await db().collection(DIARIO + "/" + tid + "/aulas").doc(d).set({ data: d, ocorrencia: tipo ? { tipo, nota: nota || "", em: new Date().toISOString() } : null }, { merge: true });
  }
  /* 📣 Avisos ao abrir o painel: datas comemorativas e feriados (hoje e próximos 7 dias), tema que começou, SIGE, prazos
     e recados das turmas de hoje. "✔ Já li" não mostra mais (fica em prof/avisos, vale em qualquer computador);
     feriados e datas que estão chegando: o "Já li" vale só para o dia; no dia seguinte o aviso volta com a nova contagem (17/11/2026);
     "⏰ Ver depois" mostra de novo no próximo login. Depois dos avisos vêm as perguntas das aulas sem registro. */
  const PRAZOS = [ // [mostrar a partir de, até, id, texto]
    ["2026-11-12", "2026-11-13", "reposicao-8ano-2026-11-13", "🏫 <b>Sexta, 13/11, às 10h30: aula de reposição</b> com a turma de quarta (8º ano) que ficou sem aula em 11/11. Chegar antes das 10h30. Depois, registrar a aula no 📒 Diário da turma."],
    ["2026-11-13", "2026-11-13", "rede-sexta-2026-11-13", "📡 <b>Rede (sexta):</b> olhar o vigia do MikroTik (quedas do roteador do corredor superior, AP AEE .240) e trocar a fonte dele, se já tiver a nova (12 V / 2 A)."],
    ["2026-11-16", "2026-11-23", "boletins-2026-4b", "📄 <b>Boletins em PDF do 4º bimestre</b> até 23/11 (📒 Diário › 🧮 Boletim)."],
    ["2026-12-01", "2026-12-31", "sige-reabre-2026", "🏛️ <b>SIGE: fique atento à reabertura de fim de ano.</b> Quando abrir, registrar o ano inteiro de 2026 (aulas e conteúdos) com o Claude; a frequência é você quem lança."]
  ];
  function datasDoAno(ano) {
    const pas = (() => { const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451); return new Date(ano, Math.floor((h + l - 7 * m + 114) / 31) - 1, ((h + l - 7 * m + 114) % 31) + 1); })();
    const ds = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`, mv = n => ds(new Date(pas.getFullYear(), pas.getMonth(), pas.getDate() + n)), f = md => ano + "-" + md;
    const nDia = (mes, dow, n) => { const d = new Date(ano, mes - 1, 1); while (d.getDay() !== dow) d.setDate(d.getDate() + 1); d.setDate(d.getDate() + 7 * (n - 1)); return ds(d); }, nDom = (mes, n) => nDia(mes, 0, n);
    return [ // [data, nome, tipo: feriado | facultativo | data]
      [f("01-01"), "🎆 Confraternização Universal", "feriado"], [mv(-48), "🎭 Carnaval (segunda)", "facultativo"], [mv(-47), "🎭 Carnaval (terça)", "facultativo"], [mv(-46), "Quarta-feira de Cinzas", "facultativo"],
      [mv(-2), "✝️ Sexta-feira Santa", "feriado"], [mv(0), "🐰 Páscoa", "data"], [f("04-19"), "🌿 Dia dos Povos Indígenas", "data"], [f("04-21"), "Tiradentes", "feriado"], [f("05-01"), "👷 Dia do Trabalhador", "feriado"],
      [f("05-10"), "🎂 Aniversário de Curionópolis (1988)", "data"], [mv(60), "Corpus Christi", "facultativo"], [f("06-24"), "🌽 São João", "data"], [f("08-11"), "🎓 Dia do Estudante", "data"], [f("08-15"), "Adesão do Pará", "feriado"],
      [f("08-22"), "🍃 Dia do Folclore", "data"], [f("09-07"), "🇧🇷 Independência do Brasil", "feriado"], [f("10-12"), "🎈 Dia das Crianças · Nossa Senhora Aparecida", "feriado"], [f("10-15"), "🍎 Dia do Professor", "data"],
      [f("10-31"), "🌪️ Dia do Saci", "data"], [f("11-02"), "Finados", "feriado"], [f("11-15"), "Proclamação da República", "feriado"], [f("11-20"), "✊🏿 Dia Nacional de Zumbi e da Consciência Negra", "feriado"], [f("11-27"), "⛪ Nossa Senhora das Graças, padroeira de Curionópolis (feriado municipal)", "feriado"],
      [f("12-24"), "🎄 Véspera de Natal", "facultativo"], [f("12-25"), "🎄 Natal", "feriado"], [f("12-31"), "🎆 Véspera de Ano-Novo", "facultativo"],
      // 🏫 datas da escola e das pessoas que trabalham nela (12/11/2026: faltava o Dia do Diretor de Escola)
      [f("03-12"), "📚 Dia do Bibliotecário", "data"], [f("03-15"), "🏫 Dia da Escola", "data"], [f("04-28"), "📘 Dia da Educação", "data"], [f("04-24"), "👨‍👩‍👧 Dia Nacional da Família na Escola", "data"],
      [f("08-06"), "👩‍🏫 Dia Nacional dos Profissionais da Educação (todos que trabalham na escola)", "data"], [f("09-30"), "🗂️ Dia da Secretária (parabenize a secretaria da escola)", "data"],
      [f("10-21"), "🍲 Dia Nacional da Alimentação na Escola", "data"], [f("10-28"), "🏛️ Dia do Servidor Público", "data"], [f("10-30"), "🍲 Dia da Merendeira Escolar (parabenize a equipe da cozinha)", "data"],
      [f("11-12"), "🏫 Dia do Diretor de Escola (parabenize a direção)", "data"], [nDom(5, 2), "💐 Dia das Mães", "data"], [nDom(8, 2), "👔 Dia dos Pais", "data"], [f("07-26"), "👵 Dia dos Avós", "data"],
      // 💻 Informática e internet (a matéria do professor)
      [nDia(2, 2, 2), "🔐 Dia da Internet Segura", "data"], [f("05-17"), "🌐 Dia Mundial da Internet (Telecomunicações e Sociedade da Informação)", "data"], [f("08-15"), "💻 Dia da Informática", "data"], [ds(new Date(ano, 0, 256)), "👨‍💻 Dia do Programador (256º dia do ano)", "data"],
      // 🧩 inclusão, direitos e cuidado
      [f("03-21"), "🧦 Dia Mundial da Síndrome de Down · Dia Internacional contra a Discriminação Racial", "data"], [f("04-02"), "🧩 Dia Mundial de Conscientização do Autismo", "data"], [f("04-07"), "🛑 Dia Nacional de Combate ao Bullying e à Violência na Escola · Dia Mundial da Saúde", "data"],
      [f("05-18"), "🛡️ Dia Nacional de Combate ao Abuso e à Exploração Sexual de Crianças e Adolescentes", "data"], [f("06-12"), "🚸 Dia Mundial contra o Trabalho Infantil", "data"], [f("07-13"), "📜 Aniversário do ECA (Estatuto da Criança e do Adolescente)", "data"],
      [f("09-21"), "♿ Dia Nacional de Luta da Pessoa com Deficiência · 🌳 Dia da Árvore", "data"], [f("11-18"), "✊ Dia Nacional de Combate ao Racismo", "data"], [f("12-03"), "♿ Dia Internacional da Pessoa com Deficiência", "data"],
      // 🌎 datas que costumam entrar nas aulas
      [f("03-08"), "💜 Dia Internacional da Mulher", "data"], [f("03-14"), "➗ Dia Internacional da Matemática", "data"], [f("03-22"), "💧 Dia Mundial da Água", "data"], [f("04-18"), "📖 Dia Nacional do Livro Infantil (Monteiro Lobato)", "data"],
      [f("04-22"), "⛵ Descobrimento do Brasil · 🌍 Dia da Terra", "data"], [f("04-23"), "📚 Dia Mundial do Livro", "data"], [f("05-05"), "🗣️ Dia da Língua Portuguesa e da Cultura Lusófona", "data"], [f("05-13"), "✊🏿 Abolição da Escravatura", "data"],
      [f("06-05"), "🌱 Dia Mundial do Meio Ambiente", "data"], [f("09-05"), "🌳 Dia da Amazônia", "data"], [f("09-08"), "🔤 Dia Mundial da Alfabetização", "data"], [nDom(10, 2), "🕯️ Círio de Nazaré (Belém/PA)", "data"],
      [f("11-05"), "🗣️ Dia Nacional da Língua Portuguesa", "data"], [f("11-19"), "🇧🇷 Dia da Bandeira", "data"]
    ];
  }
  /* 🔔 sininho (13/11/2026): abre os avisos de hoje a qualquer momento, sem sair e entrar de novo;
     mostra também os já lidos (apagadinhos) e o número dos que faltam ler */
  function contarSino(n) { const b = document.getElementById("pp-sino-n"); if (!b) return; b.hidden = !n; b.textContent = n > 9 ? "9+" : String(n || ""); }
  /* 🏠 estudo em casa (18/11/2026): o que cada aluno que estuda em casa fez hoje (entrada, sessão, vídeo, tarefas, erros) */
  async function casaHoje() {
    const hoje = N.hoje(), hm = ms => new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }), dia = ms => { const d = new Date(ms); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
    const al = (await db().collection("alunos").where("emCasa", "==", true).get()).docs.map(d => ({ id: d.id, ...d.data() })).filter(a => a.ativo !== false);
    return Promise.all(al.map(async a => {
      const pg = (await db().collection("progresso").where("alunoId", "==", a.id).get()).docs.map(d => d.data());
      const ent = pg.find(p => p.tipo === "entrada") || {}, cs = pg.find(p => p.tipo === "casa") || {};
      const entradas = Object.keys((ent.entradas || {})[hoje] || {}).map(Number).sort((x, y) => x - y);
      const ini = (cs.sessoes || {})[hoje] || 0, vid = Object.values(cs.videos || {}).filter(ts => ts && dia(ts) === hoje);
      const tf = []; pg.filter(p => p.aid && p.mid).forEach(p => { let atv = {}; try { atv = JSON.parse(p.atv || "{}"); } catch (e) {} Object.values(atv).forEach(st => { if (st && st.status && st.quando && dia(st.quando) === hoje) tf.push(st); }); });
      return { a, entradas, ini, vid, tf, hm, ultima: tf.length ? Math.max(...tf.map(x => x.quando)) : 0 };
    })).then(l => l.filter(x => x.entradas.length || x.ini || x.tf.length));
  }
  function casaAviso(x) {
    const { a, entradas, ini, vid, tf, hm, ultima } = x;
    const certos = tf.filter(t => t.status === "certo").length, erros = tf.reduce((s, t) => s + (t.tentativas || 0), 0), dicas = tf.reduce((s, t) => s + (t.dicas || 0), 0);
    const marca = Math.max(ultima, ini, entradas[entradas.length - 1] || 0);
    return { id: "casa-" + a.id + "-" + marca, ic: "🏠", txt: `<b>${esc(a.nome)} estudou em casa hoje</b> (${esc(nomeTurma(a.turma))}): entrou às ${entradas.map(hm).join(", ") || "—"}${ini ? ` · sessão das ${hm(ini)}` : " · ainda não abriu tarefa"}${vid.length ? " · 🎬 viu o vídeo da missão" : ""} · <b>${tf.length} tarefa${tf.length === 1 ? "" : "s"}</b>${tf.length ? ` (${certos} sozinho, ${erros} erro${erros === 1 ? "" : "s"}, ${dicas} dica${dicas === 1 ? "" : "s"}), última às ${hm(ultima)}` : ""}. <a href="#/painel/relatorio/${esc(a.id)}/${N.hoje()}">📄 Ver o relatório</a>` };
  }
  /* 🔔 aviso na hora: quando um aluno que estuda em casa entra no portal ou termina uma tarefa, o painel avisa (toast + sininho) */
  let casaOuvindo = false;
  async function ouvirCasa() {
    if (casaOuvindo) return; casaOuvindo = true;
    try {
      const al = (await db().collection("alunos").where("emCasa", "==", true).get()).docs.map(d => ({ id: d.id, ...d.data() })).filter(a => a.ativo !== false);
      al.forEach(a => {
        const visto = {};
        ["_entrada", "_casa"].forEach(suf => db().collection("progresso").doc(a.id + suf).onSnapshot(sn => {
          const d = sn.exists ? sn.data() : {}, hoje = N.hoje();
          const marca = suf === "_entrada" ? Math.max(0, ...Object.keys((d.entradas || {})[hoje] || {}).map(Number)) : ((d.sessoes || {})[hoje] || 0);
          if (visto[suf] !== undefined && marca && marca > visto[suf]) {
            toast(suf === "_entrada" ? `🏠 ${a.nome} entrou no portal agora (estudo em casa).` : `🏠 ${a.nome} começou a sessão de estudo em casa.`);
            mostrarAvisos({ contar: true }).catch(() => {});
          }
          visto[suf] = marca;
        }, () => {}));
      });
    } catch (e) { console.warn("ouvir casa", e); }
  }
  /* 🎬 lembrete da família (18/11/2026): para alunos marcados (alunos/<id>.lembreteFamilia = "o que fazer"), quando a aula
     em que o aluno vem (outraTurma ou a turma dele) termina, o painel avisa na hora: no 🏁 Finalizar aula ou, se a aula acabou
     pelo relógio, no minuto em que o horário termina (com o painel aberto). Se o painel estava fechado, o aviso aparece ao entrar
     (e no 🔔). "✅ Já fiz" encerra o lembrete do dia (prof/avisos.lidos) */
  const fimAula = t => { if (!t || !t.aula || !t.aula.ini) return null; const [H, M] = t.aula.ini.split(":").map(Number); const d = new Date(); d.setHours(H, M + (cat().duracaoAula || 75), 0, 0); return d.getTime(); };
  async function familiasPendentes(op = {}) {
    const hoje = N.hoje(), dow = new Date(hoje + "T12:00:00").getDay(), turmas = todasTurmas();
    const al = (await db().collection("alunos").where("lembreteFamilia", ">", "").get()).docs.map(d => ({ id: d.id, ...d.data() })).filter(a => a.ativo !== false);
    let lidos = {}; try { const sn = await db().collection("prof").doc("avisos").get(); lidos = (sn.exists && sn.data().lidos) || {}; } catch (e) {}
    const out = [];
    for (const a of al) {
      const t = turmas.find(x => x.id === (a.outraTurma || a.turma)); if (!t || !t.aula || t.aula.dia !== dow) continue;
      const id = ("familia-" + a.id + "-" + hoje).replace(/[^\w-]/g, "_"); if (lidos[id]) continue;
      let fin = 0; try { const h2 = await db().collection("config").doc("hoje_" + t.id).get(); const hd = h2.exists ? h2.data() : {}; if (hd.finalizadaEm && new Date(hd.finalizadaEm).toDateString() === new Date().toDateString()) fin = hd.finalizadaEm; } catch (e) {}
      const acabou = fin || (fimAula(t) && Date.now() >= fimAula(t)) || (op.turma === t.id);
      if (!acabou) continue;
      let entrou = 0; try { const e2 = await db().collection("progresso").doc(a.id + "_entrada").get(); const ent = e2.exists ? ((e2.data().entradas || {})[hoje] || {}) : {}; entrou = Math.min(...Object.keys(ent).map(Number)); if (!isFinite(entrou)) entrou = 0; } catch (e) {}
      out.push({ a, t, id, entrou });
    }
    // ⏰ avisos para mim no fim da aula de uma turma (prof/diario/turmas/<turma>.avisosFim = [{ id, texto }]), em TODA aula da turma
    for (const t of turmas.filter(x => x.aula && x.aula.dia === dow)) {
      let itens = []; try { const sn = await db().collection(DIARIO).doc(t.id).get(); itens = ((sn.exists && sn.data().avisosFim) || []).filter(x => x && x.texto); } catch (e) {}
      if (!itens.length) continue;
      let fin = 0; try { const h2 = await db().collection("config").doc("hoje_" + t.id).get(); const hd = h2.exists ? h2.data() : {}; if (hd.finalizadaEm && new Date(hd.finalizadaEm).toDateString() === new Date().toDateString()) fin = hd.finalizadaEm; } catch (e) {}
      if (!(fin || (fimAula(t) && Date.now() >= fimAula(t)) || op.turma === t.id)) continue;
      itens.forEach(x => { const id = ("fim-" + t.id + "-" + x.id + "-" + hoje).replace(/[^\w-]/g, "_"); if (!lidos[id]) out.push({ t, id, texto: x.texto }); });
    }
    return out;
  }
  // ⏰ ferramenta: editar os avisos de fim de aula de uma turma
  async function editarAvisosFim(t) {
    const ref = db().collection(DIARIO).doc(t.id);
    let itens = []; try { const sn = await ref.get(); itens = (sn.exists && sn.data().avisosFim) || []; } catch (e) {}
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga"><form method="dialog"><h2>⏰ Avisos para mim no fim da aula · ${esc(nomeTurma(t.id))}</h2>
      <p class="ajuda">Estes recados aparecem na <b>sua</b> tela no fim de <b>toda</b> aula do ${esc(nomeTurma(t.id))}${t.aula ? ` (${["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"][t.aula.dia]}, ${t.aula.ini})` : ""}: no 🏁 Finalizar aula ou, se a aula acabar pelo relógio, no minuto em que o horário termina. Os alunos não veem.</p>
      <ul class="pp-fim-lista" id="fim-l"></ul>
      <p class="row-btns"><input type="text" id="fim-novo" maxlength="300" placeholder="Ex.: mandar o vídeo da Ana para a dona Maria José" style="flex:1;min-width:0"><button type="button" class="btn" id="fim-add">➕ Adicionar</button></p>
      <div class="row-btns"><button class="btn btn-sec" value="x">Fechar</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const gravar = async () => { try { await ref.set({ avisosFim: itens }, { merge: true }); } catch (e) { toast("Não foi possível salvar: " + e.message); } };
    const desenhar = () => { const l = dlg.querySelector("#fim-l");
      l.innerHTML = itens.length ? itens.map((x, i) => `<li><span>⏰ ${esc(x.texto)}</span> <button type="button" class="btn btn-sec btn-peq" data-tira="${i}">🗑️ Tirar</button></li>`).join("") : `<li class="ajuda">Nenhum aviso ainda. Escreva abaixo e toque em ➕ Adicionar.</li>`;
      l.querySelectorAll("[data-tira]").forEach(b => b.onclick = async () => { itens.splice(+b.dataset.tira, 1); await gravar(); desenhar(); toast("Aviso tirado."); }); };
    desenhar();
    const add = async () => { const i = dlg.querySelector("#fim-novo"), v = i.value.trim(); if (!v) { i.focus(); return; }
      itens.push({ id: "a" + Date.now().toString(36), texto: v, criadoEm: Date.now() }); await gravar(); i.value = ""; desenhar(); toast("✅ Aviso salvo: aparece no fim de toda aula do " + nomeTurma(t.id) + "."); };
    dlg.querySelector("#fim-add").onclick = add;
    dlg.querySelector("#fim-novo").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); add(); } });
  }
  const familiaTxt = x => !x.a ? `<b>⏰ A aula do ${esc(nomeTurma(x.t.id))} terminou</b><br>${esc(x.texto)}` : `<b>🎬 A aula do ${esc(nomeTurma(x.t.id))} terminou: ${esc(x.a.nome)}</b><br>${esc(x.a.lembreteFamilia)}<br><small>${x.entrou ? "Entrou no portal hoje às " + new Date(x.entrou).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "Não entrou no portal hoje (confira a chamada)"}. <a href="#/painel/relatorio/${x.a.id}/${N.hoje()}">📄 Abrir o relatório de hoje</a></small>`;
  let familiaAberto = false;
  async function lembrarFamilias(op = {}) {
    if (familiaAberto || (!op.turma && document.querySelector(".pp-avisos"))) return; const lista = await familiasPendentes(op).catch(() => []);
    const agora = Date.now(), novos = lista.filter(x => +(ss.get("painel:familia-adiado:" + x.id) || 0) < agora);
    if (!novos.length) return;
    familiaAberto = true;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-familia"><form method="dialog"><h2>⏰ A aula terminou: lembretes para você</h2>
      ${novos.map((x, i) => `<div class="pp-fam-item" data-i="${i}"><p>${familiaTxt(x)}</p>
        <p class="row-btns">${x.a ? `<a class="btn" href="#/painel/relatorio/${x.a.id}/${N.hoje()}" data-ir="${i}">📄 Abrir o relatório</a>` : ""}<button type="button" class="btn btn-sec" data-feito="${i}">✅ Já fiz</button><button type="button" class="btn btn-sec" data-depois="${i}">⏰ Lembrar daqui a 30 min</button></p></div>`).join("")}
      <p class="ajuda">O lembrete volta enquanto você não tocar em ✅ Já fiz (também fica no 🔔 de hoje). Para mudar: painel → turma → ⏰ Avisos para mim no fim da aula (recados da turma) ou nome do aluno → 🎬 (relatório da família).</p>
      <div class="row-btns"><button class="btn btn-sec" value="x">Fechar</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal();
    const tira = i => { const it = dlg.querySelector(`.pp-fam-item[data-i="${i}"]`); if (it) it.remove(); if (!dlg.querySelector(".pp-fam-item")) dlg.close(); };
    dlg.querySelectorAll("[data-feito]").forEach(b => b.onclick = async () => { const x = novos[+b.dataset.feito];
      try { await db().collection("prof").doc("avisos").set({ lidos: { [x.id]: Date.now() } }, { merge: true }); toast("✅ Lembrete encerrado por hoje."); } catch (e) { toast("Não foi possível salvar: " + e.message); }
      tira(+b.dataset.feito); mostrarAvisos({ contar: true }).catch(() => {}); });
    dlg.querySelectorAll("[data-depois]").forEach(b => b.onclick = () => { const x = novos[+b.dataset.depois]; ss.set("painel:familia-adiado:" + x.id, String(Date.now() + 30 * 60000)); tira(+b.dataset.depois); });
    dlg.querySelectorAll("[data-ir]").forEach(b => b.addEventListener("click", () => { const x = novos[+b.dataset.ir]; ss.set("painel:familia-adiado:" + x.id, String(Date.now() + 30 * 60000)); dlg.close(); }));
    dlg.addEventListener("close", () => { dlg.remove(); familiaAberto = false; });
  }
  let familiaRelogio = null;
  function vigiarFamilias() { if (familiaRelogio) return; lembrarFamilias().catch(() => {}); familiaRelogio = setInterval(() => lembrarFamilias().catch(() => {}), 60000); }
  async function mostrarAvisos(op = {}) {
    if (op.manual && document.querySelector("dialog.pp-avisos[open]")) return;   // 23/11/2026: antes pegava também o quadro "🗣️ Para falar à turma" da aba Aula (mesma classe) e o 🔔 não abria
    const hoje = N.hoje(), d0 = new Date(hoje + "T12:00:00"), ano = d0.getFullYear(), dif = d => Math.round((new Date(d + "T12:00:00") - d0) / 864e5);
    const TIPO = { feriado: "feriado", facultativo: "ponto facultativo", data: "data comemorativa" };
    const lista = [];
    datasDoAno(ano).concat(datasDoAno(ano + 1)).forEach(([d, nome, tipo]) => { const n = dif(d); if (n < 0 || n > 7) return;
      lista.push(n === 0 ? { id: "hoje-" + d + "-" + nome, ic: "📅", txt: `<b>Hoje é ${nome}</b> (${TIPO[tipo]}).` }
        : { id: "prox-" + d + "-" + nome + "-" + hoje, ic: "🗓️", txt: `<b>${n === 1 ? "Amanhã" : "Daqui a " + n + " dias"} (${dataBR(d)}, ${semana(d)}):</b> ${nome} (${TIPO[tipo]}).` }); });
    if (P.temaCalendario) P.temaCalendario(ano).forEach(x => { const [dd, mm] = x.ini.split("/"); if (`${ano}-${mm}-${dd}` === hoje) lista.push({ id: "tema-" + hoje, ic: "🎨", txt: `<b>Hoje o portal entrou no tema ${x.nome}</b> (sozinho, pela data, até ${x.fim}). Para mudar: botão 🎨 Tema.` }); });
    if (d0.getDay() === 5) lista.push({ id: "sige-" + hoje, ic: "🏛️", txt: "<b>Sexta-feira: dia de registrar no SIGE</b> as aulas da semana, para não acumular (a frequência é você quem lança)." });
    PRAZOS.forEach(([de, ate, id, txt]) => { if (hoje >= de && hoje <= ate) lista.push({ id, ic: "⏰", txt }); });
    // recados das turmas que têm aula hoje
    try { await Promise.all(todasTurmas().filter(t => t.aula && t.aula.dia === d0.getDay()).map(async t => { const sn = await db().collection(DIARIO).doc(t.id).get();
      ((sn.exists && sn.data().lembretes) || []).forEach((l, i) => { if (!l.feito) lista.push({ id: "lemb-" + t.id + "-" + (l.criadoEm || i) + "-" + hoje, ic: "🟧", txt: `<b>${esc(nomeTurma(t.id))} (${t.aula.ini}):</b> ${esc(l.texto)}` }); }); })); } catch (e) {}
    try { (await casaHoje()).forEach(x => lista.push(casaAviso(x))); } catch (e) { console.warn("casa hoje", e); }
    try { (await familiasPendentes()).forEach(x => lista.push({ id: x.id, ic: x.a ? "🎬" : "⏰", txt: familiaTxt(x) })); } catch (e) { console.warn("família", e); }
    let lidos = {}; const ref = db().collection("prof").doc("avisos");
    try { const sn = await ref.get(); lidos = (sn.exists && sn.data().lidos) || {}; } catch (e) {}
    const chave = id => id.replace(/[^\w-]/g, "_").slice(0, 120);
    const naoLidos = lista.filter(a => !lidos[chave(a.id)]);
    contarSino(naoLidos.length);
    const mostrar = op.manual ? naoLidos.concat(lista.filter(a => lidos[chave(a.id)]).map(a => ({ ...a, jaLido: true }))) : naoLidos;
    if (!mostrar.length) { if (op.manual) toast("🔔 Nenhum aviso para hoje."); return; }
    if (op.contar) return;
    return new Promise(fim => {
      const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-avisos"><form method="dialog"><h2>🔔 Avisos de hoje · ${dataBR(hoje)}</h2>
        <ul class="pp-av-lista">${mostrar.map((a, i) => `<li data-i="${i}"${a.jaLido ? ' class="lido"' : ""}><span class="pp-av-ic">${a.ic}</span><span class="pp-av-txt">${a.txt}</span>${a.jaLido ? '<span class="pp-av-ok">✔ lido</span>' : `<button type="button" class="btn btn-sec btn-peq" data-lido="${i}" title="Não mostrar mais este aviso">✔ Já li</button>`}</li>`).join("")}</ul>
        <div class="row-btns"><button type="button" class="btn" id="av-todos">✔ OK, já li tudo</button><button class="btn btn-sec" value="x">⏰ Ver depois</button></div>
        <p class="ajuda">"Já li": o aviso não aparece mais sozinho (feriados e datas que estão chegando voltam no dia seguinte, com a contagem nova, até o dia). "Ver depois": aparece de novo da próxima vez que você entrar no painel. A qualquer momento, o 🔔 lá em cima abre estes avisos de novo.</p></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => { dlg.remove(); fim(); });
      const marcar = async idx => {
        try { await ref.set({ lidos: Object.fromEntries(idx.map(i => [chave(mostrar[i].id), Date.now()])) }, { merge: true }); idx.forEach(i => { lidos[chave(mostrar[i].id)] = 1; }); contarSino(lista.filter(a => !lidos[chave(a.id)]).length); } catch (e) { toast("Não foi possível salvar: " + (e.message || e)); } };
      dlg.querySelectorAll("[data-lido]").forEach(b => b.onclick = async () => { const i = +b.dataset.lido; await marcar([i]); const li = b.closest("li"); li.classList.add("lido"); b.remove();
        if (!dlg.querySelector("li:not(.lido)")) dlg.close(); });
      dlg.querySelector("#av-todos").onclick = async () => { await marcar([...dlg.querySelectorAll("li:not(.lido)")].map(li => +li.dataset.i)); dlg.close(); };
    });
  }
  async function perguntarPendentes() {
    let lista; try { lista = await aulasPendentes(); } catch (e) { console.warn("pendências", e); return; }
    if (!lista.length) return;
    const porDia = {}; lista.forEach(x => { (porDia[x.d] = porDia[x.d] || []).push(x); });
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-pend"><form method="dialog"><h2>❔ Aulas sem nenhum registro</h2>
      <p class="ajuda">Nestas aulas ninguém entrou no portal e não há chamada. Responda agora, para não esquecer o que aconteceu. Se algum aluno veio e só não entrou no portal, use <b>📒 Abrir a chamada</b>.</p>
      ${Object.entries(porDia).map(([d, xs]) => `<section class="pp-pend-dia" data-dia="${d}"><h3>${dataBR(d)} (${semana(d)})${xs.length > 1 ? ` <button type="button" class="btn btn-sec btn-peq" data-todas="${d}">🙋 Eu não fui neste dia (todas as ${xs.length} turmas)</button>` : ""}</h3>
        ${xs.map(({ t }) => `<div class="pp-pend-item" data-t="${t.id}" data-d="${d}"><strong>${esc(nomeTurma(t.id))} · ${t.aula.ini}</strong>
          <span class="pp-pend-bts">${Object.keys(OCORR).map(k => `<button type="button" class="btn btn-sec btn-peq" data-oc="${k}">${OCORR_CURTO[k]}</button>`).join("")}<a class="btn btn-sec btn-peq" data-cham href="#/painel/diario/${t.id}/chamada">📒 Abrir a chamada</a></span>
          <input type="text" class="pp-pend-nota" placeholder="Anotação (opcional): o que aconteceu?"></div>`).join("")}</section>`).join("")}
      <div class="row-btns"><button class="btn" value="x">Responder depois</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const feito = (it, tipo) => { it.classList.add("ok"); it.querySelector(".pp-pend-bts").innerHTML = `<b>✔ ${OCORR[tipo]}</b>`; it.querySelector(".pp-pend-nota").disabled = true;
      if (![...dlg.querySelectorAll(".pp-pend-item")].some(x => !x.classList.contains("ok"))) setTimeout(() => { toast("Tudo respondido. Obrigado!"); dlg.close(); }, 700); };
    dlg.querySelectorAll(".pp-pend-item").forEach(it => {
      it.querySelectorAll("[data-oc]").forEach(b => b.onclick = async () => { b.disabled = true;
        try { await salvarOcorrencia(it.dataset.t, it.dataset.d, b.dataset.oc, it.querySelector(".pp-pend-nota").value.trim()); feito(it, b.dataset.oc); } catch (err) { b.disabled = false; toast("Não foi possível salvar: " + (err.message || err)); } });
      it.querySelector("[data-cham]").onclick = () => { ss.set("painel:diario:" + it.dataset.t, it.dataset.d); ss.set("painel:turmaManual", String(Date.now())); dlg.close(); };
    });
    dlg.querySelectorAll("[data-todas]").forEach(b => b.onclick = async () => { b.disabled = true; const sec = b.closest(".pp-pend-dia"), nota = await P.perguntar("Anotação para este dia (opcional): o que aconteceu?") || "";
      for (const it of sec.querySelectorAll(".pp-pend-item:not(.ok)")) { try { await salvarOcorrencia(it.dataset.t, it.dataset.d, "professor", nota); feito(it, "professor"); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } } b.remove(); });
  }
  const nBas = v => v === true ? 1 : (+v || 0);
  const fmtN = n => n == null ? "–" : (Math.round(n * 100) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  function notaProvaDoc(d) {
    const Pv = P.provas[d.aid]; if (!Pv) return d.nota || 0;
    const qs = d.qs ? Pv.questoes.filter(q => d.qs.includes(q.id)) : Pv.questoes;
    const ac = qs.filter(q => d.respostas && d.respostas[q.id] != null && P.provaHash(d.aid, q.id, d.respostas[q.id]) === q.h).length;
    return P.prova.notaDe(ac, d.nq || qs.length);
  }
  async function telaDiario(u, tid, aba) {
    const turmas = turmasDeAula();
    tid = escolherTurma(tid, turmas);
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    aba = aba || "chamada";
    const ABAS = [["chamada", "✅ Chamada"], ["frequencia", "🗓️ Frequência"], ["boletim", "🧮 Boletim"], ["registro", "📝 Registro das aulas"], ["lembretes", "🟧 Meus recados"]];
    const el = tela(topo(u, "diario") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
        <span class="pp-missoes">${ABAS.map(([k, r]) => `<a class="pp-mis ${k === aba ? "atual" : ""}" href="#/painel/diario/${t.id}/${k}">${r}</a>`).join("")}</span></div>
      <div id="corpo"><p class="painel">Carregando o diário…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/diario/" + e.target.value + "/" + aba; };
    const hoje = N.hoje();
    const tRef = db().collection(DIARIO).doc(t.id), aulasCol = db().collection(DIARIO + "/" + t.id + "/aulas");
    const [tSnap, aulasSnap, alunosTodos, progTodos, provasSnap] = await Promise.all([tRef.get(), aulasCol.get(), alunosDaTurma(t.id), progressoDaTurma(t.id), db().collection("provas").where("turma", "==", t.id).get().catch(() => ({ docs: [] }))]);
    const T = tSnap.exists ? tSnap.data() : {};
    const aulas = aulasDoBim(aulasSnap);   // 📒 só as aulas deste bimestre
    const alunos = alunosTodos.filter(a => a.ativo !== false && !a.teste);
    const ids = new Set(alunos.map(a => a.id)), emCasa = new Set(alunos.filter(a => a.emCasa).map(a => a.id));
    const modoHelena = new Set(alunos.filter(a => a.modoHelena).map(a => a.id));   // 🌟 25/11/2026: o visto vem da presença
    const prog = progDoBim(progTodos).filter(p => ids.has(p.alunoId));
    // cronograma: o do diário; se não houver, monta pelas missões do catálogo
    const base = cat().apostilas.find(a => a.serie === t.serie.id && P.doPeriodo(a) && !a.oculta && !a.trilha);
    if (base) await P.carregarApostila(base.id).catch(() => null);
    const tituloM = m => { const C = base && P.conteudo[base.id]; const x = C && C.missoes.find(y => y.id === m); return x ? x.titulo : SIG(m); };
    const cron = cronFiltro(cronComRede(t, (cronDoBim(T) || Object.entries(missoes4Bim(t)).map(([data, m]) => ({ data, encontro: tituloM(m) }))).slice().sort((a, b) => a.data < b.data ? -1 : 1)));
    const encontroDe = d => (aulas[d] && aulas[d].encontro) || (cron.find(c => c.data === d) || {}).encontro || "";
    // notas da prova feita no portal (maior entre a prova e a recuperação)
    const provasBim = provasSnap.docs.filter(x => P.aidDoPeriodo(x.data().aid));   // 📒 só as provas das apostilas deste bimestre
    const aidsProva = [...new Set(provasBim.map(x => x.data().aid))];
    await Promise.all(aidsProva.map(x => P.prova.carregar(x).catch(() => null)));
    const provaPortal = {}; provasBim.forEach(x => { const d = x.data(); const n = notaProvaDoc(d); provaPortal[d.alunoId] = Math.max(provaPortal[d.alunoId] ?? -1, n); });
    // ⚡ automático do portal
    const ehDiaDeAula = d => P.noPeriodo(d) && (!!aulas[d] || cron.some(c => c.data === d) || (t.aula && new Date(d + "T12:00:00").getDay() === t.aula.dia));
    const AUTO = {}; const ad = d => AUTO[d] = AUTO[d] || { p: {}, c: {}, x: {} };
    prog.forEach(p => {
      if (p.mid === "rc") return;   // 📝 a atividade de recuperação não conta presença nem visto
      const ds = Object.keys(p.dias || {}).filter(ehDiaDeAula).sort(); if (!ds.length) return;
      ds.forEach(d => { ad(d).p[p.alunoId] = "P"; });
      if (!p.mid) return;
      if (p.basicoOk) { const d = Object.keys(p.basicoOkEm || {}).filter(ehDiaDeAula).sort()[0] || ds[ds.length - 1]; const c = ad(d).c; c[p.alunoId] = Math.min(2, (c[p.alunoId] || 0) + 1); }
      let n = 0;
      if ((p.desafio || [0, 0])[1] && p.desafio[0] === p.desafio[1]) n++;
      if ((p.turbo || [0, 0])[1] && p.turbo[0] === p.turbo[1]) n++;
      if (n) { const x = ad(ds[ds.length - 1]).x; x[p.alunoId] = Math.min(2, (x[p.alunoId] || 0) + n); }
    });
    let auto = T.auto !== false;
    const temManual = (aula, campo, id) => aula && aula[campo] && aula[campo][id] !== undefined && aula[campo][id] !== null;
    // 🔁 reposição (14/11/2026): faltou, mas depois concluiu o Básico da missão daquele dia (em casa ou liberado) → vira J,
    //    como quem estuda em casa. J conta como presença na frequência.
    // 🏷️ encontro sempre com o título da missão ("Missão 1" → "Missão 1 – O computador e onde moram os dados")
    const encCompleto = d => { const e = encontroDe(d), m = midDoTexto(e); return m && !/ [–-] /.test(e) ? tituloM(m) : e; };
    const midDoDia = d => { const a = aulas[d]; return (a && a.missaoHoje && a.missaoHoje.mid) || midDoTexto(encontroDe(d)); };
    // aula de missão = teve 📌 missão do dia (M1…M4 ou 🔁 Revisão) ou o encontro é Missão / Revisão / Projeto final
    const ehAulaMissao = d => !!midDoDia(d) || /^(Missão|Projeto final|Revis)/.test(encontroDe(d));
    const fezMissao = {}; prog.forEach(p => { if (p.mid && p.mid !== "rc" && p.basicoOk) (fezMissao[p.alunoId] = fezMissao[p.alunoId] || new Set()).add(p.mid); });
    const repos = (d, id) => { const m = midDoDia(d); return !!(m && fezMissao[id] && fezMissao[id].has(m)); };
    const pres = (d, id) => { const a = aulas[d]; if (semAula(a)) return { v: null };
      if (temManual(a, "presencas", id)) return a.presencas[id] === "F" && repos(d, id) ? { v: "J", auto: true, repos: true } : { v: a.presencas[id], auto: false };
      if (auto && AUTO[d] && AUTO[d].p[id]) return { v: "P", auto: true };
      return temChamada(d) ? (emCasa.has(id) ? { v: "J", auto: true } : repos(d, id) ? { v: "J", auto: true, repos: true } : { v: "F", auto: true, falta: true }) : { v: null }; };
    const temChamada = d => ocorrDe(aulas[d]) ? ocorrDe(aulas[d]).tipo === "ninguem" : Object.values((aulas[d] || {}).presencas || {}).some(v => v) || (auto && AUTO[d] && Object.keys(AUTO[d].p).length > 0);
    const carimbo = (d, id) => { const a = aulas[d]; if (temManual(a, "carimbos", id)) return { v: nBas(a.carimbos[id]), auto: false };
      if (auto && AUTO[d] && AUTO[d].c[id]) return { v: AUTO[d].c[id], auto: true };
      // 🌟 Modo Helena (25/11/2026, pedido do professor): o importante é vir e conviver; presente em aula de missão = visto do dia
      if (modoHelena.has(id) && ehAulaMissao(d) && pres(d, id).v === "P") return { v: 1, auto: true, helena: true };
      return { v: 0 }; };
    const extra = (d, id) => { const a = aulas[d]; if (temManual(a, "extras", id)) return { v: +a.extras[id] || 0, auto: false }; return auto && AUTO[d] && AUTO[d].x[id] ? { v: AUTO[d].x[id], auto: true } : { v: 0 }; };
    const parcial = (d, id) => !!(((aulas[d] || {}).parciais || {})[id]);
    const diasComChamada = () => [...new Set([...Object.keys(aulas), ...(auto ? Object.keys(AUTO) : [])])].filter(d => d <= hoje && temChamada(d)).sort();
    const freq = id => { let p = 0, f = 0, j = 0; diasComChamada().forEach(d => { const v = pres(d, id).v; if (v === "P") p++; else if (v === "F") f++; else if (v === "J") j++; }); const tot = p + f + j; return { p, f, j, tot, pct: tot ? Math.round(100 * (p + j) / tot) : null }; };
    const notas = notasDoBim(T);   // 📒 notas do bimestre em uso
    // 📝 nota da atividade de recuperação feita no portal (0 a 10), só das apostilas do bimestre em uso (15/11/2026)
    const aidsBim = new Set(cat().apostilas.filter(a => a.serie === t.serie.id && P.doPeriodo(a)).map(a => a.id));
    const recPortal = {}; prog.forEach(p => { if (p.mid === "rc" && p.notaRec != null && aidsBim.has(p.aid)) recPortal[p.alunoId] = Math.max(recPortal[p.alunoId] ?? -1, +p.notaRec); });
    const boletim = id => {
      const dias = [...new Set([...Object.keys(aulas), ...Object.keys(AUTO)])];
      let bas = 0, ext = 0; dias.forEach(d => { bas += carimbo(d, id).v; ext += extra(d, id).v; });
      /* 📘 Apostila (combinado em 14/11/2026): o Básico vale até 4,0 dividido pelas aulas de missão que a TURMA teve
         (M1, M2, M3, M4 e a 🔁 Revisão, quando a turma teve). Ex.: 5 aulas → 0,8 por visto; 3 aulas → 1,33. */
      const nAulas = diasComChamada().filter(ehAulaMissao).length;
      const basC = Math.round(100 * (nAulas ? Math.min(4, 4 * Math.min(bas, nAulas) / nAulas) : Math.min(4, bas))) / 100, bonus = Math.min(1, ext * 0.25), A = basC + bonus;
      const man = notas.prova[id], B = man != null && man !== "" ? +man : provaPortal[id] != null ? provaPortal[id] : null;
      const nota = A + (B || 0); const rv = notas.rec[id], recManual = !(rv == null || rv === ""), r = recManual ? +rv : recPortal[id] != null ? recPortal[id] : null;
      const final = r != null && r > nota ? r : nota;
      const encs = diasComChamada().filter(ehAulaMissao);
      const deficit = Math.max(0, encs.length - bas), falta = [];
      if (deficit) falta.push(`Básico de ${deficit} aula${deficit > 1 ? "s" : ""}`);
      if (B == null && cron.some(c => /^Avalia/.test(c.encontro) && c.data <= hoje)) falta.push("fazer a prova (2ª chamada)");
      if (B != null && final < 5 && r == null) falta.push("recuperação");
      const sit = B == null && r == null ? { c: "wait", t: "Aguardando prova" } : final >= 5 ? { c: "ok", t: "Aprovado" } : r == null ? { c: "bad", t: "Fazer recuperação" } : { c: "bad", t: "Abaixo da média" };
      return { bas, basC, nAulas, ext, bonus, A, B, provaManual: man != null && man !== "", recManual, nota, r, final, sit, falta, recUsada: r != null && r > nota };
    };
    // dia da chamada: hoje se for dia de aula; senão, a última aula
    /* 🙂 COMO A TURMA SE SENTIU (autoavaliação de carinhas do modelo em espiral, 20/11/2026): resumo do dia no 📒 Diário,
       com quem disse "😟 não entendi" ou "😐 mais ou menos" e o que achou mais difícil, para o professor ajudar quem precisa. */
    const diaDe = ts => { const d = new Date(ts); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
    const carinhasDoDia = d => {
      const L = [];
      prog.forEach(p => { if (!p.aid || !p.mid) return; let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (e) {}
        const st = atv[p.mid + "-carinhas"]; if (!st || !st.status || !st.car || !st.quando || diaDe(st.quando) !== d) return;
        const C = P.conteudo[p.aid], m = C && C.missoes.find(x => x.id === p.mid), termos = [...((m && m.termos) || []).map(x => P.util.semTags(x.termo)), "nada difícil"];
        const a = alunos.find(x => x.id === p.alunoId); if (!a) return;
        L.push({ a, car: st.car, dif: m ? Object.keys(st.dif || {}).filter(k => st.dif[k]).map(k => termos[k]).filter(Boolean) : [] }); });
      if (!L.length) return "";
      const n = v => L.filter(x => x.car === v).length, aten = L.filter(x => x.car !== "3").sort((x, y) => x.car - y.car);
      return `<details class="pp-carinhas" ${aten.length ? "open" : ""}><summary>🙂 <b>Como a turma se sentiu</b> (autoavaliação): 😀 ${n("3")} · 😐 ${n("2")} · 😟 ${n("1")}</summary>
        ${aten.length ? `<ul>${aten.map(x => `<li>${x.car === "1" ? "😟" : "😐"} <b>${esc(x.a.nome)}</b>${x.dif.length ? `: achou difícil <i>${x.dif.map(esc).join(", ")}</i>` : ""}</li>`).join("")}</ul>` : `<p class="ajuda">Todos disseram que entenderam tudo. 🎉</p>`}</details>`;
    };
    let dia = sessionStorage.getItem("painel:diario:" + t.id) || (ehDiaDeAula(hoje) ? hoje : ([...cron.map(c => c.data), ...Object.keys(aulas)].filter(d => d <= hoje).sort().pop() || hoje));
    const salvarAula = async patch => {
      const novo = !aulas[dia];
      const base0 = novo ? { data: dia, encontro: encontroDe(dia), presencas: {}, carimbos: {}, parciais: {}, extras: {}, registro: "" } : {};
      const a = aulas[dia] = aulas[dia] || { ...base0 };
      Object.entries(patch).forEach(([k, v]) => { a[k] = v && typeof v === "object" ? { ...(a[k] || {}), ...v } : v; });
      try { await aulasCol.doc(dia).set({ ...base0, ...patch }, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
    };
    const salvarTurma = async patch => { try { await tRef.set(patch, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } };
    const corpo = el.querySelector("#corpo");
    const nomeA = a => `${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}${a.emCasa ? ` <span class="pp-casa-tag" title="${esc(a.emCasaObs || "Estuda em casa")}">🏠 estuda em casa</span>` : ""}`;
    const lemb = () => (T.lembretes || []);

    function vChamada() {
      const enc = encontroDe(dia), pend = lemb().filter(l => !l.feito);
      const cnt = { P: 0, F: 0, J: 0 }; alunos.forEach(a => { const v = pres(dia, a.id).v; if (v) cnt[v]++; });
      return `<div class="painel">
        ${pend.length ? `<div class="pp-lemb"><strong>🟧 Recados desta turma</strong><ul>${pend.map(l => `<li>${esc(l.texto)}</li>`).join("")}</ul></div>` : ""}
        ${missaoTxt(aulas[dia]) ? `<p class="pp-mdia-ch">Missão do dia (escolhida no painel): <span class="pp-mdia">${missaoTxt(aulas[dia])}</span></p>` : ""}
        <div class="row-btns pp-dia-bar"><label>Data <input type="date" id="dd" value="${dia}"></label>
          <label class="grow">Encontro <input type="text" id="enc" list="encs" value="${esc(enc)}" placeholder="Ex.: Missão 1 – …"><datalist id="encs">${[...new Set(cron.map(c => c.encontro))].map(o => `<option value="${esc(o)}">`).join("")}</datalist></label>
          <label class="pp-auto"><input type="checkbox" id="auto" ${auto ? "checked" : ""}> ⚡ Automático do portal</label></div>
        ${(() => { const o = ocorrDe(aulas[dia]); return o ? `<div class="pp-ocorr ${o.tipo}"><strong>${OCORR[o.tipo]}</strong>
            <p class="ajuda">${o.tipo === "ninguem" ? "Todos ficam com falta nesta aula (quem estuda em casa fica com J). Se alguém veio, toque em P no nome dele." : "Esta aula não conta na frequência de ninguém."}</p>
            <textarea id="oc-nota" class="pp-area" rows="2" placeholder="Anotação: o que aconteceu? (para lembrar no futuro)">${esc(o.nota || "")}</textarea>
            <div class="row-btns"><button type="button" class="btn btn-sec btn-peq" id="oc-salvar">💾 Salvar anotação</button><button type="button" class="btn btn-sec btn-peq" id="oc-desfazer">↩️ Desfazer (a aula aconteceu)</button></div></div>`
          : `<details class="pp-ocorr-abrir"><summary>🚦 Esta aula não aconteceu normalmente? (ninguém veio, você não foi, feriado, sem aula na escola…)</summary>
            <div class="row-btns">${Object.keys(OCORR).map(k => `<button type="button" class="btn btn-sec btn-peq" data-oc="${k}">${OCORR[k]}</button>`).join("")}</div></details>`; })()}
        ${semAula(aulas[dia]) ? "" : `<p class="pp-cont"><span>✅ ${cnt.P} presente${cnt.P === 1 ? "" : "s"}</span> <span>❌ ${cnt.F} falta${cnt.F === 1 ? "" : "s"}</span> <span>📝 ${cnt.J} justificada${cnt.J === 1 ? "" : "s"}</span></p>
        <p class="ajuda">⚡ = veio do portal (o aluno entrou com o código, concluiu o Básico, completou o Desafio ou o Turbo). Toque para corrigir: o que você marca vale mais que o automático. Quem não entrou no portal fica com falta; se ele veio e não entrou, toque em <b>P</b>.</p>
        ${carinhasDoDia(dia)}
        <ul class="pp-cham">${alunos.map((a, i) => { const p = pres(dia, a.id), c = carimbo(dia, a.id), x = extra(dia, a.id), pa = parcial(dia, a.id) && !c.v, fr = freq(a.id);
          return `<li><span class="n">${i + 1}</span><span class="nm">${nomeA(a)}<br><small>${fr.pct == null ? "sem registros" : fr.pct + "% de presença"}</small></span>
            <span class="seg">${["P", "F", "J"].map(v => `<button type="button" data-pres="${a.id}" data-v="${v}" aria-pressed="${p.v === v}" class="${p.v === v && p.auto ? "auto" : ""}" title="${{ P: "Presente", F: "Falta", J: "Falta justificada" }[v]}">${p.v === v && p.auto && v === "P" ? "⚡P" : v}</button>`).join("")}</span>
            <button type="button" class="stamp ${c.auto ? "auto" : ""} ${pa ? "part" : ""}" data-car="${a.id}" aria-pressed="${c.v > 0 || pa}">${c.v === 2 ? "✓✓ Básico ×2" : c.v ? (c.auto ? "⚡ " : "✓ ") + "Básico" : pa ? "◐ Parcial" : "Básico"}</button>
            <button type="button" class="stamp x ${x.auto ? "auto" : ""}" data-ext="${a.id}" aria-pressed="${x.v > 0}">${x.v ? (x.auto ? "⚡" : "") + "★".repeat(x.v) : "☆"} Desafio/Turbo</button></li>`; }).join("")}</ul>
        <p class="ajuda">Básico: toque para avançar — <b>◐ Parcial</b> (começou e termina na próxima aula, não vale nota) → <b>✓ Básico</b> (1,0) → <b>✓✓ ×2</b> (reposição) → sem visto. Desafio/Turbo: 0,25 cada (toque para 1 ou 2).</p>`}
        <h3>O que aconteceu nesta aula</h3>
        <textarea id="reg" class="pp-area" rows="4" placeholder="Ex.: turma agitada no começo; o computador 7 travou.">${esc((aulas[dia] || {}).registro || "")}</textarea>
        <div class="row-btns"><button type="button" class="btn" id="reg-ok">💾 Salvar registro</button></div></div>`;
    }
    function vFrequencia() {
      const ds = diasComChamada();
      if (!ds.length) return `<div class="painel"><p>Ainda não há chamada nesta turma.</p></div>`;
      const ab = e => (e || "").replace(/ –.*/, "").replace("Missão ", "M").replace("Projeto final", "PF").replace("Avaliação", "Aval.");
      return `<div class="painel"><div class="tabela-wrap"><table class="pp-freq"><thead><tr><th>Aluno</th>${ds.map(d => `<th title="${esc(encCompleto(d))}">${dataBR(d).slice(0, 5)}<br><small>${ocorrDe(aulas[d]) ? "🚫 ninguém veio" : esc(ab(encCompleto(d)))}</small>${ocorrDe(aulas[d]) || !/ [–-] /.test(encCompleto(d)) ? "" : `<br><span class="pp-th-t">${esc(encCompleto(d).replace(/^[^–-]*[–-]\s*/, ""))}</span>`}${ocorrDe(aulas[d]) ? "" : (n => `<br><small class="pp-vieram">👥 ${n} ${n === 1 ? "veio" : "vieram"}</small>`)(alunos.filter(a => pres(d, a.id).v === "P").length)}</th>`).join("")}<th>Frequência</th></tr></thead>
        <tbody>${alunos.map(a => { const fr = freq(a.id); return `<tr><td>${nomeA(a)}</td>${ds.map(d => { const p = pres(d, a.id), c = carimbo(d, a.id).v; return `<td><span class="m ${p.v || "x"} ${c ? "c" : ""} ${p.falta ? "au" : ""}" ${p.repos ? 'title="🔁 Faltou, mas repôs a missão depois (conta como falta justificada)"' : ""}>${p.v || "·"}${p.repos ? "🔁" : ""}</span></td>`; }).join("")}<td class="${fr.pct != null && fr.pct < 75 ? "baixa" : ""}"><strong>${fr.pct == null ? "–" : fr.pct + "%"}</strong></td></tr>`; }).join("")}</tbody></table></div>
        ${(lg => lg.length ? `<p class="pp-leg-m">${lg.map(e => `<span><b>${esc(ab(e))}</b> = ${esc(e.replace(/^[^–]*–\s*/, ""))}</span>`).join("")}</p>` : "")([...new Set(ds.map(d => encCompleto(d)).filter(e => / – /.test(e)))])}
        <p class="ajuda">P presente · F falta · J justificada · J🔁 repôs a missão depois · contorno = com visto do Básico. Frequência = presenças e justificadas ÷ aulas com chamada (abaixo de 75% fica em vermelho). É só informativa: não entra na nota.</p></div>`;
    }
    function vBoletim() {
      const rows = alunos.map(a => ({ a, b: boletim(a.id), fr: freq(a.id) }));
      const com = rows.filter(r => r.b.B != null || r.b.r != null);
      return `<div class="painel">
        <p class="pp-cont"><span>${alunos.length} alunos</span> <span>✅ ${com.filter(r => r.b.final >= 5).length} na média</span> <span>❌ ${com.filter(r => r.b.final < 5).length} abaixo de 5,0</span> <span>⏳ ${alunos.length - com.length} sem prova</span></p>
        <p class="ajuda"><b>Nota:</b> Apostila (até 5,0) = Básico até 4,0, dividido pelas aulas de missão que a turma teve (M1 a M4 e a 🔁 Revisão, só as que a turma teve), + 0,25 por Desafio/Turbo (bônus até 1,0). Prova (até 5,0) = nota da prova feita no portal (ou a que você digitar, para prova em papel). A Recuperação (0 a 10) substitui a nota quando for maior: a da 📝 atividade de recuperação do portal entra sozinha (⚡); se você digitar outra, vale a sua. Média mínima: 5,0.</p>
        <div class="tabela-wrap"><table class="pp-bol"><thead><tr><th>Aluno</th><th>Freq.</th><th>Básico</th><th>Des./Turbo</th><th>Apostila</th><th>Prova<br><small>até 5,0</small></th><th>Nota</th><th>Recup.<br><small>0 a 10</small></th><th>Final</th><th>Situação</th><th>O que falta</th></tr></thead>
        <tbody>${rows.map(({ a, b, fr }) => `<tr><td>${nomeA(a)}</td><td>${fr.pct == null ? "–" : fr.pct + "%"}</td><td>${b.bas}/${b.nAulas || 4}</td><td>${b.ext}</td><td><strong>${fmtN(b.A)}</strong></td>
          <td><input class="num" data-np="${a.id}" value="${b.provaManual ? String(notas.prova[a.id]).replace(".", ",") : ""}" placeholder="${b.B != null && !b.provaManual ? fmtN(b.B) + " ⚡" : "–"}" inputmode="decimal" aria-label="Prova de ${esc(a.nome)}"></td>
          <td>${fmtN(b.nota)}</td><td><input class="num" data-nr="${a.id}" value="${b.recManual ? String(b.r).replace(".", ",") : ""}" placeholder="${b.r != null && !b.recManual ? fmtN(b.r) + " ⚡" : "–"}" inputmode="decimal" aria-label="Recuperação de ${esc(a.nome)}"></td>
          <td><strong class="nota ${b.sit.c}">${fmtN(b.final)}</strong></td><td><span class="sit ${b.sit.c}">${b.sit.t}</span></td><td class="falta">${esc(b.falta.join(" · ") || "—")}</td></tr>`).join("")}</tbody></table></div>
        <p class="ajuda">A prova feita no portal aparece sozinha (⚡). Digite na coluna Prova só se o aluno fez a prova em papel (de 0 a 5); apague o número para voltar à nota do portal.</p>
        <div class="row-btns"><button type="button" class="btn" id="pdf-bol">🖨️ Boletim em PDF (turma + individuais)</button><button type="button" class="btn btn-ok" id="cert-cor" title="Meia folha boletim, meia folha certificado; colorido (PDF para as famílias ou impressora colorida)">🎓 Boletim + certificado (colorido)</button><button type="button" class="btn btn-sec" id="cert-pb" title="O mesmo, otimizado para a impressora preto e branco da sala">🎓 Boletim + certificado (preto e branco)</button><button type="button" class="btn btn-sec" id="xls-bol">📥 Baixar planilha (Excel)</button><button type="button" class="btn btn-sec" id="cp-bol">📋 Copiar boletim</button></div>
        <p class="ajuda">🖨️ abre uma página pronta para imprimir: a lista da turma e, depois, o boletim de cada aluno (2 por folha A4). Na janela de impressão, escolha <b>Salvar como PDF</b>. 📥 baixa a mesma tabela num arquivo que abre no Excel ou no Google Planilhas.</p></div>`;
    }
    function vRegistro() {
      // ✅ dada · ⏳ ainda vai acontecer · ❔ sem registro · 🚫/🙋/🎉/🏫 não aconteceu (14/11/2026)
      const foraDoDia = d => t.aula && new Date(d + "T12:00:00").getDay() !== t.aula.dia;
      const temAlgoReg = d => { const a = aulas[d] || {}; return !!(ocorrDe(a) || String(a.registro || "").trim() || Object.values(a.presencas || {}).some(v => v) || (AUTO[d] && Object.keys(AUTO[d].p).length)); };
      const ds = [...new Set([...Object.keys(aulas), ...cron.map(c => c.data)])].filter(d => !(foraDoDia(d) && !temAlgoReg(d))).sort().reverse();
      const stReg = (d, n) => { const o = ocorrDe(aulas[d]); if (o) return [(OCORR_CURTO[o.tipo] || "📌").split(" ")[0], o.tipo === "ninguem" ? "ninguem" : "sem"];
        if (d <= hoje && n > 0) return ["✅", "ok"]; if (d > hoje) return ["⏳", "prox"]; if (d === hoje) return ["⏳", "prox"]; return ["❔", "semreg"]; };
      const SELO = { ok: "✅ AULA DADA", prox: "⏳ AINDA VAI ACONTECER", semreg: "❔ PASSOU SEM REGISTRO", ninguem: "🚫 NINGUÉM VEIO", sem: "📌 NÃO TEVE AULA" };
      return `<div class="painel"><p class="pp-reg-leg">✅ aula dada · ⏳ ainda vai acontecer · ❔ passou sem registro · 🚫 ninguém veio · 🙋 eu não fui · 🎉 feriado · 🏫 sem aula na escola</p><ul class="pp-reg">${ds.map(d => { const a = aulas[d] || {}; const n = alunos.filter(x => pres(d, x.id).v === "P").length; const st = stReg(d, n);
        return `<li class="reg-${st[1]}"><span class="reg-selo">${SELO[st[1]]}</span><div><strong><span class="reg-ic" aria-hidden="true">${st[0]}</span> ${dataBR(d)} (${semana(d)}) · ${esc(encCompleto(d) || "Aula")}</strong>${missaoTxt(a) ? ` <span class="pp-mdia">${missaoTxt(a)}</span>` : ""} <small>${ocorrDe(a) ? esc(OCORR[ocorrDe(a).tipo]) + (ocorrDe(a).nota ? " · " + esc(ocorrDe(a).nota) : "") : d <= hoje && temChamada(d) ? n + " presentes" : d > hoje ? "⏩ prevista" : ""}</small></div>${(a.registro || "").trim() ? `<p>${esc(a.registro).replace(/\n/g, "<br>")}</p>` : ""}<button type="button" class="btn btn-sec btn-peq" data-abrir="${d}">Abrir a chamada deste dia</button></li>`; }).join("")}</ul></div>`;
    }
    function vLembretes() {
      // 🟧 22/11/2026: o lugar único dos recados (escrever, ler e histórico); a aba 🎤 Aula mostra só os pendentes
      const xs = lemb().map((l, i) => ({ ...l, i })), pend = xs.filter(l => !l.feito), lidos = xs.filter(l => l.feito).sort((x, y) => ((y.lidoEm || y.criadoEm || "") > (x.lidoEm || x.criadoEm || "") ? 1 : -1));
      const li = l => `<li class="${l.feito ? "feito" : ""}"><label><input type="checkbox" data-lb="${l.i}" ${l.feito ? "checked" : ""}> ${esc(l.texto).replace(/\n/g, "<br>")}</label> <small>${l.criadoEm ? "anotado em " + dataBR(l.criadoEm.slice(0, 10)) : ""}${l.lidoEm ? " · lido em " + dataBR(l.lidoEm.slice(0, 10)) : ""}</small></li>`;
      return `<div class="painel"><p class="pp-so-voce">🔒 <b>Só você vê.</b> Este é o lugar dos seus recados sobre esta turma: escreva aqui; os pendentes aparecem no alto da aba 🎤 Aula na próxima aula. Marque ✔ quando já tiver lido ou feito. Os alunos não veem. Para mandar um recado <b>aos alunos</b>: <a href="#/painel/turma/${t.id}">🏫 Turmas › 📣 Avisos para os alunos</a>.</p>
        <div class="row-btns"><textarea id="lb-novo" class="grow" rows="2" placeholder="Ex.: na próxima aula, começar pela correção do labirinto"></textarea><button type="button" class="btn" id="lb-add">Guardar recado</button></div>
        <h3>⏳ Pendentes (${pend.length})</h3><ul class="pp-lb">${pend.map(li).join("") || "<li class='ajuda'>Nenhum recado pendente.</li>"}</ul>
        ${lidos.length ? `<details class="pp-recado-hist"><summary>📜 Histórico: já lidos (${lidos.length})</summary><ul class="pp-lb">${lidos.map(li).join("")}</ul></details>` : ""}</div>`;
    }
    function render() {
      corpo.innerHTML = ({ chamada: vChamada, frequencia: vFrequencia, boletim: vBoletim, registro: vRegistro, lembretes: vLembretes })[aba]();
      const q = s => corpo.querySelector(s);
      if (aba === "chamada") {
        q("#dd").onchange = e => { dia = e.target.value || hoje; try { sessionStorage.setItem("painel:diario:" + t.id, dia); } catch (x) {} render(); };
        q("#enc").onchange = e => salvarAula({ encontro: e.target.value.trim() });
        q("#auto").onchange = e => { auto = e.target.checked; salvarTurma({ auto }); render(); };
        q("#reg-ok").onclick = async () => { await salvarAula({ registro: q("#reg").value }); toast("Registro salvo."); };
        corpo.querySelectorAll("[data-oc]").forEach(b => b.onclick = async () => { const tipo = b.dataset.oc;
          if (tipo === "ninguem" && !await P.confirmar("Marcar falta para todos os alunos nesta aula?")) return;
          await salvarAula({ ocorrencia: { tipo, nota: "", em: new Date().toISOString() } }); toast(OCORR[tipo]); render(); });
        if (q("#oc-salvar")) q("#oc-salvar").onclick = async () => { await salvarAula({ ocorrencia: { nota: q("#oc-nota").value.trim() } }); toast("Anotação salva."); };
        if (q("#oc-desfazer")) q("#oc-desfazer").onclick = async () => { aulas[dia].ocorrencia = null; try { await aulasCol.doc(dia).set({ ocorrencia: null }, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } render(); };
        corpo.querySelectorAll("[data-pres]").forEach(b => b.onclick = () => {
          const id = b.dataset.pres, v = b.dataset.v, cur = pres(dia, id);
          // tocar de novo no que já está marcado à mão devolve para o automático
          salvarAula({ presencas: { [id]: !cur.auto && cur.v === v ? null : v } }); render();
        });
        corpo.querySelectorAll("[data-car]").forEach(b => b.onclick = () => {
          const id = b.dataset.car, c = carimbo(dia, id).v, pa = parcial(dia, id) && !c;
          const etapa = c > 0 ? c + 1 : pa ? 1 : 0, prox = (etapa + 1) % 4;
          salvarAula({ carimbos: { [id]: prox >= 2 ? prox - 1 : 0 }, parciais: { [id]: prox === 1 } }); render();
        });
        corpo.querySelectorAll("[data-ext]").forEach(b => b.onclick = () => { const id = b.dataset.ext; salvarAula({ extras: { [id]: (extra(dia, id).v + 1) % 3 } }); render(); });
      }
      if (aba === "boletim") {
        const num = s => { s = String(s).trim().replace(",", "."); return s === "" ? null : +s; };
        corpo.querySelectorAll("[data-np],[data-nr]").forEach(inp => inp.onchange = () => {
          const id = inp.dataset.np || inp.dataset.nr, k = inp.dataset.np ? "prova" : "rec", v = num(inp.value), max = k === "prova" ? 5 : 10;
          if (v != null && (isNaN(v) || v < 0 || v > max)) { toast(`Digite um número de 0 a ${max}.`); inp.value = ""; return; }
          notas[k][id] = v; salvarTurma({ notasPor: { [P.periodoAtual()]: { [k]: { [id]: v } } } }); render();
        });
        const linhas = () => alunos.map(a => ({ a, b: boletim(a.id), fr: freq(a.id) }));
        const bimTxt = ((cat().periodos || []).find(x => x.id === P.periodoAtual()) || { nome: "4º bimestre de " + hoje.slice(0, 4) }).nome, turmaTxt = nomeTurma(t.id);
        q("#xls-bol").onclick = () => {
          const c = v => { v = String(v == null ? "" : v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
          const csv = [["Prof. Welington Laignier · Informática · " + turmaTxt + " · " + bimTxt],
            ["Nº", "Aluno", "Frequência", "Básico (vistos)", "Básico (nota até 4,0)", "Desafio/Turbo", "Apostila (até 5,0)", "Prova (até 5,0)", "Nota", "Recuperação (0 a 10)", "Final", "Situação", "O que falta"],
            ...linhas().map(({ a, b, fr }, i) => [i + 1, a.nome, fr.pct == null ? "" : fr.pct + "%", b.bas + "/" + (b.nAulas || 4), fmtN(b.basC), b.ext, fmtN(b.A), b.B == null ? "" : fmtN(b.B), fmtN(b.nota), b.r == null ? "" : fmtN(b.r), fmtN(b.final), b.sit.t, b.falta.join(" · ")])]
            .map(l => l.map(c).join(";")).join("\r\n");
          const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
          const lk = document.createElement("a"); lk.href = url; lk.download = `Boletim-${t.id}-${hoje.slice(0, 4)}-4bim.csv`; document.body.appendChild(lk); lk.click(); lk.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
          toast("Planilha baixada.");
        };
        q("#pdf-bol").onclick = () => {
          const L = linhas(), e = esc, sitCor = c => ({ ok: "#15803d", bad: "#b91c1c", wait: "#a16207" }[c] || "#333");
          const cab = `<div class="cab"><div><b>Prof. Welington Laignier</b><span>Informática · ${e(turmaTxt)} · ${e(bimTxt)}</span></div><div class="esc">EMEF Juscelino Kubitschek · Curionópolis-PA</div></div>`;
          const turma = `<section class="pg">${cab}<h1>Boletim da turma</h1>
            <table class="t"><thead><tr><th>Nº</th><th>Aluno</th><th>Freq.</th><th>Apostila<br><small>até 5,0</small></th><th>Prova<br><small>até 5,0</small></th><th>Nota</th><th>Recup.</th><th>Final</th><th>Situação</th></tr></thead>
            <tbody>${L.map(({ a, b, fr }, i) => `<tr><td>${i + 1}</td><td class="nm">${e(a.nome)}</td><td>${fr.pct == null ? "–" : fr.pct + "%"}</td><td>${fmtN(b.A)}</td><td>${b.B == null ? "–" : fmtN(b.B)}</td><td>${fmtN(b.nota)}</td><td>${b.r == null ? "–" : fmtN(b.r)}</td><td><b>${fmtN(b.final)}</b></td><td style="color:${sitCor(b.sit.c)}"><b>${e(b.sit.t)}</b></td></tr>`).join("")}</tbody></table>
            <p class="leg">Apostila = Básico até 4,0 (dividido pelas aulas de missão da turma, incluindo M4 e Revisão quando houve) + 0,25 por Desafio/Turbo (bônus até 1,0). Prova = até 5,0. Recuperação (0 a 10) substitui a nota quando for maior. Média mínima: 5,0.</p>
            <div class="ass"><span>Assinatura do professor</span><span>Data: ____/____/______</span></div></section>`;
          const ind = ({ a, b, fr }) => `<div class="bi">${cab}<h2>${e(a.nome)}</h2>
            <table class="t2"><tr><th>Frequência</th><td>${fr.pct == null ? "–" : fr.pct + "% (" + fr.p + (fr.p === 1 ? " presença" : " presenças") + (fr.j ? ", " + fr.j + (fr.j === 1 ? " justificada" : " justificadas") : "") + ", " + fr.f + (fr.f === 1 ? " falta" : " faltas") + ")"}</td></tr>
            <tr><th>Apostila (Básico)</th><td>${b.bas} de ${b.nAulas || 4} vistos = ${fmtN(b.basC)}</td></tr>
            <tr><th>Desafio / Turbo</th><td>${b.ext} completo${b.ext === 1 ? "" : "s"} = +${fmtN(b.bonus)}</td></tr>
            <tr><th>Prova</th><td>${b.B == null ? "não fez" : fmtN(b.B) + " de 5,0"}</td></tr>
            <tr><th>Nota do bimestre</th><td>${fmtN(b.nota)}</td></tr>
            ${b.r != null ? `<tr><th>Recuperação</th><td>${fmtN(b.r)}${b.recUsada ? " (substituiu a nota)" : ""}</td></tr>` : ""}
            <tr class="fin"><th>Nota final</th><td><b>${fmtN(b.final)}</b> · <b style="color:${sitCor(b.sit.c)}">${e(b.sit.t)}</b></td></tr>
            ${b.falta.length ? `<tr><th>O que falta</th><td>${e(b.falta.join(" · "))}</td></tr>` : ""}</table>
            <div class="ass"><span>Professor</span><span>Responsável</span></div></div>`;
          const pares = []; for (let i = 0; i < L.length; i += 2) pares.push(`<section class="pg dois">${ind(L[i])}${L[i + 1] ? ind(L[i + 1]) : ""}</section>`);
          const css = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{font:12px/1.35 system-ui,Arial,sans-serif;color:#111;margin:0}
            .pg{page-break-after:always}.pg:last-child{page-break-after:auto}
            .cab{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #f97316;padding-bottom:6px;margin-bottom:10px}
            .cab b{display:block;font-size:17px;color:#1e3a8a}.cab span{font-size:12px}.esc{font-size:10px;color:#666;text-align:right}
            h1{font-size:18px;margin:6px 0 10px}h2{font-size:16px;margin:4px 0 8px}
            .t{width:100%;border-collapse:collapse}.t th,.t td{border:1px solid #bbb;padding:3px 5px;text-align:center}.t th{background:#eef2ff}.t td.nm{text-align:left}
            .t tr:nth-child(even) td{background:#fafafa}.leg{font-size:10px;color:#444;margin-top:8px}
            .dois{display:flex;flex-direction:column;gap:10mm;height:272mm}.bi{flex:0 0 calc(50% - 5mm);display:flex;flex-direction:column;border:1.5px solid #1e3a8a;border-radius:8px;padding:10px 12px;overflow:hidden}
            .t2{width:100%;border-collapse:collapse;font-size:12.5px}.t2 th{text-align:left;width:38%;padding:4px 6px;background:#f1f5f9;border:1px solid #ddd}.t2 td{padding:4px 6px;border:1px solid #ddd}
            .t2 .fin th,.t2 .fin td{background:#fff7ed;font-size:14px}
            .ass{display:flex;justify-content:space-around;gap:30px;margin-top:60px}.bi .ass{margin-top:auto;padding-top:40px;padding-bottom:6px}.ass span{flex:1;text-align:center;border-top:1px solid #333;padding-top:3px;font-size:11px}
            .barra{position:sticky;top:0;background:#1e3a8a;color:#fff;padding:10px;text-align:center;font-size:14px}.barra button{font-size:14px;margin-left:10px;padding:6px 14px}
            @media print{.barra{display:none}}`;
          const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Boletim ${e(turmaTxt)} · ${e(bimTxt)}</title><style>${css}</style></head><body>
            <div class="barra">Confira e clique em Imprimir → <b>Salvar como PDF</b><button onclick="print()">🖨️ Imprimir / PDF</button></div>${turma}${pares.join("")}</body></html>`;
          const w = window.open("", "_blank");
          if (!w) { toast("O navegador bloqueou a nova aba. Permita pop-ups para este site."); return; }
          w.document.open(); w.document.write(html); w.document.close();
          setTimeout(() => { try { w.focus(); w.print(); } catch (x) {} }, 600);
        };
        /* 🎓 BOLETIM + CERTIFICADO (20/11/2026, ideia do professor): cada folha A4 = metade de cima o boletim do aluno,
           metade de baixo um certificado de participação nas aulas de Informática. Versão colorida (PDF / impressora colorida
           da secretaria) e versão preto e branco (impressora da sala). O texto é verdadeiro e muda conforme o que o aluno fez:
           quem deu show recebe elogio específico; quem fez o básico, incentivo com uma dica concreta; quem participou pouco,
           a verdade com respeito (números reais) e o convite a tentar de novo, lembrando que o material (e a trilha) esteve
           disponível. Selos: 🥇🥈🥉 XP do bimestre na turma, 🚀 mais evoluiu, 🏆 recordista dos jogos, 📅 presença 100%, ⭐ desafios. */
        const certificados = async mono => {
          const w = window.open("", "_blank");   // abre já no clique (senão o navegador bloqueia) e preenche depois
          if (!w) { toast("O navegador bloqueou a nova aba. Permita pop-ups para este site."); return; }
          try { w.document.write("<p style='font:16px system-ui;padding:20px'>🎓 Montando os boletins e certificados…</p>"); } catch (x) {}
          const L = linhas(), e = esc;
          let rec = {};   // prog = progresso deste bimestre (já carregado pelo diário)
          try { await carregarSerie(t);
            const r = await db().collection("config").doc("recordes_" + t.id).get(); rec = (r.exists && r.data().jogos) || {}; } catch (x) { console.warn("cert", x); }
          const aps = cat().apostilas.filter(a => a.serie === t.serie.id && P.doPeriodo(a)).map(a => a.id);
          const ordemM = mid => +(String(mid).match(/\d+/) || [99])[0];
          const dados = {};
          L.forEach(({ a }) => {
            const docs = prog.filter(p => p.alunoId === a.id && p.mid && aps.includes(p.aid));
            const porM = {}; let feitas = 0, de1 = 0;
            docs.forEach(p => { let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (x) {}
              const xp = P.podio.xpDe(p, atv); if (!porM[p.mid] || xp > porM[p.mid]) porM[p.mid] = xp;
              Object.values(atv).forEach(st => { if (st && st.status) { feitas++; if (!(st.tentativas || 0)) de1++; } }); });
            const seq = Object.keys(porM).sort((x, y) => ordemM(x) - ordemM(y)).map(m => porM[m]);
            const med = l => l.reduce((x, y) => x + y, 0) / l.length;
            const evo = seq.length >= 3 ? med(seq.slice(-2)) - med(seq.slice(0, 2)) : null;
            const recs = Object.entries(rec).filter(([, r]) => r && r.id === a.id).map(([j]) => { const J = P.jogosEspera && P.jogosEspera.lista.find(x => x.id === j); return J ? J.nome : j; });
            dados[a.id] = { xp: seq.reduce((x, y) => x + y, 0), nM: seq.length, evo, taxa1: feitas >= 8 ? de1 / feitas : null, recs };
          });
          const rk = L.map(({ a }) => ({ id: a.id, xp: dados[a.id].xp })).filter(x => x.xp > 0).sort((x, y) => y.xp - x.xp);
          const pos = {}; rk.forEach((x, i) => { pos[x.id] = i > 0 && rk[i - 1].xp === x.xp ? pos[rk[i - 1].id] : i + 1; });
          const evoMax = Math.max(0, ...L.map(({ a }) => dados[a.id].evo || 0));
          const MED = { 1: ["🥇", "1º lugar em XP da turma"], 2: ["🥈", "2º lugar em XP da turma"], 3: ["🥉", "3º lugar em XP da turma"] };
          const cert = ({ a, b, fr }) => {
            const d = dados[a.id], nome = e(a.nome), nA = b.nAulas || 4, fpct = fr.pct == null ? null : fr.pct;
            const selos = [];
            if (pos[a.id] <= 3) selos.push(MED[pos[a.id]]);
            if (d.evo && d.evo >= 100 && d.evo === evoMax) selos.push(["🚀", "Quem mais evoluiu na turma"]);
            if (d.recs.length) selos.push(["🏆", "Recordista: " + d.recs.slice(0, 2).join(", ")]);
            if (fpct === 100) selos.push(["📅", "Presença 100%"]);
            if (b.ext >= 4) selos.push(["⭐", "Caçador(a) de desafios"]);
            const temNota = b.B != null || b.r != null;
            const show = selos.length >= 2 || (temNota && b.final >= 8 && (fpct == null || fpct >= 75)) || pos[a.id] === 1;
            const pouco = (temNota && b.final < 5) || (fpct != null && fpct < 50) || b.bas < nA / 2;
            const nivel = show ? "show" : pouco ? "pouco" : "bom";
            const pres = fr.p != null ? `${fr.p + (fr.j || 0)} de ${fr.p + (fr.j || 0) + (fr.f || 0)}` : "–";
            let msg;
            if (nivel === "show") {
              const motivo = pos[a.id] === 1 ? "terminou o bimestre em 1º lugar de XP da turma" : selos.some(x => x[0] === "🚀") ? "foi quem mais evoluiu na turma, do começo ao fim do bimestre" : b.ext >= 4 ? "foi além do básico e encarou os Desafios e o Turbo" : fpct === 100 ? "não faltou a nenhuma aula e cumpriu o que foi pedido" : "fez as missões com capricho e atenção";
              msg = `Você ${motivo}. Isso não é sorte: é esforço, e ele aparece nos seus números. Continue assim, porque quem aprende a aprender vai longe.`;
            } else if (nivel === "bom") {
              const dica = d.taxa1 != null && d.taxa1 < .5 ? "ler com calma antes de responder (muitas respostas precisaram de várias tentativas)" : b.ext < 2 ? "encarar os Desafios e o Turbo, que valem nota extra" : "manter a frequência e caprichar ainda mais";
              msg = `Você fez a sua parte e aprendeu coisas importantes neste bimestre. Dá para ir mais longe: o próximo passo é ${dica}. Conto com você!`;
            } else {
              msg = `Neste bimestre você esteve em ${pres} aulas e concluiu ${b.bas} de ${nA} missões. Isso ainda é pouco perto do que você consegue fazer. Todo o material esteve à sua disposição, inclusive a trilha passo a passo e o robô que ajuda. No próximo bimestre, a sua presença e o seu esforço vão fazer a diferença. Eu acredito em você!`;
            }
            const titulo = nivel === "show" ? "Certificado de Destaque" : "Certificado de Participação";
            return `<div class="ce ce-${nivel}"><div class="ce-in">
              <div class="ce-top"><span class="ce-logo">💻</span><div><p class="ce-tit">${titulo}</p><p class="ce-sub">Aulas de Informática · ${e(bimTxt)}</p></div><span class="ce-logo">🎓</span></div>
              <div class="ce-txt"><p>Certificamos que</p><b class="ce-nome">${nome}</b><p>da turma <b>${e(turmaTxt)}</b> participou das aulas de Informática do Prof. Welington Laignier no ${e(bimTxt)}.</p></div>
              <div class="ce-nums"><span><b>${pres}</b>aulas</span><span><b>${b.bas}/${nA}</b>missões</span><span><b>${d.xp.toLocaleString("pt-BR")}</b>XP</span><span><b>${b.ext}</b>desafios</span></div>
              ${selos.length ? `<div class="ce-selos">${selos.map(([i, t2]) => `<span><i>${i}</i>${e(t2)}</span>`).join("")}</div>` : ""}
              <p class="ce-msg">“${e(msg)}”</p>
              <div class="ce-ass"><span>Prof. Welington Laignier<br><small>Informática</small></span><span>${new Date().toLocaleDateString("pt-BR")}<br><small>EMEF Juscelino Kubitschek · Curionópolis-PA</small></span></div></div></div>`;
          };
          const indC = ({ a, b, fr }) => `<div class="bi">${`<div class="cab"><div><b>Prof. Welington Laignier</b><span>Informática · ${e(turmaTxt)} · ${e(bimTxt)}</span></div><div class="esc">EMEF Juscelino Kubitschek · Curionópolis-PA</div></div>`}<h2>${e(a.nome)}</h2>
            <table class="t2"><tr><th>Frequência</th><td>${fr.pct == null ? "–" : fr.pct + "% (" + fr.p + (fr.p === 1 ? " presença" : " presenças") + (fr.j ? ", " + fr.j + (fr.j === 1 ? " justificada" : " justificadas") : "") + ", " + fr.f + (fr.f === 1 ? " falta" : " faltas") + ")"}</td></tr>
            <tr><th>Apostila (Básico)</th><td>${b.bas} de ${b.nAulas || 4} vistos = ${fmtN(b.basC)}</td></tr>
            <tr><th>Desafio / Turbo</th><td>${b.ext} completo${b.ext === 1 ? "" : "s"} = +${fmtN(b.bonus)}</td></tr>
            <tr><th>Prova</th><td>${b.B == null ? "não fez" : fmtN(b.B) + " de 5,0"}</td></tr>
            ${b.r != null ? `<tr><th>Recuperação</th><td>${fmtN(b.r)}${b.recUsada ? " (substituiu a nota)" : ""}</td></tr>` : ""}
            <tr class="fin"><th>Nota final</th><td><b>${fmtN(b.final)}</b> · <b>${e(b.sit.t)}</b></td></tr></table>
            <div class="ass"><span>Professor</span><span>Responsável</span></div></div>`;
          const C1 = mono ? "#111" : "#1e3a8a", C2 = mono ? "#555" : "#f97316", C3 = mono ? "#fff" : "#fff7ed";
          const css = `@page{size:A4;margin:10mm}*{box-sizing:border-box}body{font:12px/1.35 system-ui,Arial,sans-serif;color:#111;margin:0}
            .pg{display:flex;flex-direction:column;gap:6mm;height:277mm;page-break-after:always}.pg:last-child{page-break-after:auto}
            .bi{flex:0 0 calc(46% - 3mm);display:flex;flex-direction:column;border:1.5px solid ${C1};border-radius:8px;padding:9px 12px;overflow:hidden}
            .cab{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid ${C2};padding-bottom:5px;margin-bottom:8px}
            .cab b{display:block;font-size:16px;color:${C1}}.cab span{font-size:11.5px}.esc{font-size:10px;color:#555;text-align:right}h2{font-size:15px;margin:2px 0 6px}
            .t2{width:100%;border-collapse:collapse;font-size:13.5px}.t2 th,.t2 td{height:30px}.t2 th{text-align:left;width:38%;padding:3px 6px;background:${mono ? "#fff" : "#f1f5f9"};border:1px solid #bbb}.t2 td{padding:3px 6px;border:1px solid #bbb}
            .t2 .fin th,.t2 .fin td{background:${C3};font-size:13.5px;${mono ? "border:2px solid #111" : ""}}
            .ass{display:flex;justify-content:space-around;gap:30px;margin-top:auto;padding-top:26px}.ass span{flex:1;text-align:center;border-top:1px solid #333;padding-top:3px;font-size:11px}
            .corte{border-top:1.5px dashed #999;position:relative;height:0}.corte:after{content:"✂ recorte aqui";position:absolute;right:0;top:-8px;background:#fff;font-size:9px;color:#777;padding:0 4px}
            .ce{flex:1;border:${mono ? "3px double #111" : "4px solid " + C2};border-radius:10px;padding:5px;${mono ? "" : "background:linear-gradient(135deg,#fff7ed,#eff6ff)"}}
            .ce-in{height:100%;border:1.5px solid ${C1};border-radius:7px;padding:12px 22px;display:flex;flex-direction:column;justify-content:space-between;gap:8px;text-align:center}
            .ce-top{display:flex;align-items:center;justify-content:center;gap:16px}.ce-logo{font-size:30px;${mono ? "filter:grayscale(1)" : ""}}
            .ce-tit{margin:0;font:800 30px/1.1 Georgia,serif;color:${C1};letter-spacing:.5px;text-transform:uppercase}.ce-sub{margin:2px 0 0;font-size:12px;color:#444}
            .ce-show .ce-tit{color:${mono ? "#111" : "#b45309"}}
            .ce-txt{font-size:14.5px}.ce-txt p{margin:2px 0}.ce-nome{font:800 27px Georgia,serif;display:inline-block;margin:4px 0;padding:0 24px 3px;color:${C1};border-bottom:2px solid ${C2}}
            .ce-nums{display:flex;justify-content:center;gap:10px}.ce-nums span{min-width:100px;border:1.5px solid ${mono ? "#111" : "#93c5fd"};border-radius:8px;padding:3px 8px;font-size:10.5px;background:${mono ? "#fff" : "#fff"}}
            .ce-nums b{display:block;font-size:22px;color:${C1}}.ce-nums span{font-size:11.5px}
            .ce-selos{display:flex;flex-wrap:wrap;justify-content:center;gap:6px}.ce-selos span{border:1.5px solid ${mono ? "#111" : "#f59e0b"};background:${mono ? "#fff" : "#fffbeb"};border-radius:999px;padding:4px 12px;font-weight:700;font-size:12.5px}
            .ce-selos i{font-style:normal;margin-right:4px;${mono ? "filter:grayscale(1)" : ""}}
            .ce-msg{margin:0 10px;font:italic 15px/1.45 Georgia,serif;color:#222}
            .ce-ass{display:flex;justify-content:space-around;gap:20px;padding-top:18px}.ce-ass span{flex:1;border-top:1px solid #333;padding-top:3px;font-size:11px}
            .barra{position:sticky;top:0;background:${C1};color:#fff;padding:10px;text-align:center;font-size:14px}.barra button{font-size:14px;margin-left:10px;padding:6px 14px}
            @media print{.barra{display:none}${mono ? "" : "*{-webkit-print-color-adjust:exact;print-color-adjust:exact}"}}`;
          const pgs = L.map(r => `<section class="pg">${indC(r)}<div class="corte"></div>${cert(r)}</section>`).join("");
          const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Boletim e certificado ${e(turmaTxt)} · ${e(bimTxt)}${mono ? " (preto e branco)" : ""}</title><style>${css}</style></head><body>
            <div class="barra">${mono ? "Versão preto e branco (impressora da sala)" : "Versão colorida: PDF para as famílias ou impressora colorida"} · <b>Salvar como PDF</b> ou imprimir${mono ? "" : " (marque “Gráficos de plano de fundo”)"}<button onclick="print()">🖨️ Imprimir / PDF</button></div>${pgs}</body></html>`;
          w.document.open(); w.document.write(html); w.document.close();
        };
        q("#cert-cor").onclick = () => certificados(false);
        q("#cert-pb").onclick = () => certificados(true);
        q("#cp-bol").onclick = async () => {
          const txt = ["Aluno\tFrequência\tBásico\tDesafio/Turbo\tApostila\tProva\tNota\tRecuperação\tFinal\tSituação",
            ...alunos.map(a => { const b = boletim(a.id), fr = freq(a.id); return [a.nome, fr.pct == null ? "" : fr.pct + "%", b.bas + "/" + (b.nAulas || 4), b.ext, fmtN(b.A), b.B == null ? "" : fmtN(b.B), fmtN(b.nota), b.r == null ? "" : fmtN(b.r), fmtN(b.final), b.sit.t].join("\t"); })].join("\n");
          try { await navigator.clipboard.writeText(txt); toast("Boletim copiado."); } catch (e) { await P.perguntar("Copie o boletim:", txt); }
        };
      }
      if (aba === "registro") corpo.querySelectorAll("[data-abrir]").forEach(b => b.onclick = () => { dia = b.dataset.abrir; try { sessionStorage.setItem("painel:diario:" + t.id, dia); } catch (x) {} aba = "chamada"; history.replaceState(null, "", "#/painel/diario/" + t.id + "/chamada"); el.querySelectorAll(".pp-barra .pp-mis").forEach(x => x.classList.toggle("atual", /\/chamada$/.test(x.getAttribute("href")))); render(); });
      if (aba === "lembretes") {
        const salvar = () => salvarTurma({ lembretes: T.lembretes });
        q("#lb-add").onclick = () => { const v = q("#lb-novo").value.trim(); if (!v) return; T.lembretes = [...lemb(), { texto: v, feito: false, criadoEm: new Date().toISOString() }]; salvar(); render(); };
        corpo.querySelectorAll("[data-lb]").forEach(c => c.onchange = () => { T.lembretes = lemb().map((l, i) => i === +c.dataset.lb ? { ...l, feito: c.checked, lidoEm: c.checked ? new Date().toISOString() : null } : l); salvar(); render(); });
      }
    }
    render();
  }

  /* 🧩 cartão de apoio de um aluno: cada assunto num bloco com cor própria (o texto vem de alunos/{id}.apoio) */
  function cartaoApoio(a) {
    const linhas = String(a.apoio || "").split("\n").map(x => x.trim()).filter(Boolean);
    const tira = (l, re) => esc(l.replace(re, "").trim());
    let sentar = "", caminho = "", aee = "", prova = "", perfil = "", aula = "", outros = [];
    linhas.forEach(l => {
      if (/^📍/.test(l)) sentar = tira(l, /^📍\s*Sentar:\s*/);
      else if (/^🧭/.test(l)) caminho = tira(l, /^🧭\s*Caminho sugerido pelo PEI:\s*/);
      else if (/^🎓/.test(l)) { const [x, y] = l.replace(/^🎓\s*AEE:\s*/, "").split("·"); aee = esc((x || "").trim()); prova = esc((y || "").replace(/Prova com 3 alternativas:\s*/, "").trim()); }
      else if (/^👤/.test(l)) perfil = tira(l, /^👤\s*Perfil:\s*/);
      else if (/^✅/.test(l)) aula = tira(l, /^✅\s*Na aula:\s*/);
      else outros.push(esc(l));
    });
    const bl = (cls, tit, txt) => txt ? `<div class="ap-bl ${cls}"><span class="ap-tit">${tit}</span><span>${txt}</span></div>` : "";
    const tags = [a.trilha ? `<span class="ap-tag tri">👣 Trilha Passo a Passo</span>` : "", prova ? `<span class="ap-tag ${/sim/i.test(prova) ? "p3" : "pn"}">📝 Prova: ${/sim/i.test(prova) ? "3 alternativas" : "normal"}</span>` : "", aee ? `<span class="ap-tag aee">🎓 AEE ${aee}</span>` : "", a.emCasa ? `<span class="ap-tag casa">🏠 estuda em casa</span>` : ""].join("");
    return `<article class="ap-card"><header class="ap-nome">🧩 ${esc(a.nome)}</header>${tags ? `<div class="ap-tags">${tags}</div>` : ""}
      ${a.apoio ? `${bl("sentar", "📍 Onde sentar", sentar)}${bl("aula", "✅ Na aula", aula)}${bl("caminho", "🧭 Caminho", caminho)}${outros.length ? bl("outros", "📝 Anotações", outros.join("<br>")) : ""}
        ${perfil ? `<details class="ap-bl perfil"><summary class="ap-tit">👤 Perfil (dificuldades e habilidades)</summary><span>${perfil}</span></details>` : ""}`
        : `<p class="ajuda">Ainda sem anotação. Em Turmas, toque no nome do aluno → 📝 Apoios na aula.</p>`}</article>`;
  }
  /* 🎒 AGREGADOS NA AULA (26/11/2026, pedido do professor): botão 🎒 na aba Aula. Mostra os agregados (com 🟢 quem está no portal
     agora) e inclui quem o professor marcar NESTA aula de hoje (config/hoje_<turma>.agregados): eles participam como alunos da turma
     (sala de espera, vídeo, leitura guiada, roleta, placar e pódio), sem diário, sem nota e sem prova. Vale só nesta aula: ao
     iniciar outra aula a lista começa vazia; quando a aula acaba, eles voltam às missões da série deles.
     Aula iniciada + agregado no portal que ainda não foi incluído → o painel pergunta sozinho (uma vez por aluno por dia). */
  function agregadosNaAula(el, t) {
    const barra = el.querySelector(".pp-barra"); if (!barra || t.livre) return;
    const bt = h(`<button type="button" class="pp-cx-b pp-ag-bt" title="Incluir agregados nesta aula (participam como alunos da turma, sem diário e sem nota)">🎒 Agregados</button>`);
    const faixa = h(`<div class="painel pp-ag-chegou" hidden></div>`);
    barra.appendChild(bt); barra.after(faixa);
    const hoje = () => N.hoje(), kNao = () => "painel:agNao:" + t.id + ":" + hoje();
    const naoQuer = () => { try { return JSON.parse(sessionStorage.getItem(kNao()) || "[]"); } catch (e) { return []; } };
    const marcarNao = ids => { try { sessionStorage.setItem(kNao(), JSON.stringify([...new Set([...naoQuer(), ...ids])])); } catch (e) {} };
    const msT = v => v == null ? 0 : typeof v === "number" ? v : v.toMillis ? v.toMillis() : (v.seconds || 0) * 1000;
    const serieNome = a => (cat().series.find(x => x.id === a.serie) || { nome: "sem série" }).nome;
    async function ler() {
      const [hj, ags, ses] = await Promise.all([db().collection("config").doc("hoje_" + t.id).get().then(x => x.exists ? x.data() : {}).catch(() => ({})),
        alunosDaTurma("AG").catch(() => []), db().collection("progresso").where("turma", "==", "AG").where("tipo", "==", "sessao").get().then(q => q.docs.map(d => d.data())).catch(() => [])]);
      const ini = hj.dia === hoje() && hj.iniciadaDia === hoje(), dentro = ini ? (hj.agregados || []) : [];
      const on = new Set(ses.filter(x => Date.now() - msT(x.ping) < 180000).map(x => x.alunoId));
      const lista = ags.filter(a => a.ativo !== false && !a.teste).map(a => ({ ...a, on: on.has(a.id), dentro: dentro.includes(a.id) })).sort((a, b) => (b.on - a.on) || a.nome.localeCompare(b.nome, "pt-BR"));
      return { ini, dentro, lista };
    }
    const pintar = x => { bt.innerHTML = x.dentro.length ? `🎒 Agregados: <b>${x.dentro.length} na aula</b>` : "🎒 Agregados"; bt.classList.toggle("on-verde", !!x.dentro.length); };
    async function gravar(ids) { await db().collection("config").doc("hoje_" + t.id).set({ agregados: ids }, { merge: true }); try { await atualizarAgregados(t.id, ids); } catch (e) {} }
    async function abrir(op = {}) {
      const x = await ler(); pintar(x);
      if (!x.ini) return P.aviso("🎒 Primeiro toque em ▶️ Iniciar aula. Depois é só tocar em 🎒 Agregados para incluir quem chegou.");
      if (!x.lista.length) return P.aviso("Ainda não há alunos na turma 🎒 Agregados. Cadastre na aba 👥 Turmas › 🎒 Agregados.");
      const dlg = h(`<dialog class="pp-dlg"><form method="dialog"><h2>🎒 Agregados nesta aula (${esc(nomeTurma(t.id))})</h2>
        <p>${op.chegou ? "Tem agregado no portal agora. " : ""}Marque quem vai participar <b>desta aula</b> como aluno da turma: sala de espera, vídeo, leitura guiada, roleta, placar e pódio. <b>Sem diário e sem nota.</b> Quando a aula acabar, cada um volta para as missões da série dele.</p>
        <div class="pp-ag-lista">${x.lista.map(a => `<label class="pp-ag-item"><input type="checkbox" value="${esc(a.id)}" ${a.dentro || (op.chegou && a.on && !naoQuer().includes(a.id)) ? "checked" : ""}> ${a.on ? "🟢" : "⚪"} <b>${esc(a.nome)}</b> <small>${esc(serieNome(a))}${a.on ? " · no portal agora" : ""}</small></label>`).join("")}</div>
        <p class="ajuda">🟢 = está no portal agora. Quem não está pode ser marcado também: entra na aula assim que digitar o código.</p>
        <div class="row-btns"><button class="btn btn-ok" value="ok">✔ Incluir na aula</button><button class="btn" value="nao">Agora não</button></div></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal();
      dlg.addEventListener("close", async () => {
        const v = dlg.returnValue, ids = [...dlg.querySelectorAll("input:checked")].map(i => i.value); dlg.remove();
        if (v === "ok") { try { await gravar(ids); const nomes = x.lista.filter(a => ids.includes(a.id)).map(a => a.nome.split(" ")[0]);
            toast(ids.length ? `🎒 Na aula: ${nomes.join(", ")}. Em até 15 segundos a tela deles entra na aula.` : "🎒 Nenhum agregado nesta aula."); } catch (e) { P.aviso("Não deu para incluir: " + (e.message || e)); } }
        marcarNao(x.lista.filter(a => a.on).map(a => a.id));
        faixa.hidden = true; pintar(await ler());
      });
    }
    bt.onclick = () => abrir();
    // 🔔 chegou agregado: na abertura da aba (logo depois do ▶️ Iniciar) pergunta numa janela; depois, avisa numa faixa (sem atrapalhar)
    let primeira = true;
    async function vigiar() {
      if (!el.isConnected) return clearInterval(iv);
      const x = await ler(); pintar(x); if (!x.ini) return;
      const novos = x.lista.filter(a => a.on && !a.dentro && !naoQuer().includes(a.id));
      if (!novos.length) { faixa.hidden = true; return; }
      if (primeira) { if (document.querySelector("dialog[open]")) { setTimeout(() => vigiar().catch(() => {}), 3000); return; } primeira = false; return abrir({ chegou: true }); }   // espera os avisos do dia fecharem
      faixa.innerHTML = `<p>🎒 <b>Chegou agregado:</b> ${novos.map(a => `${esc(a.nome.split(" ")[0])} <small>(${esc(serieNome(a))})</small>`).join(", ")}. Incluir nesta aula?</p>
        <div class="row-btns"><button type="button" class="btn btn-ok btn-peq" data-ag="sim">✔ Incluir na aula</button><button type="button" class="btn btn-peq" data-ag="nao">Agora não</button></div>`;
      faixa.hidden = false;
      faixa.querySelector('[data-ag="sim"]').onclick = async () => { try { await gravar([...new Set([...x.dentro, ...novos.map(a => a.id)])]); toast(`🎒 Na aula: ${novos.map(a => a.nome.split(" ")[0]).join(", ")}. Em até 15 segundos a tela entra na aula.`); } catch (e) { P.aviso("Não deu para incluir: " + (e.message || e)); } faixa.hidden = true; pintar(await ler()); };
      faixa.querySelector('[data-ag="nao"]').onclick = () => { marcarNao(novos.map(a => a.id)); faixa.hidden = true; };
      primeira = false;
    }
    const iv = setInterval(() => vigiar().catch(() => {}), 30000); setTimeout(() => vigiar().catch(() => {}), 1500);
  }

  async function telaAula(u, tid, mid) {
    const turmas = turmasDeAula();
    tid = escolherTurma(tid, turmas);
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id && P.doPeriodo(a));
    const apId = sessionStorage.getItem("painel:ap:" + t.serie.id);
    const ap = aps.find(a => a.id === apId) || aps.find(a => !a.oculta && !/trilha/.test(a.id)) || aps[0];
    await P.carregarApostila(ap.id);
    const C = P.conteudo[ap.id];
    // 23/11/2026: sem missão no endereço, o roteiro abre a 📌 Missão de hoje escolhida para a turma (antes vinha a do cronograma, e aparecia a Revisão no dia da M2)
    if (!(mid && C.missoes.some(m => m.id === mid))) { let mh = null; try { const sh = await db().collection("config").doc("hoje_" + t.id).get(); const dh = sh.exists ? sh.data() : null; if (dh && dh.dia === N.hoje() && dh.mid && C.missoes.some(m => m.id === dh.mid)) mh = dh.mid; } catch (e) {}
      mid = mh || (await missaoSugerida(t, C)) || C.missoes[0].id; }
    const el = tela(topo(u, "aula") + `<div class="painel pp-barra">
        <label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
        ${aps.length > 1 ? `<label>Apostila <select id="ap">${aps.map(a => `<option value="${a.id}" ${a.id === ap.id ? "selected" : ""}>${esc(a.titulo || a.id)}</option>`).join("")}</select></label>` : ""}
        <details class="pp-outra"><summary>👁️ Só olhar o roteiro de outra missão (aberta: ${esc(rotMis(C, mid))})</summary><span class="pp-missoes">${C.missoes.map(m => `<a class="pp-mis ${m.id === mid ? "atual" : ""}" href="#/painel/aula/${t.id}/${m.id}">${esc(m.icone)} ${esc(rotMis(C, m.id))}</a>`).join("")}</span></details>
        <a class="pp-cx-b pp-cx-mover" href="#/ver/${ap.id}/${mid}/${t.id}" target="_blank" rel="noopener" onclick="try{localStorage.setItem('portalJK:passeVer',JSON.stringify({ate:Date.now()+120000}))}catch(e){}" title="Abre numa aba nova a apostila exatamente como os alunos veem">👀 Apostila do aluno</a>
        <a class="pp-cx-b pp-cx-mover" href="cartaz.html?v=${window.PORTAL_VERSAO || ""}" target="_blank" rel="noopener" title="Abre numa aba nova o cartaz com o endereço do site e os passos para entrar, para projetar">📋 Cartaz de entrada</a>
        <button type="button" class="pp-cx-b pp-cx-mover" id="tc-bt" title="Ligado: o portal dos alunos desta turma só funciona em tela cheia (vale só hoje). Quem estuda em casa não é afetado.">🖥️ Tela cheia dos alunos…</button></div>
      <section class="pp-kit" id="pp-ferr" aria-label="Ferramentas da aula"><div class="pp-cx-bar"><b class="pp-cx-tit">🧰 Ferramentas da aula</b><span class="pp-cx-bts"></span><span class="pp-cx-telas"></span></div>
        <div class="pp-cx-pain" hidden><div class="pp-cx-cab"><b></b><button type="button" class="btn btn-sec btn-peq pp-cx-x">✕ Fechar</button></div>
          <div data-cx="video" hidden><span class="cx-fim"></span></div><div data-cx="transm" hidden><span class="cx-fim"></span></div><div data-cx="apoios" hidden><span class="cx-fim"></span></div></div></section>
      <nav class="pp-indice" aria-label="Ir para"><span>Ir para:</span></nav>
      <div id="aula" class="pp-alvo"></div>`);
    /* 🧰 23/11/2026 (pedido do professor: "não estou encontrando nada"): TODAS as ferramentas da aula juntas numa barra só,
       logo abaixo da turma, que fica presa no alto enquanto ele rola o roteiro. Ações rápidas (leitura guiada, roleta, mostrar a tela,
       quadro) num toque; o que é grande (vídeo, transmitir, apoios) abre numa gaveta embaixo da barra, uma de cada vez. */
    const cxPain = el.querySelector(".pp-cx-pain"), gaveta = k => cxPain.querySelector(`[data-cx="${k}"]`);
    const noFerr = (box, k) => gaveta(k).querySelector(".cx-fim").before(box), ferr = gaveta("transm").querySelector(".cx-fim");
    let recPend = 0;
    const pintarIndice = () => {
      const itens = [["#pp-barra-aula", "📌 Missão de hoje"], recPend ? ["#pp-recados", `🟧 Recados (${recPend})`] : [`#/painel/diario/${t.id}/lembretes`, "🟧 Recados", 1],
        ["#aula", "📖 Roteiro"], ["#aula-resp", "✅ Respostas"]];
      const nav = el.querySelector(".pp-indice");
      nav.innerHTML = `<span>Ir para:</span>` + itens.filter(([h, , ext]) => ext || el.querySelector(h)).map(([h, r, ext]) => ext ? `<a href="${h}" title="Abre o 📒 Diário › 🟧 Meus recados desta turma">${r}</a>` : `<a href="#" data-pp-ir="${h}">${r}</a>`).join("");
      nav.querySelectorAll("[data-pp-ir]").forEach(a => a.onclick = e => { e.preventDefault(); const alvo = el.querySelector(a.dataset.ppIr); if (!alvo) return; if (alvo.tagName === "DETAILS") alvo.open = true; alvo.scrollIntoView({ behavior: "smooth", block: "start" }); });
    };
    { const pi = el.querySelector("#pp-ini"); if (pi) pi.hidden = true; }   // 23/11/2026: na aba Aula, "▶️ Iniciar a aula" fica só na 📌 Missão de hoje (sem botão repetido no alto)
    el.querySelector(".pp-barra").id = "pp-barra-aula"; el.querySelector(".pp-barra").classList.add("pp-alvo");
    try { agregadosNaAula(el, t); } catch (e) { console.warn("agregados", e); }   // 🎒 26/11/2026
    ligarSair(el);
    { const bt = el.querySelector("#tc-bt"), ref = db().collection("config").doc("tela_" + t.id); let on = false;
      const pinta = () => { bt.innerHTML = on ? "🖥️ Tela cheia: <b>LIGADA</b>" : "🖥️ Exigir tela cheia"; bt.classList.toggle("on-verde", on); };
      ref.get().then(sn => { const d = sn.exists ? sn.data() : {}; on = !!(d.cheia && d.dia === N.hoje()); pinta(); }).catch(() => pinta());
      bt.onclick = async () => { try { on = !on; await ref.set({ cheia: on, dia: N.hoje(), em: Date.now() }, { merge: true }); pinta(); toast(on ? "🖥️ Tela cheia obrigatória LIGADA: quem sair da tela cheia fica com a apostila travada até voltar." : "🖥️ Tela cheia obrigatória desligada."); } catch (err) { on = !on; pinta(); toast("Não foi possível: " + (err.message || err)); } }; }
    // 📡 transmitir para os computadores dos alunos (vídeo em sincronia ou espelhar a tela), 18/11/2026
    try { if (P.sala) { const vs = Object.entries((P.videosMissao || {})[ap.base || ap.id] || {}).flatMap(([m, v]) => (Array.isArray(v) ? v : [v]).filter(x => x && /^[\w-]{11}$/.test(x.id || x)).map((x, k) => ({ id: x.id || x, nome: rotMis(C, m) + " · " + (x.nome || (k ? "vídeo extra" : "vídeo")) })));
      vs.sort((x, y) => (x.nome.startsWith(rotMis(C, mid)) ? 0 : 1) - (y.nome.startsWith(rotMis(C, mid)) ? 0 : 1));
      P.sala.painel(ferr, t.id, vs, nomeTurma(t.id)); const sq = el.querySelector(".sala-quadro"); if (sq) { sq.id = "pp-transmitir"; sq.open = true; } } } catch (e) {}
    // 🚦 Sala de espera + 🏁 Dar a largada (20/11/2026): quem já entrou, quem falta e o botão que começa a aula para todos juntos
    try { if (P.espera) P.espera.painel(el.querySelector(".pp-barra"), { t, C, ap, rotulo: nomeTurma(t.id), participantes: () => participantes(t), ouvirProg }); } catch (e) { console.warn("espera", e); }
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/aula/" + e.target.value; };   // outra turma: abre a missão de hoje DELA, não a desta
    const sa = el.querySelector("#ap"); if (sa) sa.onchange = e => { try { sessionStorage.setItem("painel:ap:" + t.serie.id, e.target.value); } catch (x) {} telaAula(u, t.id); };
    // 📺 vídeo da missão (YouTube não listado do professor): player só aqui no painel, para projetar
    try {
      // pode ser um ID ou uma lista [principal, extra]: o 2º em diante aparece como vídeo extra (passo a passo)
      const vv = ((P.videosMissao || {})[ap.base || ap.id] || {})[mid], lista = (Array.isArray(vv) ? vv : [vv]).filter(v => v && /^[\w-]{11}$/.test(v.id || v));
      // item pode ser {id, nome, sub} para dar nome ao vídeo extra (ex.: Especial Teclado)
      lista.forEach((it0, k) => { const it = typeof it0 === "string" ? { id: it0 } : it0, vid = it.id;   // ID solto vira objeto (senão "texto".sub é uma função do JavaScript e aparecia na tela)
        const box = document.createElement("details"); box.className = "painel pp-video"; box.open = !k;
        box.innerHTML = `<summary><strong>📺 ${it.nome ? esc(it.nome) : k ? "Vídeo extra" : "Vídeo"} ${it.curiosidade ? "· " : "da "}missão ${esc(rotMis(C, mid))}</strong> ${it.sub ? "(" + esc(it.sub) + ")" : k ? "(passo a passo, para quando a turma tiver dificuldade)" : "(com a sua voz)"}</summary>
          <div class="pp-video-quadro"><iframe src="https://www.youtube-nocookie.com/embed/${vid}?rel=0&modestbranding=1&enablejsapi=1" title="Vídeo da missão ${esc(rotMis(C, mid))}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
          <p class="pp-video-acoes"><a class="btn btn-sec" href="https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1" target="_blank" rel="noopener">↗️ Abrir player em nova aba</a>
            <a class="btn btn-link" href="https://youtu.be/${vid}" target="_blank" rel="noopener">Abrir no YouTube</a></p>
          <p class="ajuda">Dê o play aqui mesmo ou abra o player numa aba só dele (ocupa a tela toda, bom para projetar). Use o botão de tela cheia do player. Lembre da caixinha de som: os computadores dos alunos não têm áudio.</p>`;
        if (!k) box.id = "pp-video"; noFerr(box, "video");
      });
      // 📺 todos os vídeos da apostila (18/11/2026): o professor acha qualquer vídeo na hora, mesmo de outra missão
      const todos = (P.videosMissao || {})[ap.base || ap.id] || {};
      const itens = Object.entries(todos).flatMap(([m, v]) => (Array.isArray(v) ? v : [v]).filter(x => x && /^[\w-]{11}$/.test(x.id || x)).map((x, k) => ({ m, id: x.id || x, nome: x.nome || (k ? "Vídeo extra (passo a passo)" : "Vídeo") })));
      if (itens.length) { const box = document.createElement("details"); box.className = "painel pp-video pp-video-todos";
        box.innerHTML = `<summary><strong>📺 Todos os vídeos desta apostila</strong> (${itens.length}) · para abrir o vídeo de qualquer missão</summary>
          <div class="pp-video-grupos">${[...new Set(itens.map(x => x.m))].map((m, gi) => `<div class="pp-video-grupo g${gi % 2}"><p class="pp-vg-tit"><b>${esc(rotMis(C, m))}</b>${itens.filter(x => x.m === m).length > 1 ? ` <span class="pp-vg-n">${itens.filter(x => x.m === m).length} vídeos</span>` : ""}</p>
            <ul>${itens.filter(x => x.m === m).map(x => `<li>${esc(x.nome)} — <a href="https://www.youtube-nocookie.com/embed/${x.id}?autoplay=1&rel=0&modestbranding=1" target="_blank" rel="noopener">▶️ Abrir o player</a></li>`).join("")}</ul></div>`).join("")}</div>`;
        noFerr(box, "video"); }
    } catch (e) { console.warn(e); }
    // 📣 avisos para o professor falar à turma (com a fala pronta); "✔ Já avisei" esconde só para esta turma
    try {
      const AVISOS = [{ id: "outra-turma-1", tit: "Quem faz a aula em outro horário",
        porque: "As tarefas do portal (Mão na massa, Básico, Desafio e Turbo) vão abrir só no dia e na hora da aula de cada turma. Quem vem em outro horário (por causa de curso, karatê, natação…) ficaria travado.",
        fala: "“Pessoal, um aviso importante: as tarefas do portal vão abrir só no dia e no horário da aula da turma de vocês. Se você faz a aula de Informática em outro horário, junto com outra turma, me avise hoje, porque eu preciso liberar o seu acesso. Se não avisar, as tarefas não vão abrir para você nesse outro horário. Os textos para estudar continuam abertos a qualquer hora, até em casa.”",
        depois: "Quem avisar: em 🏫 Turmas, toque no nome do aluno → 🏫 Frequenta a aula de outra turma." }];
      const chave = id => "painel:aviso:" + id + ":" + t.id;
      const pend = AVISOS.filter(x => { try { return !localStorage.getItem(chave(x.id)); } catch (e) { return true; } });
      if (pend.length) {
        const box = document.createElement("details"); box.className = "painel pp-avisos"; box.open = false;
        box.innerHTML = `<summary><strong>🗣️ Para falar à turma</strong> (${pend.length})</summary>${pend.map(x => `<div class="pp-aviso" data-av="${x.id}">
          <p><strong>${esc(x.tit)}</strong> — ${esc(x.porque)}</p><p class="pp-fala">🗣️ ${esc(x.fala)}</p><p class="ajuda">${esc(x.depois)}</p>
          <button class="btn btn-sec btn-peq" type="button" data-avok="${x.id}">✔ Já avisei esta turma</button></div>`).join("")}`;
        el.querySelector("#aula").before(box);
        box.querySelectorAll("[data-avok]").forEach(b => b.onclick = () => { try { localStorage.setItem(chave(b.dataset.avok), Date.now()); } catch (e) {} b.closest(".pp-aviso").remove(); if (!box.querySelector(".pp-aviso")) box.remove(); });
      }
    } catch (e) { console.warn(e); }
    // 🟧 Recados para a próxima aula: os lembretes da turma (mesmos do 📒 Diário › 🟧 Recados), num quadro laranja grande.
    // "✔ Já li" marca o recado como feito no Firebase (some em todos os computadores); dá para escrever um recado novo aqui.
    try {
      const lRef = db().collection(DIARIO).doc(t.id);
      const ls = await lRef.get();
      let lista = (ls.exists && ls.data().lembretes) || [];
      const box = document.createElement("div"); box.className = "painel pp-recados pp-alvo"; box.id = "pp-recados";
      const desenhar = () => {
        const pend = lista.map((l, i) => ({ ...l, i })).filter(l => !l.feito);
        // 🟧 22/11/2026: recados num lugar só. Escrever e ver o histórico fica no 📒 Diário › 🟧 Meus recados;
        // aqui na aula aparecem só os PENDENTES, para ler e tocar em "✔ Já li" (sem recado pendente, o quadro não aparece)
        const ir = `#/painel/diario/${t.id}/lembretes`;
        box.hidden = !pend.length; recPend = pend.length; pintarIndice();
        box.innerHTML = `<h2>🟧 Meus recados para esta aula · ${esc(nomeTurma(t.id))}</h2>
          <p class="pp-so-voce">🔒 <b>Só você vê.</b> Para escrever um recado novo ou ver os já lidos: <a href="${ir}">📒 Diário › 🟧 Meus recados</a>. Para avisar <b>os alunos</b>: <a href="#/painel/turma/${t.id}">🏫 Turmas › 📣 Avisos para os alunos</a>.</p>
          ${pend.map(l => `<div class="pp-recado"><p>${esc(l.texto).replace(/\n/g, "<br>")}</p>
            <div class="pp-recado-pe"><small>${l.criadoEm ? "Anotado em " + dataBR(l.criadoEm.slice(0, 10)) : ""}</small>
            <button class="btn pp-recado-ok" type="button" data-rok="${l.i}">✔ Já li</button></div></div>`).join("")}`;
        box.querySelectorAll("[data-rok]").forEach(b => b.onclick = async () => {
          lista = lista.map((l, i) => i === +b.dataset.rok ? { ...l, feito: true, lidoEm: new Date().toISOString() } : l);
          try { await lRef.set({ lembretes: lista }, { merge: true }); toast("Recado marcado como lido. Ele fica no histórico do 📒 Diário."); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
          desenhar();
        });
      };
      desenhar();
      el.querySelector("#pp-ferr").after(box);
    } catch (e) { console.warn(e); }
    // 📌 Missão de hoje: o aluno cai direto nela depois do código; se "travar", as tarefas das outras missões fecham
    try {
      const hRef = db().collection("config").doc("hoje_" + t.id), hs = await hRef.get();
      const hj0 = hs.exists && hs.data().dia === N.hoje() ? hs.data() : null, iniciada = !!(hj0 && hj0.iniciadaDia === N.hoje());
      const hj = hj0 && hj0.mid ? hj0 : null, sit = await situacaoMissoes(t);
      const baseId = ap.base || ap.id, curto = m => (m.titulo || SIG(m.id)).replace(/ –.*/, "");
      // escolher QUALQUER missão numa lista (não só a que está aberta) e travar, tudo no mesmo quadro (pedido em 12/11/2026)
      const box = document.createElement("div"); box.className = "pp-trava pp-hoje";
      box.innerHTML = `<label>📌 <b>Missão de hoje:</b> <select data-hj="sel">
          <option value="" ${hj ? "" : "selected"}>— nenhuma (o aluno escolhe) —</option>
          ${C.missoes.filter(m => m.id !== "rc").map(m => `<option value="${esc(m.id)}" ${hj && hj.mid === m.id ? "selected" : ""}>${esc(m.icone || "")} ${esc(SIG(m.id))} · ${esc(((m.titulo || "").replace(/^[^–]*–\s*/, "") || curto(m)).slice(0, 60))}${esc(sitMis(sit, m.id))}</option>`).join("")}</select></label>
        <label class="pp-auto" title="${hj ? "Só a missão de hoje fica com as tarefas abertas" : "Escolha primeiro a missão de hoje na lista"}"><input type="checkbox" data-hj="trav" ${hj && hj.travar ? "checked" : ""} ${hj ? "" : "disabled"}> 🔒 Travar só nela</label>
        <span class="st">${hj ? (hj.travar ? "🔒 os alunos só fazem as tarefas desta missão" : "✔ o aluno cai direto nela ao digitar o código") : "nenhuma missão definida para hoje"}</span>
        <span class="pp-ini-st ${iniciada ? "on" : "off"}">${iniciada ? `▶️ Aula iniciada às ${new Date(hj0.iniciadaEm || Date.now()).toTimeString().slice(0, 5)}` : `⏳ Aula não iniciada: tarefas fechadas <button class="btn btn-peq" type="button" data-hj="ini">▶️ Iniciar a aula</button>`}</span>`;
      { const bIni = box.querySelector('[data-hj="ini"]'); if (bIni) bIni.onclick = () => iniciarAula(u, { manual: true, tid: t.id }); }
      el.querySelector(".pp-barra").appendChild(box);
      const sel = box.querySelector('[data-hj="sel"]'), trav = box.querySelector('[data-hj="trav"]');
      sel.onchange = async () => {
        const v = sel.value, m = C.missoes.find(x => x.id === v);
        try {
          // escolher já trava por padrão (12/11/2026: aluno abriu a M3 no dia da M2); dá para destravar no quadrinho
          const travar = hj ? !!hj.travar : true, titulo = m ? m.titulo.replace(/ –.*/, "") + " – " + m.titulo.replace(/^[^–]*– ?/, "") : v;
          // merge: não apaga o "aula iniciada" (iniciadaDia) ao trocar a missão no meio da aula
          if (!v) await hRef.set({ dia: N.hoje(), mid: "", titulo: "", travar: false }, { merge: true });
          else await hRef.set({ dia: N.hoje(), aid: baseId, mid: v, titulo, travar, revisa: v === "rv" ? await revisaDaTurma(t) : [] }, { merge: true });
          // 📒 só anota no Diário depois que a aula foi INICIADA de verdade (testar/escolher antes não registra nada) — 14/11/2026
          if (iniciada) await registrarMissaoDoDia(t.id, v ? { mid: v, titulo, travar } : null);
          toast(v ? "Missão de hoje: " + rotMis(C, v) + (travar ? " · 🔒 travada" : "") + (iniciada ? " (anotado no Diário)" : " · vai para o Diário quando você iniciar a aula") : "Missão de hoje tirada."); telaAula(u, t.id, v || mid);
        } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
      };
      trav.onchange = async () => {
        try { await hRef.set({ travar: trav.checked }, { merge: true }); if (hj && iniciada) await registrarMissaoDoDia(t.id, { mid: hj.mid, titulo: hj.titulo || hj.mid, travar: trav.checked }); toast(trav.checked ? "🔒 Travado só na missão de hoje." : "Destravado."); telaAula(u, t.id, mid); }
        catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
      };
    } catch (e) { console.warn(e); }
    // 🔒 liberar ou fechar as tarefas da turma fora do horário
    try {
      const [g, ls] = await Promise.all([config(), db().collection("config").doc("liberar_" + t.id).get()]);
      const lib = ls.exists ? ls.data() : {}, ag = Date.now(), hm = ms => new Date(ms).toTimeString().slice(0, 5);
      const noHor = P.trava && P.trava.noHorario(t, ag);
      const modoAula = g.modoAula !== false, hjx = (await db().collection("config").doc("hoje_" + t.id).get()).data() || {}, ini = hjx.iniciadaDia === N.hoje();
      const st = modoAula ? (lib.fechadaAte > ag ? `🔒 Fechadas (aula finalizada)` : lib.ate > ag ? `🔓 Liberadas por você até ${hm(lib.ate)}` : ini ? "🟢 Abertas (aula iniciada)" : "⏳ Fechadas até você iniciar a aula") : !g.travaHorario ? "⚪ Trava desligada: tarefas sempre abertas" : lib.fechadaAte > ag ? `🔒 Fechadas por você até ${hm(lib.fechadaAte)}` : lib.ate > ag ? `🔓 Liberadas por você até ${hm(lib.ate)}` : noHor ? "🟢 Abertas (horário da aula)" : `🔒 Fechadas (abrem ${P.trava ? P.trava.horarioTxt(t) : "no horário da aula"})`;
      // ⚙️ 14/11/2026: não é mais um quadro separado; vira a linha "Se precisar" dentro do quadro da Missão de hoje
      const box = document.createElement("div"); box.className = "pp-trava pp-emerg";
      box.innerHTML = `<span>🚨 Se precisar:</span> <span class="st">${st}</span>
        ${g.travaHorario || modoAula ? `<button class="btn btn-sec btn-peq" type="button" data-tr="lib">🔓 Liberar a turma agora</button><button class="btn btn-sec btn-peq" type="button" data-tr="fecha">🔒 Fechar agora</button>${lib.ate > ag || lib.fechadaAte > ag ? `<button class="btn btn-sec btn-peq" type="button" data-tr="normal">↩️ Voltar ao horário normal</button>` : ""}` : `<a class="btn btn-sec btn-peq" href="#/painel/ano">Ligar a trava</a>`}`;
      (el.querySelector(".pp-hoje") || el.querySelector(".pp-barra")).appendChild(box);
      const ref = db().collection("config").doc("liberar_" + t.id);
      box.querySelectorAll("[data-tr]").forEach(b => b.onclick = async () => {
        const k = b.dataset.tr;
        if (k === "lib") { const m = await P.perguntar("Liberar as tarefas da turma toda por quantos minutos?", "75"); if (!m || !(+m > 0)) return; await ref.set({ ate: Date.now() + (+m) * 60000, fechadaAte: 0 }, { merge: true }); }
        if (k === "fecha") { const fimAula = (() => { const d = new Date(); if (!t.aula) return Date.now() + 75 * 60000; const [H, M] = t.aula.ini.split(":").map(Number); d.setHours(H, M + (cat().duracaoAula || 75) + (cat().toleranciaTarefas || 15), 0, 0); return Math.max(d.getTime(), Date.now() + 60000); })(); await ref.set({ fechadaAte: fimAula, ate: 0 }, { merge: true }); }
        if (k === "normal") await ref.set({ ate: 0, fechadaAte: 0 }, { merge: true });
        toast("Feito!"); telaAula(u, t.id, mid);
      });
    } catch (e) { console.warn(e); }
    // 🧩 apoios dos alunos atípicos da turma (anotações só do professor, guardadas no cadastro do aluno)
    try {
      const todosT = (await alunosDaTurma(t.id)).filter(a => a.ativo !== false && !a.teste);
      const casa = todosT.filter(a => a.emCasa);
      sincronizarCasa(t, todosT).catch(() => {});
      if (casa.length) {
        const bc = document.createElement("div"); bc.className = "painel pp-casa";
        bc.innerHTML = `<strong>🏠 Estudam em casa, pelo portal:</strong> ${casa.map(a => esc(a.nome) + (a.emCasaObs ? ` <small>(${esc(a.emCasaObs)})</small>` : "")).join(" · ")}<br><small>O que eles fazem em casa fica registrado nas missões e no relatório de cada um; no 📒 Diário, a presença é J automática.</small>`;
        noFerr(bc, "apoios");
      }
      const atip = todosT.filter(a => a.atipico);
      if (atip.length) {
        const box = document.createElement("details"); box.className = "painel pp-apoios"; box.open = atip.some(a => a.apoio);
        box.innerHTML = `<summary><strong>🧩 Apoios dos alunos atípicos desta turma</strong> (${atip.length})</summary>
          <div class="ap-lista">${atip.map(cartaoApoio).join("")}</div>`;
        box.id = "pp-apoios"; noFerr(box, "apoios");
      }
    } catch (e) { console.warn(e); }
    await P.aula.render(el.querySelector("#aula"), ap.id, mid, t.id, { vivo: async (aid, m, turma) => {
      const prog = await progressoDaTurma(turma), d = N.hoje();
      const entraram = new Set(prog.filter(p => p.dias && p.dias[d]).map(p => p.alunoId));
      const basico = new Set(prog.filter(p => (p.aid === aid || (cat().apostilas.find(y => y.id === p.aid) || {}).base === aid) && p.mid === m && p.basicoOk).map(p => p.alunoId));
      return { entraram: entraram.size, basico: [...basico].filter(x => entraram.has(x)).length };
    } });
    pintarIndice();
    montarCaixa(el, t, cxPain);
    medirTopo();
  }

  // 🧰 a barra de ferramentas da aula (23/11/2026)
  function montarCaixa(el, t, cxPain) {
    const bar = el.querySelector(".pp-cx-bar"), bts = bar.querySelector(".pp-cx-bts"), telas = bar.querySelector(".pp-cx-telas");
    const cheia = k => { const g = cxPain.querySelector(`[data-cx="${k}"]`); return g && g.children.length > 1; };
    const sala = (f, ...a) => P.sala && P.sala[f] ? P.sala[f](...a) : toast("Transmissão indisponível.");
    const T = [
      // 🎤 23/11/2026: vídeo e leitura guiada passam pela Aula ao vivo (um registro só; fechar = volta à sala de espera)
      ["acao", () => ferramentaLeitura(t, "palco"), "🎤 Aula ao vivo", "Sala de espera, vídeo e leitura guiada em todas as telas, e a 🏁 largada"],
      ["acao", () => ferramentaLeitura(t, "video"), "🎬 Vídeo", "O vídeo da missão no projetor e em todos os computadores, juntos"],
      ["acao", () => ferramentaLeitura(t, "leitura"), "📖 Leitura guiada", "O texto em slides, igual em todas as telas, com roleta e perguntas"],
      ["acao", () => ferramentaLeitura(t, "roleta"), "🎡 Roleta", "Sorteia quem lê, em todas as telas"],
      ["acao", () => sala("espelhar", t.id, nomeTurma(t.id)), "🖥️ Mostrar minha tela", "A sua tela (ou uma janela) nos computadores dos alunos"],
      ["acao", () => sala("quadroTurma", t.id, nomeTurma(t.id)), "⬜ Quadro", "Você escreve e risca e aparece nos computadores dos alunos"],
      // 🔗 26/11/2026: a gaveta 📡 tinha ficado sem botão na arrumação de 23/11; volta como "Vídeo do YouTube" (colar qualquer link)
      cheia("transm") && ["gav", "transm", "🔗 Vídeo do YouTube", "Passa qualquer vídeo do YouTube (é só colar o link) em todos os computadores, em sincronia"],
      cheia("video") && ["gav", "video", "📺 Outros vídeos", "Todos os vídeos da apostila, para consultar"],
      cheia("apoios") && ["gav", "apoios", "🧩 Apoios e casa", "Alunos atípicos e quem estuda em casa"]].filter(Boolean);
    let aberta = "";
    const abrir = k => { aberta = aberta === k ? "" : k; cxPain.hidden = !aberta;
      cxPain.querySelectorAll("[data-cx]").forEach(g => { g.hidden = g.dataset.cx !== aberta; });
      bts.querySelectorAll("[data-gav]").forEach(b => { b.classList.toggle("on", b.dataset.gav === aberta); b.setAttribute("aria-expanded", b.dataset.gav === aberta); });
      const it = T.find(x => x[1] === aberta); cxPain.querySelector(".pp-cx-cab b").textContent = it ? it[2] : "";
      if (!aberta) cxPain.querySelectorAll("iframe").forEach(f => { const s = f.src; f.src = "about:blank"; f.src = s; });   // fechou a gaveta: o vídeo para de tocar
    };
    bts.innerHTML = ""; T.forEach(([tipo, x, rot, dica]) => { const b = document.createElement("button"); b.type = "button"; b.className = "pp-cx-b" + (tipo === "gav" ? " gav" : ""); b.title = dica;
      b.textContent = rot + (tipo === "gav" ? " ▾" : ""); if (tipo === "gav") { b.dataset.gav = x; b.setAttribute("aria-expanded", "false"); b.onclick = () => abrir(x); } else b.onclick = x; bts.appendChild(b); });
    cxPain.querySelector(".pp-cx-x").onclick = () => abrir(aberta);
    el.querySelectorAll(".pp-cx-mover").forEach(b => bts.appendChild(b));   // 👀 apostila do aluno, 📋 cartaz e 🖥️ tela cheia também moram na barra (23/11/2026)
    const pintaT = () => { const m = modoTelas();
      telas.innerHTML = `<span>Telas:</span><button type="button" data-tl="2" class="${m === "2" ? "on" : ""}" title="O projetor repete o seu monitor (tela duplicada)">🖥️ 1 tela</button><button type="button" data-tl="3" class="${m === "3" ? "on" : ""}" title="O projetor é uma tela separada só para os alunos (o monitor do Veyon não conta)">🖥️📽️ 2 telas</button>`;
      telas.querySelectorAll("[data-tl]").forEach(b => b.onclick = () => { setModoTelas(b.dataset.tl); pintaT(); toast(b.dataset.tl === "3" ? "🖥️📽️ 2 telas: o projetor mostra só o conteúdo (e o vídeo com som); os comandos e a turma ficam aqui no seu monitor." : "🖥️ 1 tela: o projetor repete o seu monitor; os comandos ficam numa barra só sua e 👥 A turma num botão."); }); };
    pintaT();
    // a barra fica presa no alto; a barra do roteiro ("Ir para") gruda logo abaixo dela
    const medir = () => document.documentElement.style.setProperty("--pp-cx", bar.offsetHeight + "px");
    medir(); try { new ResizeObserver(medir).observe(bar); } catch (e) {}
  }

  /* -------- Importar alunos (lista colada ou arquivo) -------- */
  const subConfig = k => `<div class="painel pp-barra"><span class="pp-missoes">${[["importar", "📥 Importar alunos"], ["ano", "📅 Ano letivo e aulas"]].map(([x, r]) => `<a class="pp-mis ${x === k ? "atual" : ""}" href="#/painel/${x}">${r}</a>`).join("")}<button class="btn btn-sec btn-peq" type="button" id="cfg-tema">🎨 Tema do portal (decoração por época)</button></span></div>`;
  async function telaImportar(u) {
    const turmas = turmasDeAula();
    const cfg = await config();
    const el = tela(topo(u, "config") + subConfig("importar") + `
      <div class="painel"><h2>Colar uma lista</h2><p>Um aluno por linha, com nome completo. Nomes que já existem na turma são ignorados. Cada aluno novo recebe um código de 4 números.</p>
        <label>Turma <select id="tt">${turmas.map(x => `<option value="${x.id}">${esc(rotuloTurma(x.id))}</option>`).join("")}</select></label>
        <textarea id="lista" rows="10" class="pp-area" placeholder="Ana Clara Souza&#10;Pedro Henrique Lima"></textarea>
        <div class="row-btns"><button class="btn" id="imp1" type="button">📥 Importar para esta turma</button></div></div>
      <div class="painel" hidden><h2>Importar arquivo de várias turmas</h2><p>Arquivo <strong>.json</strong> no formato preparado pelo Claude (todas as turmas de uma vez).</p>
        <input type="file" id="arq" accept=".json,application/json"> <button class="btn" id="imp2" type="button">📥 Importar arquivo</button></div>
      <div class="painel" hidden><h2>🧩 Marcar alunos atípicos (com PEI)</h2><p>Cole os nomes completos, um por linha. O portal procura em todas as turmas e coloca o 🧩 ao lado do nome: na tabela da turma, na presença, no relatório da aula e nos cartões com os códigos. Esta marcação fica só no painel do professor.</p>
        <textarea id="atip" rows="8" class="pp-area" placeholder="Nome completo do aluno"></textarea>
        <div class="row-btns"><button class="btn" id="atipok" type="button">🧩 Marcar</button></div><div id="atipres"></div></div>
      <div class="painel" hidden><h2>🧪 Alunos de teste</h2><p>Cria um aluno <strong>“Aluno Teste”</strong> em cada turma, para você testar a entrada com código. Depois dos testes, use <strong>Remover alunos de teste</strong>.</p>
        <div class="row-btns"><button class="btn btn-sec" id="tst" type="button">🧪 Criar alunos de teste</button><button class="btn btn-sec" id="tstx" type="button">🧹 Remover alunos de teste</button></div>
        <div id="tstres"></div></div>
      <div id="res" class="painel" hidden></div>
      <p class="ajuda">Ano letivo atual: <strong>${esc(cfg.ano)}</strong>.</p>`);
    ligarSair(el);
    const res = el.querySelector("#res");
    const mostrar = (titulo, grupos) => {
      res.hidden = false;
      const herdou = grupos.flatMap(([tid, r]) => r.filter(a => a.trilha || a.atipico).map(a => `${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""} <small>(${esc(nomeTurma(tid))})</small>`));
      const duvida = grupos.flatMap(([tid, r]) => r.filter(a => a.duvida).map(a => `${esc(a.nome)} <small>(${esc(nomeTurma(tid))})</small>`));
      res.innerHTML = `<h2>${esc(titulo)}</h2>` + grupos.map(([tid, r]) => `<p><strong>${esc(nomeTurma(tid))}</strong>: ${r.length} aluno(s) novo(s)</p>`).join("") +
        (herdou.length ? `<p>✅ Voltaram já marcados do ano passado: ${herdou.join(" · ")}</p>` : "") +
        (duvida.length ? `<p>⚠️ Nome repetido no ano passado (não marquei sozinho, confira e marque na turma): ${duvida.join(" · ")}</p>` : "") +
        `<p class="ajuda">Os códigos aparecem na aba 🏫 Turmas e nos cartões para imprimir.</p>`;
    };
    const mostrarTestes = async () => {
      const q = await db().collection("alunos").where("teste", "==", true).get();
      const lin = q.docs.map(d => d.data()).sort((x, y) => turmas.findIndex(t => t.id === x.turma) - turmas.findIndex(t => t.id === y.turma));
      el.querySelector("#tstres").innerHTML = lin.length ? `<table class="pp-tabela"><thead><tr><th>Turma</th><th>Aluno</th><th>Código</th><th>Situação</th></tr></thead><tbody>${lin.map(a => `<tr><td>${esc(nomeTurma(a.turma))}</td><td>${esc(a.nome)}</td><td class="pp-cod">${esc(a.codigo)}</td><td>${a.ativo ? "ativo" : "desativado"}</td></tr>`).join("")}</tbody></table>` : `<p class="ajuda">Nenhum aluno de teste no momento.</p>`;
    };
    mostrarTestes().catch(() => null);
    el.querySelector("#atipok").onclick = async () => {
      const sem = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
      const nomes = el.querySelector("#atip").value.split("\n").map(sem).filter(Boolean);
      if (!nomes.length) return;
      const q = await db().collection("alunos").get();
      const achou = [], ops = [];
      q.docs.forEach(d => { const a = d.data(); if (nomes.includes(sem(a.nome))) { achou.push(sem(a.nome)); if (!a.atipico) ops.push(b => b.update(d.ref, { atipico: true })); } });
      await lotes(ops);
      const falta = nomes.filter(n => !achou.includes(n));
      el.querySelector("#atipres").innerHTML = `<p>✅ ${achou.length} aluno(s) marcado(s) com 🧩.</p>` + (falta.length ? `<p>⚠️ Não encontrei (confira a grafia no cadastro): ${falta.map(esc).join(" · ")}</p>` : "");
    };
    el.querySelector("#tst").onclick = async () => {
      const b = el.querySelector("#tst"); b.disabled = true; b.textContent = "Criando…";
      try {
        const ja = new Set((await db().collection("alunos").where("teste", "==", true).get()).docs.map(d => d.data().turma));
        for (const t of turmas) {
          if (ja.has(t.id)) continue;
          const r = await adicionarAlunos(t.id, [{ nome: "Aluno Teste" }], cfg.ano);
          if (r[0]) await db().collection("alunos").doc(r[0].id).update({ teste: true });
        }
        await mostrarTestes(); toast("Alunos de teste prontos!");
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "🧪 Criar alunos de teste";
    };
    el.querySelector("#tstx").onclick = async () => {
      if (!await P.confirmar("Remover todos os alunos de teste (e o que eles fizeram no portal)?")) return;
      try {
        const q = await db().collection("alunos").where("teste", "==", true).get();
        const ops = [];
        for (const d of q.docs) {
          const a = d.data();
          ops.push(x => x.delete(d.ref)); ops.push(x => x.delete(db().collection("acessos").doc(a.turma + "_" + a.codigo)));
          const pr = await db().collection("progresso").where("alunoId", "==", d.id).get();
          pr.docs.forEach(p => ops.push(x => x.delete(p.ref)));
        }
        await lotes(ops); await mostrarTestes(); toast("Alunos de teste removidos.");
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); }
    };
    el.querySelector("#imp1").onclick = async () => {
      const tid = el.querySelector("#tt").value;
      const nomes = el.querySelector("#lista").value.split(/\r?\n/).map(arrumarNome).filter(n => n.length > 2);
      if (!nomes.length) return await P.aviso("Cole pelo menos um nome.");
      const b = el.querySelector("#imp1"); b.disabled = true; b.textContent = "Importando…";
      try { const r = await adicionarAlunos(tid, nomes.map(nome => ({ nome })), cfg.ano); mostrar("Importação concluída", [[tid, r]]); el.querySelector("#lista").value = ""; }
      catch (err) { await P.aviso("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "📥 Importar para esta turma";
    };
    el.querySelector("#imp2").onclick = async () => {
      const f = el.querySelector("#arq").files[0]; if (!f) return await P.aviso("Escolha o arquivo.");
      let d; try { d = JSON.parse(await f.text()); } catch (e) { return await P.aviso("Arquivo inválido."); }
      const ts = d && d.turmas ? Object.keys(d.turmas).filter(tid => turmas.some(x => x.id === tid)) : [];
      if (!ts.length) return await P.aviso("O arquivo não tem turmas reconhecidas.");
      const total = ts.reduce((n, tid) => n + d.turmas[tid].length, 0);
      if (!await P.confirmar(`Importar ${total} alunos em ${ts.length} turmas?`)) return;
      const b = el.querySelector("#imp2"); b.disabled = true;
      const grupos = [];
      try { for (const tid of ts) { b.textContent = "Importando " + nomeTurma(tid) + "…"; grupos.push([tid, await adicionarAlunos(tid, d.turmas[tid], d.ano || cfg.ano)]); } mostrar("Importação concluída", grupos); }
      catch (err) { await P.aviso("Erro: " + (err.message || err)); if (grupos.length) mostrar("Importação parcial", grupos); }
      b.disabled = false; b.textContent = "📥 Importar arquivo";
    };
  }

  /* 👣🧩 Relatório: quem estava marcado no ano anterior (sem o 9º) e se já voltou marcado no ano atual */
  async function relatorioHeranca(box, cfg) {
    const passados = [...(await marcadosDoAnoPassado(cfg.ano)).values()].filter(a => !String(a.turma || "").startsWith("9"));   // o 9º sai da escola: fora do relatório (quem repetir e for importado volta marcado igual)
    const ativos = (await db().collection("alunos").where("ativo", "==", true).get()).docs.map(d => ({ id: d.id, ...d.data() }));
    const porNome = new Map(ativos.map(a => [normNome(a.nome), a]));
    const linhas = passados.sort((x, y) => String(x.turma).localeCompare(String(y.turma)) || x.nome.localeCompare(y.nome)).map(a => {
      const agora = porNome.get(normNome(a.nome));
      const falta = agora && ((a.trilha && !agora.trilha) || (a.atipico && !agora.atipico));
      const sit = a.repetido ? "⚠️ nome repetido: confira" : !agora ? "⏳ ainda não está nas listas deste ano" : falta ? `⚠️ está no ${esc(nomeTurma(agora.turma))}, mas sem a marcação: marque na turma` : `✅ voltou marcado (${esc(nomeTurma(agora.turma))})`;
      return `<tr><td>${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}</td><td>${esc(nomeTurma(a.turma))} · ${esc(a.ano)}</td><td>${sit}</td></tr>`;
    });
    box.innerHTML = `<h2>👣🧩 Marcações do ano passado</h2>` + (linhas.length
      ? `<p>Alunos que usavam a 👣 Trilha ou tinham 🧩 no ano anterior (sem o 9º ano, que saiu da escola).</p><div class="tabela-wrap"><table class="pp-tabela"><thead><tr><th>Aluno</th><th>Turma no ano passado</th><th>Neste ano</th></tr></thead><tbody>${linhas.join("")}</tbody></table></div>`
      : `<p class="ajuda">Nenhum aluno marcado no ano anterior (ou o ano novo ainda não começou: este relatório vale depois de “Começar o ano”).</p>`);
  }

  /* -------- Ano letivo: virada de ano -------- */
  async function telaAno(u) {
    const cfg = await config();
    const el = tela(topo(u, "config") + subConfig("ano") + `<div class="painel"><h2>Ano letivo atual: ${esc(cfg.ano)}</h2>
      <p>No começo de cada ano letivo:</p><ol><li>Clique em <strong>Começar novo ano</strong>: todos os alunos ativos são desativados (os códigos param de funcionar), mas o histórico fica guardado.</li>
      <li>Importe as listas novas em <a href="#/painel/importar">⚙️ Configurações › 📥 Importar alunos</a>.</li><li>Imprima os cartões com os códigos novos.</li></ol>
      <div class="row-btns"><button class="btn" id="novo" type="button">📅 Começar o ano ${esc(cfg.ano + 1)}</button></div>
      <p class="ajuda">👣 Quem usava a Trilha Passo a Passo e 🧩 os alunos atípicos voltam já marcados quando você importa as listas do ano novo (o 9º ano sai da escola e fica fora do relatório; quem repetir volta marcado igual). Confira no relatório abaixo.</p></div>
      <div class="painel" id="heranca"><h2>👣🧩 Marcações do ano passado</h2><p class="ajuda">Carregando…</p></div>
      <div class="painel"><h2>🗓️ Bimestre em uso</h2>
        <p>O bimestre escolhido aqui é o que os alunos veem no portal e o que o painel usa (aula, missões, Panorama, Prova). <strong>Cada bimestre tem o seu Diário, Boletim e Prova</strong>: as aulas (pelas datas do bimestre), as notas e a configuração da prova ficam separadas. Os outros bimestres ficam guardados; dá para voltar a qualquer um e consultar.</p>
        <div class="pp-periodos" role="radiogroup" aria-label="Bimestre em uso">${(cat().periodos || []).map(pr => { const tem = cat().apostilas.some(a => (a.periodo || cat().periodoPadrao) === pr.id); const at = pr.id === P.periodoAtual();
          return `<button type="button" class="btn ${at ? "" : "btn-sec"} pp-periodo" role="radio" aria-checked="${at}" data-per="${esc(pr.id)}" ${tem ? "" : "disabled"}>${at ? "✅ " : ""}${esc(pr.nome)}${tem ? "" : " <small>(em preparação)</small>"}</button>`; }).join("")}</div>
        <p class="ajuda">Só dá para escolher um bimestre que já tem material pronto. Os de 2027 aparecem aqui assim que o material de cada um for criado.</p></div>
      <div class="painel"><h2>▶️ Tarefas só depois de "Iniciar a aula"</h2>
        <p>Situação: <span class="pp-prova-st ${cfg.modoAula !== false ? "on" : "off"}">${cfg.modoAula !== false ? "▶️ LIGADO" : "⚪ Desligado"}</span></p>
        <p>Ligado, as <strong>tarefas</strong> de cada turma ficam fechadas até você tocar em <strong>▶️ Iniciar a aula</strong> (o painel pergunta sozinho no horário da aula, ou pelo botão na barra de cima) e fecham de novo no <strong>🏁 Finalizar aula</strong>. Os textos ficam sempre abertos. Quem <strong>🏠 estuda em casa</strong> não tem trava.</p>
        <div class="row-btns"><button class="btn" id="modo" type="button">${cfg.modoAula !== false ? "⚪ Desligar" : "▶️ Ligar"}</button></div></div>

`);
    ligarSair(el);
    relatorioHeranca(el.querySelector("#heranca"), cfg).catch(e => { el.querySelector("#heranca").innerHTML = `<h2>👣🧩 Marcações do ano passado</h2><p class="ajuda">Não consegui carregar: ${esc(e.message || e)}</p>`; });
    el.querySelectorAll("[data-per]").forEach(b => b.onclick = async () => {
      const id = b.dataset.per, pr = (cat().periodos || []).find(x => x.id === id); if (id === P.periodoAtual()) return;
      if (!await P.confirmar(`Trocar para o ${pr.nome}? Os alunos passam a ver só as apostilas desse bimestre, e o painel também.`)) return;
      await db().collection("config").doc("geral").set({ periodo: id }, { merge: true }); P._periodo = id;
      toast("🗓️ Bimestre em uso: " + pr.nome); telaAno(u);
    });
    el.querySelector("#modo").onclick = async () => {
      const on = cfg.modoAula !== false;
      if (on && !await P.confirmar("Desligar? As tarefas de todas as turmas ficam sempre abertas, sem precisar iniciar a aula.")) return;
      await db().collection("config").doc("geral").set({ modoAula: !on }, { merge: true });
      toast(on ? "Desligado." : "Ligado: tarefas só depois de Iniciar a aula."); telaAno(u);
    };
    if (el.querySelector("#trava")) el.querySelector("#trava").onclick = async () => {
      if (!cfg.travaHorario && !await P.confirmar("Ligar a trava? A partir de agora, os alunos só fazem as tarefas no horário da aula da turma.")) return;
      await db().collection("config").doc("geral").set({ travaHorario: !cfg.travaHorario }, { merge: true });
      toast(cfg.travaHorario ? "Trava desligada." : "Trava ligada."); telaAno(u);
    };
    el.querySelector("#novo").onclick = async () => {
      if (!await P.confirmar(`Começar o ano letivo ${cfg.ano + 1}? Todos os alunos ativos de ${cfg.ano} serão desativados.`)) return;
      if (await P.perguntar(`Para confirmar, digite ${cfg.ano + 1}:`) !== String(cfg.ano + 1)) return await P.aviso("Cancelado.");
      const b = el.querySelector("#novo"); b.disabled = true; b.textContent = "Desativando…";
      try {
        const q = await db().collection("alunos").where("ativo", "==", true).get();
        const ops = [];
        q.docs.forEach(d => { const a = d.data(); ops.push(x => x.update(d.ref, { ativo: false })); ops.push(x => x.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: d.id, turma: a.turma, ativo: false, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })); });
        ops.push(x => x.set(db().collection("config").doc("geral"), { ano: cfg.ano + 1, viradaEm: Date.now() }, { merge: true }));
        await lotes(ops);
        await P.aviso(`Pronto! ${q.size} alunos desativados. Agora importe as listas de ${cfg.ano + 1}.`);
        location.hash = "#/painel/importar";
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); b.disabled = false; }
    };
  }

  P.painel = {
    async abrir(mount, sub, arg, arg2) {
      mountFn = mount;
      await (N.app(0).pronto);
      await new Promise(ok => { const x = auth().onAuthStateChanged(() => { x(); ok(); }); });
      const u = await entrar();
      await config().catch(() => null); // 🗓️ já sabe qual bimestre está em uso antes de abrir qualquer aba
      if (!ss.get("painel:pendencias")) { ss.set("painel:pendencias", "1"); setTimeout(() => perguntarInicio(u).finally(() => mostrarAvisos().finally(() => perguntarPendentes())), 900); }
      else setTimeout(() => { perguntarInicio(u); mostrarAvisos({ contar: true }).catch(() => {}); }, 900);
      setTimeout(() => ouvirCasa(), 3000);
      setTimeout(() => vigiarFamilias(), 6000);   // 🎬 lembrete da família no fim da aula (18/11/2026)
      try {
        if (sub === "aula") return await telaAula(u, arg, arg2);
        if (sub === "placar") return await telaPlacar(u, arg);
        if (sub === "presenca") { location.replace("#/painel/panorama"); return; }
        if (sub === "config") return await telaImportar(u);
        if (sub === "panorama") return await telaPanorama(u);
        if (sub === "prova") return await telaProvaPainel(u, arg);
        if (sub === "diario") return await telaDiario(u, arg, arg2);
        if (sub === "relatorio") return await P.relatorio.abrir({ db, esc, tela, topo, ligarSair, todasTurmas, nomeTurma, notaProvaDoc, OCORR }, u, arg, arg2);   // 📄 relatório do aluno (18/11/2026)
        if (sub === "importar") return await telaImportar(u);
        if (sub === "ano") return await telaAno(u);
        return await telaTurmas(u, sub === "turma" ? arg : null);
      } catch (err) {
        console.error(err);
        tela(`<div class="painel erro"><h1>Não foi possível abrir o painel</h1><p>${esc(err.message || err)}</p>
          <p>Se aparecer “permission” ou “insufficient permissions”, confira se as regras de segurança foram publicadas no Firebase e se você entrou com ${esc(N.EMAIL_PROFESSOR)}.</p></div>`);
      }
    }
  };
})();

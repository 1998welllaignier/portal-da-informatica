/* ============================================================
   📄 RELATÓRIO DO ALUNO — Portal da Informática
   Professor Welington Laignier · 18/11/2026
   ------------------------------------------------------------
   Junta tudo o que o portal guarda sozinho sobre um aluno:
   presença, horário de entrada, missão de cada aula (assunto,
   objetivo, BNCC), cada tarefa (início, conclusão, tempo, erros,
   dicas), quando terminou e quanto faltava para o fim da aula,
   nota da prova e as observações do professor.
   Abre no painel (#/painel/relatorio/<alunoId>) e vira PDF pelo
   botão "Salvar em PDF" (imprimir › Salvar como PDF).
   Nenhum nome de aluno fica neste arquivo (o repositório é público).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const AULA_MIN = 75;   // a aula real dura 1h15
  const NIVEL = { leitura: "📖 Leitura", basico: "🟢 Básico", desafio: "🔵 Desafio", turbo: "🔴 Turbo", revisao: "🔁 Revisão" };
  const SIT = { certo: ["✅", "Acertou sozinho"], ajuda: ["💡", "Acertou com dica ou resolução"], enviado: ["📝", "Enviou (o professor confere)"], feito: ["✅", "Feita"] };
  const ESCOLA = "Escola Municipal de Ensino Fundamental Juscelino Kubitschek · Curionópolis/PA";

  const dia = ms => { const d = new Date(ms); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const dur = ms => { if (ms == null || ms < 0) return "—"; const m = Math.round(ms / 60000); return m < 1 ? "menos de 1 min" : m < 60 ? m + " min" : Math.floor(m / 60) + " h " + (m % 60) + " min"; };
  const dataBR = d => { const [a, m, dd] = d.split("-"); return `${dd}/${m}/${a}`; };
  const SEM = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const semana = d => SEM[new Date(d + "T12:00:00").getDay()];
  const minutos = s => { const [h, m] = String(s).split(":").map(Number); return h * 60 + m; };

  /* U = utilidades do painel (db, esc, tela, topo, turmas, prova…), passadas por painel.js */
  async function abrir(U, u, alunoId, periodoArg) {
    const { esc, db } = U;
    const sn = await db().collection("alunos").doc(alunoId).get();
    if (!sn.exists) return U.tela(U.topo(u, "") + `<div class="painel erro"><p>Aluno não encontrado.</p></div>`);
    const a = { id: sn.id, ...sn.data() };
    const t = U.todasTurmas().find(x => x.id === a.turma);
    const per = periodoArg || "bim";   // bim = bimestre em uso · ano = ano todo · AAAA-MM-DD = uma aula
    const el = U.tela(U.topo(u, "") + `<div id="rel-corpo"><p class="painel">Montando o relatório…</p></div>`);
    U.ligarSair(el);

    // ---------- dados ----------
    const DIARIO = "prof/diario/turmas";
    const [progSn, aulasSn, provasSn] = await Promise.all([
      db().collection("progresso").where("alunoId", "==", a.id).get(),
      t ? db().collection(DIARIO + "/" + t.id + "/aulas").get() : Promise.resolve({ docs: [] }),
      db().collection("provas").where("alunoId", "==", a.id).get().catch(() => ({ docs: [] }))
    ]);
    const prog = progSn.docs.map(d => ({ id: d.id, ...d.data() }));
    const entrada = prog.find(p => p.tipo === "entrada") || {};
    const casa = prog.find(p => p.tipo === "casa") || {};   // 🏠 estudo em casa: { sessoes: {dia: início}, missaoDia, videos: {mid: quando}, instrucoes }
    const aulas = {}; aulasSn.docs.forEach(d => { aulas[d.id] = d.data(); });
    const ano = String(new Date().getFullYear());
    const noPer = d => per === "ano" ? d.startsWith(ano) : per === "bim" ? (P.noPeriodo ? P.noPeriodo(d) : true) : d === per;

    // tarefas de cada missão, com o título e o nível (vindo da própria apostila)
    const aids = [...new Set(prog.filter(p => p.aid).map(p => p.aid))];
    await Promise.all(aids.map(x => P.carregarApostila(x).catch(() => null)));
    const tarefas = [];   // { d, aid, mid, at, st }
    const missaoInfo = (aid, mid) => { const C = P.conteudo[aid]; const m = C && C.missoes.find(x => x.id === mid); return m || null; };
    prog.filter(p => p.aid && p.mid && p.mid !== "rc").forEach(p => {
      let atv = {}; try { atv = JSON.parse(p.atv || "{}"); } catch (e) {}
      let ats = {}; try { P.montarMissao(p.aid, p.mid).pages.forEach(pg => (pg.atividades || []).forEach(at => { ats[at.id] = at; })); } catch (e) {}
      Object.entries(atv).forEach(([id, st]) => { if (!st || !st.status || !st.quando) return; tarefas.push({ d: dia(st.quando), aid: p.aid, mid: p.mid, at: ats[id] || { id, titulo: id }, st }); });
      Object.entries(p.vis || {}).forEach(([pid, ts]) => { if (ts) tarefas.push({ d: dia(ts), aid: p.aid, mid: p.mid, leitura: true, at: { titulo: "Leitura: " + pid.replace(/_/g, " ") }, st: { quando: ts } }); });
    });
    tarefas.sort((x, y) => x.st.quando - y.st.quando);

    // dias a mostrar: aulas do diário + dias com entrada ou tarefa + dias da aula da turma até hoje
    const hoje = P.nuvem.hoje();
    const dias = new Set();
    Object.keys(aulas).forEach(d => d <= hoje && dias.add(d));
    Object.keys(entrada.dias || {}).forEach(d => dias.add(d));
    tarefas.forEach(x => dias.add(x.d));
    Object.keys(casa.sessoes || {}).forEach(d => dias.add(d));
    if (t && t.aula && per !== "ano" && !/^\d{4}-/.test(per)) {
      const info = P.periodoInfo ? P.periodoInfo() : {};
      if (info.inicio) for (let x = new Date(info.inicio + "T12:00:00"); dia(x.getTime()) <= hoje && (!info.fim || dia(x.getTime()) <= info.fim); x.setDate(x.getDate() + 1)) if (x.getDay() === t.aula.dia) dias.add(dia(x.getTime()));
    }
    const lista = [...dias].filter(noPer).sort();

    // presença do dia: o que o professor marcou vale mais; senão, o portal (entrou ou fez tarefa)
    const entradasDe = d => { const e = (entrada.entradas || {})[d]; const v = e ? Object.keys(e).map(Number).sort((x, y) => x - y) : []; if (!v.length && (entrada.dias || {})[d]) v.push(entrada.dias[d]); return v; };
    const presenca = d => {
      const au = aulas[d] || {};
      if (au.ocorrencia && au.ocorrencia.tipo && au.ocorrencia.tipo !== "ninguem") return { v: "S", txt: "Não houve aula" + (U.OCORR[au.ocorrencia.tipo] ? " (" + U.OCORR[au.ocorrencia.tipo].replace(/^\S+\s/, "") + ")" : "") };
      const man = (au.presencas || {})[a.id];
      if ((casa.sessoes || {})[d]) return { v: "P", txt: "🏠 Estudou em casa" };
      if (man) return { v: man, txt: { P: "Presente", F: "Faltou", J: "Falta justificada" }[man] || man, prof: true };
      if (entradasDe(d).length || tarefas.some(x => x.d === d)) return { v: "P", txt: "Presente (entrou no portal)" };
      if (a.emCasa) return { v: "J", txt: "Estuda em casa" };
      if (au.ocorrencia && au.ocorrencia.tipo === "ninguem") return { v: "F", txt: "Faltou (nenhum aluno veio)" };
      if (Object.values(au.presencas || {}).some(v => v) || au.missaoHoje) return { v: "F", txt: "Faltou" };
      return { v: "?", txt: "Sem registro de chamada" };
    };

    // ---------- resumo ----------
    const R0 = lista.map(d => ({ d, pr: presenca(d), ent: entradasDe(d), tf: tarefas.filter(x => x.d === d) }));
    const R = R0.filter(r => r.pr.v !== "?" || aulas[r.d]);   // dia da aula sem nenhum registro (nem chamada, nem portal): não mostra
    const semReg = R0.length - R.length;
    const comAula = R.filter(r => r.pr.v !== "S" && r.pr.v !== "?");
    const pres = comAula.filter(r => r.pr.v === "P" || r.pr.v === "J").length;
    const tfAll = R.flatMap(r => r.tf).filter(x => !x.leitura);
    const sozinho = tfAll.filter(x => x.st.status === "certo").length, comAjuda = tfAll.filter(x => x.st.status === "ajuda").length;
    const erros = tfAll.reduce((s, x) => s + (x.st.tentativas || 0), 0), dicas = tfAll.reduce((s, x) => s + (x.st.dicas || 0), 0);
    const missoesOk = prog.filter(p => p.basicoOk && p.mid !== "rc" && (per === "ano" || Object.keys(p.dias || {}).some(noPer)));
    const provas = [];
    for (const x of provasSn.docs) { const d = x.data(); if (!noPer(d.dia || hoje)) continue; try { await P.prova.carregar(d.aid); } catch (e) {} provas.push({ d, nota: U.notaProvaDoc(d) }); }

    // ---------- cada aula ----------
    // apostila do bimestre da turma (para achar o título da 📌 Missão do dia, quando o aluno não fez tarefa)
    const apSerie = t ? P.catalogo.apostilas.filter(x => x.serie === t.serie.id && P.doPeriodo(x)) : [];
    const baseAid = (apSerie.find(x => !x.oculta && !x.trilha && !x.especial) || {}).id, baseEsp = (apSerie.find(x => x.especial) || {}).id;
    await Promise.all([baseAid, baseEsp].filter(Boolean).map(x => P.carregarApostila(x).catch(() => null)));
    const iniAula = t && t.aula && t.aula.ini ? minutos(t.aula.ini) : null;
    const blocoDia = r => {
      const au = aulas[r.d] || {};
      const mids = [...new Set(r.tf.map(x => x.aid + "|" + x.mid))];
      const mh = au.missaoHoje && au.missaoHoje.mid;
      const fim = r.tf.length ? Math.max(...r.tf.map(x => x.st.quando)) : null;
      const fimMin = fim != null ? new Date(fim).getHours() * 60 + new Date(fim).getMinutes() : null;
      const cIni = (casa.sessoes || {})[r.d] || null, cLim = (P.catalogo.casaMinutos || 120) * 60000;
      // 🏫 quem frequenta a aula de outra turma: vale o horário da aula que estava acontecendo (18/11/2026)
      const aulasDia = [t, a.outraTurma && P.turma(a.outraTurma)].filter(x => x && x.aula && x.aula.ini && fim != null && new Date(fim).getDay() === x.aula.dia);
      const ref0 = r.ent.length ? r.ent[0] : (r.tf.length ? r.tf[0].st.quando : null), refMin = ref0 != null ? new Date(ref0).getHours() * 60 + new Date(ref0).getMinutes() : null;
      const tAulaDia = aulasDia.sort((x, y) => Math.abs(minutos(x.aula.ini) - refMin) - Math.abs(minutos(y.aula.ini) - refMin))[0];
      const iniDia = tAulaDia ? minutos(tAulaDia.aula.ini) : null;
      const sobra = !cIni && iniDia != null && fimMin != null ? iniDia + AULA_MIN - fimMin : null;
      let ant = r.ent.length ? r.ent[0] : null;
      const linhas = r.tf.filter(x => !x.leitura).map(x => {
        const s = x.st, inicio = s.ini && s.ini <= s.quando ? s.ini : null, base = inicio || ant;
        const tempo = base ? s.quando - base : null; ant = s.quando;
        const sit = SIT[s.status] || ["•", s.status];
        return `<tr><td>${esc(NIVEL[x.at.nivel] || "")}</td><td>${esc(P.util.semTags(x.at.titulo || "").replace(/\s+/g, " "))}</td>
          <td>${sit[0]} ${esc(sit[1])}</td><td>${inicio ? hhmm(inicio) : "—"}</td><td>${hhmm(s.quando)}</td>
          <td>${dur(tempo)}${!inicio && tempo != null ? '<sup title="Sem a hora de início: tempo contado desde a tarefa anterior (ou desde a entrada)">*</sup>' : ""}</td>
          <td>${s.tentativas || 0}</td><td>${s.dicas || 0}${s.viuResolucao ? " + resolução" : ""}</td></tr>`;
      }).join("");
      const leituras = r.tf.filter(x => x.leitura).length;
      const assuntos = (mids.length ? mids : (mh ? [(au.missaoHoje.aid || "") + "|" + mh] : [])).map(k => {
        let [aid, mid] = k.split("|"); if (!aid) aid = mid === "ae" ? (baseEsp || "") : (baseAid || ""); const m = missaoInfo(aid, mid); if (!m) return au.missaoHoje ? `<p><b>Missão do dia:</b> ${esc(au.missaoHoje.titulo || mid)}</p>` : "";
        const bncc = m.bncc || (P.bncc && P.bncc[aid] && P.bncc[aid][mid]);
        return `<div class="rel-assunto"><p><b>${esc(m.titulo)}</b></p>${m.objetivo ? `<p><b>Objetivo:</b> ${m.objetivo}</p>` : ""}${bncc ? `<p><b>BNCC (Computação):</b> ${esc(bncc)}</p>` : ""}</div>`;
      }).join("");
      const obs = ((au.obsAlunos || {})[a.id]) || "";
      // 🏠 estudo em casa (18/11/2026): início da sessão, vídeos vistos, quanto das 2 horas usou
      let casaTxt = "";
      if (cIni) {
        const vids = Object.entries(casa.videos || {}).filter(([, ts]) => ts && dia(ts) === r.d).sort((x, y) => x[1] - y[1]);
        const nomeM = mid => { const aidC = (r.tf.find(x => x.mid === mid) || {}).aid || baseAid; const m = missaoInfo(aidC, mid); return m ? m.titulo : mid; };
        const md = (casa.missaoDia || {})[r.d];
        casaTxt = `<div class="rel-casa"><p>🏠 <b>Estudo em casa:</b> começou a sessão às <b>${hhmm(cIni)}</b>${md ? ` · missão escolhida: <b>${esc(nomeM(md))}</b>` : ""}${casa.instrucoesEm && dia(casa.instrucoesEm) === r.d ? ` · assistiu ao vídeo de instruções às ${hhmm(casa.instrucoesEm)}` : ""}.</p>
          ${vids.length ? `<p>🎬 Vídeo da missão assistido até o fim às ${vids.map(([mid, ts]) => `${hhmm(ts)} (${esc(nomeM(mid))})`).join(", ")}.</p>` : `<p>🎬 Não terminou o vídeo da missão neste dia.</p>`}
          ${fim != null ? `<p>⏱️ Estudou <b>${dur(fim - cIni)}</b> até a última tarefa (a sessão vai até ${hhmm(cIni + cLim)}).</p>` : ""}</div>`;
      }
      // ⚠️ dificuldades: tarefas com 2 ou mais erros, dica ou resolução
      const dif = r.tf.filter(x => !x.leitura && ((x.st.tentativas || 0) >= 2 || x.st.dicas || x.st.viuResolucao));
      const difTxt = dif.length ? `<p class="rel-dif">⚠️ <b>Teve mais dificuldade em:</b> ${dif.map(x => `${esc(P.util.semTags(x.at.titulo || "").replace(/\s+/g, " "))} (${x.st.tentativas || 0} erro${(x.st.tentativas || 0) === 1 ? "" : "s"}${x.st.dicas ? ", " + x.st.dicas + " dica" + (x.st.dicas > 1 ? "s" : "") : ""}${x.st.viuResolucao ? ", viu a resolução" : ""})`).join("; ")}.</p>` : "";
      return `<section class="rel-dia">
        <h3>📅 ${dataBR(r.d)} (${semana(r.d)}) <span class="rel-pres rel-p-${r.pr.v}">${esc(r.pr.txt)}${r.pr.prof ? " · chamada do professor" : ""}</span></h3>
        ${r.ent.length ? `<p>🚪 <b>Entrou no portal às</b> ${r.ent.map(hhmm).join(", ")}${r.ent.length > 1 ? " (entrou mais de uma vez)" : ""}</p>` : ""}
        ${casaTxt}
        ${assuntos}
        ${linhas ? `<div class="tabela-wrap"><table class="rel-tab"><thead><tr><th>Nível</th><th>Tarefa</th><th>Resultado</th><th>Começou</th><th>Terminou</th><th>Tempo</th><th>Erros</th><th>Dicas</th></tr></thead><tbody>${linhas}</tbody></table></div>` : (r.pr.v === "P" ? "<p>Nenhuma tarefa concluída neste dia.</p>" : "")}
        ${difTxt}
        ${(() => { const c = r.tf.find(x => x.at.tipo === "carinhas" && x.st.car); if (!c || !P.tipos.carinhas) return "";   // 🙂 autoavaliação (modelo em espiral)
          return `<p class="rel-car">🙂 <b>Como disse que se sentiu na aula:</b> ${P.tipos.carinhas.resumoResposta(c.at, c.st)}.</p>`; })()}
        ${leituras ? `<p>📖 Leu ${leituras} parte${leituras > 1 ? "s" : ""} do texto da missão.</p>` : ""}
        ${(() => { const L = au.leituraGuiada; if (!L || !L.feita) return "";   // 📖 leitura guiada (20/11/2026)
          const leu = (L.leitores || []).filter(x => x.id === a.id), ac = (L.acertosPorAluno || {})[a.id] || 0, np = (L.perguntas || []).length;
          return `<p class="rel-lg">📖 <b>Leitura guiada com a turma</b>${L.titulo ? ` (${esc(L.titulo)})` : ""}${leu.length ? `: 🎤 <b>leu em voz alta</b> o trecho ${leu.map(x => x.trecho).join(" e ")} para a turma` : ""}${np ? `${leu.length ? ";" : ":"} acertou <b>${ac} de ${np}</b> pergunta${np > 1 ? "s" : ""} relâmpago` : ""}.</p>`; })()}
        ${fim != null ? `<p>🏁 <b>Última tarefa concluída às ${hhmm(fim)}</b>${sobra != null ? (sobra >= 0 ? ` · faltavam <b>${sobra} min</b> para o fim da aula (${tAulaDia.aula.ini} + 1h15${tAulaDia !== t ? ", aula do " + esc(U.nomeTurma(tAulaDia.id)) : ""})` : ` · ${-sobra} min depois do fim da aula (${tAulaDia.aula.ini} + 1h15${tAulaDia !== t ? ", aula do " + esc(U.nomeTurma(tAulaDia.id)) : ""})`) : ""}.</p>` : ""}
        ${String(au.registro || "").trim() ? `<p class="rel-reg"><b>O que a turma fez nesta aula (registro do professor):</b> ${esc(au.registro)}</p>` : ""}
        <div class="rel-obs"><b>👨‍🏫 Observações do professor sobre o aluno nesta aula:</b>
          <div class="rel-obs-txt" ${obs ? "" : "data-vazio"}>${obs ? esc(obs) : "—"}</div>
          <div class="rel-tela"><textarea data-obs="${r.d}" rows="2" placeholder="Comportamento, participação, dificuldades… (escreva fatos: o que aconteceu)">${esc(obs)}</textarea>
          <button class="btn btn-sec btn-peq" type="button" data-salvar="${r.d}">💾 Salvar observação</button></div></div>
      </section>`;
    };

    const opDias = [...dias].filter(d => d.startsWith(ano)).sort().reverse();
    const corpo = el.querySelector("#rel-corpo");
    corpo.innerHTML = `<div class="painel rel-tela pp-barra">
        <a class="btn btn-sec btn-peq" href="#/painel/turma/${esc(a.turma)}">← Voltar à turma</a>
        <label>Período <select id="rel-per">
          <option value="bim" ${per === "bim" ? "selected" : ""}>Bimestre em uso</option>
          <option value="ano" ${per === "ano" ? "selected" : ""}>Ano todo (${ano})</option>
          ${opDias.map(d => `<option value="${d}" ${per === d ? "selected" : ""}>Só a aula de ${dataBR(d)}</option>`).join("")}</select></label>
        <button class="btn" id="rel-pdf" type="button">🖨️ Salvar em PDF</button>
        <button class="btn btn-sec" id="rel-copiar" type="button">📋 Copiar o texto</button></div>
      <p class="ajuda rel-tela" id="rel-ajuda-pdf" hidden></p>
      <article class="rel-doc">
        <header class="rel-cab"><div><p class="rel-prof">Prof. Welington Laignier · Portal da Informática</p><h2>📄 Relatório do aluno</h2>
          <p class="rel-esc">${esc(ESCOLA)}</p></div></header>
        <table class="rel-id"><tbody>
          <tr><th>Aluno</th><td>${esc(a.nome)}</td></tr>
          <tr><th>Turma</th><td>${esc(t ? (U.nomeTurma(t.id).includes(t.serie.nome) ? U.nomeTurma(t.id) : t.serie.nome + " · " + U.nomeTurma(t.id)) : a.turma)}${t && t.aula ? ` · aula às ${SEM[t.aula.dia].replace("-feira", "s-feiras").replace(/^(sábado|domingo)$/, "$1s")}, ${t.aula.ini} (1h15)${a.outraTurma && P.turma(a.outraTurma) ? ` · também frequenta a aula do ${U.nomeTurma(a.outraTurma)}` : ""}` : ""}</td></tr>
          <tr><th>Período</th><td>${per === "ano" ? "Ano todo de " + ano : per === "bim" ? ((P.periodoInfo && P.periodoInfo().nome) || "Bimestre em uso") : "Aula de " + dataBR(per)}</td></tr>
          <tr><th>Gerado em</th><td>${dataBR(hoje)}, às ${hhmm(Date.now())}</td></tr></tbody></table>
        <section class="rel-como"><h3>💻 Como o Portal da Informática funciona</h3>
          <p>Nas aulas de Informática, cada aluno entra no portal do professor com o seu código pessoal. O professor inicia a aula e escolhe a missão do dia. O aluno lê a explicação, faz as tarefas e recebe a correção na hora. Quando erra, pode pedir dica e tentar de novo.</p>
          <p>O portal guarda sozinho, sem ninguém precisar anotar: a hora em que o aluno entrou, cada tarefa que fez, a hora em que terminou, quantas vezes errou e se precisou de dica. Este relatório foi montado com esses registros e com a chamada e as observações do professor.</p></section>
        <section class="rel-resumo"><h3>📊 Resumo</h3><div class="rel-cards">
          <div><b>${pres} de ${comAula.length}</b><span>aulas com presença${comAula.length ? ` (${Math.round(pres / comAula.length * 100)}%)` : ""}</span></div>
          <div><b>${missoesOk.length}</b><span>missão(ões) com o Básico concluído</span></div>
          <div><b>${tfAll.length}</b><span>tarefas concluídas</span></div>
          <div><b>${sozinho}</b><span>acertou sozinho</span></div>
          <div><b>${comAjuda}</b><span>acertou com dica</span></div>
          <div><b>${erros}</b><span>erros antes de acertar · ${dicas} dica(s)</span></div>
          ${provas.length ? `<div><b>${provas.map(x => x.nota.toFixed(1).replace(".", ",")).join(" / ")}</b><span>nota da prova no portal (de 0 a 5; se houver duas, a 2ª é a recuperação)</span></div>` : ""}
        </div>${tfAll.length ? `<div class="rel-barra" title="Tarefas: acertou sozinho × com dica"><i style="width:${Math.round(sozinho / tfAll.length * 100)}%"></i></div><p class="rel-leg">Verde: tarefas que acertou sozinho · cinza: com dica ou resolução</p>` : ""}</section>
        <section><h3>🗓️ Aula por aula</h3>${semReg ? `<p class="rel-leg">${semReg} dia(s) de aula da turma sem nenhum registro (sem chamada no diário e sem entrada no portal) não aparecem aqui.</p>` : ""}${R.length ? R.map(blocoDia).join("") : "<p>Nenhuma aula neste período.</p>"}</section>
        <p class="rel-nota">* Tempo marcado com asterisco: a hora em que a tarefa começou passou a ser registrada em 18/11/2026; antes disso, o tempo é contado desde a tarefa anterior (ou desde a entrada no portal).<br>
          “Começou” é a hora em que a tarefa apareceu para o aluno pela primeira vez. Presença: vale a chamada do professor; sem ela, conta como presente quem entrou no portal.</p>
        <footer class="rel-ass"><div class="rel-linha"></div><p>Prof. Welington Laignier<br>Professor de Informática</p></footer>
      </article>`;
    corpo.querySelector("#rel-per").onchange = e => { location.hash = "#/painel/relatorio/" + a.id + (e.target.value === "bim" ? "" : "/" + e.target.value); };
    corpo.querySelector("#rel-pdf").onclick = () => {
      // 🖨️ só o relatório vai para o papel/PDF: uma cópia limpa dele fica sozinha no topo da página enquanto imprime.
      // 📱 18/11/2026: no iPhone a impressão não espera (o "afterprint" vem antes da prévia) e, no app instalado na tela
      //    de início, window.print nem existe: a cópia só sai depois de alguns segundos e há ajuda para imprimir pelo menu.
      document.getElementById("rel-print")?.remove();
      const box = document.createElement("div"); box.id = "rel-print"; box.appendChild(corpo.querySelector(".rel-doc").cloneNode(true)); document.body.appendChild(box);
      const tt = document.title; document.title = `Relatório - ${a.nome} - ${dataBR(hoje).replace(/\//g, "-")}`; document.body.classList.add("rel-imprimindo");
      const t0 = Date.now(); let feito = false;
      const fim = () => { if (feito) return; if (Date.now() - t0 < 4000) { setTimeout(fim, 4000); return; } feito = true; document.body.classList.remove("rel-imprimindo"); document.title = tt; box.remove(); window.removeEventListener("afterprint", fim); };
      window.addEventListener("afterprint", fim);
      const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const aj = corpo.querySelector("#rel-ajuda-pdf");
      if (ios) { aj.hidden = false; aj.innerHTML = "📱 <b>No iPhone:</b> se a janela de impressão não abrir, toque em <b>Compartilhar</b> (quadradinho com a seta) › <b>Imprimir</b> › <b>Salvar em Arquivos</b> (ou abra a prévia com dois dedos e compartilhe). Também dá para usar <b>📋 Copiar o texto</b> e colar onde quiser."; }
      try { if (typeof window.print === "function") window.print(); else throw new Error("sem print"); } catch (e) { aj.hidden = false; }
      setTimeout(fim, 60000); };
    corpo.querySelector("#rel-copiar").onclick = async () => {
      const txt = corpo.querySelector(".rel-doc").innerText.replace(/💾 Salvar observação/g, "").replace(/\n{3,}/g, "\n\n");
      try { await navigator.clipboard.writeText(txt); P.toast("📋 Texto do relatório copiado. É só colar."); }
      catch (e) { const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); P.toast("📋 Texto do relatório copiado."); } catch (x) { P.toast("Não foi possível copiar."); } ta.remove(); }
    };
    corpo.querySelectorAll("[data-salvar]").forEach(b => b.onclick = async () => {
      const d = b.dataset.salvar, txt = corpo.querySelector(`[data-obs="${d}"]`).value.trim();
      b.disabled = true;
      try {
        await db().collection(DIARIO + "/" + t.id + "/aulas").doc(d).set({ data: d, obsAlunos: { [a.id]: txt } }, { merge: true });
        const box = b.closest(".rel-obs").querySelector(".rel-obs-txt"); box.textContent = txt || "—"; if (txt) box.removeAttribute("data-vazio"); else box.setAttribute("data-vazio", "");
        P.toast("💾 Observação salva.");
      } catch (e) { P.toast("Não foi possível salvar: " + (e.message || e)); }
      b.disabled = false;
    });
  }

  P.relatorio = { abrir };
})();

/* ============================================================
   PORTAL DE APOSTILAS DIGITAIS — ESCOLA JK
   Motor principal: navegação, identificação, progresso,
   páginas das missões, impressão e exportação.
   Professor Welington Laignier
   ============================================================ */
(function () {
  "use strict";

  const P = window.PORTAL = window.PORTAL || {};
  P.conteudo = {};
  P.atividades = {};
  P.tipos = P.tipos || {};
  P.registrarConteudo = (id, d) => { P.conteudo[id] = d; };
  P.registrarAtividades = (id, d) => { P.atividades[id] = d; };
  P.ilustracoes = {};
  P.registrarIlustracoes = (id, d) => { P.ilustracoes[id] = d; };

  const KEY = "portalJK:v1:";
  const SESS = "portalJK:sessao";
  const $app = () => document.getElementById("app");

  /* ---------------- utilidades ---------------- */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // textos das apostilas (conteúdo do professor): aceitam HTML simples e **negrito**
  const md = s => String(s == null ? "" : s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const semTags = s => String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\*\*/g, "");
  const h = html => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const norm = s => String(s == null ? "" : s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[.,;:!?"'“”]/g, " ").replace(/\s+/g, " ").trim();
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  P.util = { esc, md, h, norm, shuffle, semTags };

  const store = {
    get(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const sess = {
    get() { try { return JSON.parse(sessionStorage.getItem(SESS) || "null"); } catch (e) { return null; } },
    set(v) { try { sessionStorage.setItem(SESS, JSON.stringify(v)); } catch (e) {} },
    del() { try { sessionStorage.removeItem(SESS); } catch (e) {} }
  };

  let toastT;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 3200);
  }
  P.toast = toast;

  /* ---------------- catálogo ---------------- */
  const cat = () => P.catalogo;
  const serie = id => cat().series.find(s => s.id === id);
  const turma = id => { for (const s of cat().series) { const t = s.turmas.find(x => x.id === id); if (t) return { ...t, serie: s }; } return null; };
  const apostila = id => cat().apostilas.find(a => a.id === id);
  const disciplina = id => cat().disciplinas.find(d => d.id === id);
  P.carregarApostila = id => carregar(id);
  P.serie = serie; P.turma = turma; P.apostila = apostila; P.sess = sess; P.store = store;

  /* ---------------- carregamento das apostilas ---------------- */
  const loading = {};
  function carregar(aid) {
    if (P.conteudo[aid] && P.atividades[aid]) return Promise.resolve();
    if (loading[aid]) return loading[aid];
    const add = src => new Promise((ok, err) => {
      const s = document.createElement("script");
      s.src = src + "?v=" + (window.PORTAL_VERSAO || ""); s.onload = ok; s.onerror = () => err(new Error(src)); document.head.appendChild(s);
    });
    loading[aid] = Promise.all([add("dados/conteudo/" + aid + ".js"), add("dados/atividades/" + aid + ".js"),
      add("dados/ilustracoes/" + aid + ".js").catch(() => null)]).then(() => garantirDefs(aid));
    return loading[aid];
  }

  /* ---------------- ilustrações (da Apostila Ilustrada) ---------------- */
  function garantirDefs(aid) {
    let d = document.getElementById("ilu-defs");
    if (!d) { d = document.createElement("div"); d.id = "ilu-defs"; d.setAttribute("aria-hidden", "true"); document.body.appendChild(d); }
    if (d.dataset.ap !== aid) { d.innerHTML = (P.ilustracoes[aid] || {}).defs || ""; d.dataset.ap = aid; }
  }
  const soLetras = t => norm(t).replace(/[^a-z0-9]/g, "");
  function figurasDaPagina(aid, mid, pageId, pageIds) {
    const I = P.ilustracoes[aid]; if (!I) return [];
    const destino = f => {
      if (pageIds.includes(f.pagina)) return f.pagina;
      if (f.pagina === "comecar") return pageIds[0];
      return pageIds.includes("basico") ? "basico" : pageIds[0];
    };
    return I.figuras.filter(f => f.missao === mid && destino(f) === pageId);
  }
  // Coloca cada figura logo depois do bloco que vinha antes dela na apostila ilustrada
  function colocarFiguras(alvo, figs, candidatos, modo) {
    if (!figs.length) return;
    let topo = alvo.querySelector(":scope > .ilu-topo");
    let ultima = null;
    figs.forEach(f => {
      const el = h(`<div class="ilustracao">${f.html}</div>`);
      const anc = soLetras(f.ancora).slice(0, 40);
      let achou = null;
      if (anc.length >= 8) achou = candidatos.find(c => soLetras(c.textContent).includes(anc)) || candidatos.find(c => soLetras(c.textContent).includes(anc.slice(0, 20)));
      if (!anc && ultima) { ultima.after(el); ultima = el; return; }
      if (achou) {
        if (modo === "cartao") { const corpo = achou.querySelector(".atv-corpo"); achou.insertBefore(el, corpo); }
        else if (modo === "depois") { const tit = achou.querySelector("h4"); tit ? tit.after(el) : achou.prepend(el); }
        else achou.after(el);
      } else {
        if (!topo) { topo = h('<div class="ilu-topo"></div>'); alvo.prepend(topo); }
        topo.appendChild(el);
      }
      ultima = el;
    });
  }
  P.colocarFiguras = colocarFiguras;

  /* ---------------- progresso ---------------- */
  function progressoKey(aid) {
    const s = sess.get(); if (!s) return null;
    if (s.alunoIds && s.alunoIds.length) return KEY + aid + ":" + s.turma + ":id:" + s.alunoIds.join("+");
    return KEY + aid + ":" + s.turma + ":" + norm(s.nomes.join("+")).replace(/ /g, "_");
  }
  /* 🗺️ trilha da missão (barra da esquerda): bolinhas numeradas que ficam verdes e barra de ⚡ XP; atualiza na hora */
  let trilhaAtual = null;
  function paginaFeita(p, mid, prog) {
    return p.tipo === "relatorio" ? false : p.tipo === "leitura" ? !!(prog.visitas || {})[mid + "/" + p.id] : (p.atividades || []).filter(x => !x.opcional && !((P.tipos || {})[x.tipo] || {}).semStatus).every(x => prog.atv[x.id] && prog.atv[x.id].status);
  }
  function atualizarTrilha(aid) {
    if (!trilhaAtual || trilhaAtual.aid !== aid) return;
    const mid = trilhaAtual.mid, box = document.getElementById("mn-xp"); if (!box) return;
    const prog = getProg(aid); let pages = []; try { pages = montarMissao(aid, mid).pages; } catch (e) {}
    pages.forEach(p => { const li = document.querySelector(`.mn-trilha li[data-pg="${p.id}"]`); if (!li) return; const ok = paginaFeita(p, mid, prog);
      if (ok && !li.classList.contains("ok")) { li.classList.add("ok", "acabou"); const a = li.querySelector("a"); if (a && !a.querySelector(".feito")) a.insertAdjacentHTML("beforeend", ' <span class="feito" title="feito">✔</span>'); } });
    const xp = pontosDaMissao(aid, mid, prog.atv), cheio = xp >= 1000, antes = +box.dataset.xp || 0;
    box.dataset.xp = xp; box.classList.toggle("cheio", cheio);
    box.innerHTML = `<div class="xp-cab"><span>⚡ XP da missão</span><b>${cheio ? "🏆 COMPLETA!" : `${xp} / 1000`}</b></div><div class="xp-trilho"><i style="width:${Math.max(xp ? 3 : 0, xp / 10)}%"></i></div>`;
    if (xp > antes && antes) { box.classList.remove("subiu"); void box.offsetWidth; box.classList.add("subiu"); }
  }
  function getProg(aid) { const k = progressoKey(aid); return (k && store.get(k, null)) || { visitas: {}, atv: {}, atualizado: 0 }; }
  // ⭐ pontos da brincadeira da aula (mesma conta do placar, sem o bônus de rapidez, que entra no total do placar)
  function pontosDaMissao(aid, mid, atv) { try { return P.podio ? P.podio.xpDoc(aid, mid, atv || {}) : 0; } catch (e) { return 0; } }
  function conferirPontos(aid, antes, depois) {
    const s = sess.get(), C = P.conteudo[aid]; if (!s || !s.nuvem || !C || !P.podio) return;
    if (JSON.stringify(antes.atv || {}) === JSON.stringify(depois.atv || {})) return;
    let ganho = 0; C.missoes.forEach(m => { const d = pontosDaMissao(aid, m.id, depois.atv) - pontosDaMissao(aid, m.id, antes.atv); if (d > 0) ganho += d; });
    if (ganho > 0) bolhaPontos(ganho);
    setTimeout(() => atualizarTrilha(aid), 0);
  }
  function setProg(aid, p, daNuvem) {
    const k = progressoKey(aid); if (!k) return;
    if (!daNuvem) try { conferirPontos(aid, getProg(aid), p); } catch (e) {}
    p.atualizado = Date.now();
    if (!store.set(k, p)) toast("Não foi possível guardar o progresso neste navegador.");
    if (!daNuvem && P.nuvem && P.nuvem.pronto) P.nuvem.agendar(aid);
  }
  P.getProg = getProg; P.setProg = setProg;

  /* ---------------- estrutura da missão ---------------- */
  // palavras novas da missão (termos do "O que significa?"), para conferir o "Pense e escreva" sozinho
  const PARADAS = new Set(["sobre", "entre", "quando", "porque", "outro", "outra", "dados", "forma", "parte", "cada", "como", "mais", "para", "pelo", "pela", "não", "nao"]);
  function palavrasDaMissao(m) {
    const r = new Set();
    (m.termos || []).forEach(t => {
      const termo = String(t.termo || "").replace(/\(.*?\)/g, " ").replace(/<[^>]+>/g, " ").trim();
      if (termo.length >= 3 && !PARADAS.has(termo.toLowerCase())) r.add(termo);
      termo.split(/[\s\/,–-]+/).forEach(w => { if (w.length >= 5 && !PARADAS.has(w.toLowerCase())) r.add(w); });
      const sig = (String(t.termo || "").match(/\(([^)]+)\)/) || [])[1]; if (sig && sig.trim().length >= 3 && sig.length <= 12) r.add(sig.trim());
    });
    return [...r];
  }

  function montarMissao(aid, mid) {
    const C = P.conteudo[aid], A = P.atividades[aid] || {};
    const m = C.missoes.find(x => x.id === mid);
    const a = A[mid] || {};
    const pages = [];
    const ativ = (lvl, arr) => (arr || []).map((x, i) => Object.assign({ nivel: lvl }, x, { id: x.id || (mid + "-" + lvl + "-" + (i + 1)) }));
    if (m.comecar && m.comecar.length) pages.push({ id: "comecar", rotulo: "Para começar", icone: "💡", tipo: "leitura" });
    // 🎮 Mão na massa: simulação logo na abertura (todos fazem; conta no Básico)
    if (a.pratica && a.pratica.length) pages.push({ id: "pratica", rotulo: (apostila(aid) || {}).trilha ? "Praticar" : "Mão na massa", icone: "🎮", tipo: "missao", atividades: ativ("basico", a.pratica).map(x => Object.assign(x, { id: x.id.replace("-basico-", "-pratica-") })) });
    if (m.termos && m.termos.length) pages.push({ id: "termos", rotulo: "O que significa?", icone: "📖", tipo: "leitura",
      atividades: [{ id: mid + "-termos", nivel: "treino", tipo: "ligar", titulo: "Treino rápido: ligue cada termo ao seu significado",
        porRodada: (apostila(aid) || {}).trilha ? 3 : 5, pares: m.termos.map(t => ({ a: t.termo, b: t.def })), explicacao: "Revise os termos sempre que precisar: eles caem na avaliação." }] });
    if (m.ondeUso && m.ondeUso.itens.length) pages.push({ id: "onde", rotulo: "Onde eu uso isso?", icone: "🌎", tipo: "leitura",
      atividades: m.ondeUso.reflexao ? [{ id: mid + "-onde", nivel: "treino", tipo: "aberta", titulo: "Pense e escreva", enunciado: m.ondeUso.reflexao,
        criterios: ["Conta uma situação real do seu dia a dia.", "Usa pelo menos uma palavra nova da missão."], opcional: true,
        // correção automática (combinado de 08/11): tamanho mínimo + pelo menos uma palavra nova da missão; o professor lê no painel
        conferir: palavrasDaMissao(m).length ? { minPalavras: 8, minGrupos: 1,
          grupos: [{ alts: palavrasDaMissao(m), dica: "pelo menos uma palavra nova da missão (veja em 📖 O que significa?, por exemplo “" + (m.termos && m.termos[0] ? m.termos[0].termo : "") + "”)" }],
          msg: "Resposta conferida! Você contou uma situação com as palavras da missão. O professor pode ler a sua resposta no painel." } : { minPalavras: 8 } }] : [] });
    const lv = [["basico", "Missão — Básico", "🟢"], ["desafio", "Desafio", "🟡"], ["turbo", "Turbo", "🔴"]];
    lv.forEach(([k, r, i]) => { const arr = ativ(k, a[k]); if (arr.length) pages.push({ id: k, rotulo: r, icone: i, tipo: "missao", atividades: arr }); });
    if (m.vf && m.vf.length && a.vf) pages.push({ id: "vf", rotulo: "Perguntas rápidas", icone: "✅", tipo: "revisao",
      atividades: [{ id: mid + "-vf", nivel: "revisao", tipo: "vf", titulo: "Verdadeiro ou falso — e corrija as falsas",
        itens: m.vf.map((t, i) => Object.assign({ t }, a.vf[i] || {})) }] });
    if (m.autoavaliacao && m.autoavaliacao.length) pages.push({ id: "auto", rotulo: "Autoavaliação", icone: "📋", tipo: "revisao",
      atividades: [{ id: mid + "-auto", nivel: "revisao", tipo: "autoavaliacao", titulo: "Marque o que você já consegue fazer sozinho", itens: m.autoavaliacao }] });
    if (m.resumo) pages.push({ id: "resumo", rotulo: mid === "pf" ? "Resumo do bimestre" : "Resumo da Aula", icone: "🧠", tipo: "revisao",
      atividades: [/\*\*/.test(m.resumo.texto)
        ? { id: mid + "-resumo", nivel: "revisao", tipo: "completar", titulo: "Complete o resumo com as palavras do banco", texto: m.resumo.texto, chaves: m.resumo.chaves }
        : { id: mid + "-resumo", tipo: "info", titulo: "Leia com a turma", html: `<p>${md(m.resumo.texto)}</p>${m.resumo.chaves.length ? `<p class="chaves"><strong>Palavras-chave:</strong> ${m.resumo.chaves.map(esc).join(" · ")}</p>` : ""}` }] });
    pages.push({ id: "relatorio", rotulo: "Resumo do que fiz", icone: "📋", tipo: "relatorio" });
    return { C, m, a, pages };
  }
  P.montarMissao = montarMissao;

  function statusMissao(aid, mid) {
    const { pages } = montarMissao(aid, mid);
    const prog = getProg(aid);
    const res = { leitura: [0, 0], basico: [0, 0], desafio: [0, 0], turbo: [0, 0], revisao: [0, 0] };
    pages.forEach(pg => {
      if (pg.tipo === "leitura") { res.leitura[1]++; if (prog.visitas[mid + "/" + pg.id]) res.leitura[0]++; }
      (pg.atividades || []).forEach(at => {
        const k = ["basico", "desafio", "turbo"].includes(at.nivel) ? at.nivel : at.nivel === "revisao" ? "revisao" : null;
        if (!k || at.opcional || (P.tipos[at.tipo] || {}).semStatus) return;
        res[k][1]++; const s = prog.atv[at.id]; if (s && s.status) res[k][0]++;
      });
    });
    return res;
  }
  P.statusMissao = statusMissao;

  /* ---------------- barra superior (visível no Veyon) ---------------- */
  function barra(info) {
    const s = sess.get();
    const el = document.getElementById("topbar");
    const marca = `<span class="brand-txt">💻 ${esc(cat().portal)}</span><span class="brand-prof">${esc(cat().professor)}</span>`;
    if (!s) { el.innerHTML = `<a class="brand" href="#/">${marca}</a><a class="tb-home" href="https://professorwell.com.br/">🏠 Página inicial</a><a class="tb-home tb-painel" href="#/painel" title="Painel do professor (só abre com a conta Google de professor)">📊 <span class="tb-longo">Painel do professor</span><span class="tb-curto">Painel</span></a>`; return; }
    const t = turma(s.turma);
    const apel = (s.apelidos || []).filter(Boolean);
    el.innerHTML = `<a class="brand" href="#/apostilas">${marca}</a>
      ${P.avatar && s.nuvem ? `<button type="button" class="tb-av" id="tb-av" title="Ver o meu avatar de perto" aria-label="Ver o meu avatar de perto">${(s.alunoIds || []).map((_, i) => P.avatar.svg((s.avatares || [])[i], 46, true)).join("")}</button>` : ""}
      <div class="tb-who" aria-label="Quem está usando"><span class="tb-turma">${esc(t ? t.nome : "")}</span><strong class="tb-nome">${esc(quem(s))}</strong>${apel.length ? `<span class="tb-completo">${esc(s.nomes.join(" & "))}</span>` : ""}</div>
      <div class="tb-rei" id="tb-rei" hidden></div>
      <div class="tb-info"${info ? "" : " hidden"}>${info || ""}</div>
      <div class="tb-relogio" id="tb-relogio" hidden aria-live="off"></div>
      <button class="tb-btn" id="tb-sair" type="button">Sair</button>`;
    document.getElementById("tb-sair").onclick = () => sair();
    const tbAv = document.getElementById("tb-av"); if (tbAv) tbAv.onclick = () => verAvatar();
    relogioAula(); aplicarCoroa();
    if (P.avatar && s.nuvem && !(s.avatares && s.avatares.length)) P.avatar.daSessao(s, () => barra(info));
  }
  /* ⏱️ cronômetro da aula: durante a aula da turma, mostra quanto falta para o fim (contagem regressiva) e o horário final;
     nos últimos 10 minutos fica vermelho e nos últimos 5 pisca. Horário de Curionópolis (UTC−3). */
  let relogioIv = null, podioUnsub = null, podioTurma = null, podioVisto = 0;
  // 🏁 quando o professor finaliza a aula, aparece para o aluno a posição dele no pódio
  function ouvirPodio(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || podioTurma === s.turma) return;
    if (podioUnsub) podioUnsub(); podioTurma = s.turma;
    try { podioUnsub = P.nuvem.app(0).db.collection("config").doc("podio_" + s.turma).onSnapshot(sn => {
      const d = sn.exists ? sn.data() : null; if (!d || d.dia !== P.nuvem.hoje() || d.finalizadaEm === podioVisto) return;
      const ss = sess.get(); if (!ss || ss.turma !== s.turma) return;
      podioVisto = d.finalizadaEm;
      const meu = (d.ranking || []).find(e => (e.ids || []).some(id => (ss.alunoIds || []).includes(id)));
      const med = meu && meu.pos <= 3 ? ["🥇", "🥈", "🥉"][meu.pos - 1] : "🏁";
      const dlg = h(`<dialog class="pp-dlg fim-aula"><h2>${med} Aula encerrada!</h2>
        ${meu ? `<p class="fa-pos">Você${meu.ids.length > 1 ? "s" : ""} ficou${meu.ids.length > 1 ? "aram" : ""} em <b>${meu.pos}º lugar</b>, com <b>${meu.pontos} pontos</b>${meu.pos <= 3 ? " 🎉" : "!"}</p>` : `<p>O professor finalizou a aula.</p>`}
        <p>Veja o pódio no projetor! 🏆</p><p class="ajuda">Os pontos do pódio são só da brincadeira da aula: não são a sua nota. Quem fez o Básico pode ir para os jogos livres.</p>
        <form method="dialog"><button class="btn">OK</button></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
      // 🎉 confete na tela de todos quando a aula termina
      if (P.podio) { const cf = h(`<div class="conf-tela" aria-hidden="true"></div>`); dlg.appendChild(cf); P.podio.confete(cf, 0); setTimeout(() => cf.remove(), 7000); }
    }, () => {}); } catch (e) {}
  }
  // 👑 rei da sala: o painel do professor grava quem está em 1º lugar (config/rei_<turma>); quem é ganha a coroinha na barra de cima
  let reiUnsub = null, reiTurma = null, reiEu = null, minhaPos = null, esperaPos = 0, bolha = null, bolhaTo = null;
  // ⭐ bolha que aparece e some: "+N pontos" na hora; a posição chega logo depois (o painel do professor recalcula o placar)
  function posTxt(mp) { return mp.congelado ? `🤫 Placar congelado: a sua posição aparece no pódio!` : `${mp.dupla ? "Vocês estão" : "Você está"} em <b>${mp.pos}º lugar</b> de ${mp.total} · ${mp.pontos} pts`; }
  function bolhaPontos(ganho) {
    esperaPos = Date.now() + 15000;
    if (!bolha || !bolha.isConnected) { bolha = h(`<div class="pts-bolha" role="status"><b class="pts-mais"></b><span class="pts-pos"></span></div>`); document.body.appendChild(bolha); }
    bolha.classList.remove("sai"); bolha.classList.remove("pula"); void bolha.offsetWidth; bolha.classList.add("pula");
    bolha.querySelector(".pts-mais").textContent = `+${ganho} XP!`;
    const pos = bolha.querySelector(".pts-pos"); pos.innerHTML = minhaPos ? posTxt(minhaPos) : ""; pos.hidden = !minhaPos;
    segura(4500);
  }
  function segura(ms) { clearTimeout(bolhaTo); bolhaTo = setTimeout(() => { if (bolha) { bolha.classList.add("sai"); setTimeout(() => { if (bolha && bolha.classList.contains("sai")) { bolha.remove(); bolha = null; } }, 700); } }, ms); }
  function novaPos(mp) {
    const antes = minhaPos; minhaPos = mp;
    if (!mp || Date.now() > esperaPos) return;
    if (antes && !mp.congelado && !antes.congelado && antes.pos === mp.pos && antes.pontos === mp.pontos) return;
    if (!bolha || !bolha.isConnected) { bolha = h(`<div class="pts-bolha" role="status"><b class="pts-mais"></b><span class="pts-pos"></span></div>`); document.body.appendChild(bolha); bolha.querySelector(".pts-mais").hidden = true; }
    bolha.classList.remove("sai"); const pos = bolha.querySelector(".pts-pos"); pos.hidden = false;
    const subiu = antes && !antes.congelado && !mp.congelado && mp.pos < antes.pos;
    pos.innerHTML = (subiu ? "⬆️ Subiu! " : "") + posTxt(mp); pos.classList.remove("pisca1"); void pos.offsetWidth; pos.classList.add("pisca1");
    segura(4000);
  }
  /* 🔍 tocar no avatar da barra de cima: abre o avatar grande (corpo inteiro); ✖ ou "Voltar" fecha */
  function verAvatar() {
    const s = sess.get(); if (!s || !P.avatar) return;
    const d = document.createElement("dialog"); d.className = "pp-dlg av-zoom";
    d.innerHTML = `<form method="dialog"><button class="av-zoom-x" value="x" aria-label="Fechar">✖</button>
      <div class="av-zoom-lista">${(s.alunoIds || []).map((_, i) => `<figure>${P.avatar.svg((s.avatares || [])[i], 210)}<figcaption>${esc(s.nomes[i])}</figcaption></figure>`).join("")}</div>
      <div class="row-btns"><button class="btn btn-ok" value="x">↩️ Voltar</button></div></form>`;
    document.body.appendChild(d); d.addEventListener("close", () => d.remove());
    d.addEventListener("click", e => { if (e.target === d) d.close(); }); // tocar fora também fecha
    d.showModal();
  }
  function aplicarCoroa() {
    const av = document.querySelector("#topbar .tb-av"), chip = document.getElementById("tb-rei");
    if (av) { av.classList.toggle("rei", !!reiEu); const c = av.querySelector(".coroa"); if (reiEu && !c && P.podio) av.insertAdjacentHTML("afterbegin", P.podio.coroa(26)); if (!reiEu && c) c.remove(); }
    if (chip) { chip.hidden = !reiEu; chip.innerHTML = reiEu ? `👑 ${reiEu}<small>1º lugar</small>` : ""; }
  }
  function aviso(html, cls) { const b = h(`<div class="rei-aviso ${cls || ""}" role="status">${html}</div>`); document.body.appendChild(b); setTimeout(() => b.classList.add("sai"), 5200); setTimeout(() => b.remove(), 6000); }
  function ouvirRei(s) {
    if (!s || !s.nuvem || !P.nuvem || !P.nuvem.app || reiTurma === s.turma) return;
    if (reiUnsub) reiUnsub(); reiTurma = s.turma; reiEu = null;
    try { reiUnsub = P.nuvem.app(0).db.collection("config").doc("rei_" + s.turma).onSnapshot(sn => {
      const d = sn.exists ? sn.data() : null, ss = sess.get(); if (!ss || ss.turma !== s.turma) return;
      const g = d && d.dia === P.nuvem.hoje() ? (d.grupos || []).find(x => (x.ids || []).some(id => (ss.alunoIds || []).includes(id))) : null;
      if (d && d.dia === P.nuvem.hoje()) { const meu = (d.lista || []).find(x => (x.ids || []).some(id => (ss.alunoIds || []).includes(id)));
        novaPos(d.congelado ? { congelado: true } : meu ? { pos: meu.pos, pontos: meu.pontos, total: d.total || (d.lista || []).length, dupla: (ss.alunoIds || []).length > 1 } : null); }
      if (d && d.congelado) return; // placar congelado: a coroa fica com quem estava na frente
      const novo = g ? (g.titulo || "Rei da sala") : null, antes = reiEu; reiEu = novo; aplicarCoroa();
      const voce = (ss.alunoIds || []).length > 1 ? "Vocês são" : "Você é";
      if (novo && !antes) aviso(`${P.podio ? P.podio.coroa(54) : "👑"}<div><b>${voce} ${novo.replace(/^(Reis?|Rainhas?)/, m => (/s$/.test(m) ? "os " : /Rainha/.test(m) ? "a " : "o ") + m.toLowerCase())}!</b><span>${(ss.alunoIds || []).length > 1 ? "Vocês estão" : "Você está"} em 1º lugar. Continue acertando para não perder a coroa!</span></div>`, "ganhou");
      else if (!novo && antes) aviso(`<span class="rei-ic">😮</span><div><b>Alguém passou na sua frente!</b><span>Responda certo e rápido para pegar a coroa de volta 👑</span></div>`, "perdeu");
    }, () => {}); } catch (e) {}
  }
  function relogioAula() {
    try { ouvirPodio(sess.get()); } catch (e) {}
    try { ouvirRei(sess.get()); } catch (e) {}
    clearInterval(relogioIv);
    const tick = () => {
      const el = document.getElementById("tb-relogio"); if (!el) return clearInterval(relogioIv);
      const s = sess.get(), t = s && turma(s.turma), a = t && t.aula;
      if (!a || !a.ini) { el.hidden = true; return; }
      const d = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000);
      const [hh, mm] = a.ini.split(":").map(Number), ini = hh * 3600 + mm * 60, fim = ini + (cat().duracaoAula || 75) * 60, agora = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
      if (d.getDay() !== a.dia || agora < ini || agora >= fim) { el.hidden = true; return; }
      const r = fim - agora, mi = Math.floor(r / 60), se = r % 60, hf = `${Math.floor(fim / 3600)}h${String(Math.floor(fim % 3600 / 60)).padStart(2, "0")}`;
      el.hidden = false;
      el.className = "tb-relogio" + (r <= 300 ? " fim pisca" : r <= 600 ? " fim" : "");
      el.innerHTML = `<span class="tb-rel-ic">⏱️</span><span class="tb-rel-t">${mi}:${String(se).padStart(2, "0")}</span><span class="tb-rel-txt">para acabar a aula<br><small>termina às ${hf}</small></span>`;
      el.title = `A aula termina às ${hf}`;
    };
    tick(); relogioIv = setInterval(tick, 1000);
  }
  // nome curto para mostrar: apelido (se tiver) ou o primeiro nome
  function curto(s, i) { return (s.apelidos && s.apelidos[i]) || s.nomes[i].split(" ")[0]; }
  function quem(s) { return s.nomes.map((n, i) => (s.apelidos && s.apelidos[i]) ? s.apelidos[i] : n).join(" & "); }
  P.curto = curto; P.quem = quem;
  /* 💬 caixas de mensagem DENTRO da página, no lugar de alert(), confirm() e prompt() do navegador:
     as do navegador podem ser bloqueadas (aí o botão parece não funcionar) e congelam a página inteira (cronômetros param) */
  function caixa(msg, { botoes, campo, valor }) {
    return new Promise(res => {
      const d = document.createElement("dialog"); d.className = "pp-dlg pp-caixa";
      d.innerHTML = `<form method="dialog"><p class="pp-caixa-msg">${esc(msg)}</p>${campo ? `<textarea class="pp-caixa-campo" rows="${String(valor || "").length > 60 || campo === "longo" ? 4 : 1}">${esc(valor == null ? "" : valor)}</textarea>` : ""}
        <div class="row-btns">${botoes.map(([v, r, cls]) => `<button class="btn ${cls || ""}" value="${v}">${esc(r)}</button>`).join(" ")}</div></form>`;
      document.body.appendChild(d);
      const t = d.querySelector("textarea");
      if (t) t.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && campo !== "longo") { e.preventDefault(); d.close("ok"); } });
      d.addEventListener("close", () => { const v = d.returnValue; res(campo ? (v === "ok" ? t.value : null) : v === "sim" || v === "ok"); d.remove(); });
      d.showModal(); if (t) { t.focus(); t.select(); }
    });
  }
  const confirmar = (msg, sim, nao) => caixa(msg, { botoes: [["sim", sim || "Sim", "btn-ok"], ["nao", nao || "Não, voltar"]] });
  P.confirmar = confirmar;
  P.aviso = msg => caixa(msg, { botoes: [["ok", "OK", "btn-ok"]] }).then(() => undefined);
  P.perguntar = (msg, valor, longo) => caixa(msg, { botoes: [["ok", "OK", "btn-ok"], ["nao", "Cancelar"]], campo: longo ? "longo" : "curto", valor });
  async function sair() {
    const s = sess.get();
    if (!(await confirmar(s && s.nuvem ? "Sair do portal? O que você fez já está guardado no painel do professor." : "Sair do portal? Seu progresso fica guardado neste navegador (veja “Privacidade e progresso”).", "Sim, sair"))) return;
    if (s && s.nuvem) { try { await Promise.all(cat().apostilas.map(a => P.nuvem.enviar(a.id).catch(() => null))); } catch (e) {} await P.nuvem.sair(); }
    sess.del(); location.hash = "#/";
  }

  function rodape() {
    document.getElementById("rodape").innerHTML = `<a href="https://professorwell.com.br/">🏠 Página inicial</a> · <strong>${esc(cat().portal)}</strong> · <strong>${esc(cat().professor)}</strong> · <span>${esc(cat().escola)} — ${esc(cat().cidade)}</span> ·
      <a href="#/sobre">Privacidade e progresso</a> · <a href="#/professor">Área do professor</a> · <a href="#/painel">Painel do professor</a>`;
  }

  function modoTrilha(a) { const on = !!(a && a.trilha); document.body.classList.toggle("modo-trilha", on); document.documentElement.classList.toggle("trilha", on); }

  function mount(html) { const a = $app(); a.innerHTML = ""; const el = typeof html === "string" ? h(html) : html; a.appendChild(el); window.scrollTo(0, 0); const f = el.querySelector("h1"); if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); } return el; }

  /* ============================================================
     TELAS
     ============================================================ */

  /* -------- início -------- */
  function telaInicio() {
    barra();
    const el = mount(`<section class="tela">
      <header class="hero">
        <p class="hero-escola">${esc(cat().escola)} · ${esc(cat().cidade)}</p>
        <h1>${esc(cat().portal)}</h1>
        <p class="hero-prof">${esc(cat().professor)}</p>
        <p class="hero-tag">Apostilas digitais interativas</p>
        <p class="hero-sub">Leia, pratique e descubra onde você usa cada conteúdo. Escolha a sua série para começar.</p>
      </header>
      <h2 class="sec-tit">Qual é a sua série?</h2>
      <div class="grid-cards">${cat().series.map(s => `<a class="card-serie" href="#/serie/${s.id}" style="--cor:${s.cor}">
        <span class="cs-num">${esc(s.nome.split(" ")[0])}</span><span class="cs-nome">${esc(s.nome)}</span>
        <span class="cs-turmas">${s.nota ? esc(s.nota) : s.turmas.map(t => esc(t.nome)).join(" · ")}</span></a>`).join("")}</div>
    </section>`);
    return el;
  }

  /* -------- escolha da turma + identificação -------- */
  function telaSerie(sid, destino) {
    if (P.nuvem && P.nuvem.pronto && !P.modoAntigo) return telaCodigo(sid, destino);
    return telaSerieAntiga(sid, destino);
  }
  P.telaSerieAntiga = (sid, destino) => { P.modoAntigo = true; return telaSerieAntiga(sid, destino); };

  /* -------- entrada com código (turma → código → "Você é…?") -------- */
  function telaCodigo(sid, destino) {
    const s = serie(sid); if (!s) return telaInicio();
    barra();
    const el = mount(`<section class="tela" style="--cor:${s.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(s.nome)}</nav>
      <h1>${esc(s.nome)} — entrar no portal</h1>
      <form class="painel form-id" id="fcod" novalidate>
        <fieldset><legend>1. Turma</legend>
          <div class="opcoes-turma">${s.turmas.map(t => `<label class="opt-turma"><input type="radio" name="turma" value="${t.id}" ${s.turmas.length === 1 ? "checked" : ""}><span>${esc(t.nome)}</span></label>`).join("")}</div>
        </fieldset>
        <fieldset><legend>2. Vai fazer sozinho ou em dupla?</legend>
          <div class="opcoes-turma">
            <label class="opt-turma"><input type="radio" name="modo" value="individual" checked><span>👤 Sozinho</span></label>
            <label class="opt-turma"><input type="radio" name="modo" value="dupla"><span>👥 Em dupla <small>(no mesmo computador)</small></span></label>
          </div>
          <p class="aviso-dupla">👥 <strong>Em dupla = os dois no MESMO computador</strong>, lado a lado. O portal mostra de quem é a vez: um faz e o outro ajuda. Não é como jogar Roblox junto, cada um no seu computador: aqui a dupla divide <strong>um computador só</strong>.</p>
        </fieldset>
        <fieldset><legend>3. Seu código</legend>
          <div class="pessoa"><label class="campo"><span>Seu código de 4 números</span><input id="c1" class="in-codigo" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="0000" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a1" maxlength="20" autocomplete="off" placeholder="Ex.: Aninha"></label></div>
          <div class="pessoa" id="p2" hidden><p class="pessoa-tit">Colega da dupla</p>
            <label class="campo"><span>Código do colega</span><input id="c2" class="in-codigo" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="0000"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a2" maxlength="20" autocomplete="off" placeholder="Ex.: Pedrão"></label></div>
          <p class="ajuda">O código está no seu cartãozinho. Esqueceu? Peça ao professor. Não mostre o seu código para os colegas.</p>
        </fieldset>
        <p class="erro" id="ferro" role="alert" hidden></p>
        <button class="btn btn-grande" type="submit" id="bcont">Continuar ➜</button>
      </form>
      <div id="confirma"></div>
    </section>`);
    const form = el.querySelector("#fcod"), fe = el.querySelector("#ferro"), bc = el.querySelector("#bcont");
    const p2 = el.querySelector("#p2");
    el.querySelectorAll('input[name="modo"]').forEach(r => r.onchange = () => { p2.hidden = el.querySelector('input[name="modo"]:checked').value !== "dupla"; });
    el.querySelectorAll(".in-codigo").forEach(i => i.oninput = () => { i.value = i.value.replace(/\D/g, "").slice(0, 4); });
    const erro = m => { fe.innerHTML = m; fe.hidden = !m; };
    let falhas = 0, bloqueadoAte = 0;
    form.onsubmit = async e => {
      e.preventDefault(); erro("");
      if (Date.now() < bloqueadoAte) return erro("Muitas tentativas erradas. Espere alguns segundos e chame o professor.");
      const t = el.querySelector('input[name="turma"]:checked');
      const modo = el.querySelector('input[name="modo"]:checked').value;
      const cods = [el.querySelector("#c1").value.trim()].concat(modo === "dupla" ? [el.querySelector("#c2").value.trim()] : []);
      const apels = [el.querySelector("#a1").value, el.querySelector("#a2").value].map(a => a.trim().replace(/\s+/g, " "));
      if (!t) return erro("Escolha a turma.");
      if (cods.some(c => !/^\d{4}$/.test(c))) return erro(modo === "dupla" ? "Digite os dois códigos, com 4 números cada." : "Digite o seu código de 4 números.");
      if (modo === "dupla" && cods[0] === cods[1]) return erro("Os dois códigos estão iguais. Cada um digita o seu.");
      if (apels.some(a => a && !/^[\p{L}\p{N}' ._-]{1,20}$/u.test(a))) return erro("O apelido pode ter só letras, números e espaços (até 20).");
      bc.disabled = true; bc.textContent = "Conferindo…";
      let infos;
      try { infos = await Promise.all(cods.map((c, i) => P.nuvem.conferirCodigo(i, t.value, c))); }
      catch (err) {
        console.warn(err); bc.disabled = false; bc.textContent = "Continuar ➜";
        return erro(`Não foi possível conferir o código agora (sem internet?). <a href="#" id="antigo">Entrar sem código, só neste computador</a>.`);
      } finally { bc.disabled = false; bc.textContent = "Continuar ➜"; }
      const ruins = infos.map((x, i) => x ? null : i).filter(x => x !== null);
      if (ruins.length) {
        falhas++; if (falhas >= 5) { bloqueadoAte = Date.now() + 30000; falhas = 0; }
        return erro(ruins.length === 2 ? "Os dois códigos não foram encontrados nesta turma." : modo === "dupla" ? `O código ${ruins[0] === 0 ? "do primeiro aluno" : "do colega"} não foi encontrado nesta turma.` : "Código não encontrado nesta turma. Confira a turma e o número, ou chame o professor.");
      }
      form.hidden = true;
      const cf = el.querySelector("#confirma");
      cf.innerHTML = `<div class="painel confirma-quem">
        <h2>${infos.length > 1 ? "Vocês são…" : "Você é…"}</h2>
        <ul class="quem-lista">${infos.map(x => `<li>👤 <strong>${esc(x.nome)}</strong></li>`).join("")}</ul>
        <p class="ajuda">Turma ${esc((turma(t.value) || {}).nome || t.value)}</p>
        <div class="row-btns"><button class="btn btn-grande" type="button" id="sim">✔ Sim, ${infos.length > 1 ? "somos nós" : "sou eu"}</button>
          <button class="btn btn-sec" type="button" id="nao">✖ Não, voltar</button></div></div>`;
      cf.querySelector("#nao").onclick = () => { cf.innerHTML = ""; form.hidden = false; el.querySelector("#c1").focus(); };
      cf.querySelector("#sim").onclick = async () => {
        const b = cf.querySelector("#sim"); b.disabled = true; b.textContent = "Entrando…";
        try { await Promise.all(infos.map((x, i) => P.nuvem.confirmar(i, x, t.value))); }
        catch (err) { console.warn(err); b.disabled = false; b.textContent = "Tentar de novo"; toast("Não foi possível entrar agora. Tente de novo."); return; }
        sess.set({ serie: sid, turma: t.value, modo, nuvem: true, alunoIds: infos.map(x => x.alunoId), nomes: infos.map(x => x.nome), apelidos: infos.map((x, i) => apels[i] || ""), entrou: Date.now(),
          trilha: infos.length === 1 && !!infos[0].trilha });
        // 🧍 monta o avatar (2 min); quem não salvar entra com o avatar que já tinha ou com o uniforme da escola
        if (P.avatar) { try { const avs = await P.avatar.fluxoLogin(mount, infos.map(x => Object.assign({}, x, { turma: t.value })), 240); const ss = sess.get(); if (ss && avs && avs.length) sess.set(Object.assign({}, ss, { avatares: avs })); } catch (e) { console.warn("avatar", e); } }
        if (P.curiosidadesNoLogin) { try { await P.curiosidadesNoLogin(infos, t.value); } catch (e) { console.warn("curiosidades", e); } }
        location.hash = destino || "#/apostilas";
      };
      cf.querySelector("#sim").focus();
    };
    el.addEventListener("click", ev => { if (ev.target && ev.target.id === "antigo") { ev.preventDefault(); P.telaSerieAntiga(sid, destino); } });
  }

  function telaSerieAntiga(sid, destino) {
    const s = serie(sid); if (!s) return telaInicio();
    barra();
    const el = mount(`<section class="tela" style="--cor:${s.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(s.nome)}</nav>
      <h1>${esc(s.nome)} — quem vai usar este computador?</h1>
      <form class="painel form-id" id="fid" novalidate>
        <fieldset><legend>1. Turma</legend>
          <div class="opcoes-turma">${s.turmas.map((t, i) => `<label class="opt-turma"><input type="radio" name="turma" value="${t.id}" ${s.turmas.length === 1 ? "checked" : ""}><span>${esc(t.nome)}</span></label>`).join("")}</div>
        </fieldset>
        <fieldset><legend>2. Vai fazer sozinho ou em dupla?</legend>
          <div class="opcoes-turma">
            <label class="opt-turma"><input type="radio" name="modo" value="individual" checked><span>👤 Sozinho</span></label>
            <label class="opt-turma"><input type="radio" name="modo" value="dupla"><span>👥 Em dupla <small>(no mesmo computador)</small></span></label>
          </div>
          <p class="aviso-dupla">👥 <strong>Em dupla = os dois no MESMO computador</strong>, lado a lado. O portal mostra de quem é a vez: um faz e o outro ajuda. Não é como jogar Roblox junto, cada um no seu computador: aqui a dupla divide <strong>um computador só</strong>.</p>
        </fieldset>
        <fieldset><legend>3. Quem é você?</legend>
          <div class="pessoa"><label class="campo"><span>Nome completo <em class="obrig">(obrigatório)</em></span><input id="n1" maxlength="60" autocomplete="off" placeholder="Ex.: Ana Clara Souza" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a1" maxlength="20" autocomplete="off" placeholder="Ex.: Aninha, Hacker do 6º"></label></div>
          <div class="pessoa" id="c2" hidden><p class="pessoa-tit">Colega da dupla</p>
            <label class="campo"><span>Nome completo <em class="obrig">(obrigatório)</em></span><input id="n2" maxlength="60" autocomplete="off" placeholder="Ex.: Pedro Henrique Lima" aria-required="true"></label>
            <label class="campo"><span>Apelido <em class="opc">(opcional)</em></span><input id="a2" maxlength="20" autocomplete="off" placeholder="Ex.: Pedrão"></label></div>
          <p class="ajuda">O apelido aparece em destaque no topo da tela; o nome completo fica embaixo, para o professor registrar. Não digite telefone, endereço nem senha.</p>
        </fieldset>
        <p class="erro" id="ferro" role="alert" hidden></p>
        <button class="btn btn-grande" type="submit">Entrar ➜</button>
      </form>
    </section>`);
    const c2 = el.querySelector("#c2");
    el.querySelectorAll('input[name="modo"]').forEach(r => r.onchange = () => { c2.hidden = el.querySelector('input[name="modo"]:checked').value !== "dupla"; });
    el.querySelector("#fid").onsubmit = e => {
      e.preventDefault();
      const t = el.querySelector('input[name="turma"]:checked');
      const modo = el.querySelector('input[name="modo"]:checked').value;
      const n1 = el.querySelector("#n1").value.trim().replace(/\s+/g, " ");
      const n2 = el.querySelector("#n2").value.trim().replace(/\s+/g, " ");
      const a1 = el.querySelector("#a1").value.trim().replace(/\s+/g, " ");
      const a2 = el.querySelector("#a2").value.trim().replace(/\s+/g, " ");
      const err = [];
      const ok = n => n.length >= 5 && n.split(" ").length >= 2 && /^[\p{L}' .-]+$/u.test(n);
      const okApel = a => !a || /^[\p{L}\p{N}' ._-]{1,20}$/u.test(a);
      if (!t) err.push("Escolha a turma.");
      if (!ok(n1)) err.push("Digite o seu nome completo: nome e sobrenome (só letras).");
      if (modo === "dupla" && !ok(n2)) err.push("Digite o nome completo do colega da dupla.");
      if (!okApel(a1) || (modo === "dupla" && !okApel(a2))) err.push("O apelido pode ter só letras, números e espaços (até 20).");
      if (modo === "dupla" && ok(n1) && ok(n2) && norm(n1) === norm(n2)) err.push("Os dois nomes estão iguais.");
      const fe = el.querySelector("#ferro");
      if (err.length) { fe.innerHTML = err.map(esc).join("<br>"); fe.hidden = false; return; }
      sess.set({ serie: sid, turma: t.value, modo, nomes: modo === "dupla" ? [n1, n2] : [n1], apelidos: modo === "dupla" ? [a1, a2] : [a1], entrou: Date.now() });
      location.hash = destino || "#/apostilas";
    };
    setTimeout(() => el.querySelector("#n1").focus(), 50);
  }

  /* -------- lista de apostilas da série (por disciplina e unidade) -------- */
  function telaApostilas() {
    const s = sess.get(); if (!s) return telaInicio();
    const se = serie(s.serie);
    barra();
    const lista = cat().apostilas.filter(a => a.serie === s.serie && !a.oculta).map(a => trilhaDe(a.id) ? apostila(trilhaDe(a.id)) : a);
    const porDisc = {};
    lista.forEach(a => { (porDisc[a.disciplina] = porDisc[a.disciplina] || []).push(a); });
    const hoje = sessionStorage.getItem("portalJK:hoje");
    mount(`<section class="tela" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/">Início</a> › ${esc(se.nome)}</nav>
      <h1>Olá, ${esc(s.nomes.map((n, i) => curto(s, i)).join(" e "))}! 👋</h1>
      <p class="lead">Escolha a apostila que o professor pediu.</p>
      ${Object.keys(porDisc).map(did => { const d = disciplina(did); return `<h2 class="sec-tit">${d.icone} ${esc(d.nome)}</h2>
        <div class="grid-cards">${porDisc[did].map(a => `<a class="card-apostila" href="#/apostila/${a.id}">
          <span class="ca-un">${esc(a.unidade)}</span><strong>${esc(a.titulo)}</strong><span class="ca-modo">${esc(a.modo)}</span></a>`).join("")}</div>`; }).join("")}
      ${lista.length ? "" : `<p class="painel">Ainda não há apostilas para esta série.</p>`}
      ${hoje ? `<p class="painel destaque hoje-destaque">📌 <strong>Missão de hoje</strong>, escolhida pelo professor: <a class="btn" href="#/abrir/${esc(hoje)}">abrir agora →</a></p>` : ""}
    </section>`);
  }

  /* -------- capa da apostila -------- */
  async function telaApostila(aid) {
    const s = sess.get(); const a = apostila(aid); if (!a) return telaInicio();
    if (!s) return telaSerie(a.serie, "#/apostila/" + aid);
    await carregar(aid);
    await restaurarNuvem(aid);
    modoTrilha(a);
    const C = P.conteudo[aid]; const se = serie(a.serie);
    barra(`<span>${esc(a.titulo)}</span>`);
    const card = mm => {
      const st = statusMissao(aid, mm.id);
      const pct = st.basico[1] ? Math.round(st.basico[0] / st.basico[1] * 100) : 0;
      const ok = st.basico[1] && st.basico[0] === st.basico[1];
      const ic = (P.ilustracoes[aid] || { icones: {} }).icones[mm.id];
      return `<a class="card-missao ${ok ? "ok" : ""}" href="#/missao/${aid}/${mm.id}">
        <span class="cm-ic" aria-hidden="true">${ic ? `<span class="cm-svg">${ic}</span>` : esc(mm.icone)}</span>
        <span class="cm-tit">${esc(mm.titulo)}</span>
        <span class="cm-obj">${mm.objetivo}</span>
        <span class="cm-prog"><span class="mini-bar"><i style="width:${pct}%"></i></span>
          <span>${st.leitura[1] ? `📖 Leitura ${st.leitura[0]}/${st.leitura[1]} · ` : ""}🟢 Básico ${st.basico[0]}/${st.basico[1]}${ok ? " ✔" : ""}</span></span></a>`;
    };
    mount(`<section class="tela" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/apostilas">Apostilas</a> › ${esc(a.titulo)}</nav>
      <header class="capa"><div class="capa-txt">
        <p class="capa-esc">${esc(cat().portal)} · ${esc(cat().escola)} · ${esc(cat().cidade)}</p>
        <h1>${esc(C.titulo.replace("Apostila de ", ""))}</h1>
        <p class="capa-prof">${esc(cat().professor)}</p></div>
        ${(P.ilustracoes[aid] || {}).mascote ? `<div class="capa-masc">${P.ilustracoes[aid].mascote}</div>` : ""}
      </header>
      <div class="grid-missoes">${C.missoes.map(card).join("")}</div>
      <details class="painel como-usar"><summary>📘 Como usar esta apostila</summary>${blocos(C.comoUsar.filter(b => !(b.t === "p" && /Tudo na apostila|escreve e desenha/.test(b.h))))}
        <p><strong>No portal:</strong> faça junto com o professor a missão do dia. Quando terminar o 🟢 Básico, aparece a faixa verde <strong>“Básico concluído”</strong>: tudo fica registrado sozinho, e você escolhe entre o Desafio (nota maior) e os jogos livres.</p></details>
      <div class="row-btns"><a class="btn btn-sec" href="#/imprimir/${aid}">🖨️ Versão para imprimir</a>
        <button class="btn btn-sec" id="exp" type="button">📥 Baixar minhas respostas</button>
        <button class="btn btn-sec" id="apagar" type="button">🧹 Apagar meus dados deste computador</button></div>
    </section>`);
    document.getElementById("exp").onclick = () => exportar(aid);
    document.getElementById("apagar").onclick = async () => {
      if (!(await confirmar("Apagar todas as suas respostas desta apostila neste computador? Não dá para desfazer.", "Sim, apagar"))) return;
      store.del(progressoKey(aid)); toast("Seus dados desta apostila foram apagados deste computador."); telaApostila(aid);
    };
  }

  // traz da nuvem o que o aluno já fez (espera no máximo 4 segundos)
  async function restaurarNuvem(aid) {
    const s = sess.get(); if (!s || !s.nuvem || !P.nuvem || !P.nuvem.pronto) return;
    await Promise.race([P.nuvem.restaurar(aid).catch(e => console.warn(e)), new Promise(ok => setTimeout(ok, 4000))]);
  }

  /* -------- página de missão -------- */
  async function telaMissao(aid, mid, pid) {
    const s = sess.get(); const a = apostila(aid); if (!a) return telaInicio();
    if (!s) return telaSerie(a.serie, "#/missao/" + aid + "/" + mid);
    if (s.serie !== a.serie) { toast("Esta apostila é de outra série."); location.hash = "#/apostilas"; return; }
    await carregar(aid);
    await restaurarNuvem(aid);
    modoTrilha(a);
    const { m, pages } = montarMissao(aid, mid);
    if (!pages.length) return telaApostila(aid);
    const idx = Math.max(0, pages.findIndex(p => p.id === pid));
    const pg = pages[idx];
    const se = serie(a.serie);
    const prog = getProg(aid);
    if (pg.tipo === "leitura" && !prog.visitas[mid + "/" + pg.id]) { prog.visitas[mid + "/" + pg.id] = Date.now(); setProg(aid, prog); }
    const st = statusMissao(aid, mid);
    const info = () => { const x = statusMissao(aid, mid); return `<span class="tb-mis">${esc(m.icone)} ${esc(m.titulo.replace(/ –.*/, ""))}</span><span class="tb-prog">🟢 ${x.basico[0]}/${x.basico[1]}</span>`; };
    barra(info());
    const navItem = (p, i) => {
      const done = paginaFeita(p, mid, prog);
      return `<li class="${done ? "ok" : ""}" data-pg="${p.id}"><a href="#/missao/${aid}/${mid}/${p.id}" class="${i === idx ? "atual" : ""}" ${i === idx ? 'aria-current="page"' : ""}>
        <span aria-hidden="true">${p.icone}</span> <span class="mn-rot">${esc(p.rotulo)}</span> ${done ? '<span class="feito" title="feito">✔</span>' : ""}</a></li>`;
    };
    trilhaAtual = { aid, mid };
    const el = mount(`<section class="tela missao" style="--cor:${se.cor}">
      <nav class="migalhas"><a href="#/apostila/${aid}">${esc(a.titulo)}</a> › ${esc(m.titulo.replace(/ –.*/, ""))}</nav>
      <div class="mis-layout">
        <aside class="mis-nav" aria-label="Páginas da missão">
          <p class="mn-tit">${esc(m.icone)} ${esc(m.titulo)}</p>
          <div class="mn-xp" id="mn-xp"></div>
          <ol class="mn-trilha">${pages.map(navItem).join("")}</ol>
          <div class="mn-status" id="mn-status"></div>
        </aside>
        <article class="mis-pag">
          <header class="pag-cab"><p class="pag-mis">${esc(m.titulo)}</p><h1>${pg.icone} ${esc(pg.rotulo)}</h1>
            ${idx === 0 && m.objetivo ? `<p class="objetivo"><strong>Objetivo:</strong> ${m.objetivo}</p>` : ""}</header>
          <div id="pag-corpo"></div>
          <div id="banner-ok"></div>
          <nav class="pag-nav">${idx > 0 ? `<a class="btn btn-sec" href="#/missao/${aid}/${mid}/${pages[idx - 1].id}">← ${esc(pages[idx - 1].rotulo)}</a>` : `<a class="btn btn-sec" href="#/apostila/${aid}">← Missões</a>`}
            ${idx < pages.length - 1 ? `<a class="btn" href="#/missao/${aid}/${mid}/${pages[idx + 1].id}">${esc(pages[idx + 1].rotulo)} →</a>` : `<a class="btn" href="#/apostila/${aid}">Voltar às missões ✔</a>`}</nav>
        </article>
      </div></section>`);
    const corpo = el.querySelector("#pag-corpo");
    atualizarTrilha(aid);
    if (pg.tipo === "relatorio") { el.classList.add("pg-rel"); window.scrollTo(0, 0); }
    // Trilha: antecipa a sequência da aula (rotina previsível, sem surpresas)
    if (pg.id === "comecar" && a.trilha) corpo.appendChild(h(`<div class="painel roteiro-hoje"><strong>📋 A aula de hoje, nesta ordem:</strong><ol>${pages.filter(p => !["relatorio"].includes(p.id)).map(p => `<li>${p.icone || ""} ${esc(p.rotulo)}${p.id === pg.id ? " <em>(você está aqui)</em>" : ""}${p.id === "desafio" || p.id === "turbo" ? " <small>(se quiser, depois do Básico)</small>" : ""}</li>`).join("")}</ol></div>`));
    if (pg.id === "comecar") corpo.appendChild(h(`<div class="leitura">${blocos(m.comecar, true)}</div>`));
    if (pg.id === "termos") corpo.appendChild(h(`<div class="glossario">${m.termos.map(t => `<details class="termo"><summary>${t.rotulo}</summary><p>${t.def}</p></details>`).join("")}</div>`));
    if (pg.id === "onde") corpo.appendChild(h(`<ul class="onde-uso">${m.ondeUso.itens.map(i => `<li>${i}</li>`).join("")}</ul>`));
    if (pg.tipo === "missao" && pg.id !== "pratica" && m.alertas.length) corpo.appendChild(h(`<div class="alerta" role="note">${m.alertas.map(x => `<p>⚠️ ${x}</p>`).join("")}</div>`));
    if (pg.tipo === "missao") corpo.appendChild(h(`<p class="nivel-info nivel-${pg.id}">${{ pratica: "🎮 <strong>Mão na massa</strong>: experimente antes de estudar! Todos fazem, e conta no Básico.", basico: "🟢 <strong>Básico</strong>: todos fazem. Vale 1,0 ponto e libera os jogos livres. As respostas estão no 💡 Para começar e no 📖 O que significa?.", desafio: "🟡 <strong>Desafio</strong>: para quem terminou o Básico. Vale +0,25 e aumenta a sua nota do bimestre.", turbo: "🔴 <strong>Turbo</strong>: para quem terminou o Desafio. Vale mais +0,25 na nota do bimestre." }[pg.id]}</p>`));
    // 🔒 trava de horário: os textos ficam abertos; as tarefas só no dia e na hora da aula (ou liberadas pelo professor)
    let trava = { aberta: true };
    if ((pg.tipo === "missao" || pg.tipo === "revisao") && P.trava) { try { trava = await P.trava.estado(s, mid); } catch (e) { trava = { aberta: true }; } }
    if (!trava.aberta) corpo.appendChild(h(`<div class="painel trava-aviso" role="note"><p class="trava-tit">🔒 ${trava.fechada ? "As tarefas estão fechadas agora" : trava.so ? "Esta missão não está liberada para você hoje" : trava.hoje ? "Hoje a turma está em outra missão" : "As tarefas abrem na hora da sua aula"}</p>
      ${trava.fechada ? "<p>O professor fechou as tarefas desta turma por enquanto.</p>" : trava.so ? `<p>🔓 O professor liberou para você a <strong>${esc(String(trava.so).toUpperCase())}</strong>${trava.hoje ? ` e a missão de hoje da turma (<strong>${esc(trava.hoje.titulo || trava.hoje.mid.toUpperCase())}</strong>)` : ""}. Faça essa missão primeiro.</p><p><a class="btn" href="#/missao/${aid}/${trava.so}">Ir para a ${esc(String(trava.so).toUpperCase())} →</a>${trava.hoje ? ` <a class="btn btn-sec" href="#/missao/${aid}/${trava.hoje.mid}">Ir para a missão de hoje →</a>` : ""}</p>` : trava.hoje ? `<p>📌 A missão de hoje é a <strong>${esc(trava.hoje.titulo || trava.hoje.mid.toUpperCase())}</strong>. <a class="btn" href="#/missao/${aid}/${trava.hoje.mid}">Ir para a missão de hoje →</a></p>` : `<p>Você pode fazer as tarefas no dia e na hora da aula:</p><ul>${(trava.horarios || []).map(x => `<li><strong>${esc(x)}</strong></li>`).join("")}</ul>`}
      <p>📖 Enquanto isso, pode estudar à vontade: <a href="#/missao/${aid}/${mid}/comecar">💡 Para começar</a>, <a href="#/missao/${aid}/${mid}/termos">📖 O que significa?</a> e <a href="#/missao/${aid}/${mid}/onde">🌎 Onde eu uso isso?</a> ficam sempre abertos.</p>
      <p class="ajuda">Precisa fazer fora do horário (faltou, reposição, estuda em casa)? Peça ao professor para liberar.</p></div>`));
    else (pg.atividades || []).forEach((at, i) => corpo.appendChild(cartaoAtividade(aid, mid, at, i, () => { barra(info()); atualizarStatus(); })));
    if (pg.tipo === "relatorio") corpo.appendChild(relatorio(aid, mid, pages));
    if (pg.id !== "termos") try { ligarTermos(el, (P.conteudo[aid].missoes || []).flatMap(x => x.termos || [])); } catch (e) { console.warn("termos", e); }
    const figs = figurasDaPagina(aid, mid, pg.id, pages.map(p => p.id));
    if (figs.length) {
      const leit = corpo.querySelector(".leitura, .glossario, .onde-uso");
      if (leit && pg.id === "comecar") colocarFiguras(leit, figs, [...leit.children], "bloco");
      else if (corpo.querySelector(".atv")) colocarFiguras(corpo, figs, [...corpo.querySelectorAll(".atv")], "cartao");
      else colocarFiguras(corpo, figs, [], "bloco");
    }
    function bannerNivel(x) {
      const tem = id => pages.some(p => p.id === id);
      const fez = k => x[k][1] > 0 && x[k][0] === x[k][1];
      const ir = (id, txt, cls) => tem(id) ? `<a class="btn ${cls}" href="#/missao/${aid}/${mid}/${id}">${txt}</a>` : "";
      const resumo = `<a class="bc-link" href="#/missao/${aid}/${mid}/relatorio">📋 Ver o resumo do que fiz</a>`;
      if (fez("desafio") && (fez("turbo") || !tem("turbo")))
        return `<div class="banner-concluida" role="status"><p class="bc-tit">🏆 MISSÃO COMPLETA!</p>
          <p>Você fez o <strong>Básico</strong>, o <strong>Desafio</strong>${tem("turbo") ? " e o <strong>Turbo</strong>" : ""}. Esses pontos extras deixam a sua <strong>nota do bimestre maior</strong>.</p>
          <p>🎮 Agora é a sua vez de aproveitar os <strong>jogos livres</strong> no fim da aula. Ou, se faltou em alguma aula, faça o Básico daquela missão.</p>
          <div class="bc-bts"><a class="btn btn-sec" href="#/apostila/${aid}">📚 Ver todas as missões</a></div>${resumo}</div>`;
      if (fez("desafio"))
        return `<div class="banner-concluida" role="status"><p class="bc-tit">🟡 DESAFIO CONCLUÍDO! +0,25</p>
          <p>Falta só o <strong>Turbo</strong> para completar a missão e ganhar mais <strong>+0,25</strong> na nota do bimestre. Se preferir, você já pode ir para os <strong>jogos livres</strong>. 🎮</p>
          <div class="bc-bts">${ir("turbo", "🔴 Ir para o Turbo →", "btn-ok")}</div>${resumo}</div>`;
      return `<div class="banner-concluida" role="status"><p class="bc-tit">✅ BÁSICO CONCLUÍDO!</p>
        <p>Você terminou a parte <strong>obrigatória</strong> desta aula e garantiu <strong>1,0 ponto</strong>. Já ficou tudo <strong>registrado sozinho</strong> para o professor: não precisa chamar ninguém.</p>
        <p><strong>Agora você escolhe:</strong></p>
        <ul class="bc-opcoes"><li>🟡 <strong>Desafio</strong> (+0,25) e depois 🔴 <strong>Turbo</strong> (+0,25): quem faz todos termina o bimestre com a <strong>nota maior</strong>.</li>
        <li>🎮 <strong>Jogos livres</strong> no fim da aula: com o Básico pronto, você já tem direito.</li></ul>
        <div class="bc-bts">${ir("desafio", "🟡 Ir para o Desafio →", "btn-ok")}</div>${resumo}</div>`;
    }
    function atualizarStatus() {
      const x = statusMissao(aid, mid);
      const linha = (r, k) => x[k][1] ? `<li>${r} <strong>${x[k][0]}/${x[k][1]}</strong>${x[k][0] === x[k][1] ? " ✔" : ""}</li>` : "";
      el.querySelector("#mn-status").innerHTML = `<ul>${linha("📖 Leitura", "leitura")}${linha("🟢 Básico", "basico")}${linha("🟡 Desafio", "desafio")}${linha("🔴 Turbo", "turbo")}${linha("✅ Revisão", "revisao")}</ul>`;
      const ok = x.basico[1] && x.basico[0] === x.basico[1];
      el.querySelector("#banner-ok").innerHTML = ok && pg.tipo === "missao" ? bannerNivel(x) : "";
      const tb = document.querySelector(".tb-info"); if (tb) tb.classList.toggle("tb-ok", !!ok);
    }
    atualizarStatus();
  }

  /* ---------------- blocos de leitura ---------------- */
  function blocos(arr, enriquecer) {
    return (arr || []).map(b => {
      if (b.t === "p") return `<p>${b.h}</p>`;
      if (b.t === "lista") {
        const tag = b.ord ? "ol" : "ul";
        return `<${tag} class="lista">${b.itens.map(i => `<li style="margin-left:${i.nivel * 1.2}em">${i.h}</li>`).join("")}</${tag}>`;
      }
      if (b.t === "tabela") {
        // tabela de 3 colunas vira cartões, para leitura mais visual
        if (enriquecer && b.cab.length === 3 && b.linhas.length <= 7 && b.linhas.every(l => l.length === 3)) {
          return `<div class="cartoes-leitura">${b.linhas.map(l => `<div class="cl"><h3>${l[0]}</h3><p>${l[1]}</p><p class="cl-ex"><span>${b.cab[2]}:</span> ${l[2]}</p></div>`).join("")}</div>`;
        }
        return `<div class="tabela-wrap"><table><thead><tr>${b.cab.map(c => `<th scope="col">${c}</th>`).join("")}</tr></thead>
          <tbody>${b.linhas.map(l => `<tr>${l.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      }
      return "";
    }).join("");
  }
  P.blocos = blocos;

  /* ============================================================
     CARTÃO DE ATIVIDADE (estrutura comum)
     ============================================================ */
  const NIVEL = { basico: ["🟢", "Básico"], desafio: ["🟡", "Desafio"], turbo: ["🔴", "Turbo"], treino: ["🔁", "Treino"], revisao: ["✅", "Revisão"] };
  /* 🪟 modal simples (abre por cima da página, fecha com o botão ou com Esc) */
  function modal(titulo, html, cls) {
    const d = h(`<dialog class="pp-dlg ${cls || ""}"><form method="dialog"><h2>${titulo}</h2><div class="modal-corpo">${html}</div><div class="row-btns"><button class="btn" value="x">Fechar</button></div></form></dialog>`);
    document.body.appendChild(d); d.showModal(); d.addEventListener("close", () => d.remove());
    d.addEventListener("click", e => { if (e.target === d) d.close(); });
    return d;
  }
  // ✅ só para o professor: na 👀 visualização do professor e com o login de professor ativo neste navegador
  let profOk = null;
  function professorLogado() {
    if (profOk) return profOk;
    const N = P.nuvem; if (!N || !N.pronto || !N.app) return Promise.resolve(false);
    return profOk = (async () => { try { await N.app(0).pronto; const a = N.auth(); await new Promise(ok => { const x = a.onAuthStateChanged(() => { x(); ok(); }); });
      const u = a.currentUser; return !!(u && !u.isAnonymous && u.email === N.EMAIL_PROFESSOR); } catch (e) { return false; } })();
  }
  // 💬 explicação breve para o professor explicar à turma: o texto "prof" da atividade (quando existe) ou, senão,
  // a resolução comentada, as dicas e os termos da missão que aparecem na atividade (do "O que significa?")
  function explicacaoProf(at, termos, aid, mid) {
    const sem = x => String(x || "").replace(/<[^>]+>/g, " ");
    const partes = [], EX = ((P.explicProf || {})[aid] || {}), extra = (EX.at || {})[String(at.id || "").replace(/^.*?(?=m\d|pf)/, "")] || (EX.at || {})[at.id];
    const vfEx = ((EX.vf || {})[mid]) || [];
    if (extra && !at.prof) at = Object.assign({}, at, { prof: extra });
    if (at.prof) partes.push(`<p>${at.prof}</p>`);
    else if (at.explicacao) partes.push(`<p>${at.explicacao}</p>`);
    if (at.tipo === "vf") partes.push(`<ul class="aula-lista">${(at.itens || []).map((it, k) => `<li>${k + 1}. ${it.v ? "<strong>V</strong>" : "<strong>F</strong>"} — ${(vfEx[k] || "").replace(/^[VF]:\s*/, "") || it.prof || it.explic || (it.corrigir ? "o certo é: <strong>" + it.corrigir.certo + "</strong>" : it.v ? "está certo como está escrito" : "")}</li>`).join("")}</ul>`);
    if (at.tipo === "completar") partes.push(`<p>Leia o texto completo com a turma: <em>${String(at.texto || "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</em></p>`);
    if (at.tipo === "aberta" && !at.prof && !at.explicacao) partes.push(`<p>Não há uma única resposta. Peça 2 ou 3 exemplos em voz alta e mostre o que precisa aparecer${at.criterios ? ": " + at.criterios.map(c => sem(c)).join(" · ") : "."}${at.exemplo ? ` Exemplo de boa resposta: <strong>${at.exemplo}</strong>.` : ""}</p>`);
    if (at.tipo === "autoavaliacao") partes.push(`<p>Não tem resposta certa: é o aluno olhando para o que aprendeu. Se alguém marcar que ainda não sabe um item, mostre onde ele está na missão (Para começar ou O que significa?).</p>`);
    const porques = [].concat((at.perguntas || []).map(q => q.why && [q.p, q.why]), (at.itens || []).map(i => i && i.why && [i.t, i.why]), (at.opcoes || []).map(o => o && o.why && [o.t, o.why])).filter(Boolean);
    if (porques.length && at.tipo !== "vf") partes.push(`<p><strong>Por quê:</strong></p><ul class="aula-lista">${porques.map(([q, w]) => `<li>${sem(q)} → ${w}</li>`).join("")}</ul>`);
    const dicas = (at.dicas || []).concat(at.tipo === "tabela" ? (at.linhas || []).flatMap(l => l.filter(c => c && typeof c === "object" && c.dica).map(c => c.dica)) : []);
    if (dicas.length && !at.prof) partes.push(`<p><strong>Pistas para dar, uma de cada vez:</strong></p><ul class="aula-lista">${[...new Set(dicas)].map(d => `<li>${d}</li>`).join("")}</ul>`);
    const txt = norm(sem(JSON.stringify(at)));
    const ts = (termos || []).filter(t => { const b = norm(String(t.termo || "").replace(/\s*\(.*?\)\s*/g, " ").trim()); return b.length > 1 && new RegExp(`(^|[^a-z0-9])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(txt); }).slice(0, 4);
    if (ts.length) partes.push(`<p><strong>Termos para relembrar com a turma:</strong></p><ul class="aula-lista">${ts.map(t => `<li>${t.rotulo}: ${t.def}</li>`).join("")}</ul>`);
    return partes.join("") || `<p>Mostre na tela, junto com a turma, o primeiro item resolvido e peça que eles façam o resto.</p>`;
  }
  P.explicacaoProf = explicacaoProf;
  function botaoRespostaProf(el, at, termos, aid, mid) {
    const s = sess.get(); if (!s || !s.prof || !P.aula || !P.aula.resposta) return;
    professorLogado().then(ok => { if (!ok) return;
      const b = h(`<button type="button" class="btn btn-peq atv-resp-prof" title="Só você vê este botão">✅ Resposta</button>`);
      el.querySelector(".atv-cab").appendChild(b);
      b.onclick = () => { const x = P.aula.resposta(at);
        modal(`✅ ${md(at.titulo || "Resposta")}`, `<h3 class="modal-sub">✅ Resposta</h3>${x.html}
          <h3 class="modal-sub">💬 Como explicar para a turma</h3><div class="modal-explic">${explicacaoProf(at, termos, aid, mid)}</div>
          <p class="ajuda">${x.auto ? "✔ O portal confere sozinho." : "👀 Esta você confere."} Só você vê este botão: os alunos não têm.</p>`, "modal-resp"); };
    });
  }

  /* 📖 palavra explicada: os termos do "O que significa?" viram botõezinhos nos textos; tocou, abre o significado num modal */
  function ligarTermos(raiz, termos) {
    if (!raiz || !termos || !termos.length) return;
    const base = t => String(t.termo || "").replace(/\s*\(.*?\)\s*/g, " ").trim();
    const lista = termos.map(t => ({ t, b: base(t) })).filter(x => x.b.length > 1).sort((a, b) => b.b.length - a.b.length);
    const usados = new Set();
    const zonas = raiz.querySelectorAll(".leitura, .onde-uso, .atv-enun, .alerta, .objetivo, .atv-info .atv-corpo");
    zonas.forEach(z => {
      const walker = document.createTreeWalker(z, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest("a, button, input, textarea, select, label, .termo-link, svg, code") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nos = []; while (walker.nextNode()) nos.push(walker.currentNode);
      nos.forEach(no => {
        for (const x of lista) {
          if (usados.has(x.b)) continue;
          const esc2 = x.b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const re = new RegExp(`(^|[^\\p{L}\\p{N}])(${esc2})(?![\\p{L}\\p{N}])`, "iu");
          const m = re.exec(no.nodeValue); if (!m) continue;
          const ini = m.index + m[1].length, fim = ini + m[2].length;
          const depois = no.splitText(ini); depois.splitText(fim - ini);
          const b = document.createElement("button"); b.type = "button"; b.className = "termo-link"; b.textContent = depois.nodeValue; b.title = "Toque para ver o que significa";
          b.onclick = () => modal(`📖 ${x.t.rotulo}`, `<p class="modal-def">${x.t.def}</p><p class="ajuda">Está no “O que significa?” desta apostila.</p>`, "modal-termo");
          depois.replaceWith(b); usados.add(x.b); break;
        }
      });
    });
  }

  function cartaoAtividade(aid, mid, at, i, onChange) {
    const T = P.tipos[at.tipo];
    if (!T) return h(`<div class="atv erro">Tipo de atividade desconhecido: ${esc(at.tipo)}</div>`);
    if (T.semStatus) {
      const box = h(`<section class="atv atv-info"><header class="atv-cab"><h2>${md(at.titulo || "")}</h2></header><div class="atv-corpo"></div></section>`);
      T.render(box.querySelector(".atv-corpo"), at, {});
      return box;
    }
    const prog = getProg(aid);
    const st = prog.atv[at.id] = prog.atv[at.id] || { tentativas: 0, dicas: 0 };
    const s = sess.get();
    const auto = typeof T.auto === "function" ? T.auto(at) : T.auto;
    const corr = at.professor ? "👨‍🏫 o professor confere" : auto ? "✔ correção automática" : "👨‍🏫 o professor confere";
    const vez = s && s.modo === "dupla" && ["basico", "desafio", "turbo"].includes(at.nivel) ? `<span class="vez">🎮 Vez de: <strong>${esc(curto(s, i % 2))}</strong> (o outro ajuda)</span>` : "";
    const el = h(`<section class="atv nivel-${at.nivel}" id="atv-${at.id}" aria-labelledby="t-${at.id}">
      <header class="atv-cab"><span class="atv-nivel">${(NIVEL[at.nivel] || ["", ""])[0]} ${(NIVEL[at.nivel] || ["", ""])[1]}</span>
        <h2 id="t-${at.id}">${md(at.titulo || "")}</h2><span class="atv-corr">${corr}${at.opcional ? " · opcional" : ""}</span>${vez}</header>
      ${at.enunciado ? `<div class="atv-enun">${at.enunciado}</div>` : ""}
      <div class="atv-corpo"></div>
      <div class="atv-dicas" aria-live="polite"></div>
      <div class="atv-acoes">
        <button type="button" class="btn btn-ok" data-a="verificar">Verificar</button>
        <button type="button" class="btn btn-sec" data-a="dica" hidden>💡 Dica</button>
        <button type="button" class="btn btn-sec" data-a="resolucao" hidden>📘 Ver resolução comentada</button>
        <button type="button" class="btn btn-link" data-a="refazer" hidden>↺ Refazer</button>
        <span class="atv-status" aria-live="polite"></span>
      </div>
      <div class="atv-fb" role="status" aria-live="polite"></div>
    </section>`);
    botaoRespostaProf(el, at, ((P.conteudo[aid] || {}).missoes || []).find(x => x.id === mid)?.termos, aid, mid);
    const corpo = el.querySelector(".atv-corpo"), fb = el.querySelector(".atv-fb"), dicasEl = el.querySelector(".atv-dicas");
    const bV = el.querySelector('[data-a="verificar"]'), bD = el.querySelector('[data-a="dica"]'), bR = el.querySelector('[data-a="resolucao"]'), bRef = el.querySelector('[data-a="refazer"]');
    const statusEl = el.querySelector(".atv-status");
    const dicas = at.dicas || [];

    const salvar = () => { const p = getProg(aid); p.atv[at.id] = st; setProg(aid, p); };
    const feedback = (kind, html) => { fb.innerHTML = html ? `<div class="fb fb-${kind}">${kind === "ok" ? "✔ " : kind === "erro" ? "✖ " : ""}${html}</div>` : ""; };
    const mostrarStatus = () => {
      const m = { certo: "✔ Concluída", ajuda: "✔ Concluída com ajuda", enviado: "📝 Enviada — o professor confere", feito: "✔ Feita" }[st.status] || "";
      statusEl.textContent = m; el.classList.toggle("concluida", !!st.status);
      bRef.hidden = !st.status || at.semRefazer;
    };
    const atualizarAjuda = () => {
      bD.hidden = !dicas.length || st.dicas >= dicas.length || !!st.status;
      bD.textContent = `💡 Dica ${Math.min(st.dicas + 1, dicas.length)} de ${dicas.length}`;
      dicasEl.innerHTML = dicas.slice(0, st.dicas).map((d, k) => `<p class="dica"><strong>Dica ${k + 1}:</strong> ${d}</p>`).join("");
      const liberou = st.tentativas >= 2 || (dicas.length > 0 && st.dicas >= dicas.length);
      bR.hidden = !!st.status || !ctx.resolver || !liberou;
    };
    const ctx = {
      at, st, el, corpo, salvar, feedback,
      sessao: s,
      verificar: null, resolver: null,
      concluir(status, msg) {
        st.status = (status === "certo" && (st.dicas > 0 || st.viuResolucao)) ? "ajuda" : status;
        st.quando = Date.now(); salvar(); mostrarStatus(); atualizarAjuda();
        if (msg !== false) feedback("ok", (msg || "Muito bem!") + (at.explicacao ? `<div class="explic">${at.explicacao}</div>` : ""));
        onChange && onChange();
      },
      errou(msg) {
        st.tentativas++; salvar();
        feedback("erro", msg + (st.tentativas >= 2 && (dicas.length || ctx.resolver) ? " <br><small>Se quiser, peça uma dica ou veja a resolução comentada.</small>" : " <br><small>Sua resposta foi mantida: ajuste e tente de novo.</small>"));
        atualizarAjuda();
      },
      esconderVerificar() { bV.hidden = true; },
      mostrarVerificar() { bV.hidden = false; },
      reRender() { corpo.innerHTML = ""; T.render(corpo, at, ctx); }
    };
    bV.onclick = () => { if (ctx.verificar) ctx.verificar(); };
    bD.onclick = () => { st.dicas++; salvar(); atualizarAjuda(); };
    bR.onclick = () => { if (!ctx.resolver) return; st.viuResolucao = true; ctx.resolver(); ctx.concluir("ajuda", "Resolução comentada:"); };
    bRef.onclick = () => { for (const k of Object.keys(st)) delete st[k]; st.tentativas = 0; st.dicas = 0; salvar(); feedback("", ""); ctx.reRender(); mostrarStatus(); atualizarAjuda(); onChange && onChange(); };
    T.render(corpo, at, ctx);
    el._ctx = ctx; // usado pelos testes automatizados
    if (!ctx.verificar) bV.hidden = true;
    if (st.status) { mostrarStatus(); if (at.explicacao && st.status !== "enviado") feedback("ok", "Você já concluiu esta atividade." + `<div class="explic">${at.explicacao}</div>`); }
    atualizarAjuda();
    return el;
  }

  /* ============================================================
     RESUMO DA MISSÃO (para print e registro no diário)
     ============================================================ */
  function relatorio(aid, mid, pages) {
    const s = sess.get(), prog = getProg(aid), a = apostila(aid), t = turma(s.turma);
    const m = P.conteudo[aid].missoes.find(x => x.id === mid);
    const x = statusMissao(aid, mid);
    const tempos = [];
    Object.keys(prog.visitas).forEach(k => { if (k.startsWith(mid + "/")) tempos.push(prog.visitas[k]); });
    const linhas = [];
    pages.forEach(pg => {
      if (pg.tipo === "leitura") linhas.push(`<li class="${prog.visitas[mid + "/" + pg.id] ? "r-ok" : ""}"><span class="r-ic">📖</span><span class="r-o">Leitura: ${esc(pg.rotulo)}</span><span class="r-s">${prog.visitas[mid + "/" + pg.id] ? "✔ lida" : "⬜ não aberta"}</span></li>`);
      (pg.atividades || []).forEach(at => {
        if ((P.tipos[at.tipo] || {}).semStatus) return;
        const st = prog.atv[at.id] || {};
        if (st.quando) tempos.push(st.quando);
        const sit = { certo: "✔ sem ajuda", ajuda: "✔ com ajuda", enviado: "📝 enviada — professor confere", feito: "✔ feita" }[st.status] || (at.opcional ? "— opcional" : "⬜ não feita");
        const tit = P.util.semTags(at.titulo || "").replace(/\s+/g, " ");
        const extra = [st.tentativas ? `${st.tentativas} erro${st.tentativas > 1 ? "s" : ""}` : "", st.dicas ? `${st.dicas} dica${st.dicas > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ");
        linhas.push(`<li class="${st.status ? "r-ok" : ""}"><span class="r-ic">${(NIVEL[at.nivel] || ["", ""])[0]}</span><span class="r-o">${esc(tit.length > 58 ? tit.slice(0, 56) + "…" : tit)}</span><span class="r-s">${sit}${extra ? `<small>${extra}</small>` : ""}</span></li>`);
      });
    });
    const agora = Date.now();
    const ini = tempos.length ? Math.min(...tempos) : agora, fim = tempos.length ? Math.max(...tempos) : agora;
    const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR").slice(0, 5);
    const okB = x.basico[1] && x.basico[0] === x.basico[1];
    const base = [s.nomes.join("+"), s.turma, aid, mid, x.basico.join("/"), x.desafio.join("/"), x.turbo.join("/"), x.revisao.join("/"), new Date(fim).toDateString()].join("|");
    let hsh = 0; for (const ch of base) hsh = (hsh * 31 + ch.charCodeAt(0)) >>> 0;
    const codigo = hsh.toString(36).toUpperCase().padStart(6, "0").slice(-6);
    const nomesTxt = s.nomes.map((n, i) => esc(n) + (s.apelidos && s.apelidos[i] ? ` <span class="r-apel">“${esc(s.apelidos[i])}”</span>` : "")).join("<br>");
    const cont = (r, k) => x[k][1] ? `<div class="r-cont ${x[k][0] === x[k][1] ? "ok" : ""}"><span>${r}</span><strong>${x[k][0]}/${x[k][1]}</strong></div>` : "";
    const el = h(`<div class="rel-wrap">
      <div class="rel-instr nao-imprimir">${s.nuvem ? `<p>✅ <strong>Não precisa de print:</strong> o que você fez já vai sozinho para o painel do professor.</p>` : `<p>📸 <strong>Tire um print desta tela</strong> e envie ao professor: tecla <kbd>PrtSc</kbd> ou <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.</p>`}
        <button class="btn btn-sec btn-peq" type="button" id="rel-imp">🖨️ Imprimir</button></div>
      <section class="relatorio" id="relatorio" aria-label="Resumo da missão">
        <header class="r-cab"><div><p class="r-portal">💻 ${esc(cat().portal)}</p><p class="r-prof">${esc(cat().professor)}</p></div>
          <h2 class="r-tit">📋 Resumo da missão</h2>
          <div class="r-cod"><span>código de conferência</span><strong>${codigo}</strong></div></header>
        <div class="r-grid">
          <div><span>Aluno(s)</span><strong>${nomesTxt}</strong></div>
          <div><span>Turma</span><strong>${esc(t ? t.nome : s.turma)}</strong></div>
          <div><span>Data</span><strong>${new Date(fim).toLocaleDateString("pt-BR")}</strong></div>
          <div><span>Horário</span><strong>${hhmm(ini)} – ${hhmm(fim)}</strong></div>
          <div class="r-larga"><span>Missão</span><strong>${esc(m.icone)} ${esc(m.titulo)}</strong><small>${esc(a.titulo)}</small></div>
        </div>
        <div class="r-basico ${okB ? "ok" : "nao"}">${okB ? "✅ BÁSICO CONCLUÍDO" : `⏳ BÁSICO AINDA NÃO CONCLUÍDO (${x.basico[0]} de ${x.basico[1]})`}</div>
        <div class="r-conts">${cont("📖 Leitura", "leitura")}${cont("🟢 Básico", "basico")}${cont("🟡 Desafio", "desafio")}${cont("🔴 Turbo", "turbo")}${cont("✅ Revisão", "revisao")}</div>
        <h3 class="r-sub">O que foi feito</h3>
        <ol class="r-lista">${linhas.join("")}</ol>
        <p class="r-rod">Gerado em ${new Date(agora).toLocaleDateString("pt-BR")} às ${hhmm(agora)} · ${esc(cat().escola)} — ${esc(cat().cidade)} · ${esc(cat().professor)}</p>
      </section></div>`);
    el.querySelector("#rel-imp").onclick = () => { document.body.classList.add("so-relatorio"); window.print(); setTimeout(() => document.body.classList.remove("so-relatorio"), 500); };
    return el;
  }

  /* ============================================================
     IMPRESSÃO
     ============================================================ */
  async function telaImprimir(aid) {
    const a = apostila(aid); if (!a) return telaInicio();
    await carregar(aid);
    modoTrilha(a);
    const C = P.conteudo[aid];
    barra();
    const el = mount(`<section class="tela impressao">
      <div class="nao-imprimir painel"><p>Esta é a versão para imprimir ou salvar em PDF. Use o botão abaixo e escolha a impressora ou “Salvar como PDF”.</p>
        <div class="row-btns"><button class="btn" id="bp" type="button">🖨️ Imprimir / salvar PDF</button><a class="btn btn-sec" href="#/apostila/${aid}">← Voltar</a></div></div>
      <header class="imp-capa"><p>${esc(cat().portal)} · ${esc(cat().escola)} · ${esc(cat().cidade)}</p><h1>${esc(C.titulo)}</h1><p class="imp-prof">${esc(cat().professor)}</p>
        ${(P.ilustracoes[aid] || {}).mascote ? `<div class="imp-masc">${P.ilustracoes[aid].mascote}</div>` : ""}
        <table class="imp-id"><tr><td>Nome:</td><td class="linha"></td></tr><tr><td>Turma:</td><td class="linha"></td></tr></table></header>
      <div id="imp-corpo"></div>
      <footer class="imp-rodape">${esc(cat().portal)} · ${esc(cat().professor)} · ${esc(cat().escola)}</footer>
    </section>`);
    const corpo = el.querySelector("#imp-corpo");
    C.missoes.forEach(m => {
      const { pages } = montarMissao(aid, m.id);
      const sec = h(`<section class="imp-missao"><h2>${esc(m.icone)} ${esc(m.titulo)}</h2>${m.objetivo ? `<p><strong>Objetivo:</strong> ${m.objetivo}</p>` : ""}<p>📅 Data: ____/____</p></section>`);
      pages.forEach(pg => {
        let html = `<h3>${pg.icone} ${esc(pg.rotulo)}</h3>`;
        if (pg.id === "comecar") html += blocos(m.comecar);
        if (pg.id === "termos") html += `<dl class="imp-termos">${m.termos.map(t => `<dt>${t.rotulo}</dt><dd>${t.def}</dd>`).join("")}</dl>`;
        if (pg.id === "onde") html += `<ul>${m.ondeUso.itens.map(i => `<li>${i}</li>`).join("")}</ul>`;
        if (pg.tipo === "missao" && pg.id === "basico" && m.alertas.length) html += m.alertas.map(x => `<p class="imp-alerta">⚠️ ${x}</p>`).join("");
        (pg.atividades || []).forEach((at, k) => {
          if (at.id.endsWith("-termos")) return; // jogo digital; os termos já estão impressos acima
          const T = P.tipos[at.tipo];
          html += `<div class="imp-atv"><h4>${(NIVEL[at.nivel] || ["", ""])[0]} ${md(at.titulo || "")}</h4>${at.enunciado ? `<div>${at.enunciado}</div>` : ""}${T && T.imprimir ? T.imprimir(at) : ""}</div>`;
        });
        if (pg.tipo === "missao") html += `<p class="imp-carimbo">Carimbo do professor: ☐ ${pg.rotulo}</p>`;
        if (pg.tipo === "relatorio" || pg.id === "pratica") return; // simulação só existe na tela
        const bloco = h(`<div class="imp-pag">${html}</div>`);
        const figs = figurasDaPagina(aid, m.id, pg.id, pages.map(p => p.id));
        if (figs.length) colocarFiguras(bloco, figs, pg.tipo === "missao" ? [...bloco.querySelectorAll(".imp-atv")] : [...bloco.children].slice(1), pg.tipo === "missao" ? "depois" : "bloco");
        sec.appendChild(bloco);
      });
      corpo.appendChild(sec);
    });
    el.querySelector("#bp").onclick = () => window.print();
  }

  /* ============================================================
     EXPORTAÇÃO DAS RESPOSTAS (arquivo HTML legível)
     ============================================================ */
  async function exportar(aid) {
    await carregar(aid);
    const s = sess.get(); const C = P.conteudo[aid]; const prog = getProg(aid);
    const t = turma(s.turma);
    const linhas = [];
    C.missoes.forEach(m => {
      const { pages } = montarMissao(aid, m.id);
      const itens = [];
      pages.forEach(pg => (pg.atividades || []).forEach(at => {
        const x = prog.atv[at.id]; if (!x || (!x.status && !x.resposta)) return;
        const T = P.tipos[at.tipo];
        const resp = T && T.resumoResposta ? T.resumoResposta(at, x) : "";
        itens.push(`<tr><td>${(NIVEL[at.nivel] || ["", ""])[1]}</td><td>${md(at.titulo || "")}</td><td>${{ certo: "Concluída", ajuda: "Concluída com ajuda", enviado: "Enviada (professor confere)", feito: "Feita" }[x.status] || "Em andamento"}</td><td>${resp}</td></tr>`);
      }));
      if (itens.length) linhas.push(`<h2>${esc(m.icone)} ${esc(m.titulo)}</h2><table><tr><th>Nível</th><th>Atividade</th><th>Situação</th><th>Resposta</th></tr>${itens.join("")}</table>`);
    });
    const d = new Date();
    const doc = `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Respostas — ${esc(s.nomes.join(" & "))}</title>
      <style>body{font-family:Segoe UI,Arial,sans-serif;max-width:900px;margin:20px auto;color:#1e2235}table{border-collapse:collapse;width:100%;margin-bottom:16px}td,th{border:1px solid #bbb;padding:6px;vertical-align:top;text-align:left}th{background:#eee}h1{margin-bottom:0}</style>
      <h1>${esc(C.titulo)}</h1><p><strong>${esc(cat().portal)}</strong> · <strong>${esc(cat().professor)}</strong> · ${esc(cat().escola)} — ${esc(cat().cidade)}</p>
      <p><strong>Aluno(s):</strong> ${esc(s.nomes.map((n, i) => n + (s.apelidos && s.apelidos[i] ? ` (${s.apelidos[i]})` : "")).join(" & "))} · <strong>Turma:</strong> ${esc(t ? t.nome : s.turma)} · <strong>Gerado em:</strong> ${d.toLocaleDateString("pt-BR")} ${d.toLocaleTimeString("pt-BR").slice(0, 5)}</p>
      ${linhas.join("") || "<p>Nenhuma atividade registrada ainda.</p>"}
      <p style="color:#666;font-size:12px">Arquivo gerado pelo Portal da Informática — Professor Welington Laignier — Escola JK. As respostas abertas são avaliadas pelo professor.</p></html>`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([doc], { type: "text/html;charset=utf-8" }));
    const slug = x => norm(x).replace(/[^a-z0-9]+/g, "_");
    a.download = `respostas_${slug(aid)}_${slug(t ? t.nome : s.turma)}_${slug(s.nomes.join("_"))}.html`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 3000);
    toast("📥 Arquivo baixado (pasta Downloads).");
  }

  /* ============================================================
     ÁREA DO PROFESSOR e PRIVACIDADE
     ============================================================ */
  async function telaProfessor() {
    barra();
    await Promise.all(cat().apostilas.map(a => carregar(a.id).catch(() => null)));
    const o = cat().orientacoes;
    const base = location.href.split("#")[0];
    const el = mount(`<section class="tela">
      <nav class="migalhas"><a href="#/">Início</a> › Área do professor</nav>
      <h1>Área do professor</h1>
      <p class="lead">${esc(cat().professor)} · orientações rápidas e links da missão do dia.</p>
      <div class="painel"><h2>⏱️ Duração</h2><p>${esc(o.duracao)}</p><h2>🧰 Recursos</h2><p>${esc(o.recursos)}</p><h2>📝 Avaliação</h2><p>${esc(o.avaliacao)}</p>
        <h2>✔ Correção</h2><p>Cada atividade mostra se tem <strong>correção automática</strong> ou se <strong>o professor confere</strong> (respostas abertas e tarefas no Bloco de Notas; os cartazes agora são montados no próprio portal, sem o Paint). As respostas abertas não recebem nota automática: o portal só mostra critérios de revisão.</p>
        <h2>👀 Acompanhamento pelo Veyon</h2><p>O topo de cada tela mostra a turma, o nome do aluno (ou da dupla), a missão e o andamento do Básico. Quando o Básico termina, a barra fica verde e aparece a faixa “Básico concluído”, que explica ao aluno o que fazer depois (Desafio ou jogos livres), sem precisar chamar o professor. O Veyon só mostra as telas: ele não guarda respostas nem notas.</p></div>
      <a class="painel atalho-trilhas" href="#/trilhas"><span class="at-ic" aria-hidden="true">👣</span><span><strong>Trilhas Passo a Passo</strong><br>Missões com letra grande, um passo por vez e botão 🔊 Ouvir, para os alunos que precisam de apoio. Clique para ver os links de cada missão.</span><span class="at-seta" aria-hidden="true">→</span></a>
      <div class="painel"><h2>🔗 Link da missão do dia</h2><p>Escolha a apostila e a missão. Abra o link em todos os computadores (função “Abrir site” do Veyon): depois de se identificar, o aluno cai direto na missão.</p>
        <div class="row-btns"><select id="sa">${cat().apostilas.map(a => `<option value="${a.id}">${esc(a.titulo)}</option>`).join("")}</select>
        <select id="sm"></select></div>
        <p><input id="link" class="link-out" readonly aria-label="Link da missão do dia"></p>
        <div class="row-btns"><button class="btn" id="copiar" type="button">📋 Copiar link</button><a class="btn btn-sec" id="abrir" href="#">Testar</a></div></div>
      <div class="painel"><h2>🖨️ Versões para imprimir</h2><ul>${cat().apostilas.map(a => `<li><a href="#/imprimir/${a.id}">${esc(a.titulo)}</a></li>`).join("")}</ul></div>
    </section>`);
    const sa = el.querySelector("#sa"), sm = el.querySelector("#sm"), link = el.querySelector("#link"), ab = el.querySelector("#abrir");
    const upd = () => {
      const C = P.conteudo[sa.value];
      if (sm.dataset.ap !== sa.value) { sm.innerHTML = C ? C.missoes.map(m => `<option value="${m.id}">${esc(m.icone)} ${esc(m.titulo)}</option>`).join("") : ""; sm.dataset.ap = sa.value; }
      const hash = "#/abrir/" + sa.value + "/" + sm.value;
      link.value = base + hash; ab.href = hash;
    };
    sa.onchange = upd; sm.onchange = upd; upd();
    el.querySelector("#copiar").onclick = () => { link.select(); try { navigator.clipboard.writeText(link.value).then(() => toast("Link copiado!"), () => { document.execCommand("copy"); toast("Link copiado!"); }); } catch (e) { document.execCommand("copy"); toast("Link copiado!"); } };
  }

  /* -------- Trilhas Passo a Passo (só pela Área do professor) -------- */
  async function telaTrilhas() {
    barra();
    const lista = cat().apostilas.filter(a => a.trilha);
    await Promise.all(lista.map(a => carregar(a.id).catch(() => null)));
    const base = location.href.split("#")[0];
    const el = mount(`<section class="tela">
      <nav class="migalhas"><a href="#/">Início</a> › <a href="#/professor">Área do professor</a> › Trilhas Passo a Passo</nav>
      <h1>👣 Trilhas Passo a Passo</h1>
      <p class="lead">As mesmas missões da turma, com letra grande, um passo por vez, quase tudo por clique e o botão 🔊 Ouvir.</p>
      <div class="painel"><h2>Como usar</h2><ol>
        <li>Na missão do dia, clique em <strong>📋 Copiar link</strong>.</li>
        <li>No Veyon, selecione <strong>só o computador do aluno</strong> e use “Abrir site” com o link copiado.</li>
        <li>O aluno digita o nome, escolhe a turma e cai direto na missão. Na tela, ela tem o mesmo título da missão da turma.</li></ol>
        <p class="ajuda">As Trilhas não aparecem na lista dos alunos. Esta página fica só aqui, na Área do professor. Dica: salve esta página nos favoritos do seu computador.</p></div>
      ${lista.length ? lista.map(a => { const C = P.conteudo[a.id]; const se = serie(a.serie); return `<div class="painel trilha-box" style="--cor:${se.cor}">
        <h2>${esc(se.nome)} · ${esc(a.unidade)}</h2><p class="ajuda">${esc(a.titulo)}</p>
        <ul class="trilha-missoes">${C ? C.missoes.map(m => `<li><span class="tm-tit">${esc(m.icone)} ${esc(m.titulo)}</span>
          <span class="row-btns"><button type="button" class="btn" data-link="${esc(base + "#/abrir/" + a.id + "/" + m.id)}">📋 Copiar link</button>
          <a class="btn btn-sec" href="#/abrir/${a.id}/${m.id}">Testar aqui</a></span></li>`).join("") : "<li>Não foi possível carregar esta trilha.</li>"}</ul>
        <p><a href="#/imprimir/${a.id}">🖨️ Versão para imprimir</a></p></div>`; }).join("") : `<p class="painel">Ainda não há Trilhas Passo a Passo.</p>`}
    </section>`);
    el.querySelectorAll("[data-link]").forEach(b => b.onclick = () => {
      const v = b.dataset.link;
      const ok = () => toast("Link copiado! Cole no “Abrir site” do Veyon.");
      const plano = () => { const t = document.createElement("textarea"); t.value = v; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); ok(); } catch (e) { toast(v); } t.remove(); };
      try { navigator.clipboard.writeText(v).then(ok, plano); } catch (e) { plano(); }
    });
  }

  function telaSobre() {
    barra();
    mount(`<section class="tela"><nav class="migalhas"><a href="#/">Início</a> › Privacidade e progresso</nav>
      <h1>Privacidade e progresso</h1>
      <div class="painel">
        <h2>Como o aluno entra?</h2><p>Escolhe a turma e digita o <strong>código de 4 números</strong> do seu cartãozinho. Aparece o nome dele para confirmar. A lista de alunos não fica visível para ninguém: só o professor vê, no painel.</p>
        <h2>O que o portal guarda?</h2><p>O nome do aluno (cadastrado pelo professor), a turma, as respostas das atividades, o andamento de cada missão e os dias em que ele entrou. Isso fica guardado neste navegador e também num banco de dados protegido (Google Firebase), que <strong>só o professor consegue abrir</strong>, com a conta dele.</p>
        <h2>Para que serve?</h2><p>Para o professor ver, no Painel do professor, quem veio a cada aula, quem concluiu o Básico e o Desafio, sem precisar de print. E para o aluno continuar de onde parou em qualquer computador da sala.</p>
        <h2>Sem internet</h2><p>Se a internet cair, o portal continua funcionando no modo antigo: o aluno digita o nome e o progresso fica só neste computador. Nesse caso, vale o print do “Resumo do que fiz”.</p>
        <h2>Quem pode ver o quê?</h2><ul><li>O aluno vê só o que ele mesmo fez.</li><li>Os colegas não veem as respostas nem o código dos outros.</li><li>O professor vê tudo da turma, no painel.</li></ul>
        <h2>Precisa de internet?</h2><p>Se o portal estiver na pasta do computador ou da rede da escola, funciona sem internet. Se estiver publicado num endereço web, precisa de internet só para abrir.</p>
        <h2>Cuidados</h2><p>Não mostre o seu código para os colegas. Nunca digite senhas, telefone, endereço ou documentos no portal. Ao terminar, clique em <strong>Sair</strong>.</p>
      </div></section>`);
  }

  /* ============================================================
     ROTEADOR
     ============================================================ */
  /* Aluno com 📌 apostila diferenciada: a apostila da turma vira a Trilha Passo a Passo dela */
  function trilhaDe(aid) {
    const s = sess.get(); if (!s || !s.trilha) return null;
    const t = cat().apostilas.find(x => x.trilha && x.base === aid); return t ? t.id : null;
  }
  async function rota() {
    const hs = (location.hash || "#/").slice(1).split("/").filter(Boolean);
    modoTrilha(null);
    try {
      if (!hs.length) return telaInicio();
      const [r, a1, a2, a3] = hs;
      if (r === "serie") return telaSerie(a1);
      if (r === "historia") { if (!P.historia) return telaInicio(); return await P.historia.abrir(mount, a1, a2, a3); }
      if (r === "apresentar") { if (!P.apresentacao) return telaInicio(); return await P.apresentacao.abrir(mount, a1, a2); }
      // 👀 Visualização do professor (botão no painel, aba Aula): a apostila exatamente como o aluno vê,
      // numa aba só dela, sem código, sem nuvem e sempre zerada (nada vai para o painel)
      if (r === "ver") {
        const ap = apostila(a1); if (!ap) return telaInicio();
        const s0 = serie(ap.serie), t0 = (s0 && s0.turmas.find(x => x.id === a3)) || (s0 && s0.turmas[0]);
        sess.set({ serie: ap.serie, turma: t0 ? t0.id : "", modo: "sozinho", nomes: ["Professor"], apelidos: ["👀 Visualização do professor"], prof: true, trilha: !!ap.trilha, entrou: Date.now() });
        store.del(progressoKey(a1));
        location.replace("#/" + (a2 ? "missao/" + a1 + "/" + a2 : "apostila/" + a1)); return;
      }
      if (r === "prova") { barra(); if (!P.prova) return telaInicio(); return await P.prova.abrir(mount, a1); }
      if ((r === "apostilas" || r === "apostila" || r === "missao") && P.prova) { const d = await P.prova.destino(); if (d) { location.replace(d); return; } }
      // 📌 Missão de hoje: logo depois do código, o aluno cai direto na missão que o professor escolheu (uma vez por dia)
      if (r === "apostilas" && P.trava) {
        const s = sess.get(), h = await P.trava.hoje(s).catch(() => null);
        if (h) {
          try { sessionStorage.setItem("portalJK:hoje", h.aid + "/" + h.mid); } catch (e) {}
          const k = "portalJK:hojeIr:" + h.dia + ":" + h.mid;
          if (!sessionStorage.getItem(k)) { try { sessionStorage.setItem(k, 1); } catch (e) {} location.replace("#/missao/" + h.aid + "/" + h.mid); return; }
        }
      }
      if (r === "apostilas") return telaApostilas();
      if ((r === "apostila" || r === "missao") && trilhaDe(a1)) { location.replace("#/" + r + "/" + trilhaDe(a1) + (a2 ? "/" + a2 : "") + (a3 ? "/" + a3 : "")); return; }
      if (r === "apostila") return await telaApostila(a1);
      if (r === "missao") return await telaMissao(a1, a2, a3);
      if (r === "imprimir") return await telaImprimir(a1);
      if (r === "professor") return await telaProfessor();
      if (r === "trilhas") return await telaTrilhas();
      if (r === "sobre") return telaSobre();
      if (r === "explorar") { if (!P.explorador || !P.explorador.abrir) return telaInicio(); return await P.explorador.abrir(mount, a1, a2, a3); }
      if (r === "painel") { barra(); if (!P.painel) return mount(`<section class="tela"><div class="painel erro"><h1>Painel indisponível</h1><p>O painel precisa de internet. Abra o portal pelo endereço do GitHub.</p></div></section>`); return await P.painel.abrir(mount, a1, a2, a3); }
      const ss = sess.get();
      if (ss && ss.nuvem && P.nuvem && !(await P.nuvem.sessaoValida(ss))) { sess.del(); toast("Sua entrada expirou. Digite o código de novo."); }
      if (r === "abrir") {
        const ap = apostila(a1); if (!ap) return telaInicio();
        try { sessionStorage.setItem("portalJK:hoje", a1 + "/" + a2); } catch (e) {}
        const s = sess.get();
        if (!s || s.serie !== ap.serie) return telaSerie(ap.serie, "#/missao/" + a1 + "/" + a2);
        location.replace("#/missao/" + a1 + "/" + a2); return;
      }
      return telaInicio();
    } catch (e) {
      console.error(e);
      mount(`<section class="tela"><div class="painel erro"><h1>Não foi possível abrir esta página</h1><p>${esc(e.message)}</p><p><a href="#/">Voltar ao início</a></p></div></section>`);
    }
  }

  window.addEventListener("hashchange", rota);
  window.addEventListener("DOMContentLoaded", () => { rodape(); rota(); });
})();

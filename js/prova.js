/* ============================================================
   PROVA DO BIMESTRE — no próprio portal (no lugar do Wayground)
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   - O professor liga o "📝 Dia de prova" da turma no painel.
   - O aluno digita o código e cai direto na prova da sua série
     (ou da Trilha Passo a Passo, se tiver 👣).
   - Até 10 questões, só das missões que a turma estudou (o professor
     marca no painel). Nota de 0 a 5,0, proporcional aos acertos.
     Uma tentativa, sem dicas, questões e alternativas embaralhadas.
   - Aluno com 3 alternativas (quando o PEI pede): marcado no painel.
   - Ao finalizar: nota na tela, envio para o painel e saída automática.
   - Recuperação: o professor libera uma 2ª tentativa no painel.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  P.provas = {};
  P.registrarProva = (id, d) => { d.aid = id; P.provas[id] = d; };
  const N = P.nuvem;
  const { esc } = P.util;
  const cat = () => P.catalogo;
  const hash = (aid, qid, r) => P.provaHash(aid, qid, r);
  const NOTA_MAX = 5, MAX_Q = 10, MAX_Q_TRILHA = 6;   // 20/11/2026: 10 questões no padrão e 6 na trilha passo a passo // a nota guardada vale até 5,0 (peso no bimestre); o aluno vê de 0 a 10 na tela final
  const notaDe = (ac, n) => n ? Math.round(ac / n * NOTA_MAX * 10) / 10 : 0;

  /* Escolhe as questões da prova: só das missões estudadas, divididas igualmente,
     múltipla escolha primeiro. Mesma escolha para o mesmo aluno e tentativa. */
  function montar(Pv, missoes, seed) {
    const rnd = semente(seed + "|montar");
    const todas = (Pv.missoes || []).map(m => m.id);
    let sel = (missoes || []).filter(m => todas.includes(m));
    if (!sel.length) sel = todas;
    if (!Pv.missoes) return Pv.questoes.map(q => q.id); // formato antigo
    const filas = sel.map(m => [...embaralhar(Pv.questoes.filter(q => q.m === m && q.tipo === "me"), rnd), ...embaralhar(Pv.questoes.filter(q => q.m === m && q.tipo !== "me"), rnd)]);
    const maxQ = Pv.trilha || /-trilha$/.test(Pv.aid || "") ? MAX_Q_TRILHA : MAX_Q;
    const total = Math.min(maxQ, filas.reduce((n, f) => n + f.length, 0)), out = [];
    for (let i = 0; out.length < total; i++) { const f = filas[i % filas.length]; if (f.length) out.push(f.shift().id); }
    return out;
  }
  /* 3 alternativas: a certa + 2 erradas, sorteadas */
  function tresOpcoes(aid, q, rnd) {
    if (q.tipo === "vf" || q.opcoes.length <= 3) return q.opcoes;
    const certa = q.opcoes.find(o => hash(aid, q.id, o) === q.h);
    return [certa, ...embaralhar(q.opcoes.filter(o => o !== certa), rnd).slice(0, 2)];
  }

  /* ---------- utilidades ---------- */
  function aidDaProva(s) {
    const base = cat().apostilas.find(a => a.serie === s.serie && !a.oculta && !a.trilha && (!P.doPeriodo || P.doPeriodo(a)));
    if (!base) return null;
    if (s.trilha) { const t = cat().apostilas.find(x => x.trilha && x.base === base.id); if (t) return t.id; }
    return base.id;
  }
  function carregar(aid) {
    if (P.provas[aid]) return Promise.resolve();
    return new Promise((ok, err) => {
      const sc = document.createElement("script");
      sc.src = "dados/provas/" + aid + ".js?v=" + (window.PORTAL_VERSAO || "");
      sc.onload = ok; sc.onerror = () => err(new Error("Prova não encontrada: " + aid));
      document.head.appendChild(sc);
    });
  }
  // embaralhamento que se repete para o mesmo aluno (se a página recarregar, a ordem não muda)
  function semente(txt) { let h = 2166136261; for (let i = 0; i < txt.length; i++) { h ^= txt.charCodeAt(i); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function embaralhar(arr, rnd) { const b = arr.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  const db = () => N.db();
  const fmt = n => n.toFixed(1).replace(".", ",");

  async function estado(s) {
    if (P.carregarPeriodo) await P.carregarPeriodo(); const cfgSnap = await db().collection("config").doc(P.docProva ? P.docProva(s.turma) : "prova_" + s.turma).get();
    const cfg = cfgSnap.exists ? cfgSnap.data() : {};
    const hojeStr = N.hoje();
    const ate = cfg.ate || null;
    const aberta = !!cfg.aberta && cfg.dia === hojeStr && !(ate && Date.now() > ate);
    const alunoId = s.alunoIds[0];
    const aid = aidDaProva(s);
    const t1 = await db().collection("provas").doc(alunoId + "_" + aid + "_1").get();
    const rec = (cfg.recuperacao || []).includes(alunoId);
    let tentativa = null;
    if (!t1.exists) tentativa = 1;
    else if (rec) { const t2 = await db().collection("provas").doc(alunoId + "_" + aid + "_2").get(); if (!t2.exists) tentativa = 2; }
    return { aberta, ate, aid, alunoId, tentativa, missoes: cfg.missoes || null, tres: (cfg.tres || []).includes(alunoId), feita: t1.exists ? t1.data() : null };
  }

  /* Chamado pelo portal antes de abrir as apostilas: se for dia de prova, devolve o endereço da prova */
  let ultimaChecagem = 0, ultimoDestino = null;
  P.prova = {
    async destino() {
      const s = P.sess.get();
      if (!s || !s.nuvem || !N || !N.pronto || (s.alunoIds || []).length !== 1) return null;
      if (Date.now() - ultimaChecagem < 20000) return ultimoDestino;
      ultimaChecagem = Date.now(); ultimoDestino = null;
      try {
        const e = await Promise.race([estado(s), new Promise(ok => setTimeout(() => ok(null), 4000))]);
        if (e && e.aberta && e.tentativa) ultimoDestino = "#/prova/" + e.aid;
      } catch (err) { console.warn(err); }
      return ultimoDestino;
    },
    abrir: telaProva,
    carregar, montar, notaDe, slides, semente, embaralhar
  };

  /* 🎞️ PROVA EM SLIDES (20/11/2026, pedido do professor): uma questão por tela, com mapa de bolinhas (navegação livre),
     aviso de questão deixada em branco, revisão final antes de enviar, imagem com lupa, situação-problema (texto-base)
     e o 🚨 alarme contra chute (3 respostas rápidas demais travam a prova por 25 s). Usado também na prova de treino. */
  function palavras(t) { return String(t || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length; }
  function slides(palco, mapa, ordem, o) {
    const NQ = ordem.length, resp = o.resp, vistas = new Set(), tIni = {}, contadas = new Set();
    let atual = 0, rapidas = 0, alarmes = 0, travado = false, enviandoAgora = false, revisando = false;
    const cobre = document.createElement("div"); cobre.className = "pv-cobre"; cobre.hidden = true; palco.parentNode.appendChild(cobre);
    const imgHtml = q => q.img ? `<figure class="pv-fig"><img src="${esc(q.img)}" alt="${esc(q.imgAlt || "Imagem da questão")}" loading="eager"><button type="button" class="pv-lupa" title="Ver a imagem grande">🔍 Ampliar</button>${q.imgLeg ? `<figcaption>${esc(q.imgLeg)}</figcaption>` : ""}</figure>`
      : q.svg ? `<figure class="pv-fig pv-svg">${q.svg}<button type="button" class="pv-lupa" title="Ver a imagem grande">🔍 Ampliar</button>${q.imgLeg ? `<figcaption>${esc(q.imgLeg)}</figcaption>` : ""}</figure>` : "";
    const pinta = () => {
      mapa.innerHTML = ordem.map((q, i) => { const r = resp[q.id] != null, pend = !r && vistas.has(i) && i !== atual;
        return `<button type="button" class="pv-bola${r ? " ok" : ""}${i === atual && !revisando ? " at" : ""}${pend ? " pend" : ""}" data-i="${i}" title="Questão ${i + 1}${r ? " (respondida)" : pend ? " (sem resposta)" : ""}">${i + 1}</button>`; }).join("")
        + `<button type="button" class="pv-bola pv-rev${revisando ? " at" : ""}" data-rev="1" title="Revisar e enviar">📋</button>`;
      mapa.querySelectorAll("[data-i]").forEach(b => b.onclick = () => ir(+b.dataset.i));
      mapa.querySelector("[data-rev]").onclick = revisar;
    };
    function avisoBranco(i) { const v = palco.parentNode.querySelector(".pv-aviso"); if (v) v.remove();
      const d = document.createElement("div"); d.className = "pv-aviso"; d.setAttribute("role", "alert");
      d.innerHTML = `<span>⚠️ Você ainda não respondeu a <b>questão ${i + 1}</b>. Tudo bem: pode fazer as outras agora, mas <b>não esqueça de voltar</b>!</span> <button type="button" class="btn btn-peq btn-sec">Voltar nela</button>`;
      d.querySelector("button").onclick = () => { d.remove(); ir(i); }; palco.parentNode.insertBefore(d, palco); setTimeout(() => d.remove(), 7000); }
    function ir(i) {
      if (travado || enviandoAgora) return;
      if (!revisando && i !== atual && resp[ordem[atual].id] == null) avisoBranco(atual);
      revisando = false; atual = Math.max(0, Math.min(NQ - 1, i)); vistas.add(atual); if (!tIni[atual]) tIni[atual] = Date.now();
      const q = ordem[atual], ult = atual === NQ - 1;
      const tipoTag = q.ctx ? "📖 Situação-problema" : q.tipo === "vf" ? "⚖️ Verdadeiro ou falso" : (q.img || q.svg) ? "🖼️ Observe a imagem" : "🔘 Múltipla escolha";
      palco.innerHTML = `<article class="pv-card${q.img || q.svg ? " pv-com-fig" : ""}">
        <header class="pv-cab"><span class="pv-numero" aria-hidden="true">${atual + 1}</span><div class="pv-cab-txt"><p class="pv-num">Questão <b>${atual + 1}</b> de ${NQ}</p><span class="pv-tag">${tipoTag}</span></div></header>
        ${q.ctx ? `<div class="pv-ctx"><p class="pv-rot">📖 Leia a situação</p>${q.ctx}</div>` : ""}
        <div class="pv-corpo">${imgHtml(q)}<div class="pv-perg">
        <div class="pv-comando"><p class="pv-rot">❓ ${q.tipo === "vf" ? "A frase abaixo é verdadeira ou falsa?" : "Responda"}</p><p class="prova-p">${esc(q.p)}</p></div>
        <div class="prova-ops" role="radiogroup" aria-label="Questão ${atual + 1}">${q.opcoes.map((op, k) => `<button type="button" class="prova-op" role="radio" data-o="${esc(op)}" aria-checked="${resp[q.id] === op}"><span class="pv-letra" aria-hidden="true">${q.tipo === "vf" ? (op === "Verdadeiro" ? "V" : "F") : "ABCDEF"[k]}</span><span class="pv-op-txt">${esc(op)}</span></button>`).join("")}</div>
        </div></div>
        <nav class="pv-nav"><button type="button" class="btn btn-sec" data-x="ant" ${atual === 0 ? "disabled" : ""}>← Anterior</button>
          <span class="pv-cont">Respondidas: <b>${Object.keys(resp).filter(k => ordem.some(x => x.id === k)).length}</b> de ${NQ}</span>
          ${ult ? `<button type="button" class="btn btn-grande btn-ok" data-x="rev">📋 Revisar e enviar</button>` : `<button type="button" class="btn btn-grande" data-x="prox">Próxima →</button>`}</nav></article>`;
      palco.querySelectorAll(".prova-op").forEach(b => b.onclick = () => responder(q, b.dataset.o));
      palco.querySelector('[data-x="ant"]').onclick = () => ir(atual - 1);
      const px = palco.querySelector('[data-x="prox"]'); if (px) px.onclick = () => ir(atual + 1);
      const rv = palco.querySelector('[data-x="rev"]'); if (rv) rv.onclick = () => { if (resp[q.id] == null) avisoBranco(atual); revisar(); };
      const lp = palco.querySelector(".pv-lupa"); if (lp) lp.onclick = () => lupa(q);
      pinta(); o.aoMudar && o.aoMudar(atual); palco.parentNode.scrollIntoView({ block: "start" });
    }
    function responder(q, op) {
      if (travado) return;
      const primeira = resp[q.id] == null; resp[q.id] = op;
      palco.querySelectorAll(".prova-op").forEach(x => x.setAttribute("aria-checked", x.dataset.o === op ? "true" : "false"));
      palco.querySelector(".pv-cont b").textContent = Object.keys(resp).filter(k => ordem.some(x => x.id === k)).length;
      o.aoResponder && o.aoResponder(q, op); pinta();
      // 🚨 contra o chute: tempo mínimo de leitura (texto-base + pergunta + alternativas), com folga para quem lê rápido
      if (primeira && !contadas.has(q.id)) { contadas.add(q.id);
        const min = Math.min(12000, Math.max(2500, palavras((q.ctx || "") + " " + q.p + " " + q.opcoes.join(" ")) / 3.5 * 600));
        if (Date.now() - (tIni[atual] || Date.now()) < min) { rapidas++; if (rapidas >= 3) { rapidas = 0; alarme(); } } }
    }
    function alarme() {
      alarmes++; travado = true; o.aoAlarme && o.aoAlarme(alarmes); let r = 25;
      cobre.hidden = false; cobre.className = "pv-cobre pv-alarme";
      const pintaA = () => { cobre.innerHTML = `<div class="pv-cobre-cx"><p class="pv-sirene">🚨</p><h2>Você disparou o alarme contra chute!</h2><p>Você respondeu rápido demais, sem dar tempo de ler. Respire, leia com calma e pense antes de escolher.</p><p class="pv-cont-reg">A prova volta em <b>${r}</b> s</p></div>`; };
      pintaA(); const iv = setInterval(() => { r--; if (r <= 0) { clearInterval(iv); travado = false; cobre.hidden = true; cobre.innerHTML = ""; } else pintaA(); }, 1000);
    }
    function lupa(q) { const d = document.createElement("dialog"); d.className = "pp-dlg pv-lupa-dlg";
      d.innerHTML = `${q.img ? `<img src="${esc(q.img)}" alt="${esc(q.imgAlt || "")}">` : q.svg || ""}<form method="dialog" class="row-btns"><button class="btn btn-grande">✕ Fechar</button></form>`;
      document.body.appendChild(d); d.addEventListener("close", () => d.remove()); d.showModal(); }
    function revisar() {
      if (travado || enviandoAgora) return; revisando = true; pinta();
      const brancos = ordem.map((q, i) => resp[q.id] == null ? i : -1).filter(i => i >= 0);
      palco.innerHTML = `<article class="pv-card pv-revisao"><h2>📋 Revisão antes de enviar</h2>
        <div class="pv-rev-grade">${ordem.map((q, i) => `<button type="button" class="pv-rev-q ${resp[q.id] != null ? "ok" : "branco"}" data-i="${i}"><b>${i + 1}</b>${resp[q.id] != null ? "✔ respondida" : "⚠️ em branco"}</button>`).join("")}</div>
        ${brancos.length ? `<p class="pv-rev-alerta">⚠️ Você deixou <b>${brancos.length} ${brancos.length > 1 ? "questões" : "questão"} sem resposta</b> (${brancos.map(i => i + 1).join(", ")}). Elas vão contar como <b>erradas</b>.</p>` : `<p class="pv-rev-ok">✅ Todas as ${NQ} questões estão respondidas.</p>`}
        <div class="row-btns">${brancos.length ? `<button type="button" class="btn btn-grande btn-ok" data-ir="${brancos[0]}">⬅️ Ir para a questão ${brancos[0] + 1}</button>` : ""}
          <button type="button" class="btn btn-grande ${brancos.length ? "btn-sec" : "btn-ok"}" data-x="env">${brancos.length ? "Enviar mesmo assim" : "✅ Enviar a prova"}</button></div>
        <div class="pv-conf" hidden><p><b>Tem certeza?</b> Depois de enviar, não dá para mudar as respostas.</p><div class="row-btns"><button type="button" class="btn btn-grande btn-ok" data-x="sim">Sim, enviar a prova</button><button type="button" class="btn btn-sec" data-x="nao">Voltar e conferir</button></div></div></article>`;
      palco.querySelectorAll("[data-i]").forEach(b => b.onclick = () => ir(+b.dataset.i));
      const bi = palco.querySelector("[data-ir]"); if (bi) bi.onclick = () => ir(+bi.dataset.ir);
      palco.querySelector('[data-x="env"]').onclick = () => { palco.querySelector(".pv-conf").hidden = false; };
      palco.querySelector('[data-x="nao"]').onclick = () => { palco.querySelector(".pv-conf").hidden = true; };
      palco.querySelector('[data-x="sim"]').onclick = () => o.aoEnviar && o.aoEnviar();
    }
    ir(0);
    return {
      ir, revisar,
      enviando(on) { enviandoAgora = on; palco.querySelectorAll("button").forEach(b => b.disabled = on); const b = palco.querySelector('[data-x="sim"]'); if (b) b.textContent = on ? "Enviando…" : "Sim, enviar a prova"; },
      pausar(on) { if (on) { travado = true; cobre.hidden = false; cobre.className = "pv-cobre pv-pausa"; cobre.innerHTML = `<div class="pv-cobre-cx"><p class="pv-sirene">⏸️</p><h2>O professor pausou a sua prova</h2><p>Aguarde no seu lugar. As suas respostas estão guardadas.</p></div>`; }
        else if (cobre.classList.contains("pv-pausa")) { travado = false; cobre.hidden = true; cobre.innerHTML = ""; } },
      telaCheia(on) { if (on) { if (cobre.classList.contains("pv-telacheia")) { cobre.hidden = true; cobre.innerHTML = ""; cobre.className = "pv-cobre"; travado = false; } return; }
        if (!cobre.hidden && !cobre.classList.contains("pv-telacheia")) return;
        travado = true; cobre.hidden = false; cobre.className = "pv-cobre pv-telacheia";
        cobre.innerHTML = `<div class="pv-cobre-cx"><p class="pv-sirene">🖥️</p><h2>A prova só funciona em tela cheia</h2><p>Toque no botão para voltar. Sair da tela cheia fica registrado para o professor.</p><button type="button" class="btn btn-grande btn-ok">⛶ Voltar para a tela cheia</button></div>`;
        cobre.querySelector("button").onclick = () => { const d = document.documentElement; (d.requestFullscreen ? d.requestFullscreen({ navigationUI: "hide" }) : Promise.reject()).catch(() => {}); }; }
    };
  }

  async function telaProva(mount, aidPedido) {
    const s = P.sess.get();
    if (!s) { location.hash = "#/"; return; }
    if ((s.alunoIds || []).length !== 1) {
      return mount(`<section class="tela"><div class="painel prova-aviso"><h1>📝 A prova é individual</h1>
        <p>Vocês entraram em dupla. Toquem em <strong>Sair</strong> e entrem <strong>um de cada vez</strong>, cada um com o seu código.</p></div></section>`);
    }
    const carregando = mount(`<section class="tela"><div class="painel"><h1>📝 Abrindo a prova…</h1></div></section>`);
    let e;
    try { e = await estado(s); } catch (err) {
      return mount(`<section class="tela"><div class="painel erro"><h1>Não foi possível abrir a prova</h1><p>Confira a internet e tente de novo.</p><p class="ajuda">${esc(err.message || err)}</p></div></section>`);
    }
    if (!e.aberta) {
      return mount(`<section class="tela"><div class="painel prova-aviso"><h1>📝 A prova não está aberta agora</h1>
        <p>A prova só abre no dia marcado, quando o professor liberar.</p><p><a class="btn" href="#/apostilas">Voltar para as apostilas</a></p></div></section>`);
    }
    if (!e.tentativa) {
      return mount(`<section class="tela"><div class="painel prova-fim"><h1>✅ Você já fez a prova</h1>
        <p>Sua prova já foi enviada${e.feita ? `: você acertou <strong>${e.feita.acertos} de ${e.feita.nq || 10}</strong>` : ""}.</p>
        <p>Pode ir para casa! 🏠</p><button class="btn" id="pv-sair" type="button">Sair</button></div></section>`).querySelector("#pv-sair").onclick = sairAgora;
    }
    const aid = e.aid;
    if (aidPedido && aidPedido !== aid) { location.replace("#/prova/" + aid); return; }
    await carregar(aid);
    const Pv = P.provas[aid];
    const seed = e.alunoId + "|" + aid + "|" + e.tentativa;
    const rnd = semente(seed);
    const qs = montar(Pv, e.missoes, seed), NQ = qs.length;
    const escolhidas = qs.map(id => Pv.questoes.find(q => q.id === id));
    const ordem = embaralhar(escolhidas, rnd).map(q => ({ ...q, opcoes: q.tipo === "vf" ? q.opcoes : embaralhar(e.tres ? tresOpcoes(aid, q, rnd) : q.opcoes, rnd) }));
    const chave = "portalJK:prova:" + e.alunoId + ":" + aid + ":" + e.tentativa;
    let resp = {}; try { resp = JSON.parse(sessionStorage.getItem(chave) || "{}"); } catch (x) {}
    const guardar = () => { try { sessionStorage.setItem(chave, JSON.stringify(resp)); } catch (x) {} };
    const apost = P.apostila(aid);
    document.body.classList.toggle("modo-trilha", !!(apost && apost.trilha));

    const el = mount(`<section class="tela prova prova-slides">
      <header class="prova-cab"><div class="pv-topo"><div><h1>📝 Prova do ${esc(((cat().periodos || []).find(x => x.id === (apost && apost.periodo || cat().periodoPadrao)) || { nome: "bimestre" }).nome)}${e.tentativa === 2 ? " · Recuperação" : ""}</h1>
        <p class="lead">${esc(s.nomes[0])} · ${esc(apost ? apost.titulo : "")}</p></div><span class="prova-relogio" id="pv-rel" aria-live="polite"></span></div>
        <nav class="pv-mapa" aria-label="Questões da prova"></nav></header>
      <div class="pv-palco"></div>
    </section>`);
    // 📡 painel ao vivo da prova: o aluno avisa em que questão está, quantas respondeu, saídas da tela cheia e alarmes
    const vivoRef = db().collection("progresso").doc(e.alunoId + "_provavivo");
    let vivoEstado = { alunoId: e.alunoId, turma: s.turma, tipo: "provavivo", aid, dia: N.hoje(), tentativa: e.tentativa, nq: NQ, atual: 1, respondidas: Object.keys(resp).length, saidas: 0, alarmes: 0, inicio: Date.now(), enviada: false, pc: (N.pcId ? N.pcId() : "") };
    let vivoTm = null;
    function vivo(patch) { Object.assign(vivoEstado, patch || {}, { ping: Date.now() }); clearTimeout(vivoTm); vivoTm = setTimeout(() => vivoRef.set(vivoEstado, { merge: true }).catch(() => {}), 400); }
    const UI = P.prova.slides(el.querySelector(".pv-palco"), el.querySelector(".pv-mapa"), ordem, {
      aid, resp, NQ, tres: e.tres,
      aoResponder: () => { guardar(); vivo({ respondidas: Object.keys(resp).length }); },
      aoMudar: i => vivo({ atual: i + 1 }),
      aoAlarme: n => vivo({ alarmes: n, alarmeEm: Date.now() }),
      aoEnviar: () => enviar(false)
    });
    // relógio: conta até o horário-limite da turma (+ tempo extra que o professor der); quando zera, envia sozinho
    let enviando = false, ivRel = null, extraMin = 0, pausado = false;
    const hm = ms => new Date(ms).toTimeString().slice(0, 5);
    const limite = () => e.ate ? e.ate + extraMin * 60000 : null;
    const tic = () => {
      const r = el.querySelector("#pv-rel"), L = limite(); if (!r || !L) { if (r) r.hidden = true; return; }
      if (pausado) { r.textContent = "⏸️ Prova pausada pelo professor"; return; }
      const falta = L - Date.now(), min = Math.ceil(falta / 60000);
      if (falta <= 0) { clearInterval(ivRel); r.textContent = "⏰ O tempo acabou"; if (!enviando) enviar(true); return; }
      r.textContent = `⏰ Até ${hm(L)} · ${falta < 60000 ? "menos de 1 minuto" : "faltam " + min + " min"}${extraMin ? ` (+${extraMin} min)` : ""}`;
      r.classList.toggle("acabando", min <= 5);
    };
    tic(); ivRel = setInterval(tic, 5000);
    vivo({}); const ivVivo = setInterval(() => vivo({}), 30000);
    // ⏸️ pausar e ⏱️ tempo extra: o professor manda pela configuração da prova (só para este aluno)
    let unCfg = null;
    try { unCfg = db().collection("config").doc(P.docProva ? P.docProva(s.turma) : "prova_" + s.turma).onSnapshot(sn => {
      const c = sn.exists ? sn.data() : {}; extraMin = +((c.extra || {})[e.alunoId] || 0);
      const p2 = !!((c.pausa || {})[e.alunoId]); if (p2 !== pausado) { pausado = p2; UI.pausar(pausado); vivo({ pausado }); } tic(); }, () => {}); } catch (x) {}
    // 🖥️ tela cheia vigiada (20/11/2026): sair da tela cheia cobre a prova e conta no painel do professor
    const cheia = () => !!document.fullscreenElement || (Math.abs(innerHeight - screen.height) < 6 && Math.abs(innerWidth - screen.width) < 6);
    let estavaCheia = cheia();
    const vigiaTela = () => { const c = cheia(); if (estavaCheia && !c && !enviando) { vivo({ saidas: (vivoEstado.saidas || 0) + 1 }); } estavaCheia = c; UI.telaCheia(c); };
    document.addEventListener("fullscreenchange", vigiaTela); addEventListener("resize", vigiaTela); UI.telaCheia(cheia());
    const limpar = () => { clearInterval(ivRel); clearInterval(ivVivo); try { unCfg && unCfg(); } catch (x) {} document.removeEventListener("fullscreenchange", vigiaTela); removeEventListener("resize", vigiaTela); };
    addEventListener("hashchange", limpar, { once: true });
    async function enviar(tempo) {
      if (enviando) return; enviando = true; clearInterval(ivRel);
      UI.enviando(true);
      const acertos = escolhidas.filter(q => resp[q.id] != null && hash(aid, q.id, resp[q.id]) === q.h).length;
      try {
        await db().collection("provas").doc(e.alunoId + "_" + aid + "_" + e.tentativa).set({
          alunoId: e.alunoId, turma: s.turma, aid, tentativa: e.tentativa, respostas: resp,
          qs, nq: NQ, tres: !!e.tres, acertos, nota: notaDe(acertos, NQ), enviadoEm: N.FV.serverTimestamp(), dia: N.hoje()
        });
      } catch (err) {
        enviando = false; UI.enviando(false);
        P.toast("Não foi possível enviar. Confira a internet e tente de novo."); console.error(err); return;
      }
      try { sessionStorage.removeItem(chave); } catch (x) {}
      vivo({ enviada: true, respondidas: Object.keys(resp).length }); limpar();
      try { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); } catch (x) {}
      ultimaChecagem = 0;
      const fim = mount(`<section class="tela"><div class="painel prova-fim"><h1>${tempo ? "⏰ O tempo acabou: prova enviada!" : "✅ Prova enviada!"}</h1>
        ${tempo ? "<p>As respostas que você marcou foram enviadas. As questões em branco contam como erradas.</p>" : ""}<p class="prova-nota">Você acertou <strong>${acertos} de ${NQ}</strong>.</p>
        <div class="prova-dez"><span class="pd-num">${fmt(Math.round(acertos / NQ * 100) / 10)}</span><span class="pd-de">de 10</span></div>
        <div class="pd-barra" aria-hidden="true"><i style="width:${Math.round(acertos / NQ * 100)}%"></i></div>
        <p class="pd-msg">${acertos / NQ >= 0.9 ? "🏆 Excelente!" : acertos / NQ >= 0.7 ? "🎉 Muito bem!" : acertos / NQ >= 0.5 ? "👍 Bom trabalho!" : "💪 Continue estudando: você consegue melhorar!"}</p>
        <p>Sua nota já foi para o professor. <strong>Pode ir para casa!</strong> 🏠</p>
        <p class="ajuda" id="pv-cd">Saindo do portal em 15 segundos…</p>
        <button class="btn" id="pv-sair" type="button">Sair agora</button></div></section>`);
      fim.querySelector("#pv-sair").onclick = sairAgora;
      let t = 15; const iv = setInterval(() => { t--; const c = document.getElementById("pv-cd"); if (c) c.textContent = `Saindo do portal em ${t} segundos…`; if (t <= 0) { clearInterval(iv); sairAgora(); } }, 1000);
    }
  }
  async function sairAgora() {
    try { await N.sair(); } catch (x) {}
    P.sess.del(); document.body.classList.remove("modo-trilha"); location.hash = "#/";
  }
})();

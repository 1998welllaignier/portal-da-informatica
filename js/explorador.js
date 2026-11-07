/* ============================================================
   MODO EXPLORADOR — entrada sem código, missões avulsas, medalhas
   Rotas:  #/explorar                 escolher a escola
           #/explorar/<escola>        entrar (lista + bichinho secreto) ou cardápio
           #/explorar/<escola>/m/<id> missão
           #/explorar/<escola>/raio   desafio relâmpago
           #/explorar/painel          professor (histórico da escola)
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL;
  const { esc, md, h, norm, shuffle } = P.util;
  const N = P.nuvem;
  const X = P.explorador = P.explorador || {};

  /* ---------- bichinhos ---------- */
  const INICIAL = { A: "🐝", B: "🐳", C: "🐶", D: "🦕", E: "🐘", F: "🦭", G: "🐱", H: "🦛", I: "🦎", J: "🐊", K: "🥝", L: "🦁", M: "🐵", N: "🦢", O: "🐆", P: "🦆", Q: "🦝", R: "🦊", S: "🐸", T: "🐢", U: "🐻", V: "🐮", W: "🦘", X: "🐦", Y: "🦬", Z: "🦓" };
  const NOME_INI = { A: "Abelha", B: "Baleia", C: "Cachorro", D: "Dinossauro", E: "Elefante", F: "Foca", G: "Gato", H: "Hipopótamo", I: "Iguana", J: "Jacaré", K: "Kiwi", L: "Leão", M: "Macaco", N: "Ninho de cisne", O: "Onça", P: "Pato", Q: "Quati", R: "Raposa", S: "Sapo", T: "Tartaruga", U: "Urso", V: "Vaca", W: "Wallaby", X: "Xexéu", Y: "Iaque", Z: "Zebra" };
  const SECRETOS = [["🐶", "Cachorro"], ["🐱", "Gato"], ["🐸", "Sapo"], ["🦁", "Leão"], ["🐼", "Panda"], ["🐵", "Macaco"], ["🐧", "Pinguim"], ["🦋", "Borboleta"], ["🐙", "Polvo"]];
  const bichoDe = ini => INICIAL[ini] || "⭐";
  const inicialDe = nome => { const c = norm(nome).replace(/[^a-z]/g, "").charAt(0).toUpperCase(); return c || "A"; };

  /* ---------- sessão do explorador ---------- */
  const KEY = "explorador:sess";
  const sess = {
    get() { try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch (e) { return null; } },
    set(v) { try { sessionStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} },
    del() { try { sessionStorage.removeItem(KEY); } catch (e) {} }
  };
  const nuvemOk = () => !!(N && N.pronto);
  const db = () => N.db();
  const hoje = () => N ? N.hoje() : new Date().toISOString().slice(0, 10);
  const esperar = auth => new Promise(ok => { const u = auth.onAuthStateChanged(x => { u(); ok(x); }); });
  async function anonimo() {
    const a = N.auth(); const atual = await esperar(a);
    if (atual && atual.isAnonymous) return atual;
    if (atual) await a.signOut();
    return (await a.signInAnonymously()).user;
  }
  const novoId = () => "x" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const escola = id => (X.escolas || {})[id];
  const ir = hs => { if (location.hash === hs) window.dispatchEvent(new HashChangeEvent("hashchange")); else location.hash = hs; };

  /* ---------- progresso ---------- */
  const prog = {}; // missão -> { atv:{}, ok, quando }
  async function carregarProg(s) {
    for (const k of Object.keys(prog)) delete prog[k];
    if (!nuvemOk()) return;
    try {
      const q = await db().collection("exp_progresso").where("alunoId", "==", s.alunoId).get();
      q.docs.forEach(d => { const v = d.data(); if (v.missao) prog[v.missao] = { atv: v.atv ? JSON.parse(v.atv) : {}, ok: !!v.ok, quando: v.quando || 0 }; if (v.missao === "_raio") prog._raio = v; });
    } catch (e) { console.warn("progresso", e); }
  }
  let timer = null;
  function salvarProg(mid) {
    const s = sess.get(); if (!s || !nuvemOk()) return;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const p = prog[mid]; if (!p) return;
      try {
        await db().collection("exp_progresso").doc(s.alunoId + "_" + mid).set({ alunoId: s.alunoId, escola: s.escola, missao: mid, atv: JSON.stringify(p.atv), ok: !!p.ok, quando: p.quando || null, dia: p.ok ? (p.dia || hoje()) : null, atualizado: N.FV.serverTimestamp() }, { merge: true });
      } catch (e) { console.warn("salvar", e); }
    }, 800);
  }
  async function marcarVisita(s) {
    if (!nuvemOk()) return;
    try { await db().collection("exp_progresso").doc(s.alunoId + "_visitas").set({ alunoId: s.alunoId, escola: s.escola, missao: "_visitas", dias: { [hoje()]: Date.now() } }, { merge: true }); } catch (e) { console.warn("visita", e); }
  }

  /* ============================================================
     TELAS DO ALUNO
     ============================================================ */
  function barraEx(s) {
    const el = document.getElementById("topbar");
    const e = escola(s ? s.escola : "") || {};
    el.innerHTML = `<a class="brand" href="#/explorar/${s ? esc(s.escola) : ""}"><span class="brand-txt">🧭 Modo Explorador</span><span class="brand-prof">${esc(e.nome || "Portal da Informática")}</span></a>
      ${s ? `<div class="sessao"><span class="quem"><span class="ex-bicho">${bichoDe(s.inicial)}</span> ${esc(s.nome)}</span><button type="button" class="btn btn-sec btn-peq" id="ex-sair">Sair</button></div>` : ""}`;
    const b = el.querySelector("#ex-sair");
    if (b) b.onclick = async () => { sess.del(); try { await N.auth().signOut(); } catch (e) {} ir("#/explorar/" + s.escola); };
  }

  function telaEscolas(mount) {
    barraEx(null);
    const lista = Object.entries(X.escolas || {});
    mount(`<section class="tela ex"><header class="ex-hero"><h1>🧭 Modo Explorador</h1><p>Escolha a sua escola.</p></header>
      <div class="ex-escolas">${lista.map(([id, e]) => `<a class="ex-card-escola" href="#/explorar/${esc(id)}"><span>🏫</span><strong>${esc(e.nome)}</strong><small>${esc(e.cidade)}</small></a>`).join("")}</div></section>`);
  }

  /* ---------- entrada: lista de nomes ---------- */
  async function telaEntrada(mount, escId) {
    barraEx(null);
    const e = escola(escId);
    const el = mount(`<section class="tela ex">
      <header class="ex-hero"><p class="ex-escola">🏫 ${esc(e.nome)}</p><h1>Olá, explorador! 👋</h1><p>Procure o seu nome e clique nele. Primeira vez aqui? Clique em <strong>Sou novo</strong>.</p></header>
      <div class="painel ex-entrada">
        <div class="ex-busca"><input type="search" id="ex-q" placeholder="🔎 Digite o seu nome" aria-label="Procurar o meu nome" autocomplete="off"><button type="button" class="btn btn-ok" id="ex-novo">✨ Sou novo</button></div>
        <div id="ex-lista" class="ex-lista-nomes"><p class="ajuda">Carregando os nomes…</p></div>
      </div></section>`);
    el.querySelector("#ex-novo").onclick = () => telaCadastro(mount, escId);
    if (!nuvemOk()) { el.querySelector("#ex-lista").innerHTML = `<p class="erro">Sem internet: o Modo Explorador precisa de internet para guardar as medalhas.</p>`; return; }
    let alunos = [];
    try {
      await anonimo();
      const q = await db().collection("exp_alunos").where("escola", "==", escId).get();
      alunos = q.docs.map(d => Object.assign({ id: d.id }, d.data())).sort((a, b) => a.nome.localeCompare(b.nome, "pt"));
    } catch (err) { el.querySelector("#ex-lista").innerHTML = `<p class="erro">Não foi possível carregar a lista. Tente de novo em instantes.</p>`; console.warn(err); return; }
    const box = el.querySelector("#ex-lista"), inp = el.querySelector("#ex-q");
    const draw = () => {
      const t = norm(inp.value);
      const vis = alunos.filter(a => !t || norm(a.nome + " " + (a.apelido || "")).includes(t));
      box.innerHTML = vis.length ? vis.map(a => `<button type="button" class="ex-nome" data-id="${esc(a.id)}"><span class="ex-bicho">${bichoDe(a.inicial)}</span><span><strong>${esc(a.nome)}</strong>${a.apelido ? ` <em>(${esc(a.apelido)})</em>` : ""}<small>${esc(a.serie || "")}</small></span></button>`).join("")
        : `<p class="ajuda">${alunos.length ? "Nenhum nome encontrado. Se é a sua primeira vez, clique em <strong>Sou novo</strong>." : "Ainda não há ninguém cadastrado. Clique em <strong>Sou novo</strong>!"}</p>`;
      box.querySelectorAll(".ex-nome").forEach(b => b.onclick = () => telaSegredo(mount, escId, alunos.find(a => a.id === b.dataset.id)));
    };
    inp.oninput = draw; draw();
  }

  /* ---------- bichinho secreto (entrar) ---------- */
  let erros = 0, travadoAte = 0;
  function gradeBichos(sel) {
    return `<div class="ex-grade-bichos">${SECRETOS.map(([b, n]) => `<button type="button" class="ex-bicho-btn ${sel === b ? "sel" : ""}" data-b="${b}" aria-label="${n}"><span>${b}</span><small>${n}</small></button>`).join("")}</div>`;
  }
  function telaSegredo(mount, escId, aluno) {
    barraEx(null);
    const el = mount(`<section class="tela ex"><div class="painel ex-segredo">
      <p class="ex-quem"><span class="ex-bicho grande">${bichoDe(aluno.inicial)}</span><strong>${esc(aluno.nome)}</strong></p>
      <h1>Qual é o seu bichinho secreto? 🤫</h1>
      ${gradeBichos()}
      <p class="erro" id="ex-err" hidden></p>
      <p><a href="#/explorar/${esc(escId)}" class="btn btn-link">← Não sou eu</a></p></div></section>`);
    const err = el.querySelector("#ex-err");
    el.querySelectorAll(".ex-bicho-btn").forEach(b => b.onclick = async () => {
      if (Date.now() < travadoAte) { err.textContent = "Muitas tentativas. Espere um pouquinho e tente de novo."; err.hidden = false; return; }
      el.querySelectorAll(".ex-bicho-btn").forEach(x => x.disabled = true);
      try {
        const u = await anonimo();
        await db().collection("exp_sessoes").doc(u.uid).set({ alunoId: aluno.id, escola: escId, bicho: b.dataset.b, criadoEm: N.FV.serverTimestamp() });
        erros = 0;
        const s = { alunoId: aluno.id, escola: escId, nome: aluno.nome, apelido: aluno.apelido || "", serie: aluno.serie || "", inicial: aluno.inicial };
        sess.set(s); await marcarVisita(s);
        ir("#/explorar/" + escId);
      } catch (e) {
        erros++; if (erros >= 3) { travadoAte = Date.now() + 30000; erros = 0; }
        err.textContent = "Não é esse bichinho. Tente de novo! Se esqueceu, peça ajuda ao professor."; err.hidden = false;
        el.querySelectorAll(".ex-bicho-btn").forEach(x => x.disabled = false);
      }
    });
  }

  /* ---------- cadastro ---------- */
  function telaCadastro(mount, escId) {
    barraEx(null);
    const e = escola(escId);
    const el = mount(`<section class="tela ex"><div class="painel ex-cad">
      <h1>✨ Primeira vez? Vamos te cadastrar!</h1>
      <label>Seu primeiro nome<input id="c-nome" maxlength="30" autocomplete="off" placeholder="Ex.: Ana"></label>
      <label>Seu sobrenome<input id="c-sob" maxlength="40" autocomplete="off" placeholder="Ex.: Souza"></label>
      <label>Apelido (se tiver)<input id="c-apel" maxlength="20" autocomplete="off" placeholder="Ex.: Aninha"></label>
      <label>Sua série<select id="c-serie"><option value="">Escolha…</option>${(e.series || []).map(s => `<option>${esc(s)}</option>`).join("")}</select></label>
      <div id="c-prev" class="ex-prev"></div>
      <h2>Escolha o seu bichinho secreto 🤫</h2>
      <p class="ajuda">Ele é a sua senha. Guarde na memória e não conte para ninguém!</p>
      ${gradeBichos()}
      <p class="erro" id="c-err" hidden></p>
      <div class="row-btns"><button type="button" class="btn btn-ok" id="c-ok">Pronto, começar! 🚀</button><a class="btn btn-link" href="#/explorar/${esc(escId)}">← Voltar</a></div>
      <p class="ajuda">Nunca coloque telefone, endereço ou senha de verdade aqui.</p></div></section>`);
    let bicho = null;
    const $ = s => el.querySelector(s), err = $("#c-err");
    const prev = () => { const n = $("#c-nome").value.trim(); const ini = inicialDe(n); $("#c-prev").innerHTML = n ? `<span class="ex-bicho grande">${bichoDe(ini)}</span> <span>Sua carinha: <strong>${NOME_INI[ini] || "Estrela"}</strong>, de <strong>${esc(ini)}</strong>!</span>` : ""; };
    $("#c-nome").oninput = prev;
    el.querySelectorAll(".ex-bicho-btn").forEach(b => b.onclick = () => { bicho = b.dataset.b; el.querySelectorAll(".ex-bicho-btn").forEach(x => x.classList.toggle("sel", x === b)); });
    $("#c-ok").onclick = async () => {
      const nome = $("#c-nome").value.trim().replace(/\s+/g, " "), sob = $("#c-sob").value.trim().replace(/\s+/g, " "), apel = $("#c-apel").value.trim(), serie = $("#c-serie").value;
      const fail = m => { err.textContent = m; err.hidden = false; };
      if (nome.length < 2) return fail("Escreva o seu primeiro nome.");
      if (sob.length < 2) return fail("Escreva o seu sobrenome.");
      if (!serie) return fail("Escolha a sua série.");
      if (!bicho) return fail("Escolha o seu bichinho secreto.");
      if (!nuvemOk()) return fail("Sem internet agora. Tente de novo daqui a pouco.");
      const cap = s => s.split(" ").map(w => w.length > 2 || /^(da|de|do|das|dos|e)$/i.test(w) === false ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()).join(" ");
      const curto = cap(nome.split(" ")[0]) + " " + cap(sob).charAt(0) + ".";
      $("#c-ok").disabled = true;
      try {
        const u = await anonimo();
        const ja = await db().collection("exp_alunos").where("escola", "==", escId).get();
        const igual = ja.docs.map(d => d.data()).find(a => norm(a.nome) === norm(curto) && a.serie === serie);
        if (igual) { $("#c-ok").disabled = false; return fail(`Já existe "${igual.nome}" no ${serie}. Se for você, volte e clique no seu nome.`); }
        const id = novoId(), ini = inicialDe(nome);
        const b = db().batch();
        b.set(db().collection("exp_segredos").doc(id), { bicho });
        b.set(db().collection("exp_alunos").doc(id), { escola: escId, nome: curto, apelido: apel, serie, inicial: ini, criadoEm: N.FV.serverTimestamp() });
        b.set(db().collection("exp_privado").doc(id), { escola: escId, nomeCompleto: cap(nome) + " " + sob, apelido: apel, serie });
        b.set(db().collection("exp_sessoes").doc(u.uid), { alunoId: id, escola: escId, bicho, criadoEm: N.FV.serverTimestamp() });
        await b.commit();
        const s = { alunoId: id, escola: escId, nome: curto, apelido: apel, serie, inicial: ini };
        sess.set(s); await marcarVisita(s);
        P.toast("Cadastro feito! Bem-vindo, explorador! 🎉");
        ir("#/explorar/" + escId);
      } catch (e) { console.warn(e); $("#c-ok").disabled = false; fail("Não deu para cadastrar agora. Tente de novo."); }
    };
  }

  /* ---------- cardápio de missões ---------- */
  function estrelas() { return X.missoes.filter(m => prog[m.id] && prog[m.id].ok).length; }
  async function telaCardapio(mount, s) {
    barraEx(s);
    await carregarProg(s);
    const raio = prog._raio && prog._raio.dias ? Object.keys(prog._raio.dias).length : 0;
    const feitas = estrelas();
    mount(`<section class="tela ex">
      <header class="ex-hero"><p class="ex-escola">🏫 ${esc((escola(s.escola) || {}).nome || "")}</p>
        <h1><span class="ex-bicho grande">${bichoDe(s.inicial)}</span> Oi, ${esc(s.apelido || s.nome.split(" ")[0])}!</h1>
        <div class="ex-medalhas"><span>⭐ <strong>${feitas}</strong> de ${X.missoes.length} missões</span><span>⚡ <strong>${raio}</strong> desafio${raio === 1 ? "" : "s"} relâmpago</span></div>
        <p>Escolha uma missão. Pode ser em qualquer ordem!</p></header>
      <div class="ex-missoes">${X.missoes.map(m => { const ok = prog[m.id] && prog[m.id].ok; const inic = prog[m.id] && !ok && Object.keys(prog[m.id].atv || {}).length;
        return `<a class="ex-missao ${ok ? "feita" : ""}" href="#/explorar/${esc(s.escola)}/m/${esc(m.id)}" style="--cor:${m.cor}">
          <span class="ex-m-ic">${m.icone}</span><span class="ex-m-tit">${esc(m.titulo)}</span><span class="ex-m-res">${esc(m.resumo)}</span>
          <span class="ex-m-pe">⏱️ ${esc(m.tempo)} ${ok ? `<b class="ex-ok">⭐ Concluída</b>` : inic ? `<b class="ex-meio">▶ Continuar</b>` : `<b>Começar →</b>`}</span></a>`; }).join("")}
        <a class="ex-missao ex-raio" href="#/explorar/${esc(s.escola)}/raio" style="--cor:#7c3aed"><span class="ex-m-ic">⚡</span><span class="ex-m-tit">Desafio relâmpago</span><span class="ex-m-res">5 perguntas sorteadas. Acertou 4? Ganha um ⚡!</span><span class="ex-m-pe">⏱️ 5 min <b>Jogar →</b></span></a>
      </div></section>`);
  }

  /* ---------- cartão de atividade (mesmos tipos do portal) ---------- */
  function cartao(at, st, salvar, onDone) {
    const T = P.tipos[at.tipo];
    const el = h(`<section class="atv ex-atv" id="atv-${at.id}">
      <header class="atv-cab"><h2>${md(at.titulo || "")}</h2><span class="atv-corr">✔ correção automática</span></header>
      ${at.enunciado ? `<div class="atv-enun">${at.enunciado}</div>` : ""}
      <div class="atv-corpo"></div>
      <div class="atv-acoes"><button type="button" class="btn btn-ok" data-a="verificar">Verificar</button>
        <button type="button" class="btn btn-link" data-a="refazer" hidden>↺ Refazer</button><span class="atv-status" aria-live="polite"></span></div>
      <div class="atv-fb" role="status" aria-live="polite"></div></section>`);
    const corpo = el.querySelector(".atv-corpo"), fb = el.querySelector(".atv-fb"), bV = el.querySelector('[data-a="verificar"]'), bR = el.querySelector('[data-a="refazer"]'), stEl = el.querySelector(".atv-status");
    const feedback = (k, html) => { fb.innerHTML = html ? `<div class="fb fb-${k}">${k === "ok" ? "✔ " : k === "erro" ? "✖ " : ""}${html}</div>` : ""; };
    const mostrar = () => { stEl.textContent = st.status ? "⭐ Feita!" : ""; el.classList.toggle("concluida", !!st.status); bR.hidden = !st.status; };
    const ctx = {
      at, st, el, corpo, salvar, feedback, sessao: null, verificar: null, resolver: null,
      concluir(status, msg) { st.status = status === "ajuda" ? "ajuda" : "certo"; st.quando = Date.now(); salvar(); mostrar(); if (msg !== false) feedback("ok", (msg || "Muito bem!") + (at.explicacao ? `<div class="explic">${at.explicacao}</div>` : "")); onDone(); },
      errou(msg) { st.tentativas = (st.tentativas || 0) + 1; salvar(); feedback("erro", msg + " <br><small>Volte no texto lá em cima, procure a resposta e tente de novo!</small>"); },
      esconderVerificar() { bV.hidden = true; }, mostrarVerificar() { bV.hidden = false; },
      reRender() { corpo.innerHTML = ""; T.render(corpo, at, ctx); }
    };
    bV.onclick = () => ctx.verificar && ctx.verificar();
    bR.onclick = () => { for (const k of Object.keys(st)) delete st[k]; salvar(); feedback("", ""); ctx.reRender(); mostrar(); onDone(); };
    T.render(corpo, at, ctx);
    el._ctx = ctx;
    if (!ctx.verificar) bV.hidden = true;
    if (st.status) { mostrar(); feedback("ok", "Você já fez esta! ⭐" + (at.explicacao ? `<div class="explic">${at.explicacao}</div>` : "")); }
    return el;
  }

  async function telaMissao(mount, s, mid) {
    barraEx(s);
    const m = X.missoes.find(x => x.id === mid);
    if (!m) { ir("#/explorar/" + s.escola); return; }
    if (!Object.keys(prog).length) await carregarProg(s);
    const p = prog[mid] = prog[mid] || { atv: {}, ok: false };
    const el = mount(`<section class="tela ex ex-tela-missao" style="--cor:${m.cor}">
      <p><a class="btn btn-link" href="#/explorar/${esc(s.escola)}">← Voltar às missões</a></p>
      <header class="ex-m-cab"><span class="ex-m-ic">${m.icone}</span><div><h1>${esc(m.titulo)}</h1><p>${esc(m.resumo)} · ⏱️ ${esc(m.tempo)}</p></div></header>
      <article class="painel ex-leitura"><h2>📖 Leia e descubra</h2>${m.leitura}<p class="ex-dica">🔎 As respostas das atividades estão neste texto. Volte aqui sempre que precisar!</p></article>
      <div class="ex-progresso"><div class="ex-barra"><span></span></div><small></small></div>
      <div class="ex-atvs"></div>
      <div class="ex-fim" hidden></div></section>`);
    const lista = el.querySelector(".ex-atvs"), fim = el.querySelector(".ex-fim");
    const atualizar = () => {
      const tot = m.atividades.length, feitas = m.atividades.filter(a => p.atv[a.id] && p.atv[a.id].status).length;
      el.querySelector(".ex-barra span").style.width = (100 * feitas / tot) + "%";
      el.querySelector(".ex-progresso small").textContent = `${feitas} de ${tot} atividades`;
      if (feitas === tot && !p.ok) { p.ok = true; p.quando = Date.now(); p.dia = hoje(); salvarProg(mid); }
      if (feitas < tot && p.ok) { /* refez: mantém a medalha já ganha */ }
      fim.hidden = !p.ok;
      fim.innerHTML = p.ok ? `<div class="ex-medalha-fim"><span>⭐</span><h2>Missão concluída!</h2><p>Você ganhou a medalha <strong>${esc(m.titulo)}</strong>.</p>
        <div class="row-btns"><a class="btn btn-ok" href="#/explorar/${esc(s.escola)}">Escolher outra missão →</a><a class="btn btn-sec" href="#/explorar/${esc(s.escola)}/raio">⚡ Desafio relâmpago</a></div></div>` : "";
    };
    m.atividades.forEach(at => {
      const st = p.atv[at.id] = p.atv[at.id] || { tentativas: 0, dicas: 0 };
      lista.appendChild(cartao(at, st, () => salvarProg(mid), atualizar));
    });
    atualizar();
  }

  /* ---------- desafio relâmpago ---------- */
  async function telaRaio(mount, s) {
    barraEx(s);
    const qs = shuffle(X.relampago.slice()).slice(0, 5).map(q => { const ord = shuffle(q.opcoes.map((_, i) => i)); return { p: q.p, opcoes: ord.map(i => q.opcoes[i]), certo: ord.indexOf(q.certo) }; });
    let i = 0, acertos = 0;
    const el = mount(`<section class="tela ex"><p><a class="btn btn-link" href="#/explorar/${esc(s.escola)}">← Voltar às missões</a></p>
      <div class="painel ex-raio-box"><h1>⚡ Desafio relâmpago</h1><div class="ex-raio-q"></div></div></section>`);
    const box = el.querySelector(".ex-raio-q");
    const draw = () => {
      if (i >= qs.length) {
        const ganhou = acertos >= 4;
        box.innerHTML = `<div class="ex-medalha-fim"><span>${ganhou ? "⚡" : "💪"}</span><h2>${acertos} de ${qs.length} acertos!</h2><p>${ganhou ? "Você ganhou um ⚡ relâmpago!" : "Quase! Acerte 4 para ganhar o ⚡. Tente de novo!"}</p>
          <div class="row-btns"><button type="button" class="btn btn-ok" id="r-de-novo">↺ Jogar de novo</button><a class="btn btn-sec" href="#/explorar/${esc(s.escola)}">Voltar às missões</a></div></div>`;
        box.querySelector("#r-de-novo").onclick = () => telaRaio(mount, s);
        if (ganhou && nuvemOk()) db().collection("exp_progresso").doc(s.alunoId + "__raio").set({ alunoId: s.alunoId, escola: s.escola, missao: "_raio", dias: { [hoje()]: acertos } }, { merge: true }).catch(e => console.warn(e));
        return;
      }
      const q = qs[i];
      box.innerHTML = `<p class="ex-raio-n">Pergunta ${i + 1} de ${qs.length} · ✔ ${acertos}</p><h2>${esc(q.p)}</h2>
        <div class="ex-raio-ops">${q.opcoes.map((o, k) => `<button type="button" class="ex-op" data-k="${k}">${esc(o)}</button>`).join("")}</div>`;
      box.querySelectorAll(".ex-op").forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === q.certo; if (ok) acertos++;
        box.querySelectorAll(".ex-op").forEach(x => { x.disabled = true; if (+x.dataset.k === q.certo) x.classList.add("certo"); });
        if (!ok) b.classList.add("errado");
        setTimeout(() => { i++; draw(); }, ok ? 700 : 1500);
      });
    };
    draw();
  }

  /* ============================================================
     TIPOS DE ATIVIDADE NOVOS (simulações no próprio navegador)
     ============================================================ */
  const T = P.tipos;
  T.baloes = {
    auto: true,
    render(c, at, ctx) {
      const total = at.quantidade || 10; let n = ctx.st.status ? total : 0;
      const cores = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];
      c.innerHTML = `<div class="ex-ceu"><button type="button" class="ex-balao" aria-label="Balão: clique para estourar">🎈</button><p class="ex-cont"></p></div>`;
      const b = c.querySelector(".ex-balao"), cont = c.querySelector(".ex-cont");
      const mover = () => { b.style.left = (5 + Math.random() * 80) + "%"; b.style.top = (5 + Math.random() * 65) + "%"; b.style.filter = `drop-shadow(0 0 0 ${cores[n % cores.length]})`; b.style.color = cores[n % cores.length]; };
      const mostrar = () => { cont.textContent = n >= total ? "🎉 Todos estourados!" : `Estourados: ${n} de ${total}`; b.hidden = n >= total; };
      b.onclick = () => { n++; b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); mostrar(); if (n >= total) ctx.concluir("certo", "Você estourou todos! Mira de campeão! 🎯"); else mover(); };
      mover(); mostrar();
    }
  };
  T.duplo_clique = {
    auto: true,
    render(c, at, ctx) {
      c.innerHTML = `<div class="ex-desk"><div class="ex-icones-desk">${at.itens.map(n => `<button type="button" class="ex-ic-desk" data-n="${esc(n)}"><span>📁</span><small>${esc(n)}</small></button>`).join("")}</div>
        <div class="ex-janela" hidden><div class="ex-jan-barra"><span>📁 ${esc(at.alvo)}</span><span class="ex-jan-bts"><i>—</i><i>▢</i><i>✕</i></span></div><div class="ex-jan-corpo">🎮 jogo-da-velha.exe &nbsp; 🧩 quebra-cabeca.exe &nbsp; 🏎️ corrida.exe</div></div>
        <p class="ex-cont">Dica: dois cliques bem rapidinhos!</p></div>`;
      const jan = c.querySelector(".ex-janela"), cont = c.querySelector(".ex-cont");
      if (ctx.st.status) { jan.hidden = false; cont.textContent = "✔ Pasta aberta!"; }
      c.querySelectorAll(".ex-ic-desk").forEach(b => {
        b.onclick = () => { c.querySelectorAll(".ex-ic-desk").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); if (!ctx.st.status) cont.textContent = "Um clique só seleciona. Para abrir, são dois cliques rapidinhos!"; };
        b.ondblclick = () => {
          if (b.dataset.n === at.alvo) { jan.hidden = false; cont.textContent = "✔ Pasta aberta!"; if (!ctx.st.status) ctx.concluir("certo", "Isso! Duplo clique abre a pasta."); }
          else { cont.textContent = `Essa é a pasta ${b.dataset.n}. Abra a pasta ${at.alvo}!`; ctx.st.tentativas = (ctx.st.tentativas || 0) + 1; }
        };
      });
    }
  };
  T.explorador_pastas = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.onde = st.onde || {};
      let sel = null, marcas = {};
      const draw = () => {
        const soltos = at.arquivos.filter(a => !st.onde[a.nome]);
        c.innerHTML = `<div class="ex-expl"><div class="ex-expl-barra">📂 Explorador de Arquivos › Este Computador › <strong>Documentos</strong></div>
          <div class="ex-expl-corpo"><div class="ex-soltos" data-p="">${soltos.length ? soltos.map(a => arq(a)).join("") : `<p class="ajuda">Todos os arquivos foram guardados. Clique em Verificar!</p>`}</div>
          <div class="ex-pastas">${at.pastas.map(p => `<div class="ex-pasta" data-p="${p.id}" tabindex="0" role="button" aria-label="Pasta ${esc(p.nome)}"><div class="ex-pasta-cab">📁 ${p.ic} ${esc(p.nome)}</div>
            <div class="ex-pasta-itens">${at.arquivos.filter(a => st.onde[a.nome] === p.id).map(a => arq(a)).join("")}</div></div>`).join("")}</div></div></div>`;
        c.querySelectorAll(".ex-arq").forEach(a => {
          a.ondragstart = e => { e.dataTransfer.setData("text/plain", a.dataset.n); };
          a.onclick = e => {
            e.stopPropagation();
            const zona = a.closest(".ex-pasta, .ex-soltos");
            if (sel && sel !== a.dataset.n && zona) return mover(sel, zona.dataset.p); // já tem arquivo escolhido: clicar na pasta (mesmo em cima de outro arquivo) guarda
            sel = sel === a.dataset.n ? null : a.dataset.n; c.querySelectorAll(".ex-arq").forEach(x => x.classList.toggle("sel", x.dataset.n === sel));
          };
        });
        c.querySelectorAll(".ex-pasta, .ex-soltos").forEach(p => {
          p.ondragover = e => { e.preventDefault(); p.classList.add("alvo"); };
          p.ondragleave = () => p.classList.remove("alvo");
          p.ondrop = e => { e.preventDefault(); mover(e.dataTransfer.getData("text/plain"), p.dataset.p); };
          p.onclick = () => { if (sel) mover(sel, p.dataset.p); };
          p.onkeydown = e => { if ((e.key === "Enter" || e.key === " ") && sel) { e.preventDefault(); mover(sel, p.dataset.p); } };
        });
      };
      const ext = n => n.split(".").pop();
      const ICO = { jpg: "🖼️", mp3: "🎵", docx: "📝", mp4: "🎬" };
      const arq = a => `<button type="button" class="ex-arq ${marcas[a.nome] || ""}" draggable="true" data-n="${esc(a.nome)}">${ICO[ext(a.nome)] || "📄"} ${esc(a.nome)}${marcas[a.nome] === "errado" ? " ✖" : ""}</button>`;
      const mover = (nome, pasta) => { if (!nome) return; if (pasta) st.onde[nome] = pasta; else delete st.onde[nome]; delete marcas[nome]; sel = null; ctx.salvar(); draw(); };
      ctx.verificar = () => {
        marcas = {}; let ok = true;
        at.arquivos.forEach(a => { if (st.onde[a.nome] !== a.p) { ok = false; if (st.onde[a.nome]) marcas[a.nome] = "errado"; } });
        draw();
        if (ok) ctx.concluir("certo", "Tudo organizado! Cada arquivo na sua pasta. 📁");
        else ctx.errou(at.arquivos.some(a => !st.onde[a.nome]) ? "Ainda tem arquivo fora das pastas, ou em pasta errada (marcado com ✖)." : "Tem arquivo na pasta errada (marcado com ✖). Olhe a extensão!");
      };
      draw();
    }
  };

  /* ============================================================
     PAINEL DO PROFESSOR DO EXPLORADOR
     ============================================================ */
  async function telaPainel(mount) {
    barraEx(null);
    if (!nuvemOk()) return mount(`<section class="tela"><div class="painel erro"><h1>Sem internet</h1></div></section>`);
    const a = N.auth(); let u = await esperar(a);
    if (!u || u.isAnonymous) {
      const el = mount(`<section class="tela ex"><div class="painel ex-login"><h1>🧭 Painel do Explorador</h1><p>Professor: entre com a sua conta Google para ver quem veio e o que fez.</p>
        <button type="button" class="btn btn-ok" id="g">Entrar com Google</button><p class="erro" id="e" hidden></p></div></section>`);
      el.querySelector("#g").onclick = async () => {
        try { if (a.currentUser) await a.signOut(); const prov = new firebase.auth.GoogleAuthProvider(); prov.setCustomParameters({ prompt: "select_account" }); await a.signInWithPopup(prov); sess.del(); telaPainel(mount); }
        catch (e) { const x = el.querySelector("#e"); x.textContent = "Não foi possível entrar: " + e.message; x.hidden = false; }
      };
      return;
    }
    const souWel = u.email === N.EMAIL_PROFESSOR;
    let escId = null;
    if (souWel) {
      // garante a escola e o acesso do Prof. Vinícius (o Welington é quem cria)
      try {
        for (const [id, e] of Object.entries(X.escolas)) await db().collection("exp_escolas").doc(id).set({ nome: e.nome, cidade: e.cidade }, { merge: true });
      } catch (e) { console.warn("seed", e); }
      escId = sessionStorage.getItem("explorador:painelEsc") || Object.keys(X.escolas)[0];
    } else {
      try { const d = await db().collection("professores").doc(u.email).get(); if (d.exists) escId = d.data().escola; } catch (e) {}
      if (!escId) return mount(`<section class="tela ex"><div class="painel erro"><h1>Conta sem acesso</h1><p>A conta <strong>${esc(u.email)}</strong> ainda não foi liberada para nenhuma escola. Peça ao Prof. Welington.</p><button class="btn btn-sec" id="sair">Sair</button></div></section>`).querySelector("#sair").onclick = async () => { await a.signOut(); telaPainel(mount); };
    }
    const e = escola(escId) || { nome: escId };
    const el = mount(`<section class="tela ex ex-painel"><header class="ex-hero"><p class="ex-escola">🏫 ${esc(e.nome)}</p><h1>🧭 Painel do Explorador</h1>
        <p>${esc(u.email)} · <button type="button" class="btn btn-link" id="sair">Sair</button></p></header>
      <div class="painel"><div class="ex-resumo" id="resumo">Carregando…</div></div>
      <div class="painel"><h2>Alunos</h2><input type="search" id="q" placeholder="🔎 Procurar aluno" class="ex-q-prof"><div id="tab" class="ex-tab-wrap"></div></div></section>`);
    el.querySelector("#sair").onclick = async () => { await a.signOut(); telaPainel(mount); };
    let alunos = [], priv = {}, progs = [];
    try {
      const [qa, qp, qg] = await Promise.all([
        db().collection("exp_alunos").where("escola", "==", escId).get(),
        db().collection("exp_privado").where("escola", "==", escId).get(),
        db().collection("exp_progresso").where("escola", "==", escId).get()]);
      alunos = qa.docs.map(d => Object.assign({ id: d.id }, d.data()));
      qp.docs.forEach(d => priv[d.id] = d.data());
      progs = qg.docs.map(d => d.data());
    } catch (err) { el.querySelector("#tab").innerHTML = `<p class="erro">Não foi possível carregar: ${esc(err.message)}. Confira se as regras de segurança novas foram publicadas no Firebase.</p>`; return; }
    const por = {}; alunos.forEach(x => por[x.id] = { a: x, dias: {}, mis: [], raio: {} });
    progs.forEach(p => { const r = por[p.alunoId]; if (!r) return;
      if (p.missao === "_visitas") Object.assign(r.dias, p.dias || {});
      else if (p.missao === "_raio") Object.assign(r.raio, p.dias || {});
      else if (p.ok) r.mis.push({ id: p.missao, dia: p.dia }); });
    const d0 = hoje();
    const hojeN = Object.values(por).filter(r => r.dias[d0]).length;
    const fmt = d => d ? d.slice(8, 10) + "/" + d.slice(5, 7) : "";
    const mNome = id => { const m = X.missoes.find(x => x.id === id); return m ? m.icone + " " + m.titulo : id; };
    el.querySelector("#resumo").innerHTML = `<span>👥 <strong>${alunos.length}</strong> alunos cadastrados</span><span>📅 <strong>${hojeN}</strong> vieram hoje</span><span>⭐ <strong>${progs.filter(p => p.ok).length}</strong> missões concluídas</span>`;
    const tab = el.querySelector("#tab"), q = el.querySelector("#q");
    const draw = () => {
      const t = norm(q.value);
      const rows = Object.values(por).filter(r => !t || norm((priv[r.a.id] || {}).nomeCompleto + " " + r.a.nome + " " + (r.a.apelido || "")).includes(t))
        .sort((x, y) => (Object.keys(y.dias).sort().pop() || "").localeCompare(Object.keys(x.dias).sort().pop() || "") || x.a.nome.localeCompare(y.a.nome));
      tab.innerHTML = rows.length ? `<table class="ex-tab"><thead><tr><th>Aluno</th><th>Série</th><th>Dias em que veio</th><th>Missões concluídas</th><th>⚡</th><th></th></tr></thead><tbody>${rows.map(r => {
        const pv = priv[r.a.id] || {};
        return `<tr><td><span class="ex-bicho">${bichoDe(r.a.inicial)}</span> <strong>${esc(pv.nomeCompleto || r.a.nome)}</strong>${r.a.apelido ? ` <em>(${esc(r.a.apelido)})</em>` : ""}</td><td>${esc(r.a.serie || "")}</td>
          <td>${Object.keys(r.dias).sort().map(fmt).join(" · ") || "—"}</td>
          <td>${r.mis.sort((x, y) => (x.dia || "").localeCompare(y.dia || "")).map(m => `${mNome(m.id)} <small>(${fmt(m.dia)})</small>`).join("<br>") || "—"}</td>
          <td>${Object.keys(r.raio).length || ""}</td>
          <td><button type="button" class="btn btn-link btn-peq" data-reset="${esc(r.a.id)}" title="Se o aluno esqueceu o bichinho">🔄 Bichinho</button></td></tr>`; }).join("")}</tbody></table>`
        : `<p class="ajuda">Nenhum aluno ainda. Os alunos se cadastram sozinhos no primeiro acesso, pelo link do Modo Explorador.</p>`;
      tab.querySelectorAll("[data-reset]").forEach(b => b.onclick = () => trocarBicho(b.dataset.reset));
    };
    const trocarBicho = id => {
      const r = por[id]; const box = h(`<div class="ex-modal"><div class="painel"><h2>Novo bichinho para ${esc(r.a.nome)}</h2><p>Escolha junto com o aluno:</p>${gradeBichos()}<button type="button" class="btn btn-link" data-x>Cancelar</button></div></div>`);
      document.body.appendChild(box);
      box.querySelector("[data-x]").onclick = () => box.remove();
      box.querySelectorAll(".ex-bicho-btn").forEach(b => b.onclick = async () => {
        try { await db().collection("exp_segredos").doc(id).set({ bicho: b.dataset.b }); P.toast("Bichinho trocado! Agora é " + b.querySelector("small").textContent + "."); }
        catch (e) { P.toast("Não deu para trocar: " + e.message); }
        box.remove();
      });
    };
    q.oninput = draw; draw();
    if (souWel) {
      const box = h(`<div class="painel"><h2>👨‍🏫 Professores com acesso a esta escola</h2><div id="profs" class="ajuda">Carregando…</div>
        <div class="ex-busca"><input type="email" id="pe" placeholder="e-mail Google do professor"><button type="button" class="btn btn-ok" id="pa">Liberar acesso</button></div></div>`);
      el.appendChild(box);
      const listar = async () => { try { const q = await db().collection("professores").where("escola", "==", escId).get(); box.querySelector("#profs").innerHTML = q.docs.length ? q.docs.map(d => `<p>✅ ${esc(d.id)}</p>`).join("") : "<p>Nenhum professor liberado ainda.</p>"; } catch (e) { box.querySelector("#profs").textContent = "Não foi possível listar."; } };
      box.querySelector("#pa").onclick = async () => { const m = box.querySelector("#pe").value.trim().toLowerCase(); if (!/^[^@\s]+@[^@\s]+\.[a-z]+$/.test(m)) return P.toast("Digite um e-mail válido."); try { await db().collection("professores").doc(m).set({ escola: escId }); box.querySelector("#pe").value = ""; P.toast("Acesso liberado para " + m); listar(); } catch (e) { P.toast("Erro: " + e.message); } };
      listar();
    }
    const link = location.origin + location.pathname + "#/explorar/" + escId;
    el.querySelector(".ex-painel .painel").insertAdjacentHTML("afterend", `<div class="painel"><h2>🔗 Link para os alunos</h2><p>Abra este endereço nos computadores da sala (dá para salvar nos favoritos):</p><p><code>${esc(link)}</code></p></div>`);
  }

  /* ============================================================
     ROTEADOR DO EXPLORADOR
     ============================================================ */
  X.abrir = async function (mount, a1, a2, a3) {
    if (!a1) return telaEscolas(mount);
    if (a1 === "painel") return telaPainel(mount);
    if (!escola(a1)) return telaEscolas(mount);
    let s = sess.get();
    if (s && s.escola !== a1) { sess.del(); s = null; }
    if (s && nuvemOk()) {
      try { const u = await esperar(N.auth()); if (!u || !u.isAnonymous) { sess.del(); s = null; } } catch (e) {}
    }
    if (!s) return telaEntrada(mount, a1);
    if (a2 === "m" && a3) return telaMissao(mount, s, a3);
    if (a2 === "raio") return telaRaio(mount, s);
    return telaCardapio(mount, s);
  };
  X.bichoDe = bichoDe;
})();

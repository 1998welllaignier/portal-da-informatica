/* ============================================================
   PORTAL JK — JOGOS DO TECLADO (6º ano 2027 · Missão 1 · Especial Teclado)
   Tipo de atividade "teclado", com 4 modos:
     cacar   — caça aos símbolos: digite o @, o #, o %… (baú do tesouro)
     copiar  — copie igualzinho: confere maiúscula, acento e símbolo, letra por letra
     teclas  — teclas especiais: Caps Lock, Num Lock, Delete, Backspace, Home e setas (confere QUAL tecla foi usada)
     mouse   — clique, duplo clique e botão direito
   Em todos: teclado espelho (acende a tecla que o aluno aperta, com as luzinhas Num/Caps)
   e o botão "🤖 Me ajuda, robô!": o Bit faz uma mini simulação (acende Shift, depois 2…)
   e o aluno repete. Depois de 2 erros, o Bit se oferece sozinho. O aluno resolve sem o professor.
   Teclado ABNT2 (o da escola). ids das teclas = KeyboardEvent.code.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- layout ABNT2: [code, largura, base, shift, altgr] ---------- */
  const L1 = [["Backquote", 1, "'", "\""], ["Digit1", 1, "1", "!", "¹"], ["Digit2", 1, "2", "@", "²"], ["Digit3", 1, "3", "#", "³"], ["Digit4", 1, "4", "$", "£"], ["Digit5", 1, "5", "%", "¢"], ["Digit6", 1, "6", "¨", "¬"],
    ["Digit7", 1, "7", "&"], ["Digit8", 1, "8", "*"], ["Digit9", 1, "9", "("], ["Digit0", 1, "0", ")"], ["Minus", 1, "-", "_"], ["Equal", 1, "=", "+", "§"], ["Backspace", 2, "⟵ Backspace"]];
  const L2 = [["Tab", 1.5, "Tab ⇥"]].concat("QWERTYUIOP".split("").map(c => ["Key" + c, 1, c, null, { Q: "/", W: "?", E: "°" }[c]]), [["BracketLeft", 1, "´", "`"], ["BracketRight", 1, "[", "{", "ª"], ["Enter", 1.5, "Enter ↵"]]);
  const L3 = [["CapsLock", 1.75, "Caps Lock"]].concat("ASDFGHJKL".split("").map(c => ["Key" + c, 1, c]), [["Semicolon", 1, "Ç"], ["Quote", 1, "~", "^"], ["Backslash", 1, "]", "}", "º"], ["Enter2", 1.25, ""]]);
  const L4 = [["ShiftLeft", 1.25, "⇧ Shift"], ["IntlBackslash", 1, "\\", "|"]].concat("ZXCVBNM".split("").map(c => ["Key" + c, 1, c]), [["Comma", 1, ",", "<"], ["Period", 1, ".", ">"], ["Slash", 1, ";", ":"], ["IntlRo", 1, "/", "?", "°"], ["ShiftRight", 1.75, "⇧ Shift"]]);
  const L5 = [["ControlLeft", 1.5, "Ctrl"], ["MetaLeft", 1.25, "⊞"], ["AltLeft", 1.25, "Alt"], ["Space", 5.75, "espaço"], ["AltRight", 1.25, "AltGr"], ["MetaRight", 1.25, "⊞"], ["ContextMenu", 1.25, "☰"], ["ControlRight", 1.5, "Ctrl"]];
  const ED = [[["Insert", 1, "Ins"], ["Home", 1, "Home"], ["PageUp", 1, "PgUp"]], [["Delete", 1, "Del"], ["End", 1, "End"], ["PageDown", 1, "PgDn"]], [], [[null, 1], ["ArrowUp", 1, "▲"], [null, 1]], [["ArrowLeft", 1, "◀"], ["ArrowDown", 1, "▼"], ["ArrowRight", 1, "▶"]]];
  const NP = [[["NumLock", 1, "Num"], ["NumpadDivide", 1, "/"], ["NumpadMultiply", 1, "*"], ["NumpadSubtract", 1, "-"]], [["Numpad7", 1, "7"], ["Numpad8", 1, "8"], ["Numpad9", 1, "9"], ["NumpadAdd", 1, "+"]],
    [["Numpad4", 1, "4"], ["Numpad5", 1, "5"], ["Numpad6", 1, "6"], ["NumpadComma", 1, "."]], [["Numpad1", 1, "1"], ["Numpad2", 1, "2"], ["Numpad3", 1, "3"], ["NumpadEnter", 1, "Ent"]], [["Numpad0", 2, "0"], ["NumpadDecimal", 1, ","], [null, 1]]];
  const PRINC = [L1, L2, L3, L4, L5];
  const INFO = {}; PRINC.concat(ED, NP).forEach(r => r.forEach(([c, w, b, s, a]) => { if (c) INFO[c] = { b, s, a }; }));
  const NOME_TECLA = { ShiftLeft: "Shift", ShiftRight: "Shift", AltRight: "AltGr", Space: "barra de espaço", Backspace: "Backspace", Delete: "Delete", CapsLock: "Caps Lock", NumLock: "Num Lock", Home: "Home", End: "End",
    ArrowLeft: "seta para a esquerda", ArrowRight: "seta para a direita", ArrowUp: "seta para cima", ArrowDown: "seta para baixo", Enter: "Enter", BracketLeft: "acento agudo ( ´ )", Quote: "til ( ~ )", Semicolon: "Ç" };
  const nomeTecla = c => NOME_TECLA[c] || (INFO[c] ? INFO[c].b : c);
  const ESQUERDA = new Set(["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB"]);
  const shiftPara = c => ESQUERDA.has(c) ? "ShiftRight" : "ShiftLeft"; // tecla da mão esquerda → Shift da direita (e vice-versa)

  /* ---------- como fazer cada caractere: lista de passos { teclas:[codes], txt } ---------- */
  const DIRETO = {}; // caractere → [code, nível 0 base / 1 shift / 2 altgr]
  Object.entries(INFO).forEach(([c, i]) => { if (/^(Numpad|Arrow)/.test(c) || ["Backspace", "Tab", "Enter", "CapsLock", "ShiftLeft", "ShiftRight", "Space"].includes(c)) return;
    if (/^Key[A-Z]$/.test(c)) { DIRETO[i.b.toLowerCase()] = [c, 0]; DIRETO[i.b] = [c, 1]; return; }
    if (i.b && i.b.length === 1 && !["´", "~", "¨"].includes(i.b)) DIRETO[i.b] = DIRETO[i.b] || [c, 0]; if (i.s && i.s.length === 1 && !["`", "^", "¨"].includes(i.s)) DIRETO[i.s] = DIRETO[i.s] || [c, 1]; if (i.a) DIRETO[i.a] = DIRETO[i.a] || [c, 2]; });
  DIRETO["ç"] = ["Semicolon", 0]; DIRETO["Ç"] = ["Semicolon", 1]; DIRETO[" "] = ["Space", 0]; DIRETO["°"] = ["KeyE", 2]; DIRETO["/"] = ["IntlRo", 0]; DIRETO["?"] = ["IntlRo", 1];
  const ACENTOS = { "´": ["BracketLeft", 0, "agudo ( ´ )", "aeiou"], "`": ["BracketLeft", 1, "crase ( ` )", "a"], "~": ["Quote", 0, "til ( ~ )", "ao"], "^": ["Quote", 1, "circunflexo ( ^ )", "aeo"], "¨": ["Digit6", 1, "trema ( ¨ )", "u"] };
  const COM_ACENTO = {}; Object.entries(ACENTOS).forEach(([ac, [c, n, nome, vs]]) => vs.split("").forEach(v => { const comp = (v + { "´": "́", "`": "̀", "~": "̃", "^": "̂", "¨": "̈" }[ac]).normalize("NFC"); COM_ACENTO[comp] = [ac, v]; COM_ACENTO[comp.toUpperCase()] = [ac, v.toUpperCase()]; }));
  function passosDe(ch) {
    const umaTecla = (c, nivel, alvo) => { const k = nomeTecla(c); if (nivel === 1) return { teclas: [shiftPara(c), c], txt: `Segure o <b>Shift ⇧</b> e aperte a tecla <b>${esc(k)}</b>.`, mostra: alvo };
      if (nivel === 2) return { teclas: ["AltRight", c], txt: `Segure o <b>AltGr</b> (à direita do espaço) e aperte a tecla <b>${esc(k)}</b>: é o desenho do cantinho.`, mostra: alvo };
      return { teclas: [c], txt: c === "Space" ? "Aperte a <b>barra de espaço</b>." : `Aperte a tecla <b>${esc(k)}</b>.`, mostra: alvo }; };
    if (COM_ACENTO[ch]) { const [ac, v] = COM_ACENTO[ch]; const [c, n, nome] = ACENTOS[ac];
      const p1 = { teclas: n ? [shiftPara(c), c] : [c], txt: `1º: ${n ? "segure o <b>Shift</b> e " : ""}aperte e solte a tecla do <b>${nome}</b>. Repare: ainda <b>não aparece nada</b> (é uma tecla mágica).`, mostra: "" };
      const [cv, nv] = DIRETO[v]; const p2 = umaTecla(cv, nv, ch); p2.txt = `2º: agora ${nv === 1 ? "segure o <b>Shift</b> e " : ""}aperte a letra <b>${esc(v)}</b>. Pronto: <b>${esc(ch)}</b>!`; return [p1, p2]; }
    if (DIRETO[ch]) { const [c, n] = DIRETO[ch]; return [umaTecla(c, n, ch)]; }
    return [{ teclas: [], txt: `Procure o <b>${esc(ch)}</b> no teclado.`, mostra: ch }];
  }
  P.teclado = { passosDe, INFO };

  const NOMES = { "@": "arroba", "#": "jogo da velha", "%": "porcentagem", "&": "e comercial", "°": "grau", "!": "exclamação", "$": "cifrão", "*": "asterisco", "(": "abre parênteses", ")": "fecha parênteses",
    "?": "interrogação", ":": "dois-pontos", ";": "ponto e vírgula", "_": "sublinhado", "+": "mais", "\"": "aspas", "|": "barra em pé", "/": "barra", "\\": "barra invertida", "<": "menor que", ">": "maior que",
    "²": "dois pequenininho (ao quadrado)", "á": "a com acento agudo", "é": "e com acento agudo", "ã": "a com til", "õ": "o com til", "ê": "e com circunflexo", "â": "a com circunflexo", "à": "a com crase", "ç": "cê-cedilha", "Ç": "Ç maiúsculo", "-": "hífen", "=": "igual" };

  /* ---------- HTML do teclado ---------- */
  function htmlTeclado(o) { o = o || {};
    const tecla = ([c, w, b, s, a]) => !c ? `<span class="tk-k tk-vazio" style="flex:${w}"></span>` : c === "Enter2" ? `<span class="tk-k tk-enter2" data-c="Enter" style="flex:${w}"></span>` :
      `<span class="tk-k${b && b.length > 2 ? " tk-txt" : ""}" data-c="${c}" style="flex:${w}">${s ? `<i>${esc(s)}</i>` : ""}<b>${esc(b)}</b>${a ? `<em>${esc(a)}</em>` : ""}</span>`;
    const bloco = (rows, cls) => `<div class="tk-bloco ${cls}">${rows.map(r => `<div class="tk-lin">${r.map(tecla).join("")}</div>`).join("")}</div>`;
    return `<div class="tk${o.mini ? " tk-mini" : ""}" aria-hidden="true">
      ${bloco(PRINC, "tk-princ")}${o.ed ? bloco(ED, "tk-ed") : ""}${o.np ? `<div class="tk-npw"><div class="tk-leds"><span data-led="num">Num</span><span data-led="caps">Caps</span><span data-led="scroll">Scroll</span></div>${bloco(NP, "tk-np")}</div>` : `<div class="tk-leds tk-leds-so"><span data-led="num">Num</span><span data-led="caps">Caps</span></div>`}</div>`; }
  const acender = (kb, c, cls, on) => kb.querySelectorAll(`[data-c="${c}"]`).forEach(k => k.classList.toggle(cls, on));
  const led = (kb, id, on) => { const l = kb.querySelector(`[data-led="${id}"]`); if (l) l.classList.toggle("on", !!on); };
  /* teclado espelho: acende o que o aluno aperta de verdade */
  function espelho(kb, alvo) {
    const down = e => { acender(kb, e.code, "tk-ap", true); if (e.getModifierState) { led(kb, "caps", e.getModifierState("CapsLock")); led(kb, "num", e.getModifierState("NumLock")); } };
    const up = e => { acender(kb, e.code, "tk-ap", false); if (e.getModifierState) { led(kb, "caps", e.getModifierState("CapsLock")); led(kb, "num", e.getModifierState("NumLock")); } };
    alvo.addEventListener("keydown", down); alvo.addEventListener("keyup", up); alvo.addEventListener("blur", () => kb.querySelectorAll(".tk-ap").forEach(k => k.classList.remove("tk-ap")));
  }

  /* ---------- o Bit (robozinho) e a mini simulação ---------- */
  const BIT = `<svg class="bit-svg" viewBox="0 0 120 150" aria-hidden="true"><line x1="60" y1="8" x2="60" y2="24" stroke="#0b1020" stroke-width="5"/><circle class="bit-ant" cx="60" cy="8" r="7" fill="#ef4444" stroke="#0b1020" stroke-width="3"/>
    <rect x="12" y="24" width="96" height="70" rx="22" fill="#e2e8f0" stroke="#0b1020" stroke-width="5"/><rect x="24" y="35" width="72" height="48" rx="14" fill="#0f172a"/>
    <g class="bit-olhos" fill="#67e8f9"><ellipse cx="45" cy="56" rx="7" ry="9"/><ellipse cx="75" cy="56" rx="7" ry="9"/></g><path d="M50 70 Q60 78 70 70" stroke="#67e8f9" stroke-width="4" fill="none" stroke-linecap="round"/>
    <rect x="24" y="98" width="72" height="44" rx="16" fill="#3b82f6" stroke="#0b1020" stroke-width="5"/><circle cx="60" cy="120" r="10" fill="#fde047" stroke="#0b1020" stroke-width="3"/><text x="60" y="125" font-size="13" font-weight="800" text-anchor="middle" fill="#0b1020">@</text></svg>`;
  const espera = ms => new Promise(r => setTimeout(r, ms));
  /* passos: [{ teclas:[codes], txt, mostra }] ou [{ mouse:"esq"|"duplo"|"dir", txt }] */
  function demo(box, passos, o) { o = o || {};
    const temTecla = passos.some(p => p.teclas && p.teclas.length);
    box.innerHTML = `<div class="bit-demo" role="region" aria-label="O Bit mostra como faz"><div class="bit-topo">${BIT}<div class="bit-fala" aria-live="polite"><strong>Bit:</strong> <span class="bf">Olha só como eu faço…</span></div></div>
      ${temTecla ? `<div class="bit-palco">${htmlTeclado({ mini: true, ed: o.ed, np: o.np })}${o.semCaixa ? "" : `<div class="bit-caixa"><span class="bc"></span><span class="bit-cur"></span></div>`}</div>` : ""}
      ${passos.some(p => p.mouse) ? `<div class="bit-mouse${P.gesto ? " bit-gesto" : ""}"><div class="bm-corpo"><span class="bm-e"></span><span class="bm-d"></span></div><span class="bm-txt"></span></div>` : ""}
      <div class="bit-bts"><button type="button" class="btn bit-de-novo">🔁 Ver de novo</button><button type="button" class="btn btn-ok bit-entendi">👍 Entendi! Agora eu faço</button></div></div>`;
    const kb = box.querySelector(".tk"), fala = box.querySelector(".bf"), cx = box.querySelector(".bc"); let rodando = 0;
    const tocar = async () => { const id = ++rodando; if (cx) cx.textContent = o.inicio || ""; if (kb && o.leds) Object.entries(o.leds).forEach(([k, v]) => led(kb, k, v));
      for (const p of passos) { if (id !== rodando) return; fala.innerHTML = p.txt;
        if (p.teclas && kb) { const seg = p.teclas.slice(0, -1), ult = p.teclas[p.teclas.length - 1];
          for (const c of seg) { acender(kb, c, "tk-segura", true); await espera(650); }
          if (ult) { acender(kb, ult, "tk-alvo", true); await espera(250); acender(kb, ult, "tk-ap", true); if (p.leds) Object.entries(p.leds).forEach(([k, v]) => led(kb, k, v)); if (cx && p.mostra != null) cx.textContent = p.mostra; await espera(500); acender(kb, ult, "tk-ap", false); }
          await espera(1300); seg.concat(ult).forEach(c => { acender(kb, c, "tk-segura", false); acender(kb, c, "tk-alvo", false); }); await espera(300); }
        if (p.mouse && P.gesto) { const bm = box.querySelector(".bit-mouse"); bm.innerHTML = P.gesto(p.mouse === "dir" ? "direito" : p.mouse === "duplo" ? "duplo" : "clique"); await espera(2400); }   // 🖱️ 21/11/2026: o mousezinho novo
        else if (p.mouse) { const m = box.querySelector(".bm-corpo"), t2 = box.querySelector(".bm-txt"); const cls = p.mouse === "dir" ? "bm-dir" : "bm-esq";
          const n = p.mouse === "duplo" ? 2 : 1; for (let i = 0; i < n; i++) { m.classList.add(cls); await espera(p.mouse === "duplo" ? 160 : 450); m.classList.remove(cls); await espera(p.mouse === "duplo" ? 140 : 300); }
          t2.textContent = p.mouse === "dir" ? "botão DIREITO" : p.mouse === "duplo" ? "clique-clique RAPIDINHO" : "1 clique (botão esquerdo)"; await espera(1500); } }
      if (id === rodando) fala.innerHTML = "Agora é a sua vez: faça igualzinho! 💪"; };
    box.querySelector(".bit-de-novo").onclick = tocar; box.querySelector(".bit-entendi").onclick = () => { rodando++; box.innerHTML = ""; if (o.aoFechar) o.aoFechar(); };
    box.hidden = false; tocar(); return { parar() { rodando++; } }; }
  P.robo = { demo, BIT, passosDe };

  /* ---------- estrutura comum ---------- */
  function casca(c, at, ctx, corpoHtml, o) { o = o || {};
    c.innerHTML = `<div class="tg">${corpoHtml}
      <div class="tg-fb" aria-live="polite"></div>
      <div class="tg-acoes"><button type="button" class="btn tg-robo">🤖 Me ajuda, robô!</button></div>
      <div class="tg-demo" hidden></div>
      ${o.semTeclado ? "" : `<details class="tg-esp" open><summary>⌨️ Teclado espelho (acende o que você aperta)</summary>${htmlTeclado({ ed: o.ed, np: o.np })}</details>`}</div>`;
    const fb = c.querySelector(".tg-fb"), demoBox = c.querySelector(".tg-demo"), bRobo = c.querySelector(".tg-robo");
    return { fb, demoBox, bRobo, kb: c.querySelector(".tg-esp .tk"),
      msg(tipo, html) { fb.className = "tg-fb " + (tipo || ""); fb.innerHTML = html || ""; },
      oferecer() { bRobo.classList.add("tg-pulsa"); }, calmo() { bRobo.classList.remove("tg-pulsa"); } }; }
  const somOk = () => { try { P.sons && P.sons.ok && P.sons.ok(); } catch (e) { } };

  /* ============================================================ */
  T.teclado = {
    auto: true,
    render(c, at, ctx) { const st = ctx.st; st.robo = st.robo || 0;
      const modo = at.modo || "cacar";
      if (modo === "cacar") return cacar(c, at, ctx);
      if (modo === "copiar") return copiar(c, at, ctx);
      if (modo === "teclas") return teclas(c, at, ctx);
      if (modo === "mouse") return mouse(c, at, ctx);
    },
    imprimir(at) { const m = at.modo || "cacar";
      if (m === "cacar") return `<table class="imp-t"><tr><th>Símbolo</th><th>Nome</th><th>Como eu faço? (teclas)</th></tr>${at.alvos.map(a => `<tr><td style="font-size:1.4em">${esc(a)}</td><td>${esc(NOMES[a] || "")}</td><td></td></tr>`).join("")}</table>`;
      if (m === "copiar") return at.frases.map((f, i) => `<p>${i + 1}. ${esc(f)}</p><div class="imp-linhas"><div></div></div>`).join("");
      if (m === "teclas") return `<ol>${at.tarefas.map(t => `<li>${t.pede}</li>`).join("")}</ol>`;
      return `<p>Atividade no computador (mouse).</p>`; },
    resumoResposta(at, st) { return `${(st.feitos || 0)} de ${(at.alvos || at.frases || at.tarefas || [1, 2, 3]).length}${st.robo ? ` · pediu ajuda ao Bit ${st.robo}×` : ""}`; }
  };

  /* ---------- 1) CAÇA AOS SÍMBOLOS ---------- */
  function cacar(c, at, ctx) { const st = ctx.st; st.feitos = Math.min(st.feitos || 0, at.alvos.length); st.tempos = st.tempos || {};
    const cofre = () => `<div class="tg-bau" aria-label="Baú do tesouro">${at.alvos.map((a, i) => `<span class="${i < st.feitos ? "tem" : ""}${i === st.feitos ? " vez" : ""}">${esc(a)}</span>`).join("")}</div>`;
    const ui = casca(c, at, ctx, `<div class="tg-cab"><span class="tg-ic">🧰</span><div><strong>Baú do tesouro</strong><br><small>${st.feitos} de ${at.alvos.length} símbolos</small></div>${cofre()}</div>
      <div class="tg-alvo"><p class="tg-pede"></p><label class="tg-campo"><span class="sr">Digite aqui</span><input class="tg-in" autocomplete="off" spellcheck="false" autocapitalize="off" maxlength="6"></label><p class="tg-tempo"></p></div>`);
    const inp = c.querySelector(".tg-in"), pede = c.querySelector(".tg-pede"), cab = c.querySelector(".tg-cab"), tempo = c.querySelector(".tg-tempo"); let erros = 0, t0 = Date.now(), comp = false;
    espelho(ui.kb, inp);
    const mostrar = () => { cab.querySelector("small").textContent = `${st.feitos} de ${at.alvos.length} símbolos`; cab.querySelector(".tg-bau").outerHTML = cofre();
      if (st.feitos >= at.alvos.length) { pede.innerHTML = "🏆 Baú completo! Você achou todos os símbolos."; inp.disabled = true; ui.bRobo.hidden = true; return; }
      const a = at.alvos[st.feitos]; pede.innerHTML = `Digite o <span class="tg-sim">${esc(a)}</span> <small>(${esc(NOMES[a] || "")})</small>`; inp.value = ""; erros = 0; t0 = Date.now(); ui.calmo(); };
    const conferir = () => { if (comp) return; const a = at.alvos[st.feitos]; const v = inp.value; if (!v || !a) return;
      if (v === a || v.trim() === a) { const seg = (Date.now() - t0) / 1000; st.tempos[a] = Math.min(st.tempos[a] || 99, seg); st.feitos++; ctx.salvar(); somOk();
        ui.msg("ok", `✔ Achou o <b>${esc(a)}</b>! ${seg < 4 ? "⚡ Rapidinho: " : ""}${seg.toFixed(1).replace(".", ",")} s`); inp.classList.add("tg-acertou"); setTimeout(() => { inp.classList.remove("tg-acertou"); mostrar(); inp.focus(); if (st.feitos >= at.alvos.length && !st.status) ctx.concluir("certo", `Baú completo! Você digitou ${at.alvos.join(" ")} sozinho(a). 🏆`); }, 650); return; }
      erros++; st.tentativas = (st.tentativas || 0) + 1; ctx.salvar();
      ui.msg("erro", `Saiu <b class="tg-errado">${esc(v)}</b>, mas eu pedi <b>${esc(a)}</b>. Apague com o <b>Backspace ⟵</b> e tente de novo.${erros >= 2 ? " <br>🤖 <b>Quer que o Bit mostre como faz?</b> Clique em <b>Me ajuda, robô!</b>" : ""}`); if (erros >= 2) ui.oferecer(); };
    inp.addEventListener("compositionstart", () => comp = true); inp.addEventListener("compositionend", () => { comp = false; conferir(); });
    inp.addEventListener("input", e => { if (e.isComposing) return; if (inp.value === "") { ui.msg("", ""); return; } conferir(); });
    ui.bRobo.onclick = () => { const a = at.alvos[st.feitos]; if (!a) return; st.robo++; ctx.salvar(); demo(ui.demoBox, passosDe(a), { aoFechar: () => inp.focus() }); ui.calmo(); };
    mostrar(); }

  /* ---------- 2) COPIE IGUALZINHO ---------- */
  function copiar(c, at, ctx) { const st = ctx.st; st.feitos = Math.min(st.feitos || 0, at.frases.length);
    const ui = casca(c, at, ctx, `<div class="tg-cab"><span class="tg-ic">✍️</span><div><strong>Copie igualzinho</strong><br><small></small></div></div>
      <div class="tg-alvo"><p class="tg-modelo" aria-label="Frase para copiar"></p><label class="tg-campo larga"><span class="sr">Digite a frase</span><input class="tg-in" autocomplete="off" spellcheck="false" autocapitalize="off"></label><p class="tg-cmp" aria-hidden="true"></p></div>`);
    const inp = c.querySelector(".tg-in"), mod = c.querySelector(".tg-modelo"), cmp = c.querySelector(".tg-cmp"), info = c.querySelector(".tg-cab small"); let erros = 0, ultErro = -1;
    espelho(ui.kb, inp);
    const frase = () => at.frases[st.feitos];
    const mostrar = () => { info.textContent = `Frase ${Math.min(st.feitos + 1, at.frases.length)} de ${at.frases.length} · confere maiúscula, acento e símbolo`;
      if (st.feitos >= at.frases.length) { mod.innerHTML = "🏆 Todas as frases copiadas igualzinho!"; inp.disabled = true; cmp.innerHTML = ""; ui.bRobo.hidden = true; return; }
      mod.textContent = frase(); inp.value = ""; cmp.innerHTML = ""; erros = 0; ultErro = -1; ui.calmo(); };
    const primeiraDif = (v, f) => { let i = 0; while (i < v.length && i < f.length && v[i] === f[i]) i++; return i; };
    const atualizar = () => { const f = frase(); if (!f) return; const v = inp.value; const i = primeiraDif(v, f);
      cmp.innerHTML = `<span class="tg-ok">${esc(v.slice(0, i))}</span>${i < v.length ? `<span class="tg-x">${esc(v.slice(i))}</span>` : `<span class="tg-falta">${esc(f.slice(i))}</span>`}`;
      if (v === f) { st.feitos++; ctx.salvar(); somOk(); ui.msg("ok", "✔ Igualzinho! Próxima frase…"); setTimeout(() => { mostrar(); inp.focus(); if (st.feitos >= at.frases.length && !st.status) ctx.concluir("certo", "Você copiou todas as frases igualzinho, com maiúsculas, acentos e símbolos! 🏆"); }, 700); return; }
      if (i < v.length) { if (i !== ultErro) { ultErro = i; erros++; st.tentativas = (st.tentativas || 0) + 1; ctx.salvar(); }
        const certo = f[i]; ui.msg("erro", `A letra ${i + 1} devia ser <b>${certo === " " ? "um espaço" : esc(certo)}</b>${NOMES[certo] ? ` (${esc(NOMES[certo])})` : ""}, mas saiu <b class="tg-errado">${esc(v[i])}</b>. Apague com o <b>Backspace</b>.${erros >= 2 ? " 🤖 O Bit pode mostrar como faz!" : ""}`); if (erros >= 2) ui.oferecer(); }
      else ui.msg("", v.length ? `✔ Até aqui está certo (${i} de ${f.length}).` : ""); };
    inp.addEventListener("input", e => { if (e.isComposing) return; atualizar(); }); inp.addEventListener("compositionend", atualizar);
    ui.bRobo.onclick = () => { const f = frase(); if (!f) return; const i = primeiraDif(inp.value, f); const ch = f[Math.min(i, f.length - 1)]; st.robo++; ctx.salvar();
      demo(ui.demoBox, [{ teclas: [], txt: `O próximo caractere é <b>${ch === " " ? "o espaço" : esc(ch)}</b>${NOMES[ch] ? ` (${esc(NOMES[ch])})` : ""}. ${inp.value.length > i ? "Antes, apague o que está errado com o <b>Backspace ⟵</b>." : ""}` }].concat(passosDe(ch)), { aoFechar: () => inp.focus() }); ui.calmo(); };
    mostrar(); }

  /* ---------- 3) TECLAS ESPECIAIS (confere QUAL tecla foi usada) ---------- */
  function teclas(c, at, ctx) { const st = ctx.st; st.feitos = Math.min(st.feitos || 0, at.tarefas.length);
    const ui = casca(c, at, ctx, `<div class="tg-cab"><span class="tg-ic">🎛️</span><div><strong>Teclas especiais</strong><br><small></small></div></div>
      <div class="tg-alvo"><p class="tg-pede"></p><label class="tg-campo larga"><span class="sr">Caixa de texto</span><input class="tg-in" autocomplete="off" spellcheck="false" autocapitalize="off"></label></div>`, { ed: true, np: true });
    const inp = c.querySelector(".tg-in"), pede = c.querySelector(".tg-pede"), info = c.querySelector(".tg-cab small"); let usadas = new Set(), erros = 0, capsViu = false;
    espelho(ui.kb, inp);
    const tarefa = () => at.tarefas[st.feitos];
    const mostrar = () => { info.textContent = `Desafio ${Math.min(st.feitos + 1, at.tarefas.length)} de ${at.tarefas.length}`;
      const tf = tarefa(); if (!tf) { pede.innerHTML = "🏆 Você domina as teclas especiais!"; inp.disabled = true; ui.bRobo.hidden = true; return; }
      pede.innerHTML = tf.pede; inp.value = tf.ini || ""; usadas = new Set(); erros = 0; capsViu = false; ui.calmo(); ui.msg("", "");
      setTimeout(() => { inp.focus(); const p = tf.cursor == null ? inp.value.length : tf.cursor; try { inp.setSelectionRange(p, p); } catch (e) { } }, 30); };
    const ok = (msg) => { st.feitos++; ctx.salvar(); somOk(); ui.msg("ok", "✔ " + msg); setTimeout(() => { mostrar(); if (st.feitos >= at.tarefas.length && !st.status) ctx.concluir("certo", "Caps Lock, Num Lock, Delete, Backspace, Home e setas: você usou cada uma do jeito certo! 🏆"); }, 900); };
    const avisa = (html) => { erros++; st.tentativas = (st.tentativas || 0) + 1; ctx.salvar(); ui.msg("erro", html + (erros >= 2 ? " 🤖 Peça ajuda ao Bit!" : "")); if (erros >= 2) ui.oferecer(); };
    inp.addEventListener("keydown", e => { const tf = tarefa(); if (!tf) return; usadas.add(e.code); const caps = e.getModifierState && e.getModifierState("CapsLock");
      if (/^Key/.test(e.code) && caps) capsViu = true;
      if (tf.tipo === "numpad" && /^Digit\d$/.test(e.code)) { e.preventDefault(); avisa("Esse é o número <b>de cima</b> do teclado. Use o <b>teclado numérico da direita</b> (a calculadora)!"); }
      if (tf.tipo === "numpad" && /^Numpad\d$/.test(e.code) && !/^\d$/.test(e.key)) avisa("A luzinha do <b>Num Lock</b> está apagada: os números viraram setas! Aperte o <b>Num Lock</b> e tente de novo.");
      if (tf.tipo === "caps" && /^Key/.test(e.code) && e.shiftKey) { e.preventDefault(); avisa("Desta vez é sem o Shift: ligue o <b>cadeado Caps Lock</b> (a luzinha acende)."); } });
    inp.addEventListener("input", () => { const tf = tarefa(); if (!tf) return; const v = inp.value;
      if (tf.tipo === "caps") { if (v === tf.fim) return capsViu ? ok("Caps Lock ligado: tudo saiu maiúsculo!") : avisa("Use o <b>Caps Lock</b> (não o Shift)."); }
      else if (tf.tipo === "capsOff") { if (v === tf.fim) return ok("Caps Lock desligado: letras minúsculas de novo."); if (v && v === v.toUpperCase() && /[A-Z]/.test(v)) avisa("Saiu maiúsculo: o <b>Caps Lock</b> ainda está ligado (olhe a luzinha). Aperte o Caps Lock para desligar."); }
      else if (tf.tipo === "numpad") { if (v === tf.fim) return ok("Isso! Você usou o teclado numérico da direita."); }
      else if (tf.tipo === "tecla") { const volta = () => { inp.value = tf.ini; const p = tf.cursor == null ? tf.ini.length : tf.cursor; try { inp.setSelectionRange(p, p); } catch (e) { } usadas = new Set(); };
        if (v === tf.fim) { if (usadas.has(tf.tecla)) return ok(tf.okMsg || "Certinho!"); avisa(`O resultado ficou certo, mas o desafio é usar a tecla <b>${esc(nomeTecla(tf.tecla))}</b>. Tente de novo com ela!`); return volta(); }
        if (v !== tf.ini) { avisa(tf.dicaErro || `Não foi bem isso. Use a tecla <b>${esc(nomeTecla(tf.tecla))}</b>.`); setTimeout(volta, 900); } } });
    ui.bRobo.onclick = () => { const tf = tarefa(); if (!tf) return; st.robo++; ctx.salvar(); demo(ui.demoBox, tf.robo, { ed: true, np: true, inicio: tf.ini || "", leds: tf.ledsIni, aoFechar: () => { inp.focus(); } }); ui.calmo(); };
    mostrar(); }

  /* ---------- 4) MOUSE CERTEIRO ---------- */
  function mouse(c, at, ctx) { const st = ctx.st; st.feitos = Math.min(st.feitos || 0, 3);
    const TAR = [{ txt: "Dê <b>1 clique</b> (botão esquerdo) na <b>estrela</b> para escolher.", robo: [{ mouse: "esq", txt: "Um clique só, com o botão <b>esquerdo</b>: aperte e solte." }] },
      { txt: "Dê <b>duplo clique</b> (2 cliques rapidinhos) na <b>pasta</b> para abrir.", robo: [{ mouse: "duplo", txt: "Dois cliques <b>bem rapidinhos</b>, sem mexer o mouse." }] },
      { txt: "Clique com o <b>botão DIREITO</b> no <b>presente</b> e depois escolha <b>Abrir</b> no menu.", robo: [{ mouse: "dir", txt: "O botão <b>direito</b> abre o menu de opções." }, { mouse: "esq", txt: "Depois, um clique com o <b>esquerdo</b> em <b>Abrir</b>." }] }];
    const ui = casca(c, at, ctx, `<div class="tg-cab"><span class="tg-ic">🖱️</span><div><strong>Mouse certeiro</strong><br><small></small></div></div><p class="tg-pede"></p>
      <div class="tg-mesa"><button type="button" class="tg-obj" data-o="0">⭐<small>estrela</small></button><button type="button" class="tg-obj" data-o="1">📁<small>pasta</small></button><button type="button" class="tg-obj" data-o="2">🎁<small>presente</small></button><div class="tg-menu" hidden><button type="button">Abrir</button><button type="button" disabled>Renomear</button><button type="button" disabled>Excluir</button></div></div>`, { semTeclado: true });
    const pede = c.querySelector(".tg-pede"), info = c.querySelector(".tg-cab small"), menu = c.querySelector(".tg-menu"); let erros = 0;
    const mostrar = () => { info.textContent = `Desafio ${Math.min(st.feitos + 1, 3)} de 3`; c.querySelectorAll(".tg-obj").forEach((b, i) => b.classList.toggle("feito", i < st.feitos)); menu.hidden = true;
      if (st.feitos >= 3) { pede.innerHTML = "🏆 Mira certeira: clique, duplo clique e botão direito!"; ui.bRobo.hidden = true; return; } pede.innerHTML = TAR[st.feitos].txt; erros = 0; ui.calmo(); };
    const ok = m => { st.feitos++; ctx.salvar(); somOk(); ui.msg("ok", "✔ " + m); mostrar(); if (st.feitos >= 3 && !st.status) ctx.concluir("certo", "Clique, duplo clique e botão direito: tudo certo! 🖱️"); };
    const errou = m => { erros++; st.tentativas = (st.tentativas || 0) + 1; ctx.salvar(); ui.msg("erro", m + (erros >= 2 ? " 🤖 O Bit mostra como faz!" : "")); if (erros >= 2) ui.oferecer(); };
    let tClique = null;
    c.querySelectorAll(".tg-obj").forEach(b => { const o = +b.dataset.o;
      b.onclick = () => { if (st.feitos !== o) return errou(`Agora é com o objeto do desafio ${st.feitos + 1}: leia o pedido.`); if (o === 0) return ok("1 clique escolhe!"); if (o === 1) { clearTimeout(tClique); tClique = setTimeout(() => errou("Um clique só <b>escolhe</b>. Para abrir são <b>2 cliques rapidinhos</b>!"), 450); } if (o === 2) errou("Esse foi o botão <b>esquerdo</b>. Aqui é o botão <b>direito</b>!"); };
      b.ondblclick = () => { clearTimeout(tClique); if (o === 1 && st.feitos === 1) ok("Duplo clique abriu a pasta!"); };
      b.oncontextmenu = e => { e.preventDefault(); if (o === 2 && st.feitos === 2) { menu.hidden = false; ui.msg("", "Abriu o menu! Agora escolha <b>Abrir</b> com o botão esquerdo."); } else errou("O botão direito abre um menu de opções. Leia o que o desafio pede."); }; });
    menu.querySelector("button").onclick = () => ok("Botão direito → menu → Abrir. 🎁");
    ui.bRobo.onclick = () => { if (st.feitos >= 3) return; st.robo++; ctx.salvar(); demo(ui.demoBox, TAR[st.feitos].robo); ui.calmo(); };
    mostrar(); }

  /* ---------- estilo ---------- */
  const css = `
  .tg{display:grid;gap:12px}
  .tg-cab{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:var(--cartao2,#f1f5f9);border-radius:14px;padding:10px 14px}
  .tg-ic{font-size:2rem}
  .tg-bau{display:flex;gap:6px;margin-left:auto;flex-wrap:wrap}
  .tg-bau span{width:42px;height:42px;display:grid;place-items:center;border:3px dashed #94a3b8;border-radius:10px;font:800 1.3rem system-ui;color:#94a3b8;background:#fff}
  .tg-bau span.tem{border:3px solid #f59e0b;background:#fef3c7;color:#92400e}
  .tg-bau span.vez{border-color:#7c3aed;color:#7c3aed;animation:tgPulsa 1.2s infinite}
  .tg-alvo{text-align:center}
  .tg-pede,.tg-modelo{font-size:1.25rem;font-weight:700;margin:.3em 0}
  .tg-modelo{font-family:ui-monospace,Consolas,monospace;background:#fff;border:2px solid #cbd5e1;border-radius:10px;padding:.5em;color:#0f172a;white-space:pre-wrap}
  .tg-sim{display:inline-grid;place-items:center;min-width:1.8em;height:1.8em;font-size:1.8rem;background:#ede9fe;border:3px solid #7c3aed;border-radius:12px;color:#5b21b6;vertical-align:middle}
  .tg-campo input{font:700 2rem ui-monospace,Consolas,monospace;text-align:center;width:min(220px,90%);padding:.3em;border:3px solid #334155;border-radius:14px}
  .tg-campo.larga input{width:min(640px,100%);text-align:left;font-size:1.4rem}
  .tg-in:focus{outline:4px solid #7c3aed55;border-color:#7c3aed}
  .tg-in.tg-acertou{border-color:#16a34a;background:#dcfce7}
  .tg-cmp{font:600 1.2rem ui-monospace,Consolas,monospace;white-space:pre-wrap;margin:.2em 0}
  .tg-ok{color:#15803d;background:#dcfce7}.tg-x{color:#fff;background:#dc2626;text-decoration:underline}.tg-falta{color:#94a3b8}
  .tg-tempo{min-height:1em;color:#64748b}
  .tg-fb{min-height:1.4em;font-size:1.05rem}.tg-fb.ok{color:#15803d;font-weight:700}.tg-fb.erro{color:#b91c1c}
  .tg-errado{background:#fee2e2;padding:0 .3em;border-radius:6px}
  .tg-acoes{display:flex;justify-content:center}
  .tg-robo{background:#7c3aed;color:#fff;border:0;font-weight:800;font-size:1.05rem;padding:.6em 1.2em;border-radius:999px}
  .tg-robo.tg-pulsa{animation:tgPulsa 1s infinite;box-shadow:0 0 0 6px #c4b5fd}
  @keyframes tgPulsa{50%{transform:scale(1.07)}}
  .tg-esp summary{cursor:pointer;font-weight:700;margin-bottom:6px}
  .tk{display:flex;gap:10px;align-items:flex-start;background:#1f2937;padding:10px;border-radius:14px;overflow-x:auto;user-select:none}
  .tk-bloco{display:grid;gap:4px}.tk-princ{flex:15 1 0;min-width:520px}.tk-ed{flex:3 1 0;min-width:110px;align-self:end}.tk-npw{flex:4 1 0;min-width:140px}
  .tk-lin{display:flex;gap:4px;min-height:36px}
  .tk-k{position:relative;flex-basis:0;min-width:0;background:#e5e7eb;border-radius:6px;box-shadow:0 3px 0 #94a3b8;display:flex;align-items:center;justify-content:center;font:800 .85rem system-ui;color:#0f172a;transition:transform .05s}
  .tk-k i{position:absolute;left:4px;top:1px;font-style:normal;font-size:.75rem}.tk-k i+b{position:absolute;left:4px;bottom:1px;font-size:.75rem}
  .tk-k em{position:absolute;right:3px;bottom:1px;font-style:normal;font-size:.62rem;color:#2563eb}
  .tk-k.tk-txt b{font-size:.62rem}.tk-vazio{visibility:hidden}
  .tk-k.tk-ap{transform:translateY(3px);box-shadow:none;background:#fde047;outline:3px solid #f59e0b}
  .tk-k.tk-segura{background:#fb923c;color:#fff;outline:3px solid #ea580c}
  .tk-k.tk-alvo{background:#2563eb;color:#fff;outline:3px solid #1e3a8a}.tk-k.tk-alvo em{color:#fde047}
  .tk-k.tk-alvo.tk-ap{background:#16a34a}
  .tk-leds{display:flex;justify-content:space-around;margin-bottom:6px}.tk-leds span{font:700 .6rem system-ui;color:#cbd5e1;display:flex;flex-direction:column;align-items:center;gap:2px}
  .tk-leds span::before{content:"";width:10px;height:10px;border-radius:50%;background:#14532d}.tk-leds span.on::before{background:#4ade80;box-shadow:0 0 8px #4ade80}
  .tk-leds-so{flex-direction:column;gap:8px}
  .tk-mini .tk-lin{min-height:30px}
  .tg-demo{border:3px solid #7c3aed;border-radius:16px;padding:10px;background:#f5f3ff}
  .bit-topo{display:flex;gap:10px;align-items:center}.bit-svg{width:64px;flex:none}.bit-svg .bit-ant{animation:tgPisca 1s infinite}@keyframes tgPisca{50%{fill:#fca5a5}}
  .bit-fala{background:#fff;border:2px solid #c4b5fd;border-radius:14px;padding:.6em .9em;font-size:1.1rem;flex:1}
  .bit-palco{display:grid;gap:8px;margin-top:8px}
  .bit-caixa{background:#fff;border:3px solid #334155;border-radius:12px;font:700 1.6rem ui-monospace,Consolas,monospace;padding:.2em .6em;min-height:1.6em;display:flex;align-items:center}
  .bit-cur{width:3px;height:1.2em;background:#0f172a;animation:tgPisca2 1s steps(1) infinite}@keyframes tgPisca2{50%{opacity:0}}
  .bit-bts{display:flex;gap:8px;justify-content:center;margin-top:8px;flex-wrap:wrap}
  .bit-mouse{display:flex;align-items:center;gap:16px;justify-content:center;margin-top:8px}
  .bm-corpo{position:relative;width:70px;height:104px;border:4px solid #0f172a;border-radius:36px;background:#f8fafc;overflow:hidden}
  .bm-e,.bm-d{position:absolute;top:0;width:50%;height:42%;border-bottom:3px solid #0f172a}.bm-e{left:0;border-right:2px solid #0f172a}.bm-d{right:0}
  .bm-esq .bm-e{background:#2563eb}.bm-dir .bm-d{background:#db2777}.bm-txt{font-weight:800;font-size:1.1rem}
  .tg-mesa{position:relative;display:flex;gap:28px;justify-content:center;flex-wrap:wrap;background:linear-gradient(135deg,#1d4ed8,#93c5fd);border-radius:14px;padding:26px;min-height:170px}
  .tg-obj{font-size:3rem;background:transparent;border:3px solid transparent;border-radius:12px;color:#fff;display:flex;flex-direction:column;align-items:center;padding:6px 14px;cursor:default}
  .tg-obj small{font-size:.9rem;font-weight:700}.tg-obj:focus{border-color:#fde047}.tg-obj.feito{opacity:.45}
  .tg-menu{position:absolute;right:20px;bottom:10px;background:#fff;border:2px solid #0f172a;border-radius:10px;display:grid;padding:4px}.tg-menu button{border:0;background:none;text-align:left;padding:.4em 1em;font-weight:700}.tg-menu button:hover{background:#bfdbfe}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
  @media (prefers-reduced-motion: reduce){.tg-bau span.vez,.tg-robo.tg-pulsa,.bit-svg .bit-ant{animation:none}}`;
  const sty = document.createElement("style"); sty.textContent = css; document.head.appendChild(sty);
})();

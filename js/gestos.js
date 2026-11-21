/* ============================================================
   🖱️⌨️ GESTOS: o mousezinho e as teclinhas do passo a passo (21/11/2026, ideia do professor Welington Laignier)
   Princípio da sinalização (Mayer) + dupla codificação (Paivio): junto da palavra ("clique com o botão direito"),
   o desenho mostra QUAL botão do mouse ou QUAL tecla usar. Estilo linha clara (contorno preto, cores vivas).
   P.gesto(tipo, extra, op) → HTML
     tipo: "clique" | "direito" | "duplo" | "arrastar" | "rolarBaixo" | "rolarCima" | "tecla" (extra = "Ctrl+C", "Backspace", "Enter"...)
     op.mini: versão pequena (ao lado da instrução); op.rotulo: false para esconder o texto
   P.gesto.deTexto(html) → descobre o gesto pelo texto da instrução (ou null)
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const NOME = { clique: "Clique", direito: "Botão direito", duplo: "Clique duplo", arrastar: "Segure e arraste", rolarBaixo: "Role para baixo", rolarCima: "Role para cima" };
  // nome de cada tecla como aparece no teclado (e o símbolo que ajuda a achar)
  const TECLA = { backspace: "⌫ Backspace", enter: "Enter ↵", delete: "Delete", del: "Delete", tab: "Tab ⇥", shift: "⇧ Shift", ctrl: "Ctrl", alt: "Alt", esc: "Esc",
    espaco: "Espaço", space: "Espaço", " ": "Espaço", capslock: "Caps Lock", win: "Win", home: "Home", end: "End", f5: "F5", prtsc: "PrtSc",
    arrowup: "↑", arrowdown: "↓", arrowleft: "←", arrowright: "→", cima: "↑", baixo: "↓", esquerda: "←", direita: "→" };
  const nomeTecla = k => { const n = String(k).trim(), s = n.toLowerCase().replace(/[^a-z0-9 ]/g, "") || n; return TECLA[s] || (n.length === 1 ? n.toUpperCase() : n); };
  const MOUSE = (esq, dir, roda, extra) => `<svg class="gs-mouse" viewBox="-30 -24 176 172" aria-hidden="true">
    <path d="M50 6 C22 6 10 24 10 50 L10 88 C10 112 28 124 50 124 C72 124 90 112 90 88 L90 50 C90 24 78 6 50 6Z" fill="#e2e8f0" stroke="#1c1f22" stroke-width="5"/>
    <path class="${esq}" d="M50 8 C24 8 12 25 12 50 L12 56 L50 56 Z" fill="#fff" stroke="#1c1f22" stroke-width="4"/>
    <path class="${dir}" d="M50 8 C76 8 88 25 88 50 L88 56 L50 56 Z" fill="#fff" stroke="#1c1f22" stroke-width="4"/>
    <rect class="${roda}" x="42" y="17" width="16" height="28" rx="8" fill="#cbd5e1" stroke="#1c1f22" stroke-width="4"/>${extra || ""}</svg>`;
  // setas da rodinha: GRANDES, azuis com contorno preto, fora do mouse, 3 em cascata
  const chev = (y, cima, i) => { const d = cima ? `M100 ${y + 20} L118 ${y} L136 ${y + 20}` : `M100 ${y} L118 ${y + 20} L136 ${y}`;
    return `<path class="gs-chev" style="animation-delay:${i * .22}s" d="${d}" fill="none" stroke="#1c1f22" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
    <path class="gs-chev" style="animation-delay:${i * .22}s" d="${d}" fill="none" stroke="#3b82f6" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`; };
  function gesto(tipo, extra, op) {
    op = op || {}; const cls = "gs" + (op.mini ? " gs-mini" : "") + " gs-" + tipo;
    let fig, rot = NOME[tipo] || "";
    if (tipo === "clique") fig = MOUSE("gs-on", "", "");
    else if (tipo === "direito") fig = MOUSE("", "gs-on", "");
    else if (tipo === "duplo") fig = MOUSE("gs-dup", "", "", `<text x="96" y="22" font-size="30" font-weight="900" fill="#1c1f22">2x</text>`);
    else if (tipo === "arrastar") fig = `<span class="gs-anda">${MOUSE("gs-segura", "", "", `<path d="M-22 70 L-6 58 L-6 82 Z M122 70 L106 58 L106 82 Z" fill="#3b82f6" stroke="#1c1f22" stroke-width="4" stroke-linejoin="round"/>`)}</span>`;
    else if (tipo === "rolarBaixo" || tipo === "rolarCima") { const c = tipo === "rolarCima"; fig = MOUSE("", "", "gs-on", [0, 1, 2].map(i => chev(c ? 92 - i * 36 : 8 + i * 36, c, i)).join("")); }
    else if (tipo === "tecla") { const ks = String(extra || "").split("+").map(x => x.trim()).filter(Boolean);
      fig = `<span class="gs-teclas">${ks.map((k, i) => (i ? `<b class="gs-mais">+</b>` : "") + `<kbd class="gs-k${nomeTecla(k).length > 3 ? " larga" : ""}" style="animation-delay:${i * .3}s">${esc(nomeTecla(k))}</kbd>`).join("")}</span>`;
      rot = ks.length > 1 ? "Segure e aperte, na ordem" : "Aperte a tecla"; }
    else return "";
    return `<span class="${cls}" role="img" aria-label="${esc(rot + (extra ? " " + extra : ""))}">${fig}${op.rotulo === false ? "" : `<small class="gs-rot">${esc(rot)}</small>`}</span>`;
  }
  // descobre o gesto pelo texto da instrução: "clique com o botão direito", "dois cliques", "arraste", "role", "aperte Ctrl+C", "Backspace"...
  gesto.deTexto = function (html) {
    const t = String(html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    const at = t.match(/\b(Ctrl|Alt|Shift|Win)\s*\+\s*(Shift\s*\+\s*)?([A-Za-z0-9]+|Tab|Enter|Delete|Esc)\b/);
    if (at) return ["tecla", at[0].replace(/\s+/g, "")];
    const k = t.match(/\b(Backspace|Enter|Delete|Tab|Esc|Caps Lock|Espaço|Barra de espaço|F5|PrtSc|Home|End)\b/i);
    if (/bot[ãa]o direito|clique direito/i.test(t)) return ["direito"];
    if (/duplo|dois cliques|2 cliques|clique-clique/i.test(t)) return ["duplo"];
    if (/arrast/i.test(t)) return ["arrastar"];
    if (/\brol(e|ar|ando)\b|rodinha|scroll/i.test(t)) return [/para cima|subir|suba/i.test(t) ? "rolarCima" : "rolarBaixo"];
    if (k && /\b(aperte|pressione|tecle|tecla|use)\b/i.test(t)) return ["tecla", /barra de espaço/i.test(k[1]) ? "Espaço" : k[1]];
    if (/\bclique\b|\bclicar\b|\bclica\b/i.test(t)) return ["clique"];
    if (k) return ["tecla", k[1]];
    return null;
  };
  P.gesto = gesto;
  if (!document.getElementById("gs-css")) { const s = document.createElement("style"); s.id = "gs-css"; s.textContent = `
.gs{display:inline-flex;flex-direction:column;align-items:center;gap:4px;vertical-align:middle}
.gs-mouse{width:108px;height:106px;overflow:visible}.gs-mini .gs-mouse{width:56px;height:55px}
.gs-rot{font-weight:800;font-size:.85rem;color:#1c1f22;background:#facc15;border:2px solid #1c1f22;border-radius:999px;padding:1px 10px;white-space:nowrap}
.gs-mini .gs-rot{display:none}
.gs .gs-on{animation:gsPisca 1s infinite}.gs .gs-dup{animation:gsDup 1.4s infinite}.gs .gs-segura{fill:#facc15}
@keyframes gsPisca{0%,100%{fill:#facc15}50%{fill:#fff7c2}}
@keyframes gsDup{0%,22%,44%,100%{fill:#fff}11%,33%{fill:#facc15}}
.gs-chev{animation:gsChev 1.1s infinite;opacity:.2}@keyframes gsChev{0%,100%{opacity:.2}35%{opacity:1}}
.gs-anda{display:inline-block;animation:gsAnda 1.8s infinite ease-in-out}@keyframes gsAnda{0%,15%{transform:translateX(-14px)}70%,100%{transform:translateX(14px)}}
.gs-teclas{display:inline-flex;align-items:center;gap:6px;padding:4px 0 8px}
.gs-k{display:inline-flex;align-items:center;justify-content:center;min-width:46px;height:46px;padding:0 10px;border:3px solid #1c1f22;border-radius:10px;background:#fff;box-shadow:0 5px 0 #1c1f22;font:800 1.15rem/1 Inter,system-ui,sans-serif;color:#1c1f22;animation:gsTec 1.8s infinite}
.gs-k.larga{min-width:auto}.gs-mais{font-size:1.3rem;color:#1c1f22}
.gs-mini .gs-k{min-width:30px;height:30px;font-size:.85rem;border-width:2px;box-shadow:0 3px 0 #1c1f22;padding:0 6px}
@keyframes gsTec{0%,12%,62%,100%{transform:none;box-shadow:0 5px 0 #1c1f22;background:#fff}22%,52%{transform:translateY(5px);box-shadow:0 0 0 #1c1f22;background:#facc15}}
@media (prefers-reduced-motion:reduce){.gs *{animation:none!important}.gs .gs-on,.gs .gs-dup{fill:#facc15}.gs-chev{opacity:1}}`; document.head.appendChild(s); }
})();

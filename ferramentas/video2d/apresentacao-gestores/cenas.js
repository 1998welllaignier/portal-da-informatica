/* ================= 6º ano · 2027 · 1º bimestre · Missão 1 · ESPECIAL TECLADO — a caça ao tesouro na Cidade Teclado =================
   Pedido do professor (16/11/2026): varredura completa do teclado ABNT2 da escola (Esc, F1–F12, Print Screen, acentos, Shift,
   AltGr, Ç, Backspace, Delete, Insert, setas, numérico, Num/Caps/Scroll Lock com as luzinhas), lúdico, problema → solução.
   O robozinho assistente aparece aqui e depois nos jogos do portal ("Me ajuda, robô!"). */
const PEDRO = { camisa: "#f97316" };
const pedro = o => boneco(Object.assign({}, PEDRO, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const PELE = "#f1c27d", AZ = "#2563eb", VD = "#16a34a", RS = "#db2777", LJ = "#ea580c", RX = "#7c3aed", VM = "#dc2626", OURO = "#f59e0b";

/* ---------- etiquetas de alto contraste (mesmo padrão do vídeo v2) ---------- */
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function flecha(x1, y1, x2, y2, k, cor) { if (k <= 0) return; const a = out(cl(k)), x = lerp(x1, x2, a), y = lerp(y1, y2, a), an = Math.atan2(y2 - y1, x2 - x1);
  g.save(); g.lineCap = "round"; [["#0b1020", 12], [cor || AMAR, 6]].forEach(([c, w]) => { g.strokeStyle = c; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x - 10 * Math.cos(an), y - 10 * Math.sin(an)); g.stroke(); });
  if (a > .9) { const p = (r, d) => [x - r * Math.cos(an + d), y - r * Math.sin(an + d)]; g.fillStyle = "#0b1020"; g.beginPath(); g.moveTo(x + 4 * Math.cos(an), y + 4 * Math.sin(an)); g.lineTo(...p(30, .5)); g.lineTo(...p(30, -.5)); g.fill();
    g.fillStyle = cor || AMAR; g.beginPath(); g.moveTo(x, y); g.lineTo(...p(24, .45)); g.lineTo(...p(24, -.45)); g.fill(); } g.restore(); }
function rotulo2(txt, x, y, ax, ay, k, cor, tam) { flecha(x, y, ax, ay, k, cor); placa(txt, x, y, k, cor, tam); }
function anel(x, y, r, t, cor) { g.save(); g.strokeStyle = cor || AMAR; g.lineWidth = 6; g.globalAlpha = .55 + .45 * Math.sin(t * 8); g.beginPath(); g.arc(x, y, r + 4 * Math.sin(t * 8), 0, 7); g.stroke(); g.restore(); }
function texto2(txt, x, y, tam, cor, al) { g.save(); g.font = `800 ${tam}px ${F}`; g.textAlign = al || "center"; g.textBaseline = "middle"; g.lineJoin = "round"; g.lineWidth = 8; g.strokeStyle = "#0b1020"; g.strokeText(txt, x, y); g.fillStyle = cor || "#fff"; g.fillText(txt, x, y); g.restore(); }
function caixaTexto(x, y, w, linhas, t, cursorOn, o) { o = o || {}; const lh = 46, h = Math.max(1, linhas.length) * lh + 26; g.fillStyle = "rgba(0,0,0,.3)"; rr(x + 5, y + 6, w, h, 12); g.fill();
  g.fillStyle = "#fff"; rr(x, y, w, h, 12); g.fill(); g.strokeStyle = o.borda || "#0f172a"; g.lineWidth = 3; rr(x, y, w, h, 12); g.stroke();
  g.fillStyle = "#0f172a"; g.font = `700 34px ${F}`; g.textAlign = "left"; g.textBaseline = "alphabetic";
  linhas.forEach((l, i) => g.fillText(l, x + 22, y + 48 + i * lh));
  const ul = linhas[linhas.length - 1] || "", cw = g.measureText(o.cursorAntes != null ? ul.slice(0, o.cursorAntes) : ul).width;
  if (cursorOn !== false && Math.floor(t * 2.4) % 2 === 0) { g.fillStyle = o.corCursor || "#0f172a"; g.fillRect(x + 24 + cw, y + 18 + (linhas.length - 1) * lh, 4, 38); }
  return { x: x + 24 + cw, y: y + 18 + (linhas.length - 1) * lh + 19 }; }
/* um símbolo grande que "nasce" com brilho */
function simbolo(ch, x, y, k, tam, cor) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s);
  g.globalAlpha = .35 * cl(k); g.fillStyle = cor || AMAR; g.beginPath(); g.arc(0, 0, tam * .75, 0, 7); g.fill(); g.globalAlpha = 1;
  texto2(ch, 0, tam * .04, tam, cor || AMAR); g.restore(); }
function contagem(t, t3, t2, t1) { const n = t > t1 ? 1 : t > t2 ? 2 : t > t3 ? 3 : 0; if (!n) return; const t0 = n === 3 ? t3 : n === 2 ? t2 : t1, k = seg(t, t0, t0 + .35);
  g.save(); g.globalAlpha = 1 - seg(t, t0 + .5, t0 + .9) * .7; texto2(String(n), 640, 300, 170 * back(k), n === 1 ? VM : AMAR); g.restore(); }

/* ================= TECLADO ABNT2 COMPLETO (o da escola) =================
   ids = KeyboardEvent.code (os mesmos que o portal usa nos jogos). Cada tecla: base, shift (andar de cima), altgr (cantinho). */
const TK = (() => { const L = [], u = 40;
  const add = (id, x, y, w, h, b, s, a, reg) => L.push({ id, x: x * u, y: y * u, w: w * u - 5, h: (h || 1) * u - 5, b, s, a, reg });
  // fileira das funções
  add("Escape", 0, 0, 1, 1, "Esc", null, null, "fun");
  for (let i = 1; i <= 12; i++) add("F" + i, 2 + (i - 1) + (i > 4 ? .5 : 0) + (i > 8 ? .5 : 0), 0, 1, 1, "F" + i, null, null, "fun");
  add("PrintScreen", 15.5, 0, 1, 1, "PrtSc", null, null, "fun"); add("ScrollLock", 16.5, 0, 1, 1, "ScrLk", null, null, "fun"); add("Pause", 17.5, 0, 1, 1, "Pause", null, null, "fun");
  // bloco principal
  const r1 = [["Backquote", "'", "\""], ["Digit1", "1", "!", "¹"], ["Digit2", "2", "@", "²"], ["Digit3", "3", "#", "³"], ["Digit4", "4", "$", "£"], ["Digit5", "5", "%", "¢"], ["Digit6", "6", "¨", "¬"],
    ["Digit7", "7", "&"], ["Digit8", "8", "*"], ["Digit9", "9", "("], ["Digit0", "0", ")"], ["Minus", "-", "_"], ["Equal", "=", "+", "§"]];
  r1.forEach(([id, b, s, a], i) => add(id, i, 1.5, 1, 1, b, s, a, "num")); add("Backspace", 13, 1.5, 2, 1, "⟵", null, null, "mod");
  add("Tab", 0, 2.5, 1.5, 1, "Tab", null, null, "mod");
  "QWERTYUIOP".split("").forEach((c, i) => add("Key" + c, 1.5 + i, 2.5, 1, 1, c, null, { Q: "/", W: "?", E: "°" }[c], "let"));
  add("BracketLeft", 11.5, 2.5, 1, 1, "´", "`", null, "let"); add("BracketRight", 12.5, 2.5, 1, 1, "[", "{", "ª", "let");
  add("Enter", 13.5, 2.5, 1.5, 2, "Enter", null, null, "mod");
  add("CapsLock", 0, 3.5, 1.75, 1, "Caps", null, null, "mod");
  "ASDFGHJKL".split("").forEach((c, i) => add("Key" + c, 1.75 + i, 3.5, 1, 1, c, null, null, "let"));
  add("Semicolon", 10.75, 3.5, 1, 1, "Ç", null, null, "let"); add("Quote", 11.75, 3.5, 1, 1, "~", "^", null, "let"); add("Backslash", 12.75, 3.5, 1, 1, "]", "}", "º", "let");
  add("ShiftLeft", 0, 4.5, 1.25, 1, "⇧", null, null, "mod"); add("IntlBackslash", 1.25, 4.5, 1, 1, "\\", "|", null, "let");
  "ZXCVBNM".split("").forEach((c, i) => add("Key" + c, 2.25 + i, 4.5, 1, 1, c, null, null, "let"));
  add("Comma", 9.25, 4.5, 1, 1, ",", "<", null, "let"); add("Period", 10.25, 4.5, 1, 1, ".", ">", null, "let"); add("Slash", 11.25, 4.5, 1, 1, ";", ":", null, "let"); add("IntlRo", 12.25, 4.5, 1, 1, "/", "?", "°", "let");
  add("ShiftRight", 13.25, 4.5, 1.75, 1, "⇧", null, null, "mod");
  [["ControlLeft", 1.5, "Ctrl"], ["MetaLeft", 1.25, "win"], ["AltLeft", 1.25, "Alt"], ["Space", 5.75, ""], ["AltRight", 1.25, "AltGr"], ["MetaRight", 1.25, "win"], ["ContextMenu", 1.25, "menu"], ["ControlRight", 1.5, "Ctrl"]]
    .reduce((x, [id, w, b]) => { add(id, x, 5.5, w, 1, b, null, null, id === "Space" ? "let" : "mod"); return x + w; }, 0);
  // bloco de edição e setas (a Praça das Setas)
  [["Insert", "Ins"], ["Home", "Home"], ["PageUp", "PgUp"]].forEach(([id, b], i) => add(id, 15.5 + i, 1.5, 1, 1, b, null, null, "ed"));
  [["Delete", "Del"], ["End", "End"], ["PageDown", "PgDn"]].forEach(([id, b], i) => add(id, 15.5 + i, 2.5, 1, 1, b, null, null, "ed"));
  add("ArrowUp", 16.5, 4.5, 1, 1, "▲", null, null, "ed"); add("ArrowLeft", 15.5, 5.5, 1, 1, "◀", null, null, "ed"); add("ArrowDown", 16.5, 5.5, 1, 1, "▼", null, null, "ed"); add("ArrowRight", 17.5, 5.5, 1, 1, "▶", null, null, "ed");
  // teclado numérico (o Bairro da Calculadora)
  [["NumLock", "Num"], ["NumpadDivide", "/"], ["NumpadMultiply", "*"], ["NumpadSubtract", "-"]].forEach(([id, b], i) => add(id, 19 + i, 1.5, 1, 1, b, null, null, "np"));
  [["7", "Home"], ["8", "▲"], ["9", "PgUp"]].forEach(([n, s], i) => add("Numpad" + n, 19 + i, 2.5, 1, 1, n, null, s, "np")); add("NumpadAdd", 22, 2.5, 1, 1, "+", null, null, "np");
  [["4", "◀"], ["5", ""], ["6", "▶"]].forEach(([n, s], i) => add("Numpad" + n, 19 + i, 3.5, 1, 1, n, null, s, "np")); add("NumpadComma", 22, 3.5, 1, 1, ".", null, null, "np");
  [["1", "End"], ["2", "▼"], ["3", "PgDn"]].forEach(([n, s], i) => add("Numpad" + n, 19 + i, 4.5, 1, 1, n, null, s, "np")); add("NumpadEnter", 22, 4.5, 1, 2, "Ent", null, null, "np");
  add("Numpad0", 19, 5.5, 2, 1, "0", null, "Ins", "np"); add("NumpadDecimal", 21, 5.5, 1, 1, ",", null, "Del", "np");
  const by = {}; L.forEach(k => by[k.id] = k);
  return { L, u, by, W: 23 * u, H: 6.5 * u, LED: [["num", "Num", 19.4], ["caps", "Caps", 20.9], ["scroll", "Scroll", 22.4]].map(([id, n, x]) => ({ id, n, x: x * u, y: .5 * u })) }; })();
const REGCOR = { fun: "#facc15", num: "#60a5fa", let: "#60a5fa", mod: "#fb923c", ed: "#4ade80", np: "#c084fc" };
/* posição na tela do centro de uma tecla; câmera: (cx, cy) = onde fica o centro do teclado; s = escala */
function tkPos(id, cx, cy, s) { const k = TK.by[id]; return [cx + s * (k.x + k.w / 2 - TK.W / 2), cy + s * (k.y + k.h / 2 - TK.H / 2)]; }
/* câmera que centraliza (fx, fy) em coordenadas do teclado no ponto (sx, sy) da tela */
function tkCam(fx, fy, s, sx, sy) { return [sx - s * (fx - TK.W / 2), sy - s * (fy - TK.H / 2)]; }
function tkCamId(id, s, sx, sy) { const k = TK.by[id]; return tkCam(k.x + k.w / 2, k.y + k.h / 2, s, sx, sy); }
function tk(cx, cy, s, o) { o = o || {}; g.save(); g.translate(cx, cy); g.scale(s, s); g.translate(-TK.W / 2, -TK.H / 2);
  g.fillStyle = "rgba(0,0,0,.35)"; rr(-16 + 10, -16 + 12, TK.W + 32, TK.H + 32, 20); g.fill(); g.fillStyle = "#1f2937"; rr(-16, -16, TK.W + 32, TK.H + 32, 20); g.fill();
  g.strokeStyle = "#0b1020"; g.lineWidth = 4; rr(-16, -16, TK.W + 32, TK.H + 32, 20); g.stroke();
  // luzinhas (postes de luz)
  TK.LED.forEach(l => { const on = (o.leds || {})[l.id]; g.fillStyle = on ? "#4ade80" : "#14532d"; g.beginPath(); g.arc(l.x, l.y - 4, 7, 0, 7); g.fill();
    if (on) { g.save(); g.globalAlpha = .45; g.fillStyle = "#86efac"; g.beginPath(); g.arc(l.x, l.y - 4, 15, 0, 7); g.fill(); g.restore(); }
    g.fillStyle = "#cbd5e1"; g.font = `700 10px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(l.n, l.x, l.y + 12); });
  TK.L.forEach(k => { if (o.lim) { const X1 = cx + s * (k.x - TK.W / 2), Y1 = cy + s * (k.y - TK.H / 2), X2 = X1 + s * k.w, Y2 = Y1 + s * k.h; if (X2 < o.lim[0] || X1 > o.lim[2] || Y2 < o.lim[1] || Y1 > o.lim[3]) return; if (Y2 > 548) return; }
    const dest = (o.cor || {})[k.id], ap = (o.ap || {})[k.id], dim = (o.dim && !dest) || (o.so && !o.so.includes(k.reg) && !dest);
    const X = k.x, Y = k.y + (ap ? 3 : 0);
    let fundo = dest || (o.regioes && o.regioes.includes(k.reg) ? REGCOR[k.reg] : "#e5e7eb"); if (dim) fundo = "#475569";
    if (!ap) { g.fillStyle = "#94a3b8"; rr(X, Y + 3, k.w, k.h, 6); g.fill(); }
    g.fillStyle = fundo; rr(X, Y, k.w, k.h, 6); g.fill();
    if (ap) { g.strokeStyle = AMAR; g.lineWidth = 3; rr(X, Y, k.w, k.h, 6); g.stroke(); }
    const ink = dest && dest !== "#fde047" && dest !== AMAR && dest !== "#4ade80" ? "#fff" : (dim ? "#94a3b8" : "#0f172a");
    g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "middle";
    const big = k.b.length <= 1 && !k.s;
    if (k.id === "ShiftLeft" || k.id === "ShiftRight") { g.strokeStyle = ink; g.lineWidth = 2.5; const cx2 = X + 16, cy2 = Y + k.h / 2; g.beginPath(); g.moveTo(cx2, cy2 - 10); g.lineTo(cx2 + 9, cy2); g.lineTo(cx2 + 4, cy2); g.lineTo(cx2 + 4, cy2 + 8); g.lineTo(cx2 - 4, cy2 + 8); g.lineTo(cx2 - 4, cy2); g.lineTo(cx2 - 9, cy2); g.closePath(); g.stroke();
      g.font = `700 10px ${F}`; g.fillText("Shift", X + k.w / 2 + 10, cy2 + 1); }
    else if (k.b === "win") { const cx2 = X + k.w / 2, cy2 = Y + k.h / 2; [[-8, -8], [1, -8], [-8, 1], [1, 1]].forEach(([a, b]) => g.fillRect(cx2 + a, cy2 + b, 7, 7)); }
    else if (k.b === "menu") { const cx2 = X + k.w / 2, cy2 = Y + k.h / 2; g.strokeStyle = ink; g.lineWidth = 2; rr(cx2 - 8, cy2 - 10, 16, 20, 2); g.stroke(); [-4, 0, 4].forEach(d => { g.beginPath(); g.moveTo(cx2 - 4, cy2 + d); g.lineTo(cx2 + 4, cy2 + d); g.stroke(); }); }
    else if (k.s) { g.font = `800 15px ${F}`; g.fillText(k.s, X + 11, Y + 11); g.fillText(k.b, X + 11, Y + k.h - 10); }
    else { g.font = `800 ${big ? 18 : k.b.length > 4 ? 10 : 12}px ${F}`; g.fillText(k.b, X + k.w / 2, Y + k.h / 2 + 1); }
    if (k.a) { const brilha = o.altgr; g.fillStyle = brilha ? "#1d4ed8" : (dim ? "#64748b" : "#2563eb"); g.font = `800 ${k.reg === "np" ? 8 : brilha ? 14 : 11}px ${F}`; g.fillText(k.a, X + k.w - (k.reg === "np" ? 11 : 9), Y + k.h - 9);
      if (brilha && k.reg !== "np") { g.save(); g.strokeStyle = AMAR; g.lineWidth = 2; g.beginPath(); g.arc(X + k.w - 9, Y + k.h - 9, 9, 0, 7); g.stroke(); g.restore(); } }
    if (o.numOff && k.reg === "np" && k.a && !["NumpadDecimal", "Numpad0"].includes(k.id) && k.a) { g.fillStyle = "rgba(124,58,237,.85)"; rr(X, Y, k.w, k.h, 6); g.fill(); g.fillStyle = "#fff"; g.font = `800 ${k.a.length > 2 ? 10 : 16}px ${F}`; g.fillText(k.a, X + k.w / 2, Y + k.h / 2); }
  });
  g.restore(); }
/* tecla gigante (zoom): mostra os andares (térreo, andar de cima, terceiro andar) */
function teclaGrande(x, y, L, o) { o = o || {}; const k = TK.by[o.id] || {}; const b = o.b || k.b, s1 = o.s != null ? o.s : k.s, a = o.a != null ? o.a : k.a; g.save(); g.translate(x, y); const sc = o.sc || 1; g.scale(sc, sc);
  g.fillStyle = "rgba(0,0,0,.35)"; rr(-L / 2 + 8, -L / 2 + 12, L, L, 26); g.fill(); g.fillStyle = "#94a3b8"; rr(-L / 2, -L / 2 + 10, L, L, 26); g.fill();
  g.fillStyle = o.cor || "#f1f5f9"; rr(-L / 2, -L / 2, L, L, 26); g.fill(); g.strokeStyle = "#0f172a"; g.lineWidth = 5; rr(-L / 2, -L / 2, L, L, 26); g.stroke();
  const andar = o.andar; // 0 térreo, 1 de cima, 2 terceiro
  const ce = (lx, ly, txt, n, cor) => { if (andar === n) { g.fillStyle = "rgba(250,204,21,.55)"; g.beginPath(); g.arc(lx, ly, L * .17, 0, 7); g.fill(); } g.fillStyle = cor; g.textAlign = "center"; g.textBaseline = "middle"; g.font = `800 ${L * .26}px ${F}`; g.fillText(txt, lx, ly); };
  if (s1) { ce(-L * .22, -L * .2, s1, 1, "#0f172a"); ce(-L * .22, L * .22, b, 0, "#0f172a"); } else ce(-L * .1, -L * .05, b, 0, "#0f172a");
  if (a) { g.save(); ce(L * .26, L * .26, a, 2, "#2563eb"); g.restore(); }
  g.restore(); }

/* ---------- robozinho assistente: cabeça-tela, antena, braços que apontam e acenam ---------- */
function ajudante(x, y, s, t, o) { o = o || {}; g.save(); g.translate(x, y); g.scale(s, s); const b = Math.sin(t * 5) * 4; g.translate(0, b);
  g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.ellipse(0, 112 - b, 60, 12, 0, 0, 7); g.fill();
  // braços
  const braco = (lado, ang) => { g.save(); g.translate(lado * 52, 18); g.rotate(ang); g.strokeStyle = "#0b1020"; g.lineWidth = 16; g.lineCap = "round"; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 52); g.stroke(); g.strokeStyle = "#94a3b8"; g.lineWidth = 10; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 52); g.stroke();
    g.fillStyle = "#38bdf8"; g.strokeStyle = "#0b1020"; g.lineWidth = 4; g.beginPath(); g.arc(0, 58, 11, 0, 7); g.fill(); g.stroke(); g.restore(); };
  braco(-1, o.bracoE != null ? o.bracoE : .35 + Math.sin(t * 3) * .08); braco(1, o.bracoD != null ? o.bracoD : -.35 - Math.sin(t * 3) * .08);
  // corpo
  g.fillStyle = "#3b82f6"; g.strokeStyle = "#0b1020"; g.lineWidth = 5; rr(-50, -6, 100, 92, 24); g.fill(); g.stroke();
  g.fillStyle = "#fde047"; g.beginPath(); g.arc(0, 30, 13, 0, 7); g.fill(); g.stroke(); g.fillStyle = "#0b1020"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("@", 0, 31);
  g.fillStyle = "#1e3a8a"; rr(-34, 92, 24, 18, 6); g.fill(); rr(10, 92, 24, 18, 6); g.fill();
  // cabeça
  g.fillStyle = "#e2e8f0"; rr(-62, -100, 124, 92, 28); g.fill(); g.stroke(); g.fillStyle = "#0f172a"; rr(-48, -86, 96, 64, 18); g.fill();
  g.strokeStyle = "#0b1020"; g.lineWidth = 5; g.beginPath(); g.moveTo(0, -100); g.lineTo(0, -126); g.stroke(); g.fillStyle = Math.sin(t * 6) > 0 ? "#ef4444" : "#f87171"; g.beginPath(); g.arc(0, -132, 10, 0, 7); g.fill(); g.stroke();
  const pisc = pisca(t * 1.1); g.fillStyle = "#67e8f9";
  if (o.feliz) { g.strokeStyle = "#67e8f9"; g.lineWidth = 6; g.lineCap = "round"; g.beginPath(); g.arc(-20, -50, 10, Math.PI, 0); g.stroke(); g.beginPath(); g.arc(20, -50, 10, Math.PI, 0); g.stroke(); }
  else { const eh = pisc ? 2 : 13; g.beginPath(); g.ellipse(-20 + (o.olhar || 0) * 4, -56, 9, eh, 0, 0, 7); g.ellipse(20 + (o.olhar || 0) * 4, -56, 9, eh, 0, 0, 7); g.fill(); }
  g.strokeStyle = "#67e8f9"; g.lineWidth = 4; g.lineCap = "round"; g.beginPath(); if (o.boca === "o") g.arc(0, -34, 6, 0, 7); else g.arc(0, -40, 12, .3, Math.PI - .3); g.stroke();
  g.fillStyle = "#f472b6"; g.globalAlpha = .6; g.beginPath(); g.arc(-40, -38, 7, 0, 7); g.arc(40, -38, 7, 0, 7); g.fill();
  g.restore(); }

/* ---------- baú do tesouro com 5 espaços ---------- */
const TESOURO = ["@", "#", "%", "&", "°"];
function bau(x, y, s, quantos, t, o) { o = o || {}; g.save(); g.translate(x, y); g.scale(s, s);
  const ab = o.aberto == null ? 1 : o.aberto;
  g.fillStyle = "rgba(0,0,0,.3)"; g.beginPath(); g.ellipse(6, 92, 150, 16, 0, 0, 7); g.fill();
  if (quantos >= 5) { g.save(); g.globalAlpha = .4 + .2 * Math.sin(t * 6); const gr = g.createRadialGradient(0, -20, 10, 0, -20, 200); gr.addColorStop(0, "#fde047"); gr.addColorStop(1, "rgba(253,224,71,0)"); g.fillStyle = gr; g.beginPath(); g.arc(0, -20, 200, 0, 7); g.fill(); g.restore(); }
  // tampa
  g.save(); g.translate(0, -10); g.scale(1, lerp(1, -.55, ab)); g.fillStyle = "#92400e"; g.strokeStyle = "#0b1020"; g.lineWidth = 5; g.beginPath(); g.moveTo(-140, 0); g.lineTo(-140, -40); g.quadraticCurveTo(0, -95, 140, -40); g.lineTo(140, 0); g.closePath(); g.fill(); g.stroke(); g.restore();
  // caixa
  g.fillStyle = "#b45309"; g.strokeStyle = "#0b1020"; g.lineWidth = 5; rr(-140, -10, 280, 100, 10); g.fill(); g.stroke();
  g.fillStyle = OURO; g.fillRect(-140, 20, 280, 12); g.strokeRect(-140, 20, 280, 12); rr(-16, 6, 32, 40, 6); g.fill(); g.stroke();
  // espaços dos símbolos (em cima do baú aberto)
  TESOURO.forEach((c, i) => { const sx = -120 + i * 60, sy = -60; const tem = i < quantos;
    g.fillStyle = tem ? "#fef3c7" : "rgba(255,255,255,.18)"; g.strokeStyle = tem ? OURO : "rgba(255,255,255,.55)"; g.lineWidth = 4; g.setLineDash(tem ? [] : [6, 5]); rr(sx - 25, sy - 25, 50, 50, 12); g.fill(); g.stroke(); g.setLineDash([]);
    g.fillStyle = tem ? "#92400e" : "rgba(255,255,255,.45)"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(c, sx, sy + 2); });
  if (o.contador !== false) { g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(`${quantos} de 5`, 0, 70); }
  g.restore(); }
/* símbolo voando da tecla até o baú */
function voa(ch, x1, y1, x2, y2, k) { if (k <= 0 || k >= 1) return; const a = io(k), x = lerp(x1, x2, a), y = lerp(y1, y2, a) - Math.sin(a * Math.PI) * 140; simbolo(ch, x, y, 1, 54 - 14 * a); }

/* ---------- monitor simples com conteúdo ---------- */
function telaPC(x, y, w, h, conteudo) { g.fillStyle = "rgba(0,0,0,.35)"; rr(x - 14 + 8, y - 14 + 10, w + 28, h + 28, 16); g.fill(); g.fillStyle = "#111827"; rr(x - 14, y - 14, w + 28, h + 28, 16); g.fill();
  g.fillStyle = "#374151"; g.fillRect(x + w / 2 - 24, y + h + 14, 48, 30); rr(x + w / 2 - 90, y + h + 40, 180, 12, 6); g.fill(); g.save(); g.beginPath(); g.rect(x, y, w, h); g.clip(); g.fillStyle = "#fff"; g.fillRect(x, y, w, h); conteudo(x, y, w, h); g.restore(); }
function emailTela(x, y, w, h, para, t, o) { o = o || {}; g.fillStyle = "#f1f5f9"; g.fillRect(x, y, w, h); g.fillStyle = "#2563eb"; g.fillRect(x, y, w, 46); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText("Novo e-mail", x + 18, y + 24);
  g.fillStyle = "#0f172a"; g.font = `700 20px ${F}`; g.fillText("Para:", x + 18, y + 84); const c = caixaTexto(x + 80, y + 60, w - 100, [para], t, o.cursor, { corCursor: o.corCursor });
  g.fillStyle = "#0f172a"; g.font = `700 20px ${F}`; g.fillText("Assunto: Trabalho de Informática", x + 18, y + 158);
  g.fillStyle = o.enviado ? VD : "#2563eb"; rr(x + w - 170, y + h - 64, 150, 46, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(o.enviado ? "✓ Enviado" : "Enviar", x + w - 95, y + h - 40);
  return c; }

const FL = [
 "Portal da Informática: a aula de Informática inteira em um só lugar.",
 "Toda escola conhece este desafio. A aula de Informática acontece no contraturno, a presença oscila, e muitos alunos chegam sem nunca ter usado um computador. A apostila de papel se perde, a correção demora, e, no fim do bimestre, a única prova do que cada aluno fez é o diário de classe.",
 "Foi para resolver isso que nasceu o Portal da Informática, criado pelo professor Welington Laignier. Ele funciona no navegador, nos computadores que a escola já tem. Não precisa instalar nada e não tem custo de licença.",
 "Cada aula é uma missão, alinhada à BNCC Computação. O aluno lê o conteúdo, e toda palavra técnica pode ser clicada para ver o significado. Na seção Onde eu uso isso?, ele descobre para que aquilo serve no dia a dia.",
 "Depois, ele pratica. Os simuladores reproduzem o Windows, o Paint, o e-mail e o navegador, dentro da própria página. O aluno treina sem medo de errar e sem risco para os computadores da escola.",
 "As atividades têm correção automática. O aluno sabe na hora se acertou, e, quando trava, clica em: me ajuda, robô! O Bit, o robozinho assistente, mostra como se faz, numa pequena simulação, e o aluno repete.",
 "O resultado é autonomia. O aluno avança sozinho, no próprio ritmo, e o professor deixa de ser o único caminho. Ele passa a ser o mediador, livre para atender quem mais precisa.",
 "E tem um ingrediente a mais: o engajamento. Cada acerto vale pontos. Quem lidera a turma ganha a coroa de rei da sala, e, no fim da aula, o pódio aparece no projetor. Quem termina tudo ainda desbloqueia o bônus relâmpago. O aluno quer participar.",
 "O portal também acompanha o calendário escolar. Nas datas importantes, como agora, na Semana da Consciência Negra, o tema entra sozinho: o portal muda de visual e, ao entrar, o aluno lê cartões com curiosidades sobre a data. Para começar a aula, ele resolve um pequeno desafio, que pode ser um caça-palavras, um jogo da memória ou um quiz, e só consegue quem leu. Assim, cada data comemorativa vira aprendizado, em todas as turmas.",
 "Agora, a parte da gestão. Tudo o que o aluno faz fica registrado, com data e hora. A chamada é feita sozinha: quem entrou no portal já aparece como presente.",
 "Durante a aula, o painel Ao vivo mostra quem está avançando, quem está parado há mais de dez minutos e quem saiu da tela cheia. O professor sabe exatamente onde intervir.",
 "O Panorama mostra, turma por turma, o que já foi estudado e o que falta. A prova e a recuperação são feitas no próprio portal, e a nota vai direto para o boletim.",
 "Ninguém fica para trás. Alunos que precisam de mais apoio usam a Trilha Passo a Passo, uma versão mais detalhada da mesma missão. Os alunos com plano educacional individualizado ganham anotações de apoio que só o professor vê. E quem estuda em casa recebe as tarefas e é acompanhado do mesmo jeito.",
 "Segurança e foco também foram pensados. O aluno entra só com um código de quatro números, sem e-mail e sem senha. Nomes e notas ficam visíveis apenas no painel do professor. As tarefas abrem só no horário da aula, e o professor pode exigir tela cheia, para que a atenção fique na atividade.",
 "Em resumo: mais autonomia para o aluno, mais tempo de qualidade para o professor e mais informação para a gestão. Tudo isso com os recursos que a escola já tem.",
 "O Portal da Informática já funciona na Escola Municipal de Ensino Fundamental Juscelino Kubitschek, em Curionópolis, e pode chegar a outras escolas e a toda a rede municipal. Professor Welington Laignier: tecnologia a serviço da aprendizagem."
];
/* tempo de uma palavra da fala i, no relógio da cena. Com window.FALA (fala_sync.py), usa o momento REAL em que a palavra é dita;
   sem ela, a estimativa por velocidade média. O render escala o tempo da cena por est/DUR, por isso a conversão. */
const E = (i, w, n) => { const e0 = em(FL[i], w, n); const F = window.FALA && window.FALA[i]; if (!F || !F.w) return e0;
  try { const idx = Math.round((e0 - .35) * 2.55), tr = F.w[Math.min(idx, F.w.length - 1)]; return tr * est(FL[i]) / DUR[i]; } catch (e) { return e0; } };
function predioFundo(t) { for (let i = 0; i < 16; i++) { const x = 40 + i * 78, h = 120 + (rnd(i) * 180 | 0); g.fillStyle = i % 2 ? "rgba(96,165,250,.16)" : "rgba(192,132,252,.14)"; rr(x, 560 - h, 64, h, 10); g.fill();
    g.fillStyle = "rgba(253,224,71,.28)"; for (let j = 0; j < h / 34 - 1; j++) if ((i * 7 + j * 3 + Math.floor(t * 1.5)) % 5) g.fillRect(x + 14 + (j % 2) * 22, 560 - h + 14 + j * 30, 12, 12); } }
/* ================= APRESENTAÇÃO DO PORTAL DA INFORMÁTICA — vídeo A, para gestores (16/11/2026) =================
   Misto: animação 2D + telas reais do portal (capturadas com aluna de teste, em telas/). */
const IMG = {}; Object.keys(TELAS).forEach(n => { const i = new Image(); i.src = TELAS[n]; IMG[n] = i; });
/* janela de navegador com uma tela real; z = { x, y, s } zoom (centro em fração da imagem, escala) */
function navegador(x, y, w, h, nome, k, z) { if (k <= 0) return; const s0 = back(cl(k)); g.save(); g.translate(x + w / 2, y + h / 2); g.scale(s0, s0); g.translate(-(x + w / 2), -(y + h / 2));
  g.fillStyle = "rgba(0,0,0,.4)"; rr(x + 8, y + 12, w, h, 14); g.fill(); g.fillStyle = "#1f2937"; rr(x, y, w, h, 14); g.fill();
  [VM, OURO, VD].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(x + 18 + i * 18, y + 17, 6, 0, 7); g.fill(); });
  g.fillStyle = "#374151"; rr(x + 80, y + 7, w - 100, 21, 10); g.fill(); g.fillStyle = "#e5e7eb"; g.font = `600 13px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText("🔒 portal.professorwell.com.br", x + 92, y + 18);
  const ix = x + 6, iy = y + 34, iw = w - 12, ih = h - 40, im = IMG[nome];
  g.save(); rr(ix, iy, iw, ih, 8); g.clip(); g.fillStyle = "#fff"; g.fillRect(ix, iy, iw, ih);
  if (im && im.complete && im.naturalWidth) { const W0 = im.naturalWidth, H0 = im.naturalHeight; let sw = W0, sh = H0, sx = 0, sy = 0;
    if (z) { sw = W0 / z.s; sh = H0 / z.s; sx = Math.max(0, Math.min(W0 - sw, z.x * W0 - sw / 2)); sy = Math.max(0, Math.min(H0 - sh, z.y * H0 - sh / 2)); }
    const r = Math.max(iw / sw, ih / sh); const dw = sw * r, dh = sh * r; g.drawImage(im, sx, sy, sw, sh, ix + (iw - dw) / 2, iy, dw, dh); }
  g.restore(); g.restore(); }
const zl = (a, b, k) => ({ x: lerp(a.x, b.x, io(cl(k))), y: lerp(a.y, b.y, io(cl(k))), s: lerp(a.s, b.s, io(cl(k))) });
const Z0 = { x: .5, y: .5, s: 1 };
/* cartão de painel desenhado (mock do painel do professor, com nomes de teste) */
function painelMock(x, y, w, h, titulo, k, corpo) { if (k <= 0) return; const s0 = back(cl(k)); g.save(); g.translate(x + w / 2, y + h / 2); g.scale(s0, s0); g.translate(-(x + w / 2), -(y + h / 2));
  g.fillStyle = "rgba(0,0,0,.35)"; rr(x + 8, y + 10, w, h, 16); g.fill(); g.fillStyle = "#fff"; rr(x, y, w, h, 16); g.fill();
  g.fillStyle = "#1e293b"; rr(x, y, w, 52, 16); g.fill(); g.fillRect(x, y + 30, w, 22); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(titulo, x + 20, y + 27);
  g.save(); g.beginPath(); g.rect(x, y + 52, w, h - 52); g.clip(); corpo(x, y + 52, w, h - 52); g.restore(); g.restore(); }
function chipTxt(txt, x, y, cor, fundo, tam) { g.font = `800 ${tam || 16}px ${F}`; const w = g.measureText(txt).width + 18; g.fillStyle = fundo; rr(x, y - 14, w, 28, 14); g.fill(); g.fillStyle = cor; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(txt, x + 9, y + 1); return w; }
const ALUNOS = ["Ana Beatriz", "Bruno Lima", "Carla Souza", "Davi Rocha", "Elisa Matos", "Felipe Costa"];
function aluno(x, y, s, t, o) { boneco(Object.assign({ x, y, s, camisa: "#2563eb", pisca: pisca(t + (o && o.f || 0)) }, o || {})); }
function computador(x, y, s, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#111827"; rr(-60, -90, 120, 80, 8); g.fill(); g.fillStyle = cor || "#3b82f6"; rr(-52, -82, 104, 64, 4); g.fill(); g.fillStyle = "#374151"; g.fillRect(-8, -10, 16, 16); rr(-34, 4, 68, 8, 4); g.fill(); g.restore(); }
function podio(x, y, t, k) { if (k <= 0) return; const L = [[0, 150, "1º", OURO], [-170, 105, "2º", "#94a3b8"], [170, 75, "3º", "#b45309"]];
  L.forEach(([dx, hh, r, c], i) => { const kk = back(seg(k, i * .15, i * .15 + .5)); if (kk <= 0) return; const H2 = hh * kk; g.fillStyle = c; rr(x + dx - 70, y - H2, 140, H2, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 34px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(r, x + dx, y - H2 / 2);
    aluno(x + dx, y - H2, .7, t, { camisa: ["#f97316", "#8b5cf6", "#16a34a"][i], braco: -2.5 + Math.sin(t * 6 + i) * .2, bracoE: 2.5, f: i }); });
  const kc = seg(k, .6, 1); if (kc > 0) { g.save(); g.translate(x, y - 150 - 190 - Math.sin(t * 3) * 5); g.scale(kc, kc); g.fillStyle = OURO; g.strokeStyle = "#78350f"; g.lineWidth = 3; g.beginPath(); g.moveTo(-30, 14); g.lineTo(-30, -10); g.lineTo(-15, 2); g.lineTo(0, -18); g.lineTo(15, 2); g.lineTo(30, -10); g.lineTo(30, 14); g.closePath(); g.fill(); g.stroke(); g.restore(); } }

const CENAS = [
 // 0 — abertura
 { chip: "", fala: FL[0], sfxF: () => [[.05, "whoosh"], [.6, "pop"], [1.4, "sino"], [2.4, "pop"]],
   draw(t) { fundoEscuro(t, "#0f172a"); predioFundo(t);
     navegador(420, 150, 440, 262, "1-comecar", seg(t, .4, 1));
     ["📚", "✔️", "🏆", "📊", "🤖", "🎓"].forEach((e, i) => { const a = t * .7 + i * 1.047, kk = seg(t, .8 + i * .1, 1.2 + i * .1); if (kk <= 0) return; g.save(); g.globalAlpha = kk; g.font = `48px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(e, 640 + Math.cos(a) * 340, 280 + Math.sin(a) * 120); g.restore(); });
     abertura(t, "APRESENTAÇÃO", "Portal da Informática", "A AULA DE INFORMÁTICA", "INTEIRA EM UM SÓ LUGAR", 2.0); } },
 // 1 — o desafio de toda escola
 { chip: "O DESAFIO", fala: FL[1], sfxF: () => [[.1, "whoosh"], [E(1, "contraturno"), "pop"], [E(1, "nunca"), "misterio"], [E(1, "apostila"), "whoosh"], [E(1, "correção"), "pop"], [E(1, "diário"), "ding"]],
   draw(t) { fundoEscuro(t, "#1e293b"); const tc = E(1, "contraturno"), tn = E(1, "nunca"), ta = E(1, "apostila"), tco = E(1, "correção"), td = E(1, "diário");
     palavra("TODA ESCOLA CONHECE ESTE DESAFIO", 640, 115, seg(t, .1, .5), 40); const tau = E(1, "aula"), tpr = E(1, "presença");
     // presença oscila: cadeiras vazias
     const k1 = back(seg(t, tau, tau + .5)); if (k1 > 0) { g.save(); g.translate(190, 300); g.scale(k1, k1); for (let i = 0; i < 6; i++) { const cheia = (i * 7 + Math.floor(t * 1.5)) % 3 !== 0; g.fillStyle = cheia ? "#60a5fa" : "rgba(255,255,255,.18)"; rr(-110 + (i % 3) * 78, -60 + Math.floor(i / 3) * 90, 60, 60, 10); g.fill(); } g.restore(); placa("🕐 no contraturno", 190, 430, seg(t, tc, tc + .4), AZ, 20); placa("presença oscila", 190, 485, seg(t, tpr, tpr + .4), "#475569", 20); }
     // aluno que nunca usou computador
     if (t > tn) { computador(470, 380, 1.1, "#1e3a8a"); aluno(400, 470, .85, t, { braco: -2.3, bracoE: 2.3, boca: "o" }); texto2("?", 470, 250, 70 * back(seg(t, tn, tn + .4)), AMAR); }
     // papel que se perde
     if (t > ta) for (let i = 0; i < 5; i++) { const kk = seg(t, ta + i * .12, ta + 2.2 + i * .12); g.save(); g.translate(700 + kk * (60 + i * 18), 300 - kk * (90 + i * 14)); g.rotate(kk * (2 + i)); g.globalAlpha = Math.max(0, 1 - kk); g.fillStyle = "#fff"; g.fillRect(-26, -34, 52, 68); g.fillStyle = "#94a3b8"; for (let j = 0; j < 4; j++) g.fillRect(-18, -24 + j * 12, 36, 4); g.restore(); }
     if (t > tco) placa("⏳ correção demora", 770, 485, seg(t, tco, tco + .4), LJ, 20);
     if (t > td) { const kd = back(seg(t, td, td + .5)); g.save(); g.translate(1080, 300); g.scale(kd, kd); livro(0, 0, 1.3, "#7c2d12"); g.restore(); placa("o único registro: o diário", 1060, 430, kd, VM, 20); } } },
 // 2 — a solução
 { chip: "A SOLUÇÃO", fala: FL[2], sfxF: () => [[.1, "whoosh"], [E(2, "criado"), "ding"], [E(2, "navegador"), "pop"], [E(2, "instalar"), "pop"], [E(2, "licença"), "pop"]],
   draw(t) { fundoEscuro(t, "#14532d"); navegador(90, 90, 700, 400, "1-comecar", seg(t, .1, .7), zl(Z0, { x: .5, y: .35, s: 1.35 }, seg(t, .8, 5)));
     if (t < E(2, "criado")) palavra("PORTAL DA INFORMÁTICA", 1020, 300, seg(t, .5, 1), 34);
     if (t > E(2, "criado")) placa("Prof. Welington Laignier", 440, 532, seg(t, E(2, "criado"), E(2, "criado") + .4), OURO, 24);
     [["navegador", "✔ Funciona no navegador", AZ], ["instalar", "✔ Não precisa instalar nada", RX], ["licença", "✔ Sem custo de licença", VD]].forEach(([w, txt, c], i) => { const tw = E(2, w); if (t > tw) placa(txt, 1020, 190 + i * 110, seg(t, tw, tw + .4), c, 22); }); } },
 // 3 — a missão: BNCC, palavra explicada, onde eu uso isso
 { chip: "CADA AULA, UMA MISSÃO", fala: FL[3], sfxF: () => [[.1, "whoosh"], [E(3, "bncc"), "ding"], [E(3, "palavra"), "click"], [E(3, "onde"), "pop"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); const tb = E(3, "bncc"), tp = E(3, "palavra"), to = E(3, "onde");
     const nome = t > to ? "3-onde" : t > tp + .4 ? "2-termo" : "1-comecar"; const z = t > to ? Z0 : t > tp + .4 ? { x: .55, y: .4, s: 1.4 } : zl(Z0, { x: .6, y: .38, s: 1.45 }, seg(t, tp - .6, tp + .2));
     navegador(150, 80, 980, 400, nome, seg(t, .05, .5), z);
     if (t > tb && t < tp) placa("✔ Alinhada à BNCC Computação", 640, 518, seg(t, tb, tb + .4), VD, 26);
     if (t > tp && t < to) placa("👆 Clicou na palavra: o significado aparece", 640, 518, seg(t, tp + .4, tp + .8), AZ, 24);
     if (t > to) placa("🌎 Onde eu uso isso?: o sentido no dia a dia", 640, 518, seg(t, to, to + .4), RX, 24); } },
 // 4 — simuladores
 { chip: "SIMULADORES", fala: FL[4], sfxF: () => [[.1, "whoosh"], [E(4, "windows"), "pop"], [E(4, "paint"), "pop"], [E(4, "navegador"), "pop"], [E(4, "risco"), "ding"]],
   draw(t) { fundoEscuro(t, "#0f172a"); navegador(60, 70, 780, 430, "4-simulador", seg(t, .05, .5), zl(Z0, { x: .62, y: .55, s: 1.35 }, seg(t, .6, 1.8)));
     { const P = [[300, 250], [520, 330], [640, 220], [420, 420], [700, 400]], tq = t * .55, a = Math.floor(tq) % P.length, b = (a + 1) % P.length, f = io(cl((tq % 1) * 1.6)); if (t > 1.8) cursor(lerp(P[a][0], P[b][0], f), lerp(P[a][1], P[b][1], f), (tq % 1) > .7 && (tq % 1) < .85); }
     [["windows", "🪟 Windows"], ["paint", "🎨 Paint"], ["email", "✉️ E-mail"], ["navegador", "🌐 Navegador"]].forEach(([w, txt], i) => { const tw = E(4, w); if (t > tw) placa(txt, 1040, 140 + i * 82, seg(t, tw, tw + .35), [AZ, LJ, RS, VD][i], 24); });
     if (t > E(4, "risco")) placa("sem medo de errar · sem risco", 1040, 480, seg(t, E(4, "risco"), E(4, "risco") + .4), "#334155", 20); } },
 // 5 — correção automática e o Bit
 { chip: "CORREÇÃO NA HORA", fala: FL[5], sfxF: () => [[.1, "whoosh"], [E(5, "acertou"), "alerta"], [E(5, "robô"), "click"], [E(5, "bit"), "ding"]],
   draw(t) { fundoEscuro(t, "#312e81"); const tr = E(5, "robô"); const bit = t > tr + .3;
     navegador(60, 70, 820, 460, bit ? "6-bit" : "5-correcao", seg(t, .05, .5), bit ? { x: .62, y: .72, s: 1.45 } : zl(Z0, { x: .6, y: .7, s: 1.5 }, seg(t, .5, 1.5)));
     if (t < tr && t > E(5, "acertou")) placa("✔ ou ✖ na hora, com a explicação", 1080, 200, seg(t, E(5, "acertou"), E(5, "acertou") + .4), VD, 18);
     if (t > tr) { ajudante(1060, 360, .9, t, { feliz: bit, bracoE: -1 + Math.sin(t * 8) * .2 }); balao("Me ajuda, robô!", 1060, 150, seg(t, tr, tr + .3));
       const tm = E(5, "mostra"); if (t > tm) { const fa = Math.floor((t - tm) * 1.2) % 3; [["ShiftLeft", 990], ["Digit2", 1130]].forEach(([id, x], j) => teclaGrande(x, 510, 74, { id, sc: back(seg(t, tm + j * .2, tm + .4 + j * .2)), cor: (fa === 1 && j === 0) || fa === 2 ? AMAR : "#f1f5f9", andar: fa === 2 && j === 1 ? 1 : -1 })); texto2("+", 1060, 510, 40); if (fa === 2) simbolo("@", 1232, 510, 1, 40); } } } },
 // 6 — autonomia: o professor vira mediador
 { chip: "AUTONOMIA", fala: FL[6], sfxF: () => [[.1, "whoosh"], [E(6, "autonomia"), "ding"], [E(6, "mediador"), "pop"]],
   draw(t) { fundoEscuro(t, "#0e7490"); palavra("AUTONOMIA", 640, 90, seg(t, E(6, "autonomia"), E(6, "autonomia") + .4), 70);
     [[260, .0], [520, .3], [780, .6]].forEach(([x, d], i) => { computador(x, 380, 1, "#3b82f6"); aluno(x - 70, 470, .75, t, { camisa: ["#f97316", "#8b5cf6", "#16a34a"][i], f: i, braco: -.6, bracoE: .4 });
       const p = cl(seg(t, .5 + d, 5 + d * 3)); g.fillStyle = "rgba(255,255,255,.25)"; rr(x - 60, 262, 120, 14, 7); g.fill(); g.fillStyle = VD; rr(x - 60, 262, 120 * (i === 2 ? Math.min(p, .4) : p), 14, 7); g.fill(); });
     const tm = E(6, "mediador"), kx = io(seg(t, tm - 1.2, tm)); boneco({ x: lerp(1120, 920, kx), y: 470, s: .95, camisa: "#0f172a", braco: kx >= 1 ? -1.2 : -.5, pisca: pisca(t + .5), perna: kx < 1 ? Math.sin(t * 12) * .5 : 0 });
     const tu = E(6, "único"); if (t > tu && t < tm) placa("o professor deixa de ser o único caminho", 640, 180, seg(t, tu, tu + .4), "#334155", 22);
     if (t > tm) placa("PROFESSOR MEDIADOR: atende quem mais precisa", 640, 520, seg(t, tm, tm + .4), OURO, 22); } },
 // 7 — engajamento
 { chip: "ENGAJAMENTO", fala: FL[7], sfxF: () => [[.1, "whoosh"], [E(7, "pontos"), "ding"], [E(7, "coroa"), "sino"], [E(7, "pódio"), "festa"], [E(7, "bônus"), "pop"]],
   draw(t) { fundoEscuro(t, "#581c87"); const tp = E(7, "pontos"), tc = E(7, "coroa"), tpo = E(7, "pódio"), tb = E(7, "bônus");
     const te = E(7, "engajamento"); if (t > te && t < tp) palavra("ENGAJAMENTO", 640, 280, seg(t, te, te + .4), 72);
     if (t > tp && t < tc) for (let i = 0; i < 6; i++) { const kk = (t - tp - i * .35) % 2.2; if (kk > 0 && t - tp > i * .35) { g.save(); g.globalAlpha = Math.max(0, 1 - kk / 2.2); texto2("+10 pts", 160 + i * 190, 420 - kk * 120, 30, AMAR); g.restore(); } }
     if (t > tc && t < tpo) { palavra("👑 REI DA SALA", 640, 300, seg(t, tc, tc + .4), 64); }
     if (t > tpo) { podio(640, 500, t, seg(t, tpo, tpo + 1.4)); confete(t, tpo); }
     if (t > tb) placa("⭐ BÔNUS RELÂMPAGO desbloqueado", 1040, 140, seg(t, tb, tb + .4), RX, 22); } },
 // 8 — temas das datas comemorativas
 { chip: "TEMAS DO CALENDÁRIO", legTam: 21, fala: FL[8], sfxF: () => [[.1, "whoosh"], [E(8, "consciência"), "sino"], [E(8, "cartões"), "pop"], [E(8, "desafio"), "click"], [E(8, "aprendizado"), "ding"]],
   draw(t) { fundoEscuro(t, "#7c2d12"); const tcs = E(8, "consciência"), tca = E(8, "cartões"), td = E(8, "desafio"), ta = E(8, "aprendizado");
     if (t < td) navegador(150, 50, 980, 400, t > tca ? "8-curiosidades" : "7-tema", seg(t, .05, .5), t > tca ? Z0 : zl(Z0, { x: .5, y: .25, s: 1.2 }, seg(t, tcs, tcs + .8)));
     if (t > tcs && t < tca) placa("✊🏿 o tema entra sozinho, na data", 640, 400, seg(t, tcs, tcs + .4), LJ, 24);
     if (t > td) { const k = back(seg(t, td, td + .5)); g.save(); g.globalAlpha = 1 - .85 * seg(t, ta, ta + .4); g.translate(640, 250); g.scale(k * .88, k * .88); g.fillStyle = "#fff"; rr(-340, -220, 680, 420, 22); g.fill(); g.fillStyle = LJ; rr(-340, -220, 680, 64, 22); g.fill(); g.fillRect(-340, -180, 680, 24);
       g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("🎮 Desafio para entrar na aula", 0, -188);
       const L = "QUILOMBOZXZUMBIRTDANDARA", N = 8; for (let r = 0; r < 3; r++) for (let c = 0; c < N; c++) { const ch = L[r * N + c], ach = (r === 0 && c < 8) && t > td + 1.2 || (r === 1 && c >= 2 && c <= 6) && t > td + 2 || (r === 2 && c >= 1) && t > td + 2.8; g.fillStyle = ach ? "#fde68a" : "#f1f5f9"; rr(-270 + c * 68, -130 + r * 70, 60, 60, 10); g.fill(); g.fillStyle = "#0f172a"; g.font = `800 30px ${F}`; g.fillText(ch, -240 + c * 68, -100 + r * 70); }
       g.fillStyle = "#334155"; g.font = `700 20px ${F}`; g.fillText("caça-palavras · jogo da memória · quiz", 0, 130); g.fillText("só consegue quem leu os cartões", 0, 165); g.restore(); }
     if (t > ta) palavra("CADA DATA VIRA APRENDIZADO", 640, 250, seg(t, ta, ta + .4), 50); } },
 // 9 — gestão: chamada automática
 { chip: "GESTÃO", fala: FL[9], sfxF: () => [[.1, "whoosh"], [E(9, "registrado"), "ding"], [E(9, "chamada"), "pop"], [E(9, "presente"), "ding"]],
   draw(t) { fundoEscuro(t, "#0f172a"); const tr = E(9, "registrado"), tc = E(9, "chamada"); palavra("📊 GESTÃO", 990, 120, seg(t, .3, .8), 50);
     painelMock(60, 70, 640, 450, "📋 Chamada · 6º A · hoje", seg(t, .1, .6), (x, y, w) => { ALUNOS.forEach((n, i) => { const yy = y + 34 + i * 62; g.fillStyle = i % 2 ? "#f8fafc" : "#fff"; g.fillRect(x, yy - 28, w, 62); g.fillStyle = "#0f172a"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(`${i + 1}. ${n} (teste)`, x + 24, yy);
       const ok = t > tc + .3 + i * .25 && i !== 4; if (t > tc) chipTxt(ok ? "⚡P presente" : i === 4 && t > tc + 1.5 ? "F" : "…", x + w - 190, yy, ok ? "#fff" : "#475569", ok ? VD : "#e2e8f0", 18); }); });
     if (t > tr) placa("🕒 tudo registrado, com data e hora", 990, 220, seg(t, tr, tr + .4), AZ, 18);
     if (t > tc) placa("⚡ entrou no portal = presença", 990, 320, seg(t, tc, tc + .4), VD, 18); } },
 // 10 — Ao vivo
 { chip: "AO VIVO", fala: FL[10], sfxF: () => [[.1, "whoosh"], [E(10, "avançando"), "pop"], [E(10, "parado"), "alerta"], [E(10, "tela"), "alerta"], [E(10, "intervir"), "ding"]],
   draw(t) { fundoEscuro(t, "#0f172a"); const ta = E(10, "avançando"), tp = E(10, "parado"), tt = E(10, "tela"), ti = E(10, "intervir");
     painelMock(110, 60, 1060, 470, "🔴 Ao vivo · 6º A", seg(t, .1, .6), (x, y, w) => {
       const lin = [["Ana Beatriz", "🏆 Missão completa", VD, ta], ["Bruno Lima", "🟢 Básico 4/5", AZ, ta], ["Carla Souza", "😴 parada há 12 min", VM, tp], ["Davi Rocha", "🖥️ saiu da tela cheia 2×", VM, tt], ["Elisa Matos", "🟢 Básico 3/5", AZ, ta]];
       if (t > tp) { g.fillStyle = "#fef3c7"; rr(x + 16, y + 14, w - 32, 54, 10); g.fill(); g.fillStyle = "#92400e"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText("⚠️ Precisam de atenção agora: Carla Souza" + (t > tt ? " · Davi Rocha" : ""), x + 32, y + 41); }
       lin.forEach(([n, s, c, tw], i) => { const yy = y + 108 + i * 64; g.fillStyle = "#0f172a"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(n + " (teste)", x + 30, yy);
         g.fillStyle = "#e2e8f0"; rr(x + 340, yy - 9, 300, 18, 9); g.fill(); g.fillStyle = c === VM ? "#fca5a5" : VD; rr(x + 340, yy - 9, 300 * [1, .8, .3, .5, .6][i], 18, 9); g.fill();
         if (t > tw) chipTxt(s, x + 680, yy, "#fff", c, 18); }); });
     { const tpf = E(10, "professor"); if (t > tpf) { g.save(); g.globalAlpha = .88 * seg(t, tpf, tpf + .3); g.fillStyle = "#0f172a"; g.fillRect(0, 245, W, 110); g.restore(); palavra("O PROFESSOR SABE ONDE INTERVIR", 640, 300, seg(t, tpf, tpf + .4), 44); } } } },
 // 11 — Panorama, prova e boletim
 { chip: "PANORAMA E AVALIAÇÃO", fala: FL[11], sfxF: () => [[.1, "whoosh"], [E(11, "panorama"), "pop"], [E(11, "prova"), "pop"], [E(11, "boletim"), "ding"]],
   draw(t) { fundoEscuro(t, "#14532d"); const tp = E(11, "prova"), tb = E(11, "nota");
     painelMock(70, 70, 640, 430, "🗺️ Panorama", seg(t, .1, .6), (x, y, w) => { ["6º A", "6º B", "6º C", "7º A"].forEach((tu, r) => { const yy = y + 50 + r * 86; g.fillStyle = "#0f172a"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(tu, x + 20, yy);
       for (let m = 0; m < 6; m++) { const feito = m < [4, 3, 4, 2][r], k2 = seg(t, .6 + r * .2 + m * .08, 1 + r * .2 + m * .08); g.globalAlpha = k2; g.fillStyle = feito ? VD : "#e2e8f0"; rr(x + 110 + m * 82, yy - 26, 72, 52, 10); g.fill(); g.fillStyle = feito ? "#fff" : "#64748b"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText((feito ? "✔ " : "") + "M" + (m + 1), x + 146 + m * 82, yy + 1); g.globalAlpha = 1; } }); });
     painelMock(760, 140, 450, 330, "📒 Boletim · 6º A", seg(t, tp, tp + .5), (x, y, w) => { ALUNOS.slice(0, 4).forEach((n, i) => { const yy = y + 40 + i * 62; g.fillStyle = "#0f172a"; g.font = `700 20px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(n + " (teste)", x + 20, yy);
       const kk = seg(t, tb + i * .2, tb + .4 + i * .2); if (kk > 0) { g.save(); g.globalAlpha = kk; chipTxt(["9,5", "8,0", "7,5", "10,0"][i], x + w - 90, yy - 30 * (1 - kk), "#fff", AZ, 20); g.restore(); } }); });
     if (t > tp) placa("prova e recuperação no portal → nota direto no boletim", 640, 535, seg(t, tp, tp + .4), AZ, 20); } },
 // 12 — inclusão
 { chip: "NINGUÉM FICA PARA TRÁS", fala: FL[12], sfxF: () => [[.1, "whoosh"], [E(12, "trilha"), "pop"], [E(12, "plano"), "pop"], [E(12, "casa"), "pop"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); palavra("NINGUÉM FICA PARA TRÁS", 640, 115, seg(t, .1, .5), 44);
     [["trilha", "👣", "Trilha Passo a Passo", "a mesma missão, mais detalhada", VD], ["plano", "🧩", "Apoios na aula", "PEI: plano individualizado · só o professor vê", RX], ["casa", "🏠", "Estuda em casa", "recebe as tarefas · e é acompanhado", LJ]]
       .forEach(([w, ic, tit, sub, c], i) => { const k = back(seg(t, E(12, w), E(12, w) + .5)); if (k <= 0) return; const x = 240 + i * 400; g.save(); g.translate(x, 320); g.scale(k, k); g.fillStyle = "rgba(0,0,0,.35)"; rr(-170 + 6, -150 + 8, 340, 300, 22); g.fill(); g.fillStyle = "#fff"; rr(-170, -150, 340, 300, 22); g.fill(); g.fillStyle = c; rr(-170, -150, 340, 14, 7); g.fill();
         g.font = `90px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(ic, 0, -55); g.fillStyle = "#0f172a"; g.font = `800 26px ${F}`; g.fillText(tit, 0, 40); g.fillStyle = "#475569"; g.font = `600 18px ${F}`; sub.split(" · ").forEach((s, j) => g.fillText(s, 0, 80 + j * 26)); g.restore(); }); } },
 // 13 — segurança e foco
 { chip: "SEGURANÇA E FOCO", fala: FL[13], sfxF: () => [[.1, "whoosh"], [E(13, "código"), "tec"], [E(13, "nomes"), "pop"], [E(13, "horário"), "pop"], [E(13, "cheia"), "ding"]],
   draw(t) { fundoEscuro(t, "#0f172a"); const tc = E(13, "código"), tn = E(13, "nomes"), th = E(13, "horário"), tch = E(13, "cheia");
     if (t < th) { const k = back(seg(t, .15, .65)); if (k > 0) { g.save(); g.translate(330, 300); g.scale(k, k); g.fillStyle = "#fff"; rr(-190, -170, 380, 340, 24); g.fill(); g.fillStyle = "#0f172a"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("Digite o seu código", 0, -125);
         for (let i = 0; i < 4; i++) { const f = t > tc + .3 + i * .3; g.fillStyle = f ? AZ : "#e2e8f0"; rr(-150 + i * 78, -90, 66, 80, 14); g.fill(); g.fillStyle = "#fff"; g.font = `800 40px ${F}`; g.fillText(f ? "•" : "", -117 + i * 78, -48); }
         g.fillStyle = "#334155"; g.font = `700 20px ${F}`; g.fillText("sem e-mail · sem senha", 0, 40); g.fillText("só 4 números", 0, 75); g.restore(); }
       if (t > tn) { cadeado(900, 330, 1.4, false); placa("nomes e notas: só no painel do professor", 900, 470, seg(t, tn, tn + .4), VD, 22); } }
     else if (t < tch) { const kr = back(seg(t, th, th + .5)); g.save(); g.translate(640, 270); g.scale(kr, kr); g.fillStyle = "#fff"; g.strokeStyle = AZ; g.lineWidth = 12; g.beginPath(); g.arc(0, 0, 90, 0, 7); g.fill(); g.stroke(); g.fillStyle = "#0f172a"; for (let h = 0; h < 12; h++) { const an = h * Math.PI / 6; g.beginPath(); g.arc(Math.sin(an) * 70, -Math.cos(an) * 70, h % 3 ? 4 : 7, 0, 7); g.fill(); } g.lineCap = "round"; g.strokeStyle = "#0f172a"; g.lineWidth = 9; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -45); g.stroke(); g.lineWidth = 6; const am = t * 1.5; g.strokeStyle = VM; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.sin(am) * 62, -Math.cos(am) * 62); g.stroke(); g.restore(); placa("🕒 tarefas só no horário da aula", 640, 440, seg(t, th, th + .4), AZ, 22); }
     else { navegador(330, 50, 620, 340, "9-telacheia", seg(t, tch, tch + .5)); placa("🖥️ tela cheia obrigatória: atenção na atividade", 640, 440, seg(t, tch, tch + .4), RX, 22); } } },
 // 14 — resumo
 { chip: "EM RESUMO", fala: FL[14], sfxF: () => [[.1, "whoosh"], [E(14, "aluno"), "pop"], [E(14, "professor"), "pop"], [E(14, "gestão"), "pop"], [E(14, "recursos"), "ding"]],
   draw(t) { fundoEscuro(t, "#312e81");
     [["aluno", "🎒", "ALUNO", "mais autonomia", AZ], ["professor", "👨‍🏫", "PROFESSOR", "mais tempo de qualidade", VD], ["gestão", "📊", "GESTÃO", "mais informação", OURO]].forEach(([w, ic, tit, sub, c], i) => {
       const k = back(seg(t, E(14, w), E(14, w) + .5)); if (k <= 0) return; const x = 240 + i * 400; g.save(); g.translate(x, 300); g.scale(k, k); g.fillStyle = c; rr(-160, -160, 320, 300, 26); g.fill(); g.font = `90px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(ic, 0, -70);
       g.fillStyle = c === OURO ? "#1e293b" : "#fff"; g.font = `800 32px ${F}`; g.fillText(tit, 0, 30); g.font = `700 22px ${F}`; g.fillText(sub, 0, 80); g.restore(); });
     if (t > E(14, "recursos")) placa("com os recursos que a escola já tem", 640, 515, seg(t, E(14, "recursos"), E(14, "recursos") + .4), "#334155", 24); } },
 // 15 — encerramento
 { chip: "", fala: FL[15], sfxF: () => [[.1, "whoosh"], [E(15, "outras"), "pop"], [E(15, "rede"), "festa"], [E(15, "welington"), "sino"]],
   draw(t) { fundoEscuro(t, "#0f172a"); const to = E(15, "outras"), tr = E(15, "rede"), tw = E(15, "welington");
     const nos = [[640, 250], [380, 170], [900, 170], [300, 340], [980, 340], [520, 400], [760, 400], [200, 230], [1080, 230]];
     nos.forEach(([x, y], i) => { if (i === 0) return; const k = seg(t, to + i * .15, to + .5 + i * .15); if (k <= 0) return; g.strokeStyle = `rgba(250,204,21,${.5 * k})`; g.lineWidth = 3; g.beginPath(); g.moveTo(640, 250); g.lineTo(lerp(640, x, k), lerp(250, y, k)); g.stroke(); });
     nos.forEach(([x, y], i) => { const k = i === 0 ? back(seg(t, .2, .7)) : back(seg(t, to + .4 + i * .15, to + .8 + i * .15)); if (k <= 0) return; g.save(); g.translate(x, y); g.scale(k, k); escola(0, 0, i === 0 ? .55 : .3); g.restore(); });
     if (t < tw) { const tf = E(15, "funciona"); if (t > tf && t < to) { g.save(); g.strokeStyle = AMAR; g.lineWidth = 5; g.globalAlpha = .5 + .5 * Math.sin(t * 6); g.beginPath(); g.arc(640, 205, 110 + 6 * Math.sin(t * 6), 0, 7); g.stroke(); g.restore(); placa("✔ já funciona aqui", 640, 395, seg(t, tf, tf + .4), VD, 22); }
       g.fillStyle = "#cbd5e1"; g.font = `700 20px ${F}`; g.textAlign = "center"; g.fillText("Escola Municipal de Ensino Fundamental Juscelino Kubitschek · Curionópolis (PA)", 640, 470); if (t > tr) placa("toda a rede municipal", 640, 520, seg(t, tr, tr + .4), VD, 24); }
     else { const k = seg(t, tw, tw + .6); g.save(); g.globalAlpha = k; g.fillStyle = "rgba(15,23,42,.85)"; g.fillRect(0, 0, W, H); g.restore(); palavra("Prof. Welington Laignier", 640, 270, k, 66); g.save(); g.globalAlpha = k; g.fillStyle = "#fff"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText("Portal da Informática", 640, 345); g.fillStyle = "#cbd5e1"; g.font = `700 22px ${F}`; g.fillText("tecnologia a serviço da aprendizagem", 640, 390); g.restore(); confete(t, tw + .3); } } }
];
// efeitos sonoros calculados na hora (depois que a FALA real é carregada)
CENAS.forEach(c => { const f = c.sfxF; if (f) Object.defineProperty(c, "sfx", { get: f }); });

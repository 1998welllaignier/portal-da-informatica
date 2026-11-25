/* ================= 6º ano · 2027 · 1º bimestre · Missão 8 · Atalhos do teclado e do mouse ================= */
const LIA = { camisa: "#ec4899", cabelo: "longo" }, NINO = { camisa: "#0ea5e9" };
const lia = o => boneco(Object.assign({}, LIA, o)), nino = o => boneco(Object.assign({}, NINO, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const LEG = f => f.replace(/Control mais /g, "Ctrl + ").replace(/Control com/g, "Ctrl com").replace(/Alt mais Tab/g, "Alt + Tab").replace(/Windows mais E/g, "Windows + E").replace("ops, volta!", "“ops, volta!”");
function tc(x, y, txt, ap, w) { w = w || 110; g.save(); g.translate(x, y + (ap ? 6 : 0)); g.fillStyle = ap ? "#facc15" : "#e2e8f0"; rr(-w / 2, -42, w, 84, 14); g.fill(); g.fillStyle = ap ? "#a16207" : "#94a3b8"; g.fillRect(-w / 2, 34, w, 8); g.fillStyle = NAVY; g.font = `800 ${txt.length > 3 ? 24 : 34}px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
// combo: duas teclas + resultado
function combo(x, y, a, b, res, cor, t, t0, wa) { if (t < t0) return; const k = seg(t, t0, t0 + .4); g.save(); g.globalAlpha = k; tc(x - 150, y, a, t > t0 + .2 && t < t0 + 1.2, wa || 120); g.fillStyle = "#fff"; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("+", x - 62, y + 14); tc(x + 20, y, b, t > t0 + .4 && t < t0 + 1.2, 90); g.restore(); if (res) comando(res, x + 290, y, seg(t, t0 + .5, t0 + .9), cor, 340); }
function doc(x, y, w, h, linhas, k, sel) { if (k <= 0) return; g.save(); g.globalAlpha = k; g.fillStyle = "#fff"; rr(x - w / 2, y - h / 2, w, h, 12); g.fill(); linhas.forEach((l, i) => { const yy = y - h / 2 + 34 + i * 34; if (sel && sel(i)) { g.fillStyle = "#93c5fd"; g.fillRect(x - w / 2 + 16, yy - 22, w - 32, 30); } g.fillStyle = "#64748b"; g.fillRect(x - w / 2 + 24, yy - 10, (w - 48) * l, 10); }); g.restore(); }

const F0 = "Atalhos: os superpoderes do teclado!",
  F1 = "A Lia precisa juntar o texto de duas páginas no trabalho. Ela está digitando tudo de novo, letra por letra. E, quando apagou um parágrafo sem querer, quase chorou!",
  F2 = "Um atalho é um jeito rápido de fazer algo apertando teclas juntas. Segure a primeira tecla, o Control, e aperte a segunda.",
  F3 = "Control mais C copia. Control mais V cola. E Control mais X recorta: tira do lugar para colar em outro. Copiar deixa o original; recortar leva embora.",
  F4 = "Control mais Z desfaz o último passo: é o famoso ops, volta! Control mais S salva, e Control mais A seleciona tudo.",
  F5 = "Alt mais Tab troca de janela, e Windows mais E abre o Explorador de Arquivos.",
  F6 = "O mouse também tem atalhos: duplo clique seleciona uma palavra, clique triplo seleciona o parágrafo, e Control com a rodinha aumenta ou diminui o zoom.",
  F7 = "A Lia selecionou o texto, copiou com Control mais C e colou com Control mais V. E o parágrafo apagado? Control mais Z, e ele voltou! Missão cumprida!",
  F8 = "Onde eu uso isso? No celular, tocando e segurando o texto para copiar e colar. Para copiar o código do PIX sem errar. E no trabalho da escola, quando algo some sem querer.",
  F9 = "Agora é com vocês: abram a Missão 8 no portal!";
const LN = [.9, .8, .95, .6, .85, .7];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "click"], [.8, "click"], [1.3, "festa"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#4c1d95"); tc(520, 300 + Math.sin(t * 4) * 10, "Ctrl", t > .5 && Math.floor(t * 2) % 2 === 0, 140); tc(700, 300 + Math.cos(t * 4) * 10, "C", t > .8 && Math.floor(t * 2) % 2 === 0); g.save(); g.globalAlpha = seg(t, 1, 1.4); g.font = `70px ${F}`; g.textAlign = "center"; g.fillText("⚡", 820, 300); g.restore();
     abertura(t, "6º ANO · MISSÃO 8 · EXTRA", "Atalhos do teclado e do mouse", "OS SUPERPODERES", "DO TECLADO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "juntar"), "pop"], [em(F1, "letra"), "click"], [em(F1, "apagou"), "alerta"], [em(F1, "chorou"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const j = em(F1, "juntar"), le = em(F1, "letra"), ap = em(F1, "apagou"), ch = em(F1, "chorou");
     doc(520, 260, 300, 240, LN, seg(t, j, j + .4)); doc(900, 260, 300, 240, t > ap ? LN.slice(0, 2) : LN.slice(0, Math.min(6, Math.max(0, Math.floor((t - le) * .6)))), seg(t, j + .3, j + .7));
     if (t > j) seta(690, 260, 730, 260, seg(t, j + .3, j + .6), "#fde68a");
     if (t > le && t < ap) rotulo("LETRA POR LETRA...", 900, 420, "#fde68a", seg(t, le, le + .4));
     if (t > ap) { xVermelho(900, 330, 50, seg(t, ap, ap + .4)); rotulo("PARÁGRAFO APAGADO!", 900, 420, "#fca5a5", seg(t, ap, ap + .4)); }
     lia({ x: 170, y: 610, s: .95, braco: -.6, bracoE: .3, olhar: 1, boca: t > ap ? "o" : "", pisca: pisca(t) });
     if (t > ch) palavra("SOCORRO!", 700, 510, seg(t, ch, ch + .4), 50); } },
 { chip: "O QUE É ATALHO", fala: F2, legenda: LEG(F2).replace("o Control,", "o Ctrl,"), sfx: [[.1, "whoosh"], [em(F2, "atalho"), "ding"], [em(F2, "juntas"), "pop"], [em(F2, "Control"), "click"], [em(F2, "segunda"), "click"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F2, "atalho"), c = em(F2, "Control"), s = em(F2, "segunda");
     palavra("ATALHO = TECLAS JUNTAS", 580, 105, seg(t, a, a + .4), 44);
     if (t > c) { tc(470, 300, "Ctrl", true, 160); rotulo("1º SEGURE", 470, 390, "#fde68a", seg(t, c, c + .4)); }
     if (t > s) { g.fillStyle = "#fff"; g.font = `800 50px ${F}`; g.textAlign = "center"; g.fillText("+", 640, 318); tc(800, 300, "C", Math.floor(t * 2) % 2 === 0); rotulo("2º APERTE", 800, 390, "#fde68a", seg(t, s, s + .4)); } } },
 { chip: "COPIAR, COLAR, RECORTAR", fala: F3, legenda: LEG(F3), sfx: [[.1, "whoosh"], [em(F3, "copia"), "click"], [em(F3, "cola"), "click"], [em(F3, "recorta"), "click"], [em(F3, "original"), "ding"], [em(F3, "embora"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const c1 = em(F3, "Control", 0), c2 = em(F3, "Control", 1), c3 = em(F3, "Control", 2), o = em(F3, "original");
     combo(420, 130, "Ctrl", "C", "📋 COPIA", "#2563eb", t, c1); combo(420, 250, "Ctrl", "V", "📥 COLA", "#16a34a", t, c2); combo(420, 370, "Ctrl", "X", "✂️ RECORTA", "#dc2626", t, c3);
     if (t > o) cartao("COPIAR deixa o original · RECORTAR leva embora", 640, 490, 820, "#0f766e", seg(t, o, o + .4)); } },
 { chip: "DESFAZER, SALVAR, TUDO", fala: F4, legenda: LEG(F4), sfx: [[.1, "whoosh"], [em(F4, "desfaz"), "click"], [em(F4, "ops"), "pop"], [em(F4, "salva"), "click"], [em(F4, "seleciona"), "click"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const c1 = em(F4, "Control", 0), op = em(F4, "ops"), c2 = em(F4, "Control", 1), c3 = em(F4, "Control", 2);
     combo(420, 130, "Ctrl", "Z", "↩️ DESFAZ", "#7c3aed", t, c1); if (t > op) rotulo("“OPS, VOLTA!”", 1000, 190, "#fde68a", seg(t, op, op + .4));
     combo(420, 270, "Ctrl", "S", "💾 SALVA", "#16a34a", t, c2); combo(420, 400, "Ctrl", "A", "🔵 SELECIONA TUDO", "#2563eb", t, c3); } },
 { chip: "TROCAR DE JANELA", fala: F5, legenda: LEG(F5), sfx: [[.1, "whoosh"], [em(F5, "Alt"), "click"], [em(F5, "janela"), "pop"], [em(F5, "Windows"), "click"], [em(F5, "Explorador"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F5, "Alt"), w = em(F5, "Windows");
     combo(420, 180, "Alt", "Tab", "🪟 TROCA DE JANELA", "#ca8a04", t, a, 110); combo(420, 340, "Win", "E", "📁 EXPLORADOR", "#ea580c", t, w, 110); } },
 { chip: "ATALHOS DO MOUSE", fala: F6, legenda: LEG(F6), sfx: [[.1, "whoosh"], [em(F6, "duplo"), "click"], [em(F6, "triplo"), "click"], [em(F6, "rodinha"), "pop"], [em(F6, "zoom"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F6, "duplo"), tr = em(F6, "triplo"), r = em(F6, "rodinha");
     palavra("O MOUSE TAMBÉM!", 600, 100, seg(t, 0, .4), 54);
     const zz = t > r ? 1 + Math.abs(Math.sin((t - r) * 2)) * .2 : 1; g.save(); g.translate(780, 300); g.scale(zz, zz); g.translate(-780, -300); doc(780, 300, 460, 240, LN, 1, i => (t > tr && t < r && i < 3) || (t > d && t < tr && i === 1)); g.restore();
     if (t > d && t < tr) { g.fillStyle = "#2563eb"; g.fillRect(620, 299, 140, 30); comando("2 CLIQUES = PALAVRA", 300, 220, seg(t, d, d + .4), "#2563eb", 380); }
     if (t > tr && t < r) comando("3 CLIQUES = PARÁGRAFO", 300, 300, seg(t, tr, tr + .4), "#16a34a", 380);
     if (t > r) { mouse(300, 300, 1.4); comando("Ctrl + RODINHA = ZOOM 🔍", 300, 440, seg(t, r, r + .4), "#7c3aed", 400); } } },
 { chip: "A SOLUÇÃO", fala: F7, legenda: LEG(F7), sfx: [[.1, "whoosh"], [em(F7, "selecionou"), "pop"], [em(F7, "copiou"), "click"], [em(F7, "colou"), "click"], [em(F7, "Control", 2), "click"], [em(F7, "voltou"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s = em(F7, "selecionou"), cp = em(F7, "copiou"), co = em(F7, "colou"), z = em(F7, "Control", 2), v = em(F7, "voltou"), m = em(F7, "Missão");
     doc(520, 240, 300, 240, LN, 1, i => t > s && t < co); doc(900, 240, 300, 240, t > co ? (t > v ? LN : LN.slice(0, 4)) : [], 1);
     if (t > cp && t < co + .8) comando("Ctrl + C", 520, 410, seg(t, cp, cp + .3), "#2563eb", 200);
     if (t > co && t < z) comando("Ctrl + V", 900, 410, seg(t, co, co + .3), "#16a34a", 200);
     if (t > z) comando("Ctrl + Z ↩️", 900, 410, seg(t, z, z + .3), "#7c3aed", 220);
     if (t > v) visto(1070, 240, 34, seg(t, v, v + .4));
     lia({ x: 170, y: 610, s: .9, braco: t > v ? -2.4 : -.6, bracoE: t > v ? 2.4 : .3, olhar: 1, boca: t > co ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "celular"), "pop"], [em(F8, "PIX"), "pop"], [em(F8, "escola"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["celular", "📱", "SEGURAR E COPIAR", "#16a34a"], ["PIX", "💠", "CÓDIGO DO PIX", "#0891b2"], ["escola", "↩️", "Ctrl + Z NA ESCOLA", "#7c3aed"]].forEach(([w, ic, n, c], i) => { const t0 = em(F8, w), x = 260 + i * 380, k = seg(t, t0, t0 + .4); if (k <= 0) return; const zz = back(cl(k)); g.save(); g.translate(x, 290); g.scale(zz, zz); g.fillStyle = c; rr(-110, -80, 220, 160, 18); g.fill(); g.font = `72px ${F}`; g.textAlign = "center"; g.fillText(ic, 0, 25); g.restore(); comando(n, x, 450, seg(t, t0 + .1, t0 + .5), c, 320); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 8", [LIA, NINO]); } }
];

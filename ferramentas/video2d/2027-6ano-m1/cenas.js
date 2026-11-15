/* ================= 6º ano · 2027 · 1º bimestre · Missão 1 · Primeiros passos: mouse, teclado e janelas ================= */
const PEDRO = { camisa: "#f97316" }, LARA = { camisa: "#8b5cf6", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o));
// tempo (na escala estimada) em que a palavra aparece na fala: as animações e os efeitos acompanham a voz
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };

// janela de programa com os 3 botões (➖ ⬜ ❌) no canto de cima, à direita
function janela(x, y, w, h, titulo, k, destaque) { if (k <= 0) return; const z = cl(k); g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "rgba(0,0,0,.25)"; rr(-w / 2 + 8, -h / 2 + 10, w, h, 14); g.fill();
  g.fillStyle = "#fff"; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.fillStyle = "#2563eb"; rr(-w / 2, -h / 2, w, 46, 14); g.fill(); g.fillRect(-w / 2, -h / 2 + 30, w, 16);
  g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText(titulo, -w / 2 + 18, -h / 2 + 31);
  [["–", "#93c5fd"], ["□", "#93c5fd"], ["✕", "#ef4444"]].forEach(([s, c], i) => { const bx = w / 2 - 132 + i * 44, by = -h / 2 + 8; g.fillStyle = destaque === i ? "#facc15" : c; rr(bx, by, 38, 30, 7); g.fill(); g.fillStyle = destaque === i ? NAVY : "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(s, bx + 19, by + 23); });
  g.restore(); }
// joguinho dentro da janela: estrelas e uma bola
function telaJogo(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#dcfce7"; rr(-150, -70, 300, 150, 10); g.fill(); estrela(-90, -10, 22); estrela(0, 30, 18, "#38bdf8"); estrela(90, -20, 20, "#f472b6");
  g.fillStyle = "#16a34a"; g.beginPath(); g.arc(Math.sin(t * 2) * 60, 40, 14, 0, 7); g.fill(); g.restore(); }
// barra de tarefas (fica acima da faixa da legenda)
function barraTarefas(y, k, iconeJogo, brilho) { g.fillStyle = "#1e293b"; rr(110, y, 1060, 56, 12); g.fill(); g.fillStyle = "#38bdf8"; rr(130, y + 10, 36, 36, 8); g.fill();
  g.fillStyle = "#fff"; g.font = `800 15px ${F}`; g.textAlign = "left"; g.fillText("Iniciar", 174, y + 34); g.textAlign = "right"; g.fillText("10:30", 1150, y + 34);
  if (iconeJogo > 0) { const s = back(cl(iconeJogo)); g.save(); g.translate(560, y + 28); g.scale(s, s); if (brilho) { g.fillStyle = "rgba(250,204,21,.45)"; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill(); } g.fillStyle = "#16a34a"; rr(-20, -20, 40, 40, 9); g.fill(); estrela(0, 0, 12); g.restore(); } }
// tecla grande do teclado
function tecla(txt, x, y, w, k, apertada) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y + (apertada ? 6 : 0)); g.scale(s, s);
  g.fillStyle = "#94a3b8"; rr(-w / 2, -34, w, 76, 14); g.fill(); g.fillStyle = apertada ? "#facc15" : "#f1f5f9"; rr(-w / 2, -40, w, 70, 14); g.fill();
  g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 4); g.restore(); }
// mouse grande, visto de cima, com o botão em destaque
function mouseGrande(x, y, s, lado, roda) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = "#475569"; g.lineWidth = 5; g.beginPath(); g.moveTo(0, -95); g.quadraticCurveTo(0, -150, 60, -170); g.stroke();
  g.fillStyle = "#e2e8f0"; g.beginPath(); g.ellipse(0, 0, 70, 100, 0, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; g.stroke();
  if (lado) { g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(0, -10); g.lineTo(0, -100); g.ellipse(0, 0, 70, 100, 0, -Math.PI / 2, lado < 0 ? -Math.PI : 0, lado < 0); g.closePath(); g.fill(); }
  g.strokeStyle = NAVY; g.lineWidth = 4; g.beginPath(); g.moveTo(-70, -10); g.lineTo(70, -10); g.moveTo(0, -100); g.lineTo(0, -10); g.stroke();
  g.fillStyle = roda ? "#facc15" : "#64748b"; rr(-10, -70, 20, 38, 9); g.fill(); g.restore(); }
// caixa eletrônico simples
function caixaEletronico(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f766e"; rr(-90, -150, 180, 300, 16); g.fill(); g.fillStyle = "#ccfbf1"; rr(-66, -120, 132, 96, 8); g.fill();
  g.fillStyle = "#0f766e"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.fillText("SAQUE", -30, -82); g.fillText("SALDO", 30, -82); g.fillStyle = "#14b8a6"; rr(-60, -66, 56, 30, 6); g.fill(); rr(4, -66, 56, 30, 6); g.fill();
  g.fillStyle = "#134e4a"; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { rr(-48 + c * 34, -4 + r * 30, 28, 22, 4); g.fill(); } g.restore(); }

const F0 = "Primeiros passos: a janela que sumiu!",
  F1 = "O Pedro abriu o jogo da escola, clicou num botãozinho e a janela sumiu! Ele achou que tinha apagado tudo. Calma, Pedro: dá para resolver.",
  F2 = "Para conversar com o computador, usamos o mouse e o teclado. O mouse move a setinha da tela, chamada ponteiro.",
  F3 = "Um clique escolhe. Dois cliques rapidinho, o duplo clique, abrem pastas e programas. O botão direito mostra mais opções. E a rodinha rola a página.",
  F4 = "No teclado, Enter confirma. A barra de espaço separa as palavras. Backspace apaga a letra antes do cursor. E, segurando Shift, a letra sai maiúscula.",
  F5 = "Todo programa abre numa janela. No canto de cima, à direita, ficam três botões: minimizar esconde a janela, maximizar ocupa a tela toda e o xis fecha o programa.",
  F6 = "O Pedro tinha clicado em minimizar! A janela foi para a barra de tarefas, lá embaixo. Um clique no ícone, e o jogo voltou. Ufa!",
  F7 = "Onde eu uso isso? No celular, tocar na tela é como clicar, e segurar o dedo é como o botão direito. No caixa eletrônico, você também aperta botões na tela.",
  F8 = "Agora é com vocês: abram a Missão 1 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [1.0, "click"], [1.4, "misterio"], [2.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a");
     // a janela do jogo encolhe e some lá embaixo, deixando um "?" no lugar
     const k = io(seg(t, 1.0, 1.7)); if (k < 1) { g.save(); g.translate(lerp(640, 640, k), lerp(290, 400, k)); g.scale(1 - k, 1 - k); janela(0, 0, 420, 250, "Jogo da escola", 1, 0); telaJogo(0, 30, 1.15, t); g.restore(); }
     if (k >= 1) { g.save(); g.setLineDash([14, 10]); g.strokeStyle = "rgba(255,255,255,.6)"; g.lineWidth = 4; rr(430, 165, 420, 250, 14); g.stroke(); g.restore(); palavra("?", 640, 330, seg(t, 1.6, 2.0), 150); }
     abertura(t, "6º ANO · MISSÃO 1", "Primeiros passos: mouse, teclado e janelas", "O MISTÉRIO DA", "JANELA QUE SUMIU!", 2.0); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "clicou"), "click"], [em(F1, "sumiu"), "alerta"], [em(F1, "Calma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = em(F1, "sumiu"), k = io(seg(t, ts - .3, ts + .4));
     monitor(760, 470, 1.55, (x0, y0, w, h) => { g.fillStyle = "#bfdbfe"; g.fillRect(x0, y0, w, h); if (k < 1) { g.save(); g.translate(0, lerp(-106, -30, k)); g.scale(1 - k, 1 - k); janela(0, 0, 230, 130, "Jogo", 1, t > em(F1, "clicou") ? 0 : -1); telaJogo(0, 16, .6, t); g.restore(); } });
     pedro({ x: 270, y: 560, s: 1.05, braco: t > ts ? -2.4 : -.8, bracoE: t > ts ? 2.4 : .3, olhar: 1, boca: t > ts ? "o" : "", pisca: pisca(t) });
     if (t > ts + .2 && t < em(F1, "Calma")) balao("Apaguei tudo?!", 300, 170, seg(t, ts + .2, ts + .6));
     if (t > em(F1, "Calma")) palavra("DÁ PARA RESOLVER!", 640, 110, seg(t, em(F1, "Calma"), em(F1, "Calma") + .4), 58); } },
 { chip: "MOUSE E TECLADO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "mouse"), "pop"], [em(F2, "teclado"), "pop"], [em(F2, "ponteiro"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const tm = em(F2, "mouse"), tt2 = em(F2, "teclado"), tp = em(F2, "ponteiro");
     monitor(900, 390, 1.35, (x0, y0, w, h) => { g.fillStyle = "#e0f2fe"; g.fillRect(x0, y0, w, h); const a = t * 1.6; cursor(-20 + Math.cos(a) * 70, -110 + Math.sin(a) * 40, false); });
     const km = back(seg(t, tm, tm + .4)); if (km > 0) { g.save(); g.translate(250, 330); g.scale(km, km); mouseGrande(0, 0, .95, 0, false); g.restore(); etiqueta("MOUSE", 250, 190, 250, 230, seg(t, tm, tm + .4)); }
     const kt = back(seg(t, tt2, tt2 + .4)); if (kt > 0) { g.save(); g.translate(560, 470); g.scale(kt * 1.3, kt * 1.3); teclado(0, 0, 1); g.restore(); etiqueta("TECLADO", 560, 380, 560, 440, seg(t, tt2, tt2 + .4)); }
     if (t > tp) { etiqueta("PONTEIRO", 1110, 130, 960, 200, seg(t, tp, tp + .4)); palavra("PONTEIRO", 640, 100, seg(t, tp, tp + .4), 70); } } },
 { chip: "O MOUSE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "clique"), "click"], [em(F3, "Dois"), "click"], [em(F3, "Dois") + .25, "click"], [em(F3, "direito"), "pop"], [em(F3, "rodinha"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F3, "clique"), b = em(F3, "Dois"), c = em(F3, "direito"), d = em(F3, "rodinha");
     const fase = t > d ? 3 : t > c ? 2 : t > b ? 1 : 0; mouseGrande(250, 330, 1.25, fase === 2 ? 1 : (fase === 3 ? 0 : (Math.floor(t * 5) % 2 && t > a ? -1 : 0)), fase === 3);
     comando("1 CLIQUE → ESCOLHE", 820, 150, seg(t, a, a + .4), "#2563eb", 600); comando("DUPLO CLIQUE → ABRE", 820, 240, seg(t, b, b + .4), "#16a34a", 600);
     comando("BOTÃO DIREITO → MAIS OPÇÕES", 820, 330, seg(t, c, c + .4), "#db2777", 600); comando("RODINHA → ROLA A PÁGINA", 820, 420, seg(t, d, d + .4), "#ea580c", 600); } },
 { chip: "O TECLADO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Enter"), "click"], [em(F4, "espaço"), "click"], [em(F4, "Backspace"), "click"], [em(F4, "Shift"), "click"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F4, "Enter"), b = em(F4, "espaço"), c = em(F4, "Backspace"), d = em(F4, "Shift");
     const linhas = [["ENTER ↵", ["confirma"], a, 190], ["ESPAÇO", ["separa as", "palavras"], b, 490], ["⟵ BACKSPACE", ["apaga a letra", "antes do cursor"], c, 800], ["⇧ SHIFT", ["letra maiúscula:", "a → A"], d, 1100]];
     linhas.forEach(([n, s2, t0, x], i) => { tecla(n, x, 220, i === 2 ? 270 : 240, seg(t, t0, t0 + .35), t > t0 && t < t0 + .6); if (t > t0 + .2) { g.globalAlpha = out(seg(t, t0 + .2, t0 + .6)); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; s2.forEach((l, j) => g.fillText(l, x, 300 + j * 28)); g.globalAlpha = 1; } });
     // mini caixa de texto mostrando o efeito de cada tecla
     g.fillStyle = "#fff"; rr(340, 400, 600, 90, 14); g.fill(); g.fillStyle = NAVY; g.font = `700 34px ${F}`; g.textAlign = "left";
     const txt = t > d ? "Oi, Pedro" : t > c ? "oi, pedr" : t > b ? "oi, pedro" : "oi,"; g.fillText(txt, 370, 457); if (Math.floor(t * 2.5) % 2) { const w2 = g.measureText(txt).width; g.fillRect(372 + w2, 425, 4, 40); } } },
 { chip: "A JANELA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "janela"), "pop"], [em(F5, "minimizar"), "pop"], [em(F5, "maximizar"), "pop"], [em(F5, "xis"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F5, "minimizar"), b = em(F5, "maximizar"), c = em(F5, "xis");
     const hl = t > c ? 2 : t > b ? 1 : t > a ? 0 : -1; janela(560, 330, 760, 400, "Jogo da escola", seg(t, em(F5, "janela"), em(F5, "janela") + .4), hl); if (t > em(F5, "janela") + .3) telaJogo(560, 360, 1.6, t);
     const bx = 560 + 380 - 132, by = 330 - 200 + 23; // centro dos botões
     etiqueta("MINIMIZAR: esconde", 1040, 250, bx + 19, by + 18, seg(t, a, a + .4)); etiqueta("MAXIMIZAR: tela toda", 1040, 340, bx + 63, by + 18, seg(t, b, b + .4)); etiqueta("FECHAR: fecha o programa", 1040, 430, bx + 107, by + 18, seg(t, c, c + .4)); } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "minimizar"), "ding"], [em(F6, "barra"), "pop"], [em(F6, "clique"), "click"], [em(F6, "Ufa"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "barra"), b = em(F6, "clique"), c = em(F6, "voltou");
     barraTarefas(470, 1, seg(t, a - .2, a + .2), t > a && t < b + .4); if (t > a) etiqueta("BARRA DE TAREFAS", 360, 410, 300, 470, seg(t, a, a + .4));
     if (t > b - .6 && t < b + .3) cursor(lerp(760, 562, io(seg(t, b - .6, b))), lerp(300, 494, io(seg(t, b - .6, b))), t > b - .05);
     const k = io(seg(t, b, c)); if (k > 0) { g.save(); g.translate(lerp(560, 640, k), lerp(498, 250, k)); g.scale(k, k); janela(0, 0, 520, 300, "Jogo da escola", 1, -1); telaJogo(0, 30, 1.3, t); g.restore(); }
     palavra("MINIMIZAR!", 640, 110, seg(t, em(F6, "minimizar"), em(F6, "minimizar") + .4) * (t < b ? 1 : 0), 70);
     pedro({ x: 1090, y: 440, s: .75, braco: t > c ? -2.6 : -.6, bracoE: t > c ? 2.6 : .3, olhar: -1, boca: t > c ? "riso" : "", pisca: pisca(t) });
     if (t > em(F6, "Ufa")) { palavra("UFA!", 640, 110, seg(t, em(F6, "Ufa"), em(F6, "Ufa") + .4), 90); confete(t, em(F6, "Ufa")); } } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "celular"), "pop"], [em(F7, "tocar"), "click"], [em(F7, "segurar"), "pop"], [em(F7, "caixa"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const a = em(F7, "celular"), b = em(F7, "tocar"), c = em(F7, "segurar"), d = em(F7, "caixa");
     const kc = back(seg(t, a, a + .4)); if (kc > 0) { g.save(); g.translate(330, 330); g.scale(kc, kc); celular(0, 0, .95, () => { g.fillStyle = "#38bdf8"; [[-40, -90], [40, -90], [-40, -10], [40, -10]].forEach(([x, y]) => { rr(x - 26, y - 26, 52, 52, 12); g.fill(); }); }); g.restore();
       if (t > b) { const toque = t > c ? 1 : (Math.floor((t - b) * 3) % 2); g.fillStyle = `rgba(250,204,21,${.3 + .4 * toque})`; g.beginPath(); g.arc(290, 240, 26 + 10 * toque, 0, 7); g.fill(); maoApontando(320, 280, -1.9, .8); } }
     comando("TOCAR = CLICAR", 330, 520, seg(t, b, b + .4), "#2563eb", 320); if (t > c) comando("SEGURAR = BOTÃO DIREITO", 330, 520, seg(t, c, c + .4), "#db2777", 420);
     const ke = back(seg(t, d, d + .4)); if (ke > 0) { g.save(); g.translate(930, 340); g.scale(ke, ke); caixaEletronico(0, 0, 1.15, t); g.restore(); comando("BOTÕES NA TELA", 930, 520, seg(t, d + .2, d + .6), "#0f766e", 320); }
     palavra("ONDE EU USO ISSO?", 640, 120, seg(t, 0, .4), 50); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 1", [PEDRO, LARA]); } }
];

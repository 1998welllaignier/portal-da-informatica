/* ================= 6º ano · Missão 2 · Algoritmos ================= */
const DUDA = { camisa: "#a855f7", cabelo: "longo" };
const duda = o => boneco(Object.assign({}, DUDA, o));
const GX = 370, GY = 220, CEL = 90;
const cx = c2 => GX + c2 * CEL + CEL / 2, cy = r => GY + r * CEL + CEL / 2;
// robô andando por uma lista de casas [[c,r],...] em k (0..1)
function roboNoCaminho(cam, k, t, s) { const n = cam.length - 1, u = cl(k) * n, i = Math.min(n - 1, Math.floor(u)), f = n ? u - i : 0; const a = cam[i], b = cam[Math.min(n, i + 1)];
  robozinho(lerp(cx(a[0]), cx(b[0]), f), lerp(cy(a[1]), cy(b[1]), f) + 22, .62, t, k >= 1); }
function porta(x, y, aberta) { g.save(); g.translate(x, y); g.fillStyle = "#78350f"; g.fillRect(-36, -80, 72, 84); if (aberta) { g.fillStyle = "#fde68a"; g.fillRect(-30, -74, 60, 78); g.fillStyle = "#b45309"; g.beginPath(); g.moveTo(-30, -74); g.lineTo(-12, -66); g.lineTo(-12, 0); g.lineTo(-30, 4); g.fill(); }
  else { g.fillStyle = "#b45309"; g.fillRect(-30, -74, 60, 78); g.fillStyle = "#fde047"; g.beginPath(); g.arc(18, -34, 5, 0, 7); g.fill(); } g.restore(); }
function bolo(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#f9a8d4"; rr(-60, -40, 120, 60, 12); g.fill(); g.fillStyle = "#fff"; rr(-60, -48, 120, 20, 10); g.fill(); g.fillStyle = "#ef4444"; g.beginPath(); g.arc(0, -56, 10, 0, 7); g.fill(); g.fillStyle = "#94a3b8"; rr(-74, 18, 148, 10, 5); g.fill(); g.restore(); }
function ingrediente(x, y, tipo) { g.save(); g.translate(x, y); if (tipo === 0) { g.fillStyle = "#fff7ed"; g.strokeStyle = "#c2410c"; g.lineWidth = 3; g.beginPath(); g.ellipse(0, 0, 22, 28, 0, 0, 7); g.fill(); g.stroke(); }
  else if (tipo === 1) { g.fillStyle = "#fef3c7"; g.strokeStyle = "#a16207"; g.lineWidth = 3; rr(-26, -32, 52, 64, 8); g.fill(); g.stroke(); g.fillStyle = "#a16207"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.fillText("FARINHA", 0, 4); }
  else { g.fillStyle = "#dbeafe"; g.strokeStyle = "#1d4ed8"; g.lineWidth = 3; rr(-20, -34, 40, 68, 8); g.fill(); g.stroke(); g.fillStyle = "#1d4ed8"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.fillText("LEITE", 0, 4); } g.restore(); }
function despertador(x, y, s, t) { g.save(); g.translate(x, y + Math.sin(t * 30) * 2); g.scale(s, s); g.fillStyle = "#ef4444"; g.beginPath(); g.arc(-34, -48, 16, 0, 7); g.arc(34, -48, 16, 0, 7); g.fill(); g.fillStyle = "#fff"; g.strokeStyle = "#ef4444"; g.lineWidth = 10; g.beginPath(); g.arc(0, 0, 54, 0, 7); g.fill(); g.stroke();
  g.strokeStyle = NAVY; g.lineWidth = 6; g.lineCap = "round"; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -32); g.moveTo(0, 0); g.lineTo(22, 10); g.stroke(); g.restore(); }

const CENAS = [
 { chip: "", fala: "Algoritmos: o robô que só faz o que a gente manda!", sfx: [[.05, "whoosh"], [.4, "pop"], [1.2, "voa"], [2.0, "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e1b4b"); tabuleiro(GX, GY - 40, 6, 3, CEL); estrela(cx(5), cy(2) - 40, 30 + Math.sin(t * 4) * 3);
     const k = io(seg(t, .6, 2.6)); robozinho(lerp(cx(0), cx(5) - 70, k), cy(0) - 18 + Math.abs(Math.sin(t * 8)) * -6, .62, t, k >= 1);
     for (let i = 0; i < 4; i++) { const kk = back(seg(t, .5 + i * .3, .9 + i * .3)); if (kk > 0) comando(["➡ ANDE", "⟳ REPITA", "◇ SE…", "▶ PLAY"][i], i < 2 ? 170 : 1110, 230 + (i % 2) * 80, kk, ["#2563eb", "#16a34a", "#ea580c", "#db2777"][i], 210); }
     abertura(t, "6º ANO · MISSÃO 2", "Algoritmos", "O ROBÔ QUE SÓ FAZ", "O QUE A GENTE MANDA!", 1.4); } },
 { chip: "O PROBLEMA", fala: "A Duda programou um robozinho para buscar uma estrela. Ela disse só: \"vai lá!\". E o robô... ficou parado. Por quê?", sfx: [[.1, "whoosh"], [2.2, "pop"], [4.6, "desliga"], [7.0, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); tabuleiro(GX, GY, 6, 3, CEL); estrela(cx(5), cy(2), 30); robozinho(cx(0), cy(0) + 22, .62, t * (t > 4.6 ? 0 : 1));
     duda({ x: 200, y: 560, s: 1.0, braco: t > 2 ? -2.3 : -.5, bracoE: .3, olhar: 1, boca: t > 6.6 ? "o" : "sorri", pisca: pisca(t) }); balao("Vai lá!", 250, 250, seg(t, 2.0, 2.4) * (1 - seg(t, 5.5, 5.7)));
     etiqueta("FICOU PARADO!", 640, 160, cx(0) + 10, cy(0) - 30, seg(t, 4.8, 5.2)); if (t > 6.8) palavra("?", 1100, 330, seg(t, 6.8, 7.2), 150); } },
 { chip: "ALGORITMO", fala: "Porque o computador faz exatamente o que mandamos. Ele precisa de um algoritmo: uma sequência de passos, em ordem, para resolver um problema.", sfx: [[.1, "whoosh"], [4.4, "pop"], [6.0, "pop"], [6.6, "pop"], [7.2, "pop"], [8.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); monitor(250, 470, .9, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); g.fillStyle = "#4ade80"; g.font = `700 20px ${F}`; g.textAlign = "left"; g.fillText("> faça EXATAMENTE", x + 14, y + 40); g.fillText("  o que mandarem", x + 14, y + 70); });
     palavra("ALGORITMO", 760, 140, seg(t, 4.2, 4.6), 86);
     ["1. Ande 2 casas", "2. Vire à direita", "3. Ande 1 casa"].forEach((s2, i) => { comando(s2, 760, 260 + i * 80, seg(t, 5.8 + i * .6, 6.2 + i * .6), "#2563eb", 330); if (i) seta(760, 260 + i * 80 - 52, 760, 260 + i * 80 - 30, seg(t, 6.2 + i * .6, 6.4 + i * .6)); });
     etiqueta("PASSOS EM ORDEM", 1080, 340, 930, 340, seg(t, 8.2, 8.6)); } },
 { chip: "ENTRADA E SAÍDA", fala: "Uma receita de bolo é um algoritmo. Ela começa com a entrada, os ingredientes, e termina com a saída, o bolo pronto. Se a ordem dos passos mudar, dá errado!", sfx: [[.1, "whoosh"], [3.0, "pop"], [3.3, "pop"], [3.6, "pop"], [6.4, "festa"], [10.0, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); palavra("RECEITA = ALGORITMO", 640, 120, seg(t, .6, 1.0), 60);
     [0, 1, 2].forEach(i => { if (seg(t, 2.8 + i * .3, 3.1 + i * .3) > 0) ingrediente(150 + i * 70, 340, i); }); cartao("ENTRADA", 220, 450, 230, "#2563eb", seg(t, 3.6, 4.0));
     ["Misture", "Coloque na forma", "Asse"].forEach((s2, i) => comando(s2, 640, 250 + i * 80, seg(t, 4.4 + i * .4, 4.8 + i * .4), t > 10 ? "#ef4444" : "#16a34a", 300));
     seta(340, 330, 470, 330, seg(t, 4.2, 4.6)); seta(810, 330, 940, 330, seg(t, 6.0, 6.4)); const kb = back(seg(t, 6.2, 6.7)); if (kb > 0) bolo(1080, 350, 1.1 * kb); cartao("SAÍDA", 1080, 450, 230, "#16a34a", seg(t, 6.6, 7.0));
     if (t > 10) { xVermelho(640, 330, 90, seg(t, 10.0, 10.3)); etiqueta("ORDEM TROCADA = DÁ ERRADO!", 640, 540 - 10, 640, 540 - 10, seg(t, 10.2, 10.6)); } } },
 { chip: "SEQUÊNCIA", fala: "O primeiro tipo de instrução é a sequência: um passo depois do outro. Ande, vire, ande.", sfx: [[.1, "whoosh"], [2.6, "ding"], [4.4, "toque"], [5.2, "toque"], [6.0, "toque"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); tabuleiro(GX, GY, 6, 3, CEL); palavra("SEQUÊNCIA", 640, 130, seg(t, 2.4, 2.8), 80);
     const cam = [[0, 0], [1, 0], [1, 1], [2, 1]]; roboNoCaminho(cam, seg(t, 4.4, 6.6), t);
     ["ANDE", "VIRE", "ANDE"].forEach((s2, i) => comando(s2, 1100, 260 + i * 90, seg(t, 4.2 + i * .8, 4.6 + i * .8), "#16a34a", 170)); etiqueta("UM DEPOIS DO OUTRO", 200, 400, 200, 400, seg(t, 3.2, 3.6)); } },
 { chip: "SEQUÊNCIA", fala: "Mas, para andar quatro casas, a Duda escreveu: ande, ande, ande, ande. Ficou comprido demais!", sfx: [[.1, "whoosh"], [2.6, "pop"], [3.2, "pop"], [3.8, "pop"], [4.4, "pop"], [5.4, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); tabuleiro(GX, GY + 40, 6, 1, CEL); robozinho(cx(0), cy(0) + 62, .62, t);
     for (let i = 0; i < 4; i++) comando("ANDE ➡", 260 + i * 250, 140, seg(t, 2.4 + i * .6, 2.8 + i * .6), "#16a34a", 210);
     etiqueta("COMPRIDO DEMAIS!", 640, 250, 640, 178, seg(t, 5.4, 5.8)); duda({ x: 1120, y: 560, s: .8, braco: -2.5, bracoE: 2.5, boca: "o", olhar: -1, pisca: pisca(t) }); } },
 { chip: "REPETIÇÃO", fala: "Então ela usou a repetição: repita quatro vezes, ande. O algoritmo ficou mais curto e faz a mesma coisa.", sfx: [[.1, "whoosh"], [1.6, "ding"], [3.0, "pop"], [4.0, "toque"], [4.6, "toque"], [5.2, "toque"], [5.8, "toque"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("REPETIÇÃO", 640, 120, seg(t, 1.4, 1.8), 80); tabuleiro(GX, GY + 60, 6, 1, CEL);
     const k = seg(t, 4.0, 6.4); robozinho(lerp(cx(0), cx(4), k), GY + 60 + CEL / 2 + 22, .62, t, k >= 1); if (k > 0) { g.fillStyle = AMAR; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText(`${Math.min(4, Math.floor(k * 4 + .001))} de 4`, 640, GY + 60 + CEL + 50); }
     comando("⟳ REPITA 4 VEZES: ANDE ➡", 640, 210, seg(t, 2.8, 3.2), "#16a34a", 470); visto(1000, 210, 30, seg(t, 6.6, 6.9)); etiqueta("MAIS CURTO!", 1150, 210, 1035, 210, seg(t, 6.8, 7.2)); } },
 { chip: "E AGORA?", fala: "No caminho apareceu uma porta. Às vezes ela está aberta; às vezes, fechada. E agora?", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.4, "click"], [4.6, "click"], [6.0, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); tabuleiro(GX, GY + 40, 6, 1, CEL); robozinho(cx(1), cy(0) + 62, .62, t); const ab = t > 3.4 && t < 4.6; porta(cx(3), cy(0) + 80, ab);
     etiqueta(ab ? "ABERTA" : "FECHADA", cx(3), 170, cx(3), 250, seg(t, 3.2, 3.5)); duda({ x: 1120, y: 560, s: .8, braco: -1.0, bracoE: .3, boca: "o", olhar: -1, pisca: pisca(t) }); balao("E agora?", 1050, 330, seg(t, 6.0, 6.3)); } },
 { chip: "SELEÇÃO", fala: "Aí entra a seleção: se a porta estiver aberta, então passe; senão, abra a porta. A pergunta \"a porta está aberta?\" é a condição. A resposta só pode ser sim ou não.", sfx: [[.1, "whoosh"], [1.4, "ding"], [3.0, "pop"], [5.0, "pop"], [6.4, "pop"], [10.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("SELEÇÃO", 640, 110, seg(t, 1.2, 1.6), 80);
     const kd = back(seg(t, 2.8, 3.3)); if (kd > 0) { g.save(); g.translate(640, 290); g.scale(kd, kd); g.fillStyle = "#fde047"; g.strokeStyle = NAVY; g.lineWidth = 5; g.beginPath(); g.moveTo(0, -80); g.lineTo(220, 0); g.lineTo(0, 80); g.lineTo(-220, 0); g.closePath(); g.fill(); g.stroke();
       g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("A porta está", 0, -4); g.fillText("aberta?", 0, 28); g.restore(); }
     const kl = seg(t, 4.8, 5.4); if (kl > 0) { linha(420, 290, lerp(420, 260, kl), lerp(290, 450, kl), "#4ade80", 7); linha(860, 290, lerp(860, 1020, kl), lerp(290, 450, kl), "#f87171", 7); }
     comando("SIM: PASSE", 260, 480, seg(t, 5.0, 5.4), "#16a34a", 260); comando("NÃO: ABRA A PORTA", 1020, 480, seg(t, 6.4, 6.8), "#dc2626", 330);
     etiqueta("CONDIÇÃO", 1040, 190, 820, 260, seg(t, 9.0, 9.4)); etiqueta("SÓ SIM OU NÃO", 260, 190, 470, 260, seg(t, 11.2, 11.6)); } },
 { chip: "O ALGORITMO COMPLETO", fala: "Sequência, repetição e seleção: com essas três instruções, a Duda montou o algoritmo completo e apertou o play.", sfx: [[.1, "whoosh"], [.8, "pop"], [1.6, "pop"], [2.4, "pop"], [6.0, "click"], [6.4, "voa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); g.fillStyle = "rgba(255,255,255,.1)"; rr(70, 170, 400, 360, 22); g.fill();
     [["➡ SEQUÊNCIA", "#2563eb"], ["⟳ REPETIÇÃO", "#16a34a"], ["◇ SELEÇÃO", "#ea580c"]].forEach(([s2, c2], i) => comando(s2, 270, 240 + i * 90, seg(t, .7 + i * .8, 1.1 + i * .8), c2, 330));
     tabuleiro(560, 220, 6, 3, 100, [8, 14]); estrela(560 + 550, 220 + 250, 30); porta(560 + 350, 220 + 85 + 40, true);
     const cam = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [5, 1], [5, 2]]; const k = seg(t, 6.4, 8.2); const n = cam.length - 1, u = k * n, i = Math.min(n - 1, Math.floor(u)), f = u - i;
     robozinho(560 + 50 + lerp(cam[i][0], cam[i + 1][0], f) * 100, 220 + 50 + lerp(cam[i][1], cam[i + 1][1], f) * 100 + 22, .62, t, k >= 1);
     const kp = back(seg(t, 5.8, 6.2)); if (kp > 0) { g.save(); g.translate(270, 500); g.scale(kp, kp); g.fillStyle = "#db2777"; g.beginPath(); g.arc(0, 0, 0.1, 0, 7); g.fill(); g.restore(); comando("▶ PLAY", 270, 500, kp, "#db2777", 200); } } },
 { chip: "CORRIGIR O ERRO", fala: "Mas atenção: se um passo estiver fora do lugar, o algoritmo falha. Calçar o tênis antes da meia? Não dá! Encontrar e corrigir o erro também faz parte.", sfx: [[.1, "whoosh"], [3.6, "pop"], [4.2, "pop"], [6.0, "alerta"], [9.0, "voa"], [10.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const troca = io(seg(t, 9.0, 10.0));
     const a = { s: "1. Calce o tênis", y: lerp(250, 340, troca) }, b = { s: "2. Calce a meia", y: lerp(340, 250, troca) };
     comando(troca > .5 ? "2. Calce o tênis" : a.s, 640, a.y, seg(t, 3.4, 3.8), troca > .5 ? "#16a34a" : "#dc2626", 380); comando(troca > .5 ? "1. Calce a meia" : b.s, 640, b.y, seg(t, 4.0, 4.4), troca > .5 ? "#16a34a" : "#dc2626", 380);
     comando("3. Amarre o cadarço", 640, 430, seg(t, 4.6, 5.0), troca > .5 ? "#16a34a" : "#2563eb", 380);
     if (t > 6 && t < 9) { xVermelho(910, 290, 40, seg(t, 6.0, 6.3)); etiqueta("NÃO DÁ!", 1100, 290, 960, 290, seg(t, 6.2, 6.6)); }
     visto(910, 340, 36, seg(t, 10.4, 10.7)); palavra(t > 9 ? "ERRO CORRIGIDO!" : "ERRO!", 640, 130, t > 9 ? seg(t, 10.4, 10.8) : seg(t, 2.0, 2.4), 70); } },
 { chip: "MISSÃO CUMPRIDA", fala: "Missão cumprida: o robô da Duda chegou à estrela, passo a passo!", sfx: [[.1, "whoosh"], [.4, "voa"], [2.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); tabuleiro(GX, GY + 60, 6, 1, CEL); estrela(cx(5), GY + 60 + CEL / 2, 34 + Math.sin(t * 6) * 4); const k = io(seg(t, .3, 2.3));
     robozinho(lerp(cx(0), cx(5) - 50, k), GY + 60 + CEL / 2 + 22 - (k >= 1 ? Math.abs(Math.sin(t * 8)) * 16 : 0), .62, t, k >= 1); duda({ x: 200, y: 600, s: .8, braco: t > 2.4 ? -2.8 : -.6, bracoE: t > 2.4 ? 2.8 : .3, pisca: pisca(t) }); cumprida(t, 2.4); } },
 { chip: "ONDE EU USO ISSO?", fala: "Onde eu uso isso? Na receita de bolo; no despertador que toca todo dia, que é repetição; e na senha do celular: se estiver certa, abre; senão, mostra erro. Isso é seleção.", sfx: [[.1, "whoosh"], [1.8, "pop"], [3.6, "pop"], [7.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); [["RECEITA", "SEQUÊNCIA", 1.6], ["DESPERTADOR", "REPETIÇÃO", 3.4], ["SENHA DO CELULAR", "SELEÇÃO", 7.0]].forEach(([n, sub, t0], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 240 + i * 400;
     g.save(); g.translate(x, 330); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-160, -150, 320, 300, 26); g.fill(); if (i === 0) bolo(0, 10, 1.2); else if (i === 1) despertador(0, 10, 1.1, t); else celular(0, 10, .5, () => cadeado(0, 10, 1, t > 9.5)); g.restore();
     cartao(n, x, 540 - 30, 300, "rgba(255,255,255,.12)", seg(t, t0 + .2, t0 + .5), sub); }); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 2 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · Turmas A, B e C · Missão 2", [DUDA, { camisa: AZUL }]); } }
];

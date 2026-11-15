/* ================= 6º ano · 2027 · 1º bimestre · Missão 2 · Entrada, processamento e saída ================= */
const LARA = { camisa: "#8b5cf6", cabelo: "longo" }, PEDRO = { camisa: "#f97316" };
const lara = o => boneco(Object.assign({}, LARA, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// faixa de etapa (ENTRADA → PROCESSAMENTO → SAÍDA) com destaque na etapa atual
function trilhaEtapas(y, atual, k) { if (k <= 0) return; const et = [["ENTRADA", "#2563eb"], ["PROCESSAMENTO", "#9333ea"], ["SAÍDA", "#16a34a"]];
  et.forEach(([n, c], i) => { const x = 260 + i * 380; g.globalAlpha = (atual === i ? 1 : .45) * cl(k); g.fillStyle = c; rr(x - 150, y - 30, 300, 60, 30); g.fill(); g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(n, x, y + 9);
    if (i < 2) { g.fillStyle = "#fff"; g.beginPath(); g.moveTo(x + 165, y - 14); g.lineTo(x + 195, y); g.lineTo(x + 165, y + 14); g.fill(); } }); g.globalAlpha = 1; }
// tela da calculadora
function calcTela(x0, y0, w, h, txt) { g.fillStyle = "#f8fafc"; g.fillRect(x0, y0, w, h); g.fillStyle = NAVY; g.font = `800 56px ${F}`; g.textAlign = "right"; g.fillText(txt, x0 + w - 20, y0 + h / 2 + 20); }
// chip do processador
function chipCPU(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = "#cbd5e1"; g.lineWidth = 6; for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(i * 22, -80); g.lineTo(i * 22, 80); g.moveTo(-80, i * 22); g.lineTo(80, i * 22); g.stroke(); }
  g.fillStyle = "#334155"; rr(-62, -62, 124, 124, 12); g.fill(); g.fillStyle = `rgba(250,204,21,${.5 + .5 * Math.sin(t * 8)})`; rr(-40, -40, 80, 80, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText("CPU", 0, 11); g.restore(); }
function hd(x, y, s, nome, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; rr(-70, -50, 140, 100, 12); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; g.beginPath(); g.arc(-10, 0, 32, 0, 7); g.fill(); g.fillStyle = cor; g.beginPath(); g.arc(-10, 0, 8, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 82); g.restore(); }
function ram(x, y, s, k) { g.save(); g.translate(x, y); g.scale(s, s); g.globalAlpha = k; g.fillStyle = "#15803d"; rr(-110, -30, 220, 60, 6); g.fill(); g.fillStyle = "#111827"; for (let i = 0; i < 6; i++) { rr(-96 + i * 33, -20, 24, 30, 3); g.fill(); } g.fillStyle = "#facc15"; for (let i = 0; i < 18; i++) g.fillRect(-104 + i * 12, 22, 6, 8); g.globalAlpha = 1;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("RAM", 0, 64); g.restore(); }
function leitorCodigo(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-30, -20, 60, 110, 14); g.fill(); g.fillStyle = "#1e293b"; rr(-60, -60, 120, 60, 16); g.fill();
  g.strokeStyle = `rgba(239,68,68,${.5 + .5 * Math.sin(t * 10)})`; g.lineWidth = 4; g.beginPath(); g.moveTo(-50, -2); g.lineTo(-90, 80); g.moveTo(50, -2); g.lineTo(90, 80); g.stroke(); g.restore(); }
function codigoBarras(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#fff"; rr(-80, -40, 160, 80, 8); g.fill(); g.fillStyle = "#111"; for (let i = 0; i < 22; i++) g.fillRect(-66 + i * 6, -28, (i % 3) + 1, 50); g.restore(); }

const F0 = "Entrada, processamento e saída: a viagem da informação!",
  F1 = "A Lara digitou dois mais três na calculadora do computador e, na mesma hora, apareceu cinco na tela. Mas o que aconteceu lá dentro?",
  F2 = "Primeiro, a entrada: a informação entra no computador. Teclado, mouse, microfone e câmera são peças de entrada.",
  F3 = "Depois, o processamento: o processador, a cê pê u, faz a conta. Ele é o cérebro do computador e fica dentro do gabinete.",
  F4 = "Por fim, a saída: o resultado aparece. Monitor, caixa de som e impressora são peças de saída.",
  F5 = "E tem peça que faz as duas coisas: a tela de toque do celular recebe o seu dedo e também mostra as imagens.",
  F6 = "Para guardar os arquivos existe o armazenamento, como o agá dê e o ésse ésse dê. Já a memória RAM guarda só o que está aberto agora e apaga tudo quando o computador desliga. Por isso, salve sempre!",
  F7 = "Onde eu uso isso? No caixa do mercado: o leitor lê o código de barras, o computador acha o preço e a tela mostra o total.",
  F8 = "Agora é com vocês: abram a Missão 2 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "pop"], [1.6, "pop"], [2.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e");
     // a informação (uma bolinha brilhante) viaja do teclado ao processador e à tela
     teclado(250, 330, 1.1); chipCPU(640, 300, .8, t); monitor(1030, 400, .9, (x0, y0, w, h) => calcTela(x0, y0, w, h, t > 1.6 ? "5" : ""));
     const k = cl(t / 1.6), px = k < .5 ? lerp(250, 640, k * 2) : lerp(640, 1030, k * 2 - 1); if (t < 1.8) { g.fillStyle = AMAR; g.beginPath(); g.arc(px, 300 - Math.sin(k * Math.PI * 2) * 60, 16, 0, 7); g.fill(); }
     abertura(t, "6º ANO · MISSÃO 2", "Entrada, processamento e saída", "A VIAGEM DA", "INFORMAÇÃO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "dois"), "click"], [em(F1, "três"), "click"], [em(F1, "cinco"), "ding"], [em(F1, "Mas"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "dois"), b = em(F1, "três"), c = em(F1, "cinco"), d = em(F1, "Mas");
     monitor(760, 470, 1.55, (x0, y0, w, h) => calcTela(x0, y0, w, h, t > c ? "5" : t > b ? "2 + 3" : t > a ? "2 +" : "0"));
     lara({ x: 270, y: 560, s: 1.05, braco: -.8, bracoE: .3, olhar: 1, boca: t > d ? "o" : "", pisca: pisca(t) });
     if (t > d) { balao("Como ele fez isso?", 300, 170, seg(t, d, d + .4)); palavra("?", 760, 160, seg(t, d + .3, d + .7), 110); } } },
 { chip: "1. ENTRADA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Teclado"), "pop"], [em(F2, "mouse"), "pop"], [em(F2, "microfone"), "pop"], [em(F2, "câmera"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); trilhaEtapas(110, 0, 1); palavra("ENTRADA", 640, 200, seg(t, em(F2, "entrada"), em(F2, "entrada") + .4), 70);
     const it = [["TECLADO", em(F2, "Teclado"), () => teclado(0, 0, 1)], ["MOUSE", em(F2, "mouse"), () => mouse(0, 0, 1.6)], ["MICROFONE", em(F2, "microfone"), () => microfone(0, 0, 1.2)], ["CÂMERA", em(F2, "câmera"), () => { g.fillStyle = "#334155"; rr(-50, -32, 100, 64, 12); g.fill(); g.fillStyle = "#93c5fd"; g.beginPath(); g.arc(0, 0, 22, 0, 7); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(0, 0, 10, 0, 7); g.fill(); }]];
     it.forEach(([n, t0, f], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 200 + i * 290; g.save(); g.translate(x, 370); g.scale(k, k); f(); g.restore(); comando(n, x, 480, seg(t, t0 + .1, t0 + .5), "#2563eb", 230);
       seta(x, 330, 640, 260, 0); }); } },
 { chip: "2. PROCESSAMENTO", fala: F3, legenda: "Depois, o processamento: o processador, a CPU, faz a conta. Ele é o cérebro do computador e fica dentro do gabinete.", sfx: [[.1, "whoosh"], [em(F3, "processador"), "pop"], [em(F3, "conta"), "ding"], [em(F3, "cérebro"), "pop"], [em(F3, "gabinete"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); trilhaEtapas(110, 1, 1); const a = em(F3, "processador"), b = em(F3, "conta"), c = em(F3, "gabinete");
     const z = io(seg(t, c - .2, c + .6)); gabinete(lerp(640, 330, z), 450, 1.3, true); const kc = back(seg(t, a, a + .4)); if (kc > 0) { g.save(); g.translate(lerp(640, 820, z), lerp(330, 340, z)); g.scale(kc, kc); chipCPU(0, 0, 1, t); g.restore(); }
     if (t > a) etiqueta("CPU = PROCESSADOR", 1040, 230, lerp(700, 880, z), 300, seg(t, a, a + .4));
     if (t > b) comando("2 + 3 = 5", lerp(640, 820, z), 520, seg(t, b, b + .4), "#9333ea", 240);
     if (t > c) { etiqueta("GABINETE", 330, 240, 330, 300, seg(t, c, c + .4)); seta(420, 380, 720, 340, seg(t, c + .3, c + .7)); } } },
 { chip: "3. SAÍDA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "resultado"), "ding"], [em(F4, "Monitor"), "pop"], [em(F4, "caixa"), "pop"], [em(F4, "impressora"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); trilhaEtapas(110, 2, 1); palavra("SAÍDA", 640, 200, seg(t, em(F4, "saída"), em(F4, "saída") + .4), 70);
     [["MONITOR", em(F4, "Monitor"), x => monitor(x, 430, .85, (x0, y0, w, h) => calcTela(x0, y0, w, h, "5"))], ["CAIXA DE SOM", em(F4, "caixa"), x => caixaSom(x, 380, 1.1, t)], ["IMPRESSORA", em(F4, "impressora"), x => impressora(x, 390, 1, seg(t, em(F4, "impressora"), em(F4, "impressora") + 1.5))]].forEach(([n, t0, f], i) => {
       const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 270 + i * 370; g.save(); g.translate(x, 0); g.translate(0, 380); g.scale(k, k); g.translate(-x, -380); f(x); g.restore(); comando(n, x, 500, seg(t, t0 + .1, t0 + .5), "#16a34a", 280); }); } },
 { chip: "ENTRADA E SAÍDA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "tela"), "pop"], [em(F5, "dedo"), "click"], [em(F5, "mostra"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const a = em(F5, "dedo"), b = em(F5, "mostra");
     celular(640, 330, 1.25, () => { if (t > b) { estrela(-30, -40, 30); estrela(35, 20, 24, "#f472b6"); g.fillStyle = "#38bdf8"; rr(-50, 70, 100, 40, 10); g.fill(); } });
     if (t > a) { g.fillStyle = "rgba(250,204,21,.5)"; g.beginPath(); g.arc(640, 330, 30 + 8 * Math.sin(t * 10), 0, 7); g.fill(); maoApontando(680, 380, -1.9, 1); }
     comando("ENTRADA: recebe o toque", 300, 250, seg(t, a, a + .4), "#2563eb", 380); comando("SAÍDA: mostra as imagens", 980, 250, seg(t, b, b + .4), "#16a34a", 380);
     palavra("AS DUAS COISAS!", 640, 100, seg(t, .3, .7), 60); } },
 { chip: "GUARDAR", fala: F6, legenda: "Para guardar os arquivos existe o armazenamento, como o HD e o SSD. Já a memória RAM guarda só o que está aberto agora e apaga tudo quando o computador desliga. Por isso, salve sempre!", sfx: [[.1, "whoosh"], [em(F6, "agá"), "pop"], [em(F6, "ésse"), "pop"], [em(F6, "RAM"), "pop"], [em(F6, "desliga"), "alerta"], [em(F6, "salve"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "agá"), b = em(F6, "ésse"), c = em(F6, "RAM"), d = em(F6, "desliga"), e = em(F6, "salve");
     palavra("ARMAZENAMENTO", 330, 120, seg(t, .3, .7), 52); const kh = back(seg(t, a, a + .4)); if (kh > 0) { g.save(); g.translate(220, 300); g.scale(kh, kh); hd(0, 0, 1.1, "HD", "#475569"); g.restore(); }
     const ks = back(seg(t, b, b + .4)); if (ks > 0) { g.save(); g.translate(440, 300); g.scale(ks, ks); hd(0, 0, 1.1, "SSD", "#0ea5e9"); g.restore(); }
     if (t > a) comando("GUARDA MESMO DESLIGADO", 330, 450, seg(t, a + .2, a + .6), "#16a34a", 420);
     if (t > c) { palavra("MEMÓRIA RAM", 950, 120, seg(t, c, c + .4), 52); ram(950, 300, 1.2, t > d ? cl(1 - seg(t, d, d + 1)) + .25 : 1); comando("SÓ O QUE ESTÁ ABERTO AGORA", 950, 450, seg(t, c + .3, c + .7), "#dc2626", 460); }
     if (t > d && t < e) { g.fillStyle = "#facc15"; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("⚡ DESLIGOU = APAGOU", 950, 210); }
     if (t > e) { cartao("SALVE SEMPRE: Ctrl + S", 640, 300, 560, "#16a34a", seg(t, e, e + .4)); } } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "leitor"), "click"], [em(F7, "preço"), "ding"], [em(F7, "total"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const a = em(F7, "leitor"), b = em(F7, "preço"), c = em(F7, "total");
     palavra("ONDE EU USO ISSO?", 640, 110, seg(t, 0, .4), 50); leitorCodigo(260, 300, 1.1, t); codigoBarras(260, 440, .9);
     comando("ENTRADA", 260, 520, seg(t, a, a + .4), "#2563eb", 220); seta(380, 330, 520, 330, seg(t, b - .3, b)); chipCPU(640, 330, .7, t); comando("PROCESSAMENTO", 640, 520, seg(t, b, b + .4), "#9333ea", 280);
     seta(760, 330, 880, 330, seg(t, c - .3, c)); monitor(1030, 430, .8, (x0, y0, w, h) => { g.fillStyle = "#ecfccb"; g.fillRect(x0, y0, w, h); if (t > c) { g.fillStyle = NAVY; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("TOTAL R$ 12", x0 + w / 2, y0 + h / 2 + 14); } });
     comando("SAÍDA", 1030, 520, seg(t, c, c + .4), "#16a34a", 200); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 2", [LARA, PEDRO]); } }
];

/* ================= 5º ano · 2026 · 4º bimestre · Missão 3 · Verdadeiro ou falso e algoritmos com escolhas ================= */
const PEDRO5 = { camisa: "#f97316" }, LARA5 = { camisa: "#a855f7", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO5, o)), lara = o => boneco(Object.assign({}, LARA5, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// placa V ou F
function placaVF(x, y, v, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = v ? "#16a34a" : "#dc2626"; rr(-50, -50, 100, 100, 20); g.fill(); g.fillStyle = "#fff"; g.font = `800 64px ${F}`; g.textAlign = "center"; g.fillText(v ? "V" : "F", 0, 23); g.restore(); }
function frase(txt, x, y, k, cor, w) { comando(txt, x, y, k, cor || "#334155", w || 620); }
function sol(x, y, r, t) { g.save(); g.translate(x, y); g.rotate(t * .3); g.fillStyle = "#facc15"; for (let i = 0; i < 10; i++) { g.rotate(Math.PI / 5); g.fillRect(-5, r + 6, 10, 22); } g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.restore(); }
function chuva(x0, y0, w, h, t) { g.strokeStyle = "#93c5fd"; g.lineWidth = 3; for (let i = 0; i < 26; i++) { const x = x0 + rnd(i) * w, y = y0 + ((t * 300 + rnd(i + 9) * h) % h); g.beginPath(); g.moveTo(x, y); g.lineTo(x - 6, y + 18); g.stroke(); } }
function guardaChuva(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#ef4444"; g.beginPath(); g.arc(0, 0, 70, Math.PI, 0); g.fill(); g.strokeStyle = "#334155"; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 80); g.arc(-12, 80, 12, 0, Math.PI); g.stroke(); g.restore(); }
function bone(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#2563eb"; g.beginPath(); g.arc(0, 0, 50, Math.PI, 0); g.fill(); rr(0, -8, 80, 16, 8); g.fill(); g.restore(); }

const F0 = "Verdadeiro ou falso: o robô que decide!",
  F1 = "O Pedro e a Lara vão sair para o passeio da escola. Mas o céu está esquisito. Levar guarda-chuva ou boné? Como um computador tomaria essa decisão?",
  F2 = "Tudo começa com a sentença lógica: uma frase que só pode ser verdadeira ou falsa. O sol é quente: verdadeiro! Peixe anda de bicicleta: falso!",
  F3 = "Existem três palavras mágicas. O NÃO inverte a frase: o que era verdadeiro vira falso. O sol não é quente? Falso!",
  F4 = "O E só é verdadeiro se as duas partes forem verdadeiras. Dois mais dois é quatro e três mais três é seis: verdadeiro! Já o OU é verdadeiro se pelo menos uma parte for verdadeira.",
  F5 = "Os computadores usam isso para fazer escolhas nos algoritmos: SE uma condição for verdadeira, ENTÃO faz uma coisa. SENÃO, faz outra.",
  F6 = "Então, o algoritmo do passeio fica assim: SE estiver chovendo, ENTÃO levo o guarda-chuva. SENÃO, levo o boné. O Pedro olhou pela janela: está chovendo? Verdadeiro! Guarda-chuva na mão. Missão cumprida!",
  F7 = "Onde eu uso isso? No semáforo: SE estiver vermelho, ENTÃO para. No jogo: SE a vida acabar, ENTÃO aparece fim de jogo. E na porta automática do mercado, que abre SE alguém chegar perto.",
  F8 = "Agora é com vocês: abram a Missão 3 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "ding"], [1.1, "alerta"], [2.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); placaVF(470, 230, true, seg(t, .4, .8)); placaVF(810, 230, false, seg(t, .9, 1.3)); robo(640, 300, .9);
     abertura(t, "5º ANO · MISSÃO 3", "Verdadeiro ou falso", "O ROBÔ", "QUE DECIDE!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "esquisito"), "misterio"], [em(F1, "guarda"), "pop"], [em(F1, "boné"), "pop"], [em(F1, "computador"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#334155"); const a = em(F1, "esquisito"), b = em(F1, "guarda"), c = em(F1, "boné"), d = em(F1, "computador");
     nuvem(900, 170, .9); if (t > a) nuvem(1080, 200, .7);
     pedro({ x: 260, y: 600, s: 1.05, braco: -.6, bracoE: .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) }); lara({ x: 420, y: 600, s: 1.05, braco: -.4, bracoE: .4, olhar: 1, pisca: pisca(t + .7) });
     if (t > b) guardaChuva(700, 380, .9); if (t > c) bone(900, 430, 1); if (t > b) palavra("?", 800, 330, seg(t, b, b + .4), 80);
     if (t > d) palavra("COMO O COMPUTADOR DECIDE?", 640, 100, seg(t, d, d + .4), 50); } },
 { chip: "SENTENÇA LÓGICA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "sentença"), "ding"], [em(F2, "quente"), "pop"], [em(F2, "verdadeiro", 1), "festa"], [em(F2, "bicicleta"), "pop"], [em(F2, "falso", 1), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s0 = em(F2, "sentença"), a = em(F2, "sol"), b = em(F2, "verdadeiro", 1), c = em(F2, "Peixe"), d = em(F2, "falso", 1);
     palavra("SENTENÇA LÓGICA", 600, 100, seg(t, s0, s0 + .4), 56); if (t > s0 + .3) cartao("SÓ PODE SER VERDADEIRA OU FALSA", 640, 190, 620, "#2563eb", seg(t, s0 + .3, s0 + .7));
     if (t > a) { sol(250, 330, 40, t); frase("“O sol é quente”", 600, 330, seg(t, a, a + .4)); placaVF(1000, 330, true, seg(t, b, b + .3)); }
     if (t > c) { frase("“Peixe anda de bicicleta”", 600, 470, seg(t, c, c + .4)); placaVF(1000, 470, false, seg(t, d, d + .3)); } } },
 { chip: "NÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "NÃO"), "ding"], [em(F3, "inverte"), "pop"], [em(F3, "Falso"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const n = em(F3, "NÃO"), i = em(F3, "inverte"), q = em(F3, "sol"), f = em(F3, "Falso");
     palavra("3 PALAVRAS MÁGICAS", 640, 90, seg(t, .1, .5), 52); ["NÃO", "E", "OU"].forEach((p, j) => comando(p, 440 + j * 200, 170, seg(t, .4 + j * .2, .7 + j * .2), j === 0 ? "#dc2626" : "#475569", 150));
     if (t > i) { const vira = (t - i) % 2 > 1; placaVF(540, 320, !vira, 1); seta(610, 320, 700, 320, 1, "#fde68a"); placaVF(770, 320, vira, 1); comando("INVERTE: V ↔ F", 655, 420, seg(t, i, i + .4), "#dc2626", 320); }
     if (t > q) { frase("“O sol NÃO é quente”", 560, 510, seg(t, q, q + .4), "#334155", 560); placaVF(960, 510, false, seg(t, f, f + .3)); } } },
 { chip: "E · OU", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "E"), "ding"], [em(F4, "verdadeiro", 1), "festa"], [em(F4, "OU"), "ding"], [em(F4, "pelo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const e = em(F4, "E"), v = em(F4, "verdadeiro", 1), o = em(F4, "OU"), p = em(F4, "pelo");
     comando("E: AS DUAS PARTES TÊM DE SER V", 640, 110, seg(t, e, e + .4), "#16a34a", 560);
     if (t > e) { frase("2 + 2 = 4", 330, 220, seg(t, e + .5, e + .9), "#334155", 240); comando("E", 520, 220, seg(t, e + .7, e + 1), "#16a34a", 80); frase("3 + 3 = 6", 710, 220, seg(t, e + .9, e + 1.3), "#334155", 240); placaVF(960, 220, true, seg(t, v, v + .3)); }
     if (t > o) { comando("OU: BASTA UMA PARTE SER V", 640, 340, seg(t, o, o + .4), "#ca8a04", 520); frase("2 + 2 = 5", 330, 440, seg(t, o + .4, o + .8), "#334155", 240); placaVF(330, 440, false, 0);
       comando("OU", 520, 440, seg(t, o + .6, o + .9), "#ca8a04", 80); frase("3 + 3 = 6", 710, 440, seg(t, o + .8, o + 1.2), "#334155", 240); placaVF(960, 440, true, seg(t, p, p + .3)); } } },
 { chip: "SE · ENTÃO · SENÃO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "SE"), "ding"], [em(F5, "ENTÃO"), "pop"], [em(F5, "SENÃO"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const s = em(F5, "SE"), e = em(F5, "ENTÃO"), n = em(F5, "SENÃO");
     palavra("O COMPUTADOR ESCOLHE", 600, 100, seg(t, 0, .4), 46);
     noDecisao("SE a condição for V", 640, 230, seg(t, s, s + .4), "#0e7490");
     if (t > e) { seta(560, 270, 380, 360, seg(t, e, e + .3)); comando("✔ ENTÃO: faz isto", 330, 400, seg(t, e, e + .4), "#16a34a", 320); }
     if (t > n) { seta(720, 270, 900, 360, seg(t, n, n + .3)); comando("✖ SENÃO: faz aquilo", 950, 400, seg(t, n, n + .4), "#dc2626", 320); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "SE"), "ding"], [em(F6, "guarda"), "pop"], [em(F6, "boné"), "pop"], [em(F6, "janela"), "misterio"], [em(F6, "Verdadeiro"), "festa"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s = em(F6, "SE"), j = em(F6, "janela"), v = em(F6, "Verdadeiro"), m = em(F6, "Missão");
     noDecisao("SE está chovendo", 640, 120, seg(t, s, s + .4), "#0e7490");
     comando("ENTÃO: guarda-chuva", 360, 230, seg(t, em(F6, "guarda"), em(F6, "guarda") + .4), "#16a34a", 340); comando("SENÃO: boné", 920, 230, seg(t, em(F6, "boné"), em(F6, "boné") + .4), "#dc2626", 260);
     if (t > j) { g.fillStyle = "#93c5fd"; rr(820, 300, 260, 200, 12); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 8; g.strokeRect(820, 300, 260, 200); g.beginPath(); g.moveTo(950, 300); g.lineTo(950, 500); g.stroke(); chuva(820, 300, 260, 200, t); }
     if (t > v) { placaVF(950, 250, true, 0); guardaChuva(420, 380, .8); }
     pedro({ x: 300, y: 600, s: .95, braco: t > v ? -2.6 : -.6, bracoE: .3, olhar: 1, boca: t > v ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "semáforo"), "pop"], [em(F7, "jogo"), "pop"], [em(F7, "porta"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 90, seg(t, 0, .4), 50);
     const a = em(F7, "semáforo"), b = em(F7, "jogo"), c = em(F7, "porta");
     if (t > a) { const k = back(seg(t, a, a + .4)); g.save(); g.translate(260, 300); g.scale(k, k); g.fillStyle = "#1e293b"; rr(-45, -110, 90, 220, 16); g.fill(); ["#ef4444", "#facc15", "#22c55e"].forEach((c, i) => { g.fillStyle = i === 0 ? c : "#475569"; g.beginPath(); g.arc(0, -65 + i * 65, 26, 0, 7); g.fill(); }); g.restore(); comando("SE vermelho → PARA", 260, 470, seg(t, a + .2, a + .6), "#dc2626", 320); }
     if (t > b) { const k = back(seg(t, b, b + .4)); g.save(); g.translate(640, 300); g.scale(k, k); g.fillStyle = "#0f172a"; rr(-120, -90, 240, 180, 14); g.fill(); g.fillStyle = "#ef4444"; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText("FIM DE JOGO", 0, 12); g.restore(); comando("SE a vida acaba → FIM", 640, 470, seg(t, b + .2, b + .6), "#7c3aed", 340); }
     if (t > c) { const k = back(seg(t, c, c + .4)), ab = cl((t - c - .6) / .8) * 60; g.save(); g.translate(1020, 300); g.scale(k, k); g.fillStyle = "#94a3b8"; rr(-120, -110, 240, 220, 10); g.fill(); g.fillStyle = "#bae6fd"; g.fillRect(-110 - ab, -100, 108, 200); g.fillRect(2 + ab, -100, 108, 200); g.restore(); comando("SE alguém chega → ABRE", 1020, 470, seg(t, c + .2, c + .6), "#16a34a", 360); } } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "5º ano · 4º bimestre de 2026 · Missão 3", [PEDRO5, LARA5]); } }
];

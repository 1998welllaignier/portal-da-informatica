/* ================= 7º ano · 2027 · 1º bimestre · Missão 1 · Programar com blocos ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// bloco de programação (estilo encaixe). tipo: "acao" (azul), "repita" (laranja, com boca), "se" (roxo)
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
function bocaRepita(x, y, w, h, txt, k, brilho) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = "#ea580c"; rr(x, y, w, 50, 10); g.fill(); g.fillRect(x, y, 30, h); rr(x, y + h - 10, w * .6, 34, 10); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, x + 16, y + 33); g.restore(); }
// tela do programa (saída)
function telaPrograma(x, y, w, h, linhas) { g.fillStyle = "#0f172a"; rr(x, y, w, h, 14); g.fill(); g.fillStyle = "#94a3b8"; g.font = `800 16px ${F}`; g.textAlign = "left"; g.fillText("TELA DO PROGRAMA", x + 16, y + 26);
  linhas.forEach((l, i) => { g.fillStyle = l[1] || "#4ade80"; g.font = `800 28px ${F}`; g.fillText(l[0], x + 20, y + 66 + i * 36); }); }
function robo7(x, y, s, pulo, fala) { s *= 2.4; g.save(); g.translate(x, y - Math.max(0, pulo) * 70); robozinho(0, 0, s, 0, true); g.restore(); if (fala) balao(fala, x, y - 62 * s - Math.max(0, pulo) * 70, 1); }

const F0 = "Programar com blocos: o robô que só obedece!",
  F1 = "O Caio montou um programa para o robô dar três pulos e depois dizer fim. Apertou o play, e o robô gritou fim três vezes! O que deu errado?",
  F2 = "Um programa é um algoritmo numa linguagem que o computador entende. Aqui, essa linguagem são blocos que se encaixam como peças de montar.",
  F3 = "O computador lê os blocos de cima para baixo, um de cada vez, e faz exatamente o que eles mandam. Isso é a sequência.",
  F4 = "O bloco repita faz os blocos de dentro dele várias vezes. Repita três vezes: pular. E o robô pula, pula, pula!",
  F5 = "O bloco se escolhe um caminho. Se a nota for maior ou igual a cinco, mostrar passou. Senão, mostrar recuperação.",
  F6 = "E o programa do Caio? O bloco fim estava dentro do repita! Ele tirou o bloco lá de dentro e colocou embaixo. Agora, três pulos e um fim só. A posição do bloco muda o resultado!",
  F7 = "Onde eu uso isso? O despertador usa seleção: se for seis horas, ele toca. E, no jogo, a vida do personagem é uma variável, uma caixinha que guarda um número.",
  F8 = "Agora é com vocês: abram a Missão 1 no portal!";

// programa errado: "fim" dentro do repita
function progErrado(x, y, k, hl) { bocaRepita(x, y, 330, 190, "🔁 repita 3 vezes", k, hl === "r"); bloco(x + 30, y + 50, 220, "⬆️ pular", "#2563eb", k, hl === "p"); bloco(x + 30, y + 104, 220, "💬 dizer \"fim\"", "#7c3aed", k, hl === "f"); }
function progCerto(x, y, k) { bocaRepita(x, y, 330, 136, "🔁 repita 3 vezes", k); bloco(x + 30, y + 50, 220, "⬆️ pular", "#2563eb", k); bloco(x, y + 160, 250, "💬 dizer \"fim\"", "#7c3aed", k, true); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"], [1.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); bloco(200, 170, 230, "▶️ quando clicar", "#16a34a", seg(t, .3, .6)); bloco(200, 222, 230, "⬆️ pular", "#2563eb", seg(t, .6, .9)); bloco(200, 274, 230, "💬 dizer \"oi\"", "#7c3aed", seg(t, .9, 1.2));
     robo7(1010, 400, .62, t > 1.4 ? Math.abs(Math.sin((t - 1.4) * 4)) : 0, t > 1.8 ? "Oi!" : null);
     abertura(t, "7º ANO · MISSÃO 1", "Programar com blocos", "O ROBÔ QUE", "SÓ OBEDECE!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "play"), "click"], [em(F1, "gritou"), "alerta"], [em(F1, "errado"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "play"), b = em(F1, "gritou"), c = em(F1, "errado");
     progErrado(90, 150, seg(t, .3, .8), t > c ? "f" : null); caio({ x: 560, y: 560, s: .95, braco: t > b ? -2.4 : -.8, bracoE: t > b ? 2.4 : .3, olhar: 1, boca: t > b ? "o" : "", pisca: pisca(t) });
     if (t > a) { const p = t - a, ciclo = Math.floor(p / .9), f = (p % .9) / .9; robo7(960, 400, .85, ciclo < 3 ? Math.sin(f * Math.PI) * (f < .5 ? 1 : 0) : 0, ciclo < 3 && f > .5 ? "FIM!" : (ciclo >= 3 ? "FIM!" : null)); comando("FIM ×" + Math.min(3, ciclo + (f > .5 ? 1 : 0)), 960, 520, seg(t, b, b + .3), "#dc2626", 200); } else robo7(960, 400, .85, 0, null);
     if (t > c) palavra("O QUE DEU ERRADO?", 640, 100, seg(t, c, c + .4), 56); } },
 { chip: "PROGRAMA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "algoritmo"), "ding"], [em(F2, "blocos"), "pop"], [em(F2, "montar"), "click"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F2, "algoritmo"), b = em(F2, "blocos"), c = em(F2, "montar");
     palavra("PROGRAMA", 640, 110, seg(t, .3, .7), 76); if (t > a) cartao("= ALGORITMO QUE O COMPUTADOR ENTENDE", 640, 220, 760, "#7c3aed", seg(t, a, a + .4));
     const enc = io(seg(t, c, c + 1)); bloco(lerp(260, 470, enc), lerp(330, 340, enc), 240, "⬆️ pular", "#2563eb", seg(t, b, b + .4)); bloco(lerp(760, 470, enc), lerp(430, 392, enc), 240, "💬 dizer \"oi\"", "#7c3aed", seg(t, b + .2, b + .6));
     if (t > c + 1) visto(820, 370, 40, seg(t, c + 1, c + 1.3)); } },
 { chip: "1. SEQUÊNCIA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "cima"), "pop"], [em(F3, "vez"), "click"], [em(F3, "sequência"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F3, "cima"), b = em(F3, "sequência");
     const passos = ["▶️ quando clicar", "⬆️ pular", "➡️ andar", "💬 dizer \"oi\""]; const at = t > a ? Math.min(3, Math.floor((t - a) / .9)) : -1;
     passos.forEach((p, i) => bloco(170, 160 + i * 54, 280, p, i === 0 ? "#16a34a" : "#2563eb", seg(t, .2 + i * .15, .5 + i * .15), i === at));
     if (t > a) { seta(130, 170, 130, 350, seg(t, a, a + .5)); comando("DE CIMA PARA BAIXO", 300, 430, seg(t, a, a + .4), "#2563eb", 320); }
     robo7(900, 420, .85, at === 1 ? .8 : 0, at === 3 ? "Oi!" : null); if (t > b) palavra("SEQUÊNCIA", 900, 110, seg(t, b, b + .4), 70); } },
 { chip: "2. REPETIÇÃO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "repita"), "pop"], [em(F4, "pula"), "pop"], [em(F4, "pula", 1), "pop"], [em(F4, "pula", 2), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const a = em(F4, "repita"), b = em(F4, "pula");
     bocaRepita(140, 180, 330, 136, "🔁 repita 3 vezes", seg(t, a, a + .4), t > b); bloco(170, 230, 220, "⬆️ pular", "#2563eb", seg(t, a + .2, a + .6));
     const n = t > b ? Math.min(3, Math.floor((t - b) / .55) + 1) : 0, f = t > b ? ((t - b) % .55) / .55 : 0;
     robo7(900, 440, .85, t > b && (t - b) < 1.65 ? Math.sin(f * Math.PI) : 0, null); comando("PULOS: " + n, 900, 520, seg(t, b, b + .3), "#ea580c", 220);
     palavra("REPETIÇÃO", 640, 100, seg(t, a, a + .4), 70); } },
 { chip: "3. SELEÇÃO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "se", 1), "pop"], [em(F5, "passou"), "ding"], [em(F5, "Senão"), "pop"], [em(F5, "recuperação"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F5, "se", 1), b = em(F5, "passou"), c = em(F5, "Senão");
     palavra("SELEÇÃO", 640, 100, seg(t, .2, .6), 70); noDecisao("nota ≥ 5 ?", 640, 230, seg(t, a, a + .4), "#7c3aed");
     if (t > b) { seta(560, 270, 380, 360, seg(t, b - .2, b + .2)); cartao("SIM: \"passou\" ✅", 330, 420, 360, "#16a34a", seg(t, b, b + .4)); }
     if (t > c) { seta(720, 270, 900, 360, seg(t, c, c + .4)); cartao("NÃO: \"recuperação\"", 950, 420, 400, "#dc2626", seg(t, c + .2, c + .6)); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "dentro"), "alerta"], [em(F6, "tirou"), "click"], [em(F6, "três", 0), "pop"], [em(F6, "só"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "dentro"), b = em(F6, "tirou"), c = em(F6, "Agora");
     if (t < b) { progErrado(90, 150, 1, t > a ? "f" : null); if (t > a) etiqueta("DENTRO DO REPITA!", 560, 260, 380, 280, seg(t, a, a + .4)); }
     else progCerto(90, 150, 1);
     if (t > c) { const p = t - c, n = Math.min(3, Math.floor(p / .6) + 1); robo7(960, 400, .85, p < 1.8 ? Math.abs(Math.sin((p % .6) / .6 * Math.PI)) : 0, p > 1.9 ? "FIM!" : null); comando(p > 1.9 ? "3 PULOS + 1 FIM ✅" : "PULOS: " + n, 960, 520, seg(t, c, c + .3), "#16a34a", 320); }
     if (t > em(F6, "posição")) palavra("A POSIÇÃO MUDA TUDO!", 640, 100, seg(t, em(F6, "posição"), em(F6, "posição") + .4), 54); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "despertador"), "pop"], [em(F7, "toca"), "alerta"], [em(F7, "jogo"), "pop"], [em(F7, "variável"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 110, seg(t, 0, .4), 50); const a = em(F7, "despertador"), b = em(F7, "toca"), c = em(F7, "jogo"), d = em(F7, "variável");
     if (t > a) { celular(300, 330, .8, () => { g.fillStyle = t > b && Math.floor(t * 6) % 2 ? "#fde68a" : "#e0f2fe"; g.fillRect(-70, -146, 140, 292); g.fillStyle = NAVY; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("6:00", 0, 10); g.font = `800 22px ${F}`; g.fillText("⏰", 0, -50); }); comando("SE FOR 6H → TOCA", 300, 520, seg(t, a + .3, a + .7), "#7c3aed", 320); }
     if (t > c) { const vida = t > d + 1 ? 2 : 3; g.fillStyle = "#1e293b"; rr(760, 200, 400, 240, 18); g.fill(); robozinho(860, 400, .55, 0, true); g.font = `800 34px ${F}`; g.textAlign = "left"; g.fillText("❤️".repeat(vida), 940, 270);
       if (t > d) { g.fillStyle = "#facc15"; rr(940, 300, 190, 70, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.fillText("vida = " + vida, 960, 345); comando("VARIÁVEL = CAIXINHA", 960, 520, seg(t, d, d + .4), "#ca8a04", 360); } } } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 1", [CAIO, MENINA7]); } }
];

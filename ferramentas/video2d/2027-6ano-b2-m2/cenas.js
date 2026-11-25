/* ================= 6º ano · 2027 · 2º bimestre · Missão 2 · Sequência: a ordem importa ================= */
const PEDRO = { camisa: "#f97316" }, TAINA = { camisa: "#ec4899", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), taina = o => boneco(Object.assign({}, TAINA, o));
function carta(v, x, y, cor, a, w) { if (a <= 0) return; g.save(); g.globalAlpha = cl(a); w = w || 104; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 60, w, 120, 16); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 4; rr(x - w / 2, y - 60, w, 120, 16); g.stroke();
  g.fillStyle = NAVY; g.font = `800 46px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(v, x, y + 2); g.restore(); g.textBaseline = "alphabetic"; }
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
function ondeUso(t, F_, itens) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
  itens.forEach(([w, e, a, b], i) => { const t0 = em(F_, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
    g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); }
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
function bocaC(x, y, w, h, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; }
  g.fillStyle = cor; rr(0, 0, w, 52, 10); g.fill(); rr(0, 0, 34, h, 8); g.fill(); rr(0, h - 30, w * .55, 30, 8); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 34); g.restore(); }
function telinha(x, y, w, tit, linhas, k, hl, ok) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ".  " + s, -w / 2 + 24, yy + 23); });
  g.restore(); }
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
// robô no tabuleiro: cmds = setas; anda uma casa a cada passo a partir de t0
const DIR = { "➡️": [1, 0], "⬅️": [-1, 0], "⬆️": [0, -1], "⬇️": [0, 1] };
function roboPos(cmds, t, t0, dt, ini, par, cols) { let [c, r] = ini; const n = t > t0 ? (t - t0) / dt : 0; let k = 0, bateu = false;
  for (let i = 0; i < cmds.length; i++) { const f = cl(n - i); if (f <= 0) break; const d = DIR[cmds[i]]; const nc = Math.round(c) + d[0], nr = Math.round(r) + d[1];
    if (par && (par.includes(nr * cols + nc) || nc < 0 || nr < 0 || nc >= cols)) { c += d[0] * Math.sin(f * Math.PI) * .25; r += d[1] * Math.sin(f * Math.PI) * .25; bateu = true; k = i; break; }
    c += d[0] * f; r += d[1] * f; k = i; } return [c, r, Math.min(cmds.length, Math.floor(n)), bateu]; }
function cena_robo(t, x0, y0, cols, rows, cel, paredes, estrela, cmds, t0, dt, ini, cx, cy) { tabuleiro(x0, y0, cols, rows, cel, paredes); emo("⭐", x0 + estrela[0] * cel + cel / 2, y0 + estrela[1] * cel + cel / 2 + 14, cel * .5);
  const [c, r, k, bateu] = roboPos(cmds, t, t0, dt, ini, paredes, cols); robozinho(x0 + c * cel + cel / 2, y0 + r * cel + cel / 2 + 10, cel / 110, t, false);
  cmds.forEach((s, i) => { g.fillStyle = i < k ? "#16a34a" : i === k && t > t0 ? "#facc15" : "#fff"; rr(cx + i * 58, cy, 52, 52, 10); g.fill(); emo(s, cx + i * 58 + 26, cy + 38, 30); }); if (bateu) emo("💥", x0 + c * cel + cel, y0 + r * cel + cel / 2, 40); return [c, r, bateu]; }

const F0 = "Sequência: a ordem importa!",
  F1 = "A Tainá estava atrasada para a aula de informática. Calçou o tênis bem rápido e depois a meia. Resultado: a meia ficou por cima do tênis! Todo mundo riu, e ela teve que fazer tudo de novo.",
  F2 = "Na sequência, as instruções são feitas uma depois da outra, de cima para baixo, na ordem em que estão escritas. E o computador nunca pula um passo e nunca muda a ordem sozinho.",
  F3 = "A ordem importa! Calçar a meia e depois o tênis: perfeito. Trocou? A meia fica por cima. Entrar na sala antes de abrir a porta? Você bate na porta fechada. Escovar os dentes antes de colocar o creme dental? Escova sem creme!",
  F4 = "O robozinho do labirinto também segue uma sequência. Cada seta é uma instrução que anda uma casa: direita, esquerda, cima e baixo.",
  F5 = "Se as setas estiverem na ordem certa, o robô chega na estrela. Mas, se uma seta estiver no lugar errado, ele bate na parede, ou para longe da estrela.",
  F6 = "A dica para montar a sequência: pergunte sempre o que tem que acontecer primeiro. Depois: e agora, o que vem logo depois?",
  F7 = "No dia seguinte, a Tainá calçou a meia primeiro e depois o tênis, e chegou na hora. Missão cumprida!",
  F8 = "Onde eu uso isso? Para mandar uma mensagem: desbloquear, abrir o aplicativo, escolher a pessoa, digitar e só depois enviar. No micro-ondas: colocar a comida, fechar a porta, escolher o tempo e só então apertar iniciar. E na senha do celular: os números certos, na ordem errada, não abrem o aparelho.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";
const PAR = [[2, 7, 8, 13], []];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); ["1", "2", "3"].forEach((n, i) => comando(n, 860 + i * 90, 160, seg(t, .3 + i * .2, .6 + i * .2), ["#16a34a", "#2563eb", "#7c3aed"][i], 70)); if (t > 1) seta(840, 220, 1080, 220, 1, "#fde68a");
     abertura(t, "6º ANO · MISSÃO 2", "Sequência", "A ORDEM", "IMPORTA!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "tênis"), "pop"], [em(F1, "meia"), "pop"], [em(F1, "riu"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const tn = em(F1, "tênis"), mi = em(F1, "meia"), r = em(F1, "riu");
     if (t > tn) emo("👟", 640, 360, 120); if (t > mi) { emo("🧦", 640 + Math.sin(t * 4) * 6, 290, 90); rotulo("a meia por cima do tênis!", 640, 450, "#fecaca", seg(t, mi + .4, mi + .8)); } if (t > r) emo("😂", 980, 250, 70);
     taina({ x: 250, y: 620, s: .9, braco: t > mi ? -2.6 : -.6, bracoE: t > mi ? 2.6 : .3, olhar: 1, boca: t > mi ? "o" : "", pisca: pisca(t) }); } },
 { chip: "SEQUÊNCIA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "sequência"), "ding"], [em(F2, "baixo"), "pop"], [em(F2, "nunca"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const s = em(F2, "sequência"), b = em(F2, "baixo"), n = em(F2, "nunca");
     comando("📜 SEQUÊNCIA = UM PASSO DEPOIS DO OUTRO", 640, 100, seg(t, s, s + .4), "#16a34a", 620);
     ["1. primeiro", "2. depois", "3. depois", "4. por último"].forEach((x, i) => caixa(400, 190 + i * 74, x, t > b + i * .4 ? "#fde68a" : "#fff", seg(t, s + .3 + i * .1, s + .6 + i * .1), 280)); if (t > b) seta(580, 190, 580, 420, 1, "#fde68a");
     if (t > n) { cartao("🤖 nunca pula um passo", 920, 260, 480, "#7c3aed", seg(t, n, n + .4)); cartao("🤖 nunca muda a ordem", 920, 380, 480, "#7c3aed", seg(t, n + .4, n + .8)); } } },
 { chip: "A ORDEM IMPORTA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "perfeito"), "ding"], [em(F3, "Trocou"), "alerta"], [em(F3, "bate"), "alerta"], [em(F3, "creme", 1), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const p = em(F3, "perfeito"), b = em(F3, "bate"), c = em(F3, "creme", 1);
     const L = []; if (t > p - .5) L.push(["🧦 meia → 👟 tênis", t > p + 1 ? "👟 tênis → 🧦 meia" : "", t > p + 1.5 ? "!meia por cima!" : ""]); if (t > b - .5) L.push(["🚪 abrir → entrar", "entrar → abrir", "!bate na porta!"]); if (t > c - .5) L.push(["🧴 creme → 🪥 escovar", "escovar → creme", "!escova sem creme!"]);
     tabela(640, 120, 1000, ["✅ ORDEM CERTA", "🔀 ORDEM TROCADA", "😵 O QUE DÁ ERRADO"], L, ["#16a34a", "#ca8a04", "#dc2626"], 1, -1, 70); } },
 { chip: "O ROBÔ DO LABIRINTO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "seta"), "pop"], [em(F4, "direita"), "pop"], [em(F4, "esquerda"), "pop"], [em(F4, "cima"), "pop"], [em(F4, "baixo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const s = em(F4, "seta"); tabuleiro(140, 140, 5, 3, 100, []); robozinho(390, 260, .9, t, false);
     [["direita", "➡️", 490, 250], ["esquerda", "⬅️", 290, 250], ["cima", "⬆️", 390, 160], ["baixo", "⬇️", 390, 350]].forEach(([w, e, x, y]) => { const t0 = em(F4, w); if (t > t0) emo(e, x, y + 12, 40); });
     if (t > s) cartao("CADA SETA = ANDA 1 CASA", 960, 270, 420, "#ca8a04", seg(t, s, s + .4)); } },
 { chip: "CERTO × ERRADO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "estrela"), "ding"], [em(F5, "parede"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const e = em(F5, "estrela"), w = em(F5, "Mas");
     if (t < w) { cena_robo(t, 300, 110, 4, 3, 110, [5, 6], [3, 2], ["➡️", "➡️", "➡️", "⬇️", "⬇️"], .5, .6, [0, 0], 380, 470); if (t > e) visto(800, 160, 28, 1); }
     else { const [c, r, bt] = cena_robo(t, 300, 110, 4, 3, 110, [5, 6], [3, 2], ["⬇️", "➡️", "➡️", "➡️", "⬇️"], w, .6, [0, 0], 380, 470); if (bt) { xVermelho(800, 160, 28, 1); rotulo("BATEU NA PAREDE!", 1000, 300, "#fecaca", 1); } } } },
 { chip: "A DICA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "primeiro"), "ding"], [em(F6, "depois", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const p = em(F6, "primeiro"), d = em(F6, "depois", 1);
     cartao("❓ O que tem que acontecer PRIMEIRO?", 640, 220, 760, "#2563eb", seg(t, p, p + .4)); cartao("❓ E agora, o que vem LOGO DEPOIS?", 640, 350, 760, "#7c3aed", seg(t, d, d + .4)); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "meia"), "pop"], [em(F7, "tênis"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const mi = em(F7, "meia"), tn = em(F7, "tênis"), m = em(F7, "Missão"); if (t > mi) { comando("1. 🧦 meia", 700, 220, 1, "#16a34a", 220); } if (t > tn) { comando("2. 👟 tênis", 700, 300, 1, "#2563eb", 220); visto(860, 260, 24, 1); }
     taina({ x: 250, y: 620, s: .9, braco: t > tn ? -2.4 : -.6, bracoE: t > tn ? 2.4 : .3, olhar: 1, boca: t > tn ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mensagem"), "pop"], [em(F8, "micro"), "pop"], [em(F8, "senha"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mensagem", "💬", "Mandar mensagem:", "digitar antes de enviar"], ["micro", "🍲", "Micro-ondas:", "fechar antes de iniciar"], ["senha", "🔢", "Senha do celular:", "a ordem importa"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 2º bimestre de 2027 · Missão 2", [PEDRO, TAINA]); } }
];

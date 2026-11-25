/* ================= 6º ano · 2027 · 2º bimestre · Missão 1 · Algoritmos do dia a dia ================= */
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

const F0 = "Algoritmos do dia a dia!",
  F1 = "O Pedro pediu ao robozinho Bit: faz o suco aí! E o Bit ficou parado, piscando. Ele não sabia por onde começar. O Pedro ficou bravo: mas é tão fácil!",
  F2 = "Para a gente, é fácil, porque já sabe fazer. Mas o computador não adivinha nada. Ele faz exatamente o que mandamos, do jeito que mandamos. Por isso, precisa de um algoritmo.",
  F3 = "Algoritmo é uma lista de passos, em ordem, para resolver um problema ou fazer uma tarefa. Cada passo do algoritmo se chama instrução.",
  F4 = "E cada instrução precisa ser clara, sem deixar dúvida, e precisa, dizendo exatamente o que fazer. Faz o suco aí é vago. O bom é assim: um, pegar um copo. Dois, colocar duas colheres de suco em pó. Três, encher o copo com água. Quatro, mexer com a colher.",
  F5 = "Todo algoritmo tem começo, meio e fim: começa num ponto, segue os passos e termina quando o problema está resolvido. Se for bem feito, qualquer pessoa que seguir os passos chega ao mesmo resultado.",
  F6 = "E um programa de computador é isso: um algoritmo escrito numa linguagem que o computador entende.",
  F7 = "O Pedro escreveu os quatro passos, e o Bit fez o suco direitinho. Missão cumprida!",
  F8 = "Onde eu uso isso? Na receita de bolo da família. No manual de montagem de um brinquedo, com os passos numerados. No GPS do celular: siga em frente, vire à direita. E no jogo do celular, que funciona porque alguém escreveu milhares de instruções.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
function copo(x, y, s, nivel, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "rgba(255,255,255,.25)"; g.beginPath(); g.moveTo(-40, -60); g.lineTo(40, -60); g.lineTo(30, 60); g.lineTo(-30, 60); g.closePath(); g.fill();
  if (nivel > 0) { const h = 110 * nivel; g.fillStyle = cor || "#fb923c"; g.beginPath(); g.moveTo(-30 - 10 * nivel, 60 - h); g.lineTo(30 + 10 * nivel, 60 - h); g.lineTo(30, 60); g.lineTo(-30, 60); g.closePath(); g.fill(); } g.strokeStyle = "#fff"; g.lineWidth = 4; g.beginPath(); g.moveTo(-40, -60); g.lineTo(-30, 60); g.lineTo(30, 60); g.lineTo(40, -60); g.stroke(); g.restore(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); ["1", "2", "3", "4"].forEach((n, i) => comando(n + ". passo", 900, 140 + i * 58, seg(t, .3 + i * .2, .6 + i * .2), "#ea580c", 160)); robozinho(1090, 260, .9, t, true);
     abertura(t, "6º ANO · MISSÃO 1", "Algoritmos", "DO DIA", "A DIA!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "suco"), "pop"], [em(F1, "parado"), "misterio"], [em(F1, "bravo"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s = em(F1, "suco"), p = em(F1, "parado"), b = em(F1, "bravo");
     if (t > s) balao("Faz o suco aí!", 340, 250, seg(t, s, s + .3)); robozinho(820, 360, 1.3, t > p ? 0 : t, false); if (t > p) { emo("❓", 880, 200, 50); emo("❓", 760, 190, 36); }
     pedro({ x: 230, y: 620, s: .9, braco: t > b ? -2.6 : -1.2, bracoE: t > b ? 2.6 : .3, olhar: 1, boca: t > b ? "o" : "", pisca: pisca(t) }); } },
 { chip: "O COMPUTADOR NÃO ADIVINHA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "adivinha"), "alerta"], [em(F2, "exatamente"), "ding"], [em(F2, "algoritmo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F2, "adivinha"), e = em(F2, "exatamente"), al = em(F2, "algoritmo");
     robozinho(400, 330, 1.3, t, false); if (t > a) palavra("O COMPUTADOR NÃO ADIVINHA!", 640, 110, seg(t, a, a + .4), 44);
     if (t > e) cartao("🤖 Faz EXATAMENTE o que mandamos", 840, 280, 640, "#7c3aed", seg(t, e, e + .4)); if (t > al) cartao("📝 Precisa de um ALGORITMO", 840, 400, 640, "#16a34a", seg(t, al, al + .4)); } },
 { chip: "O QUE É ALGORITMO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Algoritmo"), "ding"], [em(F3, "ordem"), "pop"], [em(F3, "instrução"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F3, "Algoritmo"), o = em(F3, "ordem"), i = em(F3, "instrução");
     comando("📝 ALGORITMO = LISTA DE PASSOS, EM ORDEM", 640, 100, seg(t, a, a + .4), "#16a34a", 620);
     if (t > o) ["1.", "2.", "3.", "4."].forEach((n, k) => { g.globalAlpha = cl(seg(t, o + k * .2, o + .4 + k * .2)); g.fillStyle = "#fff"; rr(380, 190 + k * 70, 520, 54, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText(n + " ________________", 400, 226 + k * 70); g.globalAlpha = 1; });
     if (t > i) { seta(960, 250, 905, 217, 1, "#fde68a"); comando("CADA PASSO = INSTRUÇÃO", 1080, 250, seg(t, i, i + .4), "#ca8a04", 300); } } },
 { chip: "CLARO E PRECISO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "vago"), "alerta"], [em(F4, "copo"), "pop"], [em(F4, "colheres"), "pop"], [em(F4, "encher"), "pop"], [em(F4, "mexer"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const vg = em(F4, "vago"), ts = [em(F4, "copo"), em(F4, "colheres"), em(F4, "encher"), em(F4, "mexer")];
     comando("❌ VAGO", 260, 110, seg(t, vg, vg + .4), "#dc2626", 160); if (t > vg) caixa(260, 190, "“Faz o suco aí.”", "#fee2e2", 1, 300);
     comando("✅ CLARO E PRECISO", 760, 110, seg(t, ts[0] - .5, ts[0] - .1), "#16a34a", 300);
     ["1. Pegar um copo.", "2. Colocar 2 colheres de suco em pó.", "3. Encher o copo com água.", "4. Mexer com a colher."].forEach((s, i) => { if (t > ts[i]) { g.fillStyle = "#fff"; rr(520, 160 + i * 66, 480, 52, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 21px ${F}`; g.textAlign = "left"; g.fillText(s, 540, 194 + i * 66); } });
     const n = ts.filter(x => t > x).length; copo(1120, 300, 1, n >= 3 ? (n >= 4 ? .8 : .7) : 0, n >= 4 ? "#fb923c" : "#bae6fd"); } },
 { chip: "COMEÇO, MEIO E FIM", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "começo"), "pop"], [em(F5, "meio"), "pop"], [em(F5, "fim"), "pop"], [em(F5, "mesmo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const c = em(F5, "começo"), m = em(F5, "meio"), f = em(F5, "fim"), ms = em(F5, "mesmo");
     [["🟢 COMEÇO", c, "#16a34a"], ["🔁 MEIO: os passos", m, "#2563eb"], ["🏁 FIM: resolvido!", f, "#dc2626"]].forEach(([s, t0, cor], i) => { comando(s, 260 + i * 380, 220, seg(t, t0, t0 + .4), cor, 300); if (i < 2 && t > t0 + .4) seta(420 + i * 380, 220, 470 + i * 380, 220, 1, "#fde68a"); });
     if (t > ms) { pessoa(420, 430, 1.1, "#0ea5e9"); pessoa(640, 430, 1.1, "#a855f7"); pessoa(860, 430, 1.1, "#22c55e"); rotulo("QUALQUER PESSOA CHEGA AO MESMO RESULTADO", 640, 540, "#fde68a", seg(t, ms, ms + .4)); } } },
 { chip: "PROGRAMA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "programa"), "ding"], [em(F6, "linguagem"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const p = em(F6, "programa"), l = em(F6, "linguagem");
     palavra("PROGRAMA = ALGORITMO PARA O COMPUTADOR", 640, 120, seg(t, p, p + .4), 40); if (t > l) { monitor(640, 450, 1.3, (x, y, w, h) => { ["#f59e0b", "#7c3aed", "#7c3aed", "#16a34a"].forEach((c, i) => { g.fillStyle = c; rr(x + 20 + (i % 2) * 20, y + 16 + i * 34, 160, 26, 6); g.fill(); }); }); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "quatro"), "pop"], [em(F7, "suco"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const q = em(F7, "quatro"), s = em(F7, "suco"), m = em(F7, "Missão"); robozinho(760, 360, 1.2, t, t > s); copo(980, 380, 1, t > s ? .8 : 0, "#fb923c");
     pedro({ x: 230, y: 620, s: .9, braco: t > s ? -2.4 : -.6, bracoE: t > s ? 2.4 : .3, olhar: 1, boca: t > s ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "receita"), "pop"], [em(F8, "manual"), "pop"], [em(F8, "GPS"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["receita", "🎂", "Receita de bolo:", "ingredientes e passos"], ["manual", "🧩", "Manual de montagem:", "passos numerados"], ["GPS", "🧭", "GPS do celular:", "vire à direita…"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 2º bimestre de 2027 · Missão 1", [PEDRO, TAINA]); } }
];

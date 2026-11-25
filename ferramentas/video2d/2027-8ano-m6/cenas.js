/* ================= 8º ano · 2027 · 1º bimestre · Missão 6 · Recursão ================= */
const BIA8 = { camisa: "#f97316", cabelo: "longo" };
const bia8 = o => boneco(Object.assign({}, BIA8, o));
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
function telinha(x, y, w, tit, linhas, k, hl, ok, nn) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((nn ? "" : (i + 1) + ".  ") + s, -w / 2 + 24, yy + 23); });
  g.restore(); }
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }

const F0 = "Recursão: o problema dentro do problema!",
  F1 = "O Léo ganhou uma boneca russa, a matrioska. Abriu, e dentro tinha outra boneca igual, só que menor. Abriu essa, e tinha outra, menor ainda. Até chegar na última, a bonequinha que não abre.",
  F2 = "Isso é recursão: um problema que se resolve usando uma versão menor dele mesmo. Abrir a boneca é: abrir, e depois fazer a mesma coisa com a boneca de dentro.",
  F3 = "Toda recursão tem duas partes. O passo recursivo: resolver usando o mesmo problema, só que menor. E o caso base, também chamado de condição de parada: o caso pequeno que se resolve direto, sem repetir. Na matrioska, é a bonequinha que não abre. Acabou!",
  F4 = "E sem caso base? A recursão nunca para! É como dois espelhos, um de frente para o outro: imagem dentro de imagem, para sempre.",
  F5 = "Outro exemplo: a fila do cinema. A Bia quer saber em que posição está, mas a fila é enorme. Ela pergunta para quem está na frente: qual é a sua posição? Essa pessoa faz a mesma pergunta para a da frente dela, e assim por diante.",
  F6 = "Até chegar no primeiro da fila, que responde: sou o um! Esse é o caso base. Aí, cada um soma um e devolve a resposta para trás: dois, três, quatro… e a Bia descobre: sou a quinta!",
  F7 = "No programa, uma contagem regressiva pode ser recursiva. Para contar a partir de n: se n for zero, mostre Fogo! e pare. Esse é o caso base. Senão, mostre n e conte a partir de n menos um. Esse é o passo recursivo.",
  F8 = "Contar a partir de três: mostra três e conta a partir de dois. Mostra dois e conta a partir de um. Mostra um e conta a partir de zero. Zero é o caso base: Fogo! No editor, um bloco próprio que chama a si mesmo é recursivo.",
  F9 = "O Léo fechou todas as matrioskas de novo, da menor para a maior, e já sabe explicar a recursão. Missão cumprida!",
  F10 = "Onde eu uso isso? Nas pastas do computador: pasta dentro de pasta, dentro de pasta. Para contar os arquivos, o computador usa recursão. Na matrioska e nos espelhos frente a frente. E nos fractais, como a samambaia, que você vai ver na Missão 8.",
  F11 = "Agora é com vocês: abram a Missão 6 no portal!";
function matrioska(x, y, s, cor, k, aberta) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = cor; g.beginPath(); g.ellipse(0, 30, 52, 62, 0, 0, 7); g.fill(); g.beginPath(); g.arc(0, -42, 38, 0, 7); g.fill();
  g.fillStyle = "#fde2c8"; g.beginPath(); g.arc(0, -40, 24, 0, 7); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(-8, -44, 3, 0, 7); g.arc(8, -44, 3, 0, 7); g.fill();
  g.fillStyle = "#f87171"; g.beginPath(); g.arc(-12, -34, 4, 0, 7); g.arc(12, -34, 4, 0, 7); g.fill(); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 40, 22, 0, 7); g.fill(); g.fillStyle = cor; g.beginPath(); g.arc(0, 40, 12, 0, 7); g.fill();
  if (aberta) { g.strokeStyle = "#fff"; g.lineWidth = 4; g.setLineDash([8, 6]); g.beginPath(); g.moveTo(-54, 0); g.lineTo(54, 0); g.stroke(); g.setLineDash([]); } g.restore(); }
const CORES = ["#dc2626", "#ea580c", "#ca8a04", "#16a34a", "#2563eb"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); CORES.forEach((c, i) => matrioska(700 + i * 105, 250, 1 - i * .15, c, seg(t, .2 + i * .2, .5 + i * .2)));
     abertura(t, "8º ANO · MISSÃO 6", "Recursão", "O PROBLEMA DENTRO", "DO PROBLEMA!", 1.7); } },
 { chip: "A MATRIOSKA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Abriu"), "pop"], [em(F1, "Abriu", 1), "pop"], [em(F1, "última"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F1, "matrioska"), em(F1, "Abriu"), em(F1, "Abriu", 1), em(F1, "ainda"), em(F1, "última")];
     CORES.forEach((c, i) => { if (t > ts[i]) matrioska(330 + i * 190, 300, 1.2 - i * .18, c, seg(t, ts[i], ts[i] + .4), i < 4 && t > ts[i + 1]); });
     if (t > ts[4]) rotulo("ESTA NÃO ABRE!", 330 + 4 * 190, 420, "#fde68a", seg(t, ts[4] + .5, ts[4] + .9));
     leo({ x: 120, y: 620, s: .75, braco: -.6, bracoE: 2.2, olhar: 1, boca: "o", pisca: pisca(t) }); } },
 { chip: "O QUE É RECURSÃO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "recursão"), "ding"], [em(F2, "menor"), "pop"], [em(F2, "mesma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const r = em(F2, "recursão"), mn = em(F2, "menor"), ms = em(F2, "mesma");
     if (t > r) comando("🔁 RECURSÃO", 640, 110, seg(t, r, r + .4), "#16a34a", 280); if (t > mn) rotulo("resolver usando uma versão MENOR do mesmo problema", 640, 175, "#bbf7d0", seg(t, mn, mn + .4));
     if (t > ms) { bocaC(300, 250, 680, 170, "🧩 abrir boneca", "#db2777", seg(t, ms, ms + .4)); bloco(340, 312, 300, "👐 abrir", "#7c3aed", seg(t, ms + .3, ms + .6)); bloco(340, 372, 560, "🧩 abrir boneca  (a de dentro)", "#db2777", seg(t, ms + .6, ms + 1), true); } } },
 { chip: "AS 2 PARTES", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "recursivo"), "ding"], [em(F3, "base"), "ding"], [em(F3, "Acabou"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const rc = em(F3, "recursivo"), b = em(F3, "base"), ac = em(F3, "bonequinha");
     cartao("🔁 PASSO RECURSIVO", 360, 170, 460, "#7c3aed", seg(t, rc, rc + .4)); rotulo("o mesmo problema, só que menor", 360, 230, "#ddd6fe", seg(t, rc + .3, rc + .7));
     cartao("🛑 CASO BASE", 920, 170, 460, "#dc2626", seg(t, b, b + .4)); rotulo("condição de parada: resolve direto", 920, 230, "#fecaca", seg(t, b + .3, b + .7));
     if (t > rc) CORES.slice(0, 4).forEach((c, i) => matrioska(220 + i * 95, 380, .7 - i * .1, c, 1, true)); if (t > ac) { matrioska(920, 380, .55, CORES[4], seg(t, ac, ac + .4)); emo("🛑", 1000, 340, 40); } } },
 { chip: "SEM CASO BASE?", fala: F4, sfx: [[.1, "alerta"], [em(F4, "nunca"), "alerta"], [em(F4, "espelhos"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#111827"); const n = em(F4, "nunca"), e = em(F4, "espelhos");
     if (t > n) palavra("NUNCA PARA! ♾️", 640, 110, seg(t, n, n + .4), 50);
     if (t > e) for (let i = 0; i < 10; i++) { const s = Math.pow(.82, i), w = 600 * s, h = 360 * s; g.strokeStyle = i % 2 ? "#93c5fd" : "#e2e8f0"; g.lineWidth = 6 * s; g.globalAlpha = cl(seg(t, e + i * .12, e + .3 + i * .12)); g.strokeRect(640 - w / 2, 330 - h / 2, w, h); g.globalAlpha = 1; } } },
 { chip: "A FILA DO CINEMA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "enorme"), "pop"], [em(F5, "pergunta"), "pop"], [em(F5, "mesma"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const p = em(F5, "pergunta"), ms = em(F5, "mesma"); comando("🎬 CINEMA", 140, 140, 1, "#dc2626", 180);
     for (let i = 0; i < 5; i++) { const x = 290 + i * 200; if (i === 4) bia8({ x, y: 560, s: .75, braco: -.6, bracoE: .3, olhar: -1, pisca: pisca(t) }); else pessoa(x, 560, 1.1, ["#0ea5e9", "#a855f7", "#22c55e", "#f59e0b"][i]); }
     const q = t > ms ? Math.min(4, 1 + Math.floor((t - ms) / .7) + 1) : t > p ? 1 : 0; for (let j = 0; j < q; j++) { const x = 290 + (4 - j) * 200; balao("Qual é a sua posição?", x - 40, 330 - (j % 2) * 40, 1); } } },
 { chip: "CASO BASE E VOLTA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "um"), "ding"], [em(F6, "base"), "ding"], [em(F6, "dois"), "pop"], [em(F6, "três"), "pop"], [em(F6, "quinta"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const u = em(F6, "um"), d = em(F6, "dois"), q = em(F6, "quinta");
     for (let i = 0; i < 5; i++) { const x = 290 + i * 200; if (i === 4) bia8({ x, y: 560, s: .75, braco: t > q ? -2.4 : -.6, bracoE: t > q ? 2.4 : .3, olhar: -1, boca: t > q ? "riso" : "", pisca: pisca(t) }); else pessoa(x, 560, 1.1, ["#0ea5e9", "#a855f7", "#22c55e", "#f59e0b"][i]); }
     if (t > u) { balao("Sou o 1!", 290, 330, 1); rotulo("🛑 CASO BASE", 290, 220, "#fecaca", seg(t, u, u + .4)); }
     [2, 3, 4].forEach((n, j) => { const t0 = d + j * .5; if (t > t0) { balao("Sou o " + n + "!", 290 + (j + 1) * 200, 330 - ((j + 1) % 2) * 40, 1); seta(290 + j * 200 + 40, 420, 290 + (j + 1) * 200 - 40, 420, 1, "#fde68a"); } });
     if (t > q) { balao("Sou a 5ª!", 1090, 290, 1); palavra("+1 A CADA VOLTA", 640, 140, seg(t, q, q + .4), 40); } } },
 { chip: "NO PROGRAMA", fala: F7, legenda: "No programa, uma contagem regressiva pode ser recursiva. Para contar a partir de n: se n for 0, mostre “Fogo!” e pare. Esse é o caso base. Senão, mostre n e conte a partir de n − 1. Esse é o passo recursivo.",
   sfx: [[.1, "whoosh"], [em(F7, "zero"), "pop"], [em(F7, "base"), "ding"], [em(F7, "Senão"), "pop"], [em(F7, "recursivo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const z = em(F7, "zero"), b = em(F7, "base"), sn = em(F7, "Senão"), r = em(F7, "recursivo");
     bocaC(220, 110, 840, 360, "🧩 contar a partir de n", "#db2777", seg(t, 0, .5));
     bocaC(260, 172, 700, 130, "⚖️ se n = 0, então", "#2563eb", seg(t, z, z + .4), t > z && t < sn); if (t > z) bloco(300, 232, 360, "💬 mostrar Fogo! e parar", "#7c3aed", seg(t, z + .4, z + .8));
     if (t > b) rotulo("🛑 CASO BASE", 1000, 290, "#fecaca", seg(t, b, b + .4));
     bocaC(260, 312, 760, 130, "senão", "#2563eb", seg(t, sn, sn + .4), t > sn); if (t > sn) { bloco(300, 372, 230, "💬 mostrar n", "#7c3aed", seg(t, sn + .3, sn + .6)); bloco(550, 372, 440, "🧩 contar a partir de n − 1", "#db2777", seg(t, sn + .7, sn + 1.1), t > r); }
     if (t > r) rotulo("🔁 PASSO RECURSIVO", 780, 470, "#fbcfe8", seg(t, r, r + .4)); } },
 { chip: "CONTANDO A PARTIR DE 3", fala: F8, legenda: "Contar a partir de 3: mostra 3 e conta a partir de 2. Mostra 2 e conta a partir de 1. Mostra 1 e conta a partir de 0. 0 é o caso base: Fogo! No editor, um bloco próprio que chama a si mesmo é recursivo.",
   sfx: [[.1, "whoosh"], [em(F8, "Mostra"), "pop"], [em(F8, "Mostra", 1), "pop"], [em(F8, "Fogo"), "festa"], [em(F8, "editor"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F8, "mostra"), em(F8, "Mostra", 1), em(F8, "Mostra", 2), em(F8, "Zero")], f = em(F8, "Fogo"), ed = em(F8, "editor");
     ["contar(3)", "contar(2)", "contar(1)", "contar(0)"].forEach((s, i) => { if (t > ts[i] - .2) { const x = 200 + i * 60, y = 120 + i * 80; g.fillStyle = ["#db2777", "#c026d3", "#9333ea", "#dc2626"][i]; rr(x, y, 330, 60, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText(s, x + 20, y + 39); } });
     const tela = []; [3, 2, 1].forEach((n, i) => { if (t > ts[i]) tela.push(String(n)); }); if (t > f) tela.push("Fogo! 🚀"); telinha(960, 110, 280, "▶️ NA TELA", tela.length ? tela : ["…"], 1, -1, false, true);
     if (t > ed) rotulo("BLOCO QUE CHAMA A SI MESMO = RECURSIVO", 640, 500, "#fde68a", seg(t, ed, ed + .4)); } },
 { chip: "A SOLUÇÃO", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "fechou"), "pop"], [em(F9, "explicar"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const fc = em(F9, "fechou"), m = em(F9, "Missão"); const k = cl(seg(t, fc, fc + 2));
     CORES.map((c, i) => i).reverse().forEach(i => { const x = lerp(330 + i * 190, 700, k); matrioska(x, 300, 1.2 - i * .18, CORES[i], 1); });
     leo({ x: 140, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "pastas"), "pop"], [em(F10, "espelhos"), "pop"], [em(F10, "fractais"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["pastas", "📁", "Pastas do computador:", "pasta dentro de pasta"], ["espelhos", "🪞", "Matrioska e espelhos:", "imagem dentro de imagem"], ["fractais", "🌿", "Fractais (Missão 8):", "o galho é uma samambaia menor"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 6", [LEO, BIA8]); } }
];

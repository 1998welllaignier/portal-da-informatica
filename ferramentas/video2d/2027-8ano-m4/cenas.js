/* ================= 8º ano · 2027 · 1º bimestre · Missão 4 · Busca binária ================= */
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


const F0 = "Busca binária: procurar pelo meio!",
  F1 = "A Bia desafiou o Léo: pensei num número de um a cem. Você chuta, e eu digo se é maior ou menor. O Léo começou: um? Maior. Dois? Maior. Três? Maior… Desse jeito, ele podia precisar de cem chutes!",
  F2 = "Aí a Bia deu a dica: chuta o meio! Cinquenta? Maior. Então, nem precisa pensar de um a cinquenta: metade jogada fora! Setenta e cinco? Menor. Mais metade fora! Cada chute corta o problema pela metade. Isso é a busca binária.",
  F3 = "Mas atenção, regra de ouro: a busca binária só funciona se a lista estiver ordenada. Numa lista bagunçada, olhar o meio não diz nada sobre os outros.",
  F4 = "O algoritmo: olhe o item do meio da parte que sobrou. É o procurado? Achou! O procurado é maior? Jogue fora a metade da esquerda. É menor? Jogue fora a metade da direita. E repita com a parte que sobrou.",
  F5 = "Vamos procurar o trinta e um nesta lista ordenada de oito números. A primeira tentativa olha o meio: a posição quatro, que tem o dezoito. Trinta e um é maior, então a metade da esquerda vai embora. Sobram as posições cinco a oito. O meio agora é a posição seis: trinta e um. Achou!",
  F6 = "Só duas comparações! A busca sequencial, olhando um por um, precisaria de seis.",
  F7 = "E quanto maior a lista, maior a vantagem. Com mil itens, a busca sequencial pode precisar de mil comparações; a binária, de só dez. Com um milhão de itens, a binária precisa de apenas vinte!",
  F8 = "O Léo chutou o meio a cada vez e acertou o número da Bia em só sete chutes. Missão cumprida!",
  F9 = "Onde eu uso isso? No dicionário de papel: a gente abre no meio e vai para a frente ou para trás. Nos contatos do celular, em ordem alfabética. E nos sites de busca, que usam listas ordenadas para responder em milésimos de segundo.",
  F10 = "Agora é com vocês: abram a Missão 4 no portal!";
const LB = [3, 7, 12, 18, 25, 31, 40, 52];
function regua(t, ini, fim, chutes, y) { y = y || 260; g.fillStyle = "#334155"; rr(140, y - 20, 1000, 40, 20); g.fill();
  const X = v => 140 + (v - 1) / 99 * 1000; g.fillStyle = "#22c55e"; rr(X(ini), y - 20, X(fim) - X(ini) + 4, 40, 20); g.fill();
  [1, 25, 50, 75, 100].forEach(v => rotulo(String(v), X(v), y + 50, "#cbd5e1", 1));
  chutes.forEach(([v, s], j) => { g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(X(v), y - 26); g.lineTo(X(v) - 12, y - 50); g.lineTo(X(v) + 12, y - 50); g.fill(); if (j === chutes.length - 1 || Math.abs(chutes[j + 1][0] - v) >= 10) rotulo(v + " → " + s, X(v), y - 62, "#fde68a", 1); }); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "whoosh"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const k = cl(seg(t, .5, 1.3)); LB.forEach((v, i) => carta(v, 650 + i * 82, 240, i === 3 ? "#fde68a" : i < 4 ? "#fff" : `rgba(255,255,255,${1 - k * .7})`, 1, 74));
     abertura(t, "8º ANO · MISSÃO 4", "Busca binária", "PROCURAR", "PELO MEIO!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "um"), "pop"], [em(F1, "Maior"), "pop"], [em(F1, "Maior", 1), "pop"], [em(F1, "cem", 1), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const p = em(F1, "pensei"), u = em(F1, "um", 1), c = em(F1, "cem", 1);
     if (t > p) balao("Pensei num número de 1 a 100!", 900, 130, seg(t, p, p + .4));
     const ch = t > u ? Math.min(3, 1 + Math.floor((t - u) / 1)) : 0; regua(t, 1, 100, [[1, "maior"], [2, "maior"], [3, "maior"]].slice(0, ch), 330);
     if (t > c) palavra("ATÉ 100 CHUTES?! 😵", 640, 470, seg(t, c, c + .4), 44);
     leo({ x: 130, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: 1, boca: t > c ? "o" : "", pisca: pisca(t) }); bia8({ x: 1170, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t + .5) }); } },
 { chip: "CHUTE O MEIO!", fala: F2, legenda: "Aí a Bia deu a dica: chuta o meio! 50? Maior. Então, nem precisa pensar de 1 a 50: metade jogada fora! 75? Menor. Mais metade fora! Cada chute corta o problema pela metade. Isso é a busca binária.",
   sfx: [[.1, "whoosh"], [em(F2, "Cinquenta"), "pop"], [em(F2, "metade"), "whoosh"], [em(F2, "Setenta"), "pop"], [em(F2, "metade", 1), "whoosh"], [em(F2, "binária"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const c50 = em(F2, "Cinquenta"), m1 = em(F2, "metade"), c75 = em(F2, "Setenta"), m2 = em(F2, "metade", 1), b = em(F2, "binária");
     const ini = t > m1 ? 51 : 1, fim = t > m2 ? 74 : 100; const ch = []; if (t > c50) ch.push([50, "maior"]); if (t > c75) ch.push([75, "menor"]);
     regua(t, ini, fim, ch, 280); if (t > m1) rotulo("METADE FORA!", 400, 380, "#fecaca", seg(t, m1, m1 + .4)); if (t > m2) rotulo("MAIS METADE FORA!", 960, 380, "#fecaca", seg(t, m2, m2 + .4));
     if (t > b) comando("✂️ BUSCA BINÁRIA = SEMPRE PELO MEIO", 640, 470, seg(t, b, b + .4), "#16a34a", 560); } },
 { chip: "⚠️ REGRA DE OURO", fala: F3, sfx: [[.1, "alerta"], [em(F3, "ordenada"), "ding"], [em(F3, "bagunçada"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const o = em(F3, "ordenada"), bg = em(F3, "bagunçada");
     palavra("SÓ FUNCIONA EM LISTA ORDENADA!", 640, 120, seg(t, 0, .4), 46);
     if (t > o) { LB.forEach((v, i) => carta(v, 300 + i * 95, 260, "#fff", seg(t, o + i * .05, o + .3 + i * .05), 80)); visto(1100, 260, 26, seg(t, o + .6, o + 1)); }
     if (t > bg) { [31, 3, 52, 18, 7, 40, 12, 25].forEach((v, i) => carta(v, 300 + i * 95, 420 + Math.sin(t * 5 + i) * 4, "#fee2e2", seg(t, bg + i * .05, bg + .3 + i * .05), 80)); xVermelho(1100, 420, 26, seg(t, bg + .6, bg + 1)); } } },
 { chip: "O ALGORITMO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "meio"), "pop"], [em(F4, "Achou"), "ding"], [em(F4, "esquerda"), "whoosh"], [em(F4, "direita"), "whoosh"], [em(F4, "repita"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); comando("📋 O ALGORITMO", 640, 80, seg(t, 0, .4), "#2563eb", 300);
     [["meio", "1 · Olhe o item do MEIO da parte que sobrou", "#2563eb"], ["Achou", "2 · É o procurado? ACHOU!", "#16a34a"], ["esquerda", "3 · Procurado é MAIOR? Fora a metade da ESQUERDA", "#7c3aed"], ["direita", "4 · Procurado é MENOR? Fora a metade da DIREITA", "#db2777"], ["repita", "5 · Repita com a parte que sobrou", "#f59e0b"]].forEach(([w, s, c], i) => { const t0 = em(F4, w); comando(s, 640, 150 + i * 74, seg(t, t0, t0 + .4), c, 760); }); } },
 { chip: "EXEMPLO: ACHAR O 31", fala: F5, legenda: "Vamos procurar o 31 nesta lista ordenada de 8 números. A primeira tentativa olha o meio: a posição 4, que tem o 18. 31 é maior, então a metade da esquerda vai embora. Sobram as posições 5 a 8. O meio agora é a posição 6: 31. Achou!",
   sfx: [[.1, "whoosh"], [em(F5, "meio"), "pop"], [em(F5, "dezoito"), "pop"], [em(F5, "embora"), "whoosh"], [em(F5, "seis"), "pop"], [em(F5, "Achou"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const mi = em(F5, "meio"), d18 = em(F5, "dezoito"), eb = em(F5, "embora"), p6 = em(F5, "seis"), ac = em(F5, "Achou");
     comando("PROCURAR: 31", 640, 90, seg(t, 0, .4), "#7c3aed", 240);
     LB.forEach((v, i) => { const fora = t > eb && i < 4; const cor = (i === 3 && t > d18 && t < eb) ? "#fde68a" : (i === 5 && t > p6) ? (t > ac ? "#bbf7d0" : "#fde68a") : fora ? "rgba(255,255,255,.25)" : "#fff"; carta(v, 220 + i * 120, 250 + (fora ? 20 : 0), cor, 1, 96); rotulo(String(i + 1), 220 + i * 120, 335, "#c4b5fd", 1); });
     if (t > mi && t < eb) { seta(580, 150, 580, 180, 1, "#fde68a"); rotulo("1ª: MEIO = posição 4", 580, 140, "#fde68a", 1); }
     if (t > d18 && t < eb) rotulo("31 > 18 → fora a esquerda", 640, 400, "#fde68a", seg(t, d18 + .6, d18 + 1));
     if (t > eb) { g.strokeStyle = "#22c55e"; g.lineWidth = 4; g.strokeRect(640, 180, 480, 140); rotulo("sobram 5 a 8", 925, 400, "#86efac", 1); }
     if (t > p6) { seta(820, 150, 820, 180, 1, "#fde68a"); rotulo("2ª: MEIO = posição 6", 820, 140, "#fde68a", 1); }
     if (t > ac) palavra("ACHOU! 2 COMPARAÇÕES", 640, 480, seg(t, ac, ac + .4), 40); } },
 { chip: "BINÁRIA × SEQUENCIAL", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "duas"), "ding"], [em(F6, "seis"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F6, "duas"), s = em(F6, "seis");
     cartao("✂️ Binária: 2 comparações", 640, 220, 560, "#16a34a", seg(t, d, d + .4)); cartao("🐢 Sequencial: 6 comparações", 640, 360, 560, "#ea580c", seg(t, s, s + .4)); } },
 { chip: "LISTAS GRANDES", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "mil"), "pop"], [em(F7, "dez"), "ding"], [em(F7, "milhão"), "pop"], [em(F7, "vinte"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const m = em(F7, "mil"), dz = em(F7, "dez"), mh = em(F7, "milhão"), vt = em(F7, "vinte");
     const tb = [["ITENS", "SEQUENCIAL", "BINÁRIA"]]; const lin = [["8", "8", "4"], ["100", "100", "7"]]; if (t > m) lin.push(["1.000", "1.000", t > dz ? "10" : "…"]); if (t > mh) lin.push(["1.000.000", "1.000.000", t > vt ? "20" : "…"]);
     tabela(640, 120, 800, tb[0], lin, ["#334155", "#ea580c", "#16a34a"], seg(t, 0, .5), 2, 56); rotulo("comparações no pior caso", 640, 450, "#bae6fd", 1); } },
 { chip: "A SOLUÇÃO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "meio"), "pop"], [em(F8, "sete"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const s = em(F8, "sete"), m = em(F8, "Missão");
     const ch = [[50, "↑"], [75, "↓"], [62, "↑"], [68, "↓"], [65, "↑"], [66, "↑"], [67, "✔"]]; const n = Math.min(7, Math.floor(t / ((s + .1) / 7)) + 1);
     regua(t, 1, 100, ch.slice(0, n).map(([v, x]) => [v, x]), 280); if (t > s) comando("7 CHUTES!", 640, 420, 1, "#16a34a", 220);
     leo({ x: 130, y: 620, s: .8, braco: t > s ? -2.4 : -.6, bracoE: t > s ? 2.4 : .3, olhar: 1, boca: t > s ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "dicionário"), "pop"], [em(F9, "contatos"), "pop"], [em(F9, "sites"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["dicionário", "📖", "Dicionário de papel:", "abre no meio e segue"], ["contatos", "📱", "Contatos do celular:", "em ordem alfabética"], ["sites", "🔎", "Sites de busca:", "respostas em milésimos"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 4", [LEO, BIA8]); } }
];

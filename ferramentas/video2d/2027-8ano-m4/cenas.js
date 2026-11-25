/* ================= 8º ano · 2027 · 1º bimestre · Missão 4 · Busca binária (v2, padrão completo: o Show do Meio) ================= */
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
/* ===== peças do "Show do Meio" (8º M4 v2) ===== */
const io2 = k => k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
// câmera: kf = [[t, x, y, zoom], ...] — interpola e aplica (centro da tela vai para x,y)
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k);
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = "#0d1631"; g.fillRect(0, 0, 1280, 720); g.restore(); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
function palco(t, luzOn) { // fundo de estúdio de TV com camadas
  const gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, "#1e1b4b"); gr.addColorStop(1, "#0b0a24"); g.fillStyle = gr; g.fillRect(-400, -300, 2080, 1320);
  for (let i = 0; i < 14; i++) { g.fillStyle = i % 2 ? "#7f1d1d" : "#991b1b"; g.fillRect(-400 + i * 150, -300, 150, 700); } // cortina ao fundo
  g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(-400, -300, 2080, 700);
  for (let i = 0; i < 24; i++) { const on = (Math.floor(t * 4) + i) % 3 === 0; g.fillStyle = on ? "#fde047" : "#78350f"; g.beginPath(); g.arc(-60 + i * 60, 30, 7, 0, 7); g.fill(); } // lâmpadas
  g.fillStyle = "#312e81"; g.fillRect(-400, 470, 2080, 60); g.fillStyle = "#4338ca"; g.fillRect(-400, 470, 2080, 8); // palco
  if (luzOn !== false) for (let i = 0; i < 2; i++) { const a = Math.sin(t * 1.3 + i * 2) * .35; g.save(); g.translate(200 + i * 880, -40); g.rotate(a); const lg = g.createLinearGradient(0, 0, 0, 560); lg.addColorStop(0, "rgba(255,240,180,.35)"); lg.addColorStop(1, "rgba(255,240,180,0)"); g.fillStyle = lg; g.beginPath(); g.moveTo(-20, 0); g.lineTo(20, 0); g.lineTo(180, 560); g.lineTo(-180, 560); g.closePath(); g.fill(); g.restore(); } }
function plateia(t, humor, y) { y = y || 640; for (let i = 0; i < 18; i++) { const x = 30 + i * 72 + (i % 2) * 20, b = humor === "festa" ? Math.abs(Math.sin(t * 8 + i)) * 14 : humor === "sono" ? 0 : Math.sin(t * 2 + i) * 2;
    g.fillStyle = ["#0f172a", "#1e293b", "#111827"][i % 3]; g.beginPath(); g.arc(x, y - b, 30, Math.PI, 0); g.fill(); g.fillRect(x - 34, y - b, 68, 120);
    if (humor === "sono" && i % 4 === 1) emo("😴", x, y - 40, 26); if (humor === "festa" && i % 3 === 0) emo("🙌", x, y - 60 - b, 26); } }
function regua100(t, x0, w, y, ini, fim, chutes, rotulos) { const X = v => x0 + (v - 1) / 99 * w;
  g.fillStyle = "#0f172a"; rr(x0 - 20, y - 46, w + 40, 92, 20); g.fill();
  for (let v = 1; v <= 100; v++) { const on = v >= ini && v <= fim; g.fillStyle = on ? (v % 10 === 0 ? "#facc15" : "#22c55e") : "#334155"; rr(X(v) - 3.5, y - 26, 7, 52, 3); g.fill(); }
  [1, 25, 50, 75, 100].forEach(v => { g.fillStyle = "#e2e8f0"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(v), X(v), y + 70); });
  chutes.forEach(([v, s], j) => { g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(X(v), y - 30); g.lineTo(X(v) - 13, y - 56); g.lineTo(X(v) + 13, y - 56); g.fill();
    if (rotulos !== false && (j === chutes.length - 1 || (rotulos !== "ultimo" && Math.abs(chutes[j + 1][0] - v) >= 10))) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
function livroLomb(x, y, w, h, n, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = cor; rr(x, y, w, h, 4); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; rr(x + 4, y + h * .35, w - 8, 30, 4); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(n), x + w / 2, y + h * .35 + 22); g.restore(); }

const F0 = "Busca binária: o segredo do Show do Meio!",
  F1 = "Luzes, câmera, ação! No Show do Meio, a apresentadora Bia pensa num número de um a cem, e o Léo tem que descobrir. A cada chute, a Bia só responde: maior ou menor.",
  F2 = "O Léo começou: um? Maior! Dois? Maior! Três? Maior! A plateia começou a bocejar. Desse jeito, ele podia precisar de até cem chutes!",
  F3 = "Aí, a Bia soprou uma dica: chuta o meio! O Léo respirou fundo: cinquenta? Maior! E olha que beleza: de um a cinquenta, nem precisa mais pensar. Metade do placar apagou de uma vez!",
  F4 = "Agora, o meio do que sobrou: setenta e cinco? Menor! Lá se foi mais metade. Cada chute corta o problema pela metade. Esse jeito de procurar tem nome: busca binária.",
  F5 = "Mas atenção, regra de ouro: a busca binária só funciona se a lista estiver ordenada. Numa estante em ordem, olhar o livro do meio já diz para que lado seguir. Numa pilha bagunçada, o meio não diz nada!",
  F6 = "O algoritmo tem cinco passos. Olhe o item do meio da parte que sobrou. É o procurado? Achou! O procurado é maior? Jogue fora a metade da esquerda. É menor? Jogue fora a metade da direita. E repita com a parte que sobrou.",
  F7 = "Valendo! Procurar o trinta e um nesta lista de oito números. O meio é a posição quatro, com o dezoito. Trinta e um é maior: a metade da esquerda cai fora! Sobram as posições cinco a oito. O novo meio é a posição seis: trinta e um. Achou!",
  F8 = "Só duas comparações! Agora, uma corrida: a tartaruga da busca sequencial olha um por um e precisa de seis passos. O canguru da busca binária pula pela metade e chega em dois.",
  F9 = "E quanto maior a lista, maior a vantagem. Com mil itens, a sequencial pode precisar de mil comparações; a binária, de só dez. Com um milhão de itens, a binária precisa de apenas vinte!",
  F10 = "De volta ao show: o Léo chutou sempre o meio e acertou o número da Bia em só sete chutes. A plateia foi à loucura! Missão cumprida!",
  F11 = "Onde eu uso isso? No dicionário de papel: a gente abre no meio e vai para a frente ou para trás. Nos contatos do celular, em ordem alfabética. E nos sites de busca, que usam listas ordenadas para responder em milésimos de segundo.",
  F12 = "Agora é com vocês: abram a Missão 4 no portal e joguem o Show do Meio!";
const LB = [3, 7, 12, 18, 25, 31, 40, 52];
const apres = o => bia8(Object.assign({ x: 1060, y: 560, s: .9, olhar: -1 }, o)), jogador = o => leo(Object.assign({ x: 220, y: 560, s: .9, olhar: 1 }, o));

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "festa"], [1.1, "pop"], [1.6, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.35], [1.4, 640, 360, 1]]); palco(t); const ab = io2(seg(t, .2, 1.2));
     g.fillStyle = "#b91c1c"; g.fillRect(-400, -300, 1040 - ab * 900, 1000); g.fillRect(640 + ab * 900, -300, 1040, 1000); // cortina abrindo
     g.restore(); placaShow("🎤 SHOW DO MEIO", 640, 175, seg(t, .9, 1.3), "#facc15"); if (t > 1.2) { [1, 50, 100].forEach((v, i) => placaShow(String(v), 440 + i * 200, 275, seg(t, 1.2 + i * .15, 1.5 + i * .15), i === 1 ? "#22c55e" : "#e2e8f0")); }
     abertura(t, "8º ANO · MISSÃO 4", "Busca binária", "O SEGREDO DE ACHAR", "EM POUCOS CHUTES!", 1.9); } },
 { chip: "O SHOW", fala: F1, sfx: [[.1, "festa"], [em(F1, "Bia"), "pop"], [em(F1, "Léo"), "pop"], [em(F1, "maior"), "ding"]],
   draw(t, D) { const b = em(F1, "Bia"), l = em(F1, "Léo"), m = em(F1, "maior"); g.save(); camera(t, [[0, 640, 360, 1], [b, 900, 380, 1.25], [l, 360, 380, 1.25], [m, 640, 360, 1]]); palco(t);
     regua100(t, 240, 800, 300, 1, 100, []); apres({ braco: -1.8, bracoE: .3, boca: "riso", pisca: pisca(t) }); microfone2(1010, 470, 1); jogador({ braco: -.6, bracoE: .3, boca: t > l ? "o" : "", pisca: pisca(t + .3) }); plateia(t, "", 700); g.restore();
     if (t > b) balao("Pensei num número de 1 a 100!", 980, 140, seg(t, b, b + .3) * (1 - seg(t, l, l + .2))); if (t > m) { placaShow("MAIOR ⬆️", 470, 150, seg(t, m, m + .4), "#22c55e"); placaShow("MENOR ⬇️", 810, 150, seg(t, m + .3, m + .7), "#ef4444"); } } },
 { chip: "O PROBLEMA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "um"), "pop"], [em(F2, "Dois"), "pop"], [em(F2, "Três"), "pop"], [em(F2, "bocejar"), "misterio"], [em(F2, "cem"), "alerta"]],
   draw(t, D) { const ts = [em(F2, "um"), em(F2, "Dois"), em(F2, "Três")], bo = em(F2, "bocejar"), c = em(F2, "cem"); const n = ts.filter(x => t > x).length;
     g.save(); camera(t, [[0, 640, 360, 1], [bo, 640, 420, 1.12]]); palco(t, t < bo); regua100(t, 240, 800, 300, 1, 100, [[1, "MAIOR"], [2, "MAIOR"], [3, "MAIOR"]].slice(0, n));
     jogador({ braco: -1.3, bracoE: .3, boca: t > c ? "o" : "", pisca: pisca(t) }); apres({ braco: -.6, bracoE: .3, pisca: pisca(t + .5) }); plateia(t, t > bo ? "sono" : "", 700); g.restore();
     if (t > c) { palavra("ATÉ 100 CHUTES?! 😵", 640, 140, seg(t, c, c + .4), 54); } } },
 { chip: "A DICA", fala: F3, legenda: "Aí, a Bia soprou uma dica: chuta o meio! O Léo respirou fundo: 50? Maior! E olha que beleza: de 1 a 50, nem precisa mais pensar. Metade do placar apagou de uma vez!",
   sfx: [[.1, "whoosh"], [em(F3, "meio"), "ding"], [em(F3, "cinquenta"), "pop"], [em(F3, "Maior"), "ding"], [em(F3, "apagou"), "whoosh"]],
   draw(t, D) { const me = em(F3, "meio"), c50 = em(F3, "cinquenta"), ma = em(F3, "Maior"), ap = em(F3, "apagou");
     g.save(); camera(t, [[0, 900, 420, 1.3], [c50, 640, 330, 1.25], [ap, 640, 340, 1]]); palco(t); regua100(t, 240, 800, 300, t > ap ? 51 : 1, 100, t > c50 ? [[50, t > ma ? "MAIOR" : ""]] : []);
     apres({ braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); jogador({ braco: t > ma ? -2.4 : -.6, bracoE: t > ma ? 2.4 : .3, boca: t > ma ? "riso" : "", pisca: pisca(t + .3) }); plateia(t, "", 700); g.restore();
     if (t > me && t < c50) balao("Psiu… chuta o MEIO!", 900, 160, 1);
     if (t > ap) { etiqueta("METADE FORA!", 330, 160, 440, 290, seg(t, ap, ap + .4)); } } },
 { chip: "BUSCA BINÁRIA", fala: F4, legenda: "Agora, o meio do que sobrou: 75? Menor! Lá se foi mais metade. Cada chute corta o problema pela metade. Esse jeito de procurar tem nome: busca binária.",
   sfx: [[.1, "whoosh"], [em(F4, "setenta"), "pop"], [em(F4, "Menor"), "alerta"], [em(F4, "metade"), "whoosh"], [em(F4, "binária"), "ding"]],
   draw(t, D) { const s75 = em(F4, "setenta"), me = em(F4, "Menor"), mt = em(F4, "metade"), bi = em(F4, "binária");
     g.save(); camera(t, [[0, 640, 340, 1], [s75, 790, 320, 1.35], [mt, 640, 340, 1], [bi, 640, 400, .9]]); palco(t); regua100(t, 240, 800, 300, 51, t > mt ? 74 : 100, [[50, "MAIOR"], ...(t > s75 ? [[75, t > me ? "MENOR" : ""]] : [])]);
     jogador({ braco: -1.2, bracoE: .3, boca: t > me ? "o" : "", pisca: pisca(t) }); apres({ braco: -.6, bracoE: .3, pisca: pisca(t + .4) }); plateia(t, "", 700); g.restore();
     if (t > mt) etiqueta("MAIS METADE FORA!", 1060, 170, 960, 290, seg(t, mt, mt + .4)); if (t > bi) palavra("BUSCA BINÁRIA", 640, 560 - 30, seg(t, bi, bi + .4), 70); } },
 { chip: "⚠️ REGRA DE OURO", fala: F5, sfx: [[.1, "alerta"], [em(F5, "ordenada"), "ding"], [em(F5, "estante"), "whoosh"], [em(F5, "bagunçada"), "alerta"], [em(F5, "nada"), "pop"]],
   draw(t, D) { const o = em(F5, "ordenada"), es = em(F5, "estante"), bg = em(F5, "bagunçada");
     g.save(); camera(t, [[0, 640, 360, 1], [es, 640, 300, 1.05], [bg, 640, 470, 1.1]]); const gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, "#3f2a14"); gr.addColorStop(1, "#1c1208"); g.fillStyle = gr; g.fillRect(-200, -200, 1680, 1120);
     g.fillStyle = "#78350f"; g.fillRect(160, 380, 960, 20); g.fillStyle = "#92400e"; g.fillRect(160, 170, 20, 230); g.fillRect(1100, 170, 20, 230);
     [3, 7, 12, 18, 25, 31, 40, 52].forEach((v, i) => livroLomb(200 + i * 112, 200, 96, 180, v, ["#2563eb", "#16a34a", "#db2777", "#f59e0b", "#7c3aed", "#0d9488", "#dc2626", "#0369a1"][i], seg(t, es + i * .06, es + .3 + i * .06)));
     if (t > es + .8 && t < bg) { g.strokeStyle = "#facc15"; g.lineWidth = 6; g.strokeRect(530, 190, 116, 200); }
     if (t > bg) [31, 3, 52, 18, 7, 40, 12, 25].forEach((v, i) => { g.save(); g.translate(330 + i * 90, 470 + Math.sin(i) * 20); g.rotate((i % 3 - 1) * .35 + Math.sin(t * 3 + i) * .05); livroLomb(-40, -60, 80, 120, v, "#64748b", 1); g.restore(); });
     g.restore(); palavra("SÓ EM LISTA ORDENADA!", 640, 90, seg(t, o, o + .4), 46); if (t > es + .8 && t < bg) rotulo("⬆️ O LIVRO DO MEIO JÁ DIZ PARA QUE LADO SEGUIR", 640, 470, "#fde68a", 1);
     if (t > bg + .6) { xVermelho(1080, 480, 30, 1); rotulo("bagunçada: o meio não diz nada", 1000, 560, "#fecaca", 1); } } },
 { chip: "O ALGORITMO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "meio"), "pop"], [em(F6, "Achou"), "ding"], [em(F6, "esquerda"), "whoosh"], [em(F6, "direita"), "whoosh"], [em(F6, "repita"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F6, "meio"), em(F6, "Achou"), em(F6, "esquerda"), em(F6, "direita"), em(F6, "repita")]; const k = ts.filter(x => t > x).length;
     robozinho(170, 360, 1.3, t, k >= 2); if (k) balao(["Olho o MEIO!", "É ele? ACHOU!", "Maior? Fora a ESQUERDA!", "Menor? Fora a DIREITA!", "E repito!"][k - 1], 330, 170, 1);
     const vivo = i => !(k >= 3 && k < 4 && i < 4) && !(k >= 4 && i > 3); LB.forEach((v, i) => carta(v, 480 + i * 92, 330, i === 3 && k >= 1 ? "#fde68a" : vivo(i) ? "#fff" : "rgba(255,255,255,.2)", 1, 80));
     ["1 · MEIO", "2 · ACHOU?", "3 · MAIOR: ⬅ fora", "4 · MENOR: fora ➡", "5 · REPITA"].forEach((s, i) => { if (k > i) comando(s, 480 + (i % 3) * 270 + (i > 2 ? 135 : 0), 470 + Math.floor(i / 3) * 62, 1, ["#2563eb", "#16a34a", "#7c3aed", "#db2777", "#f59e0b"][i], 250); }); } },
 { chip: "VALENDO: ACHAR O 31", fala: F7, legenda: "Valendo! Procurar o 31 nesta lista de 8 números. O meio é a posição 4, com o 18. 31 é maior: a metade da esquerda cai fora! Sobram as posições 5 a 8. O novo meio é a posição 6: 31. Achou!",
   sfx: [[.1, "festa"], [em(F7, "meio"), "pop"], [em(F7, "dezoito"), "pop"], [em(F7, "cai"), "whoosh"], [em(F7, "seis"), "pop"], [em(F7, "Achou"), "festa"]],
   draw(t, D) { const mi = em(F7, "meio"), d18 = em(F7, "dezoito"), cf = em(F7, "cai"), p6 = em(F7, "seis"), ac = em(F7, "Achou");
     g.save(); camera(t, [[0, 640, 360, 1], [mi, 600, 330, 1.2], [cf, 640, 360, 1], [p6, 820, 330, 1.25], [ac, 760, 340, 1.1]]); palco(t); g.fillStyle = "#1e293b"; rr(170, 330, 940, 30, 8); g.fill(); // mesa
     LB.forEach((v, i) => { const x = 220 + i * 120; let y = 260, rot = 0; if (i < 4 && t > cf) { const q = cl((t - cf) / .9); y += q * q * 500; rot = q * (i - 2) * .6; }
       g.save(); g.translate(x, y); g.rotate(rot); carta(v, 0, 0, (i === 3 && t > d18 && t < cf) ? "#fde68a" : (i === 5 && t > p6) ? (t > ac ? "#bbf7d0" : "#fde68a") : "#fff", 1, 100); g.restore(); if (!(i < 4 && t > cf)) rotulo("pos. " + (i + 1), x, 345, "#c4b5fd", 1); });
     g.restore(); placaShow("PROCURAR: 31", 640, 90, seg(t, 0, .4), "#facc15");
     if (t > d18 && t < cf) etiqueta("31 > 18", 440, 470, 580, 330, 1); if (t > cf + .8 && t < p6) etiqueta("SOBRAM 5 A 8", 900, 470, 860, 330, 1);
     if (t > ac) { palavra("ACHOU! 2 COMPARAÇÕES", 640, 520, seg(t, ac, ac + .4), 46); confete(t, ac); } } },
 { chip: "A CORRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "corrida"), "festa"], [em(F8, "tartaruga"), "pop"], [em(F8, "canguru"), "pop"], [em(F8, "dois"), "ding"]],
   draw(t, D) { const c = em(F8, "corrida"), ta = em(F8, "tartaruga"), ca = em(F8, "canguru"), d = em(F8, "dois");
     g.save(); camera(t, [[0, 640, 360, 1], [ta, 600, 330, 1.05], [d, 640, 360, 1]]); fundoEscuro(t, "#14532d");
     [250, 470].forEach((y, j) => { g.fillStyle = "#166534"; rr(120, y - 50, 1040, 100, 16); g.fill(); LB.forEach((v, i) => carta(v, 220 + i * 120, y, "#fff", 1, 70)); });
     if (t > ta) { const n = Math.min(6, Math.floor((t - ta) / .55) + 1); emo("🐢", 220 + (n - 1) * 120, 210, 50); rotulo(n + " comparações", 640, 190, "#fde68a", 1); }
     if (t > ca) { const st = [3, 5], n = Math.min(2, Math.floor((t - ca) / .8) + 1), x = 220 + st[n - 1] * 120, h = Math.abs(Math.sin((t - ca) * 4)) * 50; emo("🦘", x, 420 - h, 56); rotulo(n + " comparações", 640, 545, "#fde68a", 1); }
     g.restore(); if (t > c) placaShow("🏁 CORRIDA: ACHAR O 31", 640, 90, seg(t, c, c + .4), "#facc15"); rotulo("🐢 SEQUENCIAL", 100, 190, "#bbf7d0", seg(t, ta, ta + .4)); rotulo("🦘 BINÁRIA", 90, 410, "#bbf7d0", seg(t, ca, ca + .4)); } },
 { chip: "LISTAS GIGANTES", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "mil"), "pop"], [em(F9, "dez"), "ding"], [em(F9, "milhão"), "whoosh"], [em(F9, "vinte"), "festa"]],
   draw(t, D) { const m = em(F9, "mil"), dz = em(F9, "dez"), mh = em(F9, "milhão"), vt = em(F9, "vinte");
     g.save(); camera(t, [[0, 640, 360, 1.6], [m, 640, 360, 1], [mh, 640, 360, .45]]); fundoEscuro(t, "#0e7490");
     for (let i = 0; i < 400; i++) { const x = -700 + (i % 40) * 65, y = -400 + Math.floor(i / 40) * 150; g.fillStyle = ["#2563eb", "#16a34a", "#db2777", "#f59e0b", "#7c3aed"][i % 5]; rr(x, y, 50, 120, 4); g.fill(); }
     g.restore(); g.fillStyle = "rgba(15,23,42,.82)"; rr(250, 140, 780, 330, 24); g.fill();
     const lin = [["8", "8", "4"], ["100", "100", "7"]]; if (t > m) lin.push(["1.000", "1.000", t > dz ? "10" : "…"]); if (t > mh) lin.push(["1.000.000", "1.000.000", t > vt ? "20" : "…"]);
     tabela(640, 160, 720, ["ITENS", "🐢 SEQUENCIAL", "🦘 BINÁRIA"], lin, ["#334155", "#ea580c", "#16a34a"], 1, 2, 56); rotulo("comparações no pior caso", 640, 450, "#bae6fd", 1); if (t > vt) palavra("SÓ 20!", 1080, 520, seg(t, vt, vt + .4), 60); } },
 { chip: "A VITÓRIA", fala: F10, sfx: [[.1, "festa"], [em(F10, "meio"), "pop"], [em(F10, "sete"), "ding"], [em(F10, "loucura"), "festa"], [em(F10, "Missão"), "festa"]],
   draw(t, D) { const me = em(F10, "meio"), s = em(F10, "sete"), lo = em(F10, "loucura"), m = em(F10, "Missão");
     const ch = [[50, "MAIOR"], [75, "MENOR"], [62, "MAIOR"], [68, "MENOR"], [65, "MAIOR"], [66, "MAIOR"], [67, "ACERTOU!"]]; const n = t > me ? Math.min(7, Math.floor((t - me) / ((s - me) / 7)) + 1) : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [s, 640, 330, 1.15], [lo, 640, 380, 1]]); palco(t); regua100(t, 240, 800, 300, 1, 100, ch.slice(0, n), "ultimo"); 
     jogador({ braco: t > s ? -2.5 : -1, bracoE: t > s ? 2.5 : .3, boca: t > s ? "riso" : "", pisca: pisca(t) }); apres({ braco: -2.2, bracoE: 2.2, boca: "riso", pisca: pisca(t + .4) }); plateia(t, t > lo ? "festa" : "", 700);
     if (t > s) emo("🏆", 220, 420 - Math.abs(Math.sin(t * 4)) * 10, 60); g.restore();
     if (t > s) placaShow("7 CHUTES! 🏆", 640, 150, seg(t, s, s + .4), "#facc15"); confete(t, lo); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "dicionário"), "pop"], [em(F11, "contatos"), "pop"], [em(F11, "sites"), "pop"]],
   draw(t, D) { ondeUso(t, F11, [["dicionário", "📖", "Dicionário de papel:", "abre no meio e segue"], ["contatos", "📱", "Contatos do celular:", "em ordem alfabética"], ["sites", "🔎", "Sites de busca:", "respostas em milésimos"]]); } },
 { chip: "", fala: F12, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 4", [LEO, BIA8]); } }
];

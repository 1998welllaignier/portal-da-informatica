/* ================= 8º ano · 2027 · 1º bimestre · Missão 8 · Extra: Fractais ================= */
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

const F0 = "Fractais: a parte parece o todo!",
  F1 = "No caminho da escola, o Léo arrancou uma folha de samambaia e reparou numa coisa estranha: cada folhinha do galho parecia uma samambaia inteira, só que pequenininha!",
  F2 = "Isso tem nome: fractal. Fractal é uma figura em que uma parte é parecida com o todo. A samambaia é assim. O brócolis também: cada pedacinho parece um brócolis pequeno.",
  F3 = "E como se desenha um fractal? Com recursão, igual à Missão 6: a mesma regra, repetida dentro dela mesma, em tamanhos cada vez menores.",
  F4 = "O mais famoso é o triângulo de Sierpinski, criado pelo matemático polonês Wacław Sierpiński. No nível zero, é um triângulo. No nível um, ele vira três triângulos menores, e o do meio fica vazio.",
  F5 = "No nível dois, cada um dos três vira três menores: nove. No nível três, vinte e sete. No nível quatro, oitenta e um! A cada nível, o número de triângulos multiplica por três.",
  F6 = "E por que o desenho não continua para sempre? Porque a gente para num nível: é o caso base. A tela não consegue mostrar um triângulo menor que um pontinho.",
  F7 = "Outro fractal é a árvore. Um tronco se divide em dois galhos. Cada galho se divide em dois galhos menores. No nível um, são dois galhos novos. No nível dois, quatro. No nível três, oito. No nível quatro, dezesseis. Aqui, a cada nível, o número dobra.",
  F8 = "O Léo desenhou a sua árvore fractal no portal e descobriu por que a samambaia parece samambaia em todo pedaço. Missão cumprida!",
  F9 = "Onde eu uso isso? Na natureza: samambaia, brócolis romanesco, raios, flocos de neve e rios vistos de cima. Nos jogos e filmes, montanhas e árvores são criadas pelo computador com fractais. E até algumas antenas de celular têm forma de fractal.",
  F10 = "Agora é com vocês: abram a Missão 8 no portal!";
function sier(x, y, s, n, cor) { if (n === 0) { g.fillStyle = cor; g.beginPath(); g.moveTo(x, y - s * .866); g.lineTo(x - s / 2, y); g.lineTo(x + s / 2, y); g.closePath(); g.fill(); return; }
  const h = s / 2; sier(x, y - h * .866, h, n - 1, cor); sier(x - h / 2, y, h, n - 1, cor); sier(x + h / 2, y, h, n - 1, cor); }
function arv(x, y, len, ang, n, w) { if (n < 0) return; const x2 = x + Math.cos(ang) * len, y2 = y - Math.sin(ang) * len; g.strokeStyle = n === 0 ? "#22c55e" : "#a16207"; g.lineWidth = w; g.lineCap = "round"; g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke();
  arv(x2, y2, len * .7, ang + .45, n - 1, w * .7); arv(x2, y2, len * .7, ang - .45, n - 1, w * .7); }
function samambaia(x, y, s, n) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = "#22c55e"; g.lineWidth = 4; g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -200); g.stroke();
  for (let i = 1; i < 9; i++) { const yy = -i * 22, L = 70 * (1 - i / 10); [-1, 1].forEach(d => { g.save(); g.translate(0, yy); g.rotate(d * 1.1); if (n > 0) samambaia(0, 0, L / 200, n - 1); else { g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -L); g.stroke(); } g.restore(); }); } g.restore(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); sier(840, 400, 260, Math.min(4, Math.floor(t * 2.5)), "#facc15");
     abertura(t, "8º ANO · MISSÃO 8 · EXTRA", "Fractais", "A PARTE", "PARECE O TODO!", 1.6); } },
 { chip: "O MISTÉRIO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "samambaia"), "pop"], [em(F1, "folhinha"), "misterio"], [em(F1, "inteira"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s = em(F1, "samambaia"), f = em(F1, "folhinha");
     if (t > s) samambaia(640, 560, 2, 1); if (t > f) { const r = 70 + Math.sin(t * 3) * 4; g.strokeStyle = "#facc15"; g.lineWidth = 5; g.beginPath(); g.arc(700, 360, r, 0, 7); g.stroke(); lupa(790, 290, .9); rotulo("UMA SAMAMBAIA PEQUENININHA!", 900, 470, "#fde68a", seg(t, f + .6, f + 1)); }
     leo({ x: 140, y: 620, s: .8, braco: -.6, bracoE: 2.2, olhar: 1, boca: "o", pisca: pisca(t) }); } },
 { chip: "O QUE É FRACTAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "fractal"), "ding"], [em(F2, "samambaia"), "pop"], [em(F2, "brócolis"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const fr = em(F2, "fractal"), sa = em(F2, "samambaia"), br = em(F2, "brócolis");
     if (t > fr) comando("🌿 FRACTAL = UMA PARTE PARECE O TODO", 640, 100, seg(t, fr, fr + .4), "#16a34a", 600);
     if (t > sa) samambaia(420, 560, 1.6, 1); if (t > br) { emo("🥦", 900, 380, 150); emo("🥦", 1090, 330, 60); seta(970, 330, 1060, 320, seg(t, br + .3, br + .6), "#fde68a"); } } },
 { chip: "FEITO COM RECURSÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "recursão"), "ding"], [em(F3, "menores"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const r = em(F3, "recursão"), m = em(F3, "menores");
     if (t > r) comando("🔁 RECURSÃO (MISSÃO 6)", 640, 100, seg(t, r, r + .4), "#7c3aed", 400);
     if (t > r + .6) [0, 1, 2, 3].forEach(n => { if (t > r + .6 + n * .6) sier(250 + n * 260, 460, 220, n, "#facc15"); }); } },
 { chip: "SIERPINSKI", fala: F4, legenda: "O mais famoso é o triângulo de Sierpinski, criado pelo matemático polonês Wacław Sierpiński. No nível 0, é um triângulo. No nível 1, ele vira 3 triângulos menores, e o do meio fica vazio.",
   sfx: [[.1, "whoosh"], [em(F4, "Sierpinski"), "ding"], [em(F4, "zero"), "pop"], [em(F4, "um", 1), "pop"], [em(F4, "vazio"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s = em(F4, "Sierpinski"), z = em(F4, "zero"), u = em(F4, "nível", 1), v = em(F4, "vazio");
     if (t > s) comando("🔺 TRIÂNGULO DE SIERPINSKI", 640, 100, seg(t, s, s + .4), "#ca8a04", 440);
     if (t > z) { sier(400, 480, 280, 0, "#facc15"); rotulo("NÍVEL 0 · 1 triângulo", 400, 530, "#fde68a", 1); }
     if (t > u) { sier(880, 480, 280, 1, "#facc15"); rotulo("NÍVEL 1 · 3 triângulos", 880, 530, "#fde68a", 1); }
     if (t > v) { g.strokeStyle = "#f472b6"; g.lineWidth = 4; g.beginPath(); g.moveTo(880, 480); g.lineTo(810, 359); g.lineTo(950, 359); g.closePath(); g.stroke(); rotulo("o do meio fica vazio", 1080, 380, "#f9a8d4", 1); } } },
 { chip: "MULTIPLICA POR 3", fala: F5, legenda: "No nível 2, cada um dos 3 vira 3 menores: 9. No nível 3, 27. No nível 4, 81! A cada nível, o número de triângulos multiplica por 3.",
   sfx: [[.1, "whoosh"], [em(F5, "nove"), "pop"], [em(F5, "vinte"), "pop"], [em(F5, "oitenta"), "pop"], [em(F5, "multiplica"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F5, "nove"), em(F5, "vinte"), em(F5, "oitenta")], mu = em(F5, "multiplica");
     [[2, 9], [3, 27], [4, 81]].forEach(([n, q], i) => { if (t > ts[i] - .3) { sier(270 + i * 370, 430, 280, n, "#facc15"); rotulo("NÍVEL " + n + " · " + q, 270 + i * 370, 480, "#fde68a", 1); } });
     if (t > mu) palavra("× 3 A CADA NÍVEL", 640, 150, seg(t, mu, mu + .4), 50); } },
 { chip: "O CASO BASE", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "base"), "ding"], [em(F6, "pontinho"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const b = em(F6, "base"), p = em(F6, "pontinho");
     sier(640, 470, 360, 5, "#facc15"); if (t > b) comando("🛑 PARAMOS NUM NÍVEL = CASO BASE", 640, 100, seg(t, b, b + .4), "#dc2626", 560);
     if (t > p) { lupa(560, 440, 1); rotulo("menor que um pontinho da tela!", 640, 530, "#fde68a", seg(t, p, p + .4)); } } },
 { chip: "A ÁRVORE FRACTAL", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "dois"), "pop"], [em(F7, "quatro"), "pop"], [em(F7, "oito"), "pop"], [em(F7, "dezesseis"), "pop"], [em(F7, "dobra"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const ts = [em(F7, "dois", 1), em(F7, "quatro"), em(F7, "oito"), em(F7, "dezesseis")], db = em(F7, "dobra");
     const n = ts.filter(x => t > x).length; arv(500, 560, 120, Math.PI / 2, n, 16);
     tabela(1000, 150, 380, ["NÍVEL", "GALHOS NOVOS"], [["1", "2"], ["2", "4"], ["3", "8"], ["4", "16"]].slice(0, n), ["#334155", "#16a34a"], 1, -1, 52);
     if (t > db) comando("× 2 A CADA NÍVEL", 1000, 470, seg(t, db, db + .4), "#16a34a", 280); } },
 { chip: "A SOLUÇÃO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "árvore"), "pop"], [em(F8, "samambaia"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F8, "árvore"), m = em(F8, "Missão"); arv(700, 560, 120, Math.PI / 2, Math.min(7, t > a ? Math.floor((t - a) * 3) : 0), 16); samambaia(1050, 560, 1.4, 1);
     leo({ x: 160, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "natureza"), "pop"], [em(F9, "jogos"), "pop"], [em(F9, "antenas"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["natureza", "❄️", "Na natureza:", "samambaia, raios, neve, rios"], ["jogos", "🏔️", "Jogos e filmes:", "montanhas e árvores criadas"], ["antenas", "📡", "Antenas de celular:", "algumas têm forma de fractal"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 8", [LEO, BIA8]); } }
];

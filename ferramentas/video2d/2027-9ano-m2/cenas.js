/* ================= 9º ano · 2027 · 1º bimestre · Missão 2 · Árvores ================= */
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
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
// grafo: nós {id:[x,y,rot]}, arestas [[a,b,peso]]
function grafo(N, A, k, hlN, hlA) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k);
  A.forEach(([a, b, p], i) => { const [x1, y1] = N[a], [x2, y2] = N[b], on = (hlA || []).includes(i); g.strokeStyle = on ? "#facc15" : "#94a3b8"; g.lineWidth = on ? 9 : 5; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke();
    if (p != null) { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; g.fillStyle = on ? "#facc15" : "#fff"; g.beginPath(); g.arc(mx, my, 20, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(String(p), mx, my + 7); } });
  Object.entries(N).forEach(([id, [x, y, r]]) => { const on = (hlN || []).includes(id); g.fillStyle = on ? "#facc15" : "#2563eb"; g.beginPath(); g.arc(x, y, 34, 0, 7); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; g.stroke(); emo(r || "", x, y + 12, 34); rotulo(id, x, y + 58, "#e2e8f0", 1); });
  g.restore(); }

const F0 = "Árvores: a raiz em cima!",
  F1 = "O Rafa salvou o trabalho de Ciências no computador da sala e, na aula seguinte, não achou mais. Tinha pasta dentro de pasta, dentro de pasta. Onde foi parar o arquivo?",
  F2 = "Para achar, ele precisa entender uma árvore. Na computação, a árvore é um grafo especial, desenhado de cabeça para baixo: a raiz fica em cima, e os galhos descem até as folhas.",
  F3 = "A raiz é o vértice de cima, onde tudo começa: a pasta Documentos. Quem está logo acima é o pai; logo abaixo, os filhos. A pasta Escola é filha de Documentos. A folha é o vértice sem filhos, no fim do galho: os arquivos. E o nível é quantos passos da raiz até o vértice: Documentos é nível zero, Escola é nível um.",
  F4 = "O que faz um grafo ser árvore? Três regras. Tem uma raiz só: tudo começa num lugar. Não tem voltas: não dá para sair de um vértice e voltar a ele sem repetir o caminho. E, de um vértice a outro, existe um único caminho.",
  F5 = "Da raiz até o mapa ponto png, por exemplo, só existe um caminho: Documentos, Escola, mapa ponto png. Esse caminho é o endereço do arquivo!",
  F6 = "As árvores servem para organizar as coisas em hierarquia: do mais geral para o mais específico. Pastas, árvore da família, campeonato mata-mata e o organograma da escola.",
  F7 = "O Rafa desceu pela árvore: Documentos, Escola, Ciências. E lá estava o trabalho! Missão cumprida!",
  F8 = "Onde eu uso isso? Nas pastas do computador e do celular, que formam uma árvore. Na árvore genealógica, com avós, pais e filhos em níveis. E no mata-mata da Copa: as folhas são os times, e a raiz é o campeão.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";
// árvore de pastas
const TN = { Documentos: [640, 140, "📁", 0], Escola: [400, 290, "📁", 1], Fotos: [880, 290, "📁", 1], "redação.txt": [260, 440, "📄", 2], "mapa.png": [540, 440, "📄", 2], "aniversário.jpg": [880, 440, "📄", 2] };
const TA = [["Documentos", "Escola"], ["Documentos", "Fotos"], ["Escola", "redação.txt"], ["Escola", "mapa.png"], ["Fotos", "aniversário.jpg"]];
function arvore2(k, hlN, hlA, N, A) { grafo(N || TN, (A || TA), k, hlN, hlA); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); g.save(); g.translate(500, 40); g.scale(.55, .55); arvore2(seg(t, .2, .8), t > 1 ? ["Documentos"] : []); g.restore();
     abertura(t, "9º ANO · MISSÃO 2", "Árvores", "A RAIZ", "EM CIMA!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "salvou"), "click"], [em(F1, "achou"), "alerta"], [em(F1, "pasta"), "pop"], [em(F1, "parar"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const p = em(F1, "pasta"), pr = em(F1, "parar");
     if (t > p) for (let i = 0; i < 6; i++) { const k = seg(t, p + i * .2, p + .4 + i * .2); if (k > 0) pasta(400 + i * 70, 200 + i * 45, .9 - i * .06, ["#f59e0b", "#3b82f6", "#22c55e", "#a855f7", "#ef4444", "#14b8a6"][i], "", false); }
     if (t > pr) palavra("CADÊ O ARQUIVO?", 760, 520, seg(t, pr, pr + .4), 44);
     rafa({ x: 150, y: 620, s: .85, braco: t > pr ? -2.6 : -.6, bracoE: t > pr ? 2.6 : .3, olhar: 1, boca: "o", pisca: pisca(t) }); } },
 { chip: "A ÁRVORE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "árvore"), "ding"], [em(F2, "cabeça"), "whoosh"], [em(F2, "raiz"), "pop"], [em(F2, "folhas"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F2, "árvore"), c = em(F2, "cabeça"), r = em(F2, "raiz"), f = em(F2, "folhas");
     if (t < c) { emo("🌳", 640, 380, 220); } else { const k = cl(seg(t, c, c + .8)); g.save(); g.translate(640, 330); g.rotate(Math.PI * (1 - k)); g.translate(-640, -330); if (k < 1) emo("🌳", 640, 380, 220); g.restore(); if (k >= 1) arvore2(1, t > r && t < f ? ["Documentos"] : t > f ? ["redação.txt", "mapa.png", "aniversário.jpg"] : []); }
     if (t > r) rotulo("⬆️ A RAIZ FICA EM CIMA", 1080, 140, "#fde68a", seg(t, r, r + .4)); if (t > f) rotulo("⬇️ AS FOLHAS EMBAIXO", 1080, 500, "#bbf7d0", seg(t, f, f + .4)); } },
 { chip: "AS PARTES", fala: F3, legenda: "A raiz é o vértice de cima, onde tudo começa: a pasta Documentos. Quem está logo acima é o pai; logo abaixo, os filhos. A pasta Escola é filha de Documentos. A folha é o vértice sem filhos, no fim do galho: os arquivos. E o nível é quantos passos da raiz até o vértice: Documentos é nível 0, Escola é nível 1.",
   sfx: [[.1, "whoosh"], [em(F3, "raiz"), "ding"], [em(F3, "pai"), "ding"], [em(F3, "folha"), "ding"], [em(F3, "nível"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const r = em(F3, "raiz"), p = em(F3, "pai"), f = em(F3, "folha"), n = em(F3, "nível");
     const hl = t > n ? [] : t > f ? ["redação.txt", "mapa.png", "aniversário.jpg"] : t > p ? ["Documentos", "Escola"] : t > r ? ["Documentos"] : [];
     g.save(); g.translate(-90, 40); g.scale(.85, .85); arvore2(1, hl, t > p && t < f ? [0] : []); g.restore();
     if (t > n) [0, 1, 2].forEach(i => rotulo("NÍVEL " + i, 50, 165 + i * 128, "#fde68a", 1));
     [["🌱 RAIZ", "onde tudo começa", r, "#16a34a"], ["👨‍👧 PAI E FILHO", "acima e abaixo", p, "#2563eb"], ["🍃 FOLHA", "sem filhos: os arquivos", f, "#0d9488"], ["📏 NÍVEL", "passos desde a raiz", n, "#ca8a04"]].forEach(([a, b, t0, c], i) => { if (t > t0) { comando(a, 1060, 130 + i * 110, seg(t, t0, t0 + .4), c, 260); rotulo(b, 1060, 180 + i * 110, "#e2e8f0", 1); } }); } },
 { chip: "AS 3 REGRAS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "raiz"), "pop"], [em(F4, "voltas"), "alerta"], [em(F4, "único"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); comando("🌳 O QUE FAZ UM GRAFO SER ÁRVORE?", 640, 90, seg(t, 0, .4), "#7c3aed", 560);
     [["raiz", "1 · Tem UMA raiz só"], ["voltas", "2 · NÃO tem voltas (ciclos)"], ["único", "3 · Um ÚNICO caminho entre dois vértices"]].forEach(([w, s], i) => { const t0 = em(F4, w); cartao(s, 470, 200 + i * 120, 640, ["#16a34a", "#dc2626", "#2563eb"][i], seg(t, t0, t0 + .4)); });
     const v = em(F4, "voltas"); if (t > v) { const N = { A: [1000, 220], B: [920, 360], C: [1080, 360] }; grafo(N, [["A", "B"], ["B", "C"], ["C", "A"]], 1, [], [0, 1, 2]); xVermelho(1000, 300, 40, seg(t, v + .5, v + .8)); rotulo("volta = NÃO é árvore", 1000, 450, "#fecaca", 1); } } },
 { chip: "UM ÚNICO CAMINHO", fala: F5, legenda: "Da raiz até o mapa.png, por exemplo, só existe um caminho: Documentos › Escola › mapa.png. Esse caminho é o endereço do arquivo!",
   sfx: [[.1, "whoosh"], [em(F5, "Documentos"), "pop"], [em(F5, "Escola"), "pop"], [em(F5, "mapa", 1), "pop"], [em(F5, "endereço"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const d = em(F5, "Documentos"), e = em(F5, "Escola"), m = em(F5, "mapa", 1), en = em(F5, "endereço");
     arvore2(1, [t > d ? "Documentos" : "", t > e ? "Escola" : "", t > m ? "mapa.png" : ""], [t > e ? 0 : -1, t > m ? 3 : -1]);
     if (t > en) comando("📍 Documentos › Escola › mapa.png", 640, 560, seg(t, en, en + .4), "#ca8a04", 560); } },
 { chip: "HIERARQUIA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "hierarquia"), "ding"], [em(F6, "Pastas"), "pop"], [em(F6, "família"), "pop"], [em(F6, "campeonato"), "pop"], [em(F6, "organograma"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const h = em(F6, "hierarquia"); comando("🔝 HIERARQUIA: DO GERAL PARA O ESPECÍFICO", 640, 100, seg(t, h, h + .4), "#16a34a", 640);
     [["Pastas", "📁", "Pastas"], ["família", "👪", "Família"], ["campeonato", "🏆", "Mata-mata"], ["organograma", "🏫", "Organograma"]].forEach(([w, e, n], i) => { const t0 = em(F6, w); if (t > t0) { const x = 250 + i * 260; g.fillStyle = "#fff"; g.globalAlpha = cl(seg(t, t0, t0 + .4)); rr(x - 110, 200, 220, 220, 20); g.fill(); g.globalAlpha = 1; emo(e, x, 320, 80); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(n, x, 395); } }); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Documentos"), "pop"], [em(F7, "Escola"), "pop"], [em(F7, "Ciências"), "pop"], [em(F7, "trabalho"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F7, "Documentos"), e = em(F7, "Escola"), c = em(F7, "Ciências"), m = em(F7, "Missão");
     const N = { Documentos: [640, 130, "📁"], Escola: [460, 260, "📁"], Fotos: [820, 260, "📁"], Ciências: [460, 390, "📁"], "trabalho.docx": [460, 510, "📄"] }; const A = [["Documentos", "Escola"], ["Documentos", "Fotos"], ["Escola", "Ciências"], ["Ciências", "trabalho.docx"]];
     grafo(N, A, 1, [t > d ? "Documentos" : "", t > e ? "Escola" : "", t > c ? "Ciências" : "", t > c + .8 ? "trabalho.docx" : ""], [t > e ? 0 : -1, t > c ? 2 : -1, t > c + .8 ? 3 : -1]);
     rafa({ x: 1100, y: 620, s: .8, braco: t > c + .8 ? -2.4 : -.6, bracoE: t > c + .8 ? 2.4 : .3, olhar: -1, boca: t > c + .8 ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "pastas"), "pop"], [em(F8, "genealógica"), "pop"], [em(F8, "Copa"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["pastas", "📁", "Pastas:", "no computador e no celular"], ["genealógica", "👪", "Árvore genealógica:", "avós, pais e filhos"], ["Copa", "🏆", "Mata-mata da Copa:", "a raiz é o campeão"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 2", [RAFA, JULIA]); } }
];

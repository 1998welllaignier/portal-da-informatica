/* ================= 5º ano · 2026 · 4º bimestre · Missão 2 · Listas e grafos no dia a dia ================= */
const LARA5 = { camisa: "#a855f7", cabelo: "longo" }, PEDRO5 = { camisa: "#f97316" };
const lara = o => boneco(Object.assign({}, LARA5, o)), pedro = o => boneco(Object.assign({}, PEDRO5, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// item de lista (caixa com a posição embaixo)
function item(x, y, txt, pos, cor, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (hl) { g.shadowColor = "#facc15"; g.shadowBlur = 26; }
  g.fillStyle = cor || "#fff"; rr(-80, -38, 160, 76, 14); g.fill(); g.shadowBlur = 0; g.fillStyle = NAVY; g.font = `800 ${txt.length > 7 ? 22 : 26}px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 9);
  if (pos) { g.fillStyle = hl ? "#facc15" : "#cbd5e1"; g.font = `800 22px ${F}`; g.fillText(pos + "º", 0, 68); } g.restore(); }
// vértice com nome e aresta entre vértices
function vert(x, y, nome, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 5; g.stroke();
  g.fillStyle = "#fff"; g.font = `800 ${nome.length > 5 ? 18 : 22}px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 8); g.restore(); }
function aresta(x1, y1, x2, y2, k, cor) { if (k <= 0) return; g.strokeStyle = cor || "#fde68a"; g.lineWidth = 7; g.lineCap = "round"; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x1 + (x2 - x1) * cl(k), y1 + (y2 - y1) * cl(k)); g.stroke(); }
function prancheta(x, y, s, linhas, k) { if (k <= 0) return; g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#a16207"; rr(-110, -150, 220, 300, 14); g.fill(); g.fillStyle = "#fff"; rr(-95, -125, 190, 265, 8); g.fill(); g.fillStyle = "#94a3b8"; rr(-40, -162, 80, 30, 8); g.fill();
  linhas.forEach((l, i) => { g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ". " + l, -80, -85 + i * 40); }); g.restore(); }

const ORD = ["Bia", "Caio", "Davi", "Lara"];
const F0 = "Listas e grafos: a festa da turma!",
  F1 = "A Lara vai organizar a festa da turma. Ela tem um monte de nomes anotados, tudo bagunçado, e ainda precisa saber quem é amigo de quem. Como deixar isso em ordem?",
  F2 = "Primeiro, a lista. Uma lista guarda vários itens, um depois do outro. Cada item ocupa uma posição: o primeiro, o segundo, o terceiro.",
  F3 = "Com uma lista, dá para fazer três coisas. Inserir: chegou mais um colega, ele entra na lista. Remover: um colega não pode ir, ele sai da lista. E trocar de lugar: por exemplo, colocar os nomes em ordem alfabética, de A a Z.",
  F4 = "Agora, as amizades. Para mostrar quem está ligado a quem, a gente usa um grafo: um desenho de pontos ligados por linhas.",
  F5 = "Cada ponto é um vértice, que pode ser uma pessoa, uma cidade ou um lugar. Cada linha é uma aresta: a ligação entre dois vértices. A Lara é amiga da Bia e do Caio: são duas arestas.",
  F6 = "Pronto! A Lara fez a lista de convidados em ordem alfabética e desenhou o grafo das amizades. Assim, ela sentou os amigos pertinho uns dos outros. Missão cumprida!",
  F7 = "Onde eu uso isso? A lista aparece na fila da merenda, na lista de compras e na playlist de músicas. O grafo aparece no mapa de cidades ligadas por estradas e nas redes de amigos.",
  F8 = "Agora é com vocês: abram a Missão 2 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.0, "pop"], [1.4, "pop"], [2.2, "festa"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); [["Bia", 260, 230, "#ec4899"], ["Caio", 640, 180, "#0ea5e9"], ["Lara", 1020, 230, "#a855f7"]].forEach(([n, x, y, c], i) => vert(x, y, n, c, seg(t, .3 + i * .3, .6 + i * .3)));
     aresta(304, 230, 596, 180, seg(t, 1.2, 1.6)); aresta(684, 180, 976, 230, seg(t, 1.4, 1.8)); confete(t, 2.0);
     abertura(t, "5º ANO · MISSÃO 2", "Listas e grafos", "A FESTA", "DA TURMA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "nomes"), "pop"], [em(F1, "bagunçado"), "alerta"], [em(F1, "amigo"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "nomes"), b = em(F1, "amigo"), c = em(F1, "ordem");
     lara({ x: 220, y: 600, s: 1.1, braco: t > c ? -2.4 : -.7, bracoE: t > c ? 2.4 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) });
     ["Caio", "Lara", "Bia", "Davi", "Eva", "Gui"].forEach((n, i) => { const k = seg(t, a + i * .15, a + i * .15 + .3); if (k <= 0) return; g.save(); g.translate(560 + (i % 3) * 210 + Math.sin(i * 7) * 30, 200 + Math.floor(i / 3) * 140 + Math.cos(i * 5) * 20); g.rotate(Math.sin(i * 3) * .3); item(0, 0, n, 0, "#fde68a", k); g.restore(); });
     if (t > b) palavra("QUEM É AMIGO DE QUEM?", 760, 110, seg(t, b, b + .4), 50); } },
 { chip: "LISTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "ding"], [em(F2, "primeiro"), "pop"], [em(F2, "segundo"), "pop"], [em(F2, "terceiro"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F2, "lista"); palavra("LISTA", 640, 110, seg(t, a, a + .4), 90);
     if (t > a + .3) cartao("ITENS UM DEPOIS DO OUTRO", 640, 210, 560, "#7c3aed", seg(t, a + .3, a + .7));
     ["Caio", "Lara", "Bia"].forEach((n, i) => { const w = ["primeiro", "segundo", "terceiro"][i], t0 = em(F2, w); item(380 + i * 260, 370, n, i + 1, "#fff", seg(t, a + .5 + i * .2, a + .8 + i * .2), t > t0 && t < t0 + 1); }); } },
 { chip: "INSERIR · REMOVER · TROCAR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Inserir"), "pop"], [em(F3, "Remover"), "alerta"], [em(F3, "trocar", 1), "ding"], [em(F3, "Z"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F3, "Inserir"), b = em(F3, "Remover"), c = em(F3, "trocar", 1);
     let L = ["Caio", "Lara", "Bia"]; let acao = "", cor = "#16a34a", hl = null;
     if (t > a) { L = [...L, "Davi"]; acao = "➕ INSERIR"; hl = 3; }
     if (t > b) { L = ["Caio", "Lara", "Bia", "Davi", "Eva"]; acao = "➖ REMOVER"; cor = "#dc2626"; hl = 4; }
     if (t > b + 1.5) { L = ["Caio", "Lara", "Bia", "Davi"]; hl = null; }
     if (t > c) { L = ORD; acao = "🔀 TROCAR DE LUGAR: A → Z"; cor = "#ca8a04"; hl = null; }
     L.forEach((n, i) => item(180 + i * 230, 330, n, i + 1, t > c ? "#fef9c3" : "#fff", 1, hl === i));
     if (t > b && t < b + 1.5) xVermelho(180 + 4 * 230, 330, 40, seg(t, b + .4, b + .7));
     if (acao) comando(acao, 640, 160, seg(t, t > c ? c : t > b ? b : a, (t > c ? c : t > b ? b : a) + .4), cor, 460); } },
 { chip: "GRAFO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "grafo"), "ding"], [em(F4, "pontos"), "pop"], [em(F4, "linhas"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const a = em(F4, "grafo"), b = a + .6, c = a + 1.6;
     palavra("GRAFO", 640, 110, seg(t, a, a + .4), 90); if (t > a + .3) cartao("PONTOS LIGADOS POR LINHAS", 640, 210, 560, "#0f766e", seg(t, a + .3, a + .7));
     const P = [[340, 380], [560, 320], [780, 420], [980, 330]]; if (t > c) { aresta(340, 380, 560, 320, seg(t, c, c + .3)); aresta(560, 320, 780, 420, seg(t, c + .2, c + .5)); aresta(780, 420, 980, 330, seg(t, c + .4, c + .7)); aresta(340, 380, 780, 420, seg(t, c + .6, c + .9)); }
     P.forEach(([x, y], i) => { const k = seg(t, b + i * .15, b + i * .15 + .3); if (k > 0) { g.fillStyle = "#facc15"; g.beginPath(); g.arc(x, y, 24 * back(cl(k)), 0, 7); g.fill(); } }); } },
 { chip: "VÉRTICE E ARESTA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "vértice"), "ding"], [em(F5, "aresta"), "ding"], [em(F5, "Bia"), "pop"], [em(F5, "Caio"), "pop"], [em(F5, "duas"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const v = em(F5, "vértice"), a = em(F5, "aresta"), b = em(F5, "Bia"), c = em(F5, "Caio"), d = em(F5, "duas");
     if (t > v) comando("● VÉRTICE = PONTO", 330, 120, seg(t, v, v + .4), "#7c3aed", 380); if (t > a) comando("— ARESTA = LIGAÇÃO", 950, 120, seg(t, a, a + .4), "#ca8a04", 380);
     if (t > v && t < b) { ["👤", "🏙️", "📍"].forEach((e, i) => { g.font = `60px ${F}`; g.textAlign = "center"; g.globalAlpha = cl(seg(t, v + .5 + i * .4, v + .8 + i * .4)); g.fillText(e, 340 + i * 300, 330); g.globalAlpha = 1; }); }
     if (t >= b) { aresta(640, 270, 380, 430, seg(t, b, b + .4)); if (t > c) aresta(640, 270, 900, 430, seg(t, c, c + .4));
       vert(640, 270, "Lara", "#a855f7", 1); vert(380, 430, "Bia", "#ec4899", seg(t, b, b + .3)); if (t > c) vert(900, 430, "Caio", "#0ea5e9", seg(t, c, c + .3));
       if (t > d) cartao("2 ARESTAS = 2 AMIZADES", 640, 530, 460, "#16a34a", seg(t, d, d + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "lista"), "pop"], [em(F6, "grafo"), "pop"], [em(F6, "sentou"), "ding"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "lista"), b = em(F6, "grafo"), d = em(F6, "Missão");
     prancheta(290, 330, 1, ORD.concat(["Eva"]), seg(t, a, a + .4)); if (t > a) comando("A → Z", 290, 520, seg(t, a + .3, a + .7), "#ca8a04", 160);
     if (t > b) { const k = seg(t, b, b + 1.2); aresta(780, 260, 1000, 260, k); aresta(780, 260, 780, 450, k); aresta(1000, 260, 1000, 450, k); aresta(780, 450, 1000, 450, k);
       vert(780, 260, "Lara", "#a855f7", k * 2); vert(1000, 260, "Bia", "#ec4899", k * 2); vert(780, 450, "Caio", "#0ea5e9", k * 2); vert(1000, 450, "Davi", "#16a34a", k * 2); }
     lara({ x: 600, y: 610, s: .85, braco: Math.sin(t * 8) * .5 - 2.2, bracoE: -Math.sin(t * 8) * .5 + 2.2, olhar: 1, boca: "riso", pisca: pisca(t) });
     if (t > d) cumprida(t, d); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "fila"), "pop"], [em(F7, "compras"), "pop"], [em(F7, "playlist"), "pop"], [em(F7, "mapa"), "pop"], [em(F7, "redes"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 90, seg(t, 0, .4), 50);
     [["🍽️ FILA DA MERENDA", "fila", 220], ["🛒 LISTA DE COMPRAS", "compras", 360], ["🎵 PLAYLIST", "playlist", 500]].forEach(([n, w, y]) => comando(n, 330, y - 30, seg(t, em(F7, w), em(F7, w) + .4), "#16a34a", 420));
     const m = em(F7, "mapa"), r = em(F7, "redes"); if (t > m) { const k = seg(t, m, m + .8); aresta(800, 190, 1050, 230, k, "#e2e8f0"); aresta(800, 190, 900, 340, k, "#e2e8f0"); aresta(1050, 230, 900, 340, k, "#e2e8f0");
       [[800, 190], [1050, 230], [900, 340]].forEach(([x, y]) => predio(x, y + 40, .35, "#64748b", "")); comando("🗺️ MAPA DE CIDADES", 925, 420, seg(t, m, m + .4), "#7c3aed", 360); }
     if (t > r) comando("👥 REDES DE AMIGOS", 925, 490, seg(t, r, r + .4), "#7c3aed", 360); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "5º ano · 4º bimestre de 2026 · Missão 2", [LARA5, PEDRO5]); } }
];

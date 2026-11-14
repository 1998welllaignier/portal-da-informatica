/* ================= 7º ano · Missão 4 · Grafos: mapas, caminhos e conexões ================= */
const CAIO = { camisa: "#16a34a" }, BIA2 = { camisa: "#a855f7", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o));
// grafo do bairro: Casa, Padaria, Escola (+ rua direta). k = quanto já apareceu; dest = arestas em destaque
const VG = { C: [300, 340, "CASA"], P: [640, 190, "PADARIA"], E: [980, 340, "ESCOLA"] };
function vert(id, k, cor) { if (k <= 0) return; const [x, y, nome] = VG[id], s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s);
  g.fillStyle = cor || "#fff"; g.beginPath(); g.arc(0, 0, 46, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.stroke();
  g.fillStyle = NAVY; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 6); g.restore(); }
function aresta(a, b, k, cor, w, tracejada) { if (k <= 0) return; const [x1, y1] = VG[a], [x2, y2] = VG[b]; g.save(); g.strokeStyle = cor || "rgba(255,255,255,.85)"; g.lineWidth = w || 10; g.lineCap = "round";
  if (tracejada) g.setLineDash([18, 14]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(lerp(x1, x2, cl(k)), lerp(y1, y2, cl(k))); g.stroke(); g.restore(); }
function peso(a, b, n, k, dy) { if (k <= 0) return; const [x1, y1] = VG[a], [x2, y2] = VG[b], s = back(cl(k)); g.save(); g.translate((x1 + x2) / 2, (y1 + y2) / 2 + (dy || 0)); g.scale(s, s);
  g.fillStyle = AMAR; g.beginPath(); g.arc(0, 0, 30, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText(n, 0, 11); g.restore(); }
function bairro(t, o) { o = o || {}; const k = o.k == null ? 1 : o.k;
  aresta("C", "E", k, o.direta || "rgba(255,255,255,.55)", 8, true); aresta("C", "P", k, o.cp); aresta("P", "E", k, o.pe);
  vert("C", k); vert("P", k); vert("E", k); if (o.pesos) { peso("C", "P", 3, o.pesos); peso("P", "E", 2, o.pesos); peso("C", "E", 9, o.pesos, 0); } }
function celular(x, y, s, t, mapa) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-80, -150, 160, 300, 22); g.fill(); g.fillStyle = "#e0f2fe"; rr(-68, -128, 136, 250, 10); g.fill();
  if (mapa) { g.strokeStyle = "#94a3b8"; g.lineWidth = 8; [[-60, -60, 60, -60], [-60, 30, 60, 30], [-20, -120, -20, 110], [30, -120, 30, 110]].forEach(([a, b, c2, d]) => { g.beginPath(); g.moveTo(a, b); g.lineTo(c2, d); g.stroke(); });
    const k = cl(mapa); g.strokeStyle = "#2563eb"; g.lineWidth = 7; g.beginPath(); g.moveTo(-50, 100); g.lineTo(-20, lerp(100, 30, cl(k * 2))); if (k > .5) g.lineTo(lerp(-20, 30, cl(k * 2 - 1)), 30); g.stroke(); }
  g.restore(); }
function pinoMapa(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#dc2626"; g.beginPath(); g.arc(0, -30, 22, Math.PI, 0); g.lineTo(0, 10); g.closePath(); g.fill(); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, -30, 8, 0, 7); g.fill(); g.restore(); }

const CENAS = [
 { chip: "", fala: "Grafos: o mapa secreto do GPS!", sfx: [[.05, "whoosh"], [.5, "misterio"], [1.7, "ding"], [2.8, "festa"]],
   draw(t, D) { fundoEscuro(t, "#0b3b5c");
     // mini cena: o mapa vira pontos e linhas
     const z = io(seg(t, .3, 1.6)); g.save(); g.globalAlpha = 1 - z * .2; bairro(t, { k: seg(t, .4, 1.4), pesos: seg(t, 1.2, 1.6) }); g.restore();
     pinoMapa(980, 300, back(seg(t, 1.5, 1.9))); abertura(t, "7º ANO · MISSÃO 4", "Grafos: mapas, caminhos e conexões", "O MAPA SECRETO", "DO GPS!", 1.8); } },
 { chip: "O DESAFIO", fala: "O Caio precisa chegar à escola em cinco minutos. Ele abre o mapa do celular e, num piscar de olhos, aparece a rota. Como o celular sabe o caminho?", sfx: [[.1, "whoosh"], [1.0, "alerta"], [4.2, "click"], [6.6, "ding"], [9.4, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); caio({ x: 330, y: 560, s: 1.05, braco: -1.1, bracoE: .3, olhar: 1, boca: t > 9.4 ? "o" : "sorri", pisca: pisca(t) });
     if (t < 9.4) comando("5 MINUTOS!", 330, 120, seg(t, .9, 1.3), "#dc2626", 260);
     celular(760, 300, 1.15, t, seg(t, 4.2, 7.2)); if (t > 6.6) etiqueta("A ROTA", 1040, 200, 820, 260, seg(t, 6.6, 7.0));
     if (t > 9.4) palavra("COMO ELE SABE?", 330, 170, seg(t, 9.4, 9.8), 46); } },
 { chip: "O SEGREDO", fala: "O computador não enxerga as ruas como a gente. Ele guarda o mapa como pontos ligados por linhas. Isso se chama grafo.", sfx: [[.1, "whoosh"], [3.6, "pop"], [6.4, "pop"], [8.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const k = seg(t, 3.4, 6.4);
     if (k < 1) { celular(640, 330, 1.2 * (1 - k * .5), t, 1); } bairro(t, { k: seg(t, 4.2, 6.6) });
     if (t > 4) comando("PONTOS LIGADOS POR LINHAS", 640, 500, seg(t, 4.6, 5.0), "#0891b2", 520); palavra("GRAFO", 640, 110, seg(t, 8.2, 8.6), 96); } },
 { chip: "VÉRTICE E ARESTA", fala: "Cada lugar é um vértice: a casa, a padaria, a escola. Cada rua é uma aresta, a linha que liga dois lugares.", sfx: [[.1, "whoosh"], [1.0, "ding"], [2.6, "pop"], [3.4, "pop"], [4.2, "pop"], [5.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#173a78");
     aresta("C", "P", seg(t, 5.6, 6.4), AMAR, 12); aresta("P", "E", seg(t, 6.2, 7.0)); aresta("C", "E", seg(t, 6.6, 7.4), "rgba(255,255,255,.55)", 8, true);
     vert("C", seg(t, 2.5, 2.9), t < 5.4 ? AMAR : null); vert("P", seg(t, 3.3, 3.7), t < 5.4 ? AMAR : null); vert("E", seg(t, 4.1, 4.5), t < 5.4 ? AMAR : null);
     palavra(t < 5.4 ? "VÉRTICE" : "ARESTA", 640, 95, t < 5.4 ? seg(t, .9, 1.3) : seg(t, 5.5, 5.9), 76);
     etiqueta("VÉRTICE = LUGAR", 230, 480, 290, 395, seg(t, 1.4, 1.8)); if (t > 5.6) etiqueta("ARESTA = RUA", 200, 230, 430, 275, seg(t, 6.2, 6.6)); } },
 { chip: "PESO", fala: "E o número escrito na rua é o peso: quantos minutos você anda ali.", sfx: [[.1, "whoosh"], [1.6, "pop"], [2.0, "pop"], [2.4, "pop"], [3.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); bairro(t, { pesos: seg(t, 1.5, 2.1) }); palavra("PESO", 640, 95, seg(t, 3.2, 3.6), 86);
     etiqueta("3 MINUTOS", 430, 160, 455, 245, seg(t, 4.4, 4.8)); } },
 { chip: "QUAL CAMINHO?", fala: "Da casa até a escola, a rua direta leva nove minutos. Pela padaria, são três mais dois: cinco minutos!", sfx: [[.1, "whoosh"], [2.6, "pop"], [5.0, "pop"], [6.0, "pop"], [7.6, "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const kd = seg(t, 2.0, 3.0), kp = seg(t, 4.6, 6.0);
     bairro(t, { pesos: 1, direta: t > 1.8 && t < 4.5 ? "#ef4444" : null, cp: t > 4.6 ? "#22c55e" : null, pe: t > 5.3 ? "#22c55e" : null });
     comando("RUA DIRETA: 9 MIN", 640, 470, kd, "#dc2626", 380); if (t > 4.6) comando("PELA PADARIA: 3 + 2 = 5 MIN", 640, 470 + 0, seg(t, 6.0, 6.4), "#16a34a", 520);
     if (t > 7.4) { visto(920, 470, 26, seg(t, 7.4, 7.7)); palavra("5 MINUTOS!", 640, 95, seg(t, 7.4, 7.8), 80); }
     caio({ x: lerp(300, 980, io(seg(t, 5.0, 7.4))), y: 340 - 60 * Math.sin(Math.PI * io(seg(t, 5.0, 7.4))), s: .45, braco: -2.6, bracoE: 2.6, pisca: pisca(t) }); } },
 { chip: "O MAIS CURTO", fala: "O caminho com menos ruas nem sempre é o mais curto. O mais curto é o de menor soma dos pesos.", sfx: [[.1, "whoosh"], [1.0, "alerta"], [5.0, "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); cartao("1 RUA = 9 MIN", 330, 230, 400, "#dc2626", seg(t, .8, 1.2), "menos ruas"); xVermelho(560, 230, 30, seg(t, 3.4, 3.7));
     cartao("2 RUAS = 5 MIN", 950, 230, 400, "#16a34a", seg(t, 1.6, 2.0), "mais curto!"); visto(1120, 230, 26, seg(t, 3.6, 3.9));
     palavra("MENOR SOMA DOS PESOS", 640, 430, seg(t, 5.0, 5.4), 62); } },
 { chip: "GRAFO DE PESSOAS", fala: "Grafos também mostram pessoas. Cada pessoa é um vértice, cada amizade é uma aresta. Quantas arestas chegam numa pessoa? Esse é o grau dela.", sfx: [[.1, "whoosh"], [2.6, "pop"], [4.6, "pop"], [7.4, "misterio"], [9.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const P = [[300, 330, "ANA", "#ef4444"], [640, 170, "BIA", "#a855f7"], [640, 470, "CAIO", "#16a34a"], [980, 330, "DAVI", "#2563eb"]];
     const L = [[0, 1], [0, 2], [0, 3], [1, 2]]; L.forEach(([a, b], i) => { const k = seg(t, 4.4 + i * .4, 4.9 + i * .4); if (k > 0) { g.strokeStyle = t > 7.4 && a === 0 ? AMAR : "rgba(255,255,255,.8)"; g.lineWidth = 8; g.beginPath(); g.moveTo(P[a][0], P[a][1]); g.lineTo(lerp(P[a][0], P[b][0], cl(k)), lerp(P[a][1], P[b][1], cl(k))); g.stroke(); } });
     P.forEach(([x, y, n, c2], i) => { const k = back(seg(t, 2.4 + i * .3, 2.8 + i * .3)); if (k <= 0) return; boneco({ x, y: y + 40, s: .45 * k, camisa: c2, cabelo: i < 2 ? "longo" : null, pisca: pisca(t + i) }); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(n, x, y + 64); });
     if (t > 9.2) { palavra("GRAU", 640, 95, seg(t, 9.2, 9.6), 80); etiqueta("ANA: GRAU 3", 230, 480, 290, 380, seg(t, 9.6, 10.0)); } } },
 { chip: "ONDE EU USO ISSO?", fala: "Onde eu uso isso? No aplicativo de mapa, no aplicativo de transporte e na rede social que sugere amigos dos seus amigos.", sfx: [[.1, "whoosh"], [2.0, "pop"], [3.8, "pop"], [6.0, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); [["MAPA", "a rota mais rápida", 1.9], ["TRANSPORTE", "o caminho do motorista", 3.7], ["REDE SOCIAL", "amigos dos amigos", 5.9]].forEach(([n, sub, t0], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 240 + i * 400;
     g.save(); g.translate(x, 300); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-160, -150, 320, 300, 26); g.fill();
     if (i === 0) celular(0, 0, .8, t, 1); else if (i === 1) { carro(0, 20, "#eab308", 1.6); pinoMapa(60, -40, 1.2); } else { [[-70, -40], [70, -40], [0, 60]].forEach(([a, b]) => no(a, b, 26, "#a855f7")); linha(-70, -40, 70, -40, "#fff", 6); linha(-70, -40, 0, 60, "#fff", 6); }
     g.restore(); cartao(n, x, 510, 320, "rgba(255,255,255,.12)", seg(t, t0 + .2, t0 + .5), sub); }); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 4 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · Turma B · Missão 4", [CAIO, BIA2]); } }
];

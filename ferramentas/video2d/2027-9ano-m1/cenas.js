/* ================= 9º ano · 2027 · 1º bimestre · Missão 1 · Grafos e o melhor caminho ================= */
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

const F0 = "Grafos e o melhor caminho!",
  F1 = "A Júlia sempre ia da casa dela até a escola pela rua direta. Um dia, o Rafa chegou antes dela, mesmo morando mais longe. Como ele conseguiu? Ele usou o aplicativo de mapa!",
  F2 = "E como o aplicativo sabe o caminho mais rápido? Ele enxerga a cidade como um grafo: pontos ligados por linhas.",
  F3 = "Cada ponto é um vértice: uma esquina, uma casa, a escola. Cada ligação entre dois vértices é uma aresta: uma rua. O número na aresta é o peso: os minutos daquela rua. E o grau de um vértice é quantas arestas saem dele: quantas ruas chegam naquela esquina.",
  F4 = "Um caminho é uma sequência de vértices ligados por arestas, como casa, padaria, escola. E o tamanho do caminho é a soma dos pesos das arestas.",
  F5 = "Veja o bairro da Júlia. A rua direta, da casa até a escola, leva nove minutos. Passando pela praça: quatro mais quatro, oito minutos. E passando pela padaria: três mais dois, só cinco minutos!",
  F6 = "Então, o caminho mais curto é o de menor soma dos pesos. E repare: nem sempre é o que tem menos paradas! A rua direta tem uma aresta só, mas soma nove.",
  F7 = "O aplicativo de mapa faz essas contas com milhões de ruas, em segundos. No dia seguinte, a Júlia foi pela padaria e chegou junto com o Rafa. Missão cumprida!",
  F8 = "Onde eu uso isso? No aplicativo de mapa e no de entrega, que calculam o caminho mais curto. Nas redes sociais, cada pessoa é um vértice e cada amizade é uma aresta: os amigos em comum vêm daí. E na internet, os pacotes seguem o melhor caminho entre os roteadores.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
const BN = { Casa: [260, 330, "🏠"], Padaria: [640, 160, "🥖"], Praça: [640, 480, "🌳"], Escola: [1020, 330, "🏫"] };
const BA = [["Casa", "Padaria", 3], ["Padaria", "Escola", 2], ["Casa", "Praça", 4], ["Praça", "Escola", 4], ["Casa", "Escola", 9]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); g.save(); g.translate(560, 70); g.scale(.55, .55); grafo(BN, BA, seg(t, .2, .8), t > 1 ? ["Casa", "Padaria", "Escola"] : [], t > 1 ? [0, 1] : []); g.restore();
     abertura(t, "9º ANO · MISSÃO 1", "Grafos", "O MELHOR", "CAMINHO!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "direta"), "pop"], [em(F1, "antes"), "alerta"], [em(F1, "conseguiu"), "misterio"], [em(F1, "mapa"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const d = em(F1, "direta"), a = em(F1, "antes"), m = em(F1, "mapa");
     emo("🏠", 300, 300, 80); emo("🏫", 980, 300, 80); if (t > d) { g.strokeStyle = "#94a3b8"; g.lineWidth = 10; g.beginPath(); g.moveTo(360, 280); g.lineTo(920, 280); g.stroke(); rotulo("rua direta", 640, 260, "#cbd5e1", 1); }
     if (t > a) { rafa({ x: 1100, y: 470, s: .6, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); rotulo("Rafa já chegou!", 1100, 530, "#fde68a", 1); }
     if (t > m) { celular(640, 460, .9); }
     julia({ x: 150, y: 620, s: .8, braco: t > a ? -2.6 : -.6, bracoE: t > a ? 2.6 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) }); } },
 { chip: "A CIDADE VIRA GRAFO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "grafo"), "ding"], [em(F2, "pontos"), "pop"], [em(F2, "linhas"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const gr = em(F2, "grafo"), p = em(F2, "pontos"), l = em(F2, "linhas");
     if (t > gr) comando("🕸️ GRAFO = PONTOS LIGADOS POR LINHAS", 640, 90, seg(t, gr, gr + .4), "#16a34a", 580);
     if (t > p) grafo(BN, t > l ? BA.map(a => [a[0], a[1]]) : [], seg(t, p, p + .5)); } },
 { chip: "AS PARTES DO GRAFO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "vértice"), "ding"], [em(F3, "aresta"), "ding"], [em(F3, "peso"), "ding"], [em(F3, "grau"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const v = em(F3, "vértice"), a = em(F3, "aresta"), p = em(F3, "peso"), gr = em(F3, "grau");
     g.save(); g.translate(-120, 40); g.scale(.85, .85); grafo(BN, t > p ? BA : BA.map(x => [x[0], x[1]]), 1, t > v && t < a ? ["Casa"] : t > gr ? ["Casa"] : [], t > a && t < p ? [0] : t > gr ? [0, 2, 4] : []); g.restore();
     [["⚪ VÉRTICE", "um ponto: esquina, casa, escola", v, "#2563eb"], ["➖ ARESTA", "uma ligação: a rua", a, "#64748b"], ["🔢 PESO", "o número: minutos da rua", p, "#ca8a04"], ["🔗 GRAU", "quantas arestas saem: Casa = 3", gr, "#7c3aed"]].forEach(([n, d, t0, c], i) => { if (t > t0) { comando(n, 1050, 130 + i * 110, seg(t, t0, t0 + .4), c, 260); rotulo(d, 1050, 180 + i * 110, "#e2e8f0", seg(t, t0 + .2, t0 + .6)); } }); } },
 { chip: "CAMINHO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "casa"), "pop"], [em(F4, "padaria"), "pop"], [em(F4, "escola"), "pop"], [em(F4, "soma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const c = em(F4, "casa"), pd = em(F4, "padaria"), e = em(F4, "escola"), s = em(F4, "soma");
     const hn = [t > c ? "Casa" : "", t > pd ? "Padaria" : "", t > e ? "Escola" : ""]; grafo(BN, BA, 1, hn, [t > pd ? 0 : -1, t > e ? 1 : -1]);
     if (t > s) comando("TAMANHO = 3 + 2 = 5", 640, 80, seg(t, s, s + .4), "#ca8a04", 340); } },
 { chip: "QUAL É O MAIS CURTO?", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "nove"), "pop"], [em(F5, "oito"), "pop"], [em(F5, "cinco"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const n = em(F5, "nove"), o = em(F5, "oito"), ci = em(F5, "cinco"); const hl = t > ci ? [0, 1] : t > o ? [2, 3] : t > n ? [4] : [];
     g.save(); g.translate(-140, 30); g.scale(.85, .85); grafo(BN, BA, 1, [], hl); g.restore();
     const lin = []; if (t > n) lin.push(["🏠 → 🏫 direto", "9"]); if (t > o) lin.push(["🏠 → 🌳 → 🏫", "4 + 4 = 8"]); if (t > ci) lin.push(["🏠 → 🥖 → 🏫", "3 + 2 = 5 ✅"]);
     tabela(1040, 150, 380, ["CAMINHO", "SOMA"], lin, ["#334155", "#ca8a04"], 1, t > ci ? 1 : -1, 56); } },
 { chip: "A REGRA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "menor"), "ding"], [em(F6, "paradas"), "alerta"], [em(F6, "nove"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const m = em(F6, "menor"), p = em(F6, "paradas");
     cartao("✅ Mais curto = MENOR SOMA DOS PESOS", 640, 180, 680, "#16a34a", seg(t, m, m + .4)); cartao("⚠️ Nem sempre é o de menos paradas!", 640, 310, 680, "#ea580c", seg(t, p, p + .4));
     if (t > p) rotulo("a rua direta: 1 aresta só, mas soma 9", 640, 390, "#fde68a", seg(t, p + .5, p + .9)); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "milhões"), "pop"], [em(F7, "padaria"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const mi = em(F7, "milhões"), pd = em(F7, "padaria"), m = em(F7, "Missão");
     if (t < pd) { for (let i = 0; i < 60; i++) { g.fillStyle = "#93c5fd"; g.beginPath(); g.arc(200 + (i * 137) % 880, 120 + (i * 89) % 380, 6, 0, 7); g.fill(); } if (t > mi) rotulo("MILHÕES DE RUAS, EM SEGUNDOS", 640, 540, "#bae6fd", seg(t, mi, mi + .4)); }
     else { g.save(); g.translate(60, 0); g.scale(.85, .85); grafo(BN, BA, 1, ["Casa", "Padaria", "Escola"], [0, 1]); g.restore(); julia({ x: 950, y: 620, s: .7, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); rafa({ x: 1100, y: 620, s: .7, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t + .4) }); }
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mapa"), "pop"], [em(F8, "redes"), "pop"], [em(F8, "internet"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mapa", "🗺️", "Mapa e entrega:", "o caminho mais curto"], ["redes", "👥", "Redes sociais:", "pessoas e amizades"], ["internet", "🌐", "Internet:", "roteadores e cabos"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 1", [RAFA, JULIA]); } }
];

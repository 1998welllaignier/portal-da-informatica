/* ================= 9º ano · 2027 · 1º bimestre · Missão 8 · Extra: O mapa da escola em grafo ================= */
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

const F0 = "O mapa da escola em grafo!",
  F1 = "Chegou uma visita na escola, e a diretora pediu ajuda para a turma do nono ano: qual é o caminho mais rápido do portão até a sala de informática? E se um corredor estiver em reforma?",
  F2 = "Vamos transformar a escola num grafo! Cada lugar vira um vértice. Cada corredor vira uma aresta. E o peso é o tempo de caminhada, em minutos.",
  F3 = "Portão até o pátio: um minuto. Pátio até a cantina: um. Pátio até a sala de informática: dois. Pátio até a biblioteca: dois. E informática até a biblioteca: um minuto.",
  F4 = "Primeira pergunta: qual lugar é o mais conectado? É o vértice de maior grau: o pátio, com grau quatro. Ali passa mais gente!",
  F5 = "Segunda pergunta: qual o caminho mais curto do portão até a informática? Portão, pátio, informática: um mais dois, três minutos.",
  F6 = "E se o corredor do pátio até a informática estiver em reforma? A aresta some, e a gente procura de novo: portão, pátio, biblioteca, informática. Um mais dois mais um: quatro minutos. Quando uma aresta some, o caminho mais curto muda!",
  F7 = "O grafo da escola serve para muita coisa: planejar a rota de fuga, que é o caminho mais curto até a saída; decidir onde colocar o bebedouro, no vértice de maior grau; e orientar os visitantes.",
  F8 = "A turma entregou o mapa em grafo para a diretora, e a visita chegou à sala de informática em três minutos. Missão cumprida!",
  F9 = "Onde eu uso isso? Nos mapas de emergência dos prédios, com a rota de fuga até a saída. Nos shoppings e aeroportos, com o caminho até cada loja ou portão. E no aplicativo de mapa, que recalcula a rota quando uma rua é interditada.",
  F10 = "Agora é com vocês: abram a Missão 8 no portal!";
const SN = { Portão: [200, 330, "🚪"], Pátio: [520, 330, "🏫"], Cantina: [520, 130, "🍽️"], Informática: [900, 200, "💻"], Biblioteca: [900, 470, "📚"] };
const SA = [["Portão", "Pátio", 1], ["Pátio", "Cantina", 1], ["Pátio", "Informática", 2], ["Pátio", "Biblioteca", 2], ["Informática", "Biblioteca", 1]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); g.save(); g.translate(600, 100); g.scale(.42, .42); grafo(SN, SA, seg(t, .2, .8), t > 1 ? ["Pátio"] : []); g.restore();
     abertura(t, "9º ANO · MISSÃO 8 · EXTRA", "O mapa da escola", "A ESCOLA", "VIRA GRAFO!", 1.6); } },
 { chip: "O PEDIDO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "visita"), "pop"], [em(F1, "rápido"), "pop"], [em(F1, "reforma"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const v = em(F1, "visita"), r = em(F1, "rápido"), rf = em(F1, "reforma");
     escola(640, 360, 1.1); if (t > v) pessoa(300, 470, 1.2, "#f59e0b");
     if (t > r) balao("Do portão até a informática?", 820, 140, seg(t, r, r + .4)); if (t > rf) { emo("🚧", 1080, 420, 60); rotulo("corredor em reforma?", 1080, 480, "#fde68a", 1); } } },
 { chip: "A ESCOLA VIRA GRAFO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "vértice"), "ding"], [em(F2, "aresta"), "ding"], [em(F2, "peso"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const v = em(F2, "vértice"), a = em(F2, "aresta"), p = em(F2, "peso");
     grafo(SN, t > p ? SA : t > a ? SA.map(x => [x[0], x[1]]) : [], seg(t, v, v + .5));
     [["⚪ LUGAR = VÉRTICE", v, "#2563eb"], ["➖ CORREDOR = ARESTA", a, "#64748b"], ["⏱️ MINUTOS = PESO", p, "#ca8a04"]].forEach(([s, t0, c], i) => { if (t > t0) comando(s, 1100, 160 + i * 90, seg(t, t0, t0 + .4), c, 320); }); } },
 { chip: "OS PESOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Portão"), "pop"], [em(F3, "cantina"), "pop"], [em(F3, "informática"), "pop"], [em(F3, "biblioteca"), "pop"], [em(F3, "informática", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "Portão"), em(F3, "cantina"), em(F3, "informática"), em(F3, "biblioteca"), em(F3, "informática", 1)];
     const n = ts.filter(x => t > x).length; grafo(SN, SA.slice(0, n), 1, [], n ? [n - 1] : []); } },
 { chip: "O MAIS CONECTADO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "grau"), "ding"], [em(F4, "quatro"), "ding"], [em(F4, "gente"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const g4 = em(F4, "grau"), q = em(F4, "quatro"); grafo(SN, SA, 1, t > g4 ? ["Pátio"] : [], t > q ? [0, 1, 2, 3] : []);
     if (t > q) comando("🏆 PÁTIO: GRAU 4", 1110, 330, seg(t, q, q + .4), "#7c3aed", 260); } },
 { chip: "O CAMINHO MAIS CURTO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Portão"), "pop"], [em(F5, "pátio"), "pop"], [em(F5, "informática", 1), "pop"], [em(F5, "três"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const p = em(F5, "Portão"), pa = em(F5, "pátio"), i = em(F5, "informática", 1), tr = em(F5, "três");
     grafo(SN, SA, 1, [t > p ? "Portão" : "", t > pa ? "Pátio" : "", t > i ? "Informática" : ""], [t > pa ? 0 : -1, t > i ? 2 : -1]);
     if (t > tr) comando("1 + 2 = 3 MINUTOS", 1110, 330, seg(t, tr, tr + .4), "#ca8a04", 270); } },
 { chip: "E A REFORMA?", fala: F6, sfx: [[.1, "alerta"], [em(F6, "some"), "whoosh"], [em(F6, "biblioteca"), "pop"], [em(F6, "quatro"), "ding"], [em(F6, "muda"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const s = em(F6, "some"), b = em(F6, "biblioteca"), q = em(F6, "quatro"), mu = em(F6, "muda");
     const A = t > s ? SA.filter((_, i) => i !== 2) : SA; const hl = t > b ? [0, 2, 3] : []; grafo(SN, A, 1, t > b ? ["Portão", "Pátio", "Biblioteca", "Informática"] : [], hl);
     if (t < s + .6) emo("🚧", 710, 280, 50); if (t > q) comando("1 + 2 + 1 = 4 MINUTOS", 1110, 330, seg(t, q, q + .4), "#ca8a04", 300); if (t > mu) rotulo("SUMIU UMA ARESTA? O CAMINHO MUDA!", 640, 590 - 30, "#fde68a", seg(t, mu, mu + .4)); } },
 { chip: "PARA QUE SERVE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "fuga"), "pop"], [em(F7, "bebedouro"), "pop"], [em(F7, "visitantes"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); [["fuga", "🏃 Rota de fuga: o caminho mais curto até a saída", "#dc2626"], ["bebedouro", "🚰 Bebedouro: no vértice de maior grau", "#0e7490"], ["visitantes", "🧭 Orientar os visitantes", "#7c3aed"]].forEach(([w, s, c], i) => { const t0 = em(F7, w); cartao(s, 640, 170 + i * 120, 940, c, seg(t, t0, t0 + .4)); }); } },
 { chip: "A SOLUÇÃO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mapa"), "pop"], [em(F8, "três"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F8, "três"), m = em(F8, "Missão"); g.save(); g.translate(60, 0); g.scale(.85, .85); grafo(SN, SA, 1, ["Portão", "Pátio", "Informática"], [0, 2]); g.restore();
     julia({ x: 1050, y: 620, s: .75, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); rafa({ x: 1180, y: 620, s: .75, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t + .4) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "emergência"), "pop"], [em(F9, "shoppings"), "pop"], [em(F9, "aplicativo"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["emergência", "🚨", "Mapa de emergência:", "rota de fuga até a saída"], ["shoppings", "🛫", "Shopping e aeroporto:", "caminho até cada portão"], ["aplicativo", "🗺️", "Aplicativo de mapa:", "recalcula a rota"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 8", [RAFA, JULIA]); } }
];

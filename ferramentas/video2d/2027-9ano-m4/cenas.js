/* ================= 9º ano · 2027 · 1º bimestre · Missão 4 · Programar com grafos e árvores ================= */
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

const F0 = "Programar com grafos e árvores!",
  F1 = "O Rafa desenhou o grafo da escola no caderno: o pátio ligado ao portão, à cantina, à sala de informática e à biblioteca. Mas o computador não enxerga desenho! Como guardar esse grafo num programa?",
  F2 = "Representar é guardar uma coisa do mundo num formato que o computador entende. E um jeito muito usado para guardar um grafo é a lista de vizinhos, também chamada de lista de adjacência: para cada vértice, guardamos a lista dos vértices ligados a ele.",
  F3 = "O pátio tem como vizinhos: portão, cantina, informática e biblioteca. O portão tem só o pátio. E a informática tem o pátio e a biblioteca.",
  F4 = "E o grau do vértice é o tamanho da lista de vizinhos. A lista do pátio tem quatro itens: o pátio tem grau quatro.",
  F5 = "No editor, usamos uma ficha chamada vizinhos, com um campo para cada vértice. O valor de cada campo é uma lista. O bloco tamanho de calcula o grau. E o bloco para cada item percorre os vizinhos, um por um.",
  F6 = "E a árvore de decisão? Ela vira se, senão, dentro de se, senão. A pergunta da raiz é o primeiro se. Cada galho tem outro se dentro. E as folhas são os blocos mostrar.",
  F7 = "O Rafa guardou o grafo da escola em lista de vizinhos e transformou a árvore do objeto em blocos se, senão. Agora o computador entende os dois! Missão cumprida!",
  F8 = "Onde eu uso isso? A rede social guarda, para cada pessoa, a lista de amigos, e conta quantos você tem: o grau! O jogo guarda o mapa de salas como lista de vizinhos. E o atendimento automático do telefone é um programa de se dentro de se.",
  F9 = "Agora é com vocês: abram a Missão 4 no portal!";
const EN = { Pátio: [640, 330, "🏫"], Portão: [380, 180, "🚪"], Cantina: [900, 180, "🍽️"], Informática: [380, 480, "💻"], Biblioteca: [900, 480, "📚"] };
const EA = [["Pátio", "Portão"], ["Pátio", "Cantina"], ["Pátio", "Informática"], ["Pátio", "Biblioteca"], ["Informática", "Biblioteca"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); g.save(); g.translate(540, 60); g.scale(.5, .5); grafo(EN, EA, seg(t, .2, .8)); g.restore();
     abertura(t, "9º ANO · MISSÃO 4", "Programar com grafos", "E ÁRVORES", "NO COMPUTADOR!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "pátio"), "pop"], [em(F1, "enxerga"), "alerta"], [em(F1, "guardar"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const p = em(F1, "pátio"), e = em(F1, "enxerga"), gd = em(F1, "guardar");
     g.fillStyle = "#334155"; rr(220, 90, 560, 470, 14); g.fill(); g.save(); g.translate(150, 40); g.scale(.75, .75); grafo(EN, EA, seg(t, p, p + 1)); g.restore();
     if (t > e) { monitor(1020, 400, 1, (x, y, w, h) => { g.fillStyle = NAVY; g.font = `900 60px ${F}`; g.textAlign = "center"; g.fillText("?", x + w / 2, y + h / 2 + 20); }); }
     if (t > gd) rotulo("COMO GUARDAR NO PROGRAMA?", 1020, 460, "#fde68a", seg(t, gd, gd + .4));
     rafa({ x: 130, y: 640, s: .7, braco: -.6, bracoE: 2.2, olhar: 1, boca: t > e ? "o" : "", pisca: pisca(t) }); } },
 { chip: "LISTA DE VIZINHOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Representar"), "ding"], [em(F2, "vizinhos"), "ding"], [em(F2, "adjacência"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const r = em(F2, "Representar"), v = em(F2, "vizinhos"), a = em(F2, "adjacência");
     if (t > r) comando("💾 REPRESENTAR = GUARDAR NUM FORMATO QUE O COMPUTADOR ENTENDE", 640, 100, seg(t, r, r + .4), "#16a34a", 860);
     if (t > v) { comando("📋 LISTA DE VIZINHOS", 640, 230, seg(t, v, v + .4), "#2563eb", 360); if (t > a) rotulo("(ou lista de adjacência)", 640, 290, "#bfdbfe", seg(t, a, a + .4)); rotulo("para cada vértice: a lista de quem está ligado a ele", 640, 360, "#e2e8f0", seg(t, a + .8, a + 1.2)); } } },
 { chip: "VIZINHOS DA ESCOLA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "pátio"), "pop"], [em(F3, "portão", 1), "pop"], [em(F3, "informática", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const p = em(F3, "pátio"), po = em(F3, "portão", 1), i = em(F3, "informática", 1);
     const hl = t > i ? ["Informática"] : t > po ? ["Portão"] : t > p ? ["Pátio"] : []; const ha = t > i ? [2, 4] : t > po ? [0] : t > p ? [0, 1, 2, 3] : [];
     g.save(); g.translate(-90, 70); g.scale(.6, .6); grafo(EN, EA, 1, hl, ha); g.restore();
     const lin = []; if (t > p) lin.push(["Pátio", "Portão, Cantina, Informática, Biblioteca"]); if (t > po) lin.push(["Portão", "Pátio"]); if (t > i) lin.push(["Informática", "Pátio, Biblioteca"]);
     tabela(880, 150, 760, ["VÉRTICE", "VIZINHOS"], lin, ["#2563eb", "#16a34a"], 1, -1, 56); } },
 { chip: "GRAU", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "tamanho"), "ding"], [em(F4, "quatro"), "pop"], [em(F4, "quatro", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const tm = em(F4, "tamanho"), q = em(F4, "quatro", 1);
     comando("🔗 GRAU = TAMANHO DA LISTA DE VIZINHOS", 640, 100, seg(t, tm, tm + .4), "#7c3aed", 620);
     ["Portão", "Cantina", "Informática", "Biblioteca"].forEach((s, i) => { caixa(330 + i * 210, 260, s, "#fff", seg(t, tm + .3 + i * .2, tm + .6 + i * .2), 190); if (t > tm + 1 + i * .3) rotulo(String(i + 1), 330 + i * 210, 320, "#fde68a", 1); });
     if (t > q) palavra("GRAU DO PÁTIO = 4", 640, 440, seg(t, q, q + .4), 46); } },
 { chip: "NO EDITOR DE BLOCOS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "ficha"), "click"], [em(F5, "lista"), "pop"], [em(F5, "tamanho"), "click"], [em(F5, "para"), "click"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const f = em(F5, "ficha"), tm = em(F5, "tamanho"), pc = em(F5, "para");
     bloco(70, 120, 1060, "🗂️ na ficha vizinhos, o campo Pátio vale (lista: Portão, Cantina, Informática, Biblioteca)", "#ca8a04", seg(t, f, f + .4), t > f && t < tm);
     bloco(70, 220, 620, "📏 tamanho de (campo Pátio da ficha vizinhos)", "#0d9488", seg(t, tm, tm + .4), t > tm && t < pc); if (t > tm + .6) { seta(700, 248, 790, 248, 1, "#fde68a"); comando("GRAU = 4", 880, 248, 1, "#0d9488", 160); }
     if (t > pc) { bocaC(70, 320, 760, 120, "🔁 para cada item v em (campo Pátio da ficha vizinhos)", "#f59e0b", seg(t, pc, pc + .4), true); bloco(110, 380, 260, "💬 mostrar v", "#7c3aed", seg(t, pc + .3, pc + .6)); const it = Math.floor((t - pc) * 1.5) % 4; telinha(1020, 300, 260, "▶️ NA TELA", ["Portão", "Cantina", "Informática", "Biblioteca"].slice(0, it + 1), 1); } } },
 { chip: "ÁRVORE VIRA SE…SENÃO", fala: F6, legenda: "E a árvore de decisão? Ela vira “se… senão” dentro de “se… senão”. A pergunta da raiz é o primeiro se. Cada galho tem outro se dentro. E as folhas são os blocos mostrar.",
   sfx: [[.1, "whoosh"], [em(F6, "raiz"), "pop"], [em(F6, "galho"), "pop"], [em(F6, "folhas"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const r = em(F6, "raiz"), gl = em(F6, "galho"), fo = em(F6, "folhas");
     bocaC(80, 90, 1100, 470, "⚖️ se eletrônico = verdadeiro, então", "#2563eb", seg(t, r, r + .4), t > r && t < gl);
     if (t > gl) { bocaC(120, 152, 760, 150, "⚖️ se tela = verdadeiro, então", "#7c3aed", seg(t, gl, gl + .4), t < fo); rotulo("senão", 140, 340, "#bfdbfe", 1); bocaC(120, 352, 760, 150, "⚖️ se escreve = verdadeiro, então", "#7c3aed", seg(t, gl + .4, gl + .8), t < fo); }
     if (t > fo) { bloco(160, 210, 300, "💬 mostrar Monitor", "#16a34a", 1, true); bloco(500, 210, 300, "💬 senão: Teclado", "#16a34a", 1, true); bloco(160, 410, 300, "💬 mostrar Lápis", "#16a34a", 1, true); bloco(500, 410, 300, "💬 senão: Cadeira", "#16a34a", 1, true); rotulo("🍃 FOLHAS = MOSTRAR", 1030, 330, "#bbf7d0", seg(t, fo, fo + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "vizinhos"), "pop"], [em(F7, "blocos"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const v = em(F7, "vizinhos"), b = em(F7, "blocos"), m = em(F7, "Missão");
     cartao("🕸️ Grafo → 📋 lista de vizinhos", 640, 200, 600, "#2563eb", seg(t, v, v + .4)); cartao("🌳 Árvore → ⚖️ se… senão", 640, 320, 600, "#7c3aed", seg(t, b, b + .4));
     rafa({ x: 150, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "rede"), "pop"], [em(F8, "jogo"), "pop"], [em(F8, "atendimento"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["rede", "👥", "Rede social:", "lista de amigos e o grau"], ["jogo", "🗝️", "Jogo:", "mapa de salas vizinhas"], ["atendimento", "☎️", "Atendimento:", "se dentro de se"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 4", [RAFA, JULIA]); } }
];

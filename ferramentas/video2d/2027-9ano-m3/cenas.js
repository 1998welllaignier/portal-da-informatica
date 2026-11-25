/* ================= 9º ano · 2027 · 1º bimestre · Missão 3 · Árvores de decisão ================= */
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

const F0 = "Árvores de decisão: sim ou não?",
  F1 = "Na hora do intervalo, a Júlia desafiou a turma: pensei num objeto da sala de informática! Vocês só podem fazer perguntas de sim ou não. O Rafa começou chutando: é o mouse? Não. É a impressora? Não. Assim ia demorar o recreio inteiro!",
  F2 = "O jeito esperto é usar uma árvore de decisão. Cada vértice é uma pergunta. Cada galho é uma resposta: sim ou não. E cada folha é uma decisão final.",
  F3 = "Veja: a primeira pergunta, a raiz, é: é eletrônico? Se sim: tem tela? Sim, é o monitor. Não, é o teclado. Se não é eletrônico: serve para escrever? Sim, é o lápis. Não, é a cadeira.",
  F4 = "Para usar, comece na raiz, responda, e siga o galho da resposta até chegar a uma folha.",
  F5 = "Agora, as contas da árvore. Quantas decisões ela tem? Quatro: as quatro folhas. Quantas perguntas, no máximo, até decidir? Duas: essa é a profundidade. E cada pergunta de sim ou não a mais dobra as folhas: uma pergunta, duas folhas. Duas, quatro. Três, oito.",
  F6 = "Mas atenção: uma boa árvore tem perguntas com resposta clara, que dividem as possibilidades. Ele é legal? é uma pergunta ruim: cada pessoa responde de um jeito!",
  F7 = "O Rafa montou a árvore e acertou o objeto da Júlia em só duas perguntas: era o teclado! Missão cumprida!",
  F8 = "Onde eu uso isso? No atendimento automático do telefone: digite um para isso, dois para aquilo. Na triagem do posto de saúde: cada resposta leva a uma cor de prioridade. E nos filtros das lojas online: preço, tamanho e cor.",
  F9 = "Agora é com vocês: abram a Missão 3 no portal!";
const DN = { "É eletrônico?": [640, 120], "Tem tela?": [380, 270], "Serve para escrever?": [900, 270], "Monitor": [250, 430, "🖥️"], "Teclado": [510, 430, "⌨️"], "Lápis": [770, 430, "✏️"], "Cadeira": [1030, 430, "🪑"] };
function decisao(t, k, hl, mostrar) { if (k <= 0) return; const L = [["É eletrônico?", "Tem tela?", "sim"], ["É eletrônico?", "Serve para escrever?", "não"], ["Tem tela?", "Monitor", "sim"], ["Tem tela?", "Teclado", "não"], ["Serve para escrever?", "Lápis", "sim"], ["Serve para escrever?", "Cadeira", "não"]];
  L.forEach(([a, b, r], i) => { if (!(mostrar || [0, 1, 2, 3, 4, 5]).includes(i)) return; const [x1, y1] = DN[a], [x2, y2] = DN[b], on = (hl || []).includes(i); g.strokeStyle = on ? "#facc15" : "#94a3b8"; g.lineWidth = on ? 8 : 4; g.beginPath(); g.moveTo(x1, y1 + 26); g.lineTo(x2, y2 - 26); g.stroke(); rotulo(r, (x1 + x2) / 2 + (x2 < x1 ? -22 : 22), (y1 + y2) / 2 + 6, r === "sim" ? "#86efac" : "#fca5a5", 1); });
  const vis = new Set(["É eletrônico?"]); L.forEach(([a, b], i) => { if ((mostrar || [0, 1, 2, 3, 4, 5]).includes(i)) vis.add(b); });
  Object.entries(DN).forEach(([n, [x, y, e]]) => { if (!vis.has(n)) return; const folha = !!e; const on = (hl || []).some(i => [["Tem tela?"], ["Serve para escrever?"], ["Monitor"], ["Teclado"], ["Lápis"], ["Cadeira"]][i][0] === n) || (n === "É eletrônico?" && (hl || []).length);
    g.fillStyle = on ? "#facc15" : folha ? "#16a34a" : "#2563eb"; g.font = `800 20px ${F}`; const w = Math.max(130, g.measureText(n).width + 40); rr(x - w / 2, y - 26, w, 52, 26); g.fill(); g.fillStyle = on ? NAVY : "#fff"; g.textAlign = "center"; g.fillText((folha ? e + " " : "") + n, x, y + 7); }); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); g.save(); g.translate(470, 95); g.scale(.55, .55); decisao(t, seg(t, .2, .7), t > 1 ? [0, 3] : []); g.restore();
     abertura(t, "9º ANO · MISSÃO 3", "Árvores de decisão", "SIM", "OU NÃO?", 1.6); } },
 { chip: "O DESAFIO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "objeto"), "pop"], [em(F1, "mouse"), "alerta"], [em(F1, "impressora"), "alerta"], [em(F1, "recreio"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const o = em(F1, "objeto"), mo = em(F1, "mouse"), im = em(F1, "impressora"), re = em(F1, "recreio");
     if (t > o) balao("Pensei num objeto da sala!", 950, 150, seg(t, o, o + .4));
     if (t > mo) { balao("É o mouse?", 380, 230, 1); if (t > mo + .8) xVermelho(470, 220, 22, 1); } if (t > im) { balao("É a impressora?", 400, 330, 1); if (t > im + .8) xVermelho(520, 320, 22, 1); }
     if (t > re) palavra("ASSIM DEMORA DEMAIS!", 640, 480, seg(t, re, re + .4), 40);
     rafa({ x: 150, y: 620, s: .8, braco: -.6, bracoE: 2.2, olhar: 1, boca: t > re ? "o" : "", pisca: pisca(t) }); julia({ x: 1130, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t + .5) }); } },
 { chip: "ÁRVORE DE DECISÃO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "decisão"), "ding"], [em(F2, "pergunta"), "pop"], [em(F2, "galho"), "pop"], [em(F2, "folha"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F2, "decisão"), p = em(F2, "pergunta"), gl = em(F2, "galho"), f = em(F2, "folha");
     if (t > d) comando("🌳 ÁRVORE DE DECISÃO", 640, 90, seg(t, d, d + .4), "#16a34a", 380);
     [["❓ VÉRTICE = PERGUNTA", p, "#2563eb"], ["↘️ GALHO = RESPOSTA: SIM OU NÃO", gl, "#7c3aed"], ["🍃 FOLHA = DECISÃO FINAL", f, "#16a34a"]].forEach(([s, t0, c], i) => cartao(s, 640, 210 + i * 110, 640, c, seg(t, t0, t0 + .4))); } },
 { chip: "ADIVINHE O OBJETO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "eletrônico"), "pop"], [em(F3, "tela"), "pop"], [em(F3, "monitor"), "ding"], [em(F3, "teclado"), "ding"], [em(F3, "escrever"), "pop"], [em(F3, "lápis"), "ding"], [em(F3, "cadeira"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "tela"), em(F3, "escrever"), em(F3, "monitor"), em(F3, "teclado"), em(F3, "lápis"), em(F3, "cadeira")];
     const order = [0, 2, 3, 1, 4, 5]; const most = order.filter(i => t > ts[i] - .3); if (t > em(F3, "eletrônico") - .3) decisao(t, 1, [], most); } },
 { chip: "COMO USAR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "raiz"), "pop"], [em(F4, "responda"), "pop"], [em(F4, "folha"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const r = em(F4, "raiz"), s = em(F4, "siga"), f = em(F4, "folha"); decisao(t, 1, t > f ? [0, 3] : t > s ? [0] : []);
     if (t > r) comando("1 · comece na RAIZ  →  2 · responda  →  3 · siga o galho  →  4 · FOLHA", 640, 560, seg(t, r, r + .4), "#ca8a04", 900); } },
 { chip: "AS CONTAS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Quatro"), "ding"], [em(F5, "Duas"), "ding"], [em(F5, "dobra"), "ding"], [em(F5, "oito"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const q = em(F5, "Quatro"), d = em(F5, "Duas"), db = em(F5, "dobra");
     if (t < db) { g.save(); g.translate(160, 60); g.scale(.75, .75); decisao(t, 1, []); g.restore(); if (t > q) comando("🍃 4 DECISÕES (FOLHAS)", 640, 470, seg(t, q, q + .4), "#16a34a", 380); if (t > d) comando("📏 NO MÁXIMO 2 PERGUNTAS (PROFUNDIDADE)", 640, 540, seg(t, d, d + .4), "#2563eb", 560); }
     else { palavra("CADA PERGUNTA A MAIS DOBRA AS FOLHAS", 640, 110, seg(t, db, db + .4), 38); tabela(640, 180, 600, ["PERGUNTAS", "FOLHAS"], [["1", "2"], ["2", "4"], ["3", "8"]].slice(0, 1 + Math.floor((t - db) / .9)), ["#7c3aed", "#16a34a"], 1, -1, 60); } } },
 { chip: "BOA PERGUNTA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "clara"), "ding"], [em(F6, "legal"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const c = em(F6, "clara"), l = em(F6, "legal");
     cartao("✅ É eletrônico?  (resposta clara)", 640, 200, 620, "#16a34a", seg(t, c, c + .4)); cartao("❌ Ele é legal?  (cada um responde de um jeito)", 640, 330, 860, "#dc2626", seg(t, l, l + .4)); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "árvore"), "pop"], [em(F7, "duas"), "ding"], [em(F7, "teclado"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const du = em(F7, "duas"), tc = em(F7, "teclado"), m = em(F7, "Missão"); decisao(t, 1, t > tc ? [0, 3] : t > du ? [0] : []);
     rafa({ x: 140, y: 650, s: .7, braco: t > tc ? -2.4 : -.6, bracoE: t > tc ? 2.4 : .3, olhar: 1, boca: t > tc ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "telefone"), "pop"], [em(F8, "triagem"), "pop"], [em(F8, "filtros"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["telefone", "☎️", "Atendimento automático:", "digite 1, digite 2…"], ["triagem", "🏥", "Triagem do posto:", "cada resposta, uma cor"], ["filtros", "🛍️", "Filtros das lojas:", "preço, tamanho, cor"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 3", [RAFA, JULIA]); } }
];

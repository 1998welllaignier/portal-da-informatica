/* ================= 9º ano · 2027 · 1º bimestre · Missão 5 · Autômatos: máquinas de estados ================= */
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

const F0 = "Autômatos: as máquinas de estados!",
  F1 = "Na volta da escola, a Júlia empurrou a catraca do ônibus e ela não girou. Passou o cartão, a luz ficou verde, e aí sim ela passou. Depois, a catraca travou de novo. Como a catraca sabe o que fazer?",
  F2 = "A catraca está sempre num estado: travada ou liberada. E muda de um para o outro conforme o que acontece: alguém passa o cartão, ou alguém empurra. Uma máquina assim é um autômato, também chamado de máquina de estados.",
  F3 = "As mudanças ficam numa tabela de transição: para cada estado e cada entrada, ela diz o próximo estado. Travada, com cartão: fica liberada. Travada, empurrando: continua travada. Liberada, empurrando: gira, a pessoa passa, e volta a ficar travada. Liberada, com cartão: continua liberada.",
  F4 = "Cada mudança de estado é uma transição. E o estado em que a máquina começa é o estado inicial: a catraca começa travada.",
  F5 = "Vamos seguir as entradas da Júlia: empurrar, cartão, empurrar. Começa travada. Empurrar: continua travada. Cartão: liberada! Empurrar: gira e trava de novo.",
  F6 = "Os autômatos estão em todo lugar: no semáforo, que vai do verde para o amarelo e para o vermelho. Na máquina de refrigerante. No elevador. Na porta automática. E no videogame: o personagem parado, correndo ou pulando.",
  F7 = "A Júlia desenhou o autômato da catraca e agora sabe explicar por que ela travou. Missão cumprida!",
  F8 = "Onde eu uso isso? Na catraca do ônibus e da escola, no semáforo e no elevador. No videogame, onde o personagem muda de estado com os botões. E na máquina de refrigerante, que espera o dinheiro, libera a escolha e entrega a lata.",
  F9 = "Agora é com vocês: abram a Missão 5 no portal!";
function estado(x, y, txt, cor, ativo, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (ativo) { g.shadowColor = "#facc15"; g.shadowBlur = 30; } g.fillStyle = cor; g.beginPath(); g.arc(0, 0, 90, 0, 7); g.fill(); g.shadowBlur = 0;
  g.strokeStyle = ativo ? "#facc15" : "#fff"; g.lineWidth = ativo ? 8 : 4; g.stroke(); g.restore(); emo(txt[0], x, y - 5, 50 * z); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt[1], x, y + 45); }
function automato(t, at, k, lb) { k = k == null ? 1 : k; estado(400, 320, ["🔒", "Travada"], "#dc2626", at === 0, k); estado(880, 320, ["🔓", "Liberada"], "#16a34a", at === 1, k);
  if (lb !== false) { setaCurva(470, 250, 810, 250, "#fde68a"); rotulo("💳 cartão", 640, 190, "#fde68a", k); setaCurva(810, 390, 470, 390, "#fde68a"); rotulo("🚶 empurrar (gira)", 640, 470, "#fde68a", k);
    rotulo("🚶 empurrar: continua", 400, 180, "#fecaca", k); rotulo("💳 cartão: continua", 880, 180, "#bbf7d0", k); } }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); g.save(); g.translate(470, 40); g.scale(.55, .55); automato(t, Math.floor(t * 1.2) % 2, seg(t, .2, .7), false); g.restore();
     abertura(t, "9º ANO · MISSÃO 5", "Autômatos", "AS MÁQUINAS", "DE ESTADOS!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "girou"), "alerta"], [em(F1, "cartão"), "click"], [em(F1, "verde"), "ding"], [em(F1, "travou"), "pop"], [em(F1, "sabe"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const gi = em(F1, "girou"), c = em(F1, "cartão"), v = em(F1, "verde"), tr = em(F1, "travou"), s = em(F1, "sabe");
     const lib = t > v && t < tr; g.fillStyle = "#94a3b8"; rr(560, 220, 40, 260, 10); g.fill(); g.save(); g.translate(600, 300); g.rotate(lib ? (t - v) * 1.5 : 0); g.fillStyle = "#cbd5e1"; rr(0, -10, 200, 20, 10); g.fill(); g.restore();
     g.fillStyle = lib ? "#22c55e" : "#ef4444"; g.beginPath(); g.arc(580, 200, 18, 0, 7); g.fill(); if (t > gi && t < c) xVermelho(700, 260, 24, 1); if (t > c && t < v + .5) emo("💳", 520, 260, 40);
     if (t > s) palavra("COMO A CATRACA SABE?", 640, 540, seg(t, s, s + .4), 40);
     julia({ x: 330, y: 600, s: .8, braco: -1.2, bracoE: .3, olhar: 1, boca: t > gi && t < c ? "o" : "", pisca: pisca(t) }); } },
 { chip: "ESTADOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "travada"), "pop"], [em(F2, "liberada"), "pop"], [em(F2, "autômato"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tv = em(F2, "travada"), lb = em(F2, "liberada"), au = em(F2, "autômato");
     estado(400, 300, ["🔒", "Travada"], "#dc2626", false, seg(t, tv, tv + .4)); estado(880, 300, ["🔓", "Liberada"], "#16a34a", false, seg(t, lb, lb + .4));
     if (t > au) { comando("⚙️ AUTÔMATO = MÁQUINA DE ESTADOS", 640, 100, seg(t, au, au + .4), "#16a34a", 520); rotulo("sempre num estado; muda conforme as entradas", 640, 480, "#bbf7d0", seg(t, au + .4, au + .8)); } } },
 { chip: "TABELA DE TRANSIÇÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "tabela"), "ding"], [em(F3, "liberada"), "pop"], [em(F3, "continua"), "pop"], [em(F3, "gira"), "pop"], [em(F3, "continua", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "Travada"), em(F3, "Travada", 1), em(F3, "Liberada", 1), em(F3, "Liberada", 2)];
     const L = [["🔒 Travada", "💳 cartão", "🔓 Liberada"], ["🔒 Travada", "🚶 empurrar", "🔒 Travada"], ["🔓 Liberada", "🚶 empurrar", "🔒 Travada (gira)"], ["🔓 Liberada", "💳 cartão", "🔓 Liberada"]].filter((_, i) => t > ts[i] - .3);
     tabela(640, 120, 900, ["ESTADO ATUAL", "ENTRADA", "PRÓXIMO ESTADO"], L, ["#334155", "#ca8a04", "#16a34a"], seg(t, 0, .5), 2, 64); } },
 { chip: "TRANSIÇÃO E ESTADO INICIAL", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "transição"), "ding"], [em(F4, "inicial"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const tr = em(F4, "transição"), i = em(F4, "inicial"); automato(t, t > i ? 0 : -1, 1);
     if (t > tr && t < i) rotulo("➡️ CADA SETA = UMA TRANSIÇÃO", 640, 560, "#fde68a", 1); if (t > i) { comando("▶️ INICIAL", 190, 320, seg(t, i, i + .4), "#7c3aed", 170); } } },
 { chip: "SEGUINDO AS ENTRADAS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Começa"), "pop"], [em(F5, "Empurrar"), "pop"], [em(F5, "Cartão"), "ding"], [em(F5, "Empurrar", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const c = em(F5, "Começa"), e1 = em(F5, "Empurrar"), ca = em(F5, "Cartão"), e2 = em(F5, "Empurrar", 1);
     const at = t > e2 + .4 ? 0 : t > ca + .4 ? 1 : 0; automato(t, t > c ? at : -1, 1);
     ["🚶 empurrar", "💳 cartão", "🚶 empurrar"].forEach((s, i) => { const t0 = [e1, ca, e2][i]; caixa(440 + i * 200, 580 - 40, s, t > t0 ? "#fde68a" : "#fff", 1, 180); }); } },
 { chip: "AUTÔMATOS POR TODO LADO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "semáforo"), "pop"], [em(F6, "refrigerante"), "pop"], [em(F6, "elevador"), "pop"], [em(F6, "porta"), "pop"], [em(F6, "videogame"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); [["semáforo", "🚦", "Semáforo"], ["refrigerante", "🥤", "Máquina de refri"], ["elevador", "🛗", "Elevador"], ["porta", "🚪", "Porta automática"], ["videogame", "🎮", "Videogame"]].forEach(([w, e, n], i) => {
       const t0 = em(F6, w); if (t <= t0) return; const x = 200 + i * 220; g.globalAlpha = cl(seg(t, t0, t0 + .4)); g.fillStyle = "#fff"; rr(x - 95, 200, 190, 200, 18); g.fill(); g.globalAlpha = 1; emo(e, x, 310, 70); g.fillStyle = NAVY; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(n, x, 375); });
     palavra("ONDE TEM AUTÔMATO?", 640, 110, seg(t, 0, .4), 44); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "autômato"), "ding"], [em(F7, "travou"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const m = em(F7, "Missão"); g.save(); g.translate(120, 0); g.scale(.85, .85); automato(t, Math.floor(t) % 2, 1); g.restore();
     julia({ x: 140, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "catraca"), "pop"], [em(F8, "videogame"), "pop"], [em(F8, "refrigerante"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["catraca", "🚌", "Catraca e semáforo:", "estados e entradas"], ["videogame", "🎮", "Videogame:", "parado, correndo, pulando"], ["refrigerante", "🥤", "Máquina de refri:", "espera, libera, entrega"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 5", [RAFA, JULIA]); } }
];

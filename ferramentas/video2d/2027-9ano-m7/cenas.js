/* ================= 9º ano · 2027 · 1º bimestre · Missão 7 · Extra: O semáforo ================= */
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

const F0 = "O semáforo: um autômato na esquina!",
  F1 = "Na frente da escola, a Júlia e o Rafa esperavam para atravessar. O semáforo dos carros ficava verde por muito tempo. Ele apertou o botão de pedestre, e o sinal mudou! Como o semáforo sabe quando mudar?",
  F2 = "O semáforo é um autômato com três estados: verde, amarelo e vermelho. A entrada é o tempo: cada vez que o tempo do estado acaba, acontece o evento tique, e ele passa para o próximo estado.",
  F3 = "Verde, com tique, vai para amarelo. Amarelo, com tique, vai para vermelho. Vermelho, com tique, volta para verde. E esse ciclo se repete para sempre.",
  F4 = "E o botão de pedestre? Uma regra comum é esta: se o semáforo estiver verde e o pedestre apertar o botão, ele vai para o amarelo, para depois ficar vermelho e o pedestre atravessar. Em amarelo ou vermelho, o botão não muda nada.",
  F5 = "No programa, uma variável chamada luz guarda o estado. O evento tique usa se, senão para escolher o próximo estado. E o evento botão só muda alguma coisa quando a luz é verde.",
  F6 = "A Júlia e o Rafa atravessaram em segurança, sabendo exatamente por que o sinal mudou. Missão cumprida!",
  F7 = "Onde eu uso isso? Nos semáforos da cidade, com ou sem botão de pedestre. No micro-ondas e no despertador, que usam temporizador: quando o tempo acaba, eles apitam. E nos jogos, onde o tempo de cada fase é controlado por temporizadores.",
  F8 = "Agora é com vocês: abram a Missão 7 no portal!";
function semaforo(x, y, s, luz) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#475569"; g.fillRect(-8, 120, 16, 160); g.fillStyle = "#1e293b"; rr(-50, -130, 100, 250, 20); g.fill();
  ["#ef4444", "#facc15", "#22c55e"].forEach((c, i) => { const on = (luz === 2 && i === 0) || (luz === 1 && i === 1) || (luz === 0 && i === 2); g.fillStyle = on ? c : "#334155"; if (on) { g.shadowColor = c; g.shadowBlur = 30; } g.beginPath(); g.arc(0, -85 + i * 80, 30, 0, 7); g.fill(); g.shadowBlur = 0; }); g.restore(); }
function ciclo(t, at, k) { const P = [[640, 160, "🟢", "Verde", "#16a34a"], [900, 420, "🟡", "Amarelo", "#ca8a04"], [380, 420, "🔴", "Vermelho", "#dc2626"]];
  P.forEach(([x, y, e, n, c], i) => { const z = back(cl(k)); g.save(); g.globalAlpha = cl(k); if (at === i) { g.shadowColor = "#facc15"; g.shadowBlur = 30; } g.fillStyle = c; g.beginPath(); g.arc(x, y, 70, 0, 7); g.fill(); g.shadowBlur = 0; g.restore(); emo(e, x, y, 40); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, x, y + 40); });
  if (k >= 1) { setaCurva(700, 210, 860, 360, "#fde68a"); setaCurva(820, 450, 460, 450, "#fde68a"); setaCurva(400, 350, 580, 200, "#fde68a"); rotulo("⏱️ tique", 840, 260, "#fde68a", 1); rotulo("⏱️ tique", 640, 510, "#fde68a", 1); rotulo("⏱️ tique", 430, 260, "#fde68a", 1); } }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); semaforo(850, 200, .7, Math.floor(t * 1.5) % 3);
     abertura(t, "9º ANO · MISSÃO 7 · EXTRA", "O semáforo", "UM AUTÔMATO", "NA ESQUINA!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "verde"), "pop"], [em(F1, "botão"), "click"], [em(F1, "mudou"), "ding"], [em(F1, "sabe"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#334155"); const b = em(F1, "botão"), mu = em(F1, "mudou"), s = em(F1, "sabe"); const luz = t > mu + 1 ? 2 : t > mu ? 1 : 0;
     g.fillStyle = "#1f2937"; g.fillRect(0, 420, 1280, 120); g.fillStyle = "#fff"; for (let i = 0; i < 8; i++) g.fillRect(420 + i * 60, 430, 36, 100); semaforo(950, 220, .8, luz);
     if (t > b) { g.fillStyle = "#facc15"; rr(1060, 300, 60, 80, 10); g.fill(); emo("🚶", 1090, 355, 36); }
     if (t > s) palavra("COMO ELE SABE QUANDO MUDAR?", 560, 130, seg(t, s, s + .4), 40);
     julia({ x: 230, y: 610, s: .75, braco: -.6, bracoE: .3, olhar: 1, pisca: pisca(t) }); rafa({ x: 330, y: 610, s: .75, braco: t > b ? -1.4 : -.6, bracoE: .3, olhar: 1, boca: t > mu ? "riso" : "", pisca: pisca(t + .4) }); } },
 { chip: "3 ESTADOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "verde"), "pop"], [em(F2, "amarelo"), "pop"], [em(F2, "vermelho"), "pop"], [em(F2, "tique"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tq = em(F2, "tique"), v = em(F2, "verde"); ciclo(t, t > tq ? Math.floor((t - tq) * 1.2) % 3 : -1, seg(t, v, v + .6));
     if (t > tq) comando("⏱️ ENTRADA: O TEMPO (EVENTO TIQUE)", 640, 330, seg(t, tq, tq + .4), "#ca8a04", 520); } },
 { chip: "O CICLO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "amarelo"), "pop"], [em(F3, "vermelho"), "pop"], [em(F3, "verde", 1), "pop"], [em(F3, "sempre"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "Verde"), em(F3, "Amarelo"), em(F3, "Vermelho")], se = em(F3, "sempre");
     const L = [["🟢 Verde", "⏱️ tique", "🟡 Amarelo"], ["🟡 Amarelo", "⏱️ tique", "🔴 Vermelho"], ["🔴 Vermelho", "⏱️ tique", "🟢 Verde"]].filter((_, i) => t > ts[i] - .2);
     tabela(640, 110, 860, ["ESTADO ATUAL", "ENTRADA", "PRÓXIMO ESTADO"], L, ["#334155", "#ca8a04", "#16a34a"], 1, 2, 64);
     if (t > se) palavra("🔁 O CICLO SE REPETE PARA SEMPRE", 640, 450, seg(t, se, se + .4), 40); } },
 { chip: "O BOTÃO DE PEDESTRE", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "verde"), "pop"], [em(F4, "amarelo"), "pop"], [em(F4, "atravessar"), "ding"], [em(F4, "nada"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const v = em(F4, "verde"), am = em(F4, "amarelo"), na = em(F4, "nada");
     const L = []; if (t > v) L.push(["🟢 Verde", "🚶 botão", "🟡 Amarelo"]); if (t > na - 1.5) { L.push(["🟡 Amarelo", "🚶 botão", "🟡 continua"]); L.push(["🔴 Vermelho", "🚶 botão", "🔴 continua"]); }
     tabela(640, 110, 860, ["ESTADO ATUAL", "ENTRADA", "PRÓXIMO ESTADO"], L, ["#334155", "#7c3aed", "#16a34a"], seg(t, 0, .4), 2, 64);
     if (t > na) rotulo("EM AMARELO OU VERMELHO, O BOTÃO NÃO MUDA NADA", 640, 420, "#fde68a", seg(t, na, na + .4)); } },
 { chip: "NO PROGRAMA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "luz"), "pop"], [em(F5, "tique"), "click"], [em(F5, "botão"), "click"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const l = em(F5, "luz"), tq = em(F5, "tique"), b = em(F5, "botão");
     if (t > l) { g.fillStyle = "#0f172a"; rr(80, 110, 300, 110, 16); g.fill(); g.fillStyle = "#94a3b8"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("📦 variável luz", 230, 150); g.fillStyle = "#86efac"; g.font = `900 32px ${F}`; g.fillText("verde", 230, 200); }
     if (t > tq) { bocaC(440, 100, 760, 170, "⚡ quando acontecer ⏱️ tique", "#ca8a04", seg(t, tq, tq + .4)); bloco(480, 162, 660, "⚖️ se… senão: verde → amarelo → vermelho → verde", "#2563eb", seg(t, tq + .3, tq + .6)); }
     if (t > b) { bocaC(440, 320, 760, 170, "⚡ quando acontecer 🚶 botão", "#7c3aed", seg(t, b, b + .4), true); bloco(480, 382, 520, "⚖️ se luz = verde → luz = amarelo", "#2563eb", seg(t, b + .3, b + .6)); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "atravessaram"), "pop"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#334155"); const a = em(F6, "atravessaram"), m = em(F6, "Missão"); g.fillStyle = "#1f2937"; g.fillRect(0, 420, 1280, 120); g.fillStyle = "#fff"; for (let i = 0; i < 8; i++) g.fillRect(420 + i * 60, 430, 36, 100); semaforo(950, 220, .8, 2);
     const x = 250 + cl((t - a) / 2.5) * 500; julia({ x, y: 610, s: .75, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); rafa({ x: x + 100, y: 610, s: .75, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t + .4) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "semáforos"), "pop"], [em(F7, "micro"), "pop"], [em(F7, "jogos"), "pop"]],
   draw(t, D) { ondeUso(t, F7, [["semáforos", "🚦", "Semáforos:", "com ou sem botão"], ["micro", "⏲️", "Micro-ondas e despertador:", "o tempo acaba, apita"], ["jogos", "🎮", "Jogos:", "tempo de cada fase"]]); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 7", [RAFA, JULIA]); } }
];

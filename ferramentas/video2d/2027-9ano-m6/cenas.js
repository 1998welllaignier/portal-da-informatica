/* ================= 9º ano · 2027 · 1º bimestre · Missão 6 · Programação por eventos ================= */
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

const F0 = "Programação por eventos: quando acontecer, faça!",
  F1 = "O Rafa fez um programa de contador para o jogo da turma, mas ele rodava de cima para baixo, mostrava um número e terminava. Ninguém conseguia apertar nada! E o celular? Ele fica esperando a gente tocar. Como?",
  F2 = "Os programas que fizemos até agora rodam de cima para baixo e terminam. Mas o celular, o jogo e a catraca esperam alguma coisa acontecer e, então, reagem. Isso é a programação por eventos.",
  F3 = "O evento é o que acontece. O tratador é o que o programa faz quando ele acontece. Tocar no ícone: abrir o aplicativo. Chegar mensagem: vibrar e mostrar a notificação. Apertar o botão de pular: o personagem pula. Passar o cartão na catraca: liberar e acender a luz verde.",
  F4 = "No editor, a gaveta Eventos tem o bloco quando acontecer, faça. Os blocos de dentro só rodam quando aquele evento acontece. E rodam de novo, toda vez que ele acontecer.",
  F5 = "Veja o contador de cliques. Definir cliques para zero roda uma vez só, no começo. E, quando acontecer o botão verde: alterar cliques por um e mostrar cliques. Apertou três vezes? Aparece um, dois, três.",
  F6 = "E tem mais: eventos mais estados formam um autômato no programa. Uma variável guarda o estado, travada ou liberada, e cada evento, cartão ou empurrar, usa um se para decidir a transição.",
  F7 = "No portal, quando você aperta Rodar, os eventos acontecem na ordem mostrada em cima do editor, como se alguém apertasse os botões.",
  F8 = "O Rafa trocou o programa por um evento de clique, e o contador do jogo da turma funcionou! Missão cumprida!",
  F9 = "Onde eu uso isso? Todo aplicativo de celular é programado por eventos: tocar, arrastar, chegar mensagem. A porta automática do mercado reage ao sensor de movimento. E, nos jogos, cada botão do controle é um evento com o seu tratador.",
  F10 = "Agora é com vocês: abram a Missão 6 no portal!";
function botao(x, y, k, ap) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y + (ap ? 6 : 0)); g.scale(z, z); g.fillStyle = "#14532d"; g.beginPath(); g.ellipse(0, 14, 80, 30, 0, 0, 7); g.fill(); g.fillStyle = ap ? "#16a34a" : "#22c55e"; g.beginPath(); g.ellipse(0, ap ? 8 : 0, 80, 30, 0, 0, 7); g.fill(); g.restore(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "click"], [1.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); botao(840, 230, seg(t, .2, .6), Math.floor(t * 2) % 2 === 1); emo("⚡", 960, 200, 60);
     abertura(t, "9º ANO · MISSÃO 6", "Programação por eventos", "QUANDO ACONTECER,", "FAÇA!", 1.8); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "terminava"), "alerta"], [em(F1, "apertar"), "click"], [em(F1, "celular"), "pop"], [em(F1, "Como"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const tr = em(F1, "terminava"), ap = em(F1, "apertar"), ce = em(F1, "celular"), c = em(F1, "Como");
     bloco(320, 130, 300, "📦 definir cliques 0", "#ea580c", seg(t, .3, .6)); bloco(320, 195, 300, "💬 mostrar cliques", "#7c3aed", seg(t, .5, .8)); if (t > tr) comando("⏹️ FIM", 470, 290, 1, "#dc2626", 140);
     if (t > ap) { botao(470, 420, 1, Math.floor(t * 3) % 2 === 1); if (t > ap + .4) xVermelho(470, 420, 26, 1); }
     if (t > ce) celular(980, 330, 1.1); if (t > c) rotulo("ELE ESPERA A GENTE TOCAR!", 980, 520, "#fde68a", seg(t, c, c + .4));
     rafa({ x: 140, y: 620, s: .8, braco: -.6, bracoE: 2.2, olhar: 1, boca: t > tr ? "o" : "", pisca: pisca(t) }); } },
 { chip: "EVENTOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "terminam"), "pop"], [em(F2, "esperam"), "pop"], [em(F2, "reagem"), "ding"], [em(F2, "eventos"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const te = em(F2, "terminam"), es = em(F2, "esperam"), ev = em(F2, "eventos");
     cartao("⬇️ Até agora: de cima para baixo, e termina", 640, 180, 660, "#64748b", seg(t, te - .8, te - .4)); cartao("⏳ Celular, jogo, catraca: esperam e REAGEM", 640, 300, 660, "#0e7490", seg(t, es, es + .4));
     if (t > ev) palavra("⚡ PROGRAMAÇÃO POR EVENTOS", 640, 440, seg(t, ev, ev + .4), 44); } },
 { chip: "EVENTO E TRATADOR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Tocar"), "click"], [em(F3, "Chegar"), "pop"], [em(F3, "pular"), "pop"], [em(F3, "cartão"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "Tocar"), em(F3, "Chegar"), em(F3, "Apertar"), em(F3, "Passar")];
     const L = [["👆 Tocar no ícone", "Abrir o aplicativo"], ["🔔 Chegar mensagem", "Vibrar e mostrar a notificação"], ["⬆️ Botão de pular", "O personagem pula"], ["💳 Cartão na catraca", "Liberar e acender o verde"]].filter((_, i) => t > ts[i] - .3);
     tabela(640, 120, 940, ["⚡ EVENTO (o que acontece)", "🛠️ TRATADOR (o que o programa faz)"], L, ["#ca8a04", "#16a34a"], seg(t, 0, .5), -1, 64); } },
 { chip: "NO EDITOR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "gaveta"), "click"], [em(F4, "quando"), "pop"], [em(F4, "só"), "ding"], [em(F4, "toda"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const gv = em(F4, "gaveta"), q = em(F4, "quando"), so = em(F4, "só"), td = em(F4, "toda");
     if (t > gv) comando("⚡ GAVETA EVENTOS", 300, 120, seg(t, gv, gv + .4), "#ca8a04", 280);
     if (t > q) { bocaC(150, 200, 640, 150, "⚡ quando acontecer 🟢 botão, faça", "#ca8a04", seg(t, q, q + .4), t > so); bloco(190, 262, 330, "💬 blocos de dentro", "#7c3aed", seg(t, q + .3, q + .6)); }
     if (t > so) rotulo("SÓ RODAM QUANDO O EVENTO ACONTECE", 470, 420, "#fde68a", seg(t, so, so + .4)); if (t > td) { botao(1000, 300, 1, Math.floor(t * 3) % 2 === 1); rotulo("…E DE NOVO, TODA VEZ!", 1000, 400, "#bbf7d0", 1); } } },
 { chip: "CONTADOR DE CLIQUES", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "zero"), "pop"], [em(F5, "quando"), "pop"], [em(F5, "três"), "click"], [em(F5, "um", 2), "pop"], [em(F5, "dois"), "pop"], [em(F5, "três", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const z = em(F5, "zero"), q = em(F5, "quando"), tr = em(F5, "três");
     bloco(100, 120, 360, "📦 definir cliques para 0", "#ea580c", seg(t, z - .6, z - .2), t > z - .6 && t < q); if (t > z) rotulo("roda uma vez, no começo", 280, 205, "#fed7aa", 1);
     if (t > q) { bocaC(100, 250, 560, 190, "⚡ quando acontecer 🟢 botão", "#ca8a04", seg(t, q, q + .4)); bloco(140, 312, 340, "📦 alterar cliques por 1", "#ea580c", seg(t, q + .3, q + .6)); bloco(140, 374, 280, "💬 mostrar cliques", "#7c3aed", seg(t, q + .5, q + .8)); }
     const n = t > tr ? Math.min(3, Math.floor((t - tr) / .8) + 1) : 0; botao(960, 220, 1, n > 0 && (t - tr) % .8 < .25);
     telinha(960, 300, 240, "▶️ NA TELA", n ? ["1", "2", "3"].slice(0, n) : ["…"], 1, -1, false); } },
 { chip: "EVENTOS + ESTADOS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "autômato"), "ding"], [em(F6, "variável"), "pop"], [em(F6, "se"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F6, "autômato"), v = em(F6, "variável"), s = em(F6, "se");
     if (t > a) palavra("EVENTOS + ESTADOS = AUTÔMATO", 600, 140, seg(t, a, a + .4), 36);
     if (t > v) { g.fillStyle = "#0f172a"; rr(120, 200, 320, 130, 16); g.fill(); g.fillStyle = "#94a3b8"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("📦 variável estado", 280, 240); g.fillStyle = "#fde68a"; g.font = `900 34px ${F}`; g.fillText(Math.floor(t) % 2 ? "🔓 liberada" : "🔒 travada", 280, 300); }
     if (t > s) { bocaC(520, 200, 640, 160, "⚡ quando acontecer 💳 cartão", "#ca8a04", seg(t, s, s + .4)); bloco(560, 262, 520, "⚖️ se estado = travada → estado = liberada", "#2563eb", seg(t, s + .3, s + .6)); } } },
 { chip: "NO PORTAL", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Rodar"), "click"], [em(F7, "ordem"), "pop"], [em(F7, "botões"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const r = em(F7, "Rodar"), o = em(F7, "ordem");
     if (t > o) ["🟢 botão", "🟢 botão", "💳 cartão"].forEach((s, i) => caixa(380 + i * 220, 150, s, Math.floor((t - o) * 1.5) % 3 === i ? "#fde68a" : "#fff", seg(t, o + i * .15, o + .4 + i * .15), 190));
     if (t > o) rotulo("A ORDEM DOS EVENTOS FICA EM CIMA DO EDITOR", 600, 220, "#bfdbfe", 1);
     if (t > r) { g.fillStyle = "#16a34a"; rr(500, 300, 200, 70, 16); g.fill(); g.fillStyle = "#fff"; g.font = `800 28px ${F}`; g.textAlign = "center"; g.fillText("▶️ Rodar", 600, 345); } } },
 { chip: "A SOLUÇÃO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "clique"), "click"], [em(F8, "funcionou"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const c = em(F8, "clique"), m = em(F8, "Missão"); const n = t > c ? Math.floor((t - c) * 2) : 0;
     botao(700, 260, 1, n % 2 === 1); g.fillStyle = "#0f172a"; rr(580, 340, 240, 110, 16); g.fill(); g.fillStyle = "#facc15"; g.font = `900 56px ${F}`; g.textAlign = "center"; g.fillText(String(Math.ceil(n / 2)), 700, 415);
     rafa({ x: 150, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "aplicativo"), "pop"], [em(F9, "porta"), "pop"], [em(F9, "jogos"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["aplicativo", "📱", "Aplicativos:", "tocar, arrastar, mensagem"], ["porta", "🚪", "Porta automática:", "sensor de movimento"], ["jogos", "🎮", "Jogos:", "cada botão, um evento"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 6", [RAFA, JULIA]); } }
];

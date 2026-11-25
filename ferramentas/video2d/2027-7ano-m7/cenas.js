/* ================= 7º ano · 2027 · 1º bimestre · Missão 7 · Extra: Desafios de depuração ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
// ficha (registro) com campos nome → valor
function ficha(x, y, titulo, campos, k, cor, hl, s) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); const h = 70 + campos.length * 54; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fffbeb"; rr(-150, -h / 2, 300, h, 16); g.fill(); g.fillStyle = cor || "#ca8a04"; rr(-150, -h / 2, 300, 52, 16); g.fill(); g.fillRect(-150, -h / 2 + 30, 300, 22);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(titulo, 0, -h / 2 + 35);
  campos.forEach(([c, v], i) => { const yy = -h / 2 + 88 + i * 54; if (hl === i) { g.fillStyle = "#fde68a"; rr(-138, yy - 30, 276, 46, 10); g.fill(); } g.fillStyle = "#64748b"; g.font = `700 19px ${F}`; g.textAlign = "left"; g.fillText(c, -126, yy); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "right"; g.fillText(v, 126, yy); });
  g.restore(); }
// "repita" em forma de C (boca do bloco)
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
function bocaC(x, y, w, h, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; }
  g.fillStyle = cor; rr(0, 0, w, 52, 10); g.fill(); rr(0, 0, 34, h, 8); g.fill(); rr(0, h - 30, w * .55, 30, 8); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 34); g.restore(); }
// telinha de resultado: linhas de texto; hl = linha marcada de vermelho; ok = linhas verdes
function telinha(x, y, w, tit, linhas, k, hl, ok) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ".  " + s, -w / 2 + 24, yy + 23); });
  g.restore(); }

const F0 = "Desafios de depuração: hoje é dia de detetive!",
  F1 = "Chegou um chamado na delegacia dos programas: três programas quebrados! Um mostra o colega errado, outro esqueceu a idade de todo mundo, e o terceiro repete a mesma coisa errada em vários lugares.",
  F2 = "A Duda e o Caio vão usar o mesmo método da Missão 4: rodar, comparar, achar o bloco e mudar uma coisa só, testando de novo.",
  F3 = "Caso um: o programa devia mostrar o segundo nome da lista, a Bia, mas mostrou o Caio. Pista: a posição está errada. Lembre: na lista do editor, a contagem começa no um! O bloco pedia o item três, e o certo é o item dois.",
  F4 = "Caso dois: apareceu sem idade para todo mundo. Pista: o nome do campo está diferente! Na ficha, o campo se chama idade, mas o bloco procurava idadee, com dois e. Uma letra a mais, e o programa não acha nada.",
  F5 = "Caso três: a saudação saiu errada em três lugares. Pista: quando o erro se repete em vários lugares, ele mora dentro do bloco próprio. Conserte lá dentro, uma vez só, e vale em todos!",
  F6 = "E se um item aparecer repetido, ou faltar? Confira se o para cada está percorrendo a lista certa, e se o bloco está dentro ou fora do lugar.",
  F7 = "Três casos, três programas consertados. A dupla de detetives fechou a delegacia mais cedo. Missão cumprida!",
  F8 = "Onde eu uso isso? O mecânico testa uma peça de cada vez até achar o defeito do carro. O médico faz perguntas e exames, que são pistas. E, na conta de matemática errada, você refaz passo a passo para achar onde errou.",
  F9 = "Agora é com vocês, detetives: abram a Missão 7 no portal!";
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
function pasta3(x, y, n, k, ok) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#a16207"; rr(-110, -70, 220, 150, 12); g.fill(); g.fillStyle = "#ca8a04"; rr(-110, -90, 90, 30, 8); g.fill();
  g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("CASO " + n, 0, 10); g.restore(); if (ok) visto(x + 90, y - 60, 22, 1); }
const NOMES = ["Ana", "Bia", "Caio", "Duda"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#3f1d0b"); lupa(860 + Math.sin(t * 2) * 30, 250, 1.4); emo("🐞", 840 + Math.sin(t * 2) * 30, 250, 70);
     abertura(t, "7º ANO · MISSÃO 7 · EXTRA", "Desafios de depuração", "HOJE É DIA", "DE DETETIVE!", 1.6); } },
 { chip: "O CHAMADO", fala: F1, sfx: [[.1, "alerta"], [em(F1, "três"), "pop"], [em(F1, "colega"), "pop"], [em(F1, "idade"), "pop"], [em(F1, "terceiro"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const c = em(F1, "chamado"); comando("🚨 3 PROGRAMAS QUEBRADOS!", 640, 100, seg(t, c, c + .4), "#dc2626", 460);
     ["colega", "idade", "terceiro"].forEach((w, i) => { const t0 = em(F1, w); pasta3(320 + i * 320, 300, i + 1, seg(t, t0, t0 + .4)); rotulo(["colega errado", "sem idade", "erro repetido"][i], 320 + i * 320, 420, "#fecaca", seg(t, t0 + .3, t0 + .7)); });
     duda({ x: 1150, y: 620, s: .75, braco: -.6, bracoE: .3, olhar: -1, boca: "o", pisca: pisca(t) }); } },
 { chip: "O MÉTODO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "rodar"), "pop"], [em(F2, "comparar"), "pop"], [em(F2, "achar"), "pop"], [em(F2, "mudar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); comando("🕵️ O MÉTODO DO DETETIVE", 640, 100, seg(t, 0, .4), "#ca8a04", 460);
     [["rodar", "1 · ▶️ RODAR"], ["comparar", "2 · 👀 COMPARAR"], ["achar", "3 · 🔍 ACHAR O BLOCO"], ["mudar", "4 · 🔧 MUDAR UMA COISA SÓ"]].forEach(([w, s], i) => { const t0 = em(F2, w); cartao(s, 640, 185 + i * 98, 560, ["#2563eb", "#7c3aed", "#f59e0b", "#16a34a"][i], seg(t, t0, t0 + .4)); });
     caio({ x: 160, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: 1, pisca: pisca(t) }); duda({ x: 1120, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: -1, pisca: pisca(t + .5) }); } },
 { chip: "CASO 1 · A POSIÇÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Bia"), "pop"], [em(F3, "Caio"), "alerta"], [em(F3, "posição"), "ding"], [em(F3, "três"), "pop"], [em(F3, "dois", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const bi = em(F3, "Bia"), ca = em(F3, "Caio"), po = em(F3, "posição"), tr = em(F3, "três"), ce = em(F3, "dois", 1);
     NOMES.forEach((n, i) => { caixa(260 + i * 180, 170, n, i === (t > ce ? 1 : 2) && t > ca ? "#fde68a" : "#fff", seg(t, .2 + i * .1, .5 + i * .1), 150); comando("#" + (i + 1), 260 + i * 180, 240, seg(t, po, po + .4), "#2563eb", 70); });
     bloco(250, 330, 520, "💬 mostrar item " + (t > ce ? "2" : "3") + " da lista", "#7c3aed", seg(t, .3, .7), t > tr);
     telinha(1060, 160, 280, t > ce ? "▶️ AGORA" : "▶️ APARECEU", [t > ce ? "Bia" : t > ca ? "Caio" : "…"], 1, t > ca && t < ce ? 0 : -1, t > ce);
     if (t > po) rotulo("A LISTA COMEÇA NO 1!", 640, 470, "#fde68a", seg(t, po, po + .4)); if (t > ce) visto(1180, 170, 26, seg(t, ce, ce + .4)); } },
 { chip: "CASO 2 · O NOME DO CAMPO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "sem"), "alerta"], [em(F4, "diferente"), "ding"], [em(F4, "idadee"), "alerta"], [em(F4, "letra"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const se = em(F4, "sem"), di = em(F4, "diferente"), ie = em(F4, "idadee"), le = em(F4, "letra");
     ficha(330, 280, "👧 Bia", [["nome", "Bia"], ["idade", "12"]], seg(t, .2, .6), "#ca8a04", t > di ? 1 : -1, 1.1);
     bloco(620, 200, 420, "campo " + (t > le + 1.5 ? "idade" : "idadee") + " da ficha", "#16a34a", seg(t, .4, .8), t > ie);
     telinha(830, 300, 300, "▶️ APARECEU", [t > le + 1.5 ? "12" : "(sem idade)"], seg(t, se, se + .4), t > se && t < le + 1.5 ? 0 : -1, t > le + 1.5);
     if (t > ie) rotulo("idade ≠ idadee", 830, 470, "#fecaca", seg(t, ie, ie + .4)); if (t > le) palavra("UMA LETRA FAZ DIFERENÇA!", 640, 525, seg(t, le, le + .4), 36); } },
 { chip: "CASO 3 · O BLOCO PRÓPRIO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "três"), "alerta"], [em(F5, "mora"), "ding"], [em(F5, "Conserte"), "click"], [em(F5, "todos"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F5, "três"), mo = em(F5, "mora"), co = em(F5, "Conserte"), to = em(F5, "todos");
     const certo = t > co + .6; bocaC(90, 150, 380, 140, "🧩 saudação", "#db2777", seg(t, .2, .6), t > mo); bloco(130, 210, 290, certo ? "💬 mostrar Olá!" : "💬 mostrar Óla!", certo ? "#7c3aed" : "#dc2626", seg(t, .4, .8));
     [0, 1, 2].forEach(i => { bloco(720, 140 + i * 120, 220, "🧩 saudação", "#db2777", seg(t, .5 + i * .15, .8 + i * .15)); telinha(1100, 125 + i * 120, 180, "▶️", [certo ? "Olá!" : "Óla!"], seg(t, tr + i * .2, tr + .3 + i * .2), certo ? -1 : 0, certo); });
     if (t > co) seta(250, 340, 250, 270, seg(t, co, co + .3), "#fde68a"); if (t > co) rotulo("CONSERTA AQUI, UMA VEZ SÓ", 280, 400, "#fde68a", seg(t, co, co + .4)); } },
 { chip: "MAIS PISTAS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "repetido"), "pop"], [em(F6, "cada"), "pop"], [em(F6, "dentro"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ITEM REPETIDO OU FALTANDO?", 640, 110, seg(t, 0, .4), 42); const c = em(F6, "cada"), d = em(F6, "dentro");
     cartao("🔁 O “para cada” percorre a lista certa?", 640, 260, 720, "#2563eb", seg(t, c, c + .4)); cartao("📦 O bloco está dentro ou fora do lugar?", 640, 380, 720, "#f59e0b", seg(t, d, d + .4));
     caio({ x: 160, y: 620, s: .8, braco: -.6, bracoE: 2.2, olhar: 1, pisca: pisca(t) }); } },
 { chip: "CASOS ENCERRADOS", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Três"), "ding"], [em(F7, "consertados"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F7, "Três"), m = em(F7, "Missão"); [0, 1, 2].forEach(i => pasta3(320 + i * 320, 260, i + 1, 1, t > tr + .3 + i * .3));
     caio({ x: 420, y: 630, s: .8, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); duda({ x: 860, y: 630, s: .8, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t + .5) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mecânico"), "pop"], [em(F8, "médico"), "pop"], [em(F8, "conta"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
     [["mecânico", "🔧", "O mecânico:", "testa uma peça de cada vez"], ["médico", "🩺", "O médico:", "perguntas e exames são pistas"], ["conta", "🧮", "A conta errada:", "refazer passo a passo"]].forEach(([w, e, a, b], i) => {
       const t0 = em(F8, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 7", [CAIO, MENINA7]); } }
];

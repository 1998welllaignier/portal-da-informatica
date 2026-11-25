/* ================= 7º ano · 2027 · 1º bimestre · Missão 8 · Extra: O placar do quiz ================= */
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

const F0 = "O placar do quiz: o programa que conta os pontos!",
  F1 = "A Duda criou um quiz de quatro perguntas para a turma. Mas, para saber quantos pontos cada colega fez, ela conferia resposta por resposta, na mão. Com dezenove alunos, ia demorar a aula inteira!",
  F2 = "Todo jogo de perguntas tem um programa que confere as respostas e conta os pontos. Ele usa duas listas do mesmo tamanho: o gabarito, com as respostas certas, e as respostas do jogador.",
  F3 = "O programa compara posição por posição. Posição um: B e B, acertou! Posição dois: A e C, errou. Posição três: D e D, acertou! Posição quatro: C e C, acertou!",
  F4 = "Para contar os acertos, usamos uma variável contadora. Ela começa em zero e aumenta um a cada acerto, como um placar.",
  F5 = "O programa fica assim: definir acertos para zero. Definir i para um, que é a posição que estamos conferindo. Repita quatro vezes: se o item i do gabarito for igual ao item i das respostas, então altere acertos por um. Depois, altere i por um, para ir para a próxima posição.",
  F6 = "No final, mostrar na tela os acertos: três! O bloco alterar por um, na gaveta Variáveis, soma um ao valor da variável.",
  F7 = "Agora, o programa da Duda corrige o quiz da turma inteira num piscar de olhos. Missão cumprida!",
  F8 = "Onde eu uso isso? No placar do Wayground e dos jogos online. Na prova do portal, que compara suas respostas com o gabarito. E no contador de passos do celular, que soma um a cada passo.",
  F9 = "Agora é com vocês: abram a Missão 8 no portal e montem o seu placar!";
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
const GAB = ["B", "A", "D", "C"], RESP = ["B", "C", "D", "C"];
function listas(y, k, ate, hl) { // ate = quantas posições já conferidas
  comando("GABARITO", 250, y + 30, k, "#16a34a", 200); comando("RESPOSTAS", 250, y + 110, k, "#2563eb", 200);
  GAB.forEach((v, i) => { const x = 450 + i * 150; caixa(x, y + 30, v, hl === i ? "#fde68a" : "#fff", k, 100); caixa(x, y + 110, RESP[i], hl === i ? "#fde68a" : "#fff", k, 100); rotulo("posição " + (i + 1), x, y - 15, "#cbd5e1", k);
    if (i < ate) { if (v === RESP[i]) visto(x, y + 185, 22, 1); else xVermelho(x, y + 185, 22, 1); } }); }
function placar(x, y, n, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 30; } g.fillStyle = "#0f172a"; rr(-110, -80, 220, 160, 18); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#94a3b8"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("ACERTOS", 0, -40); g.fillStyle = "#facc15"; g.font = `900 72px ${F}`; g.fillText(String(n), 0, 45); g.restore(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); placar(850, 250, Math.min(3, Math.floor(t * 2)), seg(t, .3, .7), true);
     abertura(t, "7º ANO · MISSÃO 8 · EXTRA", "O placar do quiz", "O PROGRAMA QUE", "CONTA OS PONTOS!", 1.7); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "quiz"), "pop"], [em(F1, "mão"), "pop"], [em(F1, "dezenove"), "alerta"], [em(F1, "inteira"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const q = em(F1, "quiz"), m = em(F1, "mão"), dz = em(F1, "dezenove");
     comando("❓ QUIZ: 4 PERGUNTAS", 640, 100, seg(t, q, q + .4), "#7c3aed", 360);
     if (t > m) for (let i = 0; i < (t > dz ? 19 : 3); i++) { const k = seg(t, (t > dz ? dz : m) + i * .05, (t > dz ? dz : m) + .3 + i * .05); if (k > 0) { g.globalAlpha = cl(k); g.fillStyle = "#fff"; rr(380 + (i % 10) * 70, 180 + Math.floor(i / 10) * 110, 56, 80, 6); g.fill(); g.fillStyle = "#94a3b8"; for (let j = 0; j < 4; j++) g.fillRect(388 + (i % 10) * 70, 192 + Math.floor(i / 10) * 110 + j * 16, 40, 6); g.globalAlpha = 1; } }
     if (t > dz) { cronometro(1100, 470, .9, t * 4); rotulo("19 ALUNOS NA MÃO? 😵", 700, 470, "#fecaca", seg(t, dz, dz + .4)); }
     duda({ x: 170, y: 620, s: .85, braco: -1.4, bracoE: .3, olhar: 1, boca: t > dz ? "o" : "", pisca: pisca(t) }); } },
 { chip: "DUAS LISTAS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "listas"), "pop"], [em(F2, "gabarito"), "ding"], [em(F2, "jogador"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const l = em(F2, "listas"), gb = em(F2, "gabarito"), j = em(F2, "jogador");
     palavra("2 LISTAS DO MESMO TAMANHO", 640, 100, seg(t, l, l + .4), 42); const k1 = seg(t, gb, gb + .4), k2 = seg(t, j, j + .4);
     comando("✅ GABARITO", 250, 250, k1, "#16a34a", 220); GAB.forEach((v, i) => caixa(470 + i * 150, 250, v, "#fff", seg(t, gb + i * .1, gb + .3 + i * .1), 100));
     comando("🙋 RESPOSTAS", 250, 360, k2, "#2563eb", 220); RESP.forEach((v, i) => caixa(470 + i * 150, 360, v, "#fff", seg(t, j + i * .1, j + .3 + i * .1), 100)); } },
 { chip: "POSIÇÃO POR POSIÇÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "um"), "pop"], [em(F3, "acertou"), "ding"], [em(F3, "errou"), "alerta"], [em(F3, "acertou", 1), "ding"], [em(F3, "acertou", 2), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ts = [em(F3, "acertou"), em(F3, "errou"), em(F3, "acertou", 1), em(F3, "acertou", 2)], ps = [em(F3, "um"), em(F3, "dois"), em(F3, "três"), em(F3, "quatro")];
     const ate = ts.filter(x => t > x).length, hl = ps.filter(x => t > x).length - 1; listas(150, 1, ate, hl); } },
 { chip: "A VARIÁVEL CONTADORA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "contadora"), "ding"], [em(F4, "zero"), "pop"], [em(F4, "aumenta"), "pop"], [em(F4, "placar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const c = em(F4, "contadora"), z = em(F4, "zero"), a = em(F4, "aumenta"), p = em(F4, "placar");
     comando("📦 VARIÁVEL CONTADORA", 640, 100, seg(t, c, c + .4), "#ea580c", 400); const n = t > a ? Math.min(3, Math.floor((t - a) / .6) + 1) : 0;
     placar(640, 300, n, seg(t, z, z + .4), t > p); if (t > a) rotulo("+1 a cada acerto", 640, 430, "#fde68a", seg(t, a, a + .4)); } },
 { chip: "O PROGRAMA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "acertos"), "click"], [em(F5, "i"), "click"], [em(F5, "Repita"), "click"], [em(F5, "se"), "click"], [em(F5, "Depois"), "click"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const ac = em(F5, "acertos"), ii = em(F5, "i"), rp = em(F5, "Repita"), se = em(F5, "se"), dp = em(F5, "Depois");
     bloco(80, 100, 380, "📦 definir acertos para 0", "#ea580c", seg(t, ac, ac + .4), t > ac && t < ii);
     bloco(80, 165, 380, "📦 definir i para 1", "#ea580c", seg(t, ii, ii + .4), t > ii && t < rp);
     bocaC(80, 230, 760, 260, "🔁 repita 4 vezes", "#f59e0b", seg(t, rp, rp + .4), t > rp && t < se);
     bocaC(120, 292, 700, 130, "⚖️ se item i do gabarito = item i das respostas, então", "#2563eb", seg(t, se, se + .4), t > se && t < dp);
     if (t > se) bloco(160, 352, 330, "📦 alterar acertos por 1", "#ea580c", seg(t, se + 1, se + 1.4));
     bloco(120, 432, 330, "📦 alterar i por 1", "#ea580c", seg(t, dp, dp + .4), t > dp);
     if (t > ii) { g.fillStyle = "#0f172a"; rr(960, 140, 230, 150, 14); g.fill(); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText("acertos = 0", 985, 195); g.fillText("i = 1", 985, 245); }
     if (t > ii) rotulo("i = a posição conferida", 1075, 330, "#bae6fd", seg(t, ii, ii + .4)); } },
 { chip: "O RESULTADO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "três"), "ding"], [em(F6, "alterar"), "pop"], [em(F6, "soma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F6, "três"), al = em(F6, "alterar");
     bloco(160, 140, 420, "💬 mostrar acertos", "#7c3aed", seg(t, 0, .4)); placar(400, 380, 3, seg(t, tr, tr + .4), true);
     if (t > al) { bloco(720, 200, 360, "📦 alterar acertos por 1", "#ea580c", seg(t, al, al + .4), true); rotulo("2 → 3: soma 1", 900, 310, "#fde68a", seg(t, al + .6, al + 1)); rotulo("gaveta 📦 Variáveis", 900, 350, "#cbd5e1", seg(t, al + .8, al + 1.2)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "turma"), "pop"], [em(F7, "piscar"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tu = em(F7, "turma"), m = em(F7, "Missão");
     for (let i = 0; i < 19; i++) { const k = seg(t, tu + i * .06, tu + .2 + i * .06); if (k > 0) { g.globalAlpha = cl(k); g.fillStyle = "#fff"; rr(380 + (i % 10) * 70, 170 + Math.floor(i / 10) * 110, 56, 80, 6); g.fill(); g.fillStyle = "#16a34a"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(String((i * 7) % 5), 408 + (i % 10) * 70, 222 + Math.floor(i / 10) * 110); g.globalAlpha = 1; } }
     duda({ x: 170, y: 620, s: .85, braco: -2.4, bracoE: 2.4, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "Wayground"), "pop"], [em(F8, "prova"), "pop"], [em(F8, "passos"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
     [["Wayground", "🏆", "Placar dos jogos:", "Wayground e jogos online"], ["prova", "📝", "Prova do portal:", "suas respostas × gabarito"], ["passos", "👟", "Contador de passos:", "soma 1 a cada passo"]].forEach(([w, e, a, b], i) => {
       const t0 = em(F8, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 8", [CAIO, MENINA7]); } }
];

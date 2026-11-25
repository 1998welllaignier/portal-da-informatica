/* ================= 7º ano · 2027 · 1º bimestre · Missão 4 · Depurar: achar e consertar erros ================= */
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

const F0 = "Depurar: o detetive dos erros!",
  F1 = "O Caio fez um programa que devia mostrar Olá três vezes e, no final, Fim. Mas apareceu Olá, Fim, Olá, Fim, Olá, Fim! Ele ficou bravo e já ia apagar tudo.",
  F2 = "Calma, Caio! Todo programador erra, até os profissionais. Um erro no programa se chama bug, que em inglês quer dizer inseto. E achar e consertar o erro se chama depurar.",
  F3 = "Por que inseto? Em mil novecentos e quarenta e sete, uma mariposa ficou presa dentro de um computador enorme e causou uma falha. Os cientistas colaram a mariposa no caderno, e o nome pegou.",
  F4 = "Os erros mais comuns nos blocos são: ordem trocada, bloco no lugar errado, número errado no repita, condição trocada, valor errado e repetição sem fim.",
  F5 = "Para achar o erro, use o método do detetive. Passo um: rodar. Passo dois: comparar com o que devia aparecer e achar a linha onde começou a diferença. Passo três: achar o bloco responsável. Passo quatro: mudar uma coisa só e testar de novo.",
  F6 = "Por que uma coisa só? Porque, se você muda tudo de uma vez, não sabe o que resolveu. E pode até criar um erro novo!",
  F7 = "O Caio comparou: a segunda linha devia ser Olá, mas saiu Fim. Então, o bloco mostrar Fim estava dentro do repita! Ele tirou o bloco para fora, testou de novo, e deu certo. Missão cumprida!",
  F8 = "Onde eu uso isso? Quando o aplicativo atualiza com correções de erros, foi alguém depurando. Quando a receita dá errado, você pensa no que fez diferente. E nos jogos, os testadores jogam muitas vezes caçando bugs.",
  F9 = "Agora é com vocês, detetives: abram a Missão 4 no portal!";
const ERRADO = ["Olá", "Fim", "Olá", "Fim", "Olá", "Fim"], CERTO = ["Olá", "Olá", "Olá", "Fim"];
function programa(x, y, dentro, k, hl) { // repita 3 vezes { mostrar Olá ; [mostrar Fim] } ; [mostrar Fim]
  bocaC(x, y, 380, dentro ? 190 : 140, "🔁 repita 3 vezes", "#f59e0b", k, hl === "r");
  bloco(x + 40, y + 60, 260, "💬 mostrar Olá", "#7c3aed", k);
  if (dentro) bloco(x + 40, y + 122, 260, "💬 mostrar Fim", "#7c3aed", k, hl === "f");
  else bloco(x, y + 150, 260, "💬 mostrar Fim", "#7c3aed", k, hl === "f"); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#3f1d0b"); lupa(900 + Math.sin(t * 2) * 30, 300, 1.4); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `80px ${F}`; g.textAlign = "center"; g.fillText("🐞", 880 + Math.sin(t * 2) * 30, 300);
     abertura(t, "7º ANO · MISSÃO 4", "Depurar", "O DETETIVE", "DOS ERROS!", 1.5); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "programa"), "click"], [em(F1, "apareceu"), "alerta"], [em(F1, "bravo"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const p = em(F1, "programa"), d = em(F1, "devia"), a = em(F1, "apareceu"), b = em(F1, "bravo");
     programa(330, 140, true, seg(t, p, p + .5));
     if (t > d && t < a) telinha(900, 120, 300, "✅ DEVIA APARECER", CERTO, seg(t, d, d + .4), -1, true);
     if (t > a) telinha(900, 90, 300, "▶️ APARECEU", ERRADO.slice(0, Math.min(6, 1 + Math.floor((t - a) / .35))), 1, -1);
     caio({ x: 170, y: 610, s: .9, braco: t > b ? -2.6 : -.6, bracoE: t > b ? 2.6 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) });
     if (t > b) balao("Vou apagar tudo!", 250, 330, seg(t, b, b + .3)); } },
 { chip: "BUG E DEPURAR", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "erra"), "pop"], [em(F2, "bug"), "ding"], [em(F2, "inseto"), "pop"], [em(F2, "depurar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const e = em(F2, "erra"), b = em(F2, "bug"), i = em(F2, "inseto"), dp = em(F2, "depurar");
     if (t < b) { palavra("TODO PROGRAMADOR ERRA!", 640, 300, seg(t, e, e + .4), 56); }
     if (t > b) { comando("🐞 BUG = ERRO NO PROGRAMA", 640, 180, seg(t, b, b + .4), "#dc2626", 520); if (t > i) rotulo("bug, em inglês = inseto", 640, 250, "#fecaca", seg(t, i, i + .4)); }
     if (t > dp) { comando("🕵️ DEPURAR = ACHAR E CONSERTAR", 640, 360, seg(t, dp, dp + .4), "#16a34a", 600); rotulo("em inglês: debug (tirar o inseto)", 640, 430, "#bbf7d0", seg(t, dp + .4, dp + .8)); }
     caio({ x: 150, y: 610, s: .8, braco: -.6, bracoE: .3, olhar: 1, boca: t > dp ? "riso" : "", pisca: pisca(t) }); } },
 { chip: "VOCÊ SABIA?", fala: F3, legenda: "Por que inseto? Em 1947, uma mariposa ficou presa dentro de um computador enorme e causou uma falha. Os cientistas colaram a mariposa no caderno, e o nome pegou.",
   sfx: [[.1, "whoosh"], [em(F3, "mariposa"), "pop"], [em(F3, "falha"), "alerta"], [em(F3, "colaram"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F3, "mil"), m = em(F3, "mariposa"), f = em(F3, "falha"), c = em(F3, "colaram");
     comando("📅 1947", 640, 110, seg(t, a, a + .4), "#7c3aed", 200);
     for (let i = 0; i < 4; i++) { const k = seg(t, a + .2 + i * .15, a + .5 + i * .15); if (k > 0) { g.globalAlpha = cl(k); g.fillStyle = "#64748b"; rr(280 + i * 190, 190, 160, 260, 10); g.fill(); for (let j = 0; j < 8; j++) { g.fillStyle = (Math.floor(t * 4 + j + i) % 3) ? "#fde047" : "#475569"; g.beginPath(); g.arc(310 + i * 190 + (j % 4) * 32, 230 + Math.floor(j / 4) * 40, 7, 0, 7); g.fill(); } g.globalAlpha = 1; } }
     if (t > m && t < c) { g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `56px ${F}`; g.textAlign = "center"; g.fillText("🦋", 640 + Math.sin(t * 5) * 20, 330); }
     if (t > f && t < c) xVermelho(640, 330, 40, seg(t, f, f + .3));
     if (t > c) { g.fillStyle = "#fffbeb"; rr(470, 200, 340, 250, 10); g.fill(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `60px ${F}`; g.textAlign = "center"; g.fillText("🦋", 640, 320); g.fillStyle = NAVY; g.font = `700 20px ${F}`; g.fillText("o primeiro “bug” de verdade!", 640, 400); } } },
 { chip: "OS ERROS MAIS COMUNS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "ordem"), "pop"], [em(F4, "lugar"), "pop"], [em(F4, "número"), "pop"], [em(F4, "condição"), "pop"], [em(F4, "valor"), "pop"], [em(F4, "sem"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("OS 6 ERROS MAIS COMUNS", 640, 90, seg(t, 0, .4), 44);
     [["ordem", "🔃 Ordem trocada"], ["lugar", "📦 Bloco no lugar errado"], ["número", "🔢 Número errado no repita"], ["condição", "⚖️ Condição trocada"], ["valor", "✏️ Valor errado: “Óla”"], ["sem", "♾️ Repetição sem fim"]].forEach(([w, s], i) => {
       const t0 = em(F4, w); cartao(s, 360 + (i % 2) * 560, 180 + Math.floor(i / 2) * 120, 500, ["#dc2626", "#f59e0b", "#2563eb", "#7c3aed", "#db2777", "#0f766e"][i], seg(t, t0, t0 + .4)); }); } },
 { chip: "MÉTODO DO DETETIVE", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "um"), "pop"], [em(F5, "dois"), "pop"], [em(F5, "três"), "pop"], [em(F5, "quatro"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); comando("🕵️ O MÉTODO DO DETETIVE", 640, 80, seg(t, 0, .4), "#ca8a04", 460);
     [["um", "1", "▶️ RODAR", "aperte o play"], ["dois", "2", "👀 COMPARAR", "em que linha mudou?"], ["três", "3", "🔍 ACHAR", "qual bloco faz essa linha?"], ["quatro", "4", "🔧 MUDAR 1 COISA", "só uma, e testar de novo"]].forEach(([w, n, a, b], i) => {
       const t0 = em(F5, w), k = seg(t, t0, t0 + .4), x = 180 + i * 310; if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 330); g.scale(z, z);
       g.fillStyle = t > t0 && (i === 3 || t < em(F5, ["dois", "três", "quatro", "x"][i]) ) ? "#facc15" : "#fff"; rr(-135, -120, 270, 240, 20); g.fill();
       g.fillStyle = NAVY; g.font = `900 64px ${F}`; g.textAlign = "center"; g.fillText(n, 0, -40); g.font = `800 22px ${F}`; g.fillText(a, 0, 20); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, 0, 60); g.restore(); }); } },
 { chip: "UMA COISA DE CADA VEZ", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "tudo"), "alerta"], [em(F6, "novo"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const tu = em(F6, "tudo"), nv = em(F6, "novo");
     palavra("MUDE UMA COISA SÓ!", 640, 110, seg(t, 0, .4), 54);
     ["🔧", "🔧", "🔧", "🔧", "🔧"].forEach((e, i) => { if (t > tu) { g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `56px ${F}`; g.textAlign = "center"; g.fillText(e, 380 + i * 130 + Math.sin(t * 9 + i) * 8, 300 + Math.cos(t * 7 + i) * 8); } });
     if (t > tu) rotulo("MUDOU TUDO? QUAL CONSERTOU?", 640, 400, "#fecaca", seg(t, tu, tu + .4));
     if (t > nv) { g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `64px ${F}`; g.fillText("🐞🐞", 640, 500); }
     caio({ x: 150, y: 610, s: .8, braco: -.6, bracoE: .3, olhar: 1, boca: t > tu ? "o" : "", pisca: pisca(t) }); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "comparou"), "pop"], [em(F7, "dentro"), "alerta"], [em(F7, "tirou"), "click"], [em(F7, "certo"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const c = em(F7, "comparou"), dn = em(F7, "dentro"), ti = em(F7, "tirou"), ce = em(F7, "certo"), m = em(F7, "Missão");
     const fora = t > ti + .3; programa(300, 140, !fora, 1, t > dn && !fora ? "f" : "");
     if (!fora) { telinha(820, 90, 260, "✅ DEVIA", CERTO, seg(t, c, c + .4), t > c ? 1 : -1, true); telinha(1110, 90, 260, "▶️ SAIU", ERRADO.slice(0, 4), seg(t, c, c + .4), t > c ? 1 : -1); }
     if (t > dn && !fora) rotulo("“FIM” DENTRO DO REPITA!", 450, 400, "#fde68a", seg(t, dn, dn + .4));
     if (fora) { telinha(950, 110, 320, "▶️ SAIU", CERTO, seg(t, ce - .3, ce), -1, true); if (t > ce) visto(1140, 120, 30, seg(t, ce, ce + .4)); }
     caio({ x: 140, y: 610, s: .8, braco: t > ce ? -2.4 : -.6, bracoE: t > ce ? 2.4 : .3, olhar: 1, boca: t > ce ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "aplicativo"), "pop"], [em(F8, "receita"), "pop"], [em(F8, "jogos"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
     [["aplicativo", "📱", "Atualização:", "“correções de erros”"], ["receita", "🎂", "Receita que deu errado:", "o que eu fiz diferente?"], ["jogos", "🎮", "Testadores de jogos:", "jogam caçando bugs"]].forEach(([w, e, a, b], i) => {
       const t0 = em(F8, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-170, -150, 340, 300, 22); g.fill(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `90px ${F}`; g.textAlign = "center"; g.fillText(e, 0, -30); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.fillText(a, 0, 50); g.font = `600 20px ${F}`; g.fillStyle = "#475569"; g.fillText(b, 0, 90); g.restore(); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 4", [CAIO, MENINA7]); } }
];

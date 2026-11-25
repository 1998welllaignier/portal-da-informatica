/* ================= 7º ano · 2027 · 1º bimestre · Missão 5 · Decompor e reaproveitar ================= */
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

const F0 = "Decompor e reaproveitar: o segredo dos problemas grandes!",
  F1 = "A turma da Duda ficou responsável pela festa de fim de ano. Decoração, comida, música, brincadeiras… Era coisa demais! Todo mundo ficou perdido, sem saber por onde começar.",
  F2 = "O segredo é decompor: dividir o problema grande em partes menores, que dá para resolver uma de cada vez. Um grupo cuida da decoração, outro da comida, outro da música e outro das brincadeiras.",
  F3 = "No programa é igual. E tem mais um truque: quando uma parte se repete em vários lugares, a gente cria um bloco nosso, com nome. Ele é escrito uma vez só e chamado sempre que precisar. Isso é reaproveitar.",
  F4 = "Pense numa música com refrão. Sem bloco próprio, você escreve o refrão inteiro toda vez. Com o bloco refrão, você escreve uma vez só, e o programa fica assim: verso um, refrão, verso dois, refrão.",
  F5 = "No editor, o bloco próprio fica na gaveta Meus blocos. Você usa o bloco para fazer algo, dá um nome, como refrão, e coloca dentro dele os blocos da parte que se repete.",
  F6 = "As vantagens: o programa fica mais curto. Se precisar consertar, conserta num lugar só, e vale em todos. O nome do bloco diz o que ele faz. E dá para dividir o trabalho: cada colega cria um bloco.",
  F7 = "A turma da Duda dividiu a festa em partes, e cada grupo fez a sua. E o grito da turma, que se repetia a festa inteira, virou um bloco só. Missão cumprida!",
  F8 = "Onde eu uso isso? Numa receita grande, que é dividida em massa, recheio e cobertura. No jogo, quando o mesmo movimento é usado por vários personagens. E num trabalho em grupo, quando cada um faz uma parte.",
  F9 = "Agora é com vocês: abram a Missão 5 no portal!";
const PARTES = [["🎈", "Decoração", "#db2777"], ["🍰", "Comida", "#f59e0b"], ["🎵", "Música", "#7c3aed"], ["🎮", "Brincadeiras", "#16a34a"]];
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"], [1.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); PARTES.forEach(([e], i) => { const k = seg(t, .3 + i * .25, .6 + i * .25); if (k > 0) emo(e, 760 + (i % 2) * 150, 220 + Math.floor(i / 2) * 140 + Math.sin(t * 2 + i) * 8, 80); });
     abertura(t, "7º ANO · MISSÃO 5", "Decompor e reaproveitar", "O SEGREDO DOS", "PROBLEMAS GRANDES!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "festa"), "pop"], [em(F1, "Decoração"), "pop"], [em(F1, "comida"), "pop"], [em(F1, "música"), "pop"], [em(F1, "brincadeiras"), "pop"], [em(F1, "perdido"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const f = em(F1, "festa"), p = em(F1, "perdido");
     comando("🎉 FESTA DE FIM DE ANO", 700, 100, seg(t, f, f + .4), "#db2777", 420);
     PARTES.forEach(([e, n], i) => { const t0 = em(F1, ["decoração", "comida", "música", "brincadeiras"][i]); if (t > t0) { const a = t * (t > p ? 3 : 1) + i * 1.6; emo(e, 700 + Math.cos(a) * 220, 330 + Math.sin(a) * 120, 70); } });
     if (t > p) palavra("COISA DEMAIS!", 700, 520, seg(t, p - .6, p - .2), 40);
     duda({ x: 170, y: 610, s: .9, braco: t > p ? -2.6 : -.6, bracoE: t > p ? 2.6 : .3, olhar: 1, boca: t > p ? "o" : "", pisca: pisca(t) }); } },
 { chip: "DECOMPOR", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "decompor"), "ding"], [em(F2, "partes"), "pop"], [em(F2, "grupo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F2, "decompor"), pt = em(F2, "partes"), gr = em(F2, "grupo");
     comando("✂️ DECOMPOR = DIVIDIR EM PARTES MENORES", 640, 90, seg(t, d, d + .4), "#16a34a", 620);
     const k = seg(t, pt, pt + .8); g.fillStyle = "#fde68a"; const sep = 40 * cl(k);
     PARTES.forEach(([e, n, c], i) => { const x = 280 + i * 240 + (i - 1.5) * sep * .4; const kk = seg(t, pt + i * .15, pt + .4 + i * .15); if (kk <= 0) return; const z = back(cl(kk)); g.save(); g.translate(x, 330); g.scale(z, z); g.fillStyle = c; rr(-105, -110, 210, 220, 20); g.fill(); g.restore(); emo(e, x, 320, 70); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(n, x, 395);
       if (t > gr) rotulo("Grupo " + (i + 1), x, 480, "#bbf7d0", seg(t, gr + i * .4, gr + .4 + i * .4)); }); } },
 { chip: "REAPROVEITAR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "repete"), "pop"], [em(F3, "bloco"), "ding"], [em(F3, "uma"), "pop"], [em(F3, "chamado"), "pop"], [em(F3, "reaproveitar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const r = em(F3, "repete"), b = em(F3, "bloco"), c = em(F3, "chamado"), ra = em(F3, "reaproveitar");
     if (t > b) bloco(120, 180, 330, "🧩 meu bloco", "#db2777", seg(t, b, b + .4), true);
     if (t > b) rotulo("escrito UMA VEZ SÓ", 285, 280, "#fbcfe8", seg(t, b + .5, b + .9));
     [0, 1, 2].forEach(i => { const t0 = c + i * .35; if (t > r) bloco(720, 140 + i * 110, 260, i === 1 ? "💬 outra coisa" : "🧩 meu bloco", i === 1 ? "#7c3aed" : "#db2777", seg(t, r + i * .2, r + .4 + i * .2));
       if (t > c && i !== 1) seta(460, 205, 710, 165 + i * 110, seg(t, t0, t0 + .3), "#fde68a"); });
     if (t > c) rotulo("CHAMADO SEMPRE QUE PRECISAR", 850, 500, "#fde68a", seg(t, c + .6, c + 1));
     if (t > ra) palavra("REAPROVEITAR!", 640, 520, seg(t, ra, ra + .4), 44); } },
 { chip: "O BLOCO REFRÃO", fala: F4, legenda: "Pense numa música com refrão. Sem bloco próprio, você escreve o refrão inteiro toda vez. Com o bloco refrão, você escreve uma vez só, e o programa fica assim: verso 1, refrão, verso 2, refrão.",
   sfx: [[.1, "whoosh"], [em(F4, "Sem"), "pop"], [em(F4, "Com"), "ding"], [em(F4, "verso"), "pop"], [em(F4, "verso", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const se = em(F4, "Sem"), co = em(F4, "Com"), v1 = em(F4, "verso");
     comando("❌ SEM BLOCO PRÓPRIO", 330, 90, seg(t, se, se + .4), "#dc2626", 330);
     ["verso 1", "la la la", "la la la", "verso 2", "la la la", "la la la"].forEach((s, i) => bloco(170, 130 + i * 66, 300, "💬 " + s, s[0] === "v" ? "#2563eb" : "#94a3b8", seg(t, se + .2 + i * .12, se + .5 + i * .12)));
     if (t > co) { comando("✅ COM O BLOCO REFRÃO", 930, 90, seg(t, co, co + .4), "#16a34a", 340);
       bloco(790, 130, 280, "🧩 refrão", "#db2777", seg(t, co + .2, co + .6)); rotulo("= la la la · la la la", 930, 215, "#fbcfe8", seg(t, co + .4, co + .8));
       ["💬 verso 1", "🧩 refrão", "💬 verso 2", "🧩 refrão"].forEach((s, i) => bloco(790, 250 + i * 60, 280, s, s[1] === "🧩"[1] || s.includes("refrão") ? "#db2777" : "#2563eb", seg(t, v1 + i * .4, v1 + .3 + i * .4)));
       if (t > v1 + 1.6) rotulo("4 BLOCOS NO LUGAR DE 6!", 930, 520, "#fde68a", seg(t, v1 + 1.6, v1 + 2)); } } },
 { chip: "NO EDITOR DE BLOCOS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "gaveta"), "click"], [em(F5, "fazer"), "pop"], [em(F5, "nome"), "pop"], [em(F5, "dentro"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const gv = em(F5, "gaveta"), fz = em(F5, "fazer"), nm = em(F5, "nome"), dn = em(F5, "dentro");
     const k = seg(t, gv, gv + .4); if (k > 0) { g.globalAlpha = cl(k); g.fillStyle = "#1e293b"; rr(80, 120, 260, 420, 16); g.fill(); g.globalAlpha = 1;
       ["📦 Variáveis", "🔁 Controle", "📝 Listas", "🧩 Meus blocos"].forEach((s, i) => { g.fillStyle = i === 3 ? "#db2777" : "#334155"; rr(100, 150 + i * 90, 220, 66, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 21px ${F}`; g.textAlign = "left"; g.fillText(s, 118, 192 + i * 90); }); }
     if (t > fz) { bocaC(480, 170, 440, t > dn ? 230 : 120, "🧩 para fazer: " + (t > nm ? "refrão" : "…"), "#db2777", seg(t, fz, fz + .4), t > nm && t < dn); if (t > nm) seta(700, 150, 760, 190, seg(t, nm, nm + .3), "#fde68a"); }
     if (t > dn) { bloco(520, 235, 280, "💬 la la la", "#94a3b8", seg(t, dn, dn + .3)); bloco(520, 300, 280, "💬 la la la", "#94a3b8", seg(t, dn + .2, dn + .5)); }
     if (t > gv) maoApontando(340, 420, Math.PI, .7); } },
 { chip: "AS VANTAGENS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "curto"), "pop"], [em(F6, "consertar"), "pop"], [em(F6, "nome"), "pop"], [em(F6, "dividir"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("POR QUE CRIAR O SEU BLOCO?", 640, 90, seg(t, 0, .4), 42);
     [["curto", "✂️ Programa mais curto"], ["consertar", "🛠️ Conserta num lugar só"], ["nome", "👀 O nome diz o que faz"], ["dividir", "👥 Dá para dividir o trabalho"]].forEach(([w, s], i) => { const t0 = em(F6, w); cartao(s, 360 + (i % 2) * 560, 210 + Math.floor(i / 2) * 150, 510, ["#2563eb", "#f59e0b", "#7c3aed", "#db2777"][i], seg(t, t0, t0 + .4)); }); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "partes"), "pop"], [em(F7, "grito"), "pop"], [em(F7, "bloco"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const pt = em(F7, "partes"), gr = em(F7, "grito"), b = em(F7, "bloco"), m = em(F7, "Missão");
     PARTES.forEach(([e, n, c], i) => { const k = seg(t, pt + i * .2, pt + .4 + i * .2); if (k > 0) { cartao(e + " " + n, 690 + (i % 2) * 300, 200 + Math.floor(i / 2) * 110, 285, c, k); if (t > pt + 1.2) visto(820 + (i % 2) * 300, 180 + Math.floor(i / 2) * 110, 16, seg(t, pt + 1.2 + i * .2, pt + 1.5 + i * .2)); } });
     if (t > gr) bloco(640, 450, 330, "🧩 grito da turma", "#db2777", seg(t, b, b + .4), t > b);
     if (t > gr && t < b) balao("Uh! JK!", 820, 470, seg(t, gr, gr + .3));
     duda({ x: 200, y: 610, s: .9, braco: t > b ? -2.4 : -.6, bracoE: t > b ? 2.4 : .3, olhar: 1, boca: t > b ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "receita"), "pop"], [em(F8, "jogo"), "pop"], [em(F8, "trabalho"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
     [["receita", "🎂", "Receita grande:", "massa, recheio, cobertura"], ["jogo", "🎮", "No jogo:", "o mesmo pulo em vários bonecos"], ["trabalho", "👥", "Trabalho em grupo:", "cada um faz uma parte"]].forEach(([w, e, a, b], i) => {
       const t0 = em(F8, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-175, -150, 350, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 19px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 5", [CAIO, MENINA7]); } }
];

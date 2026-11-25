/* ================= 8º ano · 2027 · 1º bimestre · Missão 7 · Extra: Ordenação por seleção ================= */
const BIA8 = { camisa: "#f97316", cabelo: "longo" };
const bia8 = o => boneco(Object.assign({}, BIA8, o));
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

const F0 = "Ordenação por seleção: escolher o menor!",
  F1 = "A Bia achou o método da bolha trabalhoso: troca, troca, troca, vizinho por vizinho. Não tem um jeito de trocar menos?",
  F2 = "Tem! É a ordenação por seleção. Em inglês, selection sort. A ideia é como escolher os times no recreio: o capitão escolhe o melhor, depois o melhor do que sobrou, e assim por diante.",
  F3 = "Os passos: procure o menor item de toda a lista. Troque ele com o item da primeira posição: pronto, a primeira posição está certa. Depois, procure o menor do que sobrou e troque com a segunda posição. E repita até a última.",
  F4 = "Vamos ordenar sete, dois, nove, quatro. Primeira rodada: o menor de todos é o dois. Troca com o sete: dois, sete, nove, quatro. O dois já está no lugar certo!",
  F5 = "Segunda rodada: do que sobrou, o menor é o quatro. Troca com o sete: dois, quatro, nove, sete. Terceira rodada: o menor do que sobrou é o sete. Troca com o nove. E pronto: dois, quatro, sete, nove!",
  F6 = "Bolha ou seleção? A bolha compara vizinhos, e o maior sobe para o fim. A seleção procura o menor do que sobrou, e ele vai para o começo. E a grande diferença: a bolha faz muitas trocas, uma para cada par fora de ordem. A seleção faz poucas: no máximo uma troca por rodada.",
  F7 = "A Bia ordenou a lista com só três trocas. Missão cumprida!",
  F8 = "Onde eu uso isso? Ao escolher os times no recreio. Ao arrumar as cartas na mão, puxando sempre a menor para a esquerda. E no pódio: primeiro se decide o primeiro lugar, depois o segundo, entre os que sobraram.",
  F9 = "Agora é com vocês: abram a Missão 7 no portal!";
// rodada de seleção: lista antes, índice da posição a preencher, índice do menor
function rodada(t, L, pos, men, t0, y) { const k = cl((t - t0 - .8) / .8), x = i => 340 + i * 200; const trocou = t > t0 + 1.6;
  const M = L.slice(); if (trocou) [M[pos], M[men]] = [M[men], M[pos]];
  M.forEach((v, i) => { let xx = x(i), yy = y; const anim = t > t0 + .8 && !trocou && (i === pos || i === men) && pos !== men; if (anim) { xx = i === pos ? lerp(x(pos), x(men), k) : lerp(x(men), x(pos), k); yy -= Math.sin(k * Math.PI) * 70 * (i === pos ? 1 : -1); }
    const pronto = i < pos || (trocou && i === pos); carta(anim ? (i === pos ? L[pos] : L[men]) : v, xx, yy, pronto ? "#bbf7d0" : (t > t0 && i === men && !trocou) ? "#fde68a" : i < pos ? "#bbf7d0" : "#fff", 1, 130); });
  if (t > t0 && !trocou) rotulo("MENOR: " + L[men], x(men), y + 110, "#fde68a", 1); return M; }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); [7, 2, 9, 4].forEach((v, i) => carta(v, 720 + i * 110, 300, v === 2 && t > .8 ? "#fde68a" : "#fff", seg(t, .2 + i * .1, .5 + i * .1), 90)); if (t > 1) emo("🏅", 830, 225, 50);
     abertura(t, "8º ANO · MISSÃO 7 · EXTRA", "Ordenação por seleção", "ESCOLHER", "O MENOR!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "troca"), "whoosh"], [em(F1, "troca", 1), "whoosh"], [em(F1, "troca", 2), "whoosh"], [em(F1, "menos"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const tr = em(F1, "troca"), m = em(F1, "menos");
     const n = t > tr ? Math.floor((t - tr) * 2.5) : 0; for (let i = 0; i < Math.min(n, 12); i++) rotulo("TROCA!", 300 + (i * 173) % 700, 140 + (i * 97) % 300, "#fecaca", 1);
     if (t > m) palavra("TROCAR MENOS?", 640, 470, seg(t, m, m + .4), 44);
     bia8({ x: 1170, y: 620, s: .8, braco: t > m ? -2.6 : -.6, bracoE: t > m ? 2.6 : .3, olhar: -1, boca: "o", pisca: pisca(t) }); } },
 { chip: "SELECTION SORT", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "seleção"), "ding"], [em(F2, "selection"), "pop"], [em(F2, "times"), "pop"], [em(F2, "melhor"), "pop"], [em(F2, "melhor", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const s = em(F2, "seleção"), ss = em(F2, "selection"), tm = em(F2, "times"), m1 = em(F2, "melhor"), m2 = em(F2, "melhor", 1);
     if (t > s) comando("🏅 ORDENAÇÃO POR SELEÇÃO", 640, 110, seg(t, s, s + .4), "#16a34a", 440); if (t > ss) rotulo("em inglês: selection sort", 640, 170, "#bbf7d0", seg(t, ss, ss + .4));
     if (t > tm) for (let i = 0; i < 5; i++) { const esc = (i === 2 && t > m1) || (i === 4 && t > m2); pessoa(330 + i * 150, esc ? 330 : 420, 1.1, ["#0ea5e9", "#a855f7", "#22c55e", "#f59e0b", "#ef4444"][i]); if (i === 2 && t > m1) rotulo("1º escolhido", 630, 250, "#fde68a", 1); if (i === 4 && t > m2) rotulo("2º", 930, 250, "#fde68a", 1); } } },
 { chip: "OS PASSOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "menor"), "pop"], [em(F3, "Troque"), "pop"], [em(F3, "sobrou"), "pop"], [em(F3, "repita"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); comando("📋 OS PASSOS DA SELEÇÃO", 640, 90, seg(t, 0, .4), "#2563eb", 400);
     [["menor", "1 · Procure o MENOR item de toda a lista", "#2563eb"], ["Troque", "2 · TROQUE com a 1ª posição: ela fica pronta", "#7c3aed"], ["sobrou", "3 · Procure o menor DO QUE SOBROU e troque com a 2ª", "#0e7490"], ["repita", "4 · Repita até a última posição", "#16a34a"]].forEach(([w, s, c], i) => { const t0 = em(F3, w); comando(s, 640, 170 + i * 80, seg(t, t0, t0 + .4), c, 820); }); } },
 { chip: "1ª RODADA", fala: F4, legenda: "Vamos ordenar 7, 2, 9, 4. Primeira rodada: o menor de todos é o 2. Troca com o 7: 2, 7, 9, 4. O 2 já está no lugar certo!",
   sfx: [[.1, "whoosh"], [em(F4, "menor"), "pop"], [em(F4, "Troca"), "whoosh"], [em(F4, "certo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); comando("1ª RODADA", 640, 100, 1, "#7c3aed", 240); const t0 = em(F4, "menor");
     if (t < t0) [7, 2, 9, 4].forEach((v, i) => carta(v, 340 + i * 200, 300, "#fff", 1, 130)); else rodada(t, [7, 2, 9, 4], 0, 1, t0, 300); } },
 { chip: "2ª E 3ª RODADAS", fala: F5, legenda: "Segunda rodada: do que sobrou, o menor é o 4. Troca com o 7: 2, 4, 9, 7. Terceira rodada: o menor do que sobrou é o 7. Troca com o 9. E pronto: 2, 4, 7, 9!",
   sfx: [[.1, "whoosh"], [em(F5, "menor"), "pop"], [em(F5, "Troca"), "whoosh"], [em(F5, "menor", 1), "pop"], [em(F5, "Troca", 1), "whoosh"], [em(F5, "pronto"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F5, "menor"), b = em(F5, "menor", 1), p = em(F5, "pronto"); comando(t > b - .3 ? "3ª RODADA" : "2ª RODADA", 640, 100, 1, "#7c3aed", 240);
     if (t < b - .3) rodada(t, [2, 7, 9, 4], 1, 3, a, 300); else rodada(t, [2, 4, 9, 7], 2, 3, b, 300);
     if (t > p) { [2, 4, 7, 9].forEach((v, i) => carta(v, 340 + i * 200, 300, "#bbf7d0", 1, 130)); palavra("2, 4, 7, 9 · ORDENADA!", 640, 490, seg(t, p, p + .4), 44); } } },
 { chip: "BOLHA × SELEÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "vizinhos"), "pop"], [em(F6, "menor"), "pop"], [em(F6, "muitas"), "alerta"], [em(F6, "poucas"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const lin = []; const v = em(F6, "vizinhos"), mn = em(F6, "menor"), mu = em(F6, "muitas"), po = em(F6, "poucas");
     if (t > v) lin.push(["Compara", "vizinhos", t > mn ? "o que sobrou" : ""]); if (t > v + 1) lin.push(["Para onde vai", "maior → fim", t > mn + 1 ? "menor → começo" : ""]); if (t > mu) lin.push(["Trocas", "!MUITAS", t > po ? "POUCAS: 1 por rodada" : ""]);
     tabela(640, 130, 900, ["", "🫧 BOLHA", "🏅 SELEÇÃO"], lin, ["#334155", "#0e7490", "#16a34a"], seg(t, 0, .5), -1, 64); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "três"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F7, "três"), m = em(F7, "Missão"); [2, 4, 7, 9].forEach((v, i) => carta(v, 340 + i * 200, 260, "#bbf7d0", seg(t, .2 + i * .1, .5 + i * .1), 130));
     if (t > tr) comando("SÓ 3 TROCAS! 🏅", 640, 420, seg(t, tr, tr + .4), "#16a34a", 300);
     bia8({ x: 1170, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "times"), "pop"], [em(F8, "cartas"), "pop"], [em(F8, "pódio"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["times", "⚽", "Times no recreio:", "o melhor do que sobrou"], ["cartas", "♠️", "Cartas na mão:", "a menor vai para a esquerda"], ["pódio", "🏆", "O pódio:", "1º lugar, depois o 2º…"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 7", [LEO, BIA8]); } }
];

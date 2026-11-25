/* ================= 8º ano · 2027 · 1º bimestre · Missão 5 · Ordenar: o método da bolha ================= */
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

const F0 = "O método da bolha: ordenar trocando vizinhos!",
  F1 = "Na missão passada, a Bia aprendeu que a busca binária é muito rápida. Mas só funciona com a lista ordenada! E a lista de notas da turma estava toda bagunçada. Como o computador coloca uma lista em ordem?",
  F2 = "Um dos jeitos mais simples é o método da bolha. Em inglês, bubble sort. A ideia é comparar vizinhos: dois números que estão lado a lado.",
  F3 = "Os passos são estes. Compare os dois primeiros vizinhos. O da esquerda é maior? Troque os dois de lugar. Não é? Mantenha. Ande uma casa e compare o próximo par. Quando chegar ao fim, terminou uma passada, e o maior número já está no final. Faça outra passada, até uma passada inteira sem nenhuma troca.",
  F4 = "Vamos ordenar seis, três, nove, um. Primeira passada: seis e três? Seis é maior: troca! Seis e nove? Mantém. Nove e um? Troca! O nove, o maior, chegou ao final.",
  F5 = "Segunda passada: três e seis? Mantém. Seis e um? Troca! O seis encostou no nove. Terceira passada: três e um? Troca! E pronto: um, três, seis, nove. Mais uma passada confere: nenhuma troca. Ordenada!",
  F6 = "Por que bolha? Porque, a cada passada, o maior número que ainda falta sobe para o final, como uma bolha subindo na água.",
  F7 = "Uma lista que já está em ordem termina numa passada só, sem nenhuma troca. E a lista ao contrário, quatro, três, dois, um, é a que dá mais trabalho: todo par de vizinhos troca.",
  F8 = "O método da bolha é fácil de entender, mas compara vizinhos muitas e muitas vezes. Por isso fica lento em listas grandes. Existem métodos que trocam menos, e você vai ver um deles na Missão 7.",
  F9 = "A Bia ordenou as notas com o método da bolha, e agora a busca binária funciona. Missão cumprida!",
  F10 = "Onde eu uso isso? Ao organizar as cartas na mão, no baralho, trocando as que estão fora de ordem. Na fila por altura na foto da turma. E nas planilhas e aplicativos, que ordenam nomes, preços e notas com um clique.",
  F11 = "Agora é com vocês: abram a Missão 5 no portal!";
// animação da bolha: passos [i, troca?]; t0 = início de cada passo
function bolha(t, ini, passos, tempos, y, fixos) { let L = ini.slice(); let atual = -1, prog = 0;
  passos.forEach(([i, tr], j) => { const t0 = tempos[j]; if (t < t0) return; atual = j; prog = cl((t - t0) / .7); if (tr && t > t0 + .7) { [L[i], L[i + 1]] = [L[i + 1], L[i]]; } });
  const pos = L.map((v, i) => 340 + i * 200); let hl = -1, troca = false; if (atual >= 0 && t < tempos[atual] + 1.4) { hl = passos[atual][0]; troca = passos[atual][1] && prog < 1; }
  L.forEach((v, i) => { let x = pos[i], yy = y; if (troca && (i === hl || i === hl + 1)) { const d = i === hl ? 1 : -1; x += d * 200 * prog; yy -= Math.sin(prog * Math.PI) * 60 * d; }
    const fix = (fixos || []).filter(f => t > f[1]).some(f => f[0] === i); carta(v, x, yy, fix ? "#bbf7d0" : (i === hl || i === hl + 1) ? "#fde68a" : "#fff", 1, 130); });
  if (hl >= 0 && atual >= 0) { const tr = passos[atual][1]; rotulo(tr ? "TROCA!" : "MANTÉM", 440 + hl * 200, y + 110, tr ? "#fecaca" : "#bbf7d0", 1); }
  return L; }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); for (let i = 0; i < 9; i++) { const yy = 400 - ((t * 120 + i * 60) % 380); g.globalAlpha = .5; g.strokeStyle = "#bae6fd"; g.lineWidth = 3; g.beginPath(); g.arc(700 + (i * 97) % 450, yy, 10 + (i % 3) * 8, 0, 7); g.stroke(); g.globalAlpha = 1; }
     abertura(t, "8º ANO · MISSÃO 5", "O método da bolha", "ORDENAR TROCANDO", "VIZINHOS!", 1.7); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "rápida"), "ding"], [em(F1, "ordenada"), "pop"], [em(F1, "bagunçada"), "alerta"], [em(F1, "Como"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const r = em(F1, "rápida"), bg = em(F1, "bagunçada"), c = em(F1, "Como");
     if (t > r) comando("✂️ BUSCA BINÁRIA: só com lista ORDENADA", 640, 110, seg(t, r, r + .4), "#16a34a", 600);
     if (t > bg) [7, 3, 9, 5, 1, 8].forEach((v, i) => carta(v, 320 + i * 130, 290 + Math.sin(t * 6 + i) * 6, "#fee2e2", seg(t, bg + i * .08, bg + .3 + i * .08), 100));
     if (t > c) palavra("COMO ORDENAR?", 640, 450, seg(t, c, c + .4), 46);
     bia8({ x: 1170, y: 620, s: .8, braco: t > c ? -2.6 : -.6, bracoE: t > c ? 2.6 : .3, olhar: -1, boca: t > bg ? "o" : "", pisca: pisca(t) }); } },
 { chip: "BUBBLE SORT", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "bolha"), "ding"], [em(F2, "bubble"), "pop"], [em(F2, "vizinhos"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const b = em(F2, "bolha"), bb = em(F2, "bubble"), v = em(F2, "vizinhos");
     if (t > b) comando("🫧 MÉTODO DA BOLHA", 640, 120, seg(t, b, b + .4), "#0e7490", 360); if (t > bb) rotulo("em inglês: bubble sort", 640, 185, "#bae6fd", seg(t, bb, bb + .4));
     if (t > v) { carta(6, 560, 320, "#fde68a", seg(t, v, v + .4), 130); carta(3, 720, 320, "#fde68a", seg(t, v + .2, v + .6), 130); rotulo("VIZINHOS = LADO A LADO", 640, 440, "#fde68a", seg(t, v + .5, v + .9)); } } },
 { chip: "OS PASSOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Compare"), "pop"], [em(F3, "Troque"), "pop"], [em(F3, "Ande"), "pop"], [em(F3, "passada"), "ding"], [em(F3, "nenhuma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); comando("📋 OS PASSOS DA BOLHA", 640, 80, seg(t, 0, .4), "#2563eb", 380);
     [["Compare", "1 · Compare os 2 primeiros vizinhos", "#2563eb"], ["Troque", "2 · O da esquerda é MAIOR? TROQUE. Não? MANTENHA", "#7c3aed"], ["Ande", "3 · Ande uma casa e compare o próximo par", "#0e7490"], ["passada", "4 · Chegou ao fim? 1 PASSADA: o maior foi para o final", "#16a34a"], ["nenhuma", "5 · Repita até uma passada SEM NENHUMA TROCA", "#ea580c"]].forEach(([w, s, c], i) => { const t0 = em(F3, w); comando(s, 640, 150 + i * 74, seg(t, t0, t0 + .4), c, 800); }); } },
 { chip: "1ª PASSADA", fala: F4, legenda: "Vamos ordenar 6, 3, 9, 1. Primeira passada: 6 e 3? 6 é maior: troca! 6 e 9? Mantém. 9 e 1? Troca! O 9, o maior, chegou ao final.",
   sfx: [[.1, "whoosh"], [em(F4, "troca"), "whoosh"], [em(F4, "Mantém"), "pop"], [em(F4, "Troca", 1), "whoosh"], [em(F4, "final"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); comando("1ª PASSADA", 640, 100, seg(t, 0, .4), "#7c3aed", 260); const tm = [em(F4, "seis", 1), em(F4, "Seis", 3), em(F4, "Nove", 2)];
     bolha(t, [6, 3, 9, 1], [[0, 1], [1, 0], [2, 1]], tm, 300, [[3, em(F4, "final")]]); } },
 { chip: "2ª E 3ª PASSADAS", fala: F5, legenda: "Segunda passada: 3 e 6? Mantém. 6 e 1? Troca! O 6 encostou no 9. Terceira passada: 3 e 1? Troca! E pronto: 1, 3, 6, 9. Mais uma passada confere: nenhuma troca. Ordenada!",
   sfx: [[.1, "whoosh"], [em(F5, "Mantém"), "pop"], [em(F5, "Troca"), "whoosh"], [em(F5, "Troca", 1), "whoosh"], [em(F5, "Ordenada"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const p3 = em(F5, "Terceira"), o = em(F5, "Ordenada"); comando(t > p3 ? "3ª PASSADA" : "2ª PASSADA", 640, 100, 1, "#7c3aed", 260);
     const tm = [em(F5, "três"), em(F5, "Seis", 1), em(F5, "três", 1)]; bolha(t, [3, 6, 1, 9], [[0, 0], [1, 1], [0, 1]], tm, 300, [[3, 0], [2, em(F5, "encostou")], [0, em(F5, "pronto")], [1, em(F5, "pronto")]]);
     if (t > o) palavra("1, 3, 6, 9 · ORDENADA!", 640, 500, seg(t, o, o + .4), 44); } },
 { chip: "POR QUE BOLHA?", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "sobe"), "ding"], [em(F6, "bolha"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const s = em(F6, "sobe"); for (let i = 0; i < 12; i++) { const yy = 520 - ((t * 140 + i * 45) % 460); g.globalAlpha = .45; g.strokeStyle = "#bae6fd"; g.lineWidth = 3; g.beginPath(); g.arc(300 + (i * 83) % 700, yy, 8 + (i % 4) * 6, 0, 7); g.stroke(); g.globalAlpha = 1; }
     if (t > s) { const k = cl(seg(t, s, s + 1.6)); [3, 6, 1].forEach((v, i) => carta(v, 380 + i * 170, 320, "#fff", 1, 110)); carta(9, 380 + k * 510, 320 - Math.sin(k * Math.PI) * 120, "#bbf7d0", 1, 110); rotulo("O MAIOR SOBE PARA O FINAL", 640, 460, "#fde68a", seg(t, s + 1, s + 1.4)); } } },
 { chip: "MELHOR E PIOR CASO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "passada"), "ding"], [em(F7, "contrário"), "alerta"], [em(F7, "todo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const ps = em(F7, "passada"), c = em(F7, "contrário");
     if (t > ps - .8) { comando("😃 JÁ ORDENADA: 1 passada, 0 trocas", 640, 130, seg(t, ps - .8, ps - .4), "#16a34a", 560); [1, 2, 3, 4].forEach((v, i) => carta(v, 450 + i * 130, 240, "#bbf7d0", 1, 100)); }
     if (t > c) { comando("😩 AO CONTRÁRIO: todo par troca!", 640, 360, seg(t, c, c + .4), "#dc2626", 560); [4, 3, 2, 1].forEach((v, i) => carta(v, 450 + i * 130, 470 + Math.sin(t * 8 + i) * 4, "#fee2e2", 1, 100)); } } },
 { chip: "CUIDADO: É LENTO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "fácil"), "ding"], [em(F8, "lento"), "alerta"], [em(F8, "Missão"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const f = em(F8, "fácil"), l = em(F8, "lento"), m = em(F8, "Missão");
     cartao("✅ Fácil de entender", 640, 180, 520, "#16a34a", seg(t, f, f + .4)); cartao("🐢 Lento em listas grandes", 640, 300, 520, "#ea580c", seg(t, l, l + .4)); if (t > l) emo("🐢", 400 + ((t - l) * 50) % 480, 400, 50);
     if (t > m) cartao("👉 Missão 7: um método que troca menos", 640, 480, 620, "#7c3aed", seg(t, m, m + .4)); } },
 { chip: "A SOLUÇÃO", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "bolha"), "pop"], [em(F9, "binária"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const b = em(F9, "binária"), m = em(F9, "Missão"); [1, 3, 5, 7, 8, 9].forEach((v, i) => carta(v, 320 + i * 130, 260, "#bbf7d0", seg(t, .2 + i * .1, .5 + i * .1), 100));
     if (t > b) comando("✂️ AGORA A BUSCA BINÁRIA FUNCIONA!", 640, 420, seg(t, b, b + .4), "#16a34a", 560);
     bia8({ x: 1170, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "cartas"), "pop"], [em(F10, "altura"), "pop"], [em(F10, "planilhas"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["cartas", "♠️", "Cartas na mão:", "troca as fora de ordem"], ["altura", "📸", "Foto da turma:", "fila por altura"], ["planilhas", "📊", "Planilhas e apps:", "ordenam com um clique"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 5", [LEO, BIA8]); } }
];

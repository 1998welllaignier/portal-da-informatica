/* ================= 8º ano · 2027 · 1º bimestre · Missão 2 · Mexendo na lista: inserir, remover e contar ================= */
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

const F0 = "Mexendo na lista: inserir, remover e contar!",
  F1 = "A Bia organiza a fila para a apresentação da turma: Ana, Bia, Caio e Duda. Mas aí chegou o Enzo, a Bia precisou sair, e a Gabi pediu para ser a primeira. E agora, quem fica em qual posição?",
  F2 = "Uma lista muda o tempo todo. E são três operações básicas: inserir no fim, inserir numa posição e remover.",
  F3 = "Inserir no fim coloca um item novo depois do último. Ninguém muda de lugar, e o tamanho aumenta um. O Enzo entrou no fim: agora a lista tem cinco.",
  F4 = "Remover tira um item. E quem estava atrás anda uma posição para a frente. A Bia saiu: o Caio, que estava na posição três, passou para a dois. E o tamanho diminuiu um.",
  F5 = "Inserir numa posição coloca o item no meio, ou no começo. Aí, quem estava dali para trás anda uma posição para trás. A Gabi entrou na posição um, e todo mundo andou uma casa.",
  F6 = "E para contar? A gente percorre a lista com uma variável contadora, que começa em zero e soma um cada vez que o item passa no teste. Quantas notas são maiores ou iguais a cinco na lista oito, quatro, seis, três, nove? Oito, sim: um. Quatro, não. Seis, sim: dois. Três, não. Nove, sim: três! A resposta é três.",
  F7 = "A fila ficou assim: Gabi, Ana, Caio, Duda e Enzo. Cada um sabe sua posição, e ninguém se perdeu. Missão cumprida!",
  F8 = "Onde eu uso isso? No carrinho da loja online: adicionar é inserir, a lixeira é remover, e o número no ícone é o tamanho. Na playlist, tocar a seguir insere a música numa posição do meio. E, na lista de presença, contar quantos vieram é usar um contador.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";
function fila(y, itens, k, cor, hl, novo) { itens.forEach((s, i) => { const x = 330 + i * 150; caixa(x, y, s, novo === i ? "#bbf7d0" : hl === i ? "#fde68a" : "#fff", k, 130); rotulo(String(i + 1), x, y - 44, "#93c5fd", k); }); comando("FILA", 150, y, k, cor || "#2563eb", 120); rotulo("tamanho " + itens.length, 150, y + 50, "#fde68a", k); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "alerta"], [1.1, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); [["➕", "#16a34a"], ["➖", "#dc2626"], ["🔢", "#f59e0b"]].forEach(([e, c], i) => { const k = seg(t, .3 + i * .3, .6 + i * .3); if (k > 0) { g.fillStyle = c; g.globalAlpha = cl(k); g.beginPath(); g.arc(700 + i * 160, 230, 60, 0, 7); g.fill(); g.globalAlpha = 1; emo(e, 700 + i * 160, 252, 60); } });
     abertura(t, "8º ANO · MISSÃO 2", "Mexendo na lista", "INSERIR, REMOVER", "E CONTAR!", 1.7); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Enzo"), "pop"], [em(F1, "sair"), "alerta"], [em(F1, "primeira"), "pop"], [em(F1, "agora"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const ag = em(F1, "agora"); fila(180, ["Ana", "Bia", "Caio", "Duda"], seg(t, .4, .8));
     [["Enzo", "Enzo", 900, 340], ["sair", "Bia sai", 450, 340], ["primeira", "Gabi", 300, 440]].forEach(([w, s, x, y], i) => { const t0 = em(F1, w); if (t > t0) cartao(s, x + Math.sin(t * 4 + i) * 6, y, 170, ["#16a34a", "#dc2626", "#7c3aed"][i], seg(t, t0, t0 + .4)); });
     if (t > ag) palavra("QUEM FICA ONDE?", 760, 520, seg(t, ag, ag + .4), 40);
     bia8({ x: 1160, y: 620, s: .8, braco: t > ag ? -2.6 : -.6, bracoE: t > ag ? 2.6 : .3, olhar: -1, boca: t > ag ? "o" : "", pisca: pisca(t) }); } },
 { chip: "3 OPERAÇÕES", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "fim"), "pop"], [em(F2, "posição"), "pop"], [em(F2, "remover"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("AS 3 OPERAÇÕES BÁSICAS", 640, 110, seg(t, 0, .4), 46);
     [["fim", "➕ INSERIR NO FIM", "#16a34a"], ["posição", "➕ INSERIR NUMA POSIÇÃO", "#7c3aed"], ["remover", "➖ REMOVER", "#dc2626"]].forEach(([w, s, c], i) => { const t0 = em(F2, w); cartao(s, 640, 230 + i * 110, 560, c, seg(t, t0, t0 + .4)); }); } },
 { chip: "➕ INSERIR NO FIM", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "último"), "pop"], [em(F3, "Ninguém"), "ding"], [em(F3, "Enzo"), "pop"], [em(F3, "cinco"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const e = em(F3, "Enzo"), n = em(F3, "Ninguém");
     const L = t > e ? ["Ana", "Bia", "Caio", "Duda", "Enzo"] : ["Ana", "Bia", "Caio", "Duda"]; fila(250, L, 1, "#16a34a", -1, t > e ? 4 : -1);
     if (t > n) rotulo("NINGUÉM MUDA DE LUGAR", 640, 380, "#bbf7d0", seg(t, n, n + .4)); if (t > e) rotulo("TAMANHO: 4 → 5", 640, 430, "#fde68a", seg(t, e + .5, e + .9)); } },
 { chip: "➖ REMOVER", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "tira"), "alerta"], [em(F4, "frente"), "whoosh"], [em(F4, "Caio"), "pop"], [em(F4, "diminuiu"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const sa = em(F4, "saiu"), c = em(F4, "Caio"), d = em(F4, "diminuiu");
     const tirou = t > sa + .6; const L = tirou ? ["Ana", "Caio", "Duda", "Enzo"] : ["Ana", "Bia", "Caio", "Duda", "Enzo"];
     fila(250, L, 1, "#dc2626", tirou && t > c ? 1 : -1); if (t > sa && !tirou) xVermelho(480, 250, 36, seg(t, sa, sa + .3));
     if (tirou) { seta(760, 330, 640, 330, 1, "#fde68a"); rotulo("TODOS ANDAM UMA POSIÇÃO PARA A FRENTE", 640, 390, "#fde68a", seg(t, sa + .6, sa + 1)); }
     if (t > c) rotulo("Caio: posição 3 → 2", 640, 440, "#fecaca", seg(t, c, c + .4)); if (t > d) rotulo("TAMANHO: 5 → 4", 640, 490, "#fde68a", seg(t, d, d + .4)); } },
 { chip: "➕ INSERIR NUMA POSIÇÃO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "meio"), "pop"], [em(F5, "trás", 1), "whoosh"], [em(F5, "Gabi"), "pop"], [em(F5, "casa"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const gb = em(F5, "Gabi"), tr = em(F5, "trás", 1);
     const L = t > gb + .4 ? ["Gabi", "Ana", "Caio", "Duda", "Enzo"] : ["Ana", "Caio", "Duda", "Enzo"]; fila(250, L, 1, "#7c3aed", -1, t > gb + .4 ? 0 : -1);
     if (t > gb && t < gb + .4) cartao("Gabi", 330, 150, 130, "#7c3aed", 1);
     if (t > tr) { seta(520, 330, 640, 330, 1, "#fde68a"); rotulo("QUEM ESTAVA ALI ANDA UMA POSIÇÃO PARA TRÁS", 640, 390, "#fde68a", seg(t, tr, tr + .4)); } } },
 { chip: "🔢 CONTAR", fala: F6, legenda: "E para contar? A gente percorre a lista com uma variável contadora, que começa em 0 e soma 1 cada vez que o item passa no teste. Quantas notas são maiores ou iguais a 5 na lista 8, 4, 6, 3, 9? 8, sim: 1. 4, não. 6, sim: 2. 3, não. 9, sim: 3! A resposta é 3.",
   sfx: [[.1, "whoosh"], [em(F6, "contadora"), "ding"], [em(F6, "sim"), "pop"], [em(F6, "sim", 1), "pop"], [em(F6, "sim", 2), "pop"], [em(F6, "resposta"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const ct = em(F6, "contadora"), q = em(F6, "Quantas"), r = em(F6, "resposta");
     const passos = [em(F6, "Oito", 1), em(F6, "Quatro", 1), em(F6, "Seis", 1), em(F6, "Três", 1), em(F6, "Nove", 1)].map((x, i) => i === 0 ? em(F6, "sim") - .6 : x);
     const NT = [8, 4, 6, 3, 9], ok = [1, 0, 1, 0, 1]; const feito = passos.filter(x => t > x).length;
     if (t > q) NT.forEach((v, i) => { carta(v, 330 + i * 140, 200, i === feito - 1 ? "#fde68a" : "#fff", seg(t, q + i * .1, q + .3 + i * .1), 100); if (i < feito) (ok[i] ? visto : xVermelho)(330 + i * 140, 300, 22, 1); });
     if (t > q) rotulo("TESTE: nota ≥ 5?", 610, 110, "#bae6fd", seg(t, q, q + .4));
     const cont = ok.slice(0, feito).reduce((a, b) => a + b, 0); if (t > ct) { g.fillStyle = "#0f172a"; rr(470, 360, 300, 120, 18); g.fill(); g.fillStyle = "#94a3b8"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("CONTADOR", 620, 395); g.fillStyle = "#facc15"; g.font = `900 56px ${F}`; g.fillText(String(cont), 620, 458); }
     if (t > r) visto(800, 380, 26, seg(t, r, r + .4)); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Gabi"), "pop"], [em(F7, "posição"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const m = em(F7, "Missão"); fila(230, ["Gabi", "Ana", "Caio", "Duda", "Enzo"], seg(t, .2, .8), "#16a34a");
     bia8({ x: 1160, y: 620, s: .8, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "carrinho"), "pop"], [em(F8, "playlist"), "pop"], [em(F8, "presença"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["carrinho", "🛒", "Carrinho da loja:", "adicionar, lixeira e tamanho"], ["playlist", "🎵", "Playlist:", "“tocar a seguir” insere no meio"], ["presença", "✅", "Lista de presença:", "contar quantos vieram"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 2", [LEO, BIA8]); } }
];

/* ================= 8º ano · 2027 · 1º bimestre · Missão 3 · Busca sequencial ================= */
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

const F0 = "Busca sequencial: procurar um por um!",
  F1 = "O Léo perdeu a chave do armário da sala de informática. Tem dez gavetas, e ele não lembra em qual guardou. O que fazer?",
  F2 = "O jeito mais simples: abrir a primeira gaveta, depois a segunda, depois a terceira, até encontrar. Isso se chama busca sequencial, ou busca linear.",
  F3 = "O algoritmo tem cinco passos. Um: comece na posição um. Dois: compare o item com o que você procura. Três: é igual? Achou! Diga a posição e pare. Quatro: não é? Vá para a próxima posição e volte ao passo dois. Cinco: acabou a lista sem achar? O item não está na lista.",
  F4 = "Vamos procurar o nove na lista cinco, oito, dois, nove, quatro. Primeira comparação: cinco. Não é. Segunda: oito. Não é. Terceira: dois. Não é. Quarta: nove. Achou! Está na posição quatro.",
  F5 = "Cada vez que olhamos um item, fazemos uma comparação. Quanto mais comparações, mais lenta a busca. Numa lista de mil itens, se o procurado for o primeiro, é uma comparação só. Esse é o melhor caso. Mas, se for o último, ou se nem estiver na lista, são mil comparações. Esse é o pior caso.",
  F6 = "A busca sequencial tem uma vantagem: funciona em qualquer lista, ordenada ou bagunçada. Mas, em listas muito grandes, ela pode ficar lenta.",
  F7 = "O Léo abriu gaveta por gaveta e achou a chave na sétima. Sete comparações! Missão cumprida!",
  F8 = "Onde eu uso isso? Quando você procura uma foto rolando a galeria do celular, uma por uma. Quando procura seu nome numa lista de aprovados fora de ordem. E o Ctrl F do navegador procura a palavra olhando o texto do começo ao fim.",
  F9 = "Agora é com vocês: abram a Missão 3 no portal!";
function gavetas(x0, y0, n, abertas, achou, k) { for (let i = 0; i < n; i++) { const kk = seg(k, i * .05, .3 + i * .05) || (k >= 1 ? 1 : 0); if (kk <= 0) continue; const x = x0 + (i % 5) * 150, y = y0 + Math.floor(i / 5) * 140, ab = i < abertas;
    g.fillStyle = "#92400e"; rr(x - 62, y - 50, 124, 100, 10); g.fill(); g.fillStyle = ab ? "#451a03" : "#b45309"; rr(x - 54, y - 42 + (ab ? 18 : 0), 108, 84 - (ab ? 18 : 0), 8); g.fill();
    g.fillStyle = "#fde68a"; rr(x - 16, y - 6 + (ab ? 22 : 0), 32, 10, 4); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), x, y - 56);
    if (ab && i === achou) emo("🔑", x, y + 20, 40); else if (ab) xVermelho(x + 40, y - 30, 12, 1); } }
const L9 = [5, 8, 2, 9, 4];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1, "pop"], [1.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3f1d0b"); gavetas(780, 290, 3, Math.min(3, Math.floor(t * 1.5)), 2, 1);
     abertura(t, "8º ANO · MISSÃO 3", "Busca sequencial", "PROCURAR", "UM POR UM!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "chave"), "alerta"], [em(F1, "dez"), "pop"], [em(F1, "fazer"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const c = em(F1, "chave"), d = em(F1, "dez"), f = em(F1, "fazer");
     if (t > c) { emo("🔑", 640, 140, 70); if (t > c + .4) g.save(), g.globalAlpha = .9, emo("❓", 700, 110, 40), g.restore(); }
     if (t > d) gavetas(340, 250, 10, 0, -1, seg(t, d, d + 1));
     leo({ x: 140, y: 620, s: .85, braco: t > f ? -2.6 : -.6, bracoE: t > f ? 2.6 : .3, olhar: 1, boca: t > c ? "o" : "", pisca: pisca(t) }); } },
 { chip: "BUSCA SEQUENCIAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "primeira"), "click"], [em(F2, "segunda"), "click"], [em(F2, "terceira"), "click"], [em(F2, "sequencial"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const p = em(F2, "primeira"), s = em(F2, "sequencial");
     const ab = t > p ? Math.min(5, 1 + Math.floor((t - p) / .7)) : 0; gavetas(340, 160, 5, ab, -1, 1);
     if (t > s) { comando("🔎 BUSCA SEQUENCIAL (OU LINEAR)", 640, 370, seg(t, s, s + .4), "#16a34a", 520); rotulo("um por um, em ordem, até achar", 640, 440, "#bbf7d0", seg(t, s + .4, s + .8)); } } },
 { chip: "O ALGORITMO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Um"), "pop"], [em(F3, "Dois"), "pop"], [em(F3, "Três"), "pop"], [em(F3, "Quatro"), "pop"], [em(F3, "Cinco"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); comando("📋 O ALGORITMO", 640, 80, seg(t, 0, .4), "#2563eb", 300);
     [["Um", "1 · Comece na posição 1"], ["Dois", "2 · Compare com o procurado"], ["Três", "3 · Igual? ACHOU! Diga a posição"], ["Quatro", "4 · Não? Próxima posição, volte ao 2"], ["Cinco", "5 · Acabou a lista? NÃO ESTÁ"]].forEach(([w, s], i) => { const t0 = em(F3, w); comando(s, 640, 150 + i * 74, seg(t, t0, t0 + .4),  ["#2563eb", "#7c3aed", "#16a34a", "#f59e0b", "#dc2626"][i], 640); }); } },
 { chip: "EXEMPLO: ACHAR O 9", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Primeira"), "pop"], [em(F4, "Segunda"), "pop"], [em(F4, "Terceira"), "pop"], [em(F4, "Quarta"), "pop"], [em(F4, "Achou"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const ts = ["Primeira", "Segunda", "Terceira", "Quarta"].map(w => em(F4, w)), a = em(F4, "Achou");
     const k = ts.filter(x => t > x).length; comando("PROCURAR: 9", 640, 90, seg(t, 0, .4), "#7c3aed", 240);
     L9.forEach((v, i) => { carta(v, 380 + i * 130, 260, i === k - 1 ? (i === 3 && t > a ? "#bbf7d0" : "#fde68a") : "#fff", 1, 100); rotulo("pos. " + (i + 1), 380 + i * 130, 350, "#c4b5fd", 1); if (i < k - 1 || (i === k - 1 && i < 3 && t > ts[i] + .7)) xVermelho(380 + i * 130, 190, 14, 1); });
     if (k) { g.fillStyle = "#0f172a"; rr(500, 400, 280, 90, 16); g.fill(); g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(k + "ª comparação", 640, 455); }
     if (t > a) palavra("ACHOU! POSIÇÃO 4", 640, 560, seg(t, a, a + .4), 40); } },
 { chip: "MELHOR E PIOR CASO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "comparação"), "ding"], [em(F5, "lenta"), "alerta"], [em(F5, "melhor"), "ding"], [em(F5, "pior"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const mi = em(F5, "mil"), me = em(F5, "melhor"), pi = em(F5, "pior");
     if (t > mi) { rotulo("LISTA DE 1.000 ITENS", 640, 110, "#bae6fd", seg(t, mi, mi + .4)); for (let i = 0; i < 100; i++) { g.fillStyle = i === 0 && t > me - .8 ? "#22c55e" : i === 99 && t > pi - 1 ? "#ef4444" : "#e2e8f0"; g.fillRect(190 + i * 9, 140, 7, 50); } }
     if (t > me - .8) { cartao("😃 MELHOR CASO: 1 comparação", 440, 300, 540, "#16a34a", seg(t, me - .8, me - .4)); }
     if (t > pi - 1) { cartao("😩 PIOR CASO: 1.000 comparações", 860, 420, 500, "#dc2626", seg(t, pi - 1, pi - .6)); rotulo("é o último… ou nem está na lista", 860, 490, "#fecaca", seg(t, pi, pi + .4)); } } },
 { chip: "VANTAGEM E CUIDADO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "qualquer"), "ding"], [em(F6, "lenta"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const q = em(F6, "qualquer"), l = em(F6, "lenta");
     cartao("✅ Funciona em QUALQUER lista", 640, 200, 600, "#16a34a", seg(t, q, q + .4)); rotulo("ordenada ou bagunçada", 640, 285, "#bbf7d0", seg(t, q + .4, q + .8));
     cartao("🐢 Em lista muito grande, fica lenta", 640, 380, 600, "#ea580c", seg(t, l, l + .4)); if (t > l) emo("🐢", 640 + ((t - l) * 40) % 400 - 200, 500, 50); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "gaveta"), "click"], [em(F7, "sétima"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const gv = em(F7, "gaveta"), m = em(F7, "Missão");
     const ab = t > gv ? Math.min(7, 1 + Math.floor((t - gv) / .35)) : 0; gavetas(340, 160, 10, ab, 6, 1);
     if (ab === 7) comando("7 COMPARAÇÕES", 640, 470, 1, "#16a34a", 280);
     leo({ x: 140, y: 620, s: .8, braco: ab === 7 ? -2.4 : -.6, bracoE: ab === 7 ? 2.4 : .3, olhar: 1, boca: ab === 7 ? "riso" : "", pisca: pisca(t) }); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "foto"), "pop"], [em(F8, "aprovados"), "pop"], [em(F8, "Ctrl"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["foto", "🖼️", "Galeria do celular:", "rolar foto por foto"], ["aprovados", "📃", "Lista de aprovados:", "fora de ordem, um por um"], ["Ctrl", "⌨️", "Ctrl + F:", "procura do começo ao fim"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 3", [LEO, BIA8]); } }
];

/* ================= 8º ano · 2027 · 1º bimestre · Missão 4 · Busca binária (v2, padrão completo: o Show do Meio) ================= */
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
/* ===== peças do "Show do Meio" (8º M4 v2) ===== */
const io2 = k => k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
// câmera: kf = [[t, x, y, zoom], ...] — interpola e aplica (centro da tela vai para x,y)
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k);
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = "#0d1631"; g.fillRect(0, 0, 1280, 720); g.restore(); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
function palco(t, luzOn) { // fundo de estúdio de TV com camadas
  const gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, "#1e1b4b"); gr.addColorStop(1, "#0b0a24"); g.fillStyle = gr; g.fillRect(-400, -300, 2080, 1320);
  for (let i = 0; i < 14; i++) { g.fillStyle = i % 2 ? "#7f1d1d" : "#991b1b"; g.fillRect(-400 + i * 150, -300, 150, 700); } // cortina ao fundo
  g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(-400, -300, 2080, 700);
  for (let i = 0; i < 24; i++) { const on = (Math.floor(t * 4) + i) % 3 === 0; g.fillStyle = on ? "#fde047" : "#78350f"; g.beginPath(); g.arc(-60 + i * 60, 30, 7, 0, 7); g.fill(); } // lâmpadas
  g.fillStyle = "#312e81"; g.fillRect(-400, 470, 2080, 60); g.fillStyle = "#4338ca"; g.fillRect(-400, 470, 2080, 8); // palco
  if (luzOn !== false) for (let i = 0; i < 2; i++) { const a = Math.sin(t * 1.3 + i * 2) * .35; g.save(); g.translate(200 + i * 880, -40); g.rotate(a); const lg = g.createLinearGradient(0, 0, 0, 560); lg.addColorStop(0, "rgba(255,240,180,.35)"); lg.addColorStop(1, "rgba(255,240,180,0)"); g.fillStyle = lg; g.beginPath(); g.moveTo(-20, 0); g.lineTo(20, 0); g.lineTo(180, 560); g.lineTo(-180, 560); g.closePath(); g.fill(); g.restore(); } }
function plateia(t, humor, y) { y = y || 640; for (let i = 0; i < 18; i++) { const x = 30 + i * 72 + (i % 2) * 20, b = humor === "festa" ? Math.abs(Math.sin(t * 8 + i)) * 14 : humor === "sono" ? 0 : Math.sin(t * 2 + i) * 2;
    g.fillStyle = ["#0f172a", "#1e293b", "#111827"][i % 3]; g.beginPath(); g.arc(x, y - b, 30, Math.PI, 0); g.fill(); g.fillRect(x - 34, y - b, 68, 120);
    if (humor === "sono" && i % 4 === 1) emo("😴", x, y - 40, 26); if (humor === "festa" && i % 3 === 0) emo("🙌", x, y - 60 - b, 26); } }
function regua100(t, x0, w, y, ini, fim, chutes, rotulos) { const X = v => x0 + (v - 1) / 99 * w;
  g.fillStyle = "#0f172a"; rr(x0 - 20, y - 46, w + 40, 92, 20); g.fill();
  for (let v = 1; v <= 100; v++) { const on = v >= ini && v <= fim; g.fillStyle = on ? (v % 10 === 0 ? "#facc15" : "#22c55e") : "#334155"; rr(X(v) - 3.5, y - 26, 7, 52, 3); g.fill(); }
  [1, 25, 50, 75, 100].forEach(v => { g.fillStyle = "#e2e8f0"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(v), X(v), y + 70); });
  chutes.forEach(([v, s], j) => { g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(X(v), y - 30); g.lineTo(X(v) - 13, y - 56); g.lineTo(X(v) + 13, y - 56); g.fill();
    if (rotulos !== false && (j === chutes.length - 1 || (rotulos !== "ultimo" && Math.abs(chutes[j + 1][0] - v) >= 10))) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
function livroLomb(x, y, w, h, n, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = cor; rr(x, y, w, h, 4); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; rr(x + 4, y + h * .35, w - 8, 30, 4); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(n), x + w / 2, y + h * .35 + 22); g.restore(); }

const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function cel(x, y, v, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 84; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -28, w, 56, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(v, 0, 9); g.restore(); }
function variavel(x, y, nome, val, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#ca8a04"; rr(-90, -60, 180, 36, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("📦 " + nome, 0, -36);
  g.fillStyle = "#fff"; rr(-70, -18, 140, 76, 12); g.fill(); g.strokeStyle = cor || "#ca8a04"; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `900 48px ${F}`; g.fillText(String(val), 0, 40); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
/* ===== 8º M3 · Busca sequencial (v2) ===== */
const ITENS = ["🧦", "📎", "✏️", "🧻", "📏", "🖍️", "🔑", "📒", "🔌", "🧲"];
// armário com 10 gavetas (2 colunas); abertas = quantas já foram abertas (em ordem)
function armario(x, y, abertas, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#78350f"; rr(-20, -20, 400, 410, 18); g.fill();
  for (let i = 0; i < 10; i++) { const cx = (i % 2) * 190, cy = Math.floor(i / 2) * 76, ab = i < abertas; g.fillStyle = ab ? "#fde68a" : "#b45309"; rr(cx, cy, 170, 64, 10); g.fill(); if (hl === i) { g.strokeStyle = "#fde047"; g.lineWidth = 6; g.stroke(); }
    g.fillStyle = ab ? NAVY : "#fde68a"; g.font = `900 22px ${F}`; g.textAlign = "left"; g.fillText(String(i + 1), cx + 14, cy + 40);
    if (ab) { g.font = `40px ${F}`; g.textAlign = "center"; g.fillText(ITENS[i], cx + 110, cy + 46); } else { g.fillStyle = "#fbbf24"; rr(cx + 70, cy + 26, 60, 12, 6); g.fill(); } }
  g.restore(); }
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
const F0 = "Busca sequencial: procurar um por um!",
  F1 = "O Léo perdeu a chave do armário da sala de informática. Tem dez gavetas, e ele não lembra em qual guardou. O que fazer?",
  F2 = "O jeito mais simples: abrir a primeira gaveta, depois a segunda, depois a terceira, até encontrar. Isso se chama busca sequencial, ou busca linear.",
  F3 = "O algoritmo tem cinco passos. Um: comece na posição um. Dois: compare o item com o que você procura. Três: é igual? Achou! Diga a posição e pare. Quatro: não é? Vá para a próxima posição e volte ao passo dois. Cinco: acabou a lista sem achar? O item não está na lista.",
  F4 = "Vamos procurar o nove na lista cinco, oito, dois, nove, quatro. Primeira comparação: cinco. Não é. Segunda: oito. Não é. Terceira: dois. Não é. Quarta: nove. Achou! Está na posição quatro.",
  F5 = "Cada vez que olhamos um item, fazemos uma comparação. Quanto mais comparações, mais lenta a busca, e menor a eficiência. Numa lista de mil itens, se o procurado for o primeiro, é uma comparação só. Esse é o melhor caso. Mas, se for o último, ou se nem estiver na lista, são mil comparações. Esse é o pior caso.",
  F6 = "A busca sequencial tem uma vantagem: funciona em qualquer lista, ordenada ou bagunçada. Mas, em listas muito grandes, ela pode ficar lenta.",
  F7 = "O Léo abriu gaveta por gaveta e achou a chave na sétima. Sete comparações! Missão cumprida!",
  F8 = "Onde eu uso isso? Quando você procura uma foto rolando a galeria do celular, uma por uma. Quando procura seu nome numa lista de aprovados fora de ordem. E o Ctrl F do navegador procura a palavra olhando o texto do começo ao fim.",
  F9 = "Agora é com vocês: abram a Missão 3 no portal!";
const L83 = { 1: F1.replace("dez gavetas", "10 gavetas"),
  3: "O algoritmo tem 5 passos. 1: comece na posição 1. 2: compare o item com o que você procura. 3: é igual? Achou! Diga a posição e pare. 4: não é? Vá para a próxima posição e volte ao passo 2. 5: acabou a lista sem achar? O item não está na lista.",
  4: "Vamos procurar o 9 na lista 5, 8, 2, 9, 4. Primeira comparação: 5. Não é. Segunda: 8. Não é. Terceira: 2. Não é. Quarta: 9. Achou! Está na posição 4.",
  5: F5.replace("lista de mil itens", "lista de 1.000 itens").replace("são mil comparações", "são 1.000 comparações"),
  7: F7.replace("Sete comparações", "7 comparações") };
const LST = [5, 8, 2, 9, 4], LX = i => 240 + i * 150;

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 320, 1.2], [1.8, 640, 360, 1]]); g.translate(500, 120); g.scale(.75, .75); armario(0, 0, Math.min(7, Math.floor(t * 4)), 1, Math.min(6, Math.floor(t * 4) - 1)); g.restore();
     abertura(t, "8º ANO · MISSÃO 3", "Busca sequencial", "PROCURAR", "UM POR UM!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L83[1], sfx: [[.1, "whoosh"], [em(F1, "chave"), "alerta"], [em(F1, "gavetas"), "pop"], [em(F1, "fazer"), "zum"]],
   draw(t, D) { const ch = em(F1, "chave"), ga = em(F1, "gavetas"), fa = em(F1, "fazer"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 820, 300, 1.08], [ga, 640, 330, 1], [fa, 640, 360, 1]]); armario(560, 90, 0, seg(t, .1, .5));
     leo({ x: 260, y: 560, s: .9, olhar: 1, braco: -1.2, bracoE: t > fa ? 2.4 : .3, boca: t > ch ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > ch) balao("Cadê a chave? 🔑", 300, 170, seg(t, ch, ch + .4)); if (t > ga) etiqueta("10 gavetas", 1110, 470, 940, 420, seg(t, ga, ga + .4)); if (t > fa) palavra("?", 1110, 160, seg(t, fa, fa + .4), 90); } },
 { chip: "BUSCA SEQUENCIAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "primeira"), "pop"], [em(F2, "segunda"), "pop"], [em(F2, "terceira"), "pop"], [em(F2, "sequencial"), "ding"]],
   draw(t, D) { const pr = em(F2, "primeira"), se = em(F2, "sequencial"), li = em(F2, "linear"); fundoEscuro(t, "#14532d"); const ab = t < pr ? 0 : Math.min(4, 1 + Math.floor((t - pr) * 1.2));
     g.save(); camera(t, [[0, 640, 360, 1], [pr, 520, 300, 1.06], [se, 640, 360, 1]]); armario(160, 120, ab, 1, ab - 1); leo({ x: 1150, y: 560, s: .75, olhar: -1, braco: -1, bracoE: .3, boca: "riso", pisca: pisca(t) });
     for (let i = 0; i < ab - 1; i++) { g.fillStyle = "#fde047"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(i % 2 ? "↙" : "➜", 160 + (i % 2 ? 95 : 180), 120 + Math.floor(i / 2) * 76 + (i % 2 ? 76 : 40)); } g.restore();
     if (t > se) { palavra("BUSCA SEQUENCIAL", 800, 160, seg(t, se, se + .4), 52); cartaoC("um item depois do outro, em ordem", 800, 260, 480, "#fff", seg(t, se + .3, se + .7)); } if (t > li) rotulo("ou: busca linear", 800, 340, "#86efac", seg(t, li, li + .4)); } },
 { chip: "O ALGORITMO", fala: F3, legenda: L83[3], sfx: [[.1, "whoosh"], [emE(F3, "um"), "pop"], [emE(F3, "dois"), "pop"], [emE(F3, "três"), "ding"], [emE(F3, "quatro"), "pop"], [emE(F3, "cinco", 1), "pop"]],
   draw(t, D) { const ts = [emE(F3, "um"), emE(F3, "dois"), emE(F3, "três"), emE(F3, "quatro"), emE(F3, "cinco", 1)], vo = em(F3, "volte"); fundoEscuro(t, "#0f172a"); const at = ts.filter(x => t > x).length - 1;
     const P = ["Comece na posição 1", "Compare o item com o procurado", "É igual? Achou! Diga a posição e pare", "Não é? Vá para a próxima e volte ao 2", "Acabou a lista? O item não está nela"];
     g.save(); camera(t, [[0, 600, 340, 1], [ts[2], 560, 320, 1.04], [ts[4] + 2, 600, 340, 1]]); P.forEach((s, i) => passo(i + 1, s, 120, 140 + i * 76, 620, seg(t, ts[i], ts[i] + .4), at === i));
     if (t > vo) { g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(745, 368); g.bezierCurveTo(840, 360, 840, 224, 745, 216); g.stroke(); g.fillStyle = "#fde047"; g.beginPath(); g.moveTo(745, 216); g.lineTo(765, 204); g.lineTo(765, 228); g.fill(); rotulo("repete!", 880, 300, "#fde68a", seg(t, vo, vo + .4)); }
     robozinho(1100, 300, .9, t, at >= 2); g.restore(); palavra("5 PASSOS", 560, 80, seg(t, 0, .4), 50); } },
 { chip: "UM EXEMPLO", fala: F4, legenda: L83[4], sfx: [[.1, "whoosh"], [em(F4, "Primeira"), "alerta"], [em(F4, "Segunda"), "alerta"], [em(F4, "Terceira"), "alerta"], [em(F4, "Quarta"), "ding"], [em(F4, "Achou"), "festa"]],
   draw(t, D) { const qu = em(F4, "lista"), ts = [em(F4, "Primeira"), em(F4, "Segunda"), em(F4, "Terceira"), em(F4, "Quarta")], ac = em(F4, "Achou"), po = em(F4, "posição"); fundoEscuro(t, "#312e81"); const at = ts.filter(x => t > x).length - 1;
     g.save(); camera(t, [[0, 640, 360, 1], [ts[0], 600, 340, 1.03], [po + 1, 640, 360, 1]]);
     caixa(170, 160, "procuro: 9", "#fde68a", seg(t, .2, .6), 200);
     LST.forEach((v, i) => { cel(LX(i) + 100, 300, String(v), at === i ? (i === 3 ? "#86efac" : "#fde68a") : "#fff", seg(t, qu + i * .15, qu + .4 + i * .15), 110); rotulo(String(i + 1), LX(i) + 100, 360, "#c4b5fd", seg(t, qu + i * .15, qu + .4 + i * .15));
       if (i <= at) { if (i === 3) visto(LX(i) + 100, 420, 24, 1); else xVermelho(LX(i) + 100, 420, 20, 1); } });
     if (at >= 0) { lupa(LX(at) + 100, 220, .7); } variavel(1090, 300, "comparações", Math.max(0, at + 1), seg(t, ts[0], ts[0] + .4), "#ca8a04"); g.restore();
     if (t > po) placaShow("Achou na posição 4!", 640, 120, seg(t, po, po + .4), "#86efac"); } },
 { chip: "MELHOR E PIOR CASO", fala: F5, legenda: L83[5], sfx: [[.1, "whoosh"], [em(F5, "lenta"), "zum"], [em(F5, "mil"), "pop"], [em(F5, "melhor"), "ding"], [em(F5, "último"), "zum"], [em(F5, "pior"), "alerta"]],
   draw(t, D) { const co = em(F5, "comparação"), le = em(F5, "lenta"), mi = em(F5, "mil"), pr = em(F5, "primeiro"), me = em(F5, "melhor"), ul = em(F5, "último"), pi = em(F5, "pior"); fundoEscuro(t, "#0f172a");
     if (t < mi) { palavra("1 OLHADA = 1 COMPARAÇÃO", 560, 110, seg(t, co, co + .4), 46); if (t > le) cartaoC("mais comparações = menos eficiência 🐢", 640, 300, 600, "#fff", seg(t, le, le + .4)); leo({ x: 640, y: 560, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); return; }
     const fill = t > ul ? Math.min(1000, Math.floor((t - ul) * 500)) : 0; g.save(); camera(t, [[mi, 640, 330, 1], [pi + 1, 640, 330, 1]]);
     for (let i = 0; i < 1000; i++) { const x = 140 + (i % 50) * 20, y = 130 + Math.floor(i / 50) * 14; g.fillStyle = i === 0 && t > pr && t < ul ? "#22c55e" : i < fill ? "#ef4444" : "#475569"; g.fillRect(x, y, 16, 11); }
     g.restore(); palavra("LISTA DE 1.000 ITENS", 560, 90, seg(t, mi, mi + .4), 44);
     if (t > me && t < ul) { etiqueta("melhor caso: 1 comparação", 330, 455, 148, 136, seg(t, me, me + .4)); } if (t > pi) placaShow("pior caso: 1.000 comparações", 760, 450, seg(t, pi, pi + .4), "#fca5a5"); } },
 { chip: "VANTAGEM", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "ordenada"), "ding"], [em(F6, "bagunçada"), "ding"], [em(F6, "lenta"), "zum"]],
   draw(t, D) { const or = em(F6, "ordenada"), ba = em(F6, "bagunçada"), gr = em(F6, "grandes"), le = em(F6, "lenta"); fundoEscuro(t, "#14532d");
     palavra("VANTAGEM", 560, 90, seg(t, 0, .4), 52);
     [[or, "ordenada", [2, 4, 5, 8, 9], "#86efac"], [ba, "bagunçada", [5, 8, 2, 9, 4], "#fca5a5"]].forEach(([t0, nm, v, c], r) => { const y = 200 + r * 110, k = seg(t, t0, t0 + .4); if (k <= 0) return; rotulo(nm, 150, y + 7, c, k); v.forEach((x, i) => cel(320 + i * 100, y, String(x), c, k, 84)); visto(860, y, 26, seg(t, t0 + .4, t0 + .7)); });
     if (t > gr) { cartaoC("⚠️ lista muito grande = busca lenta", 640, 440, 560, "#fde68a", seg(t, gr, gr + .4)); } if (t > le) emo("🐢", 1050 + Math.sin(t) * 10, 470, 90);
     leo({ x: 1150, y: 560, s: .62, olhar: -1, braco: -2.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L83[7], sfx: [[.1, "whoosh"], [em(F7, "gaveta"), "pop"], [em(F7, "sétima"), "festa"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const ga = em(F7, "gaveta"), se = em(F7, "sétima"), mc = em(F7, "Missão"); fundoEscuro(t, "#312e81"); const ab = t < ga ? 0 : Math.min(7, 1 + Math.floor((t - ga) / Math.max(.3, (se - ga) / 6.5)));
     g.save(); camera(t, [[0, 640, 360, 1], [se, 520, 380, 1.05], [mc, 640, 380, 1]]); g.save(); g.translate(180, 215); g.scale(.8, .8); armario(0, 0, ab, 1, ab - 1); g.restore(); variavel(760, 360, "comparações", ab, 1, "#ca8a04");
     leo({ x: 1100, y: 560, s: .8, olhar: -1, braco: t > se ? -2.6 : .3, bracoE: t > se ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > se && t < mc) placaShow("🔑 achou na gaveta 7!", 760, 480, seg(t, se, se + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "galeria"), "pop"], [em(F8, "aprovados"), "pop"], [em(F8, "Ctrl"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["galeria", "🖼️", "Galeria de fotos:", "uma por uma"], ["aprovados", "📄", "Lista de aprovados:", "fora de ordem"], ["Ctrl", "🔎", "Ctrl + F:", "do começo ao fim"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 3", [LEO, BIA8]); } }
];

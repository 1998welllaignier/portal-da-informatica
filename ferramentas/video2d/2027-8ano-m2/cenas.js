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
function variavel(x, y, nome, val, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#ca8a04"; rr(-90, -60, 180, 36, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("📦 " + nome, 0, -36);
  g.fillStyle = "#fff"; rr(-70, -18, 140, 76, 12); g.fill(); g.strokeStyle = cor || "#ca8a04"; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `900 48px ${F}`; g.fillText(String(val), 0, 40); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
/* ===== 8º M2 · Inserir, remover e contar (v2) ===== */
const KID = { Ana: { camisa: "#ef4444", cabelo: "longo" }, Bia: BIA8, Caio: { camisa: "#3b82f6" }, Duda: { camisa: "#ec4899", cabelo: "longo" }, Enzo: { camisa: "#22c55e" }, Gabi: { camisa: "#a855f7", cabelo: "longo" } };
const kid = (n, o) => boneco(Object.assign({}, KID[n], o));
const SX = i => 260 + i * 150;
function slots(n, y, k) { for (let i = 0; i < n; i++) { const kk = seg(k, i * .08, .3 + i * .08); if (kk <= 0) continue; g.save(); g.globalAlpha = cl(kk); g.fillStyle = "#ddd6fe"; rr(SX(i) - 24, y + 52, 48, 34, 8); g.fill(); g.fillStyle = "#4c1d95"; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), SX(i), y + 76); g.restore(); } }
function celN(n, x, y, hl, a) { if (a <= 0) return; g.save(); g.globalAlpha = cl(a); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(x - 64, y - 30, 128, 60, 12); g.fill(); g.strokeStyle = KID[n] ? KID[n].camisa : NAVY; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(n, x, y + 9); g.restore(); }
// anima a lista de "antes" para "depois" (p de 0 a 1); quem entra cai de cima, quem sai sobe e some
function animLista(antes, depois, p, y, hl) { const e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; const todos = antes.concat(depois.filter(n => !antes.includes(n)));
  todos.forEach(n => { const a = antes.indexOf(n), d = depois.indexOf(n); if (a >= 0 && d >= 0) celN(n, SX(a) + (SX(d) - SX(a)) * e, y, n === hl, 1); else if (d >= 0) celN(n, SX(d), y - 150 * (1 - e), n === hl, e); else celN(n, SX(a), y - 150 * e, n === hl, 1 - e); }); }
function tamanho(x, y, v, k) { variavel(x, y, "tamanho", v, k, "#0891b2"); }
function cel(x, y, v, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 84; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -28, w, 56, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(v, 0, 9); g.restore(); }
const F0 = "Mexendo na lista: inserir, remover e contar!",
  F1 = "A Bia organiza a fila para a apresentação da turma: Ana, Bia, Caio e Duda. Mas aí chegou o Enzo, a Bia precisou sair, e a Gabi pediu para ser a primeira. E agora, quem fica em qual posição?",
  F2 = "Uma lista muda o tempo todo, e cada mudança é uma operação. São três operações básicas: inserir no fim, inserir numa posição e remover.",
  F3 = "Inserir no fim coloca um item novo depois do último. Ninguém muda de lugar, e o tamanho aumenta um. O Enzo entrou no fim: agora a lista tem cinco.",
  F4 = "Remover tira um item. E quem estava atrás se desloca uma posição para a frente. A Bia saiu: o Caio, que estava na posição três, passou para a dois. E o tamanho diminuiu um.",
  F5 = "Inserir numa posição coloca o item no meio, ou no começo. Aí, quem estava dali para trás precisa se deslocar uma posição para trás. A Gabi entrou na posição um, e todo mundo andou uma casa.",
  F6 = "E para contar? A gente percorre a lista com uma variável contadora, que começa em zero e soma um cada vez que o item passa no teste. Quantas notas são maiores ou iguais a cinco na lista oito, quatro, seis, três, nove? Oito, sim: um. Quatro, não. Seis, sim: dois. Três, não. Nove, sim: três! A resposta é três.",
  F7 = "A fila ficou assim: Gabi, Ana, Caio, Duda e Enzo. Cada um sabe sua posição, e ninguém se perdeu. Missão cumprida!",
  F8 = "Onde eu uso isso? No carrinho da loja online: adicionar é inserir, a lixeira é remover, e o número no ícone é o tamanho. Na playlist, tocar a seguir insere a música numa posição do meio. E, na lista de presença, contar quantos vieram é usar um contador.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";
const L82 = { 2: F2.replace("três operações", "3 operações"), 3: F3.replace("aumenta um", "aumenta 1").replace("tem cinco", "tem 5"),
  4: F4.replace("posição três", "posição 3").replace("a dois", "a 2").replace("diminuiu um", "diminuiu 1"), 5: F5.replace("posição um", "posição 1"),
  6: "E para contar? A gente percorre a lista com uma variável contadora, que começa em 0 e soma 1 cada vez que o item passa no teste. Quantas notas são maiores ou iguais a 5 na lista 8, 4, 6, 3, 9? 8, sim: 1. 4, não. 6, sim: 2. 3, não. 9, sim: 3! A resposta é 3." };
const ORIG = ["Ana", "Bia", "Caio", "Duda"], C1 = ORIG.concat(["Enzo"]), C2 = ["Ana", "Caio", "Duda", "Enzo"], C3 = ["Gabi", "Ana", "Caio", "Duda", "Enzo"];
const NOTAS = [8, 4, 6, 3, 9];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "pop"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 330, 1.3], [1.8, 640, 360, 1]]); palco(t, true); C3.forEach((n, i) => kid(n, { x: SX(i) + 60, y: 500 + (seg(t, .2 + i * .15, .5 + i * .15) < 1 ? -60 * (1 - seg(t, .2 + i * .15, .5 + i * .15)) : 0), s: .62, olhar: 1, braco: Math.sin(t * 4 + i) * .5 - .4, bracoE: .3, boca: "riso", pisca: pisca(t + i) })); g.restore();
     abertura(t, "8º ANO · MISSÃO 2", "Mexendo na lista", "INSERIR, REMOVER", "E CONTAR!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Enzo"), "pop"], [em(F1, "Bia", 1), "whoosh"], [em(F1, "Gabi"), "pop"], [em(F1, "agora"), "alerta"]],
   draw(t, D) { const en = em(F1, "Enzo"), bs = em(F1, "Bia", 1), ga = em(F1, "Gabi"), ag = em(F1, "agora"); g.save(); camera(t, [[0, 600, 380, 1.08], [ag, 640, 360, 1]]); palco(t, false);
     ORIG.forEach((n, i) => { if (n === "Bia") { const p = seg(t, bs, bs + 1.2); if (p >= 1) return; kid(n, { x: SX(i) + p * 900, y: 500, s: .62, olhar: 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); return; }
       kid(n, { x: SX(i), y: 500, s: .62, olhar: t > ga ? -1 : 1, braco: .2, bracoE: .2, boca: t > ag ? "o" : "riso", pisca: pisca(t + i) }); rotulo(n, SX(i), 545, "#fde68a", 1); });
     if (t > en) { const p = seg(t, en, en + 1.2); kid("Enzo", { x: 1350 - (1350 - SX(4)) * p, y: 500, s: .62, olhar: -1, braco: Math.sin(t * 9) * .6, bracoE: -Math.sin(t * 9) * .6, boca: "riso", pisca: pisca(t) }); if (p >= 1) rotulo("Enzo", SX(4), 545, "#86efac", 1); }
     if (t > ga) { kid("Gabi", { x: 100, y: 500, s: .62, olhar: 1, braco: -2.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); rotulo("Gabi", 100, 545, "#d8b4fe", 1); }
     g.restore(); if (t > ga && t < ag) balao("Quero ser a primeira!", 300, 220, seg(t, ga + .2, ga + .6)); if (t > bs && t < ga) balao("Tenho que sair! Tchau!", 760, 220, seg(t, bs, bs + .4));
     if (t > ag) palavra("QUEM FICA ONDE? 🤔", 560, 120, seg(t, ag, ag + .4), 56); } },
 { chip: "3 OPERAÇÕES", fala: F2, legenda: L82[2], sfx: [[.1, "whoosh"], [em(F2, "inserir"), "pop"], [em(F2, "inserir", 1), "pop"], [em(F2, "remover"), "pop"]],
   draw(t, D) { const i1 = em(F2, "inserir"), i2 = em(F2, "inserir", 1), rm = em(F2, "remover"); fundoEscuro(t, "#312e81"); bia8({ x: 1180, y: 600, s: .6, olhar: -1, braco: .3, bracoE: -2.3, boca: "riso", pisca: pisca(t) }); palavra("A LISTA MUDA!", 560, 100, seg(t, 0, .4), 56);
     [[i1, "➕", "inserir no fim", "#86efac"], [i2, "↪️", "inserir numa posição", "#fde68a"], [rm, "➖", "remover", "#fca5a5"]].forEach(([t0, e, s, c], i) => { const k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 330); g.scale(z, z); g.fillStyle = c; rr(-170, -130, 340, 260, 24); g.fill(); g.restore();
       emo(e, x, 320, 90 * z); g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; if (k > .7) g.fillText(s, x, 410); }); } },
 { chip: "INSERIR NO FIM", fala: F3, legenda: L82[3], sfx: [[.1, "whoosh"], [em(F3, "novo"), "pop"], [em(F3, "aumenta"), "ding"], [em(F3, "Enzo"), "pop"]],
   draw(t, D) { const no = em(F3, "novo"), au = em(F3, "aumenta"), en = em(F3, "Enzo"); fundoEscuro(t, "#14532d"); const p = seg(t, no, no + 1);
     g.save(); camera(t, [[0, 640, 360, 1], [no, 700, 330, 1.06], [en + 1, 640, 360, 1]]); slots(t > no ? 5 : 4, 300, seg(t, 0, .8)); animLista(ORIG, C1, p, 300, t > no ? "Enzo" : ""); tamanho(1080, 300, p >= 1 ? 5 : 4, 1);
     bloco(260, 150, 520, "adicione Enzo a FILA", "#0891b2", seg(t, .2, .6), t > no && t < no + 1.5); g.restore();
     palavra("INSERIR NO FIM", 560, 90, seg(t, 0, .4), 54); if (t > au) etiqueta("ninguém muda de lugar", 520, 480, 560, 400, seg(t, au - 1, au - .6)); if (t > au) placaShow("+1", 1180, 400, seg(t, au, au + .3), "#86efac"); } },
 { chip: "REMOVER", fala: F4, legenda: L82[4], sfx: [[.1, "whoosh"], [em(F4, "tira"), "whoosh"], [em(F4, "Caio"), "pop"], [em(F4, "diminuiu"), "ding"]],
   draw(t, D) { const ti = em(F4, "tira"), ca = em(F4, "Caio"), di = em(F4, "diminuiu"); fundoEscuro(t, "#7c2d12"); const p = seg(t, ti + .3, ti + 1.5);
     g.save(); camera(t, [[0, 640, 360, 1], [ca, 580, 340, 1.04], [di, 640, 360, 1]]); slots(5, 300, 1); animLista(C1, C2, p, 300, t > ca ? "Caio" : ""); tamanho(1080, 300, p >= 1 ? 4 : 5, 1);
     bloco(260, 150, 520, "apague o item 2 de FILA", "#dc2626", seg(t, .2, .6), t > ti && t < ti + 1.8);
     if (t > ca) { g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(SX(2), 388); g.quadraticCurveTo(SX(1) + 75, 440, SX(1), 388); g.stroke(); placaShow("3 → 2", SX(1) + 75, 470, seg(t, ca, ca + .4), "#fde68a"); } g.restore();
     palavra("REMOVER", 560, 90, seg(t, 0, .4), 54); if (t > di) placaShow("−1", 1180, 400, seg(t, di, di + .3), "#fca5a5"); } },
 { chip: "INSERIR NUMA POSIÇÃO", fala: F5, legenda: L82[5], sfx: [[.1, "whoosh"], [em(F5, "trás"), "zum"], [em(F5, "Gabi"), "pop"], [em(F5, "andou"), "ding"]],
   draw(t, D) { const tr = em(F5, "trás"), ga = em(F5, "Gabi"), an = em(F5, "andou"); fundoEscuro(t, "#312e81"); const p = seg(t, ga, ga + 1.3);
     g.save(); camera(t, [[0, 640, 360, 1], [ga, 560, 330, 1.05], [an + 1, 640, 360, 1]]); slots(5, 300, 1); animLista(C2, C3, p, 300, t > ga ? "Gabi" : ""); tamanho(1080, 300, p >= 1 ? 5 : 4, 1);
     bloco(160, 150, 640, "insira Gabi na posição 1 de FILA", "#0891b2", seg(t, .2, .6), t > ga && t < ga + 1.6);
     if (t > tr && t < ga) for (let i = 0; i < 4; i++) { g.fillStyle = "#fde047"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("➜", SX(i) + 75 + Math.sin(t * 6) * 8, 270); } g.restore();
     palavra("INSERIR NA POSIÇÃO", 560, 90, seg(t, 0, .4), 50); if (t > an) etiqueta("todo mundo andou uma casa", 900, 480, SX(3), 400, seg(t, an, an + .4)); } },
 { chip: "CONTAR", fala: F6, legenda: L82[6], sfx: [[.1, "whoosh"], [em(F6, "contadora"), "ding"], [em(F6, "oito", 1), "ding"], [em(F6, "quatro", 1), "alerta"], [em(F6, "seis", 1), "ding"], [em(F6, "três"), "alerta"], [em(F6, "nove", 1), "ding"], [em(F6, "resposta"), "festa"]],
   draw(t, D) { const co = em(F6, "contadora"), qu = em(F6, "Quantas"), ts = [em(F6, "oito", 1), em(F6, "quatro", 1), em(F6, "seis", 1), em(F6, "três"), em(F6, "nove", 1)], re = em(F6, "resposta"); fundoEscuro(t, "#0f172a");
     const at = ts.filter(x => t > x).length - 1; let c = 0; for (let i = 0; i <= at; i++) if (NOTAS[i] >= 5) c++;
     g.save(); camera(t, [[0, 640, 360, 1], [ts[0], 600, 330, 1.04], [re, 640, 360, 1]]);
     variavel(1060, 250, "contador", c, seg(t, co, co + .4), "#ca8a04");
     if (t > qu) { rotulo("NOTAS", 140, 237, "#c4b5fd", 1); NOTAS.forEach((v, i) => { cel(SX(i), 230, String(v), at === i ? "#fde68a" : "#fff", seg(t, qu + i * .1, qu + .3 + i * .1), 110); if (i <= at) { if (v >= 5) visto(SX(i), 320, 22, 1); else xVermelho(SX(i), 320, 18, 1); } });
       caixa(560, 420, "teste: nota ≥ 5 ?", "#e0f2fe", seg(t, qu + .4, qu + .8), 300); if (at >= 0) { g.fillStyle = "#fde047"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("⬇", SX(at), 180); } }
     leo({ x: 1170, y: 565, s: .62, olhar: -1, braco: t > em(F6, "resposta") ? -2.5 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t < qu && t > co) cartaoC("começa em 0 e soma 1 a cada item que passa no teste", 560, 260, 680, "#fff", seg(t, co + .3, co + .7)); g.restore();
     palavra("CONTAR", 560, 90, seg(t, 0, .4), 54); if (t > re) placaShow("Resposta: 3 notas", 880, 470, seg(t, re, re + .4), "#86efac"); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Gabi"), "pop"], [em(F7, "Enzo"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const ga = em(F7, "Gabi"), mc = em(F7, "Missão"); g.save(); camera(t, [[0, 640, 380, 1.06], [mc, 640, 380, 1]]); palco(t, true);
     C3.forEach((n, i) => { const k = seg(t, ga + i * .4, ga + .3 + i * .4); if (k <= 0) return; kid(n, { x: SX(i) + 60, y: 500, s: .62, olhar: 1, braco: t > mc ? -2.5 : .2, bracoE: t > mc ? 2.5 : .2, boca: "riso", pisca: pisca(t + i) }); rotulo(n, SX(i) + 60, 545, "#fde68a", k); celN(String(i + 1) + "º", SX(i) + 60, 290, false, k); });
     g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "carrinho"), "pop"], [em(F8, "playlist"), "pop"], [em(F8, "presença"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["carrinho", "🛒", "Carrinho da loja:", "inserir, remover, tamanho"], ["playlist", "🎵", "Playlist:", "tocar a seguir = inserir"], ["presença", "📋", "Lista de presença:", "contar quem veio"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 2", [BIA8, { camisa: "#a855f7", cabelo: "longo" }]); } }
];

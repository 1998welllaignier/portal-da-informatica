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
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
/* ===== 8º M7 · Ordenação por seleção (v2) ===== */
// rods: [{r, s, m, w, min}] → r = posição da rodada; s = começa a procurar; m = acha o menor; w = troca
function selAnim(ini, rods, t, X, y, fixos0, tudoAzul) { let arr = ini.slice(), fix = fixos0 || 0, cur = null;
  for (const R of rods) { if (t >= R.w + .8) { const a = arr[R.r]; arr[R.r] = arr[R.min]; arr[R.min] = a; fix = R.r + 1; } else { if (t >= R.s) cur = R; break; } }
  let scan = -1, cand = -1; if (cur) { const n = arr.length - cur.r; if (t < cur.m) { scan = cur.r + Math.min(n - 1, Math.floor((t - cur.s) / Math.max(.2, (cur.m - cur.s) / n))); cand = cur.r; for (let j = cur.r; j <= scan; j++) if (arr[j] < arr[cand]) cand = j; } else cand = cur.min; }
  const top = []; arr.forEach((v, j) => { let x = X(j), yy = y, cor = j < fix || tudoAzul ? "#bfdbfe" : "#fff";
    if (cur && j === cand) cor = t >= cur.m ? "#86efac" : "#fde68a"; if (cur && t >= cur.w && j === cur.r && cur.r !== cur.min) cor = "#fca5a5";
    if (cur && t >= cur.w && (j === cur.r || j === cur.min) && cur.r !== cur.min) { const p = io2(seg(t, cur.w + .1, cur.w + .75)), to = X(j === cur.r ? cur.min : cur.r); x = X(j) + (to - X(j)) * p; yy = y + (j === cur.min ? -1 : 1) * Math.sin(p * Math.PI) * 90; top.push([String(v), x, yy, cor]); return; }
    carta(String(v), x, yy, cor, 1, 120); });
  top.forEach(m => carta(m[0], m[1], m[2], m[3], 1, 120));
  if (scan >= 0) { g.fillStyle = "#fde047"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("⬇", X(scan), y - 82); }
  if (cur && t >= cur.m && t < cur.w + .9) rotulo("o menor!", X(cur.min), y - 86, "#86efac", seg(t, cur.m, cur.m + .3));
  return fix; }
function plataforma(t) { const gr = g.createLinearGradient(0, -200, 0, 720); gr.addColorStop(0, "#0c4a6e"); gr.addColorStop(1, "#7dd3fc"); g.fillStyle = gr; g.fillRect(-600, -600, 2500, 1600);
  for (let i = 0; i < 6; i++) nuvem(((i * 260 + t * 20) % 1700) - 200, 80 + (i % 3) * 60, .7);
  g.fillStyle = "#15803d"; g.fillRect(-600, 560, 2500, 400); g.fillStyle = "#64748b"; g.fillRect(520, 520, 240, 40); g.fillStyle = "#475569"; g.fillRect(780, 200, 26, 360); g.fillRect(740, 300, 60, 14); }
const F0 = "Ordenação por seleção: escolher o menor!",
  F1 = "A Bia achou o método da bolha trabalhoso: troca, troca, troca, vizinho por vizinho. Não tem um jeito de trocar menos?",
  F2 = "Tem! É a ordenação por seleção. Em inglês, selection sort. A ideia é como escolher os times no recreio: o capitão escolhe o melhor, depois o melhor do que sobrou, e assim por diante.",
  F3 = "Os passos: procure o menor item, o mínimo, de toda a lista. Troque ele com o item da primeira posição: pronto, a primeira posição está certa. Depois, procure o menor do que sobrou e troque com a segunda posição. E repita até a última.",
  F4 = "Vamos ordenar sete, dois, nove, quatro. Primeira rodada: o menor de todos é o dois. Troca com o sete: dois, sete, nove, quatro. O dois já está no lugar certo: começou a parte ordenada!",
  F5 = "Segunda rodada: do que sobrou, o menor é o quatro. Troca com o sete: dois, quatro, nove, sete. Terceira rodada: o menor do que sobrou é o sete. Troca com o nove. E pronto: dois, quatro, sete, nove!",
  F6 = "Bolha ou seleção? A bolha compara vizinhos, e o maior sobe para o fim. A seleção procura o menor do que sobrou, e ele vai para o começo. E a grande diferença: a bolha faz muitas trocas, uma para cada par fora de ordem. A seleção faz poucas: no máximo uma troca por rodada.",
  F7 = "A Bia ordenou a lista com só três trocas. Missão cumprida!",
  F8 = "Onde eu uso isso? Ao escolher os times no recreio. Ao arrumar as cartas na mão, puxando sempre a menor para a esquerda. E no pódio: primeiro se decide o primeiro lugar, depois o segundo, entre os que sobraram.",
  F9 = "Agora é com vocês: abram a Missão 7 no portal!";
const L87 = { 4: "Vamos ordenar 7, 2, 9, 4. Primeira rodada: o menor de todos é o 2. Troca com o 7: 2, 7, 9, 4. O 2 já está no lugar certo: começou a parte ordenada!",
  5: "Segunda rodada: do que sobrou, o menor é o 4. Troca com o 7: 2, 4, 9, 7. Terceira rodada: o menor do que sobrou é o 7. Troca com o 9. E pronto: 2, 4, 7, 9!",
  7: F7.replace("três trocas", "3 trocas") };
const XB = j => 340 + j * 170;
const R4 = [{ r: 0, s: em(F4, "Primeira"), m: em(F4, "dois", 1), w: em(F4, "Troca"), min: 1 }];
const R5 = [{ r: 1, s: em(F5, "Segunda"), m: em(F5, "quatro"), w: em(F5, "Troca"), min: 3 }, { r: 2, s: em(F5, "Terceira"), m: em(F5, "sete", 2), w: em(F5, "Troca", 1), min: 3 }];
const TIME = [["#ef4444", ""], ["#22c55e", "longo"], ["#3b82f6", ""], ["#a855f7", "longo"], ["#14b8a6", ""]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "ding"], [1.2, "whoosh"]],
   draw(t, D) { fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 300, 1.2], [1.8, 640, 360, 1]]); [7, 2, 9, 4].forEach((v, j) => carta(String(v), 400 + j * 160, 250 - (v === 2 ? 40 * seg(t, .5, .9) : 0), v === 2 && t > .5 ? "#86efac" : "#fff", seg(t, .1 + j * .1, .4 + j * .1), 110)); g.restore();
     abertura(t, "8º ANO · MISSÃO 7", "Ordenação por seleção", "ESCOLHER", "O MENOR!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "troca"), "whoosh"], [em(F1, "troca", 1), "whoosh"], [em(F1, "troca", 2), "whoosh"], [em(F1, "menos"), "pop"]],
   draw(t, D) { const tr = em(F1, "troca"), me = em(F1, "menos"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 360, 1], [tr, 600, 330, 1.05], [me, 640, 360, 1]]);
     if (t > tr) [5, 1, 4, 2, 8].forEach((v, j) => { const ph = (t * 2 + j) % 2 < 1, dx = j % 2 === 0 && ph ? 20 : 0; carta(String(v), 380 + j * 130 + Math.sin(t * 8 + j) * dx, 260 + (j % 2 ? -1 : 1) * Math.abs(Math.sin(t * 5 + j)) * 30, "#fca5a5", seg(t, tr + j * .1, tr + .3 + j * .1), 100); });
     if (t > tr) for (let i = 0; i < 4; i++) { g.fillStyle = "#fde047"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("⇄", 445 + i * 130, 180 + Math.sin(t * 6 + i) * 8); }
     bia8({ x: 160, y: 565, s: .85, olhar: 1, braco: -1, bracoE: 2.2, boca: "o", pisca: pisca(t) }); g.restore();
     if (t > tr && t < me) balao("Troca, troca, troca… 😩", 360, 120, seg(t, tr, tr + .4)); if (t > me) palavra("DÁ PARA TROCAR MENOS?", 640, 440, seg(t, me, me + .4), 48); } },
 { chip: "SELEÇÃO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "seleção"), "ding"], [em(F2, "selection"), "pop"], [em(F2, "melhor"), "pop"], [em(F2, "melhor", 1), "pop"]],
   draw(t, D) { const se = em(F2, "seleção"), sl = em(F2, "selection"), ti = em(F2, "times"), m1 = em(F2, "melhor"), m2 = em(F2, "melhor", 1);
     if (t < ti) { fundoEscuro(t, "#4c1d95"); palavra("ORDENAÇÃO POR SELEÇÃO", 560, 200, seg(t, se, se + .4), 52); if (t > sl) rotulo("em inglês: selection sort", 560, 280, "#e9d5ff", seg(t, sl, sl + .4)); robozinho(640, 440, .9, t, true); return; }
     g.save(); camera(t, [[ti, 640, 380, 1.05], [m2 + 1, 640, 380, 1]]); const gr = g.createLinearGradient(0, 0, 0, 460); gr.addColorStop(0, "#0ea5e9"); gr.addColorStop(1, "#bae6fd"); g.fillStyle = gr; g.fillRect(-200, -200, 1680, 700); for (let i = 0; i < 4; i++) nuvem(((i * 330 + t * 20) % 1600) - 150, 150 + (i % 2) * 50, .6); g.fillStyle = "#16a34a"; g.fillRect(-200, 440, 1680, 400); g.fillStyle = "#15803d"; for (let i = 0; i < 9; i++) g.fillRect(-200 + i * 200, 440, 100, 400); g.fillStyle = "#fff"; g.fillRect(596, 440, 8, 400);
     const esc = t > m2 ? 2 : t > m1 ? 1 : 0; TIME.forEach(([c, ca], i) => { let x = 760 + i * 110, y = 520; if (i < esc) { const p = io2(seg(t, i ? m2 : m1, (i ? m2 : m1) + .8)); x = x + (240 + i * 110 - x) * p; }
       boneco({ x, y, s: .6, camisa: c, cabelo: ca, olhar: -1, braco: .2, bracoE: .2, boca: i < esc ? "riso" : "", pisca: pisca(t + i) }); });
     leo({ x: 120, y: 520, s: .7, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore();
     palavra("ESCOLHER OS TIMES", 560, 90, seg(t, ti, ti + .4), 48); rotulo("capitão", 120, 300, "#1e3a8a", seg(t, ti, ti + .4)); if (t > m1) rotulo("1º escolhido", 240, 330, "#14532d", seg(t, m1 + .6, m1 + 1)); if (t > m2) rotulo("2º", 350, 330, "#14532d", seg(t, m2 + .6, m2 + 1)); } },
 { chip: "OS PASSOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "procure"), "pop"], [em(F3, "Troque"), "pop"], [em(F3, "Depois"), "pop"], [em(F3, "repita"), "pop"]],
   draw(t, D) { const ts = [em(F3, "procure"), em(F3, "Troque"), em(F3, "Depois"), em(F3, "repita")]; fundoEscuro(t, "#0f172a"); const at = ts.filter(x => t > x).length - 1;
     const P = ["Procure o MENOR (o mínimo) da lista", "Troque com a 1ª posição: ela está certa!", "Procure o menor do que sobrou → 2ª posição", "Repita até a última posição"];
     g.save(); camera(t, [[0, 600, 330, 1], [ts[2], 580, 330, 1.03], [ts[3] + 2, 600, 330, 1]]); P.forEach((s, i) => passo(i + 1, s, 120, 150 + i * 80, 680, seg(t, ts[i], ts[i] + .4), at === i)); bia8({ x: 1100, y: 560, s: .8, olhar: -1, braco: -2.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore();
     palavra("PASSO A PASSO", 560, 80, seg(t, 0, .4), 44); } },
 { chip: "1ª RODADA", fala: F4, legenda: L87[4], sfx: [[.1, "whoosh"], [R4[0].m, "ding"], [R4[0].w, "whoosh"], [em(F4, "certo"), "festa"]],
   draw(t, D) { const ce = em(F4, "lugar"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 360, 1], [R4[0].s, 600, 340, 1.04], [ce, 640, 360, 1]]);
     selAnim([7, 2, 9, 4], R4, t, XB, 320); g.restore(); palavra("1ª RODADA", 560, 90, seg(t, 0, .4), 50); if (t > ce) etiqueta("parte ordenada 🔒", 340, 500, XB(0), 384, seg(t, ce, ce + .4)); } },
 { chip: "2ª E 3ª RODADAS", fala: F5, legenda: L87[5], sfx: [[.1, "whoosh"], [R5[0].m, "ding"], [R5[0].w, "whoosh"], [R5[1].m, "ding"], [R5[1].w, "whoosh"], [em(F5, "pronto"), "festa"]],
   draw(t, D) { const te = em(F5, "Terceira"), pr = em(F5, "pronto"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [R5[0].s, 640, 340, 1.04], [pr, 640, 360, 1]]);
     const fx = selAnim([2, 7, 9, 4], R5, t, XB, 320, 1, t > pr); g.restore(); if (t < pr) etiqueta("parte ordenada", 300, 500, XB(fx - 1), 384, 1); palavra(t > pr ? "ORDENADA! ✓" : t > te ? "3ª RODADA" : "2ª RODADA", 560, 90, seg(t, 0, .4), 50); } },
 { chip: "BOLHA × SELEÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "bolha", 1), "pop"], [em(F6, "seleção", 1), "pop"], [em(F6, "diferença"), "ding"], [em(F6, "poucas"), "festa"]],
   draw(t, D) { const b1 = em(F6, "bolha", 1), s1 = em(F6, "seleção", 1), di = em(F6, "diferença"), po = em(F6, "poucas"); fundoEscuro(t, "#0f172a"); palavra("BOLHA × SELEÇÃO", 560, 80, seg(t, 0, .4), 50);
     [[340, "🫧 BOLHA", "#bae6fd", b1, ["compara vizinhos", "o maior vai para o fim"], di, "muitas trocas 😓", "#fca5a5"], [940, "🎯 SELEÇÃO", "#e9d5ff", s1, ["procura o menor", "o menor vai para o começo"], po, "no máximo 1 troca por rodada 😎", "#86efac"]].forEach(([x, tit, cor, t0, ls, t1, fim, c2]) => {
       const k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 300); g.scale(z, z); g.fillStyle = cor; rr(-260, -150, 520, 320, 24); g.fill(); g.fillStyle = NAVY; g.font = `900 32px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, -100);
       g.font = `700 24px ${F}`; ls.forEach((s, i) => { if (k > .9) g.fillText("• " + s, 0, -40 + i * 44); }); g.restore(); if (t > t1) placaShow(fim, x, 430, seg(t, t1, t1 + .4), c2); }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L87[7], sfx: [[.1, "whoosh"], [em(F7, "três"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const tr = em(F7, "três"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 380, 1]]);
     [2, 4, 7, 9].forEach((v, j) => carta(String(v), 300 + j * 150, 360, "#bfdbfe", seg(t, .1 + j * .12, .4 + j * .12), 110)); variavel(1000, 380, "trocas", t > tr ? 3 : 0, seg(t, tr - .4, tr), "#ca8a04");
     bia8({ x: 1160, y: 565, s: .8, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "times"), "pop"], [em(F8, "cartas"), "pop"], [em(F8, "pódio"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["times", "⚽", "Times no recreio:", "escolhe o melhor que sobrou"], ["cartas", "♠️", "Cartas na mão:", "a menor para a esquerda"], ["pódio", "🏆", "Pódio:", "1º lugar, depois o 2º…"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 7", [BIA8, LEO]); } }
];

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
function samambaia(x, y, tam, ang, prof, k) { if (prof <= 0 || tam < 3 || k <= 0) return; const x2 = x + Math.cos(ang) * tam * Math.min(1, k * 2), y2 = y + Math.sin(ang) * tam * Math.min(1, k * 2);
  g.strokeStyle = prof > 3 ? "#166534" : "#22c55e"; g.lineWidth = Math.max(1, prof * .9); g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke(); const kk = (k - .12) / .88;
  samambaia(x2, y2, tam * .78, ang + .06, prof - 1, kk); samambaia(x + (x2 - x) * .45, y + (y2 - y) * .45, tam * .42, ang - 1.0, prof - 1, kk); samambaia(x + (x2 - x) * .45, y + (y2 - y) * .45, tam * .42, ang + 1.0, prof - 1, kk); }
function placaPare(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#dc2626"; g.strokeStyle = "#fff"; g.lineWidth = 6; g.beginPath(); for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; g.lineTo(Math.cos(a) * 60, Math.sin(a) * 60); } g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#fff"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("PARE", 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
function arv(T, o) { o = o || {}; const nomes = Object.keys(T);
  nomes.forEach((n, i) => { const [x, y, , p] = T[n]; if (!p || (o.vis && !o.vis.includes(n))) return; const k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const [px, py] = T[p], on = o.aHl && o.aHl.includes(n); g.save(); g.globalAlpha = cl(k); g.strokeStyle = on ? "#facc15" : "#94a3b8"; g.lineWidth = on ? 10 : 6; g.lineCap = "round"; g.beginPath(); g.moveTo(px, py + 28); g.lineTo(x, y - 28); g.stroke(); g.restore(); });
  nomes.forEach((n, i) => { if (o.vis && !o.vis.includes(n)) return; const [x, y, e] = T[n], k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const z = back(cl(k)), on = o.hl && o.hl.includes(n), c = (o.cor && o.cor[n]) || (on ? "#fde68a" : "#fff"); g.save(); g.translate(x, y); g.scale(z, z);
    g.font = `800 20px ${F}`; const w = Math.max(150, g.measureText(n).width + 70); g.fillStyle = c; rr(-w / 2, -28, w, 56, 14); g.fill(); g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 5 : 3; g.stroke(); g.restore(); emo(e, x - w / 2 * z + 26 * z, y + 10 * z, 26 * z); if (z > .6) { g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, x + 14, y + 7); } }); }
/* ===== 9º M3 · Árvores de decisão (v2) ===== */
const TD = { "É eletrônico?": [640, 125, "❓", null], "Tem tela?": [370, 260, "❓", "É eletrônico?"], "Serve para escrever?": [910, 260, "❓", "É eletrônico?"], monitor: [230, 400, "🖥️", "Tem tela?"], teclado: [500, 400, "⌨️", "Tem tela?"], "lápis": [780, 400, "✏️", "Serve para escrever?"], cadeira: [1040, 400, "🪑", "Serve para escrever?"] };
const SN = { "Tem tela?": "sim", "Serve para escrever?": "não", monitor: "sim", teclado: "não", "lápis": "sim", cadeira: "não" };
function simNao(T, vis, hl) { Object.keys(SN).forEach(n => { if (vis && !vis.includes(n)) return; const [x, y, , p] = T[n], [px, py] = T[p], mx = (x + px) / 2, my = (y + py) / 2, s = SN[n], on = hl && hl.includes(n); g.fillStyle = on ? "#facc15" : s === "sim" ? "#22c55e" : "#ef4444"; rr(mx - 30, my - 16, 60, 32, 10); g.fill(); g.fillStyle = on ? NAVY : "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(s, mx, my + 6); }); }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
const F0 = "Árvores de decisão: sim ou não?",
  F1 = "Na hora do intervalo, a Júlia desafiou a turma: pensei num objeto da sala de informática! Vocês só podem fazer perguntas de sim ou não. O Rafa começou chutando: é o mouse? Não. É a impressora? Não. Assim ia demorar o recreio inteiro!",
  F2 = "O jeito esperto é usar uma árvore de decisão. Cada vértice é uma pergunta, uma condição. Cada galho é uma resposta: sim ou não. E cada folha é uma decisão final.",
  F3 = "Veja: a primeira pergunta, a raiz, é: é eletrônico? Se sim: tem tela? Sim, é o monitor. Não, é o teclado. Se não é eletrônico: serve para escrever? Sim, é o lápis. Não, é a cadeira.",
  F4 = "Para usar, comece na raiz, responda, e siga o galho da resposta até chegar a uma folha.",
  F5 = "Agora, as contas da árvore. Quantas decisões ela tem? Quatro: as quatro folhas. Quantas perguntas, no máximo, até decidir? Duas: essa é a profundidade. E cada pergunta de sim ou não a mais dobra as folhas: uma pergunta, duas folhas. Duas, quatro. Três, oito.",
  F6 = "Mas atenção: uma boa árvore tem perguntas com resposta clara, que dividem as possibilidades. Ele é legal? é uma pergunta ruim: cada pessoa responde de um jeito!",
  F7 = "O Rafa montou a árvore e acertou o objeto da Júlia em só duas perguntas: era o teclado! Missão cumprida!",
  F8 = "Onde eu uso isso? No atendimento automático do telefone: digite um para isso, dois para aquilo. Na triagem do posto de saúde: cada resposta leva a uma cor de prioridade. E nos filtros das lojas online: preço, tamanho e cor.",
  F9 = "Agora é com vocês: abram a Missão 3 no portal!";
const L93 = { 5: "Agora, as contas da árvore. Quantas decisões ela tem? 4: as 4 folhas. Quantas perguntas, no máximo, até decidir? 2: essa é a profundidade. E cada pergunta de sim ou não a mais dobra as folhas: 1 pergunta, 2 folhas. 2, 4. 3, 8.",
  7: F7.replace("só duas perguntas", "só 2 perguntas"), 8: F8.replace("digite um para isso, dois para aquilo", "digite 1 para isso, 2 para aquilo") };
const TODOS = Object.keys(TD), FOLHAS = ["monitor", "teclado", "lápis", "cadeira"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 280, 1.1], [1.8, 640, 360, 1]]); g.translate(0, 100); arv(TD, { k: t }); simNao(TD, t > 1 ? TODOS : []); g.restore(); abertura(t, "9º ANO · MISSÃO 3", "Árvores de decisão", "SIM", "OU NÃO?", 1.9); } },
 { chip: "O DESAFIO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "desafiou"), "pop"], [em(F1, "mouse"), "pop"], [em(F1, "Não"), "alerta"], [em(F1, "impressora"), "pop"], [em(F1, "Não", 1), "alerta"], [em(F1, "demorar"), "zum"]],
   draw(t, D) { const de = em(F1, "desafiou"), si = em(F1, "sim"), mo = em(F1, "mouse"), n1 = em(F1, "Não"), im = em(F1, "impressora"), n2 = em(F1, "Não", 1), dm = em(F1, "demorar"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 640, 360, 1], [mo, 640, 340, 1.05], [dm, 640, 360, 1]]);
     julia({ x: 300, y: 565, s: .85, olhar: 1, braco: t > de && t < mo ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 960, y: 565, s: .85, olhar: -1, braco: t > mo && t < dm ? -1.4 : .3, bracoE: .3, boca: t > dm ? "o" : "riso", pisca: pisca(t) }); g.restore();
     if (t > de && t < mo) balao("Pensei num objeto da sala! 🤫", 380, 170, seg(t, de, de + .4)); if (t > si && t < mo) placaShow("só perguntas de SIM ou NÃO", 640, 470, seg(t, si, si + .4), "#fde68a");
     if (t > mo && t < n1 + .8) balao("É o mouse?", 900, 170, 1); if (t > im && t < dm) balao("É a impressora?", 900, 170, 1); if ((t > n1 && t < im) || (t > n2 && t < dm)) balao("Não!", 340, 220, 1);
     if (t > dm) { relogio(640, 260, 70, (t * .3) % 1, seg(t, dm, dm + .4)); palavra("VAI DEMORAR O RECREIO INTEIRO! 😩", 640, 440, seg(t, dm, dm + .4), 38); } } },
 { chip: "ÁRVORE DE DECISÃO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "decisão"), "ding"], [em(F2, "pergunta"), "pop"], [em(F2, "galho"), "pop"], [em(F2, "folha"), "pop"]],
   draw(t, D) { const ad = em(F2, "decisão"), pe = em(F2, "pergunta"), ga = em(F2, "galho"), fo = em(F2, "folha"); fundoEscuro(t, "#0f172a");
     const cor = {}; if (t > pe && t < ga) ["É eletrônico?", "Tem tela?", "Serve para escrever?"].forEach(n => cor[n] = "#fde68a"); if (t > fo) FOLHAS.forEach(n => cor[n] = "#bbf7d0");
     g.save(); camera(t, [[0, 640, 340, 1], [pe, 640, 300, 1.03], [fo, 640, 340, 1]]); g.translate(0, 40); arv(TD, { k: t - ad + .3, cor }); simNao(TD, t > ad + 1 ? TODOS : [], t > ga && t < fo ? Object.keys(SN) : []); g.restore();
     palavra("ÁRVORE DE DECISÃO", 560, 70, seg(t, ad, ad + .4), 44);
     if (t > pe && t < ga) etiqueta("vértice = pergunta (condição)", 1100, 180, 1010, 290, seg(t, pe, pe + .4)); if (t > ga && t < fo) etiqueta("galho = resposta", 1100, 180, 960, 340, seg(t, ga, ga + .4)); if (t > fo) etiqueta("folha = decisão final", 1100, 530, 1040, 470, seg(t, fo, fo + .4)); } },
 { chip: "MONTANDO A ÁRVORE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "eletrônico"), "pop"], [em(F3, "tela"), "pop"], [em(F3, "monitor"), "ding"], [em(F3, "teclado"), "ding"], [em(F3, "escrever"), "pop"], [em(F3, "lápis"), "ding"], [em(F3, "cadeira"), "ding"]],
   draw(t, D) { const ts = [["É eletrônico?", em(F3, "eletrônico")], ["Tem tela?", em(F3, "tela")], ["monitor", em(F3, "monitor")], ["teclado", em(F3, "teclado")], ["Serve para escrever?", em(F3, "escrever")], ["lápis", em(F3, "lápis")], ["cadeira", em(F3, "cadeira")]];
     fundoEscuro(t, "#14532d"); const vis = ts.filter(([, x]) => t > x).map(([n]) => n), ult = vis[vis.length - 1];
     g.save(); camera(t, [[0, 640, 300, 1.05], [ts[2][1], 500, 320, 1.05], [ts[5][1], 760, 320, 1.05], [ts[6][1] + .8, 640, 330, 1]]); g.translate(0, 40); arv(TD, { vis, hl: [ult] }); simNao(TD, vis); g.restore();
     if (t > ts[0][1]) etiqueta("raiz", 300, 110, 540, 160, seg(t, ts[0][1], ts[0][1] + .4)); } },
 { chip: "COMO USAR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "raiz"), "pop"], [em(F4, "responda"), "pop"], [em(F4, "folha"), "ding"]],
   draw(t, D) { const rz = em(F4, "raiz"), re = em(F4, "responda"), sg = em(F4, "siga"), fo = em(F4, "folha"); fundoEscuro(t, "#312e81");
     const hl = [t > rz ? "É eletrônico?" : "", t > re ? "Tem tela?" : "", t > fo ? "teclado" : ""];
     g.save(); camera(t, [[0, 640, 340, 1], [re, 560, 320, 1.04], [fo, 600, 340, 1]]); g.translate(0, 40); arv(TD, { hl, aHl: [t > re ? "Tem tela?" : "", t > fo ? "teclado" : ""] }); simNao(TD, TODOS, [t > re ? "Tem tela?" : "", t > fo ? "teclado" : ""]); g.restore();
     if (t > rz && t < re) etiqueta("comece aqui!", 1000, 110, 760, 160, seg(t, rz, rz + .4)); if (t > re && t < fo) balao("Sim, é eletrônico!", 160, 180, seg(t, re, re + .4)); if (t > sg && t < fo) balao("Não tem tela…", 160, 300, seg(t, sg, sg + .4)); if (t > fo) placaShow("chegou na folha: TECLADO ⌨️", 640, 520, seg(t, fo, fo + .4), "#86efac"); } },
 { chip: "AS CONTAS", fala: F5, legenda: L93[5], sfx: [[.1, "whoosh"], [em(F5, "Quatro"), "ding"], [em(F5, "Duas"), "ding"], [em(F5, "dobra"), "pop"], [em(F5, "Três"), "festa"]],
   draw(t, D) { const qu = em(F5, "Quatro"), du = em(F5, "Duas"), dob = em(F5, "dobra"), um = emE(F5, "uma", 1), d2 = em(F5, "Duas", 1), tr = em(F5, "Três"); fundoEscuro(t, "#0f172a");
     g.save(); g.translate(-170, 10); g.scale(.82, .82); g.translate(140, 40); arv(TD, { cor: t > qu && t < du ? { monitor: "#bbf7d0", teclado: "#bbf7d0", "lápis": "#bbf7d0", cadeira: "#bbf7d0" } : {} }); simNao(TD, TODOS);
     g.restore(); if (t > du) { const k = seg(t, du, du + .5); g.save(); g.globalAlpha = cl(k); g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(55, 150); g.lineTo(55, 370); g.stroke(); g.fillStyle = "#fde047"; g.beginPath(); g.moveTo(55, 140); g.lineTo(45, 160); g.lineTo(65, 160); g.fill(); g.beginPath(); g.moveTo(55, 380); g.lineTo(45, 360); g.lineTo(65, 360); g.fill(); g.restore(); rotulo("2", 80, 268, "#fde68a", k); }
     if (t > qu) cartaoC("4 folhas = 4 decisões", 1040, 150, 380, "#bbf7d0", seg(t, qu, qu + .4)); if (t > du) cartaoC("profundidade = 2", 1040, 270, 380, "#fde68a", seg(t, du, du + .4), "no máximo 2 perguntas");
     if (t > dob) tabela(1040, 385, 340, ["perguntas", "folhas"], [["1", "2"], ["2", "4"], ["3", "8"]].slice(0, t > tr ? 3 : t > d2 ? 2 : t > um ? 1 : 0), ["#0891b2", "#ca8a04"], seg(t, dob, dob + .4), -1, 38); } },
 { chip: "BOA PERGUNTA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "clara"), "ding"], [em(F6, "legal"), "alerta"], [em(F6, "jeito"), "zum"]],
   draw(t, D) { const cl_ = em(F6, "clara"), lg = em(F6, "legal"), je = em(F6, "jeito"); fundoEscuro(t, "#7c2d12");
     if (t > cl_) { cartaoC("✅ É eletrônico?", 340, 170, 400, "#bbf7d0", seg(t, cl_, cl_ + .4), "resposta clara, divide em dois"); }
     if (t > lg) { cartaoC("❌ Ele é legal?", 940, 170, 400, "#fecaca", seg(t, lg, lg + .4), "cada um responde de um jeito"); }
     if (t > je) [["Sim!", "#ef4444"], ["Não!", "#22c55e"], ["Mais ou menos…", "#3b82f6"]].forEach(([b, c], i) => { boneco({ x: 760 + i * 170, y: 565, s: .6, camisa: c, cabelo: i === 1 ? "longo" : "", olhar: -1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t + i) }); });
     if (t > je) balao("Sim! / Não! / Mais ou menos…", 940, 330, seg(t, je, je + .4)); julia({ x: 200, y: 565, s: .75, olhar: 1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L93[7], sfx: [[.1, "whoosh"], [em(F7, "duas"), "pop"], [em(F7, "teclado"), "festa"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const du = em(F7, "duas"), te = em(F7, "teclado"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 600, 340, 1], [mc, 640, 300, .9]]); g.translate(0, 40); arv(TD, { hl: [t > du ? "É eletrônico?" : "", t > du + .5 ? "Tem tela?" : "", t > te ? "teclado" : ""], aHl: [t > du + .5 ? "Tem tela?" : "", t > te ? "teclado" : ""] }); simNao(TD, TODOS); g.restore();
     rafa({ x: 1150, y: 570, s: .7, olhar: -1, braco: t > te ? -2.6 : .3, bracoE: t > te ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); if (t > te && t < mc) placaShow("Era o teclado! ⌨️", 640, 520, seg(t, te, te + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, legenda: L93[8], sfx: [[.1, "whoosh"], [em(F8, "telefone"), "pop"], [em(F8, "triagem"), "pop"], [em(F8, "filtros"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["telefone", "☎️", "Atendimento automático:", "digite 1, digite 2…"], ["triagem", "🏥", "Triagem:", "cor de prioridade"], ["filtros", "🛍️", "Filtros das lojas:", "preço, tamanho e cor"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 3", [JULIA, RAFA]); } }
];

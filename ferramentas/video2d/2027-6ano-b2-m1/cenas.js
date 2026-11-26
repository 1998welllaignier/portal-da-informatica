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
function arv(T, o) { o = o || {}; const nomes = Object.keys(T);
  nomes.forEach((n, i) => { const [x, y, , p] = T[n]; if (!p || (o.vis && !o.vis.includes(n))) return; const k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const [px, py] = T[p], on = o.aHl && o.aHl.includes(n); g.save(); g.globalAlpha = cl(k); g.strokeStyle = on ? "#facc15" : "#94a3b8"; g.lineWidth = on ? 10 : 6; g.lineCap = "round"; g.beginPath(); g.moveTo(px, py + 28); g.lineTo(x, y - 28); g.stroke(); g.restore(); });
  nomes.forEach((n, i) => { if (o.vis && !o.vis.includes(n)) return; const [x, y, e] = T[n], k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const z = back(cl(k)), on = o.hl && o.hl.includes(n), c = (o.cor && o.cor[n]) || (on ? "#fde68a" : "#fff"); g.save(); g.translate(x, y); g.scale(z, z);
    g.font = `800 20px ${F}`; const w = Math.max(150, g.measureText(n).width + 70); g.fillStyle = c; rr(-w / 2, -28, w, 56, 14); g.fill(); g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 5 : 3; g.stroke(); g.restore(); emo(e, x - w / 2 * z + 26 * z, y + 10 * z, 26 * z); if (z > .6) { g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, x + 14, y + 7); } }); }
/* ===== 9º M5 · Autômatos (v2) ===== */
const ES = { travada: [400, 300, "#fecaca", "🔒"], liberada: [880, 300, "#bbf7d0", "🔓"] };
function seta(x1, y1, cx, cy, x2, y2, cor, w, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.strokeStyle = cor; g.fillStyle = cor; g.lineWidth = w || 5; g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(cx, cy, x2, y2); g.stroke(); const a = Math.atan2(y2 - cy, x2 - cx); g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 18 * Math.cos(a - .45), y2 - 18 * Math.sin(a - .45)); g.lineTo(x2 - 18 * Math.cos(a + .45), y2 - 18 * Math.sin(a + .45)); g.fill(); g.restore(); }
function etq(txt, x, y, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.font = `800 20px ${F}`; const w = g.measureText(txt).width + 24; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 18, w, 36, 10); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, x, y + 7); g.restore(); }
// o: {atual, hl: "tc"|"te"|"le"|"lc", ini, k}
function automato(o) { o = o || {}; const k = o.k == null ? 1 : o.k, [tx, ty] = ES.travada, [lx, ly] = ES.liberada, H = n => o.hl === n ? "#facc15" : "#cbd5e1";
  seta(tx + 60, ty - 50, 640, 140, lx - 60, ly - 50, H("tc"), o.hl === "tc" ? 8 : 5, seg(k, .2, .5)); etq("💳 cartão", 640, 175, o.hl === "tc" ? "#fde68a" : "#fff", seg(k, .2, .5));
  seta(lx - 60, ly + 50, 640, 460, tx + 60, ty + 50, H("le"), o.hl === "le" ? 8 : 5, seg(k, .3, .6)); etq("✋ empurrar (gira)", 640, 425, o.hl === "le" ? "#fde68a" : "#fff", seg(k, .3, .6));
  seta(tx - 60, ty - 40, tx - 220, ty, tx - 60, ty + 40, H("te"), o.hl === "te" ? 8 : 5, seg(k, .4, .7)); etq("✋ empurrar", tx - 170, ty - 70, o.hl === "te" ? "#fde68a" : "#fff", seg(k, .4, .7));
  seta(lx + 60, ly - 40, lx + 220, ly, lx + 60, ly + 40, H("lc"), o.hl === "lc" ? 8 : 5, seg(k, .5, .8)); etq("💳 cartão", lx + 170, ly - 70, o.hl === "lc" ? "#fde68a" : "#fff", seg(k, .5, .8));
  if (o.ini) { seta(tx - 10, ty + 190, tx - 10, ty + 150, tx - 10, ty + 72, "#fde047", 6, o.ini); rotulo("início", tx - 10, ty + 215, "#fde68a", o.ini); }
  Object.entries(ES).forEach(([n, [x, y, c, e]], i) => { const kk = seg(k, i * .1, .3 + i * .1); if (kk <= 0) return; const z = back(cl(kk)), on = o.atual === n; g.save(); g.translate(x, y); g.scale(z, z); if (on) { g.shadowColor = "#facc15"; g.shadowBlur = 30; } g.fillStyle = c; g.beginPath(); g.arc(0, 0, 70, 0, 7); g.fill(); g.shadowBlur = 0; g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 8 : 4; g.stroke(); g.restore(); emo(e, x, y - 4 * z, 40 * z); if (z > .7) { g.fillStyle = NAVY; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(n, x, y + 38); } }); }
function catraca(x, y, s, livre, rot) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#64748b"; rr(-40, -160, 80, 220, 10); g.fill(); g.fillStyle = livre ? "#22c55e" : "#ef4444"; g.shadowColor = g.fillStyle; g.shadowBlur = 20; g.beginPath(); g.arc(0, -130, 16, 0, 7); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#1e293b"; rr(-30, -100, 60, 36, 6); g.fill(); emo("💳", 0, -74, 22); g.save(); g.translate(0, -20); g.rotate(rot || 0); g.strokeStyle = "#cbd5e1"; g.lineWidth = 12; g.lineCap = "round"; for (let i = 0; i < 3; i++) { const a = i * 2.094; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(a) * 110, Math.sin(a) * 30); g.stroke(); } g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, 0, 18, 0, 7); g.fill(); g.restore(); g.restore(); }
function chapeu(x, y, w, txt, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; g.beginPath(); g.moveTo(0, 20); g.quadraticCurveTo(70, -34, 150, 0); g.lineTo(w, 0); g.lineTo(w, 56); g.lineTo(56, 56); g.lineTo(50, 64); g.lineTo(30, 64); g.lineTo(24, 56); g.lineTo(0, 56); g.closePath(); g.fill();
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 40); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
/* ===== 6º 2º bim. M1 · Algoritmos do dia a dia (v2) ===== */
const PEDRO = { camisa: "#f97316" }, TAINA = { camisa: "#ec4899", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), taina = o => boneco(Object.assign({}, TAINA, o));
function copo(x, y, s, nivel, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.save(); g.beginPath(); g.moveTo(-40, -100); g.lineTo(40, -100); g.lineTo(30, 0); g.lineTo(-30, 0); g.closePath(); g.clip(); g.fillStyle = "rgba(224,242,254,.5)"; g.fillRect(-50, -110, 100, 120); if (nivel > 0) { g.fillStyle = cor || "#fb923c"; g.fillRect(-50, -100 * nivel, 100, 100 * nivel); } g.restore();
  g.strokeStyle = "#e0f2fe"; g.lineWidth = 5; g.beginPath(); g.moveTo(-40, -100); g.lineTo(-30, 0); g.lineTo(30, 0); g.lineTo(40, -100); g.stroke(); g.restore(); }
function passoI(n, txt, emoji, x, y, w, k, hl) { if (k <= 0) return; passo(n, txt, x, y, w, k, hl); if (k >= 1) emo(emoji, x + w - 34, y + 12, 32); }
const F0 = "Algoritmos do dia a dia!",
  F1 = "O Pedro pediu ao robozinho Bit: faz o suco aí! E o Bit ficou parado, piscando. Ele não sabia por onde começar. O Pedro ficou bravo: mas é tão fácil!",
  F2 = "Para a gente, é fácil, porque já sabe fazer. Mas o computador não adivinha nada. Ele faz exatamente o que mandamos, do jeito que mandamos. Por isso, precisa de um algoritmo.",
  F3 = "Algoritmo é uma lista de passos, em ordem, para resolver um problema ou fazer uma tarefa. Cada passo do algoritmo se chama instrução.",
  F4 = "E cada instrução precisa ser clara, sem deixar dúvida. E o algoritmo precisa ser preciso: dizer exatamente o que fazer. Faz o suco aí é vago. O bom é assim: um, pegar um copo. Dois, colocar duas colheres de suco em pó. Três, encher o copo com água. Quatro, mexer com a colher.",
  F5 = "Todo algoritmo tem começo, meio e fim: começa num ponto, segue os passos e termina quando o problema está resolvido. Se for bem feito, qualquer pessoa que seguir os passos chega ao mesmo resultado.",
  F6 = "E um programa de computador é isso: um algoritmo escrito numa linguagem que o computador entende.",
  F7 = "O Pedro escreveu os quatro passos, e o Bit fez o suco direitinho. Missão cumprida!",
  F8 = "Onde eu uso isso? Na receita de bolo da família. No manual de montagem de um brinquedo, com os passos numerados. No GPS do celular: siga em frente, vire à direita. E no jogo do celular, que funciona porque alguém escreveu milhares de instruções.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
const L61 = { 4: F4.replace("um, pegar", "1, pegar").replace("Dois, colocar duas", "2, colocar 2").replace("Três, encher", "3, encher").replace("Quatro, mexer", "4, mexer"), 7: F7.replace("quatro passos", "4 passos") };
const PS = [["Pegar um copo", "🥛"], ["Colocar 2 colheres de suco em pó", "🥄"], ["Encher o copo com água", "💧"], ["Mexer com a colher", "🌀"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 260, 1.1], [1.8, 640, 330, 1]]); robozinho(500, 260, 1.1, t, true); copo(760, 320, 1.2, Math.min(1, t * .5), "#fb923c"); g.restore(); abertura(t, "6º ANO · 2º BIM. · MISSÃO 1", "Algoritmos do dia a dia", "PASSO A PASSO", "PARA TUDO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "suco"), "pop"], [em(F1, "parado"), "alerta"], [em(F1, "bravo"), "zum"]],
   draw(t, D) { const su = em(F1, "suco"), pa = em(F1, "parado"), co = em(F1, "começar"), br = em(F1, "bravo"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 640, 360, 1], [pa, 760, 330, 1.08], [br, 640, 360, 1]]); g.fillStyle = "#92400e"; rr(650, 430, 500, 30, 8); g.fill(); copo(900, 430, 1, 0); emo("🍊", 1020, 420, 50);
     pedro({ x: 330, y: 565, s: .9, olhar: 1, braco: t > su && t < pa ? -1.3 : t > br ? -2.4 : .3, bracoE: t > br ? 2.4 : .3, boca: t > br ? "o" : "riso", pisca: pisca(t) }); robozinho(760, 330, 1, t, false); g.restore();
     if (t > su && t < pa) balao("Faz o suco aí!", 380, 170, seg(t, su, su + .4)); if (t > pa) { const bl = Math.floor(t * 3) % 2; emo(bl ? "❓" : "❔", 760, 190, 60); } if (t > co && t < br) placaShow("por onde começar? 🤖", 900, 120, seg(t, co, co + .4), "#fde68a"); if (t > br) balao("Mas é tão fácil!", 380, 170, seg(t, br, br + .4)); } },
 { chip: "O COMPUTADOR", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "adivinha"), "alerta"], [em(F2, "exatamente"), "pop"], [em(F2, "algoritmo"), "ding"]],
   draw(t, D) { const ad = em(F2, "adivinha"), ex = em(F2, "exatamente"), al = em(F2, "algoritmo"); fundoEscuro(t, "#0f172a");
     g.save(); camera(t, [[0, 640, 360, 1], [ex, 640, 340, 1.04], [al, 640, 360, 1]]); monitor(640, 420, 1.3, () => { emo(t > ad && t < ex ? "🤷" : t > ex ? "🤖" : "💻", 0, -90, 70); }); g.restore();
     if (t > ad) cartaoC("❌ não adivinha nada", 230, 300, 380, "#fecaca", seg(t, ad, ad + .4)); if (t > ex) cartaoC("✅ faz exatamente", 1050, 300, 380, "#bbf7d0", seg(t, ex, ex + .4), "o que mandamos"); if (t > al) palavra("PRECISA DE UM ALGORITMO!", 640, 520, seg(t, al, al + .4), 40);
     pedro({ x: 1160, y: 570, s: .6, olhar: -1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "ALGORITMO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "passos"), "pop"], [em(F3, "ordem"), "pop"], [em(F3, "instrução"), "ding"]],
   draw(t, D) { const pa = em(F3, "passos"), or = em(F3, "ordem"), ins = em(F3, "instrução"); fundoEscuro(t, "#14532d"); palavra("ALGORITMO", 560, 90, seg(t, 0, .4), 64);
     if (t > pa) cartaoC("lista de passos, em ordem", 640, 190, 640, "#fde68a", seg(t, pa, pa + .4), "para resolver um problema ou fazer uma tarefa");
     [1, 2, 3, 4].forEach((n, i) => { const k = seg(t, or + i * .2, or + .4 + i * .2); if (k <= 0) return; passo(n, "passo " + n, 380, 290 + i * 60, 300, k, t > ins && i === 1); }); if (t > ins) etiqueta("cada passo = uma INSTRUÇÃO", 980, 420, 690, 350, seg(t, ins, ins + .4)); robozinho(1100, 280, .7, t, t > ins); } },
 { chip: "CLARA E PRECISA", fala: F4, legenda: L61[4], sfx: [[.1, "whoosh"], [em(F4, "vago"), "alerta"], [emE(F4, "um"), "pop"], [em(F4, "Dois"), "pop"], [em(F4, "Três"), "pop"], [em(F4, "Quatro"), "pop"]],
   draw(t, D) { const cl_ = em(F4, "clara"), va = em(F4, "vago"), ts = [emE(F4, "um"), em(F4, "Dois"), em(F4, "Três"), em(F4, "Quatro")]; fundoEscuro(t, "#0f172a"); const at = ts.filter(x => t > x).length - 1;
     if (t < ts[0]) { palavra("CLARA E PRECISA", 560, 100, seg(t, cl_, cl_ + .4), 56); if (t > va) { cartaoC("❌ “Faz o suco aí!”", 640, 280, 460, "#fecaca", seg(t, va, va + .4), "vago: o Bit não sabe o que fazer"); robozinho(640, 440, .7, t, false); } return; }
     g.save(); camera(t, [[ts[0], 600, 340, 1.03], [ts[3] + 1, 640, 350, 1]]); PS.forEach(([s, e], i) => passoI(i + 1, s, e, 100, 150 + i * 80, 620, seg(t, ts[i], ts[i] + .4), at === i)); copo(960, 470, 1.4, at >= 2 ? .85 : at >= 1 ? .12 : 0, at >= 3 ? "#fb923c" : at >= 2 ? "#fdba74" : "#fdba74"); if (at === 3) emo("🥄", 980 + Math.sin(t * 10) * 14, 340, 50); g.restore();
     palavra("✅ CLARO E PRECISO", 560, 80, seg(t, ts[0], ts[0] + .4), 40); } },
 { chip: "COMEÇO, MEIO E FIM", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "começo"), "pop"], [em(F5, "meio"), "pop"], [em(F5, "fim"), "ding"], [em(F5, "mesmo"), "festa"]],
   draw(t, D) { const co = em(F5, "começo"), me = em(F5, "meio"), fi = em(F5, "fim"), qu = em(F5, "qualquer"), ms = em(F5, "mesmo"); fundoEscuro(t, "#312e81");
     if (t < qu) { [[co, "🟢 COMEÇO", "#bbf7d0"], [me, "👣 MEIO: os passos", "#fde68a"], [fi, "🏁 FIM: resolvido!", "#e9d5ff"]].forEach(([t0, s, c], i) => { cartaoC(s, 220 + i * 420, 300, 360, c, seg(t, t0, t0 + .4)); if (i < 2 && t > [me, fi][i]) seta(420 + i * 420, 300, 430 + i * 420, 280, 440 + i * 420, 300, "#fde047", 6, 1); }); robozinho(640, 470, .6, t, t > fi); return; }
     palavra("MESMO ALGORITMO = MESMO RESULTADO", 560, 90, seg(t, qu, qu + .4), 38); [["#ef4444", ""], ["#22c55e", "longo"], ["#3b82f6", ""]].forEach(([c, ca], i) => { const x = 330 + i * 310; boneco({ x, y: 520, s: .62, camisa: c, cabelo: ca, olhar: 1, braco: -1, bracoE: .3, boca: "riso", pisca: pisca(t + i) }); if (t > ms) copo(x + 80, 470, .7, .85, "#fb923c"); }); if (t > ms) rotulo("o mesmo suco 🍊", 640, 200, "#fde68a", seg(t, ms, ms + .4)); } },
 { chip: "PROGRAMA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "programa"), "ding"], [em(F6, "linguagem"), "pop"]],
   draw(t, D) { const pr = em(F6, "programa"), li = em(F6, "linguagem"); fundoEscuro(t, "#0f172a"); palavra("PROGRAMA = ALGORITMO", 560, 90, seg(t, pr, pr + .4), 50); if (t > li) rotulo("escrito numa linguagem que o computador entende", 560, 150, "#bbf7d0", seg(t, li, li + .4));
     g.save(); camera(t, [[0, 640, 340, 1], [li, 600, 330, 1.04]]); PS.forEach(([s], i) => bloco(140, 210 + i * 62, 520, s.toLowerCase(), ["#ca8a04", "#7c3aed", "#0891b2", "#16a34a"][i], seg(t, pr + .3 + i * .2, pr + .6 + i * .2))); monitor(960, 470, 1.1, () => { emo("🤖", 0, -90, 60); }); g.restore(); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L61[7], sfx: [[.1, "whoosh"], [em(F7, "passos"), "pop"], [em(F7, "suco", 0), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const pa = em(F7, "passos"), su = em(F7, "suco"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d"); const nv = seg(t, pa, su + .5);
     g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 380, 1]]); g.fillStyle = "#92400e"; rr(560, 430, 520, 30, 8); g.fill(); copo(820, 430, 1.2, nv * .85, "#fb923c"); robozinho(1000, 330, 1, t, true);
     pedro({ x: 330, y: 565, s: .9, olhar: 1, braco: t > su ? -2.6 : -1, bracoE: t > su ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > su && t < mc) placaShow("suco prontinho! 🍊", 820, 200, seg(t, su, su + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "receita"), "pop"], [em(F8, "GPS"), "pop"], [em(F8, "jogo"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["receita", "🎂", "Receita de bolo:", "passos em ordem"], ["GPS", "🧭", "GPS do celular:", "siga em frente, vire…"], ["jogo", "🎮", "Jogos:", "milhares de instruções"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 2º bimestre de 2027 · Missão 1", [PEDRO, TAINA]); } }
];

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
/* ===== 9º M6 · Programação por eventos (v2) ===== */
function botaoV(x, y, r, aperta) { g.save(); g.translate(x, y + (aperta ? 6 : 0)); g.fillStyle = "#14532d"; g.beginPath(); g.ellipse(0, 12 - (aperta ? 6 : 0), r, r * .45, 0, 0, 7); g.fill(); g.fillStyle = aperta ? "#16a34a" : "#22c55e"; g.beginPath(); g.ellipse(0, 0, r, r * .45, 0, 0, 7); g.fill(); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
const F0 = "Programação por eventos: quando acontecer, faça!",
  F1 = "O Rafa fez um programa de contador para o jogo da turma, mas ele rodava de cima para baixo, mostrava um número e terminava. Ninguém conseguia apertar nada! E o celular? Ele fica esperando a gente tocar. Como?",
  F2 = "Os programas que fizemos até agora rodam de cima para baixo e terminam. Mas o celular, o jogo e a catraca esperam alguma coisa acontecer e, então, reagem. Isso é a programação por eventos.",
  F3 = "O evento é o que acontece. O tratador é o que o programa faz quando ele acontece. Tocar no ícone: abrir o aplicativo. Chegar mensagem: vibrar e mostrar a notificação. Apertar o botão de pular: o personagem pula. Passar o cartão na catraca: liberar e acender a luz verde.",
  F4 = "No editor, a gaveta Eventos tem o bloco quando acontecer, faça. Os blocos de dentro só rodam quando aquele evento acontece. E rodam de novo, toda vez que ele acontecer.",
  F5 = "Veja o contador de cliques. Definir cliques para zero roda uma vez só, no começo. E, quando acontecer o botão verde: alterar cliques por um e mostrar cliques. Apertou três vezes? Aparece um, dois, três.",
  F6 = "E tem mais: eventos mais estados formam um autômato no programa. Uma variável guarda o estado, travada ou liberada, e cada evento, cartão ou empurrar, usa um se para decidir a transição.",
  F7 = "No portal, quando você aperta Rodar, os eventos acontecem na ordem mostrada em cima do editor, como se alguém apertasse os botões.",
  F8 = "O Rafa trocou o programa por um evento de clique, e o contador do jogo da turma funcionou! Missão cumprida!",
  F9 = "Onde eu uso isso? Todo aplicativo de celular é programado por eventos: tocar, arrastar, chegar mensagem. A porta automática do mercado reage ao sensor de movimento. E, nos jogos, cada botão do controle é um evento com o seu tratador.",
  F10 = "Agora é com vocês: abram a Missão 6 no portal!";
const L96 = { 5: "Veja o contador de cliques. Definir cliques para 0 roda uma vez só, no começo. E, quando acontecer o botão verde: alterar cliques por 1 e mostrar cliques. Apertou 3 vezes? Aparece 1, 2, 3." };
const EV = [["👆 tocar no ícone", "abrir o aplicativo"], ["💬 chegar mensagem", "vibrar e notificar"], ["🎮 botão de pular", "o personagem pula"], ["💳 cartão na catraca", "liberar e luz verde"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 260, 1.1], [1.8, 640, 330, 1]]); celular(640, 270, .6, () => { g.fillStyle = "#dbeafe"; g.fillRect(-70, -146, 140, 292); emo("📱", 0, -20, 50); }); onda(640, 260, (t * .8) % 1); emo("👆", 680, 300 + Math.sin(t * 4) * 8, 50); g.restore(); abertura(t, "9º ANO · MISSÃO 6", "Programação por eventos", "QUANDO ACONTECER,", "FAÇA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "cima"), "zum"], [em(F1, "terminava"), "alerta"], [em(F1, "celular"), "pop"], [em(F1, "esperando"), "ding"]],
   draw(t, D) { const ci = em(F1, "cima"), te = em(F1, "terminava"), ni = em(F1, "Ninguém"), ce = em(F1, "celular"), es = em(F1, "esperando"); fundoEscuro(t, "#1e3a8a"); const run = t > ci ? Math.min(3, Math.floor((t - ci) * 1.6)) : -1;
     g.save(); camera(t, [[0, 640, 360, 1], [te, 520, 340, 1.04], [ce, 640, 360, 1]]);
     [["definir pontos para 0", "#ca8a04"], ["mostrar pontos", "#7c3aed"], ["fim 🏁", "#64748b"]].forEach(([s, c], i) => bloco(120, 140 + i * 70, 420, s, c, 1, run === i));
     if (t > ni && t < ce) { botaoV(330, 420, 60, Math.sin(t * 12) > 0); xVermelho(420, 400, 26, seg(t, ni, ni + .3)); }
     if (t > ce) { celular(900, 300, 1, () => { g.fillStyle = "#dbeafe"; g.fillRect(-70, -146, 140, 292); emo("⏳", 0, 10, 50); }); rotulo("esperando…", 900, 500, "#fde68a", seg(t, es, es + .4)); }
     rafa({ x: 650, y: 570, s: .7, olhar: -1, braco: t > ni && t < ce ? -1.4 : .3, bracoE: .3, boca: t > te ? "o" : "riso", pisca: pisca(t) }); g.restore();
     if (t > te && t < ce) balao("Acabou?! Não dá pra apertar!", 640, 160, seg(t, te, te + .4)); } },
 { chip: "EVENTOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "terminam"), "alerta"], [em(F2, "esperam"), "pop"], [em(F2, "reagem"), "ding"], [em(F2, "eventos"), "ding"]],
   draw(t, D) { const tm = em(F2, "terminam"), ep = em(F2, "esperam"), re = em(F2, "reagem"), ev = em(F2, "eventos"); fundoEscuro(t, "#0f172a");
     const k1 = seg(t, .2, .6); if (k1 > 0) { cartaoC("de cima para baixo… e termina", 330, 150, 460, "#e2e8f0", k1); for (let i = 0; i < 3; i++) bloco(170, 230 + i * 60, 320, ["passo 1", "passo 2", "fim 🏁"][i], "#64748b", k1, t > .5 && Math.floor(t * 1.5) % 4 === i); }
     if (t > ep) { cartaoC("espera… e reage!", 960, 150, 420, "#bbf7d0", seg(t, ep, ep + .4)); [["📱", 820], ["🎮", 960], ["🚦", 1100]].forEach(([e, x], i) => { emo(e, x, 320, 70); if (t > re) onda(x, 300, ((t - re) * .9 + i * .3) % 1, "#4ade80"); }); }
     julia({ x: 640, y: 570, s: .55, olhar: 1, braco: t > re ? -2.4 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > ev) placaShow("PROGRAMAÇÃO POR EVENTOS ⚡", 640, 470, seg(t, ev, ev + .4), "#fde68a"); } },
 { chip: "EVENTO E TRATADOR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "evento"), "pop"], [em(F3, "tratador"), "pop"], [em(F3, "Tocar"), "pop"], [em(F3, "Chegar"), "pop"], [em(F3, "Apertar"), "pop"], [em(F3, "Passar"), "pop"]],
   draw(t, D) { const evt = em(F3, "evento"), tr = em(F3, "tratador"), ts = [em(F3, "Tocar"), em(F3, "Chegar"), em(F3, "Apertar"), em(F3, "Passar")]; fundoEscuro(t, "#312e81"); const at = ts.filter(x => t > x).length - 1; g.save(); camera(t, [[0, 640, 340, 1], [ts[1], 640, 380, 1.02], [ts[3] + 1, 640, 350, 1]]);
     cartaoC("EVENTO", 360, 160, 320, "#fde68a", seg(t, evt, evt + .4), "o que acontece"); cartaoC("TRATADOR", 900, 160, 320, "#bbf7d0", seg(t, tr, tr + .4), "o que o programa faz");
     EV.forEach(([a, b], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k <= 0) return; const y = 260 + i * 70; etq(a, 360, y, at === i ? "#fde68a" : "#fff", k); seta(540, y, 640, y - 10, 740, y, "#fde047", 5, k); etq(b, 920, y, at === i ? "#bbf7d0" : "#fff", k); }); g.restore(); robozinho(1180, 470, .6, t, at >= 0); } },
 { chip: "QUANDO ACONTECER, FAÇA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Eventos"), "pop"], [em(F4, "quando"), "ding"], [em(F4, "acontece", 1), "pop"], [em(F4, "toda"), "pop"]],
   draw(t, D) { const ga = em(F4, "Eventos"), qu = em(F4, "quando"), ac = em(F4, "acontece", 1), to = em(F4, "toda"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 600, 340, 1], [ac, 680, 340, 1.04], [to + 1, 640, 350, 1]]);
     g.fillStyle = "#1e293b"; rr(60, 100, 260, 400, 18); g.fill(); g.fillStyle = "#ca8a04"; rr(76, 116, 228, 50, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("⚡ Eventos", 190, 149); if (t > ga) etiqueta("a gaveta Eventos", 190, 560 - 40, 190, 170, seg(t, ga, ga + .4));
     const press = t > ac ? Math.floor((t - ac) * 1.2) : -1, fl = t > ac && ((t - ac) * 1.2) % 1 < .5;
     if (t > qu) { chapeu(400, 150, 560, "quando ⟨botão verde⟩ acontecer, faça", "#ca8a04", seg(t, qu, qu + .4)); bloco(440, 214, 500, "alterar pontos por 1", "#ca8a04", seg(t, qu + .3, qu + .7), fl); bloco(440, 272, 500, "mostrar pontos", "#7c3aed", seg(t, qu + .5, qu + .9), fl); }
     if (t > ac) { botaoV(1100, 420, 70, fl); onda(1100, 410, ((t - ac) * 1.2) % 1); rotulo("roda de novo a cada vez! ×" + (press + 1), 700, 420, "#fde68a", seg(t, to, to + .4)); } g.restore(); } },
 { chip: "CONTADOR DE CLIQUES", fala: F5, legenda: L96[5], sfx: [[.1, "whoosh"], [em(F5, "Definir"), "pop"], [em(F5, "verde"), "pop"], [emE(F5, "um", 1), "ding"], [em(F5, "dois"), "ding"], [em(F5, "três", 1), "festa"]],
   draw(t, D) { const de = em(F5, "Definir"), ve = em(F5, "verde"), ap = em(F5, "Apertou"), cs = [emE(F5, "um", 1), em(F5, "dois"), em(F5, "três", 1)]; fundoEscuro(t, "#14532d"); const n = cs.filter(x => t > x).length;
     g.save(); camera(t, [[0, 640, 340, 1], [ap, 640, 330, 1.03]]); bloco(80, 110, 460, "definir cliques para 0", "#ca8a04", seg(t, de, de + .4), t > de && t < ve); if (t > de) rotulo("roda 1 vez, no começo", 310, 196, "#fde68a", seg(t, de + .5, de + .9));
     if (t > ve) { chapeu(80, 240, 520, "quando ⟨botão verde⟩ acontecer", "#ca8a04", seg(t, ve, ve + .4)); bloco(120, 304, 480, "alterar cliques por 1", "#ca8a04", seg(t, ve + .3, ve + .7), cs.some(x => t > x && t < x + .4)); bloco(120, 362, 480, "mostrar cliques", "#7c3aed", seg(t, ve + .5, ve + .9), cs.some(x => t > x && t < x + .4)); }
     botaoV(800, 440, 70, cs.some(x => t > x - .2 && t < x + .2)); cs.forEach(x => onda(800, 430, (t - x + .2) * 1.4)); telinha(1060, 200, 220, "tela", [n ? String(n) : "0"], 1, -1, n === 3); g.restore(); } },
 { chip: "EVENTOS + ESTADOS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "autômato"), "ding"], [em(F6, "variável"), "pop"], [em(F6, "se"), "pop"]],
   draw(t, D) { const au = em(F6, "autômato"), va = em(F6, "variável"), se = em(F6, "cada"); fundoEscuro(t, "#312e81"); palavra("EVENTOS + ESTADOS = AUTÔMATO", 560, 80, seg(t, au, au + .4), 40);
     if (t > va) cartaoC("📦 estado: travada", 200, 300, 300, "#bae6fd", seg(t, va, va + .4), "ou liberada");
     if (t > se) { chapeu(380, 170, 560, "quando ⟨💳 cartão⟩ acontecer", "#ca8a04", seg(t, se, se + .4)); bloco(420, 234, 520, "se estado = travada então", "#ea580c", seg(t, se + .2, se + .6), true); bloco(460, 292, 480, "definir estado para liberada", "#0891b2", seg(t, se + .4, se + .8));
       chapeu(380, 380, 560, "quando ⟨✋ empurrar⟩ acontecer", "#ca8a04", seg(t, se + .6, se + 1)); bloco(420, 444, 520, "se estado = liberada então…", "#ea580c", seg(t, se + .8, se + 1.2)); } rafa({ x: 1150, y: 570, s: .6, olhar: -1, braco: -1.3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "NO PORTAL", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Rodar"), "ding"], [em(F7, "ordem"), "pop"], [em(F7, "botões"), "pop"]],
   draw(t, D) { const ro = em(F7, "Rodar"), or = em(F7, "ordem"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 330, 1], [or, 640, 260, 1.05], [or + 4, 640, 330, 1]]); g.fillStyle = "#1e293b"; rr(80, 90, 1120, 430, 20); g.fill();
     ["🟢 botão verde", "🟢 botão verde", "💳 cartão", "✋ empurrar"].forEach((s, i) => { const k = seg(t, or + i * .2, or + .4 + i * .2), at = t > or + 1 ? Math.floor((t - or - 1) * 1.2) : -1; etq(s, 250 + i * 250, 150, at === i ? "#fde68a" : "#fff", k); if (at > i) visto(340 + i * 250, 150, 14, 1); });
     if (t > or) rotulo("fila de eventos ➜", 640, 210, "#bbf7d0", seg(t, or, or + .4)); chapeu(160, 270, 520, "quando ⟨botão verde⟩ acontecer", "#ca8a04", 1); bloco(200, 334, 480, "alterar cliques por 1", "#ca8a04", 1);
     g.fillStyle = "#16a34a"; rr(900, 290, 200, 70, 16); g.fill(); g.fillStyle = "#fff"; g.font = `900 28px ${F}`; g.textAlign = "center"; g.fillText("▶ Rodar", 1000, 335); if (t > ro) onda(1000, 325, ((t - ro) * .8) % 1); g.restore(); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "clique"), "pop"], [em(F8, "funcionou"), "festa"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const cl1 = em(F8, "clique"), fu = em(F8, "funcionou"), mc = em(F8, "Missão"); fundoEscuro(t, "#1e3a8a"); const n = t > cl1 ? Math.min(9, Math.floor((t - cl1) * 3)) : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 380, 1]]); painelNumTxt(String(n), 640, 340); botaoV(640, 470, 70, ((t * 3) % 1) < .4 && t > cl1); rafa({ x: 300, y: 570, s: .8, olhar: 1, braco: t > fu ? -2.6 : -1, bracoE: t > fu ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); julia({ x: 980, y: 570, s: .8, olhar: -1, braco: t > fu ? -2.6 : .3, bracoE: t > fu ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "aplicativo"), "pop"], [em(F9, "porta"), "pop"], [em(F9, "jogos"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["aplicativo", "📱", "Aplicativos:", "tocar, arrastar, mensagem"], ["porta", "🚪", "Porta automática:", "sensor de movimento"], ["jogos", "🎮", "Jogos:", "cada botão, um evento"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 6", [RAFA, JULIA]); } }
];
function painelNumTxt(txt, x, y) { g.fillStyle = "#0f172a"; rr(x - 110, y - 80, 220, 140, 18); g.fill(); g.strokeStyle = "#fde047"; g.lineWidth = 5; g.stroke(); g.fillStyle = "#4ade80"; g.font = `900 90px ${F}`; g.textAlign = "center"; g.fillText(txt, x, y + 30); }

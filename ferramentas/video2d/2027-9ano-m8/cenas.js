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
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
/* ===== 9º M8 · O mapa da escola em grafo (v2) ===== */
const EN = { "portão": [190, 330, "🚪"], "pátio": [520, 330, "⛲"], cantina: [520, 130, "🍽️"], "informática": [930, 190, "💻"], biblioteca: [930, 440, "📚"] };
const EA = [["portão", "pátio", 1], ["pátio", "cantina", 1], ["pátio", "informática", 2], ["pátio", "biblioteca", 2], ["informática", "biblioteca", 1]];
const temE = (lst, a, b) => lst && lst.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
function escolaG(o) { o = o || {}; EA.forEach(([a, b, w], i) => { const [x1, y1] = EN[a], [x2, y2] = EN[b], k = o.kA == null ? 1 : seg(o.kA, i * .15, .3 + i * .15); if (k <= 0) return; const fora = temE(o.fora, a, b), on = temE(o.hl, a, b);
    g.save(); g.globalAlpha = cl(k); g.lineCap = "round"; g.strokeStyle = fora ? "#ef4444" : on ? (o.cor || "#facc15") : "#94a3b8"; g.lineWidth = on ? 12 : 7; if (fora) g.setLineDash([14, 12]); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.setLineDash([]); g.restore();
    if (fora) emo("🚧", (x1 + x2) / 2, (y1 + y2) / 2 + 18, 50); else if (o.peso != null) { const kp = typeof o.peso === "number" ? seg(o.peso, i * .5, .3 + i * .5) : 1; if (kp > 0) { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; g.save(); g.globalAlpha = cl(kp); g.fillStyle = on ? "#facc15" : "#fff"; g.beginPath(); g.arc(mx, my, 26, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(w + "′", mx, my + 8); g.restore(); } } });
  Object.entries(EN).forEach(([n, [x, y, e]], i) => { const k = o.kN == null ? 1 : seg(o.kN, i * .12, .3 + i * .12); if (k <= 0) return; const z = back(cl(k)), on = o.nos && o.nos.includes(n); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = on ? "#fde68a" : "#fff"; g.beginPath(); g.arc(0, 0, 46, 0, 7); g.fill(); g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 7 : 4; g.stroke(); g.restore(); emo(e, x, y + 16 * z, 42 * z); rotulo(n, x + (n === "cantina" ? -120 : n === "biblioteca" ? 130 : 0), y + (n === "cantina" || n === "biblioteca" ? 8 : n === "pátio" ? 80 : -60), "#fde68a", k); }); }
const F0 = "O mapa da escola em grafo!",
  F1 = "Chegou uma visita na escola, e a diretora pediu ajuda para a turma do nono ano: qual é o caminho mais rápido do portão até a sala de informática? E se um corredor estiver em reforma?",
  F2 = "Vamos transformar a planta da escola num grafo! Cada lugar vira um vértice. Cada corredor vira uma aresta. E o peso é o tempo de caminhada, em minutos.",
  F3 = "Portão até o pátio: um minuto. Pátio até a cantina: um. Pátio até a sala de informática: dois. Pátio até a biblioteca: dois. E informática até a biblioteca: um minuto.",
  F4 = "Primeira pergunta: qual lugar é o mais conectado? É o vértice de maior grau: o pátio, com grau quatro. Ali passa mais gente!",
  F5 = "Segunda pergunta: qual o caminho mais curto do portão até a informática? Portão, pátio, informática: um mais dois, três minutos.",
  F6 = "E se for preciso interditar o corredor do pátio até a informática, por causa de uma reforma? A aresta some, e a gente procura de novo: portão, pátio, biblioteca, informática. Um mais dois mais um: quatro minutos. Quando uma aresta some, o caminho mais curto muda!",
  F7 = "O grafo da escola serve para muita coisa: planejar a rota de fuga, que é o caminho mais curto até a saída; decidir onde colocar o bebedouro, no vértice de maior grau; e orientar os visitantes.",
  F8 = "A turma entregou o mapa em grafo para a diretora, e a visita chegou à sala de informática em três minutos. Missão cumprida!",
  F9 = "Onde eu uso isso? Nos mapas de emergência dos prédios, com a rota de fuga até a saída. Nos shoppings e aeroportos, com o caminho até cada loja ou portão. E no aplicativo de mapa, que recalcula a rota quando uma rua é interditada.",
  F10 = "Agora é com vocês: abram a Missão 8 no portal!";
const L98 = { 1: F1.replace("nono ano", "9º ano"), 3: "Portão até o pátio: 1 minuto. Pátio até a cantina: 1. Pátio até a sala de informática: 2. Pátio até a biblioteca: 2. E informática até a biblioteca: 1 minuto.",
  4: F4.replace("grau quatro", "grau 4"), 5: F5.replace("um mais dois, três minutos", "1 + 2, 3 minutos"), 6: F6.replace("Um mais dois mais um: quatro minutos", "1 + 2 + 1: 4 minutos"), 8: F8.replace("três minutos", "3 minutos") };
const DIR = { camisa: "#be123c", cabelo: "longo" }, VIS = { camisa: "#0ea5e9" };
const C1 = [["portão", "pátio"], ["pátio", "informática"]], C2 = [["portão", "pátio"], ["pátio", "biblioteca"], ["biblioteca", "informática"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 600, 260, 1.05], [1.8, 600, 330, .95]]); g.translate(40, 60); escolaG({ kA: t, kN: t, peso: true, hl: C1 }); g.restore(); abertura(t, "9º ANO · MISSÃO 8", "O mapa da escola", "EM", "GRAFO!", 1.9); } },
 { chip: "A VISITA", fala: F1, legenda: L98[1], sfx: [[.1, "whoosh"], [em(F1, "visita"), "pop"], [em(F1, "diretora"), "pop"], [em(F1, "rápido"), "ding"], [em(F1, "reforma"), "alerta"]],
   draw(t, D) { const vi = em(F1, "visita"), di = em(F1, "diretora"), ra = em(F1, "rápido"), re = em(F1, "reforma"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [ra, 600, 340, 1.04], [re, 640, 360, 1]]); predio(640, 470, 1.1, "#fde68a", "ESCOLA");
     boneco(Object.assign({ x: 300, y: 570, s: .85, olhar: 1, braco: t > di ? -1.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }, DIR)); boneco(Object.assign({ x: 160, y: 570, s: .8, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) }, VIS));
     julia({ x: 960, y: 570, s: .7, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + 2) }); rafa({ x: 1080, y: 570, s: .7, olhar: -1, braco: t > ra ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + 3) }); g.restore();
     if (t > di && t < re) balao("Qual o caminho mais rápido até a informática?", 520, 130, seg(t, di, di + .4)); if (t > re) { emo("🚧", 900, 230, 80); palavra("E SE TIVER REFORMA?", 560, 110, seg(t, re, re + .4), 44); } } },
 { chip: "VIRA GRAFO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "vértice"), "pop"], [em(F2, "aresta"), "pop"], [em(F2, "peso"), "ding"]],
   draw(t, D) { const gr = em(F2, "grafo"), ve = em(F2, "vértice"), ar = em(F2, "aresta"), pe = em(F2, "peso"); fundoEscuro(t, "#0f172a");
     g.save(); camera(t, [[0, 600, 330, 1], [ar, 620, 320, 1.03], [pe, 600, 330, 1]]); escolaG({ kN: t > ve ? t - ve : 0, kA: t > ar ? t - ar : 0, peso: t > pe ? true : null }); g.restore();
     if (t > ve && t < ar) etiqueta("lugar = vértice", 260, 520, 190, 380, seg(t, ve, ve + .4)); if (t > ar && t < pe) etiqueta("corredor = aresta", 300, 120, 360, 320, seg(t, ar, ar + .4)); if (t > pe) cartaoC("peso = minutos de caminhada", 640, 540 - 40, 460, "#fde68a", seg(t, pe, pe + .4)); julia({ x: 1170, y: 570, s: .55, olhar: -1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "OS PESOS", fala: F3, legenda: L98[3], sfx: [[.1, "whoosh"], [em(F3, "minuto"), "pop"], [em(F3, "cantina"), "pop"], [em(F3, "informática"), "pop"], [em(F3, "biblioteca"), "pop"], [em(F3, "biblioteca", 1), "pop"]],
   draw(t, D) { const ts = [em(F3, "minuto"), em(F3, "cantina"), em(F3, "informática"), em(F3, "biblioteca"), em(F3, "biblioteca", 1)]; fundoEscuro(t, "#14532d"); const at = ts.filter(x => t > x).length - 1;
     g.save(); camera(t, [[0, 600, 330, 1], [ts[2], 700, 320, 1.03], [ts[4] + 1, 600, 330, 1]]); escolaG({ peso: true, hl: at >= 0 ? [EA[at].slice(0, 2)] : [] }); g.restore(); palavra("MINUTOS ⏱", 260, 500, seg(t, 0, .4), 36); } },
 { chip: "O MAIS CONECTADO", fala: F4, legenda: L98[4], sfx: [[.1, "whoosh"], [em(F4, "grau"), "ding"], [em(F4, "pátio"), "pop"], [em(F4, "gente"), "festa"]],
   draw(t, D) { const gr = em(F4, "grau"), pa = em(F4, "pátio"), ge = em(F4, "gente"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 600, 330, 1], [pa, 540, 330, 1.06], [ge, 600, 330, 1]]); escolaG({ peso: true, nos: t > pa ? ["pátio"] : [], hl: t > pa ? [["pátio", "portão"], ["pátio", "cantina"], ["pátio", "informática"], ["pátio", "biblioteca"]] : [], cor: "#f472b6" });
     if (t > ge) for (let i = 0; i < 6; i++) boneco({ x: 470 + (i % 3) * 50, y: 300 + Math.floor(i / 3) * 0 + Math.sin(t * 6 + i) * 4, s: .22, camisa: ["#ef4444", "#22c55e", "#3b82f6", "#a855f7", "#f59e0b", "#14b8a6"][i], olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: 0 }); g.restore();
     if (t > pa) placaShow("pátio: grau 4 (maior grau)", 330, 480, seg(t, pa, pa + .4), "#fbcfe8"); } },
 { chip: "CAMINHO MAIS CURTO", fala: F5, legenda: L98[5], sfx: [[.1, "whoosh"], [em(F5, "Portão"), "pop"], [em(F5, "pátio"), "pop"], [em(F5, "informática", 1), "pop"], [em(F5, "três"), "ding"]],
   draw(t, D) { const p1 = em(F5, "Portão"), p2 = em(F5, "pátio"), p3 = em(F5, "informática", 1), tr = em(F5, "três"); fundoEscuro(t, "#0f172a");
     const hl = t > p3 ? C1 : t > p2 ? [C1[0]] : [], nos = [t > p1 ? "portão" : "", t > p2 ? "pátio" : "", t > p3 ? "informática" : ""];
     g.save(); camera(t, [[0, 600, 330, 1], [p2, 600, 300, 1.04], [tr, 600, 330, 1]]); escolaG({ peso: true, hl, nos, cor: "#4ade80" }); g.restore(); if (t > p3 && t < tr) etiqueta("o caminho mais curto", 1090, 120, 760, 250, seg(t, p3, p3 + .4)); if (t > tr) placaShow("1 + 2 = 3 minutos ✅", 640, 540 - 30, seg(t, tr, tr + .4), "#86efac"); } },
 { chip: "CORREDOR EM REFORMA", fala: F6, legenda: L98[6], sfx: [[.1, "alerta"], [em(F6, "some"), "whoosh"], [em(F6, "biblioteca"), "pop"], [em(F6, "quatro"), "ding"], [em(F6, "muda"), "ding"]],
   draw(t, D) { const so = em(F6, "some"), pr = em(F6, "procura"), bi = em(F6, "biblioteca"), qu = em(F6, "quatro"), mu = em(F6, "muda"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 600, 330, 1], [so, 640, 320, 1.02], [qu, 600, 330, 1]]); escolaG({ peso: true, fora: [["pátio", "informática"]], hl: t > bi ? C2 : [], nos: t > bi ? ["portão", "pátio", "biblioteca", "informática"] : [], cor: "#fb923c" }); g.restore();
     if (t > so && t < qu) etiqueta("aresta some 🚧", 1100, 300, 760, 250, seg(t, so, so + .4)); if (t > qu) placaShow("1 + 2 + 1 = 4 minutos", 640, 540 - 30, seg(t, qu, qu + .4), "#fed7aa"); if (t > mu) palavra("O CAMINHO MUDA!", 560, 70, seg(t, mu, mu + .4), 44); } },
 { chip: "PARA QUE SERVE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "fuga"), "pop"], [em(F7, "bebedouro"), "pop"], [em(F7, "visitantes"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("O GRAFO DA ESCOLA SERVE PARA…", 560, 80, seg(t, 0, .4), 40);
     [["fuga", "🏃", "rota de fuga", "caminho mais curto até a saída"], ["bebedouro", "🚰", "bebedouro", "no vértice de maior grau"], ["visitantes", "🧭", "visitantes", "orientar o caminho"]].forEach(([w, e, a, b], i) => { const t0 = em(F7, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 320); g.scale(z, z); g.fillStyle = "#fff"; rr(-170, -140, 340, 280, 22); g.fill(); g.restore(); emo(e, x, 300, 80 * z); if (k > .8) { g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(a, x, 380); g.font = `600 17px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 415); } }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, legenda: L98[8], sfx: [[.1, "whoosh"], [em(F8, "visita"), "pop"], [em(F8, "três"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const vi = em(F8, "visita"), mc = em(F8, "Missão"); fundoEscuro(t, "#1e3a8a"); const p = seg(t, vi, mc - .2);
     g.save(); camera(t, [[0, 600, 340, 1], [mc, 600, 250, .86]]); escolaG({ peso: true, hl: C1, cor: "#4ade80" }); const [x1, y1] = EN["portão"], [x2, y2] = EN["pátio"], [x3, y3] = EN["informática"], q = p * 3, x = q < 1 ? x1 + (x2 - x1) * q : x2 + (x3 - x2) * ((q - 1) / 2), y = q < 1 ? y1 + (y2 - y1) * q : y2 + (y3 - y2) * ((q - 1) / 2);
     boneco(Object.assign({ x, y: y + 30, s: .35, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }, VIS)); g.restore();
     julia({ x: 110, y: 570, s: .55, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 190, y: 570, s: .55, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "emergência"), "pop"], [em(F9, "shoppings"), "pop"], [em(F9, "aplicativo"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["emergência", "🚨", "Mapas de emergência:", "rota de fuga"], ["shoppings", "🛫", "Shoppings e aeroportos:", "caminho até cada portão"], ["aplicativo", "🗺️", "Aplicativo de mapa:", "recalcula a rota"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 8", [JULIA, RAFA]); } }
];

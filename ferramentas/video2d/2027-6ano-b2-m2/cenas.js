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
/* ===== 6º 2º bim. M2 · Sequência (v2) ===== */
const MZ = { x0: 330, y0: 110, c: 92, cols: 6, rows: 4, muros: [[1, 1], [2, 1], [4, 2], [5, 3], [0, 1]], ini: [0, 3], fim: [5, 0] };
const DIRS = { "→": [1, 0], "←": [-1, 0], "↑": [0, -1], "↓": [0, 1] };
const CERTO = ["→", "→", "↑", "→", "↑", "↑", "→", "→"], ERRADO = ["→", "→", "↑", "↑", "→", "↑", "→", "→"];
function labirinto(seq, passos, t0, t) { const { x0, y0, c, cols, rows, muros, ini, fim } = MZ; g.fillStyle = "#e2e8f0"; rr(x0 - 10, y0 - 10, cols * c + 20, rows * c + 20, 14); g.fill();
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { const m = muros.some(([a, b]) => a === i && b === j); g.fillStyle = m ? "#7c2d12" : (i + j) % 2 ? "#f8fafc" : "#f1f5f9"; g.fillRect(x0 + i * c + 2, y0 + j * c + 2, c - 4, c - 4); if (m) emo("🧱", x0 + i * c + c / 2, y0 + j * c + c / 2 + 14, 40); }
  emo("⭐", x0 + fim[0] * c + c / 2, y0 + fim[1] * c + c / 2 + 16, 50);
  let [px, py] = ini, bate = false, n = 0; const prog = t0 == null ? 0 : Math.max(0, (t - t0) * 2.2); for (let i = 0; i < Math.min(passos, seq.length); i++) { if (i >= Math.floor(prog)) break; const [dx, dy] = DIRS[seq[i]], nx = px + dx, ny = py + dy; if (muros.some(([a, b]) => a === nx && b === ny) || nx < 0 || ny < 0 || nx >= cols || ny >= rows) { bate = true; break; } px = nx; py = ny; n++; }
  let fx = 0, fy = 0; if (!bate && n < Math.min(passos, seq.length) && prog > n) { const [dx, dy] = DIRS[seq[n]], q = prog - Math.floor(prog), nx = px + dx, ny = py + dy; if (!muros.some(([a, b]) => a === nx && b === ny)) { fx = dx * q; fy = dy * q; } }
  robozinho(x0 + (px + fx) * c + c / 2, y0 + (py + fy) * c + c / 2 - 6, .45, t, !bate && px === fim[0] && py === fim[1]); if (bate) emo("💥", x0 + px * c + c / 2 + 30, y0 + py * c + 20, 40);
  return { bate, chegou: px === fim[0] && py === fim[1] }; }
function fitaSeq(seq, x, y, at, ruim) { seq.forEach((s, i) => { const on = i === at, err = ruim && ruim.includes(i); g.fillStyle = err ? "#fecaca" : on ? "#fde68a" : "#fff"; rr(x + i * 62, y, 54, 54, 10); g.fill(); g.strokeStyle = err ? "#ef4444" : NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(s, x + i * 62 + 27, y + 38); }); }
function pe(x, y, s, camadas) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#fcd5b5"; g.beginPath(); g.ellipse(0, 0, 90, 40, 0, 0, 7); g.fill(); camadas.forEach(cm => { if (cm === "meia") { g.fillStyle = "#f8fafc"; g.beginPath(); g.ellipse(-5, -4, 92, 42, 0, 0, 7); g.fill(); g.fillStyle = "#93c5fd"; g.fillRect(-60, -46, 30, 84); } if (cm === "tenis") { g.fillStyle = "#ec4899"; g.beginPath(); g.ellipse(0, 4, 98, 44, 0, 0, 7); g.fill(); g.fillStyle = "#fff"; g.fillRect(-98, 30, 196, 16); for (let i = 0; i < 3; i++) { g.strokeStyle = "#fff"; g.lineWidth = 4; g.beginPath(); g.moveTo(-10 + i * 22, -30); g.lineTo(10 + i * 22, -10); g.stroke(); } } }); g.restore(); }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
const F0 = "Sequência: a ordem importa!",
  F1 = "A Tainá estava atrasada para a aula de informática. Calçou o tênis bem rápido e depois a meia. Resultado: a meia ficou por cima do tênis! Todo mundo riu, e ela teve que fazer tudo de novo.",
  F2 = "Na sequência, as instruções, ou comandos, são feitas uma depois da outra, de cima para baixo, na ordem em que estão escritas. O computador vai executar cada passo, e nunca pula um passo, nem muda a ordem sozinho.",
  F3 = "A ordem importa! Calçar a meia e depois o tênis: perfeito. Trocou? A meia fica por cima. Entrar na sala antes de abrir a porta? Você bate na porta fechada. Escovar os dentes antes de colocar o creme dental? Escova sem creme!",
  F4 = "O robozinho do labirinto também segue uma sequência. Cada seta é uma instrução que anda uma casa: direita, esquerda, cima e baixo.",
  F5 = "Se as setas estiverem na ordem certa, o robô chega na estrela. Mas, se uma seta estiver no lugar errado, ele bate na parede, ou para longe da estrela.",
  F6 = "A dica para montar a sequência: pergunte sempre o que tem que acontecer primeiro. Depois: e agora, o que vem logo depois?",
  F7 = "No dia seguinte, a Tainá calçou a meia primeiro e depois o tênis, e chegou na hora. Missão cumprida!",
  F8 = "Onde eu uso isso? Para mandar uma mensagem: desbloquear, abrir o aplicativo, escolher a pessoa, digitar e só depois enviar. No micro-ondas: colocar a comida, fechar a porta, escolher o tempo e só então apertar iniciar. E na senha do celular: os números certos, na ordem errada, não abrem o aparelho.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 250, 1], [1.8, 640, 320, .95]]); g.translate(0, 30); labirinto(CERTO, 8, .1, t); g.restore(); abertura(t, "6º ANO · 2º BIM. · MISSÃO 2", "Sequência", "A ORDEM", "IMPORTA!", 1.9); } },
 { chip: "A PRESSA DA TAINÁ", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "tênis"), "pop"], [em(F1, "meia"), "pop"], [em(F1, "cima"), "alerta"], [em(F1, "riu"), "festa"]],
   draw(t, D) { const te = em(F1, "tênis"), me = em(F1, "meia"), ci = em(F1, "cima"), ri = em(F1, "riu"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 640, 360, 1], [me, 820, 380, 1.08], [ri, 640, 360, 1]]); taina({ x: 330, y: 565, s: .9, olhar: 1, braco: t > ri ? -2.4 : -.8, bracoE: .3, boca: t > ci ? "o" : "riso", pisca: pisca(t) });
     pe(820, 420, 1.3, [t > te ? "tenis" : "", t > me ? "meia" : ""]); if (t > te) etq("1º tênis 👟", 720, 300, "#fde68a", seg(t, te, te + .4)); if (t > me) etq("2º meia 🧦", 920, 300, "#fecaca", seg(t, me, me + .4)); g.restore();
     if (t < te) balao("Tô atrasada! 😰", 380, 170, seg(t, .3, .7)); if (t > ci && t < ri) placaShow("a meia por cima do tênis! 😅", 820, 150, seg(t, ci, ci + .4), "#fecaca"); if (t > ri) { emo("😂", 1080, 200, 60); emo("🤣", 1180, 280, 50); palavra("TUDO DE NOVO!", 560, 110, seg(t, ri + .5, ri + .9), 46); } } },
 { chip: "SEQUÊNCIA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "depois"), "pop"], [em(F2, "cima"), "zum"], [em(F2, "nunca"), "alerta"]],
   draw(t, D) { const de = em(F2, "depois"), ci = em(F2, "cima"), nu = em(F2, "nunca"), mu = em(F2, "muda"); fundoEscuro(t, "#0f172a"); palavra("SEQUÊNCIA", 560, 90, seg(t, 0, .4), 60); const at = t > de ? Math.floor((t - de) * 1.4) % 5 : -1;
     g.save(); camera(t, [[0, 600, 340, 1], [ci, 560, 320, 1.04], [nu, 640, 340, 1]]); ["1. calçar a meia", "2. calçar o tênis", "3. amarrar o cadarço", "4. pegar a mochila", "5. ir para a aula"].forEach((s, i) => bloco(140, 170 + i * 62, 480, s, ["#ca8a04", "#7c3aed", "#0891b2", "#16a34a", "#db2777"][i], seg(t, .3 + i * .15, .6 + i * .15), at === i));
     if (at >= 0) { g.fillStyle = "#fde047"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("➜", 105, 208 + at * 62); } g.restore();
     if (t > ci) rotulo("de cima para baixo ⬇", 900, 200, "#fde68a", seg(t, ci, ci + .4)); if (t > nu) cartaoC("❌ nunca pula um passo", 920, 320, 400, "#fecaca", seg(t, nu, nu + .4)); if (t > mu) cartaoC("❌ nunca muda a ordem", 920, 440, 400, "#fecaca", seg(t, mu, mu + .4)); } },
 { chip: "A ORDEM IMPORTA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "perfeito"), "ding"], [em(F3, "Trocou"), "alerta"], [em(F3, "porta", 1), "alerta"], [em(F3, "creme", 1), "alerta"]],
   draw(t, D) { const pf = em(F3, "perfeito"), tr = em(F3, "Trocou"), en = em(F3, "Entrar"), bt = em(F3, "bate"), es = em(F3, "Escovar"), sc = em(F3, "sem"); fundoEscuro(t, "#312e81"); palavra("A ORDEM IMPORTA!", 560, 80, seg(t, 0, .4), 50);
     [[pf, "🧦 ➜ 👟", "meia, depois tênis", "#bbf7d0", true], [tr, "👟 ➜ 🧦", "trocou: meia por cima!", "#fecaca", false], [bt, "🚶 ➜ 🚪", "entrar antes de abrir: bate na porta!", "#fecaca", false], [sc, "🪥 ➜ 🧴", "escovar antes do creme: sem creme!", "#fecaca", false]].forEach(([t0, e, s, c, ok], i) => { const k = seg(t, t0 - .3, t0 + .1); if (k <= 0) return; const x = i % 2 ? 940 : 340, y = 210 + Math.floor(i / 2) * 170; cartaoC(e, x, y, 520, c, k, s); if (k >= 1) { if (ok) visto(x + 230, y - 20, 22, 1); else xVermelho(x + 230, y - 20, 18, 1); } });
     taina({ x: 640, y: 570, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O LABIRINTO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "seta"), "pop"], [em(F4, "direita"), "pop"], [em(F4, "esquerda"), "pop"], [emE(F4, "cima"), "pop"], [em(F4, "baixo"), "pop"]],
   draw(t, D) { const se = em(F4, "seta"), ds = [em(F4, "direita"), em(F4, "esquerda"), emE(F4, "cima"), em(F4, "baixo")]; fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 600, 300, 1], [se, 620, 300, 1.03]]); labirinto(CERTO, 0, null, t); g.restore();
     ["→", "←", "↑", "↓"].forEach((s, i) => { const k = seg(t, ds[i], ds[i] + .4); if (k <= 0) return; etq(s + " " + ["direita", "esquerda", "cima", "baixo"][i], 160 + i * 250 + 70, 520, "#fde68a", k); });
     if (t > se) etiqueta("1 seta = anda 1 casa", 1120, 160, 920, 210, seg(t, se, se + .4)); } },
 { chip: "CERTO OU ERRADO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "estrela"), "festa"], [em(F5, "errado"), "alerta"], [em(F5, "parede"), "alerta"]],
   draw(t, D) { const ce = em(F5, "certa"), es = em(F5, "estrela"), er = em(F5, "errado"), pa = em(F5, "parede"); fundoEscuro(t, "#0f172a"); const ruim = t > er;
     g.save(); camera(t, [[0, 640, 300, .95], [er, 640, 300, .95]]); g.translate(0, -40); const r = labirinto(ruim ? ERRADO : CERTO, 8, ruim ? er + .3 : ce, t); g.restore();
     fitaSeq(ruim ? ERRADO : CERTO, 392, 512, -1, ruim ? [3, 4] : null); if (!ruim && r.chegou) placaShow("chegou na estrela! ⭐", 1080, 160, 1, "#86efac"); if (ruim && r.bate) placaShow("bateu na parede! 💥", 1080, 160, 1, "#fecaca"); } },
 { chip: "A DICA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "primeiro"), "ding"], [em(F6, "agora"), "ding"]],
   draw(t, D) { const pr = em(F6, "primeiro"), ag = em(F6, "agora"); fundoEscuro(t, "#312e81"); palavra("A DICA 💡", 560, 90, seg(t, 0, .4), 56);
     if (t > pr) cartaoC("1️⃣ O que acontece PRIMEIRO?", 640, 230, 620, "#fde68a", seg(t, pr, pr + .4)); if (t > ag) { seta(640, 290, 660, 320, 640, 350, "#fde047", 6, seg(t, ag - .3, ag)); cartaoC("2️⃣ E agora, o que vem DEPOIS?", 640, 410, 620, "#bbf7d0", seg(t, ag, ag + .4)); }
     taina({ x: 1150, y: 570, s: .7, olhar: -1, braco: -2.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); robozinho(140, 440, .7, t, true); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "meia"), "pop"], [em(F7, "tênis"), "pop"], [em(F7, "hora"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const me = em(F7, "meia"), te = em(F7, "tênis"), ho = em(F7, "hora"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 390, 1]]);
     pe(820, 400, 1.2, [t > me ? "meia" : "", t > te ? "tenis" : ""]); if (t > me) etq("1º meia 🧦", 720, 290, "#bbf7d0", seg(t, me, me + .4)); if (t > te) etq("2º tênis 👟", 920, 290, "#bbf7d0", seg(t, te, te + .4));
     taina({ x: 330, y: 565, s: .9, olhar: 1, braco: t > ho ? -2.6 : .3, bracoE: t > ho ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); if (t > ho) relogio(1120, 420, 60, .2, seg(t, ho, ho + .4)); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mensagem"), "pop"], [em(F8, "micro"), "pop"], [em(F8, "senha"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mensagem", "💬", "Mandar mensagem:", "digitar, depois enviar"], ["micro", "🍲", "Micro-ondas:", "fechar, depois iniciar"], ["senha", "🔢", "Senha do celular:", "a ordem certa abre"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 2º bimestre de 2027 · Missão 2", [TAINA, PEDRO]); } }
];

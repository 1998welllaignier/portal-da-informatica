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
/* ===== 6º 2º bim. M6 · Decompor (v2) ===== */
const ICO = ["🎈", "🍰", "🎵", "🧹", "🧃", "🎁", "🪩", "🧻"];
function caos(t, cx, cy, k, tam, vel) { ICO.forEach((e, i) => { const a = t * (vel || 1) * (1.2 + i * .17) + i * 1.7, r = 70 + ((i * 53) % 90); emo(e, cx + Math.cos(a) * r * 1.6, cy + Math.sin(a * 1.3) * r * .8, (tam || 52) * k); }); }
const COR4 = ["#f472b6", "#fb923c", "#a78bfa", "#38bdf8"], EM4 = ["🎈", "🍰", "🎵", "🧹"];
function bloco4(x, y, w, h, k, tx) { for (let i = 0; i < 4; i++) { const c = i % 2, r = i >> 1, cx = x + (c - .5) * w / 2 + (c - .5) * 2 * 120 * k, cy = y + (r - .5) * h / 2 + (r - .5) * 2 * 62 * k, s = 1 - .12 * k;
  g.save(); g.translate(cx, cy); g.scale(s, s); g.fillStyle = COR4[i]; rr(-w / 4 + 2, -h / 4 + 2, w / 2 - 4, h / 2 - 4, 16); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 4; g.stroke(); g.restore(); emo(EM4[i], cx, cy + 18 * s, 56 * s); }
  if (tx && k < .5) { g.save(); g.globalAlpha = 1 - k * 2; g.font = `900 34px ${F}`; g.textAlign = "center"; g.lineWidth = 8; g.strokeStyle = NAVY; g.lineJoin = "round"; g.strokeText(tx, x, y + 12); g.fillStyle = "#fff"; g.fillText(tx, x, y + 12); g.restore(); } }
function cardSub(x, y, e, nome, itens, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.3)"; g.shadowBlur = 14; rr(-125, -140, 250, 280, 22); g.fill(); g.shadowBlur = 0; g.strokeStyle = NAVY; g.lineWidth = 4; g.stroke();
  emo(e, 0, -64, 76); g.fillStyle = NAVY; g.font = `900 24px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 8); g.font = `700 21px ${F}`; itens.forEach((s, i) => g.fillText("• " + s, 0, 52 + i * 34)); g.restore(); }
function festa(t, ts) { g.save(); g.translate(0, -40); g.fillStyle = "#fde68a"; g.fillRect(-300, -200, 1880, 700); g.fillStyle = "#b45309"; g.fillRect(-300, 500, 1880, 400); g.fillStyle = "#92400e"; g.fillRect(-300, 494, 1880, 10);
  const k0 = seg(t, ts[0], ts[0] + .6), k1 = seg(t, ts[1], ts[1] + .6), k2 = seg(t, ts[2], ts[2] + .6), k3 = seg(t, ts[3], ts[3] + .6);
  if (k0 > 0) { g.globalAlpha = k0; g.strokeStyle = "#7c3aed"; g.lineWidth = 5; g.beginPath(); g.moveTo(120, 250); g.quadraticCurveTo(640, 390, 1160, 250); g.stroke();
    for (let i = 0; i < 12; i++) { const u = i / 11, yy = 250 + 280 * u * (1 - u) * 0.5 * 2 * .5 * 2; g.fillStyle = ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b"][i % 4]; g.beginPath(); g.moveTo(120 + u * 1040 - 16, yy); g.lineTo(120 + u * 1040 + 16, yy); g.lineTo(120 + u * 1040, yy + 40); g.fill(); }
    g.fillStyle = "#fff"; rr(480, 330, 320, 64, 14); g.fill(); g.strokeStyle = "#7c3aed"; g.lineWidth = 5; g.stroke(); g.fillStyle = "#7c3aed"; g.font = `900 36px ${F}`; g.textAlign = "center"; g.fillText("PARABÉNS!", 640, 375); g.globalAlpha = 1;
    emo("🎈", 150, 420 + Math.sin(t * 2) * 8, 100 * k0); emo("🎈", 1130, 420 + Math.sin(t * 2 + 1) * 8, 100 * k0); }
  if (k1 > 0) { g.fillStyle = "#7c2d12"; rr(440, 450, 400, 30, 8); g.fill(); g.fillRect(470, 480, 14, 36); g.fillRect(796, 480, 14, 36); emo("🍰", 540, 440, 76 * k1); emo("🥟", 640, 440, 66 * k1); emo("🧃", 740, 440, 66 * k1); }
  if (k2 > 0) { for (let i = 0; i < 3; i++) emo(["🎵", "🎶", "🎵"][i], 220 + i * 60, 400 - Math.abs(Math.sin(t * 3 + i)) * 40, 46 * k2); emo("🔊", 970, 440, 56 * k2);
    pessoa(400, 560 - Math.abs(Math.sin(t * 7)) * 26, 1.1 * k2, "#22c55e"); pessoa(880, 560 - Math.abs(Math.sin(t * 7 + 1)) * 26, 1.1 * k2, "#0ea5e9"); }
  if (k3 > 0) { emo("🗑️", 1180, 500, 80 * k3); emo("🧹", 1090 + Math.sin(t * 4) * 30, 505, 64 * k3); if (k3 >= 1) { emo("✨", 560, 505, 36); emo("✨", 760, 495, 30); emo("✨", 300, 500, 32); } } g.restore(); }
const F0 = "Decompor: dividir para resolver!",
  F1 = "A turma ia fazer um aniversário, e a Tainá e o Pedro ficaram com a organização. Era um problema grande: balões, bolo, música, limpeza, tudo misturado! Eles não sabiam por onde começar.",
  F2 = "Primeiro, o Pedro tentou fazer tudo ao mesmo tempo, sozinho. Encheu balão, cortou bolo, ligou a música... e foi um desastre! Os balões estouraram, e o bolo caiu.",
  F3 = "Foi quando o robozinho Bit apareceu com uma dica: decompor! Decompor é dividir um problema grande em partes menores e mais fáceis. O nome do processo é decomposição.",
  F4 = "Olha como ficou! Decoração: balões, faixa e toalha. Comida: bolo, salgados e suco. Diversão: músicas e brincadeiras. Limpeza: recolher o lixo e arrumar a sala. Cada parte menor é um subproblema.",
  F5 = "Cada parte pode ser resolvida por uma pessoa ou por uma equipe. Equipe é um grupo de pessoas que dividem as partes de um trabalho. A Tainá ficou com a decoração, o Pedro com a comida, uma equipe com a diversão e o Bit com a limpeza.",
  F6 = "O segredo tem quatro passos. Um: diga qual é o problema grande. Dois: pergunte de que partes ele é feito. Três: resolva uma parte de cada vez. Quatro: junte tudo e confira.",
  F7 = "Vamos ver acontecendo! A decoração ficou pronta: balões e faixa no lugar. A comida ficou pronta: bolo na mesa. A diversão ficou pronta: música tocando. A limpeza ficou pronta: sala arrumada. Juntando tudo, o problema grande está resolvido!",
  F8 = "Os programadores também fazem assim. Um jogo de celular é dividido em partes: os personagens, o cenário, os pontos e os sons. E cada equipe cuida de uma.",
  F9 = "No fim, a festa foi um sucesso! O que parecia impossível ficou fácil, porque a Tainá e o Pedro souberam decompor o problema e resolveram uma parte de cada vez. Missão cumprida!",
  F10 = "Onde eu uso isso? Para arrumar o quarto: arrumar a cama, guardar as roupas e recolher os brinquedos. No trabalho em grupo da escola: cada um faz uma parte, como pesquisar, fazer o cartaz e ensaiar a apresentação. E num time de futebol: goleiro, defesa, meio-campo e ataque dividem o jogo.",
  F11 = "Agora é com vocês: abram a Missão 6 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "misterio"], [1.5, "pop"], [2.0, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const sp = seg(t, 1.5, 2.3); g.save(); camera(t, [[0, 640, 300, 1.12], [2.4, 640, 300, .95]]); const sh = t < 1.5 ? Math.sin(t * 40) * 4 * seg(t, .3, 1.4) : 0; g.translate(sh, 0); bloco4(640, 250, 400, 180, io2(sp) * .7, "PROBLEMA GRANDE"); if (t < 1.5) caos(t, 640, 250, .8, 44, 1.4); g.restore();
     abertura(t, "6º ANO · 2º BIM. · MISSÃO 6", "Decompor", "PROBLEMA GRANDE?", "DIVIDA PARA RESOLVER!", 1.6); } },
 { chip: "A FESTA DA TURMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "aniversário"), "pop"], [em(F1, "grande"), "alerta"], [em(F1, "misturado"), "alerta"], [em(F1, "sabiam"), "misterio"]],
   draw(t, D) { const gr = em(F1, "grande"), mi = em(F1, "misturado"), sa = em(F1, "sabiam"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 360, 1], [gr, 640, 330, 1.1], [sa, 640, 360, 1]]);
     caos(t, 640, 300, seg(t, .3, .8) * 1.5, 70, t > mi ? 2.2 : 1);
     taina({ x: 250, y: 565, s: .9, olhar: 1, braco: .3, bracoE: .3, boca: t > sa ? "o" : "", pisca: pisca(t) }); pedro({ x: 1030, y: 565, s: .9, olhar: -1, braco: t > mi ? -2.2 : -.4, bracoE: .3, boca: t > mi ? "o" : "riso", pisca: pisca(t + .6) });
     if (t > gr) etiqueta("PROBLEMA GRANDE", 330, 140, 500, 215, seg(t, gr, gr + .4)); g.restore();
     if (t > sa) balao("Por onde começar? 😵", 330, 330, seg(t, sa, sa + .4)); } },
 { chip: "TUDO DE UMA VEZ", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "tudo"), "pop"], [em(F2, "desastre"), "alerta"], [em(F2, "estouraram"), "pop"], [em(F2, "caiu"), "desce"]],
   draw(t, D) { const tu = em(F2, "tudo"), ds = em(F2, "desastre"), es = em(F2, "estouraram"), ca = em(F2, "caiu"); fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 350, 1], [tu, 520, 330, 1.12], [ds, 640, 350, 1]]);
     g.fillStyle = "#92400e"; g.fillRect(-300, 500, 1880, 300);
     pedro({ x: 520, y: 565, s: .95, olhar: 1, braco: t > ds ? -2.6 : -1.4 + Math.sin(t * 9) * .5, bracoE: t > ds ? 2.6 : 1.4 - Math.sin(t * 9) * .5, boca: t > ds ? "o" : "riso", pisca: pisca(t) });
     ICO.forEach((e, i) => { const a = t * 3 + i * .8, ox = 520 + Math.cos(a) * 150, oy = 260 + Math.sin(a * 1.2) * 70; let x = ox, y = oy; if (t > ds) { const d = t - ds, a0 = ds * 3 + i * .8, x0 = 520 + Math.cos(a0) * 150, y0 = 260 + Math.sin(a0 * 1.2) * 70; x = x0 + (i - 3.5) * 40 * Math.min(d, 1.2); y = Math.min(500, y0 + d * d * 380); }
       if (e === "🎈" && t > es && t < es + 1.6) emo("💥", x, y, 64); else if (e === "🎈" && t > es) return; else emo(e === "🍰" && t > ca ? "🍰" : e, x, y, 52); });
     if (t > tu && t < ds) palavra("TUDO AO MESMO TEMPO?", 600, 100, seg(t, tu, tu + .4), 54); if (t > ds) xVermelho(760, 230, 60, seg(t, ds, ds + .3));
     taina({ x: 1060, y: 565, s: .9, olhar: -1, braco: t > ds ? -2.4 : .3, bracoE: .3, boca: t > ds ? "o" : "", pisca: pisca(t + .3) }); g.restore();
     if (t > ds) balao("Socorro! 😱", 1000, 340, seg(t, ds + .3, ds + .7)); } },
 { chip: "DECOMPOR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "robozinho"), "pop"], [em(F3, "decompor"), "ding"], [em(F3, "dividir"), "zum"], [em(F3, "partes"), "pop"], [em(F3, "decomposição"), "ding"]],
   draw(t, D) { const bi = em(F3, "Bit"), dc = em(F3, "decompor"), dv = em(F3, "dividir"), pa = em(F3, "partes"), fa = em(F3, "fáceis"), dm = em(F3, "decomposição"); fundoEscuro(t, "#0e7490");
     const k = io2(seg(t, pa, pa + .9)); g.save(); camera(t, [[0, 640, 330, 1], [dv, 640, 340, 1.06], [pa + .5, 640, 330, .98]]);
     bloco4(640, 335, 500, 200, k, "PROBLEMA GRANDE"); robozinho(170, 470, 1.2, t, t > pa); if (t > bi && t < dc) balao("Eu sou o Bit!", 250, 350, seg(t, bi, bi + .4));
     if (t > fa) etiqueta("mais fáceis!", 1040, 470, 880, 440, seg(t, fa, fa + .4)); if (t > pa) etiqueta("partes menores", 240, 200, 400, 270, seg(t, pa, pa + .4)); g.restore();
     if (t > dm) palavra("DECOMPOSIÇÃO", 560, 100, seg(t, dm, dm + .4), 62); else if (t > dc) palavra("DECOMPOR", 560, 100, seg(t, dc, dc + .4), 72); } },
 { chip: "SUBPROBLEMAS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Decoração"), "pop"], [em(F4, "Comida"), "pop"], [em(F4, "Diversão"), "pop"], [em(F4, "Limpeza"), "pop"], [em(F4, "subproblema"), "ding"]],
   draw(t, D) { const a = [em(F4, "Decoração"), em(F4, "Comida"), em(F4, "Diversão"), em(F4, "Limpeza")], sp = em(F4, "subproblema"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 640, 330, 1], [a[1], 600, 330, 1.04], [a[3], 680, 330, 1.04], [sp, 640, 330, 1]]);
     [["🎈", "DECORAÇÃO", ["balões", "faixa", "toalha"]], ["🍰", "COMIDA", ["bolo", "salgados", "suco"]], ["🎵", "DIVERSÃO", ["músicas", "brincadeiras"]], ["🧹", "LIMPEZA", ["recolher o lixo", "arrumar a sala"]]].forEach(([e, n, it], i) => cardSub(235 + i * 270, 320, e, n, it, COR4[i], seg(t, a[i], a[i] + .4))); g.restore();
     if (t > sp) { palavra("SUBPROBLEMA", 560, 100, seg(t, sp, sp + .4), 72); etiqueta("cada parte menor", 640, 505, 640, 465, seg(t, sp + .3, sp + .7)); } } },
 { chip: "EQUIPE", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "pessoa"), "pop"], [em(F5, "equipe", 1), "ding"], [em(F5, "Tainá"), "pop"], [em(F5, "Pedro"), "pop"], [em(F5, "diversão"), "pop"], [em(F5, "Bit"), "pop"]],
   draw(t, D) { const pe = em(F5, "pessoa"), eq = em(F5, "equipe", 1), ta = em(F5, "Tainá"), pd = em(F5, "Pedro"), di = em(F5, "diversão"), bt = em(F5, "Bit"); fundoEscuro(t, "#14532d"); const X = [235, 505, 775, 1045];
     g.save(); camera(t, [[0, 640, 340, 1], [eq, 700, 340, 1.05], [bt, 640, 340, 1]]);
     g.fillStyle = "#166534"; g.fillRect(-300, 480, 1880, 400);
     [["🎈", "DECORAÇÃO", ta], ["🍰", "COMIDA", pd], ["🎵", "DIVERSÃO", di], ["🧹", "LIMPEZA", bt]].forEach(([e, n, t0], i) => { cartaoC(e + " " + n, X[i], 150, 240, COR4[i], seg(t, t0 - .2, t0 + .3)); });
     taina({ x: X[0], y: 515, s: .8, olhar: 1, braco: t > ta ? -2.5 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); pedro({ x: X[1], y: 515, s: .8, olhar: 1, braco: t > pd ? -2.5 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .4) });
     [-60, 0, 60].forEach((dx, i) => pessoa(X[2] + dx, 515 - (t > di ? Math.abs(Math.sin(t * 6 + i)) * 14 : 0), 1.15, ["#ef4444", "#22c55e", "#0ea5e9"][i])); robozinho(X[3], 480, 1.1, t, t > bt);
     if (t > pe) etiqueta("uma pessoa", 360, 330, 290, 400, seg(t, pe, pe + .4)); if (t > eq) { etiqueta("EQUIPE", 775, 300, 775, 400, seg(t, eq, eq + .4)); } g.restore(); } },
 { chip: "COMO DECOMPOR", fala: F6, legenda: "O segredo tem 4 passos. 1: diga qual é o problema grande. 2: pergunte “de que partes ele é feito?”. 3: resolva uma parte de cada vez. 4: junte tudo e confira.", sfx: [[.1, "whoosh"], [em(F6, "diga"), "pop"], [em(F6, "pergunte"), "pop"], [em(F6, "resolva"), "pop"], [em(F6, "junte"), "ding"]],
   draw(t, D) { const p = [em(F6, "diga"), em(F6, "pergunte"), em(F6, "resolva"), em(F6, "junte")]; fundoEscuro(t, "#312e81"); palavra("COMO DECOMPOR", 560, 100, seg(t, 0, .4), 62);
     g.save(); camera(t, [[0, 640, 340, 1], [p[2], 560, 340, 1.05], [p[3] + 1, 640, 340, 1]]);
     [["Diga qual é o problema grande", "🧩"], ["Pergunte: de que partes ele é feito?", "❓"], ["Resolva uma parte de cada vez", "✅"], ["Junte tudo e confira", "🔍"]].forEach(([s, e], i) => { const on = t >= p[i] && (i === 3 || t < p[i + 1]); passoI(i + 1, s, e, 80, 220 + i * 90, 700, seg(t, p[i], p[i] + .4), on); });
     taina({ x: 1010, y: 545, s: .85, olhar: -1, braco: -2.3, bracoE: .3, boca: "riso", pisca: pisca(t) }); robozinho(1150, 500, 1, t, t > p[3]); g.restore(); } },
 { chip: "PARTE POR PARTE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "decoração"), "ding"], [em(F7, "comida"), "ding"], [em(F7, "diversão"), "ding"], [em(F7, "limpeza"), "ding"], [em(F7, "Juntando"), "festa"]],
   draw(t, D) { const ts = [em(F7, "decoração"), em(F7, "comida"), em(F7, "diversão"), em(F7, "limpeza")], ju = em(F7, "Juntando"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 330, 1.12], [ts[1], 480, 340, 1.05], [ts[3], 800, 340, 1.05], [ju, 640, 330, 1]]); festa(t, ts); g.restore();
     ["DECORAÇÃO", "COMIDA", "DIVERSÃO", "LIMPEZA"].forEach((n, i) => { caixa(200 + i * 270, 130, n + " ✓", "#bbf7d0", seg(t, ts[i], ts[i] + .4), 230); }); if (t > ju) palavra("TUDO PRONTO!", 560, 215, seg(t, ju, ju + .4), 58); } },
 { chip: "OS PROGRAMADORES", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "personagens"), "pop"], [em(F8, "cenário"), "pop"], [em(F8, "pontos"), "pop"], [em(F8, "sons"), "pop"], [em(F8, "equipe"), "ding"]],
   draw(t, D) { const pe = em(F8, "personagens"), ce = em(F8, "cenário"), po = em(F8, "pontos"), so = em(F8, "sons"), eq = em(F8, "equipe"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 320, 1], [pe, 640, 300, 1.08], [eq, 640, 320, 1]]);
     celular(640, 300, 1.3, () => { g.fillStyle = "#e2e8f0"; g.fillRect(-70, -146, 140, 292); if (t > ce) { g.fillStyle = "#7dd3fc"; g.fillRect(-70, -146, 140, 200); g.fillStyle = "#22c55e"; g.fillRect(-70, 54, 140, 92); emo("☁️", -30, -80, 30); emo("🌳", 40, 40, 40); }
       if (t > pe) { g.fillStyle = "#f97316"; g.beginPath(); g.arc(-10, 20 + Math.sin(t * 5) * 6, 18, 0, 7); g.fill(); emo("😀", -10, 28 + Math.sin(t * 5) * 6, 24); } if (t > po) { g.fillStyle = NAVY; g.font = `900 18px ${F}`; g.textAlign = "left"; g.fillText("⭐ 120", -58, -118); } if (t > so) emo("🔊", 44, -104, 26); });
     [["PERSONAGENS", 250, 170, pe, 560, 230], ["CENÁRIO", 250, 340, ce, 560, 380], ["PONTOS", 1040, 170, po, 720, 190], ["SONS", 1040, 340, so, 735, 220]].forEach(([n, x, y, t0, ax, ay]) => { etiqueta(n, x, y, ax, ay, seg(t, t0, t0 + .4)); if (t > t0) { pessoa(x - 40, y + 100, 1, "#ef4444"); pessoa(x + 40, y + 100, 1, "#22c55e"); } });
     if (t > eq) palavra("UMA EQUIPE PARA CADA PARTE", 560, 100, seg(t, eq, eq + .4), 44); g.restore(); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "festa"), "festa"], [em(F9, "decompor"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const fe = em(F9, "sucesso"), dc = em(F9, "decompor"), mc = em(F9, "Missão"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 380, 1.1], [dc, 640, 360, 1], [mc, 640, 360, .96]]); festa(t, [0, 0, 0, 0]);
     taina({ x: 270, y: 525, s: .85, olhar: 1, braco: t > fe ? -2.6 : .3, bracoE: t > fe ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); pedro({ x: 1010, y: 525, s: .85, olhar: -1, braco: t > fe ? -2.6 : .3, bracoE: t > fe ? 2.6 : .3, boca: "riso", pisca: pisca(t + .5) }); robozinho(640, 545, .8, t, true); g.restore();
     if (t > dc && t < mc) palavra("DECOMPOR!", 560, 215, seg(t, dc, dc + .4), 62); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "quarto"), "pop"], [em(F10, "grupo"), "pop"], [em(F10, "futebol"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["quarto", "🛏️", "Arrumar o quarto:", "cama, roupas e brinquedos"], ["grupo", "👥", "Trabalho em grupo:", "cada um faz uma parte"], ["futebol", "⚽", "Time de futebol:", "cada posição, uma parte"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 2º bimestre de 2027 · Missão 6", [TAINA, PEDRO]); } }
];

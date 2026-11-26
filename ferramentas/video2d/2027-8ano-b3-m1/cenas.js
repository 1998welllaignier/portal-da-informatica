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
function seta(x1, y1, cx, cy, x2, y2, cor, w, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.strokeStyle = cor; g.fillStyle = cor; g.lineWidth = w || 5; g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(cx, cy, x2, y2); g.stroke(); const a = Math.atan2(y2 - cy, x2 - cx); g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 18 * Math.cos(a - .45), y2 - 18 * Math.sin(a - .45)); g.lineTo(x2 - 18 * Math.cos(a + .45), y2 - 18 * Math.sin(a + .45)); g.fill(); g.restore(); }
function etq(txt, x, y, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.font = `800 20px ${F}`; const w = g.measureText(txt).width + 24; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 18, w, 36, 10); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, x, y + 7); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
function cmd(txt, x, y, k, cor, w) { comando(txt, x, y, k, cor, w); }
// câmera sem apagar o fundo da cena (só move o desenho)
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
/* ===== grafos (7º ano · 2º bim.) ===== */
// N: {nome:[x,y]}  E: [[a,b,peso?]]  o: {kN:(nome,i)=>k, kE:(i)=>k, hlE:[idx], hlN:[nomes], corE:{idx:cor}, grau:{nome:valor}, r, pesos}
function noG(x, y, nome, k, o) { if (k <= 0) return; o = o || {}; const r = o.r || 44, z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (o.hl) { g.shadowColor = "#facc15"; g.shadowBlur = 26; }
  g.fillStyle = o.cor || (o.hl ? "#fde68a" : "#fff"); g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.shadowBlur = 0; g.strokeStyle = o.hl ? "#f59e0b" : NAVY; g.lineWidth = o.hl ? 7 : 5; g.stroke();
  g.fillStyle = NAVY; let fs = o.fs || 20; g.font = `800 ${fs}px ${F}`; while (g.measureText(nome).width > r * 1.7 && fs > 9) { fs -= 1; g.font = `800 ${fs}px ${F}`; } g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(nome, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
function arestaG(x1, y1, x2, y2, peso, k, o) { if (k <= 0) return; o = o || {}; const q = out(cl(k)), xe = lerp(x1, x2, q), ye = lerp(y1, y2, q); g.save(); g.strokeStyle = o.cor || (o.hl ? "#facc15" : "#94a3b8"); g.lineWidth = o.hl ? 13 : 8; g.lineCap = "round"; g.setLineDash(o.trac ? [14, 14] : []); g.beginPath(); g.moveTo(x1, y1); g.lineTo(xe, ye); g.stroke(); g.setLineDash([]);
  if (peso != null && peso !== "" && q > .95) { const mx = (x1 + x2) / 2 + (o.dx || 0), my = (y1 + y2) / 2 + (o.dy || 0); g.fillStyle = o.hl ? "#fde68a" : "#e2e8f0"; rr(mx - 28, my - 19, 56, 38, 12); g.fill(); g.strokeStyle = o.hl ? "#f59e0b" : NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `900 24px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(String(peso), mx, my + 2); } g.restore(); g.textBaseline = "alphabetic"; }
function grafoDraw(N, E, o) { o = o || {}; const nomes = Object.keys(N);
  E.forEach((e, i) => { const [a, b, p] = e, [x1, y1] = N[a], [x2, y2] = N[b]; arestaG(x1, y1, x2, y2, o.pesos === false ? null : p, o.kE ? o.kE(i) : 1, { hl: o.hlE && o.hlE.includes(i), cor: o.corE && o.corE[i], trac: o.tracE && o.tracE.includes(i), dx: o.dx && o.dx[i], dy: o.dy && o.dy[i] }); });
  nomes.forEach((n, i) => { const [x, y] = N[n]; noG(x, y, n, o.kN ? o.kN(n, i) : 1, { hl: o.hlN && o.hlN.includes(n), r: o.r, fs: o.fs, cor: o.corN && o.corN[n] }); if (o.grau && o.grau[n] != null && (o.kG ? o.kG(n, i) : 1) > 0) contador(x + 46, y - 46, o.grau[n], o.kG ? o.kG(n, i) : 1, "#bbf7d0"); }); }
function contador(x, y, v, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z * .62, z * .62); g.fillStyle = cor || "#fde68a"; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.stroke();
  g.fillStyle = NAVY; g.font = `900 50px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(String(v), 0, 3); g.restore(); g.textBaseline = "alphabetic"; }
const NUMS7 = s => s.replace(/mil setecentos e trinta e seis/g, "1736").replace(/\bmil novecentos e cinquenta e seis\b/g, "1956").replace(/\bdoze\b/g, "12").replace(/\bsete\b/g, "7").replace(/\bnove\b/g, "9").replace(/\boito\b/g, "8").replace(/\bseis\b/g, "6").replace(/\bcinco\b/g, "5").replace(/\bquatro\b/g, "4").replace(/\btrês\b/g, "3").replace(/\bdois\b/g, "2").replace(/\bgrau um\b/g, "grau 1");
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
function arcoD(x1, y1, cx, cy, x2, y2, cor, k) { if (k <= 0) return; g.save(); g.strokeStyle = cor; g.lineWidth = 9; g.lineCap = "round"; g.setLineDash([16, 14]); g.beginPath(); const n = 30; for (let i = 0; i <= n * cl(k); i++) { const u = i / n, x = (1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * cx + u * u * x2, y = (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * cy + u * u * y2; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const NUMS8 = s => s.replace(/\btrês\b/g, "3").replace(/\bdez\b/g, "10").replace(/\bdois\b/g, "2");
/* ===== peças do 8º ano · 3º bim. · M1 (Compartilhar com responsabilidade) ===== */
function botaoEnviar(x, y, s, k) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#7f1d1d"; g.beginPath(); g.ellipse(0, 24, 120, 40, 0, 0, 7); g.fill(); g.fillRect(-120, -4, 240, 28); g.beginPath(); g.ellipse(0, 24, 120, 40, 0, 0, 3.14); g.fill();
  const d = (k || 0) * 18; g.fillStyle = "#dc2626"; g.beginPath(); g.ellipse(0, -2 + d, 120, 40, 0, 0, 7); g.fill(); g.fillRect(-120, -2 + d, 240, 26 - d); g.fillStyle = "#ef4444"; g.beginPath(); g.ellipse(0, -8 + d, 112, 34, 0, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("ENVIAR", 0, -8 + d); g.restore(); g.textBaseline = "alphabetic"; }
function bolhaChat(x, y, w, txt, cor, k, lado) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#dcf8c6"; rr(-w / 2, -26, w, 52, 18); g.fill(); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 1); g.restore(); g.textBaseline = "alphabetic"; }
// foto de cenário: pessoa com camisa; o: {uni, casa, pin, doc} (0..1 = quanto já apareceu)
function fotoCena(x, y, w, h, o) { o = o || {}; g.save(); g.translate(x - w / 2, y - h / 2); g.beginPath(); rr(0, 0, w, h, 14); g.clip();
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#7dd3fc"); gr.addColorStop(1, "#e0f2fe"); g.fillStyle = gr; g.fillRect(0, 0, w, h); g.fillStyle = "#86efac"; g.fillRect(0, h * .72, w, h * .28);
  g.fillStyle = "#fde047"; g.beginPath(); g.arc(w * .86, h * .18, h * .09, 0, 7); g.fill();
  // casa ao fundo
  g.fillStyle = "#fecaca"; g.fillRect(w * .52, h * .38, w * .4, h * .34); g.fillStyle = "#b45309"; g.beginPath(); g.moveTo(w * .49, h * .4); g.lineTo(w * .72, h * .2); g.lineTo(w * .95, h * .4); g.fill(); g.fillStyle = "#92400e"; g.fillRect(w * .66, h * .52, w * .08, h * .2);
  // pessoa
  g.fillStyle = o.uni ? "#2563eb" : "#a855f7"; rr(w * .16, h * .46, w * .26, h * .34, 12); g.fill(); g.fillStyle = "#f1c7a0"; g.beginPath(); g.arc(w * .29, h * .36, h * .1, 0, 7); g.fill(); g.fillStyle = "#3b2314"; g.beginPath(); g.arc(w * .29, h * .33, h * .1, Math.PI, 0); g.fill();
  g.restore(); }
function fotoMarcas(x, y, w, h, k) { // marcas que aparecem na foto: 0 uniforme, 1 casa, 2 pino, 3 documento
  g.save(); g.translate(x - w / 2, y - h / 2); const e = (a, b) => seg(k, a, b);
  if (e(0, .3) > 0) { g.globalAlpha = 1; g.fillStyle = "#fff"; g.font = `800 ${Math.round(h * .07)}px ${F}`; g.textAlign = "center"; g.fillText("ESCOLA", w * .29, h * .66); }
  g.restore(); }
function pino(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#ef4444"; g.strokeStyle = "#fff"; g.lineWidth = 5; g.beginPath(); g.moveTo(0, 0); g.bezierCurveTo(-44, -50, -34, -100, 0, -100); g.bezierCurveTo(34, -100, 44, -50, 0, 0); g.fill(); g.stroke(); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, -64, 14, 0, 7); g.fill(); g.restore(); }
function docCartao(x, y, s, tipo, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = tipo === "boleto" ? "#f8fafc" : "#bfdbfe"; g.strokeStyle = NAVY; g.lineWidth = 4; rr(-80, -50, 160, 100, 12); g.fill(); g.stroke();
  g.fillStyle = NAVY; if (tipo === "boleto") { for (let i = 0; i < 24; i++) g.fillRect(-64 + i * 5.4, 6, i % 3 ? 2 : 4, 32); g.font = `800 18px ${F}`; g.textAlign = "left"; g.fillText("BOLETO", -64, -22); } else { g.fillStyle = "#fbbf24"; rr(-62, -26, 36, 28, 5); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "left"; g.fillText("1234  5678", -62, 30); g.fillText("CARTÃO", -62, -34); } g.restore(); }
function portao(x, y, n, ico, tit, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-130, -110, 260, 220, 24); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; g.stroke();
  g.fillStyle = "#0891b2"; g.beginPath(); g.arc(-96, -80, 26, 0, 7); g.fill(); g.fillStyle = "#fff"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(String(n), -96, -78); g.restore(); emo(ico, x, y + 12 * z, 78 * z);
  g.save(); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "center"; g.fillText(tit, x, y + 92 * z); g.restore(); g.textBaseline = "alphabetic"; }
function linhaNet(x1, y1, x2, y2, k, cor) { if (k <= 0) return; g.save(); g.strokeStyle = cor || "#94a3b8"; g.lineWidth = 7; g.lineCap = "round"; g.beginPath(); g.moveTo(x1, y1); g.lineTo(lerp(x1, x2, out(cl(k))), lerp(y1, y2, out(cl(k)))); g.stroke(); g.restore(); }
/* ===== 8º ano · 3º bim. 2027 · Missão 1 · Compartilhar com responsabilidade ===== */
const TEO = { camisa: "#22c55e" }, teo = o => boneco(Object.assign({}, TEO, o));
const NUMS83 = s => s.replace(/dois mil e vinte e seis/g, "2026").replace(/dois mil e vinte e cinco/g, "2025").replace(/dezesseis/g, "16").replace(/\bquatro\b/g, "4").replace(/\bum segundo\b/g, "1 segundo").replace(/Éca/g, "ECA");
const F0 = "Compartilhar com responsabilidade: um clique, e já foi! E agora, como desfazer?",
  F1 = "O Léo recebeu um vídeo engraçado de um colega e já estava com o dedo no botão de enviar para o grupo da turma. A Bia viu e gritou: espera!",
  F2 = "Compartilhar é mandar ou publicar algo para outras pessoas verem. E isso leva só um segundo. Mas desfazer pode ser impossível.",
  F3 = "Veja só: o Léo enviou, se arrependeu e apagou. Mas alguém já tinha tirado um print, que é uma captura de tela: uma foto da tela que guarda o que foi postado, mesmo se apagarem depois.",
  F4 = "Então a Bia ensinou as quatro perguntas de antes de compartilhar. Primeira: é verdade? Se não for, não compartilhe: pode ser boato. Segunda: é meu para compartilhar? Se não for, peça permissão, que é a autorização de quem aparece ou de quem fez.",
  F5 = "Terceira: protege as pessoas? Se pode humilhar alguém ou expor essa pessoa, que é deixá-la visível de um jeito que pode trazer problema, não compartilhe. Quarta: protege você? Se mostra onde você mora ou estuda, corte essa parte ou não poste.",
  F6 = "Cuidado, porque uma foto entrega mais do que parece! O uniforme com o nome da escola mostra onde você estuda. E a fachada ou o número da casa mostram onde você mora.",
  F7 = "A localização em tempo real mostra no mapa onde você está agora. E documento, boleto ou cartão mostram dados que golpistas usam.",
  F8 = "E tem lei! Desde março de dois mil e vinte e seis, vale o Éca Digital, uma lei de dois mil e vinte e cinco que protege crianças e adolescentes na internet. Ele diz, por exemplo, que as contas de até dezesseis anos nas redes sociais precisam estar ligadas a um responsável.",
  F9 = "Agora o Léo sabe o que fazer. Ele fez as quatro perguntas: é verdade, é meu, protege as pessoas e protege ele. Como o vídeo era do colega, pediu permissão antes de postar. Missão cumprida!",
  F10 = "Onde eu uso isso? Ao repassar um vídeo engraçado de alguém no grupo. Ao postar uma foto com o uniforme da escola. E ao receber uma notícia chocante e sentir vontade de mandar para todo mundo.",
  F11 = "Agora é com vocês: abram a Missão 1 no portal!";
const tVid = (x, y, s) => celular(x, y, s, () => { g.fillStyle = "#fde68a"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#fff"; g.font = "70px sans-serif"; g.textAlign = "center"; emo("😂", 0, -10, 70); g.fillStyle = "#ef4444"; g.beginPath(); g.moveTo(-14, 70); g.lineTo(-14, 106); g.lineTo(18, 88); g.fill(); });
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "pop"], [1.3, "zum"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 280, 1.15], [2, 640, 300, .95]]); const pr = seg(t, .45, .65) * (1 - seg(t, .75, .95)); botaoEnviar(640, 330, 1.2, pr);
     [[300, 190], [980, 190], [220, 340], [1060, 340], [400, 90 + 10], [880, 100]].forEach(([x, y], i) => { const k = seg(t, .8 + i * .1, 1.2 + i * .1); if (k > 0) { emo("📱", lerp(640, x, out(k)), lerp(300, y, out(k)), 56); } });
     if (t > .45) emo("👆", 640, lerp(250, 285, seg(t, .3, .5)) , 70); g.restore(); abertura(t, "8º ANO · 3º BIM. · MISSÃO 1", "Compartilhar com responsabilidade", "UM CLIQUE E JÁ FOI!", "E AGORA, COMO DESFAZER?", 1.9); } },
 { chip: "O VÍDEO ENGRAÇADO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "recebeu"), "pop"], [em(F1, "dedo"), "ding"], [em(F1, "gritou"), "alerta"]],
   draw(t, D) { const re = em(F1, "recebeu"), de = em(F1, "dedo"), gr = em(F1, "grupo"), vi = em(F1, "viu"), es = em(F1, "espera"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [de, 700, 330, 1.07], [es, 640, 340, 1.1]]);
     if (t > re) tVid(470, 300, .85 * back(cl(seg(t, re, re + .4)))); if (t > gr) { ["#f97316", "#ec4899", "#8b5cf6", "#0ea5e9"].forEach((c, i) => { const k = seg(t, gr + i * .15, gr + .4 + i * .15); if (k > 0) pessoa(880 + i * 85, 400 - 6 * i % 12, .9 * back(cl(k)), c); }); etq("Grupo da turma", 970, 255, "#fff", seg(t, gr, gr + .4)); }
     botaoEnviar(680, 470, .7, t > de ? .5 + .5 * Math.sin(t * 7) : 0); if (t > de) emo("👆", 680, 405 + 8 * Math.sin(t * 7), 56); g.restore();
     leo({ x: 330, y: 580, s: .85, olhar: 1, braco: t > de ? -1.2 : .3, bracoE: .3, boca: t > es ? "o" : "riso", pisca: pisca(t) }); const bx = lerp(-120, 110, out(seg(t, vi, vi + .6))); bia8({ x: bx, y: 580, s: .85, olhar: 1, braco: t > es ? -2.4 : .3, bracoE: .3, boca: t > es ? "o" : "riso", pisca: pisca(t + 1) });
     if (t > es) { balao("Espera!", bx + 50, 420, seg(t, es, es + .3)); } } },
 { chip: "UM SEGUNDO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "mandar"), "pop"], [em(F2, "segundo"), "ding"], [em(F2, "desfazer"), "alerta"]],
   draw(t, D) { const ma = em(F2, "mandar"), pu = em(F2, "publicar"), se = em(F2, "segundo"), de = em(F2, "desfazer"), im = em(F2, "impossível"); fundoEscuro(t, "#0f172a"); palavra("COMPARTILHAR", 520, 100, seg(t, 0, .4), 56); g.save(); camera(t, [[0, 640, 350, 1], [se, 640, 340, 1.05], [im, 700, 340, 1.0]]);
     tVid(240, 330, .8); const P = [[780, 230], [980, 190], [1130, 290], [880, 400], [1080, 430]];
     P.forEach(([x, y], i) => { const k = seg(t, ma + .2 + i * .12, ma + .8 + i * .12); if (k > 0) { g.globalAlpha = .9; emo("🎞️", lerp(330, x, out(k)), lerp(330, y - 40, out(k)) - Math.sin(k * 3.14) * 30, 38); g.globalAlpha = 1; } if (t > ma + .6 + i * .12) emo("📱", x, y, 62); });
     if (t > pu) etiqueta("para outras pessoas verem", 900, 560, 900, 450, seg(t, pu, pu + .4));
     if (t > se) { cartaoC("1 segundo", 480, 120 + 30, 250, "#bbf7d0", seg(t, se, se + .4)); }
     if (t > de) { const k = seg(t, de, de + .6); emo("🤚", lerp(850, 560, out(k)) + Math.sin(t * 9) * 8, 300, 70); } if (t > im) { xVermelho(640, 330, 70, seg(t, im, im + .3)); cartaoC("desfazer = difícil", 400, 530, 400, "#fecaca", seg(t, im, im + .4), "pode ser impossível"); } g.restore();
     bia8({ x: 110, y: 580, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O PRINT", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "apagou"), "alerta"], [em(F3, "print"), "festa"], [em(F3, "guarda"), "ding"], [em(F3, "mesmo"), "pop"]],
   draw(t, D) { const en = em(F3, "enviou"), ap = em(F3, "apagou"), pr = em(F3, "print"), cp = em(F3, "captura"), gu = em(F3, "guarda"), me = em(F3, "mesmo"); fundoEscuro(t, "#4c1d95"); g.save(); camera(t, [[0, 640, 340, 1], [pr, 760, 330, 1.08], [me, 760, 330, 1.0]]);
     celular(260, 320, .85, () => { g.fillStyle = "#f1f5f9"; g.fillRect(-70, -146, 140, 292); }); const kk = 1 - seg(t, ap, ap + .5); if (t > en && kk > 0) bolhaChat(260, 330, 112, "vídeo 😂", "#dcf8c6", seg(t, en, en + .3) * kk); if (t > ap) emo("🗑️", 260, 480, 52 * back(cl(seg(t, ap, ap + .4))));
     celular(640, 320, .85, () => { g.fillStyle = "#f1f5f9"; g.fillRect(-70, -146, 140, 292); }); if (t > en) bolhaChat(640, 330, 112, "vídeo 😂", "#dcf8c6", seg(t, en + .4, en + .8)); const fl = seg(t, pr, pr + .12) * (1 - seg(t, pr + .12, pr + .6)); if (t > pr) { g.strokeStyle = "#facc15"; g.lineWidth = 6; g.setLineDash([16, 10]); rr(560, 190, 160, 270, 12); g.stroke(); g.setLineDash([]); }
     if (fl > 0) { g.fillStyle = `rgba(255,255,255,${fl * .85})`; g.fillRect(-100, -100, 1500, 1000); } if (t > pr) emo("📸", 640, 140, 54 * back(cl(seg(t, pr, pr + .4))));
     if (t > me) { [[900, 220], [1040, 330], [920, 440]].forEach(([x, y], i) => { const k = seg(t, me + i * .25, me + .4 + i * .25); if (k > 0) { emo("📱", x, y, 60 * back(cl(k))); bolhaChat(x, y - 60, 84, "😂", "#dcf8c6", k); } }); } g.restore();
     if (t > pr) palavra("PRINT", 520, 100, seg(t, pr, pr + .4), 64); if (t > cp) etiqueta("captura de tela", 380, 520, 560, 400, seg(t, cp, cp + .4));
     leo({ x: 100, y: 585, s: .7, olhar: 1, braco: t > ap ? -2.4 : .3, bracoE: .3, boca: t > ap ? "o" : "riso", pisca: pisca(t) }); teo({ x: 1180, y: 585, s: .7, olhar: -1, braco: t > pr ? -2.4 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) }); if (t > ap && t < pr) balao("Apaguei!", 190, 440, seg(t, ap, ap + .3)); } },
 { chip: "AS 4 PERGUNTAS (1 E 2)", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Primeira"), "ding"], [em(F4, "boato"), "pop"], [em(F4, "Segunda"), "ding"], [em(F4, "permissão"), "pop"]],
   draw(t, D) { const qu = em(F4, "quatro"), p1 = em(F4, "Primeira"), bo = em(F4, "boato"), p2 = em(F4, "Segunda"), pe = em(F4, "permissão"); fundoEscuro(t, "#0e7490"); palavra("4 PERGUNTAS", 520, 100, seg(t, qu, qu + .4), 60); g.save(); camera(t, [[0, 640, 340, 1], [p2, 760, 330, 1.05]]);
     g.fillStyle = "#334155"; g.fillRect(-100, 478, 1500, 30); g.fillStyle = "#fde047"; for (let i = 0; i < 20; i++) g.fillRect(-60 + i * 80, 490, 40, 6);
     portao(340, 300, 1, "✅", "É verdade?", seg(t, p1, p1 + .4)); portao(780, 300, 2, "🙋", "É meu?", seg(t, p2, p2 + .4));
     if (t > bo) etq("Não? Pode ser boato", 340, 440, "#fecaca", seg(t, bo, bo + .4)); if (t > pe) { etq("Não? Peça permissão", 780, 440, "#fde68a", seg(t, pe, pe + .4)); balao("Posso postar?", 1000, 280, seg(t, pe + .3, pe + .7)); }
     const mv = seg(t, p1 + .5, p2 + 1.2); if (t > qu) emo("🎞️", lerp(100, 700, out(mv)), 540, 40); g.restore();
     bia8({ x: 1170, y: 585, s: .7, olhar: -1, braco: t > p1 ? -.7 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > pe) teo({ x: 1040, y: 585, s: .65, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) }); } },
 { chip: "AS 4 PERGUNTAS (3 E 4)", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Terceira"), "ding"], [em(F5, "expor"), "pop"], [em(F5, "Quarta"), "ding"], [em(F5, "corte"), "pop"]],
   draw(t, D) { const p3 = em(F5, "Terceira"), ex = em(F5, "expor"), p4 = em(F5, "Quarta"), mo = em(F5, "mora"), co = em(F5, "corte"); fundoEscuro(t, "#7c2d12"); palavra("PROTEGE QUEM?", 520, 100, seg(t, p3, p3 + .4), 56); g.save(); camera(t, [[0, 640, 340, 1], [p4, 780, 330, 1.05]]);
     portao(340, 300, 3, "🛡️", "Protege pessoas?", seg(t, p3, p3 + .4)); portao(800, 300, 4, "🏠", "Protege você?", seg(t, p4, p4 + .4));
     if (t > p3 + 1) etq("Humilha? Não compartilhe", 340, 440, "#fecaca", seg(t, p3 + 1, p3 + 1.4)); if (t > ex) etiqueta("expor = deixar visível", 420, 530, 350, 460, seg(t, ex, ex + .4));
     if (t > mo) etq("Mostra onde mora ou estuda?", 800, 440, "#fde68a", seg(t, mo, mo + .4)); if (t > co) etq("Corte essa parte ou não poste", 800, 490, "#bbf7d0", seg(t, co, co + .4)); g.restore();
     bia8({ x: 1170, y: 585, s: .7, olhar: -1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); leo({ x: 1040, y: 585, s: .6, olhar: -1, braco: .3, bracoE: .3, boca: t > co ? "riso" : "o", pisca: pisca(t + 1) }); } },
 { chip: "A FOTO ENTREGA MAIS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "uniforme"), "pop"], [em(F6, "estuda"), "ding"], [em(F6, "fachada"), "pop"], [em(F6, "mora"), "ding"]],
   draw(t, D) { const un = em(F6, "uniforme"), es = em(F6, "estuda"), fa = em(F6, "fachada"), mo = em(F6, "mora"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 330, 1], [un, 560, 340, 1.18], [fa, 760, 330, 1.18]]);
     fotoCena(640, 330, 520, 340, { uni: true }); g.fillStyle = "#fff"; g.font = `800 15px ${F}`; g.textAlign = "center"; g.fillText("ESCOLA", 640 - 260 + 520 * .29, 330 - 170 + 340 * .66);
     if (t > un) { g.strokeStyle = "#facc15"; g.lineWidth = 5; rr(414, 334, 154, 102, 14); g.stroke(); } if (t > fa) { g.strokeStyle = "#facc15"; g.lineWidth = 5; rr(640 - 260 + 520 * .49, 330 - 170 + 340 * .2, 520 * .5, 340 * .55, 14); g.stroke(); } g.restore();
     if (t > es) etiqueta("onde você estuda", 330, 560, 520, 470, seg(t, es, es + .4)); if (t > mo) etiqueta("onde você mora", 960, 560, 900, 470, seg(t, mo, mo + .4)); palavra("CUIDADO!", 520, 100, seg(t, 0, .4), 60);
     leo({ x: 100, y: 585, s: .65, olhar: 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "LOCALIZAÇÃO E DOCUMENTOS", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "localização"), "pop"], [em(F7, "agora"), "ding"], [em(F7, "documento"), "pop"], [em(F7, "golpistas"), "alerta"]],
   draw(t, D) { const lo = em(F7, "localização"), ag = em(F7, "agora"), dc = em(F7, "documento"), go = em(F7, "golpistas"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [dc, 840, 330, 1.05]]);
     celular(320, 320, .95, () => { g.fillStyle = "#bbf7d0"; g.fillRect(-70, -146, 140, 292); g.strokeStyle = "#fff"; g.lineWidth = 8; g.beginPath(); g.moveTo(-70, -40); g.lineTo(70, 20); g.moveTo(-20, -146); g.lineTo(10, 146); g.stroke(); g.fillStyle = "#93c5fd"; g.fillRect(30, 60, 40, 80); });
     if (t > lo) pino(320, 300 + 6 * Math.sin(t * 5), 1.1, seg(t, lo, lo + .4)); if (t > ag) { etq("você, AGORA", 320, 150, "#fde68a", seg(t, ag, ag + .4)); onda(320, 300, (t * .8) % 1, "#ef4444"); }
     docCartao(780, 250, 1.4, "boleto", seg(t, dc, dc + .4)); docCartao(900, 400, 1.4, "cartao", seg(t, dc + .4, dc + .8)); if (t > go) { emo("🦹", 1120, 260, 80 * back(cl(seg(t, go, go + .4)))); etq("dados que golpistas usam", 960, 500, "#fecaca", seg(t, go, go + .4)); } g.restore(); if (t > lo) etiqueta("localização em tempo real", 330, 560, 330, 470, seg(t, lo + .3, lo + .7));
     palavra("DADOS EXPOSTOS", 520, 100, seg(t, 0, .4), 54); bia8({ x: 1180, y: 585, s: .55, olhar: -1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "ECA DIGITAL", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "março"), "pop"], [em(F8, "Éca"), "festa"], [em(F8, "contas"), "ding"], [em(F8, "responsável"), "pop"]],
   draw(t, D) { const ma = em(F8, "março"), ec = em(F8, "Éca"), co = em(F8, "contas"), re = em(F8, "responsável"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1], [co, 700, 340, 1.05]]);
     if (t > ma) calendario(260, 260, 1.3, "MAR 2026", "#ef4444"); if (t > ec) { const k = back(cl(seg(t, ec, ec + .5))); escudo(260, 430 + 0, 1.3 * k); emo("📜", 260, 460, 50 * k); }
     if (t > co) { cartaoC("Conta até 16 anos", 740, 230, 360, "#fff", seg(t, co, co + .4), "rede social"); } if (t > re) { linhaNet(740, 280, 740, 390, seg(t, re, re + .4), "#fde047"); cartaoC("Ligada a um responsável", 740, 440, 440, "#bbf7d0", seg(t, re + .2, re + .6)); emo("👩", 1060, 330, 90 * back(cl(seg(t, re, re + .5)))); } g.restore();
     if (t > ec) palavra("ECA DIGITAL", 520, 100, seg(t, ec, ec + .4), 62); if (t > ec + 1.5) etiqueta("lei de 2025", 470, 560, 330, 470, seg(t, ec + 1.5, ec + 1.9));
     leo({ x: 70, y: 590, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "perguntas"), "ding"], [em(F9, "permissão"), "pop"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const pe = em(F9, "perguntas"), pm = em(F9, "permissão"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [pm, 640, 360, 1.03]]);
     [["✅", "é verdade"], ["🙋", "é meu"], ["🛡️", "protege as pessoas"], ["🏠", "protege você"]].forEach(([e, n], i) => { const k = seg(t, pe + i * .5, pe + .4 + i * .5); if (k > 0) { const z = back(cl(k)); g.fillStyle = "#fff"; rr(110 + i * 280, 250, 250, 140, 18); g.fill(); emo(e, 235 + i * 280, 322 * 1, 56 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(n, 235 + i * 280, 368); visto(330 + i * 280, 262, 20, k); } });
     if (t > pm) { balao("Posso postar?", 540, 470, seg(t, pm, pm + .3)); balao("Pode!", 900, 470, seg(t, pm + .7, pm + 1)); } g.restore();
     leo({ x: 330, y: 590, s: .8, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); teo({ x: 780, y: 590, s: .8, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); bia8({ x: 1100, y: 590, s: .8, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 2) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "vídeo"), "pop"], [em(F10, "uniforme"), "pop"], [em(F10, "notícia"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["vídeo", "🎬", "Vídeo engraçado", "repassar no grupo"], ["uniforme", "👕", "Foto com uniforme", "da escola"], ["notícia", "📰", "Notícia chocante", "vontade de mandar para todos"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]], draw(t, D) { fimCartao(t, "8º ano · 3º bimestre de 2027 · Missão 1", [LEO, BIA8]); } }
];
for (let i = 1; i <= 10; i++) CENAS[i].legenda = NUMS83([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10][i]);
CENAS[0].legenda = undefined;

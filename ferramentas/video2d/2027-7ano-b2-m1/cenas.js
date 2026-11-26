/* ================= 6º ano · 2027 · 1º bimestre · Missão 6 · Boa convivência na rede (v2, padrão completo: o grupo da turma pegou fogo) ================= */
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
  g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
// ficha (registro) com campos nome → valor
function ficha(x, y, titulo, campos, k, cor, hl, s) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); const h = 70 + campos.length * 54; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fffbeb"; rr(-150, -h / 2, 300, h, 16); g.fill(); g.fillStyle = cor || "#ca8a04"; rr(-150, -h / 2, 300, 52, 16); g.fill(); g.fillRect(-150, -h / 2 + 30, 300, 22);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(titulo, 0, -h / 2 + 35);
  campos.forEach(([c, v], i) => { const yy = -h / 2 + 88 + i * 54; if (hl === i) { g.fillStyle = "#fde68a"; rr(-138, yy - 30, 276, 46, 10); g.fill(); } g.fillStyle = "#64748b"; g.font = `700 19px ${F}`; g.textAlign = "left"; g.fillText(c, -126, yy); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "right"; g.fillText(v, 126, yy); });
  g.restore(); }
// "repita" em forma de C (boca do bloco)
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
function bocaC(x, y, w, h, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; }
  g.fillStyle = cor; rr(0, 0, w, 52, 10); g.fill(); rr(0, 0, 34, h, 8); g.fill(); rr(0, h - 30, w * .55, 30, 8); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 34); g.restore(); }
// telinha de resultado: linhas de texto; hl = linha marcada de vermelho; ok = linhas verdes
function telinha(x, y, w, tit, linhas, k, hl, ok) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ".  " + s, -w / 2 + 24, yy + 23); });
  g.restore(); }
/* ===== peças do "Show do Meio" (8º M4 v2) ===== */
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
    if (rotulos !== false && (j === chutes.length - 1 || Math.abs(chutes[j + 1][0] - v) >= 10)) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
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
const NUMS7 = s => s.replace(/mil setecentos e trinta e seis/g, "1736").replace(/\bmil novecentos e cinquenta e seis\b/g, "1956").replace(/\bdoze\b/g, "12").replace(/\bsete\b/g, "7").replace(/\bnove\b/g, "9").replace(/\boito\b/g, "8").replace(/\bseis\b/g, "6").replace(/\bcinco\b/g, "5").replace(/\bquatro\b/g, "4").replace(/\btrês\b/g, "3").replace(/\bdois\b/g, "2").replace(/\bgrau um\b/g, "grau 1").replace(/\bé um\b/g, "é 1");
const F0 = "Grafos: pontos e ligações!",
  F1 = "O Caio e a Duda mostraram o mapa do bairro para o robô Bit. Mas o computador não enxerga um mapa, uma turma ou uma rede como nós. Ele guarda tudo de um jeito bem simples: pontos ligados por linhas. Esse desenho se chama grafo!",
  F2 = "Cada ponto do grafo é um vértice, também chamado de nó. Um vértice pode ser um lugar, uma pessoa ou um computador. Aqui, a escola, a praça e o mercado são vértices.",
  F3 = "Cada linha que liga dois vértices é uma aresta. Ela mostra que eles estão conectados: pode ser uma rua, uma amizade ou um cabo. A rua que liga a escola à praça é uma aresta.",
  F4 = "O peso é o número escrito em uma aresta. Pode ser distância, tempo ou preço. Da escola até a praça, são cinco minutos de caminhada. Da praça ao mercado, quatro minutos. E da escola direto ao mercado, doze minutos.",
  F5 = "O grau é quantas arestas chegam a um vértice. A praça se liga à escola e ao mercado, então o grau dela é dois. E esses vértices ligados diretamente a ela são os vizinhos da praça.",
  F6 = "Para ler um grafo, escreva as ligações numa tabela. Cada linha da tabela é uma aresta: escola e praça, cinco. Praça e mercado, quatro. Escola e mercado, doze. Nesse grafo, há três vértices e três arestas.",
  F7 = "Em mil setecentos e trinta e seis, o matemático Leonhard Euler estudou as sete pontes da cidade de Königsberg. Ele desenhou as margens do rio como pontos e as pontes como linhas, e provou que não dava para passear atravessando cada ponte uma vez só. Foi o primeiro grafo da história da Matemática!",
  F8 = "Com o grafo, o robô Bit entendeu o mapa do bairro, e o Caio e a Duda descobriram os vértices, as arestas, os pesos e o grau de cada lugar. Missão cumprida!",
  F9 = "Onde eu uso isso? No aplicativo de mapa: cada esquina é um vértice, e cada rua é uma aresta. Na rede de computadores da escola: cada computador é um vértice, e cada cabo é uma aresta. E nas linhas de ônibus: cada parada é um vértice.",
  F10 = "Agora é com vocês: abram a Missão 1 no portal!";
const GN = { Escola: [300, 330], "Praça": [640, 210], Mercado: [980, 340] }, GE = [["Escola", "Praça", 5], ["Praça", "Mercado", 4], ["Escola", "Mercado", 12]];
function mapaBairro(t, k) { // mapa de verdade (ruas, ícones)
  g.save(); g.globalAlpha = cl(k); g.fillStyle = "#86efac"; rr(140, 110, 1000, 400, 30); g.fill(); g.strokeStyle = "#cbd5e1"; g.lineWidth = 34; g.lineCap = "round"; g.beginPath(); g.moveTo(300, 330); g.lineTo(640, 210); g.lineTo(980, 340); g.moveTo(300, 330); g.lineTo(980, 340); g.stroke(); g.restore();
  emo("🏫", 300, 350, 80 * cl(k)); emo("🌳", 640, 235, 80 * cl(k)); emo("🛒", 980, 360, 80 * cl(k)); }
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 250, 1], [1.8, 640, 300, .95]]); const m = 1 - seg(t, .8, 1.4); mapaBairro(t, m); grafoDraw(GN, GE, { kN: (n, i) => seg(t, .9 + i * .25, 1.2 + i * .25), kE: i => seg(t, 1.2 + i * .25, 1.6 + i * .25), pesos: false, r: 40 }); g.restore(); abertura(t, "7º ANO · 2º BIM. · MISSÃO 1", "Grafos", "PONTOS LIGADOS", "POR LINHAS!", 1.9); } },
 { chip: "O MAPA E O ROBÔ", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "enxerga"), "alerta"], [em(F1, "pontos"), "pop"], [em(F1, "linhas"), "pop"], [em(F1, "grafo"), "festa"]],
   draw(t, D) { const en = em(F1, "enxerga"), po = em(F1, "pontos"), li = em(F1, "linhas"), gr = em(F1, "grafo"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 330, 1], [po, 640, 320, 1.04], [gr, 640, 330, 1]]); const m = 1 - seg(t, po, po + .6);
     mapaBairro(t, m); grafoDraw(GN, GE, { kN: (n, i) => seg(t, po + i * .2, po + .3 + i * .2), kE: i => seg(t, li + i * .2, li + .4 + i * .2), pesos: false }); g.restore();
     caio({ x: 120, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 230, y: 575, s: .7, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) }); robozinho(1160, 510, .9, t, t > gr);
     if (t > en && t < po) balao("Eu não enxergo mapa! 🤖", 1030, 430, seg(t, en, en + .4)); if (t > gr) palavra("GRAFO", 560, 90, seg(t, gr, gr + .4), 70); } },
 { chip: "VÉRTICE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "vértice"), "ding"], [em(F2, "nó"), "pop"], [em(F2, "lugar"), "pop"], [em(F2, "escola"), "pop"], [em(F2, "mercado"), "pop"]],
   draw(t, D) { const ve = em(F2, "vértice"), no = em(F2, "nó"), lu = em(F2, "lugar"), es = em(F2, "escola"), pr = em(F2, "praça"), me = em(F2, "mercado"); fundoEscuro(t, "#14532d"); palavra("VÉRTICE", 560, 90, seg(t, ve, ve + .4), 64); g.save(); camera(t, [[0, 640, 340, 1], [es, 640, 330, 1.05]]);
     [["Escola", es, "🏫"], ["Praça", pr, "🌳"], ["Mercado", me, "🛒"]].forEach(([n, t0, e]) => { const [x, y] = GN[n]; noG(x, y, n, seg(t, t0 - .2, t0 + .2), { hl: t > t0 && t < t0 + 1.2, r: 50 }); if (t > t0) emo(e, x, n === "Praça" ? y + 92 : y - 78, 54 * back(cl(seg(t, t0, t0 + .3)))); }); g.restore();
     if (t > no) etiqueta("vértice (ou nó)", 1050, 150, 700, 215, seg(t, no, no + .4)); if (t > lu) { emo("🏠", 150, 250, 50); emo("🧑", 150, 330, 50); emo("💻", 150, 410, 50); } duda({ x: 1140, y: 575, s: .7, olhar: -1, braco: -2.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "ARESTA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "aresta"), "ding"], [em(F3, "conectados"), "pop"], [em(F3, "rua"), "pop"], [em(F3, "amizade"), "pop"], [em(F3, "cabo"), "pop"]],
   draw(t, D) { const ar = em(F3, "aresta"), co = em(F3, "conectados"), ru = em(F3, "rua"), am = em(F3, "amizade"), ca = em(F3, "cabo"), fi = em(F3, "rua", 1); fundoEscuro(t, "#7c2d12"); palavra("ARESTA", 560, 90, seg(t, ar, ar + .4), 64); g.save(); camera(t, [[0, 640, 340, 1], [fi, 520, 300, 1.08]]);
     grafoDraw(GN, GE, { pesos: false, kE: i => seg(t, ar + i * .3, ar + .5 + i * .3), hlE: t > fi ? [0] : [], r: 50 }); g.restore(); if (t > fi) etiqueta("rua escola–praça = 1 aresta", 330, 230, 570, 320, seg(t, fi, fi + .4));
     [["🛣️ rua", ru], ["🤝 amizade", am], ["🔌 cabo", ca]].forEach(([s, t0], i) => cartaoC(s, 220 + i * 420, 505, 340, "#fde68a", seg(t, t0, t0 + .4))); if (t > co) rotulo("liga dois vértices", 640, 150, "#fde68a", seg(t, co, co + .4)); } },
 { chip: "PESO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "peso"), "ding"], [em(F4, "distância"), "pop"], [em(F4, "cinco"), "pop"], [em(F4, "quatro"), "pop"], [em(F4, "doze"), "pop"]],
   draw(t, D) { const pe = em(F4, "peso"), di = em(F4, "distância"), tm = em(F4, "tempo"), pc = em(F4, "preço"), c5 = em(F4, "cinco"), c4 = em(F4, "quatro"), c12 = em(F4, "doze"); fundoEscuro(t, "#4c1d95"); palavra("PESO", 560, 90, seg(t, pe, pe + .4), 70); g.save(); camera(t, [[0, 640, 340, 1], [c5, 460, 270, 1.08], [c4, 820, 270, 1.08], [c12, 640, 360, 1.02]]);
     grafoDraw(GN, GE, { kE: i => i === 0 ? seg(t, c5 - .3, c5 + .1) : i === 1 ? seg(t, c4 - .3, c4 + .1) : seg(t, c12 - .3, c12 + .1), hlE: t < c4 ? [0] : t < c12 ? [1] : [2], kN: () => 1, r: 46, dy: { 2: 40 } }); g.restore();
     [["📏 distância", di], ["⏱️ tempo", tm], ["💰 preço", pc]].forEach(([s, t0], i) => cartaoC(s, 220 + i * 420, 505, 340, "#bbf7d0", seg(t, t0, t0 + .4))); } },
 { chip: "GRAU E VIZINHOS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "grau"), "ding"], [em(F5, "dois"), "pop"], [em(F5, "vizinhos"), "festa"]],
   draw(t, D) { const gr = em(F5, "grau"), pr = em(F5, "praça"), ds = em(F5, "dois"), vz = em(F5, "vizinhos"); fundoEscuro(t, "#0f172a"); palavra("GRAU", 560, 90, seg(t, gr, gr + .4), 70); g.save(); camera(t, [[0, 640, 340, 1], [pr, 640, 300, 1.06], [vz, 640, 340, 1]]);
     grafoDraw(GN, GE, { hlE: t > pr ? [0, 1] : [], hlN: t > pr ? ["Praça"] : [], r: 46, dy: { 2: 40 } }); if (t > ds) contador(640, 150, 2, seg(t, ds, ds + .4)); g.restore(); if (t > pr) etiqueta("2 arestas chegam aqui", 1000, 140, 700, 195, seg(t, pr, pr + .4));
     if (t > vz) { etq("vizinho", 300, 420, "#bbf7d0", seg(t, vz, vz + .4)); etq("vizinho", 980, 430, "#bbf7d0", seg(t, vz + .3, vz + .7)); } caio({ x: 130, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "LENDO UM GRAFO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "tabela"), "ding"], [em(F6, "escola"), "pop"], [em(F6, "praça"), "pop"], [em(F6, "doze"), "pop"], [em(F6, "três"), "ding"]],
   draw(t, D) { const ta = em(F6, "tabela"), e1 = em(F6, "escola"), e2 = em(F6, "Praça"), e3 = em(F6, "Escola", 1), v3 = em(F6, "três"), a3 = em(F6, "três", 1); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [e1, 640, 330, 1.03]]);
     const n = t > e3 ? 3 : t > e2 ? 2 : t > e1 ? 1 : 0; tabela(640, 130, 900, ["VÉRTICE", "VÉRTICE", "PESO (min)"], [["Escola", "Praça", "5"], ["Praça", "Mercado", "4"], ["Escola", "Mercado", "12"]].slice(0, n), ["#7c3aed", "#7c3aed", "#f59e0b"], seg(t, ta, ta + .4), -1, 60); g.restore();
     if (t > ta) palavra("1 LINHA = 1 ARESTA", 560, 90, seg(t, ta, ta + .4), 46); if (t > v3) cartaoC("3 vértices", 360, 470, 320, "#bbf7d0", seg(t, v3, v3 + .4)); if (t > a3) cartaoC("3 arestas", 920, 470, 320, "#fde68a", seg(t, a3, a3 + .4)); robozinho(640, 520, .6, t, t > a3); } },
 { chip: "A PONTE DE EULER", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Euler"), "ding"], [em(F7, "pontes"), "pop"], [em(F7, "pontos"), "pop"], [em(F7, "linhas"), "pop"], [em(F7, "primeiro"), "festa"]],
   draw(t, D) { const eu = em(F7, "Euler"), pt = em(F7, "pontes"), mg = em(F7, "margens"), li = em(F7, "linhas"), pr = em(F7, "primeiro"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 340, 1], [pt, 640, 330, 1.04], [pr, 640, 340, 1]]);
     const T = { A: [640, 190], B: [640, 470], C: [560, 330], D: [900, 330] }, ponte = [["A", "C", -20], ["A", "C", 20], ["B", "C", -20], ["B", "C", 20], ["A", "D", 0], ["B", "D", 0], ["C", "D", 0]];
     g.fillStyle = "#38bdf8"; g.fillRect(250, 120, 800, 420); const mm = 1 - seg(t, li, li + .8); [["A", 140, 60], ["B", 140, 60], ["C", 90, 70], ["D", 80, 80]].forEach(([n, w, h]) => { g.fillStyle = "#65a30d"; g.beginPath(); g.ellipse(T[n][0], T[n][1], w, h, 0, 0, 7); g.fill(); });
     ponte.forEach(([a, b, o], i) => { const k = seg(t, pt + i * .2, pt + .3 + i * .2); if (k <= 0) return; const [x1, y1] = T[a], [x2, y2] = T[b]; g.strokeStyle = t > li ? "#facc15" : "#92400e"; g.lineWidth = t > li ? 8 : 16; g.lineCap = "round"; g.beginPath(); g.moveTo(x1 + o, y1); g.lineTo(lerp(x1 + o, x2 + o, k), lerp(y1, y2, k)); g.stroke(); });
     if (t > mg) Object.keys(T).forEach((n, i) => noG(T[n][0], T[n][1], n, seg(t, mg + i * .2, mg + .3 + i * .2), { r: 32, fs: 22, hl: true })); g.restore();
     if (t > eu) etiqueta("Leonhard Euler · 1736", 1040, 140, 760, 250, seg(t, eu, eu + .4)); if (t > pt) etq("7 pontes", 330, 160, "#fde68a", seg(t, pt, pt + .4)); if (t > pr) palavra("O 1º GRAFO!", 560, 90, seg(t, pr, pr + .4), 60); duda({ x: 110, y: 545, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "vértices"), "pop"], [em(F8, "arestas"), "pop"], [em(F8, "grau"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const ve = em(F8, "vértices"), ar = em(F8, "arestas"), pe = em(F8, "pesos"), gr = em(F8, "grau"), mc = em(F8, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 380, 1], [mc, 640, 380, 1.02]]);
     const N2 = { Escola: [300, 400], "Praça": [640, 330], Mercado: [980, 420] }; grafoDraw(N2, GE, { kN: (n, i) => seg(t, ve + i * .15, ve + .3 + i * .15), kE: i => seg(t, ar, ar + .4), hlE: t > pe ? [0, 1, 2] : [], pesos: t > pe, grau: { Escola: 2, "Praça": 2, Mercado: 2 }, kG: (n, i) => seg(t, gr + i * .2, gr + .3 + i * .2), r: 46, dy: { 2: 40 } }); g.restore();
     robozinho(1160, 515, .9, t, true); caio({ x: 120, y: 590, s: .75, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "aplicativo"), "pop"], [em(F9, "rede"), "pop"], [em(F9, "ônibus"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["aplicativo", "🗺️", "App de mapa:", "esquina = vértice, rua = aresta"], ["rede", "💻", "Rede da escola:", "computador = vértice, cabo = aresta"], ["ônibus", "🚌", "Linhas de ônibus:", "parada = vértice"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 2º bimestre de 2027 · Missão 1", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 9; i++) CENAS[i].legenda = NUMS7([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9][i]);

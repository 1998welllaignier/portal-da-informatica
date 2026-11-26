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
const NUMS7 = s => s.replace(/mil setecentos e trinta e seis/g, "1736").replace(/\bmil novecentos e cinquenta e seis\b/g, "1956").replace(/\bdoze\b/g, "12").replace(/\bsete\b/g, "7").replace(/\bnove\b/g, "9").replace(/\boito\b/g, "8").replace(/\bseis\b/g, "6").replace(/\bcinco\b/g, "5").replace(/\bquatro\b/g, "4").replace(/\btrês\b/g, "3").replace(/\bdois\b/g, "2");
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
const F0 = "O caminho mais curto!",
  F1 = "O Caio estava atrasado para a escola e tinha três caminhos para escolher. A Duda avisou: nem sempre o caminho com menos paradas é o mais rápido! Como descobrir qual é o melhor?",
  F2 = "Um caminho é uma sequência de vértices ligados por arestas, um depois do outro: casa, padaria, escola. O caminho que escolhemos para ir de um lugar a outro também se chama rota.",
  F3 = "Para saber quanto um caminho custa, somamos os pesos das arestas dele. Casa, padaria, escola: três mais dois, cinco minutos.",
  F4 = "Vamos testar os três caminhos. Pela rua direta, são nove minutos. Pela padaria, três mais dois, cinco minutos. Pela praça, quatro mais quatro, oito minutos. O mais curto é o de menor soma: cinco minutos!",
  F5 = "Repare: a rua direta tem uma aresta só, mas leva nove minutos. O caminho mais curto é o de menor soma, e não o de menos paradas!",
  F6 = "Para achar o caminho mais curto, siga três passos. Primeiro: liste todos os caminhos possíveis. Segundo: some os pesos de cada um. Terceiro: escolha o menor total.",
  F7 = "E se uma rua fechar? Se a aresta padaria e escola estiver interditada, o caminho mais curto muda para casa, praça, escola: oito minutos. É isso que o aplicativo de mapa faz quando aparece um bloqueio.",
  F8 = "Em mil novecentos e cinquenta e seis, o holandês Edsger Dijkstra criou um algoritmo que acha o caminho mais curto sem precisar testar todos os caminhos um por um. Os aplicativos de mapa usam ideias que vieram dele.",
  F9 = "O Caio escolheu casa, padaria, escola: cinco minutos! Chegou a tempo, e a Duda comemorou. Missão cumprida!",
  F10 = "Onde eu uso isso? No aplicativo de mapa e no aplicativo de transporte, que calculam a rota mais rápida até um endereço. No entregador de comida, que escolhe o caminho que gasta menos tempo. E no ônibus escolar, que passa pelas casas num caminho que gasta menos tempo e combustível.",
  F11 = "Agora é com vocês: abram a Missão 2 no portal!";
const GN = { Casa: [230, 330], Padaria: [560, 190], "Praça": [560, 450], Escola: [960, 320] };
const GE = [["Casa", "Padaria", 3], ["Padaria", "Escola", 2], ["Casa", "Praça", 4], ["Praça", "Escola", 4], ["Casa", "Escola", 9]];
const ei = (a, b) => GE.findIndex(e => (e[0] === a && e[1] === b) || (e[0] === b && e[1] === a));
const arestasDe = p => p.slice(1).map((n, i) => ei(p[i], n));
const P_DIR = ["Casa", "Escola"], P_PAD = ["Casa", "Padaria", "Escola"], P_PRA = ["Casa", "Praça", "Escola"];
function posCaminho(p, q) { const n = p.length - 1, s = Math.min(n - 1e-6, Math.max(0, q * n)), i = Math.floor(s), f = s - i, [x1, y1] = GN[p[i]], [x2, y2] = GN[p[i + 1]]; return [lerp(x1, x2, f), lerp(y1, y2, f)]; }
function viajante(p, q, t, s) { const [x, y] = posCaminho(p, q); robozinho(x, y - 30, s || .45, t, q >= 1); }
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "pop"], [1.3, "zum"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); g.save(); g.translate(640, 300); g.scale(.75, .75); g.translate(-640, -330); camera(t, [[0, 640, 330, 1], [1.8, 640, 340, .98]]); grafoDraw(GN, GE, { pesos: false, kN: () => seg(t, .1, .5), kE: i => seg(t, .3, .8), r: 40, hlE: arestasDe(P_PAD) });
     [P_DIR, P_PAD, P_PRA].forEach((p, i) => { const q = seg(t, .9 + i * .1, 1.9); if (q > 0) viajante(p, q, t, .35); }); g.restore(); abertura(t, "7º ANO · 2º BIM. · MISSÃO 2", "O caminho mais curto", "QUAL É O", "MAIS RÁPIDO?", 1.9); } },
 { chip: "O CAIO ATRASADO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "atrasado"), "alerta"], [em(F1, "três"), "pop"], [em(F1, "avisou"), "ding"], [em(F1, "descobrir"), "pop"]],
   draw(t, D) { const at = em(F1, "atrasado"), tr = em(F1, "três"), av = em(F1, "avisou"), de = em(F1, "descobrir"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [tr, 600, 340, 1.04], [de, 640, 340, 1]]);
     grafoDraw(GN, GE, { pesos: false, kE: i => seg(t, tr + i * .25, tr + .4 + i * .25), hlE: t > tr ? [] : [], r: 46 }); if (t > tr) { emo("🏠", 230, 255, 50); emo("🏫", 960, 245, 50); } g.restore();
     caio({ x: 130, y: 575, s: .7, olhar: 1, braco: t > at ? -2.4 : .3, bracoE: .3, boca: t > at ? "o" : "riso", pisca: pisca(t) }); duda({ x: 1150, y: 575, s: .7, olhar: -1, braco: t > av ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) });
     if (t > at && t < av) balao("Tô atrasado! ⏰", 270, 450, seg(t, at, at + .4)); if (t > av) balao("Nem sempre é o mais direto!", 1000, 450, seg(t, av, av + .4)); if (t > de) palavra("QUAL É O MELHOR?", 560, 90, seg(t, de, de + .4), 52); } },
 { chip: "CAMINHO E ROTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "caminho"), "ding"], [em(F2, "casa"), "pop"], [em(F2, "padaria"), "pop"], [em(F2, "escola"), "pop"], [em(F2, "rota"), "ding"]],
   draw(t, D) { const ca = em(F2, "caminho"), cs = em(F2, "casa"), pd = em(F2, "padaria"), es = em(F2, "escola"), ro = em(F2, "rota"); fundoEscuro(t, "#14532d"); palavra(t > ro ? "ROTA" : "CAMINHO", 560, 90, seg(t, ca, ca + .4), 64); g.save(); camera(t, [[0, 640, 340, 1], [pd, 600, 330, 1.04], [ro, 640, 340, 1]]);
     const q = seg(t, cs, es + .8); grafoDraw(GN, GE, { pesos: false, hlE: q > 0 ? arestasDe(P_PAD).filter((e, i) => q > i / 2) : [], hlN: t > cs ? ["Casa"].concat(t > pd ? ["Padaria"] : [], t > es ? ["Escola"] : []) : [], r: 46 }); if (t > cs) viajante(P_PAD, q, t, .4); g.restore();
     if (t > pd) etiqueta("um vértice depois do outro", 1040, 180, 700, 215, seg(t, pd, pd + .4)); caio({ x: 130, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "SOMA DOS PESOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "somamos"), "ding"], [em(F3, "três"), "pop"], [em(F3, "dois"), "pop"], [em(F3, "cinco"), "festa"]],
   draw(t, D) { const so = em(F3, "somamos"), pe = em(F3, "pesos"), tr = em(F3, "três"), ds = em(F3, "dois"), ci = em(F3, "cinco"); fundoEscuro(t, "#4c1d95"); palavra("SOMA DOS PESOS", 560, 90, seg(t, so, so + .4), 52); g.save(); camera(t, [[0, 640, 340, 1], [tr, 560, 300, 1.05], [ci, 700, 330, 1.02]]);
     grafoDraw(GN, GE, { hlE: t > tr ? [0].concat(t > ds ? [1] : []) : [], r: 46 }); g.restore(); if (t > tr) cartaoC(t > ds ? "3 + 2 = " + (t > ci ? "5 minutos" : "?") : "3", 1030, 500, 380, t > ci ? "#bbf7d0" : "#fde68a", seg(t, tr, tr + .4)); duda({ x: 130, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "TESTANDO OS CAMINHOS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "direta"), "pop"], [em(F4, "padaria"), "pop"], [em(F4, "praça"), "pop"], [em(F4, "curto"), "festa"]],
   draw(t, D) { const di = em(F4, "direta"), pd = em(F4, "padaria"), pr = em(F4, "praça"), cu = em(F4, "curto"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 330, 1], [cu, 640, 330, 1.01]]); g.translate(0, -70);
     const at = t < pd ? P_DIR : t < pr ? P_PAD : t < cu ? P_PRA : P_PAD; grafoDraw(GN, GE, { hlE: t > di ? arestasDe(at) : [], r: 46 }); if (t > di) viajante(at, seg(t, t < pd ? di : t < pr ? pd : t < cu ? pr : cu, (t < pd ? di : t < pr ? pd : t < cu ? pr : cu) + 1.6), t, .4); g.restore();
     cartaoC("rua direta: 9 min", 230, 495, 380, "#fecaca", seg(t, di, di + .4)); cartaoC("padaria: 3 + 2 = 5 min", 640, 495, 380, t > cu ? "#bbf7d0" : "#fde68a", seg(t, pd, pd + .4)); cartaoC("praça: 4 + 4 = 8 min", 1050, 495, 380, "#fecaca", seg(t, pr, pr + .4)); if (t > cu) { etiqueta("o mais curto!", 1090, 170, 1000, 255, seg(t, cu, cu + .4)); visto(790, 450, 24, seg(t, cu, cu + .3)); palavra("MENOR SOMA!", 560, 90, seg(t, cu, cu + .4), 56); } } },
 { chip: "MENOS PARADAS?", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "aresta"), "pop"], [em(F5, "nove"), "alerta"], [em(F5, "menor"), "ding"], [em(F5, "paradas"), "pop"]],
   draw(t, D) { const ar = em(F5, "aresta"), no = em(F5, "nove"), me = em(F5, "menor"), pa = em(F5, "paradas"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [me, 640, 340, 1.02]]);
     cartaoC("RUA DIRETA", 320, 200, 480, "#fde68a", seg(t, ar - .3, ar + .1), "1 aresta só"); if (t > no) { cartaoC("9 minutos 🐢", 320, 340, 480, "#fecaca", seg(t, no, no + .4)); xVermelho(560, 300, 22, seg(t, no + .4, no + .7)); }
     if (t > me) { cartaoC("VIA PADARIA", 960, 200, 480, "#bbf7d0", seg(t, me, me + .4), "2 arestas"); cartaoC("5 minutos ⚡", 960, 340, 480, "#bbf7d0", seg(t, me + .3, me + .7)); visto(1200, 300, 24, seg(t, me + .6, me + .9)); } g.restore();
     if (t > pa) palavra("NÃO É O DE MENOS PARADAS!", 560, 90, seg(t, pa, pa + .4), 40); caio({ x: 640, y: 575, s: .7, olhar: 0, braco: t > no ? -2.4 : .3, bracoE: .3, boca: t > no ? "o" : "riso", pisca: pisca(t) }); } },
 { chip: "TRÊS PASSOS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "Primeiro"), "ding"], [em(F6, "Segundo"), "ding"], [em(F6, "Terceiro"), "ding"]],
   draw(t, D) { const p1 = em(F6, "Primeiro"), p2 = em(F6, "Segundo"), p3 = em(F6, "Terceiro"); fundoEscuro(t, "#0e7490"); palavra("3 PASSOS", 560, 90, seg(t, 0, .4), 60); g.save(); camera(t, [[0, 640, 340, 1], [p1, 600, 300, 1.04], [p3, 680, 380, 1.04]]);
     passo(1, "liste todos os caminhos possíveis", 160, 200, 780, seg(t, p1, p1 + .4), t > p1 && t < p2); passo(2, "some os pesos de cada um", 160, 320, 780, seg(t, p2, p2 + .4), t > p2 && t < p3); passo(3, "escolha o menor total", 160, 440, 780, seg(t, p3, p3 + .4), t > p3); g.restore();
     robozinho(1130, 330, .9, t, t > p3); caio({ x: 1130, y: 540, s: .5, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "RUA INTERDITADA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "fechar"), "alerta"], [em(F7, "interditada"), "alerta"], [em(F7, "oito"), "ding"], [em(F7, "aplicativo"), "pop"]],
   draw(t, D) { const fe = em(F7, "fechar"), it = em(F7, "interditada"), pr = em(F7, "praça"), oi = em(F7, "oito"), ap = em(F7, "aplicativo"); fundoEscuro(t, "#450a0a"); g.save(); camera(t, [[0, 640, 330, 1], [it, 760, 290, 1.06], [oi, 640, 340, 1.02]]);
     g.translate(0, -70); const ib = t > it; grafoDraw(GN, GE, { hlE: t > pr ? arestasDe(P_PRA) : [], corE: ib ? { 1: "#64748b" } : null, tracE: ib ? [1] : [], r: 46 }); if (ib) emo("🚧", 760, 255, 64 * back(cl(seg(t, it, it + .4)))); if (t > oi) viajante(P_PRA, seg(t, oi, oi + 1.6), t, .4); g.restore();
     if (t > oi) cartaoC("casa ➜ praça ➜ escola = 8 min", 640, 510, 640, "#fde68a", seg(t, oi, oi + .4)); if (t > ap) { emo("📱", 1180, 330, 70 * back(cl(seg(t, ap, ap + .4)))); etq("recalculando...", 1180, 420, "#fff", seg(t, ap, ap + .4)); } if (t > it) etiqueta("bloqueio!", 900, 150, 665, 235, seg(t, it, it + .4)); if (t > fe && t < it) palavra("E SE UMA RUA FECHAR?", 560, 90, seg(t, fe, fe + .4), 46); } },
 { chip: "DIJKSTRA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "Dijkstra"), "ding"], [em(F8, "algoritmo"), "pop"], [em(F8, "testar"), "alerta"], [em(F8, "aplicativos"), "pop"]],
   draw(t, D) { const dj = em(F8, "Dijkstra"), al = em(F8, "algoritmo"), te = em(F8, "testar"), ap = em(F8, "aplicativos"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 340, 1], [al, 640, 330, 1.03]]);
     cartaoC("Edsger Dijkstra", 640, 180, 520, "#fde68a", seg(t, dj - .3, dj + .1), "1956 · holandês"); if (t > al) { cartaoC("algoritmo de Dijkstra ⚡", 920, 340, 480, "#bbf7d0", seg(t, al, al + .4), "acha o caminho mais curto"); robozinho(1180, 440, .7, t, true); }
     if (t > te) { cartaoC("testar um por um 🐢", 360, 340, 480, "#fecaca", seg(t, te, te + .4), "dá muito trabalho"); xVermelho(560, 300, 20, seg(t, te + .5, te + .8)); } g.restore(); if (t > ap) { emo("🗺️", 640, 470, 70 * back(cl(seg(t, ap, ap + .4)))); etq("apps de mapa usam essas ideias", 640, 520, "#fff", seg(t, ap, ap + .4)); } duda({ x: 110, y: 575, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "escolheu"), "pop"], [em(F9, "cinco"), "ding"], [em(F9, "tempo"), "festa"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const es = em(F9, "escolheu"), ci = em(F9, "cinco"), te = em(F9, "tempo"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); g.translate(640, 410); g.scale(.85, .85); g.translate(-640, -360); camera(t, [[0, 640, 340, 1], [mc, 640, 340, 1.0]]);
     grafoDraw(GN, GE, { hlE: t > es ? arestasDe(P_PAD) : [], r: 46 }); if (t > es) viajante(P_PAD, seg(t, es, te + .4), t, .45); g.restore();
     if (t > ci) cartaoC("5 minutos ✅", 860, 505, 300, "#bbf7d0", seg(t, ci, ci + .4)); caio({ x: 130, y: 585, s: .7, olhar: 1, braco: t > te ? -2.6 : .3, bracoE: t > te ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1160, y: 585, s: .7, olhar: -1, braco: t > te ? -2.6 : .3, bracoE: t > te ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "aplicativo"), "pop"], [em(F10, "entregador"), "pop"], [em(F10, "ônibus"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["aplicativo", "🗺️", "Apps de mapa:", "calculam a rota mais rápida"], ["entregador", "🛵", "Entregador:", "escolhe o caminho mais curto"], ["ônibus", "🚌", "Ônibus escolar:", "menos tempo e combustível"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 2º bimestre de 2027 · Missão 2", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 10; i++) CENAS[i].legenda = NUMS7([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10][i]);

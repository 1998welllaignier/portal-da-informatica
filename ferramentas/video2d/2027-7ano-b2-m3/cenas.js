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
const NUMS7 = s => s.replace(/mil setecentos e trinta e seis/g, "1736").replace(/\bmil novecentos e cinquenta e seis\b/g, "1956").replace(/\bdoze\b/g, "12").replace(/\bsete\b/g, "7").replace(/\bnove\b/g, "9").replace(/\boito\b/g, "8").replace(/\bseis\b/g, "6").replace(/\bcinco\b/g, "5").replace(/\bquatro\b/g, "4").replace(/\btrês\b/g, "3").replace(/\bdois\b/g, "2").replace(/\bgrau um\b/g, "grau 1");
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
function arcoD(x1, y1, cx, cy, x2, y2, cor, k) { if (k <= 0) return; g.save(); g.strokeStyle = cor; g.lineWidth = 9; g.lineCap = "round"; g.setLineDash([16, 14]); g.beginPath(); const n = 30; for (let i = 0; i <= n * cl(k); i++) { const u = i / n, x = (1 - u) * (1 - u) * x1 + 2 * (1 - u) * u * cx + u * u * x2, y = (1 - u) * (1 - u) * y1 + 2 * (1 - u) * u * cy + u * u * y2; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.restore(); }
const F0 = "Grafos de amizades: quem conhece quem?",
  F1 = "A Duda abriu a rede social, e apareceu uma mensagem: pessoas que você talvez conheça. O Caio ficou curioso: como o aplicativo sabe disso? Será mágica?",
  F2 = "Grafos também mostram pessoas. Cada pessoa é um vértice, e cada amizade é uma aresta. Esse grafo não tem peso: só importa quem está ligado a quem.",
  F3 = "Uma rede social é um grande grafo de pessoas, que são os vértices, ligadas por amizades ou por quem segue quem, que são as arestas.",
  F4 = "O grau mostra quantas amizades cada pessoa tem. A Ana tem grau três. A Bia, o Caio e o Davi têm grau dois. E a Eva tem grau um. Quem tem mais conexões é quem tem o maior grau: a Ana!",
  F5 = "A Eva não é amiga da Ana, mas as duas têm um amigo em comum: o Davi. Amigo em comum é a pessoa ligada a duas outras ao mesmo tempo.",
  F6 = "Num grafo sem peso, a distância é o número de arestas do caminho mais curto entre duas pessoas. A Ana e a Eva estão a dois passos de distância.",
  F7 = "É assim que a rede social faz a sugestão de amizade: ela procura no grafo os amigos dos seus amigos. Para a Ana, o aplicativo sugere a Eva!",
  F8 = "Mas cuidado! A sugestão não quer dizer que a pessoa é de confiança. A regra é aceitar só quem eu conheço de verdade.",
  F9 = "A Duda e o Caio entenderam: a rede é um grafo de amizades, e o aplicativo procura os amigos dos amigos. E só aceitaram quem conheciam de verdade. Missão cumprida!",
  F10 = "Onde eu uso isso? Nas redes sociais, quando aparece: pessoas que você talvez conheça. No grupo da turma, no aplicativo de mensagens, onde todos estão ligados ao mesmo grupo. E na pesquisa de saúde: os cientistas usam grafos de contatos para entender como uma gripe passa de pessoa para pessoa.",
  F11 = "Agora é com vocês: abram a Missão 3 no portal!";
const GN = { Ana: [640, 310], Bia: [430, 190], Caio: [430, 430], Davi: [860, 310], Eva: [1080, 310] };
const GE = [["Ana", "Bia"], ["Ana", "Caio"], ["Ana", "Davi"], ["Bia", "Caio"], ["Davi", "Eva"]];
const GRAU = { Ana: 3, Bia: 2, Caio: 2, Davi: 2, Eva: 1 };
function rede(t, k) { // rede grande (decorativa) ao fundo
  const pts = []; for (let i = 0; i < 44; i++) pts.push([100 + (i * 197 % 1100) + Math.sin(i * 3.1) * 40, 60 + (i * 83 % 560) + Math.cos(i * 2.3) * 30]);
  g.save(); g.globalAlpha = .55 * cl(k); g.strokeStyle = "#94a3b8"; g.lineWidth = 3; pts.forEach((p, i) => { [3, 7, 11].forEach(d => { const q = pts[(i + d) % pts.length]; if (Math.hypot(p[0] - q[0], p[1] - q[1]) < 330) { g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke(); } }); });
  pts.forEach((p, i) => { g.fillStyle = ["#fde68a", "#bbf7d0", "#fecaca", "#bfdbfe"][i % 4]; g.beginPath(); g.arc(p[0], p[1], 15, 0, 7); g.fill(); }); g.restore(); }
function telaSug(nome, botao) { g.fillStyle = "#f8fafc"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#0e7490"; g.fillRect(-70, -146, 140, 36); g.fillStyle = "#fff"; g.font = `800 12px ${F}`; g.textAlign = "center"; g.fillText("Pessoas que você", 0, -132); g.fillText("talvez conheça", 0, -117);
  g.fillStyle = "#cbd5e1"; g.beginPath(); g.arc(0, -50, 30, 0, 7); g.fill(); g.font = "34px sans-serif"; g.fillText("👤", 0, -38); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.fillText(nome, 0, 10); if (botao) { g.fillStyle = botao; rr(-48, 34, 96, 34, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 15px ${F}`; g.fillText("Adicionar", 0, 56); } }
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#831843"); g.save(); camera(t, [[0, 640, 250, 1.25], [1.8, 640, 300, .9]]); rede(t, seg(t, .1, .8)); celular(640, 250, .8, () => telaSug("Eva", "#16a34a")); g.restore(); abertura(t, "7º ANO · 2º BIM. · MISSÃO 3", "Grafos de amizades", "QUEM CONHECE", "QUEM?", 1.9); } },
 { chip: "SERÁ MÁGICA?", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "apareceu"), "ding"], [em(F1, "curioso"), "pop"], [em(F1, "mágica"), "alerta"]],
   draw(t, D) { const ap = em(F1, "apareceu"), cu = em(F1, "curioso"), ma = em(F1, "mágica"); fundoEscuro(t, "#4c1d95"); g.save(); camera(t, [[0, 640, 340, 1], [ap, 640, 330, 1.12], [cu, 640, 340, 1]]); celular(640, 290, 1.1, () => telaSug("Eva", "#16a34a")); g.restore();
     duda({ x: 300, y: 575, s: .8, olhar: 1, braco: t > ap ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); caio({ x: 980, y: 575, s: .8, olhar: -1, braco: t > cu ? -2.4 : .3, bracoE: .3, boca: t > cu ? "o" : "riso", pisca: pisca(t + 1) });
     if (t > ap) etiqueta("pessoas que você talvez conheça", 240, 220, 540, 260, seg(t, ap, ap + .4)); if (t > cu) balao("Como ele sabe? 🤔", 960, 330, seg(t, cu, cu + .4)); if (t > ma) palavra("SERÁ MÁGICA? 🎩", 560, 90, seg(t, ma, ma + .4), 52); } },
 { chip: "PESSOAS VIRAM VÉRTICES", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "pessoa"), "pop"], [em(F2, "vértice"), "ding"], [em(F2, "amizade"), "pop"], [em(F2, "aresta"), "ding"], [em(F2, "peso"), "alerta"]],
   draw(t, D) { const pe = em(F2, "pessoa"), ve = em(F2, "vértice"), am = em(F2, "amizade"), ar = em(F2, "aresta"), ps = em(F2, "peso"), qu = em(F2, "quem"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [ar, 700, 330, 1.04]]);
     grafoDraw(GN, GE, { pesos: false, kN: (n, i) => seg(t, pe + i * .25, pe + .3 + i * .25), kE: i => seg(t, am + i * .25, am + .4 + i * .25), r: 46 }); g.restore();
     if (t > ve) etiqueta("pessoa = vértice", 250, 150, 400, 175, seg(t, ve, ve + .4)); if (t > ar) etiqueta("amizade = aresta", 1000, 180, 760, 305, seg(t, ar, ar + .4)); if (t > ps) cartaoC("sem peso", 640, 500, 300, "#fde68a", seg(t, ps, ps + .4)); duda({ x: 130, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "REDE SOCIAL", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "rede"), "ding"], [em(F3, "vértices"), "pop"], [em(F3, "segue"), "pop"], [em(F3, "arestas"), "pop"]],
   draw(t, D) { const re = em(F3, "rede"), ve = em(F3, "vértices"), sg = em(F3, "segue"), ar = em(F3, "arestas"); fundoEscuro(t, "#0f172a"); palavra("REDE SOCIAL", 560, 90, seg(t, re, re + .4), 58); g.save(); camera(t, [[0, 640, 330, 2.0], [ve, 640, 330, 1.0]]); rede(t, 1); g.restore();
     if (t > ve) etq("pessoas = vértices", 300, 470, "#bbf7d0", seg(t, ve, ve + .4)); if (t > ar) etq("amizades e quem segue = arestas", 760, 470, "#fde68a", seg(t, ar, ar + .4)); caio({ x: 120, y: 575, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "GRAU", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "grau"), "ding"], [em(F4, "Ana"), "pop"], [em(F4, "Bia"), "pop"], [em(F4, "Eva"), "pop"], [em(F4, "maior"), "festa"]],
   draw(t, D) { const gr = em(F4, "grau"), an = em(F4, "Ana"), bi = em(F4, "Bia"), ev = em(F4, "Eva"), ma = em(F4, "maior"), an2 = em(F4, "Ana", 1); fundoEscuro(t, "#1e1b4b"); palavra("GRAU", 1000, 150, seg(t, gr, gr + .4), 64); g.save(); camera(t, [[0, 640, 340, 1], [bi, 640, 330, 1.04], [ma, 640, 340, 1]]); g.translate(0, -30);
     const kg = { Ana: an, Bia: bi, Caio: bi + .5, Davi: bi + 1, Eva: ev }; grafoDraw(GN, GE, { pesos: false, grau: GRAU, kG: n => seg(t, kg[n], kg[n] + .3), hlN: t > ma ? ["Ana"] : [], r: 46 }); if (t > ma) emo("👑", 640, 235, 60 * back(cl(seg(t, ma, ma + .4)))); g.restore();
     if (t > ma) cartaoC("maior grau: a Ana (3)", 640, 515, 480, "#fde68a", seg(t, ma, ma + .4)); duda({ x: 130, y: 575, s: .7, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "AMIGO EM COMUM", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Eva"), "pop"], [em(F5, "amigo"), "ding"], [em(F5, "Davi"), "pop"], [em(F5, "ao mesmo"), "ding"]],
   draw(t, D) { const ev = em(F5, "Eva"), am = em(F5, "amigo"), dv = em(F5, "Davi"), de = em(F5, "Amigo"), ms = em(F5, "mesmo"); fundoEscuro(t, "#7c2d12"); palavra("AMIGO EM COMUM", 560, 90, seg(t, am, am + .4), 54); g.save(); camera(t, [[0, 640, 340, 1], [dv, 860, 320, 1.1], [ms, 760, 330, 1.02]]);
     if (t > ev) arcoD(640, 310, 860, 450, 1080, 310, "#f87171", seg(t, ev, ev + .6)); grafoDraw(GN, GE, { pesos: false, hlE: t > dv ? [2, 4] : [], hlN: t > dv ? ["Davi"] : [], r: 46 }); g.restore();
     if (t > ev) etq("não são amigas", 760, 480, "#fecaca", seg(t, ev, ev + .4)); if (t > dv) etiqueta("amigo em comum", 1000, 180, 820, 280, seg(t, dv, dv + .4)); caio({ x: 120, y: 575, s: .65, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "DISTÂNCIA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "distância"), "ding"], [em(F6, "arestas"), "pop"], [em(F6, "dois"), "festa"]],
   draw(t, D) { const di = em(F6, "distância"), ar = em(F6, "arestas"), ae = em(F6, "Ana", 0), ds = em(F6, "dois"); fundoEscuro(t, "#0e7490"); palavra("DISTÂNCIA", 560, 90, seg(t, di, di + .4), 60); g.save(); camera(t, [[0, 640, 340, 1], [ae, 760, 330, 1.05], [ds, 700, 330, 1.02]]);
     const q = seg(t, ae, ds + .6); grafoDraw(GN, GE, { pesos: false, hlE: q > 0 ? [2, 4].filter((e, i) => q > i * .5) : [], hlN: ["Ana", "Eva"], r: 46 }); if (q > 0) { const p = q < .5 ? [lerp(640, 860, q * 2), 310] : [lerp(860, 1080, (q - .5) * 2), 310]; robozinho(p[0], p[1] - 70, .4, t, q >= 1); } g.restore();
     if (t > ar) { contador(1000, 200, 1, seg(t, ar, ar + .3), "#fde68a"); contador(1090, 200, 2, seg(t, ds, ds + .3), "#bbf7d0"); } if (t > ds) cartaoC("a 2 passos de distância", 860, 510, 440, "#fde68a", seg(t, ds, ds + .4)); duda({ x: 120, y: 575, s: .65, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "SUGESTÃO DE AMIZADE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "sugestão"), "ding"], [em(F7, "procura"), "pop"], [em(F7, "amigos"), "pop"], [em(F7, "sugere"), "festa"]],
   draw(t, D) { const su = em(F7, "sugestão"), pr = em(F7, "procura"), am = em(F7, "amigos"), sg = em(F7, "sugere"); fundoEscuro(t, "#831843"); g.save(); camera(t, [[0, 640, 340, 1], [pr, 560, 330, 1.04], [sg, 700, 330, 1.02]]); g.translate(-150, 0);
     if (t > sg) arcoD(640, 310, 860, 450, 1080, 310, "#f472b6", seg(t, sg, sg + .6)); grafoDraw(GN, GE, { pesos: false, hlE: t > pr ? [2] : [], hlN: t > sg ? ["Ana", "Eva"] : t > am ? ["Ana", "Davi"] : [], r: 46 }); g.restore();
     if (t > su) palavra("SUGESTÃO", 560, 90, seg(t, su, su + .4), 56); if (t > pr) etiqueta("amigos dos seus amigos", 640, 490, 590, 340, seg(t, am - .3, am + .1)); celular(1130, 330, .9, () => telaSug(t > sg ? "Eva" : "...", t > sg ? "#16a34a" : null)); if (t > sg) etq("sugere a Eva!", 1130, 520, "#fde68a", seg(t, sg, sg + .4)); } },
 { chip: "CUIDADO!", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "cuidado"), "alerta"], [em(F8, "confiança"), "alerta"], [em(F8, "regra"), "ding"], [em(F8, "conheço"), "festa"]],
   draw(t, D) { const cu = em(F8, "cuidado"), co = em(F8, "confiança"), re = em(F8, "regra"), cn = em(F8, "conheço"); fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [co, 560, 330, 1.05], [cn, 640, 340, 1]]);
     celular(400, 300, 1.1, () => telaSug("Estranho", t > re ? "#94a3b8" : "#16a34a")); if (t > co) { emo("❓", 620, 220, 80 * back(cl(seg(t, co, co + .4)))); xVermelho(450, 400, 24, seg(t, co + .3, co + .6)); }
     if (t > re) cartaoC("regra: só aceito quem conheço!", 900, 260, 520, "#bbf7d0", seg(t, re, re + .4)); if (t > cn) { emo("🛡️", 900, 400, 100 * back(cl(seg(t, cn, cn + .4)))); } g.restore(); if (t > cu) palavra("CUIDADO!", 560, 90, seg(t, cu, cu + .4), 64);
     duda({ x: 130, y: 575, s: .7, olhar: 1, braco: t > co ? -2.2 : .3, bracoE: .3, boca: t > co ? "o" : "riso", pisca: pisca(t) }); if (t > co && t < re) balao("Não conheço! ✋", 270, 330, seg(t, co, co + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "entenderam"), "ding"], [em(F9, "aceitaram"), "pop"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const en = em(F9, "entenderam"), ac = em(F9, "aceitaram"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); g.translate(640, 390); g.scale(.8, .8); g.translate(-640, -330); camera(t, [[0, 640, 340, 1], [mc, 640, 340, 1.0]]);
     grafoDraw(GN, GE, { pesos: false, hlE: t > en ? [0, 1, 2, 3, 4] : [], r: 46 }); g.restore(); if (t > ac) emo("🛡️", 900, 505, 70 * back(cl(seg(t, ac, ac + .4))));
     duda({ x: 130, y: 585, s: .7, olhar: 1, braco: t > ac ? -2.6 : .3, bracoE: t > ac ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); caio({ x: 1160, y: 585, s: .7, olhar: -1, braco: t > ac ? -2.6 : .3, bracoE: t > ac ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "redes"), "pop"], [em(F10, "grupo"), "pop"], [em(F10, "pesquisa"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["redes", "📱", "Redes sociais:", "pessoas que você talvez conheça"], ["grupo", "💬", "Grupo da turma:", "todos ligados ao mesmo grupo"], ["pesquisa", "🔬", "Pesquisa de saúde:", "gripe: de pessoa a pessoa"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 2º bimestre de 2027 · Missão 3", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 10; i++) CENAS[i].legenda = NUMS7([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10][i]);

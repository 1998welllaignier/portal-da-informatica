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
const F0 = "Estrutura certa: como guardar os dados?",
  F1 = "A Duda ia programar um aplicativo da escola, mas travou na primeira pergunta: como guardar os dados? Antes de programar, o programador decide como organizar as informações. Esse jeito de organizar se chama estrutura de dados.",
  F2 = "Escolher bem a estrutura deixa o programa simples. Escolher mal deixa tudo difícil. Por isso, vamos conhecer três estruturas: a lista, a tabela e o grafo.",
  F3 = "A lista guarda itens um depois do outro, em ordem. Serve para guardar coisas em sequência: a lista de compras, a fila da cantina e a playlist de músicas.",
  F4 = "A tabela guarda dados em linhas e colunas. Cada linha é um registro, a ficha de uma coisa. E cada informação do registro é um campo. Por exemplo, no boletim: o nome do aluno, a nota e as faltas.",
  F5 = "O grafo, que você já conhece, é feito de vértices ligados por arestas. Serve para mostrar o que está ligado a quê: o mapa da cidade, a rede de amigos e a rede de computadores.",
  F6 = "Como escolher? Faça três perguntas. A ordem dos itens importa, e cada item tem só uma informação? Então use uma lista. Cada item tem várias informações, como nome, idade e telefone? Então use uma tabela. O importante é quem está ligado a quem? Então use um grafo.",
  F7 = "Vamos treinar! Músicas na ordem em que vão tocar? Lista. Nome, turma e nota de cada aluno? Tabela. Cidades que têm estrada entre si? Grafo!",
  F8 = "A Duda escolheu: a playlist do aplicativo é uma lista, a agenda de contatos é uma tabela, e o mapa é um grafo. Aplicativo organizado! Missão cumprida!",
  F9 = "Onde eu uso isso? A playlist de músicas é uma lista: uma depois da outra. A agenda de contatos do celular é uma tabela: cada contato tem nome, telefone e foto. E o aplicativo de mapa guarda as ruas num grafo.",
  F10 = "Agora é com vocês: abram a Missão 4 no portal!";
const DADOS = ["Ana · 8,5", "música 3", "Rua do Sol", "(94) 9...", "nota: 7,0", "Eva", "faltas: 2", "Praça"];
function cartinha(txt, x, y, rot, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.rotate(rot); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-80, -26, 160, 52, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 7); g.restore(); }
const GN = { Escola: [380, 300], "Praça": [640, 190], Mercado: [900, 300], Casa: [640, 390] }, GE = [["Escola", "Praça"], ["Praça", "Mercado"], ["Escola", "Casa"], ["Casa", "Mercado"]];
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"], [1.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 260, 1], [1.8, 640, 300, .95]]);
     [["📝", 320], ["🗂️", 640], ["🕸️", 960]].forEach(([e, x], i) => { const k = seg(t, .2 + i * .35, .6 + i * .35); if (k > 0) { g.fillStyle = "#fff"; rr(x - 100, 170 - 30 * back(cl(k)) + 30, 200, 190, 20); g.fill(); emo(e, x, 300 + Math.sin(t * 4 + i) * 6, 90 * back(cl(k))); } });
     robozinho(1000, 420, .7, t, t > 1.5); g.restore(); abertura(t, "7º ANO · 2º BIM. · MISSÃO 4", "Estrutura certa", "COMO GUARDAR", "OS DADOS?", 1.9); } },
 { chip: "A DÚVIDA DA DUDA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "travou"), "alerta"], [em(F1, "organizar"), "pop"], [em(F1, "estrutura"), "ding"]],
   draw(t, D) { const tr = em(F1, "travou"), og = em(F1, "organizar"), es = em(F1, "estrutura"); fundoEscuro(t, "#334155"); g.save(); camera(t, [[0, 640, 340, 1], [tr, 640, 330, 1.05], [es, 640, 340, 1]]);
     DADOS.forEach((s, i) => { const bag = t < og ? 1 : Math.max(0, 1 - seg(t, og, og + 1)); const x = 260 + (i % 4) * 250 + Math.sin(t * 1.5 + i * 2) * 22 * bag, y = 250 + Math.floor(i / 4) * 90 + Math.cos(t * 1.3 + i * 1.7) * 18 * bag; cartinha(s, x, y, Math.sin(i * 3 + t) * .25 * bag, seg(t, .2 + i * .1, .5 + i * .1), "#fde68a"); }); g.restore();
     duda({ x: 640, y: 575, s: .8, olhar: 0, braco: t > tr ? -2.4 : .3, bracoE: t > tr ? 2.4 : .3, boca: t > tr ? "o" : "riso", pisca: pisca(t) }); if (t > tr && t < og) balao("Como guardo tudo isso? 😵", 930, 480, seg(t, tr, tr + .4)); if (t > es) palavra("ESTRUTURA DE DADOS", 560, 100, seg(t, es, es + .4), 52); } },
 { chip: "BEM OU MAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "bem"), "ding"], [em(F2, "mal"), "alerta"], [em(F2, "lista"), "pop"], [em(F2, "tabela"), "pop"], [em(F2, "grafo"), "pop"]],
   draw(t, D) { const be = em(F2, "bem"), ma = em(F2, "mal"), li = em(F2, "lista"), ta = em(F2, "tabela"), gr = em(F2, "grafo"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 340, 1], [ma, 640, 330, 1.03]]);
     if (t > be) { cartaoC("ESCOLHER BEM ✅", 330, 150, 480, "#bbf7d0", seg(t, be, be + .4), "programa simples"); for (let i = 0; i < 4; i++) cartinha(DADOS[i], 330, 260 + i * 62, 0, seg(t, be + .3 + i * .15, be + .6 + i * .15), "#bbf7d0"); }
     if (t > ma) { cartaoC("ESCOLHER MAL ❌", 950, 150, 480, "#fecaca", seg(t, ma, ma + .4), "tudo difícil"); for (let i = 0; i < 4; i++) cartinha(DADOS[i + 4], 880 + (i % 2) * 140 + Math.sin(i * 5) * 20, 290 + i * 55, Math.sin(i * 4) * .5, seg(t, ma + .3 + i * .15, ma + .6 + i * .15), "#fecaca"); } g.restore();
     [["📝 lista", li], ["🗂️ tabela", ta], ["🕸️ grafo", gr]].forEach(([s, t0], i) => etq(s, 330 + i * 310, 550, "#fde68a", seg(t, t0, t0 + .3))); } },
 { chip: "A LISTA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "lista"), "ding"], [em(F3, "ordem"), "pop"], [em(F3, "compras"), "pop"], [em(F3, "cantina"), "pop"], [em(F3, "playlist"), "pop"]],
   draw(t, D) { const li = em(F3, "lista"), or = em(F3, "ordem"), co = em(F3, "compras"), ca = em(F3, "cantina"), pl = em(F3, "playlist"); fundoEscuro(t, "#14532d"); palavra("LISTA 📝", 560, 90, seg(t, li, li + .4), 62); g.save(); camera(t, [[0, 640, 340, 1], [pl, 640, 340, 1.02]]);
     ["pão", "leite", "ovos", "arroz", "café"].forEach((s, i) => { const k = seg(t, li + .3 + i * .45, li + .6 + i * .45); if (k > 0) { cartaoC((i + 1) + ".  " + s, 330, 200 + i * 66 - 30 + 30, 380, "#fff", k); } }); if (t > or) seta(130, 190, 110, 330, 130, 430, "#fde047", 8, seg(t, or, or + .4)); if (t > or) etq("em ordem", 120, 140, "#fde68a", seg(t, or, or + .4));
     [["🛒", "lista de compras", co], ["🍽️", "fila da cantina", ca], ["🎵", "playlist", pl]].forEach(([e, s, t0], i) => { const k = seg(t, t0, t0 + .4); if (k > 0) { cartaoC(s, 920, 220 + i * 120, 340, "#bbf7d0", k); emo(e, 730, 235 + i * 120, 40 * back(cl(k))); } }); g.restore(); duda({ x: 1170, y: 575, s: .55, olhar: -1, braco: -2.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "A TABELA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "tabela"), "ding"], [em(F4, "registro"), "pop"], [em(F4, "campo"), "pop"], [em(F4, "boletim"), "pop"]],
   draw(t, D) { const ta = em(F4, "tabela"), li = em(F4, "linhas"), re = em(F4, "registro"), ca = em(F4, "campo"), bo = em(F4, "boletim"); fundoEscuro(t, "#4c1d95"); palavra("TABELA 🗂️", 560, 90, seg(t, ta, ta + .4), 60); g.save(); camera(t, [[0, 640, 340, 1], [re, 640, 330, 1.04], [bo, 640, 340, 1]]);
     tabela(640, 150, 760, ["ALUNO", "NOTA", "FALTAS"], [["Ana", "8,5", "2"], ["Davi", "7,0", "0"], ["Eva", "9,5", "1"]], ["#7c3aed", "#16a34a", "#f59e0b"], seg(t, ta, ta + .4), -1, 64); if (t > re) { g.strokeStyle = "#facc15"; g.lineWidth = 8; rr(256, 150 + 64 * 3 - 3, 768, 64, 12); g.stroke(); } if (t > ca) { g.strokeStyle = "#f472b6"; g.lineWidth = 8; rr(256 + 256 + 2, 150 + 64 * 3 - 3, 252, 64, 12); g.stroke(); } g.restore();
     if (t > li) etiqueta("colunas e linhas", 1080, 130, 960, 185, seg(t, li, li + .4)); if (t > re) etiqueta("registro = a ficha", 330, 500, 420, 405, seg(t, re, re + .4)); if (t > ca) etiqueta("campo = cada informação", 900, 500, 650, 405, seg(t, ca, ca + .4)); caio({ x: 110, y: 560, s: .55, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O GRAFO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "grafo"), "ding"], [em(F5, "vértices"), "pop"], [em(F5, "arestas"), "pop"], [em(F5, "mapa"), "pop"], [em(F5, "rede", 1), "pop"]],
   draw(t, D) { const gr = em(F5, "grafo"), ve = em(F5, "vértices"), ar = em(F5, "arestas"), mp = em(F5, "mapa"), ra = em(F5, "rede"), rc = em(F5, "rede", 1); fundoEscuro(t, "#0e7490"); palavra("GRAFO 🕸️", 560, 90, seg(t, gr, gr + .4), 62); g.save(); camera(t, [[0, 640, 340, 1], [ar, 640, 330, 1.03]]);
     grafoDraw(GN, GE, { pesos: false, kN: (n, i) => seg(t, ve + i * .2, ve + .3 + i * .2), kE: i => seg(t, ar + i * .2, ar + .4 + i * .2), r: 46 }); g.restore();
     [["🗺️ mapa da cidade", mp], ["👥 rede de amigos", ra], ["💻 rede de computadores", rc]].forEach(([s, t0], i) => cartaoC(s, 220 + i * 420, 505, 380, "#fde68a", seg(t, t0, t0 + .4))); } },
 { chip: "TRÊS PERGUNTAS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "perguntas"), "ding"], [em(F6, "lista", 0), "pop"], [em(F6, "tabela"), "pop"], [em(F6, "grafo"), "pop"]],
   draw(t, D) { const pe = em(F6, "perguntas"), q1 = em(F6, "ordem"), li = em(F6, "lista"), q2 = em(F6, "várias"), ta = em(F6, "tabela"), q3 = em(F6, "importante"), gr = em(F6, "grafo"); fundoEscuro(t, "#7c2d12"); palavra("3 PERGUNTAS", 560, 90, seg(t, pe, pe + .4), 58); g.save(); camera(t, [[0, 640, 340, 1], [q2, 640, 350, 1.03], [gr, 640, 340, 1]]);
     [["1. A ordem importa e cada item tem só 1 informação?", q1, "📝 LISTA", li, "#bbf7d0"], ["2. Cada item tem várias informações?", q2, "🗂️ TABELA", ta, "#e9d5ff"], ["3. O importante é quem está ligado a quem?", q3, "🕸️ GRAFO", gr, "#bae6fd"]].forEach(([q, tq, r, tr, c], i) => { const y = 200 + i * 130; cartaoC(q, 400, y, 700, "#fde68a", seg(t, tq - .2, tq + .2)); if (t > tr - .2) { seta(760, y, 800, y - 10, 860, y, "#fff", 7, seg(t, tr - .2, tr)); cartaoC(r, 1040, y, 300, c, seg(t, tr, tr + .4)); } }); g.restore(); } },
 { chip: "VAMOS TREINAR", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Músicas"), "pop"], [em(F7, "Lista"), "ding"], [em(F7, "Nome"), "pop"], [em(F7, "Tabela"), "ding"], [em(F7, "Cidades"), "pop"], [em(F7, "Grafo"), "festa"]],
   draw(t, D) { const mu = em(F7, "Músicas"), li = em(F7, "Lista"), no = em(F7, "Nome"), ta = em(F7, "Tabela"), ci = em(F7, "Cidades"), gr = em(F7, "Grafo"); fundoEscuro(t, "#1e1b4b"); palavra("VAMOS TREINAR!", 560, 90, seg(t, 0, .4), 58); g.save(); camera(t, [[0, 640, 340, 1], [no, 640, 340, 1.02], [gr, 640, 340, 1]]);
     [["🎵", "Músicas na ordem em que vão tocar", mu, "📝 LISTA", li, "#bbf7d0"], ["🧑‍🎓", "Nome, turma e nota de cada aluno", no, "🗂️ TABELA", ta, "#e9d5ff"], ["🛣️", "Cidades com estrada entre si", ci, "🕸️ GRAFO", gr, "#bae6fd"]].forEach(([e, q, tq, r, tr, c], i) => { const x = 220 + i * 420; const k = seg(t, tq, tq + .4); if (k > 0) { cartaoC(q, x, 230, 380, "#fde68a", k); emo(e, x, 380, 70 * back(cl(k))); } if (t > tr) { cartaoC(r, x, 470, 300, c, seg(t, tr, tr + .4)); visto(x + 130, 430, 22, seg(t, tr + .3, tr + .6)); } }); g.restore(); robozinho(1190, 150, .5, t, t > gr); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "playlist"), "pop"], [em(F8, "agenda"), "pop"], [em(F8, "mapa"), "pop"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const pl = em(F8, "playlist"), ag = em(F8, "agenda"), mp = em(F8, "mapa"), mc = em(F8, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 380, 1.0]]);
     [["🎵 Playlist", "é uma lista", pl, "#bbf7d0"], ["📇 Agenda", "é uma tabela", ag, "#e9d5ff"], ["🗺️ Mapa", "é um grafo", mp, "#bae6fd"]].forEach(([s, sub, t0, c], i) => { cartaoC(s, 240 + i * 400, 330, 340, c, seg(t, t0, t0 + .4), sub); visto(240 + i * 400 + 150, 290, 22, seg(t, t0 + .3, t0 + .6)); }); g.restore();
     duda({ x: 130, y: 585, s: .7, olhar: 1, braco: t > mp ? -2.6 : .3, bracoE: t > mp ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); caio({ x: 1160, y: 585, s: .7, olhar: -1, braco: t > mp ? -2.6 : .3, bracoE: t > mp ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "playlist"), "pop"], [em(F9, "agenda"), "pop"], [em(F9, "aplicativo"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["playlist", "🎵", "Playlist:", "uma música depois da outra"], ["agenda", "📇", "Agenda de contatos:", "nome, telefone e foto"], ["aplicativo", "🗺️", "App de mapa:", "as ruas num grafo"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 2º bimestre de 2027 · Missão 4", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 9; i++) CENAS[i].legenda = NUMS7([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9][i]);

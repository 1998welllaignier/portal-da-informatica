/* base: peças do extra de recursão (8ano-m6-extra) */
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
/* ===== peças do "mistério da boneca" ===== */
const BIAE = { camisa: "#f97316", cabelo: "longo" };
const biaE = o => boneco(Object.assign({}, BIAE, o));
const CM = ["#dc2626", "#2563eb", "#16a34a", "#f59e0b", "#db2777", "#7c3aed"];
function bonecaForma(cor, R, macica) { g.lineWidth = Math.max(2, R * .06); g.strokeStyle = NAVY;
  g.fillStyle = cor; g.beginPath(); g.ellipse(0, -R * 1.05, R, R * 1.05, 0, 0, 7); g.fill(); g.stroke(); g.beginPath(); g.arc(0, -R * 2.2, R * .66, 0, 7); g.fill(); g.stroke();
  g.fillStyle = "#fde7d0"; g.beginPath(); g.arc(0, -R * 2.15, R * .42, 0, 7); g.fill();
  g.fillStyle = NAVY; g.beginPath(); g.arc(-R * .15, -R * 2.2, R * .055, 0, 7); g.arc(R * .15, -R * 2.2, R * .055, 0, 7); g.fill();
  g.fillStyle = "#f9a8d4"; g.beginPath(); g.arc(-R * .25, -R * 2.06, R * .08, 0, 7); g.arc(R * .25, -R * 2.06, R * .08, 0, 7); g.fill();
  g.strokeStyle = "#dc2626"; g.lineWidth = Math.max(1.5, R * .04); g.beginPath(); g.arc(0, -R * 2.03, R * .1, .2, Math.PI - .2); g.stroke();
  g.fillStyle = "#fff7ed"; g.beginPath(); g.ellipse(0, -R * .95, R * .62, R * .72, 0, 0, 7); g.fill();
  g.fillStyle = cor; for (let i = 0; i < 5; i++) { const a = i * 1.2566; g.beginPath(); g.arc(Math.cos(a) * R * .17, -R * .95 + Math.sin(a) * R * .17, R * .13, 0, 7); g.fill(); }
  g.fillStyle = "#facc15"; g.beginPath(); g.arc(0, -R * .95, R * .1, 0, 7); g.fill();
  if (!macica) { g.strokeStyle = "rgba(20,33,61,.55)"; g.lineWidth = Math.max(1.5, R * .03); g.beginPath(); g.moveTo(-R * .97, -R * 1.3); g.lineTo(R * .97, -R * 1.3); g.stroke(); } }
// matrioska: (x,y) = chão; abre 0..1 levanta a metade de cima; dentro() desenha o que tem dentro (coordenadas locais, chão em y=0)
function matrioska(x, y, s, cor, abre, dentro, macica) { const R = 60, corte = -R * 1.3; g.save(); g.translate(x, y); g.scale(s, s);
  if (!abre || abre <= 0) { bonecaForma(cor, R, macica); if (dentro && abre === -1) dentro(); g.restore(); return; }
  g.save(); g.beginPath(); g.rect(-R * 2, corte, R * 4, R * 3); g.clip(); bonecaForma(cor, R); g.restore();
  if (dentro) dentro();
  g.save(); g.translate(R * 1.1 * abre, -R * 1.5 * abre); g.rotate(abre * .55); g.beginPath(); g.rect(-R * 2, -R * 4, R * 4, R * 4 + corte); g.clip(); bonecaForma(cor, R); g.restore();
  g.restore(); }
// túnel infinito de bonecas (uma dentro da outra, zoom sem fim)
function tunel(t, cx, cy, vel, zMax) { const q = t * vel, b = Math.floor(q); const lista = [];
  for (let n = b - 7; n <= b + 3; n++) { const s = 2.4 * Math.pow(1.7, n - q); if (s < .03 || s > (zMax || 6)) continue; lista.push([n, s]); }
  lista.sort((a, c) => c[1] - a[1]).forEach(([n, s]) => matrioska(cx, cy + 63 * s, s, CM[((n % 6) + 6) % 6], 0)); }
function salaCasa(t) { // fundo da sala com camadas: parede, janela, estante, mesa
  const gr = g.createLinearGradient(0, -200, 0, 900); gr.addColorStop(0, "#fde68a"); gr.addColorStop(1, "#f59e0b"); g.fillStyle = gr; g.fillRect(-500, -400, 2280, 1500);
  g.fillStyle = "#7dd3fc"; rr(120, 90, 260, 200, 10); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 12; rr(120, 90, 260, 200, 10); g.stroke(); g.beginPath(); g.moveTo(250, 90); g.lineTo(250, 290); g.moveTo(120, 190); g.lineTo(380, 190); g.stroke();
  nuvem(200 + Math.sin(t * .4) * 20, 150, .5);
  g.fillStyle = "#92400e"; g.fillRect(860, 110, 300, 14); g.fillRect(860, 220, 300, 14); [0, 1, 2, 3, 4].forEach(i => { g.fillStyle = ["#2563eb", "#16a34a", "#db2777", "#7c3aed", "#0d9488"][i]; g.fillRect(880 + i * 34, 140, 26, 80); });
  g.fillStyle = "rgba(0,0,0,.08)"; g.fillRect(-500, 470, 2280, 30);
  g.fillStyle = "#78350f"; rr(140, 470, 1000, 34, 10); g.fill(); g.fillStyle = "#92400e"; g.fillRect(180, 500, 26, 190); g.fillRect(1074, 500, 26, 190);
  g.fillStyle = "#b45309"; g.fillRect(-500, 690, 2280, 400); }
function vasoFrente(x, y, t) { g.save(); g.translate(x, y); g.fillStyle = "#166534"; for (let i = 0; i < 6; i++) { g.save(); g.rotate(-1 + i * .4 + Math.sin(t + i) * .04); g.beginPath(); g.ellipse(0, -80, 18, 80, 0, 0, 7); g.fill(); g.restore(); } g.fillStyle = "#c2410c"; rr(-50, -20, 100, 90, 12); g.fill(); g.restore(); }
function placaPare(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#dc2626"; g.strokeStyle = "#fff"; g.lineWidth = 6; g.beginPath(); for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; g.lineTo(Math.cos(a) * 60, Math.sin(a) * 60); } g.closePath(); g.fill(); g.stroke();
  g.fillStyle = "#fff"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("PARE", 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
function moldura(x, y, w, h, cor) { g.strokeStyle = cor || "#a16207"; g.lineWidth = 14; rr(x - w / 2, y - h / 2, w, h, 10); g.stroke(); g.fillStyle = "rgba(186,230,253,.35)"; rr(x - w / 2, y - h / 2, w, h, 10); g.fill(); }
function cinema(t) { // rua do cinema com camadas
  const gr = g.createLinearGradient(0, -200, 0, 720); gr.addColorStop(0, "#1e1b4b"); gr.addColorStop(1, "#4c1d95"); g.fillStyle = gr; g.fillRect(-600, -400, 3000, 1500);
  for (let i = 0; i < 30; i++) { g.fillStyle = "rgba(255,255,255," + (.3 + .3 * Math.sin(t * 2 + i)) + ")"; g.fillRect((i * 173) % 2400 - 500, (i * 97) % 200 - 150, 3, 3); }
  [-450, 1700, 1980].forEach((x, i) => predio(x, 470, 1.6, ["#312e81", "#3730a3", "#312e81"][i]));
  g.fillStyle = "#7f1d1d"; g.fillRect(-300, 40, 560, 430); g.fillStyle = "#facc15"; rr(-320, 20, 600, 90, 14); g.fill(); g.fillStyle = "#7f1d1d"; g.font = `900 52px ${F}`; g.textAlign = "center"; g.fillText("CINEMA", -20, 84);
  for (let i = 0; i < 16; i++) { g.fillStyle = (Math.floor(t * 5) + i) % 2 ? "#fff7ae" : "#a16207"; g.beginPath(); g.arc(-300 + i * 37, 120, 6, 0, 7); g.fill(); }
  g.fillStyle = "#0f172a"; rr(60, 230, 170, 240, 8); g.fill(); g.fillStyle = "#fde68a"; rr(80, 250, 130, 80, 6); g.fill(); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.fillText("BILHETERIA", 145, 360);
  g.fillStyle = "#334155"; g.fillRect(-600, 470, 3000, 260); g.fillStyle = "#475569"; g.fillRect(-600, 470, 3000, 14); }
const FILA = [300, 470, 640, 810, 980, 1150, 1320], CORF = ["#ef4444", "#22c55e", "#3b82f6", "#a855f7", "#f59e0b", "#14b8a6"];
function fila(t, quem) { FILA.slice(0, 6).forEach((x, i) => boneco({ x, y: 610, s: .78, camisa: CORF[i], cabelo: i % 2 ? "longo" : "", olhar: quem && quem(i) === "tras" ? 1 : -1, braco: quem && quem(i) === "fala" ? -1.6 : .2, bracoE: .3, boca: quem && quem(i) === "fala" ? "o" : "", pisca: pisca(t + i * .37) })); robozinho(1320, 590, 1.25, t, quem && quem(6) === "feliz"); }
function selinho(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#facc15"; g.strokeStyle = NAVY; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill(); g.stroke(); g.fillStyle = NAVY; g.font = `900 34px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
function foguete(x, y, s, t, voa, fogo) { g.save(); g.translate(x, y - voa); g.scale(s, s);
  if (fogo) { for (let i = 0; i < 3; i++) { g.fillStyle = ["#f97316", "#facc15", "#fff7ae"][i]; g.beginPath(); g.moveTo(-34 + i * 10, 40); g.quadraticCurveTo(0, 150 - i * 30 + Math.sin(t * 40 + i) * 14, 34 - i * 10, 40); g.fill(); } }
  g.fillStyle = "#dc2626"; g.beginPath(); g.moveTo(-40, 40); g.lineTo(-75, 80); g.lineTo(-40, 0); g.fill(); g.beginPath(); g.moveTo(40, 40); g.lineTo(75, 80); g.lineTo(40, 0); g.fill();
  g.fillStyle = "#e2e8f0"; g.strokeStyle = NAVY; g.lineWidth = 5; g.beginPath(); g.moveTo(0, -160); g.quadraticCurveTo(55, -100, 42, 44); g.lineTo(-42, 44); g.quadraticCurveTo(-55, -100, 0, -160); g.fill(); g.stroke();
  g.fillStyle = "#38bdf8"; g.beginPath(); g.arc(0, -60, 20, 0, 7); g.fill(); g.stroke(); g.restore(); }
function plataforma(t) { const gr = g.createLinearGradient(0, -200, 0, 720); gr.addColorStop(0, "#0c4a6e"); gr.addColorStop(1, "#7dd3fc"); g.fillStyle = gr; g.fillRect(-600, -600, 2500, 1600);
  for (let i = 0; i < 6; i++) nuvem(((i * 260 + t * 20) % 1700) - 200, 80 + (i % 3) * 60, .7);
  g.fillStyle = "#15803d"; g.fillRect(-600, 560, 2500, 400); g.fillStyle = "#64748b"; g.fillRect(520, 520, 240, 40); g.fillStyle = "#475569"; g.fillRect(780, 200, 26, 360); g.fillRect(740, 300, 60, 14); }
function painelNum(txt, x, y, k, cor) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = "#0f172a"; rr(x - 110, y - 70, 220, 140, 18); g.fill(); g.fillStyle = cor || "#4ade80"; g.font = `900 96px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, x, y + 4); g.restore(); g.textBaseline = "alphabetic"; }
function chapeu(x, y, w, txt, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; g.beginPath(); g.moveTo(0, 20); g.quadraticCurveTo(70, -34, 150, 0); g.lineTo(w, 0); g.lineTo(w, 56); g.lineTo(56, 56); g.lineTo(50, 64); g.lineTo(30, 64); g.lineTo(24, 56); g.lineTo(0, 56); g.closePath(); g.fill();
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 40); g.restore(); }
function samambaia(x, y, tam, ang, prof, k) { if (prof <= 0 || tam < 3 || k <= 0) return; const x2 = x + Math.cos(ang) * tam * Math.min(1, k * 2), y2 = y + Math.sin(ang) * tam * Math.min(1, k * 2);
  g.strokeStyle = prof > 3 ? "#166534" : "#22c55e"; g.lineWidth = Math.max(1, prof * .9); g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke(); const kk = (k - .12) / .88;
  samambaia(x2, y2, tam * .78, ang + .06, prof - 1, kk); samambaia(x + (x2 - x) * .45, y + (y2 - y) * .45, tam * .42, ang - 1.0, prof - 1, kk); samambaia(x + (x2 - x) * .45, y + (y2 - y) * .45, tam * .42, ang + 1.0, prof - 1, kk); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const BIA8 = { camisa: "#f97316", cabelo: "longo" }; const bia8 = o => boneco(Object.assign({}, BIA8, o));
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
/* ===== 8º M6 · Recursão (v2) ===== */
const QX = [520, 680, 840, 1000, 1160], QC = ["#ef4444", "#22c55e", "#3b82f6", "#a855f7"];
function filaBia(t, fala, k) { QX.forEach((x, i) => { if (i === 4) bia8({ x, y: 560, s: .7, olhar: -1, braco: fala === 4 ? -1.6 : .2, bracoE: .3, boca: fala === 4 ? "o" : "riso", pisca: pisca(t + i) });
  else boneco({ x, y: 560, s: .7, camisa: QC[i], cabelo: i % 2 ? "longo" : "", olhar: -1, braco: fala === i ? -1.6 : .2, bracoE: .3, boca: fala === i ? "o" : "", pisca: pisca(t + i) }); }); }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
const F0 = "Recursão: o problema dentro do problema!",
  F1 = "O Léo ganhou uma boneca russa, a matrioska. Abriu, e dentro tinha outra boneca igual, só que menor. Abriu essa, e tinha outra, menor ainda. Até chegar na última, a bonequinha que não abre.",
  F2 = "Isso é recursão: um problema que se resolve usando uma versão menor dele mesmo. Abrir a boneca é: abrir, e depois fazer a mesma coisa com a boneca de dentro.",
  F3 = "Toda recursão tem duas partes. O passo recursivo: resolver usando o mesmo problema, só que menor. E o caso base, também chamado de condição de parada: o caso pequeno que se resolve direto, sem repetir. Na matrioska, é a bonequinha que não abre. Acabou!",
  F4 = "E sem caso base? A recursão nunca para! É como dois espelhos, um de frente para o outro: imagem dentro de imagem, para sempre.",
  F5 = "Outro exemplo: a fila do cinema. A Bia quer saber em que posição está, mas a fila é enorme. Ela pergunta para quem está na frente: qual é a sua posição? Essa pessoa faz a mesma pergunta para a da frente dela, e assim por diante.",
  F6 = "Até chegar no primeiro da fila, que responde: sou o um! Esse é o caso base. Aí, cada um soma um e devolve a resposta para trás: dois, três, quatro… e a Bia descobre: sou a quinta!",
  F7 = "No programa, uma contagem regressiva pode ser recursiva. Para contar a partir de n: se n for zero, mostre Fogo! e pare. Esse é o caso base. Senão, mostre n e conte a partir de n menos um. Esse é o passo recursivo.",
  F8 = "Contar a partir de três: mostra três e conta a partir de dois. Mostra dois e conta a partir de um. Mostra um e conta a partir de zero. Zero é o caso base: Fogo! No editor, um bloco próprio é uma função. E uma função que chama a si mesma é recursiva.",
  F9 = "O Léo fechou todas as matrioskas de novo, da menor para a maior, e já sabe explicar a recursão. Missão cumprida!",
  F10 = "Onde eu uso isso? Nas pastas do computador: pasta dentro de pasta, dentro de pasta. Para contar os arquivos, o computador usa recursão. Na matrioska e nos espelhos frente a frente. E nos fractais, como a samambaia, que você vai ver na Missão 8.",
  F11 = "Agora é com vocês: abram a Missão 6 no portal!";
const L86 = { 3: F3.replace("duas partes", "2 partes"), 4: F4.replace("dois espelhos", "2 espelhos"),
  6: "Até chegar no primeiro da fila, que responde: sou o 1! Esse é o caso base. Aí, cada um soma 1 e devolve a resposta para trás: 2, 3, 4… e a Bia descobre: sou a quinta!",
  7: F7.replace("se n for zero", "se n for 0").replace("n menos um", "n − 1"),
  8: "Contar a partir de 3: mostra 3 e conta a partir de 2. Mostra 2 e conta a partir de 1. Mostra 1 e conta a partir de 0. 0 é o caso base: Fogo! No editor, um bloco próprio é uma função. E uma função que chama a si mesma é recursiva." };
const XS = [300, 480, 640, 770, 880], SC = [.8, .6, .45, .33, .24];
function bonecasAbertas(n, t, tremer) { for (let i = 0; i < 5; i++) { if (i > n) break; const ab = i < n && i < 4;
  if (i === 4) { g.save(); g.translate(XS[4], 470); g.rotate(tremer ? Math.sin(t * 40) * .05 : 0); matrioska(0, 0, SC[4], CM[4], 0, null, true); g.restore(); continue; }
  matrioska(XS[i], 470, SC[i], CM[i % 6], ab ? .0001 : 0); if (ab) { g.save(); g.translate(XS[i] + 40 * SC[i] / .8, 470 - 110 * SC[i] / .8); g.rotate(.4); matrioska(0, 0, SC[i] * .55, CM[i % 6], 0); g.restore(); } } }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.8, "zum"]],
   draw(t, D) { g.save(); g.fillStyle = "#1e1b4b"; g.fillRect(0, 0, 1280, 720); tunel(t, 640, 330, .55, 5.5); g.restore(); abertura(t, "8º ANO · MISSÃO 6", "Recursão", "O PROBLEMA DENTRO", "DO PROBLEMA!", 1.9); } },
 { chip: "A MATRIOSKA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Abriu"), "pop"], [em(F1, "Abriu", 1), "pop"], [em(F1, "ainda"), "pop"], [em(F1, "última"), "ding"]],
   draw(t, D) { const ma = em(F1, "matrioska"), a1 = em(F1, "Abriu"), a2 = em(F1, "Abriu", 1), ai = em(F1, "ainda"), ul = em(F1, "última"), na = em(F1, "abre"); const n = t > ul ? 4 : t > ai ? 3 : t > a2 ? 2 : t > a1 ? 1 : 0;
     g.save(); camera(t, [[0, 560, 400, 1.15], [a2, 600, 400, 1.15], [ul, 700, 420, 1.25], [na + .8, 640, 380, 1]]); salaCasa(t); bonecasAbertas(n, t, t > na);
     leo({ x: 1080, y: 560, s: .8, olhar: -1, braco: -1, bracoE: .3, boca: n > 2 ? "o" : "riso", pisca: pisca(t) }); g.restore();
     if (t > ma && t < a1) rotulo("matrioska: a boneca russa", 640, 120, "#7c2d12", seg(t, ma, ma + .4)); if (t > na) balao("Essa não abre!", 900, 200, seg(t, na, na + .4)); } },
 { chip: "RECURSÃO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "recursão"), "ding"], [em(F2, "menor"), "pop"], [em(F2, "Abrir"), "pop"], [em(F2, "dentro"), "zum"]],
   draw(t, D) { const re = em(F2, "recursão"), me = em(F2, "menor"), ab = em(F2, "Abrir"), de = em(F2, "dentro"); fundoEscuro(t, "#4c1d95"); const a = io2(seg(t, me - .5, me + .5));
     palavra("RECURSÃO", 560, 90, seg(t, re, re + .4), 70);
     matrioska(260, 520, 1, CM[0], a, () => matrioska(0, 0, .68, CM[1], 0)); if (t > me) cartaoC("o mesmo problema, só que menor", 260, 170, 420, "#fde68a", seg(t, me, me + .4));
     if (t > ab) { chapeu(560, 250, 520, "abrir a boneca:", "#db2777", seg(t, ab, ab + .4)); bloco(600, 310, 480, "tirar a parte de cima", "#7c3aed", seg(t, ab + .3, ab + .7)); bloco(600, 370, 480, "abrir a boneca de dentro 🔁", "#db2777", seg(t, de - .2, de + .2), t > de); }
     if (t > de) etiqueta("a mesma coisa, de novo!", 840, 480, 860, 420, seg(t, de + .3, de + .7)); } },
 { chip: "AS DUAS PARTES", fala: F3, legenda: L86[3], sfx: [[.1, "whoosh"], [em(F3, "passo"), "pop"], [em(F3, "caso"), "pop"], [em(F3, "condição"), "alerta"], [em(F3, "Acabou"), "ding"]],
   draw(t, D) { const pa = em(F3, "passo"), ca = em(F3, "caso"), co = em(F3, "condição"), bo = em(F3, "bonequinha"), ac = em(F3, "Acabou"); fundoEscuro(t, "#0f172a");
     const k1 = seg(t, pa, pa + .4), k2 = seg(t, ca, ca + .4);
     if (k1 > 0) { const z = back(cl(k1)); g.save(); g.translate(340, 300); g.scale(z, z); g.fillStyle = "#dcfce7"; rr(-270, -210, 540, 400, 26); g.fill(); g.fillStyle = "#166534"; g.font = `900 32px ${F}`; g.textAlign = "center"; g.fillText("🔁 PASSO RECURSIVO", 0, -155); g.font = `700 21px ${F}`; g.fillText("o mesmo problema, menor", 0, -118); g.restore();
       if (k1 >= 1) { matrioska(270, 470, .7, CM[0], .8 * io2(seg(t, pa + .5, pa + 1.2)), () => matrioska(0, 0, .68, CM[1], 0)); setaCurva(360, 330, 450, 380, "#16a34a"); matrioska(470, 470, .48, CM[1], 0); } }
     if (k2 > 0) { const z = back(cl(k2)); g.save(); g.translate(940, 300); g.scale(z, z); g.fillStyle = "#fee2e2"; rr(-270, -210, 540, 400, 26); g.fill(); g.fillStyle = "#991b1b"; g.font = `900 32px ${F}`; g.textAlign = "center"; g.fillText("🛑 CASO BASE", 0, -155); g.font = `700 21px ${F}`; g.fillText(t > co ? "= condição de parada" : "o caso pequeno, direto", 0, -118); g.restore();
       if (k2 >= 1) { g.save(); g.translate(860, 470); g.rotate(t > bo && t < ac ? Math.sin(t * 40) * .05 : 0); matrioska(0, 0, .45, CM[4], 0, null, true); g.restore(); placaPare(1060, 380, .8, seg(t, co, co + .4)); } }
     palavra(t > ac ? "ACABOU! ✋" : "2 PARTES", 560, 60, t > ac ? seg(t, ac, ac + .3) : seg(t, 0, .4), 40); } },
 { chip: "SEM CASO BASE?", fala: F4, legenda: L86[4], sfx: [[.1, "alerta"], [em(F4, "nunca"), "zum"], [em(F4, "espelhos"), "whoosh"], [em(F4, "sempre"), "zum"]],
   draw(t, D) { const nu = em(F4, "nunca"), es = em(F4, "espelhos"); fundoEscuro(t, "#0c4a6e"); const nfr = t < es ? 0 : Math.min(9, Math.floor((t - es) * 4) + 1);
     for (let i = 0; i < nfr; i++) { const k = Math.pow(.78, i); moldura(640, 330, 860 * k, 440 * k, i % 2 ? "#a16207" : "#ca8a04"); }
     if (nfr > 0) for (let i = nfr - 1; i >= 0; i--) { const k = Math.pow(.78, i); leo({ x: 640 - 330 * k, y: 330 + 190 * k, s: .7 * k, olhar: i % 2 ? -1 : 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); }
     if (t < es) { palavra("SEM CASO BASE?", 560, 200, seg(t, 0, .4), 60); if (t > nu) placaShow("A RECURSÃO NUNCA PARA! ♾️", 640, 360, seg(t, nu, nu + .4), "#fca5a5"); } else palavra("PARA SEMPRE… ♾️", 560, 70, seg(t, es + 1, es + 1.4), 44); } },
 { chip: "A FILA DO CINEMA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "enorme"), "zum"], [em(F5, "pergunta"), "pop"], [em(F5, "Essa"), "pop"], [em(F5, "assim"), "pop"]],
   draw(t, D) { const fi = em(F5, "fila"), en = em(F5, "enorme"), pe = em(F5, "pergunta"), es = em(F5, "Essa"); const fala = t < pe ? -1 : t < es ? 4 : Math.max(1, 3 - Math.floor((t - es) / .9));
     g.save(); camera(t, [[0, 760, 380, 1.06], [pe, 900, 380, 1.1], [es + 1, 720, 380, 1.06]]); g.translate(260, 50); cinema(t); g.translate(-260, -50); g.fillStyle = "#facc15"; rr(-10, 66, 560, 98, 14); g.fill(); g.fillStyle = "#7f1d1d"; g.font = `900 52px ${F}`; g.textAlign = "center"; g.fillText("🎬 CINEMA", 300, 132); filaBia(t, fala, 1);
     if (fala >= 1) { g.fillStyle = "#fde047"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("←", QX[fala] - 80, 330); } g.restore();
     if (t > en && t < pe) placaShow("fila enorme! 😮", 900, 160, seg(t, en, en + .4), "#fde68a"); if (fala === 4) balao("Qual é a sua posição?", 980, 170, seg(t, pe, pe + .4)); if (fala >= 1 && fala < 4) balao("E a sua posição?", 760, 170, 1); } },
 { chip: "O CASO BASE DA FILA", fala: F6, legenda: L86[6], sfx: [[.1, "whoosh"], [emE(F6, "um"), "ding"], [em(F6, "caso"), "alerta"], [em(F6, "dois"), "pop"], [em(F6, "três"), "pop"], [em(F6, "quatro"), "pop"], [em(F6, "quinta"), "festa"]],
   draw(t, D) { const um = emE(F6, "um"), cb = em(F6, "caso"), ts = [um, em(F6, "dois"), em(F6, "três"), em(F6, "quatro"), em(F6, "quinta")]; const fala = t < um ? 0 : t > ts[4] ? 4 : -1;
     g.save(); camera(t, [[0, 700, 380, 1.08], [cb, 760, 380, 1.05], [ts[4], 840, 380, 1.06]]); g.translate(260, 50); cinema(t); g.translate(-260, -50); g.fillStyle = "#facc15"; rr(-10, 66, 560, 98, 14); g.fill(); g.fillStyle = "#7f1d1d"; g.font = `900 52px ${F}`; g.textAlign = "center"; g.fillText("🎬 CINEMA", 300, 132); filaBia(t, fala, 1);
     ts.forEach((x, i) => { if (t > x) { selinho(String(i + 1), QX[i], 320, seg(t, x, x + .4), i === 0 ? "#fca5a5" : i === 4 ? "#4ade80" : "#facc15"); if (i > 0 && i < 4) rotulo(`${i} + 1`, QX[i], 268, "#fde68a", seg(t, x, x + .4)); } }); g.restore();
     if (t > um - .6 && t < cb + 1.5) balao("Sou o 1!", 560, 170, seg(t, um - .6, um - .2)); if (t > cb && t < ts[1]) placaShow("CASO BASE 🛑", 700, 170, seg(t, cb, cb + .4), "#fca5a5"); if (t > ts[4]) balao("Sou a 5ª!", 1060, 170, seg(t, ts[4], ts[4] + .4)); } },
 { chip: "NO PROGRAMA", fala: F7, legenda: L86[7], sfx: [[.1, "whoosh"], [em(F7, "zero"), "pop"], [em(F7, "caso"), "alerta"], [em(F7, "Senão"), "pop"], [em(F7, "passo"), "ding"]],
   draw(t, D) { const co = em(F7, "contar"), ze = em(F7, "zero"), cb = em(F7, "caso"), sn = em(F7, "Senão"), me = em(F7, "menos"), pr = em(F7, "passo"); fundoEscuro(t, "#0f172a");
     g.save(); camera(t, [[0, 560, 330, 1], [cb, 520, 320, 1.04], [pr + 1, 600, 340, 1]]);
     chapeu(100, 96, 520, "contar a partir de (n)", "#db2777", seg(t, co, co + .4)); bloco(100, 160, 520, "se n = 0 então", "#ea580c", seg(t, ze, ze + .4), t > ze && t < sn); bloco(140, 216, 480, "mostrar “Fogo! 🚀”", "#7c3aed", seg(t, ze + .5, ze + .9), t > cb && t < sn); bloco(140, 272, 480, "pare", "#0891b2", seg(t, ze + .8, ze + 1.2), t > cb && t < sn);
     bloco(100, 328, 520, "senão", "#ea580c", seg(t, sn, sn + .4)); bloco(140, 384, 480, "mostrar n", "#7c3aed", seg(t, sn + .3, sn + .7)); bloco(140, 440, 480, "contar a partir de (n − 1)", "#db2777", seg(t, me - .3, me + .1), t > pr); g.restore();
     if (t > cb) etiqueta("🛑 caso base", 900, 220, 630, 240, seg(t, cb, cb + .4)); if (t > pr) etiqueta("🔁 passo recursivo: chama a si mesmo", 960, 400, 630, 464, seg(t, pr, pr + .4)); robozinho(1120, 140, .7, t, true); } },
 { chip: "CONTAGEM REGRESSIVA", fala: F8, legenda: L86[8], sfx: [[.1, "whoosh"], [em(F8, "três", 1), "pop"], [em(F8, "dois", 1), "pop"], [emE(F8, "um", 1), "pop"], [em(F8, "Zero", 1), "alerta"], [em(F8, "Fogo"), "festa"], [em(F8, "editor"), "ding"]],
   draw(t, D) { const ts = [em(F8, "três", 1), em(F8, "dois", 1), emE(F8, "um", 1), em(F8, "zero", 1)], fo = em(F8, "Fogo"), ed = em(F8, "editor"); const at = ts.filter(x => t > x).length - 1;
     g.save(); plataforma(t); foguete(1000, 520, .9, t, t > fo ? Math.pow(t - fo, 2) * 140 : 0, t > fo); g.restore();
     g.fillStyle = "rgba(15,23,42,.82)"; rr(50, 90, 640, 380, 22); g.fill();
     ["contar a partir de 3", "contar a partir de 2", "contar a partir de 1", "contar a partir de 0"].forEach((s, i) => { const k = seg(t, i === 0 ? .2 : ts[i - 1] + .6, (i === 0 ? .2 : ts[i - 1] + .6) + .4); if (k <= 0) return; chapeu(80 + i * 30, 110 + i * 80, 400 - i * 30, s, i === 3 ? "#dc2626" : "#db2777", k);
       if (i < 3 && t > ts[i]) rotulo("mostra " + (3 - i), 600, 146 + i * 80, "#fde68a", seg(t, ts[i], ts[i] + .3)); });
     if (at >= 0 && at < 3 && t < fo) painelNum(String(3 - at), 860, 220, 1); if (t > ts[3] && t < fo) placaShow("caso base 🛑", 860, 220, seg(t, ts[3], ts[3] + .3), "#fca5a5"); if (t > fo && t < ed) palavra("FOGO! 🔥", 860, 200, seg(t, fo, fo + .3), 64);
     if (t > ed) cartaoC("função que chama a si mesma = recursiva", 640, 520, 640, "#fde68a", seg(t, ed, ed + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "menor"), "pop"], [em(F9, "maior"), "pop"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const fe = em(F9, "fechou"), mc = em(F9, "Missão"); const st = Math.min(4, Math.max(0, Math.floor((t - fe) * 1.6))); const sc = [.24, .33, .45, .6, .8][st];
     g.save(); camera(t, [[0, 640, 400, 1.2], [mc, 640, 380, 1]]); salaCasa(t); matrioska(640, 470, sc, CM[4 - st], 0, null, st === 0);
     leo({ x: 1000, y: 560, s: .8, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : -1, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "pastas"), "pop"], [em(F10, "espelhos"), "pop"], [em(F10, "samambaia"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["pastas", "📁", "Pastas do computador:", "pasta dentro de pasta"], ["espelhos", "🪞", "Matrioska e espelhos:", "um dentro do outro"], ["samambaia", "🌿", "Fractais:", "a samambaia (Missão 8)"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 6", [LEO, BIA8]); } }
];

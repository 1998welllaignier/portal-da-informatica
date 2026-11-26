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
/* ===== O placar do quiz (7º M8 v2) ===== */
const GAB = ["B", "A", "D", "C"], RES = ["B", "C", "D", "C"];
function placar(x, y, pts, k, tit) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#0f172a"; rr(-150, -70, 300, 140, 18); g.fill(); g.strokeStyle = "#fde047"; g.lineWidth = 6; g.stroke();
  g.fillStyle = "#fde68a"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(tit || "PLACAR", 0, -34); g.fillStyle = "#22c55e"; g.font = `900 64px ${F}`; g.fillText(String(pts), 0, 44); g.restore(); }
// duas listas lado a lado; at = posição em destaque (0..3); marcas = quantas já conferidas
function listasQuiz(x, y, at, marcas, k) { if (k <= 0) return; [["gabarito", GAB, "#16a34a"], ["respostas", RES, "#2563eb"]].forEach(([tit, L, c], j) => { const lx = x + j * 220;
    g.fillStyle = c; rr(lx - 90, y, 180, 46, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(tit, lx, y + 31);
    L.forEach((v, i) => { g.fillStyle = at === i ? "#fde68a" : "#fff"; rr(lx - 80, y + 58 + i * 60, 160, 50, 10); g.fill(); g.fillStyle = "#64748b"; g.font = `700 15px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + "º", lx - 70, y + 88 + i * 60);
      g.fillStyle = NAVY; g.font = `900 26px ${F}`; g.textAlign = "center"; g.fillText(v, lx + 10, y + 93 + i * 60); }); });
  for (let i = 0; i < marcas; i++) { if (GAB[i] === RES[i]) visto(x + 360, y + 83 + i * 60, 20, 1); else xVermelho(x + 360, y + 83 + i * 60, 18, 1); } }
function variavel(x, y, nome, val, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#ca8a04"; rr(-90, -60, 180, 36, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("📦 " + nome, 0, -36);
  g.fillStyle = "#fff"; rr(-70, -18, 140, 76, 12); g.fill(); g.strokeStyle = cor || "#ca8a04"; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `900 48px ${F}`; g.fillText(String(val), 0, 40); g.restore(); }
function papeis(x, y, n, t) { for (let i = 0; i < n; i++) { g.save(); g.translate(x + Math.sin(i * 7) * 14, y - i * 7); g.rotate(Math.sin(i * 3) * .08); g.fillStyle = "#fff"; rr(-60, -40, 120, 80, 4); g.fill(); g.strokeStyle = "#cbd5e1"; g.lineWidth = 2; g.stroke(); g.restore(); } }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
const F0 = "O placar do quiz: o programa que conta os pontos!",
  F1 = "A Duda criou um quiz de quatro perguntas para a turma. Mas, para saber quantos pontos cada colega fez, ela conferia resposta por resposta, na mão. Com dezenove alunos, ia demorar a aula inteira!",
  F2 = "Quiz é um jogo de perguntas e respostas. E todo quiz tem um programa que confere as respostas e conta os pontos. Ele usa duas listas do mesmo tamanho: o gabarito, com as respostas certas, e as respostas do jogador.",
  F3 = "O programa vai comparar posição por posição. Posição um: B e B, acertou! Posição dois: A e C, errou. Posição três: D e D, acertou! Posição quatro: C e C, acertou!",
  F4 = "Para contar os acertos, usamos uma variável contadora. Ela começa em zero e aumenta um a cada acerto, como o placar de um jogo.",
  F5 = "O programa fica assim. Definir acertos para zero. Definir i para um: o i guarda a posição que estamos conferindo. Repita quatro vezes: se o item i do gabarito for igual ao item i das respostas, então altere acertos por um. Depois, altere i por um, para ir para a próxima posição.",
  F6 = "Vamos rodar! Com i igual a um, acertou, e os acertos vão para um. Com i igual a dois, errou, e nada muda. Com i igual a três, acertou: dois. Com i igual a quatro, acertou: três!",
  F7 = "No final, o programa mostra na tela os acertos: três! E o bloco alterar por um, que fica na gaveta Variáveis, é o que soma um ao valor da variável.",
  F8 = "Agora, o programa da Duda corrige o quiz da turma inteira num piscar de olhos, e ainda monta o pódio. Missão cumprida!",
  F9 = "Onde eu uso isso? No placar do Wayground e dos jogos on-line. Na prova do portal, que compara as suas respostas com o gabarito. E no contador de passos do celular, que soma um a cada passo.",
  F10 = "Agora é com vocês: abram a Missão 8 no portal e montem o seu placar!";
const L78 = { 1: F1.replace("quatro perguntas", "4 perguntas").replace("dezenove alunos", "19 alunos"),
  2: F2.replace("duas listas", "2 listas"),
  3: "O programa vai comparar posição por posição. Posição 1: B e B, acertou! Posição 2: A e C, errou. Posição 3: D e D, acertou! Posição 4: C e C, acertou!",
  4: "Para contar os acertos, usamos uma variável contadora. Ela começa em 0 e aumenta 1 a cada acerto, como o placar de um jogo.",
  5: "O programa fica assim. Definir acertos para 0. Definir i para 1: o i guarda a posição que estamos conferindo. Repita 4 vezes: se o item i do gabarito for igual ao item i das respostas, então altere acertos por 1. Depois, altere i por 1, para ir para a próxima posição.",
  6: "Vamos rodar! Com i = 1, acertou, e os acertos vão para 1. Com i = 2, errou, e nada muda. Com i = 3, acertou: 2. Com i = 4, acertou: 3!",
  7: "No final, o programa mostra na tela os acertos: 3! E o bloco “alterar … por 1”, que fica na gaveta Variáveis, é o que soma 1 ao valor da variável.",
  9: F9.replace("soma um a cada passo", "soma 1 a cada passo") };
const PROG = [["definir acertos para 0", "#ca8a04", 0], ["definir i para 1", "#ca8a04", 0], ["🔁 repita 4 vezes", "#ea580c", 0], ["se item i do gabarito = item i das respostas", "#0891b2", 1], ["então: alterar acertos por 1", "#ca8a04", 2], ["alterar i por 1", "#ca8a04", 1], ["mostrar acertos", "#7c3aed", 0]];
function programaQuiz(x, y, hl, k) { PROG.forEach(([s, c, ind], i) => bloco(x + ind * 36, y + i * 60, 560 - ind * 36, s, c, seg(k, i * .12, .3 + i * .12) || (k >= 1 ? 1 : 0), hl === i)); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "festa"], [.6, "pop"], [1.2, "ding"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 330, 1]]); palco(t, true); placar(640, 300, Math.min(9, Math.floor(t * 3)) % 10, seg(t, .2, .6)); plateia(t, "festa", 640); g.restore();
     abertura(t, "7º ANO · MISSÃO 8", "O placar do quiz", "O PROGRAMA QUE", "CONTA OS PONTOS!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L78[1], sfx: [[.1, "whoosh"], [em(F1, "quiz"), "pop"], [em(F1, "mão"), "tec"], [em(F1, "dezenove"), "alerta"], [em(F1, "demorar"), "zum"]],
   draw(t, D) { const qz = em(F1, "quiz"), ma = em(F1, "mão"), dz = em(F1, "dezenove"), dm = em(F1, "demorar"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [ma, 560, 380, 1.1], [dm, 640, 360, 1]]); papeis(480, 400, t > dz ? 19 : 5, t); emo("✏️", 600 + Math.sin(t * 12) * 20, 340, 50);
     duda({ x: 800, y: 560, s: .85, olhar: -1, braco: -1.1, bracoE: .3, boca: t > dm ? "o" : "", pisca: pisca(t) }); relogio(1040, 260, 70, (t * .2) % 1, seg(t, dm - .5, dm)); g.restore();
     if (t > qz && t < ma) cartaoC("📝 QUIZ: 4 perguntas", 320, 160, 380, "#fff", seg(t, qz, qz + .4)); if (t > dz) rotulo("19 alunos × 4 respostas…", 480, 160, "#fde68a", seg(t, dz, dz + .4));
     if (t > dm) palavra("A AULA INTEIRA?! 😩", 560, 90, seg(t, dm, dm + .4), 54); if (t > ma && t < dm) balao("Ufa… falta muita prova!", 900, 330, seg(t, ma + .3, ma + .7)); } },
 { chip: "QUIZ E GABARITO", fala: F2, legenda: L78[2], sfx: [[.1, "whoosh"], [em(F2, "Quiz"), "ding"], [em(F2, "programa"), "pop"], [em(F2, "gabarito"), "ding"], [em(F2, "jogador"), "pop"]],
   draw(t, D) { const qz = em(F2, "Quiz"), pr = em(F2, "programa"), ga = em(F2, "gabarito"), jo = em(F2, "jogador"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 640, 360, 1], [ga, 560, 330, 1.06], [jo, 640, 360, 1]]); if (t > ga) listasQuiz(420, 150, -1, 0, 1); g.restore();
     palavra("QUIZ", 520, 80, seg(t, qz, qz + .4), 64); if (t > qz && t < ga) cartaoC("= jogo de perguntas e respostas", 640, 220, 520, "#fff", seg(t, qz + .3, qz + .7));
     if (t > pr && t < ga) cartaoC("o programa confere e conta os pontos", 640, 330, 560, "#fde68a", seg(t, pr, pr + .4));
     if (t > ga) etiqueta("GABARITO = respostas certas", 180, 520, 380, 300, seg(t, ga, ga + .4)); if (t > jo) etiqueta("do jogador", 1080, 520, 740, 300, seg(t, jo, jo + .4)); robozinho(1170, 260, .8, t, true); } },
 { chip: "COMPARAR", fala: F3, legenda: L78[3], sfx: [[.1, "whoosh"], [em(F3, "um"), "ding"], [em(F3, "dois"), "alerta"], [em(F3, "três"), "ding"], [em(F3, "quatro"), "ding"]],
   draw(t, D) { const ps = ["um", "dois", "três", "quatro"].map(w => em(F3, w)); fundoEscuro(t, "#312e81"); const at = ps.filter(p => t > p).length - 1;
     g.save(); camera(t, [[0, 640, 360, 1], [ps[0], 600, 360, 1.08], [ps[3] + 1.5, 640, 360, 1]]); listasQuiz(420, 140, at, at + 1, 1);
     if (at >= 0) { g.strokeStyle = "#fde047"; g.lineWidth = 5; rr(330, 192 + at * 60, 400, 60, 12); g.stroke(); } g.restore();
     palavra("COMPARAR POSIÇÃO POR POSIÇÃO", 560, 80, seg(t, 0, .4), 44); if (at >= 0) placaShow(GAB[at] === RES[at] ? "ACERTOU! ✅" : "ERROU ❌", 1000, 300, seg(t, ps[at], ps[at] + .3), GAB[at] === RES[at] ? "#86efac" : "#fca5a5"); } },
 { chip: "VARIÁVEL CONTADORA", fala: F4, legenda: L78[4], sfx: [[.1, "whoosh"], [em(F4, "contadora"), "ding"], [em(F4, "zero"), "pop"], [em(F4, "aumenta"), "pop"], [em(F4, "placar"), "festa"]],
   draw(t, D) { const co = em(F4, "contadora"), ze = em(F4, "zero"), au = em(F4, "aumenta"), pl = em(F4, "placar"); fundoEscuro(t, "#7c2d12"); const v = t > au ? Math.min(3, Math.floor((t - au) * 1.6) + 1) : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [ze, 500, 340, 1.1], [pl, 640, 360, 1]]); variavel(460, 310, "acertos", v, seg(t, co, co + .4)); if (t > au && Math.floor((t - au) * 1.6) < 3) placaShow("+1", 640, 260 - ((t - au) * 1.6 % 1) * 60, 1, "#86efac");
     if (t > pl) placar(900, 320, v, seg(t, pl, pl + .4)); g.restore();
     palavra("CONTADOR", 520, 80, seg(t, co, co + .4), 64); if (t > co) cartaoC("começa em 0 e aumenta 1 a cada acerto", 640, 520, 560, "#fff", seg(t, co + .4, co + .8)); } },
 { chip: "O PROGRAMA", fala: F5, legenda: L78[5], sfx: [[.1, "whoosh"], [em(F5, "acertos"), "pop"], [em(F5, "i"), "pop"], [em(F5, "Repita"), "pop"], [em(F5, "então"), "ding"], [em(F5, "Depois"), "pop"]],
   draw(t, D) { const ts = [em(F5, "acertos"), em(F5, "Definir", 1), em(F5, "Repita"), em(F5, "se"), em(F5, "então"), em(F5, "Depois"), 99]; fundoEscuro(t, "#0f172a"); const hl = ts.filter(x => t > x).length - 1;
     g.save(); camera(t, [[0, 520, 330, 1.04], [ts[3], 560, 360, 1.06], [ts[5] + 1.5, 600, 360, 1]]); PROG.forEach(([s, c, ind], i) => bloco(90 + ind * 36, 110 + i * 62, 600 - ind * 36, s, c, i === 6 ? seg(t, ts[5] + 1.2, ts[5] + 1.6) : seg(t, ts[i] - .2, ts[i] + .2), hl === i)); g.restore();
     if (t > ts[1]) etiqueta("i = a posição que estamos conferindo", 1000, 200, 520, 200, seg(t, ts[1] + .5, ts[1] + .9)); if (t > ts[5]) etiqueta("vai para a próxima posição", 1000, 470, 640, 440, seg(t, ts[5], ts[5] + .4)); } },
 { chip: "RODANDO O PROGRAMA", fala: F6, legenda: L78[6], sfx: [[.1, "tec"], [em(F6, "um"), "ding"], [em(F6, "dois"), "alerta"], [em(F6, "três"), "ding"], [em(F6, "quatro"), "festa"]],
   draw(t, D) { const ps = [em(F6, "um"), em(F6, "dois"), em(F6, "três"), em(F6, "quatro")]; fundoEscuro(t, "#14532d"); const at = ps.filter(p => t > p).length - 1; const ac = at < 0 ? 0 : [1, 1, 2, 3][at];
     g.save(); camera(t, [[0, 640, 360, 1], [ps[0], 560, 360, 1.05], [ps[3] + 1, 640, 360, 1]]); listasQuiz(260, 140, at, at + 1, 1);
     variavel(900, 230, "i", at < 0 ? 1 : at + 1, 1, "#0891b2"); variavel(900, 430, "acertos", ac, 1); g.restore();
     palavra("VAMOS RODAR! ▶", 560, 80, seg(t, 0, .4), 54); duda({ x: 1150, y: 560, s: .7, olhar: -1, braco: t > ps[3] ? -2.6 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O RESULTADO", fala: F7, legenda: L78[7], sfx: [[.1, "whoosh"], [em(F7, "três"), "festa"], [em(F7, "alterar"), "pop"], [em(F7, "Variáveis"), "ding"]],
   draw(t, D) { const tr = em(F7, "três"), al = em(F7, "alterar"), va = em(F7, "Variáveis"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 640, 360, 1], [al, 520, 340, 1.06], [va + 1, 640, 360, 1]]); telinha(330, 140, 320, "tela", [t > tr ? "3" : "…"], seg(t, 0, .4), -1, t > tr);
     if (t > al) { g.fillStyle = "#1f2937"; rr(700, 130, 420, 280, 16); g.fill(); g.fillStyle = "#ca8a04"; rr(716, 146, 388, 54, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText("📦 Variáveis", 736, 182);
       bloco(730, 230, 360, "alterar acertos por 1", "#ca8a04", seg(t, al, al + .4), true); } g.restore();
     if (t > tr) placar(330, 450, 3, seg(t, tr, tr + .4), "ACERTOS"); if (t > va) etiqueta("soma 1 ao valor da variável", 910, 470, 910, 262, seg(t, va, va + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "piscar"), "pop"], [em(F8, "pódio"), "festa"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const pi = em(F8, "piscar"), po = em(F8, "pódio"), mc = em(F8, "Missão");
     g.save(); camera(t, [[0, 640, 360, 1.06], [mc, 640, 400, 1]]); palco(t, true);
     if (t > po) [[2, 640, 130, "#facc15", "1º"], [1, 420, 90, "#cbd5e1", "2º"], [3, 860, 64, "#f59e0b", "3º"]].forEach(([o, x, h, c, s], i) => { const k = seg(t, po + i * .3, po + .5 + i * .3); g.fillStyle = c; rr(x - 100, 545 - h * k, 200, h * k, 8); g.fill(); if (k > .8) { g.fillStyle = NAVY; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText(s, x, 545 - h * k + 44); boneco({ x, y: 545 - h * k, s: .55, camisa: ["#0ea5e9", "#f43f5e", "#16a34a"][i], cabelo: i === 1 ? "longo" : "", olhar: 1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t + i) }); } });
     else placar(640, 280, Math.min(19, Math.floor((t - pi) * 12)), seg(t, pi - .3, pi), "QUIZZES CORRIGIDOS"); plateia(t, "festa", 680); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, legenda: L78[9], sfx: [[.1, "whoosh"], [em(F9, "Wayground"), "pop"], [em(F9, "prova"), "pop"], [em(F9, "passos"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["Wayground", "🏆", "Placar dos jogos:", "confere e conta pontos"], ["prova", "📝", "Prova do portal:", "compara com o gabarito"], ["passos", "👟", "Contador de passos:", "soma 1 a cada passo"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 8", [CAIO, MENINA7]); } }
];

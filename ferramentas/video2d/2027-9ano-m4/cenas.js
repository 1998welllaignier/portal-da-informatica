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
/* ===== 9º M4 · Programar com grafos e árvores (v2) ===== */
const GN = { "pátio": [640, 300, "⛲"], "portão": [300, 160, "🚪"], cantina: [980, 160, "🍽️"], "informática": [300, 440, "💻"], biblioteca: [980, 440, "📚"] };
const GA = [["pátio", "portão"], ["pátio", "cantina"], ["pátio", "informática"], ["pátio", "biblioteca"], ["informática", "biblioteca"]];
const VIZ = { "pátio": ["portão", "cantina", "informática", "biblioteca"], "portão": ["pátio"], cantina: ["pátio"], "informática": ["pátio", "biblioteca"], biblioteca: ["pátio", "informática"] };
function grafoG(o) { o = o || {}; GA.forEach(([a, b], i) => { const k = o.k == null ? 1 : seg(o.k, i * .15, .3 + i * .15); if (k <= 0) return; const on = o.de && (a === o.de || b === o.de), [x1, y1] = GN[a], [x2, y2] = GN[b]; g.save(); g.globalAlpha = cl(k); g.strokeStyle = on ? "#facc15" : o.giz ? "#e2e8f0" : "#94a3b8"; g.lineWidth = on ? 11 : 6; g.lineCap = "round"; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore(); });
  Object.entries(GN).forEach(([n, [x, y, e]], i) => { const k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const z = back(cl(k)), c = n === o.de ? "#fde68a" : o.de && VIZ[o.de].includes(n) ? "#bbf7d0" : "#fff"; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = c; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 4; g.stroke(); g.restore(); emo(e, x, y + 16 * z, 40 * z); rotulo(n, x, y + (y < 300 ? -58 : 70), o.labCor || "#fde68a", k); }); }
function listaAdj(x, y, vis, hl, k, sz) { if (k <= 0) return; sz = sz || 1; g.save(); g.translate(x, y); g.scale(sz, sz); g.globalAlpha = cl(k); Object.keys(VIZ).forEach((n, i) => { if (vis != null && i >= vis) return; const yy = i * 64, on = hl === n; g.fillStyle = on ? "#fde68a" : "#fff"; rr(0, yy, 170, 52, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, 85, yy + 33);
    g.fillStyle = "#fde047"; g.font = `900 24px ${F}`; g.fillText("→", 196, yy + 34); VIZ[n].forEach((v, j) => { g.fillStyle = on ? "#bbf7d0" : "#e0f2fe"; rr(222 + j * 128, yy + 6, 120, 40, 8); g.fill(); g.fillStyle = NAVY; g.font = `700 16px ${F}`; g.fillText(v, 282 + j * 128, yy + 32); }); }); g.restore(); }
function selinho(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#facc15"; g.strokeStyle = NAVY; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill(); g.stroke(); g.fillStyle = NAVY; g.font = `900 34px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
const F0 = "Programar com grafos e árvores!",
  F1 = "O Rafa desenhou o grafo da escola no caderno: o pátio ligado ao portão, à cantina, à sala de informática e à biblioteca. Mas o computador não enxerga desenho! Como guardar esse grafo num programa?",
  F2 = "Representar é guardar uma coisa do mundo num formato que o computador entende. E um jeito muito usado para guardar um grafo é a lista de vizinhos, também chamada de lista de adjacência: para cada vértice, guardamos a lista dos vértices ligados a ele.",
  F3 = "O pátio tem como vizinhos: portão, cantina, informática e biblioteca. O portão tem só o pátio. E a informática tem o pátio e a biblioteca.",
  F4 = "E o grau do vértice é o tamanho da lista de vizinhos. A lista do pátio tem quatro itens: o pátio tem grau quatro.",
  F5 = "No editor, usamos uma ficha chamada vizinhos, com um campo para cada vértice. O valor de cada campo é uma lista. O bloco tamanho de calcula o grau. E o bloco para cada item percorre os vizinhos, um por um.",
  F6 = "E a árvore de decisão? Ela vira se, senão, dentro de se, senão: é o se aninhado. A pergunta da raiz é o primeiro se. Cada galho tem outro se dentro. E as folhas são os blocos mostrar.",
  F7 = "O Rafa guardou o grafo da escola em lista de vizinhos e transformou a árvore do objeto em blocos se, senão. Agora o computador entende os dois! Missão cumprida!",
  F8 = "Onde eu uso isso? A rede social guarda, para cada pessoa, a lista de amigos, e conta quantos você tem: o grau! O jogo guarda o mapa de salas como lista de vizinhos. E o atendimento automático do telefone é um programa de se dentro de se.",
  F9 = "Agora é com vocês: abram a Missão 4 no portal!";
const L94 = { 4: F4.replace("quatro itens", "4 itens").replace("grau quatro", "grau 4") };
const SE = [["se ⟨é eletrônico?⟩ então", "#ea580c", 0], ["se ⟨tem tela?⟩ então", "#ea580c", 1], ["mostrar “monitor”", "#7c3aed", 2], ["senão", "#ea580c", 1], ["mostrar “teclado”", "#7c3aed", 2], ["senão", "#ea580c", 0], ["se ⟨serve para escrever?⟩ então", "#ea580c", 1], ["mostrar “lápis”", "#7c3aed", 2], ["senão", "#ea580c", 1], ["mostrar “cadeira”", "#7c3aed", 2]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 280, 1.1], [1.8, 640, 360, 1]]); g.translate(640, 330); g.scale(.75, .75); g.translate(-640, -220); grafoG({ k: t }); g.restore(); abertura(t, "9º ANO · MISSÃO 4", "Programar com grafos", "E ÁRVORES", "NO COMPUTADOR!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "pátio"), "pop"], [em(F1, "computador"), "alerta"], [em(F1, "guardar"), "zum"]],
   draw(t, D) { const pa = em(F1, "pátio"), co = em(F1, "computador"), gu = em(F1, "guardar"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 330, 1], [co, 900, 360, 1.05], [gu, 640, 360, 1]]); g.fillStyle = "#fef9c3"; rr(100, 90, 760, 440, 18); g.fill(); g.strokeStyle = "#cbd5e1"; g.lineWidth = 2; for (let i = 0; i < 10; i++) { g.beginPath(); g.moveTo(120, 130 + i * 40); g.lineTo(840, 130 + i * 40); g.stroke(); }
     g.save(); g.translate(480, 310); g.scale(.62, .62); g.translate(-640, -300); grafoG({ k: t > pa ? (t - pa) * .9 : 0, labCor: "#1e3a8a" }); g.restore();
     monitor(1080, 470, .9, () => { emo(t > co ? "❓" : "🙂", 0, -90, 60); }); rafa({ x: 950, y: 580, s: .6, olhar: -1, braco: -1.2, bracoE: .3, boca: t > co ? "o" : "riso", pisca: pisca(t) }); g.restore();
     if (t > co && t < gu) balao("Não enxergo desenho! 🤖", 1030, 180, seg(t, co, co + .4)); if (t > gu) palavra("COMO GUARDAR? 🤔", 1050, 120, seg(t, gu, gu + .4), 36); } },
 { chip: "LISTA DE VIZINHOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Representar"), "ding"], [em(F2, "vizinhos"), "pop"], [em(F2, "adjacência"), "ding"], [em(F2, "cada"), "pop"]],
   draw(t, D) { const re = em(F2, "Representar"), vz = em(F2, "vizinhos"), ad = em(F2, "adjacência"), ca = em(F2, "cada"); fundoEscuro(t, "#0f172a");
     if (t < vz) { palavra("REPRESENTAR", 560, 150, seg(t, re, re + .4), 60); cartaoC("guardar no formato que o computador entende", 640, 280, 680, "#fde68a", seg(t, re + .5, re + .9)); robozinho(640, 460, .9, t, true); return; }
     palavra("LISTA DE VIZINHOS", 560, 80, seg(t, vz, vz + .4), 48); if (t > ad) rotulo("= lista de adjacência", 560, 140, "#bbf7d0", seg(t, ad, ad + .4));
     listaAdj(120, 190, t > ca ? 5 : 1, t > ca ? "" : "pátio", seg(t, vz + .3, vz + .8), .9); if (t > ca) etiqueta("cada vértice → sua lista", 1080, 520, 770, 420, seg(t, ca, ca + .4)); } },
 { chip: "OS VIZINHOS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "pátio"), "pop"], [em(F3, "portão", 1), "pop"], [em(F3, "informática", 1), "pop"]],
   draw(t, D) { const p1 = em(F3, "pátio"), p2 = em(F3, "portão", 1), p3 = em(F3, "informática", 1); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [p2, 620, 340, 1.03], [p3 + 1, 640, 360, 1]]); const de = t > p3 ? "informática" : t > p2 ? "portão" : t > p1 ? "pátio" : null;
     g.save(); g.translate(-20, 30); g.scale(.55, .55); g.translate(0, 80); grafoG({ de }); g.restore(); listaAdj(625, 140, 5, de, 1, .86); g.restore(); } },
 { chip: "GRAU", fala: F4, legenda: L94[4], sfx: [[.1, "whoosh"], [em(F4, "grau"), "ding"], [em(F4, "quatro"), "pop"], [em(F4, "quatro", 1), "festa"]],
   draw(t, D) { const gr = em(F4, "grau"), q1 = em(F4, "quatro"), q2 = em(F4, "quatro", 1); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 640, 330, 1], [q1, 600, 300, 1.04], [q2, 640, 330, 1]]); grafoG({ de: "pátio" }); g.restore();
     palavra("GRAU = TAMANHO DA LISTA", 560, 70, seg(t, gr, gr + .4), 42);
     if (t > q1) VIZ["pátio"].forEach((v, i) => { const [x, y] = GN[v]; selinho(String(i + 1), x + 58, y + 42, seg(t, q1 + i * .25, q1 + .3 + i * .25), "#facc15"); });
     if (t > q2) placaShow("grau do pátio = 4", 640, 520, seg(t, q2, q2 + .4), "#86efac"); } },
 { chip: "NO EDITOR", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "ficha"), "pop"], [em(F5, "lista"), "pop"], [em(F5, "tamanho"), "ding"], [em(F5, "para"), "pop"]],
   draw(t, D) { const fi = em(F5, "ficha"), li = em(F5, "lista"), ta = em(F5, "tamanho"), pc = em(F5, "para", 1); fundoEscuro(t, "#0f172a");
     const k = seg(t, fi, fi + .4); if (k > 0) { const z = back(cl(k)); g.save(); g.translate(330, 290); g.scale(z, z); g.fillStyle = "#fff"; rr(-280, -200, 560, 400, 20); g.fill(); g.fillStyle = "#0891b2"; rr(-280, -200, 560, 60, 20); g.fill(); g.fillStyle = "#fff"; g.font = `900 26px ${F}`; g.textAlign = "center"; g.fillText("📇 ficha: vizinhos", 0, -160);
       Object.keys(VIZ).forEach((n, i) => { g.fillStyle = NAVY; g.font = `800 19px ${F}`; g.textAlign = "left"; g.fillText(n + ":", -260, -100 + i * 64); if (t > li) { g.fillStyle = "#e0f2fe"; rr(-130, -126 + i * 64, 395, 40, 8); g.fill(); g.fillStyle = NAVY; g.font = `600 15px ${F}`; g.fillText("[ " + VIZ[n].join(", ") + " ]", -118, -100 + i * 64); } }); g.restore(); }
     if (t > ta) { bloco(700, 150, 470, "tamanho de (vizinhos.pátio)", "#ea580c", seg(t, ta, ta + .4), t < pc); caixa(1080, 240, "grau = 4", "#86efac", seg(t, ta + .5, ta + .9), 160); }
     if (t > pc) { bloco(700, 320, 470, "para cada item de (vizinhos.pátio)", "#db2777", seg(t, pc, pc + .4), true); bloco(740, 376, 430, "mostrar (item)", "#7c3aed", seg(t, pc + .3, pc + .7)); const i = Math.floor((t - pc) * 1.4) % 4; rotulo("→ " + VIZ["pátio"][i], 960, 470, "#fde68a", seg(t, pc + .6, pc + 1)); } } },
 { chip: "ÁRVORE EM BLOCOS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "raiz"), "pop"], [em(F6, "galho"), "pop"], [em(F6, "folhas"), "ding"]],
   draw(t, D) { const vi = em(F6, "vira"), rz = em(F6, "raiz"), ga = em(F6, "galho"), fo = em(F6, "folhas"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 600, 340, 1], [ga, 560, 320, 1.03], [fo + 1, 600, 340, 1]]);
     SE.forEach(([s, c, ind], i) => bloco(80 + ind * 40, 92 + i * 44, 560 - ind * 40, s, c, seg(t, vi + i * .12, vi + .3 + i * .12), (t > rz && t < ga && i === 0) || (t > ga && t < fo && (i === 1 || i === 6)) || (t > fo && c === "#7c3aed"))); g.restore();
     if (t > rz && t < ga) etiqueta("raiz → 1º se (se aninhado)", 960, 140, 650, 116, seg(t, rz, rz + .4)); if (t > ga && t < fo) etiqueta("galho → se dentro do se", 960, 300, 650, 160, seg(t, ga, ga + .4)); if (t > fo) etiqueta("folhas → mostrar", 960, 420, 650, 400, seg(t, fo, fo + .4));
     rafa({ x: 1150, y: 570, s: .6, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: F7.replace("entende os dois", "entende os 2"), sfx: [[.1, "whoosh"], [em(F7, "vizinhos"), "pop"], [em(F7, "blocos"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const vz = em(F7, "vizinhos"), bl = em(F7, "blocos"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 400, 1]]);
     listaAdj(30, 250, 5, "", seg(t, vz, vz + .5), .76); if (t > bl) SE.slice(0, 5).forEach(([s, c, ind], i) => bloco(610 + ind * 30, 260 + i * 44, 330 - ind * 30, s, c, seg(t, bl + i * .1, bl + .3 + i * .1)));
     monitor(1100, 380, .7, () => { emo("😃", 0, -90, 60); }); rafa({ x: 1160, y: 580, s: .55, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "rede"), "pop"], [em(F8, "jogo"), "pop"], [em(F8, "telefone"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["rede", "👥", "Rede social:", "lista de amigos = grau"], ["jogo", "🎮", "Jogos:", "mapa de salas"], ["telefone", "☎️", "Atendimento:", "se dentro de se"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 4", [RAFA, JULIA]); } }
];

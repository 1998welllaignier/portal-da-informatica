const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, k) => a + (b - a) * k;
const io = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
const out = k => 1 - Math.pow(1 - k, 3);
const back = k => { const s = 1.9; return 1 + (s + 1) * Math.pow(k - 1, 3) + s * Math.pow(k - 1, 2); };
const seg = (t, a, b) => cl((t - a) / (b - a));
function rnd(i) { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }

function rr(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

/* ---------- bonequinho ---------- */
// opts: x,y (pés), s escala, braco (ângulo do braço direito em rad), aceno, mascara, boca ("sorri","o"), olhar
function boneco(o) {
  g.save(); g.translate(o.x, o.y); g.scale(o.s || 1, o.s || 1); if (o.rot) g.rotate(o.rot);
  const pele = o.pele || "#f1c7a0", camisa = o.camisa || "#2f7be0", calca = o.calca || "#1e2a4a";
  // pernas
  g.lineCap = "round"; g.strokeStyle = calca; g.lineWidth = 16;
  const pk = o.perna || 0;
  g.beginPath(); g.moveTo(-10, -60); g.lineTo(-12 - pk * 10, -8); g.stroke();
  g.beginPath(); g.moveTo(10, -60); g.lineTo(12 + pk * 10, -8); g.stroke();
  g.fillStyle = "#fff"; rr(-26 - pk * 10, -12, 26, 12, 6); g.fill(); rr(0 + pk * 10, -12, 26, 12, 6); g.fill();
  // braço esquerdo
  g.strokeStyle = camisa; g.lineWidth = 14;
  g.save(); g.translate(-24, -112); g.rotate(o.bracoE != null ? o.bracoE : .35);
  g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 46); g.stroke(); g.fillStyle = pele; g.beginPath(); g.arc(0, 52, 9, 0, 7); g.fill(); g.restore();
  // corpo
  g.fillStyle = camisa; rr(-30, -128, 60, 74, 22); g.fill();
  g.fillStyle = "#ffd23f"; g.beginPath(); g.arc(14, -108, 7, 0, 7); g.fill(); // bolso
  g.fillStyle = calca; rr(-30, -66, 60, 14, 6); g.fill();
  // braço direito (aponta / acena)
  g.strokeStyle = camisa;
  g.save(); g.translate(24, -112); g.rotate(o.braco != null ? o.braco : -.35);
  g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 46); g.stroke(); g.fillStyle = pele; g.beginPath(); g.arc(0, 52, 9, 0, 7); g.fill();
  if (o.dedo) { g.strokeStyle = pele; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 56); g.lineTo(0, 70); g.stroke(); }
  g.restore();
  // cabelo comprido (atrás da cabeça)
  if (o.cabelo === "longo") { g.fillStyle = "#5a2e17"; g.beginPath(); g.arc(0, -172, 50, Math.PI, 0); g.fill(); rr(-54, -180, 26, 78, 13); g.fill(); rr(28, -180, 26, 78, 13); g.fill(); }
  // cabeça
  g.fillStyle = pele; g.beginPath(); g.arc(0, -168, 44, 0, 7); g.fill();
  g.fillStyle = o.cabelo === "longo" ? "#5a2e17" : "#3b2416"; // cabelo
  g.beginPath(); g.arc(0, -178, 44, Math.PI * 1.05, Math.PI * 1.95); g.closePath(); g.fill();
  if (o.cabelo === "longo") { g.beginPath(); g.arc(0, -196, 40, Math.PI, 0); g.fill(); g.beginPath(); g.arc(34, -214, 16, 0, 7); g.fill(); }
  else for (let i = -3; i <= 3; i++) { g.beginPath(); g.arc(i * 12, -206 + Math.abs(i) * 3, 13, 0, 7); g.fill(); }
  // bochechas
  g.fillStyle = "rgba(240,120,120,.45)"; g.beginPath(); g.arc(-26, -152, 7, 0, 7); g.arc(26, -152, 7, 0, 7); g.fill();
  // olhos (piscam)
  const pisca = o.pisca ? .12 : 1, ox = o.olhar || 0;
  if (o.mascara) {
    g.fillStyle = "rgba(160,220,255,.55)"; g.strokeStyle = "#ffd23f"; g.lineWidth = 6;
    rr(-38, -186, 76, 34, 14); g.fill(); g.stroke();
    g.strokeStyle = "#ffd23f"; g.lineWidth = 7; g.beginPath(); g.moveTo(40, -170); g.lineTo(52, -170); g.lineTo(52, -214); g.stroke();
  }
  g.fillStyle = "#fff";
  g.beginPath(); g.ellipse(-15, -170, 10, 12 * pisca, 0, 0, 7); g.ellipse(15, -170, 10, 12 * pisca, 0, 0, 7); g.fill();
  g.fillStyle = "#222";
  g.beginPath(); g.ellipse(-15 + ox * 3, -169, 5, 6 * pisca, 0, 0, 7); g.ellipse(15 + ox * 3, -169, 5, 6 * pisca, 0, 0, 7); g.fill();
  // boca
  g.strokeStyle = "#7a2e1e"; g.lineWidth = 4; g.fillStyle = "#7a2e1e";
  if (o.boca === "o") { g.beginPath(); g.ellipse(0, -140, 7, 9, 0, 0, 7); g.fill(); }
  else { g.beginPath(); g.arc(0, -150, 12, .15 * Math.PI, .85 * Math.PI); g.stroke(); }
  g.restore();
}

/* ---------- balão e textos ---------- */
function balao(txt, x, y, k) {
  if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s);
  g.font = `700 28px ${F}`; const w = g.measureText(txt).width + 44;
  g.fillStyle = "#fff"; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 12; rr(-w / 2, -64, w, 56, 22); g.fill(); g.shadowBlur = 0;
  g.beginPath(); g.moveTo(-14, -10); g.lineTo(-30, 12); g.lineTo(8, -10); g.fill();
  g.fillStyle = "#1e2a4a"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, -36); g.restore();
}
function palavra(txt, x, y, k, tam) {
  if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.rotate(-.03);
  g.font = `800 ${tam || 76}px ${F}`; g.textAlign = "center"; g.textBaseline = "middle";
  g.lineJoin = "round"; g.lineWidth = 14; g.strokeStyle = "#1e2a4a"; g.strokeText(txt, 0, 0);
  g.fillStyle = "#ffd23f"; g.fillText(txt, 0, 0); g.restore();
}
function etiqueta(txt, x, y, ax, ay, k) {
  if (k <= 0) return; const a = out(cl(k)); g.save(); g.globalAlpha = a;
  g.strokeStyle = "#fff"; g.lineWidth = 4; g.beginPath(); g.moveTo(x, y); g.lineTo(lerp(x, ax, a), lerp(y, ay, a)); g.stroke();
  if (a > .95) { const an = Math.atan2(ay - y, ax - x); g.fillStyle = "#fff"; g.beginPath(); g.moveTo(ax, ay); g.lineTo(ax - 14 * Math.cos(an - .45), ay - 14 * Math.sin(an - .45)); g.lineTo(ax - 14 * Math.cos(an + .45), ay - 14 * Math.sin(an + .45)); g.fill(); }
  g.font = `800 22px ${F}`; const w = g.measureText(txt).width + 26; g.fillStyle = "#ffd23f"; rr(x - w / 2, y - 20, w, 40, 12); g.fill();
  g.fillStyle = "#1e2a4a"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, x, y + 1); g.restore();
}
function selo(t) { // marca do professor (sempre visível)
  g.save(); g.globalAlpha = cl(t / .5); g.fillStyle = "rgba(20,28,52,.82)"; rr(W - 372, 18, 352, 60, 16); g.fill();
  g.fillStyle = "#ffd23f"; g.font = `800 23px ${F}`; g.textAlign = "right"; g.textBaseline = "middle"; g.fillText("Prof. Welington Laignier", W - 38, 41);
  g.fillStyle = "#fff"; g.font = `600 16px ${F}`; g.fillText(window.SELO_SERIE || "", W - 38, 63); g.restore();
}
function chip(txt, t0, t) {
  const k = out(seg(t, t0, t0 + .4)); if (k <= 0) return; g.save(); g.globalAlpha = k; g.translate(lerp(-40, 0, k), 0);
  g.font = `800 20px ${F}`; const w = g.measureText(txt).width + 30; g.fillStyle = "#ffd23f"; rr(22, 22, w, 40, 20); g.fill();
  g.fillStyle = "#1e2a4a"; g.textBaseline = "middle"; g.fillText(txt, 37, 43); g.restore();
}


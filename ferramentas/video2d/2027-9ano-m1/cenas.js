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
/* ===== 9º M1 · Grafos (v2) ===== */
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
const BN = { Casa: [240, 330, "🏠"], Padaria: [640, 170, "🥖"], Praça: [640, 445, "🌳"], Escola: [1040, 330, "🏫"] };
const BA = [["Casa", "Padaria", 3], ["Padaria", "Escola", 2], ["Casa", "Praça", 4], ["Praça", "Escola", 4], ["Casa", "Escola", 9]];
const temA = (lst, a, b) => lst && lst.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
// modo: 0 = mapa (ruas), 1 = grafo; hl = arestas acesas [[a,b],...]; cor do destaque
function bairro(t, modo, o) { o = o || {}; const m = cl(modo);
  BA.forEach(([a, b, w], i) => { const [x1, y1] = BN[a], [x2, y2] = BN[b], ka = o.kA == null ? 1 : seg(o.kA, i * .15, .3 + i * .15); if (ka <= 0) return; const on = temA(o.hl, a, b);
    g.save(); g.globalAlpha = cl(ka); g.lineCap = "round"; if (m < 1) { g.strokeStyle = "#64748b"; g.lineWidth = 46; g.globalAlpha = cl(ka) * (1 - m); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.strokeStyle = "#e2e8f0"; g.lineWidth = 3; g.setLineDash([16, 14]); g.stroke(); g.setLineDash([]); }
    g.globalAlpha = cl(ka) * m; g.strokeStyle = on ? (o.cor || "#facc15") : "#94a3b8"; g.lineWidth = on ? 12 : 7; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore();
    if (o.peso && m > .5) { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + (a === "Casa" && b === "Escola" ? 0 : 0), kp = typeof o.peso === "number" ? seg(o.peso, i * .12, .3 + i * .12) : 1; if (kp > 0) { g.save(); g.globalAlpha = cl(kp); g.fillStyle = on ? "#facc15" : "#fff"; g.beginPath(); g.arc(mx, my, 26, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `900 24px ${F}`; g.textAlign = "center"; g.fillText(String(w), mx, my + 8); g.restore(); } } });
  Object.entries(BN).forEach(([n, [x, y, e]]) => { const on = o.nos && o.nos.includes(n); if (m > .02) { g.save(); g.globalAlpha = m; g.fillStyle = on ? "#fde68a" : "#fff"; g.beginPath(); g.arc(x, y, 46, 0, 7); g.fill(); g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 7 : 4; g.stroke(); g.restore(); }
    emo(e, x, y + 20, m > .5 ? 46 : 70); if (!o.semRot) rotulo(n, x + (n === "Praça" ? 110 : 0), y + (n === "Praça" ? 8 : -60), m > .5 ? "#fde68a" : "#fff", 1); }); }
function noCaminho(path, p) { const L = []; let tot = 0; for (let i = 0; i < path.length - 1; i++) { const [x1, y1] = BN[path[i]], [x2, y2] = BN[path[i + 1]], d = Math.hypot(x2 - x1, y2 - y1); L.push(d); tot += d; }
  let r = cl(p) * tot; for (let i = 0; i < L.length; i++) { if (r <= L[i] || i === L.length - 1) { const [x1, y1] = BN[path[i]], [x2, y2] = BN[path[i + 1]], q = Math.min(1, r / L[i]); return [x1 + (x2 - x1) * q, y1 + (y2 - y1) * q]; } r -= L[i]; } }
function bolinha(x, y, cor, letra) { g.fillStyle = cor; g.beginPath(); g.arc(x, y, 22, 0, 7); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 4; g.stroke(); g.fillStyle = "#fff"; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(letra, x, y + 7); }
const F0 = "Grafos e o melhor caminho!",
  F1 = "A Júlia sempre ia da casa dela até a escola pela rua direta. Um dia, o Rafa chegou antes dela, mesmo morando mais longe. Como ele conseguiu? Ele usou o aplicativo de mapa!",
  F2 = "E como o aplicativo sabe o caminho mais rápido? Ele enxerga a cidade como um grafo: pontos ligados por linhas.",
  F3 = "Cada ponto é um vértice: uma esquina, uma casa, a escola. Cada ligação entre dois vértices é uma aresta: uma rua. O número na aresta é o peso: os minutos daquela rua. E o grau de um vértice é quantas arestas saem dele: quantas ruas chegam naquela esquina.",
  F4 = "Um caminho é uma sequência de vértices ligados por arestas, como casa, padaria, escola. E o tamanho do caminho é a soma dos pesos das arestas.",
  F5 = "Veja o bairro da Júlia. A rua direta, da casa até a escola, leva nove minutos. Passando pela praça: quatro mais quatro, oito minutos. E passando pela padaria: três mais dois, só cinco minutos!",
  F6 = "Então, o caminho mais curto é o de menor soma dos pesos. E repare: nem sempre é o que tem menos paradas! A rua direta tem uma aresta só, mas soma nove.",
  F7 = "O aplicativo de mapa faz essas contas com milhões de ruas, em segundos. No dia seguinte, a Júlia foi pela padaria e chegou junto com o Rafa. Missão cumprida!",
  F8 = "Onde eu uso isso? No aplicativo de mapa e no de entrega, que calculam o caminho mais curto. Nas redes sociais, cada pessoa é um vértice e cada amizade é uma aresta: os amigos em comum vêm daí. E na internet, os pacotes seguem o melhor caminho entre os roteadores.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
const L91 = { 3: F3.replace("dois vértices", "2 vértices"), 5: "Veja o bairro da Júlia. A rua direta, da casa até a escola, leva 9 minutos. Passando pela praça: 4 + 4, 8 minutos. E passando pela padaria: 3 + 2, só 5 minutos!", 6: F6.replace("soma nove", "soma 9") };
const PD = ["Casa", "Escola"], PP = ["Casa", "Praça", "Escola"], PA = ["Casa", "Padaria", "Escola"];
const arest = p => p.slice(0, -1).map((a, i) => [a, p[i + 1]]);

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 300, 1.15], [1.8, 640, 360, 1]]); bairro(t, 1, { kA: t, hl: arest(PA), peso: t }); const [x, y] = noCaminho(PA, (t * .5) % 1); bolinha(x, y, "#ef4444", ""); g.restore();
     abertura(t, "9º ANO · MISSÃO 1", "Grafos", "E O MELHOR", "CAMINHO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Rafa"), "pop"], [em(F1, "antes"), "ding"], [em(F1, "aplicativo"), "pop"]],
   draw(t, D) { const ra = em(F1, "Rafa"), an = em(F1, "antes"), co = em(F1, "conseguiu"), ap = em(F1, "aplicativo"); fundoEscuro(t, "#166534");
     g.save(); camera(t, [[0, 640, 330, 1], [an, 760, 330, 1.05], [ap, 640, 360, 1]]); g.translate(-60, 0); bairro(t, 0, {});
     const pj = seg(t, .4, an + 2.5), pr = seg(t, ra, an); const [jx, jy] = noCaminho(PD, pj); bolinha(jx, jy, "#0d9488", "J");
     if (t > ra) { const [rx, ry] = noCaminho(PA, pr); bolinha(rx, ry - 30, "#7c3aed", "R"); } g.restore();
     if (t > an && t < ap) placaShow("O Rafa chegou antes! 🏁", 880, 470, seg(t, an, an + .4), "#e9d5ff"); if (t > co && t < ap) balao("Como?!", 300, 180, seg(t, co, co + .4));
     if (t > ap) { celular(1110, 430, .5, () => { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); g.strokeStyle = "#7c3aed"; g.lineWidth = 6; g.beginPath(); g.moveTo(-50, 40); g.lineTo(0, -100); g.lineTo(50, 40); g.stroke(); emo("📍", 50, 40, 30); }); rotulo("aplicativo de mapa", 1020, 540, "#fde68a", seg(t, ap, ap + .4)); balao("Usei o app! 📱", 1040, 210, seg(t, ap, ap + .4)); }
     rafa({ x: 1180, y: 570, s: .62, olhar: -1, braco: t > an ? -2.5 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O GRAFO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "grafo"), "ding"], [em(F2, "linhas"), "pop"]],
   draw(t, D) { const gr = em(F2, "grafo"), li = em(F2, "linhas"); fundoEscuro(t, t > gr ? "#0f172a" : "#166534"); g.save(); camera(t, [[0, 640, 330, 1], [gr, 640, 340, 1.04]]); bairro(t, seg(t, gr - .3, gr + .9), {}); g.restore();
     if (t > gr) palavra("GRAFO", 360, 90, seg(t, gr, gr + .4), 64); if (t > li) cartaoC("pontos ligados por linhas", 960, 150, 420, "#fde68a", seg(t, li, li + .4)); robozinho(1180, 130, .7, t, t > gr); } },
 { chip: "VÉRTICE, ARESTA, PESO, GRAU", fala: F3, legenda: L91[3], sfx: [[.1, "whoosh"], [em(F3, "vértice"), "pop"], [em(F3, "aresta"), "pop"], [em(F3, "peso"), "pop"], [em(F3, "grau"), "ding"]],
   draw(t, D) { const ve = em(F3, "vértice"), ar = em(F3, "aresta"), pe = em(F3, "peso"), gr = em(F3, "grau"); fundoEscuro(t, "#0f172a");
     g.save(); camera(t, [[0, 640, 340, 1], [ve, 600, 330, 1.04], [ar, 640, 320, 1.04], [pe, 640, 330, 1], [gr, 620, 330, 1.03]]);
     bairro(t, 1, { nos: t > gr ? ["Casa"] : t > ve && t < ar ? ["Casa", "Padaria", "Praça", "Escola"] : [], hl: t > gr ? [["Casa", "Padaria"], ["Casa", "Praça"], ["Casa", "Escola"]] : t > ar && t < pe ? [["Casa", "Padaria"]] : [], peso: t > pe ? pe : null, cor: t > gr ? "#f472b6" : "#facc15" }); g.restore();
     if (t > ve && t < ar) etiqueta("VÉRTICE: um ponto", 260, 520, 240, 380, seg(t, ve, ve + .4));
     if (t > ar && t < pe) etiqueta("ARESTA: uma ligação (rua)", 420, 110, 440, 240, seg(t, ar, ar + .4));
     if (t > pe && t < gr) etiqueta("PESO: os minutos da rua", 980, 520, 840, 400, seg(t, pe, pe + .4));
     if (t > gr) placaShow("GRAU da Casa = 3 arestas", 960, 130, seg(t, gr, gr + .4), "#fbcfe8"); julia({ x: 1190, y: 570, s: .55, olhar: -1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CAMINHO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "casa"), "pop"], [em(F4, "padaria"), "pop"], [em(F4, "escola"), "pop"], [em(F4, "soma"), "ding"]],
   draw(t, D) { const ca = em(F4, "casa"), pa = em(F4, "padaria"), es = em(F4, "escola"), so = em(F4, "soma"); fundoEscuro(t, "#0f172a");
     const nos = [t > ca ? "Casa" : "", t > pa ? "Padaria" : "", t > es ? "Escola" : ""].filter(x => x), hl = t > es ? arest(PA) : t > pa ? [["Casa", "Padaria"]] : [];
     g.save(); camera(t, [[0, 640, 330, 1], [pa, 640, 300, 1.04], [so, 640, 330, 1]]); bairro(t, 1, { nos, hl, peso: 1 }); if (t > es) { const [x, y] = noCaminho(PA, (t - es) * .5 % 1); bolinha(x, y, "#ef4444", "→"); } g.restore();
     palavra("CAMINHO", 560, 70, seg(t, 0, .4), 46); if (t > es && t < so) etiqueta("casa → padaria → escola", 1050, 500, 870, 260, seg(t, es, es + .4)); rafa({ x: 110, y: 570, s: .55, olhar: 1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > so) placaShow("tamanho = 3 + 2 = 5", 640, 400, seg(t, so, so + .4), "#fde68a"); } },
 { chip: "3 CAMINHOS", fala: F5, legenda: L91[5], sfx: [[.1, "whoosh"], [em(F5, "nove"), "pop"], [em(F5, "oito"), "pop"], [em(F5, "cinco"), "festa"]],
   draw(t, D) { const di = em(F5, "direta"), pr = em(F5, "praça"), pa = em(F5, "padaria"), ci = em(F5, "cinco"); fundoEscuro(t, "#0f172a");
     const P = t > pa ? PA : t > pr ? PP : t > di ? PD : null, cor = t > pa ? "#4ade80" : t > pr ? "#fb923c" : "#f87171";
     g.save(); g.translate(-130, 0); bairro(t, 1, { hl: P ? arest(P) : [], cor, peso: 1, nos: P || [] }); g.restore();
     [[di, "rua direta", "9 min", "#fecaca"], [pr, "pela praça", "4 + 4 = 8 min", "#fed7aa"], [pa, "pela padaria", "3 + 2 = 5 min", "#bbf7d0"]].forEach(([t0, a, b, c], i) => cartaoC(a, 1120, 150 + i * 130, 290, c, seg(t, t0, t0 + .4), b));
     if (t > ci) placaShow("🏆 mais rápido!", 1110, 500, seg(t, ci, ci + .4), "#86efac"); } },
 { chip: "O MAIS CURTO", fala: F6, legenda: L91[6], sfx: [[.1, "whoosh"], [em(F6, "menor"), "ding"], [em(F6, "paradas"), "alerta"], [em(F6, "nove"), "zum"]],
   draw(t, D) { const me = em(F6, "menor"), pa = em(F6, "paradas"), di = em(F6, "direta"); fundoEscuro(t, "#312e81");
     palavra("CAMINHO MAIS CURTO", 560, 90, seg(t, 0, .4), 48); if (t > me) cartaoC("= a MENOR SOMA dos pesos", 640, 200, 520, "#fde68a", seg(t, me, me + .4));
     if (t > pa) { cartaoC("rua direta: 1 aresta só…", 360, 360, 440, "#fecaca", seg(t, pa, pa + .4), "…mas soma 9 minutos 🐢"); cartaoC("pela padaria: 2 arestas…", 920, 360, 440, "#bbf7d0", seg(t, di, di + .4), "…e soma só 5 minutos ⚡"); }
     if (t > di + 1) rotulo("menos paradas ≠ mais rápido!", 640, 490, "#fde68a", seg(t, di + 1, di + 1.4)); julia({ x: 140, y: 565, s: .7, olhar: 1, braco: -1, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "milhões"), "zum"], [em(F7, "padaria"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const mi = em(F7, "milhões"), di = em(F7, "dia"), mc = em(F7, "Missão"); fundoEscuro(t, "#166534");
     if (t < di) { fundoEscuro(t, "#0f172a"); for (let i = 0; i < 300; i++) { const x = (i * 97) % 1280, y = 60 + (i * 53) % 460; g.fillStyle = "#94a3b8"; g.globalAlpha = .5; g.fillRect(x, y, 40 + (i % 5) * 10, 2); g.globalAlpha = 1; }
       if (t > mi) placaShow("milhões de ruas, em segundos ⚡", 640, 300, seg(t, mi, mi + .4), "#fde68a"); return; }
     g.save(); camera(t, [[di, 640, 330, 1.05], [mc, 640, 360, 1]]); bairro(t, 0, { semRot: t > mc }); const p = seg(t, di + .5, mc - .2); const [jx, jy] = noCaminho(PA, p); bolinha(jx, jy - 14, "#0d9488", "J"); bolinha(jx, jy + 14, "#7c3aed", "R"); g.restore();
     julia({ x: 1120, y: 570, s: .6, olhar: -1, braco: t > mc ? -2.5 : .3, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 1210, y: 570, s: .6, olhar: -1, braco: t > mc ? -2.5 : .3, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mapa"), "pop"], [em(F8, "redes"), "pop"], [em(F8, "internet"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mapa", "🗺️", "Mapa e entrega:", "o caminho mais curto"], ["redes", "👥", "Redes sociais:", "pessoas e amizades"], ["internet", "🌐", "Internet:", "pacotes entre roteadores"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 1", [RAFA, JULIA]); } }
];

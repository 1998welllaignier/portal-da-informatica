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
/* ===== 9º M2 · Árvores (v2) ===== */
const T1 = { Documentos: [640, 130, "📁", null], Escola: [400, 270, "📁", "Documentos"], Fotos: [880, 270, "📁", "Documentos"], "redação.txt": [250, 410, "📄", "Escola"], "mapa.png": [550, 410, "🖼️", "Escola"], "aniversário.jpg": [880, 410, "🖼️", "Fotos"] };
const T2 = { Documentos: [640, 120, "📁", null], Escola: [420, 235, "📁", "Documentos"], Fotos: [860, 235, "📁", "Documentos"], "Ciências": [290, 350, "📁", "Escola"], "Português": [560, 350, "📁", "Escola"], "trabalho.docx": [290, 465, "📄", "Ciências"] };
// o: {hl:[nomes], cor:{nome:cor}, k: entrada, arestasHl:[nomes de filhos cuja aresta acende]}
function arv(T, o) { o = o || {}; const nomes = Object.keys(T);
  nomes.forEach((n, i) => { const [x, y, , p] = T[n]; if (!p) return; const k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const [px, py] = T[p], on = o.aHl && o.aHl.includes(n); g.save(); g.globalAlpha = cl(k); g.strokeStyle = on ? "#facc15" : "#94a3b8"; g.lineWidth = on ? 10 : 6; g.lineCap = "round"; g.beginPath(); g.moveTo(px, py + 28); g.lineTo(x, y - 28); g.stroke(); g.restore(); });
  nomes.forEach((n, i) => { const [x, y, e] = T[n], k = o.k == null ? 1 : seg(o.k, i * .12, .3 + i * .12); if (k <= 0) return; const z = back(cl(k)), on = o.hl && o.hl.includes(n), c = (o.cor && o.cor[n]) || (on ? "#fde68a" : "#fff"); g.save(); g.translate(x, y); g.scale(z, z);
    g.font = `800 20px ${F}`; const w = Math.max(150, g.measureText(n).width + 70); g.fillStyle = c; rr(-w / 2, -28, w, 56, 14); g.fill(); g.strokeStyle = on ? "#f59e0b" : NAVY; g.lineWidth = on ? 5 : 3; g.stroke(); g.restore(); emo(e, x - w / 2 * z + 26 * z, y + 10 * z, 26 * z); if (z > .6) { g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, x + 14, y + 7); } }); }
function arvoreReal(x, y, s, vira) { g.save(); g.translate(x, y); g.rotate(vira * Math.PI); g.scale(s, s); g.fillStyle = "#92400e"; rr(-18, -10, 36, 130, 8); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 8; g.beginPath(); g.moveTo(0, 120); g.lineTo(-30, 160); g.moveTo(0, 120); g.lineTo(30, 165); g.moveTo(0, 120); g.lineTo(0, 170); g.stroke();
  [[-50, -40, 60], [50, -40, 60], [0, -90, 70], [-80, -110, 45], [80, -110, 45]].forEach(([a, b, r]) => { g.fillStyle = "#16a34a"; g.beginPath(); g.arc(a, b, r, 0, 7); g.fill(); }); g.restore(); }
const F0 = "Árvores: a raiz em cima!",
  F1 = "O Rafa salvou o trabalho de Ciências no computador da sala e, na aula seguinte, não achou mais. Tinha pasta dentro de pasta, dentro de pasta. Onde foi parar o arquivo?",
  F2 = "Para achar, ele precisa entender uma árvore. Na computação, a árvore é um grafo especial, desenhado de cabeça para baixo: a raiz fica em cima, e os galhos descem até as folhas.",
  F3 = "A raiz é o vértice de cima, onde tudo começa: a pasta Documentos. Quem está logo acima é o pai; logo abaixo, os filhos. A pasta Escola é filha de Documentos. A folha é o vértice sem filhos, no fim do galho: os arquivos. E o nível é quantos passos da raiz até o vértice: Documentos é nível zero, Escola é nível um.",
  F4 = "O que faz um grafo ser árvore? Três regras. Tem uma raiz só: tudo começa num lugar. Não tem voltas, ou seja, não tem ciclo: não dá para sair de um vértice e voltar a ele sem repetir o caminho. E, de um vértice a outro, existe um único caminho.",
  F5 = "Da raiz até o mapa ponto png, por exemplo, só existe um caminho: Documentos, Escola, mapa ponto png. Esse caminho é o endereço do arquivo!",
  F6 = "As árvores servem para organizar as coisas em hierarquia: do mais geral para o mais específico. Pastas, árvore da família, campeonato mata-mata e o organograma da escola.",
  F7 = "O Rafa desceu pela árvore: Documentos, Escola, Ciências. E lá estava o trabalho! Missão cumprida!",
  F8 = "Onde eu uso isso? Nas pastas do computador e do celular, que formam uma árvore. Na árvore genealógica, com avós, pais e filhos em níveis. E no mata-mata da Copa: as folhas são os times, e a raiz é o campeão.",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";
const L92 = { 3: F3.replace("nível zero", "nível 0").replace("nível um", "nível 1"), 4: F4.replace("Três regras", "3 regras"), 5: F5.replace(/mapa ponto png/g, "mapa.png") };
const PERG = [["Documentos", 0], ["Escola", 1], ["Fotos", 1], ["redação.txt", 2], ["mapa.png", 2], ["aniversário.jpg", 2]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [1.1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 280, 1.15], [1.8, 640, 360, 1]]); g.translate(0, 110); arv(T1, { k: t }); g.restore(); abertura(t, "9º ANO · MISSÃO 2", "Árvores", "A RAIZ", "EM CIMA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "salvou"), "pop"], [em(F1, "achou"), "alerta"], [em(F1, "pasta"), "pop"], [em(F1, "arquivo"), "zum"]],
   draw(t, D) { const sa = em(F1, "salvou"), ac = em(F1, "achou"), pa = em(F1, "pasta"), ar = em(F1, "arquivo"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [pa, 560, 330, 1.05], [ar, 640, 360, 1]]);
     monitor(330, 470, 1.2, () => { g.fillStyle = "#eaf6ff"; g.fillRect(-136, -186, 272, 160); if (t > sa && t < ac) { arquivo(0, -100, .6, 0, "#fff", "Ciências"); } if (t > ac && t < pa) emo("❓", 0, -80, 60); });
     if (t > pa) for (let i = 0; i < 4; i++) { const k = seg(t, pa + i * .35, pa + .3 + i * .35); if (k <= 0) continue; g.save(); g.globalAlpha = cl(k); pasta(760 + i * 70, 220 + i * 70, 1.1 - i * .15, ["#f5b82e", "#fb923c", "#f472b6", "#a78bfa"][i], i === 0 ? "pasta" : ""); g.restore(); }
     rafa({ x: 600, y: 565, s: .8, olhar: -1, braco: t > ac ? -2.4 : -1, bracoE: t > ac ? 2.4 : .3, boca: t > ac ? "o" : "riso", pisca: pisca(t) }); g.restore();
     if (t > ac && t < pa) balao("Cadê o meu trabalho?!", 640, 170, seg(t, ac, ac + .4)); if (t > ar) palavra("ONDE ESTÁ? 🤔", 1000, 520, seg(t, ar, ar + .4), 40); } },
 { chip: "A ÁRVORE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "árvore"), "ding"], [em(F2, "cabeça"), "zum"], [em(F2, "raiz"), "pop"], [em(F2, "folhas"), "pop"]],
   draw(t, D) { const av = em(F2, "árvore"), cb = em(F2, "cabeça"), rz = em(F2, "raiz"), fo = em(F2, "folhas"); fundoEscuro(t, "#14532d"); const v = io2(seg(t, cb, cb + 1.2));
     arvoreReal(130, 330, .75, v); if (t > rz) { rotulo("raiz", 175, v > .5 ? 210 : 470, "#fde68a", seg(t, rz, rz + .4)); }
     if (t > av) { g.save(); g.translate(130, 0); arv(T1, { k: t - av }); g.restore(); } palavra("ÁRVORE", 640, 70, seg(t, av, av + .4), 50);
     if (t > rz) etiqueta("raiz: em cima", 1100, 200, 860, 140, seg(t, rz, rz + .4)); if (t > fo) etiqueta("folhas: embaixo", 1100, 510, 1060, 440, seg(t, fo, fo + .4)); } },
 { chip: "RAIZ, PAI, FILHO, FOLHA, NÍVEL", fala: F3, legenda: L92[3], sfx: [[.1, "whoosh"], [em(F3, "raiz"), "pop"], [em(F3, "pai"), "pop"], [em(F3, "filhos"), "pop"], [em(F3, "folha"), "pop"], [em(F3, "nível"), "ding"]],
   draw(t, D) { const rz = em(F3, "raiz"), pa = em(F3, "pai"), fi = em(F3, "filha"), fo = em(F3, "folha"), ni = em(F3, "nível"); fundoEscuro(t, "#0f172a");
     const cor = {}; if (t > rz && t < pa) cor.Documentos = "#fde68a"; if (t > pa && t < fo) { cor.Documentos = "#bfdbfe"; cor.Escola = "#bbf7d0"; cor.Fotos = "#bbf7d0"; } if (t > fo && t < ni) { cor["redação.txt"] = "#fbcfe8"; cor["mapa.png"] = "#fbcfe8"; cor["aniversário.jpg"] = "#fbcfe8"; }
     g.save(); camera(t, [[0, 640, 330, 1], [pa, 600, 300, 1.04], [ni, 640, 330, 1]]); g.translate(80, 0); arv(T1, { cor, aHl: t > fi && t < fo ? ["Escola"] : [] });
     if (t > ni) [0, 1, 2].forEach(l => { const y = [130, 270, 410][l]; g.strokeStyle = "rgba(250,204,21,.35)"; g.lineWidth = 2; g.setLineDash([8, 8]); g.beginPath(); g.moveTo(0, y); g.lineTo(1100, y); g.stroke(); g.setLineDash([]); rotulo("nível " + l, 40, y + 7, "#fde68a", seg(t, ni + l * .4, ni + .4 + l * .4)); }); g.restore();
     if (t > rz && t < pa) etiqueta("RAIZ: onde tudo começa", 1060, 190, 860, 140, seg(t, rz, rz + .4));
     if (t > pa && t < fo) { etiqueta("PAI", 1100, 110, 880, 130, seg(t, pa, pa + .4)); etiqueta("FILHOS", 1140, 330, 1040, 285, seg(t, pa + .5, pa + .9)); }
     if (t > fo && t < ni) etiqueta("FOLHAS: sem filhos", 1080, 500, 960, 430, seg(t, fo, fo + .4)); } },
 { chip: "3 REGRAS", fala: F4, legenda: L92[4], sfx: [[.1, "whoosh"], [em(F4, "raiz"), "pop"], [em(F4, "voltas"), "alerta"], [em(F4, "único"), "ding"]],
   draw(t, D) { const rz = em(F4, "raiz"), vo = em(F4, "voltas"), un = em(F4, "único"); fundoEscuro(t, "#312e81"); palavra("3 REGRAS DA ÁRVORE", 560, 80, seg(t, 0, .4), 46);
     const P = [[rz, "1. uma raiz só", "#fde68a"], [vo, "2. sem ciclo (volta)", "#fecaca"], [un, "3. um único caminho", "#bbf7d0"]];
     P.forEach(([t0, tit, c], i) => { const k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 230 + i * 410; g.save(); g.translate(x, 300); g.scale(z, z); g.fillStyle = c; rr(-180, -150, 360, 300, 24); g.fill(); g.fillStyle = NAVY; g.font = `900 26px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, -105); g.restore();
       if (k < 1) return; const no = (a, b, on) => { g.fillStyle = on ? "#f59e0b" : "#fff"; g.beginPath(); g.arc(a, b, 18, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); }, li = (a, b, c2, d, cor) => { g.strokeStyle = cor || NAVY; g.lineWidth = 5; g.beginPath(); g.moveTo(a, b); g.lineTo(c2, d); g.stroke(); };
       if (i === 0) { li(x, 240, x - 70, 320); li(x, 240, x + 70, 320); li(x - 70, 320, x - 110, 390); li(x - 70, 320, x - 30, 390); no(x, 240, true); no(x - 70, 320); no(x + 70, 320); no(x - 110, 390); no(x - 30, 390); emo("👑", x, 215, 30); }
       if (i === 1) { li(x - 80, 360, x + 80, 360, "#dc2626"); li(x - 80, 360, x, 240, "#dc2626"); li(x + 80, 360, x, 240, "#dc2626"); no(x, 240); no(x - 80, 360); no(x + 80, 360); xVermelho(x, 320, 40, seg(t, vo + .6, vo + 1)); }
       if (i === 2) { li(x, 240, x - 70, 320, "#16a34a"); li(x, 240, x + 70, 320); li(x - 70, 320, x - 30, 400, "#16a34a"); no(x, 240, true); no(x - 70, 320, true); no(x + 70, 320); no(x - 30, 400, true); visto(x + 90, 410, 22, seg(t, un + .4, un + .8)); } }); } },
 { chip: "O ENDEREÇO", fala: F5, legenda: L92[5], sfx: [[.1, "whoosh"], [em(F5, "Documentos"), "pop"], [em(F5, "Escola"), "pop"], [em(F5, "mapa", 1), "pop"], [em(F5, "endereço"), "ding"]],
   draw(t, D) { const d = em(F5, "Documentos"), e = em(F5, "Escola"), m = em(F5, "mapa", 1), en = em(F5, "endereço"); fundoEscuro(t, "#0f172a"); const hl = [t > d ? "Documentos" : "", t > e ? "Escola" : "", t > m ? "mapa.png" : ""];
     g.save(); camera(t, [[0, 640, 330, 1], [e, 560, 300, 1.05], [en, 640, 330, 1]]); arv(T1, { hl, aHl: [t > e ? "Escola" : "", t > m ? "mapa.png" : ""] }); g.restore();
     if (t > en) { g.fillStyle = "#0f172a"; rr(240, 470, 800, 70, 14); g.fill(); g.strokeStyle = "#facc15"; g.lineWidth = 4; g.stroke(); g.fillStyle = "#fde68a"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText("📍 Documentos / Escola / mapa.png", 640, 516); }
     rafa({ x: 1170, y: 570, s: .6, olhar: -1, braco: -1.3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "HIERARQUIA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "hierarquia"), "ding"], [em(F6, "Pastas"), "pop"], [em(F6, "família"), "pop"], [em(F6, "mata"), "pop"], [em(F6, "organograma"), "pop"]],
   draw(t, D) { const hi = em(F6, "hierarquia"), ge = em(F6, "geral"); fundoEscuro(t, "#14532d"); palavra("HIERARQUIA", 560, 80, seg(t, hi, hi + .4), 56); if (t > ge) rotulo("do mais geral ⬇ para o mais específico", 560, 140, "#bbf7d0", seg(t, ge, ge + .4));
     [["Pastas", "📁", "pastas"], ["família", "👪", "árvore da família"], ["mata", "🏆", "mata-mata"], ["organograma", "🏫", "organograma"]].forEach(([w, e, n], i) => { const t0 = em(F6, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 200 + i * 290; g.save(); g.translate(x, 330); g.scale(z, z); g.fillStyle = "#fff"; rr(-125, -110, 250, 220, 20); g.fill(); g.restore(); emo(e, x, 330, 80 * z); if (k > .8) { g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(n, x, 410); } }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Documentos"), "pop"], [em(F7, "Escola"), "pop"], [em(F7, "Ciências"), "pop"], [em(F7, "trabalho"), "festa"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const d = em(F7, "Documentos"), e = em(F7, "Escola"), c = em(F7, "Ciências"), tr = em(F7, "trabalho"), mc = em(F7, "Missão"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 330, 1], [c, 520, 340, 1.05], [mc, 640, 300, .88]]); arv(T2, { hl: [t > d ? "Documentos" : "", t > e ? "Escola" : "", t > c ? "Ciências" : "", t > tr ? "trabalho.docx" : ""], aHl: [t > e ? "Escola" : "", t > c ? "Ciências" : "", t > tr ? "trabalho.docx" : ""] });
     rafa({ x: 1050, y: 570, s: .75, olhar: -1, braco: t > tr ? -2.6 : -1.2, bracoE: t > tr ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > tr && t < mc) placaShow("Achei! 🎉", 780, 470, seg(t, tr, tr + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "pastas"), "pop"], [em(F8, "genealógica"), "pop"], [em(F8, "Copa"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["pastas", "📁", "Pastas:", "do computador e celular"], ["genealógica", "👪", "Árvore genealógica:", "avós, pais e filhos"], ["Copa", "🏆", "Mata-mata:", "a raiz é o campeão"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 1º bimestre de 2027 · Missão 2", [RAFA, JULIA]); } }
];

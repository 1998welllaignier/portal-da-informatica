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
/* ===== 8º M8 · Fractais (v2) ===== */
function sierp(cx, by, s, n, cor) { if (n <= 0) { g.fillStyle = cor || "#facc15"; g.beginPath(); g.moveTo(cx - s / 2, by); g.lineTo(cx + s / 2, by); g.lineTo(cx, by - s * .866); g.closePath(); g.fill(); return; }
  sierp(cx - s / 4, by, s / 2, n - 1, cor); sierp(cx + s / 4, by, s / 2, n - 1, cor); sierp(cx, by - s * .433, s / 2, n - 1, cor); }
function arvore(x, y, len, ang, n, k) { if (n < 0 || k <= 0) return; const kk = Math.min(1, k), x2 = x + Math.cos(ang) * len * kk, y2 = y + Math.sin(ang) * len * kk; g.strokeStyle = n > 2 ? "#92400e" : "#16a34a"; g.lineWidth = Math.max(2, n * 3 + 2); g.lineCap = "round"; g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke();
  if (k > 1) { arvore(x2, y2, len * .72, ang - .45, n - 1, k - 1); arvore(x2, y2, len * .72, ang + .45, n - 1, k - 1); } }
function brocolis(x, y, r, n) { g.fillStyle = n % 2 ? "#4d7c0f" : "#65a30d"; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); if (n <= 0) return; for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (i - 2) * .55; brocolis(x + Math.cos(a) * r * .72, y + Math.sin(a) * r * .72, r * .38, n - 1); } }
const F0 = "Fractais: a parte parece o todo!",
  F1 = "No caminho da escola, o Léo arrancou uma folha de samambaia e reparou numa coisa estranha: cada folhinha do galho parecia uma samambaia inteira, só que pequenininha!",
  F2 = "Isso tem nome: fractal. Fractal é uma figura em que uma parte é parecida com o todo: isso se chama autossemelhança. A samambaia é assim. O brócolis também: cada pedacinho parece um brócolis pequeno.",
  F3 = "E como se desenha um fractal? Com recursão, igual à Missão 6: a mesma regra, repetida dentro dela mesma, em tamanhos cada vez menores.",
  F4 = "O mais famoso é o triângulo de Sierpinski, criado pelo matemático polonês Wacław Sierpiński. No nível zero, é um triângulo. No nível um, ele vira três triângulos menores, e o do meio fica vazio.",
  F5 = "No nível dois, cada um dos três vira três menores: nove. No nível três, vinte e sete. No nível quatro, oitenta e um! A cada nível, o número de triângulos multiplica por três.",
  F6 = "E por que o desenho não continua para sempre? Porque a gente para num nível: é o caso base. A tela não consegue mostrar um triângulo menor que um pontinho.",
  F7 = "Outro fractal é a árvore. Um tronco se divide em dois galhos. Cada galho se divide em dois galhos menores. No nível um, são dois galhos novos. No nível dois, quatro. No nível três, oito. No nível quatro, dezesseis. Aqui, a cada nível, o número dobra.",
  F8 = "O Léo desenhou a sua árvore fractal no portal e descobriu por que a samambaia parece samambaia em todo pedaço. Missão cumprida!",
  F9 = "Onde eu uso isso? Na natureza: samambaia, brócolis romanesco, raios, flocos de neve e rios vistos de cima. Nos jogos e filmes, montanhas e árvores são criadas pelo computador com fractais. E até algumas antenas de celular têm forma de fractal.",
  F10 = "Agora é com vocês: abram a Missão 8 no portal!";
const L88 = { 4: F4.replace("nível zero", "nível 0").replace("nível um", "nível 1").replace("três triângulos", "3 triângulos"),
  5: "No nível 2, cada um dos 3 vira 3 menores: 9. No nível 3, 27. No nível 4, 81! A cada nível, o número de triângulos multiplica por 3.",
  7: "Outro fractal é a árvore. Um tronco se divide em 2 galhos. Cada galho se divide em 2 galhos menores. No nível 1, são 2 galhos novos. No nível 2, 4. No nível 3, 8. No nível 4, 16. Aqui, a cada nível, o número dobra." };
function fundoParque(t) { const gr = g.createLinearGradient(0, 0, 0, 460); gr.addColorStop(0, "#38bdf8"); gr.addColorStop(1, "#e0f2fe"); g.fillStyle = gr; g.fillRect(-300, -300, 1880, 800); for (let i = 0; i < 4; i++) nuvem(((i * 330 + t * 18) % 1600) - 150, 120 + (i % 2) * 50, .6);
  g.fillStyle = "#4ade80"; g.fillRect(-300, 470, 1880, 500); g.fillStyle = "#a8a29e"; g.beginPath(); g.moveTo(500, 720); g.lineTo(640, 470); g.lineTo(700, 470); g.lineTo(980, 720); g.fill(); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "zum"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 300, 1.2], [1.8, 640, 360, 1]]); samambaia(640, 560, 150, -Math.PI / 2, 7, seg(t, 0, 1.6)); g.restore(); abertura(t, "8º ANO · MISSÃO 8", "Fractais", "A PARTE", "PARECE O TODO!", 1.9); } },
 { chip: "A SAMAMBAIA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "samambaia"), "pop"], [em(F1, "folhinha"), "zum"], [em(F1, "pequenininha"), "ding"]],
   draw(t, D) { const sa = em(F1, "samambaia"), fo = em(F1, "folhinha"), pe = em(F1, "pequenininha");
     if (t < fo) { g.save(); camera(t, [[0, 640, 360, 1], [sa, 760, 330, 1.1]]); fundoParque(t); samambaia(860, 470, 110, -Math.PI / 2 - .2, 6, seg(t, sa, sa + 1.2)); leo({ x: 620, y: 560, s: .85, olhar: 1, braco: -1.3, bracoE: .3, boca: "o", pisca: pisca(t) }); g.restore(); if (t > sa + 1) balao("Ué, que estranho!", 520, 200, seg(t, sa + 1, sa + 1.4)); return; }
     fundoEscuro(t, "#14532d"); const z = io2(seg(t, fo, fo + 1.4)); g.save(); g.translate(640, 380); g.scale(1 + z * 1.2, 1 + z * 1.2); g.translate(-640, -380); samambaia(500, 600, 120, -Math.PI / 2, 7, 1); g.restore();
     g.strokeStyle = "#fde047"; g.lineWidth = 6; g.beginPath(); g.arc(940, 300, 150, 0, 7); g.stroke(); g.save(); g.beginPath(); g.arc(940, 300, 146, 0, 7); g.clip(); g.fillStyle = "#052e16"; g.fillRect(780, 140, 320, 320); samambaia(940, 430, 75, -Math.PI / 2, 6, seg(t, fo + .5, fo + 1.5)); g.restore();
     if (t > pe) placaShow("uma samambaia pequenininha! 😮", 900, 500, seg(t, pe, pe + .4), "#86efac"); } },
 { chip: "FRACTAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "fractal"), "ding"], [em(F2, "todo"), "pop"], [em(F2, "brócolis"), "pop"]],
   draw(t, D) { const fr = em(F2, "fractal"), to = em(F2, "todo"), br = em(F2, "brócolis"), pd = em(F2, "pedacinho"); fundoEscuro(t, "#14532d");
     palavra("FRACTAL", 560, 100, seg(t, fr, fr + .4), 70); if (t > to) cartaoC("a parte parece o todo: autossemelhança", 640, 200, 560, "#fde68a", seg(t, to, to + .4));
     samambaia(330, 560, 95, -Math.PI / 2, 6, seg(t, .2, 1.5)); if (t > br) { const k = seg(t, br, br + .5); g.save(); g.translate(930, 420); g.scale(k, k); g.fillStyle = "#a3e635"; rr(-25, 0, 50, 120, 12); g.fill(); brocolis(0, -20, 110, 3); g.restore(); }
     if (t > pd) etiqueta("cada pedacinho = um brocolinho", 1050, 520, 960, 320, seg(t, pd, pd + .4)); } },
 { chip: "COMO SE DESENHA?", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "recursão"), "ding"], [em(F3, "regra"), "pop"], [em(F3, "menores"), "zum"]],
   draw(t, D) { const re = em(F3, "recursão"), rg = em(F3, "regra"), me = em(F3, "menores"); fundoEscuro(t, "#4c1d95");
     palavra("COM RECURSÃO! 🔁", 560, 100, seg(t, re, re + .4), 56); if (t > re) rotulo("igual à Missão 6", 560, 160, "#e9d5ff", seg(t, re + .3, re + .7));
     if (t > rg) { const L = t > me ? Math.min(4, 1 + Math.floor((t - me) * 1.5)) : 1; [0, 1, 2, 3].forEach(i => { const k = seg(t, rg + i * .5, rg + .4 + i * .5); if (k <= 0) return; g.save(); g.globalAlpha = cl(k); sierp(220 + i * 270, 470, 200, i, ["#facc15", "#fb923c", "#f472b6", "#a78bfa"][i]); g.restore(); if (i < 3) { g.fillStyle = "#fde047"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("➜", 355 + i * 270, 410); } }); }
     if (t > me) cartaoC("a mesma regra, cada vez menor", 640, 535, 520, "#fff", seg(t, me, me + .4)); } },
 { chip: "TRIÂNGULO DE SIERPINSKI", fala: F4, legenda: L88[4], sfx: [[.1, "whoosh"], [em(F4, "Sierpinski"), "ding"], [em(F4, "zero"), "pop"], [emE(F4, "um", 1), "pop"], [em(F4, "vazio"), "zum"]],
   draw(t, D) { const si = em(F4, "Sierpinski"), ze = em(F4, "zero"), um = emE(F4, "um", 1), va = em(F4, "vazio"); fundoEscuro(t, "#0f172a"); const N = t > um ? 1 : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [um, 560, 330, 1.05], [va + 1, 640, 360, 1]]); if (t > ze) sierp(560, 520, 440, N, "#facc15"); if (t > va) { g.strokeStyle = "#f472b6"; g.lineWidth = 5; g.setLineDash([10, 8]); g.beginPath(); g.moveTo(450, 330); g.lineTo(670, 330); g.lineTo(560, 520); g.closePath(); g.stroke(); g.setLineDash([]); } g.restore();
     if (t < ze) { palavra("TRIÂNGULO DE SIERPINSKI", 560, 150, seg(t, si, si + .4), 46); rotulo("Wacław Sierpiński, matemático polonês", 560, 230, "#cbd5e1", seg(t, si + .5, si + .9)); robozinho(640, 420, .9, t, true); }
     else { palavra("NÍVEL " + N, 560, 90, seg(t, ze, ze + .4), 54); if (t > um) placaShow("3 triângulos", 1000, 300, seg(t, um + .5, um + .9), "#fde68a"); if (t > va) etiqueta("o do meio fica vazio", 1000, 450, 600, 420, seg(t, va, va + .4)); } } },
 { chip: "NÍVEL POR NÍVEL", fala: F5, legenda: L88[5], sfx: [[.1, "whoosh"], [em(F5, "nove"), "pop"], [em(F5, "três", 2), "pop"], [em(F5, "quatro"), "pop"], [em(F5, "multiplica"), "ding"]],
   draw(t, D) { const ts = [0, em(F5, "três", 2), em(F5, "quatro")], mu = em(F5, "multiplica"); fundoEscuro(t, "#0f172a"); const L = t > ts[2] ? 4 : t > ts[1] ? 3 : 2;
     g.save(); camera(t, [[0, 600, 360, 1], [ts[2], 560, 340, 1.04], [mu, 600, 360, 1]]); sierp(520, 530, 460, L, ["#facc15", "#fb923c", "#f472b6"][L - 2]); g.restore();
     palavra("NÍVEL " + L, 520, 90, 1, 54); [[2, 9], [3, 27], [4, 81]].forEach(([n, q], i) => { if (L >= n) cartaoC(`nível ${n}: ${q} triângulos`, 1030, 180 + i * 110, 380, L === n ? "#fde68a" : "#fff", seg(t, ts[i], ts[i] + .4)); });
     if (t > mu) placaShow("× 3 a cada nível", 1030, 520, seg(t, mu, mu + .4), "#86efac"); } },
 { chip: "O CASO BASE", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "nível"), "alerta"], [em(F6, "base"), "ding"], [em(F6, "pontinho"), "zum"]],
   draw(t, D) { const ni = em(F6, "nível"), ba = em(F6, "base"), po = em(F6, "pontinho"); fundoEscuro(t, "#0f172a");
     sierp(380, 520, 440, 5, "#a78bfa"); if (t < ni) palavra("PARA SEMPRE? 🤔", 560, 90, seg(t, 0, .4), 54); else palavra("A GENTE PARA NUM NÍVEL", 560, 90, seg(t, ni, ni + .4), 46);
     if (t > ba) { cartaoC("= caso base", 900, 230, 320, "#fecaca", seg(t, ba, ba + .4)); placaPare(1120, 230, .7, seg(t, ba + .2, ba + .6)); }
     if (t > po) { lupa(300, 470, 1); g.strokeStyle = "#fde047"; g.lineWidth = 4; g.beginPath(); g.moveTo(330, 440); g.lineTo(780, 380); g.stroke(); g.fillStyle = "#fff"; rr(780, 320, 420, 140, 16); g.fill(); for (let i = 0; i < 12; i++) for (let j = 0; j < 4; j++) { g.fillStyle = (i + j) % 3 ? "#a78bfa" : "#0f172a"; g.fillRect(800 + i * 32, 336 + j * 28, 28, 24); }
       rotulo("pixels: menor que isso, a tela não mostra", 990, 500, "#fde68a", seg(t, po, po + .4)); } } },
 { chip: "A ÁRVORE FRACTAL", fala: F7, legenda: L88[7], sfx: [[.1, "whoosh"], [em(F7, "tronco"), "pop"], [emE(F7, "um", 1), "pop"], [em(F7, "dois", 3), "pop"], [em(F7, "três"), "pop"], [em(F7, "quatro", 1), "pop"], [em(F7, "dobra"), "ding"]],
   draw(t, D) { const tr = em(F7, "tronco"), ts = [emE(F7, "um", 1), em(F7, "dois", 3), em(F7, "três"), em(F7, "quatro", 1)], db = em(F7, "dobra"); fundoEscuro(t, "#14532d"); const L = ts.filter(x => t > x).length;
     const k = t < tr ? 0 : t < ts[0] ? Math.min(2, 1 + seg(t, tr + 1, tr + 2)) : L + 1 + seg(t, ts[Math.max(0, L - 1)], ts[Math.max(0, L - 1)] + .6) * 0; g.save(); camera(t, [[0, 600, 360, 1], [ts[1], 560, 340, 1.05], [db, 600, 360, 1]]); arvore(500, 560, 130, -Math.PI / 2, 4, Math.min(5, k)); g.restore();
     palavra("ÁRVORE FRACTAL", 560, 80, seg(t, 0, .4), 50); [[1, 2], [2, 4], [3, 8], [4, 16]].forEach(([n, q], i) => { if (L >= n) cartaoC(`nível ${n}: ${q} galhos novos`, 1030, 160 + i * 96, 380, L === n ? "#fde68a" : "#fff", seg(t, ts[i], ts[i] + .4)); });
     if (t > db) placaShow("× 2 a cada nível", 500, 160, seg(t, db, db + .4), "#86efac"); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "portal"), "pop"], [em(F8, "samambaia"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const po = em(F8, "portal"), mc = em(F8, "Missão"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 380, 1.05], [mc, 640, 400, 1]]);
     monitor(560, 520, 1.3, (x0, y0, w, h) => { g.fillStyle = "#ecfccb"; g.fillRect(x0, y0, w, h); arvore(x0 + w / 2, y0 + h - 8, h * .22, -Math.PI / 2, 5, seg(t, po, po + 2.5) * 6); });
     samambaia(1000, 540, 80, -Math.PI / 2, 6, seg(t, em(F8, "samambaia"), em(F8, "samambaia") + 1.2)); leo({ x: 200, y: 565, s: .8, olhar: 1, braco: t > mc ? -2.6 : -1, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "natureza"), "pop"], [em(F9, "jogos"), "pop"], [em(F9, "antenas"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["natureza", "❄️", "Natureza:", "samambaia, raios, neve"], ["jogos", "🏔️", "Jogos e filmes:", "montanhas e árvores"], ["antenas", "📡", "Antenas de celular:", "em forma de fractal"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 8", [LEO, BIA8]); } }
];

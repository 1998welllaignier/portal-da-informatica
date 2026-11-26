/* ================= 8º ano · 2027 · 1º bimestre · VÍDEO EXTRA da Missão 6 · Recursão bem explicadinha (padrão completo: o mistério da boneca que nunca acaba) ================= */
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
const F0 = "Vídeo extra: recursão, explicada bem devagarinho! O mistério da boneca que nunca acaba.",
  F1 = "Esta é a Bia, e este é o Bit, o robozinho dela. A avó da Bia mandou um presente de viagem: uma boneca de madeira, gordinha e pintada. O nome dela é matrioska, uma boneca russa.",
  F2 = "O Bit sacudiu a boneca e ouviu um barulhinho lá dentro. Ele abriu a boneca no meio e… surpresa: dentro tinha outra boneca, igualzinha, só que menor!",
  F3 = "Ele abriu essa também: outra boneca, ainda menor. E dentro dela, mais uma. E mais uma! O Bit ficou nervoso: e se isso não acabar nunca?",
  F4 = "Calma, Bit! Repare no que você está fazendo. Para abrir a boneca grande, você abre e depois faz a mesma coisa com a boneca de dentro. Dentro do problema grande, tem o mesmo problema, só que menor.",
  F5 = "Isso tem nome: recursão. Recursão é resolver um problema usando uma versão menor dele mesmo. A palavra vem do latim e quer dizer algo como correr de volta: você passa de novo pelo mesmo caminho, só que cada vez mais curto.",
  F6 = "E a boneca acabou? Acabou! A última é bem pequenininha e inteira: não abre. Quando o Bit chega nela, ele para. Essa bonequinha que não abre é a parte mais importante da recursão: o caso base.",
  F7 = "Caso base é o caso mais simples, que a gente resolve direto, sem repetir nada. Ele também se chama condição de parada, porque é ele que faz a recursão parar.",
  F8 = "A outra parte é o passo recursivo: abrir a boneca e repetir com a de dentro, que é menor. Toda recursão tem essas duas partes. O passo recursivo faz de novo, com um problema menor. O caso base é o problema tão pequeno que se resolve na hora.",
  F9 = "E se não tivesse caso base? Olha o que acontece com dois espelhos, um de frente para o outro: imagem dentro de imagem, dentro de imagem… para sempre! Uma recursão sem caso base nunca para. No computador, o programa trava.",
  F10 = "Segunda aventura! A Bia e o Bit foram ao cinema, e a fila estava enorme. O Bit quis saber: em que posição eu estou? Contar todo mundo lá da frente ia dar um trabalhão!",
  F11 = "Então ele fez um truque. Cutucou quem estava na frente e perguntou: qual é a sua posição? Essa pessoa também não sabia, então fez a mesma pergunta para a pessoa da frente dela. E essa, para a da frente… A mesma pergunta foi passando, cada vez mais perto do começo da fila.",
  F12 = "Até que a pergunta chegou na primeira pessoa da fila. Ela nem precisou perguntar nada: eu sou a número um! Esse é o caso base: a resposta que se sabe na hora.",
  F13 = "Agora, a resposta volta. A segunda pessoa pensa: a da frente é a um, então eu sou um mais um, dois. A terceira: dois mais um, três. Cada um soma um e passa a resposta para trás… até chegar no Bit: posição sete!",
  F14 = "Repare no caminho: a pergunta vai para a frente, até o caso base. E a resposta volta para trás, somando um de cada vez. A recursão sempre faz essa ida e volta.",
  F15 = "Terceira aventura: o foguete do Bit! Para lançar, ele precisa de uma contagem regressiva. A regra é igual à do portal: se o número for zero, mostra fogo e para. Senão, mostra o número e conta de novo a partir do número menos um.",
  F16 = "Vamos seguir passo a passo, contando a partir do três. Três é zero? Não. Então mostra três e conta a partir do dois. Dois é zero? Não. Mostra dois e conta a partir do um. Um é zero? Não. Mostra um e conta a partir do zero. Zero é zero? É! Fogo!",
  F17 = "Viu? A cada vez, o número fica um menor: três, dois, um, zero. O passo recursivo vai chegando perto do caso base, até bater nele. Se o número nunca diminuísse, o foguete nunca sairia do chão!",
  F18 = "E no editor de blocos? Na gaveta Meus blocos, você cria um bloco seu, com nome. Isso se chama função. Quando o bloco usa ele mesmo lá dentro, ele é recursivo: o bloco contar a partir de chama o próprio contar a partir de, com um número menor.",
  F19 = "Hora de lembrar! Recursão: resolver um problema usando uma versão menor dele mesmo. Passo recursivo: chamar o mesmo problema, um pouco menor. Caso base: o caso mais simples, que faz parar. E sem caso base, nunca para!",
  F20 = "Onde eu uso isso? Nas pastas do computador: uma pasta tem pastas dentro, que têm outras pastas dentro. Para contar todos os arquivos, o computador abre pasta por pasta, como as bonecas. E na natureza: o galho da samambaia parece uma samambaia menor. Isso é um fractal, assunto da Missão 8!",
  F21 = "Agora é com vocês: abram a Missão 6 no portal e mostrem que entenderam a recursão!";
const bitE = (t, x, y, s, f) => robozinho(x, y, s || 1.3, t, f);

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "misterio"], [1.5, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 360, 1.25], [1.6, 640, 380, 1]]); const gr = g.createRadialGradient(640, 400, 40, 640, 400, 760); gr.addColorStop(0, "#4c1d95"); gr.addColorStop(1, "#0b0a24"); g.fillStyle = gr; g.fillRect(-400, -300, 2080, 1320);
     for (let i = 0; i < 2; i++) { const a = Math.sin(t * 1.1 + i * 2) * .3; g.save(); g.translate(240 + i * 800, -60); g.rotate(a); const lg = g.createLinearGradient(0, 0, 0, 600); lg.addColorStop(0, "rgba(255,240,180,.3)"); lg.addColorStop(1, "rgba(255,240,180,0)"); g.fillStyle = lg; g.beginPath(); g.moveTo(-20, 0); g.lineTo(20, 0); g.lineTo(190, 600); g.lineTo(-190, 600); g.closePath(); g.fill(); g.restore(); }
     tunel(t, 640, 330, .55, 5.5); g.restore(); g.fillStyle = "rgba(11,10,36,.72)"; g.fillRect(0, 30, 1280, 112);
     abertura(t, "8º ANO · MISSÃO 6 · VÍDEO EXTRA", "Recursão, bem explicadinha", "O MISTÉRIO DA BONECA", "QUE NUNCA ACABA!", 1.9); } },
 { chip: "A BONECA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Bia"), "pop"], [em(F1, "Bit"), "pop"], [em(F1, "presente"), "festa"], [em(F1, "matrioska"), "ding"]],
   draw(t, D) { const b = em(F1, "Bia"), bi = em(F1, "Bit"), p = em(F1, "presente"), m = em(F1, "matrioska");
     g.save(); camera(t, [[0, 640, 360, 1], [b, 360, 420, 1.3], [bi, 900, 420, 1.3], [p, 640, 400, 1], [m, 640, 410, 1.08]]); salaCasa(t);
     const sobe = io2(seg(t, p, p + .8)); g.fillStyle = "#ec4899"; rr(560, 380 - sobe * 0, 160, 90, 10); if (t > p) { g.globalAlpha = 1 - sobe; } g.fill(); g.globalAlpha = 1;
     if (t > p) matrioska(640, 470, .25 + .45 * sobe, CM[0], 0);
     if (t < p + .8) { g.fillStyle = "#facc15"; g.fillRect(630, 380, 20, 90); g.fillStyle = "#be185d"; rr(550, 370 - sobe * 120, 180, 26, 8); g.fill(); }
     biaE({ x: 330, y: 690, s: 1.05, olhar: 1, braco: t > p ? -1.9 : .2, bracoE: .3, boca: t > p ? "riso" : "", pisca: pisca(t) }); bitE(t, 950, 640, 1.4, t > m);
     vasoFrente(1180, 690, t); g.restore();
     if (t > b && t < p) rotulo("BIA", 330, 200, "#fff", 0); if (t > m) { palavra("MATRIOSKA", 640, 110, seg(t, m, m + .4), 64); rotulo("boneca russa de madeira", 640, 170, NAVY, seg(t, m + .2, m + .6)); } } },
 { chip: "SURPRESA!", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "sacudiu"), "tec"], [em(F2, "abriu"), "pop"], [em(F2, "surpresa"), "festa"], [em(F2, "menor"), "ding"]],
   draw(t, D) { const sa = em(F2, "sacudiu"), ab = em(F2, "abriu"), su = em(F2, "surpresa"), me = em(F2, "menor");
     g.save(); camera(t, [[0, 640, 360, 1], [sa, 640, 380, 1.2], [ab, 640, 360, 1.3], [me, 640, 400, 1.1]]); salaCasa(t);
     const sac = t > sa && t < ab ? Math.sin(t * 30) * .08 : 0, a = io2(seg(t, ab, ab + .9));
     g.save(); g.translate(640, 470); g.rotate(sac); matrioska(0, 0, .8, CM[0], a, () => matrioska(0, 0, .68 * Math.min(1, a * 1.4), CM[1], 0)); g.restore();
     bitE(t, 880, 640, 1.4, t > su); biaE({ x: 360, y: 690, s: 1.05, olhar: 1, braco: t > su ? -2.4 : .2, bracoE: t > su ? 2.4 : .3, boca: t > su ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > sa && t < ab) balao("Tec… tec… 🤔", 900, 150, 1);
     if (t > me) etiqueta("OUTRA BONECA, SÓ QUE MENOR!", 640, 110, 640, 300, seg(t, me, me + .4)); } },
 { chip: "E MAIS UMA…", fala: F3, sfx: [[.1, "pop"], [em(F3, "ainda"), "pop"], [em(F3, "mais"), "pop"], [em(F3, "E", 2), "pop"], [em(F3, "nervoso"), "alerta"]],
   draw(t, D) { const ts = [.1, em(F3, "ainda"), em(F3, "mais"), em(F3, "E", 2)], ne = em(F3, "nervoso"); const n = ts.filter(x => t > x).length;
     const sc = [.8, .55, .38, .27, .19], xs = [260, 470, 640, 780, 890];
     g.save(); camera(t, [[0, 520, 380, 1.05], [ts[1], 560, 400, 1.2], [ts[2], 700, 420, 1.5], [ts[3], 820, 430, 1.9], [ne, 760, 400, 1.35]]); salaCasa(t);
     for (let i = 0; i < 5; i++) { if (i > n) break; const ab = i < n ? 1 : 0; matrioska(xs[i], 470, sc[i], CM[i % 6], ab ? .0001 : 0); if (ab) { g.save(); g.translate(xs[i] + 40 * sc[i] / .8, 470 - 110 * sc[i] / .8); g.rotate(.4); matrioska(0, 0, sc[i] * .55, CM[i % 6], 0); g.restore(); } }
     bitE(t, 1040, 640, 1.4, false); if (t > ne) { g.fillStyle = "#67e8f9"; g.beginPath(); g.ellipse(1080, 530 + (t * 40) % 20, 6, 10, 0, 0, 7); g.fill(); } g.restore();
     if (t > ne) balao("E se isso não acabar NUNCA?! 😰", 640, 150, seg(t, ne, ne + .3)); } },
 { chip: "O MESMO, SÓ QUE MENOR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "abre"), "pop"], [em(F4, "mesma"), "ding"], [em(F4, "Dentro"), "whoosh"], [em(F4, "menor"), "ding"]],
   draw(t, D) { const ab = em(F4, "abre"), ms = em(F4, "mesma"), de = em(F4, "Dentro"), me = em(F4, "menor"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [de, 640, 380, .95]]); const a = io2(seg(t, ab, ab + .8));
     matrioska(380, 560, 1.15, CM[0], a, () => matrioska(0, 0, .68, CM[1], 0));
     if (t > ms) { setaCurva(560, 260, 820, 300, "#facc15"); matrioska(950, 560, .78, CM[1], io2(seg(t, ms + .4, ms + 1.1)), () => matrioska(0, 0, .68, CM[2], 0)); }
     g.restore();
     if (t > ab) cartaoC("1. ABRE", 330, 110, 300, "#fff", seg(t, ab, ab + .4));
     if (t > ms) cartaoC("2. A MESMA COISA COM A DE DENTRO", 860, 110, 620, "#fde68a", seg(t, ms, ms + .4));
     if (t > de) { etiqueta("problema grande", 230, 400, 300, 470, seg(t, de, de + .4)); etiqueta("o MESMO problema, menor", 1040, 280, 960, 420, seg(t, de + .3, de + .7)); }
     if (t > me) palavra("O MESMO PROBLEMA, SÓ QUE MENOR!", 640, 210, seg(t, me, me + .4), 40); } },
 { chip: "RECURSÃO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "recursão"), "ding"], [em(F5, "versão"), "pop"], [em(F5, "latim"), "misterio"], [em(F5, "correr"), "whoosh"], [em(F5, "curto"), "ding"]],
   draw(t, D) { const r = em(F5, "recursão"), v = em(F5, "versão"), la = em(F5, "latim"), co = em(F5, "correr"); fundoEscuro(t, "#312e81");
     palavra("RECURSÃO", 640, 120, seg(t, r, r + .4), 92);
     if (t > v && t < la) { cartaoC("resolver um problema usando", 640, 300, 760, "#fff", seg(t, v, v + .4)); cartaoC("uma versão MENOR dele mesmo", 640, 430, 760, "#fde68a", seg(t, v + .5, v + .9)); }
     if (t > la) { const k = seg(t, la, la + .4); g.save(); g.globalAlpha = cl(k); g.strokeStyle = "rgba(255,255,255,.35)"; g.lineWidth = 6; g.beginPath(); for (let a = 0; a < 6 * Math.PI; a += .05) { const rr2 = 230 - a * 11; g.lineTo(640 + Math.cos(a) * rr2 * 1.5, 390 + Math.sin(a) * rr2 * .8); } g.stroke(); g.restore();
       if (t > co) { const a = Math.min(6 * Math.PI - .1, (t - co) * 2.2), rr2 = 230 - a * 11; robozinho(640 + Math.cos(a) * rr2 * 1.5, 420 + Math.sin(a) * rr2 * .8, .9 - a * .03, t, true); }
       cartaoC("latim: “correr de volta”", 640, 230, 520, "#fde68a", seg(t, la, la + .4)); if (t > co + .8) rotulo("o mesmo caminho, cada vez mais curto", 640, 312, "#fde68a", seg(t, co + .8, co + 1.2)); } } },
 { chip: "A ÚLTIMA BONECA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "Acabou"), "ding"], [em(F6, "não", 1), "alerta"], [em(F6, "para"), "pop"], [em(F6, "caso"), "festa"]],
   draw(t, D) { const ac = em(F6, "Acabou"), na = em(F6, "não", 1), pa = em(F6, "para"), cb = em(F6, "caso");
     g.save(); camera(t, [[0, 640, 360, 1], [ac, 700, 440, 1.6], [na, 700, 440, 2.1], [cb, 640, 380, 1.1]]); salaCasa(t);
     [.8, .55, .38, .27].forEach((s, i) => matrioska(240 + i * 130, 470, s, CM[i], .0001));
     const tr = t > na && t < pa ? Math.sin(t * 40) * .05 : 0; g.save(); g.translate(720, 470); g.rotate(tr); matrioska(0, 0, .19, CM[4], 0, null, true); g.restore();
     bitE(t, 900, 640, 1.4, t > cb); g.restore();
     if (t > na && t < cb) balao("Ué… essa não abre!", 900, 140, 1);
     if (t > na) etiqueta("INTEIRA: NÃO ABRE", 380, 160, 600, 330, seg(t, na, na + .4) * (1 - seg(t, cb, cb + .2)));
     if (t > cb) { palavra("CASO BASE", 640, 130, seg(t, cb, cb + .4), 84); placaPare(640, 300, .9, seg(t, cb + .3, cb + .7)); } } },
 { chip: "CASO BASE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "simples"), "pop"], [em(F7, "direto"), "ding"], [em(F7, "condição"), "alerta"], [em(F7, "parar"), "ding"]],
   draw(t, D) { const si = em(F7, "simples"), di = em(F7, "direto"), co = em(F7, "condição"); fundoEscuro(t, "#7f1d1d");
     palavra("CASO BASE", 640, 100, seg(t, 0, .4), 76); matrioska(240, 520, .6, CM[4], 0, null, true);
     cartaoC("o caso mais SIMPLES", 760, 240, 560, "#fff", seg(t, si, si + .4)); cartaoC("resolvido DIRETO, sem repetir", 760, 370, 560, "#fde68a", seg(t, di, di + .4));
     if (t > co) { cartaoC("= CONDIÇÃO DE PARADA", 760, 500, 560, "#fecaca", seg(t, co, co + .4)); placaPare(1150, 500, .7, seg(t, co + .3, co + .7)); } } },
 { chip: "AS DUAS PARTES", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "passo"), "pop"], [em(F8, "duas"), "ding"], [em(F8, "faz"), "pop"], [em(F8, "pequeno"), "pop"]],
   draw(t, D) { const p = em(F8, "passo"), du = em(F8, "duas"), fz = em(F8, "faz"), pq = em(F8, "pequeno"); fundoEscuro(t, "#14532d");
     palavra("TODA RECURSÃO TEM 2 PARTES", 640, 78, seg(t, du, du + .4), 42);
     const k1 = seg(t, p, p + .4), k2 = seg(t, du + .4, du + .8);
     if (k1 > 0) { const z = back(cl(k1)); g.save(); g.translate(350, 380); g.scale(z, z); g.fillStyle = "#dcfce7"; rr(-270, -200, 540, 400, 26); g.fill(); g.fillStyle = "#166534"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("🔁 PASSO RECURSIVO", 0, -140); g.restore(); matrioska(350, 520, .7, CM[0], .8 * (.5 + .5 * Math.sin(t * 2)), () => matrioska(0, 0, .68, CM[1], 0)); }
     if (k2 > 0) { const z = back(cl(k2)); g.save(); g.translate(930, 380); g.scale(z, z); g.fillStyle = "#fee2e2"; rr(-270, -200, 540, 400, 26); g.fill(); g.fillStyle = "#991b1b"; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("🛑 CASO BASE", 0, -140); g.restore(); matrioska(930, 500, .45, CM[4], 0, null, true); }
     if (t > fz) rotulo("faz de novo, com um problema MENOR", 350, 540, "#166534", seg(t, fz, fz + .4)); if (t > pq) rotulo("tão pequeno que resolve NA HORA", 930, 540, "#991b1b", seg(t, pq, pq + .4)); } },
 { chip: "⚠️ SEM CASO BASE", fala: F9, sfx: [[.1, "alerta"], [em(F9, "espelhos"), "misterio"], [em(F9, "sempre"), "zum"], [em(F9, "nunca"), "alerta"], [em(F9, "trava"), "desliga"]],
   draw(t, D) { const es = em(F9, "espelhos"), se = em(F9, "sempre"), nu = em(F9, "nunca"), tr = em(F9, "trava"); fundoEscuro(t, "#0f172a");
     if (t < nu + 1.2) { g.save(); camera(t, [[0, 640, 380, 1], [es, 640, 380, 1], [se, 640, 380, 2.4], [nu, 640, 380, 1]]); const nfr = Math.min(9, Math.floor(seg(t, es, se) * 9) + 1);
       for (let i = 0; i < nfr; i++) { const k = Math.pow(.78, i); moldura(640, 380, 900 * k, 520 * k, i % 2 ? "#a16207" : "#ca8a04"); }
       for (let i = nfr - 1; i >= 0; i--) { const k = Math.pow(.78, i); robozinho(640 + (i % 2 ? 1 : -1) * 30 * k, 380 + 120 * k, 1.1 * k, t, false); } g.restore(); }
     else { monitor(640, 400, 1.3, (x, y, w, h) => { g.fillStyle = "#1e3a8a"; g.fillRect(x, y, w, h); g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("⚠️ O programa travou", x + w / 2, y + h / 2); }); }
     if (t > es && t < se) rotulo("imagem dentro de imagem, dentro de imagem…", 640, 110, "#fde68a", 1);
     if (t > nu) palavra("SEM CASO BASE = NUNCA PARA!", 640, 100, seg(t, nu, nu + .4), 54); } },
 { chip: "2ª AVENTURA: O CINEMA", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "cinema"), "festa"], [em(F10, "enorme"), "zum"], [em(F10, "posição"), "pop"], [em(F10, "trabalhão"), "alerta"]],
   draw(t, D) { const ci = em(F10, "cinema"), en = em(F10, "enorme"), po = em(F10, "posição"), tb = em(F10, "trabalhão");
     g.save(); camera(t, [[0, -20, 300, 1.2], [ci, 300, 330, .8], [en, 640, 380, .72], [po, 1250, 430, 1.25], [tb, 640, 380, .72]]); cinema(t); fila(t, i => i === 6 ? "" : "");
     biaE({ x: 1490, y: 610, s: .82, olhar: -1, pisca: pisca(t) }); g.restore();
     if (t > en && t < po) palavra("FILA ENORME!", 640, 110, seg(t, en, en + .4), 60);
     if (t > po) balao("Em que posição eu estou? 🤔", 840, 150, seg(t, po, po + .3)); if (t > tb) rotulo("contar todo mundo = um trabalhão 😩", 640, 200, "#fde68a", seg(t, tb, tb + .4)); } },
 { chip: "A PERGUNTA VAI…", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "Cutucou"), "tec"], [em(F11, "posição"), "pop"], [em(F11, "mesma"), "pop"], [em(F11, "essa"), "pop"], [em(F11, "passando"), "whoosh"]],
   draw(t, D) { const cu = em(F11, "Cutucou"), pp = em(F11, "posição"), fim = D * .92; const q = cl((t - pp) / Math.max(.5, fim - pp)), idx = 5 - Math.min(5, Math.floor(q * 6));
     const cx = lerp(1250, 330, io2(q));
     g.save(); camera(t, [[0, 1150, 400, 1.3], [pp, 1150, 400, 1.3], [fim, 400, 400, 1.3], [D, 400, 400, 1.2]]); cinema(t);
     fila(t, i => (i === 6 && t < pp + .8) || (t > pp && i === idx + 1 && i < 6) ? "fala" : i === idx && t > pp ? "tras" : ""); g.restore();
     if (t > cu) { const z = 1.3, sx = (FILA[Math.min(6, idx + 1)] - lerp(1150, 400, io2(cl((t - pp) / Math.max(.5, fim - pp))))) * z + 640; balao("Qual é a sua posição?", cl(sx, 230, 1050), 170, seg(t, cu, cu + .3)); }
     if (t > pp + 1) etiqueta("A MESMA PERGUNTA, MAIS PERTO DO COMEÇO", 640, 90, 640, 90, seg(t, pp + 1, pp + 1.4)); } },
 { chip: "CASO BASE!", fala: F12, legenda: "Até que a pergunta chegou na primeira pessoa da fila. Ela nem precisou perguntar nada: eu sou a número 1! Esse é o caso base: a resposta que se sabe na hora.",
   sfx: [[.1, "whoosh"], [em(F12, "primeira"), "pop"], [em(F12, "número"), "ding"], [em(F12, "caso"), "festa"]],
   draw(t, D) { const pr = em(F12, "primeira"), nm = em(F12, "número"), cb = em(F12, "caso");
     g.save(); camera(t, [[0, 400, 400, 1.2], [pr, 300, 420, 1.6], [cb, 420, 400, 1.1]]); cinema(t); fila(t, i => i === 0 && t > nm - .5 ? "fala" : i === 1 ? "fala" : "");
     if (t > nm) selinho("1", 300, 400, seg(t, nm, nm + .4), "#facc15"); g.restore();
     if (t > pr && t < nm) balao("Qual é a sua posição?", 640, 160, 1); if (t > nm) balao("Eu sou a número 1! 😄", 420, 160, seg(t, nm, nm + .3));
     if (t > cb) { palavra("CASO BASE", 640, 290, seg(t, cb, cb + .4), 70); placaPare(1080, 230, .7, seg(t, cb + .2, cb + .6)); } } },
 { chip: "…A RESPOSTA VOLTA", fala: F13, legenda: "Agora, a resposta volta. A segunda pessoa pensa: a da frente é a 1, então eu sou 1 + 1 = 2. A terceira: 2 + 1 = 3. Cada um soma 1 e passa a resposta para trás… até chegar no Bit: posição 7!",
   sfx: [[.1, "whoosh"], [em(F13, "segunda"), "pop"], [em(F13, "terceira"), "pop"], [em(F13, "passa"), "whoosh"], [em(F13, "sete"), "festa"]],
   draw(t, D) { const se = em(F13, "segunda"), te = em(F13, "terceira"), ps = em(F13, "passa"), st = em(F13, "sete");
     const ts = [0, se + .8, te + .6, ps, ps + .5, ps + 1, st];
     g.save(); camera(t, [[0, 400, 400, 1.15], [te, 520, 400, 1.15], [ps, 820, 400, 1], [st, 1150, 420, 1.2]]); cinema(t); fila(t, i => i === 6 && t > st ? "feliz" : "");
     ts.forEach((x, i) => { if (t > x) { selinho(String(i + 1), FILA[i], i === 6 ? 410 : 420, seg(t, x, x + .4), i === 6 ? "#4ade80" : "#facc15"); if (i > 0 && i < 6) rotulo(`${i} + 1`, FILA[i], 350, "#fde68a", seg(t, x, x + .4)); } }); g.restore();
     if (t > st) palavra("POSIÇÃO 7!", 640, 100, seg(t, st, st + .4), 70); confete(t, st); } },
 { chip: "IDA E VOLTA", fala: F14, sfx: [[.1, "whoosh"], [em(F14, "frente"), "whoosh"], [em(F14, "volta"), "whoosh"], [em(F14, "ida"), "ding"]],
   draw(t, D) { const fr = em(F14, "frente"), vo = em(F14, "volta"), id = em(F14, "ida");
     g.save(); camera(t, [[0, 820, 380, .75], [D, 820, 400, .72]]); cinema(t); fila(t, () => ""); FILA.forEach((x, i) => selinho(String(i + 1), x, 410, 1, i === 0 ? "#fca5a5" : "#facc15"));
     if (t > fr) { const k = seg(t, fr, fr + 1.2); seta(1320, 250, lerp(1320, 300, io2(k)), 250, 1, "#f472b6"); }
     if (t > vo) { const k = seg(t, vo, vo + 1.2); seta(300, 320, lerp(300, 1320, io2(k)), 320, 1, "#4ade80"); } g.restore();
     if (t > fr) rotulo("IDA: a pergunta vai até o caso base ⬅️", 640, 140, "#f9a8d4", seg(t, fr, fr + .4));
     if (t > vo) rotulo("VOLTA: a resposta volta, somando 1 ➡️", 640, 175, "#86efac", seg(t, vo, vo + .4));
     if (t > id) palavra("IDA E VOLTA", 640, 80, seg(t, id, id + .4), 52); } },
 { chip: "3ª AVENTURA: O FOGUETE", fala: F15, legenda: "Terceira aventura: o foguete do Bit! Para lançar, ele precisa de uma contagem regressiva. A regra é igual à do portal: se o número for 0, mostra “Fogo!” e para. Senão, mostra o número e conta de novo a partir do número − 1.",
   sfx: [[.1, "whoosh"], [em(F15, "foguete"), "zum"], [em(F15, "regressiva"), "pop"], [em(F15, "zero"), "ding"], [em(F15, "Senão"), "ding"]],
   draw(t, D) { const fo = em(F15, "foguete"), rg = em(F15, "regressiva"), ze = em(F15, "zero"), sn = em(F15, "Senão");
     g.save(); camera(t, [[0, 640, 300, 1.3], [fo, 640, 360, 1], [ze, 640, 420, 1]]); plataforma(t); foguete(t > ze ? 1060 : 640, 520, t > ze ? .7 : 1, t, 0, false); bitE(t, 420, 600, 1.3, true); g.restore();
     if (t > rg && t < ze) palavra("CONTAGEM REGRESSIVA", 640, 110, seg(t, rg, rg + .4), 54);
     if (t > ze) { g.fillStyle = "rgba(15,23,42,.85)"; rr(150, 110, 980, 250, 22); g.fill(); tabela(640, 130, 940, ["SE…", "ENTÃO…"], [["n = 0  (caso base)", "mostrar “Fogo!” e PARAR"], ["senão  (passo recursivo)", "mostrar n e contar a partir de n − 1"]].slice(0, t > sn ? 2 : 1), ["#dc2626", "#334155"], seg(t, ze, ze + .4), -1, 90); } } },
 { chip: "PASSO A PASSO", fala: F16, sfx: [[.1, "whoosh"], [em(F16, "Três", 0), "pop"], [em(F16, "Dois"), "pop"], [em(F16, "Um"), "pop"], [em(F16, "Zero"), "ding"], [em(F16, "Fogo"), "festa"]],
   draw(t, D) { const ps = [em(F16, "Três", 0), em(F16, "Dois"), em(F16, "Um"), em(F16, "Zero")], fg = em(F16, "Fogo"); const n = ps.filter(x => t > x).length;
     const voa = t > fg ? Math.pow(t - fg, 2) * 260 : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [fg, 640, 360, 1], [fg + .3, 640, 300, .9]]); plataforma(t); foguete(980, 520, .9, t, voa, t > fg); g.restore();
     const lin = [["contar a partir de 3", "3 é 0? NÃO → mostra 3"], ["contar a partir de 2", "2 é 0? NÃO → mostra 2"], ["contar a partir de 1", "1 é 0? NÃO → mostra 1"], ["contar a partir de 0", "0 é 0? SIM → FOGO! 🛑"]];
     lin.slice(0, n).forEach(([a, b], i) => { const k = seg(t, ps[i], ps[i] + .4), x = 120 + i * 40, y = 120 + i * 105; g.save(); g.globalAlpha = cl(k * 1.5); g.fillStyle = i === 3 ? "#fecaca" : "#fff"; rr(x, y, 560, 88, 16); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText(a, x + 20, y + 36); g.font = `700 22px ${F}`; g.fillStyle = i === 3 ? "#b91c1c" : "#334155"; g.fillText(b, x + 20, y + 70); g.restore(); });
     const num = n === 0 ? "" : n < 4 ? String(4 - n) : "🔥"; if (n > 0 && t < fg + .2) painelNum(num, 1130, 200, 1); if (t > fg) palavra("FOGO! 🚀", 980, 150, seg(t, fg, fg + .3), 76); confete(t, fg); } },
 { chip: "CHEGANDO NO CASO BASE", fala: F17, legenda: "Viu? A cada vez, o número fica um menor: 3, 2, 1, 0. O passo recursivo vai chegando perto do caso base, até bater nele. Se o número nunca diminuísse, o foguete nunca sairia do chão!",
   sfx: [[.1, "whoosh"], [em(F17, "três"), "pop"], [em(F17, "dois"), "pop"], [em(F17, "um", 1), "pop"], [em(F17, "zero"), "ding"], [em(F17, "nunca"), "alerta"]],
   draw(t, D) { const ns = [em(F17, "três"), em(F17, "dois"), em(F17, "um", 1), em(F17, "zero")], ba = em(F17, "bater"), nu = em(F17, "nunca"); fundoEscuro(t, "#1e3a8a");
     if (t < nu) { ns.forEach((x, i) => { if (t > x) { selinho(String(3 - i), 260 + i * 260, 330, seg(t, x, x + .4), i === 3 ? "#fca5a5" : "#facc15"); if (i > 0) { seta(260 + (i - 1) * 260 + 45, 330, 260 + i * 260 - 45, 330, seg(t, x - .2, x + .1), "#fff"); rotulo("− 1", 130 + i * 260, 300, "#fde68a", 1); } } });
       if (t > ba) { placaPare(1040, 470, .6, seg(t, ba, ba + .4)); rotulo("CASO BASE", 1040, 560, "#fecaca", seg(t, ba, ba + .4)); } palavra("CADA VEZ MAIS PERTO DO CASO BASE", 640, 110, seg(t, ns[1], ns[1] + .4), 44); }
     else { const k = seg(t, nu, nu + .4); ["3", "3", "3", "3"].forEach((v, i) => { selinho(v, 260 + i * 260, 300, seg(t, nu + i * .25, nu + .4 + i * .25), "#cbd5e1"); }); rotulo("o número não diminui… nunca chega no 0", 640, 410, "#fecaca", k); foguete(640, 560, .5, t, 0, false); xVermelho(640, 500, 60, seg(t, nu + 1, nu + 1.4)); palavra("NUNCA SAI DO CHÃO!", 640, 120, seg(t, nu + .5, nu + .9), 56); } } },
 { chip: "NO EDITOR DE BLOCOS", fala: F18, sfx: [[.1, "whoosh"], [em(F18, "gaveta"), "pop"], [em(F18, "função"), "ding"], [em(F18, "recursivo"), "ding"], [em(F18, "chama"), "zum"], [em(F18, "menor"), "pop"]],
   draw(t, D) { const gv = em(F18, "gaveta"), fn = em(F18, "função"), rc = em(F18, "recursivo"), ch = em(F18, "chama"); fundoEscuro(t, "#0f172a");
     g.fillStyle = "#1e293b"; rr(40, 40, 260, 560, 18); g.fill(); g.fillStyle = "#e2e8f0"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText("Gavetas", 70, 85);
     ["📦 Variáveis", "🔁 Repetição", "❓ Decisão", "🧩 Meus blocos"].forEach((s, i) => { g.fillStyle = i === 3 && t > gv ? "#7c3aed" : "#334155"; rr(60, 110 + i * 70, 220, 54, 12); g.fill(); g.fillStyle = "#fff"; g.font = `700 21px ${F}`; g.fillText(s, 78, 145 + i * 70); });
     const k0 = seg(t, gv + .3, gv + .7); chapeu(360, 110, 520, "definir  contar a partir de (n)", "#7c3aed", k0);
     bocaC(380, 180, 560, 250, "se  n = 0  então", "#d97706", seg(t, gv + .6, gv + 1)); bloco(430, 236, 300, "mostrar “Fogo!”", "#2563eb", seg(t, gv + .8, gv + 1.2));
     bloco(380, 300, 200, "senão", "#d97706", seg(t, gv + 1, gv + 1.4)); bloco(430, 356, 260, "mostrar n", "#2563eb", seg(t, gv + 1.1, gv + 1.5));
     bloco(430, 410, 470, "contar a partir de (n − 1)", "#7c3aed", seg(t, gv + 1.3, gv + 1.7), t > ch);
     if (t > fn) etiqueta("FUNÇÃO = bloco seu, com nome", 640, 515, 640, 470, seg(t, fn, fn + .4));
     if (t > ch) { g.strokeStyle = "#facc15"; g.lineWidth = 6; g.setLineDash([12, 10]); g.lineDashOffset = -t * 40; g.beginPath(); g.moveTo(910, 440); g.bezierCurveTo(1150, 440, 1150, 140, 885, 135); g.stroke(); g.setLineDash([]); rotulo("CHAMA A SI MESMO!", 1090, 300, "#fde68a", seg(t, ch, ch + .4)); }
     if (t > rc) palavra("BLOCO RECURSIVO", 640, 52, seg(t, rc, rc + .4), 44); } },
 { chip: "HORA DE LEMBRAR", fala: F19, sfx: [[.1, "whoosh"], [em(F19, "Recursão"), "pop"], [em(F19, "Passo"), "pop"], [em(F19, "Caso"), "pop"], [em(F19, "nunca"), "ding"]],
   draw(t, D) { const r = em(F19, "Recursão"), p = em(F19, "Passo"), c = em(F19, "Caso"), n = em(F19, "nunca"); fundoEscuro(t, "#1b2c5a"); palavra("HORA DE LEMBRAR!", 640, 80, seg(t, 0, .4), 54);
     cartaoC("🪆 RECURSÃO", 640, 190, 960, "#fde68a", seg(t, r, r + .4), "resolver um problema com uma versão menor dele mesmo");
     cartaoC("🔁 PASSO RECURSIVO", 640, 320, 960, "#bbf7d0", seg(t, p, p + .4), "chamar o mesmo problema, um pouco menor");
     cartaoC("🛑 CASO BASE", 640, 450, 960, "#fecaca", seg(t, c, c + .4), "o caso mais simples, que faz PARAR");
     if (t > n) rotulo("⚠️ sem caso base, nunca para!", 640, 560, "#fde68a", seg(t, n, n + .4)); } },
 { chip: "ONDE EU USO ISSO?", fala: F20, sfx: [[.1, "whoosh"], [em(F20, "pastas"), "pop"], [em(F20, "contar"), "pop"], [em(F20, "natureza"), "whoosh"], [em(F20, "fractal"), "ding"]],
   draw(t, D) { const pa = em(F20, "pastas"), ct = em(F20, "contar"), na = em(F20, "natureza"), fr = em(F20, "fractal"); fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 80, seg(t, 0, .4), 50);
     const k1 = seg(t, pa, pa + .4); if (k1 > 0) { g.save(); g.globalAlpha = cl(k1); g.fillStyle = "#fff"; rr(60, 140, 560, 440, 24); g.fill(); g.restore();
       const nv = [[340, 230, "Escola"], [200, 350, "6º ano"], [480, 350, "8º ano"], [140, 470, "fotos"], [270, 470, "notas"], [420, 470, "trabalhos"], [550, 470, "jogos"]], pai = [-1, 0, 0, 1, 1, 2, 2];
       nv.forEach(([x, y, nome], i) => { const kk = seg(t, pa + .3 + i * .25, pa + .6 + i * .25); if (kk <= 0) return; if (pai[i] >= 0) { g.strokeStyle = "#94a3b8"; g.lineWidth = 3; g.beginPath(); g.moveTo(nv[pai[i]][0], nv[pai[i]][1] + 30); g.lineTo(x, y - 40); g.stroke(); } pasta(x, y, .55 * back(cl(kk)), ["#f5b82e", "#60a5fa", "#4ade80"][Math.min(2, i ? (i < 3 ? 1 : 2) : 0)], nome, t > ct && i > 0); });
       if (t > ct) rotulo("pasta dentro de pasta: abre uma por uma 🔁", 340, 530, NAVY, seg(t, ct, ct + .4)); }
     const k2 = seg(t, na, na + .4); if (k2 > 0) { g.save(); g.globalAlpha = cl(k2); g.fillStyle = "#ecfccb"; rr(660, 140, 560, 440, 24); g.fill(); g.restore(); samambaia(940, 560, 120, -Math.PI / 2, 7, seg(t, na + .2, na + 3.2));
       if (t > fr) { g.strokeStyle = "#dc2626"; g.lineWidth = 4; g.beginPath(); g.arc(1035, 380, 60, 0, 7); g.stroke(); rotulo("o galho = uma samambaia menor!", 940, 175, "#166534", seg(t, fr - .6, fr - .2)); palavra("FRACTAL", 940, 490, seg(t, fr, fr + .4), 46); } } } },
 { chip: "", fala: F21, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 6 · Vídeo extra", [BIAE]); robozinho(1040, 660, 1.4, t, true); } }
];

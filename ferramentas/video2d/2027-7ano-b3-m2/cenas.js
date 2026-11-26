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

/* ===== peças comuns do 7º ano · 3º bimestre ===== */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function seta(x1, y1, cx, cy, x2, y2, cor, w, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.strokeStyle = cor; g.fillStyle = cor; g.lineWidth = w || 5; g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(cx, cy, x2, y2); g.stroke(); const a = Math.atan2(y2 - cy, x2 - cx); g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 18 * Math.cos(a - .45), y2 - 18 * Math.sin(a - .45)); g.lineTo(x2 - 18 * Math.cos(a + .45), y2 - 18 * Math.sin(a + .45)); g.fill(); g.restore(); }
function etq(txt, x, y, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.font = `800 20px ${F}`; const w = g.measureText(txt).width + 24; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 18, w, 36, 10); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillText(txt, x, y + 7); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
// janela de navegador: url na barra; o.cad = "ok" (https + cadeado) | "nao" (sem cadeado) ; conteudo(x0,y0,w,h)
function navegador(x, y, w, h, url, k, o, conteudo) { if (k <= 0) return; o = o || {}; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "rgba(0,0,0,.3)"; rr(-w / 2 + 6, -h / 2 + 8, w, h, 16); g.fill(); g.fillStyle = "#f1f5f9"; rr(-w / 2, -h / 2, w, h, 16); g.fill(); g.fillStyle = "#cbd5e1"; rr(-w / 2, -h / 2, w, 60, 16); g.fill(); g.fillRect(-w / 2, -h / 2 + 30, w, 30);
  ["#ef4444", "#facc15", "#22c55e"].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(-w / 2 + 26 + i * 24, -h / 2 + 30, 7, 0, 7); g.fill(); });
  const bx = -w / 2 + 120, bw = w - 150; g.fillStyle = o.hlUrl ? "#fef08a" : "#fff"; rr(bx, -h / 2 + 12, bw, 38, 19); g.fill();
  let tam = 22; g.font = `700 ${tam}px ${F}`; while (g.measureText(url).width > bw - 90 && tam > 11) { tam--; g.font = `700 ${tam}px ${F}`; }
  if (o.cad === "ok") cadeado(bx + 26, -h / 2 + 41, .3, false); else if (o.cad === "nao") { g.fillStyle = "#dc2626"; g.font = `800 15px ${F}`; g.textAlign = "left"; g.fillText("Não seguro", bx + 14, -h / 2 + 37); }
  g.font = `700 ${tam}px ${F}`; g.fillStyle = NAVY; g.textAlign = "left"; g.textBaseline = "alphabetic"; g.fillText(url, bx + (o.cad === "nao" ? 112 : 50), -h / 2 + 37);
  g.save(); rr(-w / 2, -h / 2 + 60, w, h - 60, 12); g.clip(); if (conteudo) conteudo(-w / 2, -h / 2 + 60, w, h - 60); g.restore(); g.restore(); }
function telaPag(x0, y0, w, h, titulo, cor) { g.fillStyle = cor || "#eff6ff"; g.fillRect(x0, y0, w, h); g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(titulo, x0 + w / 2, y0 + h / 2 + 8); }
function balaoPensa(txt, x, y, k) { balao(txt, x, y, k); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
/* ===== peças da Missão 2 (HTTP, HTTPS e o cadeado) ===== */
const SIG = s => s.replace(/agá tê tê pê ésse/g, "HTTPS").replace(/agá tê tê pê/g, "HTTP").replace(/\bé o ésse\b/g, "é o S");
function carta(x, y, s, lacrada, k) { if (k <= 0) return; g.save(); g.translate(x, y); g.scale(s * back(cl(k)), s * back(cl(k)));
  g.fillStyle = lacrada ? "#fef3c7" : "#fff"; g.strokeStyle = NAVY; g.lineWidth = 5; rr(-90, -60, 180, 120, 10); g.fill(); g.stroke();
  if (lacrada) { g.beginPath(); g.moveTo(-90, -60); g.lineTo(0, 10); g.lineTo(90, -60); g.stroke(); g.fillStyle = "#dc2626"; g.beginPath(); g.arc(0, 8, 16, 0, 7); g.fill(); }
  else { g.strokeStyle = "#94a3b8"; g.lineWidth = 4; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(-70, -30 + i * 20); g.lineTo(i < 2 ? 10 : 30, -30 + i * 20); g.stroke(); } g.strokeRect(50, -50, 30, 30); }
  g.restore(); }
function espiao(x, y, s, lendo, t) { g.save(); g.translate(x, y); g.scale(s, s); emo("🕵️", 0, 0, 90); if (lendo) { g.font = `800 22px ${F}`; g.fillStyle = "#facc15"; g.textAlign = "center"; g.fillText("👀", 0, -70 + Math.sin(t * 8) * 4); } g.restore(); }
function caminho(x1, x2, y, t, cor) { g.save(); g.strokeStyle = cor || "#94a3b8"; g.lineWidth = 8; g.lineCap = "round"; g.setLineDash([2, 18]); g.lineDashOffset = -t * 50; g.beginPath(); g.moveTo(x1, y); g.lineTo(x2, y); g.stroke(); g.restore(); }
const F0 = "HTTP, HTTPS e o cadeado!",
  F1 = "O Caio ia digitar a senha do jogo num site. Mas a Duda gritou: espera! Será que esse site é seguro? Antes de digitar uma senha, é preciso saber o que o endereço e o cadeado do navegador querem dizer.",
  F2 = "O agá tê tê pê é como um cartão-postal: quem pegar no caminho consegue ler. No endereço, ele aparece como http dois pontos barra barra. Os dados viajam abertos!",
  F3 = "Já o agá tê tê pê ésse é como uma carta lacrada: no caminho, ninguém lê. O ésse vem de secure, que em inglês quer dizer seguro. Os dados viajam cifrados, ou seja, embaralhados, e só o site e você conseguem ler.",
  F4 = "Quando a conversa com o site é cifrada, o navegador mostra o cadeado ao lado do endereço. O endereço do site é o texto que aparece na barra de cima do navegador.",
  F5 = "Atenção, a pegadinha! O cadeado mostra que a conversa é cifrada, mas não prova que o site é honesto. Um site falso também pode ter cadeado. Site falso é a página que imita um site verdadeiro para roubar dados.",
  F6 = "Por isso, antes de digitar uma senha, faça três coisas. Primeiro, confira se tem https e cadeado, porque sem eles a senha viaja aberta. Segundo, leia o nome do site, letra por letra. Terceiro, prefira digitar o endereço você mesmo, porque links de mensagens podem levar a sites falsos.",
  F7 = "Veja o exemplo: golpistas criam nomes parecidos, trocando uma letra. A Duda leu o nome letra por letra e achou a letra trocada. Era um site falso, mesmo com cadeado!",
  F8 = "O Caio não digitou a senha, e a Duda mostrou que o cadeado só cifra a conversa, e que o nome do site precisa ser conferido. Missão cumprida!",
  F9 = "Onde eu uso isso? Ao entrar no portal da escola: o endereço começa com https e tem o cadeado. Antes de digitar a senha de um jogo ou de uma rede social. E ao receber um link com o nome de um site conhecido escrito um pouco diferente.",
  F10 = "Agora é com vocês: abram a Missão 2 no portal!";
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "alerta"], [1.6, "pop"], [2.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#4c1d95"); g.save(); camera(t, [[0, 640, 380, 1.05], [2.8, 640, 370, 1]]);
     caminho(180, 1100, 330, t, "#94a3b8"); const a = seg(t, .3, 1.5); carta(lerp(200, 640, a), 270, .8, false, seg(t, .1, .4)); const b = seg(t, 1.6, 2.6); carta(lerp(640, 1080, b), 270, .8, true, seg(t, 1.6, 1.9));
     espiao(640, 400, .9, t < 1.6, t); if (t > 1.6) { cadeado(lerp(640, 1080, b) + 20, 350, .7, false); } g.restore(); abertura(t, "7º ANO · 3º BIM. · MISSÃO 2", "HTTP, HTTPS e o cadeado", "CARTÃO-POSTAL OU", "CARTA LACRADA?", 2.4); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "senha"), "pop"], [em(F1, "espera"), "alerta"], [em(F1, "seguro"), "ding"], [em(F1, "cadeado"), "pop"]],
   draw(t, D) { const se = em(F1, "senha"), es = em(F1, "espera"), sg = em(F1, "seguro"), ca = em(F1, "cadeado"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 360, 1], [es, 700, 350, 1.06], [ca, 760, 330, 1.1]]);
     navegador(780, 340, 560, 330, "https://site-do-jogo", seg(t, 0, .4), { cad: "ok" }, (x0, y0, w, h) => { g.fillStyle = "#eff6ff"; g.fillRect(x0, y0, w, h); g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("Entre no jogo", x0 + w / 2, y0 + 60); g.fillStyle = "#fff"; rr(x0 + 90, y0 + 100, w - 180, 54, 10); g.fill(); g.strokeStyle = "#94a3b8"; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 30px ${F}`; g.fillText(t > se ? "••••••" : "", x0 + w / 2, y0 + 138); });
     if (t > ca) etiqueta("cadeado", 560, 140, 650, 200, seg(t, ca, ca + .4)); g.restore();
     caio({ x: 120, y: 590, s: .75, olhar: 1, braco: t > se && t < es ? -1.6 : .3, bracoE: .3, boca: t > es ? "o" : "riso", pisca: pisca(t) }); duda({ x: 260, y: 590, s: .75, olhar: -1, braco: t > es ? -2.4 : .3, bracoE: .3, boca: t > es ? "o" : "riso", pisca: pisca(t + 1) });
     if (t > es && t < sg) balao("Espera!", 290, 380, seg(t, es, es + .3)); if (t > sg) balao("Esse site é seguro?", 320, 380, seg(t, sg, sg + .3)); } },
 { chip: "HTTP: CARTÃO-POSTAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "cartão"), "pop"], [em(F2, "ler"), "alerta"], [em(F2, "barra"), "pop"], [em(F2, "abertos"), "festa"]],
   draw(t, D) { const ht = em(F2, "agá"), cp = em(F2, "cartão"), le = em(F2, "ler"), ba = em(F2, "http"), ab = em(F2, "abertos"); fundoEscuro(t, "#7c2d12"); palavra("HTTP", 560, 90, seg(t, ht, ht + .4), 70); g.save(); camera(t, [[0, 640, 380, 1], [le, 640, 360, 1.06], [ab, 640, 370, 1]]);
     caminho(200, 1080, 400, t); const k = seg(t, cp, le + .6); carta(lerp(240, 1040, k), 340, .85, false, seg(t, cp, cp + .4)); espiao(640, 500, 1, t > le, t); if (t > le) etiqueta("quem pegar no caminho lê", 880, 200, 700, 330, seg(t, le, le + .4));
     navegador(250, 215, 400, 150, "http://", seg(t, ba, ba + .4), { cad: "nao" }, null); g.restore(); if (t > ab) cartaoC("dados abertos", 640, 590, 340, "#fecaca", seg(t, ab, ab + .4));
     caio({ x: 120, y: 610, s: .6, olhar: 1, braco: t > le ? .3 : -.7, bracoE: .3, boca: t > le ? "o" : "riso", pisca: pisca(t) }); } },
 { chip: "HTTPS: CARTA LACRADA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "lacrada"), "pop"], [em(F3, "secure"), "ding"], [em(F3, "embaralhados"), "pop"], [em(F3, "conseguem"), "festa"]],
   draw(t, D) { const lc = em(F3, "lacrada"), se = em(F3, "secure"), ci = em(F3, "cifrados"), co = em(F3, "conseguem"); fundoEscuro(t, "#14532d"); palavra("HTTPS", 560, 90, seg(t, 0.3, .7), 70); g.save(); camera(t, [[0, 640, 380, 1], [se, 640, 340, 1.06], [co, 640, 380, 1]]);
     caminho(200, 1080, 400, t, "#4ade80"); const k = seg(t, lc, lc + 3); carta(lerp(240, 1040, k), 340, .85, true, seg(t, lc, lc + .4)); espiao(640, 500, 1, false, t); if (t > lc + 1.2) emo("❌", 640, 330, 70 * back(cl(seg(t, lc + 1.2, lc + 1.6)))); cadeado(1040, 450, .8, false);
     if (t > se) { etiqueta("secure = seguro (em inglês)", 800, 240, 1020, 410, seg(t, se, se + .4)); } if (t > ci) cartaoC("cifrado = embaralhado", 640, 590, 420, "#bbf7d0", seg(t, ci, ci + .4)); g.restore();
     duda({ x: 120, y: 610, s: .6, olhar: 1, braco: t > co ? -2.6 : -.7, bracoE: t > co ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O CADEADO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "cadeado"), "ding"], [em(F4, "endereço"), "pop"], [em(F4, "barra"), "pop"]],
   draw(t, D) { const ca = em(F4, "cadeado"), en = em(F4, "endereço", 1), ba = em(F4, "barra"); fundoEscuro(t, "#0e7490"); palavra("CADEADO", 560, 90, seg(t, ca, ca + .4), 72); g.save(); camera(t, [[0, 640, 370, 1], [ca, 520, 280, 1.2], [en, 760, 280, 1.2], [ba + 1, 640, 360, 1]]);
     navegador(640, 330, 760, 360, "https://portal.professorwell.com.br", 1, { cad: "ok", hlUrl: t > en }, (x0, y0, w, h) => { g.fillStyle = "#eff6ff"; g.fillRect(x0, y0, w, h); emo("🏫", x0 + w / 2, y0 + h / 2 + 30, 90); });
     if (t > ca) etiqueta("cadeado: conversa cifrada", 380, 430, 395, 240, seg(t, ca, ca + .4)); if (t > en) etiqueta("endereço do site", 900, 430, 880, 240, seg(t, en, en + .4)); g.restore();
     caio({ x: 110, y: 610, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "A PEGADINHA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "pegadinha"), "alerta"], [em(F5, "não"), "ding"], [em(F5, "falso"), "alerta"], [em(F5, "roubar"), "pop"]],
   draw(t, D) { const pe = em(F5, "pegadinha"), na = em(F5, "não"), fa = em(F5, "falso"), ro = em(F5, "roubar"); fundoEscuro(t, "#7f1d1d"); palavra("A PEGADINHA!", 560, 90, seg(t, pe, pe + .4), 66); g.save(); camera(t, [[0, 640, 370, 1], [fa, 640, 340, 1.08]]);
     navegador(520, 350, 560, 320, "https://site-falso", seg(t, 0, .4), { cad: "ok" }, (x0, y0, w, h) => { g.fillStyle = "#fef2f2"; g.fillRect(x0, y0, w, h); emo("🎭", x0 + w / 2, y0 + h / 2 + 30, 100); });
     if (t > na) { emo("🤥", 960, 330, 90 * back(cl(seg(t, na, na + .4)))); xVermelho(520 - 150, 235, 22, seg(t, na, na + .4)); }
     if (t > fa) etiqueta("site falso, mas com cadeado", 980, 520, 700, 420, seg(t, fa, fa + .4)); if (t > ro) emo("💸", 880, 240, 60 * back(cl(seg(t, ro, ro + .3)))); g.restore();
     duda({ x: 110, y: 610, s: .6, olhar: 1, braco: -2.2, bracoE: .3, boca: "o", pisca: pisca(t) }); if (t > na) balao("Cadeado não é prova!", 330, 480, seg(t, na, na + .3)); } },
 { chip: "TRÊS CONFERÊNCIAS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "primeiro"), "pop"], [em(F6, "segundo"), "pop"], [em(F6, "terceiro"), "pop"], [em(F6, "falsos"), "alerta"]],
   draw(t, D) { const p1 = em(F6, "primeiro"), p2 = em(F6, "segundo"), p3 = em(F6, "terceiro"), fa = em(F6, "falsos"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 350, 1], [p2, 640, 340, 1.04], [p3, 640, 350, 1.04]]);
     [["🔒 Confira https e cadeado", "sem eles, a senha viaja aberta", p1], ["🔤 Leia o nome do site, letra por letra", "golpistas trocam uma letra", p2], ["⌨️ Prefira digitar o endereço", "links de mensagens podem levar a sites falsos", p3]].forEach(([a, b, t0], i) => cartaoC(a, 640, 190 + i * 130, 760, ["#fde68a", "#bfdbfe", "#bbf7d0"][i], seg(t, t0, t0 + .4), b)); g.restore();
     caio({ x: 120, y: 610, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1160, y: 610, s: .6, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) }); palavra("ANTES DE DIGITAR A SENHA", 540, 90, seg(t, .3, .7), 40); } },
 { chip: "A LETRA TROCADA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "parecidos"), "pop"], [em(F7, "letra", 1), "alerta"], [em(F7, "falso"), "ding"]],
   draw(t, D) { const pa = em(F7, "parecidos"), le = em(F7, "letra"), tr = em(F7, "trocada"), fa = em(F7, "falso"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 360, 1], [le, 700, 330, 1.08], [fa, 640, 360, 1]]);
     navegador(640, 210, 760, 200, "https://portal.professorwel.com.br", seg(t, 0, .4), { cad: "ok" }, (x0, y0, w, h) => emo("🎭", x0 + w / 2, y0 + h / 2 + 30, 70)); navegador(640, 470, 760, 200, "https://portal.professorwell.com.br", seg(t, pa, pa + .4), { cad: "ok" }, (x0, y0, w, h) => emo("🏫", x0 + w / 2, y0 + h / 2 + 30, 70));
     if (t > tr) etiqueta("faltou uma letra: o l", 1100, 170, 990, 142, seg(t, tr, tr + .4)); if (t > fa) { etq("FALSO", 1120, 260, "#fecaca", seg(t, fa, fa + .4)); etq("VERDADEIRO", 1120, 530, "#bbf7d0", seg(t, fa, fa + .4)); } g.restore();
     duda({ x: 110, y: 610, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: t > tr ? "o" : "riso", pisca: pisca(t) }); lupa(250, 560, 1.1); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "não"), "pop"], [em(F8, "cadeado"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const na = em(F8, "não"), ca = em(F8, "cadeado"), mc = em(F8, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 400, 1], [mc, 640, 380, 1.04]]);
     cadeado(640, 480, 1.4, false); visto(760, 400, 40, seg(t, ca, ca + .4)); if (t > na) emo("🛡️", 480, 400, 80 * back(cl(seg(t, na, na + .4)))); g.restore();
     caio({ x: 200, y: 610, s: .75, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1080, y: 610, s: .75, olhar: -1, braco: t > mc ? -2.6 : -.7, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); robozinho(900, 600, .7, t, true); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "portal"), "pop"], [em(F9, "senha"), "pop"], [em(F9, "link"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["portal", "🏫", "Portal da escola", "começa com https e tem o cadeado"], ["senha", "🎮", "Senha de jogo ou rede", "confira antes de digitar"], ["link", "🔗", "Link parecido", "nome conhecido escrito diferente"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 3º bimestre de 2027 · Missão 2", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 9; i++) CENAS[i].legenda = SIG([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9][i]);

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

/* ===== peças comuns do 9º ano · 2º bim. (Júlia e Rafa) ===== */
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
// cartão de ideia: emoji grande em cima, título e subtítulo embaixo (tudo dentro do fundo)
function ideia(x, y, w, h, e, tit, sub, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.25)"; rr(-w / 2 + 6, -h / 2 + 8, w, h, 20); g.fill(); g.fillStyle = cor || "#fff"; rr(-w / 2, -h / 2, w, h, 20); g.fill(); g.restore();
  emo(e, x, y - h * .1, Math.min(w, h) * .42 * z); g.fillStyle = NAVY; g.textAlign = "center"; { let ft = 24; g.font = `800 ${ft}px ${F}`; while (g.measureText(tit).width > w - 24 && ft > 12) { ft--; g.font = `800 ${ft}px ${F}`; } } g.fillText(tit, x, y + h * .24); if (sub) { let fs = 18; g.font = `600 ${fs}px ${F}`; while (g.measureText(sub).width > w - 24 && fs > 11) { fs--; g.font = `600 ${fs}px ${F}`; } g.fillStyle = "#475569"; g.fillText(sub, x, y + h * .24 + 28); } }
function cartaz(x, y, s, nome, emoji, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.rotate(Math.sin(k * 5) * .05);
  g.fillStyle = "rgba(0,0,0,.3)"; rr(-104, -142, 220, 300, 14); g.fill(); g.fillStyle = "#fde68a"; rr(-110, -150, 220, 300, 14); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 6; rr(-110, -150, 220, 300, 14); g.stroke();
  g.fillStyle = "#7f1d1d"; g.font = `900 28px ${F}`; g.textAlign = "center"; g.fillText("PROCURADO", 0, -108); g.fillStyle = "#fff"; rr(-80, -90, 160, 140, 10); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 4; rr(-80, -90, 160, 140, 10); g.stroke();
  g.restore(); emo(emoji, x, y - 6 * z, 92 * z); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = NAVY; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 100); g.restore(); }
function fundoPiso(t, cor, yPiso, corPiso) { fundoEscuro(t, cor); g.fillStyle = corPiso || "rgba(0,0,0,.35)"; g.fillRect(-400, yPiso || 575, 2080, 400); g.fillStyle = "rgba(255,255,255,.08)"; g.fillRect(-400, yPiso || 575, 2080, 6); }
function janelinha(x, y, w, h, tit, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.3)"; rr(-w / 2 + 5, -h / 2 + 6, w, h, 10); g.fill(); g.fillStyle = "#fff"; rr(-w / 2, -h / 2, w, h, 10); g.fill(); g.fillStyle = cor || "#dc2626"; rr(-w / 2, -h / 2, w, 30, 10); g.fill(); g.fillRect(-w / 2, -h / 2 + 18, w, 12);
  g.fillStyle = "#fff"; g.font = `800 16px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, -h / 2 + 21); g.restore(); }
function lupaG(x, y, s) { lupa(x, y, s); }
function bichinho(x, y, s, t, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor || "#4ade80"; g.strokeStyle = "#166534"; g.lineWidth = 4; for (let i = 4; i >= 0; i--) { const dy = Math.sin(t * 8 + i * 1.1) * 8; g.beginPath(); g.arc(-i * 26, dy, 22 - i * 1.5, 0, 7); g.fill(); g.stroke(); }
  g.fillStyle = "#fff"; g.beginPath(); g.arc(6, -6 + Math.sin(t * 8) * 8, 7, 0, 7); g.arc(20, -6 + Math.sin(t * 8) * 8, 7, 0, 7); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(8, -5 + Math.sin(t * 8) * 8, 3, 0, 7); g.arc(22, -5 + Math.sin(t * 8) * 8, 3, 0, 7); g.fill(); g.restore(); }
/* ===== 9º M3 · Cifra de César ===== */
const AL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fita(x0, y, k, hl, ka) { if (ka <= 0) return; g.save(); g.globalAlpha = cl(ka); const cw = 40; g.fillStyle = "rgba(15,23,42,.85)"; rr(x0 - 14, y - 40, 26 * cw + 28, 168, 18); g.fill();
  for (let i = 0; i < 26; i++) { const x = x0 + i * cw, on = hl && hl.includes(i); g.fillStyle = on ? "#fde047" : "#fff"; rr(x + 2, y - 26, cw - 4, 44, 6); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(AL[i], x + cw / 2, y + 6); }
  for (let j = 0; j < 26; j++) { const pos = (((j - k) % 26) + 26) % 26, x = x0 + pos * cw, on = hl && hl.includes(Math.round(pos)); g.fillStyle = on ? "#4ade80" : "#bae6fd"; rr(x + 2, y + 40, cw - 4, 44, 6); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(AL[j], x + cw / 2, y + 72); }
  g.restore(); }
function pergaminho(x, y, w, h, txt, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.25)"; rr(-w / 2 + 5, -h / 2 + 6, w, h, 14); g.fill(); g.fillStyle = "#fde68a"; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 5; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; let ft = 72; g.font = `900 ${ft}px ${F}`; while (g.measureText(txt).width > w - 40 && ft > 20) { ft -= 4; g.font = `900 ${ft}px ${F}`; } g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
function letraG(l, x, y, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-44, -50, 88, 100, 16); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 4; rr(-44, -50, 88, 100, 16); g.stroke(); g.fillStyle = NAVY; g.font = `900 64px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(l, 0, 4); g.restore(); g.textBaseline = "alphabetic"; }
const F0 = "Cifra de César: a mensagem secreta!",
  F1 = "Na aula, o Rafa passou um bilhete para a Júlia. Só tinha três letras: ó, xis, dê. A Júlia ficou sem entender: que língua é essa? O Rafa riu: é um código secreto! Só quem tem a chave consegue ler.",
  F2 = "Isso é criptografia: a técnica de esconder o sentido de uma mensagem, para que só quem tem a chave consiga ler. Quem pegar o bilhete no meio do caminho vê só uma bagunça de letras.",
  F3 = "Uma das criptografias mais antigas é a cifra de César, usada pelo general romano Júlio César. Nela, cada letra anda algumas casas no alfabeto. E o número de casas é a chave.",
  F4 = "Vamos usar a chave três. O A anda três casas e vira D. O B vira E. O C vira F, e assim por diante. Depois do Z, volta para o começo: o X vira A, o Y vira B, e o Z vira C.",
  F5 = "Agora, cifrar! Cifrar é transformar a mensagem normal em mensagem secreta. Vamos cifrar a palavra LUA. O éle anda três casas e vira ó. O u vira xis. E o a vira dê. A mensagem normal, LUA, é o texto claro. O resultado, OXD, é o texto cifrado!",
  F6 = "E para decifrar? É o caminho de volta: cada letra volta três casas. O ó vira éle, o xis vira u, e o dê vira a. Foi assim que a Júlia leu o bilhete do Rafa: lua!",
  F7 = "Mas a cifra de César tem um ponto fraco. O alfabeto tem vinte e seis letras, então só existem vinte e cinco chaves úteis, porque andar vinte e seis casas volta para a mesma letra.",
  F8 = "Dá para testar todas as chaves em poucos minutos: é um ataque de força bruta! Chave um: sem sentido. Chave dois: nada também. Chave três: lua! Achou!",
  F9 = "Por isso, hoje os computadores usam criptografias muito mais fortes. Os aplicativos de mensagens, por exemplo, usam criptografia para proteger as conversas.",
  F10 = "A Júlia respondeu ao Rafa com outro bilhete cifrado, na mesma chave, e o Rafa decifrou na hora. Só os dois entenderam o segredo. Missão cumprida!",
  F11 = "Onde eu uso isso? Em mensagens secretas entre amigos, nas brincadeiras e nos jogos de enigma. Nos aplicativos de mensagens, que usam uma criptografia muito mais forte. E nos escape rooms e nas caças ao tesouro, que costumam usar a cifra de César.",
  F12 = "Agora é com vocês: abram a Missão 3 no portal!";
const L3 = { 1: F1.replace("três letras: ó, xis, dê", "3 letras: O, X, D"), 4: F4.replace("chave três", "chave 3").replace("anda três casas", "anda 3 casas"), 5: F5.replace("O éle anda três casas e vira ó. O u vira xis. E o a vira dê", "O L anda 3 casas e vira O. O U vira X. E o A vira D"), 6: F6.replace("O ó vira éle, o xis vira u, e o dê vira a", "O O vira L, o X vira U, e o D vira A").replace("volta três", "volta 3").replace("lua!", "LUA!"), 7: F7.replace("vinte e seis letras", "26 letras").replace("vinte e cinco chaves", "25 chaves").replace("vinte e seis casas", "26 casas"), 8: F8.replace("Chave um: sem sentido. Chave dois: nada também. Chave três: lua!", "Chave 1: sem sentido. Chave 2: nada também. Chave 3: LUA!") };

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "misterio"], [1.2, "pop"], [1.8, "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b0764"); g.save(); camera(t, [[0, 640, 300, 1.08], [1.8, 640, 330, 1]]); g.fillStyle = "rgba(255,240,180,.12)"; g.beginPath(); g.moveTo(560, 120); g.lineTo(720, 120); g.lineTo(960, 420); g.lineTo(320, 420); g.closePath(); g.fill();
     const k = seg(t, .6, 1.6); pergaminho(640, 270, 420, 170, k < .5 ? "LUA" : "OXD", seg(t, .3, .8)); emo("🔒", 640 + 270, 280, 60 * back(seg(t, 1.2, 1.7))); emo("🏛️", 370, 280, 70); for (let i = 0; i < 6; i++) { const l = AL[(i * 5 + Math.floor(t * 3)) % 26]; g.globalAlpha = .5; g.fillStyle = "#e9d5ff"; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText(l, 200 + i * 170, 200 + Math.sin(t * 2 + i) * 20); g.globalAlpha = 1; } g.restore();
     abertura(t, "9º ANO · MISSÃO 3", "Cifra de César", "A MENSAGEM", "SECRETA!", 1.9); } },
 { chip: "O BILHETE", fala: F1, legenda: L3[1], sfx: [[.1, "whoosh"], [em(F1, "bilhete"), "pop"], [em(F1, "letras"), "pop"], [em(F1, "língua"), "alerta"], [em(F1, "secreto"), "ding"]],
   draw(t, D) { const bi = em(F1, "bilhete"), le = em(F1, "letras"), li = em(F1, "língua"), se = em(F1, "secreto"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 340, 1], [le, 640, 330, 1.15], [li, 640, 340, 1.05], [se, 640, 340, 1]]);
     rafa({ x: 280, y: 575, s: 1.1, olhar: 1, braco: t > bi ? -1.5 : -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); julia({ x: 1000, y: 575, s: 1.1, olhar: -1, braco: t > li ? -2.3 : -.6, bracoE: .3, boca: t > li ? "o" : "", pisca: pisca(t + .5) });
     if (t > bi) pergaminho(lerp(440, 640, io2(seg(t, bi, bi + .8))), lerp(330, 300, io2(seg(t, bi, bi + .8))), 220, 120, "OXD", 1); g.restore();
     if (t > li && t < se) balao("Que língua é essa?!", 980, 255, seg(t, li, li + .3)); if (t > se) { balao("É um código secreto!", 300, 255, seg(t, se, se + .3)); emo("🤫", 640, 480, 60); } if (t > le) palavra("O X D ?", 640, 130, seg(t, le, le + .4), 64); } },
 { chip: "CRIPTOGRAFIA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "criptografia"), "ding"], [em(F2, "esconder"), "pop"], [em(F2, "chave"), "ding"], [em(F2, "bagunça"), "alerta"]],
   draw(t, D) { const cr = em(F2, "criptografia"), es = em(F2, "esconder"), ch = em(F2, "chave"), ba = em(F2, "bagunça"); fundoEscuro(t, "#4c1d95"); g.save(); camera(t, [[0, 640, 340, 1], [ch, 600, 340, 1.12], [ba, 700, 340, 1.1]]);
     pergaminho(260, 330, 240, 130, "OLÁ", seg(t, es - .6, es - .2)); if (t > es) { seta(390, 330, 530, 330, seg(t, es, es + .5), "#fde68a"); cartaoC("🔒", 640, 330, 160, "#fff", seg(t, es + .2, es + .6)); seta(730, 330, 860, 330, seg(t, es + .6, es + 1), "#fde68a"); pergaminho(990, 330, 240, 130, "RÑD", seg(t, es + .7, es + 1.1)); }
     if (t > ch) { emo("🔑", 640, 480, 70 + Math.sin(t * 5) * 4); } if (t > ba) { emo("🥷", 1000, 520, 70); emo("❓", 1060, 470 + Math.sin(t * 6) * 6, 46); } g.restore();
     palavra("CRIPTOGRAFIA", 640, 110, seg(t, cr, cr + .4), 72); rotulo("só quem tem a CHAVE lê", 640, 165, "#e9d5ff", seg(t, ch, ch + .4)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CIFRA DE CÉSAR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "César"), "ding"], [em(F3, "romano"), "pop"], [em(F3, "casas"), "pop"], [em(F3, "chave"), "ding"]],
   draw(t, D) { const ce = em(F3, "César"), ro = em(F3, "romano"), ca = em(F3, "casas"), ch = em(F3, "chave"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 340, 1], [ro, 640, 340, 1.05], [ca, 700, 340, 1.05], [ch, 640, 340, 1]]);
     emo("🏛️", 200, 300, 150); rafa({ x: 400, y: 575, s: 1.1, camisa: "#b91c1c", olhar: 1, braco: -1.5, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > ro) emo("🌿", 400, 285, 60);
     if (t > ca) { ["A", "B", "C"].forEach((l, i) => { letraG(l, 720 + i * 110, 300, "#fff", seg(t, ca + i * .2, ca + .4 + i * .2)); const k = seg(t, ca + .6 + i * .2, ca + 1 + i * .2); if (k > 0) { letraG(AL[i + 3], 720 + i * 110, 440, "#bbf7d0", k); seta(720 + i * 110, 355, 720 + i * 110, 385, k, "#fde68a"); } }); } g.restore();
     palavra("CIFRA DE CÉSAR", 640, 110, seg(t, ce, ce + .4), 70); if (t > ro) etiqueta("general romano Júlio César", 470, 200, 420, 270, seg(t, ro, ro + .4)); if (t > ch) etiqueta("nº de casas = a CHAVE", 1030, 540, 900, 470, seg(t, ch, ch + .4)); } },
 { chip: "CHAVE 3", fala: F4, legenda: L3[4], sfx: [[.1, "whoosh"], [em(F4, "três"), "ding"], [emE(F4, "A", 1), "pop"], [emE(F4, "Z"), "pop"], [em(F4, "volta"), "whoosh"]],
   draw(t, D) { const tr = em(F4, "três"), ab = emE(F4, "A", 1), vo = em(F4, "volta"), xx = emE(F4, "X"); fundoEscuro(t, "#1e3a8a"); const k = io2(seg(t, tr, tr + 1.4)) * 3;
     g.save(); camera(t, [[0, 640, 330, 1], [ab, 640, 310, 1.1], [vo, 640, 330, 1], [xx, 640, 310, 1.1]]); fita(120, 270, k, t > xx ? [23, 24, 25] : t > ab ? [0, 1, 2] : t > tr + 1.4 ? [0] : [], 1); g.restore();
     palavra("CHAVE 3", 640, 110, seg(t, tr, tr + .4), 70); if (t > ab + .5 && t < xx) etiqueta("A vira D", 640, 560, 340, 430, seg(t, ab + .5, ab + .9)); if (t > xx) etiqueta("depois do Z, volta ao A!", 640, 560, 900, 430, seg(t, xx, xx + .4)); rotulo("letra normal ↑", 640, 175, "#bfdbfe", seg(t, tr, tr + .4)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CIFRAR", fala: F5, legenda: L3[5], sfx: [[.1, "whoosh"], [em(F5, "cifrar"), "ding"], [em(F5, "éle"), "pop"], [em(F5, "xis"), "pop"], [em(F5, "dê"), "pop"], [em(F5, "claro"), "ding"], [em(F5, "cifrado"), "festa"]],
   draw(t, D) { const ci = em(F5, "cifrar"), el = em(F5, "éle"), xi = em(F5, "xis"), de = em(F5, "dê"), cla = em(F5, "claro"), cif = em(F5, "cifrado"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [el, 640, 330, 1.05], [cla, 640, 340, 1]]);
     const L = [["L", "O", el], ["U", "X", xi], ["A", "D", de]]; L.forEach(([a, b, t0], i) => { letraG(a, 420 + i * 220, 250, "#fff", seg(t, ci + .3, ci + .7)); const k = seg(t, t0, t0 + .5); if (k > 0) { seta(420 + i * 220, 305, 420 + i * 220, 365, k, "#fde68a"); letraG(b, 420 + i * 220, 420, "#bbf7d0", k); rotulo("+3 casas", 420 + i * 220 + 100, 340, "#fde68a", k); } });
     if (t > cla) { cartaoC("texto CLARO", 130, 250, 220, "#fff", seg(t, cla, cla + .4)); } if (t > cif) cartaoC("texto CIFRADO", 140, 420, 240, "#bbf7d0", seg(t, cif, cif + .4)); g.restore();
     palavra("CIFRAR", 640, 110, seg(t, ci, ci + .4), 72); julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "DECIFRAR", fala: F6, legenda: L3[6], sfx: [[.1, "whoosh"], [em(F6, "decifrar"), "ding"], [em(F6, "ó"), "pop"], [em(F6, "xis"), "pop"], [em(F6, "dê"), "pop"], [em(F6, "lua"), "festa"]],
   draw(t, D) { const dc = em(F6, "decifrar"), o = em(F6, "ó"), xi = em(F6, "xis"), de = em(F6, "dê"), lu = em(F6, "lua"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 340, 1], [o, 640, 330, 1.05], [lu, 640, 340, 1]]);
     const L = [["O", "L", o], ["X", "U", xi], ["D", "A", de]]; L.forEach(([a, b, t0], i) => { letraG(a, 420 + i * 220, 250, "#bbf7d0", seg(t, dc + .3, dc + .7)); const k = seg(t, t0, t0 + .5); if (k > 0) { seta(420 + i * 220, 305, 420 + i * 220, 365, k, "#fde68a"); letraG(b, 420 + i * 220, 420, "#fff", k); rotulo("−3 casas", 420 + i * 220 + 100, 340, "#fde68a", k); } });
     rafa({ x: 130, y: 575, s: .8, olhar: 1, braco: -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > lu) { julia({ x: 1150, y: 575, s: .9, olhar: -1, braco: -2.4, bracoE: 2.4, boca: "riso", pisca: pisca(t) }); cartaoC("LUA!", 1030, 380, 200, "#fde68a", seg(t, lu, lu + .4)); } g.restore();
     palavra("DECIFRAR = VOLTAR AS CASAS", 640, 110, seg(t, dc, dc + .4), 54); } },
 { chip: "O PONTO FRACO", fala: F7, legenda: L3[7], sfx: [[.1, "whoosh"], [em(F7, "fraco"), "alerta"], [em(F7, "vinte"), "pop"], [em(F7, "chaves"), "ding"], [em(F7, "mesma"), "ding"]],
   draw(t, D) { const fr = em(F7, "fraco"), v1 = em(F7, "vinte"), ch = em(F7, "chaves"), me = em(F7, "mesma"); fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [ch, 640, 330, 1.05], [me, 640, 340, 1]]);
     if (t > v1) { for (let i = 0; i < 26; i++) { const k = seg(t, v1 + i * .05, v1 + .3 + i * .05); const x = 150 + (i % 13) * 82, y = 230 + Math.floor(i / 13) * 100; if (k > 0) { g.save(); g.translate(x, y); g.scale(back(cl(k)), back(cl(k))); g.fillStyle = i === 25 ? "#fecaca" : i === 0 ? "#fff" : "#bbf7d0"; rr(-32, -34, 64, 68, 12); g.fill(); g.restore(); if (k > .6) { g.fillStyle = NAVY; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), x, y + 10); } } } }
     if (t > ch) cartaoC("só 25 chaves úteis", 640, 450, 440, "#fde68a", seg(t, ch, ch + .4)); if (t > me) cartaoC("26 casas = a mesma letra", 640, 555, 460, "#bae6fd", seg(t, me, me + .4)); g.restore();
     palavra("O PONTO FRACO", 640, 110, seg(t, fr, fr + .4), 70); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "FORÇA BRUTA", fala: F8, legenda: L3[8], sfx: [[.1, "whoosh"], [em(F8, "força"), "alerta"], [emE(F8, "um", 1), "pop"], [em(F8, "dois"), "pop"], [em(F8, "três"), "ding"], [em(F8, "Achou"), "festa"]],
   draw(t, D) { const fo = em(F8, "força"), c1 = emE(F8, "um", 1), c2 = em(F8, "dois"), c3 = em(F8, "três"), ac = em(F8, "Achou"); fundoEscuro(t, "#3f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [c1, 640, 330, 1.05], [ac, 640, 340, 1]]);
     pergaminho(260, 240, 260, 120, "OXD", 1); [["CHAVE 1", "NWC", c1, false], ["CHAVE 2", "MVB", c2, false], ["CHAVE 3", "LUA", c3, true]].forEach(([n, r, t0, ok], i) => { const k = seg(t, t0, t0 + .4); if (k > 0) { cartaoC(n + "  →  " + r, 800, 240 + i * 120, 500, ok ? "#bbf7d0" : "#fecaca", k); if (ok) visto(1110, 240 + i * 120, 28, seg(t, c3 + .3, c3 + .7)); else xVermelho(1110, 240 + i * 120, 22, seg(t, t0 + .3, t0 + .6)); } }); g.restore();
     palavra("ATAQUE DE FORÇA BRUTA", 640, 110, seg(t, fo, fo + .4), 56); julia({ x: 120, y: 575, s: .8, olhar: 1, braco: t > ac ? -2.4 : -1.4, bracoE: t > ac ? 2.4 : .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "HOJE É MAIS FORTE", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "hoje"), "ding"], [em(F9, "fortes"), "pop"], [em(F9, "aplicativos"), "pop"], [em(F9, "conversas"), "ding"]],
   draw(t, D) { const ho = em(F9, "hoje"), fo = em(F9, "fortes"), ap = em(F9, "aplicativos"), co = em(F9, "conversas"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [ap, 700, 340, 1.05], [co, 660, 340, 1]]);
     ideia(280, 330, 300, 260, "🏛️", "CIFRA DE CÉSAR", "só 25 chaves", "#fde68a", seg(t, ho, ho + .4)); if (t > fo) { emo("➡️", 640, 350, 80); ideia(1000, 330, 300, 260, "🛡️", "CRIPTOGRAFIA ATUAL", "muito mais forte", "#bbf7d0", seg(t, fo, fo + .4)); }
     if (t > ap) cartaoC("💬🔒 apps de mensagens", 1000, 540, 380, "#fff", seg(t, ap, ap + .4)); g.restore();
     palavra("HOJE: CRIPTOGRAFIA MAIS FORTE", 640, 110, seg(t, ho, ho + .4), 50); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F10, legenda: F10.replace("Só os dois", "Só os 2"), sfx: [[.1, "whoosh"], [em(F10, "respondeu"), "pop"], [em(F10, "decifrou"), "ding"], [em(F10, "entenderam"), "pop"], [em(F10, "Missão"), "festa"]],
   draw(t, D) { const re = em(F10, "respondeu"), de = em(F10, "decifrou"), en = em(F10, "entenderam"), mc = em(F10, "Missão"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 380, 1.05], [de, 640, 380, 1]]);
     julia({ x: 280, y: 575, s: 1.0, olhar: 1, braco: t > re ? -1.5 : -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 1000, y: 575, s: 1.0, olhar: -1, braco: t > mc ? -2.5 : -.6, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t + 1) });
     if (t > re) pergaminho(lerp(440, 840, io2(seg(t, re, re + 1))), 400, 200, 110, t > de ? "OI" : "RL", 1); if (t > de) cartaoC("OI!", 640, 520, 200, "#bbf7d0", seg(t, de, de + .4)); if (t > en) emo("🤫", 640, 300, 50); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "mensagens"), "pop"], [em(F11, "aplicativos"), "pop"], [em(F11, "escape"), "pop"]],
   draw(t, D) { ondeUso(t, F11, [["mensagens", "🤫", "Mensagens secretas:", "entre amigos e enigmas"], ["aplicativos", "💬", "Aplicativos de mensagens:", "criptografia bem mais forte"], ["escape", "🗝️", "Escape rooms:", "cifra de César nas pistas"]]); } },
 { chip: "", fala: F12, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 2º bimestre de 2027 · Missão 3", [JULIA, RAFA]); } }
];

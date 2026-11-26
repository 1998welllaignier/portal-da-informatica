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
/* ===== peças da Missão 3 (Senhas e verificação em duas etapas) ===== */
const SIG = s => s.replace(/um dois três quatro cinco seis/g, "123456").replace(/doze caracteres/g, "12 caracteres").replace(/Pipa, exclamação, Verde, oito, Voa/g, "Pipa!Verde8Voa").replace(/Lago, jogo da velha, Sol, cinco cinco, Peixe/g, "Lago#Sol55Peixe").replace(/\bduas etapas\b/g, "2 etapas").replace(/\btrês tipos\b/g, "3 tipos").replace(/ésse ême ésse/g, "SMS").replace(/\bo pin\b/g, "o PIN");
function cofre(x, y, s, aberto, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#475569"; rr(-100, -90, 200, 180, 16); g.fill(); g.fillStyle = "#334155"; rr(-84, -74, 168, 148, 10); g.fill();
  if (aberto) { g.fillStyle = "#facc15"; rr(-70, -60, 140, 120, 8); g.fill(); emo("💰", 0, 22, 80); g.fillStyle = "#64748b"; g.beginPath(); g.moveTo(-84, -74); g.lineTo(-150, -50); g.lineTo(-150, 90); g.lineTo(-84, 74); g.closePath(); g.fill(); }
  else { g.fillStyle = "#64748b"; rr(-84, -74, 168, 148, 10); g.fill(); g.fillStyle = "#cbd5e1"; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill(); g.strokeStyle = "#475569"; g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.stroke(); g.save(); g.rotate((t || 0) * 1.5); g.fillStyle = "#334155"; g.fillRect(-4, -28, 8, 28); g.restore(); }
  g.restore(); }
function campoSenha(x, y, w, txt, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; rr(-w / 2, -32, w, 64, 14); g.fill(); g.strokeStyle = cor || "#94a3b8"; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `800 32px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZUL; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
const F0 = "Senhas e verificação em duas etapas!",
  F1 = "O Caio criou a senha do jogo com o nome dele e o ano em que nasceu. Um golpista só precisou tentar o nome e o ano, e a conta abriu na hora! Será que dá para criar uma senha melhor?",
  F2 = "Primeiro, a senha fraca. Ela é curta, como um dois três quatro cinco seis. Tem nome, apelido ou data de nascimento. É só números ou só letras. E é a mesma em todos os sites. Por isso, ela é fraca!",
  F3 = "Agora, a senha forte. Ela é comprida: doze caracteres ou mais. Caractere é cada letra, número, símbolo ou espaço. Ela não tem nada pessoal, mistura maiúsculas, minúsculas, números e símbolos, e é uma diferente para cada conta importante.",
  F4 = "Uma dica é a frase-senha: junte palavras que só você imagina e misture com números e símbolos. Pipa, exclamação, Verde, oito, Voa: é longa e fácil de lembrar. Mas é só um exemplo: não use esta! Outro exemplo inventado é Lago, jogo da velha, Sol, cinco cinco, Peixe.",
  F5 = "Agora, a verificação em duas etapas. Além da senha, a conta pede uma segunda prova. Assim, mesmo se alguém descobrir a senha, não entra!",
  F6 = "São três tipos de prova. Algo que você sabe, como a senha ou o pin, que é uma senha curta de números, como a do celular. Algo que você tem, como o código que chega no celular. E algo que você é, como a digital ou o rosto.",
  F7 = "A regra de ouro: o código que chega no celular é só seu. Se alguém pedir esse código, é golpe!",
  F8 = "O Caio trocou a senha por uma forte, usou a verificação em duas etapas e não passou o código para ninguém. Missão cumprida!",
  F9 = "Onde eu uso isso? Ao criar a conta de um jogo ou de um e-mail. Quando chega um código por ésse ême ésse para entrar numa conta. E ao desbloquear o celular com a digital.",
  F10 = "Agora é com vocês: abram a Missão 3 no portal!";
const SENHA_FORTE = "Pipa!Verde8Voa".split("");
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "alerta"], [1.6, "pop"], [2.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 390, 1.05], [2.8, 640, 380, 1]]);
     const ab = t > 1.7; cofre(640, 290, 1, ab, t); campoSenha(310, 300, 250, t > .6 ? "123456" : "", seg(t, .4, .8), ab ? "#ef4444" : "#94a3b8"); emo("🦹", 130, 320, 110 * back(cl(seg(t, .2, .6)))); if (ab) { emo("😈", 940, 260, 90 * back(cl(seg(t, 1.7, 2.1)))); onda(640, 290, ((t - 1.7) * 1.2) % 1, "#facc15"); } g.restore();
     abertura(t, "7º ANO · 3º BIM. · MISSÃO 3", "Senhas e verificação em duas etapas", "SENHA FRACA ABRE A PORTA", "PARA QUALQUER UM!", 2.4); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "nome"), "pop"], [em(F1, "ano"), "pop"], [em(F1, "abriu"), "alerta"], [em(F1, "melhor"), "ding"]],
   draw(t, D) { const no = em(F1, "nome"), an = em(F1, "ano"), ab = em(F1, "abriu"), me = em(F1, "melhor"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 360, 1], [an, 640, 330, 1.08], [ab, 780, 360, 1.05]]);
     campoSenha(640, 250, 400, t > no ? "caio2014" : "", seg(t, 0, .4)); if (t > no) etiqueta("nome", 520, 160, 560, 220, seg(t, no, no + .4)); if (t > an) etiqueta("ano de nascimento", 780, 160, 740, 220, seg(t, an, an + .4));
     cofre(1000, 440, .9, t > ab, t); emo("🦹", 800, 470, 100); g.restore(); caio({ x: 170, y: 590, s: .8, olhar: 1, braco: -.7, bracoE: .3, boca: t > ab ? "o" : "riso", pisca: pisca(t) });
     if (t > ab && t < me) balao("Minha conta abriu!", 330, 350, seg(t, ab, ab + .3)); if (t > me) palavra("SENHA FORTE?", 560, 90, seg(t, me, me + .4), 66); } },
 { chip: "SENHA FRACA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "fraca"), "alerta"], [em(F2, "curta"), "pop"], [em(F2, "nome"), "pop"], [em(F2, "números"), "pop"], [em(F2, "mesma"), "pop"]],
   draw(t, D) { const fr = em(F2, "fraca"), cu = em(F2, "curta"), no = em(F2, "nome"), nu = em(F2, "números"), me = em(F2, "mesma"); fundoEscuro(t, "#7f1d1d"); palavra("SENHA FRACA", 560, 90, seg(t, fr, fr + .4), 70); g.save(); camera(t, [[0, 640, 360, 1], [no, 600, 340, 1.04], [me, 640, 350, 1]]);
     [["Curta: 123456, 2014", cu], ["Nome, apelido ou data", no], ["Só números ou só letras", nu], ["A mesma em todos os sites", me]].forEach(([s, t0], i) => { caixa(560, 220 + i * 84, s, "#fecaca", seg(t, t0, t0 + .4), 520); xVermelho(850, 220 + i * 84, 20, seg(t, t0 + .2, t0 + .5)); });
     cofre(1040, 450, .8, t > cu, t); emo("🦹", 1160, 480, 80); g.restore(); caio({ x: 120, y: 600, s: .62, olhar: 1, braco: -.7, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "SENHA FORTE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "forte"), "ding"], [em(F3, "doze"), "pop"], [em(F3, "caractere"), "ding"], [em(F3, "pessoal"), "pop"], [em(F3, "símbolos"), "pop"]],
   draw(t, D) { const fo = em(F3, "forte"), dz = em(F3, "doze"), ca = em(F3, "caractere"), pe = em(F3, "pessoal"), mi = em(F3, "mistura"); fundoEscuro(t, "#14532d"); palavra("SENHA FORTE", 560, 90, seg(t, fo, fo + .4), 70); g.save(); camera(t, [[0, 640, 360, 1], [ca, 500, 300, 1.1], [pe, 640, 380, 1]]);
     SENHA_FORTE.forEach((c, i) => { const k = seg(t, dz + i * .12, dz + .25 + i * .12), x = 100 + i * 78; g.fillStyle = "#fff"; rr(x - 32, 180, 64, 76, 10); g.fill(); g.strokeStyle = i < 12 ? "#22c55e" : "#facc15"; g.lineWidth = 4; g.stroke(); if (k > 0) { g.fillStyle = NAVY; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText(c, x, 232); } });
     if (t > dz + 1.8) etq("12 caracteres ou mais", 300, 330, "#bbf7d0", seg(t, dz + 1.8, dz + 2.2)); if (t > ca) etiqueta("caractere = 1 letra, número, símbolo ou espaço", 760, 400, 100 + 12 * 78, 262, seg(t, ca, ca + .4)); g.restore();
     [["ABC", "maiúsculas", "#bfdbfe"], ["abc", "minúsculas", "#fde68a"], ["123", "números", "#bbf7d0"], ["#@!", "símbolos", "#fecaca"]].forEach(([a, b, c], i) => cartaoC(a, 200 + i * 290, 500, 250, c, seg(t, mi + i * .3, mi + .4 + i * .3), b)); if (t > pe) { etq("nada pessoal", 640, 590, "#e9d5ff", seg(t, pe, pe + .4)); } } },
 { chip: "FRASE-SENHA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "frase"), "ding"], [em(F4, "Pipa"), "pop"], [em(F4, "não"), "alerta"], [em(F4, "Lago"), "pop"]],
   draw(t, D) { const fr = em(F4, "frase"), pi = em(F4, "Pipa"), nu = em(F4, "não"), la = em(F4, "Lago"); fundoEscuro(t, "#4c1d95"); palavra("FRASE-SENHA", 560, 90, seg(t, fr, fr + .4), 66); g.save(); camera(t, [[0, 640, 360, 1], [pi, 640, 300, 1.08], [la, 640, 380, 1]]);
     const pals = [["Pipa", "!", "Verde", "8", "Voa"]]; campoSenha(640, 250, 560, "Pipa!Verde8Voa", seg(t, pi, pi + .4), "#22c55e"); if (t > pi) etiqueta("longa e fácil de lembrar", 1040, 340, 910, 275, seg(t, pi + .6, pi + 1)); if (t > nu) { placa("só um exemplo: não use esta!", 640, 340, seg(t, nu, nu + .4), "#dc2626", 22); } campoSenha(640, 450, 560, "Lago#Sol55Peixe", seg(t, la, la + .4), "#22c55e"); if (t > la) etq("outro exemplo inventado", 640, 515, "#bbf7d0", seg(t, la, la + .4)); g.restore();
     duda({ x: 120, y: 600, s: .62, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "DUAS ETAPAS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "duas"), "ding"], [em(F5, "senha"), "pop"], [em(F5, "segunda"), "pop"], [em(F5, "não"), "alerta"]],
   draw(t, D) { const du = em(F5, "duas"), se = em(F5, "senha"), sg = em(F5, "segunda"), na = em(F5, "não"); fundoEscuro(t, "#0e7490"); palavra("2 ETAPAS", 560, 90, seg(t, du, du + .4), 70); g.save(); camera(t, [[0, 640, 360, 1], [sg, 700, 350, 1.03]]);
     cofre(900, 400, 1.2, false, t); caixa(580, 250, "1ª prova: senha 🔑", "#bbf7d0", seg(t, se, se + .4), 330); if (t > se + .5) visto(780, 250, 26, seg(t, se + .5, se + .8)); caixa(580, 350, "2ª prova: código 📱", "#fde68a", seg(t, sg, sg + .4), 330); if (t > na) { emo("🦹", 150, 500, 100); xVermelho(790, 350, 24, seg(t, na, na + .3)); } g.restore();
     if (t > na) balao("Não consigo entrar!", 210, 420, seg(t, na, na + .3)); caio({ x: 1160, y: 600, s: .62, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "SABE, TEM OU É", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "sabe"), "ding"], [em(F6, "tem"), "ding"], [em(F6, "é"), "ding"], [em(F6, "pin"), "pop"]],
   draw(t, D) { const sa = em(F6, "sabe"), pn = em(F6, "pin"), te = em(F6, "tem"), eu = em(F6, "é", 1); fundoEscuro(t, "#312e81"); palavra("SABE, TEM OU É", 560, 90, seg(t, .3, .7), 60); g.save(); camera(t, [[0, 640, 360, 1], [eu, 640, 350, 1.04]]);
     [["🧠", "Algo que você SABE", "a senha, o PIN", sa, 250], ["📱", "Algo que você TEM", "o código no celular", te, 640], ["👆", "Algo que você É", "a digital, o rosto", eu, 1030]].forEach(([e, a, b, t0, x]) => { const k = seg(t, t0 - .1, t0 + .3); if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 340); g.scale(z, z); g.fillStyle = "#fff"; rr(-170, -140, 340, 280, 22); g.fill(); g.restore(); emo(e, x, 320, 90 * z); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "center"; g.fillText(a, x, 400); g.font = `600 19px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 435); });
     if (t > pn) etiqueta("PIN: senha curta de números", 250, 170, 250, 200, seg(t, pn, pn + .4)); g.restore(); duda({ x: 120, y: 610, s: .55, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "REGRA DE OURO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "ouro"), "ding"], [em(F7, "pedir"), "alerta"], [em(F7, "golpe"), "alerta"]],
   draw(t, D) { const ou = em(F7, "ouro"), so = em(F7, "só"), pe = em(F7, "pedir"), go = em(F7, "golpe"); fundoEscuro(t, "#7f1d1d"); palavra("REGRA DE OURO", 560, 90, seg(t, ou, ou + .4), 66); g.save(); camera(t, [[0, 640, 360, 1], [pe, 640, 340, 1.06]]);
     celular(450, 380, .95, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("Seu código", 0, -60); g.font = `800 30px ${F}`; g.fillText("• • • • • •", 0, 0); emo("🔒", 0, 70, 50); }); etiqueta("só seu!", 450, 160, 450, 210, seg(t, so, so + .4));
     emo("🦹", 900, 400, 120 * back(cl(seg(t, pe - .3, pe)))); if (t > pe) { balao("Me manda o código!", 840, 300, seg(t, pe, pe + .3)); xVermelho(640, 400, 40, seg(t, go, go + .3)); } g.restore(); if (t > go) palavra("É GOLPE!", 900, 560, seg(t, go, go + .4), 64);
     duda({ x: 130, y: 610, s: .62, olhar: 1, braco: t > pe ? -2.2 : .3, bracoE: .3, boca: t > pe ? "o" : "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "forte"), "pop"], [em(F8, "duas"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const fo = em(F8, "forte"), du = em(F8, "duas"), mc = em(F8, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 400, 1], [mc, 640, 380, 1.04]]);
     cofre(640, 470, 1.2, false, t); campoSenha(640, 290, 340, "Pipa!Verde8Voa", seg(t, fo, fo + .4), "#22c55e"); visto(860, 290, 30, seg(t, fo + .3, fo + .6)); if (t > du) emo("📱", 450, 430, 70 * back(cl(seg(t, du, du + .3)))); g.restore();
     caio({ x: 190, y: 610, s: .75, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1090, y: 610, s: .75, olhar: -1, braco: t > mc ? -2.6 : -.7, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); robozinho(900, 600, .7, t, true); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "jogo"), "pop"], [em(F9, "ésse"), "pop"], [em(F9, "digital"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["jogo", "🎮", "Conta de jogo ou e-mail", "crie uma senha forte"], ["ésse", "💬", "Código por SMS", "para entrar numa conta"], ["digital", "👆", "Desbloquear o celular", "com a digital"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 3º bimestre de 2027 · Missão 3", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 9; i++) CENAS[i].legenda = SIG([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9][i]);

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
/* ===== 9º M4 · Criptografia hoje: chaves e HTTPS ===== */
function estrada(y) { g.fillStyle = "#334155"; g.fillRect(-300, y - 40, 2200, 80); g.fillStyle = "#facc15"; for (let x = -300; x < 1700; x += 90) g.fillRect(x, y - 3, 50, 6); }
function caixaM(x, y, s, fechada, msg, treme) { g.save(); g.translate(x + (treme ? Math.sin(treme * 50) * 4 : 0), y); g.scale(s, s); g.fillStyle = "#b45309"; rr(-60, -36, 120, 76, 10); g.fill(); g.strokeStyle = "#78350f"; g.lineWidth = 5; rr(-60, -36, 120, 76, 10); g.stroke(); g.fillStyle = "#92400e"; rr(-66, -52, 132, 26, 8); g.fill(); g.restore();
  if (msg) emo(msg, x, y + 18 * s, 44 * s); cadeado(x, y - 6 * s, .45 * s, !fechada); }
function barraNav(x, y, w, url, ok, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.3)"; rr(-w / 2 + 5, -27 + 6, w, 54, 27); g.fill(); g.fillStyle = "#fff"; rr(-w / 2, -27, w, 54, 27); g.fill(); g.strokeStyle = ok ? "#16a34a" : "#dc2626"; g.lineWidth = 5; rr(-w / 2, -27, w, 54, 27); g.stroke(); g.restore();
  emo(ok ? "🔒" : "⚠️", x - w / 2 * z + 34 * z, y + 10 * z, 30 * z); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText(url, -w / 2 + 66, 8); g.restore(); }
const F0 = "Criptografia hoje: chaves e agá tê tê pê ésse!",
  F1 = "O Rafa entrou numa loja on-line e digitou a senha. A Júlia perguntou: será que alguém no meio do caminho consegue ver isso? Será que os dados viajam seguros?",
  F2 = "Hoje, toda vez que você entra num site com senha, os dados viajam cifrados. Quem interceptar, ou seja, pegar a mensagem no meio do caminho, só vê uma bagunça de letras.",
  F3 = "Mas como o site e o Rafa combinam isso sem ninguém ver? Com um par de chaves: a chave pública e a chave privada. Vamos ver o passo a passo, com a ideia do cadeado aberto.",
  F4 = "Primeiro passo: o site distribui cadeados abertos para todo mundo. Esses cadeados abertos são a chave pública.",
  F5 = "Segundo passo: você coloca a sua mensagem numa caixa e fecha com o cadeado do site. Terceiro: a caixa viaja pela internet, e ninguém consegue abrir no caminho.",
  F6 = "Quarto passo: só o site tem a chave privada, que abre o cadeado. Qualquer pessoa pode fechar o cadeado, mas só o dono da chave privada consegue abrir.",
  F7 = "Agora, olhe o endereço do site. Se ele começa com agá tê tê pê, os dados viajam sem criptografia. Se começa com agá tê tê pê ésse e tem um cadeado, os dados viajam cifrados. O S é de secure, que quer dizer seguro.",
  F8 = "Mas atenção! O cadeado diz que a conversa com o site é cifrada, mas não garante que o site é honesto. Um site falso também pode ter cadeado. Confira sempre o nome do site!",
  F9 = "Nos aplicativos de mensagens existe a criptografia de ponta a ponta: só quem manda e quem recebe conseguem ler. Nem a empresa do aplicativo lê.",
  F10 = "O Rafa conferiu o cadeado e o nome da loja, e só então digitou a senha. A Júlia sorriu: dados cifrados, caminho tranquilo. Missão cumprida!",
  F11 = "Onde eu uso isso? No site do banco e nas lojas on-line: confira o agá tê tê pê ésse e o cadeado. Nos aplicativos de mensagens com criptografia de ponta a ponta. E no portal da escola, cujo endereço começa com agá tê tê pê ésse.",
  F12 = "Agora é com vocês: abram a Missão 4 no portal!";
const L4 = { 0: F0.replace("agá tê tê pê ésse", "HTTPS"), 7: F7.replace("agá tê tê pê ésse", "HTTPS").replace("agá tê tê pê", "HTTP"), 11: F11.replace(/agá tê tê pê ésse/g, "HTTPS") };

const CENAS = [
 { chip: "", fala: F0, legenda: L4[0], sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "ding"], [1.8, "festa"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 300, 1.08], [1.8, 640, 330, 1]]); g.fillStyle = "rgba(255,240,180,.12)"; g.beginPath(); g.moveTo(560, 120); g.lineTo(720, 120); g.lineTo(960, 420); g.lineTo(320, 420); g.closePath(); g.fill();
     const ab = t < 1.3; cadeado(640, 300, 1.9, ab); emo("🔑", 940, 300 + Math.sin(t * 3) * 12, 80); g.restore();
     abertura(t, "9º ANO · MISSÃO 4", "Criptografia hoje: chaves e HTTPS", "O SEGREDO DO", "CADEADO ABERTO!", 1.9); } },
 { chip: "A DÚVIDA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "loja"), "pop"], [em(F1, "senha"), "tec"], [em(F1, "meio"), "alerta"], [em(F1, "seguros"), "ding"]],
   draw(t, D) { const lo = em(F1, "loja"), se = em(F1, "senha"), me = em(F1, "meio"), sg = em(F1, "seguros"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 340, 1], [se, 560, 340, 1.12], [me, 760, 330, 1.05], [sg, 700, 340, 1]]);
     monitor(560, 420, 1.2, (x, y, w, h) => { g.fillStyle = "#f8fafc"; g.fillRect(x, y, w, h); g.fillStyle = "#16a34a"; g.fillRect(x, y, w, 30); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("🛒 LOJA ON-LINE", x + w / 2, y + 22); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText("senha: " + "•".repeat(Math.min(8, Math.floor(Math.max(0, t - se) * 3))), x + 24, y + 100); });
     rafa({ x: 280, y: 575, s: 1.1, olhar: 1, braco: -1.2, bracoE: -1.2, boca: "riso", pisca: pisca(t) }); if (t > me) { julia({ x: 1000, y: 575, s: 1.1, olhar: -1, braco: -2.2, bracoE: .3, boca: "o", pisca: pisca(t + .5) }); emo("🥷", 1170, 500, 70); emo("👀", 1170, 440 + Math.sin(t * 6) * 4, 40); } g.restore();
     if (t > me && t < sg) balao("Alguém vê isso?", 980, 255, seg(t, me, me + .3)); if (t > sg) palavra("OS DADOS VIAJAM SEGUROS?", 640, 130, seg(t, sg, sg + .4), 48); } },
 { chip: "DADOS CIFRADOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "cifrados"), "ding"], [em(F2, "interceptar"), "alerta"], [em(F2, "bagunça"), "pop"]],
   draw(t, D) { const ci = em(F2, "cifrados"), ic = em(F2, "interceptar"), ba = em(F2, "bagunça"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [ic, 640, 380, 1.15], [ba + 1, 640, 340, 1]]); estrada(430);
     celular(140, 330, .75, () => { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("senha", 0, 0); }); rack(1130, 520, 1.4, t);
     const p = (t * .22) % 1, x = lerp(240, 1010, p); g.fillStyle = "#fff7d6"; rr(x - 70, 380, 140, 56, 10); g.fill(); g.strokeStyle = "#b45309"; g.lineWidth = 4; rr(x - 70, 380, 140, 56, 10); g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(t > ci ? "x7#Qk9" : "senha", x, 416);
     if (t > ic) { emo("🥷", 640, 300 + Math.sin(t * 4) * 6, 100); emo("👀", 700, 250, 40); } g.restore();
     palavra("DADOS CIFRADOS", 640, 110, seg(t, ci, ci + .4), 70); if (t > ic) etiqueta("interceptar = pegar no meio do caminho", 640, 200, 640, 290, seg(t, ic, ic + .4)); if (t > ba) balao("Só vejo bagunça!", 1010, 290, seg(t, ba, ba + .3)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "UM PAR DE CHAVES", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "combinam"), "pop"], [em(F3, "pública"), "ding"], [em(F3, "privada"), "ding"], [em(F3, "cadeado"), "pop"]],
   draw(t, D) { const co = em(F3, "combinam"), pu = em(F3, "pública"), pr = em(F3, "privada"), ca = em(F3, "cadeado"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [pu, 500, 340, 1.1], [pr, 780, 340, 1.1], [ca, 640, 340, 1]]);
     ideia(300, 330, 340, 280, "🔓", "CHAVE PÚBLICA", "todos podem ter · FECHA", "#bbf7d0", seg(t, pu, pu + .4)); ideia(980, 330, 340, 280, "🗝️", "CHAVE PRIVADA", "só do dono · ABRE", "#fecaca", seg(t, pr, pr + .4)); if (t > co) emo("🔑", 640, 330 + Math.sin(t * 4) * 8, 100); if (t > ca) cadeado(640, 460, 1, true); g.restore();
     palavra("UM PAR DE CHAVES", 640, 110, seg(t, co, co + .4), 66); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "PASSO 1 · CADEADOS ABERTOS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Primeiro"), "ding"], [em(F4, "distribui"), "pop"], [em(F4, "chave"), "ding"]],
   draw(t, D) { const pa = em(F4, "Primeiro"), di = em(F4, "distribui"), ch = em(F4, "chave"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1], [di, 700, 340, 1.1], [ch, 640, 340, 1]]);
     rack(180, 520, 1.5, t); for (let i = 0; i < 5; i++) { const k = seg(t, di + i * .25, di + 1.2 + i * .25); if (k > 0) { const x = lerp(260, 600 + i * 150, io2(k)), y = lerp(380, 300 + (i % 2) * 110, io2(k)) - Math.sin(k * Math.PI) * 60; cadeado(x, y, .8, true); } } ["#ef4444", "#22c55e", "#3b82f6", "#a855f7", "#f59e0b"].forEach((c2, i) => { if (t > di + 1) pessoa(600 + i * 150, 540 + (i % 2) * 0, 1.2, c2); }); g.restore();
     palavra("PASSO 1", 640, 110, seg(t, pa, pa + .4), 72); if (t > ch) etiqueta("cadeado aberto = CHAVE PÚBLICA", 640, 190, 700, 300, seg(t, ch, ch + .4)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "PASSOS 2 E 3 · CAIXA FECHADA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Segundo"), "ding"], [em(F5, "fecha"), "click"], [em(F5, "Terceiro"), "ding"], [em(F5, "viaja"), "whoosh"], [em(F5, "ninguém"), "alerta"]],
   draw(t, D) { const se = em(F5, "Segundo"), fe = em(F5, "fecha"), te = em(F5, "Terceiro"), vi = em(F5, "viaja"), ni = em(F5, "ninguém"); fundoEscuro(t, "#3b0764"); g.save(); camera(t, [[0, 640, 340, 1], [fe, 460, 340, 1.05], [vi, 700, 340, 1.05], [ni, 760, 340, 1.05]]); estrada(470);
     rafa({ x: 240, y: 575, s: .9, olhar: 1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); const mv = io2(seg(t, vi, vi + 2.2)), x = t > vi ? lerp(330, 1000, mv) : 330; caixaM(x, 400, 1.3, t > fe, t > se ? "✉️" : "", t > ni ? t : 0);
     if (t > fe && t < vi) { cadeado(330, 300 - (1 - seg(t, fe, fe + .4)) * 60, .7, false); } rack(1150, 540, 1.3, t); if (t > ni) { emo("🥷", 700, 330, 90); xVermelho(700, 300, 40, seg(t, ni, ni + .4)); } g.restore();
     palavra(t > te ? "PASSO 3" : "PASSO 2", 640, 110, seg(t, se, se + .4), 72); if (t > se && t < fe) etiqueta("mensagem na caixa", 640, 210, 400, 380, seg(t, se, se + .4)); if (t > fe && t < vi) etiqueta("fecha com o cadeado do site", 700, 210, 360, 330, seg(t, fe, fe + .4)); if (t > ni) etiqueta("ninguém abre no caminho", 640, 200, 680, 300, seg(t, ni, ni + .4)); julia({ x: 1190, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "PASSO 4 · CHAVE PRIVADA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "Quarto"), "ding"], [em(F6, "privada"), "ding"], [em(F6, "fechar"), "pop"], [em(F6, "abrir"), "ding"]],
   draw(t, D) { const qu = em(F6, "Quarto"), pv = em(F6, "privada"), fc = em(F6, "fechar"), ab = em(F6, "abrir"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [pv, 800, 340, 1.1], [ab, 640, 340, 1]]);
     rack(1000, 540, 1.5, t); caixaM(600, 400, 1.3, t < ab, t > ab ? "✉️" : "", 0); if (t > pv) { emo("🗝️", 840 - (t > ab ? Math.min(1, (t - ab) * 2) * 140 : 0), 330, 80); } if (t > ab) { visto(600, 300, 28, seg(t, ab, ab + .4)); }
     if (t > fc) { ["🧑", "👩", "🧒"].forEach((e, i) => { emo(e, 160 + i * 110, 330, 50); emo("🔓", 160 + i * 110, 400, 36); }); } g.restore();
     palavra("PASSO 4", 640, 110, seg(t, qu, qu + .4), 72); if (t > pv) etiqueta("CHAVE PRIVADA: só do site", 1030, 210, 900, 310, seg(t, pv, pv + .4)); if (t > fc && t < ab) etiqueta("qualquer um FECHA", 320, 210, 240, 300, seg(t, fc, fc + .4)); if (t > ab) etiqueta("só o dono ABRE", 640, 210, 600, 300, seg(t, ab, ab + .4)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "HTTP × HTTPS", fala: F7, legenda: L4[7], sfx: [[.1, "whoosh"], [em(F7, "agá"), "pop"], [em(F7, "criptografia"), "alerta"], [em(F7, "cadeado"), "ding"], [em(F7, "secure"), "ding"]],
   draw(t, D) { const ag = em(F7, "agá"), cr = em(F7, "criptografia"), ca = em(F7, "cadeado"), se = em(F7, "secure"); fundoEscuro(t, "#1e293b"); g.save(); camera(t, [[0, 640, 340, 1], [cr, 640, 280, 1.08], [ca, 640, 400, 1.08], [se, 640, 340, 1]]);
     barraNav(640, 260, 620, "http://www.exemplo.com", false, seg(t, ag, ag + .4)); if (t > cr) cartaoC("sem criptografia: todo mundo lê", 640, 350, 620, "#fecaca", seg(t, cr, cr + .4));
     if (t > ca - .5) barraNav(640, 480, 620, "https://www.exemplo.com", true, seg(t, ca - .5, ca)); if (t > ca) cartaoC("cifrados: S de secure (seguro)", 640, 570, 620, "#bbf7d0", seg(t, ca, ca + .4)); g.restore();
     palavra("HTTP × HTTPS", 640, 110, seg(t, ag, ag + .4), 70); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CUIDADO COM O NOME", fala: F8, sfx: [[.1, "alerta"], [em(F8, "cadeado"), "ding"], [em(F8, "honesto"), "alerta"], [em(F8, "falso"), "alerta"], [em(F8, "nome"), "ding"]],
   draw(t, D) { const ca = em(F8, "cadeado"), ho = em(F8, "honesto"), fa = em(F8, "falso"), no = em(F8, "nome", 1); fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [fa, 640, 300, 1.12], [no, 640, 300, 1.1]]);
     barraNav(640, 270, 640, "https://www.banc0-seguro.com", true, seg(t, ca, ca + .4)); if (t > ho) cartaoC("cadeado ≠ site honesto", 640, 400, 560, "#fde68a", seg(t, ho, ho + .4)); if (t > fa) { emo("🚩", 1040, 270, 60); janelinha(1060, 500, 260, 90, "SITE FALSO", "#dc2626", seg(t, fa, fa + .4)); }
      g.restore(); palavra("CONFIRA O NOME DO SITE!", 640, 110, seg(t, ca, ca + .4), 56); if (t > no) etiqueta("banc0 com ZERO!", 960, 400, 720, 290, seg(t, no, no + .4)); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: t > no ? -2.2 : -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "PONTA A PONTA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "ponta"), "ding"], [em(F9, "manda"), "pop"], [em(F9, "recebe"), "pop"], [em(F9, "empresa"), "alerta"]],
   draw(t, D) { const po = em(F9, "ponta"), ma = em(F9, "manda"), re = em(F9, "recebe"), em2 = em(F9, "empresa"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [ma, 400, 340, 1.1], [re, 880, 340, 1.1], [em2, 640, 340, 1]]);
     celular(220, 340, 1.0, () => { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#16a34a"; rr(-50, -40, 100, 50, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("Oi! 🔒", 0, -8); }); celular(1060, 340, 1.0, () => { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); if (t > re) { g.fillStyle = "#fff"; rr(-50, -40, 100, 50, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("Oi! 👀", 0, -8); } });
     if (t > ma) { const p = seg(t, ma, re + .6); emo("🔒", lerp(300, 980, p), 340, 50); } if (t > em2) { emo("🏢", 640, 220, 80); emo("👁️", 640, 330, 50); xVermelho(640, 320, 36, seg(t, em2, em2 + .4)); } g.restore();
     palavra("CRIPTOGRAFIA DE PONTA A PONTA", 640, 110, seg(t, po, po + .4), 48); if (t > em2) etiqueta("nem a empresa lê", 900, 520, 700, 360, seg(t, em2, em2 + .4)); julia({ x: 640, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "conferiu"), "click"], [em(F10, "senha"), "tec"], [em(F10, "cifrados"), "ding"], [em(F10, "Missão"), "festa"]],
   draw(t, D) { const co = em(F10, "conferiu"), se = em(F10, "senha"), ci = em(F10, "cifrados"), mc = em(F10, "Missão"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 380, 1.05], [ci, 640, 380, 1]]);
     barraNav(640, 300, 600, "https://www.exemplo.com", true, seg(t, co, co + .4)); rafa({ x: 300, y: 575, s: 1.0, olhar: 1, braco: t > se ? -1.2 : -.6, bracoE: t > se ? -1.2 : .3, boca: "riso", pisca: pisca(t) }); julia({ x: 980, y: 575, s: 1.0, olhar: -1, braco: t > mc ? -2.5 : -.6, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t + 1) });
     if (t > se) cartaoC("senha: ••••••••", 640, 430, 380, "#fff", seg(t, se, se + .4)); if (t > ci) { visto(900, 430, 30, seg(t, ci, ci + .4)); } g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F11, legenda: L4[11], sfx: [[.1, "whoosh"], [em(F11, "banco"), "pop"], [em(F11, "aplicativos"), "pop"], [em(F11, "portal"), "pop"]],
   draw(t, D) { ondeUso(t, F11, [["banco", "🏦", "Banco e lojas on-line:", "confira o https e o cadeado"], ["aplicativos", "💬", "Aplicativos de mensagens:", "criptografia de ponta a ponta"], ["portal", "🏫", "Portal da escola:", "o endereço começa com https"]]); } },
 { chip: "", fala: F12, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 2º bimestre de 2027 · Missão 4", [JULIA, RAFA]); } }
];

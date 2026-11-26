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
/* ===== 9º M2 · Engenharia social, força bruta e DDoS ===== */
const MAE = { camisa: "#ec4899", cabelo: "longo" }, mae = o => boneco(Object.assign({}, MAE, o));
function cofre(x, y, s, txt, aberto, tremer) { g.save(); g.translate(x + (tremer ? Math.sin(tremer * 40) * 4 : 0), y); g.scale(s, s); g.fillStyle = "#475569"; rr(-150, -130, 300, 260, 22); g.fill(); g.strokeStyle = "#1e293b"; g.lineWidth = 8; rr(-150, -130, 300, 260, 22); g.stroke();
  g.fillStyle = "#0f172a"; rr(-110, -100, 220, 90, 12); g.fill(); g.fillStyle = aberto ? "#4ade80" : "#fde047"; g.font = `900 64px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, -30); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, 62, 38, 0, 7); g.fill(); g.strokeStyle = "#1e293b"; g.lineWidth = 6; g.stroke(); g.restore(); emo(aberto ? "🔓" : "🔒", x, y + 80 * s, 36 * s); }
function wifi(x, y, k) { if (k <= 0) return; g.globalAlpha = cl(k); emo("📶", x, y, 40); g.globalAlpha = 1; }
const F0 = "Engenharia social, força bruta e DDoS: três ataques!",
  F1 = "A mãe do Rafa recebeu uma mensagem no celular: oi, mãe, troquei de número, me manda um Pix. O Rafa estava do lado dela e levou um susto: mãe, eu não troquei de número! Isso é golpe!",
  F2 = "Isso se chama engenharia social: enganar uma pessoa para ela mesma entregar dados, senhas ou dinheiro. Aqui, o criminoso não precisa de programa nenhum. Ele conta com a confiança da vítima.",
  F3 = "Um tipo de engenharia social é o phishing, que parece com fishing, pescaria em inglês. É uma mensagem ou um site falso, que imita um banco, uma loja ou a escola, e serve de isca. Por exemplo: sua conta será bloqueada, clique aqui!",
  F4 = "Como reconhecer o golpe? Fique de olho nos sinais: pressa, como agora ou só hoje. Prêmio fácil. Pedido de código, senha ou dinheiro. Número ou endereço estranho. E erros de português.",
  F5 = "E guarde a regra de ouro: banco, escola e empresas sérias nunca pedem senha ou código por mensagem. Na dúvida, ligue para o número oficial da pessoa ou da empresa.",
  F6 = "Agora, o segundo ataque: a força bruta. Um programa tenta todas as senhas possíveis, uma por uma, até acertar. Ele testa zero zero zero zero, depois zero zero zero um, zero zero zero dois… até achar o PIN!",
  F7 = "Quantas senhas existem num PIN de quatro números? De zero zero zero zero até nove nove nove nove: dez mil. Cada senha possível é uma combinação, e um programa testa tudo rapidinho. Já uma senha longa, com letras, números e símbolos, tem tantas combinações que levaria anos.",
  F8 = "Muitos sistemas também bloqueiam depois de várias tentativas erradas, como o celular. Assim, o programa de força bruta não consegue testar tudo.",
  F9 = "O terceiro ataque é o dê dê ó ésse. A sigla vem do inglês Distributed Denial of Service, que quer dizer negação de serviço distribuída. Milhares de computadores acessam um site ao mesmo tempo, e ele cai!",
  F10 = "Imagine o site de uma loja no dia da promoção: de repente, fora do ar! Mas calma: quando um site cai num dia de muito acesso, pode ser excesso de visitas normais ou um ataque.",
  F11 = "A mãe do Rafa respirou fundo e ligou para o número de sempre do filho. Ele atendeu, tranquilo: não mandei mensagem nenhuma! O Pix não saiu, e o golpe falhou. Missão cumprida!",
  F12 = "Onde eu uso isso? A mensagem do parente com número novo pedindo dinheiro é engenharia social. O bloqueio do celular depois de várias senhas erradas protege contra a força bruta. E quando um site cai num dia de muito acesso, pode ser excesso de visitas ou um ataque dê dê ó ésse.",
  F13 = "Agora é com vocês: abram a Missão 2 no portal!";
const L2 = { 0: F0.replace("DDoS", "DDoS"), 6: F6.replace("zero zero zero zero, depois zero zero zero um, zero zero zero dois", "0000, depois 0001, 0002"), 7: F7.replace("quatro números", "4 números").replace("De zero zero zero zero até nove nove nove nove: dez mil", "De 0000 até 9999: 10.000"), 9: F9.replace("dê dê ó ésse", "DDoS"), 12: F12.replace("dê dê ó ésse", "DDoS") };

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "alerta"], [1.8, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0c4a6e"); g.save(); camera(t, [[0, 640, 280, 1.08], [1.8, 640, 320, 1]]);
     const gg = g.createLinearGradient(0, 330, 0, 470); gg.addColorStop(0, "rgba(56,189,248,.55)"); gg.addColorStop(1, "rgba(3,105,161,.8)"); g.fillStyle = gg; g.fillRect(-300, 330, 1900, 140);
     for (let i = 0; i < 8; i++) { g.strokeStyle = "rgba(255,255,255,.4)"; g.lineWidth = 3; g.beginPath(); g.arc(100 + i * 160, 345 + Math.sin(t * 2 + i) * 3, 40, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); }
     emo("🎣", 900, 230, 130); g.strokeStyle = "#e2e8f0"; g.lineWidth = 3; const hy = 300 + Math.sin(t * 3) * 14; g.beginPath(); g.moveTo(840, 190); g.quadraticCurveTo(740, 190, 650, hy - 50); g.stroke();
     celular(650, hy + 20, .45, () => { g.fillStyle = "#fde047"; g.fillRect(-70, -146, 140, 292); g.fillStyle = NAVY; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText("🎁", 0, 14); });
     emo("🐟", 470 + Math.sin(t * 2) * 30, 400 + Math.sin(t * 3) * 10, 70); emo("🐟", 820, 410 - Math.abs(Math.sin(t * 2.5)) * 60, 56); g.restore();
     abertura(t, "9º ANO · MISSÃO 2", "Engenharia social, força bruta e DDoS", "NÃO MORDA", "A ISCA!", 1.9); } },
 { chip: "O GOLPE", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "mensagem"), "pop"], [em(F1, "Pix"), "alerta"], [em(F1, "susto"), "misterio"], [em(F1, "golpe"), "ding"]],
   draw(t, D) { const me = em(F1, "mensagem"), px = em(F1, "Pix"), su = em(F1, "susto"), go = em(F1, "golpe"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 340, 1], [px, 600, 330, 1.12], [su, 760, 340, 1.05], [go, 700, 340, 1]]);
     mae({ x: 320, y: 575, s: 1.1, olhar: 1, braco: -1.3, bracoE: -1.3, boca: t > px ? "o" : "riso", pisca: pisca(t) }); celular(470, 330, .9, () => { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#16a34a"; rr(-56, -90, 112, 60, 10); g.fill(); g.fillStyle = "#fff"; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText("💬 Oi, mãe!", 0, -52); });
     cartaoC("Oi, mãe! Troquei de número", 715, 400, 410, "#bbf7d0", seg(t, me, me + .4), "me manda um Pix 💸"); if (t > px) emo("🚨", 560, 250 + Math.sin(t * 10) * 5, 60);
     if (t > su) rafa({ x: 1000, y: 575, s: 1.1, olhar: -1, braco: -2.4, bracoE: 2.4, boca: "o", pisca: pisca(t) }); g.restore();
     if (t > su && t < go) balao("Eu não troquei de número!", 1000, 255, seg(t, su, su + .3)); if (t > go) palavra("GOLPE!", 640, 130, seg(t, go, go + .4), 80); } },
 { chip: "ENGENHARIA SOCIAL", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "engenharia"), "ding"], [em(F2, "dados"), "pop"], [em(F2, "dinheiro"), "pop"], [em(F2, "confiança"), "alerta"]],
   draw(t, D) { const en = em(F2, "engenharia"), da = em(F2, "dados"), di = em(F2, "dinheiro"), co = em(F2, "confiança"); fundoPiso(t, "#4c1d95", 575, "#2e1065"); g.save(); camera(t, [[0, 640, 340, 1], [da, 640, 340, 1.12], [co, 640, 340, 1]]);
     mae({ x: 300, y: 575, s: 1.1, olhar: 1, braco: -.6, bracoE: .3, boca: t > co ? "o" : "riso", pisca: pisca(t) }); emo("🕵️", 1000, 470, 130);
     ["🔑", "💳", "💰"].forEach((e, i) => { const t0 = da + i * .6; if (t > t0) { const p = ((t - t0) * .7) % 1; g.globalAlpha = Math.sin(p * Math.PI); emo(e, lerp(380, 940, p), 400 - Math.sin(p * Math.PI) * 90, 50); g.globalAlpha = 1; } }); g.restore();
     palavra("ENGENHARIA SOCIAL", 640, 110, seg(t, en, en + .4), 64); rotulo("enganar a PESSOA", 640, 165, "#e9d5ff", seg(t, en + .3, en + .7)); if (t > da) etiqueta("ela mesma entrega", 640, 250, 600, 380, seg(t, da, da + .4)); if (t > co) etiqueta("conta com a confiança", 960, 290, 1000, 400, seg(t, co, co + .4));
     julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "PHISHING", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "phishing"), "ding"], [em(F3, "pescaria"), "pop"], [em(F3, "falso"), "alerta"], [em(F3, "isca"), "pop"], [em(F3, "bloqueada"), "alerta"]],
   draw(t, D) { const ph = em(F3, "phishing"), pe = em(F3, "pescaria"), fa = em(F3, "falso"), is = em(F3, "isca"), bl = em(F3, "bloqueada"); fundoEscuro(t, "#0c4a6e"); g.save(); camera(t, [[0, 640, 340, 1], [fa, 460, 340, 1.12], [is, 700, 330, 1.05], [bl, 640, 340, 1]]);
     const gg = g.createLinearGradient(0, 420, 0, 600); gg.addColorStop(0, "rgba(56,189,248,.5)"); gg.addColorStop(1, "rgba(3,105,161,.85)"); g.fillStyle = gg; g.fillRect(-300, 420, 1900, 200);
     if (t > pe) { emo("🎣", 1020, 220, 120); g.strokeStyle = "#e2e8f0"; g.lineWidth = 3; g.beginPath(); g.moveTo(960, 170); g.quadraticCurveTo(820, 200, 780, 330); g.stroke(); emo("✉️", 780, 370 + Math.sin(t * 3) * 8, 60); emo("🐟", 700 + Math.sin(t * 2) * 25, 520, 70); }
     if (t > fa) janelinha(340, 300, 420, 230, "www.banc0-falso.com", "#dc2626", seg(t, fa, fa + .4)); if (t > fa + .4) { g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("🏦 SEU BANCO?", 340, 290); }
     if (t > bl) { cartaoC("Sua conta será bloqueada!", 340, 360, 360, "#fecaca", seg(t, bl, bl + .4), "clique aqui"); } g.restore();
     palavra("PHISHING = PESCARIA", 640, 110, seg(t, ph, ph + .4), 60); if (t > is) etiqueta("a ISCA", 1000, 470, 800, 390, seg(t, is, is + .4)); if (t > fa) etiqueta("imita banco, loja ou escola", 520, 560, 400, 440, seg(t, fa, fa + .4));
     julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "SINAIS DE GOLPE", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "pressa"), "alerta"], [em(F4, "Prêmio"), "pop"], [em(F4, "Pedido"), "alerta"], [em(F4, "estranho"), "pop"], [em(F4, "erros"), "pop"]],
   draw(t, D) { const ts = [em(F4, "pressa"), em(F4, "Prêmio"), em(F4, "Pedido"), em(F4, "estranho"), em(F4, "erros")]; fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 340, 1.05], [ts[4] + 1, 640, 340, 1]]);
     [["⏰", "PRESSA", "agora! só hoje!", 270, 250], ["🎁", "PRÊMIO FÁCIL", "você ganhou!", 640, 250], ["🔑", "PEDE CÓDIGO OU SENHA", "ou dinheiro", 1010, 250], ["📵", "NÚMERO ESTRANHO", "ou endereço estranho", 450, 470], ["✏️", "ERROS DE PORTUGUÊS", "palavras erradas", 830, 470]].forEach(([e, n, s, x, y], i) => { ideia(x, y, 300, 190, e, n, s, "#fff", seg(t, ts[i], ts[i] + .4)); if (seg(t, ts[i], ts[i] + .4) > 0) emo("🚨", x + 120, y - 70 + Math.sin(t * 9 + i) * 4, 34); }); g.restore();
     palavra("5 SINAIS DE GOLPE", 640, 110, seg(t, 0, .4), 56); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "REGRA DE OURO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "regra"), "ding"], [em(F5, "nunca"), "alerta"], [em(F5, "dúvida"), "pop"], [em(F5, "oficial"), "ding"]],
   draw(t, D) { const re = em(F5, "regra"), nu = em(F5, "nunca"), du = em(F5, "dúvida"), of = em(F5, "oficial"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [nu, 640, 300, 1.08], [du, 640, 400, 1.1], [of, 640, 380, 1]]);
     [["🏦", "BANCO", 300], ["🏫", "ESCOLA", 640], ["🏢", "EMPRESAS", 980]].forEach(([e, n, x], i) => { ideia(x, 250, 240, 170, e, n, "", "#fff", seg(t, re + i * .2, re + .4 + i * .2)); if (t > nu) { emo("💬", x + 100, 182, 34); xVermelho(x + 100, 182, 22, seg(t, nu + i * .15, nu + .3 + i * .15)); } });
     if (t > nu) cartaoC("NUNCA pedem senha ou código por mensagem", 640, 420, 760, "#fecaca", seg(t, nu, nu + .4));
     if (t > du) { emo("📞", 420, 540, 70); cartaoC("ligue para o número OFICIAL", 800, 545, 520, "#bbf7d0", seg(t, of - .6, of)); } g.restore();
     palavra("REGRA DE OURO", 640, 110, seg(t, re, re + .4), 64); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: t > du ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "FORÇA BRUTA", fala: F6, legenda: L2[6], sfx: [[.1, "whoosh"], [em(F6, "força"), "ding"], [em(F6, "todas"), "pop"], [em(F6, "zero"), "tec"], [em(F6, "achar"), "festa"]],
   draw(t, D) { const fo = em(F6, "força"), to = em(F6, "todas"), ze = em(F6, "zero"), ac = em(F6, "achar"); fundoEscuro(t, "#3f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [ze, 640, 330, 1.18], [ac, 640, 340, 1]]);
     const n = t > ze ? Math.min(7391, Math.floor((t - ze) * 400)) : 0, achou = t > ac; const txt = String(achou ? 4071 : n).padStart(4, "0"); cofre(700, 360, 1.15, txt, achou, achou ? 0 : t);
     robozinho(260, 480, 1.7, t, achou); if (t > to) { for (let i = 0; i < 6; i++) { g.globalAlpha = .55; g.fillStyle = "#fde68a"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(String(Math.floor(rnd(i + Math.floor(t * 12)) * 9999)).padStart(4, "0"), 420, 300 + i * 34 - ((t * 60) % 34)); g.globalAlpha = 1; } } g.restore();
     palavra("FORÇA BRUTA", 640, 110, seg(t, fo, fo + .4), 72); if (t > to && !achou) etiqueta("testa uma por uma", 1050, 230, 880, 300, seg(t, to, to + .4)); if (achou) etiqueta("achou o PIN!", 1050, 230, 880, 340, seg(t, ac, ac + .4)); julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "QUANTAS COMBINAÇÕES?", fala: F7, legenda: L2[7], sfx: [[.1, "whoosh"], [em(F7, "quatro"), "pop"], [em(F7, "mil"), "ding"], [em(F7, "combinação"), "pop"], [em(F7, "longa"), "pop"], [em(F7, "anos"), "alerta"]],
   draw(t, D) { const qu = em(F7, "quatro"), mi = em(F7, "mil"), co = em(F7, "combinação"), lo = em(F7, "longa"), an = em(F7, "anos"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1], [mi, 500, 340, 1.1], [lo, 640, 340, 1.05], [an, 640, 340, 1]]);
     cofre(330, 330, .95, "0000", false, 0); if (t > mi) cartaoC("0000 até 9999 = 10.000", 330, 520, 450, "#fde68a", seg(t, mi, mi + .4), "combinações"); if (t > co) { g.fillStyle = "rgba(255,255,255,.15)"; rr(180, 160, 300, 24, 12); g.fill(); g.fillStyle = "#facc15"; rr(180, 160, 300 * seg(t, co, co + 1.2), 24, 12); g.fill(); }
     if (t > lo) { cartaoC("senha LONGA", 950, 250, 380, "#bbf7d0", seg(t, lo, lo + .4), "letras, números e símbolos"); emo("🔐", 950, 400, 80); } if (t > an) { cartaoC("levaria ANOS", 950, 520, 380, "#fecaca", seg(t, an, an + .4)); emo("🕰️", 1110, 420, 60); } g.restore();
     palavra("QUANTAS COMBINAÇÕES?", 640, 110, seg(t, qu, qu + .4), 58); julia({ x: 640, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "O BLOQUEIO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "bloqueiam"), "alerta"], [em(F8, "tentativas"), "pop"], [em(F8, "celular"), "pop"], [em(F8, "testar"), "ding"]],
   draw(t, D) { const bl = em(F8, "bloqueiam"), te = em(F8, "tentativas"), ce = em(F8, "celular"), ts = em(F8, "testar"); fundoEscuro(t, "#334155"); g.save(); camera(t, [[0, 640, 340, 1], [te, 700, 340, 1.12], [ts, 640, 340, 1]]);
     const nx = Math.min(5, Math.floor(seg(t, te - .5, ce + .8) * 6)); robozinho(250, 470, 1.7, t, false); celular(700, 340, 1.2, () => { g.fillStyle = nx >= 5 ? "#7f1d1d" : "#0f172a"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#fff"; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(nx >= 5 ? "BLOQUEADO" : "senha:", 0, -80); for (let i = 0; i < 5; i++) { if (i < nx) { g.fillStyle = "#ef4444"; g.font = `900 30px ${F}`; g.fillText("✖", -56 + i * 28, -20); } } if (nx >= 5) { g.font = `60px ${F}`; g.fillText("🔒", 0, 50); } });
     if (t > te) for (let i = 0; i < 3; i++) { const p = ((t - te) * 1.2 + i * .33) % 1; emo("🔢", lerp(320, 620, p), 380, 36); } g.restore();
     palavra("BLOQUEIA DEPOIS DE ERRAR", 640, 110, seg(t, bl, bl + .4), 54); if (nx >= 5) etiqueta("não consegue testar tudo", 1050, 250, 820, 340, seg(t, ts, ts + .4)); julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "DDoS", fala: F9, legenda: L2[9], sfx: [[.1, "whoosh"], [em(F9, "terceiro"), "ding"], [em(F9, "Distributed"), "pop"], [em(F9, "Milhares"), "alerta"], [em(F9, "cai"), "alerta"]],
   draw(t, D) { const te = em(F9, "terceiro"), di = em(F9, "Distributed"), mi = em(F9, "Milhares"), ca = em(F9, "cai"); fundoEscuro(t, "#3b0764"); g.save(); camera(t, [[0, 640, 340, 1], [mi, 640, 340, 1.05], [ca, 640, 340, 1]]);
     const down = t > ca; for (let i = 0; i < 30; i++) { const k = seg(t, mi + (i % 15) * .08, mi + .3 + (i % 15) * .08); if (t < mi - 1 && i > 3) continue; const x = 130 + (i % 6) * 90, y = 220 + Math.floor(i / 6) * 70; if (t > mi - .2 || i < 3) emo("💻", x, y, 44); if (k > 0) { const p = ((t - mi) * 1.4 + i * .13) % 1; emo("📨", lerp(x + 30, 900, p), lerp(y, 400, p), 22); } }
     rack(960, 540, 1.5, t); if (down) { g.fillStyle = "rgba(220,38,38,.35)"; rr(860, 220, 200, 340, 14); g.fill(); emo("💥", 960, 360 + Math.sin(t * 20) * 4, 80); } g.restore();
     palavra(t > di ? "DDoS" : "O 3º ATAQUE", 640, 110, seg(t, te, te + .4), 72); if (t > di && t < mi) cartaoC("Distributed Denial of Service", 640, 560, 640, "#e9d5ff", seg(t, di, di + .4), "negação de serviço distribuída"); if (t > mi && !down) etiqueta("milhares de acessos ao mesmo tempo", 600, 545, 420, 440, seg(t, mi, mi + .4)); if (down) placaShow("SITE FORA DO AR!", 640, 580, seg(t, ca, ca + .3), "#fecaca");
     julia({ x: 120, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "O SITE CAIU", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "promoção"), "pop"], [em(F10, "fora"), "alerta"], [em(F10, "excesso"), "pop"], [em(F10, "ataque"), "alerta"]],
   draw(t, D) { const pr = em(F10, "promoção"), fo = em(F10, "fora"), ex = em(F10, "excesso"), at = em(F10, "ataque"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1], [fo, 520, 330, 1.1], [ex, 690, 330, 1.05], [at + 1, 640, 340, 1]]);
     janelinha(440, 300, 480, 280, "www.lojadapromocao.com", t > fo ? "#dc2626" : "#16a34a", 1); g.fillStyle = NAVY; g.font = `900 34px ${F}`; g.textAlign = "center"; g.fillText(t > fo ? "FORA DO AR" : "🛒 PROMOÇÃO!", 440, 320); if (t > fo) emo("💥", 440, 380, 70);
     for (let i = 0; i < 6; i++) if (t > pr) pessoa(120 + i * 70, 560, 1, ["#ef4444", "#22c55e", "#3b82f6", "#a855f7", "#f59e0b", "#14b8a6"][i]);
     if (t > ex) { ideia(900, 250, 260, 190, "😅", "MUITAS VISITAS", "normais", "#fff", seg(t, ex, ex + .4)); } if (t > at) { ideia(900, 480, 260, 190, "🌊", "ATAQUE DDoS", "de propósito", "#fff", seg(t, at, at + .4)); } g.restore();
     palavra("SITE FORA DO AR: POR QUÊ?", 640, 110, seg(t, fo, fo + .4), 52); julia({ x: 1190, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "ligou"), "click"], [em(F11, "atendeu"), "pop"], [em(F11, "Pix"), "ding"], [em(F11, "Missão"), "festa"]],
   draw(t, D) { const li = em(F11, "ligou"), at = em(F11, "atendeu"), px = em(F11, "Pix"), mc = em(F11, "Missão"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 380, 1.05], [at, 640, 380, 1]]);
     mae({ x: 320, y: 575, s: 1.0, olhar: 1, braco: t > li ? -1.7 : -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); if (t > li) emo("📞", 460, 330, 56); rafa({ x: 960, y: 575, s: 1.0, olhar: -1, braco: t > mc ? -2.5 : -.6, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t + 1) });
     if (t > at) cartaoC("Não mandei mensagem nenhuma!", 800, 330, 520, "#bbf7d0", seg(t, at, at + .4)); if (t > px) { cartaoC("Pix NÃO enviado", 640, 480, 360, "#fde68a", seg(t, px, px + .4)); visto(870, 480, 30, seg(t, px + .2, px + .6)); } g.restore();
     if (t > mc) cumprida(t, mc); julia({ x: 120, y: 625, s: .55, olhar: 1, braco: t > mc ? -2.4 : .3, bracoE: t > mc ? 2.4 : .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, legenda: L2[12], sfx: [[.1, "whoosh"], [em(F12, "parente"), "pop"], [em(F12, "bloqueio"), "pop"], [em(F12, "site"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["parente", "💬", "Parente com número novo:", "engenharia social"], ["bloqueio", "📱", "Celular bloqueado:", "protege da força bruta"], ["site", "🌐", "Site fora do ar:", "muita visita ou DDoS"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 2º bimestre de 2027 · Missão 2", [JULIA, RAFA]); } }
];

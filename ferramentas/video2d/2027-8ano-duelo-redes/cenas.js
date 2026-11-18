/* ================= 8º ano · 2027 · 2º bimestre · Curiosidade (Velocidade da internet) — O DUELO DAS REDES: 2,4 GHz × 5 GHz =================
   Pedido do professor (18/11/2026). Edutretenimento: a casa do Léo vira um estádio; as duas faixas do Wi-Fi viram atletas
   (a onda de 2,4 GHz, fortona, e a onda de 5 GHz, velocista) e disputam três rounds. No fim, a pegadinha do "5G" no nome da rede. */
const FL = [
 "Curiosidade da internet: o grande duelo do Wi-Fi! Dois vírgula quatro contra cinco gigahertz.",
 "O Léo abriu a lista de redes Wi-Fi no celular e levou um susto: tem a rede Casa do Léo e a rede Casa do Léo cinco gê. Cinco gê? Será que o roteador da casa dele tem a internet cinco gê do celular?",
 "Calma, Léo! Para descobrir, a gente vai transformar a sua casa num estádio. Bem-vindos ao duelo das redes!",
 "O roteador conversa com o celular por ondas de rádio, que a gente não consegue ver. O gigahertz mede quantas vezes essa onda vibra por segundo. Dois vírgula quatro gigahertz são dois bilhões e quatrocentos milhões de vibrações a cada segundo!",
 "Do lado esquerdo, a onda de dois vírgula quatro: vibra mais devagar, mas é forte, alcança mais longe e atravessa melhor as paredes. Do lado direito, a onda de cinco: vibra mais rápido e leva os dados com mais velocidade, mas se cansa mais depressa nas paredes.",
 "Primeiro round: na sala, pertinho do roteador. A onda de cinco dispara na frente! O vídeo carrega na hora, sem travar. Ponto para o cinco!",
 "Segundo round: no quarto lá do fundo, atrás de duas paredes. A onda de cinco bate na parede e vai perdendo a força. A de dois vírgula quatro passa e chega lá! Ponto para o dois vírgula quatro!",
 "Terceiro round: alguém ligou o micro-ondas! Ele trabalha numa frequência parecida com a de dois vírgula quatro e bagunça o sinal. E essa faixa já vive lotada: o Wi-Fi dos vizinhos e os fones Bluetooth também usam o dois vírgula quatro. Na faixa de cinco, tem muito mais espaço livre. Ponto para o cinco!",
 "Resultado: cada onda venceu no seu terreno! O cinco é o campeão de perto: é o mais rápido. O dois vírgula quatro é o campeão de longe: é o que vai mais longe. Por isso, muitos roteadores criam as duas redes ao mesmo tempo. São os roteadores de banda dupla.",
 "E aquele cinco gê no nome da rede, Léo? É só um apelido para dizer: esta é a rede de cinco gigahertz. O gê, ali, é de gigahertz. Não tem nada a ver com o cinco gê do celular!",
 "O cinco gê do celular é a quinta geração da internet móvel, que chega pelas antenas das operadoras espalhadas pela cidade. O um gê só fazia ligações. O dois gê trouxe as mensagens de texto. O três gê levou a internet para o celular. O quatro gê deixou os vídeos rápidos. E o cinco gê é ainda mais rápido e responde quase na hora.",
 "Resumindo: o Wi-Fi cinco gê é a rede de cinco gigahertz, que vem do roteador da sua casa. O cinco gê do celular é a quinta geração da internet móvel, que vem da antena da operadora. Um celular pode usar o Wi-Fi de cinco gigahertz e nem ter o cinco gê da operadora!",
 "Onde eu uso isso? Perto do roteador, para ver vídeo ou jogar, escolha a rede de cinco gigahertz. Longe do roteador, atrás de paredes, a de dois vírgula quatro costuma funcionar melhor. E, quando alguém falar em cinco gê, pergunte: é do Wi-Fi ou do celular?",
 "Agora, vá ao portal e continue a missão sobre a velocidade da internet. Até a próxima!"
];
/* legenda escrita do jeito certo (a fala traz os números por extenso para a voz pronunciar certo) */
const LG = [
 "",
 "O Léo abriu a lista de redes Wi-Fi no celular e levou um susto: tem a rede Casa do Léo e a rede Casa do Léo 5G. 5G? Será que o roteador da casa dele tem a internet 5G do celular?",
 "Calma, Léo! Para descobrir, a gente vai transformar a sua casa num estádio. Bem-vindos ao duelo das redes!",
 "O roteador conversa com o celular por ondas de rádio, que a gente não consegue ver. O gigahertz (GHz) mede quantas vezes essa onda vibra por segundo. 2,4 GHz são 2 bilhões e 400 milhões de vibrações a cada segundo!",
 "Do lado esquerdo, a onda de 2,4: vibra mais devagar, mas é forte, alcança mais longe e atravessa melhor as paredes. Do lado direito, a onda de 5: vibra mais rápido e leva os dados com mais velocidade, mas se cansa mais depressa nas paredes.",
 "Primeiro round: na sala, pertinho do roteador. A onda de 5 dispara na frente! O vídeo carrega na hora, sem travar. Ponto para o 5!",
 "Segundo round: no quarto lá do fundo, atrás de duas paredes. A onda de 5 bate na parede e vai perdendo a força. A de 2,4 passa e chega lá! Ponto para o 2,4!",
 "Terceiro round: alguém ligou o micro-ondas! Ele trabalha numa frequência parecida com a de 2,4 e bagunça o sinal. E essa faixa já vive lotada: o Wi-Fi dos vizinhos e os fones Bluetooth também usam o 2,4. Na faixa de 5, tem muito mais espaço livre. Ponto para o 5!",
 "Resultado: cada onda venceu no seu terreno! O 5 é o campeão de perto: é o mais rápido. O 2,4 é o campeão de longe: é o que vai mais longe. Por isso, muitos roteadores criam as duas redes ao mesmo tempo. São os roteadores de banda dupla.",
 "E aquele 5G no nome da rede, Léo? É só um apelido para dizer: esta é a rede de 5 GHz. O G, ali, é de gigahertz. Não tem nada a ver com o 5G do celular!",
 "O 5G do celular é a quinta geração da internet móvel, que chega pelas antenas das operadoras espalhadas pela cidade. O 1G só fazia ligações. O 2G trouxe as mensagens de texto. O 3G levou a internet para o celular. O 4G deixou os vídeos rápidos. E o 5G é ainda mais rápido e responde quase na hora.",
 "Resumindo: o Wi-Fi 5G é a rede de 5 GHz, que vem do roteador da sua casa. O 5G do celular é a quinta geração da internet móvel, que vem da antena da operadora. Um celular pode usar o Wi-Fi de 5 GHz e nem ter o 5G da operadora!",
 "Onde eu uso isso? Perto do roteador, para ver vídeo ou jogar, escolha a rede de 5 GHz. Longe do roteador, atrás de paredes, a de 2,4 costuma funcionar melhor. E, quando alguém falar em 5G, pergunte: é do Wi-Fi ou do celular?",
 ""
];
const E = (i, w, n) => { const e0 = em(FL[i], w, n); const F = window.FALA && window.FALA[i]; if (!F || !F.w) return e0;
  try { const idx = Math.round((e0 - .35) * 2.55), tr = F.w[Math.min(idx, F.w.length - 1)]; return tr * est(FL[i]) / DUR[i]; } catch (e) { return e0; } };

/* ---------- cores do duelo ---------- */
const C24 = "#2563eb", C24c = "#93c5fd", C5 = "#f97316", C5c = "#fdba74", GRAMA = "#16a34a";

/* ---------- peças do duelo ---------- */
// onda senoidal entre x1 e x2 (na altura y), andando com o tempo; ciclos = quantas ondas cabem; amp pode diminuir ao longo (decai)
function onda(x1, x2, y, t, ciclos, amp, cor, larg, vel, decai, k) {
  if (k === undefined) k = 1; if (k <= 0) return; const xf = lerp(x1, x2, cl(k));
  g.save(); g.lineCap = "round"; g.lineJoin = "round";
  [["rgba(11,16,32,.55)", (larg || 8) + 6], [cor, larg || 8]].forEach(([c, w]) => { g.strokeStyle = c; g.lineWidth = w; g.beginPath();
    for (let x = x1; x <= xf; x += 3) { const p = (x - x1) / Math.max(1, x2 - x1), a = amp * (decai ? Math.max(0, 1 - p * decai) : 1);
      const y2 = y + Math.sin(p * ciclos * 2 * Math.PI - t * (vel || 4)) * a; x === x1 ? g.moveTo(x, y2) : g.lineTo(x, y2); } g.stroke(); });
  g.restore(); }
function fundoEstadio(t) {
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#0b1533"); gr.addColorStop(.55, "#162a5c"); gr.addColorStop(.56, "#15803d"); gr.addColorStop(1, "#0f5f2c"); g.fillStyle = gr; g.fillRect(0, 0, W, H);
  // arquibancada com torcida
  for (let r = 0; r < 4; r++) for (let i = 0; i < 46; i++) { const x = 14 + i * 28 + (r % 2) * 14, y = 250 + r * 26, pula = Math.max(0, Math.sin(t * 6 + i * 1.7 + r)) * 5;
    g.fillStyle = ["#f87171", "#60a5fa", "#fbbf24", "#a78bfa", "#34d399", "#f472b6"][(i + r * 3) % 6]; g.globalAlpha = .75; g.beginPath(); g.arc(x, y - pula, 9, 0, 7); g.fill(); g.fillRect(x - 8, y + 6 - pula, 16, 12); }
  g.globalAlpha = 1; g.fillStyle = "rgba(255,255,255,.12)"; g.fillRect(0, 352, W, 6);
  // linhas do campo
  g.strokeStyle = "rgba(255,255,255,.35)"; g.lineWidth = 4; g.beginPath(); g.moveTo(640, 404); g.lineTo(640, H); g.stroke(); g.beginPath(); g.ellipse(640, 560, 120, 50, 0, 0, 7); g.stroke();
  // holofotes
  g.save(); g.globalCompositeOperation = "lighter"; [[120, 1], [1160, -1]].forEach(([x, s]) => { const a = .25 + Math.sin(t * .8) * .18 * s, gr2 = g.createRadialGradient(x, 30, 10, x, 30, 700);
    gr2.addColorStop(0, "rgba(255,250,210,.32)"); gr2.addColorStop(1, "rgba(255,250,210,0)"); g.fillStyle = gr2; g.beginPath(); g.moveTo(x, 30); g.lineTo(x + Math.sin(a + .9 * s) * 900, 760); g.lineTo(x + Math.sin(a + .3 * s) * 900, 760); g.closePath(); g.fill(); });
  g.restore(); [[120], [1160]].forEach(([x]) => { g.fillStyle = "#e2e8f0"; rr(x - 40, 14, 80, 30, 8); g.fill(); g.fillStyle = "#fffbe6"; for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(x - 27 + i * 18, 29, 7, 0, 7); g.fill(); } });
}
function placar(x, y, a, b, k, destaque) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s);
  g.fillStyle = "rgba(0,0,0,.45)"; rr(-212, -40, 430, 92, 16); g.fill(); g.fillStyle = "#0f172a"; rr(-216, -46, 432, 92, 16); g.fill(); g.strokeStyle = "#fbbf24"; g.lineWidth = 4; rr(-216, -46, 432, 92, 16); g.stroke();
  g.textAlign = "center"; g.textBaseline = "middle"; g.font = `800 22px ${F}`; g.fillStyle = C24c; g.fillText("2,4 GHz", -140, -18); g.fillStyle = C5c; g.fillText("5 GHz", 140, -18);
  g.font = `800 46px ${F}`; g.fillStyle = destaque === 0 ? "#fde047" : "#fff"; g.fillText(String(a), -60, 14); g.fillStyle = "#fff"; g.fillText("×", 0, 12); g.fillStyle = destaque === 1 ? "#fde047" : "#fff"; g.fillText(String(b), 60, 14);
  g.restore(); }
// atletas: a onda de 2,4 (fortona, azul) e a onda de 5 (velocista, laranja)
function atleta(x, y, s, t, tipo, o) { o = o || {}; g.save(); g.translate(x, y); g.scale(s * (o.vira ? -1 : 1), s); const cor = tipo === 5 ? C5 : C24, clara = tipo === 5 ? C5c : C24c;
  const pulo = o.corre ? Math.abs(Math.sin(t * (tipo === 5 ? 14 : 8))) * 10 : Math.sin(t * 3) * 3; g.translate(0, -pulo);
  // pernas
  g.strokeStyle = "#1e293b"; g.lineWidth = 12; g.lineCap = "round"; const pk = o.corre ? Math.sin(t * (tipo === 5 ? 14 : 8)) : 0;
  g.beginPath(); g.moveTo(-18, -20); g.lineTo(-22 - pk * 16, 22); g.stroke(); g.beginPath(); g.moveTo(18, -20); g.lineTo(22 + pk * 16, 22); g.stroke();
  g.fillStyle = "#fff"; rr(-36 - pk * 16, 16, 28, 12, 6); g.fill(); rr(10 + pk * 16, 16, 28, 12, 6); g.fill();
  // corpo: uma gota-onda com a crista no alto
  const larg = tipo === 5 ? 50 : 72, alt = tipo === 5 ? 120 : 112;
  g.fillStyle = cor; g.beginPath(); g.moveTo(-larg, -10); g.quadraticCurveTo(-larg - 6, -alt * .7, -larg * .35, -alt); g.quadraticCurveTo(-larg * .05, -alt - 26, larg * .35, -alt * .92);
  g.quadraticCurveTo(larg + 6, -alt * .62, larg, -10); g.quadraticCurveTo(0, 8, -larg, -10); g.fill();
  // ondinhas na barriga (frequência: mais ondas = mais rápida)
  g.strokeStyle = clara; g.lineWidth = 5; g.beginPath(); const nc = tipo === 5 ? 4 : 1.5; for (let i = 0; i <= 40; i++) { const xx = -larg * .7 + i * larg * 1.4 / 40, yy = -40 + Math.sin(i / 40 * nc * 2 * Math.PI - t * 6) * 9; i ? g.lineTo(xx, yy) : g.moveTo(xx, yy); } g.stroke();
  // braços
  g.strokeStyle = cor; g.lineWidth = tipo === 5 ? 11 : 17; const bE = o.bracoE != null ? o.bracoE : .5, bD = o.braco != null ? o.braco : -.5;
  [[-larg + 4, bE, -1], [larg - 4, bD, 1]].forEach(([bx, ang]) => { g.save(); g.translate(bx, -64); g.rotate(ang); g.beginPath(); g.moveTo(0, 0); g.lineTo(0, 40); g.stroke();
    if (tipo !== 5) { g.fillStyle = cor; g.beginPath(); g.arc(0, 18, 13, 0, 7); g.fill(); } g.fillStyle = "#fde68a"; g.beginPath(); g.arc(0, 46, tipo === 5 ? 9 : 12, 0, 7); g.fill(); g.restore(); });
  // rosto
  const ey = -alt * .62, pis = pisca(t + tipo) ? .15 : 1; g.fillStyle = "#fff"; g.beginPath(); g.ellipse(-14, ey, 10, 12 * pis, 0, 0, 7); g.ellipse(14, ey, 10, 12 * pis, 0, 0, 7); g.fill();
  g.fillStyle = "#111"; g.beginPath(); g.ellipse(-12 + (o.olhar || 0) * 3, ey + 1, 5, 6 * pis, 0, 0, 7); g.ellipse(16 + (o.olhar || 0) * 3, ey + 1, 5, 6 * pis, 0, 0, 7); g.fill();
  g.strokeStyle = "#1e293b"; g.lineWidth = 4; if (o.cansada) { g.beginPath(); g.moveTo(-10, ey + 30); g.quadraticCurveTo(0, ey + 22, 10, ey + 30); g.stroke(); g.fillStyle = "#7dd3fc"; g.beginPath(); g.ellipse(larg * .5, ey - 8, 5, 8, 0, 0, 7); g.fill(); }
  else if (o.boca === "o") { g.fillStyle = "#1e293b"; g.beginPath(); g.ellipse(0, ey + 26, 7, 9, 0, 0, 7); g.fill(); }
  else { g.beginPath(); g.arc(0, ey + 16, 12, .15 * Math.PI, .85 * Math.PI); g.stroke(); }
  if (tipo === 5) { g.fillStyle = "#fde047"; rr(-larg * .8, ey - 34, larg * 1.6, 12, 6); g.fill(); g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(larg * .7, ey - 28); g.lineTo(larg * .7 + 26, ey - 22 + Math.sin(t * 12) * 6); g.stroke(); }
  else { g.fillStyle = "#1e3a8a"; g.font = `800 20px ${F}`; g.textAlign = "center"; } // a fortona não usa faixa
  // número na camiseta
  g.fillStyle = "#fff"; g.font = `800 ${tipo === 5 ? 24 : 26}px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.save(); if (o.vira) g.scale(-1, 1); g.fillText(tipo === 5 ? "5" : "2,4", 0, -12); g.restore();
  g.restore(); }
function parede(x, y, h, k) { g.fillStyle = "#b45309"; g.fillRect(x - 14, y - h, 28, h); g.strokeStyle = "#78350f"; g.lineWidth = 2;
  for (let r = 0; r * 22 < h; r++) { g.beginPath(); g.moveTo(x - 14, y - r * 22); g.lineTo(x + 14, y - r * 22); g.stroke(); g.beginPath(); g.moveTo(x + (r % 2 ? -4 : 4), y - r * 22); g.lineTo(x + (r % 2 ? -4 : 4), y - r * 22 - 22); g.stroke(); } }
function microondas(x, y, s, liga, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#e5e7eb"; rr(-90, -60, 180, 120, 12); g.fill(); g.strokeStyle = "#334155"; g.lineWidth = 4; rr(-90, -60, 180, 120, 12); g.stroke();
  g.fillStyle = liga ? "#fde68a" : "#1e293b"; rr(-76, -46, 112, 92, 8); g.fill(); g.fillStyle = "#334155"; rr(48, -46, 30, 92, 6); g.fill();
  g.fillStyle = liga ? "#22c55e" : "#64748b"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.fillText(liga ? "0:59" : "--:--", 63, -26);
  if (liga) { g.save(); g.translate(-20, 10); g.rotate(t * 3); g.fillStyle = "#f59e0b"; g.beginPath(); g.ellipse(0, 0, 30, 12, 0, 0, 7); g.fill(); g.restore(); } g.restore(); }
function ruido(x1, x2, y, t, amp, cor) { g.save(); g.strokeStyle = cor || "#ef4444"; g.lineWidth = 4; g.beginPath(); for (let x = x1; x <= x2; x += 8) { const yy = y + (rnd(Math.floor(x + t * 40)) - .5) * amp * 2; x === x1 ? g.moveTo(x, yy) : g.lineTo(x, yy); } g.stroke(); g.restore(); }
function torreCelular(x, y, s, t, k) { if (k <= 0) return; g.save(); g.translate(x, y); g.scale(s * back(cl(k)), s * back(cl(k)));
  g.strokeStyle = "#cbd5e1"; g.lineWidth = 6; g.beginPath(); g.moveTo(-40, 0); g.lineTo(0, -260); g.lineTo(40, 0); g.stroke();
  for (let i = 1; i < 6; i++) { const yy = -i * 44, w = 40 * (1 - i * 44 / 260); g.beginPath(); g.moveTo(-w, yy); g.lineTo(w, yy + 40); g.moveTo(w, yy); g.lineTo(-w, yy + 40); g.stroke(); }
  g.fillStyle = "#e2e8f0"; [-1, 1].forEach(d => { rr(d * 22 - 7, -250, 14, 46, 4); g.fill(); }); g.fillStyle = "#ef4444"; g.beginPath(); g.arc(0, -266, 7, 0, 7); g.fill();
  g.strokeStyle = "#fde047"; g.lineWidth = 5; for (let i = 0; i < 3; i++) { const r = 30 + ((t * 70 + i * 30) % 90); g.globalAlpha = 1 - (r - 30) / 90; [-1, 1].forEach(d => { g.beginPath(); g.arc(0, -232, r, d > 0 ? -.6 : Math.PI - .6, d > 0 ? .6 : Math.PI + .6); g.stroke(); }); } g.globalAlpha = 1;
  g.restore(); }
// tela do celular com a lista de redes Wi-Fi
function listaWifi(t, destaque) { g.fillStyle = "#f8fafc"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#0f172a"; g.font = `800 15px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText("Wi-Fi", -58, -124);
  const it = [["Casa do Léo", 0], ["Casa do Léo 5G", 1], ["Vizinho_123", 2]]; it.forEach(([n, i]) => { const y = -86 + i * 46; if (destaque === i) { g.fillStyle = "#fef08a"; rr(-66, y - 18, 132, 36, 8); g.fill(); }
    g.fillStyle = "#0f172a"; g.font = `700 ${n.length > 12 ? 12 : 13}px ${F}`; g.fillText(n, -40, y); g.strokeStyle = "#2563eb"; g.lineWidth = 2.5; for (let a = 0; a < 3; a++) { g.beginPath(); g.arc(-54, y + 7, 4 + a * 4, -2.4, -.75); g.stroke(); } }); }
function videoBarra(x, y, w, k, ok) { g.fillStyle = "#0f172a"; rr(x, y, w, 120, 10); g.fill(); g.fillStyle = "#334155"; rr(x + 10, y + 96, w - 20, 10, 5); g.fill(); g.fillStyle = ok ? "#ef4444" : "#64748b"; rr(x + 10, y + 96, (w - 20) * cl(k), 10, 5); g.fill();
  g.fillStyle = "#fff"; g.beginPath(); g.moveTo(x + w / 2 - 14, y + 30); g.lineTo(x + w / 2 + 18, y + 48); g.lineTo(x + w / 2 - 14, y + 66); g.fill(); }
function geracao(n, x, y, k, txt, cor) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "rgba(0,0,0,.35)"; rr(-88, -76, 180, 160, 18); g.fill();
  g.fillStyle = cor; rr(-92, -80, 180, 160, 18); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-92, -80, 180, 160, 18); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.font = `800 52px ${F}`; g.fillText(n + "G", -2, -36); g.font = `700 17px ${F}`; txt.split("|").forEach((l, i) => g.fillText(l, -2, 14 + i * 22)); g.restore(); }
function carimbo(txt, x, y, k, cor) { if (k <= 0) return; const s = 1 + 1.6 * (1 - out(cl(k))); g.save(); g.translate(x, y); g.rotate(-.12); g.scale(s, s); g.globalAlpha = cl(k * 2);
  g.font = `800 34px ${F}`; const w = g.measureText(txt).width + 40; g.strokeStyle = cor || "#dc2626"; g.lineWidth = 6; rr(-w / 2, -32, w, 64, 12); g.stroke(); g.fillStyle = cor || "#dc2626"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function trofeu(x, y, s, cor, k) { if (k <= 0) return; const ss = s * back(cl(k)); g.save(); g.translate(x, y); g.scale(ss, ss); g.fillStyle = cor || "#f59e0b"; g.strokeStyle = "#78350f"; g.lineWidth = 4;
  g.beginPath(); g.moveTo(-50, -120); g.lineTo(50, -120); g.quadraticCurveTo(50, -40, 0, -30); g.quadraticCurveTo(-50, -40, -50, -120); g.fill(); g.stroke();
  g.beginPath(); g.arc(-56, -96, 18, Math.PI * .5, Math.PI * 1.5); g.stroke(); g.beginPath(); g.arc(56, -96, 18, -Math.PI * .5, Math.PI * .5); g.stroke();
  g.fillRect(-8, -32, 16, 26); rr(-38, -8, 76, 18, 4); g.fill(); g.stroke(); g.restore(); }
const LEOc = { camisa: "#0ea5e9" }; const leoB = o => boneco(Object.assign({}, LEOc, o));

const CENAS = [
 // 0 — abertura "digna de Oscar": estádio, as duas ondas se encarando e o VS
 { chip: "", fala: FL[0], sfx: [[.05, "whoosh"], [.5, "festa"], [1.6, "pop"], [E(0, "dois"), "ding"], [E(0, "contra"), "pop"]],
   draw(t) { fundoEstadio(t); const kv = back(seg(t, .5, 1));
     g.save(); g.globalAlpha = .9; onda(0, 600, 300, t, 1.5, 60, C24, 10, 3); onda(680, 1280, 300, t, 6, 40, C5, 8, 9); g.restore();
     atleta(lerp(-120, 330, out(seg(t, .2, 1))), 380, 1.1, t, 24, { braco: -2.4, bracoE: -.4 }); atleta(lerp(1400, 950, out(seg(t, .3, 1.1))), 380, 1.1, t, 5, { braco: -2.4, bracoE: .6, vira: true });
     if (kv > 0) { g.save(); g.translate(640, 290); g.scale(kv * (1 + Math.sin(t * 8) * .04), kv * (1 + Math.sin(t * 8) * .04)); texto2("VS", 0, 0, 110, "#fde047"); g.restore(); }
     abertura(t, "8º ano · Curiosidade · Velocidade da internet", "O grande duelo do Wi-Fi!", "2,4 GHz contra 5 GHz", "QUEM VENCE?", 1.6); } },
 // 1 — o problema: a lista de redes e o "5G"
 { chip: "O SUSTO DO LÉO", fala: FL[1], legenda: LG[1], sfx: [[.1, "whoosh"], [E(1, "susto"), "alerta"], [E(1, "cinco", 1), "pop"], [E(1, "será"), "misterio"]],
   draw(t) { fundoSala(t); const ts = E(1, "susto"), tc = E(1, "cinco", 1), tse = E(1, "será");
     const zoom = lerp(1, 1.15, io(seg(t, 0, 2))); g.save(); g.translate(640, 330); g.scale(zoom, zoom); g.translate(-640, -330);
     leoB({ x: 420, y: 560, s: 1.15, braco: -1.2, boca: t > ts ? "o" : "", pisca: pisca(t), olhar: 1 });
     celular(640, 330, 1.25, () => listaWifi(t, t > tc ? 1 : -1)); g.restore();
     if (t > tc) { anel(700, 300, 92, t, "#ef4444"); placa("5G?!", 900, 210, seg(t, tc, tc + .3), "#dc2626", 40); }
     if (t > ts && t < tse) balao("O quê?!", 400, 180, seg(t, ts, ts + .3));
     if (t > tse) { const k = seg(t, tse, tse + .5); g.save(); g.globalAlpha = out(k); pensamento(1040, 380, 280, 200); torreCelular(1040, 470, .45, t, k); texto2("?", 1130, 320, 70, "#dc2626"); g.restore(); } } },
 // 2 — a casa vira estádio
 { chip: "BEM-VINDOS AO ESTÁDIO", fala: FL[2], legenda: LG[2], sfx: [[.1, "whoosh"], [E(2, "transformar"), "misterio"], [E(2, "estádio"), "festa"], [E(2, "duelo"), "ding"]],
   draw(t) { const tt = E(2, "transformar"), te = E(2, "estádio"), td = E(2, "duelo"); const k = seg(t, tt, te + .3);
     if (k < 1) { fundoSala(t); g.save(); g.globalAlpha = 1 - out(k); leoB({ x: 640, y: 560, s: 1.1, braco: -2.6 + Math.sin(t * 6) * .2, pisca: pisca(t) }); balao("Tá bom!", 640, 200, seg(t, .2, .6)); g.restore();
       g.save(); g.globalAlpha = k; g.fillStyle = "#fff"; g.beginPath(); g.arc(640, 360, k * 900, 0, 7); g.fill(); g.restore(); }
     if (k >= .6) { g.save(); g.globalAlpha = seg(k, .6, 1); fundoEstadio(t); placar(640, 110, 0, 0, seg(t, te, te + .4)); leoB({ x: 640, y: 600, s: .85, braco: -2.7 + Math.sin(t * 7) * .2, bracoE: 2.7, pisca: pisca(t) });
       palavra("DUELO DAS REDES!", 640, 250, seg(t, td, td + .4), 76); confete(t, td); g.restore(); } } },
 // 3 — o que é o gigahertz: a onda que vibra
 { chip: "ONDAS DE RÁDIO", fala: FL[3], legenda: LG[3], sfx: [[.1, "whoosh"], [E(3, "ondas"), "pop"], [E(3, "gigahertz"), "ding"], [E(3, "dois"), "pop"], [E(3, "bilhões"), "festa"]],
   draw(t) { fundoEscuro(t, "#1e1b4b"); const to = E(3, "ondas"), tg = E(3, "gigahertz"), tv = E(3, "vibra"), td = E(3, "dois"), tb = E(3, "bilhões");
     roteador(180, 330, 1.1, t); celular(1110, 300, .8, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#2563eb"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("Wi-Fi ✓", 0, 0); });
     onda(280, 1010, 280, t, 6, 34, "#a5b4fc", 7, 6, 0, seg(t, to, to + 1));
     if (t < to + .6) texto2("👀 não dá para ver!", 640, 180, 34, "#e0e7ff");
     if (t > tg) { palavra("GIGAHERTZ (GHz)", 640, 120, seg(t, tg, tg + .4), 64); }
     if (t > tv) { g.save(); g.globalAlpha = seg(t, tv, tv + .4); g.fillStyle = "rgba(15,23,42,.8)"; rr(380, 400, 520, 100, 18); g.fill(); texto2("= vibrações por segundo", 640, 450, 34, "#fde047"); g.restore(); }
     if (t > td) { const n = Math.round(lerp(0, 2400000000, io(seg(t, td, tb + .6)))); g.fillStyle = "rgba(15,23,42,.92)"; rr(240, 380, 800, 150, 22); g.fill();
       texto2("2,4 GHz", 640, 412, 32, C24c); texto2(n.toLocaleString("pt-BR"), 640, 466, 58, "#fde047"); texto2("vibrações a cada 1 segundo!", 640, 512, 26, "#fff"); } } },
 // 4 — os competidores
 { chip: "OS COMPETIDORES", fala: FL[4], legenda: LG[4], sfx: [[.1, "whoosh"], [E(4, "esquerdo"), "pop"], [E(4, "forte"), "pop"], [E(4, "atravessa"), "ding"], [E(4, "direito"), "pop"], [E(4, "velocidade"), "ding"], [E(4, "cansa"), "alerta"]],
   draw(t) { fundoEstadio(t); const te = E(4, "esquerdo"), tf = E(4, "forte"), ta = E(4, "atravessa"), td = E(4, "direito"), tv = E(4, "velocidade"), tc = E(4, "cansa");
     atleta(lerp(-150, 330, out(seg(t, te - .3, te + .5))), 470, 1.4, t, 24, { braco: t > tf ? -2.6 : -.5, bracoE: t > tf ? 2.6 : .5 });
     atleta(lerp(1430, 950, out(seg(t, td - .3, td + .5))), 470, 1.4, t, 5, { vira: true, braco: t > tv ? -2.8 : -.5, cansada: t > tc + .6, corre: t > tv && t < tc });
     placa("ONDA LONGA E FORTE", 330, 110, seg(t, te, te + .3), C24, 26);
     rotulo2("ALCANÇA LONGE", 140, 200, 250, 260, seg(t, tf, tf + .4), C24, 22); rotulo2("ATRAVESSA PAREDES", 520, 200, 410, 270, seg(t, ta, ta + .4), C24, 22);
     placa("ONDA CURTA E RÁPIDA", 950, 110, seg(t, td, td + .3), C5, 26);
     rotulo2("MAIS VELOCIDADE", 770, 200, 890, 270, seg(t, tv, tv + .4), C5, 22); rotulo2("CANSA NAS PAREDES", 1150, 200, 1010, 270, seg(t, tc, tc + .4), "#dc2626", 22); } },
 // 5 — round 1: na sala, perto do roteador
 { chip: "ROUND 1 · NA SALA", fala: FL[5], legenda: LG[5], sfx: [[.1, "sino"], [E(5, "dispara"), "whoosh"], [E(5, "carrega"), "ding"], [E(5, "ponto"), "festa"]],
   draw(t) { fundoSala(t); const tds = E(5, "dispara"), tca = E(5, "carrega"), tp = E(5, "ponto");
     palavra("ROUND 1", 640, 95, seg(t, .1, .5), 64); roteador(190, 360, 1, t); leoB({ x: 1040, y: 560, s: 1, braco: -1.1, pisca: pisca(t), boca: t > tca ? "" : "o" });
     // duas raias
     g.fillStyle = "rgba(37,99,235,.15)"; rr(260, 250, 680, 60, 30); g.fill(); g.fillStyle = "rgba(249,115,22,.15)"; rr(260, 330, 680, 60, 30); g.fill();
     onda(270, 930, 280, t, 2, 20, C24, 8, 4, 0, seg(t, tds, tds + 2.4)); onda(270, 930, 360, t, 8, 16, C5, 6, 12, 0, seg(t, tds, tds + .9));
     atleta(lerp(290, 880, out(seg(t, tds, tds + 2.4))), 250, .5, t, 24, { corre: t > tds && t < tds + 2.4 }); atleta(lerp(290, 900, out(seg(t, tds, tds + .9))), 330, .5, t, 5, { corre: t > tds && t < tds + .9, braco: t > tds + .9 ? -2.6 : -.5 });
     videoBarra(870, 120, 220, seg(t, tds + .5, tca + .3), true); if (t > tca + .3) placa("SEM TRAVAR!", 980, 90, seg(t, tca + .3, tca + .6), "#16a34a", 22);
     placar(640, 470, 0, t > tp ? 1 : 0, 1, t > tp ? 1 : -1); if (t > tp) { palavra("PONTO PARA O 5!", 640, 200, seg(t, tp, tp + .4), 60); confete(t, tp); } } },
 // 6 — round 2: no quarto do fundo, atrás de duas paredes
 { chip: "ROUND 2 · NO QUARTO DO FUNDO", fala: FL[6], legenda: LG[6], sfx: [[.1, "sino"], [E(6, "bate"), "alerta"], [E(6, "passa"), "whoosh"], [E(6, "ponto"), "festa"]],
   draw(t) { g.fillStyle = "#fef3c7"; g.fillRect(0, 0, W, H); g.fillStyle = "#e7d3a6"; g.fillRect(0, 470, W, 250); const tb = E(6, "bate"), tpa = E(6, "passa"), tp = E(6, "ponto");
     palavra("ROUND 2", 640, 62, seg(t, .1, .5), 56); roteador(130, 330, .85, t); parede(470, 470, 340); parede(760, 470, 340);
     texto2("SALA", 260, 505, 26, "#92400e"); texto2("CORREDOR", 615, 505, 22, "#92400e"); texto2("QUARTO", 960, 505, 26, "#92400e");
     leoB({ x: 1080, y: 560, s: .95, braco: -1.1, pisca: pisca(t), boca: t > tpa + 1 ? "" : "o" }); celular(1150, 330, .35, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); });
     // a de 5: forte até a 1ª parede, fraca depois e some na 2ª
     const k5 = seg(t, .6, tb + .2); onda(220, 1000, 300, t, 9, 22, C5, 7, 12, 1.15, k5); if (t > tb) { anel(470, 300, 30, t, "#ef4444"); placa("BUM!", 470, 220, seg(t, tb, tb + .2), "#dc2626", 22); }
     atleta(t < tb ? lerp(230, 430, out(seg(t, .6, tb))) : 430, 300, .45, t, 5, { cansada: t > tb, corre: t < tb });
     // a de 2,4: atravessa as duas paredes
     const k24 = seg(t, tb, tpa + 1.2); onda(220, 1050, 400, t, 3, 26, C24, 9, 4, .35, k24); atleta(lerp(230, 950, out(k24)), 400, .45, t, 24, { corre: k24 > 0 && k24 < 1, braco: k24 >= 1 ? -2.6 : -.5 });
     if (k24 >= 1) { visto(1150, 250, 34, seg(t, tpa + 1.2, tpa + 1.5)); }
     placar(640, 150, t > tp ? 1 : 0, 1, 1, t > tp ? 0 : -1); if (t > tp) { palavra("PONTO PARA O 2,4!", 640, 245, seg(t, tp, tp + .4), 56); confete(t, tp); } } },
 // 7 — round 3: o micro-ondas e a faixa lotada
 { chip: "ROUND 3 · A COZINHA", fala: FL[7], legenda: LG[7], legTam: 22, sfx: [[.1, "sino"], [E(7, "micro"), "alerta"], [E(7, "bagunça"), "click"], [E(7, "lotada"), "pop"], [E(7, "livre"), "ding"], [E(7, "ponto"), "festa"]],
   draw(t) { fundoEscuro(t, "#3f1d38"); const tm = E(7, "micro"), tb = E(7, "bagunça"), tl = E(7, "lotada"), tvz = E(7, "vizinhos"), tbt = E(7, "bluetooth"), tli = E(7, "livre"), tp = E(7, "ponto");
     palavra("ROUND 3", 520, 62, seg(t, .1, .5), 56);
     if (t < tl) { microondas(1000, 300, 1.4, t > tm, t); roteador(200, 320, .9, t);
       onda(300, 860, 290, t, 3, 26, C24, 9, 4, 0, 1); if (t > tb) { ruido(320, 860, 290, t, 30); placa("SINAL BAGUNÇADO!", 580, 190, seg(t, tb, tb + .3), "#dc2626", 24); }
       if (t > tm) rotulo2("MICRO-ONDAS ≈ 2,4 GHz", 1000, 470, 1000, 400, seg(t, tm + .3, tm + .7), "#dc2626", 22); }
     else { // duas estradas: 2,4 estreita e lotada; 5 larga e livre
       g.fillStyle = "#475569"; rr(120, 220, 1040, 100, 20); g.fill(); g.fillStyle = "#475569"; rr(120, 370, 1040, 160, 24); g.fill();
       g.strokeStyle = "#fde047"; g.lineWidth = 4; g.setLineDash([24, 18]); g.beginPath(); g.moveTo(130, 450); g.lineTo(1150, 450); g.stroke(); g.setLineDash([]);
       placa("FAIXA DE 2,4 GHz", 280, 212, 1, C24, 22); placa("FAIXA DE 5 GHz", 280, 362, seg(t, tli - .6, tli - .2), C5, 22);
       const itens = [["📶", 0], ["📶", 1], ["🎧", 2], ["📶", 3], ["🎧", 4], ["📶", 5], ["🎮", 6]];
       itens.forEach(([ic, i]) => { const x = 220 + i * 130 + Math.sin(t * 2 + i) * 6; if (t > tl + i * .15) { g.font = `48px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(ic, x, 272); } });
       if (t > tvz) placa("WI-FI DOS VIZINHOS", 560, 340, seg(t, tvz, tvz + .3), "#475569", 20); if (t > tbt) placa("FONES BLUETOOTH", 880, 340, seg(t, tbt, tbt + .3), "#475569", 20);
       atleta(lerp(200, 380, seg(t, tl, tl + 3)), 318, .42, t, 24, { cansada: true });
       if (t > tli - .5) { const k = seg(t, tli - .5, tp); atleta(lerp(200, 1080, out(k)), 510, .55, t, 5, { corre: k < 1, braco: k >= 1 ? -2.7 : -.5 }); }
       if (t > tp) { palavra("PONTO PARA O 5!", 640, 410, seg(t, tp, tp + .4), 54); confete(t, tp); } }
     placar(1040, 145, 1, t > tp ? 2 : 1, 1, t > tp ? 1 : -1); } },
 // 8 — resultado: cada um vence no seu terreno; roteador de banda dupla
 { chip: "RESULTADO", fala: FL[8], legenda: LG[8], legTam: 22, sfx: [[.1, "whoosh"], [E(8, "terreno"), "festa"], [E(8, "perto"), "pop"], [E(8, "longe"), "pop"], [E(8, "dupla"), "ding"]],
   draw(t) { const tr = E(8, "terreno"), tpe = E(8, "perto"), tlo = E(8, "longe"), tro = E(8, "roteadores"), tdu = E(8, "dupla");
     if (t < tro) { fundoEstadio(t); palavra("CADA UM VENCE NO SEU TERRENO!", 600, 112, seg(t, tr - .3, tr + .2), 40);
       trofeu(360, 350, .8, "#fdba74", seg(t, tpe - .3, tpe + .2)); atleta(360, 470, .7, t, 5, { braco: -2.7, bracoE: 2.7 }); placa("CAMPEÃ DE PERTO: VELOCIDADE", 360, 190, seg(t, tpe, tpe + .3), C5, 22);
       trofeu(920, 350, .8, "#93c5fd", seg(t, tlo - .3, tlo + .2)); atleta(920, 470, .7, t, 24, { braco: -2.7, bracoE: 2.7 }); placa("CAMPEÃ DE LONGE: ALCANCE", 920, 190, seg(t, tlo, tlo + .3), C24, 22); }
     else { fundoSala(t); roteador(640, 380, 1.5, t); const k = seg(t, tro, tro + 1);
       for (let i = 0; i < 3; i++) { const r = 80 + ((t * 60 + i * 40) % 120); g.globalAlpha = 1 - (r - 80) / 120; g.strokeStyle = C24; g.lineWidth = 8; g.beginPath(); g.arc(560, 300, r * 1.4, Math.PI * .9, Math.PI * 1.4); g.stroke();
         g.strokeStyle = C5; g.lineWidth = 6; g.beginPath(); g.arc(720, 300, r * .9, -Math.PI * .4, Math.PI * .1); g.stroke(); } g.globalAlpha = 1;
       placa("Casa do Léo  (2,4 GHz)", 300, 200, k, C24, 22); placa("Casa do Léo 5G  (5 GHz)", 990, 200, seg(t, tro + .3, tro + 1), C5, 22);
       palavra("BANDA DUPLA", 640, 100, seg(t, tdu, tdu + .4), 70); if (t > tdu) placa("= duas redes ao mesmo tempo", 640, 520, seg(t, tdu + .2, tdu + .5), "#0f172a", 26); } } },
 // 9 — a pegadinha do nome: G de gigahertz
 { chip: "A PEGADINHA DO NOME", fala: FL[9], legenda: LG[9], sfx: [[.1, "whoosh"], [E(9, "apelido"), "pop"], [E(9, "gê", 1), "ding"], [E(9, "nada"), "alerta"]],
   draw(t) { fundoEscuro(t, "#0c4a6e"); const ta = E(9, "apelido"), tg = E(9, "gê", 1), tn = E(9, "nada");
     celular(330, 330, 1.2, () => listaWifi(t, 1)); leoB({ x: 1080, y: 580, s: 1, braco: -1.4, pisca: pisca(t), boca: t > tn ? "" : "o", olhar: -1 });
     g.save(); g.globalAlpha = seg(t, ta, ta + .4); g.fillStyle = "#fff"; rr(560, 150, 470, 120, 22); g.fill(); g.fillStyle = "#0f172a"; g.font = `800 50px ${F}`; g.textAlign = "center"; g.textBaseline = "middle";
     g.fillText("Casa do Léo ", 760, 210); g.fillStyle = C5; g.fillText("5G", 965, 210); g.restore();
     if (t > tg) { flecha(980, 330, 965, 250, seg(t, tg, tg + .3), "#fde047"); g.save(); g.globalAlpha = seg(t, tg, tg + .4); g.fillStyle = "rgba(15,23,42,.9)"; rr(600, 340, 470, 140, 22); g.fill();
       texto2("5 G  =  5 GHz", 835, 385, 44, "#fde047"); texto2("G de GIGAHERTZ", 835, 440, 32, "#fff"); g.restore(); }
     if (t > tn) carimbo("NÃO É O 5G DO CELULAR!", 640, 110, seg(t, tn, tn + .35)); } },
 // 10 — o 5G do celular: as gerações
 { chip: "O 5G DO CELULAR", fala: FL[10], legenda: LG[10], legTam: 22, sfx: [[.1, "whoosh"], [E(10, "geração"), "ding"], [E(10, "um"), "pop"], [E(10, "dois", 0), "pop"], [E(10, "três"), "pop"], [E(10, "quatro"), "pop"], [E(10, "cinco", 1), "festa"]],
   draw(t) { fundoEscuro(t, "#14213d"); const tq = E(10, "geração"), ta = E(10, "antenas"), t1 = E(10, "um"), t2 = E(10, "dois"), t3 = E(10, "três"), t4 = E(10, "quatro"), t5 = E(10, "cinco", 1);
     if (t < t1) { for (let i = 0; i < 9; i++) predio(80 + i * 140, 560, .6 + rnd(i) * .5, ["#334155", "#475569"][i % 2]); torreCelular(640, 560, 1.1, t, seg(t, .1, .7));
       palavra("5ª GERAÇÃO", 640, 110, seg(t, tq, tq + .4), 70); if (t > ta) placa("ANTENA DA OPERADORA", 900, 230, seg(t, ta, ta + .3), "#7c3aed", 24); }
     else { palavra("AS GERAÇÕES DO CELULAR", 600, 120, seg(t, t1 - .3, t1), 42);
       g.strokeStyle = "rgba(255,255,255,.3)"; g.lineWidth = 8; g.beginPath(); g.moveTo(140, 300); g.lineTo(1140, 300); g.stroke();
       geracao(1, 160, 300, seg(t, t1, t1 + .4), "só|ligações", "#64748b"); geracao(2, 400, 300, seg(t, t2, t2 + .4), "mensagens|de texto", "#0891b2");
       geracao(3, 640, 300, seg(t, t3, t3 + .4), "internet|no celular", "#2563eb"); geracao(4, 880, 300, seg(t, t4, t4 + .4), "vídeos|rápidos", "#7c3aed");
       geracao(5, 1120, 300, seg(t, t5, t5 + .4), "mais rápido|e responde|na hora", "#db2777"); if (t > t5) { anel(1118, 300, 110, t, "#fde047"); confete(t, t5); }
       texto2("G = GERAÇÃO", 640, 480, 44, "#fde047"); } } },
 // 11 — resumindo: lado a lado
 { chip: "RESUMINDO", fala: FL[11], legenda: LG[11], legTam: 22, sfx: [[.1, "whoosh"], [E(11, "roteador"), "pop"], [E(11, "antena"), "pop"], [E(11, "nem"), "ding"]],
   draw(t) { fundoEscuro(t, "#1e293b"); const tr = E(11, "roteador"), ta = E(11, "antena"), tn = E(11, "nem");
     const k1 = back(seg(t, .2, .7)), k2 = back(seg(t, E(11, "celular") - .3, E(11, "celular") + .2));
     if (k1 > 0) { g.save(); g.translate(330, 290); g.scale(k1, k1); g.fillStyle = "#1d4ed8"; rr(-270, -200, 540, 400, 26); g.fill(); texto2("Wi-Fi \"5G\"", 0, -150, 46, "#fde047"); texto2("= faixa de 5 GHz", 0, -96, 30, "#fff");
       roteador(0, 40, .9, t); texto2("vem do ROTEADOR", 0, 130, 30, "#fff"); texto2("dentro de casa", 0, 168, 24, "#bfdbfe"); g.restore(); }
     if (k2 > 0) { g.save(); g.translate(950, 290); g.scale(k2, k2); g.fillStyle = "#9d174d"; rr(-270, -200, 540, 400, 26); g.fill(); texto2("5G do celular", 0, -150, 46, "#fde047"); texto2("= 5ª geração", 0, -96, 30, "#fff");
       torreCelular(0, 100, .42, t, 1); texto2("vem da ANTENA", 0, 130, 30, "#fff"); texto2("da operadora", 0, 168, 24, "#fbcfe8"); g.restore(); }
     texto2("≠", 640, 290, 120, "#fde047");
     if (t > tn) { g.save(); g.globalAlpha = seg(t, tn, tn + .4); g.fillStyle = "rgba(2,6,23,.92)"; rr(170, 470, 940, 80, 20); g.fill(); texto2("Celular sem 5G da operadora também usa Wi-Fi de 5 GHz!", 640, 510, 28, "#86efac"); g.restore(); } } },
 // 12 — onde eu uso isso?
 { chip: "ONDE EU USO ISSO?", fala: FL[12], legenda: LG[12], legTam: 22, sfx: [[.1, "whoosh"], [E(12, "perto"), "pop"], [E(12, "longe"), "pop"], [E(12, "pergunte"), "ding"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const tpe = E(12, "perto"), tlo = E(12, "longe"), tpg = E(12, "pergunte"); palavra("ONDE EU USO ISSO?", 560, 95, seg(t, 0, .4), 50);
     const card = (x, k, cor, tit, sub, fn) => { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, 300); g.scale(s, s); g.fillStyle = cor; rr(-250, -150, 500, 300, 26); g.fill(); texto2(tit, 0, -110, 34, "#fde047"); fn(); texto2(sub, 0, 120, 26, "#fff"); g.restore(); };
     card(340, seg(t, tpe, tpe + .4), "#c2410c", "PERTO DO ROTEADOR", "use a de 5 GHz: vídeo e jogo", () => { roteador(-110, 40, .6, t); leoB({ x: 110, y: 90, s: .55, braco: -1.2, pisca: pisca(t) }); onda(-50, 70, 0, t, 4, 10, C5c, 5, 12); });
     card(940, seg(t, tlo, tlo + .4), "#1d4ed8", "LONGE, ATRÁS DE PAREDES", "use a de 2,4 GHz", () => { roteador(-170, 40, .5, t); parede(-60, 90, 130); parede(30, 90, 130); leoB({ x: 150, y: 90, s: .55, braco: -1.2, pisca: pisca(t) }); onda(-130, 110, 20, t, 2, 12, C24c, 6, 4); });
     if (t > tpg) { g.save(); g.globalAlpha = seg(t, tpg, tpg + .4); g.fillStyle = "rgba(2,6,23,.9)"; rr(250, 470, 780, 80, 20); g.fill(); texto2("Ouviu \"5G\"? Do Wi-Fi ou do celular?", 640, 510, 32, "#fde047"); g.restore(); } } },
 // 13 — final
 { chip: "", fala: FL[13], sfx: [[.1, "whoosh"], [E(13, "até"), "festa"]],
   draw(t) { fundoEscuro(t, "#312e81"); g.textAlign = "center"; g.globalAlpha = out(seg(t, 0, .6)); g.fillStyle = AMAR; g.font = `800 62px ${F}`; g.fillText("Prof. Welington Laignier", 640, 250);
     g.fillStyle = "#fff"; g.font = `700 30px ${F}`; g.fillText("8º ano · 2º bimestre de 2027 · Velocidade da internet", 640, 300); g.font = `800 38px ${F}`; g.fillStyle = "#cfe0ff"; g.fillText("Continue a missão no portal!", 640, 370); g.globalAlpha = 1;
     atleta(240, 640, .9, t, 24, { braco: -2.7 + Math.sin(t * 8) * .2, bracoE: 2.7 }); atleta(1040, 640, .9, t, 5, { braco: -2.7 + Math.sin(t * 9) * .2, bracoE: 2.7, vira: true }); leoB({ x: 640, y: 690, s: .8, braco: -2.8 + Math.sin(t * 10) * .25, bracoE: 2.8, pisca: pisca(t) }); confete(t, .8); } }
];

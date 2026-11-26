/* ================= 6º ano · 2027 · 1º bimestre · Missão 2 · Entrada, processamento e saída (v2, padrão completo: a Cidade Computador) ================= */
const PEDRO = { camisa: "#f97316" }, LARA = { camisa: "#8b5cf6", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), lara = o => boneco(Object.assign({}, LARA, o));
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
  g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
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
    if (rotulos !== false && (j === chutes.length - 1 || Math.abs(chutes[j + 1][0] - v) >= 10)) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
function livroLomb(x, y, w, h, n, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = cor; rr(x, y, w, h, 4); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; rr(x + 4, y + h * .35, w - 8, 30, 4); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(n), x + w / 2, y + h * .35 + 22); g.restore(); }
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }

/* ===== peças "Cidade Computador" (6º M2 v2) ===== */
function passageiro(x, y, txt, cor, s, t) { s = s || 1; const b = Math.sin((t || 0) * 8 + x) * 3; g.save(); g.translate(x, y + b); g.scale(s, s);
  g.fillStyle = "rgba(0,0,0,.3)"; g.beginPath(); g.ellipse(0, 34, 26, 7, 0, 0, 7); g.fill(); g.fillStyle = cor || "#facc15"; rr(-28, -30, 56, 60, 16); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; rr(-28, -30, 56, 60, 16); g.stroke();
  g.fillStyle = NAVY; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 4); g.fillStyle = "#fff"; g.beginPath(); g.arc(-10, 16, 5, 0, 7); g.arc(10, 16, 5, 0, 7); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(-10, 17, 2.5, 0, 7); g.arc(10, 17, 2.5, 0, 7); g.fill(); g.restore(); }
let OCULTAR = [];
function predioC(x, y, w, h, cor, nome, icone, luz, t) { let oc = OCULTAR.includes("tudo") || OCULTAR.includes(nome);
  let ocIc = false; { g.save(); g.font = `800 20px ${F}`; const m = g.getTransform(), YI = m.d * (y - 14) + m.f; ocIc = YI > 490 || YI < 60; const _x = 0, hw = g.measureText(nome).width / 2 + 6, X0 = m.a * (x + w / 2 - hw) + m.e, X1 = m.a * (x + w / 2 + hw) + m.e, Y0 = m.d * (y + 14) + m.f, Y1 = m.d * (y + 46) + m.f; g.restore();
    if (X0 < 24 || X1 > W - 24 || Y0 < 160 || Y1 > 530 || (X1 > W - 390 && Y0 < 96)) oc = true; } // nome some quando a câmera o empurra para a borda, o selo, o título ou a legenda g.fillStyle = "rgba(0,0,0,.35)"; rr(x + 10, y + 12, w, h, 14); g.fill(); g.fillStyle = cor; rr(x, y, w, h, 14); g.fill();
  for (let r = 0; r < Math.floor((h - 70) / 34); r++) for (let c = 0; c < Math.floor((w - 20) / 34); c++) { g.fillStyle = luz && (r + c + Math.floor((t || 0) * 3)) % 4 ? "#fde68a" : "rgba(255,255,255,.18)"; rr(x + 14 + c * 34, y + 62 + r * 34, 22, 22, 4); g.fill(); }
  if (!oc) { g.fillStyle = "#0f172a"; rr(x + 10, y + 10, w - 20, 42, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(nome, x + w / 2, y + 38); } if (icone && !ocIc) emo(icone, x + w / 2, y - 14, 44); }
function engrenagem(x, y, r, a, cor) { g.save(); g.translate(x, y); g.rotate(a); g.fillStyle = cor || "#94a3b8"; for (let i = 0; i < 10; i++) { g.save(); g.rotate(i * Math.PI / 5); rr(-r * .14, -r * 1.18, r * .28, r * .4, 3); g.fill(); g.restore(); } g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.fillStyle = "#334155"; g.beginPath(); g.arc(0, 0, r * .35, 0, 7); g.fill(); g.restore(); }
function trilho(pts, k, cor) { if (k <= 0) return; g.save(); g.strokeStyle = cor || "#fde68a"; g.lineWidth = 8; g.setLineDash([18, 12]); g.lineDashOffset = -k * 60; g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.stroke(); g.restore(); }
function cidadeFundo(t) { const gr = g.createLinearGradient(0, -300, 0, 1000); gr.addColorStop(0, "#0b1a3a"); gr.addColorStop(1, "#05112a"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1920);
  g.strokeStyle = "rgba(56,189,248,.25)"; g.lineWidth = 3; for (let i = 0; i < 16; i++) { g.beginPath(); g.moveTo(-600 + i * 160, -400); g.lineTo(-600 + i * 160, 1100); g.stroke(); g.beginPath(); g.moveTo(-800, -300 + i * 110); g.lineTo(2200, -300 + i * 110); g.stroke(); } // trilhas da placa-mãe
  for (let i = 0; i < 30; i++) { const x = -600 + ((i * 197 + t * 120) % 2400), y = -300 + (i * 131) % 1300; g.fillStyle = "rgba(56,189,248,.8)"; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); } }
const POS = { ent: [60, 230], cpu: [500, 150], sai: [960, 230], dep: [500, 530], ram: [140, 530] };
function cidade(t, luz, hl, oc) { OCULTAR = oc || []; cidadeFundo(t);
  predioC(60, 230, 300, 250, "#1d4ed8", "ESTAÇÃO ENTRADA", "⌨️", luz, t);
  predioC(500, 150, 300, 330, "#7c3aed", "FÁBRICA CPU", "🧠", luz, t); engrenagem(600, 380, 34, t * 2, "#c4b5fd"); engrenagem(690, 410, 24, -t * 3, "#ddd6fe");
  predioC(960, 230, 300, 250, "#15803d", "TELÃO SAÍDA", "🖥️", luz, t);
  predioC(500, 530, 300, 140, "#b45309", "DEPÓSITO", "💾", luz, t); predioC(140, 530, 260, 140, "#0e7490", "MESA RAM", "🗒️", luz, t);
  lara({ x: 880, y: 482, s: .55, braco: -1.5 + Math.sin(t * 2) * .3, bracoE: .3, olhar: -1, boca: Math.sin(t * 3) > .6 ? "riso" : "", pisca: pisca(t) });
  if (hl) { const [x, y] = POS[hl]; g.strokeStyle = "#facc15"; g.lineWidth = 8; rr(x - 10, y - 10, hl === "ram" ? 280 : 320, hl === "dep" || hl === "ram" ? 160 : hl === "cpu" ? 350 : 270, 20); g.stroke(); } }

function fundoSala(t) {
  g.fillStyle = "#f6e7c8"; g.fillRect(0, 0, W, H);
  g.fillStyle = "#e9d3a6"; g.fillRect(0, 500, W, 220);
  g.fillStyle = "#2f5d4a"; rr(120, 70, 520, 250, 14); g.fill(); g.strokeStyle = "#b07a3c"; g.lineWidth = 12; g.stroke();
  g.fillStyle = "rgba(255,255,255,.75)"; g.font = `700 30px ${F}`; g.textAlign = "left"; g.fillText("Informática", 160, 285);
  g.fillStyle = "#fff"; g.beginPath(); g.arc(1090, 120, 46, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.stroke();
  g.beginPath(); g.moveTo(1090, 120); g.lineTo(1090, 92); g.moveTo(1090, 120); g.lineTo(1112, 128); g.stroke();
}
const F0 = "Entrada, processamento e saída: a viagem do dois mais três!",
  F1 = "A Lara digitou dois mais três na calculadora do computador e, num piscar de olhos, apareceu cinco na tela. Ela arregalou os olhos: mas o que aconteceu aí dentro? Vamos entrar no computador para descobrir!",
  F2 = "Lá dentro, o computador parece uma cidade! Cada parte tem um trabalho. E todo computador, do celular ao caixa do mercado, trabalha em etapas: entrada, processamento e saída.",
  F3 = "Primeira parada: a Estação Entrada. É por aqui que a informação chega de fora. Quando a Lara apertou as teclas, o dois, o mais e o três embarcaram no trem!",
  F4 = "E o teclado não é a única porta de entrada. O mouse, o microfone, a câmera e o leitor de código de barras do mercado também são peças de entrada.",
  F5 = "O trem chegou na Fábrica, o cérebro do computador: o processador, a cê pê u. Cê pê u quer dizer, em português, unidade central de processamento. Ele mora dentro do gabinete, a caixa do computador, e faz as contas e segue as instruções. Dois mais três… entra na máquina… e sai o cinco!",
  F6 = "Última parada: o Telão Saída. É aqui que o resultado aparece. O cinco surgiu na tela! Monitor, caixa de som, impressora e fone de ouvido são peças de saída: eles mostram ou entregam o resultado.",
  F7 = "Viu o caminho? Entrou pelo teclado, foi processado na cê pê u e saiu no monitor. Entrada, processamento, saída: a viagem completa!",
  F8 = "E tem peça que é entrada e saída ao mesmo tempo! A tela de toque do celular, a touchscreen, recebe o seu dedo, que é entrada, e mostra as imagens, que é saída. O fone com microfone ouve a sua voz e toca o som.",
  F9 = "Mas e para guardar as coisas? Para isso existe o Depósito: o armazenamento. O agá dê, o ésse ésse dê, o pen drive e o cartão de memória guardam os arquivos para depois, mesmo com o computador desligado.",
  F10 = "Já a memória RAM é diferente: é como uma mesa de trabalho. Ela guarda só o que está aberto agora. Quando o computador desliga… a mesa fica vazia! Quem não salvou, perdeu.",
  F11 = "Por isso, a regra de ouro: salve sempre! Apertando contrôl ésse, o trabalho sai da mesa e vai para o depósito. Aí, pode desligar sem medo.",
  F12 = "A Lara saiu do computador sabendo tudo. Testou de novo: quatro mais quatro… entrada, processamento, saída: oito! Missão cumprida!",
  F13 = "Onde eu uso isso? No caixa do mercado: o leitor de código de barras é a entrada, o computador processa o preço, e a tela e o cupom são a saída. No celular: o microfone ouve, o processador entende e a resposta aparece. E na urna eletrônica: você digita, ela confere e mostra a foto do candidato.",
  F14 = "Agora é com vocês: abram a Missão 2 no portal!";
const LEG = { 5: "O trem chegou na Fábrica, o cérebro do computador: o processador, a CPU. CPU quer dizer, em português, Unidade Central de Processamento. Ele mora dentro do gabinete, a caixa do computador, e faz as contas e segue as instruções. 2 + 3… entra na máquina… e sai o 5!",
  7: "Viu o caminho? Entrou pelo teclado, foi processado na CPU e saiu no monitor. Entrada, processamento, saída: a viagem completa!",
  9: "Mas e para guardar as coisas? Para isso existe o Depósito: o armazenamento. O HD, o SSD, o pen drive e o cartão de memória guardam os arquivos para depois, mesmo com o computador desligado.",
  11: "Por isso, a regra de ouro: salve sempre! Apertando Ctrl + S, o trabalho sai da mesa e vai para o depósito. Aí, pode desligar sem medo." };
function calcTela(x0, y0, w, h, txt) { g.fillStyle = "#eaf6ff"; g.fillRect(x0, y0, w, h); g.fillStyle = "#1e293b"; rr(x0 + 40, y0 + 20, w - 80, h - 40, 10); g.fill(); g.fillStyle = "#86efac"; g.font = `800 40px ${F}`; g.textAlign = "right"; g.fillText(txt, x0 + w - 56, y0 + h / 2 + 14); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "click"], [1.0, "click"], [1.4, "ding"], [2.2, "festa"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, .6], [1.6, 640, 330, 1]]); cidade(t, true); trilho([[210, 300], [650, 230], [1110, 300]], seg(t, .6, 2.6)); 
     const k = cl((t - .8) / 1.6); if (t > .8) { const x = lerp(210, 1110, k), y = 300 - Math.sin(k * Math.PI) * 90; passageiro(x - 70, y, "2", "#facc15", .8, t); passageiro(x, y, "+", "#fb923c", .8, t); passageiro(x + 70, y, "3", "#facc15", .8, t); }
     g.restore(); abertura(t, "6º ANO · MISSÃO 2", "Entrada, processamento e saída", "A VIAGEM DO", "2 + 3!", 2.2); } },
 { chip: "O MISTÉRIO", fala: F1, legenda: F1.replace("dois mais três", "2 + 3").replace("cinco", "5"), sfx: [[.1, "whoosh"], [em(F1, "dois"), "click"], [em(F1, "cinco"), "ding"], [em(F1, "arregalou"), "misterio"], [em(F1, "entrar"), "whoosh"]],
   draw(t, D) { const d = em(F1, "dois"), c = em(F1, "cinco"), a = em(F1, "arregalou"), en = em(F1, "entrar");
     g.save(); camera(t, [[0, 640, 360, 1], [d, 560, 420, 1.2], [c, 640, 300, 1.15], [en, 640, 300, 1], [en + 1.6, 640, 340, 2.2]]); fundoSala(t);
     monitor(640, 380, 1.25, (x, y, w, h) => calcTela(x, y, w, h, t > c ? "5" : t > d + 1.2 ? "2 + 3" : t > d + .8 ? "2 +" : t > d ? "2" : "0")); teclado(640, 520, 1.1, t > d && t < c ? Math.floor(t * 4) % 3 : -1); gabinete(980, 560, .9, true);
     lara({ x: 250, y: 640, s: 1, braco: t > a ? -2.6 : -1.1, bracoE: t > a ? 2.6 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > a && t < en + .6) balao("O que aconteceu aí dentro?!", 400, 150, 1); if (t > en + 1) { g.fillStyle = `rgba(255,255,255,${cl((t - en - 1) / .6)})`; g.fillRect(0, 0, 1280, 720); } } },
 { chip: "A CIDADE COMPUTADOR", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "cidade"), "festa"], [em(F2, "entrada"), "pop"], [em(F2, "processamento"), "pop"], [em(F2, "saída"), "pop"]],
   draw(t, D) { const ci = em(F2, "cidade"), e = em(F2, "entrada"), p = em(F2, "processamento"), s = em(F2, "saída");
     g.save(); camera(t, [[0, 640, 360, 1.6], [ci, 640, 470, .62], [e, 260, 420, 1], [p, 650, 420, 1], [s, 1060, 420, 1], [s + 1, 640, 470, .62]]); cidade(t, true, t > s ? "" : t > p ? "cpu" : t > e ? "ent" : ""); g.restore();
     if (t < .4) { g.fillStyle = `rgba(255,255,255,${1 - t / .4})`; g.fillRect(0, 0, 1280, 720); }
     if (t > ci) placa("🏙️ DENTRO DO COMPUTADOR", 640, 100, seg(t, ci, ci + .4), "#0e7490"); if (t > s + .8) palavra("ENTRADA → PROCESSAMENTO → SAÍDA", 640, 520, seg(t, s + .8, s + 1.2), 40); } },
 { chip: "1 · ENTRADA", fala: F3, legenda: F3.replace("o dois, o mais e o três", "o 2, o + e o 3"), sfx: [[.1, "whoosh"], [em(F3, "Entrada"), "ding"], [em(F3, "teclas"), "click"], [em(F3, "embarcaram"), "festa"]],
   draw(t, D) { const en = em(F3, "Entrada"), tc = em(F3, "teclas"), eb = em(F3, "embarcaram");
     g.save(); camera(t, [[0, 210, 330, 1.4], [tc, 260, 330, 1.6], [eb, 300, 300, 1.3]]); cidade(t, true, "ent", ["FÁBRICA CPU"]); teclado(210, 560, .7, t > tc && t < eb ? Math.floor(t * 4) % 3 : -1);
     ["2", "+", "3"].forEach((s, i) => { const t0 = tc + i * .4; if (t > t0) { const k = cl((t - t0) / .8), x = lerp(150 + i * 60, 150 + i * 60, k), y = lerp(450, 330, io2(k)); passageiro(x + (t > eb ? (t - eb) * 60 : 0), y, s, i === 1 ? "#fb923c" : "#facc15", .9, t); } });
     g.restore(); palavra("ENTRADA", 640, 110, seg(t, en, en + .4), 70); rotulo("a informação chega de fora", 640, 160, "#bfdbfe", seg(t, en + .4, en + .8)); } },
 { chip: "PORTAS DE ENTRADA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "mouse"), "pop"], [em(F4, "microfone"), "pop"], [em(F4, "câmera"), "pop"], [em(F4, "leitor"), "pop"]],
   draw(t, D) { const ts = ["teclado", "mouse", "microfone", "câmera", "leitor"].map(w => em(F4, w)); cidadeFundo(t);
     g.save(); camera(t, [[0, 640, 380, 1.1], [ts[4], 640, 360, 1]]); predioC(140, 250, 1000, 300, "#1d4ed8", "ESTAÇÃO ENTRADA: AS PORTAS", "", true, t);
     [["⌨️", "TECLADO"], ["🖱️", "MOUSE"], ["🎤", "MICROFONE"], ["📷", "CÂMERA"], ["🛒", "LEITOR DE CÓDIGO"]].forEach(([e, n], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k <= 0) return; const x = 230 + i * 205; g.fillStyle = "#0f172a"; rr(x - 85, 340, 170, 180, 16); g.fill(); emo(e, x, 430, 60 * back(cl(k))); g.fillStyle = "#fde68a"; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText(n, x, 500);
       const sx = x + Math.sin(t * 3 + i) * 4; seta(sx, 300, sx, 340, 1, "#86efac"); }); g.restore();
     palavra("TODAS SÃO PEÇAS DE ENTRADA", 640, 150, seg(t, ts[4] + .5, ts[4] + .9), 44); } },
 { chip: "2 · PROCESSAMENTO", fala: F5, legenda: LEG[5], sfx: [[.1, "whoosh"], [em(F5, "Fábrica"), "pop"], [em(F5, "processador"), "ding"], [em(F5, "unidade"), "pop"], [em(F5, "máquina"), "whoosh"], [em(F5, "cinco"), "festa"]],
   draw(t, D) { const fb = em(F5, "Fábrica"), pr = em(F5, "processador"), un = em(F5, "unidade"), mq = em(F5, "máquina"), ci = em(F5, "cinco");
     g.save(); camera(t, [[0, 400, 420, 1], [fb, 650, 300, 1.25], [mq, 650, 380, 1.7], [ci, 650, 300, 1.25]]); cidade(t, true, "cpu", ["tudo"]); engrenagem(560, 300, 40, t * (t > mq ? 8 : 2), "#c4b5fd"); engrenagem(740, 300, 40, -t * (t > mq ? 8 : 2), "#c4b5fd");
     if (t < mq) ["2", "+", "3"].forEach((s, i) => passageiro(lerp(250, 560 + i * 60, cl((t - fb) / 1.2)), 330, s, i === 1 ? "#fb923c" : "#facc15", .8, t));
     else if (t < ci) { const k = cl((t - mq) / (ci - mq)); ["2", "+", "3"].forEach((s, i) => passageiro(lerp(580 + i * 60, 650, k), 330 + k * 40, s, "#facc15", .8 * (1 - k * .7), t)); }
     else passageiro(650 + (t - ci) * 40, 400, "5", "#86efac", 1.1, t); g.restore();
     if (t > pr) palavra("PROCESSADOR (CPU)", 640, 110, seg(t, pr, pr + .4), 60); if (t > un && t < mq) placa("CPU = Unidade Central de Processamento", 640, 180, 1, "#7c3aed", 22); if (t > ci) etiqueta("O RESULTADO!", 1010, 470, 740, 480, seg(t, ci, ci + .4)); } },
 { chip: "3 · SAÍDA", fala: F6, legenda: F6.replace("O cinco", "O 5"), sfx: [[.1, "whoosh"], [em(F6, "Telão"), "pop"], [em(F6, "cinco"), "festa"], [em(F6, "Monitor"), "pop"], [em(F6, "caixa"), "pop"], [em(F6, "impressora"), "pop"], [em(F6, "fone"), "pop"]],
   draw(t, D) { const te = em(F6, "Telão"), ci = em(F6, "cinco"), mo = em(F6, "Monitor"); const ts = ["Monitor", "caixa", "impressora", "fone"].map(w => em(F6, w));
     g.save(); camera(t, [[0, 800, 420, 1], [te, 1110, 300, 1.3], [mo, 900, 300, 1.25]]); cidade(t, true, "sai", ["FÁBRICA CPU"]); passageiro(lerp(820, 1110, cl((t - te) / 1)), 330, "5", "#86efac", 1, t);
     if (t > ci) { g.fillStyle = "#0f172a"; rr(1010, 290, 200, 120, 12); g.fill(); g.fillStyle = "#86efac"; g.font = `900 80px ${F}`; g.textAlign = "center"; g.fillText("5", 1110, 380); } g.restore();
     palavra("SAÍDA", 640, 110, seg(t, te, te + .4), 70);
     [["🖥️", "MONITOR"], ["🔊", "CAIXA DE SOM"], ["🖨️", "IMPRESSORA"], ["🎧", "FONE"]].forEach(([e, n], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k > 0) { g.fillStyle = "rgba(15,23,42,.85)"; rr(150 + i * 250, 430, 210, 120, 16); g.fill(); emo(e, 255 + i * 250, 495, 46 * back(cl(k))); g.fillStyle = "#bbf7d0"; g.font = `800 16px ${F}`; g.textAlign = "center"; g.fillText(n, 255 + i * 250, 535); } }); } },
 { chip: "A VIAGEM COMPLETA", fala: F7, legenda: LEG[7], sfx: [[.1, "whoosh"], [em(F7, "teclado"), "pop"], [em(F7, "processado"), "pop"], [em(F7, "monitor"), "pop"], [em(F7, "completa"), "festa"]],
   draw(t, D) { const tc = em(F7, "teclado"), pr = em(F7, "processado"), mo = em(F7, "monitor"), co = em(F7, "completa");
     g.save(); camera(t, [[0, 640, 470, .62], [co, 640, 450, .7]]); cidade(t, true); const k = t < tc ? 0 : t < pr ? .33 * cl((t - tc) / (pr - tc)) : t < mo ? .33 + .33 * cl((t - pr) / (mo - pr)) : .66 + .34 * cl((t - mo) / 1);
     trilho([[210, 330], [650, 300], [1110, 330]], 1 + t * .5); const x = k < .5 ? lerp(210, 650, k * 2) : lerp(650, 1110, (k - .5) * 2); passageiro(x, 300 - Math.sin(k * Math.PI * 2) * 40, k > .5 ? "5" : "2+3", k > .5 ? "#86efac" : "#facc15", 1.2, t); g.restore();
     [["ENTRADA", tc, "#2563eb"], ["PROCESSAMENTO", pr, "#7c3aed"], ["SAÍDA", mo, "#16a34a"]].forEach(([s, t0, c], i) => placa(s, 290 + i * 350, 560, seg(t, t0, t0 + .4), c, 26)); if (t > co) confete(t, co); } },
 { chip: "ENTRADA E SAÍDA JUNTAS", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "dedo"), "click"], [em(F8, "imagens"), "ding"], [em(F8, "fone"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const de = em(F8, "dedo"), im = em(F8, "imagens"), fo = em(F8, "fone");
     g.save(); camera(t, [[0, 400, 360, 1.25], [fo, 640, 360, 1]]); celular(400, 380, 1.2, (x, y, w, h) => { g.fillStyle = t > im ? "#bae6fd" : "#0f172a"; g.fillRect(x, y, w, h); if (t > im) { emo("🐱", x + w / 2, y + h / 2 + 20, 70); } });
     if (t > de) { maoApontando(430, 380 + Math.sin(t * 6) * 6, -Math.PI / 2, .9); seta(250, 300, 330, 340, 1, "#93c5fd"); } if (t > im) seta(480, 300, 580, 230, 1, "#86efac");
     if (t > fo) { emo("🎧", 950, 380, 120); seta(870, 470, 920, 420, 1, "#93c5fd"); seta(1010, 320, 1080, 260, 1, "#86efac"); } g.restore();
     if (t > de) placa("👆 ENTRADA: o toque", 230, 200, 1, "#2563eb", 20); if (t > im) placa("🖼️ SAÍDA: a imagem", 640, 180, 1, "#16a34a", 20); if (t > fo) { placa("🎤 voz entra", 1000, 520, 1, "#2563eb", 18); placa("🔊 som sai", 1110, 200, 1, "#16a34a", 18); } } },
 { chip: "O DEPÓSITO", fala: F9, legenda: LEG[9], sfx: [[.1, "whoosh"], [em(F9, "Depósito"), "pop"], [em(F9, "agá"), "pop"], [em(F9, "ésse"), "pop"], [em(F9, "pen"), "pop"], [em(F9, "cartão"), "pop"], [em(F9, "desligado"), "ding"]],
   draw(t, D) { const dp = em(F9, "Depósito"), ts = ["agá", "ésse", "pen", "cartão"].map(w => em(F9, w)), dl = em(F9, "desligado");
     g.save(); camera(t, [[0, 640, 470, .62], [dp, 650, 540, 1.2], [ts[0], 600, 550, 1.15]]); cidade(t, t < dl, "dep");
     [["💽", "HD"], ["⚡", "SSD"], ["🔌", "PEN DRIVE"], ["💳", "CARTÃO"]].forEach(([e, n], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k > 0) { g.fillStyle = "#fef3c7"; rr(330 + i * 160, 330, 140, 130, 14); g.fill(); emo(e, 400 + i * 160, 400, 50 * back(cl(k))); g.fillStyle = NAVY; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText(n, 400 + i * 160, 445); } }); g.restore();
     palavra("ARMAZENAMENTO", 640, 110, seg(t, dp, dp + .4), 60); if (t > dl) placa("💡 guarda mesmo DESLIGADO", 640, 200, seg(t, dl, dl + .4), "#b45309", 24); } },
 { chip: "A MESA RAM", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "RAM"), "ding"], [em(F10, "mesa"), "pop"], [em(F10, "desliga"), "alerta"], [em(F10, "vazia"), "misterio"], [em(F10, "perdeu"), "alerta"]],
   draw(t, D) { const ra = em(F10, "RAM"), me = em(F10, "mesa"), de = em(F10, "desliga"), va = em(F10, "vazia"), pe = em(F10, "perdeu"); const off = t > de + .3;
     g.save(); camera(t, [[0, 640, 470, .62], [ra, 270, 560, 1.35], [de, 400, 540, 1]]); cidade(t, !off, "ram");
     if (!off || t < va) ["📝", "🖼️", "🎵"].forEach((e, i) => { const k = off ? 1 - cl((t - de - .3) / .8) : 1; g.save(); g.globalAlpha = k; emo(e, 210 + i * 70, 630, 40); g.restore(); }); if (off) { g.fillStyle = "rgba(0,0,0,.55)"; g.fillRect(-800, -600, 2880, 1920); } g.restore();
     palavra("MEMÓRIA RAM", 640, 110, seg(t, ra, ra + .4), 60); if (t > me && !off) placa("🗒️ a mesa de trabalho: só o que está aberto AGORA", 640, 190, 1, "#0e7490", 20);
     if (off) palavra("DESLIGOU… MESA VAZIA!", 640, 330, seg(t, de + .3, de + .7), 46); if (t > pe) { lara({ x: 1100, y: 600, s: .8, braco: -2.6, bracoE: 2.6, olhar: -1, boca: "o", pisca: pisca(t) }); balao("Meu trabalho!", 1000, 400, 1); } } },
 { chip: "SALVE SEMPRE!", fala: F11, legenda: LEG[11], sfx: [[.1, "whoosh"], [em(F11, "salve"), "ding"], [em(F11, "contrôl"), "click"], [em(F11, "depósito"), "whoosh"], [em(F11, "medo"), "festa"]],
   draw(t, D) { const sv = em(F11, "salve"), ct = em(F11, "contrôl"), dp = em(F11, "depósito"), md = em(F11, "medo");
     g.save(); camera(t, [[0, 460, 580, 1], [dp, 460, 580, 1.05]]); cidade(t, true, "", ["ESTAÇÃO ENTRADA", "FÁBRICA CPU"]); const k = cl((t - ct - .3) / 1.4); passageiro(lerp(270, 650, k), 620 - Math.sin(k * Math.PI) * 120, "📝", "#fff", 1, t); g.restore();
     palavra("SALVE SEMPRE!", 640, 110, seg(t, sv, sv + .4), 70); if (t > ct) { g.fillStyle = "#e2e8f0"; rr(470, 180, 150, 80, 12); g.fill(); rr(650, 180, 150, 80, 12); g.fill(); g.fillStyle = NAVY; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText("Ctrl", 545, 232); g.fillText("S", 725, 232); g.fillStyle = "#fff"; g.fillText("+", 635, 232); }
     if (t > md) visto(900, 220, 30, seg(t, md, md + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F12, legenda: F12.replace("quatro mais quatro", "4 + 4").replace("oito:", "8:"), sfx: [[.1, "whoosh"], [em(F12, "quatro"), "click"], [em(F12, "oito"), "festa"], [em(F12, "Missão"), "festa"]],
   draw(t, D) { const q = em(F12, "quatro"), oi = em(F12, "oito"), m = em(F12, "Missão");
     g.save(); camera(t, [[0, 640, 360, .7], [.8, 640, 360, 1]]); fundoSala(t); monitor(640, 380, 1.25, (x, y, w, h) => calcTela(x, y, w, h, t > oi ? "8" : t > q ? "4 + 4" : "0")); teclado(640, 520, 1.1, t > q && t < oi ? Math.floor(t * 4) % 3 : -1);
     lara({ x: 250, y: 640, s: 1, braco: t > oi ? -2.4 : -1, bracoE: t > oi ? 2.4 : .3, olhar: 1, boca: t > oi ? "riso" : "", pisca: pisca(t) }); g.restore();
     if (t > q && t < oi) ["ENTRADA", "PROCESSAMENTO", "SAÍDA"].forEach((s, i) => placa(s, 330 + i * 310, 120, seg(t, q + i * .5, q + .3 + i * .5), ["#2563eb", "#7c3aed", "#16a34a"][i], 22)); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F13, sfx: [[.1, "whoosh"], [em(F13, "mercado"), "pop"], [em(F13, "celular"), "pop"], [em(F13, "urna"), "pop"]],
   draw(t, D) { ondeUso(t, F13, [["mercado", "🛒", "Caixa do mercado:", "leitor → computador → tela"], ["celular", "📱", "Celular:", "ouve → entende → responde"], ["urna", "🗳️", "Urna eletrônica:", "digita → confere → mostra"]]); } },
 { chip: "", fala: F14, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 2", [PEDRO, LARA]); } }
];

/* ================= 7º ano · 2027 · 1º bimestre · Missão 1 · Programar com blocos (v2, padrão completo: Monte o seu jogo) ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
// ficha (registro) com campos nome → valor
function ficha(x, y, titulo, campos, k, cor, hl, s) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); const h = 70 + campos.length * 54; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fffbeb"; rr(-150, -h / 2, 300, h, 16); g.fill(); g.fillStyle = cor || "#ca8a04"; rr(-150, -h / 2, 300, 52, 16); g.fill(); g.fillRect(-150, -h / 2 + 30, 300, 22);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(titulo, 0, -h / 2 + 35);
  campos.forEach(([c, v], i) => { const yy = -h / 2 + 88 + i * 54; if (hl === i) { g.fillStyle = "#fde68a"; rr(-138, yy - 30, 276, 46, 10); g.fill(); } g.fillStyle = "#64748b"; g.font = `700 19px ${F}`; g.textAlign = "left"; g.fillText(c, -126, yy); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "right"; g.fillText(v, 126, yy); });
  g.restore(); }
// "repita" em forma de C (boca do bloco)
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
function bocaC(x, y, w, h, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; }
  g.fillStyle = cor; rr(0, 0, w, 52, 10); g.fill(); rr(0, 0, 34, h, 8); g.fill(); rr(0, h - 30, w * .55, 30, 8); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 34); g.restore(); }
// telinha de resultado: linhas de texto; hl = linha marcada de vermelho; ok = linhas verdes
function telinha(x, y, w, tit, linhas, k, hl, ok) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ".  " + s, -w / 2 + 24, yy + 23); });
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
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
function ondeUso(t, F_, itens) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
  itens.forEach(([w, e, a, b], i) => { const t0 = em(F_, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
    g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); }
/* ===== peças "Monte o seu jogo" (7º M1 v2) ===== */
function telaJogo(x, y, w, h, t, o) { o = o || {}; g.save(); g.fillStyle = "#111827"; rr(x - 14, y - 14, w + 28, h + 28, 18); g.fill(); rr(x, y, w, h, 8); g.clip();
  const gr = g.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, "#38bdf8"); gr.addColorStop(1, "#bae6fd"); g.fillStyle = gr; g.fillRect(x, y, w, h);
  for (let i = 0; i < 4; i++) { const cx = x + ((i * 170 - t * 20) % (w + 120) + w + 120) % (w + 120) - 60; g.fillStyle = "rgba(255,255,255,.9)"; g.beginPath(); g.arc(cx, y + 40 + i % 2 * 20, 18, 0, 7); g.arc(cx + 20, y + 34 + i % 2 * 20, 22, 0, 7); g.arc(cx + 42, y + 42 + i % 2 * 20, 16, 0, 7); g.fill(); }
  g.fillStyle = "#16a34a"; g.fillRect(x, y + h - 50, w, 50); g.fillStyle = "#15803d"; for (let i = 0; i < w / 40; i++) g.fillRect(x + i * 40, y + h - 50, 20, 8);
  if (o.moeda) { const mx = x + o.moeda, my = y + h - 120 + Math.sin(t * 4) * 5; g.fillStyle = "#facc15"; g.beginPath(); g.ellipse(mx, my, 14 * Math.abs(Math.cos(t * 3)) + 3, 16, 0, 0, 7); g.fill(); }
  if (o.espinho) { g.fillStyle = "#64748b"; for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(x + o.espinho + i * 20, y + h - 50); g.lineTo(x + o.espinho + 10 + i * 20, y + h - 80); g.lineTo(x + o.espinho + 20 + i * 20, y + h - 50); g.fill(); } }
  const px = x + (o.px || 80), py = y + h - 50 - (o.pulo || 0); g.fillStyle = "#f97316"; rr(px - 18, py - 56, 36, 40, 8); g.fill(); g.fillStyle = "#fde2c8"; rr(px - 16, py - 84, 32, 30, 8); g.fill(); g.fillStyle = NAVY; g.fillRect(px - 8, py - 74, 5, 6); g.fillRect(px + 4, py - 74, 5, 6); g.fillStyle = "#1e3a8a"; g.fillRect(px - 16, py - 16, 12, 16); g.fillRect(px + 4, py - 16, 12, 16);
  if (o.msg) { g.fillStyle = "rgba(15,23,42,.85)"; rr(x + 20, y + 16, w - 40, 30 + o.msg.length * 28, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; o.msg.forEach((m, i) => g.fillText(m, x + 36, y + 40 + i * 28)); }
  if (o.hud) { g.fillStyle = "rgba(15,23,42,.8)"; rr(x + w - 210, y + 10, 200, 40, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText("❤️ " + o.hud[0] + "   ⭐ " + o.hud[1], x + w - 196, y + 37); }
  g.restore(); }
function caixinha(x, y, nome, valor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 26; } g.fillStyle = "#b45309"; rr(-90, -60, 180, 120, 16); g.fill(); g.shadowBlur = 0; g.fillStyle = "#d97706"; rr(-90, -60, 180, 36, 16); g.fill();
  g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("📦 " + nome, 0, -34); g.fillStyle = "#fef3c7"; rr(-60, -14, 120, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `900 40px ${F}`; g.fillText(String(valor), 0, 31); g.restore(); }
function leitor(x, y, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(x, y); g.lineTo(x - 26, y - 16); g.lineTo(x - 26, y + 16); g.fill(); g.restore(); }

const F0 = "Programar com blocos: monte o seu jogo!",
  F1 = "O Caio teve uma ideia: criar um joguinho para a turma, o Pulo do Caio! Ele sentou no computador e mandou: faz um jogo aí! E… nada aconteceu. A Duda riu: o computador não entende o nosso jeito de falar. Você tem que falar a língua dele!",
  F2 = "No sexto ano, você aprendeu que algoritmo é uma lista de passos em ordem. Um programa é um algoritmo escrito numa linguagem que o computador entende. E a nossa linguagem são blocos que se encaixam, como peças de montar!",
  F3 = "O computador lê os blocos de cima para baixo, um de cada vez, e faz exatamente o que eles mandam. Nem mais, nem menos.",
  F4 = "Primeiro bloco: mostrar na tela. Ele escreve uma mensagem na tela do programa. Mostrar na tela, Olá! E aparece: Olá!",
  F5 = "Agora, o personagem precisa pular. O Caio podia colocar três blocos pular, um embaixo do outro. Mas tem o bloco repita! Repita três vezes, pular. E ele faz os blocos de dentro várias vezes: pulo, pulo, pulo!",
  F6 = "E o bloco se, faça, senão escolhe um caminho conforme uma condição. Se o personagem pegou a moeda, mostrar mais dez pontos. Senão, mostrar tente de novo. É como na escola: se a nota for cinco ou mais, passou; senão, recuperação.",
  F7 = "Viu? São as mesmas três ideias dos algoritmos. Sequência: um bloco embaixo do outro, como acordar, escovar os dentes e tomar café. Repetição: blocos dentro do repita, como fazer dez polichinelos. Seleção: blocos dentro do se, como levar guarda-chuva se chover, senão, levar boné.",
  F8 = "Mas atenção à ordem! O Caio colocou o mostrar fim dentro do repita, e apareceu fim, fim, fim, três vezes! Quando ele tirou o bloco para fora, embaixo do repita, o fim apareceu só uma vez, no final. A posição do bloco muda o resultado!",
  F9 = "Todo jogo precisa contar vidas e pontos. Para isso, existe a variável: uma caixinha com nome que guarda um valor. Definir vidas para três guarda três na caixinha vidas.",
  F10 = "E para mudar o valor guardado, usamos o bloco alterar por, na gaveta Variáveis. O personagem bateu no espinho: alterar vidas por menos um, e três vira dois. Pegou a moeda: alterar pontos por dez. É assim que os jogos contam vidas, pontos e tempo!",
  F11 = "O Pulo do Caio ficou pronto! A Duda jogou, pegou moedas, desviou dos espinhos, e a turma toda quis jogar também. Missão cumprida!",
  F12 = "Onde eu uso isso? O despertador do celular é um programa com seleção: se for seis horas, então toca. Nos jogos, a vida do personagem é uma variável, que começa em três e diminui quando ele leva dano. E a máquina de lavar segue uma sequência, molhar, bater, enxaguar e centrifugar, com repetições.",
  F13 = "Agora é com vocês: abram a Missão 1 no portal e montem os seus blocos!";
const L = { 5: "Agora, o personagem precisa pular. O Caio podia colocar 3 blocos “pular”, um embaixo do outro. Mas tem o bloco “repita”! Repita 3 vezes: pular. E ele faz os blocos de dentro várias vezes: pulo, pulo, pulo!",
  6: "E o bloco “se… faça… senão” escolhe um caminho conforme uma condição. Se o personagem pegou a moeda, mostrar “+10 pontos”. Senão, mostrar “tente de novo”. É como na escola: se a nota for 5 ou mais, passou; senão, recuperação.",
  9: "Todo jogo precisa contar vidas e pontos. Para isso, existe a variável: uma caixinha com nome que guarda um valor. “Definir vidas para 3” guarda 3 na caixinha “vidas”.",
  10: "E para mudar o valor guardado, usamos o bloco “alterar … por”, na gaveta 📦 Variáveis. O personagem bateu no espinho: “alterar vidas por -1”, e 3 vira 2. Pegou a moeda: “alterar pontos por 10”. É assim que os jogos contam vidas, pontos e tempo!" };
const pulo = (t, t0, n, dt) => { if (t < t0) return 0; const i = Math.floor((t - t0) / dt); if (i >= n) return 0; return Math.sin(((t - t0) % dt) / dt * Math.PI) * 90; };

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "click"], [.9, "pop"], [1.3, "pop"], [1.7, "festa"]],
   draw(t, D) { g.save(); camera(t, [[0, 820, 280, 2.2], [1.4, 640, 360, 1]]); fundoEscuro(t, "#3b1c6e"); telaJogo(560, 110, 520, 300, t, { pulo: pulo(t, .4, 4, .45), moeda: 380, px: 120 + cl(t / 2) * 180 });
     ["🟨", "🟦", "🟪"].forEach((e, i) => { const k = seg(t, .3 + i * .2, .6 + i * .2); if (k > 0) bloco(180, 220 + i * 66 - (1 - cl(k)) * 80, 240, ["▶️ mostrar", "🔁 repita", "🔀 se"][i], ["#7c3aed", "#f59e0b", "#2563eb"][i], 1); }); g.restore();
     abertura(t, "7º ANO · MISSÃO 1", "Programar com blocos", "MONTE O", "SEU JOGO!", 1.8); } },
 { chip: "O PLANO DO CAIO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "ideia"), "ding"], [em(F1, "faz"), "pop"], [em(F1, "nada"), "misterio"], [em(F1, "riu"), "pop"], [em(F1, "língua"), "ding"]],
   draw(t, D) { const id = em(F1, "ideia"), fz = em(F1, "faz"), na = em(F1, "nada"), ri = em(F1, "riu"), li = em(F1, "língua");
     g.save(); camera(t, [[0, 640, 360, 1], [fz, 520, 380, 1.25], [na, 640, 330, 1.3], [ri, 640, 360, 1]]); fundoSala(t); monitor(640, 380, 1.2, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); if (t > na) { g.fillStyle = "#94a3b8"; g.font = `900 60px ${F}`; g.textAlign = "center"; g.fillText("?", x + w / 2, y + h / 2 + 20); } });
     caio({ x: 300, y: 640, s: 1, braco: t > id && t < fz ? -2.6 : -1.1, bracoE: .3, olhar: 1, boca: t > na ? "o" : "riso", pisca: pisca(t) }); if (t > ri) duda({ x: 980, y: 640, s: 1, braco: -1.4, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t + .4) }); g.restore();
     if (t > id && t < fz) balao("Vou criar o Pulo do Caio!", 330, 170, 1); if (t > fz && t < ri) balao("Faz um jogo aí!", 330, 170, 1); if (t > li) balao("Fala a língua dele: BLOCOS!", 940, 170, 1); } },
 { chip: "PROGRAMA = BLOCOS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "algoritmo"), "pop"], [em(F2, "programa"), "ding"], [em(F2, "blocos"), "click"], [em(F2, "montar"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const al = em(F2, "algoritmo"), pr = em(F2, "programa"), bl = em(F2, "linguagem", 1), mo = em(F2, "montar");
     g.save(); camera(t, [[0, 640, 360, 1], [bl, 520, 330, 1.2], [mo, 640, 360, 1]]);
     if (t > al && t < bl) ["1. ________", "2. ________", "3. ________"].forEach((s, i) => caixa(640, 200 + i * 70, s, "#fff", 1, 300));
     if (t > bl) [["▶️ mostrar na tela Olá!", "#7c3aed"], ["🔁 repita 3 vezes", "#f59e0b"], ["🔀 se … senão", "#2563eb"]].forEach(([s, c], i) => { const k = cl((t - bl - i * .4) / .6); if (k > 0) bloco(330, 150 + i * 70 - (1 - io2(k)) * 260, 380, s, c, 1, k >= 1 && k < 1.3); }); g.restore();
     if (t > pr) palavra("PROGRAMA = ALGORITMO NA LÍNGUA DO COMPUTADOR", 640, 110, seg(t, pr, pr + .4), 34); if (t > mo) placa("🧩 encaixam como peças de montar", 940, 300, seg(t, mo, mo + .4), "#16a34a", 22); } },
 { chip: "DE CIMA PARA BAIXO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "cima"), "pop"], [em(F3, "um"), "click"], [em(F3, "exatamente"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ci = em(F3, "cima"), ex = em(F3, "exatamente"); const k = t > ci ? Math.min(3, Math.floor((t - ci) / .9)) : -1;
     g.save(); camera(t, [[0, 640, 360, 1], [ci, 440, 300, 1.2], [ex, 640, 360, 1]]); [["▶️ mostrar Olá!", "#7c3aed"], ["▶️ mostrar Vamos jogar!", "#7c3aed"], ["▶️ mostrar Boa sorte!", "#7c3aed"]].forEach(([s, c], i) => bloco(250, 160 + i * 80, 380, s, c, 1, k === i)); if (k >= 0 && k < 3) leitor(240, 188 + k * 80, 1);
     telaJogo(750, 150, 400, 260, t, { msg: ["Olá!", "Vamos jogar!", "Boa sorte!"].slice(0, Math.max(0, k + 1)) }); robozinho(160, 470, .9, t, k >= 2); g.restore();
     if (t > ex) palavra("NEM MAIS, NEM MENOS!", 640, 560 - 40, seg(t, ex, ex + .4), 46); } },
 { chip: "📺 MOSTRAR NA TELA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "mostrar"), "click"], [em(F4, "Olá", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const m = em(F4, "mostrar"), o = em(F4, "Olá", 1); g.save(); camera(t, [[0, 640, 360, 1], [o, 660, 320, 1.1]]);
     bloco(180, 200, 380, "▶️ mostrar na tela “Olá!”", "#7c3aed", seg(t, m, m + .4), t > m); if (t > m + .6) seta(570, 228, 680, 228, 1, "#fde68a"); telaJogo(700, 150, 440, 280, t, { msg: t > o ? ["Olá!"] : null }); g.restore();
     palavra("MOSTRAR NA TELA", 640, 110, seg(t, m, m + .4), 56); } },
 { chip: "🔁 REPITA", fala: F5, legenda: L[5], sfx: [[.1, "whoosh"], [em(F5, "três"), "pop"], [em(F5, "repita"), "ding"], [em(F5, "pulo"), "pop"], [em(F5, "pulo", 1), "pop"], [em(F5, "pulo", 2), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const tr = em(F5, "três"), rp = em(F5, "repita"), pu = em(F5, "pulo");
     g.save(); camera(t, [[0, 640, 360, 1], [rp, 560, 320, 1.1], [pu, 760, 330, 1.1]]);
     if (t > tr && t < rp) ["🦘 pular", "🦘 pular", "🦘 pular"].forEach((s, i) => bloco(180, 170 + i * 66, 260, s, "#ea580c", 1));
     if (t > rp) { bocaC(160, 160, 380, 150, "🔁 repita 3 vezes", "#f59e0b", seg(t, rp, rp + .4), true); bloco(200, 222, 220, "🦘 pular", "#ea580c", 1); if (t < pu) xVermelho(320, 400, 20, .0); }
     const p = pulo(t, pu - .3, 3, (em(F5, "pulo", 2) - pu + .6) / 3); telaJogo(640, 150, 500, 300, t, { pulo: p, px: 120 }); if (t > pu) { const n = Math.min(3, 1 + Math.floor((t - pu) / ((em(F5, "pulo", 2) - pu + .01) / 2))); rotulo("pulo × " + n, 890, 500, "#fde68a", 1); } g.restore();
     palavra("REPITA", 640, 100, seg(t, rp, rp + .4), 60); if (t > tr && t < rp) rotulo("3 blocos iguais… dá para encurtar!", 310, 400, "#fecaca", 1); } },
 { chip: "🔀 SE… SENÃO", fala: F6, legenda: L[6], sfx: [[.1, "whoosh"], [em(F6, "condição"), "ding"], [em(F6, "moeda"), "ding"], [em(F6, "Senão"), "alerta"], [em(F6, "escola"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const co = em(F6, "condição"), mo = em(F6, "moeda"), sn = em(F6, "Senão"), es = em(F6, "escola");
     g.save(); camera(t, [[0, 640, 360, 1], [mo, 800, 330, 1.15], [es, 640, 360, 1]]);
     bocaC(80, 140, 520, 250, "🔀 se pegou a moeda, faça", "#2563eb", seg(t, co, co + .4), t > mo && t < sn); bloco(120, 202, 320, "▶️ mostrar “+10 pontos”", "#7c3aed", seg(t, mo, mo + .4)); rotulo("senão", 120, 300, "#bfdbfe", seg(t, sn, sn + .3)); bloco(120, 312, 320, "▶️ mostrar “tente de novo”", "#7c3aed", seg(t, sn, sn + .4), t > sn && t < es);
     const pegou = t > mo && t < sn; telaJogo(660, 140, 480, 290, t, { moeda: pegou ? null : 300, px: pegou ? 300 : 120 + cl((t - co) / 2) * 120, msg: pegou ? ["+10 pontos ⭐"] : t > sn && t < es ? ["tente de novo"] : null }); g.restore();
     if (t > es) placa("🏫 se nota ≥ 5 → passou · senão → recuperação", 640, 520 - 30, seg(t, es, es + .4), "#16a34a", 22); } },
 { chip: "AS 3 IDEIAS", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "Sequência"), "pop"], [em(F7, "Repetição"), "pop"], [em(F7, "Seleção"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const sq = em(F7, "Sequência"), rp = em(F7, "Repetição"), se = em(F7, "Seleção");
     [["➡️ SEQUÊNCIA", sq, "#2563eb", ["⏰", "🪥", "☕"]], ["🔁 REPETIÇÃO", rp, "#f59e0b", ["🤸 × 10"]], ["🔀 SELEÇÃO", se, "#7c3aed", ["🌧️ → ☂️", "☀️ → 🧢"]]].forEach(([n, t0, c, ic], i) => { const k = seg(t, t0, t0 + .5); if (k <= 0) return; const x = 230 + i * 410, on = t > t0 && (i === 2 || t < [rp, se][i]);
       g.save(); g.translate(x, 330); g.scale(back(cl(k)) * (on ? 1.08 : 1), back(cl(k)) * (on ? 1.08 : 1)); g.fillStyle = on ? c : "rgba(255,255,255,.12)"; rr(-180, -150, 360, 300, 24); g.fill(); g.restore();
       placa(n, x, 220, k, c, 24); ic.forEach((e, j) => { const yy = 330 + (j - (ic.length - 1) / 2) * 60; if (i === 1) emo("🤸", x + Math.sin(t * 8) * 10, 330 - Math.abs(Math.sin(t * 8)) * 20, 60), rotulo("× 10", x + 70, 340, "#fff", 1); else emo(e, x, yy + 18, 44); }); }); } },
 { chip: "⚠️ A ORDEM IMPORTA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "dentro"), "pop"], [em(F8, "fim"), "alerta"], [em(F8, "tirou"), "click"], [em(F8, "final"), "ding"], [em(F8, "resultado"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const de = em(F8, "dentro"), f1 = em(F8, "fim", 1), ti = em(F8, "tirou"), fi = em(F8, "final"); const fora = t > ti + .4;
     g.save(); camera(t, [[0, 640, 360, 1], [f1, 840, 300, 1.15], [ti, 360, 300, 1.15], [fi, 640, 360, 1]]);
     bocaC(120, 150, 400, fora ? 150 : 200, "🔁 repita 3 vezes", "#f59e0b", 1); bloco(160, 212, 240, "🦘 pular", "#ea580c", 1); bloco(fora ? 120 : 160, fora ? 320 : 272, 240, "▶️ mostrar “fim”", "#7c3aed", 1, t > de && t < fi);
     telaJogo(640, 150, 480, 300, t, { msg: t > f1 && !fora ? ["fim", "fim", "fim"] : fora && t > fi ? ["fim"] : null }); g.restore();
     if (t > f1 && !fora) placa("DENTRO do repita: 3 vezes!", 640, 520 - 20, 1, "#dc2626", 22); if (fora && t > fi) placa("FORA (embaixo): só 1 vez, no final", 640, 520 - 20, 1, "#16a34a", 22); if (t > em(F8, "resultado")) palavra("A POSIÇÃO MUDA O RESULTADO!", 640, 100, seg(t, em(F8, "resultado"), em(F8, "resultado") + .4), 40); } },
 { chip: "📦 VARIÁVEL", fala: F9, legenda: L[9], sfx: [[.1, "whoosh"], [em(F9, "variável"), "ding"], [em(F9, "caixinha"), "pop"], [em(F9, "Definir"), "click"], [em(F9, "três", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const v = em(F9, "variável"), cx = em(F9, "caixinha"), df = em(F9, "Definir"), tr = em(F9, "três", 1);
     g.save(); camera(t, [[0, 640, 360, 1], [cx, 820, 330, 1.25], [df, 640, 360, 1]]); caixinha(860, 320, "vidas", t > tr ? 3 : "", seg(t, cx, cx + .5), t > tr); if (t > tr) ["❤️", "❤️", "❤️"].forEach((e, i) => emo(e, 800 + i * 60, 450, 40));
     bloco(160, 290, 420, "📦 definir vidas para 3", "#ea580c", seg(t, df, df + .4), t > df && t < tr + .8); if (t > tr) seta(590, 318, 760, 318, 1, "#fde68a"); g.restore();
     palavra("VARIÁVEL", 640, 110, seg(t, v, v + .4), 70); rotulo("uma caixinha com nome que guarda um valor", 640, 170, "#ddd6fe", seg(t, cx, cx + .4)); } },
 { chip: "ALTERAR … POR", fala: F10, legenda: L[10], sfx: [[.1, "whoosh"], [em(F10, "gaveta"), "click"], [em(F10, "espinho"), "alerta"], [em(F10, "dois"), "pop"], [em(F10, "moeda"), "ding"], [em(F10, "tempo"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const gv = em(F10, "gaveta"), es = em(F10, "espinho"), dois = em(F10, "dois"), mo = em(F10, "moeda");
     const vidas = t > dois ? 2 : 3, pts = t > mo + .4 ? 10 : 0; g.save(); camera(t, [[0, 640, 360, 1], [es, 780, 300, 1.2], [mo, 780, 300, 1.2], [mo + 2, 640, 360, 1]]);
     telaJogo(560, 120, 560, 300, t, { espinho: 200, moeda: t < mo + .4 ? 420 : null, px: t < es ? 120 : t < mo ? 210 : 420, pulo: t > es && t < es + .4 ? 40 : 0, hud: [vidas, pts] });
     bloco(100, 150, 400, "📦 alterar vidas por -1", "#ea580c", seg(t, es, es + .4), t > es && t < mo); bloco(100, 250, 400, "📦 alterar pontos por 10", "#ea580c", seg(t, mo, mo + .4), t > mo);
     caixinha(220, 400, "vidas", vidas, 1, t > dois && t < mo); caixinha(440, 400, "pontos", pts, 1, t > mo + .4); g.restore();
     if (t > gv) placa("📦 gaveta Variáveis", 300, 90, seg(t, gv, gv + .4), "#b45309", 20); if (t > es && t < mo) emo("💥", 780, 400, 50); } },
 { chip: "O JOGO FICOU PRONTO!", fala: F11, sfx: [[.1, "festa"], [em(F11, "jogou"), "pop"], [em(F11, "moedas"), "ding"], [em(F11, "turma"), "festa"], [em(F11, "Missão"), "festa"]],
   draw(t, D) { const jo = em(F11, "jogou"), tu = em(F11, "turma"), m = em(F11, "Missão"); g.save(); camera(t, [[0, 640, 300, 1.25], [tu, 640, 360, 1]]); fundoSala(t);
     monitor(640, 360, 1.35, (x, y, w, h) => telaJogo(x, y, w, h, t, { px: 30 + ((t * 60) % (w - 60)), pulo: Math.abs(Math.sin(t * 3)) * 50, moeda: 150 + ((t * 20) % 60), hud: [3, Math.floor(t * 3) * 10] }));
     duda({ x: 330, y: 640, s: 1, braco: -1.2, bracoE: .3, olhar: 1, boca: "riso", pisca: pisca(t) }); caio({ x: 960, y: 640, s: 1, braco: -2.4, bracoE: 2.4, olhar: -1, boca: "riso", pisca: pisca(t + .4) });
     if (t > tu) for (let i = 0; i < 5; i++) pessoa(120 + i * 260, 700, 1, ["#0ea5e9", "#a855f7", "#22c55e", "#f59e0b", "#ef4444"][i]); g.restore(); if (t > tu) confete(t, tu); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "despertador"), "pop"], [em(F12, "jogos"), "pop"], [em(F12, "máquina"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["despertador", "⏰", "Despertador:", "se for 6h, então toca"], ["jogos", "🎮", "Jogos:", "a vida é uma variável"], ["máquina", "🧺", "Máquina de lavar:", "sequência com repetições"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 1", [CAIO, MENINA7]); } }
];
// bonequinho vivo também nas cenas do editor (padrão: personagem presente e reagindo)
[[4, 150], [5, 150], [6, 150], [8, 150], [9, 150], [10, 1200]].forEach(([i, x]) => { const c = CENAS[i], d0 = c.draw; c.draw = function (t, D) { d0.call(this, t, D); g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  (i % 2 ? duda : caio)({ x, y: 575, s: .78, olhar: x < 640 ? 1 : -1, braco: i === 8 ? -2.6 : -1.2 + Math.sin(t * 2.2) * .5, bracoE: i === 8 ? 2.6 : .3, boca: i === 8 ? "o" : Math.sin(t * 1.7) > .4 ? "riso" : "", pisca: pisca(t + i) }); g.restore(); }; });

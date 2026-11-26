/* ================= 6º ano · 2027 · 1º bimestre · Missão 6 · Boa convivência na rede (v2, padrão completo: o grupo da turma pegou fogo) ================= */
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
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
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
/* ===== peças do detetive dos erros (7º M4 v2) ===== */
// programa: repita 3 vezes { mostrar Olá ; [mostrar Fim] } [mostrar Fim]
function prog(x, y, fimDentro, k, hl, sobe) { if (k <= 0) return; const h = fimDentro ? 210 : 150;
  bocaC(x, y, 320, h, "🔁 repita 3 vezes", "#ea580c", k); bloco(x + 36, y + 58, 250, "mostrar “Olá”", "#7c3aed", k);
  const fy = fimDentro ? y + 120 : y + 160 + (sobe || 0); bloco(fimDentro ? x + 36 : x, fy, 250, "mostrar “Fim”", "#7c3aed", k, hl);
  if (hl) { g.strokeStyle = "#ef4444"; g.lineWidth = 5; rr((fimDentro ? x + 36 : x) - 8, fy - 8, 266, 72, 12); g.stroke(); } }
const OBT = ["Olá", "Fim", "Olá", "Fim", "Olá", "Fim"], ESP = ["Olá", "Olá", "Olá", "Fim"];
function inseto(x, y, s, t, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = NAVY; g.lineWidth = 4; const p = Math.sin(t * 14) * 6;
  for (let i = -1; i <= 1; i++) { g.beginPath(); g.moveTo(-6, i * 12); g.lineTo(-34, i * 16 + p * (i ? 1 : -1)); g.moveTo(6, i * 12); g.lineTo(34, i * 16 - p * (i ? 1 : -1)); g.stroke(); }
  g.fillStyle = cor || "#22c55e"; g.beginPath(); g.ellipse(0, 6, 20, 28, 0, 0, 7); g.fill(); g.stroke(); g.beginPath(); g.moveTo(0, -18); g.lineTo(0, 32); g.stroke();
  g.fillStyle = NAVY; g.beginPath(); g.arc(0, -26, 12, 0, 7); g.fill(); g.beginPath(); g.moveTo(-4, -34); g.lineTo(-14, -52); g.moveTo(4, -34); g.lineTo(14, -52); g.stroke();
  g.fillStyle = "#fff"; g.beginPath(); g.arc(-5, -28, 4, 0, 7); g.arc(5, -28, 4, 0, 7); g.fill(); g.restore(); }
function mariposa(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); const a = Math.sin(t * 10) * .25; g.fillStyle = "#a8a29e"; g.strokeStyle = "#57534e"; g.lineWidth = 3;
  [-1, 1].forEach(l => { g.save(); g.scale(l, 1); g.rotate(a); g.beginPath(); g.ellipse(26, -8, 30, 18, -.4, 0, 7); g.fill(); g.stroke(); g.beginPath(); g.ellipse(20, 16, 20, 13, .5, 0, 7); g.fill(); g.stroke(); g.restore(); });
  g.fillStyle = "#57534e"; g.beginPath(); g.ellipse(0, 4, 7, 24, 0, 0, 7); g.fill(); g.restore(); }
function compAntigo(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); for (let i = 0; i < 4; i++) { g.fillStyle = "#64748b"; rr(-260 + i * 132, -220, 124, 300, 8); g.fill(); g.fillStyle = "#334155"; rr(-252 + i * 132, -208, 108, 276, 6); g.fill();
  for (let j = 0; j < 8; j++) for (let q = 0; q < 4; q++) { g.fillStyle = (Math.floor(t * 4 + i * 3 + j + q * 2) % 5) ? "#475569" : ["#facc15", "#ef4444", "#22c55e"][(i + j + q) % 3]; g.beginPath(); g.arc(-232 + i * 132 + q * 24, -186 + j * 30, 6, 0, 7); g.fill(); } } g.restore(); }
function caderno(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.rotate(-.04); g.fillStyle = "#fef9c3"; rr(-160, -110, 320, 220, 8); g.fill(); g.strokeStyle = "#93c5fd"; g.lineWidth = 2;
  for (let i = 0; i < 6; i++) { g.beginPath(); g.moveTo(-140, -70 + i * 30); g.lineTo(140, -70 + i * 30); g.stroke(); } g.restore(); }
function sala7(t) { g.fillStyle = "#fef3c7"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#fcd34d"; g.fillRect(-800, 560, 2880, 700); g.fillStyle = "#b07a3c"; g.fillRect(120, 470, 1040, 26); g.fillStyle = "#8a5a28"; g.fillRect(150, 496, 22, 200); g.fillRect(1110, 496, 22, 200); }
function lixeira(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#64748b"; rr(-40, -60, 80, 90, 8); g.fill(); g.fillStyle = "#475569"; rr(-48, -72, 96, 16, 6); g.fill(); g.strokeStyle = "#94a3b8"; g.lineWidth = 4; [-18, 0, 18].forEach(xx => { g.beginPath(); g.moveTo(xx, -44); g.lineTo(xx, 18); g.stroke(); }); g.restore(); }
function passoC(n, txt, x, y, k) { if (k <= 0) return; cartaoC("Passo " + n + ": " + txt, x, y, 440, "#fde68a", k); }
const F0 = "Depurar: o detetive dos erros!",
  F1 = "O Caio fez um programa que devia mostrar Olá três vezes e, no final, Fim. Mas, quando ele rodou, apareceu Olá, Fim, Olá, Fim, Olá, Fim! Ele ficou bravo e já ia jogar tudo no lixo.",
  F2 = "Calma, Caio! Todo programador erra, até os profissionais. Um erro no programa se chama bug, que em inglês quer dizer inseto. E achar e consertar o erro se chama depurar. Em inglês, debug: tirar o inseto.",
  F3 = "Mas por que inseto? Em mil novecentos e quarenta e sete, uma mariposa ficou presa dentro de um computador enorme e causou uma falha. Os cientistas colaram a mariposa no caderno de anotações, e o nome pegou.",
  F4 = "Os erros mais comuns nos blocos são: ordem trocada, bloco dentro ou fora do lugar, número errado no repita, condição trocada, valor errado e repetição sem fim, aquela que nunca termina, porque a condição de parar nunca acontece.",
  F5 = "Para depurar, primeiro é preciso testar: rodar o programa para ver se ele faz o que devia. De um lado, o resultado esperado, o que devia aparecer. Do outro, o resultado obtido, o que apareceu de verdade.",
  F6 = "Agora, o método do detetive. Passo um: rodar. Passo dois: comparar o esperado com o obtido, linha por linha, e achar a linha onde começou a diferença.",
  F7 = "Passo três: achar o bloco responsável por aquela linha. Passo quatro: mudar uma coisa só e testar de novo.",
  F8 = "Por que uma coisa só? Porque, se você muda tudo de uma vez, não sabe o que resolveu. E pode até criar um erro novo!",
  F9 = "O Caio comparou: a segunda linha devia ser Olá, mas saiu Fim. Então, o bloco mostrar Fim estava dentro do repita! Ele tirou o bloco para fora, testou de novo, e deu certo. Missão cumprida!",
  F10 = "Onde eu uso isso? Quando o aplicativo atualiza com correções de erros, foi alguém depurando. Quando a receita dá errado, você pensa no que fez diferente. E nos jogos, os testadores jogam muitas vezes caçando bugs.",
  F11 = "Agora é com vocês, detetives: abram a Missão 4 no portal!";
const L74 = { 1: F1.replace("Olá três vezes", "Olá 3 vezes"), 3: F3.replace("mil novecentos e quarenta e sete", "1947"), 6: F6.replace("Passo um", "Passo 1").replace("Passo dois", "Passo 2"), 7: F7.replace("Passo três", "Passo 3").replace("Passo quatro", "Passo 4"), 9: F9.replace("o bloco mostrar Fim", "o bloco “mostrar Fim”") };
const ERROS = [["🔀", "ordem trocada"], ["📦", "bloco dentro/fora do lugar"], ["🔢", "número errado no repita"], ["❓", "condição trocada"], ["✏️", "valor errado"], ["♾️", "repetição sem fim"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "misterio"], [1.2, "pop"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 320, 1]]); fundoEscuro(t, "#1e1b4b"); g.fillStyle = "rgba(253,224,71,.12)"; g.beginPath(); g.moveTo(640, -40); g.lineTo(380, 520); g.lineTo(900, 520); g.fill();
     prog(470, 150, true, 1); inseto(560 + Math.sin(t * 2) * 60, 290 + Math.cos(t * 3) * 20, .9, t); lupa(800 + Math.sin(t * 1.5) * 40, 260, 1.4); g.restore();
     abertura(t, "7º ANO · MISSÃO 4", "Depurar: achar e consertar erros", "O DETETIVE", "DOS ERROS!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L74[1], sfx: [[.1, "whoosh"], [em(F1, "rodou"), "tec"], [em(F1, "Fim", 1), "alerta"], [em(F1, "bravo"), "zum"], [em(F1, "lixo"), "desce"]],
   draw(t, D) { const de = em(F1, "devia"), ro = em(F1, "rodou"), br = em(F1, "bravo"), lx = em(F1, "lixo"); const n = Math.min(6, Math.max(0, Math.floor((t - ro) * 3)));
     g.save(); camera(t, [[0, 640, 360, 1], [ro, 700, 320, 1.1], [br, 640, 360, 1]]); sala7(t); prog(170, 140, true, 1); telinha(760, 110, 300, "tela do programa", OBT.slice(0, n), seg(t, ro, ro + .3), n >= 2 ? 1 : -1);
     lixeira(980, 600, .9); caio({ x: 1120, y: 690, s: .95, olhar: -1, braco: t > lx ? -.4 : -1.2, bracoE: .3, boca: t > br ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > de && t < ro) balao("Devia ser: Olá, Olá, Olá, Fim", 600, 470, seg(t, de, de + .3)); if (t > br) emo("😠", 1120, 470, 54); if (t > lx) palavra("ESPERA, CAIO!", 560, 520, seg(t, lx, lx + .4), 50); } },
 { chip: "BUG E DEPURAR", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "bug"), "pop"], [em(F2, "depurar"), "ding"], [em(F2, "debug"), "pop"]],
   draw(t, D) { const er = em(F2, "erra"), bu = em(F2, "bug"), de = em(F2, "depurar"), db = em(F2, "debug"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 640, 360, 1], [bu, 420, 330, 1.12], [de, 820, 340, 1.08], [db, 640, 360, 1]]);
     if (t > bu) { inseto(420, 300, 1.8, t); cartaoC("BUG = erro no programa", 420, 450, 380, "#fff", seg(t, bu, bu + .4), "em inglês, “inseto”"); }
     if (t > de) { lupa(860, 290, 1.6); cartaoC("DEPURAR = achar e consertar o erro", 860, 450, 440, "#fde68a", seg(t, de, de + .4), "em inglês, debug: “tirar o inseto”"); } g.restore();
     palavra(t > bu ? "BUG  →  DEPURAR" : "TODO MUNDO ERRA!", 560, 90, seg(t, 0, .4), 56); robozinho(1170, 600, .9, t, true); if (t > er && t < bu) balao("Até os profissionais! 😉", 900, 200, seg(t, er, er + .3)); } },
 { chip: "1947: O PRIMEIRO “BUG”", fala: F3, legenda: L74[3], sfx: [[.1, "misterio"], [em(F3, "mariposa"), "voa"], [em(F3, "falha"), "alerta"], [em(F3, "colaram"), "pop"], [em(F3, "pegou"), "ding"]],
   draw(t, D) { const ma = em(F3, "mariposa"), fa = em(F3, "falha"), co = em(F3, "colaram"), pe = em(F3, "pegou"); fundoEscuro(t, "#44403c");
     if (t < co) { g.save(); camera(t, [[0, 640, 360, 1], [ma, 600, 300, 1.25], [fa, 640, 340, 1.05]]); compAntigo(640, 360, 1.25, t); if (t > ma) { const k = seg(t, ma, ma + 1.2); mariposa(1000 - 380 * k, 120 + 160 * k, .9, t); }
       if (t > fa) { g.fillStyle = "rgba(239,68,68,.25)"; g.fillRect(0, 0, 1280, 720); } g.restore(); palavra("1947", 560, 90, seg(t, 0, .4), 72); if (t > fa) cartaoC("⚠️ FALHA!", 1060, 220, 240, "#fecaca", seg(t, fa, fa + .4)); }
     else { g.save(); camera(t, [[co, 640, 330, 1.15], [pe, 640, 360, 1]]); caderno(640, 320, 1.6, seg(t, co, co + .4)); mariposa(640, 320, 1.1, 0); g.fillStyle = "rgba(255,255,255,.7)"; g.fillRect(560, 296, 160, 18); g.fillRect(560, 330, 160, 18); g.restore();
       palavra("O NOME PEGOU!", 560, 90, seg(t, pe, pe + .4), 60); etiqueta("a mariposa, colada no caderno", 1050, 520, 760, 360, seg(t, co + .3, co + .7)); } } },
 { chip: "ERROS MAIS COMUNS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "ordem"), "pop"], [em(F4, "dentro"), "pop"], [em(F4, "número"), "pop"], [em(F4, "condição"), "pop"], [em(F4, "valor"), "pop"], [em(F4, "repetição"), "alerta"]],
   draw(t, D) { const ts = ["ordem", "dentro", "número", "condição", "valor", "repetição"].map(w => em(F4, w)), nu = em(F4, "nunca"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 640, 330, 1.06], [ts[5], 640, 360, 1]]); ERROS.forEach(([e, n], i) => { if (t > ts[i]) cartaoC(e + "  " + n, 340 + (i % 2) * 560, 190 + Math.floor(i / 2) * 100, 520, i === 5 && t > nu ? "#fde68a" : "#fff", seg(t, ts[i], ts[i] + .4)); }); g.restore();
     palavra("OS BUGS MAIS COMUNS", 560, 90, seg(t, 0, .4), 54); if (t > nu) etiqueta("laço infinito: a condição de parar nunca acontece", 560, 520, 900, 420, seg(t, nu, nu + .4)); inseto(1180, 560, .8, t); } },
 { chip: "TESTAR: ESPERADO × OBTIDO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "testar"), "ding"], [em(F5, "esperado"), "pop"], [em(F5, "obtido"), "pop"]],
   draw(t, D) { const te = em(F5, "testar"), es = em(F5, "esperado"), ob = em(F5, "obtido"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [es, 560, 340, 1.04], [ob, 720, 340, 1.04], [ob + 2, 640, 360, 1]]); telinha(360, 150, 340, "✅ resultado ESPERADO", ESP, seg(t, es, es + .4), -1, true); telinha(880, 130, 340, "🖥️ resultado OBTIDO", OBT, seg(t, ob, ob + .4)); g.restore();
     palavra("TESTAR = RODAR E CONFERIR", 560, 90, seg(t, te, te + .4), 50); caio({ x: 1180, y: 690, s: .7, olhar: -1, braco: -1.3, bracoE: .3, boca: "", pisca: pisca(t) }); } },
 { chip: "MÉTODO DO DETETIVE 1 E 2", fala: F6, legenda: L74[6], sfx: [[.1, "whoosh"], [em(F6, "rodar"), "tec"], [em(F6, "comparar"), "pop"], [em(F6, "linha", 1), "pop"], [em(F6, "diferença"), "alerta"]],
   draw(t, D) { const ro = em(F6, "rodar"), co = em(F6, "comparar"), di = em(F6, "diferença"); fundoEscuro(t, "#312e81"); const lnh = t > co ? Math.min(2, Math.floor((t - co) * 1.5)) : -1;
     palavra("🕵️ MÉTODO DO DETETIVE", 560, 90, seg(t, 0, .4), 54); passoC(1, "rodar", 250, 180, seg(t, ro, ro + .4)); passoC(2, "comparar", 250, 270, seg(t, co, co + .4));
     g.save(); camera(t, [[0, 640, 360, 1], [co, 680, 350, 1.04], [di + 1, 640, 360, 1]]); telinha(660, 140, 280, "esperado", ESP.slice(0, 3), seg(t, co, co + .4), t > di ? 1 : -1, t < di); telinha(970, 140, 280, "obtido", OBT.slice(0, 3), seg(t, co, co + .4), t > di ? 1 : -1);
     if (lnh >= 0 && t < di) { g.strokeStyle = "#fde047"; g.lineWidth = 4; rr(515, 192 + lnh * 44, 600, 42, 8); g.stroke(); } g.restore();
     if (t > di) etiqueta("a diferença começa na LINHA 2!", 760, 520, 760, 260, seg(t, di, di + .4)); } },
 { chip: "MÉTODO DO DETETIVE 3 E 4", fala: F7, legenda: L74[7], sfx: [[.1, "whoosh"], [em(F7, "achar"), "misterio"], [em(F7, "responsável"), "ding"], [em(F7, "mudar"), "pop"], [em(F7, "testar"), "tec"]],
   draw(t, D) { const ac = em(F7, "achar"), re = em(F7, "responsável"), mu = em(F7, "mudar"), te = em(F7, "testar"); fundoEscuro(t, "#312e81");
     palavra("🕵️ MÉTODO DO DETETIVE", 560, 90, seg(t, 0, .4), 54); passoC(3, "achar o bloco", 250, 180, seg(t, ac, ac + .4)); passoC(4, "mudar UMA coisa e testar", 250, 270, seg(t, mu, mu + .4));
     g.save(); camera(t, [[0, 640, 360, 1], [ac, 720, 330, 1.12], [te, 640, 360, 1]]); prog(560, 170, true, 1, t > re); if (t > ac) lupa(980 - 60 * seg(t, ac, re), 330, 1.3); g.restore();
     if (t > re) etiqueta("este bloco gera a linha 2!", 1060, 520, 860, 330, seg(t, re, re + .4)); robozinho(1170, 260, .8, t, true); } },
 { chip: "UMA COISA DE CADA VEZ", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "tudo"), "zum"], [em(F8, "resolveu"), "misterio"], [em(F8, "novo"), "alerta"]],
   draw(t, D) { const tu = em(F8, "tudo"), rs = em(F8, "resolveu"), nv = em(F8, "novo"); fundoEscuro(t, "#7f1d1d");
     g.save(); camera(t, [[0, 640, 360, 1], [tu, 640, 340, 1.08], [nv, 640, 360, 1]]); const k = seg(t, tu, tu + 1);
     ["🔁 repita 5 vezes", "mostrar “Oi”", "mostrar “Tchau”", "se… senão"].forEach((s, i) => bloco(420 + Math.sin(i * 2 + t * 3) * 120 * k, 150 + i * 76 + Math.cos(i + t * 2) * 30 * k, 300, s, ["#ea580c", "#7c3aed", "#7c3aed", "#0891b2"][i], 1));
     if (t > nv) { inseto(860, 260, 1.1, t, "#ef4444"); inseto(940, 380, .9, t + 1, "#ef4444"); } g.restore();
     palavra("MUDOU TUDO? 😵", 560, 90, seg(t, tu, tu + .4), 56); if (t > rs) cartaoC("❓ o que resolveu? ninguém sabe!", 560, 520, 520, "#fff", seg(t, rs, rs + .4)); if (t > nv) etiqueta("erro NOVO!", 1080, 200, 900, 250, seg(t, nv, nv + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, legenda: L74[9], sfx: [[.1, "whoosh"], [em(F9, "comparou"), "pop"], [em(F9, "dentro"), "alerta"], [em(F9, "tirou"), "voa"], [em(F9, "certo"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const cp = em(F9, "comparou"), de = em(F9, "dentro"), ti = em(F9, "tirou"), ce = em(F9, "certo"), mc = em(F9, "Missão"); const fora = t > ti + 1;
     g.save(); camera(t, [[0, 640, 360, 1], [de, 420, 320, 1.12], [ce, 640, 360, 1]]); sala7(t); prog(170, 140, !fora, 1, t > de && !fora);
     telinha(760, 110, 300, "tela do programa", t > ce ? ESP : OBT.slice(0, 2), 1, t > cp && t < ce ? 1 : -1, t > ce);
     caio({ x: 1120, y: 690, s: .95, olhar: -1, braco: t > mc ? -2.6 : -1, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > ti && t < ce) etiqueta("para FORA do repita!", 300, 520, 300, 460, seg(t, ti, ti + .4)); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "aplicativo"), "pop"], [em(F10, "receita"), "pop"], [em(F10, "jogos"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["aplicativo", "📲", "Atualização do app:", "“correções de erros”"], ["receita", "🍰", "Receita que deu errado:", "o que fiz diferente?"], ["jogos", "🎮", "Testadores de jogos:", "caçando bugs"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 4", [CAIO, MENINA7]); } }
];

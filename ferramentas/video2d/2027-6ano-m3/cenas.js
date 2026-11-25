/* ================= 6º ano · 2027 · 1º bimestre · Missão 3 · Hardware e software (v2, padrão completo: a Banda do Computador) ================= */
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
/* ===== peças "A Banda do Computador" (6º M3 v2) ===== */
function palcoBanda(t, luz) { const gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, "#2e1065"); gr.addColorStop(1, "#0c0420"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1920);
  for (let i = 0; i < 9; i++) { g.fillStyle = `hsla(${(i * 40 + t * 60) % 360},80%,60%,.10)`; g.beginPath(); g.moveTo(80 + i * 140, -40); g.lineTo(-40 + i * 140 + Math.sin(t + i) * 40, 520); g.lineTo(200 + i * 140 + Math.sin(t + i) * 40, 520); g.closePath(); g.fill(); }
  g.fillStyle = "#4c1d95"; g.fillRect(-800, 500, 2880, 40); g.fillStyle = "#1e1b4b"; g.fillRect(-800, 540, 2880, 700);
  if (luz !== false) for (let i = 0; i < 20; i++) { g.fillStyle = (i + Math.floor(t * 5)) % 2 ? "#fde047" : "#a855f7"; g.beginPath(); g.arc(-40 + i * 70, 518, 6, 0, 7); g.fill(); } }
function nota(x, y, s, cor, a) { g.save(); g.translate(x, y); g.rotate(a || 0); g.scale(s, s); g.fillStyle = cor || "#fde047"; g.beginPath(); g.ellipse(0, 0, 16, 12, -.4, 0, 7); g.fill(); g.fillRect(12, -50, 6, 50); g.beginPath(); g.moveTo(18, -50); g.quadraticCurveTo(40, -36, 30, -14); g.lineTo(28, -20); g.quadraticCurveTo(32, -34, 18, -40); g.fill(); g.restore(); }
function notasVoando(t, n, x0, y0, w, h, alpha) { g.save(); g.globalAlpha = alpha == null ? 1 : alpha; for (let i = 0; i < n; i++) { const x = x0 + ((i * 137 + t * 70) % w), y = y0 + h - ((i * 89 + t * 50) % h); nota(x, y, .7 + (i % 3) * .2, ["#fde047", "#f472b6", "#67e8f9", "#86efac"][i % 4], Math.sin(t * 2 + i) * .3); } g.restore(); }
function maestro(x, y, s, t, ativo) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#111827"; rr(-34, -10, 68, 90, 14); g.fill(); g.fillStyle = "#fff"; g.beginPath(); g.moveTo(-10, -10); g.lineTo(0, 20); g.lineTo(10, -10); g.fill();
  g.fillStyle = "#f1c27d"; g.beginPath(); g.arc(0, -38, 28, 0, 7); g.fill(); g.fillStyle = "#e5e7eb"; g.beginPath(); g.arc(0, -52, 26, Math.PI, 0); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(-9, -38, 3.5, 0, 7); g.arc(9, -38, 3.5, 0, 7); g.fill();
  const a = ativo ? Math.sin(t * 6) * .6 : 0; g.save(); g.translate(30, 10); g.rotate(-1 + a); g.strokeStyle = "#111827"; g.lineWidth = 12; g.beginPath(); g.moveTo(0, 0); g.lineTo(40, 0); g.stroke(); g.strokeStyle = "#fff"; g.lineWidth = 4; g.beginPath(); g.moveTo(40, 0); g.lineTo(90, 0); g.stroke(); g.restore(); g.restore(); }
function pedestal(x, y, txt, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#312e81"; rr(-80, 0, 160, 40, 8); g.fill(); g.fillStyle = "#fde68a"; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 26); g.restore(); }
function giratorio(x, y, r, t) { g.save(); g.translate(x, y); for (let i = 0; i < 8; i++) { g.globalAlpha = (i + 1) / 8; g.fillStyle = "#e2e8f0"; g.beginPath(); g.arc(Math.cos(t * 6 + i * .78) * r, Math.sin(t * 6 + i * .78) * r, r * .18, 0, 7); g.fill(); } g.restore(); }

const F0 = "Hardware e software: a banda do computador!",
  F1 = "O Pedro estava no meio do jogo quando o celular travou. A rodinha ficou girando, girando… Ele ficou tão bravo que já ia jogar o celular na cama! A Lara segurou o braço dele: calma! Isso é problema de hardware ou de software? E o Pedro: hã?",
  F2 = "Para entender, imagine que o computador é uma banda. Todo computador tem duas partes que trabalham juntas, como os instrumentos e a música.",
  F3 = "Os instrumentos são o hardware: as peças físicas, que dá para tocar com a mão. Teclado, mouse, monitor, processador, cabo e pen drive. Tudo isso é hardware.",
  F4 = "E a música é o software: os programas. Dá para ouvir, dá para ver funcionando, mas não dá para pegar com a mão! O navegador, os jogos, o editor de texto e os aplicativos do celular são software.",
  F5 = "Um precisa do outro! Instrumento sem música fica parado: hardware sem software não faz nada. E música sem instrumento não toca: o software precisa do hardware para funcionar.",
  F6 = "Tem até uma brincadeira para lembrar: hardware é o que você chuta; software é o que você xinga quando trava! Mas calma, ninguém precisa chutar nem xingar nada, tá?",
  F7 = "Toda banda tem um maestro. No computador, ele se chama sistema operacional: um software especial, que é o primeiro a ligar e comanda todo o resto. Ele mostra a área de trabalho, abre as janelas e conversa com as peças.",
  F8 = "Os sistemas operacionais mais conhecidos são o Windows e o Linux, nos computadores, e o Android e o iOS, nos celulares.",
  F9 = "E as músicas que a banda toca são os aplicativos: cada um faz uma tarefa para você. O navegador abre os sites, como este portal. O editor de texto serve para escrever trabalhos. A calculadora faz contas. O tocador de música toca as músicas. E o jogo… diverte!",
  F10 = "Agora o Pedro entendeu: a tela estava inteira, as peças estavam funcionando. Quem travou foi o jogo, um aplicativo: problema de software! Ele fechou o jogo, abriu de novo, e voltou a funcionar. Missão cumprida!",
  F11 = "Onde eu uso isso? Quando o celular trava, o problema costuma ser de software; quando a tela quebra, é de hardware. Quando você instala um jogo, está colocando um software novo no aparelho. E, na oficina de celular, o técnico troca peças, que é hardware, ou formata e atualiza o sistema, que é software.",
  F12 = "Agora é com vocês: abram a Missão 3 no portal!";
const LEG8 = "Os sistemas operacionais mais conhecidos são o Windows e o Linux, nos computadores, e o Android e o iOS, nos celulares.";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "festa"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 330, 1.4], [1.5, 640, 360, 1]]); palcoBanda(t); notasVoando(t, 16, 0, 40, 1280, 420);
     [["⌨️", 330], ["🖥️", 640], ["🖱️", 950]].forEach(([e, x], i) => { const k = seg(t, .3 + i * .25, .6 + i * .25); if (k > 0) emo(e, x, 300 + Math.sin(t * 4 + i) * 10, 90 * back(cl(k))); }); maestro(640, 440, .9, t, true); g.restore();
     abertura(t, "6º ANO · MISSÃO 3", "Hardware e software", "A BANDA DO", "COMPUTADOR!", 1.8); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "travou"), "alerta"], [em(F1, "bravo"), "misterio"], [em(F1, "calma"), "pop"], [em(F1, "hã"), "pop"]],
   draw(t, D) { const tr = em(F1, "travou"), br = em(F1, "bravo"), ca = em(F1, "calma"), ha = em(F1, "hã");
     g.save(); camera(t, [[0, 640, 360, 1], [tr, 500, 330, 1.4], [br, 520, 380, 1.1], [ca, 640, 380, 1]]); fundoSala(t);
     const px = 420, braco = t > br && t < ca ? -2.7 : -1.2; pedro({ x: px, y: 640, s: 1.05, braco, bracoE: .3, olhar: 1, boca: t > br ? "o" : "", pisca: pisca(t) });
     celular(px + 150, t > br && t < ca ? 330 : 470, .45, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); if (t > tr) giratorio(x + w / 2, y + h / 2, 26, t); else { g.fillStyle = "#22c55e"; g.fillRect(x + 20, y + h - 60, w - 40, 20); } });
     if (t > ca) lara({ x: 800, y: 640, s: 1.05, braco: -1.6, bracoE: .3, olhar: -1, boca: "o", pisca: pisca(t + .4) }); g.restore();
     if (t > br && t < ca) balao("Grrr! Travou de novo!", 420, 150, 1); if (t > ca && t < ha) balao("Calma! Hardware ou software?", 820, 170, 1); if (t > ha) balao("Hã?!", 380, 200, 1); } },
 { chip: "A BANDA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "banda"), "festa"], [em(F2, "instrumentos"), "pop"], [em(F2, "música"), "ding"]],
   draw(t, D) { const b = em(F2, "banda"), i2 = em(F2, "instrumentos"), m = em(F2, "música");
     g.save(); camera(t, [[0, 640, 360, 3], [b, 640, 360, 1], [m, 640, 330, 1.1]]); palcoBanda(t); if (t > b + .5) [["⌨️", 250], ["🖥️", 500], ["🖱️", 760], ["💾", 1020]].forEach(([e, x], i) => emo(e, x, 430, 80));
     if (t > b + 1.2) notasVoando(t, 14, 100, 60, 1080, 280); g.restore();
     placa("🎸 INSTRUMENTOS = as PEÇAS", 380, 120, seg(t, i2, i2 + .4), "#2563eb", 22); placa("🎵 MÚSICA = os PROGRAMAS", 900, 120, seg(t, m, m + .4), "#db2777", 22); } },
 { chip: "HARDWARE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "hardware"), "ding"], [em(F3, "tocar"), "pop"], [em(F3, "Teclado"), "pop"], [em(F3, "monitor"), "pop"], [em(F3, "processador"), "pop"], [em(F3, "pen"), "pop"]],
   draw(t, D) { const hw = em(F3, "hardware"), tc = em(F3, "tocar"); const ts = ["Teclado", "mouse", "monitor", "processador", "cabo", "pen"].map(w => em(F3, w));
     g.save(); camera(t, [[0, 640, 360, 1], [tc, 420, 420, 1.3], [ts[1], 640, 380, 1]]); palcoBanda(t);
     [["⌨️", "TECLADO"], ["🖱️", "MOUSE"], ["🖥️", "MONITOR"], ["🧠", "PROCESSADOR"], ["🔌", "CABO"], ["💾", "PEN DRIVE"]].forEach(([e, n], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k <= 0) return; const x = 170 + i * 188; emo(e, x, 400, 70 * back(cl(k))); pedestal(x, 440, n, k); });
     pedro({ x: 420, y: 640, s: .85, braco: t > tc ? -1.2 : -.6, bracoE: .3, olhar: 1, boca: "riso", pisca: pisca(t) }); if (t > tc && t < ts[1]) maoApontando(470, 430, -.4, .8); g.restore();
     palavra("HARDWARE", 640, 120, seg(t, hw, hw + .4), 80); rotulo("as peças físicas: dá para TOCAR", 640, 180, "#bfdbfe", seg(t, tc, tc + .4)); } },
 { chip: "SOFTWARE", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "software"), "ding"], [em(F4, "pegar"), "alerta"], [em(F4, "navegador"), "pop"], [em(F4, "jogos"), "pop"], [em(F4, "editor"), "pop"], [em(F4, "aplicativos"), "pop"]],
   draw(t, D) { const sw = em(F4, "software"), pg = em(F4, "pegar"); const ts = ["navegador", "jogos", "editor", "aplicativos"].map(w => em(F4, w));
     g.save(); camera(t, [[0, 640, 360, 1], [pg, 560, 380, 1.35], [ts[0], 640, 360, 1]]); palcoBanda(t); notasVoando(t, 18, 80, 140, 1120, 300);
     const ag = t > pg && t < ts[0]; pedro({ x: 520, y: 640, s: .9, braco: ag ? -2.4 + Math.sin(t * 9) * .3 : -.6, bracoE: ag ? 2.4 : .3, olhar: 1, boca: ag ? "o" : "", pisca: pisca(t) }); if (ag) { nota(560, 380 - ((t - pg) * 60) % 60, 1.2, "#fde047"); rotulo("não dá para pegar!", 620, 300, "#fecaca", 1); }
     [["🌐", "NAVEGADOR"], ["🎮", "JOGOS"], ["📝", "EDITOR DE TEXTO"], ["📱", "APLICATIVOS"]].forEach(([e, n], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k > 0) { emo(e, 230 + i * 270, 230, 64 * back(cl(k))); pedestal(230 + i * 270, 270, n, k); } }); g.restore();
     palavra("SOFTWARE", 640, 120, seg(t, sw, sw + .4), 80); } },
 { chip: "UM PRECISA DO OUTRO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "parado"), "alerta"], [em(F5, "toca"), "alerta"], [em(F5, "funcionar"), "festa"]],
   draw(t, D) { const pa = em(F5, "parado"), tc = em(F5, "toca"), fu = em(F5, "funcionar");
     if (t < tc) { g.save(); camera(t, [[0, 640, 360, 1], [pa, 640, 400, 1.15]]); palcoBanda(t, false); g.fillStyle = "rgba(0,0,0,.4)"; g.fillRect(-800, -600, 2880, 1920); [["⌨️", 330], ["🖥️", 640], ["🖱️", 950]].forEach(([e, x]) => emo(e, x, 400, 80)); emo("💤", 700, 300, 50); g.restore(); if (t > pa) placa("🎸 sem 🎵 = PARADO: hardware sem software não faz nada", 640, 130, 1, "#475569", 20); }
     else if (t < fu) { fundoEscuro(t, "#111827"); notasVoando(t, 10, 300, 150, 680, 300, .5); emo("🔇", 640, 360, 90); placa("🎵 sem 🎸 = NÃO TOCA: software precisa do hardware", 640, 130, 1, "#475569", 20); }
     else { g.save(); camera(t, [[fu, 640, 360, 1.2], [fu + 1, 640, 360, 1]]); palcoBanda(t); notasVoando(t, 18, 0, 60, 1280, 400); [["⌨️", 330], ["🖥️", 640], ["🖱️", 950]].forEach(([e, x], i) => emo(e, x, 400 + Math.sin(t * 6 + i) * 10, 80)); g.restore(); palavra("JUNTOS, FUNCIONA!", 640, 120, seg(t, fu, fu + .4), 60); confete(t, fu); } } },
 { chip: "PARA NÃO ESQUECER 😅", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "chuta"), "pop"], [em(F6, "xinga"), "pop"], [em(F6, "calma"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const ch = em(F6, "chuta"), xi = em(F6, "xinga"), ca = em(F6, "calma");
     g.save(); camera(t, [[0, 640, 360, 1], [ch, 380, 380, 1.15], [xi, 900, 380, 1.15], [ca, 640, 380, 1]]);
     if (t > ch) { gabinete(380, 520, .9, false); const k = Math.sin(cl((t - ch) / .6) * Math.PI); emo("🦶", 260 + k * 60, 470, 60); placa("HARDWARE = o que você chuta", 380, 230, 1, "#2563eb", 20); }
     if (t > xi) { celular(900, 420, .6, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); giratorio(x + w / 2, y + h / 2, 22, t); }); emo("🤬", 1020, 300, 50); placa("SOFTWARE = o que você xinga", 900, 230, 1, "#db2777", 20); }
     if (t > ca) { g.fillStyle = "rgba(0,0,0,.45)"; g.fillRect(-800, -600, 2880, 1920); emo("😇", 640, 420, 90); } g.restore(); if (t > ca) palavra("NINGUÉM PRECISA CHUTAR NEM XINGAR!", 640, 140, seg(t, ca, ca + .4), 36); } },
 { chip: "O MAESTRO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "maestro"), "festa"], [em(F7, "operacional"), "ding"], [em(F7, "primeiro"), "pop"], [em(F7, "área"), "pop"], [em(F7, "janelas"), "pop"], [em(F7, "peças"), "pop"]],
   draw(t, D) { const ma = em(F7, "maestro"), so = em(F7, "operacional"), pr = em(F7, "primeiro"), ar = em(F7, "área"), ja = em(F7, "janelas"), pc = em(F7, "peças");
     g.save(); camera(t, [[0, 640, 360, 1], [ma, 640, 420, 1.4], [ar, 640, 360, 1]]); palcoBanda(t); maestro(640, 470, 1.3, t, t > ma);
     if (t > pr) rotulo("1º A LIGAR", 640, 560 - 20, "#fde68a", 1); if (t > ar) { monitor(260, 380, .8, (x, y, w, h) => { g.fillStyle = "#3b82f6"; g.fillRect(x, y, w, h); g.fillStyle = "#e2e8f0"; g.fillRect(x, y + h - 22, w, 22); }); }
     if (t > ja) { monitor(1020, 380, .8, (x, y, w, h) => { g.fillStyle = "#3b82f6"; g.fillRect(x, y, w, h); g.fillStyle = "#fff"; rr(x + 30, y + 20, w - 60, h - 60, 6); g.fill(); g.fillStyle = "#1e3a8a"; g.fillRect(x + 30, y + 20, w - 60, 16); }); }
     if (t > pc) [[330, 200], [950, 200]].forEach(([x, y]) => seta(640, 380, x, y + 120, 1, "#fde68a")); g.restore();
     if (t > so) palavra("SISTEMA OPERACIONAL", 640, 110, seg(t, so, so + .4), 58); if (t > ar) placa("mostra a área de trabalho", 260, 200, 1, "#7c3aed", 18); if (t > ja) placa("abre as janelas", 1020, 200, 1, "#7c3aed", 18); } },
 { chip: "OS MAESTROS FAMOSOS", fala: F8, legenda: LEG8, sfx: [[.1, "whoosh"], [em(F8, "Windows"), "pop"], [em(F8, "Linux"), "pop"], [em(F8, "Android"), "pop"], [em(F8, "iOS"), "pop"]],
   draw(t, D) { palcoBanda(t); const ts = ["Windows", "Linux", "Android", "iOS"].map(w => em(F8, w));
     [["💻", "Windows", "computador"], ["💻", "Linux", "computador"], ["📱", "Android", "celular"], ["📱", "iOS", "celular"]].forEach(([e, n, d], i) => { const k = seg(t, ts[i], ts[i] + .4); if (k <= 0) return; const x = 220 + i * 280; maestro(x, 430, .8 * back(cl(k)), t, true); placa(n, x, 250, k, i < 2 ? "#2563eb" : "#16a34a", 26); rotulo(d, x, 300, "#e2e8f0", k); emo(e, x + 60, 350, 36); }); } },
 { chip: "AS MÚSICAS: APLICATIVOS", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "aplicativos"), "ding"], [em(F9, "navegador"), "pop"], [em(F9, "editor"), "pop"], [em(F9, "calculadora"), "pop"], [em(F9, "tocador"), "pop"], [em(F9, "jogo"), "festa"]],
   draw(t, D) { const ap = em(F9, "aplicativos"); const ts = ["navegador", "editor", "calculadora", "tocador", "jogo"].map(w => em(F9, w)); const k = ts.filter(x => t > x).length;
     g.save(); camera(t, [[0, 640, 360, 1], [ts[0], 640, 380, 1.05]]); palcoBanda(t); maestro(170, 470, .9, t, true); notasVoando(t, 8, 300, 80, 900, 200, .6);
     monitor(700, 420, 1.1, (x, y, w, h) => { g.fillStyle = ["#0f172a", "#e0f2fe", "#fff", "#1e293b", "#312e81", "#14532d"][k]; g.fillRect(x, y, w, h); if (k) emo(["", "🌐", "📝", "🧮", "🎵", "🎮"][k], x + w / 2, y + h / 2 + 22, 70); }); g.restore();
     palavra("APLICATIVOS", 640, 110, seg(t, ap, ap + .4), 60); if (k) placa(["", "NAVEGADOR: abre sites (como este portal!)", "EDITOR DE TEXTO: escrever trabalhos", "CALCULADORA: fazer contas", "TOCADOR: ouvir músicas", "JOGO: diversão!"][k], 700, 200, 1, "#db2777", 20); } },
 { chip: "O PEDRO ENTENDEU", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "inteira"), "ding"], [em(F10, "jogo"), "pop"], [em(F10, "software"), "ding"], [em(F10, "fechou"), "click"], [em(F10, "voltou"), "festa"], [em(F10, "Missão"), "festa"]],
   draw(t, D) { const it = em(F10, "inteira"), jo = em(F10, "jogo"), sw = em(F10, "software"), fe = em(F10, "fechou"), vo = em(F10, "voltou"), m = em(F10, "Missão");
     g.save(); camera(t, [[0, 640, 360, 1], [it, 560, 380, 1.4], [sw, 640, 380, 1], [vo, 600, 380, 1.2], [m, 640, 360, 1]]); fundoSala(t);
     pedro({ x: 420, y: 640, s: 1.05, braco: t > vo ? -2.4 : -1.2, bracoE: t > vo ? 2.4 : .3, olhar: 1, boca: t > vo ? "riso" : "", pisca: pisca(t) }); lara({ x: 850, y: 640, s: 1.05, braco: -.6, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t + .4) });
     celular(570, 470, .45, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); if (t < fe) giratorio(x + w / 2, y + h / 2, 24, t); else if (t < vo) { } else { g.fillStyle = "#22c55e"; g.fillRect(x, y, w, h); emo("🎮", x + w / 2, y + h / 2 + 20, 60); } }); g.restore();
     if (t > it && t < jo) placa("✅ tela inteira, peças OK (hardware)", 640, 140, 1, "#2563eb", 20); if (t > sw && t < vo) placa("❌ o JOGO travou: SOFTWARE", 640, 140, 1, "#db2777", 22); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "trava"), "pop"], [em(F11, "instala"), "pop"], [em(F11, "oficina"), "pop"]],
   draw(t, D) { ondeUso(t, F11, [["trava", "📱", "Celular travou × tela quebrou:", "software × hardware"], ["instala", "⬇️", "Instalar um jogo:", "um software novo"], ["oficina", "🔧", "Oficina de celular:", "troca peça ou atualiza sistema"]]); } },
 { chip: "", fala: F12, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 3", [PEDRO, LARA]); } }
];

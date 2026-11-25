/* ================= 5º ano · 2026 · 4º bimestre · Missão 1 · O computador e onde moram os dados ================= */
const PEDRO5 = { camisa: "#f97316" }, LARA5 = { camisa: "#a855f7", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO5, o)), lara = o => boneco(Object.assign({}, LARA5, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// o desenho do castelo do Pedro (aparece conforme k)
function castelo(x0, y0, w, h, k) { g.save(); g.fillStyle = "#e0f2fe"; g.fillRect(x0, y0, w, h); const cx = x0 + w / 2, base = y0 + h - 20;
  if (k > .1) { g.fillStyle = "#86efac"; g.fillRect(x0, base, w, 20); }
  if (k > .3) { g.fillStyle = "#94a3b8"; g.fillRect(cx - 70, base - 90, 140, 90); g.fillRect(cx - 100, base - 130, 40, 130); g.fillRect(cx + 60, base - 130, 40, 130); }
  if (k > .5) { g.fillStyle = "#64748b"; for (let i = 0; i < 4; i++) g.fillRect(cx - 70 + i * 40, base - 104, 22, 14); g.fillStyle = "#7c2d12"; rr(cx - 18, base - 50, 36, 50, 14); g.fill(); }
  if (k > .7) { g.fillStyle = "#ef4444"; g.beginPath(); g.moveTo(cx - 100, base - 130); g.lineTo(cx - 80, base - 170); g.lineTo(cx - 60, base - 130); g.fill(); g.beginPath(); g.moveTo(cx + 60, base - 130); g.lineTo(cx + 80, base - 170); g.lineTo(cx + 100, base - 130); g.fill(); }
  if (k > .9) { g.fillStyle = "#facc15"; g.beginPath(); g.arc(x0 + w - 40, y0 + 36, 20, 0, 7); g.fill(); }
  g.restore(); }
function fumaca(x, y, t) { for (let i = 0; i < 5; i++) { const k = (t * .6 + i * .2) % 1; g.fillStyle = `rgba(148,163,184,${.6 * (1 - k)})`; g.beginPath(); g.arc(x + Math.sin(i * 2 + t) * 20, y - k * 120, 16 + k * 26, 0, 7); g.fill(); } }
// cartãozinho de grupo (ENTRADA, SAÍDA...)
function grupo(txt, x, y, cor, k) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; rr(-130, -34, 260, 68, 34); g.fill(); g.fillStyle = "#fff"; g.font = `800 32px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function pendrive(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#2563eb"; rr(-24, -60, 48, 90, 10); g.fill(); g.fillStyle = "#cbd5e1"; g.fillRect(-16, -84, 32, 26); g.fillStyle = "#0f172a"; g.fillRect(-9, -78, 6, 6); g.fillRect(3, -78, 6, 6); g.restore(); }
function cartaoSD(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; g.beginPath(); g.moveTo(-30, -40); g.lineTo(18, -40); g.lineTo(30, -28); g.lineTo(30, 40); g.lineTo(-30, 40); g.fill(); g.fillStyle = "#facc15"; for (let i = 0; i < 4; i++) g.fillRect(-22 + i * 12, -34, 6, 14); g.restore(); }
function hd(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#94a3b8"; rr(-55, -70, 110, 140, 10); g.fill(); g.fillStyle = "#e2e8f0"; g.beginPath(); g.arc(0, -10, 42, 0, 7); g.fill(); g.strokeStyle = "#64748b"; g.lineWidth = 3; g.beginPath(); g.arc(0, -10, 10, 0, 7); g.stroke();
  g.save(); g.translate(0, -10); g.rotate(-.6 + Math.sin(t * 3) * .2); g.fillStyle = "#334155"; g.fillRect(-4, -4, 50, 8); g.restore(); g.restore(); }
function ssd(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-70, -40, 140, 80, 8); g.fill(); g.fillStyle = "#22c55e"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("SSD", 0, 9); g.restore(); }
function chipCPU(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#facc15"; for (let i = 0; i < 5; i++) { g.fillRect(-50 + i * 22, -66, 8, 14); g.fillRect(-50 + i * 22, 52, 8, 14); g.fillRect(-66, -50 + i * 22, 14, 8); g.fillRect(52, -50 + i * 22, 14, 8); }
  g.fillStyle = "#334155"; rr(-54, -54, 108, 108, 10); g.fill(); g.fillStyle = `rgba(250,204,21,${.5 + .5 * Math.sin(t * 6)})`; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("CPU", 0, 9); g.restore(); }
function camera(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#1e293b"; rr(-50, -30, 100, 60, 12); g.fill(); g.fillStyle = "#38bdf8"; g.beginPath(); g.arc(0, 0, 18, 0, 7); g.fill(); g.fillStyle = "#0f172a"; g.beginPath(); g.arc(0, 0, 8, 0, 7); g.fill(); g.restore(); }
function janelaWin(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); const c = ["#f25022", "#7fba00", "#00a4ef", "#ffb900"]; c.forEach((cor, i) => { g.fillStyle = cor; g.fillRect((i % 2) * 52 - 50, Math.floor(i / 2) * 52 - 50, 48, 48); }); g.restore(); }

const F0 = "O computador por dentro: onde moram os dados?",
  F1 = "O Pedro desenhou um castelo lindo no computador da escola. Na semana seguinte, o computador estragou! E agora? Será que o desenho sumiu para sempre?",
  F2 = "Para descobrir, vamos conhecer as partes do computador. As partes de entrada levam informações para dentro: o teclado, o mouse, o microfone e a câmera.",
  F3 = "As partes de saída mostram ou tocam o resultado: o monitor, a caixa de som e a impressora.",
  F4 = "O processador é o cérebro: faz as contas e segue os comandos. E o armazenamento guarda os arquivos, mesmo com o computador desligado: o agá dê, o ésse ésse dê, o pen drive e o cartão de memória.",
  F5 = "E quem organiza tudo isso? O sistema operacional, o programa principal. Ele liga o computador e deixa os outros programas funcionarem. No computador da escola, é o Windows.",
  F6 = "Agora, onde moram os dados? Eles podem morar no próprio aparelho, o armazenamento local. Ou na nuvem: computadores de empresas, bem longe, que a gente acessa pela internet.",
  F7 = "Que alívio! O Pedro tinha salvo o castelo na nuvem. Ele abriu em outro computador, e o desenho estava lá, inteirinho! O que fica só no aparelho pode se perder junto com ele. Missão cumprida!",
  F8 = "Onde eu uso isso? Nas fotos da galeria do celular, nos vídeos do YouTube e nos trabalhos salvos no Google Drive. Antes de salvar, pense: vai ficar no aparelho ou na nuvem?",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "pop"], [1.3, "misterio"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); gabinete(380, 520, 1.6, true); monitor(760, 470, 1.1, (x0, y0, w, h) => castelo(x0, y0, w, h, cl(t / 1.6)));
     for (let i = 0; i < 6; i++) { const k = (t * .5 + i / 6) % 1; arquivo(380 + Math.sin(i * 3) * 120 * k, 340 - k * 220, .5, Math.sin(i + t) * .3, "#fde68a", "📄"); }
     abertura(t, "5º ANO · MISSÃO 1", "O computador por dentro", "ONDE MORAM", "OS DADOS?", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "castelo"), "pop"], [em(F1, "estragou"), "alerta"], [em(F1, "sumiu"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "castelo"), b = em(F1, "estragou"), c = em(F1, "sumiu");
     const quebrou = t > b; monitor(700, 450, 1.15, (x0, y0, w, h) => { if (quebrou) { g.fillStyle = "#0f172a"; g.fillRect(x0, y0, w, h); g.fillStyle = "#ef4444"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText("✖ ERRO", x0 + w / 2, y0 + h / 2 + 10); } else castelo(x0, y0, w, h, cl((t - a + .3) / 1.4)); });
     if (quebrou) fumaca(700, 230, t);
     pedro({ x: 260, y: 600, s: 1.1, braco: quebrou ? -2.5 : -.8, bracoE: quebrou ? 2.5 : .3, olhar: 1, boca: quebrou ? "o" : "riso", pisca: pisca(t) });
     if (t > c) palavra("SUMIU PARA SEMPRE?", 700, 110, seg(t, c, c + .4), 58); } },
 { chip: "ENTRADA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "entrada"), "ding"], [em(F2, "teclado"), "pop"], [em(F2, "mouse"), "pop"], [em(F2, "microfone"), "pop"], [em(F2, "câmera"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const e0 = em(F2, "entrada"); palavra("4 TIPOS DE PARTES", 640, 100, seg(t, .2, .6), 56); grupo("⬇ ENTRADA", 640, 180, "#16a34a", seg(t, e0, e0 + .4));
     if (t > e0 + .3) comando("LEVA INFORMAÇÕES PARA DENTRO", 640, 250, seg(t, e0 + .3, e0 + .7), "#15803d", 520);
     const it = [["teclado", x => teclado(x, 410, .85)], ["mouse", x => mouse(x, 410, 1.6)], ["microfone", x => microfone(x, 440, 1.3)], ["câmera", x => camera(x, 410, 1.4)]];
     it.forEach(([n, f], i) => { const t0 = em(F2, n), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 210 + i * 290; g.save(); g.translate(x, 410); g.scale(k, k); g.translate(-x, -410); f(x); g.restore(); seta(x, 330, x, 370, seg(t, t0, t0 + .3), "#4ade80"); comando(n.toUpperCase(), x, 520, seg(t, t0 + .1, t0 + .5), "#16a34a", 220); }); } },
 { chip: "SAÍDA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "saída"), "ding"], [em(F3, "monitor"), "pop"], [em(F3, "caixa"), "pop"], [em(F3, "impressora"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const s0 = em(F3, "saída"); grupo("⬆ SAÍDA", 640, 110, "#ea580c", seg(t, s0, s0 + .4));
     if (t > s0 + .3) comando("MOSTRA OU TOCA O RESULTADO", 640, 185, seg(t, s0 + .3, s0 + .7), "#c2410c", 500);
     const a = em(F3, "monitor"), b = em(F3, "caixa"), c = em(F3, "impressora");
     if (t > a) { monitor(300, 450, .8, (x0, y0, w, h) => castelo(x0, y0, w, h, 1)); comando("MONITOR", 300, 530, seg(t, a, a + .4), "#ea580c", 220); }
     if (t > b) { caixaSom(640, 470, 1.4, t); comando("CAIXA DE SOM", 640, 530, seg(t, b, b + .4), "#ea580c", 240); }
     if (t > c) { impressora(980, 460, 1.6, cl((t - c) / 1.2)); comando("IMPRESSORA", 980, 530, seg(t, c, c + .4), "#ea580c", 240); } } },
 { chip: "PROCESSADOR E ARMAZENAMENTO", fala: F4, legenda: "O processador é o cérebro: faz as contas e segue os comandos. E o armazenamento guarda os arquivos, mesmo com o computador desligado: o HD, o SSD, o pen drive e o cartão de memória.",
   sfx: [[.1, "whoosh"], [em(F4, "processador"), "ding"], [em(F4, "armazenamento"), "ding"], [em(F4, "agá"), "pop"], [em(F4, "ésse"), "pop"], [em(F4, "pen"), "pop"], [em(F4, "cartão"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const p0 = em(F4, "processador"), a0 = em(F4, "armazenamento");
     grupo("🧠 PROCESSADOR", 320, 110, "#7c3aed", seg(t, p0, p0 + .4)); if (t > p0) { chipCPU(320, 290, 1.4, t); comando("O CÉREBRO: FAZ AS CONTAS", 320, 420, seg(t, p0 + .3, p0 + .7), "#6d28d9", 400); }
     grupo("📦 ARMAZENAMENTO", 920, 110, "#0e7490", seg(t, a0, a0 + .4)); if (t > a0) comando("GUARDA, MESMO DESLIGADO", 920, 180, seg(t, a0 + .2, a0 + .6), "#0e7490", 420);
     const it = [["agá", "HD", x => hd(x, 300, .9, t)], ["ésse", "SSD", x => ssd(x, 300, .9)], ["pen", "PEN DRIVE", x => pendrive(x, 310, 1.1)], ["cartão", "CARTÃO", x => cartaoSD(x, 300, 1.2)]];
     it.forEach(([w, n, f], i) => { const t0 = em(F4, w), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 720 + (i % 2) * 200, y = i < 2 ? 0 : 200; g.save(); g.translate(0, y); g.translate(x, 300); g.scale(k * .85, k * .85); g.translate(-x, -300); f(x); g.restore(); comando(n, x, 390 + y, seg(t, t0 + .1, t0 + .5), "#0e7490", 180); }); } },
 { chip: "SISTEMA OPERACIONAL", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "sistema"), "ding"], [em(F5, "liga"), "pop"], [em(F5, "programas"), "pop"], [em(F5, "Windows"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const s0 = em(F5, "sistema"), l = em(F5, "liga"), w = em(F5, "Windows"); palavra("SISTEMA OPERACIONAL", 640, 100, seg(t, s0, s0 + .4), 62);
     if (t > s0 + .3) cartao("O PROGRAMA PRINCIPAL: O CHEFE DO COMPUTADOR", 640, 190, 780, "#0f766e", seg(t, s0 + .3, s0 + .7));
     monitor(640, 520, 1.1, (x0, y0, w2, h) => { if (t < l) { g.fillStyle = "#0f172a"; g.fillRect(x0, y0, w2, h); return; } g.fillStyle = "#0ea5e9"; g.fillRect(x0, y0, w2, h); if (t > w) { g.save(); g.translate(x0 + w2 / 2, y0 + h / 2 - 10); janelaWin(0, 0, .6, seg(t, w, w + .4)); g.restore(); }
       if (t > em(F5, "programas")) { ["🌐", "🎨", "🧮"].forEach((e, i) => { g.font = `40px ${F}`; g.textAlign = "center"; g.fillText(e, x0 + 50 + i * 60, y0 + h - 20); }); } });
     if (t > w) comando("WINDOWS", 640, 610, seg(t, w, w + .4), "#2563eb", 220); } },
 { chip: "ONDE MORAM OS DADOS?", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "aparelho"), "ding"], [em(F6, "nuvem"), "ding"], [em(F6, "internet"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "aparelho"), b = em(F6, "nuvem"), c = em(F6, "internet");
     palavra("ONDE MORAM OS DADOS?", 640, 100, seg(t, 0, .4), 56);
     if (t > a) { g.save(); g.globalAlpha = cl(seg(t, a, a + .4)); celular(300, 330, .7, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); for (let i = 0; i < 6; i++) foto(-36 + (i % 2) * 72, -100 + Math.floor(i / 2) * 80, .7, 0); }); pendrive(450, 370, 1); g.restore();
       comando("📍 NO APARELHO (LOCAL)", 360, 505, seg(t, a, a + .4), "#16a34a", 420); }
     if (t > b) { nuvem(920, 230, 1.1); predio(860, 440, .8, "#475569", ""); predio(990, 440, .8, "#334155", ""); comando("☁️ NA NUVEM (REMOTO)", 920, 505, seg(t, b, b + .4), "#7c3aed", 420); }
     if (t > c) { pacotes(420, 330, 860, 260, t, 6, "#facc15"); rotulo("pela internet", 640, 250, "#fde68a", seg(t, c, c + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "nuvem"), "ding"], [em(F7, "abriu"), "click"], [em(F7, "inteirinho"), "festa"], [em(F7, "perder"), "alerta"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F7, "nuvem"), b = em(F7, "abriu"), c = em(F7, "perder"), d = em(F7, "Missão");
     nuvem(560, 200, .9); if (t > a) { g.save(); g.translate(560, 200); g.scale(.4, .4); castelo(-150, -100, 300, 200, 1); g.restore(); }
     monitor(900, 520, .95, (x0, y0, w, h) => { if (t > b) castelo(x0, y0, w, h, 1); else { g.fillStyle = "#0ea5e9"; g.fillRect(x0, y0, w, h); } });
     if (t > b) pacotes(600, 260, 880, 340, t, 5, "#facc15");
     pedro({ x: 260, y: 600, s: 1.05, braco: t > b ? Math.sin(t * 8) * .5 - 2.2 : -.7, bracoE: t > b ? -Math.sin(t * 8) * .5 + 2.2 : .3, olhar: 1, boca: t > b ? "riso" : "", pisca: pisca(t) });
     if (t > c && t < d) cartao("SÓ NO APARELHO = PODE SE PERDER", 640, 90, 600, "#dc2626", seg(t, c, c + .4));
     if (t > d) cumprida(t, d); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "galeria"), "pop"], [em(F8, "YouTube"), "pop"], [em(F8, "Google"), "pop"], [em(F8, "pense"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50); const p = em(F8, "pense");
     [["📷 GALERIA", "galeria", "#16a34a", "APARELHO"], ["▶ YOUTUBE", "YouTube", "#dc2626", "NUVEM"], ["📁 GOOGLE DRIVE", "Google", "#2563eb", "NUVEM"]].forEach(([n, w, c, onde], i) => { const t0 = em(F8, w), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 260 + i * 380;
       g.save(); g.translate(x, 300); g.scale(k, k); g.fillStyle = "#fff"; rr(-150, -100, 300, 200, 18); g.fill(); g.fillStyle = c; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText(n, 0, -20); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.fillText(onde === "NUVEM" ? "☁️ nuvem" : "📍 aparelho", 0, 40); g.restore(); });
     if (t > p) cartao("📍 APARELHO OU ☁️ NUVEM?", 640, 500, 560, "#7c3aed", seg(t, p, p + .4)); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "5º ano · 4º bimestre de 2026 · Missão 1", [PEDRO5, LARA5]); } }
];

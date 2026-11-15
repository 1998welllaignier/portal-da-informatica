/* ================= 6º ano · 2027 · 1º bimestre · Missão 3 · Hardware e software ================= */
const PEDRO = { camisa: "#f97316" }, IRMA = { camisa: "#ec4899", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), irma = o => boneco(Object.assign({}, IRMA, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// tela de celular: jogo, travado (ampulheta) ou rachada
function telaCel(modo, t) { if (modo === "jogo") { g.fillStyle = "#dcfce7"; g.fillRect(-70, -146, 140, 292); estrela(-30, -60, 22); estrela(30, 10, 18, "#38bdf8"); g.fillStyle = "#16a34a"; g.beginPath(); g.arc(Math.sin(t * 3) * 40, 70, 14, 0, 7); g.fill(); }
  if (modo === "travado") { g.fillStyle = "#e2e8f0"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "rgba(15,23,42,.7)"; g.fillRect(-70, -146, 140, 292); g.save(); g.rotate(t * 2); g.fillStyle = "#facc15"; g.font = `800 60px ${F}`; g.textAlign = "center"; g.fillText("⏳", 0, 20); g.restore(); }
  if (modo === "rachada") { g.fillStyle = "#cbd5e1"; g.fillRect(-70, -146, 140, 292); g.strokeStyle = "#0f172a"; g.lineWidth = 3; g.beginPath(); g.moveTo(-20, -40); g.lineTo(-60, -120); g.moveTo(-20, -40); g.lineTo(40, -100); g.moveTo(-20, -40); g.lineTo(-50, 60); g.moveTo(-20, -40); g.lineTo(60, 30); g.moveTo(-20, -40); g.lineTo(10, 130); g.stroke(); } }
// ícone de aplicativo
function app(x, y, s, cor, simb, nome, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = cor; rr(-46, -46, 92, 92, 22); g.fill(); g.fillStyle = "#fff"; g.font = `800 44px ${F}`; g.textAlign = "center"; g.fillText(simb, 0, 16);
  g.font = `800 20px ${F}`; g.fillText(nome, 0, 80); g.restore(); }
// caixa de ferramentas (oficina)
function ferramenta(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = "#94a3b8"; g.lineWidth = 14; g.lineCap = "round"; g.beginPath(); g.moveTo(-40, 40); g.lineTo(30, -30); g.stroke(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(38, -38, 22, 0, 7); g.fill(); g.fillStyle = "#0e7490"; g.beginPath(); g.arc(46, -46, 10, 0, 7); g.fill(); g.restore(); }

const F0 = "Hardware e software: o celular que travou!",
  F1 = "O celular do Pedro travou bem no meio do jogo. A irmã dele, que estava junto, disse: vamos levar no conserto! Mas será que alguma peça quebrou mesmo?",
  F2 = "Todo computador tem duas partes. O hardware são as peças, que dá para tocar: teclado, mouse, monitor, processador e cabo.",
  F3 = "O software são os programas, que não dá para pegar com a mão: o navegador, os jogos, a calculadora e os aplicativos do celular.",
  F4 = "Um precisa do outro. O hardware sem software não faz nada, e o software precisa das peças para funcionar.",
  F5 = "Existe um software especial, o sistema operacional. Ele liga primeiro e comanda todo o resto. No computador, é o Windows ou o Linux. No celular, é o Android ou o ái ô ésse.",
  F6 = "E o celular do Pedro? Ele fechou o jogo, reiniciou e tudo voltou ao normal. Era problema de software! Se a tela tivesse quebrado, aí sim seria hardware.",
  F7 = "Onde eu uso isso? Quando você instala um jogo, está colocando um software novo. E, na oficina de celular, o técnico troca peças ou atualiza o sistema.",
  F8 = "Agora é com vocês: abram a Missão 3 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.8, "alerta"], [1.6, "misterio"], [2.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const trav = t > .8; g.save(); g.translate(640 + (trav && t < 1.6 ? Math.sin(t * 60) * 6 : 0), 300); celular(0, 0, .95, () => telaCel(trav ? "travado" : "jogo", t)); g.restore();
     abertura(t, "6º ANO · MISSÃO 3", "Hardware e software", "O CELULAR", "QUE TRAVOU!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "travou"), "alerta"], [em(F1, "conserto"), "pop"], [em(F1, "Mas"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "travou"), b = em(F1, "disse"), c = em(F1, "Mas");
     celular(640, 300, .95, () => telaCel(t > a ? "travado" : "jogo", t));
     pedro({ x: 330, y: 560, s: 1.05, braco: -.9, bracoE: .4, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) });
     irma({ x: 960, y: 560, s: 1.05, braco: t > b ? -2.4 : -.4, bracoE: .3, olhar: -1, pisca: pisca(t + .5) });
     if (t > b && t < c) balao("Vamos levar no conserto!", 960, 170, seg(t, b, b + .4));
     if (t > c) palavra("QUEBROU MESMO?", 640, 100, seg(t, c, c + .4), 60); } },
 { chip: "HARDWARE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "hardware"), "ding"], [em(F2, "teclado"), "pop"], [em(F2, "mouse"), "pop"], [em(F2, "monitor"), "pop"], [em(F2, "processador"), "pop"], [em(F2, "cabo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#9a3412"); const h = em(F2, "hardware"); palavra("HARDWARE", 640, 110, seg(t, h, h + .4), 80); if (t > h + .3) comando("AS PEÇAS: DÁ PARA TOCAR 🔧", 640, 190, seg(t, h + .3, h + .7), "#ea580c", 520);
     const it = [["teclado", x => teclado(x, 360, .9)], ["mouse", x => mouse(x, 360, 1.5)], ["monitor", x => monitor(x, 420, .7, null)], ["processador", x => { g.fillStyle = "#334155"; rr(x - 45, 315, 90, 90, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("CPU", x, 368); }], ["cabo", x => { g.strokeStyle = "#0f172a"; g.lineWidth = 10; g.beginPath(); g.moveTo(x - 60, 320); g.bezierCurveTo(x - 10, 420, x + 10, 300, x + 60, 400); g.stroke(); g.fillStyle = "#64748b"; rr(x + 50, 392, 26, 18, 4); g.fill(); }]];
     it.forEach(([n, f], i) => { const t0 = em(F2, n), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 170 + i * 235; g.save(); g.translate(x, 370); g.scale(k, k); g.translate(-x, -370); f(x); g.restore(); comando(n.toUpperCase(), x, 490, seg(t, t0 + .1, t0 + .5), "#ea580c", 200); }); } },
 { chip: "SOFTWARE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "software"), "ding"], [em(F3, "navegador"), "pop"], [em(F3, "jogos"), "pop"], [em(F3, "calculadora"), "pop"], [em(F3, "aplicativos"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const s0 = em(F3, "software"); palavra("SOFTWARE", 640, 110, seg(t, s0, s0 + .4), 80); if (t > s0 + .3) comando("OS PROGRAMAS: NÃO DÁ PARA PEGAR 💿", 640, 190, seg(t, s0 + .3, s0 + .7), "#2563eb", 600);
     app(230, 340, 1.2, "#2563eb", "🌐", "NAVEGADOR", seg(t, em(F3, "navegador"), em(F3, "navegador") + .4)); app(500, 340, 1.2, "#16a34a", "🎮", "JOGOS", seg(t, em(F3, "jogos"), em(F3, "jogos") + .4));
     app(770, 340, 1.2, "#ea580c", "🧮", "CALCULADORA", seg(t, em(F3, "calculadora"), em(F3, "calculadora") + .4)); app(1040, 340, 1.2, "#9333ea", "📱", "APLICATIVOS", seg(t, em(F3, "aplicativos"), em(F3, "aplicativos") + .4)); } },
 { chip: "UM PRECISA DO OUTRO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "nada"), "alerta"], [em(F4, "funcionar"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F4, "nada"), b = em(F4, "precisa", 1);
     // computador sem programa: tela preta; depois, com programa: tela acende
     monitor(380, 430, 1.1, (x0, y0, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x0, y0, w, h); g.fillStyle = "#64748b"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("sem programa...", x0 + w / 2, y0 + h / 2 + 8); });
     if (t > a) { xVermelho(380, 300, 60, seg(t, a, a + .4)); comando("HARDWARE SEM SOFTWARE = NADA", 380, 500, seg(t, a, a + .4), "#dc2626", 480); }
     if (t > b) { monitor(900, 430, 1.1, (x0, y0, w, h) => { g.fillStyle = "#dcfce7"; g.fillRect(x0, y0, w, h); estrela(x0 + 80, y0 + 70, 26); estrela(x0 + 190, y0 + 90, 22, "#38bdf8"); }); comando("OS DOIS JUNTOS = FUNCIONA!", 900, 500, seg(t, b, b + .4), "#16a34a", 480); visto(900, 300, 60, seg(t, b + .3, b + .7)); }
     palavra("UM PRECISA DO OUTRO", 640, 110, seg(t, 0, .4), 60); } },
 { chip: "SISTEMA OPERACIONAL", fala: F5, legenda: "Existe um software especial, o sistema operacional. Ele liga primeiro e comanda todo o resto. No computador, é o Windows ou o Linux. No celular, é o Android ou o iOS.", sfx: [[.1, "whoosh"], [em(F5, "sistema"), "ding"], [em(F5, "comanda"), "pop"], [em(F5, "Windows"), "pop"], [em(F5, "Linux"), "pop"], [em(F5, "Android"), "pop"], [em(F5, "ái"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const s0 = em(F5, "sistema"); palavra("SISTEMA OPERACIONAL", 640, 110, seg(t, s0, s0 + .4), 64);
     if (t > em(F5, "comanda")) { cartao("O CHEFE DOS PROGRAMAS", 640, 220, 520, "#0f766e", seg(t, em(F5, "comanda"), em(F5, "comanda") + .4)); }
     comando("💻 COMPUTADOR", 330, 340, seg(t, em(F5, "Windows") - .3, em(F5, "Windows")), "#334155", 300); comando("WINDOWS", 240, 420, seg(t, em(F5, "Windows"), em(F5, "Windows") + .4), "#2563eb", 170); comando("LINUX", 430, 420, seg(t, em(F5, "Linux"), em(F5, "Linux") + .4), "#ca8a04", 170);
     comando("📱 CELULAR", 950, 340, seg(t, em(F5, "Android") - .3, em(F5, "Android")), "#334155", 300); comando("ANDROID", 860, 420, seg(t, em(F5, "Android"), em(F5, "Android") + .4), "#16a34a", 170); comando("iOS", 1050, 420, seg(t, em(F5, "ái"), em(F5, "ái") + .4), "#0f172a", 170); } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "reiniciou"), "click"], [em(F6, "normal"), "festa"], [em(F6, "software"), "ding"], [em(F6, "quebrado"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "reiniciou"), b = em(F6, "normal"), c = em(F6, "software"), d = em(F6, "quebrado");
     const modo = t > b ? "jogo" : t > a ? "travado" : "travado"; celular(400, 300, .95, () => { if (t > a && t < b) { g.fillStyle = "#0f172a"; g.fillRect(-70, -146, 140, 292); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("reiniciando...", 0, 6); } else telaCel(modo, t); });
     pedro({ x: 170, y: 560, s: .85, braco: t > b ? -2.6 : -.6, bracoE: t > b ? 2.6 : .3, olhar: 1, boca: t > b ? "riso" : "", pisca: pisca(t) });
     if (t > c) cartao("ERA SOFTWARE!", 400, 520, 360, "#2563eb", seg(t, c, c + .4));
     if (t > d) { celular(920, 300, .95, () => telaCel("rachada", t)); cartao("TELA QUEBRADA = HARDWARE", 920, 520, 460, "#ea580c", seg(t, d, d + .4)); } } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "instala"), "pop"], [em(F7, "oficina"), "pop"], [em(F7, "troca"), "click"], [em(F7, "atualiza"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 110, seg(t, 0, .4), 50); const a = em(F7, "instala"), b = em(F7, "oficina");
     celular(330, 330, .8, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); if (t > a) { const k = cl((t - a) / 2); g.fillStyle = "#16a34a"; rr(-50, 40, 100 * k, 16, 8); g.fill(); g.fillStyle = NAVY; g.font = `800 16px ${F}`; g.textAlign = "center"; g.fillText(k < 1 ? "instalando..." : "pronto!", 0, 20); app(0, -50, .8, "#16a34a", "🎮", "", 1); } });
     comando("INSTALAR JOGO = SOFTWARE NOVO", 330, 520, seg(t, a + .2, a + .6), "#2563eb", 470);
     if (t > b) { ferramenta(900, 300, 1.4); comando("TROCA PEÇAS = HARDWARE", 900, 430, seg(t, em(F7, "troca"), em(F7, "troca") + .4), "#ea580c", 420); comando("ATUALIZA O SISTEMA = SOFTWARE", 900, 520, seg(t, em(F7, "atualiza"), em(F7, "atualiza") + .4), "#2563eb", 470); } } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 3", [PEDRO, IRMA]); } }
];

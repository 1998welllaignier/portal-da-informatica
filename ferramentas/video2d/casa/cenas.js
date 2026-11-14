/* ================= 🏠 Vídeo de instruções · Estudo em casa (todas as séries) ================= */
const NINA = { camisa: "#f97316", cabelo: "longo" }, JOAO = { camisa: "#2563eb" };
const nina = o => boneco(Object.assign({}, NINA, o));
function celC(x, y, s, desenho) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-100, -190, 200, 380, 28); g.fill(); g.fillStyle = "#f8fafc"; rr(-86, -168, 172, 336, 12); g.fill(); if (desenho) desenho(); g.restore(); }
function casinha(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#fde68a"; g.fillRect(-120, -100, 240, 100); g.fillStyle = "#b91c1c"; g.beginPath(); g.moveTo(-140, -100); g.lineTo(0, -190); g.lineTo(140, -100); g.closePath(); g.fill();
  g.fillStyle = Math.floor(t * 2) % 2 ? "#facc15" : "#fde047"; g.fillRect(-90, -76, 60, 44); g.fillRect(30, -76, 60, 44); g.fillStyle = "#78350f"; g.fillRect(-20, -60, 40, 60); g.restore(); }
function botaoV(x, y, txt, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#16a34a"; rr(-110, -28, 220, 56, 16); g.fill(); g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }

const CENAS = [
 { chip: "", fala: "Estudo em casa! Missões de Informática com o Professor Welington Laignier.", sfx: [[.05, "whoosh"], [.6, "ding"], [2.0, "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e1b4b"); casinha(640, 330, 1.0 * back(seg(t, .2, .8)), t); celC(820, 300, .4 * back(seg(t, .9, 1.3)), () => { g.fillStyle = "#2563eb"; rr(-60, -40, 120, 80, 12); g.fill(); });
     abertura(t, "TODAS AS SÉRIES · 6º AO 9º ANO", "Missões de Informática", "🏠 ESTUDO", "EM CASA!", 1.4); } },
 { chip: "NÃO PODE VIR?", fala: "Você não pode vir à aula do contraturno? Calma: você não vai ficar para trás!", sfx: [[.1, "whoosh"], [1.0, "misterio"], [4.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); nina({ x: 320, y: 560, s: 1.05, braco: t > 4.4 ? -2.8 : -.4, bracoE: t > 4.4 ? 2.8 : .3, boca: t > 4.4 ? "sorri" : "o", pisca: pisca(t) });
     escola(880, 420, .9); if (t < 4.4) balao("E agora?", 320, 160, seg(t, .8, 1.2)); else palavra("NINGUÉM FICA PARA TRÁS!", 760, 140, seg(t, 4.4, 4.8), 54); } },
 { chip: "A DISTÂNCIA", fala: "Agora você faz as missões em casa, no celular ou no computador. E o professor acompanha tudo pelo portal.", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.6, "pop"], [6.0, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); casinha(260, 420, .8, t); escola(1020, 430, .8);
     const k = seg(t, 5.6, 7.0); if (k > 0) { g.save(); g.setLineDash([16, 12]); g.strokeStyle = "#fff"; g.lineWidth = 6; g.beginPath(); g.moveTo(380, 300); g.lineTo(lerp(380, 900, cl(k)), 300); g.stroke(); g.restore(); }
     celC(560, 260, .45 * back(seg(t, 1.4, 1.8))); if (t > 3.4) monitor(720, 330, .5 * back(seg(t, 3.4, 3.8)), (x, y, w, h) => { g.fillStyle = "#2563eb"; g.fillRect(x, y, w, h); });
     etiqueta("O PROFESSOR ACOMPANHA", 980, 160, 1000, 270, seg(t, 6.2, 6.6)); } },
 { chip: "1º PASSO · O CÓDIGO", fala: "Primeiro passo: o seu código. São quatro números. Peça ao professor na sala de informática, no dia da sua aula regular. Anote e guarde!", sfx: [[.1, "whoosh"], [1.6, "ding"], [3.0, "pop"], [8.8, "click"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("SEU CÓDIGO", 640, 105, seg(t, 1.4, 1.8), 76); cartao("4 8 1 5", 640, 280, 360, "#facc15", seg(t, 2.8, 3.2), "4 números");
     boneco({ x: 300, y: 560, s: .9, camisa: "#1e293b", braco: -1.0, bracoE: .3, olhar: 1, pisca: pisca(t) }); etiqueta("PEÇA AO PROFESSOR", 300, 180, 300, 330, seg(t, 4.4, 4.8));
     if (t > 8.6) palavra("ANOTE E GUARDE!", 960, 470, seg(t, 8.6, 9.0), 48); } },
 { chip: "COMO ENTRAR", fala: "Para entrar: abra o portal, escolha a sua série, a sua turma e digite o seu código.", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.6, "pop"], [5.0, "pop"], [6.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); celC(260, 320, .85, () => { g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("PORTAL", 0, -120); });
     [["1. SÉRIE", 3.4], ["2. TURMA", 4.8], ["3. CÓDIGO", 6.4]].forEach(([s2, t0], i) => { botaoV(620 + i * 230, 300, s2, ["#2563eb", "#7c3aed", "#16a34a"][i], seg(t, t0, t0 + .4)); if (i) seta(620 + i * 230 - 120, 300, 620 + i * 230 - 112, 300, seg(t, t0, t0 + .3)); }); } },
 { chip: "SEU AVATAR", fala: "Na primeira vez, monte o seu avatar. Ele aparece no placar!", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const cores = ["#ef4444", "#2563eb", "#16a34a", "#f97316"]; boneco({ x: 520, y: 560, s: 1.2, camisa: cores[Math.floor(seg(t, 1.0, 3.0) * 3.99)], pisca: pisca(t), braco: -2.6, bracoE: 2.6 });
     palavra("AVATAR", 520, 110, seg(t, 1.4, 1.8), 80); cartao("🏆 PLACAR", 980, 300, 300, "#facc15", seg(t, 3.2, 3.6), "o seu avatar aparece aqui"); } },
 { chip: "1 MISSÃO POR DIA", fala: "Em casa é uma missão por dia, com até duas horas. O cronômetro fica no cantinho da tela. Terminou antes? A próxima missão fica para outro dia.", sfx: [[.1, "whoosh"], [1.6, "ding"], [3.2, "pop"], [5.6, "click"], [8.8, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("1 MISSÃO POR DIA", 600, 110, seg(t, 1.4, 1.8), 66); cartao("ATÉ 2 HORAS", 600, 250, 320, "#7c3aed", seg(t, 3.0, 3.4));
     const k = back(seg(t, 5.4, 5.8)); if (k > 0) { g.save(); g.translate(1080, 150); g.scale(k, k); g.fillStyle = "#0f172a"; rr(-110, -34, 220, 68, 16); g.fill(); g.fillStyle = "#facc15"; g.font = `800 34px ${F}`; g.textAlign = "center"; const r = Math.max(0, 7200 - Math.floor(t * 60)); g.fillText(`${Math.floor(r / 3600)}:${String(Math.floor(r / 60) % 60).padStart(2, "0")}:${String(r % 60).padStart(2, "0")}`, 0, 12); g.restore(); }
     if (t > 8.6) comando("A PRÓXIMA MISSÃO FICA PARA AMANHÃ", 600, 430, seg(t, 8.6, 9.0), "#2563eb", 620); } },
 { chip: "COMECE PELO VÍDEO", fala: "Em cada missão, comece pelo vídeo. Assista até o fim, sem pular. Aí as tarefas se abrem.", sfx: [[.1, "whoosh"], [1.6, "click"], [4.6, "pop"], [6.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); g.fillStyle = "#0f172a"; rr(240, 150, 560, 320, 20); g.fill(); g.fillStyle = "#fff"; g.beginPath(); g.moveTo(490, 260); g.lineTo(570, 310); g.lineTo(490, 360); g.closePath(); g.fill();
     g.fillStyle = "#334155"; rr(270, 430, 500, 14, 7); g.fill(); g.fillStyle = "#dc2626"; rr(270, 430, 500 * cl(seg(t, 1.6, 6.0)), 14, 7); g.fill();
     etiqueta("ATÉ O FIM", 520, 520 - 30, 520, 450, seg(t, 3.0, 3.4)); cadeado(1020, 330, 1.1, t > 6.2); if (t > 6.2) palavra("ABRIU!", 1020, 160, seg(t, 6.2, 6.6), 60); } },
 { chip: "UMA ETAPA POR VEZ", fala: "As etapas abrem uma de cada vez: resolva, toque em Verificar, e a próxima se abre.", sfx: [[.1, "whoosh"], [3.0, "pop"], [4.6, "click"], [5.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); for (let i = 0; i < 4; i++) { const ab = i === 0 || (i === 1 && t > 5.6); no(260 + i * 250, 260, 44, ab ? "#16a34a" : "#64748b"); if (!ab) cadeado(260 + i * 250, 300, .45, false); else visto(260 + i * 250, 260, 22, 1); if (i) linha(306 + (i - 1) * 250, 260, 214 + i * 250, 260, "#fff", 6); }
     botaoV(640, 440, "✔ VERIFICAR", "#2563eb", seg(t, 4.4, 4.8)); } },
 { chip: "O VISTO", fala: "Termine o Básico de cada missão para ganhar o seu visto. Desafio e Turbo dão pontos extras!", sfx: [[.1, "whoosh"], [1.6, "ding"], [4.6, "pop"], [5.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); cartao("🟢 BÁSICO = VISTO", 640, 200, 460, "#16a34a", seg(t, 1.4, 1.8)); visto(910, 200, 30, seg(t, 2.0, 2.4));
     cartao("🟡 DESAFIO", 440, 400, 280, "#ca8a04", seg(t, 4.4, 4.8), "pontos extras"); cartao("🔴 TURBO", 840, 400, 280, "#dc2626", seg(t, 5.4, 5.8), "pontos extras"); } },
 { chip: "TRAVOU?", fala: "Travou? Tudo o que você precisa está na apostila: leia com calma o Para começar, o O que significa e as dicas. As respostas estão lá!", sfx: [[.1, "whoosh"], [.6, "misterio"], [5.0, "pop"], [6.6, "pop"], [8.0, "pop"], [9.6, "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); nina({ x: 220, y: 560, s: .95, braco: -1.0, bracoE: .3, olhar: 1, boca: t > 9.6 ? "sorri" : "o", pisca: pisca(t) }); lupa(420, 230, 1.0 * back(seg(t, 2.0, 2.4)));
     [["💡 PARA COMEÇAR", 4.8], ["📖 O QUE SIGNIFICA?", 6.4], ["💬 AS DICAS", 7.8]].forEach(([s2, t0], i) => comando(s2, 850, 200 + i * 95, seg(t, t0, t0 + .4), "#7c3aed", 420));
     if (t > 9.6) palavra("AS RESPOSTAS ESTÃO LÁ!", 760, 500 - 20, seg(t, 9.6, 10.0), 46); } },
 { chip: "O PRAZO", fala: "Siga a sugestão de semanas e termine todas as missões até o prazo que aparece na sua tela.", sfx: [[.1, "whoosh"], [2.0, "pop"], [5.4, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const sem = ["SEMANA 1", "SEMANA 2", "SEMANA 3"]; sem.forEach((s2, i) => cartao(s2, 260 + i * 300, 260, 250, ["#2563eb", "#7c3aed", "#16a34a"][i], seg(t, 1.8 + i * .5, 2.2 + i * .5), "Missão " + (i + 1)));
     cartao("📅 PRAZO", 1120, 260, 200, "#dc2626", seg(t, 5.2, 5.6), "na sua tela"); } },
 { chip: "", fala: "Você consegue sozinho! Bons estudos, e até a próxima missão!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fundoEscuro(t); g.textAlign = "center"; g.globalAlpha = out(seg(t, 0, .6)); g.fillStyle = AMAR; g.font = `800 62px ${F}`; g.fillText("Prof. Welington Laignier", 640, 300);
     g.fillStyle = "#fff"; g.font = `700 30px ${F}`; g.fillText("🏠 Estudo em casa · 6º ao 9º ano", 640, 350); g.font = `800 40px ${F}`; g.fillStyle = "#cfe0ff"; g.fillText("Você consegue! Bons estudos!", 640, 430); g.globalAlpha = 1;
     [NINA, JOAO].forEach((p2, i) => boneco(Object.assign({ x: i ? 1040 : 240, y: 700, s: .9, braco: -2.8 + Math.sin(t * 10 + i) * .25, bracoE: 2.8, pisca: pisca(t + i * .7) }, p2))); confete(t, .9); } }
];

/* ================= 9º ano · Missão 4 · Inteligência artificial: impactos ================= */
const DAVI9 = { camisa: "#16a34a" }, LIA9 = { camisa: "#a855f7", cabelo: "longo" };
const davi9 = o => boneco(Object.assign({}, DAVI9, o));
function teclado9(x, y, s, t, sug) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-110, -200, 220, 400, 28); g.fill(); g.fillStyle = "#fff"; rr(-96, -178, 192, 356, 12); g.fill();
  g.fillStyle = "#e2e8f0"; rr(-84, -150, 168, 44, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText("bom" + (Math.floor(t * 2) % 2 ? "|" : ""), -72, -120);
  if (sug) { const k = back(cl(sug)); g.save(); g.translate(0, -50); g.scale(k, k); g.fillStyle = "#facc15"; rr(-60, -24, 120, 48, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText("dia", 0, 9); g.restore(); }
  for (let r = 0; r < 3; r++) for (let c2 = 0; c2 < 6; c2++) { g.fillStyle = "#cbd5e1"; rr(-84 + c2 * 29, 40 + r * 40, 24, 32, 5); g.fill(); } g.restore(); }
function exemplo(x, y, k, spam) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; rr(-70, -40, 140, 80, 10); g.fill();
  g.fillStyle = spam ? "#dc2626" : "#16a34a"; rr(-70, -40, 140, 22, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 13px ${F}`; g.textAlign = "center"; g.fillText(spam ? "SPAM" : "NORMAL", 0, -24);
  g.fillStyle = "#cbd5e1"; rr(-56, -6, 112, 8, 4); g.fill(); rr(-56, 10, 80, 8, 4); g.fill(); g.restore(); }

const CENAS = [
 { chip: "", fala: "Inteligência artificial: quem ensinou a máquina?", sfx: [[.05, "whoosh"], [.5, "misterio"], [1.6, "ding"], [2.8, "festa"]],
   draw(t, D) { fundoEscuro(t, "#0b3b5c"); robozinho(640, 300, .95 * back(seg(t, .3, .9)), t); if (t > 1.0) balao("Quem me ensinou?", 880, 300, seg(t, 1.0, 1.4));
     abertura(t, "9º ANO · MISSÃO 4", "Inteligência artificial: impactos", "QUEM ENSINOU", "A MÁQUINA?", 1.8); } },
 { chip: "A IA NO DIA A DIA", fala: "O Davi digitou \"bom\", e o teclado sugeriu \"dia\". O aplicativo já mostrou o próximo vídeo. O celular desbloqueou com o rosto dele. Tudo isso é inteligência artificial.", sfx: [[.1, "whoosh"], [1.8, "ding"], [4.4, "pop"], [6.6, "pop"], [9.4, "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); davi9({ x: 240, y: 560, s: 1.0, braco: -1.1, bracoE: .3, olhar: 1, boca: t > 9.4 ? "sorri" : "o", pisca: pisca(t) });
     teclado9(560, 320, .85, t, seg(t, 1.8, 2.2)); comando("PRÓXIMO VÍDEO ▶", 1000, 200, seg(t, 4.2, 4.6), "#dc2626", 420); comando("DESBLOQUEIO PELO ROSTO 🙂", 1000, 290, seg(t, 6.4, 6.8), "#0891b2", 420);
     if (t > 9.4) palavra("INTELIGÊNCIA ARTIFICIAL", 960, 440, seg(t, 9.4, 9.8), 44); } },
 { chip: "COMO ELA APRENDE", fala: "Mas a IA não pensa como uma pessoa. Ela aprende com muitos exemplos, os dados, e descobre padrões.", sfx: [[.1, "whoosh"], [1.4, "alerta"], [3.6, "pop"], [6.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); robozinho(260, 320, .9, t); if (t > 1.2 && t < 3.4) balao("Eu não penso como gente!", 300, 160, seg(t, 1.2, 1.6));
     for (let i = 0; i < 8; i++) exemplo(560 + (i % 4) * 160, 220 + Math.floor(i / 4) * 110, seg(t, 3.4 + i * .15, 3.8 + i * .15), i % 3 === 0);
     palavra("DADOS", 800, 110, seg(t, 3.6, 4.0), 70); if (t > 6.4) cartao("PADRÕES", 800, 470, 300, "#7c3aed", seg(t, 6.4, 6.8), "o que se repete"); } },
 { chip: "AS 4 ETAPAS", fala: "Primeiro, coleta exemplos com a resposta certa. Depois, treina procurando padrões. Em seguida, testa com exemplos novos. E, por fim, usa no dia a dia.", sfx: [[.1, "whoosh"], [.8, "pop"], [3.6, "pop"], [6.2, "pop"], [8.8, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); [["1. COLETAR", "exemplos com resposta", .7, "#2563eb"], ["2. TREINAR", "achar padrões", 3.5, "#7c3aed"], ["3. TESTAR", "exemplos novos", 6.1, "#db2777"], ["4. USAR", "no dia a dia", 8.7, "#16a34a"]].forEach(([n, sub, t0, c2], i) => {
       cartao(n, 175 + i * 310, 300, 270, c2, seg(t, t0, t0 + .4), sub); if (i) seta(175 + i * 310 - 175, 300, 175 + i * 310 - 140, 300, seg(t, t0, t0 + .3)); });
     robozinho(640, 480, .55, t); } },
 { chip: "A IA ERRA", fala: "Só que a IA também erra. Se os exemplos forem poucos ou de um tipo só, ela aprende errado. Isso é viés. E o chatbot pode inventar uma resposta com toda a certeza. Por isso, confira sempre.", sfx: [[.1, "whoosh"], [.8, "alerta"], [6.4, "ding"], [9.0, "misterio"], [12.0, "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); robozinho(240, 330, .9, t); palavra(t > 11.8 ? "CONFIRA SEMPRE!" : t > 6.2 ? "VIÉS" : "A IA ERRA", 620, 125, t > 11.8 ? seg(t, 11.8, 12.2) : t > 6.2 ? seg(t, 6.2, 6.6) : seg(t, .6, 1.0), 72);
     if (t > 2.4 && t < 8.8) { for (let i = 0; i < 5; i++) exemplo(560 + i * 130, 280, seg(t, 2.4 + i * .15, 2.8 + i * .15), true); etiqueta("TODOS IGUAIS", 820, 420, 820, 330, seg(t, 3.6, 4.0)); }
     if (t > 8.8) { balao("Tenho certeza!", 330, 170, seg(t, 8.8, 9.2)); comando("RESPOSTA INVENTADA", 820, 300, seg(t, 9.4, 9.8), "#dc2626", 400); xVermelho(1040, 300, 26, seg(t, 10.2, 10.5)); } } },
 { chip: "IMPACTOS", fala: "A IA ajuda a saúde, a acessibilidade, o campo e o trânsito. Mas pede cuidado com os dados pessoais, com os empregos que mudam, com os deepfakes e com o gasto de energia.", sfx: [[.1, "whoosh"], [1.4, "pop"], [2.6, "pop"], [3.6, "pop"], [4.6, "pop"], [6.4, "alerta"], [8.0, "pop"], [9.6, "pop"], [11.0, "pop"], [12.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("👍 AJUDA", 320, 110, seg(t, .8, 1.2), 56); palavra("⚠️ CUIDADO", 960, 110, seg(t, 6.2, 6.6), 56);
     [["SAÚDE", 1.3], ["ACESSIBILIDADE", 2.5], ["CAMPO", 3.5], ["TRÂNSITO", 4.5]].forEach(([s2, t0], i) => comando(s2, 320, 210 + i * 80, seg(t, t0, t0 + .4), "#16a34a", 360));
     [["DADOS PESSOAIS", 7.9], ["EMPREGOS QUE MUDAM", 9.5], ["DEEPFAKES", 10.9], ["GASTO DE ENERGIA", 12.1]].forEach(([s2, t0], i) => comando(s2, 960, 210 + i * 80, seg(t, t0, t0 + .4), "#dc2626", 380)); } },
 { chip: "NA ESCOLA", fala: "Na escola: use a IA para estudar, confira as respostas, não coloque dados pessoais e diga quando usou.", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.2, "pop"], [4.8, "pop"], [6.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); boneco({ x: 1100, y: 580, s: .8, camisa: LIA9.camisa, cabelo: "longo", braco: -2.4, bracoE: .3, olhar: -1, pisca: pisca(t) });
     [["USE PARA ESTUDAR", 1.5], ["CONFIRA AS RESPOSTAS", 3.1], ["NÃO COLOQUE DADOS PESSOAIS", 4.7], ["DIGA QUANDO USOU", 6.3]].forEach(([s2, t0], i) => { comando(s2, 540, 160 + i * 95, seg(t, t0, t0 + .4), "#2563eb", 560); visto(230, 160 + i * 95, 22, seg(t, t0 + .2, t0 + .5)); }); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 4 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · Turma D · Missão 4", [DAVI9, LIA9]); } }
];

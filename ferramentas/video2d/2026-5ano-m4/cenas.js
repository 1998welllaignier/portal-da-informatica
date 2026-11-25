/* ================= 5º ano · 2026 · 4º bimestre · Missão 4 · Internet com cuidado: o que é confiável e de quem é ================= */
const LARA5 = { camisa: "#a855f7", cabelo: "longo" }, PEDRO5 = { camisa: "#f97316" };
const lara = o => boneco(Object.assign({}, LARA5, o)), pedro = o => boneco(Object.assign({}, PEDRO5, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// cartão de mensagem do celular (a notícia falsa)
function msgFalsa(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#dcfce7"; rr(-190, -90, 380, 180, 18); g.fill();
  g.fillStyle = "#dc2626"; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText("URGENTE!!!", 0, -34); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.fillText("Amanhã não tem aula", 0, 6); g.fillText("em nenhuma escola!", 0, 34);
  g.fillStyle = "#16a34a"; g.font = `800 18px ${F}`; g.fillText("COMPARTILHE JÁ ➜", 0, 72); g.restore(); }
function lupa(x, y, s, t) { g.save(); g.translate(x + Math.sin(t * 3) * 8, y); g.scale(s, s); g.strokeStyle = "#e2e8f0"; g.lineWidth = 12; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.stroke(); g.fillStyle = "rgba(186,230,253,.35)"; g.fill(); g.strokeStyle = "#a16207"; g.lineWidth = 18; g.lineCap = "round"; g.beginPath(); g.moveTo(32, 32); g.lineTo(78, 78); g.stroke(); g.restore(); }
function quadro(x, y, s, k, autor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#a16207"; rr(-130, -100, 260, 200, 10); g.fill(); g.fillStyle = "#fff"; g.fillRect(-114, -84, 228, 168);
  g.fillStyle = "#60a5fa"; g.fillRect(-114, -84, 228, 100); g.fillStyle = "#facc15"; g.beginPath(); g.arc(60, -50, 22, 0, 7); g.fill(); g.fillStyle = "#22c55e"; g.beginPath(); g.moveTo(-114, 16); g.lineTo(-40, -40); g.lineTo(30, 16); g.fill();
  if (autor) { g.fillStyle = NAVY; g.font = `italic 700 20px ${F}`; g.textAlign = "right"; g.fillText(autor, 104, 70); } g.restore(); }
function ferr(x, y, simb, nome, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-70, -70, 140, 140, 26); g.fill(); g.fillStyle = "#fff"; g.font = `800 56px ${F}`; g.textAlign = "center"; g.fillText(simb, 0, 20); g.font = `800 20px ${F}`; g.fillStyle = "#fff"; g.fillText(nome, 0, 105); g.restore(); }

const P4 = [["QUEM ESCREVEU?", "autor"], ["QUANDO FOI ESCRITO?", "data"], ["APARECE EM OUTROS LUGARES?", "outros"], ["PARECE EXAGERADO?", "exagerado"]];
const F0 = "Internet com cuidado: a mensagem misteriosa!",
  F1 = "A Lara recebeu uma mensagem no grupo da família: urgente, amanhã não tem aula em nenhuma escola, compartilhe já! Será que é verdade?",
  F2 = "Nem tudo o que aparece na internet é verdade. Uma notícia mentirosa, feita para enganar, se chama fake news, que quer dizer notícia falsa.",
  F3 = "Antes de acreditar ou compartilhar, faça quatro perguntas. Quem escreveu? Quando foi escrito? Aparece em outros lugares sérios? E parece exagerado, com muitos pontos de exclamação?",
  F4 = "A Lara fez as quatro perguntas. Não tinha autor, não tinha data, nenhum site sério falava disso, e era tudo exagerado. Era fake news! Ela não compartilhou e avisou a família. Missão cumprida!",
  F5 = "E tem mais um cuidado: quem cria, é dono. Um desenho, uma foto, uma música ou um texto pertencem a quem criou, o autor. Para usar, peça autorização ou dê o crédito, escrevendo o nome do autor. Copiar e dizer que é seu se chama plágio.",
  F6 = "E cada problema tem a sua tecnologia: a calculadora faz contas, o programa de desenho faz desenhos e a chamada de vídeo junta quem está longe. O agricultor usa a previsão do tempo no celular, e o comerciante usa a maquininha de cartão.",
  F7 = "Onde eu uso isso? Antes de compartilhar uma mensagem no celular, num trabalho da escola com imagens da internet e na hora de escolher o aplicativo certo para cada tarefa.",
  F8 = "Agora é com vocês: abram a Missão 4 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.7, "alerta"], [1.5, "misterio"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); celular(640, 300, .95, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); if (t > .6) { g.save(); g.scale(.33, .33); msgFalsa(0, -60, 1, seg(t, .6, 1)); g.restore(); } }); lupa(800, 260, 1, t);
     abertura(t, "5º ANO · MISSÃO 4", "Internet com cuidado", "A MENSAGEM", "MISTERIOSA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "mensagem"), "pop"], [em(F1, "urgente"), "alerta"], [em(F1, "compartilhe"), "pop"], [em(F1, "verdade"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "urgente"), b = em(F1, "verdade");
     lara({ x: 230, y: 600, s: 1.1, braco: -1.2, bracoE: .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) });
     msgFalsa(720, 300, 1.3, seg(t, a, a + .5)); if (t > b) palavra("SERÁ QUE É VERDADE?", 720, 110, seg(t, b, b + .4), 54); } },
 { chip: "FAKE NEWS", fala: F2, legenda: "Nem tudo o que aparece na internet é verdade. Uma notícia mentirosa, feita para enganar, se chama fake news, que quer dizer notícia falsa.",
   sfx: [[.1, "whoosh"], [em(F2, "mentirosa"), "alerta"], [em(F2, "fake"), "ding"], [em(F2, "falsa"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const a = em(F2, "mentirosa"), b = em(F2, "fake");
     if (t > a) { msgFalsa(640, 330, 1, seg(t, a, a + .4)); xVermelho(820, 260, 46, seg(t, b, b + .3)); }
     palavra("FAKE NEWS", 640, 110, seg(t, b, b + .4), 84); if (t > b + .4) cartao("= NOTÍCIA FALSA (do inglês)", 640, 500, 540, "#dc2626", seg(t, b + .4, b + .8)); } },
 { chip: "4 PERGUNTAS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Quem"), "pop"], [em(F3, "Quando"), "pop"], [em(F3, "Aparece"), "pop"], [em(F3, "exagerado"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("ANTES DE COMPARTILHAR:", 590, 95, seg(t, 0, .4), 42); lupa(1110, 330, 1.1, t);
     [["Quem", "#2563eb"], ["Quando", "#7c3aed"], ["Aparece", "#0e7490"], ["exagerado", "#ea580c"]].forEach(([w, c], i) => { const t0 = em(F3, w); comando((i + 1) + ". " + P4[i][0], 520, 180 + i * 95, seg(t, t0, t0 + .4), c, 620); }); } },
 { chip: "INVESTIGANDO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "autor"), "alerta"], [em(F4, "data"), "alerta"], [em(F4, "sério"), "alerta"], [em(F4, "exagerado"), "alerta"], [em(F4, "fake"), "ding"], [em(F4, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const fk = em(F4, "fake"), m = em(F4, "Missão");
     [["autor", "SEM AUTOR"], ["data", "SEM DATA"], ["sério", "NENHUM SITE SÉRIO"], ["exagerado", "EXAGERADO!!!"]].forEach(([w, n], i) => { const t0 = em(F4, w); comando(n, 300, 160 + i * 90, seg(t, t0, t0 + .4), "#475569", 360); xVermelho(520, 160 + i * 90, 26, seg(t, t0 + .2, t0 + .5)); });
     msgFalsa(900, 260, .9, 1); if (t > fk) { g.save(); g.translate(900, 260); g.rotate(-.2); g.strokeStyle = "#dc2626"; g.lineWidth = 8; g.strokeRect(-150, -40, 300, 80); g.fillStyle = "#dc2626"; g.font = `800 44px ${F}`; g.textAlign = "center"; g.globalAlpha = cl(seg(t, fk, fk + .3)); g.fillText("FAKE NEWS", 0, 16); g.restore(); }
     if (t > m) cumprida(t, m); } },
 { chip: "QUEM CRIA, É DONO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "dono"), "ding"], [em(F5, "autor"), "pop"], [em(F5, "autorização"), "pop"], [em(F5, "crédito"), "ding"], [em(F5, "plágio"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const d = em(F5, "dono"), a = em(F5, "autor"), c = em(F5, "crédito"), p = em(F5, "plágio");
     palavra("QUEM CRIA, É DONO", 590, 95, seg(t, d, d + .4), 50); quadro(330, 320, 1.05, seg(t, .3, .8), t > c ? "Desenho: Pedro" : "");
     pedro({ x: 560, y: 560, s: .8, braco: -1.6, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t) }); if (t > a) comando("AUTOR", 560, 330, seg(t, a, a + .4), "#7c3aed", 160);
     if (t > c) { comando("✔ PEDIR AUTORIZAÇÃO", 960, 230, seg(t, em(F5, "autorização"), em(F5, "autorização") + .4), "#16a34a", 380); comando("✔ DAR O CRÉDITO", 960, 320, seg(t, c, c + .4), "#16a34a", 380); }
     if (t > p) { comando("✖ COPIAR E DIZER QUE É SEU = PLÁGIO", 960, 430, seg(t, p, p + .4), "#dc2626", 520); } } },
 { chip: "A TECNOLOGIA CERTA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "calculadora"), "pop"], [em(F6, "desenho"), "pop"], [em(F6, "vídeo"), "pop"], [em(F6, "agricultor"), "ding"], [em(F6, "comerciante"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("CADA PROBLEMA, UMA TECNOLOGIA", 580, 100, seg(t, 0, .4), 36);
     ferr(280, 250, "÷", "CALCULADORA", "#ea580c", seg(t, em(F6, "calculadora"), em(F6, "calculadora") + .4)); ferr(640, 250, "✎", "DESENHO", "#16a34a", seg(t, em(F6, "desenho"), em(F6, "desenho") + .4)); ferr(1000, 250, "☎", "CHAMADA DE VÍDEO", "#2563eb", seg(t, em(F6, "vídeo"), em(F6, "vídeo") + .4));
     comando("AGRICULTOR → PREVISÃO DO TEMPO", 380, 470, seg(t, em(F6, "agricultor"), em(F6, "agricultor") + .4), "#15803d", 520); comando("COMERCIANTE → MAQUININHA", 920, 470, seg(t, em(F6, "comerciante"), em(F6, "comerciante") + .4), "#7c3aed", 460); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "compartilhar"), "pop"], [em(F7, "trabalho"), "pop"], [em(F7, "aplicativo"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 90, seg(t, 0, .4), 50);
     [["compartilhar", "ANTES DE COMPARTILHAR", "PERGUNTE: É VERDADE?", "#dc2626"], ["trabalho", "TRABALHO DA ESCOLA", "DÊ O CRÉDITO", "#7c3aed"], ["aplicativo", "ESCOLHER O APP", "O CERTO PARA A TAREFA", "#16a34a"]].forEach(([w, n, sub, c], i) => {
       const t0 = em(F7, w), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 260 + i * 380; g.save(); g.translate(x, 310); g.scale(k, k); g.fillStyle = "#fff"; rr(-160, -100, 320, 200, 18); g.fill();
       g.fillStyle = c; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(n, 0, -20); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.fillText(sub, 0, 40); g.restore(); }); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "5º ano · 4º bimestre de 2026 · Missão 4", [LARA5, PEDRO5]); } }
];

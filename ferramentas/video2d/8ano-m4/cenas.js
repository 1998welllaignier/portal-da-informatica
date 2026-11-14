/* ================= 8º ano · Missão 4 · Termos de uso: o que eu aceitei? ================= */
const BIA8 = { camisa: "#a855f7", cabelo: "longo" }, RAFA = { camisa: "#0ea5e9" };
const bia8 = o => boneco(Object.assign({}, BIA8, o));
// celular com os termos de uso; ks = quantas linhas escondidas aparecem destacadas (0..3)
function telaTermos(x, y, s, t, botao, destaque) { g.save(); g.translate(x, y); g.scale(s, s);
  g.fillStyle = "#0f172a"; rr(-120, -220, 240, 440, 30); g.fill(); g.fillStyle = "#fff"; rr(-104, -196, 208, 392, 14); g.fill();
  g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("TERMOS DE USO", 0, -162);
  for (let i = 0; i < 11; i++) { const d = destaque && [2, 5, 8].indexOf(i); g.fillStyle = destaque && d >= 0 && destaque > d ? "#f59e0b" : "#cbd5e1"; rr(-88, -140 + i * 22, 176 - (i % 3) * 22, 10, 5); g.fill(); }
  if (botao) { g.fillStyle = botao > 1 ? "#16a34a" : "#2563eb"; rr(-84, 120, 168, 52, 14); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.fillText("LI E ACEITO", 0, 153); }
  g.restore(); }
function contrato(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.rotate(-.05);
  g.fillStyle = "#fef9c3"; rr(-120, -150, 240, 300, 10); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; rr(-120, -150, 240, 300, 10); g.stroke();
  g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("CONTRATO", 0, -105); for (let i = 0; i < 6; i++) { g.fillStyle = "#a8a29e"; rr(-90, -70 + i * 26, 180 - (i % 2) * 40, 9, 4); g.fill(); }
  g.strokeStyle = "#2563eb"; g.lineWidth = 4; g.beginPath(); g.moveTo(-70, 120); g.bezierCurveTo(-40, 90, -20, 140, 10, 110); g.bezierCurveTo(30, 95, 50, 125, 80, 112); g.stroke(); g.restore(); }
function anuncio(x, y, s, k, txt) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#f97316"; rr(-110, -50, 220, 100, 16); g.fill();
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt || "COMPRE JÁ!", 0, -6); g.font = `700 15px ${F}`; g.fillText("anúncio", 0, 22); g.restore(); }

const CENAS = [
 { chip: "", fala: "Termos de uso: o que eu aceitei?", sfx: [[.05, "whoosh"], [.5, "misterio"], [1.6, "alerta"], [2.8, "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); telaTermos(640, 300, .62, t, t > 1.0 ? 1 : 0, Math.floor(seg(t, .6, 1.8) * 3)); if (t > 1.2) lupa(760, 250, .9 * back(seg(t, 1.2, 1.6)));
     abertura(t, "8º ANO · MISSÃO 4", "Termos de uso: o que eu aceitei?", "O CLIQUE", "QUE VIROU CONTRATO!", 1.8); } },
 { chip: "O JOGO NOVO", fala: "A Bia baixou um jogo novo. Apareceu um texto enorme e um botão: Li e aceito. Ela clicou sem ler. Todo mundo faz isso, né?", sfx: [[.1, "whoosh"], [1.6, "pop"], [3.6, "pop"], [6.4, "click"], [9.0, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); bia8({ x: 300, y: 560, s: 1.05, braco: -1.1, bracoE: .3, olhar: 1, boca: t > 6.4 ? "sorri" : "o", pisca: pisca(t) });
     telaTermos(780, 320, .95, t, t > 3.4 ? (t > 6.4 ? 2 : 1) : 0, 0); if (t > 3.6) etiqueta("TEXTO ENORME", 1080, 160, 900, 200, seg(t, 3.6, 4.0));
     if (t > 6.4) { balao("Pronto, aceitei!", 300, 150, seg(t, 6.4, 6.8)); } if (t > 9.0) palavra("SEM LER?", 1060, 470, seg(t, 9.0, 9.4), 52); } },
 { chip: "CONTRATO", fala: "Mas aquele clique é um contrato. Você concorda com tudo o que está escrito, mesmo sem ter lido.", sfx: [[.1, "whoosh"], [1.6, "ding"], [4.6, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); palavra("CONTRATO", 640, 110, seg(t, 1.4, 1.8), 90); contrato(640, 320, .85, seg(t, 1.6, 2.2));
     etiqueta("O CLIQUE = ASSINATURA", 1000, 280, 740, 400, seg(t, 3.0, 3.4)); if (t > 4.6) comando("CONCORDA COM TUDO!", 640, 520, seg(t, 4.6, 5.0), "#dc2626", 420); } },
 { chip: "O QUE ESTAVA ESCONDIDO", fala: "E o que estava escondido no meio do texto? Que o jogo coleta nome, contatos e localização. Que pode compartilhar os dados com parceiros. E que pode usar as fotos que a Bia publicar.", sfx: [[.1, "whoosh"], [1.0, "misterio"], [4.4, "pop"], [8.0, "pop"], [11.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); telaTermos(260, 330, .85, t, 1, Math.floor(seg(t, 3.6, 11.6) * 3 + .01)); lupa(330, 250, .9 * back(seg(t, .8, 1.2)));
     [["COLETA: NOME, CONTATOS E LOCALIZAÇÃO", 4.2, "#2563eb"], ["COMPARTILHA COM PARCEIROS", 7.8, "#7c3aed"], ["PODE USAR AS SUAS FOTOS", 11.2, "#db2777"]].forEach(([s2, t0, c2], i) => comando(s2, 820, 200 + i * 110, seg(t, t0, t0 + .4), c2, 600)); } },
 { chip: "QUEM PAGA?", fala: "O jogo é grátis. Então quem paga? Muitas vezes, a propaganda. E os seus dados ajudam a escolher que propaganda mostrar para você.", sfx: [[.1, "whoosh"], [.6, "festa"], [2.4, "misterio"], [4.8, "ding"], [7.0, "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); cartao("GRÁTIS!", 320, 160, 300, "#16a34a", seg(t, .5, .9)); if (t > 2.4) palavra("QUEM PAGA?", 900, 140, seg(t, 2.4, 2.8), 62);
     anuncio(640, 330, 1.1, seg(t, 4.6, 5.0), "PROPAGANDA"); if (t > 6.8) { ["VOCÊ CURTE", "O APP GUARDA", "ANÚNCIO \"SEU\""].forEach((s2, i) => comando(s2, 260 + i * 380, 490, seg(t, 6.8 + i * .7, 7.2 + i * .7), ["#0891b2", "#7c3aed", "#f97316"][i], 300)); seta(420, 490, 470, 490, seg(t, 7.4, 7.7)); seta(800, 490, 850, 490, seg(t, 8.1, 8.4)); } } },
 { chip: "LGPD", fala: "A boa notícia: a LGPD, a Lei Geral de Proteção de Dados, dá direitos a você. Saber quais dados a empresa tem, corrigir, pedir para apagar e retirar a autorização.", sfx: [[.1, "whoosh"], [.8, "festa"], [2.4, "ding"], [7.4, "pop"], [8.8, "pop"], [10.0, "pop"], [11.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("LGPD", 640, 110, seg(t, 2.2, 2.6), 96); escudo(640, 260, .9 * back(seg(t, 2.6, 3.0)));
     [["SABER", 7.2], ["CORRIGIR", 8.6], ["APAGAR", 9.8], ["RETIRAR A AUTORIZAÇÃO", 11.2]].forEach(([s2, t0], i) => comando(s2, 190 + i * 300, 450, seg(t, t0, t0 + .4), "#16a34a", i === 3 ? 300 : 230)); } },
 { chip: "3 PERGUNTAS", fala: "Antes de aceitar, faça três perguntas: que dados ele pega? Com quem compartilha? Consigo apagar a minha conta?", sfx: [[.1, "whoosh"], [1.4, "ding"], [3.0, "pop"], [4.8, "pop"], [6.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); palavra("ANTES DE ACEITAR", 540, 120, seg(t, .8, 1.2), 64); bia8({ x: 1100, y: 580, s: .8, braco: -2.4, bracoE: .3, olhar: -1, pisca: pisca(t) });
     [["1. QUE DADOS ELE PEGA?", 2.8], ["2. COM QUEM COMPARTILHA?", 4.6], ["3. CONSIGO APAGAR A MINHA CONTA?", 6.4]].forEach(([s2, t0], i) => { comando(s2, 540, 220 + i * 100, seg(t, t0, t0 + .4), "#2563eb", 620); }); } },
 { chip: "ONDE EU USO ISSO?", fala: "Onde eu uso isso? Ao criar uma conta em rede social ou jogo, em sorteios que pedem CPF e quando chega o aviso: atualizamos nossos termos.", sfx: [[.1, "whoosh"], [2.0, "pop"], [5.0, "pop"], [8.0, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); [["CRIAR CONTA", "rede social ou jogo", 1.9], ["SORTEIOS", "que pedem CPF", 4.9], ["“ATUALIZAMOS”", "os termos mudaram", 7.9]].forEach(([n, sub, t0], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 240 + i * 400;
     g.save(); g.translate(x, 300); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-160, -150, 320, 300, 26); g.fill();
     if (i === 0) telaTermos(0, 0, .5, t, 1, 0); else if (i === 1) { cartao("CPF?", 0, 0, 180, "#dc2626", 1); } else contrato(0, 0, .6, 1);
     g.restore(); cartao(n, x, 510, 320, "rgba(255,255,255,.12)", seg(t, t0 + .2, t0 + .5), sub); }); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 4 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · Turmas A, B, C e D · Missão 4", [BIA8, RAFA]); } }
];

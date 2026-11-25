/* ================= 6º ano · 2027 · 1º bimestre · Missão 4 · Pastas e arquivos ================= */
const PEDRO = { camisa: "#f97316" }, IRMA = { camisa: "#ec4899", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), irma = o => boneco(Object.assign({}, IRMA, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// ícone de arquivo com extensão colorida
function arq(x, y, s, nome, ext, cor, k, rot) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.rotate(rot || 0); g.scale(s * z, s * z); g.fillStyle = "#fff"; g.beginPath(); g.moveTo(-40, -52); g.lineTo(22, -52); g.lineTo(40, -34); g.lineTo(40, 52); g.lineTo(-40, 52); g.closePath(); g.fill();
  g.fillStyle = cor; rr(-34, 8, 68, 30, 6); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(ext, 0, 30);
  if (nome) { g.fillStyle = "#fff"; g.font = `700 17px ${F}`; g.fillText(nome, 0, 78); } g.restore(); }
function gaveta(x, y, s, nome, k, aberta) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#f5b82e"; rr(-80, -62, 66, 24, 6); g.fill(); rr(-80, -48, 160, 110, 10); g.fill();
  if (aberta) { g.fillStyle = "#fcd34d"; g.beginPath(); g.moveTo(-80, -10); g.lineTo(80, -10); g.lineTo(66, 62); g.lineTo(-94, 62); g.fill(); }
  g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 92); g.restore(); }
function bagunca(t, k) { const L = [["foto", ".jpg", "#16a34a"], ["música", ".mp3", "#7c3aed"], ["trabalho", ".docx", "#2563eb"], ["vídeo", ".mp4", "#dc2626"], ["receita", ".pdf", "#ea580c"], ["foto2", ".jpg", "#16a34a"], ["notas", ".txt", "#475569"], ["jogo", ".mp4", "#dc2626"]];
  L.forEach(([n, e, c], i) => arq(260 + (i % 4) * 240 + Math.sin(i * 7) * 40, 230 + Math.floor(i / 4) * 190 + Math.cos(i * 3) * 20, .9, n, e, c, seg(k, i * .08, i * .08 + .3), Math.sin(i * 5 + t) * .25)); }

const F0 = "Pastas e arquivos: a gaveta bagunçada!",
  F1 = "O Pedro precisa entregar o trabalho de Ciências, mas a área de trabalho do computador dele é uma bagunça: fotos, músicas, vídeos e textos, tudo misturado. Cadê o trabalho?",
  F2 = "Um arquivo é qualquer coisa guardada no computador: um texto, uma foto, uma música, um vídeo. E uma pasta é como uma gaveta que organiza os arquivos. Dentro de uma pasta, pode ter outras pastas.",
  F3 = "Todo arquivo tem um nome e uma extensão: o final depois do ponto, que mostra o tipo dele. Ponto jota pê gê é imagem. Ponto eme pê três é música. Ponto eme pê quatro é vídeo. Ponto pê dê éfe é um documento para ler e imprimir.",
  F4 = "O lugar onde o arquivo mora se chama caminho, como um endereço: Documentos, depois Escola, depois Informática, e aí o arquivo. Cada pasta fica dentro da outra.",
  F5 = "Para não perder nada, salve sempre! O atalho Control mais S salva na hora. E o salvar como deixa escolher o lugar e o nome. Para trocar o nome depois, é só clicar com o botão direito e escolher renomear.",
  F6 = "O Pedro criou a pasta Escola, com uma pasta para cada matéria, e colocou cada arquivo no seu lugar. O trabalho estava ali, em Escola, Ciências. Missão cumprida!",
  F7 = "Onde eu uso isso? Na galeria do celular, que separa as fotos por álbum. No pen drive do trabalho da escola. E no Explorador de Arquivos do Windows, que mostra todas as pastas do computador.",
  F8 = "Agora é com vocês: abram a Missão 4 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "alerta"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); gaveta(640, 290, 1.5, "", seg(t, .2, .6), true); [["foto", ".jpg", "#16a34a"], ["música", ".mp3", "#7c3aed"], ["vídeo", ".mp4", "#dc2626"]].forEach(([n, e, c], i) => arq(520 + i * 120, 235 - Math.abs(Math.sin(t * 3 + i)) * 30, .7, "", e, c, seg(t, .5 + i * .2, .8 + i * .2), Math.sin(t * 4 + i) * .4));
     abertura(t, "6º ANO · MISSÃO 4", "Pastas e arquivos", "A GAVETA", "BAGUNÇADA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "trabalho"), "pop"], [em(F1, "bagunça"), "alerta"], [em(F1, "Cadê"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "bagunça"), c = em(F1, "Cadê");
     if (t > a) bagunca(t, t - a); pedro({ x: 130, y: 600, s: .95, braco: t > c ? -2.5 : -.6, bracoE: t > c ? 2.5 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) });
     if (t > c) palavra("CADÊ O TRABALHO?", 640, 100, seg(t, c, c + .4), 56); } },
 { chip: "ARQUIVO E PASTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "arquivo"), "ding"], [em(F2, "pasta"), "ding"], [em(F2, "gaveta"), "pop"], [em(F2, "outras"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F2, "arquivo"), p = em(F2, "pasta"), o = em(F2, "outras");
     comando("📄 ARQUIVO", 330, 110, seg(t, a, a + .4), "#2563eb", 280); [[".docx", "#2563eb"], [".jpg", "#16a34a"], [".mp3", "#7c3aed"], [".mp4", "#dc2626"]].forEach(([e, c], i) => arq(200 + (i % 2) * 130, 250 + Math.floor(i / 2) * 150, .8, "", e, c, seg(t, a + .4 + i * .3, a + .7 + i * .3)));
     comando("📁 PASTA = GAVETA", 900, 110, seg(t, p, p + .4), "#ca8a04", 340); gaveta(900, 290, 1.3, "Escola", seg(t, p + .2, p + .6), true);
     if (t > o) { gaveta(820, 470, .7, "Ciências", seg(t, o, o + .4)); gaveta(980, 470, .7, "Português", seg(t, o + .2, o + .6)); seta(900, 380, 840, 420, seg(t, o, o + .3), "#fde68a"); seta(900, 380, 960, 420, seg(t, o + .2, o + .5), "#fde68a"); } } },
 { chip: "EXTENSÃO", fala: F3, legenda: "Todo arquivo tem um nome e uma extensão: o final depois do ponto, que mostra o tipo dele. .jpg é imagem. .mp3 é música. .mp4 é vídeo. .pdf é um documento para ler e imprimir.",
   sfx: [[.1, "whoosh"], [em(F3, "extensão"), "ding"], [em(F3, "jota"), "pop"], [em(F3, "três"), "pop"], [em(F3, "quatro"), "pop"], [em(F3, "dê"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const x0 = em(F3, "extensão"); comando("trabalho", 560, 150, seg(t, .3, .7), "#475569", 220); if (t > x0) { comando(".docx", 760, 150, seg(t, x0, x0 + .4), "#2563eb", 150); seta(760, 210, 760, 185, 1, "#fde68a"); rotulo("EXTENSÃO = O TIPO", 760, 250, "#fde68a", seg(t, x0, x0 + .4)); }
     [["jota", ".jpg", "IMAGEM", "#16a34a"], ["três", ".mp3", "MÚSICA", "#7c3aed"], ["quatro", ".mp4", "VÍDEO", "#dc2626"], ["dê", ".pdf", "DOCUMENTO", "#ea580c"]].forEach(([w, e, n, c], i) => { const t0 = em(F3, w); const x = 220 + i * 280; arq(x, 380, 1, "", e, c, seg(t, t0, t0 + .4)); comando(n, x, 490, seg(t, t0 + .1, t0 + .5), c, 220); }); } },
 { chip: "CAMINHO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "caminho"), "ding"], [em(F4, "Documentos"), "pop"], [em(F4, "Escola"), "pop"], [em(F4, "Informática"), "pop"], [em(F4, "arquivo"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const c0 = em(F4, "caminho"); palavra("CAMINHO = ENDEREÇO", 600, 100, seg(t, c0, c0 + .4), 56);
     const P = [["Documentos", "Documentos"], ["Escola", "Escola"], ["Informática", "Informática"]]; P.forEach(([w, n], i) => { const t0 = em(F4, w), x = 200 + i * 290; gaveta(x, 320, .9, n, seg(t, t0, t0 + .4)); if (i < 2 && t > em(F4, P[i + 1][0])) seta(x + 90, 300, x + 200, 300, seg(t, em(F4, P[i + 1][0]), em(F4, P[i + 1][0]) + .3), "#fde68a"); });
     const a = em(F4, "arquivo"); if (t > a) { seta(870 + 90, 300, 1070, 300, seg(t, a, a + .3), "#fde68a"); arq(1110, 300, 1, "trabalho", ".docx", "#2563eb", seg(t, a, a + .4)); }
     if (t > a + .6) cartao("Documentos › Escola › Informática › trabalho.docx", 640, 500, 780, "#0f766e", seg(t, a + .6, a + 1)); } },
 { chip: "SALVAR", fala: F5, legenda: "Para não perder nada, salve sempre! O atalho Ctrl + S salva na hora. E o Salvar como deixa escolher o lugar e o nome. Para trocar o nome depois, é só clicar com o botão direito e escolher Renomear.",
   sfx: [[.1, "whoosh"], [em(F5, "Control"), "click"], [em(F5, "salva"), "ding"], [em(F5, "como"), "pop"], [em(F5, "direito"), "click"], [em(F5, "renomear"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const c = em(F5, "Control"), s = em(F5, "como"), r = em(F5, "direito");
     palavra("SALVE SEMPRE!", 600, 100, seg(t, 0, .4), 60);
     if (t > c) { J_tecla(280, 250, "Ctrl", t > c + .3 && t < c + 1.2); J_tecla(420, 250, "S", t > c + .5 && t < c + 1.2); comando("💾 SALVA NA HORA", 350, 350, seg(t, c + .4, c + .8), "#16a34a", 300); }
     if (t > s) comando("SALVAR COMO: LUGAR E NOME", 900, 250, seg(t, s, s + .4), "#2563eb", 440);
     if (t > r) { mouse(900, 400, 1.4); g.fillStyle = "#ef4444"; g.globalAlpha = .7; g.beginPath(); g.ellipse(912, 382, 10, 14, 0, 0, 7); g.fill(); g.globalAlpha = 1; comando("BOTÃO DIREITO → RENOMEAR", 900, 500, seg(t, r, r + .4), "#7c3aed", 440); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "Escola"), "ding"], [em(F6, "matéria"), "pop"], [em(F6, "lugar"), "pop"], [em(F6, "Ciências", 0), "festa"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F6, "Escola"), b = em(F6, "matéria"), c = em(F6, "lugar"), m = em(F6, "Missão");
     gaveta(640, 200, 1.1, "Escola", seg(t, a, a + .4), true);
     if (t > b) [["Ciências", "#16a34a"], ["Português", "#2563eb"], ["Matemática", "#ea580c"], ["Informática", "#7c3aed"]].forEach(([n, c2], i) => { gaveta(260 + i * 250, 420, .75, n, seg(t, b + i * .2, b + i * .2 + .4)); });
     if (t > c) arq(260, 405, .55, "", ".docx", "#2563eb", seg(t, c, c + .4));
     pedro({ x: 1150, y: 610, s: .8, braco: t > c ? -2.4 : -.6, bracoE: t > c ? 2.4 : .3, olhar: -1, boca: t > c ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "galeria"), "pop"], [em(F7, "pen"), "pop"], [em(F7, "Explorador"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["galeria", "GALERIA: ÁLBUNS", "#16a34a"], ["pen", "PEN DRIVE DA ESCOLA", "#2563eb"], ["Explorador", "EXPLORADOR DE ARQUIVOS", "#ca8a04"]].forEach(([w, n, c], i) => { const t0 = em(F7, w), x = 260 + i * 380, k = seg(t, t0, t0 + .4); if (k <= 0) return;
       if (i === 0) celular(x, 300, .6, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); for (let j = 0; j < 4; j++) gaveta(-34 + (j % 2) * 68, -80 + Math.floor(j / 2) * 110, .35, "", 1); });
       if (i === 1) { g.save(); g.translate(x, 300); g.scale(1.6, 1.6); g.fillStyle = "#2563eb"; rr(-24, -60, 48, 90, 10); g.fill(); g.fillStyle = "#cbd5e1"; g.fillRect(-16, -84, 32, 26); g.restore(); }
       if (i === 2) { gaveta(x, 290, 1.1, "", 1, true); }
       comando(n, x, 470, seg(t, t0 + .1, t0 + .5), c, 340); }); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 4", [PEDRO, IRMA]); } }
];
// tecla desenhada (Ctrl, S)
function J_tecla(x, y, txt, ap) { g.save(); g.translate(x, y + (ap ? 6 : 0)); g.fillStyle = ap ? "#facc15" : "#e2e8f0"; rr(-55, -45, 110, 90, 16); g.fill(); g.fillStyle = ap ? "#a16207" : "#94a3b8"; g.fillRect(-55, 35, 110, 10); g.fillStyle = NAVY; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 12); g.restore(); }

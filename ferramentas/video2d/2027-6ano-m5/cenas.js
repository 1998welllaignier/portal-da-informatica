/* ================= 6º ano · 2027 · 1º bimestre · Missão 5 · Tipos de dados ================= */
const LUANA = { camisa: "#0ea5e9", cabelo: "longo" }, DAVI = { camisa: "#22c55e" };
const luana = o => boneco(Object.assign({}, LUANA, o)), davi = o => boneco(Object.assign({}, DAVI, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// tabela desenhada: cab = cabeçalhos, lin = linhas, cores por coluna, hl = coluna em destaque
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
// cartãozinho de tipo (ícone + nome)
function tipo(x, y, ic, nome, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-110, -80, 220, 160, 18); g.fill(); g.font = `64px ${F}`; g.textAlign = "center"; g.fillText(ic, 0, -2); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.fillText(nome, 0, 56); g.restore(); }

const F0 = "Tipos de dados: a planilha maluca!",
  F1 = "A Luana montou no computador o cadastro do time da escola. Mas, quando pediu para somar os pontos, o computador somou os telefones! Que confusão!",
  F2 = "Tudo o que o computador guarda é dado: um nome, um número, uma foto. Mas cada dado tem um tipo, e o tipo diz o que o computador pode fazer com ele.",
  F3 = "Texto são letras, como um nome. Número é para fazer contas. Data é o dia, o mês e o ano. E o lógico só pode ser verdadeiro ou falso: sim ou não.",
  F4 = "Imagem, som e vídeo também são tipos de dados: a foto a gente mostra, a música a gente toca, e o vídeo a gente pausa e avança.",
  F5 = "Cuidado com a pegadinha: telefone e CEP parecem números, mas são texto. Ninguém soma dois telefones! Se o dado vai para a conta, é número. Se é só um nome feito de algarismos, é texto.",
  F6 = "Muitos dados juntos formam coleções. A lista é um dado depois do outro, em ordem, como a lista de chamada. E a tabela tem linhas e colunas: cada linha é um jogador, e cada coluna, uma informação.",
  F7 = "A Luana arrumou a tabela: o nome como texto, os pontos como número e o telefone como texto. Agora o computador soma só os pontos. Missão cumprida!",
  F8 = "Onde eu uso isso? No cadastro de uma loja, na tabela do campeonato e na playlist de músicas, que é uma lista.",
  F9 = "Agora é com vocês: abram a Missão 5 no portal!";

const CAB = ["NOME", "PONTOS", "TELEFONE"], LIN = [["Ana", "12", "9 9123-4567"], ["Davi", "8", "9 9876-5432"], ["Luana", "15", "9 9555-1212"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "alerta"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b0764"); ["🔤", "🔢", "📅", "✅", "🖼️", "🔊"].forEach((e, i) => { const k = seg(t, .3 + i * .15, .6 + i * .15); if (k <= 0) return; g.save(); g.globalAlpha = k; g.fillStyle = "#fff"; g.font = `64px ${F}`; g.textAlign = "center"; g.fillText(e, 640 + Math.cos(t * 1.2 + i * 1.05) * 300, 300 + Math.sin(t * 1.2 + i * 1.05) * 90); g.restore(); });
     abertura(t, "6º ANO · MISSÃO 5", "Tipos de dados", "A PLANILHA", "MALUCA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "cadastro"), "pop"], [em(F1, "somar"), "click"], [em(F1, "telefones"), "alerta"], [em(F1, "confusão"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "cadastro"), s = em(F1, "telefones"), c = em(F1, "confusão");
     tabela(700, 150, 640, CAB, LIN, ["#2563eb", "#16a34a", "#7c3aed"], seg(t, a, a + .5), t > s ? 2 : -1);
     if (t > s) { comando("SOMA = 29 9555 1211 ???", 700, 400, seg(t, s, s + .4), "#dc2626", 520); xVermelho(1060, 400, 40, seg(t, s + .3, s + .7)); }
     luana({ x: 170, y: 610, s: .95, braco: t > c ? -2.5 : -.6, bracoE: t > c ? 2.5 : .3, olhar: 1, boca: t > s ? "o" : "", pisca: pisca(t) });
     if (t > c) palavra("QUE CONFUSÃO!", 700, 500, seg(t, c, c + .4), 50); } },
 { chip: "DADO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "dado"), "ding"], [em(F2, "nome"), "pop"], [em(F2, "número"), "pop"], [em(F2, "foto"), "pop"], [em(F2, "tipo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F2, "dado"), tp = em(F2, "tipo");
     palavra("TUDO É DADO", 640, 90, seg(t, d, d + .4), 60);
     monitor(640, 400, 1.1, () => { [["nome", "Maria"], ["número", "150"], ["foto", "🖼️"]].forEach(([w, v], i) => { const k = seg(t, em(F2, w), em(F2, w) + .4); if (k <= 0) return; g.save(); g.globalAlpha = k; g.fillStyle = NAVY; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText(v, 0, -140 + i * 45); g.restore(); }); });
     if (t > tp) cartao("O TIPO diz o que dá para fazer com o dado", 640, 515, 900, "#0f766e", seg(t, tp, tp + .4)); } },
 { chip: "TEXTO, NÚMERO, DATA, LÓGICO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Texto"), "pop"], [em(F3, "Número"), "pop"], [em(F3, "Data"), "pop"], [em(F3, "lógico"), "pop"], [em(F3, "sim"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e");
     [["Texto", "🔤", "TEXTO", "#2563eb", "“Maria”"], ["Número", "🔢", "NÚMERO", "#16a34a", "12 + 8 = 20"], ["Data", "📅", "DATA", "#ea580c", "10/05/2027"], ["lógico", "✅", "LÓGICO", "#7c3aed", "SIM / NÃO"]].forEach(([w, ic, n, c, ex], i) => { const t0 = em(F3, w), x = 190 + i * 300; tipo(x, 250, ic, n, c, seg(t, t0, t0 + .4)); if (t > t0 + .3) comando(ex, x, 420, seg(t, t0 + .3, t0 + .7), "#334155", 240); }); } },
 { chip: "IMAGEM, SOM E VÍDEO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "foto"), "pop"], [em(F4, "música"), "pop"], [em(F4, "vídeo", 1), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("TAMBÉM SÃO DADOS", 600, 100, seg(t, 0, .4), 54);
     [["foto", "🖼️", "IMAGEM", "#16a34a", "MOSTRAR"], ["música", "🎵", "SOM", "#7c3aed", "TOCAR"], ["vídeo", "🎬", "VÍDEO", "#dc2626", "PAUSAR, AVANÇAR"]].forEach(([w, ic, n, c, ex], i) => { const t0 = em(F4, w, w === "vídeo" ? 1 : 0), x = 260 + i * 380; tipo(x, 290, ic, n, c, seg(t, t0, t0 + .4)); if (t > t0 + .3) comando(ex, x, 450, seg(t, t0 + .3, t0 + .7), "#334155", 300); }); } },
 { chip: "A PEGADINHA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "pegadinha"), "alerta"], [em(F5, "texto"), "ding"], [em(F5, "soma"), "alerta"], [em(F5, "conta"), "pop"], [em(F5, "algarismos"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const p = em(F5, "pegadinha"), tx = em(F5, "texto"), s = em(F5, "soma"), c = em(F5, "conta"), al = em(F5, "algarismos");
     palavra("PEGADINHA!", 640, 100, seg(t, p, p + .4), 60);
     comando("📞 9 9123-4567", 330, 230, seg(t, p + .3, p + .7), "#475569", 320); comando("📮 CEP 68523-000", 330, 320, seg(t, p + .5, p + .9), "#475569", 320);
     if (t > tx) { seta(510, 275, 640, 275, seg(t, tx, tx + .3), "#fde68a"); tipo(780, 275, "🔤", "TEXTO", "#2563eb", seg(t, tx, tx + .4)); }
     if (t > s) { comando("TELEFONE + TELEFONE = ???", 640, 410, seg(t, s, s + .4), "#dc2626", 480); xVermelho(920, 410, 36, seg(t, s + .3, s + .7)); }
     if (t > c) cartao(t > al ? "Vai para a conta? NÚMERO. Só um nome? TEXTO." : "Vai para a conta? NÚMERO.", 640, 505, 960, "#0f766e", seg(t, c, c + .4)); } },
 { chip: "LISTA E TABELA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "coleções"), "ding"], [em(F6, "lista"), "pop"], [em(F6, "chamada"), "pop"], [em(F6, "tabela"), "pop"], [em(F6, "linha"), "pop"], [em(F6, "coluna"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const co = em(F6, "coleções"), l = em(F6, "lista"), tb = em(F6, "tabela"), li = em(F6, "linha"), cu = em(F6, "coluna");
     palavra("COLEÇÕES", 640, 95, seg(t, co, co + .4), 56);
     if (t > l) { comando("📝 LISTA", 260, 180, seg(t, l, l + .4), "#ca8a04", 220); ["1. Ana", "2. Davi", "3. Luana", "4. Pedro"].forEach((n, i) => comando(n, 260, 250 + i * 62, seg(t, l + .3 + i * .2, l + .6 + i * .2), "#334155", 200)); }
     if (t > tb) { comando("📊 TABELA", 820, 180, seg(t, tb, tb + .4), "#2563eb", 240); tabela(820, 230, 560, CAB, LIN, ["#2563eb", "#16a34a", "#7c3aed"], seg(t, tb + .2, tb + .6)); }
     if (t > li) { g.strokeStyle = "#facc15"; g.lineWidth = 5; g.strokeRect(540, 324, 560, 46); rotulo("LINHA = 1 JOGADOR", 820, 450, "#fde68a", seg(t, li, li + .4)); }
     if (t > cu) { g.strokeStyle = "#f472b6"; g.lineWidth = 5; g.strokeRect(727, 228, 186, 188); rotulo("COLUNA = 1 INFORMAÇÃO", 820, 500, "#f9a8d4", seg(t, cu, cu + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "nome"), "pop"], [em(F7, "pontos"), "pop"], [em(F7, "telefone"), "pop"], [em(F7, "soma"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const n = em(F7, "nome"), p = em(F7, "pontos"), te = em(F7, "telefone"), s = em(F7, "soma"), m = em(F7, "Missão");
     tabela(700, 140, 660, ["NOME 🔤", "PONTOS 🔢", "TELEFONE 🔤"], LIN.concat(t > s ? [["TOTAL", "35", ""]] : []), [t > n ? "#2563eb" : "#475569", t > p ? "#16a34a" : "#475569", t > te ? "#2563eb" : "#475569"], 1, t > s ? 1 : -1);
     luana({ x: 170, y: 610, s: .95, braco: t > s ? -2.4 : -.6, bracoE: t > s ? 2.4 : .3, olhar: 1, boca: t > s ? "riso" : "", pisca: pisca(t) });
     if (t > s) visto(1000, 380, 50, seg(t, s, s + .4));
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "loja"), "pop"], [em(F8, "campeonato"), "pop"], [em(F8, "playlist"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["loja", "🛍️", "CADASTRO DA LOJA", "#ea580c"], ["campeonato", "🏆", "TABELA DO CAMPEONATO", "#16a34a"], ["playlist", "🎵", "PLAYLIST = LISTA", "#7c3aed"]].forEach(([w, ic, n, c], i) => { const t0 = em(F8, w), x = 260 + i * 380; tipo(x, 290, ic, "", c, seg(t, t0, t0 + .4)); if (t > t0 + .1) comando(n, x, 450, seg(t, t0 + .1, t0 + .5), c, 340); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 5", [LUANA, DAVI]); } }
];

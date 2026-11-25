/* ================= 7º ano · 2027 · 1º bimestre · Missão 3 · Registros: a ficha de cada coisa ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
// ficha (registro) com campos nome → valor
function ficha(x, y, titulo, campos, k, cor, hl, s) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); const h = 70 + campos.length * 54; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fffbeb"; rr(-150, -h / 2, 300, h, 16); g.fill(); g.fillStyle = cor || "#ca8a04"; rr(-150, -h / 2, 300, 52, 16); g.fill(); g.fillRect(-150, -h / 2 + 30, 300, 22);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(titulo, 0, -h / 2 + 35);
  campos.forEach(([c, v], i) => { const yy = -h / 2 + 88 + i * 54; if (hl === i) { g.fillStyle = "#fde68a"; rr(-138, yy - 30, 276, 46, 10); g.fill(); } g.fillStyle = "#64748b"; g.font = `700 19px ${F}`; g.textAlign = "left"; g.fillText(c, -126, yy); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "right"; g.fillText(v, 126, yy); });
  g.restore(); }
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }

const F0 = "Registros: a ficha de cada personagem!",
  F1 = "O Caio está criando um jogo e guardou tudo em listas separadas: uma de nomes, outra de vidas e outra de forças. Quando apagou um personagem de uma lista só, tudo se misturou: o dragão ficou com a força da fada!",
  F2 = "Uma lista guarda vários itens parecidos, como os nomes da turma. Mas, para guardar informações diferentes sobre uma coisa só, usamos um registro: uma ficha.",
  F3 = "A ficha tem campos. Cada campo tem um nome e um valor: o campo nome vale Dragão, o campo vida vale cem, e o campo força vale oitenta.",
  F4 = "No editor de blocos, o bloco nova ficha cria uma ficha vazia. Depois, o bloco na ficha, o campo vida vale cem, escreve o valor. E o bloco campo vida da ficha lê o que está guardado.",
  F5 = "Na lista, a gente acha o item pela posição: primeiro, segundo, terceiro. Na ficha, a gente acha pelo nome do campo. E uma lista de fichas é exatamente uma tabela: cada ficha é uma linha, e cada campo, uma coluna.",
  F6 = "O Caio fez uma ficha para cada personagem e juntou todas numa lista. Agora, se um personagem sai, sai a ficha inteira, e nada se mistura. Missão cumprida!",
  F7 = "Onde eu uso isso? No contato do celular, com nome, telefone e aniversário. Na ficha dos personagens dos jogos. E na ficha de matrícula da secretaria da escola.",
  F8 = "Agora é com vocês: abram a Missão 3 no portal!";
const DRAGAO = [["nome", "Dragão"], ["vida", "100"], ["força", "80"]], FADA = [["nome", "Fada"], ["vida", "60"], ["força", "20"]], ROBO = [["nome", "Robô"], ["vida", "90"], ["força", "50"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "pop"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#713f12"); [[DRAGAO, "🐉", -1], [FADA, "🧚", 0], [ROBO, "🤖", 1]].forEach(([c, e, i], j) => ficha(640 + i * 260, 250 + Math.sin(t * 2 + j) * 10, e + " " + c[0][1], c, seg(t, .3 + j * .25, .7 + j * .25), "#ca8a04", -1, .7));
     abertura(t, "7º ANO · MISSÃO 3", "Registros", "A FICHA DE CADA", "PERSONAGEM!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "nomes"), "pop"], [em(F1, "vidas"), "pop"], [em(F1, "forças"), "pop"], [em(F1, "apagou"), "alerta"], [em(F1, "dragão"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const n = em(F1, "nomes"), v = em(F1, "vidas"), f = em(F1, "forças"), a = em(F1, "apagou"), d = em(F1, "dragão");
     const apagou = t > a; const L = [["NOMES", ["Dragão", "Fada", "Robô"], n], ["VIDAS", ["100", "60", "90"], v], ["FORÇAS", apagou ? ["20", "50"] : ["80", "20", "50"], f]];
     L.forEach(([tit, it, t0], i) => { const x = 500 + i * 230; comando(tit, x, 110, seg(t, t0, t0 + .4), ["#2563eb", "#16a34a", "#dc2626"][i], 190); it.forEach((s, j) => caixa(x, 190 + j * 76, s, "#fff", seg(t, t0 + .1 + j * .1, t0 + .4 + j * .1), 150)); });
     if (apagou && t < d) xVermelho(960, 340, 30, seg(t, a, a + .3));
     if (t > d) { g.strokeStyle = "#facc15"; g.lineWidth = 5; rr(415, 158, 630, 64, 12); g.stroke(); rotulo("DRAGÃO COM A FORÇA DA FADA!", 730, 440, "#fca5a5", seg(t, d, d + .4)); }
     caio({ x: 170, y: 610, s: .95, braco: t > d ? -2.5 : -.6, bracoE: t > d ? 2.5 : .3, olhar: 1, boca: t > a ? "o" : "", pisca: pisca(t) }); } },
 { chip: "LISTA × REGISTRO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "pop"], [em(F2, "turma"), "pop"], [em(F2, "registro"), "ding"], [em(F2, "ficha"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const l = em(F2, "lista"), r = em(F2, "registro");
     comando("📝 LISTA", 330, 110, seg(t, l, l + .4), "#2563eb", 220); ["Ana", "Bruno", "Caio", "Duda"].forEach((s, j) => caixa(330, 200 + j * 72, s, "#fff", seg(t, l + .3 + j * .15, l + .6 + j * .15), 180));
     rotulo("ITENS PARECIDOS", 330, 500, "#bfdbfe", seg(t, l + 1, l + 1.4));
     if (t > r) { comando("🗂️ REGISTRO = FICHA", 900, 110, seg(t, r, r + .4), "#ca8a04", 360); ficha(900, 300, "🐉 Dragão", DRAGAO, seg(t, r + .3, r + .7)); rotulo("INFORMAÇÕES DIFERENTES DE UMA COISA SÓ", 900, 500, "#fde68a", seg(t, r + .8, r + 1.2)); } } },
 { chip: "CAMPO = NOME + VALOR", fala: F3, legenda: "A ficha tem campos. Cada campo tem um nome e um valor: o campo nome vale Dragão, o campo vida vale 100, e o campo força vale 80.",
   sfx: [[.1, "whoosh"], [em(F3, "campos"), "ding"], [em(F3, "Dragão"), "pop"], [em(F3, "cem"), "pop"], [em(F3, "oitenta"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const c = em(F3, "campos"), dr = em(F3, "Dragão"), ce = em(F3, "cem"), oi = em(F3, "oitenta");
     const hl = t > oi ? 2 : t > ce ? 1 : t > dr ? 0 : -1; ficha(640, 300, "🐉 Dragão", DRAGAO, 1, "#ca8a04", hl, 1.35);
     if (t > c) { seta(330, 250, 440, 300, seg(t, c, c + .3), "#bfdbfe"); comando("NOME DO CAMPO", 260, 220, seg(t, c, c + .4), "#2563eb", 260); seta(960, 250, 850, 300, seg(t, c + .4, c + .7), "#fde68a"); comando("VALOR", 1020, 220, seg(t, c + .4, c + .8), "#ca8a04", 160); } } },
 { chip: "NO EDITOR DE BLOCOS", fala: F4, legenda: "No editor de blocos, o bloco “nova ficha” cria uma ficha vazia. Depois, o bloco “na ficha, o campo vida vale 100” escreve o valor. E o bloco “campo vida da ficha” lê o que está guardado.",
   sfx: [[.1, "whoosh"], [em(F4, "nova"), "click"], [em(F4, "vazia"), "pop"], [em(F4, "na"), "click"], [em(F4, "escreve"), "ding"], [em(F4, "lê"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const nv = em(F4, "nova"), na = em(F4, "na"), es = em(F4, "escreve"), le = em(F4, "lê");
     bloco(110, 150, 300, "🗂️ nova ficha", "#ca8a04", seg(t, nv, nv + .4), t > nv && t < na);
     bloco(110, 250, 460, "na ficha • campo vida • vale 100", "#2563eb", seg(t, na, na + .4), t > na && t < le);
     bloco(110, 350, 380, "campo vida • da ficha", "#16a34a", seg(t, le, le + .4), t > le);
     ficha(930, 280, "🗂️ ficha", t > es ? [["vida", "100"]] : [["vida", ""]], seg(t, nv + .3, nv + .7), "#ca8a04", t > es ? 0 : -1, 1.2);
     if (t > es && t < le) seta(600, 275, 790, 280, seg(t, es, es + .3), "#fde68a");
     if (t > le) { seta(790, 300, 520, 375, seg(t, le, le + .3), "#86efac"); comando("LÊ: 100", 930, 450, seg(t, le + .3, le + .7), "#16a34a", 200); } } },
 { chip: "LISTA DE FICHAS = TABELA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "posição"), "pop"], [em(F5, "campo"), "pop"], [em(F5, "tabela"), "ding"], [em(F5, "linha"), "pop"], [em(F5, "coluna"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const p = em(F5, "posição"), c = em(F5, "campo"), tb = em(F5, "tabela"), li = em(F5, "linha"), co = em(F5, "coluna");
     if (t < tb) { comando("LISTA: PELA POSIÇÃO", 330, 120, seg(t, p, p + .4), "#2563eb", 360); ["Ana", "Bruno", "Caio"].forEach((s, j) => { caixa(330, 210 + j * 80, s, "#fff", seg(t, p + .2 + j * .2, p + .5 + j * .2), 180); comando("#" + (j + 1), 470, 210 + j * 80, seg(t, p + .3 + j * .2, p + .6 + j * .2), "#475569", 70); });
       if (t > c) { comando("FICHA: PELO NOME DO CAMPO", 900, 120, seg(t, c, c + .4), "#ca8a04", 440); ficha(900, 290, "🐉 Dragão", DRAGAO, seg(t, c + .2, c + .6), "#ca8a04", 1); } }
     if (t > tb) { palavra("LISTA DE FICHAS = TABELA", 600, 100, seg(t, tb, tb + .4), 46); tabela(640, 170, 660, ["NOME", "VIDA", "FORÇA"], [["Dragão", "100", "80"], ["Fada", "60", "20"], ["Robô", "90", "50"]], ["#ca8a04", "#16a34a", "#dc2626"], seg(t, tb + .2, tb + .6), -1);
       if (t > li) { g.strokeStyle = "#facc15"; g.lineWidth = 5; g.strokeRect(308, 214, 664, 46); rotulo("FICHA = LINHA", 640, 440, "#fde68a", seg(t, li, li + .4)); }
       if (t > co) { g.strokeStyle = "#f472b6"; g.lineWidth = 5; g.strokeRect(528, 168, 224, 186); rotulo("CAMPO = COLUNA", 640, 490, "#f9a8d4", seg(t, co, co + .4)); } } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "ficha"), "pop"], [em(F6, "lista"), "ding"], [em(F6, "sai"), "alerta"], [em(F6, "mistura"), "ding"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const fi = em(F6, "ficha"), li = em(F6, "lista"), sa = em(F6, "sai"), mi = em(F6, "mistura"), m = em(F6, "Missão");
     const tirou = t > sa + .6; const fs = [["🐉 Dragão", DRAGAO], ["🧚 Fada", FADA], ["🤖 Robô", ROBO]];
     if (t > li) comando("📝 LISTA DE PERSONAGENS", 700, 100, seg(t, li, li + .4), "#2563eb", 440);
     fs.forEach(([n, c], i) => { if (tirou && i === 1) return; const x = tirou ? 500 + (i === 2 ? 1 : 0) * 340 : 400 + i * 300; ficha(x, 300, n, c, seg(t, fi + i * .3, fi + .4 + i * .3), "#ca8a04", -1, .85); });
     if (t > sa && !tirou) { xVermelho(700, 300, 50, seg(t, sa, sa + .3)); }
     if (t > mi) visto(1050, 300, 34, seg(t, mi, mi + .4));
     caio({ x: 150, y: 610, s: .85, braco: t > mi ? -2.4 : -.6, bracoE: t > mi ? 2.4 : .3, olhar: 1, boca: t > mi ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "contato"), "pop"], [em(F7, "personagens"), "pop"], [em(F7, "matrícula"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["contato", "📱 Contato", [["nome", "Mãe"], ["tel.", "9 9..."], ["aniv.", "10/05"]]], ["personagens", "🎮 Personagem", [["vida", "100"], ["força", "80"], ["vel.", "7"]]], ["matrícula", "🏫 Matrícula", [["aluno", "Ana"], ["turma", "7º A"], ["ano", "2027"]]]].forEach(([w, n, c], i) => { const t0 = em(F7, w); ficha(260 + i * 380, 320, n, c, seg(t, t0, t0 + .4), ["#16a34a", "#7c3aed", "#ea580c"][i], -1, .85); }); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 3", [CAIO, MENINA7]); } }
];

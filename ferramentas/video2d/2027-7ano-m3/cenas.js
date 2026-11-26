/* ================= 6º ano · 2027 · 1º bimestre · Missão 6 · Boa convivência na rede (v2, padrão completo: o grupo da turma pegou fogo) ================= */
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
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
function bloco(x, y, w, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; } g.fillStyle = cor; g.beginPath(); g.moveTo(0, 0); g.lineTo(24, 0); g.lineTo(30, 8); g.lineTo(50, 8); g.lineTo(56, 0); g.lineTo(w, 0); g.lineTo(w, 48); g.lineTo(56, 48); g.lineTo(50, 56); g.lineTo(30, 56); g.lineTo(24, 48); g.lineTo(0, 48); g.closePath(); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 32); g.restore(); }
// ficha (registro) com campos nome → valor
function ficha(x, y, titulo, campos, k, cor, hl, s) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); const h = 70 + campos.length * 54; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fffbeb"; rr(-150, -h / 2, 300, h, 16); g.fill(); g.fillStyle = cor || "#ca8a04"; rr(-150, -h / 2, 300, 52, 16); g.fill(); g.fillRect(-150, -h / 2 + 30, 300, 22);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(titulo, 0, -h / 2 + 35);
  campos.forEach(([c, v], i) => { const yy = -h / 2 + 88 + i * 54; if (hl === i) { g.fillStyle = "#fde68a"; rr(-138, yy - 30, 276, 46, 10); g.fill(); } g.fillStyle = "#64748b"; g.font = `700 19px ${F}`; g.textAlign = "left"; g.fillText(c, -126, yy); g.fillStyle = NAVY; g.font = `800 23px ${F}`; g.textAlign = "right"; g.fillText(v, 126, yy); });
  g.restore(); }
// "repita" em forma de C (boca do bloco)
function tabela(x, y, w, cab, lin, cores, k, hl, alt) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = alt || 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  cab.forEach((c, j) => { g.fillStyle = cores[j] || "#334155"; rr(j * cw + 2, 0, cw - 4, lh - 4, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, lh / 2 + 5); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : (i % 2 ? "#e2e8f0" : "#f8fafc"); rr(j * cw + 2, (i + 1) * lh, cw - 4, lh - 4, 6); g.fill(); g.fillStyle = c && c[0] === "!" ? "#dc2626" : NAVY; g.font = `700 19px ${F}`; g.textAlign = "center"; g.fillText(c && c[0] === "!" ? c.slice(1) : c, j * cw + cw / 2, (i + 1) * lh + lh / 2 + 5); }));
  g.restore(); }
function caixa(x, y, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 140; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -30, w, 60, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
function bocaC(x, y, w, h, txt, cor, k, brilho) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 24; }
  g.fillStyle = cor; rr(0, 0, w, 52, 10); g.fill(); rr(0, 0, 34, h, 8); g.fill(); rr(0, h - 30, w * .55, 30, 8); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 16, 34); g.restore(); }
// telinha de resultado: linhas de texto; hl = linha marcada de vermelho; ok = linhas verdes
function telinha(x, y, w, tit, linhas, k, hl, ok) { if (k <= 0) return; const z = back(cl(k)), h = 66 + linhas.length * 44; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "#0f172a"; rr(-w / 2, 0, w, h, 14); g.fill(); g.fillStyle = "#334155"; rr(-w / 2, 0, w, 42, 14); g.fill();
  g.fillStyle = "#e2e8f0"; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 28);
  linhas.forEach((s, i) => { const yy = 56 + i * 44; if (hl === i) { g.fillStyle = "#7f1d1d"; rr(-w / 2 + 10, yy - 4, w - 20, 38, 8); g.fill(); }
    g.fillStyle = hl === i ? "#fecaca" : ok ? "#86efac" : "#f8fafc"; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + ".  " + s, -w / 2 + 24, yy + 23); });
  g.restore(); }
/* ===== peças do "Show do Meio" (8º M4 v2) ===== */
/* ===== peças do jogo do Caio (7º M3 v2) ===== */
const PERS = [["Dragão", "🐉", "100", "80", "#dc2626"], ["Fada", "🧚", "60", "30", "#db2777"], ["Cavaleiro", "🛡️", "80", "70", "#2563eb"]];
// coluna-lista: itens = [[texto, deslocamento (em casas), alfa, cor]]
function listaV(x, y, tit, itens, cor, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = cor; rr(-95, 0, 190, 48, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, 32);
  for (let i = 0; i < 3; i++) { g.fillStyle = "rgba(255,255,255,.25)"; rr(-88, 60 + i * 62, 176, 54, 10); g.fill(); g.fillStyle = "rgba(255,255,255,.75)"; g.font = `700 13px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + "º", -82, 76 + i * 62); }
  itens.forEach(([s, d, a, c], i) => { if (a <= 0) return; const yy = 60 + (i + (d || 0)) * 62; g.globalAlpha = a; g.fillStyle = hl === i ? "#fde68a" : "#fff"; rr(-80, yy + 4, 160, 46, 10); g.fill(); g.fillStyle = c || NAVY; g.font = `800 21px ${F}`; g.textAlign = "center"; g.fillText(s, 0, yy + 35); g.globalAlpha = 1; });
  g.restore(); }
function mundo(t) { const gr = g.createLinearGradient(0, -200, 0, 800); gr.addColorStop(0, "#38bdf8"); gr.addColorStop(1, "#bae6fd"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1900);
  g.fillStyle = "#4ade80"; for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(-200 + i * 220, 600, 170, Math.PI, 0); g.fill(); } g.fillStyle = "#16a34a"; g.fillRect(-800, 600, 2880, 700);
  g.fillStyle = "#a16207"; g.fillRect(-800, 600, 2880, 14); for (let i = 0; i < 4; i++) { const x = ((i * 330 + t * 30) % 1600) - 200; g.fillStyle = "#fff"; g.beginPath(); g.arc(x, 250, 30, 0, 7); g.arc(x + 36, 240, 36, 0, 7); g.arc(x + 72, 252, 26, 0, 7); g.fill(); } }
function quartoCaio(t) { g.fillStyle = "#e0f2fe"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#7dd3fc"; g.fillRect(-800, 560, 2880, 700); g.fillStyle = "#b07a3c"; g.fillRect(120, 470, 1040, 26); g.fillStyle = "#8a5a28"; g.fillRect(150, 496, 22, 200); g.fillRect(1110, 496, 22, 200); }
function heroi(x, y, p, s, k) { if (k <= 0) return; const z = back(cl(k)) * (s || 1); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, 48, 0, 7); g.fill(); g.strokeStyle = p[4]; g.lineWidth = 6; g.stroke(); g.restore(); emo(p[1], x, y + 22 * z, 60 * z); }
const FICHA = p => [["nome", p[0]], ["vida", p[2]], ["força", p[3]]];
const F0 = "Registros: a ficha de cada personagem!",
  F1 = "O Caio está criando um jogo de aventura. Ele guardou tudo em três listas separadas: uma de nomes, uma de vidas e uma de forças. Mas, quando apagou o dragão só da lista de nomes, tudo se misturou: a fada ficou com a vida e a força do dragão!",
  F2 = "Por que isso aconteceu? Nas listas separadas, o que liga o nome à vida e à força é só a posição. Se uma lista anda e as outras não, cada nome fica na frente do número errado.",
  F3 = "Uma lista guarda vários itens parecidos, como os nomes da turma. Mas, para guardar informações diferentes sobre uma coisa só, usamos um registro. Aqui, a gente chama o registro de ficha.",
  F4 = "A ficha tem campos. Cada campo tem um nome e um valor: o campo nome vale Dragão, o campo vida vale cem, e o campo força vale oitenta. O valor pode ser um texto ou um número.",
  F5 = "No editor de blocos, o bloco nova ficha cria uma ficha vazia, guardada numa variável, como dragão. Depois, o bloco na ficha dragão, o campo vida vale cem, escreve o valor no campo.",
  F6 = "E para ler? O bloco campo vida da ficha dragão busca o que está guardado. Mande mostrar na tela, e aparece: cem.",
  F7 = "Na lista, a gente acha o item pela posição: primeiro, segundo, terceiro. Na ficha, a gente acha pelo nome do campo. Não importa a ordem: vida é sempre vida.",
  F8 = "E dá para juntar lista e ficha: uma lista de fichas é exatamente uma tabela. Cada ficha é uma linha, e cada campo, uma coluna. E o conjunto de todas as fichas se chama cadastro.",
  F9 = "O Caio fez uma ficha para cada personagem e juntou todas numa lista. Agora, quando o dragão sai do jogo, sai a ficha inteira, e a fada continua com a força dela. Nada se mistura. Missão cumprida!",
  F10 = "Onde eu uso isso? No contato do celular, com nome, telefone e aniversário. Na ficha dos personagens dos jogos. E na ficha de matrícula da secretaria da escola: o conjunto delas é o cadastro.",
  F11 = "Agora é com vocês: abram a Missão 3 no portal e montem as suas fichas!";
const L73 = { 1: F1.replace("três listas", "3 listas"), 4: "A ficha tem campos. Cada campo tem um nome e um valor: o campo nome vale Dragão, o campo vida vale 100, e o campo força vale 80. O valor pode ser um texto ou um número.",
  5: "No editor de blocos, o bloco “nova ficha” cria uma ficha vazia, guardada numa variável, como dragão. Depois, o bloco “na ficha dragão, o campo vida vale 100” escreve o valor no campo.",
  6: "E para ler? O bloco “campo vida da ficha dragão” busca o que está guardado. Mande mostrar na tela, e aparece: 100.",
  7: "Na lista, a gente acha o item pela posição: 1º, 2º, 3º. Na ficha, a gente acha pelo nome do campo. Não importa a ordem: vida é sempre vida." };
const COR_L = ["#7c3aed", "#dc2626", "#ea580c"];
function tresListas(t, x0, sai, k) { // sai = 0..1: o dragão sai só da lista de nomes
  listaV(x0, 150, "nomes", [[PERS[0][0], 0, 1 - sai], [PERS[1][0], -sai, 1], [PERS[2][0], -sai, 1]], COR_L[0], k); listaV(x0 + 230, 150, "vidas", PERS.map(p => [p[2], 0, 1]), COR_L[1], k); listaV(x0 + 460, 150, "forças", PERS.map(p => [p[3], 0, 1]), COR_L[2], k); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "pop"], [.8, "pop"], [1.2, "pop"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 320, 1]]); mundo(t); for (let i = 0; i < 14; i++) estrela(80 + (i * 97) % 1120, 150 + (i * 53) % 130 + Math.sin(t * 4 + i) * 6, 10 + (i % 3) * 4, "#fde047"); PERS.forEach((p, i) => heroi(340 + i * 300, 300 + Math.sin(t * 3 + i) * 12, p, 1.2, seg(t, .3 + i * .4, .7 + i * .4))); caio({ x: 1120, y: 640, s: .8, olhar: -1, braco: -2.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore();
     abertura(t, "7º ANO · MISSÃO 3", "Registros: a ficha de cada coisa", "A FICHA DE CADA", "PERSONAGEM!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L73[1], sfx: [[.1, "whoosh"], [em(F1, "nomes"), "pop"], [em(F1, "vidas"), "pop"], [em(F1, "forças"), "pop"], [em(F1, "apagou"), "sumiu"], [em(F1, "misturou"), "alerta"]],
   draw(t, D) { const jo = em(F1, "jogo"), no = em(F1, "nomes"), vi = em(F1, "vidas"), fo = em(F1, "forças"), ap = em(F1, "apagou"), mi = em(F1, "misturou"), fd = em(F1, "fada"); const sai = seg(t, ap + .3, ap + 1.3);
     g.save(); camera(t, [[0, 640, 360, 1], [no, 620, 330, 1.05], [mi, 560, 320, 1.12], [fd + 1, 640, 360, 1]]); quartoCaio(t);
     if (t < no) PERS.forEach((p, i) => heroi(420 + i * 220, 300, p, 1, seg(t, jo + i * .2, jo + .4 + i * .2)));
     else { listaV(330, 120, "nomes", [[PERS[0][0], 0, 1 - sai], [PERS[1][0], -sai, 1, t > mi ? "#dc2626" : null], [PERS[2][0], -sai, 1]], COR_L[0], seg(t, no, no + .4));
       listaV(560, 120, "vidas", PERS.map(p => [p[2], 0, 1]), COR_L[1], seg(t, vi, vi + .4), t > mi ? 0 : null); listaV(790, 120, "forças", PERS.map(p => [p[3], 0, 1]), COR_L[2], seg(t, fo, fo + .4), t > mi ? 0 : null); }
     caio({ x: 1170, y: 600, s: .85, olhar: -1, braco: t > mi ? -2.5 : -1, bracoE: t > mi ? 2.5 : .3, boca: t > mi ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > jo && t < no) balao("Meu jogo vai ficar incrível! 🎮", 880, 200, seg(t, jo, jo + .3)); if (t > ap && t < mi) etiqueta("apagou só aqui!", 160, 470, 300, 330, seg(t, ap, ap + .4));
     if (t > fd) { cartaoC("🧚 Fada: vida 100, força 80 ❌ (eram do dragão!)", 560, 520, 640, "#fecaca", seg(t, fd, fd + .4)); emo("😱", 1170, 400, 54); } } },
 { chip: "POR QUE MISTUROU?", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "posição"), "ding"], [em(F2, "anda"), "desce"], [em(F2, "errado"), "alerta"]],
   draw(t, D) { const po = em(F2, "posição"), an = em(F2, "anda"), er = em(F2, "errado"); fundoEscuro(t, "#1e3a8a"); const sai = seg(t, an, an + 1);
     g.save(); camera(t, [[0, 640, 360, 1], [po, 620, 340, 1.06], [er, 640, 360, 1]]); tresListas(t, 410, sai, 1);
     if (t > po && t < an) [0, 1, 2].forEach(i => { g.strokeStyle = "#fde047"; g.lineWidth = 4; g.setLineDash([8, 8]); g.beginPath(); g.moveTo(330, 237 + i * 62); g.lineTo(950, 237 + i * 62); g.stroke(); g.setLineDash([]); });
     if (t > er) [0, 1].forEach(i => xVermelho(1010, 237 + i * 62, 22, 1)); g.restore();
     palavra("SÓ A POSIÇÃO LIGA AS LISTAS", 560, 90, seg(t, po, po + .4), 46); if (t > an) etiqueta("esta lista andou… as outras não!", 200, 520, 380, 360, seg(t, an, an + .4)); } },
 { chip: "LISTA × REGISTRO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "lista"), "pop"], [em(F3, "registro"), "ding"], [em(F3, "ficha"), "pop"]],
   draw(t, D) { const li = em(F3, "lista"), re = em(F3, "registro"), fi = em(F3, "ficha"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 420, 340, 1.08], [re, 740, 340, 1.08], [fi, 640, 360, 1]]);
     listaV(320, 150, "nomes da turma", [["Ana", 0, 1], ["Bia", 0, 1], ["Caio", 0, 1]], "#334155", seg(t, li, li + .4)); if (t > li) rotulo("vários itens PARECIDOS", 320, 470, "#bbf7d0", seg(t, li + .3, li + .7));
     ficha(860, 300, "🐉 Ficha do dragão", FICHA(PERS[0]), seg(t, re, re + .4), "#dc2626"); if (t > re) rotulo("informações DIFERENTES de uma coisa só", 860, 470, "#bbf7d0", seg(t, re + .3, re + .7)); g.restore();
     palavra(t > fi ? "REGISTRO = FICHA" : "LISTA  ×  REGISTRO", 560, 90, seg(t, 0, .4), 54); caio({ x: 1170, y: 680, s: .7, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CAMPO E VALOR", fala: F4, legenda: L73[4], sfx: [[.1, "whoosh"], [em(F4, "campos"), "ding"], [em(F4, "Dragão"), "pop"], [em(F4, "vida", 1), "pop"], [em(F4, "força"), "pop"], [em(F4, "texto"), "ding"]],
   draw(t, D) { const ca = em(F4, "campos"), dr = em(F4, "Dragão"), vi = em(F4, "vida", 1), fo = em(F4, "força"), tx = em(F4, "texto"); fundoEscuro(t, "#7c2d12"); const hl = t > fo ? 2 : t > vi ? 1 : t > dr ? 0 : -1;
     g.save(); camera(t, [[0, 640, 360, 1], [dr, 600, 330, 1.1], [tx, 640, 360, 1]]); ficha(560, 300, "🐉 Ficha do dragão", FICHA(PERS[0]), 1, "#dc2626", hl, 1.2); g.restore();
     palavra("CAMPOS", 560, 90, seg(t, ca, ca + .4), 60);
     if (t > dr) { etiqueta("NOME do campo", 200, 200, 420, 300, seg(t, dr, dr + .4)); etiqueta("VALOR", 960, 200, 700, 300, seg(t, dr + .3, dr + .7)); }
     if (t > tx) cartaoC("valor = texto (Dragão) ou número (100)", 560, 530, 560, "#fff", seg(t, tx, tx + .4)); robozinho(1170, 600, .9, t, true); } },
 { chip: "BLOCOS: CRIAR E ESCREVER", fala: F5, legenda: L73[5], sfx: [[.1, "whoosh"], [em(F5, "nova"), "pop"], [em(F5, "variável"), "pop"], [em(F5, "Depois"), "pop"], [em(F5, "escreve"), "ding"]],
   draw(t, D) { const nv = em(F5, "nova"), va = em(F5, "variável"), dp = em(F5, "Depois"), es = em(F5, "escreve"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 520, 340, 1.08], [es, 640, 360, 1]]);
     bloco(100, 170, 300, "🗂️ nova ficha", "#ca8a04", seg(t, nv, nv + .4), t > nv && t < va); if (t > va) bloco(100, 240, 360, "guardar em: dragão", "#ea580c", seg(t, va, va + .4));
     bloco(100, 310, 560, "na ficha dragão, o campo vida vale 100", "#0891b2", seg(t, dp, dp + .4), t > es && t < es + 1.5);
     ficha(960, 320, "🐉 dragão", [["vida", t > es + .4 ? "100" : "—"]], seg(t, va, va + .4), "#dc2626", t > es + .4 ? 0 : -1, 1.1); g.restore();
     palavra("CRIAR E ESCREVER", 560, 90, seg(t, 0, .4), 54); if (t > nv && t < dp) etiqueta("cria uma ficha VAZIA", 560, 470, 300, 230, seg(t, nv + .2, nv + .6)); if (t > es) etiqueta("escreve o valor no campo", 760, 520, 940, 400, seg(t, es, es + .4)); } },
 { chip: "BLOCO: LER", fala: F6, legenda: L73[6], sfx: [[.1, "whoosh"], [em(F6, "busca"), "voa"], [em(F6, "mostrar"), "tec"], [em(F6, "cem"), "ding"]],
   draw(t, D) { const bu = em(F6, "busca"), mo = em(F6, "mostrar"), ce = em(F6, "cem"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 640, 360, 1], [bu, 600, 340, 1.08], [ce, 640, 360, 1]]); ficha(960, 290, "🐉 dragão", FICHA(PERS[0]), 1, "#dc2626", t > bu ? 1 : -1);
     bloco(100, 170, 480, "campo vida da ficha dragão", "#16a34a", seg(t, 0, .4), t > bu && t < mo); if (t > mo) bloco(100, 250, 300, "mostrar na tela", "#7c3aed", seg(t, mo, mo + .4));
     if (t > bu && t < ce) { const k = seg(t, bu + .3, bu + 1.3), x = 900 - 520 * k, y = 300 - Math.sin(k * Math.PI) * 90; caixa(x, y, "100", "#fde68a", 1, 90); } g.restore();
     telinha(330, 380, 320, "tela", [t > ce ? "100" : "…"], seg(t, mo, mo + .4), -1, t > ce); palavra("LER UM CAMPO", 560, 90, seg(t, 0, .4), 54); robozinho(1170, 600, .9, t, true); } },
 { chip: "POSIÇÃO × NOME DO CAMPO", fala: F7, legenda: L73[7], sfx: [[.1, "whoosh"], [em(F7, "primeiro"), "pop"], [em(F7, "segundo"), "pop"], [em(F7, "terceiro"), "pop"], [em(F7, "nome"), "ding"], [em(F7, "ordem"), "pop"]],
   draw(t, D) { const p1 = em(F7, "primeiro"), p2 = em(F7, "segundo"), p3 = em(F7, "terceiro"), no = em(F7, "nome"), or = em(F7, "ordem"); fundoEscuro(t, "#0e7490"); const hl = t > p3 ? 2 : t > p2 ? 1 : t > p1 ? 0 : -1;
     g.save(); camera(t, [[0, 420, 330, 1.08], [no, 800, 330, 1.08], [or + 1, 640, 360, 1]]); listaV(330, 140, "lista", PERS.map(p => [p[0], 0, 1]), "#334155", 1, t < no ? hl : -1);
     const fic = t > or ? [["força", "80"], ["nome", "Dragão"], ["vida", "100"]] : FICHA(PERS[0]); ficha(860, 300, "🐉 ficha", fic, 1, "#dc2626", t > no ? (t > or ? 2 : 1) : -1); g.restore();
     rotulo("acha pela POSIÇÃO: 1º, 2º, 3º", 330, 480, "#fde68a", seg(t, p1, p1 + .4)); if (t > no) rotulo("acha pelo NOME do campo", 860, 480, "#fde68a", seg(t, no, no + .4));
     if (t > or) palavra("VIDA É SEMPRE VIDA!", 560, 90, seg(t, or, or + .4), 54); } },
 { chip: "TABELA E CADASTRO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "tabela"), "ding"], [em(F8, "linha"), "pop"], [em(F8, "coluna"), "pop"], [em(F8, "cadastro"), "ding"]],
   draw(t, D) { const ta = em(F8, "tabela"), li = em(F8, "linha"), co = em(F8, "coluna"), ca = em(F8, "cadastro"); fundoEscuro(t, "#14532d"); const vira = seg(t, ta, ta + 1);
     g.save(); camera(t, [[0, 640, 360, 1], [li, 600, 340, 1.06], [ca, 640, 360, 1]]);
     if (vira < 1) PERS.forEach((p, i) => ficha(260 + i * 360 + (640 - 260 - i * 360) * vira, 330, p[1] + " " + p[0], FICHA(p), 1 - vira, p[4], -1, .8));
     else tabela(600, 170, 720, ["nome", "vida", "força"], PERS.map(p => [p[0], p[2], p[3]]), COR_L, 1, t > co ? 1 : -1, 58);
     if (t > li && t < co) { g.strokeStyle = "#fde047"; g.lineWidth = 6; rr(236, 228, 728, 58, 10); g.stroke(); } g.restore();
     palavra(t > ca ? "CONJUNTO DE FICHAS = CADASTRO" : "LISTA DE FICHAS = TABELA", 560, 90, seg(t, ta, ta + .4), 44);
     if (t > li) etiqueta("cada FICHA = uma linha", 1080, 470, 940, 270, seg(t, li, li + .4)); if (t > co) etiqueta("cada CAMPO = uma coluna", 320, 520, 600, 420, seg(t, co, co + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "juntou"), "pop"], [em(F9, "sai"), "sumiu"], [em(F9, "dela"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const ju = em(F9, "juntou"), sa = em(F9, "sai"), de = em(F9, "dela"), mc = em(F9, "Missão"); const k = seg(t, sa + .2, sa + 1.2);
     g.save(); camera(t, [[0, 640, 380, 1.08], [mc, 640, 400, 1]]); quartoCaio(t); const lin = PERS.map(p => [p[0], p[2], p[3]]);
     if (k <= 0) tabela(560, 230, 640, ["nome", "vida", "força"], lin, COR_L, seg(t, ju, ju + .4), -1, 54);
     else { g.save(); g.globalAlpha = 1 - k; tabela(560, 230 - 40 * k, 640, ["nome", "vida", "força"], [lin[0]], COR_L, 1, -1, 54); g.restore(); tabela(560, 230 + 54 * (1 - k), 640, ["nome", "vida", "força"], lin.slice(1), COR_L, 1, -1, 54); }
     caio({ x: 1050, y: 690, s: .95, olhar: -1, braco: t > mc ? -2.6 : -1, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > sa && t < mc) etiqueta("sai a ficha INTEIRA 🐉", 220, 470, 300, 300, seg(t, sa, sa + .4)); if (t > de && t < mc) cartaoC("🧚 Fada: vida 60, força 30 ✅", 560, 520, 460, "#bbf7d0", seg(t, de, de + .4)); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "celular"), "pop"], [em(F10, "jogos"), "pop"], [em(F10, "matrícula"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["celular", "📱", "Contato do celular:", "nome, telefone, aniversário"], ["jogos", "🎮", "Personagem do jogo:", "nome, vida, força"], ["matrícula", "🏫", "Secretaria da escola:", "fichas = cadastro"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 3", [CAIO, MENINA7]); } }
];

/* ================= 8º ano · 2027 · 1º bimestre · Missão 4 · Busca binária (v2, padrão completo: o Show do Meio) ================= */
const BIA8 = { camisa: "#f97316", cabelo: "longo" };
const bia8 = o => boneco(Object.assign({}, BIA8, o));
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
  g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = "#0d1631"; g.fillRect(0, 0, 1280, 720); g.restore(); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
function palco(t, luzOn) { // fundo de estúdio de TV com camadas
  const gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, "#1e1b4b"); gr.addColorStop(1, "#0b0a24"); g.fillStyle = gr; g.fillRect(-400, -300, 2080, 1320);
  for (let i = 0; i < 14; i++) { g.fillStyle = i % 2 ? "#7f1d1d" : "#991b1b"; g.fillRect(-400 + i * 150, -300, 150, 700); } // cortina ao fundo
  g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(-400, -300, 2080, 700);
  for (let i = 0; i < 24; i++) { const on = (Math.floor(t * 4) + i) % 3 === 0; g.fillStyle = on ? "#fde047" : "#78350f"; g.beginPath(); g.arc(-60 + i * 60, 30, 7, 0, 7); g.fill(); } // lâmpadas
  g.fillStyle = "#312e81"; g.fillRect(-400, 470, 2080, 60); g.fillStyle = "#4338ca"; g.fillRect(-400, 470, 2080, 8); // palco
  if (luzOn !== false) for (let i = 0; i < 2; i++) { const a = Math.sin(t * 1.3 + i * 2) * .35; g.save(); g.translate(200 + i * 880, -40); g.rotate(a); const lg = g.createLinearGradient(0, 0, 0, 560); lg.addColorStop(0, "rgba(255,240,180,.35)"); lg.addColorStop(1, "rgba(255,240,180,0)"); g.fillStyle = lg; g.beginPath(); g.moveTo(-20, 0); g.lineTo(20, 0); g.lineTo(180, 560); g.lineTo(-180, 560); g.closePath(); g.fill(); g.restore(); } }
function plateia(t, humor, y) { y = y || 640; for (let i = 0; i < 18; i++) { const x = 30 + i * 72 + (i % 2) * 20, b = humor === "festa" ? Math.abs(Math.sin(t * 8 + i)) * 14 : humor === "sono" ? 0 : Math.sin(t * 2 + i) * 2;
    g.fillStyle = ["#0f172a", "#1e293b", "#111827"][i % 3]; g.beginPath(); g.arc(x, y - b, 30, Math.PI, 0); g.fill(); g.fillRect(x - 34, y - b, 68, 120);
    if (humor === "sono" && i % 4 === 1) emo("😴", x, y - 40, 26); if (humor === "festa" && i % 3 === 0) emo("🙌", x, y - 60 - b, 26); } }
function regua100(t, x0, w, y, ini, fim, chutes, rotulos) { const X = v => x0 + (v - 1) / 99 * w;
  g.fillStyle = "#0f172a"; rr(x0 - 20, y - 46, w + 40, 92, 20); g.fill();
  for (let v = 1; v <= 100; v++) { const on = v >= ini && v <= fim; g.fillStyle = on ? (v % 10 === 0 ? "#facc15" : "#22c55e") : "#334155"; rr(X(v) - 3.5, y - 26, 7, 52, 3); g.fill(); }
  [1, 25, 50, 75, 100].forEach(v => { g.fillStyle = "#e2e8f0"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(v), X(v), y + 70); });
  chutes.forEach(([v, s], j) => { g.fillStyle = "#facc15"; g.beginPath(); g.moveTo(X(v), y - 30); g.lineTo(X(v) - 13, y - 56); g.lineTo(X(v) + 13, y - 56); g.fill();
    if (rotulos !== false && (j === chutes.length - 1 || (rotulos !== "ultimo" && Math.abs(chutes[j + 1][0] - v) >= 10))) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
function livroLomb(x, y, w, h, n, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = cor; rr(x, y, w, h, 4); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; rr(x + 4, y + h * .35, w - 8, 30, 4); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(n), x + w / 2, y + h * .35 + 22); g.restore(); }

/* ===== 8º M1 · Listas: dados em fila! (v2) ===== */
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const CHAM = ["Ana", "Bruno", "Carla", "Davi", "Eva"];
// lista vertical: cabeçalho com o nome + coluna do índice
function listaV(x, y, nome, itens, hl, k, vis, cor) { if (k <= 0) return; const z = back(cl(k)); vis = vis == null ? itens.length : vis; g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = cor || "#7c3aed"; rr(-120, 0, 240, 46, 12); g.fill(); g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 31);
  itens.forEach((v, i) => { if (i >= vis) return; const yy = 56 + i * 54; g.fillStyle = "#ddd6fe"; rr(-120, yy, 56, 46, 10); g.fill(); g.fillStyle = "#4c1d95"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), -92, yy + 31);
    g.fillStyle = hl === i ? "#fde68a" : "#fff"; rr(-56, yy, 176, 46, 10); g.fill(); if (hl === i) { g.strokeStyle = "#f59e0b"; g.lineWidth = 4; g.stroke(); } g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.fillText(v, 32, yy + 31); });
  g.restore(); }
function caixinha(x, y, nome, val, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#ca8a04"; rr(-58, -36, 116, 26, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 15px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, -17);
  g.fillStyle = "#fff"; rr(-52, -8, 104, 40, 8); g.fill(); g.fillStyle = NAVY; g.font = `700 17px ${F}`; g.fillText(val, 0, 19); g.restore(); }
function cel(x, y, v, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 84; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -28, w, 56, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(v, 0, 9); g.restore(); }
const NOMES19 = ["Ana", "Bruno", "Carla", "Davi", "Eva", "Fábio", "Gabi", "Hugo", "Iara", "João", "Kaio", "Lara", "Malu", "Nina", "Otto", "Paulo", "Rita", "Sara", "Téo"];
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
const F0 = "Listas: dados em fila!",
  F1 = "O Léo é o ajudante da chamada e precisa guardar o nome dos dezenove colegas no programa. Ele criou uma variável para cada um: aluno um, aluno dois, aluno três… Para mostrar todos, precisou de dezenove comandos. E, quando chegou um aluno novo, teve que criar mais uma variável!",
  F2 = "A Bia mostrou o jeito certo: uma lista. Lista é uma estrutura de dados: um conjunto de vários itens, um depois do outro, em ordem, todos com o mesmo nome. É como a fila da merenda: cada pessoa tem o seu lugar.",
  F3 = "Cada item tem uma posição, também chamada de índice. Na lista CHAMADA, a posição um é a Ana, a dois é o Bruno, e a três é a Carla. Então, CHAMADA na posição três quer dizer: a Carla!",
  F4 = "O número de itens é o tamanho da lista. A lista CHAMADA tem cinco nomes, então o tamanho é cinco. E a última posição é sempre igual ao tamanho.",
  F5 = "Com a lista, para mostrar todos os nomes, basta percorrer a lista com uma repetição: um bloco só, e não dezenove. Chegou aluno novo? É só inserir na lista.",
  F6 = "E mais: uma lista pode estar ordenada, em ordem crescente, decrescente ou alfabética, ou pode estar bagunçada. Guarde isso: lista ordenada é muito mais fácil de procurar. Você vai ver nas próximas missões!",
  F7 = "O Léo trocou as dezenove variáveis por uma lista só, a CHAMADA. O programa ficou curto, e aluno novo entra num instante. Missão cumprida!",
  F8 = "Onde eu uso isso? O histórico de mensagens do celular é uma lista, da mais antiga para a mais nova. A classificação do campeonato é uma lista ordenada pelos pontos. E a fila de impressão da escola também: o primeiro documento enviado é o primeiro impresso.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
const L81 = { 1: F1.replace("dezenove colegas", "19 colegas").replace("aluno um, aluno dois, aluno três", "aluno 1, aluno 2, aluno 3").replace("dezenove comandos", "19 comandos"),
  3: F3.replace("posição um", "posição 1").replace("a dois", "a 2").replace("a três", "a 3").replace("posição três", "posição 3"),
  4: F4.replace("cinco nomes", "5 nomes").replace("é cinco", "é 5"),
  5: F5.replace("não dezenove", "não 19"), 7: F7.replace("dezenove variáveis", "19 variáveis") };
const CORC = ["#fca5a5", "#fdba74", "#fde68a", "#86efac", "#93c5fd"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "pop"], [.7, "pop"], [1.0, "pop"], [1.3, "pop"], [1.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 330, 1.25], [1.8, 640, 360, 1]]); CHAM.forEach((n, i) => cel(320 + i * 160, 330 + Math.sin(t * 3 + i) * 6, n, CORC[i], seg(t, .3 + i * .3, .6 + i * .3), 130)); g.restore();
     abertura(t, "8º ANO · MISSÃO 1", "Listas: dados em fila!", "VÁRIOS ITENS,", "UM DEPOIS DO OUTRO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L81[1], sfx: [[.1, "whoosh"], [em(F1, "variável"), "pop"], [em(F1, "comandos"), "zum"], [em(F1, "novo"), "alerta"]],
   draw(t, D) { const va = em(F1, "variável"), co = em(F1, "comandos"), no = em(F1, "novo"); fundoEscuro(t, "#1e3a8a"); const n = Math.min(19, Math.max(0, Math.floor((t - va) * 3.2)));
     g.save(); camera(t, [[0, 400, 300, 1.12], [co, 640, 330, 1], [no, 640, 360, 1]]);
     for (let i = 0; i < n; i++) caixinha(120 + (i % 5) * 128, 150 + Math.floor(i / 5) * 84, "aluno " + (i + 1), NOMES19[i], 1);
     if (t > no) { caixinha(120 + 4 * 128, 150 + 3 * 84, "aluno 20", "Ugo", seg(t, no + .3, no + .7), "#dc2626"); placaShow("+1 variável 😩", 384, 462, seg(t, no + .5, no + .9), "#fca5a5"); }
     if (t > co) { g.fillStyle = "#0f172a"; rr(720, 120, 300, 390, 16); g.fill(); for (let i = 0; i < 19; i++) { const k = seg(t, co + i * .06, co + .2 + i * .06); if (k <= 0) continue; g.fillStyle = "#7c3aed"; rr(740, 136 + i * 19, 180 + (i % 3) * 30, 14, 4); g.fill(); }
       rotulo("19 comandos!", 870, 100, "#fde68a", seg(t, co + .4, co + .8)); }
     leo({ x: 1150, y: 560, s: .8, olhar: -1, braco: t > no ? -2.4 : .3, bracoE: t > no ? 2.4 : .3, boca: t > co ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > 1 && t < va) balao("Vou guardar os 19 nomes!", 1000, 300, seg(t, 1, 1.4)); } },
 { chip: "LISTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "ding"], [em(F2, "conjunto"), "pop"], [em(F2, "fila"), "whoosh"]],
   draw(t, D) { const li = em(F2, "lista"), cj = em(F2, "conjunto"), mn = em(F2, "mesmo"), fi = em(F2, "fila"); fundoEscuro(t, "#14532d");
     if (t < fi) { g.save(); camera(t, [[0, 640, 360, 1], [cj, 640, 340, 1.05]]); bia8({ x: 150, y: 560, s: .85, olhar: 1, braco: -.4, bracoE: -2.2, boca: "riso", pisca: pisca(t) });
       CHAM.forEach((n, i) => cel(380 + i * 160, 300, n, "#fff", seg(t, cj + i * .25, cj + .3 + i * .25), 140)); if (t > cj + 1.3) { g.strokeStyle = "#fde047"; g.lineWidth = 4; g.setLineDash([10, 8]); rr(290, 252, 820, 96, 20); g.stroke(); g.setLineDash([]); }
       if (t > mn) { g.fillStyle = "#7c3aed"; rr(560, 196, 260, 44, 12); g.fill(); g.fillStyle = "#fff"; g.font = `900 24px ${F}`; g.textAlign = "center"; g.fillText("CHAMADA", 690, 227); etiqueta("o nome da lista", 1000, 150, 822, 218, seg(t, mn + .3, mn + .7)); } g.restore();
       palavra("LISTA", 640, 110, seg(t, li, li + .4), 70); if (t > cj) cartaoC("vários itens, um depois do outro, em ordem", 700, 440, 640, "#fff", seg(t, cj + .2, cj + .6)); }
     else { const k = seg(t, fi, fi + .5); g.save(); g.fillStyle = "#e2e8f0"; g.fillRect(0, 470, 1280, 250); g.fillStyle = "#b45309"; rr(960, 290, 260, 190, 14); g.fill(); g.fillStyle = "#fde68a"; rr(940, 270, 300, 30, 8); g.fill(); emo("🍲", 1090, 390, 80);
       for (let i = 0; i < 5; i++) { const x = 840 - i * 150; g.fillStyle = "#facc15"; g.beginPath(); g.ellipse(x, 500, 60, 16, 0, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), x, 507);
         if (k > i * .15) boneco({ x, y: 490, s: .62, camisa: ["#ef4444", "#f97316", "#22c55e", "#3b82f6", "#a855f7"][i], cabelo: i % 2 ? "longo" : "", olhar: 1, braco: .2, bracoE: .2, boca: "riso", pisca: pisca(t + i) }); } g.restore();
       palavra("FILA DA MERENDA", 560, 100, seg(t, fi, fi + .4), 54); cartaoC("cada um tem o seu lugar", 520, 190, 420, "#fde68a", seg(t, fi + 1.2, fi + 1.6)); } } },
 { chip: "POSIÇÃO (ÍNDICE)", fala: F3, legenda: L81[3], sfx: [[.1, "whoosh"], [em(F3, "índice"), "ding"], [emE(F3, "um"), "pop"], [emE(F3, "dois"), "pop"], [emE(F3, "três"), "pop"], [em(F3, "Carla", 1), "festa"]],
   draw(t, D) { const ix = em(F3, "índice"), p1 = emE(F3, "um"), p2 = emE(F3, "dois"), p3 = emE(F3, "três"), ch = em(F3, "CHAMADA", 1), ca = em(F3, "Carla", 1); fundoEscuro(t, "#312e81");
     const hl = t > ch ? 2 : t > p3 ? 2 : t > p2 ? 1 : t > p1 ? 0 : -1;
     g.save(); camera(t, [[0, 640, 360, 1], [p1, 480, 340, 1.08], [ch, 640, 360, 1]]); listaV(360, 110, "CHAMADA", CHAM, hl, seg(t, 0, .5));
     if (t > ix) etiqueta("posição = índice", 120, 470, 268, 330, seg(t, ix, ix + .4)); if (hl >= 0 && t < ch) placaShow("posição " + (hl + 1) + " → " + CHAM[hl], 820, 180 + hl * 54, seg(t, [p1, p2, p3][hl], [p1, p2, p3][hl] + .3), "#fde68a");
     if (t > ch) { bloco(640, 230, 330, "item 3 de CHAMADA", "#ea580c", seg(t, ch, ch + .4), true); g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(980, 254); g.lineTo(1040, 254); g.stroke(); }
     if (t > ca) { caixa(1110, 254, "Carla", "#fde68a", seg(t, ca, ca + .4), 150); } g.restore(); palavra("POSIÇÃO", 820, 90, seg(t, 0, .4), 54); } },
 { chip: "TAMANHO", fala: F4, legenda: L81[4], sfx: [[.1, "whoosh"], [em(F4, "tamanho"), "ding"], [em(F4, "cinco"), "pop"], [em(F4, "última"), "ding"]],
   draw(t, D) { const ta = em(F4, "tamanho"), ci = em(F4, "cinco"), c2 = em(F4, "cinco", 1), ul = em(F4, "última"); fundoEscuro(t, "#7c2d12");
     g.save(); camera(t, [[0, 640, 360, 1], [ci, 520, 350, 1.06], [ul, 640, 360, 1]]); listaV(360, 110, "CHAMADA", CHAM, t > ul ? 4 : -1, 1);
     for (let i = 0; i < 5; i++) { const k = seg(t, ci + i * .25, ci + .25 + i * .25); if (k > 0) { g.save(); g.globalAlpha = cl(k); g.fillStyle = "#22c55e"; g.beginPath(); g.arc(520, 189 + i * 54, 20, 0, 7); g.fill(); g.fillStyle = "#fff"; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), 520, 196 + i * 54); g.restore(); } }
     if (t > c2) { bloco(640, 200, 330, "tamanho de CHAMADA", "#ea580c", seg(t, c2, c2 + .4), true); caixa(1110, 224, "5", "#86efac", seg(t, c2 + .4, c2 + .8), 100); }
     if (t > ul) cartaoC("última posição = tamanho = 5", 840, 430, 460, "#fde68a", seg(t, ul, ul + .4)); g.restore(); palavra("TAMANHO", 820, 90, seg(t, ta, ta + .4), 54); } },
 { chip: "PERCORRER E INSERIR", fala: F5, legenda: L81[5], sfx: [[.1, "whoosh"], [em(F5, "percorrer"), "zum"], [em(F5, "bloco"), "ding"], [em(F5, "inserir"), "pop"]],
   draw(t, D) { const pe = em(F5, "percorrer"), bl = em(F5, "bloco"), ins = em(F5, "inserir"); fundoEscuro(t, "#0f172a"); const L = t > ins ? CHAM.concat(["Fábio"]) : CHAM;
     g.save(); camera(t, [[0, 640, 360, 1], [pe, 600, 340, 1.04], [ins, 640, 360, 1]]); listaV(1000, 90, "CHAMADA", L, t > ins ? 5 : -1, 1, t > ins ? 5 + seg(t, ins + .3, ins + .6) : 5);
     if (t > pe && t < ins) { const i = Math.min(4, Math.floor((t - pe) * 1.6)); g.fillStyle = "#fde047"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("➜", 840, 182 + i * 54); telinha(250, 360, 280, "tela", CHAM.slice(0, i + 1).slice(-2), 1); }
     bloco(80, 110, 600, "repita (tamanho de CHAMADA) vezes", "#ea580c", seg(t, pe, pe + .4)); bloco(116, 170, 564, "mostrar (item i de CHAMADA)", "#7c3aed", seg(t, pe + .3, pe + .7)); bloco(116, 230, 564, "alterar i por 1", "#ca8a04", seg(t, pe + .5, pe + .9));
     if (t > ins) { bloco(80, 300, 600, "inserir Fábio em CHAMADA", "#0891b2", seg(t, ins, ins + .4), true); etiqueta("item novo no fim", 700, 470, 900, 436, seg(t, ins + .6, ins + 1)); } g.restore();
     if (t > bl && t < ins) placaShow("1 repetição, não 19 comandos!", 700, 500, seg(t, bl, bl + .4), "#86efac"); } },
 { chip: "ORDENADA OU BAGUNÇADA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "crescente"), "pop"], [em(F6, "decrescente"), "pop"], [em(F6, "alfabética"), "pop"], [em(F6, "bagunçada"), "alerta"], [em(F6, "procurar"), "ding"]],
   draw(t, D) { const cr = em(F6, "crescente"), de = em(F6, "decrescente"), al = em(F6, "alfabética"), ba = em(F6, "bagunçada"), pr = em(F6, "procurar"); fundoEscuro(t, "#14532d");
     const rows = [["crescente", [2, 5, 8, 12, 20], cr, "#86efac"], ["decrescente", [20, 12, 8, 5, 2], de, "#93c5fd"], ["alfabética", ["Ana", "Bia", "Caio", "Duda", "Eva"], al, "#fde68a"], ["bagunçada", [8, 2, 20, 5, 12], ba, "#fca5a5"]];
     g.save(); camera(t, [[0, 640, 330, 1], [pr, 600, 300, 1.05]]);
     rows.forEach(([nm, v, t0, c], r) => { const y = 150 + r * 90, k = seg(t, t0, t0 + .4); if (k <= 0) return; rotulo(nm, 190, y + 7, c, k); v.forEach((x, i) => { g.save(); if (r === 3) { g.translate(380 + i * 100, y); g.rotate(Math.sin(i * 2.3) * .18); g.translate(-(380 + i * 100), -y); } cel(380 + i * 100, y + (r === 3 ? Math.sin(i * 4) * 10 : 0), String(x), c, seg(t, t0 + i * .08, t0 + .3 + i * .08), 96); g.restore(); }); });
     if (t > pr) { lupa(580 + Math.sin(t * 3) * 200, 150, .9); } g.restore();
     palavra("ORDEM", 560, 70, seg(t, 0, .4), 44); if (t > pr) cartaoC("🔍 lista ordenada:", 1070, 300, 340, "#fff", seg(t, pr, pr + .4), "muito mais fácil de procurar!"); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L81[7], sfx: [[.1, "whoosh"], [em(F7, "lista"), "zum"], [em(F7, "curto"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const li = em(F7, "lista"), cu = em(F7, "curto"), mc = em(F7, "Missão"); fundoEscuro(t, "#1e3a8a"); const p = seg(t, li, li + 1.4);
     g.save(); camera(t, [[0, 600, 360, 1], [mc, 640, 380, 1]]);
     for (let i = 0; i < 19; i++) { const x0 = 120 + (i % 5) * 128, y0 = 170 + Math.floor(i / 5) * 84, x = x0 + (900 - x0) * p, y = y0 + (300 - y0) * p; if (p < 1) { g.save(); g.globalAlpha = 1 - p; g.translate(x, y); g.scale(1 - .7 * p, 1 - .7 * p); caixinha(0, 0, "aluno " + (i + 1), NOMES19[i], 1); g.restore(); } }
     if (p > .6 && t < mc) listaV(900, 130, "CHAMADA", ["Ana", "Bruno", "Carla", "…", "Téo"], -1, seg(t, li + .9, li + 1.4));
     leo({ x: 1160, y: 560, s: .8, olhar: -1, braco: t > cu ? -2.5 : .3, bracoE: t > cu ? 2.5 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > cu && t < mc) placaShow("19 variáveis → 1 lista", 420, 470, seg(t, cu, cu + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mensagens"), "pop"], [em(F8, "campeonato"), "pop"], [em(F8, "impressão"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mensagens", "💬", "Histórico de mensagens:", "da mais antiga à mais nova"], ["campeonato", "🏆", "Classificação:", "ordenada pelos pontos"], ["impressão", "🖨️", "Fila de impressão:", "1º enviado, 1º impresso"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 1", [LEO, BIA8]); } }
];

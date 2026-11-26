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

const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function cel(x, y, v, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 84; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#fff"; rr(-w / 2, -28, w, 56, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 3; g.stroke(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(v, 0, 9); g.restore(); }
function variavel(x, y, nome, val, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor || "#ca8a04"; rr(-90, -60, 180, 36, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText("📦 " + nome, 0, -36);
  g.fillStyle = "#fff"; rr(-70, -18, 140, 76, 12); g.fill(); g.strokeStyle = cor || "#ca8a04"; g.lineWidth = 5; g.stroke(); g.fillStyle = NAVY; g.font = `900 48px ${F}`; g.fillText(String(val), 0, 40); g.restore(); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
function passo(n, txt, x, y, w, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = hl ? "#fde68a" : "#fff"; rr(0, -28, w, 56, 14); g.fill(); g.fillStyle = "#0891b2"; g.beginPath(); g.arc(30, 0, 20, 0, 7); g.fill();
  g.fillStyle = "#fff"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(String(n), 30, 8); g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.textAlign = "left"; g.fillText(txt, 64, 8); g.restore(); }
/* ===== 8º M5 · O método da bolha (v2) ===== */
// anima comparações/trocas de vizinhos. evts: [{q, t, i, troca}] (q = quando o par acende; t = quando troca/mantém)
function ordAnim(ini, evts, t, X, y, azul) { let arr = ini.slice(), cur = null;
  for (const e of evts) { if (t >= e.t + .7) { if (e.troca) { const a = arr[e.i]; arr[e.i] = arr[e.i + 1]; arr[e.i + 1] = a; } } else { if (t >= e.q) cur = e; break; } }
  const mov = []; arr.forEach((v, j) => { const par = cur && (j === cur.i || j === cur.i + 1); let x = X(j), yy = y;
    if (par && cur.troca && t >= cur.t) { const p = seg(t, cur.t + .1, cur.t + .65), pe = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2, to = X(j === cur.i ? j + 1 : j - 1); x = X(j) + (to - X(j)) * pe; yy = y + (j === cur.i ? -1 : 1) * Math.sin(pe * Math.PI) * 80; }
    const cor = par ? (t >= cur.t ? (cur.troca ? "#fca5a5" : "#86efac") : "#fde68a") : (azul && azul(v) ? "#bfdbfe" : "#fff"); (par ? mov : []).push(0); if (par) mov.push([String(v), x, yy, cor]); else carta(String(v), x, yy, cor, 1, 120); });
  mov.forEach(m => { if (m !== 0) carta(m[0], m[1], m[2], m[3], 1, 120); });
  if (cur) { const xm = (X(cur.i) + X(cur.i + 1)) / 2; g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(X(cur.i) - 50, y - 80); g.lineTo(X(cur.i) - 50, y - 92); g.lineTo(X(cur.i + 1) + 50, y - 92); g.lineTo(X(cur.i + 1) + 50, y - 80); g.stroke();
    if (t >= cur.t) placaShow(cur.troca ? "TROCA! ⇄" : "MANTÉM ✓", xm, y + 120, seg(t, cur.t, cur.t + .3), cur.troca ? "#fca5a5" : "#86efac"); }
  return arr; }
function bolhas(t, x, y, w, h) { for (let i = 0; i < 14; i++) { const p = ((t * .25 + i * .137) % 1), bx = x + 20 + ((i * 97) % (w - 40)) + Math.sin(t * 2 + i) * 8, by = y + h - p * h; g.strokeStyle = "rgba(255,255,255,.55)"; g.lineWidth = 2; g.beginPath(); g.arc(bx, by, 4 + (i % 4) * 2, 0, 7); g.stroke(); } }
const F0 = "O método da bolha: ordenar trocando vizinhos!",
  F1 = "Na missão passada, a Bia aprendeu que a busca binária é muito rápida. Mas só funciona com a lista ordenada! E a lista de notas da turma estava toda bagunçada. Como o computador coloca uma lista em ordem?",
  F2 = "Um dos jeitos mais simples é o método da bolha, que coloca a lista em ordem crescente ou decrescente. Em inglês, bubble sort. A ideia é comparar vizinhos: dois números que estão lado a lado.",
  F3 = "Os passos são estes. Compare os dois primeiros vizinhos. O da esquerda é maior? Troque os dois de lugar. Não é? Mantenha. Ande uma casa e compare o próximo par. Quando chegar ao fim, terminou uma passada, e o maior número já está no final. Faça outra passada, até uma passada inteira sem nenhuma troca.",
  F4 = "Vamos ordenar seis, três, nove, um. Primeira passada: seis e três? Seis é maior: troca! Seis e nove? Mantém. Nove e um? Troca! O nove, o maior, chegou ao final.",
  F5 = "Segunda passada: três e seis? Mantém. Seis e um? Troca! O seis encostou no nove. Terceira passada: três e um? Troca! E pronto: um, três, seis, nove. Mais uma passada confere: nenhuma troca. Ordenada!",
  F6 = "Por que bolha? Porque, a cada passada, o maior número que ainda falta sobe para o final, como uma bolha subindo na água.",
  F7 = "Uma lista que já está em ordem termina numa passada só, sem nenhuma troca. E a lista ao contrário, quatro, três, dois, um, é a que dá mais trabalho: todo par de vizinhos troca.",
  F8 = "O método da bolha é fácil de entender, mas compara vizinhos muitas e muitas vezes. Por isso fica lento em listas grandes. Existem métodos que trocam menos, e você vai ver um deles na Missão 7.",
  F9 = "A Bia ordenou as notas com o método da bolha, e agora a busca binária funciona. Missão cumprida!",
  F10 = "Onde eu uso isso? Ao organizar as cartas na mão, no baralho, trocando as que estão fora de ordem. Na fila por altura na foto da turma. E nas planilhas e aplicativos, que ordenam nomes, preços e notas com um clique.",
  F11 = "Agora é com vocês: abram a Missão 5 no portal!";
const L85 = { 2: F2.replace("dois números", "2 números"), 3: F3.replace("os dois primeiros", "os 2 primeiros").replace("os dois de lugar", "os 2 de lugar"),
  4: "Vamos ordenar 6, 3, 9, 1. Primeira passada: 6 e 3? 6 é maior: troca! 6 e 9? Mantém. 9 e 1? Troca! O 9, o maior, chegou ao final.",
  5: "Segunda passada: 3 e 6? Mantém. 6 e 1? Troca! O 6 encostou no 9. Terceira passada: 3 e 1? Troca! E pronto: 1, 3, 6, 9. Mais uma passada confere: nenhuma troca. Ordenada!",
  7: F7.replace("quatro, três, dois, um", "4, 3, 2, 1") };
const XB = j => 340 + j * 170;
const E4 = [{ q: em(F4, "seis", 1), t: em(F4, "troca"), i: 0, troca: true }, { q: em(F4, "seis", 3), t: em(F4, "Mantém"), i: 1, troca: false }, { q: em(F4, "nove", 2), t: em(F4, "troca", 1), i: 2, troca: true }];
const E5 = [{ q: em(F5, "três"), t: em(F5, "Mantém"), i: 0, troca: false }, { q: em(F5, "Seis", 1), t: em(F5, "Troca"), i: 1, troca: true }, { q: em(F5, "três", 1), t: em(F5, "Troca", 1), i: 0, troca: true }];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0c4a6e"); bolhas(t, 0, 0, 1280, 720); g.save(); camera(t, [[0, 640, 320, 1.25], [1.8, 640, 360, 1]]); const p = seg(t, .3, 1.1); [[6, 0], [3, 1]].forEach(([v, j]) => { const pe = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2, x = 520 + (j === 0 ? pe : -pe) * 240 + j * 240; carta(String(v), x, 250 + (j ? 1 : -1) * Math.sin(pe * Math.PI) * 70, j ? "#86efac" : "#fca5a5", 1, 120); }); g.restore();
     abertura(t, "8º ANO · MISSÃO 5", "O método da bolha", "ORDENAR TROCANDO", "VIZINHOS!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "rápida"), "ding"], [em(F1, "ordenada"), "alerta"], [em(F1, "bagunçada"), "zum"], [em(F1, "ordem"), "pop"]],
   draw(t, D) { const bi = em(F1, "busca"), ra = em(F1, "rápida"), od = em(F1, "ordenada"), ba = em(F1, "bagunçada"), oe = em(F1, "ordem"); fundoEscuro(t, "#312e81");
     g.save(); camera(t, [[0, 640, 360, 1], [ba, 700, 330, 1.04], [oe, 640, 360, 1]]); bia8({ x: 160, y: 565, s: .85, olhar: 1, braco: t > ba ? -1.2 : .3, bracoE: t > oe ? 2.4 : .3, boca: t > ba ? "o" : "riso", pisca: pisca(t) });
     if (t > bi && t < ba) { cartaoC("⚡ busca binária: muito rápida", 640, 190, 520, "#86efac", seg(t, bi, bi + .4)); if (t > od) { cartaoC("🔒 só funciona com a lista ORDENADA", 640, 330, 560, "#fde68a", seg(t, od, od + .4)); } }
     if (t > ba) [7, 3, 9, 5, 8, 2].forEach((v, i) => { g.save(); const x = 400 + i * 130, y = 290 + Math.sin(i * 2.7) * 40; g.translate(x, y); g.rotate(Math.sin(i * 3.1 + t) * .2); carta(String(v), 0, 0, "#fff", seg(t, ba + i * .1, ba + .3 + i * .1), 100); g.restore(); });
     g.restore(); if (t > ba) palavra("NOTAS BAGUNÇADAS", 700, 100, seg(t, ba, ba + .4), 48); if (t > ba && t < oe) balao("Tudo fora de ordem!", 330, 250, seg(t, ba + .3, ba + .7)); if (t > oe) palavra("COMO ORDENAR? 🤔", 700, 470, seg(t, oe, oe + .4), 44); } },
 { chip: "MÉTODO DA BOLHA", fala: F2, legenda: L85[2], sfx: [[.1, "whoosh"], [em(F2, "bolha"), "ding"], [em(F2, "bubble"), "pop"], [em(F2, "vizinhos"), "ding"]],
   draw(t, D) { const bo = em(F2, "bolha"), bu = em(F2, "bubble"), vi = em(F2, "vizinhos"), la = em(F2, "lado"); fundoEscuro(t, "#0c4a6e"); bolhas(t, 0, 0, 1280, 720);
     palavra("MÉTODO DA BOLHA 🫧", 560, 100, seg(t, bo, bo + .4), 56); if (t > bu) rotulo("em inglês: bubble sort", 560, 160, "#bae6fd", seg(t, bu, bu + .4));
     if (t > vi) { [6, 3, 9, 1].forEach((v, j) => carta(String(v), XB(j), 330, j < 2 ? "#fde68a" : "#fff", seg(t, vi + j * .1, vi + .3 + j * .1), 120)); g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(XB(0) - 50, 250); g.lineTo(XB(0) - 50, 238); g.lineTo(XB(1) + 50, 238); g.lineTo(XB(1) + 50, 250); g.stroke(); }
     if (t > la) etiqueta("vizinhos: lado a lado", 1050, 230, XB(1) + 50, 240, seg(t, la, la + .4)); robozinho(1120, 420, .8, t, true); } },
 { chip: "OS PASSOS", fala: F3, legenda: L85[3], sfx: [[.1, "whoosh"], [em(F3, "Compare"), "pop"], [em(F3, "Troque"), "pop"], [em(F3, "Mantenha"), "pop"], [em(F3, "Ande"), "pop"], [em(F3, "passada"), "ding"], [em(F3, "Faça"), "pop"]],
   draw(t, D) { const ts = [em(F3, "Compare"), em(F3, "esquerda"), em(F3, "Mantenha"), em(F3, "Ande"), em(F3, "passada"), em(F3, "Faça")]; fundoEscuro(t, "#0f172a"); const at = ts.filter(x => t > x).length - 1;
     const P = ["Compare os 2 primeiros vizinhos", "O da esquerda é maior? Troque!", "Não é? Mantenha", "Ande uma casa: próximo par", "Chegou ao fim: 1 passada (o maior no final)", "Repita até uma passada sem trocas"];
     g.save(); camera(t, [[0, 600, 330, 1], [ts[3], 580, 340, 1.03], [ts[5] + 2, 600, 330, 1]]); P.forEach((s, i) => passo(i + 1, s, 120, 120 + i * 68, 660, seg(t, ts[i], ts[i] + .4), at === i)); bia8({ x: 1100, y: 560, s: .8, olhar: -1, braco: -2.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore();
     palavra("PASSO A PASSO", 560, 70, seg(t, 0, .4), 40); } },
 { chip: "1ª PASSADA", fala: F4, legenda: L85[4], sfx: [[.1, "whoosh"], [E4[0].t, "whoosh"], [E4[1].t, "ding"], [E4[2].t, "whoosh"], [em(F4, "final"), "festa"]],
   draw(t, D) { const fi = em(F4, "final"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 360, 1], [E4[0].q, 600, 340, 1.04], [fi, 640, 360, 1]]);
     ordAnim([6, 3, 9, 1], E4, t, XB, 300, v => t > fi && v === 9); g.restore(); palavra("1ª PASSADA", 560, 90, seg(t, 0, .4), 50); if (t > fi) etiqueta("o maior chegou ao final!", 1070, 470, XB(3) + 40, 360, seg(t, fi, fi + .4)); } },
 { chip: "MAIS PASSADAS", fala: F5, legenda: L85[5], sfx: [[.1, "whoosh"], [E5[0].t, "ding"], [E5[1].t, "whoosh"], [E5[2].t, "whoosh"], [em(F5, "confere"), "zum"], [em(F5, "Ordenada"), "festa"]],
   draw(t, D) { const te = em(F5, "Terceira"), pr = em(F5, "pronto"), cf = em(F5, "confere"), od = em(F5, "Ordenada"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 640, 360, 1], [E5[1].q, 600, 340, 1.04], [od, 640, 360, 1]]); const fixo = v => v === 9 || (t > te && v === 6) || t > pr;
     if (t < cf) ordAnim([3, 6, 1, 9], E5, t, XB, 300, fixo); else { [1, 3, 6, 9].forEach((v, j) => carta(String(v), XB(j), 300, "#bfdbfe", 1, 120)); const j = Math.min(2, Math.floor((t - cf) * 3)); if (t < od) { g.strokeStyle = "#86efac"; g.lineWidth = 5; rr(XB(j) - 62, 232, 294, 136, 18); g.stroke(); } }
     g.restore(); palavra(t > cf ? "CONFERINDO…" : t > te ? "3ª PASSADA" : "2ª PASSADA", 560, 90, seg(t, 0, .4), 50); if (t > od) placaShow("ORDENADA! 0 trocas ✓", 640, 470, seg(t, od, od + .4), "#86efac"); } },
 { chip: "POR QUE BOLHA?", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "sobe"), "zum"], [em(F6, "água"), "pop"]],
   draw(t, D) { const so = em(F6, "sobe"), ag = em(F6, "água"); fundoEscuro(t, "#0f172a");
     const gr = g.createLinearGradient(0, 110, 0, 520); gr.addColorStop(0, "#38bdf8"); gr.addColorStop(1, "#0c4a6e"); g.fillStyle = gr; rr(380, 110, 520, 420, 24); g.fill(); g.strokeStyle = "#e0f2fe"; g.lineWidth = 6; g.stroke(); g.save(); g.beginPath(); rr(380, 110, 520, 420, 24); g.clip(); bolhas(t, 380, 110, 520, 420); g.restore();
     const p = seg(t, so - .6, so + 1.8); [[3, 470], [6, 580], [1, 700], [9, 800]].forEach(([v, x]) => { const r = 22 + v * 4, y = v === 9 ? 470 - p * 300 : 470 + Math.sin(t * 2 + v) * 6; g.fillStyle = "rgba(255,255,255,.25)"; g.beginPath(); g.arc(v === 9 ? 640 + (x - 640) * (1 - p) : x, y, r, 0, 7); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 4; g.stroke(); g.fillStyle = "#fff"; g.font = `900 ${r}px ${F}`; g.textAlign = "center"; g.fillText(String(v), v === 9 ? 640 + (x - 640) * (1 - p) : x, y + r * .35); });
     palavra("POR QUE BOLHA?", 560, 70, seg(t, 0, .4), 46); if (t > so) etiqueta("o maior sobe para o final", 1080, 200, 700, 190, seg(t, so, so + .4)); bia8({ x: 180, y: 560, s: .75, olhar: 1, braco: -2.3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "FÁCIL OU DIFÍCIL?", fala: F7, legenda: L85[7], sfx: [[.1, "whoosh"], [em(F7, "passada"), "ding"], [em(F7, "contrário"), "alerta"], [em(F7, "troca"), "zum"]],
   draw(t, D) { const pa = em(F7, "passada"), co = em(F7, "contrário"), tr = em(F7, "troca", 1); fundoEscuro(t, "#7c2d12");
     rotulo("já em ordem", 200, 177, "#86efac", seg(t, .2, .6)); [1, 2, 3, 4].forEach((v, i) => cel(380 + i * 110, 170, String(v), "#86efac", seg(t, .2 + i * .1, .5 + i * .1), 90)); if (t > pa) placaShow("1 passada, 0 trocas 😎", 960, 170, seg(t, pa, pa + .4), "#86efac");
     if (t > co) { rotulo("ao contrário", 200, 347, "#fca5a5", seg(t, co, co + .4)); [4, 3, 2, 1].forEach((v, i) => cel(380 + i * 110, 340, String(v), "#fca5a5", seg(t, co + i * .1, co + .3 + i * .1), 90)); }
     if (t > tr) { for (let i = 0; i < 3; i++) { g.fillStyle = "#fde047"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText("⇄", 435 + i * 110, 300); } placaShow("todo par troca! 😓", 960, 340, seg(t, tr, tr + .4), "#fca5a5"); }
     palavra("MELHOR × PIOR", 560, 80, seg(t, 0, .4), 44); leo({ x: 1150, y: 565, s: .6, olhar: -1, braco: .3, bracoE: .3, boca: t > co ? "o" : "riso", pisca: pisca(t) }); } },
 { chip: "LENTO EM LISTA GRANDE", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "fácil"), "ding"], [em(F8, "muitas"), "zum"], [em(F8, "lento"), "alerta"], [em(F8, "Missão"), "pop"]],
   draw(t, D) { const fa = em(F8, "fácil"), mu = em(F8, "muitas"), le = em(F8, "lento"), mi = em(F8, "Missão"); fundoEscuro(t, "#0f172a");
     if (t > fa) cartaoC("✅ fácil de entender", 330, 170, 400, "#86efac", seg(t, fa, fa + .4)); if (t > mu) { const n = Math.min(499500, Math.floor(Math.pow(Math.max(0, t - mu), 3) * 9000)); cartaoC(n.toLocaleString("pt-BR") + " comparações", 330, 320, 440, "#fde68a", seg(t, mu, mu + .4)); rotulo("numa lista de 1.000 notas", 330, 420, "#cbd5e1", seg(t, mu, mu + .4)); }
     if (t > le) { cartaoC("🐢 lento em listas grandes", 900, 170, 420, "#fca5a5", seg(t, le, le + .4)); emo("🐢", 900 + Math.sin(t) * 30, 320, 100); } if (t > mi) cartaoC("Missão 7: um método que troca menos", 900, 440, 480, "#fde68a", seg(t, mi, mi + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "binária"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const bi = em(F9, "binária"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1], [mc, 640, 380, 1]]);
     [2, 3, 5, 7, 8, 9].forEach((v, i) => carta(String(v), 300 + i * 120, 360, i === 2 && t > bi ? "#fde68a" : "#bfdbfe", seg(t, .2 + i * .12, .5 + i * .12), 100)); if (t > bi) lupa(540, 270, .8);
     bia8({ x: 1130, y: 565, s: .8, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore(); if (t > bi && t < mc) placaShow("busca binária funcionando ⚡", 600, 490, seg(t, bi, bi + .4), "#86efac"); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "cartas"), "pop"], [em(F10, "altura"), "pop"], [em(F10, "planilhas"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["cartas", "♠️", "Cartas na mão:", "troca as fora de ordem"], ["altura", "📸", "Foto da turma:", "fila por altura"], ["planilhas", "📊", "Planilhas e apps:", "ordenam com um clique"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 5", [BIA8, LEO]); } }
];

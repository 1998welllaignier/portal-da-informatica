/* ================= 7º ano · 2027 · 1º bimestre · Missão 2 · Listas no programa (v2, padrão completo: a Barraca da Turma) ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
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
const io2 = k => k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
// câmera: kf = [[t, x, y, zoom], ...] — interpola e aplica (centro da tela vai para x,y)
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k);
  g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
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
    if (rotulos !== false && (j === chutes.length - 1 || Math.abs(chutes[j + 1][0] - v) >= 10)) { g.fillStyle = s === "MAIOR" ? "#16a34a" : s === "MENOR" ? "#dc2626" : "#facc15"; g.font = `900 22px ${F}`; const tx = v + (s ? " · " + s : ""), tw = g.measureText(tx).width + 24; rr(X(v) - tw / 2, y - 100, tw, 36, 18); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(tx, X(v), y - 75); } });
  return X; }
function placaShow(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.font = `900 30px ${F}`; const w = g.measureText(txt).width + 50;
  g.fillStyle = "#0f172a"; rr(-w / 2 - 6, -36, w + 12, 72, 18); g.fill(); g.fillStyle = cor || "#facc15"; rr(-w / 2, -30, w, 60, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function microfone2(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; rr(-6, 0, 12, 50, 4); g.fill(); g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(0, -6, 14, 0, 7); g.fill(); g.restore(); }
function livroLomb(x, y, w, h, n, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = cor; rr(x, y, w, h, 4); g.fill(); g.fillStyle = "rgba(255,255,255,.85)"; rr(x + 4, y + h * .35, w - 8, 30, 4); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(String(n), x + w / 2, y + h * .35 + 22); g.restore(); }
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZ; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
function ondeUso(t, F_, itens) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
  itens.forEach(([w, e, a, b], i) => { const t0 = em(F_, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
    g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); }
/* ===== peças "A Barraca da Turma" (7º M2 v2) ===== */
const FR = { "maçã": "🍎", "uva": "🍇", "caju": "🥭", "açaí": "🫐", "banana": "🍌" };
function barraca(t, x, y, w) { g.fillStyle = "#7c2d12"; rr(x, y + 120, w, 140, 10); g.fill(); g.fillStyle = "#9a3412"; rr(x, y + 120, w, 26, 10); g.fill();
  for (let i = 0; i < Math.ceil(w / 60); i++) { g.fillStyle = i % 2 ? "#fff" : "#dc2626"; g.beginPath(); g.moveTo(x + i * 60, y - 40); g.lineTo(x + i * 60 + 60, y - 40); g.lineTo(x + i * 60 + 60, y + 10); g.quadraticCurveTo(x + i * 60 + 30, y + 40, x + i * 60, y + 10); g.fill(); }
  g.fillStyle = "#78350f"; g.fillRect(x + 6, y - 40, 12, 300); g.fillRect(x + w - 18, y - 40, 12, 300); }
function cesta(x, y, fruta, pos, k, hl, vazia) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (hl) { g.shadowColor = "#facc15"; g.shadowBlur = 26; }
  g.fillStyle = vazia ? "#475569" : "#b45309"; g.beginPath(); g.moveTo(-56, -10); g.lineTo(56, -10); g.lineTo(44, 50); g.lineTo(-44, 50); g.closePath(); g.fill(); g.shadowBlur = 0; g.strokeStyle = "#78350f"; g.lineWidth = 3; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(-50 + i * 4, 6 + i * 12); g.lineTo(50 - i * 4, 6 + i * 12); g.stroke(); }
  if (!vazia && fruta) { emo(FR[fruta] || "❓", 0, -6, 46); } g.fillStyle = "#facc15"; g.beginPath(); g.arc(0, 74, 18, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `900 20px ${F}`; g.textAlign = "center"; g.fillText(String(pos), 0, 81);
  if (fruta && !vazia) { g.fillStyle = "#fff"; g.font = `800 17px ${F}`; g.fillText(fruta, 0, 112); } g.restore(); }
function letreiro(x, y, w, h, linhas, t, titulo) { g.fillStyle = "#111827"; rr(x - 10, y - 10, w + 20, h + 20, 14); g.fill(); g.fillStyle = "#020617"; rr(x, y, w, h, 8); g.fill();
  g.fillStyle = "#fbbf24"; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(titulo || "🍹 CARDÁPIO", x + w / 2, y + 32); linhas.forEach((l, i) => { g.fillStyle = "#4ade80"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(l, x + 24, y + 70 + i * 30); }); }

const F0 = "Listas no programa: a barraca da turma!",
  F1 = "Na festa da escola, a Duda ficou responsável pela barraca de frutas da turma. Ela quis fazer um cardápio no computador e começou a criar uma variável para cada fruta: fruta um, fruta dois, fruta três… Quando o Caio disse que eram dezenove alunos e cada um ia trazer uma fruta, ela quase desistiu!",
  F2 = "Calma, Duda! Para isso existe a lista: uma variável só, que guarda vários itens em ordem. Como as cestas da barraca, uma do lado da outra.",
  F3 = "Cada item tem uma posição, contada a partir do um. Na lista frutas, a posição um é a maçã, a dois é a uva, a três é o caju e a quatro é o açaí.",
  F4 = "O bloco criar lista com monta a lista de uma vez: frutas igual a maçã, uva, caju e açaí.",
  F5 = "Para pegar um item, usamos o bloco em lista, obter, com a posição. Em lista frutas, obter o número três: o programa vai até a cesta três e pega… o caju!",
  F6 = "E quantas frutas tem? O bloco tamanho de conta os itens. Tamanho de frutas: quatro!",
  F7 = "Chegou banana! O bloco na lista, adicionar no fim, coloca um item novo no final. Agora a lista tem cinco frutas.",
  F8 = "E o melhor: o bloco para cada item na lista repete os blocos de dentro uma vez para cada item. Para cada fruta, mostrar a fruta: e o cardápio vai aparecendo, maçã, uva, caju, açaí, banana, um por linha!",
  F9 = "O para cada é uma repetição esperta: você não precisa saber quantos itens tem. Se a lista crescer, ele percorre os novos itens também.",
  F10 = "Mas cuidado! O Caio pediu o item número seis de uma lista que tem só cinco. Deu problema! A posição seis não existe. Antes de pedir, confira o tamanho.",
  F11 = "O cardápio da barraca ficou pronto, com todas as frutas da turma, e a fila não parava de crescer. Missão cumprida!",
  F12 = "Onde eu uso isso? A playlist é uma lista de músicas: o aplicativo toca uma por vez, do começo ao fim. O carrinho da loja online é uma lista: cada produto entra no fim, e o aplicativo mostra quantos itens tem. E o histórico do navegador é a lista dos sites que você visitou, em ordem.",
  F13 = "Agora é com vocês: abram a Missão 2 no portal!";
const L = { 1: "Na festa da escola, a Duda ficou responsável pela barraca de frutas da turma. Ela quis fazer um cardápio no computador e começou a criar uma variável para cada fruta: fruta1, fruta2, fruta3… Quando o Caio disse que eram 19 alunos e cada um ia trazer uma fruta, ela quase desistiu!",
  3: "Cada item tem uma posição, contada a partir do 1. Na lista frutas, a posição 1 é a maçã, a 2 é a uva, a 3 é o caju e a 4 é o açaí.", 5: "Para pegar um item, usamos o bloco “em lista … obter #”, com a posição. Em lista frutas, obter o nº 3: o programa vai até a cesta 3 e pega… o caju!",
  6: "E quantas frutas tem? O bloco “tamanho de” conta os itens. Tamanho de frutas: 4!", 7: "Chegou banana! O bloco “na lista … adicionar no fim” coloca um item novo no final. Agora a lista tem 5 frutas.",
  10: "Mas cuidado! O Caio pediu o item nº 6 de uma lista que tem só 5. Deu problema! A posição 6 não existe. Antes de pedir, confira o tamanho." };
const F4L = ["maçã", "uva", "caju", "açaí"];
function cestas(t, lista, k, hl, y, extra) { lista.forEach((f, i) => cesta(260 + i * 170, y || 400, f, i + 1, typeof k === "number" ? k : k(i), hl === i)); if (extra) cesta(260 + lista.length * 170, y || 400, null, lista.length + 1, 1, false, true); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.8, "pop"], [1.1, "pop"], [1.4, "pop"], [1.8, "festa"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.5], [1.6, 640, 360, 1]]); fundoEscuro(t, "#7c2d12"); barraca(t, 180, 160, 920); cestas(t, F4L, i => seg(t, .3 + i * .25, .6 + i * .25), -1, 330); g.restore();
     abertura(t, "7º ANO · MISSÃO 2", "Listas no programa", "A BARRACA", "DA TURMA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L[1], sfx: [[.1, "whoosh"], [em(F1, "barraca"), "festa"], [em(F1, "variável"), "pop"], [em(F1, "dezenove"), "alerta"], [em(F1, "desistiu"), "misterio"]],
   draw(t, D) { const ba = em(F1, "barraca"), va = em(F1, "variável"), dz = em(F1, "dezenove"), de = em(F1, "desistiu");
     g.save(); camera(t, [[0, 640, 360, 1], [va, 700, 300, 1.15], [dz, 640, 360, 1]]); fundoEscuro(t, "#1e3a8a");
     const n = t > va ? Math.min(t > dz ? 19 : 3, Math.floor((t - va) * (t > dz ? 8 : 1.2)) + 1) : 0; for (let i = 0; i < n; i++) caixa(420 + (i % 5) * 170, 140 + Math.floor(i / 5) * 66, "fruta" + (i + 1), "#fff", 1, 150);
     duda({ x: 170, y: 640, s: .95, braco: t > de ? -2.6 : -1, bracoE: t > de ? 2.6 : .3, olhar: 1, boca: t > dz ? "o" : "", pisca: pisca(t) }); if (t > dz) caio({ x: 1150, y: 640, s: .8, braco: -1.4, bracoE: .3, olhar: -1, pisca: pisca(t + .4) }); g.restore();
     if (t > dz) balao("São 19 alunos!", 1060, 400, 1); if (t > de) palavra("19 VARIÁVEIS?! 😵", 760, 520, seg(t, de, de + .4), 44); } },
 { chip: "A LISTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "ding"], [em(F2, "cestas"), "pop"]],
   draw(t, D) { const l = em(F2, "lista"), c = em(F2, "cestas"); g.save(); camera(t, [[0, 640, 360, 1.2], [c, 640, 360, 1]]); fundoEscuro(t, "#14532d"); barraca(t, 180, 230, 920); if (t > c) cestas(t, F4L, i => seg(t, c + i * .2, c + .3 + i * .2), -1); g.restore();
     palavra("LISTA", 640, 110, seg(t, l, l + .4), 80); rotulo("UMA variável só, com VÁRIOS itens em ordem", 640, 170, "#bbf7d0", seg(t, l + .4, l + .8)); } },
 { chip: "POSIÇÃO", fala: F3, legenda: L[3], sfx: [[.1, "whoosh"], [em(F3, "posição"), "ding"], [em(F3, "maçã"), "pop"], [em(F3, "uva"), "pop"], [em(F3, "caju"), "pop"], [em(F3, "açaí"), "pop"]],
   draw(t, D) { const ts = ["maçã", "uva", "caju", "açaí"].map(w => em(F3, w)); const hl = ts.filter(x => t > x).length - 1;
     g.save(); camera(t, [[0, 640, 360, 1], ...ts.map((x, i) => [x, 260 + i * 170 + 120, 360, 1.15])]); fundoEscuro(t, "#14532d"); barraca(t, 180, 230, 920); cestas(t, F4L, 1, hl); g.restore();
     palavra("POSIÇÃO: A PARTIR DO 1", 640, 110, seg(t, 0, .4), 50); } },
 { chip: "CRIAR LISTA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "criar"), "click"], [em(F4, "maçã"), "pop"], [em(F4, "açaí"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const cr = em(F4, "criar"), ma = em(F4, "maçã");
     g.save(); camera(t, [[0, 640, 360, 1], [cr, 520, 260, 1.15], [ma, 640, 360, 1]]); bloco(160, 170, 960, "📝 frutas = criar lista com  maçã · uva · caju · açaí", "#db2777", seg(t, cr, cr + .4), true);
     F4L.forEach((f, i) => { const k = seg(t, ma + i * .35, ma + .35 + i * .35); if (k > 0) { const kk = io2(cl(k)); cesta(lerp(560 + i * 120, 290 + i * 230, kk), lerp(210, 400, kk), f, i + 1, 1); } }); g.restore(); } },
 { chip: "OBTER PELA POSIÇÃO", fala: F5, legenda: L[5], sfx: [[.1, "whoosh"], [em(F5, "obter"), "click"], [em(F5, "três", 1), "pop"], [em(F5, "caju"), "festa"]],
   draw(t, D) { const ob = em(F5, "obter"), tr = em(F5, "três", 1), ca = em(F5, "caju"); g.save(); camera(t, [[0, 640, 360, 1], [tr, 600, 360, 1.2], [ca, 600, 340, 1.3]]); fundoEscuro(t, "#3b1c6e"); barraca(t, 180, 230, 920);
     cestas(t, F4L, 1, t > tr ? 2 : -1); if (t > tr) { const k = cl((t - tr) / 1.2); maoApontando(lerp(200, 600, k), 320, Math.PI / 2, .8); } if (t > ca) { emo("🥭", 600, 290 - Math.abs(Math.sin((t - ca) * 3)) * 30, 70); } g.restore();
     bloco(300, 90, 680, "🔢 em lista frutas · obter # 3", "#7c3aed", seg(t, ob, ob + .4), t > ob); if (t > ca) placa("→ caju!", 1080, 120, 1, "#16a34a", 26); } },
 { chip: "TAMANHO", fala: F6, legenda: L[6], sfx: [[.1, "whoosh"], [em(F6, "tamanho"), "click"], [em(F6, "quatro"), "ding"]],
   draw(t, D) { const tm = em(F6, "tamanho"), q = em(F6, "quatro"); g.save(); camera(t, [[0, 640, 360, 1.1], [q, 640, 360, 1]]); fundoEscuro(t, "#1e3a8a"); barraca(t, 180, 230, 920); cestas(t, F4L, 1, -1);
     const n = t > tm ? Math.min(4, Math.floor((t - tm) / .5) + 1) : 0; for (let i = 0; i < n; i++) visto(300 + i * 170, 320, 18, 1); g.restore();
     bloco(330, 90, 620, "📏 tamanho de frutas", "#0d9488", seg(t, tm, tm + .4), true); if (t > q) palavra("= 4", 1050, 130, seg(t, q, q + .4), 70); } },
 { chip: "ADICIONAR NO FIM", fala: F7, legenda: L[7], sfx: [[.1, "whoosh"], [em(F7, "banana"), "pop"], [em(F7, "adicionar"), "click"], [em(F7, "final"), "whoosh"], [em(F7, "cinco"), "ding"]],
   draw(t, D) { const ba = em(F7, "banana"), ad = em(F7, "adicionar"), fi = em(F7, "final"), ci = em(F7, "cinco"); g.save(); camera(t, [[0, 640, 360, 1], [fi, 900, 360, 1.15], [ci, 760, 360, .95]]); fundoEscuro(t, "#14532d"); barraca(t, 100, 230, 1080);
     cestas(t, F4L, 1, -1); if (t > ba) { const k = cl((t - fi) / .9); if (t < fi) emo("🍌", 1180, 270 + Math.sin(t * 6) * 6, 60); else cesta(lerp(1180, 940, io2(k)), lerp(270, 400, io2(k)), "banana", 5, 1, k >= 1); } g.restore();
     bloco(240, 90, 800, "➕ na lista frutas · adicionar no fim “banana”", "#16a34a", seg(t, ad, ad + .4), t > ad); if (t > ci) placa("tamanho: 4 → 5", 1080, 560 - 30, 1, "#0d9488", 22); } },
 { chip: "👉 PARA CADA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "cada"), "ding"], [em(F8, "maçã"), "pop"], [em(F8, "uva"), "pop"], [em(F8, "caju"), "pop"], [em(F8, "açaí"), "pop"], [em(F8, "banana"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const ca = em(F8, "cada"); const ts = ["maçã", "uva", "caju", "açaí", "banana"].map(w => em(F8, w)); const n = ts.filter(x => t > x).length; const LL = [...F4L, "banana"];
     g.save(); camera(t, [[0, 640, 360, 1], [ts[0], 640, 380, 1.05]]); bocaC(90, 110, 520, 150, "👉 para cada fruta na lista frutas", "#f59e0b", seg(t, ca, ca + .4), true); bloco(130, 172, 320, "▶️ mostrar fruta", "#7c3aed", seg(t, ca + .3, ca + .6));
     LL.forEach((f, i) => cesta(150 + i * 110, 450, f, i + 1, 1, i === n - 1)); g.restore(); letreiro(720, 110, 420, 250, LL.slice(0, n).map(f => FR[f] + " " + f), t); } },
 { chip: "REPETIÇÃO ESPERTA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "esperta"), "ding"], [em(F9, "crescer"), "pop"], [em(F9, "novos"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const es = em(F9, "esperta"), cr = em(F9, "crescer"); const LL = ["maçã", "uva", "caju", "açaí", "banana"], n = t > cr ? Math.min(9, 5 + Math.floor((t - cr) * 2)) : 5;
     const extras = ["🍍 abacaxi", "🍉 melancia", "🥥 coco", "🍊 laranja"]; const lin = LL.map(f => FR[f] + " " + f).concat(extras).slice(0, n);
     g.save(); camera(t, [[0, 640, 360, 1], [cr, 640, 330, 1.05]]); letreiro(380, 100, 520, 30 * n + 70, lin, t, "🍹 CARDÁPIO (" + n + " frutas)"); g.restore();
     palavra("NÃO PRECISA SABER QUANTOS!", 640, 560 - 20, seg(t, es, es + .4), 40); } },
 { chip: "⚠️ CUIDADO", fala: F10, legenda: L[10], sfx: [[.1, "whoosh"], [em(F10, "seis"), "click"], [em(F10, "problema"), "alerta"], [em(F10, "existe"), "alerta"], [em(F10, "confira"), "ding"]],
   draw(t, D) { const s6 = em(F10, "seis"), pr = em(F10, "problema"), co = em(F10, "confira"); const LL = [...F4L, "banana"];
     g.save(); camera(t, [[0, 640, 360, 1], [s6, 900, 360, 1.2], [co, 640, 360, 1]]); fundoEscuro(t, t > pr && t < co ? "#7f1d1d" : "#1e3a8a"); LL.forEach((f, i) => cesta(170 + i * 160, 360, f, i + 1, 1)); if (t > s6) cesta(170 + 5 * 160, 360, null, 6, 1, t > pr, true);
     if (t > pr) { xVermelho(970, 330, 40, seg(t, pr, pr + .3)); } g.restore();
     bloco(300, 90, 680, "🔢 em lista frutas · obter # 6", "#7c3aed", seg(t, s6, s6 + .4), true); if (t > pr && t < co) palavra("A POSIÇÃO 6 NÃO EXISTE!", 640, 560 - 20, seg(t, pr, pr + .4), 42); if (t > co) placa("💡 antes de pedir, confira o tamanho", 640, 560 - 20, 1, "#0d9488", 24);
     caio({ x: 1180, y: 680, s: .6, braco: t > pr ? -2.6 : -.6, bracoE: t > pr ? 2.6 : .3, olhar: -1, boca: t > pr ? "o" : "", pisca: pisca(t) }); } },
 { chip: "O CARDÁPIO FICOU PRONTO", fala: F11, sfx: [[.1, "festa"], [em(F11, "fila"), "pop"], [em(F11, "Missão"), "festa"]],
   draw(t, D) { const fi = em(F11, "fila"), m = em(F11, "Missão"); g.save(); camera(t, [[0, 640, 300, 1.25], [fi, 640, 360, 1]]); fundoEscuro(t, "#7c2d12"); barraca(t, 120, 200, 760); [...F4L, "banana"].forEach((f, i) => cesta(200 + i * 140, 380, f, i + 1, 1));
     letreiro(920, 120, 300, 230, ["🍎 maçã", "🍇 uva", "🥭 caju", "🫐 açaí", "🍌 banana"], t); duda({ x: 500, y: 700, s: .7, braco: -2.2, bracoE: .3, olhar: 1, boca: "riso", pisca: pisca(t) });
     if (t > fi) for (let i = 0; i < 6; i++) pessoa(1260 - i * 70 + Math.sin(t * 3 + i) * 3, 690, .9, ["#0ea5e9", "#a855f7", "#22c55e", "#f59e0b", "#ef4444", "#14b8a6"][i]); g.restore(); if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "playlist"), "pop"], [em(F12, "carrinho"), "pop"], [em(F12, "histórico"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["playlist", "🎵", "Playlist:", "toca uma por vez (percorrer)"], ["carrinho", "🛒", "Carrinho da loja:", "entra no fim · tamanho"], ["histórico", "🕘", "Histórico do navegador:", "sites em ordem"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 2", [CAIO, MENINA7]); } }
];
// bonequinho vivo também nas cenas do código (padrão: personagem presente e reagindo)
[[2, 1205], [4, 1050], [6, 1210], [8, 1000], [9, 200]].forEach(([i, x]) => { const c = CENAS[i], d0 = c.draw; c.draw = function (t, D) { d0.call(this, t, D); g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  (i === 9 ? caio : duda)({ x, y: 575, s: .78, olhar: x < 640 ? 1 : -1, braco: -1.2 + Math.sin(t * 2.2) * .5, bracoE: .3, boca: Math.sin(t * 1.7) > .4 ? "riso" : "", pisca: pisca(t + i) }); g.restore(); }; });

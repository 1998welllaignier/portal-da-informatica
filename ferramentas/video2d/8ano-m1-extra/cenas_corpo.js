/* ================= 8º ano · Missão 1 · VÍDEO EXTRA (explicado para criança) ================= */
const BIAX = { camisa: "#f97316", cabelo: "longo" };
const biaX = o => boneco(Object.assign({}, BIAX, o));
// ---- tempo pela fala real (sincroniza desenho, efeitos e legenda com a voz) ----
let CUR = 0;
const nw = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
function wt(i, n) { const F = window.FALA && window.FALA[i]; if (!F) return .3 + n / 2.55; if (F.w) return F.w[Math.min(n, F.w.length - 1)];
  let alvo = F.cs[Math.min(n, F.cs.length - 1)] / F.tot * F.S; for (const [a, b] of F.iv) { if (alvo <= b - a) return a + alvo; alvo -= b - a; } return F.iv[F.iv.length - 1][1]; }
function A(m, occ) { occ = occ || 1; const i = CUR; const ws = FALAS[i].split(/\s+/).map(nw), ms = m.split(/\s+/).map(nw); let c = 0;
  for (let k = 0; k + ms.length <= ws.length; k++) if (ms.every((x, j) => ws[k + j] === x) && ++c === occ) return wt(i, k);
  (window.__faltam = window.__faltam || []).push(i + ":" + m); return 0; }
const KK = (t, m, o, d) => seg(t, A(m, o), A(m, o) + (d || .4));
// ---- peças ----
function carta(v, x, y, cor, a, w) { if (a <= 0) return; g.save(); g.globalAlpha = cl(a); w = w || 104; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 60, w, 120, 16); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 4; rr(x - w / 2, y - 60, w, 120, 16); g.stroke();
  g.fillStyle = NAVY; g.font = `800 ${w < 90 ? 36 : 46}px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(v, x, y + 2); g.restore(); g.textBaseline = "alphabetic"; }
function posicoes(n, x0, dx, y, a, ini) { if (a <= 0) return; g.save(); g.globalAlpha = cl(a); g.fillStyle = "#cbd5e1"; g.font = `700 20px ${F}`; g.textAlign = "center"; for (let i = 0; i < n; i++) g.fillText("pos. " + ((ini || 1) + i), x0 + i * dx, y); g.restore(); }
function lupaY(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.strokeStyle = "#fde047"; g.lineWidth = 10; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.stroke(); g.lineCap = "round"; g.lineWidth = 14; g.beginPath(); g.moveTo(24, 24); g.lineTo(56, 56); g.stroke(); g.restore(); }
function contatos(nomes, rol, destaque) { g.fillStyle = "#fff"; rr(-100, -150, 200, 300, 14); g.fill(); g.save(); g.beginPath(); g.rect(-100, -150, 200, 300); g.clip();
  nomes.forEach((n, i) => { const y = -120 + i * 42 - rol; if (y < -170 || y > 170) return; if (n === destaque) { g.fillStyle = "#fde68a"; g.fillRect(-100, y - 22, 200, 40); } g.fillStyle = "#94a3b8"; g.beginPath(); g.arc(-70, y - 2, 13, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `700 18px ${F}`; g.textAlign = "left"; g.fillText(n, -48, y + 4); }); g.restore(); }
const NOMES = ["Ana", "Bruno", "Carla", "Davi", "Duda", "Enzo", "Fábio", "Gabi", "Heitor", "Iara", "João", "Lara", "Leo", "Lia", "Maria", "Nina", "Otávio", "Paulo"];
function trofeu(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#fbbf24"; g.beginPath(); g.moveTo(-40, -50); g.lineTo(40, -50); g.quadraticCurveTo(40, 20, 0, 24); g.quadraticCurveTo(-40, 20, -40, -50); g.fill(); g.fillRect(-8, 20, 16, 24); g.fillRect(-30, 42, 60, 12);
  g.strokeStyle = "#fbbf24"; g.lineWidth = 8; g.beginPath(); g.arc(-44, -26, 16, Math.PI * .5, Math.PI * 1.5); g.arc(44, -26, 16, Math.PI * 1.5, Math.PI * .5); g.stroke(); g.restore(); }
function bolhas(t, n) { for (let i = 0; i < (n || 10); i++) { const y = 560 - ((t * 55 + i * 70) % 440), x = 100 + (i * 137) % 1080; g.strokeStyle = "rgba(255,255,255,.3)"; g.lineWidth = 3; g.beginPath(); g.arc(x, y, 9 + (i % 3) * 8, 0, 7); g.stroke(); } }
function painel(txt, x, y, w, cor, k, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor || "#1b2c5a"; rr(-w / 2, -34, w, 68, 18); g.fill(); g.fillStyle = "#fff"; g.font = `800 ${tam || 32}px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; }
// régua de 1 a 100 (adivinhe o número)
function regua(lo, hi, chute, k, max) { max = max || 100; const x0 = 140, x1 = 1140, y = 330, X = v => x0 + (v - 1) / (max - 1) * (x1 - x0); g.globalAlpha = cl(k);
  g.fillStyle = "rgba(255,255,255,.15)"; rr(x0 - 10, y - 22, x1 - x0 + 20, 44, 22); g.fill(); g.fillStyle = "#4ade80"; rr(X(lo) - 8, y - 22, Math.max(16, X(hi) - X(lo) + 16), 44, 22); g.fill();
  g.fillStyle = "#fff"; g.font = `700 22px ${F}`; g.textAlign = "center"; g.fillText("1", x0, y + 52); g.fillText(String(max), x1, y + 52);
  g.fillStyle = "#bbf7d0"; g.font = `800 24px ${F}`; g.fillText(lo + " a " + hi, (X(lo) + X(hi)) / 2, y - 36);
  if (chute) { const xc = X(chute); g.fillStyle = AMAR; g.beginPath(); g.moveTo(xc, y + 26); g.lineTo(xc - 14, y + 50); g.lineTo(xc + 14, y + 50); g.fill(); g.font = `800 30px ${F}`; g.fillText(String(chute), xc, y + 86); }
  g.globalAlpha = 1; }
// fila de cartas com trocas: ordem = valores na ordem atual; trocas = [[iA, iB, k]] animadas
function filaTroca(base, trocas, x0, dx, y, cor, a, w) { const pos = base.map((v, i) => i);
  trocas.forEach(([i, j, k]) => { const vi = pos.indexOf(i), vj = pos.indexOf(j); });
  let ordem = base.slice(); const desenho = ordem.map((v, i) => ({ v, x: i }));
  trocas.forEach(([i, j, k]) => { const p = desenho.find(d => Math.round(d.x) === i && !d.lk), q = desenho.find(d => Math.round(d.x) === j && d !== p); if (!p || !q) return; const e = io(cl(k)); p.x = lerp(i, j, e); q.x = lerp(j, i, e); });
  desenho.forEach(d => carta(d.v, x0 + d.x * dx, y, cor ? cor(d.v) : "#fff", a, w)); }

const CENAS = [
 { chip: "", fala: FALAS[0], sfx: [[.05, "whoosh"], [.4, "pop"], [1.0, "tec"], ["criança", "festa"]],
   draw(t) { fundoEscuro(t, "#0f3d3e"); bolhas(t, 8); [6, 3, 9, 1, 5, 2].forEach((v, i) => { const k = seg(t, .3 + i * .1, .7 + i * .1); const ord = io(seg(t, 1.4, 2.4)); const alvo = [6, 3, 9, 1, 5, 2].slice().sort((a, b) => a - b).indexOf(v);
       carta(v, lerp(240 + i * 160, 240 + alvo * 160, ord), 290, ord >= 1 ? "#bbf7d0" : "#fff", k, 110); }); lupaY(lerp(200, 1080, (t * .3) % 1), 220, .8);
     abertura(t, "8º ANO · MISSÃO 1 · VÍDEO EXTRA", "Listas, bem devagarinho!", "BUSCAR E ORDENAR", "ATÉ UMA CRIANÇA ENTENDE!", A("Buscar")); } },
 { chip: "A BIA E O BIT", fala: FALAS[1], sfx: [["Bia.", "pop"], ["Bit,", "tec"], ["cartas", "voa"], ["três truques", "ding"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); const kb = KK(t, "Bia."), kr = KK(t, "Bit,");
     if (kb > 0) biaX({ x: 250, y: 560, s: 1.0, braco: t < A("Bit,") ? -2.4 + Math.sin(t * 8) * .3 : -1.0, bracoE: .3, pisca: pisca(t), boca: "sorri" });
     if (kr > 0) { g.globalAlpha = cl(kr); robozinho(1020, 470, 1.8, t, true); g.globalAlpha = 1; }
     etiqueta("BIA", 250, 180, 250, 250, kb); etiqueta("BIT, O ROBOZINHO", 1020, 200, 1020, 300, kr);
     [3, 7, 12, 18].forEach((v, i) => carta(v, 490 + i * 100, 380 + Math.sin(t * 2 + i) * 6, "#fff", KK(t, "cartas", 1, .3 + i * .1), 84));
     painel("3 TRUQUES!", 640, 200, 360, "#7c3aed", KK(t, "três truques"), 40); } },
 { chip: "O QUE É UMA LISTA?", fala: FALAS[2], sfx: [["lista?", "pop"], ["fila.", "voa"], ["posição.", "ding"], ["posição um.", "toque"], ["posição dois.", "toque"]],
   draw(t) { fundoEscuro(t, "#14532d"); palavra("LISTA", 640, 110, KK(t, "lista?"), 74); const L = [3, 7, 12, 18, 25, 31, 40, 52], x0 = 165, dx = 136;
     L.forEach((v, i) => carta(v, x0 + i * dx, 300, (i === 0 && t > A("posição um.")) || (i === 1 && t > A("posição dois.")) ? "#fde68a" : "#fff", KK(t, "fila.", 1, .3 + i * .08), 104));
     posicoes(8, x0, dx, 400, KK(t, "posição."), 1); if (t > A("posição.")) etiqueta("POSIÇÃO = O LUGAR NA FILA", 640, 500, x0 + 2 * dx, 410, KK(t, "posição."));
     if (t > A("posição um.")) etiqueta("POSIÇÃO 1", x0, 190, x0, 235, KK(t, "posição um.")); if (t > A("posição dois.")) etiqueta("POSIÇÃO 2", x0 + dx + 40, 150, x0 + dx, 235, KK(t, "posição dois.")); } },
 { chip: "TRUQUE 1 · BUSCA SEQUENCIAL", fala: FALAS[3], sfx: [["busca sequencial.", "ding"], ["três.", "toque"], ["sete.", "toque"], ["Doze...", "toque"], ["dezoito...", "toque"], ["vinte", "toque"], ["Achou!", "festa"]],
   draw(t) { fundoEscuro(t, "#14532d"); palavra("BUSCA SEQUENCIAL", 640, 100, KK(t, "busca sequencial."), 60); if (t > A("Sequencial")) rotulo("= UM DEPOIS DO OUTRO", 640, 150, AMAR, KK(t, "Sequencial"));
     const L = [3, 7, 12, 18, 25, 31, 40, 52], x0 = 165, dx = 136, mk = [A("três."), A("sete."), A("Doze..."), A("dezoito..."), A("vinte"), A("trinta", 2)];
     let p = -1; mk.forEach((m, i) => { if (t >= m) p = i; });
     L.forEach((v, i) => carta(v, x0 + i * dx, 320, i === 5 && p === 5 ? "#bbf7d0" : (i < p ? "#94a3b8" : "#fff"), 1, 104));
     comando("PROCURANDO: 31", 220, 200, KK(t, "achar a carta"), "#2563eb", 260); if (p >= 0) { lupaY(x0 + p * dx, 440, .6); if (p < 5) xVermelho(x0 + p * dx, 250, 18, seg(t, mk[p] + .3, mk[p] + .6)); }
     if (p === 5) { visto(x0 + 5 * dx, 230, 26, KK(t, "Achou!")); palavra("ACHOU!", 900, 200, KK(t, "Achou!"), 60); } } },
 { chip: "COMPARAÇÕES", fala: FALAS[4], sfx: [["Seis.", "ding"], ["comparação.", "pop"], ["bagunçada.", "voa"], ["ufa,", "alerta"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); const L = [3, 7, 12, 18, 25, 31], x0 = 240, dx = 160, km = A("mil");
     if (t < km) { L.forEach((v, i) => { carta(v, x0 + i * dx, 300, i === 5 ? "#bbf7d0" : "#e2e8f0", 1, 104); const kc = seg(t, A("Seis.") + i * .15, A("Seis.") + i * .15 + .3); if (kc > 0) painel(String(i + 1), x0 + i * dx, 190, 60, "#2563eb", kc, 30); });
       painel("6 COMPARAÇÕES", 640, 440, 420, "#7c3aed", KK(t, "comparação."), 36); if (t > A("é essa?")) { g.globalAlpha = 1; balao("É ESSA?", 900, 110, KK(t, "é essa?")); }
       if (t > A("qualquer")) etiqueta("FUNCIONA EM QUALQUER LISTA", 640, 520, 640, 470, KK(t, "qualquer") * (1 - seg(t, km - .3, km))); }
     else { const kk = seg(t, km, km + .6); for (let i = 0; i < 40; i++) carta(String(i * 7 % 97 + 1), 80 + i * 70 - ((t - km) * 120) % 70, 300, "#fff", kk, 60);
       painel("1.000 CARTAS!", 640, 160, 400, "#dc2626", kk, 40); g.globalAlpha = 1; robozinho(640, 520, 1.1, t * 3, false); if (t > A("ufa,")) palavra("UFA!", 820, 450, KK(t, "ufa,"), 56); } } },
 { chip: "TRUQUE 2 · BUSCA BINÁRIA", fala: FALAS[5], sfx: [["busca binária.", "ding"], ["duas metades.", "sumiu"], ["regra de ouro:", "sino"], ["Sem ordem,", "alerta"]],
   draw(t) { fundoEscuro(t, "#3b1c6e"); palavra("BUSCA BINÁRIA", 640, 100, KK(t, "busca binária."), 64); if (t > A("Binário")) rotulo("BINÁRIO = DE DOIS", 640, 150, AMAR, KK(t, "Binário"));
     const L = [3, 7, 12, 18, 25, 31, 40, 52], dx = 130, ks = io(KK(t, "duas metades.", 1, .8)), so = A("Sem ordem,");
     const vals = t > so ? [40, 3, 52, 18, 7, 31, 12, 25] : L;
     vals.forEach((v, i) => carta(v, 185 + i * dx + (i < 4 ? -40 : 40) * ks, 300, t > A("regra de ouro:") && t < so ? "#bbf7d0" : "#fff", 1, 98));
     if (ks > 0 && t < A("regra de ouro:")) { etiqueta("METADE 1", 380 - 40, 450, 380 - 40, 370, ks); etiqueta("METADE 2", 900 + 40, 450, 900 + 40, 370, ks); }
     if (t > A("regra de ouro:") && t < so) painel("⭐ REGRA DE OURO: EM ORDEM!", 640, 470, 640, "#b45309", KK(t, "regra de ouro:"), 34);
     if (t > so) { xVermelho(640, 300, 90, KK(t, "Sem ordem,")); painel("SEM ORDEM, NÃO TEM TRUQUE!", 640, 470, 620, "#991b1b", KK(t, "Sem ordem,"), 32); } } },
 { chip: "ACHAR O MEIO", fala: FALAS[6], legenda: LEGS[6], sfx: [["continha", "pop"], ["Um mais oito,", "toque"], ["quatro e meio.", "ding"], ["Joga fora", "sumiu"], ["posição quatro.", "festa"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); const x0 = 165, dx = 136, kp = A("posição quatro."), kh = A("posição um até");
     for (let i = 0; i < 8; i++) { const ponta = (i === 0 || i === 7) && t > kh; g.fillStyle = ponta ? "#fde68a" : i === 3 && t > kp ? "#bbf7d0" : "rgba(255,255,255,.14)"; rr(x0 + i * dx - 52, 150, 104, 70, 12); g.fill();
       g.fillStyle = ponta || (i === 3 && t > kp) ? NAVY : "#fff"; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), x0 + i * dx, 197); }
     rotulo("POSIÇÕES", 640, 130, "#cbd5e1", seg(t, .2, .6)); painel("PRIMEIRA + ÚLTIMA, DIVIDIDO POR 2", 640, 280, 700, "#334155", KK(t, "some"), 30);
     comando("1 + 8 = 9", 330, 380, KK(t, "Um mais oito,"), "#2563eb", 240); comando("9 ÷ 2 = 4,5", 640, 380, KK(t, "Nove dividido"), "#7c3aed", 260);
     if (t > A("Joga fora")) { comando("4", 950, 380, KK(t, "Joga fora"), "#16a34a", 120); etiqueta("JOGA FORA O ,5", 950, 480, 950, 420, KK(t, "Joga fora")); }
     if (t > kp) etiqueta("MEIO = POSIÇÃO 4", x0 + 3 * dx, 70, x0 + 3 * dx, 145, KK(t, "posição quatro.")); } },
 { chip: "O MEIO É O 18", fala: FALAS[7], legenda: LEGS[7], sfx: [["dezoito.", "ding"], ["maior que dezoito.", "pop"], ["tchau:", "sumiu"]],
   draw(t) { fundoEscuro(t, "#3b1c6e"); const L = [3, 7, 12, 18, 25, 31, 40, 52], x0 = 165, dx = 136, fora = io(KK(t, "tchau:", 1, .9));
     L.forEach((v, i) => carta(v, x0 + i * dx - (i < 4 ? fora * 500 : 0), 300, i === 3 ? "#fde68a" : "#fff", i < 4 ? 1 - fora : 1, 104)); posicoes(8, x0, dx, 400, 1 - fora * .0, 1);
     comando("PROCURANDO: 31", 220, 180, seg(t, .2, .6), "#7c3aed", 260); if (t < A("tchau:")) etiqueta("MEIO: 18", x0 + 3 * dx, 490, x0 + 3 * dx, 415, KK(t, "dezoito."));
     painel("31 É MAIOR QUE 18", 820, 180, 420, "#2563eb", KK(t, "maior que dezoito."), 32);
     if (t > A("Então")) { g.globalAlpha = 1; balao("NÃO PODE ESTAR ANTES!", 900, 100, KK(t, "Então") * (1 - seg(t, A("tchau:") + .8, A("tchau:") + 1.1))); }
     if (t > A("tchau:")) palavra("TCHAU, METADE DA ESQUERDA!", 640, 520, KK(t, "tchau:"), 44); } },
 { chip: "ACHOU EM 2 TENTATIVAS", fala: FALAS[8], legenda: LEGS[8], sfx: [["cinco mais oito,", "toque"], ["seis e meio.", "pop"], ["Achou", "festa"], ["foram seis!", "ding"]],
   draw(t) { fundoEscuro(t, "#3b1c6e"); const L = [25, 31, 40, 52], x0 = 300, dx = 180, ka = A("Achou");
     L.forEach((v, i) => carta(v, x0 + i * dx, 270, i === 1 && t > A("posição seis.", 2) ? (t > ka ? "#bbf7d0" : "#fde68a") : "#fff", 1, 120)); posicoes(4, x0, dx, 370, 1, 5);
     comando("5 + 8 = 13", 300, 450, KK(t, "cinco mais oito,"), "#2563eb", 240); comando("13 ÷ 2 = 6,5 → 6", 680, 450, KK(t, "Dividido"), "#7c3aed", 340);
     if (t > ka) { visto(x0 + dx, 175, 26, KK(t, "Achou")); painel("BINÁRIA: 2 TENTATIVAS", 420, 120, 440, "#16a34a", KK(t, "Achou"), 30); painel("SEQUENCIAL: 6", 880, 120, 320, "#475569", KK(t, "Na busca"), 30); } } },
 { chip: "E SE ESTIVER BAGUNÇADA?", fala: FALAS[9], legenda: LEGS[9], sfx: [["bagunçada?", "alerta"], ["jogaria", "sumiu"], ["foi embora!", "alerta"], ["Por isso", "ding"]],
   draw(t) { fundoEscuro(t, "#7f1d1d"); const L = [40, 31, 52, 7, 18, 3, 25, 12], x0 = 165, dx = 136, fora = io(KK(t, "jogaria", 1, .8));
     L.forEach((v, i) => carta(v, x0 + i * dx, 300, i === 3 && t > A("olharia") ? "#fde68a" : i === 1 && t > A("trinta") ? "#fecaca" : "#fff", i < 4 ? 1 - .7 * fora : 1, 104));
     comando("PROCURANDO: 31", 220, 180, seg(t, .2, .6), "#dc2626", 260); if (t > A("olharia") && t < A("jogaria")) etiqueta("MEIO: 7 (31 É MAIOR)", x0 + 3 * dx, 480, x0 + 3 * dx, 365, KK(t, "olharia"));
     if (t > A("trinta")) { xVermelho(x0 + dx, 300, 70, KK(t, "trinta")); etiqueta("O 31 FOI EMBORA JUNTO!", x0 + dx + 60, 470, x0 + dx, 365, KK(t, "trinta")); }
     painel("SÓ EM LISTA ORDENADA!", 760, 180, 520, "#991b1b", KK(t, "Por isso"), 34); } },
 { chip: "ADIVINHE O NÚMERO", fala: FALAS[10], legenda: LEGS[10], sfx: [["Adivinhe", "misterio"], ["chuta o meio.", "pop"], ["cinquenta.", "ding"], ["maior!", "toque"]],
   draw(t) { fundoEscuro(t, "#0e7490"); biaX({ x: 200, y: 560, s: .85, braco: -1.0, bracoE: .3, pisca: pisca(t), boca: t > A("maior!") ? "o" : "sorri" }); robozinho(1080, 500, 1.3, t, true);
     if (t > A("pensa")) { g.globalAlpha = cl(KK(t, "pensa")); pensamento(250, 150, 170, 100); g.globalAlpha = 1; palavra("?", 250, 168, KK(t, "pensa"), 60); }
     painel("1 A 100", 640, 120, 240, "#334155", KK(t, "um a cem"), 36); regua(1, 100, t > A("cinquenta.") ? 50 : 0, KK(t, "chuta o meio."));
     if (t > A("cem,")) comando("(1 + 100) ÷ 2 = 50", 640, 230, KK(t, "Um mais cem,"), "#7c3aed", 360);
     if (t > A("maior!")) { g.globalAlpha = 1; balao("MAIOR!", 330, 300, KK(t, "maior!")); } } },
 { chip: "SEMPRE NO MEIO", fala: FALAS[11], legenda: LEGS[11], sfx: [["setenta e cinco.", "pop"], ["menor!", "toque"], ["sessenta e dois.", "pop"], ["Maior!", "toque"], ["sessenta e oito.", "pop"], ["Maior!", "toque"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const st = [[51, 100, 0, 0], [51, 100, 75, A("setenta e cinco.")], [51, 74, 75, A("Sobrou", 2)], [51, 74, 62, A("sessenta e dois.")], [63, 74, 62, A("Sobrou", 3)], [63, 74, 68, A("sessenta e oito.")]];
     let s = st[0]; st.forEach(x => { if (t >= x[3]) s = x; }); regua(s[0], s[1], s[2], 1);
     const dica = t > A("Maior!", 2) ? "MAIOR!" : t > A("Maior!") ? "MAIOR!" : t > A("menor!") ? "MENOR!" : ""; const kd = t > A("Maior!", 2) ? KK(t, "Maior!", 2) : t > A("Maior!") ? KK(t, "Maior!") : KK(t, "menor!");
     if (dica) painel("BIA: " + dica, 640, 160, 320, dica === "MENOR!" ? "#dc2626" : "#16a34a", kd, 34);
     [[75, "menor!"], [62, "Maior!"], [68, "Maior!"]].forEach(([v, w], i) => { const tt = A(w, w === "Maior!" && i === 2 ? 2 : 1); if (t > tt) painel(v + (w === "menor!" ? " ↓" : " ↑"), 400 + i * 240, 500, 150, "#334155", seg(t, tt, tt + .3), 30); });
     robozinho(1130, 160, .8, t, true); } },
 { chip: "ACERTOU!", fala: FALAS[12], legenda: LEGS[12], sfx: [["setenta e um.", "pop"], ["Maior!", "toque"], ["setenta e três.", "pop"], ["Acertou!", "festa"], ["seis tentativas.", "ding"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const st = [[69, 74, 68, 0], [69, 74, 71, A("setenta e um.")], [72, 74, 71, A("Sobrou", 2)], [72, 74, 73, A("setenta e três.")]]; let s = st[0]; st.forEach(x => { if (t >= x[3]) s = x; }); regua(s[0], s[1], s[2], 1 - KK(t, "O número", 1, .5) * .7);
     if (t > A("Maior!") && t < A("Acertou!")) painel("BIA: MAIOR!", 640, 160, 320, "#16a34a", KK(t, "Maior!"), 34);
     if (t > A("Acertou!")) { palavra("ACERTOU: 73!", 640, 170, KK(t, "Acertou!"), 70); confete(t, A("Acertou!")); }
     if (t > A("seis tentativas.")) { [50, 75, 62, 68, 71, 73].forEach((v, i) => painel(String(v), 240 + i * 160, 500, 120, i === 5 ? "#16a34a" : "#334155", seg(t, A("seis tentativas.") + i * .12, A("seis tentativas.") + i * .12 + .3), 30)); rotulo("6 TENTATIVAS", 640, 445, AMAR, KK(t, "seis tentativas.")); }
     robozinho(1130, 160, .8, t * 2, true); } },
 { chip: "E COM MIL NÚMEROS?", fala: FALAS[13], legenda: LEGS[13], sfx: [["mil números?", "misterio"], ["quinhentos,", "sumiu"], ["duzentos", "sumiu"], ["cento", "sumiu"], ["dez tentativas,", "ding"], ["mil tentativas!", "alerta"]],
   draw(t) { fundoEscuro(t, "#14532d"); const v = [1000, 500, 250, 125, 63, 32, 16, 8, 4, 2, 1], t0 = A("mil,"), t1 = A("Em no máximo");
     v.forEach((n, i) => { const tt = i < 4 ? A(["mil,", "quinhentos,", "duzentos", "cento"][i]) : t0 + (t1 - t0) * (.75 + i * .025); const k = seg(t, tt, tt + .3); if (k <= 0) return; const w = Math.max(40, n * .9);
       g.globalAlpha = cl(k); g.fillStyle = i === 10 ? "#facc15" : "#4ade80"; rr(160, 140 + i * 30, w, 24, 8); g.fill(); g.fillStyle = "#fff"; g.font = `700 18px ${F}`; g.textAlign = "left"; g.fillText(n.toLocaleString("pt-BR"), 170 + w, 158 + i * 30); g.globalAlpha = 1; });
     painel("NO MÁXIMO 10 TENTATIVAS!", 860, 260, 470, "#16a34a", KK(t, "Em no máximo"), 32); painel("UM POR UM: ATÉ 1.000!", 860, 380, 470, "#dc2626", KK(t, "Olhando"), 32); } },
 { chip: "TRUQUE 3 · ORDENAR", fala: FALAS[14], sfx: [["ordenar.", "ding"], ["crescente,", "pop"], ["Decrescente,", "pop"], ["alfabética,", "pop"]],
   draw(t) { fundoEscuro(t, "#3b1c6e"); palavra("ORDENAR = COLOCAR EM ORDEM", 600, 112, KK(t, "Ordenar é"), 44);
     [["CRESCENTE", "do menor para o maior", "crescente,", [1, 2, 3, 4]], ["DECRESCENTE", "do maior para o menor", "Decrescente,", [4, 3, 2, 1]], ["ALFABÉTICA", "de A a Z", "alfabética,", null]].forEach(([n, sub, w, b], i) => { const k = back(KK(t, w)); if (k <= 0) return; const x = 240 + i * 400;
       g.save(); g.translate(x, 290); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-170, -110, 340, 220, 24); g.fill();
       if (b) b.forEach((v, j) => { g.fillStyle = "#4ade80"; rr(-110 + j * 60, 60 - v * 36, 44, v * 36, 6); g.fill(); }); else ["A", "B", "C", "D"].forEach((c, j) => { g.fillStyle = "#fff"; rr(-120 + j * 62, -30, 52, 60, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 32px ${F}`; g.textAlign = "center"; g.fillText(c, -94 + j * 62, 12); });
       g.restore(); cartao(n, x, 470, 340, "rgba(255,255,255,.12)", KK(t, w, 1, .5), sub); }); } },
 { chip: "MÉTODO DA BOLHA", fala: FALAS[15], sfx: [["método da bolha.", "ding"], ["vizinhos,", "pop"], ["troca.", "voa"], ["deixa", "toque"], ["passinho", "pop"]],
   draw(t) { fundoEscuro(t, "#0e7490"); bolhas(t, 12); palavra("MÉTODO DA BOLHA", 640, 100, KK(t, "método da bolha."), 64); const tr = io(KK(t, "troca.", 1, .8)), kd = A("deixa");
     if (t < kd) { carta(6, lerp(540, 740, tr), 300, "#fff", KK(t, "vizinhos,"), 120); carta(3, lerp(740, 540, tr), 300, "#fff", KK(t, "vizinhos,"), 120); if (t > A("fora de ordem,")) etiqueta(tr > .5 ? "TROCOU!" : "FORA DE ORDEM → TROCA", 640, 470, 640, 380, KK(t, "fora de ordem,")); }
     else { const ps = io(KK(t, "passinho", 1, .8)); [3, 6, 8].forEach((v, i) => carta(v, 440 + i * 200, 300, "#fff", 1, 120)); g.strokeStyle = AMAR; g.lineWidth = 6; rr(lerp(440, 640, ps) - 80, 220, 360, 160, 22); g.stroke();
       etiqueta(ps > .5 ? "ANDA UM PASSINHO E COMPARA DE NOVO" : "EM ORDEM → FICA", 640, 470, lerp(540, 740, ps), 385, KK(t, "deixa")); } } },
 { chip: "1ª PASSADA", fala: FALAS[16], legenda: LEGS[16], sfx: [["Troca!", "voa"], ["em ordem,", "toque"], ["troca!", "voa"], ["Fim", "ding"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const x0 = 340, dx = 200, s1 = io(KK(t, "Troca!", 1, .8)), s3 = io(KK(t, "troca!", 1, .8));
     const pos = { 6: 0 + s1, 3: 1 - s1, 9: 2 + s3, 1: 3 - s3 }; [6, 3, 9, 1].forEach(v => carta(v, x0 + pos[v] * dx, 300, v === 9 && t > A("Fim") ? "#bae6fd" : "#fff", KK(t, "assim:"), 130));
     const p1 = A("Seis e três:"), p2 = A("Seis e nove:"), p3 = A("Nove e um:"); const par = t < p2 ? 0 : t < p3 ? 1 : 2;
     if (t > p1 && t < A("Fim")) { g.strokeStyle = AMAR; g.lineWidth = 6; rr(x0 + par * dx - 80, 225, dx + 160, 150, 22); g.stroke();
       const txt = par === 0 ? (t > A("Troca!") ? "TROCA!" : "6 E 3: FORA DE ORDEM") : par === 1 ? "6 E 9: EM ORDEM, FICA" : (t > A("troca!") ? "TROCA!" : "9 E 1: FORA DE ORDEM"); etiqueta(txt, x0 + par * dx + dx / 2, 470, x0 + par * dx + dx / 2, 385, 1); }
     rotulo("1ª PASSADA", 640, 150, AMAR, KK(t, "Primeira passada!")); if (t > A("Fim")) painel("FIM DA 1ª PASSADA: 3, 6, 1, 9", 640, 480, 600, "#1b2c5a", KK(t, "Fim"), 32); } },
 { chip: "POR QUE BOLHA?", fala: FALAS[17], legenda: LEGS[17], sfx: [["subindo,", "voa"], ["bolha de sabão", "pop"], ["passada.", "ding"]],
   draw(t) { fundoEscuro(t, "#0e7490"); bolhas(t, 14); const x0 = 340, dx = 200; [3, 6, 1, 9].forEach((v, i) => carta(v, x0 + i * dx, 300 - (v === 9 ? 30 * Math.abs(Math.sin(t * 2)) : 0), v === 9 ? "#bae6fd" : "#fff", 1, 130));
     const kb = KK(t, "bolha de sabão", 1, .8); if (kb > 0) { g.strokeStyle = "rgba(255,255,255,.85)"; g.lineWidth = 5; g.beginPath(); g.arc(x0 + 3 * dx, 290, 92 + Math.sin(t * 4) * 4, 0, 7 * cl(kb)); g.stroke(); }
     etiqueta("O MAIOR SOBE PARA O FINAL", 760, 160, x0 + 3 * dx, 220, KK(t, "nove,"));
     if (t > A("E uma volta")) painel("PASSADA = UMA VOLTA INTEIRA PELA LISTA", 640, 480, 720, "#1b2c5a", KK(t, "E uma volta"), 30); } },
 { chip: "2ª PASSADA", fala: FALAS[18], legenda: LEGS[18], sfx: [["em ordem,", "toque"], ["troca!", "voa"], ["em ordem,", "toque"], ["lugar certo.", "ding"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const x0 = 340, dx = 200, s2 = io(KK(t, "troca!", 1, .8));
     const pos = { 3: 0, 6: 1 + s2, 1: 2 - s2, 9: 3 }; [3, 6, 1, 9].forEach(v => carta(v, x0 + pos[v] * dx, 300, v === 9 || (v === 6 && t > A("Agora")) ? "#bae6fd" : "#fff", 1, 130));
     const p1 = A("Três e seis:"), p2 = A("Seis e um:"), p3 = A("Seis e nove:"); const par = t < p2 ? 0 : t < p3 ? 1 : 2;
     if (t > p1 && t < A("Agora")) { g.strokeStyle = AMAR; g.lineWidth = 6; rr(x0 + par * dx - 80, 225, dx + 160, 150, 22); g.stroke();
       const txt = par === 0 ? "3 E 6: EM ORDEM, FICA" : par === 1 ? (t > A("troca!") ? "TROCA!" : "6 E 1: FORA DE ORDEM") : "6 E 9: EM ORDEM, FICA"; etiqueta(txt, x0 + par * dx + dx / 2, 470, x0 + par * dx + dx / 2, 385, 1); }
     rotulo("2ª PASSADA", 640, 150, AMAR, seg(t, .2, .6)); if (t > A("Agora")) painel("O 6 TAMBÉM CHEGOU NO LUGAR!", 640, 480, 560, "#1b2c5a", KK(t, "Agora"), 32); } },
 { chip: "3ª PASSADA", fala: FALAS[19], legenda: LEGS[19], sfx: [["troca!", "voa"], ["Pronto:", "ding"], ["Lista ordenada!", "festa"]],
   draw(t) { fundoEscuro(t, "#0e7490"); const x0 = 340, dx = 200, s = io(KK(t, "troca!", 1, .8)), ok = t > A("Pronto:");
     const pos = { 3: 0 + s, 1: 1 - s, 6: 2, 9: 3 }; [3, 1, 6, 9].forEach(v => carta(v, x0 + pos[v] * dx, 300, ok ? "#bbf7d0" : (v === 6 || v === 9 ? "#bae6fd" : "#fff"), 1, 130));
     if (t > A("Três e um:") && !ok) { g.strokeStyle = AMAR; g.lineWidth = 6; rr(x0 - 80, 225, dx + 160, 150, 22); g.stroke(); etiqueta(t > A("troca!") ? "TROCA!" : "3 E 1: FORA DE ORDEM", x0 + dx / 2, 470, x0 + dx / 2, 385, 1); }
     rotulo("3ª PASSADA", 640, 150, AMAR, seg(t, .2, .6)); if (ok) { palavra("LISTA ORDENADA!", 640, 490, KK(t, "Lista ordenada!"), 62); visto(1110, 300, 30, KK(t, "Pronto:")); confete(t, A("Lista ordenada!")); } } },
 { chip: "QUANTAS PASSADAS?", fala: FALAS[20], legenda: LEGS[20], sfx: [["passadas", "pop"], ["quatro cartas,", "ding"], ["sinal", "alerta"], ["já está em ordem.", "festa"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); palavra("QUANTAS PASSADAS?", 620, 112, seg(t, .2, .6), 52);
     painel("CADA PASSADA: O MAIOR VAI PARA O FIM", 640, 200, 700, "#334155", KK(t, "A cada"), 30);
     painel("4 CARTAS → 3 PASSADAS", 640, 300, 520, "#7c3aed", KK(t, "quatro cartas,"), 36); if (t > A("sempre")) rotulo("PASSADAS = CARTAS − 1", 640, 370, AMAR, KK(t, "sempre"));
     if (t > A("sinal")) painel("PASSADA SEM NENHUMA TROCA = ACABOU!", 640, 470, 720, "#16a34a", KK(t, "sinal"), 30); } },
 { chip: "OS 3 TRUQUES", fala: FALAS[21], sfx: [["Busca sequencial:", "pop"], ["Busca binária:", "pop"], ["Método da bolha:", "pop"]],
   draw(t) { fundoEscuro(t, "#3b1c6e"); [["BUSCA SEQUENCIAL", "um por um · qualquer lista", "Busca sequencial:"], ["BUSCA BINÁRIA", "olha o meio · só lista ordenada", "Busca binária:"], ["MÉTODO DA BOLHA", "compara vizinhos e troca", "Método da bolha:"]].forEach(([n, sub, w], i) => { const k = back(KK(t, w)); if (k <= 0) return; const x = 240 + i * 400;
       g.save(); g.translate(x, 280); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-170, -130, 340, 260, 24); g.fill();
       if (i === 0) { [0, 1, 2, 3].forEach(j => carta(j + 1, -105 + j * 70, 10, "#fff", 1, 56)); lupaY(-40, 40, .5); } else if (i === 1) { [0, 1, 2, 3].forEach(j => carta(j + 1, -105 + j * 70, 10, j === 1 ? "#fde68a" : "#fff", j < 2 ? .4 : 1, 56)); } else { g.strokeStyle = "rgba(255,255,255,.8)"; g.lineWidth = 4; [[-60, 20, 34], [30, -30, 24], [70, 40, 16]].forEach(([a, b, r]) => { g.beginPath(); g.arc(a, b + Math.sin(t * 3 + a) * 6, r, 0, 7); g.stroke(); }); }
       g.restore(); cartao(n, x, 480, 360, "rgba(255,255,255,.12)", KK(t, w, 1, .5), sub); }); } },
 { chip: "ONDE EU USO ISSO?", fala: FALAS[22], sfx: [["contatos", "pop"], ["tabela", "pop"], ["botão", "pop"], ["piscar", "festa"]],
   draw(t) { fundoEscuro(t, "#1e3a8a"); [["CONTATOS", "ordem alfabética", "contatos"], ["CAMPEONATO", "ordem de pontos", "tabela"], ["LOJA ON-LINE", "menor preço", "botão"]].forEach(([n, sub, w], i) => { const k = back(KK(t, w)); if (k <= 0) return; const x = 240 + i * 400;
     g.save(); g.translate(x, 290); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-160, -150, 320, 300, 26); g.fill();
     if (i === 0) celular(0, 0, .5, () => contatos(NOMES, 0)); else if (i === 1) trofeu(0, 0, 1.6); else { g.fillStyle = "#fff"; rr(-120, -90, 240, 180, 14); g.fill(); ["R$ 9", "R$ 15", "R$ 22"].forEach((p2, j) => { g.fillStyle = j ? "#334155" : "#16a34a"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(p2, 0, -40 + j * 50); }); }
     g.restore(); cartao(n, x, 490, 320, "rgba(255,255,255,.12)", KK(t, w, 1, .5), sub); }); } },
 { chip: "", fala: FALAS[23], sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t) { fimCartao(t, "8º ano · Missão 1 · Vídeo extra", [BIAX, { camisa: "#16a34a" }]); } }
];

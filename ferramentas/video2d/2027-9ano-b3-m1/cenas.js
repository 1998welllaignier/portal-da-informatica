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
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
const R = (o) => rafa(o), J = (o) => julia(o);
// poste de luz: on = acesa
function poste(x, y, s, on, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#475569"; g.fillRect(-6, -190, 12, 190); g.fillRect(-6, -190, 50, 10); g.fillStyle = "#334155"; rr(24, -184, 40, 18, 8); g.fill();
  if (on) { const gr = g.createRadialGradient(44, -160, 4, 44, -120, 120); gr.addColorStop(0, "rgba(253,224,71,.65)"); gr.addColorStop(1, "rgba(253,224,71,0)"); g.fillStyle = gr; g.beginPath(); g.moveTo(34, -166); g.lineTo(54, -166); g.lineTo(130, 0); g.lineTo(-40, 0); g.closePath(); g.fill(); g.fillStyle = "#fde047"; rr(26, -176, 36, 14, 7); g.fill(); }
  else { g.fillStyle = "#1e293b"; rr(26, -176, 36, 14, 7); g.fill(); } g.restore(); }
// cidade ao fundo em camadas (parallax leve): prédios distantes e próximos + chão
function cidadeFundo(t, cor) { const o = Math.sin(t * .4) * 6;
  [[60, "#1e293b", .75], [250, "#273449", .9], [470, "#1e293b", .7], [690, "#2a3a52", .95], [900, "#1e293b", .8], [1110, "#273449", .9], [1250, "#1e293b", .7]].forEach(([x, c, s]) => predio(x + o * .5, 470, s, c));
  g.fillStyle = cor || "#0f172a"; g.fillRect(-200, 470, 1700, 400); g.fillStyle = "#1e293b"; g.fillRect(-200, 470, 1700, 8); }
function fone(x, y, s, tela) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-70, -130, 140, 260, 22); g.fill(); g.fillStyle = "#e0f2fe"; rr(-58, -112, 116, 224, 12); g.fill(); tela && tela(); g.restore(); }
// cartão de tipo (emoji grande + nome + exemplo em até 2 linhas)
function cardTipo(x, y, w, e, nome, ex, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.3)"; g.shadowBlur = 14; rr(-w / 2, 0, w, 270, 22); g.fill(); g.shadowBlur = 0; g.strokeStyle = NAVY; g.lineWidth = 4; g.stroke();
  emo(e, 0, 96, 84); g.fillStyle = NAVY; g.textAlign = "center"; g.font = `900 28px ${F}`; g.fillText(nome, 0, 150); g.font = `700 19px ${F}`; ex.forEach((s, i) => g.fillText(s, 0, 190 + i * 28)); g.restore(); }
function vfLista(t, itens, tt, rr_, base) { itens.forEach(([s, v, c], i) => { const y = 170 + i * 105; cartaoC(s, 360, y, 620, "#fff", seg(t, tt[i], tt[i] + .4)); if (t > rr_[i]) comando(v, 960, y, seg(t, rr_[i], rr_[i] + .4), c, 300); }); }
function medidor(x, y, w, p, cor, k) { if (!(k > 0)) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = "#1e293b"; rr(x - w / 2, y, w, 26, 13); g.fill(); g.fillStyle = cor; rr(x - w / 2, y, Math.max(26, w * Math.min(1, p)), 26, 13); g.fill(); g.restore(); }
const F0 = "Problemas de Curionópolis: vamos pensar como quem resolve!",
  F1 = "Toda cidade tem problemas: buraco na rua, lâmpada queimada, lixo fora de hora, ônibus atrasado, internet fraca. Uma noite, o Rafa volta da escola e a rua está escura: as lâmpadas dos postes queimaram! A Júlia diz: calma, vamos pensar como quem resolve.",
  F2 = "Primeiro passo: observar. Liste os problemas que você vê. Segundo: escolher um problema só, como as lâmpadas queimadas dos postes. Terceiro: descobrir quem é afetado, quem sofre as consequências: quem volta da escola ou do trabalho à noite.",
  F3 = "Quarto passo: pensar nos dados que ajudariam: onde está cada poste e há quanto tempo está apagado. Quinto: imaginar uma solução com tecnologia, como um aplicativo para avisar a lâmpada queimada, com foto e localização. Sexto: testar. Mostre a ideia para as pessoas e melhore: pergunte aos vizinhos se usariam o aplicativo.",
  F4 = "Esse jeito de pensar tem nome. Decomposição é dividir um problema grande em partes menores. E pensamento computacional é resolver problemas dividindo em partes, achando padrões e criando passos, como um programador. Só que a serviço da cidade!",
  F5 = "Atenção: a tecnologia nem sempre é a resposta! Às vezes, a solução é uma conversa, um cartaz ou uma reunião com a associação do bairro. A tecnologia ajuda quando organiza informações, avisa as pessoas certas ou mostra os dados.",
  F6 = "Veja os tipos de solução. O aplicativo avisa e recebe pedidos, como pedir o conserto de um buraco com foto. O mapa colaborativo é um mapa na internet em que várias pessoas marcam informações, como as lâmpadas queimadas espalhadas pela cidade. A planilha é uma tabela no computador que organiza e conta os casos, quando há muitos pedidos de conserto sem controle.",
  F7 = "O sensor é um aparelho que mede algo sozinho, como a chuva, a temperatura ou o nível do rio. Ele ajuda quando o rio sobe com a chuva e ninguém percebe a tempo. E a mensagem automática avisa muita gente ao mesmo tempo, como quando muda o horário do ônibus escolar.",
  F8 = "Hora de testar! Decomposição é juntar vários problemas num só: falso. Saber quem é afetado ajuda a criar uma boa solução: verdadeiro. A tecnologia sempre é a melhor resposta: falso. O mapa colaborativo deixa várias pessoas marcarem informações: verdadeiro.",
  F9 = "Hora de juntar tudo! O Rafa observou, escolheu as lâmpadas, descobriu quem sofre, pensou nos dados, imaginou um aplicativo com foto e localização e testou com os vizinhos. Ele pensou como quem resolve. Missão cumprida!",
  F10 = "Onde eu uso isso? No caminho de casa para a escola: que problema você vê todo dia? Num projeto da escola, para melhorar o bairro. E ao conversar com a associação de moradores.",
  F11 = "Agora é com vocês: abram a Missão 1 no portal!";
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "alerta"], [1.4, "misterio"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e1b4b"); g.save(); camera(t, [[0, 640, 330, 1.1], [3.2, 640, 330, 1]]); cidadeFundo(t);
     [160, 400, 640, 880, 1120].forEach((x, i) => poste(x, 540, .95, t < .5 + i * .45, t)); emo("❓", 640, 300, 120 * back(seg(t, 1.4, 2)));
     R({ x: 300, y: 600, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: t > 1.2 ? "o" : "riso", pisca: pisca(t) }); g.restore();
     abertura(t, "9º ANO · 3º BIM. · MISSÃO 1", "Problemas de Curionópolis", "A RUA FICOU ESCURA!", "COMO RESOLVER?", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "buraco"), "pop"], [em(F1, "lâmpada"), "pop"], [em(F1, "lixo"), "pop"], [em(F1, "ônibus"), "pop"], [em(F1, "internet"), "pop"], [em(F1, "escura"), "alerta"], [em(F1, "pensar"), "ding"]],
   draw(t, D) { const it = [["🕳️", "buraco na rua", "buraco"], ["💡", "lâmpada queimada", "lâmpada"], ["🗑️", "lixo fora de hora", "lixo"], ["🚌", "ônibus atrasado", "ônibus"], ["📶", "internet fraca", "internet"]], es = em(F1, "escura"), pe = em(F1, "pensar"); fundoEscuro(t, "#1e1b4b"); g.save(); camera(t, [[0, 640, 340, 1], [es, 640, 335, 1.03], [pe, 640, 340, 1]]); cidadeFundo(t);
     [420, 640, 860].forEach(x => poste(x, 540, .9, false, t)); it.forEach(([e, s, w], i) => { const k = seg(t, em(F1, w), em(F1, w) + .4); emo(e, 140 + i * 250, 200, 56 * back(cl(k))); caixa(140 + i * 250, 250, s, "#fff", k, 232); });
     R({ x: lerp(120, 330, seg(t, es - 1.5, es)), y: 560, s: .8, olhar: 1, braco: .3, bracoE: .3, perna: Math.sin(t * 8) * .3 * (t < es ? 1 : 0), boca: t > es ? "o" : "riso", pisca: pisca(t) });
     J({ x: 1100, y: 560, s: .8, olhar: -1, braco: t > pe - .5 ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore();
     if (t > es) palavra("RUA ESCURA!", 560, 90, seg(t, es, es + .4), 60); if (t > pe) balao("Vamos pensar como quem resolve!", 880, 360, seg(t, pe, pe + .4)); } },
 { chip: "PASSOS 1, 2 E 3", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Primeiro"), "ding"], [em(F2, "Segundo"), "ding"], [em(F2, "Terceiro"), "ding"], [em(F2, "afetado"), "pop"]],
   draw(t, D) { const p1 = em(F2, "Primeiro"), p2 = em(F2, "Segundo"), p3 = em(F2, "Terceiro"), af = em(F2, "afetado"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [p2, 640, 335, 1.03], [af, 640, 340, 1]]);
     passo(1, "Observar: listar os problemas", 50, 200, 760, seg(t, p1, p1 + .4), t < p2); passo(2, "Escolher um problema só", 50, 290, 760, seg(t, p2, p2 + .4), t >= p2 && t < p3); passo(3, "Quem é afetado?", 50, 380, 760, seg(t, p3, p3 + .4), t >= p3);
     g.fillStyle = "rgba(255,255,255,.14)"; rr(850, 170, 380, 300, 24); g.fill();
     if (t < p2) { emo("🏙️", 1040, 330, 110); lupa(1100 + Math.sin(t * 3) * 14, 380, 1.2); } else if (t < p3) { poste(1000, 440, 1, false, t); xVermelho(1130, 300, 24, seg(t, p2 + .5, p2 + .9)); etiqueta("lâmpadas queimadas", 1050, 215, 1030, 290, seg(t, p2 + .3, p2 + .7)); }
     else { emo("🚶", 1000, 380, 100 * back(seg(t, p3, p3 + .4))); emo("🎒", 1110, 380, 70 * back(seg(t, p3 + .3, p3 + .7))); etiqueta("afetado", 1050, 215, 1020, 300, seg(t, af, af + .4)); }
     R({ x: 110, y: 580, s: .6, olhar: 1, braco: t > af ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore(); palavra(t >= af ? "AFETADO" : t >= p2 ? "ESCOLHER" : "OBSERVAR", 560, 90, seg(t, 0, .4), 64); } },
 { chip: "PASSOS 4, 5 E 6", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Quarto"), "ding"], [em(F3, "Quinto"), "ding"], [em(F3, "Sexto"), "ding"], [em(F3, "foto"), "pop"], [em(F3, "vizinhos"), "pop"]],
   draw(t, D) { const q4 = em(F3, "Quarto"), q5 = em(F3, "Quinto"), s6 = em(F3, "Sexto"), fo = em(F3, "foto"), vz = em(F3, "vizinhos"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [q5, 640, 335, 1.03], [vz, 640, 340, 1]]);
     passo(4, "Que dados ajudariam?", 50, 200, 760, seg(t, q4, q4 + .4), t < q5); passo(5, "Que solução com tecnologia?", 50, 290, 760, seg(t, q5, q5 + .4), t >= q5 && t < s6); passo(6, "Testar e melhorar", 50, 380, 760, seg(t, s6, s6 + .4), t >= s6);
     g.fillStyle = "rgba(255,255,255,.14)"; rr(850, 150, 380, 330, 24); g.fill();
     if (t < q5) { caixa(1040, 250, "📍 onde está o poste", "#fff", seg(t, q4 + .5, q4 + .9), 330); caixa(1040, 340, "⏳ há quanto tempo apagado", "#fde68a", seg(t, q4 + 1.3, q4 + 1.7), 340); }
     else if (t < s6) { fone(1040, 320, 1, () => { emo("📷", 0, -30, 70); if (t > fo) emo("📍", 0, 60, 60 * back(seg(t, fo, fo + .4))); }); etiqueta("foto e localização", 1040, 200, 1040, 255, seg(t, fo, fo + .4)); }
     else { emo("🏘️", 1040, 320, 110); emo("👍", 1130, 400, 70 * back(seg(t, vz, vz + .4))); }
     R({ x: 110, y: 580, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 700, y: 590, s: .55, olhar: 1, braco: t > vz ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= s6 ? "TESTAR" : t >= q5 ? "SOLUÇÃO" : "DADOS", 560, 90, seg(t, 0, .4), 64); } },
 { chip: "DECOMPOSIÇÃO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "Decomposição"), "ding"], [em(F4, "menores"), "pop"], [em(F4, "pensamento"), "ding"], [em(F4, "programador"), "pop"], [em(F4, "cidade"), "festa"]],
   draw(t, D) { const de = em(F4, "Decomposição"), me = em(F4, "menores"), pc = em(F4, "pensamento"), pr = em(F4, "programador"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [me, 640, 335, 1.03], [pc, 640, 340, 1]]);
     if (t < me + .3) cartaoC("🌃 Rua escura à noite", 640, 240, 560, "#fecaca", seg(t, de + .8, de + 1.2));
     else [["📍 Onde estão os postes?", 240, "#bfdbfe"], ["👥 Quem sofre?", 640, "#fde68a"], ["📲 Qual solução?", 1040, "#bbf7d0"]].forEach(([s, x, c], i) => cartaoC(s, lerp(640, x, io2(seg(t, me + .3, me + 1))), 270, 340, c, seg(t, me + .3 + i * .1, me + .7 + i * .1)));
     if (t > pc) [["🧩 dividir em partes", 340], ["🔎 achar padrões", 640], ["📋 criar passos", 940]].forEach(([s, x], i) => caixa(x, 450, s, "#fff", seg(t, pc + .4 + i * .5, pc + .8 + i * .5), 270));
     J({ x: 110, y: 580, s: .6, olhar: 1, braco: t > me ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); R({ x: 1170, y: 580, s: .6, olhar: -1, braco: .3, bracoE: .3, boca: t > pr ? "riso" : "o", pisca: pisca(t + .5) }); g.restore();
     palavra(t >= pc ? "PENSAMENTO COMPUTACIONAL" : "DECOMPOSIÇÃO", 560, 90, seg(t, t >= pc ? pc : de, (t >= pc ? pc : de) + .4), t >= pc ? 50 : 66); } },
 { chip: "NEM SEMPRE É TECNOLOGIA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Atenção"), "alerta"], [em(F5, "conversa"), "pop"], [em(F5, "cartaz"), "pop"], [em(F5, "reunião"), "pop"], [em(F5, "ajuda"), "ding"]],
   draw(t, D) { const at = em(F5, "Atenção"), cv = em(F5, "conversa"), ca = em(F5, "cartaz"), re = em(F5, "reunião"), aj = em(F5, "ajuda"), av = em(F5, "avisa"), mo = em(F5, "mostra"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 340, 1], [re, 640, 335, 1.03], [aj, 640, 340, 1]]);
     cardTipo(240, 130, 340, "💬", "Uma conversa", ["sem aplicativo"], "#fff", seg(t, cv, cv + .4)); cardTipo(640, 130, 340, "🪧", "Um cartaz", ["sem aplicativo"], "#fff", seg(t, ca, ca + .4)); cardTipo(1040, 130, 340, "🤝", "Uma reunião", ["com a associação", "do bairro"], "#fff", seg(t, re, re + .4));
     [["📦 organiza informações", 270, 310, aj + .3], ["📣 avisa as pessoas certas", 610, 340, av], ["📊 mostra os dados", 950, 270, mo]].forEach(([s, x, w, tt]) => caixa(x, 470, s, "#bbf7d0", seg(t, tt, tt + .4), w));
     R({ x: 70, y: 600, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); J({ x: 1210, y: 600, s: .5, olhar: -1, braco: t > aj ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t > aj ? "TECNOLOGIA AJUDA" : "NEM SEMPRE!", 560, 90, seg(t, t > aj ? aj : 0, (t > aj ? aj : 0) + .4), 60); } },
 { chip: "TIPOS DE SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "aplicativo"), "pop"], [em(F6, "mapa"), "pop"], [em(F6, "planilha"), "pop"], [em(F6, "foto"), "ding"]],
   draw(t, D) { const ap = em(F6, "aplicativo"), ma = em(F6, "mapa"), pl = em(F6, "planilha"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [ma, 640, 335, 1.03], [pl, 640, 340, 1]]);
     cardTipo(230, 130, 380, "📲", "Aplicativo", ["pedir o conserto de", "um buraco com foto"], "#fff", seg(t, ap, ap + .4)); cardTipo(640, 130, 380, "🗺️", "Mapa colaborativo", ["lâmpadas queimadas", "espalhadas pela cidade"], "#fde68a", seg(t, ma, ma + .4)); cardTipo(1050, 130, 380, "📋", "Planilha", ["muitos pedidos de", "conserto sem controle"], "#bbf7d0", seg(t, pl, pl + .4));
     [[560, 90], [620, 110], [700, 95]].forEach(([x, y], i) => { const k = seg(t, ma + .6 + i * .3, ma + 1 + i * .3); if (k > 0) emo("📍", [545, 735, 560][i], [250, 250, 190][i], 34 * back(cl(k))); });
     R({ x: 330, y: 600, s: .55, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 950, y: 600, s: .55, olhar: -1, braco: t > pl ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= pl ? "PLANILHA" : t >= ma ? "MAPA COLABORATIVO" : "APLICATIVO", 560, 90, seg(t, 0, .4), 56); } },
 { chip: "MAIS SOLUÇÕES", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "sensor"), "ding"], [em(F7, "rio"), "pop"], [em(F7, "mensagem"), "ding"], [em(F7, "ônibus"), "pop"]],
   draw(t, D) { const se = em(F7, "sensor"), ri = em(F7, "sobe"), me = em(F7, "mensagem"), on = em(F7, "ônibus"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [me, 640, 335, 1.03]]);
     cardTipo(360, 130, 480, "📡", "Sensor", ["mede sozinho: chuva,", "temperatura, nível do rio"], "#fff", seg(t, se, se + .4)); cardTipo(920, 130, 480, "💬", "Mensagem automática", ["avisa muita gente", "ao mesmo tempo"], "#fde68a", seg(t, me, me + .4));
     if (t > ri - .4) { rotulo("nível do rio", 360, 432, "#fde68a", seg(t, ri - .4, ri)); medidor(360, 445, 400, .25 + .7 * seg(t, ri, ri + 2), t > ri + 1.2 ? "#ef4444" : "#38bdf8", seg(t, ri - .4, ri)); }
     [800, 920, 1040].forEach((x, i) => { const k = seg(t, me + .6 + i * .25, me + 1 + i * .25); if (k > 0) emo("📱", x, 470 - Math.abs(Math.sin(t * 5 + i)) * 8, 56 * back(cl(k))); }); if (t > on) etiqueta("mudou o horário do ônibus escolar", 920, 540, 920, 500, seg(t, on, on + .4));
     R({ x: 90, y: 600, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: t > ri + 1.2 ? "o" : "riso", pisca: pisca(t) }); J({ x: 1200, y: 600, s: .5, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= me ? "MENSAGEM AUTOMÁTICA" : "SENSOR", 560, 90, seg(t, 0, .4), 54); } },
 { chip: "VERDADEIRO OU FALSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "falso"), "alerta"], [em(F8, "verdadeiro"), "ding"], [em(F8, "falso", 1), "alerta"], [em(F8, "verdadeiro", 1), "ding"]],
   draw(t, D) { const a = [em(F8, "Decomposição"), em(F8, "Saber"), em(F8, "tecnologia"), em(F8, "mapa")], r = [em(F8, "falso"), em(F8, "verdadeiro"), em(F8, "falso", 1), em(F8, "verdadeiro", 1)]; fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [a[2], 640, 335, 1.03]]);
     vfLista(t, [["Decomposição é juntar vários problemas", "F ❌", "#dc2626"], ["Saber quem é afetado ajuda", "V ✅", "#16a34a"], ["A tecnologia é sempre a melhor resposta", "F ❌", "#dc2626"], ["Mapa colaborativo: várias pessoas marcam", "V ✅", "#16a34a"]], a, r);
     R({ x: 1120, y: 610, s: .45, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1210, y: 610, s: .45, olhar: -1, braco: -2.3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra("VERDADEIRO OU FALSO?", 560, 90, seg(t, 0, .4), 52); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "observou"), "pop"], [em(F9, "aplicativo"), "pop"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const ob = em(F9, "observou"), ap = em(F9, "aplicativo"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1.04], [mc, 640, 360, 1]]); cidadeFundo(t, "#052e16");
     [200, 420, 860, 1080].forEach((x, i) => poste(x, 560, .85, t > ob + i * .8, t)); cartaoC("📲 foto + localização: lâmpada consertada!", 640, 290, 800, "#bbf7d0", seg(t, ap, ap + .4));
     R({ x: 560, y: 570, s: .85, olhar: 1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t) }); J({ x: 720, y: 570, s: .85, olhar: -1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t + .5) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "caminho"), "pop"], [em(F10, "projeto"), "pop"], [em(F10, "associação"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["caminho", "🏫", "No caminho da escola", "que problema você vê?"], ["projeto", "🏘️", "Projeto da escola", "para melhorar o bairro"], ["associação", "🤝", "Associação de moradores", "conversar sobre o bairro"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 3º bimestre de 2027 · Missão 1", [JULIA, RAFA]); } }
];

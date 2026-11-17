/* ================= 7º ano · Curiosidade da Missão 1 · O cabo de rede por dentro (17/11/2026) =================
   Fatos conferidos (Regra de ouro 1): Black Box (categorias CAT5e–CAT8) e Google Patents US 244.426 (Graham Bell, 1881). */
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const PARES = ["#ea580c", "#16a34a", "#2563eb", "#92400e"], AZC = "#3b82f6", VD = "#16a34a", VM = "#dc2626", RX = "#7c3aed";
function placa(txt, x, y, k, cor, tam) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.font = `800 ${tam || 24}px ${F}`;
  const w = g.measureText(txt).width + 34, h = (tam || 24) + 22; g.fillStyle = "rgba(0,0,0,.35)"; rr(-w / 2 + 4, -h / 2 + 5, w, h, 14); g.fill();
  g.fillStyle = cor || AZUL; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2, -h / 2, w, h, 14); g.stroke();
  g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); }
function flecha(x1, y1, x2, y2, k, cor) { if (k <= 0) return; const a = out(cl(k)), x = lerp(x1, x2, a), y = lerp(y1, y2, a), an = Math.atan2(y2 - y1, x2 - x1);
  g.save(); g.lineCap = "round"; [["#0b1020", 12], [cor || AMAR, 6]].forEach(([c, w]) => { g.strokeStyle = c; g.lineWidth = w; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x - 10 * Math.cos(an), y - 10 * Math.sin(an)); g.stroke(); });
  if (a > .9) { const p = (r, d) => [x - r * Math.cos(an + d), y - r * Math.sin(an + d)]; g.fillStyle = "#0b1020"; g.beginPath(); g.moveTo(x + 4 * Math.cos(an), y + 4 * Math.sin(an)); g.lineTo(...p(30, .5)); g.lineTo(...p(30, -.5)); g.fill();
    g.fillStyle = cor || AMAR; g.beginPath(); g.moveTo(x, y); g.lineTo(...p(24, .45)); g.lineTo(...p(24, -.45)); g.fill(); } g.restore(); }
function rotuloF(txt, x, y, ax, ay, k, cor, tam) { flecha(x, y, ax, ay, k, cor); placa(txt, x, y, k, cor, tam); }
// fio colorido (ou branco listrado) seguindo uma senoide
function fioOnda(x0, x1, y, amp, per, fase, cor, listrado, lw) { lw = lw || 12; const pts = []; for (let x = x0; x <= x1; x += 4) pts.push([x, y + amp * Math.sin(2 * Math.PI * (x - x0) / per + fase)]);
  const tr = () => { g.beginPath(); pts.forEach(([a, b], i) => i ? g.lineTo(a, b) : g.moveTo(a, b)); };
  g.lineCap = "round"; g.lineJoin = "round"; tr(); g.strokeStyle = "#0b1020"; g.lineWidth = lw + 4; g.stroke(); tr(); g.strokeStyle = listrado ? "#fff" : cor; g.lineWidth = lw; g.stroke();
  if (listrado) { tr(); g.setLineDash([10, 9]); g.strokeStyle = cor; g.lineWidth = lw * .5; g.stroke(); g.setLineDash([]); } }
// par trançado: os dois fios se cruzam (desenho em pedaços para alternar quem fica por cima)
function parT(x0, x1, y, cor, amp, per, fase, lw) { amp = amp || 12; per = per || 70; fase = fase || 0; const meio = per / 2;
  for (let x = x0, k = 0; x < x1; x += meio, k++) { const xe = Math.min(x + meio + 2, x1), f = fase + 2 * Math.PI * (x - x0) / per;
    const a = () => fioOnda(x, xe, y, amp, per, f, cor, false, lw), b = () => fioOnda(x, xe, y, -amp, per, f, cor, true, lw); if (k % 2) { a(); b(); } else { b(); a(); } } }
function rj45(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s);
  g.fillStyle = "rgba(226,232,240,.85)"; g.strokeStyle = "#0b1020"; g.lineWidth = 5; rr(-120, -90, 240, 180, 18); g.fill(); g.stroke();
  g.fillStyle = "rgba(226,232,240,.95)"; g.beginPath(); g.moveTo(-60, -90); g.lineTo(-40, -150); g.lineTo(70, -150); g.lineTo(80, -90); g.closePath(); g.fill(); g.stroke();
  for (let i = 0; i < 8; i++) { g.fillStyle = "#facc15"; rr(-110, -76 + i * 19, 40, 11, 3); g.fill(); g.strokeStyle = "#a16207"; g.lineWidth = 2; g.stroke(); }
  PARES.forEach((c, i) => { g.strokeStyle = c; g.globalAlpha = .6; g.lineWidth = 8; g.beginPath(); g.moveTo(-68, -66 + i * 38); g.lineTo(120, -66 + i * 38); g.stroke(); g.globalAlpha = 1; });
  g.restore(); }
function capaCabo(x0, x1, y, h, cor, txt) { g.fillStyle = cor || AZC; g.strokeStyle = "#0b1020"; g.lineWidth = 5; rr(x0, y - h / 2, x1 - x0, h, h / 2); g.fill(); g.stroke();
  g.fillStyle = "rgba(255,255,255,.25)"; rr(x0 + 10, y - h / 2 + 8, x1 - x0 - 20, h * .18, h * .09); g.fill();
  if (txt) { g.fillStyle = "#fff"; g.font = `800 ${Math.round(h * .32)}px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; for (let x = x0 + 120; x < x1 - 60; x += 260) g.fillText(txt, x, y + 2); } }
function secao(cx, cy, r, cruz, blind, k) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(cx, cy); g.scale(s, s);
  g.fillStyle = blind > 1 ? "#94a3b8" : AZC; g.strokeStyle = "#0b1020"; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.stroke();
  g.fillStyle = "#eff6ff"; g.beginPath(); g.arc(0, 0, r * .84, 0, 7); g.fill(); g.lineWidth = 2; g.stroke();
  if (cruz) { g.strokeStyle = "#64748b"; g.lineWidth = r * .1; g.lineCap = "round"; g.beginPath(); g.moveTo(-r * .76, 0); g.lineTo(r * .76, 0); g.moveTo(0, -r * .76); g.lineTo(0, r * .76); g.stroke(); }
  PARES.forEach((c, i) => { const dx = (i % 2 ? 1 : -1) * r * .4, dy = (i < 2 ? -1 : 1) * r * .4;
    if (blind) { g.fillStyle = "#cbd5e1"; g.strokeStyle = "#475569"; g.lineWidth = 3; g.beginPath(); g.arc(dx, dy, r * .3, 0, 7); g.fill(); g.stroke(); }
    [[-r * .1, c], [r * .1, "#fff"]].forEach(([ox, cc]) => { g.fillStyle = cc; g.strokeStyle = "#0b1020"; g.lineWidth = 2; g.beginPath(); g.arc(dx + ox, dy, r * .1, 0, 7); g.fill(); g.stroke(); }); });
  g.restore(); }
function raio(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.rotate(Math.sin(t * 9) * .06); g.fillStyle = AMAR; g.strokeStyle = "#0b1020"; g.lineWidth = 4; g.beginPath();
  g.moveTo(10, -60); g.lineTo(-24, 6); g.lineTo(2, 6); g.lineTo(-12, 60); g.lineTo(28, -12); g.lineTo(2, -12); g.lineTo(18, -60); g.closePath(); g.fill(); g.stroke(); g.restore(); }
function motor(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#475569"; rr(-70, -50, 140, 100, 16); g.fill(); g.fillStyle = "#334155"; for (let i = 0; i < 5; i++) g.fillRect(-60 + i * 26, -50, 12, 100);
  g.save(); g.translate(90, 0); g.rotate(t * 8); g.fillStyle = "#cbd5e1"; for (let i = 0; i < 4; i++) { g.rotate(Math.PI / 2); rr(-6, 0, 12, 34, 6); g.fill(); } g.restore(); g.restore(); }
function lampada(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = `rgba(253,224,71,${.25 + .15 * Math.sin(t * 12)})`; g.beginPath(); g.arc(0, -10, 70, 0, 7); g.fill();
  g.fillStyle = "#fde047"; g.strokeStyle = "#0b1020"; g.lineWidth = 4; g.beginPath(); g.arc(0, -10, 40, 0, 7); g.fill(); g.stroke(); g.fillStyle = "#94a3b8"; rr(-20, 26, 40, 30, 6); g.fill(); g.stroke(); g.restore(); }
function ruidoZig(x1, y1, x2, y2, t, k) { if (k <= 0) return; const n = 14; g.save(); g.globalAlpha = cl(k); g.strokeStyle = VM; g.lineWidth = 5; g.lineJoin = "round"; g.beginPath();
  for (let i = 0; i <= n; i++) { const f = i / n, x = lerp(x1, x2, f), y = lerp(y1, y2, f) + (i % 2 ? 14 : -14) * Math.sin(t * 10 + i); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.restore(); }
function onda(x0, x1, y, amp, per, t, cor, sujo) { g.strokeStyle = cor; g.lineWidth = 6; g.lineCap = "round"; g.beginPath();
  for (let x = x0; x <= x1; x += 3) { const v = amp * Math.sin(2 * Math.PI * (x - x0) / per - t * 6) + (sujo ? sujo * (Math.sin(x * .9 + t * 30) * 9 + Math.sin(x * .37) * 6) : 0); x === x0 ? g.moveTo(x, y + v) : g.lineTo(x, y + v); } g.stroke(); }
function computador(x, y, s, t) { monitor(x, y, s, (x0, y0, w, h) => { g.fillStyle = "#1e3a8a"; g.fillRect(x0, y0, w, h); g.fillStyle = "#fff"; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText("🌐", x0 + w / 2, y0 + h / 2 + 12); }); }
function barraVel(x, y, w, k, cor, rot, val) { g.fillStyle = "rgba(255,255,255,.12)"; rr(x, y - 26, w, 52, 14); g.fill(); g.fillStyle = cor; rr(x, y - 26, Math.max(30, w * cl(k)), 52, 14); g.fill();
  g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "left"; g.textBaseline = "middle"; g.fillText(rot, x - 150, y + 1); if (k > .95) { g.textAlign = "right"; g.fillText(val, x + w * cl(k) - 16, y + 1); } }
function predioDC(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); for (let r = 0; r < 3; r++) { g.fillStyle = "#1e293b"; rr(-150 + r * 105, -240, 90, 240, 8); g.fill();
  for (let i = 0; i < 10; i++) { g.fillStyle = (Math.floor(t * 5) + i + r) % 4 ? "#22c55e" : "#bbf7d0"; g.beginPath(); g.arc(-130 + r * 105, -222 + i * 22, 4, 0, 7); g.fill(); g.fillStyle = "#334155"; g.fillRect(-118 + r * 105, -226 + i * 22, 56, 8); } } g.restore(); }
function estrada(t, k) { g.fillStyle = "#334155"; g.beginPath(); g.moveTo(80, 300); g.lineTo(760, 300); g.lineTo(820, 360); g.lineTo(1200, 360); g.lineTo(1200, 400); g.lineTo(820, 400); g.lineTo(760, 460); g.lineTo(80, 460); g.closePath(); g.fill();
  g.strokeStyle = "#fde047"; g.setLineDash([30, 24]); g.lineWidth = 5; g.beginPath(); g.moveTo(100, 380); g.lineTo(780, 380); g.stroke(); g.setLineDash([]);
  g.fillStyle = "#7c2d12"; g.fillRect(820, 352, 380, 8); g.fillRect(820, 400, 380, 8); }

const F0 = "Curiosidade da Missão 1: o segredo escondido dentro do cabo de rede!",
  F1 = "Atrás do computador da nossa sala tem um cabo de rede. Parece só um fio, né? Mas, se é só um fio, por que existem cabos mais lentos e cabos mais rápidos?",
  F2 = "Bora entrar nesse cabo e descobrir o que tem lá dentro!",
  F3 = "Na ponta fica o conector érre jota quarenta e cinco: o plugue transparente, com uma trava, que encaixa no computador, no switch e na tomada de rede. Repara nos oito contatos dourados.",
  F4 = "Dentro da capa estão oito fios de cobre coloridos: laranja, verde, azul e marrom, cada um com um par branco listrado. E eles não estão retos: estão enrolados de dois em dois. São quatro pares trançados!",
  F5 = "Mas por que trançar? Os dados viajam pelos fios como sinais elétricos. E motores, lâmpadas e outros cabos fazem um barulho elétrico, a interferência, que bagunça o sinal.",
  F6 = "Com os dois fios enrolados juntinhos, o barulho chega igual nos dois. Aí o computador compara os dois fios, joga fora o que é igual... e sobra o sinal limpo! Essa ideia é de Graham Bell, um dos inventores do telefone, lá em mil oitocentos e oitenta e um.",
  F7 = "Só que tem outro problema: o sinal de um par pode vazar para o par vizinho, como a conversa da mesa ao lado num restaurante. O nome disso é diafonia. E quanto mais rápido o sinal, mais ele vaza.",
  F8 = "Por isso existem as categorias de cabo. O antigo cat cinco ia até cem megabits por segundo. O cat cinco é vai até mil. E o cat seis tem a trança mais apertada e uma cruz de plástico separando os pares: chega a dez mil megabits por segundo, em trechos de até uns cinquenta e cinco metros.",
  F9 = "E para no cat seis? Não! Depois vem o cat seis a, com dez mil megabits por segundo em até cem metros. O cat sete, com uma capinha de metal em cada par, a blindagem. E o cat oito, que chega a quarenta mil megabits por segundo, mas só em até trinta metros: ele mora dentro dos data centers, ligando um servidor no outro. E, para ir mais longe, entre cidades e países, quem leva os dados é a fibra óptica, com luz!",
  F10 = "E como saber qual é o seu cabo? Está escrito na capa! Procure: cat cinco é ou cat seis.",
  F11 = "Agora, um mistério da nossa sala: o cabo que passa por baixo do chão é cat seis, superrápido. Mas o computador recebe no máximo cem megabits por segundo. Por quê?",
  F12 = "Porque o switch da baia vai só até cem! A velocidade do caminho é sempre a da parte mais lenta, como uma estrada larga que termina numa ponte estreita.",
  F13 = "Onde eu uso isso? Quando for comprar um cabo de rede para o videogame, a TV ou o computador, olhe a capa. Para uma internet de até mil megabits, um cat cinco é já dá conta.",
  F14 = "Agora vá ao portal e teste no simulador: qual cabo é mais rápido? Até a próxima missão!";
const L3 = "Na ponta fica o conector RJ45: o plugue transparente, com uma trava, que encaixa no computador, no switch e na tomada de rede. Repara nos 8 contatos dourados.",
  L4 = "Dentro da capa estão 8 fios de cobre coloridos: laranja, verde, azul e marrom, cada um com um par branco listrado. E eles não estão retos: estão enrolados de 2 em 2. São 4 pares trançados!",
  L6 = "Com os dois fios enrolados juntinhos, o barulho chega igual nos dois. Aí o computador compara os dois fios, joga fora o que é igual... e sobra o sinal limpo! Essa ideia é de Graham Bell, um dos inventores do telefone, lá em 1881.",
  L8 = "Por isso existem as categorias de cabo. O antigo CAT5 ia até 100 Mbps. O CAT5e vai até 1.000. E o CAT6 tem a trança mais apertada e uma cruz de plástico separando os pares: chega a 10.000 Mbps, em trechos de até uns 55 metros.",
  L9 = "E para no CAT6? Não! Depois vem o CAT6a, com 10.000 Mbps em até 100 metros. O CAT7, com uma capinha de metal em cada par, a blindagem. E o CAT8, que chega a 40.000 Mbps, mas só em até 30 metros: ele mora dentro dos data centers, ligando um servidor no outro. E, para ir mais longe, entre cidades e países, quem leva os dados é a fibra óptica, com luz!",
  L10 = "E como saber qual é o seu cabo? Está escrito na capa! Procure: CAT5e ou CAT6.",
  L11 = "Agora, um mistério da nossa sala: o cabo que passa por baixo do chão é CAT6, superrápido. Mas o computador recebe no máximo 100 Mbps. Por quê?",
  L12 = "Porque o switch da baia vai só até 100! A velocidade do caminho é sempre a da parte mais lenta, como uma estrada larga que termina numa ponte estreita.",
  L13 = "Onde eu uso isso? Quando for comprar um cabo de rede para o videogame, a TV ou o computador, olhe a capa. Para uma internet de até 1.000 Mbps, um CAT5e já dá conta.";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.4, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#0c4a6e"); const k = out(seg(t, .2, 1.4));
     capaCabo(lerp(-900, -60, k), lerp(-200, 560, k), 300, 120, AZC, "CAT6"); rj45(lerp(-80, 660, k), 300, .7);
     const kz = seg(t, 1.3, 2.4); if (kz > 0) { g.save(); g.globalAlpha = cl(kz * 2); g.fillStyle = "rgba(250,204,21,.35)"; g.beginPath(); g.arc(1010, 300, 40 + 120 * kz, 0, 7); g.fill(); g.restore(); secao(1010, 300, 110, true, 0, kz); }
     abertura(t, "7º ANO · CURIOSIDADE DA MISSÃO 1", "O cabo de rede por dentro", "O SEGREDO ESCONDIDO", "DENTRO DO CABO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "cabo"), "pop"], [em(F1, "fio"), "pop"], [em(F1, "lentos"), "alerta"], [em(F1, "rápidos"), "ding"]],
   draw(t, D) { fundoSala(t); mesa(470, 470); computador(470, 460, 1.0, t); gabinete(700, 470, .9, true);
     g.strokeStyle = AZC; g.lineWidth = 12; g.lineCap = "round"; g.beginPath(); g.moveTo(735, 420); g.bezierCurveTo(820, 440, 800, 560, 900, 560); g.lineTo(1000, 560); g.stroke();
     leo({ x: 1080, y: 560, s: .95, braco: t > em(F1, "fio") ? -2.3 : -.4, olhar: -1, boca: t > em(F1, "lentos") ? "o" : "", pisca: pisca(t) });
     balao("Só um fio? 🤔", 1010, 300, seg(t, em(F1, "fio"), em(F1, "fio") + .4));
     if (t > em(F1, "lentos")) { placa("🐢 MAIS LENTO", 380, 220, seg(t, em(F1, "lentos"), em(F1, "lentos") + .4), VM, 28); }
     if (t > em(F1, "rápidos")) { placa("🚀 MAIS RÁPIDO", 380, 285, seg(t, em(F1, "rápidos"), em(F1, "rápidos") + .4), VD, 28); } } },
 { chip: "ENTRANDO NO CABO", fala: F2, sfx: [[.1, "whoosh"], [1.2, "whoosh"], [2.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0c4a6e"); const k = io(seg(t, .4, 2.6)), r = lerp(60, 520, k);
     secao(640, 330, r, true, 0, 1); if (k < .3) leo({ x: 220, y: 600, s: .8, braco: -2.4, mascara: true, olhar: 1, pisca: pisca(t) });
     palavra("BORA ENTRAR!", 640, 120, seg(t, .2, .6), 70); } },
 { chip: "O CONECTOR RJ45", fala: F3, legenda: L3, sfx: [[.1, "whoosh"], [em(F3, "conector"), "pop"], [em(F3, "trava"), "click"], [em(F3, "oito"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); capaCabo(780, 1300, 330, 130, AZC, ""); rj45(560, 330, 1.25 + .02 * Math.sin(t * 2));
     palavra("RJ45", 640, 100, seg(t, em(F3, "conector"), em(F3, "conector") + .4), 80);
     rotuloF("TRAVA", 300, 190, 520, 160, seg(t, em(F3, "trava"), em(F3, "trava") + .5), AMAR, 26);
     rotuloF("TRANSPARENTE", 980, 210, 690, 260, seg(t, em(F3, "transparente"), em(F3, "transparente") + .5), AZUL, 24);
     rotuloF("8 CONTATOS DOURADOS", 260, 470, 450, 400, seg(t, em(F3, "oito"), em(F3, "oito") + .5), "#ca8a04", 24); } },
 { chip: "DENTRO DA CAPA", fala: F4, legenda: L4, sfx: [[.1, "whoosh"], [em(F4, "laranja"), "pop"], [em(F4, "verde"), "pop"], [em(F4, "azul"), "pop"], [em(F4, "marrom"), "pop"], [em(F4, "trançados"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14213d"); capaCabo(980, 1300, 330, 330, AZC, "");
     ["laranja", "verde", "azul", "marrom"].forEach((n, i) => { const k = seg(t, em(F4, n), em(F4, n) + .4); if (k <= 0) return; g.save(); g.globalAlpha = cl(k * 2);
       const tw = t > em(F4, "enrolados") ? 1 : 0, y = 200 + i * 80; if (tw) parT(80, 1000, y, PARES[i], 14, 80, t * 3); else { fioOnda(80, 1000, y - 14, 0, 80, 0, PARES[i], false); fioOnda(80, 1000, y + 14, 0, 80, 0, PARES[i], true); }
       g.restore(); placa(n.toUpperCase(), 1130, 200 + i * 80, k, PARES[i], 22); });
     palavra("4 PARES TRANÇADOS", 520, 100, seg(t, em(F4, "trançados"), em(F4, "trançados") + .4), 62); } },
 { chip: "INTERFERÊNCIA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "sinais"), "pop"], [em(F5, "motores"), "alerta"], [em(F5, "lâmpadas"), "pop"], [em(F5, "interferência"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#3b0764"); const a = em(F5, "motores"), b = em(F5, "interferência");
     onda(140, 1140, 420, 40, 220, t, "#67e8f9", t > b ? 1 : 0); placa("SINAL ELÉTRICO", 640, 500, seg(t, em(F5, "sinais"), em(F5, "sinais") + .4), "#0891b2", 24);
     if (t > a) motor(220, 230, .8, t); if (t > em(F5, "lâmpadas")) lampada(640, 230, .8, t); if (t > em(F5, "cabos")) raio(1040, 220, .9, t);
     [[300, 260], [640, 270], [1040, 270]].forEach(([x, y], i) => ruidoZig(x, y, x + 40, 380, t, seg(t, a + i * .5, a + i * .5 + .4)));
     palavra("INTERFERÊNCIA!", 640, 110, seg(t, b, b + .4), 60); } },
 { chip: "A TRANÇA PROTEGE", fala: F6, legenda: L6, sfx: [[.1, "whoosh"], [em(F6, "igual"), "pop"], [em(F6, "compara"), "click"], [em(F6, "limpo"), "ding"], [em(F6, "Graham"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); parT(80, 640, 320, PARES[0], 16, 90, t * 3);
     const a = em(F6, "igual"); [200, 360, 520].forEach((x, i) => ruidoZig(x - 20, 180, x, 290, t, seg(t, a - .6 + i * .2, a - .2 + i * .2)));
     placa("O BARULHO CHEGA IGUAL NOS 2 FIOS", 360, 430, seg(t, a, a + .4), VM, 22);
     const c = em(F6, "compara"); if (t > c) { g.fillStyle = "#fde68a"; rr(700, 250, 230, 140, 20); g.fill(); g.fillStyle = NAVY; g.font = `800 30px ${F}`; g.textAlign = "center"; g.fillText("COMPARA", 815, 310); g.font = `700 22px ${F}`; g.fillText("e joga fora", 815, 345); g.fillText("o que é igual", 815, 372); flecha(650, 320, 700, 320, seg(t, c, c + .3), AMAR); }
     const l = em(F6, "limpo"); if (t > l) { flecha(930, 320, 980, 320, seg(t, l, l + .3), VD); onda(990, 1220, 320, 34, 110, t, "#4ade80", 0); placa("SINAL LIMPO ✔", 1100, 230, seg(t, l, l + .4), VD, 24); }
     const gb = em(F6, "Graham"); if (t > gb) cartao("GRAHAM BELL · 1881", 640, 140, 520, RX, seg(t, gb, gb + .4), "patente dos fios trançados do telefone"); } },
 { chip: "DIAFONIA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "vazar"), "alerta"], [em(F7, "restaurante"), "pop"], [em(F7, "diafonia"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); parT(80, 760, 250, PARES[1], 14, 80, t * 3); parT(80, 760, 420, PARES[2], 14, 80, t * 3);
     const v = em(F7, "vazar"); if (t > v) for (let i = 0; i < 3; i++) { const x = 200 + i * 220, k = (t * .8 + i / 3) % 1; g.save(); g.globalAlpha = 1 - k; flecha(x, 270, x + 10, lerp(290, 400, k), 1, VM); g.restore(); }
     const r = em(F7, "restaurante"); if (t > r) { const k = back(seg(t, r, r + .4)); g.save(); g.translate(1010, 340); g.scale(k, k); g.fillStyle = "#fff"; rr(-190, -160, 380, 320, 22); g.fill();
       g.fillStyle = "#b45309"; rr(-160, 40, 120, 18, 6); g.fill(); rr(40, 40, 120, 18, 6); g.fill(); g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("🗣️", -100, 10); g.fillText("👂", 100, 10);
       g.fillStyle = NAVY; g.font = `700 22px ${F}`; g.fillText("a conversa da mesa", 0, 110); g.fillText("ao lado vaza!", 0, 138); g.restore(); }
     palavra("DIAFONIA", 420, 110, seg(t, em(F7, "diafonia"), em(F7, "diafonia") + .4), 72); } },
 { chip: "AS CATEGORIAS", fala: F8, legenda: L8, sfx: [[.1, "whoosh"], [em(F8, "cinco"), "pop"], [em(F8, "cinco", 1), "pop"], [em(F8, "seis"), "pop"], [em(F8, "cruz"), "click"], [em(F8, "dez"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); palavra("CATEGORIAS DE CABO", 520, 100, seg(t, .3, .7), 54);
     const a = em(F8, "cinco"), b = em(F8, "cinco", 1), c = em(F8, "seis");
     barraVel(260, 210, 600, seg(t, a, a + .8) * .01 + (t > a + .8 ? .01 : 0), "#9ca3af", "CAT5", "100 Mbps");
     if (t > a) { g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "left"; g.fillText("100 Mbps", 300, 211); }
     barraVel(260, 300, 600, seg(t, b, b + .8) * .1, AZC, "CAT5e", ""); if (t > b) { g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "left"; g.fillText("1.000 Mbps", 340, 301); }
     barraVel(260, 390, 600, seg(t, em(F8, "dez"), em(F8, "dez") + .8), "#eab308", "CAT6", "10.000 Mbps*");
     if (t > em(F8, "dez") + .8) { g.fillStyle = "#cbd5e1"; g.font = `700 20px ${F}`; g.textAlign = "left"; g.fillText("* em trechos de até uns 55 metros", 260, 440); }
     secao(1060, 300, 120, t > em(F8, "cruz"), 0, seg(t, c, c + .4)); if (t > em(F8, "cruz")) placa("CRUZ DE PLÁSTICO", 1060, 460, seg(t, em(F8, "cruz"), em(F8, "cruz") + .4), VD, 22); } },
 { chip: "E DEPOIS DO CAT6?", fala: F9, legenda: L9, legTam: 22, sfx: [[.1, "whoosh"], [em(F9, "seis", 1), "pop"], [em(F9, "sete"), "pop"], [em(F9, "blindagem"), "click"], [em(F9, "oito"), "ding"], [em(F9, "data"), "pop"], [em(F9, "fibra"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#312e81"); const a = em(F9, "seis", 1), b = em(F9, "sete"), c = em(F9, "oito"), d = em(F9, "data"), f = em(F9, "fibra");
     [["CAT6a", "10 Gbps · 100 m", 0, a], ["CAT7", "10 Gbps · blindagem", 2, b], ["CAT8", "40 Gbps · até 30 m", 2, c]].forEach(([n, s, bl, t0], i) => { const x = 200 + i * 300, y = 300 - i * 30;
       secao(x, y, 90 + i * 8, true, bl, seg(t, t0, t0 + .4)); if (t > t0) { placa(n, x, y + 130, seg(t, t0, t0 + .4), [VD, "#0891b2", RX][i], 28); g.fillStyle = "#fff"; g.font = `700 20px ${F}`; g.textAlign = "center"; g.fillText(s, x, y + 180); } });
     if (t > em(F9, "blindagem")) rotuloF("BLINDAGEM DE METAL", 500, 120, 470, 220, seg(t, em(F9, "blindagem"), em(F9, "blindagem") + .4), "#64748b", 22);
     if (t > d) { predioDC(1080, 470, .8, t); placa("DATA CENTER", 1050, 500, seg(t, d, d + .4), RX, 22); }
     if (t > f) { const k = seg(t, f, f + 1.2); g.save(); g.globalCompositeOperation = "lighter"; g.strokeStyle = "rgba(125,211,252,.9)"; g.lineWidth = 8; g.beginPath(); g.moveTo(0, 90); g.lineTo(W * k, 90); g.stroke(); g.restore(); palavra("FIBRA ÓPTICA: LUZ!", 900, 110, seg(t, f + .3, f + .7), 44); } } },
 { chip: "OLHE A CAPA", fala: F10, legenda: L10, sfx: [[.1, "whoosh"], [em(F10, "capa"), "ding"], [em(F10, "cinco"), "pop"], [em(F10, "seis"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); capaCabo(-40, 1320, 330, 150, AZC, t > em(F10, "seis") ? "CAT6 · 4 PARES" : "CAT6");
     const k = seg(t, em(F10, "capa"), em(F10, "capa") + .8); if (k > 0) { lupa(lerp(200, 640, out(k)), 330, 1.4); }
     palavra("ESTÁ ESCRITO NA CAPA!", 640, 130, seg(t, em(F10, "capa"), em(F10, "capa") + .4), 56); } },
 { chip: "UM MISTÉRIO", fala: F11, legenda: L11, sfx: [[.1, "whoosh"], [em(F11, "chão"), "pop"], [em(F11, "seis"), "ding"], [em(F11, "cem"), "alerta"], [em(F11, "Por"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e293b"); g.fillStyle = "#78350f"; g.fillRect(0, 430, W, 30);
     g.strokeStyle = "#eab308"; g.lineWidth = 14; g.beginPath(); g.moveTo(40, 480); g.lineTo(760, 480); g.lineTo(780, 380); g.stroke(); placa("CABO CAT6 POR BAIXO DO CHÃO", 380, 520, seg(t, em(F11, "chão"), em(F11, "chão") + .4), "#ca8a04", 22);
     g.fillStyle = "#334155"; rr(740, 330, 140, 50, 10); g.fill(); g.fillStyle = "#86efac"; for (let i = 0; i < 5; i++) { g.beginPath(); g.arc(760 + i * 24, 355, 5, 0, 7); g.fill(); }
     computador(1080, 360, .8, t); g.strokeStyle = AZC; g.lineWidth = 8; g.beginPath(); g.moveTo(880, 355); g.lineTo(980, 330); g.stroke();
     if (t > em(F11, "cem")) placa("SÓ 100 Mbps?!", 1080, 120, seg(t, em(F11, "cem"), em(F11, "cem") + .4), VM, 32);
     if (t > em(F11, "Por")) palavra("POR QUÊ?", 640, 220, seg(t, em(F11, "Por"), em(F11, "Por") + .4), 70); } },
 { chip: "A RESPOSTA", fala: F12, legenda: L12, sfx: [[.1, "whoosh"], [em(F12, "switch"), "ding"], [em(F12, "lenta"), "alerta"], [em(F12, "ponte"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F12, "estrada");
     if (t < a) { g.fillStyle = "#334155"; rr(420, 250, 440, 120, 16); g.fill(); g.fillStyle = "#86efac"; for (let i = 0; i < 8; i++) { g.beginPath(); g.arc(470 + i * 50, 310, 9, 0, 7); g.fill(); }
       placa("SWITCH DA BAIA: ATÉ 100 Mbps", 640, 440, seg(t, em(F12, "switch"), em(F12, "switch") + .4), VM, 28); }
     else { estrada(t); for (let i = 0; i < 6; i++) { const k = (t * .25 + i / 6) % 1, x = lerp(100, 1180, k), y = x < 800 ? 330 + (i % 3) * 40 : 380; carro(x, y, ["#ef4444", "#3b82f6", "#f59e0b"][i % 3], .5); }
       placa("ESTRADA LARGA = CABO", 400, 250, seg(t, a, a + .4), AZUL, 24); placa("PONTE ESTREITA = SWITCH", 1000, 300, seg(t, em(F12, "ponte"), em(F12, "ponte") + .4), VM, 24); }
     palavra("A PARTE MAIS LENTA MANDA!", 640, 110, seg(t, em(F12, "lenta"), em(F12, "lenta") + .4), 56); } },
 { chip: "ONDE EU USO ISSO?", fala: F13, legenda: L13, sfx: [[.1, "whoosh"], [em(F13, "videogame"), "pop"], [em(F13, "TV"), "pop"], [em(F13, "computador"), "pop"], [em(F13, "dá"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 54);
     [["🎮", "VIDEOGAME", "videogame"], ["📺", "TV", "TV"], ["💻", "COMPUTADOR", "computador"]].forEach(([e, n, w], i) => { const t0 = em(F13, w), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 260 + i * 380;
       g.save(); g.translate(x, 300); g.scale(k, k); g.fillStyle = "#fff"; rr(-150, -100, 300, 200, 20); g.fill(); g.font = `800 80px ${F}`; g.textAlign = "center"; g.fillText(e, 0, 20); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.fillText(n, 0, 80); g.restore(); });
     placa("Internet de até 1.000 Mbps → CAT5e já dá conta", 640, 480, seg(t, em(F13, "dá"), em(F13, "dá") + .4), VD, 28); } },
 { chip: "", fala: F14, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · Curiosidade da Missão 1", [ANA, LEO]); } }
];

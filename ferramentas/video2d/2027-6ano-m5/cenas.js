/* ================= 6º ano · 2027 · 1º bimestre · Missão 5 · Tipos de dados (v2, padrão completo: a Fábrica de Dados) ================= */
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
/* ===== peças da "Fábrica de Dados" (6º M5 v2) ===== */
const LUANA = { camisa: "#14b8a6", cabelo: "longo" }; const luana = o => boneco(Object.assign({}, LUANA, o));
const TIPOS = [["🔤", "TEXTO", "#2563eb"], ["🔢", "NÚMERO", "#16a34a"], ["📅", "DATA", "#d97706"], ["✅", "LÓGICO", "#7c3aed"], ["🖼️", "IMAGEM", "#db2777"], ["🔊", "SOM", "#0891b2"], ["🎬", "VÍDEO", "#ea580c"]];
function fabrica(t, rolar) { // galpão com camadas: parede com janelas, esteira, luzes
  const gr = g.createLinearGradient(0, -300, 0, 1000); gr.addColorStop(0, "#1e293b"); gr.addColorStop(1, "#0f172a"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1920);
  for (let i = 0; i < 10; i++) { g.fillStyle = "#334155"; rr(-300 + i * 230, -40, 170, 120, 10); g.fill(); g.fillStyle = `rgba(125,211,252,${.25 + .15 * Math.sin(t + i)})`; rr(-290 + i * 230, -30, 150, 100, 8); g.fill(); }
  for (let i = 0; i < 8; i++) { g.fillStyle = "#fde68a"; g.beginPath(); g.arc(-200 + i * 260, 130, 10, 0, 7); g.fill(); g.fillStyle = "rgba(253,230,138,.08)"; g.beginPath(); g.moveTo(-210 + i * 260, 130); g.lineTo(-330 + i * 260, 560); g.lineTo(-70 + i * 260, 560); g.fill(); }
  g.fillStyle = "#475569"; g.fillRect(-800, 560, 2880, 40); for (let x = -800; x < 2100; x += 40) { g.fillStyle = "#1e293b"; g.fillRect(x - ((rolar || 0) * 120) % 40, 566, 20, 28); } g.fillStyle = "#1e293b"; g.fillRect(-800, 600, 2880, 600); }
function pacote2(x, y, s, txt, cor, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.font = `800 22px ${F}`; const w = Math.max(110, g.measureText(txt).width + 34);
  g.fillStyle = "#a16207"; rr(-w / 2, -40, w, 80, 8); g.fill(); g.fillStyle = "#ca8a04"; rr(-w / 2, -40, w, 16, 8); g.fill(); g.fillStyle = "#fff"; rr(-w / 2 + 10, -16, w - 20, 44, 6); g.fill(); g.fillStyle = cor || NAVY; g.textAlign = "center"; g.fillText(txt, 0, 14); g.restore(); }
function caixaTipo(i, x, y, s, k, brilho) { if (k <= 0) return; const [e, n, c] = TIPOS[i], z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); if (brilho) { g.shadowColor = "#facc15"; g.shadowBlur = 30; }
  g.fillStyle = c; rr(-70, -60, 140, 120, 14); g.fill(); g.shadowBlur = 0; g.fillStyle = "rgba(0,0,0,.25)"; rr(-60, -60, 120, 20, 6); g.fill(); g.font = `40px ${F}`; g.textAlign = "center"; g.fillStyle = "#fff"; g.fillText(e, 0, 14);
  g.font = `800 17px ${F}`; g.fillText(n, 0, 46); g.restore(); }
function planilha(x, y, w, cab, lin, k, hl, totalTxt, totalCor) { if (k <= 0) return; const z = back(cl(k)), cw = w / cab.length, lh = 46; g.save(); g.translate(x, y); g.scale(z, z); g.translate(-w / 2, 0);
  g.fillStyle = "#fff"; rr(-10, -10, w + 20, (lin.length + 2) * lh + 20, 12); g.fill();
  cab.forEach((c, j) => { g.fillStyle = "#166534"; g.fillRect(j * cw, 0, cw - 2, lh - 2); g.fillStyle = "#fff"; let tc = 19; g.font = `800 ${tc}px ${F}`; while (g.measureText(c).width > cw - 14 && tc > 10) { tc--; g.font = `800 ${tc}px ${F}`; } g.textAlign = "center"; g.fillText(c, j * cw + cw / 2, 30); });
  lin.forEach((l, i) => l.forEach((c, j) => { g.fillStyle = hl === j ? "#fef08a" : i % 2 ? "#f1f5f9" : "#f8fafc"; g.fillRect(j * cw, (i + 1) * lh, cw - 2, lh - 2); g.fillStyle = NAVY; let tf = 18; g.font = `600 ${tf}px ${F}`; while (g.measureText(c).width > cw - 14 && tf > 10) { tf--; g.font = `600 ${tf}px ${F}`; } g.fillText(c, j * cw + cw / 2, (i + 1) * lh + 30); }));
  if (totalTxt) { g.fillStyle = totalCor || "#fee2e2"; g.fillRect(0, (lin.length + 1) * lh, w - 2, lh - 2); g.fillStyle = NAVY; g.font = `800 19px ${F}`; g.fillText(totalTxt, w / 2, (lin.length + 1) * lh + 30); } g.restore(); }
function sala(t) { const gr = g.createLinearGradient(0, -200, 0, 900); gr.addColorStop(0, "#fef3c7"); gr.addColorStop(1, "#fcd34d"); g.fillStyle = gr; g.fillRect(-600, -400, 2480, 1600);
  g.fillStyle = "#166534"; rr(120, 60, 420, 220, 10); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 10; rr(120, 60, 420, 220, 10); g.stroke(); g.fillStyle = "#e2e8f0"; g.font = `700 24px ${F}`; g.textAlign = "left"; g.fillText("⚽ Time da escola", 150, 110);
  g.fillStyle = "#78350f"; rr(200, 520, 880, 30, 8); g.fill(); g.fillStyle = "#92400e"; g.fillRect(240, 550, 24, 170); g.fillRect(1016, 550, 24, 170); g.fillStyle = "#b45309"; g.fillRect(-600, 700, 2480, 400); }
const TIME = [["Ana", "12", "(94) 99123-4567"], ["Caio", "9", "(94) 99234-5678"], ["Duda", "15", "(94) 99345-6789"]];
const F0 = "Tipos de dados: a planilha maluca!",
  F1 = "A Luana montou no computador o cadastro do time da escola: o nome, os pontos e o telefone de cada jogador. Aí ela pediu para o computador somar… e ele somou os telefones! Deu um número gigante. Que confusão!",
  F2 = "O robozinho Bit apareceu na tela: o problema não é a conta, Luana. É o tipo do dado! Vem comigo para a Fábrica de Dados.",
  F3 = "Aqui dentro, tudo o que o computador guarda é dado: um nome, um número, uma foto. Os dados chegam pela esteira, um atrás do outro.",
  F4 = "Mas os dados não são todos iguais. Cada dado tem um tipo, e o tipo diz o que o computador pode fazer com ele. Por isso a máquina separa cada pacote na caixa certa.",
  F5 = "Primeira caixa: texto. São letras, como um nome ou uma rua. Com texto, o computador junta palavras, procura letras e põe em ordem alfabética.",
  F6 = "Segunda caixa: número. Número é para fazer contas: somar, tirar a média, medir. Doze mais nove mais quinze: trinta e seis pontos!",
  F7 = "Terceira: data, com dia, mês e ano. Com a data, o computador conta quantos dias faltam e sabe o que vem antes e o que vem depois.",
  F8 = "Quarta: lógico. Ele só pode ser verdadeiro ou falso, sim ou não. Também se chama booleano, por causa do matemático inglês George Boole. Ele serve para decidir: se veio à aula, marca presença.",
  F9 = "E tem mais: imagem, som e vídeo também são tipos de dados. A foto a gente mostra e recorta, a música a gente toca e muda o volume, e o vídeo a gente pausa e avança.",
  F10 = "Agora, a pegadinha! O telefone chegou, e a máquina quase jogou ele na caixa de número. Errado! Telefone e CEP parecem números, mas são texto: ninguém soma dois telefones! Se o dado vai para a conta, é número. Se é só um nome feito de algarismos, é texto.",
  F11 = "Quando temos muitos dados juntos, eles formam uma coleção. A lista é um dado depois do outro, em ordem, como a lista de chamada ou a lista de compras.",
  F12 = "E a tabela organiza os dados em linhas e colunas. A linha é deitada, a coluna é em pé. Cada linha é um jogador, e cada coluna é uma informação, como no boletim: aluno, nota e faltas.",
  F13 = "De volta à planilha, a Luana arrumou tudo: o nome como texto, os pontos como número e o telefone como texto. Agora o computador soma só os pontos: trinta e seis! Missão cumprida!",
  F14 = "Onde eu uso isso? No cadastro de uma loja: o nome é texto, a idade é número, o nascimento é data e aceita receber ofertas é verdadeiro ou falso. Na tabela do campeonato, com uma linha por time. E na playlist, que é uma lista de músicas.",
  F15 = "Agora é com vocês: abram a Missão 5 no portal e separem os dados na caixa certa!";
const L5 = { 6: "Segunda caixa: número. Número é para fazer contas: somar, tirar a média, medir. 12 + 9 + 15 = 36 pontos!",
  13: "De volta à planilha, a Luana arrumou tudo: o nome como texto, os pontos como número e o telefone como texto. Agora o computador soma só os pontos: 36! Missão cumprida!",
  14: "Onde eu uso isso? No cadastro de uma loja: o nome é texto, a idade é número, o nascimento é data e “aceita receber ofertas?” é verdadeiro ou falso. Na tabela do campeonato, com uma linha por time. E na playlist, que é uma lista de músicas." };

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "zum"], [1.2, "pop"], [1.7, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.35], [1.5, 640, 340, 1]]); fabrica(t, t);
     ["Ana", "12", "10/05", "sim", "🖼️", "🔊", "🎬", "(94) 9912"].forEach((s, i) => pacote2(((i * 190 + t * 160) % 1700) - 200, 520, .9, s, TIPOS[i % 7][2], 1));
     TIPOS.forEach((x, i) => caixaTipo(i, 130 + i * 170, 340 + Math.sin(t * 2 + i) * 6, .7, seg(t, .3 + i * .1, .7 + i * .1))); g.restore();
     abertura(t, "6º ANO · MISSÃO 5", "Tipos de dados", "A PLANILHA", "MALUCA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Luana"), "pop"], [em(F1, "somar"), "tec"], [em(F1, "telefones"), "alerta"], [em(F1, "gigante"), "misterio"]],
   draw(t, D) { const lu = em(F1, "Luana"), so = em(F1, "somar"), te = em(F1, "telefones"), gi = em(F1, "gigante");
     g.save(); camera(t, [[0, 640, 380, 1], [lu, 420, 430, 1.2], [so, 760, 330, 1.35], [gi, 700, 360, 1.15]]); sala(t);
     monitor(760, 380, 1.3, (x, y, w, h) => { g.fillStyle = "#f8fafc"; g.fillRect(x, y, w, h); }); planilha(760, 225, 420, ["Nome", "Pontos", "Telefone"], TIME, seg(t, lu, lu + .5), -1, t > te ? "SOMA: 284.701.… ?!" : null);
     luana({ x: 380, y: 700, s: 1, olhar: 1, braco: t > gi ? -2.5 : -1, bracoE: t > gi ? 2.5 : .3, boca: t > gi ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > te) etiqueta("SOMOU OS TELEFONES! 😵", 1050, 600 - 90, 900, 420, seg(t, te, te + .4)); } },
 { chip: "O BIT CHEGOU", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Bit"), "ding"], [em(F2, "tipo"), "pop"], [em(F2, "Fábrica"), "voa"]],
   draw(t, D) { const bi = em(F2, "Bit"), ti = em(F2, "tipo"), fa = em(F2, "Fábrica");
     g.save(); camera(t, [[0, 640, 380, 1], [bi, 760, 330, 1.3], [fa, 760, 330, 1.35], [fa + 1.2, 760, 300, 5]]); sala(t);
     monitor(760, 380, 1.3, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); if (t > bi) robozinho(x + w / 2, y + h * .8, 1.4 * h / 220, t, true); });
     luana({ x: 380, y: 700, s: 1, olhar: 1, braco: -1, bracoE: .3, boca: t > bi ? "riso" : "", pisca: pisca(t) }); g.restore();
     if (t > ti && t < fa + .8) balao("O problema é o TIPO do dado!", 820, 140, seg(t, ti, ti + .3)); if (t > fa + .9) { g.fillStyle = `rgba(255,255,255,${cl((t - fa - .9) / .4)})`; g.fillRect(0, 0, 1280, 720); } } },
 { chip: "DADO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "dado"), "ding"], [em(F3, "nome"), "pop"], [em(F3, "número"), "pop"], [em(F3, "foto"), "pop"], [em(F3, "esteira"), "zum"]],
   draw(t, D) { const da = em(F3, "dado"), ts = [em(F3, "nome"), em(F3, "número"), em(F3, "foto")], es = em(F3, "esteira");
     g.save(); camera(t, [[0, 640, 300, 1.3], [da, 640, 360, 1], [es, 520, 420, 1.15]]); fabrica(t, t > es ? t - es : 0);
     [["Ana", 0], ["12", 1], ["🖼️ foto", 4]].forEach(([s, ti], i) => { if (t > ts[i]) pacote2(lerp(1400, 300 + i * 280, io2(seg(t, ts[i], ts[i] + .7))) - (t > es ? (t - es) * 120 : 0), 520, 1.1, s, TIPOS[ti][2], 1); });
     robozinho(1100, 540, 1.3, t, true); g.restore();
     if (t > da) palavra("DADO", 640, 110, seg(t, da, da + .4), 84); if (t > da + .6) rotulo("tudo o que o computador guarda", 640, 175, "#fde68a", seg(t, da + .6, da + 1)); } },
 { chip: "TIPO DE DADO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "tipo"), "ding"], [em(F4, "máquina"), "zum"], [em(F4, "certa"), "pop"]],
   draw(t, D) { const ti = em(F4, "tipo"), ma = em(F4, "máquina"), ce = em(F4, "certa");
     g.save(); camera(t, [[0, 640, 360, 1], [ma, 640, 380, .95]]); fabrica(t, t);
     TIPOS.forEach((x, i) => caixaTipo(i, 130 + i * 170, 380, .85, seg(t, ti + i * .12, ti + .4 + i * .12)));
     if (t > ce) { const k = cl((t - ce) / 1.2), x = lerp(640, 130, k), y = 480 - Math.sin(k * Math.PI) * 180; pacote2(x, y, .8, "Ana", TIPOS[0][2], 1); } g.restore();
     if (t > ti) palavra("CADA DADO TEM UM TIPO", 640, 110, seg(t, ti, ti + .4), 56); if (t > ma) rotulo("o tipo diz o que o computador pode fazer com ele", 640, 180, "#fde68a", seg(t, ma, ma + .4)); } },
 { chip: "🔤 TEXTO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "texto"), "ding"], [em(F5, "junta"), "pop"], [em(F5, "procura"), "pop"], [em(F5, "alfabética"), "ding"]],
   draw(t, D) { const tx = em(F5, "texto"), ju = em(F5, "junta"), pr = em(F5, "procura"), al = em(F5, "alfabética"); fundoEscuro(t, "#1e3a8a");
     caixaTipo(0, 180, 340, 1.4, seg(t, tx, tx + .4)); palavra("TEXTO = LETRAS", 640, 100, seg(t, tx, tx + .4), 60);
     if (t > ju) cartaoC("“Rua” + “das Flores” = “Rua das Flores”", 780, 250, 700, "#dbeafe", seg(t, ju, ju + .4));
     if (t > pr) cartaoC("🔎 procurar a letra “M” em “Maria”", 780, 370, 700, "#e0e7ff", seg(t, pr, pr + .4));
     if (t > al) { const nomes = ["Duda", "Ana", "Caio"], ord = ["Ana", "Caio", "Duda"], k = io2(seg(t, al, al + 1));
       nomes.forEach((n, i) => { const j = ord.indexOf(n); pacote2(560 + lerp(i, j, k) * 220, 510, .85, n, TIPOS[0][2], 1); }); rotulo("ordem alfabética: A → Z", 780, 590 - 20, "#fde68a", seg(t, al + .6, al + 1)); } } },
 { chip: "🔢 NÚMERO", fala: F6, legenda: L5[6], sfx: [[.1, "whoosh"], [em(F6, "número"), "ding"], [em(F6, "contas"), "pop"], [em(F6, "Doze"), "pop"], [em(F6, "trinta"), "festa"]],
   draw(t, D) { const nu = em(F6, "número"), co = em(F6, "contas"), dz = em(F6, "Doze"), tr = em(F6, "trinta"); fundoEscuro(t, "#14532d");
     caixaTipo(1, 180, 340, 1.4, seg(t, nu, nu + .4)); palavra("NÚMERO = CONTAS", 640, 100, seg(t, nu, nu + .4), 60);
     if (t > co) rotulo("➕ somar · ➗ tirar a média · 📏 medir", 780, 220, "#bbf7d0", seg(t, co, co + .4));
     ["12", "9", "15"].forEach((n, i) => { if (t > dz + i * .3) pacote2(520 + i * 160, 360, 1, n, TIPOS[1][2], seg(t, dz + i * .3, dz + .4 + i * .3)); });
     if (t > dz + .3) palavra("+", 600, 360, 1, 50); if (t > dz + .6) palavra("+", 760, 360, 1, 50);
     if (t > tr) cartaoC("= 36 pontos ✅", 680, 500, 380, "#bbf7d0", seg(t, tr, tr + .4)); } },
 { chip: "📅 DATA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "data"), "ding"], [em(F7, "faltam"), "pop"], [em(F7, "antes"), "pop"]],
   draw(t, D) { const da = em(F7, "data"), fa = em(F7, "faltam"), an = em(F7, "antes"); fundoEscuro(t, "#78350f");
     caixaTipo(2, 180, 340, 1.4, seg(t, da, da + .4)); palavra("DATA: DIA, MÊS E ANO", 640, 100, seg(t, da, da + .4), 56);
     calendario(560, 330, 1.4, "10/05", "#d97706"); if (t > da + .4) rotulo("10/05/2027", 560, 470, "#fde68a", 1);
     if (t > fa) cartaoC("⏳ faltam 12 dias para o jogo!", 900, 300, 460, "#fef3c7", seg(t, fa, fa + .4));
     if (t > an) cartaoC("05/05 vem ANTES de 10/05", 900, 430, 460, "#ffedd5", seg(t, an, an + .4)); } },
 { chip: "✅ LÓGICO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "lógico"), "ding"], [em(F8, "verdadeiro"), "pop"], [em(F8, "booleano"), "pop"], [em(F8, "Boole"), "ding"], [em(F8, "decidir"), "pop"]],
   draw(t, D) { const lo = em(F8, "lógico"), ve = em(F8, "verdadeiro"), bo = em(F8, "booleano"), de = em(F8, "decidir"); fundoEscuro(t, "#4c1d95");
     caixaTipo(3, 180, 340, 1.4, seg(t, lo, lo + .4)); palavra("LÓGICO: SIM OU NÃO", 640, 100, seg(t, lo, lo + .4), 58);
     if (t > ve) { const on = Math.sin(t * 2) > 0; g.fillStyle = "#334155"; rr(520, 250, 200, 90, 45); g.fill(); g.fillStyle = on ? "#22c55e" : "#ef4444"; g.beginPath(); g.arc(on ? 675 : 565, 295, 38, 0, 7); g.fill(); rotulo(on ? "VERDADEIRO" : "FALSO", 620, 380, on ? "#86efac" : "#fca5a5", 1); }
     if (t > bo) cartaoC("também se chama BOOLEANO", 960, 270, 420, "#ede9fe", seg(t, bo, bo + .4), "de George Boole, matemático inglês");
     if (t > de) { noDecisao("veio à aula?", 800, 470, seg(t, de, de + .4), "#7c3aed"); if (t > de + .6) rotulo("sim → marca presença ✅", 1060, 480, "#86efac", seg(t, de + .6, de + 1)); } } },
 { chip: "🖼️ 🔊 🎬", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "imagem"), "foto"], [em(F9, "foto"), "pop"], [em(F9, "música"), "som"], [em(F9, "vídeo", 1), "pop"]],
   draw(t, D) { const im = em(F9, "imagem"), fo = em(F9, "foto"), mu = em(F9, "música"), vi = em(F9, "vídeo", 1); fundoEscuro(t, "#831843");
     palavra("IMAGEM, SOM E VÍDEO", 640, 100, seg(t, im, im + .4), 58);
     [[4, fo, "mostrar · recortar · mudar o tamanho"], [5, mu, "tocar · mudar o volume"], [6, vi, "tocar · pausar · avançar"]].forEach(([i, tt, s], j) => { if (t > tt) { caixaTipo(i, 250 + j * 390, 320, 1.2, seg(t, tt, tt + .4)); rotulo(s, 250 + j * 390, 440, "#fbcfe8", seg(t, tt + .3, tt + .7)); } });
     if (t > mu) ondaAudio(640, 520, 200, t, "#67e8f9"); } },
 { chip: "⚠️ A PEGADINHA", fala: F10, sfx: [[.1, "alerta"], [em(F10, "telefone"), "pop"], [em(F10, "Errado"), "alerta"], [em(F10, "texto"), "ding"], [em(F10, "ninguém"), "pop"]],
   draw(t, D) { const te = em(F10, "telefone"), er = em(F10, "Errado"), tx = em(F10, "texto"), ni = em(F10, "ninguém");
     g.save(); camera(t, [[0, 640, 360, 1], [te, 520, 380, 1.15], [ni, 640, 360, 1]]); fabrica(t, 0);
     caixaTipo(0, 300, 330, 1.1, 1, t > tx); caixaTipo(1, 760, 330, 1.1, 1, t > te && t < er);
     const kx = t < er ? seg(t, te, te + 1) : 1 - seg(t, er, er + 1), x = lerp(1200, 760, kx) - (t > er ? seg(t, er, er + 1) * 460 : 0);
     pacote2(t > er ? lerp(760, 300, io2(seg(t, er, er + 1))) : lerp(1200, 760, io2(seg(t, te, te + 1))), 470, .95, "(94) 99123-4567", TIPOS[0][2], seg(t, te, te + .3)); g.restore();
     if (t > er && t < tx + .5) { xVermelho(760, 300, 50, seg(t, er, er + .3)); } if (t > tx) palavra("TELEFONE E CEP = TEXTO", 640, 100, seg(t, tx, tx + .4), 54);
     if (t > ni) { cartaoC("vai para a conta? → NÚMERO", 640, 205, 620, "#bbf7d0", seg(t, ni, ni + .4)); } } },
 { chip: "COLEÇÃO: LISTA", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "coleções"), "ding"], [em(F11, "lista"), "pop"], [em(F11, "chamada"), "pop"], [em(F11, "compras"), "pop"]],
   draw(t, D) { const co = em(F11, "coleção"), li = em(F11, "lista"), ch = em(F11, "chamada"), cp = em(F11, "compras"); fundoEscuro(t, "#0e7490");
     palavra("COLEÇÃO", 640, 90, seg(t, co, co + .4), 66);
     if (t > li) { cartaoC("📝 LISTA: um depois do outro, em ordem", 640, 180, 760, "#cffafe", seg(t, li, li + .4)); }
     if (t > li) ["Ana", "Bia", "Caio", "Duda", "Léo"].forEach((n, i) => { const k = seg(t, li + .3 + i * .15, li + .7 + i * .15); if (k > 0) { pacote2(230 + i * 200, 340, .9, n, TIPOS[0][2], k); g.fillStyle = "#facc15"; g.font = `900 26px ${F}`; g.textAlign = "center"; g.fillText(String(i + 1), 230 + i * 200, 290); } });
     if (t > cp) cartaoC("🛒 arroz · feijão · leite · pão", 640, 480, 620, "#fef9c3", seg(t, cp, cp + .4), "lista de compras"); } },
 { chip: "COLEÇÃO: TABELA", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "tabela"), "ding"], [em(F12, "linha"), "pop"], [em(F12, "coluna"), "pop"], [em(F12, "boletim"), "pop"]],
   draw(t, D) { const ta = em(F12, "tabela"), li = em(F12, "linha"), co = em(F12, "coluna"), bo = em(F12, "boletim"); fundoEscuro(t, "#14532d");
     palavra("TABELA: LINHAS E COLUNAS", 640, 90, seg(t, ta, ta + .4), 54);
     const lin = t > bo ? [["Ana", "8,5", "1"], ["Caio", "7,0", "3"], ["Duda", "9,0", "0"]] : TIME.map(r => [r[0], r[1], r[2]]);
     planilha(560, 170, 560, t > bo ? ["Aluno", "Nota", "Faltas"] : ["Nome", "Pontos", "Telefone"], lin, seg(t, ta, ta + .4), t > co && t < bo ? 1 : -1);
     if (t > li) { g.strokeStyle = "#facc15"; g.lineWidth = 6; g.strokeRect(282, 264, 556, 44); etiqueta("LINHA (deitada) = um jogador", 1060, 280, 840, 286, seg(t, li, li + .4)); }
     if (t > co) { etiqueta("COLUNA (em pé) = uma informação", 1060, 420, 660, 380, seg(t, co, co + .4)); } } },
 { chip: "MISSÃO CUMPRIDA", fala: F13, legenda: L5[13], sfx: [[.1, "whoosh"], [em(F13, "texto"), "pop"], [em(F13, "número"), "pop"], [em(F13, "pontos", 1), "ding"], [em(F13, "trinta"), "festa"]],
   draw(t, D) { const tx = em(F13, "texto"), tr = em(F13, "trinta"), mc = em(F13, "Missão");
     g.save(); camera(t, [[0, 700, 330, 1.3], [tr, 640, 430, .95]]); sala(t); monitor(760, 380, 1.3, (x, y, w, h) => { g.fillStyle = "#f8fafc"; g.fillRect(x, y, w, h); });
     planilha(760, 225, 420, ["Nome 🔤", "Pontos 🔢", "Telefone 🔤"], TIME, 1, t > tr ? 1 : -1, t > tr ? "SOMA DOS PONTOS: 36 ✅" : null, "#bbf7d0");
     luana({ x: 380, y: 700, s: 1, olhar: 1, braco: t > tr ? -2.6 : -1, bracoE: t > tr ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); robozinho(1150, 600, 1.2, t, true); g.restore();
     if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F14, legenda: L5[14], sfx: [[.1, "whoosh"], [em(F14, "loja"), "pop"], [em(F14, "campeonato"), "pop"], [em(F14, "playlist"), "pop"]],
   draw(t, D) { ondeUso(t, F14, [["loja", "🛍️", "Cadastro da loja:", "texto, número, data, sim/não"], ["campeonato", "🏆", "Tabela do campeonato:", "uma linha por time"], ["playlist", "🎧", "Playlist:", "uma lista de músicas"]]); } },
 { chip: "", fala: F15, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 5", [LUANA]); robozinho(1040, 660, 1.4, t, true); } }
];
// 🤖 o Bit acompanha as explicações na fábrica, reagindo (padrão: personagem presente)
[[5, 1150], [6, 1150], [7, 1150], [8, 1150], [9, 1150], [11, 1150], [12, 1150]].forEach(([i, x]) => { const c = CENAS[i], d0 = c.draw; c.draw = function (t, D) { d0.call(this, t, D); g.save(); g.setTransform(1, 0, 0, 1, 0, 0); g.globalAlpha = 1;
  robozinho(x, 570 - Math.abs(Math.sin(t * 3)) * 6, 1.1, t, Math.sin(t * 1.3) > -.3); g.restore(); }; });

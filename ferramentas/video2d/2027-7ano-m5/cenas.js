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
/* ===== peças da festa da turma (7º M5 v2) ===== */
const PARTES = [["🎈", "decoração", "#ec4899"], ["🍕", "comida", "#f97316"], ["🎵", "música", "#8b5cf6"], ["🎲", "brincadeiras", "#16a34a"]];
function salao(t, arrumado) { g.fillStyle = "#fef3c7"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#d97706"; g.fillRect(-800, 560, 2880, 700);
  if (arrumado) { for (let i = 0; i < 24; i++) { const x = -40 + i * 60, y = 40 + Math.sin(i * .5) * 14; g.fillStyle = ["#ef4444", "#facc15", "#22c55e", "#3b82f6"][i % 4]; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 40, y); g.lineTo(x + 20, y + 34); g.fill(); }
    [[120, 220, "#ef4444"], [1160, 200, "#3b82f6"], [1080, 260, "#facc15"]].forEach(([x, y, c], i) => { const b = Math.sin(t * 2 + i) * 8; g.strokeStyle = "#475569"; g.lineWidth = 2; g.beginPath(); g.moveTo(x, y + b + 40); g.lineTo(x, 560); g.stroke(); g.fillStyle = c; g.beginPath(); g.ellipse(x, y + b, 30, 38, 0, 0, 7); g.fill(); }); } }
// caixa de tarefa (pedaço do problema)
function tarefa(x, y, w, h, em_, txt, cor, k, rot) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.rotate(rot || 0); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.18)"; rr(-w / 2 + 6, -h / 2 + 8, w, h, 14); g.fill();
  g.fillStyle = "#fff"; rr(-w / 2, -h / 2, w, h, 14); g.fill(); g.strokeStyle = cor; g.lineWidth = 6; g.stroke(); emo(em_, 0, -h / 2 + Math.min(54, h * .45), Math.min(46, h * .4));
  g.fillStyle = NAVY; g.font = `800 ${w > 300 ? 30 : 20}px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, h / 2 - 18); g.restore(); }
function liga(x0, y0, x1, y1, k, cor) { if (k <= 0) return; g.strokeStyle = cor || "#fde68a"; g.lineWidth = 5; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + (x1 - x0) * cl(k), y0 + (y1 - y0) * cl(k)); g.stroke(); }
// palheta de gavetas do editor de blocos
function paleta(x, y, abre, t) { const gav = [["🔁 Repetir", "#ea580c"], ["❓ Decisões", "#0891b2"], ["📦 Variáveis", "#ca8a04"], ["🧩 Meus blocos", "#db2777"]];
  g.fillStyle = "#1f2937"; rr(x, y, 250, 300, 16); g.fill(); gav.forEach(([n, c], i) => { const on = abre && i === 3; g.fillStyle = on ? c : "#374151"; rr(x + 14, y + 16 + i * 68, 222, 54, 12); g.fill(); g.fillStyle = on ? "#fff" : "#e5e7eb"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText(n, x + 30, y + 50 + i * 68); }); }
const GRITO = ["mostrar “Sétimo!”", "mostrar “Uh, uh!”", "tocar som 🥁"];
const F0 = "Decompor e reaproveitar: o segredo dos problemas grandes!",
  F1 = "A turma da Duda ficou responsável pela festa de fim de ano. Decoração, comida, música, brincadeiras, convite, limpeza… Era coisa demais! Todo mundo falando ao mesmo tempo, e ninguém sabia por onde começar.",
  F2 = "O segredo é decompor: dividir o problema grande em partes menores, que dá para resolver uma de cada vez. A festa virou quatro partes: decoração, comida, música e brincadeiras.",
  F3 = "Aí cada grupo cuidou de uma parte. Isso é colaborar: trabalhar junto, cada um fazendo um pedaço do mesmo projeto. E, no fim, as partes se juntam e formam a festa inteira.",
  F4 = "No programa é igual. A Duda programou a festa no editor de blocos e percebeu uma coisa: o grito da turma aparecia de novo e de novo. Os mesmos blocos, copiados em vários lugares!",
  F5 = "Quando uma parte se repete, a gente cria um bloco próprio, com nome. Ele também é chamado de função. Dentro dele ficam os blocos da parte que se repete, escritos uma vez só.",
  F6 = "Depois, é só chamar o bloco sempre que precisar. Chamar é usar o bloco no programa: cada vez que ele é chamado, todos os blocos de dentro são executados. Isso é reaproveitar.",
  F7 = "Pense numa música com refrão. Sem bloco próprio, você escreve o refrão inteiro toda vez. Com o bloco refrão, escreve uma vez só, e o programa fica assim: verso um, refrão, verso dois, refrão.",
  F8 = "No editor, o bloco próprio fica na gaveta Meus blocos. Você pega o bloco para fazer algo, dá um nome, como grito, e coloca dentro dele os blocos que se repetem.",
  F9 = "E as vantagens? O programa fica mais curto. Se precisar consertar, conserta num lugar só, e vale em todos. O nome do bloco diz o que ele faz. E dá para dividir o trabalho: cada colega cria um bloco.",
  F10 = "A turma da Duda dividiu a festa em partes, e cada grupo fez a sua. E o grito da turma virou um bloco só, chamado a festa inteira. Foi a melhor festa do ano. Missão cumprida!",
  F11 = "Onde eu uso isso? Num trabalho em grupo, quando cada um faz uma parte. Na fábrica de carros, onde cada setor monta uma peça. E no botão compartilhar, um bloco pronto que todo aplicativo reaproveita.",
  F12 = "Agora é com vocês: abram a Missão 5 no portal e dividam para conquistar!";
const L75 = { 2: F2.replace("quatro partes", "4 partes"), 7: F7.replace("verso um", "verso 1").replace("verso dois", "verso 2") };
const CAOS = [["🎈", "decoração"], ["🍕", "comida"], ["🎵", "música"], ["🎲", "brincadeiras"], ["✉️", "convite"], ["🧹", "limpeza"]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "pop"], [.8, "pop"], [1.2, "pop"], [1.8, "ding"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 320, 1]]);
     tarefa(640, 320, 360, 170, "🎉", "FESTA DA TURMA", "#ef4444", seg(t, .1, .5), Math.sin(t * 5) * .04);
     CAOS.forEach(([e, n], i) => { const a = i / 6 * 6.28 + t * .6; tarefa(640 + Math.cos(a) * 440, 330 + Math.sin(a) * 110, 150, 90, e, n, PARTES[i % 4][2], seg(t, .3 + i * .15, .7 + i * .15), Math.sin(t * 3 + i) * .1); });
     duda({ x: 1150, y: 640, s: .8, olhar: -1, braco: -2.4, bracoE: .3, boca: "o", pisca: pisca(t) }); g.restore();
     abertura(t, "7º ANO · MISSÃO 5", "Decompor e reaproveitar", "O SEGREDO DOS", "PROBLEMAS GRANDES!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Decoração"), "pop"], [em(F1, "convite"), "pop"], [em(F1, "demais"), "alerta"], [em(F1, "ninguém"), "zum"]],
   draw(t, D) { const de = em(F1, "Decoração"), dm = em(F1, "demais"), to = em(F1, "Todo"), ng = em(F1, "ninguém");
     g.save(); camera(t, [[0, 640, 360, 1], [de, 640, 300, 1.08], [ng, 640, 360, 1]]); salao(t, false);
     CAOS.forEach(([e, n], i) => { const k = seg(t, de + i * .35, de + .4 + i * .35); tarefa(220 + (i % 3) * 300 + Math.sin(t * 4 + i) * (t > dm ? 10 : 0), 140 + Math.floor(i / 3) * 150, 230, 120, e, n, PARTES[i % 4][2], k, Math.sin(t * 3 + i) * (t > dm ? .12 : .02)); });
     [["#f43f5e", "longo"], ["#0ea5e9", ""], ["#16a34a", ""], ["#a855f7", "longo"]].forEach(([c, cab], i) => boneco({ x: 200 + i * 300, y: 690, s: .75, camisa: c, cabelo: cab, olhar: i % 2 ? -1 : 1, braco: t > to ? -2 + Math.sin(t * 6 + i) * .5 : .3, bracoE: .3, boca: t > to ? "o" : "", pisca: pisca(t + i) })); g.restore();
     if (t > to) { balao("E a comida?!", 230, 420, 1); balao("E a música?!", 830, 440, 1); }
     if (t > ng) palavra("POR ONDE COMEÇAR?! 😵", 560, 90, seg(t, ng, ng + .4), 54); } },
 { chip: "DECOMPOR", fala: F2, legenda: L75[2], sfx: [[.1, "whoosh"], [em(F2, "decompor"), "ding"], [em(F2, "menores"), "pop"], [em(F2, "decoração"), "pop"], [em(F2, "brincadeiras"), "pop"]],
   draw(t, D) { const dc = em(F2, "decompor"), mn = em(F2, "menores"), vi = em(F2, "virou"); fundoEscuro(t, "#14532d"); const k = seg(t, mn, mn + 1);
     g.save(); camera(t, [[0, 640, 300, 1.1], [vi, 640, 360, 1]]); tarefa(640, 250 - 90 * k, 380 - 80 * k, 150 - 40 * k, "🎉", "FESTA DA TURMA", "#ef4444", 1);
     PARTES.forEach(([e, n, c], i) => { const x = 220 + i * 280; liga(640, 220, x, 360, seg(t, mn + .4 + i * .2, mn + .8 + i * .2)); tarefa(x, 410, 230, 120, e, n, c, seg(t, mn + .5 + i * .25, mn + .9 + i * .25)); }); g.restore();
     palavra("DECOMPOR", 520, 80, seg(t, dc, dc + .4), 64); if (t > dc) cartaoC("= dividir o problema grande em partes menores", 640, 535, 640, "#fff", seg(t, dc + .3, dc + .7)); } },
 { chip: "COLABORAR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "grupo"), "pop"], [em(F3, "colaborar"), "ding"], [em(F3, "juntam"), "festa"]],
   draw(t, D) { const gr = em(F3, "grupo"), co = em(F3, "colaborar"), ju = em(F3, "juntam"); const k = seg(t, ju, ju + 1.2);
     g.save(); camera(t, [[0, 640, 360, 1], [co, 640, 330, 1.08], [ju, 640, 340, 1]]); salao(t, k > .5);
     PARTES.forEach(([e, n, c], i) => { const x0 = 200 + i * 290, x = x0 + (640 - x0) * k * .7; tarefa(x, 220 + 40 * k, 210, 110, e, n, c, seg(t, gr + i * .2, gr + .4 + i * .2));
       boneco({ x: x0, y: 600, s: .7, camisa: c, cabelo: i % 2 ? "longo" : "", olhar: 1, braco: -1.8, bracoE: .3, boca: "riso", pisca: pisca(t + i) }); });
     if (k > .9) tarefa(640, 300, 380, 140, "🎉", "FESTA PRONTA!", "#22c55e", seg(t, ju + 1, ju + 1.4)); g.restore();
     if (t > co) palavra("COLABORAR", 520, 80, seg(t, co, co + .4), 60); if (t > co && t < ju) cartaoC("= trabalhar junto, cada um faz uma parte", 640, 460, 560, "#fff", seg(t, co + .3, co + .7)); } },
 { chip: "NO PROGRAMA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "grito"), "alerta"], [em(F4, "novo"), "pop"], [em(F4, "copiados"), "zum"]],
   draw(t, D) { const pr = em(F4, "programou"), gr = em(F4, "grito"), cp = em(F4, "copiados"); fundoEscuro(t, "#1e3a8a");
     const prog = [["🎈 montar decoração", "#ec4899"], ...GRITO.map(s => [s, "#7c3aed"]), ["🍕 servir comida", "#f97316"], ...GRITO.map(s => [s, "#7c3aed"]), ["🎵 tocar música", "#8b5cf6"], ...GRITO.map(s => [s, "#7c3aed"])];
     g.save(); camera(t, [[0, 520, 300, 1.05], [gr, 520, 360, 1], [cp, 520, 380, 1.02]]); const sc = Math.max(0, (t - pr) * 30);
     prog.forEach(([s, c], i) => { const y = 120 + i * 58 - Math.min(sc, 220); if (y < 60 || y > 490) return; bloco(220, y, 340, s, c, 1, t > gr && c === "#7c3aed" && s === GRITO[0]); });
     if (t > gr) [1, 5, 9].forEach(i => { const y = 120 + i * 58 - Math.min(sc, 220); if (y > 60 && y < 340) { g.strokeStyle = "#fde047"; g.lineWidth = 4; g.setLineDash([8, 6]); rr(206, y - 8, 370, 182, 12); g.stroke(); g.setLineDash([]); } }); g.restore();
     if (t > cp) cartaoC("😩 os mesmos blocos, copiados 3 vezes!", 940, 300, 480, "#fecaca", seg(t, cp, cp + .4)); duda({ x: 1100, y: 680, s: .75, olhar: -1, braco: -1.3, bracoE: .3, boca: t > cp ? "o" : "", pisca: pisca(t) }); } },
 { chip: "BLOCO PRÓPRIO = FUNÇÃO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "bloco"), "ding"], [em(F5, "função"), "pop"], [em(F5, "Dentro"), "pop"]],
   draw(t, D) { const bp = em(F5, "bloco"), fu = em(F5, "função"), de = em(F5, "Dentro"); fundoEscuro(t, "#831843");
     g.save(); camera(t, [[0, 560, 330, 1.1], [de, 640, 360, 1]]); bocaC(280, 170, 420, 250, "🧩 para fazer: grito", "#db2777", seg(t, bp, bp + .4));
     GRITO.forEach((s, i) => bloco(316, 230 + i * 58, 320, s, "#7c3aed", seg(t, de + i * .3, de + .4 + i * .3))); g.restore();
     palavra("BLOCO PRÓPRIO", 520, 80, seg(t, bp, bp + .4), 60); if (t > fu) cartaoC("também chamado de FUNÇÃO", 960, 250, 440, "#fde68a", seg(t, fu, fu + .4), "ou procedimento");
     if (t > de) etiqueta("escrito UMA vez só", 960, 420, 640, 340, seg(t, de + 1, de + 1.4)); duda({ x: 1150, y: 680, s: .7, olhar: -1, braco: -1.3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CHAMAR O BLOCO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "chamar"), "ding"], [em(F6, "executados"), "pop"], [em(F6, "reaproveitar"), "ding"]],
   draw(t, D) { const ch = em(F6, "chamar"), ex = em(F6, "executados"), re = em(F6, "reaproveitar"); fundoEscuro(t, "#1e3a8a");
     const prog = [["🎈 montar decoração", "#ec4899"], ["🧩 grito", "#db2777"], ["🍕 servir comida", "#f97316"], ["🧩 grito", "#db2777"], ["🎵 tocar música", "#8b5cf6"], ["🧩 grito", "#db2777"]];
     const at = t > ex ? Math.floor((t - ex) * 1.2) % 3 : -1;
     g.save(); camera(t, [[0, 640, 360, 1], [ch, 600, 340, 1.06], [re + 1, 640, 360, 1]]); prog.forEach(([s, c], i) => bloco(140, 130 + i * 62, 300, s, c, seg(t, ch + i * .15, ch + .4 + i * .15), at >= 0 && i === 1 + at * 2));
     bocaC(760, 150, 380, 240, "🧩 para fazer: grito", "#db2777", 1); GRITO.forEach((s, i) => bloco(796, 210 + i * 58, 300, s, "#7c3aed", 1, at >= 0));
     if (at >= 0) { const y = 130 + (1 + at * 2) * 62 + 28; g.strokeStyle = "#fde047"; g.lineWidth = 5; g.beginPath(); g.moveTo(440, y); g.quadraticCurveTo(620, y - 60, 760, 180); g.stroke(); } g.restore();
     palavra("CHAMAR", 520, 80, seg(t, ch, ch + .4), 60); if (t > re) cartaoC("♻️ isso é REAPROVEITAR", 940, 470, 380, "#bbf7d0", seg(t, re, re + .4)); } },
 { chip: "EXEMPLO: O REFRÃO", fala: F7, legenda: L75[7], sfx: [[.1, "whoosh"], [em(F7, "Sem"), "alerta"], [em(F7, "Com"), "ding"], [em(F7, "verso"), "pop"]],
   draw(t, D) { const se = em(F7, "Sem"), co = em(F7, "Com"), ve = em(F7, "verso"); fundoEscuro(t, "#4c1d95");
     g.save(); camera(t, [[0, 640, 360, 1], [se, 560, 340, 1.03], [co, 720, 340, 1.03], [ve + 2, 640, 360, 1]]);
     if (t > se) { cartaoC("❌ SEM bloco próprio", 330, 130, 400, "#fecaca", seg(t, se, se + .4)); ["verso 1", "la la la", "la la la", "verso 2", "la la la", "la la la"].forEach((s, i) => bloco(160, 180 + i * 56, 300, s, s[0] === "v" ? "#0891b2" : "#7c3aed", seg(t, se + .3 + i * .15, se + .7 + i * .15))); }
     if (t > co) { cartaoC("✅ COM o bloco refrão", 930, 130, 400, "#bbf7d0", seg(t, co, co + .4)); ["verso 1", "🧩 refrão", "verso 2", "🧩 refrão"].forEach((s, i) => bloco(780, 180 + i * 56, 300, s, s[0] === "v" ? "#0891b2" : "#db2777", seg(t, ve + i * .3, ve + .4 + i * .3))); } g.restore();
     palavra("A MÚSICA COM REFRÃO", 560, 70, seg(t, 0, .4), 46); if (t > ve + 1.5) etiqueta("bem mais curto!", 1060, 520, 940, 400, seg(t, ve + 1.5, ve + 1.9)); } },
 { chip: "GAVETA MEUS BLOCOS", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "gaveta"), "pop"], [em(F8, "nome"), "tec"], [em(F8, "dentro"), "pop"]],
   draw(t, D) { const ga = em(F8, "gaveta"), pe = em(F8, "pega"), no = em(F8, "nome"), de = em(F8, "dentro"); fundoEscuro(t, "#0f172a");
     g.save(); camera(t, [[0, 560, 340, 1.05], [pe, 640, 340, 1.03], [de, 680, 350, 1.03]]); paleta(90, 130, t > ga, t);
     if (t > pe) { const nome = t > no ? "grito".slice(0, Math.min(5, Math.floor((t - no) * 6))) : "…"; bocaC(420, 160, 400, t > de ? 250 : 120, "🧩 para fazer: " + nome, "#db2777", seg(t, pe, pe + .4)); }
     if (t > de) GRITO.forEach((s, i) => bloco(456, 220 + i * 58, 320, s, "#7c3aed", seg(t, de + i * .3, de + .4 + i * .3))); g.restore();
     if (t > ga) etiqueta("🧩 Meus blocos", 300, 520, 200, 410, seg(t, ga, ga + .4)); if (t > no) etiqueta("dê um NOME que diga o que ele faz", 1040, 120, 760, 190, seg(t, no, no + .4)); robozinho(1170, 600, .9, t, true); } },
 { chip: "AS VANTAGENS", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "curto"), "pop"], [em(F9, "consertar"), "pop"], [em(F9, "nome"), "pop"], [em(F9, "dividir"), "pop"]],
   draw(t, D) { const ts = [em(F9, "curto"), em(F9, "consertar"), em(F9, "nome"), em(F9, "dividir")]; fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 640, 340, 1.04], [ts[3] + 1, 640, 360, 1]]);
     [["📏", "programa mais curto", "menos blocos repetidos"], ["🔧", "conserta num lugar só", "e o conserto vale em todos"], ["🏷️", "o nome diz o que faz", "fácil de entender"], ["🤝", "divide o trabalho", "cada colega cria um bloco"]].forEach(([e, s, sb], i) => { if (t > ts[i]) cartaoC(e + "  " + s, 340 + (i % 2) * 600, 200 + Math.floor(i / 2) * 150, 540, "#fff", seg(t, ts[i], ts[i] + .4), sb); }); g.restore();
     palavra("POR QUE VALE A PENA?", 560, 80, seg(t, 0, .4), 54); caio({ x: 1150, y: 690, s: .7, olhar: -1, braco: t > ts[3] ? -2.6 : -1, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "grupo"), "pop"], [em(F10, "grito"), "festa"], [em(F10, "melhor"), "ding"], [em(F10, "Missão"), "festa"]],
   draw(t, D) { const gr = em(F10, "grupo"), gi = em(F10, "grito"), mc = em(F10, "Missão");
     g.save(); camera(t, [[0, 640, 380, 1.1], [mc, 640, 400, 1]]); salao(t, true);
     [["#f43f5e", "longo"], ["#0ea5e9", ""], ["#16a34a", ""], ["#a855f7", "longo"], ["#f97316", ""]].forEach(([c, cab], i) => boneco({ x: 200 + i * 220, y: 640 - Math.abs(Math.sin(t * 5 + i)) * (t > gi ? 20 : 0), s: .8, camisa: c, cabelo: cab, olhar: 1, braco: t > gi ? -2.6 : .3, bracoE: t > gi ? 2.6 : .3, boca: "riso", pisca: pisca(t + i) }));
     if (t > gi && t < mc) bloco(470, 240, 300, "🧩 grito", "#db2777", seg(t, gi, gi + .4), true); g.restore();
     if (t > gi && t < mc) balao("Sétimo! Uh, uh! 🥁", 640, 160, seg(t, gi, gi + .3)); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "trabalho"), "pop"], [em(F11, "fábrica"), "pop"], [em(F11, "compartilhar"), "pop"]],
   draw(t, D) { ondeUso(t, F11, [["trabalho", "📝", "Trabalho em grupo:", "cada um faz uma parte"], ["fábrica", "🚗", "Fábrica de carros:", "cada setor, uma peça"], ["compartilhar", "📤", "Botão compartilhar:", "bloco pronto reaproveitado"]]); } },
 { chip: "", fala: F12, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 5", [CAIO, MENINA7]); } }
];

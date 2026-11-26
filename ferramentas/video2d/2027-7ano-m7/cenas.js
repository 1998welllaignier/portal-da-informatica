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
/* ===== Delegacia dos Programas (7º M7 v2) ===== */
function delegacia(t, semPlaca) { g.fillStyle = "#334155"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#1f2937"; g.fillRect(-800, 560, 2880, 700);
  g.fillStyle = "#475569"; for (let i = 0; i < 6; i++) { rr(-200 + i * 300, 40, 220, 300, 10); g.fill(); } g.fillStyle = "rgba(253,224,71,.08)"; g.beginPath(); g.moveTo(640, -40); g.lineTo(300, 560); g.lineTo(980, 560); g.fill();
  g.fillStyle = "#78350f"; g.fillRect(180, 470, 920, 26); g.fillStyle = "#57290b"; g.fillRect(210, 496, 22, 200); g.fillRect(1050, 496, 22, 200);
  if (semPlaca) return; g.fillStyle = "#fde68a"; rr(430, 70, 420, 56, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("🕵️ DELEGACIA DOS PROGRAMAS", 640, 106); }
function pastaCaso(x, y, txt, cor, k, rot) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.rotate(rot || 0); g.scale(z, z); g.fillStyle = cor || "#d97706"; rr(-90, -70, 70, 24, 6); g.fill(); rr(-90, -56, 180, 120, 10); g.fill();
  g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 14); g.restore(); }
function carimbo(x, y, txt, k) { if (k <= 0) return; const z = 1 + (1 - cl(k)) * 1.5; g.save(); g.translate(x, y); g.rotate(-.18); g.scale(z, z); g.globalAlpha = Math.min(1, k * 2); g.strokeStyle = "#16a34a"; g.lineWidth = 6; rr(-120, -34, 240, 68, 10); g.stroke();
  g.fillStyle = "#16a34a"; g.font = `900 30px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 11); g.restore(); }
function listaItens(x, y, nomes, hl, k, tit) { if (k <= 0) return; g.fillStyle = "#334155"; rr(x - 110, y, 220, 44, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(tit || "lista colegas", x, y + 29);
  nomes.forEach((n, i) => { g.fillStyle = hl === i ? "#fde68a" : "#fff"; rr(x - 100, y + 54 + i * 52, 200, 44, 8); g.fill(); g.fillStyle = "#64748b"; g.font = `700 14px ${F}`; g.textAlign = "left"; g.fillText((i + 1) + "º", x - 90, y + 82 + i * 52); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText(n, x + 10, y + 83 + i * 52); }); }
const F0 = "Desafios de depuração: hoje é dia de detetive!",
  F1 = "Chegou um chamado na Delegacia dos Programas: três programas quebrados! Um mostra o colega errado, outro esqueceu a idade de todo mundo, e o terceiro repete a mesma coisa errada em vários lugares. Quem vai resolver?",
  F2 = "A dupla de detetives Duda e Caio vai usar o método da Missão 4: rodar, comparar com o esperado, achar o bloco responsável, mudar uma coisa só e corrigir. E cada palpite sobre onde está o erro tem nome: hipótese. A gente testa a hipótese mudando uma coisa.",
  F3 = "Caso um: o programa devia mostrar o segundo nome da lista, a Bia, mas mostrou o Caio. A pista, o sinal que ajuda a achar o erro, é esta: a posição está errada. Na lista do editor, a contagem começa no um. O bloco pedia o item três, e o certo é o item dois. Corrigido!",
  F4 = "Caso dois: apareceu sem campo, no lugar da idade de todo mundo. Pista: o nome do campo está diferente! Na ficha, o campo se chama idade, mas o bloco procurava idadee, com dois e. Uma letra a mais, e o programa não acha nada.",
  F5 = "Caso três: a saudação saiu errada em três lugares. Pista: quando o erro se repete em vários lugares, ele mora dentro do bloco próprio. Conserte lá dentro, uma vez só, e o conserto vale em todos!",
  F6 = "E se um item aparecer repetido, ou faltar? Confira se o para cada está percorrendo a lista certa, e se o bloco está dentro ou fora do lugar.",
  F7 = "Três casos resolvidos. Depurar é isso: achar o erro e corrigir. A dupla de detetives fechou a delegacia mais cedo. Missão cumprida!",
  F8 = "Onde eu uso isso? O mecânico testa uma peça de cada vez até achar o defeito do carro. O médico faz perguntas e exames, que são pistas. E, na conta de matemática errada, você refaz passo a passo para achar onde errou.",
  F9 = "Agora é com vocês, detetives: abram a Missão 7 no portal!";
const L77 = { 1: F1.replace("três programas", "3 programas"),
  3: F3.replace("Caso um", "Caso 1").replace("começa no um", "começa no 1").replace("item três", "item 3").replace("item dois", "item 2"),
  4: F4.replace("Caso dois", "Caso 2").replace("procurava idadee, com dois e", "procurava “idadee”, com 2 “e”"),
  5: F5.replace("Caso três", "Caso 3").replace("três lugares", "3 lugares"), 7: F7.replace("Três casos", "3 casos") };
const COL = ["Ana", "Bia", "Caio"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "misterio"], [.6, "pop"], [1.1, "pop"], [1.6, "pop"], [1.9, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 330, 1]]); delegacia(t, true); ["CASO 1", "CASO 2", "CASO 3"].forEach((s, i) => pastaCaso(400 + i * 240, 400, s, ["#d97706", "#b45309", "#92400e"][i], seg(t, .05 + i * .1, .25 + i * .1), (i - 1) * .08));
     for (let i = 0; i < 10; i++) { g.save(); g.translate(150 + i * 110, 210 + (i % 3) * 30); g.rotate((i % 5 - 2) * .1); g.fillStyle = ["#fef9c3", "#fecaca", "#dbeafe"][i % 3]; g.fillRect(-26, -20, 52, 40); g.restore(); } lupa(900 + Math.sin(t * 1.4) * 60, 300, 1.3); duda({ x: 160, y: 640, s: .8, olhar: 1, braco: -1.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore(); abertura(t, "7º ANO · MISSÃO 7", "Desafios de depuração", "HOJE É DIA", "DE DETETIVE!", 1.9); } },
 { chip: "O CHAMADO", fala: F1, legenda: L77[1], sfx: [[.1, "alerta"], [em(F1, "três"), "pop"], [em(F1, "outro"), "pop"], [em(F1, "terceiro"), "pop"], [em(F1, "Quem"), "misterio"]],
   draw(t, D) { const tr = em(F1, "três"), um = em(F1, "Um"), ou = em(F1, "outro"), te = em(F1, "terceiro"), qu = em(F1, "Quem");
     g.save(); camera(t, [[0, 640, 360, 1], [tr, 640, 330, 1.06], [qu, 640, 360, 1]]); delegacia(t);
     emo("☎️", 640, 230 + Math.sin(t * 30) * (t < tr ? 4 : 0), 80);
     [[um, "😵 colega errado"], [ou, "🤔 sem idade"], [te, "🔁 erro repetido"]].forEach(([tt, s], i) => { pastaCaso(360 + i * 280, 380, "CASO " + (i + 1), ["#d97706", "#b45309", "#92400e"][i], seg(t, tr + i * .3, tr + .4 + i * .3)); if (t > tt) rotulo(s, 360 + i * 280, 470, "#fecaca", seg(t, tt, tt + .4)); });
     duda({ x: 130, y: 690, s: .8, olhar: 1, braco: .3, bracoE: .3, boca: t > qu ? "riso" : "o", pisca: pisca(t) }); caio({ x: 1150, y: 690, s: .8, olhar: -1, braco: t > qu ? -2.6 : .3, bracoE: .3, boca: t > qu ? "riso" : "o", pisca: pisca(t + .4) }); g.restore();
     if (t > qu) { palavra("QUEM VAI RESOLVER? 🕵️", 560, 170, seg(t, qu, qu + .4), 48); balao("Deixa com a gente! 🔎", 980, 260, seg(t, qu + .3, qu + .6)); } } },
 { chip: "O MÉTODO E A HIPÓTESE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "rodar"), "tec"], [em(F2, "comparar"), "pop"], [em(F2, "achar"), "pop"], [em(F2, "mudar"), "pop"], [em(F2, "hipótese"), "ding"]],
   draw(t, D) { const ts = ["rodar", "comparar", "achar", "mudar"].map(w => em(F2, w)), hp = em(F2, "hipótese"), te = em(F2, "testa"); fundoEscuro(t, "#312e81");
     palavra("🕵️ O MÉTODO DO DETETIVE", 560, 80, seg(t, 0, .4), 50);
     g.save(); camera(t, [[0, 640, 340, 1.04], [hp, 640, 380, 1.04]]);
     [["▶️", "rodar"], ["⚖️", "comparar com o esperado"], ["🔎", "achar o bloco responsável"], ["☝️", "mudar uma coisa só"]].forEach(([e, s], i) => { if (t > ts[i]) cartaoC((i + 1) + ". " + e + " " + s, 330 + (i % 2) * 620, 190 + Math.floor(i / 2) * 100, 540, "#fde68a", seg(t, ts[i], ts[i] + .4)); });
     if (t > hp) cartaoC("💡 HIPÓTESE = o seu palpite sobre onde está o erro", 640, 420, 760, "#fff", seg(t, hp, hp + .4), "e você testa mudando uma coisa"); g.restore();
     duda({ x: 1180, y: 690, s: .65, olhar: -1, braco: t > te ? -1.6 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CASO 1 · A POSIÇÃO", fala: F3, legenda: L77[3], sfx: [[.1, "whoosh"], [em(F3, "Caio"), "alerta"], [em(F3, "pista"), "ding"], [em(F3, "posição"), "pop"], [em(F3, "Corrigido"), "festa"]],
   draw(t, D) { const de = em(F3, "devia"), ca = em(F3, "Caio"), pi = em(F3, "pista"), po = em(F3, "posição"), um = em(F3, "contagem"), it = em(F3, "pedia"), co = em(F3, "Corrigido"); fundoEscuro(t, "#7c2d12");
     palavra("CASO 1", 520, 80, seg(t, 0, .4), 60); const fix = t > co - .6;
     g.save(); camera(t, [[0, 640, 360, 1], [ca, 560, 340, 1.06], [it, 640, 360, 1.04], [co, 640, 360, 1]]);
     listaItens(230, 150, COL, t > it ? (fix ? 1 : 2) : -1, 1); bloco(420, 200, 360, fix ? "mostrar item 2 da lista" : "mostrar item 3 da lista", fix ? "#16a34a" : "#7c3aed", 1, t > it && !fix);
     telinha(950, 150, 300, "esperado: Bia", [t > ca ? (fix ? "Bia ✅" : "Caio ❌") : "…"], seg(t, ca - .3, ca), fix ? -1 : 0, fix); g.restore();
     if (t > pi && t < it) cartaoC("🔎 PISTA = o sinal que ajuda a achar o erro", 640, 470, 640, "#fff", seg(t, pi, pi + .4));
     if (t > um && t < co) etiqueta("a contagem começa no 1!", 260, 520, 180, 260, seg(t, um, um + .4)); if (t > co) carimbo(950, 440, "CORRIGIDO", seg(t, co, co + .5)); } },
 { chip: "CASO 2 · O CAMPO", fala: F4, legenda: L77[4], sfx: [[.1, "whoosh"], [em(F4, "sem"), "alerta"], [em(F4, "Pista"), "ding"], [em(F4, "idadee"), "pop"], [em(F4, "letra"), "zum"]],
   draw(t, D) { const se = em(F4, "sem"), pi = em(F4, "Pista"), id = em(F4, "idadee"), le = em(F4, "letra"); fundoEscuro(t, "#7c2d12");
     palavra("CASO 2", 520, 80, seg(t, 0, .4), 60);
     g.save(); camera(t, [[0, 640, 360, 1], [pi, 520, 330, 1.08], [le, 640, 360, 1]]); ficha(250, 300, "🧑 Ana", [["nome", "Ana"], ["idade", "12"]], 1, "#ca8a04", t > pi ? 1 : -1);
     bloco(440, 200, 400, "campo idadee da ficha Ana", "#16a34a", 1, t > id); telinha(1000, 150, 280, "tela", [t > se ? "(sem campo)" : "…"], 1, t > se ? 0 : -1); g.restore();
     if (t > id) { etiqueta("um “e” a mais!", 760, 380, 700, 230, seg(t, id, id + .4)); } if (t > le) cartaoC("✏️ corrija para: idade", 640, 470, 400, "#bbf7d0", seg(t, le, le + .4)); } },
 { chip: "CASO 3 · O ERRO REPETIDO", fala: F5, legenda: L77[5], sfx: [[.1, "whoosh"], [em(F5, "errada"), "alerta"], [em(F5, "Pista"), "ding"], [em(F5, "Conserte"), "tec"], [em(F5, "todos"), "festa"]],
   draw(t, D) { const er = em(F5, "errada"), pi = em(F5, "Pista"), cs = em(F5, "Conserte"), to = em(F5, "todos"); fundoEscuro(t, "#7c2d12"); const fix = t > cs + .6;
     palavra("CASO 3", 520, 80, seg(t, 0, .4), 60);
     g.save(); camera(t, [[0, 640, 360, 1], [pi, 720, 340, 1.03], [to, 640, 360, 1]]);
     ["🧩 saudação", "mover 10 passos", "🧩 saudação", "girar 90°", "🧩 saudação"].forEach((s, i) => bloco(120, 160 + i * 62, 300, s, s[0] === "🧩" ? "#db2777" : "#7c3aed", 1, s[0] === "🧩" && t > er && !fix));
     bocaC(640, 170, 420, 150, "🧩 para fazer: saudação", "#db2777", 1); bloco(676, 230, 340, fix ? "mostrar “Bom dia!”" : "mostrar “Bom dai!”", fix ? "#16a34a" : "#7c3aed", 1, t > pi && !fix); g.restore();
     if (t > pi && t < cs) etiqueta("o erro mora AQUI dentro", 860, 470, 840, 300, seg(t, pi, pi + .4)); if (t > to) carimbo(860, 440, "VALE EM TODOS", seg(t, to, to + .5)); } },
 { chip: "MAIS PISTAS", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "repetido"), "alerta"], [em(F6, "faltar"), "alerta"], [em(F6, "lista"), "pop"], [em(F6, "lugar"), "pop"]],
   draw(t, D) { const re = em(F6, "repetido"), fa = em(F6, "faltar"), li = em(F6, "lista"), lu = em(F6, "lugar"); fundoEscuro(t, "#312e81");
     palavra("MAIS PISTAS", 520, 80, seg(t, 0, .4), 60);
     g.save(); camera(t, [[0, 640, 360, 1.04], [lu + 1, 640, 360, 1]]);
     telinha(260, 150, 300, "tela", t > fa ? ["Ana", "Bia", "Bia", "—"] : ["Ana", "Bia", "Bia"], seg(t, re, re + .4), 2);
     if (t > li) cartaoC("🔎 o “para cada” percorre a lista certa?", 840, 220, 600, "#fde68a", seg(t, li, li + .4)); if (t > lu) cartaoC("📦 o bloco está dentro ou fora do lugar?", 840, 340, 600, "#fde68a", seg(t, lu, lu + .4)); g.restore();
     if (t > re) etiqueta("item repetido ou faltando", 260, 540, 260, 380, seg(t, re, re + .4)); caio({ x: 1170, y: 690, s: .65, olhar: -1, braco: -1.4, bracoE: .3, boca: "", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L77[7], sfx: [[.1, "whoosh"], [em(F7, "casos"), "pop"], [em(F7, "corrigidos"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const ca = em(F7, "casos"), mc = em(F7, "Missão");
     g.save(); camera(t, [[0, 640, 380, 1.08], [mc, 640, 400, 1]]); delegacia(t); ["CASO 1", "CASO 2", "CASO 3"].forEach((s, i) => { pastaCaso(400 + i * 240, 380, s, ["#d97706", "#b45309", "#92400e"][i], 1); if (t > ca + i * .4) carimbo(400 + i * 240, 470, "OK", seg(t, ca + i * .4, ca + .5 + i * .4)); });
     duda({ x: 130, y: 690, s: .85, olhar: 1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); caio({ x: 1150, y: 690, s: .85, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + .4) }); g.restore();
     if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "mecânico"), "pop"], [em(F8, "médico"), "pop"], [em(F8, "matemática"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["mecânico", "🔧", "Mecânico:", "testa uma peça de cada vez"], ["médico", "🩺", "Médico:", "perguntas e exames = pistas"], ["matemática", "🧮", "Conta errada:", "refaz passo a passo"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 7", [CAIO, MENINA7]); } }
];

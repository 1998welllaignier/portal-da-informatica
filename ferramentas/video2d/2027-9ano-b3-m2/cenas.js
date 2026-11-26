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
  emo(e, 0, 96, 84); g.fillStyle = NAVY; g.textAlign = "center"; let tn = 28; g.font = `900 ${tn}px ${F}`; while (g.measureText(nome).width > w - 30 && tn > 16) { tn -= 2; g.font = `900 ${tn}px ${F}`; } g.fillText(nome, 0, 150); g.font = `700 19px ${F}`; ex.forEach((s, i) => g.fillText(s, 0, 190 + i * 28)); g.restore(); }
function vfLista(t, itens, tt, rr_, base) { itens.forEach(([s, v, c], i) => { const y = 170 + i * 105; cartaoC(s, 360, y, 620, "#fff", seg(t, tt[i], tt[i] + .4)); if (t > rr_[i]) comando(v, 960, y, seg(t, rr_[i], rr_[i] + .4), c, 300); }); }
function medidor(x, y, w, p, cor, k) { if (!(k > 0)) return; g.save(); g.globalAlpha = cl(k); g.fillStyle = "#1e293b"; rr(x - w / 2, y, w, 26, 13); g.fill(); g.fillStyle = cor; rr(x - w / 2, y, Math.max(26, w * Math.min(1, p)), 26, 13); g.fill(); g.restore(); }
const F0 = "Dados abertos: a informação da cidade é de todos!",
  F1 = "O Rafa quer saber onde começar o conserto das lâmpadas da cidade. Mas por onde começar? Ele precisa de informação! A Júlia sorri: existem os dados abertos, informações públicas que qualquer pessoa pode ver, baixar e usar. Quantos alunos tem cada escola, quanto a prefeitura gastou, quantas pessoas moram na cidade.",
  F2 = "Por que esses dados existem? No Brasil, a Lei de Acesso à Informação, a ele a i, garante a qualquer pessoa o direito de pedir e receber informações públicas. As prefeituras também publicam os gastos no Portal da Transparência. Transparência é mostrar para a população como o dinheiro público é usado.",
  L2 = F2.replace("a ele a i", "a LAI"),
  F3 = "Onde encontrar dados? O Portal da Transparência, da prefeitura ou do governo, tem gastos, salários e contratos públicos. O í bê gê é Cidades, em cidades ponto í bê gê é ponto gov ponto bê érre, mostra população, escolas, área e outros números de cada cidade. E o Portal Brasileiro de Dados Abertos, dados ponto gov ponto bê érre, reúne milhares de tabelas do governo.",
  L3 = F3.replace("í bê gê é Cidades, em cidades ponto í bê gê é ponto gov ponto bê érre", "IBGE Cidades, em cidades.ibge.gov.br").replace("dados ponto gov ponto bê érre", "dados.gov.br"),
  F4 = "E o que é o í bê gê é? É o Instituto Brasileiro de Geografia e Estatística, o órgão que faz o censo e as pesquisas sobre o Brasil. O censo é uma pesquisa que conta toda a população do país.",
  L4 = F4.replace("í bê gê é", "IBGE"),
  F5 = "Mas cuidado: nem tudo é publicado! O número de alunos de uma escola é dado aberto. Já o nome, o endereço e a nota de um aluno são dados pessoais. Dado pessoal é qualquer informação que identifica uma pessoa, como nome, endereço e cê pê éfe. Esses não são publicados.",
  L5 = F5.replace("cê pê éfe", "CPF"),
  F6 = "Vamos treinar com uma tabela de dados inventados: pedidos de conserto de lâmpada no mês. Bairro das Flores, doze. Bairro do Rio, sete. Bairro Novo, quinze. Bairro da Serra, seis. Dá para somar: doze mais sete mais quinze mais seis dá quarenta pedidos. O maior é o Bairro Novo, com quinze. É por lá que o conserto começa!",
  L6 = F6.replace("Flores, doze", "Flores, 12").replace("Rio, sete", "Rio, 7").replace("Novo, quinze", "Novo, 15").replace("Serra, seis", "Serra, 6").replace("doze mais sete mais quinze mais seis dá quarenta", "12 + 7 + 15 + 6 = 40").replace("com quinze", "com 15"),
  F7 = "Hora de testar! Dados abertos podem ser vistos e usados por qualquer pessoa: verdadeiro. O nome e a nota de um aluno são dados abertos: falso. A ele a i garante o direito de pedir informações públicas: verdadeiro. Na tabela de treino, o bairro com mais pedidos é o Bairro do Rio: falso.",
  L7 = F7.replace("A ele a i", "A LAI"),
  F8 = "O Rafa abriu a tabela, somou os pedidos e viu que o Bairro Novo tem o maior número. Agora ele sabe onde começar o conserto das lâmpadas! Dados abertos ajudaram a decidir. Missão cumprida!",
  F9 = "Onde eu uso isso? Num trabalho de Geografia sobre a população da cidade. Para saber quanto a prefeitura gastou com a merenda. E para decidir onde agir primeiro num problema do bairro.",
  F10 = "Agora é com vocês: abram a Missão 2 no portal!";
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.4, "misterio"], [2.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 330, 1.1], [3.2, 640, 330, 1]]); cidadeFundo(t, "#082f49");
     for (let i = 0; i < 14; i++) { const k = seg(t, .3 + i * .1, .8 + i * .1), x = 130 + (i % 7) * 170, y = 250 - Math.abs(Math.sin(t * 2 + i)) * 20 - (i > 6 ? 0 : 60); caixa(x, y + 70, ["12", "7", "15", "6", "40", "%", "📊", "👥", "💰", "🏫", "8", "21", "9", "3"][i], i % 2 ? "#fde68a" : "#fff", k, 90); }
     cadeado(640, 420, 1.6, t > 1.4); emo("🔓", 640, 300, 90 * back(seg(t, 1.6, 2.2)));
     J({ x: 200, y: 600, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: t > 1.4 ? "riso" : "o", pisca: pisca(t) }); g.restore();
     abertura(t, "9º ANO · 3º BIM. · MISSÃO 2", "Dados abertos da cidade", "O COFRE DA CIDADE", "ESTÁ ABERTO?", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "informação"), "alerta"], [em(F1, "abertos"), "ding"], [em(F1, "ver"), "pop"], [em(F1, "baixar"), "pop"], [em(F1, "usar"), "pop"], [em(F1, "alunos"), "pop"], [em(F1, "gastou"), "pop"], [em(F1, "moram"), "pop"]],
   draw(t, D) { const inf = em(F1, "informação"), ab = em(F1, "abertos"), ve = em(F1, "ver"), ba = em(F1, "baixar"), us = em(F1, "usar"), al = em(F1, "alunos"), ga = em(F1, "gastou"), mo = em(F1, "moram"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1], [ab, 640, 335, 1.03], [al, 640, 340, 1]]);
     if (t > inf) balao("Preciso de informação!", 300, 468, seg(t, inf, inf + .4)); [["👀 ver", 330, ve], ["⬇️ baixar", 640, ba], ["🛠️ usar", 950, us]].forEach(([s, x, tt]) => caixa(x, 210, s, "#fde68a", seg(t, tt, tt + .4), 240));
     [["🏫 alunos de cada escola", 230, al], ["💰 gasto da prefeitura", 640, ga], ["👥 pessoas que moram na cidade", 1050, mo]].forEach(([s, x, tt]) => cartaoC(s, x, 350, 400, "#fff", seg(t, tt, tt + .4)));
     R({ x: 230, y: 600, s: .65, olhar: 1, braco: .3, bracoE: .3, boca: t > ab ? "riso" : "o", pisca: pisca(t) }); J({ x: 1050, y: 600, s: .65, olhar: -1, braco: t > ab ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t > ab ? "DADOS ABERTOS" : "ONDE COMEÇAR?", 560, 90, seg(t, t > ab ? ab : 0, (t > ab ? ab : 0) + .4), 60); } },
 { chip: "LEI DE ACESSO", fala: F2, legenda: L2, sfx: [[.1, "whoosh"], [em(F2, "Lei"), "ding"], [em(F2, "pedir"), "pop"], [em(F2, "Portal"), "pop"], [em(F2, "Transparência", 1), "ding"]],
   draw(t, D) { const le = em(F2, "Lei"), pe = em(F2, "pedir"), po = em(F2, "Portal"), tr = em(F2, "Transparência", 1); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [po, 640, 335, 1.03], [tr, 640, 340, 1]]);
     cartaoC("📜 Lei de Acesso à Informação (LAI)", 640, 210, 820, "#fde68a", seg(t, le, le + .4)); if (t > pe) { caixa(450, 330, "🙋 pedir", "#fff", seg(t, pe, pe + .4), 200); emo("➡️", 640, 345, 50 * seg(t, pe + .3, pe + .6)); caixa(830, 330, "📄 receber", "#bbf7d0", seg(t, pe + .5, pe + .9), 220); }
     cartaoC("🏛️ Portal da Transparência: mostra os gastos", 640, 450, 860, "#bfdbfe", seg(t, po, po + .4)); if (t > tr) etiqueta("transparência = mostrar como o dinheiro público é usado", 640, 560, 640, 505, seg(t, tr, tr + .4));
     R({ x: 90, y: 590, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1190, y: 590, s: .6, olhar: -1, braco: t > le ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= tr ? "TRANSPARÊNCIA" : "LAI", 560, 90, seg(t, t >= tr ? tr : le, (t >= tr ? tr : le) + .4), 66); } },
 { chip: "ONDE ENCONTRAR", fala: F3, legenda: L3, sfx: [[.1, "whoosh"], [em(F3, "Portal"), "ding"], [em(F3, "Cidades"), "ding"], [em(F3, "Brasileiro"), "ding"], [em(F3, "milhares"), "pop"]],
   draw(t, D) { const po = em(F3, "Portal"), ci = em(F3, "Cidades"), br = em(F3, "Brasileiro"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [ci, 640, 335, 1.03], [br, 640, 340, 1]]);
     cardTipo(230, 130, 380, "🏛️", "Portal da Transparência", ["gastos, salários,", "contratos públicos"], "#fff", seg(t, po, po + .4)); cardTipo(640, 130, 380, "📈", "IBGE Cidades", ["população, escolas,", "área e outros números"], "#fde68a", seg(t, ci, ci + .4)); cardTipo(1050, 130, 380, "🗂️", "Portal Brasileiro de Dados Abertos", ["milhares de tabelas", "do governo"], "#bbf7d0", seg(t, br, br + .4));
     caixa(230, 460, "da prefeitura ou do governo", "#fff", seg(t, po + .6, po + 1), 360); caixa(640, 460, "cidades.ibge.gov.br", "#fff", seg(t, ci + .8, ci + 1.2), 300); caixa(1050, 460, "dados.gov.br", "#fff", seg(t, br + .8, br + 1.2), 230);
     R({ x: 90, y: 600, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1200, y: 600, s: .5, olhar: -1, braco: t > br ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra("ONDE ENCONTRAR", 560, 90, seg(t, 0, .4), 60); } },
 { chip: "IBGE E CENSO", fala: F4, legenda: L4, sfx: [[.1, "whoosh"], [em(F4, "Instituto"), "ding"], [em(F4, "censo"), "pop"], [em(F4, "conta"), "pop"], [em(F4, "população"), "ding"]],
   draw(t, D) { const ins = em(F4, "Instituto"), ce = em(F4, "censo"), co = em(F4, "conta"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [co, 640, 335, 1.03]]);
     cartaoC("Instituto Brasileiro de Geografia e Estatística", 640, 220, 900, "#fff", seg(t, ins, ins + .4), "IBGE: faz o censo e as pesquisas sobre o Brasil");
     const cores = ["#f97316", "#ec4899", "#0ea5e9", "#a855f7", "#22c55e", "#eab308"]; for (let i = 0; i < 26; i++) { const k = seg(t, co + i * .08, co + .35 + i * .08); if (k > 0) pessoa(190 + (i % 13) * 75, i < 13 ? 410 : 490, .8 * back(cl(k)), cores[i % 6]); }
     if (t > ce) etiqueta("censo: conta toda a população do país", 640, 560, 640, 520, seg(t, ce + .4, ce + .8));
     R({ x: 80, y: 590, s: .55, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1200, y: 590, s: .55, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= ce ? "CENSO" : "IBGE", 560, 90, seg(t, t >= ce ? ce : 0, (t >= ce ? ce : 0) + .4), 70); } },
 { chip: "ABERTO OU PESSOAL?", fala: F5, legenda: L5, sfx: [[.1, "whoosh"], [em(F5, "cuidado"), "alerta"], [em(F5, "alunos"), "ding"], [em(F5, "nome"), "pop"], [em(F5, "identifica"), "alerta"], [em(F5, "publicados", 1), "alerta"]],
   draw(t, D) { const cu = em(F5, "cuidado"), al = em(F5, "alunos"), no = em(F5, "nome"), id = em(F5, "identifica"), en = em(F5, "endereço", 1), cp = em(F5, "cê"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 340, 1], [no, 640, 335, 1.03]]);
     comando("DADO ABERTO ✅", 330, 190, seg(t, al - .3, al + .1), "#16a34a", 380); cartaoC("🏫 número de alunos da escola", 330, 320, 440, "#fff", seg(t, al, al + .4));
     comando("DADO PESSOAL 🔒", 950, 190, seg(t, no - .3, no + .1), "#dc2626", 380); [["👤 nome", no], ["🏠 endereço", no + .5], ["📝 nota", no + 1], ["🪪 CPF", cp]].forEach(([s, tt], i) => caixa(950, 270 + i * 70, s, "#fecaca", seg(t, tt, tt + .4), 300));
     if (t > id) etiqueta("identifica uma pessoa", 950, 560, 950, 510, seg(t, id, id + .4));
     R({ x: 90, y: 590, s: .55, olhar: 1, braco: .3, bracoE: .3, boca: t > cu ? "o" : "riso", pisca: pisca(t) }); J({ x: 640, y: 600, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= no ? "DADO PESSOAL" : "CUIDADO!", 560, 90, seg(t, t >= no ? no : 0, (t >= no ? no : 0) + .4), 60); } },
 { chip: "LENDO A TABELA", fala: F6, legenda: L6, sfx: [[.1, "whoosh"], [em(F6, "Flores"), "pop"], [em(F6, "Rio"), "pop"], [em(F6, "Novo"), "pop"], [em(F6, "Serra"), "pop"], [em(F6, "somar"), "ding"], [em(F6, "maior"), "ding"]],
   draw(t, D) { const L = [["Bairro das Flores", "12", em(F6, "Flores")], ["Bairro do Rio", "7", em(F6, "Rio")], ["Bairro Novo", "15", em(F6, "Novo")], ["Bairro da Serra", "6", em(F6, "Serra")]], so = em(F6, "somar"), ma = em(F6, "maior"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [so, 640, 335, 1.03], [ma, 640, 340, 1]]);
     caixa(470, 170, "Bairro (inventado)", "#fde68a", seg(t, 0, .4), 400); caixa(790, 170, "Pedidos no mês", "#fde68a", seg(t, 0, .4), 190);
     L.forEach(([b, v, tt], i) => { const novo = i === 2 && t > ma, c = novo ? "#86efac" : "#fff"; caixa(470, 240 + i * 65, b, c, seg(t, tt, tt + .4), 400); caixa(790, 240 + i * 65, v, c, seg(t, tt + .2, tt + .6), 190); }); if (t > ma) emo("⭐", 930, 440, 50 * back(seg(t, ma, ma + .4)));
     if (t > so) cartaoC("12 + 7 + 15 + 6 = 40 pedidos", 640, 540, 560, "#fff", seg(t, so, so + .4));
     R({ x: 90, y: 590, s: .55, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1200, y: 590, s: .55, olhar: -1, braco: t > ma ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= ma ? "O MAIOR" : t >= so ? "SOMAR" : "LER A TABELA", 560, 90, seg(t, t >= ma ? ma : t >= so ? so : 0, (t >= ma ? ma : t >= so ? so : 0) + .4), 60); } },
 { chip: "VERDADEIRO OU FALSO?", fala: F7, legenda: L7, sfx: [[.1, "whoosh"], [em(F7, "verdadeiro"), "ding"], [em(F7, "falso"), "alerta"], [em(F7, "verdadeiro", 1), "ding"], [em(F7, "falso", 1), "alerta"]],
   draw(t, D) { const a = [em(F7, "Dados"), em(F7, "nome"), em(F7, "garante"), em(F7, "bairro")], r = [em(F7, "verdadeiro"), em(F7, "falso"), em(F7, "verdadeiro", 1), em(F7, "falso", 1)]; fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [a[2], 640, 335, 1.03]]);
     vfLista(t, [["Dados abertos: qualquer pessoa pode usar", "V ✅", "#16a34a"], ["Nome e nota de aluno são dados abertos", "F ❌", "#dc2626"], ["A LAI garante o direito de pedir informações", "V ✅", "#16a34a"], ["Mais pedidos: Bairro do Rio", "F ❌", "#dc2626"]], a, r);
     R({ x: 1120, y: 610, s: .45, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1210, y: 610, s: .45, olhar: -1, braco: -2.3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra("VERDADEIRO OU FALSO?", 560, 90, seg(t, 0, .4), 52); } },
 { chip: "MISSÃO CUMPRIDA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "somou"), "pop"], [em(F8, "maior"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { const so = em(F8, "somou"), ma = em(F8, "maior"), mc = em(F8, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1.04], [mc, 640, 360, 1]]);
     g.fillStyle = "rgba(255,255,255,.12)"; rr(230, 230, 600, 300, 20); g.fill(); [["Flores", 12], ["Rio", 7], ["Novo", 15], ["Serra", 6]].forEach(([n, v], i) => { const k = io2(seg(t, so + i * .3, so + .8 + i * .3)), x = 320 + i * 150, h = v * 14 * k, novo = i === 2 && t > ma; g.fillStyle = novo ? "#facc15" : "#38bdf8"; rr(x - 45, 480 - h, 90, h, 8); g.fill(); if (k > .9) { g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(String(v), x, 480 - h - 10); } g.fillStyle = "#e2e8f0"; g.font = `800 20px ${F}`; g.fillText(n, x, 512); });
     if (t > ma) { emo("💡", 620, 255, 56 * back(seg(t, ma, ma + .4))); etiqueta("começar aqui", 880, 300, 680, 290, seg(t, ma + .2, ma + .6)); }
     R({ x: 960, y: 570, s: .85, olhar: -1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t) }); J({ x: 1110, y: 570, s: .85, olhar: -1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t + .5) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "Geografia"), "pop"], [em(F9, "merenda"), "pop"], [em(F9, "agir"), "pop"]],
   draw(t, D) { ondeUso(t, F9, [["Geografia", "🌍", "Trabalho de Geografia", "população da cidade"], ["merenda", "🍲", "Gasto com a merenda", "quanto a prefeitura gastou"], ["agir", "📍", "Onde agir primeiro", "num problema do bairro"]]); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 3º bimestre de 2027 · Missão 2", [JULIA, RAFA]); } }
];

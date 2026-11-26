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
function casa(x, y, s, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor || "#fde68a"; g.fillRect(-70, -80, 140, 80); g.fillStyle = "#b91c1c"; g.beginPath(); g.moveTo(-84, -78); g.lineTo(0, -140); g.lineTo(84, -78); g.closePath(); g.fill(); g.fillStyle = "#5b3a1e"; g.fillRect(-14, -50, 28, 50); g.fillStyle = "#bfe3ff"; g.fillRect(-58, -62, 30, 24); g.fillRect(28, -62, 30, 24); g.restore(); }
function exemplo(x, y, w, l1, l2, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; rr(-w / 2, -38, w, 76, 14); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.font = `800 20px ${F}`; g.fillText(l1, 0, -4); g.font = `600 18px ${F}`; g.fillStyle = "#334155"; g.fillText(l2, 0, 24); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
const F0 = "Desigualdade digital: nem todo mundo está conectado!",
  F1 = "A escola mandou uma tarefa pela internet. A Júlia fez em poucos minutos. Mas o Rafa não tem internet em casa e não conseguiu. Será que os dois tiveram a mesma chance? Isso é desigualdade digital: quando algumas pessoas têm muito mais acesso à tecnologia do que outras.",
  L1 = F1.replace("os dois", "os 2"),
  F2 = "A desigualdade digital tem três partes. Acesso: tem aparelho e internet? Por exemplo, uma família sem internet em casa. Qualidade: a conexão é boa e o aparelho é só seu? Um celular dividido por quatro irmãos, com o pacote de dados que acaba. Habilidade: sabe usar com segurança? Uma pessoa que tem celular, mas não sabe pedir um documento pela internet.",
  L2 = F2.replace("quatro irmãos", "4 irmãos"),
  F3 = "Por que isso importa? Hoje muita coisa acontece pela internet: estudar, procurar emprego, marcar consulta e pedir documentos, como pelo gov ponto bê érre. O gov ponto bê érre é o site e o aplicativo do governo federal para pedir serviços e documentos. Quem fica de fora perde oportunidades.",
  L3 = F3.replace(/gov ponto bê érre/g, "gov.br"),
  F4 = "O que ajuda a diminuir essa diferença? Um laboratório de informática na escola, onde todos usam computador e aprendem. Uai-fai gratuito em praças e escolas, para mais gente conectada. Cursos para quem não sabe usar, que desenvolvem a habilidade. E doação e conserto de computadores usados, para ter mais aparelhos para quem não tem.",
  L4 = F4.replace("Uai-fai", "Wi-Fi"),
  F5 = "Todas essas ações têm um nome: inclusão digital, ações para que todos possam usar a tecnologia. Já a desigualdade digital também se chama exclusão digital. O pacote de dados é a quantidade de internet do plano do celular. E o uai-fai é a rede sem fio que liga os aparelhos à internet.",
  L5 = F5.replace("uai-fai", "Wi-Fi"),
  F6 = "Hora de testar! Ter celular sempre significa ter acesso de qualidade: falso. Habilidade é saber usar a tecnologia com segurança: verdadeiro. Uai-fai gratuito em praças pode diminuir a desigualdade digital: verdadeiro. A desigualdade digital só tem a ver com ter ou não ter aparelho: falso.",
  L6 = F6.replace("Uai-fai", "Wi-Fi"),
  F7 = "A Júlia e o Rafa descobriram as três partes da desigualdade digital: acesso, qualidade e habilidade. E viram que laboratório, uai-fai gratuito, cursos e doação de computadores ajudam a incluir todo mundo. Todos conectados! Missão cumprida!",
  L7 = F7.replace("uai-fai", "Wi-Fi"),
  F8 = "Onde eu uso isso? Quando a escola manda uma tarefa pela internet e um colega não tem como fazer. Ao ajudar alguém da família a usar um aplicativo. E no laboratório de informática da escola.",
  F9 = "Agora é com vocês: abram a Missão 3 no portal!";
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "pop"], [1.4, "alerta"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e1b4b"); g.save(); camera(t, [[0, 640, 330, 1.1], [3.2, 640, 330, 1]]); cidadeFundo(t);
     [140, 360, 580, 800, 1020, 1200].forEach((x, i) => { casa(x, 520, .95, ["#fde68a", "#bbf7d0", "#bfdbfe"][i % 3]); const k = seg(t, .4 + i * .3, .8 + i * .3); emo(i % 2 ? "🚫" : "📶", x, 330 - Math.abs(Math.sin(t * 3 + i)) * 8, 70 * back(cl(k))); if (!(i % 2)) onda(x, 330, (t * .8 + i * .3) % 1, "#fde047"); });
     J({ x: 460, y: 620, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); R({ x: 920, y: 620, s: .5, olhar: -1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t + .5) }); g.restore();
     abertura(t, "9º ANO · 3º BIM. · MISSÃO 3", "Desigualdade digital", "NEM TODOS TÊM", "O MESMO ACESSO!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, legenda: L1, sfx: [[.1, "whoosh"], [em(F1, "tarefa"), "pop"], [em(F1, "Júlia"), "ding"], [em(F1, "Rafa"), "alerta"], [em(F1, "chance"), "pop"], [em(F1, "desigualdade"), "ding"]],
   draw(t, D) { const ta = em(F1, "tarefa"), ju = em(F1, "Júlia"), ra = em(F1, "Rafa"), ch = em(F1, "chance"), de = em(F1, "desigualdade"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [ra, 640, 335, 1.03], [de, 640, 340, 1]]);
     casa(330, 500, 1.5, "#bbf7d0"); casa(950, 500, 1.5, "#fecaca"); emo("📶", 330, 205, 90 * back(seg(t, ju, ju + .4))); if (t > ju + .4) visto(420, 200, 26, seg(t, ju + .4, ju + .8)); emo("🚫", 950, 205, 90 * back(seg(t, ra, ra + .4))); emo("📝", 640, 330, 70 * back(seg(t, ta, ta + .4))); etiqueta("com internet", 330, 268, 330, 300, seg(t, ju + .6, ju + 1)); etiqueta("sem internet", 950, 268, 950, 300, seg(t, ra + .6, ra + 1));
     J({ x: 330, y: 600, s: .75, olhar: 1, braco: t > ju ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); R({ x: 950, y: 600, s: .75, olhar: -1, braco: .3, bracoE: .3, boca: t > ra ? "o" : "riso", pisca: pisca(t + .5) }); g.restore();
     if (t > ra + .5) balao("Sem internet, não deu!", 950, 385, seg(t, ra + .5, ra + .9)); if (t > ch) balao("Mesma chance?", 330, 385, seg(t, ch, ch + .4)); palavra(t > de ? "DESIGUALDADE DIGITAL" : "A TAREFA", 560, 90, seg(t, t > de ? de : 0, (t > de ? de : 0) + .4), t > de ? 52 : 64); } },
 { chip: "AS TRÊS PARTES", fala: F2, legenda: L2, sfx: [[.1, "whoosh"], [em(F2, "Acesso"), "ding"], [em(F2, "Qualidade"), "ding"], [em(F2, "Habilidade"), "ding"], [em(F2, "pacote"), "alerta"]],
   draw(t, D) { const ac = em(F2, "Acesso"), qu = em(F2, "Qualidade"), ha = em(F2, "Habilidade"), pa = em(F2, "pacote"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [qu, 640, 335, 1.03], [ha, 640, 340, 1]]);
     cardTipo(230, 110, 380, "📱", "Acesso", ["tem aparelho", "e internet?"], "#fff", seg(t, ac, ac + .4)); cardTipo(640, 110, 380, "⚡", "Qualidade", ["a conexão é boa?", "o aparelho é só seu?"], "#fde68a", seg(t, qu, qu + .4)); cardTipo(1050, 110, 380, "🧠", "Habilidade", ["sabe usar", "com segurança?"], "#bbf7d0", seg(t, ha, ha + .4));
     exemplo(230, 440, 380, "uma família sem", "internet em casa", seg(t, ac + 1, ac + 1.4)); exemplo(640, 440, 380, "1 celular para 4 irmãos,", "e o pacote de dados acaba", seg(t, pa - .5, pa)); exemplo(1050, 440, 380, "tem celular, mas não sabe", "pedir um documento online", seg(t, ha + 1, ha + 1.4));
     R({ x: 90, y: 610, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1200, y: 610, s: .5, olhar: -1, braco: t > ha ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= ha ? "HABILIDADE" : t >= qu ? "QUALIDADE" : "ACESSO", 560, 90, seg(t, t >= ha ? ha : t >= qu ? qu : 0, (t >= ha ? ha : t >= qu ? qu : 0) + .4), 66); } },
 { chip: "POR QUE IMPORTA", fala: F3, legenda: L3, sfx: [[.1, "whoosh"], [em(F3, "estudar"), "pop"], [em(F3, "emprego"), "pop"], [em(F3, "consulta"), "pop"], [em(F3, "documentos"), "pop"], [em(F3, "fica"), "alerta"]],
   draw(t, D) { const es = em(F3, "estudar"), em_ = em(F3, "emprego"), co = em(F3, "consulta"), dc = em(F3, "documentos"), go = em(F3, "governo"), fi = em(F3, "fica"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 340, 1], [go, 640, 335, 1.02], [fi, 640, 340, 1]]);
     [["📚 estudar", 160, es], ["💼 procurar emprego", 480, em_], ["🩺 marcar consulta", 800, co], ["🪪 pedir documentos", 1120, dc]].forEach(([s, x, tt]) => cartaoC(s, x, 200, 270, "#fff", seg(t, tt, tt + .4)));
     caixa(800, 310, "gov.br: serviços e documentos", "#bfdbfe", seg(t, go - .5, go, 1), 420);
     emo("🚪", 470, 500, 90 * seg(t, fi, fi + .4)); if (t > fi) xVermelho(470, 470, 26, seg(t, fi + .3, fi + .6)); if (t > fi + .5) etiqueta("quem fica de fora perde oportunidades", 760, 520, 530, 500, seg(t, fi + .5, fi + .9));
     R({ x: 300, y: 600, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: t > fi ? "o" : "riso", pisca: pisca(t) }); J({ x: 1160, y: 600, s: .55, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t > go ? "GOV.BR" : "POR QUE IMPORTA?", 560, 90, seg(t, t > go ? go : 0, (t > go ? go : 0) + .4), t > go ? 76 : 60); } },
 { chip: "O QUE AJUDA", fala: F4, legenda: L4, sfx: [[.1, "whoosh"], [em(F4, "laboratório"), "pop"], [em(F4, "Uai"), "pop"], [em(F4, "Cursos"), "pop"], [em(F4, "doação"), "pop"]],
   draw(t, D) { const la = em(F4, "laboratório"), wi = em(F4, "Uai"), cu = em(F4, "Cursos"), dc = em(F4, "doação"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1], [wi, 640, 335, 1.02], [dc, 640, 340, 1]]);
     cardTipo(190, 110, 280, "🏫", "Laboratório na escola", ["todos usam computador", "e aprendem"], "#fff", seg(t, la, la + .4)); cardTipo(490, 110, 280, "📶", "Wi-Fi gratuito", ["em praças e escolas,", "mais gente conectada"], "#fde68a", seg(t, wi, wi + .4)); cardTipo(790, 110, 280, "👩‍🏫", "Cursos", ["para quem não sabe usar:", "desenvolve a habilidade"], "#bfdbfe", seg(t, cu, cu + .4)); cardTipo(1090, 110, 280, "♻️", "Doação e conserto", ["de computadores usados:", "mais aparelhos"], "#fbcfe8", seg(t, dc, dc + .4));
     rotulo("gente conectada", 640, 450, "#fde68a", seg(t, la, la + .4)); medidor(640, 465, 700, .1 + .25 * (seg(t, la, la + .6) + seg(t, wi, wi + .6) + seg(t, cu, cu + .6) + seg(t, dc, dc + .6)) * .96, "#22c55e", seg(t, la, la + .4));
     R({ x: 90, y: 610, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1200, y: 610, s: .5, olhar: -1, braco: t > dc ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra("O QUE AJUDA", 560, 90, seg(t, 0, .4), 64); } },
 { chip: "PALAVRAS NOVAS", fala: F5, legenda: L5, sfx: [[.1, "whoosh"], [em(F5, "inclusão"), "ding"], [em(F5, "exclusão"), "pop"], [em(F5, "pacote"), "pop"], [em(F5, "uai"), "pop"]],
   draw(t, D) { const inc = em(F5, "inclusão"), exc = em(F5, "exclusão"), pa = em(F5, "pacote"), wi = em(F5, "uai"); fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1], [pa, 640, 335, 1.03], [wi, 640, 340, 1]]);
     cartaoC("🤝 Inclusão digital", 330, 200, 560, "#bbf7d0", seg(t, inc, inc + .4), "ações para que todos usem a tecnologia"); cartaoC("🚪 Exclusão digital", 950, 200, 560, "#fecaca", seg(t, exc, exc + .4), "outro nome da desigualdade digital");
     cartaoC("📦 Pacote de dados", 330, 330, 560, "#fde68a", seg(t, pa, pa + .4), "internet do plano do celular"); cartaoC("📶 Wi-Fi", 950, 330, 560, "#bfdbfe", seg(t, wi, wi + .4), "rede sem fio que liga à internet");
     if (t > pa + .6) { medidor(330, 410, 420, Math.max(.05, .9 - (t - pa - .6) * .12), t > pa + 4 ? "#ef4444" : "#22c55e", seg(t, pa + .6, pa + 1)); } if (t > wi) onda(950, 470, (t * 1.2) % 1, "#fde047");
     R({ x: 560, y: 610, s: .5, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 720, y: 610, s: .5, olhar: -1, braco: t > inc ? -2.3 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra(t >= wi ? "WI-FI" : t >= pa ? "PACOTE DE DADOS" : "INCLUSÃO DIGITAL", 560, 90, seg(t, t >= wi ? wi : t >= pa ? pa : inc, (t >= wi ? wi : t >= pa ? pa : inc) + .4), t >= wi ? 76 : 56); } },
 { chip: "VERDADEIRO OU FALSO?", fala: F6, legenda: L6, sfx: [[.1, "whoosh"], [em(F6, "falso"), "alerta"], [em(F6, "verdadeiro"), "ding"], [em(F6, "verdadeiro", 1), "ding"], [em(F6, "falso", 1), "alerta"]],
   draw(t, D) { const a = [em(F6, "celular"), em(F6, "Habilidade"), em(F6, "Uai"), em(F6, "só")], r = [em(F6, "falso"), em(F6, "verdadeiro"), em(F6, "verdadeiro", 1), em(F6, "falso", 1)]; fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 340, 1], [a[2], 640, 335, 1.03]]);
     vfLista(t, [["Ter celular = acesso de qualidade", "F ❌", "#dc2626"], ["Habilidade é saber usar com segurança", "V ✅", "#16a34a"], ["Wi-Fi gratuito na praça ajuda", "V ✅", "#16a34a"], ["Só tem a ver com ter aparelho", "F ❌", "#dc2626"]], a, r);
     R({ x: 1120, y: 610, s: .45, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); J({ x: 1210, y: 610, s: .45, olhar: -1, braco: -2.3, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore(); palavra("VERDADEIRO OU FALSO?", 560, 90, seg(t, 0, .4), 52); } },
 { chip: "MISSÃO CUMPRIDA", fala: F7, legenda: L7, sfx: [[.1, "whoosh"], [em(F7, "acesso"), "pop"], [em(F7, "incluir"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { const ac = em(F7, "acesso"), inc = em(F7, "incluir"), mc = em(F7, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 360, 1.04], [mc, 640, 360, 1]]); cidadeFundo(t, "#052e16");
     [150, 360, 920, 1130].forEach((x, i) => { casa(x, 540, .9, ["#fde68a", "#bbf7d0", "#bfdbfe", "#fbcfe8"][i]); emo("📶", x, 400, 56 * back(seg(t, inc + i * .3, inc + .4 + i * .3))); });
     cartaoC("📶 todos conectados!", 640, 300, 560, "#bbf7d0", seg(t, inc + 1, inc + 1.4));
     R({ x: 560, y: 590, s: .8, olhar: 1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t) }); J({ x: 720, y: 590, s: .8, olhar: -1, braco: -2.6, bracoE: 2.6, boca: "riso", pisca: pisca(t + .5) }); g.restore(); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "tarefa"), "pop"], [em(F8, "ajudar"), "pop"], [em(F8, "laboratório"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["tarefa", "📝", "Tarefa pela internet", "colega sem como fazer"], ["ajudar", "👵", "Ajudar a família", "a usar um aplicativo"], ["laboratório", "💻", "Laboratório da escola", "de informática"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 3º bimestre de 2027 · Missão 3", [JULIA, RAFA]); } }
];

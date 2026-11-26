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

/* ===== peças comuns do 7º ano · 3º bimestre ===== */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
function camera(t, kf) { let a = kf[0], b = kf[kf.length - 1]; for (let i = 0; i < kf.length - 1; i++) if (t >= kf[i][0] && t <= kf[i + 1][0]) { a = kf[i]; b = kf[i + 1]; break; }
  const k = io2(cl((t - a[0]) / Math.max(.01, b[0] - a[0]))), x = lerp(a[1], b[1], k), y = lerp(a[2], b[2], k), z = lerp(a[3], b[3], k); g.translate(640, 360); g.scale(z, z); g.translate(-x, -y); }
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
function seta(x1, y1, cx, cy, x2, y2, cor, w, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.strokeStyle = cor; g.fillStyle = cor; g.lineWidth = w || 5; g.beginPath(); g.moveTo(x1, y1); g.quadraticCurveTo(cx, cy, x2, y2); g.stroke(); const a = Math.atan2(y2 - cy, x2 - cx); g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 18 * Math.cos(a - .45), y2 - 18 * Math.sin(a - .45)); g.lineTo(x2 - 18 * Math.cos(a + .45), y2 - 18 * Math.sin(a + .45)); g.fill(); g.restore(); }
function etq(txt, x, y, cor, k) { if (k <= 0) return; g.save(); g.globalAlpha = cl(k); g.font = `800 20px ${F}`; const w = g.measureText(txt).width + 24; g.fillStyle = cor || "#fff"; rr(x - w / 2, y - 18, w, 36, 10); g.fill(); g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillText(txt, x, y + 7); g.restore(); }
function onda(x, y, p, cor) { if (p <= 0 || p >= 1) return; g.save(); g.globalAlpha = 1 - p; g.strokeStyle = cor || "#fde047"; g.lineWidth = 5; g.beginPath(); g.arc(x, y, 20 + p * 60, 0, 7); g.stroke(); g.restore(); }
// janela de navegador: url na barra; o.cad = "ok" (https + cadeado) | "nao" (sem cadeado) ; conteudo(x0,y0,w,h)
function navegador(x, y, w, h, url, k, o, conteudo) { if (k <= 0) return; o = o || {}; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z);
  g.fillStyle = "rgba(0,0,0,.3)"; rr(-w / 2 + 6, -h / 2 + 8, w, h, 16); g.fill(); g.fillStyle = "#f1f5f9"; rr(-w / 2, -h / 2, w, h, 16); g.fill(); g.fillStyle = "#cbd5e1"; rr(-w / 2, -h / 2, w, 60, 16); g.fill(); g.fillRect(-w / 2, -h / 2 + 30, w, 30);
  ["#ef4444", "#facc15", "#22c55e"].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(-w / 2 + 26 + i * 24, -h / 2 + 30, 7, 0, 7); g.fill(); });
  const bx = -w / 2 + 120, bw = w - 150; g.fillStyle = o.hlUrl ? "#fef08a" : "#fff"; rr(bx, -h / 2 + 12, bw, 38, 19); g.fill();
  let tam = 22; g.font = `700 ${tam}px ${F}`; while (g.measureText(url).width > bw - 90 && tam > 11) { tam--; g.font = `700 ${tam}px ${F}`; }
  if (o.cad === "ok") cadeado(bx + 26, -h / 2 + 41, .3, false); else if (o.cad === "nao") { g.fillStyle = "#dc2626"; g.font = `800 15px ${F}`; g.textAlign = "left"; g.fillText("Não seguro", bx + 14, -h / 2 + 37); }
  g.font = `700 ${tam}px ${F}`; g.fillStyle = NAVY; g.textAlign = "left"; g.textBaseline = "alphabetic"; g.fillText(url, bx + (o.cad === "nao" ? 112 : 50), -h / 2 + 37);
  g.save(); rr(-w / 2, -h / 2 + 60, w, h - 60, 12); g.clip(); if (conteudo) conteudo(-w / 2, -h / 2 + 60, w, h - 60); g.restore(); g.restore(); }
function telaPag(x0, y0, w, h, titulo, cor) { g.fillStyle = cor || "#eff6ff"; g.fillRect(x0, y0, w, h); g.fillStyle = NAVY; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText(titulo, x0 + w / 2, y0 + h / 2 + 8); }
function balaoPensa(txt, x, y, k) { balao(txt, x, y, k); }
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
/* ===== peças da Missão 1 (Protocolos) ===== */
const SIG = s => s.replace(/agá tê tê pê ésse/g, "HTTPS").replace(/agá tê tê pê/g, "HTTP").replace(/í pê/g, "IP").replace(/uai-fai/g, "Wi-Fi").replace(/quatro zero quatro/g, "404").replace(/\bquatro passos\b/g, "4 passos").replace(/\bdois\b/g, "2");
// linha de conversa entre dois aparelhos: pontinhos que correm
function ligacao(x1, y1, x2, y2, t, cor, k) { if (k <= 0) return; g.save(); g.strokeStyle = cor; g.lineWidth = 7; g.lineCap = "round"; g.setLineDash([2, 16]); g.lineDashOffset = -t * 60; g.globalAlpha = cl(k); g.beginPath(); g.moveTo(x1, y1); g.lineTo(lerp(x1, x2, out(cl(k))), lerp(y1, y2, out(cl(k)))); g.stroke(); g.restore(); }
function servidor(x, y, s, t, luz) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#1e293b"; rr(-70, -220, 140, 220, 14); g.fill(); [0, 1, 2].forEach(i => { g.fillStyle = "#334155"; rr(-56, -204 + i * 64, 112, 52, 8); g.fill(); g.fillStyle = luz && Math.floor(t * 4 + i) % 2 ? "#4ade80" : "#16a34a"; g.beginPath(); g.arc(40, -178 + i * 64, 6, 0, 7); g.fill(); g.fillStyle = "#475569"; g.fillRect(-46, -184 + i * 64, 50, 6); g.fillRect(-46, -170 + i * 64, 36, 6); }); g.restore(); }
function pacote(x, y, k, em_) { if (k <= 0) return; emo(em_ || "📨", x, y, 54 * back(cl(k))); }
const F0 = "Protocolos: as regras da conversa!",
  F1 = "A Duda tem um celular de uma marca. O Caio tem um computador de outra marca. Mas como os dois conseguem conversar pela rede, se são aparelhos tão diferentes? O segredo se chama protocolo!",
  F2 = "Pense num telefonema. Todo mundo segue as mesmas regras, sem perceber. Primeiro, quem atende diz: alô! Segundo, quem ligou se apresenta. Terceiro, os dois conversam, um de cada vez. E quarto, os dois se despedem e desligam.",
  F3 = "Os aparelhos também precisam de regras combinadas para conversar. Esse conjunto de regras se chama protocolo. Se o celular e o computador seguem o mesmo protocolo, eles se entendem, mesmo sendo de marcas diferentes!",
  F4 = "O agá tê tê pê é o protocolo das páginas da internet: ele serve para pedir e receber as páginas. O agá tê tê pê ésse faz o mesmo, mas com os dados cifrados, ou seja, embaralhados.",
  F5 = "O í pê é o protocolo da internet: ele dá um endereço a cada aparelho, para os dados chegarem ao lugar certo. O uai-fai liga os aparelhos à rede sem fio. E o Bluetooth liga aparelhos pertinho um do outro, como o fone sem fio.",
  F6 = "Quem conversa na internet? O navegador é o programa que abre os sites, como o Chrome ou o Edge. O servidor é o computador que guarda o site e responde aos pedidos. E o link é o texto ou botão que, ao ser clicado, abre outra página.",
  F7 = "Agora, a conversa em quatro passos. Primeiro, você digita o endereço ou clica num link. Segundo, o navegador pede a página ao servidor. Terceiro, o servidor responde, mandando a página. E quarto, o navegador mostra a página na tela!",
  F8 = "E se a página não existe? Então o servidor responde com o famoso erro quatro zero quatro: página não encontrada!",
  F9 = "Agora a Duda e o Caio sabem: protocolo é o conjunto de regras que os aparelhos seguem para conversar, e por isso o celular e o computador se entendem. Missão cumprida!",
  F10 = "Onde eu uso isso? Toda vez que você abre um site, o navegador e o servidor seguem o agá tê tê pê. O fone sem fio conversa com o celular pelo Bluetooth. E o celular entra no uai-fai da escola seguindo o protocolo do uai-fai.",
  F11 = "Agora é com vocês: abram a Missão 1 no portal!";
const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "alerta"], [1.5, "pop"], [2.3, "festa"]],
   draw(t, D) { fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 380, 1.05], [2.8, 640, 370, 1]]);
     celular(300, 280, .62, () => { g.fillStyle = "#bbf7d0"; g.fillRect(-70, -146, 140, 292); emo("💬", 0, 20, 70); }); monitor(980, 350, .95, (x0, y0, w, h) => { g.fillStyle = "#dbeafe"; g.fillRect(x0, y0, w, h); emo("🌐", x0 + w / 2, y0 + h / 2 + 24, 70); });
     const ruido = seg(t, .5, .9) * (1 - seg(t, 1.5, 1.8)); if (ruido > 0) { balao("#@%$? ?!", 470, 230, ruido); balao("?$#@! %", 830, 230, seg(t, .7, 1.1) * (1 - seg(t, 1.5, 1.8))); }
     const ok = seg(t, 1.8, 2.3); ligacao(380, 280, 900, 280, t, "#4ade80", ok); if (ok > 0) { emo("🤝", 640, 310, 100 * back(cl(ok))); onda(640, 280, (t * 1.2) % 1, "#4ade80"); } g.restore(); abertura(t, "7º ANO · 3º BIM. · MISSÃO 1", "Protocolos", "AS REGRAS DA CONVERSA", "DOS APARELHOS!", 2.4); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "celular"), "pop"], [em(F1, "computador"), "pop"], [em(F1, "como"), "alerta"], [em(F1, "protocolo"), "festa"]],
   draw(t, D) { const ce = em(F1, "celular"), co = em(F1, "computador"), cm = em(F1, "como"), pr = em(F1, "protocolo"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 360, 1], [co, 700, 350, 1.05], [pr, 640, 340, 1]]);
     celular(420, 380, .8, () => { g.fillStyle = "#bbf7d0"; g.fillRect(-70, -146, 140, 292); emo("💬", 0, 20, 70); }); monitor(860, 450, 1.1, (x0, y0, w, h) => { g.fillStyle = "#dbeafe"; g.fillRect(x0, y0, w, h); emo("🌐", x0 + w / 2, y0 + h / 2 + 24, 70); });
     etq("celular de uma marca", 420, 560, "#fde68a", seg(t, ce, ce + .4)); etq("computador de outra marca", 860, 560, "#fecaca", seg(t, co, co + .4));
     if (t > cm) { emo("❓", 640, 300 + Math.sin(t * 5) * 8, 80 * back(cl(seg(t, cm, cm + .4)))); } g.restore();
     duda({ x: 130, y: 585, s: .72, olhar: 1, braco: -.7, bracoE: .3, boca: t > cm ? "o" : "riso", pisca: pisca(t) }); caio({ x: 1160, y: 585, s: .72, olhar: -1, braco: .3, bracoE: .3, boca: t > cm ? "o" : "riso", pisca: pisca(t + 1) });
     if (t > cm && t < pr) balao("Como eles se entendem?", 330, 190, seg(t, cm, cm + .4)); if (t > pr) palavra("PROTOCOLO", 560, 100, seg(t, pr, pr + .4), 72); } },
 { chip: "O TELEFONEMA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "alô"), "ding"], [em(F2, "apresenta"), "pop"], [em(F2, "conversam"), "pop"], [em(F2, "despedem"), "pop"]],
   draw(t, D) { const al = em(F2, "primeiro"), ap = em(F2, "segundo"), cv = em(F2, "terceiro"), de = em(F2, "quarto"); fundoEscuro(t, "#0e7490"); g.save(); camera(t, [[0, 640, 350, 1], [cv, 640, 340, 1.04]]);
     const P = [["1 · Alô?", al], ["2 · Se apresenta", ap], ["3 · Conversam, um de cada vez", cv], ["4 · Se despedem e desligam", de]]; P.forEach(([s, t0], i) => caixa(640, 210 + i * 86, s, ["#fde68a", "#bbf7d0", "#bfdbfe", "#fecaca"][i], seg(t, t0, t0 + .4), 470)); g.restore();
     caio({ x: 150, y: 585, s: .75, olhar: 1, braco: t > al && t < ap ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1130, y: 585, s: .75, olhar: -1, braco: t > ap && t < cv ? -2.2 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + 1) });
     emo("☎️", 330, 480, 70); emo("☎️", 950, 480, 70); if (t > al && t < ap) balao("Alô?", 290, 400, seg(t, al, al + .3)); if (t > ap && t < cv) balao("Oi, é a Duda!", 990, 400, seg(t, ap, ap + .3)); if (t > de) { balao("Tchau!", 290, 400, seg(t, de, de + .3)); } } },
 { chip: "O QUE É PROTOCOLO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "regras"), "pop"], [em(F3, "protocolo"), "ding"], [em(F3, "mesmo"), "pop"], [em(F3, "entendem"), "festa"]],
   draw(t, D) { const re = em(F3, "regras"), pr = em(F3, "protocolo"), me = em(F3, "mesmo"), en = em(F3, "entendem"); fundoEscuro(t, "#14532d"); palavra("PROTOCOLO", 560, 90, seg(t, pr, pr + .4), 72); g.save(); camera(t, [[0, 640, 380, 1], [me, 640, 360, 1.06], [en, 640, 370, 1]]);
     celular(320, 400, .75, () => { g.fillStyle = "#bbf7d0"; g.fillRect(-70, -146, 140, 292); emo("💬", 0, 20, 70); }); monitor(960, 470, 1.05, (x0, y0, w, h) => { g.fillStyle = "#dbeafe"; g.fillRect(x0, y0, w, h); emo("🌐", x0 + w / 2, y0 + h / 2 + 24, 70); });
     if (t > re) cartaoC("conjunto de regras combinadas", 640, 230, 520, "#fde68a", seg(t, re, re + .4)); ligacao(410, 400, 860, 400, t, "#4ade80", seg(t, me, me + .5)); if (t > me) etq("mesmo protocolo", 640, 360, "#bbf7d0", seg(t, me, me + .4));
     if (t > en) { visto(640, 470, 34, seg(t, en, en + .3)); onda(640, 400, (t * 1.5) % 1); } g.restore(); etq("marca A", 320, 600, "#fde68a", seg(t, me, me + .4)); etq("marca B", 960, 600, "#fecaca", seg(t, me, me + .4));
     duda({ x: 110, y: 600, s: .6, olhar: 1, braco: t > en ? -2.6 : .3, bracoE: t > en ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "HTTP E HTTPS", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "agá"), "ding"], [em(F4, "pedir"), "pop"], [em(F4, "agá", 4), "ding"], [em(F4, "cifrados"), "pop"], [em(F4, "embaralhados"), "festa"]],
   draw(t, D) { const h1 = em(F4, "agá"), pe = em(F4, "pedir"), h2 = em(F4, "agá", 4), ci = em(F4, "cifrados"); fundoEscuro(t, "#4c1d95"); g.save(); camera(t, [[0, 640, 350, 1], [h2, 640, 350, 1.04]]);
     navegador(330, 340, 500, 290, "http://", seg(t, h1 - .2, h1 + .3), { cad: "nao" }, (x0, y0, w, h) => { g.fillStyle = "#eff6ff"; g.fillRect(x0, y0, w, h); emo("📄", x0 + w / 2, y0 + h / 2 + 30, 80); });
     if (t > pe) etiqueta("pedir e receber páginas", 330, 530, 330, 490, seg(t, pe, pe + .4));
     navegador(950, 340, 500, 290, "https://", seg(t, h2 - .2, h2 + .3), { cad: "ok" }, (x0, y0, w, h) => { g.fillStyle = "#dcfce7"; g.fillRect(x0, y0, w, h); const k = t > ci ? 1 : 0; g.fillStyle = NAVY; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText(k ? "#9@x%k!" : "oi!", x0 + w / 2, y0 + h / 2 + 14); });
     if (t > ci) etiqueta("dados cifrados = embaralhados", 950, 530, 950, 490, seg(t, ci, ci + .4)); g.restore();
     palavra("HTTP", 300, 90, seg(t, h1, h1 + .4), 66); if (t > h2) palavra("HTTPS", 640, 90, seg(t, h2, h2 + .4), 66); caio({ x: 640, y: 610, s: .55, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "IP, WI-FI E BLUETOOTH", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "í"), "ding"], [em(F5, "endereço"), "pop"], [em(F5, "uai-fai"), "ding"], [em(F5, "Bluetooth"), "ding"], [em(F5, "fone"), "pop"]],
   draw(t, D) { const ip = em(F5, "í"), en = em(F5, "endereço"), wf = em(F5, "uai-fai"), bt = em(F5, "Bluetooth"), fo = em(F5, "fone"); fundoEscuro(t, "#7c2d12"); g.save(); camera(t, [[0, 640, 360, 1], [ip, 300, 340, 1.12], [wf, 640, 340, 1.12], [bt, 980, 340, 1.12], [bt + 1.6, 980, 340, 1.12], [D - .8, 640, 360, 1]]);
     [["IP", 300, ip, "🏠", "endereço do aparelho"], ["Wi-Fi", 640, wf, "📶", "rede sem fio"], ["Bluetooth", 980, bt, "🎧", "aparelhos pertinho"]].forEach(([n, x, t0, e, d]) => { const k = seg(t, t0 - .2, t0 + .3); if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 340); g.scale(z, z); g.fillStyle = "#fff"; rr(-150, -170, 300, 340, 22); g.fill(); g.restore(); emo(e, x, 330, 100 * z); g.fillStyle = NAVY; g.font = `800 32px ${F}`; g.textAlign = "center"; g.fillText(n, x, 214); g.font = `700 21px ${F}`; g.fillStyle = "#475569"; g.fillText(d, x, 490); });
     if (t > en) { pacote(398, 285 + (t * 60 % 24), seg(t, en, en + .3), "📦"); etq("para o lugar certo", 300, 430, "#fde68a", seg(t, en, en + .4)); } if (t > wf) { onda(640, 300, (t * 1.2) % 1, "#38bdf8"); onda(640, 300, (t * 1.2 + .5) % 1, "#38bdf8"); } if (t > fo) { etq("fone sem fio", 980, 430, "#bbf7d0", seg(t, fo, fo + .4)); } g.restore();
     palavra("PROTOCOLOS", 560, 90, seg(t, ip, ip + .4), 60); duda({ x: 1200, y: 620, s: .5, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "QUEM CONVERSA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "navegador"), "ding"], [em(F6, "servidor"), "ding"], [em(F6, "link"), "ding"], [em(F6, "outra"), "pop"]],
   draw(t, D) { const na = em(F6, "navegador"), sv = em(F6, "servidor"), li = em(F6, "link"), ou = em(F6, "outra"); fundoEscuro(t, "#1e3a5f"); g.save(); camera(t, [[0, 640, 360, 1], [na, 480, 350, 1.05], [sv, 800, 350, 1.05], [li, 640, 340, 1]]);
     navegador(380, 330, 480, 300, "meu-site", seg(t, na - .2, na + .3), {}, (x0, y0, w, h) => { g.fillStyle = "#eff6ff"; g.fillRect(x0, y0, w, h); emo("🌐", x0 + w / 2, y0 + h / 2 + 10, 80); g.fillStyle = "#2563eb"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText("clique aqui 🔗", x0 + w / 2, y0 + h - 30); });
     servidor(900, 470, 1.1, t, t > sv); if (t > na) etiqueta("navegador: Chrome ou Edge", 380, 140, 380, 180, seg(t, na, na + .4)); if (t > sv) etiqueta("servidor guarda o site", 900, 160, 900, 226, seg(t, sv, sv + .4));
     if (t > li) { ligacao(620, 330, 820, 330, t, "#facc15", seg(t, li, li + .5)); etq("link abre outra página", 640, 270, "#fde68a", seg(t, li, li + .4)); } g.restore();
     palavra("NAVEGADOR E SERVIDOR", 520, 90, seg(t, na, na + .4), 50); caio({ x: 110, y: 600, s: .6, olhar: 1, braco: -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "A CONVERSA EM 4 PASSOS", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "digita"), "pop"], [em(F7, "pede"), "whoosh"], [em(F7, "responde"), "whoosh"], [em(F7, "mostra"), "festa"]],
   draw(t, D) { const di = em(F7, "primeiro"), pd = em(F7, "segundo"), rs = em(F7, "terceiro"), mo = em(F7, "quarto"); fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 350, 1], [pd, 640, 340, 1.05], [mo, 640, 350, 1]]);
     navegador(330, 330, 440, 280, "meu-site", 1, {}, (x0, y0, w, h) => { g.fillStyle = t > mo ? "#dcfce7" : "#e2e8f0"; g.fillRect(x0, y0, w, h); if (t > mo) emo("📄", x0 + w / 2, y0 + h / 2 + 24, 80); }); servidor(950, 480, 1.1, t, true);
     if (t > pd) { const k = seg(t, pd, pd + 1); if (k < 1) pacote(lerp(520, 880, k), 300, 1, "📨"); } if (t > rs) { const k = seg(t, rs, rs + 1); if (k < 1) pacote(lerp(880, 520, k), 380, 1, "📄"); } g.restore();
     [["1 · Digita o endereço", di], ["2 · Pede a página", pd], ["3 · Servidor responde", rs], ["4 · Mostra na tela", mo]].forEach(([s, t0], i) => caixa(180 + i * 307, 565, s, ["#fde68a", "#bfdbfe", "#bbf7d0", "#fecaca"][i], seg(t, t0, t0 + .4), 290));
     if (t > di && t < pd) balao("meu-site", 200, 190, seg(t, di, di + .3)); duda({ x: 110, y: 470, s: .55, olhar: 1, braco: t > mo ? -2.6 : -.7, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "ERRO 404", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "não"), "alerta"], [em(F8, "quatro"), "ding"], [em(F8, "encontrada"), "pop"]],
   draw(t, D) { const na = em(F8, "não"), q4 = em(F8, "quatro"), en = em(F8, "encontrada"); fundoEscuro(t, "#7f1d1d"); g.save(); camera(t, [[0, 640, 350, 1], [q4, 560, 340, 1.1]]);
     navegador(500, 350, 560, 340, "pagina-que-nao-existe", seg(t, 0, .4), {}, (x0, y0, w, h) => { g.fillStyle = "#fef2f2"; g.fillRect(x0, y0, w, h); g.fillStyle = "#dc2626"; g.font = `900 110px ${F}`; g.textAlign = "center"; g.fillText(t > q4 ? "404" : "?", x0 + w / 2, y0 + h / 2 + 30); g.fillStyle = NAVY; g.font = `800 26px ${F}`; if (t > en) g.fillText("página não encontrada", x0 + w / 2, y0 + h / 2 + 90); });
     servidor(1020, 500, 1.0, t, true); if (t > na) balao("Não achei!", 1020, 230, seg(t, na, na + .3)); g.restore();
     if (t > q4) palavra("ERRO 404", 480, 90, seg(t, q4, q4 + .4), 76); caio({ x: 110, y: 600, s: .62, olhar: 1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "celular"), "pop"], [em(F9, "computador"), "pop"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const ce = em(F9, "celular"), co = em(F9, "computador"), mc = em(F9, "Missão"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 400, 1], [mc, 640, 380, 1.04]]);
     celular(400, 440, .7, () => { g.fillStyle = "#bbf7d0"; g.fillRect(-70, -146, 140, 292); emo("💬", 0, 20, 70); }); monitor(880, 500, 1.0, (x0, y0, w, h) => { g.fillStyle = "#dbeafe"; g.fillRect(x0, y0, w, h); emo("🌐", x0 + w / 2, y0 + h / 2 + 24, 70); }); ligacao(470, 400, 810, 400, t, "#4ade80", seg(t, ce, ce + .5)); emo("🤝", 640, 420, 80 * back(cl(seg(t, co, co + .4)))); g.restore();
     duda({ x: 150, y: 600, s: .72, olhar: 1, braco: t > mc ? -2.6 : -.7, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); caio({ x: 1130, y: 600, s: .72, olhar: -1, braco: t > mc ? -2.6 : .3, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + 1) }); robozinho(640, 590, .7, t, true); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "site"), "pop"], [em(F10, "fone"), "pop"], [em(F10, "celular", 1), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["site", "🌐", "Abrir um site", "navegador e servidor seguem o HTTP"], ["fone", "🎧", "Fone sem fio", "conversa com o celular: Bluetooth"], ["celular", "📶", "Wi-Fi da escola", "o celular segue o protocolo do Wi-Fi"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 3º bimestre de 2027 · Missão 1", [CAIO, MENINA7]); } }
];
for (let i = 1; i <= 10; i++) CENAS[i].legenda = SIG([F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10][i]);

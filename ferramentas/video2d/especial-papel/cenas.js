/* ================= ⭐ Aula especial · Meu papel de parede (6º ao 9º ano) ================= */
const LUCAS = { camisa: "#16a34a" }, BIA_PP = { camisa: "#a855f7", cabelo: "longo" };
const lucas = o => boneco(Object.assign({}, LUCAS, o));
// tempo (na escala da cena) em que a palavra é falada
const AT = (fala, w, n) => { const ws = fala.split(/\s+/); let k = -1, c2 = 0; for (let i = 0; i < ws.length; i++) if (ws[i].toLowerCase().replace(/[^a-zà-ú0-9]/g, "").startsWith(w.toLowerCase())) { if (c2++ === (n || 0)) { k = i; break; } } return Math.max(0, k) / 2.55 + .25; };

function estadio(x, y, w, h, luz) { // o papel de parede do Lucas (desenho inventado)
  g.save(); g.translate(x, y); const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#0b1340"); gr.addColorStop(1, "#27408b"); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  [[.1, luz], [.9, luz]].forEach(([px, k]) => { const lx = px * w; g.fillStyle = "#555"; g.fillRect(lx - 2, h * .15, 4, h * .4); if (k > 0) { const rg = g.createRadialGradient(lx, h * .16, 2, lx, h * .16, h * .3); rg.addColorStop(0, `rgba(255,251,224,${.9 * k})`); rg.addColorStop(1, "rgba(255,251,224,0)"); g.fillStyle = rg; g.beginPath(); g.arc(lx, h * .16, h * .3, 0, 7); g.fill(); }
    g.fillStyle = k > 0 ? "#fff8c4" : "#666"; g.fillRect(lx - w * .03, h * .12, w * .06, h * .05); });
  g.fillStyle = "#7a1f2b"; g.beginPath(); g.moveTo(0, h * .55); g.quadraticCurveTo(w / 2, h * .4, w, h * .55); g.lineTo(w, h * .68); g.lineTo(0, h * .68); g.fill();
  g.fillStyle = "#2f9e44"; g.fillRect(0, h * .68, w, h * .32); g.fillStyle = "#37b24d"; for (let i = 0; i < 8; i += 2) g.fillRect(i * w / 8, h * .68, w / 8, h * .32);
  g.strokeStyle = "#fff"; g.lineWidth = 2; g.beginPath(); g.ellipse(w / 2, h * .84, w * .12, h * .07, 0, 0, 7); g.stroke(); g.fillStyle = "#fff"; g.beginPath(); g.arc(w * .63, h * .9, h * .04, 0, 7); g.fill(); g.restore(); }
function tela(x, y, w, h, fundo, so) { // uma área de trabalho (fundo = função ou cor), com barra de tarefas
  g.save(); g.fillStyle = "#1f2937"; rr(x - 12, y - 12, w + 24, h + 24, 16); g.fill(); g.beginPath(); g.rect(x, y, w, h); g.clip();
  if (typeof fundo === "function") fundo(x, y, w, h); else { const gr = g.createLinearGradient(x, y, x + w, y + h); gr.addColorStop(0, fundo || "#0a5fb4"); gr.addColorStop(1, "#021a3d"); g.fillStyle = gr; g.fillRect(x, y, w, h); }
  barraTarefas(x, y + h - 30, w, so); g.restore(); }
function barraTarefas(x, y, w, so, real) { // so: 10 (Iniciar à esquerda) ou 11 (no centro)
  g.fillStyle = so === 11 ? "#eef3fa" : "#1f1f1f"; g.fillRect(x, y, w, 30); g.font = `700 18px ${F}`; g.textAlign = "center"; g.textBaseline = "middle";
  const ix = so === 11 ? x + w / 2 - 40 : x + 18; g.fillStyle = so === 11 ? "#0067c0" : "#fff"; g.fillText("⊞", ix, y + 16);
  if (so !== 11) { g.fillStyle = "#f2f2f2"; g.fillRect(x + 36, y + 5, Math.min(140, w * .3), 20); }
  g.font = `400 15px ${F}`; g.fillStyle = "#000"; g.fillText("📁", so === 11 ? ix + 32 : x + w * .3 + 60, y + 16); g.fillText("🌐", so === 11 ? ix + 62 : x + w * .3 + 90, y + 16); g.textBaseline = "alphabetic"; return ix; }
function arq(x, y, s, ext, cor, k, nome) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z);
  g.fillStyle = "#fff"; g.strokeStyle = cor; g.lineWidth = 5; g.beginPath(); g.moveTo(-40, -52); g.lineTo(18, -52); g.lineTo(40, -30); g.lineTo(40, 52); g.lineTo(-40, 52); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = cor; rr(-50, 0, 100, 34, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(ext, 0, 26);
  if (nome) { g.fillStyle = "#fff"; g.font = `700 18px ${F}`; g.fillText(nome, 0, 84); } g.restore(); }
function menuCtx(x, y, itens, k, w) { if (k <= 0) return; const a = out(cl(k)); g.save(); g.globalAlpha = a; w = w || 330; const h = itens.length * 38 + 12;
  g.fillStyle = "#f9f9f9"; g.shadowColor = "rgba(0,0,0,.4)"; g.shadowBlur = 16; rr(x, y, w, h, 10); g.fill(); g.shadowBlur = 0;
  itens.forEach((it, i) => { const yy = y + 8 + i * 38; if (it.dest) { g.fillStyle = it.dest; rr(x + 6, yy, w - 12, 34, 6); g.fill(); }
    g.fillStyle = it.off ? "#9ca3af" : "#111"; g.font = `${it.dest ? 800 : 600} 19px ${F}`; g.textAlign = "left"; g.fillText(it.t, x + 18, yy + 24);
    if (it.risco) { g.strokeStyle = "#dc2626"; g.lineWidth = 4; g.beginPath(); g.moveTo(x + 12, yy + 17); g.lineTo(x + 12 + (w - 24) * cl(it.risco), yy + 17); g.stroke(); } });
  g.restore(); }
function janela(x, y, w, h, titulo, k) { if (k <= 0) return false; const a = out(cl(k)); g.save(); g.globalAlpha = a; g.fillStyle = "#fff"; g.shadowColor = "rgba(0,0,0,.35)"; g.shadowBlur = 18; rr(x, y, w, h, 10); g.fill(); g.shadowBlur = 0;
  g.fillStyle = "#eef1f5"; rr(x, y, w, 36, 10); g.fill(); g.fillRect(x, y + 20, w, 16); g.fillStyle = "#111"; g.font = `700 17px ${F}`; g.textAlign = "left"; g.fillText(titulo, x + 14, y + 24); g.textAlign = "right"; g.fillText("—   ☐   ✕", x + w - 14, y + 24); g.restore(); return true; }
function tecla(x, y, txt, k, baixa) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y + (baixa ? 6 : 0)); g.scale(s, s); g.fillStyle = "#cbd5e1"; rr(-46, -40, 92, 86, 14); g.fill(); g.fillStyle = baixa ? "#facc15" : "#fff"; rr(-42, -40, 84, 76, 12); g.fill();
  g.fillStyle = NAVY; g.font = `800 40px ${F}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, -2); g.textBaseline = "alphabetic"; g.restore(); }
function carimbo(txt, x, y, k, tam) { if (k <= 0) return; const s = 1.6 - .6 * out(cl(k)); g.save(); g.translate(x, y); g.rotate(-.12); g.scale(s, s); g.globalAlpha = cl(k * 2); g.strokeStyle = "#dc2626"; g.lineWidth = 7; g.font = `800 ${tam || 34}px ${F}`;
  const w = g.measureText(txt).width + 40; rr(-w / 2, -34, w, 64, 10); g.stroke(); g.fillStyle = "#dc2626"; g.textAlign = "center"; g.fillText(txt, 0, 12); g.restore(); }
function painelPasso(n, x, y, k, titulo) { if (k <= 0) return false; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "rgba(255,255,255,.1)"; rr(-280, -100, 560, 200, 20); g.fill();
  g.fillStyle = AMAR; g.beginPath(); g.arc(-240, -62, 30, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `800 36px ${F}`; g.textAlign = "center"; g.fillText(n, -240, -49);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText(titulo, -196, -54); g.restore(); return true; }

const F0 = "Meu papel de parede: o caso da imagem rebelde!";
const F1 = "O Lucas achou na internet a imagem perfeita: o estádio do time dele, à noite, com todas as luzes acesas. Baixou, abriu no navegador... linda! Mas, quando foi colocar no papel de parede, nada. A opção nem apareceu. O que aconteceu?";
const F2 = "O culpado tem nome: o formato da imagem. Todo arquivo tem um final, depois do ponto, chamado extensão. E a imagem do Lucas terminava em ponto webp.";
const F3 = "Mas, antes de resolver, descubra qual é o seu Windows. Olhe a barra de tarefas. O botão Iniciar está no centro? Windows 11. No canto esquerdo? Windows 10. Para ter certeza, aperte a tecla do Windows junto com a letra R, digite winver e aperte Enter. A janela mostra a versão!";
const F4 = "O papel de parede do Windows aceita imagens jpg, png, bmp e gif. Mas webp, não. E o jxl, o novo jpeg, também ainda não.";
const F5 = "E por que tanto site usa webp? Porque a imagem fica bem menor, e o site abre mais rápido. O navegador entende. O papel de parede, ainda não.";
const F6 = "Como descobrir o formato? Abra o Explorador de Arquivos, entre na pasta Downloads e olhe a coluna Tipo. Lá está escrito: Arquivo WEBP.";
const F7 = "Agora, a solução, em quatro passos. Um: clique com o botão direito na imagem, Abrir com, Paint. Dois: no Paint, clique em Arquivo, Salvar como, Imagem PNG. Três: clique em Salvar. Quatro: botão direito na imagem nova e Definir como plano de fundo da área de trabalho.";
const F8 = "Atenção: só trocar o nome de webp para png não adianta! Por dentro, a imagem continua sendo webp. Converter é salvar de novo, em outro formato.";
const F9 = "E o Lucas? Estádio aceso no papel de parede. Missão cumprida!";
const F10 = "Onde eu uso isso? No papel de parede, nos sites que avisam formato não suportado e sempre que um programa pede outro tipo de imagem.";
const F11 = "Agora é com vocês: abram a aula especial no portal e treinem no simulador!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.9, "pop"], [1.3, "alerta"], [1.9, "ding"], [3.0, "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e");
     tela(470, 175, 340, 200, "#0a5fb4", 11);
     const voo = io(seg(t, .2, .9)), volta = io(seg(t, .9, 1.4)); const ix = lerp(-260, 560, voo) - 330 * volta, iy = 210 - 60 * Math.sin(Math.PI * volta), r = -.3 + .3 * voo - .6 * volta;
     g.save(); g.translate(ix + 110, iy + 65); g.rotate(r); estadio(-110, -65, 220, 130, 1); g.strokeStyle = "#fff"; g.lineWidth = 5; g.strokeRect(-110, -65, 220, 130); g.restore();
     carimbo("NÃO ACEITO?!", 900, 175, seg(t, 1.3, 1.7), 30);
     abertura(t, "⭐ AULA ESPECIAL · 6º AO 9º ANO", "Meu papel de parede", "O CASO DA", "IMAGEM REBELDE!", 1.9); } },

 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [AT(F1, "estádio") + .2, "ding"], [AT(F1, "baixou"), "click"], [AT(F1, "colocar"), "click"], [AT(F1, "nada"), "sumiu"], [AT(F1, "aconteceu") - .4, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const tm = AT(F1, "colocar"), tn = AT(F1, "nada");
     lucas({ x: 230, y: 560, s: 1.05, braco: t > tm ? -1.2 : -.35, bracoE: .3, olhar: 1, boca: t > tn ? "o" : "sorri", pisca: pisca(t) });
     janela(470, 120, 640, 400, "🌐 Google Chrome · papel de parede", 1);
     estadio(500, 175, 360, 210, 1); g.fillStyle = "#fff"; g.font = `700 16px ${F}`; g.textAlign = "left"; g.fillText("Papel de parede: estádio à noite", 500, 410);
     if (t > AT(F1, "baixou")) { const k = seg(t, AT(F1, "baixou"), AT(F1, "baixou") + .6); g.save(); g.globalAlpha = cl(k); g.fillStyle = "#fff"; rr(880, 175, 210, 70, 10); g.fill(); g.fillStyle = "#111"; g.font = `700 15px ${F}`; g.fillText("⬇️ estadio-a-noite.webp", 892, 205); g.fillStyle = "#16a34a"; g.fillText("Concluído", 892, 228); g.restore(); }
     if (t > AT(F1, "linda")) palavra("LINDA! 😍", 990, 330, seg(t, AT(F1, "linda"), AT(F1, "linda") + .4), 40);
     if (t > tm) { cursor(760, 300, t < tm + .3); menuCtx(780, 280, [{ t: "Abrir" }, { t: "Abrir com ›" }, { t: "Definir como plano de fundo", off: true, risco: seg(t, tn, tn + .5) }, { t: "Propriedades" }], seg(t, tm, tm + .3), 320); }
     if (t > AT(F1, "aconteceu") - .3) { balao("Ué?!", 300, 300, seg(t, AT(F1, "aconteceu") - .3, AT(F1, "aconteceu"))); palavra("O QUE ACONTECEU?", 640, 80, seg(t, AT(F1, "aconteceu") - .2, AT(F1, "aconteceu") + .2), 46); } } },

 { chip: "O CULPADO", legenda: "O culpado tem nome: o formato da imagem. Todo arquivo tem um final, depois do ponto, chamado extensão. E a imagem do Lucas terminava em .webp.", fala: F2, sfx: [[.1, "whoosh"], [AT(F2, "formato"), "alerta"], [AT(F2, "extensão"), "pop"], [AT(F2, "webp"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); if (t > AT(F2, "formato")) palavra("O FORMATO!", 640, 110, seg(t, AT(F2, "formato"), AT(F2, "formato") + .4), 78);
     const kz = back(seg(t, .3, .9)); g.save(); g.translate(640, 300); g.scale(kz, kz); g.font = `800 64px ${F}`; g.textAlign = "right"; g.fillStyle = "#fff"; g.fillText("estadio-a-noite", 60, 20);
     const kw = seg(t, AT(F2, "final"), AT(F2, "final") + .5); if (kw > 0) { g.textAlign = "left"; g.globalAlpha = cl(kw); g.fillStyle = (Math.floor(t * 3) % 2 && t > AT(F2, "webp")) ? "#fde047" : "#f87171"; g.fillText(".webp", 66, 20); } g.restore();
     etiqueta("EXTENSÃO = o final depois do ponto", 760, 470, 790, 340, seg(t, AT(F2, "extensão"), AT(F2, "extensão") + .5));
     arq(200, 330, 1.1, ".webp", "#dc2626", seg(t, AT(F2, "webp"), AT(F2, "webp") + .4)); } },

 { chip: "QUAL É O MEU WINDOWS?", fala: F3, sfx: [[.1, "whoosh"], [AT(F3, "centro"), "pop"], [AT(F3, "11"), "ding"], [AT(F3, "esquerdo"), "pop"], [AT(F3, "10"), "ding"], [AT(F3, "tecla"), "tec"], [AT(F3, "letra"), "tec"], [AT(F3, "digite"), "tec"], [AT(F3, "enter"), "click"], [AT(F3, "versão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const tc = AT(F3, "certeza") - .2, sobe = io(seg(t, tc, tc + .6));
     // fase 1: as duas barras de tarefas
     g.save(); g.globalAlpha = 1 - .75 * sobe; const yb = lerp(330, 150, sobe);
     g.fillStyle = "#0a5fb4"; rr(60, yb - 150, 540, 150, 10); g.fill(); g.fillStyle = "#a9c8ee"; rr(680, yb - 150, 540, 150, 10); g.fill();
     barraTarefas(60, yb, 540, 10); const i11 = barraTarefas(680, yb, 540, 11);
     const k11 = seg(t, AT(F3, "centro"), AT(F3, "centro") + .4), k10 = seg(t, AT(F3, "esquerdo"), AT(F3, "esquerdo") + .4);
     if (k11 > 0) { g.strokeStyle = "#16a34a"; g.lineWidth = 6; g.beginPath(); g.arc(i11, yb + 15, 26 * back(cl(k11)), 0, 7); g.stroke(); }
     if (k10 > 0) { g.strokeStyle = "#facc15"; g.lineWidth = 6; g.beginPath(); g.arc(78, yb + 15, 26 * back(cl(k10)), 0, 7); g.stroke(); }
     g.restore();
     if (sobe < .5) { palavra("WINDOWS 11", 950, 210, seg(t, AT(F3, "11"), AT(F3, "11") + .4), 54); palavra("WINDOWS 10", 330, 210, seg(t, AT(F3, "10"), AT(F3, "10") + .4), 54);
       if (t > AT(F3, "centro")) etiqueta("NO CENTRO", 950, 450, i11, 360, seg(t, AT(F3, "centro"), AT(F3, "centro") + .5));
       if (t > AT(F3, "esquerdo")) etiqueta("NO CANTO ESQUERDO", 300, 450, 90, 360, seg(t, AT(F3, "esquerdo"), AT(F3, "esquerdo") + .5)); }
     // fase 2: ⊞ + R › winver › Sobre o Windows
     if (sobe > 0) { const tt1 = AT(F3, "tecla"), tr = AT(F3, "letra"), td = AT(F3, "digite"), te = AT(F3, "enter"), tv = AT(F3, "versão") - .3;
       tecla(170, 330, "⊞", seg(t, tt1, tt1 + .3), t > tt1 + .3 && t < te); palavra("+", 250, 330, seg(t, tr - .1, tr + .2), 50); tecla(330, 330, "R", seg(t, tr, tr + .3), t > tr + .3 && t < te);
       if (janela(470, 250, 380, 170, "Executar", seg(t, tr + .3, tr + .7))) { g.fillStyle = "#111"; g.font = `700 18px ${F}`; g.textAlign = "left"; g.fillText("Abrir:", 490, 330); g.strokeStyle = "#555"; g.lineWidth = 2; g.strokeRect(560, 308, 260, 34);
         const n = Math.floor(6 * cl((t - td) / 1.0)); g.font = `700 22px ${F}`; g.fillText("winver".slice(0, Math.max(0, n)) + (Math.floor(t * 3) % 2 ? "|" : ""), 570, 333);
         g.fillStyle = "#0067c0"; rr(720, 365, 100, 36, 6); g.fill(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText("OK", 770, 390); }
       if (janela(880, 230, 360, 230, "Sobre o Windows", seg(t, te + .2, te + .6))) { g.fillStyle = "#0067c0"; g.font = `300 44px ${F}`; g.textAlign = "left"; g.fillText("Windows 11", 900, 320); g.fillStyle = "#111"; g.font = `600 16px ${F}`; g.fillText("Microsoft Windows", 900, 360); g.fillText("Versão 24H2", 900, 384); }
       if (t > tv) palavra("⊞ + R › winver", 640, 205, seg(t, tv, tv + .4), 44); } } },

 { chip: "OS FORMATOS", legenda: "O papel de parede do Windows aceita imagens .jpg, .png, .bmp e .gif. Mas .webp, não. E o .jxl, o novo JPEG, também ainda não.", fala: F4, sfx: [[.1, "whoosh"], [AT(F4, "jpg"), "ding"], [AT(F4, "png"), "ding"], [AT(F4, "bmp"), "ding"], [AT(F4, "gif"), "ding"], [AT(F4, "webp") + .3, "alerta"], [AT(F4, "jxl") + .3, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); tela(820, 140, 380, 230, "#0a5fb4", 11); palavra("PAPEL DE PAREDE", 1010, 420, seg(t, .2, .6), 34);
     const L = [[".jpg", "jpg", 1], [".png", "png", 1], [".bmp", "bmp", 1], [".gif", "gif", 1], [".webp", "webp", 0], [".jxl", "jxl", 0]];
     L.forEach(([e, w, ok], i) => { const t0 = AT(F4, w), x = 90 + (i % 3) * 210, y = 190 + Math.floor(i / 3) * 210; const k = seg(t, t0 - .3, t0 + .1); if (k <= 0) return;
       const cor = ok ? "#16a34a" : "#dc2626"; arq(x + 40, y, .95, e, cor, k); if (ok) visto(x + 105, y - 55, 26, seg(t, t0, t0 + .3)); else xVermelho(x + 105, y - 55, 26, seg(t, t0 + .2, t0 + .5)); });
     if (t > AT(F4, "jxl")) etiqueta("O NOVO JPEG 🆕", 640, 520, 520, 470, seg(t, AT(F4, "jxl"), AT(F4, "jxl") + .5)); } },

 { chip: "POR QUE TANTO .WEBP?", legenda: "E por que tanto site usa .webp? Porque a imagem fica bem menor, e o site abre mais rápido. O navegador entende. O papel de parede, ainda não.", fala: F5, sfx: [[.1, "whoosh"], [AT(F5, "menor"), "pop"], [AT(F5, "rápido"), "voa"], [AT(F5, "entende"), "ding"], [AT(F5, "ainda"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const tm = AT(F5, "menor");
     arq(200, 230, 1.0, ".jpg", "#16a34a", seg(t, .2, .6), "486 KB"); arq(470, 230, 1.0, ".webp", "#dc2626", seg(t, .4, .8), "214 KB");
     if (t > tm) { barra(110, 360, 180, seg(t, tm, tm + .8), "#16a34a"); barra(380, 360, 180, seg(t, tm, tm + .8) * .44, "#dc2626"); palavra("BEM MENOR!", 470, 120, seg(t, tm, tm + .4), 50); }
     if (t > AT(F5, "rápido")) comando("🚀 SITE MAIS RÁPIDO", 335, 470, seg(t, AT(F5, "rápido"), AT(F5, "rápido") + .4), "#7c3aed", 420);
     if (t > AT(F5, "entende")) { comando("🌐 NAVEGADOR: “eu abro!”", 960, 220, seg(t, AT(F5, "entende"), AT(F5, "entende") + .4), "#16a34a", 460); }
     if (t > AT(F5, "ainda")) { comando("🖼️ PAPEL DE PAREDE: “ainda não!”", 960, 330, seg(t, AT(F5, "ainda"), AT(F5, "ainda") + .4), "#dc2626", 460); } } },

 { chip: "DESCOBRIR O FORMATO", fala: F6, sfx: [[.1, "whoosh"], [AT(F6, "explorador"), "click"], [AT(F6, "downloads"), "click"], [AT(F6, "tipo"), "pop"], [AT(F6, "webp"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const te = AT(F6, "explorador");
     if (janela(140, 120, 1000, 330, "📁  " + (t > AT(F6, "downloads") ? "Downloads" : "Este Computador"), seg(t, te, te + .4))) {
       g.fillStyle = "#f3f4f6"; g.fillRect(140, 156, 200, 294); g.fillStyle = "#111"; g.font = `600 18px ${F}`; g.textAlign = "left"; ["🖥️ Área de Trabalho", "⬇️ Downloads", "📄 Documentos", "🖼️ Imagens"].forEach((s2, i) => { if (i === 1 && t > AT(F6, "downloads")) { g.fillStyle = "#cce8ff"; g.fillRect(146, 178 + i * 44, 188, 36); g.fillStyle = "#111"; } g.fillText(s2, 158, 202 + i * 44); });
       if (t > AT(F6, "downloads")) { g.fillStyle = "#64748b"; g.font = `600 17px ${F}`; g.fillText("Nome", 370, 196); g.fillText("Tipo", 760, 196); g.fillText("Tamanho", 990, 196); g.fillStyle = "#e5e7eb"; g.fillRect(360, 206, 770, 2);
         g.fillStyle = "#111"; g.font = `600 21px ${F}`; g.fillText("🖼️ estadio-a-noite", 370, 246); g.fillText("214 KB", 990, 246); g.fillStyle = "#dc2626"; g.font = `800 21px ${F}`; g.fillText("Arquivo WEBP", 760, 246); } }
     const tt2 = AT(F6, "tipo"); if (t > tt2) { const k = io(seg(t, tt2, tt2 + .6)); lupa(lerp(400, 830, k), 245, .7); }
     if (t > AT(F6, "webp") - .3) { etiqueta("A COLUNA TIPO DIZ O FORMATO", 640, 520, 830, 260, seg(t, AT(F6, "webp") - .3, AT(F6, "webp") + .3)); } } },

 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [AT(F7, "um"), "pop"], [AT(F7, "paint"), "click"], [AT(F7, "dois"), "pop"], [AT(F7, "png"), "click"], [AT(F7, "três"), "pop"], [AT(F7, "salvar", 1), "click"], [AT(F7, "quatro"), "pop"], [AT(F7, "fundo") + .3, "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d");
     const P = [["1", "Abrir com › Paint", "um", 340, 190], ["2", "Arquivo › Salvar como › Imagem PNG", "dois", 940, 190], ["3", "Clicar em Salvar", "três", 340, 400], ["4", "Definir como plano de fundo", "quatro", 940, 400]];
     P.forEach(([n, tit, w, x, y], i) => { const t0 = AT(F7, w); if (!painelPasso(n, x, y, seg(t, t0 - .1, t0 + .3), tit)) return;
       if (i === 0) { arq(x - 170, y + 30, .7, ".webp", "#dc2626", 1); menuCtx(x - 90, y - 20, [{ t: "Abrir" }, { t: "Abrir com ›", dest: "#dbeafe" }, { t: "🎨 Paint", dest: t > AT(F7, "paint") ? "#fde68a" : null }], 1, 250); }
       if (i === 1) { menuCtx(x - 200, y - 20, [{ t: "Salvar como ›", dest: "#dbeafe" }, { t: "Imagem PNG", dest: t > AT(F7, "png") ? "#fde68a" : null }, { t: "Imagem JPEG" }], 1, 260); }
       if (i === 2) { g.fillStyle = t > AT(F7, "salvar", 1) ? "#16a34a" : "#0067c0"; rr(x - 90, y - 10, 180, 54, 10); g.fill(); g.fillStyle = "#fff"; g.font = `800 26px ${F}`; g.textAlign = "center"; g.fillText("Salvar", x, y + 26); if (t > AT(F7, "salvar", 1)) arq(x + 190, y + 20, .6, ".png", "#16a34a", seg(t, AT(F7, "salvar", 1), AT(F7, "salvar", 1) + .4)); }
       if (i === 3) { arq(x - 200, y + 30, .7, ".png", "#16a34a", 1); menuCtx(x - 120, y - 20, [{ t: "Abrir" }, { t: "Definir como plano de fundo", dest: t > AT(F7, "definir") ? "#bbf7d0" : "#dbeafe" }], 1, 380); } }); } },

 { chip: "CUIDADO!", legenda: "Atenção: só trocar o nome de .webp para .png não adianta! Por dentro, a imagem continua sendo .webp. Converter é salvar de novo, em outro formato.", fala: F8, sfx: [[.1, "whoosh"], [AT(F8, "trocar"), "tec"], [AT(F8, "adianta"), "alerta"], [AT(F8, "dentro"), "zum"], [AT(F8, "converter"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const tr = AT(F8, "trocar"), td = AT(F8, "dentro");
     lucas({ x: 180, y: 560, s: 1.0, braco: -1.0, bracoE: .3, olhar: 1, boca: t > AT(F8, "adianta") ? "o" : "sorri", pisca: pisca(t) });
     g.save(); g.font = `800 56px ${F}`; g.textAlign = "left"; g.fillStyle = "#fff"; g.fillText("estadio", 360, 200); const kx = seg(t, tr, tr + .6);
     const xw = 360 + g.measureText("estadio").width, ww = g.measureText(".webp").width; g.fillStyle = "#f87171"; g.fillText(".webp", xw, 200);
     if (kx > 0) { g.strokeStyle = "#fde047"; g.lineWidth = 7; g.beginPath(); g.moveTo(xw - 4, 182); g.lineTo(xw - 4 + (ww + 8) * cl(kx), 182); g.stroke(); g.fillStyle = "#fde047"; g.globalAlpha = cl(kx * 2 - 1); g.fillText("→ .png", xw + ww + 24, 200); } g.restore();
     if (t > td) { const k = seg(t, td, td + .6); arq(640, 360, 1.3, "WEBP", "#dc2626", k); g.save(); g.globalAlpha = cl(k); g.strokeStyle = "#38bdf8"; g.lineWidth = 4; g.setLineDash([10, 8]); rr(560, 270, 160, 180, 16); g.stroke(); g.restore(); balao("ainda sou WEBP 😏", 900, 330, seg(t, td + .3, td + .7)); }
     carimbo("RENOMEAR ≠ CONVERTER", 640, 510, seg(t, AT(F8, "converter") - .2, AT(F8, "converter") + .3), 38); } },

 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [AT(F9, "estádio"), "ding"], [AT(F9, "missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const ta = AT(F9, "estádio");
     tela(430, 190, 560, 320, (x, y, w, h) => estadio(x, y, w, h, seg(t, ta, ta + .8)), 11);
     lucas({ x: 230, y: 560, s: 1.05, braco: t > ta ? -2.8 : -.4, bracoE: t > ta ? 2.8 : .3, olhar: 1, boca: "sorri", pisca: pisca(t) });
     cumprida(t, AT(F9, "missão")); } },

 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [AT(F10, "papel"), "pop"], [AT(F10, "sites"), "pop"], [AT(F10, "sempre"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 110, seg(t, .1, .5), 60);
     comando("🖼️ No papel de parede do computador", 640, 230, seg(t, AT(F10, "papel"), AT(F10, "papel") + .4), "#2563eb", 760);
     comando("⚠️ Site que avisa “formato não suportado”", 640, 330, seg(t, AT(F10, "sites"), AT(F10, "sites") + .4), "#dc2626", 760);
     comando("📤 Programa que pede outro tipo de imagem (PNG, JPG)", 640, 430, seg(t, AT(F10, "sempre"), AT(F10, "sempre") + .4), "#16a34a", 760); } },

 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fundoEscuro(t); g.textAlign = "center"; g.globalAlpha = out(seg(t, 0, .6)); g.fillStyle = AMAR; g.font = `800 62px ${F}`; g.fillText("Prof. Welington Laignier", 640, 270);
     g.fillStyle = "#fff"; g.font = `700 30px ${F}`; g.fillText("⭐ Aula especial · 6º ao 9º ano · Meu papel de parede", 640, 330); g.font = `800 40px ${F}`; g.fillStyle = "#cfe0ff"; g.fillText("Abram a aula especial e treinem no simulador!", 640, 410); g.globalAlpha = 1;
     [LUCAS, BIA_PP].forEach((p, i) => boneco(Object.assign({ x: i ? 1100 : 180, y: 700, s: .9, braco: -2.8 + Math.sin(t * 10 + i) * .25, bracoE: 2.8, pisca: pisca(t + i * .7) }, p))); confete(t, .9); } }
];

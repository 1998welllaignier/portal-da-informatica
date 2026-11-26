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

/* ===== peças comuns do 9º ano · 2º bim. (Júlia e Rafa) ===== */
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const RAFA = { camisa: "#7c3aed" }, JULIA = { camisa: "#0d9488", cabelo: "longo" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), julia = o => boneco(Object.assign({}, JULIA, o));
function cartaoC(txt, x, y, w, cor, k, sub) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor; g.shadowColor = "rgba(0,0,0,.25)"; g.shadowBlur = 14; rr(-w / 2, -50, w, 100, 22); g.fill(); g.shadowBlur = 0;
  let tam = 34; g.font = `800 ${tam}px ${F}`; while (g.measureText(txt).width > w - 40 && tam > 18) { tam -= 2; g.font = `800 ${tam}px ${F}`; }
  g.fillStyle = NAVY; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, sub ? -14 : 0); if (sub) { g.font = `600 21px ${F}`; g.fillStyle = "#334155"; g.fillText(sub, 0, 24); } g.restore(); g.textBaseline = "alphabetic"; }
// cartão de ideia: emoji grande em cima, título e subtítulo embaixo (tudo dentro do fundo)
function ideia(x, y, w, h, e, tit, sub, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.25)"; rr(-w / 2 + 6, -h / 2 + 8, w, h, 20); g.fill(); g.fillStyle = cor || "#fff"; rr(-w / 2, -h / 2, w, h, 20); g.fill(); g.restore();
  emo(e, x, y - h * .1, Math.min(w, h) * .42 * z); g.fillStyle = NAVY; g.textAlign = "center"; { let ft = 24; g.font = `800 ${ft}px ${F}`; while (g.measureText(tit).width > w - 24 && ft > 12) { ft--; g.font = `800 ${ft}px ${F}`; } } g.fillText(tit, x, y + h * .24); if (sub) { let fs = 18; g.font = `600 ${fs}px ${F}`; while (g.measureText(sub).width > w - 24 && fs > 11) { fs--; g.font = `600 ${fs}px ${F}`; } g.fillStyle = "#475569"; g.fillText(sub, x, y + h * .24 + 28); } }
function cartaz(x, y, s, nome, emoji, k) { if (k <= 0) return; const z = back(cl(k)) * s; g.save(); g.translate(x, y); g.scale(z, z); g.rotate(Math.sin(k * 5) * .05);
  g.fillStyle = "rgba(0,0,0,.3)"; rr(-104, -142, 220, 300, 14); g.fill(); g.fillStyle = "#fde68a"; rr(-110, -150, 220, 300, 14); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 6; rr(-110, -150, 220, 300, 14); g.stroke();
  g.fillStyle = "#7f1d1d"; g.font = `900 28px ${F}`; g.textAlign = "center"; g.fillText("PROCURADO", 0, -108); g.fillStyle = "#fff"; rr(-80, -90, 160, 140, 10); g.fill(); g.strokeStyle = "#92400e"; g.lineWidth = 4; rr(-80, -90, 160, 140, 10); g.stroke();
  g.restore(); emo(emoji, x, y - 6 * z, 92 * z); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = NAVY; g.font = `900 22px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 100); g.restore(); }
function fundoPiso(t, cor, yPiso, corPiso) { fundoEscuro(t, cor); g.fillStyle = corPiso || "rgba(0,0,0,.35)"; g.fillRect(-400, yPiso || 575, 2080, 400); g.fillStyle = "rgba(255,255,255,.08)"; g.fillRect(-400, yPiso || 575, 2080, 6); }
function janelinha(x, y, w, h, tit, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.3)"; rr(-w / 2 + 5, -h / 2 + 6, w, h, 10); g.fill(); g.fillStyle = "#fff"; rr(-w / 2, -h / 2, w, h, 10); g.fill(); g.fillStyle = cor || "#dc2626"; rr(-w / 2, -h / 2, w, 30, 10); g.fill(); g.fillRect(-w / 2, -h / 2 + 18, w, 12);
  g.fillStyle = "#fff"; g.font = `800 16px ${F}`; g.textAlign = "center"; g.fillText(tit, 0, -h / 2 + 21); g.restore(); }
function lupaG(x, y, s) { lupa(x, y, s); }
function bichinho(x, y, s, t, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor || "#4ade80"; g.strokeStyle = "#166534"; g.lineWidth = 4; for (let i = 4; i >= 0; i--) { const dy = Math.sin(t * 8 + i * 1.1) * 8; g.beginPath(); g.arc(-i * 26, dy, 22 - i * 1.5, 0, 7); g.fill(); g.stroke(); }
  g.fillStyle = "#fff"; g.beginPath(); g.arc(6, -6 + Math.sin(t * 8) * 8, 7, 0, 7); g.arc(20, -6 + Math.sin(t * 8) * 8, 7, 0, 7); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(8, -5 + Math.sin(t * 8) * 8, 3, 0, 7); g.arc(22, -5 + Math.sin(t * 8) * 8, 3, 0, 7); g.fill(); g.restore(); }
/* ===== 9º M1 · Malwares (Delegacia dos Malwares) ===== */
const ANUN = ["OFERTA!", "GRÁTIS!", "CLIQUE!", "GANHE!"];
const telaAds = (t, n, ok) => () => { g.fillStyle = ok ? "#bbf7d0" : "#dff3ff"; g.fillRect(-70, -146, 140, 292); if (ok) { g.fillStyle = "#16a34a"; g.font = `900 40px ${F}`; g.textAlign = "center"; g.fillText("✔", 0, 14); return; }
  for (let i = 0; i < n; i++) { const x = -34 + (i * 37) % 68, y = -112 + (i * 53) % 214; g.fillStyle = ["#fde047", "#fb7185", "#60a5fa", "#a3e635"][i % 4]; rr(x - 34, y - 17, 68, 34, 6); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 2; g.stroke(); g.fillStyle = NAVY; g.font = `800 13px ${F}`; g.textAlign = "center"; g.fillText(ANUN[i % 4], x, y + 5); } };
function fichaSuspeito(nome, emoji, k) { cartaz(190, 340, .85, nome, emoji, k); }
const POSR = [[500, 250], [770, 220], [1010, 330], [650, 450], [920, 480]];
function redeM(t, infN, bt) { g.strokeStyle = "rgba(148,163,184,.7)"; g.lineWidth = 5; [[0, 1], [1, 2], [0, 3], [3, 4], [2, 4], [1, 3]].forEach(([a, b]) => { g.beginPath(); g.moveTo(POSR[a][0], POSR[a][1]); g.lineTo(POSR[b][0], POSR[b][1]); g.stroke(); });
  POSR.forEach(([x, y], i) => { const inf = i < infN; g.fillStyle = inf ? "#fecaca" : "#e2e8f0"; g.beginPath(); g.arc(x, y, 46, 0, 7); g.fill(); g.strokeStyle = inf ? "#dc2626" : NAVY; g.lineWidth = inf ? 8 : 4; g.stroke(); emo("💻", x, y + 16, 48); if (inf) emo("🦠", x + 30, y - 24, 30); }); }
const F0 = "Malwares: os programas do mal!",
  F1 = "O Rafa achou um jogo pago de graça num site desconhecido e baixou. Pouco depois, o celular ficou lento, cheio de anúncios, e começou a abrir coisas sozinho! A Júlia olhou e disse: isso tem cara de malware. Vamos investigar!",
  F2 = "Malware é todo programa feito para prejudicar: estragar, espionar, roubar dados ou pedir dinheiro. A palavra junta duas do inglês: malicious, que é malicioso, e software, que é programa.",
  F3 = "Primeiro suspeito: o vírus. Ele gruda em outros arquivos e se espalha quando eles são abertos. É como uma gripe, que passa de pessoa para pessoa.",
  F4 = "Segundo suspeito: o worm, que em português quer dizer verme. Ele se espalha sozinho pela rede, de computador em computador. É uma praga que anda sozinha!",
  F5 = "Terceiro: o cavalo de Troia. Ele finge ser um programa bom, como um jogo grátis, e esconde um malware dentro. É igual ao presente de madeira da lenda grega!",
  F6 = "Quarto: o spyware. Vem de spy, que quer dizer espião. Ele guarda o que você digita e manda para o criminoso, como alguém olhando por cima do seu ombro.",
  F7 = "E o quinto: o adware. Vem de advertisement, que é propaganda. Ele enche a tela de anúncios, como panfletos jogados sem parar!",
  F8 = "Mas como o malware entra? Por arquivos baixados de sites desconhecidos, por links de mensagens estranhas, por aplicativos de fora da loja oficial e por pen drives de outras pessoas.",
  F9 = "Caso resolvido! Anúncios do nada são pista de adware, e jogo pago de graça é a isca preferida do cavalo de Troia. Era mesmo coisa de malware!",
  F10 = "Agora, como se proteger? Mantenha o sistema e os aplicativos atualizados, porque a atualização fecha as portas que os malwares usam. Use um antivírus, que procura e bloqueia programas maliciosos. Baixe só da loja oficial, onde os aplicativos passam por verificação. E desconfie de grátis demais!",
  F11 = "E o celular do Rafa? Ele desinstalou o aplicativo suspeito e passou o antivírus. Os anúncios sumiram e o celular voltou ao normal. Missão cumprida!",
  F12 = "Onde eu uso isso? Antes de baixar um jogo, confira se ele é da loja oficial. Quando o celular pedir para atualizar, aceite: isso ajuda a proteger. E se aparecerem propagandas do nada, pode ser um adware.",
  F13 = "Agora é com vocês: abram a Missão 1 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.6, "misterio"], [1.2, "pop"], [1.8, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#0f172a"); g.save(); camera(t, [[0, 640, 300, 1.08], [1.8, 640, 320, 1]]);
     g.fillStyle = "rgba(255,240,180,.13)"; g.beginPath(); g.moveTo(560, 120); g.lineTo(720, 120); g.lineTo(940, 420); g.lineTo(340, 420); g.closePath(); g.fill();
     cartaz(300, 285, .62, "VÍRUS", "🦠", seg(t, .3, .8)); cartaz(980, 285, .62, "SPYWARE", "👀", seg(t, .5, 1)); celular(640, 290, .8, telaAds(t, Math.floor(seg(t, .6, 1.8) * 6), false));
     for (let i = 0; i < 5; i++) { const a = t * 1.5 + i * 1.26; emo("🦠", 640 + Math.cos(a) * 120, 290 + Math.sin(a) * 70, 34); } emo("❓", 640 + Math.sin(t * 5) * 6, 210, 60); g.restore();
     abertura(t, "9º ANO · MISSÃO 1", "Malwares: os programas do mal", "O CASO DO CELULAR", "ESTRANHO!", 1.9); } },
 { chip: "O CASO", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "jogo"), "pop"], [em(F1, "lento"), "alerta"], [em(F1, "anúncios"), "pop"], [em(F1, "sozinho"), "misterio"], [em(F1, "malware"), "ding"]],
   draw(t, D) { const jo = em(F1, "jogo"), le = em(F1, "lento"), an = em(F1, "anúncios"), so = em(F1, "sozinho"), ju = em(F1, "Júlia"), ma = em(F1, "malware");
     fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 340, 1], [le, 600, 330, 1.2], [ju, 760, 340, 1.05], [ma, 700, 340, 1]]);
     rafa({ x: 330, y: 575, s: 1.1, olhar: 1, braco: t > le ? -1.5 : -.7, bracoE: .3, boca: t > le ? "o" : "riso", pisca: pisca(t) }); celular(560, 380, 1.25, telaAds(t, t > an ? Math.floor(seg(t, an, so) * 9) + 1 : 0, false));
     if (t > ju) julia({ x: 960, y: 575, s: 1.1, olhar: -1, braco: t > ma ? -2.2 : -.6, bracoE: .3, boca: "riso", pisca: pisca(t + .5) }); g.restore();
     if (t > jo && t < le) balao("Jogo pago de graça!", 330, 210, seg(t, jo, jo + .3)); if (t > le && t < ju) balao("Que lento!", 330, 210, seg(t, le, le + .3)); if (t > ma) { palavra("MALWARE?", 900, 150, seg(t, ma, ma + .4), 66); } if (t > ju && t < ma) balao("Isso tem cara de…", 960, 220, seg(t, ju, ju + .3)); } },
 { chip: "O QUE É MALWARE", fala: F2, legenda: F2.replace("duas do inglês", "2 do inglês"), sfx: [[.1, "whoosh"], [em(F2, "malware"), "ding"], [em(F2, "estragar"), "pop"], [em(F2, "espionar"), "pop"], [em(F2, "roubar"), "pop"], [em(F2, "dinheiro"), "pop"], [em(F2, "malicious"), "pop"], [em(F2, "software"), "pop"]],
   draw(t, D) { const ma = em(F2, "Malware"), es = em(F2, "estragar"), ep = em(F2, "espionar"), ro = em(F2, "roubar"), di = em(F2, "dinheiro"), mi = em(F2, "malicious"), so = em(F2, "software");
     fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 340, 1.1], [es, 640, 330, 1], [mi, 640, 330, 1]]);
     [["💥", "estragar", "ESTRAGAR", es], ["👀", "", "ESPIONAR", ep], ["🔓", "", "ROUBAR DADOS", ro], ["💰", "", "PEDIR DINHEIRO", di]].forEach(([e, , n, t0], i) => ideia(200 + i * 290, 250, 240, 200, e, n, "", "#fff", seg(t, t0, t0 + .4)));
     if (t > mi) { cartaoC("malicious = malicioso", 330, 480, 450, "#fde68a", seg(t, mi, mi + .4)); } if (t > so) { palavra("+", 640, 495, seg(t, so, so + .3), 60); cartaoC("software = programa", 950, 480, 400, "#bae6fd", seg(t, so, so + .4)); } g.restore();
     palavra("MALWARE = PROGRAMA PARA PREJUDICAR", 640, 110, seg(t, ma, ma + .4), 40); julia({ x: 1180, y: 620, s: .6, olhar: -1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "SUSPEITO 1 · VÍRUS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "vírus"), "ding"], [em(F3, "gruda"), "pop"], [em(F3, "abertos"), "alerta"], [em(F3, "gripe"), "pop"]],
   draw(t, D) { const vi = em(F3, "vírus"), gr = em(F3, "gruda"), ab = em(F3, "abertos"), gp = em(F3, "gripe"); fundoPiso(t, "#14532d", 575, "#0b2e1c"); g.save(); camera(t, [[0, 640, 340, 1], [gr, 600, 330, 1.1], [gp, 640, 380, 1]]);
     fichaSuspeito("VÍRUS", "🦠", seg(t, vi, vi + .4)); const n = t > ab ? 1 + Math.floor((t - ab) * 1.6) : (t > gr ? 1 : 0);
     for (let i = 0; i < 6; i++) { const inf = i < n; arquivo(450 + i * 120, 330, 1.1, 0, inf ? "#16a34a" : "#2f7be0", i < 3 ? "doc" : "foto"); if (inf) emo("🦠", 450 + i * 120 + 24, 290, 34 + Math.sin(t * 8 + i) * 3); }
     if (t > gp) ["🤧", "😷", "😷"].forEach((e, i) => { emo(e, 520 + i * 200, 520, 70); if (i) seta(520 + (i - 1) * 200 + 50, 500, 520 + i * 200 - 50, 500, seg(t, gp + i * .5, gp + .5 + i * .5), "#fde68a"); }); g.restore();
     palavra("VÍRUS", 640, 110, seg(t, vi, vi + .4), 70); if (t > gr) etiqueta("gruda em outros arquivos", 700, 425, 520, 370, seg(t, gr, gr + .4)); if (t > ab) etiqueta("espalha quando abrem", 1010, 200, 880, 300, seg(t, ab, ab + .4));
     julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: t > gp ? -1.6 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "SUSPEITO 2 · WORM", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "worm"), "ding"], [em(F4, "verme"), "pop"], [em(F4, "sozinho"), "alerta"], [em(F4, "praga"), "pop"]],
   draw(t, D) { const wo = em(F4, "worm"), ve = em(F4, "verme"), so = em(F4, "sozinho"), pr = em(F4, "praga"); fundoEscuro(t, "#3f1d1d"); g.save(); camera(t, [[0, 640, 340, 1], [so, 620, 340, 1.05], [pr, 640, 340, 1]]);
     fichaSuspeito("WORM", "🐛", seg(t, wo, wo + .4)); const k = seg(t, so, pr + 1.5) * 4, i0 = Math.min(3, Math.floor(k)), f = k - i0, A = POSR[Math.min(4, i0)], B = POSR[Math.min(4, i0 + 1)]; const infN = t < so ? 0 : Math.min(5, 1 + Math.floor(k + .6));
     redeM(t, infN); if (t > so) bichinho(lerp(A[0], B[0], f) + 40, lerp(A[1], B[1], f) - 40, .8, t); g.restore();
     palavra("WORM = VERME", 640, 110, seg(t, wo, wo + .4), 70); if (t > so) etiqueta("sozinho pela rede", 880, 575, 800, 500, seg(t, so, so + .4)); if (t > pr) etiqueta("praga que anda sozinha", 330, 560, 500, 480, seg(t, pr, pr + .4));
     julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "SUSPEITO 3 · CAVALO DE TROIA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "cavalo"), "ding"], [em(F5, "finge"), "pop"], [em(F5, "esconde"), "alerta"], [em(F5, "madeira"), "pop"]],
   draw(t, D) { const ca = em(F5, "cavalo"), fi = em(F5, "finge"), es = em(F5, "esconde"), ma = em(F5, "madeira"); fundoPiso(t, "#78350f", 575, "#4a2a0f"); g.save(); camera(t, [[0, 640, 340, 1], [fi, 560, 360, 1.2], [es, 520, 380, 1.25], [ma, 640, 340, 1]]);
     fichaSuspeito("CAVALO DE TROIA", "🐴", seg(t, ca, ca + .4)); const ab = seg(t, es, es + .6);
     g.save(); g.translate(640, 450); g.fillStyle = "#b91c1c"; rr(-90, -80, 180, 130, 14); g.fill(); g.fillStyle = "#facc15"; g.fillRect(-12, -80, 24, 130); g.save(); g.translate(-90, -80); g.rotate(-ab * 1.1); g.fillStyle = "#dc2626"; rr(0, -26, 180, 30, 8); g.fill(); g.restore(); g.restore();
     if (t > fi) emo("🎮", 640, 430, 70); if (ab > 0) { emo("🦠", 640 + Math.sin(t * 4) * 10, 340 - ab * 70, 70); emo("😈", 720, 360 - ab * 60, 44); }
     if (t > ma) { emo("🐴", 960, 420, 190); g.fillStyle = "#92400e"; g.fillRect(900, 450, 120, 14); } g.restore();
     palavra("CAVALO DE TROIA", 640, 110, seg(t, ca, ca + .4), 64); if (t > fi && t < es) etiqueta("parece um jogo grátis", 900, 230, 700, 340, seg(t, fi, fi + .4)); if (t > es) etiqueta("malware escondido dentro", 1000, 250, 700, 340, seg(t, es, es + .4)); if (t > ma) etiqueta("presente de madeira da lenda", 640, 540, 940, 470, seg(t, ma, ma + .4));
     julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "SUSPEITO 4 · SPYWARE", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "spyware"), "ding"], [em(F6, "espião"), "pop"], [em(F6, "digita"), "tec"], [em(F6, "criminoso"), "alerta"], [em(F6, "ombro"), "pop"]],
   draw(t, D) { const sp = em(F6, "spyware"), es = em(F6, "espião"), di = em(F6, "digita"), cr = em(F6, "criminoso"), om = em(F6, "ombro"); fundoPiso(t, "#1e293b", 575, "#0f172a"); g.save(); camera(t, [[0, 640, 340, 1], [di, 600, 360, 1.15], [cr, 640, 330, 1], [om, 640, 340, 1]]);
     fichaSuspeito("SPYWARE", "👀", seg(t, sp, sp + .4)); monitor(560, 470, 1.05, (x, y, w, h) => { g.fillStyle = "#0f172a"; g.fillRect(x, y, w, h); g.fillStyle = "#86efac"; g.font = `800 24px ${F}`; g.textAlign = "left"; g.fillText("senha: " + "•".repeat(Math.min(8, Math.floor(Math.max(0, t - di) * 3))), x + 20, y + 90); });
     rafa({ x: 400, y: 575, s: .75, olhar: 1, braco: -1.2, bracoE: -1.2, boca: "riso", pisca: pisca(t) }); if (t > om) { emo("👀", 270, 330 + Math.sin(t * 6) * 4, 90); }
     if (t > di) for (let i = 0; i < 5; i++) { const p = ((t - di) * .5 + i * .2) % 1; g.globalAlpha = Math.sin(p * Math.PI); emo(["a", "7", "k", "9", "Z"][i], lerp(640, 990, p), lerp(380, 300, p) - Math.sin(p * Math.PI) * 50, 36); g.globalAlpha = 1; }
     if (t > cr) { emo("🕵️", 1000, 330, 110); } g.restore();
     palavra("SPYWARE = ESPIÃO", 640, 110, seg(t, sp, sp + .4), 66); if (t > di) etiqueta("guarda o que você digita", 700, 520, 580, 440, seg(t, di, di + .4)); if (t > cr) etiqueta("manda para o criminoso", 1010, 520, 1000, 410, seg(t, cr, cr + .4)); if (t > om) balao("Quem está aí?!", 440, 230, seg(t, om, om + .3));
     julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "SUSPEITO 5 · ADWARE", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "adware"), "ding"], [em(F7, "propaganda"), "pop"], [em(F7, "anúncios"), "alerta"], [em(F7, "panfletos"), "pop"]],
   draw(t, D) { const ad = em(F7, "adware"), pr = em(F7, "propaganda"), an = em(F7, "anúncios"), pa = em(F7, "panfletos"); fundoEscuro(t, "#701a75"); g.save(); camera(t, [[0, 640, 340, 1], [an, 610, 340, 1.05], [pa, 640, 340, 1]]);
     fichaSuspeito("ADWARE", "📢", seg(t, ad, ad + .4)); celular(640, 380, 1.3, telaAds(t, Math.floor(seg(t, an, pa + 1.5) * 12), false));
     for (let i = 0; i < 9; i++) { const k = seg(t, an + i * .12, an + .5 + i * .12); if (k > 0) { const x = 380 + (i * 173) % 540 + (i % 2 ? 160 : 0), y = 200 + (i * 97) % 300; janelinha(x, y, 150, 64, ["OFERTA!", "GRÁTIS!", "CLIQUE!", "GANHE!"][i % 4], ["#dc2626", "#2563eb", "#16a34a", "#d97706"][i % 4], k); } } g.restore();
     palavra("ADWARE = ANÚNCIOS", 640, 110, seg(t, ad, ad + .4), 66); if (t > pr) etiqueta("advertisement = propaganda", 880, 585, 800, 520, seg(t, pr, pr + .4)); julia({ x: 1180, y: 625, s: .55, olhar: -1, braco: -1.4, bracoE: .3, boca: "o", pisca: pisca(t) }); } },
 { chip: "COMO O MALWARE ENTRA", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "sites"), "pop"], [em(F8, "links"), "pop"], [em(F8, "aplicativos"), "pop"], [em(F8, "pen"), "pop"]],
   draw(t, D) { const si = em(F8, "sites"), li = em(F8, "links"), ap = em(F8, "aplicativos"), pe = em(F8, "pen"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1.05], [pe + 1, 640, 340, 1]]);
     const P = [[250, 220, "🌐", "SITES DESCONHECIDOS", "arquivos baixados", si], [250, 470, "💬", "LINKS ESTRANHOS", "mensagens suspeitas", li], [1030, 220, "📱", "FORA DA LOJA", "aplicativos piratas", ap], [1030, 470, "🔌", "PEN DRIVES", "de outras pessoas", pe]];
     P.forEach(([x, y, e, n, s, t0], i) => { ideia(x, y, 280, 190, e, n, s, "#fff", seg(t, t0, t0 + .4)); const k = seg(t, t0 + .3, t0 + .9); if (k > 0) { seta(x + (x < 640 ? 150 : -150), y, lerp(x + (x < 640 ? 150 : -150), 640 + (x < 640 ? -70 : 70), 1), 345 + (y - 345) * .35, k, "#fca5a5"); emo("🦠", lerp(x, 640, k), lerp(y, 345, k), 40); } });
     celular(640, 350, 1.0, telaAds(t, Math.floor(seg(t, si, pe + .8) * 8), false)); g.restore(); palavra("4 PORTAS DE ENTRADA", 640, 110, seg(t, 0, .4), 54); julia({ x: 1190, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CASO RESOLVIDO", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "Anúncios"), "pop"], [em(F9, "adware"), "pop"], [em(F9, "isca"), "pop"], [em(F9, "malware"), "festa"]],
   draw(t, D) { const an = em(F9, "Anúncios"), ad = em(F9, "adware"), is = em(F9, "isca"), ma = em(F9, "malware"); fundoPiso(t, "#78350f", 575, "#4a2a0f"); g.save(); camera(t, [[0, 640, 340, 1], [ad, 560, 330, 1.1], [is, 760, 330, 1.1], [ma, 640, 340, 1]]);
     g.fillStyle = "#a16207"; rr(250, 170, 780, 400, 14); g.fill(); g.strokeStyle = "#713f12"; g.lineWidth = 10; rr(250, 170, 780, 400, 14); g.stroke();
     ideia(430, 320, 250, 200, "📢", "ANÚNCIOS DO NADA", "", "#fde68a", seg(t, an, an + .4)); ideia(850, 320, 250, 200, "🎮", "JOGO PAGO DE GRAÇA", "", "#fde68a", seg(t, is - .6, is - .2));
     if (t > ad) { cartaoC("pista de adware", 430, 505, 260, "#fbcfe8", seg(t, ad, ad + .4)); } if (t > is) cartaoC("isca do cavalo de Troia", 850, 505, 300, "#fed7aa", seg(t, is, is + .4));
     if (t > ad) { g.strokeStyle = "#dc2626"; g.lineWidth = 5; g.beginPath(); g.moveTo(430, 222); g.lineTo(640, 205); g.lineTo(850, 222); g.stroke(); } g.restore();
     julia({ x: 140, y: 620, s: .75, olhar: 1, braco: -1.5, bracoE: .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 1150, y: 620, s: .75, olhar: -1, braco: .3, bracoE: .3, boca: "o", pisca: pisca(t + 1) }); emo("🔍", 215, 480, 70);
     if (t > ma) placaShow("CASO RESOLVIDO!", 640, 160, seg(t, ma, ma + .4), "#86efac"); } },
 { chip: "COMO SE PROTEGER", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "atualizados"), "ding"], [em(F10, "antivírus"), "ding"], [em(F10, "loja"), "ding"], [em(F10, "grátis"), "alerta"]],
   draw(t, D) { const at = em(F10, "atualizados"), av = em(F10, "antivírus"), lo = em(F10, "loja"), gr = em(F10, "grátis"); fundoEscuro(t, "#14532d"); g.save(); camera(t, [[0, 640, 340, 1.05], [av, 640, 340, 1], [gr + 1, 640, 340, 1.05]]);
     [["🔄", "ATUALIZAR", "fecha as portas", at], ["🛡️", "ANTIVÍRUS", "procura e bloqueia", av], ["🏪", "LOJA OFICIAL", "apps verificados", lo], ["🤔", "GRÁTIS DEMAIS?", "desconfie!", gr]].forEach(([e, n, s, t0], i) => { ideia(190 + i * 300, 330, 260, 260, e, n, s, "#fff", seg(t, t0, t0 + .4)); visto(190 + i * 300 + 100, 220, 22, seg(t, t0 + .4, t0 + .8)); }); g.restore();
     palavra("4 ESCUDOS CONTRA MALWARE", 640, 110, seg(t, 0, .4), 54); julia({ x: 640, y: 625, s: .55, olhar: 1, braco: -1.4, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "desinstalou"), "click"], [em(F11, "antivírus"), "ding"], [em(F11, "sumiram"), "pop"], [em(F11, "Missão"), "festa"]],
   draw(t, D) { const de = em(F11, "desinstalou"), av = em(F11, "antivírus"), su = em(F11, "sumiram"), mc = em(F11, "Missão"); fundoPiso(t, "#1e3a8a", 575, "#0f1f4a"); g.save(); camera(t, [[0, 640, 380, 1.05], [av, 640, 380, 1]]);
     celular(640, 420, 1.2, telaAds(t, t > su ? 0 : 8, t > su)); if (t > de && t < su) { emo("🎮", 840, 330, 60); xVermelho(840, 320, 36, seg(t, de, de + .4)); }
     if (t > av && t < su) { g.fillStyle = "rgba(255,255,255,.15)"; rr(470, 560, 340, 24, 12); g.fill(); g.fillStyle = "#4ade80"; rr(470, 560, 340 * seg(t, av, su), 24, 12); g.fill(); emo("🛡️", 470 + 340 * seg(t, av, su), 540, 44); } if (t > su) visto(640, 410, 40, seg(t, su, su + .4)); g.restore();
     julia({ x: 150, y: 620, s: .75, olhar: 1, braco: t > mc ? -2.5 : -.6, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t) }); rafa({ x: 1130, y: 620, s: .75, olhar: -1, braco: t > mc ? -2.5 : .3, bracoE: t > mc ? 2.5 : .3, boca: "riso", pisca: pisca(t + 1) }); if (t > de && t < av) etiqueta("desinstalar o app suspeito", 1000, 200, 850, 310, seg(t, de, de + .4)); if (t > av && t < su) etiqueta("passar o antivírus", 1000, 200, 800, 540, seg(t, av, av + .4)); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "jogo"), "pop"], [em(F12, "atualizar"), "pop"], [em(F12, "propagandas"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["jogo", "🏪", "Antes de baixar um jogo:", "confira se é da loja oficial"], ["atualizar", "🔄", "Celular pede atualização:", "aceite: ajuda a proteger"], ["propagandas", "📢", "Propagandas do nada:", "pode ser um adware"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · 2º bimestre de 2027 · Missão 1", [JULIA, RAFA]); } }
];

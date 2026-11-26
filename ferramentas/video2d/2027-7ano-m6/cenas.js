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
/* ===== peças do rali da programação (7º M6 v2) ===== */
function carro(x, y, s, t, k) { g.save(); g.translate(x, y); g.scale(s, s); const b = Math.sin(t * 20) * 2 * (k || 1);
  g.fillStyle = "#dc2626"; rr(-170, -60 + b, 340, 80, 30); g.fill(); g.fillStyle = "#b91c1c"; g.beginPath(); g.moveTo(-90, -60 + b); g.lineTo(-50, -120 + b); g.lineTo(80, -120 + b); g.lineTo(120, -60 + b); g.fill();
  g.fillStyle = "#bae6fd"; g.beginPath(); g.moveTo(-70, -64 + b); g.lineTo(-42, -110 + b); g.lineTo(18, -110 + b); g.lineTo(18, -64 + b); g.fill(); g.beginPath(); g.moveTo(28, -64 + b); g.lineTo(28, -110 + b); g.lineTo(74, -110 + b); g.lineTo(104, -64 + b); g.fill();
  [[-10, "#0ea5e9"], [50, "#f43f5e"]].forEach(([hx, c]) => { g.fillStyle = c; g.beginPath(); g.arc(hx, -84 + b, 18, 0, 7); g.fill(); g.fillStyle = "#0f172a"; g.fillRect(hx - 12, -88 + b, 24, 8); });
  g.fillStyle = "#fff"; g.beginPath(); g.arc(0, -20 + b, 22, 0, 7); g.fill(); g.fillStyle = NAVY; g.font = `900 24px ${F}`; g.textAlign = "center"; g.fillText("7", 0, -12 + b);
  [-105, 105].forEach(wx => { g.save(); g.translate(wx, 24); g.rotate(t * 12); g.fillStyle = "#111827"; g.beginPath(); g.arc(0, 0, 34, 0, 7); g.fill(); g.fillStyle = "#9ca3af"; g.fillRect(-4, -20, 8, 40); g.restore(); }); g.restore(); }
function estrada(t, v) { g.fillStyle = "#7dd3fc"; g.fillRect(-800, -600, 2880, 1000); g.fillStyle = "#a3e635"; g.fillRect(-800, 400, 2880, 900); g.fillStyle = "#475569"; g.fillRect(-800, 470, 2880, 130);
  g.fillStyle = "#fde047"; for (let i = 0; i < 14; i++) { const x = ((i * 160 - t * (v || 400)) % 2240 + 2240) % 2240 - 480; g.fillRect(x, 530, 80, 10); }
  for (let i = 0; i < 6; i++) { const x = ((i * 300 - t * (v || 400) * .4) % 1800 + 1800) % 1800 - 260; g.fillStyle = "#15803d"; g.beginPath(); g.arc(x, 380, 46, 0, 7); g.fill(); g.fillStyle = "#78350f"; g.fillRect(x - 8, 400, 16, 60); } }
function mesa7(t) { g.fillStyle = "#e0f2fe"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#7dd3fc"; g.fillRect(-800, 560, 2880, 700); g.fillStyle = "#b07a3c"; g.fillRect(200, 470, 880, 26); g.fillStyle = "#8a5a28"; g.fillRect(230, 496, 22, 200); g.fillRect(1030, 496, 22, 200); }
function telaProg(blocos, cor) { return (x, y, w, h) => { g.fillStyle = "#1e293b"; g.fillRect(x, y, w, h); blocos.forEach((s, i) => { g.fillStyle = cor || "#7c3aed"; rr(x + 14, y + 14 + i * 30, 170, 24, 6); g.fill(); g.fillStyle = "#fff"; g.font = `700 13px ${F}`; g.textAlign = "left"; g.fillText(s, x + 22, y + 31 + i * 30); }); }; }
function relogio(x, y, r, fr, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#fff"; g.beginPath(); g.arc(0, 0, r, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 8; g.stroke();
  g.fillStyle = "#fde68a"; g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, r - 10, -Math.PI / 2, -Math.PI / 2 + fr * 6.283); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 6; g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(-Math.PI / 2 + fr * 6.283) * (r - 16), Math.sin(-Math.PI / 2 + fr * 6.283) * (r - 16)); g.stroke(); g.restore(); }
function cracha(txt, x, y, cor, k) { if (k <= 0) return; cartaoC(txt, x, y, 210, cor, k); }
function papel(x, y, s, txt) { g.save(); g.translate(x, y); g.rotate(-.08); g.scale(s, s); g.fillStyle = "#fff"; rr(-50, -64, 100, 128, 6); g.fill(); g.strokeStyle = "#94a3b8"; g.lineWidth = 3; for (let i = 0; i < 5; i++) { g.beginPath(); g.moveTo(-36, -38 + i * 20); g.lineTo(36, -38 + i * 20); g.stroke(); }
  if (txt) { g.fillStyle = NAVY; g.font = `800 15px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, -46); } g.restore(); }
const F0 = "Programar em dupla: piloto e navegador!",
  F1 = "O Caio e a Duda foram fazer um programa juntos, no mesmo computador. Caio e Duda queriam mexer no mouse ao mesmo tempo, um apagava o bloco do outro, e no fim ninguém sabia o que o programa fazia. Que bagunça!",
  F2 = "Sabia que programadores de verdade trabalham muito em dupla? Isso se chama programação em dupla: um computador, duas cabeças e dois papéis diferentes, o piloto e o navegador. Igual numa corrida de rali.",
  F3 = "O piloto fica com o mouse e o teclado e monta os blocos. Ele é quem dirige. Mas não decide tudo sozinho: ele escuta o navegador.",
  F4 = "O navegador lê o enunciado, pensa no próximo passo, confere cada bloco e procura erros. Ele é quem olha o mapa. E tem uma regra: o navegador não pega o mouse!",
  F5 = "E a cada dez minutos, a dupla troca de papel. Isso é revezar. Assim, cada um pilota, cada um navega, e todo mundo aprende tudo.",
  F6 = "O jeito de trabalhar tem quatro passos. Primeiro, planejar: ler o problema juntos e dividir em partes. Essa lista de partes é o plano. Segundo, montar: o piloto monta uma parte, e o navegador confere.",
  F7 = "Terceiro, testar: rodar o programa depois de cada parte, e não só no final. Quarto, trocar: trocar de papel e seguir para a próxima parte do plano.",
  F8 = "E os combinados da dupla: falar com respeito, por exemplo, acho que esse bloco vai dentro do repita. Ouvir a ideia do outro antes de testar a sua. E lembrar que o erro é da dupla, não de um só.",
  F9 = "O Caio virou piloto, a Duda virou navegadora, e depois trocaram. O programa ficou pronto, e cada um sabia explicar cada bloco. Missão cumprida!",
  F10 = "Onde eu uso isso? No carro, o motorista dirige e quem está do lado olha o mapa. No jogo cooperativo, um ataca e o outro cuida do time. E nas empresas de tecnologia, programar em dupla ajuda a errar menos e a ensinar os novatos.",
  F11 = "Agora é com vocês: formem as duplas e abram a Missão 6 no portal!";
const L76 = { 2: F2.replace("um computador, duas cabeças e dois papéis", "1 computador, 2 cabeças e 2 papéis"), 5: F5.replace("dez minutos", "10 minutos"), 6: F6.replace("quatro passos", "4 passos"), 8: F8.replace("por exemplo, acho que esse bloco vai dentro do repita", "por exemplo: “acho que esse bloco vai dentro do repita”") };
const PROG7 = ["🔁 repita 3 vezes", "mover 10 passos", "girar 90°", "mostrar “Oi!”"];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "zum"], [.6, "whoosh"], [1.2, "pop"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 600, 380, 1.5], [1.6, 640, 330, 1]]); estrada(t, 500); carro(640, 470, 1.3, t); papel(760, 300, .5, "MAPA"); g.restore();
     abertura(t, "7º ANO · MISSÃO 6", "Programar em dupla", "PILOTO E", "NAVEGADOR!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "mouse"), "alerta"], [em(F1, "apagava"), "sumiu"], [em(F1, "bagunça"), "zum"]],
   draw(t, D) { const mo = em(F1, "mouse"), ap = em(F1, "apagava"), ng = em(F1, "ninguém"), bg = em(F1, "bagunça"); const n = t > ap ? Math.max(0, 4 - Math.floor((t - ap) * 2)) : 4;
     g.save(); camera(t, [[0, 640, 360, 1], [mo, 640, 420, 1.15], [ng, 640, 340, 1]]); mesa7(t); monitor(640, 450, 1.4, telaProg(PROG7.slice(0, n)));
     const pux = t > mo ? Math.sin(t * 8) * 30 : 0; mouse(640 + pux, 482, .8);
     caio({ x: 430, y: 690, s: .95, olhar: 1, braco: t > mo ? -.6 : .3, bracoE: .3, boca: t > mo ? "o" : "", pisca: pisca(t) }); duda({ x: 850, y: 690, s: .95, olhar: -1, braco: t > mo ? -.6 : .3, bracoE: .3, boca: t > mo ? "o" : "", pisca: pisca(t + .5) }); g.restore();
     if (t > mo && t < ng) { balao("Deixa que eu faço!", 300, 230, 1); balao("Não, eu faço!", 980, 230, 1); }
     if (t > ng) palavra("QUE BAGUNÇA! 😵", 560, 90, seg(t, bg - .4, bg), 58); } },
 { chip: "PROGRAMAÇÃO EM DUPLA", fala: F2, legenda: L76[2], sfx: [[.1, "whoosh"], [em(F2, "dupla", 1), "ding"], [em(F2, "piloto"), "pop"], [em(F2, "navegador"), "pop"], [em(F2, "rali"), "zum"]],
   draw(t, D) { const pd = em(F2, "dupla", 1), co = em(F2, "computador"), pi = em(F2, "piloto"), nv = em(F2, "navegador"), ra = em(F2, "rali"); fundoEscuro(t, "#1e3a8a");
     if (t < ra) { palavra("PROGRAMAÇÃO EM DUPLA", 560, 90, seg(t, pd, pd + .4), 52); g.save(); camera(t, [[0, 640, 360, 1], [co, 640, 330, 1.05]]);
       if (t > co) [["💻", "1 computador"], ["🧠🧠", "2 cabeças"], ["🎭", "2 papéis"]].forEach(([e, s], i) => cartaoC(e + "  " + s, 260 + i * 380, 220, 320, "#fff", seg(t, co + i * .35, co + .4 + i * .35)));
       if (t > pi) cracha("🕹️ PILOTO", 450, 360, "#bfdbfe", seg(t, pi, pi + .4)); if (t > nv) cracha("🧭 NAVEGADOR", 830, 360, "#fbcfe8", seg(t, nv, nv + .4)); g.restore(); robozinho(1170, 600, .9, t, true); return; }
     g.save(); camera(t, [[ra, 640, 400, 1.2]]); estrada(t, 500); carro(640, 470, 1.4, t); g.restore(); etiqueta("piloto: dirige", 300, 140, 610, 330, seg(t, ra, ra + .4)); etiqueta("navegador: olha o mapa", 1000, 140, 700, 330, seg(t, ra + .3, ra + .7)); } },
 { chip: "O PILOTO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "mouse"), "tec"], [em(F3, "monta"), "pop"], [em(F3, "escuta"), "ding"]],
   draw(t, D) { const mo = em(F3, "mouse"), mt = em(F3, "monta"), es = em(F3, "escuta"); const n = Math.min(4, Math.max(0, Math.floor((t - mt) * 1.5) + 1));
     g.save(); camera(t, [[0, 640, 360, 1], [mo, 520, 400, 1.12], [es, 640, 360, 1]]); mesa7(t); monitor(640, 450, 1.4, telaProg(t > mt ? PROG7.slice(0, n) : [])); mouse(560, 482, .8);
     caio({ x: 430, y: 690, s: .95, olhar: 1, braco: -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 850, y: 690, s: .95, olhar: -1, braco: t > es ? -1.6 : .3, bracoE: .3, boca: t > es ? "riso" : "", pisca: pisca(t + .5) }); g.restore();
     palavra("🕹️ PILOTO", 520, 80, seg(t, 0, .4), 60); if (t > mo) cartaoC("controla o mouse e o teclado e monta os blocos", 640, 170, 640, "#bfdbfe", seg(t, mo, mo + .4));
     if (t > es) balao("Agora o bloco de girar!", 1000, 300, seg(t, es, es + .3)); } },
 { chip: "O NAVEGADOR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "enunciado"), "pop"], [em(F4, "erros"), "misterio"], [em(F4, "mapa"), "pop"], [em(F4, "regra"), "alerta"]],
   draw(t, D) { const en = em(F4, "enunciado"), er = em(F4, "erros"), ma = em(F4, "mapa"), rg = em(F4, "regra"); fundoEscuro(t, "#831843");
     g.save(); camera(t, [[0, 640, 360, 1], [en, 760, 380, 1.08], [rg, 640, 360, 1]]); duda({ x: 760, y: 680, s: 1.1, olhar: -1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); papel(640, 430, 1, "ENUNCIADO"); if (t > er) lupa(560, 300, 1.2); g.restore();
     palavra("🧭 NAVEGADOR", 520, 80, seg(t, 0, .4), 60);
     ["📄 lê o enunciado", "🤔 pensa no próximo passo", "✅ confere cada bloco", "🔎 procura erros"].forEach((s, i) => cartaoC(s, 270, 180 + i * 80, 400, "#fbcfe8", seg(t, en + i * .55, en + .4 + i * .55)));
     if (t > rg) { mouse(1050, 300, 1.3); xVermelho(1050, 300, 60, seg(t, rg, rg + .4)); rotulo("o navegador NÃO pega o mouse!", 1040, 420, "#fde68a", seg(t, rg + .3, rg + .7)); } } },
 { chip: "REVEZAR", fala: F5, legenda: L76[5], sfx: [[.1, "whoosh"], [em(F5, "dez"), "ding"], [em(F5, "troca"), "voa"], [em(F5, "revezar"), "pop"]],
   draw(t, D) { const dz = em(F5, "dez"), tr = em(F5, "troca"), rv = em(F5, "revezar"); fundoEscuro(t, "#14532d"); const k = seg(t, tr, tr + 1.2), sw = (1 - Math.cos(Math.PI * k)) / 2;
     g.save(); camera(t, [[0, 640, 360, 1], [tr, 640, 380, 1.06]]); relogio(640, 260, 110, seg(t, dz, dz + 2.5), seg(t, dz - .3, dz));
     const xa = 330 + 620 * sw, xb = 950 - 620 * sw; caio({ x: xa, y: 680, s: .95, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: xb, y: 680, s: .95, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .4) });
     cracha(k < .5 ? "🕹️ piloto" : "🧭 navegador", xa, 440, k < .5 ? "#bfdbfe" : "#fbcfe8", 1); cracha(k < .5 ? "🧭 navegador" : "🕹️ piloto", xb, 440, k < .5 ? "#fbcfe8" : "#bfdbfe", 1); g.restore();
     if (t > dz) rotulo("a cada 10 minutos", 640, 400, "#fde68a", seg(t, dz, dz + .4)); palavra("REVEZAR", 520, 80, seg(t, rv, rv + .4), 64); } },
 { chip: "PASSOS 1 E 2", fala: F6, legenda: L76[6], sfx: [[.1, "whoosh"], [em(F6, "planejar"), "ding"], [em(F6, "plano"), "pop"], [em(F6, "montar"), "ding"], [em(F6, "confere"), "pop"]],
   draw(t, D) { const pl = em(F6, "planejar"), pn = em(F6, "plano"), mt = em(F6, "montar"), cf = em(F6, "confere"); fundoEscuro(t, "#312e81");
     palavra("O JEITO DE TRABALHAR", 560, 80, seg(t, 0, .4), 50); cartaoC("1️⃣ PLANEJAR", 260, 180, 330, "#fde68a", seg(t, pl, pl + .4)); cartaoC("2️⃣ MONTAR", 260, 400, 330, "#fde68a", seg(t, mt, mt + .4));
     g.save(); camera(t, [[0, 640, 360, 1], [pn, 820, 300, 1.08], [mt, 760, 380, 1.04]]);
     if (t > pl && t < mt) { papel(560, 300, 1.1, "PROBLEMA"); ["parte 1: andar", "parte 2: girar", "parte 3: falar"].forEach((s, i) => bloco(760, 200 + i * 62, 300, s, "#0891b2", seg(t, pl + 1 + i * .3, pl + 1.4 + i * .3))); if (t > pn) etiqueta("isto é o PLANO", 1100, 470, 980, 340, seg(t, pn, pn + .4)); }
     if (t > mt) { bloco(560, 300, 300, "parte 1: andar", "#0891b2", 1); caio({ x: 760, y: 690, s: .8, olhar: 1, braco: -.6, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1000, y: 690, s: .8, olhar: -1, braco: t > cf ? -1.6 : .3, bracoE: .3, boca: "riso", pisca: pisca(t + .4) }); if (t > cf) visto(1000, 380, 30, seg(t, cf, cf + .4)); } g.restore(); } },
 { chip: "PASSOS 3 E 4", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "testar"), "tec"], [em(F7, "final"), "alerta"], [em(F7, "trocar"), "voa"]],
   draw(t, D) { const te = em(F7, "testar"), fi = em(F7, "final"), tr = em(F7, "trocar"), px = em(F7, "próxima"); fundoEscuro(t, "#312e81");
     palavra("O JEITO DE TRABALHAR", 560, 80, seg(t, 0, .4), 50); cartaoC("3️⃣ TESTAR", 260, 180, 330, "#fde68a", seg(t, te, te + .4)); cartaoC("4️⃣ TROCAR", 260, 400, 330, "#fde68a", seg(t, tr, tr + .4));
     g.save(); camera(t, [[0, 640, 360, 1], [te, 780, 330, 1.06], [px, 640, 360, 1]]);
     ["parte 1: andar", "parte 2: girar", "parte 3: falar"].forEach((s, i) => { bloco(600, 180 + i * 90, 300, s, "#0891b2", 1); const ok = t > te + .5 + i * .6 && (t < tr || i < 2); if (ok) visto(940, 208 + i * 90, 24, 1); if (t > te + .5 + i * .6) rotulo("▶ testou", 1040, 214 + i * 90, "#bbf7d0", 1); });
     if (t > fi && t < tr) etiqueta("teste a CADA parte, não só no final", 760, 500, 760, 420, seg(t, fi, fi + .4));
     if (t > tr) { g.strokeStyle = "#fde047"; g.lineWidth = 6; rr(586, 346, 330, 76, 12); g.stroke(); rotulo("🔄 trocou de papel → próxima parte", 760, 500, "#fde68a", seg(t, tr, tr + .4)); } g.restore(); } },
 { chip: "COMBINADOS DA DUPLA", fala: F8, legenda: L76[8], sfx: [[.1, "whoosh"], [em(F8, "respeito"), "ding"], [em(F8, "Ouvir"), "pop"], [em(F8, "erro"), "pop"]],
   draw(t, D) { const rs = em(F8, "respeito"), ou = em(F8, "Ouvir"), er = em(F8, "erro"); fundoEscuro(t, "#7c2d12");
     palavra("COMBINADOS DA DUPLA", 560, 80, seg(t, 0, .4), 52);
     g.save(); camera(t, [[0, 640, 360, 1.04], [er + 1, 640, 360, 1]]);
     if (t > rs) { cartaoC("❌ “Você é burro!”", 360, 200, 400, "#fecaca", seg(t, rs + .3, rs + .7)); cartaoC("✅ “Acho que esse bloco vai dentro do repita.”", 820, 200, 560, "#bbf7d0", seg(t, rs + .8, rs + 1.2)); }
     if (t > ou) cartaoC("👂 ouvir a ideia do outro antes de testar a sua", 640, 320, 640, "#fff", seg(t, ou, ou + .4));
     if (t > er) cartaoC("🤝 o erro é DA DUPLA, não de um só", 640, 430, 560, "#fde68a", seg(t, er, er + .4)); g.restore();
     caio({ x: 120, y: 690, s: .7, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); duda({ x: 1170, y: 690, s: .7, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t + .4) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "piloto"), "pop"], [em(F9, "trocaram"), "voa"], [em(F9, "pronto"), "ding"], [em(F9, "Missão"), "festa"]],
   draw(t, D) { const pi = em(F9, "piloto"), tc = em(F9, "trocaram"), pr = em(F9, "pronto"), mc = em(F9, "Missão"); const sw = t > tc;
     g.save(); camera(t, [[0, 640, 380, 1.08], [mc, 640, 400, 1]]); mesa7(t); monitor(640, 450, 1.4, telaProg(PROG7, t > pr ? "#16a34a" : "#7c3aed")); mouse(sw ? 720 : 560, 482, .8);
     caio({ x: 430, y: 690, s: .95, olhar: 1, braco: t > mc ? -2.6 : -.6, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); duda({ x: 850, y: 690, s: .95, olhar: -1, braco: t > mc ? -2.6 : -.6, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t + .5) }); g.restore();
     if (t > pi && t < mc) { cracha(sw ? "🧭 navegador" : "🕹️ piloto", 300, 300, sw ? "#fbcfe8" : "#bfdbfe", 1); cracha(sw ? "🕹️ piloto" : "🧭 navegadora", 980, 300, sw ? "#bfdbfe" : "#fbcfe8", 1); }
     if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "carro"), "pop"], [em(F10, "jogo"), "pop"], [em(F10, "empresas"), "pop"]],
   draw(t, D) { ondeUso(t, F10, [["carro", "🚗", "No carro:", "motorista e quem olha o mapa"], ["jogo", "🎮", "Jogo cooperativo:", "um ataca, o outro cuida"], ["empresas", "🏢", "Empresas de tecnologia:", "erram menos, ensinam novatos"]]); } },
 { chip: "", fala: F11, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 6", [CAIO, MENINA7]); } }
];

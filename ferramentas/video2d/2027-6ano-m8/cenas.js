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
/* ===== peças dos atalhos (6º M8 v2) ===== */
const LIA = { camisa: "#8b5cf6", cabelo: "longo" };
const lia = o => boneco(Object.assign({}, LIA, o));
const legA = f => f.replace(/Control mais (\w)/g, "Ctrl + $1").replace("Alt mais Tab", "Alt + Tab").replace("Windows mais E", "Windows + E");
function tecla(x, y, w, lab, dn, cor, h) { h = h || 86; const o = dn ? 7 : 0; g.fillStyle = "#64748b"; rr(x - w / 2, y - h / 2 + 8, w, h, 14); g.fill();
  g.fillStyle = dn ? "#fde047" : (cor || "#f8fafc"); rr(x - w / 2, y - h / 2 + o, w, h, 14); g.fill(); g.strokeStyle = "#334155"; g.lineWidth = 3; g.stroke();
  g.fillStyle = NAVY; g.font = `800 ${lab.length > 2 ? 30 : 40}px ${F}`; g.textAlign = "center"; g.fillText(lab, x, y + 13 + o); }
// combinação: segura a (de t0), aperta b (de t0+.45)
function combo(x, y, a, b, t0, t, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); const wa = a.length > 2 ? 150 : 96, wb = b.length > 2 ? 150 : 96;
  tecla(-wa / 2 - 34, 0, wa, a, t > t0 && t < t0 + 1.6, "#e0e7ff"); g.fillStyle = "#fff"; g.font = `900 46px ${F}`; g.textAlign = "center"; g.fillText("+", 0, 16); tecla(wb / 2 + 34, 0, wb, b, t > t0 + .45 && t < t0 + 1.2, "#fef9c3"); g.restore(); }
// janela de documento: linhas = [texto, ...]; sel = {i: linha, f: fração} ou "tudo"; apag = índice de linha sumida
function doc(x, y, w, h, tit, linhas, sel, o) { o = o || {}; g.save(); g.translate(x, y); g.fillStyle = "#fff"; rr(-w / 2, -h / 2, w, h, 12); g.fill(); g.strokeStyle = "#94a3b8"; g.lineWidth = 2; g.stroke();
  g.fillStyle = o.cor || "#2563eb"; rr(-w / 2, -h / 2, w, 38, 12); g.fill(); g.fillRect(-w / 2, -h / 2 + 20, w, 18); g.fillStyle = "#fff"; g.font = `800 17px ${F}`; g.textAlign = "left"; g.fillText(tit, -w / 2 + 14, -h / 2 + 26);
  const fs = o.fs || 18; g.font = `600 ${fs}px ${F}`; linhas.forEach((l, i) => { if (!l) return; const ly = -h / 2 + 62 + i * (fs * 1.75), lw = g.measureText(l).width;
    let f = 0; if (sel === "tudo") f = 1; else if (sel && (sel.i === i || (Array.isArray(sel.i) && sel.i.includes(i)))) f = sel.f;
    g.globalAlpha = o.alfa && o.alfa[i] != null ? o.alfa[i] : 1; g.fillStyle = NAVY; g.fillText(l, -w / 2 + 20, ly); g.globalAlpha = 1;
    if (f > 0) { g.fillStyle = "rgba(59,130,246,.38)"; g.fillRect(-w / 2 + 18, ly - fs, lw * Math.min(1, f) + 4, fs * 1.35); } });
  g.restore(); }
// área de transferência: um "bolso mágico" escondido
function bolso(x, y, k, item, t) { if (k <= 0) return; g.save(); g.globalAlpha = Math.min(1, k * 1.6); g.translate(x, y); g.setLineDash([10, 8]); g.strokeStyle = "#fde68a"; g.lineWidth = 4; g.fillStyle = "rgba(15,23,42,.55)"; rr(-170, -55, 340, 110, 26); g.fill(); g.stroke(); g.setLineDash([]);
  g.fillStyle = "#fde68a"; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText("📋 área de transferência", 0, -24);
  if (item) { g.fillStyle = "#93c5fd"; rr(-150, -6, 300, 40, 10); g.fill(); g.fillStyle = NAVY; g.font = `700 16px ${F}`; g.fillText(item, 0, 20); } g.restore(); }
function voando(txt, x0, y0, x1, y1, k) { if (k <= 0 || k >= 1) return; const e = k * k * (3 - 2 * k), x = x0 + (x1 - x0) * e, y = y0 + (y1 - y0) * e - Math.sin(e * Math.PI) * 80; g.fillStyle = "#93c5fd"; rr(x - 140, y - 18, 280, 36, 10); g.fill(); g.fillStyle = NAVY; g.font = `700 15px ${F}`; g.textAlign = "center"; g.fillText(txt, x, y + 6); }
function capa(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#ef4444"; g.beginPath(); g.moveTo(-40, -30); g.quadraticCurveTo(-90 - Math.sin(t * 6) * 14, 40, -150, 30 + Math.sin(t * 6) * 18); g.lineTo(-60, 40); g.lineTo(40, -30); g.closePath(); g.fill(); g.restore(); }
function mesaLia(t) { g.fillStyle = "#ede9fe"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#c4b5fd"; g.fillRect(-800, 560, 2880, 700); g.fillStyle = "#b07a3c"; g.fillRect(140, 470, 1000, 26); g.fillStyle = "#8a5a28"; g.fillRect(170, 496, 22, 200); g.fillRect(1090, 496, 22, 200);
  g.fillStyle = "#fff"; rr(1150, 230, 150, 110, 10); g.fill(); emo("📚", 1225, 308, 60); }
const PAG1 = ["O lobo-guará vive no Cerrado.", "Ele come frutas, como a lobeira.", "É o maior canídeo da América do Sul."];
function cursorM(x, y, k) { if (k <= 0) return; cursor(x, y, false); }
const emE = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "") === w.toLowerCase() && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
const F0 = "Atalhos: os superpoderes do teclado!",
  F1 = "A Lia precisa juntar no trabalho o texto de duas páginas. E ela está digitando tudo de novo, letra por letra! Para piorar, apagou um parágrafo sem querer e quase chorou. Será que não existe um jeito mais rápido?",
  F2 = "Existe, e se chama atalho! Na rua, atalho é o caminho mais curto. No computador, atalho é uma combinação de teclas que faz uma ação rápida. O jeito certo é assim: segure a primeira tecla, o Control, e, sem soltar, aperte a segunda.",
  F3 = "Mas, antes de copiar, é preciso selecionar. Selecionar é marcar o texto, o arquivo ou a imagem. Arraste o mouse por cima, e o texto fica pintado de azul.",
  F4 = "Com o texto selecionado, Control mais C copia. O computador guarda uma cópia num lugar escondido, a área de transferência. E o original continua no lugar.",
  F5 = "Agora, clique onde quer o texto e aperte Control mais V para colar. Pronto: a cópia aparece, sem digitar nenhuma letra!",
  F6 = "E Control mais X recorta: tira o texto do lugar para colar em outro. A diferença é esta: copiar deixa o original; recortar leva embora.",
  F7 = "Apagou sem querer? Control mais Z serve para desfazer o último passo. É o famoso ops, volta! E, se apertar de novo, volta mais um passo.",
  F8 = "Mais dois superpoderes: Control mais S salva o trabalho, e Control mais A seleciona tudo de uma vez.",
  F9 = "Alt mais Tab troca de uma janela para outra. E a tecla Windows mais E abre o Explorador de Arquivos, onde ficam as suas pastas.",
  F10 = "O mouse também tem atalhos: duplo clique seleciona uma palavra, clique triplo seleciona o parágrafo inteiro, e Control com a rodinha do mouse aumenta ou diminui o zoom.",
  F11 = "A Lia selecionou o texto, copiou com Control mais C e colou com Control mais V. E o parágrafo apagado? Control mais Z, e ele voltou! Trabalho pronto rapidinho. Missão cumprida!",
  F12 = "Onde eu uso isso? No celular, tocando e segurando o texto, aparecem os botões copiar e colar. Para copiar o código do PIX sem errar nenhum número. E no trabalho da escola, quando algo some sem querer: Control mais Z!",
  F13 = "Agora é com vocês: abram a Missão 8 no portal e usem os superpoderes do teclado!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "voa"], [1.2, "tec"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.6, 640, 320, 1]]); fundoEscuro(t, "#1e1b4b"); for (let i = 0; i < 40; i++) { g.fillStyle = "rgba(255,255,255,.7)"; g.fillRect((i * 173) % 1280, (i * 97) % 420, 3, 3); }
     const fx = 160 + ((t * 260) % 960), fy = 220 + Math.sin(t * 3) * 30; capa(fx, fy, 1, t); tecla(fx, fy, 150, "Ctrl", false, "#e0e7ff");
     tecla(420, 300, 96, "C", Math.floor(t * 2) % 2 === 0, "#fef9c3"); tecla(640, 300, 96, "V", Math.floor(t * 2 + 1) % 2 === 0, "#fef9c3"); tecla(860, 300, 96, "Z", t % 1.5 < .4, "#fef9c3"); g.restore();
     abertura(t, "6º ANO · MISSÃO 8", "Atalhos do teclado e do mouse", "OS SUPERPODERES", "DO TECLADO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, legenda: legA(F1), sfx: [[.1, "whoosh"], [em(F1, "letra"), "tec"], [em(F1, "letra", 1), "tec"], [em(F1, "apagou"), "sumiu"], [em(F1, "chorou"), "alerta"], [em(F1, "Será"), "misterio"]],
   draw(t, D) { const dg = em(F1, "digitando"), ap = em(F1, "apagou"), ch = em(F1, "chorou"), se = em(F1, "Será"); const n = Math.min(30, Math.max(0, Math.floor((t - dg) * 4)));
     g.save(); camera(t, [[0, 640, 360, 1], [dg, 700, 300, 1.1], [ap, 600, 300, 1.1], [se, 640, 360, 1]]); mesaLia(t);
     doc(360, 290, 400, 220, "📄 Página 1", PAG1, null, { fs: 16 }); doc(800, 290, 400, 220, "📄 Trabalho da Lia", [PAG1[0].slice(0, n), t > ap ? "" : "", ""], null, { fs: 16, cor: "#7c3aed" });
     lia({ x: 1050, y: 690, s: .95, olhar: -1, braco: -1, bracoE: .3, boca: t > ap ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > dg && t < ap) etiqueta("digitando tudo de novo… 🐢", 800, 470, 800, 360, seg(t, dg, dg + .4));
     if (t > ap) { emo("😱", 1050, 470, 54); palavra("SUMIU UM PARÁGRAFO!", 560, 100, seg(t, ap, ap + .4), 52); }
     if (t > se) balao("Não tem um jeito mais rápido? 🤔", 880, 520, seg(t, se, se + .3)); } },
 { chip: "ATALHO", fala: F2, legenda: legA(F2), sfx: [[.1, "whoosh"], [em(F2, "rua"), "pop"], [em(F2, "combinação"), "ding"], [em(F2, "segure"), "tec"], [em(F2, "aperte"), "tec"]],
   draw(t, D) { const at = em(F2, "atalho"), ru = em(F2, "rua"), co = em(F2, "combinação"), sg = em(F2, "segure"), apt = em(F2, "aperte");
     if (t < co) { g.save(); camera(t, [[0, 640, 360, 1], [ru, 640, 380, 1.1]]); g.fillStyle = "#bbf7d0"; g.fillRect(-600, -400, 2480, 1600);
       g.strokeStyle = "#94a3b8"; g.lineWidth = 34; g.lineCap = "round"; g.beginPath(); g.moveTo(200, 480); g.bezierCurveTo(200, 80, 1100, 80, 1080, 480); g.stroke();
       g.strokeStyle = "#f59e0b"; g.lineWidth = 34; g.beginPath(); g.moveTo(200, 480); g.lineTo(1080, 480); g.stroke(); emo("🏠", 200, 470, 60); emo("🏫", 1080, 470, 60);
       const k = seg(t, ru + .3, ru + 2.3); lia({ x: 200 + 880 * k, y: 560, s: .6, olhar: 1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); g.restore();
       palavra("ATALHO", 640, 110, seg(t, at, at + .4), 76); if (t > ru) rotulo("o caminho mais curto ⚡", 640, 200, NAVY, seg(t, ru, ru + .4)); return; }
     fundoEscuro(t, "#1e3a8a"); cartaoC("ATALHO = combinação de teclas que faz uma ação rápida", 640, 110, 900, "#fff", seg(t, co, co + .4));
     g.save(); camera(t, [[co, 640, 340, 1], [sg, 640, 320, 1.15]]); combo(640, 320, "Ctrl", "?", sg, t, seg(t, co + .5, co + .9)); g.restore();
     if (t > sg) etiqueta("1º SEGURE (sem soltar)", 330, 470, 520, 350, seg(t, sg, sg + .4)); if (t > apt) etiqueta("2º APERTE a segunda", 960, 470, 760, 350, seg(t, apt, apt + .4)); robozinho(1170, 600, .9, t, true); } },
 { chip: "SELECIONAR", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Selecionar", 1), "ding"], [em(F3, "Arraste"), "tec"], [em(F3, "azul"), "pop"]],
   draw(t, D) { const s1 = em(F3, "Selecionar", 1), ar = em(F3, "Arraste"), az = em(F3, "azul"); const f = seg(t, ar, az + .3); fundoEscuro(t, "#0f766e");
     g.save(); camera(t, [[0, 640, 360, 1], [ar, 560, 330, 1.25], [az + 1, 640, 360, 1.05]]); doc(560, 320, 640, 230, "📄 Página 1", PAG1, f > 0 ? { i: 0, f } : null);
     if (f > 0) { g.fillStyle = NAVY; g.font = `600 18px ${F}`; const lw = g.measureText(PAG1[0]).width; cursor(262 + lw * f, 262, f < 1); } g.restore();
     palavra("SELECIONAR", 520, 100, seg(t, 0, .4), 66); if (t > s1) cartaoC("= marcar texto, arquivo ou imagem", 560, 470, 560, "#fff", seg(t, s1, s1 + .4));
     if (t > az) etiqueta("fica pintado de AZUL", 1050, 200, 760, 250, seg(t, az, az + .4)); lia({ x: 1120, y: 680, s: .8, olhar: -1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CTRL + C · COPIAR", fala: F4, legenda: legA(F4), sfx: [[.1, "whoosh"], [emE(F4, "C"), "tec"], [em(F4, "cópia"), "voa"], [em(F4, "transferência"), "ding"], [em(F4, "original"), "pop"]],
   draw(t, D) { const c = emE(F4, "C"), cp = em(F4, "cópia"), tr = em(F4, "transferência"), og = em(F4, "original"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [cp, 640, 380, 1.08]]); doc(380, 230, 520, 190, "📄 Página 1", PAG1, { i: 0, f: 1 }, { fs: 16 });
     combo(960, 170, "Ctrl", "C", c, t, seg(t, c - .4, c)); voando(PAG1[0], 330, 180, 900, 400, seg(t, cp, cp + 1.2)); bolso(900, 430, seg(t, cp, cp + .4), t > cp + 1.2 ? PAG1[0] : null, t); g.restore();
     if (t > tr) etiqueta("lugar escondido que guarda o que você copiou", 540, 520, 760, 440, seg(t, tr, tr + .4));
     if (t > og) etiqueta("✅ o original fica no lugar", 330, 400, 260, 200, seg(t, og, og + .4)); } },
 { chip: "CTRL + V · COLAR", fala: F5, legenda: legA(F5), sfx: [[.1, "whoosh"], [em(F5, "clique"), "tec"], [emE(F5, "V"), "tec"], [em(F5, "Pronto"), "ding"]],
   draw(t, D) { const cq = em(F5, "clique"), v = emE(F5, "V"), pr = em(F5, "Pronto"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [v, 600, 340, 1.1], [pr, 640, 360, 1]]); bolso(330, 160, 1, PAG1[0], t); combo(940, 140, "Ctrl", "V", v, t, seg(t, v - .4, v));
     doc(640, 380, 640, 190, "📄 Trabalho da Lia", [t > v + 1.1 ? PAG1[0] : "", "", ""], t > v + 1.1 && t < pr + .3 ? { i: 0, f: 1 } : null, { cor: "#7c3aed" });
     if (t > cq && t < v) cursor(350, 350, true); voando(PAG1[0], 330, 180, 520, 350, seg(t, v + .2, v + 1.1)); g.restore();
     if (t > pr) palavra("SEM DIGITAR NENHUMA LETRA! ✨", 640, 540, seg(t, pr, pr + .4), 44); lia({ x: 1140, y: 680, s: .75, olhar: -1, braco: t > pr ? -2.6 : .3, bracoE: t > pr ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "CTRL + X · RECORTAR", fala: F6, legenda: legA(F6), sfx: [[.1, "whoosh"], [emE(F6, "X"), "tec"], [em(F6, "tira"), "voa"], [em(F6, "copiar"), "pop"], [em(F6, "recortar"), "pop"]],
   draw(t, D) { const x = emE(F6, "X"), ti = em(F6, "tira"), cp = em(F6, "copiar"), rc = em(F6, "recortar", 1); fundoEscuro(t, "#7c2d12");
     if (t < cp) { g.save(); camera(t, [[0, 640, 360, 1], [ti, 560, 320, 1.1]]); combo(960, 150, "Ctrl", "X", x, t, seg(t, x - .4, x)); const k = seg(t, ti, ti + 1);
       doc(420, 260, 520, 190, "📄 Página 1", PAG1, { i: 2, f: 1 }, { fs: 16, alfa: { 2: 1 - k } }); voando(PAG1[2], 400, 290, 900, 430, k); bolso(900, 430, seg(t, ti, ti + .3), k >= 1 ? PAG1[2] : null, t); g.restore();
       if (t > ti) palavra("✂️ RECORTAR", 420, 470, seg(t, ti, ti + .4), 54); return; }
     palavra("A DIFERENÇA", 640, 100, seg(t, cp, cp + .4), 58); g.save(); camera(t, [[cp, 640, 360, 1.06], [rc, 640, 360, 1]]);
     doc(360, 320, 420, 150, "📋 Copiar (Ctrl + C)", ["Original ✅", "Cópia ✅"], null, { cor: "#2563eb" }); if (t > rc) doc(920, 320, 420, 150, "✂️ Recortar (Ctrl + X)", ["Original ❌ (saiu)", "Vai para outro lugar ✅"], null, { cor: "#ea580c" }); g.restore();
     rotulo("deixa o original", 360, 450, "#bfdbfe", seg(t, cp, cp + .4)); if (t > rc) rotulo("leva embora", 920, 450, "#fed7aa", seg(t, rc, rc + .4)); } },
 { chip: "CTRL + Z · DESFAZER", fala: F7, legenda: legA(F7), sfx: [[.1, "sumiu"], [emE(F7, "Z"), "tec"], [em(F7, "ops"), "desce"], [em(F7, "novo"), "tec"]],
   draw(t, D) { const z = emE(F7, "Z"), op = em(F7, "ops"), nv = em(F7, "novo"); fundoEscuro(t, "#14532d"); const volta = seg(t, z + .3, z + 1);
     g.save(); camera(t, [[0, 640, 360, 1], [z, 520, 330, 1.12], [nv, 640, 360, 1]]); doc(500, 320, 620, 220, "📄 Trabalho da Lia", PAG1, null, { alfa: { 1: volta, 2: t > nv + .4 ? 1 : volta * .0 + (t > nv + .4 ? 1 : 0) } });
     combo(1040, 200, "Ctrl", "Z", z, t, seg(t, z - .4, z)); if (t > nv) tecla(1100, 330, 96, "Z", t > nv && t < nv + .5, "#fef9c3");
     if (t > z && t < z + 1.4) { g.strokeStyle = "#fde047"; g.lineWidth = 8; g.beginPath(); g.arc(500, 320, 150, -2.6, -2.6 + 5 * seg(t, z, z + 1)); g.stroke(); } g.restore();
     if (t > op) palavra("“OPS, VOLTA!” ↩️", 520, 100, seg(t, op, op + .4), 60); if (t > nv) etiqueta("de novo = volta mais um passo", 1000, 470, 760, 380, seg(t, nv, nv + .4));
     lia({ x: 1150, y: 680, s: .75, olhar: -1, braco: t > op ? -2.6 : .3, bracoE: .3, boca: t > op ? "riso" : "o", pisca: pisca(t) }); } },
 { chip: "CTRL + S E CTRL + A", fala: F8, legenda: legA(F8), sfx: [[.1, "whoosh"], [emE(F8, "S"), "tec"], [em(F8, "salva"), "ding"], [emE(F8, "A"), "tec"], [em(F8, "tudo"), "pop"]],
   draw(t, D) { const s = emE(F8, "S"), sv = em(F8, "salva"), a = emE(F8, "A"), td = em(F8, "tudo"); fundoEscuro(t, "#312e81");
     palavra("MAIS DOIS SUPERPODERES", 560, 100, seg(t, 0, .4), 46);
     g.save(); camera(t, [[0, 640, 360, 1], [s, 380, 330, 1.12], [a, 900, 330, 1.12], [td + .8, 640, 360, 1]]);
     combo(380, 220, "Ctrl", "S", s, t, seg(t, s - .4, s)); if (t > sv) { cartaoC("💾 SALVA o trabalho", 380, 360, 360, "#bbf7d0", seg(t, sv, sv + .4)); }
     combo(900, 220, "Ctrl", "A", a, t, seg(t, a - .4, a)); if (t > a) doc(900, 400, 380, 150, "📄 Trabalho", PAG1, t > td ? "tudo" : null, { fs: 14, cor: "#7c3aed" }); g.restore();
     if (t > td) rotulo("seleciona TUDO de uma vez", 900, 520, "#bfdbfe", seg(t, td, td + .4)); } },
 { chip: "ALT + TAB E WINDOWS + E", fala: F9, legenda: legA(F9), sfx: [[.1, "whoosh"], [em(F9, "Tab"), "tec"], [em(F9, "janela"), "pop"], [em(F9, "Windows"), "tec"], [em(F9, "Explorador"), "ding"]],
   draw(t, D) { const tb = em(F9, "Tab"), wi = em(F9, "Windows"), ex = em(F9, "Explorador"), pa = em(F9, "pastas"); fundoEscuro(t, "#0c4a6e");
     if (t < wi) { combo(640, 120, "Alt", "Tab", tb, t, seg(t, tb - .4, tb)); const ws = [["📄 Trabalho", "#7c3aed"], ["🌐 Navegador", "#2563eb"], ["🎨 Paint", "#16a34a"]], at = Math.floor(Math.max(0, t - tb) * 1.6) % 3;
       g.save(); camera(t, [[0, 640, 360, 1], [tb, 640, 380, 1.1]]); ws.forEach(([n, c], i) => { const on = i === at; g.save(); g.globalAlpha = on ? 1 : .55; doc(300 + i * 340, 380, 300, 170, n, ["", "", ""], null, { cor: c }); g.restore(); if (on) { g.strokeStyle = "#fde047"; g.lineWidth = 6; rr(300 + i * 340 - 156, 290, 312, 182, 14); g.stroke(); } }); g.restore();
       rotulo("troca de uma janela para outra", 640, 520, "#fde68a", seg(t, tb + .4, tb + .8)); return; }
     combo(640, 120, "⊞ Win", "E", wi, t, seg(t, wi - .4, wi)); g.save(); camera(t, [[wi, 640, 360, 1], [ex, 640, 380, 1.1]]); const k = seg(t, ex, ex + .5);
     if (k > 0) { g.save(); g.globalAlpha = k; doc(640, 370, 640, 240, "📁 Explorador de Arquivos", [], null, { cor: "#ca8a04" }); ["Documentos", "Imagens", "Downloads", "Música"].forEach((n, i) => { emo("📁", 420 + i * 150, 390, 60); rotulo(n, 420 + i * 150, 440, NAVY, 1); }); g.restore(); } g.restore();
     if (t > pa) etiqueta("aqui ficam as suas pastas", 1080, 520, 920, 400, seg(t, pa, pa + .4)); } },
 { chip: "ATALHOS DO MOUSE", fala: F10, legenda: legA(F10), sfx: [[.1, "whoosh"], [em(F10, "duplo"), "tec"], [em(F10, "triplo"), "tec"], [em(F10, "rodinha"), "zum"]],
   draw(t, D) { const du = em(F10, "duplo"), tri = em(F10, "triplo"), ro = em(F10, "rodinha"); fundoEscuro(t, "#1e3a8a");
     const z = t > ro ? 1 + .35 * Math.abs(Math.sin((t - ro) * 1.6)) : 1; const sel = t > tri ? { i: [0, 1, 2], f: 1 } : t > du ? { i: 0, f: .2 } : null;
     g.save(); camera(t, [[0, 640, 360, 1], [du, 520, 300, 1.15], [ro, 640, 340, 1]]); g.save(); g.translate(520, 320); g.scale(z, z); doc(0, 0, 600, 220, "📄 Trabalho da Lia", PAG1, sel); g.restore();
     mouse(1060, 330, 1.4); g.restore();
     if (t > du) rotulo("duplo clique = uma PALAVRA", 980, 150, "#fde68a", seg(t, du, du + .4)); if (t > tri) rotulo("clique triplo = o PARÁGRAFO", 980, 190, "#fde68a", seg(t, tri, tri + .4));
     if (t > ro) cartaoC("Ctrl + rodinha = ZOOM 🔍", 980, 500, 400, "#fff", seg(t, ro, ro + .4)); } },
 { chip: "MISSÃO CUMPRIDA", fala: F11, legenda: legA(F11), sfx: [[.1, "whoosh"], [emE(F11, "C"), "tec"], [emE(F11, "V"), "tec"], [emE(F11, "Z"), "tec"], [em(F11, "Missão"), "festa"]],
   draw(t, D) { const c = emE(F11, "C"), v = emE(F11, "V"), z = emE(F11, "Z"), mc = em(F11, "Missão");
     g.save(); camera(t, [[0, 640, 330, 1.12], [mc, 640, 380, 1]]); mesaLia(t);
     doc(360, 360, 400, 220, "📄 Página 1", PAG1, t > c && t < v ? { i: [0, 1, 2], f: 1 } : null, { fs: 16 }); doc(800, 360, 400, 220, "📄 Trabalho da Lia", t > v + .3 ? PAG1 : ["", "", ""], null, { fs: 16, cor: "#7c3aed", alfa: { 2: t > z + .3 ? 1 : 0 } });
     voando("📋 o texto inteiro", 360, 360, 800, 360, seg(t, v - .2, v + .6));
     lia({ x: 1050, y: 690, s: .95, olhar: -1, braco: t > mc ? -2.6 : -1, bracoE: t > mc ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > c && t < mc) combo(640, 520, "Ctrl", t > z ? "Z" : t > v ? "V" : "C", t > z ? z : t > v ? v : c, t, 1); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, legenda: legA(F12), sfx: [[.1, "whoosh"], [em(F12, "celular"), "pop"], [em(F12, "PIX"), "pop"], [em(F12, "escola"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["celular", "📱", "No celular:", "tocar e segurar → copiar"], ["PIX", "💸", "Código do PIX:", "copiar e colar sem errar"], ["escola", "📝", "Trabalho da escola:", "sumiu? Ctrl + Z!"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 8", [LIA, { camisa: "#16a34a" }]); } }
];

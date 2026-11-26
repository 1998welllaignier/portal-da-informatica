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
/* ===== peças da digitação (6º M7 v2) ===== */
const THI = { camisa: "#16a34a" };
const thiago = o => boneco(Object.assign({}, THI, o));
function teclas(u) { const L = [], add = (k, lab, c, r, w) => L.push({ k, lab, x: c * u, y: r * u * 1.08, w: w * u }); let c;
  add("TAB", "Tab", 0, 0, 1.5); c = 1.5; "QWERTYUIOP".split("").concat(["´", "["]).forEach(k => { add(k, k, c, 0, 1); c++; });
  add("CAPS", "Caps Lock", 0, 1, 1.8); c = 1.8; "ASDFGHJKL".split("").concat(["Ç", "~", "]"]).forEach(k => { add(k, k, c, 1, 1); c++; });
  add("SHIFT", "Shift", 0, 2, 2.3); c = 2.3; "ZXCVBNM".split("").concat([",", ".", ";"]).forEach(k => { add(k, k, c, 2, 1); c++; }); add("SHIFT2", "Shift", c, 2, 13.8 - c);
  add("ESP", "", 3.6, 3, 6.4); return L; }
// teclado ABNT2 simplificado: o = {hl:{tecla:cor}, press:[teclas], risco:true, luz:true(caps)}
function kb(x, y, u, o) { o = o || {}; const L = teclas(u), Wt = 13.8 * u, gp = u * .06; g.save(); g.translate(x - Wt / 2, y);
  g.fillStyle = "#334155"; rr(-u * .3, -u * .3, Wt + u * .6, 4 * u * 1.08 + u * .45, 16); g.fill();
  L.forEach(q => { const dn = (o.press || []).includes(q.k), cor = (o.hl && o.hl[q.k]) || "#f8fafc";
    if (!dn) { g.fillStyle = "#94a3b8"; rr(q.x + gp, q.y + gp + 5, q.w - 2 * gp, u - 2 * gp, 8); g.fill(); }
    g.fillStyle = dn ? "#fde047" : cor; rr(q.x + gp, q.y + gp + (dn ? 5 : 0), q.w - 2 * gp, u - 2 * gp, 8); g.fill();
    if (q.lab && u >= 24) { g.fillStyle = NAVY; g.font = `800 ${q.lab.length > 1 ? Math.round(u * .24) : Math.round(u * .42)}px ${F}`; g.textAlign = "center"; g.fillText(q.lab, q.x + q.w / 2, q.y + u * .6 + (dn ? 5 : 0)); }
    if (o.risco && (q.k === "F" || q.k === "J")) { g.fillStyle = "#475569"; rr(q.x + q.w / 2 - u * .14, q.y + u * .74, u * .28, u * .07, 3); g.fill(); }
    if (q.k === "CAPS") { g.fillStyle = o.luz ? "#22c55e" : "#64748b"; g.beginPath(); g.arc(q.x + u * .25, q.y + u * .25, u * .07, 0, 7); g.fill(); } });
  g.restore(); }
function kp(x, y, u, k) { const q = teclas(u).find(z => z.k === k); return [x - 13.8 * u / 2 + q.x + q.w / 2, y + q.y + u / 2]; }
// mãos na fileira base; k = entrada (0..1)
function maos(x, y, u, k, cores) { if (k <= 0) return; g.save(); g.globalAlpha = Math.min(1, k * 1.5); const dy = (1 - k) * 120;
  [[["A", "S", "D", "F"], -1], [["J", "K", "L", "Ç"], 1]].forEach(([ks, ld]) => { const pts = ks.map(q => kp(x, y, u, q)), px = (pts[0][0] + pts[3][0]) / 2 + ld * u * .2, py = y + u * 5.1 + dy;
    const ded = pts.map(([a, b]) => [a, b + u * .25 + dy]); ded.push([x + ld * u * 1.3, y + u * 3.7 + dy]);
    ded.forEach(([a, b], i) => { g.strokeStyle = "#c08a5c"; g.lineCap = "round"; g.lineWidth = u * .46; g.beginPath(); g.moveTo(px, py); g.lineTo(a, b); g.stroke();
      g.strokeStyle = "#f1c7a0"; g.lineWidth = u * .36; g.beginPath(); g.moveTo(px, py); g.lineTo(a, b); g.stroke();
      if (cores && i < 4) { g.fillStyle = cores[ld < 0 ? i : 3 - i]; g.beginPath(); g.arc(a, b, u * .13, 0, 7); g.fill(); } });
    g.fillStyle = "#f1c7a0"; g.beginPath(); g.ellipse(px, py + u * .3, u * 1.3, u * .9, 0, 0, 7); g.fill(); });
  g.restore(); }
const CORES_DEDO = ["#a855f7", "#3b82f6", "#22c55e", "#f97316"]; // mindinho, anelar, médio, indicador
function galinha(x, y, s, t, bica) { g.save(); g.translate(x, y); g.scale(s, s); g.rotate(bica ? Math.max(0, Math.sin(t * 10)) * .6 : 0);
  g.fillStyle = "#fff"; g.strokeStyle = NAVY; g.lineWidth = 4; g.beginPath(); g.ellipse(-20, 0, 52, 40, 0, 0, 7); g.fill(); g.stroke();
  g.beginPath(); g.arc(28, -30, 26, 0, 7); g.fill(); g.stroke(); g.fillStyle = "#ef4444"; g.beginPath(); g.arc(22, -58, 9, 0, 7); g.arc(34, -56, 8, 0, 7); g.fill();
  g.fillStyle = "#f59e0b"; g.beginPath(); g.moveTo(50, -34); g.lineTo(72, -26); g.lineTo(50, -20); g.fill(); g.fillStyle = NAVY; g.beginPath(); g.arc(36, -34, 4, 0, 7); g.fill();
  g.strokeStyle = "#f59e0b"; g.lineWidth = 5; g.beginPath(); g.moveTo(-30, 38); g.lineTo(-30, 62); g.moveTo(-6, 38); g.lineTo(-6, 62); g.stroke(); g.restore(); }
function milho(x, y, r) { g.fillStyle = "#facc15"; g.strokeStyle = "#ca8a04"; g.lineWidth = 2; g.beginPath(); g.ellipse(x, y, r, r * 1.25, 0, 0, 7); g.fill(); g.stroke(); }
function quarto7(t) { g.fillStyle = "#dbeafe"; g.fillRect(-800, -600, 2880, 1300); g.fillStyle = "#93c5fd"; g.fillRect(-800, 560, 2880, 700);
  g.fillStyle = "#fff"; rr(80, 70, 230, 150, 10); g.fill(); g.fillStyle = "#16a34a"; rr(96, 86, 198, 118, 6); g.fill(); emo("⚽", 195, 166, 64);
  g.fillStyle = "#b07a3c"; g.fillRect(300, 470, 680, 26); g.fillStyle = "#8a5a28"; g.fillRect(320, 496, 22, 200); g.fillRect(938, 496, 22, 200); }
// tela da inscrição: nome digitado até n letras
function telaInsc(txt, n, ok) { return (x, y, w, h) => { g.fillStyle = "#16a34a"; g.fillRect(x, y, w, 30); g.fillStyle = "#fff"; g.font = `800 14px ${F}`; g.textAlign = "left"; g.fillText("⚽ Inscrição · Campeonato", x + 10, y + 20);
  g.fillStyle = NAVY; g.font = `700 13px ${F}`; g.fillText("Nome completo:", x + 14, y + 56); g.fillStyle = "#fff"; g.strokeStyle = ok ? "#16a34a" : "#94a3b8"; g.lineWidth = 2; rr(x + 14, y + 64, w - 28, 34, 6); g.fill(); g.stroke();
  g.fillStyle = NAVY; g.font = `700 18px ${F}`; const s = txt.slice(0, n); g.fillText(s, x + 22, y + 88); if ((Date.now ? 1 : 1) && Math.floor(n * 3) % 2 === 0) { g.fillRect(x + 24 + g.measureText(s).width, y + 70, 2, 22); }
  g.fillStyle = ok ? "#16a34a" : "#cbd5e1"; rr(x + w / 2 - 50, y + 114, 100, 30, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 14px ${F}`; g.textAlign = "center"; g.fillText(ok ? "Enviado ✔" : "Enviar", x + w / 2, y + 134); }; }
// telinha que mostra o que foi digitado
function visor(x, y, w, txt, k, cor) { if (k <= 0) return; g.save(); g.globalAlpha = Math.min(1, k * 2); g.fillStyle = "#fff"; rr(x - w / 2, y - 40, w, 80, 16); g.fill(); g.strokeStyle = cor || AZUL; g.lineWidth = 5; g.stroke();
  g.fillStyle = NAVY; g.font = `800 48px ${F}`; g.textAlign = "center"; g.fillText(txt, x, y + 17); g.restore(); }
function passo(n, txt, x, y, k, cor) { if (k <= 0) return; cartaoC(n + "  " + txt, x, y, 300, cor || "#fff", k); }
const F0 = "Digitação sem medo: chega de catar milho!",
  F1 = "O Thiago precisa preencher a inscrição do campeonato de futebol até o fim da aula. Mas ele digita com um dedo só, procurando cada tecla. Olha o teclado, olha a tela, olha o teclado de novo... E o nome dele saiu assim: thiago araujo, sem letra maiúscula e sem acento. Que demora!",
  F2 = "Esse jeito tem até apelido: catar milho, igual a uma galinha bicando o chão. Mas o robozinho Bit avisou: existe um jeito bem melhor, e qualquer um aprende treinando um pouquinho.",
  F3 = "Digitação é escrever no computador usando o teclado. E o segredo começa na fileira base, a fileira do meio do teclado. Os dedos da mão esquerda ficam no A, S, D e F. Os da mão direita ficam no J, K, L e cê-cedilha.",
  F4 = "E os polegares? Descansam na barra de espaço. Cada dedo sai da fileira base, aperta a tecla vizinha e volta para casa.",
  F5 = "Mas como achar a fileira base sem olhar? Repare: as teclas F e J têm um risquinho em alto-relevo. Os dedos indicadores sentem o risquinho, e pronto: a mão está na posição certa.",
  F6 = "O nosso teclado é o ABNT2, o modelo brasileiro. ABNT quer dizer Associação Brasileira de Normas Técnicas, que cria as regras dos produtos no Brasil. É por isso que ele tem a tecla do cê-cedilha, ao lado do L.",
  F7 = "Agora, o acento. No teclado brasileiro, o acento vem antes da letra. Para escrever café, com acento agudo, aperte a tecla do acento, que parece não fazer nada, e depois o e. Pronto: é!",
  F8 = "O til funciona igual: aperte o til e depois o a, e aparece o ã de mãe. E o chapeuzinho, o acento circunflexo, é Shift mais a tecla do til, e depois a letra: ê de você.",
  F9 = "A cedilha é o sinal embaixo do c, que faz o som de s. No ABNT2, o cê-cedilha tem tecla própria: maçã, coração, açaí.",
  F10 = "Letra maiúscula: segure o Shift com uma mão e aperte a letra com a outra. Para muitas maiúsculas seguidas, ligue o Caps Lock, a luzinha acende, e não esqueça de desligar depois!",
  F11 = "E a pontuação organiza a frase: ponto final, vírgula, interrogação e exclamação. Sem ela, a frase vira uma confusão.",
  F12 = "O Thiago treinou um pouco por dia, com os dedos na fileira base. A cada dia, mais rápido e com menos erros. Agora ele escreve Thiago Araújo, com maiúscula e acento, sem olhar o teclado. Inscrição feita. Missão cumprida!",
  F13 = "Onde eu uso isso? Nos trabalhos e provas no computador, quem digita bem termina mais rápido. Nos cadastros e inscrições, o nome precisa sair certinho. E em muitas profissões, como atendente, jornalista e programador.",
  F14 = "Agora é com vocês: abram a Missão 7 no portal e treinem a digitação sem medo!";
const FILA = { A: "#fef08a", S: "#fef08a", D: "#fef08a", F: "#fef08a", J: "#fef08a", K: "#fef08a", L: "#fef08a", "Ç": "#fef08a" };
const CL = ["#e9d5ff", "#bfdbfe", "#bbf7d0", "#fed7aa"];
const DEDOS = { A: CL[0], S: CL[1], D: CL[2], F: CL[3], J: CL[3], K: CL[2], L: CL[1], "Ç": CL[0] };
const BIT = (t, x, y) => robozinho(x || 1170, y || 600, 1, t, true);

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "tec"], [.9, "tec"], [1.3, "tec"], [1.8, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.5], [1.6, 640, 330, 1]]); g.fillStyle = "#fde68a"; g.fillRect(-600, -400, 2480, 1600);
     kb(640, 160, 56, {}); ["Q", "E", "T", "U", "O", "S", "F", "H", "K", "Z", "C", "B", "M"].forEach((k, i) => { const [a, b] = kp(640, 160, 56, k); milho(a + 14, b - 10, 7); });
     const ks = ["A", "S", "D", "F", "G"], i = Math.floor(t * 2.2) % ks.length, [gx, gy] = kp(640, 160, 56, ks[i]); galinha(gx - 70, gy - 40, .9, t, true); g.restore();
     abertura(t, "6º ANO · MISSÃO 7", "Digitação sem medo", "CHEGA DE", "CATAR MILHO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "dedo"), "tec"], [em(F1, "Olha"), "tec"], [em(F1, "teclado", 1), "tec"], [em(F1, "thiago", 1), "alerta"], [em(F1, "demora"), "zum"]],
   draw(t, D) { const de = em(F1, "dedo"), ol = em(F1, "Olha"), ss = em(F1, "assim"), ma = em(F1, "maiúscula"), ac = em(F1, "acento"), dm = em(F1, "demora");
     const n = Math.min(13, Math.max(0, Math.floor((t - de) * 13 / Math.max(1, ss + 1 - de))));
     g.save(); camera(t, [[0, 640, 360, 1], [de, 720, 380, 1.08], [ss, 620, 320, 1.15], [dm, 640, 360, 1]]); quarto7(t);
     monitor(560, 450, 1.75, telaInsc("thiago araujo", n, false)); kb(560, 478, 15, { press: n < 13 && Math.floor(t * 3) % 2 ? ["G"] : [] });
     thiago({ x: 1000, y: 690, s: 1, olhar: -1, braco: -1.2, bracoE: .3, boca: t > dm ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > ol && t < ss) balao("Olha o teclado… olha a tela… 😵", 1020, 400, seg(t, ol, ol + .3));
     if (t > ma) etiqueta("sem MAIÚSCULA", 330, 140, 420, 250, seg(t, ma, ma + .4)); if (t > ac) etiqueta("sem ACENTO (Araújo)", 920, 150, 640, 250, seg(t, ac, ac + .4));
     if (t > dm) palavra("QUE DEMORA! ⏰", 640, 480, seg(t, dm, dm + .4), 56); } },
 { chip: "CATAR MILHO", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "catar"), "tec"], [em(F2, "galinha"), "pop"], [em(F2, "Bit"), "ding"], [em(F2, "melhor"), "ding"]],
   draw(t, D) { const ca = em(F2, "catar"), ga = em(F2, "galinha"), bi = em(F2, "Bit"), me = em(F2, "melhor");
     g.save(); camera(t, [[0, 520, 360, 1.15], [bi, 700, 360, 1]]); g.fillStyle = "#bbf7d0"; g.fillRect(-600, -400, 2480, 1600); g.fillStyle = "#86efac"; g.fillRect(-600, 520, 2480, 800);
     kb(620, 300, 40, {}); ["E", "T", "S", "F", "H", "C", "B"].forEach(k => { const [a, b] = kp(620, 300, 40, k); milho(a + 10, b - 6, 6); });
     const ks = ["F", "H", "C", "E"], [gx, gy] = kp(620, 300, 40, ks[Math.floor(t * 2) % 4]); galinha(gx - 60, gy - 30, .8, t, true);
     robozinho(1120, 600, 1.2, t, true); g.restore();
     palavra("“CATAR MILHO”", 560, 110, seg(t, ca, ca + .4), 66); if (t > ga) rotulo("um dedo só, procurando tecla por tecla", 560, 190, "#14532d", seg(t, ga, ga + .4));
     if (t > bi) balao("Existe um jeito bem melhor! 💡", 940, 300, seg(t, bi, bi + .3)); } },
 { chip: "FILEIRA BASE", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "Digitação"), "ding"], [em(F3, "fileira"), "pop"], [em(F3, "esquerda"), "tec"], [em(F3, "direita"), "tec"]],
   draw(t, D) { const di = em(F3, "Digitação"), fi = em(F3, "fileira"), es = em(F3, "esquerda"), dr = em(F3, "direita"); fundoEscuro(t, "#1e3a8a");
     const hl = {}; if (t > fi) Object.assign(hl, FILA); if (t > es) ["A", "S", "D", "F"].forEach(k => hl[k] = DEDOS[k]); if (t > dr) ["J", "K", "L", "Ç"].forEach(k => hl[k] = DEDOS[k]);
     g.save(); camera(t, [[0, 640, 330, 1], [es, 560, 340, 1.12], [dr, 720, 340, 1.12], [dr + 2, 640, 340, 1.04]]); kb(640, 220, 56, { hl }); g.restore();
     cartaoC("DIGITAÇÃO = escrever no computador usando o teclado", 640, 100, 820, "#fff", seg(t, di, di + .4));
     if (t > fi) etiqueta("FILEIRA BASE (a do meio)", 1110, 200, 1010, 300, seg(t, fi, fi + .4));
     if (t > es) rotulo("mão esquerda: A S D F", 410, 535, "#fde68a", seg(t, es, es + .4)); if (t > dr) rotulo("mão direita: J K L Ç", 860, 535, "#fde68a", seg(t, dr, dr + .4)); } },
 { chip: "POLEGARES E VOLTA PARA CASA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "polegares"), "pop"], [em(F4, "espaço"), "tec"], [em(F4, "aperta"), "tec"], [em(F4, "casa"), "ding"]],
   draw(t, D) { const po = em(F4, "polegares"), es = em(F4, "espaço"), ap = em(F4, "aperta"), ca = em(F4, "casa"); fundoEscuro(t, "#1e3a8a");
     const hl = Object.assign({}, DEDOS); if (t > es) hl.ESP = "#fef08a"; const pr = t > ap && t < ca ? ["R"] : [];
     g.save(); camera(t, [[0, 640, 300, 1], [ap, 600, 300, 1.25], [ca + .6, 640, 300, 1]]); kb(640, 130, 56, { hl, press: pr }); maos(640, 130, 56, seg(t, po - .4, po + .6), CORES_DEDO); g.restore();
     if (t > es) etiqueta("polegares na barra de espaço", 1080, 470, 820, 380, seg(t, es, es + .4));
     if (t > ap) balao(t > ca ? "…e volta para casa! 🏠" : "o indicador sobe no R…", 560, 80, seg(t, ap, ap + .3)); } },
 { chip: "O RISQUINHO", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "risquinho"), "ding"], [em(F5, "indicadores"), "pop"], [em(F5, "pronto"), "festa"]],
   draw(t, D) { const ri = em(F5, "risquinho"), ind = em(F5, "indicadores"), pr = em(F5, "pronto"); const [fx, fy] = kp(640, 200, 56, "F");
     fundoEscuro(t, "#312e81"); g.save(); camera(t, [[0, 640, 330, 1], [ri, fx, fy + 10, 2.6], [ind, 640, 330, 1.05]]); kb(640, 200, 56, { risco: true, hl: t > ri ? { F: "#fde047", J: "#fde047" } : {} }); maos(640, 200, 56, seg(t, ind, ind + .6)); g.restore();
     if (t < ri) palavra("SEM OLHAR?", 520, 90, seg(t, 0, .4), 54);
     if (t > ri && t < ind) etiqueta("risquinho em alto-relevo", 560, 60, 640, 390, seg(t, ri, ri + .4));
     if (t > pr) cartaoC("😎 mão na posição certa!", 640, 520, 460, "#bbf7d0", seg(t, pr, pr + .4)); robozinho(1170, 600, .9, t, true); } },
 { chip: "TECLADO ABNT2", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "ABNT2"), "ding"], [em(F6, "Associação"), "pop"], [em(F6, "cêcedilha"), "tec"]],
   draw(t, D) { const ab = em(F6, "ABNT2"), as = em(F6, "Associação"), ce = em(F6, "cêcedilha"), [cx, cy] = kp(640, 300, 44, "Ç"); fundoEscuro(t, "#14532d");
     g.save(); camera(t, [[0, 640, 360, 1], [ce, 760, 390, 1.15]]); kb(640, 300, 44, { hl: t > ce ? { "Ç": "#86efac", L: "#e2e8f0" } : {} , press: t > ce + .6 && t < ce + 1 ? ["Ç"] : [] }); g.restore();
     palavra("ABNT2 = TECLADO BRASILEIRO", 520, 112, seg(t, ab, ab + .4), 50);
     if (t > as) cartaoC("ABNT = Associação Brasileira de Normas Técnicas", 640, 200, 860, "#fff", seg(t, as, as + .4), "quem cria as regras (normas) dos produtos no Brasil");
     if (t > ce) etiqueta("Ç: tecla própria, ao lado do L", 1040, 330, 760, 360, seg(t, ce, ce + .4)); robozinho(1170, 600, .9, t, true); } },
 { chip: "ACENTO AGUDO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "aperte"), "tec"], [em(F7, "depois"), "tec"], [em(F7, "Pronto"), "ding"]],
   draw(t, D) { const an = em(F7, "antes"), ap = em(F7, "aperte"), dp = em(F7, "depois"), pr = em(F7, "Pronto"); fundoEscuro(t, "#7c2d12");
     const pres = t > ap && t < ap + .6 ? ["´"] : t > dp && t < dp + .6 ? ["E"] : [];
     g.save(); camera(t, [[0, 640, 360, 1], [ap, 760, 300, 1.2], [dp, 520, 300, 1.2], [pr, 640, 360, 1]]); kb(640, 230, 50, { press: pres, hl: { "´": "#fde68a", E: "#bfdbfe" } }); g.restore();
     visor(480, 110, 400, t > dp ? "café" : "caf", 1, "#f97316");
     if (t > an) cartaoC("o ACENTO vem ANTES da letra", 940, 125, 400, "#fde68a", seg(t, an, an + .4));
     if (t > ap && t < dp) rotulo("parece que não fez nada… 🤔", 480, 190, "#fed7aa", 1);
     if (t > pr) palavra("´  +  e  =  é", 640, 520, seg(t, pr, pr + .4), 64); } },
 { chip: "TIL E CIRCUNFLEXO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "aperte"), "tec"], [em(F8, "depois"), "tec"], [em(F8, "Shift"), "tec"], [em(F8, "depois", 1), "tec"], [em(F8, "você"), "ding"]],
   draw(t, D) { const ap = em(F8, "aperte"), d1 = em(F8, "depois"), sh = em(F8, "Shift"), d2 = em(F8, "depois", 1); fundoEscuro(t, "#581c87");
     const w = (a) => t > a && t < a + .6; const pres = w(ap) ? ["~"] : w(d1) ? ["A"] : w(sh) ? ["SHIFT", "~"] : w(d2) ? ["E"] : [];
     kb(640, 230, 50, { press: pres, hl: { "~": "#fde68a", SHIFT: t > sh ? "#fbcfe8" : undefined } });
     visor(440, 110, 360, t < sh ? (t > d1 ? "mãe" : "m") : (t > d2 ? "você" : "voc"), 1, "#a855f7");
     if (t > d1) cartaoC("~  +  a  =  ã", 800, 120, 300, "#fde68a", seg(t, d1, d1 + .4)); if (t > d2) cartaoC("Shift + ~  +  e  =  ê", 800, 190, 300, "#fbcfe8", seg(t, d2, d2 + .4));
     if (t > sh) etiqueta("chapeuzinho = circunflexo", 1080, 500, 330, 400, seg(t, sh, sh + .4)); robozinho(1170, 330, .8, t, true); } },
 { chip: "CEDILHA", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "embaixo"), "pop"], [em(F9, "maçã"), "tec"], [em(F9, "coração"), "tec"], [em(F9, "açaí"), "tec"]],
   draw(t, D) { const eb = em(F9, "embaixo"), ma = em(F9, "maçã"), co = em(F9, "coração"), ac = em(F9, "açaí"); fundoEscuro(t, "#0e7490");
     const w = (a) => t > a && t < a + .5; g.save(); camera(t, [[0, 640, 360, 1], [ma, 760, 380, 1.15], [ac + .8, 640, 360, 1]]); kb(640, 260, 50, { hl: { "Ç": "#86efac" }, press: w(ma) || w(co) || w(ac) ? ["Ç"] : [] }); g.restore();
     palavra("Ç", 300, 150, seg(t, 0, .4), 120); if (t > eb) etiqueta("cedilha: o sinal embaixo do c (som de s)", 760, 110, 320, 190, seg(t, eb, eb + .4));
     visor(820, 200, 320, t > ac ? "açaí" : t > co ? "coração" : t > ma ? "maçã" : "…", seg(t, ma, ma + .3), "#22c55e"); robozinho(1170, 600, .9, t, true); } },
 { chip: "MAIÚSCULAS", fala: F10, sfx: [[.1, "whoosh"], [em(F10, "segure"), "tec"], [em(F10, "aperte"), "tec"], [em(F10, "Caps"), "tec"], [em(F10, "desligar"), "tec"]],
   draw(t, D) { const se = em(F10, "segure"), ap = em(F10, "aperte"), cp = em(F10, "Caps"), lz = em(F10, "luzinha"), dl = em(F10, "desligar"); fundoEscuro(t, "#1e3a8a");
     const luz = t > cp && t < dl + .3, pres = (t > se && t < cp) ? (t > ap ? ["SHIFT", "T"] : ["SHIFT"]) : (t > cp && t < cp + .5) || (t > dl && t < dl + .5) ? ["CAPS"] : [];
     g.save(); camera(t, [[0, 640, 360, 1], [se, 560, 360, 1.12], [cp, 520, 330, 1.25], [dl + .5, 640, 360, 1]]); kb(640, 230, 50, { luz, press: pres, hl: { SHIFT: "#fbcfe8", CAPS: "#bfdbfe" } }); g.restore();
     visor(480, 110, 400, t > cp ? "GOOOL!!!" : t > ap ? "Thiago" : "hiago", 1, AZUL);
     if (t > se && t < cp) cartaoC("Shift + letra = MAIÚSCULA", 940, 125, 400, "#fbcfe8", seg(t, se, se + .4));
     if (t > lz) etiqueta("luzinha acesa = Caps Lock ligado", 1040, 470, 300, 285, seg(t, lz, lz + .4));
     if (t > dl) cartaoC("⚠️ desligue depois!", 940, 125, 400, "#fde68a", seg(t, dl, dl + .4)); } },
 { chip: "PONTUAÇÃO", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "ponto"), "pop"], [em(F11, "vírgula"), "pop"], [em(F11, "interrogação"), "pop"], [em(F11, "exclamação"), "pop"], [em(F11, "confusão"), "alerta"]],
   draw(t, D) { const po = em(F11, "ponto"), vi = em(F11, "vírgula"), it = em(F11, "interrogação"), ex = em(F11, "exclamação"), cf = em(F11, "Sem"); fundoEscuro(t, "#3f6212");
     g.save(); camera(t, [[0, 640, 360, 1.06], [cf, 640, 330, 1]]); palavra("PONTUAÇÃO", 640, 90, seg(t, 0, .4), 60);
     [[po, ".", "ponto final"], [vi, ",", "vírgula"], [it, "?", "interrogação"], [ex, "!", "exclamação"]].forEach(([tt, s, n], i) => { if (t > tt) cartaoC(s + "   " + n, 250 + i * 260, 210, 240, "#fff", seg(t, tt, tt + .4)); });
     if (t > cf) { cartaoC("❌ vamos jogar amanhã sim eu vou", 400, 360, 520, "#fecaca", seg(t, cf, cf + .4)); cartaoC("✅ Vamos jogar amanhã? Sim, eu vou!", 900, 360, 520, "#bbf7d0", seg(t, cf + .6, cf + 1)); }
     g.restore(); thiago({ x: 1150, y: 680, s: .7, olhar: -1, braco: t > cf + .6 ? -2.6 : .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "dia", 1), "pop"], [em(F12, "Agora"), "tec"], [em(F12, "Inscrição"), "ding"], [em(F12, "Missão"), "festa"]],
   draw(t, D) { const tr = em(F12, "treinou"), ag = em(F12, "Agora"), ins = em(F12, "Inscrição"), mc = em(F12, "Missão");
     if (t < ag) { fundoEscuro(t, "#1e3a8a"); palavra("UM POUCO POR DIA", 640, 90, seg(t, tr, tr + .4), 56);
       for (let i = 0; i < 5; i++) { const k = seg(t, tr + .5 + i * .45, tr + 1 + i * .45); if (k <= 0) continue; const h = (70 + i * 55) * cl(k); g.fillStyle = ["#93c5fd", "#60a5fa", "#3b82f6", "#22c55e", "#16a34a"][i]; rr(320 + i * 140, 500 - h, 100, h, 10); g.fill(); rotulo("dia " + (i + 1), 370 + i * 140, 520, "#fff", 1); }
       rotulo("mais rápido e com menos erros ⬆️", 640, 170, "#fde68a", seg(t, tr + 2, tr + 2.4)); thiago({ x: 1120, y: 680, s: .8, olhar: -1, braco: .3, bracoE: .3, boca: "riso", pisca: pisca(t) }); return; }
     const n = Math.min(13, Math.floor((t - ag) * 9));
     g.save(); camera(t, [[ag, 600, 280, 1.3], [ins, 640, 360, 1]]); quarto7(t); monitor(560, 450, 1.75, telaInsc("Thiago Araújo", n, t > ins)); kb(560, 478, 15, {});
     thiago({ x: 1000, y: 690, s: 1, olhar: -1, braco: t > ins ? -2.6 : .2, bracoE: t > ins ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); g.restore();
     if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F13, sfx: [[.1, "whoosh"], [em(F13, "provas"), "pop"], [em(F13, "cadastros"), "pop"], [em(F13, "profissões"), "pop"]],
   draw(t, D) { ondeUso(t, F13, [["provas", "📝", "Trabalhos e provas:", "termina mais rápido"], ["cadastros", "🧾", "Cadastros e inscrições:", "nome escrito certinho"], ["profissões", "💼", "Profissões:", "atendente, jornalista…"]]); } },
 { chip: "", fala: F14, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 7", [THI, { camisa: "#f472b6", cabelo: "longo" }]); } }
];

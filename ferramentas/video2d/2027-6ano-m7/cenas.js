/* ================= 6º ano · 2027 · 1º bimestre · Missão 7 · Digitação sem medo ================= */
const THIAGO = { camisa: "#0891b2" }, LIA = { camisa: "#f59e0b", cabelo: "longo" };
const thiago = o => boneco(Object.assign({}, THIAGO, o)), lia = o => boneco(Object.assign({}, LIA, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// uma tecla grande; ap = apertada; cor do dedo (bolinha)
function tec(x, y, txt, ap, w, dedo, risco) { w = w || 74; g.save(); g.translate(x, y + (ap ? 5 : 0)); g.fillStyle = ap ? "#facc15" : "#e2e8f0"; rr(-w / 2, -36, w, 72, 12); g.fill(); g.fillStyle = ap ? "#a16207" : "#94a3b8"; g.fillRect(-w / 2, 28, w, 8);
  g.fillStyle = NAVY; g.font = `800 ${txt.length > 3 ? 20 : 30}px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); if (risco) { g.fillStyle = "#475569"; g.fillRect(-12, 18, 24, 5); }
  if (dedo) { g.globalAlpha = .55; g.fillStyle = dedo; g.beginPath(); g.ellipse(0, -6, 26, 30, 0, 0, 7); g.fill(); } g.restore(); }
const BASE = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"];
const DEDO = { A: "#ef4444", S: "#f97316", D: "#22c55e", F: "#3b82f6", J: "#3b82f6", K: "#22c55e", L: "#f97316", "Ç": "#ef4444" };
function fileira(y, k, dedos, ap, riscos) { BASE.forEach((l, i) => { if (k <= seg(0, 0, 1) * 0 + i * .06) return; tec(640 + (i - 4.5) * 84, y, l, ap === l, 74, dedos ? DEDO[l] : 0, riscos && (l === "F" || l === "J")); }); }
// campo de texto digitando
function campo(x, y, w, txt, cur, cor) { g.save(); g.fillStyle = "#fff"; rr(x - w / 2, y - 34, w, 68, 12); g.fill(); g.strokeStyle = cor || "#2563eb"; g.lineWidth = 4; rr(x - w / 2, y - 34, w, 68, 12); g.stroke(); g.fillStyle = NAVY; g.font = `700 32px ${F}`; g.textAlign = "left"; g.fillText(txt + (cur ? "|" : ""), x - w / 2 + 20, y + 11); g.restore(); }
const digita = (s, t, t0, vel) => s.slice(0, Math.max(0, Math.min(s.length, Math.floor((t - t0) * (vel || 6)))));

const F0 = "Digitação sem medo: chega de catar milho!",
  F1 = "O Thiago precisa preencher a inscrição do campeonato de futebol. Mas ele digita com um dedo só, olhando cada tecla, e o nome dele saiu sem acento e sem letra maiúscula. Que demora!",
  F2 = "O segredo é a fileira base: os dedos da mão esquerda ficam no A, S, D e F, e os da mão direita, no J, K, L e cê-cedilha. Os polegares descansam na barra de espaço.",
  F3 = "Repare: as teclas F e J têm um risquinho em alto-relevo. Com ele, você acha a posição sem olhar para o teclado.",
  F4 = "No teclado brasileiro, o acento vem antes da letra. Para escrever é, aperte a tecla do acento e depois o e. Para o til, aperte o til e depois o a. E o cê-cedilha tem tecla própria, ao lado do L.",
  F5 = "Letra maiúscula: segure o Shift com uma mão e aperte a letra com a outra. Para muitas maiúsculas seguidas, ligue o Caps Lock, e desligue depois!",
  F6 = "O Thiago treinou um pouco por dia, com os dedos na fileira base. Agora escreve o nome certinho, com acento e maiúscula, sem olhar o teclado. Missão cumprida!",
  F7 = "Onde eu uso isso? Nos trabalhos e provas no computador, nos cadastros e inscrições, e em muitas profissões, como atendente, jornalista e programador.",
  F8 = "Agora é com vocês: abram a Missão 7 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "click"], [.8, "click"], [1.1, "click"], [1.3, "alerta"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0c4a6e"); ["Q", "W", "E", "R", "T"].forEach((l, i) => { const k = seg(t, .2 + i * .12, .5 + i * .12); if (k > 0) tec(440 + i * 100, 300 + Math.sin(t * 5 + i) * 12, l, Math.floor(t * 3) % 5 === i); });
     abertura(t, "6º ANO · MISSÃO 7 · EXTRA", "Digitação sem medo", "CHEGA DE", "CATAR MILHO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1,
   sfx: [[.1, "whoosh"], [em(F1, "inscrição"), "pop"], [em(F1, "dedo"), "click"], [em(F1, "olhando"), "click"], [em(F1, "acento"), "alerta"], [em(F1, "demora"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const i0 = em(F1, "inscrição"), d = em(F1, "dedo"), a = em(F1, "acento"), de = em(F1, "demora");
     comando("⚽ INSCRIÇÃO DO CAMPEONATO", 760, 110, seg(t, i0, i0 + .4), "#16a34a", 520);
     campo(760, 210, 520, digita("thiago araujo", t, d, 1.6), Math.floor(t * 2) % 2, "#2563eb");
     if (t > d) { const l = "thiago araujo"[Math.min(12, Math.floor((t - d) * 1.6))] || "o"; tec(760, 410, l.toUpperCase(), true); g.font = `60px ${F}`; g.textAlign = "center"; g.fillText("☝️", 760, 390 - Math.abs(Math.sin(t * 6)) * 30); }
     if (t > a) { rotulo("SEM ACENTO!", 640, 270, "#fca5a5", seg(t, a, a + .4)); rotulo("SEM MAIÚSCULA!", 880, 270, "#fca5a5", seg(t, a + .4, a + .8)); }
     thiago({ x: 170, y: 610, s: .95, braco: -.6, bracoE: .3, olhar: 1, boca: t > de ? "o" : "", pisca: pisca(t) });
     if (t > de) palavra("QUE DEMORA!", 760, 520, seg(t, de, de + .4), 54); } },
 { chip: "A FILEIRA BASE", fala: F2, legenda: "O segredo é a fileira base: os dedos da mão esquerda ficam no A, S, D e F, e os da mão direita, no J, K, L e Ç. Os polegares descansam na barra de espaço.", sfx: [[.1, "whoosh"], [em(F2, "fileira"), "ding"], [em(F2, "esquerda"), "pop"], [em(F2, "direita"), "pop"], [em(F2, "polegares"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const fb = em(F2, "fileira"), e = em(F2, "esquerda"), di = em(F2, "direita"), p = em(F2, "polegares");
     palavra("FILEIRA BASE", 600, 100, seg(t, fb, fb + .4), 60);
     if (t > fb) BASE.forEach((l, i) => { const lado = i < 4 ? e : i > 5 ? di : 99; tec(640 + (i - 4.5) * 84, 270, l, false, 74, t > lado + (i < 4 ? i : i - 6) * .25 ? DEDO[l] : 0); });
     if (t > e) rotulo("MÃO ESQUERDA", 345, 350, "#fde68a", seg(t, e, e + .4));
     if (t > di) rotulo("MÃO DIREITA", 935, 350, "#fde68a", seg(t, di, di + .4));
     if (t > p) { tec(640, 430, "ESPAÇO", false, 520, "#a855f7"); rotulo("POLEGARES", 640, 505, "#e9d5ff", seg(t, p, p + .4)); } } },
 { chip: "O RISQUINHO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "F"), "pop"], [em(F3, "J"), "pop"], [em(F3, "risquinho"), "ding"], [em(F3, "sem"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const r = em(F3, "risquinho"), s = em(F3, "sem");
     const z = 1 + seg(t, r, r + .6) * .8; g.save(); g.translate(640, 300); g.scale(z, z); tec(-110, 0, "F", false, 120, 0, true); tec(110, 0, "J", false, 120, 0, true); g.restore();
     if (t > r) { seta(400, 420, 500, 360, seg(t, r, r + .3), "#fde68a"); seta(880, 420, 780, 360, seg(t, r, r + .3), "#fde68a"); rotulo("RISQUINHO EM ALTO-RELEVO", 640, 470, "#fde68a", seg(t, r + .2, r + .6)); }
     if (t > s) palavra("ACHA SEM OLHAR!", 600, 100, seg(t, s, s + .4), 54); } },
 { chip: "ACENTOS E Ç", fala: F4, legenda: "No teclado brasileiro, o acento vem antes da letra. Para escrever é, aperte a tecla do acento ( ´ ) e depois o e. Para o til ( ~ ), aperte o til e depois o a. E o ç tem tecla própria, ao lado do L.",
   sfx: [[.1, "whoosh"], [em(F4, "antes"), "ding"], [em(F4, "acento", 1), "click"], [em(F4, "depois"), "click"], [em(F4, "til", 1), "click"], [em(F4, "cê"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const an = em(F4, "antes"), ac = em(F4, "acento", 1), ti = em(F4, "til", 1), ce = em(F4, "cê");
     palavra("1º O ACENTO, 2º A LETRA", 600, 100, seg(t, an, an + .4), 48);
     if (t > ac && t < ti) { tec(420, 260, "´", t > ac && t < ac + .9, 100); seta(480, 260, 560, 260, seg(t, ac + .5, ac + .8), "#fde68a"); tec(620, 260, "E", t > ac + 1 && t < ac + 1.8, 100); if (t > ac + 1.2) comando("é", 860, 260, seg(t, ac + 1.2, ac + 1.6), "#16a34a", 140); }
     if (t > ti && t < ce) { tec(420, 260, "~", t > ti && t < ti + .9, 100); seta(480, 260, 560, 260, seg(t, ti + .5, ti + .8), "#fde68a"); tec(620, 260, "A", t > ti + 1 && t < ti + 1.8, 100); if (t > ti + 1.2) comando("ã", 860, 260, seg(t, ti + 1.2, ti + 1.6), "#16a34a", 140); }
     if (t > ce) { tec(500, 280, "L", false, 100); tec(620, 280, "Ç", Math.floor(t * 2) % 2 === 0, 100, "#ef4444"); seta(760, 280, 680, 280, seg(t, ce, ce + .3), "#fde68a"); rotulo("TECLA PRÓPRIA, AO LADO DO L", 640, 390, "#fde68a", seg(t, ce, ce + .4)); comando("maçã · ação · coração", 640, 470, seg(t, ce + .5, ce + .9), "#334155", 420); } } },
 { chip: "MAIÚSCULAS", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "Shift"), "click"], [em(F5, "letra", 1), "click"], [em(F5, "Caps"), "click"], [em(F5, "desligue"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const sh = em(F5, "Shift"), le = em(F5, "letra", 1), ca = em(F5, "Caps"), de = em(F5, "desligue");
     if (t < ca) { tec(380, 250, "SHIFT", t > sh, 180); comando("+", 520, 250, seg(t, sh + .2, sh + .5), "#334155", 60); tec(640, 250, "T", t > le && t < le + .8, 100); if (t > le) comando("T", 880, 250, seg(t, le + .3, le + .7), "#16a34a", 120); rotulo("SEGURE + APERTE", 520, 350, "#fde68a", seg(t, sh, sh + .4)); }
     if (t > ca) { const on = t < de + .6; tec(420, 260, "CAPS LOCK", t < ca + .4 || (t > de && t < de + .4), 220); g.fillStyle = on ? "#22c55e" : "#334155"; g.beginPath(); g.arc(500, 236, 10, 0, 7); g.fill(); comando(on ? "LIGADO: ABCDEF" : "DESLIGADO: abcdef", 840, 260, seg(t, ca + .3, ca + .7), on ? "#16a34a" : "#475569", 380); if (t > de) palavra("DESLIGUE DEPOIS!", 600, 420, seg(t, de, de + .4), 50); } } },
 { chip: "A SOLUÇÃO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "treinou"), "pop"], [em(F6, "fileira"), "ding"], [em(F6, "certinho"), "click"], [em(F6, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const tr = em(F6, "treinou"), c = em(F6, "certinho"), m = em(F6, "Missão");
     comando("⚽ INSCRIÇÃO DO CAMPEONATO", 760, 110, seg(t, 0, .4), "#16a34a", 520);
     campo(760, 210, 520, digita("Thiago Araújo", t, c, 9), t > c && t < c + 2 && Math.floor(t * 2) % 2, "#16a34a");
     if (t > tr) BASE.forEach((l, i) => tec(760 + (i - 4.5) * 60, 340, l, Math.floor(t * 8) % 10 === i, 54, DEDO[l]));
     if (t > c + 1.6) visto(1050, 210, 30, seg(t, c + 1.6, c + 2));
     thiago({ x: 170, y: 610, s: .95, braco: t > m ? -2.4 : -.6, bracoE: t > m ? 2.4 : .3, olhar: 1, boca: t > c ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "trabalhos"), "pop"], [em(F7, "cadastros"), "pop"], [em(F7, "profissões"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["trabalhos", "📝", "TRABALHOS E PROVAS", "#2563eb"], ["cadastros", "📋", "CADASTROS", "#16a34a"], ["profissões", "💼", "PROFISSÕES", "#7c3aed"]].forEach(([w, ic, n, c], i) => { const t0 = em(F7, w), x = 260 + i * 380, k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 290); g.scale(z, z); g.fillStyle = c; rr(-110, -80, 220, 160, 18); g.fill(); g.font = `72px ${F}`; g.textAlign = "center"; g.fillText(ic, 0, 25); g.restore(); comando(n, x, 450, seg(t, t0 + .1, t0 + .5), c, 320); }); } },
 { chip: "", fala: F8, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 7", [THIAGO, LIA]); } }
];

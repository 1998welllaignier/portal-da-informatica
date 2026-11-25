/* ================= 7º ano · 2027 · 1º bimestre · Missão 6 · Programar em dupla ================= */
const CAIO = { camisa: "#0ea5e9" }, MENINA7 = { camisa: "#f43f5e", cabelo: "longo" };
const caio = o => boneco(Object.assign({}, CAIO, o)), duda = o => boneco(Object.assign({}, MENINA7, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-úç]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
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

const F0 = "Programar em dupla: piloto e navegador!",
  F1 = "O Caio e a Duda foram fazer um programa juntos, no mesmo computador. Os dois queriam mexer no mouse ao mesmo tempo, um apagava o bloco do outro, e no fim ninguém sabia o que o programa fazia.",
  F2 = "Programadores de verdade trabalham muito em dupla. Um computador, duas cabeças e dois papéis: o piloto e o navegador.",
  F3 = "O piloto fica com o mouse e o teclado e monta os blocos. Mas não decide tudo sozinho.",
  F4 = "O navegador lê o enunciado, pensa no próximo passo, confere cada bloco e procura erros. E não pega o mouse!",
  F5 = "E a cada dez minutos, troquem de papel! Assim, os dois aprendem tudo.",
  F6 = "O jeito de trabalhar tem quatro passos. Planejar: ler o problema juntos e dividir em partes. Montar: o piloto monta uma parte, e o navegador confere. Testar: rodar depois de cada parte, não só no final. Trocar: trocar de papel e seguir para a próxima parte.",
  F7 = "E os combinados da dupla: falar com respeito, como acho que esse bloco vai dentro do repita. Ouvir a ideia do outro antes de testar a sua. E lembrar que o erro é da dupla, não de um só.",
  F8 = "O Caio virou piloto, a Duda virou navegadora, e depois trocaram. O programa ficou pronto, e os dois sabiam explicar cada bloco. Missão cumprida!",
  F9 = "Onde eu uso isso? No carro, o motorista dirige e quem está do lado olha o mapa. No jogo cooperativo, um ataca e o outro cuida do time. E nas empresas de tecnologia, programar em dupla ajuda a errar menos e a ensinar os novatos.",
  F10 = "Agora é com vocês: formem as duplas e abram a Missão 6 no portal!";
function emo(e, x, y, tam) { g.save(); g.fillStyle = "#fff"; g.globalAlpha = 1; g.font = `${tam || 60}px ${F}`; g.textAlign = "center"; g.fillText(e, x, y); g.restore(); }
function pc(x, y, s) { monitor(x, y, s, (x0, y0, w, h) => { [["#f59e0b", 30, 130], ["#7c3aed", 50, 110], ["#7c3aed", 50, 90], ["#16a34a", 30, 120]].forEach(([c, dx, ww], i) => { g.fillStyle = c; rr(x0 + dx, y0 + 18 + i * 34, ww, 26, 6); g.fill(); }); }); }
function crachaPapel(x, y, e, nome, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-120, -34, 240, 68, 34); g.fill(); g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(nome, 16, 9); g.restore(); emo(e, x - 82, y + 14, 34 * z); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); crachaPapel(820, 200, "🕹️", "PILOTO", "#2563eb", seg(t, .3, .7)); crachaPapel(820, 300, "🧭", "NAVEGADOR", "#16a34a", seg(t, .6, 1));
     abertura(t, "7º ANO · MISSÃO 6", "Programar em dupla", "PILOTO E", "NAVEGADOR!", 1.6); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "mouse"), "click"], [em(F1, "apagava"), "alerta"], [em(F1, "ninguém"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const mo = em(F1, "mouse"), ap = em(F1, "apagava"), ni = em(F1, "ninguém");
     pc(640, 270, 1.1); const briga = t > mo; mouse(640 + (briga ? Math.sin(t * 12) * 40 : 0), 510, 1.2);
     if (t > ap) xVermelho(640, 250, 40, seg(t, ap, ap + .3)); if (t > ni) palavra("O QUE O PROGRAMA FAZ?", 640, 420, seg(t, ni, ni + .4), 40);
     caio({ x: 330, y: 620, s: .85, braco: briga ? -1.6 : -.6, bracoE: .3, olhar: 1, boca: t > ap ? "o" : "", pisca: pisca(t) });
     duda({ x: 950, y: 620, s: .85, braco: -.6, bracoE: briga ? 1.6 : .3, olhar: -1, boca: t > ap ? "o" : "", pisca: pisca(t + .7) }); } },
 { chip: "DOIS PAPÉIS", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "dupla"), "pop"], [em(F2, "piloto"), "ding"], [em(F2, "navegador"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F2, "dupla"), p = em(F2, "piloto"), n = em(F2, "navegador");
     palavra("1 COMPUTADOR · 2 CABEÇAS · 2 PAPÉIS", 640, 110, seg(t, d, d + .4), 40); pc(640, 430, 1);
     crachaPapel(300, 340, "🕹️", "PILOTO", "#2563eb", seg(t, p, p + .4)); crachaPapel(980, 340, "🧭", "NAVEGADOR", "#16a34a", seg(t, n, n + .4)); } },
 { chip: "🕹️ O PILOTO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "mouse"), "click"], [em(F3, "monta"), "pop"], [em(F3, "sozinho"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const mo = em(F3, "mouse"), mt = em(F3, "monta"), so = em(F3, "sozinho");
     crachaPapel(640, 100, "🕹️", "PILOTO", "#2563eb", 1); mouse(450, 360, 1.3); teclado(640, 380, .8);
     if (t > mt) { bloco(820, 230, 280, "🔁 repita 3 vezes", "#f59e0b", seg(t, mt, mt + .4)); bloco(860, 300, 240, "💬 mostrar Olá", "#7c3aed", seg(t, mt + .3, mt + .7)); }
     if (t > so) comando("❌ NÃO DECIDE TUDO SOZINHO", 640, 520, seg(t, so, so + .4), "#dc2626", 460);
     caio({ x: 180, y: 620, s: .85, braco: -1.2, bracoE: .3, olhar: 1, pisca: pisca(t) }); } },
 { chip: "🧭 O NAVEGADOR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "lê"), "pop"], [em(F4, "próximo"), "pop"], [em(F4, "confere"), "ding"], [em(F4, "erros"), "pop"], [em(F4, "pega"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); crachaPapel(640, 100, "🧭", "NAVEGADOR", "#16a34a", 1);
     [["lê", "📖 Lê o enunciado"], ["próximo", "💭 Pensa no próximo passo"], ["confere", "✅ Confere cada bloco"], ["erros", "🔍 Procura erros"]].forEach(([w, s], i) => { const t0 = em(F4, w); cartao(s, 700, 190 + i * 84, 540, "#15803d", seg(t, t0, t0 + .4)); });
     const pg = em(F4, "pega"); if (t > pg) { mouse(1100, 420, 1.2); xVermelho(1100, 420, 44, seg(t, pg, pg + .3)); }
     duda({ x: 220, y: 620, s: .85, braco: -.6, bracoE: 2.2, olhar: 1, pisca: pisca(t) }); } },
 { chip: "TROCAR DE PAPEL", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "dez"), "ding"], [em(F5, "troquem"), "whoosh"], [em(F5, "tudo"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const dz = em(F5, "dez"), tr = em(F5, "troquem");
     cronometro(640, 230, 1.3, t); comando("⏰ A CADA 10 MINUTOS", 640, 380, seg(t, dz, dz + .4), "#7c3aed", 380);
     const k = cl(seg(t, tr, tr + 1)); const ax = 330 + (950 - 330) * k, bx = 950 - (950 - 330) * k;
     crachaPapel(ax, 470, "🕹️", "PILOTO", "#2563eb", 1); crachaPapel(bx, 540, "🧭", "NAVEGADOR", "#16a34a", 1);
     caio({ x: 160, y: 640, s: .7, braco: -.6, bracoE: .3, olhar: 1, pisca: pisca(t) }); duda({ x: 1120, y: 640, s: .7, braco: -.6, bracoE: .3, olhar: -1, pisca: pisca(t + .5) }); } },
 { chip: "OS 4 PASSOS DA DUPLA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "Planejar"), "pop"], [em(F6, "Montar"), "pop"], [em(F6, "Testar"), "pop"], [em(F6, "Trocar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); palavra("O JEITO DE TRABALHAR", 640, 90, seg(t, 0, .4), 44);
     [["Planejar", "1", "📝 PLANEJAR", "ler juntos e dividir"], ["Montar", "2", "🧱 MONTAR", "um monta, o outro confere"], ["Testar", "3", "▶️ TESTAR", "depois de cada parte"], ["Trocar", "4", "🔄 TROCAR", "e seguir em frente"]].forEach(([w, n, a, b], i) => {
       const t0 = em(F6, w), k = seg(t, t0, t0 + .4), x = 180 + i * 307; if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 330); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-140, -120, 280, 240, 20); g.fill(); g.fillStyle = NAVY; g.font = `900 64px ${F}`; g.textAlign = "center"; g.fillText(n, 0, -40); g.font = `800 23px ${F}`; g.fillText(a, 0, 20); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, 0, 60); g.restore(); }); } },
 { chip: "COMBINADOS DA DUPLA", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "respeito"), "pop"], [em(F7, "Ouvir"), "pop"], [em(F7, "erro"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const r = em(F7, "respeito"), o = em(F7, "Ouvir"), e = em(F7, "erro");
     comando("🤝 COMBINADOS", 640, 90, seg(t, 0, .4), "#16a34a", 300);
     if (t > r) balao("Acho que esse bloco vai dentro do repita!", 640, 210, seg(t, r, r + .4));
     cartao("👂 Ouvir a ideia do outro antes", 640, 330, 560, "#2563eb", seg(t, o, o + .4)); cartao("🤝 O erro é da DUPLA, não de um só", 640, 430, 560, "#db2777", seg(t, e, e + .4));
     caio({ x: 160, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: 1, boca: "riso", pisca: pisca(t) }); duda({ x: 1120, y: 620, s: .8, braco: -.6, bracoE: .3, olhar: -1, boca: "riso", pisca: pisca(t + .5) }); } },
 { chip: "A SOLUÇÃO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "piloto"), "pop"], [em(F8, "navegadora"), "pop"], [em(F8, "trocaram"), "whoosh"], [em(F8, "pronto"), "ding"], [em(F8, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const p = em(F8, "piloto"), n = em(F8, "navegadora"), tr = em(F8, "trocaram"), pr = em(F8, "pronto"), m = em(F8, "Missão");
     pc(640, 260, 1); const k = cl(seg(t, tr, tr + 1)); crachaPapel(330 + 620 * k, 460, "🕹️", "PILOTO", "#2563eb", seg(t, p, p + .4)); crachaPapel(950 - 620 * k, 530, "🧭", "NAVEGADOR", "#16a34a", seg(t, n, n + .4));
     if (t > pr) visto(800, 160, 30, seg(t, pr, pr + .4));
     caio({ x: 160, y: 640, s: .75, braco: t > pr ? -2.4 : -.6, bracoE: t > pr ? 2.4 : .3, olhar: 1, boca: t > pr ? "riso" : "", pisca: pisca(t) }); duda({ x: 1120, y: 640, s: .75, braco: t > pr ? -2.4 : -.6, bracoE: t > pr ? 2.4 : .3, olhar: -1, boca: t > pr ? "riso" : "", pisca: pisca(t + .5) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "carro"), "pop"], [em(F9, "jogo"), "pop"], [em(F9, "empresas"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 100, seg(t, 0, .4), 50);
     [["carro", "🚗", "No carro:", "um dirige, o outro olha o mapa"], ["jogo", "🎮", "Jogo cooperativo:", "um ataca, o outro cuida do time"], ["empresas", "💻", "Empresas de tecnologia:", "erram menos e ensinam novatos"]].forEach(([w, e, a, b], i) => {
       const t0 = em(F9, w), k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)), x = 250 + i * 390; g.save(); g.translate(x, 340); g.scale(z, z);
       g.fillStyle = "#fff"; rr(-180, -150, 360, 300, 22); g.fill(); g.restore(); emo(e, x, 310, 90 * z); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText(a, x, 390); g.font = `600 18px ${F}`; g.fillStyle = "#475569"; g.fillText(b, x, 428); }); } },
 { chip: "", fala: F10, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 6", [CAIO, MENINA7]); } }
];

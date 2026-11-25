/* ================= 8º ano · 2027 · 1º bimestre · Missão 1 · Listas: dados em fila ================= */
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

const F0 = "Listas: dados em fila!",
  F1 = "O Léo é o ajudante da chamada e precisa guardar o nome dos dezenove colegas no programa. Ele criou uma variável para cada um: aluno um, aluno dois, aluno três… Para mostrar todos, precisou de dezenove comandos. E, quando chegou um aluno novo, teve que criar mais uma variável!",
  F2 = "A Bia mostrou o jeito certo: uma lista. Lista é um conjunto de vários itens, um depois do outro, em ordem, todos com o mesmo nome. É como a fila da merenda: cada pessoa tem o seu lugar.",
  F3 = "Cada item tem uma posição, também chamada de índice. Na lista CHAMADA, a posição um é a Ana, a dois é o Bruno, e a três é a Carla. Então, CHAMADA na posição três quer dizer: a Carla!",
  F4 = "O número de itens é o tamanho da lista. A lista CHAMADA tem cinco nomes, então o tamanho é cinco. E a última posição é sempre igual ao tamanho.",
  F5 = "Com a lista, para mostrar todos os nomes, basta percorrer a lista com uma repetição: um bloco só, e não dezenove. Chegou aluno novo? É só inserir na lista.",
  F6 = "E mais: uma lista pode estar ordenada, em ordem crescente, decrescente ou alfabética, ou pode estar bagunçada. Guarde isso: lista ordenada é muito mais fácil de procurar. Você vai ver nas próximas missões!",
  F7 = "O Léo trocou as dezenove variáveis por uma lista só, a CHAMADA. O programa ficou curto, e aluno novo entra num instante. Missão cumprida!",
  F8 = "Onde eu uso isso? O histórico de mensagens do celular é uma lista, da mais antiga para a mais nova. A classificação do campeonato é uma lista ordenada pelos pontos. E a fila de impressão da escola também: o primeiro documento enviado é o primeiro impresso.",
  F9 = "Agora é com vocês: abram a Missão 1 no portal!";
const CH = ["Ana", "Bruno", "Carla", "Davi", "Elisa"];
function lista(x, y, nome, itens, k, hl, cel) { cel = cel || 150; if (k <= 0) return; comando(nome, x - 130, y + 30, k, "#2563eb", 200);
  itens.forEach((s, i) => { caixa(x + 30 + i * cel, y + 30, s, hl === i ? "#fde68a" : "#fff", seg(k, .1 + i * .1, .4 + i * .1) || (k >= 1 ? 1 : 0), cel - 16); rotulo(String(i + 1), x + 30 + i * cel, y - 14, "#93c5fd", k); }); }

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "pop"], [.6, "pop"], [.8, "pop"], [1, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); ["🙂", "😄", "😎", "🤓", "😊"].forEach((e, i) => { if (t > .3 + i * .15) emo(e, 640 + i * 110, 230 + Math.sin(t * 3 + i) * 6, 64); });
     abertura(t, "8º ANO · MISSÃO 1", "Listas", "DADOS", "EM FILA!", 1.5); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "variável"), "pop"], [em(F1, "dezenove", 1), "alerta"], [em(F1, "novo"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const v = em(F1, "variável"), d = em(F1, "dezenove", 1), n = em(F1, "novo");
     const qt = t > v ? Math.min(19, Math.floor((t - v) * 4) + 1) : 0; for (let i = 0; i < qt + (t > n + .5 ? 1 : 0); i++) { const x = 330 + (i % 5) * 175, y = 120 + Math.floor(i / 5) * 72; g.fillStyle = i === 19 ? "#fde68a" : "#fff"; rr(x - 75, y - 24, 150, 48, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 19px ${F}`; g.textAlign = "center"; g.fillText("aluno" + (i + 1), x, y + 7); }
     if (t > d) rotulo("19 COMANDOS PARA MOSTRAR TODOS! 😵", 680, 440, "#fecaca", seg(t, d, d + .4));
     leo({ x: 140, y: 620, s: .85, braco: t > n ? -2.6 : -.6, bracoE: t > n ? 2.6 : .3, olhar: 1, boca: t > d ? "o" : "", pisca: pisca(t) }); } },
 { chip: "O QUE É LISTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "ding"], [em(F2, "ordem"), "pop"], [em(F2, "merenda"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const l = em(F2, "lista"), o = em(F2, "ordem"), m = em(F2, "merenda");
     if (t > l) comando("📝 LISTA = VÁRIOS ITENS EM ORDEM, COM UM NOME SÓ", 640, 100, seg(t, l, l + .4), "#16a34a", 720);
     if (t > o) lista(360, 200, "CHAMADA", CH, seg(t, o, o + 1));
     if (t > m) { ["🧒", "👧", "👦", "🧑", "👩"].forEach((e, i) => emo(e, 420 + i * 120, 440, 60)); g.fillStyle = "#fff"; rr(280, 360, 90, 110, 10); g.fill(); emo("🍲", 325, 430, 50); rotulo("A FILA DA MERENDA", 640, 520, "#bbf7d0", seg(t, m, m + .4)); }
     bia8({ x: 1170, y: 620, s: .8, braco: -.6, bracoE: 2.2, olhar: -1, pisca: pisca(t) }); } },
 { chip: "POSIÇÃO (ÍNDICE)", fala: F3, legenda: "Cada item tem uma posição, também chamada de índice. Na lista CHAMADA, a posição 1 é a Ana, a 2 é o Bruno, e a 3 é a Carla. Então, CHAMADA[3] quer dizer: a Carla!",
   sfx: [[.1, "whoosh"], [em(F3, "posição"), "ding"], [em(F3, "Ana"), "pop"], [em(F3, "Bruno"), "pop"], [em(F3, "Carla"), "pop"], [em(F3, "Carla", 1), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F3, "Ana"), b = em(F3, "Bruno"), c = em(F3, "Carla"), c2 = em(F3, "Carla", 1);
     const hl = t > c ? 2 : t > b ? 1 : t > a ? 0 : -1; lista(330, 180, "CHAMADA", CH, 1, hl);
     comando("POSIÇÃO = ÍNDICE", 640, 100, seg(t, .3, .7), "#7c3aed", 320); if (t > a) seta(400 + hl * 150, 130, 400 + hl * 150, 160, 1, "#fde68a");
     if (t > c2) { palavra("CHAMADA[3] = Carla", 640, 400, seg(t, c2, c2 + .4), 52); } } },
 { chip: "O TAMANHO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "tamanho"), "ding"], [em(F4, "cinco", 1), "pop"], [em(F4, "última"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const tm = em(F4, "tamanho"), c = em(F4, "cinco", 1), u = em(F4, "última");
     lista(330, 180, "CHAMADA", CH, 1, t > u ? 4 : -1);
     const n = t > tm ? Math.min(5, Math.floor((t - tm) / .35) + 1) : 0; for (let i = 0; i < n; i++) visto(400 + i * 150, 290, 18, 1);
     if (t > c) comando("TAMANHO = 5", 640, 380, seg(t, c, c + .4), "#ea580c", 260); if (t > u) rotulo("ÚLTIMA POSIÇÃO = TAMANHO", 640, 460, "#fde68a", seg(t, u, u + .4)); } },
 { chip: "PERCORRER E INSERIR", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "percorrer"), "ding"], [em(F5, "dezenove"), "pop"], [em(F5, "inserir"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const p = em(F5, "percorrer"), i2 = em(F5, "inserir");
     bocaC(80, 140, 470, 120, "🔁 para cada nome em CHAMADA", "#f59e0b", seg(t, p, p + .4)); bloco(120, 200, 320, "💬 mostrar nome", "#7c3aed", seg(t, p + .2, p + .6));
     if (t > p) { const it = Math.floor((t - p) * 1.5) % 5; telinha(880, 110, 300, "▶️ NA TELA", CH.slice(0, it + 1), 1); }
     if (t > i2) { bloco(80, 360, 430, "➕ inserir Fábio em CHAMADA", "#16a34a", seg(t, i2, i2 + .4), true); rotulo("1 BLOCO, NÃO 19!", 300, 480, "#fde68a", seg(t, i2 + .6, i2 + 1)); } } },
 { chip: "ORDENADA OU BAGUNÇADA", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "crescente"), "pop"], [em(F6, "alfabética"), "pop"], [em(F6, "bagunçada"), "alerta"], [em(F6, "procurar"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const cr = em(F6, "crescente"), al = em(F6, "alfabética"), bg = em(F6, "bagunçada"), pr = em(F6, "procurar");
     if (t > cr) { comando("CRESCENTE", 230, 150, seg(t, cr, cr + .4), "#16a34a", 200); [3, 7, 12, 18, 25].forEach((v, i) => carta(v, 410 + i * 110, 150, "#fff", seg(t, cr + i * .1, cr + .3 + i * .1), 90)); }
     if (t > al) { comando("ALFABÉTICA", 230, 300, seg(t, al, al + .4), "#2563eb", 200); ["A", "B", "C", "D", "E"].forEach((v, i) => carta(v, 410 + i * 110, 300, "#fff", seg(t, al + i * .1, al + .3 + i * .1), 90)); }
     if (t > bg) { comando("BAGUNÇADA", 230, 450, seg(t, bg, bg + .4), "#dc2626", 200); [18, 3, 25, 7, 12].forEach((v, i) => carta(v, 410 + i * 110, 450 + Math.sin(t * 6 + i) * 5, "#fee2e2", seg(t, bg + i * .1, bg + .3 + i * .1), 90)); }
     if (t > pr) { lupa(1090, 200, 1); rotulo("ORDENADA =", 1090, 300, "#fde68a", seg(t, pr, pr + .4)); rotulo("MAIS FÁCIL DE ACHAR", 1090, 330, "#fde68a", seg(t, pr, pr + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "lista"), "ding"], [em(F7, "curto"), "pop"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const l = em(F7, "lista"), m = em(F7, "Missão");
     if (t < l + .5) for (let i = 0; i < 19; i++) { const x = 330 + (i % 5) * 175, y = 120 + Math.floor(i / 5) * 72, k = 1 - cl(seg(t, l, l + .5)); g.globalAlpha = k; g.fillStyle = "#fff"; rr(x - 75, y - 24, 150, 48, 10); g.fill(); g.globalAlpha = 1; }
     if (t > l) lista(360, 200, "CHAMADA", ["Ana", "Bruno", "Carla", "…", "+ 15"], seg(t, l, l + 1));
     leo({ x: 140, y: 620, s: .85, braco: t > l ? -2.4 : -.6, bracoE: t > l ? 2.4 : .3, olhar: 1, boca: t > l ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "histórico"), "pop"], [em(F8, "classificação"), "pop"], [em(F8, "fila"), "pop"]],
   draw(t, D) { ondeUso(t, F8, [["histórico", "💬", "Mensagens:", "da mais antiga à mais nova"], ["classificação", "🏆", "Campeonato:", "lista ordenada pelos pontos"], ["fila", "🖨️", "Fila de impressão:", "o primeiro enviado sai primeiro"]]); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "8º ano · 1º bimestre de 2027 · Missão 1", [LEO, BIA8]); } }
];

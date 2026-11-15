/* ================= 7º ano · 2027 · 1º bimestre · Missão 2 · Listas no programa ================= */
const MENINA7 = { camisa: "#f43f5e", cabelo: "longo" }, CAIO7 = { camisa: "#0ea5e9" };
const menina = o => boneco(Object.assign({}, MENINA7, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// caixa de item da lista com a posição embaixo
function itemLista(x, y, txt, pos, cor, k, hl) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); if (hl) { g.shadowColor = "#facc15"; g.shadowBlur = 26; }
  g.fillStyle = cor || "#fff"; rr(-70, -40, 140, 80, 14); g.fill(); g.shadowBlur = 0; g.fillStyle = NAVY; g.font = `800 ${txt.length > 6 ? 21 : 26}px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 10);
  if (pos) { g.fillStyle = hl ? "#facc15" : "#cbd5e1"; g.font = `800 22px ${F}`; g.fillText("#" + pos, 0, 72); } g.restore(); }
function lista(x0, y, itens, k, hl, w) { w = w || 170; itens.forEach((it, i) => itemLista(x0 + i * w, y, it, i + 1, "#fff", k === undefined ? 1 : seg(k, i * .12, i * .12 + .3), hl === i)); }
function nota(x, y, s, k) { if (k <= 0) return; g.save(); g.translate(x, y); g.scale(s * back(cl(k)), s * back(cl(k))); g.fillStyle = "#facc15"; g.beginPath(); g.ellipse(-12, 18, 14, 10, -.4, 0, 7); g.fill(); g.fillRect(-1, -30, 6, 48); g.beginPath(); g.moveTo(5, -30); g.quadraticCurveTo(26, -20, 20, 0); g.lineTo(5, -14); g.fill(); g.restore(); }

const FR = ["maçã", "uva", "caju", "açaí"];
const F0 = "Listas no programa: a playlist da festa!",
  F1 = "A Bia vai cuidar das músicas da festa da turma. Ela pensou em criar uma variável para cada música: música um, música dois, música três... São trinta músicas! Vai dar trabalho demais!",
  F2 = "Para isso existe a lista: uma variável só, que guarda vários itens em ordem. Como a playlist do celular.",
  F3 = "Cada item tem uma posição, contada a partir do um. Na lista frutas, com maçã, uva, caju e açaí, o item número três é o caju.",
  F4 = "O bloco tamanho conta quantos itens a lista tem: são quatro. E adicionar no fim coloca um item novo no final. Com a banana, agora são cinco.",
  F5 = "E o bloco para cada item repete os blocos de dentro uma vez para cada item da lista. Se a lista crescer, ele percorre os itens novos também.",
  F6 = "Cuidado: pedir o item número seis de uma lista com cinco itens dá problema, porque essa posição não existe.",
  F7 = "A Bia criou a lista festa e usou o para cada: o programa tocou as trinta músicas, uma por uma. Missão cumprida!",
  F8 = "Onde eu uso isso? Na playlist, no carrinho da loja on-line e no histórico do navegador. Tudo isso são listas!",
  F9 = "Agora é com vocês: abram a Missão 2 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "pop"], [2.2, "festa"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); ["🎵 1", "🎵 2", "🎵 3", "🎵 4"].forEach((m, i) => itemLista(340 + i * 200, 250, m, 0, "#fde68a", seg(t, .4 + i * .3, .7 + i * .3)));
     [0, 1, 2].forEach(i => nota(200 + i * 430 + Math.sin(t * 3 + i) * 20, 160 + Math.cos(t * 2 + i) * 20, 1.2, seg(t, .2, .6)));
     abertura(t, "7º ANO · MISSÃO 2", "Listas no programa", "A PLAYLIST", "DA FESTA!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "variável"), "pop"], [em(F1, "um"), "pop"], [em(F1, "dois"), "pop"], [em(F1, "três"), "pop"], [em(F1, "trinta"), "alerta"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F1, "um"), b = em(F1, "trinta");
     menina({ x: 220, y: 560, s: 1.0, braco: t > b ? -2.4 : -.6, bracoE: t > b ? 2.4 : .3, olhar: 1, boca: t > b ? "o" : "", pisca: pisca(t) });
     const n = t > b ? 30 : t > a ? Math.min(3, Math.floor((t - a) / .45) + 1) : 0;
     for (let i = 0; i < n; i++) { const c = i % 6, r = Math.floor(i / 6), k = t > b ? seg(t, b + i * .03, b + i * .03 + .2) : 1; itemLista(470 + c * 135, 140 + r * 80, "música" + (i + 1), 0, "#bfdbfe", k * .85); }
     if (t > b + .8) palavra("TRABALHO DEMAIS!", 820, 110, seg(t, b + .8, b + 1.2), 56); } },
 { chip: "LISTA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "lista"), "ding"], [em(F2, "ordem"), "pop"], [em(F2, "playlist"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const a = em(F2, "lista"), b = em(F2, "playlist");
     palavra("LISTA", 640, 110, seg(t, a, a + .4), 90); if (t > a + .3) cartao("UMA VARIÁVEL SÓ, VÁRIOS ITENS EM ORDEM", 640, 220, 760, "#7c3aed", seg(t, a + .3, a + .7));
     lista(305, 380, ["🎵 1", "🎵 2", "🎵 3", "🎵 4", "🎵 5"], t - a - .5, null, 170);
     if (t > b) { celular(1140, 360, .55, () => { g.fillStyle = "#1e293b"; g.fillRect(-70, -146, 140, 292); for (let i = 0; i < 6; i++) { g.fillStyle = i === 0 ? "#22c55e" : "#475569"; rr(-58, -120 + i * 42, 116, 32, 8); g.fill(); } }); } } },
 { chip: "POSIÇÃO", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "um"), "pop"], [em(F3, "maçã"), "pop"], [em(F3, "três"), "ding"], [em(F3, "caju", 1), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const a = em(F3, "maçã"), b = em(F3, "três"), c = em(F3, "caju", 1);
     palavra("POSIÇÃO: COMEÇA NO 1", 640, 110, seg(t, .3, .7), 60); comando("frutas", 200, 230, seg(t, a - .3, a), "#16a34a", 180);
     lista(330, 330, FR, t - a, t > b ? 2 : null, 200); if (t > b) { seta(730, 470, 730, 410, seg(t, b, b + .3)); comando("item nº 3 → caju", 730, 510, seg(t, c, c + .4), "#ca8a04", 320); } } },
 { chip: "TAMANHO E ADICIONAR", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "quatro"), "ding"], [em(F4, "adicionar"), "pop"], [em(F4, "banana"), "pop"], [em(F4, "cinco"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F4, "quatro"), b = em(F4, "banana"), c = em(F4, "cinco");
     const itens = t > b ? [...FR, "banana"] : FR; lista(240, 300, itens, undefined, t > b && t < c + .5 ? 4 : null, 200);
     comando("tamanho de frutas = " + (t > c ? 5 : 4), 640, 140, seg(t, a, a + .4), t > c ? "#16a34a" : "#2563eb", 440);
     if (t > em(F4, "adicionar")) comando("adicionar \"banana\" no fim", 640, 470, seg(t, em(F4, "adicionar"), em(F4, "adicionar") + .4), "#ea580c", 440); } },
 { chip: "PARA CADA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "para"), "pop"], [em(F5, "item"), "click"], [em(F5, "crescer"), "pop"], [em(F5, "novos"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const a = em(F5, "repete"), b = em(F5, "crescer");
     palavra("👉 PARA CADA ITEM", 640, 110, seg(t, .3, .7), 64); const itens = t > b ? [...FR, "banana", "manga"] : [...FR, "banana"];
     const at = t > a ? Math.floor((t - a) / .6) % itens.length : null; lista(140, 300, itens, undefined, at, 170);
     if (at !== null) { g.fillStyle = "#0f172a"; rr(440, 420, 400, 70, 14); g.fill(); g.fillStyle = "#4ade80"; g.font = `800 32px ${F}`; g.textAlign = "center"; g.fillText("mostrar: " + itens[at], 640, 467); } } },
 { chip: "CUIDADO!", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "seis"), "pop"], [em(F6, "problema"), "alerta"], [em(F6, "existe"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); const a = em(F6, "seis"), b = em(F6, "problema");
     lista(140, 300, [...FR, "banana"], undefined, null, 200); if (t > a) { g.save(); g.setLineDash([12, 8]); g.strokeStyle = "#fca5a5"; g.lineWidth = 4; rr(1070, 260, 140, 80, 14); g.stroke(); g.restore(); g.fillStyle = "#fca5a5"; g.font = `800 22px ${F}`; g.textAlign = "center"; g.fillText("#6", 1140, 372); }
     if (t > b) { xVermelho(1140, 300, 50, seg(t, b, b + .3)); cartao("ERRO: A POSIÇÃO 6 NÃO EXISTE", 640, 480, 640, "#dc2626", seg(t, b, b + .4)); } } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "festa"), "pop"], [em(F7, "cada"), "click"], [em(F7, "trinta"), "pop"], [em(F7, "cumprida"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const a = em(F7, "tocou"), c = em(F7, "Missão");
     comando("festa = 🎵1, 🎵2, ... 🎵30", 640, 160, seg(t, .3, .7), "#7c2d12", 520); const n = t > a ? Math.min(30, Math.floor((t - a) * 10) + 1) : 0;
     menina({ x: 220, y: 560, s: 1.0, braco: Math.sin(t * 8) * .6 - 1.8, bracoE: -Math.sin(t * 8) * .6 + 1.8, olhar: 1, boca: "riso", pisca: pisca(t) });
     if (n) { g.fillStyle = "#0f172a"; rr(460, 260, 520, 120, 16); g.fill(); g.fillStyle = "#4ade80"; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText("▶ tocando 🎵 " + n + " de 30", 720, 335); nota(1050, 300, 1, 1); }
     if (t > c) cumprida(t, c); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "playlist"), "pop"], [em(F8, "carrinho"), "pop"], [em(F8, "histórico"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 640, 110, seg(t, 0, .4), 50);
     [["🎵 PLAYLIST", "playlist", "#16a34a"], ["🛒 CARRINHO", "carrinho", "#ea580c"], ["🕘 HISTÓRICO", "histórico", "#2563eb"]].forEach(([n, w, c], i) => { const t0 = em(F8, w), k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 260 + i * 380;
       g.save(); g.translate(x, 340); g.scale(k, k); g.fillStyle = "#fff"; rr(-150, -110, 300, 220, 18); g.fill(); for (let j = 0; j < 3; j++) { g.fillStyle = "#e2e8f0"; rr(-120, -60 + j * 52, 240, 40, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 18px ${F}`; g.textAlign = "left"; g.fillText((j + 1) + ".  item", -104, -33 + j * 52); } g.restore();
       comando(n, x, 500, seg(t, t0 + .1, t0 + .5), c, 280); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "7º ano · 1º bimestre de 2027 · Missão 2", [MENINA7, CAIO7]); } }
];

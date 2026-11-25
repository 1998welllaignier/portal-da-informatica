/* ================= 6º ano · 2027 · 1º bimestre · Missão 6 · Boa convivência na rede ================= */
const GABI = { camisa: "#a855f7", cabelo: "longo" }, RAFA = { camisa: "#ef4444" };
const gabi = o => boneco(Object.assign({}, GABI, o)), rafa = o => boneco(Object.assign({}, RAFA, o));
const em = (f, w, n) => { const p = f.split(/\s+/); let c = 0; const i = p.findIndex(x => x.toLowerCase().replace(/[^\wà-ú]/g, "").startsWith(w.toLowerCase()) && c++ === (n || 0)); return Math.max(0, i) / 2.55 + .35; };
// balão de mensagem de chat
function msg(x, y, txt, cor, k, dir, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 380; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-w / 2, -26, w, 52, 16); g.fill(); g.beginPath(); const bx = dir > 0 ? w / 2 - 20 : -w / 2 + 20; g.moveTo(bx, 18); g.lineTo(bx + 14 * dir, 34); g.lineTo(bx - 10 * dir, 22); g.fill();
  g.fillStyle = cor === "#ffffff" || cor === "#dcfce7" ? NAVY : "#fff"; g.font = `700 21px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 8); g.restore(); }
// janela do grupo
function grupo(x, y, w, h, titulo, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#e5ddd5"; rr(-w / 2, -h / 2, w, h, 18); g.fill(); g.fillStyle = "#075e54"; rr(-w / 2, -h / 2, w, 54, 18); g.fill(); g.fillRect(-w / 2, -h / 2 + 30, w, 24);
  g.fillStyle = "#fff"; g.font = `800 22px ${F}`; g.textAlign = "left"; g.fillText("👥 " + titulo, -w / 2 + 20, -h / 2 + 35); g.restore(); }
function regra(x, y, ic, txt, cor, k, w) { if (k <= 0) return; const z = back(cl(k)); w = w || 520; g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = cor; rr(-w / 2, -34, w, 68, 16); g.fill(); g.font = `36px ${F}`; g.textAlign = "left"; g.fillText(ic, -w / 2 + 16, 13); g.fillStyle = "#fff"; g.font = `800 23px ${F}`; g.fillText(txt, -w / 2 + 70, 9); g.restore(); }
function fogo(x, y, t, k) { if (k <= 0) return; g.save(); g.globalAlpha = k; g.font = `54px ${F}`; g.textAlign = "center"; for (let i = 0; i < 3; i++) g.fillText("🔥", x + (i - 1) * 54, y + Math.sin(t * 8 + i * 2) * 8); g.restore(); }

const F0 = "Boa convivência na rede: o grupo da turma pegou fogo!",
  F1 = "O grupo da turma virou uma confusão: o Rafa escreveu tudo em maiúsculas, alguém postou uma foto da Gabi sem pedir, e a briga só cresceu. E agora?",
  F2 = "Do outro lado da tela tem gente de verdade. As regras de boa educação na internet se chamam netiqueta: net é rede, e etiqueta são as boas maneiras.",
  F3 = "Fale com respeito, como falaria pessoalmente. Não escreva tudo em maiúsculas, porque parece grito. E pense antes de postar: o que vai para a internet pode ficar lá para sempre.",
  F4 = "Antes de postar a foto de alguém, peça permissão: a imagem é da pessoa. E a senha é como a chave de casa: não se passa nem para o melhor amigo. Senha forte é comprida e mistura letras, números e símbolos.",
  F5 = "Atenção ao perigo! Desconhecido pedindo foto, endereço ou segredo? Pare a conversa, não responda e conte para um adulto de confiança. Mensagem com prêmio fácil ou muita pressa é golpe: não clique no link.",
  F6 = "Viu alguém sendo ofendido? Não compartilhe. Apoie o colega, guarde o print, que é a foto da tela, e denuncie para um adulto.",
  F7 = "O Rafa pediu desculpas, a foto foi apagada, e a turma combinou as regras do grupo. A paz voltou. Missão cumprida!",
  F8 = "Onde eu uso isso? No grupo da turma no WhatsApp, no chat dos jogos on-line e antes de postar a foto da festa.",
  F9 = "Agora é com vocês: abram a Missão 6 no portal!";

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.5, "pop"], [.9, "pop"], [1.3, "alerta"], [2.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); grupo(640, 330, 520, 300, "6º ANO A", seg(t, .2, .6)); msg(560, 290, "KKKKK", "#ffffff", seg(t, .5, .8), -1, 200); msg(720, 350, "PAREM!!!", "#dcfce7", seg(t, .8, 1.1), 1, 220); fogo(640, 190, t, seg(t, 1.1, 1.5));
     abertura(t, "6º ANO · MISSÃO 6", "Boa convivência na rede", "O GRUPO DA TURMA", "PEGOU FOGO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "maiúsculas"), "alerta"], [em(F1, "foto"), "pop"], [em(F1, "briga"), "alerta"], [em(F1, "agora"), "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const m = em(F1, "maiúsculas"), f = em(F1, "foto"), b = em(F1, "briga"), a = em(F1, "agora");
     grupo(700, 300, 600, 400, "6º ANO A", seg(t, .1, .5));
     msg(640, 200, "VOCÊS SÃO MUITO CHATOS!!!", "#ffffff", seg(t, m, m + .4), -1, 440);
     if (t > f) { g.fillStyle = "#fff"; rr(780, 240, 170, 120, 10); g.fill(); g.font = `70px ${F}`; g.textAlign = "center"; g.fillText("📸", 865, 325); rotulo("SEM PERMISSÃO", 865, 390, "#fca5a5", seg(t, f, f + .4)); }
     if (t > b) { msg(620, 420, "😡😡😡", "#ffffff", seg(t, b, b + .3), -1, 180); fogo(700, 120, t, seg(t, b, b + .4)); }
     gabi({ x: 170, y: 610, s: .95, braco: -.6, bracoE: .3, olhar: 1, boca: t > f ? "o" : "", pisca: pisca(t) });
     if (t > a) palavra("E AGORA?", 700, 540, seg(t, a, a + .4), 50); } },
 { chip: "NETIQUETA", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "gente"), "pop"], [em(F2, "netiqueta"), "ding"], [em(F2, "net", 1), "pop"], [em(F2, "etiqueta"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const gt = em(F2, "gente"), n = em(F2, "netiqueta"), n2 = em(F2, "net", 1), e2 = em(F2, "etiqueta");
     monitor(330, 380, 1, () => { g.font = `90px ${F}`; g.textAlign = "center"; g.fillText("🙂", 0, -75); });
     if (t > gt) { gabi({ x: 330, y: 610, s: .6, braco: -.5, bracoE: .3, olhar: 1, pisca: pisca(t) }); rotulo("GENTE DE VERDADE", 330, 140, "#fde68a", seg(t, gt, gt + .4)); }
     palavra("NETIQUETA", 880, 160, seg(t, n, n + .4), 70);
     if (t > n2) comando("NET = REDE", 880, 300, seg(t, n2, n2 + .4), "#2563eb", 340);
     if (t > e2) comando("ETIQUETA = BOAS MANEIRAS", 880, 390, seg(t, e2, e2 + .4), "#16a34a", 440); } },
 { chip: "AS REGRAS", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "respeito"), "ding"], [em(F3, "maiúsculas"), "alerta"], [em(F3, "grito"), "pop"], [em(F3, "pense"), "ding"], [em(F3, "sempre"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const r = em(F3, "respeito"), m = em(F3, "maiúsculas"), gr = em(F3, "grito"), p = em(F3, "pense");
     regra(640, 150, "🙂", "Fale com respeito", "#16a34a", seg(t, r, r + .4), 640);
     regra(640, 260, "🔠", "NÃO ESCREVA TUDO EM MAIÚSCULAS", "#dc2626", seg(t, m, m + .4), 640);
     if (t > gr) { g.save(); g.globalAlpha = seg(t, gr, gr + .3); g.font = `56px ${F}`; g.textAlign = "center"; g.fillText("📢", 1030, 280); g.restore(); rotulo("PARECE GRITO!", 1030, 330, "#fca5a5", seg(t, gr, gr + .4)); }
     regra(640, 400, "🤔", "Pense antes de postar", "#2563eb", seg(t, p, p + .4), 640);
     if (t > p + 1.2) rotulo("PODE FICAR LÁ PARA SEMPRE", 640, 470, "#fde68a", seg(t, p + 1.2, p + 1.6)); } },
 { chip: "FOTO E SENHA", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "permissão"), "ding"], [em(F4, "senha"), "pop"], [em(F4, "chave"), "pop"], [em(F4, "amigo"), "alerta"], [em(F4, "forte"), "ding"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); const pe = em(F4, "permissão"), s = em(F4, "senha"), ch = em(F4, "chave"), fo = em(F4, "forte");
     regra(330, 140, "📸", "Peça permissão", "#16a34a", seg(t, .3, .7), 480); if (t > pe) msg(330, 240, "Posso postar a foto?", "#ffffff", seg(t, pe, pe + .4), 1, 340);
     if (t > s) regra(950, 140, "🔑", "Senha é só sua", "#ca8a04", seg(t, s, s + .4), 480);
     if (t > ch) { g.save(); g.globalAlpha = seg(t, ch, ch + .3); g.font = `80px ${F}`; g.textAlign = "center"; g.fillText("🗝️", 870, 290); g.fillText("🏠", 1030, 290); g.restore(); }
     if (t > fo) { comando("123456", 380, 400, seg(t, fo, fo + .4), "#dc2626", 220); xVermelho(500, 400, 30, seg(t, fo + .2, fo + .6)); comando("Gato#Azul2027!", 900, 400, seg(t, fo + .5, fo + .9), "#16a34a", 320); visto(1080, 400, 34, seg(t, fo + .7, fo + 1.1));
       rotulo("COMPRIDA + LETRAS + NÚMEROS + SÍMBOLOS", 640, 490, "#fde68a", seg(t, fo + 1, fo + 1.4)); } } },
 { chip: "PERIGO!", fala: F5, sfx: [[.1, "alerta"], [em(F5, "Desconhecido"), "misterio"], [em(F5, "Pare"), "ding"], [em(F5, "adulto"), "ding"], [em(F5, "golpe"), "alerta"], [em(F5, "link"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); const d = em(F5, "Desconhecido"), p = em(F5, "Pare"), a = em(F5, "adulto"), go = em(F5, "golpe");
     palavra("ATENÇÃO AO PERIGO!", 590, 100, seg(t, 0, .4), 48);
     if (t > d && t < go - .8) { msg(400, 210, "Me manda seu endereço?", "#ffffff", seg(t, d, d + .4), -1, 380); msg(400, 290, "É segredo, tá?", "#ffffff", seg(t, d + .8, d + 1.2), -1, 260); g.font = `70px ${F}`; g.textAlign = "center"; g.fillText("🕵️", 130, 260); }
     if (t > p && t < go - .8) { regra(900, 200, "✋", "PARE e não responda", "#dc2626", seg(t, p, p + .4), 440); if (t > a) regra(900, 300, "🙋", "Conte a um adulto", "#16a34a", seg(t, a, a + .4), 440); }
     if (t > go - .8) { msg(420, 230, "🎁 GANHOU UM CELULAR! SÓ HOJE!", "#ffffff", seg(t, go - .8, go - .4), -1, 480); comando("GOLPE!", 900, 230, seg(t, go, go + .4), "#dc2626", 220); comando("🔗 NÃO CLIQUE NO LINK", 640, 360, seg(t, go + .6, go + 1), "#7c3aed", 440); } } },
 { chip: "SE ALGUÉM FOR OFENDIDO", fala: F6, sfx: [[.1, "whoosh"], [em(F6, "compartilhe"), "alerta"], [em(F6, "Apoie"), "ding"], [em(F6, "print"), "pop"], [em(F6, "denuncie"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const c = em(F6, "compartilhe"), ap = em(F6, "Apoie"), pr = em(F6, "print"), de = em(F6, "denuncie");
     [["🚫", "NÃO COMPARTILHE", "#dc2626", c], ["🤝", "APOIE O COLEGA", "#16a34a", ap], ["📱", "GUARDE O PRINT", "#2563eb", pr], ["📣", "DENUNCIE", "#ca8a04", de]].forEach(([ic, n, cor, t0], i) => regra(640, 130 + i * 100, ic, n, cor, seg(t, t0, t0 + .4), 560));
     if (t > pr + .6) rotulo("PRINT = FOTO DA TELA", 1060, 330, "#fde68a", seg(t, pr + .6, pr + 1)); } },
 { chip: "A SOLUÇÃO", fala: F7, sfx: [[.1, "whoosh"], [em(F7, "desculpas"), "ding"], [em(F7, "apagada"), "pop"], [em(F7, "regras"), "pop"], [em(F7, "paz"), "ding"], [em(F7, "Missão"), "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); const d = em(F7, "desculpas"), ap = em(F7, "apagada"), r = em(F7, "regras"), m = em(F7, "Missão");
     grupo(640, 280, 560, 360, "6º ANO A", 1);
     msg(580, 190, "Desculpa, galera 🙏", "#ffffff", seg(t, d, d + .4), -1, 300);
     msg(680, 260, "Foto apagada ✅", "#dcfce7", seg(t, ap, ap + .4), 1, 280);
     msg(640, 340, "📌 Regras do grupo: respeito!", "#ffffff", seg(t, r, r + .4), -1, 420);
     rafa({ x: 170, y: 610, s: .85, braco: -.6, bracoE: .3, olhar: 1, boca: t > d ? "riso" : "", pisca: pisca(t) }); gabi({ x: 1110, y: 610, s: .85, braco: t > r ? -2.4 : -.6, bracoE: t > r ? 2.4 : .3, olhar: -1, boca: t > ap ? "riso" : "", pisca: pisca(t) });
     if (t > m) cumprida(t, m); } },
 { chip: "ONDE EU USO ISSO?", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "grupo"), "pop"], [em(F8, "jogos"), "pop"], [em(F8, "festa"), "pop"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra("ONDE EU USO ISSO?", 600, 100, seg(t, 0, .4), 50);
     [["grupo", "💬", "GRUPO DA TURMA", "#16a34a"], ["jogos", "🎮", "CHAT DOS JOGOS", "#7c3aed"], ["festa", "🎉", "FOTO DA FESTA", "#ea580c"]].forEach(([w, ic, n, c], i) => { const t0 = em(F8, w), x = 260 + i * 380, k = seg(t, t0, t0 + .4); if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, 290); g.scale(z, z); g.fillStyle = c; rr(-110, -80, 220, 160, 18); g.fill(); g.font = `72px ${F}`; g.textAlign = "center"; g.fillText(ic, 0, 25); g.restore(); comando(n, x, 450, seg(t, t0 + .1, t0 + .5), c, 320); }); } },
 { chip: "", fala: F9, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 6", [GABI, RAFA]); } }
];

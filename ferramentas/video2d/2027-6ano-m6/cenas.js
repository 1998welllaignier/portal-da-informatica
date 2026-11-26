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
/* ===== peças do "grupo da turma" (6º M6 v2) ===== */
const RAFA = { camisa: "#ef4444" }, GABI = { camisa: "#f472b6", cabelo: "longo" }, TIO = { camisa: "#334155" };
const rafa = o => boneco(Object.assign({}, RAFA, o)), gabi = o => boneco(Object.assign({}, GABI, o));
// tela de conversa grande (o "celular" da cena): msgs = [[quem, texto, cor, lado]]
function chat(x, y, w, h, titulo, msgs, n, t, fogo) { g.save(); g.translate(x, y); g.fillStyle = "#111827"; rr(-w / 2 - 14, -h / 2 - 14, w + 28, h + 28, 28); g.fill(); g.save(); rr(-w / 2, -h / 2, w, h, 18); g.clip();
  g.fillStyle = "#e7f6ee"; g.fillRect(-w / 2, -h / 2, w, h); g.fillStyle = "#075e54"; g.fillRect(-w / 2, -h / 2, w, 54); g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText("👥 " + titulo, -w / 2 + 16, -h / 2 + 35);
  let yy = -h / 2 + 76; msgs.slice(0, n).forEach(([q, txt, cor, lado], i) => { g.font = `700 17px ${F}`; const tw = Math.min(w - 90, g.measureText(txt).width + 26), bx = lado ? w / 2 - 16 - tw : -w / 2 + 16;
    g.fillStyle = lado ? "#dcf8c6" : "#fff"; rr(bx, yy, tw, 54, 12); g.fill(); g.fillStyle = cor; g.font = `800 14px ${F}`; g.fillText(q, bx + 12, yy + 19); g.fillStyle = NAVY; g.font = `700 17px ${F}`; g.fillText(txt, bx + 12, yy + 43); yy += 64; });
  g.restore(); if (fogo > 0) chamas(0, h / 2 - 10, w * .9, fogo, t); g.restore(); }
function chamas(x, y, w, k, t) { for (let i = 0; i < 14; i++) { const xx = x - w / 2 + (i + .5) * w / 14, hh = (40 + 50 * Math.abs(Math.sin(t * 5 + i * 1.7))) * k; g.fillStyle = ["#f97316", "#facc15", "#ef4444"][i % 3];
  g.beginPath(); g.moveTo(xx - 22 * k, y); g.quadraticCurveTo(xx, y - hh * 1.4, xx + 22 * k, y); g.fill(); } }
function megafone(x, y, s, t) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#ef4444"; g.beginPath(); g.moveTo(-40, -20); g.lineTo(40, -50); g.lineTo(40, 50); g.lineTo(-40, 20); g.closePath(); g.fill(); g.fillStyle = "#334155"; rr(-60, -20, 24, 40, 6); g.fill();
  g.strokeStyle = "#fde047"; g.lineWidth = 5; for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(50, 0, 20 + i * 18 + (t * 40) % 18, -.7, .7); g.stroke(); } g.restore(); }
function praca(t) { // praça da Cidade da Rede: céu, prédios ao fundo, cabos com mensagens passando, chão
  const gr = g.createLinearGradient(0, -300, 0, 900); gr.addColorStop(0, "#7dd3fc"); gr.addColorStop(1, "#e0f2fe"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1920);
  [-500, -200, 1300, 1600].forEach((x, i) => predio(x, 560, 1.3, ["#94a3b8", "#64748b", "#94a3b8", "#64748b"][i]));
  g.strokeStyle = "#334155"; g.lineWidth = 3; g.beginPath(); g.moveTo(-600, 120); g.quadraticCurveTo(640, 220, 1900, 120); g.stroke();
  for (let i = 0; i < 6; i++) { const k = ((t * .15 + i / 6) % 1), x = -600 + k * 2500, y = 120 + Math.sin(k * Math.PI) * 70; g.fillStyle = "#fff"; rr(x - 22, y - 14, 44, 28, 8); g.fill(); g.fillStyle = "#22c55e"; g.font = `16px ${F}`; g.textAlign = "center"; g.fillText("💬", x, y + 6); }
  g.fillStyle = "#86efac"; g.fillRect(-800, 600, 2880, 600); g.fillStyle = "#4ade80"; g.fillRect(-800, 600, 2880, 10); }
function regra(ic, txt, sub, x, y, k, cor) { cartaoC(ic + " " + txt, x, y, 820, cor || "#fff", k, sub); }
const F0 = "Boa convivência na rede: o grupo da turma pegou fogo!",
  F1 = "Era para ser só o grupo da turma. Mas o Rafa escreveu tudo em letra maiúscula, alguém postou uma foto da Gabi sem pedir, e a briga só cresceu. A Gabi ficou triste, e o grupo pegou fogo!",
  F2 = "Aí o robozinho Bit lembrou de uma coisa importante: do outro lado da tela tem gente de verdade, com sentimentos. Cada mensagem chega numa pessoa.",
  F3 = "Por isso, na internet também existem regras de educação. Elas se chamam netiqueta: net, que quer dizer rede em inglês, mais etiqueta, que são as boas maneiras.",
  F4 = "Regra número um: fale com respeito, como falaria pessoalmente. Regra número dois: não escreva tudo em maiúsculas. Na internet, letra maiúscula parece grito!",
  F5 = "Regra três: pense antes de postar. Postar é publicar uma mensagem, foto ou vídeo. E o que vai para a internet pode ficar lá para sempre e ser copiado.",
  F6 = "Regra quatro: peça permissão antes de postar a foto de alguém. A imagem é da pessoa, e é ela quem decide.",
  F7 = "Regra cinco: não passe a sua senha, nem para o melhor amigo. A senha é como a chave de casa: é só sua. E senha forte é comprida e mistura letras maiúsculas, minúsculas, números e símbolos. Nunca use o seu nome, a sua data de nascimento, o nome do seu time ou um, dois, três, quatro, cinco, seis.",
  F8 = "Dados pessoais, como o nome completo, o endereço, o telefone, a escola e onde você está agora, não se passam para quem você não conhece. Se um desconhecido pedir foto, endereço ou pedir para guardar segredo de um adulto, é sinal de perigo: pare a conversa, não responda e conte para um adulto de confiança.",
  F9 = "E se alguém for ofendido na rede? Não compartilhe a ofensa. Apoie o colega. Guarde o print, que é a foto da tela e serve de prova. E conte para um adulto ou use o botão de denunciar da rede social.",
  F10 = "Cuidado também com o golpe! Ele chega com prêmio fácil, como você ganhou um celular, com pressa, só hoje, ou pedindo senha ou código. Não clique no link, não responda e conte para um adulto de confiança.",
  F11 = "No grupo da turma, o Rafa pediu desculpas, a foto foi apagada e a Gabi voltou a sorrir. O fogo apagou, e o grupo voltou a ser legal. Missão cumprida!",
  F12 = "Onde eu uso isso? No grupo da turma no WhatsApp, a netiqueta evita brigas. Nos jogos on-line, tem desconhecidos: não passe dados pessoais pelo chat. E antes de postar a foto da festa, pergunte se os amigos concordam.",
  F13 = "Agora é com vocês: abram a Missão 6 no portal e sejam cidadãos de respeito na rede!";
const L66 = { 4: "Regra número 1: fale com respeito, como falaria pessoalmente. Regra número 2: não escreva tudo em maiúsculas. Na internet, letra maiúscula parece grito!",
  5: "Regra 3: pense antes de postar. Postar é publicar uma mensagem, foto ou vídeo. E o que vai para a internet pode ficar lá para sempre e ser copiado.",
  6: "Regra 4: peça permissão antes de postar a foto de alguém. A imagem é da pessoa, e é ela quem decide.",
  7: "Regra 5: não passe a sua senha, nem para o melhor amigo. A senha é como a chave de casa: é só sua. E senha forte é comprida e mistura letras maiúsculas, minúsculas, números e símbolos. Nunca use o seu nome, a sua data de nascimento, o nome do seu time ou 123456.",
  10: "Cuidado também com o golpe! Ele chega com prêmio fácil (“você ganhou um celular!”), com pressa (“só hoje!”) ou pedindo senha ou código. Não clique no link, não responda e conte para um adulto de confiança." };
const MSG = [["Rafa", "VOCÊS SÃO MUITO LENTOS!!!", "#dc2626", 0], ["Alguém", "🖼️ olha a foto da Gabi kkk", "#7c3aed", 0], ["Gabi", "Apaga, por favor 😢", "#db2777", 1], ["Caio", "PARA COM ISSO!!!", "#0891b2", 0]];
const MSG2 = [["Rafa", "Desculpa, galera. Exagerei 😔", "#dc2626", 0], ["Alguém", "Apaguei a foto. Foi mal, Gabi!", "#7c3aed", 0], ["Gabi", "Tudo bem! Valeu 😊", "#db2777", 1]];

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "alerta"], [1.1, "pop"], [1.7, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.5, 640, 330, 1]]); praca(t); chat(640, 330, 360, 400, "Turma 6º A 😎", MSG, Math.min(4, Math.floor(t * 3)), t, seg(t, .5, 1.5)); g.restore();
     abertura(t, "6º ANO · MISSÃO 6", "Boa convivência na rede", "O GRUPO DA TURMA", "PEGOU FOGO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "maiúscula"), "alerta"], [em(F1, "foto"), "foto"], [em(F1, "briga"), "alerta"], [em(F1, "fogo"), "zum"]],
   draw(t, D) { const ma = em(F1, "maiúscula"), fo = em(F1, "foto"), br = em(F1, "briga"), tr = em(F1, "triste"), fg = em(F1, "fogo"); const n = t > br ? 4 : t > fo + .5 ? 3 : t > fo ? 2 : t > ma ? 1 : 0;
     g.save(); camera(t, [[0, 640, 360, 1], [ma, 640, 260, 1.35], [br, 640, 320, 1.1], [fg, 640, 360, 1]]); praca(t); chat(640, 350, 420, 380, "Turma 6º A 😎", MSG, n, t, seg(t, br, fg + .5));
     rafa({ x: 230, y: 680, s: .95, olhar: 1, braco: -1.6, bracoE: .3, boca: "o", pisca: pisca(t) }); gabi({ x: 1050, y: 680, s: .95, olhar: -1, braco: .3, bracoE: .3, boca: t > tr ? "o" : "", pisca: pisca(t + .4) }); g.restore();
     if (t > tr) emo("😢", 1050, 470, 40); if (t > fg) palavra("O GRUPO PEGOU FOGO!", 560, 100, seg(t, fg, fg + .4), 56); } },
 { chip: "GENTE DE VERDADE", fala: F2, sfx: [[.1, "whoosh"], [em(F2, "Bit"), "ding"], [em(F2, "gente"), "pop"], [em(F2, "pessoa"), "pop"]],
   draw(t, D) { const bi = em(F2, "Bit"), ge = em(F2, "gente"), pe = em(F2, "pessoa");
     g.save(); camera(t, [[0, 640, 360, 1], [ge, 640, 380, 1.1]]); praca(t);
     [["#ef4444", ""], ["#f472b6", "longo"], ["#0891b2", ""], ["#7c3aed", "longo"]].forEach(([c, cab], i) => { const k = seg(t, ge + i * .25, ge + .5 + i * .25); if (k <= 0) return; boneco({ x: 260 + i * 250, y: 640, s: .9, camisa: c, cabelo: cab, olhar: 1, braco: .2, bracoE: .3, boca: i === 1 ? "o" : "riso", pisca: pisca(t + i) }); celular(300 + i * 250, 520, .35, () => { g.fillStyle = "#075e54"; g.fillRect(-70, -146, 140, 40); }); });
     robozinho(1150, 600, 1.3, t, true); g.restore();
     if (t > bi) balao("Do outro lado tem GENTE de verdade!", 900, 150, seg(t, bi, bi + .3)); if (t > pe) etiqueta("cada mensagem chega numa pessoa ❤️", 520, 220, 520, 380, seg(t, pe, pe + .4)); } },
 { chip: "NETIQUETA", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "netiqueta"), "ding"], [em(F3, "net"), "pop"], [em(F3, "etiqueta", 1), "pop"]],
   draw(t, D) { const ne = em(F3, "netiqueta"), nt = em(F3, "net"), et = em(F3, "etiqueta", 1); fundoEscuro(t, "#0e7490");
     palavra("NETIQUETA", 640, 120, seg(t, ne, ne + .4), 84);
     if (t > nt) cartaoC("🌐 NET = rede (em inglês)", 380, 300, 460, "#cffafe", seg(t, nt, nt + .4)); if (t > et) { palavra("+", 640, 300, 1, 60); cartaoC("🎩 ETIQUETA = boas maneiras", 900, 300, 460, "#fef9c3", seg(t, et, et + .4)); }
     if (t > et + .8) rotulo("= as boas maneiras na internet", 640, 420, "#fde68a", seg(t, et + .8, et + 1.2)); robozinho(1150, 560, 1.1, t, true); } },
 { chip: "REGRAS 1 E 2", fala: F4, legenda: L66[4], sfx: [[.1, "whoosh"], [em(F4, "respeito"), "ding"], [em(F4, "maiúsculas"), "alerta"], [em(F4, "grito"), "zum"]],
   draw(t, D) { const re = em(F4, "respeito"), ma = em(F4, "maiúsculas"), gr = em(F4, "maiúscula", 1); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 360, 1.08], [em(F4, "maiúsculas"), 640, 380, 1.02], [em(F4, "grito"), 700, 400, 1.06]]);
     if (t > re) regra("🙂", "1. Fale com respeito", "como falaria pessoalmente", 640, 150, seg(t, re, re + .4), "#dcfce7");
     if (t > ma) regra("🔠", "2. Não escreva TUDO EM MAIÚSCULAS", "na internet, parece GRITO", 640, 280, seg(t, ma, ma + .4), "#fee2e2");
     if (t > gr) { megafone(420, 450, 1.3, t); g.fillStyle = "#fff"; g.font = `900 ${44 + Math.sin(t * 20) * 3}px ${F}`; g.textAlign = "left"; g.fillText("OI, TUDO BEM???", 520, 465); rotulo("parece que está gritando! 😖", 760, 520, "#fecaca", 1); }
     rafa({ x: 1150, y: 640, s: .8, olhar: -1, braco: t > gr ? -2.6 : .2, bracoE: t > gr ? 2.6 : .3, boca: t > gr ? "o" : "", pisca: pisca(t) });  g.restore(); } },
 { chip: "REGRA 3", fala: F5, legenda: L66[5], sfx: [[.1, "whoosh"], [em(F5, "pense"), "ding"], [em(F5, "Postar"), "pop"], [em(F5, "sempre"), "misterio"], [em(F5, "copiado"), "pop"]],
   draw(t, D) { const pe = em(F5, "pense"), po = em(F5, "Postar"), se = em(F5, "sempre"), co = em(F5, "copiado"); fundoEscuro(t, "#4c1d95");
     if (t > pe) regra("🤔", "3. Pense antes de postar", "", 640, 140, seg(t, pe, pe + .4), "#ede9fe");
     if (t > po) cartaoC("POSTAR = publicar mensagem, foto ou vídeo", 640, 260, 760, "#fff", seg(t, po, po + .4));
     if (t > se) { const n = t > co ? Math.min(12, Math.floor((t - co) * 8) + 1) : 1; for (let i = 0; i < n; i++) celular(240 + (i % 6) * 160, 420 + Math.floor(i / 6) * 0, .45 - Math.floor(i / 6) * .0, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); emo("📸", 0, 10, 70); });
       rotulo(t > co ? "copiado, copiado, copiado… 😱" : "pode ficar lá para sempre", 640, 560, "#fde68a", 1); } } },
 { chip: "REGRA 4", fala: F6, legenda: L66[6], sfx: [[.1, "whoosh"], [em(F6, "permissão"), "ding"], [em(F6, "imagem"), "foto"], [em(F6, "decide"), "pop"]],
   draw(t, D) { const pe = em(F6, "permissão"), im = em(F6, "imagem"), de = em(F6, "decide");
     g.save(); camera(t, [[0, 640, 360, 1], [im, 760, 400, 1.15]]); praca(t); rafa({ x: 420, y: 680, s: 1, olhar: 1, braco: -1.4, bracoE: .3, pisca: pisca(t) }); gabi({ x: 860, y: 680, s: 1, olhar: -1, braco: t > de ? -2.4 : .3, bracoE: .3, boca: t > de ? "riso" : "", pisca: pisca(t + .3) });
     celular(520, 480, .55, () => { g.fillStyle = "#e0f2fe"; g.fillRect(-70, -146, 140, 292); emo("📸", 0, 10, 70); }); g.restore();
     if (t > pe) regra("📸", "4. Peça permissão antes de postar foto de alguém", "", 640, 110, seg(t, pe, pe + .4), "#fce7f3");
     if (t > pe + .5) balao("Posso postar essa foto? 🙂", 460, 220, seg(t, pe + .5, pe + .8)); if (t > de) balao("Pode sim! 👍", 900, 280, seg(t, de, de + .3)); } },
 { chip: "REGRA 5 · SENHA", fala: F7, legenda: L66[7], sfx: [[.1, "whoosh"], [em(F7, "senha"), "ding"], [em(F7, "chave"), "pop"], [em(F7, "forte"), "ding"], [em(F7, "Nunca"), "alerta"]],
   draw(t, D) { const se = em(F7, "senha"), ch = em(F7, "chave"), fo = em(F7, "forte"), nu = em(F7, "Nunca"); fundoEscuro(t, "#713f12"); g.save(); camera(t, [[0, 640, 330, 1.1], [em(F7, "forte"), 640, 360, 1], [em(F7, "Nunca"), 640, 380, 1.04]]);
     if (t < fo) { if (t > se) regra("🔑", "5. Não passe a senha", "nem para o melhor amigo", 640, 140, seg(t, se, se + .4), "#fef3c7"); if (t > ch) { cadeado(460, 400, 1.6, false); rotulo("a senha é como a chave de casa: é só sua", 800, 410, "#fde68a", seg(t, ch, ch + .4)); } }
     else { palavra("SENHA FORTE", 640, 100, seg(t, fo, fo + .4), 66); cartaoC("✅ Sol#Lua2027!Praia", 640, 230, 820, "#bbf7d0", seg(t, fo, fo + .4), "comprida + maiúsculas + minúsculas + números + símbolos");
       if (t > nu) ["❌ seu nome", "❌ data de nascimento", "❌ nome do time", "❌ 123456"].forEach((x, i) => cartaoC(x, 420 + (i % 2) * 440, 370 + Math.floor(i / 2) * 90, 400, "#fecaca", seg(t, nu + i * .25, nu + .4 + i * .25))); }
     robozinho(1150, 570, 1.1, t, true);  g.restore(); } },
 { chip: "DADOS PESSOAIS · PERIGO", fala: F8, sfx: [[.1, "whoosh"], [em(F8, "Dados"), "ding"], [em(F8, "desconhecido"), "alerta"], [em(F8, "perigo"), "alerta"], [em(F8, "pare"), "pop"], [em(F8, "adulto"), "ding"]],
   draw(t, D) { const da = em(F8, "Dados"), de = em(F8, "desconhecido"), pe = em(F8, "perigo"), pa = em(F8, "pare"), ad = em(F8, "adulto"); fundoEscuro(t, "#7f1d1d");
     if (t < de) { palavra("DADOS PESSOAIS", 640, 100, seg(t, da, da + .4), 62); ["🪪 nome completo", "🏠 endereço", "📞 telefone", "🏫 escola", "📍 onde você está"].forEach((x, i) => cartaoC(x, 260 + (i % 3) * 380, 220 + Math.floor(i / 3) * 120, 340, "#fee2e2", seg(t, da + .3 + i * .2, da + .7 + i * .2))); rotulo("não se passam para quem você não conhece", 640, 460, "#fde68a", seg(t, da + 1.2, da + 1.6)); }
     else { chat(420, 330, 400, 360, "Desconhecido", [["???", "Me manda uma foto sua?", "#dc2626", 0], ["???", "Qual é o seu endereço?", "#dc2626", 0], ["???", "Não conta pra ninguém, tá?", "#dc2626", 0]], Math.min(3, 1 + Math.floor((t - de) * 2)), t, 0);
       if (t > pe) palavra("⚠️ PERIGO!", 920, 160, seg(t, pe, pe + .4), 64); if (t > pa) { cartaoC("✋ PARE a conversa", 940, 250, 400, "#fff", seg(t, pa, pa + .4)); cartaoC("🤐 NÃO responda", 940, 345, 400, "#fff", seg(t, pa + .4, pa + .8)); }
       if (t > ad) cartaoC("🙋 CONTE para um adulto de confiança", 940, 440, 460, "#bbf7d0", seg(t, ad, ad + .4), "pai, mãe, responsável, professor"); } } },
 { chip: "ALGUÉM FOI OFENDIDO?", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "compartilhe"), "alerta"], [em(F9, "Apoie"), "ding"], [em(F9, "print"), "foto"], [em(F9, "denunciar"), "ding"]],
   draw(t, D) { const co = em(F9, "compartilhe"), ap = em(F9, "Apoie"), pr = em(F9, "print"), de = em(F9, "denunciar"); fundoEscuro(t, "#1e3a8a"); g.save(); camera(t, [[0, 640, 340, 1.08], [em(F9, "print"), 680, 360, 1.02]]);
          [[co, "🚫 NÃO compartilhe a ofensa", "#fecaca"], [ap, "🤝 APOIE o colega", "#bbf7d0"], [pr, "📸 GUARDE o print (a prova)", "#e0e7ff"], [de, "📢 CONTE a um adulto ou DENUNCIE", "#fef3c7"]].forEach(([tt, x, c], i) => { if (t > tt) cartaoC(x, 520, 175 + i * 92, 640, c, seg(t, tt, tt + .4)); });
     if (t > pr) etiqueta("PRINT = foto da tela", 1060, 200, 860, 380, seg(t, pr, pr + .4));
     gabi({ x: 1100, y: 640, s: .8, olhar: -1, braco: t > ap ? -1.6 : .3, bracoE: .3, boca: t > ap ? "riso" : "", pisca: pisca(t) });  g.restore(); palavra("ALGUÉM FOI OFENDIDO?", 560, 86, seg(t, 0, .4), 54); } },
 { chip: "🎣 CUIDADO COM O GOLPE", fala: F10, legenda: L66[10], sfx: [[.1, "alerta"], [em(F10, "prêmio"), "festa"], [em(F10, "pressa"), "alerta"], [em(F10, "senha"), "alerta"], [em(F10, "clique"), "ding"]],
   draw(t, D) { const pm = em(F10, "prêmio"), ps = em(F10, "pressa"), se = em(F10, "senha"), cl_ = em(F10, "clique"); fundoEscuro(t, "#14532d");
     palavra("🎣 GOLPE NA INTERNET", 520, 90, seg(t, 0, .4), 58);
     chat(380, 360, 380, 340, "Número desconhecido", [["???", "🎁 VOCÊ GANHOU UM CELULAR!", "#16a34a", 0], ["???", "⏰ SÓ HOJE! Corre!", "#dc2626", 0], ["???", "🔑 Me passa o código", "#7c3aed", 0]], (t > pm) + (t > ps) + (t > se), t, 0);
     if (t > pm) etiqueta("prêmio fácil", 820, 210, 570, 260, seg(t, pm, pm + .4)); if (t > ps) etiqueta("pressa", 820, 300, 570, 330, seg(t, ps, ps + .4)); if (t > se) etiqueta("pede senha ou código", 860, 390, 570, 400, seg(t, se, se + .4));
     if (t > cl_) { cartaoC("❌ não clique · ❌ não responda · 🙋 conte", 840, 510, 560, "#bbf7d0", seg(t, cl_, cl_ + .4)); } } },
 { chip: "MISSÃO CUMPRIDA", fala: F11, sfx: [[.1, "whoosh"], [em(F11, "desculpas"), "pop"], [em(F11, "apagada"), "pop"], [em(F11, "sorrir"), "ding"], [em(F11, "apagou"), "festa"]],
   draw(t, D) { const de = em(F11, "desculpas"), ap = em(F11, "apagada"), so = em(F11, "sorrir"), fa = em(F11, "apagou"), mc = em(F11, "Missão");
     g.save(); camera(t, [[0, 640, 330, 1.15], [fa, 640, 380, 1]]); praca(t); chat(640, 390, 420, 300, "Turma 6º A 😎", MSG2, (t > de) + (t > ap) + (t > so), t, 1 - seg(t, de, fa));
     rafa({ x: 230, y: 680, s: .95, olhar: 1, braco: t > fa ? -2.6 : -1, bracoE: t > fa ? 2.6 : .3, boca: "riso", pisca: pisca(t) }); gabi({ x: 1050, y: 680, s: .95, olhar: -1, braco: t > fa ? -2.6 : .3, bracoE: t > fa ? 2.6 : .3, boca: t > so ? "riso" : "", pisca: pisca(t + .4) }); g.restore();
     if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "WhatsApp"), "pop"], [em(F12, "jogos"), "pop"], [em(F12, "festa"), "pop"]],
   draw(t, D) { ondeUso(t, F12, [["WhatsApp", "💬", "Grupo da turma:", "netiqueta evita brigas"], ["jogos", "🎮", "Jogos on-line:", "sem dados pessoais no chat"], ["festa", "🎉", "Foto da festa:", "pergunte antes de postar"]]); } },
 { chip: "", fala: F13, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 6", [RAFA, GABI]); } }
];

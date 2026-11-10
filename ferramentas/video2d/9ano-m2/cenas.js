/* ================= 9º ano · Missão 2 · Criptografia e ataques ================= */
const DAVI = { camisa: "#16a34a" }, LIA = { camisa: "#a855f7", cabelo: "longo" };
const davi = o => boneco(Object.assign({}, DAVI, o)), lia = o => boneco(Object.assign({}, LIA, o));
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cesar = (s, k) => s.replace(/[A-Z]/g, ch => ABC[(ABC.indexOf(ch) + k + 26) % 26]);
function envelope(x, y, s, fechado, cor) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = cor || "#fff"; g.strokeStyle = NAVY; g.lineWidth = 4; rr(-50, -32, 100, 64, 8); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(-50, -32); g.lineTo(0, 6); g.lineTo(50, -32); g.stroke(); if (fechado) cadeado(30, 26, .45); g.restore(); }
function chave(x, y, s, rot) { g.save(); g.translate(x, y); g.rotate(rot || 0); g.scale(s, s); g.strokeStyle = "#b45309"; g.fillStyle = "#fbbf24"; g.lineWidth = 4; g.beginPath(); g.arc(-34, 0, 20, 0, 7); g.fill(); g.stroke();
  g.fillStyle = "#b45309"; g.beginPath(); g.arc(-34, 0, 7, 0, 7); g.fill(); g.fillStyle = "#fbbf24"; g.fillRect(-14, -7, 60, 14); g.strokeRect(-14, -7, 60, 14); g.fillRect(30, 7, 8, 14); g.fillRect(42, 7, 8, 10); g.restore(); }
function caixaTexto(txt, x, y, w, cor, k, sub, fonte) { if (k <= 0) return; const s = back(cl(k)); g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#fff"; g.strokeStyle = cor; g.lineWidth = 5; rr(-w / 2, -42, w, 84, 16); g.fill(); g.stroke();
  g.fillStyle = cor; g.font = `800 ${fonte || 36}px ui-monospace, 'DejaVu Sans Mono', monospace`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(txt, 0, 2); g.restore(); g.textBaseline = "alphabetic"; if (sub) rotulo(sub, x, y + 70, "#fff", k); }
function hacker(x, y, s) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#334155"; g.beginPath(); g.arc(0, -40, 46, Math.PI, 0); g.lineTo(46, 40); g.lineTo(-46, 40); g.closePath(); g.fill(); g.fillStyle = "#0f172a"; g.beginPath(); g.ellipse(0, -30, 28, 30, 0, 0, 7); g.fill();
  g.fillStyle = "#f8fafc"; g.beginPath(); g.arc(-10, -34, 5, 0, 7); g.arc(10, -34, 5, 0, 7); g.fill(); g.restore(); }
function servidor(x, y, s, caiu) { rack(x, y, s, 0, caiu); }

const CENAS = [
 { chip: "", fala: "Criptografia e ataques: o segredo das mensagens!", sfx: [[.05, "whoosh"], [.4, "misterio"], [1.4, "click"], [2.2, "festa"]],
   draw(t, D) { fundoEscuro(t, "#0b1d4a"); const msg = "SEGREDO", k = Math.floor(cl(seg(t, .5, 1.6)) * 3);
     const kc = back(seg(t, .3, .8)); if (kc > 0) { g.save(); g.translate(640, 270); g.scale(kc, kc); cadeado(0, 0, 1.6, t < 1.4); g.restore(); }
     caixaTexto(cesar(msg, k), 330, 260, 300, k ? "#ea580c" : "#2563eb", seg(t, .4, .8)); caixaTexto(t > 1.4 ? msg : cesar(msg, 3), 950, 260, 300, t > 1.4 ? "#16a34a" : "#ea580c", seg(t, .6, 1.0)); chave(790, 360, .8 * back(seg(t, 1.0, 1.4)), -.3);
     abertura(t, "9º ANO · MISSÃO 2", "Criptografia e ataques", "O SEGREDO", "DAS MENSAGENS!", 1.5); } },
 { chip: "O PROBLEMA", fala: "A Lia mandou uma mensagem para o Davi. Mas e se alguém pegar essa mensagem no meio do caminho? Dá para ler tudo?", sfx: [[.1, "whoosh"], [1.0, "voa"], [4.6, "alerta"], [8.0, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); lia({ x: 170, y: 560, s: .95, braco: -1.0, bracoE: .3, olhar: 1, pisca: pisca(t) }); davi({ x: 1110, y: 560, s: .95, braco: -.4, bracoE: .3, olhar: -1, pisca: pisca(t + .5) });
     g.setLineDash([12, 10]); linha(260, 330, 1020, 330, "rgba(255,255,255,.5)", 4); g.setLineDash([]); const k = seg(t, 1.0, 4.4); envelope(lerp(270, 640, io(k)), 330, .9);
     const kh = back(seg(t, 4.4, 4.9)); if (kh > 0) { g.save(); g.translate(640, 230); g.scale(kh, kh); hacker(0, 0, 1); g.restore(); balao("Peguei!", 760, 160, seg(t, 5.0, 5.3)); }
     if (t > 8) palavra("DÁ PARA LER?", 640, 470, seg(t, 8.0, 8.4), 56); } },
 { chip: "CRIPTOGRAFIA", fala: "Para isso existe a criptografia: transformar a mensagem para que só quem tem a chave consiga ler.", sfx: [[.1, "whoosh"], [1.6, "ding"], [3.6, "click"], [5.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("CRIPTOGRAFIA", 640, 120, seg(t, 1.4, 1.8), 80); envelope(450, 330, 1.6, t > 3.6); chave(820, 330, 1.4 * back(seg(t, 4.2, 4.7)), 0);
     etiqueta("SÓ QUEM TEM A CHAVE LÊ", 640, 500, 820, 360, seg(t, 5.6, 6.0)); } },
 { chip: "TEXTO CLARO E CIFRADO", fala: "A mensagem original é o texto claro. Depois de embaralhada, vira texto cifrado. E voltar ao texto claro, usando a chave, é decifrar.", sfx: [[.1, "whoosh"], [1.0, "pop"], [3.6, "voa"], [4.2, "pop"], [7.4, "voa"], [8.2, "ding"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); caixaTexto("OI DAVI", 260, 260, 320, "#2563eb", seg(t, .8, 1.2), "TEXTO CLARO"); caixaTexto("RL GDYL", 1020, 260, 320, "#ea580c", seg(t, 4.0, 4.4), "TEXTO CIFRADO");
     seta(440, 230, 830, 230, seg(t, 3.4, 4.0)); rotulo("CIFRAR", 640, 205, AMAR, seg(t, 3.6, 4.0)); chave(640, 260, .7 * back(seg(t, 3.6, 4.0)), 0);
     seta(830, 430, 440, 430, seg(t, 7.2, 7.8)); rotulo("DECIFRAR", 640, 405, AMAR, seg(t, 7.4, 7.8)); chave(640, 460, .7 * back(seg(t, 7.4, 7.8)), Math.PI); visto(260, 430, 30, seg(t, 8.2, 8.5)); } },
 { chip: "CIFRA DE CÉSAR", fala: "Uma das mais antigas é a cifra de César: cada letra anda um número fixo de casas no alfabeto. Com a chave três, o á vira dê, e o bê vira ê.", legenda: "Uma das mais antigas é a cifra de César: cada letra anda um número fixo de casas no alfabeto. Com a chave 3, o A vira D, e o B vira E.", sfx: [[.1, "whoosh"], [1.6, "ding"], [8.4, "pop"], [10.4, "pop"]],
   draw(t, D) { fundoEscuro(t, "#7c2d12"); palavra("CIFRA DE CÉSAR", 640, 115, seg(t, 1.4, 1.8), 70); const x0 = 120, cw = 80;
     for (let i = 0; i < 13; i++) { const k = seg(t, 2.6 + i * .12, 3.0 + i * .12); if (k <= 0) continue; const x = x0 + i * cw; g.globalAlpha = cl(k);
       g.fillStyle = (t > 8.2 && i === 0) || (t > 10.2 && i === 1) ? AMAR : "#fff"; rr(x, 200, cw - 8, 64, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 34px ${F}`; g.textAlign = "center"; g.fillText(ABC[i], x + cw / 2 - 4, 245);
       g.fillStyle = (t > 8.2 && i === 0) || (t > 10.2 && i === 1) ? "#fde68a" : "#fed7aa"; rr(x, 330, cw - 8, 64, 10); g.fill(); g.fillStyle = "#9a3412"; g.fillText(ABC[(i + 3) % 26], x + cw / 2 - 4, 375); g.globalAlpha = 1; }
     if (t > 8.2) seta(x0 + cw / 2 - 4, 268, x0 + cw / 2 - 4, 326, 1); if (t > 10.2) seta(x0 + cw * 1.5 - 4, 268, x0 + cw * 1.5 - 4, 326, 1);
     etiqueta("CHAVE 3: ANDA 3 CASAS", 640, 470, 640, 400, seg(t, 6.2, 6.6)); rotulo("LETRA", 70, 240, "#fff", seg(t, 2.6, 3)); } },
 { chip: "FORÇA BRUTA", fala: "Mas a cifra de César é fácil de quebrar: ela só tem vinte e cinco chaves. Testar uma por uma, até acertar, é o ataque de força bruta.", sfx: [[.1, "whoosh"], [3.4, "pop"], [6.0, "tec"], [7.0, "tec"], [8.0, "ding"], [9.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); caixaTexto("RL GDYL", 640, 200, 340, "#ea580c", seg(t, .6, 1.0)); etiqueta("SÓ 25 CHAVES!", 1050, 200, 830, 200, seg(t, 3.2, 3.6));
     [1, 2, 3].forEach((k, i) => { const kk = seg(t, 6.0 + i * 1.0, 6.4 + i * 1.0); if (kk <= 0) return; const ok = k === 3; caixaTexto(`chave ${k}: ${cesar("RL GDYL", -k)}`, 640, 300 + i * 90, 520, ok ? "#16a34a" : "#64748b", kk, null, 30); if (ok) visto(940, 480, 30, seg(t, 8.2, 8.5)); else xVermelho(940, 300 + i * 90, 20, kk); });
     palavra("FORÇA BRUTA", 640, 110, seg(t, 9.4, 9.8), 70); } },
 { chip: "SENHA LONGA", fala: "Por isso a senha longa protege. Uma senha de dois dígitos tem cem combinações; uma de quatro dígitos tem dez mil. Cada dígito a mais multiplica o trabalho de quem ataca.", sfx: [[.1, "whoosh"], [1.4, "ding"], [3.6, "pop"], [6.4, "pop"], [9.6, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); palavra("SENHA LONGA PROTEGE", 640, 115, seg(t, 1.2, 1.6), 64);
     barra(220, 260, 840, .01 * cl(seg(t, 3.4, 4.2)) + .005, "#4ade80", "2 dígitos (00 a 99): 100 combinações"); barra(220, 380, 840, cl(seg(t, 6.2, 8.4)), "#fbbf24", "4 dígitos: 10.000 combinações");
     etiqueta("CADA DÍGITO A MAIS: × 10", 640, 500, 640, 430, seg(t, 9.6, 10.0)); } },
 { chip: "ONDE A CRIPTOGRAFIA ESTÁ", fala: "Hoje a criptografia está no cadeado e no agá tê tê pê ésse dos sites, e nas conversas com criptografia de ponta a ponta: só quem envia e quem recebe consegue ler.", legenda: "Hoje a criptografia está no cadeado e no HTTPS dos sites, e nas conversas com criptografia de ponta a ponta: só quem envia e quem recebe consegue ler.", sfx: [[.1, "whoosh"], [1.8, "pop"], [5.6, "voa"], [8.4, "pop"], [10.6, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); const kb = seg(t, 1.6, 2.0); if (kb > 0) { g.globalAlpha = cl(kb); g.fillStyle = "#fff"; rr(140, 150, 1000, 70, 35); g.fill(); cadeado(200, 192, .5); g.fillStyle = "#16a34a"; g.font = `800 30px ${F}`; g.textAlign = "left"; g.fillText("https://", 240, 197); g.fillStyle = "#334155"; g.fillText("www.banco.com.br", 370, 197); g.globalAlpha = 1; }
     etiqueta("CADEADO + HTTPS", 900, 280, 360, 220, seg(t, 3.0, 3.4));
     const kp = seg(t, 5.4, 6.0); if (kp > 0) { celular(320, 450, .45, () => { cadeado(0, 0, .8); }); celular(960, 450, .45, () => { cadeado(0, 0, .8); }); g.setLineDash([10, 8]); linha(390, 450, 890, 450, AMAR, 5); g.setLineDash([]); envelope(lerp(400, 880, (t * .3) % 1), 450, .55, true); }
     rotulo("QUEM ENVIA", 320, 560, "#fff", seg(t, 8.2, 8.6)); rotulo("QUEM RECEBE", 960, 560, "#fff", seg(t, 8.2, 8.6)); palavra("PONTA A PONTA", 640, 372, seg(t, 10.4, 10.8), 46); } },
 { chip: "RANSOMWARE", fala: "Agora, os ataques. O rensomuér é um programa que tranca os arquivos e pede dinheiro, o resgate, para devolvê-los. A proteção é ter um bécap: uma cópia de segurança.", legenda: "Agora, os ataques. O ransomware é um programa que tranca os arquivos e pede dinheiro, o resgate, para devolvê-los. A proteção é ter um backup: uma cópia de segurança.", sfx: [[.1, "whoosh"], [2.4, "alerta"], [4.4, "click"], [6.0, "alerta"], [9.6, "pop"], [11.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#450a0a"); monitor(430, 470, 1.2, (x, y, w, h) => { g.fillStyle = t > 4.4 ? "#7f1d1d" : "#e0f2fe"; g.fillRect(x, y, w, h); for (let i = 0; i < 3; i++) { pasta(x + 50 + i * 85, y + 70, .5, "#f5b82e"); if (t > 4.4) cadeado(x + 50 + i * 85, y + 80, .3); }
       if (t > 6) { g.fillStyle = "#fff"; g.font = `800 20px ${F}`; g.textAlign = "center"; g.fillText("PAGUE O RESGATE!", x + w / 2, y + h - 22); } });
     palavra("RANSOMWARE", 430, 120, seg(t, 2.2, 2.6), 64); etiqueta("TRANCA OS ARQUIVOS", 430, 200 + 0, 430, 240, seg(t, 4.6, 5.0) * (1 - seg(t, 9.4, 9.6)));
     const kb = back(seg(t, 9.6, 10.1)); if (kb > 0) { g.save(); g.translate(1000, 330); g.scale(kb, kb); nuvem(0, 0, .9); g.restore(); for (let i = 0; i < 3; i++) pasta(940 + i * 60, 350, .4 * kb, "#f5b82e"); }
     cartao("BACKUP", 1000, 480, 260, "#16a34a", seg(t, 11.2, 11.6), "cópia de segurança"); } },
 { chip: "ENGENHARIA SOCIAL", fala: "A engenharia social engana a pessoa, e não o computador. O fíchin é um tipo dela: uma mensagem falsa, com prêmio ou fingindo ser do banco, que pede a sua senha.", legenda: "A engenharia social engana a pessoa, e não o computador. O phishing é um tipo dela: uma mensagem falsa, com prêmio ou fingindo ser do banco, que pede a sua senha.", sfx: [[.1, "whoosh"], [1.4, "ding"], [5.4, "pop"], [7.4, "alerta"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("ENGENHARIA SOCIAL", 640, 115, seg(t, 1.2, 1.6), 62);
     celular(460, 390, .78, () => { g.fillStyle = "#dcfce7"; rr(-100, -120, 200, 140, 14); g.fill(); g.fillStyle = "#14532d"; g.font = `800 17px ${F}`; g.textAlign = "center"; ["Você ganhou", "um PRÊMIO!", "Digite sua", "senha aqui:"].forEach((l, i) => g.fillText(l, 0, -86 + i * 30)); g.fillStyle = "#fff"; rr(-80, 40, 160, 40, 10); g.fill(); });
     const kh = seg(t, 5.0, 6.0); if (kh > 0) { g.strokeStyle = "#cbd5e1"; g.lineWidth = 4; g.beginPath(); g.moveTo(780, 140); g.lineTo(780, lerp(140, 330, io(kh))); g.stroke(); const y = lerp(140, 330, io(kh)); g.strokeStyle = "#94a3b8"; g.lineWidth = 8; g.lineCap = "round"; g.beginPath(); g.moveTo(780, y); g.lineTo(780, y + 40); g.arc(760, y + 40, 20, 0, Math.PI * .9); g.stroke(); }
     etiqueta("PHISHING = PESCAR", 980, 270, 800, 330, seg(t, 5.4, 5.8)); xVermelho(460, 330, 70, seg(t, 7.4, 7.8)); etiqueta("NUNCA DIGITE A SENHA", 980, 430, 560, 430, seg(t, 7.6, 8.0)); } },
 { chip: "DDoS", fala: "E no ataque dê dós, milhares de computadores mandam pedidos ao mesmo tempo, até o site sair do ar.", legenda: "E no ataque DDoS, milhares de computadores mandam pedidos ao mesmo tempo, até o site sair do ar.", sfx: [[.1, "whoosh"], [1.4, "ding"], [3.0, "tec"], [4.0, "tec"], [6.4, "desliga"]],
   draw(t, D) { fundoEscuro(t, "#111827"); palavra("DDoS", 640, 110, seg(t, 1.2, 1.6), 80); const caiu = t > 6.4; servidor(1060, 520, 1.0, caiu);
     for (let i = 0; i < 16; i++) { const x = 120 + (i % 4) * 150, y = 220 + Math.floor(i / 4) * 90; monitor(x, y + 40, .25); if (t > 2.6 && !caiu) pacotes(x + 40, y, 960, 400, t + i * .13, 1, "rgba(250,204,21,1)"); }
     etiqueta(caiu ? "FORA DO AR!" : "MILHARES DE PEDIDOS", 1060, 190, 1060, 290, caiu ? seg(t, 6.4, 6.8) : seg(t, 3.6, 4.0)); } },
 { chip: "É CRIME!", fala: "Atenção: tentar descobrir a senha de outra pessoa ou invadir o aparelho de alguém é crime. Use o que você aprendeu só para se proteger.", sfx: [[.1, "whoosh"], [.8, "alerta"], [6.0, "pop"], [8.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); palavra("ATENÇÃO!", 640, 115, seg(t, .6, 1.0), 80); cartao("INVADIR É CRIME", 640, 260, 560, "#dc2626", seg(t, 5.8, 6.2), "Lei nº 12.737/2012");
     const ks = back(seg(t, 8.2, 8.7)); if (ks > 0) { g.save(); g.translate(640, 440); g.scale(ks, ks); g.fillStyle = "#16a34a"; g.beginPath(); g.moveTo(0, -70); g.lineTo(60, -46); g.lineTo(56, 10); g.quadraticCurveTo(40, 52, 0, 70); g.quadraticCurveTo(-40, 52, -56, 10); g.lineTo(-60, -46); g.closePath(); g.fill(); g.restore(); visto(640, 440, 30, ks); }
     etiqueta("SÓ PARA SE PROTEGER", 940, 440, 710, 440, seg(t, 8.6, 9.0)); } },
 { chip: "MISSÃO CUMPRIDA", fala: "Missão cumprida: a mensagem da Lia viajou cifrada, e só o Davi, com a chave, conseguiu ler!", sfx: [[.1, "whoosh"], [.6, "voa"], [3.4, "click"], [4.0, "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); lia({ x: 170, y: 600, s: .85, pisca: pisca(t), braco: t > 4 ? -2.8 : -.6, bracoE: t > 4 ? 2.8 : .3 }); davi({ x: 1110, y: 600, s: .85, braco: -1.2, bracoE: .3, olhar: -1, pisca: pisca(t + .5) });
     const k = io(seg(t, .5, 3.0)); envelope(lerp(270, 980, k), 380, 1.0, t < 3.4); hacker(640, 240, .7); xVermelho(640, 230, 40, seg(t, 1.6, 1.9)); if (t > 3.4) caixaTexto("OI DAVI", 980, 280, 260, "#16a34a", seg(t, 3.4, 3.8), null, 30); cumprida(t, 4.0); } },
 { chip: "ONDE EU USO ISSO?", fala: "Onde eu uso isso? Nas conversas do WhatsApp, com criptografia de ponta a ponta; no Pix e no aplicativo do banco; e no bécap, que salva os arquivos quando tudo dá errado.", legenda: "Onde eu uso isso? Nas conversas do WhatsApp, com criptografia de ponta a ponta; no Pix e no aplicativo do banco; e no backup, que salva os arquivos quando tudo dá errado.", sfx: [[.1, "whoosh"], [1.6, "pop"], [5.4, "pop"], [8.6, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); [["CONVERSAS", "ponta a ponta", 1.5], ["PIX E BANCO", "dinheiro protegido", 5.3], ["BACKUP", "arquivos salvos", 8.5]].forEach(([n, sub, t0], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const x = 240 + i * 400;
     g.save(); g.translate(x, 320); g.scale(k, k); g.fillStyle = "rgba(255,255,255,.1)"; rr(-160, -150, 320, 300, 26); g.fill();
     if (i === 0) celular(0, 0, .5, () => { cadeado(0, 0, .8); }); else if (i === 1) { g.fillStyle = "#fbbf24"; g.beginPath(); g.arc(0, 0, 70, 0, 7); g.fill(); g.fillStyle = "#b45309"; g.font = `800 46px ${F}`; g.textAlign = "center"; g.fillText("$", 0, 16); cadeado(60, 50, .5); } else { nuvem(0, -10, .7); pasta(-30, 50, .4, "#f5b82e"); pasta(30, 50, .4, "#f5b82e"); }
     g.restore(); cartao(n, x, 510, 300, "rgba(255,255,255,.12)", seg(t, t0 + .2, t0 + .5), sub); }); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 2 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "9º ano · Turmas A, B, C e D · Missão 2", [DAVI, LIA]); } }
];

/* ================= 6º ano · Missão 4 · Guardar, compactar e achar arquivos (bits e bytes) ================= */
const DUDA = { camisa: "#ec4899", cabelo: "longo" }, TIAGO = { camisa: "#0ea5e9" };
const duda = o => boneco(Object.assign({}, DUDA, o));
function cel6(x, y, s, t, cheio, alerta) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#0f172a"; rr(-90, -170, 180, 340, 26); g.fill(); g.fillStyle = "#e0f2fe"; rr(-76, -148, 152, 290, 12); g.fill();
  g.fillStyle = "#334155"; g.font = `800 16px ${F}`; g.textAlign = "center"; g.fillText("ARMAZENAMENTO", 0, -110); g.fillStyle = "#cbd5e1"; rr(-60, -95, 120, 24, 12); g.fill();
  g.fillStyle = cheio > .9 ? "#dc2626" : "#2563eb"; rr(-60, -95, 120 * cl(cheio), 24, 12); g.fill(); g.fillStyle = NAVY; g.font = `800 22px ${F}`; g.fillText(Math.round(cl(cheio) * 100) + "%", 0, -40);
  if (alerta) { g.fillStyle = "#dc2626"; rr(-70, 10, 140, 70, 12); g.fill(); g.fillStyle = "#fff"; g.font = `800 15px ${F}`; g.fillText("CHEIO!", 0, 52); }
  g.restore(); }
function lampada(x, y, s, acesa, v) { g.save(); g.translate(x, y); g.scale(s, s); if (acesa) { g.fillStyle = "rgba(250,204,21,.35)"; g.beginPath(); g.arc(0, -10, 62, 0, 7); g.fill(); }
  g.fillStyle = acesa ? "#facc15" : "#e2e8f0"; g.beginPath(); g.arc(0, -10, 42, 0, 7); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; g.stroke(); g.fillStyle = "#94a3b8"; rr(-18, 30, 36, 24, 5); g.fill();
  g.fillStyle = "#fff"; g.font = `800 52px ${F}`; g.textAlign = "center"; g.fillText(acesa ? "1" : "0", 0, 120); if (v) { g.font = `700 18px ${F}`; g.fillStyle = "#cbd5e1"; g.fillText(v, 0, 150); } g.restore(); }
function arquivo(x, y, s, nome, cor, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = cor || "#fff"; g.beginPath(); g.moveTo(-40, -52); g.lineTo(18, -52); g.lineTo(40, -30); g.lineTo(40, 52); g.lineTo(-40, 52); g.closePath(); g.fill();
  g.strokeStyle = NAVY; g.lineWidth = 4; g.stroke(); g.fillStyle = "#fff"; g.font = `800 18px ${F}`; g.textAlign = "center"; g.fillText(nome, 0, 84); g.restore(); }
function zipBox(x, y, s, k) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(s * z, s * z); g.fillStyle = "#facc15"; rr(-60, -50, 120, 100, 12); g.fill(); g.strokeStyle = NAVY; g.lineWidth = 5; rr(-60, -50, 120, 100, 12); g.stroke();
  for (let i = 0; i < 6; i++) { g.fillStyle = i % 2 ? NAVY : "#fff"; g.fillRect(-6, -50 + i * 14, 12, 12); } g.fillStyle = "#fff"; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText(".zip", 0, 82); g.restore(); }

const CENAS = [
 { chip: "", fala: "Bits e bytes: o segredo do armazenamento cheio!", sfx: [[.05, "whoosh"], [.5, "alerta"], [1.6, "ding"], [2.8, "festa"]],
   draw(t, D) { fundoEscuro(t, "#7f1d1d"); cel6(640, 260, .62, t, seg(t, .2, 1.4), t > 1.4 && Math.floor(t * 4) % 2 === 0);
     abertura(t, "6º ANO · MISSÃO 4", "Guardar, compactar e achar arquivos", "O SEGREDO DO", "ARMAZENAMENTO CHEIO!", 1.8); } },
 { chip: "O PROBLEMA", fala: "O celular da Duda apitou: armazenamento cheio! Ela tem mil mensagens e só vinte vídeos. O que será que encheu o celular?", sfx: [[.1, "whoosh"], [.8, "alerta"], [4.0, "pop"], [6.0, "pop"], [8.4, "misterio"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); duda({ x: 300, y: 560, s: 1.05, braco: -1.1, bracoE: .3, olhar: 1, boca: "o", pisca: pisca(t) }); cel6(760, 300, .95, t, 1, t > .8);
     comando("1000 MENSAGENS", 1080, 200, seg(t, 3.8, 4.2), "#2563eb", 280); comando("20 VÍDEOS", 1080, 280, seg(t, 5.8, 6.2), "#db2777", 280); if (t > 8.4) palavra("O QUE ENCHEU?", 300, 150, seg(t, 8.4, 8.8), 50); } },
 { chip: "BIT", fala: "Dentro do computador, tudo vira zero e um. Cada zero ou um é um bit, como uma lâmpada apagada ou acesa.", sfx: [[.1, "whoosh"], [1.8, "ding"], [5.0, "pop"], [6.6, "click"], [7.4, "click"]],
   draw(t, D) { fundoEscuro(t, "#0e7490"); palavra(t > 4.8 ? "BIT" : "0 E 1", 640, 110, t > 4.8 ? seg(t, 4.8, 5.2) : seg(t, 1.6, 2.0), 96);
     lampada(460, 330, 1.2, false, "apagada"); lampada(820, 330, 1.2, t > 6.6, "acesa"); } },
 { chip: "BYTE", fala: "Oito bits formam um byte, mais ou menos o espaço de uma letra.", sfx: [[.1, "whoosh"], [.6, "pop"], [2.6, "ding"], [4.0, "pop"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); palavra("8 BITS = 1 BYTE", 640, 110, seg(t, 2.4, 2.8), 72); const bits = [0, 1, 0, 0, 0, 0, 0, 1];
     bits.forEach((b, i) => { const k = back(seg(t, .4 + i * .15, .7 + i * .15)); if (k <= 0) return; g.save(); g.translate(220 + i * 120, 280); g.scale(k, k); g.fillStyle = b ? "#facc15" : "#e2e8f0"; rr(-46, -46, 92, 92, 14); g.fill(); g.fillStyle = NAVY; g.font = `800 52px ${F}`; g.textAlign = "center"; g.fillText(b, 0, 18); g.restore(); });
     if (t > 3.8) { cartao("= A LETRA \"A\"", 640, 450, 360, "#16a34a", seg(t, 3.8, 4.2)); } } },
 { chip: "AS MEDIDAS", fala: "Os arquivos têm muitos bytes, então usamos medidas maiores, cada uma cerca de mil vezes maior: quilobyte, megabyte, gigabyte e terabyte.", sfx: [[.1, "whoosh"], [5.2, "pop"], [6.2, "pop"], [7.2, "pop"], [8.2, "pop"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); palavra("CERCA DE MIL VEZES MAIOR", 560, 130, seg(t, 3.0, 3.4), 54);
     [["KB", "quilobyte", 5.0], ["MB", "megabyte", 6.0], ["GB", "gigabyte", 7.0], ["TB", "terabyte", 8.0]].forEach(([n, sub, t0], i) => { const k = back(seg(t, t0, t0 + .4)); if (k <= 0) return; const h = 90 + i * 70, x = 250 + i * 260;
       g.save(); g.translate(x, 520); g.scale(k, k); g.fillStyle = ["#38bdf8", "#22c55e", "#f59e0b", "#ef4444"][i]; rr(-90, -h, 180, h, 14); g.fill(); g.fillStyle = "#fff"; g.font = `800 40px ${F}`; g.textAlign = "center"; g.fillText(n, 0, -h + 50); g.font = `700 16px ${F}`; g.fillText(sub, 0, -h + 76); g.restore();
       if (i) seta(x - 200, 470, x - 100, 470, seg(t, t0, t0 + .3)); }); } },
 { chip: "O QUE PESA MAIS", fala: "Um texto ocupa poucos quilobytes. Uma foto, alguns megabytes. Um vídeo, centenas de megabytes. Foi isso: os vídeos encheram o celular!", sfx: [[.1, "whoosh"], [1.0, "pop"], [3.2, "pop"], [5.4, "pop"], [7.6, "festa"]],
   draw(t, D) { fundoEscuro(t, "#14532d"); [["TEXTO", "poucos KB", "#fff", .9, 1.0], ["FOTO", "alguns MB", "#7dd3fc", 1.2, 3.2], ["VÍDEO", "centenas de MB", "#fca5a5", 1.6, 5.4]].forEach(([n, sub, c2, s2, t0], i) => {
       arquivo(260 + i * 380, 300, s2, n, c2, seg(t, t0, t0 + .4)); if (t > t0 + .3) comando(sub, 260 + i * 380, 470, seg(t, t0 + .3, t0 + .7), ["#64748b", "#0891b2", "#dc2626"][i], 260); });
     if (t > 7.6) palavra("OS VÍDEOS!", 640, 105, seg(t, 7.6, 8.0), 80); } },
 { chip: "COMPACTAR", fala: "Para mandar muitos arquivos de uma vez, dá para compactar: juntar tudo num arquivo ponto zip, menor. Para usar, é só descompactar.", sfx: [[.1, "whoosh"], [3.0, "pop"], [4.6, "ding"], [7.4, "click"]],
   draw(t, D) { fundoEscuro(t, "#3b1c6e"); const z = io(seg(t, 3.0, 4.4)), v = io(seg(t, 7.4, 8.6));
     [0, 1, 2].forEach(i => arquivo(lerp(220, 640, z - v * 0) + (1 - z) * 0, lerp(200 + i * 120, 300, z), .6 * (1 - z) + .01, "", "#fff", 1 - z + .001));
     zipBox(640, 300, 1.4, seg(t, 4.2, 4.6) * (1 - v)); palavra(t > 7.2 ? "DESCOMPACTAR" : "COMPACTAR", 560, 115, t > 7.2 ? seg(t, 7.2, 7.6) : seg(t, 2.8, 3.2), 70);
     if (v > 0) [0, 1, 2].forEach(i => arquivo(lerp(640, 1060, v), lerp(300, 200 + i * 120, v), .6, "", "#fff", v)); } },
 { chip: "ACHAR O ARQUIVO", fala: "E para achar um arquivo rapidinho: busque pelo nome na lupa, olhe a extensão e dê sempre nomes bons.", sfx: [[.1, "whoosh"], [2.8, "pop"], [4.6, "pop"], [6.4, "ding"]],
   draw(t, D) { fundoEscuro(t, "#1e3a8a"); lupa(220, 300, 1.3 * back(seg(t, 2.6, 3.0)));
     comando("1. BUSQUE PELO NOME 🔍", 760, 210, seg(t, 2.6, 3.0), "#2563eb", 560); comando("2. OLHE A EXTENSÃO: .jpg .mp4 .zip", 760, 310, seg(t, 4.4, 4.8), "#7c3aed", 560); comando("3. NOMES BONS: trabalho-ciencias-6A", 760, 410, seg(t, 6.2, 6.6), "#16a34a", 560); } },
 { chip: "", fala: "Agora é com vocês: abram a Missão 4 no portal!", sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · Turmas A e B · Missão 4", [DUDA, TIAGO]); } }
];

/* ================= 6º ano · 2027 · 1º bimestre · Missão 4 · Pastas e arquivos (v2, padrão completo: o Armário Gigante do computador) ================= */
const PEDRO = { camisa: "#f97316" }, LARA = { camisa: "#8b5cf6", cabelo: "longo" };
const pedro = o => boneco(Object.assign({}, PEDRO, o)), lara = o => boneco(Object.assign({}, LARA, o));
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
/* ===== peças do "Armário Gigante" (6º M4 v2) ===== */
const EXT = { txt: ["#64748b", "📝"], docx: ["#2563eb", "📄"], jpg: ["#db2777", "🖼️"], png: ["#c026d3", "🖼️"], mp3: ["#16a34a", "🎵"], mp4: ["#ea580c", "🎬"], pdf: ["#dc2626", "📕"], jxl: ["#0891b2", "✨"] };
function quarto(t) { // quarto do Pedro, com camadas: parede, janela, estante, mesa
  const gr = g.createLinearGradient(0, -200, 0, 900); gr.addColorStop(0, "#c7d2fe"); gr.addColorStop(1, "#818cf8"); g.fillStyle = gr; g.fillRect(-600, -400, 2480, 1600);
  g.fillStyle = "#7dd3fc"; rr(90, 80, 240, 190, 10); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 12; rr(90, 80, 240, 190, 10); g.stroke(); g.beginPath(); g.moveTo(210, 80); g.lineTo(210, 270); g.stroke(); nuvem(170 + Math.sin(t * .4) * 18, 140, .45);
  g.fillStyle = "#92400e"; g.fillRect(960, 110, 260, 12); g.fillRect(960, 210, 260, 12); ["#ef4444", "#22c55e", "#3b82f6", "#eab308", "#a855f7"].forEach((c, i) => { g.fillStyle = c; g.fillRect(980 + i * 40, 132, 30, 78); });
  g.fillStyle = "#78350f"; rr(260, 520, 760, 30, 8); g.fill(); g.fillStyle = "#92400e"; g.fillRect(300, 550, 24, 170); g.fillRect(956, 550, 24, 170); g.fillStyle = "#4c1d95"; g.fillRect(-600, 700, 2480, 400); }
function icone(x, y, ext, nome, s) { s = s || 1; const [cor, e] = EXT[ext] || ["#64748b", "📄"]; g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "rgba(255,255,255,.92)"; rr(-26, -30, 52, 46, 8); g.fill(); g.fillStyle = cor; rr(-26, 10, 52, 8, 3); g.fill();
  g.font = `26px ${F}`; g.textAlign = "center"; g.fillText(e, 0, 0); g.fillStyle = "#fff"; g.font = `700 13px ${F}`; g.fillText(nome, 0, 36); g.restore(); }
// área de trabalho: org 0 = bagunça (ícones espalhados), 1 = organizada (pastas por matéria)
const BAG = [["foto-gato", "jpg"], ["musica", "mp3"], ["sem título 3", "docx"], ["video-festa", "mp4"], ["IMG_0001", "jpg"], ["sem título 4", "docx"], ["boletim", "pdf"], ["anotacao", "txt"], ["meme", "png"], ["sem título 5", "docx"], ["jogo-print", "png"], ["aula", "mp4"]];
function areaTrabalho(x0, y0, w, h, t, org) { g.fillStyle = "#1d4ed8"; g.fillRect(x0, y0, w, h); const gr = g.createRadialGradient(x0 + w * .7, y0 + h * .3, 10, x0 + w * .7, y0 + h * .3, w); gr.addColorStop(0, "rgba(255,255,255,.25)"); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(x0, y0, w, h);
  if (org < 1) BAG.forEach(([n, e], i) => { const ax = x0 + 40 + ((i * 97) % (w - 80)), ay = y0 + 36 + ((i * 61) % (h - 70)), tx = x0 + w / 2, ty = y0 + h / 2; const k = io2(cl(org * 1.3 - i * .02));
    icone(lerp(ax, tx, k) + Math.sin(t * 2 + i) * 2 * (1 - k), lerp(ay, ty, k), e, n, (.9 - .5 * k) * w / 700); });
  if (org > 0) { g.save(); g.globalAlpha = cl(org * 2 - 1); ["Escola", "Fotos", "Músicas", "Vídeos"].forEach((n, i) => pasta(x0 + 60 + i * (w - 120) / 3, y0 + h * .42, .5 * w / 700, i ? "#f5b82e" : "#fb923c", "", false)); g.fillStyle = "#fff"; g.font = `700 ${Math.round(13 * w / 700)}px ${F}`; g.textAlign = "center";
    ["Escola", "Fotos", "Músicas", "Vídeos"].forEach((n, i) => g.fillText(n, x0 + 60 + i * (w - 120) / 3, y0 + h * .42 + 42 * w / 700)); g.restore(); } }
// personagem-arquivo: folha que anda, com a etiqueta da extensão
function arqP(x, y, s, nome, ext, t, feliz) { const [cor, e] = EXT[ext] || ["#64748b", "📄"], b = Math.abs(Math.sin(t * 6 + x)) * 6; g.save(); g.translate(x, y - b); g.scale(s, s);
  g.strokeStyle = NAVY; g.lineWidth = 5; g.lineCap = "round"; g.beginPath(); g.moveTo(-14, 40); g.lineTo(-18 - Math.sin(t * 6 + x) * 6, 70); g.moveTo(14, 40); g.lineTo(18 + Math.sin(t * 6 + x) * 6, 70); g.stroke();
  arquivo(0, 0, 1, 0, cor); g.fillStyle = "#fff"; rr(-24, -24, 48, 30, 6); g.fill(); g.font = `24px ${F}`; g.textAlign = "center"; g.fillText(e, 0, 0);
  g.fillStyle = NAVY; g.beginPath(); g.arc(-10, 14, 3.5, 0, 7); g.arc(10, 14, 3.5, 0, 7); g.fill(); g.lineWidth = 2.5; g.beginPath(); g.arc(0, 20, 7, .2, Math.PI - .2); g.stroke();
  g.font = `800 18px ${F}`; const nw = g.measureText(nome + "." + ext).width + 24; g.fillStyle = cor; rr(-nw / 2, 50, nw, 30, 10); g.fill(); g.fillStyle = "#fff"; g.fillText(nome + "." + ext, 0, 71); g.restore(); }
// armário gigante (as pastas como gavetas); abre = índice da gaveta aberta e quanto (0..1)
function armario(x, y, s, nomes, abre, k) { g.save(); g.translate(x, y); g.scale(s, s); g.fillStyle = "#78350f"; rr(-230, -300, 460, 600, 18); g.fill(); g.fillStyle = "#92400e"; rr(-214, -284, 428, 568, 12); g.fill();
  nomes.forEach((n, i) => { const yy = -264 + i * 136, o = i === abre ? io2(cl(k)) * 90 : 0; g.fillStyle = "rgba(0,0,0,.3)"; rr(-196, yy + 6, 392, 116, 10); g.fill();
    g.save(); g.translate(0, o * .35); g.scale(1 + o / 600, 1 + o / 600); g.fillStyle = "#f59e0b"; rr(-196, yy, 392, 116, 10); g.fill(); g.fillStyle = "#b45309"; rr(-40, yy + 76, 80, 16, 8); g.fill();
    g.fillStyle = "#fff"; rr(-120, yy + 18, 240, 44, 8); g.fill(); g.fillStyle = NAVY; g.font = `800 24px ${F}`; g.textAlign = "center"; g.fillText("📁 " + n, 0, yy + 49); g.restore(); }); g.restore(); }
function placaRua(txt, x, y, k, cor) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "#475569"; g.fillRect(-6, 0, 12, 150); g.font = `800 24px ${F}`; const w = g.measureText(txt).width + 40;
  g.fillStyle = cor || "#15803d"; rr(-w / 2, -50, w, 50, 10); g.fill(); g.strokeStyle = "#fff"; g.lineWidth = 3; rr(-w / 2 + 5, -45, w - 10, 40, 7); g.stroke(); g.fillStyle = "#fff"; g.textAlign = "center"; g.fillText(txt, 0, -17); g.restore(); }
function janelaSalvar(x, y, k, passo, nome) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); g.fillStyle = "rgba(0,0,0,.3)"; rr(-296, -176, 600, 360, 14); g.fill(); g.fillStyle = "#f8fafc"; rr(-300, -180, 600, 360, 14); g.fill();
  g.fillStyle = "#e2e8f0"; rr(-300, -180, 600, 44, 14); g.fill(); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText("💾 Salvar como", -280, -150);
  ["Documentos", "  › Escola", "    › Ciências", "Downloads", "Imagens"].forEach((n, i) => { g.fillStyle = passo >= 1 && i === 2 ? "#bfdbfe" : "transparent"; rr(-290, -122 + i * 40, 200, 34, 6); g.fill(); g.fillStyle = NAVY; g.font = `600 18px ${F}`; g.fillText((i < 3 ? "📁 " : "📁 ") + n.trim(), -282 + (n.length - n.trimStart().length) * 6, -98 + i * 40); });
  g.fillStyle = "#cbd5e1"; g.fillRect(-80, -130, 2, 220); g.fillStyle = NAVY; g.font = `700 18px ${F}`; g.fillText("Nome:", -60, 120); g.fillStyle = "#fff"; g.strokeStyle = passo >= 2 ? "#2563eb" : "#94a3b8"; g.lineWidth = 3; rr(10, 96, 270, 36, 6); g.fill(); g.stroke();
  g.fillStyle = NAVY; g.font = `600 17px ${F}`; g.fillText(passo >= 2 ? nome : "sem título 3", 20, 120); g.fillStyle = passo >= 3 ? "#16a34a" : "#2563eb"; rr(170, 142, 110, 30, 8); g.fill(); g.fillStyle = "#fff"; g.font = `800 17px ${F}`; g.textAlign = "center"; g.fillText(passo >= 3 ? "✔ Salvo!" : "Salvar", 225, 163); g.restore(); }
function tecla(txt, x, y, k, w) { if (k <= 0) return; const z = back(cl(k)); g.save(); g.translate(x, y); g.scale(z, z); w = w || 120; g.fillStyle = "#94a3b8"; rr(-w / 2, -50, w, 104, 14); g.fill(); g.fillStyle = "#f1f5f9"; rr(-w / 2 + 6, -46, w - 12, 86, 10); g.fill();
  g.fillStyle = NAVY; g.font = `800 36px ${F}`; g.textAlign = "center"; g.fillText(txt, 0, 10); g.restore(); }
function cenaInterna(t) { // dentro do computador: corredor do armário com camadas e brilho
  const gr = g.createLinearGradient(0, -300, 0, 1000); gr.addColorStop(0, "#0f172a"); gr.addColorStop(1, "#1e1b4b"); g.fillStyle = gr; g.fillRect(-800, -600, 2880, 1920);
  for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(56,189,248,${.08 + .06 * Math.sin(t + i)})`; g.fillRect(-600 + i * 180, -400, 6, 1500); }
  g.fillStyle = "#312e81"; g.fillRect(-800, 600, 2880, 600); g.fillStyle = "#4338ca"; g.fillRect(-800, 600, 2880, 10); }
const F0 = "Pastas e arquivos: o mistério do trabalho sumido!",
  F1 = "Amanhã é dia de entregar o trabalho de Ciências, e o Pedro fez tudo no computador. Mas olha a área de trabalho dele: fotos, músicas, vídeos e textos, tudo misturado! Cadê o trabalho?",
  F2 = "Ele abriu o sem título três: era a foto do gato. Abriu o sem título quatro: era uma música! O Pedro já estava quase chorando quando a Lara chegou.",
  F3 = "Calma, Pedro! Seu trabalho não sumiu, ele só está perdido. Vem comigo: vamos entrar no computador e arrumar essa bagunça de uma vez!",
  F4 = "Aqui dentro, tudo o que fica guardado é um arquivo: um texto, uma foto, uma música, um vídeo. Cada arquivo tem um nome, para a gente achar depois.",
  F5 = "E para os arquivos não ficarem jogados, existem as pastas. Uma pasta é como uma gaveta que organiza os arquivos. E dentro de uma pasta pode ter outras pastas, como uma gaveta com divisórias.",
  F6 = "Repare no nome do arquivo: trabalho, ponto, docx. O que vem depois do ponto é a extensão. Ela conta que tipo de arquivo é, e qual programa vai abrir.",
  F7 = "Vamos conhecer a turma? Ponto txt e ponto docx são textos. Ponto jpg e ponto png são imagens. Ponto mp3 é música. Ponto mp4 é vídeo. E ponto pdf é um documento para ler e imprimir.",
  F8 = "E tem novidade: o ponto jxl, o novo jpeg. Ele deixa a foto menor com a mesma qualidade, e os navegadores começaram a abrir em dois mil e vinte e seis. Mas o jpg ainda é o mais usado, porque formato novo demora para chegar a todo lugar.",
  F9 = "Agora, o segredo para nunca mais se perder: o caminho. É o endereço do arquivo. Documentos, depois Escola, depois Informática, e aí o trabalho. Cada pasta fica dentro da outra, como ruas de um bairro.",
  F10 = "Para guardar um trabalho, use o salvar como: escolha onde guardar, dê um nome e clique em salvar. E o atalho Control mais S salva na hora. O S vem de save, que quer dizer salvar.",
  F11 = "E capriche no nome! Redação meio ambiente é muito melhor que sem título três. Para trocar o nome depois, clique com o botão direito e escolha renomear.",
  F12 = "Pronto! No Explorador de Arquivos, o Pedro criou a pasta Escola, com uma pasta para cada matéria. E o trabalho estava em Escola, Ciências. Entregue no prazo. Missão cumprida!",
  F13 = "Onde eu uso isso? Na galeria do celular, as fotos ficam em álbuns, que são pastas. Quando você baixa um boletim em pdf, ele vai para a pasta Downloads. E na secretaria da escola, cada turma tem uma pasta com os documentos dos alunos.",
  F14 = "Agora é com vocês: abram a Missão 4 no portal e organizem as suas pastas!";
const L6 = { 6: "Repare no nome do arquivo: trabalho.docx. O que vem depois do ponto é a extensão. Ela conta que tipo de arquivo é, e qual programa vai abrir.",
  7: "Vamos conhecer a turma? .txt e .docx são textos. .jpg e .png são imagens. .mp3 é música. .mp4 é vídeo. E .pdf é um documento para ler e imprimir.",
  8: "E tem novidade: o .jxl, o novo JPEG. Ele deixa a foto menor com a mesma qualidade, e os navegadores começaram a abrir em 2026. Mas o .jpg ainda é o mais usado, porque formato novo demora para chegar a todo lugar.",
  10: "Para guardar um trabalho, use o “Salvar como”: escolha onde guardar, dê um nome e clique em Salvar. E o atalho Ctrl + S salva na hora. O S vem de save, que quer dizer salvar.",
  11: "E capriche no nome! “redacao-meio-ambiente” é muito melhor que “sem título 3”. Para trocar o nome depois, clique com o botão direito e escolha Renomear.",
  13: "Onde eu uso isso? Na galeria do celular, as fotos ficam em álbuns, que são pastas. Quando você baixa um boletim em PDF, ele vai para a pasta Downloads. E na secretaria da escola, cada turma tem uma pasta com os documentos dos alunos." };
const telaPC = (t, org) => (x, y, w, h) => areaTrabalho(x, y, w, h, t, org);

const CENAS = [
 { chip: "", fala: F0, sfx: [[.05, "whoosh"], [.4, "misterio"], [1.2, "pop"], [1.7, "ding"]],
   draw(t, D) { g.save(); camera(t, [[0, 640, 300, 1.4], [1.5, 640, 340, 1]]); cenaInterna(t);
     BAG.forEach(([n, e], i) => { const a = t * 1.6 + i * .52, r = 120 + (i % 4) * 70 + Math.sin(t + i) * 10; icone(640 + Math.cos(a) * r * 1.5, 300 + Math.sin(a) * r * .7, e, n, 1.1); }); // redemoinho de arquivos
     armario(640, 330, .55, ["Escola", "Fotos", "Músicas"], 0, seg(t, 1, 1.8)); g.restore();
     abertura(t, "6º ANO · MISSÃO 4", "Pastas e arquivos", "O MISTÉRIO DO", "TRABALHO SUMIDO!", 1.9); } },
 { chip: "O PROBLEMA", fala: F1, sfx: [[.1, "whoosh"], [em(F1, "Pedro"), "pop"], [em(F1, "olha"), "whoosh"], [em(F1, "misturado"), "alerta"], [em(F1, "Cadê"), "misterio"]],
   draw(t, D) { const p = em(F1, "Pedro"), o = em(F1, "olha"), c = em(F1, "Cadê");
     g.save(); camera(t, [[0, 640, 380, 1], [p, 420, 440, 1.2], [o, 640, 330, 1.45], [c, 640, 360, 1.15]]); quarto(t); monitor(640, 380, 1.2, telaPC(t, 0)); teclado(640, 505, 1, -1); mouse(800, 505, 1);
     pedro({ x: 380, y: 700, s: 1, olhar: 1, braco: t > c ? -2.4 : -1, bracoE: t > c ? 2.4 : .3, boca: t > c ? "o" : "", pisca: pisca(t) }); g.restore();
     if (t > o) etiqueta("TUDO MISTURADO!", 1080, 150, 860, 260, seg(t, o, o + .4)); if (t > c) balao("Cadê o meu trabalho?! 😱", 330, 170, seg(t, c, c + .3)); } },
 { chip: "SEM TÍTULO?!", fala: F2, legenda: "Ele abriu o “sem título 3”: era a foto do gato. Abriu o “sem título 4”: era uma música! O Pedro já estava quase chorando quando a Lara chegou.",
   sfx: [[.1, "whoosh"], [em(F2, "abriu"), "tec"], [em(F2, "gato"), "pop"], [em(F2, "quatro"), "tec"], [em(F2, "música"), "som"], [em(F2, "Lara"), "ding"]],
   draw(t, D) { const a1 = em(F2, "abriu"), ga = em(F2, "gato"), a2 = em(F2, "quatro"), mu = em(F2, "música"), la = em(F2, "Lara");
     g.save(); camera(t, [[0, 640, 330, 1.45], [la, 560, 400, 1]]); quarto(t);
     monitor(640, 380, 1.2, (x, y, w, h) => { areaTrabalho(x, y, w, h, t, 0); if (t > ga && t < a2) { g.fillStyle = "#fef3c7"; g.fillRect(x + w * .2, y + h * .15, w * .6, h * .7); emo("🐱", x + w / 2, y + h * .62, 90); } if (t > mu && t < la) { g.fillStyle = "#0f172a"; g.fillRect(x + w * .2, y + h * .15, w * .6, h * .7); emo("🎵", x + w / 2, y + h * .62, 80); } });
     teclado(640, 505, 1, -1); pedro({ x: 380, y: 700, s: 1, olhar: 1, braco: -1.2, bracoE: .3, boca: "o", pisca: pisca(t) });
     if (t > la) lara({ x: lerp(1400, 900, io2(seg(t, la, la + .8))), y: 700, s: 1, olhar: -1, braco: -1.6, bracoE: .3, boca: "riso", pisca: pisca(t + .4) }); g.restore();
     if (t > a1 && t < a2) placa("“sem título 3” = 🐱 gato?!", 640, 120, seg(t, a1, a1 + .3), "#dc2626", 26); if (t > a2 && t < la) placa("“sem título 4” = 🎵 música?!", 640, 120, seg(t, a2, a2 + .3), "#dc2626", 26); } },
 { chip: "VAMOS ENTRAR!", fala: F3, sfx: [[.1, "whoosh"], [em(F3, "perdido"), "pop"], [em(F3, "entrar"), "voa"], [em(F3, "bagunça"), "whoosh"]],
   draw(t, D) { const pe = em(F3, "perdido"), en = em(F3, "bagunça");
     g.save(); camera(t, [[0, 640, 400, 1], [en, 640, 380, 1.05], [en + 1.2, 640, 330, 5]]); quarto(t); monitor(640, 380, 1.2, telaPC(t, 0)); teclado(640, 505, 1, -1);
     pedro({ x: 380, y: 700, s: 1, olhar: 1, braco: -.8, bracoE: .3, boca: t > pe ? "riso" : "", pisca: pisca(t) }); lara({ x: 900, y: 700, s: 1, olhar: -1, braco: t > en ? -2.5 : -1.4, bracoE: .3, boca: "riso", pisca: pisca(t + .4) }); g.restore();
     if (t > pe && t < en + .5) balao("Ele só está PERDIDO!", 900, 180, 1); if (t > en + .9) { g.fillStyle = `rgba(255,255,255,${cl((t - en - .9) / .4)})`; g.fillRect(0, 0, 1280, 720); } } },
 { chip: "ARQUIVO", fala: F4, sfx: [[.1, "whoosh"], [em(F4, "arquivo"), "ding"], [em(F4, "texto"), "pop"], [em(F4, "foto"), "pop"], [em(F4, "música"), "pop"], [em(F4, "vídeo"), "pop"], [em(F4, "nome"), "ding"]],
   draw(t, D) { const ar = em(F4, "arquivo"), ts = ["texto", "foto", "música", "vídeo"].map(w => em(F4, w)), no = em(F4, "nome");
     g.save(); camera(t, [[0, 640, 300, 1.3], [ar, 640, 360, 1], [no, 640, 330, 1.2]]); cenaInterna(t);
     [["redacao", "docx"], ["passeio", "jpg"], ["hino", "mp3"], ["festa", "mp4"]].forEach(([n, e], i) => { if (t > ts[i]) arqP(lerp(1400, 260 + i * 250, io2(seg(t, ts[i], ts[i] + .7))), 420, 1.15, n, e, t); });
     g.restore(); if (t > ar) palavra("ARQUIVO", 640, 110, seg(t, ar, ar + .4), 76); if (t > ar + .5 && t < no) rotulo("tudo o que fica guardado no computador", 640, 175, "#fde68a", seg(t, ar + .5, ar + .9));
     if (t > no) etiqueta("cada um tem um NOME", 640, 190, 650, 480, seg(t, no, no + .4)); } },
 { chip: "PASTA", fala: F5, sfx: [[.1, "whoosh"], [em(F5, "pastas"), "ding"], [em(F5, "gaveta"), "pop"], [em(F5, "outras"), "whoosh"], [em(F5, "divisórias"), "pop"]],
   draw(t, D) { const pa = em(F5, "pastas"), ga = em(F5, "gaveta"), ou = em(F5, "outras");
     g.save(); camera(t, [[0, 640, 330, 1], [ga, 760, 300, 1.1], [ou, 820, 260, 1.2]]); cenaInterna(t);
     armario(820, 330, .78, ["Escola", "Fotos", "Músicas"], 0, seg(t, ga, ga + .8));
     if (t > ou) ["Ciências", "Português", "Informática"].forEach((n, i) => pasta(700 + i * 120, 125, .55 * back(seg(t, ou + i * .2, ou + .4 + i * .2)), "#fb923c", "", false));
     [["redacao", "docx"], ["passeio", "jpg"]].forEach(([n, e], i) => arqP(300 + i * 200, 360, .95, n, e, t)); g.restore();
     if (t > pa) palavra("PASTA = GAVETA", 640, 100, seg(t, pa, pa + .4), 64); if (t > ou) placa("📁 pasta dentro de pasta", 330, 200, seg(t, ou, ou + .4), "#7c3aed", 22); } },
 { chip: "EXTENSÃO", fala: F6, legenda: L6[6], sfx: [[.1, "whoosh"], [em(F6, "trabalho"), "pop"], [em(F6, "extensão"), "ding"], [em(F6, "programa"), "pop"]],
   draw(t, D) { const tr = em(F6, "trabalho"), ex = em(F6, "extensão"), pr = em(F6, "programa"); fundoEscuro(t, "#1e3a8a");
     g.save(); camera(t, [[0, 640, 360, 1], [ex, 760, 330, 1.12]]);
     g.font = `800 92px ${F}`; g.textAlign = "left"; const k = seg(t, tr, tr + .4); g.globalAlpha = cl(k * 1.5); g.fillStyle = "#fff"; g.fillText("trabalho", 250, 360); g.fillStyle = "#facc15"; g.fillText(".docx", 250 + g.measureText("trabalho").width, 360); g.globalAlpha = 1;
     g.restore(); if (t > ex) { etiqueta("NOME", 300, 520, 420, 380, seg(t, ex - .3, ex)); etiqueta("EXTENSÃO = o tipo", 860, 520, 820, 380, seg(t, ex, ex + .4)); palavra("EXTENSÃO", 640, 120, seg(t, ex, ex + .4), 72); }
     if (t > pr) { arqP(1120, 250, .9, "trabalho", "docx", t); rotulo("abre no editor de texto (Word)", 1050, 180, "#bfdbfe", seg(t, pr, pr + .4)); } } },
 { chip: "A TURMA DAS EXTENSÕES", fala: F7, legenda: L6[7], sfx: [[.1, "whoosh"], [em(F7, "txt"), "pop"], [em(F7, "jpg"), "pop"], [em(F7, "mp3"), "pop"], [em(F7, "mp4"), "pop"], [em(F7, "pdf"), "pop"]],
   draw(t, D) { const ts = [em(F7, "txt"), em(F7, "docx"), em(F7, "jpg"), em(F7, "png"), em(F7, "mp3"), em(F7, "mp4"), em(F7, "pdf")];
     g.save(); camera(t, [[0, 400, 380, 1.15], [ts[4], 640, 380, 1], [ts[6], 680, 380, 1.02]]); cenaInterna(t);
     [["notas", "txt"], ["redacao", "docx"], ["foto", "jpg"], ["desenho", "png"], ["hino", "mp3"], ["festa", "mp4"], ["boletim", "pdf"]].forEach(([n, e], i) => { if (t > ts[i]) arqP(130 + i * 170, 400 + (i % 2) * 40, .95, n, e, t); });
     g.restore(); const grupos = [["📝 TEXTO", 0], ["🖼️ IMAGEM", 2], ["🎵 MÚSICA", 4], ["🎬 VÍDEO", 5], ["📕 LER E IMPRIMIR", 6]];
     grupos.forEach(([r, i]) => { if (t > ts[i]) placa(r, 160 + i * 150, 130 + (i % 2) * 50, seg(t, ts[i], ts[i] + .4), EXT[["txt", "docx", "jpg", "png", "mp3", "mp4", "pdf"][i]][0], 20); }); } },
 { chip: "🆕 NOVIDADE: .JXL", fala: F8, legenda: L6[8], sfx: [[.1, "festa"], [em(F8, "jxl"), "ding"], [em(F8, "menor"), "whoosh"], [em(F8, "navegadores"), "pop"], [em(F8, "jpg"), "pop"]],
   draw(t, D) { const jx = em(F8, "jxl"), me = em(F8, "menor"), na = em(F8, "navegadores"), jp = em(F8, "jpg"); fundoEscuro(t, "#155e75");
     if (t > jx) arqP(330, 360, 1.3, "foto", "jxl", t, true); if (t > jx) palavra(".JXL = O NOVO JPEG", 640, 110, seg(t, jx, jx + .4), 56);
     if (t > me) { const k = seg(t, me, me + 1); g.fillStyle = "#e2e8f0"; rr(650, 260, 420 * (1 - .45 * k), 48, 10); g.fill(); g.fillStyle = NAVY; g.font = `800 20px ${F}`; g.textAlign = "left"; g.fillText("tamanho: " + Math.round(100 - 45 * k) + "%", 664, 292); rotulo("mesma qualidade, foto menor", 860, 345, "#a5f3fc", 1); }
     if (t > na) rotulo("os navegadores começaram a abrir em 2026", 860, 410, "#fde68a", seg(t, na, na + .4));
     if (t > jp) { arqP(980, 500 - 20, .8, "selfie", "jpg", t); rotulo("mas o .jpg ainda é o mais usado", 760, 560, "#fecaca", seg(t, jp, jp + .4)); } } },
 { chip: "CAMINHO", fala: F9, sfx: [[.1, "whoosh"], [em(F9, "caminho"), "ding"], [em(F9, "Documentos"), "pop"], [em(F9, "Escola"), "pop"], [em(F9, "Informática"), "pop"], [em(F9, "trabalho"), "festa"]],
   draw(t, D) { const ca = em(F9, "caminho"), ps = [em(F9, "Documentos"), em(F9, "Escola"), em(F9, "Informática"), em(F9, "trabalho")];
     const n = ps.filter(x => t > x).length, cx = [200, 520, 840, 1160][Math.max(0, n - 1)];
     g.save(); camera(t, [[0, 640, 360, .8], [ps[0], 200, 380, 1.1], [ps[1], 520, 380, 1.1], [ps[2], 840, 380, 1.1], [ps[3], 1160, 380, 1.1], [ps[3] + 1.2, 680, 360, .78]]); cenaInterna(t);
     g.fillStyle = "#334155"; g.fillRect(-200, 520, 1700, 80); for (let x = -200; x < 1500; x += 80) { g.fillStyle = "#facc15"; g.fillRect(x, 556, 40, 8); }
     ["📁 Documentos", "📁 Escola", "📁 Informática"].forEach((s, i) => placaRua(s, 200 + i * 320, 420, seg(t, ps[i], ps[i] + .4), ["#15803d", "#1d4ed8", "#7c3aed"][i]));
     if (t > ps[3]) arqP(1160, 440, 1, "trabalho", "docx", t, true); lara({ x: lerp(60, cx - 60, 1), y: 600, s: .8, olhar: 1, braco: -1.4, bracoE: .3, pisca: pisca(t) }); g.restore();
     if (t > ca) palavra("CAMINHO = ENDEREÇO", 640, 110, seg(t, ca, ca + .4), 58); if (t > ps[3] + .8) placa("Documentos › Escola › Informática › trabalho.docx", 640, 200, seg(t, ps[3] + .8, ps[3] + 1.2), "#0f172a", 22); } },
 { chip: "SALVAR COMO · CTRL + S", fala: F10, legenda: L6[10], sfx: [[.1, "whoosh"], [em(F10, "onde"), "tec"], [em(F10, "nome"), "tec"], [em(F10, "clique"), "ding"], [em(F10, "Control"), "tec"], [em(F10, "save"), "ding"]],
   draw(t, D) { const on = em(F10, "onde"), no = em(F10, "nome"), cl_ = em(F10, "clique"), ct = em(F10, "Control"), sv = em(F10, "save"); fundoEscuro(t, "#1e3a8a");
     const passo = t > cl_ ? 3 : t > no ? 2 : t > on ? 1 : 0;
     if (t < ct) { g.save(); camera(t, [[0, 640, 380, 1], [on, 560, 360, 1.15], [no, 700, 420, 1.2], [cl_, 640, 380, 1.05]]); janelaSalvar(640, 380, seg(t, 0, .5), passo, "trabalho-ciencias"); g.restore(); palavra("SALVAR COMO", 640, 100, seg(t, .1, .5), 56); }
     else { tecla("Ctrl", 520, 380, seg(t, ct, ct + .4), 160); palavra("+", 640, 380, seg(t, ct + .2, ct + .5), 70); tecla("S", 760, 380, seg(t, ct + .3, ct + .7)); palavra("ATALHO: SALVA NA HORA", 640, 120, seg(t, ct, ct + .4), 50);
       if (t > sv) rotulo("Ctrl = Control (controle) · S = save (salvar)", 640, 520, "#fde68a", seg(t, sv, sv + .4)); }
     lara({ x: 1150, y: 640, s: .8, olhar: -1, braco: -1.8, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "NOMES BONS · RENOMEAR", fala: F11, legenda: L6[11], sfx: [[.1, "whoosh"], [em(F11, "Redação"), "ding"], [em(F11, "sem"), "alerta"], [em(F11, "botão"), "tec"], [em(F11, "renomear"), "pop"]],
   draw(t, D) { const re = em(F11, "Redação"), se = em(F11, "sem"), bo = em(F11, "botão"), rn = em(F11, "renomear"); fundoEscuro(t, "#14532d");
     if (t < bo) { if (t > re) { cartaoC("✅ redacao-meio-ambiente.docx", 640, 230, 760, "#bbf7d0", seg(t, re, re + .4)); } if (t > se) { cartaoC("❌ sem título 3.docx", 640, 380, 760, "#fecaca", seg(t, se, se + .4)); }
       if (t > se + .6) cartaoC("✅ passeio-turma-2027.jpg   ❌ IMG_0001.jpg", 640, 520, 900, "#fef9c3", seg(t, se + .6, se + 1)); palavra("NOME BOM AJUDA A ACHAR", 640, 100, seg(t, re, re + .4), 52); }
     else { g.save(); camera(t, [[0, 640, 360, 1], [rn, 600, 330, 1.2]]); icone(480, 300, "docx", "sem título 3", 2.2);
       const k = seg(t, bo, bo + .3); if (k > 0) { g.fillStyle = "#fff"; rr(560, 250, 240, 170, 10); g.fill(); g.strokeStyle = "#94a3b8"; g.lineWidth = 2; rr(560, 250, 240, 170, 10); g.stroke(); ["Abrir", "Copiar", "Renomear", "Excluir"].forEach((n, i) => { if (i === 2 && t > rn) { g.fillStyle = "#bfdbfe"; rr(566, 258 + i * 40, 228, 34, 6); g.fill(); } g.fillStyle = NAVY; g.font = `600 20px ${F}`; g.textAlign = "left"; g.fillText(n, 584, 282 + i * 40); }); }
       cursor(t > rn ? 640 : 520, t > rn ? 360 : 320, t > bo && t < bo + .3); g.restore(); palavra("BOTÃO DIREITO › RENOMEAR", 640, 100, seg(t, bo, bo + .4), 48); }
     pedro({ x: 1150, y: 640, s: .8, olhar: -1, braco: -1.2, bracoE: .3, boca: "riso", pisca: pisca(t) }); } },
 { chip: "MISSÃO CUMPRIDA", fala: F12, sfx: [[.1, "whoosh"], [em(F12, "Explorador"), "pop"], [em(F12, "Escola"), "pop"], [em(F12, "Ciências"), "ding"], [em(F12, "Entregue"), "festa"]],
   draw(t, D) { const ex = em(F12, "Explorador"), es = em(F12, "Escola"), ci = em(F12, "Ciências", 1), en = em(F12, "Entregue"), mc = em(F12, "Missão");
     g.save(); camera(t, [[0, 640, 360, 1], [ex, 640, 330, 1.7], [en, 640, 430, .95]]); quarto(t);
     monitor(640, 380, 1.2, (x, y, w, h) => { g.fillStyle = "#f8fafc"; g.fillRect(x, y, w, h); g.fillStyle = "#e2e8f0"; g.fillRect(x, y, w, h * .14); g.fillStyle = NAVY; g.font = `700 ${Math.round(h * .07)}px ${F}`; g.textAlign = "left"; g.fillText("📁 Explorador de Arquivos", x + 10, y + h * .1);
       const linhas = ["📁 Escola", "    📁 Ciências", "        📄 trabalho-ciencias.docx", "    📁 Português", "    📁 Informática"]; linhas.forEach((l, i) => { if (t > es + i * .25 || i === 0 && t > es) { g.fillStyle = i === 2 && t > ci ? "#bbf7d0" : "transparent"; g.fillRect(x + 6, y + h * (.2 + i * .15) - h * .08, w - 12, h * .12); g.fillStyle = NAVY; g.fillText(l, x + 14, y + h * (.2 + i * .15)); } }); });
     teclado(640, 505, 1, -1); pedro({ x: 380, y: 700, s: 1, olhar: 1, braco: t > en ? -2.6 : -1, bracoE: t > en ? 2.6 : .3, boca: t > ci ? "riso" : "", pisca: pisca(t) }); lara({ x: 900, y: 700, s: 1, olhar: -1, braco: t > en ? -2.6 : -.6, bracoE: t > en ? 2.6 : .3, boca: "riso", pisca: pisca(t + .3) }); g.restore();
     if (t > ex && t < mc) etiqueta("Explorador: ícone de pasta amarela 📁", 900, 120, 700, 230, seg(t, ex, ex + .4)); if (t > mc) cumprida(t, mc); } },
 { chip: "ONDE EU USO ISSO?", fala: F13, legenda: L6[13], sfx: [[.1, "whoosh"], [em(F13, "galeria"), "pop"], [em(F13, "boletim"), "pop"], [em(F13, "secretaria"), "pop"]],
   draw(t, D) { ondeUso(t, F13, [["galeria", "📱", "Galeria do celular:", "álbuns são pastas"], ["boletim", "📕", "Boletim em PDF:", "vai para Downloads"], ["secretaria", "🗂️", "Secretaria da escola:", "uma pasta por turma"]]); } },
 { chip: "", fala: F14, sfx: [[.1, "whoosh"], [1.0, "festa"]],
   draw(t, D) { fimCartao(t, "6º ano · 1º bimestre de 2027 · Missão 4", [PEDRO, LARA]); } }
];

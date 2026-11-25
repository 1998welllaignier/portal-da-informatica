/* 🧪 Roteiro: o jogo 🤖 Byte: a Aventura na Sala de espera (25/11/2026): abre, joga, passa de fase, salva no código do aluno,
   perde as vidas (fim de jogo) e enfrenta o Rei Vírus. Prints em /tmp/byte-*.png. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const sh = (pg, n) => pg.screenshot({ path: "/tmp/byte-" + n + ".png" });
const J = (pg, f, a) => pg.evaluate(f, a);
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "config/tema": { modo: "byte" } });
  const al = await T.aluno(b, 0); await al.waitForTimeout(2500);
  await sh(al, "0-espera-tema");
  await al.locator('[data-op="jogos"]').click(); await al.waitForTimeout(1200);
  await sh(al, "1-menu");
  await al.locator('[data-j="byte-aventura"]').click(); await al.waitForTimeout(1500); await sh(al, "2-como");
  await al.locator('[data-x="jogar"]').click(); await al.waitForTimeout(1200); await sh(al, "3-mapa");
  await al.keyboard.press("Enter"); await al.waitForTimeout(600); await sh(al, "4-intro");
  await al.waitForTimeout(3600);
  // joga um pouco: anda para a direita pulando
  await al.keyboard.down("ArrowRight");
  for (let i = 0; i < 6; i++) { await al.keyboard.down("ArrowUp"); await al.waitForTimeout(350); await al.keyboard.up("ArrowUp"); await al.waitForTimeout(450); }
  await sh(al, "5-jogando");
  await al.keyboard.up("ArrowRight");
  console.log("depois de andar:", await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; return { e: t.estado, x: Math.round(t.p.x), vidas: t.vidas, pts: t.pts }; }));
  // teletransporta para perto do portal do fim
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; t.p.x = t.L.meta - 120; t.p.y = 0; t.p.vy = 0; });
  await al.keyboard.down("ArrowRight"); await al.waitForTimeout(900); await al.keyboard.up("ArrowRight");
  await al.waitForTimeout(1500); await sh(al, "6-fase-completa");
  await al.waitForTimeout(3500); await sh(al, "7-intro-fase2");
  const loja = await T.loja(); const ep = Object.entries(loja).find(([k]) => /sim1_espera/.test(k));
  console.log("salvo no aluno:", JSON.stringify(ep && ep[1].recordes), "pontos espera:", ep && ep[1].pontos);
  // fim de jogo: com 1 vida, cai no buraco
  await al.waitForTimeout(3000);
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; t.vidas = 1; t.morrer(); }); await al.waitForTimeout(2600);
  await sh(al, "8-fim-de-jogo"); console.log("fim de jogo:", await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; return { e: t.estado, fSalva: t.fSalva }; }));
  await al.waitForTimeout(3800); await sh(al, "9-overlay");
  await al.locator('[data-x="de-novo"]').click(); await al.waitForTimeout(1500); await sh(al, "9b-mapa-salvo");
  // castelo: fase 8
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; t.abrirFase(8); });
  await al.waitForTimeout(300); await sh(al, "10-intro-castelo"); await al.waitForTimeout(4200);
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; t.cam = t.L.arena; t.p.x = t.L.arena + 4 * 32; t.p.y = 0; t.p.vy = 0; });
  await al.waitForTimeout(2500); await sh(al, "11-rei-virus");
  // fase 4: a Marckeily com a bateria e a Railena no SAVE
  await J(al, () => PORTAL.jogoByte._ultimo._teste.abrirFase(4)); await al.waitForTimeout(400); await sh(al, "12-intro-fase4"); await al.waitForTimeout(4300);
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste, b = t.L.bats[0]; if (b) { t.cam = Math.max(0, b.x - 300); t.p.x = b.x - 60; t.p.y = 0; t.p.vy = 0; } });
  await al.waitForTimeout(1200); await sh(al, "13-marckeily");
  await J(al, () => { const t = PORTAL.jogoByte._ultimo._teste; t.cam = Math.max(0, t.L.cp.x - 400); t.p.x = t.L.cp.x - 80; t.p.y = 0; t.p.vy = 0; });
  await al.keyboard.down("ArrowRight"); await al.waitForTimeout(700); await al.keyboard.up("ArrowRight"); await al.waitForTimeout(200); await sh(al, "14-railena");
  console.log("castelo:", await J(al, () => PORTAL.jogoByte._ultimo._teste.estado));
  console.log("erros", al.erros); await b.close(); })();

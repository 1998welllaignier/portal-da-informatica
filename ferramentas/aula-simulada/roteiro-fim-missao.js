/* 🧪 Roteiro (25/11/2026): 🏁 fim da missão no "Resumo do que fiz" — básico concluído mostra 🎮 Sala de jogos (abre para qualquer série
   que terminou) e ⛶ Sair da tela cheia; básico incompleto mostra o aviso; a Sala de jogos também fica na lista de missões. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "config/hoje_9A": { dia: "" } });
  const a = await T.aluno(b, 0);
  const aid = await a.evaluate(() => (window.PORTAL.catalogo.apostilas.find(y => y.serie === "9" && window.PORTAL.doPeriodo(y) && !y.trilha && !y.oculta) || {}).id);
  const abre = async () => { await a.evaluate(x => location.hash = "#/missao/" + x + "/m1/relatorio", aid); await a.waitForTimeout(2500); await T.fecharJanelas(a); };
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m1/comecar", aid); await a.waitForTimeout(2000);
  await abre(); console.log("incompleto: aviso", await a.locator(".rel-fim-nao").count(), "botão jogos", await a.locator("#rel-jogos").count());
  await a.screenshot({ path: "/tmp/fim-1-incompleto.png" });
  // completa o básico
  await a.evaluate(x => { const P = window.PORTAL, { pages } = P.montarMissao(x, "m1"), p = P.getProg(x);
    pages.forEach(pg => (pg.atividades || []).forEach(at => { if (at.nivel === "basico" || pg.id === "basico") p.atv[at.id] = { status: "certo", quando: Date.now() }; })); P.setProg(x, p); }, aid);
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m1/comecar", aid); await a.waitForTimeout(1200); await abre();
  console.log("completo: botão jogos", await a.locator("#rel-jogos").count(), "sair visível (sem tela cheia)", await a.locator("#rel-sair:visible").count());
  // o Chrome sem janela não entra em tela cheia de verdade: simula o estado (o botão só olha document.fullscreenElement e o evento)
  await a.evaluate(() => { let fs = document.documentElement; Object.defineProperty(document, "fullscreenElement", { get: () => fs, configurable: true });
    document.exitFullscreen = () => { fs = null; document.dispatchEvent(new Event("fullscreenchange")); window.dispatchEvent(new Event("fullscreenchange")); return Promise.resolve(); };
    window.dispatchEvent(new Event("fullscreenchange")); }); await a.waitForTimeout(300);
  console.log("em tela cheia: sair visível", await a.locator("#rel-sair:visible").count());
  await a.screenshot({ path: "/tmp/fim-2-completo.png" });
  await a.locator("#rel-sair").click(); await a.waitForTimeout(500); console.log("saiu da tela cheia:", await a.evaluate(() => !document.fullscreenElement));
  await a.locator("#rel-jogos").click(); await a.waitForTimeout(2500); console.log("jogos: url", a.url(), "jogos na sala", await a.locator(".jogos5-box [data-j]").count());
  await a.screenshot({ path: "/tmp/fim-3-sala.png" });
  // 🎮 a Sala de jogos fica também na lista de missões (todas as séries, 25/11/2026)
  const a2 = await T.aluno(b, 1); await a2.evaluate(x => location.hash = "#/apostila/" + x, aid); await a2.waitForTimeout(2500); await T.fecharJanelas(a2);
  console.log("botão da Sala de jogos na lista de missões (9º ano):", await a2.locator(".jogos5-cta").count()); await a2.screenshot({ path: "/tmp/fim-4-lista.png" });
  await a2.locator(".jogos5-cta").click(); await a2.waitForTimeout(2500); console.log("colega entrou na sala:", a2.url(), await a2.locator(".jogos5-box [data-j]").count(), "jogos");
  console.log("erros", a.erros, a2.erros); await b.close(); })();

/* 🧪 Roteiro (25/11/2026): 🎮🔒 Sala de jogos na lista de missões — fechada na hora da aula da turma (abre só pelo 🏁 fim da missão,
   com o básico concluído) e aberta fora da aula. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const d = new Date(Date.now() - 3 * 3600000).toISOString().slice(0, 10);
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  // 1) AULA ACONTECENDO (missão liberada, sem sala de espera)
  await T.semear({ "config/hoje_9A": { dia: d, iniciadaDia: d, espera: false, largadaEm: Date.now(), aid: "informatica-9ano-4bim", mid: "m1", titulo: "Missão 1", travar: false } });
  const a = await T.aluno(b, 0); await a.waitForTimeout(1500);
  console.log("hoje do portal:", await a.evaluate(() => window.PORTAL.nuvem.hoje()), "semeado:", d);
  await a.evaluate(() => location.hash = "#/apostila/informatica-9ano-4bim"); await a.waitForTimeout(3500); await T.fecharJanelas(a);
  console.log("AULA: cartão fechado", await a.locator(".jogos5-fechada").count(), "| link aberto", await a.locator("a.jogos5-cta").count());
  await a.screenshot({ path: "/tmp/jogos-aula-1-fechada.png" });
  await a.evaluate(() => location.hash = "#/jogos"); await a.waitForTimeout(3000); console.log("AULA: #/jogos direto foi para:", a.url());
  // termina o básico e entra pelo resumo
  await a.evaluate(() => { const P = window.PORTAL, x = "informatica-9ano-4bim", { pages } = P.montarMissao(x, "m1"), p = P.getProg(x);
    pages.forEach(pg => (pg.atividades || []).forEach(at => { if (at.nivel === "basico" || pg.id === "basico") p.atv[at.id] = { status: "certo", quando: Date.now() }; })); P.setProg(x, p); });
  await a.evaluate(() => location.hash = "#/missao/informatica-9ano-4bim/m1/relatorio"); await a.waitForTimeout(3000); await T.fecharJanelas(a);
  await a.locator("#rel-jogos").click(); await a.waitForTimeout(3000); console.log("AULA: pelo fim da missão entrou em:", a.url(), await a.locator(".jogos5-box [data-j]").count(), "jogos");
  await a.evaluate(() => location.hash = "#/apostila/informatica-9ano-4bim"); await a.waitForTimeout(3000); await T.fecharJanelas(a);
  console.log("AULA, depois de concluir: link aberto na lista", await a.locator("a.jogos5-cta").count());
  // 2) SEM AULA
  await T.semear({ "config/hoje_9A": { dia: "", iniciadaDia: "" } });
  const a2 = await T.aluno(b, 1); await a2.evaluate(() => location.hash = "#/apostila/informatica-9ano-4bim"); await a2.waitForTimeout(3500); await T.fecharJanelas(a2);
  console.log("SEM AULA: link aberto", await a2.locator("a.jogos5-cta").count(), "| fechado", await a2.locator(".jogos5-fechada").count());
  await a2.screenshot({ path: "/tmp/jogos-aula-2-aberta.png" });
  await a2.locator("a.jogos5-cta").click(); await a2.waitForTimeout(3000); console.log("SEM AULA: entrou em:", a2.url(), await a2.locator(".jogos5-box [data-j]").count(), "jogos");
  console.log("erros", a.erros, a2.erros); await b.close(); })();

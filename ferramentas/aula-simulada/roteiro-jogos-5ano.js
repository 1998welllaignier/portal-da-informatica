/* 🧪 Roteiro (25/11/2026): a 🎮 Sala de jogos do 5º ano — botão na apostila, todos os jogos e o recorde salvo no aluno. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "alunos/sim1": { id: "sim1", nome: "Pedro Teste", turma: "5-ter", codigo: "1001", ativo: true } });
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "5", turma: "5-ter", modo: "sozinho", nuvem: true, alunoIds: ["sim1"], nomes: ["Pedro Teste"], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })));
  await pg.evaluate(async () => { const app = window.PORTAL.nuvem.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); });
  await pg.goto(T.BASE + "/#/apostila/informatica-5ano-4bim"); await pg.reload(); await pg.waitForTimeout(3500);
  await pg.screenshot({ path: "/tmp/j5-1-apostila.png" });
  await pg.locator(".jogos5-cta").click(); await pg.waitForTimeout(2500); await pg.screenshot({ path: "/tmp/j5-2-sala.png", fullPage: true });
  console.log("jogos na sala:", await pg.locator(".jogos5-box [data-j]").count(), "url", pg.url());
  await pg.locator('[data-j="byte-aventura"]').click(); await pg.waitForTimeout(800); await pg.locator('[data-x="jogar"]').click(); await pg.waitForTimeout(1500);
  await pg.keyboard.press("Escape"); await pg.waitForTimeout(500); await pg.keyboard.press("Enter"); await pg.waitForTimeout(1500);
  const loja = await T.loja(); console.log("salvo:", JSON.stringify((loja["progresso/sim1_espera"] || {}).recordes));
  // aluno do 6º ano não entra
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "6", turma: "6A", modo: "sozinho", nuvem: true, alunoIds: ["sim2"], nomes: ["X"], entrou: Date.now() })));
  await pg.goto(T.BASE + "/#/jogos"); await pg.reload(); await pg.waitForTimeout(2500); console.log("6º ano em #/jogos foi para:", pg.url());
  console.log("erros", pg.erros); await b.close(); })();

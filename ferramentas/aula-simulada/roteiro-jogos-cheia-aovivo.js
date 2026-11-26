/* 🧪 Roteiro (26/11/2026): aluno jogando em TELA CHEIA na 🎮 Sala de jogos e o professor abre o vídeo da Aula ao vivo e a roleta:
   o jogo tem que sair da tela cheia sozinho e o vídeo/roleta aparecem por cima. Também: jogar → tela cheia; Sair do jogo → sai. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();   // aula do 9º A iniciada; o aluno terminou a missão e foi para a Sala de jogos (liberada pelo fim)
  const al = await T.aluno(b, 0); await al.evaluate(() => sessionStorage.setItem("jogos-liberados", "9A|" + new Date().toDateString())); await al.goto(T.BASE + "/#/jogos"); await al.waitForTimeout(2500); await T.fecharJanelas(al);
  const R = {};
  await al.locator(".jg-card").first().click(); await al.waitForTimeout(400); await al.locator('[data-x="jogar"]').click(); await al.waitForTimeout(1500);
  R.jogarEntraEmTelaCheia = await al.evaluate(() => !!document.fullscreenElement && document.fullscreenElement.classList.contains("jg-fs"));
  await al.locator('.jg-topo [data-x="menu"]').click(); await al.waitForTimeout(800);
  R.sairDoJogoSai = await al.evaluate(() => !document.fullscreenElement);
  await al.locator(".jg-card").first().click(); await al.waitForTimeout(400); await al.locator('[data-x="jogar"]').click(); await al.waitForTimeout(1500);
  R.deNovoEmTelaCheia = await al.evaluate(() => !!document.fullscreenElement);
  // professor abre a Aula ao vivo pelo vídeo
  const prof = await T.professor(b, "#/painel/aula/9A"); await prof.waitForTimeout(2000);
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await prof.locator(".pc-b", { hasText: "Começar pelo vídeo" }).first().click().catch(() => {}); await prof.waitForTimeout(3000);
  await prof.locator(".pc-b", { hasText: "Play" }).first().click().catch(() => {}); await prof.waitForTimeout(5000);
  R.videoAluno = await al.evaluate(() => { const c = document.querySelector(".pc-aluno"); return c ? "aparece; tela cheia do jogo: " + !!(document.fullscreenElement && document.fullscreenElement.classList.contains("jg-fs")) : "NÃO APARECEU"; });
  // roleta (o painel grava config/roleta_9A; o aluno mostra por cima)
  await al.locator('.jg-topo [data-x="menu"]').click().catch(() => {}); await al.waitForTimeout(500);
  await al.locator(".jg-card").first().click().catch(() => {}); await al.waitForTimeout(400); await al.locator('[data-x="jogar"]').click().catch(() => {}); await al.waitForTimeout(1500);
  R.antesRoleta = await al.evaluate(() => !!document.fullscreenElement);
  await prof.evaluate(async () => { await window.PORTAL.nuvem.db().collection("config").doc("roleta_9A").set({ dia: window.PORTAL.nuvem.hoje(), em: Date.now(), girando: true, nomes: ["Ana", "Bruno"] }, { merge: true }); });
  await al.waitForTimeout(3000);
  R.roleta = await al.evaluate(() => (document.querySelector(".rol-aluno") ? "aparece" : "não apareceu") + "; tela cheia do jogo: " + !!(document.fullscreenElement && document.fullscreenElement.classList.contains("jg-fs")));
  console.log(JSON.stringify(R, null, 1)); console.log("erros", prof.erros, al.erros); await b.close(); })();

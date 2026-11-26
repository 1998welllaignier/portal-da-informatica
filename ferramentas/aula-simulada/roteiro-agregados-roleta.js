/* 🧪 Roteiro (26/11/2026): Aula ao vivo JÁ ABERTA, o professor inclui um agregado pelo 🎒 e ele entra na roleta da leitura sem reabrir nada. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "alunos/q1": { id: "q1", nome: "Pedro Quinto Teste", turma: "AG", codigo: "2001", ativo: true, serie: "5" }, "acessos/AG_2001": { alunoId: "q1", turma: "AG", ativo: true, nome: "Pedro Quinto Teste", serie: "5" } });
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "5", turma: "AG", modo: "sozinho", nuvem: true, alunoIds: ["q1"], nomes: ["Pedro Quinto Teste"], entrou: Date.now() })));
  await pg.evaluate(async () => { const app = window.PORTAL.nuvem.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); await app.db.collection("progresso").doc("q1_sessao").set({ alunoId: "q1", turma: "AG", tipo: "sessao", ping: Date.now() }, { merge: true }); });
  const al = [await T.aluno(b, 0)];
  const pr = await T.pagina(b, "prof"); await pr.goto(T.BASE + "/#/painel/aula/9A"); await pr.waitForTimeout(2500);
  for (let i = 0; i < 12; i++) { await pr.evaluate(() => document.querySelectorAll("dialog[open]").forEach(d => d.close("nao"))); await pr.waitForTimeout(500); }
  // abre a Aula ao vivo ANTES de incluir
  await pr.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await pr.waitForTimeout(3000);
  await pr.locator(".pc-b", { hasText: "Ir ao painel" }).first().click().catch(e => console.log("ir ao painel?", e.message.slice(0, 60))); await pr.waitForTimeout(1000);
  await pr.locator(".pp-ag-bt").click(); await pr.waitForTimeout(1500);
  await pr.locator('dialog[open] input[value="q1"]').check(); await pr.locator('dialog[open] button[value="ok"]').click(); await pr.waitForTimeout(2500);
  // volta para a Aula ao vivo e gira a roleta da leitura
  await pr.locator(".pc-volta").click().catch(() => {}); await pr.waitForTimeout(1500);
  await pr.locator(".pc-b", { hasText: "Começar pela leitura" }).first().click().catch(() => {}); await pr.waitForTimeout(2000);
  await pr.locator(".pc-b", { hasText: "Sortear quem lê" }).first().click().catch(e => console.log("roleta?", e.message.slice(0, 60))); await pr.waitForTimeout(2500);
  console.log("nomes na roleta:", await pr.evaluate(() => [...document.querySelectorAll(".rl-svg text, .rl-area")].map(x => x.textContent).join(" | ").slice(0, 300)));
  await pr.screenshot({ path: "/tmp/rol.png" });
  console.log("erros", pr.erros); await b.close(); })();

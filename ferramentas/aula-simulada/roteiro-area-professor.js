/* 🧪 Roteiro (26/11/2026, segurança): Área do professor, Trilhas e versões para imprimir só com a conta do professor;
   o aluno logado imprime só a apostila da série dele; quem não entrou vai para o login. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" }); await T.semear();
  const R = {}, tit = pg => pg.evaluate(() => (document.querySelector("main h1, .tela h1") || {}).textContent || "");
  const ver = async (pg, h) => { await pg.goto(T.BASE + "/" + h); await pg.waitForTimeout(2500); return (await tit(pg)).trim().slice(0, 40) + (await pg.locator(".restrita").count() ? " [BLOQUEADA]" : "") + (await pg.locator(".imp-capa").count() ? " [IMPRIMIR ABERTO]" : ""); };
  const anon = await T.pagina(b, "anon");
  R.anonVer = await ver(anon, "#/ver/informatica-9ano-4bim/m1"); R.anonTestar = await ver(anon, "#/testar/informatica-9ano-4bim/m1");
  R.anonProfessor = await ver(anon, "#/professor"); R.anonTrilhas = await ver(anon, "#/trilhas"); R.anonImprimir = await ver(anon, "#/imprimir/informatica-9ano-4bim");
  const al = await T.aluno(b, 0); await T.fecharJanelas(al);
  R.alunoImprimeASua = await ver(al, "#/imprimir/informatica-9ano-4bim"); R.alunoOutraSerie = await ver(al, "#/imprimir/informatica-6ano-2027-1bim"); R.alunoProfessor = await ver(al, "#/professor");
  const pr = await T.professor(b, "#/painel"); await pr.waitForTimeout(2500);
  R.profVerMesmaAba = await ver(pr, "#/ver/informatica-9ano-4bim");
  await pr.goto(T.BASE + "/#/painel/aula/9A"); await pr.waitForTimeout(3000);
  const [nova] = await Promise.all([pr.context().waitForEvent("page"), pr.locator("a.pp-cx-b", { hasText: "Apostila do aluno" }).click()]);
  await nova.waitForTimeout(3000); R.botaoOlhoAbaNova = (nova.url().split("#")[1] || "") + (await nova.locator(".restrita").count() ? " [BLOQUEADA]" : " [ABRIU]");
  R.passeUsadoUmaVez = await nova.evaluate(() => localStorage.getItem("portalJK:passeVer") === null);
  R.profProfessor = await ver(pr, "#/professor"); R.profTrilhas = await ver(pr, "#/trilhas"); R.profImprimir = await ver(pr, "#/imprimir/informatica-6ano-2027-1bim");
  console.log(R); console.log("erros", anon.erros, al.erros, pr.erros); await b.close(); })();

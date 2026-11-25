/* 🧪 Roteiro (25/11/2026): aluno cadastrado no 9B que frequenta a aula do 9A tem de cair na Sala de espera do 9A. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "config/liberar_9B": { outra: { sim1: "9A" } }, "alunos/sim1": { id: "sim1", nome: "Ana Teste Souza", turma: "9B", codigo: "1001", ativo: true, outraTurma: "9A" } });
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "9", turma: "9B", modo: "sozinho", nuvem: true, alunoIds: ["sim1"], nomes: ["Ana"], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })));
  await pg.evaluate(async () => { const app = window.PORTAL.nuvem.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); });
  await pg.goto(T.BASE + "/#/apostilas"); await pg.reload(); await pg.waitForTimeout(4000);
  console.log("aluno da 9B que assiste no 9A foi para:", pg.url(), "erros", pg.erros); await b.close(); })();

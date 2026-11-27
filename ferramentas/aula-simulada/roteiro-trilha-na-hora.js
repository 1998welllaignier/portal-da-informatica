/* 🧪 Roteiro (26/11/2026): 👣 o professor passa o aluno para a Trilha Passo a Passo (ou tira) no painel e vale NA HORA:
   o aluno que está numa missão é levado para a mesma missão na Trilha (e de volta), sem sair e entrar de novo.
   Vale também para o 🎒 agregado (Trilha da série dele), mesmo participando da aula de outra turma. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const ag = { "alunos/q7": { id: "q7", nome: "Rui Agregado Teste", turma: "AG", codigo: "2007", ativo: true, serie: "7" }, "acessos/AG_2007": { alunoId: "q7", turma: "AG", ativo: true, nome: "Rui Agregado Teste", serie: "7" } };
  await T.semear(Object.assign({ "config/hoje_9A": { dia: "" } }, ag)); const R = {};
  // aluno do 9º A numa missão
  const a = await T.aluno(b, 0); await a.evaluate(() => location.hash = "#/missao/informatica-9ano-4bim/m3/comecar"); await a.waitForTimeout(2500); await T.fecharJanelas(a);
  const prof = await T.professor(b, "#/painel"); await prof.waitForTimeout(2000);
  const marcar = (t, id, v) => prof.evaluate(([t, id, v]) => window.PORTAL.nuvem.db().collection("config").doc("liberar_" + t).set({ trilha: { [id]: v } }, { merge: true }), [t, id, v]);
  await marcar("9A", "sim1", true); await a.waitForTimeout(3000);
  R.aluno_marcado = a.url().split("#")[1] + " · sessão trilha: " + await a.evaluate(() => window.PORTAL.sess.get().trilha);
  await marcar("9A", "sim1", false); await a.waitForTimeout(3000);
  R.aluno_desmarcado = a.url().split("#")[1] + " · sessão trilha: " + await a.evaluate(() => window.PORTAL.sess.get().trilha);
  // agregado do 7º
  const g = await T.pagina(b, "aluno"); await g.goto(T.BASE + "/");
  await g.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "7", turma: "AG", modo: "sozinho", nuvem: true, alunoIds: ["q7"], nomes: ["Rui Agregado Teste"], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })));
  await g.evaluate(async () => { const app = window.PORTAL.nuvem.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); });
  await g.goto(T.BASE + "/#/missao/informatica-7ano-4bim/m1/comecar"); await g.reload(); await g.waitForTimeout(3000); await T.fecharJanelas(g);
  R.agregado_antes = g.url().split("#")[1];
  await marcar("AG", "q7", true); await g.waitForTimeout(3000);
  R.agregado_marcado = g.url().split("#")[1];
  // colega que não foi marcado continua onde estava
  const c = await T.aluno(b, 1); await c.evaluate(() => location.hash = "#/missao/informatica-9ano-4bim/m3/comecar"); await c.waitForTimeout(2500); await T.fecharJanelas(c);
  await marcar("9A", "sim1", true); await c.waitForTimeout(2500); R.colega_nao_muda = c.url().split("#")[1];
  R.CONFERE = { marca: /4bim-trilha\/m3/.test(R.aluno_marcado), desmarca: /9ano-4bim\/m3/.test(R.aluno_desmarcado) && !/trilha\//.test(R.aluno_desmarcado), agregado: /7ano-4bim-trilha\/m1/.test(R.agregado_marcado), colega: !/trilha/.test(R.colega_nao_muda) };
  console.log(R); console.log("erros", a.erros, g.erros, c.erros, prof.erros); await b.close(); })();

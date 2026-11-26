/* 🧪 Roteiro (26/11/2026): 🎒 agregado INCLUÍDO na aula de uma turma — o painel pergunta sozinho quando há agregado no portal,
   o professor inclui, a tela do agregado vai para a sala de espera da turma, aparece na lista do painel, entra na missão da turma
   depois da largada e, quando a aula acaba, volta para as missões da série dele. Um agregado NÃO incluído continua livre. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const espera = ms => new Promise(r => setTimeout(r, ms));
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const ag = (id, nome, cod, serie) => ({ ["alunos/" + id]: { id, nome, turma: "AG", codigo: cod, ativo: true, serie }, ["acessos/AG_" + cod]: { alunoId: id, turma: "AG", ativo: true, nome, serie }, ["progresso/" + id + "_avatar"]: { alunoId: id, turma: "AG", avatar: { tipo: "m" } } });
  await T.semear(Object.assign({}, ag("q1", "Pedro Quinto Teste", "2001", "5"), ag("q2", "Lia Quinto Teste", "2002", "5")));
  const R = {};
  async function agregado(id, nome) {
    const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
    await pg.evaluate(a => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "5", turma: "AG", modo: "sozinho", nuvem: true, alunoIds: [a.id], nomes: [a.nome], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })), { id, nome });
    await pg.evaluate(async id => { const N = window.PORTAL.nuvem, app = N.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously();
      await app.db.collection("progresso").doc(id + "_sessao").set({ alunoId: id, turma: "AG", tipo: "sessao", ping: Date.now(), uid: app.auth.currentUser.uid }, { merge: true }); }, id);
    await pg.goto(T.BASE + "/#/apostilas"); await pg.reload(); await pg.waitForTimeout(3000); return pg;
  }
  const a1 = await agregado("q1", "Pedro Quinto Teste"), a2 = await agregado("q2", "Lia Quinto Teste");
  R.antes = { a1: a1.url(), trava: await a1.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m1"))) };
  // 1) painel na aba Aula do 9º A (aula iniciada, sala de espera): pergunta sozinho
  const pr = await T.pagina(b, "prof"); await pr.goto(T.BASE + "/#/painel/aula/9A"); await pr.waitForTimeout(3500);
  for (let i = 0; i < 12; i++) { await pr.evaluate(() => document.querySelectorAll("dialog[open]").forEach(d => { if (!d.querySelector(".pp-ag-lista")) d.close(); })); await pr.waitForTimeout(700); if (await pr.locator("dialog[open] .pp-ag-lista").count()) break; }
  R.dialogo = await pr.locator("dialog[open] h2").allInnerTexts();
  R.itens = await pr.locator("dialog[open] .pp-ag-item").allInnerTexts();
  await pr.screenshot({ path: "/tmp/aga-1-pergunta.png" });
  // desmarca a Lia (só o Pedro entra) e inclui
  const cbLia = pr.locator('dialog[open] input[value="q2"]'); if (await cbLia.isChecked().catch(() => false)) await cbLia.uncheck();
  const cbPe = pr.locator('dialog[open] input[value="q1"]'); if (!(await cbPe.isChecked().catch(() => true))) await cbPe.check();
  await pr.locator('dialog[open] button[value="ok"]').click(); await pr.waitForTimeout(1500);
  let L = await T.loja(); R.hojeAgregados = (L["config/hoje_9A"] || {}).agregados;
  R.botao = await pr.locator(".pp-ag-bt").innerText().catch(() => "");
  // 2) a tela do Pedro entra na aula (sala de espera) em até 15 s; a da Lia não
  await espera(17000);
  R.a1Depois = a1.url(); R.a2Depois = a2.url();
  R.agAula = await a1.evaluate(() => window.PORTAL.agAula); R.palcoOuve = await a1.evaluate(() => window.PORTAL.palco._A.turma + " · docs: " + Object.keys(window.PORTAL.palco._A.docs).join(","));
  await a1.screenshot({ path: "/tmp/aga-2-pedro.png" });
  // 3) o painel mostra o Pedro entre os participantes (sala de espera)
  await pr.reload(); await pr.waitForTimeout(6000); await T.fecharJanelas(pr);
  R.painelMostraPedro = await pr.evaluate(() => document.body.innerText.includes("Pedro Quinto"));
  // 4) largada: Pedro vai para a missão da turma (9º ano) e as tarefas abrem
  await pr.evaluate(async () => { await window.PORTAL.nuvem.db().collection("config").doc("hoje_9A").set({ largadaEm: Date.now() }, { merge: true }); });
  await espera(25000);
  if (!/missao/.test(a1.url())) { await a1.goto(T.BASE + "/#/apostilas"); await a1.waitForTimeout(4000); }
  R.a1Largada = a1.url();
  R.travaAula = await a1.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m3")));
  R.travaOutraMissao = await a1.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m1")));
  R.liaLivre = await a2.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m2")));
  // 5) fim da aula: Pedro volta para as missões dele
  await pr.evaluate(async () => { await window.PORTAL.nuvem.db().collection("config").doc("hoje_9A").set({ iniciadaDia: "", finalizadaEm: Date.now() }, { merge: true }); });
  await espera(33000);
  R.a1Fim = a1.url(); R.agAulaFim = await a1.evaluate(() => window.PORTAL.agAula);
  R.travaFim = await a1.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m1")));
  await a1.goto(T.BASE + "/#/missao/informatica-9ano-4bim/m3"); await a1.waitForTimeout(2500); R.a1OutraSerieDepois = a1.url();
  console.log(JSON.stringify(R, null, 1));
  console.log("erros", pr.erros, a1.erros, a2.erros); await b.close(); })();

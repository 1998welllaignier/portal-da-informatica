/* 🧪 Roteiro (25/11/2026): aluno do 5º ano entra na aula da turma que está acontecendo (aqui, o 9º A): Sala de espera,
   depois a missão da apostila dessa turma, e aparece no painel do professor dessa aula. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const hoje = new Date().toLocaleDateString("sv-SE"), agora = Date.now();
  await T.semear({ "alunos/sim9": { id: "sim9", nome: "Pedro Quinto", turma: "5-ter", codigo: "1009", ativo: true },
    "config/hoje_9A": { dia: hoje, iniciadaDia: hoje, iniciadaEm: agora - 5 * 60e3, mid: "m2", aid: "informatica-9ano-4bim", espera: true, largadaEm: 0, travar: true } });
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "5", turma: "5-ter", modo: "sozinho", nuvem: true, alunoIds: ["sim9"], nomes: ["Pedro Quinto"], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })));
  await pg.evaluate(async () => { const app = window.PORTAL.nuvem.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously();
    await app.db.collection("progresso").doc("sim9_entrada").set({ alunoId: "sim9", turma: "5-ter", tipo: "entrada", dias: { [window.PORTAL.nuvem.hoje()]: Date.now() } }, { merge: true }); });
  await pg.goto(T.BASE + "/#/apostilas"); await pg.reload(); await pg.waitForTimeout(4000);
  console.log("1) 5º ano com o 9º A na sala de espera foi para:", pg.url());
  // largada
  const prof = await T.professor(b, "#/painel");
  await prof.evaluate(async () => { await window.PORTAL.nuvem.app(0).db.collection("config").doc("hoje_9A").set({ largadaEm: Date.now() }, { merge: true }); });
  await pg.waitForTimeout(4000); console.log("2) depois da largada:", pg.url());
  const st = await pg.evaluate(async () => { const s = JSON.parse(sessionStorage.getItem("portalJK:sessao")); return { m2: await PORTAL.trava.estado(s, "m2"), m3: await PORTAL.trava.estado(s, "m3") }; });
  console.log("3) trava m2/m3:", JSON.stringify(st));
  await pg.screenshot({ path: "/tmp/q5-missao.png" });
  const loja = await T.loja(); console.log("4) visita:", JSON.stringify(loja["progresso/sim9_visita"]));
  // painel da aula do 9º A lista o Pedro
  await prof.goto(T.BASE + "/#/painel"); await prof.reload(); await prof.waitForTimeout(3000); await T.fecharJanelas(prof);
  await prof.evaluate(() => { const x = document.createElement("button"); x.id = "pp-vivo"; document.body.appendChild(x); x.click(); }); await prof.waitForTimeout(3000);
  await prof.evaluate(() => { const s = document.querySelector("#pv-t"); if (s && s.value !== "9A") { s.value = "9A"; s.dispatchEvent(new Event("change")); } }); await prof.waitForTimeout(3000);
  const tv = await prof.locator(".pv-tab").innerText().catch(() => ""); await prof.screenshot({ path: "/tmp/q5-painel.png" });
  console.log("5) painel ao vivo do 9º A mostra o Pedro:", tv.includes("Pedro"));
  console.log("erros", pg.erros, prof.erros); await b.close(); })();

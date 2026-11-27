/* 🧪 Roteiro (27/11/2026): 🌟 Maestra da leitura — a roleta da leitura guiada cai num aluno do Modo Helena; na tela dele aparecem
   os nomes de quem está online; ele toca num nome; a escolha aparece na tela de todos e no painel; quando o escolhido lê,
   os dois ganham os pontos de leitor (+10). Aluno comum sorteado continua igual (Pode ler!). */
const { chromium } = require("playwright"); const T = require("./turma.js");
const sh = (pg, n) => pg.screenshot({ path: "/tmp/maestra-" + n + ".png" });
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const hj = T.hoje(), C = T.ALUNOS[2];
  // Carla (sim3) está no Modo Helena; Ana e Bruno já leram hoje, então a roleta só pode cair na Carla
  await T.semear({ ["alunos/sim3"]: Object.assign({}, C, { modoHelena: true }), "config/roleta_9A": { dia: hj, ja: ["sim1", "sim2"] } });
  const prof = await T.professor(b, "#/painel/aula/9A");
  const al = []; for (let i = 0; i < 3; i++) al.push(await T.aluno(b, i));
  await prof.waitForTimeout(1500); const R = {};
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(2000);
  await bt(prof, "Sortear quem lê"); await prof.waitForTimeout(1500);
  // todos "online" agora (ping fresco), como numa aula de verdade
  for (const pg of al) await pg.evaluate(async id => { const app = window.PORTAL.nuvem.app(0); await app.db.collection("progresso").doc(id + "_sessao").set({ ping: Date.now() }, { merge: true }); }, pg.aluno.id);
  // cada um com o avatar escolhido (como no começo da aula)
  for (const pg of al) await pg.evaluate(async id => { const P = window.PORTAL; await P.nuvem.app(0).db.collection("progresso").doc(id + "_avatar").set({ alunoId: id, turma: "9A", tipo: "avatar", avatar: P.avatar.sortear() }, { merge: true }); }, pg.aluno.id);
  await prof.waitForTimeout(1500);
  await prof.locator(".rl-girar").click(); await prof.waitForTimeout(8500);
  R.prof_maestra = await prof.locator(".rl-maestra h1").innerText().catch(() => "—");
  await al[2].waitForTimeout(1500); await sh(al[2], "1-helena-escolhe"); await sh(al[0], "1-colega-ve"); await sh(prof, "1-prof-espera");
  R.helena_tela = await al[2].locator(".rol-maestra .rol-sup").innerText().catch(() => "—");
  R.helena_opcoes = await al[2].locator(".rol-maes-op").allInnerTexts();
  R.avatares = await al[2].locator(".rol-maes-av svg").count();
  R.colega_ve = await al[0].locator(".rol-maestra-ve").innerText().catch(() => "—");
  // a Helena toca na Ana
  await al[2].locator(".rol-maes-op", { hasText: "Ana" }).click(); await al[2].waitForTimeout(800); await sh(al[2], "2-helena-escolheu");
  await prof.waitForTimeout(3000); await sh(prof, "2-prof-escolha");
  R.prof_escolha = await prof.locator(".rl-nome .rl-sup").last().innerText().catch(() => "—") + " → " + await prof.locator(".rl-nome h1").last().innerText().catch(() => "—");
  await al[0].waitForTimeout(1000); await sh(al[0], "3-ana-escolhida");
  R.ana_ve = await al[0].locator(".rol-aluno .rol-sup").innerText().catch(() => "—");
  R.bruno_ve = await al[1].locator(".rol-aluno").innerText().catch(() => "—");
  await prof.locator(".rl-vai").click(); await prof.waitForTimeout(1500);
  R.status = await prof.locator(".pc-st").innerText();
  await bt(prof, "Leu!"); await prof.waitForTimeout(2500); await sh(prof, "4-prof-leu");
  const L = await T.loja(); const pal = L["config/palco_9A"] || {};
  R.xp = pal.xp; R.leitor = pal.leitor;
  R.CONFERE = { caiuNaMaestra: /Carla/.test(R.prof_maestra), telaDela: /maestra da leitura/.test(R.helena_tela), opcoes: R.helena_opcoes.length === 2 && !R.helena_opcoes.some(x => /Carla/.test(x)),
    avatarNosBotoes: R.avatares === 2, colegaAvisado: /maestra/.test(R.colega_ve), profRecebeu: /Ana/.test(R.prof_escolha), anaSabe: /escolheu VOCÊ/.test(R.ana_ve),
    pontosLeitora: (pal.xp || {}).sim1 === 10, pontosMaestra: (pal.xp || {}).sim3 === 10 };
  console.log(R); console.log("erros", prof.erros, al[0].erros, al[1].erros, al[2].erros); await b.close(); })();

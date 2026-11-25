/* 🏠🔓 Reposição em casa (25/11/2026): o professor marca várias missões (M1 e M2) para o aluno fazer de casa.
   Confere: gravação em config/liberar_9A.repo, trava aberta (modo casa) só nas marcadas, 🔒 nas outras, faixa e
   etiquetas na lista de missões, aviso da missão fechada, colega sem mudança e "Tirar a liberação" limpando tudo. */
const { chromium } = require("playwright"); const T = require("./turma.js"); const tmp = require("os").tmpdir();
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "config/hoje_9A": { dia: "2000-01-01" } });
  const prof = await T.professor(b, "#/painel/turmas/9A"); await prof.waitForTimeout(1500); await T.fecharJanelas(prof);
  await prof.selectOption("#sel", "9A"); await prof.waitForTimeout(2500); await prof.locator("[data-a=sim1]").first().click(); await prof.waitForTimeout(800);
  await prof.locator("dialog[open] [data-x=libera]").click(); await prof.waitForTimeout(600);
  await prof.locator("dialog.lib-tempo [data-t='dia']").click(); await prof.waitForTimeout(1500);
  await prof.locator("dialog.lib-missao details.lib-repo summary").click(); await prof.waitForTimeout(300);
  await prof.locator("dialog.lib-missao .lib-repo-m input[value=m1]").check(); await prof.locator("dialog.lib-missao .lib-repo-m input[value=m2]").check();
  await prof.screenshot({ path: tmp + "/repo-painel.png" });
  await prof.locator("dialog.lib-missao [data-repo]").click(); await prof.waitForTimeout(1200);
  console.log("aviso:", (await prof.locator("dialog[open]").last().innerText()).replace(/\n/g, " ").slice(0, 260));
  let st = await T.loja(); const L = st["config/liberar_9A"] || {};
  console.log("repo:", JSON.stringify((L.repo || {}).sim1 && { mids: L.repo.sim1.mids, horasAte: Math.round((L.repo.sim1.ate - Date.now()) / 3600000) }), "alunos.sim1:", (L.alunos || {}).sim1 || 0);
  const a = await T.aluno(b, 0);
  const e = await a.evaluate(async () => { const P = window.PORTAL; P.trava.limpar(); const s = P.sess.get(); const r = {}; for (const m of ["m1", "m2", "m3"]) { const x = await P.trava.estado(s, m); r[m] = { aberta: x.aberta, casa: !!x.casa, repoFora: !!x.repoFora }; } return r; });
  console.log("aluno sim1:", JSON.stringify(e));
  const aid = await a.evaluate(() => (window.PORTAL.catalogo.apostilas.find(y => y.serie === "9" && window.PORTAL.doPeriodo(y) && !y.trilha && !y.oculta) || {}).id);
  await a.evaluate(x => location.hash = "#/apostila/" + x, aid); await a.waitForTimeout(2500); await T.fecharJanelas(a);
  console.log("lista:", await a.locator(".repo-faixa").count(), "faixa;", await a.locator(".cm-repo.ok").count(), "🔓;", await a.locator(".cm-repo:not(.ok)").count(), "🔒");
  await a.screenshot({ path: tmp + "/repo-lista.png", fullPage: true });
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/pratica", aid); await a.waitForTimeout(2500);
  console.log("m3 aviso:", await a.locator(".repo-aviso").count());
  await a.screenshot({ path: tmp + "/repo-m3.png" });
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m1/comecar", aid); await a.waitForTimeout(2000); await a.evaluate(x => location.hash = "#/missao/" + x + "/m1/pratica", aid); await a.waitForTimeout(3000); await a.screenshot({ path: tmp + "/repo-m1.png" });
  console.log("m1 casa (vídeo ou tarefas):", await a.locator(".casa-video, .cartao-atv, .atv").count() > 0, "timer:", await a.locator("#casa-timer").count());
  const a2 = await T.aluno(b, 1);
  const e2 = await a2.evaluate(async () => { const P = window.PORTAL; P.trava.limpar(); const x = await P.trava.estado(P.sess.get(), "m1"); return { aberta: x.aberta, casa: !!x.casa, repoFora: !!x.repoFora, rep: !!(await P.trava.repo(P.sess.get())) }; });
  console.log("colega sim2:", JSON.stringify(e2));
  // tirar a liberação
  await T.fecharJanelas(prof); await prof.keyboard.press("Escape"); await prof.waitForTimeout(300); await prof.locator("[data-a=sim1]").first().click(); await prof.waitForTimeout(800);
  await prof.locator("dialog[open] [data-x=libera]").click(); await prof.waitForTimeout(600);
  await prof.locator("dialog.lib-tempo [data-t='0']").click(); await prof.waitForTimeout(1500);
  st = await T.loja(); console.log("depois de tirar:", JSON.stringify((st["config/liberar_9A"].repo || {}).sim1));
  const e3 = await a.evaluate(async () => { const P = window.PORTAL; P.trava.limpar(); const x = await P.trava.estado(P.sess.get(), "m1"); return { aberta: x.aberta, casa: !!x.casa }; });
  console.log("aluno sim1 depois:", JSON.stringify(e3));
  console.log("erros:", prof.erros, a.erros, a2.erros); await b.close(); })();

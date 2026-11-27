/* 🧪 Roteiro (27/11/2026): 👦👧 pergunta obrigatória "menino ou menina", uma vez só.
   Ana (sem resposta) entra: a pergunta aparece antes de tudo; ela responde Menina; ao recarregar, não pergunta de novo.
   No avatar da sala de espera, a escolha "Masculino ou feminino" some (já respondeu).
   No painel: aviso de quem falta responder; na ficha da Ana aparece "👧 Menina, respondido pela aluna"; o professor corrige
   para Menino e o portal da Ana (aberto) aplica sozinho no avatar dela. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "progresso/sim1_avatar": null, "progresso/sim2_avatar": null }); const R = {};
  const ana = await T.aluno(b, 0); await ana.waitForTimeout(2500);
  R.pergunta = await ana.locator(".sx-cobre h1").innerText().catch(() => "—"); await ana.screenshot({ path: "/tmp/sexo-1-pergunta.png" });
  await ana.locator(".sx-op.f").click(); await ana.waitForTimeout(1200);
  let L = await T.loja(); R.salvo = L["progresso/sim1_avatar"];
  await ana.reload(); await ana.waitForTimeout(2500); R.perguntouDeNovo = await ana.locator(".sx-cobre").count();
  // avatar na sala de espera: a escolha masculino/feminino não aparece
  await T.fecharJanelas(ana);
  const card = ana.locator('[data-op="avatar"]'); if (await card.count()) { await card.first().click(); await ana.waitForTimeout(1500); }
  R.editorAberto = await ana.locator(".av-tela").count(); R.tipoVisivel = await ana.locator('.av-q[data-q="tipo"]:not([hidden])').count();
  R.dica = await ana.locator(".av-proximo").innerText().catch(() => "—"); await ana.screenshot({ path: "/tmp/sexo-2-avatar.png" });
  // painel
  const prof = await T.professor(b, "#/painel/turma/9A"); await prof.waitForTimeout(3000);
  R.aviso = await prof.locator(".pp-sx.falta").first().innerText().catch(() => "—"); await prof.screenshot({ path: "/tmp/sexo-3-turma.png" });
  await prof.locator('[data-a="sim1"]').first().click(); await prof.waitForTimeout(800);
  R.ficha = await prof.locator("dialog[open] .pp-sx").innerText().catch(() => "—"); await prof.screenshot({ path: "/tmp/sexo-4-ficha.png" });
  await prof.locator('dialog[open] [data-x="sexo"]').click(); await prof.waitForTimeout(500);
  await prof.locator('dialog[open] [data-v="m"]').click(); await prof.waitForTimeout(2500);
  L = await T.loja(); R.prof = (L["config/liberar_9A"] || {}).sexoProf; R.depois = L["progresso/sim1_avatar"];
  R.CONFERE = { perguntou: /menino ou menina/i.test(R.pergunta), salvou: !!R.salvo && R.salvo.sexo === "f" && R.salvo.sexoPor === "aluno", naoRepete: R.perguntouDeNovo === 0,
    semEscolhaNoAvatar: R.editorAberto > 0 && R.tipoVisivel === 0, avisoTurma: /ainda não respond/.test(R.aviso) && /Bruno/.test(R.aviso) && !/Ana/.test(R.aviso),
    fichaMostra: /Menina/.test(R.ficha) && /pela aluna/.test(R.ficha), profCorrigiu: !!R.prof && R.prof.sim1 === "m", alunoAplicou: !!R.depois && R.depois.sexo === "m" && R.depois.sexoPor === "professor" };
  console.log(R); console.log("erros", ana.erros, prof.erros); await b.close(); })();

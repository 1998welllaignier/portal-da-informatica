/* 🧪 Roteiro (27/11/2026): 🌟 Modo Helena na LEITURA GUIADA ("tudo A" do professor).
   Dupla Bruno + Carla (Carla no Modo Helena) e a Ana sozinha. Confere: o cartão com figura aparece só na tela da dupla da Helena;
   na pergunta relâmpago, primeiro a vez da Carla (figuras; errar faz a certa brilhar), depois a vez do Bruno (pergunta normal);
   a Ana vê a pergunta normal; a resposta conta para cada um e quem acertou a figura na 2ª tentativa ganha metade (3 XP). */
const { chromium } = require("playwright"); const T = require("./turma.js");
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const hj = T.hoje(), [A1, B1, C1] = T.ALUNOS;
  await T.semear({ "config/liberar_9A": { helena: { sim3: true } }, ["alunos/sim3"]: Object.assign({}, C1, { modoHelena: true }) });
  const prof = await T.professor(b, "#/painel/aula/9A");
  const ana = await T.aluno(b, 0);
  // a dupla Bruno + Carla num computador só
  const du = await T.pagina(b, "aluno"); await du.goto(T.BASE + "/");
  await du.evaluate(([x, y]) => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "9", turma: "9A", modo: "dupla", nuvem: true, alunoIds: [x.id, y.id], nomes: [x.nome, y.nome], apelidos: ["", ""], avatares: [{ tipo: "m" }, { tipo: "f" }], entrou: Date.now() })), [B1, C1]);
  await du.evaluate(async als => { const N = window.PORTAL.nuvem; for (let i = 0; i < als.length; i++) { const app = N.app(i); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously();
      await app.db.collection("progresso").doc(als[i].id + "_sessao").set({ alunoId: als[i].id, turma: "9A", tipo: "sessao", ping: Date.now(), uid: app.auth.currentUser.uid }, { merge: true }); } }, [B1, C1]);
  await du.goto(T.BASE + "/#/espera"); await du.reload(); await du.waitForTimeout(2000);
  await prof.waitForTimeout(1500); const R = { cartao: null };
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(3000);
  for (let n = 0; n < 14; n++) {
    await du.waitForTimeout(1500);
    if (!R.cartao && await du.locator(".pc-hz-cartao").count()) { R.cartao = await du.locator(".pc-hz-pal").innerText(); R.cartaoNaAna = await ana.locator(".pc-hz-cartao").count(); await du.screenshot({ path: "/tmp/hzl-1-cartao.png" }); }
    if (await du.locator(".pc-hz-op").count()) break;
    await bt(prof, "Próximo"); await prof.waitForTimeout(1200);
  }
  R.vez = await du.locator(".pc-hz-vez").innerText().catch(() => "—");
  R.pergTxt = await du.locator(".pc-perg h2").innerText().catch(() => "—");
  R.semNomeNasFiguras = await du.locator(".pc-hz-op b").count() === 0;
  R.dica = await du.locator(".pc-hz-dica").innerText().catch(() => "—");
  R.anaVeFiguras = await ana.locator(".pc-hz-op").count();
  await du.screenshot({ path: "/tmp/hzl-2-pergunta.png" });
  // a Carla erra uma vez: a certa brilha
  const errada = 2;   // no 1º trecho a figura certa é sempre a 1ª (ordem fixa por trecho), então a 3ª é errada
  await du.locator(`.pc-hz-op[data-op="${errada}"]`).click({ force: true }); await du.waitForTimeout(800);
  R.brilha = await du.locator(".pc-hz-op.brilha").count(); await du.screenshot({ path: "/tmp/hzl-3-brilha.png" });
  await du.locator(".pc-hz-op.brilha").click({ force: true }); await du.waitForTimeout(1200);
  R.vezColega = await du.locator(".pc-hz-vez.colega").innerText().catch(() => "—"); await du.screenshot({ path: "/tmp/hzl-4-colega.png" });
  // o Bruno responde a pergunta normal (a certa) e a Ana também
  const certaN = await prof.evaluate(() => 0); // descobre a certa pelo resultado depois
  await du.locator(".pc-ops .pc-op").first().click({ force: true }); await ana.locator(".pc-ops .pc-op").first().click({ force: true });
  await prof.waitForTimeout(5000); await du.screenshot({ path: "/tmp/hzl-5-revelada.png" });
  const L = await T.loja(); const pal = L["config/palco_9A"] || {}; const k = pal.sessao + "_" + pal.slide;
  R.respCarla = ((L["progresso/sim3_palco"] || {}).resp || {})[k]; R.respBruno = ((L["progresso/sim2_palco"] || {}).resp || {})[k];
  R.meia = ((L["progresso/sim3_palco"] || {}).hzMeia || {})[k]; R.xp = pal.xp; R.perg = pal.perg;
  R.CONFERE = { cartaoSoNaDupla: !!R.cartao && R.cartaoNaAna === 0, vezDela: /Sua vez, Carla/.test(R.vez), dicaColega: /Bruno/.test(R.dica), anaNormal: R.anaVeFiguras === 0,
    perguntaFiguras: /Qual figura mostra/.test(R.pergTxt), brilhou: R.brilha === 1, semNomeNasFiguras: R.semNomeNasFiguras, vezDoColega: /vez de Bruno/.test(R.vezColega),
    respostasSeparadas: R.respCarla != null && R.respBruno != null, meiaPontuacao: R.meia === 1 && (R.xp || {}).sim3 === 3, revelou: !!(R.perg && R.perg.revelada) };
  console.log(R); console.log("erros", prof.erros, ana.erros, du.erros); await b.close(); })();

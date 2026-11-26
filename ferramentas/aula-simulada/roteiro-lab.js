/* 🧪 Roteiro (26/11/2026): ♾️ Laboratório sem fim novo — só abre depois das 3 etapas (Básico, Desafio, Turbo); 📖 tempo de leitura;
   XP sem teto com 🔥 combo; ⏸️ pausa de 5 s depois de 3 erros rápidos; avisos de precisão; XP entra nos pontos da missão. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const d = T.hoje(); await T.semear({ "config/hoje_9A": { dia: d, iniciadaDia: d, espera: false, largadaEm: Date.now() - 60000, aid: "informatica-9ano-4bim", mid: "m3", titulo: "Missão 3", travar: true, fixo: true } });
  const a = await T.aluno(b, 0); const aid = "informatica-9ano-4bim", mid = "m3", R = {};
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/comecar", aid); await a.waitForTimeout(2500); await T.fecharJanelas(a);
  const preencher = ids => a.evaluate(([aid, mid, ids]) => { const P = window.PORTAL, s = P.sess.get(), k = "portalJK:v1:" + aid + ":" + s.turma + ":id:" + s.alunoIds.join("+");
    const pr = P.store.get(k, null) || { visitas: {}, atv: {}, atualizado: 0 }; const pages = P.montarMissao(aid, mid).pages, iB = pages.findIndex(p => p.id === "basico");
    pages.forEach((p, i) => { if (!(i <= iB || ids.includes(p.id)) || p.id === "lab") return; pr.visitas[mid + "/" + p.id] = 1;
      (p.atividades || []).forEach(x => { if (!x.opcional) pr.atv[x.id] = Object.assign({ tentativas: 0, dicas: 0, r2: 1 }, pr.atv[x.id] || {}, { status: "certo", quando: Date.now() }); }); });
    pr.atualizado = Date.now(); P.store.set(k, pr); return pages.map(p => p.id).join(","); }, [aid, mid, ids]);
  R.paginas = await preencher([]);
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/lab", aid); await a.waitForTimeout(2500);
  R.soBasico_labFoiPara = a.url().split("/m3/")[1];
  await preencher(["desafio", "turbo"]);
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/comecar", aid); await a.waitForTimeout(1200);
  await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/lab", aid); await a.waitForTimeout(2500); await T.fecharJanelas(a);
  R.tresEtapas_labAbriu = a.url().split("/m3/")[1] + " · perguntas: " + await a.locator(".lab-q").count();
  R.leituraTravaNoInicio = await a.locator(".lab-op:disabled").count() + " botões travados · aviso: " + await a.locator(".lab-lendo").count();
  console.log("antes do jogo:", R);
  // joga 40 perguntas clicando rápido na 1ª opção (chute de propósito)
  let pausas = 0, avisos = 0, certos = 0, voltas = 0;
  for (let n = 0; n < 40; n++) {
    await a.waitForFunction(() => document.querySelector(".lab-pausa") || document.querySelector(".lab-op:not([disabled])"), null, { timeout: 15000 }).catch(() => {});
    if (await a.locator(".lab-pausa").count()) { pausas++; R.textoPausa = (await a.locator(".lab-pausa").innerText()).replace(/\s+/g, " ").slice(0, 120); const t0 = Date.now();
      await a.waitForSelector(".lab-op:not([disabled])", { timeout: 15000 }); R.pausaDurou_s = Math.round((Date.now() - t0) / 100) / 10; continue; }
    await a.locator(".lab-op:not([disabled])").first().click(); await a.waitForTimeout(250);
    if (await a.locator(".fb-ok").count()) certos++;
    if (await a.locator(".lab-aviso").count()) { avisos++; R.textoAviso = (await a.locator(".lab-aviso").innerText()).slice(0, 110); }
    if (await a.locator(".lab-volta-q").count()) voltas++;
    if (await a.locator(".lab-prox").count()) await a.locator(".lab-prox").click();
  }
  Object.assign(R, { pausas, avisosDePrecisao: avisos, certos, perguntasQueVoltaram: voltas });
  R.estado = await a.evaluate(([aid, mid]) => { const P = window.PORTAL, s = P.sess.get(), k = "portalJK:v1:" + aid + ":" + s.turma + ":id:" + s.alunoIds.join("+"); const st = (P.store.get(k, {}).atv || {})[mid + "-lab"] || {};
    return { ac: st.ac, tot: st.tot, xp: st.xp, rec: st.rec, validos: st.validos, xpNoPodio: P.podio.xpDoc(aid, mid, P.store.get(k, {}).atv) }; }, [aid, mid]);
  R.placar = (await a.locator(".lab-placar").innerText()).replace(/\s+/g, " ");
  console.log(R); console.log("erros", a.erros); await b.close(); })();

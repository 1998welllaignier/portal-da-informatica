/* 🧪 Roteiro (26/11/2026): 🧰 caixa de ferramentas do aluno — botão fixo, painel ARRASTÁVEL que não trava a tarefa,
   calculadora, conversor (1 GB ≈ 1000 MB), dicionário, rascunho; some na sala de espera e nos jogos; na prova só se o
   professor ligar, e sem o dicionário. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const d = T.hoje(), aid = "informatica-6ano-4bim";
  await T.semear({ "config/hoje_9A": { dia: "" } });
  const a = await T.aluno(b, 0), R = {};
  await a.evaluate(() => location.hash = "#/missao/informatica-9ano-4bim/m3/comecar"); await a.waitForTimeout(2500); await T.fecharJanelas(a);
  R.botaoNaMissao = await a.locator(".cx-bt").count();
  R.avisoComOK = await a.locator(".cx-balao .cx-bl-ok").count(); await a.locator(".cx-balao .cx-bl-ok").click().catch(() => {}); R.avisoSumiuNoOK = await a.locator(".cx-balao").count() === 0;
  await a.reload(); await a.waitForTimeout(2500); await T.fecharJanelas(a); R.avisoNaoVoltaNoMesmoDia = await a.locator(".cx-balao").count() === 0;
  await a.locator(".cx-bt").click(); await a.waitForTimeout(300);
  R.caixaAberta = await a.locator(".cx-caixa").count(); R.maozinhaDeArrastar = await a.locator(".cx-mao").count() + " mão, balão: " + await a.locator(".cx-mao-balao").count();
  await a.locator(".cx-mao-balao .cx-bl-ok").click().catch(() => {}); R.maoSumiuNoOK = await a.locator(".cx-mao").count() === 0;
  R.temFundoEscuro = await a.evaluate(() => !!document.querySelector("dialog[open]"));
  for (const k of ["1", "0", "0", "0", "÷", "5", "="]) await a.locator(`.cx-teclas [data-k="${k}"]`).click();
  R.calc_1000div5 = await a.locator(".cx-expr").innerText();
  await a.locator(".cx-teclas [data-k='C']").click(); await a.locator(".cx-caixa").click({ position: { x: 150, y: 120 } });
  await a.keyboard.type("10000/4"); await a.keyboard.press("Enter"); R.calc_teclado_10000div4 = await a.locator(".cx-expr").innerText();
  const box0 = await a.locator(".cx-caixa").boundingBox(); const cab = await a.locator(".cx-cab b").boundingBox();
  await a.mouse.move(cab.x + 20, cab.y + 8); await a.mouse.down(); await a.mouse.move(cab.x + 520, cab.y - 150, { steps: 8 }); await a.mouse.up();
  const box1 = await a.locator(".cx-caixa").boundingBox(); R.arrastou = Math.round(box1.x - box0.x) + "px para o lado, " + Math.round(box0.y - box1.y) + "px para cima";
  // a tarefa continua clicável fora da caixa (não é janela)
  R.paginaClicavelForaDaCaixa = await a.evaluate(() => { const c = document.querySelector(".cx-caixa").getBoundingClientRect(); const x = c.left > 300 ? 100 : innerWidth - 100, y = 300; const el = document.elementFromPoint(x, y); return !!el && !el.closest(".cx-caixa"); });
  await a.locator(".cx-min").click(); R.encolheu = await a.locator(".cx-caixa.min").count(); await a.locator(".cx-min").click();
  await a.locator('[data-a="conv"]').click(); await a.locator("#cx-cv-n").fill("10"); await a.locator("#cx-cv-u").selectOption("GB"); await a.waitForTimeout(200);
  R.conv_10GB = (await a.locator(".cx-cv-res").innerText()).replace(/\s+/g, " ").slice(0, 160);
  await a.locator('[data-a="dic"]').click(); R.dicionario_termos = await a.locator(".cx-dic details").count();
  await a.locator('[data-a="rasc"]').click(); await a.locator("#cx-r").fill("1000 ÷ 5 = 200"); await a.locator(".cx-x").click(); await a.locator(".cx-bt").click(); await a.locator('[data-a="rasc"]').click().catch(() => {});
  R.rascunhoGuardado = await a.locator("#cx-r").inputValue();
  await a.locator(".cx-x").click();
  await a.evaluate(() => location.hash = "#/jogos"); await a.waitForTimeout(1500); R.botaoNosJogos = await a.locator(".cx-bt").count();
  await a.evaluate(() => location.hash = "#/espera"); await a.waitForTimeout(1500); R.botaoNaEspera = await a.locator(".cx-bt").count();
  // prova: com e sem a caixa
  const docP = await a.evaluate(() => window.PORTAL.docProva ? window.PORTAL.docProva("9A") : "prova_9A");
  for (const ferr of [true, false]) {
    const sem = { "config/hoje_9A": { dia: "" }, "config/prova_9A": { aberta: true, dia: d, ate: Date.now() + 3600000 } };
    sem["config/" + docP] = Object.assign({}, sem["config/" + docP] || {}, { aberta: true, dia: d, ate: Date.now() + 3600000, missoes: ["m1", "m2"], ferramentas: ferr });
    await T.semear(sem);
    const p = await T.aluno(b, ferr ? 1 : 2); await p.waitForTimeout(3000); await T.fecharJanelas(p);
    if (!/prova/.test(p.url())) { await p.evaluate(() => location.hash = "#/prova"); await p.waitForTimeout(2500); }
    await p.locator("button", { hasText: /Começar|Iniciar|começar/ }).first().click().catch(() => {}); await p.waitForTimeout(2500);
    R["prova_" + (ferr ? "com" : "sem") + "_caixa"] = { url: p.url().split("#")[1], botao: await p.locator(".cx-bt").count() };
    if (ferr && await p.locator(".cx-bt").count()) { await p.locator(".cx-bt").click(); R.prova_com_caixa.abas = (await p.locator(".cx-abas").innerText()).replace(/\s+/g, " "); }
    R["erros_prova_" + ferr] = p.erros;
  }
  console.log(R); console.log("erros", a.erros); await b.close(); })();

/* 🧪 Roteiro (26/11/2026): 🎒 turma Agregados — juntar o 5º ano (sem apagar ninguém, mesmo código), aluno novo com série,
   entrada pelo código (cada um na sua série), tarefas sempre abertas (sem aula), UMA missão por vez e Sala de jogos aberta. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const sem = {
    "alunos/q1": { id: "q1", nome: "Pedro Quinto Teste", turma: "5-seg", codigo: "2001", ativo: true },
    "acessos/5-seg_2001": { alunoId: "q1", turma: "5-seg", ativo: true, nome: "Pedro Quinto Teste" },
    "alunos/q2": { id: "q2", nome: "Lia Quinto Teste", turma: "5-ter", codigo: "2002", ativo: true },
    "acessos/5-ter_2002": { alunoId: "q2", turma: "5-ter", ativo: true, nome: "Lia Quinto Teste" },
    "alunos/q3": { id: "q3", nome: "Rui Quinto Saiu", turma: "5-ter", codigo: "2003", ativo: false },
    "acessos/5-ter_2003": { alunoId: "q3", turma: "5-ter", ativo: false, nome: "Rui Quinto Saiu" },
    "progresso/q1_avatar": { alunoId: "q1", turma: "5-seg", avatar: { tipo: "m" } },
  };
  await T.semear(sem);
  const R = {};
  // 1) painel: turma Agregados com o botão de juntar o 5º ano
  const pr = await T.professor(b, "#/painel/turma/AG");
  await pr.waitForTimeout(2500); await T.fecharJanelas(pr);
  R.banner = await pr.locator(".pp-ag-migra").count();
  await pr.screenshot({ path: "/tmp/ag-1-painel.png", fullPage: true });
  await pr.locator(".pp-ag-migra button").click(); await pr.waitForTimeout(500);
  await pr.locator("dialog[open] button[value=sim]").click(); await pr.waitForTimeout(2500);
  R.avisoMigra = await pr.locator("dialog[open] .pp-caixa-msg").innerText().catch(() => "");
  await pr.locator("dialog[open] button[value=ok]").click().catch(() => {}); await pr.waitForTimeout(2500);
  let L = await T.loja();
  R.migrados = ["q1", "q2", "q3"].map(id => { const a = L["alunos/" + id]; return `${id}:${a.turma}/${a.serie}/${a.codigo}/${a.ativo}`; });
  R.acessos = Object.keys(L).filter(k => k.startsWith("acessos/")).filter(k => /q\d/.test(L[k].alunoId)).map(k => k + "=" + (L[k].serie || "") + (L[k].ativo ? "" : "(inativo)"));
  // 2) aluno novo nos Agregados, com a série 7º ano
  await pr.locator("#add").click(); await pr.waitForTimeout(400);
  await pr.locator("dialog[open] textarea").fill("Caio Sete Teste"); await pr.locator("dialog[open] button[value=ok]").click(); await pr.waitForTimeout(400);
  R.botoesSerie = await pr.locator("dialog[open] button").allInnerTexts();
  await pr.locator('dialog[open] button[value="7"]').click(); await pr.waitForTimeout(1500);
  await pr.locator("dialog[open] button[value=ok]").click().catch(() => {}); await pr.waitForTimeout(2500);
  L = await T.loja(); const novo = Object.values(L).find(x => x && x.nome === "Caio Sete Teste" && x.codigo);
  R.novo = novo ? `${novo.turma}/${novo.serie}/acesso:${(L["acessos/AG_" + novo.codigo] || {}).serie}` : "não criou";
  await pr.screenshot({ path: "/tmp/ag-2-painel-depois.png", fullPage: true });
  R.gruposPainel = await pr.locator(".pp-ag-grupo h3").allInnerTexts();
  // 3) aluno do 5º entra pela fase 🎒 Agregados com o MESMO código
  const al = await T.pagina(b, "aluno"); await al.goto(T.BASE + "/"); await al.waitForTimeout(1500);
  R.fasesInicio = await al.locator(".ij-fase b").allInnerTexts();
  await al.screenshot({ path: "/tmp/ag-3-inicio.png" });
  await al.goto(T.BASE + "/#/serie/ag"); await al.waitForTimeout(1500);
  await al.locator("#c1").fill("2001"); await al.locator("#bcont").click(); await al.waitForTimeout(1500);
  await al.locator("#sim").click(); await al.waitForTimeout(4000);
  for (let i = 0; i < 4; i++) { if (/apostilas/.test(al.url())) break; await al.evaluate(() => { const d = document.querySelector("dialog[open]"); if (d) d.close(); }); const bt = al.locator("button:has-text('Pular'), button:has-text('Salvar'), button:has-text('Continuar'), button:has-text('Entrar')").first(); if (await bt.count()) await bt.click().catch(() => {}); await al.waitForTimeout(1500); }
  R.sessao = await al.evaluate(() => sessionStorage.getItem("portalJK:sessao"));
  if (!/apostilas/.test(al.url())) { await al.goto(T.BASE + "/#/apostilas"); await al.waitForTimeout(2000); }
  R.apostilasAluno = await al.locator(".card-apostila strong").allInnerTexts();
  R.faixaLista = await al.locator(".ag-faixa").innerText().catch(() => "");
  // 4) trava: tarefas abertas (sem aula); uma missão por vez
  const aid = "informatica-5ano-4bim";
  R.trava = await al.evaluate(async () => JSON.stringify(await window.PORTAL.trava.estado(window.PORTAL.sess.get(), "m2")));
  await al.goto(T.BASE + "/#/apostila/" + aid); await al.waitForTimeout(3000);
  R.trancadasAntes = await al.locator(".card-missao.ag-trancada").count();
  // faz uma tarefa do Básico da M1 (fica "começada")
  await al.evaluate(aid => { const P = window.PORTAL, { pages } = P.montarMissao(aid, "m1"); const at = pages.flatMap(p => p.atividades || []).find(x => x.nivel === "basico" && !x.opcional && !(P.tipos[x.tipo] || {}).semStatus);
    const pr = P.getProg(aid); pr.atv[at.id] = { status: "certo", quando: Date.now() }; P.setProg(aid, pr); }, aid);
  await al.goto(T.BASE + "/#/apostilas"); await al.waitForTimeout(500); await al.goto(T.BASE + "/#/apostila/" + aid); await al.waitForTimeout(3000);
  R.trancadasDepois = await al.locator(".card-missao.ag-trancada").count(); R.totalCards = await al.locator(".card-missao").count();
  R.faixa = await al.locator(".ag-faixa").innerText().catch(() => "");
  await al.screenshot({ path: "/tmp/ag-4-apostila.png", fullPage: true });
  await al.goto(T.BASE + "/#/missao/" + aid + "/m3"); await al.waitForTimeout(3000);
  R.tentouM3_foiPara = al.url();
  // termina o Básico da M1: libera as outras
  await al.evaluate(aid => { const P = window.PORTAL, { pages } = P.montarMissao(aid, "m1"); const pr = P.getProg(aid);
    pages.flatMap(p => p.atividades || []).filter(x => x.nivel === "basico" && !x.opcional && !(P.tipos[x.tipo] || {}).semStatus).forEach(at => { pr.atv[at.id] = { status: "certo", quando: Date.now() }; }); P.setProg(aid, pr); }, aid);
  await al.waitForTimeout(16000);
  await al.goto(T.BASE + "/#/apostila/" + aid); await al.waitForTimeout(3000);
  R.trancadasFim = await al.locator(".card-missao.ag-trancada").count();
  await al.goto(T.BASE + "/#/missao/" + aid + "/m3"); await al.waitForTimeout(3000); R.m3DepoisDoBasico = al.url();
  // 5) Sala de jogos sempre aberta
  await al.goto(T.BASE + "/#/jogos"); await al.waitForTimeout(2500); R.jogos = al.url() + " · " + await al.locator(".jogos5-box [data-j]").count() + " jogos";
  // 6) apostila de outra série: não abre
  await al.goto(T.BASE + "/#/missao/informatica-9ano-4bim/m1"); await al.waitForTimeout(2000); R.outraSerie = al.url();
  // 7) painel: telas de aula não mostram os Agregados
  await pr.goto(T.BASE + "/#/painel/diario"); await pr.waitForTimeout(3000); await T.fecharJanelas(pr);
  R.diarioTemAG = await pr.evaluate(() => [...document.querySelectorAll("select option")].some(o => o.value === "AG"));
  await pr.goto(T.BASE + "/#/painel/aula/AG"); await pr.waitForTimeout(3000); await T.fecharJanelas(pr); R.aulaAG_foiPara = await pr.evaluate(() => (document.querySelector("select option:checked") || {}).value);
  console.log(JSON.stringify(R, null, 1));
  console.log("erros", pr.erros, al.erros); await b.close(); })();

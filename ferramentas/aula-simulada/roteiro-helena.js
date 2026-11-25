/* 🧪 Roteiro: 🌟 Modo Helena (Vez da Helena), 25/11/2026.
   1) Em DUPLA (Helena + colega): a apostila normal abre e a carta "Vez da <nome>" aparece na etapa de tarefas, com o nome do colega;
      errar some a opção; acertar fecha a carta e grava <missão>-hz-<carta> no progresso; os pontos sobem.
   2) SOZINHA: abre a "Trilha da <nome>" com as cartas em sequência, a pausa de descanso e o "Contei!".
   3) Aluno comum (sem o modo): nada muda. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const AID = "informatica-8ano-4bim";
const AL = [{ id: "hz1", nome: "Helena Teste Lima", codigo: "2001" }, { id: "hz2", nome: "Isa Teste Rocha", codigo: "2002" }, { id: "hz3", nome: "Caio Teste Melo", codigo: "2003" }];
function seed() {
  const s = {}, d = T.hoje();
  AL.forEach(a => { s["alunos/" + a.id] = { nome: a.nome, turma: "8B", codigo: a.codigo, ativo: true, modoHelena: a.id === "hz1" }; s["acessos/8B_" + a.codigo] = { alunoId: a.id, turma: "8B", ativo: true }; });
  s["config/geral"] = { modoAula: true, salaEspera: false };
  s["config/hoje_8B"] = { dia: d, iniciadaDia: d, espera: false, largadaEm: Date.now() - 60000, aid: AID, mid: "m2", titulo: "Missão 2", travar: false, fixo: true };
  s["config/liberar_8B"] = { helena: { hz1: true }, alunos: { hz1: Date.now() + 3 * 3600e3, hz2: Date.now() + 3 * 3600e3, hz3: Date.now() + 3 * 3600e3 } };
  return s;
}
async function entrar(b, ids) {
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  const als = ids.map(i => AL[i]);
  await pg.evaluate(als => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "8", turma: "8B", modo: als.length > 1 ? "dupla" : "sozinho", nuvem: true, alunoIds: als.map(a => a.id), nomes: als.map(a => a.nome), apelidos: als.map(() => ""), avatares: als.map(() => ({ tipo: "m" })), entrou: Date.now() })), als);
  await pg.evaluate(async als => { const N = window.PORTAL.nuvem; for (let i = 0; i < als.length; i++) { const app = N.app(i); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); } }, als);
  return pg;
}
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear(seed());
  const res = {};
  // 1) dupla
  const du = await entrar(b, [0, 1]);
  await du.goto(T.BASE + `/#/missao/${AID}/m2/comecar`); await du.reload(); await du.waitForTimeout(3000);
  await du.evaluate(aid => { location.hash = `#/missao/${aid}/m2/pratica`; }, AID); await du.waitForTimeout(3000);
  res.dupla_hash = await du.evaluate(() => location.hash);
  res.dupla_carta = await du.locator(".hz-carta").count();
  res.dupla_textos = (await du.locator(".hz-carta").first().innerText().catch(() => "")).replace(/\s+/g, " ").slice(0, 200);
  await du.screenshot({ path: "/tmp/hz-dupla-1.png" });
  // erra (opção que não é a certa) e acerta
  const ops = du.locator(".hz-op"); const n = await ops.count(); let errou = false;
  for (let i = 0; i < n; i++) { const t = await ops.nth(i).innerText(); if (!/Cabo|Prédio|SIM|NÃO/.test(t) && !errou) { await ops.nth(i).click(); errou = true; } }
  await du.waitForTimeout(400); res.dupla_errado = await du.locator(".hz-op.hz-errado").count();
  const etapa = await du.evaluate(() => document.querySelector(".hz-perg").textContent);
  const certo = /fundo do mar/.test(etapa) ? "Cabo" : /nuvem/.test(etapa) ? "Prédio" : /juntos/.test(etapa) ? "SIM" : "Data";
  await du.locator(".hz-op", { hasText: certo }).first().click(); await du.waitForTimeout(800);
  await du.screenshot({ path: "/tmp/hz-dupla-2.png" });
  await du.waitForTimeout(3500);
  res.dupla_fechou = (await du.locator(".hz-fundo").count()) === 0;
  res.dupla_prog = await du.evaluate(aid => Object.keys(window.PORTAL.getProg(aid).atv || {}).filter(k => k.includes("-hz-")), AID);
  res.dupla_xp = await du.evaluate(aid => window.PORTAL.podio.xpDoc(aid, "m2", window.PORTAL.getProg(aid).atv), AID);
  // volta à mesma etapa: não deve repetir a carta
  await du.reload(); await du.waitForTimeout(3000); res.dupla_repetiu = await du.locator(".hz-carta").count();
  res.dupla_erros = du.erros;
  // 2) sozinha
  const so = await entrar(b, [0]);
  await so.goto(T.BASE + `/#/missao/${AID}/m1/basico`); await so.reload(); await so.waitForTimeout(3500);
  res.solo_tela = await so.locator(".hz-solo").count();
  res.solo_tit = (await so.locator(".hz-sup").innerText().catch(() => ""));
  await so.screenshot({ path: "/tmp/hz-solo-1.png" });
  // carta 1: achar o 7 (toca as caixas em ordem)
  for (let k = 0; k < 5; k++) { const c = so.locator(".hz-caixa.hz-brilha:not([disabled])"); if (!(await c.count())) break; await c.first().click(); await so.waitForTimeout(250); }
  await so.waitForTimeout(3800); res.solo_c2 = (await so.locator(".hz-perg").innerText().catch(() => "")).slice(0, 60);
  await so.screenshot({ path: "/tmp/hz-solo-2.png" });
  // carta 2: ordem 2,5,8
  for (const v of ["2", "5", "8"]) { await so.locator(".hz-op", { hasText: new RegExp("^\\s*\\S+\\s*" + v + "\\s*$") }).first().click().catch(() => {}); await so.waitForTimeout(250); }
  await so.waitForTimeout(3800); res.solo_pausa = await so.locator(".hz-pausa").count();
  await so.screenshot({ path: "/tmp/hz-solo-3.png" });
  if (res.solo_pausa) { await so.locator(".hz-pausa button").click(); await so.waitForTimeout(500); }
  // descansar nas próximas e contar no fim
  for (let k = 0; k < 4; k++) { if (await so.locator(".hz-contou").count()) { await so.locator(".hz-contou").click(); await so.waitForTimeout(2200); break; } await so.locator(".hz-desc").click().catch(() => {}); await so.waitForTimeout(600); }
  res.solo_final = await so.locator(".hz-final").count();
  res.solo_bolas = await so.evaluate(() => [...document.querySelectorAll(".hz-bolas li")].map(l => l.className || "-"));
  await so.screenshot({ path: "/tmp/hz-solo-4.png" });
  res.solo_erros = so.erros;
  // 3) aluno comum sozinho: apostila normal, sem carta
  const co = await entrar(b, [2]);
  await co.goto(T.BASE + `/#/missao/${AID}/m2/basico`); await co.reload(); await co.waitForTimeout(3500);
  res.comum_carta = await co.locator(".hz-carta, .hz-solo").count(); res.comum_atv = await co.locator(".atv").count(); res.comum_erros = co.erros;
  // 4) a nuvem recebeu as cartas da dupla
  await du.waitForTimeout(2500); const tudo = await T.loja();
  res.nuvem_hz = Object.entries(tudo).filter(([k, v]) => /^progresso\//.test(k) && typeof v.atv === "string" && v.atv.includes("-hz-")).map(([k]) => k);
  console.log(JSON.stringify(res, null, 1));
  await b.close(); process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });

/* 🧪 Roteiro (26/11/2026): 🌟 Modo Helena nas 4 combinações + pontos justos.
   1) Helena + colega da apostila da turma → apostila da turma + carta "vez de <nome>" (já coberto pelo roteiro-helena).
   2) Helena + colega do 👣 Passo a Passo → a dupla entra no PASSO A PASSO e a carta aparece nele.
   3) Helena + Helena → "Trilha de A e B", revezando as cartas (cada carta é de uma, a outra lê).
   4) Helena sozinha → Trilha; as cartas valem como a missão inteira (todas de primeira = 1000 XP). Em dupla, extra até +200.
   E: o nome na carta é o da própria aluna/aluno ("vez de <nome>"), nunca "Helena" fixo. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const AID = "informatica-8ano-4bim";
const AL = [{ id: "hz1", nome: "Helena Teste Lima", codigo: "2001", hz: true }, { id: "hz2", nome: "Isa Teste Rocha", codigo: "2002", tri: true },
  { id: "hz3", nome: "Caio Teste Melo", codigo: "2003" }, { id: "hz4", nome: "Pedro Teste Dias", codigo: "2004", hz: true }];
function seed() {
  const s = {}, d = T.hoje(), al = {}, hz = {};
  AL.forEach(a => { s["alunos/" + a.id] = { nome: a.nome, turma: "8B", codigo: a.codigo, ativo: true, modoHelena: !!a.hz, trilha: !!a.tri };
    s["acessos/8B_" + a.codigo] = { alunoId: a.id, turma: "8B", ativo: true, ...(a.tri ? { trilha: true } : {}) }; al[a.id] = Date.now() + 3 * 3600e3; if (a.hz) hz[a.id] = true; });
  s["config/geral"] = { modoAula: true, salaEspera: false };
  s["config/hoje_8B"] = { dia: d, iniciadaDia: d, espera: false, largadaEm: Date.now() - 60000, aid: AID, mid: "m2", titulo: "Missão 2", travar: false, fixo: true };
  s["config/liberar_8B"] = { helena: hz, alunos: al };
  return s;
}
async function entrar(b, ids, trilha) {
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  const als = ids.map(i => AL[i]);
  await pg.evaluate(([als, trilha]) => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "8", turma: "8B", modo: als.length > 1 ? "dupla" : "sozinho", nuvem: true, trilha: !!trilha, alunoIds: als.map(a => a.id), nomes: als.map(a => a.nome), apelidos: als.map(() => ""), avatares: als.map(() => ({ tipo: "m" })), entrou: Date.now() })), [als, trilha]);
  await pg.evaluate(async als => { const N = window.PORTAL.nuvem; for (let i = 0; i < als.length; i++) { const app = N.app(i); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously(); } }, als);
  return pg;
}
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear(seed()); const R = {};
  // a regra do Passo a Passo na dupla (a mesma que o login usa)
  const p0 = await entrar(b, [2]);
  R.regraDupla = await p0.evaluate(async al => { const f = (ids) => window.PORTAL.trilhaDaDupla(ids.map(i => ({ alunoId: al[i].id, trilha: !!al[i].tri })), "8B");
    return { helena_com_passoAPasso: await f([0, 1]), passoAPasso_com_comum: await f([1, 2]), helena_com_comum: await f([0, 2]), comum_com_comum: await f([2, 2]) }; }, AL);
  // 2) Helena + Passo a Passo
  const d2 = await entrar(b, [0, 1], R.regraDupla.helena_com_passoAPasso);
  await d2.goto(T.BASE + `/#/missao/${AID}/m2/comecar`); await d2.reload(); await d2.waitForTimeout(3000);
  await d2.evaluate(aid => { location.hash = `#/missao/${aid}/m2/pratica`; }, AID); await d2.waitForTimeout(3500);
  R.helenaPassoAPasso = { url: d2.url().split("#")[1], carta: (await d2.locator(".hz-carta .hz-tit").innerText().catch(() => "SEM CARTA")), leitor: (await d2.locator(".hz-leitor").innerText().catch(() => "")).replace(/\s+/g, " ") };
  // 3) Helena + Helena (Pedro também do modo: o nome muda e não fica "Helena")
  const d3 = await entrar(b, [0, 3]);
  await d3.goto(T.BASE + `/#/missao/${AID}/m2`); await d3.reload(); await d3.waitForTimeout(3500);
  R.helenaHelena = { titulo: await d3.locator(".hz-sup").innerText().catch(() => "SEM TRILHA"), carta1: await d3.locator(".hz-carta .hz-tit").innerText().catch(() => ""), leitor1: (await d3.locator(".hz-leitor").innerText().catch(() => "")).replace(/\s+/g, " ") };
  await d3.locator(".hz-desc").click().catch(() => {}); await d3.waitForTimeout(800);
  R.helenaHelena.carta2 = await d3.locator(".hz-carta .hz-tit").innerText().catch(() => "");
  // 4) pontos justos
  R.pontos = await d3.evaluate(aid => { const P = window.PORTAL, cs = P.helena.cartas(aid, "m2"), atv = {}, atvD = {};
    cs.forEach(c => { atv["m2-hz-" + c.id] = { status: c.tipo === "explica" ? "contou" : "certo", tentativas: 0, hz: 1, so: 1 }; atvD["m2-hz-" + c.id] = { status: c.tipo === "explica" ? "contou" : "certo", tentativas: 0, hz: 1 }; });
    const meia = Object.assign({}, atv); const k0 = Object.keys(meia)[0]; meia[k0] = Object.assign({}, meia[k0], { tentativas: 1 });
    return { cartas: cs.length, trilhaTodasDePrimeira: P.podio.xpDoc(aid, "m2", atv), trilhaUmaNaSegunda: P.podio.xpDoc(aid, "m2", meia), duplaExtra: P.podio.xpDoc(aid, "m2", atvD),
      partes: P.podio.xpPartes(aid, "m2", atv).helena }; }, AID);
  R.CONFERE = { regra: R.regraDupla.helena_com_passoAPasso === true && !R.regraDupla.passoAPasso_com_comum && !R.regraDupla.helena_com_comum && !R.regraDupla.comum_com_comum,
    passoAPassoComCarta: /trilha/.test(R.helenaPassoAPasso.url) && /Sua vez, Helena/.test(R.helenaPassoAPasso.carta),
    juntasRevezam: /Trilha de Helena e Pedro/.test(R.helenaHelena.titulo) && /Sua vez, Helena/.test(R.helenaHelena.carta1) && /Pedro/.test(R.helenaHelena.leitor1) && /Sua vez, Pedro/.test(R.helenaHelena.carta2),
    justo: R.pontos.trilhaTodasDePrimeira === 1000 && R.pontos.trilhaUmaNaSegunda < 1000 && R.pontos.duplaExtra <= 200 };
  console.log(JSON.stringify(R, null, 1)); console.log("erros", p0.erros, d2.erros, d3.erros); await b.close(); })();

/* 🧪 Roteiro (26/11/2026): entrada pelo endereço antigo #/serie/5 → vai para os 🎒 Agregados com a turma já marcada; aluno do 5º que ainda está na turma antiga (antes do professor juntar) entra com o código de sempre; agregado entra na série dele. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({ "alunos/q7": { id: "q7", nome: "Davi Quinto Teste", turma: "5-seg", codigo: "6547", ativo: true }, "acessos/5-seg_6547": { alunoId: "q7", turma: "5-seg", ativo: true, nome: "Davi Quinto Teste" },
    "alunos/q8": { id: "q8", nome: "Ivo Ag Teste", turma: "AG", codigo: "6548", ativo: true, serie: "7" }, "acessos/AG_6548": { alunoId: "q8", turma: "AG", ativo: true, nome: "Ivo Ag Teste", serie: "7" } });
  for (const [cod, rot] of [["6547", "5º ainda na turma antiga"], ["6548", "agregado do 7º"]]) {
    const al = await T.pagina(b, "aluno"); await al.goto(T.BASE + "/#/serie/5"); await al.waitForTimeout(2000);
    const url = al.url(), turmaMarcada = await al.locator('input[name="turma"]:checked').count();
    await al.locator("#c1").fill(cod); await al.locator("#bcont").click(); await al.waitForTimeout(2000);
    const erro = await al.locator("#ferro:visible").innerText().catch(() => "");
    await al.locator("#sim").click().catch(() => {}); await al.waitForTimeout(3000);
    console.log(rot, "| foi para", url, "| turma já marcada:", turmaMarcada, "| erro:", erro || "nenhum", "| sessão:", await al.evaluate(() => { const s = JSON.parse(sessionStorage.getItem("portalJK:sessao") || "null"); return s ? s.turma + "/" + s.serie : "sem"; }), "| erros", al.erros);
  }
  await b.close(); })();

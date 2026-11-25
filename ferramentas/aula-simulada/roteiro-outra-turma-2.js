/* 🧪 Roteiro (25/11/2026): a turma do aluno teve aula mais cedo e agora ele assiste à aula de outra turma: vale a aula mais recente (não pode aparecer "a aula já terminou"). */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const hoje = T.hoje ? T.hoje() : new Date().toLocaleDateString("sv-SE"), agora = Date.now();
  await T.semear({ "config/liberar_9B": { outra: { sim1: "9A" } }, "alunos/sim1": { id: "sim1", nome: "Ana", turma: "9B", codigo: "1001", ativo: true, outraTurma: "9A" },
    "config/hoje_9B": { dia: hoje, iniciadaDia: hoje, iniciadaEm: agora - 4 * 3600e3, mid: "m1", aid: "informatica-9ano-4bim", largadaEm: agora - 4 * 3600e3 },
    "config/hoje_9A": { dia: hoje, iniciadaDia: hoje, iniciadaEm: agora - 10 * 60e3, mid: "m2", aid: "informatica-9ano-4bim", largadaEm: agora - 5 * 60e3 } });
  const pg = await T.pagina(b, "aluno"); await pg.goto(T.BASE + "/");
  await pg.evaluate(() => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "9", turma: "9B", modo: "sozinho", nuvem: true, alunoIds: ["sim1"], nomes: ["Ana"], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })));
  await pg.reload(); await pg.waitForTimeout(2500);
  const r = await pg.evaluate(async () => { const s = window.PORTAL.sess ? window.PORTAL.sess.get() : JSON.parse(sessionStorage.getItem("portalJK:sessao"));
    return { m2: await window.PORTAL.trava.estado(s, "m2"), m3: await window.PORTAL.trava.estado(s, "m3") }; });
  console.log(JSON.stringify(r)); await b.close(); })();

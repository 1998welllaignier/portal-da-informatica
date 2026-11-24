/* 🧪 Peças da turma simulada para os roteiros de teste (Playwright).
   const T = require("./turma"); await T.semear(); const prof = await T.professor(browser, "#/painel/aula/9A"); const a = await T.aluno(browser, 0); */
const fs = require("fs"), path = require("path");
const BASE = process.env.SIM_URL || "http://localhost:8790";
const FB = fs.readFileSync(path.join(__dirname, "fb-compartilhado.js"), "utf8"), YT = fs.readFileSync(path.join(__dirname, "yt-simulado.js"), "utf8");
const hoje = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
// turma fictícia (nomes inventados; nenhum dado real de aluno)
const ALUNOS = ["Ana Teste Souza", "Bruno Teste Lima", "Carla Teste Rocha", "Davi Teste Alves", "Eva Teste Melo"].map((nome, i) => ({ id: "sim" + (i + 1), nome, turma: "9A", codigo: String(1001 + i), ativo: true }));
function semente(extra) {
  const s = {}, d = hoje();
  ALUNOS.forEach(a => { s["alunos/" + a.id] = a; s["acessos/9A_" + a.codigo] = { alunoId: a.id, turma: "9A", ativo: true }; });
  s["config/geral"] = { modoAula: true, salaEspera: true };
  s["config/hoje_9A"] = { dia: d, iniciadaDia: d, espera: true, largadaEm: 0, aid: "informatica-9ano-4bim", mid: "m3", titulo: "Missão 3", travar: true, fixo: true };
  return Object.assign(s, extra || {});
}
async function semear(extra) { await fetch(BASE + "/fb/semente", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(semente(extra)) }); }
const loja = async () => (await fetch(BASE + "/fb/tudo")).json();
async function pagina(browser, papel, vp) {
  const ctx = await browser.newContext({ viewport: vp || { width: 1366, height: 768 } });
  const pg = await ctx.newPage(); pg.erros = [];
  pg.on("pageerror", e => pg.erros.push(e.message)); pg.on("dialog", d => d.dismiss().catch(() => {}));
  ctx.on("page", p2 => { p2.erros = []; p2.on("pageerror", e => p2.erros.push(e.message)); });
  await ctx.addInitScript(p => { window.__fbPapel = p; }, papel);
  await ctx.route("**/firebase-app-compat.js", r => r.fulfill({ body: FB, contentType: "application/javascript" }));
  await ctx.route("**/firebase-*-compat.js", r => r.request().url().includes("app-compat") ? r.fallback() : r.fulfill({ body: "", contentType: "application/javascript" }));
  await ctx.route("**/iframe_api*", r => r.fulfill({ body: YT, contentType: "application/javascript" }));
  await ctx.route(/youtube-nocookie\.com\/embed|youtube\.com\/embed/, r => r.fulfill({ body: "<html><body style='background:#222;color:#fff;font:20px sans-serif'>embed simulado</body></html>", contentType: "text/html" }));
  await ctx.route(/ytimg|googleapis\.com\/css|fonts\.gstatic/, r => r.abort());
  return pg;
}
async function professor(browser, hash, vp) { const pg = await pagina(browser, "prof", vp); await pg.goto(BASE + "/" + (hash || "#/painel"));
  await pg.waitForTimeout(3000); await fecharJanelas(pg); return pg; }
// fecha as janelas que abrem sozinhas no painel (avisos do dia, "vai dar aula agora?")
async function fecharJanelas(pg) { for (let i = 0; i < 4; i++) { const n = await pg.evaluate(() => { const d = [...document.querySelectorAll("dialog[open].pp-dlg")]; d.forEach(x => x.close()); return d.length; }); if (!n) break; await pg.waitForTimeout(400); } }
async function aluno(browser, i, vp) {
  const a = ALUNOS[i], pg = await pagina(browser, "aluno", vp);
  await pg.goto(BASE + "/");
  await pg.evaluate(a => sessionStorage.setItem("portalJK:sessao", JSON.stringify({ serie: "9", turma: "9A", modo: "sozinho", nuvem: true, alunoIds: [a.id], nomes: [a.nome], apelidos: [""], avatares: [{ tipo: "m" }], entrou: Date.now() })), a);
  await pg.evaluate(async a => { const N = window.PORTAL.nuvem; const app = N.app(0); await app.pronto; if (!app.auth.currentUser) await app.auth.signInAnonymously();
    await app.db.collection("progresso").doc(a.id + "_sessao").set({ alunoId: a.id, turma: "9A", tipo: "sessao", ping: Date.now(), uid: app.auth.currentUser.uid }, { merge: true });
    await app.db.collection("progresso").doc(a.id + "_entrada").set({ alunoId: a.id, turma: "9A", tipo: "entrada", dias: { [N.hoje()]: Date.now() } }, { merge: true }); }, a);
  await pg.goto(BASE + "/#/espera"); await pg.reload();
  pg.aluno = a; return pg;
}
module.exports = { fecharJanelas, BASE, ALUNOS, semear, semente, loja, pagina, professor, aluno, hoje };

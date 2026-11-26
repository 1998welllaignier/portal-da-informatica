/* 🧪 Roteiro (26/11/2026): o MESMO número de pontos em todo lugar — barra do aluno, nuvem, placar (projetor), 🔴 Ao vivo,
   "você está em Nº lugar" do aluno e pódio. Inclui ♾️ laboratório (antes não chegava na nuvem), 🚦 sala de espera e 📖 leitura. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const d = T.hoje(), aid = "informatica-9ano-4bim", mid = "m3";
  await T.semear({ "config/hoje_9A": { dia: d, iniciadaDia: d, espera: false, largadaEm: Date.now() - 60000, aid, mid, titulo: "Missão 3", travar: true, fixo: true },
    "progresso/sim1_espera": { tipo: "espera", alunoId: "sim1", turma: "9A", dia: d, pontos: 40, avatarBonus: 10, atualizado: Date.now() },
    "config/palco_9A": { dia: d, xp: { sim1: 10, sim2: 20 } } });
  const al = [await T.aluno(b, 0), await T.aluno(b, 1)];
  for (const a of al) { await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/comecar", aid); await a.waitForTimeout(2000); await T.fecharJanelas(a); }
  // Ana: tudo feito (algumas na 2ª tentativa) + laboratório com 345 XP; Bruno: metade do Básico
  const fazer = (a, cfg) => a.evaluate(([aid, mid, cfg]) => { const P = window.PORTAL, pr = P.getProg(aid); const pages = P.montarMissao(aid, mid).pages, iB = pages.findIndex(p => p.id === "basico"); let n = 0;
    pages.forEach((p, i) => { if (p.id === "lab" || (cfg.ate === "basico" && i > iB)) return; pr.visitas[mid + "/" + p.id] = 1;
      (p.atividades || []).forEach(x => { if (x.opcional) return; n++; if (cfg.metade && n % 2) return; pr.atv[x.id] = { tentativas: n % 3 === 0 ? 1 : 0, dicas: 0, r2: 1, status: "certo", quando: Date.now() + n }; }); });
    if (cfg.lab) pr.atv[mid + "-lab"] = { ac: 30, tot: 34, xp: cfg.lab, seq: 2, rec: 12, validos: 28, hist: [1, 1, 0, 1] };
    P.setProg(aid, pr); }, [aid, mid, cfg]);
  await fazer(al[0], { lab: 345 }); await fazer(al[1], { ate: "basico", metade: true });
  await al[0].waitForTimeout(5000);
  const barra = async a => a.evaluate(([aid, mid]) => window.PORTAL.podio.xpDoc(aid, mid, window.PORTAL.getProg(aid).atv), [aid, mid]);
  const R = { barraAna: await barra(al[0]), barraBruno: await barra(al[1]) };
  const tudo = await T.loja(); R.nuvemAna = (tudo["progresso/sim1_" + aid + "_" + mid] || {}).xp; R.nuvemBruno = (tudo["progresso/sim2_" + aid + "_" + mid] || {}).xp;
  R.labNaNuvem = !!JSON.parse((tudo["progresso/sim1_" + aid + "_" + mid] || {}).atv || "{}")[mid + "-lab"];
  const placar = await T.professor(b, "#/painel/placar/9A"); await placar.waitForTimeout(5000);
  const pts = await placar.evaluate(() => Object.fromEntries([...document.querySelectorAll(".pl-lin")].map(l => [l.querySelector(".pl-nome").textContent.trim().split(" ")[0], +l.querySelector(".pl-pts").textContent.replace(/\D/g, "")])));
  R.placarAna = pts.Ana; R.placarBruno = pts.Bruno;
  await al[0].waitForTimeout(3000);
  for (const a of al) { await a.evaluate(x => location.hash = "#/missao/" + x + "/m3/basico", aid); await a.waitForTimeout(2500); }
  R.linhaAluno = [await al[0].locator(".xp-placar").innerText().catch(() => "SEM LINHA"), await al[1].locator(".xp-placar").innerText().catch(() => "SEM LINHA")].map(x => x.replace(/\s+/g, " "));
  R.partesAna = (await al[0].locator(".xp-partes").innerText().catch(() => "SEM PARTES")).replace(/\s+/g, " ");
  R.somaPartesIgualTotal = await al[0].evaluate(([aid, mid]) => { const P = window.PORTAL, atv = P.getProg(aid).atv, z = P.podio.xpPartes(aid, mid, atv); return z.total === P.podio.xpDoc(aid, mid, atv); }, [aid, mid]);
  const vivo = await T.professor(b, "#/painel"); await vivo.waitForTimeout(2000); await T.fecharJanelas(vivo);
  await vivo.evaluate(() => { const x = document.createElement("button"); x.id = "pp-vivo"; document.body.appendChild(x); x.click(); }); await vivo.waitForTimeout(4000);
  await vivo.evaluate(() => { const s = document.querySelector("#pv-t"); if (s && s.value !== "9A") { s.value = "9A"; s.dispatchEvent(new Event("change")); } }); await vivo.waitForTimeout(3000);
  R.aoVivo = await vivo.evaluate(() => [...document.querySelectorAll(".pv-tab tbody tr")].map(tr => tr.innerText.replace(/\s+/g, " ").match(/^(\w+).*?(\d+) pts/) || []).filter(m => m[1]).map(m => m[1] + ": " + m[2]).join(" | "));
  // conferência
  const espAna = 40 + 10 + 10, espBruno = 20;
  R.CONFERE = { barra_igual_nuvem: R.barraAna === R.nuvemAna && R.barraBruno === R.nuvemBruno,
    placar_igual_barra_mais_extras: R.placarAna === R.barraAna + espAna && R.placarBruno === R.barraBruno + espBruno,
    aluno_ve_o_numero_do_placar: R.linhaAluno[0].includes(R.placarAna + " pts") && R.linhaAluno[1].includes(R.placarBruno + " pts"),
    partes_somam_o_total: R.somaPartesIgualTotal === true && /laboratório/.test(R.partesAna),
    aoVivo_igual_placar: R.aoVivo.includes("Ana: " + R.placarAna) && R.aoVivo.includes("Bruno: " + R.placarBruno) };
  console.log(R); console.log("erros", al.map(a => a.erros), placar.erros, vivo.erros); await b.close(); })();

/* 🧪 Roteiro: os pontos do placar e do painel 🔴 Ao vivo têm de ser IGUAIS (24/11/2026).
   A Aula ao vivo roda numa aba; o placar e o Ao vivo abrem em OUTRAS abas (como na sala), e os números são comparados. */
const { chromium } = require("playwright"); const T = require("./turma.js");
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();
  const prof = await T.professor(b, "#/painel/aula/9A");
  const al = []; for (let i = 0; i < 3; i++) al.push(await T.aluno(b, i));
  await prof.waitForTimeout(1500);
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(2500);
  for (let k = 0; k < 8; k++) { const s = await prof.locator(".pc-st").innerText(); if (/Pergunta/.test(s)) break; await bt(prof, "Próximo"); await prof.waitForTimeout(800); }
  await al[0].locator(".pc-op").nth(0).click(); await al[1].locator(".pc-op").nth(1).click(); await al[2].locator(".pc-op").nth(0).click();
  await prof.waitForTimeout(6000);
  // abas novas do professor (a Aula ao vivo NÃO está aberta nelas)
  const placar = await T.professor(b, "#/painel/placar/9A"); await placar.waitForTimeout(4000);
  const vivo = await T.professor(b, "#/painel"); await vivo.waitForTimeout(2000); await T.fecharJanelas(vivo);
  await vivo.evaluate(() => { const x = document.createElement("button"); x.id = "pp-vivo"; document.body.appendChild(x); x.click(); });
  await vivo.waitForTimeout(4000);
  await vivo.evaluate(() => { const s = document.querySelector("#pv-t"); if (s && s.value !== "9A") { s.value = "9A"; s.dispatchEvent(new Event("change")); } });
  await vivo.waitForTimeout(3000);
  const tPl = await placar.locator("body").innerText(), tVi = await vivo.locator(".pv-tab").innerText().catch(() => "SEM TABELA");
  await placar.screenshot({ path: "/tmp/pontos-placar.png" }); await vivo.locator(".pp-vivo-dlg").screenshot({ path: "/tmp/pontos-aovivo.png" }).catch(() => vivo.screenshot({ path: "/tmp/pontos-aovivo.png" }));
  console.log("PLACAR:\n" + tPl.split("\n").filter(l => /\d/.test(l) && /pts|Teste|\d{2,}/.test(l)).slice(0, 30).join(" | "));
  console.log("AO VIVO:\n" + tVi.replace(/\n+/g, " | ").slice(0, 900));
  console.log("erros", prof.erros, placar.erros, vivo.erros, al.map(a => a.erros)); await b.close(); })();

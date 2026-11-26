/* 🧪 Roteiro (26/11/2026): 🕘 Horários › 🖨️ Imprimir horários → escolhe preto e branco/colorida → abre a folha A4 com as turmas atuais. */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear({});
  const pr = await T.pagina(b, "prof"); await pr.goto(T.BASE + "/#/painel/turmas"); await pr.waitForTimeout(2500);
  for (let i = 0; i < 10; i++) { await pr.evaluate(() => document.querySelectorAll("dialog[open]").forEach(d => d.close())); await pr.waitForTimeout(400); }
  await pr.locator("#pp-hor").click(); await pr.waitForTimeout(800);
  for (const modo of ["mono", "cor"]) {
    await pr.locator("#ph-imp").click(); await pr.waitForTimeout(400);
    const [nova] = await Promise.all([pr.context().waitForEvent("page"), pr.locator(`dialog[open] button[value="${modo}"]`).click()]);
    await nova.waitForTimeout(1200);
    console.log(modo, "→ folha:", await nova.title(), "· turmas na tabela:", await nova.locator(".turma").count(), "· agregados mencionados:", await nova.locator("text=Agregados").count());
    await nova.close();
  }
  console.log("erros", pr.erros); await b.close(); })();

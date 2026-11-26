/* 🧪 Roteiro (26/11/2026): 🧰 Ferramentas da aula › 🔗 Vídeo do YouTube → colar qualquer link → ▶️ Passar para a turma → aparece no computador do aluno.
   (A gaveta tinha ficado sem botão na arrumação de 23/11.) */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();
  const al = await T.aluno(b, 0); await al.waitForTimeout(2000); await T.fecharJanelas(al);
  const prof = await T.professor(b, "#/painel/aula/9A"); await prof.waitForTimeout(2500);
  const bt = prof.locator(".pp-cx-b", { hasText: "Vídeo do YouTube" });
  console.log("botão 🔗 Vídeo do YouTube na barra:", await bt.count());
  await bt.click(); await prof.waitForTimeout(600);
  console.log("quadro de transmitir visível:", await prof.locator("#pp-transmitir:visible").count());
  await prof.locator("#sala-vid").selectOption(""); await prof.waitForTimeout(200);
  console.log("campo do link visível:", await prof.locator("#sala-link:visible").count());
  await prof.locator("#sala-link").fill("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=10s");
  await prof.locator("#sala-passar").click(); await prof.waitForTimeout(4000);
  console.log("no aluno:", await al.evaluate(() => { const d = document.querySelector(".sala-dlg"); return d && d.open ? "janela da transmissão aberta" : "NÃO APARECEU"; }));
  console.log("erros", prof.erros, al.erros); await b.close(); })();

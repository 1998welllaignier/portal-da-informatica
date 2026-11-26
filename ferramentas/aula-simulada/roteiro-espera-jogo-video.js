/* 🧪 Roteiro (26/11/2026, depois do susto): aluno JOGANDO na Sala de espera + professor começa pelo vídeo da Aula ao vivo:
   o jogo da sala de espera NÃO pode estar em tela cheia e o vídeo tem que aparecer na tela do aluno (e tocar). */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();
  const prof = await T.professor(b, "#/painel/aula/9A");
  const al = await T.aluno(b, 0); await al.waitForTimeout(2500);
  console.log("aluno em:", al.url());
  await al.locator('.es-card[data-op="jogos"]').click(); await al.waitForTimeout(1500);
  await al.locator(".jg-card").first().click(); await al.waitForTimeout(400); await al.locator('[data-x="jogar"]').click(); await al.waitForTimeout(1500);
  console.log("jogando na sala de espera; tela cheia? (tem que ser true)", await al.evaluate(() => !!document.fullscreenElement));
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await prof.locator(".pc-b", { hasText: "Começar pelo vídeo" }).first().click(); await prof.waitForTimeout(3000);
  await prof.locator(".pc-b", { hasText: "Play" }).first().click(); await prof.waitForTimeout(4000);
  const vis = await al.evaluate(() => { const c = document.querySelector(".pc-aluno"); if (!c) return "SEM VÍDEO"; const r = c.getBoundingClientRect(); return r.width + "x" + r.height + " tela cheia do jogo: " + !!document.fullscreenElement; });
  console.log("aluno vê o vídeo:", vis, "· tempo do player do aluno:", await al.evaluate(() => (window.__ytPlayers || []).map(p => p.getCurrentTime().toFixed(1))));
  // largada com o aluno jogando em tela cheia: vai para a missão e sai da tela cheia
  await prof.locator(".pc-b", { hasText: "Fechar" }).first().click().catch(() => {}); await prof.waitForTimeout(3000);
  await al.locator('.es-card[data-op="jogos"]').click().catch(() => {}); await al.waitForTimeout(1200);
  await al.locator(".jg-card").first().click().catch(() => {}); await al.waitForTimeout(400); await al.locator('[data-x="jogar"]').click().catch(() => {}); await al.waitForTimeout(1500);
  console.log("de novo jogando em tela cheia:", await al.evaluate(() => !!document.fullscreenElement));
  await prof.evaluate(async () => { await window.PORTAL.nuvem.db().collection("config").doc("hoje_9A").set({ largadaEm: Date.now() }, { merge: true }); });
  await al.waitForTimeout(8000);
  console.log("depois da largada:", al.url(), "tela cheia do jogo:", await al.evaluate(() => !!(document.fullscreenElement && document.fullscreenElement.classList.contains("jg-fs"))));
  console.log("erros", prof.erros, al.erros); await b.close(); })();

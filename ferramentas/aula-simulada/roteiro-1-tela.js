/* 🧪 Roteiro de teste da Aula ao vivo na turma simulada (ver LEIA-ME.md). */
const { chromium } = require("playwright"); const T = require("./turma.js");
const sh = (pg, n) => pg.screenshot({ path: require("os").tmpdir() + "/aula-" + n + ".png" });
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
const px = pg => pg.evaluate(() => { const c = document.querySelector("canvas.lousa-telao"); if (!c) return 0; const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();
  const prof = await T.professor(b, "#/painel/aula/9A");
  const al = []; for (let i = 0; i < 3; i++) al.push(await T.aluno(b, i));
  await prof.waitForTimeout(1500);
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await sh(prof, "1-prof-espera");
  console.log("status:", await prof.locator(".pc-st").innerText());
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(2500);
  await sh(prof, "2-prof-leitura"); await sh(al[0], "2-aluno-leitura");
  console.log("aluno overlay:", await al[0].locator(".pc-aluno").count(), "telão text:", (await al[0].locator(".pc-stage").innerText()).slice(0, 80));
  // risco
  await bt(prof, "Riscar"); await prof.waitForTimeout(300);
  const r = await prof.evaluate(() => { const q = document.querySelector(".pc-area-p .pc-stage").getBoundingClientRect(); return [q.left, q.top, q.width, q.height]; });
  await prof.mouse.move(r[0] + 200, r[1] + 300); await prof.mouse.down(); for (let i = 0; i < 20; i++) await prof.mouse.move(r[0] + 200 + i * 20, r[1] + 300); await prof.mouse.up();
  await prof.waitForTimeout(2000); console.log("aluno px risco:", await px(al[0]));
  await sh(prof, "3-prof-risco"); await sh(al[0], "3-aluno-risco");
  await bt(prof, "Mouse"); 
  // avançar até a primeira pergunta
  for (let k = 0; k < 8; k++) { const s = await prof.locator(".pc-st").innerText(); if (/Pergunta/.test(s)) break; await bt(prof, "Próximo"); await prof.waitForTimeout(800); }
  console.log("prof:", await prof.locator(".pc-st").innerText());
  await prof.waitForTimeout(1200); await sh(al[1], "4-aluno-pergunta");
  await al[0].locator(".pc-op").nth(0).click(); await al[1].locator(".pc-op").nth(1).click(); await al[2].locator(".pc-op").nth(2).click();
  await prof.waitForTimeout(6000);
  await sh(prof, "5-prof-resultado"); await sh(al[0], "5-aluno-resultado");
  console.log("resultado aluno:", (await al[0].locator(".pc-resultado").innerText().catch(() => "SEM")).replace(/\n/g, " | "));
  // vídeo
  await bt(prof, "Ir para o vídeo"); await prof.waitForTimeout(2500);
  await bt(prof, "Play"); await prof.waitForTimeout(4000);
  const tp = await prof.evaluate(() => window.__ytPlayers.map(p => p.getCurrentTime().toFixed(1) + (p.isMuted() ? "m" : "s")));
  const ta = await Promise.all(al.map(a => a.evaluate(() => (window.__ytPlayers || []).map(p => p.getCurrentTime().toFixed(1) + (p.isMuted() ? "m" : "s")))));
  console.log("prof player:", tp, "alunos:", ta);
  await sh(prof, "6-prof-video"); await sh(al[0], "6-aluno-video");
  await bt(prof, "Voltar ao início"); await prof.waitForTimeout(2500);
  console.log("após início prof:", await prof.evaluate(() => window.__ytPlayers.map(p => p.getCurrentTime().toFixed(1) + " st" + p.getPlayerState())), "aluno:", await al[0].evaluate(() => window.__ytPlayers.map(p => p.getCurrentTime().toFixed(1) + " st" + p.getPlayerState())));
  await bt(prof, "Fechar o vídeo"); await prof.waitForTimeout(2500);
  console.log("aluno overlay após fechar:", await al[0].locator(".pc-aluno").count(), al[0].url());
  await sh(al[0], "7-aluno-volta");
  console.log("erros", prof.erros, al.map(a => a.erros)); await b.close(); })();

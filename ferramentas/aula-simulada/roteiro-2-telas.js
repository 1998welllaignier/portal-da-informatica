/* 🧪 Roteiro de teste da Aula ao vivo na turma simulada (ver LEIA-ME.md). */
const { chromium } = require("playwright"); const T = require("./turma.js");
const sh = (pg, n) => pg.screenshot({ path: require("os").tmpdir() + "/aula-" + n + ".png" });
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
const px = (pg, sel) => pg.evaluate(() => { const c = document.querySelector("canvas.lousa-telao"); if (!c) return 0; const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n; });
const yts = pg => pg.evaluate(() => (window.__ytPlayers || []).map(p => p.getCurrentTime().toFixed(1) + " st" + p.getPlayerState() + (p.isMuted() ? " mudo" : " som")));
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear();
  const prof = await T.professor(b, "#/painel/aula/9A", { width: 1366, height: 768 });
  await prof.evaluate(() => localStorage.setItem("portal:telas", "3"));
  const al = []; for (let i = 0; i < 2; i++) al.push(await T.aluno(b, i));
  await prof.waitForTimeout(1000);
  const [tel] = await Promise.all([prof.context().waitForEvent("page"), prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click()]);
  await prof.waitForTimeout(3500); await tel.setViewportSize({ width: 1280, height: 720 });
  await sh(tel, "t2-telao-espera"); await sh(prof, "t2-prof-espera");
  await tel.click(".pc-ativar"); await prof.waitForTimeout(500);
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(2500);
  await bt(prof, "Riscar"); await prof.waitForTimeout(300);
  const r = await prof.evaluate(() => { const q = document.querySelector(".pc-area-p .pc-stage").getBoundingClientRect(); return [q.left, q.top, q.width, q.height]; });
  await prof.mouse.move(r[0] + 100, r[1] + 200); await prof.mouse.down(); for (let i = 0; i < 20; i++) await prof.mouse.move(r[0] + 100 + i * 12, r[1] + 200 + i * 2); await prof.mouse.up();
  await prof.waitForTimeout(1500);
  console.log("risco telão:", await px(tel), "aluno:", await px(al[0]));
  await sh(prof, "t2-prof-leitura"); await sh(tel, "t2-telao-leitura");
  await bt(prof, "Mouse");
  // palavra pontilhada
  const tl = prof.locator(".pc-area-p .termo-link").first(); if (await tl.count()) { await tl.click(); await prof.waitForTimeout(1500); console.log("termo aluno:", await al[0].locator(".pc-termo").count(), "telão:", await tel.locator(".pc-termo").count()); await sh(tel, "t2-telao-termo"); await prof.locator(".pc-termo-x").click(); await prof.waitForTimeout(800); }
  await bt(prof, "Ir para o vídeo"); await prof.waitForTimeout(2500);
  await bt(prof, "Play"); await prof.waitForTimeout(3500);
  console.log("telão:", await yts(tel), "alunos:", await yts(al[0]), await yts(al[1]));
  await sh(prof, "t2-prof-video"); await sh(tel, "t2-telao-video");
  await bt(prof, "Tirar o som"); await prof.waitForTimeout(1500); console.log("após mudo telão:", await yts(tel), "botão:", await prof.locator(".pc-bts").innerText());
  await bt(prof, "Ligar o som"); await prof.waitForTimeout(800);
  await bt(prof, "Voltar ao início"); await prof.waitForTimeout(2500); console.log("após início telão:", await yts(tel), "aluno:", await yts(al[0]));
  await bt(prof, "Fechar o vídeo"); await prof.waitForTimeout(2000);
  console.log("aluno overlay:", await al[0].locator(".pc-aluno").count(), "telão:", (await tel.locator(".pc-stage").innerText()).slice(0, 60));
  await bt(prof, "Dar a largada"); await prof.waitForTimeout(800); await prof.locator("dialog[open] button", { hasText: "Sim" }).click().catch(e => console.log("confirm?", e.message.slice(0, 80)));
  await prof.waitForTimeout(2500); console.log("aluno após largada:", al[0].url());
  console.log("erros", prof.erros, tel.erros, al.map(a => a.erros)); await b.close(); })();

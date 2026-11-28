/* 🧪 Roteiro das 🎬📖 vinhetinhas de etapa (27/11/2026). Rode com VINHETA=1 (o testar-tudo.sh já faz isso para este arquivo).
   2 telas: clicar em 🎬 NÃO trava os alunos; só o clique na janela do projetor trava e começa a vinheta em todas as telas;
   no fim da vinheta do vídeo, o play é automático. Depois: leitura com vinheta e ⏭ Pular; e a 1 tela. */
process.env.VINHETA = "1";
const { chromium } = require("playwright"); const T = require("./turma.js");
const sh = (pg, n) => pg.screenshot({ path: require("os").tmpdir() + "/aula-" + n + ".png" });
const bt = (pg, txt) => pg.locator(".pc-b", { hasText: txt }).first().click();
const yts = pg => pg.evaluate(() => (window.__ytPlayers || []).map(p => p.getPlayerState()));
const tem = (pg, sel) => pg.locator(sel).count();
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  await T.semear(); const R = {};
  const prof = await T.professor(b, "#/painel/aula/9A", { width: 1366, height: 768 });
  await prof.evaluate(() => { localStorage.setItem("portal:telas", "3"); localStorage.removeItem("portal:vinhetas"); });
  const al = []; for (let i = 0; i < 2; i++) al.push(await T.aluno(b, i));
  await prof.waitForTimeout(1000);
  const [tel] = await Promise.all([prof.context().waitForEvent("page"), prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click()]);
  await prof.waitForTimeout(3000); await tel.setViewportSize({ width: 1280, height: 720 });
  // 1) clicou em 🎬, mas ainda NÃO clicou no projetor
  await bt(prof, "Começar pelo vídeo"); await prof.waitForTimeout(2500);
  R.prep_no_painel = await tem(prof, ".pc-prep") === 1;
  R.alunos_livres_antes = (await tem(al[0], ".pc-aluno")) === 0 && (await tem(al[1], ".pc-aluno")) === 0;
  await sh(prof, "vin-prof-prep"); await sh(al[0], "vin-aluno-livre");
  // 2) clique na janela do projetor = valendo
  await tel.click(".pc-ativar"); await prof.waitForTimeout(2600);
  R.vinheta_alunos = (await tem(al[0], ".pc-aluno .vin-ov")) === 1 && (await tem(al[1], ".pc-aluno .vin-ov")) === 1;
  R.vinheta_projetor = (await tem(tel, ".vin-ov")) === 1;
  R.vinheta_painel = (await tem(prof, ".pc-palco-prof .vin-ov")) === 1;
  R.botao_pular = (await prof.locator(".pc-b", { hasText: "Pular vinheta" }).count()) === 1;
  await sh(al[0], "vin-aluno-video"); await sh(tel, "vin-telao-video"); await sh(prof, "vin-prof-video");
  await prof.waitForTimeout(8500);
  R.vinheta_sumiu = (await tem(al[0], ".vin-ov")) === 0 && (await tem(tel, ".vin-ov")) === 0;
  const st = await yts(tel), sa = await yts(al[0]);
  R.play_automatico_projetor = st.includes(1); R.aluno_acompanha = sa.includes(1);
  console.log("players telão", st, "aluno", sa);
  await sh(al[0], "vin-aluno-tocando"); await sh(prof, "vin-prof-tocando");
  // 3) volta à espera e começa a leitura (projetor já pronto: começa direto) e ⏭ pula
  await bt(prof, "Fechar o vídeo"); await prof.waitForTimeout(2000);
  R.voltou_espera = (await tem(al[0], ".pc-aluno")) === 0;
  await bt(prof, "Começar pela leitura"); await prof.waitForTimeout(2600);
  R.leitura_direto_sem_prep = (await tem(prof, ".pc-prep")) === 0;
  R.vinheta_leitura_aluno = (await tem(al[0], ".vin-ov")) === 1;
  await sh(al[0], "vin-aluno-leitura"); await sh(tel, "vin-telao-leitura");
  await bt(prof, "Pular vinheta"); await prof.waitForTimeout(2500);
  R.pular_tirou_aluno = (await tem(al[0], ".vin-ov")) === 0; R.pular_tirou_projetor = (await tem(tel, ".vin-ov")) === 0;
  R.slide_aluno_visivel = (await tem(al[0], ".pc-stage")) >= 1;
  await bt(prof, "Fechar a leitura"); await prof.waitForTimeout(1500);
  await bt(prof, "Fechar a Aula ao vivo").catch(() => {}); await prof.waitForTimeout(1500);
  // 4) 1 tela: começa na hora, com vinheta, e o vídeo dá play sozinho
  await prof.evaluate(() => localStorage.setItem("portal:telas", "2")); await prof.reload(); await prof.waitForTimeout(3000); await T.fecharJanelas(prof);
  await prof.locator(".pp-cx-b", { hasText: "Aula ao vivo" }).click(); await prof.waitForTimeout(2500);
  await bt(prof, "Começar pelo vídeo"); await prof.waitForTimeout(2600);
  R.um_vinheta_direto = (await tem(prof, ".pc-palco-prof .vin-ov")) === 1 && (await tem(al[0], ".vin-ov")) === 1;
  await prof.waitForTimeout(8500);
  R.um_play_automatico = (await yts(prof)).includes(1);
  await sh(prof, "vin-1tela-tocando");
  console.log("CONFERE", JSON.stringify(R, null, 1).replace(/^\{/, "{").replace(/"([^"]+)":/g, "$1:"));
  console.log("erros", prof.erros, tel.erros, al.map(a => a.erros)); await b.close(); })();

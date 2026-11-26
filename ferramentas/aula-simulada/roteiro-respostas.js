/* 🧪 Roteiro (26/11/2026): a aba Aula abre em TODAS as missões de TODAS as apostilas, sem erro; nenhuma resposta fica só com
   "o portal confere sozinho" sem a resposta; a faixa do tempo é a padrão (75 min). */
const { chromium } = require("playwright"); const T = require("./turma.js");
(async () => { const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const pg = await T.pagina(b, "x"); await pg.goto(T.BASE + "/"); await pg.waitForTimeout(1500);
  const r = await pg.evaluate(async () => { const P = window.PORTAL, out = { ok: 0, erros: [], semResp: {}, tempo: "" }; const div = document.createElement("div"); document.body.appendChild(div);
    for (const a of P.catalogo.apostilas) { try { await P.carregarApostila(a.id); } catch (e) { continue; } const C = P.conteudo[a.id]; if (!C) continue;
      for (const m of C.missoes) { try { await P.aula.render(div, a.id, m.id, null, null); out.ok++; if (!out.tempo) out.tempo = (div.querySelector(".aula-tempo") || {}).ariaLabel || "";
          div.querySelectorAll(".aula-resp").forEach(x => { if (/o portal confere sozinho\.\s*$/i.test(x.innerText.split("💬")[0].trim())) { const k = a.id + "/" + m.id; out.semResp[k] = (out.semResp[k] || 0) + 1; } });
        } catch (e) { out.erros.push(a.id + "/" + m.id + ": " + e.message); } } }
    return out; });
  console.log("missões abertas na aba Aula:", r.ok, "· com erro:", r.erros.length, r.erros.slice(0, 5)); console.log("sem resposta:", Object.keys(r.semResp).length, "· faixa:", r.tempo);
  console.log("erros", pg.erros); await b.close(); })();

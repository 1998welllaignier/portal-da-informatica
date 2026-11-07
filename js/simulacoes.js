/* ============================================================
   SIMULAÇÕES INTERATIVAS ("Mão na massa")
   Tipos de atividade com correção automática, usados no início das
   missões da JK e no Modo Explorador.
   mensagens · cesar · grafo · bolha · adivinhe · permissoes ·
   medidor_senha · lampadas · rota
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL, T = P.tipos;
  const { esc, md, shuffle } = P.util;

  /* ---------- 1. MENSAGENS: celular de mentira, aluno decide em cada mensagem ---------- */
  T.mensagens = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.r = st.r || {};
      const bts = at.botoes || [{ id: "G", rot: "🚩 Golpe" }, { id: "S", rot: "✅ Segura" }];
      const draw = () => {
        c.innerHTML = `<div class="sim-cel"><div class="sim-cel-top">${esc(at.app || "💬 Mensagens")}</div><div class="sim-cel-msgs">${at.itens.map((m, i) => {
          const r = st.r[i], ok = r && r === m.c;
          return `<div class="sim-msg ${r ? (ok ? "ok" : "erro") : ""}">${m.de === "" ? "" : `<div class="sim-de">${esc(m.de || "Desconhecido")}</div>`}<div class="sim-txt">${md(m.t)}</div>
            ${r ? `<div class="sim-fb">${ok ? "✔ Isso!" : "✖ Olhe de novo!"} ${m.why ? md(m.why) : ""}</div>` : ""}
            ${ok ? "" : `<div class="sim-bts">${bts.map(b => `<button type="button" data-i="${i}" data-b="${b.id}">${esc(b.rot)}</button>`).join("")}</div>`}</div>`; }).join("")}</div></div>`;
        c.querySelectorAll("[data-i]").forEach(b => b.onclick = () => {
          st.r[b.dataset.i] = b.dataset.b; if (b.dataset.b !== at.itens[b.dataset.i].c) st.tentativas = (st.tentativas || 0) + 1;
          ctx.salvar(); draw();
          if (at.itens.every((m, i) => st.r[i] === m.c) && !st.status) ctx.concluir("certo", at.okMsg || "Você acertou todas!");
        });
      };
      draw();
    }
  };

  /* ---------- 2. CESAR: roleta para cifrar/decifrar ---------- */
  T.cesar = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.k = st.k || 0;
      const AB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const des = (t, k) => t.replace(/[A-Z]/g, ch => AB[(AB.indexOf(ch) - k + 26) % 26]);
      const draw = () => {
        const k = st.k, claro = des(at.cifrada, k), certo = claro === at.resposta;
        c.innerHTML = `<div class="sim-cesar"><p class="sim-cesar-msg">🔐 Mensagem secreta: <strong>${esc(at.cifrada)}</strong></p>
          <div class="sim-roleta"><button type="button" data-d="-1" aria-label="Diminuir chave">◀</button><span>Chave <strong>${k}</strong></span><button type="button" data-d="1" aria-label="Aumentar chave">▶</button></div>
          <div class="sim-fitas"><div>${[...AB].map(l => `<span>${l}</span>`).join("")}</div><div class="cif">${[...AB].map((l, i) => `<span>${AB[(i + k) % 26]}</span>`).join("")}</div></div>
          <p class="sim-legenda">Linha de cima: letra normal · linha de baixo: letra cifrada (andou ${k} casa${k === 1 ? "" : "s"})</p>
          <p class="sim-cesar-res ${certo ? "ok" : ""}">Decifrando: <strong>${esc(claro)}</strong>${certo ? " 🎉" : ""}</p></div>`;
        c.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { st.k = (st.k + +b.dataset.d + 26) % 26; ctx.salvar(); draw(); if (des(at.cifrada, st.k) === at.resposta && !st.status) ctx.concluir("certo", `Você achou a chave ${st.k}!`); });
      };
      draw();
    }
  };

  /* ---------- 3. GRAFO: clicar nos lugares para montar o caminho mais curto ---------- */
  T.grafo = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.cam = st.cam || [at.inicio];
      const V = at.vertices, E = at.arestas;
      const peso = (a, b) => { const e = E.find(x => (x[0] === a && x[1] === b) || (x[0] === b && x[1] === a)); return e ? e[2] : null; };
      const total = () => st.cam.slice(1).reduce((s, v, i) => s + peso(st.cam[i], v), 0);
      const draw = () => {
        const ult = st.cam[st.cam.length - 1];
        const naCam = (a, b) => st.cam.some((v, i) => i && ((st.cam[i - 1] === a && v === b) || (st.cam[i - 1] === b && v === a)));
        c.innerHTML = `<div class="sim-grafo"><svg viewBox="0 0 400 260" role="img" aria-label="Mapa com lugares e ruas">
          ${E.map(([a, b, w]) => { const A = V[a], B = V[b]; return `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" class="${naCam(a, b) ? "cam" : ""}"/><text x="${(A.x + B.x) / 2}" y="${(A.y + B.y) / 2 - 6}" class="peso">${w}</text>`; }).join("")}
          ${Object.entries(V).map(([id, v]) => `<g class="v ${st.cam.includes(id) ? "no" : ""} ${id === ult ? "ult" : ""} ${peso(ult, id) !== null && !st.cam.includes(id) ? "pode" : ""}" data-v="${id}" tabindex="0" role="button" aria-label="${esc(v.nome)}"><circle cx="${v.x}" cy="${v.y}" r="24"/><text x="${v.x}" y="${v.y + 6}" class="ic">${v.ic}</text><text x="${v.x}" y="${v.y + 42}" class="nm">${esc(v.nome)}</text></g>`).join("")}
        </svg><p class="sim-legenda">Caminho: <strong>${st.cam.map(v => V[v].nome).join(" → ")}</strong> · Soma: <strong>${total()}</strong> ${esc(at.unidade || "")} <button type="button" class="btn btn-link btn-peq" data-limpar>↺ Recomeçar</button></p></div>`;
        c.querySelectorAll("[data-v]").forEach(g => { const f = () => { const v = g.dataset.v; const u = st.cam[st.cam.length - 1]; if (peso(u, v) === null || st.cam.includes(v)) return; st.cam.push(v); ctx.salvar(); draw(); }; g.onclick = f; g.onkeydown = e => { if (e.key === "Enter") f(); }; });
        c.querySelector("[data-limpar]").onclick = () => { st.cam = [at.inicio]; ctx.salvar(); draw(); };
      };
      ctx.resolver = () => { if (at.solucao) { st.cam = at.solucao.slice(); ctx.salvar(); draw(); } };
      ctx.verificar = () => {
        if (st.cam[st.cam.length - 1] !== at.fim) return ctx.errou(`O caminho ainda não chegou em ${V[at.fim].nome}.`);
        if (total() > at.menor) return ctx.errou(`Chegou! Mas a soma deu ${total()}. Existe um caminho com soma menor. Lembre: mais paradas não quer dizer mais longe.`);
        ctx.concluir("certo", `Caminho mais curto: soma ${total()}! É assim que o aplicativo de mapas escolhe a rota.`);
      };
      draw();
    }
  };

  /* ---------- 4. BOLHA: ordenar trocando vizinhos ---------- */
  T.bolha = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.v = st.v || at.valores.slice(); st.trocas = st.trocas || 0;
      const cmp = (a, b) => typeof a === "number" ? a - b : String(a).localeCompare(String(b), "pt");
      const ok = () => st.v.every((x, i) => !i || cmp(st.v[i - 1], x) <= 0);
      const draw = () => {
        c.innerHTML = `<div class="sim-bolha"><div class="sim-cartas">${st.v.map((x, i) => `<span class="sim-carta">${esc(x)}</span>${i < st.v.length - 1 ? `<button type="button" class="sim-troca" data-i="${i}" aria-label="Trocar ${esc(x)} e ${esc(st.v[i + 1])}">⇄</button>` : ""}`).join("")}</div>
          <p class="sim-legenda">Trocas feitas: <strong>${st.trocas}</strong> ${ok() ? "· ✔ Em ordem!" : ""} <button type="button" class="btn btn-link btn-peq" data-limpar>↺ Recomeçar</button></p></div>`;
        c.querySelectorAll(".sim-troca").forEach(b => b.onclick = () => { const i = +b.dataset.i; [st.v[i], st.v[i + 1]] = [st.v[i + 1], st.v[i]]; st.trocas++; ctx.salvar(); draw(); if (ok() && !st.status) ctx.concluir("certo", `Ordenado com ${st.trocas} trocas!`); });
        c.querySelector("[data-limpar]").onclick = () => { st.v = at.valores.slice(); st.trocas = 0; ctx.salvar(); draw(); };
      };
      draw();
    }
  };

  /* ---------- 5. ADIVINHE: busca binária ---------- */
  T.adivinhe = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st, max = at.max || 100;
      if (!st.alvo || st.alvo > max) { st.alvo = 1 + Math.floor(Math.random() * max); st.chutes = []; }
      const draw = () => {
        const acertou = st.chutes.includes(st.alvo);
        let lo = 1, hi = max; st.chutes.forEach(x => { if (x < st.alvo) lo = Math.max(lo, x + 1); if (x > st.alvo) hi = Math.min(hi, x - 1); });
        c.innerHTML = `<div class="sim-adiv"><p>Pensei num número de <strong>1 a ${max}</strong>. Chute sempre o <strong>meio</strong> do que sobrou!</p>
          <div class="sim-faixa"><span>Pode ser de <strong>${lo}</strong> a <strong>${hi}</strong></span></div>
          ${acertou ? "" : `<div class="ex-busca"><input type="number" min="1" max="${max}" id="chute" placeholder="Seu chute" inputmode="numeric"><button type="button" class="btn btn-ok" id="ch">Chutar</button></div>`}
          <ol class="sim-chutes">${st.chutes.map(x => `<li>${x} → ${x === st.alvo ? "🎉 acertou!" : x < st.alvo ? "⬆️ é maior" : "⬇️ é menor"}</li>`).join("")}</ol>
          ${acertou ? `<button type="button" class="btn btn-link" data-nov>↺ Jogar de novo</button>` : ""}</div>`;
        const inp = c.querySelector("#chute");
        if (inp) { const go = () => { const x = parseInt(inp.value, 10); if (!(x >= 1 && x <= max)) return; st.chutes.push(x); ctx.salvar(); draw();
          if (x === st.alvo && !st.status) { const n = st.chutes.length; ctx.concluir("certo", n <= (at.meta || 7) ? `Acertou em ${n} chutes. Isso é busca binária! 🚀` : `Acertou em ${n} chutes. Dica: chutando sempre o meio, dá para acertar em até ${at.meta || 7}.`); } };
          c.querySelector("#ch").onclick = go; inp.onkeydown = e => { if (e.key === "Enter") go(); }; }
        const nv = c.querySelector("[data-nov]"); if (nv) nv.onclick = () => { st.alvo = 0; T.adivinhe.render(c, at, ctx); };
      };
      draw();
    }
  };

  /* ---------- 6. PERMISSÕES: celular de mentira, permitir ou negar ---------- */
  T.permissoes = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.r = st.r || {};
      const draw = () => {
        c.innerHTML = `<div class="sim-cel"><div class="sim-cel-top">⚙️ Instalando aplicativos</div><div class="sim-cel-msgs">${at.itens.map((p, i) => {
          const r = st.r[i], ok = r && r === p.c;
          return `<div class="sim-msg sim-perm ${r ? (ok ? "ok" : "erro") : ""}"><div class="sim-de">${p.ic} ${esc(p.app)}</div><div class="sim-txt">quer acessar: <strong>${esc(p.pede)}</strong></div>
            ${r ? `<div class="sim-fb">${ok ? "✔" : "✖ Pense: o aplicativo precisa mesmo disso?"} ${p.why ? md(p.why) : ""}</div>` : ""}
            ${ok ? "" : `<div class="sim-bts"><button type="button" data-i="${i}" data-b="S">✅ Permitir</button><button type="button" data-i="${i}" data-b="N">⛔ Negar</button></div>`}</div>`; }).join("")}</div></div>`;
        c.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { st.r[b.dataset.i] = b.dataset.b; ctx.salvar(); draw(); if (at.itens.every((p, i) => st.r[i] === p.c) && !st.status) ctx.concluir("certo", "Você protegeu os seus dados! Só permita o que o aplicativo realmente precisa."); });
      };
      draw();
    }
  };

  /* ---------- 7. MEDIDOR DE SENHA ---------- */
  T.medidor_senha = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st;
      c.innerHTML = `<div class="sim-senha"><p class="aviso-senha">⚠️ Invente uma senha de mentira. <strong>Nunca</strong> digite a sua senha de verdade.</p>
        <input type="text" id="sx" autocomplete="off" spellcheck="false" placeholder="Digite uma senha inventada" aria-label="Senha inventada">
        <div class="sim-medidor"><span></span></div><p class="sim-forca"></p><ul class="sim-reqs"></ul></div>`;
      const inp = c.querySelector("#sx"), bar = c.querySelector(".sim-medidor span"), fz = c.querySelector(".sim-forca"), rq = c.querySelector(".sim-reqs");
      const R = [["8 caracteres ou mais", s => s.length >= 8], ["letra maiúscula", s => /[A-Z]/.test(s)], ["letra minúscula", s => /[a-z]/.test(s)], ["número", s => /\d/.test(s)], ["símbolo (! @ # $ …)", s => /[^A-Za-z0-9]/.test(s)], ["sem sequências fáceis (123, abc, senha)", s => s.length > 0 && !/123|abc|senha|qwe|111|000/i.test(s)]];
      const upd = () => {
        const s = inp.value, n = R.filter(r => r[1](s)).length;
        const nv = [["Muito fraca", "#dc2626"], ["Muito fraca", "#dc2626"], ["Fraca", "#f97316"], ["Fraca", "#f97316"], ["Média", "#eab308"], ["Forte", "#22c55e"], ["Muito forte 💪", "#16a34a"]][n];
        bar.style.width = (n / 6 * 100) + "%"; bar.style.background = nv[1]; fz.textContent = s ? "Força: " + nv[0] : "";
        rq.innerHTML = R.map(r => `<li class="${r[1](s) ? "ok" : ""}">${r[1](s) ? "✔" : "○"} ${r[0]}</li>`).join("");
        if (n === 6 && !st.status) { st.forte = true; ctx.concluir("certo", "Senha muito forte! Agora você sabe montar uma. (Não use esta de verdade: ela já apareceu na tela.)"); }
      };
      inp.oninput = upd; upd();
      if (st.status) fz.textContent = "✔ Você já montou uma senha muito forte.";
    }
  };

  /* ---------- 8. LÂMPADAS: E / OU com interruptores ---------- */
  T.lampadas = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.f = st.f || 0; st.s = st.s || [false, false];
      const draw = () => {
        const fase = at.fases[st.f];
        if (!fase) { c.innerHTML = `<p class="sim-legenda">🎉 Todas as lâmpadas certas!</p>`; return; }
        const [a, b] = st.s, acesa = fase.op === "E" ? a && b : fase.op === "OU" ? a || b : !a;
        c.innerHTML = `<div class="sim-lamp"><p class="sim-fase">Fase ${st.f + 1} de ${at.fases.length}: ${md(fase.pede)}</p>
          <div class="sim-circ"><button type="button" class="sim-int ${a ? "on" : ""}" data-k="0">A<br>${a ? "LIGADO" : "desligado"}</button>
          ${fase.op !== "NAO" ? `<span class="sim-op">${fase.op}</span><button type="button" class="sim-int ${b ? "on" : ""}" data-k="1">B<br>${b ? "LIGADO" : "desligado"}</button>` : `<span class="sim-op">NÃO</span>`}
          <span class="sim-seta">→</span><span class="sim-bulbo ${acesa ? "acesa" : ""}">💡</span></div>
          <button type="button" class="btn btn-ok" data-ok>Pronto!</button></div>`;
        c.querySelectorAll("[data-k]").forEach(x => x.onclick = () => { st.s[+x.dataset.k] = !st.s[+x.dataset.k]; ctx.salvar(); draw(); });
        c.querySelector("[data-ok]").onclick = () => {
          const certo = fase.quer(st.s[0], st.s[1]);
          if (!certo) { ctx.errou(fase.dica || "Ainda não. Olhe de novo o que a fase pede."); return; }
          ctx.feedback("ok", "Isso! " + (fase.why || ""));
          st.f++; st.s = [false, false]; ctx.salvar();
          if (st.f >= at.fases.length) ctx.concluir("certo", "Você dominou o E, o OU e o NÃO!"); else draw();
        };
      };
      draw();
    }
  };

  /* ---------- 9. ROTA: clicar nas etapas na ordem certa ---------- */
  T.rota = {
    auto: true,
    render(c, at, ctx) {
      const st = ctx.st; st.n = st.n || 0;
      const ord = st.ord = st.ord || shuffle(at.etapas.map((_, i) => i));
      const draw = () => {
        c.innerHTML = `<div class="sim-rota"><div class="sim-trilha">${at.etapas.slice(0, st.n).map(e => `<span class="sim-pass">${e.ic} ${esc(e.t)}</span>`).join('<span class="sim-seta">→</span>')}${st.n < at.etapas.length ? `<span class="sim-seta">→</span><span class="sim-vaz">?</span>` : " 🎉"}</div>
          <div class="sim-opcoes">${ord.filter(i => i >= st.n).map(i => `<button type="button" class="sim-et" data-i="${i}">${at.etapas[i].ic} ${esc(at.etapas[i].t)}</button>`).join("")}</div></div>`;
        c.querySelectorAll(".sim-et").forEach(b => b.onclick = () => {
          const i = +b.dataset.i;
          if (i === st.n) { st.n++; ctx.salvar(); ctx.feedback("", ""); draw(); if (st.n === at.etapas.length && !st.status) ctx.concluir("certo", at.okMsg || "Caminho completo!"); }
          else { st.tentativas = (st.tentativas || 0) + 1; ctx.salvar(); b.classList.add("errou"); setTimeout(() => b.classList.remove("errou"), 500); ctx.feedback("erro", "Essa etapa vem depois. " + (at.etapas[st.n].dica || "")); }
        });
      };
      draw();
    }
  };
})();

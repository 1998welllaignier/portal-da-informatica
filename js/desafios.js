/* 🎮 Desafio de saída das curiosidades: depois do 1:30, o aluno resolve um joguinho sobre o que leu para entrar na apostila.
   Cada aluno sorteia um jogo (caça-palavras, jogo da memória ou quiz). Os cartões ficam a um clique ("📚 Rever os cartões").
   Ajuda progressiva: dicas depois de alguns erros, para ninguém ficar preso. Conteúdo em DESAFIO[tema]. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const embaralha = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // conteúdo de cada tema: palavras (caça-palavras, sem acento), pares (memória: termo ↔ pista) e quiz (pergunta, opções, índice certo)
  const DESAFIO = {
    consciencia: {
      palavras: ["QUILOMBO", "ZUMBI", "DANDARA", "BAOBA", "PALMARES", "SAMBA"],
      pares: [["Zumbi", "último líder de Palmares"], ["Dandara", "guerreira de Palmares"], ["Baobá", "árvore da memória"], ["Quilombo", "comunidade de quem fugiu da escravidão"], ["1695", "ano da morte de Zumbi"], ["Capoeira", "Patrimônio da Humanidade"]],
      quiz: [
        ["Por que o Dia da Consciência Negra é em 20 de novembro?", ["É a data da morte de Zumbi dos Palmares", "É o dia em que a capoeira foi criada", "É o aniversário do baobá"], 0],
        ["O que era um quilombo?", ["Uma comunidade de pessoas que fugiram da escravidão", "Uma escola de samba", "Um tipo de árvore africana"], 0],
        ["Quem foi Dandara?", ["Uma guerreira que lutou ao lado de Zumbi", "A primeira professora do Brasil", "Uma cantora de samba"], 0],
        ["Qual destas palavras vem de línguas africanas?", ["Cafuné", "Abacaxi", "Pipoca"], 0],
        ["No Brasil, o racismo é…", ["Crime inafiançável e imprescritível", "Só falta de educação", "Permitido em brincadeiras"], 0],
        ["O baobá é símbolo de…", ["Memória e antepassados", "Carnaval", "Natal"], 0]
      ]
    }
  };
  P.desafios = DESAFIO;
  P.temDesafio = tema => !!DESAFIO[tema];

  /* ---------- 🔤 caça-palavras ---------- */
  function cacaPalavras(box, D, pronto) {
    const N = 10, palavras = embaralha(D.palavras).slice(0, 5).filter(w => w.length <= N), g = Array.from({ length: N }, () => Array(N).fill("")), pos = {};
    palavras.forEach(w => { for (let t = 0; t < 300; t++) { const hor = Math.random() < .5, r = Math.floor(Math.random() * (hor ? N : N - w.length + 1)), c = Math.floor(Math.random() * (hor ? N - w.length + 1 : N));
      const cel = [...w].map((_, i) => hor ? [r, c + i] : [r + i, c]); if (cel.every(([y, x], i) => !g[y][x] || g[y][x] === w[i])) { cel.forEach(([y, x], i) => { g[y][x] = w[i]; }); pos[w] = cel; return; } } });
    const L = "ABCDEFGHIJLMNOPRSTUVZ"; g.forEach(l => l.forEach((v, i) => { if (!v) l[i] = L[Math.floor(Math.random() * L.length)]; }));
    const lista = palavras.filter(w => pos[w]); let achou = new Set(), ini = null, erros = 0;
    box.innerHTML = `<p class="dz-inst">🔤 <b>Caça-palavras:</b> ache as palavras dos cartões. Toque na <b>primeira</b> e na <b>última</b> letra de cada palavra.</p>
      <div class="dz-caca"><div class="dz-grade" style="--n:${N}">${g.map((l, y) => l.map((v, x) => `<button type="button" class="dz-l" data-y="${y}" data-x="${x}">${v}</button>`).join("")).join("")}</div>
      <ul class="dz-pal">${lista.map(w => `<li data-w="${w}">${w}</li>`).join("")}</ul></div><p class="dz-msg" aria-live="polite"></p>`;
    const msg = t => { box.querySelector(".dz-msg").innerHTML = t; }, cel = (y, x) => box.querySelector(`.dz-l[data-y="${y}"][data-x="${x}"]`);
    box.querySelectorAll(".dz-l").forEach(b => b.onclick = () => {
      const y = +b.dataset.y, x = +b.dataset.x;
      if (!ini) { ini = [y, x]; b.classList.add("sel"); return; }
      const [y0, x0] = ini; cel(y0, x0).classList.remove("sel"); ini = null;
      const w = lista.find(w => !achou.has(w) && (() => { const p = pos[w], a = p[0], z = p[p.length - 1]; return (a[0] === y0 && a[1] === x0 && z[0] === y && z[1] === x) || (z[0] === y0 && z[1] === x0 && a[0] === y && a[1] === x); })());
      if (w) { achou.add(w); pos[w].forEach(([yy, xx]) => cel(yy, xx).classList.add("ok")); box.querySelector(`[data-w="${w}"]`).classList.add("ok"); msg(`✔ Achou <b>${w}</b>!`);
        if (achou.size === lista.length) pronto(); }
      else { erros++; msg(erros >= 3 ? "💡 Dica: as palavras estão na horizontal (→) ou na vertical (↓). A primeira letra que falta está piscando." : "Ainda não… tente de novo!");
        if (erros >= 3) { const w2 = lista.find(w => !achou.has(w)); if (w2) { const [yy, xx] = pos[w2][0]; cel(yy, xx).classList.add("dica"); } } }
    });
  }

  /* ---------- 🃏 jogo da memória (termo ↔ pista) ---------- */
  function memoria(box, D, pronto) {
    const pares = embaralha(D.pares).slice(0, 5), cartas = embaralha(pares.flatMap((p, i) => [{ i, t: p[0], k: "t" }, { i, t: p[1], k: "p" }]));
    let aberta = null, trava = false, feitos = 0, erros = 0;
    box.innerHTML = `<p class="dz-inst">🃏 <b>Jogo da memória:</b> vire duas cartas e junte cada palavra com a sua explicação.</p>
      <div class="dz-mem">${cartas.map((c, n) => `<button type="button" class="dz-c ${c.k}" data-n="${n}"><span class="fr">?</span><span class="vs">${esc(c.t)}</span></button>`).join("")}</div><p class="dz-msg" aria-live="polite"></p>`;
    const bs = [...box.querySelectorAll(".dz-c")], msg = t => { box.querySelector(".dz-msg").innerHTML = t; };
    bs.forEach(b => b.onclick = () => {
      if (trava || b.classList.contains("vira") || b.classList.contains("ok")) return;
      b.classList.add("vira"); const c = cartas[+b.dataset.n];
      if (!aberta) { aberta = b; return; }
      const a = aberta, ca = cartas[+a.dataset.n]; aberta = null;
      if (ca.i === c.i) { a.classList.add("ok"); b.classList.add("ok"); feitos++; msg("✔ Par certo!"); if (feitos === pares.length) setTimeout(pronto, 400); }
      else { erros++; trava = true; msg(erros === 6 ? "💡 Dica: vou mostrar todas as cartas por 3 segundos!" : "Não é par… tente de novo!");
        setTimeout(() => { a.classList.remove("vira"); b.classList.remove("vira"); trava = false;
          if (erros === 6) { bs.forEach(x => x.classList.add("vira")); trava = true; setTimeout(() => { bs.forEach(x => { if (!x.classList.contains("ok")) x.classList.remove("vira"); }); trava = false; }, 3000); } }, 900); }
    });
  }

  /* ---------- ❓ quiz de 3 perguntas ---------- */
  function quiz(box, D, pronto) {
    const qs = embaralha(D.quiz).slice(0, 3); let i = 0;
    const pinta = () => { const [p, ops, c] = qs[i], ord = embaralha(ops.map((o, k) => [o, k]));
      box.innerHTML = `<p class="dz-inst">❓ <b>Quiz:</b> pergunta ${i + 1} de ${qs.length}</p><h3 class="dz-perg">${esc(p)}</h3>
        <div class="dz-ops">${ord.map(([o, k]) => `<button type="button" class="btn btn-sec dz-op" data-k="${k}">${esc(o)}</button>`).join("")}</div><p class="dz-msg" aria-live="polite"></p>`;
      box.querySelectorAll(".dz-op").forEach(b => b.onclick = () => {
        if (+b.dataset.k === c) { b.classList.add("ok"); box.querySelector(".dz-msg").innerHTML = "✔ Isso mesmo!"; box.querySelectorAll(".dz-op").forEach(x => x.disabled = true);
          setTimeout(() => { i++; if (i < qs.length) pinta(); else pronto(); }, 900); }
        else { b.classList.add("errou"); b.disabled = true; box.querySelector(".dz-msg").innerHTML = "Não é essa… 💡 a resposta está nos cartões: toque em <b>📚 Rever os cartões</b>."; }
      }); };
    pinta();
  }

  const JOGOS = [["caca", cacaPalavras], ["memoria", memoria], ["quiz", quiz]];
  // monta o desafio dentro da janela das curiosidades; chama aoTerminar quando o aluno resolver
  P.desafioNaJanela = function (d, tema, aoTerminar) {
    const D = DESAFIO[tema]; if (!D) return false;
    const [nome, fn] = JOGOS[Math.floor(Math.random() * JOGOS.length)];
    const grade = d.querySelector(".cur-grade"), bts = d.querySelector(".cur-bts");
    const box = document.createElement("div"); box.className = "dz-box"; box.dataset.jogo = nome;
    const rever = document.createElement("button"); rever.type = "button"; rever.className = "btn btn-sec btn-peq dz-rever"; rever.textContent = "📚 Rever os cartões";
    grade.hidden = true; grade.after(box); box.before(rever); bts.hidden = true;
    const av = d.querySelector(".cur-aviso"); if (av) av.hidden = true; d.scrollTop = 0;
    d.querySelector(".cur-sup").textContent = "🎮 Desafio para entrar!";
    rever.onclick = () => { grade.hidden = !grade.hidden; rever.textContent = grade.hidden ? "📚 Rever os cartões" : "🎮 Voltar ao desafio"; box.hidden = !grade.hidden; };
    fn(box, D, () => {
      grade.hidden = true; box.hidden = false; rever.remove();
      box.innerHTML = `<div class="dz-fim"><p class="dz-festa">🎉</p><h3>Desafio concluído!</h3><p>Você leu, aprendeu e mandou bem. Agora é hora da aula!</p></div>`;
      if (P.podio && P.podio.confete) { const cf = document.createElement("div"); cf.className = "conf-tela"; d.appendChild(cf); P.podio.confete(cf, 0); setTimeout(() => cf.remove(), 6000); }
      if (P.sons && P.sons.pronto && P.sons.pronto()) P.sons.coroa();
      bts.hidden = false; aoTerminar();
    });
    return true;
  };
})();

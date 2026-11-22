/* 🎬 CENAS EM ROLAGEM DENTRO DAS MISSÕES (22/11/2026)
   Regra combinada: só onde o movimento É o conteúdo (um processo, uma viagem, uma montagem), no máximo uma por missão.
   No conteúdo: { "t": "cena", "id": "pacotes" } → o portal desenha <div class="cr-cena" data-cena-m="pacotes">.
   A cena "gruda" na tela e avança conforme o aluno rola; quem pede menos movimento no aparelho vê o resultado final e o texto. */
(function () {
  const lim = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const seg = (p, a, b) => ease(lim((p - a) / (b - a)));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NS = "http://www.w3.org/2000/svg";

  /* ---------- 📦 Pacotes: a foto viaja em pedaços (6º ano, 4º bimestre de 2027, Missão 1) ---------- */
  const FOTO = `<rect width="80" height="110" fill="#7dd3fc"/><circle cx="58" cy="26" r="13" fill="#fde047"/>
    <path d="M0 80 L24 48 L44 72 L60 54 L80 78 L80 110 L0 110Z" fill="#16a34a"/><path d="M0 92 Q40 80 80 94 L80 110 L0 110Z" fill="#15803d"/>
    <rect x="30" y="62" width="14" height="14" fill="#fff"/><path d="M28 63 L37 55 L46 63Z" fill="#dc2626"/>`;
  const CASA = [[0, 0], [40, 0], [0, 55], [40, 55]];             // posição de cada pedaço dentro da foto (pacote 1, 2, 3, 4)
  const FALAS = {
    completo: [[0, "📱 A foto está no celular: é a <b>origem</b>. Ela vai para o computador do amigo: o <b>destino</b>."],
      [.15, "✂️ O celular divide a foto em <b>pacotes</b>. Cada pacote leva etiquetas: destino, origem e <b>número de ordem</b>."],
      [.3, "🛣️ Os pacotes viajam por caminhos diferentes e <b>dividem a estrada</b> com os pacotes de outras pessoas."],
      [.5, "📭 Chegaram <b>fora de ordem</b> (3, 1, 4)… e o pacote 2 <b>se perdeu</b>!"],
      [.64, "🔁 O destino pede de novo <b>só o pacote 2</b>: ele é <b>reenviado</b>, não a foto inteira."],
      [.82, "🧩 Pelo número de ordem, o computador <b>remonta</b> a foto. Chegou inteirinha!"]],
    simples: [[0, "📱 A foto está no celular. Ela vai para o computador do amigo."],
      [.18, "✂️ A foto é dividida em <b>pacotes</b>. Cada pacote tem um <b>número</b>."],
      [.32, "🛣️ Os pacotes viajam pela internet e chegam <b>fora de ordem</b>."],
      [.8, "🧩 O número ajuda a <b>montar a foto de novo</b>!"]]
  };
  function pacotes(box, simples) {
    const PH = [55, 95], DS = [480, 95], ROTA_I = [140, 150], ROTA_F = [440, 150];
    const FILA = [[392, 262], [436, 262], [480, 262], [524, 262]];
    // cada pacote: caminho (0 = de cima, 1 = de baixo), saída, duração, lugar na fila de chegada
    const P = simples
      ? [{ r: 0, d: .32, du: .22, f: 1 }, { r: 1, d: .4, du: .26, f: 3 }, { r: 1, d: .3, du: .18, f: 0 }, { r: 0, d: .38, du: .2, f: 2 }]
      : [{ r: 0, d: .32, du: .22, f: 1 }, { r: 1, d: .36, du: .2, f: 3, perde: .47, volta: .66 }, { r: 1, d: .3, du: .18, f: 0 }, { r: 0, d: .4, du: .16, f: 2 }];
    box.innerHTML = `<div class="cr-palco"><p class="cr-tit">🎬 Veja acontecer: role a página devagar</p>
      <svg class="cr-svg" viewBox="0 0 600 330" role="img" aria-label="Animação: a foto sai do celular dividida em pacotes numerados, os pacotes viajam por caminhos diferentes, chegam fora de ordem e o computador do destino monta a foto de novo pela ordem dos números.">
        <path class="cr-rota" id="crr0" d="M140 150 C 240 40, 340 40, 440 150"/><path class="cr-rota" id="crr1" d="M140 150 C 240 270, 340 270, 440 150"/>
        <g class="cr-roteador"><circle cx="290" cy="68" r="9"/><circle cx="290" cy="232" r="9"/></g>
        <g class="cr-outros"><rect x="0" y="0" width="16" height="12" rx="3"/><rect x="0" y="0" width="16" height="12" rx="3"/></g>
        <g><rect x="40" y="70" width="110" height="170" rx="16" fill="#0f172a"/><rect x="${PH[0]}" y="${PH[1]}" width="80" height="110" fill="#1e293b"/><text x="95" y="262" text-anchor="middle" class="cr-rot">📱 origem</text></g>
        <g><rect x="462" y="78" width="116" height="146" rx="10" fill="#0f172a"/><rect x="${DS[0]}" y="${DS[1]}" width="80" height="110" fill="#1e293b"/>
          ${[0, 1, 2, 3].map(i => `<text x="${DS[0] + CASA[i][0] + 20}" y="${DS[1] + CASA[i][1] + 33}" text-anchor="middle" class="cr-vaga">${i + 1}</text>`).join("")}
          <rect x="505" y="224" width="30" height="16" fill="#334155"/><text x="520" y="66" text-anchor="middle" class="cr-rot">💻 destino</text></g>
        <g class="cr-pacs"></g>
        <g class="cr-perdeu" opacity="0"><text x="0" y="0" text-anchor="middle" font-size="26">❌</text></g>
        <g class="cr-ok" opacity="0"><circle cx="520" cy="150" r="26" fill="#16a34a"/><path d="M507 150 l9 9 l17 -19" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      </svg>
      <p class="cr-fala" aria-live="polite"></p>
      <ol class="cr-passos">${(simples ? FALAS.simples : FALAS.completo).map(f => `<li>${f[1]}</li>`).join("")}</ol></div>`;
    const svg = box.querySelector("svg"), rotas = [svg.querySelector("#crr0"), svg.querySelector("#crr1")], L = rotas.map(r => r.getTotalLength());
    const g = svg.querySelector(".cr-pacs"), pac = P.map((x, i) => {
      const el = document.createElementNS(NS, "g");
      el.innerHTML = `<svg width="40" height="55" viewBox="${CASA[i][0]} ${CASA[i][1]} 40 55" overflow="hidden">${FOTO}</svg>
        <rect class="cr-borda" width="40" height="55" fill="none"/><g class="cr-eti"><circle cx="34" cy="6" r="9"/><text x="34" y="10" text-anchor="middle">${i + 1}</text></g>`;
      g.appendChild(el); return el;
    });
    const perdeu = svg.querySelector(".cr-perdeu"), ok = svg.querySelector(".cr-ok"), fala = box.querySelector(".cr-fala"), outros = svg.querySelectorAll(".cr-outros rect");
    const falas = simples ? FALAS.simples : FALAS.completo;
    const naRota = (r, s) => { const q = rotas[r].getPointAtLength(L[r] * s); return [q.x - 20, q.y - 27]; };
    return p => {
      const sep = seg(p, .15, .27);                                   // os pedaços se separam e ganham o número
      P.forEach((x, i) => {
        const casa = [PH[0] + CASA[i][0] + (CASA[i][0] ? 1 : -1) * 8 * sep, PH[1] + CASA[i][1] + (CASA[i][1] ? 1 : -1) * 8 * sep];
        let pos = casa, vis = 1;
        const viagem = (d, du, r) => { const s = lim((p - d) / du); if (s <= 0) return null;
          if (s < .15) return [lerp(casa[0], ROTA_I[0] - 20, s / .15), lerp(casa[1], ROTA_I[1] - 27, s / .15)];
          if (s < .85) return naRota(r, (s - .15) / .7);
          const t = (s - .85) / .15; return [lerp(ROTA_F[0] - 20, FILA[x.f][0], t), lerp(ROTA_F[1] - 27, FILA[x.f][1], t)]; };
        if (x.perde && p >= x.perde && p < x.volta) {                  // o pacote 2 se perde no caminho
          const q = naRota(x.r, (lim((x.perde - x.d) / x.du) - .15) / .7); pos = q; vis = 1 - seg(p, x.perde, x.perde + .04);
          perdeu.setAttribute("transform", `translate(${q[0] + 20},${q[1] + 30})`); perdeu.setAttribute("opacity", 1 - seg(p, x.volta - .03, x.volta));
        } else if (x.perde && p >= x.volta) { pos = viagem(x.volta, .14, 0) || casa; perdeu.setAttribute("opacity", 0); }
        else { pos = viagem(x.d, x.du, x.r) || casa; if (x.perde && p < x.perde) perdeu.setAttribute("opacity", 0); }
        const m = seg(p, .82 + x.f * .025, .9 + x.f * .025);           // remontar pela ordem dos números
        if (m > 0) pos = [lerp(FILA[x.f][0], DS[0] + CASA[i][0], m), lerp(FILA[x.f][1], DS[1] + CASA[i][1], m)];
        pac[i].setAttribute("transform", `translate(${pos[0]},${pos[1]})`); pac[i].setAttribute("opacity", vis);
        pac[i].querySelector(".cr-eti").setAttribute("opacity", sep * (1 - seg(p, .93, .98)));
        pac[i].querySelector(".cr-borda").setAttribute("opacity", 1 - seg(p, .93, .98));
      });
      outros.forEach((o, k) => { const r = k, s = ((p * 3 + k * .5) % 1); const q = rotas[r].getPointAtLength(L[r] * s); o.setAttribute("transform", `translate(${q.x - 8},${q.y - 6})`); o.setAttribute("opacity", seg(p, .3, .36) * (1 - seg(p, .66, .72))); });
      ok.setAttribute("opacity", seg(p, .95, 1));
      let k = 0; falas.forEach((f, i) => { if (p >= f[0]) k = i; });
      if (fala.dataset.k !== String(k)) { fala.dataset.k = k; fala.innerHTML = falas[k][1]; }
    };
  }

  const CENAS = { pacotes: b => pacotes(b, false), "pacotes-simples": b => pacotes(b, true) };
  const vivas = [];
  function montar() {
    document.querySelectorAll(".cr-cena:not([data-ok])").forEach(box => {
      box.dataset.ok = "1"; const f = CENAS[box.dataset.cenaM]; if (!f) return;
      const up = f(box); vivas.push({ box, up });
      if (reduz) { box.classList.add("cr-parada"); up(1); }
    });
    for (let i = vivas.length - 1; i >= 0; i--) if (!vivas[i].box.isConnected) vivas.splice(i, 1);
    atualizar();
  }
  let pedido = false;
  function atualizar() {
    pedido = false; if (reduz) return; const vh = innerHeight;
    const tb = document.getElementById("topbar"); if (tb && vivas.length) document.documentElement.style.setProperty("--cr-top", (tb.offsetHeight + 8) + "px");   // a cena gruda logo abaixo da barra do portal
    vivas.forEach(({ box, up }) => { const r = box.getBoundingClientRect(); if (r.bottom < -vh || r.top > 2 * vh) return; up(lim(-r.top / Math.max(1, r.height - vh * .85))); });
  }
  addEventListener("scroll", () => { if (!pedido) { pedido = true; requestAnimationFrame(atualizar); } }, { passive: true });
  addEventListener("resize", atualizar);
  new MutationObserver(() => { if (document.querySelector(".cr-cena:not([data-ok])")) montar(); }).observe(document.documentElement, { childList: true, subtree: true });
  window.PORTAL = window.PORTAL || {}; window.PORTAL.cenasMissao = { montar };
})();

/* ============================================================
   🎵 MÚSICA AMBIENTE DO PORTAL — Prof. Welington Laignier (20/11/2026)
   Pedido do professor: a caixinha de som da sala desliga sozinha quando
   fica muito tempo sem som. Esta música ambiente, bem baixinha, mantém a
   caixinha "acordada" sem atrapalhar a aula.

   • Música ORIGINAL e ANIMADA, criada na hora pelo navegador (Web Audio):
     acordes alegres, baixo saltitante, chocalho e melodia que muda sozinha.
     Nenhum arquivo de áudio, nenhum direito autoral de terceiros.
   • Só toca no PAINEL DO PROFESSOR (inclui o placar ao vivo): em nenhum outro lugar.
   • Botão 🎵 no canto de baixo: liga/desliga e volume, com a marca
     "ambiente" (o volume padrão). Tudo fica memorizado neste computador.
   • Abaixa sozinha e volta depois: enquanto a roleta gira, na festa do
     sorteio e do pódio, enquanto um vídeo do YouTube toca no portal,
     com o vídeo aberto em outra aba e quando o professor clica dentro do vídeo.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const AMB = 22;                                   // posição "ambiente" do volume (0 a 100)
  const lerLS = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } };
  const gravarLS = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  let ligada = lerLS("portal:musica", "1") === "1", vol = +lerLS("portal:musica:vol", AMB);
  let ctx = null, mestre = null, abafo = null, filtro = null, eco = null, prox = 0, acorde = 0, iv = null, abafarAte = 0, tocando = false;
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);
  const ehProf = () => /^#\/painel/.test(location.hash);   // só no PAINEL DO PROFESSOR (pedido do professor): em nenhum outro lugar

  /* 🎶 versão ANIMADA (20/11/2026, o professor achou a 1ª muito triste): Dó maior, 112 batidas por minuto,
     acordes alegres (Dó – Sol – Lá menor – Fá), baixo saltitante, palminhas de chocalho, um "bumbo" leve e
     uma melodia que muda sozinha a cada compasso. Tudo baixinho no volume "ambiente". */
  const BPM = 112, BAT = 60 / BPM, COLC = 0.5 * BAT;          // batida e colcheia (em segundos)
  const ACORDES = [{ b: 36, n: [60, 64, 67] }, { b: 43, n: [59, 62, 67] }, { b: 45, n: [57, 60, 64] }, { b: 41, n: [57, 60, 65] }];
  const MELO = [72, 74, 76, 79, 81, 84];                       // pentatônica de Dó: sempre soa alegre
  let colc = 0, motivo = [];
  function montar() {
    if (ctx) return true;
    const c = P.sons && P.sons.ctx ? P.sons.ctx() : null; if (!c) return false; ctx = c;
    mestre = ctx.createGain(); mestre.gain.value = 0;
    abafo = ctx.createGain(); abafo.gain.value = 1;
    filtro = ctx.createBiquadFilter(); filtro.type = "lowpass"; filtro.frequency.value = 4200;
    eco = ctx.createDelay(1.5); eco.delayTime.value = BAT * 0.75; const fb = ctx.createGain(); fb.gain.value = 0.22; const ecoV = ctx.createGain(); ecoV.gain.value = 0.25;
    eco.connect(fb).connect(eco); eco.connect(ecoV).connect(filtro);
    filtro.connect(mestre).connect(abafo).connect(ctx.destination);
    return true;
  }
  const ganho = () => Math.pow(Math.max(0, Math.min(100, vol)) / 100, 2) * 0.9;
  function toque(m, t, d, v, tipo, comEco) {     // nota curta e "beliscada"
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = tipo || "triangle"; o.frequency.value = hz(m);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(filtro); if (comEco) g.connect(eco); o.start(t); o.stop(t + d + 0.05);
  }
  function chocalho(t, v) {
    const n = Math.floor(ctx.sampleRate * 0.05), bf = ctx.createBuffer(1, n, ctx.sampleRate), d = bf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = bf; f.type = "highpass"; f.frequency.value = 6000; g.gain.value = v;
    s.connect(f).connect(g).connect(filtro); s.start(t);
  }
  function bumbo(t, v) {
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine";
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.12);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18); o.connect(g).connect(filtro); o.start(t); o.stop(t + 0.2);
  }
  function novoMotivo() {   // 8 colcheias de melodia: umas notas, umas pausas, subindo e descendo pela escala alegre
    let i = Math.floor(Math.random() * 3); motivo = [];
    for (let k = 0; k < 8; k++) { if (Math.random() < 0.42) { motivo.push(null); continue; } i = Math.max(0, Math.min(MELO.length - 1, i + [-1, 1, 1, 2, -2][Math.floor(Math.random() * 5)])); motivo.push(MELO[i]); }
  }
  function agendar() {
    if (!ctx || !tocando) return;
    if (prox < ctx.currentTime) prox = ctx.currentTime + 0.1;
    while (prox < ctx.currentTime + 1.5) {
      const naBarra = colc % 8, barra = Math.floor(colc / 8), A = ACORDES[barra % 4], batida = naBarra % 2 === 0, t = prox;
      if (naBarra === 0 && (barra % 2 === 0 || !motivo.length)) novoMotivo();
      if (batida) { const b = Math.floor(naBarra / 2);                                   // baixo saltitante: tônica e oitava
        toque(A.b + (b % 2 ? 12 : 0), t, 0.28, 0.16, "triangle");
        if (b === 0 || b === 2) bumbo(t, 0.22);
        chocalho(t, 0.035);
      } else {
        A.n.forEach(m => toque(m, t, 0.16, 0.045, "square"));                          // acorde no contratempo (o "pulo" da música)
        chocalho(t, 0.06);
      }
      const nota = motivo[naBarra]; if (nota && barra % 8 < 6) toque(nota, t, 0.22, 0.06, "sine", true);   // melodia (descansa 2 compassos a cada 8)
      prox += COLC; colc++;
    }
  }
  /* ---------- quando abaixar: vídeo tocando, vídeo em outra aba, festa da roleta/pódio ---------- */
  const ytTocando = new Set();
  addEventListener("message", e => {
    if (!/youtube(-nocookie)?\.com$/.test((e.origin || "").replace(/^https?:\/\/(www\.)?/, ""))) return;
    let d = e.data; try { d = typeof d === "string" ? JSON.parse(d) : d; } catch (x) { return; }
    const st = d && (d.event === "onStateChange" ? d.info : d.info && d.info.playerState);
    if (st == null) return; const src = e.source;
    if (st === 1 || st === 3) ytTocando.add(src); else ytTocando.delete(src);
    aplicar();
  });
  // pede ao YouTube para avisar quando o vídeo toca/pausa (vale para os vídeos com enablejsapi=1)
  setInterval(() => { document.querySelectorAll('iframe[src*="youtube"]').forEach(f => { if (!/enablejsapi=1/.test(f.src) || !f.contentWindow) return;
    try { f.contentWindow.postMessage(JSON.stringify({ event: "listening", id: f.dataset.ytId || (f.dataset.ytId = Math.random().toString(36).slice(2)), channel: "widget" }), "*"); } catch (e) {} }); }, 2000);
  const videoAtivo = () => { const a = document.activeElement; return ytTocando.size > 0 || !!(a && a.tagName === "IFRAME" && /youtube/.test(a.src || "")) || document.hidden; };
  function aplicar() {
    if (!ctx || !mestre) return;
    const deveTocar = ligada && ehProf(), calar = !deveTocar || videoAtivo() || Date.now() < abafarAte;
    const agora = ctx.currentTime;
    mestre.gain.cancelScheduledValues(agora); mestre.gain.setTargetAtTime(deveTocar ? ganho() : 0, agora, 0.3);
    abafo.gain.cancelScheduledValues(agora); abafo.gain.setTargetAtTime(calar ? 0 : 1, agora, calar ? 0.12 : 0.9);
    if (deveTocar && !tocando) { tocando = true; prox = 0; agendar(); }
    if (!deveTocar && tocando) tocando = false;
    pintar();
  }
  function iniciar() {
    if (!montar()) return;
    if (ctx.state !== "running") ctx.resume().catch(() => {});
    clearInterval(iv); iv = setInterval(() => { agendar(); aplicar(); }, 250);
    aplicar();
  }
  // o navegador só deixa tocar som depois de um clique: o primeiro clique em qualquer lugar liga a música
  ["pointerdown", "keydown"].forEach(t => addEventListener(t, () => { if (ehProf()) iniciar(); }, { capture: true, passive: true }));
  document.addEventListener("visibilitychange", aplicar);
  addEventListener("hashchange", () => { aplicar(); pintar(); });
  addEventListener("focus", aplicar); addEventListener("blur", () => setTimeout(aplicar, 50));

  /* ---------- botão 🎵 (só no computador do professor) ---------- */
  let ui = null, aberto = false;
  function pintar() {
    if (!ehProf()) { if (ui) { ui.remove(); ui = null; } return; }
    if (!ui || !ui.isConnected) {
      ui = document.createElement("div"); ui.className = "mus-ui";
      ui.innerHTML = `<button type="button" class="mus-bt" title="Música ambiente (mantém a caixinha de som acordada)"></button>
        <div class="mus-pn" hidden><p class="mus-tit">🎵 Música ambiente</p><p class="mus-sub">Bem baixinha, só para a caixinha de som não desligar sozinha.</p>
          <button type="button" class="mus-liga"></button>
          <label class="mus-vol">Volume <input type="range" min="0" max="100" step="1" list="mus-marcas" aria-label="Volume da música ambiente"><output></output></label>
          <datalist id="mus-marcas"><option value="${AMB}" label="ambiente"></option></datalist>
          <div class="mus-regua" aria-hidden="true"><span style="left:${AMB}%">▲ ambiente</span></div>
          <button type="button" class="mus-amb">↺ Voltar ao volume ambiente</button>
          <p class="mus-pe">Ela abaixa sozinha durante vídeos, a roleta e as comemorações, e volta depois. Fica memorizado neste computador.</p></div>`;
      document.body.appendChild(ui);
      const pn = ui.querySelector(".mus-pn"), rg = ui.querySelector("input[type=range]");
      ui.querySelector(".mus-bt").onclick = () => { aberto = !aberto; pn.hidden = !aberto; iniciar(); };
      ui.querySelector(".mus-liga").onclick = () => { ligada = !ligada; gravarLS("portal:musica", ligada ? "1" : "0"); iniciar(); aplicar(); };
      rg.oninput = () => { vol = +rg.value; gravarLS("portal:musica:vol", String(vol)); if (!ligada) { ligada = true; gravarLS("portal:musica", "1"); } iniciar(); aplicar(); };
      ui.querySelector(".mus-amb").onclick = () => { vol = AMB; gravarLS("portal:musica:vol", String(vol)); iniciar(); aplicar(); };
      document.addEventListener("pointerdown", e => { if (aberto && ui && !ui.contains(e.target)) { aberto = false; pn.hidden = true; } }, true);
    }
    ui.querySelector(".mus-pn").hidden = !aberto;
    const tocandoAgora = ligada && ctx && ctx.state === "running";
    const htmlBt = !ligada ? "🔇 <small>música desligada</small>" : tocandoAgora ? (videoAtivo() || Date.now() < abafarAte ? "🎵 <small>pausa (vídeo/festa)</small>" : "🎵 <small>música ambiente</small>") : "🎵 <small>toque para ligar a música</small>";
    const bt = ui.querySelector(".mus-bt"); if (bt.dataset.h !== htmlBt) { bt.dataset.h = htmlBt; bt.innerHTML = htmlBt; }   // só troca se mudou (trocar no meio do clique faz o clique se perder)
    ui.classList.toggle("off", !ligada);
    ui.querySelector(".mus-liga").textContent = ligada ? "⏸ Desligar a música" : "▶ Ligar a música";
    const rg = ui.querySelector("input[type=range]"); if (document.activeElement !== rg) rg.value = vol;
    ui.querySelector("output").textContent = vol === AMB ? "ambiente" : vol + "%";
  }
  P.musica = {
    abafar(ms) { abafarAte = Math.max(abafarAte, Date.now() + (ms || 2000)); aplicar(); setTimeout(aplicar, (ms || 2000) + 60); },
    get ligada() { return ligada; }, AMB
  };
  setTimeout(pintar, 1500); setInterval(pintar, 3000);
})();

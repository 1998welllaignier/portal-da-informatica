/* 🔊 Efeitos sonoros do placar (só no computador do professor, que tem som).
   Tudo é gerado na hora pelo navegador (Web Audio): nenhum arquivo de áudio para baixar, não pesa o site.
   O navegador só deixa tocar som depois de um clique na página: por isso o botão 🔊 no placar. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  let ctx = null, ligado = true;
  try { ligado = localStorage.getItem("pp-som") !== "0"; } catch (e) {}
  const AC = window.AudioContext || window.webkitAudioContext;
  function c() { if (!AC) return null; if (!ctx) ctx = new AC(); return ctx; }
  const pronto = () => !!(ligado && ctx && ctx.state === "running");
  function destravar() { const x = c(); if (x && x.state !== "running") return x.resume().catch(() => {}); return Promise.resolve(); }
  function setLigado(v) { ligado = !!v; try { localStorage.setItem("pp-som", ligado ? "1" : "0"); } catch (e) {} if (ligado) destravar(); }

  // nota com envelope suave (t = segundos a partir de agora)
  function nota(freq, t, dur, vol, tipo) {
    const x = ctx, o = x.createOscillator(), g = x.createGain(), t0 = x.currentTime + t;
    o.type = tipo || "triangle"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.2, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(x.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function ruido(t, dur, vol, corte) {
    const x = ctx, n = Math.floor(x.sampleRate * dur), b = x.createBuffer(1, n, x.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = x.createBufferSource(), f = x.createBiquadFilter(), g = x.createGain(), t0 = x.currentTime + t;
    s.buffer = b; f.type = "bandpass"; f.frequency.value = corte || 1800; g.gain.value = vol || 0.15;
    s.connect(f).connect(g).connect(x.destination); s.start(t0);
  }
  const hz = m => 440 * Math.pow(2, (m - 69) / 12); // número MIDI → frequência
  const N = { C4: 261.6, E4: 329.6, G4: 392, C5: 523.3, E5: 659.3, G5: 784, C6: 1046.5, A4: 440, F4: 349.2 };

  // 🥁 rufar de tambor (suspense do pódio)
  function rufar(t, dur) { for (let s = 0; s < dur; s += 0.055) ruido(t + s, 0.06, 0.05 + 0.1 * (s / dur), 900); }
  // 🔔 ding (3º e 2º lugar aparecendo)
  function ding(t, alto) { const b = alto ? 76 : 72; [b, b + 7].forEach((m, i) => nota(hz(m), t + i * 0.07, 0.25, 0.1, "square")); }
  // 🎺 tcharam! no estilo videogame antigo (8 bits: ondas quadradas). Melodia própria, criada para o portal.
  function tcharam(t) {
    const passo = 0.075, frases = [[55, 59, 62, 67], [64, 67, 72], [65, 69, 74]];
    let k = 0; frases.forEach((fr, j) => { fr.forEach(m => { nota(hz(m), t + k * passo, passo * 1.6, 0.11, "square"); k++; }); k += j < 2 ? 1 : 0; });
    const fim = t + k * passo + 0.05;
    [67, 71, 74, 79].forEach(m => nota(hz(m), fim, 1.3, 0.085, "square"));   // acorde final (sol maior)
    [43, 55].forEach(m => nota(hz(m), fim, 1.3, 0.12, "triangle"));          // baixo
    ruido(fim, 0.12, 0.18, 4000);                                             // "prato" de 8 bits
  }
  // 🎉 estalinhos do confete
  function estalos(t, dur) { for (let i = 0; i < 26; i++) ruido(t + Math.random() * dur, 0.04, 0.12, 2500 + Math.random() * 2500); }

  const S = {
    get ligado() { return ligado; }, pronto, destravar, setLigado,
    // pódio: 3º (0 s) → 2º (1,4 s) → 1º (2,8 s) → confete (3 s)
    podio() { if (!pronto()) return; rufar(0, 2.75); ding(0); ding(1.4, true); tcharam(2.8); estalos(3.1, 2.5); },
    // 👑 alguém novo pegou a coroa
    coroa() { if (!pronto()) return; [72, 76, 79, 84].forEach((m, i) => nota(hz(m), i * 0.06, 0.18, 0.09, "square")); },
    // 🤫 placar congelou (últimos 5 min)
    congelou() { if (!pronto()) return; [69, 68, 67, 66].forEach((m, i) => nota(hz(m), i * 0.22, 0.2, 0.09, "square")); },
    teste() { if (!pronto()) return; tcharam(0); estalos(0.4, 1.2); }
  };
  P.sons = S;
})();

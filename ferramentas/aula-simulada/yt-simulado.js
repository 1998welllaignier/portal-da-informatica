/* 🧪 YouTube de mentira (turma simulada, 23/11/2026): entra no lugar de https://www.youtube.com/iframe_api.
   Cada player vira um quadro que mostra o tempo do "vídeo" (2 minutos), se está tocando e se está com som,
   com a mesma API que o portal usa (playVideo, pauseVideo, seekTo, mute, unMute, getCurrentTime…). */
(function () {
  const DUR = 120, todos = window.__ytPlayers = [];
  function Player(alvo, op) {
    const el = typeof alvo === "string" ? document.getElementById(alvo) : alvo, me = this;
    const box = document.createElement("div"); box.className = "yt-fake"; box.id = el && el.id || "";
    box.style.cssText = "width:100%;height:100%;background:#0f172a;color:#fff;display:grid;place-items:center;font:700 28px system-ui;position:relative";
    if (el) el.replaceWith(box);
    let st = -1, base = 0, desde = 0, mudo = !!(op.playerVars && op.playerVars.mute), vol = 100;
    const t = () => Math.min(DUR, st === 1 ? base + (performance.now() - desde) / 1000 : base);
    const muda = s => { if (s === st) return; base = t(); desde = performance.now(); st = s; pinta(); op.events && op.events.onStateChange && setTimeout(() => op.events.onStateChange({ data: s, target: me })); };
    const pinta = () => { box.innerHTML = `<div style="text-align:center">🎬 VÍDEO SIMULADO<br><span class="yt-t">${t().toFixed(1)} s</span><br><small>${["⏹ fim", "▶ tocando", "⏸ pausado", "⏳"][st] || "⏹ parado"} · ${mudo ? "🔇 sem som" : "🔊 com som " + vol + "%"}</small></div>`; };
    Object.assign(this, { playVideo: () => muda(1), pauseVideo: () => muda(2), stopVideo: () => { base = 0; muda(5); }, seekTo: s => { base = Math.max(0, Math.min(DUR, s)); desde = performance.now(); pinta(); },
      getCurrentTime: () => t(), getDuration: () => DUR, getPlayerState: () => st, mute: () => { mudo = true; pinta(); }, unMute: () => { mudo = false; pinta(); }, isMuted: () => mudo,
      setVolume: v => { vol = v; pinta(); }, getVolume: () => vol, destroy: () => { box.remove(); todos.splice(todos.indexOf(me), 1); }, getIframe: () => box,
      loadVideoById: o => { base = (o && o.startSeconds) || 0; muda(1); }, cueVideoById: o => { base = (o && o.startSeconds) || 0; muda(5); }, _box: box, videoId: op.videoId });
    setInterval(() => { if (st === 1) { if (t() >= DUR) { base = DUR; muda(0); } else box.querySelector(".yt-t") && (box.querySelector(".yt-t").textContent = t().toFixed(1) + " s"); } }, 200);
    todos.push(this); pinta();
    const pv = op.playerVars || {}; if (pv.start) base = pv.start;
    setTimeout(() => { op.events && op.events.onReady && op.events.onReady({ target: me }); if (pv.autoplay) me.playVideo(); }, 250);
  }
  window.YT = { Player, PlayerState: { ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 } };
  setTimeout(() => window.onYouTubeIframeAPIReady && window.onYouTubeIframeAPIReady(), 50);
})();

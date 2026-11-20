/* 💻 JOGOS DE INFORMÁTICA da Sala de espera (aprende brincando). Ver js/jogos-base.js. Professor Welington Laignier. */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {}, J = P.jogosEspera; if (!J) return;
  const R = n => Math.floor(Math.random() * n);
  const emb = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = R(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const PALAVRAS = ["MOUSE", "TECLADO", "MONITOR", "ARQUIVO", "PASTA", "JANELA", "INTERNET", "SENHA", "PIXEL", "BYTE", "CURSOR", "NAVEGADOR",
    "SITE", "PROGRAMA", "IMPRESSORA", "ROTEADOR", "CABO", "REDE", "DADOS", "NUVEM", "TELA", "CLIQUE", "LINK", "FOTO", "ALGORITMO", "GRAFO",
    "BLOCOS", "SALVAR", "COPIAR", "COLAR", "ABRIR", "FECHAR", "DIGITAR", "WEBCAM", "SOFTWARE", "HARDWARE", "MEMORIA", "PROCESSADOR", "BIT", "WIFI", "APP", "EMAIL", "ICONE", "PENDRIVE"];
  // placar simples dentro dos jogos DOM
  const hud = (area, txt) => { let h = area.querySelector(".jg-hud"); if (!h) { h = document.createElement("div"); h.className = "jg-hud"; area.prepend(h); } h.innerHTML = txt; };

  /* ---------------- os 4 primeiros (já existiam) ---------------- */
  J.registrar({ id: "alvo", nome: "Acerte o alvo", ic: "🎯", cat: "acao", tipo: "dom", controle: "🖱️ Use o mouse.",
    como: ["🎯 Um alvo aparece na tela.", "🖱️ Clique bem em cima dele.", "⏱️ Seja rápido: ele muda de lugar sozinho!", "🏁 Você tem 30 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); const ps = [[80, 60], [260, 140], [170, 90], [300, 50]], k = Math.floor(t), [x, y] = ps[k % 4], [x0, y0] = ps[(k + 3) % 4], f = t % 1;
      const ax = D.lerp(x0, x, f * 2), ay = D.lerp(y0, y, f * 2); alvo(ctx, x, y, 26); D.mao(ctx, ax, ay, f > .5 && f < .75); },
    criar(api) { const a = api.area; a.classList.add("jg-alvo-area"); let pts = 0, fim = Date.now() + 30000, tm, vivo = true;
      const b = document.createElement("button"); b.type = "button"; b.className = "es-alvo"; b.setAttribute("aria-label", "alvo"); a.appendChild(b);
      const mover = () => { b.style.left = R(Math.max(1, a.clientWidth - 70)) + "px"; b.style.top = 40 + R(Math.max(1, a.clientHeight - 110)) + "px"; clearTimeout(tm); tm = setTimeout(mover, Math.max(900, 2200 - pts * 40)); };
      b.onclick = () => { pts++; b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); if (pts % 3 === 0) api.ponto(b); mover(); };
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🎯 ${pts} &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearTimeout(tm); clearInterval(iv); b.remove(); api.fim(pts); } }, 200);
      requestAnimationFrame(mover); return () => { vivo = false; clearTimeout(tm); clearInterval(iv); }; } });
  function alvo(ctx, x, y, r) { [["#dc2626", 1], ["#fff", .74], ["#dc2626", .5], ["#fff", .3], ["#dc2626", .14]].forEach(([c, k]) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, r * k, 0, 7); ctx.fill(); }); }
  J.alvoDesenho = alvo;

  J.registrar({ id: "palavra", nome: "Digite a palavra", ic: "⌨️", cat: "info", tipo: "dom", controle: "⌨️ Use o teclado.",
    como: ["👀 Uma palavra de informática aparece.", "⌨️ Digite a palavra igualzinha.", "✅ Acertou? Vem outra!", "🏁 Você tem 45 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); D.texto(ctx, W / 2, 60, "MOUSE", "#1e3a8a", 40); const n = Math.min(5, Math.floor(t * 1.6)); ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 3; D.rr(ctx, 90, 105, 180, 46, 10); ctx.stroke();
      D.texto(ctx, W / 2, 128, "MOUSE".slice(0, n), n === 5 ? "#16a34a" : "#0f172a", 28); D.tecla(ctx, 160, 165, "MOUSE"[Math.min(4, n)] || "", Math.floor(t * 3.2) % 2 === 0); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 45000, vivo = true; const rec = [];
      a.insertAdjacentHTML("beforeend", `<p class="es-palavra"></p><input type="text" class="es-campo" autocomplete="off" spellcheck="false" aria-label="Digite a palavra"><p class="es-msg" aria-live="polite"></p>`);
      const pe = a.querySelector(".es-palavra"), inp = a.querySelector("input"); let p = "";
      const nova = () => { do { p = PALAVRAS[R(PALAVRAS.length)]; } while (rec.includes(p)); rec.push(p); if (rec.length > 15) rec.shift(); pe.textContent = p; inp.value = ""; inp.classList.remove("ok"); };
      inp.oninput = () => { if (inp.value.trim().toUpperCase() === p) { pts++; inp.classList.add("ok"); if (pts % 2 === 0) api.ponto(inp); setTimeout(nova, 250); } };
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `⌨️ ${pts} palavras &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); inp.disabled = true; api.fim(pts * 10); } }, 200);
      nova(); setTimeout(() => inp.focus(), 60); return () => { vivo = false; clearInterval(iv); }; } });

  const ARQS = [["foto-da-praia.jpg", "🖼️", "img"], ["selfie.png", "🖼️", "img"], ["desenho.jpg", "🖼️", "img"], ["meme.png", "🖼️", "img"], ["figurinha.webp", "🖼️", "img"],
    ["musica-favorita.mp3", "🎵", "mus"], ["forro.mp3", "🎵", "mus"], ["toque-do-celular.mp3", "🎵", "mus"], ["audio-do-zap.ogg", "🎵", "mus"],
    ["trabalho-de-escola.docx", "📄", "doc"], ["redacao.docx", "📄", "doc"], ["boletim.pdf", "📄", "doc"], ["receita-de-bolo.pdf", "📄", "doc"], ["lista.txt", "📄", "doc"],
    ["video-da-festa.mp4", "🎬", "vid"], ["gol-do-jogo.mp4", "🎬", "vid"], ["tutorial.mp4", "🎬", "vid"], ["clipe.mp4", "🎬", "vid"]];
  const PASTAS = [["img", "🖼️ Imagens"], ["mus", "🎵 Músicas"], ["doc", "📄 Documentos"], ["vid", "🎬 Vídeos"]];
  J.registrar({ id: "arquivo", nome: "Arquivo na pasta certa", ic: "🗂️", cat: "info", tipo: "dom", controle: "🖱️ Arraste com o mouse (ou clique no arquivo e depois na pasta).",
    como: ["📄 Um arquivo aparece com o nome e o final (.jpg, .mp3, .docx, .mp4).", "👀 Olhe o FINAL do nome: ele diz o tipo do arquivo.", "🖱️ Arraste o arquivo até a pasta certa.", "🏁 Você tem 45 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#fefce8"); const k = Math.min(1, Math.max(0, (t - .6) / 1.8)), x = D.lerp(180, 270, k), y = D.lerp(55, 165, k);
      [["🖼️", 90], ["🎵", 180], ["🎬", 270]].forEach(([e, px]) => { D.emoji(ctx, px, 165, "📁", 44); D.emoji(ctx, px + 14, 178, e, 18); });
      ctx.fillStyle = "#fff"; ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 3; D.rr(ctx, x - 70, y - 18, 140, 36, 8); ctx.fill(); ctx.stroke(); D.texto(ctx, x, y, "🎬 festa.mp4", "#0f172a", 15); D.mao(ctx, x + 30, y + 6, t > .5 && t < 2.6); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 45000, vivo = true; const rec = [];
      const rodada = () => { let x; do { x = ARQS[R(ARQS.length)]; } while (rec.includes(x)); rec.push(x); if (rec.length > 8) rec.shift();
        const [nome, ic, cert] = x, ext = nome.slice(nome.lastIndexOf("."));
        a.querySelectorAll(".es-arq,.es-pastas").forEach(e => e.remove());
        a.insertAdjacentHTML("beforeend", `<div class="es-arq" tabindex="0" role="button"><span class="es-arq-ic">${ic}</span><span>${esc(nome.slice(0, -ext.length))}<b>${esc(ext)}</b></span></div>
          <div class="es-pastas">${emb(PASTAS).map(([k, r]) => `<button type="button" class="es-pasta" data-p="${k}"><span class="es-pasta-ic">📁</span>${r}</button>`).join("")}</div>`);
        const arq = a.querySelector(".es-arq"); let pego = false;
        const soltar = alvo => { const b = alvo && alvo.closest && alvo.closest(".es-pasta"); if (!b || !vivo) return;
          if (b.dataset.p === cert) { b.classList.add("ok"); arq.classList.add("dentro"); pts++; if (pts % 2 === 0) api.ponto(b); setTimeout(() => vivo && rodada(), 400); }
          else { b.classList.add("erro"); setTimeout(() => b.classList.remove("erro"), 450); P.toast && P.toast(`Não é aí: arquivo ${ext} vai em outra pasta.`); } };
        arq.onclick = () => { pego = !pego; arq.classList.toggle("pego", pego); };
        a.querySelectorAll(".es-pasta").forEach(b => b.onclick = () => { if (pego) { pego = false; arq.classList.remove("pego"); soltar(b); } });
        arq.onpointerdown = e => { if (e.button) return; e.preventDefault(); const r = arq.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top; let andou = false;
          const mv = ev => { if (!andou && Math.hypot(ev.clientX - e.clientX, ev.clientY - e.clientY) < 6) return; andou = true; arq.classList.add("arrastando"); arq.style.left = (ev.clientX - dx) + "px"; arq.style.top = (ev.clientY - dy) + "px"; arq.style.width = r.width + "px"; };
          const up = ev => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); if (!andou) return;
            arq.style.visibility = "hidden"; const sob = document.elementFromPoint(ev.clientX, ev.clientY); arq.style.visibility = ""; arq.classList.remove("arrastando"); arq.style.left = arq.style.top = arq.style.width = ""; soltar(sob); };
          addEventListener("pointermove", mv); addEventListener("pointerup", up); }; };
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🗂️ ${pts} arquivos guardados &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      rodada(); return () => { vivo = false; clearInterval(iv); }; } });

  const TECLAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").map(c => [c, c]).concat([["Enter", "Enter ↵"], [" ", "Espaço"], ["Backspace", "Backspace ⟵"]]);
  J.registrar({ id: "tecla", nome: "Ache a tecla", ic: "🔤", cat: "info", tipo: "dom", controle: "⌨️ Use o teclado.",
    como: ["🔤 Uma tecla aparece na tela.", "⌨️ Procure essa tecla no teclado e aperte.", "✅ Acertou? Vem outra!", "🏁 Você tem 40 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); const L = ["K", "7", "Enter"], k = Math.floor(t / 1.33) % 3, ap = (t % 1.33) > .8; D.tecla(ctx, W / 2 - 40, 40, L[k], false, 80);
      "QWERTYUIOP".split("").forEach((c, i) => D.tecla(ctx, 20 + i * 32, 130, c, false, 28)); D.tecla(ctx, 20 + 7 * 32, 168, "K", ap && k === 0, 28); D.mao(ctx, 250, 185, ap); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 40000, vivo = true, k = null; const rec = [];
      a.insertAdjacentHTML("beforeend", `<div class="es-tecla"></div><p class="es-msg" aria-live="polite">Aperte essa tecla no teclado do computador.</p>`);
      const el = a.querySelector(".es-tecla"), msg = a.querySelector(".es-msg");
      const nova = () => { let x; do { x = TECLAS[R(TECLAS.length)]; } while (rec.includes(x)); rec.push(x); if (rec.length > 15) rec.shift(); k = x[0]; el.textContent = x[1]; el.className = "es-tecla" + (x[1].length > 2 ? " larga" : ""); };
      const ouvir = e => { if (!a.isConnected) return removeEventListener("keydown", ouvir); if (!vivo) return; if (e.key === " " || e.key === "Backspace") e.preventDefault();
        const ok = k.length === 1 && k !== " " ? (e.key || "").toUpperCase() === k : e.key === k;
        if (ok) { pts++; el.classList.add("ok"); if (pts % 2 === 0) api.ponto(el); setTimeout(nova, 250); }
        else if (e.key && e.key.length <= 9 && !["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(e.key)) msg.textContent = `Você apertou “${e.key === " " ? "Espaço" : e.key}”. Procure a tecla da tela!`; };
      addEventListener("keydown", ouvir);
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🔤 ${pts} teclas &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); removeEventListener("keydown", ouvir); }; } });

  /* ---------------- ⌨️ Chuva de Letras ---------------- */
  J.registrar({ id: "chuva-letras", nome: "Chuva de Letras", ic: "🌧️", cat: "info", controle: "⌨️ Use o teclado e aperte Enter.",
    como: ["🌧️ Palavras caem do céu.", "⌨️ Digite a palavra e aperte Enter antes que ela chegue ao chão.", "💧 Se 3 palavras caírem no chão, o jogo acaba.", "⚡ Quanto mais você acerta, mais rápido chove!"],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#bfdbfe", "#eff6ff"); const y = 20 + t * 35; D.texto(ctx, 120, y, "REDE", "#1e3a8a", 22); D.texto(ctx, 260, 30 + t * 20, "BYTE", "#1e3a8a", 22);
      ctx.fillStyle = "#16a34a"; ctx.fillRect(0, H - 14, W, 14); const n = Math.min(4, Math.floor(t * 1.5)); ctx.fillStyle = "#fff"; D.rr(ctx, 110, H - 64, 140, 36, 8); ctx.fill(); D.texto(ctx, 180, H - 46, "REDE".slice(0, n) + (n < 4 ? "_" : " ↵"), "#0f172a", 18); },
    criar(api) { const { W, H } = api; let pal = [], t = 0, prox = 0, vidas = 3, pts = 0, vel = 38, digit = "", fim = false, flash = [];
      return {
        update(dt) { if (fim) return; t += dt; prox -= dt; if (prox <= 0) { prox = Math.max(1.1, 2.6 - pts * 0.05); const w = PALAVRAS[R(PALAVRAS.length)]; pal.push({ w, x: 80 + R(W - 160), y: -10 }); }
          pal.forEach(p => p.y += (vel + pts * 1.5) * dt); const chao = pal.filter(p => p.y > H - 70); if (chao.length) { vidas -= chao.length; pal = pal.filter(p => p.y <= H - 70); if (vidas <= 0) { fim = true; api.fim(pts * 10); } }
          flash = flash.filter(f => (f.t -= dt) > 0); },
        draw(c) { const D = api.D; D.fundo(c, W, H, "#bfdbfe", "#eff6ff"); c.fillStyle = "#15803d"; c.fillRect(0, H - 60, W, 60);
          pal.forEach(p => { const ok = digit && p.w.startsWith(digit); c.fillStyle = "#fff"; D.rr(c, p.x - p.w.length * 9 - 10, p.y - 18, p.w.length * 18 + 20, 36, 10); c.fill(); D.texto(c, p.x, p.y, p.w, ok ? "#16a34a" : "#1e3a8a", 24); D.emoji(c, p.x, p.y - 30, "💧", 18); });
          flash.forEach(f => D.texto(c, f.x, f.y - (1 - f.t) * 40, "✔ +", "#16a34a", 26));
          c.fillStyle = "#fff"; D.rr(c, W / 2 - 150, H - 50, 300, 40, 10); c.fill(); D.texto(c, W / 2, H - 30, (digit || "") + "▌", "#0f172a", 24);
          D.texto(c, 20, 24, "❤️".repeat(Math.max(0, vidas)), "#dc2626", 20, "left"); D.texto(c, W - 20, 24, `⭐ ${pts}`, "#0f172a", 22, "right"); },
        tecla(k, desce) { if (!desce || fim) return false; if (k === "Backspace") { digit = digit.slice(0, -1); return; }
          if (k === "Enter") { const i = pal.findIndex(p => p.w === digit); if (i >= 0) { flash.push({ x: pal[i].x, y: pal[i].y, t: 1 }); pal.splice(i, 1); pts++; if (pts % 2 === 0) api.ponto(); } digit = ""; return; }
          if (/^[a-zçA-ZÇ]$/.test(k) && digit.length < 14) { digit += k.toUpperCase(); const i = pal.findIndex(p => p.w === digit); if (i >= 0) { flash.push({ x: pal[i].x, y: pal[i].y, t: 1 }); pal.splice(i, 1); pts++; if (pts % 2 === 0) api.ponto(); digit = ""; } } }
      }; } });

  /* ---------------- ⚡ Atalho Relâmpago (só atalhos seguros, que o navegador deixa usar) ---------------- */
  const ATALHOS = [["c", "Copiar"], ["v", "Colar"], ["x", "Recortar"], ["z", "Desfazer"], ["a", "Selecionar tudo"], ["s", "Salvar"], ["b", "Negrito"], ["i", "Itálico"], ["f", "Procurar"]];
  J.registrar({ id: "atalho-relampago", nome: "Atalho Relâmpago", ic: "⚡", cat: "info", tipo: "dom", controle: "⌨️ Segure a tecla Ctrl e aperte a letra.",
    como: ["⚡ Aparece uma ação, como “Copiar”.", "⌨️ Segure a tecla Ctrl e aperte a letra do atalho (Ctrl + C copia).", "💡 No começo, a dica mostra a letra. Depois, é com você!", "🏁 Você tem 45 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#fef3c7"); D.texto(ctx, W / 2, 45, "Copiar", "#92400e", 30); const ap = t % 2 > 1; D.tecla(ctx, 100, 110, "Ctrl", t % 2 > .5, 70); D.texto(ctx, 190, 130, "+", "#0f172a", 26); D.tecla(ctx, 215, 110, "C", ap, 50); D.mao(ctx, 140, 150, t % 2 > .5); },
    criar(api) { const a = api.area; let pts = 0, seq = 0, fim = Date.now() + 45000, vivo = true, cur = null; const rec = [];
      a.insertAdjacentHTML("beforeend", `<p class="jg-acao"></p><p class="jg-dica"></p><p class="es-msg" aria-live="polite"></p>`);
      const ac = a.querySelector(".jg-acao"), di = a.querySelector(".jg-dica"), msg = a.querySelector(".es-msg");
      const nova = () => { let x; do { x = ATALHOS[R(ATALHOS.length)]; } while (rec.includes(x)); rec.push(x); if (rec.length > 4) rec.shift(); cur = x; ac.textContent = x[1];
        di.innerHTML = pts < 6 ? `<kbd>Ctrl</kbd> + <kbd>${x[0].toUpperCase()}</kbd>` : "💡 Sem dica agora: lembra qual é?"; msg.textContent = ""; };
      const K = e => { if (!a.isConnected) return removeEventListener("keydown", K, true); if (!vivo || !e.ctrlKey) return; const k = (e.key || "").toLowerCase(); if (k === "control") return;
        e.preventDefault(); e.stopPropagation();
        if (k === cur[0]) { pts++; seq++; ac.classList.add("ok"); setTimeout(() => ac.classList.remove("ok"), 250); if (pts % 2 === 0) api.ponto(ac); nova(); }
        else { seq = 0; msg.textContent = `Ctrl + ${k.toUpperCase()} não é “${cur[1]}”. Tente de novo!`; } };
      addEventListener("keydown", K, true);
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `⚡ ${pts} atalhos ${seq >= 3 ? `· 🔥 ${seq} seguidos` : ""} &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); removeEventListener("keydown", K, true); }; } });

  /* ---------------- 🧩 Monte o computador (classificar as peças) ---------------- */
  const PECAS = [["⌨️", "Teclado", "e"], ["🖱️", "Mouse", "e"], ["🎤", "Microfone", "e"], ["📷", "Webcam", "e"], ["🖨️", "Scanner", "e"],
    ["🖥️", "Monitor", "s"], ["🖨️", "Impressora", "s"], ["🔊", "Caixa de som", "s"], ["🎧", "Fone de ouvido", "s"], ["📽️", "Projetor", "s"],
    ["🧠", "Processador", "p"], ["💽", "HD", "a"], ["💾", "Pen drive", "a"], ["🗃️", "SSD", "a"], ["🪪", "Cartão de memória", "a"]];
  const CAIXAS = [["e", "⬅️ Entrada", "manda informação para o computador"], ["p", "⚙️ Processamento", "faz as contas"], ["s", "➡️ Saída", "mostra o resultado"], ["a", "📦 Armazenamento", "guarda os arquivos"]];
  J.registrar({ id: "monte-pc", nome: "Peça no lugar certo", ic: "🧩", cat: "info", tipo: "dom", controle: "🖱️ Clique na peça e depois na caixa certa.",
    como: ["🧩 Aparece uma peça do computador.", "🤔 Ela manda informação (entrada), mostra (saída), faz as contas (processamento) ou guarda (armazenamento)?", "🖱️ Clique na caixa certa.", "🏁 Você tem 50 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); D.emoji(ctx, W / 2, 45, "🖱️", 40); D.texto(ctx, W / 2, 80, "Mouse", "#0f172a", 16);
      [["⬅️ Entrada", 70], ["➡️ Saída", 180], ["📦 Guarda", 290]].forEach(([r, x], i) => { ctx.fillStyle = i === 0 && t > 2 ? "#dcfce7" : "#fff"; ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2; D.rr(ctx, x - 52, 140, 104, 44, 8); ctx.fill(); ctx.stroke(); D.texto(ctx, x, 162, r, "#0f172a", 13); });
      D.mao(ctx, D.lerp(W / 2, 70, (t - .8) / 1.2), D.lerp(60, 165, (t - .8) / 1.2), t > 1.9 && t < 2.3); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 50000, vivo = true; const rec = [];
      a.insertAdjacentHTML("beforeend", `<div class="jg-peca"></div><div class="jg-caixas">${CAIXAS.map(([k, r, d]) => `<button type="button" class="jg-caixa" data-k="${k}"><b>${r}</b><small>${d}</small></button>`).join("")}</div><p class="es-msg" aria-live="polite"></p>`);
      const pe = a.querySelector(".jg-peca"), msg = a.querySelector(".es-msg"); let cur;
      const nova = () => { let x; do { x = PECAS[R(PECAS.length)]; } while (rec.includes(x)); rec.push(x); if (rec.length > 6) rec.shift(); cur = x; pe.innerHTML = `<span>${x[0]}</span><b>${esc(x[1])}</b>`; };
      a.querySelectorAll(".jg-caixa").forEach(b => b.onclick = () => { if (!vivo) return;
        if (b.dataset.k === cur[2]) { pts++; b.classList.add("ok"); setTimeout(() => b.classList.remove("ok"), 300); msg.textContent = "✅ Isso!"; if (pts % 2 === 0) api.ponto(b); nova(); }
        else { b.classList.add("erro"); setTimeout(() => b.classList.remove("erro"), 400); msg.textContent = `🤔 Pense: o ${cur[1].toLowerCase()} ${({ e: "manda informação para dentro", s: "mostra ou toca o resultado", p: "faz as contas", a: "guarda os arquivos" })[cur[2]]}…`; } });
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🧩 ${pts} peças &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); }; } });

  /* ---------------- 🔐 Senha forte ou fraca? ---------------- */
  const FRACAS = ["123456", "12345678", "senha", "senha123", "abc123", "qwerty", "111111", "000000", "flamengo", "joao2012", "maria123", "minhasenha", "102030", "amor123", "bola", "gato", "curionopolis", "01012013", "aaaaaa", "brasil"];
  const PED = ["Gato", "Lua", "Rio", "Sol", "Bola", "Pipa", "Onda", "Nuvem", "Tatu", "Arara", "Caju", "Ipe"], SIMB = "!#$%&*@?";
  const forte = () => { const a = PED[R(PED.length)], b = PED[R(PED.length)].toLowerCase(); return a + SIMB[R(SIMB.length)] + b + (10 + R(89)) + SIMB[R(SIMB.length)]; };
  J.registrar({ id: "senha-forte", nome: "Senha forte ou fraca?", ic: "🔐", cat: "info", tipo: "dom", controle: "🖱️ Clique em 💪 Forte ou 😬 Fraca.",
    como: ["🔐 Aparece uma senha.", "💪 Forte: longa (10 ou mais), com letras maiúsculas e minúsculas, números e símbolos.", "😬 Fraca: curta, só números, nome ou palavra comum.", "🖱️ Clique na resposta. 🏁 50 segundos!"],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#ede9fe"); const s = t < 2 ? "123456" : "Lua#pipa47!"; ctx.fillStyle = "#fff"; D.rr(ctx, 80, 30, 200, 50, 10); ctx.fill(); D.texto(ctx, 180, 55, s, "#0f172a", 22);
      [["💪 Forte", 110], ["😬 Fraca", 250]].forEach(([r, x]) => { ctx.fillStyle = "#fff"; ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2; D.rr(ctx, x - 55, 130, 110, 44, 10); ctx.fill(); ctx.stroke(); D.texto(ctx, x, 152, r, "#0f172a", 16); });
      D.mao(ctx, t < 2 ? 250 : 110, 158, (t % 2) > 1.2 && (t % 2) < 1.6); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 50000, vivo = true, cur;
      a.insertAdjacentHTML("beforeend", `<p class="jg-senha"></p><div class="row-btns jg-2bt"><button type="button" class="btn btn-grande" data-r="1">💪 Forte</button><button type="button" class="btn btn-grande btn-sec" data-r="0">😬 Fraca</button></div><p class="es-msg" aria-live="polite"></p>`);
      const se = a.querySelector(".jg-senha"), msg = a.querySelector(".es-msg");
      const nova = () => { cur = R(2) ? { s: forte(), f: 1 } : { s: FRACAS[R(FRACAS.length)], f: 0 }; se.textContent = cur.s; };
      a.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { if (!vivo) return;
        if (+b.dataset.r === cur.f) { pts++; msg.textContent = cur.f ? "✅ Forte: longa, com maiúscula, número e símbolo." : "✅ Fraca mesmo: fácil de adivinhar."; if (pts % 2 === 0) api.ponto(b); }
        else msg.textContent = cur.f ? `❌ “${cur.s}” é forte: tem ${cur.s.length} caracteres, maiúscula, número e símbolo.` : `❌ “${cur.s}” é fraca: ${/^\d+$/.test(cur.s) ? "só números" : "palavra ou nome fácil de adivinhar"}.`;
        nova(); });
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🔐 ${pts} certas &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); }; } });

  /* ---------------- 🎣 Golpe ou confiável? (mensagens inventadas, sem marcas reais) ---------------- */
  const MSGS = [
    ["PARABÉNS!!! Você ganhou um celular novo! Clique no link em 10 minutos para pegar o prêmio: premio-gratis.xyz", 1, "Prêmio que você não pediu, pressa e link estranho."],
    ["Oi, mãe, troquei de número. Me faz um Pix urgente de 300 reais? Depois eu explico.", 1, "Número novo pedindo dinheiro com pressa é golpe clássico."],
    ["Sua conta será BLOQUEADA hoje. Mande a sua senha para confirmar os dados.", 1, "Ninguém de verdade pede a sua senha."],
    ["Promoção relâmpago: tênis de 500 por 29 reais só hoje! Pague no Pix para este número.", 1, "Preço bom demais para ser verdade + pagamento para pessoa desconhecida."],
    ["Passe o código de 6 números que chegou no seu celular para eu liberar o seu prêmio.", 1, "O código de confirmação é só seu: nunca passe para ninguém."],
    ["Você foi sorteado para ganhar 1.000 moedas no jogo! Digite login e senha neste site.", 1, "Site estranho pedindo login e senha."],
    ["URGENTE: seu CPF tem pendência. Pague o boleto em anexo agora para não ser preso.", 1, "Medo e pressa são truques de golpe."],
    ["Baixe este aplicativo fora da loja oficial para ganhar diamantes infinitos.", 1, "App fora da loja oficial pode ser vírus."],
    ["Lembrete da escola: reunião de pais na sexta-feira às 18h, na quadra.", 0, "Informação comum, sem pedir dinheiro, senha ou clique."],
    ["Amanhã a aula de Informática é na sala 3. Tragam fone de ouvido se tiverem.", 0, "Aviso normal, sem pedir nada perigoso."],
    ["Vovó: Feliz aniversário, meu neto! Te amo muito.", 0, "Mensagem de carinho, sem pedir nada."],
    ["Seu pedido saiu para entrega e chega amanhã. Acompanhe no aplicativo da loja onde você comprou.", 0, "Manda você usar o app que você já conhece, sem link estranho."],
    ["Professor: a atividade de recuperação está liberada no portal até sexta.", 0, "Aviso da escola, no lugar de sempre."],
    ["Mãe: passa na padaria e compra 6 pães, por favor.", 0, "Pedido comum de alguém da família, do número de sempre."],
    ["Treino de futsal remarcado para quinta, às 16h.", 0, "Informação normal, sem dinheiro, senha ou link."],
    ["Atualize o seu aplicativo pela loja oficial do celular para ter as novidades.", 0, "Loja oficial é o caminho seguro."]];
  J.registrar({ id: "golpe-ou-verdade", nome: "Golpe ou confiável?", ic: "🎣", cat: "info", tipo: "dom", controle: "🖱️ Clique em 🚫 Golpe ou ✅ Confiável.",
    como: ["📱 Chega uma mensagem no celular.", "🔎 Procure os sinais de golpe: pressa, prêmio, pedido de dinheiro, senha, código ou link estranho.", "🖱️ Clique em 🚫 Golpe ou ✅ Confiável.", "🏁 Você tem 60 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#dcfce7"); ctx.fillStyle = "#fff"; D.rr(ctx, 40, 20, 280, 70, 12); ctx.fill(); D.texto(ctx, 180, 42, "Você ganhou um prêmio!", "#0f172a", 15); D.texto(ctx, 180, 66, "Clique no link: premio.xyz", "#dc2626", 13);
      [["🚫 Golpe", 110], ["✅ Confiável", 250]].forEach(([r, x]) => { ctx.fillStyle = "#fff"; ctx.strokeStyle = "#16a34a"; ctx.lineWidth = 2; D.rr(ctx, x - 60, 140, 120, 44, 10); ctx.fill(); ctx.stroke(); D.texto(ctx, x, 162, r, "#0f172a", 15); }); D.mao(ctx, 110, 166, t > 2 && t < 2.6); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 60000, vivo = true, cur; let ordem = emb(MSGS), i = 0;
      a.insertAdjacentHTML("beforeend", `<div class="jg-zap"></div><div class="row-btns jg-2bt"><button type="button" class="btn btn-grande btn-perigo" data-r="1">🚫 Golpe</button><button type="button" class="btn btn-grande btn-ok" data-r="0">✅ Confiável</button></div><p class="es-msg" aria-live="polite"></p>`);
      const z = a.querySelector(".jg-zap"), msg = a.querySelector(".es-msg");
      const nova = () => { if (i >= ordem.length) { ordem = emb(MSGS); i = 0; } cur = ordem[i++]; z.innerHTML = `<p>${esc(cur[0])}</p>`; };
      a.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { if (!vivo) return;
        const tipo = cur[1] ? "🚫 GOLPE" : "✅ CONFIÁVEL";
        if (+b.dataset.r === cur[1]) { pts++; msg.textContent = `✅ Certo! A mensagem era ${tipo}: ${cur[2]}`; if (pts % 2 === 0) api.ponto(b); } else msg.textContent = `❌ Ops! A mensagem era ${tipo}: ${cur[2]}`; nova(); });
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `🎣 ${pts} certas &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); }; } });

  /* ---------------- 🤖 Robô no labirinto (algoritmo) ---------------- */
  J.registrar({ id: "robo-labirinto", nome: "Robô no labirinto", ic: "🤖", cat: "info", tipo: "dom", controle: "🖱️ Monte a sequência com as setas e clique em ▶️ Rodar.",
    como: ["🤖 O robô precisa chegar na bandeira 🏁.", "⬆️➡️⬇️⬅️ Clique nas setas para montar o caminho (o algoritmo).", "▶️ Clique em Rodar e veja o robô seguir os seus passos.", "🧱 Se bater na parede, apague e tente de novo!"],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); const c = 34, ox = 60, oy = 30; for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { ctx.fillStyle = (x === 1 && y < 3) ? "#475569" : "#e2e8f0"; ctx.fillRect(ox + x * c, oy + y * c, c - 2, c - 2); }
      const cam = [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3], [2, 3], [2, 2]], k = Math.min(cam.length - 1, Math.floor(Math.max(0, t - 1) * 2.5)); D.emoji(ctx, ox + 2 * c + 16, oy + 2 * c + 16, "🏁", 22); D.emoji(ctx, ox + cam[k][0] * c + 16, oy + cam[k][1] * c + 16, "🤖", 24);
      ["⬇️", "⬇️", "⬇️", "➡️", "➡️", "⬆️"].forEach((s, i) => D.emoji(ctx, 230 + (i % 3) * 30, 50 + Math.floor(i / 3) * 32, s, 20)); D.mao(ctx, 260, 140, t < 1); ctx.fillStyle = "#16a34a"; D.rr(ctx, 230, 115, 90, 34, 8); ctx.fill(); D.texto(ctx, 275, 132, "▶️ Rodar", "#fff", 14); },
    criar(api) { const a = api.area; let nivel = 1, pts = 0, vivo = true, prog = [], mapa, rodando = false;
      const gerar = () => { const n = Math.min(8, 4 + Math.floor(nivel / 2)); let m, ok = false, tent = 0;
        while (!ok && tent++ < 200) { m = Array.from({ length: n }, () => Array.from({ length: n }, () => Math.random() < .28 ? 1 : 0)); m[0][0] = 0; m[n - 1][n - 1] = 0;
          const v = new Set(["0,0"]), q = [[0, 0]]; while (q.length) { const [x, y] = q.shift(); if (x === n - 1 && y === n - 1) { ok = true; break; } [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => { const X = x + dx, Y = y + dy; if (X >= 0 && Y >= 0 && X < n && Y < n && !m[Y][X] && !v.has(X + "," + Y)) { v.add(X + "," + Y); q.push([X, Y]); } }); } }
        return m; };
      const pintar = (rx, ry) => { const n = mapa.length; a.querySelector(".jg-lab").style.gridTemplateColumns = `repeat(${n},1fr)`;
        a.querySelector(".jg-lab").innerHTML = mapa.map((l, y) => l.map((c, x) => `<span class="${c ? "muro" : ""}">${x === rx && y === ry ? "🤖" : x === n - 1 && y === n - 1 ? "🏁" : ""}</span>`).join("")).join("");
        a.querySelector(".jg-prog").innerHTML = prog.length ? prog.map(p => ({ u: "⬆️", d: "⬇️", l: "⬅️", r: "➡️" })[p]).join(" ") : "<small>Clique nas setas para montar o caminho…</small>"; };
      const novo = () => { mapa = gerar(); prog = []; pintar(0, 0); hud(a, `🤖 Nível ${nivel} &nbsp; ⭐ ${pts}`); };
      a.insertAdjacentHTML("beforeend", `<div class="jg-robo"><div class="jg-lab"></div><div><div class="jg-setas">${[["u", "⬆️"], ["l", "⬅️"], ["d", "⬇️"], ["r", "➡️"]].map(([k, s]) => `<button type="button" class="btn" data-s="${k}">${s}</button>`).join("")}</div>
        <p class="jg-prog"></p><div class="row-btns"><button type="button" class="btn btn-ok" data-x="rodar">▶️ Rodar</button><button type="button" class="btn btn-sec" data-x="apagar">⟲ Apagar</button></div><p class="es-msg" aria-live="polite"></p></div></div>`);
      const msg = a.querySelector(".es-msg");
      a.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { if (rodando || prog.length >= 40) return; prog.push(b.dataset.s); pintar(0, 0); });
      a.querySelector('[data-x="apagar"]').onclick = () => { if (rodando) return; prog = []; msg.textContent = ""; pintar(0, 0); };
      a.querySelector('[data-x="rodar"]').onclick = async () => { if (rodando || !prog.length) return; rodando = true; let x = 0, y = 0; const n = mapa.length;
        for (const p of prog) { if (!vivo) return; const [dx, dy] = ({ u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0] })[p]; const X = x + dx, Y = y + dy;
          if (X < 0 || Y < 0 || X >= n || Y >= n || mapa[Y][X]) { msg.textContent = "💥 O robô bateu! Apague e monte outro caminho."; rodando = false; return; }
          x = X; y = Y; pintar(x, y); await new Promise(r => setTimeout(r, 280)); }
        rodando = false;
        if (x === n - 1 && y === n - 1) { pts += 10 * nivel; nivel++; msg.textContent = "🏁 Chegou! Próximo nível…"; api.ponto(a.querySelector(".jg-lab")); setTimeout(() => vivo && (msg.textContent = "", novo()), 900); }
        else msg.textContent = "🤔 O robô parou antes da bandeira. Coloque mais passos!"; };
      novo(); return () => { vivo = false; if (pts) api.fim(pts); }; } });

  /* ---------------- 🔢 Binário relâmpago ---------------- */
  J.registrar({ id: "binario", nome: "Binário relâmpago", ic: "💡", cat: "info", tipo: "dom", controle: "🖱️ Clique nas lâmpadas para acender ou apagar.",
    como: ["🔢 Aparece um número.", "💡 Cada lâmpada vale um número: 16, 8, 4, 2 e 1.", "🖱️ Acenda as lâmpadas que, somadas, dão o número (acesa = 1, apagada = 0).", "🏁 Você tem 60 segundos."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H, "#1e293b", "#334155"); D.texto(ctx, W / 2, 35, "Forme o 5", "#fde68a", 24); const on = [false, false, t > 1, false, t > 2.2];
      [16, 8, 4, 2, 1].forEach((v, i) => { const x = 60 + i * 60; D.emoji(ctx, x, 105, on[i] ? "💡" : "⚫", 34); D.texto(ctx, x, 145, String(v), "#fff", 16); D.texto(ctx, x, 175, on[i] ? "1" : "0", on[i] ? "#fde68a" : "#94a3b8", 18); });
      D.mao(ctx, t < 1.6 ? 180 : 300, 110, (t > .8 && t < 1.1) || (t > 2 && t < 2.3)); },
    criar(api) { const a = api.area; let pts = 0, fim = Date.now() + 60000, vivo = true, alvo = 0, on = [0, 0, 0, 0, 0]; const V = [16, 8, 4, 2, 1];
      a.insertAdjacentHTML("beforeend", `<p class="jg-bin-alvo"></p><div class="jg-bin">${V.map((v, i) => `<button type="button" class="jg-lamp" data-i="${i}"><span class="l">⚫</span><b>${v}</b><small class="b">0</small></button>`).join("")}</div><p class="es-msg" aria-live="polite"></p>`);
      const al = a.querySelector(".jg-bin-alvo"), msg = a.querySelector(".es-msg");
      const nova = () => { const max = pts < 4 ? 7 : pts < 8 ? 15 : 31; let n; do { n = 1 + R(max); } while (n === alvo); alvo = n; on = [0, 0, 0, 0, 0]; pinta(); al.innerHTML = `Forme o número <b>${alvo}</b>`; };
      const pinta = () => a.querySelectorAll(".jg-lamp").forEach((b, i) => { b.classList.toggle("on", !!on[i]); b.querySelector(".l").textContent = on[i] ? "💡" : "⚫"; b.querySelector(".b").textContent = on[i]; });
      a.querySelectorAll(".jg-lamp").forEach(b => b.onclick = () => { if (!vivo) return; const i = +b.dataset.i; on[i] = on[i] ? 0 : 1; pinta(); const s = on.reduce((t, x, k) => t + x * V[k], 0);
        msg.textContent = `Soma agora: ${s}`; if (s === alvo) { pts++; msg.textContent = `✅ ${on.join("")} em binário é ${alvo}!`; if (pts % 2 === 0) api.ponto(al); setTimeout(() => vivo && nova(), 700); } });
      const iv = setInterval(() => { const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000)); hud(a, `💡 ${pts} números &nbsp; ⏱️ ${r}s`); if (!r && vivo) { vivo = false; clearInterval(iv); api.fim(pts * 10); } }, 200);
      nova(); return () => { vivo = false; clearInterval(iv); }; } });

  /* ---------------- 🧠 Memória dos ícones ---------------- */
  const PARES = [["🖱️", "Mouse"], ["⌨️", "Teclado"], ["🖥️", "Monitor"], ["🖨️", "Impressora"], ["💾", "Disquete"], ["🎧", "Fone"], ["📷", "Webcam"], ["🔊", "Caixa de som"], ["📁", "Pasta"], ["🌐", "Internet"], ["🔐", "Senha"], ["☁️", "Nuvem"]];
  J.registrar({ id: "memoria", nome: "Memória dos ícones", ic: "🧠", cat: "acao", tipo: "dom", controle: "🖱️ Clique nas cartas.",
    como: ["🃏 As cartas estão viradas para baixo.", "🖱️ Clique em duas cartas para ver o que tem.", "✅ Achou um par igual? Ele fica aberto!", "🏆 Ache todos os pares com o menor número de jogadas."],
    demo(ctx, t, W, H, D) { D.fundo(ctx, W, H); for (let i = 0; i < 8; i++) { const x = 40 + (i % 4) * 75, y = 30 + Math.floor(i / 4) * 85, ab = (i === 1 && t > .8) || (i === 6 && t > 1.8);
        ctx.fillStyle = ab ? "#fff" : "#7c3aed"; D.rr(ctx, x, y, 60, 72, 8); ctx.fill(); if (ab) D.emoji(ctx, x + 30, y + 36, "🖱️", 30); else D.texto(ctx, x + 30, y + 36, "?", "#fff", 26); }
      D.mao(ctx, t < 1.4 ? 145 : 220, t < 1.4 ? 70 : 150, (t > .6 && t < .9) || (t > 1.6 && t < 1.9)); },
    criar(api) { const a = api.area; const esc6 = emb(PARES).slice(0, 8); let cartas = emb([...esc6, ...esc6]).map((p, i) => ({ p, i, ok: false })), abertas = [], jog = 0, pares = 0, trava = false, vivo = true;
      a.insertAdjacentHTML("beforeend", `<div class="jg-mem">${cartas.map(c => `<button type="button" class="jg-carta" data-i="${c.i}"><span class="f">?</span><span class="v">${c.p[0]}<small>${esc(c.p[1])}</small></span></button>`).join("")}</div>`);
      hud(a, `🧠 Jogadas: 0 &nbsp; Pares: 0/8`);
      a.querySelectorAll(".jg-carta").forEach(b => b.onclick = () => { const c = cartas[+b.dataset.i]; if (trava || c.ok || abertas.includes(c) || !vivo) return; b.classList.add("aberta"); abertas.push(c);
        if (abertas.length === 2) { jog++; const [x, y] = abertas; if (x.p === y.p) { x.ok = y.ok = true; pares++; abertas = []; a.querySelectorAll(".jg-carta.aberta").forEach(e => e.classList.add("ok")); api.ponto(b);
            if (pares === 8) { vivo = false; api.fim(Math.max(10, 200 - jog * 6)); } }
          else { trava = true; setTimeout(() => { abertas.forEach(z => { const e = a.querySelector(`.jg-carta[data-i="${z.i}"]`); e && e.classList.remove("aberta"); }); abertas = []; trava = false; }, 800); } }
        hud(a, `🧠 Jogadas: ${jog} &nbsp; Pares: ${pares}/8`); });
      return () => { vivo = false; }; } });
})();

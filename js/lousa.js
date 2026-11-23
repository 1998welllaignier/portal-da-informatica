/* ✏️ PINCEL SOBRE A APOSTILA + ⬜ QUADRO BRANCO (18/11/2026, pedido do professor)
   - Pincel: uma camada transparente por cima da página do portal (apostila, missão, painel). Os riscos ficam presos
     no texto (acompanham a rolagem). 🖱️ Mouse = os riscos ficam, mas a página volta a ser clicável.
   - Quadro: tela branca (ou quadriculada, pautada, verde-lousa) com páginas ◀ 1/3 ▶, colar imagem (Ctrl+V) e salvar PNG.
   - Ferramentas: pincel, marca-texto, formas (linha, seta, retângulo, círculo), texto, laser, borracha, carimbos,
     cores, grossura, desfazer/refazer (Ctrl+Z / Ctrl+Y), limpar. A barra fica embaixo e pode ir para cima ou para os lados.
   - Só para o professor: o botão ✏️ aparece na visualização do professor (#/ver), no painel e no modo apresentação.
   - Quadro direto nos alunos: P.lousa.quadro.aoMudar(fn) entrega o quadro (fundo + desenhos) para a 📡 Sala ao vivo. */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const CORES = ["#dc2626", "#2563eb", "#16a34a", "#111827", "#f59e0b", "#9333ea", "#ffffff"];
  const SELOS = ["✔️", "❌", "⭐", "❓", "❗", "👀"];
  const QW = 1600, QH = 900;   // quadro: espaço lógico fixo 16:9 (fica igual em qualquer tela)
  const guarda = (k, v) => { try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); } catch (e) {} return v; };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- desenho de um objeto ---------- */
  function pintar(g, o) {
    g.save(); g.globalAlpha = o.alpha || 1; g.strokeStyle = g.fillStyle = o.cor || "#111827"; g.lineWidth = o.larg || 4; g.lineCap = g.lineJoin = "round";
    if (o.t === "traco" && o.pts.length) {
      if (o.alpha && o.alpha < 1) g.globalCompositeOperation = "multiply";
      g.beginPath(); g.moveTo(o.pts[0][0], o.pts[0][1]);
      for (let i = 1; i < o.pts.length - 1; i++) { const [x1, y1] = o.pts[i], [x2, y2] = o.pts[i + 1]; g.quadraticCurveTo(x1, y1, (x1 + x2) / 2, (y1 + y2) / 2); }
      const u = o.pts[o.pts.length - 1]; g.lineTo(u[0], u[1] + (o.pts.length === 1 ? 0.01 : 0)); g.stroke();
    } else if (o.t === "linha" || o.t === "seta") {
      g.beginPath(); g.moveTo(o.a[0], o.a[1]); g.lineTo(o.b[0], o.b[1]); g.stroke();
      if (o.t === "seta") { const ang = Math.atan2(o.b[1] - o.a[1], o.b[0] - o.a[0]), L = 12 + (o.larg || 4) * 2.2;
        g.beginPath(); g.moveTo(o.b[0], o.b[1]); g.lineTo(o.b[0] - L * Math.cos(ang - 0.45), o.b[1] - L * Math.sin(ang - 0.45));
        g.lineTo(o.b[0] - L * Math.cos(ang + 0.45), o.b[1] - L * Math.sin(ang + 0.45)); g.closePath(); g.fill(); }
    } else if (o.t === "ret") { g.strokeRect(Math.min(o.a[0], o.b[0]), Math.min(o.a[1], o.b[1]), Math.abs(o.b[0] - o.a[0]), Math.abs(o.b[1] - o.a[1])); }
    else if (o.t === "circ") { g.beginPath(); g.ellipse((o.a[0] + o.b[0]) / 2, (o.a[1] + o.b[1]) / 2, Math.abs(o.b[0] - o.a[0]) / 2 || 1, Math.abs(o.b[1] - o.a[1]) / 2 || 1, 0, 0, Math.PI * 2); g.stroke(); }
    else if (o.t === "texto") { g.font = `700 ${o.tam || 28}px "Comic Sans MS", "Segoe Print", cursive`; g.textBaseline = "top"; String(o.txt).split("\n").forEach((l, i) => g.fillText(l, o.x, o.y + i * (o.tam || 28) * 1.2)); }
    else if (o.t === "selo") { g.font = `${o.tam || 48}px "Segoe UI Emoji", "Noto Color Emoji", sans-serif`; g.textBaseline = "middle"; g.textAlign = "center"; g.fillText(o.e, o.x, o.y); }
    else if (o.t === "img" && o._im && o._im.complete) { g.drawImage(o._im, o.x, o.y, o.w, o.h); }
    g.restore();
  }
  function caixa(o) {   // retângulo envolvente (para a borracha)
    if (o.t === "traco") { const xs = o.pts.map(p => p[0]), ys = o.pts.map(p => p[1]); return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]; }
    if (o.a) return [Math.min(o.a[0], o.b[0]), Math.min(o.a[1], o.b[1]), Math.max(o.a[0], o.b[0]), Math.max(o.a[1], o.b[1])];
    if (o.t === "texto") { const n = String(o.txt).split("\n"); return [o.x, o.y, o.x + Math.max(...n.map(l => l.length)) * (o.tam || 28) * 0.6, o.y + n.length * (o.tam || 28) * 1.2]; }
    if (o.t === "selo") return [o.x - 26, o.y - 26, o.x + 26, o.y + 26];
    if (o.t === "img") return [o.x, o.y, o.x + o.w, o.y + o.h];
    return [0, 0, 0, 0];
  }
  function acerta(o, x, y, r) {
    if (o.t === "traco") return o.pts.some(p => Math.hypot(p[0] - x, p[1] - y) < r + (o.larg || 4) / 2);
    if (o.t === "linha" || o.t === "seta") { const [ax, ay] = o.a, [bx, by] = o.b, L = Math.hypot(bx - ax, by - ay) || 1, t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / (L * L))); return Math.hypot(ax + t * (bx - ax) - x, ay + t * (by - ay) - y) < r + (o.larg || 4); }
    const [x1, y1, x2, y2] = caixa(o); return x >= x1 - r && x <= x2 + r && y >= y1 - r && y <= y2 + r;
  }
  const simplifica = pts => pts.filter((p, i) => i === 0 || i === pts.length - 1 || Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) > 1.5);
  const leve = objs => objs.map(o => { const c = Object.assign({}, o); delete c._im; if (c.pts) c.pts = c.pts.map(p => [Math.round(p[0]), Math.round(p[1])]); return c; });

  /* ---------- estado ---------- */
  const E = { modo: null, ferr: "pincel", forma: "seta", cor: CORES[0], larg: +(guarda("lousa:larg") || 6), lugar: guarda("lousa:lugar") || "baixo",
    objs: [], refazer: [], quadro: null, laser: [], ouvintes: [] };
  let cv, g, barra, lancador, raf = null, atual = null, inicio = null, dpr = 1;

  /* ---------- camada (pincel sobre a página) e quadro ---------- */
  function montar() {
    if (cv) return;
    cv = document.createElement("canvas"); cv.className = "lousa-cv"; document.body.appendChild(cv); g = cv.getContext("2d");
    addEventListener("resize", ajustar); addEventListener("scroll", () => { if (E.modo === "pincel") redesenhar(); }, { passive: true });
    cv.addEventListener("pointerdown", baixo); cv.addEventListener("pointermove", move); addEventListener("pointerup", cima); cv.addEventListener("pointercancel", cima);
    document.addEventListener("keydown", tecla, true); document.addEventListener("paste", colar);
    ajustar();
  }
  function ajustar() {
    if (!cv) return; dpr = devicePixelRatio || 1;
    const host = E.modo === "quadro" && E.quadro ? E.quadro.palco.getBoundingClientRect() : { width: innerWidth, height: innerHeight, left: 0, top: 0 };
    cv.style.left = host.left + "px"; cv.style.top = host.top + "px"; cv.style.width = host.width + "px"; cv.style.height = host.height + "px";
    cv.width = Math.round(host.width * dpr); cv.height = Math.round(host.height * dpr); redesenhar();
  }
  // transformação: pincel = coordenadas da página (com rolagem); quadro = espaço lógico 1600×900 encaixado
  function escalaQ() { const r = cv.getBoundingClientRect(); return Math.min(r.width / QW, r.height / QH); }
  function paraLogico(cx, cy) {
    const r = cv.getBoundingClientRect();
    if (E.modo === "quadro") { const s = escalaQ(), ox = (r.width - QW * s) / 2, oy = (r.height - QH * s) / 2; return [(cx - r.left - ox) / s, (cy - r.top - oy) / s]; }
    return [cx + scrollX, cy + scrollY];
  }
  function lista() { return E.modo === "quadro" ? E.quadro.paginas[E.quadro.pag].objs : E.objs; }
  function redesenhar() {
    if (!g) return; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, cv.width, cv.height);
    if (E.modo === "quadro") { const r = cv.getBoundingClientRect(), s = escalaQ(); g.setTransform(dpr * s, 0, 0, dpr * s, dpr * (r.width - QW * s) / 2, dpr * (r.height - QH * s) / 2); }
    else g.setTransform(dpr, 0, 0, dpr, -scrollX * dpr, -scrollY * dpr);
    if (E.modo) { lista().forEach(o => pintar(g, o)); if (atual) pintar(g, atual); }
    // 🔴 laser: rastro que some sozinho
    const ag = performance.now(); E.laser = E.laser.filter(p => ag - p[2] < 700);
    E.laser.forEach((p, i) => { const f = 1 - (ag - p[2]) / 700; g.save(); g.globalAlpha = f; g.fillStyle = "#ef4444"; g.shadowColor = "#ef4444"; g.shadowBlur = 18; g.beginPath(); g.arc(p[0], p[1], (i === E.laser.length - 1 ? 9 : 6) * f + 2, 0, 7); g.fill(); g.restore(); });
    if (E.laser.length && !raf) raf = requestAnimationFrame(() => { raf = null; redesenhar(); });
    espelhar();
  }
  /* 📽️ 23/11/2026 (pedido do professor): durante a leitura guiada, o que ele risca e aponta (laser) por cima do trecho
     aparece também no TELÃO (3 telas, pelo BroadcastChannel, sem internet) e na TELA DOS ALUNOS (pelo Firebase,
     config/lousaLeitura_<turma>, no máximo 2 gravações por segundo e só enquanto ele desenha).
     A posição é proporcional à caixa do trecho (o texto pode quebrar um pouco diferente em cada tela). */
  const canal = "BroadcastChannel" in window ? new BroadcastChannel("portal-lousa") : null;
  let espPend = false, espelhou = false, nuvemT = null, nuvemUlt = 0, nuvemDado = null;
  const desloca = (o, dx, dy) => { const c = Object.assign({}, o); if (c.pts) c.pts = c.pts.map(p => [p[0] + dx, p[1] + dy]); if (c.a) c.a = [c.a[0] + dx, c.a[1] + dy]; if (c.b) c.b = [c.b[0] + dx, c.b[1] + dy]; if (c.x != null) c.x += dx; if (c.y != null) c.y += dy; return c; };
  function paraNuvem(dado) {   // grava para os alunos, com freio (no máximo a cada 500 ms)
    const L = P.leituraAtual; if (!L || !L.turmas || !P.nuvem || !P.nuvem.app) return;
    nuvemDado = dado; if (nuvemT) return;
    const vai = () => { nuvemT = null; nuvemUlt = Date.now(); const dd = { j: JSON.stringify(nuvemDado), em: Date.now() };   // em texto: o Firebase não aceita lista dentro de lista (os pontos do traço)
      L.turmas.forEach(id => { try { P.nuvem.app(0).db.collection("config").doc("lousaLeitura_" + id).set(dd).catch(() => {}); } catch (e) {} }); };
    const falta = 500 - (Date.now() - nuvemUlt); if (falta <= 0) vai(); else nuvemT = setTimeout(vai, falta);
  }
  function espelhar() {
    if (espPend) return; espPend = true;
    requestAnimationFrame(() => { espPend = false;
      const pv = document.querySelector(".lgc-3 .lgc-previa, .lgc-2 .lgc-tela");
      if (!pv || E.modo !== "pincel") { if (espelhou) { const z = { limpar: 1 }; if (canal) canal.postMessage(z); paraNuvem(z); espelhou = false; } return; }
      const r = pv.getBoundingClientRect(), dx = -(r.left + scrollX), dy = -(r.top + scrollY), ag = performance.now();
      const dado = { w: r.width, h: r.height, objs: leve(E.objs.concat(atual ? [atual] : [])).map(o => desloca(o, dx, dy)), laser: E.laser.map(p => [Math.round(p[0] + dx), Math.round(p[1] + dy), Math.round(ag - p[2])]) };
      if (canal) canal.postMessage(dado); paraNuvem(dado); espelhou = true; });
  }
  // desenha o que veio do professor por cima de uma caixa de trecho (telão ou tela do aluno)
  const ESP = { cv: null, g: null, ult: null, laser: [], raf: null, caixa: null };
  function pintarEspelho() {
    const q = ESP.caixa && ESP.caixa(); if (!q) { if (ESP.cv) { ESP.cv.remove(); ESP.cv = null; } return; }
    if (!ESP.cv) { ESP.cv = document.createElement("canvas"); ESP.cv.className = "lousa-cv lousa-telao"; document.body.appendChild(ESP.cv); ESP.g = ESP.cv.getContext("2d"); }
    const top = [...document.querySelectorAll("dialog[open]")].pop(); if (top && top.contains(q) && ESP.cv.parentNode !== top) top.appendChild(ESP.cv); else if ((!top || !top.contains(q)) && ESP.cv.parentNode !== document.body) document.body.appendChild(ESP.cv);
    const tg = ESP.g, d2 = devicePixelRatio || 1; ESP.cv.width = Math.round(innerWidth * d2); ESP.cv.height = Math.round(innerHeight * d2); ESP.cv.style.width = innerWidth + "px"; ESP.cv.style.height = innerHeight + "px";
    tg.setTransform(1, 0, 0, 1, 0, 0); tg.clearRect(0, 0, ESP.cv.width, ESP.cv.height); const u = ESP.ult; if (!u || u.limpar || !u.w) return;
    const Q = q.getBoundingClientRect(), sx = Q.width / u.w, sy = Q.height / u.h;
    tg.setTransform(d2 * sx, 0, 0, d2 * sy, d2 * Q.left, d2 * Q.top); (u.objs || []).forEach(o => pintar(tg, o));
    const ag = performance.now(); ESP.laser = ESP.laser.filter(p => ag - p[2] < 700);
    ESP.laser.forEach((p, i) => { const f = 1 - (ag - p[2]) / 700; tg.save(); tg.globalAlpha = f; tg.fillStyle = "#ef4444"; tg.shadowColor = "#ef4444"; tg.shadowBlur = 18; tg.beginPath(); tg.arc(p[0], p[1], ((i === ESP.laser.length - 1 ? 9 : 6) * f + 2) / Math.max(.3, (sx + sy) / 2), 0, 7); tg.fill(); tg.restore(); });
    if (ESP.laser.length && !ESP.raf) ESP.raf = requestAnimationFrame(() => { ESP.raf = null; pintarEspelho(); });
  }
  function receberEspelho(dado, caixa) { ESP.caixa = caixa; ESP.ult = dado || null; const ag = performance.now();
    ESP.laser = dado && dado.laser ? dado.laser.map(p => [p[0], p[1], ag - p[2]]) : []; pintarEspelho(); }
  addEventListener("resize", () => { if (ESP.ult) pintarEspelho(); });
  if (canal) canal.onmessage = e => { if (!document.querySelector(".lg-telao")) return; receberEspelho(e.data, () => document.querySelector(".lg-telao .lg-quadro")); };
  function limparPincel() { if (E.modo !== "pincel") return; E.objs = []; E.refazer = []; atual = null; E.laser = []; redesenhar(); }
  function mudou() { redesenhar(); if (E.modo === "quadro") E.ouvintes.forEach(fn => { try { fn(estadoQuadro()); } catch (e) {} }); }
  function estadoQuadro() { const q = E.quadro; return q ? { fundo: q.fundo, pag: q.pag, total: q.paginas.length, objs: leve(q.paginas[q.pag].objs) } : null; }

  /* ---------- ponteiro ---------- */
  function baixo(e) {
    if (!E.modo || E.ferr === "mouse") return; e.preventDefault(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
    const [x, y] = paraLogico(e.clientX, e.clientY); inicio = [x, y];
    const f = E.ferr;
    if (f === "pincel" || f === "marca") atual = { t: "traco", cor: E.cor, larg: f === "marca" ? E.larg * 3.5 : E.larg, alpha: f === "marca" ? 0.35 : 1, pts: [[x, y]] };
    else if (f === "forma") atual = { t: E.forma, cor: E.cor, larg: E.larg, a: [x, y], b: [x, y] };
    else if (f === "borracha") apagarEm(x, y);
    else if (f === "texto") { escrever(e.clientX, e.clientY, x, y); }
    else if (f === "selo") { lista().push({ t: "selo", e: E.selo || SELOS[0], x, y, tam: 30 + E.larg * 3 }); E.refazer = []; mudou(); }
    else if (f === "laser") { E.laser.push([x, y, performance.now()]); redesenhar(); }
  }
  function move(e) {
    if (!E.modo || E.ferr === "mouse") return;
    const [x, y] = paraLogico(e.clientX, e.clientY);
    if (E.ferr === "laser" && (e.buttons || e.pointerType === "mouse")) { E.laser.push([x, y, performance.now()]); if (E.laser.length > 40) E.laser.shift(); redesenhar(); return; }
    if (!inicio) return;
    if (atual && atual.t === "traco") atual.pts.push([x, y]);
    else if (atual) { atual.b = [x, y]; if (e.shiftKey && atual.t !== "linha" && atual.t !== "seta") { const d = Math.max(Math.abs(x - atual.a[0]), Math.abs(y - atual.a[1])); atual.b = [atual.a[0] + Math.sign(x - atual.a[0]) * d, atual.a[1] + Math.sign(y - atual.a[1]) * d]; } }
    else if (E.ferr === "borracha") apagarEm(x, y);
    redesenhar();
  }
  function cima() {
    if (!inicio) return; inicio = null;
    if (atual) { if (atual.pts) atual.pts = simplifica(atual.pts); const ok = atual.pts ? atual.pts.length > 0 : Math.hypot(atual.b[0] - atual.a[0], atual.b[1] - atual.a[1]) > 4; if (ok) { lista().push(atual); E.refazer = []; } atual = null; mudou(); }
  }
  function apagarEm(x, y) { const l = lista(); for (let i = l.length - 1; i >= 0; i--) if (acerta(l[i], x, y, 10)) { E.refazer.push(l.splice(i, 1)[0]); mudou(); return; } }
  function escrever(cx, cy, x, y) {
    const t = document.createElement("textarea"); t.className = "lousa-txt"; t.rows = 1; t.placeholder = "Digite e aperte Enter";
    const pai = E.modo === "quadro" ? E.quadro.el : document.body;
    const tam = 18 + E.larg * 2, s = E.modo === "quadro" ? escalaQ() : 1;
    Object.assign(t.style, { left: cx + "px", top: cy + "px", color: E.cor, fontSize: tam * s + "px" });
    pai.appendChild(t); t.focus(); setTimeout(() => t.focus(), 0);
    let feito = false; const fim = salvar => { if (feito) return; feito = true; const v = t.value.trim(); if (t.parentNode) t.parentNode.removeChild(t); if (salvar && v) { lista().push({ t: "texto", txt: v, x, y, cor: E.cor, tam }); E.refazer = []; mudou(); } };
    t.addEventListener("keydown", e => { e.stopPropagation(); if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); fim(true); } if (e.key === "Escape") fim(false); });
    t.addEventListener("blur", () => fim(true));
  }
  function desfazer() { const o = lista().pop(); if (o) { E.refazer.push(o); mudou(); } }
  function refazer() { const o = E.refazer.pop(); if (o) { lista().push(o); mudou(); } }
  function limpar() { if (!lista().length) return; E.refazer = lista().slice().reverse(); lista().length = 0; mudou(); }
  function tecla(e) {
    if (!E.modo || /^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || "")) return;
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === "z") { e.preventDefault(); e.shiftKey ? refazer() : desfazer(); }
    else if ((e.ctrlKey || e.metaKey) && k === "y") { e.preventDefault(); refazer(); }
    else if (k === "escape" && E.ferr !== "mouse") { e.preventDefault(); escolher("mouse"); }
  }
  function colar(e) {
    if (E.modo !== "quadro") return;
    const it = [...(e.clipboardData || {}).items || []].find(i => /^image\//.test(i.type)); if (!it) return; e.preventDefault();
    const fr = new FileReader(); fr.onload = () => { const im = new Image(); im.onload = () => {
      // reduz para no máximo 1000 px (fica leve para mandar aos alunos)
      const k = Math.min(1, 1000 / Math.max(im.width, im.height)), c = document.createElement("canvas"); c.width = im.width * k; c.height = im.height * k; c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
      const src = c.toDataURL("image/jpeg", 0.8), im2 = new Image(); im2.src = src; const w = Math.min(QW * 0.6, c.width), h = c.height * w / c.width;
      const o = { t: "img", src, x: (QW - w) / 2, y: (QH - h) / 2, w, h, _im: im2 }; im2.onload = mudou; lista().push(o); E.refazer = []; mudou(); }; im.src = fr.result; };
    fr.readAsDataURL(it.getAsFile());
  }

  /* ---------- barra de ferramentas ---------- */
  const BT = (id, ic, rot, extra) => `<button type="button" class="lb-bt" data-f="${id}" title="${rot}" ${extra || ""}><span class="lb-ic">${ic}</span><span class="lb-rot">${rot}</span></button>`;
  function montarBarra() {
    if (barra) return;
    barra = document.createElement("div"); barra.className = "lousa-barra"; barra.setAttribute("role", "toolbar"); barra.setAttribute("aria-label", "Ferramentas do pincel");
    barra.innerHTML = BT("mouse", "🖱️", "Mouse") + BT("pincel", "✏️", "Pincel") + BT("marca", "🖍️", "Marca-texto")
      + `<span class="lb-grupo">${BT("forma", "➡️", "Formas")}<span class="lb-menu" data-m="forma">${[["seta", "➡️"], ["linha", "➖"], ["ret", "⬜"], ["circ", "⭕"]].map(([v, i]) => `<button type="button" data-forma="${v}" title="${{ seta: "Seta", linha: "Linha reta", ret: "Retângulo", circ: "Círculo" }[v]}">${i}</button>`).join("")}</span></span>`
      + BT("texto", "🔤", "Texto") + BT("laser", "🔴", "Laser") + BT("borracha", "🧽", "Borracha")
      + `<span class="lb-grupo">${BT("selo", "✔️", "Carimbos")}<span class="lb-menu" data-m="selo">${SELOS.map(s => `<button type="button" data-selo="${s}">${s}</button>`).join("")}</span></span>`
      + `<span class="lb-sep"></span>${CORES.map(c => `<button type="button" class="lb-cor" data-cor="${c}" style="--c:${c}" title="Cor"></button>`).join("")}`
      + `<label class="lb-larg" title="Grossura da ponta"><span>•</span><input type="range" min="2" max="24" value="${E.larg}"><span class="lb-g">●</span></label><span class="lb-sep"></span>`
      + BT("desfazer", "↶", "Desfazer") + BT("refazer", "↷", "Refazer") + BT("limpar", "🗑️", "Limpar")
      + `<span class="lb-so-quadro">${BT("fundo", "🟩", "Fundo")}${BT("pagant", "◀", "Página")}<span class="lb-pag">1/1</span>${BT("pagprox", "▶", "Página")}${BT("salvar", "💾", "Salvar")}${BT("cheia", "⛶", "Tela cheia")}</span>`
      + BT("quadro", "⬜", "Quadro") + BT("lugar", "⇄", "Mover barra") + BT("fechar", "✕", "Fechar");
    document.body.appendChild(barra);
    barra.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.cor) { E.cor = b.dataset.cor; if (["mouse", "borracha", "laser"].includes(E.ferr)) escolher("pincel"); pintarBarra(); return; }
      if (b.dataset.forma) { E.forma = b.dataset.forma; escolher("forma"); return; }
      if (b.dataset.selo) { E.selo = b.dataset.selo; escolher("selo"); return; }
      const f = b.dataset.f;
      if (f === "desfazer") desfazer(); else if (f === "refazer") refazer(); else if (f === "limpar") limpar();
      else if (f === "fechar") fechar(); else if (f === "quadro") (E.modo === "quadro" ? abrirPincel() : abrirQuadro());
      else if (f === "lugar") { const l = ["baixo", "direita", "cima", "esquerda"]; E.lugar = l[(l.indexOf(E.lugar) + 1) % 4]; guarda("lousa:lugar", E.lugar); pintarBarra(); }
      else if (f === "fundo") { const fs = ["branco", "quadriculado", "pautado", "lousa"]; E.quadro.fundo = fs[(fs.indexOf(E.quadro.fundo) + 1) % fs.length]; pintarQuadro(); mudou(); }
      else if (f === "pagant") { if (E.quadro.pag > 0) { E.quadro.pag--; E.refazer = []; pintarQuadro(); mudou(); } }
      else if (f === "pagprox") { if (E.quadro.pag === E.quadro.paginas.length - 1) E.quadro.paginas.push({ objs: [] }); E.quadro.pag++; E.refazer = []; pintarQuadro(); mudou(); }
      else if (f === "salvar") salvarPNG();
      else if (f === "cheia") { document.fullscreenElement ? document.exitFullscreen().catch(() => {}) : E.quadro.el.requestFullscreen().catch(() => {}); }
      else if (f) escolher(f);
    });
    barra.querySelector('input[type="range"]').oninput = e => { E.larg = +e.target.value; guarda("lousa:larg", E.larg); pintarBarra(); };
  }
  function escolher(f) { E.ferr = f; cv.classList.toggle("ativo", f !== "mouse"); cv.dataset.ferr = f; pintarBarra(); }
  function pintarBarra() {
    if (!barra) return; barra.dataset.lugar = E.lugar; barra.classList.toggle("modo-quadro", E.modo === "quadro");
    barra.querySelectorAll("[data-f]").forEach(b => b.classList.toggle("on", b.dataset.f === E.ferr));
    barra.querySelectorAll("[data-cor]").forEach(b => b.classList.toggle("on", b.dataset.cor === E.cor));
    barra.querySelector(".lb-g").style.fontSize = 8 + E.larg + "px"; barra.querySelector(".lb-g").style.color = E.cor;
    const fb = barra.querySelector('[data-f="forma"] .lb-ic'); fb.textContent = { seta: "➡️", linha: "➖", ret: "⬜", circ: "⭕" }[E.forma];
    const sb = barra.querySelector('[data-f="selo"] .lb-ic'); sb.textContent = E.selo || SELOS[0];
    if (E.quadro) { barra.querySelector(".lb-pag").textContent = `${E.quadro.pag + 1}/${E.quadro.paginas.length}`; barra.querySelector('[data-f="fundo"] .lb-ic').textContent = { branco: "⬜", quadriculado: "🔲", pautado: "📒", lousa: "🟩" }[E.quadro.fundo]; }
    document.body.classList.toggle("lousa-aberta", !!E.modo); document.body.dataset.lousaLugar = E.lugar;
  }

  /* ---------- quadro branco ---------- */
  function pintarQuadro() { const q = E.quadro; q.el.dataset.fundo = q.fundo; pintarBarra(); ajustar(); }
  function abrirQuadro() {
    montar(); montarBarra();
    if (!E.quadro) {
      const el = document.createElement("div"); el.className = "lousa-quadro"; el.innerHTML = `<div class="lq-palco"></div>`; document.body.appendChild(el);
      E.quadro = { el, palco: el.querySelector(".lq-palco"), fundo: "branco", pag: 0, paginas: [{ objs: [] }] };
    }
    E.quadro.el.hidden = false; E.modo = "quadro"; E.refazer = []; E.quadro.el.appendChild(cv); E.quadro.el.appendChild(barra);   // dentro do quadro: aparecem também na tela cheia
    if (E.ferr === "mouse") E.ferr = "pincel"; escolher(E.ferr); pintarQuadro(); mudou();
  }
  function abrirPincel() {
    montar(); montarBarra(); if (E.quadro) E.quadro.el.hidden = true;
    if (document.fullscreenElement && E.quadro && document.fullscreenElement === E.quadro.el) document.exitFullscreen().catch(() => {});
    E.modo = "pincel"; E.refazer = []; document.body.appendChild(cv); document.body.appendChild(barra);
    escolher(E.ferr === "mouse" ? "pincel" : E.ferr); ajustar();
  }
  function fechar() {
    if (E.quadro) E.quadro.el.hidden = true; E.modo = null; E.laser = [];
    if (cv) { cv.classList.remove("ativo"); redesenhar(); }
    if (barra) { barra.remove(); barra = null; }
    document.body.classList.remove("lousa-aberta"); verLancador();
    E.ouvintes.forEach(fn => { try { fn(null); } catch (e) {} });
  }
  function salvarPNG() {
    const c = document.createElement("canvas"); c.width = QW; c.height = QH; const x = c.getContext("2d");
    const f = E.quadro.fundo; x.fillStyle = f === "lousa" ? "#14532d" : "#ffffff"; x.fillRect(0, 0, QW, QH);
    if (f === "quadriculado" || f === "pautado") { x.strokeStyle = f === "pautado" ? "#bfdbfe" : "#e2e8f0"; x.lineWidth = 1.5; for (let y = 40; y < QH; y += 40) { x.beginPath(); x.moveTo(0, y); x.lineTo(QW, y); x.stroke(); } if (f === "quadriculado") for (let xx = 40; xx < QW; xx += 40) { x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx, QH); x.stroke(); } }
    E.quadro.paginas[E.quadro.pag].objs.forEach(o => pintar(x, o));
    x.font = "600 18px system-ui"; x.fillStyle = f === "lousa" ? "#dcfce7" : "#64748b"; x.fillText("Prof. Welington Laignier · Portal da Informática", 16, QH - 16);
    const a = document.createElement("a"); a.download = `quadro-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-")}-p${E.quadro.pag + 1}.png`; a.href = c.toDataURL("image/png"); a.click();
  }

  /* ---------- botão ✏️ (só nas telas do professor) ---------- */
  const telaProf = () => /^#\/(ver|painel|apresentar)/.test(location.hash) || !!(P.sess && (P.sess.get() || {}).prof);   // 👀 visualização do professor vira #/missao com sessão de professor
  function verLancador() {
    const mostra = telaProf() && !E.modo;
    if (mostra && !lancador) { lancador = document.createElement("div"); lancador.className = "lousa-lanc";
      lancador.innerHTML = `<button type="button" data-l="pincel" title="Pincel: riscar, sublinhar e passar marca-texto sobre a tela">✏️</button><button type="button" data-l="quadro" title="Quadro branco">⬜</button>`;
      lancador.onclick = e => { const b = e.target.closest("button"); if (!b) return; b.dataset.l === "quadro" ? abrirQuadro() : abrirPincel(); verLancador(); };
      document.body.appendChild(lancador); }
    if (lancador) lancador.hidden = !mostra;
  }
  addEventListener("hashchange", () => { if (E.modo === "pincel") { E.objs = []; E.refazer = []; redesenhar(); } verLancador(); });
  document.addEventListener("DOMContentLoaded", verLancador); setTimeout(verLancador, 800);

  /* ---------- 📡 para a Sala ao vivo: desenho do quadro nos computadores dos alunos ---------- */
  function desenharRemoto(canvas, q) {   // usado pelo aluno: desenha um estado de quadro num <canvas>
    const r = canvas.getBoundingClientRect(), d = devicePixelRatio || 1; canvas.width = Math.round(r.width * d); canvas.height = Math.round(r.height * d);
    const x = canvas.getContext("2d"), s = Math.min(r.width / QW, r.height / QH), ox = (r.width - QW * s) / 2, oy = (r.height - QH * s) / 2;
    x.setTransform(d, 0, 0, d, 0, 0); x.clearRect(0, 0, r.width, r.height);
    const f = q && q.fundo; x.fillStyle = f === "lousa" ? "#14532d" : "#ffffff"; x.fillRect(ox, oy, QW * s, QH * s);
    x.setTransform(d * s, 0, 0, d * s, d * ox, d * oy);
    if (f === "quadriculado" || f === "pautado") { x.strokeStyle = f === "pautado" ? "#bfdbfe" : "#e2e8f0"; x.lineWidth = 1.5; for (let y = 40; y < QH; y += 40) { x.beginPath(); x.moveTo(0, y); x.lineTo(QW, y); x.stroke(); } if (f === "quadriculado") for (let xx = 40; xx < QW; xx += 40) { x.beginPath(); x.moveTo(xx, 0); x.lineTo(xx, QH); x.stroke(); } }
    ((q && q.objs) || []).forEach(o => { if (o.t === "img" && !o._im) { o._im = new Image(); o._im.onload = () => desenharRemoto(canvas, q); o._im.src = o.src; } pintar(x, o); });
  }

  P.lousa = { abrirPincel, abrirQuadro, fechar, estado: () => E, quadro: { estado: estadoQuadro, aoMudar: fn => { E.ouvintes.push(fn); return () => { E.ouvintes = E.ouvintes.filter(x => x !== fn); }; } }, desenharRemoto, QW, QH, receberEspelho, limparPincel };
})();

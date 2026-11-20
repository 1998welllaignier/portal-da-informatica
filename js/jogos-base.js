/* 🎮 BIBLIOTECA DE JOGOS DA SALA DE ESPERA (20/11/2026, pedido do professor Welington Laignier)
   - Muitos jogos, para o aluno não enjoar no decorrer do ano: jogos de AÇÃO (inspirados nos que eles jogam no celular,
     mas com nome, desenho e regras nossos) e jogos de INFORMÁTICA (aprende brincando).
   - LIBERAÇÃO AUTOMÁTICA: cada jogo tem uma data de estreia (calendário abaixo, como os temas). A Sala de espera só mostra
     os que já estrearam, num rodízio diário (até 6 por aula, sempre com os jogos novos). O professor pode soltar um jogo
     antes da hora no painel (config/geral.jogosLiberados).
   - COMO JOGAR: antes de todo jogo aparece um tutorial animado (a mãozinha 👆 mostrando o que fazer, ou as teclas
     sendo apertadas) e os passos em frases curtas com ícones, para quem ainda lê devagar.
   - PONTOS: cada jogo chama api.ponto() quando o aluno vai bem (a Sala de espera dá +5, até 150 por aula).
     Pontos “rápidos demais” (menos de 1,2 s entre um e outro) são ignorados, para ninguém trapacear.
   - RECORDE PESSOAL: guardado em progresso/<aluno>_espera.recordes (cada jogo, a maior pontuação). */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const R = n => Math.floor(Math.random() * n);
  const lista = [];

  /* 📅 CALENDÁRIO SUGERIDO DE ESTREIAS (um jogo novo a cada ~2 semanas de aula; ajuste aqui se quiser) */
  const ESTREIA = {
    alvo: "2026-11-20", palavra: "2026-11-20", arquivo: "2026-11-20", tecla: "2026-11-20",
    "corta-virus": "2026-11-23", "corrida-cabo": "2026-11-23",
    "voo-wifi": "2026-11-30", "chuva-letras": "2026-12-07",
    // ano letivo de 2027
    cobrinha: "2027-02-08", "acerta-bug": "2027-02-22", "senha-forte": "2027-03-08", "bloco-a-bloco": "2027-03-22",
    "golpe-ou-verdade": "2027-04-05", "combina-icones": "2027-04-19", "monte-pc": "2027-05-03", "quebra-spam": "2027-05-17",
    "atalho-relampago": "2027-05-31", "memoria": "2027-06-14", "binario": "2027-06-28", "2048-bytes": "2027-08-02",
    "robo-labirinto": "2027-08-16", "bolhas-pixels": "2027-08-30", "atravessa-rede": "2027-09-13"
  };

  function registrar(def) { def.estreia = def.estreia || ESTREIA[def.id] || "2027-12-31"; lista.push(def); }
  const hojeS = () => (P.nuvem && P.nuvem.hoje) ? P.nuvem.hoje() : new Date().toLocaleDateString("sv-SE");
  const NOVO_DIAS = 14;
  const ehNovo = j => { const d = (new Date(hojeS()) - new Date(j.estreia)) / 864e5; return d >= 0 && d < NOVO_DIAS; };

  /* jogos liberados hoje (data de estreia já passou ou o professor soltou antes) */
  let liberadosProf = [];
  async function lerLiberados() {
    try { const sn = await P.nuvem.app(0).db.collection("config").doc("geral").get(); liberadosProf = (sn.exists && sn.data().jogosLiberados) || []; } catch (e) {}
  }
  const liberados = () => lista.filter(j => j.estreia <= hojeS() || liberadosProf.includes(j.id));
  /* 🔁 rodízio do dia: até 6 jogos, sempre os novos + um sorteio fixo do dia para a turma (todos veem os mesmos) */
  function doDia(turma, max) {
    max = max || 6;
    const L = liberados(); if (L.length <= max) return L;
    let seed = 0; for (const c of hojeS() + (turma || "")) seed = (seed * 31 + c.charCodeAt(0)) >>> 0;
    const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const novos = L.filter(ehNovo), resto = L.filter(j => !ehNovo(j)).map(j => [rnd(), j]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
    // mistura ação e informática
    const out = novos.slice(0, max);
    for (const cat of ["acao", "info", "acao", "info", "acao", "info"]) { if (out.length >= max) break; const i = resto.findIndex(j => j.cat === cat && !out.includes(j)); if (i >= 0) out.push(resto.splice(i, 1)[0]); }
    while (out.length < max && resto.length) out.push(resto.shift());
    return out;
  }
  const proximos = () => lista.filter(j => !liberados().includes(j)).sort((a, b) => a.estreia < b.estreia ? -1 : 1);

  /* ---------------- ajudantes de desenho para os tutoriais animados ---------------- */
  const D = {
    mao(ctx, x, y, clicando) {
      if (clicando) { ctx.save(); ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 3; ctx.globalAlpha = .8; ctx.beginPath(); ctx.arc(x, y, 14, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, 24, 0, 7); ctx.globalAlpha = .4; ctx.stroke(); ctx.restore(); }
      ctx.save(); ctx.font = "34px 'Segoe UI Emoji','Noto Color Emoji',sans-serif"; ctx.textBaseline = "top"; ctx.fillText("👆", x - 12, y - 4); ctx.restore();
    },
    tecla(ctx, x, y, rot, apertada, w) {
      w = w || 40; const h = 38, dy = apertada ? 4 : 0;
      ctx.save(); ctx.fillStyle = "#334155"; rr(ctx, x, y + 5, w, h, 7); ctx.fill();
      ctx.fillStyle = apertada ? "#fde68a" : "#fff"; ctx.strokeStyle = "#334155"; ctx.lineWidth = 2; rr(ctx, x, y + dy, w, h, 7); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#0f172a"; ctx.font = `bold ${rot.length > 2 ? 13 : 18}px Inter,Arial`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(rot, x + w / 2, y + dy + h / 2); ctx.restore();
    },
    texto(ctx, x, y, t, cor, tam, al) { ctx.save(); ctx.fillStyle = cor || "#0f172a"; ctx.font = `bold ${tam || 16}px Inter,Arial`; ctx.textAlign = al || "center"; ctx.textBaseline = "middle"; ctx.fillText(t, x, y); ctx.restore(); },
    emoji(ctx, x, y, e, tam) { ctx.save(); ctx.font = `${tam || 28}px 'Segoe UI Emoji','Noto Color Emoji',sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(e, x, y); ctx.restore(); },
    lerp: (a, b, k) => a + (b - a) * Math.max(0, Math.min(1, k)),
    fundo(ctx, W, H, c1, c2) { const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, c1 || "#e0f2fe"); g.addColorStop(1, c2 || "#f8fafc"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); }
  };
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  D.rr = rr;

  /* ---------------- motor dos jogos de canvas ---------------- */
  function montarCanvas(area, W, H) {
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H; cv.className = "jg-canvas"; cv.tabIndex = 0; area.appendChild(cv);
    const ctx = cv.getContext("2d");
    const pos = ev => { const r = cv.getBoundingClientRect(); return { x: (ev.clientX - r.left) * W / r.width, y: (ev.clientY - r.top) * H / r.height }; };
    return { cv, ctx, pos };
  }
  function rodarCanvas(area, def, api) {
    const W = def.W || 800, H = def.H || 450;
    const { cv, ctx, pos } = montarCanvas(area, W, H);
    const jogo = def.criar(Object.assign({}, api, { W, H, ctx, D }));
    let ult = performance.now(), vivo = true, raf = 0;
    const loop = t => { if (!vivo) return; const dt = Math.min(0.05, (t - ult) / 1000); ult = t;
      if (!document.hidden) { try { jogo.update && jogo.update(dt); jogo.draw && jogo.draw(ctx); } catch (e) { console.warn(def.id, e); } }
      raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    const K = ev => { if (!cv.isConnected) return limpar(); if (ev.target && /input|textarea|select/i.test(ev.target.tagName)) return;
      if (jogo.tecla) { const usou = jogo.tecla(ev.key, ev.type === "keydown", ev); if (usou !== false && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(ev.key)) ev.preventDefault(); } };
    let apertado = false;
    cv.onpointerdown = ev => { apertado = true; cv.setPointerCapture(ev.pointerId); cv.focus({ preventScroll: true }); const p = pos(ev); jogo.desce && jogo.desce(p.x, p.y); };
    cv.onpointermove = ev => { const p = pos(ev); jogo.move && jogo.move(p.x, p.y, apertado); };
    cv.onpointerup = cv.onpointercancel = ev => { apertado = false; const p = pos(ev); jogo.sobe && jogo.sobe(p.x, p.y); };
    addEventListener("keydown", K); addEventListener("keyup", K);
    function limpar() { vivo = false; cancelAnimationFrame(raf); removeEventListener("keydown", K); removeEventListener("keyup", K); }
    setTimeout(() => cv.focus({ preventScroll: true }), 50);
    return limpar;
  }

  /* ---------------- tela: menu → como jogar → jogo → fim ---------------- */
  function abrir(box, opc) {
    // opc: { turma, ganhar(n, el), recordes: {id: pts}, salvarRecorde(id, pts) }
    let parar = () => {};
    const recordes = opc.recordes || {};
    function menu() {
      parar(); parar = () => {};
      const hoje = doDia(opc.turma), prox = proximos()[0];
      box.innerHTML = `<div class="jg-menu-topo"><h3>🎮 Escolha um jogo</h3><span class="ajuda">Os jogos de hoje · ${hoje.length} de ${liberados().length} liberados${prox ? ` · próximo jogo novo: <b>${esc(prox.ic)} ${esc(prox.nome)}</b> em ${prox.estreia.slice(8, 10)}/${prox.estreia.slice(5, 7)}` : ""}</span></div>
        <div class="jg-menu">${hoje.map(j => `<button type="button" class="jg-card ${j.cat}" data-j="${esc(j.id)}">${ehNovo(j) ? `<span class="jg-novo">🆕 NOVO</span>` : ""}<span class="jg-ic">${j.ic}</span><b>${esc(j.nome)}</b><small>${j.cat === "acao" ? "🕹️ Ação" : "💻 Informática"}${recordes[j.id] ? ` · ⭐ ${recordes[j.id]}` : ""}</small></button>`).join("")}</div>`;
      box.querySelectorAll("[data-j]").forEach(b => b.onclick = () => comoJogar(lista.find(j => j.id === b.dataset.j)));
    }
    function comoJogar(j) {
      parar();
      box.innerHTML = `<div class="jg-como"><div class="jg-como-topo"><h3>${j.ic} ${esc(j.nome)}</h3><button type="button" class="btn btn-sec btn-peq" data-x="menu">← Outros jogos</button></div>
        <div class="jg-como-corpo"><div class="jg-demo"><canvas width="360" height="220"></canvas><span class="jg-demo-tag">👀 Veja como se joga</span></div>
          <div><p class="jg-como-t">Como jogar:</p><ol class="jg-passos">${j.como.map(p => `<li>${p}</li>`).join("")}</ol>
          <p class="jg-controle">${j.controle || ""}</p>
          <button type="button" class="btn btn-grande btn-ok" data-x="jogar">▶️ Entendi, vamos jogar!</button></div></div></div>`;
      box.querySelector('[data-x="menu"]').onclick = menu;
      box.querySelector('[data-x="jogar"]').onclick = () => jogar(j);
      const cv = box.querySelector(".jg-demo canvas"), ctx = cv.getContext("2d"); let vivo = true, t0 = performance.now();
      const f = t => { if (!vivo || !cv.isConnected) return; ctx.clearRect(0, 0, 360, 220); try { j.demo(ctx, ((t - t0) / 1000) % (j.demoDur || 4), 360, 220, D); } catch (e) {} requestAnimationFrame(f); };
      requestAnimationFrame(f); parar = () => { vivo = false; };
      setTimeout(() => { const b = box.querySelector('[data-x="jogar"]'); b && b.focus(); }, 50);
    }
    function jogar(j) {
      parar();
      box.innerHTML = `<div class="jg-topo"><h3>${j.ic} ${esc(j.nome)}</h3><span class="jg-rec">${recordes[j.id] ? `⭐ Seu recorde: <b>${recordes[j.id]}</b>` : "⭐ Faça o seu primeiro recorde!"}</span>
          <button type="button" class="btn btn-sec btn-peq" data-x="como">❓ Como jogar</button><button type="button" class="btn btn-sec btn-peq" data-x="menu">🎮 Outros jogos</button></div>
        <div class="jg-area"></div>`;
      box.querySelector('[data-x="menu"]').onclick = menu;
      box.querySelector('[data-x="como"]').onclick = () => comoJogar(j);
      const area = box.querySelector(".jg-area");
      let ultPonto = 0, acabou = false;
      const api = {
        ponto: el => { const t = Date.now(); if (t - ultPonto < 1200) return; ultPonto = t; opc.ganhar && opc.ganhar(5, el || area); },
        fim: pts => { if (acabou) return; acabou = true; setTimeout(() => fim(j, Math.max(0, Math.round(pts || 0))), 500); },
        avatar: opc.avatar, area, esc, R, D
      };
      parar = j.tipo === "dom" ? (j.criar(api) || (() => {})) : rodarCanvas(area, j, api);
    }
    function fim(j, pts) {
      if (!box.isConnected) return;
      const novo = pts > (recordes[j.id] || 0);
      if (novo) { recordes[j.id] = pts; opc.salvarRecorde && opc.salvarRecorde(j.id, pts); }
      const ov = document.createElement("div"); ov.className = "jg-fim";
      ov.innerHTML = `<div class="jg-fim-cx"><p class="jg-fim-t">🏁 Fim de jogo!</p><p class="jg-fim-p">${pts} <small>pontos no jogo</small></p>
        ${novo ? `<p class="jg-fim-rec">⭐ Novo recorde pessoal!</p>` : recordes[j.id] ? `<p>Seu recorde: <b>${recordes[j.id]}</b></p>` : ""}
        <div class="row-btns"><button type="button" class="btn btn-grande btn-ok" data-x="de-novo">🔁 Jogar de novo</button><button type="button" class="btn btn-sec" data-x="menu">🎮 Outro jogo</button></div></div>`;
      const area = box.querySelector(".jg-area"); if (!area) return; area.appendChild(ov);
      ov.querySelector('[data-x="de-novo"]').onclick = () => jogar(j); ov.querySelector('[data-x="menu"]').onclick = menu;
      ov.querySelector('[data-x="de-novo"]').focus();
    }
    lerLiberados().then(() => { if (box.isConnected && box.querySelector(".jg-menu")) menu(); });
    // opc.abrirJogo: abre direto o “como jogar” de um jogo (prévia do professor no painel e testes)
    const direto = opc.abrirJogo && lista.find(j => j.id === opc.abrirJogo);
    if (direto) comoJogar(direto); else menu();
    return () => parar();
  }

  /* imagem do avatar do aluno para usar dentro dos jogos (ex.: a corrida) */
  function imagemAvatar(av, px) {
    return new Promise(res => { try { if (!av || !P.avatar) return res(null);
      const svg = P.avatar.svg(av, px || 96), img = new Image(); img.onload = () => res(img); img.onerror = () => res(null);
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.includes("xmlns") ? svg : svg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"')); } catch (e) { res(null); } });
  }

  P.jogosEspera = { registrar, lista, abrir, doDia, liberados, proximos, ESTREIA, D, imagemAvatar, rr };
})();

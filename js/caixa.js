/* ============================================================
   🧰 CAIXA DE FERRAMENTAS DO ALUNO (26/11/2026, pedido do professor) — Prof. Welington Laignier
   Um botão 🧰 fixo no canto da tela do aluno. Ao tocar, abre um painel que NÃO é janela: não escurece a tela,
   não trava a tarefa e pode ser ARRASTADO pela barra de cima para qualquer lugar (ou encolhido), para nunca
   cobrir os números da tarefa. Tudo dentro da página: o aluno não sai da tela cheia.
     🧮 Calculadora · 📏 Conversor de tamanhos (bit, byte, KB, MB, GB, TB; 1 GB ≈ 1000 MB, como nas apostilas)
     📖 Dicionário da missão (os termos da aula) · 📝 Rascunho (some quando o aluno sai)
   Aparece: nas missões e na apostila. Na 📝 prova, só se o professor ligar "com caixa de ferramentas" ao ligar a prova
   (e sem o 📖 dicionário, que daria as respostas). Não aparece na sala de espera, nos jogos, no início nem no painel.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const semTags = s => String(s || "").replace(/<[^>]+>/g, "");
  const ss = { get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} } };
  let bt = null, cx = null, aba = "calc", balao = null, mao = null;
  const tiraBalao = () => { if (balao) { balao.remove(); balao = null; } };
  const tiraMao = () => { if (mao) { mao.forEach(x => x.remove()); mao = null; } if (cx) cx.classList.remove("cx-pisca"); };
  // 26/11/2026 (professor): o aviso e a mãozinha aparecem UMA vez por dia para cada aluno (na 1ª entrada do dia, em casa ou na escola)
  const ls = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  const hojeK = () => { const d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); };
  const chaveAluno = nome => { const s = P.sess && P.sess.get(); return "portalJK:cx:" + nome + ":" + ((s && (s.alunoIds || s.nomes || []).join("+")) || "x"); };
  const jaHoje = nome => ls.get(chaveAluno(nome)) === hojeK();
  const marcaHoje = nome => ls.set(chaveAluno(nome), hojeK());

  /* ---------- onde a caixa aparece ---------- */
  function rotaAtual() { const h = location.hash || ""; return h.split("/")[1] || ""; }
  function pode() {
    const s = P.sess && P.sess.get && P.sess.get(); if (!s) return false;
    const r = rotaAtual();
    if (r === "missao" || r === "apostila") return true;
    if (r === "prova") return !!P.caixaProva;
    return false;
  }
  const naProva = () => rotaAtual() === "prova";

  /* ---------- 🧮 calculadora (conta feita aqui, sem eval) ---------- */
  function calcular(txt) {
    const t = String(txt).replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, ".").replace(/\s+/g, "");
    const tok = t.match(/\d+(?:\.\d+)?|[+\-*/()%]/g); if (!tok || tok.join("") !== t) throw new Error("conta");
    let i = 0;
    const prim = () => { const x = tok[i];
      if (x === "-") { i++; return -prim(); } if (x === "+") { i++; return prim(); }
      if (x === "(") { i++; const v = soma(); if (tok[i] !== ")") throw new Error("parênteses"); i++; return pct(v); }
      if (x != null && /\d/.test(x)) { i++; return pct(parseFloat(x)); } throw new Error("conta"); };
    const pct = v => { if (tok[i] === "%") { i++; return v / 100; } return v; };
    const mult = () => { let v = prim(); while (tok[i] === "*" || tok[i] === "/") { const o = tok[i++], b = prim(); if (o === "/" && b === 0) throw new Error("zero"); v = o === "*" ? v * b : v / b; } return v; };
    const soma = () => { let v = mult(); while (tok[i] === "+" || tok[i] === "-") { const o = tok[i++], b = mult(); v = o === "+" ? v + b : v - b; } return v; };
    const v = soma(); if (i !== tok.length || !isFinite(v)) throw new Error("conta"); return v;
  }
  const num = v => (Math.round(v * 1e6) / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 6 });
  function abaCalc(c) {
    let expr = ss.get("cx:calc") || "", hist = "";
    c.innerHTML = `<div class="cx-calc"><div class="cx-visor" aria-live="polite"><small class="cx-hist"></small><b class="cx-expr"></b></div>
      <div class="cx-teclas">${["C", "⌫", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ",", "(", ")"].map(k => `<button type="button" data-k="${k}" class="${/[÷×+\-%()]/.test(k) ? "op" : /C|⌫/.test(k) ? "lim" : ""}">${k}</button>`).join("")}<button type="button" data-k="=" class="ig">=</button></div>
      <p class="cx-dica">Dá para digitar no teclado também. ✖️ é vezes e ➗ é dividir.</p></div>`;
    const ex = c.querySelector(".cx-expr"), hi = c.querySelector(".cx-hist");
    const pinta = () => { ex.textContent = expr || "0"; hi.textContent = hist; ss.set("cx:calc", expr); };
    const tecla = k => {
      if (k === "C") { expr = ""; hist = ""; }
      else if (k === "⌫") expr = expr.slice(0, -1);
      else if (k === "=") { if (!expr) return; try { const v = calcular(expr); hist = expr + " ="; expr = num(v).replace(/\./g, ""); } catch (e) { hist = e.message === "zero" ? "Não dá para dividir por zero." : "Confira a conta."; } }
      else { if (expr.length < 40) expr += k; }
      pinta(); };
    c.querySelectorAll("[data-k]").forEach(b => b.onclick = () => tecla(b.dataset.k));
    c.tecla = e => { const m = { "*": "×", "x": "×", "X": "×", "/": "÷", ".": ",", "Enter": "=", "=": "=", "Backspace": "⌫", "Escape": "C", "Delete": "C" }; const k = m[e.key] || e.key;
      if (/^[0-9+\-×÷%(),]$/.test(k) || ["=", "⌫", "C"].includes(k)) { e.preventDefault(); tecla(k); } };
    pinta();
  }

  /* ---------- 📏 conversor de tamanhos ---------- */
  const UN = [["bit", "bits"], ["B", "bytes"], ["KB", "KB (quilobytes)"], ["MB", "MB (megabytes)"], ["GB", "GB (gigabytes)"], ["TB", "TB (terabytes)"]];
  const emBits = { bit: 1, B: 8, KB: 8e3, MB: 8e6, GB: 8e9, TB: 8e12 };
  function abaConv(c) {
    c.innerHTML = `<div class="cx-conv"><div class="cx-lin"><input type="text" inputmode="decimal" id="cx-cv-n" value="${esc(ss.get("cx:cvn") || "1")}" aria-label="Quanto">
      <select id="cx-cv-u" aria-label="Unidade">${UN.map(([u, r]) => `<option value="${u}" ${u === (ss.get("cx:cvu") || "GB") ? "selected" : ""}>${r}</option>`).join("")}</select></div>
      <div class="cx-cv-res"></div>
      <p class="cx-dica">📌 Como nas apostilas: cada medida é <b>cerca de mil vezes</b> a anterior (1 GB ≈ 1000 MB) e <b>1 byte = 8 bits</b>. O computador às vezes usa 1024 em vez de 1000.</p></div>`;
    const n = c.querySelector("#cx-cv-n"), u = c.querySelector("#cx-cv-u"), out = c.querySelector(".cx-cv-res");
    const pinta = () => { ss.set("cx:cvn", n.value); ss.set("cx:cvu", u.value);
      const v = parseFloat(String(n.value).replace(/\./g, "").replace(",", ".")); if (!isFinite(v)) { out.innerHTML = `<p class="cx-dica">Digite um número.</p>`; return; }
      const de = u.value, bits = v * emBits[de], iDe = UN.findIndex(x => x[0] === de);
      out.innerHTML = `<table>${UN.map(([k], i) => { const r = bits / emBits[k], f = emBits[de] / emBits[k];
          const passo = i === iDe ? "← você digitou" : f >= 1 ? `${num(v)} × ${num(f)}` : `${num(v)} ÷ ${num(1 / f)}`;
          return `<tr class="${i === iDe ? "eu" : ""}"><td>${num(r)}</td><td>${k === "B" ? "bytes" : k === "bit" ? "bits" : k}</td><td class="cx-passo">${esc(passo)}</td></tr>`; }).join("")}</table>`; };
    n.oninput = pinta; u.onchange = pinta; pinta();
  }

  /* ---------- 📖 dicionário da missão ---------- */
  function termosAgora() {
    const p = (location.hash || "").split("/"), aid = p[2], mid = p[3], C = P.conteudo && P.conteudo[aid]; if (!C) return [];
    const junta = ms => { const out = [], vistos = new Set(); ms.forEach(m => (m.termos || []).forEach(t => { const k = semTags(t.termo).toLowerCase(); if (!t.termo || vistos.has(k)) return; vistos.add(k); out.push({ termo: semTags(t.rotulo || t.termo), def: t.def }); })); return out; };
    const daMissao = mid ? junta(C.missoes.filter(m => m.id === mid)) : [];
    return daMissao.length ? daMissao : junta(C.missoes);   // na apostila (ou missão sem termos): as palavras de todas as missões
  }
  function abaDic(c) {
    const ts = termosAgora();
    c.innerHTML = `<div class="cx-dic"><input type="search" id="cx-dic-q" placeholder="Procurar uma palavra…" aria-label="Procurar no dicionário"><div class="cx-dic-l"></div></div>`;
    const q = c.querySelector("#cx-dic-q"), l = c.querySelector(".cx-dic-l");
    const norm = s => semTags(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    const pinta = () => { const x = norm(q.value), f = ts.filter(t => !x || norm(t.termo + " " + t.def).includes(x));
      l.innerHTML = f.length ? f.map(t => `<details><summary>${esc(t.termo)}</summary><div>${t.def}</div></details>`).join("") : `<p class="cx-dica">${ts.length ? "Nenhuma palavra encontrada." : "Esta parte não tem palavras no dicionário."}</p>`; };
    q.oninput = pinta; pinta();
  }

  /* ---------- 📝 rascunho ---------- */
  function abaRasc(c) {
    const s = P.sess && P.sess.get(), k = "cx:rasc:" + ((s && (s.alunoIds || s.nomes || []).join("+")) || "x");
    c.innerHTML = `<div class="cx-rasc"><textarea id="cx-r" rows="7" placeholder="Anote aqui as suas contas e ideias. Só você vê, e some quando você sair do portal.">${esc(ss.get(k) || "")}</textarea>
      <div class="cx-lin"><button type="button" class="cx-mini" id="cx-r-lp">🧹 Limpar</button><span class="cx-dica">Não vale como resposta: responda na tarefa. 🙂</span></div></div>`;
    const t = c.querySelector("#cx-r"); t.oninput = () => ss.set(k, t.value);
    c.querySelector("#cx-r-lp").onclick = () => { t.value = ""; ss.set(k, ""); t.focus(); };
  }

  /* ---------- o painel arrastável ---------- */
  const ABAS = [["calc", "🧮", "Calculadora", abaCalc], ["conv", "📏", "Conversor", abaConv], ["dic", "📖", "Dicionário", abaDic], ["rasc", "📝", "Rascunho", abaRasc]];
  const abasDisp = () => ABAS.filter(a => !(naProva() && a[0] === "dic"));
  function posicionar(x, y) {
    const w = cx.offsetWidth, h = cx.offsetHeight;
    x = Math.max(4, Math.min(innerWidth - w - 4, x)); y = Math.max(4, Math.min(innerHeight - Math.min(h, 60) - 4, y));
    cx.style.left = x + "px"; cx.style.top = y + "px"; ss.set("cx:pos", JSON.stringify([x, y]));
  }
  function abrir() {
    if (cx) { fechar(); return; }
    cx = document.createElement("section"); cx.className = "cx-caixa"; cx.setAttribute("aria-label", "Caixa de ferramentas"); cx.tabIndex = -1;
    const ds = abasDisp(); if (!ds.find(a => a[0] === aba)) aba = ds[0][0];
    cx.innerHTML = `<header class="cx-cab" title="Segure aqui e arraste para mudar a caixa de lugar"><span class="cx-arr" aria-hidden="true">⠿</span><b>🧰 Caixa de ferramentas</b>
        <button type="button" class="cx-min" title="Encolher / abrir">➖</button><button type="button" class="cx-x" title="Fechar">✕</button></header>
      <nav class="cx-abas">${ds.map(([k, ic, r]) => `<button type="button" data-a="${k}" class="${k === aba ? "on" : ""}">${ic} ${r}</button>`).join("")}</nav><div class="cx-corpo"></div>`;
    document.body.appendChild(cx);
    const corpo = cx.querySelector(".cx-corpo");
    const mostrar = k => { aba = k; cx.querySelectorAll("[data-a]").forEach(b => b.classList.toggle("on", b.dataset.a === k)); corpo.tecla = null; ds.find(a => a[0] === k)[3](corpo); ss.set("cx:aba", k); };
    cx.querySelectorAll("[data-a]").forEach(b => b.onclick = () => mostrar(b.dataset.a));
    cx.querySelector(".cx-x").onclick = fechar;
    cx.querySelector(".cx-min").onclick = () => { cx.classList.toggle("min"); cx.querySelector(".cx-min").textContent = cx.classList.contains("min") ? "➕" : "➖"; };
    // as teclas digitadas na caixa ficam na caixa (não vão para a tarefa nem para os atalhos da página)
    // tocou na caixa (fora de um campo): o teclado passa a digitar na calculadora
    cx.addEventListener("pointerdown", e => { if (!e.target.closest("input, textarea, select")) setTimeout(() => { if (cx && !cx.contains(document.activeElement) || document.activeElement === document.body) cx && cx.focus({ preventScroll: true }); }, 0); });
    cx.addEventListener("keydown", e => { e.stopPropagation(); if (aba === "calc" && corpo.tecla && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) corpo.tecla(e); });
    // arrastar pela barra de cima (mouse, caneta ou dedo)
    const cab = cx.querySelector(".cx-cab"); let ini = null;
    cab.addEventListener("pointerdown", e => { if (e.target.closest("button")) return; ini = { x: e.clientX, y: e.clientY, l: cx.offsetLeft, t: cx.offsetTop }; cab.setPointerCapture(e.pointerId); cx.classList.add("arrastando"); e.preventDefault(); });
    cab.addEventListener("pointermove", e => { if (ini) posicionar(ini.l + e.clientX - ini.x, ini.t + e.clientY - ini.y); });
    const solta = () => { ini = null; cx.classList.remove("arrastando"); }; cab.addEventListener("pointerup", solta); cab.addEventListener("pointercancel", solta);
    let p0 = null; try { p0 = JSON.parse(ss.get("cx:pos") || "null"); } catch (e) {}
    mostrar(ss.get("cx:aba") && ds.find(a => a[0] === ss.get("cx:aba")) ? ss.get("cx:aba") : aba);
    if (p0) posicionar(p0[0], p0[1]); else posicionar(66, Math.round(innerHeight / 2 - cx.offsetHeight / 2));   // ao lado da aba
    try { cx.focus({ preventScroll: true }); } catch (e) {}
    if (!jaHoje("mao")) mostrarMao();
    bt.classList.add("on"); bt.setAttribute("aria-expanded", "true");
  }
  function mostrarMao() {
    tiraMao(); if (!cx) return; const r = cx.querySelector(".cx-cab").getBoundingClientRect();
    const m = document.createElement("div"); m.className = "cx-mao"; m.textContent = "👆"; m.setAttribute("aria-hidden", "true");
    m.style.left = (r.left + 34) + "px"; m.style.top = (r.top + 12) + "px";
    const b = document.createElement("div"); b.className = "cx-mao-balao"; b.setAttribute("role", "status");
    b.innerHTML = `✋ <b>Segure aqui e arraste</b> para levar a caixa para outro lugar e ver a tarefa. O ➖ encolhe a caixa.<button type="button" class="cx-bl-ok">👍 OK, entendi</button>`;
    document.body.appendChild(m); document.body.appendChild(b); mao = [m, b]; cx.classList.add("cx-pisca");
    // o balão fica AO LADO da caixa (direita; sem espaço, esquerda; sem espaço nenhum, embaixo), nunca em cima da barra que ele explica
    const bw = b.offsetWidth, bh = b.offsetHeight, R = cx.getBoundingClientRect();
    if (R.right + 14 + bw < innerWidth - 8) { b.style.left = (R.right + 14) + "px"; b.style.top = Math.max(8, r.top) + "px"; b.classList.add("lado-dir"); }
    else if (R.left - 14 - bw > 8) { b.style.left = (R.left - 14 - bw) + "px"; b.style.top = Math.max(8, r.top) + "px"; }
    else { b.style.left = Math.max(8, Math.min(innerWidth - bw - 8, R.left)) + "px"; b.style.top = Math.min(innerHeight - bh - 8, R.bottom + 10) + "px"; }
    b.querySelector(".cx-bl-ok").onclick = () => { marcaHoje("mao"); tiraMao(); };
    cx.querySelector(".cx-cab").addEventListener("pointerdown", () => { marcaHoje("mao"); tiraMao(); }, { once: true });
  }
  function fechar() { tiraMao(); if (cx) cx.remove(); cx = null; if (bt) { bt.classList.remove("on"); bt.setAttribute("aria-expanded", "false"); } }
  function atualizar() {
    const ok = pode();
    if (!ok) { fechar(); tiraBalao(); if (bt) { bt.remove(); bt = null; } return; }
    if (!bt) { bt = document.createElement("button"); bt.type = "button"; bt.className = "cx-bt"; bt.title = "Caixa de ferramentas: calculadora, conversor, dicionário e rascunho";
      bt.setAttribute("aria-expanded", "false"); bt.innerHTML = `<span aria-hidden="true">🧰</span><small>Ferramentas</small><i aria-hidden="true"><b>🧮</b><b>📏</b><b>📖</b><b>📝</b></i>`; bt.onclick = () => { if (balao) { marcaHoje("aviso"); tiraBalao(); } abrir(); }; document.body.appendChild(bt);
      // 👋 "cheguei!": na 1ª entrada do dia, a aba balança 3 vezes e um aviso (efeito vidro) explica o que tem nela, com "OK, entendi"
      if (!jaHoje("aviso") && !naProva()) { bt.classList.add("chegou"); setTimeout(() => bt && bt.classList.remove("chegou"), 2200);
        balao = document.createElement("div"); balao.className = "cx-balao"; balao.setAttribute("role", "dialog"); balao.setAttribute("aria-label", "Sua caixa de ferramentas");
        balao.innerHTML = `<b class="cx-bl-tit">🧰 Sua caixa de ferramentas</b><p>Está aqui na aba laranja, ao lado. Toque nela quando precisar:</p>
          <ul><li>🧮 <b>Calculadora</b>: para as contas</li><li>📏 <b>Conversor</b>: KB, MB, GB e TB</li><li>📖 <b>Dicionário</b>: as palavras da aula</li><li>📝 <b>Rascunho</b>: para anotar</li></ul>
          <p class="cx-bl-p">Ela abre por cima da tarefa e você pode arrastar para o lado. Não sai da tela cheia. 😉</p><button type="button" class="cx-bl-ok">👍 OK, entendi</button>`;
        document.body.appendChild(balao); balao.querySelector(".cx-bl-ok").onclick = () => { marcaHoje("aviso"); tiraBalao(); }; } }
    if (cx && naProva() && aba === "dic") { fechar(); abrir(); }   // entrou na prova com o dicionário aberto: tira o dicionário
  }
  addEventListener("hashchange", () => setTimeout(atualizar, 50));
  addEventListener("resize", () => { if (cx) posicionar(cx.offsetLeft, cx.offsetTop); });
  document.addEventListener("DOMContentLoaded", () => setTimeout(atualizar, 300));
  setTimeout(atualizar, 800); setInterval(atualizar, 3000);   // entrou ou saiu do portal sem trocar de página
  P.caixa = { atualizar, abrir, fechar, calcular };
})();

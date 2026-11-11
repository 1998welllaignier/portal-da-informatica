/* ============================================================
   🏆 PÓDIO DA AULA + 🧍 AVATAR DO ALUNO — Prof. Welington Laignier
   - Avatar: o aluno monta o bonequinho logo depois de digitar o código (com tempo).
     Fica em progresso/<alunoId>_avatar (o aluno só grava o próprio documento).
   - Pontos do pódio: só para a festa da aula. NÃO são nota e não vão para o boletim.
     Cada atividade da missão do dia vale pontos (Mão na massa 60, Básico 100, Desafio 150,
     Turbo 200); errar e pedir dica diminuem; terminar o Básico cedo dá bônus de rapidez.
     O total vira uma nota de 0 a 1000 sobre o máximo possível da apostila do aluno,
     por isso a Trilha 👣 (com menos atividades) disputa em pé de igualdade.
   - O pódio final fica em config/podio_<turma> (o professor grava ao finalizar a aula).
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ======================= 🧍 AVATAR ======================= */
  const PELE = ["#fde3cf", "#f6cfa8", "#e3a878", "#c98a58", "#93592b", "#5e3a1f"];
  const COR = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#0d9488", "#3b82f6", "#1e3a8a", "#a855f7", "#ec4899", "#111827", "#ffffff", "#9ca3af"];
  const CAB = ["#1c1208", "#4a2c15", "#8b5a2b", "#d9a95b", "#e5e7eb", "#b91c1c", "#7c3aed", "#2563eb"];
  const OPC = {
    cabelo: [["careca", "Careca"], ["curto", "Curto"], ["espetado", "Espetado"], ["cacheado", "Cacheado"], ["black", "Black power"], ["longo", "Longo"], ["coque", "Coque"], ["trancas", "Tranças"], ["moicano", "Moicano"]],
    blusa: [["uniforme", "Uniforme da escola"], ["lisa", "Lisa"], ["listras", "Listras"], ["faixa", "Faixa"], ["futebol", "⚽ Camisa de futebol"], ["regata", "Regata"]],
    calca: [["calca", "Calça"], ["bermuda", "Bermuda"], ["saia", "Saia"]],
    bone: [["nenhum", "Sem boné"], ["frente", "Boné"], ["tras", "Aba para trás"]],
    estilo: [["lisa", "Lisa"], ["vertical", "Listras em pé"], ["horizontal", "Listras deitadas"], ["faixa", "Faixa"], ["metade", "Metade e metade"], ["gola", "Gola e mangas"]],
    oculos: [["nenhum", "Sem óculos"], ["redondo", "Redondo"], ["quadrado", "Quadrado"], ["escuro", "Escuro"]]
  };
  const PADRAO = { pele: 2, cabelo: "curto", corCabelo: 1, blusa: "uniforme", cor1: 10, cor2: 6, numero: 10, calca: "calca", corCalca: 6, estilo: "vertical", corCalcao: 10, corMeiao: 10, corChuteira: 9, bone: "nenhum", corBone: 0, oculos: "nenhum" };
  const norm = a => { const x = Object.assign({}, PADRAO, a || {}); if (x.blusa === "time") x.blusa = "futebol"; return x; };

  function svg(a0, px) {
    const a = norm(a0), pele = PELE[a.pele] || PELE[2], c1 = COR[a.cor1] || COR[5], c2 = COR[a.cor2] || COR[10], cc = CAB[a.corCabelo] || CAB[1], cl = COR[a.corCalca] || COR[6], cb = COR[a.corBone] || COR[0];
    const sombra = "rgba(0,0,0,.18)";
    let atras = "", cabelo = "", blusa = "", pernas = "";
    // pernas e calça (camisa de futebol = uniforme de jogador: calção, meião e chuteira)
    const fut = a.blusa === "futebol";
    if (fut) { const ch = COR[a.corCalcao] || COR[10], me = COR[a.corMeiao] || COR[10], cu = COR[a.corChuteira] || COR[9];
      pernas = `<rect x="44" y="128" width="13" height="20" rx="5" fill="${pele}"/><rect x="63" y="128" width="13" height="20" rx="5" fill="${pele}"/><rect x="43" y="140" width="15" height="19" rx="4" fill="${me}" stroke="rgba(0,0,0,.12)"/><rect x="62" y="140" width="15" height="19" rx="4" fill="${me}" stroke="rgba(0,0,0,.12)"/><rect x="43" y="142" width="15" height="2.5" fill="${c2}"/><rect x="62" y="142" width="15" height="2.5" fill="${c2}"/><rect x="39" y="110" width="42" height="24" rx="7" fill="${ch}" stroke="rgba(0,0,0,.12)"/><rect x="59" y="118" width="2" height="16" fill="${sombra}"/>`
        + `<path d="M38 158 Q49 154 60 160 Q49 166 38 162 Z" fill="${cu}"/><path d="M82 158 Q71 154 60 160 Q71 166 82 162 Z" fill="${cu}"/>`; }
    else if (a.calca === "bermuda") pernas = `<rect x="44" y="132" width="13" height="26" rx="5" fill="${pele}"/><rect x="63" y="132" width="13" height="26" rx="5" fill="${pele}"/><rect x="40" y="110" width="40" height="28" rx="7" fill="${cl}"/><rect x="59" y="118" width="2" height="18" fill="${sombra}"/>`;
    else if (a.calca === "saia") pernas = `<rect x="45" y="132" width="12" height="26" rx="5" fill="${pele}"/><rect x="63" y="132" width="12" height="26" rx="5" fill="${pele}"/><path d="M40 110 H80 L88 140 H32 Z" fill="${cl}"/>`;
    else pernas = `<rect x="41" y="110" width="18" height="50" rx="6" fill="${cl}"/><rect x="61" y="110" width="18" height="50" rx="6" fill="${cl}"/><rect x="40" y="110" width="40" height="12" rx="5" fill="${cl}"/>`;
    if (!fut) pernas += `<ellipse cx="49" cy="161" rx="11" ry="5.5" fill="#1f2937"/><ellipse cx="71" cy="161" rx="11" ry="5.5" fill="#1f2937"/>`;
    // blusa
    const uni = a.blusa === "uniforme", AZ = "#1e2f6b", mc = uni ? AZ : c1, corpo = uni ? "#ffffff" : c1;
    const mg = fut && (a.estilo === "gola" || a.estilo === "metade") ? c2 : c1;
    const manga = a.blusa === "regata" ? "" : fut ? `<rect x="22" y="74" width="16" height="22" rx="7" fill="${mg}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${a.estilo === "metade" ? c2 : mg}"/>` : uni ? `<rect x="22" y="74" width="16" height="22" rx="7" fill="${AZ}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${AZ}"/>` : `<rect x="22" y="74" width="16" height="22" rx="7" fill="${c1}"/><rect x="82" y="74" width="16" height="22" rx="7" fill="${c1}"/>`;
    const bracos = `<rect x="24" y="${a.blusa === "regata" ? 74 : 90}" width="12" height="${a.blusa === "regata" ? 38 : 22}" rx="6" fill="${pele}"/><rect x="84" y="${a.blusa === "regata" ? 74 : 90}" width="12" height="${a.blusa === "regata" ? 38 : 22}" rx="6" fill="${pele}"/><circle cx="30" cy="114" r="6.5" fill="${pele}"/><circle cx="90" cy="114" r="6.5" fill="${pele}"/>`;
    let estampa = "";
    if (uni) estampa = `<rect x="36" y="84" width="48" height="11" fill="${AZ}"/><rect x="36" y="80" width="48" height="1.6" fill="#facc15"/><rect x="36" y="81.6" width="48" height="1.6" fill="#22c55e"/><rect x="36" y="83.2" width="48" height="1.2" fill="#ef4444"/><rect x="70" y="86" width="9" height="7" rx="1.5" fill="#ffffff"/><rect x="71.5" y="87.5" width="6" height="4" fill="#3b82f6"/>`;
    if (a.blusa === "listras") estampa = [44, 54, 64, 74].map(x => `<rect x="${x}" y="70" width="5" height="46" fill="${c2}"/>`).join("");
    if (a.blusa === "faixa") estampa = `<path d="M36 72 L48 70 L86 112 L74 116 Z" fill="${c2}"/>`;
    if (fut) { const E = a.estilo;
      estampa = E === "vertical" ? [40, 50, 60, 70, 80].map(x => `<rect x="${x - 2.5}" y="68" width="5" height="50" fill="${c2}"/>`).join("")
        : E === "horizontal" ? [72, 84, 96, 108].map(y => `<rect x="36" y="${y}" width="48" height="6" fill="${c2}"/>`).join("")
        : E === "faixa" ? `<path d="M36 70 L48 68 L86 112 L74 118 Z" fill="${c2}"/>` : E === "metade" ? `<rect x="60" y="68" width="24" height="50" fill="${c2}"/>` : "";
      estampa += `<text x="60" y="104" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="18" fill="${E === "lisa" || E === "gola" ? c2 : "#ffffff"}" stroke="${E === "lisa" || E === "gola" ? "none" : "rgba(0,0,0,.55)"}" stroke-width="1.2">${Math.max(0, Math.min(99, +a.numero || 0))}</text>`; }
    if (a.blusa === "time") estampa = `<rect x="36" y="70" width="48" height="8" fill="${c2}"/><text x="60" y="104" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="20" fill="${c2}">${Math.max(0, Math.min(99, +a.numero || 0))}</text>`;
    blusa = `${manga}${bracos}<rect x="36" y="68" width="48" height="50" rx="10" fill="${corpo}" stroke="${uni ? "#cbd5e1" : "none"}"/><g clip-path="url(#tr)">${estampa}</g>${a.blusa === "regata" ? `<path d="M50 68 Q60 80 70 68" fill="${pele}"/>` : uni ? `<path d="M50 68 L60 80 L70 68" fill="${AZ}"/><path d="M53 68 L60 76 L67 68" fill="${pele}"/>` : fut ? `<path d="M50 68 L60 79 L70 68" fill="${c2}"/><path d="M53 68 L60 75 L67 68" fill="${pele}"/>` : `<path d="M52 68 Q60 76 68 68" fill="${pele}"/>`}`;
    // cabelo
    const topo = `<path d="M36 42 Q36 16 60 16 Q84 16 84 42 Q78 30 60 28 Q42 30 36 42 Z" fill="${cc}"/>`;
    if (a.cabelo === "curto") cabelo = topo;
    if (a.cabelo === "espetado") cabelo = `<path d="M36 40 L38 22 L44 30 L48 14 L54 26 L60 10 L66 26 L72 14 L76 30 L82 22 L84 40 Q76 30 60 29 Q44 30 36 40 Z" fill="${cc}"/>`;
    if (a.cabelo === "cacheado") cabelo = [[40, 30], [48, 22], [58, 19], [68, 20], [77, 26], [82, 35], [37, 38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${cc}"/>`).join("");
    if (a.cabelo === "black") { atras = `<circle cx="60" cy="34" r="33" fill="${cc}"/>`; cabelo = ""; }
    if (a.cabelo === "longo") { atras = `<path d="M33 40 Q32 14 60 14 Q88 14 87 40 L90 86 Q76 92 70 70 L50 70 Q44 92 30 86 Z" fill="${cc}"/>`; cabelo = topo; }
    if (a.cabelo === "coque") { cabelo = topo + `<circle cx="60" cy="12" r="10" fill="${cc}"/>`; }
    if (a.cabelo === "trancas") { atras = `<rect x="30" y="38" width="9" height="44" rx="4.5" fill="${cc}"/><rect x="81" y="38" width="9" height="44" rx="4.5" fill="${cc}"/><circle cx="34.5" cy="84" r="4" fill="${c2}"/><circle cx="85.5" cy="84" r="4" fill="${c2}"/>`; cabelo = topo; }
    if (a.cabelo === "moicano") cabelo = `<path d="M54 30 Q56 6 60 4 Q64 6 66 30 Z" fill="${cc}"/>`;
    // boné
    let bone = "";
    if (a.bone !== "nenhum") {
      bone = `<path d="M35 36 Q35 13 60 13 Q85 13 85 36 Z" fill="${cb}"/><circle cx="60" cy="14" r="2.5" fill="${sombra}"/>`;
      bone += a.bone === "frente" ? `<path d="M58 34 Q80 30 98 38 Q80 42 58 38 Z" fill="${cb}"/><path d="M58 37 Q80 40 98 38" stroke="${sombra}" stroke-width="2" fill="none"/>` : `<path d="M62 34 Q40 30 22 36 Q40 40 62 38 Z" fill="${cb}"/>`;
    }
    // óculos
    let oc = "";
    if (a.oculos === "redondo") oc = `<g fill="none" stroke="#111827" stroke-width="2.4"><circle cx="51" cy="44" r="7"/><circle cx="69" cy="44" r="7"/><path d="M58 44 H62"/></g>`;
    if (a.oculos === "quadrado") oc = `<g fill="none" stroke="#111827" stroke-width="2.4"><rect x="43" y="38" width="15" height="11" rx="3"/><rect x="62" y="38" width="15" height="11" rx="3"/><path d="M58 43 H62"/></g>`;
    if (a.oculos === "escuro") oc = `<g fill="#111827"><rect x="42" y="38" width="16" height="11" rx="4"/><rect x="62" y="38" width="16" height="11" rx="4"/><rect x="57" y="41" width="6" height="2.5"/></g>`;
    const olhos = a.oculos === "escuro" ? "" : `<circle cx="51" cy="44" r="2.8" fill="#1f2937"/><circle cx="69" cy="44" r="2.8" fill="#1f2937"/><circle cx="52" cy="43" r="1" fill="#fff"/><circle cx="70" cy="43" r="1" fill="#fff"/>`;
    const uid = "a" + Math.random().toString(36).slice(2, 7);
    return `<svg class="avatar-svg" viewBox="0 0 120 170" width="${px || 120}" height="${Math.round((px || 120) * 170 / 120)}" role="img" aria-label="Avatar">
      <defs><clipPath id="tr"><rect x="36" y="68" width="48" height="50" rx="10"/></clipPath></defs>
      ${pernas}${blusa}${atras}<rect x="54" y="58" width="12" height="14" rx="4" fill="${pele}"/>
      <circle cx="35" cy="45" r="5" fill="${pele}"/><circle cx="85" cy="45" r="5" fill="${pele}"/><circle cx="60" cy="42" r="25" fill="${pele}"/>
      ${olhos}<circle cx="45" cy="52" r="3.5" fill="#f87171" opacity=".35"/><circle cx="75" cy="52" r="3.5" fill="#f87171" opacity=".35"/>
      <path d="M52 54 Q60 61 68 54" stroke="#7f1d1d" stroke-width="2.4" fill="none" stroke-linecap="round"/>${cabelo}${bone}${oc}</svg>`.replace(/id="tr"/g, `id="${uid}"`).replace(/url\(#tr\)/g, `url(#${uid})`);
  }

  /* editor com cronômetro. resolve com o avatar escolhido (salvo, anterior ou padrão) */
  function editor(mount, { nome, anterior, segundos }) {
    return new Promise(resolve => {
      let a = norm(anterior), fim = Date.now() + (segundos || 90) * 1000, acabou = false;
      const sw = (lista, campo, cls) => lista.map((c, i) => `<button type="button" class="av-sw ${cls || ""}" data-c="${campo}" data-v="${i}" style="--c:${c}" aria-label="cor ${i + 1}"></button>`).join("");
      const op = campo => OPC[campo].map(([v, r]) => `<button type="button" class="av-op" data-c="${campo}" data-v="${v}">${r}</button>`).join("");
      const el = mount(`<section class="tela av-tela"><div class="av-cx">
        <div class="av-topo"><h1>🧍 Monte o seu avatar${nome ? `, <span>${esc(nome)}</span>` : ""}!</h1>
          <div class="av-tempo"><span id="av-s">90</span>s<i><b id="av-b"></b></i></div></div>
        <div class="av-grid"><div class="av-prev" id="av-prev"></div>
          <div class="av-opcoes">
            <p class="av-t">🎨 Cor da pele</p><div class="av-row">${sw(PELE, "pele")}</div>
            <p class="av-t">💇 Cabelo</p><div class="av-row">${op("cabelo")}</div><div class="av-row">${sw(CAB, "corCabelo")}</div>
            <p class="av-t">👕 Blusa</p><div class="av-row">${op("blusa")}</div><div class="av-row"><small>Cor:</small> ${sw(COR, "cor1")}</div><div class="av-row"><small>Detalhe:</small> ${sw(COR, "cor2")}</div>
            <div class="av-fut" hidden><p class="av-t">⚽ Uniforme de jogador</p><div class="av-row"><small>Modelo:</small> ${op("estilo")}</div>
              <div class="av-row av-num"><small>Número da camisa:</small> <input type="number" id="av-num" min="0" max="99" value="${a.numero}"></div>
              <div class="av-row"><small>Calção:</small> ${sw(COR, "corCalcao")}</div><div class="av-row"><small>Meião:</small> ${sw(COR, "corMeiao")}</div><div class="av-row"><small>Chuteira:</small> ${sw(COR, "corChuteira")}</div>
              <p class="ajuda">Dica: monte com as cores do seu time do coração! 💚💛</p></div>
            <div class="av-calca"><p class="av-t">👖 Calça</p><div class="av-row">${op("calca")}</div><div class="av-row">${sw(COR, "corCalca")}</div></div>
            <p class="av-t">🧢 Boné</p><div class="av-row">${op("bone")}</div><div class="av-row">${sw(COR, "corBone")}</div>
            <p class="av-t">👓 Óculos</p><div class="av-row">${op("oculos")}</div>
          </div></div>
        <div class="row-btns av-bts"><button type="button" class="btn btn-grande btn-ok" id="av-ok">✔ Pronto! Salvar o meu avatar</button>
          <button type="button" class="btn btn-sec" id="av-pula">Pular${anterior ? " (usar o que já tenho)" : " (usar o padrão)"}</button></div>
        <p class="ajuda">Quando o tempo acabar, você entra com o avatar ${anterior ? "que já tinha salvo" : "padrão"}. O avatar aparece no placar e no pódio da aula.</p></div></section>`);
      const pinta = () => {
        el.querySelector("#av-prev").innerHTML = svg(a, 220);
        el.querySelectorAll("[data-c]").forEach(b => b.setAttribute("aria-pressed", String(a[b.dataset.c]) === String(b.dataset.v)));
        el.querySelector(".av-fut").hidden = a.blusa !== "futebol"; el.querySelector(".av-calca").hidden = a.blusa === "futebol";
      };
      el.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { const c = b.dataset.c, v = b.dataset.v; a[c] = /^\d+$/.test(v) && c !== "numero" && !OPC[c] ? +v : v;
        if (c === "blusa" && v === "futebol" && a.cor1 === 10 && a.cor2 === 6) { a.cor1 = 3; a.cor2 = 10; } pinta(); });
      el.querySelector("#av-num").oninput = e => { a.numero = Math.max(0, Math.min(99, +e.target.value || 0)); pinta(); };
      const sair = v => { if (acabou) return; acabou = true; clearInterval(iv); resolve(v); };
      el.querySelector("#av-ok").onclick = () => sair({ avatar: a, salvo: true });
      el.querySelector("#av-pula").onclick = () => sair({ avatar: norm(anterior), salvo: false });
      const iv = setInterval(() => {
        const r = Math.max(0, Math.ceil((fim - Date.now()) / 1000));
        el.querySelector("#av-s").textContent = r; el.querySelector("#av-b").style.width = (100 * r / (segundos || 90)) + "%";
        el.querySelector(".av-tempo").classList.toggle("fim", r <= 10);
        if (r <= 0) { P.toast && P.toast("⏰ Acabou o tempo!"); sair({ avatar: norm(anterior), salvo: false }); }
      }, 250);
      pinta();
    });
  }

  /* depois do código: cada aluno da sessão monta o avatar (dupla: um de cada vez) */
  async function fluxoLogin(mount, infos, segundos) {
    const N = P.nuvem; if (!N || !N.app) return;
    for (let i = 0; i < infos.length; i++) {
      const x = infos[i], ref = N.app(i).db.collection("progresso").doc(x.alunoId + "_avatar");
      let anterior = null; try { const sn = await ref.get(); anterior = sn.exists ? sn.data().avatar : null; } catch (e) {}
      const r = await editor(mount, { nome: (x.nome || "").split(" ")[0], anterior, segundos });
      if (r.salvo) try { await ref.set({ alunoId: x.alunoId, turma: x.turma || P.sess.get().turma, tipo: "avatar", avatar: r.avatar, atualizado: Date.now() }, { merge: true }); } catch (e) { console.warn("avatar", e); }
    }
  }

  /* ======================= 🏆 PONTOS ======================= */
  const BASE = { pratica: 60, basico: 100, desafio: 150, turbo: 200 }, BONUS = 300;
  function pontosDoc(p, entradaTs, hoje) {
    if (!p || !p.aid || !p.mid || !P.montarMissao || !P.conteudo[p.aid]) return null;
    let mm; try { mm = P.montarMissao(p.aid, p.mid); } catch (e) { return null; }
    let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (e) {}
    let max = 0, raw = 0;
    mm.pages.forEach(pg => { const base = BASE[pg.id]; if (!base) return;
      (pg.atividades || []).forEach(at => { const T = (P.tipos || {})[at.tipo] || {}; if (T.semStatus || at.opcional) return;
        max += base; const st = atv[at.id]; if (!st || !st.status) return;
        let f = st.status === "certo" ? 1 : st.status === "ajuda" ? .6 : st.status === "enviado" ? .8 : .5;
        f -= .12 * (st.tentativas || 0) + .15 * (st.dicas || 0) + (st.viuResolucao ? .2 : 0);
        raw += base * Math.max(.3, Math.min(1, f)); }); });
    const dur = (P.catalogo.duracaoAula || 75) * 60000, okEm = (p.basicoOkEm || {})[hoje];
    if (p.basicoOk && okEm && entradaTs) raw += BONUS * Math.max(.1, Math.min(1, 1 - (okEm - entradaTs) / dur));
    max += BONUS;
    return { pontos: max ? Math.round(1000 * raw / max) : 0, okB: !!p.basicoOk, okEm: okEm || null };
  }
  const nomeCurto = n => { const p = String(n || "").trim().split(/\s+/); return p.length > 1 ? p[0] + " " + p[p.length - 1][0] + "." : p[0] || "?"; };
  /* ranking da missão do dia. alunos = cadastro da turma; prog = documentos de progresso da turma */
  function ranking(alunos, prog, mid, hoje) {
    const porId = {}; alunos.forEach(a => { porId[a.id] = a; });
    const ent = {}, av = {}; prog.forEach(p => { if (p.tipo === "entrada" && p.dias && p.dias[hoje]) ent[p.alunoId] = p.dias[hoje]; if (p.tipo === "avatar") av[p.alunoId] = p.avatar; });
    const docs = {}; prog.forEach(p => { if (p.mid === mid && p.dias && p.dias[hoje] && porId[p.alunoId]) { const o = docs[p.alunoId]; if (!o || (p.atualizado || 0) > (o.atualizado || 0)) docs[p.alunoId] = p; } });
    const vistos = new Set(), out = [];
    Object.keys(ent).concat(Object.keys(docs)).forEach(id => {
      if (vistos.has(id) || !porId[id]) return;
      const p = docs[id], par = ((p && p.dupla) || []).filter(x => porId[x]), ids = [id].concat(par);
      ids.forEach(x => vistos.add(x));
      const r = (p && pontosDoc(p, Math.min(...ids.map(x => ent[x] || Infinity).filter(isFinite)) || ent[id], hoje)) || { pontos: 0, okB: false, okEm: null };
      out.push({ ids, nomes: ids.map(x => nomeCurto(porId[x].nome)), avatares: ids.map(x => av[x] || null), pontos: r.pontos, okB: r.okB, okEm: r.okEm, trilha: ids.some(x => porId[x].trilha), ult: p ? p.atualizado || 0 : 0 });
    });
    out.sort((x, y) => y.pontos - x.pontos || (x.okEm || 9e15) - (y.okEm || 9e15) || x.nomes[0].localeCompare(y.nomes[0], "pt-BR"));
    out.forEach((e, i) => { e.pos = i > 0 && out[i - 1].pontos === e.pontos && out[i - 1].okEm === e.okEm ? out[i - 1].pos : i + 1; });
    return out;
  }

  /* ======================= 🎉 telas do placar/pódio ======================= */
  const MED = ["🥇", "🥈", "🥉"];
  function linhaPlacar(e, i) {
    return `<div class="pl-lin ${i < 3 ? "top top" + (i + 1) : ""}" data-k="${esc(e.ids.join("+"))}" style="top:${i * 74}px">
      <span class="pl-pos">${i < 3 ? MED[i] : e.pos + "º"}</span><span class="pl-av">${e.avatares.map(a => svg(a, 38)).join("")}</span>
      <span class="pl-nome">${e.nomes.map(esc).join(" & ")}${e.trilha ? " 👣" : ""}${e.okB ? ` <small class="pl-ok">✔ Básico</small>` : ""}</span>
      <span class="pl-pts">${e.pontos}<small> pts</small></span></div>`;
  }
  function podioHTML(rk) {
    const top = [1, 0, 2].map(i => rk[i]).map((e, k) => { if (!e) return `<div class="pd-col vazio"></div>`; const lug = [2, 1, 3][k];
      return `<div class="pd-col l${lug}" style="--d:${[1.4, 2.8, 0][k]}s"><div class="pd-av">${e.avatares.map(a => svg(a, lug === 1 ? 120 : 96)).join("")}</div>
        <div class="pd-nome">${e.nomes.map(esc).join(" & ")}</div><div class="pd-pts">${e.pontos} pts</div><div class="pd-bloco">${MED[lug - 1]}<b>${lug}º</b></div></div>`; }).join("");
    const resto = rk.slice(3);
    return `<div class="pd-palco">${top}</div>${resto.length ? `<div class="pd-resto">${resto.map(e => `<span class="pd-r"><b>${e.pos}º</b> ${e.avatares.map(a => svg(a, 26)).join("")} ${e.nomes.map(esc).join(" & ")} · ${e.pontos}</span>`).join("")}</div>` : ""}`;
  }
  function confete(raiz) {
    const cores = ["#facc15", "#f97316", "#22c55e", "#3b82f6", "#ec4899", "#a855f7"];
    for (let i = 0; i < 120; i++) { const c = document.createElement("i"); c.className = "pd-conf"; c.style.cssText = `left:${Math.random() * 100}%;background:${cores[i % 6]};animation-delay:${3 + Math.random() * 2.5}s;animation-duration:${2.5 + Math.random() * 2}s;transform:rotate(${Math.random() * 360}deg)`; raiz.appendChild(c); }
  }

  P.avatar = { svg, editor, fluxoLogin, PADRAO };
  P.podio = { ranking, pontosDoc, linhaPlacar, podioHTML, confete, nomeCurto, MED };
})();

/* ============================================================
   PROVA DO BIMESTRE — no próprio portal (no lugar do Wayground)
   Portal da Informática · Professor Welington Laignier
   ------------------------------------------------------------
   - O professor liga o "📝 Dia de prova" da turma no painel.
   - O aluno digita o código e cai direto na prova da sua série
     (ou da Trilha Passo a Passo, se tiver 👣).
   - 10 questões, 0,5 cada (até 5,0), uma tentativa, sem dicas,
     questões e alternativas embaralhadas.
   - Ao finalizar: nota na tela, envio para o painel e saída automática.
   - Recuperação: o professor libera uma 2ª tentativa no painel.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  P.provas = {};
  P.registrarProva = (id, d) => { P.provas[id] = d; };
  const N = P.nuvem;
  const { esc } = P.util;
  const cat = () => P.catalogo;
  const hash = (aid, qid, r) => P.provaHash(aid, qid, r);
  const VALOR = 0.5;

  /* ---------- utilidades ---------- */
  function aidDaProva(s) {
    const base = cat().apostilas.find(a => a.serie === s.serie && !a.oculta && !a.trilha);
    if (!base) return null;
    if (s.trilha) { const t = cat().apostilas.find(x => x.trilha && x.base === base.id); if (t) return t.id; }
    return base.id;
  }
  function carregar(aid) {
    if (P.provas[aid]) return Promise.resolve();
    return new Promise((ok, err) => {
      const sc = document.createElement("script");
      sc.src = "dados/provas/" + aid + ".js?v=" + (window.PORTAL_VERSAO || "");
      sc.onload = ok; sc.onerror = () => err(new Error("Prova não encontrada: " + aid));
      document.head.appendChild(sc);
    });
  }
  // embaralhamento que se repete para o mesmo aluno (se a página recarregar, a ordem não muda)
  function semente(txt) { let h = 2166136261; for (let i = 0; i < txt.length; i++) { h ^= txt.charCodeAt(i); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function embaralhar(arr, rnd) { const b = arr.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  const db = () => N.db();
  const fmt = n => n.toFixed(1).replace(".", ",");

  async function estado(s) {
    const cfgSnap = await db().collection("config").doc("prova_" + s.turma).get();
    const cfg = cfgSnap.exists ? cfgSnap.data() : {};
    const hojeStr = N.hoje();
    const ate = cfg.ate || null;
    const aberta = !!cfg.aberta && cfg.dia === hojeStr && !(ate && Date.now() > ate);
    const alunoId = s.alunoIds[0];
    const aid = aidDaProva(s);
    const t1 = await db().collection("provas").doc(alunoId + "_" + aid + "_1").get();
    const rec = (cfg.recuperacao || []).includes(alunoId);
    let tentativa = null;
    if (!t1.exists) tentativa = 1;
    else if (rec) { const t2 = await db().collection("provas").doc(alunoId + "_" + aid + "_2").get(); if (!t2.exists) tentativa = 2; }
    return { aberta, ate, aid, alunoId, tentativa, feita: t1.exists ? t1.data() : null };
  }

  /* Chamado pelo portal antes de abrir as apostilas: se for dia de prova, devolve o endereço da prova */
  let ultimaChecagem = 0, ultimoDestino = null;
  P.prova = {
    async destino() {
      const s = P.sess.get();
      if (!s || !s.nuvem || !N || !N.pronto || (s.alunoIds || []).length !== 1) return null;
      if (Date.now() - ultimaChecagem < 20000) return ultimoDestino;
      ultimaChecagem = Date.now(); ultimoDestino = null;
      try {
        const e = await Promise.race([estado(s), new Promise(ok => setTimeout(() => ok(null), 4000))]);
        if (e && e.aberta && e.tentativa) ultimoDestino = "#/prova/" + e.aid;
      } catch (err) { console.warn(err); }
      return ultimoDestino;
    },
    abrir: telaProva,
    carregar
  };

  async function telaProva(mount, aidPedido) {
    const s = P.sess.get();
    if (!s) { location.hash = "#/"; return; }
    if ((s.alunoIds || []).length !== 1) {
      return mount(`<section class="tela"><div class="painel prova-aviso"><h1>📝 A prova é individual</h1>
        <p>Vocês entraram em dupla. Toquem em <strong>Sair</strong> e entrem <strong>um de cada vez</strong>, cada um com o seu código.</p></div></section>`);
    }
    const carregando = mount(`<section class="tela"><div class="painel"><h1>📝 Abrindo a prova…</h1></div></section>`);
    let e;
    try { e = await estado(s); } catch (err) {
      return mount(`<section class="tela"><div class="painel erro"><h1>Não foi possível abrir a prova</h1><p>Confira a internet e tente de novo.</p><p class="ajuda">${esc(err.message || err)}</p></div></section>`);
    }
    if (!e.aberta) {
      return mount(`<section class="tela"><div class="painel prova-aviso"><h1>📝 A prova não está aberta agora</h1>
        <p>A prova só abre no dia marcado, quando o professor liberar.</p><p><a class="btn" href="#/apostilas">Voltar para as apostilas</a></p></div></section>`);
    }
    if (!e.tentativa) {
      return mount(`<section class="tela"><div class="painel prova-fim"><h1>✅ Você já fez a prova</h1>
        <p>Sua prova já foi enviada${e.feita ? `: você acertou <strong>${e.feita.acertos} de 10</strong>` : ""}.</p>
        <p>Pode ir para casa! 🏠</p><button class="btn" id="pv-sair" type="button">Sair</button></div></section>`).querySelector("#pv-sair").onclick = sairAgora;
    }
    const aid = e.aid;
    if (aidPedido && aidPedido !== aid) { location.replace("#/prova/" + aid); return; }
    await carregar(aid);
    const Pv = P.provas[aid];
    const rnd = semente(e.alunoId + "|" + aid + "|" + e.tentativa);
    const ordem = embaralhar(Pv.questoes, rnd).map(q => ({ ...q, opcoes: q.tipo === "vf" ? q.opcoes : embaralhar(q.opcoes, rnd) }));
    const chave = "portalJK:prova:" + e.alunoId + ":" + aid + ":" + e.tentativa;
    let resp = {}; try { resp = JSON.parse(sessionStorage.getItem(chave) || "{}"); } catch (x) {}
    const guardar = () => { try { sessionStorage.setItem(chave, JSON.stringify(resp)); } catch (x) {} };
    const apost = P.apostila(aid);
    document.body.classList.toggle("modo-trilha", !!(apost && apost.trilha));

    const el = mount(`<section class="tela prova">
      <header class="prova-cab"><h1>📝 Prova do 4º bimestre${e.tentativa === 2 ? " · Recuperação" : ""}</h1>
        <p class="lead">${esc(s.nomes[0])} · ${esc(apost ? apost.titulo : "")}</p>
        <ul class="prova-regras"><li>✏️ <strong>10 questões</strong>. Cada uma vale <strong>0,5</strong>.</li><li>☝️ Escolha <strong>uma</strong> resposta em cada questão.</li><li>🔒 Você só pode enviar <strong>uma vez</strong>. Confira antes de finalizar.</li></ul></header>
      <ol class="prova-lista">${ordem.map((q, i) => `<li class="prova-q" data-q="${q.id}"><p class="prova-p"><span class="prova-n">${i + 1}</span>${q.tipo === "vf" ? "<em>Verdadeiro ou falso?</em> " : ""}${esc(q.p)}</p>
        <div class="prova-ops" role="radiogroup" aria-label="Questão ${i + 1}">${q.opcoes.map(o => `<button type="button" class="prova-op" role="radio" data-q="${q.id}" data-o="${esc(o)}" aria-checked="${resp[q.id] === o}">${q.tipo === "vf" ? (o === "Verdadeiro" ? "✅ " : "❌ ") : ""}${esc(o)}</button>`).join("")}</div></li>`).join("")}</ol>
      <div class="prova-rodape"><span class="prova-relogio" id="pv-rel" aria-live="polite"></span><span id="pv-cont"></span><button class="btn btn-grande" id="pv-fim" type="button">Finalizar prova</button></div>
      <div class="prova-conf" id="pv-conf" hidden><p><strong>Tem certeza?</strong> Depois de enviar, não dá para mudar as respostas.</p>
        <div class="row-btns"><button class="btn btn-grande" id="pv-ok" type="button">Sim, enviar a prova</button><button class="btn btn-sec" id="pv-volta" type="button">Voltar e conferir</button></div></div>
    </section>`);
    const cont = () => { const n = Object.keys(resp).length; el.querySelector("#pv-cont").textContent = `Respondidas: ${n} de 10`; el.querySelector("#pv-fim").disabled = n < 10; };
    el.querySelectorAll(".prova-op").forEach(b => b.onclick = () => {
      resp[b.dataset.q] = b.dataset.o; guardar();
      el.querySelectorAll(`.prova-op[data-q="${b.dataset.q}"]`).forEach(x => x.setAttribute("aria-checked", x === b ? "true" : "false"));
      cont();
    });
    cont();
    el.querySelector("#pv-fim").onclick = () => { el.querySelector("#pv-conf").hidden = false; el.querySelector("#pv-conf").scrollIntoView({ block: "center" }); };
    el.querySelector("#pv-volta").onclick = () => { el.querySelector("#pv-conf").hidden = true; };
    // relógio: conta até o horário-limite da turma; quando zera, envia sozinho
    let enviando = false, ivRel = null;
    const hm = ms => new Date(ms).toTimeString().slice(0, 5);
    const tic = () => {
      const r = el.querySelector("#pv-rel"); if (!r || !e.ate) { if (r) r.hidden = true; return; }
      const falta = e.ate - Date.now(), min = Math.ceil(falta / 60000);
      if (falta <= 0) { clearInterval(ivRel); r.textContent = "⏰ O tempo acabou"; if (!enviando) enviar(true); return; }
      r.textContent = `⏰ Até ${hm(e.ate)} · ${falta < 60000 ? "menos de 1 minuto" : "faltam " + min + " min"}`;
      r.classList.toggle("acabando", min <= 5);
    };
    tic(); ivRel = setInterval(tic, 5000);
    el.querySelector("#pv-ok").onclick = () => enviar(false);
    async function enviar(tempo) {
      if (enviando) return; enviando = true; clearInterval(ivRel);
      const b = el.querySelector("#pv-ok"); b.disabled = true; b.textContent = "Enviando…";
      const acertos = Pv.questoes.filter(q => resp[q.id] != null && hash(aid, q.id, resp[q.id]) === q.h).length;
      try {
        await db().collection("provas").doc(e.alunoId + "_" + aid + "_" + e.tentativa).set({
          alunoId: e.alunoId, turma: s.turma, aid, tentativa: e.tentativa, respostas: resp,
          acertos, nota: acertos * VALOR, enviadoEm: N.FV.serverTimestamp(), dia: N.hoje()
        });
      } catch (err) {
        enviando = false; b.disabled = false; b.textContent = "Sim, enviar a prova"; if (tempo) { el.querySelector("#pv-conf").hidden = false; }
        P.toast("Não foi possível enviar. Confira a internet e tente de novo."); console.error(err); return;
      }
      try { sessionStorage.removeItem(chave); } catch (x) {}
      ultimaChecagem = 0;
      const fim = mount(`<section class="tela"><div class="painel prova-fim"><h1>${tempo ? "⏰ O tempo acabou: prova enviada!" : "✅ Prova enviada!"}</h1>
        ${tempo ? "<p>As respostas que você marcou foram enviadas. As questões em branco contam como erradas.</p>" : ""}<p class="prova-nota">Você acertou <strong>${acertos} de 10</strong>.<br>Nota da prova: <strong>${fmt(acertos * VALOR)}</strong></p>
        <p>Sua nota já foi para o professor. <strong>Pode ir para casa!</strong> 🏠</p>
        <p class="ajuda" id="pv-cd">Saindo do portal em 15 segundos…</p>
        <button class="btn" id="pv-sair" type="button">Sair agora</button></div></section>`);
      fim.querySelector("#pv-sair").onclick = sairAgora;
      let t = 15; const iv = setInterval(() => { t--; const c = document.getElementById("pv-cd"); if (c) c.textContent = `Saindo do portal em ${t} segundos…`; if (t <= 0) { clearInterval(iv); sairAgora(); } }, 1000);
    }
  }
  async function sairAgora() {
    try { await N.sair(); } catch (x) {}
    P.sess.del(); document.body.classList.remove("modo-trilha"); location.hash = "#/";
  }
})();

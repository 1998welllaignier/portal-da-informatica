/* ============================================================
   PAINEL DO PROFESSOR — Portal da Informática
   Professor Welington Laignier
   ------------------------------------------------------------
   Só abre com a conta Google de professor (as regras do banco
   de dados recusam qualquer outra conta).
   Turmas, alunos, códigos, missões, presença, importação de
   listas e virada de ano. Nenhum nome de aluno fica no código.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const N = P.nuvem;
  if (!N || !N.pronto) return;
  const { esc, h } = P.util;
  const cat = () => P.catalogo;
  const db = () => N.db();
  const auth = () => N.auth();

  const todasTurmas = () => { const r = []; cat().series.forEach(s => s.turmas.forEach(t => r.push({ ...t, serie: s }))); return r; };
  const nomeTurma = id => { const t = todasTurmas().find(x => x.id === id); return t ? t.nome + (t.serie.id === "5" ? " (5º ano)" : "") : id; };
  const dataBR = d => { const [a, m, dd] = d.split("-"); return `${dd}/${m}/${a}`; };
  const semana = d => ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][new Date(d + "T12:00:00").getDay()];
  const novoId = () => "a" + Math.random().toString(36).slice(2, 9);
  const normNome = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  const arrumarNome = s => String(s || "").replace(/\s+/g, " ").trim();
  const toast = m => P.toast(m);

  function sorteiaCodigo(usados) {
    for (let i = 0; i < 5000; i++) {
      const c = String(1000 + Math.floor(Math.random() * 9000));
      if (usados.has(c) || /^(\d)\1{3}$/.test(c) || "0123456789".includes(c) || "9876543210".includes(c)) continue;
      usados.add(c); return c;
    }
    throw new Error("Sem códigos livres nesta turma.");
  }

  /* ---------------- leitura ---------------- */
  async function alunosDaTurma(tid) {
    const q = await db().collection("alunos").where("turma", "==", tid).get();
    return q.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }
  async function progressoDaTurma(tid) {
    const q = await db().collection("progresso").where("turma", "==", tid).get();
    return q.docs.map(d => ({ id: d.id, ...d.data() }));
  }
  async function codigosUsados(tid) {
    const q = await db().collection("acessos").where("turma", "==", tid).get();
    return new Set(q.docs.map(d => d.id.split("_").pop()));
  }

  /* ---------------- escrita ---------------- */
  async function lotes(ops) {
    for (let i = 0; i < ops.length; i += 400) {
      const b = db().batch();
      ops.slice(i, i + 400).forEach(f => f(b));
      await b.commit();
    }
  }
  async function adicionarAlunos(tid, lista, ano) {
    const usados = await codigosUsados(tid);
    const atuais = await alunosDaTurma(tid);
    const jaTem = new Set(atuais.map(a => normNome(a.nome)));
    const idsUsados = new Set(atuais.map(a => a.id));
    const ops = [], feitos = [];
    lista.forEach(x => {
      const nome = arrumarNome(x.nome);
      if (!nome || jaTem.has(normNome(nome))) return;
      let id = x.id && /^[A-Za-z0-9]{3,30}$/.test(x.id) ? x.id : novoId();
      if (idsUsados.has(id)) id = novoId();
      idsUsados.add(id); jaTem.add(normNome(nome));
      const codigo = sorteiaCodigo(usados);
      ops.push(b => b.set(db().collection("alunos").doc(id), { nome, turma: tid, codigo, ativo: true, ano, criadoEm: Date.now() }));
      ops.push(b => b.set(db().collection("acessos").doc(tid + "_" + codigo), { alunoId: id, turma: tid, ativo: true, nome }));
      feitos.push({ id, nome, codigo });
    });
    await lotes(ops);
    return feitos;
  }
  async function mudarAtivo(a, ativo) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { ativo }),
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: a.id, turma: a.turma, ativo, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })
    ]);
  }
  async function novoCodigo(a, novaTurma) {
    const tid = novaTurma || a.turma;
    const codigo = sorteiaCodigo(await codigosUsados(tid));
    await lotes([
      b => b.delete(db().collection("acessos").doc(a.turma + "_" + a.codigo)),
      b => b.update(db().collection("alunos").doc(a.id), { turma: tid, codigo, ativo: true, ...(novaTurma ? { turmaAnterior: a.turma, trocouEm: Date.now() } : {}) }),
      b => b.set(db().collection("acessos").doc(tid + "_" + codigo), { alunoId: a.id, turma: tid, ativo: true, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })
    ]);
    return codigo;
  }
  /* 📌 Apostila diferenciada: o código do aluno passa a abrir a Trilha Passo a Passo da série */
  async function marcarTrilha(a, on) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { trilha: on }),
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: a.id, turma: a.turma, ativo: a.ativo, nome: a.nome, ...(on ? { trilha: true } : {}) })
    ]);
  }
  async function renomear(a, nome) {
    await lotes([
      b => b.update(db().collection("alunos").doc(a.id), { nome }),
      b => b.update(db().collection("acessos").doc(a.turma + "_" + a.codigo), { nome })
    ]);
  }
  async function config() {
    const s = await db().collection("config").doc("geral").get();
    return Object.assign({ ano: new Date().getFullYear() }, s.exists ? s.data() : {});
  }

  /* ============================================================
     TELAS
     ============================================================ */
  let mountFn;
  const tela = html => mountFn(`<section class="tela painel-prof">${html}</section>`);
  const topo = (u, ativo) => `<nav class="migalhas"><a href="#/">Início</a> › <a href="#/painel">Painel do professor</a></nav>
    <div class="pp-cab"><div><h1>📊 Painel do professor</h1><p class="lead">${esc(cat().professor)} · ${esc(cat().escola)}</p></div>
      <div class="pp-user"><span>${esc(u.email)}</span><button class="btn btn-sec btn-peq" id="pp-sair" type="button">Sair do painel</button></div></div>
    <nav class="pp-abas">${[["aula", "🎤 Aula"], ["", "🏫 Turmas"], ["diario", "📒 Diário"], ["presenca", "🗓️ Presença"], ["prova", "📝 Prova"], ["importar", "📥 Importar alunos"], ["ano", "📅 Ano letivo"]].map(([k, r]) =>
      `<a href="#/painel${k ? "/" + k : ""}" class="${ativo === k ? "atual" : ""}">${r}</a>`).join("")}</nav>${ajudaAba(ativo)}`;
  /* ❓ quadro "Para que serve e como usar" de cada aba (fica fechado; o professor abre quando quiser) */
  const AJUDA = {
    aula: ["Use durante a aula, projetando ou no seu computador.", [
      "<b>📣 Avisos para falar à turma</b>: aparecem no topo com a fala pronta. Depois de falar, toque em “✔ Já avisei esta turma” (o aviso some só daquela turma, neste computador).",
      "<b>Escolha a turma e a missão</b> (M1, M2…). Aparece o roteiro da aula com as falas, as respostas de cada atividade e quantos alunos já entraram e concluíram o Básico.",
      "<b>👀 Abrir a apostila do aluno</b>: abre, numa aba nova, a apostila exatamente como o aluno vê. Nada do que você fizer ali conta.",
      "<b>📌 Missão de hoje</b>: toque em “Definir … como Missão de hoje”. Quando o aluno digitar o código, ele cai direto nessa missão. Vale só para hoje.",
      "<b>🔒 Travar só nela</b> (opcional): as tarefas das outras missões fecham hoje. Os textos continuam abertos. Quem você liberou individualmente (falta, reposição) continua podendo fazer as outras.",
      "<b>Tarefas desta turma</b> (aparece quando a trava de horário está ligada): libera a turma toda agora, fecha antes da hora ou volta ao normal.",
      "<b>🧩 Apoios</b>: o que fazer com cada aluno atípico da turma. Só você vê."]],
    "": ["A lista de alunos de cada turma, com códigos e progresso.", [
      "<b>Toque no nome do aluno</b> para: gerar novo código, corrigir o nome, mudar de turma, marcar 🧩 (tem PEI), escrever os 📝 Apoios, usar a 👣 Trilha Passo a Passo, marcar 🧪 aluno de teste, liberar as tarefas fora do horário só para ele e marcar que ele frequenta a aula de outra turma.",
      "<b>🏠 Estuda em casa</b>: marque o aluno que faz as missões em casa e entrega a apostila. O nome dele ganha 🏠 em todas as listas e, no Diário, a presença fica J (justificada) sozinha; o Básico e o ★ você lança conferindo a apostila.",
      "<b>🧪 Aluno de teste</b> não conta na presença, no diário, nas notas nem nos relatórios. Use nos seus próprios cadastros.",
      "<b>👣 Trilha</b>: o aluno passa a abrir a apostila mais simples da série (e faz a prova da Trilha)."]],
    diario: ["O Diário de Classe: chamada, vistos, frequência, notas e registro das aulas.", [
      "<b>✅ Chamada</b>: escolha a data. O que veio do portal aparece com ⚡ (entrou com o código, concluiu o Básico, completou o Desafio ou o Turbo). Você só corrige: o que você marca vale mais que o ⚡.",
      "<b>P</b> presente, <b>F</b> falta, <b>J</b> falta justificada. Quem veio mas não entrou no portal: toque em P.",
      "<b>Básico</b>: toque para avançar — ◐ Parcial (não vale nota) → ✓ Básico (1,0) → ✓✓ ×2 (reposição) → sem visto. <b>Desafio/Turbo</b>: 0,25 cada.",
      "<b>🗓️ Frequência</b> e <b>🧮 Boletim</b> são calculados sozinhos. A nota da prova do portal entra sozinha; digite só a prova em papel (0 a 5) e a recuperação (0 a 10).",
      "<b>📝 Registro</b>: o que aconteceu em cada aula. <b>🔔 Lembretes</b>: aparecem no topo da chamada da turma."]],
    presenca: ["Quem entrou no portal em cada dia, com o horário e o que fez.", [
      "Abra o dia para ver os presentes, os ausentes e quem concluiu o Básico.",
      "<b>🧩 Alunos atípicos que frequentam</b>: quantas vezes cada aluno com PEI entrou no portal.",
      "O <b>relatório da aula</b> era usado para lançar no diário antigo. Agora o 📒 Diário faz isso sozinho."]],
    prova: ["A prova do bimestre, feita no portal.", [
      "<b>Antes de ligar</b>: confira as missões marcadas. A prova só cobra o que a turma estudou (o painel marca pelas aulas que já aconteceram).",
      "<b>📝 Ligar o Dia de prova</b>: o aluno digita o código e cai direto na prova. O relógio vai até o horário-limite; quando acaba, a prova é enviada sozinha.",
      "<b>3 alternativas</b>: toque no aluno 🧩 cujo PEI pede prova adaptada.",
      "<b>Liberar recuperação</b>: abre uma 2ª tentativa só para aquele aluno. Vale a maior nota.",
      "<b>⏹️ Encerrar</b> ao fim da aula. As notas vão sozinhas para o 🧮 Boletim do Diário."]],
    importar: ["Colocar as listas de alunos no portal.", [
      "Cole a lista da turma (um nome por linha). Cada aluno ganha um código de 4 números.",
      "Imprima os cartões com os códigos para entregar aos alunos."]],
    ano: ["Configurações gerais.", [
      "<b>🔒 Trava de horário</b>: ligada, as tarefas só abrem no dia e na hora da aula da turma (15 minutos de folga antes e depois). Os textos ficam sempre abertos. Desligada, tudo fica aberto.",
      "<b>Começar novo ano</b>: só no início do ano letivo. Desativa todos os alunos (o histórico fica guardado)."]]
  };
  const ajudaAba = k => { const a = AJUDA[k]; return a ? `<details class="pp-ajuda"><summary>❓ Para que serve esta aba e como usar</summary><p>${a[0]}</p><ul>${a[1].map(x => `<li>${x}</li>`).join("")}</ul></details>` : ""; };
  function ligarSair(el) { el.querySelector("#pp-sair").onclick = async () => { await auth().signOut(); location.hash = "#/painel"; }; }

  async function entrar() {
    const u = auth().currentUser;
    if (u && !u.isAnonymous && u.email === N.EMAIL_PROFESSOR) return u;
    const el = tela(`<nav class="migalhas"><a href="#/">Início</a> › Painel do professor</nav>
      <div class="painel pp-login"><h1>📊 Painel do professor</h1>
        <p>${esc(cat().portal)} · <strong>${esc(cat().professor)}</strong></p>
        <p>Entre com a <strong>conta Google de professor</strong>. Os alunos não têm acesso a esta área.</p>
        <button class="btn btn-grande" id="g" type="button">Entrar com o Google</button>
        <p class="erro" id="e" role="alert" hidden></p>
        <p class="ajuda">Use este painel só no seu computador. No computador dos alunos, saia do painel ao terminar.</p></div>`);
    return new Promise(ok => {
      el.querySelector("#g").onclick = async () => {
        const e = el.querySelector("#e"); e.hidden = true;
        try {
          if (u && u.isAnonymous) await auth().signOut();
          const prov = new firebase.auth.GoogleAuthProvider();
          prov.setCustomParameters({ prompt: "select_account", login_hint: N.EMAIL_PROFESSOR });
          const r = await auth().signInWithPopup(prov);
          if (r.user.email !== N.EMAIL_PROFESSOR) { await auth().signOut(); e.textContent = "Esta conta não é a do professor. Entre com " + N.EMAIL_PROFESSOR + "."; e.hidden = false; return; }
          ok(r.user);
        } catch (err) {
          e.textContent = /popup|blocked/i.test(err.code || "") ? "O navegador bloqueou a janela de entrada. Permita pop-ups para este site e tente de novo." :
            /unauthorized-domain|operation-not-supported/i.test(err.code || "") ? "Abra o painel pelo endereço do GitHub (1998welllaignier.github.io), não pela pasta do computador." : "Não foi possível entrar: " + (err.message || err);
          e.hidden = false;
        }
      };
    });
  }

  /* -------- Turmas: visão geral de uma turma -------- */
  async function telaTurmas(u, tid) {
    const turmas = todasTurmas();
    tid = tid || sessionStorage.getItem("painel:turma") || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "") + `<div class="painel pp-barra">
        <label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
        <label><input type="checkbox" id="inat"> mostrar desativados</label>
        <span class="pp-acoes"><button class="btn btn-sec btn-peq" id="add" type="button">➕ Adicionar aluno</button>
        <button class="btn btn-sec btn-peq" id="cart" type="button">🖨️ Cartões com os códigos</button>
        <button class="btn btn-sec btn-peq" id="csv" type="button">📥 Planilha (CSV)</button>
        <button class="btn btn-sec btn-peq" id="att" type="button">🔄 Atualizar</button></span></div>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/turma/" + e.target.value; };
    el.querySelector("#att").onclick = () => telaTurmas(u, t.id);
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id && !a.oculta);
    await Promise.all(cat().apostilas.filter(a => a.serie === t.serie.id).map(a => P.carregarApostila(a.id).catch(() => null)));
    const [alunos, prog] = await Promise.all([alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const pm = {}; prog.forEach(p => { (pm[p.alunoId] = pm[p.alunoId] || []).push(p); });
    const missoes = []; aps.forEach(a => { const C = P.conteudo[a.id]; if (C) C.missoes.forEach(m => missoes.push({ aid: a.id, m })); });
    const corpo = el.querySelector("#corpo");
    function desenhar() {
      const verInat = el.querySelector("#inat").checked;
      const lista = alunos.filter(a => verInat || a.ativo);
      if (!alunos.length) { corpo.innerHTML = `<div class="painel"><p>Nenhum aluno cadastrado nesta turma ainda.</p><p>Use <strong>➕ Adicionar aluno</strong> ou a aba <a href="#/painel/importar">📥 Importar alunos</a>.</p></div>`; return; }
      const cel = (a, x) => {
        const p = (pm[a.id] || []).find(q => (q.aid === x.aid || (cat().apostilas.find(y => y.id === q.aid) || {}).base === x.aid) && q.mid === x.m.id);
        if (!p) return `<td class="pp-c vazio" title="não começou">—</td>`;
        const b = p.basico || [0, 0], d = p.desafio || [0, 0];
        const tit = `Básico ${b[0]}/${b[1]}` + (d[1] ? ` · Desafio ${d[0]}/${d[1]}` : "") + (p.dias ? ` · dias: ${Object.keys(p.dias).sort().map(dataBR).join(", ")}` : "");
        return `<td class="pp-c ${p.basicoOk ? "ok" : "meio"} pp-clic" title="${esc(tit)} · clique para ver as respostas" data-ver="${esc(p.id)}" tabindex="0">${p.basicoOk ? "✔" : `${b[0]}/${b[1]}`}${d[1] && d[0] === d[1] ? "⭐" : ""}</td>`;
      };
      const dias = a => { const s = new Set(); (pm[a.id] || []).forEach(p => Object.keys(p.dias || {}).forEach(d => s.add(d))); return s.size; };
      corpo.innerHTML = `<div class="painel pp-tabela-wrap"><p class="ajuda">✔ Básico concluído · ⭐ Desafio completo · 3/5 = andamento do Básico · — não começou. Passe o mouse para ver os detalhes. <strong>${alunos.filter(a => a.ativo).length}</strong> alunos ativos.</p>
        <table class="pp-tabela"><thead><tr><th>Aluno</th><th>Código</th><th title="dias em que entrou no portal">Dias</th>${missoes.map(x => `<th title="${esc(x.m.titulo)}">${esc(x.m.icone)}<br><small>${esc(x.m.id.toUpperCase())}</small></th>`).join("")}<th></th></tr></thead>
        <tbody>${lista.map(a => `<tr class="${a.ativo ? "" : "inativo"}"><td>${a.atipico ? '<span title="Aluno atípico (tem PEI)">🧩</span> ' : ""}${esc(a.nome)}${a.trilha ? ' <span title="Usa a Trilha Passo a Passo">👣</span>' : ""}${a.emCasa ? ' <span title="Estuda em casa: lançar pela apostila">🏠</span>' : ""}${a.ativo ? "" : " <small>(desativado)</small>"}</td><td class="pp-cod">${esc(a.codigo)}</td><td>${dias(a)}</td>${missoes.map(x => cel(a, x)).join("")}
          <td><button class="btn btn-link btn-peq" data-a="${a.id}" type="button">⚙️</button></td></tr>`).join("")}</tbody></table></div>`;
      corpo.querySelectorAll("[data-a]").forEach(b => b.onclick = () => menuAluno(alunos.find(a => a.id === b.dataset.a)));
      corpo.querySelectorAll("[data-ver]").forEach(td => { const f = () => verRespostas(prog.find(p => p.id === td.dataset.ver)); td.onclick = f; td.onkeydown = e => { if (e.key === "Enter") f(); }; });
    }
    el.querySelector("#inat").onchange = desenhar;
    desenhar();

    function verRespostas(p) {
      if (!p) return;
      const a = alunos.find(x => x.id === p.alunoId) || { nome: "?" };
      let atv = {}; try { atv = typeof p.atv === "string" ? JSON.parse(p.atv) : (p.atv || {}); } catch (e) {}
      const { m, pages } = P.montarMissao(p.aid, p.mid);
      const sit = st => ({ certo: "✔ certo sem ajuda", ajuda: "✔ com ajuda", enviado: "📝 enviada (professor confere)", feito: "✔ feita" }[st && st.status] || "⬜ não feita");
      const resp = (at, st) => {
        if (!st) return "";
        const T = P.tipos[at.tipo] || {};
        let r = "";
        if (st.resposta) r = Object.values(st.resposta).map(x => `<blockquote>${esc(x).replace(/\n/g, "<br>")}</blockquote>`).join("");
        else if (st.conf) r = Object.values(st.conf).map(x => `<code>${esc(x)}</code>`).join(" · ");
        else if (T.resumoResposta) { try { r = T.resumoResposta(at, st); } catch (e) {} }
        return r ? `<div class="pp-resp">${r}</div>` : "";
      };
      const itens = [];
      pages.forEach(pg => (pg.atividades || []).forEach(at => { if ((P.tipos[at.tipo] || {}).semStatus) return; const st = atv[at.id];
        itens.push(`<li><strong>${esc(P.util.semTags(at.titulo || ""))}</strong> <small>(${esc(pg.rotulo)})</small><br>${sit(st)}${st && st.tentativas ? ` · ${st.tentativas} erro(s)` : ""}${resp(at, st)}</li>`); }));
      const dlg = h(`<dialog class="pp-dlg pp-dlg-larga"><h2>${esc(a.nome)}</h2><p>${esc(m.icone)} ${esc(m.titulo)}</p><ol class="pp-resps">${itens.join("")}</ol>
        <form method="dialog"><button class="btn">Fechar</button></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    }

    function menuAluno(a) {
      const dlg = h(`<dialog class="pp-dlg"><form method="dialog"><h2>${a.atipico ? "🧩 " : ""}${a.teste ? "🧪 " : ""}${a.emCasa ? "🏠 " : ""}${esc(a.nome)}</h2>${a.emCasa ? `<p class="pp-casa">🏠 <strong>Estuda em casa</strong>${a.emCasaObs ? ": " + esc(a.emCasaObs) : ""}. Lance pelo 📒 Diário (J na presença; Básico e ★ conferindo a apostila).</p>` : ""}<p>${esc(nomeTurma(a.turma))} · código <strong>${esc(a.codigo)}</strong> · ${a.ativo ? "ativo" : "desativado"}${a.outraTurma ? ` · também frequenta a aula do ${esc(nomeTurma(a.outraTurma))}` : ""}</p>
        <div class="pp-dlg-btns">
          <button class="btn btn-sec" value="cod" type="button" data-x="cod">🔑 Gerar novo código</button>
          <button class="btn btn-sec" value="nome" type="button" data-x="nome">✏️ Corrigir nome</button>
          <button class="btn btn-sec" type="button" data-x="turma">🔀 Mudar de turma</button>
          <button class="btn btn-sec" type="button" data-x="atipico">${a.atipico ? "🧩 Tirar a marcação de aluno atípico" : "🧩 Marcar como aluno atípico (tem PEI)"}</button>
          ${a.atipico ? `<button class="btn btn-sec" type="button" data-x="apoio">📝 Apoios na aula (só você vê)</button>` : ""}
          <button class="btn btn-sec" type="button" data-x="trilha">${a.trilha ? "👣 Tirar a Trilha Passo a Passo" : "👣 Usar a Trilha Passo a Passo (apostila diferenciada)"}</button>
          <button class="btn btn-sec" type="button" data-x="casa">${a.emCasa ? "🏠 Tirar “estuda em casa”" : "🏠 Marcar: estuda em casa (entrega a apostila)"}</button>
          <button class="btn btn-sec" type="button" data-x="teste">${a.teste ? "🧪 Voltar a ser aluno comum" : "🧪 Marcar como aluno de teste (não conta na presença, no diário, nas notas e nos relatórios)"}</button>
          <button class="btn btn-sec" type="button" data-x="libera">🔓 Liberar as tarefas fora do horário (só este aluno)</button>
          <button class="btn btn-sec" type="button" data-x="outra">🏫 Frequenta a aula de outra turma</button>
          <button class="btn btn-sec" type="button" data-x="ativo">${a.ativo ? "⛔ Desativar (saiu da escola)" : "✅ Reativar"}</button>
          <button class="btn" value="x">Fechar</button></div></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal();
      dlg.addEventListener("close", () => dlg.remove());
      dlg.querySelectorAll("[data-x]").forEach(b => b.onclick = async () => {
        const x = b.dataset.x;
        try {
          if (x === "cod") { if (!confirm("Gerar um código novo? O código antigo deixa de funcionar.")) return; const c = await novoCodigo(a); alert(`Novo código de ${a.nome}: ${c}`); }
          if (x === "nome") { const n = arrumarNome(prompt("Nome completo:", a.nome)); if (!n || n === a.nome) return; await renomear(a, n); }
          if (x === "turma") {
            const opc = todasTurmas().filter(y => y.id !== a.turma);
            const r = prompt("Para qual turma? Digite exatamente: " + opc.map(y => y.id).join(", "));
            const nt = opc.find(y => y.id.toLowerCase() === String(r || "").trim().toLowerCase()); if (!nt) { if (r) alert("Turma não encontrada."); return; }
            const c = await novoCodigo(a, nt.id); alert(`${a.nome} agora está no ${nomeTurma(nt.id)}. Novo código: ${c}. O histórico continua guardado.`);
          }
          if (x === "atipico") { await db().collection("alunos").doc(a.id).update({ atipico: !a.atipico }); }
          if (x === "apoio") { const v = prompt("Apoios para este aluno na aula (aparecem na Tela da aula, só para você):", a.apoio || ""); if (v === null) return; await db().collection("alunos").doc(a.id).update({ apoio: v.trim() }); }
          if (x === "trilha") {
            const tem = cat().apostilas.some(y => y.trilha && y.serie === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            if (!a.trilha && !tem && !confirm("Esta série ainda não tem Trilha Passo a Passo. A marcação fica guardada e passa a valer quando a Trilha existir. Marcar mesmo assim?")) return;
            await marcarTrilha(a, !a.trilha);
            alert(a.trilha ? `${a.nome} volta a usar a apostila da turma.` : `Pronto! Quando ${a.nome} digitar o código, o portal abre direto a Trilha Passo a Passo.`);
          }
          if (x === "casa") {
            if (a.emCasa) await db().collection("alunos").doc(a.id).update({ emCasa: false, emCasaObs: "" });
            else { const o = prompt("Observação (opcional). Ex.: entrega a apostila impressa; vem só para a prova.", ""); if (o === null) return; await db().collection("alunos").doc(a.id).update({ emCasa: true, emCasaObs: o.trim() }); }
          }
          if (x === "teste") { await db().collection("alunos").doc(a.id).update({ teste: !a.teste }); }
          if (x === "libera") {
            const d = prompt(`Liberar as tarefas de ${a.nome} fora do horário por quantos dias? (1 = até o fim de hoje; 0 = tirar a liberação)`, "1"); if (d === null || isNaN(+d)) return;
            const fim = new Date(); fim.setHours(23, 59, 0, 0); fim.setDate(fim.getDate() + Math.max(0, +d - 1));
            await db().collection("config").doc("liberar_" + a.turma).set({ alunos: { [a.id]: +d > 0 ? fim.getTime() : 0 } }, { merge: true });
            alert(+d > 0 ? `Pronto! ${a.nome} pode fazer as tarefas até ${fim.toLocaleDateString("pt-BR")}, 23h59.` : "Liberação retirada."); dlg.close(); return;
          }
          if (x === "outra") {
            const opc = todasTurmas().filter(y => y.id !== a.turma && y.serie.id === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            const r = prompt(`${a.nome} também frequenta a aula de qual turma? (as tarefas abrem no horário dela; a presença e as notas continuam na turma dele)\nDigite: ${opc.map(y => y.id).join(", ")}\nDeixe em branco para tirar.`, "");
            if (r === null) return; const nt = opc.find(y => y.id.toLowerCase() === r.trim().toLowerCase());
            if (r.trim() && !nt) { alert("Turma não encontrada."); return; }
            await db().collection("config").doc("liberar_" + a.turma).set({ outra: { [a.id]: nt ? nt.id : null } }, { merge: true });
            await db().collection("alunos").doc(a.id).update({ outraTurma: nt ? nt.id : null });
            alert(nt ? `Pronto! As tarefas de ${a.nome} abrem também no horário do ${nomeTurma(nt.id)}.` : "Pronto! Voltou ao horário da própria turma.");
          }
          if (x === "ativo") { if (a.ativo && !confirm(`Desativar ${a.nome}? O código para de funcionar, mas o histórico fica guardado.`)) return; await mudarAtivo(a, !a.ativo); }
          dlg.close(); toast("Feito!"); telaTurmas(u, t.id);
        } catch (err) { alert("Não foi possível: " + (err.message || err)); }
      });
    }

    el.querySelector("#add").onclick = async () => {
      const n = arrumarNome(prompt(`Nome completo do aluno novo (${nomeTurma(t.id)}):`));
      if (!n) return;
      if (n.split(" ").length < 2) return alert("Digite nome e sobrenome.");
      try {
        const cfg = await config();
        const r = await adicionarAlunos(t.id, [{ nome: n }], cfg.ano);
        if (!r.length) return alert("Já existe um aluno com esse nome nesta turma.");
        alert(`${r[0].nome} foi adicionado(a). Código: ${r[0].codigo}`);
        telaTurmas(u, t.id);
      } catch (err) { alert("Não foi possível adicionar: " + (err.message || err)); }
    };
    el.querySelector("#cart").onclick = () => imprimirCartoes(t, alunos.filter(a => a.ativo));
    el.querySelector("#csv").onclick = () => {
      const lin = [["Aluno", "Código", "Situação", "Dias no portal"].concat(missoes.map(x => x.m.id.toUpperCase() + " — " + x.m.titulo))];
      alunos.forEach(a => {
        const dd = new Set(); (pm[a.id] || []).forEach(p => Object.keys(p.dias || {}).forEach(d => dd.add(d)));
        lin.push([a.nome, a.codigo, a.ativo ? "ativo" : "desativado", dd.size].concat(missoes.map(x => {
          const p = (pm[a.id] || []).find(q => (q.aid === x.aid || (cat().apostilas.find(y => y.id === q.aid) || {}).base === x.aid) && q.mid === x.m.id);
          return !p ? "" : p.basicoOk ? "Básico concluído" + ((p.desafio || [])[1] && p.desafio[0] === p.desafio[1] ? " + Desafio" : "") : `Básico ${(p.basico || [0, 0]).join("/")}`;
        })));
      });
      baixar(`turma-${t.id}.csv`, "﻿" + lin.map(l => l.map(v => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\r\n"));
    };
  }

  function imprimirCartoes(t, alunos) {
    const w = window.open("", "_blank");
    if (!w) return alert("Permita pop-ups para imprimir os cartões.");
    const base = location.href.split("#")[0];
    w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Códigos — ${esc(nomeTurma(t.id))}</title>
      <style>body{font-family:"Segoe UI",Arial,sans-serif;margin:10mm}h1{font-size:14pt;margin:0 0 6mm}
      .g{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}.c{border:1.5px dashed #555;border-radius:3mm;padding:4mm;break-inside:avoid}
      .p{font-size:8pt;color:#555}.n{font-weight:700;font-size:10.5pt;margin:2mm 0;min-height:9mm}.t{font-size:9pt}.k{font-size:22pt;font-weight:800;letter-spacing:3mm;margin-top:1mm}
      @media print{.x{display:none}}</style></head><body>
      <p class="x"><button onclick="print()">🖨️ Imprimir</button> Recorte os cartões e entregue a cada aluno.</p>
      <h1>💻 ${esc(cat().portal)} — ${esc(nomeTurma(t.id))}</h1><div class="g">${alunos.map(a => `<div class="c"><div class="p">💻 ${esc(cat().portal)} · ${esc(cat().professor)}</div>
      <div class="n">${a.atipico ? "🧩 " : ""}${esc(a.nome)}</div><div class="t">Turma: <strong>${esc(nomeTurma(t.id))}</strong></div><div class="t">Seu código:</div><div class="k">${esc(a.codigo)}</div>
      <div class="p">Não mostre o seu código para os colegas.</div></div>`).join("")}</div></body></html>`);
    w.document.close();
  }

  function baixar(nome, texto) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([texto], { type: "text/csv;charset=utf-8" }));
    a.download = nome; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* -------- Presença: quem entrou em cada dia -------- */
  async function telaPresenca(u, tid) {
    const turmas = todasTurmas();
    tid = tid || sessionStorage.getItem("painel:turma") || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "presenca") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label></div>
      <details class="painel" id="atip"><summary><strong>🧩 Alunos atípicos que frequentam</strong> (todas as turmas)</summary><div id="atip-c"><p>Carregando…</p></div></details>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { try { sessionStorage.setItem("painel:turma", e.target.value); } catch (x) {} location.hash = "#/painel/presenca/" + e.target.value; };
    el.querySelector("#atip").addEventListener("toggle", async ev => {
      if (!ev.target.open || ev.target.dataset.ok) return; ev.target.dataset.ok = 1;
      const c = el.querySelector("#atip-c");
      try {
        const [qa, qe] = await Promise.all([db().collection("alunos").where("atipico", "==", true).get(), db().collection("progresso").where("tipo", "==", "entrada").get()]);
        const ent = {}; qe.docs.forEach(d => { const x = d.data(); ent[x.alunoId] = Object.keys(x.dias || {}).sort(); });
        const lista = qa.docs.map(d => ({ id: d.id, ...d.data() })).filter(a => a.ativo !== false)
          .map(a => ({ ...a, dias: ent[a.id] || [] })).sort((a, b) => b.dias.length - a.dias.length || a.turma.localeCompare(b.turma) || a.nome.localeCompare(b.nome, "pt-BR"));
        const vieram = lista.filter(a => a.dias.length);
        c.innerHTML = `<p>${vieram.length} de ${lista.length} alunos com 🧩 já entraram no portal. Conte também a chamada do diário: quem faltou no portal pode ter vindo sem entrar.</p>
          <div class="tabela-wrap"><table><thead><tr><th>Aluno</th><th>Turma</th><th>Dias no portal</th><th>Última vez</th></tr></thead><tbody>${lista.map(a => `<tr><td>🧩 ${esc(a.nome)}${a.trilha ? " 👣" : ""}</td><td>${esc(nomeTurma(a.turma))}</td><td><strong>${a.dias.length}</strong></td><td>${a.dias.length ? dataBR(a.dias[a.dias.length - 1]) : "nunca"}</td></tr>`).join("")}</tbody></table></div>`;
      } catch (err) { c.innerHTML = `<p class="erro">Não foi possível carregar: ${esc(err.message || err)}</p>`; }
    });
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id);
    await Promise.all(aps.map(a => P.carregarApostila(a.id).catch(() => null)));
    const [alunosTodos, prog] = await Promise.all([alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const alunos = alunosTodos.filter(a => !a.teste);
    const testes = new Set(alunosTodos.filter(a => a.teste).map(a => a.id));
    const porDia = {};
    prog.filter(p => !testes.has(p.alunoId)).forEach(p => Object.entries(p.dias || {}).forEach(([d, ts]) => {
      const x = (porDia[d] = porDia[d] || {}); const r = (x[p.alunoId] = x[p.alunoId] || { ini: ts, fim: ts, basico: false, missoes: [] });
      r.ini = Math.min(r.ini, ts); r.fim = Math.max(r.fim, ts);
      if (p.basicoOkEm && p.basicoOkEm[d]) r.basico = true;
      if (p.mid) r.missoes.push(p);
    }));
    const dias = Object.keys(porDia).sort().reverse();
    const nome = id => { const a = alunosTodos.find(x => x.id === id) || { nome: "(aluno removido)" }; return (a.atipico ? "🧩 " : "") + (a.emCasa ? "🏠 " : "") + a.nome; };
    const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR").slice(0, 5);
    const tituloMissao = p => { const C = P.conteudo[p.aid]; const m = C && C.missoes.find(x => x.id === p.mid); return m ? m.titulo : p.mid; };
    const fr = (r, k) => (r[k] || [0, 0])[1] ? `${r[k][0]}/${r[k][1]}` : "";
    const situacao = p => {
      const partes = [`Básico ${p.basicoOk ? "✔ concluído" : "⏳ " + fr(p, "basico")}`];
      if ((p.desafio || [0, 0])[1] && p.desafio[0]) partes.push(`Desafio ${p.desafio[0] === p.desafio[1] ? "✔ completo" : fr(p, "desafio")}`);
      if ((p.turbo || [0, 0])[1] && p.turbo[0]) partes.push(`Turbo ${p.turbo[0] === p.turbo[1] ? "✔ completo" : fr(p, "turbo")}`);
      return partes.join(" · ");
    };
    function relatorio(d) {
      const pres = porDia[d], ids = Object.keys(pres).sort((a, b) => nome(a).localeCompare(nome(b), "pt-BR"));
      const aus = alunos.filter(a => a.ativo && !pres[a.id]);
      const ini = Math.min(...ids.map(i => pres[i].ini)), fim = Math.max(...ids.map(i => pres[i].fim));
      const missoes = {}; ids.forEach(i => pres[i].missoes.forEach(p => { missoes[p.mid] = tituloMissao(p); }));
      const nB = ids.filter(i => pres[i].basico || pres[i].missoes.some(p => p.basicoOk)).length;
      const nD = ids.filter(i => pres[i].missoes.some(p => (p.desafio || [0, 0])[1] && p.desafio[0] === p.desafio[1])).length;
      const linhas = ids.map(i => {
        const ms = pres[i].missoes;
        return `- ${nome(i)} [${i}] — entrou ${hhmm(pres[i].ini)}` + (ms.length ? "\n" + ms.map(p => `    ${p.mid.toUpperCase()} (${tituloMissao(p)}): ${situacao(p)}`).join("\n") : "\n    (entrou, mas não fez atividades)");
      });
      return [
        "📋 RELATÓRIO DA AULA — Portal da Informática",
        `Turma: ${nomeTurma(t.id)} (código no diário: ${t.id.toLowerCase()})`,
        `Data: ${dataBR(d)} (${semana(d)})`,
        `Horário registrado: ${hhmm(ini)} às ${hhmm(fim)}`,
        `Missões trabalhadas: ${Object.entries(missoes).map(([k, v]) => k.toUpperCase() + " — " + v).join("; ") || "nenhuma"}`,
        `Resumo: ${ids.length} presentes · ${aus.length} ausentes · ${nB} concluíram o Básico · ${nD} completaram o Desafio`,
        "",
        `PRESENTES (${ids.length}):`,
        ...linhas,
        "",
        `AUSENTES (${aus.length}):`,
        ...(aus.length ? aus.map(a => `- ${a.nome} [${a.id}]`) : ["- nenhum"]),
        "",
        "Claude: lance no Diário de Classe a presença (P para os presentes, F para os ausentes), o Básico concluído de quem terminou, os pontos extras de quem completou o Desafio e o registro da aula."
      ].join("\n");
    }
    el.querySelector("#corpo").innerHTML = dias.length ? dias.map(d => {
      const ids = Object.keys(porDia[d]).sort((a, b) => nome(a).localeCompare(nome(b), "pt-BR"));
      const aus = alunos.filter(a => a.ativo && !porDia[d][a.id]);
      const okB = i => porDia[d][i].basico || porDia[d][i].missoes.some(p => p.basicoOk);
      return `<details class="painel pp-dia" ${d === dias[0] ? "open" : ""}><summary><strong>${dataBR(d)}</strong> (${semana(d)}) · <strong>${ids.length}</strong> presentes · ${ids.filter(okB).length} concluíram o Básico</summary>
        <div class="pp-rel"><p><strong>📋 Relatório da aula</strong> — copie e cole na conversa com o Claude para lançar tudo no Diário de Classe.</p>
          <textarea class="pp-area pp-rel-txt" rows="8" readonly data-rel="${d}"></textarea>
          <div class="row-btns"><button class="btn" type="button" data-copiar="${d}">📋 Copiar relatório</button></div></div>
        <ol>${ids.map(i => `<li>${esc(nome(i))} <small>entrou às ${hhmm(porDia[d][i].ini)}${okB(i) ? " · ✔ Básico" : ""}</small></li>`).join("")}</ol>
        <details><summary>Ausentes (${aus.length})</summary><p>${aus.map(a => esc(a.nome)).join(" · ") || "—"}</p></details></details>`;
    }).join("") : `<div class="painel"><p>Ainda não há registros nesta turma. A presença aparece aqui quando os alunos entram no portal com o código.</p></div>`;
    el.querySelectorAll("[data-rel]").forEach(ta => { ta.value = relatorio(ta.dataset.rel); });
    el.querySelectorAll("[data-copiar]").forEach(b => b.onclick = () => {
      const ta = el.querySelector(`[data-rel="${b.dataset.copiar}"]`);
      const ok = () => { toast("Relatório copiado! Agora é só colar na conversa com o Claude."); b.textContent = "✔ Copiado"; setTimeout(() => { b.textContent = "📋 Copiar relatório"; }, 2500); };
      navigator.clipboard.writeText(ta.value).then(ok, () => { ta.select(); document.execCommand("copy"); ok(); });
    });
  }

  /* -------- Tela da aula: roteiro visual + respostas + contador ao vivo -------- */
  /* -------- Prova do bimestre: Dia de prova, notas, recuperação e gabarito -------- */
  async function telaProvaPainel(u, tid) {
    const turmas = todasTurmas();
    tid = tid || sessionStorage.getItem("painel:turma") || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const el = tela(topo(u, "prova") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label></div>
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/prova/" + e.target.value; };
    const hoje = N.hoje();
    const cfgRef = db().collection("config").doc("prova_" + t.id);
    const [cfgSnap, alunosTodos, provasSnap] = await Promise.all([cfgRef.get(), alunosDaTurma(t.id), db().collection("provas").where("turma", "==", t.id).get()]);
    const cfg = cfgSnap.exists ? cfgSnap.data() : {};
    const agora = Date.now();
    const ligada = !!cfg.aberta && cfg.dia === hoje && !(cfg.ate && agora > cfg.ate + 3 * 60000);
    const tempoAcabou = !!cfg.aberta && cfg.dia === hoje && !ligada;
    const hm = ms => new Date(ms).toTimeString().slice(0, 5);
    // horário-limite padrão: fim da aula da turma (início + 1h15) se hoje é o dia dela; senão, daqui a 1h15
    const fimPadrao = (() => {
      const dur = (cat().duracaoAula || 75) * 60000, d = new Date();
      if (t.aula && d.getDay() === t.aula.dia) { const [H, M] = t.aula.ini.split(":").map(Number); const ini = new Date(d); ini.setHours(H, M, 0, 0); if (ini.getTime() + dur > agora) return ini.getTime() + dur; }
      return agora + dur;
    })();
    const rec = new Set(cfg.recuperacao || []);
    const alunos = alunosTodos.filter(a => a.ativo && !a.teste);
    const base = cat().apostilas.find(a => a.serie === t.serie.id && !a.oculta && !a.trilha);
    const trilha = base && cat().apostilas.find(a => a.trilha && a.base === base.id);
    const aidDe = a => (a.trilha && trilha ? trilha.id : base && base.id);
    const aids = [...new Set([base && base.id, trilha && alunos.some(a => a.trilha) ? trilha.id : null].filter(Boolean))];
    await Promise.all(aids.map(x => P.prova.carregar(x).catch(() => null)));
    // a nota é recalculada aqui, a partir das respostas (não depende do que o navegador do aluno calculou)
    const acertos = d => { const Pv = P.provas[d.aid]; if (!Pv) return d.acertos || 0; const qs = d.qs ? Pv.questoes.filter(q => d.qs.includes(q.id)) : Pv.questoes; return qs.filter(q => d.respostas && d.respostas[q.id] != null && P.provaHash(d.aid, q.id, d.respostas[q.id]) === q.h).length; };
    const res = {}; provasSnap.docs.forEach(x => { const d = x.data(); const ac = acertos(d), nq = d.nq || (d.qs || []).length || 10; (res[d.alunoId] = res[d.alunoId] || {})[d.tentativa] = { ...d, ac, nq, nt: P.prova.notaDe(ac, nq) }; });
    const nota = n => n.toFixed(1).replace(".", ",");
    // missões que a turma estudou (do cronograma): o painel já marca sozinho; o professor confere
    const nomesM = (P.provas[base && base.id] || {}).missoes || [];
    const cron = Object.entries(t.missoes4 || {}).sort();
    const estudadas = cfg.dia === hoje && cfg.missoes ? cfg.missoes : [...new Set(cron.filter(([d]) => d < hoje).map(([, m]) => m))];
    const tres = new Set(alunos.filter(a => a.prova3).map(a => a.id));
    const hhmm = d => d.enviadoEm && d.enviadoEm.toDate ? d.enviadoEm.toDate().toLocaleString("pt-BR").slice(0, 17) : (d.dia ? dataBR(d.dia) : "");
    const fizeram = alunos.filter(a => res[a.id]).length;
    const linhas = alunos.map(a => {
      const r = res[a.id] || {}; const t1 = r[1], t2 = r[2];
      const fin = Math.max(t1 ? t1.nt : -1, t2 ? t2.nt : -1);
      return `<tr><td>${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}${a.emCasa ? " 🏠" : ""}${a.atipico ? `<br><button class="btn btn-sec btn-peq" data-tres="${a.id}" type="button">${tres.has(a.id) ? "✅ 3 alternativas" : "⬜ 3 alternativas"}</button>` : ""}</td>
        <td>${t1 ? `<strong>${nota(t1.nt)}</strong> <small>(${t1.ac}/${t1.nq} · ${esc(hhmm(t1))})</small>` : "—"}</td>
        <td>${t2 ? `<strong>${nota(t2.nt)}</strong> <small>(${t2.ac}/${t2.nq})</small>` : rec.has(a.id) ? "<small>liberada</small>" : "—"}</td>
        <td>${fin >= 0 ? `<strong>${nota(fin)}</strong>` : "—"}</td>
        <td>${t1 && !t2 ? `<button class="btn btn-sec btn-peq" data-rec="${a.id}" type="button">${rec.has(a.id) ? "Cancelar recuperação" : "Liberar recuperação"}</button>` : ""}</td></tr>`;
    }).join("");
    const gab = aids.map(x => { const Pv = P.provas[x]; if (!Pv) return ""; const ap = P.apostila(x);
      const li = q => `<li>${q.tipo === "vf" ? "<em>V ou F:</em> " : ""}${esc(q.p)}<br>${q.opcoes.map(o => P.provaHash(x, q.id, o) === q.h ? `<span class="certa">✔ ${esc(o)}</span>` : `<span>${esc(o)}</span>`).join(" · ")}</li>`;
      const grupos = Pv.missoes ? Pv.missoes.map(m => `<h4>${esc(m.titulo)}${estudadas.includes(m.id) ? "" : " <small>(não entra na prova desta turma)</small>"}</h4><ol>${Pv.questoes.filter(q => q.m === m.id).map(li).join("")}</ol>`).join("") : `<ol>${Pv.questoes.map(li).join("")}</ol>`;
      return `<h3>${esc(ap ? ap.titulo : x)}</h3>${grupos}`; }).join("");
    const aulasTxt = cron.length ? `<p><strong>Aulas da turma neste bimestre</strong> (do Diário de Classe):</p><ul class="pp-cron">${cron.map(([d, m]) => `<li>${d < hoje ? "✅" : "🔜"} ${esc(dataBR(d))} · ${esc((nomesM.find(x => x.id === m) || { titulo: m.toUpperCase() }).titulo)}</li>`).join("")}</ul>` : "";
    const caixasM = nomesM.map(m => `<label class="pp-mis-ck"><input type="checkbox" data-m="${m.id}" ${estudadas.includes(m.id) ? "checked" : ""} ${ligada ? "disabled" : ""}> ${esc(m.titulo)}</label>`).join("");
    const corpo = el.querySelector("#corpo");
    corpo.innerHTML = `<div class="painel"><h2>📝 Prova do bimestre · ${esc(nomeTurma(t.id))}</h2>
        <p>Situação: <span class="pp-prova-st ${ligada ? "on" : "off"}">${ligada ? `🟢 Dia de prova LIGADO · termina às ${cfg.ate ? hm(cfg.ate) : "fim do dia"}` : tempoAcabou ? "⏰ Tempo da prova acabou" : "⚪ Desligado"}</span></p>
        ${t.aula ? `<p class="ajuda">Aula da turma: ${["", "segunda", "terça", "quarta", "quinta", "sexta"][t.aula.dia]}, das ${t.aula.ini} às ${hm(new Date("2000-01-01T" + t.aula.ini + ":00").getTime() + (cat().duracaoAula || 75) * 60000)}.</p>` : ""}
        ${aulasTxt}
        <div class="pp-missoes-prova"><p><strong>A prova cobra só estas missões</strong> (já marcadas pelas aulas que a turma teve; confira antes de ligar):</p>${caixasM}</div>
        <p class="ajuda">Ligado, o aluno digita o código e cai direto na prova. Um relógio mostra quanto falta até o horário-limite; quando o tempo acaba, a prova é enviada sozinha com as respostas marcadas. Ao terminar, o aluno vê a nota e o portal sai sozinho.</p>
        <div class="row-btns">${ligada ? `<button class="btn" id="pv-off" type="button">⏹️ Encerrar a prova</button>` : `<label>A prova termina às <input type="time" id="pv-ate" value="${hm(fimPadrao)}"></label><button class="btn btn-grande" id="pv-on" type="button">📝 Ligar o Dia de prova</button>`}
          <button class="btn btn-sec" id="pv-cp" type="button">📋 Copiar notas</button>
          <button class="btn btn-sec" id="pv-gab" type="button">👁️ Mostrar gabarito</button></div></div>
      <div class="painel pp-gab" id="gab"><h2>Gabarito</h2>${gab}</div>
      <div class="painel"><h2>Notas (${fizeram} de ${alunos.length} fizeram)</h2>
        <div class="tabela-wrap"><table><thead><tr><th>Aluno</th><th>1ª tentativa</th><th>Recuperação</th><th>Nota final</th><th></th></tr></thead><tbody>${linhas}</tbody></table></div>
        <p class="ajuda">A prova tem até 10 questões, só das missões marcadas, e vale até 5,0 (nota proporcional aos acertos). 🧩 <strong>3 alternativas</strong>: para o aluno cujo PEI pede, a prova mostra só 3 opções em cada questão. Na nota final vale a maior entre a prova e a recuperação. A recuperação abre só para quem você liberar, quando o Dia de prova estiver ligado.</p></div>`;
    const recarregar = () => telaProvaPainel(u, t.id);
    const on = corpo.querySelector("#pv-on"), off = corpo.querySelector("#pv-off");
    if (on) on.onclick = async () => {
      const v = (corpo.querySelector("#pv-ate").value || hm(fimPadrao)).split(":").map(Number);
      const fim = new Date(); fim.setHours(v[0], v[1], 0, 0);
      if (fim.getTime() <= Date.now() + 5 * 60000) { toast("Escolha um horário-limite pelo menos 5 minutos à frente."); return; }
      const missoes = [...corpo.querySelectorAll("[data-m]:checked")].map(c => c.dataset.m);
      if (!missoes.length) { toast("Marque pelo menos uma missão que a turma estudou."); return; }
      on.disabled = true;
      const ts = firebase.firestore.Timestamp ? firebase.firestore.Timestamp.fromMillis(fim.getTime()) : fim.getTime();
      await cfgRef.set({ aberta: true, dia: hoje, abertaEm: Date.now(), ate: fim.getTime(), ateTs: ts, recuperacao: [...rec], missoes, tres: [...tres] });
      toast("Dia de prova ligado até as " + hm(fim.getTime())); recarregar(); };
    if (off) off.onclick = async () => { off.disabled = true; await cfgRef.set({ aberta: false, encerradaEm: Date.now() }, { merge: true }); toast("Prova encerrada."); recarregar(); };
    corpo.querySelector("#pv-gab").onclick = e => { const g = corpo.querySelector("#gab"); g.classList.toggle("on"); e.target.textContent = g.classList.contains("on") ? "🙈 Esconder gabarito" : "👁️ Mostrar gabarito"; };
    corpo.querySelector("#pv-cp").onclick = async () => {
      const txt = `Notas da prova — ${nomeTurma(t.id)}\n` + alunos.map(a => { const r = res[a.id] || {}; const f = Math.max(r[1] ? r[1].nt : -1, r[2] ? r[2].nt : -1); return `${a.nome}: ${f >= 0 ? nota(f) : "não fez"}`; }).join("\n");
      try { await navigator.clipboard.writeText(txt); toast("Notas copiadas."); } catch (e) { prompt("Copie as notas:", txt); }
    };
    corpo.querySelectorAll("[data-tres]").forEach(b => b.onclick = async () => {
      const id = b.dataset.tres, v = !tres.has(id); b.disabled = true;
      await db().collection("alunos").doc(id).update({ prova3: v });
      if (v) tres.add(id); else tres.delete(id);
      if (cfgSnap.exists) await cfgRef.set({ tres: [...tres] }, { merge: true });
      recarregar();
    });
    corpo.querySelectorAll("[data-rec]").forEach(b => b.onclick = async () => {
      const id = b.dataset.rec; if (rec.has(id)) rec.delete(id); else rec.add(id);
      b.disabled = true; await cfgRef.set({ recuperacao: [...rec] }, { merge: true }); recarregar();
    });
  }

  /* -------- 📒 Diário de Classe: chamada, vistos, frequência, boletim, registro e lembretes --------
     Fica em prof/diario/turmas/<turma> (cronograma, lembretes, notas manuais, auto) e
     prof/diario/turmas/<turma>/aulas/<data> (presencas, carimbos, parciais, extras, encontro, registro).
     O que vem do portal (⚡) é calculado na hora: quem entrou, quem concluiu o Básico, quem completou
     o Desafio e o Turbo. O que o professor marca à mão sempre vale mais que o automático. */
  const DIARIO = "prof/diario/turmas";
  const nBas = v => v === true ? 1 : (+v || 0);
  const fmtN = n => n == null ? "–" : (Math.round(n * 100) / 100).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  function notaProvaDoc(d) {
    const Pv = P.provas[d.aid]; if (!Pv) return d.nota || 0;
    const qs = d.qs ? Pv.questoes.filter(q => d.qs.includes(q.id)) : Pv.questoes;
    const ac = qs.filter(q => d.respostas && d.respostas[q.id] != null && P.provaHash(d.aid, q.id, d.respostas[q.id]) === q.h).length;
    return P.prova.notaDe(ac, d.nq || qs.length);
  }
  async function telaDiario(u, tid, aba) {
    const turmas = todasTurmas();
    tid = tid || sessionStorage.getItem("painel:turma") || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    aba = aba || "chamada";
    const ABAS = [["chamada", "✅ Chamada"], ["frequencia", "🗓️ Frequência"], ["boletim", "🧮 Boletim"], ["registro", "📝 Registro das aulas"], ["lembretes", "🔔 Lembretes"]];
    const el = tela(topo(u, "diario") + `<div class="painel pp-barra"><label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
        <span class="pp-missoes">${ABAS.map(([k, r]) => `<a class="pp-mis ${k === aba ? "atual" : ""}" href="#/painel/diario/${t.id}/${k}">${r}</a>`).join("")}</span></div>
      <div id="corpo"><p class="painel">Carregando o diário…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/diario/" + e.target.value + "/" + aba; };
    const hoje = N.hoje();
    const tRef = db().collection(DIARIO).doc(t.id), aulasCol = db().collection(DIARIO + "/" + t.id + "/aulas");
    const [tSnap, aulasSnap, alunosTodos, progTodos, provasSnap] = await Promise.all([tRef.get(), aulasCol.get(), alunosDaTurma(t.id), progressoDaTurma(t.id), db().collection("provas").where("turma", "==", t.id).get().catch(() => ({ docs: [] }))]);
    const T = tSnap.exists ? tSnap.data() : {};
    const aulas = {}; aulasSnap.docs.forEach(d => { aulas[d.id] = d.data(); });
    const alunos = alunosTodos.filter(a => a.ativo !== false && !a.teste);
    const ids = new Set(alunos.map(a => a.id)), emCasa = new Set(alunos.filter(a => a.emCasa).map(a => a.id));
    const prog = progTodos.filter(p => ids.has(p.alunoId));
    // cronograma: o do diário; se não houver, monta pelas missões do catálogo
    const base = cat().apostilas.find(a => a.serie === t.serie.id && !a.oculta && !a.trilha);
    if (base) await P.carregarApostila(base.id).catch(() => null);
    const tituloM = m => { const C = base && P.conteudo[base.id]; const x = C && C.missoes.find(y => y.id === m); return x ? x.titulo : m.toUpperCase(); };
    const cron = (T.cronograma && T.cronograma.length ? T.cronograma : Object.entries(t.missoes4 || {}).map(([data, m]) => ({ data, encontro: tituloM(m) }))).slice().sort((a, b) => a.data < b.data ? -1 : 1);
    const encontroDe = d => (aulas[d] && aulas[d].encontro) || (cron.find(c => c.data === d) || {}).encontro || "";
    // notas da prova feita no portal (maior entre a prova e a recuperação)
    const aidsProva = [...new Set(provasSnap.docs.map(x => x.data().aid))];
    await Promise.all(aidsProva.map(x => P.prova.carregar(x).catch(() => null)));
    const provaPortal = {}; provasSnap.docs.forEach(x => { const d = x.data(); const n = notaProvaDoc(d); provaPortal[d.alunoId] = Math.max(provaPortal[d.alunoId] ?? -1, n); });
    // ⚡ automático do portal
    const ehDiaDeAula = d => !!aulas[d] || cron.some(c => c.data === d) || (t.aula && new Date(d + "T12:00:00").getDay() === t.aula.dia);
    const AUTO = {}; const ad = d => AUTO[d] = AUTO[d] || { p: {}, c: {}, x: {} };
    prog.forEach(p => {
      const ds = Object.keys(p.dias || {}).filter(ehDiaDeAula).sort(); if (!ds.length) return;
      ds.forEach(d => { ad(d).p[p.alunoId] = "P"; });
      if (!p.mid) return;
      if (p.basicoOk) { const d = Object.keys(p.basicoOkEm || {}).filter(ehDiaDeAula).sort()[0] || ds[ds.length - 1]; const c = ad(d).c; c[p.alunoId] = Math.min(2, (c[p.alunoId] || 0) + 1); }
      let n = 0;
      if ((p.desafio || [0, 0])[1] && p.desafio[0] === p.desafio[1]) n++;
      if ((p.turbo || [0, 0])[1] && p.turbo[0] === p.turbo[1]) n++;
      if (n) { const x = ad(ds[ds.length - 1]).x; x[p.alunoId] = Math.min(2, (x[p.alunoId] || 0) + n); }
    });
    let auto = T.auto !== false;
    const temManual = (aula, campo, id) => aula && aula[campo] && aula[campo][id] !== undefined && aula[campo][id] !== null;
    const pres = (d, id) => { const a = aulas[d]; if (temManual(a, "presencas", id)) return { v: a.presencas[id], auto: false };
      if (auto && AUTO[d] && AUTO[d].p[id]) return { v: "P", auto: true };
      return temChamada(d) ? (emCasa.has(id) ? { v: "J", auto: true } : { v: "F", auto: true, falta: true }) : { v: null }; };
    const temChamada = d => Object.values((aulas[d] || {}).presencas || {}).some(v => v) || (auto && AUTO[d] && Object.keys(AUTO[d].p).length > 0);
    const carimbo = (d, id) => { const a = aulas[d]; if (temManual(a, "carimbos", id)) return { v: nBas(a.carimbos[id]), auto: false }; return auto && AUTO[d] && AUTO[d].c[id] ? { v: AUTO[d].c[id], auto: true } : { v: 0 }; };
    const extra = (d, id) => { const a = aulas[d]; if (temManual(a, "extras", id)) return { v: +a.extras[id] || 0, auto: false }; return auto && AUTO[d] && AUTO[d].x[id] ? { v: AUTO[d].x[id], auto: true } : { v: 0 }; };
    const parcial = (d, id) => !!(((aulas[d] || {}).parciais || {})[id]);
    const diasComChamada = () => [...new Set([...Object.keys(aulas), ...(auto ? Object.keys(AUTO) : [])])].filter(d => d <= hoje && temChamada(d)).sort();
    const freq = id => { let p = 0, f = 0, j = 0; diasComChamada().forEach(d => { const v = pres(d, id).v; if (v === "P") p++; else if (v === "F") f++; else if (v === "J") j++; }); const tot = p + f + j; return { p, f, j, tot, pct: tot ? Math.round(100 * (p + j) / tot) : null }; };
    const notas = { prova: { ...((T.notas || {}).prova || {}) }, rec: { ...((T.notas || {}).rec || {}) } };
    const boletim = id => {
      const dias = [...new Set([...Object.keys(aulas), ...Object.keys(AUTO)])];
      let bas = 0, ext = 0; dias.forEach(d => { bas += carimbo(d, id).v; ext += extra(d, id).v; });
      const basC = Math.min(4, bas), bonus = Math.min(1, ext * 0.25), A = basC + bonus;
      const man = notas.prova[id], B = man != null && man !== "" ? +man : provaPortal[id] != null ? provaPortal[id] : null;
      const nota = A + (B || 0); const rv = notas.rec[id], r = rv == null || rv === "" ? null : +rv;
      const final = r != null && r > nota ? r : nota;
      const encs = diasComChamada().filter(d => /^(Missão|Projeto final)/.test(encontroDe(d)));
      const deficit = Math.max(0, encs.length - bas), falta = [];
      if (deficit) falta.push(`Básico de ${deficit} aula${deficit > 1 ? "s" : ""}`);
      if (B == null && cron.some(c => /^Avalia/.test(c.encontro) && c.data <= hoje)) falta.push("fazer a prova (2ª chamada)");
      if (B != null && final < 5 && r == null) falta.push("recuperação");
      const sit = B == null && r == null ? { c: "wait", t: "Aguardando prova" } : final >= 5 ? { c: "ok", t: "Aprovado" } : r == null ? { c: "bad", t: "Fazer recuperação" } : { c: "bad", t: "Abaixo da média" };
      return { bas, basC, ext, bonus, A, B, provaManual: man != null && man !== "", nota, r, final, sit, falta, recUsada: r != null && r > nota };
    };
    // dia da chamada: hoje se for dia de aula; senão, a última aula
    let dia = sessionStorage.getItem("painel:diario:" + t.id) || (ehDiaDeAula(hoje) ? hoje : ([...cron.map(c => c.data), ...Object.keys(aulas)].filter(d => d <= hoje).sort().pop() || hoje));
    const salvarAula = async patch => {
      const novo = !aulas[dia];
      const base0 = novo ? { data: dia, encontro: encontroDe(dia), presencas: {}, carimbos: {}, parciais: {}, extras: {}, registro: "" } : {};
      const a = aulas[dia] = aulas[dia] || { ...base0 };
      Object.entries(patch).forEach(([k, v]) => { a[k] = v && typeof v === "object" ? { ...(a[k] || {}), ...v } : v; });
      try { await aulasCol.doc(dia).set({ ...base0, ...patch }, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
    };
    const salvarTurma = async patch => { try { await tRef.set(patch, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } };
    const corpo = el.querySelector("#corpo");
    const nomeA = a => `${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}${a.emCasa ? ` <span class="pp-casa-tag" title="${esc(a.emCasaObs || "Estuda em casa")}">🏠 estuda em casa</span>` : ""}`;
    const lemb = () => (T.lembretes || []);

    function vChamada() {
      const enc = encontroDe(dia), pend = lemb().filter(l => !l.feito);
      const cnt = { P: 0, F: 0, J: 0 }; alunos.forEach(a => { const v = pres(dia, a.id).v; if (v) cnt[v]++; });
      return `<div class="painel">
        ${pend.length ? `<div class="pp-lemb"><strong>🔔 Lembretes desta turma</strong><ul>${pend.map(l => `<li>${esc(l.texto)}</li>`).join("")}</ul></div>` : ""}
        <div class="row-btns pp-dia-bar"><label>Data <input type="date" id="dd" value="${dia}"></label>
          <label class="grow">Encontro <input type="text" id="enc" list="encs" value="${esc(enc)}" placeholder="Ex.: Missão 1 – …"><datalist id="encs">${[...new Set(cron.map(c => c.encontro))].map(o => `<option value="${esc(o)}">`).join("")}</datalist></label>
          <label class="pp-auto"><input type="checkbox" id="auto" ${auto ? "checked" : ""}> ⚡ Automático do portal</label></div>
        <p class="pp-cont"><span>✅ ${cnt.P} presente${cnt.P === 1 ? "" : "s"}</span> <span>❌ ${cnt.F} falta${cnt.F === 1 ? "" : "s"}</span> <span>📝 ${cnt.J} justificada${cnt.J === 1 ? "" : "s"}</span></p>
        <p class="ajuda">⚡ = veio do portal (o aluno entrou com o código, concluiu o Básico, completou o Desafio ou o Turbo). Toque para corrigir: o que você marca vale mais que o automático. Quem não entrou no portal fica com falta; se ele veio e não entrou, toque em <b>P</b>.</p>
        <ul class="pp-cham">${alunos.map((a, i) => { const p = pres(dia, a.id), c = carimbo(dia, a.id), x = extra(dia, a.id), pa = parcial(dia, a.id) && !c.v, fr = freq(a.id);
          return `<li><span class="n">${i + 1}</span><span class="nm">${nomeA(a)}<br><small>${fr.pct == null ? "sem registros" : fr.pct + "% de presença"}</small></span>
            <span class="seg">${["P", "F", "J"].map(v => `<button type="button" data-pres="${a.id}" data-v="${v}" aria-pressed="${p.v === v}" class="${p.v === v && p.auto ? "auto" : ""}" title="${{ P: "Presente", F: "Falta", J: "Falta justificada" }[v]}">${p.v === v && p.auto && v === "P" ? "⚡P" : v}</button>`).join("")}</span>
            <button type="button" class="stamp ${c.auto ? "auto" : ""} ${pa ? "part" : ""}" data-car="${a.id}" aria-pressed="${c.v > 0 || pa}">${c.v === 2 ? "✓✓ Básico ×2" : c.v ? (c.auto ? "⚡ " : "✓ ") + "Básico" : pa ? "◐ Parcial" : "Básico"}</button>
            <button type="button" class="stamp x ${x.auto ? "auto" : ""}" data-ext="${a.id}" aria-pressed="${x.v > 0}">${x.v ? (x.auto ? "⚡" : "") + "★".repeat(x.v) : "☆"} Desafio/Turbo</button></li>`; }).join("")}</ul>
        <p class="ajuda">Básico: toque para avançar — <b>◐ Parcial</b> (começou e termina na próxima aula, não vale nota) → <b>✓ Básico</b> (1,0) → <b>✓✓ ×2</b> (reposição) → sem visto. Desafio/Turbo: 0,25 cada (toque para 1 ou 2).</p>
        <h3>O que aconteceu nesta aula</h3>
        <textarea id="reg" class="pp-area" rows="4" placeholder="Ex.: turma agitada no começo; o computador 7 travou.">${esc((aulas[dia] || {}).registro || "")}</textarea>
        <div class="row-btns"><button type="button" class="btn" id="reg-ok">💾 Salvar registro</button></div></div>`;
    }
    function vFrequencia() {
      const ds = diasComChamada();
      if (!ds.length) return `<div class="painel"><p>Ainda não há chamada nesta turma.</p></div>`;
      const ab = e => (e || "").replace(/ –.*/, "").replace("Missão ", "M").replace("Projeto final", "PF").replace("Avaliação", "Aval.");
      return `<div class="painel"><div class="tabela-wrap"><table class="pp-freq"><thead><tr><th>Aluno</th>${ds.map(d => `<th title="${esc(encontroDe(d))}">${dataBR(d).slice(0, 5)}<br><small>${esc(ab(encontroDe(d)))}</small></th>`).join("")}<th>Frequência</th></tr></thead>
        <tbody>${alunos.map(a => { const fr = freq(a.id); return `<tr><td>${nomeA(a)}</td>${ds.map(d => { const p = pres(d, a.id), c = carimbo(d, a.id).v; return `<td><span class="m ${p.v || "x"} ${c ? "c" : ""} ${p.falta ? "au" : ""}">${p.v || "·"}</span></td>`; }).join("")}<td class="${fr.pct != null && fr.pct < 75 ? "baixa" : ""}"><strong>${fr.pct == null ? "–" : fr.pct + "%"}</strong></td></tr>`; }).join("")}</tbody></table></div>
        <p class="ajuda">P presente · F falta · J justificada · contorno = com visto do Básico. Frequência = presenças e justificadas ÷ aulas com chamada (abaixo de 75% fica em vermelho). É só informativa: não entra na nota.</p></div>`;
    }
    function vBoletim() {
      const rows = alunos.map(a => ({ a, b: boletim(a.id), fr: freq(a.id) }));
      const com = rows.filter(r => r.b.B != null || r.b.r != null);
      return `<div class="painel">
        <p class="pp-cont"><span>${alunos.length} alunos</span> <span>✅ ${com.filter(r => r.b.final >= 5).length} na média</span> <span>❌ ${com.filter(r => r.b.final < 5).length} abaixo de 5,0</span> <span>⏳ ${alunos.length - com.length} sem prova</span></p>
        <p class="ajuda"><b>Nota:</b> Apostila (até 5,0) = 1,0 por visto do Básico (até 4) + 0,25 por Desafio/Turbo (bônus até 1,0). Prova (até 5,0) = nota da prova feita no portal (ou a que você digitar, para prova em papel). A Recuperação (0 a 10) substitui a nota quando for maior. Média mínima: 5,0.</p>
        <div class="tabela-wrap"><table class="pp-bol"><thead><tr><th>Aluno</th><th>Freq.</th><th>Básico</th><th>Des./Turbo</th><th>Apostila</th><th>Prova<br><small>até 5,0</small></th><th>Nota</th><th>Recup.<br><small>0 a 10</small></th><th>Final</th><th>Situação</th><th>O que falta</th></tr></thead>
        <tbody>${rows.map(({ a, b, fr }) => `<tr><td>${nomeA(a)}</td><td>${fr.pct == null ? "–" : fr.pct + "%"}</td><td>${b.basC}/4</td><td>${b.ext}</td><td><strong>${fmtN(b.A)}</strong></td>
          <td><input class="num" data-np="${a.id}" value="${b.provaManual ? String(notas.prova[a.id]).replace(".", ",") : ""}" placeholder="${b.B != null && !b.provaManual ? fmtN(b.B) + " ⚡" : "–"}" inputmode="decimal" aria-label="Prova de ${esc(a.nome)}"></td>
          <td>${fmtN(b.nota)}</td><td><input class="num" data-nr="${a.id}" value="${b.r == null ? "" : String(b.r).replace(".", ",")}" placeholder="–" inputmode="decimal" aria-label="Recuperação de ${esc(a.nome)}"></td>
          <td><strong class="nota ${b.sit.c}">${fmtN(b.final)}</strong></td><td><span class="sit ${b.sit.c}">${b.sit.t}</span></td><td class="falta">${esc(b.falta.join(" · ") || "—")}</td></tr>`).join("")}</tbody></table></div>
        <p class="ajuda">A prova feita no portal aparece sozinha (⚡). Digite na coluna Prova só se o aluno fez a prova em papel (de 0 a 5); apague o número para voltar à nota do portal.</p>
        <div class="row-btns"><button type="button" class="btn btn-sec" id="cp-bol">📋 Copiar boletim (para colar numa planilha)</button></div></div>`;
    }
    function vRegistro() {
      const ds = [...new Set([...Object.keys(aulas), ...cron.map(c => c.data)])].sort().reverse();
      return `<div class="painel"><ul class="pp-reg">${ds.map(d => { const a = aulas[d] || {}; const n = alunos.filter(x => pres(d, x.id).v === "P").length;
        return `<li><div><strong>${dataBR(d)} (${semana(d)}) · ${esc(encontroDe(d) || "Aula")}</strong> <small>${d <= hoje && temChamada(d) ? n + " presentes" : d > hoje ? "🔜 prevista" : ""}</small></div>${(a.registro || "").trim() ? `<p>${esc(a.registro).replace(/\n/g, "<br>")}</p>` : ""}<button type="button" class="btn btn-sec btn-peq" data-abrir="${d}">Abrir a chamada deste dia</button></li>`; }).join("")}</ul></div>`;
    }
    function vLembretes() {
      return `<div class="painel"><div class="row-btns"><input type="text" id="lb-novo" class="grow" placeholder="Ex.: na próxima aula, começar pela correção do labirinto"><button type="button" class="btn" id="lb-add">Adicionar</button></div>
        <ul class="pp-lb">${lemb().map((l, i) => `<li class="${l.feito ? "feito" : ""}"><label><input type="checkbox" data-lb="${i}" ${l.feito ? "checked" : ""}> ${esc(l.texto)}</label> <small>${l.criadoEm ? dataBR(l.criadoEm.slice(0, 10)) : ""}</small></li>`).join("") || "<li class='ajuda'>Nenhum lembrete.</li>"}</ul></div>`;
    }
    function render() {
      corpo.innerHTML = ({ chamada: vChamada, frequencia: vFrequencia, boletim: vBoletim, registro: vRegistro, lembretes: vLembretes })[aba]();
      const q = s => corpo.querySelector(s);
      if (aba === "chamada") {
        q("#dd").onchange = e => { dia = e.target.value || hoje; try { sessionStorage.setItem("painel:diario:" + t.id, dia); } catch (x) {} render(); };
        q("#enc").onchange = e => salvarAula({ encontro: e.target.value.trim() });
        q("#auto").onchange = e => { auto = e.target.checked; salvarTurma({ auto }); render(); };
        q("#reg-ok").onclick = async () => { await salvarAula({ registro: q("#reg").value }); toast("Registro salvo."); };
        corpo.querySelectorAll("[data-pres]").forEach(b => b.onclick = () => {
          const id = b.dataset.pres, v = b.dataset.v, cur = pres(dia, id);
          // tocar de novo no que já está marcado à mão devolve para o automático
          salvarAula({ presencas: { [id]: !cur.auto && cur.v === v ? null : v } }); render();
        });
        corpo.querySelectorAll("[data-car]").forEach(b => b.onclick = () => {
          const id = b.dataset.car, c = carimbo(dia, id).v, pa = parcial(dia, id) && !c;
          const etapa = c > 0 ? c + 1 : pa ? 1 : 0, prox = (etapa + 1) % 4;
          salvarAula({ carimbos: { [id]: prox >= 2 ? prox - 1 : 0 }, parciais: { [id]: prox === 1 } }); render();
        });
        corpo.querySelectorAll("[data-ext]").forEach(b => b.onclick = () => { const id = b.dataset.ext; salvarAula({ extras: { [id]: (extra(dia, id).v + 1) % 3 } }); render(); });
      }
      if (aba === "boletim") {
        const num = s => { s = String(s).trim().replace(",", "."); return s === "" ? null : +s; };
        corpo.querySelectorAll("[data-np],[data-nr]").forEach(inp => inp.onchange = () => {
          const id = inp.dataset.np || inp.dataset.nr, k = inp.dataset.np ? "prova" : "rec", v = num(inp.value), max = k === "prova" ? 5 : 10;
          if (v != null && (isNaN(v) || v < 0 || v > max)) { toast(`Digite um número de 0 a ${max}.`); inp.value = ""; return; }
          notas[k][id] = v; salvarTurma({ notas: { [k]: { [id]: v } } }); render();
        });
        q("#cp-bol").onclick = async () => {
          const txt = ["Aluno\tFrequência\tBásico\tDesafio/Turbo\tApostila\tProva\tNota\tRecuperação\tFinal\tSituação",
            ...alunos.map(a => { const b = boletim(a.id), fr = freq(a.id); return [a.nome, fr.pct == null ? "" : fr.pct + "%", b.basC, b.ext, fmtN(b.A), b.B == null ? "" : fmtN(b.B), fmtN(b.nota), b.r == null ? "" : fmtN(b.r), fmtN(b.final), b.sit.t].join("\t"); })].join("\n");
          try { await navigator.clipboard.writeText(txt); toast("Boletim copiado."); } catch (e) { prompt("Copie o boletim:", txt); }
        };
      }
      if (aba === "registro") corpo.querySelectorAll("[data-abrir]").forEach(b => b.onclick = () => { dia = b.dataset.abrir; try { sessionStorage.setItem("painel:diario:" + t.id, dia); } catch (x) {} aba = "chamada"; history.replaceState(null, "", "#/painel/diario/" + t.id + "/chamada"); el.querySelectorAll(".pp-barra .pp-mis").forEach(x => x.classList.toggle("atual", /\/chamada$/.test(x.getAttribute("href")))); render(); });
      if (aba === "lembretes") {
        const salvar = () => salvarTurma({ lembretes: T.lembretes });
        q("#lb-add").onclick = () => { const v = q("#lb-novo").value.trim(); if (!v) return; T.lembretes = [...lemb(), { texto: v, feito: false, criadoEm: new Date().toISOString() }]; salvar(); render(); };
        corpo.querySelectorAll("[data-lb]").forEach(c => c.onchange = () => { T.lembretes = lemb().map((l, i) => i === +c.dataset.lb ? { ...l, feito: c.checked } : l); salvar(); render(); });
      }
    }
    render();
  }

  /* 🧩 cartão de apoio de um aluno: cada assunto num bloco com cor própria (o texto vem de alunos/{id}.apoio) */
  function cartaoApoio(a) {
    const linhas = String(a.apoio || "").split("\n").map(x => x.trim()).filter(Boolean);
    const tira = (l, re) => esc(l.replace(re, "").trim());
    let sentar = "", caminho = "", aee = "", prova = "", perfil = "", aula = "", outros = [];
    linhas.forEach(l => {
      if (/^📍/.test(l)) sentar = tira(l, /^📍\s*Sentar:\s*/);
      else if (/^🧭/.test(l)) caminho = tira(l, /^🧭\s*Caminho sugerido pelo PEI:\s*/);
      else if (/^🎓/.test(l)) { const [x, y] = l.replace(/^🎓\s*AEE:\s*/, "").split("·"); aee = esc((x || "").trim()); prova = esc((y || "").replace(/Prova com 3 alternativas:\s*/, "").trim()); }
      else if (/^👤/.test(l)) perfil = tira(l, /^👤\s*Perfil:\s*/);
      else if (/^✅/.test(l)) aula = tira(l, /^✅\s*Na aula:\s*/);
      else outros.push(esc(l));
    });
    const bl = (cls, tit, txt) => txt ? `<div class="ap-bl ${cls}"><span class="ap-tit">${tit}</span><span>${txt}</span></div>` : "";
    const tags = [a.trilha ? `<span class="ap-tag tri">👣 Trilha Passo a Passo</span>` : "", prova ? `<span class="ap-tag ${/sim/i.test(prova) ? "p3" : "pn"}">📝 Prova: ${/sim/i.test(prova) ? "3 alternativas" : "normal"}</span>` : "", aee ? `<span class="ap-tag aee">🎓 AEE ${aee}</span>` : "", a.emCasa ? `<span class="ap-tag casa">🏠 estuda em casa</span>` : ""].join("");
    return `<article class="ap-card"><header class="ap-nome">🧩 ${esc(a.nome)}</header>${tags ? `<div class="ap-tags">${tags}</div>` : ""}
      ${a.apoio ? `${bl("sentar", "📍 Onde sentar", sentar)}${bl("aula", "✅ Na aula", aula)}${bl("caminho", "🧭 Caminho", caminho)}${outros.length ? bl("outros", "📝 Anotações", outros.join("<br>")) : ""}
        ${perfil ? `<details class="ap-bl perfil"><summary class="ap-tit">👤 Perfil (dificuldades e habilidades)</summary><span>${perfil}</span></details>` : ""}`
        : `<p class="ajuda">Ainda sem anotação. Em Turmas, toque no nome do aluno → 📝 Apoios na aula.</p>`}</article>`;
  }
  async function telaAula(u, tid, mid) {
    const turmas = todasTurmas();
    tid = tid || sessionStorage.getItem("painel:turma") || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id);
    const apId = sessionStorage.getItem("painel:ap:" + t.serie.id);
    const ap = aps.find(a => a.id === apId) || aps.find(a => !a.oculta && !/trilha/.test(a.id)) || aps[0];
    await P.carregarApostila(ap.id);
    const C = P.conteudo[ap.id];
    mid = mid && C.missoes.some(m => m.id === mid) ? mid : C.missoes[0].id;
    const el = tela(topo(u, "aula") + `<div class="painel pp-barra">
        <label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
        ${aps.length > 1 ? `<label>Apostila <select id="ap">${aps.map(a => `<option value="${a.id}" ${a.id === ap.id ? "selected" : ""}>${esc(a.titulo || a.id)}</option>`).join("")}</select></label>` : ""}
        <span class="pp-missoes">${C.missoes.map(m => `<a class="pp-mis ${m.id === mid ? "atual" : ""}" href="#/painel/aula/${t.id}/${m.id}">${esc(m.icone)} ${esc(m.id.toUpperCase())}</a>`).join("")}</span>
        <a class="btn btn-sec" href="#/ver/${ap.id}/${mid}/${t.id}" target="_blank" rel="noopener" title="Abre numa aba nova a apostila exatamente como os alunos veem">👀 Abrir a apostila do aluno</a></div>
      <div id="aula"></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/aula/" + e.target.value + "/" + mid; };
    const sa = el.querySelector("#ap"); if (sa) sa.onchange = e => { try { sessionStorage.setItem("painel:ap:" + t.serie.id, e.target.value); } catch (x) {} telaAula(u, t.id); };
    // 📣 avisos para o professor falar à turma (com a fala pronta); "✔ Já avisei" esconde só para esta turma
    try {
      const AVISOS = [{ id: "outra-turma-1", tit: "Quem faz a aula em outro horário",
        porque: "As tarefas do portal (Mão na massa, Básico, Desafio e Turbo) vão abrir só no dia e na hora da aula de cada turma. Quem vem em outro horário (por causa de curso, karatê, natação…) ficaria travado.",
        fala: "“Pessoal, um aviso importante: as tarefas do portal vão abrir só no dia e no horário da aula da turma de vocês. Se você faz a aula de Informática em outro horário, junto com outra turma, me avise hoje, porque eu preciso liberar o seu acesso. Se não avisar, as tarefas não vão abrir para você nesse outro horário. Os textos para estudar continuam abertos a qualquer hora, até em casa.”",
        depois: "Quem avisar: em 🏫 Turmas, toque no nome do aluno → 🏫 Frequenta a aula de outra turma." }];
      const chave = id => "painel:aviso:" + id + ":" + t.id;
      const pend = AVISOS.filter(x => { try { return !localStorage.getItem(chave(x.id)); } catch (e) { return true; } });
      if (pend.length) {
        const box = document.createElement("details"); box.className = "painel pp-avisos"; box.open = true;
        box.innerHTML = `<summary><strong>📣 Avisos para falar à turma</strong> (${pend.length})</summary>${pend.map(x => `<div class="pp-aviso" data-av="${x.id}">
          <p><strong>${esc(x.tit)}</strong> — ${esc(x.porque)}</p><p class="pp-fala">🗣️ ${esc(x.fala)}</p><p class="ajuda">${esc(x.depois)}</p>
          <button class="btn btn-sec btn-peq" type="button" data-avok="${x.id}">✔ Já avisei esta turma</button></div>`).join("")}`;
        el.querySelector("#aula").before(box);
        box.querySelectorAll("[data-avok]").forEach(b => b.onclick = () => { try { localStorage.setItem(chave(b.dataset.avok), Date.now()); } catch (e) {} b.closest(".pp-aviso").remove(); if (!box.querySelector(".pp-aviso")) box.remove(); });
      }
    } catch (e) { console.warn(e); }
    // 📌 Missão de hoje: o aluno cai direto nela depois do código; se "travar", as tarefas das outras missões fecham
    try {
      const hRef = db().collection("config").doc("hoje_" + t.id), hs = await hRef.get();
      const hj = hs.exists && hs.data().dia === N.hoje() ? hs.data() : null;
      const baseId = ap.base || ap.id, m0 = C.missoes.find(x => x.id === mid);
      const tit = hj ? ((C.missoes.find(x => x.id === hj.mid) || {}).titulo || hj.mid.toUpperCase()) : "";
      const box = document.createElement("div"); box.className = "pp-trava pp-hoje";
      box.innerHTML = `<span>📌 Missão de hoje:</span> <span class="st">${hj ? `${esc(tit.replace(/ –.*/, ""))}${hj.travar ? " · 🔒 só ela" : ""}` : "nenhuma"}</span>
        ${hj && hj.mid === mid ? "" : `<button class="btn btn-sec btn-peq" type="button" data-hj="def">📌 Definir a ${esc(mid.toUpperCase())} como Missão de hoje</button>`}
        ${hj ? `<label class="pp-auto"><input type="checkbox" data-hj="trav" ${hj.travar ? "checked" : ""}> 🔒 Travar só nela</label><button class="btn btn-sec btn-peq" type="button" data-hj="tira">✖ Tirar</button>` : ""}`;
      el.querySelector(".pp-barra").appendChild(box);
      box.querySelectorAll("[data-hj]").forEach(b => (b.type === "checkbox" ? b.onchange = null : 0, b[b.type === "checkbox" ? "onchange" : "onclick"] = async () => {
        const k = b.dataset.hj;
        if (k === "def") await hRef.set({ dia: N.hoje(), aid: baseId, mid, titulo: m0 ? m0.titulo.replace(/ –.*/, "") + " – " + m0.titulo.replace(/^[^–]*– ?/, "") : mid, travar: !!(hj && hj.travar) });
        if (k === "trav") await hRef.set({ travar: b.checked }, { merge: true });
        if (k === "tira") await hRef.set({ dia: "", mid: "" });
        toast("Feito!"); telaAula(u, t.id, mid);
      }));
    } catch (e) { console.warn(e); }
    // 🔒 liberar ou fechar as tarefas da turma fora do horário
    try {
      const [g, ls] = await Promise.all([config(), db().collection("config").doc("liberar_" + t.id).get()]);
      const lib = ls.exists ? ls.data() : {}, ag = Date.now(), hm = ms => new Date(ms).toTimeString().slice(0, 5);
      const noHor = P.trava && P.trava.noHorario(t, ag);
      const st = !g.travaHorario ? "⚪ Trava desligada: tarefas sempre abertas" : lib.fechadaAte > ag ? `🔒 Fechadas por você até ${hm(lib.fechadaAte)}` : lib.ate > ag ? `🔓 Liberadas por você até ${hm(lib.ate)}` : noHor ? "🟢 Abertas (horário da aula)" : `🔒 Fechadas (abrem ${P.trava ? P.trava.horarioTxt(t) : "no horário da aula"})`;
      const box = document.createElement("div"); box.className = "pp-trava";
      box.innerHTML = `<span>Tarefas desta turma:</span> <span class="st">${st}</span>
        ${g.travaHorario ? `<button class="btn btn-sec btn-peq" type="button" data-tr="lib">🔓 Liberar a turma agora</button><button class="btn btn-sec btn-peq" type="button" data-tr="fecha">🔒 Fechar agora</button>${lib.ate > ag || lib.fechadaAte > ag ? `<button class="btn btn-sec btn-peq" type="button" data-tr="normal">↩️ Voltar ao horário normal</button>` : ""}` : `<a class="btn btn-sec btn-peq" href="#/painel/ano">Ligar a trava</a>`}`;
      el.querySelector(".pp-barra").appendChild(box);
      const ref = db().collection("config").doc("liberar_" + t.id);
      box.querySelectorAll("[data-tr]").forEach(b => b.onclick = async () => {
        const k = b.dataset.tr;
        if (k === "lib") { const m = prompt("Liberar as tarefas da turma toda por quantos minutos?", "75"); if (!m || !(+m > 0)) return; await ref.set({ ate: Date.now() + (+m) * 60000, fechadaAte: 0 }, { merge: true }); }
        if (k === "fecha") { const fimAula = (() => { const d = new Date(); if (!t.aula) return Date.now() + 75 * 60000; const [H, M] = t.aula.ini.split(":").map(Number); d.setHours(H, M + (cat().duracaoAula || 75) + (cat().toleranciaTarefas || 15), 0, 0); return Math.max(d.getTime(), Date.now() + 60000); })(); await ref.set({ fechadaAte: fimAula, ate: 0 }, { merge: true }); }
        if (k === "normal") await ref.set({ ate: 0, fechadaAte: 0 }, { merge: true });
        toast("Feito!"); telaAula(u, t.id, mid);
      });
    } catch (e) { console.warn(e); }
    // 🧩 apoios dos alunos atípicos da turma (anotações só do professor, guardadas no cadastro do aluno)
    try {
      const todosT = (await alunosDaTurma(t.id)).filter(a => a.ativo !== false && !a.teste);
      const casa = todosT.filter(a => a.emCasa);
      if (casa.length) {
        const bc = document.createElement("div"); bc.className = "painel pp-casa";
        bc.innerHTML = `<strong>🏠 Estudam em casa (entregam a apostila):</strong> ${casa.map(a => esc(a.nome) + (a.emCasaObs ? ` <small>(${esc(a.emCasaObs)})</small>` : "")).join(" · ")}<br><small>Quando entregarem, lance no 📒 Diário: Básico e ★ na data de cada missão.</small>`;
        el.querySelector("#aula").before(bc);
      }
      const atip = todosT.filter(a => a.atipico);
      if (atip.length) {
        const box = document.createElement("details"); box.className = "painel pp-apoios"; box.open = atip.some(a => a.apoio);
        box.innerHTML = `<summary><strong>🧩 Apoios dos alunos atípicos desta turma</strong> (${atip.length})</summary>
          <div class="ap-lista">${atip.map(cartaoApoio).join("")}</div>`;
        el.querySelector("#aula").before(box);
      }
    } catch (e) { console.warn(e); }
    await P.aula.render(el.querySelector("#aula"), ap.id, mid, t.id, { vivo: async (aid, m, turma) => {
      const prog = await progressoDaTurma(turma), d = N.hoje();
      const entraram = new Set(prog.filter(p => p.dias && p.dias[d]).map(p => p.alunoId));
      const basico = new Set(prog.filter(p => (p.aid === aid || (cat().apostilas.find(y => y.id === p.aid) || {}).base === aid) && p.mid === m && p.basicoOk).map(p => p.alunoId));
      return { entraram: entraram.size, basico: [...basico].filter(x => entraram.has(x)).length };
    } });
  }

  /* -------- Importar alunos (lista colada ou arquivo) -------- */
  async function telaImportar(u) {
    const turmas = todasTurmas();
    const cfg = await config();
    const el = tela(topo(u, "importar") + `
      <div class="painel"><h2>Colar uma lista</h2><p>Um aluno por linha, com nome completo. Nomes que já existem na turma são ignorados. Cada aluno novo recebe um código de 4 números.</p>
        <label>Turma <select id="tt">${turmas.map(x => `<option value="${x.id}">${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
        <textarea id="lista" rows="10" class="pp-area" placeholder="Ana Clara Souza&#10;Pedro Henrique Lima"></textarea>
        <div class="row-btns"><button class="btn" id="imp1" type="button">📥 Importar para esta turma</button></div></div>
      <div class="painel"><h2>Importar arquivo de várias turmas</h2><p>Arquivo <strong>.json</strong> no formato preparado pelo Claude (todas as turmas de uma vez).</p>
        <input type="file" id="arq" accept=".json,application/json"> <button class="btn" id="imp2" type="button">📥 Importar arquivo</button></div>
      <div class="painel"><h2>🧩 Marcar alunos atípicos (com PEI)</h2><p>Cole os nomes completos, um por linha. O portal procura em todas as turmas e coloca o 🧩 ao lado do nome: na tabela da turma, na presença, no relatório da aula e nos cartões com os códigos. Esta marcação fica só no painel do professor.</p>
        <textarea id="atip" rows="8" class="pp-area" placeholder="Nome completo do aluno"></textarea>
        <div class="row-btns"><button class="btn" id="atipok" type="button">🧩 Marcar</button></div><div id="atipres"></div></div>
      <div class="painel"><h2>🧪 Alunos de teste</h2><p>Cria um aluno <strong>“Aluno Teste”</strong> em cada turma, para você testar a entrada com código. Depois dos testes, use <strong>Remover alunos de teste</strong>.</p>
        <div class="row-btns"><button class="btn btn-sec" id="tst" type="button">🧪 Criar alunos de teste</button><button class="btn btn-sec" id="tstx" type="button">🧹 Remover alunos de teste</button></div>
        <div id="tstres"></div></div>
      <div id="res" class="painel" hidden></div>
      <p class="ajuda">Ano letivo atual: <strong>${esc(cfg.ano)}</strong>.</p>`);
    ligarSair(el);
    const res = el.querySelector("#res");
    const mostrar = (titulo, grupos) => {
      res.hidden = false;
      res.innerHTML = `<h2>${esc(titulo)}</h2>` + grupos.map(([tid, r]) => `<p><strong>${esc(nomeTurma(tid))}</strong>: ${r.length} aluno(s) novo(s)</p>`).join("") +
        `<p class="ajuda">Os códigos aparecem na aba 🏫 Turmas e nos cartões para imprimir.</p>`;
    };
    const mostrarTestes = async () => {
      const q = await db().collection("alunos").where("teste", "==", true).get();
      const lin = q.docs.map(d => d.data()).sort((x, y) => turmas.findIndex(t => t.id === x.turma) - turmas.findIndex(t => t.id === y.turma));
      el.querySelector("#tstres").innerHTML = lin.length ? `<table class="pp-tabela"><thead><tr><th>Turma</th><th>Aluno</th><th>Código</th><th>Situação</th></tr></thead><tbody>${lin.map(a => `<tr><td>${esc(nomeTurma(a.turma))}</td><td>${esc(a.nome)}</td><td class="pp-cod">${esc(a.codigo)}</td><td>${a.ativo ? "ativo" : "desativado"}</td></tr>`).join("")}</tbody></table>` : `<p class="ajuda">Nenhum aluno de teste no momento.</p>`;
    };
    mostrarTestes().catch(() => null);
    el.querySelector("#atipok").onclick = async () => {
      const sem = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
      const nomes = el.querySelector("#atip").value.split("\n").map(sem).filter(Boolean);
      if (!nomes.length) return;
      const q = await db().collection("alunos").get();
      const achou = [], ops = [];
      q.docs.forEach(d => { const a = d.data(); if (nomes.includes(sem(a.nome))) { achou.push(sem(a.nome)); if (!a.atipico) ops.push(b => b.update(d.ref, { atipico: true })); } });
      await lotes(ops);
      const falta = nomes.filter(n => !achou.includes(n));
      el.querySelector("#atipres").innerHTML = `<p>✅ ${achou.length} aluno(s) marcado(s) com 🧩.</p>` + (falta.length ? `<p>⚠️ Não encontrei (confira a grafia no cadastro): ${falta.map(esc).join(" · ")}</p>` : "");
    };
    el.querySelector("#tst").onclick = async () => {
      const b = el.querySelector("#tst"); b.disabled = true; b.textContent = "Criando…";
      try {
        const ja = new Set((await db().collection("alunos").where("teste", "==", true).get()).docs.map(d => d.data().turma));
        for (const t of turmas) {
          if (ja.has(t.id)) continue;
          const r = await adicionarAlunos(t.id, [{ nome: "Aluno Teste" }], cfg.ano);
          if (r[0]) await db().collection("alunos").doc(r[0].id).update({ teste: true });
        }
        await mostrarTestes(); toast("Alunos de teste prontos!");
      } catch (err) { alert("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "🧪 Criar alunos de teste";
    };
    el.querySelector("#tstx").onclick = async () => {
      if (!confirm("Remover todos os alunos de teste (e o que eles fizeram no portal)?")) return;
      try {
        const q = await db().collection("alunos").where("teste", "==", true).get();
        const ops = [];
        for (const d of q.docs) {
          const a = d.data();
          ops.push(x => x.delete(d.ref)); ops.push(x => x.delete(db().collection("acessos").doc(a.turma + "_" + a.codigo)));
          const pr = await db().collection("progresso").where("alunoId", "==", d.id).get();
          pr.docs.forEach(p => ops.push(x => x.delete(p.ref)));
        }
        await lotes(ops); await mostrarTestes(); toast("Alunos de teste removidos.");
      } catch (err) { alert("Erro: " + (err.message || err)); }
    };
    el.querySelector("#imp1").onclick = async () => {
      const tid = el.querySelector("#tt").value;
      const nomes = el.querySelector("#lista").value.split(/\r?\n/).map(arrumarNome).filter(n => n.length > 2);
      if (!nomes.length) return alert("Cole pelo menos um nome.");
      const b = el.querySelector("#imp1"); b.disabled = true; b.textContent = "Importando…";
      try { const r = await adicionarAlunos(tid, nomes.map(nome => ({ nome })), cfg.ano); mostrar("Importação concluída", [[tid, r]]); el.querySelector("#lista").value = ""; }
      catch (err) { alert("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "📥 Importar para esta turma";
    };
    el.querySelector("#imp2").onclick = async () => {
      const f = el.querySelector("#arq").files[0]; if (!f) return alert("Escolha o arquivo.");
      let d; try { d = JSON.parse(await f.text()); } catch (e) { return alert("Arquivo inválido."); }
      const ts = d && d.turmas ? Object.keys(d.turmas).filter(tid => turmas.some(x => x.id === tid)) : [];
      if (!ts.length) return alert("O arquivo não tem turmas reconhecidas.");
      const total = ts.reduce((n, tid) => n + d.turmas[tid].length, 0);
      if (!confirm(`Importar ${total} alunos em ${ts.length} turmas?`)) return;
      const b = el.querySelector("#imp2"); b.disabled = true;
      const grupos = [];
      try { for (const tid of ts) { b.textContent = "Importando " + nomeTurma(tid) + "…"; grupos.push([tid, await adicionarAlunos(tid, d.turmas[tid], d.ano || cfg.ano)]); } mostrar("Importação concluída", grupos); }
      catch (err) { alert("Erro: " + (err.message || err)); if (grupos.length) mostrar("Importação parcial", grupos); }
      b.disabled = false; b.textContent = "📥 Importar arquivo";
    };
  }

  /* -------- Ano letivo: virada de ano -------- */
  async function telaAno(u) {
    const cfg = await config();
    const el = tela(topo(u, "ano") + `<div class="painel"><h2>Ano letivo atual: ${esc(cfg.ano)}</h2>
      <p>No começo de cada ano letivo:</p><ol><li>Clique em <strong>Começar novo ano</strong>: todos os alunos ativos são desativados (os códigos param de funcionar), mas o histórico fica guardado.</li>
      <li>Importe as listas novas na aba <a href="#/painel/importar">📥 Importar alunos</a>.</li><li>Imprima os cartões com os códigos novos.</li></ol>
      <div class="row-btns"><button class="btn" id="novo" type="button">📅 Começar o ano ${esc(cfg.ano + 1)}</button></div></div>
      <div class="painel"><h2>🔒 Trava de horário das tarefas</h2>
        <p>Situação: <span class="pp-prova-st ${cfg.travaHorario ? "on" : "off"}">${cfg.travaHorario ? "🔒 LIGADA" : "⚪ Desligada"}</span></p>
        <p>Ligada, as <strong>tarefas</strong> (Mão na massa, Básico, Desafio, Turbo, Perguntas rápidas, Autoavaliação e Resumo) só abrem no <strong>dia e na hora da aula</strong> de cada turma, com ${esc(cat().toleranciaTarefas || 15)} minutos de tolerância antes e depois. Os textos de estudo ficam sempre abertos, inclusive em casa.</p>
        <p class="ajuda">Para liberar fora do horário: a turma toda, na aba 🎤 Aula; só um aluno (falta, reposição, estuda em casa) ou aluno que frequenta a aula de outra turma, em 🏫 Turmas → toque no nome do aluno.</p>
        <div class="row-btns"><button class="btn" id="trava" type="button">${cfg.travaHorario ? "⚪ Desligar a trava" : "🔒 Ligar a trava"}</button></div></div>`);
    ligarSair(el);
    el.querySelector("#trava").onclick = async () => {
      if (!cfg.travaHorario && !confirm("Ligar a trava? A partir de agora, os alunos só fazem as tarefas no horário da aula da turma.")) return;
      await db().collection("config").doc("geral").set({ travaHorario: !cfg.travaHorario }, { merge: true });
      toast(cfg.travaHorario ? "Trava desligada." : "Trava ligada."); telaAno(u);
    };
    el.querySelector("#novo").onclick = async () => {
      if (!confirm(`Começar o ano letivo ${cfg.ano + 1}? Todos os alunos ativos de ${cfg.ano} serão desativados.`)) return;
      if (prompt(`Para confirmar, digite ${cfg.ano + 1}:`) !== String(cfg.ano + 1)) return alert("Cancelado.");
      const b = el.querySelector("#novo"); b.disabled = true; b.textContent = "Desativando…";
      try {
        const q = await db().collection("alunos").where("ativo", "==", true).get();
        const ops = [];
        q.docs.forEach(d => { const a = d.data(); ops.push(x => x.update(d.ref, { ativo: false })); ops.push(x => x.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: d.id, turma: a.turma, ativo: false, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })); });
        ops.push(x => x.set(db().collection("config").doc("geral"), { ano: cfg.ano + 1, viradaEm: Date.now() }, { merge: true }));
        await lotes(ops);
        alert(`Pronto! ${q.size} alunos desativados. Agora importe as listas de ${cfg.ano + 1}.`);
        location.hash = "#/painel/importar";
      } catch (err) { alert("Erro: " + (err.message || err)); b.disabled = false; }
    };
  }

  P.painel = {
    async abrir(mount, sub, arg, arg2) {
      mountFn = mount;
      await (N.app(0).pronto);
      await new Promise(ok => { const x = auth().onAuthStateChanged(() => { x(); ok(); }); });
      const u = await entrar();
      try {
        if (sub === "aula") return await telaAula(u, arg, arg2);
        if (sub === "presenca") return await telaPresenca(u, arg);
        if (sub === "prova") return await telaProvaPainel(u, arg);
        if (sub === "diario") return await telaDiario(u, arg, arg2);
        if (sub === "importar") return await telaImportar(u);
        if (sub === "ano") return await telaAno(u);
        return await telaTurmas(u, sub === "turma" ? arg : null);
      } catch (err) {
        console.error(err);
        tela(`<div class="painel erro"><h1>Não foi possível abrir o painel</h1><p>${esc(err.message || err)}</p>
          <p>Se aparecer “permission” ou “insufficient permissions”, confira se as regras de segurança foram publicadas no Firebase e se você entrou com ${esc(N.EMAIL_PROFESSOR)}.</p></div>`);
      }
    }
  };
})();

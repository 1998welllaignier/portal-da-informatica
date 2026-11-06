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
      b => b.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: a.id, turma: a.turma, ativo, nome: a.nome })
    ]);
  }
  async function novoCodigo(a, novaTurma) {
    const tid = novaTurma || a.turma;
    const codigo = sorteiaCodigo(await codigosUsados(tid));
    await lotes([
      b => b.delete(db().collection("acessos").doc(a.turma + "_" + a.codigo)),
      b => b.update(db().collection("alunos").doc(a.id), { turma: tid, codigo, ativo: true, ...(novaTurma ? { turmaAnterior: a.turma, trocouEm: Date.now() } : {}) }),
      b => b.set(db().collection("acessos").doc(tid + "_" + codigo), { alunoId: a.id, turma: tid, ativo: true, nome: a.nome })
    ]);
    return codigo;
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
    <nav class="pp-abas">${[["", "🏫 Turmas"], ["presenca", "🗓️ Presença"], ["importar", "📥 Importar alunos"], ["ano", "📅 Ano letivo"]].map(([k, r]) =>
      `<a href="#/painel${k ? "/" + k : ""}" class="${ativo === k ? "atual" : ""}">${r}</a>`).join("")}</nav>`;
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
    await Promise.all(aps.map(a => P.carregarApostila(a.id).catch(() => null)));
    const [alunos, prog] = await Promise.all([alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const pm = {}; prog.forEach(p => { (pm[p.alunoId] = pm[p.alunoId] || []).push(p); });
    const missoes = []; aps.forEach(a => { const C = P.conteudo[a.id]; if (C) C.missoes.forEach(m => missoes.push({ aid: a.id, m })); });
    const corpo = el.querySelector("#corpo");
    function desenhar() {
      const verInat = el.querySelector("#inat").checked;
      const lista = alunos.filter(a => verInat || a.ativo);
      if (!alunos.length) { corpo.innerHTML = `<div class="painel"><p>Nenhum aluno cadastrado nesta turma ainda.</p><p>Use <strong>➕ Adicionar aluno</strong> ou a aba <a href="#/painel/importar">📥 Importar alunos</a>.</p></div>`; return; }
      const cel = (a, x) => {
        const p = (pm[a.id] || []).find(q => q.aid === x.aid && q.mid === x.m.id);
        if (!p) return `<td class="pp-c vazio" title="não começou">—</td>`;
        const b = p.basico || [0, 0], d = p.desafio || [0, 0];
        const tit = `Básico ${b[0]}/${b[1]}` + (d[1] ? ` · Desafio ${d[0]}/${d[1]}` : "") + (p.dias ? ` · dias: ${Object.keys(p.dias).sort().map(dataBR).join(", ")}` : "");
        return `<td class="pp-c ${p.basicoOk ? "ok" : "meio"}" title="${esc(tit)}">${p.basicoOk ? "✔" : `${b[0]}/${b[1]}`}${d[1] && d[0] === d[1] ? "⭐" : ""}</td>`;
      };
      const dias = a => { const s = new Set(); (pm[a.id] || []).forEach(p => Object.keys(p.dias || {}).forEach(d => s.add(d))); return s.size; };
      corpo.innerHTML = `<div class="painel pp-tabela-wrap"><p class="ajuda">✔ Básico concluído · ⭐ Desafio completo · 3/5 = andamento do Básico · — não começou. Passe o mouse para ver os detalhes. <strong>${alunos.filter(a => a.ativo).length}</strong> alunos ativos.</p>
        <table class="pp-tabela"><thead><tr><th>Aluno</th><th>Código</th><th title="dias em que entrou no portal">Dias</th>${missoes.map(x => `<th title="${esc(x.m.titulo)}">${esc(x.m.icone)}<br><small>${esc(x.m.id.toUpperCase())}</small></th>`).join("")}<th></th></tr></thead>
        <tbody>${lista.map(a => `<tr class="${a.ativo ? "" : "inativo"}"><td>${esc(a.nome)}${a.ativo ? "" : " <small>(desativado)</small>"}</td><td class="pp-cod">${esc(a.codigo)}</td><td>${dias(a)}</td>${missoes.map(x => cel(a, x)).join("")}
          <td><button class="btn btn-link btn-peq" data-a="${a.id}" type="button">⚙️</button></td></tr>`).join("")}</tbody></table></div>`;
      corpo.querySelectorAll("[data-a]").forEach(b => b.onclick = () => menuAluno(alunos.find(a => a.id === b.dataset.a)));
    }
    el.querySelector("#inat").onchange = desenhar;
    desenhar();

    function menuAluno(a) {
      const dlg = h(`<dialog class="pp-dlg"><form method="dialog"><h2>${esc(a.nome)}</h2><p>${esc(nomeTurma(a.turma))} · código <strong>${esc(a.codigo)}</strong> · ${a.ativo ? "ativo" : "desativado"}</p>
        <div class="pp-dlg-btns">
          <button class="btn btn-sec" value="cod" type="button" data-x="cod">🔑 Gerar novo código</button>
          <button class="btn btn-sec" value="nome" type="button" data-x="nome">✏️ Corrigir nome</button>
          <button class="btn btn-sec" type="button" data-x="turma">🔀 Mudar de turma</button>
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
          const p = (pm[a.id] || []).find(q => q.aid === x.aid && q.mid === x.m.id);
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
      <div class="n">${esc(a.nome)}</div><div class="t">Turma: <strong>${esc(nomeTurma(t.id))}</strong></div><div class="t">Seu código:</div><div class="k">${esc(a.codigo)}</div>
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
      <div id="corpo"><p class="painel">Carregando…</p></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { try { sessionStorage.setItem("painel:turma", e.target.value); } catch (x) {} location.hash = "#/painel/presenca/" + e.target.value; };
    const [alunos, prog] = await Promise.all([alunosDaTurma(t.id), progressoDaTurma(t.id)]);
    const porDia = {};
    prog.forEach(p => Object.entries(p.dias || {}).forEach(([d, ts]) => {
      const x = (porDia[d] = porDia[d] || {}); const r = (x[p.alunoId] = x[p.alunoId] || { ini: ts, basico: false });
      r.ini = Math.min(r.ini, ts); if (p.basicoOkEm && p.basicoOkEm[d]) r.basico = true;
    }));
    const dias = Object.keys(porDia).sort().reverse();
    const nome = id => (alunos.find(a => a.id === id) || { nome: "(aluno removido)" }).nome;
    const hhmm = ms => new Date(ms).toLocaleTimeString("pt-BR").slice(0, 5);
    el.querySelector("#corpo").innerHTML = dias.length ? dias.map(d => {
      const ids = Object.keys(porDia[d]).sort((a, b) => nome(a).localeCompare(nome(b), "pt-BR"));
      const aus = alunos.filter(a => a.ativo && !porDia[d][a.id]);
      return `<details class="painel pp-dia" ${d === dias[0] ? "open" : ""}><summary><strong>${dataBR(d)}</strong> (${semana(d)}) · <strong>${ids.length}</strong> presentes · ${ids.filter(i => porDia[d][i].basico).length} concluíram o Básico</summary>
        <ol>${ids.map(i => `<li>${esc(nome(i))} <small>entrou às ${hhmm(porDia[d][i].ini)}${porDia[d][i].basico ? " · ✔ Básico" : ""}</small></li>`).join("")}</ol>
        <details><summary>Ausentes (${aus.length})</summary><p>${aus.map(a => esc(a.nome)).join(" · ") || "—"}</p></details>
        <button class="btn btn-sec btn-peq" type="button" data-d="${d}">📋 Copiar lista de presentes</button></details>`;
    }).join("") : `<div class="painel"><p>Ainda não há registros nesta turma. A presença aparece aqui quando os alunos entram no portal com o código.</p></div>`;
    el.querySelectorAll("[data-d]").forEach(b => b.onclick = () => {
      const d = b.dataset.d;
      const txt = `${nomeTurma(t.id)} — ${dataBR(d)}\nPresentes (${Object.keys(porDia[d]).length}):\n` + Object.keys(porDia[d]).map(nome).sort((a, c) => a.localeCompare(c, "pt-BR")).join("\n");
      navigator.clipboard.writeText(txt).then(() => toast("Lista copiada!"), () => alert(txt));
    });
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
      <div class="row-btns"><button class="btn" id="novo" type="button">📅 Começar o ano ${esc(cfg.ano + 1)}</button></div></div>`);
    ligarSair(el);
    el.querySelector("#novo").onclick = async () => {
      if (!confirm(`Começar o ano letivo ${cfg.ano + 1}? Todos os alunos ativos de ${cfg.ano} serão desativados.`)) return;
      if (prompt(`Para confirmar, digite ${cfg.ano + 1}:`) !== String(cfg.ano + 1)) return alert("Cancelado.");
      const b = el.querySelector("#novo"); b.disabled = true; b.textContent = "Desativando…";
      try {
        const q = await db().collection("alunos").where("ativo", "==", true).get();
        const ops = [];
        q.docs.forEach(d => { const a = d.data(); ops.push(x => x.update(d.ref, { ativo: false })); ops.push(x => x.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: d.id, turma: a.turma, ativo: false, nome: a.nome })); });
        ops.push(x => x.set(db().collection("config").doc("geral"), { ano: cfg.ano + 1, viradaEm: Date.now() }, { merge: true }));
        await lotes(ops);
        alert(`Pronto! ${q.size} alunos desativados. Agora importe as listas de ${cfg.ano + 1}.`);
        location.hash = "#/painel/importar";
      } catch (err) { alert("Erro: " + (err.message || err)); b.disabled = false; }
    };
  }

  P.painel = {
    async abrir(mount, sub, arg) {
      mountFn = mount;
      await (N.app(0).pronto);
      await new Promise(ok => { const x = auth().onAuthStateChanged(() => { x(); ok(); }); });
      const u = await entrar();
      try {
        if (sub === "presenca") return await telaPresenca(u, arg);
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

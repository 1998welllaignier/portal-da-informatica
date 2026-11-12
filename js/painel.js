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
  // 🕘 turma do horário: sem turma escolhida, o painel abre na turma que está em aula agora (15 min de folga antes
  // e depois) ou na próxima aula de hoje. Se o professor trocar de turma à mão, a escolha vale até a próxima aula começar.
  const ss = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} } };
  function turmaDaHora(turmas) {
    const ag = new Date(), dia = ag.getDay(), min = ag.getHours() * 60 + ag.getMinutes();
    const meiaNoite = new Date(ag.getFullYear(), ag.getMonth(), ag.getDate()).getTime();
    const hoje = turmas.filter(t => t.aula && t.aula.dia === dia && t.aula.ini).map(t => { const [hh, mm] = t.aula.ini.split(":").map(Number); return { t, ini: hh * 60 + mm }; }).sort((a, b) => a.ini - b.ini || (a.t.serie.id === "5") - (b.t.serie.id === "5")); // no mesmo horário, a turma regular vem antes do 5º ano
    const atual = hoje.find(x => min >= x.ini - 15 && min < x.ini + 90);
    if (atual) return { id: atual.t.id, desde: meiaNoite + (atual.ini - 15) * 60000 };
    const prox = hoje.find(x => x.ini - 15 > min);
    if (prox) { const antes = hoje.filter(x => x.ini + 90 <= min).pop(); return { id: prox.t.id, desde: meiaNoite + (antes ? antes.ini + 90 : 0) * 60000 }; }
    return null;
  }
  function escolherTurma(tid, turmas) {
    if (tid) { if (tid !== ss.get("painel:turma")) ss.set("painel:turmaManual", String(Date.now())); return tid; }
    const a = turmaDaHora(turmas), manual = +ss.get("painel:turmaManual") || 0;
    if (a && manual < a.desde) return a.id;
    return ss.get("painel:turma") || (a && a.id) || (turmas.find(x => x.serie.id === "6") || turmas[0]).id;
  }
  // missão do dia pelo cronograma da turma (a de hoje ou a última que já passou)
  function missaoDoDia(t, C) {
    const ag = new Date(), hoje = `${ag.getFullYear()}-${String(ag.getMonth() + 1).padStart(2, "0")}-${String(ag.getDate()).padStart(2, "0")}`;
    const ok = Object.entries(t.missoes4 || {}).filter(([d, m]) => d <= hoje && C.missoes.some(x => x.id === m)).sort();
    return ok.length ? ok[ok.length - 1][1] : null;
  }
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
      <div class="pp-user"><button class="btn btn-peq pp-hor-btn" id="pp-hor" type="button">🗓️ Horários</button><button class="btn btn-peq pp-hor-btn" id="pp-cod" type="button">🔑 Códigos</button><button class="btn btn-peq pp-vivo-btn" id="pp-vivo" type="button">🔴 Ao vivo</button><button class="btn btn-peq pp-placar-btn" id="pp-placar" type="button" title="Abre numa aba nova, para deixar no projetor">🏆 Placar</button><button class="btn btn-peq pp-hor-btn" id="pp-tema" type="button" title="Decoração do portal por época do ano">🎨 Tema</button><button class="btn btn-peq pp-fim-btn" id="pp-fim" type="button" title="Finaliza a aula agora: fecha as tarefas e mostra o pódio">🏁 Finalizar aula</button><span>${esc(u.email)}</span><button class="btn btn-sec btn-peq" id="pp-sair" type="button">Sair do painel</button></div></div>
    <nav class="pp-abas">${[["aula", "🎤 Aula"], ["", "🏫 Turmas"], ["diario", "📒 Diário"], ["presenca", "🗓️ Presença"], ["prova", "📝 Prova"], ["importar", "📥 Importar alunos"], ["ano", "📅 Ano letivo"]].map(([k, r]) =>
      `<a href="#/painel${k ? "/" + k : ""}" class="${ativo === k ? "atual" : ""}">${r}</a>`).join("")}</nav>${ajudaAba(ativo)}`;
  /* ❓ quadro "Para que serve e como usar" de cada aba (fica fechado; o professor abre quando quiser) */
  const AJUDA = {
    aula: ["Use durante a aula, projetando ou no seu computador.", [
      "<b>🟧 Recados para esta aula</b>: o quadro laranja no topo mostra os recados que você deixou para a turma (os mesmos do 📒 Diário › 🔔 Lembretes). Depois de ler, toque em “✔ Já li”: o recado sai do quadro em todos os computadores, mas não é apagado; vai para o “📜 Histórico de recados desta turma”, com a data em que foi anotado e a data em que foi lido. Para deixar um recado para a próxima aula, abra “✏️ Deixar um recado…” logo abaixo dos recados.",
      "<b>📣 Avisos para falar à turma</b>: aparecem no topo com a fala pronta. Depois de falar, toque em “✔ Já avisei esta turma” (o aviso some só daquela turma, neste computador).",
      "<b>🕘 A turma já vem certa</b>: ao abrir o painel, ele escolhe sozinho a turma que está em aula agora (ou a próxima aula de hoje) e a missão do dia pelo cronograma. Para ver outra turma, é só trocar na lista; a sua escolha vale até a próxima aula começar.",
      "<b>Escolha a turma e a missão</b> (M1, M2…). Aparece o roteiro da aula com as falas, as respostas de cada atividade e quantos alunos já entraram e concluíram o Básico.",
      "<b>🎬 Apresentar</b>: abre numa aba nova os slides animados da missão (os mesmos assuntos do vídeo e da apostila), para projetar. Avance com → , espaço, clique ou passador; volte com ←; F deixa em tela cheia; Esc sai.",
      "<b>👀 Abrir a apostila do aluno</b>: abre, numa aba nova, a apostila exatamente como o aluno vê. Nada do que você fizer ali conta.",
      "<b>📺 Vídeo da missão</b>: quando a missão já tem vídeo no seu canal do YouTube (não listado), o player aparece nesta aba. Dê o play ali mesmo ou toque em <b>↗️ Abrir player em nova aba</b>, que abre só o vídeo numa aba própria, ocupando a tela toda (bom para projetar). Só você vê; os alunos não.",
      "<b>🪧 Cartaz de entrada</b>: abre, numa aba nova, o mesmo cartaz da porta (endereço do site e os 4 passos para entrar), em tela cheia, para projetar no começo da aula. Aperte F11 para tela cheia.",
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
      "<b>🚦 Aula que não aconteceu normalmente</b>: na Chamada, abra “Esta aula não aconteceu normalmente?”. <b>🚫 Nenhum aluno veio</b> dá falta para todos. <b>🙋 O professor não pôde vir</b>, <b>🎉 Feriado</b> (inclusive os municipais), <b>🏫 Sem aula na escola</b> (formação, evento) e <b>📌 Outro motivo</b> não contam na frequência de ninguém. Escreva uma anotação para lembrar depois.",
      "<b>🗓️ Aulas sem registro</b>: quando você abre o painel, ele pergunta sozinho sobre as aulas que já passaram sem nenhuma presença, chamada ou registro, para você responder na hora.",
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
  /* 🗓️ quadro de horários (igual ao da página inicial): a aula que está acontecendo pisca; fora do horário, avisa que não há aula */
  const COR_S = { "5": ["#16a34a", "#dcfce7"], "6": ["#2563eb", "#dbeafe"], "7": ["#7c3aed", "#ede9fe"], "8": ["#ea580c", "#ffedd5"], "9": ["#db2777", "#fce7f3"] };
  const DIAS_L = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"], EMO_D = ["", "🌅", "🚀", "⚡", "🎯"]; let DUR = 75;
  const hm = x => { const [a, b] = x.split(":").map(Number); return a * 60 + b; }, fhm = m => `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;
  function agoraBR() { const d = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000); return { dia: d.getDay(), m: d.getHours() * 60 + d.getMinutes() }; }
  function abrirHorarios() {
    DUR = cat().duracaoAula || 75;
    if (document.querySelector(".pp-hor-dlg")) return;
    const H = todasTurmas().filter(t => t.aula && t.aula.ini).map(t => ({ t, dia: t.aula.dia, i: hm(t.aula.ini) })).sort((a, b) => a.dia - b.dia || a.i - b.i || (a.t.serie.id === "5") - (b.t.serie.id === "5"));
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-hor-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🗓️ Horários da Sala de Informática</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <div class="pp-agora"><span class="pulso"></span><span id="ph-txt"></span></div><div class="pp-semana" id="ph-sem"></div>
      <p class="ajuda">Cada aula dura 1h15. A aula que está acontecendo agora pisca. Toque numa turma para abrir a aula dela no painel.</p></form></dialog>`);
    const desenhar = () => {
      const { dia, m } = agoraBR(); let html = "";
      for (let d = 1; d <= 4; d++) {
        const xs = H.filter(x => x.dia === d);
        html += `<div class="ph-dia ${d === dia ? "hoje" : ""}"><h3>${EMO_D[d]} ${DIAS_L[d]}</h3>` + xs.map((x, k) => {
          const f = x.i + DUR, cls = d === dia ? (m >= f ? "ja" : m >= x.i ? "ag" : "") : "", [cor, bg] = COR_S[x.t.serie.id] || ["#334155", "#f1f5f9"];
          const tarde = x.i >= 720, antes = k ? xs[k - 1].i >= 720 : null, rot = antes === tarde ? "" : `<div class="ph-turno ${tarde ? "tarde" : ""}">${tarde ? "🌇 Tarde" : "☀️ Manhã"}</div>`;
          return rot + `<a class="ph-aula ${cls} ${x.t.serie.id === "5" ? "cinco" : ""}" href="#/painel/aula/${x.t.id}" style="--cor:${cor};--bg:${bg}"><span class="t">${fhm(x.i)}</span><span class="tu">${esc(nomeTurma(x.t.id))}</span>${cls === "ag" ? '<span class="vivo">AGORA</span>' : ""}</a>`;
        }).join("") + "</div>";
      }
      dlg.querySelector("#ph-sem").innerHTML = html;
      const hoje = H.filter(x => x.dia === dia), atuais = hoje.filter(x => m >= x.i && m < x.i + DUR), prox = hoje.find(x => x.i > m);
      let txt;
      if (atuais.length) txt = `<b>Agora:</b> aula do <b>${atuais.map(x => esc(nomeTurma(x.t.id))).join("</b> e do <b>")}</b> (até ${fhm(atuais[0].i + DUR)})`;
      else if (prox) txt = `<b>Sem aula agora.</b> Próxima hoje: <b>${esc(nomeTurma(prox.t.id))}</b> às ${fhm(prox.i)}`;
      else { let d = dia, ach = null; for (let k = 1; k <= 7 && !ach; k++) { d = (dia + k) % 7; ach = H.find(x => x.dia === d); }
        txt = ach ? `<b>Sem aula agora.</b> Próxima: <b>${esc(nomeTurma(ach.t.id))}</b> na ${DIAS_L[ach.dia].toLowerCase()} às ${fhm(ach.i)}` : "<b>Sem aula agora.</b>"; }
      dlg.querySelector("#ph-txt").innerHTML = txt;
      dlg.querySelector(".pp-agora").classList.toggle("vivo", !!atuais.length);
    };
    desenhar(); const iv = setInterval(desenhar, 30000);
    document.body.appendChild(dlg); dlg.showModal();
    dlg.addEventListener("click", e => { if (e.target.closest(".ph-aula")) dlg.close(); });
    dlg.addEventListener("close", () => { clearInterval(iv); dlg.remove(); });
  }
  /* 🔑 códigos da turma do horário (para o aluno que esqueceu): abre num modal, com busca e troca de turma */
  async function abrirCodigos() {
    if (document.querySelector(".pp-cod-dlg")) return;
    const turmas = todasTurmas(); let tid = escolherTurma(null, turmas);
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-cod-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🔑 Códigos dos alunos</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <div class="row-btns"><label>Turma <select id="pc-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
      <input type="search" id="pc-b" class="pp-cod-busca grow" placeholder="Procurar pelo nome…" autocomplete="off"></div><div id="pc-l"><p class="ajuda">Carregando…</p></div>
      <p class="ajuda">Abre na turma do horário. O código é pessoal: mostre só para o próprio aluno.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    let lista = [];
    const pintar = () => { const q = normNome(dlg.querySelector("#pc-b").value); const xs = lista.filter(a => !q || normNome(a.nome).includes(q));
      dlg.querySelector("#pc-l").innerHTML = xs.length ? `<ul class="pp-cod-lista">${xs.map(a => `<li><span>${a.atipico ? "🧩 " : ""}${esc(a.nome)}</span><span class="cod">${esc(a.codigo || "—")}</span></li>`).join("")}</ul>` : `<p class="ajuda">Nenhum aluno encontrado.</p>`; };
    const carregarT = async () => { dlg.querySelector("#pc-l").innerHTML = `<p class="ajuda">Carregando…</p>`;
      try { lista = (await alunosDaTurma(tid)).filter(a => a.ativo !== false && !a.teste); } catch (e) { lista = []; toast("Não foi possível carregar: " + (e.message || e)); } pintar(); };
    dlg.querySelector("#pc-t").onchange = e => { tid = e.target.value; carregarT(); };
    dlg.querySelector("#pc-b").oninput = pintar;
    await carregarT(); dlg.querySelector("#pc-b").focus();
  }
  /* 🏁 finalizar a aula: grava o pódio (config/podio_<turma>, que os alunos leem) e fecha as tarefas até o fim da aula */
  async function carregarSerie(t) { await Promise.all(cat().apostilas.filter(a => a.serie === t.serie.id).map(a => P.carregarApostila(a.id).catch(() => null))); }
  /* 👑 rei da sala: o painel (placar ou ao vivo aberto) grava quem está em 1º lugar em config/rei_<turma>, que a tela do aluno lê */
  const reiGravado = {};
  function marcarRei(rk) { const rs = P.podio.reis(rk); rk.forEach(e => { e.rei = rs.includes(e); }); return rs; }
  // também grava a posição e os pontos de cada um (só os códigos internos, sem nomes): a tela do aluno mostra "você está em Nº lugar"
  async function publicarRei(t, rk, congelado) {
    let dados, chave;
    if (congelado) { chave = N.hoje() + "|congelado"; dados = { dia: N.hoje(), congelado: true, em: Date.now() }; }
    else { const rs = marcarRei(rk), grupos = rs.map(e => ({ ids: e.ids, titulo: P.podio.tituloRei(e.avatares) })), lista = rk.map(e => ({ ids: e.ids, pos: e.pos, pontos: e.pontos }));
      chave = N.hoje() + "|" + JSON.stringify(lista);
      dados = { dia: N.hoje(), congelado: false, ids: [].concat(...grupos.map(g => g.ids)), grupos, lista, total: rk.length, em: Date.now() }; }
    if (reiGravado[t.id] === chave) return; reiGravado[t.id] = chave;
    try { await db().collection("config").doc("rei_" + t.id).set(dados, { merge: true }); } catch (e) { reiGravado[t.id] = null; console.warn("rei", e); }
  }
  async function finalizarAula(t, alunos, prog, mid) {
    await carregarSerie(t);
    const hoje = N.hoje(), rk = P.podio.ranking(alunos, prog, mid, hoje);
    await publicarRei(t, rk);
    const ranking = rk.map(e => ({ ids: e.ids, nomes: e.nomes, pontos: e.pontos, pos: e.pos, avatares: e.avatares.map(a => a || null), trilha: !!e.trilha }));
    await db().collection("config").doc("podio_" + t.id).set({ dia: hoje, mid, finalizadaEm: Date.now(), ranking });
    let ate = Date.now() + 60000;
    if (t.aula && t.aula.ini) { const d = new Date(), [H, M] = t.aula.ini.split(":").map(Number); d.setHours(H, M + (cat().duracaoAula || 75) + (cat().toleranciaTarefas || 15), 0, 0); ate = Math.max(ate, d.getTime()); }
    await db().collection("config").doc("liberar_" + t.id).set({ fechadaAte: ate, ate: 0 }, { merge: true });
    return rk;
  }
  // missão em que a turma realmente está hoje: a que tem mais alunos com progresso de hoje (empate: a do cronograma)
  function missaoDaTurmaHoje(prog, padrao) {
    const hoje = N.hoje(), quem = {};
    prog.forEach(p => { if (p.mid && p.dias && p.dias[hoje]) (quem[p.mid] = quem[p.mid] || new Set()).add(p.alunoId); });
    let melhor = padrao, n = quem[padrao] ? quem[padrao].size : 0;
    Object.keys(quem).forEach(m => { if (quem[m].size > n) { melhor = m; n = quem[m].size; } });
    return melhor;
  }
  // garante que a apostila de cada progresso esteja carregada (sem ela os pontos dariam 0: ex. aluno na trilha adaptada)
  async function carregarAids(prog) { const aids = [...new Set(prog.map(p => p.aid).filter(a => a && !P.conteudo[a]))];
    for (const a of aids) { try { await P.carregarApostila(a); } catch (e) {} } }
  async function missaoDeHoje(t) {
    const ap = cat().apostilas.find(a => a.serie === t.serie.id && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === t.serie.id);
    await P.carregarApostila(ap.id); const C = P.conteudo[ap.id];
    try { const h = await db().collection("config").doc("hoje_" + t.id).get(); if (h.exists && h.data().dia === N.hoje() && h.data().mid) return { mid: h.data().mid, C, fixo: true }; } catch (e) {}
    return { mid: missaoDoDia(t, C) || C.missoes[0].id, C };
  }
  /* 🏆 Placar ao vivo (para o projetor): ranking que muda na hora; congela nos últimos 5 min; vira pódio ao finalizar */
  async function telaPlacar(u, tid) {
    const turmas = todasTurmas(), t = turmas.find(x => x.id === tid) || turmas.find(x => x.id === escolherTurma(null, turmas));
    DUR = cat().duracaoAula || 75;
    document.body.classList.add("modo-placar");
    window.addEventListener("hashchange", function sai() { document.body.classList.remove("modo-placar"); window.removeEventListener("hashchange", sai); });
    await carregarSerie(t);
    const hj = await missaoDeHoje(t), C = hj.C; let mid = hj.mid; const missao = C.missoes.find(x => x.id === mid) || {};
    const alunos = (await alunosDaTurma(t.id)).filter(a => a.ativo !== false && !a.teste);
    const el = tela(`<div class="pl-tela"><header class="pl-cab"><div><p class="pl-sup">🏆 Placar ao vivo · ${esc(nomeTurma(t.id))}</p><h1 id="pl-h1">${esc(missao.icone || "")} ${esc(missao.titulo || mid.toUpperCase())}</h1>
        <p class="pl-aviso">Pontos do pódio (não são nota) · ${esc(cat().professor)}</p></div>
        <div class="pl-dir"><div class="pl-relogio" id="pl-rel"></div><div class="pl-bts"><button type="button" class="btn btn-peq btn-sec pl-som" id="pl-som"></button><button type="button" class="btn btn-peq btn-sec" id="pl-tela">⛶ Tela cheia</button><button type="button" class="btn btn-peq" id="pl-fim">🏁 Finalizar aula</button><button type="button" class="btn btn-peq btn-sec" id="pl-volta" hidden>↩ Voltar ao placar</button></div></div></header>
      <div class="pl-corpo" id="pl-corpo"></div></div>`);
    let prog = [], pod = null, vendoPodio = false, finalizando = false, reiAntes = null, jaCongelou = false;
    const corpo = el.querySelector("#pl-corpo");
    // 🔊 som (só no computador do professor): o navegador exige um clique na página antes de tocar
    const So = P.sons, bSom = el.querySelector("#pl-som");
    const pintaSom = () => { if (!So) { bSom.hidden = true; return; } const ok = So.pronto();
      bSom.textContent = !So.ligado ? "🔇 Som desligado" : ok ? "🔊 Som ligado" : "🔊 Toque para ligar o som"; bSom.classList.toggle("pisca-som", So.ligado && !ok); };
    bSom.onclick = async () => { if (!So) return; if (So.ligado && !So.pronto()) { await So.destravar(); So.teste(); } else { So.setLigado(!So.ligado); await So.destravar(); if (So.ligado) So.teste(); } pintaSom(); };
    el.addEventListener("click", async e => { if (So && e.target !== bSom && So.ligado && !So.pronto()) { await So.destravar(); pintaSom(); } });
    pintaSom();
    const relogio = () => { const { dia, m } = agoraBR(); const ini = t.aula && t.aula.ini ? hm(t.aula.ini) : null; if (ini == null || t.aula.dia !== dia) return { fora: true };
      const s = new Date(Date.now() + (new Date().getTimezoneOffset() - 180) * 60000), seg = s.getHours() * 3600 + s.getMinutes() * 60 + s.getSeconds(), fim = (ini + DUR) * 60;
      return { antes: seg < ini * 60, depois: seg >= fim, r: fim - seg, fimTxt: fhm(ini + DUR) }; };
    const pintarPlacar = () => {
      if (vendoPodio) return;
      const rel = relogio(), congelado = !rel.fora && !rel.antes && !rel.depois && rel.r <= 300;
      if (congelado) { publicarRei(t, [], true); if (!jaCongelou) { jaCongelou = true; So && So.congelou(); } corpo.innerHTML = `<div class="pl-cong"><p>🤫</p><h2>Placar congelado!</h2><p>Faltam menos de 5 minutos. O resultado só aparece no pódio… Corram!</p></div>`; return; }
      // a missão do placar é a que a turma está fazendo de verdade hoje (se a turma ainda está na M1, conta a M1), a não ser que o professor tenha fixado a missão do dia
      const m2 = hj.fixo ? mid : missaoDaTurmaHoje(prog, mid);
      if (m2 !== mid) { mid = m2; const mi = C.missoes.find(x => x.id === mid) || {}; el.querySelector("#pl-h1").textContent = `${mi.icone || ""} ${mi.titulo || mid.toUpperCase()}`; }
      const rk = P.podio.ranking(alunos, prog, mid, N.hoje());
      publicarRei(t, rk);
      const reiAgora = rk.filter(e => e.rei).map(e => e.ids.join("+")).join(",");
      if (reiAgora && reiAntes !== null && reiAgora !== reiAntes) So && So.coroa(); reiAntes = reiAgora;
      if (!rk.length) { corpo.innerHTML = `<div class="pl-cong"><p>⏳</p><h2>Esperando a turma entrar…</h2><p>O placar começa assim que os alunos entrarem com o código.</p></div>`; return; }
      let lista = corpo.querySelector(".pl-lista"); if (!lista) { corpo.innerHTML = `<div class="pl-lista"></div>`; lista = corpo.querySelector(".pl-lista"); }
      lista.style.height = rk.length * 74 + "px";
      const vivos = new Set();
      rk.forEach((e, i) => { const k = e.ids.join("+"); vivos.add(k); let n = lista.querySelector(`[data-k="${CSS.escape(k)}"]`);
        const novo = h(P.podio.linhaPlacar(e, i));
        if (n) { n.className = novo.className; n.innerHTML = novo.innerHTML; n.style.top = i * 74 + "px"; } else lista.appendChild(novo); });
      lista.querySelectorAll(".pl-lin").forEach(n => { if (!vivos.has(n.dataset.k)) n.remove(); });
    };
    const mostrarPodio = () => { if (!pod) return; vendoPodio = true; el.querySelector("#pl-volta").hidden = false;
      corpo.innerHTML = `<div class="pd-tela"><h2 class="pd-tit">🏆 Pódio da aula!</h2>${P.podio.podioHTML(pod.ranking || [])}</div>`; P.podio.confete(corpo.querySelector(".pd-tela")); So && So.podio(); };
    el.querySelector("#pl-volta").onclick = () => { vendoPodio = false; el.querySelector("#pl-volta").hidden = true; corpo.innerHTML = ""; pintarPlacar(); };
    el.querySelector("#pl-tela").onclick = () => { const d = document.documentElement; (document.fullscreenElement ? document.exitFullscreen() : d.requestFullscreen()).catch(() => {}); };
    const finalizar = async auto => { if (finalizando) return; finalizando = true;
      try { await finalizarAula(t, alunos, prog, mid); if (!auto) toast("🏁 Aula finalizada!"); } catch (err) { toast("Não foi possível finalizar: " + (err.message || err)); } finalizando = false; };
    el.querySelector("#pl-fim").onclick = async () => { if (await P.confirmar("Finalizar a aula agora? As tarefas fecham e o pódio aparece aqui e na tela dos alunos.")) finalizar(false); };
    const u1 = db().collection("progresso").where("turma", "==", t.id).onSnapshot(async q => { prog = q.docs.map(d => ({ id: d.id, ...d.data() })); await carregarAids(prog); pintarPlacar(); }, err => toast("Placar: " + (err.message || err)));
    let jaVi = 0;
    const u2 = db().collection("config").doc("podio_" + t.id).onSnapshot(sn => { const d = sn.exists ? sn.data() : null;
      pod = d && d.dia === N.hoje() ? d : null; if (pod && pod.finalizadaEm !== jaVi) { jaVi = pod.finalizadaEm; mostrarPodio(); } });
    const iv = setInterval(() => {
      if (!document.body.contains(el)) { clearInterval(iv); u1(); u2(); return; }
      const rel = relogio(), r = el.querySelector("#pl-rel");
      if (rel.fora) r.innerHTML = `<span class="pl-r-txt">Fora do horário da aula</span>`;
      else if (rel.antes) r.innerHTML = `<span class="pl-r-txt">A aula ainda não começou</span>`;
      else if (rel.depois) { r.innerHTML = `<span class="pl-r-txt">⏰ Tempo esgotado</span>`; if (!pod && prog.length) finalizar(true); }
      else { r.className = "pl-relogio" + (rel.r <= 300 ? " fim pisca" : rel.r <= 600 ? " fim" : ""); r.innerHTML = `⏱️ <b>${Math.floor(rel.r / 60)}:${String(rel.r % 60).padStart(2, "0")}</b><span class="pl-r-txt">termina às ${rel.fimTxt}</span>`; }
      if (!vendoPodio && !rel.fora && !rel.antes && !rel.depois && rel.r <= 300 && !corpo.querySelector(".pl-cong")) pintarPlacar();
    }, 1000);
  }

  /* 🔴 Ao vivo: quem entrou na aula hoje, em que parte da missão está, o que falta e quanto tempo falta para o fim da aula.
     Lê o progresso que o portal já grava (só leitura) e atualiza sozinho quando um aluno avança. */
  async function abrirAoVivo() {
    DUR = cat().duracaoAula || 75;
    if (document.querySelector(".pp-vivo-dlg")) return;
    const turmas = todasTurmas(); let tid = escolherTurma(null, turmas), unsub = null, iv = null;
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-vivo-dlg"><form method="dialog"><div class="pp-hor-top"><h2>🔴 Ao vivo</h2><button class="btn btn-sec btn-peq" value="x">Fechar</button></div>
      <div class="row-btns"><label>Turma <select id="pv-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label><span class="grow" id="pv-rel"></span><button type="button" class="btn btn-peq pp-placar-btn" id="pv-placar">🏆 Placar no projetor</button><button type="button" class="btn btn-peq" id="pv-fim">🏁 Finalizar aula</button></div>
      <div id="pv-c"><p class="ajuda">Carregando…</p></div>
      <p class="ajuda">Atualiza sozinho quando um aluno avança. “Parado” = sem nenhuma atividade há mais de 10 minutos.</p></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal();
    dlg.addEventListener("close", () => { if (unsub) unsub(); clearInterval(iv); dlg.remove(); });
    let estado = null;
    const hojeS = () => N.hoje(), hhmm = ms => { const d = new Date(ms); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); };
    const pinta = () => {
      if (!estado) return; const { t, alunos, prog, C, mid, aid } = estado, hoje = hojeS(), agora = Date.now();
      // relógio da aula
      const { dia, m } = agoraBR(), ini = t.aula && t.aula.ini ? hm(t.aula.ini) : null, fim = ini != null ? ini + DUR : null;
      let rel;
      if (ini == null || t.aula.dia !== dia) rel = `<span class="pv-rel fora">Hoje não é dia de aula desta turma${t.aula ? ` (${DIAS_L[t.aula.dia].toLowerCase()} às ${fhm(ini)})` : ""}.</span>`;
      else if (m < ini) rel = `<span class="pv-rel fora">A aula começa às ${fhm(ini)} (faltam ${ini - m} min).</span>`;
      else if (m >= fim) rel = `<span class="pv-rel fora">A aula terminou às ${fhm(fim)}.</span>`;
      else rel = `<span class="pv-rel">⏱️ <b>Faltam ${fim - m} min</b> para o fim da aula (${fhm(ini)}–${fhm(fim)})<span class="pv-barra"><i style="width:${Math.round(100 * (m - ini) / DUR)}%"></i></span></span>`;
      dlg.querySelector("#pv-rel").innerHTML = rel;
      if (!estado.fixo) { const m2 = missaoDaTurmaHoje(prog, estado.midPadrao); if (m2 !== mid) { estado.mid = m2; return pinta(); } }
      const missao = C.missoes.find(x => x.id === mid) || {};
      // 👑 rei da sala (mesma pontuação do placar); nos últimos 5 min não muda (placar congelado)
      const rk = P.podio.ranking(alunos, prog, mid, hoje), congelado = ini != null && t.aula.dia === dia && m >= fim - 5 && m < fim;
      if (!congelado) publicarRei(t, rk); else { marcarRei(rk); publicarRei(t, rk, true); }
      const reisV = rk.filter(e => e.rei), ehRei = new Set([].concat(...reisV.map(e => e.ids)));
      const linhas = alunos.map(a => {
        const ps = prog.filter(p => p.alunoId === a.id), ent = ps.find(p => p.tipo === "entrada"), entrou = ent && ent.dias && ent.dias[hoje];
        const daHoje = ps.filter(p => p.mid && p.dias && p.dias[hoje]).sort((x, y) => (y.atualizado || 0) - (x.atualizado || 0));
        const pm = ps.filter(p => p.mid === mid).sort((x, y) => (y.atualizado || 0) - (x.atualizado || 0))[0];
        const ult = Math.max(entrou || 0, ...daHoje.map(p => +p.atualizado || 0));
        const outra = daHoje[0] && daHoje[0].mid !== mid ? daHoje[0] : null;
        return { a, entrou, pm, ult, outra };
      });
      const dentro = linhas.filter(x => x.entrou).sort((x, y) => x.a.nome.localeCompare(y.a.nome, "pt-BR")), fora = linhas.filter(x => !x.entrou);
      const fr = (v, rot, cls) => { const [f, tt] = v || [0, 0]; if (!tt) return ""; const ok = f === tt;
        return `<span class="pv-n ${cls} ${ok ? "ok" : ""}" title="${rot}: ${f} de ${tt}">${rot} ${ok ? "✔" : f + "/" + tt}<i style="width:${Math.round(100 * f / tt)}%"></i></span>`; };
      const nB = dentro.filter(x => x.pm && x.pm.basicoOk).length, nD = dentro.filter(x => x.pm && x.pm.desafio && x.pm.desafio[1] && x.pm.desafio[0] === x.pm.desafio[1]).length,
        nT = dentro.filter(x => x.pm && x.pm.turbo && x.pm.turbo[1] && x.pm.turbo[0] === x.pm.turbo[1]).length, nPar = dentro.filter(x => agora - x.ult > 600000).length;
      dlg.querySelector("#pv-c").innerHTML = `<p class="pv-mis">📌 ${esc(missao.icone || "")} <b>${esc(missao.titulo || mid.toUpperCase())}</b></p>
        <div class="pv-chips"><span class="pv-chip">👥 <b>${dentro.length}</b> de ${alunos.length} entraram hoje</span><span class="pv-chip ok">🟢 Básico ✔ <b>${nB}</b>/${dentro.length}</span>
          <span class="pv-chip">🟡 Desafio ✔ <b>${nD}</b></span><span class="pv-chip">🔴 Turbo ✔ <b>${nT}</b></span>${reisV.length ? `<span class="pv-chip rei">👑 ${reisV.map(e => `${P.podio.tituloRei(e.avatares).replace(/ da sala$/, "")}: <b>${e.nomes.map(esc).join(" & ")}</b> (${e.pontos} pts)`).join(" · ")}</span>` : ""}${nPar ? `<span class="pv-chip alerta">😴 Parados <b>${nPar}</b></span>` : ""}</div>
        ${dentro.length ? `<div class="tabela-wrap"><table class="pv-tab"><thead><tr><th>Aluno</th><th>Entrou</th><th>Progresso na missão de hoje</th><th>Situação</th><th>Última atividade</th></tr></thead><tbody>${dentro.map(({ a, entrou, pm, ult, outra }) => {
          const p = pm || {}, okB = !!p.basicoOk, falta = p.basico && p.basico[1] ? p.basico[1] - p.basico[0] : null, par = agora - ult > 600000;
          const sit = okB ? (p.turbo && p.turbo[1] && p.turbo[0] === p.turbo[1] ? `<span class="sit ok">🏆 Missão completa</span>` : `<span class="sit ok">✔ Básico feito (visto)</span>`)
            : falta != null ? `<span class="sit wait">Faltam ${falta} do Básico</span>` : `<span class="sit bad">Ainda não começou a missão</span>`;
          return `<tr class="${par ? "parado" : ""} ${okB ? "feito" : ""}"><td>${ehRei.has(a.id) ? `<span class="pv-coroa" title="Rei da sala: 1º lugar">${P.podio.coroa(22)}</span>` : ""}${a.atipico ? "🧩 " : ""}${esc(a.nome)}${a.trilha ? " 👣" : ""}${outra ? `<br><small>está na ${esc(outra.mid.toUpperCase())}</small>` : ""}</td><td>${hhmm(entrou)}</td>
            <td class="pv-bars">${fr(p.leitura, "📖 Leitura", "l")}${fr(p.basico, "🟢 Básico", "b")}${fr(p.desafio, "🟡 Desafio", "d")}${fr(p.turbo, "🔴 Turbo", "t")}${!pm ? "<small>—</small>" : ""}</td>
            <td>${sit}</td><td>${par ? "😴 " : ""}há ${Math.max(0, Math.round((agora - ult) / 60000))} min</td></tr>`; }).join("")}</tbody></table></div>`
        : `<p class="ajuda">Nenhum aluno desta turma entrou hoje ainda.</p>`}
        ${fora.length ? `<details class="pv-fora"><summary>👀 Alunos que faltaram (${fora.length}) · clique para ver</summary><p>${fora.map(x => esc(x.a.nome)).join(" · ")}</p></details>` : ""}`;
    };
    const carregarT = async () => {
      if (unsub) { unsub(); unsub = null; }
      dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Carregando…</p>`;
      const t = turmas.find(x => x.id === tid);
      const ap = cat().apostilas.find(a => a.serie === t.serie.id && !a.oculta && !a.trilha) || cat().apostilas.find(a => a.serie === t.serie.id);
      await P.carregarApostila(ap.id); await carregarSerie(t); const C = P.conteudo[ap.id], mid = missaoDoDia(t, C) || C.missoes[0].id;
      const alunos = (await alunosDaTurma(tid)).filter(a => a.ativo !== false && !a.teste);
      let fixo = false; try { const hh = await db().collection("config").doc("hoje_" + t.id).get(); fixo = hh.exists && hh.data().dia === N.hoje() && hh.data().mid === mid; } catch (e) {}
      estado = { t, alunos, prog: [], C, mid, midPadrao: mid, fixo, aid: ap.id };
      unsub = db().collection("progresso").where("turma", "==", tid).onSnapshot(async q => { if (estado && estado.t.id === tid) { estado.prog = q.docs.map(d => ({ id: d.id, ...d.data() })); await carregarAids(estado.prog); pinta(); } },
        err => { dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Não foi possível acompanhar ao vivo: ${esc(err.message || err)}</p>`; });
    };
    dlg.querySelector("#pv-t").onchange = e => { tid = e.target.value; carregarT(); };
    dlg.querySelector("#pv-placar").onclick = () => window.open("#/painel/placar/" + tid, "_blank");
    dlg.querySelector("#pv-fim").onclick = async () => { if (!estado || !await P.confirmar("Finalizar a aula agora? As tarefas fecham e o pódio aparece no placar e na tela dos alunos.")) return;
      try { await finalizarAula(estado.t, estado.alunos, estado.prog, estado.mid); toast("🏁 Aula finalizada! O pódio está no placar."); } catch (err) { toast("Não foi possível finalizar: " + (err.message || err)); } };
    iv = setInterval(pinta, 30000);
    try { await carregarT(); } catch (err) { dlg.querySelector("#pv-c").innerHTML = `<p class="ajuda">Erro: ${esc(err.message || err)}</p>`; }
  }
  document.addEventListener("click", e => { if (e.target.closest("#pp-hor")) abrirHorarios(); if (e.target.closest("#pp-cod")) abrirCodigos(); if (e.target.closest("#pp-vivo")) abrirAoVivo(); if (e.target.closest("#pp-placar")) window.open("#/painel/placar/" + escolherTurma(null, todasTurmas()), "_blank"); if (e.target.closest("#pp-fim")) finalizarAgora(); if (e.target.closest("#pp-tema")) abrirTema(); });
  // 🎨 tema do portal: automático pela data, ou ligado/desligado à mão (vale para todos os computadores)
  async function abrirTema() {
    if (document.querySelector(".pp-tema-dlg")) return;
    let atual = "auto"; try { const sn = await db().collection("config").doc("tema").get(); if (sn.exists) atual = sn.data().modo || "auto"; } catch (e) {}
    const cal = P.temaCalendario ? P.temaCalendario() : [], hojeT = P.temaPelaData ? P.temaPelaData(new Date()) : null, nomeHoje = (cal.find(x => x.id === hojeT) || {}).nome;
    const ops = [["auto", "📅 Automático pela data (recomendado)", `Entra e sai sozinho no calendário abaixo. Hoje: ${nomeHoje || "sem tema"}.`]]
      .concat(cal.map(x => [x.id, x.nome + " agora", `No automático: de ${x.ini} a ${x.fim}`])).concat([["nenhum", "⚪ Sem tema", "Portal normal, mesmo nas datas comemorativas"]]);
    const dlg = h(`<dialog class="pp-dlg pp-tema-dlg"><form method="dialog"><h2>🎨 Tema do portal</h2>
      <p class="ajuda">Vale para todos os computadores (alunos, placar e o seu), a partir da próxima vez que a página abrir.</p>
      <div class="pp-tema-ops pp-tema-rolar">${ops.map(([v, r, d]) => `<label class="pp-tema-op"><input type="radio" name="tm" value="${v}" ${v === atual ? "checked" : ""}><span><b>${r}</b><small>${d}</small></span></label>`).join("")}</div>
      <p class="erro" id="tm-e" hidden></p>
      <div class="row-btns"><button type="button" class="btn" id="tm-ok">Salvar</button><button class="btn btn-sec" value="x">Fechar</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelector("#tm-ok").onclick = async () => { const v = dlg.querySelector('input[name="tm"]:checked').value;
      try { await db().collection("config").doc("tema").set({ modo: v, em: Date.now() }); P.aplicarTemaGlobal && P.aplicarTemaGlobal(v); dlg.close(); toast("🎨 Tema salvo! Os alunos veem ao abrir ou recarregar a página."); }
      catch (err) { const e = dlg.querySelector("#tm-e"); e.textContent = "Não foi possível salvar: " + (err.message || err); e.hidden = false; } };
  }
  // 🏁 finalizar à força pelo cabeçalho do painel (turma do horário; dá para trocar)
  async function finalizarAgora() {
    if (document.querySelector(".pp-fim-dlg")) return;
    const turmas = todasTurmas(), tid = escolherTurma(null, turmas);
    const dlg = h(`<dialog class="pp-dlg pp-fim-dlg"><form method="dialog"><h2>🏁 Finalizar a aula agora?</h2>
      <p><label>Turma <select id="ff-t">${turmas.map(x => `<option value="${x.id}" ${x.id === tid ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label></p>
      <p class="ajuda">As tarefas fecham, o pódio aparece no placar (com confete) e cada aluno vê na tela a sua posição, também com confete. Os pontos do pódio não são nota.</p>
      <p class="erro" id="ff-e" hidden></p>
      <div class="row-btns"><button type="button" class="btn btn-grande" id="ff-ok">🏁 Sim, finalizar agora</button><button class="btn btn-sec" value="x">Cancelar</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    dlg.querySelector("#ff-ok").onclick = async () => {
      const b = dlg.querySelector("#ff-ok"), t = turmas.find(x => x.id === dlg.querySelector("#ff-t").value); b.disabled = true; b.textContent = "Finalizando…";
      try { const [hj, alunos, q] = await Promise.all([missaoDeHoje(t), alunosDaTurma(t.id), db().collection("progresso").where("turma", "==", t.id).get()]);
        const prog = q.docs.map(d => ({ id: d.id, ...d.data() })); await carregarAids(prog);
        await finalizarAula(t, alunos.filter(a => a.ativo !== false && !a.teste), prog, hj.fixo ? hj.mid : missaoDaTurmaHoje(prog, hj.mid));
        dlg.close(); toast("🏁 Aula finalizada! Abra o 🏆 Placar para ver o pódio.");
      } catch (err) { const e = dlg.querySelector("#ff-e"); e.textContent = "Não foi possível finalizar: " + (err.message || err); e.hidden = false; b.disabled = false; b.textContent = "🏁 Sim, finalizar agora"; }
    };
  }

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
    tid = escolherTurma(tid, turmas);
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
          if (x === "cod") { if (!await P.confirmar("Gerar um código novo? O código antigo deixa de funcionar.")) return; const c = await novoCodigo(a); await P.aviso(`Novo código de ${a.nome}: ${c}`); }
          if (x === "nome") { const n = arrumarNome(await P.perguntar("Nome completo:", a.nome)); if (!n || n === a.nome) return; await renomear(a, n); }
          if (x === "turma") {
            const opc = todasTurmas().filter(y => y.id !== a.turma);
            const r = await P.perguntar("Para qual turma? Digite exatamente: " + opc.map(y => y.id).join(", "));
            const nt = opc.find(y => y.id.toLowerCase() === String(r || "").trim().toLowerCase()); if (!nt) { if (r) await P.aviso("Turma não encontrada."); return; }
            const c = await novoCodigo(a, nt.id); await P.aviso(`${a.nome} agora está no ${nomeTurma(nt.id)}. Novo código: ${c}. O histórico continua guardado.`);
          }
          if (x === "atipico") { await db().collection("alunos").doc(a.id).update({ atipico: !a.atipico }); }
          if (x === "apoio") { const v = await P.perguntar("Apoios para este aluno na aula (aparecem na Tela da aula, só para você):", a.apoio || ""); if (v === null) return; await db().collection("alunos").doc(a.id).update({ apoio: v.trim() }); }
          if (x === "trilha") {
            const tem = cat().apostilas.some(y => y.trilha && y.serie === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            if (!a.trilha && !tem && !await P.confirmar("Esta série ainda não tem Trilha Passo a Passo. A marcação fica guardada e passa a valer quando a Trilha existir. Marcar mesmo assim?")) return;
            await marcarTrilha(a, !a.trilha);
            await P.aviso(a.trilha ? `${a.nome} volta a usar a apostila da turma.` : `Pronto! Quando ${a.nome} digitar o código, o portal abre direto a Trilha Passo a Passo.`);
          }
          if (x === "casa") {
            if (a.emCasa) await db().collection("alunos").doc(a.id).update({ emCasa: false, emCasaObs: "" });
            else { const o = await P.perguntar("Observação (opcional). Ex.: entrega a apostila impressa; vem só para a prova.", ""); if (o === null) return; await db().collection("alunos").doc(a.id).update({ emCasa: true, emCasaObs: o.trim() }); }
          }
          if (x === "teste") { await db().collection("alunos").doc(a.id).update({ teste: !a.teste }); }
          if (x === "libera") {
            const d = await P.perguntar(`Liberar as tarefas de ${a.nome} fora do horário por quantos dias? (1 = até o fim de hoje; 0 = tirar a liberação)`, "1"); if (d === null || isNaN(+d)) return;
            const fim = new Date(); fim.setHours(23, 59, 0, 0); fim.setDate(fim.getDate() + Math.max(0, +d - 1));
            await db().collection("config").doc("liberar_" + a.turma).set({ alunos: { [a.id]: +d > 0 ? fim.getTime() : 0 } }, { merge: true });
            await P.aviso(+d > 0 ? `Pronto! ${a.nome} pode fazer as tarefas até ${fim.toLocaleDateString("pt-BR")}, 23h59.` : "Liberação retirada."); dlg.close(); return;
          }
          if (x === "outra") {
            const opc = todasTurmas().filter(y => y.id !== a.turma && y.serie.id === (todasTurmas().find(z => z.id === a.turma) || { serie: {} }).serie.id);
            const r = await P.perguntar(`${a.nome} também frequenta a aula de qual turma? (as tarefas abrem no horário dela; a presença e as notas continuam na turma dele)\nDigite: ${opc.map(y => y.id).join(", ")}\nDeixe em branco para tirar.`, "");
            if (r === null) return; const nt = opc.find(y => y.id.toLowerCase() === r.trim().toLowerCase());
            if (r.trim() && !nt) { await P.aviso("Turma não encontrada."); return; }
            await db().collection("config").doc("liberar_" + a.turma).set({ outra: { [a.id]: nt ? nt.id : null } }, { merge: true });
            await db().collection("alunos").doc(a.id).update({ outraTurma: nt ? nt.id : null });
            await P.aviso(nt ? `Pronto! As tarefas de ${a.nome} abrem também no horário do ${nomeTurma(nt.id)}.` : "Pronto! Voltou ao horário da própria turma.");
          }
          if (x === "ativo") { if (a.ativo && !await P.confirmar(`Desativar ${a.nome}? O código para de funcionar, mas o histórico fica guardado.`)) return; await mudarAtivo(a, !a.ativo); }
          dlg.close(); toast("Feito!"); telaTurmas(u, t.id);
        } catch (err) { await P.aviso("Não foi possível: " + (err.message || err)); }
      });
    }

    el.querySelector("#add").onclick = async () => {
      const n = arrumarNome(await P.perguntar(`Nome completo do aluno novo (${nomeTurma(t.id)}):`));
      if (!n) return;
      if (n.split(" ").length < 2) return await P.aviso("Digite nome e sobrenome.");
      try {
        const cfg = await config();
        const r = await adicionarAlunos(t.id, [{ nome: n }], cfg.ano);
        if (!r.length) return await P.aviso("Já existe um aluno com esse nome nesta turma.");
        await P.aviso(`${r[0].nome} foi adicionado(a). Código: ${r[0].codigo}`);
        telaTurmas(u, t.id);
      } catch (err) { await P.aviso("Não foi possível adicionar: " + (err.message || err)); }
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

  async function imprimirCartoes(t, alunos) {
    const w = window.open("", "_blank");
    if (!w) return await P.aviso("Permita pop-ups para imprimir os cartões.");
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
    tid = escolherTurma(tid, turmas);
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
    tid = escolherTurma(tid, turmas);
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
      try { await navigator.clipboard.writeText(txt); toast("Notas copiadas."); } catch (e) { await P.perguntar("Copie as notas:", txt); }
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
  // 🚦 aula que não aconteceu normalmente. "ninguem" = falta para todos; os outros não contam na frequência de ninguém.
  const OCORR = { ninguem: "🚫 Nenhum aluno veio", professor: "🙋 O professor não pôde vir", feriado: "🎉 Feriado ou ponto facultativo", formacao: "🏫 Sem aula na escola (formação, evento, reunião)", outro: "📌 Sem aula por outro motivo" };
  const OCORR_CURTO = { ninguem: "🚫 Ninguém veio", professor: "🙋 Eu não fui", feriado: "🎉 Feriado", formacao: "🏫 Sem aula na escola", outro: "📌 Outro motivo" };
  const semAula = a => !!(a && a.ocorrencia && a.ocorrencia.tipo && a.ocorrencia.tipo !== "ninguem");
  const ocorrDe = a => (a && a.ocorrencia && a.ocorrencia.tipo) ? a.ocorrencia : null;
  // dias de aula já passados (desde o início do cronograma) em que não há nenhum registro: nem presença do portal,
  // nem chamada à mão, nem registro escrito, nem ocorrência. O painel pergunta logo que abre.
  async function aulasPendentes() {
    const ag = new Date(), hoje = N.hoje(), min = ag.getHours() * 60 + ag.getMinutes(), out = [];
    await Promise.all(todasTurmas().filter(t => t.aula && t.aula.ini && Object.keys(t.missoes4 || {}).length).map(async t => {
      const ini = Object.keys(t.missoes4).sort()[0], [hh, mm] = t.aula.ini.split(":").map(Number), dias = [];
      for (let d = new Date(ini + "T12:00:00"); ; d.setDate(d.getDate() + 1)) {
        const ds = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        if (ds > hoje) break;
        if (d.getDay() !== t.aula.dia && !(t.missoes4 || {})[ds]) continue;
        if (ds === hoje && min < hh * 60 + mm + 90) continue; // a aula de hoje ainda não terminou
        dias.push(ds);
      }
      if (!dias.length) return;
      const [aSnap, prog, alunos] = await Promise.all([db().collection(DIARIO + "/" + t.id + "/aulas").get(), progressoDaTurma(t.id), alunosDaTurma(t.id)]);
      const validos = new Set(alunos.filter(a => a.ativo !== false && !a.teste).map(a => a.id));
      if (!validos.size) return;
      const aulas = {}; aSnap.docs.forEach(x => { aulas[x.id] = x.data(); });
      const veio = new Set(); prog.forEach(p => { if (validos.has(p.alunoId)) Object.keys(p.dias || {}).forEach(d => veio.add(d)); });
      dias.forEach(d => { const a = aulas[d] || {};
        if (ocorrDe(a) || veio.has(d) || String(a.registro || "").trim() || Object.values(a.presencas || {}).some(v => v)) return;
        out.push({ t, d }); });
    }));
    return out.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : a.t.aula.ini < b.t.aula.ini ? -1 : 1);
  }
  async function salvarOcorrencia(tid, d, tipo, nota) {
    await db().collection(DIARIO + "/" + tid + "/aulas").doc(d).set({ data: d, ocorrencia: tipo ? { tipo, nota: nota || "", em: new Date().toISOString() } : null }, { merge: true });
  }
  /* 📣 Avisos ao abrir o painel: datas comemorativas e feriados (hoje e próximos 7 dias), tema que começou, SIGE, prazos
     e recados das turmas de hoje. "✔ Já li" não mostra mais (fica em prof/avisos, vale em qualquer computador);
     "⏰ Ver depois" mostra de novo no próximo login. Depois dos avisos vêm as perguntas das aulas sem registro. */
  const PRAZOS = [ // [mostrar a partir de, até, id, texto]
    ["2026-11-16", "2026-11-23", "boletins-2026-4b", "📄 <b>Boletins em PDF do 4º bimestre</b> até 23/11 (📒 Diário › 🧮 Boletim)."],
    ["2026-12-01", "2026-12-31", "sige-reabre-2026", "🏛️ <b>SIGE: fique atento à reabertura de fim de ano.</b> Quando abrir, registrar o ano inteiro de 2026 (aulas e conteúdos) com o Claude; a frequência é você quem lança."]
  ];
  function datasDoAno(ano) {
    const pas = (() => { const a = ano % 19, b = Math.floor(ano / 100), c = ano % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451); return new Date(ano, Math.floor((h + l - 7 * m + 114) / 31) - 1, ((h + l - 7 * m + 114) % 31) + 1); })();
    const ds = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`, mv = n => ds(new Date(pas.getFullYear(), pas.getMonth(), pas.getDate() + n)), f = md => ano + "-" + md;
    return [ // [data, nome, tipo: feriado | facultativo | data]
      [f("01-01"), "🎆 Confraternização Universal", "feriado"], [mv(-48), "🎭 Carnaval (segunda)", "facultativo"], [mv(-47), "🎭 Carnaval (terça)", "facultativo"], [mv(-46), "Quarta-feira de Cinzas", "facultativo"],
      [mv(-2), "✝️ Sexta-feira Santa", "feriado"], [mv(0), "🐰 Páscoa", "data"], [f("04-19"), "🪶 Dia dos Povos Indígenas", "data"], [f("04-21"), "Tiradentes", "feriado"], [f("05-01"), "👷 Dia do Trabalhador", "feriado"],
      [f("05-10"), "🎂 Aniversário de Curionópolis (1988)", "data"], [mv(60), "Corpus Christi", "facultativo"], [f("06-24"), "🌽 São João", "data"], [f("08-11"), "🎓 Dia do Estudante", "data"], [f("08-15"), "Adesão do Pará", "feriado"],
      [f("08-22"), "🍃 Dia do Folclore", "data"], [f("09-07"), "🇧🇷 Independência do Brasil", "feriado"], [f("10-12"), "🎈 Dia das Crianças · Nossa Senhora Aparecida", "feriado"], [f("10-15"), "🍎 Dia do Professor", "data"],
      [f("10-31"), "🌪️ Dia do Saci", "data"], [f("11-02"), "Finados", "feriado"], [f("11-15"), "Proclamação da República", "feriado"], [f("11-20"), "✊🏿 Dia Nacional de Zumbi e da Consciência Negra", "feriado"], [f("11-27"), "⛪ Nossa Senhora das Graças, padroeira de Curionópolis (feriado municipal)", "feriado"],
      [f("12-24"), "🎄 Véspera de Natal", "facultativo"], [f("12-25"), "🎄 Natal", "feriado"], [f("12-31"), "🎆 Véspera de Ano-Novo", "facultativo"]
    ];
  }
  async function mostrarAvisos() {
    const hoje = N.hoje(), d0 = new Date(hoje + "T12:00:00"), ano = d0.getFullYear(), dif = d => Math.round((new Date(d + "T12:00:00") - d0) / 864e5);
    const TIPO = { feriado: "feriado", facultativo: "ponto facultativo", data: "data comemorativa" };
    const lista = [];
    datasDoAno(ano).concat(datasDoAno(ano + 1)).forEach(([d, nome, tipo]) => { const n = dif(d); if (n < 0 || n > 7) return;
      lista.push(n === 0 ? { id: "hoje-" + d + "-" + nome, ic: "📅", txt: `<b>Hoje é ${nome}</b> (${TIPO[tipo]}).` }
        : { id: "prox-" + d + "-" + nome, ic: "🗓️", txt: `<b>${n === 1 ? "Amanhã" : "Daqui a " + n + " dias"} (${dataBR(d)}, ${semana(d)}):</b> ${nome} (${TIPO[tipo]}).` }); });
    if (P.temaCalendario) P.temaCalendario(ano).forEach(x => { const [dd, mm] = x.ini.split("/"); if (`${ano}-${mm}-${dd}` === hoje) lista.push({ id: "tema-" + hoje, ic: "🎨", txt: `<b>Hoje o portal entrou no tema ${x.nome}</b> (sozinho, pela data, até ${x.fim}). Para mudar: botão 🎨 Tema.` }); });
    if (d0.getDay() === 5) lista.push({ id: "sige-" + hoje, ic: "🏛️", txt: "<b>Sexta-feira: dia de registrar no SIGE</b> as aulas da semana, para não acumular (a frequência é você quem lança)." });
    PRAZOS.forEach(([de, ate, id, txt]) => { if (hoje >= de && hoje <= ate) lista.push({ id, ic: "⏰", txt }); });
    // recados das turmas que têm aula hoje
    try { await Promise.all(todasTurmas().filter(t => t.aula && t.aula.dia === d0.getDay()).map(async t => { const sn = await db().collection(DIARIO).doc(t.id).get();
      ((sn.exists && sn.data().lembretes) || []).forEach((l, i) => { if (!l.feito) lista.push({ id: "lemb-" + t.id + "-" + (l.criadoEm || i) + "-" + hoje, ic: "🟧", txt: `<b>${esc(nomeTurma(t.id))} (${t.aula.ini}):</b> ${esc(l.texto)}` }); }); })); } catch (e) {}
    let lidos = {}; const ref = db().collection("prof").doc("avisos");
    try { const sn = await ref.get(); lidos = (sn.exists && sn.data().lidos) || {}; } catch (e) {}
    const chave = id => id.replace(/[^\w-]/g, "_").slice(0, 120);
    const mostrar = lista.filter(a => !lidos[chave(a.id)]);
    if (!mostrar.length) return;
    return new Promise(fim => {
      const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-avisos"><form method="dialog"><h2>📣 Avisos de hoje · ${dataBR(hoje)}</h2>
        <ul class="pp-av-lista">${mostrar.map((a, i) => `<li data-i="${i}"><span class="pp-av-ic">${a.ic}</span><span class="pp-av-txt">${a.txt}</span><button type="button" class="btn btn-sec btn-peq" data-lido="${i}" title="Não mostrar mais este aviso">✔ Já li</button></li>`).join("")}</ul>
        <div class="row-btns"><button type="button" class="btn" id="av-todos">✔ OK, já li tudo</button><button class="btn btn-sec" value="x">⏰ Ver depois</button></div>
        <p class="ajuda">"Já li": o aviso não aparece mais. "Ver depois": aparece de novo da próxima vez que você entrar no painel.</p></form></dialog>`);
      document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => { dlg.remove(); fim(); });
      const marcar = async idx => {
        try { await ref.set({ lidos: Object.fromEntries(idx.map(i => [chave(mostrar[i].id), Date.now()])) }, { merge: true }); } catch (e) { toast("Não foi possível salvar: " + (e.message || e)); } };
      dlg.querySelectorAll("[data-lido]").forEach(b => b.onclick = async () => { const i = +b.dataset.lido; await marcar([i]); const li = b.closest("li"); li.classList.add("lido"); b.remove();
        if (!dlg.querySelector("li:not(.lido)")) dlg.close(); });
      dlg.querySelector("#av-todos").onclick = async () => { await marcar([...dlg.querySelectorAll("li:not(.lido)")].map(li => +li.dataset.i)); dlg.close(); };
    });
  }
  async function perguntarPendentes() {
    let lista; try { lista = await aulasPendentes(); } catch (e) { console.warn("pendências", e); return; }
    if (!lista.length) return;
    const porDia = {}; lista.forEach(x => { (porDia[x.d] = porDia[x.d] || []).push(x); });
    const dlg = h(`<dialog class="pp-dlg pp-dlg-larga pp-pend"><form method="dialog"><h2>🗓️ Aulas sem nenhum registro</h2>
      <p class="ajuda">Nestas aulas ninguém entrou no portal e não há chamada. Responda agora, para não esquecer o que aconteceu. Se algum aluno veio e só não entrou no portal, use <b>📒 Abrir a chamada</b>.</p>
      ${Object.entries(porDia).map(([d, xs]) => `<section class="pp-pend-dia" data-dia="${d}"><h3>${dataBR(d)} (${semana(d)})${xs.length > 1 ? ` <button type="button" class="btn btn-sec btn-peq" data-todas="${d}">🙋 Eu não fui neste dia (todas as ${xs.length} turmas)</button>` : ""}</h3>
        ${xs.map(({ t }) => `<div class="pp-pend-item" data-t="${t.id}" data-d="${d}"><strong>${esc(nomeTurma(t.id))} · ${t.aula.ini}</strong>
          <span class="pp-pend-bts">${Object.keys(OCORR).map(k => `<button type="button" class="btn btn-sec btn-peq" data-oc="${k}">${OCORR_CURTO[k]}</button>`).join("")}<a class="btn btn-sec btn-peq" data-cham href="#/painel/diario/${t.id}/chamada">📒 Abrir a chamada</a></span>
          <input type="text" class="pp-pend-nota" placeholder="Anotação (opcional): o que aconteceu?"></div>`).join("")}</section>`).join("")}
      <div class="row-btns"><button class="btn" value="x">Responder depois</button></div></form></dialog>`);
    document.body.appendChild(dlg); dlg.showModal(); dlg.addEventListener("close", () => dlg.remove());
    const feito = (it, tipo) => { it.classList.add("ok"); it.querySelector(".pp-pend-bts").innerHTML = `<b>✔ ${OCORR[tipo]}</b>`; it.querySelector(".pp-pend-nota").disabled = true;
      if (![...dlg.querySelectorAll(".pp-pend-item")].some(x => !x.classList.contains("ok"))) setTimeout(() => { toast("Tudo respondido. Obrigado!"); dlg.close(); }, 700); };
    dlg.querySelectorAll(".pp-pend-item").forEach(it => {
      it.querySelectorAll("[data-oc]").forEach(b => b.onclick = async () => { b.disabled = true;
        try { await salvarOcorrencia(it.dataset.t, it.dataset.d, b.dataset.oc, it.querySelector(".pp-pend-nota").value.trim()); feito(it, b.dataset.oc); } catch (err) { b.disabled = false; toast("Não foi possível salvar: " + (err.message || err)); } });
      it.querySelector("[data-cham]").onclick = () => { ss.set("painel:diario:" + it.dataset.t, it.dataset.d); ss.set("painel:turmaManual", String(Date.now())); dlg.close(); };
    });
    dlg.querySelectorAll("[data-todas]").forEach(b => b.onclick = async () => { b.disabled = true; const sec = b.closest(".pp-pend-dia"), nota = await P.perguntar("Anotação para este dia (opcional): o que aconteceu?") || "";
      for (const it of sec.querySelectorAll(".pp-pend-item:not(.ok)")) { try { await salvarOcorrencia(it.dataset.t, it.dataset.d, "professor", nota); feito(it, "professor"); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } } b.remove(); });
  }
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
    tid = escolherTurma(tid, turmas);
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
    const pres = (d, id) => { const a = aulas[d]; if (semAula(a)) return { v: null }; if (temManual(a, "presencas", id)) return { v: a.presencas[id], auto: false };
      if (auto && AUTO[d] && AUTO[d].p[id]) return { v: "P", auto: true };
      return temChamada(d) ? (emCasa.has(id) ? { v: "J", auto: true } : { v: "F", auto: true, falta: true }) : { v: null }; };
    const temChamada = d => ocorrDe(aulas[d]) ? ocorrDe(aulas[d]).tipo === "ninguem" : Object.values((aulas[d] || {}).presencas || {}).some(v => v) || (auto && AUTO[d] && Object.keys(AUTO[d].p).length > 0);
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
        ${(() => { const o = ocorrDe(aulas[dia]); return o ? `<div class="pp-ocorr ${o.tipo}"><strong>${OCORR[o.tipo]}</strong>
            <p class="ajuda">${o.tipo === "ninguem" ? "Todos ficam com falta nesta aula (quem estuda em casa fica com J). Se alguém veio, toque em P no nome dele." : "Esta aula não conta na frequência de ninguém."}</p>
            <textarea id="oc-nota" class="pp-area" rows="2" placeholder="Anotação: o que aconteceu? (para lembrar no futuro)">${esc(o.nota || "")}</textarea>
            <div class="row-btns"><button type="button" class="btn btn-sec btn-peq" id="oc-salvar">💾 Salvar anotação</button><button type="button" class="btn btn-sec btn-peq" id="oc-desfazer">↩️ Desfazer (a aula aconteceu)</button></div></div>`
          : `<details class="pp-ocorr-abrir"><summary>🚦 Esta aula não aconteceu normalmente? (ninguém veio, você não foi, feriado, sem aula na escola…)</summary>
            <div class="row-btns">${Object.keys(OCORR).map(k => `<button type="button" class="btn btn-sec btn-peq" data-oc="${k}">${OCORR[k]}</button>`).join("")}</div></details>`; })()}
        ${semAula(aulas[dia]) ? "" : `<p class="pp-cont"><span>✅ ${cnt.P} presente${cnt.P === 1 ? "" : "s"}</span> <span>❌ ${cnt.F} falta${cnt.F === 1 ? "" : "s"}</span> <span>📝 ${cnt.J} justificada${cnt.J === 1 ? "" : "s"}</span></p>
        <p class="ajuda">⚡ = veio do portal (o aluno entrou com o código, concluiu o Básico, completou o Desafio ou o Turbo). Toque para corrigir: o que você marca vale mais que o automático. Quem não entrou no portal fica com falta; se ele veio e não entrou, toque em <b>P</b>.</p>
        <ul class="pp-cham">${alunos.map((a, i) => { const p = pres(dia, a.id), c = carimbo(dia, a.id), x = extra(dia, a.id), pa = parcial(dia, a.id) && !c.v, fr = freq(a.id);
          return `<li><span class="n">${i + 1}</span><span class="nm">${nomeA(a)}<br><small>${fr.pct == null ? "sem registros" : fr.pct + "% de presença"}</small></span>
            <span class="seg">${["P", "F", "J"].map(v => `<button type="button" data-pres="${a.id}" data-v="${v}" aria-pressed="${p.v === v}" class="${p.v === v && p.auto ? "auto" : ""}" title="${{ P: "Presente", F: "Falta", J: "Falta justificada" }[v]}">${p.v === v && p.auto && v === "P" ? "⚡P" : v}</button>`).join("")}</span>
            <button type="button" class="stamp ${c.auto ? "auto" : ""} ${pa ? "part" : ""}" data-car="${a.id}" aria-pressed="${c.v > 0 || pa}">${c.v === 2 ? "✓✓ Básico ×2" : c.v ? (c.auto ? "⚡ " : "✓ ") + "Básico" : pa ? "◐ Parcial" : "Básico"}</button>
            <button type="button" class="stamp x ${x.auto ? "auto" : ""}" data-ext="${a.id}" aria-pressed="${x.v > 0}">${x.v ? (x.auto ? "⚡" : "") + "★".repeat(x.v) : "☆"} Desafio/Turbo</button></li>`; }).join("")}</ul>
        <p class="ajuda">Básico: toque para avançar — <b>◐ Parcial</b> (começou e termina na próxima aula, não vale nota) → <b>✓ Básico</b> (1,0) → <b>✓✓ ×2</b> (reposição) → sem visto. Desafio/Turbo: 0,25 cada (toque para 1 ou 2).</p>`}
        <h3>O que aconteceu nesta aula</h3>
        <textarea id="reg" class="pp-area" rows="4" placeholder="Ex.: turma agitada no começo; o computador 7 travou.">${esc((aulas[dia] || {}).registro || "")}</textarea>
        <div class="row-btns"><button type="button" class="btn" id="reg-ok">💾 Salvar registro</button></div></div>`;
    }
    function vFrequencia() {
      const ds = diasComChamada();
      if (!ds.length) return `<div class="painel"><p>Ainda não há chamada nesta turma.</p></div>`;
      const ab = e => (e || "").replace(/ –.*/, "").replace("Missão ", "M").replace("Projeto final", "PF").replace("Avaliação", "Aval.");
      return `<div class="painel"><div class="tabela-wrap"><table class="pp-freq"><thead><tr><th>Aluno</th>${ds.map(d => `<th title="${esc(encontroDe(d))}">${dataBR(d).slice(0, 5)}<br><small>${ocorrDe(aulas[d]) ? "🚫 ninguém veio" : esc(ab(encontroDe(d)))}</small></th>`).join("")}<th>Frequência</th></tr></thead>
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
        <div class="row-btns"><button type="button" class="btn" id="pdf-bol">🖨️ Boletim em PDF (turma + individuais)</button><button type="button" class="btn btn-sec" id="xls-bol">📥 Baixar planilha (Excel)</button><button type="button" class="btn btn-sec" id="cp-bol">📋 Copiar boletim</button></div>
        <p class="ajuda">🖨️ abre uma página pronta para imprimir: a lista da turma e, depois, o boletim de cada aluno (2 por folha A4). Na janela de impressão, escolha <b>Salvar como PDF</b>. 📥 baixa a mesma tabela num arquivo que abre no Excel ou no Google Planilhas.</p></div>`;
    }
    function vRegistro() {
      const ds = [...new Set([...Object.keys(aulas), ...cron.map(c => c.data)])].sort().reverse();
      return `<div class="painel"><ul class="pp-reg">${ds.map(d => { const a = aulas[d] || {}; const n = alunos.filter(x => pres(d, x.id).v === "P").length;
        return `<li><div><strong>${dataBR(d)} (${semana(d)}) · ${esc(encontroDe(d) || "Aula")}</strong> <small>${ocorrDe(a) ? esc(OCORR[ocorrDe(a).tipo]) + (ocorrDe(a).nota ? " · " + esc(ocorrDe(a).nota) : "") : d <= hoje && temChamada(d) ? n + " presentes" : d > hoje ? "🔜 prevista" : ""}</small></div>${(a.registro || "").trim() ? `<p>${esc(a.registro).replace(/\n/g, "<br>")}</p>` : ""}<button type="button" class="btn btn-sec btn-peq" data-abrir="${d}">Abrir a chamada deste dia</button></li>`; }).join("")}</ul></div>`;
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
        corpo.querySelectorAll("[data-oc]").forEach(b => b.onclick = async () => { const tipo = b.dataset.oc;
          if (tipo === "ninguem" && !await P.confirmar("Marcar falta para todos os alunos nesta aula?")) return;
          await salvarAula({ ocorrencia: { tipo, nota: "", em: new Date().toISOString() } }); toast(OCORR[tipo]); render(); });
        if (q("#oc-salvar")) q("#oc-salvar").onclick = async () => { await salvarAula({ ocorrencia: { nota: q("#oc-nota").value.trim() } }); toast("Anotação salva."); };
        if (q("#oc-desfazer")) q("#oc-desfazer").onclick = async () => { aulas[dia].ocorrencia = null; try { await aulasCol.doc(dia).set({ ocorrencia: null }, { merge: true }); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); } render(); };
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
        const linhas = () => alunos.map(a => ({ a, b: boletim(a.id), fr: freq(a.id) }));
        const bimTxt = "4º bimestre de " + hoje.slice(0, 4), turmaTxt = nomeTurma(t.id);
        q("#xls-bol").onclick = () => {
          const c = v => { v = String(v == null ? "" : v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
          const csv = [["Prof. Welington Laignier · Informática · " + turmaTxt + " · " + bimTxt],
            ["Nº", "Aluno", "Frequência", "Básico (de 4)", "Desafio/Turbo", "Apostila (até 5,0)", "Prova (até 5,0)", "Nota", "Recuperação (0 a 10)", "Final", "Situação", "O que falta"],
            ...linhas().map(({ a, b, fr }, i) => [i + 1, a.nome, fr.pct == null ? "" : fr.pct + "%", b.basC, b.ext, fmtN(b.A), b.B == null ? "" : fmtN(b.B), fmtN(b.nota), b.r == null ? "" : fmtN(b.r), fmtN(b.final), b.sit.t, b.falta.join(" · ")])]
            .map(l => l.map(c).join(";")).join("\r\n");
          const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }));
          const lk = document.createElement("a"); lk.href = url; lk.download = `Boletim-${t.id}-${hoje.slice(0, 4)}-4bim.csv`; document.body.appendChild(lk); lk.click(); lk.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
          toast("Planilha baixada.");
        };
        q("#pdf-bol").onclick = () => {
          const L = linhas(), e = esc, sitCor = c => ({ ok: "#15803d", bad: "#b91c1c", wait: "#a16207" }[c] || "#333");
          const cab = `<div class="cab"><div><b>Prof. Welington Laignier</b><span>Informática · ${e(turmaTxt)} · ${e(bimTxt)}</span></div><div class="esc">EMEF Juscelino Kubitschek · Curionópolis-PA</div></div>`;
          const turma = `<section class="pg">${cab}<h1>Boletim da turma</h1>
            <table class="t"><thead><tr><th>Nº</th><th>Aluno</th><th>Freq.</th><th>Apostila<br><small>até 5,0</small></th><th>Prova<br><small>até 5,0</small></th><th>Nota</th><th>Recup.</th><th>Final</th><th>Situação</th></tr></thead>
            <tbody>${L.map(({ a, b, fr }, i) => `<tr><td>${i + 1}</td><td class="nm">${e(a.nome)}</td><td>${fr.pct == null ? "–" : fr.pct + "%"}</td><td>${fmtN(b.A)}</td><td>${b.B == null ? "–" : fmtN(b.B)}</td><td>${fmtN(b.nota)}</td><td>${b.r == null ? "–" : fmtN(b.r)}</td><td><b>${fmtN(b.final)}</b></td><td style="color:${sitCor(b.sit.c)}"><b>${e(b.sit.t)}</b></td></tr>`).join("")}</tbody></table>
            <p class="leg">Apostila = 1,0 por visto do Básico (até 4) + 0,25 por Desafio/Turbo (bônus até 1,0). Prova = até 5,0. Recuperação (0 a 10) substitui a nota quando for maior. Média mínima: 5,0.</p>
            <div class="ass"><span>Assinatura do professor</span><span>Data: ____/____/______</span></div></section>`;
          const ind = ({ a, b, fr }) => `<div class="bi">${cab}<h2>${e(a.nome)}</h2>
            <table class="t2"><tr><th>Frequência</th><td>${fr.pct == null ? "–" : fr.pct + "% (" + fr.p + (fr.p === 1 ? " presença" : " presenças") + (fr.j ? ", " + fr.j + (fr.j === 1 ? " justificada" : " justificadas") : "") + ", " + fr.f + (fr.f === 1 ? " falta" : " faltas") + ")"}</td></tr>
            <tr><th>Apostila (Básico)</th><td>${b.basC} de 4 vistos = ${fmtN(b.basC)}</td></tr>
            <tr><th>Desafio / Turbo</th><td>${b.ext} completo${b.ext === 1 ? "" : "s"} = +${fmtN(b.bonus)}</td></tr>
            <tr><th>Prova</th><td>${b.B == null ? "não fez" : fmtN(b.B) + " de 5,0"}</td></tr>
            <tr><th>Nota do bimestre</th><td>${fmtN(b.nota)}</td></tr>
            ${b.r != null ? `<tr><th>Recuperação</th><td>${fmtN(b.r)}${b.recUsada ? " (substituiu a nota)" : ""}</td></tr>` : ""}
            <tr class="fin"><th>Nota final</th><td><b>${fmtN(b.final)}</b> · <b style="color:${sitCor(b.sit.c)}">${e(b.sit.t)}</b></td></tr>
            ${b.falta.length ? `<tr><th>O que falta</th><td>${e(b.falta.join(" · "))}</td></tr>` : ""}</table>
            <div class="ass"><span>Professor</span><span>Responsável</span></div></div>`;
          const pares = []; for (let i = 0; i < L.length; i += 2) pares.push(`<section class="pg dois">${ind(L[i])}${L[i + 1] ? ind(L[i + 1]) : ""}</section>`);
          const css = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{font:12px/1.35 system-ui,Arial,sans-serif;color:#111;margin:0}
            .pg{page-break-after:always}.pg:last-child{page-break-after:auto}
            .cab{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #f97316;padding-bottom:6px;margin-bottom:10px}
            .cab b{display:block;font-size:17px;color:#1e3a8a}.cab span{font-size:12px}.esc{font-size:10px;color:#666;text-align:right}
            h1{font-size:18px;margin:6px 0 10px}h2{font-size:16px;margin:4px 0 8px}
            .t{width:100%;border-collapse:collapse}.t th,.t td{border:1px solid #bbb;padding:3px 5px;text-align:center}.t th{background:#eef2ff}.t td.nm{text-align:left}
            .t tr:nth-child(even) td{background:#fafafa}.leg{font-size:10px;color:#444;margin-top:8px}
            .dois{display:flex;flex-direction:column;gap:10mm;height:272mm}.bi{flex:0 0 calc(50% - 5mm);display:flex;flex-direction:column;border:1.5px solid #1e3a8a;border-radius:8px;padding:10px 12px;overflow:hidden}
            .t2{width:100%;border-collapse:collapse;font-size:12.5px}.t2 th{text-align:left;width:38%;padding:4px 6px;background:#f1f5f9;border:1px solid #ddd}.t2 td{padding:4px 6px;border:1px solid #ddd}
            .t2 .fin th,.t2 .fin td{background:#fff7ed;font-size:14px}
            .ass{display:flex;justify-content:space-around;gap:30px;margin-top:60px}.bi .ass{margin-top:auto;padding-top:40px;padding-bottom:6px}.ass span{flex:1;text-align:center;border-top:1px solid #333;padding-top:3px;font-size:11px}
            .barra{position:sticky;top:0;background:#1e3a8a;color:#fff;padding:10px;text-align:center;font-size:14px}.barra button{font-size:14px;margin-left:10px;padding:6px 14px}
            @media print{.barra{display:none}}`;
          const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Boletim ${e(turmaTxt)} · ${e(bimTxt)}</title><style>${css}</style></head><body>
            <div class="barra">Confira e clique em Imprimir → <b>Salvar como PDF</b><button onclick="print()">🖨️ Imprimir / PDF</button></div>${turma}${pares.join("")}</body></html>`;
          const w = window.open("", "_blank");
          if (!w) { toast("O navegador bloqueou a nova aba. Permita pop-ups para este site."); return; }
          w.document.open(); w.document.write(html); w.document.close();
          setTimeout(() => { try { w.focus(); w.print(); } catch (x) {} }, 600);
        };
        q("#cp-bol").onclick = async () => {
          const txt = ["Aluno\tFrequência\tBásico\tDesafio/Turbo\tApostila\tProva\tNota\tRecuperação\tFinal\tSituação",
            ...alunos.map(a => { const b = boletim(a.id), fr = freq(a.id); return [a.nome, fr.pct == null ? "" : fr.pct + "%", b.basC, b.ext, fmtN(b.A), b.B == null ? "" : fmtN(b.B), fmtN(b.nota), b.r == null ? "" : fmtN(b.r), fmtN(b.final), b.sit.t].join("\t"); })].join("\n");
          try { await navigator.clipboard.writeText(txt); toast("Boletim copiado."); } catch (e) { await P.perguntar("Copie o boletim:", txt); }
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
    tid = escolherTurma(tid, turmas);
    try { sessionStorage.setItem("painel:turma", tid); } catch (e) {}
    const t = turmas.find(x => x.id === tid) || turmas[0];
    const aps = cat().apostilas.filter(a => a.serie === t.serie.id);
    const apId = sessionStorage.getItem("painel:ap:" + t.serie.id);
    const ap = aps.find(a => a.id === apId) || aps.find(a => !a.oculta && !/trilha/.test(a.id)) || aps[0];
    await P.carregarApostila(ap.id);
    const C = P.conteudo[ap.id];
    mid = mid && C.missoes.some(m => m.id === mid) ? mid : (missaoDoDia(t, C) || C.missoes[0].id);
    const el = tela(topo(u, "aula") + `<div class="painel pp-barra">
        <label>Turma <select id="sel">${turmas.map(x => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(nomeTurma(x.id))}</option>`).join("")}</select></label>
        ${aps.length > 1 ? `<label>Apostila <select id="ap">${aps.map(a => `<option value="${a.id}" ${a.id === ap.id ? "selected" : ""}>${esc(a.titulo || a.id)}</option>`).join("")}</select></label>` : ""}
        <span class="pp-missoes">${C.missoes.map(m => `<a class="pp-mis ${m.id === mid ? "atual" : ""}" href="#/painel/aula/${t.id}/${m.id}">${esc(m.icone)} ${esc(m.id.toUpperCase())}</a>`).join("")}</span>
        ${((P.historiasDisponiveis || {})[ap.base || ap.id] || []).includes(mid) ? `<a class="btn pp-btn-desc" href="#/historia/${ap.base || ap.id}/${mid}" target="_blank" rel="noopener" title="Abre numa aba nova a história animada (problema → solução) desta missão">🎞️ História (abre numa aba nova)<span class="pp-btn-sub">o vídeo sem a voz: problema → solução, para prender a atenção</span></a>` : ""}
        <a class="btn pp-btn-desc" href="#/apresentar/${ap.id}/${mid}" target="_blank" rel="noopener" title="Abre numa aba nova os slides animados desta missão, para projetar">🎬 Apresentar (abre numa aba nova)<span class="pp-btn-sub">slides do conteúdo da apostila, tópico por tópico, para explicar</span></a>
        <a class="btn btn-sec" href="#/ver/${ap.id}/${mid}/${t.id}" target="_blank" rel="noopener" title="Abre numa aba nova a apostila exatamente como os alunos veem">👀 Abrir a apostila do aluno</a>
        <a class="btn btn-sec" href="cartaz.html?v=${window.PORTAL_VERSAO || ""}" target="_blank" rel="noopener" title="Abre numa aba nova o cartaz com o endereço do site e os passos para entrar, para projetar">🪧 Cartaz de entrada (projetar)</a></div>
      <div id="aula"></div>`);
    ligarSair(el);
    el.querySelector("#sel").onchange = e => { location.hash = "#/painel/aula/" + e.target.value + "/" + mid; };
    const sa = el.querySelector("#ap"); if (sa) sa.onchange = e => { try { sessionStorage.setItem("painel:ap:" + t.serie.id, e.target.value); } catch (x) {} telaAula(u, t.id); };
    // 📺 vídeo da missão (YouTube não listado do professor): player só aqui no painel, para projetar
    try {
      // pode ser um ID ou uma lista [principal, extra]: o 2º em diante aparece como vídeo extra (passo a passo)
      const vv = ((P.videosMissao || {})[ap.base || ap.id] || {})[mid], lista = (Array.isArray(vv) ? vv : [vv]).filter(v => v && /^[\w-]{11}$/.test(v));
      lista.forEach((vid, k) => {
        const box = document.createElement("details"); box.className = "painel pp-video"; box.open = !k;
        box.innerHTML = `<summary><strong>📺 ${k ? "Vídeo extra" : "Vídeo"} da missão ${esc(mid.toUpperCase())}</strong> ${k ? "(passo a passo, para quando a turma tiver dificuldade)" : "(com a sua voz)"}</summary>
          <div class="pp-video-quadro"><iframe src="https://www.youtube-nocookie.com/embed/${vid}?rel=0&modestbranding=1" title="Vídeo da missão ${esc(mid.toUpperCase())}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
          <p class="pp-video-acoes"><a class="btn btn-sec" href="https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1" target="_blank" rel="noopener">↗️ Abrir player em nova aba</a>
            <a class="btn btn-link" href="https://youtu.be/${vid}" target="_blank" rel="noopener">Abrir no YouTube</a></p>
          <p class="ajuda">Dê o play aqui mesmo ou abra o player numa aba só dele (ocupa a tela toda, bom para projetar). Use o botão de tela cheia do player. Lembre da caixinha de som: os computadores dos alunos não têm áudio.</p>`;
        el.querySelector("#aula").before(box);
      });
    } catch (e) { console.warn(e); }
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
    // 🟧 Recados para a próxima aula: os lembretes da turma (mesmos do 📒 Diário › 🔔 Lembretes), num quadro laranja grande.
    // "✔ Já li" marca o recado como feito no Firebase (some em todos os computadores); dá para escrever um recado novo aqui.
    try {
      const lRef = db().collection(DIARIO).doc(t.id);
      const ls = await lRef.get();
      let lista = (ls.exists && ls.data().lembretes) || [];
      const box = document.createElement("div"); box.className = "painel pp-recados";
      const desenhar = () => {
        const pend = lista.map((l, i) => ({ ...l, i })).filter(l => !l.feito);
        box.innerHTML = `<h2>🟧 Recados para esta aula · ${esc(nomeTurma(t.id))}</h2>
          ${pend.length ? pend.map(l => `<div class="pp-recado"><p>${esc(l.texto).replace(/\n/g, "<br>")}</p>
            <div class="pp-recado-pe"><small>${l.criadoEm ? "Anotado em " + dataBR(l.criadoEm.slice(0, 10)) : ""}</small>
            <button class="btn pp-recado-ok" type="button" data-rok="${l.i}">✔ Já li</button></div></div>`).join("")
            : `<p class="pp-recado-vazio">Nenhum recado pendente para esta turma.</p>`}
          ${(() => { const lidos = lista.filter(l => l.feito).slice().sort((a, b) => ((b.lidoEm || b.criadoEm || "") > (a.lidoEm || a.criadoEm || "") ? 1 : -1));
            return lidos.length ? `<details class="pp-recado-novo pp-recado-hist"><summary>📜 Histórico de recados desta turma (${lidos.length})</summary>
              ${lidos.map(l => `<div class="pp-recado-velho"><p>${esc(l.texto).replace(/\n/g, "<br>")}</p><small>${l.criadoEm ? "Anotado em " + dataBR(l.criadoEm.slice(0, 10)) : ""}${l.lidoEm ? " · lido em " + dataBR(l.lidoEm.slice(0, 10)) : ""}</small></div>`).join("")}</details>` : ""; })()}
          <details class="pp-recado-novo"><summary>✏️ Deixar um recado para a próxima aula desta turma</summary>
            <textarea id="rc-txt" rows="3" placeholder="Ex.: A aluna X precisa terminar o Básico da M2 no começo da aula. Liberar a M2 para ela."></textarea>
            <button class="btn" type="button" id="rc-add">Guardar recado</button></details>`;
        box.querySelectorAll("[data-rok]").forEach(b => b.onclick = async () => {
          lista = lista.map((l, i) => i === +b.dataset.rok ? { ...l, feito: true, lidoEm: new Date().toISOString() } : l);
          try { await lRef.set({ lembretes: lista }, { merge: true }); toast("Recado marcado como lido."); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
          desenhar();
        });
        box.querySelector("#rc-add").onclick = async () => {
          const v = box.querySelector("#rc-txt").value.trim(); if (!v) return;
          lista = [...lista, { texto: v, feito: false, criadoEm: new Date().toISOString() }];
          try { await lRef.set({ lembretes: lista }, { merge: true }); toast("Recado guardado."); } catch (err) { toast("Não foi possível salvar: " + (err.message || err)); }
          desenhar();
        };
      };
      desenhar();
      el.querySelector(".pp-barra").after(box);
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
        if (k === "lib") { const m = await P.perguntar("Liberar as tarefas da turma toda por quantos minutos?", "75"); if (!m || !(+m > 0)) return; await ref.set({ ate: Date.now() + (+m) * 60000, fechadaAte: 0 }, { merge: true }); }
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
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "🧪 Criar alunos de teste";
    };
    el.querySelector("#tstx").onclick = async () => {
      if (!await P.confirmar("Remover todos os alunos de teste (e o que eles fizeram no portal)?")) return;
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
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); }
    };
    el.querySelector("#imp1").onclick = async () => {
      const tid = el.querySelector("#tt").value;
      const nomes = el.querySelector("#lista").value.split(/\r?\n/).map(arrumarNome).filter(n => n.length > 2);
      if (!nomes.length) return await P.aviso("Cole pelo menos um nome.");
      const b = el.querySelector("#imp1"); b.disabled = true; b.textContent = "Importando…";
      try { const r = await adicionarAlunos(tid, nomes.map(nome => ({ nome })), cfg.ano); mostrar("Importação concluída", [[tid, r]]); el.querySelector("#lista").value = ""; }
      catch (err) { await P.aviso("Erro: " + (err.message || err)); }
      b.disabled = false; b.textContent = "📥 Importar para esta turma";
    };
    el.querySelector("#imp2").onclick = async () => {
      const f = el.querySelector("#arq").files[0]; if (!f) return await P.aviso("Escolha o arquivo.");
      let d; try { d = JSON.parse(await f.text()); } catch (e) { return await P.aviso("Arquivo inválido."); }
      const ts = d && d.turmas ? Object.keys(d.turmas).filter(tid => turmas.some(x => x.id === tid)) : [];
      if (!ts.length) return await P.aviso("O arquivo não tem turmas reconhecidas.");
      const total = ts.reduce((n, tid) => n + d.turmas[tid].length, 0);
      if (!await P.confirmar(`Importar ${total} alunos em ${ts.length} turmas?`)) return;
      const b = el.querySelector("#imp2"); b.disabled = true;
      const grupos = [];
      try { for (const tid of ts) { b.textContent = "Importando " + nomeTurma(tid) + "…"; grupos.push([tid, await adicionarAlunos(tid, d.turmas[tid], d.ano || cfg.ano)]); } mostrar("Importação concluída", grupos); }
      catch (err) { await P.aviso("Erro: " + (err.message || err)); if (grupos.length) mostrar("Importação parcial", grupos); }
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
      if (!cfg.travaHorario && !await P.confirmar("Ligar a trava? A partir de agora, os alunos só fazem as tarefas no horário da aula da turma.")) return;
      await db().collection("config").doc("geral").set({ travaHorario: !cfg.travaHorario }, { merge: true });
      toast(cfg.travaHorario ? "Trava desligada." : "Trava ligada."); telaAno(u);
    };
    el.querySelector("#novo").onclick = async () => {
      if (!await P.confirmar(`Começar o ano letivo ${cfg.ano + 1}? Todos os alunos ativos de ${cfg.ano} serão desativados.`)) return;
      if (await P.perguntar(`Para confirmar, digite ${cfg.ano + 1}:`) !== String(cfg.ano + 1)) return await P.aviso("Cancelado.");
      const b = el.querySelector("#novo"); b.disabled = true; b.textContent = "Desativando…";
      try {
        const q = await db().collection("alunos").where("ativo", "==", true).get();
        const ops = [];
        q.docs.forEach(d => { const a = d.data(); ops.push(x => x.update(d.ref, { ativo: false })); ops.push(x => x.set(db().collection("acessos").doc(a.turma + "_" + a.codigo), { alunoId: d.id, turma: a.turma, ativo: false, nome: a.nome, ...(a.trilha ? { trilha: true } : {}) })); });
        ops.push(x => x.set(db().collection("config").doc("geral"), { ano: cfg.ano + 1, viradaEm: Date.now() }, { merge: true }));
        await lotes(ops);
        await P.aviso(`Pronto! ${q.size} alunos desativados. Agora importe as listas de ${cfg.ano + 1}.`);
        location.hash = "#/painel/importar";
      } catch (err) { await P.aviso("Erro: " + (err.message || err)); b.disabled = false; }
    };
  }

  P.painel = {
    async abrir(mount, sub, arg, arg2) {
      mountFn = mount;
      await (N.app(0).pronto);
      await new Promise(ok => { const x = auth().onAuthStateChanged(() => { x(); ok(); }); });
      const u = await entrar();
      if (!ss.get("painel:pendencias")) { ss.set("painel:pendencias", "1"); setTimeout(() => mostrarAvisos().finally(() => perguntarPendentes()), 1200); }
      try {
        if (sub === "aula") return await telaAula(u, arg, arg2);
        if (sub === "placar") return await telaPlacar(u, arg);
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

/* 🌟 MODO HELENA · "Vez da Helena" (25/11/2026, pedido do professor Welington Laignier)
   Homenagem à aluna que inspirou o modo. Vale para qualquer aluno marcado no painel (ficha do aluno › 🌟 Modo Helena).
   Problema: em dupla com um colega que não é da Trilha, o aluno ficava "só de figurante" (participação periférica).
   Solução (interdependência positiva, Aprendizagem Cooperativa):
   - EM DUPLA: a dupla faz a apostila normal; em cada etapa de tarefas aparece a carta "🌟 Agora é a vez da <nome>!".
     O colega lê em voz alta (leitura mediada — os computadores da sala não têm som) e ela responde com UM toque:
     desenhos grandes, sem digitar, sem arrastar, sem tempo correndo. A etapa só abre depois da resposta
     (ou do "😴 escolheu descansar agora"). Acerto vale XP para a dupla.
   - SOZINHA: "🌟 Trilha da <nome>": as mesmas cartas em sequência, com uma pausa para descansar a mão no meio e o
     "Conte para o professor" no fim.
   - O visto do dia vem da presença (painel.js), não de terminar tarefas. O relatório mostra as vezes (relatorio.js).
   Dados: config/liberar_<turma>.helena = { alunoId: true } (lido pelo aluno) e alunos/<id>.modoHelena (painel).
   Progresso: prog.atv["<missão>-hz-<carta>"] = { status: "certo" | "descanso" | "contou", tentativas, quando, hz: 1 }.
   Pontos (podio.js › extrasHelena): de primeira +40, com nova tentativa +25, "contou" +40; até +200 por missão. */
(function () {
  const P = window.PORTAL; if (!P) return;
  const { esc, h } = P.util;

  /* ---------------- 🃏 CARTAS (conteúdo conferido; frases curtas para a leitura mediada) ----------------
     tipos: imagem (toque no desenho certo) · simnao · ordem (toque na ordem, sem arrastar) · achar (toque nas caixas
     uma de cada vez até achar) · explica (contar para o colega/professor). Sempre 2 ou 3 opções. */
  const C8 = {
    m1: [
      { id: "achar7", tipo: "achar", pergunta: "Ache o número 7. Toque nas caixas uma de cada vez, da esquerda para a direita.", caixas: [3, 9, 7, 1, 5], alvo: 7,
        festa: "Você fez uma busca sequencial, igual ao computador: olhou uma caixa de cada vez até achar!" },
      { id: "ordem", tipo: "ordem", pergunta: "Coloque em ordem, do menor para o maior. Toque primeiro no menor número.", itens: [{ ic: "2️⃣", txt: "2" }, { ic: "5️⃣", txt: "5" }, { ic: "8️⃣", txt: "8" }],
        festa: "A lista ficou em ordem: 2, 5, 8. Ordenar é o que o computador faz para achar as coisas mais rápido!" },
      { id: "lista", tipo: "imagem", pergunta: "Qual destes é uma lista?", opcoes: [{ ic: "📝", txt: "Lista de compras" }, { ic: "🍎", txt: "Uma maçã" }, { ic: "⚽", txt: "Uma bola" }], certo: 0,
        festa: "Isso! A lista de compras guarda várias coisas, uma embaixo da outra." },
      { id: "dicio", tipo: "simnao", pergunta: "No dicionário, as palavras estão em ordem alfabética (A, B, C...)?", certo: true,
        festa: "Sim! Por isso é fácil achar uma palavra no dicionário." },
      { id: "explica", tipo: "explica", pergunta: "Conte como você achou o número 7." }
    ],
    m2: [
      { id: "cabo", tipo: "imagem", pergunta: "Qual destes passa no fundo do mar e leva a internet?", opcoes: [{ ic: "🌊", txt: "Cabo no mar" }, { ic: "🚗", txt: "Carro" }, { ic: "🍎", txt: "Fruta" }], certo: 0,
        festa: "Isso! Cabos enormes passam no fundo do mar e levam a internet de um país para outro." },
      { id: "datacenter", tipo: "imagem", pergunta: "Onde ficam guardadas as fotos da nuvem?", opcoes: [{ ic: "🏢", txt: "Prédio cheio de computadores" }, { ic: "☁️", txt: "Nuvem do céu" }, { ic: "🎒", txt: "Mochila" }], certo: 0,
        festa: "Isso! A nuvem é um prédio cheio de computadores. Ele se chama data center." },
      { id: "juntos", tipo: "simnao", pergunta: "Vários computadores trabalhando juntos terminam o trabalho mais rápido?", certo: true,
        festa: "Sim! Dividir o trabalho deixa tudo mais rápido, como uma turma arrumando a sala junta." },
      { id: "caminho", tipo: "ordem", pergunta: "O caminho do vídeo até o celular: toque na ordem, do começo ao fim.", itens: [{ ic: "🏢", txt: "Data center" }, { ic: "🌊", txt: "Cabo" }, { ic: "📱", txt: "Celular" }],
        festa: "Isso! O vídeo sai do data center, passa pelos cabos e chega ao celular." },
      { id: "explica", tipo: "explica", pergunta: "Conte o que passa no fundo do mar e leva a internet." }
    ],
    m3: [
      { id: "endereco", tipo: "imagem", pergunta: "Qual destes é um dado pessoal, que a gente não passa para estranhos?", opcoes: [{ ic: "🏠", txt: "Endereço de casa" }, { ic: "🌞", txt: "O sol" }, { ic: "🌳", txt: "Uma árvore" }], certo: 0,
        festa: "Isso! O endereço de casa é um dado pessoal. Só passamos para quem confiamos." },
      { id: "senha", tipo: "simnao", pergunta: "Uma pessoa desconhecida pede a sua senha. Você passa?", certo: false,
        festa: "Muito bem! Senha é segredo: não se passa para ninguém." },
      { id: "noticia", tipo: "imagem", pergunta: "Chegou uma notícia estranha no celular. O que fazer?", opcoes: [{ ic: "🤔", txt: "Conferir antes" }, { ic: "📤", txt: "Mandar para todos" }], certo: 0,
        festa: "Isso! Antes de compartilhar, a gente confere se a notícia é verdadeira." },
      { id: "foto", tipo: "simnao", pergunta: "Posso postar a foto de um colega sem pedir para ele?", certo: false,
        festa: "Muito bem! Antes de postar a foto de alguém, a gente pede permissão." },
      { id: "explica", tipo: "explica", pergunta: "Conte um dado pessoal que a gente não passa para estranhos." }
    ],
    m4: [
      { id: "ler", tipo: "imagem", pergunta: "Antes de clicar em ACEITO, o que a gente faz?", opcoes: [{ ic: "📖", txt: "Ler ou pedir ajuda" }, { ic: "🙈", txt: "Clicar sem ler" }], certo: 0,
        festa: "Isso! Primeiro a gente lê (ou pede ajuda para ler). Depois decide." },
      { id: "aceito", tipo: "imagem", pergunta: "Qual botão quer dizer que você concorda?", opcoes: [{ ic: "✅", txt: "ACEITO" }, { ic: "❌", txt: "RECUSO" }], certo: 0,
        festa: "Isso! ACEITO quer dizer que você concorda com as regras." },
      { id: "lanterna", tipo: "simnao", pergunta: "Um aplicativo de lanterna precisa ver os seus contatos?", certo: false,
        festa: "Muito bem! Lanterna não precisa dos seus contatos. Desconfie!" },
      { id: "dados", tipo: "simnao", pergunta: "O aplicativo pode usar os dados que você entrega para ele?", certo: true,
        festa: "Sim! Por isso a gente lê os termos de uso antes de aceitar." },
      { id: "explica", tipo: "explica", pergunta: "Conte o que a gente faz antes de clicar em ACEITO." }
    ]
  };
  const pega = (mid, id) => Object.assign({}, C8[mid].find(c => c.id === id), { id: mid + id });
  C8.rv = [pega("m1", "achar7"), pega("m2", "cabo"), pega("m3", "senha"), pega("m4", "ler"), pega("m2", "datacenter"), pega("m3", "endereco"),
    { id: "explica", tipo: "explica", pergunta: "Conte o que você mais gostou de aprender neste bimestre." }];
  const CARTAS = { "informatica-8ano-4bim": C8 };

  const baseDe = aid => { const a = P.apostila(aid) || {}; return a.base || aid; };
  function cartas(aid, mid) { return ((CARTAS[baseDe(aid)] || {})[mid] || []).slice(); }

  /* ---------------- quem é do Modo Helena nesta sessão ---------------- */
  let memo = { k: "", v: null };
  async function estado(s) {
    if (!s || !s.nuvem || !(s.alunoIds || []).length || !P.nuvem || !P.nuvem.app) return null;
    const k = s.alunoIds.join("+") + "|" + s.turma + "|" + s.entrou;
    if (memo.k === k) return memo.v;
    let mapa = {};
    try { const turmas = [...new Set([s.turma, ...(s.turmasAlunos || [])].filter(Boolean))];
      for (const t of turmas) { const sn = await P.nuvem.app(0).db.collection("config").doc("liberar_" + t).get(); if (sn.exists) Object.assign(mapa, sn.data().helena || {}); } } catch (e) { mapa = {}; }
    const i = s.alunoIds.findIndex(id => mapa[id]);
    const primeiro = n => String(n || "").trim().split(/\s+/)[0] || "";
    const apel = j => (s.apelidos || [])[j] && !/^[^\wÀ-ú]/.test(s.apelidos[j]) ? s.apelidos[j] : primeiro((s.nomes || [])[j]);
    let v = null;
    if (i >= 0) {
      const outros = s.alunoIds.map((_, j) => j).filter(j => j !== i && !mapa[s.alunoIds[j]]);
      v = { idx: i, nome: primeiro(s.nomes[i]) || "você", dupla: outros.length > 0, solo: s.alunoIds.length === 1,
        colega: outros.length ? outros.map(j => primeiro(s.nomes[j])).join(" e ") : "" };
    }
    memo = { k, v }; return v;
  }
  function limpar() { memo = { k: "", v: null }; }

  /* ---------------- progresso ---------------- */
  const chave = (mid, c) => mid + "-hz-" + c.id;
  function feita(aid, mid, c) { const st = (P.getProg(aid).atv || {})[chave(mid, c)]; return !!(st && st.status); }
  function gravar(aid, mid, c, status, tentativas) {
    const p = P.getProg(aid); p.atv = p.atv || {};
    const k = chave(mid, c); if (p.atv[k] && p.atv[k].status && p.atv[k].status !== "descanso") return;   // vale a primeira resposta
    p.atv[k] = { status, tentativas: tentativas || 0, quando: Date.now(), hz: 1 };
    P.setProg(aid, p);
  }

  /* ---------------- 🃏 a carta ---------------- */
  const embaralhar = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function carta(c, hz, fim, ao) {   // ao(status, erros): grava na hora; fim(): fecha/avança depois da festa
    const nome = esc(hz.nome), col = hz.dupla ? esc(hz.colega) : "";
    const leitor = hz.dupla ? `<p class="hz-leitor">👧🧒 <b>${col}</b>, leia em voz alta para a ${nome}:</p>` : "";
    const passos = c.tipo === "explica" ? "" : `<ol class="hz-passos"><li>${hz.dupla ? "👂 Ouça" : "👀 Leia"}</li><li>👀 Olhe os desenhos</li><li>👆 Toque ${c.tipo === "ordem" ? "na ordem" : c.tipo === "achar" ? "uma caixa de cada vez" : "na resposta"}</li></ol>`;
    const el = h(`<div class="hz-carta" role="dialog" aria-modal="true" aria-label="Vez da ${nome}">
      <p class="hz-tit">🌟 Agora é a vez da ${nome}!</p>${leitor}
      <p class="hz-perg">${esc(c.pergunta)}</p>${passos}
      <div class="hz-area"></div><p class="hz-msg" aria-live="polite"></p>
      <div class="hz-pe"><button type="button" class="hz-desc">😴 A ${nome} escolheu descansar agora</button></div></div>`);
    const area = el.querySelector(".hz-area"), msg = el.querySelector(".hz-msg");
    let erros = 0, acabou = false;
    const terminar = (status) => { if (acabou) return; acabou = true; el.querySelectorAll("button").forEach(b => b.disabled = true);
      try { ao && ao(status, erros); } catch (e) { console.warn("vez da helena", e); }
      if (status === "descanso") { fim(status, erros); return; }
      msg.innerHTML = `<span class="hz-festa">🎉 Muito bem, ${nome}!</span>${c.festa ? `<br>${esc(c.festa)}` : ""}`; el.classList.add("hz-ok");
      setTimeout(() => fim(status, erros), c.festa ? 3200 : 1800); };
    const errou = (b, txt) => { erros++; if (b) { b.classList.add("hz-errado"); b.disabled = true; } msg.textContent = txt || "Quase! Tente de novo 😊"; el.classList.remove("hz-treme"); void el.offsetWidth; el.classList.add("hz-treme"); };
    if (c.tipo === "imagem" || c.tipo === "simnao") {
      const ops = c.tipo === "simnao" ? [{ ic: "👍", txt: "SIM", v: true }, { ic: "👎", txt: "NÃO", v: false }] : c.opcoes.map((o, i) => Object.assign({ v: i }, o));
      const lista = c.tipo === "simnao" ? ops : embaralhar(ops);
      lista.forEach(o => { const b = h(`<button type="button" class="hz-op"><span class="hz-ic">${o.ic}</span><span class="hz-tx">${esc(o.txt)}</span></button>`);
        b.onclick = () => (o.v === c.certo ? terminar("certo") : errou(b)); area.appendChild(b); });
    } else if (c.tipo === "ordem") {
      let n = 0; embaralhar(c.itens.map((o, i) => Object.assign({ i }, o))).forEach(o => {
        const b = h(`<button type="button" class="hz-op"><span class="hz-ic">${o.ic}</span><span class="hz-tx">${esc(o.txt)}</span><span class="hz-num" hidden></span></button>`);
        b.onclick = () => { if (o.i !== n) return errou(null, "Ainda não é esse. Qual vem antes? 😊"); const q = b.querySelector(".hz-num"); q.hidden = false; q.textContent = ++n; b.disabled = true; b.classList.add("hz-certo"); msg.textContent = "";
          if (n === c.itens.length) terminar("certo"); };
        area.appendChild(b); });
    } else if (c.tipo === "achar") {
      let n = 0; const bs = c.caixas.map((v, i) => { const b = h(`<button type="button" class="hz-caixa" aria-label="Caixa ${i + 1}">?</button>`);
        b.onclick = () => { if (i !== n) { msg.textContent = "Uma de cada vez: toque na caixa que está brilhando ✨"; return; }
          b.textContent = v; b.classList.add("hz-virada"); b.disabled = true; n++;
          if (v === c.alvo) { b.classList.add("hz-certo"); terminar("certo"); } else { msg.textContent = `${v} não é o ${c.alvo}. Próxima caixa! 👉`; brilho(); } };
        area.appendChild(b); return b; });
      const brilho = () => bs.forEach((b, i) => b.classList.toggle("hz-brilha", i === n));
      area.classList.add("hz-fila"); brilho();
    } else if (c.tipo === "explica") {
      const quem = hz.dupla ? col : "o professor";
      area.appendChild(h(`<p class="hz-explica">🗣️ ${nome}, conte para ${quem}!</p>`));
      const b = h(`<button type="button" class="hz-op hz-contou"><span class="hz-ic">✅</span><span class="hz-tx">${hz.dupla ? `A ${nome} contou` : "Contei!"}</span></button>`);
      b.onclick = () => terminar("contou"); area.appendChild(b);
      if (hz.dupla) area.appendChild(h(`<p class="hz-dica">${col}: escute com atenção e toque em ✅ quando ela terminar.</p>`));
    }
    el.querySelector(".hz-desc").onclick = () => terminar("descanso");
    return el;
  }

  /* ---------------- 👫 EM DUPLA: uma carta em cada etapa de tarefas ---------------- */
  function etapas(pages) { return pages.filter(p => (p.tipo === "missao" || p.tipo === "revisao") && (p.atividades || []).length); }
  function cartaDaEtapa(lista, eps, pid) {
    const i = eps.findIndex(p => p.id === pid); if (i < 0 || !lista.length) return null;
    const exp = lista.find(c => c.tipo === "explica"), resto = lista.filter(c => c.tipo !== "explica");
    if (i === eps.length - 1 && exp) return exp;                 // a última etapa fecha com o "conte para o colega"
    return resto[i] || null;
  }
  function naPagina(o) {   // { aid, mid, pages, pg, hz, aoFechar }
    const lista = cartas(o.aid, o.mid); if (!lista.length || !o.hz || !o.hz.dupla) return;
    const c = cartaDaEtapa(lista, etapas(o.pages), o.pg.id); if (!c || feita(o.aid, o.mid, c)) return;
    const fundo = h(`<div class="hz-fundo"></div>`);
    fundo.appendChild(carta(c, o.hz, () => { fundo.remove(); document.body.classList.remove("hz-aberta"); o.aoFechar && o.aoFechar(); }, (status, erros) => gravar(o.aid, o.mid, c, status, erros)));
    document.body.appendChild(fundo); document.body.classList.add("hz-aberta");
    const sair = () => { if (!document.body.contains(fundo)) { window.removeEventListener("hashchange", sair); return; } fundo.remove(); document.body.classList.remove("hz-aberta"); window.removeEventListener("hashchange", sair); };
    window.addEventListener("hashchange", sair);
  }

  /* ---------------- 🧍 SOZINHA: 🌟 Trilha da <nome> ---------------- */
  function sequencia(lista) {
    const exp = lista.filter(c => c.tipo === "explica"), resto = lista.filter(c => c.tipo !== "explica"), meio = Math.ceil(resto.length / 2);
    return [...resto.slice(0, meio), { id: "pausa", tipo: "pausa" }, ...resto.slice(meio), ...exp];
  }
  function telaSolo(o) {   // { mount, aid, mid, m, hz, apostilaHref }
    const lista = cartas(o.aid, o.mid), seq = sequencia(lista), nome = esc(o.hz.nome);
    const el = o.mount(`<section class="tela hz-solo"><header class="hz-cab"><p class="hz-sup">🌟 Trilha da ${nome}</p><h1>${esc(o.m.icone || "")} ${esc((o.m.titulo || "").replace(/^Missão \d+ – /, ""))}</h1>
      <ol class="hz-bolas">${seq.filter(c => c.tipo !== "pausa").map(() => "<li></li>").join("")}</ol></header><div class="hz-palco"></div>
      <p class="hz-rodape"><a href="${o.apostilaHref}">📚 Voltar às missões</a></p></section>`);
    const palco = el.querySelector(".hz-palco"), bolas = [...el.querySelectorAll(".hz-bolas li")];
    let pausaFeita = false;
    const pintar = () => { let k = 0; seq.forEach(c => { if (c.tipo === "pausa") return; const st = (P.getProg(o.aid).atv || {})[chave(o.mid, c)]; bolas[k].className = st && st.status ? (st.status === "descanso" ? "hz-b-desc" : "hz-b-ok") : ""; k++; }); };
    const proxima = () => {
      pintar(); palco.innerHTML = "";
      const i = seq.findIndex((c, j) => c.tipo === "pausa" ? (!pausaFeita && seq.slice(0, j).every(x => x.tipo === "pausa" || feita(o.aid, o.mid, x)) && seq.slice(j + 1).some(x => !feita(o.aid, o.mid, x))) : !feita(o.aid, o.mid, c));
      if (i < 0) { palco.appendChild(h(`<div class="hz-carta hz-final"><p class="hz-tit">🏆 Missão da ${nome} concluída!</p><p class="hz-perg">Parabéns pelo esforço, ${nome}! 🎉</p>
        <p class="hz-dica">Chame o professor para ver tudo o que você fez.</p></div>`)); return; }
      const c = seq[i];
      if (c.tipo === "pausa") { const pz = h(`<div class="hz-carta hz-pausa"><p class="hz-tit">🙌 Hora de descansar a mão!</p><p class="hz-perg">Mexa os dedos, abra e feche a mão, respire fundo. 😌</p>
          <div class="hz-area"><button type="button" class="hz-op"><span class="hz-ic">▶️</span><span class="hz-tx">Continuar</span></button></div></div>`);
        pz.querySelector("button").onclick = () => { pausaFeita = true; proxima(); }; palco.appendChild(pz); return; }
      palco.appendChild(carta(c, o.hz, () => proxima(), (status, erros) => gravar(o.aid, o.mid, c, status, erros)));
      window.scrollTo(0, 0);
    };
    proxima();
    return el;
  }

  /* ---------------- 🏆 pontos (usado pelo podio.js) ---------------- */
  function extras(mid, atv) {
    let x = 0; Object.keys(atv || {}).forEach(k => { if (k.indexOf(mid + "-hz-") !== 0) return; const st = atv[k] || {};
      if (st.status === "certo") x += (st.tentativas || 0) ? 25 : 40; else if (st.status === "contou") x += 40; });
    return Math.min(200, x);
  }
  /* resumo para o relatório: { total, primeira, nova, contou, descanso } das cartas de um dia */
  function resumo(lista) {
    const r = { total: 0, primeira: 0, nova: 0, contou: 0, descanso: 0 };
    lista.forEach(st => { r.total++; if (st.status === "descanso") r.descanso++; else if (st.status === "contou") r.contou++; else if (st.tentativas) r.nova++; else r.primeira++; });
    return r;
  }

  P.helena = { estado, limpar, cartas, naPagina, telaSolo, extras, resumo, temCartas: (aid, mid) => cartas(aid, mid).length > 0 };
})();

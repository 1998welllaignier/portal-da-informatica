/* 🚦 SALA DE ESPERA + 🏁 DAR A LARGADA (20/11/2026, ideia do professor Welington Laignier)
   Problema: na hora de entrar, os mais rápidos saíam correndo e respondiam as tarefas de qualquer jeito, enquanto os mais
   lentos ainda digitavam o código. Solução:
   - ALUNO: depois do código, no dia e na hora da aula, cai na Sala de espera ("🎉 Parabéns, você entrou!") com 4 opções:
       🎮 Jogos de aquecimento (sem fim, autoexplicativos, nunca o mesmo jogo duas vezes seguidas): +5 por acerto, SEM teto (28/11/2026, pedido do professor: com motivo para ganhar pontos, o aluno fica no lugar jogando em vez de levantar; a largada fecha a sala de espera de qualquer forma);
       🧑‍🎨 Montar o meu avatar, sem pressa (até a largada): +10 na primeira vez que salvar no dia;
       👀 Espiar a missão de hoje (objetivo e "Onde eu uso isso?", só leitura);
       💡 Você sabia? (curiosidades de informática, todas conferidas).
     Recompensa a quem entra cedo e fica no lugar: os pontos entram no placar da aula (podio.js → ranking).
   - PROFESSOR: na aba 🎤 Aula, o quadro mostra quem já entrou e quem falta, com o botão 🏁 Dar a largada, que abre o vídeo
     ao mesmo tempo (23/11/2026: o vídeo e a leitura guiada vêm ANTES, pela 🎤 Aula ao vivo, js/palco.js).
   Dados (sem mudar as regras do Firebase):
   - config/hoje_<turma>: espera (true/false, gravado no ▶️ Iniciar a aula) e largadaEm (hora da largada; 0 = ainda não);
   - progresso/<alunoId>_espera: { tipo: "espera", alunoId, turma, dia, pontos, avatarBonus, atualizado }.
   Na casa 🏠 e nos dias sem Sala de espera, o avatar continua com os 4 minutos no login, como antes. */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const N = () => P.nuvem;
  const hoje = () => N().hoje();
  const TETO = Infinity, PONTO = 5, BONUS_AVATAR = 10;   // ♾️ sem teto desde 28/11/2026
  const sorteio = n => Math.floor(Math.random() * n);
  const embaralha = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = sorteio(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  /* ---------------- quando a Sala de espera vale para esta sessão ---------------- */
  let memo = { k: "", em: 0, v: null };
  async function ativaPara(s) {
    if (!s || !s.nuvem || s.prof || !(s.alunoIds || []).length || !N() || !N().pronto) return null;
    const k = s.turma + "|" + s.entrou; if (memo.k === k && Date.now() - memo.em < 4000) return memo.v;
    const v = await calcular(s).catch(() => null); memo = { k, em: Date.now(), v }; return v;
  }
  /* 🏫 25/11/2026: aluno que frequenta a aula de OUTRA turma (config/liberar_<turma>.outra) também entra na Sala de espera
     da turma em que assiste à aula. Antes, só a turma do cadastro era olhada, e ele ficava de fora (ia direto às apostilas). */
  async function calcular(s) {
    const db = N().app(0).db;
    const [g, lib] = await Promise.all([db.collection("config").doc("geral").get().then(x => x.exists ? x.data() : {}).catch(() => ({})),
      db.collection("config").doc("liberar_" + s.turma).get().then(x => x.exists ? x.data() : {}).catch(() => ({}))]);
    if (g.modoAula === false || g.salaEspera === false) return null;
    if (P.trava && await P.trava.casaEh(s).catch(() => false)) return null;      // 🏠 em casa não tem sala de espera
    let outras = [...new Set((s.alunoIds || []).map(id => (lib.outra || {})[id]).filter(x => x && x !== s.turma))];
    // 🎒 5º ano: entra na Sala de espera da aula que estiver acontecendo (a iniciada mais recentemente hoje), de qualquer turma
    // 🎒 Agregados (26/11/2026): só entra na Sala de espera da aula em que o professor o incluiu (sem inclusão: sem sala de espera)
    if (P.agEh && P.agEh(s)) { const r = P.trava && P.trava.aulaDe ? await P.trava.aulaDe(s, lib).catch(() => null) : null; if (!r || r.tAula === s.turma) return null; const v = await calcularT(s, r.tAula, db); return v ? Object.assign(v, { _turma: r.tAula }) : null; }
    if (s.serie === "5" && P.trava && P.trava.aulaDe) { const r = await P.trava.aulaDe(s, lib).catch(() => null); outras = r && r.t && r.tAula !== s.turma ? [r.tAula] : []; }
    for (const tid of [s.turma, ...outras]) { const v = await calcularT(s, tid, db); if (v) return Object.assign(v, { _turma: tid }); }
    return null;
  }
  async function calcularT(s, tid, db) {
    const hs = await db.collection("config").doc("hoje_" + tid).get().then(x => x.exists ? x.data() : null).catch(() => null);
    const d = hoje(), h = hs || {};
    if (h.dia === d && h.iniciadaDia === d) return h.espera && !h.largadaEm ? h : null;
    // ainda não iniciada: só na janela da aula da turma (de 40 min antes até o fim do horário) e se a aula não foi finalizada hoje
    if (h.finalizadaEm && new Date(h.finalizadaEm).toLocaleDateString("sv-SE") === d) return null;
    const t = P.turma && P.turma(tid); if (!t || !t.aula || !t.aula.ini) return null;
    const agora = new Date(); if (agora.getDay() !== t.aula.dia) return null;
    const [H, M] = t.aula.ini.split(":").map(Number), ini = new Date(agora); ini.setHours(H, M, 0, 0);
    const dur = ((P.catalogo && P.catalogo.duracaoAula) || 75) * 60000;
    return agora >= ini.getTime() - 40 * 60000 && agora <= ini.getTime() + dur ? Object.assign({ antes: true }, h) : null;
  }
  const valendo = h => { const d = hoje(); return !!(h && h.dia === d && h.iniciadaDia === d && h.espera && !h.largadaEm); };

  /* ---------------- 💡 Você sabia? (fatos conferidos) ---------------- */
  const FATOS = [
    ["🏋️", "O ENIAC, um dos primeiros computadores eletrônicos (Estados Unidos, 1946), pesava cerca de 27 toneladas e ocupava uma sala inteira. Hoje, um celular faz muito mais coisa e cabe no bolso.", "img/fotos/curiosidades/eniac.webp", "O ENIAC ocupava uma sala inteira, cheia de armários com fios e válvulas.", "Foto: Exército dos Estados Unidos · Wikimedia Commons · domínio público"],
    ["🦋", "Por que um erro de programa se chama “bug” (inseto, em inglês)? Em 1947, a equipe da cientista Grace Hopper achou uma mariposa presa dentro do computador Harvard Mark II e colou o inseto no caderno de anotações.", "img/fotos/curiosidades/bug.webp", "A página do caderno com a mariposa colada. Em inglês, está escrito: “primeiro caso de bug (inseto) encontrado de verdade”.", "Foto: Naval Surface Warfare Center, Dahlgren (EUA) · Wikimedia Commons · domínio público"],
    ["⌨️", "O teclado QWERTY tem esse nome por causa das 6 primeiras letras da fileira de cima. Esse jeito de arrumar as letras foi criado para as máquinas de escrever, no século 19.", "img/fotos/curiosidades/qwerty.webp", "Máquina de escrever Remington Nº 1 (1873 a 1878): olhe a segunda fileira de teclas, Q W E R T Y.", "Foto: Daderot · Wikimedia Commons · CC0"],
    ["🖱️", "O primeiro mouse, inventado por Douglas Engelbart nos anos 1960, era uma caixinha de madeira com duas rodinhas embaixo.", "img/fotos/curiosidades/mouse.webp", "O primeiro mouse: uma caixinha de madeira com um botão vermelho e um fio.", "Foto: SRI International · Wikimedia Commons · licença CC BY-SA 3.0"],
    ["@", "O símbolo @ (arroba) foi escolhido em 1971 por Ray Tomlinson, que mandou o primeiro e-mail entre dois computadores. Ele separa o nome da pessoa do nome do provedor."],
    ["🌐", "O primeiro site da internet foi criado por Tim Berners-Lee em 1991, num laboratório na Suíça (o CERN). Ele ainda existe: info.cern.ch.", "img/fotos/curiosidades/web.webp", "O computador onde funcionou o primeiro site, exposto no CERN. O adesivo diz, em inglês: “Esta máquina é um servidor. NÃO DESLIGUE!”", "Foto: Coolcaesar · Wikimedia Commons · licença CC BY-SA 3.0"],
    ["🔢", "1 byte tem 8 bits. Cada bit é um 0 ou um 1, como uma lâmpada apagada ou acesa. Tudo no computador (fotos, músicas, textos) vira 0 e 1."],
    ["🟦", "Pixel vem do inglês “picture element”, que quer dizer elemento (pontinho) de imagem. A tela do computador é feita de milhões desses pontinhos coloridos."],
    ["🔳", "O QR Code foi inventado no Japão, em 1994, pela empresa Denso Wave, para controlar as peças nas fábricas de carros."],
    ["🇧🇷", "A internet comercial (para qualquer pessoa contratar em casa) chegou ao Brasil em 1995."],
    ["🗳️", "A urna eletrônica brasileira começou a ser usada nas eleições de 1996.", "img/fotos/curiosidades/urna.webp", "Uma urna eletrônica brasileira (modelo 2020): o eleitor digita o número e aperta CONFIRMA.", "Foto: TSE · Wikimedia Commons · domínio público"],
    ["💸", "O Pix, que manda dinheiro na hora, foi lançado pelo Banco Central do Brasil em novembro de 2020."],
    ["🌊", "Quase toda a internet que vai de um continente para outro passa por cabos no fundo do mar, e não por satélites.", "img/fotos/cabo-submarino-praia-crozet.webp", "Um cabo submarino chegando à praia: daqui, ele segue pelo fundo do mar.", "Foto: CTBTO Preparatory Commission · Wikimedia Commons · licença CC BY 2.0"],
    ["⌨️", "A barra de espaço é a maior tecla do teclado, porque é a mais usada: aparece entre todas as palavras."],
    ["💾", "O ícone de “Salvar” de muitos programas é um disquete, um jeito antigo de guardar arquivos que cabia na mão e guardava só 1,44 MB.", "img/fotos/curiosidades/disquete.webp", "Três disquetes de tamanhos diferentes. O menor (azul) guardava só 1,44 MB.", "Foto: George Chernilevsky · Wikimedia Commons · domínio público"],
    ["🤖", "Inteligência artificial aprende com exemplos: para reconhecer gatos, ela vê muitas e muitas fotos de gatos. Mas ela também erra, por isso a gente sempre confere."]
  ];

  /* ---------------- 🎮 jogos de aquecimento ---------------- */
  const PALAVRAS = ["MOUSE", "TECLADO", "MONITOR", "ARQUIVO", "PASTA", "JANELA", "INTERNET", "SENHA", "PIXEL", "BYTE", "CURSOR", "NAVEGADOR",
    "SITE", "PROGRAMA", "IMPRESSORA", "ROTEADOR", "CABO", "REDE", "DADOS", "NUVEM", "TELA", "CLIQUE", "LINK", "FOTO", "ALGORITMO", "GRAFO",
    "BLOCOS", "SALVAR", "COPIAR", "COLAR", "ABRIR", "FECHAR", "DIGITAR", "WEBCAM", "SOFTWARE", "HARDWARE", "MEMORIA", "PROCESSADOR"];
  const ARQS = [["foto-da-praia.jpg", "🖼️", "img"], ["selfie.png", "🖼️", "img"], ["desenho.jpg", "🖼️", "img"], ["meme.png", "🖼️", "img"],
    ["musica-favorita.mp3", "🎵", "mus"], ["forro.mp3", "🎵", "mus"], ["toque-do-celular.mp3", "🎵", "mus"],
    ["trabalho-de-escola.docx", "📄", "doc"], ["redacao.docx", "📄", "doc"], ["boletim.pdf", "📄", "doc"], ["receita-de-bolo.pdf", "📄", "doc"],
    ["video-da-festa.mp4", "🎬", "vid"], ["gol-do-jogo.mp4", "🎬", "vid"], ["tutorial.mp4", "🎬", "vid"]];
  const PASTAS = [["img", "🖼️ Imagens"], ["mus", "🎵 Músicas"], ["doc", "📄 Documentos"], ["vid", "🎬 Vídeos"]];
  const TECLAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").map(c => [c, c]).concat([["Enter", "Enter ↵"], [" ", "Espaço"], ["Backspace", "Backspace ⟵"]]);
  const JOGOS = {
    alvo: { nome: "🎯 Acerte o alvo", dica: "Clique no alvo antes que ele mude de lugar!" },
    palavra: { nome: "⌨️ Digite a palavra", dica: "Digite a palavra que aparece e aperte Enter." },
    arquivo: { nome: "🗂️ Arquivo na pasta certa", dica: "Arraste o arquivo para a pasta certa (ou clique no arquivo e depois na pasta). Olhe o final do nome: .jpg, .mp3, .docx…" },
    tecla: { nome: "🔤 Ache a tecla", dica: "Aperte no teclado a tecla que aparece na tela." }
  };
  const RODADA = 5;   // 5 acertos e o jogo troca sozinho (nunca o mesmo duas vezes seguidas)

  function jogos(box, ganhar) {
    let tipo = null, feitos = 0, parar = () => {};
    const recentes = { palavra: [], arquivo: [], tecla: [] };
    const novo = (lista, chave, n) => { let x, k = 0; do { x = lista[sorteio(lista.length)]; k++; } while (recentes[chave].includes(x) && k < 50); recentes[chave].push(x); if (recentes[chave].length > n) recentes[chave].shift(); return x; };
    const proximo = () => { parar(); const op = Object.keys(JOGOS).filter(k => k !== tipo); tipo = op[sorteio(op.length)]; feitos = 0; montar(); };
    const acertou = (el) => { feitos++; ganhar(PONTO, el); if (feitos >= RODADA) { setTimeout(() => { if (box.isConnected) { box.querySelector(".es-jogo").innerHTML = `<p class="es-troca">✨ Muito bem! Próximo jogo…</p>`; setTimeout(() => box.isConnected && proximo(), 900); } }, 350); return true; } return false; };
    function montar() {
      const J = JOGOS[tipo];
      box.innerHTML = `<div class="es-jogo-topo"><h3>${J.nome}</h3><span class="es-rod">${"●".repeat(feitos)}${"○".repeat(RODADA - feitos)}</span><button type="button" class="btn btn-sec btn-peq" data-es="trocar">🔀 Trocar de jogo</button></div>
        <p class="es-dica">${J.dica}</p><div class="es-jogo es-j-${tipo}"></div>`;
      box.querySelector('[data-es="trocar"]').onclick = proximo;
      const area = box.querySelector(".es-jogo"), rod = () => { const r = box.querySelector(".es-rod"); if (r) r.textContent = "●".repeat(feitos) + "○".repeat(RODADA - feitos); };
      if (tipo === "alvo") {
        const alvo = document.createElement("button"); alvo.type = "button"; alvo.className = "es-alvo"; alvo.setAttribute("aria-label", "alvo"); area.appendChild(alvo);
        let tm;
        const mover = () => { const w = area.clientWidth - 70, h = area.clientHeight - 70; alvo.style.left = Math.max(0, sorteio(Math.max(1, w))) + "px"; alvo.style.top = Math.max(0, sorteio(Math.max(1, h))) + "px";
          clearTimeout(tm); tm = setTimeout(mover, 2600); };
        alvo.onclick = () => { alvo.classList.remove("pop"); void alvo.offsetWidth; alvo.classList.add("pop"); rod(); if (!acertou(alvo)) { mover(); rod(); } };
        requestAnimationFrame(mover); parar = () => clearTimeout(tm);
      } else if (tipo === "palavra") {
        const p = novo(PALAVRAS, "palavra", 12);
        area.innerHTML = `<p class="es-palavra">${esc(p)}</p><input type="text" class="es-campo" autocomplete="off" spellcheck="false" aria-label="Digite a palavra"><p class="es-msg" aria-live="polite"></p>`;
        const inp = area.querySelector("input"), msg = area.querySelector(".es-msg"); setTimeout(() => inp.focus(), 50);
        const conf = () => { if (inp.value.trim().toUpperCase() === p) { inp.classList.add("ok"); if (!acertou(inp)) setTimeout(() => box.isConnected && montar(), 350); rod(); } };
        inp.oninput = conf;
        inp.onkeydown = e => { if (e.key === "Enter") { if (inp.value.trim().toUpperCase() !== p) { msg.textContent = "Quase! Confira letra por letra 😉"; inp.classList.add("erro"); setTimeout(() => inp.classList.remove("erro"), 400); } } };
      } else if (tipo === "arquivo") {
        const [nome, ic, cert] = novo(ARQS, "arquivo", 6), ext = nome.slice(nome.lastIndexOf("."));
        area.innerHTML = `<div class="es-arq" tabindex="0" role="button" aria-label="Arquivo ${esc(nome)}"><span class="es-arq-ic">${ic}</span><span>${esc(nome.slice(0, -ext.length))}<b>${esc(ext)}</b></span></div>
          <div class="es-pastas">${embaralha(PASTAS).map(([k, r]) => `<button type="button" class="es-pasta" data-p="${k}"><span class="es-pasta-ic">📁</span>${r}</button>`).join("")}</div>`;
        const arq = area.querySelector(".es-arq"); let pego = false;
        const soltar = alvo => { const b = alvo && alvo.closest && alvo.closest(".es-pasta"); if (!b) return;
          if (b.dataset.p === cert) { b.classList.add("ok"); arq.classList.add("dentro"); rod(); if (!acertou(b)) setTimeout(() => box.isConnected && montar(), 450); rod(); }
          else { b.classList.add("erro"); setTimeout(() => b.classList.remove("erro"), 450); P.toast && P.toast(`Não é aí: arquivo ${ext} vai em outra pasta.`); } };
        area.querySelectorAll(".es-pasta").forEach(b => b.onclick = () => { if (pego) { pego = false; arq.classList.remove("pego"); soltar(b); } });
        arq.onpointerdown = e => { if (e.button) return; e.preventDefault(); const r = arq.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top; let andou = false;
          const mv = ev => { if (!andou && Math.hypot(ev.clientX - e.clientX, ev.clientY - e.clientY) < 6) return; andou = true; arq.classList.add("arrastando");
            arq.style.left = (ev.clientX - dx) + "px"; arq.style.top = (ev.clientY - dy) + "px"; arq.style.width = r.width + "px"; };
          const up = ev => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up);
            if (!andou) return;
            arq.style.visibility = "hidden"; const sob = document.elementFromPoint(ev.clientX, ev.clientY); arq.style.visibility = "";
            arq.classList.remove("arrastando"); arq.style.left = arq.style.top = arq.style.width = ""; soltar(sob); };
          addEventListener("pointermove", mv); addEventListener("pointerup", up); };
        arq.onclick = () => { pego = !pego; arq.classList.toggle("pego", pego); };
      } else if (tipo === "tecla") {
        const [k, r] = novo(TECLAS, "tecla", 15);
        area.innerHTML = `<div class="es-tecla${r.length > 2 ? " larga" : ""}">${esc(r)}</div><p class="es-msg" aria-live="polite">Aperte essa tecla no teclado do computador.</p>`;
        const msg = area.querySelector(".es-msg");
        const ouvir = e => { if (!box.isConnected) return removeEventListener("keydown", ouvir);
          if (e.target && /input|textarea/i.test(e.target.tagName)) return;
          if (e.key === " " || e.key === "Backspace") e.preventDefault();
          const ok = k.length === 1 && k !== " " ? (e.key || "").toUpperCase() === k : e.key === k;
          if (ok) { removeEventListener("keydown", ouvir); area.querySelector(".es-tecla").classList.add("ok"); rod(); if (!acertou(area.querySelector(".es-tecla"))) setTimeout(() => box.isConnected && montar(), 350); rod(); }
          else if (e.key && e.key.length <= 9 && !["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(e.key)) { msg.textContent = `Você apertou “${e.key === " " ? "Espaço" : e.key}”. Procure a tecla da tela!`; } };
        addEventListener("keydown", ouvir); parar = () => removeEventListener("keydown", ouvir);
      }
    }
    proximo();
    return () => parar();
  }

  /* ---------------- tela do aluno ---------------- */
  let vivo = null;   // { sair } da sala aberta
  async function tela(mount, s) {
    if (vivo) vivo.sair(true);
    if (!s || !s.nuvem) { location.replace("#/apostilas"); return; }
    let h = await ativaPara(s);
    if (!h) { location.replace("#/apostilas"); return; }
    const ids = s.alunoIds, d = hoje(), nomes = (s.nomes || []).map(n => (n || "").split(" ")[0]);
    const refs = ids.map((id, i) => N().app(i).db.collection("progresso").doc(id + "_espera"));
    // pontos de hoje (cada aluno da sessão tem o seu documento; em dupla, os dois ganham juntos)
    const docs = await Promise.all(refs.map(r => r.get().then(x => x.exists ? x.data() : {}).catch(() => ({}))));
    const recordes = {}; docs.forEach(x => Object.entries(x.recordes || {}).forEach(([k, v]) => { recordes[k] = Math.max(recordes[k] || 0, v || 0); }));
    let pontos = Math.max(0, ...docs.map(x => x.dia === d ? x.pontos || 0 : 0)), bonus = Math.max(0, ...docs.map(x => x.dia === d ? x.avatarBonus || 0 : 0));
    let gravarTm = null;
    const gravar = () => { clearTimeout(gravarTm); gravarTm = setTimeout(() => refs.forEach((r, i) => r.set({ tipo: "espera", alunoId: ids[i], turma: s.turma, dia: d, pontos, avatarBonus: bonus, atualizado: Date.now() }, { merge: true }).catch(e => console.warn("espera", e))), 800); };
    const el = mount(`<section class="tela es-tela">
      <div class="es-topo"><div><h1>🎉 Parabéns, você${ids.length > 1 ? "s entraram" : " entrou"}!</h1>
        <p class="es-sub">Aguarde todos entrarem: a aula já vai começar. <b>O que você${ids.length > 1 ? "s querem" : " quer"} fazer enquanto espera?</b></p></div>
        <div class="es-placar" title="Pontos de aquecimento: entram no placar da aula"><span class="es-pts">${pontos + bonus}</span><small>pontos de aquecimento</small><i><b style="width:${pontos % 100}%"></b></i></div></div>
      <p class="es-status" aria-live="polite">${h.antes || !valendo(h) ? "⏳ Esperando o professor iniciar a aula…" : "🚦 Aula iniciada: esperando o professor dar a 🏁 largada…"}</p>
      <div class="es-cards">
        <button type="button" class="es-card" data-op="jogos"><span class="es-card-ic">🎮</span><b>Jogos de aquecimento</b><small>+${PONTO} pontos por acerto (sem limite!)</small></button>
        <button type="button" class="es-card" data-op="avatar"><span class="es-card-ic">🧑‍🎨</span><b>Montar o meu avatar</b><small>${bonus ? "✅ bônus já ganho hoje" : `+${BONUS_AVATAR} pontos ao salvar`}</small></button>
        <button type="button" class="es-card" data-op="espiar"><span class="es-card-ic">👀</span><b>Espiar a missão de hoje</b><small>o que vamos aprender</small></button>
        <button type="button" class="es-card" data-op="sabia"><span class="es-card-ic">💡</span><b>Você sabia?</b><small>curiosidades de informática</small></button>
      </div>
      <div class="painel es-palco" hidden></div>
      <p class="ajuda es-rodape">🏆 Quem entra cedo e espera no lugar já sai na frente: estes pontos entram no placar da aula. Quando o professor der a 🏁 largada, a missão abre para todos ao mesmo tempo.</p>
    </section>`);
    const palco = el.querySelector(".es-palco"), pts = el.querySelector(".es-pts"), barraP = el.querySelector(".es-placar b"), st = el.querySelector(".es-status");
    let pararJogo = null, largou = false, emAvatar = false;
    const pintar = () => { pts.textContent = pontos + bonus; barraP.style.width = (pontos % 100) + "%"; /* a barrinha enche a cada 100 pontos */ };
    const ganhar = (n, alvoEl) => {
      if (pontos >= TETO) { if (!el.querySelector(".es-teto")) palco.insertAdjacentHTML("afterbegin", `<p class="es-teto">🏆 Você chegou ao máximo de ${TETO} pontos de aquecimento! Pode continuar jogando só por diversão.</p>`); return; }
      pontos = Math.min(TETO, pontos + n); pintar(); gravar();
      if (alvoEl && alvoEl.getBoundingClientRect) { const r = alvoEl.getBoundingClientRect(), f = document.createElement("span"); f.className = "es-mais"; f.textContent = "+" + n;
        f.style.left = (r.left + r.width / 2) + "px"; f.style.top = (r.top) + "px"; document.body.appendChild(f); setTimeout(() => f.remove(), 900); }
    };
    const abrir = op => {
      if (pararJogo) { pararJogo(); pararJogo = null; }
      el.querySelectorAll(".es-card").forEach(b => b.classList.toggle("on", b.dataset.op === op));
      palco.hidden = false;
      if (op === "jogos") { const b = document.createElement("div"); palco.innerHTML = ""; palco.appendChild(b);
        // 🎮 biblioteca de jogos (js/jogos-base.js): menu do dia, tutorial animado, recorde pessoal; sem ela, os 4 jogos simples
        pararJogo = P.jogosEspera ? P.jogosEspera.abrir(b, { turma: s.turma, serie: s.serie, ganhar, recordes, eu: ids, nome: nomes.join(" e "), avatar: (P.sess.get() || {}).avatares ? P.sess.get().avatares[0] : null,
          salvarRecorde: (id, v) => refs.forEach(r => r.set({ recordes: { [id]: v } }, { merge: true }).catch(() => {})) }) : jogos(b, ganhar); }
      else if (op === "sabia") {
        let ordem = embaralha(FATOS), i = 0;
        const mostra = () => { const [ic, tx, foto, leg, cred] = ordem[i % ordem.length];
          palco.innerHTML = `<div class="es-fato"><span class="es-fato-ic">${esc(ic)}</span><p>${esc(tx)}</p></div>
            ${foto ? `<figure class="es-foto"><img src="${esc(foto)}" alt="${esc(leg)}" loading="lazy"><figcaption>${esc(leg)}<br><small>📷 ${esc(cred)}</small></figcaption></figure>` : ""}
            <div class="row-btns"><button type="button" class="btn" data-es="mais">💡 Outra curiosidade</button></div>`;
          palco.querySelector('[data-es="mais"]').onclick = () => { i++; if (i % ordem.length === 0) ordem = embaralha(FATOS); mostra(); }; };
        mostra();
      } else if (op === "espiar") espiar(palco, h);
      else if (op === "avatar") montarAvatar();
      palco.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    el.querySelectorAll(".es-card").forEach(b => b.onclick = () => abrir(b.dataset.op));

    // 🧑‍🎨 avatar sem pressa: abre o editor dentro do palco; tempo só até a largada
    async function montarAvatar() {
      if (largou) return;
      emAvatar = true; el.querySelector(".es-cards").hidden = true;
      const subMount = html => { palco.innerHTML = html; return palco.firstElementChild; };
      for (let i = 0; i < ids.length; i++) {
        const ref = N().app(i).db.collection("progresso").doc(ids[i] + "_avatar");
        let anterior = null; try { const sn = await ref.get(); if (sn.exists) anterior = sn.data().avatar || null; } catch (e) {}
        if (ids.length > 1) P.toast && P.toast(`🧑‍🎨 Vez de ${nomes[i]} montar o avatar!`);
        const sexo = P.avatar.garantirUm ? await P.avatar.garantirUm(i, ids[i], String(nomes[i] || "").split(" ")[0], s.turma) : null;   // 👦👧 obrigatório, uma vez só
        const r = await P.avatar.editor(subMount, { nome: nomes[i], anterior, sexo, segundos: 3600, espera: { parar: () => largou } });
        if (r && r.salvo) {
          try { await ref.set({ alunoId: ids[i], turma: s.turma, tipo: "avatar", usadoEm: d, avatar: r.avatar, atualizado: Date.now() }, { merge: true }); } catch (e) { console.warn("avatar", e); }
          const ss = P.sess.get(); if (ss) { const avs = (ss.avatares || ids.map(() => null)).slice(); avs[i] = r.avatar; P.sess.set(Object.assign({}, ss, { avatares: avs })); }
        }
      }
      emAvatar = false;
      if (!bonus) { bonus = BONUS_AVATAR; pintar(); gravar(); P.toast && P.toast(`🧑‍🎨 Avatar salvo! +${BONUS_AVATAR} pontos.`); }
      if (largou || !el.isConnected) return;
      el.querySelector(".es-cards").hidden = false;
      el.querySelector('[data-op="avatar"] small').textContent = "✅ bônus já ganho hoje";
      palco.hidden = true; palco.innerHTML = ""; el.querySelectorAll(".es-card").forEach(b => b.classList.remove("on"));
    }

    // 🏁 largada (ou o professor iniciou sem sala de espera): fecha o avatar de quem não montou e vai para a missão
    async function sair(silencioso) {
      if (largou) return; largou = true; vivo = null;
      if (pararJogo) pararJogo(); clearInterval(iv); unsub && unsub(); clearTimeout(gravarTm);
      if (pontos || bonus) refs.forEach((r, i) => r.set({ tipo: "espera", alunoId: ids[i], turma: s.turma, dia: d, pontos, avatarBonus: bonus, atualizado: Date.now() }, { merge: true }).catch(() => {}));
      if (silencioso === true) return;
      // quem não montou: fica com o da última vez (ou um sorteado com o uniforme, na primeira vez); o avatar trava até o fim da aula
      if (emAvatar) await new Promise(r => setTimeout(r, 600));
      await Promise.all(ids.map(async (id, i) => { const ref = N().app(i).db.collection("progresso").doc(id + "_avatar");
        try { const sn = await ref.get(), x = sn.exists ? sn.data() : {};
          await ref.set(Object.assign({ alunoId: id, turma: s.turma, tipo: "avatar", usadoEm: d }, x.avatar ? {} : { avatar: P.avatar.sortear(x.sexo), atualizado: Date.now() }), { merge: true }); } catch (e) {} }));
      const hh = await N().app(0).db.collection("config").doc("hoje_" + ((h && h._turma) || s.turma)).get().then(x => x.exists ? x.data() : {}).catch(() => ({}));
      if (P.trava && P.trava.limpar) P.trava.limpar();
      memo = { k: "", em: 0, v: null };
      if (hh.dia === d && hh.iniciadaDia === d && hh.mid) { try { sessionStorage.setItem("portalJK:hoje", hh.aid + "/" + hh.mid); sessionStorage.setItem("portalJK:hojeIr:" + hh.dia + ":" + hh.mid, 1); } catch (e) {}
        P.toast && P.toast("🏁 Valendo! A aula começou."); location.hash = "#/missao/" + hh.aid + "/" + hh.mid; }
      else location.hash = "#/apostilas";
    }
    vivo = { sair };
    // ouve a missão de hoje da turma: quando o professor der a largada (ou iniciar sem sala de espera), a sala fecha sozinha
    let unsub = null;
    const tAula = (h && h._turma) || s.turma;   // 🏫 a turma em que o aluno assiste à aula (a dele ou a outra turma)
    try { unsub = N().app(0).db.collection("config").doc("hoje_" + tAula).onSnapshot(sn => { const x = sn.exists ? sn.data() : {};
      const iniHoje = x.dia === d && x.iniciadaDia === d;
      if (iniHoje && !valendo(x)) return sair();
      if (iniHoje) { h = Object.assign(x, { _turma: tAula }); st.textContent = "🚦 Aula iniciada: esperando o professor dar a 🏁 largada…"; } }, () => {}); } catch (e) {}
    // e, a cada 20 s, confere se ainda está na janela da aula (sem início, a sala não fica aberta para sempre)
    const iv = setInterval(async () => { if (!el.isConnected) { if (!largou) sair(true); return clearInterval(iv); }
      memo = { k: "", em: 0, v: null }; const v = await ativaPara(P.sess.get()); if (!v) sair(); }, 20000);
    addEventListener("hashchange", function fora() { if (!/^#\/espera/.test(location.hash)) { removeEventListener("hashchange", fora); if (!largou) { largou = true; if (pararJogo) pararJogo(); clearInterval(iv); unsub && unsub(); } } });
  }

  async function espiar(palco, h) {
    palco.innerHTML = `<p>Carregando…</p>`;
    if (!h || !h.mid || !h.aid) { palco.innerHTML = `<p class="es-fato">👀 O professor ainda não escolheu a missão de hoje. Volte aqui daqui a pouquinho!</p>`; return; }
    try { await P.carregarApostila(h.aid); } catch (e) {}
    const C = P.conteudo && P.conteudo[h.aid], m = C && C.missoes.find(x => x.id === h.mid);
    if (!m) { palco.innerHTML = `<p class="es-fato">👀 ${esc(h.titulo || "Missão de hoje")}</p>`; return; }
    const md = x => esc(String(x || "").replace(/<[^>]+>/g, "").replace(/\*\*/g, ""));
    palco.innerHTML = `<div class="es-espiar"><h3>${esc(m.icone || "📌")} ${esc(m.titulo)}</h3>
      ${m.objetivo ? `<p><b>🎯 Hoje você vai aprender a</b> ${md(m.objetivo)}</p>` : ""}
      ${m.ondeUso && (m.ondeUso.itens || []).length ? `<h4>🌎 Onde eu uso isso?</h4><ul>${m.ondeUso.itens.map(x => `<li>${typeof x === "string" ? x : md(x.texto || "")}</li>`).join("")}</ul>` : ""}
      <p class="ajuda">👀 Só para espiar: as tarefas abrem na largada.</p></div>`;
  }

  /* ---------------- quadro do professor (aba 🎤 Aula) ---------------- */
  function painel(depoisDe, ctx) {
    const { t, C, ap, rotulo } = ctx, db = N().app(0).db, hRef = db.collection("config").doc("hoje_" + t.id);
    const box = document.createElement("div"); box.className = "painel es-prof"; box.hidden = true; depoisDe.after(box);
    let h = {}, alunos = [], prog = [], desligar = null;
    const fmt = ms => new Date(ms).toTimeString().slice(0, 5);
    const nome = a => esc((a.nome || "").split(" ").slice(0, 2).join(" "));
    /* 🏆 RECORDES DA TURMA E DA SÉRIE (20/11/2026, "pode fazer o recorde… como você julgar necessário"):
       os alunos não leem o progresso dos colegas, então o painel do professor (aberto na aula) junta o recorde pessoal de
       cada um e publica o melhor de cada jogo em config/recordes_<turma> e config/recordes_s<série> (só 1º nome, como o pódio). */
    let recPub = "";
    const publicarRecordes = async () => {
      const nomeDe = {}; alunos.forEach(a => { nomeDe[a.id] = (a.nome || "").split(" ")[0]; });
      const melhor = {};
      prog.forEach(p => { if (p.tipo !== "espera" || !p.recordes || !nomeDe[p.alunoId]) return;
        Object.entries(p.recordes).forEach(([j, v]) => { v = +v || 0; if (v > 0 && (!melhor[j] || v > melhor[j].pts)) melhor[j] = { pts: v, nome: nomeDe[p.alunoId], id: p.alunoId }; }); });
      const chave = JSON.stringify(melhor); if (!Object.keys(melhor).length || chave === recPub) return; recPub = chave;
      try {
        const rT = db.collection("config").doc("recordes_" + t.id), sT = (await rT.get()).data() || {}, jT = { ...(sT.jogos || {}) };
        Object.entries(melhor).forEach(([j, r]) => { if (!jT[j] || r.pts > jT[j].pts) jT[j] = { ...r, em: Date.now() }; });
        await rT.set({ jogos: jT, atualizado: Date.now() });
        const serie = (t.serie && t.serie.id) || String(t.id).replace(/\D/g, ""), rS = db.collection("config").doc("recordes_s" + serie), sS = (await rS.get()).data() || {}, jS = { ...(sS.jogos || {}) };
        Object.entries(jT).forEach(([j, r]) => { if (!jS[j] || r.pts > jS[j].pts) jS[j] = { ...r, turma: rotulo || t.id }; });
        await rS.set({ jogos: jS, atualizado: Date.now() });
      } catch (e) { recPub = ""; console.warn("recordes", e); }
    };
    const desenhar = () => {
      if (!box.isConnected) { desligar && desligar(); return; }
      const d = hoje(), iniHoje = h.dia === d && h.iniciadaDia === d;
      if (!iniHoje || !h.espera) { box.hidden = true; return; }
      box.hidden = false;
      if (h.largadaEm) { box.className = "painel es-prof dada"; box.innerHTML = `<p>🏁 <b>Largada dada às ${fmt(h.largadaEm)}.</b> As tarefas estão abertas para a turma.</p>`; return; }
      const ent = new Set(prog.filter(p => p.tipo === "entrada" && p.dias && p.dias[d]).map(p => p.alunoId));
      const pe = {}; prog.forEach(p => { if (p.tipo === "espera" && p.dia === d) pe[p.alunoId] = Math.min(TETO, p.pontos || 0) + Math.min(BONUS_AVATAR, p.avatarBonus || 0); });
      const dentro = alunos.filter(a => ent.has(a.id)), fora = alunos.filter(a => !ent.has(a.id) && !a.casa);
      const vid = (() => { const v = ((P.videosMissao || {})[ap.base || ap.id] || {})[h.mid]; const l = (Array.isArray(v) ? v : [v]).filter(x => x && /^[\w-]{11}$/.test(x.id || x)); return l.length ? (l[0].id || l[0]) : null; })();
      const mm = C.missoes.find(m => m.id === h.mid);
      box.className = "painel es-prof";
      box.innerHTML = `<div class="es-prof-topo"><h2>🚦 Sala de espera · ${esc(rotulo)}</h2><span class="es-prof-n"><b>${dentro.length}</b> de ${dentro.length + fora.length} já entraram</span></div>
        <div class="es-prof-listas">
          <div><p class="es-prof-t">✅ Já entraram (${dentro.length})</p><p class="es-chips">${dentro.length ? dentro.map(a => `<span class="es-chip ok">${nome(a)}${pe[a.id] ? ` <small>${pe[a.id]} pts</small>` : ""}</span>`).join("") : `<span class="ajuda">ninguém ainda</span>`}</p></div>
          <div><p class="es-prof-t">⏳ Ainda não entraram (${fora.length})</p><p class="es-chips">${fora.length ? fora.map(a => `<span class="es-chip">${nome(a)}</span>`).join("") : `<span class="ajuda">todo mundo entrou 🎉</span>`}</p></div></div>
        ${(() => { const JE = P.jogosEspera; if (!JE) return ""; const lib = JE.liberados(), prox = JE.proximos();
          return `<details class="es-prof-jogos"><summary>🎮 Jogos da Sala de espera: <b>${lib.length}</b> liberados${prox[0] ? ` · próximo: ${esc(prox[0].ic + " " + prox[0].nome)} em ${prox[0].estreia.slice(8, 10)}/${prox[0].estreia.slice(5, 7)}/${prox[0].estreia.slice(0, 4)}` : ""}</summary>
            <p class="ajuda">Os jogos estreiam sozinhos, pelo calendário. Se quiser, solte um antes da hora:</p>
            <p class="es-chips">${prox.map(j => `<button type="button" class="btn btn-sec btn-peq" data-lib="${esc(j.id)}" title="Estreia prevista: ${j.estreia.split("-").reverse().join("/")}">${esc(j.ic + " " + j.nome)} · ${j.estreia.slice(8, 10)}/${j.estreia.slice(5, 7)} → 🔓 liberar agora</button>`).join("") || "todos já estão liberados 🎉"}</p></details>`; })()}
        <div class="es-prof-acao">${P.aulaAoVivo ? `<button type="button" class="btn btn-grande es-aovivo" data-m="video" ${vid ? "" : "disabled title=\"Esta missão ainda não tem vídeo\""}>🎬 Começar pelo vídeo</button><button type="button" class="btn btn-grande es-aovivo" data-m="leitura">📖 Começar pela leitura</button>` : ""}<button type="button" class="btn btn-grande btn-ok es-largada">🏁 Dar a largada</button>
          <p class="ajuda">🎬 e 📖 aparecem em todas as telas ao mesmo tempo; ao fechar, todos voltam para cá. A 🏁 largada abre as tarefas para todos juntos (cada um no seu ritmo). Quem chegar depois da largada entra direto na missão.</p></div>`;
      box.querySelectorAll(".es-aovivo").forEach(b => b.onclick = () => P.aulaAoVivo(t, b.dataset.m));
      box.querySelectorAll("[data-lib]").forEach(b => b.onclick = async () => { b.disabled = true;
        try { const g = db.collection("config").doc("geral"), sn = await g.get(), at = (sn.exists && sn.data().jogosLiberados) || [];
          await g.set({ jogosLiberados: [...new Set([...at, b.dataset.lib])] }, { merge: true }); b.textContent = "✅ liberado"; P.toast && P.toast("🎮 Jogo liberado! Os alunos veem na próxima vez que abrirem os jogos."); }
        catch (e) { b.disabled = false; P.toast && P.toast("Não foi possível liberar: " + (e.message || e)); } });
      box.querySelector(".es-largada").onclick = async ev => {
        const b = ev.currentTarget; b.disabled = true; b.textContent = "🏁 Valendo!";
        try { await hRef.set({ largadaEm: Date.now() }, { merge: true });   // 23/11/2026 (pedido do professor): a largada NÃO abre mais o vídeo; o vídeo é antes, pela Aula ao vivo
          if (P.palco && P.palco.aberto()) P.palco.aberto().fechar(true);
          P.toast && P.toast("🏁 Largada! A turma começou junta.");
        } catch (e) { b.disabled = false; b.textContent = "🏁 Dar a largada"; P.toast && P.toast("Não foi possível dar a largada: " + (e.message || e)); }
      };
    };
    (async () => {
      try { const pt = await ctx.participantes(); alunos = pt.alunos;
        const uP = ctx.ouvirProg(pt.turmasProg, p => { prog = p; desenhar(); publicarRecordes(); }, () => {});
        const uH = hRef.onSnapshot(sn => { h = sn.exists ? sn.data() : {}; desenhar(); }, () => {});
        desligar = () => { try { uP(); uH(); } catch (e) {} };
        const iv = setInterval(() => { if (!box.isConnected) { clearInterval(iv); desligar(); } }, 3000);
      } catch (e) { console.warn("espera painel", e); }
    })();
  }

  P.espera = { ativaPara, tela, painel, _jogos: jogos, FATOS };
})();

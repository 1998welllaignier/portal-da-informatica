/* ============================================================
   🤖 ROBÔ PADRÃO POR TIPO DE TAREFA — Prof. Welington Laignier (18/11/2026)
   ------------------------------------------------------------
   Toda tarefa prática ganha o "Me ajuda, robô!". Quando a tarefa
   não tem um robô próprio (campo "robo"), o portal usa o robô
   padrão do tipo dela: o Bit mostra O MÉTODO com um exemplo
   DIFERENTE do pedido (nunca a resposta) e termina com
   "Agora é a sua vez". Robô próprio da tarefa sempre vale mais.
   ============================================================ */
(function () {
  "use strict";
  const P = window.PORTAL = window.PORTAL || {};
  const L = (fala, linha, marca, espera) => ({ fala, painel: 0, linha, marca: !!marca, espera: espera || 1900 });
  const T = (fala, titulo) => ({ fala, painel: 0, titulo });
  const F = (fala, espera) => ({ fala, painel: null, espera: espera || 2600 });
  const R = (paineis, passos, fim) => ({ paineis, passos, fim: fim || "Agora é a sua vez: faça o seu, do mesmo jeito. 💪" });
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const PADRAO = {
    memoria: () => R(["🧠 Jogo da memória de OUTRO assunto: animais"], [
      T("Olha o meu jeito de jogar a memória (com <b>outro</b> assunto):", "Memória"),
      L("1. Viro <b>uma</b> carta: apareceu o termo “<b>Gato</b>”.", "1. Virar uma carta"),
      L("2. Viro outra procurando o significado dele. Saiu “voa e tem penas”: não combina, as duas voltam.", "2. Não combinou: as duas voltam"),
      L("3. Eu <b>guardo na cabeça</b> onde estava cada carta que vi.", "3. Lembrar onde estava", true),
      L("4. Quando acho “mia e tem bigode”, viro o Gato de novo: <b>par certo</b>, as duas ficam abertas!", "4. Par certo fica aberto", true, 2600),
      F("Dica: se não lembra o significado, abra o 📖 O que significa? da missão.")], "Agora é a sua vez: vire as cartas e ache os pares. 💪"),
    caca: () => R(["🔎 Caça-palavras de OUTRAS palavras"], [
      T("Olha o meu jeito de achar uma palavra (vou procurar <b>BOLA</b>, que não está no seu):", "Caça-palavras"),
      L("1. Procuro a <b>primeira letra</b>, o B, e olho as letras do lado (→) e de baixo (↓).", "1. Achar a primeira letra"),
      L("2. Se forma B-O-L-A, achei! Clico no <b>B</b> (primeira letra)…", "2. Clicar na primeira letra", true),
      L("3. …e depois no <b>A</b> (última letra). A palavra fica verde.", "3. Clicar na última letra", true, 2600),
      F("As palavras estão só para a direita (→) ou para baixo (↓), sem acento.")], "Agora é a sua vez: ache as palavras da lista. 💪"),
    blocos: at => at.inicio && (at.inicio || []).length
      ? R(["🐞 Como eu conserto um programa"], [
          T("Olha o meu jeito de consertar um programa que já vem pronto:", "Depurar"),
          L("1. Aperto <b>▶️ Rodar o programa</b> e leio o que apareceu na 📺 Tela do programa.", "1. Rodar e ler a tela"),
          L("2. Abro <b>🎯 O que o programa precisa mostrar</b> e comparo linha por linha.", "2. Comparar com o 🎯"),
          L("3. Acho a <b>primeira linha diferente</b>: o bloco que fez essa linha é o suspeito.", "3. Achar o bloco suspeito", true),
          L("4. Mudo <b>só</b> esse bloco (o número, o texto ou a ordem) e rodo de novo.", "4. Mudar um bloco e rodar de novo", true, 2600),
          F("Se ainda não ficou igual, repito: rodar, comparar, mudar um bloco. Isso é depuração!")],
          "Agora é a sua vez: rode, compare com o 🎯 e mude um bloco de cada vez. 💪")
      : R(["🧱 Como eu monto um programa"], [
          T("Olha o meu jeito de montar um programa com blocos:", "Montar"),
          L("1. Leio o enunciado e abro <b>🎯 O que o programa precisa mostrar</b>.", "1. Ler o objetivo"),
          L("2. Abro a gaveta certa (por exemplo 📺 Mostrar) e <b>arrasto</b> o bloco para a área branca.", "2. Arrastar o bloco"),
          L("3. Encaixo os blocos <b>um embaixo do outro</b>, até ouvir o “clique” e eles grudarem.", "3. Encaixar em ordem", true),
          L("4. Aperto <b>▶️ Rodar o programa</b> e comparo a tela com o 🎯.", "4. Rodar e comparar", true, 2600),
          F("O computador faz os blocos de cima para baixo. Se algo saiu fora de ordem, troco a posição dos blocos.")],
          "Agora é a sua vez: monte o seu programa e rode para conferir. 💪"),
    lista_ops: () => R(["📋 Outra lista: MATERIAL = 1 lápis · 2 borracha · 3 régua"], [
      T("Olha como eu leio <b>outra</b> lista. O número do lado é a <b>posição</b> (a primeira é a 1):", "MATERIAL"),
      L("“Qual item está na posição 2?” Olho o número 2: <b>borracha</b>.", "posição 2 → borracha", true),
      L("<b>Inserir</b> “cola” no fim: ela entra na próxima posição, a 4.", "1 lápis · 2 borracha · 3 régua · 4 cola"),
      L("<b>Remover</b> a borracha: os itens de baixo sobem uma posição.", "1 lápis · 2 régua · 3 cola", true, 2600)],
      "Agora é a sua vez: olhe o número da posição em cada passo. 💪"),
    sequencial: () => R(["🔎 Procurando um por um: o 5 em [2, 7, 5, 9]"], [
      T("Olha como eu procuro o <b>5</b> numa lista <b>diferente</b>, olhando um por um desde o começo:", "Procurar o 5"),
      L("1ª carta: 2. Não é.", "1ª → 2"), L("2ª carta: 7. Não é.", "2ª → 7"),
      L("3ª carta: 5. Achei! Olhei 3 cartas: são 3 comparações.", "3ª → 5 ✔ (3 comparações)", true, 2600)],
      "Agora é a sua vez: vire uma carta de cada vez, na ordem, e conte. 💪"),
    busca_binaria: () => R(["🔎 Pelo meio: o 3 em [1, 3, 5, 7, 9]"], [
      T("Olha com <b>outra</b> lista em ordem. Procuro o 3. Meio = (primeira + última posição) ÷ 2, sem a vírgula:", "Procurar o 3"),
      L("Posições 1 a 5: meio = 3 → número 5. O 3 é menor: jogo fora da posição 3 em diante.", "1ª: meio 3 → 5 · o 3 está antes"),
      L("Posições 1 a 2: meio = 1 → número 1. O 3 é maior: sobra a posição 2.", "2ª: meio 1 → 1 · o 3 está depois"),
      L("Posição 2: é o 3. Achei em 3 tentativas!", "3ª: posição 2 → 3 ✔", true, 2600)],
      "Agora é a sua vez: comece sempre pelo meio do que sobrou. 💪"),
    bolha: () => R(["🫧 Outra lista: [4, 2, 3]"], [
      T("Olha com <b>outra</b> lista, uma passada por vez. Pergunto: “o da esquerda é maior?”", "1ª passada"),
      L("4 e 2: sim → <b>trocar</b>.", "4 e 2 → trocar → [2, 4, 3]"),
      L("4 e 3: sim → <b>trocar</b>. O maior (4) chegou ao fim!", "4 e 3 → trocar → [2, 3, 4]", true),
      L("2ª passada: 2 e 3 → manter; 3 e 4 → manter. Pronto!", "[2, 3, 4] ✔", true, 2600)],
      "Agora é a sua vez: em cada par, o da esquerda é maior? Então troque. 💪"),
    grafo: () => R(["🗺️ Outro grafo: A —2— B —2— D e A —5— D"], [
      T("Olha como eu acho o caminho mais curto de A até D num grafo <b>diferente</b>:", "A → D"),
      L("Por B: 2 + 2 = <b>4</b>.", "A → B → D = 4"), L("Direto: <b>5</b>.", "A → D = 5"),
      L("O mais curto é o de <b>menor soma</b>: por B. Clico em A, depois B, depois D.", "Clicar: A → B → D ✔", true, 2600)],
      "Agora é a sua vez: some os caminhos do seu grafo e clique no de menor soma. 💪"),
    grafo_montar: () => R(["🔗 Ligando lugares de outro mapa"], [
      T("Olha como eu ligo um grafo <b>diferente</b> seguindo a tabela: Sala – Pátio (2) e Pátio – Cantina (1).", "Seguir a tabela"),
      L("Linha 1: clico em <b>Sala</b> e depois em <b>Pátio</b>.", "Sala – Pátio (2) ✔"),
      L("Linha 2: clico em <b>Pátio</b> e depois em <b>Cantina</b>.", "Pátio – Cantina (1) ✔", true, 2600)],
      "Agora é a sua vez: siga a tabela de cima para baixo, uma ligação de cada vez. 💪"),
    arvore: () => R(["🌳 Outra árvore: Escola › (Notas · Fotos › festa.jpg)"], [
      T("Olha como eu leio uma árvore <b>diferente</b>:", "Escola"),
      L("A <b>raiz</b> é o começo de tudo, lá em cima: Escola.", "raiz → Escola"),
      L("As <b>folhas</b> são o fim, que não se divide mais: Notas e festa.jpg.", "folhas → Notas, festa.jpg (2)"),
      L("O <b>caminho</b> vai da raiz até a folha: Escola › Fotos › festa.jpg.", "caminho → Escola › Fotos › festa.jpg", true, 2600),
      F("Numa árvore de decisão é igual: as perguntas ❓ dividem em Sim e Não, e as folhas são as respostas.")],
      "Agora é a sua vez: ache a raiz, as folhas e o caminho na sua árvore. 💪"),
    rota: () => R(["➡️ Outra ordem: fazer um sanduíche"], [
      T("Olha como eu monto a ordem de <b>outra</b> coisa. Pergunto: “o que tem que acontecer primeiro?”", "Sanduíche"),
      L("Clico no que vem primeiro.", "1. Pegar o pão"), L("Depois, o que só pode vir em seguida.", "2. Abrir o pão"),
      L("E assim por diante, até o fim.", "3. Colocar o recheio · 4. Fechar o pão", true, 2600)],
      "Agora é a sua vez: clique nas etapas na ordem em que elas acontecem. 💪"),
    mensagens: () => R(["💬 Como eu decido cada mensagem"], [
      T("Olha o meu jeito: eu leio a mensagem <b>inteira</b>, devagar, antes de clicar.", "Ler com calma"),
      L("1. Leio o enunciado da tarefa: ele diz qual pergunta fazer (é golpe? é respeito? é confiável?).", "1. Qual é a pergunta?"),
      L("2. Procuro as pistas: quem escreveu, se tem pressa, prêmio, link estranho, ofensa…", "2. Procurar as pistas"),
      L("3. Só então escolho a resposta. Se errar, leio o porquê e tento de novo.", "3. Escolher e conferir", true, 2600)],
      "Agora é a sua vez: uma mensagem de cada vez, com calma. 💪"),
    sinais: () => R(["☑️ Como eu marco os itens"], [
      T("Nesta tarefa pode haver <b>mais de um</b> item certo. Olha o meu jeito:", "Marcar todos"),
      L("Leio a situação inteira primeiro.", "1. Ler a situação"),
      L("Para cada item, pergunto: “isso aparece (ou vale) aqui?”. Se sim, marco.", "2. Um item de cada vez"),
      L("Se não aparece, deixo sem marcar. Cuidado com os itens que parecem certos mas não estão no texto!", "3. Não marcar o que não aparece", true, 2600)],
      "Agora é a sua vez: confira item por item. 💪"),
    explorador_pastas: () => R(["📂 Como eu escolho a pasta"], [
      T("Olha como eu descubro a pasta de <b>outros</b> arquivos: olho o final do nome, depois do ponto (a extensão).", "A extensão manda"),
      L("passeio.jpg → é foto → Fotos.", "passeio.jpg → 🖼️ Fotos"),
      L("musica.mp3 → é música → Músicas.", "musica.mp3 → 🎵 Músicas", true, 2600)],
      "Agora é a sua vez: olhe a extensão e guarde na pasta certa. 💪"),
    duplo_clique: () => R(["🖱️ O duplo clique"], [
      T("Olha como eu abro uma pasta:", "Duplo clique"),
      L("Levo a setinha até a pasta.", "1. Setinha em cima"),
      L("Aperto o botão esquerdo duas vezes, <b>bem rapidinho</b>: tec-tec!", "2. Clique-clique rápido", true, 2600)],
      "Agora é a sua vez! 💪"),
    baloes: () => R(["🎈 Como eu uso o mouse"], [
      T("Movo o mouse devagar e vejo a setinha andar.", "Mouse"),
      L("Paro com a setinha em cima do balão.", "1. Setinha no balão"),
      L("Aperto e solto o botão esquerdo: estourou!", "2. Clique", true, 2600)],
      "Agora é a sua vez! 💪"),
    classificar: at => at.modo === "tabela" ? R(["📋 Como eu respondo cada linha"], [
      T("Olha o meu jeito de responder uma tabela linha por linha:", "Uma linha de cada vez"),
      L("1. Leio o que cada letra quer dizer (ela aparece do lado de cada botão).", "1. Entender as letras"),
      L("2. Leio a primeira linha com calma e penso na resposta antes de clicar.", "2. Ler a linha inteira"),
      L("3. Clico na letra certa e passo para a próxima linha.", "3. Clicar e seguir", true),
      L("4. No fim, clico em Verificar. Se alguma ficou errada, leio o porquê e mudo só ela.", "4. Verificar e corrigir", true, 2600)],
      "Agora é a sua vez: uma linha de cada vez. 💪") : R(["🗂️ Como eu separo nas caixas"], [
      T("Olha o meu jeito de separar os itens nas caixas:", "Uma caixa para cada ideia"),
      L("1. Leio o nome <b>e a frase</b> embaixo de cada caixa: ela diz o que entra ali.", "1. Ler o que cada caixa aceita"),
      L("2. Pego <b>um item de cada vez</b> e pergunto: “qual frase combina com ele?”", "2. Um item de cada vez"),
      L("3. Arrasto (ou clico no item e depois na caixa). Se ficar em dúvida, deixo para o fim.", "3. Arrastar para a caixa", true),
      L("4. Clico em <b>Verificar</b>. Se algum ficou errado, leio o porquê e mudo só ele.", "4. Verificar e corrigir", true, 2600)],
      "Agora é a sua vez: um item de cada vez, olhando a frase de cada caixa. 💪"),
    ligar: () => R(["🔗 Como eu ligo termo e significado"], [
      T("Olha o meu jeito de ligar cada termo ao significado:", "Termo ↔ significado"),
      L("1. Começo pelo termo que eu <b>tenho mais certeza</b>.", "1. O mais fácil primeiro"),
      L("2. Leio <b>todos</b> os significados e procuro a palavra que combina (por exemplo: “bug” combina com “erro”).", "2. Procurar a palavra que combina"),
      L("3. Clico no termo e depois no significado. Cada acerto deixa menos opções para os outros!", "3. Clicar nos dois", true, 2600)],
      "Agora é a sua vez: comece pelo que você tem certeza. 💪"),
    ordenar: () => R(["🔢 Como eu coloco em ordem"], [
      T("Olha o meu jeito de pôr itens em ordem:", "Achar o primeiro"),
      L("1. Leio <b>todos</b> os itens antes de mexer.", "1. Ler tudo"),
      L("2. Pergunto: “qual tem que acontecer (ou vir) <b>primeiro</b>?” e levo para o topo.", "2. O primeiro vai para o topo"),
      L("3. Depois: “qual só pode vir depois desse?”, e assim por diante.", "3. Um depois do outro", true),
      L("4. Releio de cima para baixo: a história faz sentido? Então clico em Verificar.", "4. Reler e verificar", true, 2600)],
      "Agora é a sua vez: ache o primeiro e siga em frente. 💪"),
    sim_bolha: () => PADRAO.bolha(),
    sim_adivinhe: () => R(["🎯 Chutando o meio: número de 1 a 20"], [
      T("Olha como eu jogo com <b>outro</b> número, de 1 a 20. Chuto sempre o <b>meio</b>: (começo + fim) ÷ 2.", "De 1 a 20"),
      L("(1 + 20) ÷ 2 = 10,5 → chuto 10. “É maior.” Sobrou de 11 a 20.", "10 → maior · 11 a 20"),
      L("(11 + 20) ÷ 2 = 15,5 → chuto 15. “É menor.” Sobrou de 11 a 14.", "15 → menor · 11 a 14"),
      L("(11 + 14) ÷ 2 = 12,5 → chuto 12. “Acertou!”", "12 → acertou ✔", true, 2600),
      F("Nunca chuto um por um: cada chute no meio joga fora metade do que sobrou.")],
      "Agora é a sua vez: olhe a faixa “Pode ser de … a …” e chute o meio. 💪"),
    cesar: () => R(["🔐 Outra palavra: LUA com a chave 3"], [
      T("Olha como eu cifro <b>outra</b> palavra: cada letra anda 3 casas no alfabeto.", "LUA (chave 3)"),
      L("L → M, N, <b>O</b>.", "L → O"), L("U → V, W, <b>X</b>.", "U → X"),
      L("A → B, C, <b>D</b>. LUA vira <b>OXD</b>!", "LUA → OXD ✔", true),
      F("Para decifrar, faço o contrário: cada letra volta as casas da chave.")],
      "Agora é a sua vez: use a tira para trocar cada letra. 💪"),
    sim_cesar: () => R(["🔐 Como eu acho a chave"], [
      T("Olha como eu decifro uma mensagem <b>diferente</b>: “IRJR” (fogo, com a chave 3).", "Mensagem: IRJR"),
      L("Chave 1: HQIQ. Não forma palavra.", "chave 1 → HQIQ ✖"),
      L("Chave 2: GPHP. Ainda não.", "chave 2 → GPHP ✖"),
      L("Chave 3: FOGO. Formou uma palavra! A chave é 3.", "chave 3 → FOGO ✔", true, 2600),
      F("Testar chave por chave até achar a mensagem é o ataque de força bruta.")],
      "Agora é a sua vez: mude a chave com as setas até a mensagem fazer sentido. 💪"),
    senha: () => R(["🔐 Montando uma senha de mentira"], [
      T("Olha como eu monto uma senha <b>inventada</b> (não é de ninguém):", "Senha de treino"),
      L("Começo com uma palavra que eu lembro: pipa.", "pipa"),
      L("Ponho maiúscula e mais letras: PipaAzul.", "PipaAzul"),
      L("Junto números e símbolo: PipaAzul#58. Forte!", "PipaAzul#58 ✔", true, 2600)],
      "Agora é a sua vez: invente uma senha de mentira e complete a lista. 💪"),
    pintura: () => R(["🎨 Outro algoritmo: 3 figuras · SE for a 2ª, pinte"], [
      T("Olha como eu sigo um algoritmo <b>diferente</b>: leio a regra toda e olho uma figura de cada vez.", "Regra: SE for a 2ª, pinte"),
      L("1ª figura: é a 2ª? Não → branca.", "1ª → ⬜"), L("2ª figura: é a 2ª? Sim → preta.", "2ª → ⬛", true),
      L("3ª figura: é a 2ª? Não → branca.", "3ª → ⬜", false, 2600)],
      "Agora é a sua vez: leia a sua regra e pergunte para cada figura. 💪")
  };
  // tipos que já têm um ajudante dentro (o Bit do simulador, do cabo e do teclado) ou que são feitos no computador de verdade
  P.roboPadrao = at => (at && !at.robo && PADRAO[at.tipo]) ? PADRAO[at.tipo](at) : null;
})();

/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-7ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "A viagem do pedido: você abriu um site",
        enunciado: "<p>Você digitou <strong>www.escola.com.br</strong> no navegador. Clique nas etapas <strong>na ordem</strong> da viagem dos dados.</p>",
        etapas: [
          { ic: "🧭", t: "O navegador monta o pedido (HTTP)" },
          { ic: "📦", t: "O pedido é dividido em pacotes", dica: "Antes de viajar, os dados viram pacotes." },
          { ic: "📶", t: "O Wi-Fi leva os pacotes ao roteador" },
          { ic: "🏢", t: "O provedor manda para a internet" },
          { ic: "🖥️", t: "O servidor do site recebe e responde" },
          { ic: "📄", t: "Os pacotes voltam e o site aparece", dica: "Essa é a última etapa." }],
        okMsg: "Viagem completa! Tudo isso acontece em menos de 1 segundo. ⚡",
        explicacao: "Os dados viajam em <strong>pacotes</strong>, seguindo <strong>protocolos</strong> (como TCP e HTTP), passando pelo <strong>roteador</strong> e pelo <strong>provedor</strong> até o <strong>servidor</strong>." },
      { tipo: "mensagens", titulo: "Cadeado ou perigo? Olhe o endereço", app: "🌐 Barra de endereços",
        botoes: [{ id: "S", rot: "🔒 Conexão segura" }, { id: "N", rot: "⚠️ Não segura" }],
        enunciado: "<p>Olhe o começo de cada endereço. <strong>https</strong> (com S) protege os dados no caminho.</p>",
        itens: [
          { de: "", t: "https://www.gov.br", c: "S" },
          { de: "", t: "http://promocao-celular-gratis.net", c: "N", why: "Sem o S: os dados viajam sem proteção." },
          { de: "", t: "https://pt.wikipedia.org", c: "S" },
          { de: "", t: "http://login-banco-atualizar.com", c: "N", why: "Sem https e com nome estranho: perigo!" }],
        okMsg: "Você olha o endereço antes de digitar seus dados. 🔒" },
      { id: "m1-sim-cabo", tipo: "cabo", titulo: "🔌 Simulador: qual cabo é mais rápido?",
        enunciado: "<p>Ligue cada <strong>cabo</strong> no computador e escolha em que <strong>aparelho</strong> a outra ponta está ligada. O <strong>monitor</strong> mostra a velocidade da conexão. Lembre: <strong>a parte mais lenta manda</strong>.</p>",
        cabos: [
          { id: "c5", nome: "CAT5", cor: "#9ca3af", max: 100 },
          { id: "c5e", nome: "CAT5e", cor: "#3b82f6", max: 1000 },
          { id: "c6", nome: "CAT6", cor: "#eab308", max: 10000 },
          { id: "c8", nome: "CAT8", cor: "#a855f7", max: 40000 }],
        equip: [
          { id: "giga", nome: "Switch gigabit", max: 1000, info: "Como o do rack da escola: até 1.000 Mbps." },
          { id: "baia", nome: "Switch da nossa baia", max: 100, info: "<em>Fast Ethernet</em>, o da sala de informática: até 100 Mbps." },
          { id: "dez", nome: "Equipamento de 10 gigabits", max: 10000, info: "Até 10.000 Mbps. O CAT6 só aguenta isso em trechos de até uns 55 metros." },
          { id: "dc", nome: "Servidor de data center", max: 40000, info: "Até 40.000 Mbps, com cabos curtos (até 30 metros)." }],
        perguntas: [
          { p: "1. Cabo <strong>CAT5</strong> ligado no <strong>switch gigabit</strong>: quanto aparece no monitor?", teste: ["c5", "giga"], opcoes: ["100 Mbps", "1.000 Mbps", "10.000 Mbps"], certo: 0, why: "O CAT5, o mais antigo, vai só até 100 Mbps: aqui quem limita é o cabo." },
          { p: "2. Cabo <strong>CAT5e</strong> ligado no <strong>switch gigabit</strong>?", teste: ["c5e", "giga"], opcoes: ["100 Mbps", "1.000 Mbps", "10.000 Mbps"], certo: 1, why: "O CAT5e (o <em>e</em> é de <em>enhanced</em>, melhorado) aguenta 1.000 Mbps, igual ao switch." },
          { p: "3. Cabo <strong>CAT6</strong> ligado no <strong>equipamento de 10 gigabits</strong>, num trecho de até 55 metros?", teste: ["c6", "dez"], opcoes: ["100 Mbps", "1.000 Mbps", "10.000 Mbps"], certo: 2, why: "Com a trança mais apertada e a cruz de plástico, o CAT6 chega a 10.000 Mbps (10 Gbps) em trechos curtos." },
          { p: "4. Cabo <strong>CAT6</strong> ligado no <strong>switch da nossa baia</strong>?", teste: ["c6", "baia"], opcoes: ["100 Mbps", "1.000 Mbps", "10.000 Mbps"], certo: 0, why: "O cabo é rápido, mas o switch da baia vai só até 100 Mbps: a parte mais lenta manda." },
          { p: "5. Na sala de informática, trocar o cabo do chão por um cabo mais rápido deixaria o computador mais rápido?", opcoes: ["Sim, sempre", "Não: o switch da baia continua limitando a 100 Mbps", "Sim, ficaria com 10.000 Mbps"], certo: 1, why: "Para ficar mais rápido, teria que trocar a parte mais lenta: o switch da baia." },
          { p: "6. Cabo <strong>CAT8</strong> ligado no <strong>servidor de data center</strong>?", teste: ["c8", "dc"], opcoes: ["1.000 Mbps", "10.000 Mbps", "40.000 Mbps"], certo: 2, why: "O CAT8 chega a 40.000 Mbps (40 Gbps), mas só em cabos de até 30 metros: por isso fica dentro dos data centers." }],
        okMsg: "Você descobriu: a velocidade é a da parte mais lenta do caminho! 🔌⚡",
        explicacao: "A velocidade da conexão é a <strong>menor</strong> entre o cabo e o aparelho: CAT5 vai até 100 Mbps; CAT5e até 1.000 Mbps (1 Gbps); CAT6 até 1.000 Mbps em 100 metros e até 10.000 Mbps (10 Gbps) em trechos de até uns 55 metros; CAT8 até 40.000 Mbps em até 30 metros. Respostas: 1) 100 Mbps; 2) 1.000 Mbps; 3) 10.000 Mbps; 4) 100 Mbps, porque o switch da baia é a parte mais lenta; 5) Não: quem limita na sala é o switch da baia; 6) 40.000 Mbps (CAT8, só em até 30 metros, nos data centers)." },
      { id: "m1-sim-navegador", opcional: true, tipo: "sim_pc", titulo: "🌐 Simulador: endereço, cadeado e guias do navegador",
        enunciado: "<p>No <strong>navegador de mentira</strong>, digite um endereço, confira o cadeado e compare com um site que não é seguro. O <strong>Bit</strong> ajuda você em cada passo.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Navegador", app: "web" }],
        web: {
          "portal.professorwell.com.br": { titulo: "Portal da Informática", palavras: "portal informatica professor well missões", html: "<p>🎮 Bem-vindo ao <b>Portal da Informática</b>! Escolha a sua turma para começar as missões.</p><p style='font-size:40px'>🏫 💻 🚀</p>" },
          "jogos-gratis-agora.net": { titulo: "JOGOS GRÁTIS AGORA", seguro: false, palavras: "jogos gratis", html: "<p style='color:#c5221f;font-weight:700'>🎁 BAIXE JÁ 500 JOGOS GRÁTIS!!!</p><p>Digite seu email e sua senha para liberar o download.</p>" }
        },
        passos: [
          { faca: "Abra o <b>Navegador</b>: dê <b>duplo clique</b> no ícone 🌐 da área de trabalho.", ok: "abrir:app:web", onde: "ic:Navegador" },
          { faca: "Clique na <b>barra de endereço</b> (a caixa comprida lá em cima), digite <b>portal.professorwell.com.br</b> e aperte <b>Enter</b>.", ok: "url:portal.professorwell.com.br", onde: "web:url", dica: "Digite certinho, com os pontos: portal.professorwell.com.br" },
          { faca: "O portal abriu! Clique no <b>cadeado 🔒</b> do lado do endereço para ver se a conexão é segura.", ok: "cadeado:portal.professorwell.com.br", onde: "web:cadeado" },
          { faca: "Agora abra uma <b>nova guia</b>: clique no <b>+</b>, ao lado da guia do portal.", ok: "novaAba", onde: "web:novaaba" },
          { faca: "Na nova guia, digite <b>jogos-gratis-agora.net</b> na barra de endereço e aperte <b>Enter</b>.", ok: "url:jogos-gratis-agora.net", onde: "web:url" },
          { faca: "Olhe o aviso ao lado do endereço: <b>⚠️ Não seguro</b>. Clique nele para ler.", ok: "cadeado:jogos-gratis-agora.net", onde: "web:cadeado" },
          { faca: "Esse site pede senha sem conexão segura: <b>não digite nada</b>! Feche essa guia no <b>✕</b> dela.", ok: "fecharAba", onde: "aba:x:1", erros: { "campo:*": "Nada de digitar aqui! Site sem cadeado pedindo senha é perigo. Feche a guia no ✕." } }
        ],
        fimMsg: "Você digitou o endereço, conferiu o cadeado, viu um site Não seguro e fechou a guia sem digitar nada. Navegação segura!",
        explicacao: "O cadeado 🔒 (https) mostra que a conexão é protegida: os pacotes viajam embaralhados. “⚠️ Não seguro” (http) quer dizer que alguém no caminho pode ler o que você digita: nunca coloque senha ali." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "O caminho de uma mensagem do seu celular até o amigo",
        itens: ["Meu celular divide a mensagem em pacotes", "Os pacotes passam pelo roteador da minha casa", "Os pacotes viajam pela internet até o servidor do aplicativo", "O servidor do aplicativo envia os pacotes ao celular do amigo", "O celular do amigo junta os pacotes em ordem e mostra a mensagem"],
        dicas: ["Antes de viajar, a mensagem precisa ser dividida.", "O roteador da casa é a “porta de saída” para a internet."],
        explicacao: "Divide em pacotes → roteador de casa → internet → servidor do aplicativo → celular do amigo, que junta os pacotes pela numeração." },

      { tipo: "ordenar", titulo: "Os pacotes chegaram fora de ordem: monte a mensagem",
        enunciado: "<p>Cada pacote leva um número. Use os números para colocar os pacotes em ordem e veja a mensagem se formar.</p>",
        itens: [{ etiqueta: "Pacote 1 de 5", t: "Bom dia, turma!" }, { etiqueta: "Pacote 2 de 5", t: "A aula de hoje" }, { etiqueta: "Pacote 3 de 5", t: "é sobre redes" }, { etiqueta: "Pacote 4 de 5", t: "de computadores." }, { etiqueta: "Pacote 5 de 5", t: "Até logo!" }],
        preview: "Mensagem que o aparelho monta:",
        explicacao: "Mensagem completa: “Bom dia, turma! A aula de hoje é sobre redes de computadores. Até logo!” O TCP (<em>Transmission Control Protocol</em>, Protocolo de Controle de Transmissão) usa esses números para montar a mensagem na ordem certa." },

      { tipo: "tabela", titulo: "Chegou uma mensagem nova em pacotes embaralhados",
        enunciado: "<p>Os pacotes chegaram nesta ordem:</p><p class=\"regra\"><strong>Pacote 3 de 4:</strong> Informática às · <strong>Pacote 1 de 4:</strong> Amanhã tem · <strong>Pacote 4 de 4:</strong> 9 horas. · <strong>Pacote 2 de 4:</strong> aula de</p><p>Monte a mensagem pela numeração e digite-a completa.</p>",
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Digite a mensagem completa, na ordem certa", { r: "Amanhã tem aula de Informática às 9 horas.", tipo: "letras", w: 40 }],
          ["Que informação do pacote permitiu montar a mensagem na ordem certa?", { op: ["O número do pacote (1 de 4, 2 de 4…)", "O tamanho do pacote", "A hora em que o pacote chegou"], r: "O número do pacote (1 de 4, 2 de 4…)" }]],
        dicas: ["Comece pelo Pacote 1 de 4 e siga a numeração.", "Confira os acentos: Amanhã, Informática, às."],
        explicacao: "“Amanhã tem aula de Informática às 9 horas.” Os pacotes podem chegar fora de ordem, mas o número de cada um deixa o aparelho montar a mensagem certinha. Quem cuida disso é o TCP (<em>Transmission Control Protocol</em>, Protocolo de Controle de Transmissão)." },

      { tipo: "info", titulo: "🏫 Na prática: a rede da nossa escola (feito junto com o professor)",
        html: `<p>A nossa escola também é uma rede. Veja as peças que levam a internet da rua até o computador em que você está:</p>
        <div class="tabela-wrap"><table><thead><tr><th>Peça</th><th>O que é e o que faz</th></tr></thead><tbody>
        <tr><td><strong>Fibra óptica</strong></td><td>Cabo com fios finíssimos de vidro que levam os dados em forma de luz, muito rápido. Ela vem da rua, passa por baixo do chão e entra na escola pela cozinha.</td></tr>
        <tr><td><strong>Rack</strong></td><td>Armário de metal onde ficam os aparelhos da rede. O da escola fica na cozinha.</td></tr>
        <tr><td><strong>Roteador</strong> (MikroTik)</td><td>Encaminha os dados pelo caminho certo e dá um endereço IP para cada aparelho da escola. MikroTik é a marca. É um roteador sem antenas: não faz Wi-Fi, só organiza a rede.</td></tr>
        <tr><td><strong>Switch gigabit de 24 portas</strong></td><td>Aparelho que distribui a rede por cabos para a escola inteira. Cada <strong>porta</strong> é uma entrada onde se encaixa um cabo; esse switch tem 24. <strong>Gigabit</strong> quer dizer que cada porta transmite até <strong>1 gigabit por segundo</strong> (1 Gbps = 1.000 megabits por segundo).</td></tr>
        <tr><td><strong>Cabo CAT6</strong></td><td>Cabo de rede de <strong>categoria 6</strong> (CAT vem de categoria), um tipo de cabo rápido, que aguenta 1 Gbps. Passa por baixo do chão até cada sala.</td></tr>
        <tr><td><strong>Tomada de rede</strong></td><td>Encaixe na parede ou no chão onde o cabo chega na sala.</td></tr>
        <tr><td><strong>Baia</strong></td><td>Cada bancada de computadores da sala de informática. A nossa sala tem 4 baias, com até 6 computadores cada.</td></tr>
        <tr><td><strong>Switch Fast Ethernet da baia</strong></td><td>Switch pequeno que fica em cada baia: recebe o cabo da tomada e liga os computadores daquela baia. <strong>Ethernet</strong> é o nome do padrão de rede por cabo, e <strong>Fast Ethernet</strong> é o tipo que transmite até <strong>100 megabits por segundo</strong> (100 Mbps).</td></tr>
        <tr><td><strong>AP</strong> (do inglês <em>Access Point</em>, ponto de acesso)</td><td>Aparelho que fica nas salas de aula comuns, recebe a rede pelo cabo e transforma em Wi-Fi.</td></tr>
        <tr><td><strong>Computador e celular</strong></td><td>Os dispositivos que enviam e recebem os dados.</td></tr></tbody></table></div>` },

      { tipo: "ordenar", titulo: "1. O caminho da internet até o computador da sala de informática",
        itens: ["Fibra óptica chegando da rua", "Roteador MikroTik no rack da cozinha", "Switch gigabit de 24 portas", "Cabo CAT6 por baixo do chão", "Tomada de rede na parede ou no chão da sala", "Switch Fast Ethernet da baia", "Computador da sala de informática"],
        dicas: ["A fibra vem da rua e entra pela cozinha, onde fica o rack.", "O switch da baia fica pertinho dos computadores: é o último aparelho antes deles."],
        explicacao: "Fibra → roteador → switch gigabit → cabo CAT6 → tomada → switch da baia → computador." },

      { tipo: "escolha", titulo: "2 e 3. Wi-Fi e velocidade na nossa escola",
        perguntas: [
          { p: "2. Nas salas de aula comuns, o celular usa Wi-Fi. Qual aparelho transforma o cabo em Wi-Fi nessas salas?", opcoes: ["O AP (ponto de acesso)", "O roteador MikroTik", "O switch da baia"], certo: 0, why: "O AP (<em>Access Point</em>) recebe a rede pelo cabo e transforma em Wi-Fi. O MikroTik da escola não tem antenas." },
          { p: "3. O cabo do chão aguenta até 1 Gbps, mas o switch da baia vai só até 100 Mbps. Qual é a velocidade máxima que chega ao seu computador?", opcoes: ["100 Mbps, porque o switch da baia é a parte mais lenta do caminho", "1 Gbps, porque o cabo é rápido", "1.100 Mbps, somando os dois"], certo: 0, why: "O caminho inteiro fica limitado pela parte mais lenta: o switch Fast Ethernet de 100 Mbps." }],
        dicas: ["Pense numa estrada larga que termina numa ponte estreita: os carros passam na velocidade da ponte."] },

      { tipo: "tabela", titulo: "4. Descubra o endereço IP do seu computador",
        enunciado: "<p>Aperte <strong>Windows + R</strong> (abre a janela Executar), digite <strong>cmd</strong> e aperte <strong>Enter</strong>. Abre o <strong>Prompt de Comando</strong>, uma janela onde se digitam comandos (<em>cmd</em> vem do inglês <em>command</em>, comando). Digite <strong>ipconfig</strong> e aperte Enter (<em>IP configuration</em>, configuração de IP). Procure a linha <strong>Endereço IPv4</strong> (IPv4 é a versão 4 do endereço IP, a mais usada).</p>",
        colunas: ["", "Resposta"],
        linhas: [
          ["Meu endereço IPv4", { re: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$", ph: "ex.: 192.168.0.12", exemplo: "192.168.0.12", dica: "Copie os 4 números separados por pontos, da linha <strong>Endereço IPv4</strong>.", rot: "Meu IPv4" }],
          ["IPv4 de um colega da minha baia", { re: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$", ph: "ex.: 192.168.0.15", exemplo: "192.168.0.15", rot: "IP do colega 1" }],
          ["IPv4 de outro colega da baia", { re: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$", ph: "ex.: 192.168.0.16", exemplo: "192.168.0.16", rot: "IP do colega 2" }],
          ["Os números são iguais ou diferentes?", { op: ["Diferentes", "Iguais"], r: "Diferentes", rot: "Iguais ou diferentes" }],
          ["Por quê?", { op: ["Cada aparelho precisa de um endereço próprio na rede", "Todos os computadores da sala usam o mesmo endereço", "O IP muda a cada segundo"], r: "Cada aparelho precisa de um endereço próprio na rede", rot: "Por quê" }]],
        dicas: ["Como cada casa de uma rua tem o seu número, cada aparelho da rede tem o seu IP. Quem distribui esses endereços é o roteador."],
        explicacao: "Os números são diferentes, porque cada aparelho da rede precisa de um endereço próprio, como cada casa de uma rua tem o seu número. O roteador é que dá esses endereços." },

      { tipo: "aberta", titulo: "5. Como a imagem da sua tela chega ao computador do professor pelo Veyon?",
        enunciado: "<p>Use as palavras <strong>rede</strong>, <strong>switch</strong> e <strong>pacotes</strong>.</p>",
        linhas: 3,
        conferir: { minPalavras: 12, grupos: [{ dica: "a palavra rede", alts: ["rede"] }, { dica: "a palavra switch", alts: ["switch"] }, { dica: "a palavra pacotes", alts: ["pacote"] }] },
        criterios: ["Usei as três palavras pedidas.", "Expliquei o caminho: meu computador → switch da baia → … → computador do professor."],
        exemplo: "O Veyon divide a imagem da minha tela em pacotes, que saem do meu computador pela rede da escola, passam pelo switch da baia e pelo switch gigabit e chegam ao computador do professor, que junta os pacotes e mostra a imagem." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Correio × internet: o que corresponde a cada item?",
        colunas: ["No correio", "Na internet"],
        linhas: [
          ["Endereço de quem recebe", { op: ["Endereço IP", "Roteadores", "Protocolos", "Pacotes"], r: "Endereço IP" }],
          ["Carteiros e agências que levam a carta", { op: ["Endereço IP", "Roteadores", "Protocolos", "Pacotes"], r: "Roteadores" }],
          ["Regras do correio (CEP, selo, envelope)", { op: ["Endereço IP", "Roteadores", "Protocolos", "Pacotes"], r: "Protocolos" }],
          ["Carta longa enviada em várias folhas numeradas", { op: ["Endereço IP", "Roteadores", "Protocolos", "Pacotes"], r: "Pacotes" }]],
        explicacao: "Endereço → IP; carteiros → roteadores; regras → protocolos (como o TCP/IP); folhas numeradas → pacotes." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Por que os pacotes precisam ser numerados? O que acontece se um pacote se perder?",
        perguntas: [
          { p: "Por que os pacotes são <strong>numerados</strong>?", opcoes: ["Porque viajam por caminhos diferentes e podem chegar fora de ordem: o número mostra onde cada um entra", "Para deixar a internet mais bonita", "Porque cada pacote vai para um computador diferente"], certo: 0 },
          { p: "E se um pacote se <strong>perder</strong> no caminho?", opcoes: ["A mensagem chega faltando um pedaço para sempre", "O TCP percebe que falta um número e pede aquele pacote de novo", "O computador desliga"], certo: 1,
            why: "O TCP (<em>Transmission Control Protocol</em>, Protocolo de Controle de Transmissão) confere os números e pede de novo o que faltou." }],
        explicacao: "Os pacotes viajam por caminhos diferentes e podem chegar fora de ordem; o número mostra onde cada um entra. Se um se perder, o TCP percebe que falta um número e pede aquele pacote de novo." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "um único computador muito grande", opcoes: ["um único computador muito grande", "uma rede de redes", "um aplicativo do celular"], certo: "uma rede de redes" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "sem nenhuma proteção", opcoes: ["sem nenhuma proteção", "protegida, com os dados criptografados", "mais lenta que as outras"], certo: "protegida, com os dados criptografados" } }
    ]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "robo", titulo: "Caça ao bug: o programa do robô tem um erro",
        enunciado: "<p>Este programa já está pronto, mas tem um <strong>bug</strong> (erro). Clique em <strong>▶ Executar</strong> para <strong>testar</strong>, descubra onde ele falha e <strong>conserte</strong> usando os botões <strong>+</strong>, <strong>−</strong> e <strong>✕</strong>. Isso é <strong>depuração</strong>!</p>",
        grade: ["R..#.", "#....", "#.#..", "...#*"],
        inicial: [["R", 2], ["D", 1], ["R", 1], ["D", 2]],
        solucao: [["R", 2], ["D", 1], ["R", 2], ["D", 2]],
        dicas: ["Execute e veja em qual passo o robô bate.", "No 3º bloco, o robô anda para a direita pouco demais."],
        explicacao: "O bug estava no 3º bloco: era <strong>repita 2× ➡️</strong>, não 1×. Testar, achar o erro e corrigir é <strong>depurar</strong>." }
    ],
    bonus: [
      { id: "m2-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: detetive de algoritmos",
        perguntas: [
          { p: "Dividir “organizar a festa da turma” em <b>convites, comida, música e decoração</b> é…", opcoes: ["Decomposição", "Depuração", "Reúso"], certo: 0, why: "Decompor é quebrar um problema grande em partes menores." },
          { p: "Na lista <b>cores = [azul, verde, amarelo]</b>, qual item está na posição 2?", opcoes: ["verde", "azul", "amarelo"], certo: 0, why: "Contando do 1: azul é o 1, verde é o 2." },
          { p: "O robô deveria andar 4 casas, mas o programa diz “repita 3 vezes: ande”. Achar e corrigir esse erro é…", opcoes: ["Depuração (achar o bug)", "Decomposição", "Reúso"], certo: 0, why: "Depurar é achar e corrigir o erro: trocar 3 por 4." },
          { p: "Criar o bloco “desenhar casa” uma vez e usar nas 3 casas da rua é…", opcoes: ["Reúso", "Depuração", "Lista"], certo: 0, why: "Reúso: escreve uma vez, usa várias." }
        ] }
    ],
    basico: [
      { tipo: "aberta", titulo: "Decomponha: “Organizar um lanche coletivo da turma”",
        campos: [{ rot: "Parte 1", linhas: 1 }, { rot: "Parte 2", linhas: 1 }, { rot: "Parte 3", linhas: 1 }, { rot: "Parte 4", linhas: 1 }],
        criterios: ["Cada parte é uma tarefa menor e mais fácil.", "Juntas, as partes resolvem o problema inteiro."],
        exemplo: "1. Combinar a data e quem vai trazer o quê. 2. Fazer a lista de comidas e bebidas. 3. Arrumar a sala, os pratos e os copos. 4. Limpar tudo depois do lanche.",
        conferir: { minPalavras: 2, diferentes: "todos", msg: "Problema decomposto em 4 partes! O professor pode ler as suas partes no painel." } },

      { tipo: "lista_ops", titulo: "A lista CHAMADA", nome: "CHAMADA",
        inicial: ["Ana", "Bruno", "Carla", "Davi", "Elisa"],
        passos: [
          { tipo: "pergunta", instr: "Quem está na posição 3?", r: "Carla" },
          { tipo: "pergunta", instr: "Qual é a posição de Davi?", r: "4", num: true },
          { tipo: "inserir", instr: "Fábio entrou na turma: insira Fábio no final da lista.", esperado: ["Ana", "Bruno", "Carla", "Davi", "Elisa", "Fábio"], dica: "Digite Fábio e clique em Inserir no fim." },
          { tipo: "pergunta", instr: "Qual é a posição de Fábio agora?", r: "6", num: true },
          { tipo: "pergunta", instr: "Quantos itens a lista tem depois disso?", r: "6", num: true }],
        explicacao: "Em uma lista, cada item tem uma posição, e a primeira é a posição 1. Quem entra no final ganha a última posição." },

      { tipo: "pintura", titulo: "Siga o algoritmo das casas", forma: "casa", n: 3, pretos: [2],
        regra: "<strong>Bloco DESENHAR CASA:</strong> desenhe um quadrado e um triângulo em cima dele. <strong>Repita 3 vezes:</strong> DESENHAR CASA. Para cada casa: <strong>se</strong> for a 2ª casa, pinte o telhado de preto; <strong>senão</strong>, deixe branco.",
        explicacao: "O bloco DESENHAR CASA foi escrito uma vez só e usado 3 vezes: isso é reúso." },

      { tipo: "pintura", titulo: "Agora é com você: reúse o bloco com 4 casas", forma: "casa", n: 4, pretos: [1, 4],
        regra: "<strong>Repita 4 vezes:</strong> DESENHAR CASA. Para cada casa: <strong>se</strong> for a 1ª <strong>ou</strong> a última, pinte o telhado de preto; <strong>senão</strong>, deixe branco.",
        dicas: ["Com 4 casas, a última é a 4ª."],
        explicacao: "O mesmo bloco DESENHAR CASA foi reusado 4 vezes sem reescrever nada: só mudaram o número de repetições e a condição do se." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "Caça ao bug: o algoritmo deveria desenhar um quadrado",
        enunciado: "<p><em>Repita 3 vezes: ande 5 passos e vire à direita.</em></p>",
        perguntas: [{ p: "O que este algoritmo desenha de verdade?", opcoes: ["Um quadrado sem um dos lados (só 3 lados)", "Um quadrado completo", "Um triângulo fechado"], certo: 0, why: "Com 3 repetições, o robô faz só 3 lados." },
          { p: "Qual é o bug?", opcoes: ["O número de repetições: um quadrado tem 4 lados", "O tamanho do passo", "Virar à direita em vez de à esquerda"], certo: 0, why: "Um quadrado tem 4 lados iguais: a repetição precisa ser 4 vezes." }] },
      { tipo: "tabela", titulo: "Escreva o algoritmo corrigido",
        linhas: [["Repita", { r: "4", tipo: "num", w: 4, rot: "Número de repetições" }, "vezes: ande 5 passos e vire à direita."]],
        explicacao: "Corrigido: repita 4 vezes: ande 5 passos e vire à direita. Depois de corrigir, sempre teste de novo!" }
    ],
    turbo: [
      { tipo: "aberta", titulo: "Invente um bloco com nome e use-o duas vezes",
        campos: [{ rot: "Nome do bloco e os passos dele", linhas: 3, ph: "Bloco ACENAR: 1. levante a mão. 2. ..." }, { rot: "Algoritmo principal que usa o bloco duas vezes", linhas: 2 }],
        criterios: ["O bloco tem nome e passos em ordem.", "O algoritmo principal chama o bloco duas vezes pelo nome."],
        conferir: { minPalavras: 4, blocoDuasVezes: true, msg: "Bloco criado e usado duas vezes pelo nome!" },
        exemplo: "Bloco ACENAR: 1. levante a mão. 2. balance a mão. 3. abaixe a mão. · Algoritmo: entrar na sala, ACENAR, sentar, ACENAR." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "escrever a mesma parte várias vezes, sem dar nome a ela", opcoes: ["escrever a mesma parte várias vezes, sem dar nome a ela", "dar nome a um bloco de passos e usá-lo várias vezes", "apagar as partes repetidas"], certo: "dar nome a um bloco de passos e usá-lo várias vezes" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "não é preciso", opcoes: ["não é preciso", "é preciso", "é proibido"], certo: "é preciso" }, why: "Às vezes a correção cria outro erro." }
    ]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { id: "m3-sim-email", tipo: "sim_pc", titulo: "📧 Simulador: na caixa de email, golpe ou mensagem segura?",
        enunciado: "<p>Você tem emails novos no <strong>computador de mentira</strong>. Descubra quais são <strong>golpe</strong> e denuncie, sem clicar nos links perigosos. O <strong>Bit</strong> confere.</p>",
        area: [{ nome: "Lixeira", app: "lixeira" }, { nome: "Email", app: "email" }, { nome: "Navegador", app: "web" }],
        emails: [
          { id: "premio", nome: "Promoção Celular Grátis", de: "premios@ganhe-celular-ja.xyz", assunto: "PARABÉNS!!! Você ganhou um celular 📱",
            html: "<p>Você foi sorteado!!! Clique AGORA e informe seu nome, endereço e CPF para receber o prêmio.</p><p><b>Oferta válida só por 10 minutos!!!</b></p><p><a data-link='ganhe-celular-ja.xyz' data-k='pg:linkpremio'>👉 QUERO MEU CELULAR</a></p>" },
          { id: "conta", nome: "Suporte do Jogo", de: "suporte@frifire-seguranca.com", assunto: "Sua conta do jogo será apagada hoje",
            html: "<p>Detectamos problemas na sua conta. Para não perder suas skins, responda este email com o seu <b>usuário e senha</b> até meia-noite.</p>" },
          { id: "escola", nome: "Coordenação da Escola", de: "coordenacao@escola.edu.br", assunto: "Feira de Ciências: horário",
            html: "<p>Olá, turma! A Feira de Ciências será na sexta, às 8h. O mapa das bancas está no site da escola:</p><p><a data-link='escola.edu.br/feira' data-k='pg:linkfeira'>escola.edu.br/feira</a></p>" }
        ],
        web: {
          "ganhe-celular-ja.xyz": { titulo: "Ganhe seu celular", seguro: false, html: "<p>Digite seu CPF e endereço:</p><label class='campo'>CPF<input data-campo='cpf'></label>" },
          "escola.edu.br/feira": { titulo: "Feira de Ciências", html: "<p>🗺️ Mapa das bancas: Sala 1 – Planetas · Sala 2 – Robótica · Pátio – Vulcão.</p>" }
        },
        passos: [
          { faca: "Abra o <b>Email</b>: dê <b>duplo clique</b> no ícone 📧 da área de trabalho.", ok: "abrir:app:email", onde: "ic:Email" },
          { faca: "Clique no email <b>PARABÉNS!!! Você ganhou um celular</b> para ler.", ok: "email:abrir:premio", onde: "email:premio" },
          { faca: "Sinais de golpe: prêmio que você não pediu, <b>pressa</b> (10 minutos!), pede <b>CPF</b> e o remetente termina em <b>.xyz</b>. <b>Não clique no link!</b> Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:premio", "email:excluir:premio"], onde: "email:denunciar", erros: { "link:ganhe*": "Opa! Você clicou no link do golpe e caiu num site <b>Não seguro</b>. Na vida real, pare aqui: feche a guia, volte ao Email (📧 na barra de tarefas) e denuncie." } },
          { faca: "Abra o email <b>Sua conta do jogo será apagada hoje</b>.", ok: "email:abrir:conta", onde: "email:conta" },
          { faca: "Olhe o <b>remetente</b>: <i>frifire</i> está escrito errado e o email pede a sua <b>senha</b>. Nenhum site sério pede senha por email! Clique em <b>🚩 Denunciar golpe</b>.", ok: ["email:denunciar:conta", "email:excluir:conta"], onde: "email:denunciar", erros: { "link:*": "Ops! Volte ao Email (📧 na barra de tarefas) e denuncie esse golpe." } },
          { faca: "Agora abra o email da <b>Coordenação da Escola</b>.", ok: "email:abrir:escola", onde: "email:escola" },
          { faca: "Esse é seguro: remetente da escola, sem pressa e sem pedir dados. Clique no link <b>escola.edu.br/feira</b> para ver o mapa.", ok: "link:escola.edu.br/feira", onde: "pg:linkfeira" }
        ],
        fimMsg: "Você denunciou os golpes sem clicar nos links perigosos e abriu só o link seguro da escola. Detetive de golpes!",
        explicacao: "Sinais de golpe: prêmio que você não pediu, pressa, pedido de senha ou documentos, remetente estranho ou escrito errado, links esquisitos. Na dúvida, não clique: denuncie e mostre a um adulto." },
      { id: "m3-pratica-1", tipo: "mensagens", titulo: "Chegou SMS: golpe ou mensagem segura?", app: "📱 Mensagens",
        botoes: [{ id: "G", rot: "🚩 Golpe" }, { id: "S", rot: "✅ Segura" }],
        enunciado: "<p>Leia cada mensagem como se fosse no seu celular. Procure os sinais: <strong>pressa</strong>, <strong>prêmio</strong>, <strong>link estranho</strong>, <strong>pedido de código ou senha</strong>.</p>",
        itens: [
          { de: "+55 11 9xxxx-0000", t: "PARABÉNS! Você ganhou um iPhone. Clique para resgatar em 10 min: bit.ly/premio-ja", c: "G", why: "Prêmio + pressa + link encurtado = phishing." },
          { de: "Mãe", t: "Filho, chego 18h. Já tirou a carne do congelador?", c: "S" },
          { de: "Número novo", t: "Oi, é a sua tia, troquei de número. Me passa o código de 6 dígitos que chegou aí?", c: "G", why: "Nunca passe códigos: é assim que roubam o WhatsApp." },
          { de: "Banco Oficial", t: "Sua conta será BLOQUEADA hoje. Atualize seus dados: banco-atualiza.xyz", c: "G", why: "Banco não manda link para pedir dados." },
          { de: "Escola JK", t: "Amanhã não haverá aula por causa da reunião pedagógica.", c: "S" }],
        okMsg: "Você não cai em golpe! Na dúvida: não clique, não passe código e pergunte a um adulto." }
    ],
    bonus: [
      { id: "m3-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: golpe ou não?",
        perguntas: [
          { p: "SMS: “Seu pacote está preso. Pague R$ 2 neste link: correios-entrega.xyz”. É…", opcoes: ["Golpe: link estranho e pressa", "Seguro"], certo: 0, why: "Site oficial não termina em .xyz; pedido de pagamento por link é golpe comum." },
          { p: "Chegou um código de 6 números que você não pediu e alguém pede para você mandar. Você…", opcoes: ["Não manda para ninguém", "Manda rápido", "Posta no grupo"], certo: 0, why: "Esse código é a 2ª etapa da sua senha: passar o código entrega a sua conta." }
        ] }
    ],
    basico: [
      { id: "m3-basico-1", tipo: "classificar", modo: "tabela", titulo: "Golpe ou seguro?", colunaItem: "Mensagem", colunaResp: "G ou S",
        categorias: [{ id: "G", rot: "Golpe" }, { id: "S", rot: "Seguro" }],
        itens: [
          { t: "“Parabéns! Você ganhou um celular. Clique no link em até 10 minutos!”", c: "G", why: "Prêmio fácil, pressa e link." },
          { t: "“Oi, sou eu, troquei de número. Me passa o código que chegou aí?”", c: "G", why: "Pedido de código: golpe muito comum." },
          { t: "“Ganhe 10.000 moedas no jogo grátis: é só informar a sua senha.”", c: "G", why: "Nenhum jogo de verdade pede a sua senha." },
          { t: "Você acabou de entrar no aplicativo e ele mostra: “Seu código chegou. Não compartilhe com ninguém.”", c: "S", why: "Foi você quem pediu, e o aviso manda não compartilhar." }],
        explicacao: "Sinais de golpe: pressa, prêmio fácil, link estranho e pedido de senha ou código." },
      { id: "m3-sim-2etapas", tipo: "sim_pc", titulo: "🔐 Simulador: senha forte e verificação em duas etapas",
        enunciado: "<p>Proteja a conta do jogo no navegador de mentira: troque a senha por uma forte e ligue a verificação em duas etapas. O <strong>Bit</strong> confere.</p>",
        abertas: ["web"], inicioWeb: "conta.jogodaescola.com.br",
        web: { "conta.jogodaescola.com.br": { titulo: "Minha conta: segurança", html: "<p>🎮 <b>Segurança da conta</b></p><label class='campo'>Nova senha<input data-campo='senha' data-k='pg:senha' placeholder='8 ou mais: letras, números e símbolos'></label><p><label><input type='checkbox' data-ev='2fa' data-k='pg:2fa'> Ativar verificação em duas etapas (código no celular)</label></p><button data-ev='salvar' data-k='pg:salvar' class='pri'>Salvar</button>" } },
        passos: [
          { faca: "Confira o <b>cadeado 🔒</b> ao lado do endereço antes de mexer na senha: clique nele.", ok: "cadeado:conta.jogodaescola.com.br", onde: "web:cadeado" },
          { faca: "Crie uma <b>senha forte</b> na caixa <b>Nova senha</b>: 8 ou mais caracteres, com maiúscula, minúscula, número e símbolo.", ok: { estado: "senhaForte", campo: "senha" }, onde: "pg:senha", dica: "Exemplo (invente a sua!): Pipa#Azul27" },
          { faca: "Marque <b>Ativar verificação em duas etapas</b>.", ok: { estado: "marcado", nome: "2fa" }, onde: "pg:2fa" },
          { faca: "Clique em <b>Salvar</b>.", ok: "pagina:salvar", onde: "pg:salvar" }
        ],
        fimMsg: "Conta blindada: senha forte + código no celular. Mesmo que alguém descubra a senha, não entra!",
        explicacao: "Verificação em duas etapas = senha + um código que chega no seu celular. Senha forte mistura maiúsculas, minúsculas, números e símbolos." },
      { id: "m3-basico-2", tipo: "sinais", titulo: "Quais sinais de golpe apareceram nessas mensagens?",
        opcoes: [
          { t: "Pressa (“em até 10 minutos!”)", certo: true }, { t: "Prêmio fácil (celular, moedas grátis)", certo: true },
          { t: "Pedido de senha ou de código", certo: true }, { t: "Alguém dizendo que trocou de número", certo: true },
          { t: "O aviso “não compartilhe com ninguém” logo depois de você pedir o código", certo: false, why: "Esse aviso é do próprio aplicativo e protege você." },
          { t: "Mensagem escrita sem nenhum erro", certo: false, why: "Erros de português são um sinal; texto sem erro, sozinho, não prova nada." }] },
      { id: "m3-basico-3", tipo: "aberta", titulo: "Reescreva os comentários com empatia (mantendo a opinião)",
        campos: [{ rot: "“Quem gosta desse time não entende nada de futebol.”", linhas: 2 }, { rot: "“Que opinião ridícula, apaga isso.”", linhas: 2 }, { rot: "“Só gente sem noção gosta dessa música.”", linhas: 2 }],
        detector: { palavras: ["nao entende nada", "ridicula", "ridiculo", "apaga isso", "sem nocao", "idiota", "burro"], msg: "Critique a ideia, nunca a pessoa." },
        criterios: ["A minha opinião continua lá.", "Critico a ideia, não a pessoa.", "A pessoa não vai se sentir humilhada ao ler."],
        exemplo: "“Eu torço para outro time, mas respeito quem gosta desse.” · “Penso diferente: na minha opinião…” · “Essa música não faz o meu estilo, mas entendo quem curte.”",
        conferir: { minPalavras: 4, msg: "Comentários reescritos com empatia! O professor pode ler as suas respostas no painel." } },
      { id: "m3-basico-4", tipo: "cartaz", titulo: "Monte aqui o cartaz Alerta de golpe!", tituloCartaz: "Alerta de golpe!",
        campos: [
          { rot: "Dica 1 do seu cartaz:", ph: "Ex.: nunca passe códigos…", gab: "uma das dicas do 💡 Para começar", exemplo: "Nunca passe códigos que chegam por SMS.", re: "senha|c[oó]digo|link|desconfi|duas etapas|verifica|pressa|pr[eê]mio|n[aã]o clique|sair da conta|bloque|denunc|adulto|baix", dica: "As dicas estão no <strong>💡 Para começar</strong>, em “Proteja-se”." },
          { rot: "Dica 2 do seu cartaz:", ph: "Ex.: use senha forte…", gab: "outra dica do 💡 Para começar", exemplo: "Use senha forte e não conte a ninguém.", re: "senha|c[oó]digo|link|desconfi|duas etapas|verifica|pressa|pr[eê]mio|n[aã]o clique|sair da conta|bloque|denunc|adulto|baix", dica: "Escreva uma dica diferente da primeira." },
          { rot: "Dica 3 do seu cartaz:", ph: "Ex.: ative a verificação em duas etapas…", gab: "mais uma dica do 💡 Para começar", exemplo: "Ative a verificação em duas etapas.", re: "senha|c[oó]digo|link|desconfi|duas etapas|verifica|pressa|pr[eê]mio|n[aã]o clique|sair da conta|bloque|denunc|adulto|baix", dica: "Releia o <strong>💡 Para começar</strong> e escolha mais uma." }],
        okMsg: "Cartaz pronto e conferido! Ficou registrado para o professor." }
    ],
    desafio: [
      { tipo: "aberta", titulo: "Um colega fez uma montagem com a foto de outro aluno e mandou no grupo. Escreva 3 atitudes de quem viu.",
        campos: [{ rot: "1.", linhas: 1 }, { rot: "2.", linhas: 1 }, { rot: "3.", linhas: 1 }],
        criterios: ["Nenhuma atitude espalha a montagem.", "Pelo menos uma atitude apoia quem foi exposto.", "Pelo menos uma atitude envolve guardar prova, denunciar ou contar a um adulto."],
        exemplo: "1. Não compartilho e não comento rindo. 2. Mando uma mensagem de apoio para o colega exposto. 3. Tiro print, denuncio e conto ao professor.",
        conferir: { minPalavras: 3, diferentes: "todos", grupos: [
          { dica: "não espalhar a montagem (não compartilhar, não repassar)", alts: ["nao compartilh", "nao repass", "nao encaminh", "nao espalh", "nao mand", "apag", "nao comento", "nao rio", "nao curt"] },
          { dica: "apoiar quem foi exposto", alts: ["apoi", "ajud", "conversar com", "consol", "mensagem", "do lado", "amigo", "acolh"] },
          { dica: "guardar prova, denunciar ou contar a um adulto", alts: ["print", "prova", "denunc", "adulto", "professor", "cont", "famil", "pais", "diretor", "coordenad"] }] } }
    ],
    turbo: [
      { tipo: "escolha", titulo: "O que é a verificação em duas etapas e por que ela protege a conta mesmo se alguém descobrir a sua senha?",
        perguntas: [
          { p: "O que é a verificação em duas etapas?", opcoes: ["Digitar a senha duas vezes", "Além da senha, a conta pede um segundo código, que chega por SMS ou por um aplicativo no celular", "Ter duas contas diferentes"], certo: 1,
            why: "SMS (<em>Short Message Service</em>, serviço de mensagens curtas) é a mensagem de texto do celular." },
          { p: "Por que ela protege mesmo se alguém descobrir a sua senha?", opcoes: ["Porque o invasor não tem o seu celular para receber o segundo código", "Porque a senha fica invisível", "Porque a conta é apagada"], certo: 0 }],
        explicacao: "Além da senha, a conta pede um segundo código, que chega por SMS ou por um aplicativo no meu celular. Quem descobrir só a senha não consegue entrar, porque não tem esse código." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "Posso passar", opcoes: ["Posso passar", "Nunca devo passar", "Devo passar"], certo: "Nunca devo passar" } },
      { v: true },
      { v: false, corrigir: { trecho: "é motivo para ofender a pessoa", opcoes: ["é motivo para ofender a pessoa", "não é motivo para ofender a pessoa", "é proibido"], certo: "não é motivo para ofender a pessoa" } },
      { v: true }
    ]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: (function () {
    const bairro = {
      vertices: [{ id: "C", rot: "Casa", x: 70, y: 180 }, { id: "Pa", rot: "Padaria", x: 260, y: 60 }, { id: "Pr", rot: "Praça", x: 260, y: 300 }, { id: "E", rot: "Escola", x: 450, y: 180 }],
      arestas: [["C", "Pa", 3], ["Pa", "E", 2], ["C", "Pr", 4], ["Pr", "E", 4], ["C", "E", 9]]
    };
    const escola = {
      vertices: [{ id: "Po", rot: "Portão", x: 60, y: 180 }, { id: "Pt", rot: "Pátio", x: 230, y: 180 }, { id: "Ca", rot: "Cantina", x: 230, y: 330 },
        { id: "In", rot: "Sala de Informática", x: 420, y: 70 }, { id: "Bi", rot: "Biblioteca", x: 420, y: 290 }],
      arestas: [["Po", "Pt", 1], ["Pt", "Ca", 1], ["Pt", "In", 2], ["Pt", "Bi", 2], ["In", "Bi", 1]]
    };
    const cidade = {
      vertices: [{ id: "M", rot: "Mercado", x: 60, y: 190 }, { id: "B", rot: "Banco", x: 200, y: 60 }, { id: "F", rot: "Farmácia", x: 220, y: 320 },
        { id: "I", rot: "Igreja", x: 360, y: 60 }, { id: "P", rot: "Posto", x: 370, y: 300 }, { id: "H", rot: "Hospital", x: 480, y: 180 }],
      arestas: [["M", "B", 3], ["M", "F", 6], ["B", "F", 2], ["B", "I", 4], ["F", "P", 3], ["I", "H", 3], ["P", "H", 2], ["F", "H", 7]]
    };
    return {
      pratica: [
        { tipo: "sim_grafo", titulo: "O GPS sou eu: ache o caminho mais rápido até o parque",
          enunciado: "<p>Cada número na rua é o tempo em <strong>minutos de bicicleta</strong> (o <strong>peso</strong> da aresta). Saindo de <strong>Casa</strong>, clique nos lugares, um vizinho por vez, até o <strong>Parque</strong>, com a <strong>menor soma</strong>. Depois clique em <strong>Verificar</strong>.</p>",
          vertices: { casa: { nome: "Casa", ic: "🏠", x: 45, y: 120 }, sorveteria: { nome: "Sorveteria", ic: "🍦", x: 160, y: 45 }, quadra: { nome: "Quadra", ic: "🏀", x: 160, y: 195 },
            ponte: { nome: "Ponte", ic: "🌉", x: 270, y: 45 }, feira: { nome: "Feira", ic: "🧺", x: 270, y: 195 }, parque: { nome: "Parque", ic: "🌳", x: 360, y: 120 } },
          arestas: [["casa", "sorveteria", 2], ["casa", "quadra", 5], ["sorveteria", "quadra", 1], ["sorveteria", "ponte", 6], ["ponte", "parque", 2], ["quadra", "feira", 2], ["feira", "parque", 3]],
          inicio: "casa", fim: "parque", menor: 8, solucao: ["casa", "sorveteria", "quadra", "feira", "parque"], unidade: "min",
          dicas: ["Some os pesos de cada caminho antes de escolher.", "Passar pela Sorveteria e depois pela Quadra pode ser mais rápido do que ir direto para a Quadra."],
          explicacao: "Caminho mais rápido: Casa → Sorveteria → Quadra → Feira → Parque = 2 + 1 + 2 + 3 = <strong>8 min</strong>. Ele tem mais paradas, mas a menor soma. O aplicativo de mapa faz essa conta com milhares de ruas." }
      ],
      basico: [
        { tipo: "info", titulo: "O grafo do bairro (pesos em minutos de caminhada)",
          html: `<div class="tabela-wrap"><table><thead><tr><th>Aresta (ligação)</th><th>Peso (minutos)</th></tr></thead><tbody>
          <tr><td>Casa – Padaria</td><td>3</td></tr><tr><td>Padaria – Escola</td><td>2</td></tr><tr><td>Casa – Praça</td><td>4</td></tr>
          <tr><td>Praça – Escola</td><td>4</td></tr><tr><td>Casa – Escola (rua direta)</td><td>9</td></tr></tbody></table></div>
          <p>Cada <strong>lugar</strong> é um <strong>vértice</strong> (um círculo). Cada <strong>rua</strong> é uma <strong>aresta</strong> (uma linha). O número da rua é o <strong>peso</strong>. Para saber quanto tempo leva um caminho, <strong>some os pesos</strong> das arestas por onde ele passa.</p>` },
        Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo do bairro: ligue os lugares", descricao: "Grafo do bairro para montar: Casa, Padaria, Praça e Escola" }, bairro,
          { enunciado: "<p>Clique em um lugar e depois no outro lugar ligado a ele, seguindo a tabela de arestas. O peso aparece em cima de cada linha.</p>",
            dicas: ["Comece pela Casa: ela se liga à Padaria, à Praça e à Escola (rua direta)."],
            explicacao: "O grafo tem 4 vértices (Casa, Padaria, Praça e Escola) e 5 arestas, cada uma com o seu peso em minutos." }),
        { tipo: "tabela", titulo: "Os caminhos da Casa até a Escola",
          colunas: ["Pergunta", "Resposta"],
          linhas: [["Quantos vértices tem o grafo?", { r: "4", tipo: "num", w: 4, dica: "Conte os lugares (círculos)." }],
            ["Quantos minutos leva Casa → Padaria → Escola?", { r: "5", tipo: "num", w: 4, dica: "3 + 2" }],
            ["Quantos minutos leva Casa → Praça → Escola?", { r: "8", tipo: "num", w: 4 }],
            ["Quantos minutos leva a rua direta Casa → Escola?", { r: "9", tipo: "num", w: 4 }],
            ["<strong>Qual é o caminho mais curto?</strong>", { op: ["Casa → Escola (rua direta)", "Casa → Padaria → Escola", "Casa → Praça → Escola"], r: "Casa → Padaria → Escola" }]],
          dicas: ["Some os pesos de cada aresta do caminho.", "O mais curto é o de menor soma, não o de menos ruas."],
          explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 · Casa → Praça → Escola = 4 + 4 = 8 · rua direta = 9. O mais curto é pela Padaria (5 minutos), mesmo com uma parada a mais do que a rua direta." },
        Object.assign({ tipo: "grafo", titulo: "Trace no grafo o caminho mais curto da Casa até a Escola", de: "C", para: "E", unidade: "minutos", descricao: "Grafo do bairro com Casa, Padaria, Praça e Escola" }, bairro,
          { enunciado: "<p>Clique nos vértices, um depois do outro, começando pela Casa. A soma aparece embaixo.</p>", explicacao: "Casa → Padaria → Escola = 3 + 2 = 5 minutos." }),
        { tipo: "classificar", modo: "tabela", titulo: "Cada parte do grafo é o quê no mapa?", colunaItem: "No mapa", colunaResp: "Parte do grafo",
          categorias: [{ id: "V", rot: "Vértice" }, { id: "A", rot: "Aresta" }, { id: "P", rot: "Peso" }],
          itens: [
            { t: "A escola", c: "V", why: "Um lugar é um ponto: vértice." },
            { t: "A rua que liga a casa à padaria", c: "A", why: "A ligação entre dois lugares é uma aresta." },
            { t: "“3 minutos” escrito na rua", c: "P", why: "O número da aresta é o peso." },
            { t: "A praça", c: "V", why: "Lugar = vértice." },
            { t: "“500 metros” escrito na rua", c: "P", why: "Distância também é peso." },
            { t: "A amizade entre a Ana e a Bia (numa rede de amigos)", c: "A", why: "Numa rede de amigos, cada amizade é uma aresta." }],
          explicacao: "Lugar ou pessoa = <strong>vértice</strong>. Rua, cabo ou amizade (o que liga) = <strong>aresta</strong>. Número na ligação (minutos, metros, reais) = <strong>peso</strong>." },
        { tipo: "tabela", titulo: "A rede de amigos: qual é o grau de cada um?",
          enunciado: "<p>Amizades: <strong>Ana–Bia</strong>, <strong>Ana–Caio</strong>, <strong>Ana–Davi</strong> e <strong>Bia–Caio</strong>. O <strong>grau</strong> é quantas arestas (amizades) chegam em cada pessoa.</p>",
          colunas: ["Pessoa (vértice)", "Grau (nº de amizades)"],
          linhas: [["Ana", { r: "3", tipo: "num", w: 3 }], ["Bia", { r: "2", tipo: "num", w: 3 }], ["Caio", { r: "2", tipo: "num", w: 3 }], ["Davi", { r: "1", tipo: "num", w: 3 }],
            ["<strong>Quem tem mais conexões?</strong>", { op: ["Ana", "Bia", "Caio", "Davi"], r: "Ana" }]],
          dicas: ["Conte quantas vezes cada nome aparece na lista de amizades."],
          explicacao: "Ana aparece em 3 amizades (grau 3), Bia e Caio em 2, Davi em 1. Ana tem mais conexões. É assim que a rede social sugere amigos: pelas conexões do grafo." }
      ],
      desafio: [
        { tipo: "info", titulo: "As pistas do grafo da escola",
          html: `<p>Monte o grafo da escola com estas pistas (o peso é quantos <strong>minutos</strong> se anda):</p><ul>
          <li>Do <strong>Portão</strong> só se chega ao <strong>Pátio</strong>: 1 minuto.</li>
          <li>Do <strong>Pátio</strong> se vai à <strong>Cantina</strong> (1 minuto), à <strong>Sala de Informática</strong> (2 minutos) e à <strong>Biblioteca</strong> (2 minutos).</li>
          <li>A <strong>Sala de Informática</strong> e a <strong>Biblioteca</strong> são vizinhas, ligadas por um corredor de 1 minuto.</li></ul>` },
        Object.assign({ tipo: "grafo_montar", titulo: "Monte o grafo da escola seguindo as pistas", descricao: "Grafo da escola para montar" }, escola,
          { enunciado: "<p>Clique em um lugar e depois no lugar ligado a ele, seguindo as pistas acima.</p>",
            dicas: ["São 5 arestas ao todo.", "O Pátio é o vértice de maior grau: ele se liga a 4 lugares."],
            explicacao: "Arestas: Portão–Pátio (1), Pátio–Cantina (1), Pátio–Informática (2), Pátio–Biblioteca (2) e Informática–Biblioteca (1)." }),
        { tipo: "tabela", titulo: "Perguntas sobre o grafo da escola",
          linhas: [["Qual lugar tem o maior grau (mais ligações)?", { op: ["Portão", "Pátio", "Cantina", "Biblioteca"], r: "Pátio" }],
            ["Quantos minutos do Portão até a Sala de Informática pelo caminho mais curto?", { r: "3", tipo: "num", w: 4, dica: "Portão → Pátio → Informática" }],
            ["Se o corredor do Pátio até a Informática estiver fechado, quantos minutos leva do Portão até a Informática?", { r: "4", tipo: "num", w: 4, dica: "Portão → Pátio → Biblioteca → Informática" }]],
          explicacao: "O Pátio tem grau 4. Portão → Pátio → Informática = 1 + 2 = 3 minutos. Com esse corredor fechado: Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = 4 minutos. Quando uma aresta some, o caminho mais curto muda: o GPS faz isso quando uma rua está interditada." }
      ],
      turbo: [
        { tipo: "info", titulo: "A entrega: Mercado → Farmácia → Hospital",
          html: `<p>O entregador sai do <strong>Mercado</strong>, precisa <strong>passar na Farmácia</strong> para pegar um remédio e depois levar tudo ao <strong>Hospital</strong>. Os pesos são minutos de moto. Resolva em duas partes: primeiro o caminho mais curto do Mercado até a Farmácia; depois, da Farmácia até o Hospital.</p>` },
        Object.assign({ tipo: "grafo", titulo: "Parte 1: o caminho mais curto do Mercado até a Farmácia", de: "M", para: "F", unidade: "minutos", descricao: "Grafo da cidade com Mercado, Banco, Farmácia, Igreja, Posto e Hospital" }, cidade,
          { explicacao: "Mercado → Banco → Farmácia = 3 + 2 = 5 minutos (a rua direta Mercado–Farmácia leva 6)." }),
        Object.assign({ tipo: "grafo", titulo: "Parte 2: o caminho mais curto da Farmácia até o Hospital", de: "F", para: "H", unidade: "minutos", descricao: "Grafo da cidade com Mercado, Banco, Farmácia, Igreja, Posto e Hospital" }, cidade,
          { explicacao: "Farmácia → Posto → Hospital = 3 + 2 = 5 minutos (a rua direta Farmácia–Hospital leva 7)." }),
        { tipo: "tabela", titulo: "O total da entrega",
          linhas: [["Quantos minutos leva a entrega inteira (parte 1 + parte 2)?", { r: "10", tipo: "num", w: 4 }],
            ["Por que o entregador não usou as ruas diretas?", { op: ["Porque os caminhos com mais paradas tinham uma soma menor", "Porque as ruas diretas estavam fechadas", "Porque o grafo não tinha ruas diretas"], r: "Porque os caminhos com mais paradas tinham uma soma menor" }]],
          explicacao: "5 + 5 = 10 minutos. Pelas ruas diretas seria 6 + 7 = 13. De novo: o caminho mais curto é o de menor soma dos pesos." }
      ],
      bonus: [
      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: o GPS relâmpago",
        perguntas: [
          { p: "Caminho A: 2 + 5 = 7 min. Caminho B: 3 + 3 = 6 min. Qual o GPS escolhe?", opcoes: ["O B (6 min)", "O A (7 min)"], certo: 0, why: "O mais curto é o de menor soma dos pesos." },
          { p: "Num grafo, a Escola está ligada à Casa, à Praça e à Padaria. Qual é o <b>grau</b> da Escola?", opcoes: ["3", "1", "4"], certo: 0, why: "Grau é quantas arestas chegam no vértice: 3." }
        ] }
      ],
      vf: [
        { v: true },
        { v: false, corrigir: { trecho: "é sempre o mais curto", opcoes: ["é sempre o mais curto", "nem sempre é o mais curto"], certo: "nem sempre é o mais curto" }, why: "O mais curto é o de menor soma dos pesos." },
        { v: true },
        { v: true },
        { v: true }
      ]
    };
  })(),

  /* ======================= 🔁 REVISÃO PARA A PROVA =======================
     Cada atividade tem "de" (a missão). O portal mostra só as missões que a turma estudou. */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ligar", de: "m1", titulo: "M1 · Ligue cada termo ao seu significado",
        pares: [{ a: "Rede", b: "Aparelhos ligados para trocar informações" }, { a: "Internet", b: "Rede de redes que liga o mundo todo" }, { a: "Pacote", b: "Pedaço numerado da mensagem que viaja pela rede" }, { a: "Endereço IP", b: "Número que identifica cada aparelho na rede" }, { a: "Protocolo", b: "Regras que os aparelhos combinam para se entender" }],
        explicacao: "Rede liga aparelhos; internet é a rede de redes; a mensagem viaja em pacotes; cada aparelho tem um IP; protocolos são as regras." },
      { tipo: "escolha", de: "m1", titulo: "M1 · Como a mensagem viaja",
        perguntas: [
          { p: "O aparelho que encaminha os pacotes pelo melhor caminho é o:", opcoes: ["Roteador", "Monitor", "Teclado"], certo: 0 },
          { p: "O cadeado e o https no navegador mostram que:", opcoes: ["A conexão é protegida", "O site é grátis", "O site é antigo"], certo: 0 },
          { p: "Os pacotes chegam fora de ordem. O que acontece?", opcoes: ["São montados na ordem certa pelos números", "A mensagem se perde", "O computador desliga"], certo: 0 }],
        explicacao: "Roteador encaminha os pacotes; https = conexão protegida; os pacotes são numerados e montados na ordem no destino." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", modo: "tabela", de: "m2", titulo: "M2 · Qual ideia é essa?", colunaItem: "Situação", colunaResp: "Ideia",
        categorias: [{ id: "D", rot: "Decomposição" }, { id: "L", rot: "Lista" }, { id: "R", rot: "Reúso" }, { id: "B", rot: "Depuração" }],
        itens: [{ t: "Dividir “organizar a festa” em convites, comida e música", c: "D" }, { t: "CORES = [azul, verde, amarelo]", c: "L" }, { t: "Usar o bloco DESENHAR CASA três vezes", c: "R" }, { t: "Testar o algoritmo e corrigir o passo errado", c: "B" }],
        explicacao: "Decomposição divide; lista guarda em ordem; reúso chama o bloco pelo nome; depuração acha e corrige bugs." },
      { tipo: "tabela", de: "m2", titulo: "M2 · A lista FRUTAS = [maçã, uva, pera, manga]",
        linhas: [["Quem está na posição 2?", { r: ["uva"], tipo: "letras", w: 10 }], ["Qual é a posição de manga?", { r: "4", tipo: "num", w: 3 }], ["Quantos itens a lista tem?", { r: "4", tipo: "num", w: 3 }]],
        explicacao: "A primeira posição é a 1: maçã (1), uva (2), pera (3), manga (4)." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", modo: "tabela", de: "m3", titulo: "M3 · Golpe ou seguro?", colunaItem: "Mensagem", colunaResp: "G ou S",
        categorias: [{ id: "G", rot: "Golpe" }, { id: "S", rot: "Seguro" }],
        itens: [{ t: "“Troquei de número, me passa o código que chegou aí?”", c: "G" }, { t: "“Você ganhou um prêmio! Clique em 10 minutos!”", c: "G" }, { t: "Você pediu o código no aplicativo e ele avisa: “não compartilhe”", c: "S" }, { t: "“Sua conta será bloqueada hoje: atualize no link”", c: "G" }],
        explicacao: "Pedido de código, prêmio com pressa e link para “atualizar” são golpe. O aviso do próprio aplicativo, quando você pediu o código, é seguro." },
      { tipo: "escolha", de: "m3", titulo: "M3 · Proteção e convivência",
        perguntas: [
          { p: "A verificação em duas etapas pede:", opcoes: ["A senha e mais um código", "Só o nome", "Duas senhas iguais"], certo: 0 },
          { p: "Diante do cyberbullying, eu:", opcoes: ["Guardo provas, bloqueio, denuncio e conto a um adulto", "Respondo com ofensa", "Compartilho para todos verem"], certo: 0 }],
        explicacao: "Duas etapas = senha + código. Cyberbullying: print, bloquear, denunciar, contar a um adulto." },
      { tipo: "relembre", de: "m4" },
      { tipo: "tabela", de: "m4", titulo: "M4 · O grafo: Casa —2— Feira —2— Escola e Casa —6— Escola",
        linhas: [["Casa → Feira → Escola soma quantos minutos?", { r: "4", tipo: "num", w: 3 }], ["Qual é o caminho mais curto?", { op: ["Casa → Feira → Escola", "Casa → Escola (direto)"], r: "Casa → Feira → Escola" }], ["Quantos vértices tem o grafo?", { r: "3", tipo: "num", w: 3 }]],
        explicacao: "2 + 2 = 4, menor que 6: o mais curto é pela Feira. Os vértices são Casa, Feira e Escola (3)." },
      { tipo: "escolha", de: "m4", titulo: "M4 · Partes do grafo",
        perguntas: [{ p: "No mapa, a rua que liga dois lugares é:", opcoes: ["Uma aresta", "Um vértice", "Um peso"], certo: 0 }, { p: "O grau de um vértice é:", opcoes: ["Quantas arestas chegam nele", "A distância até a escola", "A cor do vértice"], certo: 0 }],
        explicacao: "Rua = aresta; lugar = vértice; número da rua = peso. Grau = quantas arestas chegam no vértice." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1",
        perguntas: [{ p: "Por que os pacotes de uma mensagem são numerados?", opcoes: ["Para serem montados na ordem certa no destino", "Para ficarem mais bonitos", "Para pagar a internet"], certo: 0 }] },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2 · Caça ao bug",
        enunciado: "<p><em>Repita 3 vezes: ande 5 passos e vire à direita</em> deveria desenhar um quadrado.</p>",
        perguntas: [{ p: "Como fica o algoritmo corrigido?", opcoes: ["Repita 4 vezes: ande 5 passos e vire à direita", "Repita 3 vezes: ande 4 passos", "Repita 5 vezes: vire à esquerda"], certo: 0, why: "Quadrado tem 4 lados." }] },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3",
        perguntas: [{ p: "Uma mensagem sem nenhum erro de português pode ser golpe?", opcoes: ["Sim: texto sem erro, sozinho, não prova que é verdade", "Não, nunca", "Só se tiver emoji"], certo: 0 }] },
      { tipo: "escolha", de: "m4", titulo: "Desafio M4",
        perguntas: [{ p: "Se uma rua do caminho mais curto for fechada, o que acontece?", opcoes: ["O caminho mais curto pode mudar, e o GPS calcula outro", "O grafo some", "Nada muda"], certo: 0 }] }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "A internet é:", opcoes: ["Uma rede de redes", "Um computador só", "Um programa"], certo: 0 }] },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "Depois de corrigir um erro, eu:", opcoes: ["Testo de novo", "Não testo mais", "Apago o algoritmo"], certo: 0 }] },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Phishing é:", opcoes: ["Mensagem falsa com uma isca para roubar dados", "Um antivírus", "Um tipo de pacote"], certo: 0 }] },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "O caminho mais curto é o de:", opcoes: ["Menor soma dos pesos", "Menos ruas", "Mais vértices"], certo: 0 }] }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Confira as suas missões", html: "<p>Volte à lista de missões da apostila: cada missão com o <strong>Básico concluído</strong> aparece com ✔. Se faltar alguma (por exemplo, porque você faltou à aula), faça o Básico dela agora. O professor acompanha tudo pelo painel.</p>" },
      { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
        campos: [{ rot: "🌐 Redes e internet", linhas: 2 }, { rot: "⚙️ Algoritmos", linhas: 2 }, { rot: "🛡️ Segurança e convivência digital", linhas: 2 }],
        criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."],
        conferir: { minPalavras: 4, porCampo: [
          ["rede", "internet", "pacote", "ip", "roteador", "switch", "cabo", "wi-fi", "wifi", "protocolo", "tcp", "servidor", "veyon", "ap "],
          ["algoritmo", "decompo", "parte", "bug", "erro", "corrig", "bloco", "lista", "passo", "sequencia", "repeti", "depura"],
          ["seguranc", "golpe", "phishing", "senha", "empatia", "respeit", "verificacao", "duas etapas", "dados", "link", "cyberbullying", "denunc", "proteg"]] } }
    ],
    desafio: [
      { tipo: "ligar", titulo: "Desafio do bimestre: ligue cada termo ao seu significado", porRodada: 6,
        enunciado: "<p>Um termo de cada tema do bimestre. Clique no termo e depois no significado dele.</p>",
        pares: [{ a: "Pacote", b: "Pedaço numerado de uma mensagem que viaja pela rede" }, { a: "Endereço IP", b: "Número que identifica cada aparelho na rede" }, { a: "Decomposição", b: "Dividir um problema grande em partes menores" }, { a: "Bug", b: "Erro em um algoritmo" }, { a: "Phishing", b: "Golpe com mensagem ou link falso para roubar dados" }, { a: "Verificação em duas etapas", b: "Segunda confirmação além da senha, como um código no celular" }] }
    ],
    turbo: [
      { tipo: "aberta", titulo: "A missão de que eu mais gostei",
        enunciado: "<p>Escolha a missão de que você mais gostou e escreva duas ou três frases dizendo por quê. Se o professor ligar o projetor no fim da aula, você pode ler para a turma (é opcional).</p>",
        campos: [{ rot: "A missão de que eu mais gostei:", linhas: 1 }, { rot: "Por que eu gostei (duas ou três frases):", linhas: 3 }],
        criterios: ["Diz qual foi a missão.", "Explica o motivo com as suas palavras."],
        exemplo: "Missão 1. Eu gostei porque aprendi como a internet funciona por dentro e agora entendo por que o vídeo trava.",
        conferir: { minPalavras: 2, msg: "Registrado! O professor pode ler no painel." } }
    ]
  }
});

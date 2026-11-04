/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 7º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-7ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
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

      { tipo: "pc", titulo: "No computador: os pacotes no Bloco de Notas", programa: "Bloco de Notas",
        passos: ["Abra o <strong>Bloco de Notas</strong> e digite os 5 pacotes na ordem certa, um por linha, começando com <strong>Pacote 1 de 5:</strong>.", "Na última linha, escreva a mensagem completa.", "Para mudar uma linha de lugar: selecione, <strong>Ctrl + X</strong> (recortar) e <strong>Ctrl + V</strong> (colar) no lugar certo.", "Com o texto na tela, chame o professor para conferir e carimbar."] },

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

      { tipo: "aberta", titulo: "4. Descubra o endereço IP do seu computador",
        enunciado: "<p>Aperte <strong>Windows + R</strong> (abre a janela Executar), digite <strong>cmd</strong> e aperte <strong>Enter</strong>. Abre o <strong>Prompt de Comando</strong>, uma janela onde se digitam comandos (<em>cmd</em> vem do inglês <em>command</em>, comando). Digite <strong>ipconfig</strong> e aperte Enter (<em>IP configuration</em>, configuração de IP). Procure a linha <strong>Endereço IPv4</strong> (IPv4 é a versão 4 do endereço IP, a mais usada).</p>",
        campos: [{ rot: "Meu endereço IPv4", linhas: 1, ph: "ex.: 192.168.0.12" }, { rot: "IPs de dois colegas da minha baia", linhas: 2 }, { rot: "Os números são iguais ou diferentes? Por quê?", linhas: 2 }],
        criterios: ["Copiei o IPv4 exatamente como aparece.", "Expliquei que cada aparelho precisa de um endereço próprio na rede."],
        exemplo: "Os números são diferentes, porque cada aparelho da rede precisa de um endereço próprio, como cada casa de uma rua tem o seu número. O roteador é que dá esses endereços." },

      { tipo: "aberta", titulo: "5. Como a imagem da sua tela chega ao computador do professor pelo Veyon?",
        enunciado: "<p>Use as palavras <strong>rede</strong>, <strong>switch</strong> e <strong>pacotes</strong>.</p>",
        linhas: 3, exigir: ["rede", "switch", "pacote"],
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
      { tipo: "aberta", titulo: "Por que os pacotes precisam ser numerados? O que acontece se um pacote se perder?", linhas: 3,
        criterios: ["Expliquei que os pacotes podem chegar fora de ordem.", "Disse o que acontece com o pacote perdido."],
        exemplo: "Os pacotes viajam por caminhos diferentes e podem chegar fora de ordem; o número mostra onde cada um entra. Se um se perder, o TCP percebe que falta um número e pede aquele pacote de novo." }
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
    basico: [
      { tipo: "aberta", titulo: "Decomponha: “Organizar um lanche coletivo da turma”",
        campos: [{ rot: "Parte 1", linhas: 1 }, { rot: "Parte 2", linhas: 1 }, { rot: "Parte 3", linhas: 1 }, { rot: "Parte 4", linhas: 1 }],
        criterios: ["Cada parte é uma tarefa menor e mais fácil.", "Juntas, as partes resolvem o problema inteiro."],
        exemplo: "1. Combinar a data e quem vai trazer o quê. 2. Fazer a lista de comidas e bebidas. 3. Arrumar a sala, os pratos e os copos. 4. Limpar tudo depois do lanche." },

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

      { tipo: "pc", titulo: "No computador: as casas no Paint", programa: "Paint",
        passos: ["Abra o <strong>Paint</strong>.", "Bloco DESENHAR CASA: desenhe um quadrado e um triângulo em cima dele.", "Repita 3 vezes o bloco, deixando um espaço à direita.", "Pinte de preto só o telhado da 2ª casa.", "Chame o professor para conferir o desenho e carimbar."] }
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
        criterios: ["O bloco tem nome e passos em ordem.", "O algoritmo principal chama o bloco duas vezes pelo nome."] }
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
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Golpe ou seguro?", colunaItem: "Mensagem", colunaResp: "G ou S",
        categorias: [{ id: "G", rot: "Golpe" }, { id: "S", rot: "Seguro" }],
        itens: [
          { t: "“Parabéns! Você ganhou um celular. Clique no link em até 10 minutos!”", c: "G", why: "Prêmio fácil, pressa e link." },
          { t: "“Oi, sou eu, troquei de número. Me passa o código que chegou aí?”", c: "G", why: "Pedido de código: golpe muito comum." },
          { t: "“Ganhe 10.000 moedas no jogo grátis: é só informar a sua senha.”", c: "G", why: "Nenhum jogo de verdade pede a sua senha." },
          { t: "Você acabou de entrar no aplicativo e ele mostra: “Seu código chegou. Não compartilhe com ninguém.”", c: "S", why: "Foi você quem pediu, e o aviso manda não compartilhar." }],
        explicacao: "Sinais de golpe: pressa, prêmio fácil, link estranho e pedido de senha ou código." },
      { tipo: "sinais", titulo: "Quais sinais de golpe apareceram nessas mensagens?",
        opcoes: [
          { t: "Pressa (“em até 10 minutos!”)", certo: true }, { t: "Prêmio fácil (celular, moedas grátis)", certo: true },
          { t: "Pedido de senha ou de código", certo: true }, { t: "Alguém dizendo que trocou de número", certo: true },
          { t: "O aviso “não compartilhe com ninguém” logo depois de você pedir o código", certo: false, why: "Esse aviso é do próprio aplicativo e protege você." },
          { t: "Mensagem escrita sem nenhum erro", certo: false, why: "Erros de português são um sinal; texto sem erro, sozinho, não prova nada." }] },
      { tipo: "aberta", titulo: "Reescreva os comentários com empatia (mantendo a opinião)",
        campos: [{ rot: "“Quem gosta desse time não entende nada de futebol.”", linhas: 2 }, { rot: "“Que opinião ridícula, apaga isso.”", linhas: 2 }, { rot: "“Só gente sem noção gosta dessa música.”", linhas: 2 }],
        detector: { palavras: ["nao entende nada", "ridicula", "ridiculo", "apaga isso", "sem nocao", "idiota", "burro"], msg: "Critique a ideia, nunca a pessoa." },
        criterios: ["A minha opinião continua lá.", "Critico a ideia, não a pessoa.", "A pessoa não vai se sentir humilhada ao ler."],
        exemplo: "“Eu torço para outro time, mas respeito quem gosta desse.” · “Penso diferente: na minha opinião…” · “Essa música não faz o meu estilo, mas entendo quem curte.”" },
      { tipo: "pc", titulo: "No computador: cartaz Alerta de golpe!", programa: "Paint",
        passos: ["Abra o <strong>Paint</strong> e escreva o título <strong>Alerta de golpe!</strong>", "Faça um desenho e escreva <strong>3 dicas</strong> para se proteger na internet.", "Não use nomes nem fotos de colegas.", "Chame o professor para conferir e carimbar."] }
    ],
    desafio: [
      { tipo: "aberta", titulo: "Um colega fez uma montagem com a foto de outro aluno e mandou no grupo. Escreva 3 atitudes de quem viu.",
        campos: [{ rot: "1.", linhas: 1 }, { rot: "2.", linhas: 1 }, { rot: "3.", linhas: 1 }],
        criterios: ["Nenhuma atitude espalha a montagem.", "Pelo menos uma atitude apoia quem foi exposto.", "Pelo menos uma atitude envolve guardar prova, denunciar ou contar a um adulto."],
        exemplo: "1. Não compartilho e não comento rindo. 2. Mando uma mensagem de apoio para o colega exposto. 3. Tiro print, denuncio e conto ao professor." }
    ],
    turbo: [
      { tipo: "aberta", titulo: "O que é a verificação em duas etapas e por que ela protege a conta mesmo se alguém descobrir a sua senha?", linhas: 3,
        criterios: ["Expliquei que existe um segundo código além da senha.", "Disse por que só a senha não basta para o invasor entrar."],
        exemplo: "Além da senha, a conta pede um segundo código, que chega por SMS ou por um aplicativo no meu celular. Quem descobrir só a senha não consegue entrar, porque não tem esse código." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "Posso passar", opcoes: ["Posso passar", "Nunca devo passar", "Devo passar"], certo: "Nunca devo passar" } },
      { v: true },
      { v: false, corrigir: { trecho: "é motivo para ofender a pessoa", opcoes: ["é motivo para ofender a pessoa", "não é motivo para ofender a pessoa", "é proibido"], certo: "não é motivo para ofender a pessoa" } },
      { v: true }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "autoavaliacao", titulo: "Folheie a apostila impressa: quais missões já têm o carimbo do Básico?",
        itens: ["🌐 Missão 1 – Redes e internet", "🧩 Missão 2 – Decompor e corrigir algoritmos", "🛡️ Missão 3 – Segurança e convivência digital"] },
      { tipo: "info", titulo: "Faltou algum carimbo?", html: "<p>Se faltar algum carimbo (por exemplo, porque você faltou à aula), volte à missão agora, faça o Básico e peça o carimbo ao professor.</p>" },
      { tipo: "aberta", titulo: "Escreva uma frase sobre o que você aprendeu em cada tema",
        campos: [{ rot: "🌐 Redes e internet", linhas: 2 }, { rot: "🧩 Algoritmos", linhas: 2 }, { rot: "🛡️ Segurança e convivência digital", linhas: 2 }],
        criterios: ["Cada frase usa pelo menos uma palavra-chave do tema.", "Frase completa, com letra maiúscula e ponto final."], minPalavras: 4 }
    ],
    desafio: [
      { tipo: "pc", titulo: "No computador: digite as suas três frases", programa: "Bloco de Notas",
        passos: ["Digite as três frases no Bloco de Notas.", "Confira letra maiúscula, acentos e pontuação.", "Mostre ao professor."] }
    ],
    turbo: [
      { tipo: "pc", titulo: "Apresente para a turma", programa: "Projetor da sala",
        passos: ["Escolha a missão de que você mais gostou.", "Prepare duas ou três frases dizendo por quê.", "Apresente para a turma, no projetor."] }
    ]
  }
});

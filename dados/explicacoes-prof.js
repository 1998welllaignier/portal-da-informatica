/* 💬 Explicação breve para o PROFESSOR explicar à turma (aparece só no modal ✅ Resposta da 👀 Visualização do professor).
   P.explicProf[apostila].vf[missão][i] = uma frase por item das Perguntas rápidas (V ou F e o porquê).
   P.explicProf[apostila].at[idDaAtividade] = explicação de atividades que não têm resolução comentada.
   Padrão (docs/PADRAO-DE-QUALIDADE.md): toda atividade nova já vem com "explicacao" (resolução comentada);
   as Perguntas rápidas novas já vêm com a explicação de cada item aqui. */
(function () {
  const P = window.PORTAL = window.PORTAL || {};
  const E = P.explicProf = P.explicProf || {};

  E["informatica-5ano-4bim"] = { vf: {
    m1: ["V: o teclado leva o que a gente digita para dentro do computador, por isso é de entrada.",
      "V: é o processador que faz as contas e dá as ordens; por isso o apelido de cérebro.",
      "F: a nuvem são computadores de empresas, ligados à internet. O arquivo não fica no céu: fica nesses computadores.",
      "V: o pen drive guarda arquivos e é pequeno; dá para levar no bolso e abrir em outro computador.",
      "F: sem o sistema operacional (o Windows, por exemplo), os outros programas não funcionam. Ele é o programa principal."],
    m2: ["V: na lista, cada item tem um lugar (1º, 2º, 3º…). Esse lugar é a posição.",
      "F: inserir é colocar um item na lista. Tirar é remover.",
      "V: no grafo, os pontos são os vértices (ex.: as cidades do mapa).",
      "V: as arestas são as linhas que ligam um vértice a outro (ex.: as estradas).",
      "F: a ordem alfabética começa pela letra A e termina na Z."],
    m3: ["V: uma sentença lógica é uma frase que só pode ser verdadeira ou falsa (ex.: “está chovendo”).",
      "F: com E, as duas partes precisam ser verdadeiras. Exemplo: “tenho lápis E caderno” só é verdade se eu tiver os dois.",
      "V: o NÃO troca o valor: se a frase é verdadeira, com NÃO ela fica falsa, e vice-versa.",
      "V: com OU, basta uma parte ser verdadeira. “Vou de bicicleta OU a pé”: vale se for de qualquer um dos dois.",
      "F: algoritmos fazem escolhas com SE… ENTÃO… SENÃO. Exemplo: SE chover, ENTÃO levo o guarda-chuva."],
    m4: ["F: na internet tem muita coisa falsa. Antes de acreditar, veja quem publicou e se outros sites confiáveis falam o mesmo.",
      "V: pressa e “compartilhe já” são truques para a pessoa não pensar antes de espalhar.",
      "V: quem cria um desenho, um texto ou uma música é o autor, e o trabalho é dele.",
      "V: pegar o trabalho de outra pessoa e dizer que é seu se chama plágio, e não é certo.",
      "F: a calculadora serve para fazer contas. Para desenhar, usamos um programa de desenho."]
  } };

  E["informatica-6ano-4bim"] = { vf: {
    m1: ["V: o teclado manda o que digitamos para dentro do computador: é de entrada.",
      "F: o monitor mostra o resultado para nós. Ele é de saída, não de entrada.",
      "V: as pastas juntam arquivos parecidos, como gavetas, para achar tudo mais rápido.",
      "V: o que não foi salvo fica só na memória e some quando o programa fecha. Por isso, salve sempre (Ctrl + S).",
      "V: metadados são as informações sobre o arquivo, como a data em que foi criado e o tamanho."],
    m2: ["V: algoritmo é a receita: passos em ordem para resolver um problema.",
      "F: a ordem importa. Calçar o sapato antes da meia não dá certo.",
      "V: a repetição (“repita 3 vezes”) faz o mesmo passo várias vezes sem precisar escrever de novo.",
      "V: o “se… então… senão” escolhe o que fazer conforme a situação; isso é seleção.",
      "F: repetir deixa o algoritmo mais curto: em vez de escrever o mesmo passo 4 vezes, escrevo “repita 4 vezes” uma vez só."],
    m3: ["F: cyberbullying machuca de verdade e deve ser levado a sério: guarde as provas, bloqueie e conte a um adulto.",
      "V: misturar letras, números e símbolos deixa a senha mais difícil de adivinhar.",
      "F: aparelhos eletrônicos têm peças que poluem a terra e a água; devem ir para um ponto de coleta.",
      "V: consertar e doar faz o aparelho durar mais e diminui o lixo eletrônico.",
      "V: na dúvida ou com medo, a atitude certa é contar a um adulto de confiança."]
  } };

  E["informatica-7ano-4bim"] = { vf: {
    m1: ["V: rede é isso: aparelhos ligados entre si, como os computadores da nossa sala.",
      "F: a internet não é um computador só: é uma rede de redes, que liga milhões de redes do mundo todo.",
      "V: a mensagem é cortada em pedaços (pacotes), cada um viaja pelo caminho que der e no fim eles são montados de novo.",
      "V: protocolo são as regras combinadas para os aparelhos se entenderem, como as regras de um jogo.",
      "F: o cadeado e o https mostram que a conexão é protegida: os dados viajam criptografados (embaralhados)."],
    m2: ["V: decompor é quebrar o problema grande em partes pequenas, mais fáceis de resolver.",
      "F: reúso é dar um nome a um bloco de passos e chamar esse nome várias vezes, sem reescrever tudo.",
      "V: cada item da lista tem uma posição (1º, 2º, 3º…).",
      "V: bug é o nome do erro no programa; corrigir o bug se chama depurar.",
      "F: depois de corrigir, é preciso testar de novo para ter certeza de que funcionou e de que nada mais quebrou."],
    m3: ["V: prêmio fácil e pressa (“só hoje!”) são os sinais mais comuns de golpe.",
      "F: o código que chega por SMS é a chave da sua conta. Nunca passe para ninguém, nem para amigo.",
      "V: com a verificação em duas etapas, além da senha é preciso um código; fica bem mais difícil invadir a conta.",
      "F: discordar é normal; ofender não. Dá para discordar com respeito.",
      "V: guardar as provas (prints), bloquear e denunciar protegem a vítima e ajudam a resolver."]
  } };

  E["informatica-8ano-4bim"] = { vf: {
    m1: ["V: busca sequencial é olhar um item de cada vez, do primeiro em diante.",
      "F: a busca binária só funciona com a lista em ordem, porque ela joga fora a metade onde o número não pode estar.",
      "V: a cada tentativa, ela olha o meio e descarta a metade que não serve.",
      "V: no método da bolha, compara dois vizinhos; se estiverem fora de ordem, troca. O maior vai “subindo” para o fim.",
      "F: ordenar é colocar os itens em ordem (crescente, decrescente ou alfabética), não apagar itens."],
    m2: ["V: o DNS é a agenda da internet: troca o nome do site (ex.: google.com) pelo número IP do servidor.",
      "F: os cabos submarinos levam quase toda a internet entre os continentes, pelo fundo do mar.",
      "V: data center é um prédio cheio de servidores ligados dia e noite; é onde ficam os sites e a nuvem.",
      "V: em paralelo, a tarefa é dividida e várias partes são feitas ao mesmo tempo, como vários alunos montando um quebra-cabeça.",
      "F: a nuvem guarda os arquivos em servidores de data centers, e o acesso é pela internet."],
    m3: ["V: dado pessoal é qualquer informação que identifica a pessoa, como nome, endereço e telefone.",
      "F: a lanterna só precisa da luz do celular. Pedir os contatos é pedir dado demais: desconfie.",
      "V: verificar quem publicou e a data ajuda a não espalhar notícia falsa ou velha.",
      "F: muitos compartilhamentos não provam nada; notícia falsa também se espalha muito.",
      "V: LGPD é a Lei Geral de Proteção de Dados: ela diz como as empresas podem usar os nossos dados."]
  } };

  E["informatica-9ano-4bim"] = { vf: {
    m1: ["V: no grafo, os pontos são vértices e as ligações entre eles são arestas.",
      "F: menos paradas não quer dizer menor distância; é preciso somar o peso (km ou minutos) de cada aresta.",
      "V: árvore é um grafo sem ciclos (sem caminho que volta ao começo) e que começa num ponto só: a raiz.",
      "V: as pastas são uma árvore: a raiz é o disco (C:), as pastas são os galhos e os arquivos são as folhas.",
      "F: na árvore de decisão, as perguntas ficam nos galhos; as folhas são as respostas finais."],
    m2: ["V: criptografar é embaralhar a mensagem; só quem tem a chave consegue desembaralhar e ler.",
      "V: na cifra de César com chave 3, cada letra anda 3 casas: A → B → C → D.",
      "F: com 4 dígitos há 10 mil senhas possíveis; com 6 dígitos, 1 milhão. A de 4 é mais fácil de descobrir.",
      "V: ransomware é o vírus sequestrador: tranca os arquivos e pede resgate em dinheiro. Por isso, ter backup é importante.",
      "F: engenharia social não é programa: é enganar a pessoa (com conversa, pressa, falso suporte) para ela mesma entregar a senha."],
    m3: ["F: o que está na internet tem autor. Para usar, é preciso dar o crédito ou pedir autorização.",
      "V: cada pessoa decide onde a sua imagem aparece; postar a foto de alguém sem permissão desrespeita esse direito.",
      "V: deepfake é um vídeo, uma foto ou um áudio falso feito com inteligência artificial, parecendo real.",
      "V: CC BY é uma licença Creative Commons: pode usar, desde que coloque o nome do autor.",
      "F: notícia falsa é espalhada por vários motivos: dinheiro (cliques), política, humor, ódio ou engano."]
  } };

  E["informatica-8ano-4bim-trilha"] = { vf: {
    m1: ["V: a chamada tem os nomes em fila, um depois do outro: é uma lista.", "F: crescente é do menor para o maior (1, 2, 3).", "V: procurar um por um é a busca sequencial."],
    m2: ["V: o roteador é a caixinha com luzes que espalha o Wi-Fi.", "F: a nuvem são computadores de empresas, ligados à internet, que guardam as fotos.", "V: na fila, cada um espera a sua vez, como os pacotes na internet."],
    m3: ["F: a senha é só minha. Não conto para ninguém, nem para os colegas.", "V: o endereço da casa identifica a pessoa: é dado pessoal.", "V: pressa (URGENTE!!!) e falta de autor são sinais de mensagem falsa."]
  } };
  E["informatica-6ano-4bim-trilha"] = { vf: {
    m1: ["V: o teclado manda o que eu digito para o computador: entrada.", "F: o monitor mostra a imagem: é de saída.", "V: a pasta guarda os arquivos organizados, como uma gaveta."],
    m2: ["V: algoritmo é uma lista de passos em ordem.", "F: a ordem importa: primeiro a meia, depois o sapato.", "V: “repita 3 vezes” faz o mesmo passo 3 vezes."],
    m3: ["F: cyberbullying machuca. Se acontecer, conto a um adulto.", "V: letras, números e símbolos juntos deixam a senha forte.", "V: na dúvida ou com medo, conto a um adulto de confiança."]
  } };
  E["informatica-7ano-4bim-trilha"] = { vf: {
    m1: ["V: a internet liga computadores e celulares do mundo todo.", "F: a mensagem é dividida em pedaços (pacotes) e montada no fim.", "V: o cadeado 🔒 mostra que o site protege os dados."],
    m2: ["V: dividir em partes deixa a tarefa grande mais fácil.", "F: bug é um erro do programa, não um acerto.", "V: depois de corrigir, testo de novo para ver se funcionou."],
    m3: ["F: o código que chega no celular é secreto: não passo para ninguém.", "V: prêmio fácil e pressa são sinais de golpe.", "V: se sofrer cyberbullying, conto a um adulto de confiança."]
  } };
  E["informatica-9ano-4bim-trilha"] = { vf: {
    m1: ["V: no grafo, os pontos (vértices) são ligados por linhas (arestas).", "F: o caminho mais curto é o de menor soma.", "V: a árvore de decisão faz perguntas de sim ou não até chegar à resposta."],
    m2: ["V: na cifra de César, cada letra anda algumas casas no alfabeto (com chave 1, A vira B).", "F: senha não se passa para ninguém, ainda mais com pressa: é sinal de golpe.", "V: com uma cópia (backup), se o ransomware trancar os arquivos, eu ainda tenho tudo."],
    m3: ["F: copiar e dizer que é meu é plágio. Tenho que dar o crédito ao autor.", "V: antes de postar a foto de alguém, peço autorização.", "V: boca que não acompanha a fala é um sinal comum de deepfake."]
  } };
  // explicações de atividades sem resolução comentada (por id da atividade)
  const at = (aid, o) => { E[aid] = E[aid] || {}; E[aid].at = Object.assign(E[aid].at || {}, o); };
  at("informatica-5ano-4bim", {
    "m1-pratica-2": "Hardware é a peça que dá para tocar (mouse, pen drive, teclado). Software é o programa que roda dentro do computador (Windows, jogo, navegador). Pergunta-chave para a turma: “dá para pegar na mão?”.",
    "m1-basico-3": "Mostre onde ficam as letras, a barra de espaço e o acento. Entrada leva informação para dentro (teclado, mouse, microfone); saída mostra o resultado (monitor, impressora, caixa de som).",
    "m4-basico-3": "Cada tecnologia resolve um tipo de problema: calculadora para contas, chamada de vídeo para falar com quem está longe, Bloco de Notas para escrever e programa de desenho para desenhar. Pergunte: “qual ferramenta eu pego para isso?”.",
    "m4-basico-4": "Qualquer cuidado do Para começar vale: conferir quem escreveu, desconfiar de mensagem urgente, dar crédito ao autor, perguntar a um adulto. Embaixo vai “Criado por:” e o nome, porque quem cria é o autor."
  });
  at("informatica-6ano-4bim", {
    "m1-basico-4": "Mostre no projetor uma vez: botão direito → Novo → Pasta; depois Arquivo → Salvar como, escolhendo a pasta. A resposta é o nome do arquivo: Sobre mim. Reforce: o que não foi salvo some quando o programa fecha.",
    "m1-desafio-1": "Dentro da pasta do aluno devem ficar 2 pastas (Textos e Desenhos) e o arquivo Sobre mim vai para Textos. Em Propriedades aparecem os metadados: tamanho, data de criação e tipo.",
    "m3-basico-4": "Qualquer frase de 4 palavras ou mais sobre respeito na internet ou consumo consciente (consertar, doar, descartar no ponto de coleta) vale.",
    "pf-desafio-1": "Revisão do bimestre: um termo de cada missão. Leia cada significado em voz alta e peça que a turma diga o termo antes de clicar."
  });
  at("informatica-7ano-4bim", {
    "m3-basico-4": "As dicas estão no Para começar, em “Proteja-se”: não passar códigos, senha forte, verificação em duas etapas, desconfiar de pressa e prêmio, não clicar em link estranho, bloquear e denunciar.",
    "pf-desafio-1": "Revisão do bimestre: pacote e IP (M1), decomposição e bug (M2), phishing e verificação em duas etapas (M3). Leia o significado e deixe a turma dizer o termo."
  });
  at("informatica-8ano-4bim", {
    "pf-desafio-1": "Revisão do bimestre: busca binária e bolha (M1), DNS e paralelismo (M2), LGPD e pegada digital (M3). Peça um exemplo do dia a dia para cada termo."
  });
  at("informatica-9ano-4bim", {
    "m1-turbo-1": "Desenhe o grafo no quadro: Ana–Bruno, Ana–Carla, Bruno–Davi, Carla–Davi, Carla–Elisa. Carla tem 3 arestas. Ana → Bruno → Davi → Carla → Ana volta ao começo: é um ciclo. Árvore nunca tem ciclo, então esse grafo não é árvore.",
    "m3-basico-4": "Link + prêmio fácil = golpe para ganhar dinheiro. A atitude certa: não clicar, não compartilhar e avisar quem mandou.",
    "m3-basico-6": "Quem cria é o autor, por isso assina “Criado por:”. A licença CC BY deixa os outros usarem e compartilharem, desde que deem o crédito ao autor.",
    "m3-basico-5": "Pergunte sempre: quem ganha com isso? Link cheio de propaganda = dinheiro; montagem de candidato na véspera da eleição = política; site de piada que muita gente leva a sério = humor; perfil falso com apelidos ofensivos = ódio.",
    "pf-desafio-1": "Revisão do bimestre: aresta e folha (M1), chave e força bruta (M2), plágio e deepfake (M3). Peça um exemplo de cada um."
  });
  at("informatica-8ano-4bim-trilha", { "m1-basico-5": "Do menor para o maior é a ordem crescente: 1, 2, 3, 4.", "m2-basico-4": "O caminho tem 3 desenhos: o celular manda, o roteador (Wi-Fi) leva, a nuvem guarda.", "m3-basico-4": "Digitar MEUS DADOS lembra que nome, endereço e telefone são meus e eu protejo." });
  at("informatica-6ano-4bim-trilha", { "m1-basico-4": "Ctrl + S salva. O arquivo se chama EU: é o nome que ele digitou na hora de salvar.", "m3-basico-4": "Verde é a cor da natureza: o cartaz lembra de cuidar do planeta (lixo eletrônico no lugar certo)." });
  at("informatica-7ano-4bim-trilha", { "m1-basico-4": "O portal usa https, por isso aparece o cadeado 🔒: os dados viajam protegidos.", "m3-basico-4": "A frase lembra a regra mais importante contra golpe: o código que chega no celular não se passa para ninguém." });
  at("informatica-9ano-4bim-trilha", { "m2-basico-4": "Com chave 1, cada letra anda 1 casa no alfabeto: S → T, O → P, L → M. SOL vira TPM.", "m3-basico-4": "Quem monta o cartaz é o autor: foi ele mesmo (Eu)." });
})();

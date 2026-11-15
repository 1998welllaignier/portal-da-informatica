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

  /* ===== 2027 · 8º ano · 1º bimestre ===== */
  E["informatica-8ano-2027-1bim"] = { vf: {
    m1: ["V: a lista guarda vários itens em ordem, com um nome só (também chamada de vetor ou array).",
      "F: CHAMADA[1] é Ana; CHAMADA[2] é Bruno. As posições começam no 1.",
      "V: tamanho = quantos itens a lista tem; a última posição é igual ao tamanho.",
      "V: 3, 8, 12, 20 vai do menor para o maior: crescente.",
      "F: percorrer é passar por todos os itens, do primeiro ao último."],
    m2: ["V: inserir no fim acrescenta um item; ninguém muda de lugar.",
      "V: quem estava atrás anda uma posição para a frente para ocupar o lugar vazio.",
      "F: inserir na posição 1 empurra todos os outros uma posição para trás.",
      "V: o contador começa em 0 e soma 1 a cada vez que o item passa no teste.",
      "F: remover tira um item, então o tamanho diminui."],
    m3: ["V: a busca sequencial olha um por um, em sequência.",
      "F: a busca sequencial funciona em qualquer lista; quem precisa de lista ordenada é a binária.",
      "V: 5, 8, 2, 9: o 9 aparece na 4ª comparação.",
      "F: o primeiro da lista é o melhor caso (1 comparação); o pior é o último ou não estar na lista.",
      "V: no pior caso, olha os 1.000 itens."],
    m4: ["F: a busca binária só funciona em lista ordenada; sem ordem, não dá para saber que metade descartar.",
      "V: começa sempre pelo item do meio.",
      "V: a cada comparação, metade da lista é descartada.",
      "V: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1: no máximo 7 comparações.",
      "F: em lista grande e ordenada, a binária é muito mais rápida (1.000 itens: 10 comparações contra 1.000)."],
    m5: ["V: o método da bolha compara sempre itens vizinhos.",
      "F: para crescente, troca quando o da esquerda é MAIOR.",
      "V: a cada passada, o maior que falta sobe para o final, como uma bolha.",
      "V: uma passada sem trocas mostra que a lista já está ordenada.",
      "F: 9, 6, 3, 1 vai do maior para o menor: é decrescente."],
    m6: ["V: recursão resolve o problema com uma versão menor dele mesmo.",
      "V: o caso base é a condição de parada; sem ele, não para.",
      "F: o caso base da matrioska é a última bonequinha, a que não abre.",
      "V: sem caso base, a recursão não para (como dois espelhos frente a frente).",
      "V: cada pasta pode ter pastas dentro, do mesmo jeito: estrutura recursiva."],
    m7: ["V: a cada rodada, procura o menor do que sobrou (o mínimo).",
      "F: na 1ª rodada, o menor vai para a PRIMEIRA posição.",
      "V: no máximo uma troca por rodada; por isso troca menos que a bolha.",
      "V: a bolha compara sempre vizinhos.",
      "V: depois da 1ª rodada, a 1ª posição já tem o menor de todos e não muda mais."],
    m8: ["V: fractal tem autossemelhança: a parte parece o todo.",
      "V: no triângulo de Sierpinski, cada triângulo vira 3 menores.",
      "F: no nível 2 são 9 triângulos (3 × 3), não 6.",
      "V: fractais repetem a mesma regra dentro de si: recursão.",
      "F: a bola lisa não repete a forma do todo nas partes; não é fractal."]
  } };

  /* ===== 2027 · 7º ano · 1º bimestre ===== */
  E["informatica-7ano-2027-1bim"] = { vf: {
    m1: ["V: o computador lê os blocos de cima para baixo, um de cada vez.",
      "F: quem escolhe um caminho é o se … faça … senão. O repita faz os blocos de dentro várias vezes.",
      "V: dentro do repita, tudo se repete; fora (embaixo), aparece uma vez só.",
      "V: variável é uma caixinha com nome que guarda um valor (ex.: nota = 7).",
      "V: programa é um algoritmo escrito numa linguagem que o computador entende; aqui, blocos."],
    m2: ["V: a lista guarda vários itens numa variável só, em ordem.",
      "F: posição 1 = maçã, posição 2 = uva. As posições começam no 1.",
      "V: tamanho de conta quantos itens a lista tem.",
      "V: o para cada dá uma volta para cada item da lista.",
      "F: numa lista de 4 itens só existem as posições de 1 a 4; a 5 não existe."],
    m3: ["V: registro (ficha) junta informações diferentes de uma mesma coisa, como nome, idade e turma.",
      "F: no registro achamos pelo nome do campo (nome, idade); a posição é coisa da lista.",
      "V: “idade” é o nome do campo e 12 é o valor guardado nele.",
      "V: lista de fichas = tabela: cada ficha é uma linha e cada campo, uma coluna.",
      "V: o contato tem campos: nome, telefone, foto, aniversário."],
    m4: ["V: bug (inseto, em inglês) é um erro no programa.",
      "V: depurar (debug) é achar e consertar os erros.",
      "F: mudando tudo de uma vez, não dá para saber o que resolveu. Muda-se uma coisa de cada vez e testa.",
      "V: comparar obtido × esperado mostra em que linha começou a diferença.",
      "V: a repetição sem fim não termina porque a condição de parar nunca acontece."],
    m5: ["V: decompor é dividir o problema grande em partes menores.",
      "F: o bloco próprio é escrito uma vez só e chamado quando precisar; essa é a vantagem.",
      "V: mudou o bloco próprio, muda em todo lugar onde ele é chamado.",
      "V: chamar o bloco é usá-lo no programa.",
      "V: dividir o trabalho em grupo em partes é decompor."],
    m6: ["V: o piloto fica com o mouse e o teclado e monta os blocos.",
      "F: o navegador não pega o mouse: ele lê, planeja, confere e procura erros.",
      "V: a dupla reveza os papéis (a cada 10 minutos).",
      "F: o certo é testar depois de cada parte; testando só no fim, os erros se acumulam.",
      "V: o erro é da dupla; ninguém culpa o colega."],
    m7: ["V: item errado da lista costuma ser posição errada (lembrar que começa no 1).",
      "V: hipótese é o palpite sobre onde está o erro, que testamos mudando uma coisa.",
      "F: basta consertar dentro do bloco próprio, uma vez só; todas as chamadas ficam certas.",
      "V: uma mudança por vez mostra o que resolveu.",
      "V: “(sem idade)” aparece quando o campo pedido não existe com aquele nome (ex.: idadee)."],
    m8: ["V: gabarito é a lista das respostas certas.",
      "V: contador começa em 0 e soma 1 a cada vez que conta algo.",
      "V: comparamos item 1 com item 1, item 2 com item 2, e assim por diante.",
      "F: alterar acertos por 1 soma 1 à variável; não apaga nada.",
      "V: placar de jogo é um contador de pontos."]
  } };

  /* ===== 2027 · 6º ano · 1º bimestre ===== */
  E["informatica-6ano-2027-1bim"] = { vf: {
    m1: ["V: o duplo clique (dois cliques rapidinhos) abre pastas, arquivos e programas; um clique só apenas seleciona.",
      "F: o ❌ fecha a janela e o programa. Quem esconde na barra de tarefas é o ➖ Minimizar.",
      "V: Backspace é o “espaço para trás”: apaga a letra que está antes do cursor.",
      "V: segurando Shift, a letra sai maiúscula (e os números viram os símbolos de cima).",
      "V: girar a rodinha do meio sobe e desce a página."],
    m2: ["F: o microfone recebe a nossa voz e leva para dentro do computador: é de entrada.",
      "V: o processador (CPU, Unidade Central de Processamento) faz os cálculos; é o “cérebro”.",
      "V: a impressora entrega o resultado no papel: é de saída.",
      "V: a tela touchscreen recebe o toque (entrada) e mostra a imagem (saída).",
      "F: a RAM apaga tudo quando o computador desliga. Quem guarda com o computador desligado é o armazenamento (HD, SSD)."],
    m3: ["V: o mouse é uma peça física, dá para pegar com a mão: hardware.",
      "F: o navegador é um programa (aplicativo): software.",
      "V: o sistema operacional liga primeiro e comanda as peças e os outros programas.",
      "V: Android (celular) e Windows (computador) são sistemas operacionais.",
      "F: sem software o hardware não faz nada; um precisa do outro."],
    m4: ["F: .mp3 é áudio (música). Imagem é .jpg ou .png.",
      "V: pastas podem ter outras pastas dentro, como gavetas dentro de um armário.",
      "V: o caminho é o endereço do arquivo: Documentos › Escola › trabalho.docx.",
      "V: Ctrl + S salva (S de save, salvar em inglês).",
      "F: “sem título 3” não diz nada do que tem dentro. Nome bom diz o assunto, como redacao-meio-ambiente."],
    m5: ["V: idade serve para contas (daqui a 3 anos, por exemplo): é número.",
      "F: ninguém soma telefones. Telefone é texto feito de algarismos.",
      "V: dado lógico só pode ser verdadeiro ou falso (sim ou não).",
      "V: tabela tem linhas (deitadas) e colunas (em pé).",
      "V: na playlist as músicas vêm uma depois da outra, em ordem: é uma lista."],
    m6: ["V: na internet, tudo em maiúsculas parece grito.",
      "F: a senha é como a chave de casa: não se passa para ninguém, nem para o melhor amigo.",
      "V: a imagem é da pessoa; ela decide se pode postar.",
      "V: desconhecido pedindo segredo é sinal de perigo: parar a conversa e contar para um adulto de confiança.",
      "F: compartilhar espalha a ofensa e piora. O certo é apoiar o colega, guardar o print e contar a um adulto ou denunciar."],
    m7: ["V: os risquinhos do F e do J guiam os indicadores para a fileira base sem olhar.",
      "F: no teclado ABNT2 o acento vem primeiro e depois a letra (´ e depois e).",
      "V: na fileira base da mão direita: J K L Ç.",
      "V: Shift segurado + letra = maiúscula.",
      "V: os polegares ficam na barra de espaço."],
    m8: ["V: Ctrl + C copia e Ctrl + V cola.",
      "V: Ctrl + Z desfaz o último passo.",
      "F: recortar (Ctrl + X) tira o original do lugar. Quem deixa o original é copiar (Ctrl + C).",
      "V: Alt + Tab troca de uma janela aberta para outra.",
      "V: Ctrl + A seleciona tudo (A de all, tudo em inglês)."]
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
      "V: na dúvida ou com medo, a atitude certa é contar a um adulto de confiança."],
    m4: ["V: o bit é a menor informação: 0 ou 1, como lâmpada apagada ou acesa.",
      "V: 8 bits = 1 byte, mais ou menos o espaço de uma letra.",
      "F: GB é muito MAIOR que KB. Ordem: byte → KB → MB → GB → TB, cada um cerca de mil vezes o anterior.",
      "V: compactar junta tudo em um .zip e diminui o tamanho; para usar, descompacta (extrai).",
      "F: .mp4 é vídeo. Texto é .txt (ou .docx)."]
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
      "V: guardar as provas (prints), bloquear e denunciar protegem a vítima e ajudam a resolver."],
    m4: ["V: o grafo tem duas partes: os vértices (pontos: lugares, pessoas) e as arestas (linhas que ligam os pontos).",
      "F: o mais curto é o de MENOR SOMA dos pesos. Ex.: Casa → Padaria → Escola (3 + 2 = 5) ganha da rua direta (9), mesmo tendo uma parada a mais.",
      "V: o peso é o número escrito na aresta: pode ser minutos, metros ou reais, conforme o problema.",
      "V: grau = quantas arestas chegam no vértice. Ana com 3 amigos tem grau 3.",
      "V: o aplicativo guarda as ruas como um grafo e soma os pesos para achar a rota mais rápida."]
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
      "V: LGPD é a Lei Geral de Proteção de Dados: ela diz como as empresas podem usar os nossos dados."],
    m4: ["V: é um contrato. O clique vale como “concordo”, mesmo que a pessoa não tenha lido.",
      "F: o serviço grátis costuma ser pago com propaganda, e os dados ajudam a escolher os anúncios.",
      "V: a parte de compartilhamento (na política de privacidade) diz se os dados vão para parceiros.",
      "V: a LGPD dá o direito de saber, corrigir, pedir para apagar os dados e retirar o consentimento.",
      "F: os termos podem mudar; por isso o aviso “Atualizamos nossos termos” merece atenção."]
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
      "F: notícia falsa é espalhada por vários motivos: dinheiro (cliques), política, humor, ódio ou engano."],
    m4: ["V: a IA aprende com muitos exemplos (dados) e descobre padrões; não pensa como uma pessoa.",
      "F: a IA erra, e o chatbot pode inventar respostas com toda a certeza. Sempre conferir.",
      "V: exemplos poucos ou de um tipo só ensinam errado: isso é viés.",
      "V: o aplicativo aprende com o que você assistiu e recomenda o próximo vídeo.",
      "F: dados pessoais (seus ou dos colegas) não vão para o chatbot."]
  } };

  E["informatica-8ano-4bim-trilha"] = { vf: {
    m1: ["V: a chamada tem os nomes em fila, um depois do outro: é uma lista.", "F: crescente é do menor para o maior (1, 2, 3).", "V: procurar um por um é a busca sequencial."],
    m2: ["V: o roteador é a caixinha com luzes que espalha o Wi-Fi.", "F: a nuvem são computadores de empresas, ligados à internet, que guardam as fotos.", "V: na fila, cada um espera a sua vez, como os pacotes na internet."],
    m3: ["F: a senha é só minha. Não conto para ninguém, nem para os colegas.", "V: o endereço da casa identifica a pessoa: é dado pessoal.", "V: pressa (URGENTE!!!) e falta de autor são sinais de mensagem falsa."],
    m4: ["V: “Li e aceito” é o contrato com as regras do aplicativo.", "F: o grátis costuma ser pago com propaganda.", "V: a LGPD dá o direito de pedir para apagar os dados."]
  } };
  E["informatica-6ano-4bim-trilha"] = { vf: {
    m1: ["V: o teclado manda o que eu digito para o computador: entrada.", "F: o monitor mostra a imagem: é de saída.", "V: a pasta guarda os arquivos organizados, como uma gaveta."],
    m2: ["V: algoritmo é uma lista de passos em ordem.", "F: a ordem importa: primeiro a meia, depois o sapato.", "V: “repita 3 vezes” faz o mesmo passo 3 vezes."],
    m3: ["F: cyberbullying machuca. Se acontecer, conto a um adulto.", "V: letras, números e símbolos juntos deixam a senha forte.", "V: na dúvida ou com medo, conto a um adulto de confiança."],
    m4: ["V: tudo no computador vira bits, 0 e 1.", "F: o filme (GB) é muito maior que o texto (KB).", "V: a lupa 🔍 busca o arquivo pelo nome."]
  } };
  E["informatica-7ano-4bim-trilha"] = { vf: {
    m1: ["V: a internet liga computadores e celulares do mundo todo.", "F: a mensagem é dividida em pedaços (pacotes) e montada no fim.", "V: o cadeado 🔒 mostra que o site protege os dados."],
    m2: ["V: dividir em partes deixa a tarefa grande mais fácil.", "F: bug é um erro do programa, não um acerto.", "V: depois de corrigir, testo de novo para ver se funcionou."],
    m3: ["F: o código que chega no celular é secreto: não passo para ninguém.", "V: prêmio fácil e pressa são sinais de golpe.", "V: se sofrer cyberbullying, conto a um adulto de confiança."],
    m4: ["V: no grafo, cada lugar é um ponto, que se chama vértice.", "F: o mais curto é o de MENOR soma (5 minutos ganha de 9).", "V: o número escrito na rua é o peso (os minutos)."]
  } };
  E["informatica-9ano-4bim-trilha"] = { vf: {
    m1: ["V: no grafo, os pontos (vértices) são ligados por linhas (arestas).", "F: o caminho mais curto é o de menor soma.", "V: a árvore de decisão faz perguntas de sim ou não até chegar à resposta."],
    m2: ["V: na cifra de César, cada letra anda algumas casas no alfabeto (com chave 1, A vira B).", "F: senha não se passa para ninguém, ainda mais com pressa: é sinal de golpe.", "V: com uma cópia (backup), se o ransomware trancar os arquivos, eu ainda tenho tudo."],
    m3: ["F: copiar e dizer que é meu é plágio. Tenho que dar o crédito ao autor.", "V: antes de postar a foto de alguém, peço autorização.", "V: boca que não acompanha a fala é um sinal comum de deepfake."],
    m4: ["V: a IA aprende com muitos exemplos.", "F: a IA erra; por isso conferimos.", "V: dados pessoais não vão para o chatbot."]
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
  at("informatica-8ano-4bim-trilha", { "m4-basico-4": "A frase lembra a regra da missão: ler (ou pelo menos procurar o mais importante) antes de aceitar.", "m1-basico-5": "Do menor para o maior é a ordem crescente: 1, 2, 3, 4.", "m2-basico-4": "O caminho tem 3 desenhos: o celular manda, o roteador (Wi-Fi) leva, a nuvem guarda.", "m3-basico-4": "Digitar MEUS DADOS lembra que nome, endereço e telefone são meus e eu protejo." });
  at("informatica-6ano-4bim-trilha", { "m4-basico-4": "0 E 1: os dois únicos valores de um bit.", "m1-basico-4": "Ctrl + S salva. O arquivo se chama EU: é o nome que ele digitou na hora de salvar.", "m3-basico-4": "Verde é a cor da natureza: o cartaz lembra de cuidar do planeta (lixo eletrônico no lugar certo)." });
  at("informatica-7ano-4bim-trilha", { "m4-basico-2": "3 + 2 = 5 minutos pela Padaria; a rua direta é 9.", "m1-basico-4": "O portal usa https, por isso aparece o cadeado 🔒: os dados viajam protegidos.", "m3-basico-4": "A frase lembra a regra mais importante contra golpe: o código que chega no celular não se passa para ninguém." });
  at("informatica-9ano-4bim-trilha", { "m4-basico-4": "A frase lembra a regra principal: a IA erra, então eu confiro.", "m2-basico-4": "Com chave 1, cada letra anda 1 casa no alfabeto: S → T, O → P, L → M. SOL vira TPM.", "m3-basico-4": "Quem monta o cartaz é o autor: foi ele mesmo (Eu)." });
})();

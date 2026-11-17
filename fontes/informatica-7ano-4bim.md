# Apostila de Informática – 7º Ano – 4º Bimestre
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 7º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
| ✍️ Número do computador |  |

## 📊 Quadro de notas do bimestre
*Preenchido pelo professor. Esta apostila será entregue a você no final do bimestre.*
| Encontro | 📅 Data (dia / mês) | 🟢 Básico | 🟡 Desafio (0,25) | 🔴 Turbo (0,25) |
| Missão 1 | ........ / ........ |  |  |  |
| Missão 2 | ........ / ........ |  |  |  |
| Missão 3 | ........ / ........ |  |  |  |
| Missão 4 | ........ / ........ |  |  |  |
| 🔁 Revisão | ........ / ........ |  |  |  |
| Projeto final | ........ / ........ |  |  |  |
| **Total** |  |  |  |  |

| Cálculo da nota | Pontos |
| **A – Nota da apostila:** Básico até 4,0 (dividido pelas aulas de missão que a sua turma teve, incluindo a M4 e a Revisão quando houve) + Desafio/Turbo (bônus até 1,0) — máximo 5,0 |  |
| **B – Nota da prova no Wayground:** ______ % de acertos ÷ 20 — máximo 5,0 |  |
| **Nota do bimestre = A + B · média para aprovação: 5,0** (0 a 10) |  |

| ✅ Carimbo e visto do professor |
|  /  /  /  /  /  |

## 📘 Como usar esta apostila
Neste bimestre você vai cumprir **3 missões** e um **projeto final**. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema.
| Missão | Tema |
| 🌐 Missão 1 – Redes e internet | Mundo Digital |
| ⚙️ Missão 2 – Decompor e corrigir algoritmos | Pensamento Computacional |
| 🛡️ Missão 3 – Segurança e convivência digital | Mundo Digital e Cultura Digital |
| 🏁 Projeto final – Meu Passaporte de Missões | Todos os temas |

**Cada missão tem 3 níveis:**
| Nível | Quem faz | O que vale |
| 🟢 Básico | Todos os alunos | Obrigatório: vale **1,0 ponto** por missão e libera os jogos livres |
| 🟡 Desafio | Quem terminou o Básico | **+0,25 ponto**: aumenta a sua nota do bimestre |
| 🔴 Turbo | Quem terminou o Desafio | **+0,25 ponto**: aumenta ainda mais a sua nota |

**Ícones da apostila:**
- 💡 **Para começar** – a explicação do dia
- 🎯 **Missão** – as atividades que você faz no computador; o portal confere na hora
- ✅ **Perguntas rápidas** – verdadeiro ou falso para conferir
- 🧠 **Resumo da Aula** – leia com a turma; ele ajuda a estudar para a avaliação
🔎 **Todas as respostas estão na apostila:** leia o **💡 Para começar** e o **📖 O que significa?**. Errou? Leia de novo com calma, peça uma **💡 Dica** ou veja a **📘 resolução comentada**. Você consegue fazer tudo sozinho!
**Regra de ouro:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor: não precisa chamar ninguém.
## 🌐 Missão 1 – Redes e internet: como os dados viajam
**Objetivo:** entender o que é uma rede de computadores e como as mensagens viajam pela internet em pacotes, seguindo regras chamadas protocolos.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Uma **rede de computadores** é um grupo de aparelhos ligados entre si para trocar informações e dividir recursos, como a internet e a impressora. A nossa sala de informática é uma rede: os computadores dos alunos estão ligados ao computador do professor.
| Parte da rede | O que faz | Exemplos |
| Dispositivos | Enviam e recebem dados | Computador, celular, tablet |
| Cabo ou Wi-Fi | Ligam os aparelhos à rede | Cabo de rede, sinal sem fio |
| Roteador | Encaminha os dados pelo caminho certo | Aparelho com antenas da casa ou da escola |
| Servidor | Guarda sites, vídeos e mensagens e responde aos pedidos | Servidores de sites, de jogos e de aplicativos |

A **internet** é uma rede de redes: milhões de redes ligadas no mundo todo. Cada aparelho tem um **endereço IP**, que funciona como o endereço de uma casa.
Quando você envia uma mensagem, ela é dividida em pedaços chamados **pacotes**. Cada pacote leva o endereço de quem envia, o endereço de quem recebe e um número. Os pacotes podem viajar por caminhos diferentes e chegar fora de ordem; o aparelho que recebe usa os números para montar a mensagem.
Para tudo isso funcionar, os aparelhos seguem **protocolos**: regras combinadas para que todos se entendam, como as regras de trânsito. Exemplos: **TCP/IP** (divide em pacotes e entrega) e **HTTPS** (abre páginas com segurança; aparece um cadeado 🔒 no navegador).
**A internet funciona como o correio:**
| No correio | Na internet |
| Endereço de quem recebe a carta | **Endereço IP** |
| Carteiros e agências que levam a carta | **Roteadores** |
| Regras do correio (CEP, selo, envelope) | **Protocolos** |
| Carta longa enviada em várias folhas numeradas | **Pacotes** |

**A rede da nossa escola, por dentro:** a internet chega da rua por um cabo de **fibra óptica** (cabo que leva os dados em forma de luz) e entra pela cozinha, onde fica o **rack** (o armário dos aparelhos de rede). O caminho até o computador da sala de informática é este:
| Ordem | Parte do caminho | O que faz |
| 1 | Fibra óptica chegando da rua | Traz a internet do provedor até a escola |
| 2 | Roteador MikroTik no rack da cozinha | Distribui a internet para a escola toda (ele não tem antenas: não faz Wi-Fi) |
| 3 | Switch gigabit de 24 portas | **Switch** é o aparelho que divide a rede por cabo para vários aparelhos; **gigabit** quer dizer até 1 Gbps (1.000 Mbps) |
| 4 | Cabo CAT6 por baixo do chão | Cabo de rede que leva a internet até as salas |
| 5 | Tomada de rede na parede ou no chão da sala | Onde o cabo chega na sala |
| 6 | Switch Fast Ethernet da baia | Switch pequeno, perto dos computadores; vai só até **100 Mbps** |
| 7 | Computador da sala de informática | Onde você usa a internet |

Nas **salas de aula comuns**, o cabo chega a um **AP** (*Access Point*, ponto de acesso): o aparelho que recebe a rede pelo cabo e a transforma em **Wi-Fi** para os celulares.
**Mbps** (megabits por segundo) mede quantos dados passam por segundo: quanto maior, mais rápido. **A parte mais lenta manda:** a velocidade de todo o caminho fica limitada pela parte mais lenta, como uma estrada larga que termina numa ponte estreita (os carros passam na velocidade da ponte). O cabo do chão aguenta até 1 Gbps, mas o switch da baia vai só até 100 Mbps; por isso, chegam **no máximo 100 Mbps** ao seu computador.
### 📖 O que significa?
- **Rede**: aparelhos ligados entre si para trocar informações e dividir recursos, como a internet e a impressora.
- **Internet** (*inter* = entre; *net* = rede): a rede que liga as redes do mundo inteiro.
- **Wi-Fi**: nome de marca da rede sem fio, que leva os dados por ondas de rádio. Não é uma sigla de verdade. Onde eu vejo: o símbolo de leque 📶 no celular.
- **Roteador** (de *rota* = caminho; em inglês, *router*): aparelho que escolhe o caminho dos dados e liga a rede da casa ou da escola à internet. Onde eu vejo: a caixinha com luzes e antenas que a empresa de internet instala.
- **Servidor** (de *servir*): computador que fica ligado o tempo todo, guardando sites, vídeos e mensagens e respondendo aos pedidos.
- **IP** (*Internet Protocol*, Protocolo de Internet): o número que identifica cada aparelho na rede, como o endereço de uma casa (exemplo: 192.168.0.12). Onde eu vejo: no celular, em Configurações → Wi-Fi → detalhes da rede. Para quê: cada pacote saber de onde saiu e para onde vai.
- **Pacote**: cada pedaço da mensagem, com o endereço de quem envia, o de quem recebe e um número.
- **Protocolo**: conjunto de regras combinadas para os aparelhos se entenderem, como as regras de trânsito.
- **TCP** (*Transmission Control Protocol*, Protocolo de Controle de Transmissão): divide a mensagem em pacotes, numera cada um, confere se todos chegaram e pede de novo o que se perdeu. **TCP/IP** é a dupla que faz a internet funcionar: o TCP cuida da entrega e o IP, do endereço.
- **HTTP** (*HyperText Transfer Protocol*, Protocolo de Transferência de Hipertexto): as regras que o navegador usa para pedir e receber páginas. *Hipertexto* é texto com links.
- **HTTPS** (o *S* é de *Secure*, seguro): o HTTP com os dados embaralhados (criptografados) no caminho. Onde eu vejo: no começo do endereço do site e no cadeado 🔒 ao lado. Para quê: ninguém no caminho conseguir ler sua senha ou seus dados.
- **Navegador**: o programa que abre os sites, como Chrome, Edge e Firefox.
- **Cabo de par trançado**: o cabo de rede comum, com 8 fios de cobre enrolados de dois em dois (4 pares). Onde eu vejo: no cabo azul ou cinza ligado atrás do computador. Para quê: levar os dados por cabo, protegidos da interferência.
- **RJ45** (*Registered Jack 45*, conector registrado número 45): o plugue transparente com trava na ponta do cabo de rede. Onde eu vejo: na entrada de rede do computador, do switch e da tomada de rede.
- **CAT5, CAT5e e CAT6** (*CAT* = categoria): categorias de cabo de rede. O CAT5 vai até 100 Mbps, o CAT5e até 1 Gbps e o CAT6 até 10 Gbps em trechos curtos. O CAT6 tem a trança mais apertada e uma cruz de plástico entre os pares, por isso aguenta sinais mais rápidos. Onde eu vejo: escrito na capa do cabo.
- **Interferência**: "barulho" elétrico de motores, lâmpadas e outros cabos que atrapalha o sinal. A trança dos fios ajuda a cancelar.
- **Diafonia** (em inglês, *crosstalk*): quando o sinal de um par de fios vaza para o par vizinho, como a conversa da mesa ao lado.
- **MHz** (megahertz): milhões de vezes por segundo; mede o quanto o sinal vibra no fio. O CAT5e aguenta até 100 MHz e o CAT6, até 250 MHz.
### 🌎 Onde eu uso isso?
- O **Wi-Fi** da sua casa ou da escola é uma rede: o roteador liga os aparelhos à internet.
- Cada áudio ou foto que você manda no WhatsApp viaja dividido em **pacotes**.
- Quando o vídeo **trava**, é porque os pacotes estão chegando devagar.
- O **cadeado** do navegador aparece quando você compra pela internet ou entra no site do banco.
| ✍️ Quais aparelhos da sua casa ou da escola estão ligados a uma rede? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Numere de 1 a 5 o caminho de uma mensagem do seu celular até o celular de um amigo:
| Ordem | Etapa |
|  | O servidor do aplicativo envia os pacotes ao celular do amigo |
|  | Meu celular divide a mensagem em pacotes |
|  | O celular do amigo junta os pacotes em ordem e mostra a mensagem |
|  | Os pacotes passam pelo roteador da minha casa |
|  | Os pacotes viajam pela internet até o servidor do aplicativo |

- [ ] Os pacotes abaixo chegaram **fora de ordem**. Escreva a ordem certa e a mensagem completa:
| Pacote recebido | Texto |
| Pacote 4 de 5 | de computadores. |
| Pacote 1 de 5 | Bom dia, turma! |
| Pacote 5 de 5 | Até logo! |
| Pacote 2 de 5 | A aula de hoje |
| Pacote 3 de 5 | é sobre redes |

| ✍️ Mensagem completa |
|  |
|  |

- [ ] Na tarefa do portal, digite os 5 pacotes na ordem certa, um por linha, começando com **Pacote 1 de 5:**. Na última linha, escreva a mensagem completa.
- [ ] Com o texto na tela, chame o professor para conferir e **carimbar** o quadro no fim da missão.
👀 O carimbo é o comprovante de que você fez a tarefa. Não feche nada antes de mostrar ao professor!
🏫 **Na prática: a rede da nossa escola** (feito junto com o professor)
A nossa escola também é uma rede. Veja as peças que levam a internet da rua até o computador em que você está:
| Peça | O que é e o que faz |
| **Fibra óptica** | Cabo com fios finíssimos de vidro que levam os dados em forma de luz, muito rápido. Ela vem da rua, passa por baixo do chão e entra na escola pela cozinha. |
| **Rack** | Armário de metal onde ficam os aparelhos da rede. O da escola fica na cozinha. |
| **Roteador** (MikroTik) | Encaminha os dados pelo caminho certo e dá um endereço IP para cada aparelho da escola. MikroTik é a marca. É um roteador sem antenas: não faz Wi-Fi, só organiza a rede. |
| **Switch gigabit de 24 portas** | Aparelho que distribui a rede por cabos para a escola inteira. Cada **porta** é uma entrada onde se encaixa um cabo; esse switch tem 24. **Gigabit** quer dizer que cada porta transmite até **1 gigabit por segundo** (1 Gbps = 1.000 megabits por segundo). |
| **Cabo CAT6** | Cabo de rede de **categoria 6** (CAT vem de categoria), um tipo de cabo rápido, que aguenta 1 Gbps. Passa por baixo do chão até cada sala. |
| **Tomada de rede** | Encaixe na parede ou no chão onde o cabo chega na sala. |
| **Baia** | Cada bancada de computadores da sala de informática. A nossa sala tem 4 baias, com até 6 computadores cada. |
| **Switch Fast Ethernet da baia** | Switch pequeno que fica em cada baia: recebe o cabo da tomada e liga os computadores daquela baia. **Ethernet** é o nome do padrão de rede por cabo, e **Fast Ethernet** é o tipo que transmite até **100 megabits por segundo** (100 Mbps). |
| **AP** (do inglês Access Point, ponto de acesso) | Aparelho que fica nas salas de aula comuns, recebe a rede pelo cabo e transforma em Wi-Fi. |
| **Computador e celular** | Os dispositivos que enviam e recebem os dados. |

🔌 **Você sabia? O cabo de rede por dentro**
Por fora, o cabo de rede parece um fio só. Por dentro, ele tem **8 fios de cobre** coloridos, enrolados de dois em dois: são **4 pares trançados** (laranja, verde, azul e marrom, cada um com o seu par branco listrado). Na ponta fica o **conector RJ45**, o plugue transparente com uma trava, que se encaixa no computador, no switch e na tomada de rede.
**Por que os fios são trançados?** Os dados viajam pelos fios como sinais elétricos. Motores, lâmpadas e outros cabos fazem um "barulho" elétrico, a **interferência**, que pode bagunçar o sinal. Como os dois fios do par estão enrolados juntos, a interferência atinge os dois do mesmo jeito e o computador consegue cancelar esse barulho. A ideia é antiga: **Alexander Graham Bell**, um dos inventores do telefone, registrou essa invenção em **1881**, para os fios de telefone.
O outro problema é a **diafonia** (em inglês, *crosstalk*): o sinal de um par "vaza" para o par vizinho, como a conversa da mesa ao lado num restaurante. Quanto mais rápido o sinal, mais ele vaza. É por isso que existem **categorias** de cabo (CAT vem de categoria). O antigo **CAT5** ia só até **100 Mbps**; o **CAT5e** (o *e* é de *enhanced*, melhorado, em inglês) e o **CAT6** são os usados hoje:
| | CAT5e | CAT6 |
| Plugue e fios | RJ45, 8 fios em 4 pares trançados | RJ45, 8 fios em 4 pares trançados (iguais por fora) |
| Trança | Normal | Mais apertada (mais voltas por metro) |
| Cruz de plástico entre os pares | Não tem | Tem: separa os 4 pares para um não vazar no outro |
| Frequência que aguenta | Até 100 MHz | Até 250 MHz |
| Velocidade | Até 1 Gbps, em até 100 metros | Até 1 Gbps em até 100 metros, e até 10 Gbps em trechos de até uns 55 metros |

**MHz** (megahertz) quer dizer **milhões de vezes por segundo**: é o quanto o sinal "vibra" no fio a cada segundo. Quanto mais MHz o cabo aguenta, mais dados ele consegue levar.
**Na nossa escola:** o cabo do chão é CAT6. A internet da escola é de uns 300 a 400 Mbps e o switch da baia vai só até 100 Mbps: o cabo está sobrando! Para uma internet de até 1 Gbps, um cabo CAT5e também daria conta.
🧪 **No portal:** no simulador **🔌 Qual cabo é mais rápido?**, você liga cada cabo no computador e vê a velocidade aparecer no monitor.
🔎 **Como saber qual é o seu cabo?** O nome vem **escrito na capa** do cabo, repetido de tempos em tempos (por exemplo: *CAT6* ou *CAT5e*).
| ✍️ Olhe a capa do cabo de rede do seu computador (sem puxar nem desencaixar!). O que está escrito nela? É CAT5e ou CAT6? |
|  |
|  |

- **1.** Numere de 1 a 7 o caminho da internet até o computador da sala de informática.
| Nº | Parte do caminho |
|  | Switch gigabit de 24 portas |
|  | Fibra óptica chegando da rua |
|  | Computador da sala de informática |
|  | Switch Fast Ethernet da baia |
|  | Cabo CAT6 por baixo do chão |
|  | Roteador MikroTik no rack da cozinha |
|  | Tomada de rede na parede ou no chão da sala |

- **2.** Nas salas de aula comuns, o celular usa Wi-Fi. Qual aparelho transforma o cabo em Wi-Fi nessas salas?
- **3.** O cabo do chão aguenta até 1 Gbps, mas o switch da baia vai só até 100 Mbps. Qual é a velocidade máxima que chega ao seu computador? Por quê?
- **4.** Descubra o **endereço IP** do seu computador: aperte as teclas **Windows + R** (abre a janela Executar), digite **cmd** e aperte **Enter**. Abre o **Prompt de Comando**, uma janela onde se digitam comandos (cmd vem do inglês command, comando). Digite **ipconfig** e aperte Enter (ipconfig vem de IP configuration, configuração de IP). Procure a linha **Endereço IPv4** (IPv4 é a versão 4 do endereço IP, a mais usada). Anote o seu IP e o dos colegas da sua baia na tabela. Os números são iguais ou diferentes? Por quê?
| 🖥️ Computador da baia (número ou nome do colega) | Endereço IPv4 |
| O meu computador: |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

- **5.** O professor consegue ver a tela de todos os computadores da sala pelo **Veyon**, um programa que mostra as telas pela rede. Como a imagem da sua tela chega até o computador do professor? Use as palavras **rede**, **switch** e **pacotes**.
| ✍️ Respostas das perguntas 2, 3, 4 e 5 |
|  |
|  |
|  |
|  |
|  |

📍 **Onde eu uso isso?** Na sua casa é igual, só que menor: o cabo ou a fibra chega da rua até o roteador da operadora, que faz sozinho o papel do roteador, do switch e do AP: dá o endereço IP para cada aparelho e espalha o Wi-Fi pela casa.
🟡 **Desafio**
- [ ] Uma carta pelo correio e uma mensagem pela internet funcionam de um jeito parecido. Escreva o que corresponde a cada item na internet:
| No correio | ✍️ Na internet |
| Endereço de quem recebe |  |
| Carteiros e agências que levam a carta |  |
| Regras do correio (CEP, selo, envelope) |  |
| Carta longa enviada em várias folhas numeradas |  |

🔴 **Turbo**
- [ ] Por que os pacotes precisam ser numerados? O que você acha que acontece se um pacote se perder no caminho?
| ✍️ Resposta |
|  |
|  |

⚠️ **Não mexa nos cabos de rede** nem nos aparelhos da sala: um cabo solto pode deixar vários computadores sem internet.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Uma rede é formada por aparelhos ligados para trocar informações.
2. ( ) A internet é um único computador muito grande.
3. ( ) As mensagens viajam pela internet divididas em pacotes.
4. ( ) Protocolo é um conjunto de regras para os aparelhos se comunicarem.
5. ( ) O cadeado e o “https” no navegador indicam uma conexão sem nenhuma proteção.
### 🧠 Resumo da Aula
Uma **rede** liga aparelhos para trocar informações, e a **internet** é uma rede de redes. As mensagens viajam divididas em **pacotes** numerados, passando por **roteadores** até chegar ao destino, onde são montadas em ordem. Cada aparelho tem um **endereço IP**. Tudo isso segue **protocolos**, regras que os aparelhos combinam para se entender, como o TCP/IP e o **HTTPS**.
**Palavras-chave:** rede · internet · roteador · servidor · pacote · endereço IP · protocolo · HTTPS
## ⚙️ Missão 2 – Algoritmos: decomposição, listas, reúso e correção de erros
**Objetivo:** dividir um problema grande em partes menores, guardar dados em listas, reaproveitar partes de um algoritmo e encontrar e corrigir erros.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 6º ano você aprendeu que um **algoritmo** é uma sequência de passos para resolver um problema, usando sequência, repetição e seleção. Agora vamos usar quatro ideias que os programadores usam todos os dias:
| Ideia | O que é | Exemplo |
| ✂️ Decomposição | Dividir um problema grande em partes menores, mais fáceis de resolver | “Fazer um bolo” = separar ingredientes, misturar a massa, assar, decorar |
| 📋 Lista | Guardar vários dados em ordem; cada item ocupa uma **posição** | CORES = [azul, verde, amarelo] → posição 1 = azul |
| ♻️ Reúso | Dar um nome a uma parte que se repete e usá-la várias vezes | Bloco **DESENHAR CASA** usado 3 vezes |
| 🐞 Depuração | Procurar e corrigir erros (os **bugs**) de um algoritmo | Testar passo a passo até achar o erro |

Um **bloco** (ou procedimento) é como uma receita com nome. Veja:
**Bloco DESENHAR CASA:** 1. desenhe um quadrado. 2. desenhe um triângulo em cima do quadrado.
**Algoritmo principal:** DESENHAR CASA → ande para a direita → DESENHAR CASA. Com o reúso, escrevemos os passos da casa **uma vez só**.
Depois de corrigir um erro, sempre **teste de novo**: às vezes a correção cria outro erro.
### 📖 O que significa?
- **Decomposição** (de *decompor* = separar em partes): dividir um problema grande em partes menores e mais fáceis.
- **Lista**: dados guardados em ordem, em que cada item ocupa uma **posição** (a primeira é a posição 1).
- **Reúso** (de *reusar* = usar de novo): dar um nome a um conjunto de passos e usá-lo várias vezes, sem reescrever.
- **Bloco** (ou **procedimento**): os passos com nome, como DESENHAR CASA. Nas linguagens de programação, também se chama *função*.
- **Bug** (em inglês, inseto): um erro em um programa ou algoritmo. O nome ficou famoso em 1947, quando acharam uma mariposa presa dentro de um computador.
- **Depuração** (de *depurar* = limpar; em inglês, *debug*, “tirar o inseto”): procurar e corrigir os erros.
- **Teste**: executar o algoritmo para ver se ele faz o que deveria. Depois de corrigir um erro, sempre se testa de novo.
### 🌎 Onde eu uso isso?
- Para organizar uma **festa** ou um **trabalho em grupo**, a turma divide as tarefas: isso é decomposição.
- A **lista de compras** e a **chamada** da turma são listas, com cada item em uma posição.
- Ao **revisar uma redação** ou conferir o troco, você faz depuração: procura e corrige erros.
| ✍️ Pense em uma tarefa grande que você já fez. Em que partes você dividiu? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Decomponha o problema **“Organizar um lanche coletivo da turma”** em 4 partes menores:
| Parte | ✍️ O que fazer |
| 1 |  |
| 2 |  |
| 3 |  |
| 4 |  |

- [ ] Observe a lista e responda: **CHAMADA = [Ana, Bruno, Carla, Davi, Elisa]**
| Pergunta | ✍️ Resposta |
| Quem está na posição 3? |  |
| Qual é a posição de Davi? |  |
| Se Fábio entrar no final da lista, qual será a posição dele? |  |
| Quantos itens a lista terá depois disso? |  |

- [ ] No portal, siga o algoritmo de pintura:
  1. **Bloco DESENHAR CASA:** desenhe um quadrado e um triângulo em cima dele.
  2. **Repita 3 vezes:** DESENHAR CASA e deixe um espaço à direita.
  3. Para cada casa: **se** for a 2ª casa, pinte o telhado de preto; **senão**, deixe branco.
  4. Clique em **Verificar**: o portal confere sozinho.
🟡 **Desafio**
- [ ] O algoritmo abaixo deveria desenhar um quadrado, mas tem um **bug**. Encontre o erro e escreva o algoritmo corrigido:
*Repita 3 vezes: ande 5 passos e vire à direita.*
| ✍️ Qual é o erro e como fica o algoritmo corrigido? |
|  |
|  |

🔴 **Turbo**
- [ ] Invente um bloco com nome (por exemplo, **PULAR** ou **ACENAR**), escreva os passos dele e crie um algoritmo que use esse bloco **duas vezes**.
| ✍️ Meu bloco e meu algoritmo |
|  |
|  |
|  |

**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
1. ( ) Decompor é dividir um problema grande em partes menores.
2. ( ) Reúso é escrever a mesma parte várias vezes, sem dar nome a ela.
3. ( ) Em uma lista, cada item ocupa uma posição.
4. ( ) Um erro em um algoritmo é chamado de bug.
5. ( ) Depois de corrigir um erro, não é preciso testar o algoritmo de novo.
### 🧠 Resumo da Aula
Para resolver problemas grandes, usamos a **decomposição**: dividir em partes menores. Uma **lista** guarda vários dados em ordem, e cada item tem uma **posição**. Com o **reúso**, damos nome a um **bloco** de passos e o usamos várias vezes, sem reescrever. Erros em algoritmos se chamam **bugs**; encontrá-los e corrigi-los é a **depuração**, e depois de corrigir sempre testamos de novo.
**Palavras-chave:** decomposição · lista · posição · reúso · bloco · bug · depuração · teste
## 🛡️ Missão 3 – Segurança e convivência digital
**Objetivo:** reconhecer golpes e ameaças na internet e se proteger, conviver com opiniões diferentes com empatia e saber o que fazer diante do cyberbullying.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
**Segurança na internet:**
- **Golpe** (ou **phishing**) é uma mensagem falsa que finge ser de um banco, loja, jogo ou amigo para roubar senhas, códigos e dados.
- Sinais de golpe: **pressa** (“só hoje!”, “em até 10 minutos!”), **prêmio fácil** (celular, moedas grátis), **link estranho**, erros de português, **pedido de senha ou código** e alguém dizendo que **trocou de número** (“sou eu, sua tia, este é meu número novo”) para pedir dinheiro ou código.
- Quando **você mesmo** pede um código (por exemplo, ao entrar no aplicativo), o aviso “não compartilhe este código com ninguém” é do próprio aplicativo e protege você. Erro de português é um sinal, mas um texto sem erros, sozinho, não prova que a mensagem é verdadeira.
- **Malware** é um programa malicioso, como o vírus. Não baixe programas nem jogos de sites desconhecidos.
- Proteja-se: use **senha forte** e diferente em cada conta, ative a **verificação em duas etapas** (um código extra além da senha), **nunca passe códigos** que chegam por SMS e **saia da conta** em computadores usados por outras pessoas.
**Convivência digital:**
- Discordar é normal. Critique a **ideia**, nunca a **pessoa**. Leia com calma antes de responder.
- **Empatia** é se colocar no lugar do outro: pense em como a pessoa vai se sentir ao ler.
- **Cyberbullying** é ofender, excluir, ameaçar ou expor alguém de forma repetida no ambiente digital, com montagens, apelidos ou fotos.
- O que fazer: não responda com ofensa, **guarde provas** (print), **bloqueie**, **denuncie** na plataforma e **conte a um adulto de confiança**. Quem vê também ajuda: não compartilha e apoia quem está sofrendo.
### 📖 O que significa?
- **Golpe**: mentira para enganar e tirar dinheiro, senha ou dados de alguém.
- **Phishing** (do inglês *fishing*, pescar): mensagem falsa que joga uma “isca”, como um prêmio ou um aviso urgente, para a pessoa entregar a senha ou um código. Onde aparece: SMS, WhatsApp, e-mail e jogos.
- **Link**: endereço clicável que leva a um site. Link estranho é aquele com nome esquisito, letras trocadas ou números no lugar de letras.
- **Malware** (*malicious software*, programa malicioso): programa feito para causar dano ou roubar dados.
- **Vírus**: tipo de malware que se espalha fazendo cópias de si mesmo, como um vírus de verdade.
- **SMS** (*Short Message Service*, Serviço de Mensagens Curtas): a mensagem de texto comum do celular, que chega pelo número de telefone.
- **Verificação em duas etapas**: além da senha, a conta pede um segundo código, enviado por SMS ou por um aplicativo. Onde eu vejo: nas configurações de segurança do WhatsApp, do e-mail e dos jogos. Para quê: mesmo que alguém descubra a senha, não consegue entrar.
- **Empatia**: colocar-se no lugar do outro e pensar em como ele vai se sentir.
- **Cyberbullying***: o bullying (intimidação repetida) no mundo digital, ou seja,* ofender, excluir, ameaçar ou expor alguém de forma repetida no ambiente digital.
- **Print**: foto da tela do celular ou do computador. O nome vem da tecla Print Screen do teclado. Para quê: guardar a prova de uma ofensa ou de um golpe.
- **Denunciar**: avisar a plataforma (rede social, jogo, aplicativo), pelo botão de denúncia, que um conteúdo quebra as regras.
### 🌎 Onde eu uso isso?
- A mensagem “**troquei de número, me passa o código**” é um golpe muito comum nas famílias.
- O **código por SMS** do WhatsApp e do banco nunca deve ser passado para ninguém.
- Nos **comentários** de vídeos e jogos, dá para discordar sem ofender.
| ✍️ Você ou alguém da sua família já recebeu uma mensagem suspeita? Que sinal mostrou que era golpe? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Golpe ou seguro? Marque **G** para golpe e **S** para seguro:
| Mensagem | G ou S |
| “Parabéns! Você ganhou um celular. Clique no link em até 10 minutos!” |  |
| “Oi, sou eu, troquei de número. Me passa o código que chegou aí?” |  |
| “Ganhe 10.000 moedas no jogo grátis: é só informar a sua senha.” |  |
| Você acabou de entrar no aplicativo e ele mostra: “Seu código chegou. Não compartilhe com ninguém.” |  |

| ✍️ Um sinal de golpe que eu encontrei nas mensagens |
|  |

- [ ] Reescreva os comentários de forma **respeitosa**, mantendo a opinião, mas sem ofender:
| Comentário ofensivo | ✍️ Versão com empatia |
| “Quem gosta desse time não entende nada de futebol.” |  |
| “Que opinião ridícula, apaga isso.” |  |
| “Só gente sem noção gosta dessa música.” |  |

- [ ] No portal, monte o **cartaz** **Alerta de golpe!**: escolha os desenhos e a cor e escreva **3 dicas** para se proteger na internet. Não use nomes nem fotos de colegas. O portal confere sozinho.
🟡 **Desafio**
- [ ] Leia a situação: *um colega fez uma montagem engraçada com a foto de outro aluno e mandou no grupo da turma.* Escreva 3 atitudes de quem viu a montagem:
| ✍️ Atitudes de quem viu |
| 1. |
| 2. |
| 3. |

🔴 **Turbo**
- [ ] Explique o que é a **verificação em duas etapas** e por que ela protege a conta mesmo se alguém descobrir a sua senha.
| ✍️ Resposta |
|  |
|  |

⚠️ **Nunca escreva as suas senhas verdadeiras** na apostila, no computador da escola ou em mensagens. Se alguma situação na internet deixar você preocupado, conte ao professor ou a um adulto de confiança.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
1. ( ) Mensagens com prêmio fácil e muita pressa podem ser golpe.
2. ( ) Posso passar o código que chegou por SMS para um amigo que pediu.
3. ( ) A verificação em duas etapas deixa a conta mais protegida.
4. ( ) Discordar de alguém na internet é motivo para ofender a pessoa.
5. ( ) Guardar provas, bloquear e denunciar são atitudes contra o cyberbullying.
### 🧠 Resumo da Aula
Na internet existem **golpes** (phishing) que usam pressa, prêmios e links falsos para roubar dados, e **malwares** que danificam o computador. Para se proteger: **senha forte**, **verificação em duas etapas** e nunca passar códigos. Na convivência digital, discordamos com **empatia**, criticando ideias e não pessoas. Diante do **cyberbullying**: guardar provas, bloquear, denunciar e contar a um adulto de confiança.
**Palavras-chave:** golpe · phishing · malware · senha forte · verificação em duas etapas · empatia · opinião divergente · cyberbullying
## 🗺️ Missão 4 – Grafos: mapas, caminhos e conexões
**Objetivo:** representar lugares e pessoas como pontos ligados por linhas (um grafo), encontrar caminhos e descobrir o caminho mais curto, como faz o GPS (Sistema de Posicionamento Global).
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O aplicativo de mapa do celular mostra o caminho mais rápido até a casa de um amigo. Como ele sabe? O computador **não enxerga as ruas** como nós. Ele guarda o mapa de um jeito bem simples: **pontos ligados por linhas**. Isso se chama **grafo**.
| Parte do grafo | O que é | Exemplo no mapa da cidade |
| ⚪ Vértice (ou nó) | Um ponto: um lugar, uma pessoa, um computador | A escola, a praça, o mercado |
| ➖ Aresta | Uma linha que liga dois vértices | A rua que liga a escola à praça |
| 🔢 Peso | Um número escrito na aresta: distância, tempo ou preço | 300 metros, 5 minutos |
| 🧭 Caminho | Uma sequência de vértices ligados por arestas, um depois do outro | Escola → Praça → Mercado |

Veja um grafo do bairro, com o tempo de caminhada em minutos em cada aresta:
**Escola —5— Praça —4— Mercado** e **Escola —12— Mercado** (uma rua direta, porém mais longa).
- Caminho 1: Escola → Mercado = **12 minutos**.
- Caminho 2: Escola → Praça → Mercado = 5 + 4 = **9 minutos**.
O caminho com **menos arestas** nem sempre é o **mais curto**: para achar o mais curto, **somamos os pesos** de cada caminho e escolhemos o **menor total**. É isso que o GPS faz, muito rápido, com milhares de ruas.
Grafos também mostram **pessoas**: cada pessoa é um vértice, e cada amizade é uma aresta. O número de arestas que chegam a um vértice é o **grau** dele: quem tem grau maior tem mais conexões.
### 📖 O que significa?
- **Grafo**: um desenho (ou modelo) feito de pontos ligados por linhas, que mostra **o que está ligado a quê**. Onde se vê: mapas, redes de amigos, rotas de ônibus, a rede de computadores. Para quê: o computador consegue achar caminhos e conexões.
- **Vértice** (também chamado de **nó**): cada ponto do grafo; pode ser um lugar, uma pessoa ou um computador.
- **Aresta**: cada linha que liga dois vértices; mostra que eles estão conectados (uma rua, uma amizade, um cabo).
- **Peso**: o número escrito em uma aresta; pode ser distância (metros), tempo (minutos) ou preço (reais).
- **Caminho**: a sequência de vértices que você percorre, passando sempre por arestas, para ir de um vértice a outro.
- **Caminho mais curto**: o caminho cuja **soma dos pesos** é a menor de todas.
- **Grau**: quantas arestas chegam a um vértice; mostra quantas conexões ele tem.
- **GPS** (*Global Positioning System*, Sistema de Posicionamento Global): sistema de satélites que mostra onde o celular está; o aplicativo de mapa usa um grafo das ruas para calcular a rota.
- **Rota**: o caminho escolhido para ir de um lugar a outro.
### 🌎 Onde eu uso isso?
- No **aplicativo de mapa** e no **aplicativo de transporte**, que calculam a rota mais rápida até um endereço.
- Nas **redes sociais**, que sugerem “pessoas que você talvez conheça”: são amigos dos seus amigos no grafo.
- No **ônibus escolar**, que passa pelas casas em um caminho que gasta menos tempo e combustível.
| ✍️ Pense no caminho da sua casa até a escola. Por quais lugares (vértices) você passa? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Observe o grafo do bairro: **Casa —3— Padaria —2— Escola**, **Casa —4— Praça —4— Escola** e **Casa —9— Escola**. Complete:
| Pergunta | ✍️ Resposta |
| Quantos vértices tem o grafo? |  |
| Quantos minutos leva o caminho Casa → Padaria → Escola? |  |
| Quantos minutos leva o caminho Casa → Praça → Escola? |  |
| Qual é o caminho mais curto da Casa até a Escola? |  |

- [ ] Ligue cada parte do grafo ao que ela é no mapa: **vértice** · **aresta** · **peso** → a rua · o número de minutos · o lugar.
- [ ] Na rede de amigos **Ana–Bia, Ana–Caio, Ana–Davi, Bia–Caio**, qual é o grau de cada pessoa? Quem tem mais conexões?
🟡 **Desafio**
- [ ] No portal, monte o grafo da escola: ligue os lugares (Portão, Pátio, Cantina, Sala de Informática e Biblioteca) seguindo as pistas e clique em **Verificar**.
🔴 **Turbo**
- [ ] O entregador precisa sair do Mercado e passar pela Farmácia antes de chegar ao Hospital. Escreva o caminho mais curto e a soma dos minutos, usando o grafo do portal.
| ✍️ Meu caminho e o total de minutos |
|  |
|  |

**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
1. ( ) Um grafo é formado por vértices (pontos) e arestas (linhas).
2. ( ) O caminho com menos arestas é sempre o mais curto.
3. ( ) O peso de uma aresta pode ser a distância, o tempo ou o preço.
4. ( ) O grau de um vértice é o número de arestas que chegam até ele.
5. ( ) O aplicativo de mapa usa um grafo das ruas para calcular a rota.
### 🧠 Resumo da Aula
Um **grafo** mostra o que está ligado a quê: os **vértices** são os pontos (lugares, pessoas, computadores) e as **arestas** são as linhas que os ligam. O **peso** de uma aresta pode ser distância, tempo ou preço. Um **caminho** passa de vértice em vértice pelas arestas, e o **caminho mais curto** é o que tem a **menor soma de pesos**, que nem sempre é o que tem menos arestas. O **grau** mostra quantas conexões um vértice tem. É assim que o **GPS** calcula rotas e que as redes sociais sugerem amigos.
**Palavras-chave:** grafo · vértice · aresta · peso · caminho · caminho mais curto · grau · rota

## 🔁 Revisão para a prova
**Objetivo:** revisar, fazendo atividades, todas as missões que a sua turma estudou, para chegar preparado à prova.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Hoje é dia de **revisão**, e a aula inteira tem atividade, como numa missão. O portal mostra **só as missões que a sua turma estudou**: é exatamente isso que cai na prova.
Em cada missão, faça assim:
| Passo | O que fazer |
| 📚 1. Relembre | Leia o resumo da missão e os termos principais |
| 🟢 2. Pratique | Faça as atividades daquela missão (correção automática) |
| 🔁 3. Errou? | Leia a explicação, volte ao 📚 Relembre e tente de novo |

Terminou o Básico de todas as missões? Siga para o 🟡 **Desafio** e o 🔴 **Turbo**: eles misturam as missões, como na prova.
**Dica de prova:** tudo o que cai está nos **Resumos da Aula** e nas **Perguntas rápidas** de cada missão. Você pode abrir a missão no portal para reler quando quiser.

## 🏁 Projeto final – Meu Passaporte de Missões
**Objetivo:** conferir as missões concluídas, completar o que faltou e registrar o que você aprendeu no bimestre.
📅 **Data da aula:** ........ / ........
### 🎯 Missão final
🟢 **Básico**
- [ ] Folheie a sua apostila e marque quais missões já têm carimbo:
| Missão | Tem carimbo do Básico? |
| 🌐 Missão 1 – Redes e internet |  |
| ⚙️ Missão 2 – Decompor e corrigir algoritmos |  |
| 🛡️ Missão 3 – Segurança e convivência digital |  |

- [ ] Se faltar algum carimbo (por exemplo, porque você faltou à aula), faça agora a missão e peça o carimbo ao professor.
- [ ] Escreva uma frase sobre o que você aprendeu em cada tema:
| Tema | ✍️ O que eu aprendi |
| 🌐 Redes e internet |  |
| ⚙️ Algoritmos |  |
| 🛡️ Segurança e convivência digital |  |

🟡 **Desafio**
- [ ] Digite as suas três frases na caixa do portal, com letra maiúscula, acentos e pontuação.
🔴 **Turbo**
- [ ] Explique para a turma, no projetor, qual missão você mais gostou e por quê.
**✅ Carimbo do professor – projeto final**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |
|  |  |  |

### 📋 Autoavaliação
Marque o que você já consegue fazer sozinho:
- [ ] Explico o que é uma rede e como os dados viajam em pacotes.
- [ ] Sei o que é um protocolo e o que significa o cadeado do HTTPS.
- [ ] Divido um problema grande em partes menores.
- [ ] Uso listas e reaproveito blocos em um algoritmo.
- [ ] Encontro e corrijo erros em um algoritmo.
- [ ] Reconheço sinais de golpe e sei proteger as minhas contas.
- [ ] Discordo com respeito e sei o que fazer diante do cyberbullying.
### 📝 Ficha de avaliação do professor
O cálculo completo está no **Quadro de notas** da primeira página: a apostila (carimbos) vale até **5,0** e a prova no Wayground vale até **5,0**, somando a nota do bimestre de **0 a 10**.
### 🧠 Resumo do Bimestre
Neste bimestre você descobriu como as redes e a internet levam as mensagens em pacotes, aprendeu a resolver problemas dividindo-os em partes, usando listas, reaproveitando blocos e corrigindo erros, e viu como se proteger e conviver com respeito no ambiente digital. As missões concluídas no portal mostram tudo o que você conquistou!
**Palavras-chave:** missão · conquista · autoavaliação · aprendizado
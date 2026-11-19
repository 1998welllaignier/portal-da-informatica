# Apostila de Informática – 7º Ano – 2º Bimestre de 2027
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 7º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
| ✍️ Número do computador |  |

## 📊 Quadro de notas do bimestre
*Preenchido pelo professor (no portal, tudo fica registrado sozinho).*
| Encontro | 📅 Data (dia / mês) | 🟢 Básico | 🟡 Desafio (0,25) | 🔴 Turbo (0,25) |
| Missão 1 | ........ / ........ |  |  |  |
| Missão 2 | ........ / ........ |  |  |  |
| Missão 3 | ........ / ........ |  |  |  |
| Missão 4 | ........ / ........ |  |  |  |
| Missão 5 | ........ / ........ |  |  |  |
| Missão 6 | ........ / ........ |  |  |  |
| ⭐ Extras (7 e 8), se houver aula | ........ / ........ |  |  |  |
| 🔁 Revisão | ........ / ........ |  |  |  |
| **Total** |  |  |  |  |

| Cálculo da nota | Pontos |
| **A – Nota da apostila:** Básico até 4,0 (dividido pelas aulas de missão que a sua turma teve, incluindo as extras e a Revisão quando houve) + Desafio/Turbo (bônus até 1,0) — máximo 5,0 |  |
| **B – Nota da prova no portal:** proporcional aos acertos — máximo 5,0 |  |
| **Nota do bimestre = A + B**** · média para aprovação: 5,0** (0 a 10) |  |

## 📘 Como usar esta apostila
Bem-vindo ao 2º bimestre! O tema agora é **Grafos e projetos**: o jeito que o computador usa para guardar mapas, caminhos e amizades, e um projeto feito em equipe. Você vai cumprir **6 missões** e, se sobrar aula, **2 missões extras**. Antes da prova tem a **🔁 Revisão**. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema.
| Missão | Tema |
| 🕸️ Missão 1 – Grafos: pontos e ligações | Pensamento Computacional |
| 🧭 Missão 2 – O caminho mais curto | Pensamento Computacional |
| 🤝 Missão 3 – Grafos de amizades | Pensamento Computacional |
| 🗂️ Missão 4 – Escolher a estrutura certa | Pensamento Computacional |
| 📋 Missão 5 – Projeto em equipe: planejar | Pensamento Computacional |
| 🛠️ Missão 6 – Projeto em equipe: construir e apresentar | Pensamento Computacional |
| 🗺️ Missão 7 – Extra: Mapa de Curionópolis em grafo | Pensamento Computacional |
| 🌀 Missão 8 – Extra: Labirintos | Pensamento Computacional |
| 🔁 Revisão para a prova | Todas as missões estudadas |

**Cada missão tem 3 níveis:**
| Nível | Quem faz | O que vale |
| 🟢 Básico | Todos os alunos | Obrigatório: é o visto da missão e libera os jogos livres no fim da aula |
| 🟡 Desafio | Quem terminou o Básico | **+0,25 ponto**: aumenta a sua nota do bimestre |
| 🔴 Turbo | Quem terminou o Desafio | **+0,25 ponto**: aumenta ainda mais a sua nota |

**Ícones da apostila:**
- 💡 **Para começar** – a explicação do dia
- 📖 **O que significa?** – as palavras novas, explicadas
- 🌎 **Onde eu uso isso?** – onde o assunto aparece na sua vida
- 🎯 **Missão** – as atividades que você faz no portal; ele confere na hora
- ✅ **Perguntas rápidas** – verdadeiro ou falso para conferir
- 🧠 **Resumo da Aula** – ajuda a estudar para a prova
🔎 **Todas as respostas estão na apostila:** leia o **💡 Para começar** e o **📖 O que significa?**. Errou? Leia de novo com calma, peça uma **💡 Dica** ou toque em **🤖 Me ajuda, robô!**. Você consegue fazer tudo sozinho!
**Regra de ouro:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor.

## 🕸️ Missão 1 – Grafos: pontos e ligações
**Objetivo:** representar lugares, pessoas e computadores como um grafo (vértices ligados por arestas) e ler as informações dele.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O computador **não enxerga** um mapa, uma turma ou uma rede como nós. Ele guarda tudo de um jeito bem simples: **pontos ligados por linhas**. Esse desenho se chama **grafo**.
| Parte do grafo | O que é | Exemplo no mapa da cidade |
| ⚪ Vértice (ou nó) | Um ponto: um lugar, uma pessoa, um computador | A escola, a praça, o mercado |
| ➖ Aresta | Uma linha que liga dois vértices | A rua que liga a escola à praça |
| 🔢 Peso | Um número escrito na aresta: distância, tempo ou preço | 5 minutos de caminhada |
| 🔗 Grau | Quantas arestas chegam a um vértice | A praça tem grau 3: liga-se a 3 lugares |

**Como ler um grafo:** escreva as ligações numa tabela. Cada linha da tabela é uma aresta.
| Aresta | Peso (minutos) |
| Escola – Praça | 5 |
| Praça – Mercado | 4 |
| Escola – Mercado | 12 |

Nesse grafo há **3 vértices** (Escola, Praça e Mercado) e **3 arestas**. A Praça liga-se à Escola e ao Mercado: o **grau** dela é **2**.
**Onde nasceu a ideia:** em 1736, o matemático Leonhard Euler estudou as **7 pontes** da cidade de Königsberg. Ele desenhou as margens do rio como pontos e as pontes como linhas, e provou que **não dava** para passear atravessando cada ponte uma vez só. Foi o primeiro grafo da história da Matemática.
### 📖 O que significa?
- **Grafo**: desenho (ou modelo) feito de pontos ligados por linhas, que mostra **o que está ligado a quê**. Onde se vê: mapas, redes de amigos, rotas de ônibus, a rede de computadores.
- **Vértice** (também chamado de **nó**): cada ponto do grafo; pode ser um lugar, uma pessoa ou um computador.
- **Aresta**: cada linha que liga dois vértices; mostra que eles estão conectados (uma rua, uma amizade, um cabo).
- **Peso**: o número escrito numa aresta; pode ser distância (metros), tempo (minutos) ou preço (reais).
- **Grau**: quantas arestas chegam a um vértice; mostra quantas conexões ele tem.
- **Vizinho**: vértice ligado diretamente a outro por uma aresta.
### 🌎 Onde eu uso isso?
- No **aplicativo de mapa**: cada esquina é um vértice e cada rua é uma aresta.
- Na **rede de computadores** da escola: cada computador é um vértice e cada cabo (ou sinal de Wi-Fi) é uma aresta.
- Nas **linhas de ônibus**: cada parada é um vértice e o trecho entre duas paradas é uma aresta.
### 🎯 Missão
🟢 **Básico** — no portal: monte o grafo do bairro clicando nas ligações, ligue cada parte do grafo ao seu significado, descubra o grau de cada vértice e responda às perguntas.
🟡 **Desafio** — no portal: monte o grafo da escola seguindo as pistas.
🔴 **Turbo** — no portal: ache as palavras do grafo no caça-palavras.
⚠️ Os computadores são usados por todos: **nunca apague nem mexa nos arquivos dos colegas**.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Um grafo é formado por vértices (pontos) e arestas (linhas).
2. ( ) O peso de uma aresta só pode ser a distância em metros.
3. ( ) O grau de um vértice é o número de arestas que chegam até ele.
4. ( ) Num mapa em forma de grafo, as ruas são os vértices.
5. ( ) Leonhard Euler usou um grafo para estudar as 7 pontes de Königsberg.
### 🧠 Resumo da Aula
Um **grafo** mostra o que está ligado a quê. Os **vértices** são os pontos (lugares, pessoas, computadores) e as **arestas** são as linhas que os ligam. O **peso** é o número da aresta (distância, tempo ou preço) e o **grau** é quantas arestas chegam a um vértice. A ideia nasceu com Euler e as pontes de Königsberg, em 1736.
**Palavras-chave:** grafo · vértice · nó · aresta · peso · grau · vizinho

## 🧭 Missão 2 – O caminho mais curto
**Objetivo:** encontrar caminhos num grafo e descobrir o caminho mais curto somando os pesos, como faz o aplicativo de mapa.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Um **caminho** é uma sequência de vértices ligados por arestas, um depois do outro: **Casa → Padaria → Escola**. Para saber quanto um caminho “custa”, **somamos os pesos** das arestas dele.
Veja o grafo do bairro (pesos em minutos de caminhada):
| Aresta | Peso (minutos) |
| Casa – Padaria | 3 |
| Padaria – Escola | 2 |
| Casa – Praça | 4 |
| Praça – Escola | 4 |
| Casa – Escola | 9 |

| Caminho | Conta | Total |
| Casa → Escola (rua direta) | 9 | **9 minutos** |
| Casa → Padaria → Escola | 3 + 2 | **5 minutos** ✅ |
| Casa → Praça → Escola | 4 + 4 | **8 minutos** |

**O mais curto é o de menor soma**, e não o de menos paradas: a rua direta tem uma aresta só, mas leva 9 minutos.
**Como achar o caminho mais curto:** 1. liste todos os caminhos possíveis; 2. some os pesos de cada um; 3. escolha o **menor total**.
**Quando uma rua fecha:** se a aresta Padaria – Escola estiver interditada, o caminho mais curto muda para Casa → Praça → Escola (8 minutos). É isso que o aplicativo de mapa faz quando aparece um bloqueio.
**Quem inventou o jeito rápido:** em 1956, o holandês **Edsger Dijkstra** criou um algoritmo que acha o caminho mais curto sem precisar testar todos os caminhos um por um. Os aplicativos de mapa usam ideias que vieram dele.
### 📖 O que significa?
- **Caminho**: sequência de vértices ligados por arestas, um depois do outro.
- **Caminho mais curto**: o caminho cuja **soma dos pesos** é a menor de todas.
- **Soma dos pesos**: o total de um caminho; somamos o peso de cada aresta que ele usa.
- **Rota**: o caminho escolhido para ir de um lugar a outro.
- **Interditada**: fechada; a aresta não pode ser usada.
### 🌎 Onde eu uso isso?
- No **aplicativo de mapa** e no **aplicativo de transporte**, que calculam a rota mais rápida até um endereço.
- No **entregador** de comida, que escolhe o caminho que gasta menos tempo.
- No **ônibus escolar**, que passa pelas casas num caminho que gasta menos tempo e combustível.
### 🎯 Missão
🟢 **Básico** — no portal: trace o caminho mais curto no grafo, complete a tabela das somas e responda às perguntas.
🟡 **Desafio** — no portal: ache o caminho mais curto num grafo maior, da cidade.
🔴 **Turbo** — no portal: descubra o novo caminho mais curto quando uma rua é interditada.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Para saber quanto um caminho custa, somamos os pesos das arestas dele.
2. ( ) O caminho com menos paradas é sempre o mais curto.
3. ( ) No bairro do exemplo, Casa → Padaria → Escola leva 5 minutos.
4. ( ) Quando uma rua é interditada, o caminho mais curto pode mudar.
5. ( ) O algoritmo de Dijkstra acha o caminho mais curto.
### 🧠 Resumo da Aula
Um **caminho** passa de vértice em vértice pelas arestas. Para saber o total, **somamos os pesos**. O **caminho mais curto** é o de **menor soma**, que nem sempre é o de menos paradas. Se uma aresta é **interditada**, o caminho mais curto pode mudar. Edsger Dijkstra criou, em 1956, um algoritmo rápido para achar o caminho mais curto.
**Palavras-chave:** caminho · caminho mais curto · soma dos pesos · rota · Dijkstra

## 🤝 Missão 3 – Grafos de amizades
**Objetivo:** usar grafos para representar pessoas e amizades e entender como as redes sociais sugerem amigos.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Grafos também mostram **pessoas**. Cada pessoa é um **vértice** e cada amizade é uma **aresta**. Esse grafo não tem peso: só importa **quem está ligado a quem**.
Veja a rede de amigos de uma turma:
| Amizade (aresta) |
| Ana – Bia |
| Ana – Caio |
| Ana – Davi |
| Bia – Caio |
| Davi – Eva |

| Pessoa | Amigos | Grau |
| Ana | Bia, Caio, Davi | 3 |
| Bia | Ana, Caio | 2 |
| Caio | Ana, Bia | 2 |
| Davi | Ana, Eva | 2 |
| Eva | Davi | 1 |

**Quem tem mais conexões?** É quem tem o **maior grau**: a Ana (3).
**Amigo de amigo:** a Eva não é amiga da Ana, mas as duas têm um amigo em comum, o Davi. No grafo, elas estão a **2 passos** de distância. É assim que as **redes sociais** sugerem “pessoas que você talvez conheça”: procuram no grafo os **amigos dos seus amigos**.
**Cuidado:** a sugestão da rede social **não quer dizer** que a pessoa é de confiança. Só aceitar quem eu conheço de verdade: essa é a regra.
### 📖 O que significa?
- **Rede social**: um grande grafo de pessoas (vértices) ligadas por amizades ou por quem segue quem (arestas).
- **Grau**: quantas amizades (arestas) uma pessoa tem no grafo.
- **Amigo em comum**: pessoa ligada a duas outras ao mesmo tempo.
- **Distância** (num grafo sem peso): o número de arestas do caminho mais curto entre duas pessoas.
- **Sugestão de amizade**: quando a rede social mostra os amigos dos seus amigos.
### 🌎 Onde eu uso isso?
- Nas **redes sociais**, quando aparece “pessoas que você talvez conheça”.
- No **grupo da turma** no aplicativo de mensagens: todos ligados ao mesmo grupo.
- Na **pesquisa de saúde**: os cientistas usam grafos de contatos para entender como uma gripe passa de pessoa para pessoa.
### 🎯 Missão
🟢 **Básico** — no portal: monte o grafo da turma, descubra o grau de cada pessoa, marque os amigos em comum e responda às perguntas.
🟡 **Desafio** — no portal: descubra quem a rede social sugeriria como amigo.
🔴 **Turbo** — no portal: trace o caminho de menos passos entre duas pessoas.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Num grafo de amizades, cada pessoa é um vértice e cada amizade é uma aresta.
2. ( ) Quem tem o menor grau é quem tem mais amigos.
3. ( ) As redes sociais sugerem amigos procurando os amigos dos seus amigos.
4. ( ) Se a rede social sugeriu alguém, essa pessoa é sempre de confiança.
5. ( ) No exemplo, a Eva e a Ana têm o Davi como amigo em comum.
### 🧠 Resumo da Aula
Num **grafo de amizades**, as pessoas são vértices e as amizades são arestas. O **grau** mostra quantos amigos cada um tem. Duas pessoas com um **amigo em comum** estão a 2 passos de distância, e é assim que as **redes sociais** sugerem amigos. Sugestão não é garantia de confiança: aceite só quem você conhece.
**Palavras-chave:** rede social · grau · amigo em comum · distância · sugestão de amizade

## 🗂️ Missão 4 – Escolher a estrutura certa
**Objetivo:** escolher o melhor jeito de organizar os dados de um problema: lista, tabela ou grafo.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Antes de programar, o programador decide **como guardar os dados**. Esse jeito de organizar se chama **estrutura de dados**. Escolher bem deixa o programa simples; escolher mal deixa tudo difícil.
| Estrutura | Como é | Serve para | Exemplo |
| 📝 Lista | Itens um depois do outro, em ordem | Guardar coisas em sequência | Lista de compras, fila da cantina, playlist |
| 🗂️ Tabela (registros) | Linhas e colunas: cada linha é a ficha de uma coisa | Guardar várias informações de cada item | Boletim (aluno, nota, faltas), agenda de contatos |
| 🕸️ Grafo | Vértices ligados por arestas | Mostrar o que está ligado a quê | Mapa da cidade, rede de amigos, rede de computadores |

**Como escolher:** faça três perguntas.
| Pergunta | Se a resposta for sim… |
| A ordem dos itens importa e cada item tem só uma informação? | 📝 **Lista** |
| Cada item tem **várias** informações (nome, idade, telefone)? | 🗂️ **Tabela** |
| O importante é **quem está ligado a quem**? | 🕸️ **Grafo** |

**Exemplo:** para guardar as músicas na ordem em que vão tocar, uso uma **lista**. Para guardar o nome, a turma e a nota de cada aluno, uso uma **tabela**. Para guardar quais cidades têm estrada entre si, uso um **grafo**.
### 📖 O que significa?
- **Estrutura de dados**: o jeito de organizar os dados dentro do programa.
- **Lista**: itens guardados um depois do outro, em ordem.
- **Tabela**: dados em linhas e colunas; cada linha é um **registro**.
- **Registro**: a ficha de uma coisa, com várias informações (campos).
- **Campo**: cada informação de um registro, como “nome” ou “nota”.
### 🌎 Onde eu uso isso?
- A **playlist** de músicas é uma lista: uma depois da outra.
- A **agenda de contatos** do celular é uma tabela: cada contato tem nome, telefone e foto.
- O **aplicativo de mapa** guarda as ruas num grafo.
### 🎯 Missão
🟢 **Básico** — no portal: classifique cada problema na estrutura certa, ligue cada estrutura ao seu exemplo e jogue a memória.
🟡 **Desafio** — no portal: escolha a estrutura de cada parte de um aplicativo da escola.
🔴 **Turbo** — no portal: complete o texto sobre as estruturas de dados.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Estrutura de dados é o jeito de organizar os dados dentro do programa.
2. ( ) Para guardar o nome, a turma e a nota de cada aluno, o melhor é um grafo.
3. ( ) Uma playlist de músicas é um exemplo de lista.
4. ( ) Na tabela, cada linha é um registro com vários campos.
5. ( ) O grafo é a melhor estrutura quando o importante é quem está ligado a quem.
### 🧠 Resumo da Aula
A **estrutura de dados** é o jeito de organizar os dados. A **lista** guarda itens em ordem; a **tabela** guarda **registros** com vários **campos**; o **grafo** mostra o que está ligado a quê. Para escolher, pergunte: importa a ordem? Cada item tem várias informações? Importam as ligações?
**Palavras-chave:** estrutura de dados · lista · tabela · registro · campo · grafo

## 📋 Missão 5 – Projeto em equipe: planejar
**Objetivo:** planejar um projeto em equipe: definir o problema, dividir as tarefas e organizar o tempo.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Nesta missão e na próxima, a turma vai fazer um **projeto em equipe**: o **Guia de Rotas da Escola**, um grafo que mostra os lugares da escola e os caminhos mais curtos entre eles, para ajudar quem chega à escola pela primeira vez.
Todo projeto bem feito começa com um **plano**. As etapas são sempre estas:
| Etapa | Pergunta | No nosso projeto |
| 1. Problema | O que queremos resolver? | Aluno novo se perde na escola |
| 2. Ideia | Como vamos resolver? | Um guia em forma de grafo |
| 3. Dados | De que informações precisamos? | Os lugares e o tempo entre eles |
| 4. Tarefas | Quem faz o quê? | Cada um com um papel |
| 5. Prazo | Até quando? | Construir na próxima missão |

**Os papéis da equipe:** cada pessoa tem uma função, e todas são importantes.
| Papel | O que faz |
| 🧭 Organizador | Cuida do tempo e lembra a equipe das tarefas |
| 🔎 Pesquisador | Junta os dados: lugares e tempos |
| 🛠️ Construtor | Monta o grafo no portal |
| 🧪 Testador | Confere se os caminhos estão certos |

**Combinados de equipe:** ouvir todos, dividir o trabalho com justiça, ajudar quem travou e decidir juntos. Se duas pessoas querem o mesmo papel, a equipe conversa e decide junto, ou reveza. Se alguém faltar, a equipe redivide a tarefa dele. Projeto em equipe é como um **grafo**: cada pessoa é um vértice, e o trabalho só funciona com as ligações entre elas.
### 📖 O que significa?
- **Projeto**: trabalho com um objetivo, etapas e um prazo para terminar.
- **Planejar**: decidir antes o que fazer, quem faz e até quando.
- **Papel**: a função de cada pessoa na equipe.
- **Prazo**: a data ou o tempo limite para terminar uma tarefa.
- **Cronograma**: a lista das tarefas com os prazos de cada uma.
### 🌎 Onde eu uso isso?
- Num **trabalho em grupo** da escola: cada um faz uma parte.
- Na **festa junina** da escola: uma equipe cuida da comida, outra da decoração, outra das brincadeiras.
- As **empresas de jogos** planejam cada jogo com equipes de programadores, artistas e testadores.
### 🎯 Missão
🟢 **Básico** — no portal: coloque as etapas do projeto em ordem, ligue cada papel à sua função e escolha os combinados da equipe.
🟡 **Desafio** — no portal: monte o cronograma do projeto.
🔴 **Turbo** — no portal: resolva os problemas da equipe.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Todo projeto bem feito começa com um plano.
2. ( ) No projeto em equipe, uma pessoa faz tudo e as outras só olham.
3. ( ) O testador confere se os caminhos do grafo estão certos.
4. ( ) Prazo é o tempo limite para terminar uma tarefa.
5. ( ) Ouvir todos e decidir juntos é um bom combinado de equipe.
### 🧠 Resumo da Aula
Um **projeto** tem objetivo, etapas e **prazo**. Planejar é decidir o **problema**, a **ideia**, os **dados**, as **tarefas** e o **prazo**. Cada pessoa tem um **papel** (organizador, pesquisador, construtor, testador), e os combinados fazem a equipe funcionar.
**Palavras-chave:** projeto · planejar · papel · prazo · cronograma · equipe

## 🛠️ Missão 6 – Projeto em equipe: construir e apresentar
**Objetivo:** construir o Guia de Rotas da Escola em equipe, testar, melhorar e apresentar o resultado.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Hoje a equipe **constrói** o Guia de Rotas da Escola. Os dados que o pesquisador juntou:
| Aresta | Peso (minutos) |
| Portão – Pátio | 1 |
| Pátio – Cantina | 1 |
| Pátio – Sala de Informática | 2 |
| Pátio – Biblioteca | 2 |
| Sala de Informática – Biblioteca | 1 |

**Construir, testar e melhorar:** projeto bom passa por um ciclo.
| Passo | O que fazer |
| 🛠️ 1. Construir | Montar o grafo com os dados |
| 🧪 2. Testar | Conferir os caminhos mais curtos |
| 💬 3. Ouvir | Pedir a opinião de quem vai usar |
| 🔁 4. Melhorar | Corrigir e fazer a nova versão |

Cada volta do ciclo gera uma **versão** melhor. Os aplicativos do celular fazem isso o tempo todo: por isso recebem **atualizações**.
**Apresentar:** no fim, a equipe mostra o projeto para a turma em poucos minutos: **1.** qual era o problema; **2.** o que fizemos; **3.** como usar; **4.** o que aprendemos.
### 📖 O que significa?
- **Construir**: montar o projeto com os dados planejados.
- **Testar**: conferir se o projeto funciona do jeito certo.
- **Versão**: cada etapa do projeto, melhorada em relação à anterior.
- **Opinião** (ou **retorno**): o que os usuários dizem sobre o projeto, para melhorar.
- **Apresentação**: mostrar o projeto para outras pessoas, de forma curta e clara.
### 🌎 Onde eu uso isso?
- As **atualizações** do celular são novas versões, feitas depois de ouvir os usuários.
- Na **feira de ciências**, cada equipe apresenta o projeto para os visitantes.
- No **jogo** que recebe uma fase nova: os criadores testaram e melhoraram antes.
### 🎯 Missão
🟢 **Básico** — no portal: monte o grafo do guia, teste o caminho mais curto e coloque em ordem o ciclo do projeto.
🟡 **Desafio** — no portal: descubra o novo caminho quando um corredor fecha.
🔴 **Turbo** — no portal: organize a apresentação da equipe.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) O ciclo do projeto é construir, testar, ouvir e melhorar.
2. ( ) Depois de construir, não é preciso testar.
3. ( ) Cada volta do ciclo gera uma versão melhor.
4. ( ) As atualizações dos aplicativos são novas versões.
5. ( ) Na apresentação, a equipe conta o problema, o que fez, como usar e o que aprendeu.
### 🧠 Resumo da Aula
A equipe **constrói** o projeto, **testa**, **ouve** a opinião de quem usa e **melhora**: cada volta gera uma **versão** melhor, como as atualizações do celular. No fim, a **apresentação** conta o problema, o que foi feito, como usar e o que a equipe aprendeu.
**Palavras-chave:** construir · testar · versão · opinião · apresentação

## 🗺️ Missão 7 – Extra: Mapa de Curionópolis em grafo
**Objetivo:** transformar lugares conhecidos da cidade num grafo e usá-lo para planejar caminhos.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Vamos transformar alguns lugares de **Curionópolis** num grafo. Os tempos são **de mentirinha**, inventados para o exercício: o importante é o jeito de pensar.
| Aresta | Peso (minutos de caminhada) |
| Escola – Praça | 6 |
| Praça – Igreja | 2 |
| Praça – Feira | 4 |
| Escola – Feira | 9 |
| Feira – Rodoviária | 5 |
| Igreja – Rodoviária | 8 |

**Passo a passo para montar o grafo de qualquer lugar:**
| Passo | O que fazer |
| 1. Escolher os lugares | Cada lugar vira um vértice |
| 2. Ver o que liga | Cada rua entre dois lugares vira uma aresta |
| 3. Medir | O tempo ou a distância vira o peso |
| 4. Usar | Achar caminhos e o caminho mais curto |

**Exemplo:** da Escola até a Rodoviária, o caminho Escola → Praça → Feira → Rodoviária soma 6 + 4 + 5 = **15 minutos**. O caminho Escola → Feira → Rodoviária soma 9 + 5 = **14 minutos**: é o mais curto!
### 📖 O que significa?
- **Mapa**: desenho de um lugar visto de cima, com ruas e pontos importantes.
- **Modelo**: um jeito simplificado de representar algo real; o grafo é um modelo do mapa.
- **Ponto de referência**: lugar conhecido que ajuda a se localizar, como a igreja ou a praça.
- **Rodoviária**: lugar onde os ônibus de viagem chegam e partem.
### 🌎 Onde eu uso isso?
- Para explicar a um **visitante** como chegar à escola.
- O **mototáxi** e o **entregador** escolhem o caminho mais rápido pela cidade.
- A **prefeitura** planeja as rotas do ônibus escolar.
### 🎯 Missão
🟢 **Básico** — no portal: monte o grafo da cidade e trace o caminho mais curto da Escola até a Rodoviária.
🟡 **Desafio** — no portal: descubra o grau de cada lugar e o ponto mais conectado.
🔴 **Turbo** — no portal: planeje um passeio que passa pela Igreja.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Num grafo da cidade, cada lugar vira um vértice.
2. ( ) O grafo é um modelo simplificado do mapa.
3. ( ) No exemplo, o caminho mais curto da Escola até a Rodoviária leva 15 minutos.
4. ( ) Cada rua entre dois lugares vira uma aresta.
5. ( ) O peso pode ser o tempo de caminhada entre dois lugares.
### 🧠 Resumo da Aula
Para fazer o grafo de um lugar: cada **lugar** vira um vértice, cada **rua** vira uma aresta e o **tempo** vira o peso. O grafo é um **modelo** simplificado do mapa e ajuda a achar o caminho mais curto.
**Palavras-chave:** mapa · modelo · vértice · aresta · peso · ponto de referência

## 🌀 Missão 8 – Extra: Labirintos
**Objetivo:** ver um labirinto como um grafo e usar estratégias para sair dele.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Todo **labirinto** é um grafo escondido! Cada **cruzamento** (onde dá para escolher o caminho) e cada **beco sem saída** viram **vértices**. Cada **corredor** entre eles vira uma **aresta**.
| No labirinto | No grafo |
| Entrada e saída | Vértice de começo e vértice de fim |
| Cruzamento | Vértice com grau 3 ou mais |
| Beco sem saída | Vértice com grau 1 |
| Corredor | Aresta |

**Estratégias para sair de um labirinto:**
| Estratégia | Como funciona |
| ✋ Mão na parede | Encoste a mão numa parede e nunca solte. Funciona nos labirintos em que todas as paredes estão ligadas umas às outras. |
| 🔙 Tentar e voltar | Siga um caminho; se der num beco sem saída, volte até o último cruzamento e tente outro. |
| 🧵 Marcar o caminho | Marque por onde já passou (como um fio ou uma pedrinha) para não repetir. |

A estratégia **tentar e voltar** é usada pelos computadores para resolver labirintos, quebra-cabeças e jogos: o nome dela em programação é **retrocesso** (em inglês, *backtracking*).
### 📖 O que significa?
- **Labirinto**: lugar com muitos corredores e caminhos, em que é fácil se perder.
- **Cruzamento**: lugar em que dá para escolher entre dois ou mais caminhos.
- **Beco sem saída**: corredor que não leva a lugar nenhum; é preciso voltar.
- **Retrocesso** (*backtracking*): voltar ao último cruzamento e tentar outro caminho.
- **Estratégia**: um plano para resolver um problema.
### 🌎 Onde eu uso isso?
- Nos **jogos** de labirinto e de aventura, em que os inimigos acham o caminho até você.
- O **robô aspirador** precisa achar o caminho pela casa sem ficar preso.
- Os **parques** e as **fazendas** fazem labirintos de plantas para os visitantes.
### 🎯 Missão
🟢 **Básico** — no portal: leve o robô até a saída do labirinto, ligue cada parte do labirinto à parte do grafo e responda às perguntas.
🟡 **Desafio** — no portal: um labirinto maior, com becos sem saída.
🔴 **Turbo** — no portal: coloque em ordem os passos do “tentar e voltar”.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Todo labirinto pode ser visto como um grafo.
2. ( ) O beco sem saída é um vértice de grau 1.
3. ( ) Na estratégia “tentar e voltar”, quem chega a um beco sem saída desiste do labirinto.
4. ( ) Os computadores usam a estratégia “tentar e voltar” para resolver labirintos.
5. ( ) Cada corredor do labirinto vira uma aresta do grafo.
### 🧠 Resumo da Aula
Um **labirinto** é um grafo: **cruzamentos** e **becos sem saída** são vértices, e os **corredores** são arestas. Para sair: **mão na parede**, **tentar e voltar** (**retrocesso**) ou **marcar o caminho**. Os computadores usam o retrocesso para resolver labirintos e quebra-cabeças.
**Palavras-chave:** labirinto · cruzamento · beco sem saída · retrocesso · estratégia

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

## 📝 Atividade de recuperação
**Objetivo:** mostrar o que você aprendeu nas missões que a sua turma estudou e recuperar a nota do bimestre.
### 💡 Para começar
Esta atividade só aparece para quem o professor **liberou**. Ela vale **nota de 0 a 10**, que entra sozinha no boletim, no lugar da recuperação (quando for maior que a sua nota).
| Como funciona | O que quer dizer |
| 📚 Só as missões estudadas | O portal mostra só as missões que a sua turma estudou |
| 🎯 Vale nota | Atividade certa de primeira vale o ponto inteiro; cada erro tira um pouco |
| 🚫 Sem dica | Aqui não tem 💡 Dica nem 📘 resolução comentada: é a hora de mostrar o que você sabe |
| 🔎 Pode consultar | Antes de responder, abra a missão e releia o 💡 Para começar e o 🧠 Resumo da Aula |

**Dica de ouro:** leia com calma e só clique em **Verificar** quando tiver certeza.

# Apostila de Informática – 9º Ano – 1º Bimestre de 2027
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 9º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
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
Neste bimestre você vai conhecer as **estruturas** que estão por trás do GPS, das pastas do computador, dos jogos e dos aparelhos que respondem a botões: **grafos**, **árvores**, **autômatos** e **eventos**. São **6 missões** e, se sobrar aula, **2 missões extras**. Antes da prova tem a **🔁 Revisão**.
| Missão | Tema |
| 🗺️ Missão 1 – Grafos e o melhor caminho | Pensamento Computacional |
| 🌳 Missão 2 – Árvores | Pensamento Computacional |
| ❓ Missão 3 – Árvores de decisão | Pensamento Computacional |
| 🧱 Missão 4 – Programar com grafos e árvores | Pensamento Computacional |
| 🤖 Missão 5 – Autômatos: máquinas de estados | Pensamento Computacional |
| ⚡ Missão 6 – Programação por eventos | Pensamento Computacional |
| 🚦 Missão 7 – Extra: O semáforo | Pensamento Computacional |
| 🏫 Missão 8 – Extra: O mapa da escola em grafo | Pensamento Computacional |
| 🔁 Revisão para a prova | Todas as missões estudadas |

**Cada missão tem 3 níveis:**
| Nível | Quem faz | O que vale |
| 🟢 Básico | Todos os alunos | Obrigatório: é o visto da missão e libera os jogos livres no fim da aula |
| 🟡 Desafio | Quem terminou o Básico | **+0,25 ponto**: aumenta a sua nota do bimestre |
| 🔴 Turbo | Quem terminou o Desafio | **+0,25 ponto**: aumenta ainda mais a sua nota |

**Algumas atividades usam o editor de blocos:**
| Parte | Para que serve |
| 🗄️ Gavetas (à esquerda) | Guardam os blocos. Clique numa gaveta e arraste o bloco para a área branca |
| 🧱 Área branca | Onde você monta o programa, encaixando um bloco embaixo do outro |
| ▶️ Rodar o programa | O computador executa os blocos (e, nas missões de eventos, faz os eventos acontecerem) |
| 📺 Tela do programa | Mostra o que o programa escreveu. O portal confere se está certo |

🔎 **Todas as respostas estão na apostila:** leia o **💡 Para começar** e o **📖 O que significa?**. Errou? Leia de novo com calma, peça uma **💡 Dica** ou veja a **📘 resolução comentada**. Você consegue fazer tudo sozinho!
**Regra de ouro:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor.

## 🗺️ Missão 1 – Grafos e o melhor caminho
**Objetivo:** representar lugares e ligações como um grafo, com vértices, arestas e pesos, e encontrar o caminho de menor soma.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Como o aplicativo de mapa sabe o caminho mais rápido de casa até a escola? Ele enxerga a cidade como um **grafo**: **pontos** ligados por **linhas**.
| Parte do grafo | O que é | No mapa da cidade |
| ⚪ Vértice | Um ponto | Uma esquina, uma casa, a escola |
| ➖ Aresta | Uma ligação entre dois vértices | Uma rua entre duas esquinas |
| 🔢 Peso | Um número na aresta | Os minutos (ou metros) daquela rua |
| 🔗 Grau | Quantas arestas saem de um vértice | Quantas ruas chegam numa esquina |

Um **caminho** é uma sequência de vértices ligados por arestas, como Casa → Padaria → Escola. O **tamanho** do caminho é a **soma dos pesos** das arestas dele.
**Exemplo: o bairro**
| Aresta | Peso (minutos) |
| Casa — Padaria | 3 |
| Padaria — Escola | 2 |
| Casa — Praça | 4 |
| Praça — Escola | 4 |
| Casa — Escola (rua direta) | 9 |

| Caminho da Casa até a Escola | Soma |
| Casa → Escola (direto) | 9 |
| Casa → Praça → Escola | 4 + 4 = 8 |
| Casa → Padaria → Escola | 3 + 2 = **5** ✅ |

O **caminho mais curto** é o de **menor soma dos pesos**, e **nem sempre** é o que tem menos paradas: a rua direta tem uma aresta só, mas soma 9. O aplicativo de mapa faz essas contas com milhões de ruas em segundos.
### 📖 O que significa?
- **Grafo**: estrutura formada por vértices (pontos) ligados por arestas (linhas). Serve para representar ligações: ruas, amizades, voos, cabos.
- **Vértice** (ou nó): cada ponto do grafo.
- **Aresta**: cada ligação entre dois vértices.
- **Peso**: número na aresta que diz o “custo” de passar por ela (tempo, distância, preço).
- **Grau**: quantas arestas saem de um vértice.
- **Caminho**: sequência de vértices ligados por arestas, do início até o fim.
- **Caminho mais curto**: o caminho com a menor soma dos pesos.
- **GPS** (*Global Positioning System*, Sistema de Posicionamento Global): sistema de satélites que diz onde você está; os aplicativos de mapa juntam o GPS com grafos para achar o caminho.
### 🌎 Onde eu uso isso?
- O **aplicativo de mapa** e o **aplicativo de entrega** calculam o caminho mais curto num grafo de ruas.
- Nas **redes sociais**, cada pessoa é um vértice e cada amizade é uma aresta: “amigos em comum” vêm daí.
- A **internet** é um grafo de roteadores ligados por cabos; os pacotes seguem o melhor caminho.
| ✍️ Pense e escreva: desenhe na cabeça o grafo do caminho da sua casa até a escola. Quais seriam os vértices? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: ache o caminho mais curto clicando nos lugares, monte um grafo e responda sobre vértices, arestas, pesos e graus.
🟡 **Desafio** — no portal: a rua fechada: o caminho mais curto muda.
🔴 **Turbo** — no portal: a entrega em duas partes.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Num grafo de ruas, cada esquina pode ser um vértice.
2. ( ) O caminho com menos paradas é sempre o mais curto.
3. ( ) O peso é o número que aparece numa aresta.
4. ( ) O grau de um vértice é quantas arestas saem dele.
5. ( ) O tamanho de um caminho é a soma dos pesos das suas arestas.
### 🧠 Resumo da Aula
Um **grafo** tem **vértices** (pontos) ligados por **arestas** (linhas). O **peso** é o número da aresta (tempo, distância); o **grau** é quantas arestas saem de um vértice. Um **caminho** é uma sequência de vértices ligados, e o seu tamanho é a **soma dos pesos**. O **caminho mais curto** é o de menor soma, e nem sempre é o de menos paradas. Mapas, redes sociais e a internet são grafos.
**Palavras-chave:** grafo · vértice · aresta · peso · grau · caminho · caminho mais curto · GPS

## 🌳 Missão 2 – Árvores
**Objetivo:** reconhecer a árvore como um grafo com raiz, galhos e folhas, sem voltas, e achar caminhos, níveis e folhas.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Uma **árvore**, na computação, é um grafo especial, desenhado **de cabeça para baixo**: a **raiz** fica em cima e os **galhos** descem até as **folhas**.
| Parte | O que é | Nas pastas do computador |
| 🌱 Raiz | O vértice de cima, onde tudo começa | A pasta Documentos |
| 👨‍👧 Pai e filho | Quem está logo acima é o pai; logo abaixo, os filhos | A pasta Escola é filha de Documentos |
| 🍃 Folha | Vértice sem filhos, no fim de um galho | Os arquivos (redação.txt, foto.jpg) |
| 📏 Nível | Quantos passos da raiz até o vértice | Documentos = nível 0; Escola = nível 1 |

**Exemplo:**
| Nível 0 | Nível 1 | Nível 2 |
| 📁 Documentos | 📁 Escola | 📄 redação.txt · 📄 mapa.png |
| | 📁 Fotos | 📄 aniversário.jpg |

**O que faz um grafo ser árvore:**
| Regra | Por quê |
| Tem uma raiz | Tudo começa num lugar só |
| **Não tem voltas** (ciclos) | Não dá para sair de um vértice e voltar a ele sem repetir caminho |
| De um vértice a outro existe **um único caminho** | Da raiz até mapa.png só existe: Documentos › Escola › mapa.png |

Árvores servem para organizar coisas **em hierarquia** (do mais geral para o mais específico): pastas, árvore genealógica, campeonato mata-mata, organograma da escola.
### 📖 O que significa?
- **Árvore**: grafo sem voltas (ciclos), com uma raiz, em que existe um único caminho entre dois vértices.
- **Raiz**: o vértice do topo, onde a árvore começa.
- **Pai** e **filho**: o vértice logo acima é o pai; os logo abaixo são os filhos.
- **Folha**: vértice que não tem filhos.
- **Nível** (ou profundidade): quantos passos da raiz até o vértice (a raiz está no nível 0).
- **Ciclo**: caminho que sai de um vértice e volta a ele. Árvores não têm ciclos.
- **Hierarquia**: organização em níveis, do mais geral para o mais específico.
### 🌎 Onde eu uso isso?
- As **pastas** do computador e do celular formam uma árvore.
- A **árvore genealógica** da família mostra avós, pais e filhos em níveis.
- O **mata-mata** da Copa é uma árvore: as folhas são os times e a raiz é o campeão.
| ✍️ Pense e escreva: monte de cabeça a árvore de uma coisa que você conhece (família, campeonato, pastas). Quem é a raiz? Quem são as folhas? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: explore a árvore de pastas, ache raiz, folhas, níveis e caminhos, e diga o que é e o que não é árvore.
🟡 **Desafio** — no portal: o mata-mata do campeonato como árvore.
🔴 **Turbo** — no portal: árvores e ciclos.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Numa árvore da computação, a raiz fica em cima.
2. ( ) Folha é o vértice que tem mais filhos.
3. ( ) As pastas do computador formam uma árvore.
4. ( ) Uma árvore pode ter ciclos (voltas).
5. ( ) Numa árvore, existe um único caminho entre dois vértices.
### 🧠 Resumo da Aula
A **árvore** é um grafo sem **ciclos**, desenhado de cabeça para baixo: a **raiz** em cima, os galhos descendo e as **folhas** (vértices sem filhos) no fim. O vértice logo acima é o **pai**; os de baixo, os **filhos**. O **nível** é quantos passos da raiz até o vértice. Entre dois vértices há um **único caminho**. Árvores organizam **hierarquias**: pastas, família, mata-mata.
**Palavras-chave:** árvore · raiz · pai · filho · folha · nível · ciclo · hierarquia

## ❓ Missão 3 – Árvores de decisão
**Objetivo:** usar árvores de perguntas de sim ou não para tomar decisões e classificar coisas, e contar quantas perguntas são necessárias.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Já jogou **“adivinhe o objeto”** com perguntas de sim ou não? Isso é uma **árvore de decisão**: cada **vértice** é uma **pergunta**, cada **galho** é uma **resposta** (sim ou não) e cada **folha** é uma **decisão** final.
**Exemplo: adivinhe o objeto da sala**
| Pergunta 1 | Pergunta 2 | Folha (resposta) |
| É eletrônico? **sim** → | Tem tela? **sim** → | 🖥️ Monitor |
| | Tem tela? **não** → | ⌨️ Teclado |
| É eletrônico? **não** → | Serve para escrever? **sim** → | ✏️ Lápis |
| | Serve para escrever? **não** → | 🪑 Cadeira |

**Como usar:** comece na **raiz** (a primeira pergunta), responda e siga o galho da resposta até chegar a uma **folha**.
**Contas da árvore de decisão:**
| Pergunta | Nesta árvore |
| Quantas decisões (folhas)? | 4 |
| Quantas perguntas, no máximo, até decidir (profundidade)? | 2 |
| Com perguntas de sim/não, cada nível a mais **dobra** as folhas | 1 pergunta → 2 folhas; 2 → 4; 3 → 8 |

**Boa árvore de decisão:** cada pergunta tem **resposta clara** (sim ou não) e **divide** as possibilidades. “Ele é legal?” é uma pergunta ruim: cada pessoa responde de um jeito.
### 📖 O que significa?
- **Árvore de decisão**: árvore em que cada vértice é uma pergunta, cada galho é uma resposta e cada folha é uma decisão.
- **Decisão** (ou classificação): a resposta final, na folha.
- **Condição**: pergunta de sim ou não, como “é eletrônico?”.
- **Profundidade**: o número máximo de perguntas da raiz até uma folha.
- **IA** (Inteligência Artificial): programas que aprendem a decidir; muitos usam árvores de decisão montadas a partir de exemplos.
### 🌎 Onde eu uso isso?
- No **atendimento automático** do telefone: “digite 1 para… 2 para…” é uma árvore de decisão.
- Na **triagem do posto de saúde**: tem febre? Há quantos dias? Cada resposta leva a uma cor de prioridade.
- No **jogo do Akinator** e em **filtros de compra** (preço, tamanho, cor).
| ✍️ Pense e escreva: invente duas perguntas de sim ou não que separem 4 animais diferentes. |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: siga a árvore até a folha, conte folhas e perguntas e separe perguntas boas e ruins; no editor, monte a árvore com **se … senão** dentro de **se … senão**.
🟡 **Desafio** — no portal: a árvore da triagem.
🔴 **Turbo** — no portal: quantas perguntas para 16 e para 32 opções?
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Numa árvore de decisão, as folhas são as decisões finais.
2. ( ) Cada galho de uma árvore de decisão de sim ou não é uma resposta.
3. ( ) “Ele é legal?” é uma boa pergunta para uma árvore de decisão.
4. ( ) Com 3 perguntas de sim ou não, dá para separar até 8 opções.
5. ( ) O atendimento automático do telefone usa uma árvore de decisão.
### 🧠 Resumo da Aula
Na **árvore de decisão**, cada vértice é uma **pergunta** de sim ou não (condição), cada galho é uma **resposta** e cada **folha** é uma **decisão**. Começamos na raiz e seguimos os galhos. A **profundidade** é o máximo de perguntas até decidir; com sim/não, cada pergunta a mais **dobra** as opções (1 → 2, 2 → 4, 3 → 8). Boas perguntas têm resposta clara. Usos: atendimento automático, triagem, IA.
**Palavras-chave:** árvore de decisão · decisão · condição · profundidade · IA

## 🧱 Missão 4 – Programar com grafos e árvores
**Objetivo:** escrever programas que guardam um grafo como lista de vizinhos e que transformam uma árvore de decisão em blocos se … senão.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Como o computador **guarda** um grafo? Um jeito muito usado é a **lista de vizinhos** (lista de adjacência): para cada vértice, guardamos a **lista** dos vértices ligados a ele.
| Vértice | Vizinhos |
| Pátio | Portão, Cantina, Informática, Biblioteca |
| Portão | Pátio |
| Informática | Pátio, Biblioteca |

O **grau** do vértice é o **tamanho** da lista de vizinhos: Pátio tem grau **4**.
No editor, usamos uma **ficha** chamada **vizinhos**, com um **campo** para cada vértice; o valor de cada campo é uma **lista**:
| Bloco | Faz |
| na ficha vizinhos o campo Pátio vale (criar lista com Portão, Cantina, Informática, Biblioteca) | Guarda os vizinhos do Pátio |
| tamanho de (campo Pátio da ficha vizinhos) | Calcula o grau do Pátio → 4 |
| para cada item v na lista (campo Pátio da ficha vizinhos) | Percorre os vizinhos, um por um |

E a **árvore de decisão** vira **se … senão dentro de se … senão**: a pergunta da raiz é o primeiro **se**; cada galho tem outro **se** dentro; as folhas são os **mostrar**.
| Árvore | Blocos |
| É eletrônico? | **se** eletronico = verdadeiro |
| └ sim: Tem tela? | ↳ **se** tela = verdadeiro → mostrar “Monitor”; **senão** → mostrar “Teclado” |
| └ não: Serve para escrever? | ↳ **senão**: **se** escreve = verdadeiro → mostrar “Lápis”; **senão** → mostrar “Cadeira” |

### 📖 O que significa?
- **Lista de vizinhos** (lista de adjacência): jeito de guardar um grafo: para cada vértice, a lista dos vértices ligados a ele.
- **Vizinho**: vértice ligado diretamente a outro. Dois vértices são vizinhos quando estão ligados por uma aresta.
- **Representar**: guardar uma coisa do mundo (um mapa, uma árvore) num formato que o computador entende.
- **Se aninhado**: um bloco se colocado dentro de outro se, como os galhos de uma árvore.
### 🌎 Onde eu uso isso?
- O aplicativo da **rede social** guarda, para cada pessoa, a lista de amigos (vizinhos) e conta quantos você tem (grau).
- O **jogo** guarda o mapa de salas como lista de vizinhos: de cada sala, para onde dá para ir.
- O **atendimento automático** é um programa de **se** dentro de **se**.
| ✍️ Pense e escreva: num jogo que você conhece, o que seriam os vértices e os vizinhos? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: monte a lista de vizinhos a partir das arestas; no editor, calcule o grau e mostre os vizinhos.
🟡 **Desafio** — no editor: a árvore de decisão do objeto, com se dentro de se.
🔴 **Turbo** — no editor: o vértice de maior grau.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na lista de vizinhos, guardamos para cada vértice os vértices ligados a ele.
2. ( ) O grau de um vértice é o tamanho da sua lista de vizinhos.
3. ( ) Uma árvore de decisão vira, no programa, um se dentro de outro se.
4. ( ) Vizinhos são vértices que não têm nenhuma ligação.
5. ( ) A rede social guarda a lista de amigos de cada pessoa.
### 🧠 Resumo da Aula
Para **representar** um grafo no programa, usamos a **lista de vizinhos**: para cada vértice, a lista dos vértices ligados a ele; o **grau** é o tamanho dessa lista, e o **para cada** percorre os vizinhos. No editor, uma ficha guarda um campo por vértice. A **árvore de decisão** vira **se** dentro de **se** (se aninhado): a raiz é o primeiro se e as folhas são os mostrar.
**Palavras-chave:** lista de vizinhos · vizinho · grau · representar · se aninhado

## 🤖 Missão 5 – Autômatos: máquinas de estados
**Objetivo:** descrever máquinas que mudam de estado conforme as entradas, usando estados, transições e tabelas de transição.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
A **catraca do ônibus** pode estar **travada** ou **liberada**. Ela muda de um jeito para o outro conforme o que acontece: alguém paga (**cartão**) ou alguém **empurra**. Uma máquina assim, que está sempre num **estado** e muda conforme as **entradas**, é um **autômato** (máquina de estados).
| Estado atual | Entrada | Próximo estado | O que acontece |
| 🔒 Travada | 💳 cartão | 🔓 Liberada | A luz fica verde |
| 🔒 Travada | 🚶 empurrar | 🔒 Travada | Não gira |
| 🔓 Liberada | 🚶 empurrar | 🔒 Travada | Gira: uma pessoa passa |
| 🔓 Liberada | 💳 cartão | 🔓 Liberada | Já estava liberada |

Essa é a **tabela de transição**: para cada **estado** e cada **entrada**, ela diz o **próximo estado**. Cada mudança de estado é uma **transição**. O estado em que a máquina começa é o **estado inicial** (a catraca começa travada).
**Seguindo uma sequência de entradas:** começando travada, com as entradas **empurrar → cartão → empurrar**:
| Passo | Estado antes | Entrada | Estado depois |
| 1 | Travada | empurrar | Travada |
| 2 | Travada | cartão | Liberada |
| 3 | Liberada | empurrar | Travada |

**Onde estão os autômatos:** semáforo (verde → amarelo → vermelho), máquina de refrigerante, elevador, porta automática, controle de videogame (personagem parado, correndo, pulando).
### 📖 O que significa?
- **Autômato** (máquina de estados): máquina que está sempre num estado e muda de estado conforme as entradas.
- **Estado**: a situação em que a máquina está agora (travada, liberada, verde, vermelho).
- **Entrada**: o que acontece de fora e pode mudar o estado (cartão, botão, tempo).
- **Transição**: a mudança de um estado para outro.
- **Tabela de transição**: tabela que diz, para cada estado e cada entrada, qual é o próximo estado.
- **Estado inicial**: o estado em que a máquina começa.
### 🌎 Onde eu uso isso?
- A **catraca** do ônibus e da escola, o **semáforo** e o **elevador** são autômatos.
- No **videogame**, o personagem tem estados (parado, correndo, pulando) que mudam com os botões.
- A **máquina de refrigerante** espera o dinheiro, libera a escolha e entrega a lata.
| ✍️ Pense e escreva: escolha um aparelho que você usa. Quais são os estados dele? O que faz ele mudar de estado? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: complete a tabela de transição da catraca, siga sequências de entradas e separe estados e entradas.
🟡 **Desafio** — no portal: o autômato da porta automática.
🔴 **Turbo** — no portal: o autômato do personagem do jogo.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Um autômato está sempre em algum estado.
2. ( ) A transição é a mudança de um estado para outro.
3. ( ) Na catraca travada, empurrar faz ela girar.
4. ( ) A tabela de transição diz o próximo estado para cada estado e cada entrada.
5. ( ) O semáforo é um exemplo de autômato.
### 🧠 Resumo da Aula
Um **autômato** (máquina de estados) está sempre num **estado** e muda conforme as **entradas**. Cada mudança é uma **transição**. A **tabela de transição** diz, para cada estado e entrada, o próximo estado. A máquina começa no **estado inicial**. Exemplos: catraca (travada/liberada), semáforo, elevador, máquina de refrigerante, personagem de jogo.
**Palavras-chave:** autômato · estado · entrada · transição · tabela de transição · estado inicial

## ⚡ Missão 6 – Programação por eventos
**Objetivo:** criar programas que reagem a eventos (cliques, botões, sensores), com um bloco de instruções para cada evento.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Os programas que fizemos até agora rodam **de cima para baixo** e terminam. Mas o celular, o jogo e a catraca **esperam** algo acontecer e então **reagem**. Isso é a **programação por eventos**.
| Evento (o que acontece) | Tratador (o que o programa faz) |
| 👆 Tocar no ícone | Abrir o aplicativo |
| 🔔 Chegar mensagem | Vibrar e mostrar a notificação |
| ⬆️ Apertar o botão de pular | O personagem pula |
| 💳 Passar o cartão na catraca | Liberar e acender a luz verde |

No editor, a gaveta **⚡ Eventos** tem o bloco **“quando acontecer … faça …”**. Os blocos de dentro só rodam **quando aquele evento acontece**, e rodam **de novo toda vez** que ele acontece.
**Exemplo: o contador de cliques**
| Bloco | O que faz |
| definir cliques para 0 | Roda uma vez, no começo |
| ⚡ quando acontecer 🟢 botão: alterar cliques por 1; mostrar cliques | Roda a cada clique no botão |
Se o botão for apertado 3 vezes, aparece 1, 2, 3.
**Eventos + estados = autômato no programa:** uma variável guarda o **estado** (travada ou liberada) e cada **evento** (cartão, empurrar) usa um **se** para decidir a transição.
Ao apertar ▶️ Rodar, o portal **faz os eventos acontecerem** na ordem mostrada em cima do editor, como se alguém apertasse os botões.
### 📖 O que significa?
- **Evento**: algo que acontece e o programa percebe: um clique, uma tecla, uma mensagem que chega, um sensor que detecta.
- **Programação por eventos**: jeito de programar em que o programa espera os eventos e reage a cada um.
- **Tratador de evento**: o conjunto de blocos que roda quando aquele evento acontece.
- **Sensor**: peça que percebe algo do mundo (movimento, luz, temperatura) e gera um evento.
- **Notificação**: aviso que o celular mostra quando um evento acontece, como uma mensagem nova.
### 🌎 Onde eu uso isso?
- Todo **aplicativo de celular** é programado por eventos: tocar, arrastar, chegar mensagem.
- A **porta automática** do mercado reage ao **sensor** de movimento.
- Nos **jogos**, cada botão do controle é um evento com o seu tratador.
| ✍️ Pense e escreva: num aplicativo que você usa, cite um evento e o que o aplicativo faz quando ele acontece. |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: ligue eventos aos tratadores; no editor, monte o contador de cliques e o botão que fala.
🟡 **Desafio** — no editor: a catraca programada com eventos e estados.
🔴 **Turbo** — no editor: o placar de dois botões.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na programação por eventos, o programa espera algo acontecer e então reage.
2. ( ) O tratador de evento roda uma vez só, mesmo que o evento aconteça várias vezes.
3. ( ) Tocar no ícone do aplicativo é um evento.
4. ( ) Um sensor de movimento pode gerar um evento.
5. ( ) Uma variável pode guardar o estado de um autômato no programa.
### 🧠 Resumo da Aula
Na **programação por eventos**, o programa **espera** e **reage**: cada **evento** (clique, tecla, mensagem, **sensor**) tem um **tratador**, os blocos que rodam toda vez que ele acontece. No editor, é o bloco **“quando acontecer … faça …”**. Juntando eventos e uma variável de **estado**, programamos um **autômato**, como a catraca.
**Palavras-chave:** evento · programação por eventos · tratador de evento · sensor · notificação

## 🚦 Missão 7 – Extra: O semáforo
**Objetivo:** modelar o semáforo como autômato e programá-lo com eventos de tempo, incluindo o botão de pedestre.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O **semáforo** é um autômato com 3 estados. A entrada é o **tempo**: cada vez que o tempo do estado acaba (evento **tique**), ele passa para o próximo.
| Estado atual | Entrada | Próximo estado |
| 🟢 Verde | ⏱️ tique | 🟡 Amarelo |
| 🟡 Amarelo | ⏱️ tique | 🔴 Vermelho |
| 🔴 Vermelho | ⏱️ tique | 🟢 Verde |

O ciclo se repete para sempre: verde → amarelo → vermelho → verde…
**O botão de pedestre:** muitos semáforos têm um botão para quem atravessa. Uma regra comum: se o semáforo estiver **verde** e o pedestre apertar o botão, ele vai **para o amarelo** (para depois ficar vermelho e o pedestre atravessar). Em amarelo ou vermelho, o botão **não muda nada**.
| Estado atual | Entrada | Próximo estado |
| 🟢 Verde | 🚶 botão | 🟡 Amarelo |
| 🟡 Amarelo | 🚶 botão | 🟡 Amarelo |
| 🔴 Vermelho | 🚶 botão | 🔴 Vermelho |

**No programa:** uma variável **luz** guarda o estado; o evento **tique** usa **se … senão** para escolher o próximo estado; o evento **botão** só muda quando a luz é verde.
### 📖 O que significa?
- **Ciclo** (no semáforo): sequência de estados que se repete sempre na mesma ordem.
- **Tique**: aqui, o evento de tempo que avisa que o tempo daquele estado acabou.
- **Temporizador** (*timer*): peça ou programa que conta o tempo e gera o evento quando ele acaba.
- **Pedestre**: quem anda a pé e atravessa a rua.
### 🌎 Onde eu uso isso?
- Os **semáforos** da cidade, com ou sem botão de pedestre.
- O **micro-ondas** e o **despertador** usam temporizador: quando o tempo acaba, um evento acontece (apita).
- Nos **jogos**, o tempo de cada fase é controlado por temporizadores.
| ✍️ Pense e escreva: se você fosse programar um semáforo para a frente da escola, mudaria alguma regra? Qual? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: complete a tabela do semáforo e siga sequências de tiques; no editor, programe o semáforo com o evento tique.
🟡 **Desafio** — no editor: acrescente o botão de pedestre.
🔴 **Turbo** — no portal: o semáforo de 4 estados.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) O semáforo tem os estados verde, amarelo e vermelho.
2. ( ) Depois do amarelo, com um tique, vem o verde.
3. ( ) O temporizador gera um evento quando o tempo acaba.
4. ( ) Na regra desta missão, o botão de pedestre muda o semáforo verde para amarelo.
5. ( ) O ciclo do semáforo se repete sempre na mesma ordem.
### 🧠 Resumo da Aula
O **semáforo** é um autômato de 3 estados num **ciclo**: verde → amarelo → vermelho → verde. A entrada é o **tique** do **temporizador**. O **botão de pedestre**, na regra desta missão, leva o verde para o amarelo e não muda os outros estados. No programa, a variável **luz** guarda o estado e cada evento usa **se … senão** para fazer a transição.
**Palavras-chave:** semáforo · ciclo · tique · temporizador · pedestre

## 🏫 Missão 8 – Extra: O mapa da escola em grafo
**Objetivo:** transformar a planta da escola num grafo com pesos e usá-lo para achar caminhos curtos e o lugar mais conectado.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Vamos transformar a nossa escola num grafo! Cada **lugar** vira um **vértice** e cada **corredor** vira uma **aresta**. O **peso** é o tempo de caminhada, em minutos.
| Corredor (aresta) | Minutos |
| Portão — Pátio | 1 |
| Pátio — Cantina | 1 |
| Pátio — Sala de Informática | 2 |
| Pátio — Biblioteca | 2 |
| Sala de Informática — Biblioteca | 1 |

**Perguntas que o grafo responde:**
| Pergunta | Como achar | Resposta |
| Qual lugar é o mais conectado? | O vértice de **maior grau** | Pátio (grau 4) |
| Caminho mais curto do Portão à Informática? | Menor soma | Portão → Pátio → Informática = 1 + 2 = **3** |
| E se o corredor Pátio–Informática estiver em reforma? | Tirar a aresta e procurar de novo | Portão → Pátio → Biblioteca → Informática = 1 + 2 + 1 = **4** |

Quando uma aresta **some** (rua interditada, corredor em reforma), o caminho mais curto **muda**. O aplicativo de mapa faz isso quando uma rua é fechada.
**Para que serve o grafo da escola:** planejar a **rota de fuga** (o caminho mais curto até a saída), decidir onde colocar o **bebedouro** (no vértice de maior grau, por onde mais gente passa) e orientar visitantes.
### 📖 O que significa?
- **Planta**: o desenho da escola vista de cima, com as salas e os corredores.
- **Mais conectado**: o vértice com maior grau, ligado a mais lugares.
- **Rota de fuga**: o caminho mais curto e seguro até a saída numa emergência.
- **Interditar**: fechar uma rua ou um corredor; no grafo, é tirar a aresta.
### 🌎 Onde eu uso isso?
- Os **mapas de emergência** dos prédios mostram a rota de fuga até a saída.
- Os **shoppings** e **aeroportos** têm mapas que indicam o caminho mais curto até cada loja ou portão.
- O **aplicativo de mapa** recalcula a rota quando uma rua é interditada.
| ✍️ Pense e escreva: no grafo da escola, onde você colocaria o bebedouro? Por quê? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: monte o grafo da escola, ache graus e caminhos curtos.
🟡 **Desafio** — no portal: o corredor em reforma.
🔴 **Turbo** — no portal: a rota de fuga de cada sala.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) No grafo da escola, cada lugar é um vértice e cada corredor é uma aresta.
2. ( ) O Pátio é o lugar mais conectado, com grau 4.
3. ( ) O caminho mais curto do Portão até a Informática leva 4 minutos.
4. ( ) Quando uma aresta some, o caminho mais curto pode mudar.
5. ( ) A rota de fuga é o caminho mais longo até a saída.
### 🧠 Resumo da Aula
No **grafo da escola**, cada lugar é um **vértice** e cada corredor, uma **aresta** com **peso** (minutos). O vértice de **maior grau** é o **mais conectado** (Pátio). O **caminho mais curto** é o de menor soma (Portão → Pátio → Informática = 3). Se uma aresta for **interditada**, o caminho mais curto muda (4). Serve para a **rota de fuga**, para orientar visitantes e para planejar a escola.
**Palavras-chave:** planta · mais conectado · rota de fuga · interditar · grafo

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

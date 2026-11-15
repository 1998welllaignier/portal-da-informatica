# Apostila de Informática – 9º Ano – 1º Bimestre de 2027 · Trilha Passo a Passo
Prof. Welington · @Welington Laignier

## 📘 Como usar esta apostila
Neste bimestre você vai conhecer **grafos, árvores e máquinas que reagem**. São **6 missões**. Se sobrar aula, tem **2 missões extras**. Antes da prova tem a **🔁 Revisão**. São as mesmas missões da sua turma.
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

**Como funciona a Trilha Passo a Passo:**
- 👣 Faça **um passo de cada vez**.
- 🖱️ Quase tudo é feito **clicando** nos lugares do mapa e nos botões.
- 🧱 Nos programas, quase tudo **já vem montado**: você muda só um pedacinho.
- ✅ Clique em **Verificar** (ou **▶️ Rodar**) quando terminar cada atividade.
- 🔊 Quer ouvir o texto? Clique em **Ouvir**.
- ⏸️ Cansou? Pode parar e descansar um pouco. Tudo fica salvo.
- 🎉 No fim do Básico aparece a faixa **✅ Básico concluído**. Tudo fica registrado sozinho para o professor.

🔎 **Todas as respostas estão aqui na apostila.** Errou? Leia de novo com calma e tente outra vez. Você consegue!
**Regra importante:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode ficar com os jogos livres no final da aula. 🎮

## 🗺️ Missão 1 – Grafos e o melhor caminho
**Objetivo:** ver lugares e ruas como um grafo e achar o caminho de menor soma.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O aplicativo de mapa enxerga a cidade como um **grafo**: **pontos** ligados por **linhas**.
| Parte do grafo | O que é | No mapa da cidade |
| ⚪ Vértice | Um ponto | Uma esquina, uma casa, a escola |
| ➖ Aresta | Uma ligação entre dois vértices | Uma rua |
| 🔢 Peso | Um número na aresta | Os minutos daquela rua |

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

O **caminho mais curto** é o de **menor soma**, e **nem sempre** é o que tem menos paradas: a rua direta soma 9.
### 📖 O que significa?
- **Grafo**: pontos (vértices) ligados por linhas (arestas).
- **Vértice**: cada ponto do grafo.
- **Aresta**: cada ligação entre dois pontos.
- **Peso**: o número na aresta (tempo, distância).
- **Caminho mais curto**: o caminho com a menor soma dos pesos.
### 🌎 Onde eu uso isso?
- O **aplicativo de mapa** calcula o caminho mais curto.
- Nas **redes sociais**, cada pessoa é um vértice e cada amizade é uma aresta.
- O **aplicativo de entrega** escolhe o caminho mais rápido.
### ✅ Perguntas rápidas
1. ( ) Num grafo de ruas, cada esquina pode ser um vértice.
2. ( ) O caminho com menos paradas é sempre o mais curto.
3. ( ) O peso é o número que aparece numa aresta.
### 🧠 Resumo da Aula
O **grafo** tem **vértices** (pontos) ligados por **arestas** (linhas). O **peso** é o número da aresta. O **caminho mais curto** é o de menor soma, nem sempre o de menos paradas.
**Palavras-chave:** grafo · vértice · aresta · peso · caminho mais curto

## 🌳 Missão 2 – Árvores
**Objetivo:** reconhecer a raiz, os galhos e as folhas de uma árvore.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Uma **árvore**, na computação, é desenhada **de cabeça para baixo**: a **raiz** fica em cima e os galhos descem até as **folhas**.
| Parte | O que é | Nas pastas do computador |
| 🌱 Raiz | O vértice de cima, onde tudo começa | A pasta Documentos |
| 👨‍👧 Pai e filho | Quem está logo acima é o pai; logo abaixo, os filhos | A pasta Escola é filha de Documentos |
| 🍃 Folha | Vértice sem filhos, no fim de um galho | Os arquivos (redação.txt, foto.jpg) |
| 📏 Nível | Quantos passos da raiz até o vértice | Documentos = nível 0; Escola = nível 1 |

**Exemplo:**
| Nível 0 | Nível 1 | Nível 2 |
| 📁 Documentos | 📁 Escola | 📄 redação.txt · 📄 mapa.png |
| | 📁 Fotos | 📄 aniversário.jpg |

Na árvore **não tem voltas**: de um vértice a outro só existe **um caminho**.
### 📖 O que significa?
- **Árvore**: grafo sem voltas, com uma raiz em cima.
- **Raiz**: o vértice do topo, onde a árvore começa.
- **Folha**: vértice que não tem filhos.
- **Nível**: quantos passos da raiz até o vértice (a raiz é o nível 0).
### 🌎 Onde eu uso isso?
- As **pastas** do computador formam uma árvore.
- A **árvore genealógica** da família: avós, pais e filhos.
- O **mata-mata** do campeonato.
### ✅ Perguntas rápidas
1. ( ) Numa árvore da computação, a raiz fica em cima.
2. ( ) Folha é o vértice que tem mais filhos.
3. ( ) As pastas do computador formam uma árvore.
### 🧠 Resumo da Aula
A **árvore** tem a **raiz** em cima, os galhos descendo e as **folhas** (sem filhos) no fim. O **nível** é quantos passos da raiz. Não tem voltas.
**Palavras-chave:** árvore · raiz · folha · nível · pai · filho

## ❓ Missão 3 – Árvores de decisão
**Objetivo:** seguir perguntas de sim ou não até a resposta final.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Já jogou **“adivinhe o objeto”** com perguntas de sim ou não? Isso é uma **árvore de decisão**: cada vértice é uma **pergunta**, cada galho é uma **resposta** (sim ou não) e cada **folha** é a **decisão** final.
| Pergunta 1 | Pergunta 2 | Folha (resposta) |
| É eletrônico? **sim** → | Tem tela? **sim** → | 🖥️ Monitor |
| | Tem tela? **não** → | ⌨️ Teclado |
| É eletrônico? **não** → | Serve para escrever? **sim** → | ✏️ Lápis |
| | Serve para escrever? **não** → | 🪑 Cadeira |

**Como usar:** comece na primeira pergunta, responda e siga o galho até a **folha**.
**Boa pergunta** tem resposta clara (sim ou não). “Ele é legal?” é ruim: cada pessoa responde de um jeito.
### 📖 O que significa?
- **Árvore de decisão**: árvore de perguntas de sim ou não que termina numa resposta.
- **Decisão**: a resposta final, na folha. As folhas são as decisões finais.
- **Condição**: pergunta de sim ou não, como “é eletrônico?”.
### 🌎 Onde eu uso isso?
- No **atendimento automático** do telefone: “digite 1 para… 2 para…”.
- Na **triagem do posto de saúde**: cada resposta leva a uma cor de prioridade.
- No jogo de **adivinhar o objeto**.
### ✅ Perguntas rápidas
1. ( ) Numa árvore de decisão, as folhas são as decisões finais.
2. ( ) “Ele é legal?” é uma boa pergunta para uma árvore de decisão.
3. ( ) O atendimento automático do telefone usa uma árvore de decisão.
### 🧠 Resumo da Aula
Na **árvore de decisão**, cada vértice é uma **pergunta** de sim ou não, cada galho é uma resposta e cada **folha** é uma **decisão**. Boas perguntas têm resposta clara.
**Palavras-chave:** árvore de decisão · decisão · condição

## 🧱 Missão 4 – Programar com grafos e árvores
**Objetivo:** guardar os vizinhos de cada lugar e ver a árvore de decisão virar blocos.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O computador guarda um grafo com a **lista de vizinhos**: para cada lugar, a **lista** dos lugares ligados a ele.
| Vértice | Vizinhos |
| Pátio | Portão, Cantina, Informática, Biblioteca |
| Portão | Pátio |
| Informática | Pátio, Biblioteca |

O **grau** do lugar é **quantos vizinhos** ele tem: o Pátio tem grau **4**.
E a **árvore de decisão** vira **se … senão dentro de se … senão**: a primeira pergunta é o primeiro **se**; as folhas são os **mostrar**.
| Árvore | Blocos |
| É eletrônico? | **se** eletronico = verdadeiro |
| └ sim: Tem tela? | ↳ **se** tela = verdadeiro → mostrar “Monitor”; **senão** → mostrar “Teclado” |
| └ não: Serve para escrever? | ↳ **senão**: **se** escreve = verdadeiro → mostrar “Lápis”; **senão** → mostrar “Cadeira” |
### 📖 O que significa?
- **Lista de vizinhos**: para cada lugar, a lista dos lugares ligados a ele.
- **Vizinho**: lugar ligado diretamente a outro por uma aresta.
- **Grau**: quantos vizinhos um lugar tem.
### 🌎 Onde eu uso isso?
- A **rede social** guarda a lista de amigos de cada pessoa e conta quantos você tem.
- O **jogo** guarda, de cada sala, para onde dá para ir.
- O **atendimento automático** é um programa de **se** dentro de **se**.
### ✅ Perguntas rápidas
1. ( ) Na lista de vizinhos, guardamos para cada lugar os lugares ligados a ele.
2. ( ) O grau é quantos vizinhos um lugar tem.
3. ( ) Vizinhos são lugares que não têm nenhuma ligação.
### 🧠 Resumo da Aula
A **lista de vizinhos** guarda, para cada lugar, os lugares ligados a ele. O **grau** é quantos vizinhos ele tem. A árvore de decisão vira **se** dentro de **se**.
**Palavras-chave:** lista de vizinhos · vizinho · grau · se dentro de se

## 🤖 Missão 5 – Autômatos: máquinas de estados
**Objetivo:** seguir uma máquina que muda de estado, como a catraca do ônibus.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
A **catraca do ônibus** pode estar **travada** ou **liberada**. Ela muda conforme o que acontece: alguém passa o **cartão** ou **empurra**. Uma máquina assim é um **autômato** (máquina de estados).
| Estado atual | Entrada | Próximo estado | O que acontece |
| 🔒 Travada | 💳 cartão | 🔓 Liberada | A luz fica verde |
| 🔒 Travada | 🚶 empurrar | 🔒 Travada | Não gira |
| 🔓 Liberada | 🚶 empurrar | 🔒 Travada | Gira: uma pessoa passa |
| 🔓 Liberada | 💳 cartão | 🔓 Liberada | Já estava liberada |

A catraca **começa travada**. Cada mudança de estado é uma **transição**.
### 📖 O que significa?
- **Autômato**: máquina que está sempre num estado e muda conforme o que acontece.
- **Estado**: a situação da máquina agora (travada, liberada).
- **Entrada**: o que acontece e pode mudar o estado (cartão, empurrar).
- **Transição**: a mudança de um estado para outro.
### 🌎 Onde eu uso isso?
- A **catraca**, o **semáforo** e o **elevador** são autômatos.
- No **videogame**, o personagem fica parado, correndo ou pulando.
- A **máquina de refrigerante** espera o dinheiro e entrega a lata.
### ✅ Perguntas rápidas
1. ( ) Um autômato está sempre em algum estado.
2. ( ) Na catraca travada, empurrar faz ela girar.
3. ( ) O semáforo é um exemplo de autômato.
### 🧠 Resumo da Aula
O **autômato** está sempre num **estado** e muda conforme as **entradas**. Cada mudança é uma **transição**. A catraca: travada + cartão = liberada; liberada + empurrar = gira e trava.
**Palavras-chave:** autômato · estado · entrada · transição

## ⚡ Missão 6 – Programação por eventos
**Objetivo:** ver programas que esperam algo acontecer e reagem.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O celular e o jogo **esperam** algo acontecer e então **reagem**. Isso é a **programação por eventos**.
| Evento (o que acontece) | Tratador (o que o programa faz) |
| 👆 Tocar no ícone | Abrir o aplicativo |
| 🔔 Chegar mensagem | Vibrar e mostrar a notificação |
| ⬆️ Apertar o botão de pular | O personagem pula |
| 💳 Passar o cartão na catraca | Liberar e acender a luz verde |

No editor, o bloco **“quando acontecer … faça …”** roda **toda vez** que o evento acontece. Ao apertar ▶️ Rodar, o portal **aperta os botões sozinho**, na ordem mostrada em cima do editor.
### 📖 O que significa?
- **Evento**: algo que acontece e o programa percebe: um clique, uma mensagem, um sensor.
- **Tratador**: os blocos que rodam quando o evento acontece.
- **Sensor**: peça que percebe algo (movimento, luz) e gera um evento.
### 🌎 Onde eu uso isso?
- Todo **aplicativo de celular**: tocar, arrastar, chegar mensagem.
- A **porta automática** reage ao sensor de movimento.
- Nos **jogos**, cada botão do controle é um evento.
### ✅ Perguntas rápidas
1. ( ) Na programação por eventos, o programa espera algo acontecer e reage.
2. ( ) O tratador roda uma vez só, mesmo que o evento aconteça várias vezes.
3. ( ) Tocar no ícone do aplicativo é um evento.
### 🧠 Resumo da Aula
Na **programação por eventos**, o programa **espera** e **reage**. Cada **evento** tem um **tratador**, que roda toda vez que ele acontece.
**Palavras-chave:** evento · tratador · sensor

## 🚦 Missão 7 – Extra: O semáforo
**Objetivo:** seguir o semáforo como uma máquina de estados.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O **semáforo** tem 3 estados. Cada vez que o tempo acaba (evento **tique**), ele passa para o próximo.
| Estado atual | Entrada | Próximo estado |
| 🟢 Verde | ⏱️ tique | 🟡 Amarelo |
| 🟡 Amarelo | ⏱️ tique | 🔴 Vermelho |
| 🔴 Vermelho | ⏱️ tique | 🟢 Verde |

O **ciclo** se repete para sempre: verde → amarelo → vermelho → verde…
**O botão de pedestre:** se o semáforo estiver **verde** e o pedestre apertar o botão, ele vai **para o amarelo**. Em amarelo ou vermelho, o botão **não muda nada**.
| Estado atual | Entrada | Próximo estado |
| 🟢 Verde | 🚶 botão | 🟡 Amarelo |
| 🟡 Amarelo | 🚶 botão | 🟡 Amarelo |
| 🔴 Vermelho | 🚶 botão | 🔴 Vermelho |
### 📖 O que significa?
- **Ciclo**: estados que se repetem sempre na mesma ordem.
- **Tique**: o evento que avisa que o tempo daquele estado acabou.
- **Temporizador**: o que conta o tempo e avisa quando acaba.
- **Pedestre**: quem anda a pé e atravessa a rua.
### 🌎 Onde eu uso isso?
- Os **semáforos** da cidade.
- O **micro-ondas** apita quando o tempo acaba.
- Nos **jogos**, o tempo de cada fase.
### ✅ Perguntas rápidas
1. ( ) O semáforo tem os estados verde, amarelo e vermelho.
2. ( ) Depois do amarelo, com um tique, vem o verde.
3. ( ) O ciclo do semáforo se repete sempre na mesma ordem.
### 🧠 Resumo da Aula
O **semáforo** é um autômato de 3 estados num **ciclo**: verde → amarelo → vermelho → verde. A cada **tique**, muda. O botão de pedestre leva o verde para o amarelo.
**Palavras-chave:** semáforo · ciclo · tique · temporizador · pedestre

## 🏫 Missão 8 – Extra: O mapa da escola em grafo
**Objetivo:** usar o grafo da escola para achar caminhos curtos e o lugar mais conectado.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Vamos transformar a escola num grafo! Cada **lugar** vira um **vértice** e cada **corredor** vira uma **aresta**. O **peso** é o tempo de caminhada, em minutos.
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
### 📖 O que significa?
- **Mais conectado**: o lugar ligado a mais lugares (o de maior grau).
- **Rota de fuga**: o caminho mais curto e seguro até a saída numa emergência.
- **Planta**: o desenho da escola vista de cima.
### 🌎 Onde eu uso isso?
- Os **mapas de emergência** dos prédios mostram a rota de fuga.
- Os **shoppings** têm mapas com o caminho até cada loja.
- O **aplicativo de mapa** muda a rota quando uma rua é fechada.
### ✅ Perguntas rápidas
1. ( ) No grafo da escola, cada lugar é um vértice e cada corredor é uma aresta.
2. ( ) O Pátio é o lugar mais conectado, com grau 4.
3. ( ) A rota de fuga é o caminho mais longo até a saída.
### 🧠 Resumo da Aula
No grafo da escola, os lugares são **vértices** e os corredores, **arestas**. O **Pátio** é o mais conectado (grau 4). O caminho mais curto do Portão à Informática leva **3 minutos**.
**Palavras-chave:** grafo · mais conectado · rota de fuga · planta

## 🔁 Revisão para a prova
**Objetivo:** relembrar as missões que a sua turma estudou, um passo de cada vez.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Hoje é dia de **revisão**. O portal mostra **só as missões que a sua turma estudou**.
Em cada missão:
- 📚 **leia** o resumo;
- 🟢 **faça** as atividades;
- 🔁 errou? Leia a explicação e tente de novo.

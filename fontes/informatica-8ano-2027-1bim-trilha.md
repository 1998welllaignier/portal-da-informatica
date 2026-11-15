# Apostila de Informática – 8º Ano – 1º Bimestre de 2027 · Trilha Passo a Passo
Prof. Welington · @Welington Laignier

## 📘 Como usar esta apostila
Neste bimestre você vai aprender como o computador **guarda, procura e arruma** listas. São **6 missões**. Se sobrar aula, tem **2 missões extras**. Antes da prova tem a **🔁 Revisão**. São as mesmas missões da sua turma.
| Missão | Tema |
| 📝 Missão 1 – Listas: dados em fila | Pensamento Computacional |
| ➕ Missão 2 – Mexendo na lista: inserir, remover e contar | Pensamento Computacional |
| 🔎 Missão 3 – Busca sequencial: procurar um por um | Pensamento Computacional |
| 🎯 Missão 4 – Busca binária: procurar pelo meio | Pensamento Computacional |
| 🫧 Missão 5 – Ordenar: o método da bolha | Pensamento Computacional |
| 🪆 Missão 6 – Recursão: o problema dentro do problema | Pensamento Computacional |
| 🏅 Missão 7 – Extra: Ordenação por seleção | Pensamento Computacional |
| ❄️ Missão 8 – Extra: Fractais | Pensamento Computacional |
| 🔁 Revisão para a prova | Todas as missões estudadas |

**Como funciona a Trilha Passo a Passo:**
- 👣 Faça **um passo de cada vez**.
- 🖱️ Quase tudo é feito **clicando** nas cartas e nos botões.
- ✅ Clique em **Verificar** quando terminar cada atividade.
- 🔊 Quer ouvir o texto? Clique em **Ouvir**.
- ⏸️ Cansou? Pode parar e descansar um pouco. Tudo fica salvo.
- 🎉 No fim do Básico aparece a faixa **✅ Básico concluído**. Tudo fica registrado sozinho para o professor.

🔎 **Todas as respostas estão aqui na apostila.** Errou? Leia de novo com calma e tente outra vez. Você consegue!
**Regra importante:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode ficar com os jogos livres no final da aula. 🎮

## 📝 Missão 1 – Listas: dados em fila
**Objetivo:** entender o que é uma lista e a posição de cada item.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O computador guarda muitos dados em **listas**: vários itens, um depois do outro, **em ordem**, com um nome só. É como a fila da merenda: cada pessoa tem o seu lugar.
| Posição | 1 | 2 | 3 | 4 | 5 |
| Lista **CHAMADA** | Ana | Bruno | Carla | Davi | Elisa |

Cada item tem uma **posição**. A primeira posição é a **1**: CHAMADA[3] quer dizer “o item da posição 3”, que é **Carla**.
O número de itens é o **tamanho** da lista: CHAMADA tem tamanho **5**.
**Por que usar lista?**
| Sem lista | Com lista |
| 19 variáveis: aluno1, aluno2, aluno3… | 1 lista: CHAMADA, com 19 itens |
| Entrou aluno novo? Criar outra variável | Entrou aluno novo? **Inserir** na lista |

Uma lista pode estar **ordenada** (em ordem, como 3, 8, 12, 20) ou **desordenada** (fora de ordem, como 9, 2, 7).
### 📖 O que significa?
- **Lista**: vários itens em ordem, com um nome só.
- **Item**: cada valor guardado na lista.
- **Posição**: o número do lugar do item. Aqui começa no 1.
- **Tamanho**: quantos itens a lista tem.
- **Ordenada**: lista arrumada em ordem. **Crescente** é do menor para o maior.
### 🌎 Onde eu uso isso?
- As **mensagens** do aplicativo ficam numa lista: a mais nova embaixo.
- A **classificação do campeonato** é uma lista ordenada pelos pontos.
- A **fila de impressão** da escola é uma lista.
### ✅ Perguntas rápidas
1. ( ) Uma lista guarda vários itens em ordem, com um nome só.
2. ( ) Na lista CHAMADA, CHAMADA[2] é Ana.
3. ( ) O tamanho é a quantidade de itens da lista.
### 🧠 Resumo da Aula
A **lista** guarda vários **itens** em ordem. Cada item tem uma **posição** (começa no 1). O **tamanho** é quantos itens ela tem. A lista pode ser **ordenada** ou não.
**Palavras-chave:** lista · item · posição · tamanho · ordenada

## ➕ Missão 2 – Mexendo na lista: inserir, remover e contar
**Objetivo:** colocar e tirar itens da lista e ver o que acontece com as posições.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
A lista muda o tempo todo: entra aluno novo, sai produto do carrinho.
| Operação | O que faz | O que acontece com as posições |
| ➕ Inserir no fim | Coloca um item novo depois do último | Ninguém muda de lugar; o tamanho aumenta 1 |
| ➖ Remover | Tira um item | Quem estava atrás **anda uma posição para a frente**; o tamanho diminui 1 |

**Exemplo:** FILA = Ana, Bia, Caio, Duda.
| Ação | Lista depois | Tamanho |
| Inserir Enzo no fim | Ana, Bia, Caio, Duda, **Enzo** | 5 |
| Remover Bia | Ana, Caio, Duda, Enzo | 4 (Caio passou da posição 3 para a 2) |

Resumindo: inserir faz o tamanho **aumentar 1**; remover faz o tamanho **diminuir 1**.
**Contar** é percorrer a lista com uma variável contadora (o **contador**): olhar todos os itens, do primeiro ao último. Ele começa em **0** e soma **1** cada vez que acha o que procura.
### 📖 O que significa?
- **Inserir**: colocar um item novo na lista.
- **Remover**: tirar um item da lista.
- **Contador**: número que começa em 0 e soma 1 a cada vez que algo acontece.
### 🌎 Onde eu uso isso?
- No **carrinho da loja on-line**, adicionar é inserir e o botão 🗑️ é remover.
- Na **playlist**, você coloca e tira músicas.
- Na **lista de presença**, contar quantos vieram é usar um contador.
### ✅ Perguntas rápidas
1. ( ) Inserir um item no fim aumenta o tamanho em 1.
2. ( ) Quando um item é removido, os de trás andam uma posição para a frente.
3. ( ) Remover um item aumenta o tamanho da lista.
### 🧠 Resumo da Aula
**Inserir** coloca um item (o tamanho aumenta). **Remover** tira um item: quem estava atrás **anda uma posição para a frente** e o tamanho diminui. O **contador** começa em 0 e soma 1.
**Palavras-chave:** inserir · remover · contador

## 🔎 Missão 3 – Busca sequencial: procurar um por um
**Objetivo:** procurar um item olhando um por um e contar as comparações.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Você perdeu a chave e tem 10 gavetas. O jeito mais simples: abrir a **1ª**, depois a **2ª**, a **3ª**… até achar. Isso é a **busca sequencial**.
**Exemplo:** procurar o **9** em 5, 8, 2, 9, 4.
| Comparação | Posição | Item | É o 9? |
| 1ª | 1 | 5 | não |
| 2ª | 2 | 8 | não |
| 3ª | 3 | 2 | não |
| 4ª | 4 | 9 | **sim! posição 4** |

Cada olhada é uma **comparação**. Aqui foram **4 comparações**.
| Situação | Comparações numa lista de 1.000 itens |
| Melhor caso (o item é o 1º) | 1 |
| Pior caso (é o último ou não está) | 1.000 |

A busca sequencial funciona em **qualquer lista**, em ordem ou fora de ordem.
### 📖 O que significa?
- **Busca**: procurar um item numa lista.
- **Busca sequencial**: olhar os itens um por um, do primeiro ao último.
- **Comparação**: ver se o item é igual ao procurado. Cada olhada é uma comparação.
- **Melhor caso**: quando termina mais rápido (o item é o primeiro).
- **Pior caso**: quando demora mais (o item é o último ou não está).
### 🌎 Onde eu uso isso?
- Procurar uma foto **rolando a galeria**, uma por uma.
- Procurar o seu nome numa **lista fora de ordem**.
- O **Ctrl + F** do navegador procura a palavra do começo ao fim.
### ✅ Perguntas rápidas
1. ( ) Na busca sequencial, olhamos os itens um por um.
2. ( ) A busca sequencial só funciona em listas ordenadas.
3. ( ) Procurar o 9 em 5, 8, 2, 9, 4 precisa de 4 comparações.
### 🧠 Resumo da Aula
Na **busca sequencial** olhamos **um por um** até achar. Cada olhada é uma **comparação**. **Melhor caso**: o item é o primeiro. **Pior caso**: é o último ou não está. Funciona em qualquer lista.
**Palavras-chave:** busca sequencial · comparação · melhor caso · pior caso

## 🎯 Missão 4 – Busca binária: procurar pelo meio
**Objetivo:** procurar sempre pelo meio numa lista ordenada.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No jogo **“adivinhe o número de 1 a 100”**, o esperto chuta **50**. Se a resposta é “maior”, chuta **75**, e assim por diante. Isso é a **busca binária**: procurar **sempre pelo meio** e jogar fora **metade** a cada vez.
**Regra de ouro:** a busca binária só funciona se a lista estiver **ordenada**.
**Exemplo:** procurar o **31** em 3, 7, 12, 18, 25, 31, 40, 52 (8 itens).
| Tentativa | Parte que sobrou | Meio | Comparação |
| 1ª | posições 1 a 8 | posição 4 → **18** | 31 é maior → sobra 5 a 8 |
| 2ª | posições 5 a 8 | posição 6 → **31** | **achou!** |

Só **2** comparações. A busca sequencial precisaria de **6**.
| Itens na lista | Comparações no pior caso (binária) | Comparações no pior caso (sequencial) |
| 100 | 7 | 100 |
| 1.000 | 10 | 1.000 |
### 📖 O que significa?
- **Busca binária**: procurar sempre pelo meio de uma lista ordenada. **Binária** quer dizer “em duas partes”.
- **Meio**: o item do centro da parte que sobrou.
- **Descartar**: jogar fora a parte em que o item com certeza não está.
### 🌎 Onde eu uso isso?
- Procurar uma palavra no **dicionário**: abrimos no meio.
- Os **contatos do celular**, em ordem alfabética.
- O jogo de **adivinhar o número**.
### ✅ Perguntas rápidas
1. ( ) A busca binária funciona em qualquer lista, mesmo fora de ordem.
2. ( ) Na busca binária, começamos olhando o item do meio.
3. ( ) A cada comparação, a busca binária joga fora metade da lista.
### 🧠 Resumo da Aula
A **busca binária** olha sempre o **meio** de uma lista **ordenada** e joga fora **metade** a cada vez. É muito mais rápida que a sequencial, mas **só funciona com a lista em ordem**.
**Palavras-chave:** busca binária · meio · descartar · lista ordenada

## 🫧 Missão 5 – Ordenar: o método da bolha
**Objetivo:** pôr uma lista em ordem trocando vizinhos.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Um jeito simples de ordenar é o **método da bolha**:
| Passo | O que fazer |
| 1 | Compare os dois **primeiros vizinhos** |
| 2 | O da esquerda é **maior**? **Troque** os dois de lugar. Não é? **Mantenha** |
| 3 | Ande uma casa e compare o próximo par de vizinhos |
| 4 | Chegou ao fim? Essa foi uma **passada**: o **maior** número já está no **final** |
| 5 | Faça outra passada, até uma passada inteira **sem nenhuma troca** |

**Exemplo:** ordenar 6, 3, 9, 1 (crescente).
| Passada | Comparações e trocas | Lista no fim da passada |
| 1ª | 6>3 troca · 6<9 mantém · 9>1 troca | 3, 6, 1, **9** |
| 2ª | 3<6 mantém · 6>1 troca | 3, 1, **6, 9** |
| 3ª | 3>1 troca | **1, 3, 6, 9** |

O maior número **“sobe” para o final**, como uma **bolha** subindo na água.
### 📖 O que significa?
- **Ordenar**: colocar a lista em ordem.
- **Método da bolha**: ordena comparando vizinhos e trocando os que estão fora de ordem. Em inglês, *bubble sort*.
- **Vizinhos**: dois itens que estão um ao lado do outro.
- **Troca**: mudar dois itens de lugar.
- **Passada**: uma volta inteira, do começo ao fim da lista.
### 🌎 Onde eu uso isso?
- Organizar as **cartas na mão** no baralho.
- A **fila por altura** na foto da turma.
- Aplicativos **ordenam** listas de nomes e preços com um clique.
### ✅ Perguntas rápidas
1. ( ) O método da bolha compara itens vizinhos.
2. ( ) No fim da 1ª passada, o maior número está no final da lista.
3. ( ) 9, 6, 3, 1 está em ordem crescente.
### 🧠 Resumo da Aula
O **método da bolha** compara **vizinhos** e **troca** quando o da esquerda é maior. Uma volta inteira é uma **passada**; o maior sobe para o final. Termina quando uma passada não faz nenhuma troca.
**Palavras-chave:** ordenar · método da bolha · vizinhos · troca · passada

## 🪆 Missão 6 – Recursão: o problema dentro do problema
**Objetivo:** reconhecer a recursão e o caso base, que faz parar.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Abra uma **matrioska** (a boneca russa): dentro dela tem uma boneca **igual, só que menor**. Dentro dessa, outra menor… até a **última**, que não abre. Isso é **recursão**: um problema que se resolve com uma **versão menor dele mesmo**.
| Parte | O que é | Na matrioska |
| 🔁 Passo recursivo | Resolver usando o mesmo problema, menor | Abrir a boneca e repetir com a de dentro |
| 🛑 Caso base (condição de parada) | O caso pequeno que faz parar | A bonequinha que não abre: acabou |

**Sem caso base, a recursão nunca para.**
**Exemplo: contagem regressiva.** Para contar a partir de **n**:
| Se… | Então… |
| n = 0 (caso base) | mostrar “Fogo!” e parar |
| senão (passo recursivo) | mostrar n e **contar a partir de n − 1** |
Contar a partir de 3 → 3, 2, 1, “Fogo!”.
### 📖 O que significa?
- **Recursão**: resolver um problema usando uma versão menor dele mesmo.
- **Caso base**: o caso mais simples, que faz a recursão parar.
- **Passo recursivo**: a parte que repete o problema, um pouco menor.
### 🌎 Onde eu uso isso?
- As **pastas do computador**: pasta dentro de pasta, dentro de pasta.
- A **matrioska** e os **espelhos** frente a frente.
- A **contagem regressiva** do foguete.
### ✅ Perguntas rápidas
1. ( ) Recursão é resolver um problema usando uma versão menor dele mesmo.
2. ( ) Na matrioska, o caso base é a primeira boneca, a maior.
3. ( ) Sem caso base, a recursão pode nunca parar.
### 🧠 Resumo da Aula
**Recursão** é resolver um problema com uma **versão menor dele mesmo**. Tem o **passo recursivo** (repetir menor) e o **caso base** (o que faz parar). Exemplos: matrioska, pastas dentro de pastas, contagem regressiva.
**Palavras-chave:** recursão · caso base · passo recursivo

## 🏅 Missão 7 – Extra: Ordenação por seleção
**Objetivo:** ordenar escolhendo o menor a cada rodada.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Na **ordenação por seleção**, a cada rodada você **escolhe o menor** do que sobrou e põe na frente.
| Passo | O que fazer |
| 1 | Procure o **menor** item de toda a lista |
| 2 | **Troque** ele com o item da **1ª posição** |
| 3 | Procure o menor **do que sobrou** e troque com a 2ª |
| 4 | Repita até a última posição |

**Exemplo:** 7, 2, 9, 4.
| Rodada | Menor do que sobrou | Troca | Lista |
| 1ª | 2 | 2 ↔ 7 | **2**, 7, 9, 4 |
| 2ª | 4 | 4 ↔ 7 | **2, 4**, 9, 7 |
| 3ª | 7 | 7 ↔ 9 | **2, 4, 7**, 9 |
| Fim | — | — | **2, 4, 7, 9** |
### 📖 O que significa?
- **Ordenação por seleção**: a cada rodada, escolhe (seleciona) o menor e põe na próxima posição.
- **Rodada**: cada vez que escolhemos o menor e fazemos a troca.
- **Mínimo**: o menor número de um grupo.
### 🌎 Onde eu uso isso?
- **Escolher os times** no recreio: escolhe o melhor, depois o melhor do que sobrou.
- O **pódio**: primeiro o 1º lugar, depois o 2º.
- Arrumar as **cartas** puxando a menor para a esquerda.
### ✅ Perguntas rápidas
1. ( ) Na seleção, procuramos o menor item do que sobrou a cada rodada.
2. ( ) Na 1ª rodada, o menor item vai para a última posição.
3. ( ) Depois da 1ª rodada, a 1ª posição já está pronta.
### 🧠 Resumo da Aula
Na **ordenação por seleção**, a cada **rodada** achamos o **menor** do que sobrou (o **mínimo**) e trocamos com a próxima posição. O começo da lista vai ficando pronto.
**Palavras-chave:** ordenação por seleção · rodada · mínimo

## ❄️ Missão 8 – Extra: Fractais
**Objetivo:** reconhecer fractais e contar as peças de cada nível.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Olhe um **galho de samambaia**: cada folhinha parece uma samambaia inteira, só que menor. Essas formas são **fractais**: uma **parte é parecida com o todo**. Eles usam a ideia da **recursão**.
**O triângulo de Sierpinski** (nome do matemático polonês Wacław Sierpiński):
| Nível | Regra | Triângulos pintados |
| 0 | Um triângulo | 1 |
| 1 | Cada triângulo vira 3 menores (tira o do meio) | 3 |
| 2 | Cada um dos 3 vira 3 menores | 9 |
| 3 | De novo | 27 |

A cada nível, o número **multiplica por 3**.
**A árvore fractal:** cada galho se divide em **2 galhos** menores.
| Nível | Galhos novos |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
A cada nível, o número **dobra**.
### 📖 O que significa?
- **Fractal**: figura em que cada parte se parece com a figura inteira.
- **Nível**: cada vez que a regra é aplicada de novo, em tamanho menor.
- **Triângulo de Sierpinski**: fractal em que cada triângulo vira 3 menores a cada nível.
### 🌎 Onde eu uso isso?
- Na **natureza**: samambaia, brócolis, raios, flocos de neve.
- Nos **jogos e filmes**, montanhas e árvores feitas por computador.
- Os **rios** vistos de cima parecem árvores fractais.
### ✅ Perguntas rápidas
1. ( ) Num fractal, uma parte é parecida com a figura inteira.
2. ( ) No triângulo de Sierpinski, cada triângulo vira 3 menores a cada nível.
3. ( ) Uma bola lisa é um exemplo de fractal.
### 🧠 Resumo da Aula
**Fractal** é uma figura em que cada parte se parece com o todo. No **triângulo de Sierpinski**, cada triângulo vira 3 (1, 3, 9, 27). Na **árvore fractal**, cada galho vira 2 (2, 4, 8, 16).
**Palavras-chave:** fractal · nível · triângulo de Sierpinski

## 🔁 Revisão para a prova
**Objetivo:** relembrar as missões que a sua turma estudou, um passo de cada vez.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Hoje é dia de **revisão**. O portal mostra **só as missões que a sua turma estudou**.
Em cada missão:
- 📚 **leia** o resumo;
- 🟢 **faça** as atividades;
- 🔁 errou? Leia a explicação e tente de novo.

# Apostila de Informática – 8º Ano – 1º Bimestre de 2027
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 8º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
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
Neste bimestre você vai descobrir como o computador **guarda, procura e organiza** listas de dados, e o que é **recursão**. São **6 missões** e, se sobrar aula, **2 missões extras**. Antes da prova tem a **🔁 Revisão**. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema.
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

**Cada missão tem 3 níveis:**
| Nível | Quem faz | O que vale |
| 🟢 Básico | Todos os alunos | Obrigatório: é o visto da missão e libera os jogos livres no fim da aula |
| 🟡 Desafio | Quem terminou o Básico | **+0,25 ponto**: aumenta a sua nota do bimestre |
| 🔴 Turbo | Quem terminou o Desafio | **+0,25 ponto**: aumenta ainda mais a sua nota |

**Algumas atividades usam o editor de blocos:**
| Parte | Para que serve |
| 🗄️ Gavetas (à esquerda) | Guardam os blocos. Clique numa gaveta e arraste o bloco para a área branca |
| 🧱 Área branca | Onde você monta o programa, encaixando um bloco embaixo do outro |
| ▶️ Rodar o programa | O computador executa os blocos, de cima para baixo |
| 📺 Tela do programa | Mostra o que o programa escreveu. O portal confere se está certo |

🔎 **Todas as respostas estão na apostila:** leia o **💡 Para começar** e o **📖 O que significa?**. Errou? Leia de novo com calma, peça uma **💡 Dica** ou veja a **📘 resolução comentada**. Você consegue fazer tudo sozinho!
**Regra de ouro:** quem conclui o Básico (aparece a faixa verde **✅ Básico concluído**) já pode seguir para o Desafio ou ficar com os jogos livres no final da aula. 🎮 Tudo fica registrado sozinho para o professor.

## 📝 Missão 1 – Listas: dados em fila
**Objetivo:** entender o que é uma lista, como cada item tem uma posição e para que o computador usa listas.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O computador guarda muitos dados do mesmo tipo em **listas**: vários itens, um depois do outro, **em ordem**, todos com o mesmo nome. É como a fila da merenda: cada pessoa tem o seu lugar.
| Posição | 1 | 2 | 3 | 4 | 5 |
| Lista **CHAMADA** | Ana | Bruno | Carla | Davi | Elisa |

Cada item tem uma **posição** (também chamada de **índice**). Aqui, a primeira posição é a **1**: CHAMADA[3] quer dizer “o item da posição 3 da lista CHAMADA”, que é **Carla**.
O número de itens é o **tamanho** da lista: CHAMADA tem tamanho **5**. A última posição é sempre igual ao tamanho.
**Por que usar lista?**
| Sem lista | Com lista |
| 19 variáveis: aluno1, aluno2, aluno3… | 1 lista: CHAMADA, com 19 itens |
| Para mostrar todos, 19 comandos | Para mostrar todos, **percorrer** a lista com uma repetição |
| Entrou aluno novo? Criar outra variável | Entrou aluno novo? **Inserir** na lista |

Uma lista pode estar **ordenada** (em ordem crescente, decrescente ou alfabética) ou **desordenada**. Nas próximas missões você vai ver que lista ordenada é muito mais fácil de procurar.
### 📖 O que significa?
- **Lista**: estrutura que guarda vários itens em ordem, com um nome só. Também chamada de **vetor** ou **array** (em inglês, “fileira arrumada”).
- **Item** (ou **elemento**): cada valor guardado na lista.
- **Posição** (ou **índice**): o número do lugar do item. Aqui começa no 1.
- **Tamanho**: quantos itens a lista tem.
- **Percorrer**: passar por todos os itens da lista, do primeiro ao último.
- **Ordenada**: lista arrumada em ordem (crescente: do menor para o maior; decrescente: do maior para o menor; alfabética: de A a Z).
- **Estrutura de dados**: jeito de organizar os dados no computador para usar depois; a lista é a mais simples.
- **Variável**: um espaço com nome na memória do computador que guarda um valor, e esse valor pode mudar. Exemplo: a variável **pontos** começa em 0 e aumenta a cada acerto.
- **Repetição**: fazer o mesmo passo (ou o mesmo grupo de passos) várias vezes, sem precisar escrever tudo de novo. Exemplo: “repita 3 vezes: ande um passo”.
- **Aplicativo** (ou **app**, do inglês *application*): programa que usamos no celular, no tablet ou no computador para fazer uma tarefa, como o aplicativo de mapas, o WhatsApp ou a calculadora.
### 🌎 Onde eu uso isso?
- O **histórico de mensagens** do aplicativo é uma lista: a mais antiga em cima, a mais nova embaixo.
- A **classificação do campeonato** é uma lista ordenada pelos pontos.
- A **fila de impressão** da escola é uma lista: o primeiro documento enviado é o primeiro impresso.
| ✍️ Pense e escreva: dê um exemplo de lista do seu dia a dia e diga se ela é ordenada ou não. |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: leia posições e tamanho, ache o item de cada posição e diga se as listas estão ordenadas; no editor de blocos, mostre itens de uma lista.
🟡 **Desafio** — no portal: escolha a melhor estrutura para cada situação.
🔴 **Turbo** — no editor: percorra a lista e mostre cada item com a posição.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Uma lista guarda vários itens em ordem, com um nome só.
2. ( ) Na lista CHAMADA, CHAMADA[2] é Ana.
3. ( ) O tamanho é a quantidade de itens da lista.
4. ( ) A lista 3, 8, 12, 20 está em ordem crescente.
5. ( ) Percorrer a lista é olhar só o primeiro item.
### 🧠 Resumo da Aula
A **lista** guarda vários **itens** em ordem, com um nome só. Cada item tem uma **posição** (índice), que aqui começa no 1: LISTA[3] é o item da posição 3. O **tamanho** é quantos itens a lista tem. **Percorrer** é passar por todos, do primeiro ao último. A lista pode ser **ordenada** (crescente, decrescente, alfabética) ou não.
**Palavras-chave:** lista · item · posição · índice · tamanho · percorrer · ordenada · estrutura de dados

## ➕ Missão 2 – Mexendo na lista: inserir, remover e contar
**Objetivo:** inserir e remover itens de uma lista, entender o que acontece com as posições e contar itens com uma repetição.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Uma lista muda o tempo todo: entra aluno novo, sai produto do carrinho. As três operações básicas são:
| Operação | O que faz | O que acontece com as posições |
| ➕ Inserir no fim | Coloca um item novo depois do último | Ninguém muda de lugar; o tamanho aumenta 1 |
| ➕ Inserir numa posição | Coloca o item no meio | Quem estava dali para trás **anda uma posição para trás** |
| ➖ Remover | Tira um item | Quem estava atrás **anda uma posição para a frente**; o tamanho diminui 1 |

**Exemplo:** FILA = Ana, Bia, Caio, Duda.
| Ação | Lista depois | Tamanho |
| Inserir Enzo no fim | Ana, Bia, Caio, Duda, **Enzo** | 5 |
| Remover Bia | Ana, Caio, Duda, Enzo | 4 (Caio passou da posição 3 para a 2) |
| Inserir Gabi na posição 1 | **Gabi**, Ana, Caio, Duda, Enzo | 5 (todo mundo andou uma posição para trás) |

**Contar** é percorrer a lista com uma **variável contadora**: ela começa em **0** e soma **1** cada vez que o item passa no teste. Exemplo: quantas notas são maiores ou iguais a 5 na lista 8, 4, 6, 3, 9? Contador: 0 → 1 (8) → 1 → 2 (6) → 2 → 3 (9). Resposta: **3**.
### 📖 O que significa?
- **Inserir**: colocar um item novo na lista.
- **Remover**: tirar um item da lista.
- **Deslocar**: os itens andarem uma posição (para a frente quando alguém sai; para trás quando alguém entra antes deles).
- **Contador**: variável que começa em 0 e soma 1 a cada vez que algo acontece.
- **Operação**: cada ação que fazemos na lista (inserir, remover, contar, procurar).
### 🌎 Onde eu uso isso?
- No **carrinho da loja on-line**, adicionar é inserir e o botão 🗑️ é remover; o número no ícone é o tamanho.
- Na **playlist**, “tocar a seguir” insere a música numa posição do meio.
- Na **lista de presença**, contar quantos vieram é usar um contador.
| ✍️ Pense e escreva: num aplicativo que você usa, onde aparece inserir ou remover itens de uma lista? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: insira e remova itens, observando as posições; conte itens que passam num teste; no editor, monte um contador.
🟡 **Desafio** — no portal: preveja a lista depois de várias operações seguidas.
🔴 **Turbo** — no editor: conte quantos alunos tiraram nota azul.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Inserir um item no fim da lista aumenta o tamanho em 1.
2. ( ) Quando um item é removido, os itens de trás andam uma posição para a frente.
3. ( ) Inserir um item na posição 1 não muda a posição dos outros itens.
4. ( ) Um contador começa em 0 e soma 1 a cada vez que conta algo.
5. ( ) Remover um item aumenta o tamanho da lista.
### 🧠 Resumo da Aula
As operações básicas da lista são **inserir** (no fim ou numa posição) e **remover**. Ao remover, os itens de trás **andam uma posição para a frente** e o tamanho diminui. Ao inserir no meio, os itens dali para trás andam uma posição para trás e o tamanho aumenta. Para **contar**, percorremos a lista com um **contador** que começa em 0 e soma 1 a cada item que passa no teste.
**Palavras-chave:** inserir · remover · deslocar · contador · operação

## 🔎 Missão 3 – Busca sequencial: procurar um por um
**Objetivo:** procurar um item numa lista olhando um por um, contar quantas comparações são feitas e entender quando esse método é lento.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Você perdeu a chave e tem 10 gavetas. O jeito mais simples de achar: abrir a **1ª**, depois a **2ª**, a **3ª**… até encontrar. Isso é a **busca sequencial** (ou **busca linear**).
**Algoritmo:**
| Passo | O que fazer |
| 1 | Comece na posição 1 |
| 2 | Compare o item com o que você procura |
| 3 | É igual? **Achou**: diga a posição e pare |
| 4 | Não é? Vá para a próxima posição e volte ao passo 2 |
| 5 | Acabou a lista sem achar? O item **não está** na lista |

**Exemplo:** procurar o **9** em 5, 8, 2, 9, 4.
| Comparação | Posição | Item | É o 9? |
| 1ª | 1 | 5 | não |
| 2ª | 2 | 8 | não |
| 3ª | 3 | 2 | não |
| 4ª | 4 | 9 | **sim! posição 4** |

Cada vez que olhamos um item é uma **comparação**. Quanto mais comparações, mais lenta a busca:
| Situação | Comparações numa lista de 1.000 itens |
| Melhor caso (o item é o 1º) | 1 |
| Pior caso (é o último ou não está) | 1.000 |

A busca sequencial funciona em **qualquer lista**, ordenada ou não. Mas em listas grandes ela pode ficar **lenta**.
### 📖 O que significa?
- **Busca** (ou pesquisa): procurar um item numa lista.
- **Busca sequencial** (ou **linear**): olhar os itens um por um, em sequência, do primeiro ao último.
- **Comparação**: verificar se o item é igual ao procurado. Cada olhada é uma comparação.
- **Melhor caso**: a situação em que o algoritmo termina mais rápido (o item é o primeiro).
- **Pior caso**: a situação em que o algoritmo demora mais (o item é o último ou não está na lista).
- **Eficiência**: quanto trabalho (quantas comparações) o algoritmo precisa para resolver o problema.
- **Navegador**: programa usado para abrir os sites da internet, como o Google Chrome, o Microsoft Edge e o Firefox.
### 🌎 Onde eu uso isso?
- Procurar uma foto **rolando a galeria** do celular, uma por uma, é busca sequencial.
- Procurar o seu nome numa **lista de aprovados fora de ordem** também.
- O **Ctrl + F** do navegador procura a palavra olhando o texto do começo ao fim.
| ✍️ Pense e escreva: conte uma vez em que você procurou algo olhando um por um. Demorou? Por quê? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: procure com as cartas viradas, conte as comparações e ache o melhor e o pior caso; no editor, monte a busca que mostra a posição.
🟡 **Desafio** — no portal: calcule comparações em listas grandes.
🔴 **Turbo** — no editor: a busca que diz “não está na lista”.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na busca sequencial, olhamos os itens um por um, do primeiro ao último.
2. ( ) A busca sequencial só funciona em listas ordenadas.
3. ( ) Procurar o 9 em 5, 8, 2, 9, 4 precisa de 4 comparações.
4. ( ) O pior caso é quando o item procurado é o primeiro da lista.
5. ( ) Numa lista de 1.000 itens, o pior caso da busca sequencial tem 1.000 comparações.
### 🧠 Resumo da Aula
Na **busca sequencial** (linear) olhamos os itens **um por um**, do primeiro ao último, até achar ou a lista acabar. Cada olhada é uma **comparação**. **Melhor caso**: o item é o primeiro (1 comparação). **Pior caso**: é o último ou não está (tantas comparações quanto o tamanho). Funciona em qualquer lista, mas é **lenta** em listas grandes.
**Palavras-chave:** busca · busca sequencial · comparação · melhor caso · pior caso · eficiência

## 🎯 Missão 4 – Busca binária: procurar pelo meio
**Objetivo:** procurar um item numa lista ordenada sempre pelo meio, descartando metade a cada comparação, e comparar com a busca sequencial.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No jogo **“adivinhe o número de 1 a 100”**, ninguém chuta 1, 2, 3… O esperto chuta **50**. Se a resposta é “maior”, nem pensa mais de 1 a 50: chuta **75**, e assim por diante. Isso é a **busca binária**: procurar **sempre pelo meio** e jogar fora **metade** a cada vez.
**Regra de ouro:** a busca binária só funciona se a lista estiver **ordenada**.
**Algoritmo:**
| Passo | O que fazer |
| 1 | Olhe o item do **meio** da parte que sobrou |
| 2 | É o procurado? **Achou!** |
| 3 | O procurado é **maior**? Jogue fora a metade da **esquerda** |
| 4 | O procurado é **menor**? Jogue fora a metade da **direita** |
| 5 | Repita com a parte que sobrou |

**Exemplo:** procurar o **31** em 3, 7, 12, 18, 25, 31, 40, 52 (8 itens).
| Tentativa | Parte que sobrou | Meio | Comparação |
| 1ª | posições 1 a 8 | posição 4 → **18** | 31 é maior → sobra 5 a 8 |
| 2ª | posições 5 a 8 | posição 6 → **31** | **achou!** |

Só **2** comparações. A busca sequencial precisaria de **6**.
**Por que é tão rápida?** Cada comparação corta a lista pela **metade**:
| Itens na lista | Comparações no pior caso (binária) | Comparações no pior caso (sequencial) |
| 8 | 4 | 8 |
| 100 | 7 | 100 |
| 1.000 | 10 | 1.000 |
| 1.000.000 | 20 | 1.000.000 |

### 📖 O que significa?
- **Busca binária**: procurar sempre pelo meio de uma lista ordenada, jogando fora metade a cada comparação. **Binária** = em duas partes.
- **Meio**: o item do centro da parte que sobrou. Com número par de itens, usamos o do meio da esquerda.
- **Descartar**: jogar fora a parte em que o item com certeza não está.
- **Dividir para conquistar**: estratégia de resolver um problema grande cortando-o em pedaços menores, como a busca binária faz.
### 🌎 Onde eu uso isso?
- Procurar uma palavra no **dicionário** de papel: abrimos no meio e vamos para a frente ou para trás.
- Os **contatos do celular**, em ordem alfabética, são achados pelo aplicativo com busca binária.
- Os sites de **busca** e os **bancos de dados** usam listas ordenadas para responder em milésimos de segundo.
| ✍️ Pense e escreva: por que a lista precisa estar ordenada para a busca binária funcionar? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: jogue “adivinhe o número”, procure pelo meio com as cartas e compare as duas buscas.
🟡 **Desafio** — no portal: escreva os meios de cada tentativa.
🔴 **Turbo** — no portal: descubra quantas comparações bastam para listas enormes.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) A busca binária funciona em qualquer lista, mesmo fora de ordem.
2. ( ) Na busca binária, começamos olhando o item do meio.
3. ( ) A cada comparação, a busca binária joga fora metade da lista.
4. ( ) Para achar um número de 1 a 100, a busca binária precisa de no máximo 7 comparações.
5. ( ) Numa lista grande, a busca sequencial é mais rápida que a binária.
### 🧠 Resumo da Aula
A **busca binária** procura sempre pelo **meio** de uma lista **ordenada**: se o procurado é maior, descarta a metade da esquerda; se é menor, a da direita; e repete. Cada comparação corta a lista pela **metade**: 100 itens → no máximo 7 comparações; 1.000 → 10. Muito mais rápida que a sequencial em listas grandes, mas **só funciona com a lista em ordem**.
**Palavras-chave:** busca binária · meio · descartar · lista ordenada · dividir para conquistar

## 🫧 Missão 5 – Ordenar: o método da bolha
**Objetivo:** ordenar uma lista comparando e trocando vizinhos, passada por passada, e contar as trocas.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Para usar a busca binária a lista precisa estar **ordenada**. Mas como o computador ordena? Um dos jeitos mais simples é o **método da bolha** (*bubble sort*):
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

A cada passada, o maior número que ainda falta **“sobe” para o final**, como uma **bolha** subindo na água. Por isso o nome.
Uma lista **já ordenada** (1, 2, 3, 4) termina em **1 passada sem nenhuma troca**. A lista **ao contrário** (4, 3, 2, 1) é a que dá **mais trabalho**: todo par de vizinhos troca.
O método da bolha é fácil de entender, mas compara vizinhos muitas vezes, passada por passada, por isso fica lento em listas grandes; existem métodos que trocam menos (veja a Missão 7).
### 📖 O que significa?
- **Ordenar**: colocar a lista em ordem (crescente, decrescente ou alfabética).
- **Método da bolha** (*bubble sort*, em inglês “ordenação por bolha”): ordena comparando vizinhos e trocando os que estão fora de ordem, passada por passada.
- **Vizinhos**: dois itens que estão um ao lado do outro na lista.
- **Troca**: mudar dois itens de lugar.
- **Passada**: uma volta completa comparando os vizinhos do começo ao fim da lista.
- **Crescente**: do menor para o maior (1, 3, 6, 9). **Decrescente**: do maior para o menor (9, 6, 3, 1).
### 🌎 Onde eu uso isso?
- Organizar as **cartas na mão** no jogo de baralho, trocando de lugar as que estão fora de ordem.
- A **fila por altura** na foto da turma: troca quem está ao lado e é mais alto.
- Planilhas e aplicativos **ordenam** listas (de nomes, preços, notas) com um clique.
| ✍️ Pense e escreva: o que você já organizou em ordem (crescente, decrescente ou alfabética)? Como fez? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: troque vizinhos até ordenar, decida trocar ou manter em cada comparação e escreva cada passada.
🟡 **Desafio** — no portal: ordene em ordem decrescente e conte as trocas.
🔴 **Turbo** — no portal: descubra quando o método termina mais cedo.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) O método da bolha compara itens vizinhos.
2. ( ) Para ordem crescente, trocamos quando o da esquerda é menor que o da direita.
3. ( ) No fim da 1ª passada, o maior número está no final da lista.
4. ( ) O método termina quando uma passada inteira não faz nenhuma troca.
5. ( ) 9, 6, 3, 1 está em ordem crescente.
### 🧠 Resumo da Aula
**Ordenar** é pôr a lista em ordem. O **método da bolha** compara **vizinhos** e **troca** os que estão fora de ordem (para crescente: troca quando o da esquerda é maior). Uma volta do começo ao fim é uma **passada**; a cada passada, o maior que falta “sobe” para o final, como uma bolha. Termina quando uma passada não faz nenhuma troca.
**Palavras-chave:** ordenar · método da bolha · vizinhos · troca · passada · crescente · decrescente

## 🪆 Missão 6 – Recursão: o problema dentro do problema
**Objetivo:** reconhecer a recursão como um problema resolvido usando uma versão menor dele mesmo, sempre com uma condição de parada (caso base).
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Abra uma **matrioska** (a boneca russa): dentro dela tem uma boneca **igual, só que menor**. Dentro dessa, outra menor… até a **última**, que não abre. Isso é **recursão**: um problema que se resolve com uma **versão menor dele mesmo**.
Toda recursão tem **duas partes**:
| Parte | O que é | Na matrioska |
| 🔁 Passo recursivo | Resolver usando o mesmo problema, menor | Abrir a boneca e repetir com a de dentro |
| 🛑 Caso base (condição de parada) | O caso pequeno que se resolve direto, sem repetir | A bonequinha que não abre: acabou |

**Sem caso base, a recursão nunca para**, como dois espelhos frente a frente, com imagens dentro de imagens para sempre.
**Exemplo: a fila do cinema.** Você quer saber em que posição está, mas a fila é enorme. Pergunta para quem está na frente: “qual é a sua posição?”. Essa pessoa faz a **mesma pergunta** para a da frente dela… até o **primeiro da fila**, que responde “sou o 1” (**caso base**). Cada um soma 1 e devolve a resposta para trás.
**Exemplo: contagem regressiva recursiva.** Para contar a partir de **n**:
| Se… | Então… |
| n = 0 (caso base) | mostrar “Fogo!” e parar |
| senão (passo recursivo) | mostrar n e **contar a partir de n − 1** |
Contar a partir de 3 → mostra 3, conta a partir de 2 → mostra 2, conta a partir de 1 → mostra 1, conta a partir de 0 → “Fogo!”.
No editor, um **bloco próprio** (gaveta 🧩 Meus blocos) que **chama a si mesmo** é recursivo.
### 📖 O que significa?
- **Recursão**: resolver um problema usando uma versão menor do mesmo problema. Em programação, é um bloco (função) que chama a si mesmo.
- **Recursivo**: aquilo que usa recursão.
- **Caso base** (condição de parada): o caso mais simples, resolvido direto, que faz a recursão parar.
- **Passo recursivo**: a parte que chama o mesmo problema, um pouco menor, aproximando do caso base.
- **Função** (bloco próprio): conjunto de blocos com nome que pode ser chamado, inclusive por ele mesmo.
- **Pasta**: lugar do computador onde guardamos e organizamos arquivos, como uma gaveta. Uma pasta pode ter outras pastas dentro dela.
### 🌎 Onde eu uso isso?
- As **pastas do computador**: uma pasta tem pastas dentro, que têm pastas dentro… Para contar todos os arquivos, o computador usa recursão.
- A **matrioska** e as **imagens de espelhos** frente a frente.
- Os **fractais** (Missão 8), como a samambaia, cujo galho é uma samambaia menor.
| ✍️ Pense e escreva: dê um exemplo de “coisa dentro de coisa igual” que você conhece. Qual seria o caso base? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: ache o caso base e o passo recursivo em situações e siga a recursão da fila; no editor, rode a contagem recursiva.
🟡 **Desafio** — no editor: conserte a recursão que não para.
🔴 **Turbo** — no portal: siga uma recursão de soma passo a passo.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Recursão é resolver um problema usando uma versão menor dele mesmo.
2. ( ) Toda recursão precisa de um caso base para parar.
3. ( ) Na matrioska, o caso base é a primeira boneca, a maior.
4. ( ) Sem caso base, a recursão pode nunca parar.
5. ( ) Pastas dentro de pastas são um exemplo de estrutura recursiva.
### 🧠 Resumo da Aula
**Recursão** é resolver um problema usando uma **versão menor dele mesmo**; em programação, um bloco (função) que **chama a si mesmo**. Toda recursão tem o **passo recursivo** (chamar o problema menor) e o **caso base** (o caso simples que faz parar). Sem caso base, não para nunca. Exemplos: matrioska, a fila do cinema, pastas dentro de pastas, contagem regressiva.
**Palavras-chave:** recursão · recursivo · caso base · passo recursivo · função

## 🏅 Missão 7 – Extra: Ordenação por seleção
**Objetivo:** ordenar uma lista escolhendo o menor item a cada rodada e comparar com o método da bolha.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Outro jeito de ordenar é a **ordenação por seleção** (*selection sort*). A ideia é como escolher os times no recreio: **escolhe o melhor, depois o melhor do que sobrou…**
| Passo | O que fazer |
| 1 | Procure o **menor** item de toda a lista |
| 2 | **Troque** ele com o item da **1ª posição**: agora a 1ª posição está pronta |
| 3 | Procure o menor **do que sobrou** (da 2ª posição em diante) e troque com a 2ª |
| 4 | Repita até a última posição |

**Exemplo:** 7, 2, 9, 4.
| Rodada | Menor do que sobrou | Troca | Lista |
| 1ª | 2 | 2 ↔ 7 | **2**, 7, 9, 4 |
| 2ª | 4 | 4 ↔ 7 | **2, 4**, 9, 7 |
| 3ª | 7 | 7 ↔ 9 | **2, 4, 7**, 9 |
| Fim | — | — | **2, 4, 7, 9** |

**Bolha × seleção:**
| | 🫧 Bolha | 🏅 Seleção |
| O que compara | Vizinhos | O que sobrou, procurando o menor |
| Onde o item vai | O maior sobe para o fim | O menor vai para o começo |
| Trocas | Muitas, uma a cada par fora de ordem | Poucas: no máximo uma por rodada |

### 📖 O que significa?
- **Ordenação por seleção**: método que, a cada rodada, seleciona (escolhe) o menor item do que sobrou e coloca na próxima posição.
- **Rodada**: cada vez que escolhemos o menor e fazemos a troca.
- **Mínimo**: o menor valor de um grupo de números.
- **Parte ordenada**: o começo da lista, que já está pronto e não muda mais.
### 🌎 Onde eu uso isso?
- **Escolher os times** no recreio: o capitão escolhe o melhor, depois o melhor do que sobrou.
- Arrumar as **cartas na mão** puxando sempre a menor para a esquerda.
- O **pódio**: primeiro decide-se o 1º lugar, depois o 2º entre os que sobraram.
| ✍️ Pense e escreva: qual dos dois métodos (bolha ou seleção) você achou mais fácil? Por quê? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: ache o menor de cada rodada, escreva a lista depois de cada troca e compare os dois métodos.
🟡 **Desafio** — no portal: ordene em ordem alfabética por seleção.
🔴 **Turbo** — no portal: conte as trocas dos dois métodos na mesma lista.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na ordenação por seleção, procuramos o menor item do que sobrou a cada rodada.
2. ( ) Na 1ª rodada, o menor item vai para a última posição.
3. ( ) A ordenação por seleção faz no máximo uma troca por rodada.
4. ( ) No método da bolha, comparamos sempre os vizinhos.
5. ( ) Depois da 1ª rodada da seleção, a 1ª posição já está pronta.
### 🧠 Resumo da Aula
Na **ordenação por seleção**, a cada **rodada** procuramos o **menor** item do que sobrou (o **mínimo**) e trocamos com a próxima posição; o começo da lista vai ficando pronto. Ela faz poucas trocas (no máximo uma por rodada). No **método da bolha**, comparamos **vizinhos** e o maior sobe para o fim.
**Palavras-chave:** ordenação por seleção · rodada · mínimo · parte ordenada · bolha

## ❄️ Missão 8 – Extra: Fractais
**Objetivo:** reconhecer fractais como figuras que repetem a mesma forma em tamanhos cada vez menores, e calcular quantas peças aparecem a cada nível.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Olhe um **galho de samambaia**: cada folhinha parece uma samambaia inteira, só que menor. Um **brócolis** também: cada pedacinho parece um brócolis pequeno. Essas formas são **fractais**: figuras em que **uma parte é parecida com o todo**.
Os fractais são feitos com **recursão**: a mesma regra repetida dentro de si mesma, em tamanhos menores.
**O triângulo de Sierpinski** (criado pelo matemático polonês Wacław Sierpiński):
| Nível | Regra | Triângulos pintados |
| 0 | Um triângulo | 1 |
| 1 | Cada triângulo vira 3 menores (tira o do meio) | 3 |
| 2 | Cada um dos 3 vira 3 menores | 9 |
| 3 | De novo | 27 |
| 4 | De novo | 81 |

A cada nível, o número **multiplica por 3**. Num desenho de verdade, paramos num nível (o **caso base**), porque a tela não consegue mostrar triângulos menores que um ponto.
**A árvore fractal:** um tronco se divide em **2 galhos**; cada galho se divide em 2 galhos menores…
| Nível | Galhos novos |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |
A cada nível, o número **dobra** (multiplica por 2).
### 📖 O que significa?
- **Fractal**: figura em que cada parte, ampliada, se parece com a figura inteira.
- **Autossemelhança**: a qualidade de uma parte ser parecida com o todo.
- **Nível** (ou iteração): cada vez que a regra é aplicada de novo, em tamanho menor.
- **Triângulo de Sierpinski**: fractal feito de triângulos, em que cada triângulo vira 3 menores a cada nível.
- **Multiplicar a cada nível**: o número de peças cresce sempre pela mesma conta (×2, ×3…).
### 🌎 Onde eu uso isso?
- Na **natureza**: samambaia, brócolis romanesco, raios, flocos de neve, rios vistos de cima.
- Nos **jogos e filmes**, montanhas e árvores são criadas por computador com fractais.
- As **antenas de celular** podem ter forma de fractal para captar sinais de vários tamanhos.
| ✍️ Pense e escreva: que forma da natureza da nossa região parece um fractal? |
|  |
|  |

### 🎯 Missão
🟢 **Básico** — no portal: diga o que é e o que não é fractal, complete as tabelas dos níveis e ache a regra.
🟡 **Desafio** — no portal: calcule níveis maiores.
🔴 **Turbo** — no editor: a árvore fractal em números, com recursão.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Num fractal, uma parte é parecida com a figura inteira.
2. ( ) No triângulo de Sierpinski, cada triângulo vira 3 menores a cada nível.
3. ( ) No nível 2 do triângulo de Sierpinski há 6 triângulos pintados.
4. ( ) Os fractais são feitos com a ideia de recursão.
5. ( ) Uma bola lisa é um exemplo de fractal.
### 🧠 Resumo da Aula
**Fractal** é uma figura em que cada parte se parece com o todo (**autossemelhança**). Eles nascem da **recursão**: a mesma regra repetida em tamanhos menores, **nível** após nível, até um caso base. No **triângulo de Sierpinski**, cada triângulo vira 3 (1, 3, 9, 27, 81: ×3 por nível); na **árvore fractal**, cada galho vira 2 (×2). Estão na natureza (samambaia, brócolis, raios) e nos jogos.
**Palavras-chave:** fractal · autossemelhança · nível · triângulo de Sierpinski · recursão

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

# Apostila de Informática – 9º Ano – 4º Bimestre
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 9º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
| ✍️ Número do computador |  |

## 📊 Quadro de notas do bimestre
*Preenchido pelo professor. Esta apostila será entregue a você no final do bimestre.*
| Encontro | 📅 Data (dia / mês) | 🟢 Básico (1,0) | 🟡 Desafio (0,25) | 🔴 Turbo (0,25) |
| Missão 1 | ........ / ........ |  |  |  |
| Missão 2 | ........ / ........ |  |  |  |
| Missão 3 | ........ / ........ |  |  |  |
| Projeto final | ........ / ........ |  |  |  |
| **Total** |  |  |  |  |

| Cálculo da nota | Pontos |
| **A – Nota da apostila:** total do Básico + Desafio/Turbo (bônus até 1,0) — máximo 5,0 |  |
| **B – Nota da prova no Wayground:** ______ % de acertos ÷ 20 — máximo 5,0 |  |
| **Nota do bimestre = A + B · média para aprovação: 5,0** (0 a 10) |  |

| ✅ Carimbo e visto do professor |
|  /  /  /  /  /  |

## 📘 Como usar esta apostila
Neste bimestre você vai cumprir **3 missões** e um **projeto final**. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema.
| Missão | Tema |
| 🕸️ Missão 1 – Grafos e árvores: mapas, caminhos e decisões | Pensamento Computacional |
| 🔐 Missão 2 – Criptografia e ataques: como os dados são protegidos | Mundo Digital |
| ©️ Missão 3 – Autoria, imagem e deepfakes | Cultura Digital |
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
## 🕸️ Missão 1 – Grafos e árvores: mapas, caminhos e decisões
**Objetivo:** representar informações ligadas com grafos e árvores, encontrar o caminho mais curto em um mapa e organizar escolhas em uma árvore de decisão.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 8º ano você trabalhou com **listas**, em que cada item ocupa uma posição, um depois do outro. Mas muita informação não cabe em fila: as ruas de um mapa, as amizades de uma rede social e as pastas do computador têm ligações para vários lados. Para guardar esse tipo de informação, os computadores usam **grafos** e **árvores**.
| Estrutura | O que é | Exemplo |
| 🕸️ Grafo | Pontos, chamados **vértices**, ligados por linhas, chamadas **arestas** | Cidades ligadas por estradas; amigos em uma rede social |
| ⚖️ Grafo com pesos | Cada aresta tem um número, o **peso**: distância, tempo ou custo | O aplicativo de mapas calculando a melhor rota |
| 🌳 Árvore | Grafo **sem ciclos** que começa em um único vértice, a **raiz**, e se divide em galhos até as **folhas** | As pastas do computador; a árvore genealógica; o chaveamento de um campeonato |
| ❓ Árvore de decisão | Árvore em que cada vértice é uma **pergunta** de sim ou não e cada folha é uma **resposta** | O jogo de adivinhar um objeto; a triagem de um atendimento |

**Palavras importantes:**
- **Caminho:** a sequência de arestas que leva de um vértice a outro.
- **Comprimento do caminho:** a soma dos pesos das arestas do caminho.
- **Ciclo:** um caminho que volta ao vértice de onde saiu. Uma árvore nunca tem ciclo.
**Exemplo:** de A até D existem dois caminhos. A → B → D soma 3 + 4 = **7**. A → C → D soma 2 + 6 = **8**. O caminho mais curto é **A → B → D**. Atenção: o mais curto é o de **menor soma**, não o de menos paradas.
### 📖 O que significa?
- **Grafo** (do grego *graphein*, escrever ou desenhar): desenho de pontos ligados por linhas que representa informações conectadas.
- **Vértice**: cada ponto do grafo, como um lugar ou uma pessoa.
- **Aresta**: cada linha que liga dois vértices, como uma rua ou uma amizade.
- **Peso**: o número escrito na aresta: distância, tempo ou custo.
- **Caminho**: a sequência de arestas que leva de um vértice a outro.
- **Ciclo**: um caminho que volta ao vértice de onde saiu.
- **Árvore**: grafo sem ciclos. A **raiz** é o vértice onde ela começa; as **folhas** são os vértices do fim, que não se dividem mais.
- **Árvore de decisão**: árvore em que cada vértice é uma pergunta de sim ou não e cada folha é uma resposta.
- **Chaveamento**: a tabela de um campeonato em que quem vence avança para a próxima fase.
### 🌎 Onde eu uso isso?
- O **aplicativo de mapas** usa um grafo com pesos para achar o caminho mais rápido.
- A sugestão “**pessoas que você talvez conheça**” vem do grafo de amizades da rede social.
- As **pastas do celular** e o **chaveamento** de um campeonato são árvores.
- A **triagem** no posto de saúde segue perguntas de sim ou não, como uma árvore de decisão.
| ✍️ Pense em dois caminhos para ir a um lugar da cidade (a praça, o mercado). Qual é mais curto e por quê? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- Este é o **grafo do bairro**. Os pesos são os minutos de caminhada entre os lugares:
| Aresta (ligação) | Peso (minutos) |
| Casa – Padaria | 4 |
| Casa – Praça | 3 |
| Padaria – Escola | 5 |
| Praça – Escola | 7 |
| Praça – Posto de saúde | 2 |
| Posto de saúde – Escola | 3 |

- Desenhe o grafo no quadro abaixo: cada lugar é um círculo (vértice) e cada ligação é uma linha (aresta) com o peso escrito em cima.
| ✍️ Desenhe aqui o grafo do bairro |
|  |
|  |
|  |
|  |
|  |

- Complete a tabela com os caminhos da **Casa** até a **Escola**:
| Caminho | ✍️ Conta dos pesos | ✍️ Total (minutos) |
| Casa → Padaria → Escola |  |  |
| Casa → Praça → Escola |  |  |
| Casa → Praça → Posto de saúde → Escola |  |  |
| **Qual é o caminho mais curto?** |  |  |

- Observe a **árvore de pastas** de um computador e responda:
  - 📁 Documentos
    - 📁 Escola
      - 📄 redação.txt
      - 📄 mapa.png
    - 📁 Fotos
      - 📄 aniversário.jpg
| Pergunta | ✍️ Resposta |
| Qual pasta é a raiz da árvore? |  |
| Quantas folhas (arquivos) a árvore tem? |  |
| Qual é o caminho da raiz até o arquivo mapa.png? |  |

- No computador, abra o **Paint** e desenhe o grafo do bairro: círculos com o nome de cada lugar, linhas ligando os lugares e o peso de cada linha. Depois, pinte de **outra cor** o caminho mais curto da Casa até a Escola.
- Com o desenho na tela, chame o professor para conferir e **carimbar** o quadro no fim da missão.
👀 O carimbo é o comprovante de que você fez a tarefa. Não feche nada antes de mostrar ao professor!
🏘️ **Na prática: o nosso bairro de verdade** (feito junto com o professor)
Agora o grafo é o **bairro da nossa escola**, desenhado a partir do mapa do celular. Cada **esquina** virou um **vértice** (com uma letra) e cada trecho de rua virou uma **aresta**. O **peso** de cada aresta é quantas **quadras** (quarteirões) você anda naquele trecho. Os pesos são aproximados.
| Vértice | Onde fica |
| **E** | Escola (Av. Mato Grosso) |
| **A** | Esquina da R. Tucupi com a Av. Mato Grosso |
| **B** | Esquina da R. Cedro com a Av. Mato Grosso |
| **U** | Comercial União (R. Tucupi com a Av. Alagoas) |
| **C** | Esquina da R. Tucupi com a Av. Bahia |
| **D** | Esquina da R. Cedro com a Av. Bahia |
| **F** | Esquina da R. Tucupi com a Av. Carlos Santos |
| **G** | Esquina da R. Cedro com a Av. Carlos Santos |
| **M** | Mercado Municipal (Av. Carlos Santos, perto da R. Tucupi) |

| Aresta (rua) | Peso (quadras) |
| E – A (Av. Mato Grosso) | ½ |
| E – B (Av. Mato Grosso) | 1 |
| A – U (R. Tucupi) | 1 |
| U – C (R. Tucupi) | 1 |
| C – F (R. Tucupi) | 2 |
| B – D (R. Cedro) | 2 |
| D – G (R. Cedro) | 2 |
| C – D (Av. Bahia) | 1 |
| F – G (Av. Carlos Santos) | 1 |
| F – M (Av. Carlos Santos) | ½ |

- **1.** Da escola (E) ao Mercado Municipal (M): complete a tabela.
| Caminho | Vértices (em ordem) | Soma dos pesos |
| 1 · pela R. Tucupi | E → A → U → C → F → M |  |
| 2 · pela R. Cedro |  |  |
| 3 · R. Cedro e depois Av. Bahia |  |  |
| **Qual é o caminho mais curto? Por quê?** |  |  |

- **2.** Qual é a distância da escola (E) até o **Comercial União (U)**? Qual dos dois mercados fica mais perto da escola?
- **3.** Se a Av. Bahia estiver fechada por uma obra entre C e D, o caminho 3 ainda serve? E se uma rua tiver muita lama, o "peso" dela aumenta ou diminui?
| ✍️ Respostas das perguntas 2 e 3 |
|  |
|  |

📍 **Onde eu uso isso?** Ao tocar em **Rotas** no aplicativo de mapas, ele faz esta mesma conta: transforma as ruas em um **grafo com pesos** (metros ou minutos) e procura o caminho de **menor soma**, com milhares de ruas, em menos de um segundo.
🟡 **Desafio**
- Observe a **árvore de decisão** para adivinhar um objeto da sala:
  - ❓ É eletrônico?
    - **Sim** → ❓ Tem tela?
      - **Sim** → 🖥️ Monitor
      - **Não** → ⌨️ Teclado
    - **Não** → ❓ Serve para escrever?
      - **Sim** → ✏️ Lápis
      - **Não** → 🪑 Cadeira
| Pergunta | ✍️ Resposta |
| a) Quantas perguntas, no máximo, são feitas até chegar a uma resposta? |  |
| b) Quantas folhas (respostas) a árvore tem? |  |
| c) Para incluir o **mouse**, que pergunta nova você colocaria no lugar da folha Teclado? |  |

🔴 **Turbo**
- Grafo de amizades: Ana é amiga de Bruno e de Carla; Bruno é amigo de Davi; Carla é amiga de Davi e de Elisa. Quem tem mais amigos, ou seja, de qual vértice saem mais arestas? Esse grafo tem um ciclo? Por que ele **não é** uma árvore?
| ✍️ Resposta |
|  |
|  |

⚠️ Nesta missão use **só o Paint**. Não precisa salvar o desenho: o portal registra o que você fez. Ao final da aula, desligue o computador pelo caminho certo: **Iniciar → Ligar/Desligar → Desligar**.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Em um grafo, os pontos se chamam vértices e as ligações se chamam arestas.
2. ( ) O caminho com menos paradas é sempre o mais curto.
3. ( ) Uma árvore é um grafo sem ciclos que começa na raiz.
4. ( ) As pastas do computador são organizadas como uma árvore.
5. ( ) Em uma árvore de decisão, cada folha é uma pergunta.
### 🧠 Resumo da Aula
Um **grafo** representa informações ligadas entre si: os pontos são os **vértices** e as ligações são as **arestas**. Quando as arestas têm números (distância, tempo ou custo), elas têm **pesos**, e o **caminho mais curto** é o de menor soma dos pesos, não o de menos paradas. Uma **árvore** é um grafo sem **ciclos** que começa na **raiz** e termina nas **folhas**, como as pastas do computador. Na **árvore de decisão**, cada vértice é uma pergunta de sim ou não e cada folha é uma resposta.
**Palavras-chave:** grafo · vértice · aresta · peso · caminho mais curto · ciclo · árvore · raiz · folha · árvore de decisão
## 🔐 Missão 2 – Criptografia e ataques: como os dados são protegidos
**Objetivo:** entender como a criptografia esconde uma mensagem com uma chave, usar a cifra de César e conhecer como funcionam ataques como a força bruta, o ransomware e a engenharia social.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 7º ano você aprendeu a reconhecer golpes e a criar senhas fortes. Agora vamos ver o que acontece por dentro: como os dados viajam escondidos e como os ataques funcionam.
| Termo | O que é |
| 🔐 Criptografia | Transformar uma mensagem para que só quem tem a **chave** consiga ler |
| 📄 Texto claro | A mensagem original, que qualquer pessoa entende |
| 🔒 Texto cifrado | A mensagem embaralhada, depois de criptografada |
| 🔑 Chave | A informação secreta usada para cifrar e para decifrar |
| 🔓 Decifrar | Voltar do texto cifrado para o texto claro usando a chave |

**Cifra de César:** cada letra anda um número fixo de casas no alfabeto. Esse número é a **chave**. Com a chave 3, o A vira D, o B vira E, e assim por diante; no fim do alfabeto, a contagem volta para o começo (X vira A, Y vira B, Z vira C). Exemplo: **SOL → VRO**. Para decifrar, ande 3 casas para trás.
**Por que a cifra de César é fácil de quebrar?** Ela só tem **25 chaves** possíveis. Testando uma chave de cada vez (um **ataque de força bruta**), dá para descobrir a mensagem em poucos minutos, mesmo sem saber a chave. Por isso a criptografia de hoje usa chaves enormes.
| Letra | A | B | C | D | E | F | G | H | I | J | K | L | M |
| Chave 3 | D | E | F | G | H | I | J | K | L | M | N | O | P |

| Letra | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| Chave 3 | Q | R | S | T | U | V | W | X | Y | Z | A | B | C |

**Onde a criptografia está:** no **cadeado** e no **https** dos sites, nas mensagens com criptografia de ponta a ponta (só quem envia e quem recebe consegue ler), nas senhas guardadas pelos sites e na senha do Wi-Fi.
**Como funcionam os ataques:**
| Ataque | Como funciona | Como se proteger |
| 🔨 Força bruta | Um programa testa todas as senhas possíveis, uma por uma, até acertar | Senha longa; bloqueio depois de tentativas erradas; verificação em duas etapas |
| 🦠 Ransomware | Programa malicioso que **criptografa** os arquivos da vítima e pede dinheiro, o **resgate**, para devolvê-los | Cópia de segurança (**backup**); não abrir anexos suspeitos; sistema atualizado |
| 🎭 Engenharia social | Enganar a pessoa para que ela mesma entregue a senha ou o código. O **phishing** (mensagem ou link falso que promete prêmio ou finge ser do banco para você digitar a senha) é um tipo de engenharia social | Desconfiar de pedidos urgentes; nunca passar códigos recebidos por SMS; não clicar em links de prêmio |
| 🌊 DDoS (negação de serviço) | Milhares de computadores mandam pedidos ao mesmo tempo até o site sair do ar | Proteção feita pelas empresas nos servidores |

**Por que a senha longa protege:** cada posição de uma senha só de números tem 10 opções (0 a 9). Uma senha de 2 dígitos tem 10 × 10 = **100** combinações; uma de 4 dígitos tem 10 × 10 × 10 × 10 = **10.000**. Cada dígito a mais multiplica o trabalho da força bruta por 10.
### 📖 O que significa?
- **Criptografia** (do grego *kryptós* = escondido; *graphein* = escrever): a “escrita escondida”, que transforma a mensagem para que só quem tem a chave consiga ler.
- **Cifrar** e **decifrar**: embaralhar a mensagem e desembaralhá-la. **Cifra** é o método usado para isso.
- **Texto claro** e **texto cifrado**: a mensagem original, que qualquer um entende, e a mensagem embaralhada.
- **Chave**: a informação secreta usada para cifrar e decifrar, como o número de casas na cifra de César.
- **Cifra de César**: usada por Júlio César, general romano, há mais de 2 mil anos, para mandar ordens ao exército.
- **Criptografia de ponta a ponta**: só quem envia e quem recebe conseguem ler, nem a empresa do aplicativo. Onde eu vejo: no aviso amarelo no começo das conversas do WhatsApp.
- **HTTPS** (*HyperText Transfer Protocol Secure*, Protocolo Seguro de Transferência de Hipertexto): as páginas viajam criptografadas. Onde eu vejo: no começo do endereço do site e no cadeado 🔒.
- **Força bruta** (em inglês, *brute force*): testar todas as senhas possíveis, uma por uma, até acertar.
- **Malware** (*malicious software*, programa malicioso): programa feito para causar dano ou roubar dados.
- **Ransomware** (*ransom* = resgate; *software* = programa): programa que tranca (criptografa) os arquivos e pede dinheiro para devolvê-los.
- **Backup** (em inglês, reserva, apoio): cópia de segurança dos arquivos, guardada em outro lugar.
- **Engenharia social**: enganar a pessoa, e não o computador, para que ela mesma entregue a senha ou o código.
- **DDoS** (*Distributed Denial of Service*, Negação de Serviço Distribuída): milhares de aparelhos mandam pedidos ao mesmo tempo para derrubar um site. *Distribuída* quer dizer que os pedidos vêm de muitos lugares.
- **Lei nº 12.737/2012**: conhecida como Lei Carolina Dieckmann, torna crime invadir o celular ou o computador de outra pessoa.
### 🌎 Onde eu uso isso?
- As mensagens do WhatsApp têm **criptografia de ponta a ponta**: só quem envia e quem recebe consegue ler.
- O **Pix** e o aplicativo do banco usam criptografia e códigos para proteger o dinheiro.
- Hospitais e empresas já pararam por causa de **ransomware**; quem tinha backup voltou a funcionar mais rápido.
| ✍️ Onde você usa senha ou código no dia a dia? Qual deles é o mais importante proteger? (Não escreva a senha!) |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- Use a tabela da cifra de César com **chave 3**:
| Tarefa | Texto claro | Texto cifrado |
| a) Cifre | ESCOLA | ✍️ |
| b) Decifre | ✍️ | LQIRUPDWLFD |
| c) Decifre | ✍️ | VHQKD IRUWH |

- Qual é o ataque? Escreva **F** para força bruta, **R** para ransomware, **E** para engenharia social ou **D** para DDoS:
| Situação | F, R, E ou D |
| Os arquivos do computador ficaram ilegíveis e apareceu uma mensagem pedindo dinheiro para devolvê-los. |  |
| Alguém liga dizendo ser do banco e pede o código que chegou por SMS. |  |
| Um programa tenta 0000, 0001, 0002... até acertar a senha do celular. |  |
| O site de inscrições sai do ar porque recebeu milhões de pedidos falsos ao mesmo tempo. |  |
| Uma mensagem diz que você ganhou um prêmio e pede que você clique e digite a sua senha. |  |

- No computador, abra o **Bloco de Notas** e escreva três linhas: **Texto claro:** uma frase sua de 3 palavras (sem dados pessoais); **Chave: 3**; **Texto cifrado:** a sua frase cifrada.
- Chame o professor para conferir e **carimbar**.
🟡 **Desafio**
- Quantas senhas um programa de força bruta precisa testar, no máximo?
| Senha só de números | ✍️ Combinações possíveis |
| 1 dígito | 10 |
| 2 dígitos |  |
| 4 dígitos |  |
| 6 dígitos |  |
| Se o programa testa 1.000 senhas por segundo, quanto tempo leva, no máximo, para descobrir uma senha de 4 dígitos? |  |

🔴 **Turbo**
- Um colega cifrou uma palavra com uma chave secreta e o resultado foi **FRNLT**. Teste as chaves uma por uma, como na força bruta, e descubra a chave e a palavra. Depois explique: por que a cifra de César é fácil de quebrar?
| ✍️ Resposta |
|  |
|  |

⚠️ Use o que você aprendeu **só para se proteger**. Tentar descobrir a senha de outra pessoa ou invadir a conta ou o aparelho de alguém é **crime** (Lei nº 12.737/2012). No Bloco de Notas, **nunca escreva uma senha verdadeira**.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Criptografar é transformar uma mensagem para que só quem tem a chave consiga ler.
2. ( ) Na cifra de César com chave 3, a letra A vira D.
3. ( ) Uma senha de 4 dígitos é mais difícil de descobrir por força bruta do que uma de 6 dígitos.
4. ( ) O ransomware criptografa os arquivos da vítima e pede dinheiro para devolvê-los.
5. ( ) Engenharia social é um programa que testa todas as senhas possíveis.
### 🧠 Resumo da Aula
A **criptografia** transforma o **texto claro** em **texto cifrado**, e só quem tem a **chave** consegue **decifrar**. Na **cifra de César**, cada letra anda um número fixo de casas no alfabeto. A criptografia protege os sites com cadeado (https), as mensagens e as senhas. Os ataques também usam a computação: a **força bruta** testa todas as senhas possíveis, por isso senhas longas são mais seguras; o **ransomware** criptografa os arquivos e pede **resgate**, e o **backup** é a melhor defesa; a **engenharia social** engana a pessoa para ela entregar a senha; o **DDoS** derruba um site com milhões de pedidos ao mesmo tempo.
**Palavras-chave:** criptografia · texto claro · texto cifrado · chave · cifra de César · força bruta · ransomware · backup · engenharia social · DDoS
## ©️ Missão 3 – Autoria, imagem e deepfakes
**Objetivo:** respeitar os direitos autorais e o direito de imagem ao criar e compartilhar conteúdo, reconhecer conteúdos falsos feitos com inteligência artificial e descobrir por que uma informação foi espalhada.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 8º ano você aprendeu a checar uma informação antes de compartilhar: quem publicou, quando, se outros confirmam e como está escrita. Agora vamos dar mais dois passos: **respeitar quem cria** e descobrir **por que** um conteúdo foi espalhado.
**Quem cria tem direitos:**
- **Direito autoral:** quem cria uma música, foto, texto, desenho ou vídeo é o **autor** e decide como a obra pode ser usada (Lei nº 9.610/1998). Estar na internet **não** significa que a obra é livre.
- **Plágio:** copiar o trabalho de outra pessoa e apresentar como se fosse seu.
- **Domínio público:** obras que todos podem usar livremente. No Brasil, isso acontece 70 anos depois da morte do autor, como as obras de Machado de Assis.
- **Licença Creative Commons:** o autor libera o uso da obra com algumas condições. Na mais comum, a **CC BY**, você pode usar desde que dê o **crédito**, isto é, escreva o nome do autor.
- **Como dar crédito:** *Foto: nome do autor, site onde estava, licença.*
- **Direito de imagem:** ninguém pode publicar a foto ou o vídeo de uma pessoa sem a autorização dela (ou dos responsáveis, no caso de menores de idade).
**Inteligência artificial e deepfakes:**
- A **inteligência artificial (IA) generativa** cria textos, imagens, vozes e vídeos novos a partir de um pedido.
- **Deepfake** é um vídeo, uma foto ou um áudio **falso**, feito com IA, que imita o rosto ou a voz de uma pessoa real.
- **Sinais de alerta:** boca fora de sincronia com a fala, voz robótica, piscar estranho, mãos e dedos deformados, letras borradas no fundo, uma fala que a pessoa nunca diria, uma **promessa de presente fácil por link** (famoso “dando” celular ou dinheiro) e nenhum site de notícias confirmando. Atenção: ser famoso ou ter imagem de boa qualidade **não** prova nada; deepfakes também podem ter ótima qualidade.
- Criar um deepfake de um colega, mesmo “de brincadeira”, desrespeita o direito de imagem, é cyberbullying e pode ser crime.
**Por que foi espalhado?** Toda informação falsa tem um motivo:
| Motivo | Exemplo |
| 💰 Dinheiro | Título chamativo para ganhar cliques e propaganda; golpe para vender um produto falso |
| 🗳️ Política | Atacar ou favorecer um candidato ou um grupo |
| 😂 Humor | Sátira ou piada que passa a circular como se fosse verdade |
| 😠 Ódio | Humilhar uma pessoa ou um grupo |
| 🤷 Engano | A pessoa acreditou e repassou sem checar |

**O que fazer quando chega um conteúdo suspeito:** não clico no link, não compartilho e aviso a quem me mandou que pode ser golpe ou mentira.

### 📖 O que significa?
- **Obra** e **autor**: obra é o que foi criado (música, foto, texto, desenho, vídeo); autor é quem criou.
- **Direito autoral**: o direito de quem cria de decidir como a obra é usada (Lei nº 9.610/1998).
- **©** (*copyright*: *copy* = cópia; *right* = direito): símbolo de que a obra tem dono. Onde eu vejo: no rodapé de sites e na capa de livros, com “todos os direitos reservados”.
- **Plágio**: copiar o trabalho de outra pessoa e apresentar como se fosse seu.
- **Domínio público**: obras que todos podem usar livremente; no Brasil, 70 anos depois da morte do autor.
- **Licença**: a autorização que o autor dá para usar a obra.
- **Creative Commons**: nome de uma organização que criou licenças gratuitas com que o autor libera o uso da obra sob algumas condições.
- **CC BY** (*CC = Creative Commons; BY indica atribuição, ou seja, dizer por quem a obra foi feita*): pode usar a obra desde que dê o **crédito**, isto é, escreva o nome do autor.
- **Direito de imagem**: ninguém pode publicar a sua foto ou o seu vídeo sem a sua autorização.
- **IA** (Inteligência Artificial): programas que aprendem com muitos exemplos e fazem tarefas que pareciam só humanas, como conversar ou reconhecer rostos. **IA generativa** é a que *gera* (cria) textos, imagens, vozes e vídeos novos a partir de um pedido.
- **Deepfake** (*deep*, de *deep learning*, “aprendizado profundo”, um jeito de a IA aprender; *fake* = falso): vídeo, foto ou áudio falso, feito com IA, que imita uma pessoa real.
- **Sátira**: texto de humor que imita uma notícia para fazer rir; vira desinformação quando é compartilhado como se fosse verdade.
### 🌎 Onde eu uso isso?
- Um vídeo com **música de outra pessoa** pode ser bloqueado na rede social por direito autoral.
- Num **trabalho da escola**, a imagem da internet precisa de crédito ao autor.
- Golpistas usam **voz e rosto falsos de famosos**, feitos com IA, para pedir dinheiro.
| ✍️ Você já viu um vídeo ou uma foto que parecia falso? Que sinais você percebeu? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- Pode ou não pode? Escreva **P** para pode ou **N** para não pode:
| Situação | P ou N |
| Usar uma foto com licença CC BY em um trabalho, escrevendo o nome do autor. |  |
| Postar a foto de um colega dormindo na sala, sem a autorização dele. |  |
| Copiar um texto da internet e entregar como se fosse seu. |  |
| Usar um poema de Machado de Assis, que está em domínio público. |  |
| Baixar a música de um cantor e publicar no seu canal como se fosse sua. |  |
| Fazer um áudio com a voz de um professor, criada por IA, avisando que não vai ter aula. |  |

- Leia a situação e responda: *um vídeo mostra um jogador famoso dizendo que vai dar celulares para quem clicar em um link. A boca não acompanha a fala, a voz parece robótica e o vídeo não aparece em nenhum site de notícias.*
| Pergunta | ✍️ Resposta |
| Que sinais mostram que pode ser um deepfake? |  |
| Qual é o motivo de quem espalhou esse vídeo? |  |
| O que você faria ao receber esse vídeo? |  |

- Qual é o motivo? Escreva **D** para dinheiro, **P** para política, **H** para humor ou **O** para ódio:
| Mensagem | D, P, H ou O |
| “Você não vai acreditar no que aconteceu! Clique aqui” (o link abre um site cheio de propagandas). |  |
| Montagem de um candidato fazendo algo que nunca fez, publicada na véspera da eleição. |  |
| Um site de humor publica “Escola troca a merenda por pizza todos os dias” e muita gente acredita. |  |
| Um perfil falso publica fotos de um colega com apelidos ofensivos. |  |

- No computador, abra o **Paint** e crie um **cartaz original** com o título **Eu respeito a autoria**, um desenho feito por você e, embaixo, a linha **Criado por: (seu primeiro nome) · Licença: CC BY**. Chame o professor para conferir e carimbar.
🟡 **Desafio**
- Escreva o crédito correto para usar esta imagem em um trabalho: foto de uma castanheira, tirada por **Maria Souza**, encontrada no site **Banco de Imagens Livres**, com licença **CC BY**. Depois responda: se a imagem tivesse o aviso “todos os direitos reservados”, você poderia usá-la sem pedir autorização?
| ✍️ Resposta |
|  |
|  |

🔴 **Turbo**
- Explique por que um deepfake de um colega, mesmo “de brincadeira”, pode causar problemas sérios. O que a vítima deve fazer se isso acontecer com ela?
| ✍️ Resposta |
|  |
|  |

⚠️ No cartaz, **não use fotos de colegas nem imagens copiadas da internet**. Se você for vítima de um deepfake ou tiver uma foto exposta, **não apague as provas** e conte ao professor ou a um adulto de confiança.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Tudo o que está na internet pode ser usado sem dar crédito ao autor.
2. ( ) Publicar a foto de alguém sem autorização desrespeita o direito de imagem.
3. ( ) Deepfake é um vídeo, uma foto ou um áudio falso feito com inteligência artificial.
4. ( ) A licença CC BY permite usar a obra desde que o autor receba o crédito.
5. ( ) Toda informação falsa é espalhada por engano, nunca para ganhar dinheiro.
### 🧠 Resumo da Aula
Quem cria uma obra é o **autor** e tem o **direito autoral** sobre ela; copiar e apresentar como seu é **plágio**. Obras em **domínio público** podem ser usadas livremente, e licenças como a **Creative Commons (CC BY)** liberam o uso desde que você dê o **crédito**. O **direito de imagem** proíbe publicar a foto ou o vídeo de alguém sem autorização. A **inteligência artificial** pode criar **deepfakes**, vídeos, fotos e áudios falsos que imitam pessoas reais: desconfie de boca fora de sincronia, voz robótica e falas estranhas. Antes de compartilhar, pergunte também **por que** aquilo foi espalhado: dinheiro, política, humor, ódio ou engano.
**Palavras-chave:** autor · direito autoral · plágio · domínio público · Creative Commons · crédito · direito de imagem · inteligência artificial · deepfake · motivação
## 🏁 Projeto final – Meu Passaporte de Missões
**Objetivo:** conferir as missões concluídas, completar o que faltou e registrar o que você aprendeu no bimestre.
📅 **Data da aula:** ........ / ........
### 🎯 Missão final
🟢 **Básico**
- Folheie a sua apostila e marque quais missões já têm carimbo:
| Missão | Tem carimbo do Básico? |
| 🕸️ Missão 1 – Grafos e árvores |  |
| 🔐 Missão 2 – Criptografia e ataques |  |
| ©️ Missão 3 – Autoria, imagem e deepfakes |  |

- Se faltar algum carimbo (por exemplo, porque você faltou à aula), faça agora a missão e peça o carimbo ao professor.
- Escreva uma frase sobre o que você aprendeu em cada tema:
| Tema | ✍️ O que eu aprendi |
| 🕸️ Grafos e árvores |  |
| 🔐 Criptografia e ataques |  |
| ©️ Autoria, imagem e deepfakes |  |

🟡 **Desafio**
- Digite as suas três frases no Bloco de Notas, com letra maiúscula, acentos e pontuação, e mostre ao professor.
🔴 **Turbo**
- Explique para a turma, no projetor, qual missão você mais gostou e por quê.
**✅ Carimbo do professor – projeto final**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |
|  |  |  |

### 📋 Autoavaliação
Marque o que você já consegue fazer sozinho:
- [ ] Represento um mapa como grafo, com vértices, arestas e pesos.
- [ ] Encontro o caminho mais curto somando os pesos.
- [ ] Reconheço a raiz e as folhas de uma árvore, como as pastas do computador.
- [ ] Cifro e decifro uma mensagem com a cifra de César.
- [ ] Explico como funcionam a força bruta, o ransomware e a engenharia social e como me proteger.
- [ ] Respeito os direitos autorais e o direito de imagem e sei dar crédito ao autor.
- [ ] Reconheço sinais de deepfake e pergunto por que um conteúdo foi espalhado.
### 📝 Ficha de avaliação do professor
O cálculo completo está no **Quadro de notas** da primeira página: a apostila (carimbos) vale até **5,0** e a prova no Wayground vale até **5,0**, somando a nota do bimestre de **0 a 10**.
### 🧠 Resumo do Bimestre
Neste bimestre você aprendeu a representar mapas, pastas e decisões com grafos e árvores, descobriu como a criptografia protege os dados e como funcionam os ataques, e viu como respeitar a autoria e a imagem das pessoas e desconfiar de deepfakes. As missões concluídas no portal mostram tudo o que você conquistou. Boa jornada no Ensino Médio!
**Palavras-chave:** missão · conquista · autoavaliação · aprendizado
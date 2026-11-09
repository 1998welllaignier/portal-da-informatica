# Apostila de Informática – 8º Ano – 4º Bimestre
Prof. Welington · @Welington Laignier
| ✍️ Nome do aluno |  |
| ✍️ Turma | 8º ano:   ☐ A     ☐ B     ☐ C     ☐ D |
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
| 🗂️ Missão 1 – Listas: buscar e ordenar | Pensamento Computacional |
| ☁️ Missão 2 – Internet por dentro: nuvem e paralelismo | Mundo Digital |
| 🔍 Missão 3 – Dados pessoais e informação confiável | Cultura Digital |
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
## 🗂️ Missão 1 – Listas: buscar e ordenar como um computador
**Objetivo:** usar listas para organizar informações, encontrar um item com a busca sequencial e a busca binária e colocar uma lista em ordem com o método da bolha.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 7º ano você viu que uma **lista** guarda vários dados em ordem e que cada item ocupa uma **posição** (a primeira é a posição 1). Agora vamos aprender o que os computadores fazem com as listas o tempo todo: **buscar** um item e **ordenar** os itens.
| Algoritmo | Como funciona | Quando usar |
| 🔎 Busca sequencial | Olha os itens um por um, do começo ao fim, até achar | Em qualquer lista, mesmo desordenada |
| ✂️ Busca binária | Olha o item do **meio**: se o procurado for maior, descarta a metade da esquerda; se for menor, descarta a da direita; repete com a metade que sobrou | Só em lista **ordenada**; é muito mais rápida em listas grandes |
| 🫧 Método da bolha | Compara **vizinhos** e troca os que estão fora de ordem; repete as passadas até não haver nenhuma troca | Para colocar uma lista em ordem crescente ou alfabética |

**Como achar o meio na busca binária:** some a primeira e a última posição e divida por 2. Se der número quebrado, despreze a vírgula. Exemplo: posições 1 a 8 → (1 + 8) ÷ 2 = 4,5 → meio = posição **4**.
**Por que a busca binária só funciona em lista ordenada?** Ela joga fora a metade em que o número “não pode estar”. Se a lista estiver fora de ordem, o número procurado pode estar justamente na metade que foi descartada, e a busca erra.
**Exemplo do método da bolha** com a lista [5, 2, 8, 1]:
1. Compara 5 e 2 → fora de ordem → troca → [2, 5, 8, 1]
2. Compara 5 e 8 → em ordem → não troca
3. Compara 8 e 1 → fora de ordem → troca → [2, 5, 1, 8]
Fim da **1ª passada**: o maior número (8) “subiu” para o final, como uma bolha. As próximas passadas fazem o mesmo com os outros números, até a lista ficar [1, 2, 5, 8].
### 📖 O que significa?
- **Busca sequencial** (*sequência* = um depois do outro): olhar os itens da lista um por um, do começo ao fim.
- **Busca binária** (*binário* = de dois): olhar o meio e dividir a lista em duas metades a cada tentativa, descartando uma delas. Só funciona em lista ordenada.
- **Ordenação**: colocar os itens em ordem: **crescente** (do menor para o maior), **decrescente** (do maior para o menor) ou **alfabética** (de A a Z).
- **Método da bolha** (em inglês, *bubble sort*): ordena comparando vizinhos e trocando os que estão fora de ordem; o maior “sobe” para o fim, como uma bolha.
- **Passada**: uma volta completa pela lista, do começo ao fim, comparando os vizinhos.
- **Comparação**: olhar dois itens e ver qual é o maior, ou se são iguais.
### 🌎 Onde eu uso isso?
- Os **contatos do celular** ficam em ordem alfabética para você achar um nome rápido.
- A **tabela do campeonato** e o **ranking** dos jogos são listas ordenadas por pontos.
- Na loja on-line, o botão “**ordenar por menor preço**” coloca a lista em ordem.
| ✍️ Onde você já viu uma lista em ordem (alfabética, de preço ou de pontos)? Para que ela servia? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Observe a lista ordenada **NÚMEROS = [3, 7, 12, 18, 25, 31, 40, 52]** e procure o número **31**.
| Busca sequencial | ✍️ Resposta |
| Quantas comparações você fez, olhando um por um desde a posição 1, até achar o 31? |  |

| Busca binária | Posições que sobraram | Posição do meio | Número no meio | O 31 é maior, menor ou igual? |
| 1ª tentativa | 1 a 8 |  |  |  |
| 2ª tentativa |  |  |  |  |

- [ ] Ordene a lista **[6, 3, 9, 1]** com o método da bolha. Escreva como a lista ficou **no fim de cada passada**:
| Passada | ✍️ Lista no fim da passada |
| 1ª passada |  |
| 2ª passada |  |
| 3ª passada |  |

- [ ] No computador, abra o **Bloco de Notas** e digite, uma por linha: **Original: 6, 3, 9, 1**, depois **Passada 1:**, **Passada 2:** e **Passada 3:** com as listas da tabela acima. Na última linha, escreva **Lista ordenada:** e a lista final.
- [ ] Com o texto na tela, chame o professor para conferir e **carimbar** o quadro no fim da missão.
👀 O carimbo é o comprovante de que você fez a tarefa. Não feche nada antes de mostrar ao professor!
🟡 **Desafio**
- [ ] Jogo **Adivinhe o número**, em dupla: um colega pensa em um número de **1 a 100** e responde só “maior”, “menor” ou “acertou”. Use a busca binária: o primeiro palpite é sempre o meio, (1 + 100) ÷ 2 = **50**. Registre a partida em que o número secreto é **73**:
| Tentativa | Números que sobraram | ✍️ Palpite (meio) | ✍️ Dica |
| 1 | 1 a 100 | 50 |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

🔴 **Turbo**
- [ ] Por que a busca binária **não funciona** em uma lista desordenada? E quantas tentativas, no máximo, a busca binária precisa para achar um número de **1 a 1.000**? Dica: a cada tentativa a lista cai pela metade.
| ✍️ Resposta |
|  |
|  |

⚠️ Nesta missão use **só o Bloco de Notas**. Ao final da aula, desligue o computador pelo caminho certo: **Iniciar → Ligar/Desligar → Desligar**.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na busca sequencial, olhamos os itens da lista um por um.
2. ( ) A busca binária funciona em qualquer lista, mesmo desordenada.
3. ( ) A busca binária descarta metade da lista a cada tentativa.
4. ( ) No método da bolha, comparamos itens vizinhos e trocamos os que estão fora de ordem.
5. ( ) Ordenar uma lista é o mesmo que apagar os itens repetidos.
### 🧠 Resumo da Aula
Uma **lista** guarda dados em ordem, cada um em uma **posição**. Para encontrar um item, a **busca sequencial** olha um por um e funciona em qualquer lista. A **busca binária** só funciona em lista **ordenada**: olha o meio e descarta metade a cada tentativa, por isso é muito mais rápida. Para **ordenar**, o **método da bolha** compara vizinhos e troca os que estão fora de ordem, em várias **passadas**, até não haver mais trocas.
**Palavras-chave:** lista · posição · busca sequencial · busca binária · ordenação · método da bolha · passada · comparação
## ☁️ Missão 2 – Internet por dentro: nuvem e processamento em paralelo
**Objetivo:** conhecer as partes que formam a internet (provedor, backbone, cabos submarinos, DNS e data centers) e entender como os computadores dividem o trabalho em paralelo, disputam recursos e guardam dados de forma distribuída.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
No 7º ano você viu que as mensagens viajam em **pacotes**, passam por **roteadores** e chegam a **servidores**. Agora vamos ver o caminho completo e onde ficam os servidores.
| Parte da internet | O que é | Comparação |
| 🏢 Provedor | Empresa que liga a sua casa ou a escola à internet (fibra, rádio ou rede do celular) | A “porta de saída” do bairro |
| 🛣️ Backbone | As ligações principais e mais rápidas da internet, entre cidades e países | As rodovias principais |
| 🌊 Cabo submarino | Cabos de fibra óptica no fundo do mar que ligam os continentes; levam quase todo o tráfego entre países | Pontes entre continentes |
| 📒 DNS | Sistema que traduz o nome do site (ex.: escola.com.br) no endereço IP do servidor | A agenda de contatos do celular |
| 🗄️ Data center | Prédio com milhares de servidores ligados 24 horas, com energia reserva e refrigeração | Um “armazém” de computadores |
| ☁️ Nuvem | Guardar arquivos e usar programas em servidores de data centers, pela internet | Guardar as coisas num armário fora de casa |

Os computadores também precisam **dividir o trabalho**:
- **Paralelismo:** partes de uma tarefa são feitas **ao mesmo tempo** por vários processadores ou **núcleos**. Um processador de 4 núcleos é como 4 colegas dividindo uma lista de exercícios.
- **Concorrência:** várias tarefas **disputam o mesmo recurso** e precisam de regras para esperar a vez. Exemplo: 19 computadores mandando imprimir na mesma impressora formam uma **fila de impressão**.
- **Sistema distribuído:** dados e processamento ficam **espalhados em vários computadores**, em lugares diferentes. As suas fotos na nuvem têm cópias em mais de um data center: se um falhar, outro responde.
### 📖 O que significa?
- **Provedor** (de *prover* = fornecer): a empresa que vende o acesso à internet para casas e escolas. Onde eu vejo: o nome da empresa na conta de internet.
- **Backbone** (em inglês, espinha dorsal): as ligações principais e mais rápidas da internet, entre cidades e países, como a coluna que segura o corpo.
- **Fibra óptica**: cabo fininho, de vidro ou plástico, que leva os dados em forma de luz, muito rápido.
- **Cabo submarino**: cabo de fibra óptica no fundo do mar que liga os continentes.
- **DNS** (*Domain Name System*, Sistema de Nomes de Domínio): a “agenda de contatos” da internet, que troca o nome do site pelo endereço IP do servidor. **Domínio** é o nome do site, como escola.com.br.
- **IP** (*Internet Protocol*, Protocolo de Internet): o número que identifica cada aparelho na rede, visto no 7º ano.
- **Data center** (em inglês, centro de dados): prédio com milhares de servidores ligados 24 horas, com energia reserva e refrigeração.
- **Nuvem** (em inglês, *cloud*): guardar arquivos e usar programas em servidores de data centers, pela internet. Onde eu vejo: Google Fotos, Google Drive, iCloud e OneDrive.
- **Paralelismo** (*paralelo* = lado a lado, ao mesmo tempo): partes de uma tarefa feitas ao mesmo tempo por vários processadores ou núcleos.
- **Núcleo** (em inglês, *core*): cada “cérebro” dentro do processador. Onde eu vejo: “processador de 8 núcleos” (*octa-core*) na caixa do celular.
- **Concorrência** (de *concorrer* = disputar): várias tarefas disputando o mesmo recurso e esperando a vez, como na fila da impressora.
- **Sistema distribuído**: dados e processamento espalhados em vários computadores, em lugares diferentes.
### 🌎 Onde eu uso isso?
- O vídeo que você assiste vem de um **data center** que pode estar em outro país.
- As **fotos na nuvem** aparecem em outro celular porque estão guardadas em servidores.
- Quando todos mandam imprimir ao mesmo tempo, a impressora forma uma **fila**: isso é concorrência.
| ✍️ Que serviço de nuvem você ou sua família usa (fotos, e-mail, jogos)? O que aconteceria se ele saísse do ar? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] Você abriu um site de vídeos no celular. Numere de 1 a 5 o caminho do pedido:
| Ordem | Etapa |
|  | O DNS traduz o nome do site no endereço IP do servidor |
|  | O servidor do data center envia o vídeo em pacotes de volta |
|  | Você digita o nome do site no navegador |
|  | O pedido viaja pelo backbone (e às vezes por cabos submarinos) até o data center |
|  | O pedido sai pelo roteador e chega ao provedor |

- [ ] Escreva **P** para paralelismo, **C** para concorrência ou **D** para sistema distribuído:
| Situação | P, C ou D |
| Quatro colegas dividem as 40 questões de uma lista e cada um resolve 10 ao mesmo tempo. |  |
| 19 alunos mandam imprimir ao mesmo tempo e a impressora forma uma fila. |  |
| Um aplicativo guarda as fotos dos usuários em servidores de vários países. |  |
| O processador usa um núcleo para o jogo e outro para a música, ao mesmo tempo. |  |
| Duas pessoas tentam comprar o último ingresso do show ao mesmo tempo e o sistema decide quem compra. |  |

- [ ] No portal, monte o **Mapa da internet**: o seu celular ou computador → roteador → provedor → backbone ou cabo submarino → data center (nuvem), com o **DNS** ao lado do caminho. O portal confere sozinho.
🟡 **Desafio**
- [ ] Uma tarefa leva **60 minutos** em um único núcleo. Se ela puder ser dividida em partes iguais, quanto tempo leva com mais núcleos trabalhando em paralelo?
| Núcleos | ✍️ Tempo |
| 1 | 60 minutos |
| 2 |  |
| 3 |  |
| 6 |  |

🔴 **Turbo**
- [ ] Por que as empresas guardam **cópias dos mesmos arquivos** em data centers de lugares diferentes? O que aconteceria com as suas fotos se só existisse um data center e ele ficasse sem energia?
| ✍️ Resposta |
|  |
|  |

⚠️ Tudo desta missão é feito no próprio portal. Não precisa salvar nada no computador: o portal registra o que você fez.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) O DNS traduz o nome de um site no endereço IP do servidor.
2. ( ) Os cabos submarinos não são usados pela internet.
3. ( ) Um data center é um prédio com muitos servidores funcionando o tempo todo.
4. ( ) No processamento em paralelo, partes de uma tarefa são feitas ao mesmo tempo.
5. ( ) Guardar arquivos na nuvem é guardar no próprio computador, sem usar a internet.
### 🧠 Resumo da Aula
A internet é formada por **provedores**, que ligam casas e escolas à rede, pelo **backbone**, as ligações principais, e por **cabos submarinos** que unem os continentes. O **DNS** traduz o nome do site no endereço IP, e os sites ficam em **data centers**, prédios cheios de servidores; usar esses servidores pela internet é usar a **nuvem**. Os computadores ganham velocidade com o **paralelismo** (partes feitas ao mesmo tempo, em vários **núcleos**), organizam a **concorrência** (disputa pelo mesmo recurso, como a fila de impressão) e usam **sistemas distribuídos** (dados espalhados em vários lugares).
**Palavras-chave:** provedor · backbone · cabo submarino · DNS · data center · nuvem · paralelismo · núcleo · concorrência · sistema distribuído
## 🔍 Missão 3 – Dados pessoais, privacidade e informação confiável
**Objetivo:** reconhecer os dados pessoais que os aplicativos pedem e os riscos de entregá-los, entender termos de uso e permissões e verificar se uma informação é confiável antes de compartilhar.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
**Seus dados, sua privacidade:**
- **Dado pessoal** é tudo o que identifica você: nome, data de nascimento, endereço, telefone, CPF, foto, localização, escola. Informações que **não identificam ninguém**, como a previsão do tempo ou o resultado do jogo de ontem, **não são dados pessoais**.
- **Dado sensível** pede cuidado extra: saúde, religião, opinião política, origem étnica e dados **biométricos** (impressão digital, reconhecimento do rosto).
- A **LGPD** (Lei Geral de Proteção de Dados, Lei nº 13.709/2018) obriga as empresas a explicar quais dados coletam e para quê, e protege de forma especial os dados de crianças e adolescentes.
- **Termos de uso** são as regras que você aceita ao clicar em “Aceito”: dizem quais dados o serviço coleta, com quem compartilha, a idade mínima e como apagar a conta.
- **Combinados da sala de informática:** usar só os programas e sites que o professor pediu · não comer nem beber perto do computador · não mexer no computador nem nos arquivos dos colegas · senha é pessoal, nunca compartilhe com a turma · desligar pelo caminho certo (Iniciar → Ligar/Desligar → Desligar), nunca puxando o cabo da tomada, que pode estragar o computador e perder arquivos · chamar o professor quando o computador travar.
- **Permissões:** o aplicativo pede acesso à câmera, ao microfone, à localização ou aos contatos. Pergunte sempre: **ele precisa disso para funcionar?** Uma lanterna que pede os seus contatos é motivo para desconfiar.
- **Pegada digital** é o rastro de tudo o que você publica, curte e comenta. Ela pode continuar visível por muitos anos.
**Informação confiável:** antes de compartilhar, faça as 4 perguntas do checador:
| Pergunta | O que observar |
| 👤 Quem publicou? | Há autor ou veículo conhecido? Uma fonte anônima é sinal de alerta |
| 📅 Quando? | A data é recente ou é uma notícia velha circulando de novo? |
| 📰 Outros confirmam? | Sites de notícia confiáveis falam a mesma coisa? |
| ❗ Como está escrita? | Título exagerado, muitas exclamações, “compartilhe antes que apaguem”, erros de português |

**Desinformação** (ou fake news) é a informação falsa ou distorcida espalhada como se fosse verdade. Uma fonte com **viés** mostra só um lado do assunto. Compartilhar é responsabilidade de quem compartilha.
### 📖 O que significa?
- **Dado pessoal**: toda informação que identifica você.
- **Dado sensível**: dado pessoal que pede cuidado extra, porque pode gerar discriminação: saúde, religião, opinião política, origem étnica e biometria.
- **Biometria** (*bio* = vida; *metria* = medida): reconhecer a pessoa pelo corpo, como pela impressão digital, pelo rosto ou pela voz.
- **CPF** (Cadastro de Pessoas Físicas): o número de documento de cada brasileiro na Receita Federal. Por isso não se informa em qualquer site.
- **LGPD** (Lei Geral de Proteção de Dados, Lei nº 13.709/2018): lei brasileira que obriga as empresas a explicar quais dados coletam e para quê, e protege de forma especial os dados de crianças e adolescentes.
- **Termos de uso**: o contrato que você aceita ao clicar em “Aceito”.
- **Permissão**: a autorização que o aplicativo pede para usar a câmera, o microfone, a localização ou os contatos. Onde eu vejo: Configurações → Aplicativos → Permissões.
- **GPS** (*Global Positioning System*, Sistema de Posicionamento Global): descobre onde o aparelho está usando sinais de satélites.
- **Pegada digital**: o rastro de tudo o que você publica, curte e comenta.
- **Fonte**: quem produziu a informação, como um jornal, um site ou uma pessoa.
- **Desinformação** (ou *fake news*: *fake* = falso; *news* = notícias): informação falsa ou distorcida espalhada como se fosse verdade.
- **Viés**: quando a fonte mostra só um lado do assunto.
### 🌎 Onde eu uso isso?
- Lojas e aplicativos pedem **CPF, telefone e localização** no cadastro: pergunte para que precisam.
- Ao instalar um jogo, ele pede **permissões**, como câmera, microfone e contatos.
- No **grupo da família** circulam correntes e notícias antigas como se fossem novas.
| ✍️ Escreva uma mensagem ou notícia que você recebeu e desconfiou. O que fez você desconfiar? |
|  |
|  |

### 🎯 Missão
🟢 **Básico**
- [ ] O aplicativo precisa dessa permissão para funcionar? Marque **S** para sim ou **N** para não:
| Aplicativo | Permissão pedida | S ou N |
| Lanterna | Seus contatos |  |
| Mapa com GPS | Sua localização |  |
| Calculadora | Microfone |  |
| Câmera de fotos | Câmera |  |
| Jogo de cartas | Localização e contatos |  |

- [ ] Classifique cada informação: **P** para dado pessoal, **S** para dado sensível ou **N** para não é dado pessoal:
| Informação | P, S ou N |
| Nome completo |  |
| Previsão do tempo da cidade |  |
| Impressão digital usada para desbloquear o celular |  |
| Endereço de casa |  |
| Informação sobre uma doença |  |
| Resultado do jogo de futebol de ontem |  |

- [ ] Leia a mensagem que chegou no grupo e responda às perguntas do checador: *“URGENTE!!! Cientistas confirmam que celular carregando na tomada explode se for usado à noite. Compartilhe antes que apaguem!”* (sem autor, sem data, sem link de jornal).
| Pergunta do checador | ✍️ Resposta |
| Quem publicou? |  |
| Tem data? |  |
| O título é exagerado? Por quê? |  |
| Você compartilharia? Por quê? |  |

- [ ] No computador, abra o **Bloco de Notas** e escreva os **Termos de uso da nossa sala de informática**: na primeira linha, *Ao usar este computador, eu concordo em:*; depois, **5 regras** numeradas, em linguagem simples. Chame o professor para conferir e carimbar.
🟡 **Desafio**
- [ ] Leia o trecho dos termos de uso de um aplicativo inventado e responda: *“O FotoTop coleta seu nome, e-mail, data de nascimento, fotos publicadas e localização. Podemos compartilhar esses dados com empresas parceiras de publicidade. Você pode apagar sua conta a qualquer momento em Configurações. Uso permitido a partir de 13 anos.”*
| Pergunta | ✍️ Resposta |
| a) Quais dados o FotoTop coleta? |  |
| b) Com quem ele pode compartilhar os dados? |  |
| c) É possível apagar a conta? Onde? |  |
| d) Qual é a idade mínima? |  |

🔴 **Turbo**
- [ ] Explique o que é **pegada digital** e dê um exemplo de publicação que poderia atrapalhar alguém daqui a 5 anos, por exemplo numa entrevista de emprego.
| ✍️ Resposta |
|  |
|  |

⚠️ **Nunca escreva os seus dados verdadeiros** (CPF, endereço, telefone ou senha) na apostila ou no computador da escola. Se algum dado ou foto sua for exposto na internet, conte ao professor ou a um adulto de confiança.
**✅ Carimbo do professor**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |

### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Nome, endereço e telefone são dados pessoais.
2. ( ) Um aplicativo de lanterna precisa acessar os seus contatos para funcionar.
3. ( ) Antes de compartilhar uma notícia, devo verificar quem publicou e a data.
4. ( ) Uma notícia com muitos compartilhamentos é sempre verdadeira.
5. ( ) A LGPD é a lei brasileira que protege os dados pessoais.
### 🧠 Resumo da Aula
**Dados pessoais** identificam você, e os **dados sensíveis** (saúde, religião, biometria) pedem cuidado extra; a **LGPD** é a lei que os protege. Antes de aceitar os **termos de uso** ou dar uma **permissão**, pergunte se o aplicativo precisa daquilo. Tudo o que publicamos forma a nossa **pegada digital**. Para não espalhar **desinformação**, verifique a **fonte**, a data, se outros sites confirmam e se o texto é exagerado.
**Palavras-chave:** dado pessoal · dado sensível · LGPD · termos de uso · permissões · pegada digital · fonte · desinformação
## 🏁 Projeto final – Meu Passaporte de Missões
**Objetivo:** conferir as missões concluídas, completar o que faltou e registrar o que você aprendeu no bimestre.
📅 **Data da aula:** ........ / ........
### 🎯 Missão final
🟢 **Básico**
- [ ] Folheie a sua apostila e marque quais missões já têm carimbo:
| Missão | Tem carimbo do Básico? |
| 🗂️ Missão 1 – Listas: buscar e ordenar |  |
| ☁️ Missão 2 – Internet por dentro: nuvem e paralelismo |  |
| 🔍 Missão 3 – Dados pessoais e informação confiável |  |

- [ ] Se faltar algum carimbo (por exemplo, porque você faltou à aula), faça agora a missão e peça o carimbo ao professor.
- [ ] Escreva uma frase sobre o que você aprendeu em cada tema:
| Tema | ✍️ O que eu aprendi |
| 🗂️ Listas, busca e ordenação |  |
| ☁️ Internet, nuvem e paralelismo |  |
| 🔍 Dados pessoais e informação confiável |  |

🟡 **Desafio**
- [ ] Digite as suas três frases no Bloco de Notas, com letra maiúscula, acentos e pontuação, e mostre ao professor.
🔴 **Turbo**
- [ ] Explique para a turma, no projetor, qual missão você mais gostou e por quê.
**✅ Carimbo do professor – projeto final**
| 🟢 Básico | 🟡 Desafio | 🔴 Turbo |
|  |  |  |
|  |  |  |
|  |  |  |

### 📋 Autoavaliação
Marque o que você já consegue fazer sozinho:
- [ ] Encontro um item em uma lista com a busca sequencial.
- [ ] Uso a busca binária em uma lista ordenada e sei por que ela é mais rápida.
- [ ] Ordeno uma lista com o método da bolha, passada por passada.
- [ ] Explico o caminho de um pedido na internet: provedor, backbone, DNS e data center.
- [ ] Diferencio paralelismo, concorrência e sistema distribuído.
- [ ] Reconheço dados pessoais e sensíveis e desconfio de permissões desnecessárias.
- [ ] Verifico quem publicou, a data e outras fontes antes de compartilhar uma informação.
### 📝 Ficha de avaliação do professor
O cálculo completo está no **Quadro de notas** da primeira página: a apostila (carimbos) vale até **5,0** e a prova no Wayground vale até **5,0**, somando a nota do bimestre de **0 a 10**.
### 🧠 Resumo do Bimestre
Neste bimestre você aprendeu a buscar e a ordenar listas como um computador, descobriu como a internet é organizada por dentro e como os computadores dividem o trabalho, e viu como proteger os seus dados e checar uma informação antes de compartilhar. As missões concluídas no portal mostram tudo o que você conquistou!
**Palavras-chave:** missão · conquista · autoavaliação · aprendizado
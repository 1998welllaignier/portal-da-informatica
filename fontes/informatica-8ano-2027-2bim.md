# Apostila de Informática – 8º Ano – 2º Bimestre de 2027
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
Bem-vindo ao 2º bimestre! O tema agora é **Internet por dentro**: o caminho que os dados fazem até a sua tela, os cabos no fundo do mar, a nuvem e como vários computadores trabalham ao mesmo tempo. Você vai cumprir **6 missões** e, se sobrar aula, **2 missões extras**. Antes da prova tem a **🔁 Revisão**. Cada missão é uma aula completa: se você faltar, pode fazer a próxima sem problema.
| Missão | Tema |
| 🌐 Missão 1 – Como a internet funciona: o caminho dos pacotes | Computação e Sociedade |
| 📒 Missão 2 – DNS: a agenda da internet | Computação e Sociedade |
| 🌊 Missão 3 – Cabos submarinos e data centers | Computação e Sociedade |
| ☁️ Missão 4 – Nuvem: seus arquivos em outro computador | Mundo Digital |
| ⚙️ Missão 5 – Paralelismo e concorrência: tudo ao mesmo tempo | Mundo Digital |
| 🧰 Missão 6 – Projeto: escolher a estrutura certa | Pensamento Computacional |
| 🕸️ Missão 7 – Extra: Sistemas distribuídos | Mundo Digital |
| 🚀 Missão 8 – Extra: Velocidade da internet | Computação e Sociedade |
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

## 🌐 Missão 1 – Como a internet funciona: o caminho dos pacotes
**Objetivo:** explicar que a internet é uma rede de redes e que os dados viajam divididos em pacotes, com endereço, passando por roteadores.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
A **internet** não é uma coisa só nem fica num lugar só: é uma **rede de redes**. A rede da sua casa, a rede da escola e as redes das empresas do mundo inteiro estão ligadas umas às outras.
Quando você manda uma foto, ela **não viaja inteira**. O computador corta a foto em pedacinhos chamados **pacotes**. Cada pacote leva:
| O que o pacote leva | Para que serve | Parece com… |
| 📦 Um pedaço dos dados | É a parte da foto, do vídeo ou da mensagem | O conteúdo de uma caixa |
| 🏠 O endereço de destino (IP) | Diz para qual aparelho o pacote vai | O endereço escrito na caixa |
| 🔢 O número do pacote | Diz a ordem para montar tudo de novo | “Caixa 3 de 10” |

**O caminho de um pacote:**
| Passo | Onde o pacote está |
| 1 | No seu celular, que corta a mensagem em pacotes |
| 2 | No **roteador** da sua casa (o aparelho do Wi-Fi) |
| 3 | No **provedor**, a empresa que leva a internet até você |
| 4 | Em vários **roteadores** pelo caminho, que escolhem por onde seguir |
| 5 | No aparelho de destino, que junta os pacotes na ordem certa |

Os pacotes de uma mesma mensagem podem ir por **caminhos diferentes** e chegar fora de ordem; o número de cada um permite remontar tudo. Se um pacote se perde, só ele é enviado de novo. As regras que todos os aparelhos seguem para conversar se chamam **protocolos**; o conjunto mais usado na internet é o **TCP/IP**.
### 📖 O que significa?
- **Internet**: a rede mundial que liga milhões de redes de computadores. É uma **rede de redes**.
- **Rede**: dois ou mais aparelhos ligados para trocar dados (por cabo ou sem fio).
- **Pacote**: cada pedacinho em que os dados são cortados para viajar pela rede.
- **Endereço IP** (do inglês *Internet Protocol*, “protocolo da internet”): número que identifica cada aparelho ligado à internet, como o endereço de uma casa.
- **Roteador**: aparelho que recebe os pacotes e escolhe por onde mandá-los; o Wi-Fi da sua casa tem um.
- **Provedor** (de internet): empresa que liga a sua casa ou a escola à internet.
- **Protocolo**: conjunto de regras que os aparelhos seguem para conversar. **TCP/IP** é o protocolo principal da internet.
- **Aplicativo**: programa do celular ou do computador.
- **Link**: endereço que, ao ser tocado, abre uma página da internet.
- **Aplicativo**: programa do celular ou do computador.
- **Aplicativo**: programa do celular ou do computador.
- **Link**: endereço que, ao ser tocado, abre uma página da internet.
- **Aplicativo**: programa do celular ou do computador.
- **Aplicativo**: programa do celular ou do computador.
### 🌎 Onde eu uso isso?
- Ao mandar um **áudio no aplicativo de mensagens**, ele vai cortado em pacotes até o celular do seu amigo.
- Quando o **vídeo trava** e depois volta, alguns pacotes se atrasaram ou tiveram de ser enviados de novo.
- O **Wi-Fi da escola** tem um roteador que recebe os pacotes de todos os computadores da sala.
### 🎯 Missão
🟢 **Básico** — no portal: coloque em ordem o caminho do pacote, ligue cada termo ao seu significado e responda às perguntas.
🟡 **Desafio** — no portal: monte de novo uma mensagem com os pacotes que chegaram fora de ordem.
🔴 **Turbo** — no portal: ache as palavras da internet no caça-palavras.
⚠️ Os computadores são usados por todos: **nunca apague nem mexa nos arquivos dos colegas**.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) A internet é uma rede de redes.
2. ( ) Uma foto viaja inteira, sem ser dividida, pela internet.
3. ( ) O endereço IP identifica o aparelho de destino.
4. ( ) Os pacotes de uma mesma mensagem sempre seguem o mesmo caminho.
5. ( ) O roteador escolhe por onde mandar os pacotes.
### 🧠 Resumo da Aula
A **internet** é uma **rede de redes**. Os dados viajam cortados em **pacotes**; cada pacote leva um pedaço dos dados, o **endereço IP** de destino e o seu número. Os **roteadores** escolhem o caminho, o **provedor** liga você à internet e o destino junta os pacotes na ordem. As regras dessa conversa são os **protocolos** (TCP/IP).
**Palavras-chave:** internet · rede · pacote · endereço IP · roteador · provedor · protocolo

## 📒 Missão 2 – DNS: a agenda da internet
**Objetivo:** entender que o DNS traduz o nome de um site no endereço IP do computador onde ele está.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Os computadores se encontram pelo **endereço IP**, que é um número, como **203.0.113.25**. Mas o IP é um número difícil de decorar: nós digitamos **nomes**, como **portal.professorwell.com.br**. Quem faz a tradução do nome para o número é o **DNS**.
O DNS funciona como a **agenda de contatos** do celular: você toca no nome “Mãe” e o celular liga para o número dela.
| Agenda do celular | Internet |
| Nome do contato: Mãe | Nome do site (domínio): portal.professorwell.com.br |
| Número do telefone | Endereço IP: 203.0.113.25 (exemplo) |
| A agenda acha o número pelo nome | O DNS acha o IP pelo nome |

**O que acontece quando você digita o nome de um site:**
| Passo | O que acontece |
| 1 | Você digita o nome do site no navegador |
| 2 | O navegador pergunta ao **servidor DNS**: “qual é o IP desse nome?” |
| 3 | O servidor DNS responde com o endereço IP |
| 4 | O navegador pede a página ao computador daquele IP |
| 5 | A página chega e aparece na tela |

**As partes de um nome de site:** em **portal.professorwell.com.br**, lendo da direita para a esquerda: **.br** é o país (Brasil), **.com** é o tipo (comercial), **professorwell** é o nome escolhido e **portal** é uma parte do site. No Brasil, os nomes que terminam em **.br** são registrados no **Registro.br**.
Se o DNS parou de funcionar, a internet parece “fora do ar”, mesmo com o Wi-Fi ligado: o navegador não consegue achar o IP pelo nome.
### 📖 O que significa?
- **DNS** (do inglês *Domain Name System*, “Sistema de Nomes de Domínio”): o serviço que traduz o nome de um site no endereço IP.
- **Domínio**: o nome de um site na internet, como professorwell.com.br.
- **Servidor DNS**: computador que guarda e responde as traduções de nome para IP.
- **Navegador**: o programa que abre os sites, como Chrome, Edge e Firefox.
- **Servidor**: computador que fica ligado o tempo todo para guardar e entregar sites, arquivos ou serviços.
- **.br**: final dos domínios do Brasil. Cada país tem o seu (.pt é Portugal, .ar é Argentina).
### 🌎 Onde eu uso isso?
- Toda vez que você **digita o nome de um site**, o DNS trabalha antes de a página aparecer.
- Quando você **clica num link** no aplicativo de mensagens, o DNS acha o computador do site.
- Golpistas criam **nomes parecidos** para enganar, como **pr0fessorwell** (zero no lugar do O) ou um nome com uma letra a menos: conferir o nome do site, letra por letra, é uma proteção.
### 🎯 Missão
🟢 **Básico** — no portal: ligue cada nome ao que ele é, coloque em ordem os passos do DNS e separe as partes de um domínio.
🟡 **Desafio** — no portal: descubra os nomes falsos, parecidos com sites de verdade.
🔴 **Turbo** — no portal: jogo da memória dos termos da missão.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) O DNS traduz o nome de um site no endereço IP.
2. ( ) O endereço IP é um nome fácil de decorar.
3. ( ) Em professorwell.com.br, o final .br indica o Brasil.
4. ( ) Se o DNS para, o navegador não consegue achar o site pelo nome.
5. ( ) O navegador pede a página antes de saber o IP do site.
### 🧠 Resumo da Aula
O **DNS** é a agenda da internet: traduz o **domínio** (nome do site) no **endereço IP** (número). O navegador pergunta ao **servidor DNS**, recebe o IP e só então pede a página. No nome, lendo da direita: **.br** é o país, **.com** o tipo e depois o nome escolhido. Sem DNS, a internet parece fora do ar.
**Palavras-chave:** DNS · domínio · endereço IP · servidor DNS · navegador · servidor

## 🌊 Missão 3 – Cabos submarinos e data centers
**Objetivo:** descobrir que a internet entre continentes passa por cabos no fundo do mar e que os sites e aplicativos ficam guardados em data centers.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Muita gente acha que a internet vem do **satélite**. Na verdade, a **maior parte** dos dados que viajam entre os continentes passa por **cabos submarinos**: cabos de **fibra óptica** deitados no fundo do mar, com milhares de quilômetros.
| Parte | O que é | Detalhe |
| 🌊 Cabo submarino | Cabo de fibra óptica no fundo do oceano | Liga continentes: Brasil, América do Norte, Europa, África |
| 💡 Fibra óptica | Fio de vidro mais fino que um cabelo | Leva os dados como **pulsos de luz**, muito rápido |
| 🏖️ Estação de chegada | Lugar na praia onde o cabo sai do mar | No Brasil, o principal ponto é **Fortaleza (CE)**, na Praia do Futuro |

**Os data centers:** quando você abre um vídeo, ele vem de um **data center**, um prédio cheio de **servidores** ligados o dia inteiro.
| Um data center precisa de… | Por quê? |
| ⚡ Energia sem parar | Os servidores nunca desligam; há geradores para quando falta luz |
| ❄️ Refrigeração | Os servidores esquentam muito; o ar frio evita que estraguem |
| 🔒 Segurança | Guarda os dados de milhões de pessoas: tem portas trancadas e câmeras |
| 🔁 Cópias | Os dados ficam guardados em mais de um lugar, para não sumirem se algo quebrar |

**O caminho de um vídeo de outro país:** data center lá fora → cabo submarino → estação na praia (Fortaleza) → cabos pelo Brasil até o provedor → o roteador da sua casa → a sua tela.
**E o satélite?** Ele é usado onde não chega cabo, como em áreas rurais e em navios, mas leva menos dados e demora mais que a fibra.
### 📖 O que significa?
- **Cabo submarino**: cabo de fibra óptica colocado no fundo do mar para ligar continentes e países.
- **Fibra óptica**: fio fino de vidro (ou plástico) que leva dados como pulsos de luz.
- **Data center** (em inglês, “centro de dados”): prédio com muitos servidores que guardam sites, vídeos e aplicativos.
- **Servidor**: computador que fica ligado o tempo todo para guardar e entregar dados.
- **Refrigeração**: sistema que esfria o ambiente para os servidores não superaquecerem.
- **Satélite**: aparelho que gira em volta da Terra; pode levar internet a lugares sem cabo, mas com menos velocidade que a fibra.
### 🌎 Onde eu uso isso?
- O **vídeo de outro país** que você assiste atravessa o oceano por um cabo submarino.
- As **fotos que você guarda no aplicativo** ficam em servidores de um data center.
- Quando um navio corta um cabo por acidente, a internet de uma região inteira pode ficar **mais lenta**.
### 🎯 Missão
🟢 **Básico** — no portal: monte o caminho do vídeo até a sua tela, separe o que é do cabo e o que é do data center e responda às perguntas.
🟡 **Desafio** — no portal: cabo ou satélite? Escolha o melhor para cada lugar.
🔴 **Turbo** — no portal: complete o texto sobre a internet que atravessa o mar.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) A maior parte dos dados entre continentes passa por cabos submarinos.
2. ( ) A fibra óptica leva os dados como pulsos de luz.
3. ( ) Os servidores de um data center podem desligar todas as noites.
4. ( ) Fortaleza, no Ceará, é o principal ponto de chegada de cabos submarinos do Brasil.
5. ( ) O satélite é mais rápido que a fibra óptica.
### 🧠 Resumo da Aula
A **maior parte** dos dados entre continentes viaja por **cabos submarinos** de **fibra óptica**, como **pulsos de luz**. No Brasil, o principal ponto de chegada é **Fortaleza (CE)**. Sites, vídeos e aplicativos ficam em **data centers**: prédios com **servidores** que precisam de energia sem parar, **refrigeração**, segurança e cópias. O **satélite** atende lugares sem cabo, com menos velocidade.
**Palavras-chave:** cabo submarino · fibra óptica · data center · servidor · refrigeração · satélite

## ☁️ Missão 4 – Nuvem: seus arquivos em outro computador
**Objetivo:** entender o que é a nuvem, quais são as vantagens e os cuidados de guardar arquivos nela.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
“Salvar na **nuvem**” quer dizer guardar o arquivo **no computador de uma empresa**, num data center, e não só no seu aparelho. Você acessa pela internet, de qualquer lugar. **A nuvem não fica no céu**: é o nome que se dá a esses servidores.
| Guardar só no aparelho | Guardar na nuvem |
| O arquivo fica só no celular ou no computador | Fica num servidor da empresa e também pode ficar no aparelho |
| Perdeu o celular? Perdeu o arquivo | Perdeu o celular? O arquivo continua guardado no servidor: entra com a conta em outro aparelho e ele está lá |
| Funciona sem internet | Para abrir de outro aparelho, precisa de internet |
| O espaço é o do aparelho | Tem um espaço grátis limitado; para mais espaço, paga-se |

**Exemplos de nuvem:** Google Drive, OneDrive, iCloud. O aplicativo de mensagens também guarda cópia das conversas na nuvem, se você ativar o **backup**.
**Sincronizar** é manter o mesmo arquivo igual em todos os aparelhos: você muda no computador e a mudança aparece no celular.
**Cuidados com a nuvem:**
| Cuidado | Por quê |
| 🔐 Senha forte e verificação em duas etapas | Quem entra na sua conta vê todos os seus arquivos |
| 👥 Conferir com quem você compartilha | Um link aberto pode ser visto por qualquer pessoa que o receber. Mandou para quem não devia? Tire o compartilhamento do arquivo |
| 🚪 Sair da conta em computador da escola | O próximo aluno não pode entrar nos seus arquivos |
### 📖 O que significa?
- **Nuvem** (em inglês, *cloud*): servidores de uma empresa, em data centers, onde guardamos arquivos e usamos programas pela internet.
- **Armazenamento na nuvem**: guardar arquivos nesses servidores, e não só no próprio aparelho.
- **Sincronizar**: deixar o mesmo arquivo igual em todos os aparelhos ligados à mesma conta.
- **Backup** (em português, “cópia de segurança”): cópia dos arquivos para não perdê-los se o aparelho quebrar ou sumir.
- **Compartilhar**: dar acesso a um arquivo para outra pessoa ver ou editar.
- **Verificação em duas etapas**: além da senha, a conta pede um código enviado ao celular; mesmo quem descobre a senha não consegue entrar.
### 🌎 Onde eu uso isso?
- As **fotos do celular** que aparecem também no computador estão sincronizadas pela nuvem.
- Um **trabalho em grupo** num arquivo compartilhado deixa todos escreverem no mesmo documento.
- O **backup** do aplicativo de mensagens recupera as conversas quando você troca de celular.
### 🎯 Missão
🟢 **Básico** — no portal: separe o que é do aparelho e o que é da nuvem, ligue cada termo ao seu significado e escolha a atitude segura.
🟡 **Desafio** — no portal: com quem compartilhar? Decida em cada situação.
🔴 **Turbo** — no portal: complete o texto da nuvem.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) A nuvem é formada por servidores em data centers.
2. ( ) Arquivo guardado na nuvem some quando o celular quebra.
3. ( ) Sincronizar é deixar o mesmo arquivo igual em todos os aparelhos.
4. ( ) No computador da escola, é seguro deixar a sua conta aberta para o próximo aluno.
5. ( ) A verificação em duas etapas protege a conta mesmo se alguém descobrir a senha.
### 🧠 Resumo da Aula
A **nuvem** são **servidores** de empresas, em data centers, onde guardamos arquivos e usamos programas pela internet. Vantagens: acessar de qualquer lugar, **sincronizar** os aparelhos e ter **backup**. Cuidados: senha forte com **verificação em duas etapas**, conferir com quem se **compartilha** e sempre **sair da conta** em computador de uso coletivo.
**Palavras-chave:** nuvem · armazenamento · sincronizar · backup · compartilhar · verificação em duas etapas

## ⚙️ Missão 5 – Paralelismo e concorrência: tudo ao mesmo tempo
**Objetivo:** entender como o computador faz várias tarefas ao mesmo tempo (paralelismo) e o que acontece quando elas disputam a mesma coisa (concorrência).
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Imagine **arrumar a sala de aula sozinho**: varrer, organizar as cadeiras, limpar o quadro e recolher o lixo. Agora imagine **4 colegas**, cada um com uma parte, **ao mesmo tempo**. Termina muito mais rápido! Isso é **paralelismo**.
O processador do computador faz o mesmo: ele tem vários **núcleos**, e cada núcleo cuida de uma parte do trabalho ao mesmo tempo.
| Trabalho | 1 pessoa (ou 1 núcleo) | 4 pessoas (ou 4 núcleos) |
| 4 tarefas de 10 minutos | 40 minutos | 10 minutos |
| 8 tarefas de 10 minutos | 80 minutos | 20 minutos |

**Nem tudo dá para dividir.** Se uma tarefa **depende** da outra, ela precisa esperar. Para fazer um bolo, dá para separar os ingredientes, untar a forma e ligar o forno para esquentar ao mesmo tempo, mas **assar** só depois de **misturar**, e a calda só depois de assar.
**Concorrência** é quando várias tarefas querem usar **a mesma coisa** ao mesmo tempo. Exemplo: 19 alunos mandam imprimir ao mesmo tempo, mas a escola tem **uma** impressora. Ela não imprime tudo junto: forma uma **fila** e atende um pedido de cada vez.
| Situação | É… |
| 4 colegas varrem partes diferentes da sala ao mesmo tempo | Paralelismo |
| 19 pedidos disputam uma impressora só | Concorrência (vira fila) |
| Dois amigos querem editar a mesma linha do arquivo ao mesmo tempo | Concorrência (o programa precisa organizar) |
### 📖 O que significa?
- **Paralelismo**: fazer várias tarefas **ao mesmo tempo**, dividindo o trabalho entre vários processadores ou núcleos.
- **Núcleo**: cada “cérebro” dentro do processador; um processador de 4 núcleos faz 4 tarefas de uma vez.
- **Processador** (ou CPU, do inglês *Central Processing Unit*, “unidade central de processamento”): a peça que faz as contas e executa os programas.
- **Concorrência**: várias tarefas disputando o mesmo recurso (impressora, arquivo, internet) ao mesmo tempo.
- **Recurso**: aquilo que as tarefas precisam usar: a impressora, a memória, um arquivo.
- **Fila**: organização em que o primeiro que chega é o primeiro a ser atendido.
- **Dependência**: quando uma tarefa só pode começar depois que outra termina.
### 🌎 Onde eu uso isso?
- Num **jogo**, um núcleo cuida da imagem enquanto outro cuida do som, ao mesmo tempo.
- A **fila de impressão** da escola organiza os pedidos que disputam a mesma impressora.
- Ao **baixar vários arquivos** ao mesmo tempo, eles dividem a mesma internet e cada um vai mais devagar.
### 🎯 Missão
🟢 **Básico** — no portal: calcule o tempo com mais núcleos, separe paralelismo e concorrência e decida o que pode ser feito ao mesmo tempo.
🟡 **Desafio** — no portal: coloque em ordem as tarefas que dependem umas das outras.
🔴 **Turbo** — no portal: escolha quantos ajudantes precisa para terminar a tempo.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Paralelismo é fazer várias tarefas ao mesmo tempo.
2. ( ) Com 4 núcleos, 4 tarefas de 10 minutos levam 40 minutos.
3. ( ) Concorrência é quando várias tarefas disputam o mesmo recurso.
4. ( ) Uma impressora atende vários pedidos formando uma fila.
5. ( ) Toda tarefa pode ser dividida, mesmo quando depende de outra.
### 🧠 Resumo da Aula
**Paralelismo** é dividir o trabalho e fazer as partes **ao mesmo tempo**: o processador tem vários **núcleos** para isso. Mas tarefa que **depende** de outra precisa esperar. **Concorrência** é quando várias tarefas disputam o mesmo **recurso** (como uma impressora): o computador organiza uma **fila** e atende uma de cada vez.
**Palavras-chave:** paralelismo · núcleo · processador · concorrência · recurso · fila · dependência

## 🧰 Missão 6 – Projeto: escolher a estrutura certa
**Objetivo:** escolher a estrutura de dados certa (lista, fila, tabela ou grafo) para cada problema e planejar um pequeno sistema da escola.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Antes de criar um aplicativo, o programador decide **como guardar os dados**. Essa escolha é a **estrutura de dados**. Com a estrutura certa, o programa fica simples e rápido.
| Estrutura | Como guarda | Use quando… | Exemplo |
| 📝 Lista | Itens em ordem, um depois do outro | Precisa guardar vários itens do mesmo tipo | A chamada da turma |
| 🚶 Fila | O primeiro que entra é o primeiro que sai | Precisa atender por ordem de chegada | A fila de impressão |
| 📋 Tabela | Linhas (registros) e colunas (campos) | Cada item tem várias informações | Ficha dos alunos: nome, turma, nota |
| 🕸️ Grafo | Pontos ligados por linhas | O que importa são as ligações | Mapa das ruas, rede de amigos |

**Projeto da missão: o aplicativo da Escola JK.** Para cada parte do aplicativo, a turma escolhe a estrutura:
| Parte do aplicativo | Estrutura escolhida | Por quê |
| Chamada da turma | Lista | Vários nomes, em ordem |
| Pedidos de impressão | Fila | Imprime por ordem de chegada |
| Boletim (nome, notas e faltas) | Tabela | Cada aluno tem várias informações |
| Rotas dos ônibus escolares | Grafo | Paradas ligadas pelas ruas |

**Como fazer um projeto:** 1) entender o problema; 2) listar os dados; 3) escolher a estrutura; 4) testar com um exemplo; 5) apresentar.
### 📖 O que significa?
- **Estrutura de dados**: jeito de organizar os dados no computador para usar depois (lista, fila, tabela, grafo).
- **Lista**: itens em ordem, com um nome só.
- **Fila**: lista em que o primeiro que entra é o primeiro que sai.
- **Tabela**: dados em linhas e colunas; cada linha é um **registro** (um aluno) e cada coluna é um **campo** (nome, nota).
- **Grafo**: pontos (vértices) ligados por linhas (arestas); mostra o que está ligado a quê.
- **Projeto**: trabalho com começo, meio e fim para resolver um problema: planejar, fazer, testar e apresentar.
### 🌎 Onde eu uso isso?
- O **aplicativo de mapas** usa grafos para achar o caminho.
- A **planilha de notas** do professor é uma tabela.
- A **playlist** é uma lista; a **fila de atendimento** do posto de saúde é uma fila.
### 🎯 Missão
🟢 **Básico** — no portal: escolha a estrutura de cada parte do aplicativo da escola, ligue cada estrutura ao seu jeito de guardar e coloque em ordem as etapas do projeto.
🟡 **Desafio** — no portal: lista ou fila? Decida pelo jeito de atender.
🔴 **Turbo** — no portal: monte a tabela do boletim com os campos certos.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Na fila, o primeiro que entra é o primeiro que sai.
2. ( ) O mapa das ruas fica melhor guardado num grafo.
3. ( ) Numa tabela, cada linha é um campo e cada coluna é um registro.
4. ( ) Escolher a estrutura de dados certa deixa o programa mais simples.
5. ( ) Testar com um exemplo é uma etapa do projeto.
### 🧠 Resumo da Aula
A **estrutura de dados** é o jeito de guardar os dados. **Lista**: itens em ordem. **Fila**: o primeiro que entra é o primeiro que sai. **Tabela**: linhas (**registros**) e colunas (**campos**). **Grafo**: pontos e ligações. No **projeto**: entender o problema, listar os dados, escolher a estrutura, testar e apresentar.
**Palavras-chave:** estrutura de dados · lista · fila · tabela · registro · campo · grafo · projeto

## 🕸️ Missão 7 – Extra: Sistemas distribuídos
**Objetivo:** entender como muitos computadores, em lugares diferentes, trabalham juntos como se fossem um só.
📅 **Data da aula:** ........ / ........
### 💡 Para começar
Quando você faz uma pesquisa no buscador, **não é um computador só** que responde: são **milhares de servidores**, em vários data centers, trabalhando juntos. Isso é um **sistema distribuído**.
| Ideia | Como funciona | Exemplo |
| 🧩 Dividir o trabalho | Cada computador faz uma parte | Um servidor procura nas páginas de A a M, outro de N a Z |
| 📍 Ficar perto de você | Cópias do site ficam em vários lugares do mundo | O vídeo vem do servidor mais perto, mais rápido |
| 💾 Não parar se um quebrar | Outro computador assume o trabalho | O site continua no ar mesmo com um servidor com defeito |

**Tolerância a falhas** é essa capacidade de **continuar funcionando** mesmo quando uma parte quebra. É como um time de futebol: se um jogador se machuca, entra o reserva e o jogo continua.
**O jogo on-line** também é distribuído: vários jogadores, em casas diferentes, veem o mesmo mapa. Os servidores do jogo recebem os movimentos de todos e mandam a mesma partida para cada um.
### 📖 O que significa?
- **Sistema distribuído**: vários computadores, em lugares diferentes, ligados em rede e trabalhando juntos como se fossem um só.
- **Servidor**: computador que fica ligado o tempo todo para guardar e entregar dados e serviços.
- **Tolerância a falhas**: capacidade de continuar funcionando mesmo quando uma parte quebra.
- **Cópia** (ou réplica): o mesmo dado guardado em mais de um computador.
- **Buscador**: site que procura páginas na internet, como o Google e o Bing.
### 🌎 Onde eu uso isso?
- O **buscador** responde em menos de um segundo porque milhares de servidores dividem a busca.
- Nos **jogos on-line**, os servidores mantêm todos os jogadores na mesma partida.
- Os **aplicativos de banco** guardam cópias dos dados em vários lugares para não perder nada.
### 🎯 Missão
🟢 **Básico** — no portal: separe o que é e o que não é sistema distribuído, ligue cada ideia ao seu exemplo e responda às perguntas.
🟡 **Desafio** — no portal: um servidor quebrou. O que acontece?
🔴 **Turbo** — no portal: ache as palavras no caça-palavras.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) Num sistema distribuído, vários computadores trabalham juntos como se fossem um só.
2. ( ) O buscador responde usando um único computador.
3. ( ) Tolerância a falhas é continuar funcionando quando uma parte quebra.
4. ( ) Ter cópias dos dados em vários lugares ajuda a não perder nada.
5. ( ) Nos jogos on-line, cada jogador vê uma partida diferente.
### 🧠 Resumo da Aula
Um **sistema distribuído** são vários computadores, em lugares diferentes, trabalhando juntos como um só. Eles **dividem o trabalho**, guardam **cópias** perto dos usuários e têm **tolerância a falhas**: se um quebra, outro assume. Buscadores, jogos on-line e bancos funcionam assim.
**Palavras-chave:** sistema distribuído · servidor · tolerância a falhas · cópia · buscador

## 🚀 Missão 8 – Extra: Velocidade da internet
**Objetivo:** entender o que é megabit por segundo, calcular o tempo de um download e saber o que é a latência (ping).
📅 **Data da aula:** ........ / ........
### 💡 Para começar
O plano de internet diz “**100 mega**”. Isso quer dizer **100 Mbps**: **100 megabits por segundo**. Mas atenção: o tamanho dos arquivos é medido em **megabytes (MB)**, e **1 byte = 8 bits**.
| Para saber quantos MB chegam por segundo | Divida os Mbps por 8 |
| Internet de 80 Mbps | 80 ÷ 8 = **10 MB por segundo** |
| Internet de 40 Mbps | 40 ÷ 8 = **5 MB por segundo** |
| Internet de 16 Mbps | 16 ÷ 8 = **2 MB por segundo** |

**Quanto tempo demora o download?** Tempo = tamanho do arquivo (MB) ÷ MB por segundo.
| Arquivo | Internet | Conta | Tempo |
| Vídeo de 50 MB | 80 Mbps (10 MB/s) | 50 ÷ 10 | 5 segundos |
| Jogo de 300 MB | 40 Mbps (5 MB/s) | 300 ÷ 5 | 60 segundos (1 minuto) |

**Download e upload:** **download** é baixar (os dados chegam até você); **upload** é enviar (você manda para a internet, como ao postar um vídeo). Muitos planos têm upload menor que o download.
**Latência (ping):** é o tempo que um pacote leva para ir até o servidor e voltar, medido em **milissegundos (ms)**. Em jogos on-line, **ping baixo** é melhor: o jogo responde na hora. Ping alto dá o famoso “lag”.
### 📖 O que significa?
- **Bit**: o menor pedaço de informação do computador: 0 ou 1.
- **Byte**: grupo de **8 bits**. Os arquivos são medidos em bytes (KB, MB, GB).
- **Mbps** (megabits por segundo): quantos milhões de bits chegam a cada segundo; é a velocidade do plano de internet.
- **MB** (megabyte): cerca de um milhão de bytes; mede o tamanho dos arquivos.
- **Download** (em português, “baixar”): receber dados da internet.
- **Upload** (em português, “enviar”): mandar dados para a internet.
- **Latência** (ou **ping**): tempo de ida e volta de um pacote, em milissegundos; quanto menor, melhor.
- **Lag** (em português, “atraso”): quando o jogo ou a chamada demora para responder, por causa de latência alta.
### 🌎 Onde eu uso isso?
- Para **escolher um plano de internet**, compare os Mbps de download e de upload.
- Antes de **baixar um jogo**, dá para calcular quanto tempo vai demorar.
- Nos **jogos on-line**, o número do ping mostra se a conexão está boa.
### 🎯 Missão
🟢 **Básico** — no portal: converta Mbps em MB por segundo, calcule o tempo de download e separe download e upload.
🟡 **Desafio** — no portal: qual plano serve para cada família?
🔴 **Turbo** — no portal: ping alto ou baixo? Escolha o melhor servidor do jogo.
### ✅ Perguntas rápidas
Escreva **V** para verdadeiro ou **F** para falso:
1. ( ) 1 byte é igual a 8 bits.
2. ( ) Uma internet de 80 Mbps baixa 80 MB por segundo.
3. ( ) Postar um vídeo na internet é fazer upload.
4. ( ) Nos jogos on-line, quanto maior o ping, melhor.
5. ( ) Um arquivo de 50 MB, a 10 MB por segundo, demora 5 segundos.
### 🧠 Resumo da Aula
A velocidade da internet é medida em **Mbps** (megabits por segundo); os arquivos, em **MB** (megabytes). Como **1 byte = 8 bits**, divida os Mbps por 8 para saber os MB por segundo. Tempo de download = tamanho ÷ MB por segundo. **Download** é baixar; **upload** é enviar. **Latência (ping)** é o tempo de ida e volta: quanto menor, melhor.
**Palavras-chave:** bit · byte · Mbps · MB · download · upload · latência · ping

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

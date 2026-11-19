/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 9º ano — 3º bimestre de 2027 (Tecnologia e sociedade)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF09CO06, EF09CO07, EF09CO08.
   ♻️ A Missão 5 reaproveita a M4 do 9º ano de 2026 (4º bimestre), já testada.
   Padrão (19/11/2026): nada de "escreva uma frase"; formatos sempre alternados; correção automática;
   respostas sempre escritas na apostila.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-9ano-2027-3bim", {

  /* ============ MISSÃO 1 — Problemas da cidade ============ */
  m1: {
    pratica: [
      { tipo: "rota", titulo: "Mão na massa: o método, passo a passo",
        robo: BIT("🕳️ Outro problema: buracos na rua", [["Observo e escolho: os buracos da minha rua.", "1 · 2 observar e escolher"], ["Quem sofre? Que dados? Que solução? Depois, testo.", "3 · 4 · 5 · 6 ✔", true]]),
        enunciado: "<p>Clique nos passos <strong>na ordem</strong>. A resposta está na tabela <strong>Passo · O que fazer</strong>.</p>",
        etapas: [
          { ic: "👀", t: "Observar: listar os problemas" },
          { ic: "☝️", t: "Escolher um problema" },
          { ic: "🧍", t: "Descobrir quem sofre" },
          { ic: "📊", t: "Pensar nos dados que ajudariam" },
          { ic: "💡", t: "Imaginar a solução com tecnologia" },
          { ic: "🧪", t: "Testar com as pessoas e melhorar" }],
        okMsg: "Você pensou como quem resolve! 🏙️",
        explicacao: "Observar → escolher → quem sofre → dados → solução → testar." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada problema e uma solução com tecnologia",
        robo: BIT("🔗 Outro exemplo", [["“Ninguém sabe o dia da coleta do lixo” → avisar muita gente.", "avisar → mensagem automática"], ["Eu penso: a solução organiza, avisa ou mede?", "organiza / avisa / mede ✔", true]]),
        enunciado: "<p>Use a tabela <strong>Tipo de solução · Para que serve</strong>.</p>",
        pares: [{ a: "Lâmpadas queimadas espalhadas pela cidade", b: "🗺️ Mapa colaborativo para marcar cada uma" }, { a: "O rio sobe com a chuva e ninguém percebe a tempo", b: "📡 Sensor que mede o nível do rio" },
          { a: "Muitos pedidos de conserto sem controle", b: "📋 Planilha para organizar e contar" }, { a: "Mudou o horário do ônibus escolar", b: "💬 Mensagem automática para avisar as famílias" }],
        explicacao: "Marcar lugares = mapa; medir sozinho = sensor; organizar e contar = planilha; avisar muita gente = mensagem." },
      { tipo: "escolha", titulo: "Quem sofre? Que dados?",
        perguntas: [
          { p: "No problema das ruas escuras, quem é mais afetado?", opcoes: ["Quem volta da escola ou do trabalho à noite", "Quem só sai de dia", "Ninguém"], certo: 0 },
          { p: "Que dado ajuda a consertar as lâmpadas?", opcoes: ["Onde está cada poste e há quanto tempo está apagado", "A cor dos postes", "O nome do eletricista"], certo: 0 },
          { p: "Dividir um problema grande em partes menores é:", opcoes: ["Decomposição", "Automação", "Desmatamento"], certo: 0 }],
        explicacao: "Afetados: quem anda à noite; dados: onde e há quanto tempo; dividir em partes = decomposição." },
      { tipo: "sinais", titulo: "Quando a tecnologia ajuda?",
        enunciado: "<p>A tecnologia ajuda quando <strong>organiza informações</strong>, <strong>avisa as pessoas certas</strong> ou <strong>mostra os dados</strong>. Marque <strong>só</strong> os casos em que ela ajuda.</p>",
        opcoes: [{ t: "Um mapa mostra onde estão os buracos", certo: true }, { t: "Uma mensagem avisa as famílias da mudança de horário", certo: true }, { t: "Uma planilha conta os pedidos de cada bairro", certo: true },
          { t: "Um aplicativo que ninguém da cidade sabe usar nem tem internet para baixar", certo: false, why: "A solução precisa servir para as pessoas afetadas." }],
        explicacao: "Ajuda quando organiza, avisa ou mostra os dados, e quando as pessoas conseguem usar." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Monte o plano: lixo fora de hora",
        enunciado: "<p>Problema escolhido: <strong>o lixo é colocado na rua fora do dia da coleta</strong>. Complete o plano escolhendo em cada linha.</p>",
        dicas: ["Siga a ordem do método: quem sofre, que dados, que solução."],
        colunas: ["Passo", "Escolha"],
        linhas: [["Quem sofre?", { op: ["Os moradores, com sujeira e bichos na rua", "Só o caminhão do lixo"], r: "Os moradores, com sujeira e bichos na rua" }],
          ["Que dado ajudaria?", { op: ["O dia e o horário da coleta em cada rua", "A cor das lixeiras"], r: "O dia e o horário da coleta em cada rua" }],
          ["Que solução com tecnologia?", { op: ["Mensagem automática avisando o dia da coleta", "Um sensor de temperatura"], r: "Mensagem automática avisando o dia da coleta" }],
          ["Como testar?", { op: ["Perguntar aos vizinhos se o aviso ajudou", "Não testar"], r: "Perguntar aos vizinhos se o aviso ajudou" }]],
        explicacao: "Afetados: moradores; dado: dia e horário da coleta; solução: aviso automático; teste: ouvir os vizinhos." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória das soluções",
        enunciado: "<p>Vire duas cartas e ache os pares: cada solução e para que serve.</p>", dicas: ["Releia a tabela Tipo de solução · Para que serve."],
        pares: [{ a: "Aplicativo", b: "Receber pedidos das pessoas" }, { a: "Mapa colaborativo", b: "Marcar onde estão os problemas" }, { a: "Planilha", b: "Organizar e contar" }, { a: "Sensor", b: "Medir sozinho" }],
        explicacao: "Aplicativo, mapa, planilha e sensor." }
    ],
    vf: [
      { v: true, why: "É o passo 1." },
      { v: false, corrigir: { trecho: "juntar vários problemas num só", opcoes: ["juntar vários problemas num só", "dividir um problema em partes menores"], certo: "dividir um problema em partes menores" }, why: "Decompor é dividir." },
      { v: true, why: "A solução é para eles." },
      { v: false, corrigir: { trecho: "sempre é a melhor resposta", opcoes: ["sempre é a melhor resposta", "nem sempre é a resposta"], certo: "nem sempre é a resposta" }, why: "Às vezes a solução é uma conversa ou um cartaz." },
      { v: true, why: "É colaborativo." }
    ]
  },

  /* ============ MISSÃO 2 — Dados abertos ============ */
  m2: {
    pratica: [
      { tipo: "tabela", titulo: "Mão na massa: leia a tabela dos bairros",
        robo: BIT("📊 Outra tabela: livros emprestados", [["Turma A: 5, Turma B: 8, Turma C: 3. Somo: 5 + 8 + 3 = <b>16</b>.", "soma = 16"], ["O maior é 8: a Turma B.", "maior = Turma B ✔", true]]),
        enunciado: "<p>Use a tabela <strong>Bairro (inventado) · Pedidos de conserto de lâmpada no mês</strong>.</p>",
        dicas: ["Releia a tabela dos bairros no 💡 Para começar."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Quantos pedidos no total?", { r: "40", tipo: "num" }], ["Quantos pedidos no Bairro das Flores?", { r: "12", tipo: "num" }],
          ["Qual bairro teve mais pedidos?", { op: ["Bairro Novo", "Bairro do Rio", "Bairro da Serra"], r: "Bairro Novo" }]],
        explicacao: "12 + 7 + 15 + 6 = 40; Flores = 12; o maior é o Bairro Novo (15)." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Dado aberto ou dado pessoal?",
        robo: BIT("🔎 A pergunta", [["A informação <b>identifica uma pessoa</b>? Então é dado pessoal.", "identifica → pessoal"], ["É um número geral da cidade? Dado aberto.", "geral → aberto", true]]),
        colunaItem: "Informação", colunaResp: "É…",
        categorias: [{ id: "A", rot: "📂 Dado aberto" }, { id: "P", rot: "🔒 Dado pessoal" }],
        itens: [{ t: "Número de alunos de cada escola da cidade", c: "A" }, { t: "O nome e a nota de um aluno", c: "P" }, { t: "Quanto a prefeitura gastou com a merenda", c: "A" },
          { t: "O endereço de uma família", c: "P" }, { t: "A população da cidade no censo", c: "A" }],
        explicacao: "Números gerais da cidade são abertos; o que identifica uma pessoa é pessoal." },
      { tipo: "ligar", titulo: "Onde encontrar",
        pares: [{ a: "🏛️ Portal da Transparência", b: "Gastos, salários e contratos públicos" }, { a: "📈 IBGE Cidades", b: "População e números de cada cidade" }, { a: "🗂️ dados.gov.br", b: "Milhares de tabelas do governo" }, { a: "⚖️ LAI", b: "Direito de pedir informações públicas" }],
        explicacao: "Transparência = gastos; IBGE Cidades = números da cidade; dados.gov.br = tabelas; LAI = direito de pedir." },
      { tipo: "escolha", titulo: "Dados abertos",
        perguntas: [
          { p: "Dados abertos são informações que qualquer pessoa pode:", opcoes: ["Ver, baixar e usar", "Só ver com autorização do prefeito", "Apagar"], certo: 0 },
          { p: "A pesquisa que conta toda a população do país é o:", opcoes: ["Censo", "Spam", "Backup"], certo: 0 }],
        explicacao: "Qualquer pessoa pode usar; o censo conta a população." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "🟡 Onde começar? Outra tabela (dados inventados)",
        enunciado: "<p>Buracos na rua por bairro, num mês (inventado): <strong>Centro 9</strong>, <strong>Vila Nova 14</strong>, <strong>Jardim 5</strong>, <strong>Alto 8</strong>.</p>",
        dicas: ["Some tudo; depois ache o maior e o menor."],
        colunas: ["Pergunta", "Resposta"],
        linhas: [["Total de buracos:", { r: "36", tipo: "num" }], ["Bairro com mais buracos:", { op: ["Vila Nova", "Centro", "Jardim", "Alto"], r: "Vila Nova" }],
          ["Bairro com menos buracos:", { op: ["Jardim", "Alto", "Centro"], r: "Jardim" }], ["Onde começar o conserto, olhando só os dados?", { op: ["Vila Nova", "Jardim"], r: "Vila Nova" }]],
        explicacao: "9 + 14 + 5 + 8 = 36; mais: Vila Nova (14); menos: Jardim (5); começar onde há mais: Vila Nova." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: dados abertos",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "Dados **abertos** são informações públicas para qualquer pessoa ver, baixar e usar. A **LAI** garante o direito de pedir informações. O Portal da **Transparência** mostra os gastos, e o **IBGE** Cidades mostra a população. O dado **pessoal**, como o nome e a nota de um aluno, não é publicado.",
        explicacao: "Abertos, LAI, Transparência, IBGE e pessoal." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "são dados abertos", opcoes: ["são dados abertos", "são dados pessoais"], certo: "são dados pessoais" }, why: "Identificam o aluno." },
      { v: true, why: "Lei nº 12.527/2011." },
      { v: true, why: "Com dados do censo." },
      { v: false, corrigir: { trecho: "é o Bairro do Rio", opcoes: ["é o Bairro do Rio", "é o Bairro Novo"], certo: "é o Bairro Novo" }, why: "15 é o maior." }
    ]
  },

  /* ============ MISSÃO 3 — Desigualdade digital ============ */
  m3: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: acesso, qualidade ou habilidade?",
        robo: BIT("🔎 As 3 perguntas", [["Tem aparelho e internet? Se não: <b>acesso</b>.", "não tem → acesso"], ["Tem, mas é fraco ou dividido? <b>Qualidade</b>. Tem, mas não sabe usar? <b>Habilidade</b>.", "fraco → qualidade · não sabe → habilidade", true]]),
        enunciado: "<p>Use a tabela <strong>Parte · Pergunta · Exemplo</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Parte",
        categorias: [{ id: "A", rot: "📱 Acesso" }, { id: "Q", rot: "⚡ Qualidade" }, { id: "H", rot: "🧠 Habilidade" }],
        itens: [{ t: "A família não tem internet em casa", c: "A" }, { t: "Quatro irmãos dividem um celular com pouco pacote de dados", c: "Q" },
          { t: "O avô tem celular, mas não sabe marcar a consulta pelo aplicativo", c: "H" }, { t: "A internet cai toda hora e o vídeo da aula não carrega", c: "Q" }, { t: "Não há nenhum computador na casa", c: "A" }],
        explicacao: "Sem aparelho ou internet = acesso; conexão fraca ou aparelho dividido = qualidade; não saber usar = habilidade." }
    ],
    basico: [
      { tipo: "sinais", titulo: "O que diminui a desigualdade digital?",
        enunciado: "<p>Marque <strong>só</strong> o que ajuda a diminuir.</p>",
        opcoes: [{ t: "Laboratório de informática na escola", certo: true }, { t: "Wi-Fi gratuito em praças e escolas", certo: true }, { t: "Cursos para quem não sabe usar", certo: true }, { t: "Doação e conserto de computadores usados", certo: true },
          { t: "Fechar o laboratório da escola", certo: false, why: "Tira o acesso de quem não tem em casa." }],
        explicacao: "Laboratório, Wi-Fi gratuito, cursos e doação diminuem a desigualdade." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Desigualdade digital", b: "Diferença de acesso, qualidade e habilidade" }, { a: "Inclusão digital", b: "Ações para que todos usem a tecnologia" }, { a: "gov.br", b: "Site e aplicativo de serviços do governo" }, { a: "Pacote de dados", b: "A quantidade de internet do plano do celular" }],
        explicacao: "Desigualdade, inclusão, gov.br e pacote de dados." },
      { tipo: "escolha", titulo: "Por que importa?",
        perguntas: [
          { p: "Por que a desigualdade digital é um problema?", opcoes: ["Estudar, trabalhar e pedir documentos dependem cada vez mais da internet", "Porque todo mundo precisa jogar", "Não é um problema"], certo: 0 },
          { p: "Ter celular sempre significa ter boa conexão?", opcoes: ["Não: a qualidade também conta", "Sim, sempre", "Só se for novo"], certo: 0 }],
        explicacao: "Oportunidades dependem da internet; e ter aparelho não garante qualidade." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Diminui ou aumenta a desigualdade?",
        enunciado: "<p>Para cada ação, decida.</p>",
        app: "📶 Inclusão", botoes: [{ id: "D", rot: "⬇️ Diminui" }, { id: "A", rot: "⬆️ Aumenta" }],
        itens: [{ de: "Escola", t: "Abrir o laboratório para a comunidade no sábado", c: "D" }, { de: "Escola", t: "Mandar toda a tarefa só pela internet, sem outra opção", c: "A", why: "Quem não tem internet fica de fora." },
          { de: "Prefeitura", t: "Wi-Fi gratuito na praça", c: "D" }, { de: "Turma", t: "Alunos ensinando os avós a usar o celular", c: "D" }],
        okMsg: "Você pensou em todos! 📶",
        explicacao: "Abrir o laboratório, Wi-Fi gratuito e ensinar diminuem; exigir só internet aumenta." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da inclusão",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["ACESSO", "QUALIDADE", "HABILIDADE", "INCLUSAO", "WIFI"],
        pistas: ["Ter aparelho e internet", "Conexão boa e aparelho próprio", "Saber usar com segurança", "Todos usando a tecnologia (sem acento)", "Rede sem fio gratuita na praça (sem hífen)"], tam: 11,
        explicacao: "Acesso, qualidade, habilidade, inclusão e Wi-Fi." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "sempre significa ter acesso de qualidade", opcoes: ["sempre significa ter acesso de qualidade", "nem sempre significa ter acesso de qualidade"], certo: "nem sempre significa ter acesso de qualidade" }, why: "O aparelho pode ser dividido ou a conexão fraca." },
      { v: true, why: "É a definição." },
      { v: true, why: "Mais gente conectada." },
      { v: true, why: "Muita coisa é pela internet." },
      { v: false, corrigir: { trecho: "só tem a ver com ter ou não ter aparelho", opcoes: ["só tem a ver com ter ou não ter aparelho", "tem a ver com acesso, qualidade e habilidade"], certo: "tem a ver com acesso, qualidade e habilidade" }, why: "São três partes." }
    ]
  },

  /* ============ MISSÃO 4 — Tecnologia e trabalho ============ */
  m4: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: máquina faz bem ou é muito humano?",
        robo: BIT("🔎 A pergunta", [["A tarefa se repete <b>sempre igual</b>? A máquina faz bem.", "repetitiva → máquina"], ["Precisa de <b>criatividade</b>, <b>empatia</b> ou resolver algo novo? Muito humano.", "criar, cuidar → humano", true]]),
        colunaItem: "Tarefa", colunaResp: "Quem faz melhor",
        categorias: [{ id: "M", rot: "🤖 A máquina faz bem" }, { id: "H", rot: "🧑 Muito humano" }],
        itens: [{ t: "Somar milhares de notas fiscais", c: "M" }, { t: "Consolar um paciente nervoso", c: "H" }, { t: "Separar e-mails de spam", c: "M" },
          { t: "Inventar uma campanha para a festa da escola", c: "H" }, { t: "Resolver uma briga entre colegas de equipe", c: "H" }],
        explicacao: "Repetir e calcular: máquina. Cuidar, criar e resolver conflitos: muito humano." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada profissão e o que ela faz",
        robo: BIT("🔗 Outro exemplo", [["“Mecânico” hoje → usa computador para achar o defeito.", "profissão que mudou"], ["Eu leio o 📖 O que significa? e a tabela.", "profissão → função ✔", true]]),
        pares: [{ a: "Analista de dados", b: "Organiza e estuda dados para ajudar a decidir" }, { a: "Desenvolvedor de aplicativos", b: "Cria os aplicativos do celular" }, { a: "Piloto de drone", b: "Controla a distância uma pequena aeronave" }, { a: "Teletrabalho", b: "Trabalhar a distância, pela internet" }],
        explicacao: "Analista, desenvolvedor, piloto de drone e teletrabalho." },
      { tipo: "escolha", titulo: "Automação",
        perguntas: [
          { p: "Automação é quando:", opcoes: ["Uma máquina ou programa faz sozinho uma tarefa que era de pessoa", "Uma pessoa faz tudo à mão", "O computador desliga sozinho"], certo: 0 },
          { p: "As tarefas mais fáceis de automatizar são as:", opcoes: ["Repetitivas", "Criativas", "Que exigem empatia"], certo: 0 },
          { p: "O que fazer para o futuro do trabalho?", opcoes: ["Aprender a usar a tecnologia e desenvolver as habilidades humanas", "Parar de estudar", "Fugir da tecnologia"], certo: 0 }],
        explicacao: "Automação = máquina faz sozinha; repetitivas são as primeiras; aprender tecnologia + habilidades humanas." },
      { tipo: "sinais", titulo: "Quais são habilidades muito humanas?",
        enunciado: "<p>Marque <strong>só</strong> as habilidades que continuam muito humanas.</p>",
        opcoes: [{ t: "Criatividade", certo: true }, { t: "Empatia", certo: true }, { t: "Comunicação", certo: true }, { t: "Trabalho em equipe", certo: true },
          { t: "Fazer a mesma conta mil vezes", certo: false, why: "Tarefa repetitiva: a máquina faz bem." }],
        explicacao: "Criatividade, empatia, comunicação e trabalho em equipe." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "🟡 A profissão muda, diminui ou surge?",
        enunciado: "<p>Use a tabela <strong>O que acontece · Exemplo</strong>.</p>",
        dicas: ["Releia a tabela O que acontece · Exemplo."],
        colunaItem: "Caso", colunaResp: "O que acontece",
        categorias: [{ id: "M", rot: "🔄 Muda" }, { id: "D", rot: "🔁 Diminui (automatizada)" }, { id: "S", rot: "🆕 Surge" }],
        itens: [{ t: "O mecânico passa a usar computador para achar o defeito", c: "M" }, { t: "O caixa da agência bancária, com o aplicativo do banco", c: "D" },
          { t: "Analista de dados", c: "S" }, { t: "Piloto de drone", c: "S" }],
        explicacao: "Mecânico muda; caixa de banco diminui; analista de dados e piloto de drone surgem." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: o trabalho e a tecnologia",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "A **automação** faz as tarefas repetitivas. Profissões mudam e **novas** surgem, e o **teletrabalho** cresce. As máquinas são boas em repetir e calcular; as pessoas, em **criatividade** e **empatia**.",
        explicacao: "Automação, novas, teletrabalho, criatividade e empatia." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Repetem sempre igual." },
      { v: true, why: "As máquinas não fazem isso bem." },
      { v: false, corrigir: { trecho: "nunca criou profissões novas", opcoes: ["nunca criou profissões novas", "também cria profissões novas"], certo: "também cria profissões novas" }, why: "Como o analista de dados." },
      { v: true, why: "É a definição." }
    ]
  },

  /* ============ MISSÃO 5 — IA: impactos (♻️ M4 do 9º ano de 2026) ============ */
  m5: {
    pratica: [
      { tipo: "mensagens", titulo: "Seja a IA: aprenda com os exemplos e separe os e-mails", explicacao: "Os e-mails com GRÁTIS, prêmio e “clique já” têm o padrão do spam dos exemplos. Os avisos da escola e da família são normais. É assim que a IA aprende: comparando com exemplos que já vieram com a resposta.", robo: {"paineis": ["🤖 Como a IA decide"], "passos": [{"fala": "Olha como eu decido com <b>outros</b> exemplos. Eu faço sempre as mesmas perguntas: Esse e-mail se parece com quais exemplos do treino? (é assim que a IA aprende: pelos padrões)", "painel": 0, "titulo": "Meus exemplos"}, {"fala": "“GANHE DINHEIRO FÁCIL!!! Clique já!” → tem as mesmas pistas dos exemplos de spam: GRÁTIS/GANHE, CLIQUE JÁ, muitos pontos de exclamação.", "painel": 0, "linha": "GANHE DINHEIRO FÁCIL!!! Clique já! → 🚫 Spam", "marca": true, "espera": 2600}, {"fala": "“Professor: a prova é na quinta.” → parece os exemplos normais: avisos da escola, sem prêmio nem pressa.", "painel": 0, "linha": "Professor: a prova é na quinta. → ✅ Normal", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: compare cada e-mail com os exemplos do treino. 💪"}, app: "📧 E-mail",
        botoes: [{ id: "S", rot: "🚫 Spam" }, { id: "N", rot: "✅ Normal" }],
        enunciado: `<p><strong>1. Treino:</strong> estes exemplos já vieram com a resposta certa. Procure o <strong>padrão</strong>:</p>
          <div class="tabela-wrap"><table><thead><tr><th>E-mail de exemplo</th><th>Resposta</th></tr></thead><tbody>
          <tr><td>“GRÁTIS! Clique já e ganhe um prêmio!”</td><td>🚫 Spam</td></tr>
          <tr><td>“Prêmio garantido, só hoje, clique no link”</td><td>🚫 Spam</td></tr>
          <tr><td>“Reunião de pais na quinta, às 19h”</td><td>✅ Normal</td></tr>
          <tr><td>“Segue o trabalho de Ciências em anexo”</td><td>✅ Normal</td></tr></tbody></table></div>
          <p><strong>2. Use o que aprendeu:</strong> agora você é a IA. Separe os e-mails novos.</p>`,
        itens: [
          { de: "promo@sorteio.xyz", t: "Você foi escolhido! Prêmio GRÁTIS, clique já!", c: "S", why: "Tem o padrão do spam: grátis, prêmio, clique já." },
          { de: "Escola", t: "Lembrete: a prova de Informática é na semana que vem.", c: "N" },
          { de: "ofertas@ganhe.com", t: "Só hoje: clique no link e ganhe um celular", c: "S", why: "Pressa + prêmio + link: padrão de spam." },
          { de: "Prima Ana", t: "Mandei as fotos do aniversário no grupo da família.", c: "N" }],
        okMsg: "Você fez o que a IA faz: aprendeu um padrão com exemplos e usou nos e-mails novos!" }
    ],
    bonus: [
    { id: "m5-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: a IA aprendeu certo?",
      perguntas: [
        { p: "Uma IA só viu fotos de gatos <b>brancos</b>. O que pode acontecer com um gato preto?", opcoes: ["Ela pode errar: é o viés", "Ela acerta sempre", "Ela vira um gato"], certo: 0, why: "A IA aprende com os exemplos; exemplos de um tipo só causam viés." },
        { p: "Qual é a ordem de como a IA aprende?", opcoes: ["Coletar, treinar, testar, usar", "Usar, testar, coletar, treinar", "Treinar, usar, coletar, testar"], certo: 0, why: "Primeiro os dados (coletar), depois o treino, o teste e só então o uso." }
      ] }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Como a IA aprende: coloque as etapas em ordem",
        itens: ["Coletar muitos exemplos com a resposta certa (os dados)", "Treinar: procurar padrões nos exemplos", "Testar com exemplos que ela nunca viu", "Usar no dia a dia para fazer previsões"],
        dicas: ["Primeiro vêm os exemplos; depois o treino."],
        explicacao: "Coletar dados → treinar → testar → usar. No filtro de spam: milhares de e-mails marcados → descobre as palavras do spam → confere com e-mails novos → manda sozinho para a pasta Spam." },
      { tipo: "classificar", modo: "tabela", titulo: "Usa IA ou não usa?", colunaItem: "Situação", colunaResp: "IA?",
        categorias: [{ id: "S", rot: "🤖 Usa IA" }, { id: "N", rot: "⚙️ Não usa IA" }],
        itens: [
          { t: "O aplicativo escolhe o próximo vídeo pelo que você já assistiu", c: "S", why: "Recomendação aprende com o que você vê." },
          { t: "O celular desbloqueia reconhecendo o seu rosto", c: "S", why: "Reconhecimento facial é IA." },
          { t: "A calculadora faz 2 + 2", c: "N", why: "É uma conta fixa: não aprende com exemplos." },
          { t: "O teclado sugere a próxima palavra", c: "S", why: "Aprende com muitos textos." },
          { t: "O interruptor acende a lâmpada", c: "N", why: "Só liga e desliga: não aprende nada." },
          { t: "O tradutor passa uma frase do inglês para o português", c: "S", why: "O tradutor aprendeu com milhões de frases." }],
        explicacao: "Usa IA quando o programa aprendeu com muitos exemplos: recomendação, rosto, teclado e tradutor. Calculadora e interruptor seguem regras fixas." },
      { tipo: "escolha", titulo: "A IA também erra",
        perguntas: [
          { p: "Uma IA de fotos foi treinada quase só com fotos de cachorros brancos. O que deve acontecer?", opcoes: ["Ela pode errar mais com cachorros de outras cores: isso é viés", "Ela acerta todos os cachorros do mundo", "Ela vira um cachorro"], certo: 0, why: "Exemplos de um tipo só ensinam errado: viés." },
          { p: "O chatbot respondeu com toda a certeza a data de um fato histórico. O que eu faço?", opcoes: ["Confiro em outras fontes, porque o chatbot pode inventar respostas", "Copio sem conferir, porque IA nunca erra", "Apago o chatbot"], certo: 0 },
          { p: "Como evitar o viés ao treinar uma IA?", opcoes: ["Usar muitos exemplos, de vários tipos diferentes", "Usar poucos exemplos, todos iguais", "Não usar exemplos"], certo: 0 }],
        explicacao: "Exemplos poucos ou de um tipo só causam viés; a solução é ter exemplos variados. O chatbot pode inventar: sempre confira." }
    ],
    desafio: [
      { tipo: "classificar", modo: "tabela", titulo: "Impactos da IA: ajuda ou pede cuidado?", colunaItem: "Impacto", colunaResp: "👍 ou ⚠️",
        categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "C", rot: "⚠️ Pede cuidado" }],
        itens: [
          { t: "Legenda automática para pessoas surdas", c: "A" },
          { t: "Treinar a IA com milhões de fotos de pessoas sem pedir autorização", c: "C", why: "Usa dados pessoais sem consentimento." },
          { t: "Ajudar o médico a encontrar sinais de doença no exame", c: "A" },
          { t: "Criar o vídeo falso de um prefeito dizendo o que ele nunca disse", c: "C", why: "Deepfake: desinformação." },
          { t: "Prever chuva e pragas para o agricultor", c: "A" },
          { t: "Computadores gigantes que gastam muita energia e água para treinar a IA", c: "C", why: "Impacto no meio ambiente." }],
        explicacao: "👍 Acessibilidade, saúde e campo. ⚠️ Dados pessoais sem autorização, deepfakes e gasto de energia e água." },
      { tipo: "escolha", titulo: "A IA na nossa cidade",
        perguntas: [
          { p: "A prefeitura quer câmeras com reconhecimento facial na praça. Qual é a pergunta mais importante a fazer?", opcoes: ["Como os dados do rosto das pessoas serão guardados e protegidos?", "De que cor são as câmeras?", "Quantas câmeras cabem num poste?"], certo: 0, why: "Rosto é dado pessoal sensível (biometria)." },
          { p: "Uma loja trocou o caixa por uma máquina com IA. O que pode acontecer com o trabalho?", opcoes: ["Algumas profissões mudam ou diminuem, e outras novas aparecem", "Nenhum trabalho muda", "Todas as pessoas perdem o emprego"], certo: 0 },
          { p: "Semáforos com IA percebem onde tem mais carros. Qual é o impacto bom?", opcoes: ["Menos tempo parado no trânsito", "Mais engarrafamento", "Ruas sem semáforo"], certo: 0 }],
        explicacao: "Toda tecnologia tem impactos: o reconhecimento facial pede cuidado com os dados; o trabalho muda; o semáforo inteligente pode diminuir o tempo no trânsito." }
    ],
    turbo: [
      {tipo:  "ligar", titulo:  "Ligue cada regra para usar a IA na escola ao porquê dela", pares:  [{a:  "Confira a resposta da IA em outra fonte", b:  "O chatbot pode inventar uma resposta errada com toda a certeza"}, {a:  "Use a IA para estudar, não para copiar", b:  "Copiando, você não aprende e pode ser plágio"}, {a:  "Não coloque dados pessoais no chatbot", b:  "O que você digita pode ficar guardado pela empresa"}, {a:  "Diga quando usou IA no trabalho", b:  "É ser honesto com o professor e com os colegas"}], explicacao:  "Usar IA com responsabilidade é <b>conferir</b>, <b>estudar de verdade</b>, <b>proteger os dados</b> e <b>ser honesto</b>."}
    ],
    vf: [
      { v: true, why: "É assim que ela aprende." },
      { v: false, corrigir: { trecho: "nunca erra, então não preciso", opcoes: ["nunca erra, então não preciso", "também erra, então preciso"], certo: "também erra, então preciso" }, why: "O chatbot pode inventar respostas." },
      { v: true, why: "Exemplos de um tipo só causam viés." },
      { v: true, why: "A recomendação aprende com o que você vê." },
      { v: false, corrigir: { trecho: "Posso colocar", opcoes: ["Posso colocar", "Não devo colocar"], certo: "Não devo colocar" }, why: "Dados pessoais não vão para o chatbot." }
    ]
  },

  /* ============ MISSÃO 6 — Tecnologia e meio ambiente ============ */
  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: prejudica ou ajuda o meio ambiente?",
        robo: BIT("🔎 A pergunta", [["Gera lixo, contamina ou gasta muita energia? Prejudica.", "lixo, energia → prejudica"], ["Vigia, economiza ou evita desperdício? Ajuda.", "vigia, economiza → ajuda", true]]),
        enunciado: "<p>Use a tabela <strong>Pode prejudicar · Pode ajudar</strong>.</p>",
        colunaItem: "Tecnologia", colunaResp: "Efeito",
        categorias: [{ id: "P", rot: "⚠️ Pode prejudicar" }, { id: "A", rot: "🌱 Pode ajudar" }],
        itens: [{ t: "Celular velho jogado no lixo comum", c: "P" }, { t: "Satélite que vigia o desmatamento", c: "A" }, { t: "Data center que gasta muita energia e água", c: "P" },
          { t: "Sensor que rega só quando a terra está seca", c: "A" }, { t: "Trocar de celular todo ano sem precisar", c: "P" }],
        explicacao: "Lixo, energia e troca sem precisar prejudicam; satélites e sensores ajudam." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Lixo eletrônico", b: "Aparelhos quebrados ou velhos jogados fora" }, { a: "Data center", b: "Prédio cheio de servidores da internet" }, { a: "INPE", b: "Órgão do Brasil que estuda espaço, clima e florestas" }, { a: "Ponto de coleta", b: "Lugar que recebe o lixo eletrônico para reciclar" }],
        explicacao: "Lixo eletrônico, data center, INPE e ponto de coleta." },
      { tipo: "sinais", titulo: "O que você pode fazer?",
        enunciado: "<p>Marque <strong>só</strong> as atitudes que cuidam do meio ambiente.</p>",
        opcoes: [{ t: "Usar o aparelho por mais tempo", certo: true }, { t: "Consertar antes de trocar", certo: true }, { t: "Doar o que ainda funciona", certo: true }, { t: "Levar pilhas e celulares a um ponto de coleta", certo: true },
          { t: "Jogar a bateria velha no lixo comum", certo: false, why: "Solta metais que contaminam." }],
        explicacao: "Usar mais tempo, consertar, doar e levar ao ponto de coleta." },
      { tipo: "escolha", titulo: "Satélites e desmatamento",
        perguntas: [
          { p: "O sistema do INPE que manda alertas de desmatamento quase em tempo real é o:", opcoes: ["DETER", "PRODES", "IBGE"], certo: 0 },
          { p: "O PRODES calcula:", opcoes: ["Quanto foi desmatado em cada ano", "A população", "A velocidade da internet"], certo: 0 }],
        explicacao: "DETER = alertas; PRODES = desmatamento de cada ano." }
    ],
    desafio: [
      { tipo: "ordenar", titulo: "🟡 O celular quebrou: qual é o melhor caminho?",
        enunciado: "<p>Coloque em ordem, do primeiro ao último recurso. Use a tabela <strong>Atitude · Por quê</strong>.</p>",
        dicas: ["Primeiro tente fazer o aparelho durar; o ponto de coleta é o último passo."],
        itens: ["Tentar consertar", "Se não der, ver se alguma peça ainda serve", "Doar as partes que funcionam", "Levar o resto a um ponto de coleta"],
        explicacao: "Consertar → aproveitar peças → doar → ponto de coleta. Nunca no lixo comum." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória do meio ambiente",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Desmatamento", b: "Corte das árvores" }, { a: "Satélite", b: "Fotografa a Terra lá de cima" }, { a: "Lixo eletrônico", b: "Celulares e pilhas velhos" }, { a: "Ponto de coleta", b: "Recicla com segurança" }],
        explicacao: "Desmatamento, satélite, lixo eletrônico e ponto de coleta." }
    ],
    vf: [
      { v: true, why: "Por causa dos metais." },
      { v: false, corrigir: { trecho: "não gastam energia", opcoes: ["não gastam energia", "gastam muita energia"], certo: "gastam muita energia" }, why: "E água para resfriar." },
      { v: true, why: "Com o DETER e o PRODES." },
      { v: false, corrigir: { trecho: "devem ir para o lixo comum", opcoes: ["devem ir para o lixo comum", "devem ir para um ponto de coleta"], certo: "devem ir para um ponto de coleta" }, why: "Lá são reciclados com segurança." },
      { v: true, why: "O aparelho dura mais." }
    ]
  },

  /* ============ MISSÃO 7 — Extra: Acessibilidade ============ */
  m7: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada recurso e quem ele ajuda",
        robo: BIT("🔗 Outro exemplo: a rampa", [["A rampa na escada ajuda quem usa cadeira de rodas.", "rampa → cadeira de rodas"], ["Na tecnologia é igual: cada recurso abre a porta para alguém.", "recurso → quem ajuda ✔", true]]),
        enunciado: "<p>Use a tabela <strong>Recurso · Como funciona · Quem ajuda</strong>.</p>",
        pares: [{ a: "🔊 Leitor de tela", b: "Pessoas cegas ou com baixa visão" }, { a: "💬 Legenda", b: "Pessoas surdas ou com dificuldade de ouvir" }, { a: "🤟 VLibras", b: "Pessoas surdas que usam a Libras" },
          { a: "⌨️ Navegar só pelo teclado", b: "Pessoas com dificuldade de movimento" }],
        explicacao: "Leitor de tela, legenda, VLibras e teclado." }
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "Acessível ou não?",
        colunaItem: "Situação", colunaResp: "É…",
        categorias: [{ id: "A", rot: "✅ Acessível" }, { id: "N", rot: "❌ Não acessível" }],
        itens: [{ t: "Vídeo da escola com legenda", c: "A" }, { t: "Foto postada sem descrição", c: "N", why: "Sem texto alternativo, o leitor de tela não descreve." },
          { t: "Site que funciona só com o mouse", c: "N" }, { t: "Texto com alto contraste e letra que dá para aumentar", c: "A" }],
        explicacao: "Legenda e alto contraste: acessível. Foto sem descrição e site só com mouse: não." },
      { tipo: "escolha", titulo: "Acessibilidade e lei",
        perguntas: [
          { p: "Pela Lei Brasileira de Inclusão, os sites de empresas e do governo precisam ser:", opcoes: ["Acessíveis", "Coloridos", "Pagos"], certo: 0 },
          { p: "Texto alternativo é:", opcoes: ["A descrição de uma imagem", "Uma senha", "Um vírus"], certo: 0 },
          { p: "A legenda ajuda:", opcoes: ["Todo mundo, inclusive quem está num lugar barulhento", "Só pessoas surdas", "Ninguém"], certo: 0 }],
        explicacao: "Sites acessíveis por lei; texto alternativo descreve imagens; acessibilidade ajuda todo mundo." },
      { tipo: "memoria", titulo: "Jogo da memória da acessibilidade",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Libras", b: "Língua Brasileira de Sinais" }, { a: "Avatar", b: "Personagem digital" }, { a: "Alto contraste", b: "Cores bem diferentes" }],
        explicacao: "Libras, avatar e alto contraste." }
    ],
    desafio: [
      { tipo: "sinais", titulo: "🟡 O que deixa o site da escola mais acessível?",
        enunciado: "<p>O site da escola vai ser refeito. Marque <strong>só</strong> o que deixa ele mais acessível.</p>",
        dicas: ["Use a tabela dos recursos."],
        opcoes: [{ t: "Descrever as fotos (texto alternativo)", certo: true }, { t: "Colocar legenda nos vídeos", certo: true }, { t: "Permitir aumentar a letra", certo: true }, { t: "Funcionar também pelo teclado", certo: true },
          { t: "Escrever em letra cinza-clara sobre fundo branco", certo: false, why: "Pouco contraste dificulta a leitura." }],
        explicacao: "Texto alternativo, legenda, letra ajustável e teclado; cinza-claro no branco atrapalha." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da acessibilidade",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["LEGENDA", "LIBRAS", "CONTRASTE", "LEITOR", "AVATAR"],
        pistas: ["Escreve o que é falado no vídeo", "Língua Brasileira de Sinais", "Alto… ajuda quem tem baixa visão", "… de tela: lê em voz alta", "Personagem digital do VLibras"], tam: 10,
        explicacao: "Legenda, Libras, contraste, leitor e avatar." }
    ],
    vf: [
      { v: true, why: "É o que ele faz." },
      { v: false, corrigir: { trecho: "só serve para pessoas surdas", opcoes: ["só serve para pessoas surdas", "ajuda todo mundo"], certo: "ajuda todo mundo" }, why: "Ajuda também em lugar barulhento." },
      { v: true, why: "Com um avatar." },
      { v: true, why: "Lei nº 13.146/2015." },
      { v: true, why: "É a definição." }
    ]
  },

  /* ============ MISSÃO 8 — Extra: Eleições e informação ============ */
  m8: {
    pratica: [
      { tipo: "ligar", titulo: "Mão na massa: cada termo e o seu significado",
        robo: BIT("🔗 Como eu ligo", [["Eu leio o 📖 O que significa?.", "termo → significado"], ["“Voto facultativo” → opcional.", "facultativo → opcional ✔", true]]),
        pares: [{ a: "Urna eletrônica", b: "O equipamento em que votamos" }, { a: "Boletim de urna", b: "Papel com o total de votos daquela urna" }, { a: "TSE", b: "Tribunal Superior Eleitoral" }, { a: "Voto facultativo", b: "Voto opcional" }],
        explicacao: "Urna, boletim de urna, TSE e voto facultativo." }
    ],
    basico: [
      { tipo: "sinais", titulo: "Atitudes contra a desinformação",
        enunciado: "<p>Marque <strong>só</strong> as atitudes que protegem contra a desinformação nas eleições.</p>",
        opcoes: [{ t: "Conferir na Justiça Eleitoral e nas agências de checagem", certo: true }, { t: "Desconfiar do que dá raiva ou medo", certo: true }, { t: "Não repassar sem conferir", certo: true }, { t: "Respeitar quem vota diferente", certo: true },
          { t: "Repassar logo o vídeo chocante", certo: false, why: "Quem repassa ajuda o boato a crescer." }],
        explicacao: "Conferir, desconfiar de raiva e medo, não repassar e respeitar." },
      { tipo: "escolha", titulo: "A urna e o voto",
        perguntas: [
          { p: "Desde quando o Brasil usa a urna eletrônica?", opcoes: ["1996", "2020", "1950"], certo: 0 },
          { p: "Aos 16 e 17 anos, o voto é:", opcoes: ["Facultativo", "Obrigatório", "Proibido"], certo: 0 },
          { p: "Quem organiza as eleições?", opcoes: ["A Justiça Eleitoral, com o TSE", "As redes sociais", "Os candidatos"], certo: 0 }],
        explicacao: "Urna desde 1996; facultativo aos 16 e 17; Justiça Eleitoral e TSE." },
      { tipo: "classificar", modo: "tabela", titulo: "Pode na propaganda eleitoral?",
        colunaItem: "Na propaganda", colunaResp: "Pelas regras do TSE",
        categorias: [{ id: "S", rot: "✅ Pode, com aviso" }, { id: "N", rot: "🚫 O TSE proíbe" }],
        itens: [{ t: "Um deepfake de um candidato dizendo o que nunca disse", c: "N" }, { t: "Usar inteligência artificial com um aviso de que foi usada", c: "S" }],
        explicacao: "Deepfake é proibido; usar IA exige um aviso." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O vídeo chocante na véspera da eleição",
        enunciado: "<p>Na véspera da eleição, chega no grupo um vídeo de um candidato dizendo algo absurdo. O vídeo causa muita raiva e pede: “Repasse para todos!”.</p>",
        dicas: ["Use a tabela Atitude · Por quê."],
        perguntas: [
          { p: "Qual é o primeiro cuidado?", opcoes: ["Desconfiar: raiva e pressa são sinais de boato", "Repassar para todos", "Acreditar porque é vídeo"], certo: 0 },
          { p: "O vídeo pode ser falso mesmo parecendo real?", opcoes: ["Pode: pode ser um deepfake", "Não: vídeo sempre é verdade", "Só se for em preto e branco"], certo: 0 },
          { p: "Onde conferir?", opcoes: ["Na Justiça Eleitoral e nas agências de checagem", "No próprio grupo", "Em qualquer comentário"], certo: 0 }],
        explicacao: "Desconfiar, lembrar do deepfake e conferir nas fontes oficiais e nas agências." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: eleições e informação",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "A **urna** eletrônica é usada desde 1996 e imprime o **boletim** de urna. O voto é **facultativo** aos 16 e 17 anos. Contra a **desinformação**, confira nas fontes oficiais. O TSE proíbe **deepfake** na propaganda.",
        explicacao: "Urna, boletim, facultativo, desinformação e deepfake." }
    ],
    vf: [
      { v: true, why: "Desde 1996." },
      { v: false, corrigir: { trecho: "o voto é obrigatório", opcoes: ["o voto é obrigatório", "o voto é facultativo"], certo: "o voto é facultativo" }, why: "Aos 16 e 17 é opcional." },
      { v: true, why: "E exige aviso quando usa IA." },
      { v: true, why: "Emoções fortes fazem repassar sem pensar." },
      { v: true, why: "É impresso no fim da votação." }
    ]
  },

  /* ============ 🔁 REVISÃO ============ */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "ordenar", de: "m1", titulo: "M1 · O método", enunciado: "<p>Coloque em ordem.</p>", itens: ["Observar", "Escolher um problema", "Descobrir quem sofre", "Pensar nos dados", "Imaginar a solução", "Testar"], explicacao: "Observar, escolher, quem sofre, dados, solução, testar." },
      { tipo: "relembre", de: "m2" },
      { tipo: "classificar", de: "m2", titulo: "M2 · Aberto ou pessoal?", enunciado: "<p>Separe.</p>", categorias: [{ id: "A", rot: "Dado aberto" }, { id: "P", rot: "Dado pessoal" }], itens: [{ t: "População da cidade", c: "A" }, { t: "Nota de um aluno", c: "P" }], explicacao: "Geral = aberto; identifica = pessoal." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", de: "m3", titulo: "M3 · As 3 partes", enunciado: "<p>Separe.</p>", categorias: [{ id: "A", rot: "Acesso" }, { id: "Q", rot: "Qualidade" }, { id: "H", rot: "Habilidade" }], itens: [{ t: "Sem internet em casa", c: "A" }, { t: "Celular dividido por 4 irmãos", c: "Q" }, { t: "Não sabe usar o aplicativo", c: "H" }], explicacao: "Acesso, qualidade e habilidade." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Trabalho", perguntas: [{ p: "As tarefas mais fáceis de automatizar são as:", opcoes: ["Repetitivas", "Criativas"], certo: 0 }], explicacao: "Repetitivas." },
      { tipo: "relembre", de: "m5" },
      { tipo: "ordenar", de: "m5", titulo: "M5 · Como a IA aprende", enunciado: "<p>Coloque em ordem.</p>", itens: ["Coletar dados", "Treinar", "Testar", "Usar"], explicacao: "Coletar, treinar, testar, usar." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Meio ambiente", perguntas: [{ p: "Pilhas e celulares velhos vão para:", opcoes: ["Um ponto de coleta", "O lixo comum"], certo: 0 }], explicacao: "Ponto de coleta." },
      { tipo: "relembre", de: "m7" },
      { tipo: "ligar", de: "m7", titulo: "M7 · Acessibilidade", enunciado: "<p>Ligue cada recurso.</p>", pares: [{ a: "Leitor de tela", b: "Pessoas cegas" }, { a: "Legenda", b: "Pessoas surdas" }], explicacao: "Leitor de tela e legenda." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Eleições", perguntas: [{ p: "Aos 16 anos, o voto é:", opcoes: ["Facultativo", "Obrigatório"], certo: 0 }], explicacao: "Facultativo." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: ajuda a sociedade ou atrapalha?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "🏙️ Sociedade", botoes: [{ id: "A", rot: "✅ Ajuda" }, { id: "T", rot: "🚩 Atrapalha" }],
        itens: [{ de: "", t: "Marcar os buracos da rua num mapa colaborativo", c: "A" }, { de: "", t: "Jogar o celular velho no lixo comum", c: "T" }, { de: "", t: "Colocar legenda nos vídeos da escola", c: "A" },
          { de: "", t: "Repassar um vídeo de eleição sem conferir", c: "T" }, { de: "", t: "Conferir a resposta do chatbot em outra fonte", c: "A" }],
        okMsg: "Você está pronto para a prova! 🏙️",
        explicacao: "Mapa, legenda e conferir ajudam; lixo comum e repassar sem conferir atrapalham." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["SENSOR", "CENSO", "INCLUSAO", "AUTOMACAO", "VIES", "LIBRAS"],
        pistas: ["Mede sozinho", "Conta toda a população", "Todos usando a tecnologia (sem acento)", "Máquina faz sozinha (sem acento)", "Quando a IA aprende de forma injusta (sem acento)", "Língua Brasileira de Sinais"], tam: 11,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-9ano-2027-3bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Problemas da cidade", [{ p: "Dividir um problema grande em partes menores é:", opcoes: ["Decomposição", "Automação", "Censo"], certo: 0 }, { p: "Para marcar onde estão os problemas da cidade, use um:", opcoes: ["Mapa colaborativo", "Sensor de chuva", "Leitor de tela"], certo: 0 }]), pega("m1"),
    Q("m2", "Dados abertos", [{ p: "A lei que garante o direito de pedir informações públicas é a:", opcoes: ["LAI", "LGPD", "LBI"], certo: 0 }, { p: "O nome e a nota de um aluno são:", opcoes: ["Dados pessoais", "Dados abertos", "Dados do censo"], certo: 0 }]), pega("m2"),
    Q("m3", "Desigualdade digital", [{ p: "Um celular dividido por 4 irmãos é um problema de:", opcoes: ["Qualidade", "Acesso", "Habilidade"], certo: 0 }, { p: "Qual ação diminui a desigualdade digital?", opcoes: ["Wi-Fi gratuito em praças", "Fechar o laboratório", "Exigir tudo só pela internet"], certo: 0 }]), pega("m3"),
    Q("m4", "Trabalho", [{ p: "Automação é quando:", opcoes: ["Uma máquina faz sozinha uma tarefa de pessoa", "Uma pessoa faz tudo à mão", "O computador quebra"], certo: 0 }, { p: "Uma habilidade muito humana é a:", opcoes: ["Empatia", "Conta repetitiva", "Cópia de arquivos"], certo: 0 }]), pega("m4"),
    Q("m5", "IA", [{ p: "A IA aprende com:", opcoes: ["Muitos exemplos (dados)", "Mágica", "Nenhum dado"], certo: 0 }, { p: "O chatbot respondeu com certeza. Eu:", opcoes: ["Confiro em outra fonte", "Copio sem conferir", "Apago o computador"], certo: 0 }]), pega("m5"),
    Q("m6", "Meio ambiente", [{ p: "Quem vigia o desmatamento da Amazônia com satélites é o:", opcoes: ["INPE", "TSE", "IBGE Cidades"], certo: 0 }, { p: "Celulares velhos devem ir para:", opcoes: ["Um ponto de coleta", "O lixo comum", "O rio"], certo: 0 }]), pega("m6"),
    Q("m7", "Acessibilidade", [{ p: "O VLibras traduz textos para:", opcoes: ["A Libras", "O inglês", "Números"], certo: 0 }, { p: "Texto alternativo é:", opcoes: ["A descrição de uma imagem", "Uma senha", "Uma legenda de música"], certo: 0 }]), pega("m7"),
    Q("m8", "Eleições", [{ p: "Aos 16 e 17 anos, o voto é:", opcoes: ["Facultativo", "Obrigatório", "Proibido"], certo: 0 }, { p: "Na propaganda eleitoral, o TSE proíbe:", opcoes: ["Deepfake", "Usar cores", "Falar das propostas"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

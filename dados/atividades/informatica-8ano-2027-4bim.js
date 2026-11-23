/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 4º bimestre de 2027 (Privacidade)
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   6 missões fixas (m1–m6) + 2 extras (m7, m8) + 🔁 Revisão (rv) + 📝 Recuperação (rc).
   BNCC Computação: EF08CO04, EF08CO08, EF08CO10.
   ============================================================ */
(function () {
  const BIT = (titulo, linhas, fim) => ({ paineis: [titulo], passos: [
    { fala: "Olha como eu penso num exemplo <b>diferente</b> do seu.", painel: 0, titulo },
    ...linhas.map(l => ({ fala: l[0], painel: 0, linha: l[1], marca: !!l[2] })),
    { fala: "Agora é só fazer igual no seu, com calma.", painel: null, espera: 2400 }],
    fim: fim || "Agora é a sua vez! 💪" });

PORTAL.registrarAtividades("informatica-8ano-2027-4bim", {

  m1: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: é dado pessoal?",
        robo: BIT("🔎 A pergunta", [["Essa informação <b>identifica</b> uma pessoa? É dado pessoal.", "identifica → dado pessoal"], ["“O céu está azul” não diz nada sobre ninguém.", "não identifica → não é", true]]),
        enunciado: "<p>Use a tabela <strong>Dado pessoal · Exemplo</strong>.</p>",
        colunaItem: "Informação", colunaResp: "É dado pessoal?",
        categorias: [{ id: "S", rot: "📇 É dado pessoal" }, { id: "N", rot: "🌤️ Não é" }],
        itens: [{ t: "Ana Souza Lima", c: "S" }, { t: "Rua das Flores, 10", c: "S" }, { t: "A previsão do tempo de amanhã", c: "N" }, { t: "A sua selfie", c: "S" }, { t: "Onde você está agora", c: "S" }, { t: "A capital do Brasil", c: "N" }],
        explicacao: "Nome, endereço, foto e localização identificam a pessoa; a previsão do tempo e a capital do país, não." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Separe: dado pessoal ou não?",
        enunciado: "<p>Use o 💡 Para começar.</p>",
        categorias: [{ id: "S", rot: "📇 Dado pessoal" }, { id: "N", rot: "🌤️ Não é dado pessoal" }],
        itens: [{ t: "Telefone", c: "S" }, { t: "Data de nascimento", c: "S" }, { t: "CPF", c: "S" }, { t: "O nome de um rio", c: "N" }, { t: "Localização", c: "S" }, { t: "A cor do céu", c: "N" }],
        explicacao: "Telefone, data de nascimento, CPF e localização identificam a pessoa." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Dado pessoal", b: "Informação que identifica uma pessoa" }, { a: "Identificar", b: "Descobrir quem é a pessoa" }, { a: "Golpista", b: "Quem engana para tirar vantagem" }, { a: "Privacidade", b: "O direito de decidir o que os outros sabem sobre você" }],
        explicacao: "Dado pessoal, identificar, golpista e privacidade." },
      { tipo: "escolha", titulo: "Antes de informar um dado",
        robo: BIT("🔎 As três perguntas", [["Alguém pediu o meu e-mail num sorteio.", "e-mail?"], ["Quem está pedindo? Para quê? Precisa mesmo?", "3 perguntas", true]]),
        perguntas: [
          { p: "Quais são as três perguntas antes de informar um dado?", opcoes: ["Quem está pedindo? Para quê? Precisa mesmo?", "Qual é a cor? Quanto custa? Onde fica?", "Nenhuma: é só informar"], certo: 0 },
          { p: "Informações soltas, juntas:", opcoes: ["Podem identificar você", "Nunca identificam ninguém", "Apagam os seus dados"], certo: 0 }],
        explicacao: "Quem pede, para quê e se precisa mesmo. Juntas, informações soltas podem identificar." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 O cadastro da promoção",
        enunciado: "<p>Uma loja faz um sorteio de uma camiseta. Para cada campo do cadastro, decida: ele precisa mesmo?</p>",
        app: "🎁 Promoção", botoes: [{ id: "S", rot: "✅ Precisa" }, { id: "N", rot: "🚫 Não precisa" }],
        itens: [{ de: "Campo", t: "Nome para avisar quem ganhou", c: "S" },
          { de: "Campo", t: "Um contato (e-mail ou telefone) para avisar o ganhador", c: "S" },
          { de: "Campo", t: "Foto do seu documento de identidade", c: "N", why: "Para um sorteio de camiseta, não precisa." },
          { de: "Campo", t: "A senha do seu e-mail", c: "N", why: "Senha nunca se informa." },
          { de: "Campo", t: "Onde você está agora", c: "N", why: "A localização não é necessária." }],
        okMsg: "Você só informa o que precisa! 📇",
        explicacao: "Só o necessário: nome e um contato. Documento, senha e localização não." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos dados pessoais",
        enunciado: "<p>Vire duas cartas e ache os pares: cada dado pessoal e o seu exemplo.</p>", dicas: ["Os exemplos estão na tabela do 💡 Para começar."],
        pares: [{ a: "🧑 Nome completo", b: "Ana Souza Lima" }, { a: "🏠 Endereço", b: "Rua das Flores, 10" }, { a: "📇 Documentos", b: "CPF, RG" }, { a: "📍 Localização", b: "Onde você está agora" }],
        explicacao: "Nome, endereço, documentos e localização." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: true, why: "Mostra onde a pessoa está." },
      { v: false, corrigir: { trecho: "nunca identificam ninguém, nem juntas", opcoes: ["nunca identificam ninguém, nem juntas", "juntas, podem identificar alguém"], certo: "juntas, podem identificar alguém" }, why: "Juntas, revelam mais." },
      { v: true, why: "Quem pede, para quê, precisa mesmo?" },
      { v: false, corrigir: { trecho: "não é um dado pessoal", opcoes: ["não é um dado pessoal", "é um dado pessoal"], certo: "é um dado pessoal" }, why: "CPF é documento." }
    ]
  },

  m2: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: comum ou sensível?",
        robo: BIT("🔎 A pergunta", [["Se for exposto, pode levar a <b>discriminação</b>? É sensível.", "pode discriminar → sensível"], ["Saúde, religião, opinião política, origem, biometria, genética.", "a lista da lei", true]]),
        enunciado: "<p>Use a tabela <strong>Dado sensível (exemplos da lei) · Exemplo</strong>.</p>",
        colunaItem: "Dado", colunaResp: "Tipo",
        categorias: [{ id: "C", rot: "📇 Dado pessoal comum" }, { id: "S", rot: "🔐 Dado sensível" }],
        itens: [{ t: "Uma doença, um remédio que a pessoa toma", c: "S" }, { t: "O endereço", c: "C" }, { t: "A digital usada para desbloquear o celular", c: "S" }, { t: "A religião da pessoa", c: "S" }, { t: "O telefone", c: "C" }, { t: "Em quem a pessoa votou", c: "S" }],
        explicacao: "Saúde, biometria, religião e opinião política são sensíveis; endereço e telefone são dados pessoais comuns." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada direito da LGPD e o que você pode pedir",
        pares: [{ a: "👀 Saber", b: "Quais dados a empresa tem sobre você" }, { a: "✏️ Corrigir", b: "Arrumar um dado errado" }, { a: "🗑️ Apagar", b: "Excluir dados que não são mais necessários" }, { a: "↩️ Retirar o consentimento", b: "Desistir da autorização que deu" }],
        explicacao: "Saber, corrigir, apagar e retirar o consentimento." },
      { tipo: "classificar", titulo: "Separe: comum ou sensível?",
        categorias: [{ id: "C", rot: "📇 Comum" }, { id: "S", rot: "🔐 Sensível" }],
        itens: [{ t: "Nome completo", c: "C" }, { t: "O DNA", c: "S" }, { t: "O rosto usado para desbloquear", c: "S" }, { t: "Data de nascimento", c: "C" }, { t: "A cor da pele, a etnia", c: "S" }],
        explicacao: "DNA, rosto para desbloquear e origem racial ou étnica são sensíveis." },
      { tipo: "escolha", titulo: "LGPD e ANPD",
        perguntas: [
          { p: "Quem fiscaliza a LGPD?", opcoes: ["A ANPD", "A escola", "O time do bairro"], certo: 0 },
          { p: "Para usar dados de crianças, a lei exige:", opcoes: ["A autorização de um dos pais ou responsáveis", "Só a vontade da empresa", "Nada"], certo: 0 }],
        explicacao: "A ANPD fiscaliza; dados de crianças pedem a autorização de um dos pais ou responsáveis." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O aplicativo de jogos pediu dados de saúde",
        perguntas: [
          { p: "Um jogo de corrida pede: “Informe as suas doenças e remédios”. Isso é:", opcoes: ["Um dado sensível que o jogo não precisa", "Um dado comum e necessário", "Um apelido"], certo: 0 },
          { p: "O que você faz?", opcoes: ["Não informa e conversa com um adulto", "Informa tudo para ganhar pontos", "Informa os dados de um colega"], certo: 0 },
          { p: "Você já tinha informado e quer desistir. Pela LGPD, você pode:", opcoes: ["Retirar o consentimento e pedir para apagar", "Nada, é para sempre", "Só trocar a foto"], certo: 0 }],
        explicacao: "Dado de saúde é sensível. Não informe e, se já informou, peça para apagar e retire o consentimento." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a LGPD",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "Dados de saúde e a digital são dados **sensíveis**. A **LGPD** dá o direito de saber, **corrigir**, apagar e retirar o **consentimento**. Quem fiscaliza a lei é a **ANPD**.",
        explicacao: "Sensíveis, LGPD, corrigir, consentimento e ANPD." }
    ],
    vf: [
      { v: true, why: "Saúde é dado sensível." },
      { v: true, why: "É biometria." },
      { v: false, corrigir: { trecho: "você não pode pedir para apagar", opcoes: ["você não pode pedir para apagar", "você pode pedir para apagar"], certo: "você pode pedir para apagar" }, why: "Apagar é um direito." },
      { v: true, why: "Autoridade Nacional de Proteção de Dados." },
      { v: true, why: "Por isso são sensíveis." }
    ]
  },

  m3: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: protege ou arrisca?",
        robo: BIT("🔎 A pergunta", [["Esse hábito <b>dificulta</b> a entrada de outra pessoa? Protege.", "dificulta → protege"], ["Facilita a entrada? Arrisca.", "facilita → arrisca", true]]),
        enunciado: "<p>Use a tabela <strong>Hábito · Por quê</strong>.</p>",
        colunaItem: "Hábito", colunaResp: "Protege a conta?",
        categorias: [{ id: "P", rot: "🛡️ Protege" }, { id: "R", rot: "⚠️ Arrisca" }],
        itens: [{ t: "Ativar a verificação em duas etapas", c: "P" }, { t: "Usar a mesma senha em tudo", c: "R" }, { t: "Sair da conta no computador da escola", c: "P" }, { t: "Passar o código para o melhor amigo", c: "R" }, { t: "Manter o e-mail de recuperação atualizado", c: "P" }, { t: "Ignorar o alerta de login de outro aparelho", c: "R" }],
        explicacao: "Duas etapas, sair da conta e recuperação atualizada protegem; repetir senha, passar código e ignorar alertas arriscam." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada hábito e o seu motivo",
        pares: [{ a: "🔑 Senha diferente em cada conta importante", b: "Se uma vazar, as outras continuam seguras" }, { a: "📲 Verificação em duas etapas", b: "Mesmo com a senha, ninguém entra sem o código" }, { a: "🚪 Sair da conta em computador compartilhado", b: "O próximo não entra na sua conta" }, { a: "📧 Recuperação atualizada", b: "Se perder o acesso, você consegue voltar" }],
        explicacao: "Cada hábito tem um motivo." },
      { tipo: "ordenar", titulo: "Alerta de acesso que não fui eu: o que fazer, em ordem?",
        robo: BIT("🔔 Outro alerta", [["Chegou: “Novo acesso à sua conta do jogo”. Não fui eu!", "alerta"], ["Primeiro trocar a senha, depois tirar todos os aparelhos.", "senha → aparelhos → duas etapas → adulto", true]]),
        itens: ["Trocar a senha", "Sair de todos os aparelhos", "Ativar as duas etapas", "Avisar um adulto"],
        explicacao: "Trocar a senha → sair de todos os aparelhos → ativar as duas etapas → avisar um adulto." },
      { tipo: "escolha", titulo: "Segurança das contas",
        perguntas: [
          { p: "O colega pede o código que chegou no seu celular. Você:", opcoes: ["Não passa", "Passa, porque é amigo", "Passa só a metade"], certo: 0 },
          { p: "“Novo acesso de outro aparelho” e não foi você. Isso pode ser:", opcoes: ["Invasão", "Uma mensagem de parabéns", "Um elogio"], certo: 0 }],
        explicacao: "Nunca passe senha ou código. Acesso desconhecido pode ser invasão." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Os alertas da semana",
        enunciado: "<p>O Léo recebeu estes alertas. Para cada um, decida.</p>",
        app: "🔔 Alertas", botoes: [{ id: "E", rot: "🙋 Fui eu" }, { id: "I", rot: "🚨 Pode ser invasão" }],
        itens: [{ de: "Segunda", t: "Novo acesso: computador da escola, na hora da aula de Informática (o Léo entrou na aula)", c: "E" },
          { de: "Terça, 3h da manhã", t: "Novo acesso: aparelho desconhecido, em outro estado", c: "I", why: "O Léo estava dormindo, em casa." },
          { de: "Quarta", t: "Senha alterada (o Léo não trocou)", c: "I", why: "Ele não trocou a senha." },
          { de: "Quinta", t: "Novo acesso: o celular novo que o Léo ganhou e configurou", c: "E" }],
        okMsg: "Olho atento nos alertas! 🛡️",
        explicacao: "Acesso que você reconhece: foi você. Aparelho desconhecido ou senha trocada sem você: pode ser invasão." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras da segurança",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 📖 O que significa?."],
        palavras: ["CONTA", "LOGIN", "SENHA", "ALERTA", "INVASAO"],
        pistas: ["O seu cadastro num serviço", "Entrar na conta com usuário e senha", "Deve ser forte e diferente em cada conta", "Aviso de que alguém entrou na conta", "Outra pessoa entra na sua conta sem permissão (sem acento)"], tam: 10,
        explicacao: "Conta, login, senha, alerta e invasão." }
    ],
    vf: [
      { v: false, corrigir: { trecho: "é seguro", opcoes: ["é seguro", "não é seguro"], certo: "não é seguro" }, why: "Se uma vazar, todas ficam em risco." },
      { v: true, why: "O próximo não entra na sua conta." },
      { v: true, why: "Aparelho desconhecido." },
      { v: false, corrigir: { trecho: "Posso passar", opcoes: ["Posso passar", "Não posso passar"], certo: "Não posso passar" }, why: "Nem para o melhor amigo." },
      { v: true, why: "É para isso que serve." }
    ]
  },

  m4: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual é a opção mais protegida?",
        robo: BIT("🔎 A pergunta", [["Qual opção deixa <b>menos gente</b> ver ou falar com você?", "menos gente → mais protegida"], ["Conta privada e localização desligada.", "✔", true]]),
        enunciado: "<p>Use a tabela <strong>Configuração · Opção mais protegida</strong>.</p>",
        colunaItem: "Opção", colunaResp: "É a mais protegida?",
        categorias: [{ id: "S", rot: "🔒 Mais protegida" }, { id: "N", rot: "🔓 Menos protegida" }],
        itens: [{ t: "Conta privada", c: "S" }, { t: "Conta pública", c: "N" }, { t: "Localização nos posts desligada", c: "S" }, { t: "Mensagens de qualquer pessoa", c: "N" }, { t: "Mensagens só de amigos", c: "S" }, { t: "Mostrar quando está on-line", c: "N" }],
        explicacao: "Conta privada, localização desligada e mensagens só de amigos protegem mais." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Conta privada", b: "Só as pessoas aceitas veem os posts" }, { a: "Marcar", b: "Colocar o nome de alguém num post" }, { a: "Bloquear", b: "Impedir que uma pessoa veja você e fale com você" }, { a: "Silenciar", b: "Parar de ver os posts de alguém, sem que a pessoa saiba" }],
        explicacao: "Conta privada, marcar, bloquear e silenciar." },
      { tipo: "escolha", titulo: "Bloquear ou silenciar?",
        perguntas: [
          { p: "Um desconhecido manda mensagens estranhas todo dia. O melhor é:", opcoes: ["Bloquear", "Silenciar", "Responder"], certo: 0 },
          { p: "Um primo posta muitas fotos e você só quer ver menos. O melhor é:", opcoes: ["Silenciar", "Bloquear", "Mandar o seu endereço"], certo: 0 },
          { p: "Onde fica o menu de privacidade?", opcoes: ["Em Configurações", "Na galeria de fotos", "Na calculadora"], certo: 0 }],
        explicacao: "Bloquear impede contato; silenciar só esconde os posts. O menu fica em Configurações." },
      { tipo: "classificar", titulo: "Mais protegida ou menos protegida?",
        categorias: [{ id: "S", rot: "🔒 Mais protegida" }, { id: "N", rot: "🔓 Menos protegida" }],
        itens: [{ t: "Quem pode marcar você: só quem você segue", c: "S" }, { t: "Aparecer em buscas pelo telefone: ligado", c: "N" }, { t: "Aparecer em buscas pelo telefone: desligado", c: "S" }, { t: "Quem pode marcar você: qualquer pessoa", c: "N" }],
        explicacao: "Marcação só de quem você segue e busca pelo telefone desligada protegem mais." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Configure a conta da Júlia",
        enunciado: "<p>A Júlia criou uma conta nova. Para cada configuração, escolha.</p>",
        app: "⚙️ Configurações", botoes: [{ id: "P", rot: "🔒 Deixar protegida" }, { id: "A", rot: "🔓 Deixar aberta" }],
        itens: [{ de: "Conta", t: "Pública ou privada?", c: "P", why: "Privada: só quem ela aceita vê." },
          { de: "Localização nos posts", t: "Ligada ou desligada?", c: "P", why: "Desligada." },
          { de: "Quem pode mandar mensagem", t: "Qualquer pessoa ou só amigos?", c: "P", why: "Só amigos." },
          { de: "Mostrar quando está on-line", t: "Ligado ou desligado?", c: "P", why: "Desligado." }],
        okMsg: "Conta da Júlia protegida! ⚙️",
        explicacao: "Conta privada, localização desligada, mensagens só de amigos e status on-line desligado." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 A revisão da privacidade, em ordem",
        enunciado: "<p>Depois de uma atualização, a Júlia vai revisar a privacidade. Coloque em ordem.</p>", dicas: ["Primeiro abre o menu; por último, confere de novo no mês seguinte."],
        itens: ["Abrir Configurações", "Entrar em Privacidade", "Conferir cada opção e deixar a mais protegida", "Revisar de novo no mês seguinte"],
        explicacao: "Configurações → Privacidade → conferir cada opção → revisar uma vez por mês." }
    ],
    vf: [
      { v: true, why: "É a conta privada." },
      { v: false, corrigir: { trecho: "ligada", opcoes: ["ligada", "desligada"], certo: "desligada" }, why: "Desligada protege mais." },
      { v: true, why: "Bloquear impede contato." },
      { v: true, why: "Por isso é bom revisar." },
      { v: false, corrigir: { trecho: "avisa a pessoa", opcoes: ["avisa a pessoa", "não avisa a pessoa"], certo: "não avisa a pessoa" }, why: "Silenciar é sem que a pessoa saiba." }
    ]
  },

  m5: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: pode ou não pode no guia?",
        robo: BIT("🔎 A regra", [["Dado <b>real</b> de alguém? Não entra.", "real → não"], ["Exemplo <b>inventado</b> e imagem com crédito? Pode.", "inventado → pode", true]]),
        enunciado: "<p>Use as <strong>Regras</strong> do 💡 Para começar.</p>",
        colunaItem: "No guia", colunaResp: "Pode?",
        categorias: [{ id: "S", rot: "✅ Pode" }, { id: "N", rot: "❌ Não pode" }],
        itens: [{ t: "Um telefone inventado, como (94) 9 ••••-••••", c: "S" }, { t: "O endereço real de um colega", c: "N" }, { t: "Um desenho feito pela equipe", c: "S" }, { t: "Uma imagem da internet sem crédito", c: "N" }, { t: "Uma imagem com crédito", c: "S" }],
        explicacao: "Exemplos inventados, imagens próprias ou com crédito: pode. Dado real ou imagem sem crédito: não." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada parte do plano e a sua pergunta",
        pares: [{ a: "🎯 Tema", b: "Qual assunto de privacidade?" }, { a: "👥 Público", b: "Para quem?" }, { a: "🖼️ Formato", b: "Como vai ser?" }, { a: "🧩 Tarefas", b: "Quem faz o quê?" }, { a: "📚 Fontes", b: "De onde vem cada informação?" }],
        explicacao: "Tema, público, formato, tarefas e fontes." },
      { tipo: "escolha", titulo: "A linguagem do público",
        perguntas: [
          { p: "O guia é para os avós. A melhor linguagem:", opcoes: ["Frases curtas e letra grande", "Muitas palavras difíceis", "Letra bem pequena"], certo: 0 },
          { p: "O guia é para o 6º ano. Uma boa ideia:", opcoes: ["Exemplos de jogos", "Palavras difíceis", "Nenhuma imagem"], certo: 0 }],
        explicacao: "Avós: frases curtas e letra grande. 6º ano: exemplos de jogos." },
      { tipo: "classificar", titulo: "Separe: entra ou não entra no guia?",
        categorias: [{ id: "S", rot: "✅ Entra" }, { id: "N", rot: "❌ Não entra" }],
        itens: [{ t: "Exemplo inventado", c: "S" }, { t: "Dado pessoal real", c: "N" }, { t: "Imagem própria", c: "S" }, { t: "Imagem sem crédito", c: "N" }],
        explicacao: "Exemplos inventados e imagens próprias entram; dados reais e imagens sem crédito, não." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O plano do guia para os avós",
        perguntas: [
          { p: "Tema para os avós:", opcoes: ["Configurar a conta da rede social", "Fazer um bolo", "Montar um computador"], certo: 0 },
          { p: "Formato:", opcoes: ["Cartaz digital ou 5 slides", "Um livro de 200 páginas", "Uma mensagem de áudio de 1 hora"], certo: 0 },
          { p: "Tarefas:", opcoes: ["Pesquisar, escrever, desenhar, apresentar, cada uma com um responsável", "Uma pessoa faz tudo", "Ninguém sabe quem faz"], certo: 0 },
          { p: "Fontes:", opcoes: ["A apostila e sites oficiais", "Qualquer coisa que alguém falou", "Nenhuma"], certo: 0 }],
        explicacao: "Tema, formato, tarefas com responsável e fontes confiáveis." }
    ],
    turbo: [
      { tipo: "ordenar", titulo: "🔴 As etapas do projeto, em ordem",
        enunciado: "<p>Coloque as etapas do guia na ordem.</p>", dicas: ["Primeiro decide o assunto; por último, apresenta."],
        itens: ["Escolher o tema", "Escolher o público", "Escolher o formato", "Dividir as tarefas", "Pesquisar nas fontes", "Apresentar o guia"],
        explicacao: "Tema → público → formato → tarefas → fontes → apresentar." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "posso colocar o telefone real de um colega como exemplo", opcoes: ["posso colocar o telefone real de um colega como exemplo", "uso só exemplos inventados"], certo: "uso só exemplos inventados" }, why: "Nenhum dado pessoal real." },
      { v: true, why: "Linguagem do público." },
      { v: true, why: "Quem faz o quê." },
      { v: false, corrigir: { trecho: "entram sem crédito", opcoes: ["entram sem crédito", "precisam de crédito"], certo: "precisam de crédito" }, why: "Imagens próprias ou com crédito." }
    ]
  },

  m6: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: ajuda ou atrapalha a apresentação?",
        robo: BIT("🔎 A pergunta", [["Deixa o guia mais <b>fácil de entender</b>? Ajuda.", "mais claro → ajuda"], ["Confunde ou passa do tempo? Atrapalha.", "confunde → atrapalha", true]]),
        enunciado: "<p>Use a tabela <strong>Dica · Por quê</strong>.</p>",
        colunaItem: "Atitude", colunaResp: "Ajuda?",
        categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
        itens: [{ t: "Uma dica por slide", c: "A" }, { t: "Dez dicas no mesmo slide, com letra pequena", c: "T" }, { t: "Imagem ou desenho em cada dica", c: "A" }, { t: "Passar muito do tempo", c: "T" }, { t: "Exemplo da vida real (inventado)", c: "A" }],
        explicacao: "Uma dica por slide, imagem e exemplo ajudam; dez dicas juntas e passar do tempo atrapalham." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada critério e a sua pergunta",
        pares: [{ a: "✅ Correto", b: "As dicas estão certas?" }, { a: "👥 Para o público", b: "O público escolhido entenderia?" }, { a: "🔒 Seguro", b: "O guia não mostra nenhum dado pessoal real?" }, { a: "🎨 Atraente", b: "Dá vontade de ler?" }, { a: "🤝 Equipe", b: "Todos participaram?" }],
        explicacao: "Correto, para o público, seguro, atraente e equipe." },
      { tipo: "classificar", titulo: "Separe: ajuda ou atrapalha?",
        categorias: [{ id: "A", rot: "👍 Ajuda" }, { id: "T", rot: "👎 Atrapalha" }],
        itens: [{ t: "Respeitar o tempo", c: "A" }, { t: "Só uma pessoa fala e o resto fica parado", c: "T" }, { t: "Uma dica por parte do cartaz", c: "A" }, { t: "Mostrar o telefone real de alguém", c: "T" }],
        explicacao: "Tempo respeitado e uma dica por parte ajudam; trabalho de um só e dado real atrapalham." },
      { tipo: "escolha", titulo: "O melhor feedback",
        perguntas: [
          { p: "Qual é o melhor feedback?", opcoes: ["“As imagens ficaram ótimas! Sugiro aumentar a letra para os avós.”", "“Ficou horrível.”", "“Sei lá.”"], certo: 0 },
          { p: "Feedback é:", opcoes: ["Algo bom + uma sugestão, com respeito", "Só criticar", "Só elogiar sem dizer nada"], certo: 0 }],
        explicacao: "Feedback: algo bom + uma sugestão, com respeito." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Avalie o cartaz com a rubrica",
        enunciado: "<p>O cartaz da equipe 3: “Proteja a sua conta”. Para cada observação, decida se o critério foi cumprido.</p>",
        app: "📋 Rubrica", botoes: [{ id: "S", rot: "✅ Cumpriu" }, { id: "N", rot: "❌ Não cumpriu" }],
        itens: [{ de: "✅ Correto", t: "As dicas falam de senha forte e duas etapas, como na apostila", c: "S" },
          { de: "🔒 Seguro", t: "O exemplo de login usa o e-mail real de um aluno", c: "N", why: "Precisa de exemplo inventado." },
          { de: "🎨 Atraente", t: "Tem desenhos e cores em cada dica", c: "S" },
          { de: "🤝 Equipe", t: "Só um aluno fez tudo; os outros não sabiam do que se tratava", c: "N", why: "Todos precisam participar." }],
        okMsg: "Avaliação justa! 📋",
        explicacao: "Correto e atraente cumpriram; seguro e equipe, não." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória da apresentação",
        enunciado: "<p>Vire duas cartas e ache os pares.</p>", dicas: ["Os significados estão no 📖 O que significa?."],
        pares: [{ a: "Rubrica", b: "Lista do que vai ser avaliado" }, { a: "Critério", b: "O que é observado na avaliação" }, { a: "Feedback", b: "Comentário que ajuda a melhorar" }, { a: "Atraente", b: "Que chama a atenção e dá vontade de ver" }],
        explicacao: "Rubrica, critério, feedback e atraente." }
    ],
    vf: [
      { v: true, why: "Fica fácil de lembrar." },
      { v: true, why: "É o critério Seguro." },
      { v: false, corrigir: { trecho: "é só criticar", opcoes: ["é só criticar", "tem algo bom e uma sugestão"], certo: "tem algo bom e uma sugestão" }, why: "Algo bom + uma sugestão." },
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "ajuda as outras equipes", opcoes: ["ajuda as outras equipes", "atrapalha as outras equipes"], certo: "atrapalha as outras equipes" }, why: "Todas as equipes precisam apresentar." }
    ]
  },

  m7: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: onde a localização aparece?",
        robo: BIT("🔎 A pergunta", [["Mostra onde você está <b>agora</b>? Tempo real.", "agora → tempo real"], ["Mostra <b>todos</b> os lugares por onde passou? Histórico.", "todos → histórico", true]]),
        enunciado: "<p>Use a tabela <strong>Onde aparece · Risco · Como proteger</strong>.</p>",
        colunaItem: "Situação", colunaResp: "Onde aparece",
        categorias: [{ id: "F", rot: "📸 Dentro da foto" }, { id: "T", rot: "📍 Tempo real" }, { id: "H", rot: "🗺️ Histórico" }, { id: "C", rot: "🏷️ Check-in" }],
        itens: [{ t: "A foto mandada no grupo guarda o local onde foi tirada", c: "F" }, { t: "O mapa mostra para a família onde você está neste momento", c: "T" }, { t: "A lista de todos os lugares por onde o celular passou no mês", c: "H" }, { t: "“Na praça agora!” marcado no post", c: "C" }],
        explicacao: "Metadados da foto, tempo real, histórico e check-in." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada lugar e o seu risco",
        pares: [{ a: "📸 Dentro da foto", b: "Quem recebe o arquivo pode ver onde foi tirada" }, { a: "📍 Localização em tempo real", b: "Mostra onde você está agora" }, { a: "🗺️ Histórico de localização", b: "Mostra todos os lugares por onde passou" }, { a: "🏷️ Check-in num post", b: "Diz onde você está e que não está em casa" }],
        explicacao: "Cada lugar onde a localização aparece tem um risco." },
      { tipo: "classificar", titulo: "Protege ou expõe?",
        categorias: [{ id: "P", rot: "🛡️ Protege" }, { id: "E", rot: "⚠️ Expõe" }],
        itens: [{ t: "Desligar a localização da câmera", c: "P" }, { t: "Compartilhar o tempo real com desconhecidos", c: "E" }, { t: "Postar depois de sair do lugar", c: "P" }, { t: "Fazer check-in de casa", c: "E" }, { t: "Apagar o histórico de localização", c: "P" }],
        explicacao: "Câmera sem localização, postar depois e apagar o histórico protegem." },
      { tipo: "escolha", titulo: "Metadados e cookies",
        perguntas: [
          { p: "Metadados são:", opcoes: ["Informações escondidas dentro de um arquivo (data, aparelho, local)", "Músicas", "Senhas"], certo: 0 },
          { p: "Cookies são:", opcoes: ["Pequenos arquivos que os sites guardam no navegador para lembrar de você", "Biscoitos de verdade", "Fones de ouvido"], certo: 0 },
          { p: "O celular sabe onde você está pelo:", opcoes: ["GPS, Wi-Fi e antenas da operadora", "Só pelo carregador", "Teclado"], certo: 0 }],
        explicacao: "Metadados ficam dentro do arquivo; cookies ficam no navegador; o celular usa GPS, Wi-Fi e antenas." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O passeio da Bia",
        perguntas: [
          { p: "A Bia está na cachoeira com a família e quer postar uma foto. O mais seguro é:", opcoes: ["Postar depois de sair do lugar", "Fazer check-in agora", "Mostrar a localização em tempo real para todos"], certo: 0 },
          { p: "Por que o check-in na hora tem risco?", opcoes: ["Diz onde ela está e que não está em casa", "Gasta a bateria", "Deixa a foto feia"], certo: 0 },
          { p: "Com quem a Bia pode compartilhar a localização em tempo real?", opcoes: ["Só com a família", "Com qualquer seguidor", "Com desconhecidos do jogo"], certo: 0 }],
        explicacao: "Postar depois de sair; tempo real só com a família." }
    ],
    turbo: [
      { tipo: "completar", titulo: "🔴 Complete: a localização",
        enunciado: "<p>Complete cada espaço com a palavra certa. Todas estão no 🧠 Resumo da Aula.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        texto: "O celular sabe onde você está pelo **GPS**. A localização pode ficar nos **metadados** das fotos. A localização em tempo real, só com a **família**. Nos sites, os **cookies** rastreiam o que você vê.",
        explicacao: "GPS, metadados, família e cookies." }
    ],
    vf: [
      { v: true, why: "Os metadados guardam o local." },
      { v: true, why: "É a definição." },
      { v: true, why: "Por isso é melhor postar depois." },
      { v: true, why: "A foto não guarda o local." },
      { v: false, corrigir: { trecho: "são biscoitos que o computador come", opcoes: ["são biscoitos que o computador come", "são pequenos arquivos que os sites guardam no navegador"], certo: "são pequenos arquivos que os sites guardam no navegador" }, why: "Cookies lembram de você." }
    ]
  },

  m8: {
    pratica: [
      { tipo: "classificar", modo: "tabela", titulo: "Mão na massa: qual é o golpe?",
        robo: BIT("🔎 A pergunta", [["Diz ser <b>atendente</b> de uma empresa? Falsa central.", "atendente → falsa central"], ["Fala de <b>pacote</b> e taxa? Falsa entrega.", "pacote → falsa entrega", true]]),
        enunciado: "<p>Use a tabela <strong>Golpe · Como é</strong>.</p>",
        colunaItem: "Mensagem", colunaResp: "Golpe",
        categorias: [{ id: "C", rot: "📞 Falsa central" }, { id: "E", rot: "📦 Falsa entrega" }, { id: "D", rot: "🔑 Confirme os dados" }],
        itens: [{ t: "“Aqui é do banco, temos o seu CPF, confirme o código”", c: "C" }, { t: "“Seu pacote está retido, pague a taxa neste link”", c: "E" }, { t: "“Atualize o cadastro para não perder a conta”", c: "D" }],
        explicacao: "Atendente = falsa central; pacote e taxa = falsa entrega; atualizar cadastro = confirme os dados." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Houve vazamento: o que fazer, em ordem?",
        itens: ["Trocar a senha daquele serviço", "Trocar também onde a senha se repetia", "Ativar as duas etapas", "Desconfiar de contatos que já sabem tudo sobre você"],
        explicacao: "Trocar a senha → trocar onde se repetia → duas etapas → desconfiar." },
      { tipo: "ligar", titulo: "Cada termo e o seu significado",
        pares: [{ a: "Vazamento de dados", b: "Quando dados de muitas pessoas escapam e caem com criminosos" }, { a: "Confiável", b: "Que merece confiança" }, { a: "Falsa central", b: "Golpista que finge ser atendente de uma empresa" }, { a: "Taxa", b: "Valor cobrado; nos golpes, é a desculpa para pedir dinheiro" }],
        explicacao: "Vazamento, confiável, falsa central e taxa." },
      { tipo: "escolha", titulo: "A regra de ouro",
        robo: BIT("📞 Outra ligação", [["“Olá, Pedro, CPF terminado em 45…” Ele sabe o meu CPF!", "sabe o CPF"], ["Saber os dados não prova que é de confiança.", "regra de ouro", true]]),
        perguntas: [
          { p: "A pessoa sabe o seu nome e o seu CPF. Isso prova que ela é de confiança?", opcoes: ["Não: saber os seus dados não prova que a pessoa é de confiança", "Sim, com certeza", "Só se falar educado"], certo: 0 },
          { p: "Empresa séria:", opcoes: ["Não pede senha nem código", "Pede a senha por telefone", "Pede o código por mensagem"], certo: 0 }],
        explicacao: "Saber os seus dados não prova confiança. Empresa séria não pede senha nem código." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 A ligação que sabia tudo",
        perguntas: [
          { p: "Ligam para a mãe do Caio: “Somos do banco. A senhora é Rosa, CPF terminado em 12. Diga o código que chegou por SMS”. O que é?", opcoes: ["Golpe da falsa central", "Atendimento normal", "Falsa entrega"], certo: 0 },
          { p: "O que a mãe do Caio deve fazer?", opcoes: ["Desligar e ligar para o número oficial", "Passar o código", "Passar a senha também"], certo: 0 },
          { p: "Como o golpista sabia o CPF?", opcoes: ["Provavelmente de um vazamento de dados", "Porque é do banco de verdade", "Adivinhou"], certo: 0 }],
        explicacao: "Falsa central com dados vazados. Desligue e ligue você mesmo para o número oficial." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do vazamento",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia o 🧠 Resumo da Aula."],
        palavras: ["VAZAMENTO", "GOLPE", "TAXA", "CODIGO", "SENHA"],
        pistas: ["Dados de muitas pessoas escapam", "Engano para tirar vantagem", "Desculpa da falsa entrega para pedir dinheiro", "Empresa séria não pede nem a senha nem o… (sem acento)", "Troque depois de um vazamento"], tam: 10,
        explicacao: "Vazamento, golpe, taxa, código e senha." }
    ],
    vf: [
      { v: true, why: "É a definição." },
      { v: false, corrigir: { trecho: "é com certeza de confiança", opcoes: ["é com certeza de confiança", "não é, só por isso, de confiança"], certo: "não é, só por isso, de confiança" }, why: "Saber os seus dados não prova confiança." },
      { v: true, why: "Nunca pede." },
      { v: true, why: "É o primeiro passo." },
      { v: true, why: "É como o golpe funciona." }
    ]
  },

  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "classificar", de: "m1", titulo: "M1 · Dado pessoal?", categorias: [{ id: "S", rot: "Dado pessoal" }, { id: "N", rot: "Não é" }], itens: [{ t: "CPF", c: "S" }, { t: "Localização", c: "S" }, { t: "A cor do céu", c: "N" }], explicacao: "CPF e localização identificam." },
      { tipo: "relembre", de: "m2" },
      { tipo: "escolha", de: "m2", titulo: "M2 · Sensível", perguntas: [{ p: "Dado de saúde é:", opcoes: ["Dado sensível", "Dado comum"], certo: 0 }], explicacao: "Sensível." },
      { tipo: "relembre", de: "m3" },
      { tipo: "ordenar", de: "m3", titulo: "M3 · O alerta", itens: ["Trocar a senha", "Sair de todos os aparelhos", "Ativar as duas etapas", "Avisar um adulto"], explicacao: "Senha, aparelhos, duas etapas, adulto." },
      { tipo: "relembre", de: "m4" },
      { tipo: "escolha", de: "m4", titulo: "M4 · Bloquear", perguntas: [{ p: "Impedir que um desconhecido mande mensagem:", opcoes: ["Bloquear", "Silenciar"], certo: 0 }], explicacao: "Bloquear." },
      { tipo: "relembre", de: "m5" },
      { tipo: "ligar", de: "m5", titulo: "M5 · O plano", pares: [{ a: "Público", b: "Para quem?" }, { a: "Formato", b: "Como vai ser?" }], explicacao: "Público e formato." },
      { tipo: "relembre", de: "m6" },
      { tipo: "escolha", de: "m6", titulo: "M6 · Rubrica", perguntas: [{ p: "Rubrica é:", opcoes: ["A lista do que vai ser avaliado", "Um slide"], certo: 0 }], explicacao: "Os critérios." },
      { tipo: "relembre", de: "m7" },
      { tipo: "escolha", de: "m7", titulo: "M7 · Check-in", perguntas: [{ p: "O mais seguro é postar:", opcoes: ["Depois de sair do lugar", "Na hora, com check-in"], certo: 0 }], explicacao: "Depois." },
      { tipo: "relembre", de: "m8" },
      { tipo: "escolha", de: "m8", titulo: "M8 · Regra de ouro", perguntas: [{ p: "Saber o seu CPF prova que a pessoa é de confiança?", opcoes: ["Não", "Sim"], certo: 0 }], explicacao: "Não prova." }
    ],
    desafio: [
      { tipo: "mensagens", titulo: "🟡 Simulado: protege ou expõe?",
        enunciado: "<p>Para cada atitude, decida.</p>",
        app: "🔐 Privacidade", botoes: [{ id: "P", rot: "🛡️ Protege" }, { id: "E", rot: "⚠️ Expõe" }],
        itens: [{ de: "", t: "Conta privada e localização desligada", c: "P" }, { de: "", t: "Passar o código para quem diz ser do banco", c: "E" }, { de: "", t: "Senha diferente em cada conta importante", c: "P" },
          { de: "", t: "Informar dados de saúde num jogo", c: "E" }, { de: "", t: "Sair da conta no computador da escola", c: "P" }],
        okMsg: "Você está pronto para a prova! 🔐",
        explicacao: "Conta privada, senhas diferentes e sair da conta protegem; passar código e informar dados de saúde expõem." }
    ],
    turbo: [
      { tipo: "caca", titulo: "🔴 Caça-palavras do bimestre",
        enunciado: "<p>Leia cada pista e ache a palavra no quadro.</p>", dicas: ["Releia os 🧠 Resumos da Aula."],
        palavras: ["PRIVACIDADE", "LGPD", "SENSIVEL", "BLOQUEAR", "RUBRICA", "VAZAMENTO"],
        pistas: ["O direito de decidir o que os outros sabem sobre você", "Lei que protege os dados pessoais no Brasil", "Dado mais delicado, como saúde (sem acento)", "Impedir que uma pessoa fale com você", "Lista do que vai ser avaliado", "Dados de muitas pessoas escapam"], tam: 12,
        explicacao: "As palavras principais do bimestre." }
    ]
  }
});

/* ===== 📝 ATIVIDADE DE RECUPERAÇÃO (rc) ===== */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-4bim"]; if (!A) return;
  const OK = ["classificar", "ligar", "ordenar", "tabela", "sinais", "rota", "memoria"];
  const pega = mid => { const x = ((A[mid] || {}).basico || []).find(a => OK.includes(a.tipo));
    return x ? Object.assign({}, x, { de: mid, titulo: mid.toUpperCase() + " · " + String(x.titulo || "") }) : null; };
  const Q = (mid, titulo, perguntas) => ({ tipo: "escolha", de: mid, titulo: mid.toUpperCase() + " · " + titulo, perguntas, explicacao: perguntas.map(q => q.p + " → <strong>" + q.opcoes[q.certo] + "</strong>").join(" · ") });
  A.rc = { basico: [
    Q("m1", "Dados pessoais", [{ p: "Dado pessoal é:", opcoes: ["Informação que identifica uma pessoa", "Qualquer notícia", "Um tipo de jogo"], certo: 0 }, { p: "Antes de informar um dado, pergunte:", opcoes: ["Quem está pedindo? Para quê? Precisa mesmo?", "Qual é a cor?", "Nada"], certo: 0 }]), pega("m1"),
    Q("m2", "Dados sensíveis e LGPD", [{ p: "A digital usada para desbloquear o celular é:", opcoes: ["Biometria", "Senha", "Cookie"], certo: 0 }, { p: "Quem fiscaliza a LGPD?", opcoes: ["A ANPD", "A escola", "O jogo"], certo: 0 }]), pega("m2"),
    Q("m3", "Segurança das contas", [{ p: "Mesmo com a senha, ninguém entra sem o código. Isso é a:", opcoes: ["Verificação em duas etapas", "Conta privada", "Rubrica"], certo: 0 }, { p: "No computador da escola, no fim da aula:", opcoes: ["Saio da conta", "Deixo a conta aberta", "Anoto a senha no quadro"], certo: 0 }]), pega("m3"),
    Q("m4", "Configurar a privacidade", [{ p: "Só as pessoas aceitas veem os posts na:", opcoes: ["Conta privada", "Conta pública", "Busca pelo telefone"], certo: 0 }, { p: "Parar de ver os posts de alguém, sem que a pessoa saiba, é:", opcoes: ["Silenciar", "Bloquear", "Marcar"], certo: 0 }]), pega("m4"),
    Q("m5", "Projeto: planejar", [{ p: "Para quem o guia é feito é o:", opcoes: ["Público", "Formato", "Tema"], certo: 0 }, { p: "No guia, use:", opcoes: ["Exemplos inventados", "Dados reais dos colegas", "Senhas verdadeiras"], certo: 0 }]), pega("m5"),
    Q("m6", "Projeto: apresentar", [{ p: "A lista do que vai ser avaliado é a:", opcoes: ["Rubrica", "Fonte", "Taxa"], certo: 0 }, { p: "Um bom feedback tem:", opcoes: ["Algo bom e uma sugestão", "Só críticas", "Nada"], certo: 0 }]), pega("m6"),
    Q("m7", "Localização e rastreamento", [{ p: "Informações escondidas dentro de um arquivo (data, aparelho, local) são os:", opcoes: ["Metadados", "Cookies", "Check-ins"], certo: 0 }, { p: "O mais seguro é postar a foto do passeio:", opcoes: ["Depois de sair do lugar", "Com check-in na hora", "Com a localização em tempo real"], certo: 0 }]), pega("m7"),
    Q("m8", "Golpes com dados vazados", [{ p: "Golpista que finge ser atendente de uma empresa é a:", opcoes: ["Falsa central", "Falsa entrega", "Rubrica"], certo: 0 }, { p: "Empresa séria:", opcoes: ["Não pede senha nem código", "Pede o código", "Pede a senha"], certo: 0 }]), pega("m8")
  ].filter(Boolean) };
})();
})();

/* ============================================================
   🌀 MODELO EM ESPIRAL (21/11/2026, levado ao ano todo — Etapa 4: 4º bimestre de 2027)
   Por missão: ❓ gancho, 🛠️ "Onde eu uso isso?" prático (jogo de situação real + 3 perguntas),
   "O que você já sabe?" na M1 e ⏱️ +25% de tempo com 2 jogos no 🟡 Desafio e no 🔴 Turbo.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-2027-4bim"]; if (!A) return;
  const mais = (mid, niv, ...ts) => { A[mid][niv] = (A[mid][niv] || []).concat(ts.map(t => Object.assign(t, { maisTempo: "⏱️ +25%" }))); };
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why, de]) => ({ de: de || "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t, dica]) => dica ? { ic, t, dica } : { ic, t }), okMsg, explicacao: expl });
  const mem = (titulo, pares, expl) => ({ tipo: "memoria", titulo, enunciado: "<p>Vire duas cartas e ache os pares que combinam.</p>", pares: pares.map(([a, b]) => ({ a, b })), porRodada: 3, explicacao: expl });
  const sin = (titulo, enun, certos, errados, expl) => ({ tipo: "sinais", titulo, enunciado: `<p>${enun}</p>`, opcoes: [...certos.map(t => ({ t, certo: true })), ...errados.map(([t, why]) => ({ t, certo: false, why }))], explicacao: expl });
  const LEMBRA = "Começou o 4º bimestre! Responda o que você já sabe. Se não souber, tudo bem: chute com calma, e o portal mostra onde está a resposta. 😉";
  /* ---------- M1 · dados pessoais ---------- */
  A.m1.gancho = { html: "<p>🎁 Um site prometeu um tênis de graça. Para participar, era só preencher: nome completo, endereço, data de nascimento, CPF e uma selfie.</p><p>🤔 Por que um sorteio precisaria de tudo isso? O que alguém pode fazer com esses dados?</p>" };
  A.m1.lembra = [perg("🔍 O que você já sabe?", LEMBRA,
    ["Quem engana as pessoas para pegar dinheiro ou dados é um…", ["Golpista", "Professor", "Provedor"], "É um <b>golpista</b>."],
    ["Mostrar onde você está agora é a…", ["Localização em tempo real", "Senha", "Bateria"], "É a <b>localização em tempo real</b>."],
    ["Antes de postar a foto de um colega, você…", ["Pede permissão", "Posta sem perguntar", "Muda o nome dele"], "<b>Peça permissão</b>."])];
  A.m1.aplicar = [
    msg("🛠️ Na vida real: é dado pessoal?", "🎁 Formulário do “tênis grátis”", [["S", "📇 Dado pessoal"], ["N", "🙂 Não identifica sozinho"]],
      "Dado pessoal é o que identifica você. Cada informação é dado pessoal?",
      [["Nome completo", "S", "Identifica você."], ["CPF", "S", "Documento: identifica você."], ["“Gosto de futebol”", "N", "Sozinho, não diz quem você é."], ["A sua selfie", "S", "A foto do rosto identifica."],
        ["“Minha cor favorita é azul”", "N", "Sozinha, não identifica."]],
      "Detetive de dados! 📇", "Nome, endereço, telefone, nascimento, documentos, foto do rosto e localização são dados pessoais."),
    VIDA(
      ["Antes de informar um dado, pergunte…", ["Quem está pedindo? Para quê? Precisa mesmo?", "Qual é a cor do site?", "Quantas curtidas tem?"], "<b>Quem? Para quê? Precisa mesmo?</b>"],
      ["“Estuda na escola tal + 8º ano + joga no time do bairro + mora perto da praça”:", ["Juntos, esses dados podem identificar você", "Não dizem nada", "São só gostos"], "<b>Juntos</b>, revelam mais."],
      ["Com os seus dados, um golpista pode…", ["Fingir ser você", "Te dar um tênis", "Melhorar a sua nota"], "Pode <b>fingir ser você</b> e criar golpes convincentes."])
  ];
  mais("m1", "desafio",
    sin("🕵️ Juntos, revelam mais", "Marque só as informações que, <b>juntas</b>, ajudariam a descobrir quem é o aluno e onde ele está.",
      ["O nome da escola", "A turma (8º ano)", "O time do bairro em que joga", "“Moro perto da praça”"],
      [["“Gosto de pizza”", "Não ajuda a achar a pessoa."], ["“Meu filme favorito é de aventura”", "Não ajuda a achar a pessoa."]],
      "Sozinho, um dado diz pouco; juntos, podem identificar você."));
  mais("m1", "turbo",
    mem("🧩 Jogo da memória dos dados", [["🧑 Nome completo", "Ana Souza Lima"], ["🏠 Endereço", "Rua das Flores, 10"], ["📇 Documentos", "CPF, RG"],
      ["📸 Foto do rosto", "A sua selfie"], ["📍 Localização", "Onde você está agora"], ["Privacidade", "Escolher quem sabe sobre você"]],
      "Proteger os dados é proteger você."));

  /* ---------- M2 · dados sensíveis e LGPD ---------- */
  A.m2.gancho = { html: "<p>🏥 A Bia descobriu que um aplicativo de jogo guardava se ela tomava algum remédio e qual era a religião da família dela. Ela nunca entendeu para que o jogo precisava disso.</p><p>🤔 Esses dados são mais delicados que o nome? A Bia tem algum direito?</p>" };
  A.m2.aplicar = [
    msg("🛠️ Na vida real: qual direito da LGPD?", "⚖️ Direitos da LGPD", [["S", "👀 Saber"], ["C", "✏️ Corrigir"], ["A", "🗑️ Apagar"], ["R", "↩️ Retirar o consentimento"]],
      "Qual direito a Bia usa em cada situação?",
      [["Quer descobrir quais dados o jogo tem sobre ela", "S", "Direito de saber."], ["A data de nascimento está errada no cadastro", "C", "Direito de corrigir."],
        ["Quer excluir os dados do remédio, que o jogo não precisa", "A", "Direito de apagar."], ["Desistiu da autorização que deu ao jogo", "R", "Retirar o consentimento."]],
      "Você conhece os seus direitos! ⚖️", "A LGPD dá direitos: saber, corrigir, apagar e retirar o consentimento."),
    VIDA(
      ["Um aplicativo pediu um dado sensível que não precisa. Você…", ["Não informa e conversa com um adulto", "Informa logo", "Inventa e manda"], "<b>Não informa</b> e conversa com um adulto."],
      ["Quem fiscaliza a LGPD é a…", ["ANPD (Autoridade Nacional de Proteção de Dados)", "Escola", "Operadora do celular"], "É a <b>ANPD</b>."],
      ["Se dados sensíveis forem expostos, podem levar a…", ["Discriminação (tratar alguém de forma injusta)", "Um prêmio", "Mais bateria"], "Podem levar a <b>discriminação</b>."])
  ];
  mais("m2", "desafio",
    msg("🔒 Pessoal ou sensível?", "🗂️ Dados", [["P", "📇 Dado pessoal"], ["S", "🔴 Dado sensível"]],
      "Use as duas tabelas: dado pessoal comum ou dado sensível?",
      [["O remédio que a pessoa toma", "S", "Saúde: sensível."], ["O telefone", "P", "Pessoal."], ["A digital usada para desbloquear", "S", "Biometria: sensível."], ["O endereço", "P", "Pessoal."], ["A religião", "S", "Sensível."]],
      "Classificação certa! 🔒", "Dados sensíveis são ainda mais delicados: saúde, religião, opinião política, origem racial ou étnica, biometria e dado genético."));
  mais("m2", "turbo",
    mem("🧩 Jogo da memória da LGPD", [["LGPD", "Lei nº 13.709/2018"], ["ANPD", "Fiscaliza a LGPD"], ["Biometria", "A digital, o rosto"],
      ["Dado genético", "O DNA"], ["Consentimento", "A autorização que você dá"], ["Discriminação", "Tratar alguém de forma injusta"]],
      "Os seus dados têm proteção da lei."));

  /* ---------- M3 · segurança das contas ---------- */
  A.m3.gancho = { html: "<p>🔔 Às 3 da manhã, o e-mail do Davi recebeu: <b>“Novo acesso à sua conta de outro aparelho”</b>. Ele estava dormindo.</p><p>🤔 Quem entrou? O que ele deve fazer primeiro?</p>" };
  A.m3.aplicar = [
    rota("🛠️ Na vida real: o alerta do Davi", "Coloque <b>na ordem</b> o que fazer quando chega um alerta de acesso que não foi você.",
      [["🔑", "Trocar a senha"], ["🚪", "Sair de todos os aparelhos"], ["📲", "Ativar as duas etapas"], ["🧑‍🏫", "Avisar um adulto"]],
      "Conta protegida! 🔒", "Trocar a senha, sair de todos os aparelhos, ativar as duas etapas e avisar um adulto."),
    VIDA(
      ["Você usou o computador da biblioteca para entrar no seu e-mail. No fim…", ["Sai da conta", "Deixa aberto", "Anota a senha na mesa"], "<b>Saia da conta</b>: o próximo não entra."],
      ["Com a verificação em duas etapas, quem tem só a senha…", ["Não entra sem o código", "Entra normalmente", "Apaga a conta"], "Ninguém entra <b>sem o código</b>."],
      ["O melhor amigo pediu a sua senha. Você…", ["Não passa: nem para o melhor amigo", "Passa, é amigo", "Passa metade"], "<b>Nunca passe</b> senha ou código."])
  ];
  mais("m3", "desafio",
    msg("🛡️ Qual hábito protege?", "🔐 Hábitos seguros", [["F", "🔑 Senha forte e diferente"], ["D", "📲 Duas etapas"], ["S", "🚪 Sair da conta"], ["R", "📧 Recuperação atualizada"], ["A", "🔔 Ler os alertas"]],
      "Qual hábito resolve cada risco?",
      [["Uma senha vazou e era igual em todas as contas", "F", "Senha diferente em cada conta importante."], ["Alguém tem a senha, mas não tem o seu celular", "D", "Sem o código não entra."],
        ["O próximo aluno usaria a sua conta no computador da escola", "S", "Saia da conta."], ["Você esqueceu a senha e quer voltar", "R", "E-mail e telefone de recuperação."], ["Um acesso estranho de outro aparelho", "A", "Pode ser invasão."]],
      "Contas blindadas! 🛡️", "Senha forte e diferente, duas etapas, sair da conta, recuperação atualizada e alertas."));
  mais("m3", "turbo",
    mem("🧩 Jogo da memória das contas", [["Login", "Entrar na conta"], ["Invasão", "Alguém entra sem permissão"], ["Alerta de login", "Aviso de novo acesso"],
      ["Recuperação de conta", "Voltar a entrar se perder o acesso"], ["Duas etapas", "Senha + código"], ["Computador compartilhado", "Lembre de sair da conta"]],
      "Bons hábitos protegem as suas contas."));

  /* ---------- M4 · configurar a privacidade ---------- */
  A.m4.gancho = { html: "<p>📱 Um desconhecido mandou mensagem para a Lia: “Vi que você está na pracinha agora!”. Ela nunca tinha falado com ele.</p><p>🤔 Como ele sabia? Que configurações da conta deixaram isso acontecer?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: protegida ou exposta?", "⚙️ Configurações da Lia", [["P", "🔒 Protegida"], ["E", "⚠️ Exposta"]],
      "Use a tabela da opção mais protegida.",
      [["Conta pública: todo mundo vê os posts", "E", "O mais protegido é a conta privada."], ["Localização nos posts: desligada", "P", "Protegida."], ["Qualquer pessoa pode mandar mensagem", "E", "O mais protegido é só amigos."],
        ["Aparecer em buscas pelo telefone: desligado", "P", "Protegida."], ["Mostrar quando está on-line: ligado", "E", "O mais protegido é desligado."]],
      "Privacidade ajustada! ⚙️", "Conta privada, localização desligada, mensagens só de amigos, sem busca pelo telefone e sem mostrar on-line."),
    VIDA(
      ["Um colega posta muitas coisas que você não quer ver, mas não faz nada de mal. Você pode…", ["Silenciar: param de aparecer os posts dele", "Chamar a polícia", "Apagar o seu celular"], "<b>Silenciar</b> só para de mostrar os posts."],
      ["Um desconhecido manda mensagens insistentes. Você pode…", ["Bloquear: ele não vê você nem manda mensagem", "Silenciar e continuar respondendo", "Mandar o seu endereço"], "<b>Bloquear</b> impede de ver e mandar mensagem."],
      ["De quanto em quanto tempo revisar as configurações?", ["Uma vez por mês", "Nunca", "Só quando trocar de celular"], "Os aplicativos mudam nas atualizações: <b>uma vez por mês</b>."])
  ];
  mais("m4", "desafio",
    msg("🚫 Bloquear ou silenciar?", "👥 Contatos", [["B", "🚫 Bloquear"], ["S", "🔇 Silenciar"]],
      "Bloquear impede a pessoa de ver você e mandar mensagem; silenciar só para de mostrar os posts dela.",
      [["Um desconhecido que pede fotos suas", "B", "Bloqueie."], ["A tia que posta 30 receitas por dia", "S", "Silencie: ela não faz mal."], ["Um perfil que ofende você", "B", "Bloqueie."], ["O primo que só posta jogos que você não curte", "S", "Silencie."]],
      "Escolhas certas! 🚫", "Bloquear para quem incomoda ou ameaça; silenciar para quem só não interessa."));
  mais("m4", "turbo",
    sin("🔒 A conta mais protegida", "Marque só as opções <b>mais protegidas</b>.",
      ["Conta privada", "Marcar você: só quem você segue ou ninguém", "Localização nos posts desligada", "On-line desligado"],
      [["Qualquer pessoa pode marcar você", "O mais protegido é só quem você segue ou ninguém."], ["Aparecer nas buscas pelo telefone", "O mais protegido é desligado."]],
      "Você escolhe quem vê o quê."));

  /* ---------- M5 · guia: planejar ---------- */
  A.m5.gancho = { html: "<p>👵 A avó do Pedro ganhou um celular e já respondeu a três mensagens estranhas pedindo código. Ela diz que “ninguém explica direito”.</p><p>🤔 Como explicar privacidade para os avós? E para o 6º ano, seria do mesmo jeito?</p>" };
  A.m5.aplicar = [
    msg("🛠️ Na vida real: qual parte do plano?", "📋 Plano do guia", [["T", "🎯 Tema"], ["P", "👥 Público"], ["F", "🖼️ Formato"], ["K", "🧩 Tarefas"], ["N", "📚 Fontes"]],
      "Cada decisão da equipe é qual parte do plano?",
      [["Configurar a conta da rede social", "T", "É o assunto: tema."], ["Os avós da turma", "P", "Para quem: público."], ["Cartaz digital", "F", "Como vai ser: formato."], ["Ana pesquisa, Beto desenha", "K", "Quem faz o quê: tarefas."], ["A apostila e sites oficiais", "N", "De onde vem: fontes."]],
      "Plano completo! 📋", "Tema, público, formato, tarefas e fontes."),
    VIDA(
      ["Para os avós, o guia deve ter…", ["Frases curtas e letra grande", "Letra miudinha", "Só gírias"], "<b>Frases curtas e letra grande</b>."],
      ["No guia, como mostrar um exemplo de dado?", ["Com um exemplo inventado", "Com o CPF real de um colega", "Com o endereço da escola"], "<b>Nenhum dado pessoal real</b>: use exemplo inventado."],
      ["Para o 6º ano, uma boa ideia é usar…", ["Exemplos de jogos", "Palavras difíceis", "Nada de exemplo"], "<b>Exemplos de jogos</b>."])
  ];
  mais("m5", "desafio",
    sin("✅ Regras do guia", "Marque só o que segue as <b>regras do projeto</b>.",
      ["Usar exemplos inventados", "Imagens próprias ou com crédito", "Dizer de onde vem cada informação"],
      [["Colocar o telefone real da avó como exemplo", "Nenhum dado pessoal real."], ["Usar uma imagem sem crédito", "Imagens com crédito."]],
      "Sem dado pessoal real e com crédito nas imagens."));
  mais("m5", "turbo",
    msg("🗣️ Linguagem para o público", "👥 Públicos", [["V", "👵 Avós"], ["S", "🧒 6º ano"]],
      "Para quem cada jeito de escrever combina melhor?",
      [["Letra grande e frases curtas", "V", "Para os avós."], ["“É como o chat do seu jogo”", "S", "Exemplos de jogos para o 6º ano."], ["“Igual ao jogo, em que só os amigos veem você on-line”", "S", "Exemplo de jogo."], ["Um passo por vez, com letra grande", "V", "Para os avós."]],
      "Falou a língua do público! 🗣️", "Cada público tem a sua linguagem."));

  /* ---------- M6 · guia: apresentar ---------- */
  A.m6.gancho = { html: "<p>🖼️ O cartaz de uma equipe tinha 12 dicas num parágrafo só, sem nenhuma imagem. Ninguém conseguiu ler até o fim.</p><p>🤔 Como deixar o guia fácil de lembrar e com vontade de ler?</p>" };
  A.m6.aplicar = [
    msg("🛠️ Na vida real: qual critério da rubrica?", "📏 Rubrica do guia", [["C", "✅ Correto"], ["P", "👥 Para o público"], ["S", "🔒 Seguro"], ["A", "🎨 Atraente"], ["E", "🤝 Equipe"]],
      "Cada comentário fala de qual critério?",
      [["“A dica sobre duas etapas está certa”", "C", "As dicas estão certas?"], ["“Os avós entenderiam”", "P", "Para o público."], ["“Não aparece nenhum dado real”", "S", "Seguro."],
        ["“Dá vontade de ler!”", "A", "Atraente."], ["“Todos falaram na apresentação”", "E", "Equipe."]],
      "Avaliador justo! 📏", "Correto, para o público, seguro, atraente e equipe."),
    VIDA(
      ["O cartaz tem 12 dicas num parágrafo só. A dica é…", ["Uma dica por parte do cartaz", "Mais um parágrafo", "Tirar as imagens"], "<b>Uma dica por slide ou por parte</b>."],
      ["Um bom feedback é…", ["“As imagens ficaram ótimas! Sugiro aumentar a letra.”", "“Ficou ruim.”", "“Nem li.”"], "<b>Algo bom + uma sugestão</b>, com respeito."],
      ["Por que colocar uma imagem em cada dica?", ["Ajuda a entender", "Para gastar tinta", "Não serve para nada"], "<b>Ajuda a entender</b>."])
  ];
  mais("m6", "desafio",
    sin("🎤 Dicas para apresentar", "Marque só as dicas certas para <b>apresentar o guia</b>.",
      ["Uma dica por slide", "Imagem ou desenho em cada dica", "Exemplo da vida real (inventado)", "Respeitar o tempo"],
      [["Ler tudo de costas para a turma, sem parar", "Fica difícil de acompanhar."], ["Passar do tempo para falar mais", "Todas as equipes precisam apresentar."]],
      "Uma dica por slide, imagem, exemplo inventado e tempo respeitado."));
  mais("m6", "turbo",
    mem("🧩 Jogo da memória da rubrica", [["✅ Correto", "As dicas estão certas?"], ["👥 Para o público", "O público entenderia?"], ["🔒 Seguro", "Nenhum dado pessoal real?"],
      ["🎨 Atraente", "Dá vontade de ler?"], ["🤝 Equipe", "Todos participaram?"], ["Feedback", "Algo bom + uma sugestão"]],
      "A rubrica mostra o que é um bom guia."));

  /* ---------- M7 · localização ---------- */
  A.m7.gancho = { html: "<p>📸 O Gabriel mandou uma foto do quarto novo para um “amigo” do jogo on-line. No dia seguinte, o tal amigo disse o nome da rua dele.</p><p>🤔 A foto não mostrava a rua. Como ele descobriu?</p>" };
  A.m7.aplicar = [
    msg("🛠️ Na vida real: como proteger?", "📍 Localização", [["C", "📷 Desligar a localização da câmera"], ["F", "👨‍👩‍👧 Compartilhar só com a família"], ["H", "🗺️ Desligar ou apagar o histórico"], ["D", "🏷️ Postar depois de sair"]],
      "Use a tabela do 💡 Para começar: qual proteção combina com cada risco?",
      [["A foto guarda onde foi tirada (nos metadados)", "C", "Desligue a localização da câmera."], ["Todo mundo vê onde você está agora", "F", "Compartilhe só com a família."],
        ["O celular guarda todos os lugares por onde você passou", "H", "Desligue ou apague o histórico."], ["O check-in diz que você está na praia e não em casa", "D", "Poste depois de sair do lugar."]],
      "Localização sob controle! 📍", "Câmera sem localização, tempo real só com a família, histórico apagado e post depois de sair."),
    VIDA(
      ["Como o “amigo” do jogo descobriu a rua do Gabriel?", ["Pela localização guardada nos metadados da foto", "Por mágica", "Pela cor do quarto"], "A localização fica <b>dentro da foto</b>, nos metadados."],
      ["O celular sabe onde você está pelo…", ["GPS, Wi-Fi e antenas da operadora", "Teclado", "Fone de ouvido"], "<b>GPS, Wi-Fi e antenas</b>."],
      ["Os cookies e outros rastreadores dos sites registram…", ["O que você vê, para mostrar propaganda", "A sua temperatura", "Nada"], "Registram <b>o que você vê</b>."])
  ];
  mais("m7", "desafio",
    sin("📍 O que revela onde você está?", "Marque só o que pode <b>revelar onde você está</b>.",
      ["Foto com localização nos metadados", "Localização em tempo real ligada para todos", "Check-in num post", "Histórico de localização"],
      [["Uma foto sem localização do céu azul", "Não guarda o lugar."], ["Um texto “bom dia!”", "Não revela o lugar."]],
      "Metadados da foto, tempo real, check-in e histórico revelam onde você está."));
  mais("m7", "turbo",
    mem("🧩 Jogo da memória do rastreamento", [["GPS", "Mostra onde o celular está"], ["Metadados", "Informações escondidas no arquivo"], ["Check-in", "Diz onde você está no post"],
      ["Histórico de localização", "Todos os lugares por onde passou"], ["Cookies", "Registram o que você vê nos sites"], ["Rastreamento", "Seguir o que você faz"]],
      "Você decide quem sabe onde você está."));

  /* ---------- M8 · golpes com dados vazados ---------- */
  A.m8.gancho = { html: "<p>📞 A mãe da Carol recebeu uma ligação: “Senhora Maria, CPF terminado em 45, aqui é do banco. Confirme o código que chegou por SMS”. Ela pensou: “se sabem o meu CPF, devem ser do banco”.</p><p>🤔 Saber o CPF prova que é o banco? Como eles conseguiram esses dados?</p>" };
  A.m8.aplicar = [
    msg("🛠️ Na vida real: qual golpe é?", "📲 Contatos suspeitos", [["C", "📞 Falsa central"], ["E", "📦 Falsa entrega"], ["D", "🔑 Confirme os dados"]],
      "Use a tabela dos golpes.",
      [["“Aqui é do banco, temos o seu CPF, confirme o código”", "C", "Falsa central."], ["“Seu pacote está retido, pague a taxa neste link”", "E", "Falsa entrega."], ["“Atualize o cadastro para não perder a conta”", "D", "Confirme os dados."],
        ["“Central de segurança: diga o código que chegou por SMS”", "C", "Falsa central."]],
      "Nenhum golpe passou! 🛡️", "Saber os seus dados não prova que a pessoa é de confiança."),
    VIDA(
      ["A ligação “do banco” pediu o código. O certo é…", ["Desligar e ligar para o número oficial do banco", "Passar o código rapidinho", "Passar só metade"], "<b>Desligue</b> e ligue para o número oficial."],
      ["Houve um vazamento de dados de um site que você usa. Você…", ["Troca a senha e ativa as duas etapas", "Não faz nada", "Publica a senha"], "<b>Troque a senha</b> e ative as duas etapas."],
      ["Empresa séria pede senha ou código por telefone?", ["Não, nunca", "Sim, sempre", "Só no fim de semana"], "Empresa séria <b>não pede</b> senha nem código."])
  ];
  mais("m8", "desafio",
    sin("🚨 Sinais de golpe", "Marque só os <b>sinais de golpe</b>.",
      ["Pedir a senha ou o código", "Pedir para pagar uma taxa por um link", "Ameaçar: “para não perder a conta”"],
      [["Saber o seu nome e o seu CPF prova que é confiável", "Não prova: os dados podem ter vazado."], ["Mandar você ligar para o número oficial", "Isso é o certo."]],
      "Saber os seus dados não prova nada: desconfie de quem pede senha, código ou taxa."));
  mais("m8", "turbo",
    mem("🧩 Jogo da memória dos golpes", [["Vazamento de dados", "Dados escapam e caem nas mãos de criminosos"], ["Falsa central", "Finge ser o banco"], ["Falsa entrega", "Pede taxa pelo pacote"],
      ["Número oficial", "Onde confirmar"], ["Duas etapas", "Protege mesmo se a senha vazar"], ["Regra de ouro", "Saber os dados não prova confiança"]],
      "Na dúvida: desligar e ligar para o número oficial."));
})();

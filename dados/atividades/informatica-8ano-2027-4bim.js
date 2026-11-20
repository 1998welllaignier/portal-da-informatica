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
        categorias: [{ id: "S", rot: "🪪 É dado pessoal" }, { id: "N", rot: "🌤️ Não é" }],
        itens: [{ t: "Ana Souza Lima", c: "S" }, { t: "Rua das Flores, 10", c: "S" }, { t: "A previsão do tempo de amanhã", c: "N" }, { t: "A sua selfie", c: "S" }, { t: "Onde você está agora", c: "S" }, { t: "A capital do Brasil", c: "N" }],
        explicacao: "Nome, endereço, foto e localização identificam a pessoa; a previsão do tempo e a capital do país, não." }
    ],
    basico: [
      { tipo: "classificar", titulo: "Separe: dado pessoal ou não?",
        enunciado: "<p>Use o 💡 Para começar.</p>",
        categorias: [{ id: "S", rot: "🪪 Dado pessoal" }, { id: "N", rot: "🌤️ Não é dado pessoal" }],
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
        okMsg: "Você só informa o que precisa! 🪪",
        explicacao: "Só o necessário: nome e um contato. Documento, senha e localização não." }
    ],
    turbo: [
      { tipo: "memoria", titulo: "🔴 Jogo da memória dos dados pessoais",
        enunciado: "<p>Vire duas cartas e ache os pares: cada dado pessoal e o seu exemplo.</p>", dicas: ["Os exemplos estão na tabela do 💡 Para começar."],
        pares: [{ a: "🧑 Nome completo", b: "Ana Souza Lima" }, { a: "🏠 Endereço", b: "Rua das Flores, 10" }, { a: "🪪 Documentos", b: "CPF, RG" }, { a: "📍 Localização", b: "Onde você está agora" }],
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
        categorias: [{ id: "C", rot: "🪪 Dado pessoal comum" }, { id: "S", rot: "🔐 Dado sensível" }],
        itens: [{ t: "Uma doença, um remédio que a pessoa toma", c: "S" }, { t: "O endereço", c: "C" }, { t: "A digital usada para desbloquear o celular", c: "S" }, { t: "A religião da pessoa", c: "S" }, { t: "O telefone", c: "C" }, { t: "Em quem a pessoa votou", c: "S" }],
        explicacao: "Saúde, biometria, religião e opinião política são sensíveis; endereço e telefone são dados pessoais comuns." }
    ],
    basico: [
      { tipo: "ligar", titulo: "Cada direito da LGPD e o que você pode pedir",
        pares: [{ a: "👀 Saber", b: "Quais dados a empresa tem sobre você" }, { a: "✏️ Corrigir", b: "Arrumar um dado errado" }, { a: "🗑️ Apagar", b: "Excluir dados que não são mais necessários" }, { a: "↩️ Retirar o consentimento", b: "Desistir da autorização que deu" }],
        explicacao: "Saber, corrigir, apagar e retirar o consentimento." },
      { tipo: "classificar", titulo: "Separe: comum ou sensível?",
        categorias: [{ id: "C", rot: "🪪 Comum" }, { id: "S", rot: "🔐 Sensível" }],
        itens: [{ t: "Nome completo", c: "C" }, { t: "O DNA", c: "S" }, { t: "O rosto usado para desbloquear", c: "S" }, { t: "Data de nascimento", c: "C" }, { t: "A cor da pele, a etnia", c: "S" }],
        explicacao: "DNA, rosto para desbloquear e origem racial ou étnica são sensíveis." },
      { tipo: "escolha", titulo: "LGPD e ANPD",
        perguntas: [
          { p: "Quem fiscaliza a LGPD?", opcoes: ["A ANPD", "A loja de aplicativos", "O provedor de internet"], certo: 0 },
          { p: "Para usar dados de crianças, a lei exige:", opcoes: ["A autorização de um dos pais ou responsáveis", "Só a vontade da empresa", "Nada"], certo: 0 }],
        explicacao: "A ANPD fiscaliza; dados de crianças pedem a autorização de um dos pais ou responsáveis." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O aplicativo de jogos pediu dados de saúde",
        perguntas: [
          { p: "Um jogo de corrida pede: “Informe as suas doenças e remédios”. Isso é:", opcoes: ["Um dado sensível que o jogo não precisa", "Um dado comum e necessário", "Uma senha"], certo: 0 },
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
          { p: "“Novo acesso de outro aparelho” e não foi você. Isso pode ser:", opcoes: ["Invasão", "Uma atualização normal", "Um elogio"], certo: 0 }],
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
          { p: "Um primo posta muitas fotos e você só quer ver menos. O melhor é:", opcoes: ["Silenciar", "Bloquear", "Denunciar"], certo: 0 },
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
          { p: "O guia é para o 6º ano. Uma boa ideia:", opcoes: ["Exemplos de jogos", "Termos de contrato", "Nenhuma imagem"], certo: 0 }],
        explicacao: "Avós: frases curtas e letra grande. 6º ano: exemplos de jogos." },
      { tipo: "classificar", titulo: "Separe: entra ou não entra no guia?",
        categorias: [{ id: "S", rot: "✅ Entra" }, { id: "N", rot: "❌ Não entra" }],
        itens: [{ t: "Exemplo inventado", c: "S" }, { t: "Dado pessoal real", c: "N" }, { t: "Imagem própria", c: "S" }, { t: "Imagem sem crédito", c: "N" }],
        explicacao: "Exemplos inventados e imagens próprias entram; dados reais e imagens sem crédito, não." }
    ],
    desafio: [
      { tipo: "escolha", titulo: "🟡 O plano do guia para os avós",
        perguntas: [
          { p: "Tema para os avós:", opcoes: ["Configurar a conta da rede social", "Programar em blocos", "Montar um computador"], certo: 0 },
          { p: "Formato:", opcoes: ["Cartaz digital ou 5 slides", "Um livro de 200 páginas", "Uma mensagem de áudio de 1 hora"], certo: 0 },
          { p: "Tarefas:", opcoes: ["Pesquisar, escrever, desenhar, apresentar, cada uma com um responsável", "Uma pessoa faz tudo", "Ninguém sabe quem faz"], certo: 0 },
          { p: "Fontes:", opcoes: ["A apostila e sites oficiais", "Qualquer boato", "Nenhuma"], certo: 0 }],
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
          { p: "Metadados são:", opcoes: ["Informações escondidas dentro de um arquivo (data, aparelho, local)", "Vírus", "Senhas"], certo: 0 },
          { p: "Cookies são:", opcoes: ["Pequenos arquivos que os sites guardam no navegador para lembrar de você", "Vírus que apagam o computador", "Satélites"], certo: 0 },
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
      { v: false, corrigir: { trecho: "são vírus que apagam o computador", opcoes: ["são vírus que apagam o computador", "são pequenos arquivos que os sites guardam no navegador"], certo: "são pequenos arquivos que os sites guardam no navegador" }, why: "Cookies lembram de você." }
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
    Q("m1", "Dados pessoais", [{ p: "Dado pessoal é:", opcoes: ["Informação que identifica uma pessoa", "Qualquer notícia", "Um tipo de vírus"], certo: 0 }, { p: "Antes de informar um dado, pergunte:", opcoes: ["Quem está pedindo? Para quê? Precisa mesmo?", "Qual é a cor?", "Nada"], certo: 0 }]), pega("m1"),
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

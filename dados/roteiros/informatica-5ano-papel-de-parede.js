/* Roteiro da aula (só para o professor) — ⭐ Aula especial: Meu papel de parede (5º Ano)
   Professor Welington Laignier · Portal da Informática · gerado por ferramentas/aula_especial/gerar.py */
PORTAL.registrarRoteiro("informatica-5ano-papel-de-parede", {
  antes: [
    "🔊 Caixinha de som",
    "🖥️ Computadores ligados pelo Veyon",
    "🎬 Vídeo da aula especial aberto no computador do professor",
    "🖼️ Uma imagem .webp baixada no computador do professor, para a demonstração",
    "🎮 Jogos da recreação definidos"
  ],
  ae: {
    datas: "Aula avulsa, para qualquer turma do 6º ao 9º ano · BNCC: Mundo Digital (arquivos, formatos e sistema operacional)",
    tempo: [
      { min: 5, icone: "🎬", t: "Vídeo da aula especial" },
      { min: 10, icone: "🔎", t: "Qual é o meu Windows? (barra de tarefas, Sobre e winver)" },
      { min: 10, icone: "🖥️", t: "Demonstração pelo Veyon: .webp → Paint → .png → papel de parede" },
      { min: 35, icone: "💻", t: "Aula no portal com o simulador" },
      { min: 5, icone: "📋", t: "Perguntas rápidas e Resumo" },
      { min: 10, icone: "🎮", t: "Recreação (quem concluiu o Básico)" }
    ],
    abertura: [
      { fala: "Quem aqui já tentou colocar uma imagem no papel de parede e o computador não deixou?" },
      { acao: "Ouça 2 ou 3 histórias. Quase sempre a imagem veio de um site e era .webp." },
      { fala: "Hoje vocês vão descobrir o motivo e aprender a resolver sozinhos. Mas antes: qual é o Windows deste computador?" },
      { acao: "Peça para olharem a barra de tarefas: Iniciar no centro = Windows 11; no canto esquerdo = Windows 10. Depois mostre ⊞ + R › winver no projetor." }
    ],
    siglas: "Leia o “O que significa?”. Destaque: JPG/JPEG, PNG e WebP são formatos; a extensão é o final do nome; converter é salvar de novo em outro formato (renomear não converte).",
    onde: {
      pergunta: "Além do papel de parede, onde já apareceu para vocês “formato não suportado”?",
      fechamento: "Sites de inscrição, editores de vídeo, impressão… A solução é a mesma: converter para um formato aceito, como .png ou .jpg.",
      dica: "Pergunte qual foi a última imagem que eles quiseram usar de papel de parede: isso dá sentido à aula."
    },
    demonstracao: "Pelo Veyon: no Explorador › Downloads, mostre a coluna Tipo (“Arquivo WEBP”) e ligue as extensões. Botão direito › Abrir com › Paint › Arquivo › Salvar como › Imagem PNG › Salvar. Botão direito na imagem nova › Definir como plano de fundo da área de trabalho. Depois volte o papel de parede padrão.",
    atencao: [
      "O simulador sorteia Windows 10 ou 11 para cada aluno: ele precisa descobrir qual é. Quem terminar pode clicar em “🔄 Treinar no Windows 10/11”.",
      "No simulador, a janela Executar abre com o clique direito no botão Iniciar › Executar (no PC de verdade é ⊞ + R).",
      "Combinado: no computador de verdade, só troca o papel de parede quem terminar o simulador e com a sua autorização; no fim da aula, voltar o papel de parede padrão, porque outras turmas usam o computador."
    ],
    perguntas: [
      { p: "Posso só renomear para .png?", r: "Não. Renomear não converte: por dentro continua .webp. É preciso salvar de novo no Paint como Imagem PNG ou JPEG." },
      { p: "E no celular?", r: "O celular costuma aceitar .webp. O problema é só no papel de parede do Windows (10 e 11 comum)." },
      { p: "Por que o site usa .webp?", r: "Porque a imagem fica bem menor e o site abre mais rápido." },
      { p: "Sumiu a opção “Definir como plano de fundo” no menu!", r: "Ela só aparece em imagens de formato aceito (.jpg, .png…). Se a imagem é .webp, converta primeiro." }
    ],
    curiosidade: "A Microsoft está testando o papel de parede com .webp numa versão de teste do Windows 11 (janeiro de 2026). Até chegar para todos, o truque do Paint resolve."
  }
});

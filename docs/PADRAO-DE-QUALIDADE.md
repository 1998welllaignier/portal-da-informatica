# ⭐ Padrão de qualidade dos materiais — Prof. Welington Laignier

**Lista viva de tudo o que já combinamos.** Todo material novo (bimestre novo, série nova, revisão de material)
nasce seguindo **tudo** daqui, sem o professor precisar relembrar.
Regra combinada em 11/11/2026: **cada melhoria aprovada entra nesta lista no mesmo dia**, com a data.
Detalhes técnicos: `AGENTS.md` (checklist do bimestre), `docs/PADRAO-ATIVIDADES.md` e `docs/PADRAO-VIDEOS-2D.md`.

---

## 1. Conteúdo da apostila (cada missão)
- 💡 Para começar · 📖 O que significa? · 🌎 Onde eu uso isso? · 🎮 Mão na massa · 🟢 Básico · 🟡 Desafio · 🔴 Turbo · ✅ Perguntas rápidas · 🧠 Resumo.
- **Aluno resolve sozinho:** toda resposta está escrita na apostila; o professor é apoio, não peça principal (`verificar_autonomia.js` = 0 / 0).
- **Nada explicado por alto:** toda sigla e termo técnico com significado, tradução (só quando faz sentido: HD, SSD sim; hardware, software não), o que é, onde se vê e para que serve.
- **Visual sempre:** toda explicação seguida de um desenho com setas e legendas.
- **"Onde eu uso isso?"** em todos os materiais (apostila, ilustrada, vídeo, guia, roteiro).
- **Seguir a BNCC Computação** (código da habilidade no guia).
- **Correção automática sempre que possível** (`docs/PADRAO-ATIVIDADES.md`).
- **Tudo dentro do navegador (10/11/2026):** nada de aplicativos externos (Bloco de Notas, Paint) para digitar ou desenhar: o aluno escreve na própria tarefa. Programa de fora só quando o próprio assunto da BNCC é o computador (ex.: criar pasta, salvar arquivo, ver metadados).
- **Nunca pedir para desligar o computador no fim da aula (10/11/2026)**, e não pôr nada no lugar. Avisos curtos de não mexer nos cabos, na mesa e nos arquivos dos colegas podem ficar.
- **Programação em blocos (2027):** editor de blocos dentro do próprio portal, sem Scratch (10/11/2026).

## 2. O que já vem pronto no portal (automático, desde que o material siga o formato)
Estas funções estão no código: todo material novo ganha sozinho. Só é preciso preencher os campos certos.
- **📖 Palavra explicada (11/11/2026):** cada termo do "O que significa?" (`termos: termo, rotulo, def`) vira um botãozinho sublinhado nos textos da missão; o aluno toca e abre um **modal** com o significado. → Preencher bem os `termos` de cada missão (o `termo` sem parênteses é o que o portal procura no texto).
- **✅ Resposta + 💬 Como explicar na apostila do professor (11/11/2026):** na 👀 Visualização do professor (painel, aba Aula), com o login de professor, **toda** atividade de **todas** as páginas (Mão na massa, O que significa?, Onde eu uso isso?, Básico, Desafio, Turbo, Perguntas rápidas, Resumo, Autoavaliação) tem o botão **✅ Resposta**: um modal com a resposta e uma **explicação breve para o professor explicar à turma**. Os alunos não têm esse botão.
  → Todo material novo precisa trazer: `explicacao` (resolução comentada) em cada atividade; `why` em cada item de escolha/classificar/sinais/mensagens; e, em `dados/explicacoes-prof.js`, a explicação de cada item das Perguntas rápidas (`vf`) e de atividades sem resolução comentada (`at`). Conferir com o teste "fracos = 0" (nenhuma atividade sem explicação).
- **Painel do professor:**
  - 🗓️ **Horários** e 🔑 **Códigos** em modal (11/11/2026): o quadro da semana pisca na aula que está acontecendo; os códigos abrem na turma do horário, com busca.
  - 🕘 Turma do horário já vem escolhida em todas as abas.
  - 🚦 **Aula que não aconteceu** (11/11/2026): 🚫 ninguém veio (falta para todos) · 🙋 professor não foi · 🎉 feriado (inclusive municipal) · 🏫 sem aula na escola · 📌 outro, com anotação. O painel pergunta sozinho, ao abrir, sobre aulas passadas sem nenhum registro.
  - Diário com presença, vistos e boletim automáticos; prova no portal; trava de horário; 📌 Missão de hoje; 🎬 Apresentar.
- **Modal** é o jeito padrão de mostrar uma informação rápida sem sair da página (o professor gostou: "é ótimo").

## 3. Pacote de cada bimestre
Apostila no portal + ilustrada (PDF só para quem estuda em casa) · guia do professor (cronograma, BNCC, gabaritos) · roteiro da aula (falas, dinâmicas e as respostas de cada missão) · prova no portal · atividade de recuperação · Trilha Passo a Passo (👣) · cronograma no diário · vídeo de cada missão.
- **~2 semanas antes de cada bimestre**, o Claude propõe os assuntos (BNCC) e o professor aprova.
- Plano de 2027: documento "Informática 2027: proposta de assuntos por série (BNCC Computação)".

## 4. Vídeos das missões (detalhes em `docs/PADRAO-VIDEOS-2D.md`)
- 2D com bonequinhos, problema → solução, câmera que se mexe, conceito em letras amarelas, etiquetas com seta, selo do professor sempre visível.
- Abertura "digna de um Oscar", com ideia própria para cada missão. Pausa perceptível entre assuntos.
- Legenda com a forma escrita das siglas; **a legenda nunca cobre nada** (verificador obrigatório); **legenda e desenhos sincronizados com a voz** (`alinhar_frases.py` + `fala_sync.py`, desde 10/11/2026).
- A voz é a do professor (gerada por IA), nunca esticada; música baixinha; efeitos discretos.
- Padrão = videozinho curto. **Vídeo extra "ultra explicado"** só quando o professor pedir, para assunto difícil.

## 5. Marca
- Em tudo: **Prof. Welington Laignier** em evidência; a escola fica em segundo plano.

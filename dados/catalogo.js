/* ============================================================
   CATÁLOGO DO PORTAL — séries, turmas, disciplinas e apostilas
   Para acrescentar uma apostila: crie os dois arquivos em dados/
   e acrescente um item em "apostilas" (veja docs/ACRESCENTAR-APOSTILAS).
   ============================================================ */
PORTAL.catalogo = {
  portal: "Portal da Informática",
  professor: "Professor Welington Laignier",
  escola: "EMEF Juscelino Kubitschek — Escola JK",
  cidade: "Curionópolis/PA",

  disciplinas: [
    { id: "informatica", nome: "Informática", icone: "💻" }
  ],

  /* aula: dia da semana (1 = segunda … 4 = quinta) e hora de início; cada aula dura 1h15 */
  duracaoAula: 75,
  series: [
    { id: "5", nome: "5º ano", faixa: "menor", cor: "#e2583e",
      turmas: [ { id: "5-seg", nome: "Segunda 15h" , aula: { dia: 1, ini: "15:00" } }, { id: "5-ter", nome: "Terça 9h" , aula: { dia: 2, ini: "09:00" } } ],
      nota: "Atendimento individual" },
    { id: "6", nome: "6º ano", faixa: "menor", cor: "#2f7de1",
      turmas: [ { id: "6A", nome: "6º A" , aula: { dia: 4, ini: "13:30" } }, { id: "6B", nome: "6º B" , aula: { dia: 4, ini: "15:00" } }, { id: "6C", nome: "6º C" , aula: { dia: 1, ini: "07:30" } } ] },
    { id: "7", nome: "7º ano", faixa: "media", cor: "#0f9d76",
      turmas: [ { id: "7A", nome: "7º A" , aula: { dia: 2, ini: "13:30" } }, { id: "7B", nome: "7º B" , aula: { dia: 2, ini: "15:00" } }, { id: "7C", nome: "7º C" , aula: { dia: 1, ini: "09:00" } }, { id: "7D", nome: "7º D" , aula: { dia: 2, ini: "07:30" } } ] },
    { id: "8", nome: "8º ano", faixa: "maior", cor: "#7a4fd8",
      turmas: [ { id: "8A", nome: "8º A" , aula: { dia: 3, ini: "13:30" } }, { id: "8B", nome: "8º B" , aula: { dia: 3, ini: "15:00" } }, { id: "8C", nome: "8º C" , aula: { dia: 3, ini: "07:30" } }, { id: "8D", nome: "8º D" , aula: { dia: 3, ini: "09:00" } } ] },
    { id: "9", nome: "9º ano", faixa: "maior", cor: "#c2410c",
      turmas: [ { id: "9A", nome: "9º A" , aula: { dia: 1, ini: "13:30" } }, { id: "9B", nome: "9º B" , aula: { dia: 1, ini: "15:00" } }, { id: "9C", nome: "9º C" , aula: { dia: 2, ini: "09:00" } }, { id: "9D", nome: "9º D" , aula: { dia: 4, ini: "09:00" } } ] }
  ],

  apostilas: [
    { id: "informatica-5ano-4bim", serie: "5", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 5º ano — 4º bimestre", modo: "individual" },
    { id: "informatica-6ano-4bim", serie: "6", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 6º ano — 4º bimestre", modo: "individual ou dupla" },
    { id: "informatica-7ano-4bim", serie: "7", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 7º ano — 4º bimestre", modo: "individual ou dupla" },
    { id: "informatica-8ano-4bim", serie: "8", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 8º ano — 4º bimestre", modo: "individual ou dupla" },
    { id: "informatica-9ano-4bim", serie: "9", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 9º ano — 4º bimestre", modo: "individual ou dupla" },

    /* TRILHA PASSO A PASSO — as mesmas missões da série, com letra grande,
       um passo por vez, quase tudo por clique e pouca digitação.
       "oculta": não aparece na lista dos alunos; o professor abre pelo
       link da Área do professor (Veyon → Abrir site, só no computador do aluno). */
    { id: "informatica-8ano-4bim-trilha", serie: "8", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 8º ano — 4º bimestre · Trilha Passo a Passo", modo: "individual",
      trilha: true, oculta: true, base: "informatica-8ano-4bim" },
    { id: "informatica-6ano-4bim-trilha", serie: "6", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 6º ano — 4º bimestre · Trilha Passo a Passo", modo: "individual",
      trilha: true, oculta: true, base: "informatica-6ano-4bim" },
    { id: "informatica-7ano-4bim-trilha", serie: "7", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 7º ano — 4º bimestre · Trilha Passo a Passo", modo: "individual",
      trilha: true, oculta: true, base: "informatica-7ano-4bim" },
    { id: "informatica-9ano-4bim-trilha", serie: "9", disciplina: "informatica", unidade: "4º bimestre",
      titulo: "Informática — 9º ano — 4º bimestre · Trilha Passo a Passo", modo: "individual",
      trilha: true, oculta: true, base: "informatica-9ano-4bim" }
  ],

  /* Orientações curtas que aparecem na área do professor */
  orientacoes: {
    duracao: "Uma missão por aula (cerca de 1h15). Leitura guiada: 15 a 20 min · Básico: 30 a 40 min · Desafio, Turbo e revisão: o tempo restante.",
    recursos: "Computadores com Chrome ou Edge, a apostila impressa (para o carimbo) e o Veyon para acompanhar as telas.",
    avaliacao: "O carimbo continua na apostila impressa. O portal ajuda a praticar e mostra, na tela, quem concluiu o Básico. A nota segue o Quadro de notas da apostila (carimbos até 5,0 + prova no Wayground até 5,0)."
  }
};

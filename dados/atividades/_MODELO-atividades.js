/* ============================================================
   MODELO — copie este arquivo para criar as atividades de uma
   apostila nova. O nome do arquivo deve ser igual ao id da apostila
   (ex.: informatica-6ano-1bim.js) e o id abaixo também.
   Este arquivo NÃO é carregado pelo portal (o nome começa com _).

   Cada missão (m1, m2, ... e pf = projeto final) tem:
     basico: [ ... ], desafio: [ ... ], turbo: [ ... ]
     vf: [ respostas das Perguntas rápidas, na mesma ordem da apostila ]
   A leitura (Para começar, O que significa?, Onde eu uso isso?,
   Perguntas rápidas e Resumo) vem do arquivo de conteúdo, gerado
   a partir da apostila em fontes/ (veja docs).
   ============================================================ */
PORTAL.registrarAtividades("ID-DA-APOSTILA", {
  m1: {
    basico: [
      /* ARRASTAR PARA CAIXAS (também funciona por clique e teclado) */
      { tipo: "classificar", titulo: "Título da atividade",
        categorias: [{ id: "E", rot: "Entrada" }, { id: "S", rot: "Saída" }],
        itens: [{ t: "Teclado", c: "E" }, { t: "Monitor", c: "S" }],
        dicas: ["Dica 1", "Dica 2"], explicacao: "Explicação mostrada ao acertar." },

      /* TABELA DE CÓDIGOS (G/S, P/N, V/F...) */
      { tipo: "classificar", modo: "tabela", titulo: "Golpe ou seguro?", colunaItem: "Mensagem", colunaResp: "G ou S",
        categorias: [{ id: "G", rot: "Golpe" }, { id: "S", rot: "Seguro" }],
        itens: [{ t: "Texto da situação", c: "G", why: "Por que é golpe" }] },

      /* ORDENAR (aceita ordens alternativas: índices na ordem certa) */
      { tipo: "ordenar", titulo: "Coloque em ordem", itens: ["Passo 1", "Passo 2", "Passo 3"], alternativas: [[1, 0, 2]] },

      /* TABELA PARA COMPLETAR: número, texto ou lista suspensa */
      { tipo: "tabela", titulo: "Complete", colunas: ["Pergunta", "Resposta"],
        linhas: [["Quanto é 2 + 2?", { r: "4", tipo: "num" }], ["Capital do Pará", { r: ["Belém", "Belem"] }], ["Escolha", { op: ["A", "B"], r: "A" }]] },

      /* RESPOSTA ABERTA (o professor confere). Opcional: detector de ofensas e palavras obrigatórias */
      { tipo: "aberta", titulo: "Explique...", linhas: 3, criterios: ["Critério 1"], exemplo: "Exemplo de resposta",
        exigir: ["palavra"], detector: { palavras: ["ofensa"], msg: "Troque por palavras respeitosas." } },

      /* TAREFA NO COMPUTADOR (Paint, Bloco de Notas...): o aluno marca os passos e chama o professor */
      { tipo: "pc", titulo: "No computador", programa: "Paint", passos: ["Passo 1", "Passo 2", "Chame o professor."] },

      /* OUTROS TIPOS DISPONÍVEIS (veja exemplos nas apostilas prontas):
         escolha (perguntas com explicação) · sinais (marcar todos os corretos) · senha (medidor de senha forte)
         robo (labirinto com setas e repita) · pintura (simulação do Paint) · lista_ops (inserir/remover em listas)
         busca_binaria · adivinhe · bolha · grafo (traçar caminho) · arvore (pastas/decisão) · cesar (cifra)
         info (texto de apoio, não conta progresso) · autoavaliacao
         caminho (montar esquema com setas e banco de peças) · grafo_montar (ligar vértices pela tabela)
         cesar_livre (o aluno cifra a própria frase) */
    ],
    desafio: [],
    turbo: [],
    vf: [{ v: true }, { v: false, corrigir: { trecho: "parte errada da frase", opcoes: ["parte errada da frase", "forma certa"], certo: "forma certa" } }]
  }
});

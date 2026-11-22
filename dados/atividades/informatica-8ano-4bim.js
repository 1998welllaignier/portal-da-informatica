/* ============================================================
   ATIVIDADES INTERATIVAS — Informática 8º ano — 4º bimestre
   Professor Welington Laignier · EMEF Juscelino Kubitschek
   ============================================================ */
PORTAL.registrarAtividades("informatica-8ano-4bim", {

  /* ======================= MISSÃO 1 ======================= */
  m1: {
    pratica: [
      { tipo: "sim_adivinhe", titulo: "Jogo: adivinhe o número do computador", robo: {"paineis": ["🎯 Meu jogo: o número secreto é outro"], "passos": [{"fala": "Olha como eu jogo. O número pode ser de <b>1 a 100</b>. Eu chuto sempre o <b>meio</b>: somo o começo e o fim e divido por 2.", "painel": 0, "titulo": "De 1 a 100"}, {"fala": "(1 + 100) ÷ 2 = 50,5 → chuto <b>50</b>. O computador disse: <b>é maior</b>. Então jogo fora de 1 a 50.", "painel": 0, "linha": "50 → é maior · sobrou de 51 a 100"}, {"fala": "(51 + 100) ÷ 2 = 75,5 → chuto <b>75</b>. Ele disse: <b>é menor</b>. Jogo fora do 75 para cima.", "painel": 0, "linha": "75 → é menor · sobrou de 51 a 74"}, {"fala": "(51 + 74) ÷ 2 = 62,5 → chuto <b>62</b>. <b>É maior.</b>", "painel": 0, "linha": "62 → é maior · sobrou de 63 a 74"}, {"fala": "(63 + 74) ÷ 2 = 68,5 → chuto <b>68</b>. <b>É maior.</b>", "painel": 0, "linha": "68 → é maior · sobrou de 69 a 74"}, {"fala": "(69 + 74) ÷ 2 = 71,5 → chuto <b>71</b>. <b>É menor.</b>", "painel": 0, "linha": "71 → é menor · sobrou de 69 a 70"}, {"fala": "(69 + 70) ÷ 2 = 69,5 → chuto <b>69</b>. <b>É maior.</b> Só sobrou o 70!", "painel": 0, "linha": "69 → é maior · sobrou só o 70"}, {"fala": "Chuto <b>70</b>… acertei! Foram <b>7 chutes</b>.", "painel": 0, "linha": "70 → ACERTEI! 🎉", "marca": true, "espera": 2600}, {"fala": "Repare: eu <b>nunca</b> chutei 35, 36, 37… um por um. Chutando o meio, cada chute joga fora <b>metade</b> do que sobrou.", "painel": null, "espera": 3200}], "fim": "Agora é a sua vez! Olhe a faixa “Pode ser de … a …”, some o começo e o fim, divida por 2 e chute esse número. 💪"}, max: 100, meta: 7,
        enunciado: "<p>O computador pensou num número de 1 a 100. A cada chute ele diz se é <strong>maior</strong> ou <strong>menor</strong>. Tente sempre o <strong>meio</strong> do que sobrou (50, depois 25 ou 75…).</p>",
        explicacao: "Chutar o meio corta as opções pela metade a cada vez: isso é a <strong>busca binária</strong>. Com 100 números, bastam no máximo 7 chutes. Mas ela só funciona se a lista estiver <strong>em ordem</strong>!" },
      { tipo: "sim_bolha", titulo: "Método da bolha na mão", robo: {"paineis": ["🫧 Outra lista: [8, 2, 5]"], "passos": [{"fala": "Olha como eu faço com <b>outra</b> lista. Comparo o 1º com o 2º: 8 e 2. O 8 é maior, então <b>troco</b>.", "painel": 0, "linha": "8 e 2 → troco → [2, 8, 5]"}, {"fala": "Agora o 2º com o 3º: 8 e 5. O 8 é maior: <b>troco</b> de novo.", "painel": 0, "linha": "8 e 5 → troco → [2, 5, 8]"}, {"fala": "Volto ao começo: 2 e 5 já estão em ordem, <b>não troco</b>. 5 e 8 também.", "painel": 0, "linha": "2 e 5 → mantenho · 5 e 8 → mantenho"}, {"fala": "Pronto: <b>[2, 5, 8]</b> em ordem crescente, com só <b>2 trocas</b>. Só troquei vizinhos que estavam fora de ordem.", "painel": 0, "linha": "[2, 5, 8] ✔ (2 trocas)", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: compare os vizinhos da esquerda para a direita e use ⇄ só quando o da esquerda for maior. 💪"},
        enunciado: "<p>Clique em <strong>⇄</strong> para trocar dois vizinhos. Deixe em <strong>ordem crescente</strong>, com o menor número possível de trocas.</p>",
        valores: [42, 7, 19, 3, 25],
        explicacao: "No método da bolha, o computador compara vizinhos e troca quando estão fora de ordem, passada por passada, até não precisar mais trocar." }
    ],
    bonus: [
      { id: "m1-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: corrida de buscas",
        perguntas: [
          { p: "Lista em ordem de 1 a 100. Na busca binária, qual número você olha primeiro?", opcoes: ["O do meio (50)", "O 1", "O 100"], certo: 0, why: "A binária sempre começa pelo meio e descarta metade." },
          { p: "Procurando o 80 e o meio é 50, qual metade você descarta?", opcoes: ["De 1 a 50", "De 51 a 100", "Nenhuma"], certo: 0, why: "80 é maior que 50, então ele só pode estar na metade de cima." },
          { p: "Na lista <b>4, 1</b>, o método da bolha faz o quê?", opcoes: ["Troca: fica 1, 4", "Nada", "Apaga o 4"], certo: 0, why: "Vizinhos fora de ordem trocam de lugar." }
        ] }
    ],
    basico: [
      { tipo: "tabela", titulo: "Busca sequencial: procure o 31", robo: {"paineis": ["🔎 Outra lista: [4, 9, 15, 22, 30]"], "passos": [{"fala": "Olha como eu conto com <b>outra</b> lista. Quero achar o <b>22</b>, olhando um por um desde a posição 1:", "painel": 0, "linha": "4? não (1ª comparação)"}, {"fala": "", "painel": 0, "linha": "9? não (2ª comparação)", "espera": 700}, {"fala": "", "painel": 0, "linha": "15? não (3ª comparação)", "espera": 700}, {"fala": "", "painel": 0, "linha": "22? ACHEI! (4ª comparação)", "marca": true}, {"fala": "Foram <b>4 comparações</b>: conto cada número que eu olhei, inclusive o que eu achei.", "painel": null, "espera": 2400}], "fim": "Agora é a sua vez: conte as comparações até achar o 31! 💪"},
        enunciado: "<p>Lista ordenada: <strong>NÚMEROS = [3, 7, 12, 18, 25, 31, 40, 52]</strong></p>",
        linhas: [["Quantas comparações você fez, olhando um por um desde a posição 1, até achar o 31?", { r: "6", tipo: "num", w: 4 }]],
        dicas: ["Conte: 3 (1ª comparação), 7 (2ª), 12 (3ª)… até chegar no 31."],
        explicacao: "São 6 comparações: o 31 está na posição 6. Na busca sequencial, olhamos um por um." },

      { tipo: "busca_binaria", titulo: "Busca binária: procure o 31 jogando com as cartas", robo: {"paineis": ["🔎 Outra lista: [2, 5, 9, 14, 20, 27, 33, 41] · procuro o 27"], "passos": [{"fala": "Olha como eu faço com <b>outra</b> lista. Ela tem 8 cartas, posições de 1 a 8. Meio: (1 + 8) ÷ 2 = 4,5 → posição <b>4</b>.", "painel": 0, "linha": "1ª tentativa: posições 1 a 8 → meio 4 → carta 14"}, {"fala": "A carta 14 é <b>menor</b> que 27. Então o 27 só pode estar depois: jogo fora as posições 1 a 4.", "painel": 0, "linha": "27 é maior que 14 → sobram as posições 5 a 8"}, {"fala": "Novo meio: (5 + 8) ÷ 2 = 6,5 → posição <b>6</b>. A carta 6 é o <b>27</b>!", "painel": 0, "linha": "2ª tentativa: posições 5 a 8 → meio 6 → carta 27 → ACHEI!", "marca": true, "espera": 2600}, {"fala": "Foram só <b>2 tentativas</b>. Um por um, eu teria olhado 6 cartas.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez de procurar o 31: comece pelo meio da lista inteira e jogue fora a metade em que ele não pode estar. 💪"},
        lista: [3, 7, 12, 18, 25, 31, 40, 52], alvo: 31,
        explicacao: "1ª tentativa: posições 1 a 8 → meio 4 → número 18 → o 31 é maior. 2ª tentativa: posições 5 a 8 → meio 6 → número 31 → igual! Só 2 tentativas, contra 6 da busca sequencial." },

      { tipo: "bolha", titulo: "Método da bolha: ordene [6, 3, 9, 1]", robo: {"paineis": ["🫧 Outra lista: [5, 2, 8, 1]"], "passos": [{"fala": "Olha como eu faço com <b>outra</b> lista, <b>uma passada por vez</b>. Numa passada, eu comparo os vizinhos da esquerda para a direita.", "painel": 0, "titulo": "1ª passada", "pausa": "▶ Começar a 1ª passada"}, {"fala": "5 e 2: o 5 é maior → <b>trocar</b>.", "painel": 0, "linha": "5 e 2 → trocar → [2, 5, 8, 1]", "espera": 2200}, {"fala": "5 e 8: já estão em ordem → <b>manter</b>.", "painel": 0, "linha": "5 e 8 → manter → [2, 5, 8, 1]", "espera": 2200}, {"fala": "8 e 1: o 8 é maior → <b>trocar</b>. Viu? O maior número (8) “subiu” até o fim, como uma bolha!", "painel": 0, "linha": "8 e 1 → trocar → [2, 5, 1, 8]", "marca": true, "pausa": "▶ Próxima passada"}, {"fala": "<b>2ª passada</b>. 2 e 5: em ordem → <b>manter</b>.", "painel": 0, "linha": "2ª passada · 2 e 5 → manter → [2, 5, 1, 8]", "espera": 2200}, {"fala": "5 e 1: o 5 é maior → <b>trocar</b>.", "painel": 0, "linha": "5 e 1 → trocar → [2, 1, 5, 8]", "espera": 2200}, {"fala": "5 e 8: em ordem → <b>manter</b>. Fim da 2ª passada.", "painel": 0, "linha": "5 e 8 → manter → [2, 1, 5, 8]", "marca": true, "pausa": "▶ Próxima passada"}, {"fala": "<b>3ª passada</b>. 2 e 1: o 2 é maior → <b>trocar</b>.", "painel": 0, "linha": "3ª passada · 2 e 1 → trocar → [1, 2, 5, 8]", "espera": 2200}, {"fala": "2 e 5, 5 e 8: tudo em ordem → <b>manter</b>. Pronto: lista ordenada!", "painel": 0, "linha": "2 e 5 → manter · 5 e 8 → manter → [1, 2, 5, 8] ✔", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez com [6, 3, 9, 1]: uma passada por vez. Em cada par destacado, pergunte “o da esquerda é maior?”. Se for, trocar; se não, manter. 💪"}, lista: [6, 3, 9, 1],
        enunciado: "<p>Compare os vizinhos destacados e decida: <strong>trocar</strong> (se estão fora de ordem) ou <strong>manter</strong>.</p>",
        explicacao: "1ª passada: [3, 6, 1, 9] · 2ª passada: [3, 1, 6, 9] · 3ª passada: [1, 3, 6, 9]. A cada passada, o maior número que ainda falta “sobe” para o final, como uma bolha." },

      { tipo: "tabela", titulo: "Agora sem ajuda: escreva as passadas de [5, 2, 8, 1]", robo: {"paineis": ["🫧 Bolha com outra lista: [4, 1, 3, 2]"], "passos": [{"fala": "Olha como eu faço o método da bolha com <b>outra</b> lista. Comparo só <b>dois vizinhos</b> por vez:", "painel": 0, "titulo": "Original: 4, 1, 3, 2"}, {"fala": "4 e 1: o da esquerda é maior, <b>troca</b>! 4 e 3: troca! 4 e 2: troca!", "painel": 0, "linha": "Passada 1: 1, 3, 2, 4  (3 trocas)", "marca": true}, {"fala": "O maior (4) já foi para o fim. Agora de novo: 1 e 3 ficam; 3 e 2 <b>trocam</b>; 3 e 4 ficam.", "painel": 0, "linha": "Passada 2: 1, 2, 3, 4  (1 troca)", "marca": true}, {"fala": "Ficou em ordem! Em cada passada eu escrevo como a lista ficou <b>no fim</b>.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: faça as passadas de [5, 2, 8, 1]! 💪"},
        enunciado: "<p>Faça o método da bolha na cabeça (ou no rascunho) e digite como a lista fica <strong>no fim de cada passada</strong>. Separe os números com vírgula.</p>",
        colunas: ["Etapa", "Lista"],
        linhas: [["Original", "5, 2, 8, 1"], ["Passada 1", { r: "2, 5, 1, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }], ["Passada 2", { r: "2, 1, 5, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }], ["Passada 3", { r: "1, 2, 5, 8", tipo: "letras", w: 14, ph: "_, _, _, _" }],
          ["Quantas trocas aconteceram na passada 1?", { r: "2", tipo: "num", w: 4, dica: "5 e 2 trocam; 5 e 8 ficam; 8 e 1 trocam." }]],
        dicas: ["Compare só dois vizinhos por vez: se o da esquerda for maior, troque.", "No fim de cada passada, o maior número que ainda falta vai para o final."],
        explicacao: "Passada 1: [2, 5, 1, 8] (2 trocas) · Passada 2: [2, 1, 5, 8] · Passada 3: [1, 2, 5, 8]. Lista ordenada!" }
    ],
    desafio: [
      { tipo: "adivinhe", titulo: "Jogo “Adivinhe o número” (o número secreto é 73)", robo: {"paineis": ["🎯 Meu jogo: o número secreto é outro"], "passos": [{"fala": "Olha como eu jogo com <b>outro</b> número secreto. Sempre chuto o <b>meio</b>: (começo + fim) ÷ 2, sem a parte depois da vírgula.", "painel": 0, "titulo": "De 1 a 100"}, {"fala": "(1 + 100) ÷ 2 = 50,5 → <b>50</b>. Resposta: <b>é menor</b>. Sobrou de 1 a 49.", "painel": 0, "linha": "50 → é menor · sobrou de 1 a 49"}, {"fala": "(1 + 49) ÷ 2 = <b>25</b>. Resposta: <b>é maior</b>. Sobrou de 26 a 49.", "painel": 0, "linha": "25 → é maior · sobrou de 26 a 49"}, {"fala": "(26 + 49) ÷ 2 = 37,5 → <b>37</b>. <b>É menor.</b>", "painel": 0, "linha": "37 → é menor · sobrou de 26 a 36"}, {"fala": "(26 + 36) ÷ 2 = <b>31</b>. <b>É menor.</b>", "painel": 0, "linha": "31 → é menor · sobrou de 26 a 30"}, {"fala": "(26 + 30) ÷ 2 = <b>28</b>. <b>É maior.</b>", "painel": 0, "linha": "28 → é maior · sobrou de 29 a 30"}, {"fala": "(29 + 30) ÷ 2 = 29,5 → <b>29</b>. <b>É maior.</b> Só pode ser o 30!", "painel": 0, "linha": "29 → é maior · sobrou só o 30"}, {"fala": "Chuto <b>30</b>: acertei em <b>7 chutes</b>!", "painel": 0, "linha": "30 → ACERTEI! 🎉", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: o seu primeiro chute é 50. Depois de cada resposta, calcule o novo meio do que sobrou. 💪"}, min: 1, max: 100, secreto: 73,
        enunciado: "<p>Na apostila, um colega pensa no número e responde. Aqui, o computador responde por ele. O primeiro palpite é sempre o meio: (1 + 100) ÷ 2 = <strong>50</strong>.</p>",
        explicacao: "50 (maior) → 75 (menor) → 62 (maior) → 68 (maior) → 71 (maior) → 73 (acertou): 6 tentativas para um número de 1 a 100." }
    ],
    turbo: [
      { tipo: "tabela", titulo: "Busca binária: quantas tentativas, no máximo, para achar um número de 1 a 1.000?",
        enunciado: "<p>Use a <strong>busca binária</strong>: o método de olhar sempre o <strong>meio</strong> da lista em ordem e jogar fora a metade em que o número não pode estar (o mesmo jeito do jogo “Adivinhe o número”). A lista agora vai de <strong>1 a 1.000</strong>. Quantas tentativas você precisa, <strong>no máximo</strong>, para achar qualquer número?</p>", robo: {"paineis": ["✂️ Outro exemplo: de 1 a 100"], "passos": [{"fala": "Olha como eu conto com <b>outro</b> tamanho. A cada tentativa, a lista cai pela <b>metade</b>:", "painel": 0, "linha": "100 → 50 → 25 → 13 → 7 → 4 → 2 → 1"}, {"fala": "Quando a metade dá número quebrado (25 ÷ 2 = 12,5), arredondo para cima: 13. Conto as divisões até sobrar <b>1 número</b>: são 7 setas.", "painel": 0, "linha": "De 1 a 100: no máximo 7 tentativas", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça o mesmo com 1.000! 💪"},
        linhas: [["Tentativas no máximo", { r: "10", tipo: "num", w: 4 }]],
        dicas: ["A cada tentativa da busca binária a lista cai pela metade: 1.000 → 500 → 250 → 125 → …", "Conte quantas vezes dá para dividir por 2 até sobrar 1 número (número quebrado: arredonde para cima)."],
        explicacao: "Na busca binária, no máximo 10 tentativas: 1.000 → 500 → 250 → 125 → 63 → 32 → 16 → 8 → 4 → 2 → 1 (10 divisões). Outro jeito de ver: 2 × 2 × … (10 vezes) = 1.024, que já é mais do que 1.000." },
      { tipo: "escolha", titulo: "Por que a busca binária não funciona em uma lista desordenada?",
        perguntas: [
          { p: "O que a busca binária faz depois de comparar com o número do <strong>meio</strong>?", opcoes: ["Descarta uma metade inteira da lista", "Olha todos os números, um por um", "Embaralha a lista"], certo: 0 },
          { p: "Por que isso dá errado numa lista <strong>desordenada</strong>?", opcoes: ["Porque o número procurado pode estar justamente na metade descartada", "Porque a lista desordenada é maior", "Porque o computador não lê listas desordenadas"], certo: 0 },
          { p: "Então, antes de usar a busca binária, é preciso…", opcoes: ["Ordenar a lista", "Apagar metade da lista", "Contar os números"], certo: 0 }],
        explicacao: "Porque, ao comparar com o meio, a busca binária descarta uma metade inteira. Numa lista desordenada, o número procurado pode estar justamente na metade descartada." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "em qualquer lista, mesmo desordenada", opcoes: ["em qualquer lista, mesmo desordenada", "só em lista ordenada", "só em listas pequenas"], certo: "só em lista ordenada" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "apagar os itens repetidos", opcoes: ["apagar os itens repetidos", "colocar os itens em ordem", "embaralhar os itens"], certo: "colocar os itens em ordem" } }
    ]
  },

  /* ======================= MISSÃO 2 ======================= */
  m2: {
    pratica: [
      { tipo: "rota", titulo: "O caminho do vídeo até o seu celular", robo: {"paineis": ["➡️ uma encomenda chegando em casa"], "passos": [{"fala": "Olha como eu monto a ordem de <b>outra</b> coisa: uma encomenda chegando em casa. Eu pergunto: “o que tem que acontecer <b>primeiro</b>?”", "painel": 0, "titulo": "uma encomenda chegando em casa"}, {"fala": "Clico no que vem primeiro.", "painel": 0, "linha": "1. Fábrica (onde o produto é feito)", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "2. Caminhão pela estrada", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "3. Agência dos Correios da cidade", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "4. Carteiro na sua rua", "espera": 1700}, {"fala": "Clico no que vem depois: só pode vir depois do anterior.", "painel": 0, "linha": "5. Você abre o pacote", "marca": true, "espera": 1700}, {"fala": "Se eu clicar errado, apago e tento de novo. A ordem tem que fazer sentido do começo ao fim.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: do data center até a sua tela, o que vem primeiro? 💪"},
        enunciado: "<p>Você deu play num vídeo. Clique nas etapas <strong>na ordem</strong> em que o vídeo viaja, de onde ele está guardado até a sua tela.</p>",
        etapas: [
          { ic: "🏭", t: "Data center (onde o vídeo fica guardado)", dica: "Comece de onde o vídeo está guardado." },
          { ic: "🌊", t: "Cabo submarino atravessa o oceano" },
          { ic: "🛣️", t: "Backbone de fibra óptica pelo país" },
          { ic: "🏢", t: "Provedor de internet da cidade" },
          { ic: "📶", t: "Roteador Wi-Fi da sua casa" },
          { ic: "📱", t: "Seu celular mostra o vídeo", dica: "Essa é a última etapa." }],
        okMsg: "Isso! A “nuvem” é, na verdade, um monte de computadores em data centers ligados por cabos.",
        explicacao: "Mais de 95% dos dados entre continentes passam por <strong>cabos submarinos</strong>, não por satélite." }
    ],
    basico: [
      { tipo: "ordenar", titulo: "Você abriu um site de vídeos: numere o caminho do pedido",
        itens: ["Você digita o nome do site no navegador", "O DNS traduz o nome do site no endereço IP do servidor", "O pedido sai pelo roteador e chega ao provedor", "O pedido viaja pelo backbone (e às vezes por cabos submarinos) até o data center", "O servidor do data center envia o vídeo em pacotes de volta"],
        alternativas: [[0, 2, 1, 3, 4]],
        dicas: ["Tudo começa no navegador e termina com o vídeo voltando em pacotes.", "O backbone leva o pedido longe, até o data center."],
        explicacao: "Navegador → DNS (que troca o nome pelo IP) → roteador e provedor → backbone e cabos submarinos → data center, que devolve o vídeo em pacotes. A consulta ao DNS também passa pelo roteador e pelo provedor, por isso as duas ordens do meio são aceitas." },

      { tipo: "classificar", modo: "tabela", titulo: "Paralelismo, concorrência ou sistema distribuído?", colunaItem: "Situação", colunaResp: "P, C ou D",
        categorias: [{ id: "P", rot: "Paralelismo" }, { id: "C", rot: "Concorrência" }, { id: "D", rot: "Distribuído" }],
        itens: [
          { t: "Quatro colegas dividem as 40 questões de uma lista e cada um resolve 10 ao mesmo tempo.", c: "P", why: "Partes da tarefa feitas ao mesmo tempo." },
          { t: "19 alunos mandam imprimir ao mesmo tempo e a impressora forma uma fila.", c: "C", why: "Várias tarefas disputam o mesmo recurso." },
          { t: "Um aplicativo guarda as fotos dos usuários em servidores de vários países.", c: "D", why: "Dados espalhados em vários computadores." },
          { t: "O processador usa um núcleo para o jogo e outro para a música, ao mesmo tempo.", c: "P", why: "Núcleos diferentes trabalhando ao mesmo tempo." },
          { t: "Duas pessoas tentam comprar o último ingresso do show ao mesmo tempo e o sistema decide quem compra.", c: "C", why: "Disputa pelo mesmo recurso (o último ingresso)." }],
        dicas: ["Paralelo = ao mesmo tempo, dividindo o trabalho. Concorrência = disputa pelo mesmo recurso. Distribuído = espalhado em vários lugares."] },

      { tipo: "caminho", titulo: "Monte o Mapa da internet", robo: {"paineis": ["🗺️ Como eu monto o caminho"], "passos": [{"fala": "Olha como eu penso: o pedido sai do <b>meu aparelho</b> e vai ficando cada vez mais longe, até a nuvem.", "painel": 0, "titulo": "Do perto ao longe"}, {"fala": "Primeiro o que está <b>na minha casa</b> (a caixinha que faz o Wi-Fi).", "painel": 0, "linha": "1. o que fica em casa"}, {"fala": "Depois a <b>empresa</b> que vende a internet na cidade.", "painel": 0, "linha": "2. a empresa da cidade"}, {"fala": "Depois os <b>cabos grandes</b> entre cidades e países.", "painel": 0, "linha": "3. os cabos grandes"}, {"fala": "No fim, o <b>prédio</b> onde os vídeos ficam guardados.", "painel": 0, "linha": "4. onde o vídeo fica guardado", "marca": true}, {"fala": "Teclado e impressora não fazem parte do caminho! E quem traduz o nome do site no endereço IP fica ao lado.", "painel": null, "espera": 2600}], "fim": "Agora é a sua vez: monte o seu mapa com as peças certas. 💪"},
        enunciado: "<p>Monte o caminho que o seu pedido faz até o vídeo, do seu aparelho até a nuvem. Depois, coloque ao lado quem ajuda o navegador a achar o endereço do site.</p>",
        etapas: ["Celular ou computador", "Roteador", "Provedor", "Backbone ou cabo submarino", "Data center (nuvem)"], fixos: [0],
        extras: [{ rot: "Ao lado do caminho: quem traduz o nome do site no endereço IP para o navegador?", r: "DNS" }],
        distratores: ["Impressora", "Teclado"],
        dicas: ["O roteador é a saída da sua casa ou escola; o provedor é a empresa que leva a internet até lá.", "O backbone e os cabos submarinos levam o pedido para longe, até o prédio cheio de servidores."],
        explicacao: "Celular ou computador → roteador → provedor → backbone ou cabo submarino → data center (nuvem). Ao lado, o DNS (<em>Domain Name System</em>, Sistema de Nomes de Domínio) troca o nome do site pelo endereço IP. Impressora e teclado não fazem parte do caminho." }
    ],
    desafio: [
      { tipo: "tabela", titulo: "Uma tarefa leva 60 minutos em um núcleo. Quanto tempo leva com mais núcleos?", enunciado: "<p>Com <strong>paralelismo</strong>, a tarefa é dividida em partes iguais e cada núcleo faz uma parte <strong>ao mesmo tempo</strong>. Então, divida os 60 minutos pelo número de núcleos.</p>", robo: {"paineis": ["⚙️ Outra tarefa: 40 minutos em 1 núcleo"], "passos": [{"fala": "Olha como eu calculo com <b>outro</b> tempo. Os núcleos dividem o trabalho igualmente, então eu <b>divido</b>:", "painel": 0, "linha": "2 núcleos: 40 ÷ 2 = 20 minutos"}, {"fala": "", "painel": 0, "linha": "4 núcleos: 40 ÷ 4 = 10 minutos", "marca": true, "espera": 2400}], "fim": "Agora é a sua vez: divida os 60 minutos pelo número de núcleos! 💪"},
        colunas: ["Núcleos", "Tempo (minutos)"],
        linhas: [["1", "60 minutos"], ["2", { r: "30", tipo: "num", w: 6 }], ["3", { r: "20", tipo: "num", w: 6 }], ["6", { r: "10", tipo: "num", w: 6 }]],
        dicas: ["Divida os 60 minutos pelo número de núcleos."],
        explicacao: "60 ÷ 2 = 30 · 60 ÷ 3 = 20 · 60 ÷ 6 = 10. Isso vale quando a tarefa pode ser dividida em partes iguais." }
    ],
    turbo: [
      { tipo: "escolha", titulo: "Por que as empresas guardam cópias dos mesmos arquivos em data centers de lugares diferentes?",
        enunciado: "<p><em>Data center</em> (centro de dados) é um prédio cheio de computadores que guardam e entregam os arquivos da nuvem.</p>",
        perguntas: [
          { p: "Se um data center ficar sem energia ou pegar fogo, o que acontece com as suas fotos?", opcoes: ["Outro data center, em outro lugar, tem a cópia e continua respondendo", "As fotos somem para sempre, não tem jeito", "As fotos vão para o seu celular sozinhas"], certo: 0 },
          { p: "Como se chama um sistema com várias cópias espalhadas que trabalham juntas?", opcoes: ["Sistema distribuído", "Sistema desligado", "Sistema operacional"], certo: 0 },
          { p: "E se existisse um único data center?", opcoes: ["Uma falha nele deixaria os arquivos inacessíveis ou poderia perdê-los", "Nada mudaria", "Os arquivos ficariam mais seguros"], certo: 0 }],
        explicacao: "Para os arquivos não sumirem se um data center ficar sem energia ou pegar fogo: outro data center, em outro lugar, tem a cópia e continua respondendo. Se só existisse um, as fotos ficariam inacessíveis ou poderiam ser perdidas." }
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "não são usados", opcoes: ["não são usados", "são usados e ligam os continentes", "foram desligados"], certo: "são usados e ligam os continentes" } },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "no próprio computador, sem usar a internet", opcoes: ["no próprio computador, sem usar a internet", "em servidores de data centers, pela internet", "num pen drive"], certo: "em servidores de data centers, pela internet" } }
    ]
  },

  /* ======================= MISSÃO 3 ======================= */
  m3: {
    pratica: [
      { tipo: "permissoes", titulo: "Instalando aplicativos: permitir ou negar?", robo: {"paineis": ["📱 Outros pedidos"], "passos": [{"fala": "Olha como eu decido com <b>outros</b> exemplos. Eu faço sempre as mesmas perguntas: O aplicativo precisa mesmo disso para fazer o trabalho dele?", "painel": 0, "titulo": "Meus exemplos"}, {"fala": "“Despertador quer acessar: suas fotos” → despertador só precisa tocar na hora: não precisa de fotos.", "painel": 0, "linha": "Despertador quer acessar: suas fotos → ⛔ Negar", "marca": true, "espera": 2600}, {"fala": "“Gravador de voz quer acessar: o microfone” → para gravar a voz, ele precisa do microfone.", "painel": 0, "linha": "Gravador de voz quer acessar: o microfone → ✅ Permitir", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: para cada pedido, pense no trabalho do aplicativo. 💪"},
        enunciado: "<p>Cada aplicativo está pedindo uma permissão. Pense: <strong>ele precisa mesmo disso para funcionar?</strong></p>",
        itens: [
          { ic: "🔦", app: "Lanterna", pede: "seus contatos", c: "N", why: "Lanterna só precisa da luz do flash." },
          { ic: "🗺️", app: "Mapas", pede: "sua localização (GPS)", c: "S", why: "Sem localização, o mapa não mostra o caminho." },
          { ic: "🃏", app: "Jogo de cartas", pede: "o microfone", c: "N", why: "Para que um jogo de cartas ouviria você?" },
          { ic: "📷", app: "Câmera", pede: "a câmera", c: "S" },
          { ic: "🧮", app: "Calculadora", pede: "sua localização", c: "N", why: "Calculadora não precisa saber onde você está." }],
        explicacao: "Cada permissão é um <strong>dado pessoal</strong> que você entrega. A <strong>LGPD</strong> diz que o app só deve pedir o que precisa." },
      { id: "m3-sim-noticia", tipo: "sim_pc", titulo: "📰 Simulador: confira a notícia antes de compartilhar",
        enunciado: "<p>Chegou uma notícia assustadora. Faça o que um <strong>checador</strong> faz, no navegador de mentira: leia até o fim, procure em outro site e confie na <strong>fonte oficial</strong>. O <strong>Bit</strong> acompanha.</p>",
        abertas: ["web"], inicioWeb: "zapnoticias-urgente.blog",
        web: {
          "zapnoticias-urgente.blog": { titulo: "URGENTE!!! Escolas vão fechar", seguro: false, palavras: "escolas fechar dezembro urgente", resumo: "Fiquei sabendo por um amigo de um primo...", html: "<p style='color:#c5221f;font-weight:800;font-size:18px'>🚨 URGENTE!!! TODAS AS ESCOLAS VÃO FECHAR EM DEZEMBRO!!!</p><p>Fiquei sabendo por um amigo de um primo que o governo vai fechar todas as escolas já no mês que vem. A mídia está escondendo isso de você!!! COMPARTILHE COM TODOS OS GRUPOS ANTES QUE APAGUEM!!!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p>⚠️ Compartilhe! Compartilhe! Compartilhe!</p><p style='color:#777'>Sem autor · sem data · sem fonte</p>" },
          "noticias-bombasticas.com": { titulo: "BOMBA: escolas fechadas?", palavras: "escolas fechar dezembro bomba", resumo: "Veja o vídeo que estão tentando apagar!!!", html: "<p>Veja o vídeo que estão tentando apagar!!! (sem autor, sem data)</p>" },
          "seduc.pa.gov.br/calendario": { titulo: "Secretaria de Educação: calendário escolar", palavras: "escolas calendario dezembro aulas secretaria educacao fechar", resumo: "Calendário oficial: as aulas seguem até o fim do ano letivo.", html: "<p><b>Calendário escolar oficial.</b> As aulas seguem normalmente até o fim do ano letivo, com férias em janeiro. Nenhuma escola será fechada.</p><p style='color:#555'>Publicado pela Secretaria de Educação · 10/11/2026</p>" }
        },
        passos: [
          { faca: "Leia a notícia <b>até o fim</b>: role a página com a <b>rodinha do mouse</b> (ou a barra de rolagem).", ok: "rolar:fim:zapnoticias-urgente.blog", dica: "Coloque o mouse em cima do texto e gire a rodinha para baixo." },
          { faca: "Viu? Sem autor, sem data, sem fonte, cheia de pressa e <b>⚠️ Não seguro</b>. Antes de compartilhar, confira em outro lugar: abra uma <b>nova guia</b> no <b>+</b>.", ok: "novaAba", onde: "web:novaaba" },
          { faca: "No Buscador, pesquise <b>escolas fechar dezembro</b> e aperte <b>Enter</b>.", ok: "/^buscar:.*escola/", onde: "web:busca" },
          { faca: "Entre no resultado da <b>fonte oficial</b>: o site do governo (termina em <b>.gov.br</b>).", ok: "link:seduc.pa.gov.br/calendario", erros: { "link:*": "Esse não é fonte oficial: sem autor nem data. Volte (←) e procure o site que termina em <b>.gov.br</b>." } },
          { faca: "A fonte oficial diz que <b>nenhuma escola vai fechar</b>: a notícia era falsa! Feche a guia da notícia falsa no <b>✕</b> dela (a primeira guia), sem compartilhar.", ok: "fecharAba", onde: "aba:x:0" }
        ],
        fimMsg: "Você checou como um profissional: leu até o fim, desconfiou da falta de autor e data, pesquisou e confiou na fonte oficial. Notícia falsa não passa por você!",
        explicacao: "Antes de compartilhar: leia até o fim, veja quem escreveu e quando, desconfie de pressa e letras maiúsculas, pesquise em outros sites e procure a fonte oficial." }
    ],
    bonus: [
      
    ],
    basico: [
      { tipo: "classificar", modo: "tabela", titulo: "O aplicativo precisa dessa permissão para funcionar?", colunaItem: "Aplicativo e permissão pedida", colunaResp: "S ou N",
        categorias: [{ id: "S", rot: "Sim" }, { id: "N", rot: "Não" }],
        itens: [
          { t: "Lanterna pede os seus contatos", c: "N", why: "Uma lanterna não precisa de contatos: desconfie." },
          { t: "Mapa com GPS pede a sua localização", c: "S", why: "Sem localização, o mapa não sabe onde você está." },
          { t: "Calculadora pede o microfone", c: "N" },
          { t: "Câmera de fotos pede a câmera", c: "S" },
          { t: "Jogo de cartas pede localização e contatos", c: "N" }],
        explicacao: "Pergunte sempre: ele precisa disso para funcionar? GPS (<em>Global Positioning System</em>, Sistema de Posicionamento Global) é o que descobre onde o aparelho está." },

      { tipo: "classificar", modo: "tabela", titulo: "Dado pessoal, dado sensível ou não é dado pessoal?", explicacao: "Pessoal: nome completo e endereço (identificam você). Sensível: impressão digital (biometria) e doença (saúde). Não é dado pessoal: previsão do tempo e resultado do jogo.", colunaItem: "Informação", colunaResp: "P, S ou N",
        categorias: [{ id: "P", rot: "Pessoal" }, { id: "S", rot: "Sensível" }, { id: "N", rot: "Não é" }],
        itens: [
          { t: "Nome completo", c: "P" }, { t: "Previsão do tempo da cidade", c: "N" },
          { t: "Impressão digital usada para desbloquear o celular", c: "S", why: "Biometria é dado sensível." },
          { t: "Endereço de casa", c: "P" }, { t: "Informação sobre uma doença", c: "S", why: "Saúde é dado sensível." },
          { t: "Resultado do jogo de futebol de ontem", c: "N" }],
        dicas: ["Dado sensível pede cuidado extra: saúde, religião, opinião política, origem étnica e biometria."] },

      { tipo: "tabela", titulo: "Faça as perguntas do checador", robo: {"paineis": ["📰 Outra notícia", "🔍 Perguntas do checador"], "passos": [{"fala": "Olha como eu checo uma notícia <b>diferente</b>:", "painel": 0, "linha": "“ATENÇÃO!!! Beber água gelada causa gripe na hora! Repasse!” (sem autor, sem data)"}, {"fala": "Quem publicou? Não tem nome nenhum:", "painel": 1, "linha": "Quem publicou? Ninguém: fonte anônima", "marca": true}, {"fala": "Tem data? Procuro e não acho:", "painel": 1, "linha": "Tem data? Não tem", "marca": true}, {"fala": "O título é exagerado? Tem “ATENÇÃO!!!” e “Repasse!”:", "painel": 1, "linha": "Exagerado? Sim: quer que eu espalhe sem pensar", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: faça as mesmas perguntas para a notícia da tarefa! 💪"},
        enunciado: "<p class=\"regra\">“URGENTE!!! Cientistas confirmam que celular carregando na tomada explode se for usado à noite. Compartilhe antes que apaguem!” <em>(sem autor, sem data, sem link de jornal)</em></p>",
        colunas: ["Pergunta do checador", "Resposta"],
        linhas: [
          ["Quem publicou?", { op: ["Não diz: é uma fonte anônima", "Um jornal conhecido", "Cientistas com nome e universidade"], r: "Não diz: é uma fonte anônima" }],
          ["Tem data?", { op: ["Não tem data", "Tem a data de hoje"], r: "Não tem data" }],
          ["O título é exagerado?", { op: ["Sim: “URGENTE!!!” e “compartilhe antes que apaguem”", "Não, é um título calmo"], r: "Sim: “URGENTE!!!” e “compartilhe antes que apaguem”" }]],
        explicacao: "Sem autor, sem data, sem outra fonte confirmando e com título exagerado: são quatro sinais de alerta." },
      { tipo: "escolha", titulo: "Você compartilharia essa mensagem? Por quê?",
        perguntas: [
          { p: "Você compartilharia essa mensagem?", opcoes: ["Não", "Sim"], certo: 0, why: "Sem autor, sem data e com título exagerado: são sinais de notícia falsa." },
          { p: "Por quê?", opcoes: ["Porque não tem autor, não tem data e o título é exagerado: são sinais de notícia falsa", "Porque é urgente e pode salvar vidas", "Porque todo mundo já está compartilhando"], certo: 0,
            why: "Antes de compartilhar, confira: quem publicou, quando, se outra fonte confirma e se o título é exagerado." }] },

      { tipo: "classificar", modo: "tabela", titulo: "Boa regra ou não faz sentido para a nossa sala?", explicacao: "Boas regras protegem os computadores, os dados e os colegas: usar só o que o professor pediu, não comer perto do computador, não mexer nos arquivos dos colegas e chamar o professor quando travar. Passar a senha e mexer nos cabos não fazem sentido.", colunaItem: "Regra", colunaResp: "B ou N",
        categorias: [{ id: "B", rot: "Boa regra" }, { id: "N", rot: "Não faz sentido" }],
        itens: [
          { t: "Usar só os programas e sites que o professor pediu.", c: "B" },
          { t: "Compartilhar a minha senha com a turma toda.", c: "N", why: "Senha é pessoal: quem sabe a sua senha pode agir no seu nome." },
          { t: "Não comer nem beber perto do computador.", c: "B" },
          { t: "Mexer nos cabos e nas peças do computador.", c: "N", why: "Um cabo solto pode deixar o computador ou a internet sem funcionar." },
          { t: "Não mexer no computador nem nos arquivos dos colegas.", c: "B" },
          { t: "Chamar o professor quando o computador travar.", c: "B" }],
        dicas: ["Uma boa regra protege os computadores, os dados e os colegas."] },
      {tipo:  "completar", titulo:  "Termos de uso da nossa sala de informática", texto:  "Ao usar este computador, eu concordo em: usar só os **programas** pedidos pelo professor; não **comer** nem beber perto do computador; não mexer nos **arquivos** dos colegas; não passar a minha **senha** para ninguém; e não mexer nos **cabos**.", explicacao:  "Termos de uso são as regras que eu aceito para usar um serviço. Boas regras protegem os <b>computadores</b>, os <b>dados</b> e os <b>colegas</b>."}
    ],
    desafio: [
      { tipo: "info", titulo: "Termos de uso do aplicativo inventado FotoTop",
        html: "<p class=\"regra\">“O FotoTop coleta seu nome, e-mail, data de nascimento, fotos publicadas e localização. Podemos compartilhar esses dados com empresas parceiras de publicidade. Você pode apagar sua conta a qualquer momento em Configurações. Uso permitido a partir de 13 anos.”</p>" },
      { tipo: "sinais", titulo: "a) Quais dados o FotoTop coleta?", explicacao: "O trecho diz: nome, e-mail, data de nascimento, fotos publicadas e localização. Não fala de CPF nem de contatos.",
        opcoes: [{ t: "Nome", certo: true }, { t: "E-mail", certo: true }, { t: "Data de nascimento", certo: true }, { t: "Fotos publicadas", certo: true }, { t: "Localização", certo: true },
          { t: "CPF", certo: false, why: "O trecho não fala de CPF." }, { t: "Lista de contatos", certo: false, why: "O trecho não fala de contatos." }] },
      { tipo: "escolha", titulo: "b), c) e d) Leia de novo e responda",
        perguntas: [
          { p: "b) Com quem ele pode compartilhar os dados?", opcoes: ["Com empresas parceiras de publicidade", "Com ninguém", "Só com a escola"], certo: 0 },
          { p: "c) É possível apagar a conta? Onde?", opcoes: ["Sim, em Configurações", "Não, nunca", "Só mandando carta"], certo: 0 },
          { p: "d) Qual é a idade mínima?", opcoes: ["13 anos", "10 anos", "18 anos"], certo: 0 }],
        explicacao: "Ler os termos de uso mostra o que você está aceitando antes de clicar em “Aceito”." }
    ],
    turbo: [
      {tipo:  "escolha", titulo:  "Pegada digital: o que fica de você na internet", perguntas:  [{p:  "O que é pegada digital?", opcoes:  ["O rastro do que publicamos, curtimos e comentamos na internet", "A marca do dedo na tela do celular", "Um aplicativo que conta passos"], certo:  0, why:  "Tudo o que fazemos na internet deixa rastro, e esse rastro pode ficar guardado por anos."}, {p:  "Qual publicação pode atrapalhar alguém daqui a 5 anos?", opcoes:  ["Um vídeo zoando um colega", "Uma foto do pôr do sol", "Uma mensagem de parabéns para a avó"], certo:  0, why:  "Uma empresa ou uma escola pode ver esse vídeo no futuro e ter uma má impressão da pessoa."}], explicacao:  "Antes de publicar, pense: <b>eu ficaria tranquilo se isso aparecesse daqui a 5 anos?</b>"}
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "precisa", opcoes: ["precisa", "não precisa"], certo: "não precisa" } },
      { v: true },
      { v: false, corrigir: { trecho: "é sempre verdadeira", opcoes: ["é sempre verdadeira", "pode ser falsa"], certo: "pode ser falsa" } },
      { v: true }
    ]
  },

  /* ======================= MISSÃO 4 ======================= */
  m4: {
    pratica: [
      { id: "m4-sim-termos", tipo: "sim_pc", titulo: "📜 Simulador: cookies e termos de uso do FotoTop",
        enunciado: "<p>Você vai baixar o aplicativo inventado <strong>FotoTop</strong>. Antes, decida os <strong>cookies</strong> e leia os <strong>termos de uso</strong> no navegador de mentira. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app",
        campos: { "ck:anuncios": true, "ck:parceiros": true, "ck:essenciais": true },
        web: {
          "fototop.app": { titulo: "FotoTop: baixe grátis", html: "<p style='font-size:40px'>📸✨</p><p>Edite e publique fotos com filtros incríveis!</p><div style='position:sticky;bottom:0;background:#fff;border:2px solid #1a73e8;border-radius:10px;padding:10px 12px;margin-top:30px'><b>🍪 Nós usamos cookies</b><br>Para anúncios personalizados e para compartilhar dados com parceiros.<br><button data-ev='aceitar' data-k='pg:aceitar' class='pri'>Aceitar tudo</button><button data-ev='personalizar' data-k='pg:personalizar' data-ir='fototop.app/cookies'>Personalizar</button></div>" },
          "fototop.app/cookies": { titulo: "FotoTop: escolha os cookies", html: "<p><label><input type='checkbox' data-ev='essenciais' disabled> Essenciais (o site precisa para funcionar)</label></p><p><label><input type='checkbox' data-ev='anuncios' data-k='pg:anuncios'> Anúncios personalizados</label></p><p><label><input type='checkbox' data-ev='parceiros' data-k='pg:parceiros'> Compartilhar meus dados com parceiros</label></p><button data-ev='salvar' data-k='pg:salvar' data-ir='fototop.app/termos' class='pri'>Salvar escolhas</button>" },
          "fototop.app/termos": { titulo: "FotoTop: termos de uso", html: "<p data-ev='cl-conta' data-k='pg:cl-conta'>1. Você pode apagar a sua conta a qualquer momento em Configurações.</p><p data-ev='cl-idade' data-k='pg:cl-idade'>2. Uso permitido a partir de 13 anos.</p><p data-ev='cl-coleta' data-k='pg:cl-coleta'>3. Coletamos nome, email e data de nascimento para criar a sua conta.</p><p style='color:#666'>4. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>5. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>6. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>7. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>8. Regras gerais de uso, privacidade, segurança e atualizações do aplicativo.</p><p style='color:#666'>Parágrafo 1: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 2: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 3: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 4: a empresa pode atualizar estes termos e avisará por email.</p><p style='color:#666'>Parágrafo 5: a empresa pode atualizar estes termos e avisará por email.</p><p data-ev='cl-venda' data-k='pg:cl-venda'>9. Podemos <b>compartilhar suas fotos e sua localização com empresas parceiras de publicidade</b>.</p><p style='margin-top:16px'><button data-ev='aceitar-termos' data-k='pg:aceitar-termos'>Li e aceito</button><button data-ev='recusar' data-k='pg:recusar' class='pri'>Não aceito</button></p>" }
        },
        passos: [
          { faca: "Apareceu o aviso de <b>cookies</b>. Em vez de aceitar tudo sem pensar, clique em <b>Personalizar</b>.", ok: "pagina:personalizar", onde: "pg:personalizar", erros: { "pagina:aceitar": "Calma! <b>Aceitar tudo</b> libera anúncios e o envio dos seus dados para parceiros. Clique em <b>Personalizar</b> para escolher." } },
          { faca: "Desmarque <b>Anúncios personalizados</b> (clique na caixinha para tirar o ✔).", ok: { estado: "marcado", nome: "anuncios", valor: false }, onde: "pg:anuncios" },
          { faca: "Desmarque também <b>Compartilhar meus dados com parceiros</b>.", ok: { estado: "marcado", nome: "parceiros", valor: false }, onde: "pg:parceiros" },
          { faca: "Clique em <b>Salvar escolhas</b>. Os essenciais ficam: sem eles o site não funciona.", ok: "pagina:salvar", onde: "pg:salvar" },
          { faca: "Agora os <b>termos de uso</b>. Role <b>até o fim</b> antes de decidir.", ok: "rolar:fim:fototop.app/termos" },
          { faca: "Clique na frase dos termos que pede <b>ATENÇÃO</b> (a que mais mexe com os seus dados).", ok: "pagina:cl-venda", onde: "pg:cl-venda", erros: { "pagina:cl-*": "Essa frase é tranquila. Procure a que fala de <b>compartilhar suas fotos e localização</b> com empresas." } },
          { faca: "Os termos compartilhar suas fotos e localização com publicidade. Você não é obrigado a aceitar: clique em <b>Não aceito</b>.", ok: "pagina:recusar", onde: "pg:recusar", erros: { "pagina:aceitar-termos": "Você aceitou sem concordar com a frase 9! Neste treino, clique em <b>Não aceito</b>. Na vida real, converse com a família antes de aceitar." } }
        ],
        fimMsg: "Você personalizou os cookies, leu os termos até o fim, achou a frase perigosa e decidiu com consciência. Isso é cuidar dos seus dados!",
        explicacao: "Cookies: “Personalizar” deixa você escolher; só os essenciais são necessários. Termos de uso: leia até o fim, procure o que coletam e com quem compartilham. Pela LGPD, você tem direito de saber e de apagar os seus dados." },
      { id: "m4-pratica-1", tipo: "sinais", titulo: "Antes de clicar em “Li e aceito”: o que o JogoMania faz?", robo: {"paineis": ["📜 Outro termo de uso inventado"], "passos": [{"fala": "Olha com <b>outra</b> situação: “O DesenhaJá é para maiores de 10 anos. Não compartilhamos seus dados. Você pode apagar sua conta em Ajustes.” Eu leio item por item e pergunto: “isso aparece aqui?”", "painel": 0, "titulo": "Minha situação"}, {"fala": "“É para maiores de 10 anos” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ É para maiores de 10 anos", "marca": true, "espera": 1800}, {"fala": "“Dá para apagar a conta em Ajustes” aparece? <b>Sim</b> → eu marco ✔.", "painel": 0, "linha": "✔ Dá para apagar a conta em Ajustes", "marca": true, "espera": 1800}, {"fala": "“Compartilha dados com parceiros” aparece? <b>Não</b> → deixo sem marcar.", "painel": 0, "linha": "☐ Compartilha dados com parceiros", "espera": 1800}], "fim": "Agora é a sua vez: marque só o que está escrito nos termos do JogoMania. 💪"},
        enunciado: `<div class="regra"><p><strong>📜 Termos de uso do JogoMania</strong> (jogo inventado, para treinar)</p><ol>
          <li>O JogoMania é <strong>gratuito</strong> e destinado a maiores de <strong>13 anos</strong>.</li>
          <li>Usamos o que você joga, curte e pesquisa para mostrar <strong>anúncios personalizados</strong>.</li>
          <li>Ao publicar fotos e vídeos no JogoMania, você nos concede <strong>licença para usar esse conteúdo</strong> na divulgação do jogo.</li>
          <li>Podemos <strong>compartilhar seus dados com parceiros</strong> de publicidade.</li>
          <li>Os termos podem <strong>mudar a qualquer momento</strong>; avisaremos por e-mail.</li>
          <li>Você pode <strong>excluir sua conta</strong> em Configurações → Conta.</li></ol></div>
          <p>Marque <strong>tudo o que é verdade</strong> sobre o JogoMania, segundo os termos.</p>`,
        opcoes: [
          { t: "Ele mostra propaganda escolhida pelo que eu jogo e pesquiso", certo: true },
          { t: "Ele pode usar as fotos e vídeos que eu publicar para divulgar o jogo", certo: true },
          { t: "Ele pode passar os meus dados para parceiros de publicidade", certo: true },
          { t: "As regras podem mudar depois que eu aceitar", certo: true },
          { t: "Ele nunca mostra propaganda, porque é grátis", certo: false, why: "O item 2 diz que ele mostra anúncios personalizados." },
          { t: "Não dá para apagar a conta", certo: false, why: "O item 6 diz que dá: Configurações → Conta." }],
        explicacao: "Itens 2, 3, 4 e 5: propaganda personalizada, licença sobre o que você publica, compartilhamento com parceiros e termos que mudam. O jogo é grátis, mas é pago com <strong>propaganda e dados</strong>." }
    ],
    bonus: [
      { id: "m4-bonus-1", tipo: "escolha", titulo: "⭐ Bônus: quem paga o grátis?",
        perguntas: [
          { p: "Um aplicativo é grátis. Como a empresa ganha dinheiro?", opcoes: ["Com anúncios e com os dados dos usuários", "Não ganha nada", "Com o dinheiro da escola"], certo: 0, why: "Quando é grátis, quem paga é a propaganda (feita com os seus dados)." },
          { p: "Qual direito da LGPD você usa ao pedir: “apaguem a minha conta”?", opcoes: ["Apagar (eliminação)", "Corrigir", "Saber"], certo: 0, why: "A LGPD garante o direito de pedir que apaguem os seus dados." }
        ] }
    ],
    basico: [
      { id: "m4-basico-1", tipo: "classificar", modo: "tabela", titulo: "Cada frase dos termos: tranquila ou atenção?", colunaItem: "Frase nos termos", colunaResp: "👍 ou ⚠️",
        categorias: [{ id: "T", rot: "👍 Tranquila" }, { id: "A", rot: "⚠️ Atenção" }],
        itens: [
          { t: "“Você pode excluir sua conta e seus dados em Configurações.”", c: "T", why: "Dá para sair e apagar os dados: bom para você." },
          { t: "“Podemos vender seus dados para outras empresas.”", c: "A", why: "Seus dados vão para empresas que você nem conhece." },
          { t: "“Usaremos sua localização o tempo todo, mesmo com o aplicativo fechado.”", c: "A", why: "Localização o tempo todo mostra onde você mora e anda." },
          { t: "“Avisaremos por e-mail antes de mudar estes termos.”", c: "T", why: "Você fica sabendo da mudança e pode decidir." },
          { t: "“Você nos concede licença para usar suas fotos em propagandas.”", c: "A", why: "A sua foto pode aparecer em propaganda." },
          { t: "“Coletamos apenas o seu e-mail para criar a conta.”", c: "T", why: "Pede só o necessário." }],
        explicacao: "⚠️ Atenção: vender dados, localização o tempo todo, licença para usar suas fotos. 👍 Tranquila: dá para excluir a conta, avisa antes de mudar, pede só o necessário." },
      { id: "m4-sim-direitos", tipo: "sim_pc", titulo: "⚖️ Simulador: use os seus direitos da LGPD",
        enunciado: "<p>Na conta do aplicativo inventado <strong>FotoTop</strong>, use os seus direitos: saber, corrigir e apagar. O <strong>Bit</strong> guia você.</p>",
        abertas: ["web"], inicioWeb: "fototop.app/conta",
        web: {
          "fototop.app/conta": { titulo: "FotoTop: minha conta", html: "<p>👤 <b>Minha conta</b></p><button data-ev='ver' data-k='pg:ver' data-ir='fototop.app/meus-dados'>👁️ Ver meus dados</button><button data-ev='apagar' data-k='pg:apagar' data-ir='fototop.app/apagar'>🗑️ Apagar minha conta</button>" },
          "fototop.app/meus-dados": { titulo: "FotoTop: meus dados", html: "<p><b>Dados que guardamos sobre você:</b></p><p>Nome: Ana Souza</p><p>Data de nascimento: <b>01/01/1990</b> (errada!)</p><label class='campo'>Corrigir data de nascimento<input data-campo='nasc' data-k='pg:nasc' placeholder='dd/mm/aaaa'></label><button data-ev='corrigir' data-k='pg:corrigir' data-ir='fototop.app/conta' class='pri'>Salvar correção</button>" },
          "fototop.app/apagar": { titulo: "FotoTop: apagar conta", html: "<p>Tem certeza? Suas fotos e dados serão apagados.</p><button data-ev='confirmar' data-k='pg:confirmar' class='pri'>Sim, apagar meus dados</button>" }
        },
        passos: [
          { faca: "Direito de <b>SABER</b>: clique em <b>👁️ Ver meus dados</b>.", ok: "pagina:ver", onde: "pg:ver" },
          { faca: "A data de nascimento está errada! Direito de <b>CORRIGIR</b>: digite uma data no formato <b>dd/mm/aaaa</b> (ex.: 15/03/2013).", ok: { estado: "campo", nome: "nasc", regex: "^\\d{2}/\\d{2}/\\d{4}$" }, onde: "pg:nasc" },
          { faca: "Clique em <b>Salvar correção</b>.", ok: "pagina:corrigir", onde: "pg:corrigir" },
          { faca: "Você desistiu do FotoTop. Direito de <b>APAGAR</b>: clique em <b>🗑️ Apagar minha conta</b>.", ok: "pagina:apagar", onde: "pg:apagar" },
          { faca: "Confirme: <b>Sim, apagar meus dados</b>.", ok: "pagina:confirmar", onde: "pg:confirmar" }
        ],
        fimMsg: "Você usou três direitos da LGPD: saber, corrigir e apagar os seus dados!",
        explicacao: "Pela LGPD (Lei Geral de Proteção de Dados), você tem direito de saber quais dados guardam, corrigir, apagar e retirar o consentimento." },
      { id: "m4-basico-2", tipo: "ligar", titulo: "Os seus direitos pela LGPD: ligue cada direito ao que ele permite",
        enunciado: "<p>Clique no direito e depois no que ele permite fazer.</p>",
        pares: [{ a: "Saber", b: "Perguntar quais dados a empresa tem sobre mim" }, { a: "Corrigir", b: "Pedir para arrumar um dado errado, como o endereço" },
          { a: "Apagar", b: "Pedir para a empresa excluir os meus dados" }, { a: "Retirar o consentimento", b: "Desistir da autorização que eu dei" }],
        explicacao: "A LGPD (Lei Geral de Proteção de Dados) garante: saber, corrigir, pedir para apagar e retirar o consentimento." },
      { id: "m4-basico-3", tipo: "escolha", titulo: "Grátis mesmo?",
        perguntas: [
          { p: "Se o aplicativo é grátis, como ele costuma ganhar dinheiro?", opcoes: ["Com propaganda, usando os meus dados para escolher os anúncios", "Ele nunca ganha dinheiro", "Cobrando da escola"], certo: 0, why: "Serviço grátis costuma ser pago com propaganda e dados." },
          { p: "Clicar em “Li e aceito” sem ler significa:", opcoes: ["Concordar com tudo o que está escrito, mesmo sem ter lido", "Não concordar com nada", "Que posso mudar as regras depois"], certo: 0, why: "É um contrato: o clique vale como concordância." },
          { p: "Chegou o aviso “Atualizamos nossos termos”. O que isso quer dizer?", opcoes: ["O contrato mudou; vale a pena ver o que mudou", "O aplicativo foi apagado", "Nada mudou"], certo: 0 },
          { p: "Para uma criança de 10 anos criar uma conta, o que a LGPD exige?", opcoes: ["A autorização de pelo menos um dos pais ou responsáveis", "Nada, basta clicar em Aceito", "Que ela mostre o CPF"], certo: 0, why: "Para crianças de até 12 anos, a lei exige o consentimento dos pais ou responsáveis." }],
        explicacao: "Grátis costuma ser pago com propaganda e dados; aceitar é concordar com o contrato; aviso de atualização = o contrato mudou; criança de até 12 anos precisa da autorização dos pais." }
    ],
    desafio: [
      { tipo: "info", titulo: "Dois jogos, dois termos de uso",
        html: `<div class="tabela-wrap"><table><thead><tr><th></th><th>🎮 Jogo A</th><th>🎮 Jogo B</th></tr></thead><tbody>
          <tr><td>Dados coletados</td><td>Apelido e e-mail</td><td>Nome, telefone, contatos e localização</td></tr>
          <tr><td>Compartilhamento</td><td>“Não compartilhamos seus dados.”</td><td>“Podemos compartilhar com parceiros.”</td></tr>
          <tr><td>Apagar a conta</td><td>Em Configurações, com os dados</td><td>Não informa</td></tr>
          <tr><td>Mudanças nos termos</td><td>Avisa antes, por e-mail</td><td>“Podem mudar sem aviso.”</td></tr></tbody></table></div>` },
      { tipo: "escolha", titulo: "Qual jogo protege melhor os seus dados?",
        perguntas: [
          { p: "Qual jogo protege melhor os seus dados?", opcoes: ["O Jogo A", "O Jogo B", "Os dois protegem igual"], certo: 0 },
          { p: "Qual é o principal motivo?", opcoes: ["Pede só apelido e e-mail, não compartilha e deixa apagar a conta", "Tem mais fases", "Pede o telefone para mandar prêmios"], certo: 0 },
          { p: "No Jogo B, qual parte é mais preocupante?", opcoes: ["Pega contatos e localização e pode compartilhar com parceiros", "Ter termos de uso", "Pedir um apelido"], certo: 0 }],
        explicacao: "O Jogo A pede só o necessário, não compartilha, deixa apagar a conta e avisa antes de mudar. O Jogo B pega contatos e localização, compartilha com parceiros, não diz como apagar e muda sem aviso." }
    ],
    turbo: [
      {tipo:  "memoria", titulo:  "Jogo da memória: as perguntas antes de aceitar os termos", pares:  [{a:  "Que dados ele pega?", b:  "Para saber o que o aplicativo vai saber sobre mim"}, {a:  "Com quem ele compartilha?", b:  "Para saber se outras empresas vão receber os meus dados"}, {a:  "Consigo apagar a minha conta?", b:  "Para poder sair e apagar os meus dados quando quiser"}, {a:  "Vai mostrar propaganda?", b:  "Para saber se vão usar os meus gostos para vender coisas"}], explicacao:  "Antes de clicar em “Aceito”, pergunte: que <b>dados</b> ele pega, com quem <b>compartilha</b>, se dá para <b>apagar</b> a conta e se tem <b>propaganda</b>."}
    ],
    vf: [
      { v: true },
      { v: false, corrigir: { trecho: "nunca usa os meus dados para nada", opcoes: ["nunca usa os meus dados para nada", "costuma usar os meus dados para propaganda"], certo: "costuma usar os meus dados para propaganda" }, why: "Serviço grátis costuma ser pago com propaganda e dados." },
      { v: true },
      { v: true },
      { v: false, corrigir: { trecho: "nunca podem mudar", opcoes: ["nunca podem mudar", "podem mudar"], certo: "podem mudar" }, why: "Os termos podem ser atualizados; por isso vale ler o aviso." }
    ]
  },

  /* ======================= 🔁 REVISÃO PARA A PROVA =======================
     Cada atividade tem "de" (a missão). O portal mostra só as missões que a turma estudou. */
  rv: {
    basico: [
      { tipo: "relembre", de: "m1" },
      { tipo: "escolha", de: "m1", titulo: "M1 · Buscar e ordenar",
        perguntas: [
          { p: "A busca que olha um item de cada vez, do primeiro em diante, é a:", opcoes: ["Busca sequencial", "Busca binária", "Bolha"], certo: 0 },
          { p: "A busca binária só funciona quando a lista está:", opcoes: ["Ordenada", "Vazia", "Com números repetidos"], certo: 0 },
          { p: "A cada tentativa, a busca binária:", opcoes: ["Olha o meio e descarta metade", "Olha o último item", "Volta para o começo"], certo: 0 },
          { p: "O método da bolha:", opcoes: ["Compara vizinhos e troca os que estão fora de ordem", "Apaga os itens repetidos", "Sorteia a ordem"], certo: 0 }],
        explicacao: "Sequencial olha um por um; binária precisa da lista ordenada e descarta metade; bolha compara e troca vizinhos em passadas." },
      { tipo: "tabela", de: "m1", titulo: "M1 · Lista [3, 8, 12, 20, 25, 31, 40] (ordenada)", robo: {"paineis": ["🔎 Outra lista: [2, 5, 9, 14, 20]"], "passos": [{"fala": "Na busca <b>binária</b>, eu começo pelo número do <b>meio</b>. São 5 números; o do meio é o 3º:", "painel": 0, "linha": "Meio: 9", "marca": true}, {"fala": "Na <b>sequencial</b>, para achar o 14 eu olho um por um: 2, 5, 9, 14.", "painel": 0, "linha": "Sequencial até o 14: 4 números", "marca": true, "espera": 2600}], "fim": "Agora é a sua vez: ache o meio e conte com a lista da tarefa! 💪"},
        linhas: [["Para achar 31 pela busca binária, qual número ela olha primeiro (o do meio)?", { r: "20", tipo: "num", w: 4 }], ["Na busca sequencial, quantos números ela olha até achar o 31?", { r: "6", tipo: "num", w: 4 }]],
        explicacao: "O meio da lista de 7 itens é o 4º: 20. Na sequencial: 3, 8, 12, 20, 25, 31 = 6 olhadas." },
      { tipo: "relembre", de: "m2" },
      { tipo: "ligar", de: "m2", titulo: "M2 · Ligue cada termo ao seu significado",
        pares: [{ a: "DNS", b: "Traduz o nome do site no endereço IP" }, { a: "Data center", b: "Prédio cheio de servidores" }, { a: "Nuvem", b: "Usar servidores pela internet" }, { a: "Cabo submarino", b: "Liga os continentes por baixo do mar" }, { a: "Paralelismo", b: "Partes feitas ao mesmo tempo, em vários núcleos" }],
        explicacao: "DNS = agenda da internet; data center = prédio de servidores; nuvem = usar esses servidores; cabos submarinos ligam continentes; paralelismo = ao mesmo tempo." },
      { tipo: "escolha", de: "m2", titulo: "M2 · Internet por dentro",
        perguntas: [
          { p: "Duas pessoas mandam imprimir ao mesmo tempo e a impressora faz uma fila. Isso é:", opcoes: ["Concorrência", "Paralelismo", "DNS"], certo: 0 },
          { p: "A empresa que liga as casas e a escola à internet é o:", opcoes: ["Provedor", "Backbone", "Navegador"], certo: 0 }],
        explicacao: "Concorrência = disputa pelo mesmo recurso (fila de impressão). Provedor liga as casas à rede; backbone são as ligações principais." },
      { tipo: "relembre", de: "m3" },
      { tipo: "classificar", modo: "tabela", de: "m3", titulo: "M3 · Dado pessoal, dado sensível ou não é dado pessoal?", colunaItem: "Informação", colunaResp: "Tipo",
        categorias: [{ id: "P", rot: "Dado pessoal" }, { id: "S", rot: "Dado sensível" }, { id: "N", rot: "Não é dado pessoal" }],
        itens: [{ t: "Telefone", c: "P" }, { t: "Religião", c: "S" }, { t: "Impressão digital", c: "S" }, { t: "Endereço", c: "P" }, { t: "Previsão do tempo de amanhã", c: "N" }],
        explicacao: "Dado pessoal identifica você; sensível pede cuidado extra (saúde, religião, biometria…); previsão do tempo não identifica ninguém." },
      { tipo: "escolha", de: "m3", titulo: "M3 · Antes de compartilhar",
        perguntas: [{ p: "Qual NÃO é uma das 4 perguntas do checador?", opcoes: ["Quantas curtidas tem?", "Quem publicou?", "Outros confirmam?"], certo: 0 }, { p: "O rastro de tudo o que publico, curto e comento é a:", opcoes: ["Pegada digital", "LGPD", "Permissão"], certo: 0 }],
        explicacao: "As 4 perguntas: quem publicou, quando, outros confirmam e como está escrita. Curtidas não provam nada. Pegada digital = o rastro." },
      { tipo: "relembre", de: "m4" },
      { tipo: "classificar", modo: "tabela", de: "m4", titulo: "M4 · Frase dos termos: tranquila ou atenção?", colunaItem: "Frase", colunaResp: "👍 ou ⚠️",
        categorias: [{ id: "T", rot: "👍 Tranquila" }, { id: "A", rot: "⚠️ Atenção" }],
        itens: [{ t: "“Podemos vender seus dados.”", c: "A" }, { t: "“Você pode excluir sua conta e seus dados.”", c: "T" }, { t: "“Os termos podem mudar sem aviso.”", c: "A" }, { t: "“Coletamos só o seu e-mail.”", c: "T" }],
        explicacao: "⚠️ vender dados e mudar sem aviso. 👍 excluir a conta e pedir só o necessário." },
      { tipo: "escolha", de: "m4", titulo: "M4 · Termos de uso",
        perguntas: [{ p: "Clicar em “Li e aceito” é:", opcoes: ["Concordar com um contrato", "Só fechar a janela", "Apagar a conta"], certo: 0 }, { p: "Pela LGPD, posso pedir para a empresa:", opcoes: ["Apagar os meus dados", "Me dar o aplicativo de graça", "Ler as mensagens dos outros"], certo: 0 }],
        explicacao: "Os termos são um contrato. A LGPD dá o direito de saber, corrigir, pedir para apagar e retirar o consentimento." }
    ],
    desafio: [
      { tipo: "escolha", de: "m1", titulo: "Desafio M1", perguntas: [{ p: "Numa lista de 1000 nomes em ordem alfabética, qual busca é mais rápida?", opcoes: ["Binária, porque descarta metade a cada tentativa", "Sequencial, porque olha um por um", "As duas são iguais"], certo: 0, why: "A binária olha o meio e descarta metade: com 1000 nomes, umas 10 tentativas." }] },
      { tipo: "escolha", de: "m2", titulo: "Desafio M2", perguntas: [{ p: "Você digita o nome de um site. Quem descobre o endereço IP do servidor?", opcoes: ["O DNS", "O monitor", "O cabo de energia"], certo: 0, why: "O DNS é como a agenda de contatos da internet: troca o nome do site pelo IP." }] },
      { tipo: "escolha", de: "m3", titulo: "Desafio M3", perguntas: [{ p: "Uma lanterna pede acesso aos seus contatos. O que fazer?", opcoes: ["Negar: lanterna não precisa de contatos para funcionar", "Permitir, porque todo app pede", "Dar a senha também"], certo: 0, why: "Lanterna só precisa da luz do flash: contatos não têm nada a ver." }] },
      { tipo: "escolha", de: "m4", titulo: "Desafio M4", perguntas: [{ p: "O aplicativo é grátis. Quem costuma pagar?", opcoes: ["A propaganda, usando os seus dados", "Ninguém", "A escola"], certo: 0, why: "O aplicativo grátis ganha dinheiro com propaganda escolhida pelos seus dados." }] }
    ],
    turbo: [
      { tipo: "escolha", de: "m1", titulo: "Turbo · Simulado M1", perguntas: [{ p: "Ordenar é:", opcoes: ["Colocar os itens em ordem", "Apagar itens", "Procurar um item"], certo: 0, why: "Ordenar é colocar em ordem (crescente, decrescente ou alfabética)." }] },
      { tipo: "escolha", de: "m2", titulo: "Turbo · Simulado M2", perguntas: [{ p: "Guardar fotos na nuvem é guardar:", opcoes: ["Em servidores de um data center, pela internet", "No céu", "Só no pen drive"], certo: 0, why: "A nuvem são computadores (servidores) de um data center, acessados pela internet." }] },
      { tipo: "escolha", de: "m3", titulo: "Turbo · Simulado M3", perguntas: [{ p: "Desinformação é:", opcoes: ["Informação falsa ou distorcida espalhada como verdade", "Uma lei", "Um tipo de cabo"], certo: 0, why: "Desinformação é informação falsa ou distorcida espalhada como se fosse verdade." }] },
      { tipo: "escolha", de: "m4", titulo: "Turbo · Simulado M4", perguntas: [{ p: "Chegou o aviso “Atualizamos nossos termos”. Isso quer dizer que:", opcoes: ["O contrato mudou", "O aplicativo acabou", "Nada mudou"], certo: 0, why: "Os termos são um contrato: se mudaram, vale a pena ver o que mudou." }] }
    ]
  },

  /* ======================= PROJETO FINAL ======================= */
  pf: {
    basico: [
      { tipo: "info", titulo: "Confira as suas missões", html: "<p>Volte à lista de missões da apostila: cada missão com o <strong>Básico concluído</strong> aparece com ✔. Se faltar alguma (por exemplo, porque você faltou à aula), faça o Básico dela agora. O professor acompanha tudo pelo painel.</p>" },
      {tipo:  "completar", titulo:  "Complete as frases sobre o que você aprendeu em cada tema", texto:  "🗂️ Na **busca binária**, olho o **meio** de uma lista em ordem e descarto a metade em que a resposta não pode estar. ☁️ Na **nuvem**, os arquivos ficam em servidores de data centers, e o **DNS** traduz o nome do site no endereço IP. 🔍 Os meus **dados pessoais** são protegidos por uma lei, a **LGPD**.", explicacao:  "Listas, internet por dentro e dados pessoais: os três temas do bimestre!"}
    ],
    desafio: [
      { tipo: "ligar", titulo: "Desafio do bimestre: ligue cada termo ao seu significado", explicacao: "Cada termo é de um tema do bimestre. Se errou algum, volte ao 📖 O que significa? da missão daquele termo e leia de novo.", porRodada: 6,
        enunciado: "<p>Um termo de cada tema do bimestre. Clique no termo e depois no significado dele.</p>",
        pares: [{ a: "Busca binária", b: "Olha o meio e descarta metade; só funciona em lista ordenada" }, { a: "Método da bolha", b: "Compara vizinhos e troca os que estão fora de ordem" }, { a: "DNS (Sistema de Nomes de Domínio)", b: "Traduz o nome do site no endereço IP" }, { a: "Paralelismo", b: "Partes de uma tarefa feitas ao mesmo tempo, em núcleos diferentes" }, { a: "LGPD (Lei Geral de Proteção de Dados)", b: "Lei brasileira que protege os dados pessoais" }, { a: "Pegada digital", b: "Rastro do que publicamos, curtimos e comentamos" }] }
    ],
    turbo: [
      {tipo:  "escolha", titulo:  "A missão de que eu mais gostei", enunciado:  "<p>Não tem resposta certa nem errada: toque no que é verdade para você. O professor vê as respostas no painel.</p>", perguntas:  [{p:  "Qual foi a missão de que você mais gostou?", opcoes:  ["Missão 1 – Listas: buscar e ordenar", "Missão 2 – Internet por dentro: nuvem e paralelo", "Missão 3 – Dados pessoais e informação confiável", "Missão 4 – Termos de uso: o que eu aceitei?"], certo:  -1}, {p:  "Por que você gostou dela?", opcoes:  ["Aprendi uma coisa nova que vou usar no dia a dia", "As atividades e os jogos foram divertidos", "Consegui fazer sozinho(a)", "Gostei do vídeo e das simulações"], certo:  -1}], explicacao:  "Obrigado por contar! A sua opinião ajuda o professor a deixar as próximas missões ainda melhores."}
    ]
  }
});

/* ============================================================
   🌀 MODELO EM ESPIRAL NAS MISSÕES AINDA NÃO DADAS (22/11/2026, pedido do professor)
   Só as missões listadas em espiralMissoes no catálogo. Ganham o ❓ gancho, o 🔁 Lembra? (automático), o 🛠️ "Onde eu uso
   isso?" prático, o ♾️ Laboratório e o 🏁 Fechamento. ⚖️ EQUILÍBRIO DA NOTA: o Básico, o Desafio e o Turbo NÃO mudam
   (mesmas tarefas, mesma regra do visto, mesmos 0,25 por Desafio/Turbo): quem já fez as outras missões não perde nada.
   ============================================================ */
(function () {
  const A = PORTAL.atividades["informatica-8ano-4bim"]; if (!A) return;
  const perg = (titulo, enun, ...ps) => ({ tipo: "escolha", titulo, enunciado: `<p>${enun}</p>`, perguntas: ps.map(x => ({ p: x[0], opcoes: x[1], certo: 0, why: x[2] })) });
  const VIDA = (...ps) => perg("🛠️ E na vida real, o que você faria?", "Use o que você aprendeu hoje para responder.", ...ps);
  const msg = (titulo, app, botoes, enun, itens, okMsg, expl) => ({ tipo: "mensagens", titulo, app, botoes: botoes.map(([id, rot]) => ({ id, rot })), enunciado: `<p>${enun}</p>`,
    itens: itens.map(([t, c, why]) => ({ de: "", t, c, why })), okMsg, explicacao: expl });
  const rota = (titulo, enun, etapas, okMsg, expl) => ({ tipo: "rota", titulo, enunciado: `<p>${enun}</p>`, etapas: etapas.map(([ic, t]) => ({ ic, t })), okMsg, explicacao: expl });
  /* ---------- M4 · termos de uso ---------- */
  A.m4.gancho = { html: "<p>📝 Para jogar o jogo novo, a Bia clicou em <b>“Li e aceito”</b> sem ler nada. Uma semana depois, começou a ver propagandas de tênis em todo lugar.</p><p>🤔 O que ela aceitou? Aquele clique vale como contrato?</p>" };
  A.m4.aplicar = [
    msg("🛠️ Na vida real: o que diz esta frase dos termos?", "📝 Termos de uso do jogo", [["I", "🎂 Idade mínima"], ["D", "📋 Dados coletados"], ["C", "🤝 Compartilhamento"], ["P", "📢 Publicidade"], ["X", "🗑️ Apagar a conta"]],
      "Use a tabela do 💡 Para começar: cada frase fala de qual assunto?",
      [["“O serviço é destinado a maiores de 13 anos.”", "I", "Fala da idade mínima."], ["“Coletamos nome, telefone, localização e contatos.”", "D", "Fala dos dados coletados."],
        ["“Podemos compartilhar seus dados com parceiros.”", "C", "Outras empresas podem receber os dados."], ["“Usamos seus dados para mostrar anúncios personalizados.”", "P", "Propaganda feita para você."],
        ["“Você pode excluir sua conta em Configurações.”", "X", "Mostra se dá para sair."]],
      "Leitor de termos! 📝", "Antes de aceitar: que dados ele pega? Com quem compartilha? Consigo apagar a conta?"),
    VIDA(
      ["Clicar em “Li e aceito” sem ler…", ["Vale como contrato: você concorda com tudo", "Não vale nada", "Só vale para adultos"], "Aquele clique é um <b>contrato</b>."],
      ["Por que a Bia começou a ver propaganda de tênis?", ["Os dados dela ajudam a escolher a propaganda", "Por acaso", "Porque o jogo quebrou"], "No serviço grátis, <b>quem paga é a propaganda</b>, escolhida com os seus dados."],
      ["Pela LGPD, a Bia pode…", ["Pedir para apagar os dados dela", "Nunca saber quais dados a empresa tem", "Ser obrigada a aceitar tudo"], "A LGPD dá o direito de saber, corrigir, <b>apagar</b> e retirar o consentimento."])
  ];
})();

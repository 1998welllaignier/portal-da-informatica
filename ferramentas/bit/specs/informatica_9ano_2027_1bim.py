from comum import R
GRAFO = R(["🗺️ Outro grafo: A —1— B —2— C e A —4— C"], [
  ("Olha como eu analiso um grafo <b>diferente</b>. Vértices são os lugares; arestas, as ligações:", 0, "3 vértices (A, B, C) · 3 arestas"),
  ("O <b>grau</b> é quantas arestas saem de um vértice:", 0, "Grau de A = 2 (A–B e A–C)", True),
  ("Para o <b>caminho mais curto</b>, eu somo os pesos de cada caminho e fico com o menor:", 0, "A → B → C = 1 + 2 = 3 · A → C direto = 4", True, 2800)],
  "Agora é a sua vez: faça o mesmo com o grafo da tarefa! 💪")
ESCOLA = R(["🏫 Outro grafo: Entrada —1— Quadra —2— Sala · Quadra —2— Refeitório —1— Sala"], [
  ("<b>Maior grau</b>: quem tem mais ligações?", 0, "Quadra: 3 ligações", True),
  ("<b>Mais curto</b> da Entrada até a Sala: somo os pesos.", 0, "Entrada → Quadra → Sala = 1 + 2 = 3 min"),
  ("Se um corredor <b>fecha</b> (Quadra–Sala), procuro outro caminho e somo de novo:", 0, "Entrada → Quadra → Refeitório → Sala = 1 + 2 + 1 = 4 min", True, 2800)],
  "Agora é a sua vez: faça o mesmo com o grafo da escola da tarefa! 💪")
LAMPADA = R(["💡 Outro autômato: a lâmpada com interruptor"], [
  ("Um autômato tem <b>estados</b> e <b>entradas</b>. A lâmpada tem 2 estados: Apagada e Acesa. A entrada é “apertar”.", 0, "Apagada + apertar → Acesa", True),
  ("", 0, "Acesa + apertar → Apagada", True, 1200),
  ("Para seguir várias entradas, eu vou <b>uma de cada vez</b>, sempre a partir do estado de agora. Começando apagada:", 0, "apertar → Acesa · apertar → Apagada · apertar → Acesa", False, 2800)],
  "Agora é a sua vez: siga as regras do autômato da tarefa, uma entrada de cada vez! 💪")
BIT = {
"Os caminhos da Casa até a Escola": GRAFO, "M1 · Caminho mais curto": GRAFO,
"A rua fechada": R(["🚧 No grafo A —1— B —2— C e A —4— C, a rua B–C fechou"], [
  ("Quando uma aresta <b>some</b>, os caminhos que passavam por ela não valem mais:", 0, "A → B → C: não dá mais (B–C fechou)"),
  ("Sobra o outro caminho:", 0, "A → C direto = 4 min", True, 2600)],
  "Agora é a sua vez: ache o caminho que sobrou no bairro da tarefa! 💪"),
"O mata-mata como árvore": R(["🏆 Outro torneio: 4 times"], [
  ("As <b>folhas</b> são os times do começo:", 0, "Folhas: 4 times"),
  ("Cada jogo junta 2 times, e o vencedor sobe um nível:", 0, "Semifinal: 2 jogos"), ("", 0, "Final: 1 jogo", False, 900),
  ("Somo todos os jogos:", 0, "Total: 2 + 1 = 3 jogos", True, 2600)],
  "Agora é a sua vez: faça com os 8 times das quartas de final! 💪"),
"Quantas opções cabem?": R(["❓ O jeito de pensar"], [
  ("Cada pergunta de sim ou não <b>divide</b> as opções em 2 grupos. Então cada pergunta a mais <b>dobra</b> o que dá para separar.", 0, "Cada pergunta: × 2"),
  ("Exemplo com 5 perguntas:", 0, "2 × 2 × 2 × 2 × 2 = 32 opções", True, 2600)],
  "Agora é a sua vez: dobre para 1, 2, 3 e 4 perguntas! 💪"),
"Quantas perguntas?": R(["❓ Outro exemplo: 8 opções"], [
  ("A cada pergunta, as opções caem pela <b>metade</b>. Escrevo até sobrar 1:", 0, "8 → 4 → 2 → 1"),
  ("Conto as setas: são as perguntas.", 0, "8 opções → 3 perguntas", True, 2600)],
  "Agora é a sua vez: faça com 16, 32 e 1.000! 💪"),
"Mão na massa: lista de vizinhos": R(["🕸️ Outras arestas: Casa–Rua · Rua–Praça · Rua–Loja"], [
  ("Os <b>vizinhos</b> de um vértice são os que estão ligados a ele por uma aresta. Procuro o nome em todas as arestas:", 0, "Vizinhos da Rua: Casa, Praça, Loja", True),
  ("", 0, "Vizinhos da Casa: Rua", False, 2400)],
  "Agora é a sua vez: ache os vizinhos de cada lugar da escola! 💪"),
"Grau = tamanho da lista de vizinhos": R(["🔢 Usando a lista de vizinhos"], [
  ("O grau é só <b>contar</b> quantos vizinhos tem na lista:", 0, "Rua: Casa, Praça, Loja → grau 3", True), ("", 0, "Casa: Rua → grau 1", False, 2400)],
  "Agora é a sua vez: conte os vizinhos de cada lugar da tarefa! 💪"),
"Complete a tabela de transição da catraca": LAMPADA, "Siga as entradas": LAMPADA, "M5 · Catraca": LAMPADA,
"O autômato da porta automática": R(["🚰 Outro autômato: a torneira automática"], [
  ("Estados: <b>fechada</b> e <b>aberta</b>. Entradas: “mão chega” e “mão sai”.", 0, "Fechada + mão chega → Aberta", True),
  ("", 0, "Aberta + mão chega → continua Aberta", False, 1000), ("", 0, "Aberta + mão sai → Fechada", True, 1000),
  ("", 0, "Fechada + mão sai → continua Fechada", False, 2400)],
  "Agora é a sua vez: complete a tabela da porta automática! 💪"),
"O personagem do jogo": R(["🐶 Outro personagem: o cachorro do jogo"], [
  ("Estados: <b>em pé</b>, <b>sentado</b> e <b>deitado</b>. Para cada comando, eu olho a regra e mudo o estado:", 0, "Começa em pé"),
  ("", 0, "“senta” → sentado", False, 900), ("", 0, "“deita” → deitado", False, 900), ("", 0, "“levanta” → em pé", True, 2400)],
  "Agora é a sua vez: siga as entradas do personagem da tarefa, uma por vez! 💪"),
"Siga os tiques": R(["🔁 Outro ciclo: manhã → tarde → noite"], [
  ("Um ciclo de <b>3 estados</b> volta ao começo a cada 3 tiques. Começa de manhã:", 0, "1 tique: tarde"), ("", 0, "2 tiques: noite", False, 800), ("", 0, "3 tiques: manhã de novo", True),
  ("Para muitos tiques, eu tiro os grupos de 3: 5 tiques = 3 + 2 → igual a 2 tiques:", 0, "5 tiques: noite", True, 2800)],
  "Agora é a sua vez: siga os tiques do semáforo! 💪"),
"O semáforo de 4 estados": R(["🔁 Ciclo de 3 estados: manhã → tarde → noite"], [
  ("Com 3 estados, o ciclo se repete a cada 3 tiques. Para 4 tiques, tiro um ciclo inteiro (3) e sobra 1:", 0, "4 tiques = 3 + 1 → tarde", True, 2600)],
  "Agora é a sua vez: no semáforo de 4 estados, o ciclo se repete a cada 4! 💪"),
"Perguntas sobre o grafo da escola": [ESCOLA], "O corredor em reforma": ESCOLA,
"A rota de fuga": R(["🚪 Outro grafo: todos saem pela Entrada"], [
  ("Para cada lugar, eu acho o caminho <b>mais curto até a Entrada</b> e somo os pesos:", 0, "Quadra → Entrada = 1 min"),
  ("", 0, "Sala → Quadra → Entrada = 2 + 1 = 3 min", True, 1200), ("", 0, "Refeitório → Quadra → Entrada = 2 + 1 = 3 min", False, 2600)],
  "Agora é a sua vez: ache o tempo de cada lugar até o Portão! 💪"),
}

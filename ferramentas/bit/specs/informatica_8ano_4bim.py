from comum import R, FRASE_TEMA
BIT = {
"Busca sequencial: procure o 31": R(["🔎 Outra lista: [4, 9, 15, 22, 30]"], [
  ("Olha como eu conto com <b>outra</b> lista. Quero achar o <b>22</b>, olhando um por um desde a posição 1:", 0, "4? não (1ª comparação)"),
  ("", 0, "9? não (2ª comparação)", False, 700), ("", 0, "15? não (3ª comparação)", False, 700), ("", 0, "22? ACHEI! (4ª comparação)", True),
  ("Foram <b>4 comparações</b>: conto cada número que eu olhei, inclusive o que eu achei.", None, None, False, 2400)],
  "Agora é a sua vez: conte as comparações até achar o 31! 💪"),
"Agora sem ajuda: escreva as passadas de [5, 2, 8, 1]": R(["🫧 Bolha com outra lista: [4, 1, 3, 2]"], [
  ("Olha como eu faço o método da bolha com <b>outra</b> lista. Comparo só <b>dois vizinhos</b> por vez:", 0, "#Original: 4, 1, 3, 2"),
  ("4 e 1: o da esquerda é maior, <b>troca</b>! 4 e 3: troca! 4 e 2: troca!", 0, "Passada 1: 1, 3, 2, 4  (3 trocas)", True),
  ("O maior (4) já foi para o fim. Agora de novo: 1 e 3 ficam; 3 e 2 <b>trocam</b>; 3 e 4 ficam.", 0, "Passada 2: 1, 2, 3, 4  (1 troca)", True),
  ("Ficou em ordem! Em cada passada eu escrevo como a lista ficou <b>no fim</b>.", None, None, False, 2600)],
  "Agora é a sua vez: faça as passadas de [5, 2, 8, 1]! 💪"),
"Quantas tentativas, no máximo, para achar um número de 1 a 1.000?": R(["✂️ Outro exemplo: de 1 a 100"], [
  ("Olha como eu conto com <b>outro</b> tamanho. A cada tentativa, a lista cai pela <b>metade</b>:", 0, "100 → 50 → 25 → 13 → 7 → 4 → 2 → 1"),
  ("Conto as divisões até sobrar <b>1 número</b>: são 7 setas.", 0, "De 1 a 100: no máximo 7 tentativas", True, 2600)],
  "Agora é a sua vez: faça o mesmo com 1.000! 💪"),
"Uma tarefa leva 60 minutos em um núcleo. Quanto tempo leva com mais núcleos?": R(["⚙️ Outra tarefa: 40 minutos em 1 núcleo"], [
  ("Olha como eu calculo com <b>outro</b> tempo. Os núcleos dividem o trabalho igualmente, então eu <b>divido</b>:", 0, "2 núcleos: 40 ÷ 2 = 20 minutos"),
  ("", 0, "4 núcleos: 40 ÷ 4 = 10 minutos", True, 2400)],
  "Agora é a sua vez: divida os 60 minutos pelo número de núcleos! 💪"),
"Faça as perguntas do checador": R(["📰 Outra notícia", "🔍 Perguntas do checador"], [
  ("Olha como eu checo uma notícia <b>diferente</b>:", 0, "“ATENÇÃO!!! Beber água gelada causa gripe na hora! Repasse!” (sem autor, sem data)"),
  ("Quem publicou? Não tem nome nenhum:", 1, "Quem publicou? Ninguém: fonte anônima", True),
  ("Tem data? Procuro e não acho:", 1, "Tem data? Não tem", True),
  ("O título é exagerado? Tem “ATENÇÃO!!!” e “Repasse!”:", 1, "Exagerado? Sim: quer que eu espalhe sem pensar", True, 2600)],
  "Agora é a sua vez: faça as mesmas perguntas para a notícia da tarefa! 💪"),
"Termos de uso da nossa sala de informática": R(["📜 Termos de uso de OUTRO lugar: a biblioteca"], [
  ("Olha como eu escrevo regras para <b>outro</b> lugar, a biblioteca. Cada regra é curta e protege alguma coisa:", 0, "Devolver o livro no prazo"),
  ("", 0, "Não riscar nem dobrar as páginas", False, 800), ("", 0, "Falar baixinho para não atrapalhar", False, 800),
  ("Repare: linguagem simples, que qualquer colega entende.", None, None, False, 2400)],
  "Agora é a sua vez: escreva 5 regras para a <b>sala de informática</b>! 💪"),
"O que é pegada digital? Dê um exemplo de publicação que poderia atrapalhar alguém daqui a 5 anos.": R(["👣 Como montar a resposta"], [
  ("Primeiro eu explico <b>o que é</b>, com as minhas palavras:", 0, "É o rastro que deixo na internet com o que publico, curto e comento."),
  ("Depois dou um <b>exemplo</b> e digo <b>por que</b> atrapalharia. Vou usar um exemplo meu:", 0, "Um vídeo zoando um colega pode aparecer quando eu procurar um estágio.", True, 2600)],
  "Agora é a sua vez: explique com as suas palavras e dê um exemplo <b>seu</b>! 💪"),
"As minhas 3 perguntas antes de aceitar os termos": R(["❓ Perguntas antes de aceitar"], [
  ("Olha como eu penso. Cada pergunta é sobre uma coisa <b>diferente</b>. Uma sobre os <b>dados</b>:", 0, "Ele usa a minha localização?"),
  ("Uma sobre <b>propaganda</b>:", 0, "Vai me mostrar anúncios pelo que eu faço?"),
  ("E uma sobre o que eu <b>publico</b>:", 0, "As minhas fotos ficam públicas?", False, 2400)],
  "Agora é a sua vez: escreva 3 perguntas <b>suas</b>, cada uma sobre um assunto diferente! 💪"),
"M1 · Lista [3, 8, 12, 20, 25, 31, 40] (ordenada)": R(["🔎 Outra lista: [2, 5, 9, 14, 20]"], [
  ("Na busca <b>binária</b>, eu começo pelo número do <b>meio</b>. São 5 números; o do meio é o 3º:", 0, "Meio: 9", True),
  ("Na <b>sequencial</b>, para achar o 14 eu olho um por um: 2, 5, 9, 14.", 0, "Sequencial até o 14: 4 números", True, 2600)],
  "Agora é a sua vez: ache o meio e conte com a lista da tarefa! 💪"),
"Escreva uma frase sobre o que você aprendeu em cada tema": FRASE_TEMA,
}

from comum import R
LISTA = R(["📋 Outra lista: IDADES = 12 · 15 · 11"], [
  ("Olha como eu leio uma lista <b>diferente</b>. As posições começam no <b>1</b>:", 0, "IDADES[1] = 12"), ("", 0, "IDADES[2] = 15", True, 900), ("", 0, "IDADES[3] = 11", False, 900),
  ("Tamanho = quantos itens: <b>3</b>. Em que posição está o 11? Na <b>3</b>.", 0, "Tamanho 3 · o 11 está na posição 3", True, 2600)],
  "Agora é a sua vez: leia a lista da tarefa do mesmo jeito! 💪")
BUSCA = R(["🔎 Outra lista: 5 · 8 · 2 · 6"], [
  ("Na busca sequencial eu olho <b>um por um</b> e conto. Procurando o 2:", 0, "5? não · 8? não · 2? ACHEI → 3 comparações", True),
  ("E se o número <b>não está</b> na lista, como o 9? Tenho que olhar <b>todos</b> para ter certeza:", 0, "9 → 4 comparações (a lista toda)", True, 2600)],
  "Agora é a sua vez: conte as comparações da tarefa! 💪")
SELECAO = R(["🏅 Seleção com outra lista: 3, 1, 2"], [
  ("A cada rodada, eu acho o <b>menor do que sobrou</b> e troco com a próxima posição.", 0, "#Original: 3, 1, 2"),
  ("1ª rodada: o menor é o 1. Troco com a posição 1 (o 3):", 0, "1ª: 1, 3, 2", True),
  ("2ª rodada: do que sobrou (3, 2), o menor é o 2. Troco com a posição 2:", 0, "2ª: 1, 2, 3", True, 2600)],
  "Agora é a sua vez: faça as rodadas com a lista da tarefa! 💪")
MULTIPLICA = R(["🔺 Outro fractal: o quadrado que vira 4"], [
  ("Olha um fractal <b>diferente</b>: a cada nível, cada quadrado vira <b>4</b> quadrados menores. Então eu <b>multiplico por 4</b>:", 0, "Nível 0: 1"),
  ("", 0, "Nível 1: 1 × 4 = 4", False, 900), ("", 0, "Nível 2: 4 × 4 = 16", True, 900), ("", 0, "Nível 3: 16 × 4 = 64", True, 2400)],
  "Agora é a sua vez: descubra por quanto multiplicar no fractal da tarefa e continue a conta! 💪")
BIT = {
"Leia a lista NOTAS": [LISTA], "M1 · Lista": LISTA,
"Inserir no meio: todo mundo anda": R(["🚶 Outra fila: Léo · Mia"], [
  ("Olha o que acontece quando o Rui entra na <b>posição 1</b> de outra fila:", 0, "#Antes: 1 Léo · 2 Mia"),
  ("O Rui ocupa a posição 1, e <b>todo mundo dali para trás anda uma posição</b>:", 0, "1 Rui", True), ("", 0, "2 Léo", False, 700), ("", 0, "3 Mia", False, 2400)],
  "Agora é a sua vez: faça a Gabi entrar na fila da tarefa! 💪"),
"Conte na mão: quantas notas azuis?": R(["🔢 Outra lista: 6 · 2 · 7 (azul = 5 ou mais)"], [
  ("O contador começa em <b>0</b>. Para cada nota, eu pergunto: passa no teste?", 0, "6 ≥ 5? sim → contador 1", True),
  ("", 0, "2 ≥ 5? não → contador continua 1", False, 1200), ("", 0, "7 ≥ 5? sim → contador 2", True, 2400)],
  "Agora é a sua vez: teste cada nota da tarefa e atualize o contador! 💪"),
"Várias operações seguidas": R(["📋 Outra lista: 1, 2"], [
  ("Faço <b>uma operação de cada vez</b>, na ordem, e escrevo como a lista ficou:", 0, "(1) inserir 3 no fim → 1, 2, 3"),
  ("", 0, "(2) remover o 1 → 2, 3", False, 1200), ("", 0, "(3) inserir 0 na posição 1 → 0, 2, 3", True, 2600)],
  "Agora é a sua vez: faça as operações da tarefa, uma por vez! 💪"),
"Conte as comparações": BUSCA, "M3 · Busca sequencial": BUSCA,
"Listas grandes": R(["🔎 Outra lista: 50 nomes"], [
  ("Na busca sequencial, se o meu nome é o <b>12º</b>, eu olho 12 nomes:", 0, "O 12º → 12 comparações"),
  ("Se o nome <b>não está</b>, olho a lista toda. Esse é o <b>pior caso</b>:", 0, "Não está → 50 comparações", True, 2600)],
  "Agora é a sua vez: pense do mesmo jeito com as listas da tarefa! 💪"),
"Compare as buscas": R(["⚖️ Outra lista: 4 itens (ordenada)"], [
  ("<b>Sequencial</b>, no pior caso: olho todos.", 0, "Sequencial: 4"),
  ("<b>Binária</b>: a cada olhada a lista cai pela metade. Conto os números da corrente:", 0, "Binária: 4 → 2 → 1 = 3 olhadas", True, 2600)],
  "Agora é a sua vez: faça o mesmo com 8, 100 e 1.000 itens (o 💡 Para começar ajuda)! 💪"),
"Escreva os meios": R(["🎯 Outra lista: 1 · 3 · 5 · 7 · 9 · 11 · 13 (7 itens), procurando o 11"], [
  ("1ª tentativa: o meio de 1 a 7 é a posição 4:", 0, "Posições 1 a 7 → meio = 7"),
  ("11 é maior que 7, então jogo fora a metade da esquerda. Sobram as posições 5 a 7:", 0, "Posições 5 a 7 → meio = 11", True),
  ("Achei o 11 na 2ª tentativa!", None, None, False, 2400)],
  "Agora é a sua vez: ache os meios procurando o 89! 💪"),
"Listas enormes": R(["✂️ Outro tamanho: 8 itens"], [
  ("A cada comparação a lista cai pela metade. Escrevo a corrente até sobrar 1:", 0, "8 → 4 → 2 → 1"),
  ("Conto os números da corrente: são <b>4 olhadas</b> no pior caso.", 0, "8 itens → 4 comparações", True, 2400)],
  "Agora é a sua vez: faça a corrente de 16, 32… e conte! 💪"),
"Escreva as passadas de 4, 3, 2, 1": R(["🫧 Bolha com outra lista: 3, 1, 2"], [
  ("Comparo dois vizinhos; se o da esquerda for <b>maior</b>, troco:", 0, "#Original: 3, 1, 2"),
  ("3 e 1: troca! 3 e 2: troca!", 0, "Passada 1: 1, 2, 3", True), ("Na passada 2 ninguém troca: está em ordem!", 0, "Passada 2: 1, 2, 3", False, 2400)],
  "Agora é a sua vez: escreva as passadas de 4, 3, 2, 1! 💪"),
"Agora decrescente: 2, 7, 4, 9": R(["🫧 Decrescente com outra lista: 1, 3, 2"], [
  ("Em ordem <b>decrescente</b>, a regra vira: troco quando o da esquerda for <b>menor</b>.", 0, "#Original: 1, 3, 2"),
  ("1 e 3: o 1 é menor, troca! Depois 1 e 2: troca de novo!", 0, "Passada 1: 3, 2, 1", True, 2600)],
  "Agora é a sua vez: faça as passadas de 2, 7, 4, 9 em ordem decrescente! 💪"),
"Siga a contagem recursiva": R(["🔁 Outra função: pular(n)"], [
  ("pular(n): <b>se n = 0</b>, mostra “Chegou!”; <b>senão</b>, mostra n e chama pular(n − 1). Começo com pular(2):", 0, "pular(2) → mostra 2"),
  ("", 0, "pular(1) → mostra 1", False, 1000), ("Chegou no zero: é o <b>caso base</b>, que faz a função parar!", 0, "pular(0) → mostra “Chegou!”", True, 2600)],
  "Agora é a sua vez: siga contar(3)! 💪"),
"Recursão da soma": R(["🔁 Outra função: dobro(n)"], [
  ("dobro(n): <b>se n = 1</b>, a resposta é 2 (caso base); <b>senão</b>, 2 + dobro(n − 1). Eu calculo <b>de baixo para cima</b>:", 0, "dobro(1) = 2"),
  ("", 0, "dobro(2) = 2 + dobro(1) = 2 + 2 = 4", False, 1200), ("", 0, "dobro(3) = 2 + dobro(2) = 2 + 4 = 6", True, 2600)],
  "Agora é a sua vez: calcule soma(1), soma(2)… de baixo para cima! 💪"),
"Mão na massa: ache o menor": R(["🔎 Outros exemplos"], [
  ("Olho todos os itens e guardo o menor que eu já vi:", 0, "6, 3, 8 → o menor é 3", True),
  ("Com nomes, o “menor” é o que vem <b>primeiro no alfabeto</b>:", 0, "Téo, Lia, Rui → Lia", True, 2400)],
  "Agora é a sua vez: ache o menor de cada lista da tarefa! 💪"),
"Seleção passo a passo: 8, 3, 6, 1": [SELECAO], "Seleção: 7, 2, 9, 4": SELECAO, "M7 · Seleção": SELECAO,
"Seleção em ordem alfabética": R(["🔤 Outra lista: Rui, Ana, Lia"], [
  ("Com nomes, o menor é o que vem <b>primeiro no alfabeto</b>. 1ª rodada: Ana. Troco com a posição 1:", 0, "1ª: Ana, Rui, Lia", True),
  ("2ª rodada: do que sobrou (Rui, Lia), o menor é Lia. Troco com a posição 2:", 0, "2ª: Ana, Lia, Rui", True, 2600)],
  "Agora é a sua vez: ordene Davi, Bia, Elisa, Ana e Caio! 💪"),
"Quem troca menos?": R(["⚖️ Outra lista: 3, 2, 1"], [
  ("🫧 <b>Bolha</b>: conto cada troca de vizinhos.", 0, "Passada 1: 2 trocas · Passada 2: 1 troca = 3 trocas"),
  ("🏅 <b>Seleção</b>: conto as trocas de cada rodada.", 0, "Rodada 1: 1 ↔ 3 · depois já está em ordem = 1 troca", True, 2600)],
  "Agora é a sua vez: conte as trocas com 4, 3, 2, 1! 💪"),
"Mão na massa: o triângulo de Sierpinski": MULTIPLICA, "A árvore fractal": MULTIPLICA, "Níveis maiores": MULTIPLICA, "M8 · Fractais": MULTIPLICA,
}

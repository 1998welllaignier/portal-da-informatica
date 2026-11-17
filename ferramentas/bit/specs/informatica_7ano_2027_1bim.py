from comum import R
LISTA = R(["📋 Outra lista: cores"], [
  ("Olha como eu leio uma lista <b>diferente</b>. A posição começa no <b>1</b>:", 0, "1 azul"), ("", 0, "2 verde", False, 600), ("", 0, "3 roxo", False, 1000),
  ("Item da posição 2? Desço até o número 2: <b>verde</b>. Tamanho? Conto os itens: <b>3</b>.", 0, "Posição 2 = verde · Tamanho = 3", True),
  ("Se eu <b>adicionar no fim</b> o amarelo, ele vira o item 4, e o tamanho passa a ser 4.", 0, "4 amarelo (novo, no fim)", True, 2600)],
  "Agora é a sua vez: numere a lista da tarefa e responda! 💪")
BIT = {
"Leia a lista": [LISTA], "M2 · Lista": LISTA,
"Campos e valores do contato": [R(["🗂️ Outra ficha: um livro"], [
  ("Olha uma ficha <b>diferente</b>. Cada linha tem um <b>campo</b> (o nome da informação) e um <b>valor</b> (o que está guardado):", 0, "título = Receitas da Vovó"),
  ("", 0, "páginas = 40", False, 700), ("", 0, "ano = 2025", False, 900),
  ("O valor do campo páginas é <b>40</b>. E a ficha tem <b>3 campos</b>: título, páginas e ano.", 0, "páginas → 40 · 3 campos", True, 2600)],
  "Agora é a sua vez: leia a ficha do contato! 💪")],
"Em dupla: o plano do nosso programa": R(["📝 O plano de outro programa: a lista de compras"], [
  ("Olha como eu planejo um programa <b>diferente</b>, antes de montar:", 0, "#Nome: Lista de compras"),
  ("O que ele mostra na tela:", 0, "Mostra os itens e quantos faltam comprar"),
  ("As partes, em ordem (decomposição):", 0, "1. criar a lista · 2. adicionar itens · 3. mostrar cada item"),
  ("Os blocos que vou usar:", 0, "lista, adicionar no fim, para cada", True, 2600)],
  "Agora é a sua vez: planejem o programa de <b>vocês</b>, com outra ideia! 💪"),
"Corrija o quiz à mão": [R(["✅ Outro quiz"], [
  ("Olha como eu corrijo um quiz <b>diferente</b>, comparando <b>posição por posição</b>:", 0, "Gabarito: A · C · B"), ("", 0, "Jogador:  A · B · B", False, 1200),
  ("1ª: A e A, certa. 2ª: C e B, <b>errada</b>. 3ª: B e B, certa.", 0, "Acertos: 2 · Erros: 1", True, 2600)],
  "Agora é a sua vez: compare o gabarito com as respostas do jogador! 💪")],
}

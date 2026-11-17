from comum import R
BIT = {
"Digite aqui no portal": R(["⌨️ Como eu digito"], [
  ("Olha como eu faço. Clico dentro da caixa e digito letra por letra. Para separar as palavras, aperto a <b>barra de espaço</b> (a tecla comprida embaixo):", 0, "Meu nome é Bit e eu sou um robô."),
  ("Para a letra maiúscula do começo, seguro o <b>Shift</b> e aperto a letra. E o <b>é</b> com acento: aperto o acento <b>´</b> e depois o <b>e</b>.", None, None, False, 3000)],
  "Agora é a sua vez: digite a frase com o <b>seu</b> nome! 💪"),
"O grafo das amizades": R(["👥 Outra turma de amigos"], [
  ("Olha como eu conto com <b>outros</b> amigos: Lia — Téo, Lia — Rui, Lia — Ivo, Téo — Rui.", 0, "#Cada amizade é uma linha"),
  ("Conto as linhas que saem de cada nome:", 0, "Lia: 3 amigos", True), ("", 0, "Téo: 2 amigos", False, 700), ("", 0, "Rui: 2 amigos", False, 700), ("", 0, "Ivo: 1 amigo", True, 1600),
  ("Quem tem mais amigos é a Lia. Quem tem só um é o Ivo!", None, None, False, 2400)],
  "Agora é a sua vez: conte as linhas de cada nome da tarefa! 💪"),
"2 coisas que viram lista e 2 coisas que viram grafo": R(["📋 Lista: um depois do outro", "🕸️ Grafo: coisas ligadas"], [
  ("Olha como eu penso. Numa <b>lista</b>, as coisas ficam em fila, uma depois da outra:", 0, "a fila da merenda"),
  ("Num <b>grafo</b>, as coisas estão <b>ligadas</b> entre si:", 1, "as estações do metrô ligadas pelos trilhos", False, 2400)],
  "Agora é a sua vez: pense em 2 listas e 2 grafos <b>seus</b>, diferentes dos meus! 💪"),
"Complete os algoritmos de escolha": R(["🔀 SE… ENTÃO… SENÃO…"], [
  ("Olha como eu completo um <b>outro</b>:", 0, "#SE estiver frio,"),
  ("No ENTÃO vai o que eu faço se for SIM:", 0, "ENTÃO visto o casaco,", True), ("No SENÃO, o que eu faço se for NÃO:", 0, "SENÃO vou de camiseta.", True, 2400)],
  "Agora é a sua vez: complete os seus, sempre com ENTÃO e SENÃO! 💪"),
"Complete a tabela do E e do OU": R(["🤔 O jeito de pensar"], [
  ("Olha com frases de verdade. A: “Hoje é sábado”. B: “Está chovendo”.", 0, "#A E B · A OU B"),
  ("Com <b>E</b>, a frase toda só é <b>V</b> se as <b>duas</b> partes forem V. Se uma for F, tudo vira F.", 0, "E: precisa das DUAS verdadeiras", True),
  ("Com <b>OU</b>, basta <b>uma</b> ser V para a frase toda ser V. Só é F se as duas forem F.", 0, "OU: basta UMA verdadeira", True, 2800)],
  "Agora é a sua vez: use essas duas regras em cada linha da tabela! 💪"),
"Crie frases sobre você com NÃO, E e OU, e diga se cada uma é V ou F": R(["✍️ Frases sobre o Bit"], [
  ("Olha as minhas frases, sobre <b>mim</b>, o Bit:", 0, "Eu NÃO tenho pernas. (V)"), ("", 0, "Eu tenho antena E olhos azuis. (V)", False, 1000),
  ("", 0, "Eu moro no Portal OU na Lua. (V)", False, 1000), ("No fim de cada uma, digo se é <b>V</b> ou <b>F</b>.", None, None, False, 2400)],
  "Agora é a sua vez: crie frases sobre <b>você</b>! 💪"),
"Maria fez um desenho lindo de uma árvore. Você quer usar no seu cartaz.": R(["🎨 Outro caso: a foto do João"], [
  ("O João tirou uma foto bonita do rio. Para usar no meu trabalho, primeiro eu <b>peço autorização</b>:", 0, "Pergunto ao João se posso usar a foto"),
  ("Depois escrevo o <b>crédito</b> com o nome dele:", 0, "Foto: João", True, 2400)],
  "Agora é a sua vez: o que você faz com o desenho da <b>Maria</b>? 💪"),
"Escolha 2 profissões: qual tecnologia cada uma usa e como ajuda?": R(["👩‍⚕️ Profissão — tecnologia — como ajuda"], [
  ("Olha como eu escrevo, em 3 partes: a profissão, a tecnologia e como ela ajuda:", 0, "Médica — termômetro digital — mede a febre rapidinho"), ("", 0, "Motorista — GPS no celular — mostra o melhor caminho", False, 2400)],
  "Agora é a sua vez: escolha 2 profissões <b>diferentes</b> das minhas! 💪"),
"Escreva os seus 3 passos antes de compartilhar": R(["🛡️ Antes de compartilhar"], [
  ("Olha como eu penso antes de mandar uma mensagem para o grupo:", 0, "Quem escreveu isso?"), ("", 0, "Tem data?", False, 800), ("", 0, "Outros sites falam a mesma coisa?", False, 2200)],
  "Agora é a sua vez: escreva os <b>seus</b> 3 passos, com as suas palavras! 💪"),
"Complete o seu passaporte: uma frase sobre cada missão": R(["✍️ Exemplo com outra matéria"], [
  ("Olha como eu escrevo sobre uma aula de <b>Ciências</b>: falo de algo que eu aprendi.", 0, "Aprendi que as plantas precisam de luz para crescer.", True, 2400)],
  "Agora é a sua vez: uma frase sobre cada missão! 💪"),
"Crie um algoritmo com SE… ENTÃO… SENÃO para decidir se você pode compartilhar uma mensagem": R(["🔀 Outro algoritmo: posso abrir um link?"], [
  ("Olha como eu monto um algoritmo para <b>outra</b> decisão:", 0, "SE o link veio de alguém que eu conheço"),
  ("", 0, "E o endereço tem o cadeado 🔒,", False, 900), ("", 0, "ENTÃO eu abro,", True), ("", 0, "SENÃO eu pergunto a um adulto.", True, 2400)],
  "Agora é a sua vez: crie o <b>seu</b>, para decidir se pode compartilhar uma mensagem! 💪"),
"O grafo do caminho até a escola": R(["📍 Vértices (lugares)", "➖ Arestas (ligações)"], [
  ("Olha como eu faço com o caminho da minha casa até o <b>parque</b>. Primeiro os lugares, em ordem:", 0, "Casa, Mercado, Igreja, Praça, Parque"),
  ("Depois ligo os lugares de <b>dois em dois</b>, como as ruas:", 1, "Casa – Mercado"), ("", 1, "Mercado – Igreja", False, 700), ("", 1, "Igreja – Praça", False, 700), ("", 1, "Praça – Parque", False, 2200)],
  "Agora é a sua vez: faça o grafo do <b>seu</b> caminho até a escola! 💪"),
}

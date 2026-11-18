from comum import R
BIT = {
"Chegou uma mensagem nova em pacotes embaralhados": R(["📦 Pacotes que chegaram", "🔢 Na ordem dos números"], [
  ("Olha só como eu faço com <b>outra</b> mensagem! Os pacotes chegaram bagunçados:", 0, "Pacote 2 de 3: de futebol"),
  ("", 0, "Pacote 3 de 3: às 4 horas.", False, 600), ("", 0, "Pacote 1 de 3: Hoje tem treino", False, 1400),
  ("Eu não olho a ordem em que chegaram: eu procuro o <b>número</b> de cada pacote. Primeiro o <b>1 de 3</b>…", 1, "Hoje tem treino", True),
  ("…depois o <b>2 de 3</b>…", 1, "de futebol", True), ("…e por último o <b>3 de 3</b>.", 1, "às 4 horas.", True),
  ("Juntando: <b>“Hoje tem treino de futebol às 4 horas.”</b> O número do pacote é que diz a ordem! 😎", None, None, False, 2600)],
  "Agora é a sua vez: monte a <b>sua</b> mensagem seguindo a numeração (comece pelo Pacote 1 de 4) e confira os acentos! 💪"),
"3. Descubra o endereço IP do seu computador": R(["⌨️ O que eu faço", "🖥️ O que aparece na tela"], [
  ("Olha como eu faço no <b>meu</b> computador. Aperto <b>Windows + R</b>:", 0, "Windows + R"),
  ("Abre a janelinha <b>Executar</b>.", 1, "Janela Executar aberta"),
  ("Digito <b>cmd</b> e aperto <b>Enter</b>.", 0, "cmd + Enter"), ("Abre a janela preta: o <b>Prompt de Comando</b>.", 1, "C:\\Users\\Aluno>"),
  ("Digito <b>ipconfig</b> e aperto <b>Enter</b>.", 0, "ipconfig + Enter"),
  ("Aparecem várias linhas. Eu procuro só a que começa com <b>Endereço IPv4</b>:", 1, "Endereço IPv4. . . . : 10.0.0.25", True, 2600),
  ("O meu IP é <b>10.0.0.25</b>: 4 números separados por pontos. O seu vai ser <b>diferente</b>!", None, None, False, 2400)],
  "Agora é a sua vez: faça no seu computador e copie o <b>seu</b> Endereço IPv4. Depois pegue o de um colega da sua baia! 💪"),
"4. Como a imagem da sua tela chega ao computador do professor pelo Veyon?": R(["✍️ A minha explicação (de outro caminho)"], [
  ("Vou explicar <b>outro</b> caminho, para você ver como se faz: como um vídeo chega ao meu celular.", 0, "#Como o vídeo chega ao meu celular?"),
  ("Primeiro digo <b>de onde sai</b>:", 0, "O vídeo sai do servidor, dividido em pacotes,"),
  ("Depois, <b>por onde passa</b>, em ordem:", 0, "viaja pela internet até o roteador da minha casa"),
  ("E por fim, <b>onde chega</b> e o que acontece lá:", 0, "e chega ao celular, que junta os pacotes e mostra o vídeo."),
  ("Repare: usei as palavras importantes (<b>pacotes</b>, <b>roteador</b>) e contei o caminho do começo ao fim.", None, None, False, 2600)],
  "Agora é a sua vez: conte o caminho da <b>sua tela</b> até o computador do professor, usando <b>rede</b>, <b>switch</b> e <b>pacotes</b>! 💪"),
"Decomponha: “Organizar um lanche coletivo da turma”": R(["🧩 Problema grande: fazer um aniversário surpresa"], [
  ("Olha como eu divido um problema <b>diferente</b>: um aniversário surpresa. Ele é grande demais de uma vez só…", 0, "#Aniversário surpresa"),
  ("…então eu corto em <b>partes menores</b>, uma de cada vez:", 0, "Combinar a data e o horário com a turma"),
  ("", 0, "Juntar o dinheiro e comprar o bolo", False, 900), ("", 0, "Enfeitar a sala sem o aniversariante ver", False, 900),
  ("", 0, "Esconder a turma e gritar “surpresa!”", False, 1400),
  ("Cada parte é <b>fácil</b>, e <b>juntas</b> elas resolvem o problema todo. Isso é <b>decompor</b>! 🎉", None, None, False, 2600)],
  "Agora é a sua vez: divida o <b>lanche coletivo</b> em 4 partes diferentes! 💪"),
"Escreva o algoritmo corrigido": R(["🐢 Desenhando um TRIÂNGULO"], [
  ("Vou te mostrar com <b>outra</b> figura: um triângulo. Um triângulo tem <b>3 lados</b>.", 0, "#Figura: triângulo (3 lados)"),
  ("Cada lado é: andar e virar (no triângulo, o giro é maior, para fechar a ponta). Então eu repito <b>uma vez para cada lado</b>:", 0, "Repita 3 vezes: ande 5 passos e vire", True),
  ("Se eu repetisse 2 vezes, faltaria um lado. Se repetisse 4, passaria do ponto! O número de repetições é o <b>número de lados</b>.", None, None, False, 3000)],
  "Agora é a sua vez: conte quantos lados tem a figura da tarefa e corrija o número de repetições! 💪"),
"Reescreva os comentários com empatia (mantendo a opinião)": R(["😠 Comentário que machuca", "💬 Mesma opinião, com empatia"], [
  ("Olha como eu faço com <b>outro</b> comentário:", 0, "“Que desenho feio, desiste disso.”"),
  ("Primeiro eu acho a <b>opinião</b>: a pessoa não gostou do desenho. Isso pode!", 0, "Opinião: não gostei do desenho", True),
  ("Depois eu acho o <b>ataque à pessoa</b>: “desiste disso”. Isso sai!", 0, "Ataque: “desiste disso”", True),
  ("Agora reescrevo: <b>mantenho a opinião</b> e critico o desenho, não a pessoa.", 1, "“Esse desenho não é o meu estilo, mas"),
  ("", 1, "acho que dá para caprichar mais nas cores.”", False, 2600)],
  "Agora é a sua vez: reescreva os 3 comentários <b>mantendo a opinião</b> e sem atacar ninguém! 💪"),
"Um colega fez uma montagem com a foto de outro aluno e mandou no grupo. Escreva 3 atitudes de quem viu.": R(["🛡️ Outra situação: um apelido maldoso no grupo"], [
  ("Vou pensar numa situação <b>parecida</b>: alguém espalhou um apelido maldoso de um colega no grupo. O que eu faço?", 0, "#Apelido maldoso no grupo"),
  ("1️⃣ Primeiro: <b>não ajudo a espalhar</b>.", 0, "Não repito o apelido e não dou risada"),
  ("2️⃣ Depois: <b>apoio quem foi atingido</b>.", 0, "Mando uma mensagem de apoio para o colega"),
  ("3️⃣ E por fim: <b>guardo prova e peço ajuda</b> a um adulto.", 0, "Tiro print e conto para o professor"),
  ("São 3 atitudes <b>diferentes</b>: não espalhar, apoiar e pedir ajuda. 💙", None, None, False, 2600)],
  "Agora é a sua vez: escreva 3 atitudes para a situação da <b>montagem</b>! 💪"),
"Os caminhos da Casa até a Escola": R(["🗺️ Outro grafo: Casa —4— Mercado —1— Praça e Casa —6— Praça"], [
  ("Olha como eu calculo num grafo <b>diferente</b>. Cada número na aresta é o tempo em minutos.", 0, "#Da Casa até a Praça"),
  ("Caminho 1: passo pelo Mercado. <b>Somo</b> os pesos:", 0, "Casa → Mercado → Praça = 4 + 1 = 5 min"),
  ("Caminho 2: a rua direta.", 0, "Casa → Praça (direto) = 6 min"),
  ("O mais curto é o de <b>menor soma</b>, mesmo tendo mais ruas!", 0, "Mais curto: pelo Mercado (5 min)", True, 2600)],
  "Agora é a sua vez: some os pesos dos caminhos da <b>sua</b> tarefa e ache o mais curto! 💪"),
"A rede de amigos: qual é o grau de cada um?": R(["👥 Amizades", "🔢 Grau de cada um"], [
  ("Olha como eu conto com <b>outra</b> turma de amigos:", 0, "Edu–Fê"), ("", 0, "Edu–Gabi", False, 700), ("", 0, "Fê–Gabi", False, 700), ("", 0, "Gabi–Hugo", False, 1400),
  ("O grau é <b>quantas vezes o nome aparece</b> nas amizades. O Edu aparece 2 vezes:", 1, "Edu: 2"),
  ("", 1, "Fê: 2", False, 800), ("A Gabi aparece 3 vezes!", 1, "Gabi: 3", True), ("", 1, "Hugo: 1", False, 2200)],
  "Agora é a sua vez: conte quantas vezes cada nome aparece nas amizades da tarefa! 💪"),
"Perguntas sobre o grafo da escola": R(["🏫 Outro grafo: Entrada, Quadra, Refeitório e Sala"], [
  ("Vou te mostrar o jeito de pensar com um grafo <b>diferente</b>.", 0, "#Entrada —1— Quadra —2— Sala · Quadra —2— Refeitório —1— Sala"),
  ("<b>Maior grau</b>: quem tem mais ligações? A Quadra liga com 3 lugares.", 0, "Maior grau: Quadra (3 ligações)", True),
  ("<b>Caminho mais curto</b> da Entrada até a Sala: somo os pesos.", 0, "Entrada → Quadra → Sala = 1 + 2 = 3 min"),
  ("E se o corredor Quadra–Sala <b>fechar</b>? Procuro <b>outro</b> caminho e somo de novo:", 0, "Entrada → Quadra → Refeitório → Sala = 1 + 2 + 1 = 4 min", True, 2800)],
  "Agora é a sua vez: faça o mesmo com o grafo da <b>escola</b> da tarefa! 💪"),
"O total da entrega": R(["🚲 Outra entrega"], [
  ("Olha uma entrega <b>diferente</b>, em duas partes:", 0, "Parte 1: Loja → Ponto A = 3 min"),
  ("", 0, "Parte 2: Ponto A → Cliente = 4 min", False, 900),
  ("O total é a <b>soma das partes</b>:", 0, "Total: 3 + 4 = 7 min", True, 2400)],
  "Agora é a sua vez: some as duas partes da entrega da tarefa! 💪"),
"M2 · A lista FRUTAS = [maçã, uva, pera, manga]": R(["📋 Outra lista: CORES = [azul, verde, roxo]"], [
  ("Olha como eu leio uma lista <b>diferente</b>. A posição começa no <b>1</b>:", 0, "1 → azul"), ("", 0, "2 → verde", False, 700), ("", 0, "3 → roxo", False, 1200),
  ("Quem está na posição 2? É o <b>verde</b>. Quantos itens? Conto: <b>3</b>.", 0, "Posição 2 = verde · Tamanho = 3", True, 2600)],
  "Agora é a sua vez: numere a lista FRUTAS e responda! 💪"),
"M4 · O grafo: Casa —2— Feira —2— Escola e Casa —6— Escola": R(["🗺️ Outro grafo: Casa —1— Padaria —3— Praça e Casa —5— Praça"], [
  ("Somo os pesos de cada caminho:", 0, "Casa → Padaria → Praça = 1 + 3 = 4 min"), ("", 0, "Casa → Praça (direto) = 5 min", False, 1000),
  ("O mais curto é o de <b>menor soma</b>. E os vértices são os lugares: Casa, Padaria e Praça = <b>3</b>.", 0, "Mais curto: pela Padaria · 3 vértices", True, 2600)],
  "Agora é a sua vez: faça as contas com o grafo da tarefa! 💪"),
"Escreva uma frase sobre o que você aprendeu em cada tema": R(["✍️ Exemplo com outra matéria"], [
  ("Olha como eu escrevo uma boa frase, sobre <b>outra</b> matéria (Matemática):", 0, "#🧮 Frações"),
  ("Começo com letra maiúscula, uso uma <b>palavra-chave</b> do tema e termino com ponto final:", 0, "Aprendi que a fração mostra partes de um inteiro.", True, 2600)],
  "Agora é a sua vez: uma frase para cada tema, com uma palavra-chave dele! 💪"),
}

from comum import R
def D(txt, intro): return {"digitar": txt, "intro": intro, "paineis": [], "passos": []}
PASTA = R(["📁 Outro caminho"], [
  ("Olha como eu leio um caminho <b>diferente</b>. As setas › mostram uma pasta <b>dentro</b> da outra:", 0, "Imagens › Viagem › Praia › mar.jpg"),
  ("O arquivo é o último (tem a extensão .jpg). A pasta onde ele está é a que vem <b>logo antes</b>:", 0, "Pasta do arquivo: Praia", True, 2600)],
  "Agora é a sua vez: ache a pasta logo antes de cada arquivo! 💪")
TIPOS = R(["🗂️ Outro cadastro: a biblioteca"], [
  ("Olha como eu escolho o tipo de dado de <b>outro</b> cadastro. Pergunto: é palavra, número, data ou sim/não?", 0, "Título do livro → Texto"),
  ("", 0, "Número de páginas → Número", False, 900), ("", 0, "Data da devolução → Data", False, 900), ("", 0, "Já devolveu? → Lógico (sim ou não)", True, 2400)],
  "Agora é a sua vez: faça a mesma pergunta para cada campo da tarefa! 💪")
BIT = {
"Um aparelho da minha casa": R(["📺 Outro aparelho: a geladeira"], [
  ("Olha como eu faço com um aparelho <b>diferente</b>:", 0, "#Aparelho: geladeira"),
  ("<b>Entrada</b>: o que ela recebe.", 0, "Entrada: o botão da temperatura que eu giro"),
  ("<b>Processamento</b>: o que ela faz por dentro.", 0, "Processamento: compara a temperatura e liga o motor"),
  ("<b>Saída</b>: o que ela entrega.", 0, "Saída: o ar frio que gela a comida", True, 2400)],
  "Agora é a sua vez: escolha <b>outro</b> aparelho da sua casa! 💪"),
"Em que pasta está?": PASTA, "Desafio M4": PASTA,
"O cadastro da loja": TIPOS, "M5 · Tipo de dado": TIPOS,
"Leia a tabela do campeonato": R(["📊 Outra tabela: a feira de ciências"], [
  ("Olha como eu leio uma tabela <b>diferente</b>. Primeiro acho a <b>linha</b> (quem) e depois a <b>coluna</b> (o quê):", 0, "#Turma | Votos | Projetos"),
  ("", 0, "6º A | 12 | 3", False, 700), ("", 0, "6º B | 8 | 2", False, 900),
  ("Quantos votos tem o 6º B? Desço até a linha do 6º B e vou até a coluna Votos:", 0, "6º B → Votos = 8", True, 2600)],
  "Agora é a sua vez: ache a linha e a coluna de cada pergunta! 💪"),
"Reescreva com respeito": R(["😠 Mensagem que ofende", "💬 Mesma ideia, com respeito"], [
  ("Olha como eu faço com <b>outra</b> mensagem. Repare que está toda em maiúsculas: é como gritar!", 0, "“NOSSA, QUE DESENHO MAL FEITO”"),
  ("A ideia é: o desenho pode melhorar. Tiro o grito e a ofensa e mantenho a ideia:", 1, "“Acho que dá para caprichar mais nas cores do desenho.”", True, 2600)],
  "Agora é a sua vez: reescreva as 3 mensagens, sem ofender e sem gritar! 💪"),
"As regras do grupo da turma": R(["📜 Regras de outro grupo: o time de futebol"], [
  ("Olha como eu crio regras para <b>outro</b> grupo. Cada regra fala de respeito, segurança ou cuidado:", 0, "Avisar com antecedência quando não puder ir ao treino"),
  ("", 0, "Não postar vídeo de ninguém sem pedir", False, 900), ("", 0, "Não mandar mensagem tarde da noite", False, 2200)],
  "Agora é a sua vez: crie 3 regras para o grupo da <b>sua turma</b>! 💪"),
"Digite as palavras com acento": D("pé mãe", "Olha como eu digito <b>outras</b> palavras com acento. O acento vem <b>antes</b> da letra!"),
"Frases completas": D("Já é hora?", "Olha como eu digito uma frase <b>diferente</b>, com maiúscula, acento e pontuação."),
"Um parágrafo sem erros": D("Eu gosto de ler.", "Olha como eu digito com calma, conferindo cada tecla. Depois de cada palavra, a barra de espaço!"),
"Desafio M7": D("Oi, tudo bem?", "Olha como eu digito uma frase <b>diferente</b>: maiúscula no começo e pontuação no fim."),
"Treine de verdade": R(["🖱️ Copiar e colar (outra palavra)"], [
  ("Olha como eu copio e colo <b>outra</b> palavra, ESCOLA. 1º: <b>duplo clique</b> na palavra, para selecionar:", 0, "Duplo clique em ESCOLA (ela fica azul)"),
  ("2º: aperto <b>Ctrl + C</b> para copiar (parece que nada acontece, mas ela foi guardada).", 0, "Ctrl + C", True),
  ("3º: clico dentro da caixa.", 0, "Clique na caixa"), ("4º: aperto <b>Ctrl + V</b> para colar:", 0, "Ctrl + V → ESCOLA apareceu!", True, 2600)],
  "Agora é a sua vez: copie e cole a palavra INFORMÁTICA! 💪"),
}

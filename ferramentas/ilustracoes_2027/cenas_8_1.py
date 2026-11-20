"""🎬 Cenas de abertura — 8º ano — 1º bimestre de 2027 (20/11/2026).
Imagens em img/cenas/informatica-8ano-2027-1bim/m1..m8.webp (ChatGPT com a ficha da turma, sem texto).
As etiquetas fazem a PERGUNTA da missão e apontam o que importa, sem entregar a resposta das atividades."""
from cenas import cenas, seta, contorno
from cenas import etiqueta as _etq


def etiqueta(x, y, w, cor, titulo, linhas=(), n=None):
    """largura automática pelo tamanho do texto (título 42 px, linhas 34 px) e sem passar da borda da imagem"""
    w = max(w, round(len(titulo) * 23.5 + 60), *[round(len(l) * 18.5 + 60) for l in linhas])
    x = min(x, 1526 - w)
    return _etq(x, y, w, cor, titulo, linhas, n)

AID = "informatica-8ano-2027-1bim"
L = []

L.append(("m1",
    "Uma fila de alunos para a merenda, cada um com um crachá colorido; a Lara mostra um tablet com a mesma fila em caixinhas coloridas, na mesma ordem.",
    etiqueta(30, 30, 560, "azul", "Uma fila de verdade", ["Cada pessoa tem uma posição."])
    + seta(300, 196, 420, 500, "azul")
    + etiqueta(860, 30, 640, "verde", "A mesma fila no computador", ["Que nome ela tem lá dentro?"])
    + contorno(920, 740, 330, 180, "verde") + seta(1120, 196, 1090, 730, "verde"),
    "A fila da merenda e a fila no tablet estão na mesma ordem: isso é uma lista."))

L.append(("m2",
    "Na fila da merenda, o Kauã fura a fila no meio, o Davi sai com o prato e a Yara conta com um contador de cliques.",
    etiqueta(30, 30, 440, "verde", "Quantos ficaram?")
    + seta(240, 108, 400, 840, "verde")
    + etiqueta(560, 30, 500, "vermelho", "Entrou no meio!", ["E quem estava atrás?"])
    + seta(800, 196, 740, 560, "vermelho")
    + etiqueta(1120, 30, 380, "azul", "Saiu da fila")
    + seta(1300, 108, 1250, 560, "azul"),
    "Alguém entra, alguém sai: o que acontece com as posições da fila?"))

L.append(("m3",
    "O Davi vira cartas uma por uma numa fileira, procurando a que tem uma estrela; a Bia boceja de sono ao lado.",
    etiqueta(30, 30, 640, "azul", "Uma por uma…", ["Quantas vou ter que virar?"])
    + contorno(0, 850, 1536, 140, "azul", 30) + seta(340, 196, 420, 840, "azul")
    + etiqueta(1000, 30, 500, "vermelho", "Demora muito?")
    + seta(1240, 108, 1180, 400, "vermelho"),
    "Procurar olhando um por um funciona… mas pode demorar. Quando?"))

L.append(("m4",
    "Na biblioteca, a Yara abre um dicionário bem no meio e tem uma ideia; a Lara aponta uma fileira de livros arrumados do menor para o maior.",
    etiqueta(30, 30, 620, "azul", "Abrir bem no meio?", ["E depois, para que lado ir?"])
    + seta(340, 196, 420, 680, "azul")
    + etiqueta(920, 30, 580, "verde", "Livros em ordem", ["do menor para o maior"])
    + contorno(1300, 320, 236, 520, "verde") + seta(1200, 196, 1380, 320, "verde"),
    "Com a lista em ordem, dá para procurar sempre pelo meio."))

L.append(("m5",
    "Na quadra, alunos de alturas diferentes estão em fila fora de ordem; dois vizinhos trocam de lugar enquanto bolhas sobem; o Kauã organiza.",
    etiqueta(40, 30, 600, "azul", "Fora de ordem!", ["Como arrumar do menor ao maior?"])
    + etiqueta(940, 30, 560, "vermelho", "Trocar os vizinhos")
    + contorno(620, 470, 340, 520, "vermelho") + seta(1200, 108, 960, 520, "vermelho"),
    "Comparar dois vizinhos e trocar: passada por passada, a fila se arruma."))

L.append(("m6",
    "A Bia segura um quadro que mostra ela mesma segurando o quadro, cada vez menor; o Davi abre a menor de uma fileira de bonecas russas.",
    etiqueta(30, 30, 640, "roxo", "Uma imagem dentro da imagem", ["dentro de outra, dentro de outra…"])
    + contorno(130, 600, 450, 360, "roxo") + seta(340, 196, 340, 590, "roxo")
    + etiqueta(950, 30, 550, "vermelho", "Quando para?", ["A menor não abre mais!"])
    + seta(1200, 196, 1110, 700, "vermelho"),
    "O problema dentro do problema: cada vez menor, até um ponto de parada."))

L.append(("m7",
    "Sobre a mesa há uma pilha de lápis de tamanhos misturados; a Lara coloca sempre o menor numa fileira arrumada; o Kauã segura o próximo.",
    etiqueta(30, 30, 560, "vermelho", "Uma pilha bagunçada")
    + seta(300, 108, 340, 880, "vermelho")
    + etiqueta(860, 30, 640, "verde", "Qual lápis vem agora?", ["Escolha um de cada vez."])
    + contorno(980, 640, 460, 330, "verde") + seta(1180, 196, 1200, 630, "verde"),
    "Escolher sempre o menor que sobrou: a fileira vai ficando em ordem."))

L.append(("m8",
    "No jardim, a Yara olha uma samambaia com lupa, o Kauã segura um brócolis romanesco e o tablet da Bia mostra um triângulo feito de triângulos menores.",
    etiqueta(30, 30, 620, "verde", "A folha tem folhinhas…", ["parecidas com ela, só menores!"])
    + seta(330, 196, 330, 700, "verde")
    + etiqueta(940, 30, 560, "azul", "E o triângulo?", ["Quantos triângulos você vê?"])
    + contorno(1060, 720, 330, 250, "azul") + seta(1220, 196, 1220, 710, "azul"),
    "A mesma forma se repete em tamanhos cada vez menores: isso tem nome."))

F = cenas(AID, L)

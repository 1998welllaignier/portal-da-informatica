"""🎬 Cenas de abertura — 7º ano — 1º bimestre de 2027 (20/11/2026).
Imagens em img/cenas/informatica-7ano-2027-1bim/m1..m8.webp (geradas no ChatGPT com a ficha da turma, sem texto).
As etiquetas fazem a PERGUNTA da missão e apontam o que importa, sem entregar a resposta das atividades."""
from cenas import cenas, seta, contorno
from cenas import etiqueta as _etq


def etiqueta(x, y, w, cor, titulo, linhas=(), n=None):
    """largura automática pelo tamanho do texto (título 42 px, linhas 34 px) e sem passar da borda da imagem"""
    w = max(w, round(len(titulo) * 23.5 + 60), *[round(len(l) * 18.5 + 60) for l in linhas])
    x = min(x, 1526 - w)
    return _etq(x, y, w, cor, titulo, linhas, n)

AID = "informatica-7ano-2027-1bim"
L = []

L.append(("m1",
    "O Kauã olha a tela, onde blocos coloridos de programa estão encaixados e um robozinho bateu numa parede; a Bia aponta para o bloco com a setinha que dá a volta.",
    etiqueta(30, 30, 480, "azul", "E este bloco?", ["A setinha que dá a volta…"])
    + contorno(462, 610, 230, 112, "azul") + seta(260, 152, 520, 610, "azul")
    + etiqueta(900, 30, 600, "vermelho", "Por que o robô bateu?", ["O computador faz os blocos", "um depois do outro, em ordem."])
    + contorno(770, 520, 200, 210, "vermelho") + seta(1100, 196, 900, 520, "vermelho"),
    "O robô bateu na parede: o que mudar nos blocos para ele chegar?"))

L.append(("m2",
    "A Yara segura uma faixa de caixinhas com uma fruta em cada uma, como vagões de um trem; o Davi aponta para uma das caixinhas e o monitor mostra a mesma fileira.",
    etiqueta(40, 30, 620, "roxo", "Várias frutas, uma fila só", ["Cada fruta fica numa posição."])
    + contorno(90, 700, 540, 190, "roxo") + seta(330, 196, 360, 690, "roxo")
    + etiqueta(900, 30, 600, "azul", "Como pegar só uma?", ["E como saber quantas são?"])
    + contorno(1050, 540, 460, 170, "azul") + seta(1200, 196, 1260, 530, "azul"),
    "Uma fileira de frutas em caixinhas: no programa, isso tem nome. Qual?"))

L.append(("m3",
    "O Kauã está perdido no meio de bilhetes soltos; a Lara mostra uma caixinha de fichas arrumadas, cada uma com a foto de um colega e ícones em linhas separadas.",
    etiqueta(40, 30, 560, "vermelho", "Bilhetes soltos…", ["Cadê o aniversário do Davi?"])
    + contorno(0, 830, 600, 194, "vermelho") + seta(300, 196, 300, 820, "vermelho")
    + etiqueta(880, 30, 620, "verde", "Uma ficha para cada um", ["Cada linha guarda um dado."])
    + contorno(780, 470, 300, 230, "verde") + seta(1100, 196, 990, 470, "verde"),
    "Bilhetes bagunçados × fichas arrumadas: qual jeito acha a informação mais rápido?"))

L.append(("m4",
    "O Davi examina com uma lupa a tela, onde há uma joaninha pousada num bloco do programa e um robozinho caído; a Bia segura um cartão de certo e outro de errado.",
    etiqueta(40, 30, 560, "vermelho", "Tem um bug!", ["Em qual bloco está o erro?"])
    + contorno(470, 520, 260, 250, "vermelho") + seta(300, 196, 520, 560, "vermelho")
    + etiqueta(940, 30, 560, "verde", "Deu o esperado?", ["Teste e compare o resultado."])
    + seta(1240, 196, 1200, 650, "verde"),
    "O programa não fez o que devia: hora de achar o bug e consertar."))

L.append(("m5",
    "A Bia olha assustada para uma montanha de peças de montar; a Yara separa as peças em três caixinhas; o monitor mostra a mesma peça repetida três vezes.",
    etiqueta(30, 30, 520, "vermelho", "Grande demais?", ["Por onde começar?!"])
    + seta(240, 196, 220, 800, "vermelho")
    + etiqueta(580, 30, 450, "verde", "Em partes menores", ["uma caixinha por vez"])
    + seta(800, 152, 720, 790, "verde")
    + etiqueta(1070, 250, 440, "azul", "Usar de novo?")
    + contorno(1090, 540, 420, 230, "azul") + seta(1290, 324, 1290, 530, "azul"),
    "Um problema enorme fica fácil quando a gente divide e reaproveita."))

L.append(("m6",
    "O Kauã está no teclado e no mouse, a Lara ao lado segura uma folha com o plano em setas e aponta para a tela; ao fundo, outra dupla comemora.",
    etiqueta(30, 30, 520, "amarelo", "O piloto", ["mãos no teclado e no mouse"])
    + seta(300, 196, 520, 690, "amarelo")
    + etiqueta(980, 30, 520, "verde", "A navegadora", ["segura o plano e orienta"])
    + seta(1160, 196, 860, 640, "verde"),
    "Programar em dupla: cada um tem um papel. Quem faz o quê?"))

L.append(("m7",
    "O Davi, de chapéu de detetive e lupa, investiga a tela onde um dos blocos pisca em vermelho; a Yara anota pistas num caderno.",
    etiqueta(40, 30, 620, "vermelho", "Qual bloco está errado?", ["Investigue um de cada vez."])
    + contorno(610, 540, 300, 95, "vermelho") + seta(380, 196, 640, 540, "vermelho")
    + etiqueta(1040, 30, 460, "roxo", "Anote as pistas")
    + seta(1200, 108, 1180, 760, "roxo"),
    "Detetive de programas: teste, compare e mude uma coisa de cada vez."))

L.append(("m8",
    "A Bia aperta um botão de campainha; o monitor mostra cartões de certo e errado e uma fileira de estrelas como placar; o Kauã comemora.",
    etiqueta(30, 30, 600, "amarelo", "Como o placar sabe?", ["Alguém precisa ir contando…"])
    + contorno(500, 495, 440, 90, "amarelo") + seta(420, 196, 560, 490, "amarelo")
    + etiqueta(1000, 30, 500, "verde", "Certo ou errado?", ["o programa confere"])
    + seta(1200, 196, 860, 660, "verde"),
    "No quiz, o programa confere cada resposta e conta os pontos."))

F = cenas(AID, L)

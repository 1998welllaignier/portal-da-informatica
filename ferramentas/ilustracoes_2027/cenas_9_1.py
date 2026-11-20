"""🎬 Cenas de abertura — 9º ano — 1º bimestre de 2027 (20/11/2026).
Imagens em img/cenas/informatica-9ano-2027-1bim/m1..m8.webp (ChatGPT com a ficha da turma, sem texto).
As etiquetas fazem a PERGUNTA da missão e apontam o que importa, sem entregar a resposta das atividades."""
from cenas import cenas, seta, contorno
from cenas import etiqueta as _etq


def etiqueta(x, y, w, cor, titulo, linhas=(), n=None):
    """largura automática pelo tamanho do texto (título 42 px, linhas 34 px) e sem passar da borda da imagem"""
    w = max(w, round(len(titulo) * 23.5 + 60), *[round(len(l) * 18.5 + 60) for l in linhas])
    x = min(x, 1526 - w)
    return _etq(x, y, w, cor, titulo, linhas, n)

AID = "informatica-9ano-2027-1bim"
L = []

L.append(("m1",
    "Perto da escola, um mapa no chão liga casas, a escola, o mercado e a praça por caminhos de tamanhos diferentes; o Davi olha o GPS no celular e a Bia traça um caminho com o dedo.",
    etiqueta(30, 30, 470, "azul", "Como o GPS escolhe?")
    + seta(260, 108, 360, 420, "azul")
    + etiqueta(560, 30, 900, "verde", "Qual é o caminho mais curto?", ["Lugares são pontos; caminhos são linhas."])
    + contorno(230, 640, 960, 360, "verde", 40) + seta(1000, 196, 860, 630, "verde"),
    "Da casa até a escola há vários caminhos: qual soma menos?"))

L.append(("m2",
    "A Yara compara a tela com pastas dentro de pastas e um desenho de árvore de cabeça para baixo no quadro; o Kauã aponta da raiz até uma folha.",
    etiqueta(30, 30, 560, "azul", "Pastas dentro de pastas")
    + contorno(352, 512, 320, 300, "azul") + seta(300, 108, 470, 510, "azul")
    + etiqueta(900, 30, 600, "verde", "Uma árvore de cabeça para baixo?", ["Da raiz até as folhas."])
    + seta(1200, 196, 1000, 430, "verde"),
    "As pastas do computador formam uma árvore: raiz em cima, folhas embaixo."))

L.append(("m3",
    "Brincadeira de adivinhar: a Lara pensa num objeto; o Davi segura cartões de sim e não; no chão, um caminho se divide em dois a cada pergunta.",
    etiqueta(30, 30, 620, "roxo", "Adivinhe o objeto!", ["Só vale pergunta de sim ou não."])
    + seta(320, 196, 200, 520, "roxo")
    + etiqueta(1130, 30, 380, "verde", "A cada pergunta…", ["o caminho se divide"])
    + seta(1300, 196, 900, 700, "verde", curva=60),
    "Perguntas de sim ou não, uma depois da outra: quantas até acertar?"))

L.append(("m4",
    "A Bia monta blocos de programa na tela; ao lado, uma folha com pontos ligados por linhas e o Kauã segura um cartaz com uma árvore de perguntas.",
    etiqueta(30, 30, 560, "azul", "Do papel para o programa")
    + contorno(384, 512, 420, 400, "azul") + seta(300, 108, 520, 510, "azul")
    + etiqueta(900, 30, 600, "verde", "Um grafo e uma árvore", ["Como guardar isso no programa?"])
    + seta(1050, 196, 830, 860, "verde") + seta(1250, 196, 1170, 640, "verde"),
    "O grafo e a árvore de perguntas viram blocos de programa."))

L.append(("m5",
    "A Yara encosta um cartão na catraca e a luz muda de vermelha para verde; um balão mostra a catraca travada e liberada, com setas entre os dois.",
    etiqueta(30, 30, 600, "vermelho", "Travada ou liberada?", ["A catraca tem estados."])
    + seta(340, 196, 560, 520, "vermelho")
    + etiqueta(920, 30, 560, "verde", "O que faz mudar?")
    + seta(1160, 108, 820, 470, "verde"),
    "A catraca muda de estado conforme o que acontece: isso é um autômato."))

L.append(("m6",
    "O Kauã aperta um botão grande e o personagem da tela pula; a Lara bate palmas perto de um sensor e uma lâmpada acende.",
    etiqueta(30, 30, 520, "azul", "Apertou → pulou!")
    + contorno(180, 860, 250, 150, "azul") + seta(260, 108, 300, 850, "azul")
    + etiqueta(1000, 30, 500, "amarelo", "Bateu palma → acendeu!")
    + contorno(880, 640, 190, 200, "amarelo") + seta(1200, 108, 990, 630, "amarelo"),
    "Cada acontecimento dispara uma reação: programar por eventos."))

L.append(("m7",
    "Na faixa de pedestres, a Bia aperta o botão do semáforo; o Davi espera olhando a luz; carros parados; um relógio de areia mostra o tempo de cada luz.",
    etiqueta(30, 30, 560, "vermelho", "Quando o boneco fica verde?")
    + contorno(360, 420, 160, 320, "vermelho") + seta(280, 108, 430, 410, "vermelho")
    + etiqueta(760, 30, 460, "amarelo", "E o botão?", ["O que muda ao apertar?"])
    + seta(900, 196, 600, 880, "amarelo"),
    "O semáforo segue estados e tempos, e o botão do pedestre é um evento."))

L.append(("m8",
    "A turma rodeia uma planta da escola vista de cima, com alfinetes coloridos ligados por barbante; o professor aponta o lugar com mais ligações.",
    etiqueta(30, 30, 620, "verde", "A escola vista de cima", ["Cada lugar vira um ponto."])
    + contorno(220, 620, 1060, 400, "verde", 40) + seta(330, 196, 420, 620, "verde")
    + etiqueta(1000, 30, 500, "azul", "Qual lugar tem mais ligações?")
    + seta(1240, 108, 960, 660, "azul"),
    "A planta da escola vira um grafo: qual é o lugar mais conectado?"))

F = cenas(AID, L)

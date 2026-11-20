"""🎬 Cenas de abertura (IA + camada por código) para as missões de 2026 que ainda vão acontecer (20/11/2026).
Pedido do professor: as apostilas do ano atual também ganham as cenas, nas missões que a turma ainda não fez.
Imagens em img/cenas/<apostila>/<missão>.webp (geradas no ChatGPT com a ficha da turma, sem texto dentro).
As etiquetas fazem a PERGUNTA da missão e apontam o que importa, sem entregar a resposta das atividades.
Turma fixa: Bia (laranja), Davi (azul), Lara (verde), Kauã (amarelo), Yara (roxo) e o Professor."""
from cenas import cenas, etiqueta, seta, contorno, balao

C = {}

# ---------------- 6º ano · Missão 4 — Guardar, compactar e achar arquivos ----------------
C["informatica-6ano-4bim"] = [("m4",
    "O Davi, com um pen drive na mão, olha confuso para uma tela cheia de arquivos misturados; ao lado, a Yara mostra uma pasta fechada com zíper e uma lupa na tela dela.",
    etiqueta(250, 24, 700, "roxo", "Cadê o meu trabalho?", ["Arquivos misturados e pesados…", "como guardar e achar rapidinho?"])
    + contorno(369, 392, 414, 345, "vermelho")
    + seta(520, 186, 560, 384, "vermelho")
    + contorno(878, 478, 224, 210, "roxo") + contorno(1062, 528, 156, 168, "azul")
    + etiqueta(1000, 24, 500, "azul", "O que a Yara fez?", ["Pasta com zíper e lupa"])
    + seta(1180, 186, 1100, 470, "azul")
    + etiqueta(40, 900, 470, "amarelo", "Cabe no pen drive?")
    + seta(300, 896, 448, 748, "amarelo"),
    "Arquivos bagunçados e pesados: dá para compactar, organizar e achar tudo rapidinho.")]

# ---------------- 7º ano · Missão 3 — Segurança e convivência digital ----------------
# ---------------- 7º ano · Missão 4 — Grafos: mapas, caminhos e conexões ----------------
C["informatica-7ano-4bim"] = [("m3",
    "À noite, a Lara olha assustada para o celular, que mostra um presente, um anzol e um cronômetro; o Kauã aponta para a tela e levanta a mão pedindo para ela parar.",
    etiqueta(36, 24, 620, "vermelho", "Ganhou um prêmio?!", ["Corre, o tempo está acabando…"])
    + contorno(522, 445, 285, 476, "amarelo")
    + etiqueta(700, 24, 800, "amarelo", "Pare e pense antes de clicar", ["Que sinais de golpe aparecem aqui?"])
    + seta(980, 146, 812, 470, "amarelo")
    + balao(1090, 172, 400, "Espera! Não clica!", "vermelho", ponta=(1170, 300)),
    "Presente, anzol e pressa na mesma tela: antes de clicar, pare e procure os sinais."),
  ("m4",
    "Ao ar livre, a Bia mostra um mapa com rota no celular; o Davi passa o dedo por um mapa no chão em que a escola, a praça, a loja e uma casa estão ligadas por caminhos.",
    etiqueta(30, 24, 560, "azul", "Como o GPS escolhe?")
    + seta(300, 100, 430, 330, "azul")
    + etiqueta(640, 24, 760, "verde", "Qual é o caminho mais curto?", ["Os lugares são pontos (vértices)", "e os caminhos são linhas (arestas)."])
    + contorno(300, 620, 1000, 360, "verde", 40)
    + seta(1000, 190, 960, 610, "verde"),
    "Da escola até a casa: cada lugar é um ponto, cada caminho é uma linha. Qual trajeto é o menor?")]

# ---------------- 8º ano · Missão 4 — Termos de uso: o que eu aceitei? ----------------
_D = ("m4",
    "O Kauã, empolgado, aperta o botão verde no fim de um texto enorme que sai do celular; a Yara lê o mesmo texto com uma lupa e faz cara de preocupada.",
    etiqueta(36, 24, 680, "vermelho", "Clicar em “Aceito” sem ler?", ["O que você está aceitando?"])
    + contorno(565, 728, 205, 104, "vermelho", 40)
    + seta(560, 146, 640, 720, "vermelho")
    + etiqueta(780, 24, 720, "verde", "A Yara lê com lupa", ["O que fazem com os seus dados?"])
    + seta(1080, 146, 920, 600, "verde"),
    "Um texto enorme e um botão verde: antes de aceitar, vale ler o que está escrito.")
C["informatica-8ano-4bim"] = [_D]
C["informatica-8ano-4bim-trilha"] = [_D]

# ---------------- 9º ano · Missão 3 — Autoria, imagem e deepfakes ----------------
# ---------------- 9º ano · Missão 4 — Inteligência artificial ----------------
C["informatica-9ano-4bim"] = [("m3",
    "A Lara leva a mão à boca diante de um vídeo no computador que mostra o professor com o rosto meio distorcido; o professor de verdade, ao lado, aponta a tela surpreso; atrás, o Davi segura um desenho.",
    etiqueta(150, 24, 720, "vermelho", "Ele nunca disse isso!", ["Vídeo falso feito com IA (deepfake)"])
    + contorno(407, 430, 407, 376, "vermelho")
    + seta(500, 190, 540, 420, "vermelho")
    + etiqueta(900, 24, 600, "verde", "De quem é o desenho?", ["Posso postar sem pedir?"])
    + seta(1300, 146, 1330, 440, "verde"),
    "Rosto, voz e desenho têm dono: nem tudo o que aparece na tela é verdade, nem tudo pode ser postado."),
  ("m4",
    "A Bia e o Kauã seguram fotos de cachorros e gatos; um robô separa as fotos em duas caixas, uma de cachorro e outra de gato; na tela ao lado, um desenho de cérebro feito de circuitos.",
    etiqueta(150, 24, 760, "roxo", "Como a IA aprende?", ["Com muitos exemplos já separados:", "cachorro aqui, gato ali."])
    + contorno(568, 760, 707, 222, "roxo", 30)
    + seta(560, 190, 700, 750, "roxo")
    + etiqueta(960, 24, 540, "amarelo", "E se ela errar?", ["Quem confere somos nós."])
    + seta(1200, 146, 1100, 600, "amarelo"),
    "A IA aprende com exemplos: quanto melhores os exemplos, melhores as respostas (mas ela também erra)."),]

# ---------------- 5º ano · Missão 3 — Verdadeiro ou falso e escolhas ----------------
# ---------------- 5º ano · Missão 4 — Internet com cuidado ----------------
C["informatica-5ano-4bim"] = [("m3",
    "Chove lá fora; a Yara pensa com a mão no queixo e o Davi segura um cartão de certo e outro de errado; na mesa, uma seta se divide em dois caminhos: um guarda-chuva e um par de óculos escuros.",
    etiqueta(400, 24, 720, "azul", "Está chovendo?", ["Verdadeiro ou falso?", "Para qual lado o algoritmo vai?"])
    + contorno(538, 800, 445, 220, "amarelo", 40)
    + seta(760, 236, 760, 790, "azul"),
    "SE estiver chovendo… ENTÃO um caminho, SENÃO o outro: o algoritmo escolhe."),
  ("m4",
    "A Lara olha preocupada para uma notícia alarmante no celular, com o dedo no botão de compartilhar; o Kauã investiga com uma lupa; atrás, a Bia mostra no mural o desenho que ela fez.",
    etiqueta(150, 24, 740, "vermelho", "Antes de compartilhar…", ["essa notícia é de confiança?"])
    + contorno(422, 858, 170, 64, "vermelho", 30)
    + seta(570, 146, 560, 590, "vermelho")
    + balao(590, 172, 430, "Fui eu que desenhei!", "verde", ponta=(1010, 330)),
    "Notícia de verdade se confere antes de passar adiante; e toda obra tem um autor.")]


def CENAS(aid):
    # a 👣 Trilha usa a mesma imagem da apostila regular
    return cenas(aid.replace("-trilha", ""), C.get(aid, []))

"""📷 Fotos reais com licença livre (Wikimedia Commons), com a camada que ensina feita por código.
Aprovadas pelo professor em 20/11/2026. Regras: só objetos e lugares (sem pessoas), logotipos borrados,
crédito sempre embaixo (autor · site · licença) e legenda que diz a verdade sobre a foto.
Os arquivos ficam em img/fotos/ (webp, 1536 px de largura)."""
from cenas import figura_foto, etiqueta, seta, contorno, foto_cabo_submarino

W = 1536


def _foto(missao, ancora, nome, h, rotulo, camada, legenda, credito):
    return {"missao": missao, "pagina": "comecar", "ancora": ancora, "rotulo": rotulo,
            "html": figura_foto(f"img/fotos/{nome}.webp", W, h, rotulo, camada, legenda, credito)}


def data_center(m, ancora):
    c = (etiqueta(40, 40, 620, "azul", "🗄️ Racks", ["armários cheios de servidores"])
         + seta(300, 162, 200, 440, "azul")
         + etiqueta(900, 720, 600, "verde", "🌬️ Grades no piso", ["deixam passar o ar que", "resfria os servidores"])
         + seta(900, 800, 800, 940, "verde"))
    return _foto(m, ancora, "data-center", 1052, "Foto real: o corredor de um data center, com racks brancos dos dois lados e grades no piso.", c,
                 "O corredor de um data center: dos dois lados, racks (armários) cheios de servidores ligados o dia inteiro.",
                 "Foto: PiDatacenters · Wikimedia Commons · licença CC BY-SA 4.0 (foto recortada)")


def fibra_optica(m, ancora):
    c = (etiqueta(40, 40, 520, "vermelho", "💡 A luz entra aqui")
         + seta(200, 120, 160, 570, "vermelho")
         + etiqueta(940, 30, 560, "azul", "Cabo de fibra óptica", ["a luz corre por dentro"])
         + seta(1150, 152, 1290, 430, "azul")
         + etiqueta(640, 830, 600, "vermelho", "…e sai na outra ponta!")
         + seta(880, 826, 1050, 680, "vermelho"))
    return _foto(m, ancora, "fibra-optica", 962, "Foto real: um cabo transparente enrolado, com uma luz vermelha acesa numa ponta que aparece saindo na outra ponta.", c,
                 "Um cabo de fibra óptica de plástico com uma luz vermelha numa ponta: a luz atravessa o cabo e sai na outra. Na internet, a fibra é de vidro e a luz pisca muito rápido, levando os dados.",
                 "Foto: Hustvedt · Wikimedia Commons · licença CC BY-SA 3.0")


def celular_desmontado(m, ancora):
    c = (contorno(400, 370, 190, 220, "amarelo", 16)
         + etiqueta(30, 30, 430, "amarelo", "🔋 Bateria", ["guarda a energia"])
         + seta(250, 152, 420, 380, "amarelo")
         + contorno(895, 615, 250, 315, "verde", 16)
         + etiqueta(1120, 470, 400, "verde", "🧩 Placa", ["cheia de circuitos"])
         + seta(1200, 592, 1110, 680, "verde")
         + etiqueta(300, 930, 330, "azul", "📱 Tela")
         + seta(330, 950, 290, 880, "azul")
         + etiqueta(1110, 30, 400, "roxo", "🧱 Corpo (capa)")
         + seta(1180, 104, 1050, 260, "roxo"))
    return _foto(m, ancora, "celular-desmontado", 1024, "Foto real: um celular antigo desmontado, com as peças lado a lado: bateria, placa de circuitos, tela, teclado e capas.", c,
                 "Um celular antigo desmontado peça por peça: dá para ver a bateria, a placa com os circuitos, a tela e as partes do corpo.",
                 "Foto: Medvedev · Wikimedia Commons · licença CC BY-SA 3.0 (logotipos borrados)")


def lixo_eletronico(m, ancora):
    c = (etiqueta(40, 40, 640, "vermelho", "🗑️ Lixo eletrônico", ["teclados, mouses e cabos"])
         + seta(360, 162, 420, 560, "vermelho")
         + etiqueta(760, 1060, 740, "verde", "♻️ Lugar certo: ponto de coleta"))
    return _foto(m, ancora, "lixo-eletronico", 1157, "Foto real: uma pilha de teclados, mouses e cabos emaranhados, jogados fora.", c,
                 "Teclados, mouses e cabos jogados fora numa pilha: isso é lixo eletrônico. O lugar certo para eles é o ponto de coleta.",
                 "Foto: Reconrabbit · Wikimedia Commons · domínio público (CC0) (logotipos borrados)")


def hd_aberto(m, ancora):
    c = (etiqueta(30, 20, 620, "azul", "💿 Prato", ["disco que gira e guarda os bits"])
         + seta(250, 142, 380, 460, "azul")
         + etiqueta(980, 30, 520, "roxo", "🦾 Braço", ["a cabeça na ponta lê e grava"])
         + seta(1060, 152, 790, 400, "roxo"))
    return _foto(m, ancora, "hd-aberto", 1338, "Foto real: um HD aberto, com o disco prateado (prato) e o braço que lê e grava por cima dele.", c,
                 "Um HD aberto: o prato gira muito rápido e a cabeça, na ponta do braço, lê e grava os bits. (Nunca abra um HD de verdade: a poeira estraga.)",
                 "Foto: Zzubnik · Wikimedia Commons · domínio público")


def gabinete_aberto(m, ancora):
    c = (etiqueta(40, 40, 540, "azul", "🔌 Encaixes", ["para colocar placas extras"])
         + seta(520, 162, 700, 360, "azul")
         + etiqueta(900, 640, 580, "verde", "🧩 Placa-mãe", ["liga todas as peças"])
         + seta(900, 720, 740, 900, "verde")
         + etiqueta(820, 1240, 680, "vermelho", "🧠 Processador", ["fica embaixo do cooler (ventoinha)"])
         + seta(830, 1300, 760, 1400, "vermelho"))
    return _foto(m, ancora, "gabinete-aberto", 1536, "Foto real: o gabinete de um computador aberto, com a placa-mãe azul, os encaixes brancos, os cabos e o cooler sobre o processador.", c,
                 "O gabinete aberto: a placa-mãe liga todas as peças; o processador fica embaixo do cooler, a ventoinha que o esfria.",
                 "Foto: BGN-WMCO · Wikimedia Commons · licença CC BY 3.0 (foto recortada)")


def linha_braille(m, ancora):
    c = (contorno(150, 590, 1386, 150, "roxo", 30)
         + etiqueta(330, 820, 880, "roxo", "⠿ Pininhos que sobem e descem", ["e formam as letras em braille"])
         + seta(760, 816, 760, 750, "roxo"))
    return _foto(m, ancora, "linha-braille", 1152, "Foto real: uma linha braille, aparelho preto com uma fileira de pininhos brancos levantados formando letras em braille.", c,
                 "Linha braille: um aparelho ligado ao computador que mostra o texto da tela em braille, com pininhos que sobem e descem. A pessoa cega lê passando a ponta dos dedos.",
                 "Foto: Eddau · Wikimedia Commons · domínio público (CC0) (marca borrada)")


def amazonia_satelite(m, ancora):
    c = (contorno(700, 430, 470, 380, "vermelho", 40)
         + etiqueta(40, 40, 640, "vermelho", "🟫 Áreas desmatadas", ["desenho de espinha de peixe"])
         + seta(560, 162, 760, 440, "vermelho")
         + etiqueta(40, 560, 330, "verde", "🌳 Floresta")
         + etiqueta(940, 40, 560, "azul", "💨 Fumaça", ["das queimadas"])
         + seta(1300, 162, 1420, 270, "azul"))
    return _foto(m, ancora, "amazonia-satelite", 1202, "Imagem de satélite: floresta verde-escura com grandes manchas marrons de desmatamento em forma de espinha de peixe e fumaça branca, em Rondônia.", c,
                 "Parte de Rondônia vista de um satélite da NASA em 12/08/2007: as manchas marrons em forma de espinha de peixe são áreas desmatadas ao longo das estradas, e a fumaça branca vem das queimadas.",
                 "Imagem: NASA Earth Observatory (Jesse Allen e Robert Simmon) · Wikimedia Commons · domínio público")

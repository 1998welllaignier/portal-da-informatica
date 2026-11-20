"""Desenhos coloridos — 6º ano — 4º bimestre de 2026 (informatica-6ano-4bim)."""
from comum import *

A = Apostila("informatica-6ano-4bim")


if __name__ == "__main__":
    A.fig(0, "Entrada (azul): teclado, mouse e microfone levam dados ao computador; processamento (amarelo): o processador faz as contas; saída (verde): monitor, caixa de som e impressora mostram o resultado; armazenamento (roxo): o HD ou SSD guarda os arquivos.",
          840, 392, eps(), "Entrada → processamento → saída. Os arquivos ficam guardados no armazenamento.")

    # 1 — pasta como gaveta + Salvar como + Ctrl+S
    s = caixa(10, 20, 190, 190, cor="amarelo", fundo="fundo", rx=12)
    s += t(105, 44, "Pasta = gaveta", 15, "amarelo", 800)
    s += pasta(28, 60, 150) + t(103, 92, "Trabalhos", 15, "amarelo", 800)
    s += arquivo(44, 108, "TXT", "azul", w=34) + arquivo(92, 108, "JPG", "verde", w=34) + arquivo(140, 108, "DOC", "roxo", w=34)
    s += t(105, 200, "guarda e organiza", 12, "tinta", 600)
    s += caixa(222, 20, 330, 190, cor="tinta", rx=10) + f'<rect x="222" y="20" width="330" height="34" rx="10" fill="{COR["fundo"]}" stroke="{COR["tinta"]}" stroke-width="2.5"/>' + t(240, 43, "💾 Salvar como", 15, "tinta", 800, "start")
    s += circulo(246, 80, 12, "roxo", "roxo_c", 2) + t(246, 85, "1", 13, "roxo", 800) + t(266, 85, "Onde guardar:", 13, "tinta", 700, "start")
    s += caixa(380, 66, 156, 28, cor="roxo", fundo="roxo_c", rx=6, larg=2) + pasta(388, 70, 22) + t(418, 86, "Trabalhos", 13, "roxo", 800, "start")
    s += circulo(246, 126, 12, "azul", "azul_c", 2) + t(246, 131, "2", 13, "azul", 800) + t(266, 131, "Nome:", 13, "tinta", 700, "start")
    s += caixa(380, 112, 156, 28, cor="azul", fundo="papel", rx=6, larg=2) + t(390, 131, "receita_WL", 13, "azul", 800, "start", fonte=MONO)
    s += circulo(246, 174, 12, "verde", "verde_c", 2) + t(246, 179, "3", 13, "verde", 800) + t(266, 179, "Clique em", 13, "tinta", 700, "start")
    s += caixa(420, 160, 116, 32, cor="verde", fundo="verde", rx=8, larg=0) + t(478, 182, "Salvar", 15, "#fff", 800)
    s += t(650, 60, "atalho:", 13, "suave", 700) + tecla(590, 80, "Ctrl", 58, 46, destaque="azul", size=16) + t(658, 110, "+", 20, "tinta", 800) + tecla(672, 80, "S", 50, 46, destaque="azul", size=18)
    s += linhas(650, 154, ["abre o", "Salvar como"], 13, "azul", 700)
    A.fig(1, "A pasta é como uma gaveta que guarda arquivos. Para salvar: 1 escolha onde guardar (a pasta), 2 dê um nome ao arquivo, 3 clique em Salvar. O atalho Ctrl + S abre o Salvar como.",
          744, 222, s, "A pasta é como uma gaveta: guarda e organiza os arquivos.")

    # 2 — mouse
    s = (f'<path d="M210 70 a50 50 0 0 1 50 -50 v68 h-50z" fill="{COR["azul_c"]}" stroke="{COR["azul"]}" stroke-width="3.5"/>'
         f'<path d="M260 20 a50 50 0 0 1 50 50 v18 h-50z" fill="{COR["amarelo_c"]}" stroke="{COR["amarelo"]}" stroke-width="3.5"/>'
         f'<path d="M210 88 h100 v60 a50 50 0 0 1 -100 0z" fill="#fff" stroke="{COR["tinta"]}" stroke-width="3.5"/>'
         f'<rect x="252" y="36" width="16" height="30" rx="8" fill="{COR["ciano_c"]}" stroke="{COR["ciano"]}" stroke-width="3"/>')
    s += seta(150, 60, 222, 60, "azul", 3) + t(12, 40, "Botão esquerdo", 15, "azul", 800, "start") + t(12, 58, "clique: escolhe", 12, "tinta", 600, "start") + t(12, 74, "duplo clique: abre", 12, "tinta", 600, "start")
    s += seta(380, 60, 300, 60, "amarelo", 3) + t(388, 40, "Botão direito", 15, "amarelo", 800, "start") + t(388, 58, "mostra mais opções", 12, "tinta", 600, "start") + t(388, 74, "(o menu)", 12, "tinta", 600, "start")
    s += seta(380, 110, 272, 54, "ciano", 3) + t(388, 108, "Rodinha", 15, "ciano", 800, "start") + t(388, 126, "rola a página", 12, "tinta", 600, "start")
    s += t(12, 140, "Arrastar", 15, "roxo", 800, "start") + t(12, 158, "segure o botão", 12, "tinta", 600, "start") + t(12, 174, "e mova", 12, "tinta", 600, "start")
    s += seta(100, 190, 190, 190, "roxo", 3, tracejada=True)
    A.fig(2, "Mouse: botão esquerdo (azul) para clique e duplo clique; botão direito (amarelo) mostra mais opções; rodinha (ciano) rola a página; arrastar (roxo) é segurar o botão e mover.",
          520, 214, s, None, pequena=True)

    # 3 — sequência, repetição, seleção
    s = caixa(8, 10, 236, 180, cor="azul", fundo="azul_c", rx=14) + t(126, 36, "Sequência", 16, "azul", 800)
    for k, p in enumerate(["ande", "vire", "ande"]):
        s += caixa(20 + k * 74, 70, 62, 34, cor="azul", fundo="papel", rx=8) + t(51 + k * 74, 92, p, 14, "azul", 800, fonte=MONO)
        if k < 2: s += seta(82 + k * 74, 87, 92 + k * 74, 87, "azul", 2.5)
    s += t(126, 140, "um passo depois", 12, "tinta", 600) + t(126, 156, "do outro", 12, "tinta", 600)
    s += caixa(254, 10, 236, 180, cor="roxo", fundo="roxo_c", rx=14) + t(372, 36, "Repetição", 16, "roxo", 800)
    s += caixa(322, 66, 100, 36, cor="roxo", fundo="papel", rx=8) + t(372, 89, "1 passo", 14, "roxo", 800, fonte=MONO)
    s += f'<path d="M424 84 c40 0 40 46 0 46 h-104 c-40 0 -40 -46 0 -46" fill="none" stroke="{COR["roxo"]}" stroke-width="3" marker-end="url(#p27-roxo)"/>'
    s += caixa(350, 118, 44, 24, cor="roxo", fundo="roxo", rx=12, larg=0) + t(372, 135, "4×", 14, "#fff", 800)
    s += t(372, 172, "repete o mesmo passo", 12, "tinta", 600)
    s += caixa(500, 10, 236, 180, cor="amarelo", fundo="amarelo_c", rx=14) + t(618, 36, "Seleção", 16, "amarelo", 800)
    s += f'<path d="M618 50 l54 26 l-54 26 l-54 -26z" fill="#fff" stroke="{COR["amarelo"]}" stroke-width="3"/>' + t(618, 81, "Chovendo?", 13, "amarelo", 800)
    s += seta(564, 76, 556, 130, "verde", 2.5) + t(548, 106, "sim", 12, "verde", 800, "end") + caixa(506, 132, 104, 30, cor="verde", fundo="verde_c", rx=8) + t(558, 152, "guarda-chuva", 12, "verde", 800)
    s += seta(672, 76, 682, 130, "vermelho", 2.5) + t(690, 106, "não", 12, "vermelho", 800, "start") + caixa(640, 132, 86, 30, cor="vermelho", fundo="vermelho_c", rx=8) + t(683, 152, "boné", 13, "vermelho", 800)
    s += t(618, 180, "escolhe um caminho", 12, "tinta", 600)
    A.fig(3, "Sequência (azul): ande, vire, ande, um passo depois do outro; repetição (roxo): o mesmo passo 4 vezes; seleção (amarelo): a pergunta Chovendo? escolhe o caminho: sim, guarda-chuva; não, boné.",
          744, 198, s)

    # 4 — labirinto 5x5
    C = 56; X0 = 40; Y0 = 40; paredes = {"D1", "A2", "B2", "D2", "B4", "C4", "D4"}
    s = ""
    for j, L in enumerate("ABCDE"): s += t(X0 + C * j + C / 2, 28, L, 18, "tinta", 800)
    for i in range(5): s += t(20, Y0 + C * i + C / 2 + 7, str(i + 1), 18, "tinta", 800)
    for i in range(5):
        for j, L in enumerate("ABCDE"):
            x, y = X0 + C * j, Y0 + C * i; cel = f"{L}{i+1}"
            if cel in paredes:
                s += f'<rect x="{x}" y="{y}" width="{C}" height="{C}" fill="#fdba74" stroke="{COR["tinta"]}" stroke-width="2"/>'
                for r in range(4):
                    yy = y + r * 14
                    s += f'<path d="M{x} {yy} h{C}" stroke="#c2410c" stroke-width="1.5"/>'
                    off = 0 if r % 2 == 0 else 14
                    for k in range(4): s += f'<path d="M{x+off+k*28} {yy} v14" stroke="#c2410c" stroke-width="1.5"/>'
            else:
                s += f'<rect x="{x}" y="{y}" width="{C}" height="{C}" fill="#fff" stroke="{COR["tinta"]}" stroke-width="2"/>'
    rx, ry = X0 + C / 2, Y0 + C / 2
    s += (f'<rect x="{rx-16}" y="{ry-18}" width="32" height="24" rx="7" fill="{COR["azul"]}" stroke="{COR["tinta"]}" stroke-width="2"/>'
          f'<circle cx="{rx-7}" cy="{ry-7}" r="3.5" fill="#fff"/><circle cx="{rx+7}" cy="{ry-7}" r="3.5" fill="#fff"/>'
          f'<rect x="{rx-12}" y="{ry+8}" width="24" height="14" rx="4" fill="{COR["azul_c"]}" stroke="{COR["tinta"]}" stroke-width="2"/>')
    sx, sy = X0 + C * 4.5, Y0 + C * 4.5
    pts = " ".join(f"{sx+20*__import__('math').cos(__import__('math').radians(-90+36*k))*(1 if k%2==0 else .45):.1f},{sy+20*__import__('math').sin(__import__('math').radians(-90+36*k))*(1 if k%2==0 else .45):.1f}" for k in range(10))
    s += f'<polygon points="{pts}" fill="#fde047" stroke="{COR["amarelo"]}" stroke-width="2.5"/>'
    s += f'<rect x="40" y="330" width="22" height="16" fill="#fdba74" stroke="{COR["tinta"]}" stroke-width="1.5"/>' + t(68, 344, "parede", 13, "tinta", 700, "start")
    s += t(150, 344, "↑ ↓ ← → uma seta por casa", 13, "azul", 700, "start")
    A.fig(4, "Labirinto 5 por 5: o robô azul começa em A1 e a estrela amarela está em E5; as paredes de tijolo laranja estão em D1, A2, B2, D2, B4, C4 e D4.",
          330, 356, s, "Labirinto do Prof. Laignier", pequena=True)

    # 5 — três atitudes
    s = (cartao(10, 10, 230, 130, "verde", "Fale com respeito", "como se estivesse na frente", "💬")
         + cartao(256, 10, 230, 130, "roxo", "Proteja seus dados", "senha forte: S3nh@F0rte!", "🔐")
         + cartao(502, 10, 230, 130, "azul", "Conte a um adulto", "se algo assustar você", "🧑‍🏫"))
    A.fig(5, "Três atitudes do cidadão digital: falar com respeito (verde), proteger os dados com senha forte (roxo) e contar a um adulto de confiança quando algo assustar (azul).",
          744, 150, s)

    # 6 — ciclo consciente
    s = ""
    passos = [("📱", "Usar mais tempo", "verde"), ("🔧", "Consertar", "verde"), ("🎁", "Doar", "verde"), ("♻️", "Ponto de coleta", "verde")]
    for k, (ch, tx, cor) in enumerate(passos):
        x = 10 + k * 136
        s += cartao(x, 30, 118, 112, cor, tx if len(tx) < 13 else tx.split(" ", 1) if " " in tx else tx, None, ch, 13)
        if k < 3: s += seta(x + 120, 86, x + 134, 86, "verde", 3)
    s += t(282, 20, "O caminho consciente →", 14, "verde", 800)
    s += caixa(574, 30, 160, 112, cor="vermelho", fundo="vermelho_c", rx=12) + emoji(654, 82, "🗑️", 36)
    s += f'<path d="M620 48 L688 116 M688 48 L620 116" stroke="{COR["vermelho"]}" stroke-width="6" stroke-linecap="round"/>' + t(654, 134, "Lixo comum, não!", 13, "vermelho", 800)
    s += t(372, 176, "Metais e plásticos do aparelho podem virar outros produtos na reciclagem.", 13, "tinta", 600)
    A.fig(6, "O caminho consciente de um aparelho eletrônico, em verde: usar por mais tempo, consertar, doar e levar ao ponto de coleta; em vermelho: no lixo comum, não!",
          744, 190, s, "O caminho consciente de um aparelho eletrônico")

    # 7 — bits
    s = ""
    for k, (v, b) in enumerate([(8, 0), (4, 1), (2, 0), (1, 1)]):
        x = 70 + k * 120
        s += lampada(x, 60, b == 1) + t(x, 136, str(b), 32, "amarelo" if b else "suave", 800) + t(x, 162, f"vale {v}", 14, "tinta", 700)
    s += seta(540, 70, 580, 70, "tinta", 3) + t(612, 64, "4 + 1", 20, "amarelo", 800) + t(612, 92, "= 5", 24, "verde", 800)
    s += t(320, 200, "acesa = 1  ·  apagada = 0  ·  os bits 0101 formam o número 5", 15, "tinta", 700)
    A.fig(7, "Quatro lâmpadas que valem 8, 4, 2 e 1: acesas a de 4 e a de 1 (bits 0101); 4 + 1 = 5.",
          640, 214, s, "Bits: o computador escreve tudo com 0 e 1", pequena=True)

    # 8 — escada das medidas
    s = ""; degraus = [("bit", "0 ou 1", "suave"), ("byte", "1 letra", "azul"), ("KB", "um texto", "ciano"), ("MB", "uma foto", "verde"), ("GB", "um filme", "amarelo"), ("TB", "um HD", "roxo")]
    for k, (n, ex, cor) in enumerate(degraus):
        x = 8 + k * 105; h = 26 + k * 30
        s += caixa(x, 216 - h, 96, h, cor=cor, fundo=cor + "_c" if cor + "_c" in COR else "fundo", rx=8, larg=2.5)
        s += t(x + 48, 216 - h - 26, n, 20, cor, 800) + t(x + 48, 216 - h - 8, ex, 12, "tinta", 600)
    s += t(320, 240, "8 bits = 1 byte · depois, cada degrau ≈ mil vezes o anterior", 14, "tinta", 700)
    A.fig(8, "Escada das medidas, do menor para o maior: bit (0 ou 1), byte (uma letra), KB (um texto), MB (uma foto), GB (um filme) e TB (um HD); 8 bits fazem 1 byte e cada degrau seguinte vale cerca de mil vezes o anterior.",
          640, 252, s, "Do menor para o maior")

    # 9 — compactar
    s = ""
    for k, (e, c) in enumerate([("TXT", "azul"), ("JPG", "verde"), ("DOC", "roxo")]): s += arquivo(20 + k * 52, 40, e, c, w=40)
    s += t(92, 130, "3 arquivos: 6 MB", 13, "tinta", 700)
    s += seta(186, 76, 272, 76, "amarelo", 4) + t(229, 64, "compactar", 14, "amarelo", 800)
    s += f'<rect x="282" y="34" width="86" height="84" rx="10" fill="{COR["amarelo_c"]}" stroke="{COR["amarelo"]}" stroke-width="3"/>'
    s += f'<path d="M325 34 v84" stroke="{COR["amarelo"]}" stroke-width="2" stroke-dasharray="4 4"/>' + emoji(325, 88, "🗜️", 30)
    s += t(325, 140, ".zip: 1 arquivo só, menor (2 MB)", 13, "amarelo", 800)
    s += seta(378, 76, 464, 76, "verde", 4) + t(421, 64, "descompactar", 14, "verde", 800)
    for k, (e, c) in enumerate([("TXT", "azul"), ("JPG", "verde"), ("DOC", "roxo")]): s += arquivo(478 + k * 52, 40, e, c, w=40)
    s += t(552, 130, "de volta, iguaizinhos", 13, "verde", 800)
    A.fig(9, "Compactar: três arquivos (6 MB) entram e viram um só arquivo .zip, menor (2 MB); descompactar faz o caminho de volta e os arquivos saem iguaizinhos.",
          640, 156, s, "Compactar e descompactar", pequena=True)

    A.fig(10, "Mapa do bimestre: Missão 1 computador e arquivos; Missão 2 algoritmos; Missão 3 cidadão digital; Missão 4 guardar, compactar e achar arquivos.",
          744, 224, mapa_bimestre([("🖥️", ["Computador e", "arquivos"], ["entrada, saída,", "pastas"]),
                                   ("🤖", ["Algoritmos"], ["sequência, repetição", "e seleção"]),
                                   ("🤝", ["Cidadão", "digital"], ["respeito, senha,", "consumo consciente"]),
                                   ("🗜️", ["Guardar e", "achar"], ["bits, medidas,", "zip e pesquisa"])]))

    print("6º:", A.gerar({"m1": "🖥️", "m2": "🤖", "m3": "🤝", "m4": "🗜️", "pf": "🏁"}))

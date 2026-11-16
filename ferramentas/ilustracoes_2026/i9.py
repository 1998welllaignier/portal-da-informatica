"""Desenhos coloridos — 9º ano — 4º bimestre de 2026 (informatica-9ano-4bim)."""
from comum import *

A = Apostila("informatica-9ano-4bim")


def barra_https(w=520, dominio="laignier.exemplo"):
    s = f'<rect x="4" y="8" width="{w-8}" height="56" rx="28" fill="{COR["fundo"]}" stroke="{COR["tinta"]}" stroke-width="2.5"/>'
    s += cadeado(24, 12, "verde", esc=0.8)
    s += t(70, 45, "https://", 20, "verde", 800, "start", fonte=MONO) + t(170, 45, dominio, 20, "tinta", 700, "start", fonte=MONO)
    return s


def mapa_bairro():
    h = open(os.path.join(AQUI, "mapa_bairro_9ano_original.html"), encoding="utf-8").read()
    rep = [
        ('<g stroke="#1c1f22" stroke-linecap="round" stroke-width="4">', f'<g stroke="{COR["ciano"]}" stroke-linecap="round" stroke-width="5">'),
        ('<g fill="#fff" stroke="#1c1f22" stroke-width="2">', f'<g fill="{COR["amarelo_c"]}" stroke="{COR["amarelo"]}" stroke-width="2">'),
        ('<g fill="#1c1f22">\n<text x="280"', '<g fill="#b45309">\n<text x="280"'),
        ('<g fill="#fff" stroke="#1c1f22" stroke-width="3">', f'<g fill="{COR["ciano_c"]}" stroke="{COR["ciano"]}" stroke-width="3">'),
        ('<circle fill="#f2c14e" r="19" stroke="#1c1f22" stroke-width="3">', f'<circle fill="{COR["verde_c"]}" r="19" stroke="{COR["verde"]}" stroke-width="3">'),
        ('<circle fill="#fff" r="19" stroke="#1c1f22" stroke-width="3">', f'<circle fill="{COR["roxo_c"]}" r="19" stroke="{COR["roxo"]}" stroke-width="3">'),
    ]
    for a, b in rep:
        assert a in h, a
        h = h.replace(a, b)
    return h.replace('<figure style="margin:6px 0">', '<figure class="">')


if __name__ == "__main__":
    # 0 — quatro estruturas
    s = ""
    # grafo
    s += aresta(40, 60, 140, 50, "ciano", 3) + aresta(40, 60, 70, 150, "ciano", 3) + aresta(140, 50, 70, 150, "ciano", 3) + aresta(140, 50, 150, 140, "ciano", 3) + aresta(70, 150, 150, 140, "ciano", 3)
    for x, y in [(40, 60), (140, 50), (70, 150), (150, 140)]: s += circulo(x, y, 12, "ciano", "ciano_c", 3)
    s += t(95, 196, "Grafo", 15, "ciano", 800)
    # grafo com pesos
    pts = [(220, 70), (320, 60), (240, 150), (330, 145)]
    s += aresta(220, 70, 320, 60, "ciano", 3) + aresta(220, 70, 240, 150, "ciano", 3) + aresta(320, 60, 330, 145, "ciano", 3) + aresta(240, 150, 330, 145, "ciano", 3)
    for x, y in pts: s += circulo(x, y, 12, "ciano", "ciano_c", 3)
    s += peso(270, 62, 5) + peso(228, 110, 2) + peso(326, 102, 7) + peso(286, 148, 3)
    s += t(275, 196, "Grafo com pesos", 15, "amarelo", 800)
    # árvore
    s += aresta(470, 40, 430, 90, "verde", 3) + aresta(470, 40, 510, 90, "verde", 3) + aresta(430, 90, 405, 145, "verde", 3) + aresta(430, 90, 455, 145, "verde", 3) + aresta(510, 90, 510, 145, "verde", 3)
    s += circulo(470, 40, 13, "verde", "verde", 3) + circulo(430, 90, 11, "verde", "verde_c", 3) + circulo(510, 90, 11, "verde", "verde_c", 3)
    for x in (405, 455, 510): s += caixa(x - 11, 134, 22, 22, cor="verde", fundo="papel", rx=4, larg=2.5)
    s += t(496, 36, "raiz", 12, "verde", 800, "start") + t(526, 150, "folha", 12, "verde", 700, "start") + t(462, 196, "Árvore", 15, "verde", 800)
    # árvore de decisão
    s += caixa(630, 26, 56, 34, cor="amarelo", fundo="amarelo_c", rx=8) + t(658, 49, "?", 18, "amarelo", 800)
    s += aresta(646, 60, 610, 120, "verde", 3) + aresta(670, 60, 706, 120, "vermelho", 3) + t(614, 92, "sim", 12, "verde", 800, "end") + t(702, 92, "não", 12, "vermelho", 800, "start")
    s += caixa(580, 120, 60, 30, cor="verde", fundo="verde_c", rx=8) + t(610, 140, "resp.", 12, "verde", 800) + caixa(676, 120, 60, 30, cor="vermelho", fundo="vermelho_c", rx=8) + t(706, 140, "resp.", 12, "vermelho", 800)
    s += t(658, 196, "Árvore de decisão", 15, "amarelo", 800)
    A.fig(0, "Quatro desenhos: grafo (pontos ligados), grafo com pesos (números nas ligações), árvore (com a raiz em cima e as folhas embaixo) e árvore de decisão (pergunta com caminhos sim e não).",
          760, 210, s)

    # 1 — caminho A-B-D x A-C-D
    s = aresta(50, 110, 160, 40, "verde", 7) + aresta(160, 40, 270, 110, "verde", 7) + aresta(50, 110, 160, 180, "amarelo", 4, True) + aresta(160, 180, 270, 110, "amarelo", 4, True)
    s += peso(105, 75, 3, "verde") + peso(215, 75, 4, "verde") + peso(105, 145, 2) + peso(215, 145, 6)
    for n, x, y in [("A", 50, 110), ("B", 160, 40), ("C", 160, 180), ("D", 270, 110)]: s += no_grafo(x, y, n, "ciano", 22, 17)
    s += t(312, 60, "A→B→D", 12, "verde", 800, "end") if False else ""
    A.fig(1, "Exemplo: de A até D, o caminho A, B, D (verde) soma 3 + 4 = 7; o caminho A, C, D (amarelo, tracejado) soma 2 + 6 = 8. O mais curto é o verde.",
          320, 214, s.replace("", "") + "", "A → B → D = 7 (verde) · A → C → D = 8 (amarelo)", pequena=True)
    A.F[1]["html"] = A.F[1]["html"].replace('<figure class="fig-s">', '<figure class="grow">')

    # 2 — lugares do bairro (sem ligações)
    s = ""
    lugares = [("🏠", "Casa", 60, 60, "azul"), ("🥖", "Padaria", 240, 50, "amarelo"), ("🌳", "Praça", 60, 180, "verde"), ("⛽", "Posto", 160, 190, "vermelho"), ("🏫", "Escola", 250, 176, "roxo")]
    for ch, n, x, y, cor in lugares:
        s += circulo(x, y, 30, cor, cor + "_c", 3) + emoji(x, y + 10, ch, 28) + t(x, y + 50, n, 15, cor, 800)
    A.fig(2, "Os cinco lugares do bairro, coloridos e sem as ligações: Casa, Padaria, Praça, Posto e Escola. As ligações (arestas) você desenha!",
          300, 246, s, "Os lugares do bairro. As ligações você desenha!")

    # 3 — mapa do bairro (o mesmo desenho, agora colorido)
    A.F[3] = {"missao": A.orig[3]["missao"], "pagina": A.orig[3]["pagina"], "ancora": A.orig[3]["ancora"],
              "rotulo": "Mapa do bairro da escola desenhado como grafo: esquinas (ciano) A, B, C, D, F e G; as ruas do grafo em ciano; os pesos em quadras em amarelo; a Escola em verde; o Mercado Municipal e o Comercial União em roxo.",
              "html": mapa_bairro()}

    # 4 — árvore de pastas
    s = pasta(176, 10, 70) + t(260, 40, "Documentos", 16, "amarelo", 800, "start")
    s += aresta(211, 56, 110, 100, "amarelo", 3) + aresta(211, 56, 320, 100, "amarelo", 3)
    s += pasta(80, 100, 60) + t(70, 126, "Escola", 15, "amarelo", 800, "end") + pasta(290, 100, 60) + t(360, 126, "Fotos", 15, "amarelo", 800, "start")
    s += aresta(110, 140, 60, 160, "azul", 2.5) + aresta(110, 140, 160, 160, "verde", 2.5) + aresta(320, 140, 320, 160, "verde", 2.5)
    s += arquivo(42, 160, "TXT", "azul", "redação.txt", 36) + arquivo(142, 160, "PNG", "verde", "mapa.png", 36) + arquivo(302, 160, "JPG", "verde", "aniversário.jpg", 36)
    A.fig(4, "Árvore de pastas: Documentos é a raiz; dentro dela, as pastas Escola e Fotos; Escola tem redação.txt e mapa.png; Fotos tem aniversário.jpg (os arquivos são as folhas).",
          420, 238, s, None, pequena=True)

    # 5 — árvore de decisão
    def no_q(x, y, q, w=150): return caixa(x - w / 2, y - 18, w, 36, cor="amarelo", fundo="amarelo_c", rx=18) + t(x, y + 5, q, 14, "amarelo", 800)
    def folha(x, y, n): return caixa(x - 52, y - 18, 104, 36, cor="verde", fundo="verde_c", rx=8) + t(x, y + 5, n, 14, "verde", 800)
    s = aresta(350, 40, 190, 120, "verde", 2.5) + aresta(350, 40, 520, 120, "vermelho", 2.5)
    s += aresta(190, 120, 100, 210, "verde", 2.5) + aresta(190, 120, 280, 210, "vermelho", 2.5) + aresta(520, 120, 430, 210, "verde", 2.5) + aresta(520, 120, 610, 210, "vermelho", 2.5)
    s += no_q(350, 40, "É eletrônico?") + no_q(190, 120, "Tem tela?", 120) + no_q(520, 120, "Serve para escrever?", 190)
    s += folha(100, 210, "Monitor") + folha(280, 210, "Teclado") + folha(430, 210, "Lápis") + folha(610, 210, "Cadeira")
    for x, y, tx, cor in [(262, 76, "sim", "verde"), (444, 76, "não", "vermelho"), (136, 164, "sim", "verde"), (246, 164, "não", "vermelho"), (466, 164, "sim", "verde"), (576, 164, "não", "vermelho")]:
        s += t(x, y, tx, 12, cor, 800)
    A.fig(5, "Árvore de decisão: É eletrônico? Sim (verde): Tem tela? Sim, Monitor; não (vermelho), Teclado. Não: Serve para escrever? Sim, Lápis; não, Cadeira. Perguntas em amarelo, respostas em verde.",
          700, 240, s)

    # 6 — cinco pessoas (vértices sem ligações)
    s = ""
    for k, (n, cor) in enumerate([("Ana", "azul"), ("Bruno", "verde"), ("Carla", "roxo"), ("Davi", "amarelo"), ("Elisa", "rosa")]):
        x = 30 + (k % 3) * 70 if k < 3 else 65 + (k - 3) * 70; y = 40 if k < 3 else 120
        s += boneco(x, y, cor, 0.55) + t(x, y + 42, n, 12, cor, 800)
    A.fig(6, "Cinco pessoas coloridas, sem ligações: Ana, Bruno, Carla, Davi e Elisa. Cada pessoa é um vértice; as amizades (arestas) você desenha.",
          200, 170, s)

    # 7 — cifra
    s = caixa(10, 50, 140, 60, cor="azul", fundo="azul_c", rx=10) + t(80, 90, "SOL", 26, "azul", 800, fonte=MONO) + t(80, 132, "texto claro", 13, "azul", 700)
    s += seta(156, 80, 220, 80, "tinta", 3) + cadeado(228, 52, "amarelo", esc=1.0) + t(248, 132, "cifrar", 13, "amarelo", 800)
    s += emoji(250, 36, "🔑", 22) + t(268, 32, "chave 3", 12, "amarelo", 800, "start")
    s += seta(276, 80, 340, 80, "tinta", 3) + caixa(346, 50, 140, 60, cor="roxo", fundo="roxo_c", rx=10) + t(416, 90, "VRO", 26, "roxo", 800, fonte=MONO) + t(416, 132, "texto cifrado", 13, "roxo", 700)
    s += seta(492, 80, 590, 80, "verde", 3) + t(541, 70, "chave 3", 12, "verde", 800) + t(541, 98, "S←V O←R L←O", 10, "verde", 700, fonte=MONO)
    s += caixa(596, 50, 140, 60, cor="verde", fundo="verde_c", rx=10, tracejada=True) + t(666, 90, "SOL", 26, "verde", 800, fonte=MONO) + t(666, 132, "decifrar", 13, "verde", 700)
    s += t(380, 166, "cada letra anda 3 casas: S→V, O→R, L→O", 14, "tinta", 700)
    A.fig(7, "Caminho da mensagem: o texto claro SOL (azul) passa pelo cadeado com a chave 3 e vira VRO, o texto cifrado (roxo); com a mesma chave, volta a ser SOL (verde). Cada letra anda 3 casas.",
          760, 178, s)

    # 8 — https
    A.fig(8, "Barra de endereço de um site com cadeado e https em verde: a conexão usa criptografia.",
          520, 112, barra_https(520) + etiqueta(260, 102, "o https usa criptografia", "verde", 13), None, pequena=True)

    # 9 — senha 2 x 4 dígitos
    s = ""
    for k in range(2): s += caixa(10 + k * 50, 14, 42, 46, cor="vermelho", fundo="vermelho_c", rx=8) + t(31 + k * 50, 45, "?", 20, "vermelho", 800)
    s += t(10, 88, "2 dígitos: 10 × 10 = 100", 13, "vermelho", 800, "start") + t(10, 106, "a força bruta acha rápido", 11.5, "tinta", 600, "start")
    s += seta(170, 37, 250, 37, "tinta", 3) + t(210, 26, "+2 dígitos", 13, "tinta", 800)
    for k in range(4): s += caixa(262 + k * 50, 14, 42, 46, cor="verde", fundo="verde_c", rx=8) + t(283 + k * 50, 45, "?", 20, "verde", 800)
    s += t(262, 88, "4 dígitos: 10 × 10 × 10 × 10 = 10.000", 13, "verde", 800, "start") + t(262, 106, "100 vezes mais tentativas", 11.5, "tinta", 600, "start")
    s += t(560, 44, "100", 11, "vermelho", 800) if False else ""
    A.fig(9, "Senha de 2 dígitos: 10 × 10 = 100 combinações (vermelho, fraca); senha de 4 dígitos: 10 × 10 × 10 × 10 = 10.000 combinações (verde), 100 vezes mais tentativas para a força bruta.",
          640, 116, s, None)

    # 10 — caixa do portal
    s = caixa(4, 4, 330, 200, cor="azul", fundo="papel", rx=14, larg=3) + f'<rect x="4" y="4" width="330" height="44" rx="14" fill="{COR["azul"]}"/><rect x="4" y="30" width="330" height="18" fill="{COR["azul"]}"/>'
    s += t(24, 33, "Portal da Informática", 17, "#fff", 800, "start")
    s += t(24, 90, "Texto claro:", 17, "azul", 800, "start", fonte=MONO) + t(190, 90, "...", 17, "suave", 700, "start", fonte=MONO)
    s += t(24, 132, "Chave:", 17, "amarelo", 800, "start", fonte=MONO) + t(110, 132, "3", 17, "amarelo", 800, "start", fonte=MONO)
    s += t(24, 174, "Texto cifrado:", 17, "roxo", 800, "start", fonte=MONO) + t(210, 174, "...", 17, "suave", 700, "start", fonte=MONO)
    A.fig(10, "Caixa do portal com três linhas coloridas: texto claro (azul), chave 3 (amarelo) e texto cifrado (roxo).",
          340, 210, s)

    # 11 — foto com crédito
    s = caixa(10, 10, 300, 170, cor="tinta", fundo="papel", rx=10)
    s += f'<rect x="22" y="22" width="276" height="120" rx="6" fill="#e0f2fe"/><path d="M22 142 L110 80 L170 120 L230 70 L298 120 V142z" fill="#bbf7d0"/>'
    s += f'<circle cx="250" cy="48" r="14" fill="#fde047" stroke="#f59e0b" stroke-width="2"/><rect x="96" y="80" width="10" height="56" fill="#92400e"/><circle cx="101" cy="70" r="30" fill="#16a34a"/>'
    s += t(22, 168, "Foto: ", 15, "tinta", 800, "start") + t(70, 168, "W. Laignier", 15, "azul", 800, "start") + t(166, 168, "· Banco ·", 15, "suave", 700, "start") + t(246, 168, "CC BY", 15, "verde", 800, "start")
    s += etiqueta(450, 40, "quem tirou (autor)", "azul", 13) + seta(380, 42, 120, 150, "azul", 2.5, curva=40)
    s += etiqueta(450, 96, "onde estava (site)", "suave", 13) + seta(390, 100, 200, 152, "suave", 2.5, curva=20)
    s += etiqueta(436, 152, "licença: pode usar com crédito", "verde", 12) + seta(356, 158, 296, 162, "verde", 2.5)
    A.fig(11, "Foto colorida de uma árvore com a legenda de crédito embaixo: Foto: W. Laignier (autor, em azul) · Banco (o site) · CC BY (a licença, em verde).",
          560, 190, s)

    # 12 — deepfake
    s = celular(300, 6, 170, 286, "tinta", COR["fundo"])
    s += f'<path d="M330 40 h50 M392 40 h20 M420 40 h30" stroke="{COR["suave"]}" stroke-width="6" stroke-linecap="round"/>'
    s += f'<ellipse cx="385" cy="130" rx="38" ry="46" fill="#f1c27d" stroke="{COR["tinta"]}" stroke-width="2.5"/><path d="M366 120 h12 M392 120 h12" stroke="{COR["tinta"]}" stroke-width="3"/><circle cx="398" cy="120" r="3" fill="{COR["tinta"]}"/>'
    s += f'<path d="M370 156 q14 10 30 -4" fill="none" stroke="{COR["tinta"]}" stroke-width="3"/><path d="M325 270 q60 -110 120 0z" fill="{COR["azul_c"]}" stroke="{COR["azul"]}" stroke-width="2.5"/>'
    s += f'<path d="M432 230 l4 -16 l4 14 l4 -18 l4 18 l4 -12" fill="none" stroke="{COR["tinta"]}" stroke-width="2.5"/>'
    for tt, sub, y, ya, xa in [("Letras borradas", "no fundo da imagem", 40, 40, 330), ("Piscar estranho", "um olho abre, o outro não", 104, 120, 372), ("Boca fora de sincronia", "e voz robótica", 176, 160, 384)]:
        s += t(8, y, tt, 14, "vermelho", 800, "start") + t(8, y + 17, sub, 11.5, "tinta", 600, "start") + seta(196, y - 4, xa - 4, ya, "vermelho", 2.5)
    for tt, sub, y, ya, xa in [("Fala estranha", "algo que a pessoa nunca diria", 110, 130, 424), ("Mãos e dedos", "deformados", 210, 226, 448), ("E nenhum site", "de notícias confirma", 270, 270, 470)]:
        s += t(560, y, tt, 14, "amarelo", 800, "start") + t(560, y + 17, sub, 11.5, "tinta", 600, "start") + (seta(554, y - 4, xa + 4, ya, "amarelo", 2.5) if xa < 470 else "")
    A.fig(12, "Celular mostrando um vídeo suspeito, com setas apontando os sinais de alerta de deepfake: letras borradas, piscar estranho, boca fora de sincronia (vermelho), fala estranha, mãos deformadas e nenhum site confirma (amarelo).",
          744, 300, s, "Sinais de alerta de um deepfake")

    # 13 — exemplo de cartaz
    s = caixa(6, 6, 288, 228, cor="roxo", fundo="roxo_c", rx=14, larg=3) + t(150, 44, "Eu respeito", 24, "roxo", 800) + t(150, 72, "a autoria", 24, "roxo", 800)
    s += f'<circle cx="150" cy="132" r="38" fill="#fde047" stroke="#f59e0b" stroke-width="3"/><circle cx="138" cy="124" r="4" fill="{COR["tinta"]}"/><circle cx="162" cy="124" r="4" fill="{COR["tinta"]}"/><path d="M134 142 q16 14 32 0" fill="none" stroke="{COR["tinta"]}" stroke-width="3.5" stroke-linecap="round"/>'
    s += caixa(20, 186, 260, 34, cor="verde", fundo="papel", rx=8, larg=2) + t(150, 208, "Criado por: Welington · Licença: CC BY", 12, "verde", 800)
    A.fig(13, "Exemplo de cartaz: título Eu respeito a autoria, um desenho de carinha feliz e, embaixo, a linha de crédito: Criado por Welington, licença CC BY.",
          300, 240, s)

    # 14 — como a IA aprende
    s = ""
    for k, (n, sub, cor) in enumerate([("1. Coletar", "muitos exemplos", "azul"), ("2. Treinar", "achar padrões", "amarelo"), ("3. Testar", "exemplos novos", "roxo"), ("4. Usar", "previsões", "verde")]):
        x = 6 + k * 158; s += caixa(x, 10, 142, 70, cor=cor, fundo=cor + "_c", rx=12) + t(x + 71, 40, n, 16, cor, 800) + t(x + 71, 62, sub, 12, "tinta", 600)
        if k < 3: s += seta(x + 144, 45, x + 156, 45, "tinta", 3)
    s += t(320, 110, "Exemplo: o filtro de spam aprende com milhares de e-mails já marcados.", 13, "tinta", 600)
    A.fig(14, "Como a IA aprende, em 4 etapas coloridas: 1 coletar muitos exemplos, 2 treinar achando padrões, 3 testar com exemplos novos, 4 usar para fazer previsões.",
          640, 122, s, "Como a IA aprende")

    # 15 — viés
    s = caixa(6, 8, 300, 140, cor="vermelho", fundo="papel", rx=12)
    for k in range(6): s += circulo(36 + k * 48, 48, 18, "azul", "azul_c", 3)
    s += t(156, 98, "Exemplos de um tipo só", 14, "vermelho", 800) + t(156, 120, "a IA erra com quem ficou de fora: viés", 12, "tinta", 600)
    s += caixa(330, 8, 300, 140, cor="verde", fundo="papel", rx=12)
    for k, cor in enumerate(["azul", "amarelo", "verde", "roxo", "rosa", "ciano"]): s += circulo(360 + k * 48, 48, 18, cor, cor + "_c", 3)
    s += t(480, 98, "Exemplos variados", 14, "verde", 800) + t(480, 120, "a IA aprende de forma mais justa", 12, "tinta", 600)
    A.fig(15, "Viés: exemplos de um tipo só, todos iguais, levam a IA a errar com quem ficou de fora; exemplos variados, de várias cores, ensinam melhor e de forma mais justa.",
          640, 156, s, "Viés: a IA aprende o que os exemplos ensinam", pequena=True)

    # 16 — impactos
    s = caixa(6, 8, 300, 176, cor="verde", fundo="verde_c", rx=12) + t(156, 36, "👍 Ajuda", 17, "verde", 800)
    for k, l in enumerate(["🏥 saúde (exames)", "♿ legenda e leitura em voz alta", "🌾 chuva e pragas no campo", "🚦 trânsito e semáforos"]): s += t(24, 68 + k * 30, l, 13.5, "tinta", 600, "start")
    s += caixa(330, 8, 300, 176, cor="amarelo", fundo="amarelo_c", rx=12) + t(480, 36, "⚠️ Pede cuidado", 17, "amarelo", 800)
    for k, l in enumerate(["🔐 dados pessoais", "💼 empregos que mudam", "🎭 deepfakes", "⚡ muita energia e água"]): s += t(348, 68 + k * 30, l, 13.5, "tinta", 600, "start")
    A.fig(16, "Impactos da IA: ajuda (verde) na saúde, na acessibilidade, no campo e no trânsito; pede cuidado (amarelo) com dados pessoais, empregos que mudam, deepfakes e o gasto de energia e água.",
          640, 192, s, "Os impactos da IA", pequena=True)

    # 17 — passaporte
    s = f'<path d="M14 26 Q140 10 260 30 V166 Q140 148 14 162z" fill="{COR["azul_c"]}" stroke="{COR["azul"]}" stroke-width="3"/>'
    s += f'<path d="M260 30 Q380 10 506 26 V162 Q380 148 260 166z" fill="{COR["azul_c"]}" stroke="{COR["azul"]}" stroke-width="3"/>'
    for k, (ch, cor) in enumerate([("🗺️", "ciano"), ("🔐", "amarelo"), ("©️", "roxo"), ("🤖", "verde")]):
        x = 80 + k * 120 - (0 if k < 2 else -20) if False else [76, 196, 326, 446][k]
        s += f'<circle cx="{x}" cy="92" r="44" fill="#fff" stroke="{COR[cor]}" stroke-width="3" stroke-dasharray="7 6"/>' + emoji(x, 104, ch, 34) + t(x, 154, f"M{k+1}", 13, cor, 800)
    A.fig(17, "Passaporte de Missões aberto com quatro espaços de carimbo, um para cada missão: grafos (M1), criptografia (M2), autoria (M3) e inteligência artificial (M4).",
          520, 176, s, None, pequena=True)

    A.fig(18, "Mapa do bimestre: Missão 1 mapas e caminhos com grafos e árvores; Missão 2 mensagem secreta e golpes; Missão 3 autoria, imagem e vídeos falsos; Missão 4 inteligência artificial.",
          744, 224, mapa_bimestre([("🗺️", ["Mapas e", "caminhos"], ["grafos, pesos", "e árvores"]),
                                   ("🔐", ["Mensagem", "secreta"], ["cifra de César,", "ataques e golpes"]),
                                   ("©️", ["Autoria e", "imagem"], ["crédito, licença", "e deepfakes"]),
                                   ("🤖", ["Inteligência", "artificial"], ["como aprende,", "viés e impactos"])]))

    print("9º:", A.gerar({"m1": "🗺️", "m2": "🔐", "m3": "©️", "m4": "🤖", "pf": "🏁"}))

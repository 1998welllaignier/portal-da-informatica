"""Desenhos coloridos — 7º ano — 4º bimestre de 2026 (informatica-7ano-4bim)."""
from comum import *

A = Apostila("informatica-7ano-4bim")


def barra_https(w=520, dominio="laignier.exemplo"):
    s = f'<rect x="4" y="8" width="{w-8}" height="56" rx="28" fill="{COR["fundo"]}" stroke="{COR["tinta"]}" stroke-width="2.5"/>'
    s += cadeado(24, 12, "verde", esc=0.8)
    s += t(70, 45, "https://", 20, "verde", 800, "start", fonte=MONO) + t(170, 45, dominio, 20, "tinta", 700, "start", fonte=MONO)
    return s


def grafo_bairro(destaque=False):
    P = {"Casa": (210, 160), "Padaria": (380, 70), "Escola": (550, 160), "Praça": (380, 250)}
    E = [("Casa", "Padaria", 3, False), ("Padaria", "Escola", 2, False), ("Casa", "Escola", 9, True), ("Casa", "Praça", 4, False), ("Praça", "Escola", 4, False)]
    s = ""
    for a, b, p, tr in E:
        (x1, y1), (x2, y2) = P[a], P[b]
        s += aresta(x1, y1, x2, y2, "suave", 5, tracejada=tr)
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        s += peso(mx, my - (14 if tr else 0), p)
    cores = {"Casa": "azul", "Padaria": "ciano", "Escola": "verde", "Praça": "ciano"}
    for n, (x, y) in P.items(): s += no_grafo(x, y, n, cores[n], 36, 14)
    return s


if __name__ == "__main__":
    # 0 — rede
    s = monitor(14, 20, 70, 46, "azul") + celular(20, 104, 34, 56, "azul", COR["azul_c"]) + celular(16, 186, 46, 64, "azul", COR["azul_c"])
    s += t(50, 274, "dispositivos", 13, "azul", 800)
    s += f'<path d="M86 44 C170 44 160 120 236 126" fill="none" stroke="{COR["tinta"]}" stroke-width="3"/>' + t(150, 52, "cabo", 12, "tinta", 700)
    s += f'<path d="M58 132 H236" fill="none" stroke="{COR["ciano"]}" stroke-width="3" stroke-dasharray="6 5"/>' + t(150, 124, "Wi-Fi", 12, "ciano", 700)
    s += f'<path d="M66 216 C160 216 170 140 236 134" fill="none" stroke="{COR["ciano"]}" stroke-width="3" stroke-dasharray="6 5"/>' + t(150, 206, "Wi-Fi", 12, "ciano", 700)
    s += roteador(238, 112) + t(288, 168, "Roteador", 14, "amarelo", 800)
    s += seta(344, 128, 396, 128, "tinta", 3)
    s += nuvem(400, 74, 1.25) + t(476, 132, "🌐", 22) + t(476, 182, "Internet:", 14, "ciano", 800) + t(476, 198, "rede de redes", 13, "ciano", 700)
    s += seta(556, 128, 600, 128, "tinta", 3)
    s += servidor(610, 84) + t(655, 190, "Servidor", 14, "roxo", 800) + t(655, 206, "guarda os sites", 12, "roxo", 700)
    A.fig(0, "Rede: dispositivos (azul) ligados por cabo e Wi-Fi ao roteador (amarelo), que leva à internet, a rede de redes (ciano), até o servidor (roxo), onde ficam os sites.",
          744, 284, s, "Uma rede liga aparelhos; a internet liga milhões de redes")

    # 1 — pacotes
    s = caixa(8, 100, 150, 64, cor="azul", fundo="azul_c", rx=10) + t(83, 124, "mensagem", 13, "azul", 700) + t(83, 148, "BOA AULA, 7º!", 14, "azul", 800, fonte=MONO)
    pac = [(1, "BOA", "verde", 30), (2, "AULA,", "amarelo", 112), (3, "7º!", "roxo", 194)]
    for n, txt, cor, y in pac:
        s += seta(160, 132, 236, y + 26, cor, 2.5)
        s += (f'<rect x="240" y="{y}" width="150" height="56" rx="8" fill="{COR[cor+"_c"]}" stroke="{COR[cor]}" stroke-width="2.5"/>'
              f'<path d="M240 {y} l75 26 l75 -26" fill="none" stroke="{COR[cor]}" stroke-width="2"/>'
              + t(256, y + 48, txt, 14, cor, 800, "start", fonte=MONO) + caixa(346, y + 32, 36, 20, cor=cor, fundo=cor, rx=10, larg=0) + t(364, y + 47, f"{n}/3", 12, "#fff", 800))
    ordem = {1: 194, 2: 30, 3: 112}
    for n, txt, cor, y in pac:
        s += seta(392, y + 28, 540, 100 + n * 18, cor, 2.5, tracejada=True, curva=(-30 if n == 2 else 30))
    s += t(470, 22, "caminhos diferentes", 12, "suave", 700)
    s += caixa(546, 90, 190, 96, cor="verde", fundo="verde_c", rx=10) + t(641, 114, "montada pelos números", 12, "verde", 700)
    s += t(641, 140, "1 · 2 · 3", 15, "verde", 800, fonte=MONO) + t(641, 168, "BOA AULA, 7º!", 15, "verde", 800, fonte=MONO)
    A.fig(1, "A mensagem BOA AULA, 7º! é dividida em 3 pacotes numerados (1/3, 2/3 e 3/3), cada um com uma cor; eles viajam por caminhos diferentes, chegam fora de ordem e são montados pelos números.",
          744, 264, s, "Os pacotes chegam fora de ordem; os números servem para montar a mensagem")

    # 2 — https
    s = barra_https(520) + etiqueta(260, 102, "cadeado + https = protocolo seguro", "verde", 13)
    A.fig(2, "Barra de endereço com o cadeado e o https em verde: protocolo seguro.", 520, 112, s, None, pequena=True)

    # 3 — peças da rede da escola
    s = ""
    pecas = [("Fibra óptica", "ciano"), ("Rack + roteador", "amarelo"), ("Switch 24 portas", "amarelo"), ("Cabo CAT6", "azul"), ("Tomada de rede", "azul"), ("AP (Wi-Fi)", "ciano")]
    for k, (n, cor) in enumerate(pecas):
        x = 8 + k * 122; s += caixa(x, 8, 112, 120, cor=cor, fundo=cor + "_c", rx=12)
        cx = x + 56; c = COR[cor]
        if k == 0: s += f'<circle cx="{cx}" cy="56" r="30" fill="#fff" stroke="{c}" stroke-width="3"/><path d="M{cx-24} 66 Q{cx} 26 {cx+22} 52" fill="none" stroke="#f59e0b" stroke-width="4"/><circle cx="{cx+22}" cy="52" r="4" fill="#f59e0b"/>'
        if k == 1: s += f'<rect x="{cx-22}" y="22" width="44" height="72" rx="5" fill="#fff" stroke="{c}" stroke-width="3"/>' + "".join(f'<rect x="{cx-16}" y="{30+i*20}" width="32" height="14" rx="3" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="1.5"/>' for i in range(3)) + f'<circle cx="{cx-10}" cy="37" r="2.5" fill="{COR["verde"]}"/>'
        if k == 2: s += f'<rect x="{cx-44}" y="42" width="88" height="30" rx="5" fill="#fff" stroke="{c}" stroke-width="3"/>' + "".join(f'<rect x="{cx-38+i*7}" y="{48+r*11}" width="5" height="7" fill="{c}"/>' for i in range(12) for r in range(2))
        if k == 3: s += f'<path d="M{cx-30} 92 C{cx-20} 40 {cx} 90 {cx+14} 40" fill="none" stroke="{c}" stroke-width="6" stroke-linecap="round"/><rect x="{cx+6}" y="20" width="22" height="22" rx="3" fill="#fff" stroke="{c}" stroke-width="3"/>'
        if k == 4: s += f'<rect x="{cx-26}" y="22" width="52" height="68" rx="6" fill="#fff" stroke="{c}" stroke-width="3"/><path d="M{cx-12} 46 h24 v14 h-6 v8 h-12 v-8 h-6z" fill="{COR[cor+"_c"]}" stroke="{c}" stroke-width="2.5"/>'
        if k == 5: s += f'<rect x="{cx-30}" y="58" width="60" height="22" rx="11" fill="#fff" stroke="{c}" stroke-width="3"/><circle cx="{cx}" cy="69" r="4" fill="{COR["verde"]}"/><path d="M{cx-14} 46 a20 20 0 0 1 28 0 M{cx-22} 36 a30 30 0 0 1 44 0" fill="none" stroke="{c}" stroke-width="3" stroke-linecap="round"/>'
        s += linhas(cx, 112, [n] if len(n) < 15 else n.rsplit(" ", 1), 12, cor, 800, passo=14) if len(n) < 15 else linhas(cx, 106, n.rsplit(" ", 1), 12, cor, 800, passo=14)
    A.fig(3, "Peças da rede da escola: fibra óptica, rack com roteador, switch de 24 portas, cabo de rede CAT6, tomada de rede e ponto de acesso Wi-Fi (AP).",
          744, 136, s, "As peças da rede da nossa escola. A ordem do caminho, você descobre na pergunta 1!")

    # 4 — decomposição, lista, reúso, depuração
    s = caixa(4, 8, 180, 184, cor="amarelo", fundo="amarelo_c", rx=12) + t(94, 32, "Decomposição", 15, "amarelo", 800)
    s += caixa(44, 44, 100, 28, cor="amarelo", fundo="amarelo", rx=8, larg=0) + t(94, 63, "Fazer um bolo", 12, "#fff", 800)
    for k, p in enumerate(["separar", "misturar", "assar", "decorar"]):
        x = 12 + k * 42; s += f'<path d="M94 72 L{x+19} 100" stroke="{COR["amarelo"]}" stroke-width="2"/>' + caixa(x, 100, 38, 46, cor="amarelo", fundo="papel", rx=6, larg=1.8) + t(x + 19, 128, p, 8.5, "amarelo", 800)
    s += t(94, 176, "partes menores", 12, "tinta", 600)
    s += caixa(190, 8, 180, 184, cor="azul", fundo="azul_c", rx=12) + t(280, 32, "Lista", 15, "azul", 800) + t(280, 66, "cores =", 13, "azul", 800, fonte=MONO)
    for k, cnome in enumerate(["azul", "verde", "amarelo"]):
        x = 200 + k * 54; s += caixa(x, 80, 54, 36, cor="azul", fundo="papel", rx=0, larg=2) + t(x + 27, 103, cnome, 11, cnome, 800) + t(x + 27, 134, str(k + 1), 13, "azul", 800)
    s += t(280, 160, "cada item tem", 12, "tinta", 600) + t(280, 176, "uma posição", 12, "tinta", 600)
    s += caixa(376, 8, 180, 184, cor="roxo", fundo="roxo_c", rx=12) + t(466, 32, "Reúso", 15, "roxo", 800)
    s += caixa(406, 44, 120, 28, cor="roxo", fundo="roxo", rx=8, larg=0) + t(466, 63, "desenhar casa", 12, "#fff", 800)
    for x in (400, 482):
        s += seta(466, 74, x + 26, 98, "roxo", 2.5) + f'<path d="M{x} 124 l26 -22 l26 22 v32 h-52z" fill="#fff" stroke="{COR["roxo"]}" stroke-width="2.5"/>'
    s += t(466, 176, "escreve 1 vez, usa várias", 12, "tinta", 600)
    s += caixa(562, 8, 178, 184, cor="vermelho", fundo="vermelho_c", rx=12) + t(651, 32, "Depuração", 15, "vermelho", 800)
    s += emoji(632, 108, "🐞", 46) + f'<circle cx="672" cy="104" r="18" fill="none" stroke="{COR["tinta"]}" stroke-width="4"/><path d="M684 118 l16 16" stroke="{COR["tinta"]}" stroke-width="6" stroke-linecap="round"/>'
    s += t(651, 166, "achar e corrigir", 12, "tinta", 600) + t(651, 182, "o erro (bug)", 12, "tinta", 600)
    A.fig(4, "Quatro ideias dos algoritmos: decomposição (dividir Fazer um bolo em partes), lista (cores com posições 1, 2 e 3), reúso (o bloco desenhar casa usado duas vezes) e depuração (achar e corrigir o bug).",
          744, 198, s)

    # 5 — phishing
    s = celular(300, 8, 170, 262, "tinta", "#fff")
    msg = [("PARABENS!!!", 800), ("Voce ganhou um", 600), ("celular novo!", 600), ("Resgate SÓ HOJE,", 600), ("em 10 minutos:", 600), ("premio-gratis.xyz", 700), ("Depois me passa o", 600), ("código do SMS ;)", 600)]
    for k, (ln, pz) in enumerate(msg): s += t(318, 52 + k * 24, ln, 13, "vermelho" if "premio" in ln else "tinta", pz, "start", fonte=MONO if "premio" in ln else None)
    alvo = [("Erro de português", "sem acentos", 60, 46), ("Pressa", "“só hoje”, “10 minutos”", 128, 130), ("Pede código", "nunca passe!", 200, 202)]
    for tt, sub, y, ya in alvo: s += t(8, y, tt, 15, "vermelho", 800, "start") + t(8, y + 18, sub, 12, "tinta", 600, "start") + seta(200, y - 4, 312, ya, "vermelho", 2.5)
    for tt, sub, y, ya in [("Prêmio fácil", "bom demais para ser verdade", 76, 80), ("Link estranho", "endereço esquisito", 170, 172)]:
        s += t(560, y, tt, 15, "amarelo", 800, "start") + t(560, y + 18, sub, 12, "tinta", 600, "start") + seta(554, y - 4, 456, ya, "amarelo", 2.5)
    A.fig(5, "Celular com uma mensagem falsa e setas apontando os sinais de golpe: erro de português, pressa e pedido de código (vermelho); prêmio fácil e link estranho (amarelo).",
          744, 280, s, "Sinais de golpe (phishing)")

    # 6 — duas etapas
    s = t(110, 22, "1. senha", 15, "azul", 800) + caixa(14, 34, 192, 56, cor="azul", fundo="azul_c", rx=10) + t(110, 70, "••••••", 26, "azul", 800)
    s += t(232, 70, "+", 28, "tinta", 800)
    s += t(354, 22, "2. código extra", 15, "amarelo", 800) + caixa(258, 34, 192, 56, cor="amarelo", fundo="amarelo_c", rx=10) + t(354, 72, "482 913", 24, "amarelo", 800, fonte=MONO)
    s += seta(458, 62, 496, 62, "verde", 3) + cadeado(502, 34, "verde", aberto=True, esc=0.9) + t(540, 102, "conta aberta", 13, "verde", 800)
    A.fig(6, "Verificação em duas etapas: a senha (azul) mais um código extra que chega no celular (amarelo) abrem a conta (verde).",
          590, 112, s, "Verificação em duas etapas", pequena=True)

    # 7 — diante do cyberbullying
    s = ""
    for k, (ch, tx, cor) in enumerate([("📸", "Guardar provas", "azul"), ("🚫", "Bloquear", "vermelho"), ("🚩", "Denunciar", "amarelo"), ("🧑‍🏫", "Contar a um adulto", "verde")]):
        x = 6 + k * 184; s += cartao(x, 8, 166, 112, cor, tx if len(tx) < 16 else tx.rsplit(" ", 2)[0:1] + [" ".join(tx.rsplit(" ", 2)[1:])], None, ch, 14)
        if k < 3: s += seta(x + 168, 64, x + 182, 64, "tinta", 3)
    s += t(372, 146, "Quem vê também ajuda: não compartilha e apoia quem está sofrendo.", 13, "tinta", 600)
    A.fig(7, "Diante do cyberbullying, em ordem: guardar provas com print (azul), bloquear (vermelho), denunciar (amarelo) e contar a um adulto de confiança (verde).",
          744, 156, s)

    # 8 — grafo do bairro
    s = grafo_bairro()
    s += etiqueta(84, 60, "Vértice: um lugar", "azul", 13) + seta(110, 72, 178, 140, "azul", 2.5, curva=10)
    s += etiqueta(660, 52, "Aresta: a rua", "suave", 13) + seta(640, 64, 480, 110, "suave", 2.5, curva=-10)
    s += etiqueta(650, 270, "Peso: 4 minutos", "amarelo", 13) + seta(612, 260, 486, 212, "amarelo", 2.5, curva=10)
    A.fig(8, "Grafo do bairro: Casa, Padaria, Praça e Escola são vértices; as ruas são arestas; os números nas ruas são os pesos (minutos de caminhada): Casa–Padaria 3, Padaria–Escola 2, Casa–Escola 9, Casa–Praça 4, Praça–Escola 4.",
          744, 300, s, "As partes de um grafo")

    # 9 — comparar caminhos
    s = caixa(8, 10, 584, 58, cor="verde", fundo="verde_c", rx=12) + t(24, 46, "Casa → Padaria → Escola = 3 + 2 = 5 min  ✔ o mais curto", 17, "verde", 800, "start")
    s += caixa(8, 82, 584, 58, cor="amarelo", fundo="amarelo_c", rx=12) + t(24, 118, "Casa → Escola (rua direta) = 9 min · menos ruas, mais tempo", 16, "amarelo", 800, "start")
    A.fig(9, "Comparando caminhos: pela Padaria, 3 + 2 = 5 minutos, o mais curto (verde); pela rua direta, 9 minutos: menos ruas, mais tempo (amarelo).",
          600, 150, s, "O mais curto é o de menor soma dos pesos", pequena=True)

    # 10 — grau
    P = {"Ana": (110, 110), "Bia": (240, 40), "Caio": (240, 180), "Davi": (400, 110)}
    s = aresta(110, 110, 240, 40, "suave", 5) + aresta(110, 110, 240, 180, "suave", 5) + aresta(110, 110, 400, 110, "suave", 5) + aresta(240, 40, 240, 180, "suave", 5)
    for n, (x, y) in P.items(): s += no_grafo(x, y, n, "ciano", 30, 15)
    s += etiqueta(56, 168, "grau 3", "roxo", 13) + etiqueta(310, 34, "grau 2", "roxo", 13) + etiqueta(310, 196, "grau 2", "roxo", 13) + etiqueta(430, 160, "grau 1", "roxo", 13)
    A.fig(10, "Rede de amigos: Ana está ligada a Bia, Caio e Davi (grau 3); Bia e Caio têm grau 2; Davi tem grau 1.",
          480, 220, s, "Grau: quantas arestas chegam em cada vértice", pequena=True)

    A.fig(11, "Mapa do bimestre: Missão 1 redes e internet; Missão 2 algoritmos; Missão 3 segurança e convivência digital; Missão 4 grafos.",
          744, 224, mapa_bimestre([("🌐", ["Redes e", "internet"], ["pacotes,", "protocolos, https"]),
                                   ("🧩", ["Algoritmos"], ["decompor, listas,", "reúso, depurar"]),
                                   ("🛡️", ["Segurança e", "convivência"], ["golpes, 2 etapas,", "cyberbullying"]),
                                   ("🗺️", ["Grafos"], ["vértices, arestas,", "pesos e grau"])]))

    print("7º:", A.gerar({"m1": "🌐", "m2": "🧩", "m3": "🛡️", "m4": "🗺️", "pf": "🏁"}))

"""Desenhos coloridos — 8º ano — 4º bimestre de 2026 (informatica-8ano-4bim)."""
from comum import *

A = Apostila("informatica-8ano-4bim")


def lista(x, y, nums, w=50, h=40, cores=None, cinza=()):
    s = ""
    for k, n in enumerate(nums):
        cor = (cores or {}).get(k)
        if k in cinza: s += caixa(x + k * w, y, w, h, cor="linha", fundo="fundo", rx=0, larg=2) + t(x + k * w + w / 2, y + 27, str(n), 16, "suave", 700, fonte=MONO)
        elif cor: s += caixa(x + k * w, y, w, h, cor=cor, fundo=cor, rx=0, larg=2) + t(x + k * w + w / 2, y + 27, str(n), 16, "#fff", 800, fonte=MONO)
        else: s += caixa(x + k * w, y, w, h, cor="tinta", fundo="papel", rx=0, larg=2) + t(x + k * w + w / 2, y + 27, str(n), 16, "tinta", 800, fonte=MONO)
    return s


if __name__ == "__main__":
    # 0 — busca sequencial e binária
    s = t(10, 22, "Busca sequencial: procurar o 30", 15, "azul", 800, "start")
    s += lista(10, 32, [14, 3, 27, 9, 30, 21, 6, 18], cores={4: "verde"})
    for k in range(8): s += t(35 + k * 50, 88, str(k + 1), 11, "suave", 700)
    for k in range(4): s += seta(35 + k * 50, 96, 80 + k * 50, 96, "azul", 2, curva=12)
    s += linhas(424, 46, ["olha um por um, do começo ao fim:", "achou na 5ª comparação"], 13, "azul", 700, "start", passo=17)
    s += t(10, 146, "Busca binária (lista ordenada): procurar o 38", 15, "amarelo", 800, "start")
    s += lista(10, 156, [4, 9, 15, 22, 30, 38, 45, 50], cores={3: "amarelo"}, cinza=(0, 1, 2))
    for k in range(8): s += t(35 + k * 50, 212, str(k + 1), 11, "suave", 700)
    s += f'<path d="M12 222 h146" stroke="{COR["suave"]}" stroke-width="2"/>' + t(85, 238, "descartados", 12, "suave", 700)
    s += t(185, 238, "meio: (1 + 8) ÷ 2 = 4,5 → posição 4", 12, "amarelo", 700, "start")
    s += linhas(424, 168, ["o meio é 22 e o 38 é maior:", "descarta a metade da esquerda", "e repete com o que sobrou"], 13, "amarelo", 700, "start", passo=17)
    A.fig(0, "Busca sequencial (azul): olha item por item até achar o 30 na 5ª comparação. Busca binária (amarelo), com a lista ordenada: olha o meio (22, na posição 4); como 38 é maior, descarta a metade da esquerda (em cinza) e repete.",
          744, 250, s)

    # 1 — bolha
    s = ""
    linhas_b = [("início", [5, 2, 8, 1], {}, None), ("troca 5 e 2", [2, 5, 8, 1], {0: "amarelo", 1: "amarelo"}, 0), ("troca 8 e 1", [2, 5, 1, 8], {2: "amarelo", 3: "verde"}, 2)]
    for r, (rot, nums, cores, tr) in enumerate(linhas_b):
        y = 14 + r * 58
        s += t(10, y + 26, rot, 13, "tinta", 800, "start") + lista(120, y, nums, 52, 38, cores)
        if tr is not None: s += f'<path d="M{146+tr*52} {y-2} q26 -14 52 0" fill="none" stroke="{COR["amarelo"]}" stroke-width="2.5" marker-end="url(#p27-amarelo)"/>'
    s += t(430, 120, "8 chegou ao fim ✔", 13, "verde", 800, "start") if False else ""
    for k, (cx, cy, r) in enumerate([(372, 160, 8), (390, 126, 12), (410, 88, 16), (436, 44, 24)]): s += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{COR["ciano_c"]}" stroke="{COR["ciano"]}" stroke-width="2.5"/>'
    s += t(436, 51, "8", 18, "verde", 800)
    s += linhas(480, 70, ["Fim da 1ª passada:", "o maior número “subiu”", "para o final, como", "uma bolha."], 13, "tinta", 700, "start", passo=18)
    A.fig(1, "Primeira passada do método da bolha com 5, 2, 8, 1: compara vizinhos e troca os que estão fora de ordem (em amarelo); no fim, o maior, 8, chega ao final (verde), como uma bolha que sobe.",
          744, 190, s, "Método da bolha: compara vizinhos e troca os que estão fora de ordem")

    # 2 — peças da internet
    s = ""
    pc = [("🏢", "Provedor", "liga a sua casa", "azul"), ("🛣️", "Backbone", "a estrada principal", "amarelo"), ("🌊", "Cabo submarino", "liga continentes", "ciano"),
          ("📒", "DNS", "nome → número", "roxo"), ("🗄️", "Data center", "prédio de servidores", "verde"), ("☁️", "Nuvem", "guarda e roda na internet", "ciano")]
    for k, (ch, n, sub, cor) in enumerate(pc): s += cartao(6 + k * 123, 8, 114, 126, cor, n if len(n) < 13 else n.split(" "), sub if len(sub) < 18 else sub.rsplit(" ", 2)[0:1] + [" ".join(sub.rsplit(" ", 2)[1:])], ch, 13)
    s += caixa(92, 150, 560, 40, cor="roxo", fundo="roxo_c", rx=10) + t(372, 176, "Exemplo de DNS: laignier.exemplo → 203.0.113.7 (como a agenda do celular)", 13, "roxo", 800)
    A.fig(2, "Peças da internet: provedor, backbone, cabo submarino, DNS, data center e nuvem; o DNS traduz o nome laignier.exemplo para o endereço IP 203.0.113.7, como a agenda do celular.",
          744, 198, s)

    # 3 — paralelismo, concorrência, distribuído
    s = caixa(6, 8, 238, 196, cor="verde", fundo="verde_c", rx=12) + t(125, 32, "Paralelismo", 15, "verde", 800)
    s += caixa(55, 46, 140, 110, cor="verde", fundo="papel", rx=10)
    for k, p in enumerate(["1-10", "11-20", "21-30", "31-40"]):
        x = 66 + (k % 2) * 66; y = 56 + (k // 2) * 50; s += caixa(x, y, 54, 40, cor="verde", fundo="verde_c", rx=6, larg=2) + t(x + 27, y + 25, p, 12, "verde", 800)
    s += t(125, 180, "4 núcleos, cada um", 12, "tinta", 600) + t(125, 195, "com uma parte, ao mesmo tempo", 12, "tinta", 600)
    s += caixa(252, 8, 238, 196, cor="amarelo", fundo="amarelo_c", rx=12) + t(371, 32, "Concorrência", 15, "amarelo", 800)
    for k, n in enumerate(["3", "2", "1"]): s += caixa(266 + k * 32, 84, 28, 34, cor="amarelo", fundo="papel", rx=4, larg=2) + t(280 + k * 32, 107, n, 14, "amarelo", 800)
    s += seta(364, 101, 384, 101, "amarelo", 2.5) + impressora(392, 70, "amarelo")
    s += t(371, 180, "todos esperam a vez", 12, "tinta", 600) + t(371, 195, "na fila da impressora", 12, "tinta", 600)
    s += caixa(498, 8, 238, 196, cor="ciano", fundo="ciano_c", rx=12) + t(617, 32, "Sistema distribuído", 15, "ciano", 800)
    for k in range(3):
        x = 516 + k * 70; s += servidor(x, 60, "ciano" if k < 2 else "suave" if False else "ciano", 1).replace('width="90"', 'width="56"').replace("h46", "h16")
    s += f'<path d="M664 98 l40 40 M704 98 l-40 40" stroke="{COR["vermelho"]}" stroke-width="5" stroke-linecap="round"/>'
    s += seta(560, 92, 560, 132, "verde", 2.5) + t(560, 150, "respondem", 12, "verde", 800)
    s += t(617, 180, "se um computador falhar,", 12, "tinta", 600) + t(617, 195, "os outros respondem", 12, "tinta", 600)
    A.fig(3, "Paralelismo (verde): processador com 4 núcleos, cada um fazendo uma parte ao mesmo tempo; concorrência (amarelo): documentos esperando a vez na fila da impressora; sistema distribuído (ciano): se um computador falha, os outros respondem.",
          744, 212, s)

    # 4 — permissões e pegada digital
    s = celular(20, 6, 150, 190, "tinta", COR["fundo"])
    s += caixa(34, 50, 122, 112, cor="amarelo", fundo="papel", rx=10, larg=2) + linhas(95, 72, ["A Lanterna quer", "acessar seus", "contatos"], 11.5, "tinta", 800, passo=14)
    s += caixa(44, 114, 102, 20, cor="suave", fundo="papel", rx=10, larg=1.5) + t(95, 128, "Permitir", 11, "suave", 700)
    s += caixa(44, 138, 102, 20, cor="verde", fundo="verde", rx=10, larg=0) + t(95, 152, "Não permitir", 11, "#fff", 800)
    s += linhas(190, 70, ["Lanterna precisa", "dos seus contatos?", "Não! Então:", "NÃO PERMITIR."], 14, "verde", 800, "start", passo=20)
    s += t(560, 24, "Pegada digital: tudo fica registrado", 15, "roxo", 800)
    for k, (x, y) in enumerate([(420, 170), (470, 140), (520, 160), (570, 128), (620, 148), (670, 116)]):
        s += f'<ellipse cx="{x}" cy="{y}" rx="13" ry="20" fill="{COR["roxo_c"]}" stroke="{COR["roxo"]}" stroke-width="2.5" transform="rotate(-20 {x} {y})"/>'
    s += emoji(430, 80, "❤️", 26) + emoji(520, 70, "💬", 26) + emoji(610, 70, "📷", 26) + emoji(690, 60, "📍", 26)
    s += t(560, 200, "curtidas, comentários, fotos e localização", 12, "roxo", 700)
    A.fig(4, "Celular com o aviso A Lanterna quer acessar seus contatos: a lanterna não precisa disso, então Não permitir (verde). Ao lado, a pegada digital (roxo): curtidas, comentários, fotos e localização ficam registrados.",
          744, 210, s)

    # 5 — 4 perguntas do checador
    s = ""
    for k, (q, sub, cor) in enumerate([("Quem publicou?", "autor ou veículo", "azul"), ("Quando?", "data da notícia", "amarelo"), ("Outros confirmam?", "procure em 2 sites", "verde"), ("Como está escrita?", "pressa? MAIÚSCULAS?", "vermelho")]):
        x = 6 + k * 184
        s += caixa(x, 8, 176, 86, cor=cor, fundo=cor + "_c", rx=12) + circulo(x + 22, 51, 14, cor, cor, 2) + t(x + 22, 56, str(k + 1), 14, "#fff", 800)
        s += t(x + 42, 46, q, 12.5, cor, 800, "start") + t(x + 42, 66, sub, 10.5, "tinta", 600, "start")
    s += t(372, 118, "Só compartilhe depois de passar pelas 4 perguntas.", 13, "tinta", 700)
    A.fig(5, "As quatro perguntas do checador: 1 quem publicou, 2 quando, 3 outros sites confirmam, 4 como está escrita (pressa, letras maiúsculas).",
          744, 128, s)

    # 6 — termos de uso
    s = celular(256, 6, 232, 288, "tinta", "#fff") + t(372, 46, "Termos de uso", 15, "tinta", 800)
    marc = [(72, None), (86, None), (104, "roxo"), (126, None), (144, "vermelho"), (164, None), (182, "amarelo"), (204, None), (222, "ciano"), (240, None)]
    for y, cor in marc:
        s += f'<path d="M276 {y} h{150 if cor else 190}" stroke="{COR[cor] if cor else COR["linha"]}" stroke-width="{7 if cor else 5}" stroke-linecap="round"/>'
    s += caixa(296, 256, 152, 28, cor="azul", fundo="azul", rx=8, larg=0) + t(372, 275, "Li e aceito", 14, "#fff", 800)
    for tt, sub, y, ya, cor, lado in [("Dados coletados", "nome, contatos, localização", 92, 104, "roxo", "e"), ("Licença das fotos", "podem usar o que você posta", 180, 182, "amarelo", "e"),
                                      ("Compartilhamento", "dados para parceiros", 136, 144, "vermelho", "d"), ("Mudanças", "as regras podem mudar", 214, 222, "ciano", "d")]:
        if lado == "e": s += t(8, y, tt, 14, cor, 800, "start") + t(8, y + 17, sub, 11.5, "tinta", 600, "start") + seta(216, y - 4, 272, ya, cor, 2.5)
        else: s += t(560, y, tt, 14, cor, 800, "start") + t(560, y + 17, sub, 11.5, "tinta", 600, "start") + seta(554, y - 4, 432, ya, cor, 2.5)
    A.fig(6, "Tela de cadastro com os termos de uso e setas coloridas apontando as partes importantes escondidas no texto: dados coletados, licença das fotos, compartilhamento com parceiros e mudanças nas regras.",
          744, 300, s, "O que fica escondido no meio dos termos de uso")

    # 7 — grátis
    s = t(320, 18, "Aplicativo grátis: quem paga é a propaganda", 14, "suave", 700)
    passos = [("Você usa,", "curte e pesquisa", "azul"), ("O aplicativo", "guarda os dados", "roxo"), ("Empresas pagam", "pelos anúncios", "amarelo"), ("Você vê", "propaganda “sua”", "vermelho")]
    for k, (a, b, cor) in enumerate(passos):
        x = 6 + k * 158; s += caixa(x, 30, 140, 66, cor=cor, fundo=cor + "_c", rx=12) + t(x + 70, 58, a, 13, cor, 800) + t(x + 70, 78, b, 13, cor, 800)
        if k < 3: s += seta(x + 142, 63, x + 156, 63, "tinta", 3)
    s += f'<path d="M550 98 C540 150 120 150 80 102" fill="none" stroke="{COR["tinta"]}" stroke-width="3" marker-end="url(#p27-tinta)"/>'
    A.fig(7, "Ciclo do aplicativo grátis: você usa e curte (azul), o aplicativo guarda seus dados (roxo), empresas pagam anúncios (amarelo) e você vê propaganda feita para você (vermelho); e o ciclo recomeça.",
          640, 150, s, "O “grátis” é pago com propaganda e dados", pequena=True)

    # 8 — LGPD
    s = ""
    for k, (ch, n, cor) in enumerate([("👁️", "Saber", "azul"), ("✏️", "Corrigir", "amarelo"), ("🗑️", "Apagar", "vermelho"), ("✋", ["Retirar o", "consentimento"], "roxo")]):
        s += cartao(6 + k * 158, 8, 146, 100, cor, n, None, ch, 14)
    A.fig(8, "Os quatro direitos da LGPD: saber quais dados guardam (azul), corrigir (amarelo), apagar (vermelho) e retirar o consentimento (roxo).",
          640, 116, s, "Os seus direitos pela LGPD", pequena=True)

    A.fig(9, "Mapa do bimestre: Missão 1 buscar e ordenar listas; Missão 2 internet por dentro; Missão 3 dados pessoais e informação confiável; Missão 4 termos de uso.",
          744, 224, mapa_bimestre([("🔎", ["Buscar e", "ordenar"], ["sequencial, binária", "e bolha"]),
                                   ("☁️", ["Internet", "por dentro"], ["nuvem, DNS,", "paralelismo"]),
                                   ("🕵️", ["Dados e", "notícias"], ["privacidade e", "checagem"]),
                                   ("📜", ["Termos", "de uso"], ["grátis? LGPD,", "meus direitos"])]))

    A.fig(10, "Escada das categorias de cabo de rede: CAT5e (1 Gbps, até 100 m), CAT6 (até 10 Gbps em 55 m), CAT6a (10 Gbps, 100 m), CAT7 (10 Gbps, 100 m, pares com blindagem de metal) e CAT8 (40 Gbps, até 30 m); cada degrau mostra o cabo cortado, cada vez mais protegido.",
          744, 352, escada_cabos(), "Quanto maior a categoria, mais rápido e mais protegido (e mais curto, no CAT8)")

    print("8º:", A.gerar({"m1": "🔎", "m2": "☁️", "m3": "🕵️", "m4": "📜", "pf": "🏁"}))

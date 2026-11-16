"""Desenhos coloridos — 5º ano — 4º bimestre de 2026 (informatica-5ano-4bim)."""
from comum import *

A = Apostila("informatica-5ano-4bim")

if __name__ == "__main__":
    A.fig(0, "As 4 partes do computador: entrada (azul) com teclado, mouse e microfone; processamento (amarelo) com o processador; saída (verde) com monitor, caixa de som e impressora; armazenamento (roxo), que guarda os arquivos.",
          744, 262, eps(), "Entrada → processamento → saída. Os arquivos ficam guardados no armazenamento.")

    # 1 — grafo Ana, Bia, Caio
    s = aresta(260, 64, 120, 150, "suave", 5) + aresta(260, 64, 400, 150, "suave", 5)
    s += no_grafo(260, 64, "Ana", "amarelo", 34, 17) + no_grafo(120, 150, "Bia", "ciano", 34, 17) + no_grafo(400, 150, "Caio", "ciano", 34, 17)
    s += etiqueta(410, 46, "vértice = um nome", "azul", 13) + seta(350, 50, 298, 58, "azul", 2.5)
    s += etiqueta(110, 70, "aresta = amizade", "amarelo", 13) + seta(150, 82, 186, 104, "amarelo", 2.5)
    A.fig(1, "Grafo de amizades: Ana, Bia e Caio são vértices (as bolinhas); as linhas Ana–Bia e Ana–Caio são arestas (as amizades).",
          520, 196, s, "Os nomes são vértices e as amizades são arestas.")

    # 2 — E e OU com interruptores
    def interruptor(x, y, ligado):
        c = "verde" if ligado else "suave"
        return (caixa(x, y, 46, 60, cor=c, fundo=(c + "_c") if ligado else "fundo", rx=8)
                + f'<rect x="{x+13}" y="{y+(10 if ligado else 30)}" width="20" height="20" rx="4" fill="{COR[c]}"/>'
                + t(x + 23, y + 78, "ligado" if ligado else "desligado", 12, c, 800))
    s = ""
    for col, (op, cor, casos) in enumerate([("E", "azul", [(1, 1), (1, 0)]), ("OU", "roxo", [(1, 0), (0, 0)])]):
        x0 = 10 + col * 372
        s += caixa(x0, 10, 352, 250, cor=cor, fundo=cor + "_c", rx=16) + t(x0 + 176, 40, op, 24, cor, 800)
        s += t(x0 + 176, 58, "precisa dos dois" if op == "E" else "basta um", 13, cor, 700)
        for r, (a, b) in enumerate(casos):
            y = 74 + r * 92; acende = (a and b) if op == "E" else (a or b)
            s += interruptor(x0 + 20, y, a) + t(x0 + 82, y + 36, op, 15, cor, 800) + interruptor(x0 + 100, y, b)
            s += seta(x0 + 158, y + 30, x0 + 202, y + 30, "tinta", 2.5)
            s += lampada(x0 + 236, y + 26, acende, 20) + t(x0 + 274, y + 32, "acende" if acende else "apagada", 12, "amarelo" if acende else "suave", 800, "start")
    A.fig(2, "Lâmpadas com E e OU: com E, a lâmpada acende só se os dois interruptores estão ligados (com um desligado, fica apagada); com OU, basta um ligado (com os dois desligados, fica apagada).",
          744, 270, s, "Com E, precisa das duas partes verdadeiras. Com OU, basta uma.")

    A.fig(3, "Mapa do bimestre: Missão 1 o computador e os dados; Missão 2 listas e grafos; Missão 3 verdadeiro ou falso e algoritmos com escolhas; Missão 4 internet com cuidado.",
          744, 224, mapa_bimestre([("🖥️", ["O computador", "e os dados"], ["entrada, saída,", "armazenamento"]),
                                   ("🕸️", ["Listas e", "grafos"], ["vértices e", "arestas"]),
                                   ("💡", ["Verdadeiro", "ou falso"], ["E, OU e", "SE... ENTÃO"]),
                                   ("🌐", ["Internet com", "cuidado"], ["confiável?", "de quem é?"])]))

    print("5º:", A.gerar({"m1": "🖥️", "m2": "🕸️", "m3": "💡", "m4": "🌐", "pf": "🏁"}))

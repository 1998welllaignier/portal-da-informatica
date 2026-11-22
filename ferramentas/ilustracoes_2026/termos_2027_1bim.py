"""🖼️ Figurinhas das palavras difíceis do 1º bimestre de 2027 do 7º, 8º e 9º ano (21/11/2026, modelo em espiral
levado ao ano todo). Desenhos em linha clara feitos pelo Claude. Importado por termos.py."""
import unicodedata, re
from linha_clara import V, K, t, r, c, p, etiqueta, seta_grossa, seta_baixo


def kj(s):  # a mesma chave que o portal usa (js/portal.js, P.termoImg)
    s = re.sub(r"\s*\(.*?\)\s*", " ", s).strip().lower()
    return "".join(ch for ch in unicodedata.normalize("NFD", s) if not unicodedata.combining(ch))


def cel(x, y, s, cor="#fff", w=40, h=36, size=16, tc=K):
    return r(x, y, w, h, cor, rx=6, lw=3, sombra=2) + t(x + w / 2, y + h / 2 + size * 0.36, str(s), size, tc, 900)


def fila(x, y, vals, hl=(), w=40, cor_hl="#fde68a", nums=True, size=16):
    out = ""
    for i, v in enumerate(vals):
        out += cel(x + i * (w + 4), y, v, cor_hl if i in hl else "#fff", w, 36, size)
        if nums: out += t(x + i * (w + 4) + w / 2, y - 6, str(i + 1), 12, "azul", 900)
    return out


def no(x, y, s, cor="azul", rr=20, size=14):
    return c(x, y, rr, V[cor][0], 3) + t(x, y + size * 0.36, s, size, "#fff", 900, contorno=K)


def lig(x1, y1, x2, y2, peso=None, cor=K):
    s = p(f"M{x1} {y1} L{x2} {y2}", "none", 4)
    if peso is not None:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        s += c(mx, my, 12, "#fff", 2.5) + t(mx, my + 5, str(peso), 13, cor, 900)
    return s


def blk(x, y, s, cor="azul", w=150, h=32, size=14):
    return r(x, y, w, h, V[cor][0], rx=9, lw=3, sombra=3) + t(x + w / 2, y + h / 2 + size * 0.36, s, size, "#fff", 900, contorno=K)


def seta(x1, y1, x2, y2, lw=4):
    import math
    a = math.atan2(y2 - y1, x2 - x1); L = 12
    pa = (x2 - L * math.cos(a - 0.45), y2 - L * math.sin(a - 0.45)); pb = (x2 - L * math.cos(a + 0.45), y2 - L * math.sin(a + 0.45))
    return p(f"M{x1} {y1} L{x2} {y2}", "none", lw) + p(f"M{x2} {y2} L{pa[0]:.1f} {pa[1]:.1f} L{pb[0]:.1f} {pb[1]:.1f} Z", K, 2)


def emo(x, y, e, size=40):
    return t(x, y, e, size)


def arvore_mini(x0=160, y0=40, cores=("verde", "azul", "amarelo")):
    s = lig(x0, y0, x0 - 70, y0 + 60) + lig(x0, y0, x0 + 70, y0 + 60)
    s += lig(x0 - 70, y0 + 60, x0 - 105, y0 + 115) + lig(x0 - 70, y0 + 60, x0 - 35, y0 + 115) + lig(x0 + 70, y0 + 60, x0 + 70, y0 + 115)
    s += no(x0, y0, "", cores[0], 16) + no(x0 - 70, y0 + 60, "", cores[1], 16) + no(x0 + 70, y0 + 60, "", cores[1], 16)
    for xx in (x0 - 105, x0 - 35, x0 + 70): s += no(xx, y0 + 115, "", cores[2], 14)
    return s


def grafo_mini(pesos=False, hl=None):
    P = {"A": (60, 100), "B": (160, 45), "C": (160, 150), "D": (260, 100)}
    E = [("A", "B", 3), ("A", "C", 4), ("B", "D", 2), ("C", "D", 4), ("B", "C", 1)]
    s = "".join(lig(*P[a], *P[b], w if pesos else None) for a, b, w in E)
    return s + "".join(no(*P[k], k, "amarelo" if hl and k in hl else "azul") for k in P)


def registrar(d, D, kp):
    """Acrescenta as figurinhas sem trocar as que já existem (as do 6º ano ficam como estão)."""
    pulados = []
    def dd(nomes, rot, corpo, cor="cinza"):
        novos = [n for n in nomes.split("|") if kp(n) not in D and kj(n) not in D]
        pulados.extend(n for n in nomes.split("|") if n not in novos)
        if not novos: return
        d("|".join(novos), rot, corpo, cor)
        for n in novos: D[kj(n)] = D[kp(n)]
    registrar.pulados = pulados
    # ============ 7º ano · programação em blocos ============
    dd("programar", "Programar: escrever o programa, bloco por bloco",
       blk(40, 40, "mostrar “Olá!”", "roxo", 170) + blk(40, 78, "repita 3 vezes", "amarelo", 170) + blk(56, 112, "mostrar “pulo”", "roxo", 154) + emo(262, 110, "🧑‍💻", 54), "roxo")
    dd("bloco", "Bloco: uma peça de programa que se encaixa nas outras",
       blk(60, 50, "mostrar na tela", "roxo", 200, 40, 17) + blk(60, 96, "repita 3 vezes", "amarelo", 200, 40, 17) + etiqueta(160, 168, "peças que se encaixam", "roxo", 12), "roxo")
    dd("executar|rodar", "Executar: mandar o computador fazer o que o programa diz (botão ▶️ Rodar)",
       r(40, 54, 110, 46, V["verde"][0], rx=12, lw=3, sombra=4) + t(95, 86, "▶️ Rodar", 18, "#fff", 900, contorno=K) + seta_grossa(160, 77, 196, "verde", 22)
       + r(204, 40, 90, 76, "#fff", rx=8, lw=3, sombra=3) + t(249, 70, "Olá!", 16, K, 900) + t(249, 96, "pulo", 14, K, 800) + etiqueta(160, 160, "o computador faz", "verde", 12), "verde")
    dd("lista", "Lista: vários itens guardados em ordem, com um nome só",
       t(30, 58, "frutas =", 16, K, 900, "start") + fila(30, 80, ["maçã", "uva", "caju", "açaí"], w=60, size=14) + etiqueta(160, 160, "vários itens, um nome só", "azul", 12), "azul")
    dd("item|itens", "Item: cada valor guardado numa lista",
       fila(40, 70, ["maçã", "uva", "caju", "açaí"], hl=(1,), w=56, size=14) + seta_baixo(120, 116, 146, "amarelo", 20) + etiqueta(120, 170, "um item", "amarelo", 12), "amarelo")
    dd("posicao|indice", "Posição: o número do lugar do item na lista (começa no 1)",
       fila(40, 76, ["Ana", "Bia", "Caio", "Davi"], hl=(2,), w=56, size=14) + c(155, 50, 14, "#fde68a", 3) + t(155, 55, "3", 14, K, 900) + etiqueta(160, 160, "item nº 3 = Caio", "azul", 12), "azul")
    dd("tamanho", "Tamanho: quantos itens a lista tem",
       fila(30, 70, ["8", "4", "6", "3", "9"], w=44) + p("M30 124 H254", "none", 3) + p("M30 118 V130 M254 118 V130", "none", 3) + etiqueta(142, 160, "tamanho = 5", "verde", 13), "verde")
    dd("percorrer", "Percorrer: passar por todos os itens, do primeiro ao último",
       fila(40, 70, ["1", "2", "3", "4", "5"], w=40, hl=(0, 1, 2, 3, 4), cor_hl="#bbf7d0", nums=False) + p("M50 130 C 120 160, 200 160, 260 130", "none", 4) + seta(240, 140, 262, 128) + etiqueta(160, 176, "um por um, até o fim", "verde", 12), "verde")
    dd("para cada", "Para cada: repete os blocos uma vez para cada item da lista",
       blk(30, 40, "para cada f em frutas", "amarelo", 220) + blk(52, 78, "mostrar f", "roxo", 140) + t(240, 120, "maçã", 14) + t(240, 140, "uva", 14) + t(240, 160, "caju", 14), "amarelo")
    dd("adicionar|inserir", "Adicionar (inserir): colocar um item novo na lista",
       fila(30, 76, ["Ana", "Bia", "Caio"], w=56, size=14) + cel(218, 76, "Enzo", "#bbf7d0", 60, 36, 14) + t(248, 64, "novo!", 12, "verde", 900) + etiqueta(160, 160, "entra no fim: tamanho + 1", "verde", 12), "verde")
    dd("registro|ficha", "Registro (ficha): várias informações sobre uma coisa só",
       r(70, 30, 180, 130, "#fff", rx=10, lw=3, sombra=4) + r(70, 30, 180, 32, V["roxo"][0], rx=10, lw=3) + t(160, 52, "🗂️ ficha do aluno", 14, "#fff", 900, contorno=K)
       + t(86, 86, "nome: Ana", 15, K, 800, "start") + t(86, 112, "idade: 12", 15, K, 800, "start") + t(86, 138, "turma: 7º A", 15, K, 800, "start"), "roxo")
    dd("campo", "Campo: cada informação da ficha, com um nome (ex.: idade)",
       r(60, 40, 200, 110, "#fff", rx=10, lw=3, sombra=4) + t(80, 74, "nome: Ana", 15, K, 800, "start") + r(74, 88, 172, 30, "#fde68a", rx=6, lw=2.5) + t(80, 109, "idade: 12", 15, K, 900, "start")
       + t(80, 138, "turma: 7º A", 15, K, 800, "start") + etiqueta(160, 176, "um campo", "amarelo", 12), "amarelo")
    dd("valor", "Valor: o que está guardado num campo ou numa variável",
       r(40, 60, 110, 50, "#fff", rx=8, lw=3, sombra=3) + t(95, 92, "idade", 16, K, 900) + seta_grossa(158, 85, 194, "azul", 20) + cel(202, 62, "12", "#bbf7d0", 70, 46, 22) + etiqueta(237, 150, "valor", "verde", 12), "verde")
    dd("cadastro", "Cadastro: o conjunto das fichas, como numa secretaria",
       "".join(r(60 + i * 16, 36 + i * 14, 170, 100, "#fff", rx=8, lw=3, sombra=3) for i in range(3)) + t(177, 104, "nome: Bia", 14, K, 800) + t(177, 126, "turma: 7º B", 14, K, 800) + etiqueta(160, 178, "muitas fichas juntas", "roxo", 12), "roxo")
    dd("testar|teste", "Testar: rodar o programa para ver se faz o que devia",
       r(40, 50, 110, 46, V["verde"][0], rx=12, lw=3, sombra=4) + t(95, 82, "▶️ Rodar", 18, "#fff", 900, contorno=K) + emo(220, 92, "🔍", 56) + etiqueta(160, 156, "deu o que eu esperava?", "verde", 12), "verde")
    dd("resultado esperado", "Resultado esperado: o que o programa DEVIA mostrar",
       r(60, 36, 200, 110, "#dcfce7", rx=10, lw=3, sombra=3) + t(160, 66, "devia mostrar:", 14, "verde", 900) + t(160, 96, "pulo pulo pulo", 16, K, 900) + t(160, 124, "fim", 16, K, 900) + emo(262, 150, "🎯", 30), "verde")
    dd("resultado obtido", "Resultado obtido: o que o programa mostrou de verdade",
       r(60, 36, 200, 110, "#fee2e2", rx=10, lw=3, sombra=3) + t(160, 66, "mostrou:", 14, "vermelho", 900) + t(160, 96, "pulo fim pulo fim", 16, K, 900) + t(160, 124, "pulo fim", 16, K, 900) + emo(262, 150, "🤔", 30), "vermelho")
    dd("repeticao sem fim|loop infinito", "Repetição sem fim: o programa nunca para",
       p("M110 100 C 110 40, 210 40, 210 100 C 210 160, 110 160, 110 100", "none", 7) + seta(200, 140, 214, 122) + t(160, 108, "♾️", 40) + etiqueta(160, 182, "nunca para!", "vermelho", 12), "vermelho")
    dd("decompor|decomposicao", "Decompor: dividir um problema grande em partes menores",
       r(110, 26, 100, 50, V["roxo"][0], rx=10, lw=3, sombra=3) + t(160, 57, "🎉 festa", 16, "#fff", 900, contorno=K)
       + "".join(lig(160, 76, 50 + i * 73, 116) for i in range(4)) + "".join(r(22 + i * 73, 116, 58, 46, "#fff", rx=8, lw=3, sombra=2) + t(51 + i * 73, 146, e, 22) for i, e in enumerate("🎈🍰🎵🎮")), "roxo")
    dd("reaproveitar|reutilizar", "Reaproveitar: escrever uma vez e usar várias vezes",
       blk(30, 40, "para refrão", "roxo", 140) + blk(46, 76, "mostrar “la la la”", "roxo", 150) + blk(200, 40, "refrão", "roxo", 90) + blk(200, 86, "refrão", "roxo", 90) + blk(200, 132, "refrão", "roxo", 90)
       + etiqueta(100, 160, "1 vez escrito", "roxo", 12), "roxo")
    dd("bloco proprio|funcao", "Bloco próprio (função): um bloco com nome que você cria e chama quando quiser",
       r(40, 34, 240, 96, "#ede9fe", rx=12, lw=3, sombra=3) + blk(56, 46, "para alongar", "roxo", 160) + blk(72, 84, "mostrar “braços”", "rosa", 170) + etiqueta(160, 166, "🧩 Meus blocos", "roxo", 12), "roxo")
    dd("chamar", "Chamar: usar o bloco próprio no programa",
       blk(40, 46, "mostrar “corrida”", "rosa", 170) + blk(40, 84, "📣 alongar", "roxo", 170) + blk(40, 122, "mostrar “fim”", "rosa", 170) + emo(250, 110, "📣", 50), "roxo")
    dd("colaborar|colaboracao", "Colaborar: cada um faz uma parte e junta tudo",
       emo(90, 104, "🧑‍💻", 50) + emo(230, 104, "👩‍💻", 50) + t(160, 100, "🤝", 34) + etiqueta(160, 160, "cada um faz uma parte", "verde", 12), "verde")
    dd("programacao em dupla", "Programação em dupla: dois programadores, um computador",
       r(110, 40, 100, 70, "#334155", rx=8, sombra=3) + r(118, 48, 84, 54, "#dbeafe", rx=4, lw=2) + emo(70, 132, "🕹️", 40) + emo(250, 132, "🧭", 40) + etiqueta(160, 170, "piloto + navegador", "azul", 12), "azul")
    dd("piloto", "Piloto: quem fica com o mouse e o teclado e monta os blocos",
       emo(100, 110, "🕹️", 64) + r(170, 70, 110, 50, "#fff", rx=8, lw=3, sombra=3) + t(225, 101, "monta", 16, K, 900) + etiqueta(160, 166, "mouse e teclado", "azul", 12), "azul")
    dd("navegador da dupla", "Navegador (na dupla): quem lê, planeja e confere, sem pegar o mouse",
       emo(100, 110, "🧭", 64) + r(170, 60, 120, 70, "#fff", rx=8, lw=3, sombra=3) + t(230, 90, "lê, planeja", 14, K, 900) + t(230, 114, "e confere", 14, K, 900) + etiqueta(160, 166, "não pega o mouse", "verde", 12), "verde")
    dd("revezar|revezamento", "Revezar: trocar de papel de tempos em tempos",
       emo(90, 100, "🕹️", 46) + emo(230, 100, "🧭", 46) + p("M110 70 C 140 40, 180 40, 210 70", "none", 4) + seta(200, 60, 212, 72) + p("M210 130 C 180 160, 140 160, 110 130", "none", 4) + seta(120, 142, 108, 128)
       + etiqueta(160, 182, "a cada 10 minutos", "amarelo", 12), "amarelo")
    dd("plano|planejar", "Plano: decidir as partes e os passos antes de montar",
       r(80, 28, 160, 130, "#fff", rx=8, lw=3, sombra=4) + "".join(t(100, 60 + i * 26, f"{i + 1}. {s}", 14, K, 800, "start") for i, s in enumerate(["planejar", "montar", "testar", "trocar"])) + emo(262, 150, "📝", 34), "azul")
    dd("pista", "Pista: o sinal que ajuda a achar onde está o erro",
       emo(110, 110, "🕵️", 70) + r(180, 56, 120, 50, "#fff", rx=8, lw=3, sombra=3) + t(240, 86, "(sem idade)", 13, "vermelho", 900) + etiqueta(160, 166, "uma pista do bug", "amarelo", 12), "amarelo")
    dd("hipotese", "Hipótese: um palpite sobre onde está o erro, para testar",
       emo(100, 110, "🤔", 64) + r(160, 40, 140, 66, "#fff", rx=30, lw=3, sombra=3) + t(230, 70, "acho que é", 13, K, 800) + t(230, 90, "o repita…", 13, K, 900) + etiqueta(160, 166, "palpite para testar", "roxo", 12), "roxo")
    dd("corrigir", "Corrigir: consertar o erro e testar de novo",
       emo(100, 100, "🛠️", 60) + blk(160, 66, "repita 3 vezes", "amarelo", 130) + p("M170 120 L186 136 L214 104", "none", 7) + etiqueta(160, 166, "consertou!", "verde", 12), "verde")
    dd("quiz", "Quiz: jogo de perguntas e respostas",
       r(50, 30, 220, 130, "#fff", rx=12, lw=3, sombra=4) + t(160, 60, "❓ Qual é a capital?", 15, K, 900) + "".join(cel(66 + i * 50, 80, "ABCD"[i], V[cc][1], 40, 36) for i, cc in enumerate(["azul", "verde", "amarelo", "rosa"])) + t(160, 145, "🏆 3 de 4!", 15, K, 900), "azul")
    dd("gabarito", "Gabarito: a lista das respostas certas",
       r(80, 30, 160, 130, "#fff", rx=8, lw=3, sombra=4) + t(160, 56, "GABARITO", 15, "verde", 900) + "".join(t(120, 84 + i * 22, f"{i + 1}) {a} ✔", 15, K, 800, "start") for i, a in enumerate("BADC")), "verde")
    dd("contador|contadora", "Contador: variável que começa em 0 e soma 1 a cada vez",
       cel(60, 70, "0", "#fff", 46, 46, 22) + seta_grossa(112, 93, 140, "verde", 20) + cel(146, 70, "1", "#fff", 46, 46, 22) + seta_grossa(198, 93, 226, "verde", 20) + cel(232, 70, "2", "#bbf7d0", 46, 46, 22)
       + etiqueta(160, 160, "+1 a cada acerto", "verde", 12), "verde")
    dd("alterar … por 1|alterar por 1|alterar", "Alterar … por 1: soma 1 ao valor da variável",
       blk(40, 50, "alterar pontos por 1", "laranja" if "laranja" in V else "amarelo", 240, 40, 16) + cel(90, 116, "7", "#fff", 46, 40, 20) + seta_grossa(144, 136, 176, "amarelo", 20) + cel(184, 116, "8", "#fde68a", 46, 40, 20), "amarelo")
    dd("comparar|comparacao", "Comparar: ver se duas coisas são iguais (ou qual é maior)",
       cel(50, 70, "B", "#fff", 56, 50, 26) + t(160, 106, "=", 40, K, 900) + cel(214, 70, "B", "#fff", 56, 50, 26) + etiqueta(160, 160, "iguais? ✅", "azul", 13), "azul")
    # ============ 8º ano · listas, buscas e ordenação ============
    dd("ordenada|ordenado", "Lista ordenada: arrumada em ordem (crescente, decrescente ou alfabética)",
       "".join(r(40 + i * 50, 140 - (i + 1) * 20, 40, (i + 1) * 20, V["azul"][0], rx=4, lw=3) for i in range(5)) + "".join(t(60 + i * 50, 166, str(i + 1), 15, K, 900) for i in range(5)), "azul")
    dd("estrutura de dados", "Estrutura de dados: jeito de organizar os dados para usar depois (a lista é a mais simples)",
       fila(40, 50, ["8", "4", "6", "3"], w=44) + r(40, 108, 110, 60, "#fff", rx=8, lw=3, sombra=3) + t(95, 134, "nome: Ana", 13, K, 800) + t(95, 156, "idade: 12", 13, K, 800) + emo(240, 140, "🗄️", 46), "roxo")
    dd("remover|tirar", "Remover: tirar um item da lista (quem estava atrás anda para a frente)",
       fila(30, 70, ["Ana", "Bia", "Caio", "Duda"], w=58, size=14, hl=(1,), cor_hl="#fecaca") + p("M96 76 L136 100 M136 76 L96 100", "none", 5) + etiqueta(160, 150, "tamanho − 1", "vermelho", 12), "vermelho")
    dd("deslocar|deslocamento", "Deslocar: os itens andam uma posição (para a frente ou para trás)",
       fila(40, 66, ["Gabi", "Ana", "Caio"], w=64, size=14, hl=(0,), cor_hl="#bbf7d0") + "".join(seta(80 + i * 68, 124, 120 + i * 68, 124) for i in range(2)) + etiqueta(160, 166, "todo mundo anda uma casa", "azul", 12), "azul")
    dd("operacao|operacoes", "Operação: uma ação com a lista (inserir, remover, contar…)",
       blk(40, 40, "➕ inserir", "verde", 110) + blk(170, 40, "➖ remover", "vermelho", 110) + blk(40, 94, "🔢 contar", "azul", 110) + blk(170, 94, "🔎 procurar", "amarelo", 110) + etiqueta(160, 160, "ações com a lista", "roxo", 12), "roxo")
    dd("busca|buscar|procurar", "Busca: procurar um item numa lista",
       fila(20, 76, ["5", "8", "2", "9", "4"], w=40, nums=False) + emo(272, 108, "🔎", 40) + etiqueta(140, 150, "onde está o 9?", "amarelo", 12), "amarelo")
    dd("busca sequencial|busca linear", "Busca sequencial: olhar um por um, desde o começo",
       fila(30, 70, ["5", "8", "2", "9", "4"], w=44, hl=(0, 1, 2), cor_hl="#e2e8f0") + cel(174, 70, "9", "#bbf7d0", 44, 36) + "".join(seta(52 + i * 48, 128, 86 + i * 48, 128) for i in range(3)) + etiqueta(160, 168, "1ª, 2ª, 3ª… até achar", "verde", 12), "verde")
    dd("melhor caso", "Melhor caso: o item é achado logo na 1ª comparação",
       fila(20, 76, ["9", "5", "8", "2", "4"], w=40, hl=(0,), cor_hl="#bbf7d0") + emo(268, 110, "😀", 44) + etiqueta(150, 150, "1 comparação só", "verde", 12), "verde")
    dd("pior caso", "Pior caso: o item é o último (ou não está): olha a lista inteira",
       fila(20, 76, ["5", "8", "2", "4", "9"], w=40, hl=(4,), cor_hl="#fecaca") + emo(268, 110, "😰", 44) + etiqueta(150, 150, "olhou todos", "vermelho", 12), "vermelho")
    dd("eficiencia|eficiente", "Eficiência: fazer o trabalho com menos passos (mais rápido)",
       emo(80, 104, "🐢", 54) + t(160, 102, "×", 28, K, 900) + emo(240, 104, "🐇", 54) + etiqueta(160, 160, "menos comparações", "verde", 12), "verde")
    dd("busca binaria", "Busca binária: olhar o meio e jogar fora metade a cada vez (só em lista ordenada)",
       fila(30, 60, [3, 7, 12, 18, 25, 31, 40], w=36, hl=(3,), size=14) + r(30, 112, 116, 30, "#e2e8f0", rx=6, lw=2.5) + t(88, 132, "fora!", 13, "cinza", 900) + seta(200, 126, 250, 126) + etiqueta(160, 172, "procura pelo meio", "azul", 12), "azul")
    dd("meio", "Meio: o item do centro da parte que sobrou",
       fila(40, 76, [1, 2, 3, 4, 5], w=40, hl=(2,)) + seta_baixo(132, 30, 70, "amarelo", 20) + etiqueta(150, 150, "o do meio", "amarelo", 12), "amarelo")
    dd("descartar", "Descartar: jogar fora a parte onde o item com certeza não está",
       fila(40, 70, [3, 7, 12, 18, 25], w=40) + p("M40 120 H124", "none", 4) + r(36, 64, 92, 48, "none", rx=6, lw=0) + emo(84, 160, "🗑️", 30) + p("M44 74 L124 104 M124 74 L44 104", "none", 4) + etiqueta(220, 150, "metade fora", "cinza", 12), "cinza")
    dd("dividir para conquistar", "Dividir para conquistar: partir o problema ao meio, de novo e de novo",
       r(40, 34, 240, 30, V["azul"][1], rx=6, lw=3) + r(40, 78, 116, 30, V["azul"][1], rx=6, lw=3) + r(164, 78, 116, 30, "#e2e8f0", rx=6, lw=3) + r(40, 122, 54, 30, V["azul"][1], rx=6, lw=3) + r(102, 122, 54, 30, "#e2e8f0", rx=6, lw=3)
       + t(160, 172, "metade, metade, metade…", 14, K, 900), "azul")
    dd("ordenar", "Ordenar: arrumar os itens em ordem",
       fila(30, 50, [6, 3, 9, 1], w=40, nums=False) + seta_baixo(110, 92, 118, "verde", 20) + fila(30, 124, [1, 3, 6, 9], w=40, nums=False, hl=(0, 1, 2, 3), cor_hl="#bbf7d0") + emo(260, 110, "🧹", 44), "verde")
    dd("metodo da bolha|bubble sort|bolha", "Método da bolha: comparar vizinhos e trocar se o da esquerda for maior",
       fila(40, 90, [6, 3, 9, 1], w=44, hl=(0, 1), nums=False) + p("M62 82 C 72 56, 104 56, 114 82", "none", 3.5) + seta(108, 72, 115, 83) + "".join(c(240 + dx, 70 - dy, rr, "#cffafe", 2.5) for dx, dy, rr in [(0, 0, 14), (22, 30, 10), (6, 54, 7)]) + etiqueta(150, 160, "troca vizinhos", "ciano", 12), "ciano")
    dd("vizinhos", "Vizinhos: dois itens um ao lado do outro na lista",
       fila(50, 80, [6, 3, 9, 1], w=48, hl=(1, 2), nums=False) + p("M104 136 H196", "none", 4) + etiqueta(150, 166, "lado a lado", "amarelo", 12), "amarelo")
    dd("troca|trocar", "Troca: dois itens mudam de lugar",
       cel(80, 80, "6", "#fde68a", 50, 46, 22) + cel(190, 80, "3", "#fde68a", 50, 46, 22) + p("M105 74 C 125 34, 195 34, 215 74", "none", 4) + seta(207, 62, 216, 76) + p("M215 132 C 195 170, 125 170, 105 132", "none", 4) + seta(113, 144, 104, 130), "amarelo")
    dd("passada", "Passada: uma volta comparando os vizinhos do começo ao fim",
       fila(40, 64, [3, 6, 1, 9], w=50, nums=False, hl=(3,), cor_hl="#bbf7d0") + p("M50 122 H250", "none", 4) + seta(236, 122, 254, 122) + etiqueta(150, 160, "o maior chegou ao fim", "verde", 12), "verde")
    dd("crescente", "Crescente: do menor para o maior",
       "".join(r(50 + i * 54, 150 - (i + 1) * 26, 40, (i + 1) * 26, V["verde"][0], rx=4, lw=3) + t(70 + i * 54, 172, str([1, 3, 6, 9][i]), 15, K, 900) for i in range(4)), "verde")
    dd("recursao|recursivo|recursiva", "Recursão: resolver um problema com uma versão menor dele mesmo (como a matrioska)",
       "".join(p(f"M{160 - w} {150} Q {160 - w} {150 - h} {160} {150 - h} Q {160 + w} {150 - h} {160 + w} {150} Z", V[cc][0], 3) for w, h, cc in [(70, 120, "vermelho"), (50, 86, "amarelo"), (30, 52, "verde"), (14, 24, "azul")]), "vermelho")
    dd("caso base", "Caso base: o caso pequeno que se resolve direto e faz a recursão parar",
       p("M140 150 Q 140 110 160 110 Q 180 110 180 150 Z", V["azul"][0], 3) + emo(160, 80, "🛑", 36) + etiqueta(160, 176, "a bonequinha que não abre", "azul", 12), "azul")
    dd("passo recursivo", "Passo recursivo: resolver usando o mesmo problema, só que menor",
       p("M60 150 Q 60 60 110 60 Q 160 60 160 150 Z", V["vermelho"][0], 3) + seta_grossa(170, 110, 206, "amarelo", 22) + p("M220 150 Q 220 96 250 96 Q 280 96 280 150 Z", V["amarelo"][0], 3) + etiqueta(160, 182, "abre e repete com a de dentro", "amarelo", 11), "amarelo")
    dd("ordenacao por selecao|selection sort|selecao", "Ordenação por seleção: a cada rodada, o menor do que sobrou vai para a frente",
       fila(40, 70, [7, 2, 9, 4], w=50, hl=(1,), nums=False) + p("M65 130 C 80 160, 120 160, 115 130", "none", 4) + seta(112, 140, 114, 128) + etiqueta(150, 172, "o menor vai para a frente", "amarelo", 12), "amarelo")
    dd("rodada", "Rodada: cada volta em que uma posição fica pronta",
       fila(40, 76, [2, 7, 9, 4], w=50, hl=(0,), cor_hl="#bbf7d0", nums=False) + t(65, 64, "✔", 16, "verde", 900) + etiqueta(160, 156, "1ª rodada: posição 1 pronta", "verde", 12), "verde")
    dd("minimo|menor", "Mínimo: o menor item da lista",
       fila(40, 76, [7, 2, 9, 4], w=50, hl=(1,), nums=False) + emo(115, 56, "⬇️", 22) + etiqueta(150, 156, "o menor = 2", "amarelo", 12), "amarelo")
    dd("parte ordenada", "Parte ordenada: o começo da lista que já está no lugar certo",
       fila(40, 76, [2, 4, 9, 7], w=50, hl=(0, 1), cor_hl="#bbf7d0", nums=False) + p("M40 128 H134", "none", 5) + etiqueta(88, 156, "pronta", "verde", 12) + etiqueta(200, 156, "falta", "cinza", 12), "verde")
    dd("fractal|fractais", "Fractal: figura em que uma parte é parecida com o todo",
       p("M160 30 L270 170 L50 170 Z", V["verde"][0], 3) + p("M160 100 L215 170 L105 170 Z", V["verde"][1], 3) + p("M105 100 L215 100 L160 170 Z", "#fff", 3), "verde")
    dd("autossemelhanca", "Autossemelhança: a parte parece o todo, em tamanho menor",
       emo(100, 120, "🌿", 70) + t(160, 110, "≈", 30, K, 900) + emo(225, 112, "🌿", 34) + etiqueta(160, 168, "a parte parece o todo", "verde", 12), "verde")
    dd("nivel|niveis", "Nível: em que etapa (ou andar) da regra a figura está",
       "".join(r(50 + i * 70, 150 - (i + 1) * 34, 66, (i + 1) * 34, V["roxo"][1], rx=4, lw=3) + t(83 + i * 70, 170, f"nível {i}", 12, K, 900) for i in range(3)), "roxo")
    dd("triangulo de sierpinski|sierpinski", "Triângulo de Sierpinski: cada triângulo vira 3 menores",
       "".join(p(f"M{x} {y} l{s / 2} {-s * 0.87} l{s / 2} {s * 0.87} Z", V["amarelo"][0], 2.5) for x, y, s in [(70, 170, 90), (160, 170, 90), (115, 92, 90)]), "amarelo")
    dd("multiplicar a cada nivel", "Multiplicar a cada nível: 1, 3, 9, 27… (vezes 3)",
       "".join(cel(30 + i * 68, 70, v, "#fff", 54, 44, 20) for i, v in enumerate([1, 3, 9, 27])) + "".join(t(91 + i * 68, 64, "×3", 13, "roxo", 900) for i in range(3)) + etiqueta(160, 160, "vezes 3 a cada nível", "roxo", 12), "roxo")
    # ============ 9º ano · grafos, árvores, autômatos e eventos ============
    dd("grafo|grafos", "Grafo: pontos (vértices) ligados por linhas (arestas)", grafo_mini(), "azul")
    dd("vertice|vertices", "Vértice: um ponto do grafo (uma esquina, uma casa, a escola)", grafo_mini(hl="B") + etiqueta(160, 182, "vértice = ponto", "amarelo", 12), "amarelo")
    dd("aresta|arestas", "Aresta: a ligação entre dois vértices (uma rua)",
       lig(60, 100, 260, 100) + p("M60 100 L260 100", "none", 9).replace('stroke="#1c1f22"', 'stroke="#f59e0b"') + no(60, 100, "A") + no(260, 100, "B") + etiqueta(160, 160, "aresta = ligação", "amarelo", 12), "amarelo")
    dd("peso", "Peso: o número na aresta (minutos ou metros)", grafo_mini(pesos=True), "azul")
    dd("grau", "Grau: quantas arestas saem de um vértice",
       "".join(lig(160, 95, 160 + dx, 95 + dy) + no(160 + dx, 95 + dy, "", "azul", 12) for dx, dy in [(-90, -45), (90, -45), (-90, 55), (90, 55)]) + no(160, 95, "4", "amarelo", 22, 18) + etiqueta(160, 182, "grau 4", "amarelo", 12), "amarelo")
    dd("caminho mais curto|menor caminho", "Caminho mais curto: o de menor soma dos pesos",
       grafo_mini(pesos=True).replace("", "") + p("M60 100 L160 45 L260 100", "none", 8).replace('stroke="#1c1f22"', 'stroke="#22c55e"') + "".join(no(*xy, k) for k, xy in [("A", (60, 100)), ("B", (160, 45)), ("D", (260, 100))]) + etiqueta(160, 182, "3 + 2 = 5 ✅", "verde", 12), "verde")
    dd("gps", "GPS: o sistema que mostra onde você está e calcula o caminho", emo(110, 110, "🛰️", 56) + emo(220, 120, "📱", 56) + etiqueta(160, 170, "onde estou? por onde vou?", "azul", 12), "azul")
    dd("arvore", "Árvore (na computação): grafo de cabeça para baixo, com raiz em cima e folhas embaixo", arvore_mini(), "verde")
    dd("raiz", "Raiz: o vértice de cima, onde a árvore começa", arvore_mini(cores=("amarelo", "cinza", "cinza")) + etiqueta(250, 40, "raiz", "amarelo", 12), "amarelo")
    dd("pai|filho", "Pai e filho: quem está logo acima é o pai; logo abaixo, os filhos",
       lig(160, 50, 90, 130) + lig(160, 50, 230, 130) + no(160, 50, "pai", "roxo", 26, 12) + no(90, 130, "filho", "azul", 26, 11) + no(230, 130, "filho", "azul", 26, 11), "roxo")
    dd("folha|folhas", "Folha: o vértice sem filhos, no fim de um galho", arvore_mini(cores=("cinza", "cinza", "verde")) + etiqueta(160, 184, "folhas: sem filhos", "verde", 12), "verde")
    dd("ciclo|ciclos", "Ciclo: uma volta que termina onde começou",
       p("M110 100 C 110 40, 210 40, 210 100 C 210 160, 110 160, 110 100", "none", 6) + seta(206, 124, 210, 104) + "".join(no(x, y, "", c_, 13) for x, y, c_ in [(160, 55, "verde"), (210, 100, "amarelo"), (160, 145, "vermelho"), (110, 100, "azul")]) + etiqueta(160, 186, "volta ao começo", "roxo", 11), "roxo")
    dd("hierarquia", "Hierarquia: organização em níveis, de cima para baixo",
       blk(110, 30, "diretora", "roxo", 100) + blk(40, 90, "coordenação", "azul", 110) + blk(170, 90, "secretaria", "azul", 110) + blk(40, 146, "professores", "verde", 110) + lig(160, 62, 95, 90) + lig(160, 62, 225, 90) + lig(95, 122, 95, 146), "roxo")
    dd("arvore de decisao", "Árvore de decisão: perguntas de sim ou não que levam a uma decisão",
       no(160, 40, "?", "roxo", 18, 18) + lig(160, 40, 90, 100) + lig(160, 40, 230, 100) + t(112, 66, "sim", 12, "verde", 900) + t(208, 66, "não", 12, "vermelho", 900)
       + emo(90, 120, "🖥️", 34) + emo(230, 120, "✏️", 34) + etiqueta(160, 172, "cada folha é uma decisão", "roxo", 12), "roxo")
    dd("decisao", "Decisão: a resposta final, numa folha da árvore", emo(160, 104, "✅", 64) + etiqueta(160, 166, "a escolha final", "verde", 12), "verde")
    dd("profundidade", "Profundidade: o máximo de perguntas até decidir",
       arvore_mini(cores=("roxo", "roxo", "amarelo")) + p("M290 40 V155", "none", 3) + p("M284 40 H296 M284 155 H296", "none", 3) + t(300, 104, "2", 16, K, 900, "end"), "roxo")
    dd("ia|inteligencia artificial", "IA (inteligência artificial): programas que aprendem com exemplos para decidir",
       r(90, 40, 140, 100, "#fff", rx=14, lw=3, sombra=4) + c(130, 82, 10, V["azul"][0], 3) + c(190, 82, 10, V["azul"][0], 3) + p("M130 112 Q 160 128 190 112", "none", 4) + p("M160 40 V22", "none", 4) + c(160, 18, 6, V["amarelo"][0], 2.5)
       + etiqueta(160, 172, "aprende com exemplos", "azul", 12), "azul")
    dd("lista de vizinhos|lista de adjacencia", "Lista de vizinhos: para cada vértice, a lista dos ligados a ele",
       no(60, 90, "Pt", "amarelo", 22, 13) + seta_grossa(90, 90, 120, "amarelo", 18) + fila(126, 72, ["Po", "Ca", "In", "Bi"], w=40, size=13) + etiqueta(160, 160, "Pátio: 4 vizinhos", "amarelo", 12), "amarelo")
    dd("vizinho", "Vizinho: um vértice ligado diretamente a outro", lig(90, 100, 230, 100) + no(90, 100, "A", "azul", 24) + no(230, 100, "B", "amarelo", 24) + etiqueta(160, 160, "B é vizinho de A", "amarelo", 12), "amarelo")
    dd("representar|representacao", "Representar: guardar uma coisa do mundo num formato que o computador entende",
       emo(80, 110, "🗺️", 56) + seta_grossa(126, 100, 170, "azul", 24) + fila(180, 82, ["A", "B"], w=36, nums=False) + etiqueta(160, 166, "mapa → dados", "azul", 12), "azul")
    dd("se aninhado", "Se aninhado: um se … senão dentro de outro",
       r(40, 30, 240, 136, V["amarelo"][1], rx=10, lw=3) + blk(52, 40, "se é eletrônico?", "amarelo", 170) + r(64, 84, 206, 70, "#fff", rx=8, lw=3) + blk(74, 94, "se tem tela?", "azul", 150) + t(90, 146, "senão…", 13, K, 800, "start"), "amarelo")
    dd("automato|automatos|maquina de estados", "Autômato: máquina que está sempre num estado e muda conforme as entradas",
       no(80, 90, "🔒", "vermelho", 30, 22) + no(240, 90, "🔓", "verde", 30, 22) + p("M110 74 C 140 50, 180 50, 210 74", "none", 4) + seta(200, 64, 212, 76) + p("M210 108 C 180 132, 140 132, 110 108", "none", 4) + seta(122, 120, 108, 106)
       + t(160, 46, "💳", 18) + t(160, 152, "🚶", 18), "verde")
    dd("estado", "Estado: como a máquina está agora (travada, liberada…)", no(160, 90, "🔒", "vermelho", 44, 34) + etiqueta(160, 168, "estado: travada", "vermelho", 12), "vermelho")
    dd("entrada", "Entrada: o que acontece com a máquina (cartão, empurrar, tique)", emo(110, 108, "💳", 56) + emo(210, 108, "🚶", 56) + etiqueta(160, 166, "o que acontece", "azul", 12), "azul")
    dd("transicao|transicoes", "Transição: a mudança de um estado para outro",
       no(70, 90, "🔒", "vermelho", 30, 22) + seta_grossa(110, 90, 210, "amarelo", 26) + no(250, 90, "🔓", "verde", 30, 22) + etiqueta(160, 160, "mudou de estado", "amarelo", 12), "amarelo")
    dd("tabela de transicao", "Tabela de transição: para cada estado e entrada, o próximo estado",
       "".join(cel(30 + j * 90, 40 + i * 40, v, "#fde68a" if i == 0 else "#fff", 86, 36, 13) for i, row in enumerate([["estado", "entrada", "próximo"], ["🔒", "💳", "🔓"], ["🔓", "🚶", "🔒"]]) for j, v in enumerate(row)), "amarelo")
    dd("estado inicial", "Estado inicial: o estado em que a máquina começa",
       seta_grossa(40, 90, 104, "verde", 24) + no(150, 90, "🔒", "vermelho", 34, 26) + etiqueta(160, 160, "começa travada", "verde", 12), "verde")
    dd("evento|eventos", "Evento: algo que acontece e o programa reage (tocar, chegar mensagem…)", emo(110, 108, "👆", 56) + emo(210, 108, "🔔", 56) + etiqueta(160, 166, "algo acontece!", "amarelo", 12), "amarelo")
    dd("programacao por eventos", "Programação por eventos: o programa espera algo acontecer e então reage",
       blk(30, 46, "⚡ quando 🟢 botão", "amarelo", 200, 36) + blk(52, 88, "alterar cliques por 1", "azul", 200) + blk(52, 124, "mostrar cliques", "roxo", 200) + emo(270, 100, "⏳", 36), "amarelo")
    dd("tratador de evento|tratador", "Tratador de evento: os blocos que rodam quando o evento acontece",
       r(40, 36, 240, 120, V["amarelo"][1], rx=12, lw=3) + blk(52, 46, "⚡ quando 🔔 mensagem", "amarelo", 210) + blk(70, 90, "vibrar e mostrar", "roxo", 190) + etiqueta(160, 178, "roda toda vez", "amarelo", 12), "amarelo")
    dd("sensor|sensores", "Sensor: peça que percebe algo do mundo (movimento, luz, calor)",
       r(130, 40, 60, 40, "#334155", rx=10, sombra=3) + c(160, 60, 10, V["vermelho"][0], 3) + "".join(p(f"M{160 - w} {100 + i * 18} Q 160 {120 + i * 18} {160 + w} {100 + i * 18}", "none", 3) for i, w in enumerate([24, 40, 56])) + emo(160, 176, "🚶", 30), "vermelho")
    dd("notificacao|notificacoes", "Notificação: o aviso que aparece no celular",
       r(110, 26, 100, 150, "#334155", rx=14, sombra=4) + r(118, 40, 84, 122, "#fff", rx=6, lw=2) + r(122, 50, 76, 32, V["verde"][1], rx=6, lw=2.5) + t(160, 71, "🔔 nova msg", 11, K, 900), "verde")
    dd("tique", "Tique: o evento de quando o tempo acaba", emo(120, 110, "⏱️", 64) + t(220, 104, "tique!", 22, K, 900) + etiqueta(160, 168, "o tempo acabou", "azul", 12), "azul")
    dd("temporizador|timer", "Temporizador: conta o tempo e avisa quando acaba", emo(160, 110, "⏲️", 76) + etiqueta(160, 172, "apita quando acaba", "vermelho", 12), "vermelho")
    dd("pedestre", "Pedestre: quem atravessa a rua a pé", emo(110, 110, "🚶", 64) + emo(220, 110, "🚦", 64) + etiqueta(160, 172, "o botão do pedestre", "verde", 12), "verde")
    dd("planta|planta baixa", "Planta: o desenho de um lugar visto de cima",
       r(40, 30, 240, 140, "#fff", rx=4, lw=3) + p("M140 30 V100 M40 100 H200 M200 100 V170", "none", 3) + t(90, 70, "Pátio", 13, K, 800) + t(220, 70, "Biblioteca", 12, K, 800) + t(120, 140, "Cantina", 13, K, 800) + t(240, 140, "Sala", 13, K, 800), "cinza")
    dd("mais conectado", "Mais conectado: o vértice com mais ligações (maior grau)",
       "".join(lig(160, 95, 160 + dx, 95 + dy) + no(160 + dx, 95 + dy, "", "azul", 12) for dx, dy in [(-100, -40), (100, -40), (-100, 50), (100, 50), (0, -65)]) + no(160, 95, "⭐", "amarelo", 22, 18), "amarelo")
    dd("rota de fuga", "Rota de fuga: o caminho mais curto até a saída numa emergência",
       r(40, 40, 240, 110, "#fff", rx=6, lw=3) + p("M80 120 H160 V70 H250", "none", 7).replace('stroke="#1c1f22"', 'stroke="#22c55e"') + seta(236, 70, 256, 70) + t(270, 60, "🚪", 22) + t(80, 112, "🏃", 22) + etiqueta(160, 176, "saída de emergência", "verde", 12), "verde")
    dd("interditar|interditado", "Interditar: fechar um caminho (rua ou corredor) para ninguém passar",
       lig(60, 90, 260, 90) + no(60, 90, "A") + no(260, 90, "B") + emo(160, 104, "🚧", 44) + etiqueta(160, 160, "caminho fechado", "vermelho", 12), "vermelho")

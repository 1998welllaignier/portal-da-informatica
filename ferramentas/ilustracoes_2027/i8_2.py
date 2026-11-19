"""Ilustrações — 8º ano — 2º bimestre de 2027 (informatica-8ano-2027-2bim): Internet por dentro.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_8_2.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def pacote(x, y, n, cor="azul", w=74):
    return (caixa(x, y, w, 52, cor=cor, fundo=cor + "_c", rx=8, larg=2.5)
            + f'<path d="M{x} {y+16} h{w}" stroke="{COR[cor]}" stroke-width="2"/>'
            + t(x + w / 2, y + 13, f"nº {n}", 11, cor, 800) + emoji(x + w / 2, y + 44, "🧩", 20))


def roteador(x, y, rot="roteador"):
    return (caixa(x - 34, y - 16, 68, 32, cor="tinta", fundo="#e2e8f0", rx=8, larg=2.5)
            + "".join(f'<circle cx="{x - 18 + i * 12}" cy="{y + 2}" r="3" fill="{COR["verde"]}"/>' for i in range(4))
            + f'<path d="M{x - 22} {y - 16} v-14 M{x + 22} {y - 16} v-14" stroke="{COR["tinta"]}" stroke-width="3" stroke-linecap="round"/>'
            + t(x, y + 34, rot, 12, "tinta", 700))


# ======================= MISSÃO 1 =======================
c = [emoji(60, 150, "📱", 50), t(60, 178, "seu celular", 12, "tinta", 700)]
c.append(caixa(18, 20, 84, 54, cor="roxo", fundo="roxo_c", rx=8) + emoji(60, 58, "🖼️", 30) + t(60, 16, "a foto", 12, "roxo", 800))
c.append(seta(60, 78, 60, 104, "roxo", 2.5))
for i, (x, y) in enumerate([(150, 40), (150, 150)]):
    c.append(pacote(x, y, i + 1))
c.append(t(187, 222, "cortada em pacotes", 12, "azul", 800))
c.append(roteador(330, 60, "roteador"))
c.append(roteador(330, 190, "roteador"))
c.append(roteador(480, 125, "roteador"))
c.append(seta(226, 66, 292, 62, "azul", 3) + seta(226, 176, 292, 188, "azul", 3))
c.append(seta(368, 66, 444, 112, "azul", 3) + seta(368, 186, 444, 140, "azul", 3))
c.append(seta(516, 125, 586, 125, "azul", 3))
c.append(emoji(640, 136, "📱", 54) + t(640, 166, "celular do amigo", 12, "tinta", 700))
c.append(caixa(590, 190, 110, 48, cor="verde", fundo="verde_c", rx=8) + t(645, 210, "junta pelo nº", 12, "verde", 800) + t(645, 228, "1, 2, 3…", 12, "verde", 800))
c.append(etiqueta(408, 260, "🔀 cada pacote pode ir por um caminho diferente", "amarelo", 13))
c.append(etiqueta(560, 30, "🏠 IP de destino em cada pacote", "azul", 12))
fig("m1", "O que o pacote leva Para que serve Parece com",
    "A foto é cortada em pacotes numerados; cada pacote vai por um caminho, passando por roteadores, e o celular do amigo junta tudo pelo número.",
    720, 290, "".join(c), "Os pacotes viajam separados e são montados de novo no destino.")

# ======================= MISSÃO 2 =======================
c = [caixa(14, 14, 330, 236, cor="roxo", fundo="roxo_c", rx=16), t(179, 42, "📒 Agenda do celular", 16, "roxo", 800)]
c.append(caixa(40, 64, 278, 46, cor="roxo", fundo="papel", rx=10) + t(60, 93, "Mãe", 16, "tinta", 800, "start") + t(300, 93, "(94) 9 ••••-••••", 13, "suave", 700, "end"))
c.append(seta(179, 116, 179, 160, "roxo", 3) + t(240, 144, "acha o número", 12, "roxo", 700))
c.append(caixa(84, 166, 190, 44, cor="verde", fundo="verde_c", rx=10) + t(179, 194, "📞 liga para ela", 14, "verde", 800))
c.append(caixa(376, 14, 330, 236, cor="azul", fundo="azul_c", rx=16) + t(541, 42, "🌐 DNS da internet", 16, "azul", 800))
c.append(caixa(398, 64, 286, 46, cor="azul", fundo="papel", rx=10) + t(541, 93, "portal.professorwell.com.br", 13, "tinta", 800))
c.append(seta(541, 116, 541, 160, "azul", 3) + t(604, 144, "acha o IP", 12, "azul", 700))
c.append(caixa(430, 166, 222, 44, cor="verde", fundo="verde_c", rx=10) + t(541, 194, "203.0.113.25 (exemplo)", 14, "verde", 800))
c.append(etiqueta(360, 280, "nome fácil de lembrar → número que o computador usa", "amarelo", 13))
fig("m2", "Agenda do celular Internet",
    "Comparação: a agenda do celular acha o número da Mãe pelo nome; o DNS acha o endereço IP do site pelo nome portal.professorwell.com.br.",
    720, 300, "".join(c), "O DNS é a agenda da internet: nome → endereço IP.")

# ======================= MISSÃO 3 =======================
c = [caixa(0, 0, 720, 300, cor="azul_c", fundo="#e0f2fe", rx=16, larg=0)]
c.append(f'<path d="M0 230 Q180 210 360 232 T720 226 V300 H0Z" fill="#bae6fd"/>')
for x, rot in ((70, "América do Norte"), (620, "Europa")):
    c.append(caixa(x - 62, 40, 124, 60, cor="tinta", fundo="#dcfce7", rx=14, larg=2) + t(x, 76, rot, 12, "tinta", 800))
c.append(caixa(278, 120, 164, 64, cor="tinta", fundo="#dcfce7", rx=14, larg=2) + t(360, 146, "🇧🇷 Brasil", 14, "tinta", 800) + t(360, 168, "📍 Fortaleza (CE)", 12, "vermelho", 800))
c.append(f'<path d="M300 150 Q190 150 120 100" fill="none" stroke="{COR["amarelo"]}" stroke-width="6" stroke-linecap="round"/>')
c.append(f'<path d="M420 150 Q540 150 590 100" fill="none" stroke="{COR["amarelo"]}" stroke-width="6" stroke-linecap="round"/>')
c.append(f'<path d="M360 184 Q360 250 470 270" fill="none" stroke="{COR["amarelo"]}" stroke-width="6" stroke-linecap="round"/>')
c.append(etiqueta(470, 270, "rumo à África", "amarelo", 12))
c.append(etiqueta(190, 196, "🌊 cabo submarino de fibra óptica", "azul", 12))
c.append(etiqueta(560, 196, "💡 dados como pulsos de luz", "amarelo", 12))
c.append(etiqueta(360, 24, "Esquema simplificado (fora de escala)", "suave", 11))
fig("m3", "Parte O que é Detalhe",
    "Esquema simplificado: cabos submarinos de fibra óptica saem de Fortaleza, no Brasil, em direção à América do Norte, à Europa e à África, levando os dados como pulsos de luz.",
    720, 300, "".join(c), "A maior parte dos dados entre continentes passa por cabos no fundo do mar.")

# ======================= MISSÃO 4 =======================
c = [emoji(110, 180, "📱", 64), t(110, 214, "celular", 13, "tinta", 700), emoji(610, 180, "💻", 64), t(610, 214, "computador", 13, "tinta", 700)]
c.append(f'<path d="M290 110 a40 40 0 0 1 70 -30 a50 50 0 0 1 90 20 a34 34 0 0 1 -6 66 h-150 a32 32 0 0 1 -4 -56z" fill="#e0f2fe" stroke="{COR["azul"]}" stroke-width="3"/>')
c.append(t(366, 128, "☁️ nuvem", 15, "azul", 800) + t(366, 148, "(servidores num data center)", 11, "azul", 700))
c.append(seta(150, 160, 280, 130, "verde", 3, curva=-20) + seta(282, 150, 152, 182, "verde", 3, curva=20))
c.append(seta(570, 160, 450, 130, "verde", 3, curva=-20) + seta(448, 150, 568, 182, "verde", 3, curva=20))
c.append(etiqueta(366, 244, "🔄 sincronizar: mudou num, aparece no outro", "verde", 13))
c.append(etiqueta(366, 30, "📄 o mesmo arquivo nos dois aparelhos", "roxo", 12))
fig("m4", "Guardar só no aparelho Guardar na nuvem",
    "O celular e o computador ficam ligados à nuvem (servidores num data center) por setas de ida e volta: o mesmo arquivo aparece nos dois, sincronizado.",
    720, 280, "".join(c), "Na nuvem, o arquivo fica num servidor e aparece em todos os seus aparelhos.")

# ======================= MISSÃO 5 =======================
c = [t(20, 30, "1 núcleo (uma tarefa de cada vez)", 14, "vermelho", 800, "start")]
for i in range(4):
    c.append(caixa(20 + i * 150, 44, 146, 40, cor="vermelho", fundo="vermelho_c", rx=8, larg=2) + t(93 + i * 150, 70, f"tarefa {i + 1}", 13, "vermelho", 800))
c.append(t(640, 70, "= 40 min", 15, "vermelho", 800, "start"))
c.append(t(20, 130, "4 núcleos (ao mesmo tempo)", 14, "verde", 800, "start"))
for i in range(4):
    c.append(caixa(20, 144 + i * 44, 146, 38, cor="verde", fundo="verde_c", rx=8, larg=2) + t(93, 168 + i * 44, f"núcleo {i + 1}: tarefa {i + 1}", 12, "verde", 800))
c.append(t(180, 236, "= 10 min", 15, "verde", 800, "start"))
c.append(seta(20, 330, 620, 330, "suave", 2.5) + t(320, 352, "⏱️ tempo →  (cada tarefa: 10 minutos)", 12, "suave", 700))
fig("m5", "Trabalho 1 pessoa (ou 1 núcleo) 4 pessoas (ou 4 núcleos)",
    "Linha do tempo: com 1 núcleo, as 4 tarefas ficam uma depois da outra (40 minutos); com 4 núcleos, as 4 tarefas acontecem ao mesmo tempo (10 minutos).",
    720, 370, "".join(c), "Paralelismo: dividir o trabalho entre os núcleos.")

# ======================= MISSÃO 6 =======================
c = []
pain = [("📝 Lista", "azul"), ("🚶 Fila", "amarelo"), ("📋 Tabela", "verde"), ("🕸️ Grafo", "roxo")]
for i, (rot, cor) in enumerate(pain):
    x = 10 + i * 178
    c.append(caixa(x, 10, 168, 220, cor=cor, fundo=cor + "_c", rx=14) + t(x + 84, 38, rot, 15, cor, 800))
x = 10
for j, nome in enumerate(["Ana", "Bia", "Caio", "Davi"]):
    c.append(caixa(x + 24, 54 + j * 38, 120, 30, cor="azul", fundo="papel", rx=6, larg=2) + t(x + 40, 74 + j * 38, str(j + 1), 12, "azul", 800) + t(x + 96, 74 + j * 38, nome, 13, "tinta", 700))
x = 188
for j in range(3):
    c.append(emoji(x + 40 + j * 44, 120, "🧍", 32))
c.append(seta(x + 160, 108, x + 132, 108, "amarelo", 3) + t(x + 84, 160, "entra no fim", 12, "amarelo", 700) + t(x + 84, 180, "sai na frente", 12, "amarelo", 700))
c.append(t(x + 84, 212, "1º a entrar = 1º a sair", 11, "amarelo", 800))
x = 366
for j, linha in enumerate([("Nome", "Nota"), ("Ana", "8"), ("Bia", "9")]):
    for k, cel in enumerate(linha):
        c.append(caixa(x + 16 + k * 70, 56 + j * 36, 70, 36, cor="verde", fundo="verde_c" if j == 0 else "papel", rx=0, larg=1.5) + t(x + 51 + k * 70, 80 + j * 36, cel, 13, "tinta", 800 if j == 0 else 600))
c.append(t(x + 84, 186, "linha = registro", 12, "verde", 700) + t(x + 84, 206, "coluna = campo", 12, "verde", 700))
x = 544
pts = [(x + 40, 80), (x + 128, 70), (x + 84, 150), (x + 140, 180)]
for a, b in ((0, 1), (0, 2), (1, 2), (2, 3)):
    c.append(f'<line x1="{pts[a][0]}" y1="{pts[a][1]}" x2="{pts[b][0]}" y2="{pts[b][1]}" stroke="{COR["roxo"]}" stroke-width="3"/>')
for px, py in pts:
    c.append(circulo(px, py, 13, cor="roxo", fundo="papel", larg=2.5))
c.append(t(x + 84, 212, "pontos e ligações", 12, "roxo", 700))
fig("m6", "Estrutura Como guarda Use quando",
    "Quatro painéis: a lista com itens numerados; a fila de pessoas em que o primeiro a entrar é o primeiro a sair; a tabela com linhas (registros) e colunas (campos); e o grafo com pontos ligados.",
    720, 240, "".join(c), "Cada estrutura guarda os dados de um jeito.")

# ======================= MISSÃO 7 =======================
c = []
for i, (x, ok) in enumerate([(120, True), (360, False), (600, True)]):
    cor = "verde" if ok else "vermelho"
    c.append(caixa(x - 60, 40, 120, 130, cor=cor, fundo=cor + "_c", rx=12) + t(x, 64, f"servidor {i + 1}", 13, cor, 800))
    for j in range(3):
        c.append(caixa(x - 40, 78 + j * 26, 80, 18, cor="tinta", fundo="#e2e8f0", rx=4, larg=1.5) + f'<circle cx="{x + 28}" cy="{87 + j * 26}" r="3" fill="{COR["verde"] if ok else COR["vermelho"]}"/>')
c.append(t(360, 120, "✖", 70, "vermelho", 900))
c.append(etiqueta(360, 200, "🛠️ quebrou", "vermelho", 13))
c.append(seta(300, 220, 180, 250, "verde", 3) + seta(420, 220, 540, 250, "verde", 3))
c.append(etiqueta(360, 270, "🛟 os outros assumem: o site continua no ar (tolerância a falhas)", "verde", 13))
c.append(etiqueta(360, 18, "📄 o mesmo dado copiado nos três (réplicas)", "azul", 12))
fig("m7", "Ideia Como funciona Exemplo",
    "Três servidores com cópias dos mesmos dados; o servidor do meio quebra (X vermelho) e os outros dois assumem o trabalho, mantendo o site no ar.",
    720, 300, "".join(c), "Tolerância a falhas: se um quebra, outro assume.")

# ======================= MISSÃO 8 =======================
c = [t(20, 34, "8 bits", 15, "azul", 800, "start")]
for i in range(8):
    c.append(caixa(90 + i * 46, 12, 40, 36, cor="azul", fundo="azul_c", rx=6, larg=2) + t(110 + i * 46, 37, "1" if i % 3 else "0", 15, "azul", 800))
c.append(t(474, 37, "= 1 byte", 15, "verde", 800, "start"))
c.append(caixa(20, 80, 680, 92, cor="amarelo", fundo="amarelo_c", rx=14))
c.append(t(360, 112, "Velocidade do plano em Mbps (megabits)  ÷ 8  =  MB por segundo (megabytes)", 14, "tinta", 800))
c.append(t(360, 150, "80 Mbps ÷ 8 = 10 MB/s", 22, "amarelo", 900))
c.append(caixa(20, 196, 330, 84, cor="verde", fundo="verde_c", rx=14) + t(185, 226, "⬇️ download = baixar", 15, "verde", 800) + t(185, 256, "(os dados chegam até você)", 12, "verde", 700))
c.append(caixa(370, 196, 330, 84, cor="roxo", fundo="roxo_c", rx=14) + t(535, 226, "⬆️ upload = enviar", 15, "roxo", 800) + t(535, 256, "(você manda para a internet)", 12, "roxo", 700))
fig("m8", "Para saber quantos MB chegam por segundo Divida os Mbps por 8",
    "Oito quadradinhos de bits formam 1 byte; uma faixa mostra 80 Mbps dividido por 8 igual a 10 MB por segundo; embaixo, download (baixar) e upload (enviar).",
    720, 290, "".join(c), "1 byte = 8 bits: por isso dividimos por 8.")

ICONES = {"m1": "🌐", "m2": "📒", "m3": "🌊", "m4": "☁️", "m5": "⚙️", "m6": "🧰", "m7": "🕸️", "m8": "🚀", "rv": "🔁"}

try:
    from cenas_8_2 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-8ano-2027-2bim", F, ICONES))

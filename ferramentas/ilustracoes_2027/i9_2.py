"""Ilustrações — 9º ano — 2º bimestre de 2027 (informatica-9ano-2027-2bim): Segurança.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_9_2.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def cadeado(x, y, aberto=False, cor="verde", s=1.0):
    """Cadeado desenhado (corpo + alça). (x, y) = centro do corpo."""
    w, h = 44 * s, 34 * s
    alca = (f'<path d="M{x - 13 * s} {y - h / 2} v-12 a13 13 0 0 1 26 0 v{-6 if aberto else 12}" fill="none" '
            f'stroke="{COR[cor]}" stroke-width="{5 * s}" stroke-linecap="round"'
            + (f' transform="translate({14 * s} -8)"' if aberto else "") + "/>")
    return alca + caixa(x - w / 2, y - h / 2, w, h, cor=cor, fundo=cor + "_c", rx=6, larg=3) + f'<circle cx="{x}" cy="{y}" r="{4 * s}" fill="{COR[cor]}"/>'


# ======================= MISSÃO 1 =======================
tipos = [("🦠", "Vírus", "gruda em arquivos", "vermelho"), ("🐛", "Worm", "anda sozinho", "vermelho"),
         ("🐴", "Cavalo de Troia", "finge ser bom", "vermelho"), ("👀", "Spyware", "espiona o que digita", "vermelho"),
         ("📢", "Adware", "enche de anúncios", "vermelho")]
c = [etiqueta(360, 26, "🦠 a família malware (programas feitos para prejudicar)", "vermelho", 13)]
for i, (e, nome, faz, cor) in enumerate(tipos):
    x = 16 + i * 140
    c.append(caixa(x, 46, 128, 122, cor=cor, fundo=cor + "_c", rx=12) + emoji(x + 64, 92, e, 34)
             + t(x + 64, 124, nome, 13, "tinta", 800) + t(x + 64, 148, faz, 11, cor, 700))
c.append(etiqueta(360, 204, "🛡️ como se proteger", "verde", 13))
prot = [("🔄", "atualizar"), ("🛡️", "antivírus"), ("🏪", "loja oficial"), ("🤔", "“grátis demais”?|desconfie!")]
for i, (e, rot) in enumerate(prot):
    x = 16 + i * 176
    c.append(caixa(x, 222, 164, 56, cor="verde", fundo="verde_c", rx=12) + emoji(x + 28, 258, e, 24)
             + ("".join(t(x + 98, 248 + k * 17, r, 12, "verde", 800) for k, r in enumerate(rot.split("|"))) if "|" in rot else t(x + 98, 256, rot, 12, "verde", 800)))
fig("m1", "Tipo O que faz Parece com",
    "Cinco cartões vermelhos da família malware (vírus, worm, cavalo de Troia, spyware e adware) e, embaixo, quatro cartões verdes de proteção: atualizar, antivírus, loja oficial e desconfiar do grátis demais.",
    720, 296, "".join(c), "Vermelho = o perigo; verde = a proteção.")

# ======================= MISSÃO 2 =======================
c = [t(360, 30, "🔢 Força bruta: quantas senhas de 4 números existem?", 15, "tinta", 800)]
for i in range(4):
    x = 120 + i * 130
    c.append(caixa(x, 52, 96, 70, cor="azul", fundo="azul_c", rx=12) + t(x + 48, 86, "0 a 9", 16, "azul", 800) + t(x + 48, 110, "10 opções", 11, "azul", 700))
    if i < 3:
        c.append(t(x + 113, 94, "×", 22, "tinta", 900))
c.append(seta(360, 132, 360, 160, "amarelo", 3))
c.append(caixa(170, 166, 380, 50, cor="amarelo", fundo="amarelo_c", rx=12) + t(360, 198, "10 × 10 × 10 × 10 = 10.000 combinações", 16, "amarelo", 900))
c.append(caixa(90, 232, 540, 48, cor="vermelho", fundo="vermelho_c", rx=12)
         + t(360, 262, "🤖 testando 100 por segundo: 10.000 ÷ 100 = 100 segundos (menos de 2 min)", 13, "vermelho", 800))
fig("m2", "Ataque Como funciona Exemplo",
    "Quatro caixas de 0 a 9, cada uma com 10 opções, multiplicadas: 10 vezes 10 vezes 10 vezes 10 dá 10.000 combinações; um programa que testa 100 por segundo acerta em 100 segundos.",
    720, 296, "".join(c), "Senha curta cai rápido na força bruta.")

# ======================= MISSÃO 3 =======================
ALF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
c = [t(14, 44, "normal", 12, "azul", 800, "start"), t(14, 104, "cifrada", 12, "verde", 800, "start")]
for i, L in enumerate(ALF):
    x = 76 + i * 24
    destaque = L in "LUA"
    c.append(caixa(x, 24, 22, 28, cor="azul", fundo="amarelo_c" if destaque else "azul_c", rx=4, larg=2 if destaque else 1.2)
             + t(x + 11, 44, L, 13, "tinta", 800))
    C = ALF[(i + 3) % 26]
    c.append(caixa(x, 84, 22, 28, cor="verde", fundo="amarelo_c" if destaque else "verde_c", rx=4, larg=2 if destaque else 1.2)
             + t(x + 11, 104, C, 13, "tinta", 800))
for L in "LUA":
    x = 76 + ALF.index(L) * 24 + 11
    c.append(seta(x, 54, x, 80, "amarelo", 2.5))
c.append(etiqueta(420, 140, "↩️ depois do Z, volta para o A (X → A, Y → B, Z → C)", "amarelo", 12))
c.append(caixa(40, 170, 300, 100, cor="azul", fundo="azul_c", rx=14) + t(190, 200, "🔒 cifrar (anda 3 casas)", 14, "azul", 800)
         + t(190, 242, "LUA → OXD", 24, "tinta", 900, fonte=MONO))
c.append(caixa(380, 170, 300, 100, cor="verde", fundo="verde_c", rx=14) + t(530, 200, "🔓 decifrar (volta 3 casas)", 14, "verde", 800)
         + t(530, 242, "OXD → LUA", 24, "tinta", 900, fonte=MONO))
fig("m3", "Letra normal A B C D E … X Y Z",
    "Duas tiras de alfabeto: em cima o normal, embaixo o cifrado, deslocado 3 casas; as letras L, U e A estão destacadas com setas para O, X e D. Embaixo: cifrar LUA dá OXD e decifrar OXD dá LUA.",
    720, 286, "".join(c), "A chave 3 diz quantas casas cada letra anda.")

# ======================= MISSÃO 4 =======================
c = []
passos = [(90, "1", "o site distribui\ncadeados abertos", "chave pública"), (270, "2", "você fecha a caixa\ncom o cadeado", ""),
          (450, "3", "a caixa viaja:\nninguém abre", ""), (630, "4", "só o site abre,\ncom a chave privada", "chave privada")]
for i, (x, n, txt, rot) in enumerate(passos):
    c.append(caixa(x - 82, 30, 164, 214, cor="roxo" if i in (0, 3) else "azul", fundo="papel", rx=14))
    c.append(circulo(x, 30, 16, "tinta", "amarelo_c") + t(x, 36, n, 15, "tinta", 900))
    if i == 0:
        c.append(cadeado(x - 24, 110, True, "verde", 0.8) + cadeado(x + 24, 110, True, "verde", 0.8))
    elif i == 1:
        c.append(emoji(x - 26, 122, "📦", 40) + cadeado(x + 26, 110, False, "verde", 0.9))
    elif i == 2:
        c.append(emoji(x, 96, "🌐", 30) + cadeado(x, 152, False, "verde", 0.8) + emoji(x + 50, 96, "🕵️", 24) + t(x + 50, 118, "✖", 18, "vermelho", 900))
    else:
        c.append(cadeado(x - 18, 112, True, "verde", 0.9) + emoji(x + 32, 124, "🗝️", 32))
    for k, linha in enumerate(txt.split("\n")):
        c.append(t(x, 184 + k * 18, linha, 12, "tinta", 700))
    if rot:
        c.append(etiqueta(x, 268, "🔓 " + rot if i == 0 else "🗝️ " + rot, "roxo", 12))
    if i < 3:
        c.append(seta(x + 86, 140, x + 94, 140, "azul", 3))
fig("m4", "Passo O que acontece",
    "Quatro quadros em sequência: 1) o site distribui cadeados abertos, a chave pública; 2) você fecha a caixa com o cadeado; 3) a caixa viaja pela internet e o espião não abre; 4) só o site abre, com a chave privada.",
    720, 290, "".join(c), "Todo mundo pode fechar; só o dono da chave privada abre.")

# ======================= MISSÃO 5 =======================
c = [caixa(20, 60, 190, 64, cor="azul", fundo="azul_c", rx=12) + t(115, 50, "a senha digitada", 12, "azul", 800)
     + t(115, 99, "Gato!Azul7Pula", 16, "tinta", 900, fonte=MONO)]
c.append(seta(214, 92, 262, 92, "amarelo", 3))
c.append(caixa(266, 46, 188, 92, cor="amarelo", fundo="amarelo_c", rx=14) + t(360, 80, "⚙️ conta do hash", 14, "amarelo", 800)
         + t(360, 104, "(mão única)", 12, "amarelo", 700))
c.append(seta(458, 92, 506, 92, "amarelo", 3))
c.append(caixa(510, 60, 190, 64, cor="roxo", fundo="roxo_c", rx=12) + t(605, 50, "o que o site guarda", 12, "roxo", 800)
         + t(605, 99, "9f2c…e71 (exemplo)", 14, "tinta", 900, fonte=MONO))
c.append(seta(600, 150, 130, 150, "vermelho", 2.5, tracejada=True, curva=40) + t(365, 200, "✖ não dá para desfazer", 14, "vermelho", 800))
c.append(etiqueta(360, 254, "Ao entrar: o site faz a mesma conta e compara os resumos", "verde", 13))
fig("m5", "Proteção Como funciona",
    "A senha inventada Gato!Azul7Pula entra numa conta do hash, de mão única, e sai um resumo embaralhado, que é o que o site guarda; uma seta tracejada de volta está riscada: não dá para desfazer.",
    720, 280, "".join(c), "O site guarda o resumo (hash), não a senha.")

# ======================= MISSÃO 6 =======================
regras = [("1", "🚪 a porta abre depois das 18h", "🚨 tocar a sirene", "vermelho"),
          ("2", "⌨️ alguém digita o código certo", "🔕 desligar a sirene", "verde"),
          ("3", "❌ código errado 3 vezes", "📲 aviso ao celular do professor", "amarelo")]
c = [t(206, 26, "QUANDO… (evento)", 14, "azul", 800), t(560, 26, "FAÇA… (ação)", 14, "roxo", 800)]
for i, (n, ev, ac, cor) in enumerate(regras):
    y = 44 + i * 78
    c.append(circulo(24, y + 30, 16, "tinta", "amarelo_c") + t(24, y + 36, n, 14, "tinta", 900))
    c.append(caixa(50, y, 312, 60, cor="azul", fundo="azul_c", rx=12) + t(206, y + 36, ev, 13, "tinta", 800))
    c.append(seta(366, y + 30, 404, y + 30, "tinta", 3))
    c.append(caixa(408, y, 300, 60, cor=cor, fundo=cor + "_c", rx=12) + t(558, y + 36, ac, 13, "tinta", 800))
c.append(etiqueta(360, 288, "🔁 o programa fica esperando os eventos e responde a cada um", "suave", 12))
fig("m6", "Regra Evento (QUANDO…) Ação (FAÇA…)",
    "Projeto do alarme da sala em três regras: quando a porta abre depois das 18h, toca a sirene; quando alguém digita o código certo, desliga a sirene; quando o código é errado 3 vezes, manda aviso ao celular do professor.",
    720, 300, "".join(c), "Cada evento dispara uma ação.")

# ======================= MISSÃO 7 =======================
c = []
cols = [(120, "3", "cópias", "📄📄📄", "o original + 2 cópias", "azul"),
        (360, "2", "tipos", "💻 + 💽", "computador e HD externo", "roxo"),
        (600, "1", "fora do local", "☁️", "na nuvem", "verde")]
for x, num, rot, em, ex, cor in cols:
    c.append(caixa(x - 106, 20, 212, 196, cor=cor, fundo=cor + "_c", rx=16))
    c.append(t(x, 78, num, 52, cor, 900) + t(x, 104, rot, 15, cor, 800))
    c.append(t(x, 150, em, 30, "tinta", 400) + t(x, 192, ex, 12, "tinta", 700))
c.append(etiqueta(360, 252, "🔌 HD externo: desligado do computador depois do backup", "amarelo", 13))
c.append(etiqueta(360, 286, "🔐 se o HD ficar ligado, o ransomware pode cifrar a cópia também", "vermelho", 12))
fig("m7", "Número Regra Exemplo",
    "Três colunas da regra 3-2-1: 3 cópias (o original mais 2 cópias), 2 tipos de armazenamento (computador e HD externo) e 1 cópia fora do local (na nuvem). Avisos: o HD externo fica desligado depois do backup.",
    720, 300, "".join(c), "Regra 3-2-1: 3 cópias, 2 tipos, 1 fora do local.")

# ======================= MISSÃO 8 =======================
linhas_b = ["Saí cedo hoje.", "Ontem choveu muito.", "Levei o guarda-chuva."]
c = [caixa(30, 20, 400, 200, cor="tinta", fundo="#fffbeb", rx=10, larg=2), t(230, 46, "✉️ um bilhete normal…", 13, "suave", 700)]
for i, frase in enumerate(linhas_b):
    y = 92 + i * 46
    c.append(caixa(48, y - 26, 34, 36, cor="amarelo", fundo="amarelo_c", rx=6, larg=2.5) + t(65, y, frase[0], 20, "amarelo", 900, fonte=MONO))
    c.append(t(86, y, frase[1:], 18, "tinta", 600, "start", fonte=MONO))
c.append(seta(65, 210, 65, 238, "amarelo", 3))
c.append(t(65, 268, "S O L", 22, "amarelo", 900, "start", fonte=MONO))
c.append(seta(470, 120, 520, 120, "tinta", 3))
c.append(caixa(526, 60, 176, 120, cor="verde", fundo="verde_c", rx=14) + t(614, 98, "…que esconde", 13, "verde", 700)
         + t(614, 146, "☀️ SOL", 30, "verde", 900))
c.append(etiqueta(560, 222, "🕵️ ninguém percebe o segredo", "roxo", 12))
fig("m8", "Bilhete Primeira letra",
    "Um bilhete de três linhas: Saí cedo hoje, Ontem choveu muito, Levei o guarda-chuva. As primeiras letras S, O e L estão destacadas e, lidas de cima para baixo, formam a palavra SOL.",
    720, 290, "".join(c), "Acróstico: as primeiras letras formam a palavra escondida.")

ICONES = {"m1": "🦠", "m2": "🎣", "m3": "🔤", "m4": "🔐", "m5": "🔑", "m6": "🎮", "m7": "💰", "m8": "🕵️", "rv": "🔁"}

try:
    from cenas_9_2 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-9ano-2027-2bim", F, ICONES))

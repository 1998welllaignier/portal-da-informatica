"""Ilustrações — 7º ano — 3º bimestre de 2027 (informatica-7ano-2027-3bim): Rede segura.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_7_3.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def celular(x, y, w=150, h=250, cor="tinta"):
    return (caixa(x, y, w, h, cor=cor, fundo="#f1f5f9", rx=22, larg=3)
            + caixa(x + 10, y + 26, w - 20, h - 52, cor="linha", fundo="papel", rx=8, larg=1.5)
            + f'<circle cx="{x + w / 2}" cy="{y + h - 13}" r="6" fill="none" stroke="{COR[cor]}" stroke-width="2"/>')


# ======================= MISSÃO 1 =======================
c = [emoji(110, 120, "💻", 64), t(110, 160, "navegador", 14, "azul", 800), t(110, 180, "(no seu computador)", 11, "suave", 700)]
c.append(caixa(560, 60, 120, 120, cor="roxo", fundo="roxo_c", rx=12) + emoji(620, 128, "🗄️", 50) + t(620, 200, "servidor do site", 14, "roxo", 800))
c.append(seta(180, 90, 548, 90, "azul", 3.5) + etiqueta(364, 76, "📨 1. pede: “me manda a página”", "azul", 13))
c.append(seta(548, 150, 180, 150, "verde", 3.5) + etiqueta(364, 176, "📄 2. responde: manda a página", "verde", 13))
c.append(caixa(40, 224, 300, 52, cor="verde", fundo="verde_c", rx=12) + t(190, 256, "✅ a página existe → aparece na tela", 13, "verde", 800))
c.append(caixa(380, 224, 300, 52, cor="vermelho", fundo="vermelho_c", rx=12) + t(530, 256, "❌ não existe → erro 404", 13, "vermelho", 800))
c.append(t(360, 30, "Protocolo HTTP: as regras da conversa", 15, "tinta", 800))
fig("m1", "Passo O que acontece",
    "O navegador, no computador, manda uma seta azul ao servidor pedindo a página; o servidor devolve uma seta verde com a página. Embaixo: se a página existe, aparece na tela; se não existe, erro 404.",
    720, 290, "".join(c), "O navegador pede, o servidor responde: sempre do mesmo jeito.")

# ======================= MISSÃO 2 =======================
c = [caixa(20, 20, 330, 250, cor="vermelho", fundo="vermelho_c", rx=16), t(185, 48, "📮 http:// = cartão-postal", 15, "vermelho", 800)]
c.append(caixa(60, 70, 250, 120, cor="tinta", fundo="#fffbeb", rx=6, larg=2)
         + t(80, 104, "senha: Pipa…", 16, "tinta", 700, "start", fonte=MONO) + t(80, 140, "(dá para ler!)", 13, "vermelho", 800, "start"))
c.append(emoji(300, 230, "🕵️", 34) + t(185, 254, "quem pega no caminho lê", 13, "vermelho", 800))
c.append(caixa(370, 20, 330, 250, cor="verde", fundo="verde_c", rx=16) + t(535, 48, "✉️ https:// 🔒 = carta lacrada", 15, "verde", 800))
c.append(caixa(410, 70, 250, 120, cor="tinta", fundo="#fffbeb", rx=6, larg=2)
         + f'<path d="M410 70 L535 140 L660 70" fill="none" stroke="{COR["tinta"]}" stroke-width="2"/>'
         + f'<circle cx="535" cy="140" r="14" fill="{COR["vermelho"]}"/>' + t(535, 180, "x7#Qp@2…", 14, "suave", 700, fonte=MONO))
c.append(emoji(650, 230, "🕵️", 34) + t(535, 254, "no caminho: só bagunça", 13, "verde", 800))
c.append(etiqueta(360, 288, "⚠️ o cadeado NÃO prova que o site é honesto: confira o nome", "amarelo", 12))
fig("m2", "Endereço Parece com… O que acontece",
    "À esquerda, um cartão-postal vermelho com a senha legível e um espião lendo: http. À direita, uma carta lacrada verde com letras embaralhadas: https com cadeado. Aviso: o cadeado não prova que o site é honesto.",
    720, 300, "".join(c), "http viaja aberto; https viaja cifrado.")

# ======================= MISSÃO 3 =======================
c = [t(360, 28, "Verificação em duas etapas: a senha + mais uma prova", 15, "tinta", 800)]
cols = [(120, "🧠", "algo que você SABE", "senha · PIN", "azul"), (360, "📱", "algo que você TEM", "código no celular", "roxo"), (600, "👆", "algo que você É", "digital · rosto", "verde")]
for x, e, rot, ex, cor in cols:
    c.append(caixa(x - 98, 48, 196, 170, cor=cor, fundo=cor + "_c", rx=16) + emoji(x, 116, e, 50)
             + t(x, 160, rot, 14, cor, 800) + t(x, 192, ex, 13, "tinta", 700))
c.append(t(240, 142, "+", 30, "tinta", 900) + t(480, 140, "ou", 16, "tinta", 900))
c.append(caixa(150, 236, 420, 46, cor="vermelho", fundo="vermelho_c", rx=12) + t(360, 265, "🚫 o código é só seu: quem pede é golpista", 14, "vermelho", 800))
fig("m3", "Tipo de prova Exemplo",
    "Três cartões: algo que você sabe (senha, PIN), algo que você tem (código no celular) e algo que você é (digital, rosto). Aviso: o código é só seu; quem pede é golpista.",
    720, 296, "".join(c), "Mesmo se descobrirem a senha, falta a segunda prova.")

# ======================= MISSÃO 4 =======================
c = [celular(40, 20, 260, 270)]
c.append(caixa(62, 60, 216, 170, cor="linha", fundo="#ecfdf5", rx=12, larg=1.5))
msg = ["PROMOSSÃO SÓ HOJE!", "Você ganhou um fone.", "Mande o código do SMS", "para liberar:", "banc0-premio.xyz"]
for i, l in enumerate(msg):
    c.append(t(76, 88 + i * 30, l, 13, "tinta", 700, "start"))
sinais = [(88, "⏰ pressa: “só hoje!”", "vermelho"), (118, "🎁 prêmio fácil", "vermelho"), (148, "🔑 pede o código", "vermelho"), (208, "✍️ erro e endereço estranho", "vermelho")]
for y, rot, cor in sinais:
    c.append(seta(470, y - 4, 290, y - 4, cor, 2.5) + etiqueta(476, y, rot, cor, 13, "start"))
c.append(etiqueta(560, 262, "🎣 phishing: a mensagem é a isca", "amarelo", 13))
fig("m4", "Sinal Exemplo",
    "Um celular com a mensagem “PROMOSSÃO SÓ HOJE! Você ganhou um fone. Mande o código do SMS para liberar: banc0-premio.xyz”. Setas vermelhas apontam quatro sinais: pressa, prêmio fácil, pedido de código e erro com endereço estranho.",
    720, 300, "".join(c), "Quatro sinais de golpe numa mensagem só.")

# ======================= MISSÃO 5 =======================
c = [caixa(20, 20, 330, 250, cor="verde", fundo="verde_c", rx=16), t(185, 48, "🗣️ ao vivo", 15, "verde", 800)]
c.append(boneco(110, 200, "azul", 0.9) + boneco(260, 200, "verde", 0.9))
c.append(balao(150, 80, 150, 50, ["Que legal! 😄"], "verde", "papel", "baixo-esq", 13))
c.append(t(185, 254, "vê o rosto e ouve o tom", 13, "verde", 800))
c.append(caixa(370, 20, 330, 250, cor="amarelo", fundo="amarelo_c", rx=16) + t(535, 48, "⌨️ na mensagem escrita", 15, "amarelo", 800))
c.append(caixa(410, 80, 250, 56, cor="tinta", fundo="papel", rx=14, larg=2) + t(535, 114, "Que legal.", 16, "tinta", 700))
c.append(t(470, 180, "😊 ?", 30, "tinta", 700) + t(600, 180, "😒 ?", 30, "tinta", 700))
c.append(t(535, 230, "sem rosto e sem tom:", 13, "amarelo", 800) + t(535, 254, "pode ser mal entendido", 13, "amarelo", 800))
fig("m5", "Na conversa ao vivo Na mensagem escrita",
    "À esquerda, duas pessoas conversando ao vivo: uma diz “Que legal!” sorrindo. À direita, a mensagem escrita “Que legal.” com duas carinhas em dúvida, uma feliz e outra de deboche: sem rosto e sem tom, pode ser mal entendido.",
    720, 290, "".join(c), "Na mensagem escrita, a empatia precisa ser ainda maior.")

# ======================= MISSÃO 6 =======================
papeis = [(120, "🎯", "ALVO", ["guarda prints", "bloqueia e denuncia", "conta para um adulto"], "azul"),
          (360, "👀", "ESPECTADOR", ["não curte", "não repassa", "apoia o colega"], "verde"),
          (600, "😈", "AUTOR", ["para", "apaga", "pede desculpas"], "vermelho")]
c = []
for x, e, nome, acoes, cor in papeis:
    c.append(caixa(x - 106, 20, 212, 220, cor=cor, fundo=cor + "_c", rx=16) + emoji(x, 76, e, 44) + t(x, 108, nome, 15, cor, 900))
    for k, a in enumerate(acoes):
        c.append(t(x, 146 + k * 28, "✔ " + a, 13, "tinta", 700))
c.append(etiqueta(360, 272, "⚖️ desde 2024, a intimidação sistemática virtual é crime (Lei nº 14.811/2024)", "roxo", 12))
fig("m6", "Papel Quem é O que pode fazer",
    "Três cartões: o alvo guarda prints, bloqueia, denuncia e conta para um adulto; o espectador não curte, não repassa e apoia o colega; o autor para, apaga e pede desculpas. Embaixo: desde 2024 é crime.",
    720, 290, "".join(c), "Cada um pode fazer alguma coisa para acabar com o cyberbullying.")

# ======================= MISSÃO 7 =======================
c = [celular(40, 14, 280, 276)]
c.append(t(180, 62, "📶 Redes Wi-Fi", 14, "tinta", 800))
redes = [("Rodoviaria_Oficial", "verde", "✅ nome confirmado no balcão"), ("Rodoviaria_Gratis_Rapida", "vermelho", "🎭 nome parecido: pode ser falsa"), ("Rodoviaria-0ficial", "vermelho", "🎭 trocaram o O por zero")]
for i, (nome, cor, nota) in enumerate(redes):
    y = 80 + i * 62
    c.append(caixa(62, y, 236, 48, cor=cor, fundo=cor + "_c", rx=10, larg=2) + t(76, y + 30, "📶 " + nome, 12, "tinta", 800, "start"))
    c.append(seta(470, y + 24, 306, y + 24, cor, 2.5) + etiqueta(476, y + 28, nota, cor, 12, "start"))
c.append(caixa(380, 262, 320, 30, cor="azul", fundo="azul_c", rx=8, larg=2) + t(540, 282, "🏦 banco e senhas → 📱 dados móveis", 13, "azul", 800))
fig("m7", "Risco Como acontece",
    "Tela de Wi-Fi de um celular com três redes: Rodoviaria_Oficial, confirmada no balcão (verde); Rodoviaria_Gratis_Rapida e Rodoviaria-0ficial, nomes parecidos que podem ser falsos (vermelho). Aviso: banco e senhas pelos dados móveis.",
    720, 300, "".join(c), "Pergunte o nome certo da rede antes de conectar.")

# ======================= MISSÃO 8 =======================
c = [emoji(110, 120, "🧑", 60), emoji(610, 120, "🧑", 60)]
c.append(caixa(250, 40, 220, 70, cor="amarelo", fundo="amarelo_c", rx=14) + emoji(290, 86, "💡", 30) + t(380, 72, "a IDEIA", 15, "amarelo", 900) + t(380, 96, "“o passeio é caro”", 12, "tinta", 700))
c.append(seta(150, 100, 244, 80, "verde", 3.5) + etiqueta(170, 40, "✅ argumento", "verde", 13))
c.append(caixa(40, 180, 300, 90, cor="verde", fundo="verde_c", rx=14) + t(190, 212, "“Eu discordo, porque", 13, "tinta", 700) + t(190, 236, "muita gente não pode pagar.”", 13, "tinta", 700) + t(190, 260, "→ fala da ideia + motivo", 12, "verde", 800))
c.append(seta(160, 150, 566, 134, "vermelho", 3, tracejada=True) + t(530, 170, "✖", 24, "vermelho", 900) + t(360, 170, "❌ ataque pessoal", 13, "vermelho", 800))
c.append(caixa(380, 210, 300, 60, cor="vermelho", fundo="vermelho_c", rx=14) + t(530, 236, "“Você não sabe nada.”", 13, "tinta", 700) + t(530, 258, "→ ataca a pessoa", 12, "vermelho", 800))
fig("m8", "✅ Argumento (ataca a ideia) ❌ Ataque pessoal (ataca a pessoa)",
    "Duas pessoas e, entre elas, um balão amarelo com a ideia. Uma seta verde vai da pessoa para a ideia: argumento, “Eu discordo, porque muita gente não pode pagar”. Uma seta vermelha tracejada vai direto na outra pessoa: ataque pessoal, “Você não sabe nada”.",
    720, 290, "".join(c), "Critique a ideia, não a pessoa.")

ICONES = {"m1": "🤝", "m2": "🔒", "m3": "🔑", "m4": "🎣", "m5": "💬", "m6": "🛑", "m7": "📶", "m8": "🗣️", "rv": "🔁"}

try:
    from cenas_7_3 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-7ano-2027-3bim", F, ICONES))

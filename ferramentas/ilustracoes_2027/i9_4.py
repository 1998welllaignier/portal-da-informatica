"""Ilustrações — 9º ano — 4º bimestre de 2027 (informatica-9ano-2027-4bim): Autoria e verdade.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_9_4.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


# ======================= MISSÃO 1 =======================
cards = [("©", "Todos os direitos", "reservados", "🔒 só com autorização", "vermelho"), ("🆓", "Domínio público", "(70 anos após a morte)", "✅ livre", "verde"), ("CC BY", "Creative Commons", "atribuição", "✍️ livre, com crédito", "azul")]
c = []
for i, (sim, l1, l2, res, cor) in enumerate(cards):
    x = 20 + i * 236
    c.append(caixa(x, 20, 220, 170, cor=cor, fundo=cor + "_c", rx=14) + t(x + 110, 72, sim, 30, cor, 900) + t(x + 110, 104, l1, 14, "tinta", 800) + t(x + 110, 124, l2, 12, "suave", 700)
             + caixa(x + 16, 140, 188, 36, cor=cor, fundo="papel", rx=10, larg=2) + t(x + 110, 164, res, 13, cor, 800))
c.append(caixa(20, 214, 680, 56, cor="tinta", fundo="#fffbeb", rx=10, larg=2) + t(40, 238, "Crédito:", 13, "suave", 800, "start")
         + t(40, 260, "Foto: Maria Souza · Banco de Imagens Livres · CC BY", 15, "tinta", 800, "start", fonte=MONO))
fig("m1", "Situação da obra Posso usar?",
    "Três cartões: © todos os direitos reservados (só com autorização), domínio público (livre) e CC BY (livre, com crédito). Embaixo, um exemplo de crédito: Foto: Maria Souza · Banco de Imagens Livres · CC BY.",
    720, 286, "".join(c), "Antes de usar, veja a licença; depois, dê o crédito.")

# ======================= MISSÃO 2 =======================
c = [caixa(20, 20, 200, 250, cor="tinta", fundo="#f1f5f9", rx=22, larg=3), caixa(32, 46, 176, 196, cor="linha", fundo="papel", rx=8, larg=1.5)]
c.append(caixa(44, 66, 150, 90, cor="azul", fundo="azul_c", rx=8) + emoji(119, 124, "🧑‍🤝‍🧑", 46))
c.append(balao(44, 170, 150, 50, ["Posso postar?"], "azul", "azul_c", "baixo-dir", 13))
c.append(seta(230, 140, 300, 90, "verde", 3) + seta(230, 160, 300, 220, "vermelho", 3))
c.append(caixa(306, 50, 390, 80, cor="verde", fundo="verde_c", rx=14) + t(500, 82, "“Pode!” → ✅ posta", 16, "verde", 900) + t(500, 112, "(menor de idade: autorização dos responsáveis)", 12, "tinta", 700))
c.append(caixa(306, 180, 390, 80, cor="vermelho", fundo="vermelho_c", rx=14) + t(500, 212, "“Não!” → ❌ não posta", 16, "vermelho", 900) + t(500, 242, "ou escolhe outra foto / corta a pessoa", 12, "tinta", 700))
fig("m2", "Situação Pode publicar?",
    "Um celular com a foto de duas pessoas e o balão “Posso postar?”. Se a resposta for “Pode!”, posta (menores precisam da autorização dos responsáveis); se for “Não!”, não posta, escolhe outra foto ou corta a pessoa.",
    720, 286, "".join(c), "Pergunte antes de publicar a imagem de alguém.")

# ======================= MISSÃO 3 =======================
c = [caixa(20, 30, 680, 230, cor="tinta", fundo="#f8fafc", rx=10, larg=2)]
abas = [("⚠️ noticiasbombasticas.xyz", "vermelho"), ("🔎 quem é esse site?", "azul"), ("📰 jornal conhecido", "verde"), ("🏛️ fonte original", "roxo")]
for i, (rot, cor) in enumerate(abas):
    x = 30 + i * 168
    c.append(caixa(x, 40, 160, 34, cor=cor, fundo=cor + "_c" if i else "vermelho_c", rx=8, larg=2) + t(x + 80, 62, rot, 11, cor, 800))
c.append(caixa(40, 90, 300, 150, cor="vermelho", fundo="papel", rx=8, larg=2) + t(190, 120, "“EXPLODE se usar carregando!!!”", 13, "vermelho", 900)
         + t(190, 150, "sem autor · sem pesquisa citada", 12, "suave", 700) + emoji(190, 210, "🤨", 40))
c.append(seta(350, 160, 400, 160, "azul", 3) + caixa(406, 90, 280, 150, cor="azul", fundo="azul_c", rx=8, larg=2)
         + t(546, 122, "↔️ leitura lateral", 15, "azul", 900) + t(546, 152, "saio do site e pesquiso", 12, "tinta", 700) + t(546, 172, "em outras abas", 12, "tinta", 700)
         + t(546, 210, "ninguém confirma → ✋ não compartilho", 12, "vermelho", 800))
c.append(etiqueta(360, 286, "⏸️ pare · 🔎 pesquise · ✅ decida", "amarelo", 13))
fig("m3", "Técnica Como fazer",
    "Um navegador com quatro abas: o site suspeito, “quem é esse site?”, um jornal conhecido e a fonte original. À esquerda, a notícia chocante sem autor; à direita, a leitura lateral: pesquisar em outras abas; ninguém confirma, então não compartilha.",
    720, 300, "".join(c), "Checadores saem do site suspeito e pesquisam em outras abas.")

# ======================= MISSÃO 4 =======================
c = [circulo(200, 150, 100, "tinta", "#fde7c7")]
c.append(f'<ellipse cx="165" cy="125" rx="14" ry="6" fill="#1c1f22"/><ellipse cx="235" cy="125" rx="14" ry="2" fill="#1c1f22"/>')
c.append(f'<path d="M160 195 q40 18 80 -6" fill="none" stroke="#1c1f22" stroke-width="5" stroke-linecap="round"/>')
c.append(emoji(320, 260, "🖐️", 40) + t(338, 238, "6", 12, "vermelho", 900))
sinais_ = [(60, "👄 boca fora de sincronia com a fala", 230, 196), (100, "👁️ piscar estranho", 245, 125), (140, "🤖 voz robótica", 300, 150), (180, "✋ mãos e dedos deformados", 330, 245), (220, "🎁 promessa fácil por link", 300, 170)]
for y, rot, x0, y0 in sinais_:
    c.append(seta(420, y, x0 + 4, y0, "vermelho", 2) + etiqueta(426, y + 4, rot, "vermelho", 12, "start"))
c.append(etiqueta(360, 288, "⚠️ pode não ter sinal nenhum: cheque a fonte!", "amarelo", 13))
fig("m4", "Sinal O que observar",
    "Um rosto desenhado com sinais de deepfake apontados por setas vermelhas: boca fora de sincronia, piscar estranho, voz robótica, mão com dedos a mais e promessa fácil por link. Aviso: pode não ter sinal nenhum; cheque a fonte.",
    720, 300, "".join(c), "Sinais ajudam, mas o mais seguro é checar a fonte.")

# ======================= MISSÃO 5 =======================
partes = [("🎯", "Tema", "senhas fortes"), ("👥", "Público", "6º ano"), ("🖼️", "Formato", "slides"), ("🧩", "Tarefas", "quem faz o quê"), ("📅", "Cronograma", "aula 1 · 2 · 3"), ("📚", "Fontes e créditos", "de onde veio")]
c = [caixa(10, 10, 700, 270, cor="amarelo", fundo="#fef9c3", rx=12, larg=2), t(360, 36, "📋 Plano do projeto: guia para o 6º ano", 15, "tinta", 900)]
for i, (e, rot, ex) in enumerate(partes):
    x = 30 + (i % 3) * 226; y = 56 + (i // 3) * 108
    c.append(caixa(x, y, 210, 94, cor="roxo", fundo="papel", rx=10, larg=2) + emoji(x + 30, y + 52, e, 30) + t(x + 120, y + 40, rot, 14, "roxo", 900) + t(x + 120, y + 66, ex, 12, "tinta", 700))
fig("m5", "Parte Pergunta Exemplo",
    "Um quadro de planejamento com seis cartões: tema (senhas fortes), público (6º ano), formato (slides), tarefas (quem faz o quê), cronograma (aulas 1, 2 e 3) e fontes e créditos.",
    720, 290, "".join(c), "Seis partes do plano: o projeto fica fácil quando é decomposto.")

# ======================= MISSÃO 6 =======================
crit = [("✅", "Conteúdo", "as informações estão certas?"), ("💬", "Clareza", "o 6º ano entenderia?"), ("🎨", "Criatividade", "chama a atenção?"), ("📚", "Créditos", "fontes e imagens com crédito?"), ("🤝", "Equipe", "todos participaram?")]
c = [caixa(20, 14, 420, 270, cor="tinta", fundo="papel", rx=10, larg=2), t(230, 40, "📝 Rubrica", 16, "tinta", 900)]
for i, (e, rot, p_) in enumerate(crit):
    y = 58 + i * 44
    c.append(caixa(36, y, 28, 28, cor="verde", fundo="verde_c", rx=6, larg=2) + t(50, y + 21, "✔", 16, "verde", 900) + t(76, y + 20, f"{rot}:", 14, "tinta", 900, "start") + t(76 + len(rot) * 9 + 18, y + 20, p_, 12, "suave", 700, "start"))
c.append(balao(470, 60, 230, 110, ["“Gostei dos desenhos!", "Uma sugestão:", "aumentar a letra", "do slide 2.”"], "verde", "verde_c", "baixo-esq", 13))
c.append(t(585, 210, "💬 feedback = algo bom", 12, "verde", 800) + t(585, 230, "+ uma sugestão, com respeito", 12, "verde", 800))
fig("m6", "Critério Pergunta",
    "Uma rubrica com cinco critérios marcados: conteúdo, clareza, criatividade, créditos e equipe, cada um com a sua pergunta. Ao lado, um balão de feedback: “Gostei dos desenhos! Uma sugestão: aumentar a letra do slide 2.”",
    720, 296, "".join(c), "A rubrica diz o que será avaliado; o feedback ajuda a melhorar.")

# ======================= MISSÃO 7 =======================
c = [caixa(20, 60, 170, 110, cor="vermelho", fundo="vermelho_c", rx=12) + t(105, 96, "😱 “Você não", 13, "vermelho", 900) + t(105, 116, "vai acreditar…”", 13, "vermelho", 900) + t(105, 150, "caça-cliques", 11, "suave", 800)]
c.append(seta(194, 115, 254, 115, "tinta", 3) + t(224, 104, "clique", 11, "suave", 800))
c.append(caixa(260, 50, 200, 130, cor="tinta", fundo="#f1f5f9", rx=12, larg=2) + t(360, 76, "🌐 site", 14, "tinta", 900))
for k in range(3):
    c.append(caixa(274 + k * 62, 96, 54, 64, cor="amarelo", fundo="amarelo_c", rx=6, larg=1.5) + t(301 + k * 62, 134, "📢", 18, "tinta", 400))
c.append(seta(464, 115, 524, 115, "verde", 3) + t(494, 104, "anúncios", 11, "suave", 800))
c.append(circulo(600, 115, 60, "verde", "verde_c") + t(600, 112, "💰", 34, "tinta", 400) + t(600, 150, "quem ganha", 12, "verde", 900))
c.append(etiqueta(360, 220, "🔎 pergunta de ouro: quem ganha se eu acreditar e compartilhar?", "roxo", 13))
c.append(t(360, 262, "outros motivos: 🗳️ política · 😠 ódio · 😂 humor · 🤷 engano", 13, "tinta", 800))
fig("m7", "Motivo Como ganha Exemplo",
    "O caminho do dinheiro: um título caça-cliques leva ao clique, o clique abre um site cheio de anúncios, e os anúncios dão dinheiro a quem publicou. Embaixo: a pergunta de ouro e os outros motivos (política, ódio, humor, engano).",
    720, 280, "".join(c), "Na economia da atenção, o clique vira dinheiro.")

# ======================= MISSÃO 8 =======================
c = [f'<path d="M30 60 h120 l20 22 h300 v190 h-440z" fill="#fde68a" stroke="{COR["amarelo"]}" stroke-width="3"/>', t(110, 52, "📁 Meu portfólio", 14, "amarelo", 900)]
arqs = [("📊", "2027-projeto-senhas"), ("🎨", "2027-desenho-cc-by"), ("🎬", "2026-video-ciencias"), ("🧱", "2026-jogo-blocos")]
for i, (e, nome) in enumerate(arqs):
    y = 98 + i * 40
    c.append(caixa(50, y, 400, 32, cor="linha", fundo="papel", rx=6, larg=1.5) + emoji(72, y + 23, e, 18) + t(92, y + 22, nome, 13, "tinta", 800, "start", fonte=MONO))
c.append(caixa(490, 70, 220, 90, cor="verde", fundo="verde_c", rx=12) + t(600, 96, "✅ entra", 14, "verde", 900) + t(600, 120, "trabalhos · descrição", 12, "tinta", 700) + t(600, 140, "créditos · licença", 12, "tinta", 700))
c.append(caixa(490, 176, 220, 90, cor="vermelho", fundo="vermelho_c", rx=12) + t(600, 202, "🚫 não entra", 14, "vermelho", 900) + t(600, 226, "endereço · telefone", 12, "tinta", 700) + t(600, 246, "documentos", 12, "tinta", 700))
fig("m8", "Passo O que fazer",
    "Uma pasta “Meu portfólio” com quatro arquivos de nomes claros (2027-projeto-senhas, 2027-desenho-cc-by, 2026-video-ciencias, 2026-jogo-blocos). Ao lado: o que entra (trabalhos, descrição, créditos, licença) e o que não entra (endereço, telefone, documentos).",
    720, 286, "".join(c), "Organize com nomes claros e proteja os seus dados.")

ICONES = {"m1": "©️", "m2": "📸", "m3": "🔍", "m4": "🎭", "m5": "📋", "m6": "🎤", "m7": "💰", "m8": "🗂️", "rv": "🔁"}

try:
    from cenas_9_4 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-9ano-2027-4bim", F, ICONES))

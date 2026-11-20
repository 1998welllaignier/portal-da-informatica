"""Ilustrações — 8º ano — 4º bimestre de 2027 (informatica-8ano-2027-4bim): Privacidade.
Esquemas por código (exatos e editáveis). As cenas de abertura (IA) ficam em cenas_8_4.py, quando existirem."""
from base import *

F = []


def fig(missao, ancora, rotulo, w, h, corpo, legenda=None, pagina="comecar", pequena=False):
    F.append({"missao": missao, "pagina": pagina, "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda, pequena)})


def chave(x, y, ligada, cor="verde"):
    """Interruptor desenhado (ligado/desligado)."""
    fundo = COR[cor] if ligada else "#cbd5e1"
    cx = x + 34 if ligada else x + 14
    return (f'<rect x="{x}" y="{y}" width="48" height="26" rx="13" fill="{fundo}"/>'
            f'<circle cx="{cx}" cy="{y + 13}" r="10" fill="#ffffff"/>')


# ======================= MISSÃO 1 =======================
pecas = [("⚽", "joga no time do bairro", 40), ("🏫", "estuda na escola tal", 100), ("🎒", "está no 8º ano", 160), ("🌳", "mora perto da praça", 220)]
c = []
for e, rot, y in pecas:
    c.append(caixa(20, y - 26, 250, 46, cor="azul", fundo="azul_c", rx=10, larg=2) + emoji(46, y + 4, e, 22) + t(70, y + 3, rot, 13, "tinta", 800, "start")
             + seta(274, y - 3, 400, 135, "azul", 2))
c.append(caixa(406, 90, 290, 92, cor="vermelho", fundo="vermelho_c", rx=14) + emoji(446, 146, "🪪", 34)
         + t(580, 124, "Juntas, essas", 14, "vermelho", 900) + t(580, 146, "informações dizem", 14, "vermelho", 900) + t(580, 168, "quem é a pessoa!", 14, "vermelho", 900))
c.append(etiqueta(360, 278, "🤔 Quem está pedindo? · Para quê? · Precisa mesmo?", "amarelo", 13))
fig("m1", "Dado pessoal Exemplo",
    "Quatro informações soltas (joga no time do bairro, estuda na escola tal, está no 8º ano, mora perto da praça) com setas que se juntam num cartão vermelho: juntas, essas informações dizem quem é a pessoa. Embaixo, as três perguntas antes de informar um dado.",
    720, 296, "".join(c), "Sozinhas parecem nada; juntas, identificam.")

# ======================= MISSÃO 2 =======================
c = [caixa(20, 14, 250, 196, cor="azul", fundo="azul_c", rx=12) + t(145, 42, "🪪 Dado pessoal", 15, "azul", 900)]
for i, rot in enumerate(["🧑 nome", "🏠 endereço", "📞 telefone", "🎂 nascimento"]):
    c.append(t(145, 76 + i * 34, rot, 14, "tinta", 800))
c.append(caixa(290, 14, 410, 196, cor="vermelho", fundo="vermelho_c", rx=12, larg=3) + t(495, 42, "🔐 Dado sensível (mais delicado)", 15, "vermelho", 900))
sens = ["🏥 saúde", "🙏 religião", "🗳️ opinião política", "🌍 origem racial ou étnica", "👆 biometria", "🧬 dado genético"]
for i, rot in enumerate(sens):
    c.append(t(390 + (i % 2) * 210, 80 + (i // 2) * 42, rot, 13, "tinta", 800))
c.append(t(360, 238, "⚖️ LGPD (Lei nº 13.709/2018) · você pode pedir:", 14, "tinta", 900))
for i, rot in enumerate(["👀 saber", "✏️ corrigir", "🗑️ apagar", "↩️ retirar o consentimento"]):
    c.append(etiqueta(110 + i * 168, 272, rot, "roxo", 12))
fig("m2", "Dado sensível (exemplos da lei) Exemplo",
    "Duas caixas: à esquerda, dados pessoais comuns (nome, endereço, telefone, nascimento); à direita, com cadeado, os dados sensíveis da lei (saúde, religião, opinião política, origem racial ou étnica, biometria e dado genético). Embaixo, os direitos da LGPD: saber, corrigir, apagar e retirar o consentimento.",
    720, 292, "".join(c), "Dados sensíveis pedem ainda mais cuidado.")

# ======================= MISSÃO 3 =======================
c = [caixa(30, 14, 200, 270, cor="tinta", fundo="#f1f5f9", rx=24, larg=3), caixa(44, 44, 172, 212, cor="linha", fundo="papel", rx=8, larg=1.5)]
c.append(caixa(54, 60, 152, 110, cor="vermelho", fundo="vermelho_c", rx=10, larg=2) + t(130, 86, "🔔 Alerta de login", 13, "vermelho", 900)
         + t(130, 112, "Novo acesso:", 12, "tinta", 800) + t(130, 132, "aparelho desconhecido", 12, "tinta", 800) + t(130, 156, "3h da manhã", 11, "suave", 700))
c.append(emoji(130, 222, "😟", 40) + t(130, 246, "Não fui eu!", 12, "vermelho", 900))
passos = [("1", "🔑 Trocar a senha"), ("2", "🚪 Sair de todos os aparelhos"), ("3", "📲 Ativar as duas etapas"), ("4", "🧑‍🏫 Avisar um adulto")]
for i, (n, rot) in enumerate(passos):
    y = 30 + i * 62
    c.append(circulo(300, y + 22, 20, "verde", "verde_c") + t(300, y + 29, n, 16, "verde", 900)
             + caixa(330, y, 360, 44, cor="verde", fundo="papel", rx=10, larg=2) + t(350, y + 28, rot, 15, "tinta", 800, "start"))
c.append(seta(236, 120, 274, 52, "verde", 3))
fig("m3", "Hábito Por quê",
    "Um celular mostra um alerta de login de aparelho desconhecido às 3h da manhã, e a pessoa pensa: não fui eu! Ao lado, os quatro passos em ordem: trocar a senha, sair de todos os aparelhos, ativar as duas etapas e avisar um adulto.",
    720, 296, "".join(c), "Alerta estranho? Siga os quatro passos, nesta ordem.")

# ======================= MISSÃO 4 =======================
c = [caixa(130, 10, 460, 280, cor="tinta", fundo="#f8fafc", rx=16, larg=2.5), t(360, 40, "⚙️ Configurações › Privacidade", 15, "tinta", 900)]
ops = [("👤 Conta privada", True), ("🏷️ Marcar: só quem eu sigo", True), ("💬 Mensagens: só amigos", True), ("📍 Localização nos posts", False), ("🔎 Achar pelo telefone", False), ("🟢 Mostrar quando estou on-line", False)]
for i, (rot, lig) in enumerate(ops):
    y = 58 + i * 38
    c.append(caixa(146, y, 428, 32, cor="linha", fundo="papel", rx=8, larg=1.2) + t(160, y + 21, rot, 13, "tinta", 800, "start")
             + chave(510, y + 3, lig) + t(498, y + 21, "ligado" if lig else "desligado", 10, "verde" if lig else "suave", 800, "end"))
c.append(etiqueta(65, 150, "🔒", "verde", 18) + etiqueta(655, 150, "🔁 revisar", "amarelo", 12))
fig("m4", "Configuração Opção mais protegida",
    "Uma tela de Configurações › Privacidade com interruptores na opção mais protegida: conta privada, marcar só quem eu sigo e mensagens só de amigos ligados; localização nos posts, achar pelo telefone e mostrar quando estou on-line desligados. Ao lado: revisar de vez em quando.",
    720, 300, "".join(c), "A opção mais protegida deixa menos gente ver e falar com você.")

# ======================= MISSÃO 5 =======================
partes = [("🎯", "Tema", "proteger a conta"), ("👥", "Público", "os avós"), ("🖼️", "Formato", "cartaz digital"), ("🧩", "Tarefas", "quem faz o quê"), ("📚", "Fontes", "apostila, sites oficiais")]
c = [caixa(10, 10, 700, 276, cor="amarelo", fundo="#fef9c3", rx=12, larg=2), t(360, 36, "📋 Plano do guia de privacidade", 15, "tinta", 900)]
for i, (e, rot, ex) in enumerate(partes):
    x = 30 + (i % 3) * 226 if i < 3 else 143 + (i - 3) * 226; y = 56 + (i // 3) * 108
    c.append(caixa(x, y, 210, 94, cor="roxo", fundo="papel", rx=10, larg=2) + emoji(x + 30, y + 52, e, 30) + t(x + 120, y + 40, rot, 14, "roxo", 900) + t(x + 120, y + 66, ex, 12, "tinta", 700))
c.append(t(360, 276, "🚫 nenhum dado pessoal real · ✅ só exemplos inventados", 12, "vermelho", 800))
fig("m5", "Parte Pergunta Exemplo",
    "Um quadro de planejamento com cinco cartões: tema (proteger a conta), público (os avós), formato (cartaz digital), tarefas (quem faz o quê) e fontes (apostila, sites oficiais). Embaixo: nenhum dado pessoal real, só exemplos inventados.",
    720, 296, "".join(c), "Cinco partes do plano, pensando no público.")

# ======================= MISSÃO 6 =======================
c = [caixa(20, 20, 380, 230, cor="tinta", fundo="papel", rx=10, larg=2.5), caixa(20, 20, 380, 40, cor="tinta", fundo="azul_c", rx=10, larg=2.5)]
c.append(t(210, 47, "Dica 2 de 5", 14, "azul", 900) + t(210, 100, "📲 Ative as duas etapas", 20, "tinta", 900)
         + emoji(120, 180, "🔐", 54) + t(270, 170, "Mesmo com a senha,", 13, "tinta", 700) + t(270, 192, "ninguém entra", 13, "tinta", 700) + t(270, 214, "sem o código.", 13, "tinta", 700))
c.append(etiqueta(210, 276, "🎯 uma dica · 🖼️ uma imagem · letra grande", "verde", 12))
crit = [("✅", "Correto"), ("👥", "Para o público"), ("🔒", "Seguro"), ("🎨", "Atraente"), ("🤝", "Equipe")]
c.append(caixa(430, 20, 270, 230, cor="tinta", fundo="papel", rx=10, larg=2) + t(565, 46, "📝 Rubrica", 15, "tinta", 900))
for i, (e, rot) in enumerate(crit):
    y = 64 + i * 36
    c.append(caixa(448, y, 24, 24, cor="verde", fundo="verde_c", rx=5, larg=2) + t(460, y + 18, "✔", 14, "verde", 900) + t(484, y + 18, f"{e} {rot}", 14, "tinta", 800, "start"))
c.append(etiqueta(565, 276, "⏱️ respeitar o tempo", "amarelo", 12))
fig("m6", "Dica Por quê",
    "À esquerda, um slide de exemplo: “Dica 2 de 5 · Ative as duas etapas”, com um cadeado e a frase “Mesmo com a senha, ninguém entra sem o código”. À direita, a rubrica: correto, para o público, seguro, atraente e equipe. Lembretes: uma dica, uma imagem, letra grande e respeitar o tempo.",
    720, 296, "".join(c), "Uma dica por slide, avaliada pela rubrica.")

# ======================= MISSÃO 7 =======================
c = [caixa(20, 30, 230, 190, cor="tinta", fundo="#e0f2fe", rx=8, larg=2.5), emoji(135, 120, "🏞️", 80), t(135, 200, "foto_do_passeio.jpg", 12, "tinta", 800, fonte=MONO)]
c.append(seta(256, 125, 316, 125, "roxo", 3) + t(286, 112, "dentro", 11, "suave", 800))
c.append(caixa(322, 30, 378, 190, cor="roxo", fundo="roxo_c", rx=12, larg=2) + t(511, 58, "🔍 Metadados (escondidos no arquivo)", 14, "roxo", 900))
meta = [("📅", "Data: 14/06 · 10:32"), ("📱", "Aparelho: modelo do celular"), ("📍", "Local: as coordenadas do lugar")]
for i, (e, rot) in enumerate(meta):
    y = 80 + i * 44
    c.append(caixa(338, y, 346, 36, cor="linha", fundo="papel", rx=8, larg=1.2) + emoji(360, y + 26, e, 18) + t(380, y + 24, rot, 13, "tinta", 800, "start"))
c.append(etiqueta(360, 252, "🛡️ desligar a localização da câmera · postar depois de sair", "verde", 13))
fig("m7", "Onde aparece Risco Como proteger",
    "Uma foto de passeio (foto_do_passeio.jpg) e, ao lado, o que vai escondido dentro do arquivo, os metadados: data e hora, modelo do celular e as coordenadas do lugar. Embaixo: desligar a localização da câmera e postar depois de sair.",
    720, 276, "".join(c), "A foto pode contar onde e quando foi tirada.")

# ======================= MISSÃO 8 =======================
c = [caixa(20, 14, 260, 270, cor="tinta", fundo="#f1f5f9", rx=24, larg=3), caixa(34, 44, 232, 212, cor="linha", fundo="papel", rx=8, larg=1.5)]
c.append(t(150, 68, "📞 Central (número desconhecido)", 11, "suave", 800))
c.append(balao(46, 82, 208, 110, ["“Olá, Ana Souza,", "CPF terminado em 12.", "Confirme o código", "que chegou por SMS.”"], "vermelho", "vermelho_c", "baixo-esq", 12))
c.append(t(150, 234, "⚠️ dados vazados + pedido de código", 11, "vermelho", 900))
c.append(caixa(310, 20, 390, 100, cor="amarelo", fundo="amarelo_c", rx=14, larg=3) + t(505, 52, "⭐ Regra de ouro", 15, "tinta", 900)
         + t(505, 80, "Saber os seus dados NÃO prova", 13, "tinta", 800) + t(505, 100, "que a pessoa é de confiança.", 13, "tinta", 800))
c.append(caixa(310, 136, 390, 140, cor="verde", fundo="verde_c", rx=14) + t(505, 164, "✅ O que fazer", 15, "verde", 900))
for i, rot in enumerate(["📵 desligar e ligar para o número oficial", "🔑 trocar a senha · 📲 duas etapas", "🙅 nunca passar senha nem código"]):
    c.append(t(505, 194 + i * 26, rot, 12, "tinta", 800))
fig("m8", "Golpe Como é",
    "Um celular com a mensagem de uma falsa central que já sabe o nome e o final do CPF (dados vazados) e pede o código do SMS. Ao lado, a regra de ouro: saber os seus dados não prova que a pessoa é de confiança. O que fazer: desligar e ligar para o número oficial, trocar a senha, ativar as duas etapas e nunca passar senha nem código.",
    720, 296, "".join(c), "Golpe com dados vazados parece confiável, mas não é.")

ICONES = {"m1": "🪪", "m2": "🔐", "m3": "🛡️", "m4": "⚙️", "m5": "📋", "m6": "🎤", "m7": "📍", "m8": "🎣", "rv": "🔁"}

try:
    from cenas_8_4 import F as CENAS   # 🎬 cenas de abertura (IA + camada que ensina), quando existirem
    F[:0] = CENAS
except ImportError:
    pass

if __name__ == "__main__":
    print("figuras:", gerar("informatica-8ano-2027-4bim", F, ICONES))

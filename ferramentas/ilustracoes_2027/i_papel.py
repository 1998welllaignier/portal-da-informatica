"""Ilustrações — ⭐ Aula especial: Meu papel de parede (as mesmas para o 6º, 7º, 8º e 9º ano)."""
from base import *

F = []


def fig(ancora, rotulo, w, h, corpo, legenda=None):
    F.append({"missao": "ae", "pagina": "comecar", "ancora": ancora, "rotulo": rotulo, "html": figura(w, h, rotulo, corpo, legenda)})


def arquivo(x, y, ext, cor, nome=None, w=60):
    c = COR[cor]
    return (f'<path d="M{x} {y} h{w-14} l14 14 v{w*1.05} h{-w} z" fill="#fff" stroke="{c}" stroke-width="2.5" stroke-linejoin="round"/>'
            f'<path d="M{x+w-14} {y} v14 h14" fill="none" stroke="{c}" stroke-width="2"/>'
            + caixa(x - 6, y + w * 0.55, w + 12, 22, cor=cor, fundo=cor, rx=5, larg=0)
            + t(x + w / 2, y + w * 0.55 + 16, ext, 13, "#fff", 800)
            + (t(x + w / 2, y + w * 1.05 + 30, nome, 12, "tinta", 600) if nome else ""))


def barra(x, y, w, centro, titulo, cor):
    """Barra de tarefas desenhada: botão Iniciar no centro (Windows 11) ou à esquerda (Windows 10)."""
    fundo = "#eef3fa" if centro else "#1f1f1f"
    tela = f'<rect x="{x}" y="{y}" width="{w}" height="120" rx="8" fill="{"#a9c8ee" if centro else "#0a5fb4"}"/>'
    bar = f'<rect x="{x}" y="{y+120}" width="{w}" height="34" fill="{fundo}"/>'
    if centro:
        ix = x + w / 2 - 70
        icones = "".join(t(ix + 30 * k + 14, y + 143, ch, 16, "tinta", 400) for k, ch in enumerate(["⊞", "🔍", "📁", "🌐"]))
        alvo = (ix + 14, y + 137)
    else:
        icones = t(x + 18, y + 143, "⊞", 18, "#fff", 400) + f'<rect x="{x+36}" y="{y+126}" width="110" height="22" fill="#f2f2f2"/>' + t(x + 44, y + 141, "🔍 Pesquisar", 11, "suave", 500, "start") + t(x + 166, y + 143, "📁", 15, "#fff", 400) + t(x + 194, y + 143, "🌐", 15, "#fff", 400)
        alvo = (x + 18, y + 137)
    circ = f'<circle cx="{alvo[0]}" cy="{alvo[1]}" r="17" fill="none" stroke="{COR[cor]}" stroke-width="3.5"/>'
    return tela + bar + icones + circ + etiqueta(x + w / 2, y + 40, titulo, cor, 15) + t(x + w / 2, y + 80, "Iniciar ⊞ " + ("no CENTRO" if centro else "no CANTO ESQUERDO"), 14, "#fff" if not centro else "tinta", 800)


# 1) Qual é o meu Windows?
c = barra(20, 20, 330, False, "Windows 10", "azul") + barra(390, 20, 330, True, "Windows 11", "verde")
c += seta(60, 220, 38, 186, "azul") + t(70, 236, "olhe aqui!", 13, "azul", 700, "start")
c += seta(520, 220, 532, 186, "verde") + t(520, 236, "olhe aqui!", 13, "verde", 700, "end")
c += caixa(120, 256, 500, 70, "amarelo", "amarelo_c") + linhas(370, 282, ["Para ter certeza: ⚙️ Configurações › Sistema › Sobre", "ou ⊞ + R › digite winver › Enter"], 14, "tinta", 700)
fig("Jeito Como fazer O que aparece", "Duas barras de tarefas lado a lado: no Windows 10 o botão Iniciar fica no canto esquerdo; no Windows 11, no centro. Embaixo, o jeito certo de confirmar: Configurações › Sistema › Sobre ou a janela Executar com winver.", 740, 340, c)

# 2) Formatos aceitos
c = ""
itens = [(".jpg", "verde", True, "foto"), (".png", "verde", True, "desenho"), (".bmp", "verde", True, "antigo"), (".webp", "vermelho", False, "de sites"), (".jxl", "vermelho", False, "🆕 novo")]
for k, (ext, cor, ok, nome) in enumerate(itens):
    x = 40 + k * 140
    c += arquivo(x, 70, ext, cor, nome)
    c += circulo(x + 30, 50, 18, cor, cor + "_c") + t(x + 30, 57, "✔" if ok else "✖", 20, cor, 900)
c += caixa(20, 190, 400, 40, "verde", "verde_c", rx=8) + t(220, 216, "✔ o papel de parede ACEITA", 15, "verde", 800)
c += caixa(440, 190, 280, 40, "vermelho", "vermelho_c", rx=8) + t(580, 216, "✖ NÃO aceita: converta!", 15, "vermelho", 800)
fig("Formato Serve como papel de parede", "Cinco arquivos: .jpg, .png e .bmp com um ✔ verde (o papel de parede aceita) e .webp e .jxl com um ✖ vermelho (não aceita, precisa converter).", 740, 250, c)

# 3) Como descobrir o formato: coluna Tipo e extensões ligadas
c = caixa(20, 20, 700, 150, "linha", "papel", rx=8)
c += f'<rect x="20" y="20" width="700" height="30" fill="#f3f3f3"/>' + t(36, 40, "📁 Downloads", 13, "tinta", 700, "start")
c += t(40, 74, "Nome", 12, "suave", 600, "start") + t(330, 74, "Tipo", 12, "suave", 600, "start") + t(520, 74, "Tamanho", 12, "suave", 600, "start")
c += f'<line x1="30" y1="82" x2="710" y2="82" stroke="{COR["linha"]}"/>'
c += t(40, 106, "🖼️ estadio-a-noite", 13, "tinta", 600, "start") + t(330, 106, "Arquivo WEBP", 13, "vermelho", 800, "start") + t(520, 106, "214 KB", 13, "tinta", 500, "start")
c += f'<rect x="322" y="90" width="120" height="24" rx="5" fill="none" stroke="{COR["vermelho"]}" stroke-width="3"/>'
c += t(40, 140, "🖼️ estadio-a-noite", 13, "tinta", 600, "start") + t(165, 140, ".webp", 14, "azul", 900, "start")
c += f'<line x1="165" y1="145" x2="205" y2="145" stroke="{COR["azul"]}" stroke-width="3"/>'
c += seta(185, 150, 150, 182, "azul") + t(40, 200, "extensões ligadas: o nome mostra o .webp", 13, "azul", 800, "start")
c += seta(444, 104, 540, 176, "vermelho") + etiqueta(590, 194, "a coluna Tipo diz o formato", "vermelho", 13)
fig("Onde Como ver", "Explorador de Arquivos na pasta Downloads: a coluna Tipo mostra “Arquivo WEBP”; com as extensões de nomes de arquivos ligadas, o nome aparece com o final .webp.", 740, 220, c)

# 4) O caminho da conversão
c = arquivo(30, 60, ".webp", "vermelho", "estadio")
c += seta(104, 100, 176, 100, "tinta") + t(140, 86, "Abrir com", 11, "suave", 600)
c += caixa(186, 50, 140, 110, "amarelo", "amarelo_c") + t(256, 96, "🎨", 34, "tinta", 400) + t(256, 128, "Paint", 16, "amarelo", 800) + t(256, 148, "Salvar como › PNG", 11, "tinta", 700)
c += seta(334, 100, 406, 100, "tinta") + t(370, 86, "Salvar", 11, "suave", 600)
c += arquivo(416, 60, ".png", "verde", "estadio")
c += seta(490, 100, 562, 100, "tinta") + t(526, 74, "botão direito", 11, "suave", 600) + t(526, 88, "› Definir", 11, "suave", 600)
c += f'<rect x="572" y="50" width="150" height="100" rx="6" fill="#1b2a5a" stroke="{COR["verde"]}" stroke-width="3"/><rect x="572" y="132" width="150" height="18" fill="#1f1f1f"/>'
c += f'<rect x="572" y="96" width="150" height="36" fill="#2f9e44"/><circle cx="600" cy="70" r="9" fill="#fff8c4"/><circle cx="694" cy="70" r="9" fill="#fff8c4"/>'
c += t(647, 176, "papel de parede ✔", 13, "verde", 800)
c += caixa(120, 205, 500, 44, "vermelho", "vermelho_c", rx=8) + t(370, 232, "✖ Renomear para .png NÃO converte: tem que salvar de novo", 13, "vermelho", 800)
fig("Passo O que fazer 1 No Explorador de Arquivos", "O caminho da conversão: a imagem .webp abre no Paint, é salva como .png e a imagem nova vira papel de parede. Embaixo, o aviso: renomear não converte.", 740, 260, c)

ICONES = {"ae": "🖼️"}

if __name__ == "__main__":
    for s in "6789":
        print(gerar(f"informatica-{s}ano-papel-de-parede", F, ICONES))

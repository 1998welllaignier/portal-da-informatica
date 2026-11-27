"""🖼️ Imagens das PALAVRAS DIFÍCEIS (20/11/2026): pedido do professor — "na mesma janela do significado, aparecer uma
imagem representando a palavra, para melhorar o entendimento". Desenhos em LINHA CLARA (linha_clara.py), feitos pelo Claude,
e algumas FOTOS REAIS já usadas na apostila (img/fotos, com o crédito). Gera dados/termos-imagens.js.
Chave = o termo normalizado (minúsculas, sem acento, sem o que está entre parênteses). Uso: python3 termos.py"""
import os, sys, json, unicodedata, re
AQUI = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, AQUI)
from linha_clara import *  # noqa
from linha_clara import V, K, ESC, t, r, c, p

W, H = 320, 200


def k(s):
    s = re.sub(r"\s*\(.*?\)\s*", " ", s).strip().lower()
    return unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode()


def svg(corpo, rot):
    return f'<svg role="img" aria-label="{rot}" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">{corpo}</svg>'


def fundo(cor="cinza"):
    return r(6, 6, W - 18, H - 18, V[cor][1], rx=18, lw=3, sombra=5)


def tecla(x, y, s, w=56, cor="#fff"):
    return r(x, y, w, 46, cor, rx=8, lw=3, sombra=4) + t(x + w / 2, y + 30, s, 18, K, 900)


def pasta_(x, y, w=90, cor="#facc15"):
    h = w * 0.72
    return (p(f"M{x} {y+10} h{w*0.38} l{w*0.08} {-10} h{w*0.54} v{h} h{-w} z", "#eab308", 3)
            + r(x, y + 16, w, h - 6, cor, rx=6, lw=3, sombra=4))


def arquivo_(x, y, ext, cor="azul", w=58):
    h = w * 1.25
    return (p(f"M{x} {y} h{w-16} l16 16 v{h-16} h{-w} z", "#fff", 3)
            + r(x - 6, y + h - 30, w * 0.8, 22, V[cor][0], rx=5, lw=2.5) + t(x - 6 + w * 0.4, y + h - 14, ext, 12, "#fff", 900, contorno=K))


def bloco(x, y, s, cor="azul", w=150):
    return r(x, y, w, 34, V[cor][0], rx=9, lw=3, sombra=3) + t(x + w / 2, y + 23, s, 15, "#fff", 900, contorno=K)


def seta_dir(x1, y, x2, cor="azul"):
    return seta_grossa(x1, y, x2, cor, 24)


D = {}


def d(nomes, rot, corpo, cor="cinza"):
    h = svg(fundo(cor) + corpo, rot)
    for n in nomes.split("|"):
        D[k(n)] = {"html": h, "alt": rot}


def foto(nomes, arq, alt, credito):
    for n in nomes.split("|"):
        D[k(n)] = {"foto": f"img/fotos/{arq}.webp", "alt": alt, "credito": credito}


# ---------------- 6º ano · Missão 1 (o computador e os arquivos) ----------------
d("hardware|peças|peca", "Hardware: as peças que dá para tocar (gabinete, monitor, teclado, mouse)",
  gabinete(30, 40, 62, 112) + monitor(112, 44, 112, 72, "azul", "pasta") + teclado(108, 140, 120) + mouse(250, 124, 0.9)
  + etiqueta(250, 46, "dá para tocar", "azul", 12))
d("software|programa|aplicativo|app", "Software: os programas que funcionam dentro do computador ou do celular",
  r(40, 32, 230, 140, "#334155", rx=10, sombra=5) + r(50, 42, 210, 120, "#fff", rx=6, lw=2.5)
  + "".join(r(64 + i * 66, 58, 50, 50, V[cc][0], rx=12, lw=3, sombra=3) + t(89 + i * 66, 91, e, 24, K) for i, (cc, e) in enumerate([("azul", "✏️"), ("verde", "🎵"), ("amarelo", "🎮")]))
  + t(155, 140, "programas: não dá para pegar", 13, K, 800))
d("cpu|processador", "CPU: o processador, o chip que faz as contas do computador",
  chip(118, 52, 84) + etiqueta(160, 176, "faz as contas", "amarelo", 13), "amarelo")
d("hd|disco rigido", "HD: disco que gira e guarda os arquivos",
  hd(70, 46, 180, 112) + etiqueta(160, 182, "guarda girando um disco", "roxo", 12), "roxo")
d("ssd", "SSD: guarda os arquivos em chips, sem peças girando (mais rápido)",
  ssd(60, 70, 200, 64) + etiqueta(160, 168, "chips: rápido, sem girar", "roxo", 12), "roxo")
d("pen drive|pendrive", "Pen drive: memória pequena que leva arquivos de um computador para outro",
  r(70, 78, 150, 52, "#3b82f6", rx=14, lw=3.5, sombra=5) + r(220, 88, 42, 32, "#cbd5e1", rx=3, lw=3)
  + r(232, 96, 8, 7, K, rx=1, lw=1) + r(246, 96, 8, 7, K, rx=1, lw=1) + c(98, 104, 8, "#fff", 3)
  + t(156, 110, "8 GB", 16, "#fff", 900, contorno=K) + etiqueta(160, 172, "leva arquivos no bolso", "azul", 12), "azul")
d("ctrl + s|ctrl+s|salvar", "Ctrl + S: segurar Ctrl e apertar S salva o arquivo",
  tecla(56, 66, "Ctrl", 74) + t(152, 98, "+", 30, K, 900) + tecla(178, 66, "S", 60, "#fde68a")
  + p("M270 70 h24 v30 h-24 z", "#8b5cf6", 3) + r(276, 74, 12, 8, "#fff", rx=1, lw=1.5)
  + etiqueta(160, 160, "salvar rapidinho", "roxo", 13), "roxo")
d("metadados|metadado|propriedades", "Metadados: as informações sobre o arquivo (nome, tamanho, data, autor)",
  arquivo_(44, 50, "JPG", "verde", 66) + r(140, 34, 156, 130, "#fff", rx=10, lw=3, sombra=4)
  + "".join(t(152, 62 + i * 26, s, 13, cc, 800, "start") for i, (s, cc) in enumerate([("nome: praia.jpg", K), ("tamanho: 2 MB", "roxo"), ("data: 20/11/2026", "azul"), ("autor: Bia", "verde")]))
  + seta_dir(112, 100, 138, "cinza"))
d("pasta|diretorio", "Pasta: como uma gaveta que guarda e organiza os arquivos",
  pasta_(108, 60, 110) + arquivo_(126, 36, "TXT", "azul", 40) + arquivo_(176, 40, "JPG", "verde", 40) + pasta_(108, 74, 110, "#fde047")
  + etiqueta(163, 178, "guarda e organiza", "amarelo", 12), "amarelo")
d("arquivo", "Arquivo: um trabalho guardado no computador (texto, foto, música…)",
  arquivo_(56, 50, "TXT", "azul") + arquivo_(130, 50, "JPG", "verde") + arquivo_(204, 50, "MP3", "rosa")
  + t(160, 172, "cada arquivo tem um nome e um tipo", 13, K, 800))
d("extensao|formato", "Extensão: as letras depois do ponto dizem o tipo do arquivo",
  r(40, 66, 240, 56, "#fff", rx=10, lw=3, sombra=4) + t(130, 104, "praia.", 26, K, 900, fonte=MONO) + t(196, 104, "jpg", 26, "verde", 900, fonte=MONO)
  + p("M196 128 v18", "none", 3) + etiqueta(196, 166, "tipo: foto", "verde", 13))
d("armazenamento|guardar", "Armazenamento: onde os arquivos ficam guardados, mesmo com o computador desligado",
  ssd(40, 60, 130, 46) + hd(190, 48, 100, 70) + etiqueta(160, 164, "guarda mesmo desligado", "roxo", 13), "roxo")
d("entrada|dispositivo de entrada", "Entrada: o que manda informação PARA o computador (teclado, mouse, microfone)",
  teclado(30, 76, 130) + mouse(180, 70) + microfone(262, 64) + etiqueta(160, 172, "você manda", "azul", 13), "azul")
d("saida|dispositivo de saida", "Saída: o que mostra o resultado (tela, som, papel)",
  monitor(26, 40, 110, 72, "verde", "texto") + caixa_som(160, 50) + impressora(212, 54, 84) + etiqueta(160, 176, "o computador mostra", "verde", 13), "verde")
d("processamento", "Processamento: o processador faz as contas com o que entrou",
  gabinete(60, 36, 70, 124) + chip(170, 66, 60) + etiqueta(200, 168, "faz as contas", "amarelo", 12), "amarelo")
d("mouse", "Mouse: aponta e clica (botão esquerdo, direito e rodinha)",
  mouse(132, 60, 1.6) + etiqueta(160, 176, "aponta e clica", "azul", 13), "azul")
d("teclado", "Teclado: digita letras, números e atalhos", teclado(56, 66, 208) + etiqueta(160, 172, "digita", "azul", 13), "azul")
d("monitor|tela", "Monitor: a tela que mostra as imagens", monitor(96, 34, 128, 84, "azul", "pasta") + etiqueta(160, 176, "mostra a imagem", "verde", 13), "verde")
d("impressora", "Impressora: põe o resultado no papel", impressora(110, 46, 100) + etiqueta(160, 170, "imprime no papel", "verde", 13), "verde")
d("gabinete", "Gabinete: a caixa onde ficam as peças (processador, memória, HD)", gabinete(124, 30, 74, 130) + etiqueta(240, 176, "a caixa", "amarelo", 12), "amarelo")

# ---------------- 6º ano · Missão 2 (algoritmos) ----------------
d("algoritmo", "Algoritmo: passos em ordem para resolver um problema (como uma receita)",
  r(70, 24, 180, 150, "#fff", rx=10, lw=3, sombra=5) + t(160, 50, "Receita do suco", 15, K, 900)
  + "".join(c(94, 76 + i * 28, 10, V["azul"][0], 2.5) + t(94, 81 + i * 28, str(i + 1), 12, "#fff", 900) + t(112, 81 + i * 28, s, 13, K, 700, "start")
            for i, s in enumerate(["corte a fruta", "bata com água", "sirva no copo"])), "azul")
d("instrucao|comando", "Instrução: uma ordem que o computador (ou o robô) cumpre",
  r(40, 42, 90, 96, "#60a5fa", rx=20, lw=3.5, sombra=5) + c(68, 80, 8, K, 1) + c(102, 80, 8, K, 1) + p("M66 106 q19 12 38 0", "none", 3.5)
  + bloco(160, 56, "ande 1 passo", "azul", 136) + seta_dir(150, 120, 290, "azul") + t(220, 160, "ele faz exatamente isso", 12, K, 800))
d("condicao|selecao|se", "Condição: SE for verdade faz uma coisa, SE NÃO faz outra",
  p("M160 22 L232 70 L160 118 L88 70 Z", "#fbbf24", 3.5) + t(160, 76, "Chovendo?", 15, K, 900)
  + p("M96 82 L60 132", "none", 4) + p("M224 82 L260 132", "none", 4)
  + bloco(8, 136, "sim: guarda-chuva", "verde", 150) + bloco(166, 136, "não: boné", "vermelho", 138), "amarelo")
d("entrada e saida do algoritmo|entrada e saida", "Entrada e saída do algoritmo: o que ele recebe e o que ele devolve",
  bloco(10, 82, "entra: 2 e 3", "azul", 96) + seta_dir(108, 99, 132, "azul") + r(134, 66, 70, 66, "#fbbf24", rx=12, lw=3.5, sombra=4) + t(169, 106, "soma", 15, K, 900)
  + seta_dir(206, 99, 230, "verde") + bloco(232, 82, "sai: 5", "verde", 76))
d("repeticao|laco|loop|repetir", "Repetição: fazer o mesmo passo várias vezes sem escrever de novo",
  p("M90 60 H230 a40 40 0 0 1 0 80 H90 a40 40 0 0 1 0 -80 Z", "none", 9) + p("M90 60 H230 a40 40 0 0 1 0 80 H90 a40 40 0 0 1 0 -80 Z", "none", 5, ' stroke="#8b5cf6"')
  + bloco(110, 82, "pule", "roxo", 100) + r(132, 124, 56, 32, "#fff", rx=16, lw=3, sombra=3) + t(160, 146, "4×", 18, "roxo", 900), "roxo")
d("sequencia", "Sequência: um passo depois do outro, na ordem certa",
  bloco(14, 80, "ande", "azul", 80) + seta_dir(96, 97, 116, "azul") + bloco(118, 80, "vire", "azul", 80) + seta_dir(200, 97, 220, "azul") + bloco(222, 80, "ande", "azul", 80), "azul")
d("bug|erro", "Bug: um erro no programa que faz ele dar resultado errado",
  r(80, 40, 160, 110, "#fff", rx=10, lw=3, sombra=5) + t(160, 74, "2 + 2 = 5", 22, "vermelho", 900, fonte=MONO)
  + c(212, 120, 16, "#ef4444", 3) + p("M200 110 l-10 -8 M224 110 l10 -8 M198 128 l-12 6 M226 128 l12 6", "none", 3)
  + c(206, 116, 3, K, 1) + c(218, 116, 3, K, 1) + etiqueta(160, 180, "achar e consertar = depurar", "vermelho", 12), "vermelho")
d("depurar", "Depurar: procurar e consertar o erro (o bug) do programa",
  r(70, 40, 150, 100, "#fff", rx=10, lw=3, sombra=5) + t(145, 98, "2 + 2 = 4 ✓", 20, "verde", 900, fonte=MONO)
  + c(250, 70, 22, "#cffafe", 4) + p("M266 86 L290 110", "none", 7) + etiqueta(160, 178, "consertado!", "verde", 13), "verde")
d("variavel", "Variável: uma caixinha com nome que guarda um valor",
  r(100, 70, 120, 80, "#fbbf24", rx=8, lw=3.5, sombra=5) + p("M100 70 l20 -24 h120 l-20 24", "#fde68a", 3) + t(160, 122, "pontos = 10", 15, K, 900, fonte=MONO)
  + etiqueta(160, 180, "o valor pode mudar", "amarelo", 12), "amarelo")

# ---------------- rede e internet ----------------
d("wi-fi|wifi", "Wi-Fi: internet sem fio, pelo ar",
  p("M100 100 a85 85 0 0 1 120 0", "none", 10) + p("M120 122 a55 55 0 0 1 80 0", "none", 10) + p("M140 142 a25 25 0 0 1 40 0", "none", 10) + c(160, 160, 9, "#06b6d4", 3)
  + etiqueta(160, 50, "sem fio", "ciano", 13), "ciano")
d("roteador", "Roteador: a caixinha que distribui a internet para os aparelhos",
  r(80, 94, 160, 50, "#334155", rx=10, sombra=5) + "".join(c(104 + i * 20, 119, 4, "#22c55e", 1.5) for i in range(4))
  + p("M110 94 l-14 -44 M210 94 l14 -44", "none", 5) + p("M232 58 a20 20 0 0 1 20 20 M240 44 a34 34 0 0 1 26 34", "none", 3), "ciano")
d("nuvem", "Nuvem: arquivos guardados em computadores da internet, que você abre de qualquer lugar",
  p("M90 130 a30 30 0 0 1 10 -58 a42 42 0 0 1 80 -10 a34 34 0 0 1 50 30 a28 28 0 0 1 -6 38 z", "#cffafe", 3.5)
  + arquivo_(136, 82, "DOC", "azul", 40) + etiqueta(160, 176, "abre de qualquer lugar", "ciano", 12), "ciano")
d("servidor|data center", "Servidor: um computador que fica ligado o tempo todo guardando e enviando dados",
  "".join(r(110, 34 + i * 44, 100, 36, "#334155", rx=6, sombra=4) + c(126, 52 + i * 44, 5, "#22c55e", 1.5) + f'<path d="M144 {52+i*44} h52" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>' for i in range(3)), "ciano")
d("navegador", "Navegador: o programa que abre os sites (Chrome, Edge, Firefox)",
  r(40, 34, 240, 136, "#fff", rx=10, lw=3.5, sombra=5) + r(40, 34, 240, 30, "#cbd5e1", rx=10, lw=3) + r(80, 41, 186, 18, "#fff", rx=9, lw=2)
  + t(90, 55, "www.escola.com.br", 11, K, 700, "start", fonte=MONO) + c(56, 49, 5, "#ef4444", 1.5)
  + r(58, 78, 90, 60, V["azul"][0], rx=6, lw=2.5) + "".join(f'<path d="M162 {86+i*14} h{96-i*14}" stroke="{K}" stroke-width="4" stroke-linecap="round"/>' for i in range(4)), "azul")
d("link", "Link: um texto ou botão que leva para outra página",
  r(40, 70, 240, 50, "#fff", rx=10, lw=3, sombra=4) + t(160, 102, "clique aqui", 20, "azul", 900) + p("M106 108 h108", "none", 3, ' stroke="#2563eb"')
  + p("M200 112 l0 30 l9 -9 l8 16 l7 -3 l-8 -16 l13 0 z", "#fff", 3), "azul")

# ---------------- segurança ----------------
d("senha forte", "Senha forte: longa, misturando letras, números e símbolos",
  r(70, 58, 180, 50, "#fff", rx=10, lw=3, sombra=4) + t(160, 91, "S3nh@F0rte!", 20, "verde", 900, fonte=MONO)
  + r(130, 132, 60, 42, "#22c55e", rx=8, lw=3.5, sombra=4) + p("M142 132 v-10 a18 18 0 0 1 36 0 v10", "none", 5), "verde")
d("backup|copia de seguranca", "Backup: uma cópia de segurança dos arquivos em outro lugar",
  arquivo_(60, 54, "DOC", "azul") + seta_dir(130, 92, 180, "roxo") + arquivo_(196, 54, "DOC", "azul") + etiqueta(160, 176, "se perder um, tem o outro", "roxo", 12), "roxo")
d("phishing|golpe", "Phishing: mensagem falsa que tenta roubar sua senha ou seus dados",
  r(60, 40, 200, 110, "#fff", rx=10, lw=3, sombra=5) + t(160, 70, "VOCÊ GANHOU!!!", 16, "vermelho", 900)
  + r(110, 92, 100, 30, "#ef4444", rx=8, lw=3) + t(160, 113, "clique já", 14, "#fff", 900, contorno=K)
   + etiqueta(160, 180, "desconfie!", "vermelho", 13), "vermelho")
d("verificacao em duas etapas", "Verificação em duas etapas: além da senha, um código que chega no celular",
  r(30, 70, 110, 44, "#fff", rx=8, lw=3, sombra=3) + t(85, 98, "••••••", 18, K, 900) + t(160, 100, "+", 28, K, 900)
  + r(190, 36, 74, 128, "#334155", rx=14, sombra=5) + r(198, 50, 58, 96, "#dcfce7", rx=4, lw=2) + t(227, 104, "4821", 18, "verde", 900, fonte=MONO), "verde")

# ---------------- bits e medidas ----------------
d("bit", "Bit: o menor pedacinho de informação: 0 ou 1 (apagado ou aceso)",
  c(110, 90, 40, "#e2e8f0", 4) + t(110, 102, "0", 34, K, 900) + c(210, 90, 40, "#fde047", 4) + t(210, 102, "1", 34, K, 900)
  + t(110, 160, "apagado", 13, K, 800) + t(210, 160, "aceso", 13, K, 800), "amarelo")
d("byte", "Byte: um grupo de 8 bits (dá para guardar uma letra)",
  "".join(r(28 + i * 34, 70, 30, 40, "#fde047" if b == "1" else "#fff", rx=5, lw=3) + t(43 + i * 34, 97, b, 18, K, 900) for i, b in enumerate("01000001"))
  + t(160, 150, "8 bits = 1 letra (A)", 15, K, 900), "amarelo")

# ---------------- fotos reais (com crédito) ----------------
foto("lixo eletronico", "lixo-eletronico", "Foto real: teclados, mouses e cabos jogados fora (lixo eletrônico).", "Foto: Reconrabbit · Wikimedia Commons · domínio público (CC0) (logotipos borrados)")
foto("fibra optica", "fibra-optica", "Foto real: cabo de fibra óptica levando luz de uma ponta à outra.", "Foto: Hustvedt · Wikimedia Commons · licença CC BY-SA 3.0")
foto("placa-mae|placa mae", "gabinete-aberto", "Foto real: gabinete aberto com a placa-mãe e o cooler sobre o processador.", "Foto: BGN-WMCO · Wikimedia Commons · licença CC BY 3.0 (foto recortada)")
foto("cabo submarino", "cabo-submarino-praia-crozet", "Foto real: cabo submarino saindo do mar e chegando a uma praia (Ilhas Crozet).", "Foto: CTBTO Preparatory Commission (The Official CTBTO Photostream) · Wikimedia Commons · licença CC BY 2.0")


# ---------------- 6º ano 2027 · 1º bimestre (figurinhas do álbum, 20/11/2026) ----------------
def janela(x, y, w, h, tit="", cor="azul", corpo=""):
    return (r(x, y, w, h, "#fff", rx=8, lw=3, sombra=4) + r(x, y, w, 26, V[cor][1], rx=8, lw=3)
            + t(x + 10, y + 18, tit, 12, K, 800, "start")
            + "".join(r(x + w - 78 + i * 24, y + 5, 18, 16, c_, rx=3, lw=2) for i, c_ in enumerate(["#fde68a", "#bbf7d0", "#fecaca"]))
            + t(x + w - 69, y + 18, "–", 13, K, 900) + t(x + w - 45, y + 18, "□", 12, K, 900) + t(x + w - 21, y + 18, "x", 12, K, 900) + corpo)


def seta_mouse(x, y, esc=1.0):
    e = esc
    return p(f"M{x} {y} l0 {34*e} l{9*e} {-8*e} l{7*e} {14*e} l{6*e} {-3*e} l{-7*e} {-14*e} l{12*e} 0 z", "#fff", 3)


d("ponteiro", "Ponteiro: a setinha que anda na tela quando você mexe o mouse",
  monitor(70, 30, 150, 96, "azul", "") + seta_mouse(150, 58, 1.1) + mouse(244, 92, 0.9) + etiqueta(160, 176, "anda junto com o mouse", "azul", 12), "azul")
d("cursor", "Cursor: a barrinha que pisca onde a letra vai aparecer",
  r(40, 64, 240, 62, "#fff", rx=10, lw=3, sombra=4) + t(60, 104, "Olá, turm", 26, K, 800, "start") + r(196, 78, 5, 34, "#ef4444", rx=2, lw=0)
  + etiqueta(198, 160, "a letra aparece aqui", "vermelho", 12), "vermelho")
d("icone", "Ícone: desenho pequeno que representa um programa, uma pasta ou um arquivo",
  "".join(r(44 + i * 82, 54, 64, 64, V[c_][0], rx=14, lw=3, sombra=4) + t(76 + i * 82, 96, e, 28, K) for i, (c_, e) in enumerate([("amarelo", "📁"), ("azul", "🌐"), ("verde", "🎵")]))
  + t(160, 150, "cada desenho abre uma coisa", 13, K, 800))
d("janela", "Janela: o retângulo onde um programa aparece aberto",
  janela(40, 34, 240, 130, "Meu trabalho", "azul", "".join(f'<path d="M58 {82+k*16} h{180-k*30}" stroke="{K}" stroke-width="4" stroke-linecap="round"/>' for k in range(4))))
d("barra de tarefas", "Barra de tarefas: a faixa no pé da tela com o Iniciar e os programas abertos",
  monitor(40, 20, 240, 130, "azul", "") + r(47, 120, 226, 22, "#1e293b", rx=3, lw=2) + r(52, 123, 22, 16, "#3b82f6", rx=3, lw=1.5)
  + "".join(r(84 + i * 24, 123, 18, 16, c_, rx=3, lw=1.5) for i, c_ in enumerate(["#facc15", "#22c55e", "#ef4444"])) + t(255, 135, "10:30", 9, "#fff", 800)
  + etiqueta(160, 186, "lá embaixo da tela", "azul", 12))
d("area de trabalho|desktop", "Área de trabalho: a tela de fundo, com os ícones",
  monitor(50, 24, 220, 130, "verde", "") + "".join(r(64, 38 + i * 30, 22, 22, c_, rx=5, lw=2) for i, c_ in enumerate(["#facc15", "#60a5fa", "#f472b6"]))
  + etiqueta(160, 186, "o fundo, com os ícones", "verde", 12), "verde")
d("backspace", "Backspace: apaga a letra que está antes do cursor",
  tecla(40, 58, "⟵ Backspace", 150, "#fecaca") + t(240, 86, "Brasiu", 22, K, 800) + p("M262 70 l14 22 M276 70 l-14 22", "none", 4, ' stroke="#ef4444"')
  + etiqueta(160, 160, "apaga para trás", "vermelho", 12), "vermelho")
d("caps lock", "Caps Lock: liga e desliga as letras maiúsculas",
  tecla(46, 66, "Caps Lock", 130, "#bfdbfe") + c(164, 76, 5, "#22c55e", 2) + t(250, 100, "ABC", 32, "azul", 900)
  + etiqueta(160, 164, "trava as MAIÚSCULAS", "azul", 12), "azul")
d("shift", "Shift: segurando, a letra sai maiúscula",
  tecla(40, 66, "⇧ Shift", 110, "#bfdbfe") + t(170, 100, "+", 28, K, 900) + tecla(190, 66, "a", 56) + t(275, 100, "A", 30, "azul", 900)
  + etiqueta(160, 164, "segura e aperta", "azul", 12), "azul")
d("memoria ram|ram", "Memória RAM: guarda o que está sendo usado agora; desligou, esvaziou",
  r(40, 74, 240, 46, "#22c55e", rx=6, lw=3, sombra=4) + "".join(r(56 + i * 44, 82, 32, 30, "#1c1f22", rx=3, lw=1.5) for i in range(5))
  + "".join(r(48 + i * 12, 120, 7, 10, "#fde68a", rx=1, lw=1.2) for i in range(19)) + etiqueta(160, 168, "memória de agora (rápida)", "verde", 12), "verde")
d("touchscreen|tela sensivel ao toque", "Touchscreen: tela que recebe o toque (entrada) e mostra a imagem (saída)",
  r(120, 24, 84, 150, "#334155", rx=14, sombra=5) + r(128, 38, 68, 116, "#dbeafe", rx=4, lw=2) + c(162, 96, 14, "#facc15", 3)
  + p("M180 120 q14 -6 18 8 l4 20 h-26 z", "#f1c27d", 3) + etiqueta(60, 70, "toque = entrada", "azul", 11) + etiqueta(262, 140, "imagem = saída", "verde", 11))
d("sistema operacional", "Sistema operacional: o programa que comanda o computador (Windows, Linux, Android)",
  r(80, 30, 160, 60, V["roxo"][0], rx=12, lw=3, sombra=4) + t(160, 66, "Sistema operacional", 14, "#fff", 900, contorno=K)
  + "".join(seta_baixo(110 + i * 50, 96, 120, "roxo", 20) + r(88 + i * 50, 124, 44, 34, "#fff", rx=8, lw=3) + t(110 + i * 50, 147, e, 18, K) for i, e in enumerate(["🖱️", "📁", "🌐"]))
  + t(160, 182, "comanda as peças e os programas", 12, K, 800), "roxo")
d("atualizacao|atualizar", "Atualização: versão nova do programa, que conserta erros e traz novidades",
  r(110, 40, 100, 100, "#fff", rx=50, lw=4, sombra=4) + p("M136 92 a26 26 0 1 1 10 20", "none", 6) + p("M128 104 l10 10 l8 -14", "none", 5)
  + etiqueta(160, 172, "conserta e melhora", "verde", 12), "verde")
d("jpeg|jpg", "JPEG (.jpg): tipo de arquivo de foto", arquivo_(126, 40, "JPG", "verde", 70) + etiqueta(160, 172, "arquivo de foto", "verde", 12), "verde")
d("caminho", "Caminho: o endereço do arquivo, pasta por pasta",
  r(20, 74, 280, 44, "#fff", rx=10, lw=3, sombra=4) + t(30, 102, "C: › Documentos › Escola › prova.txt", 11, K, 800, "start", fonte="monospace")
  + etiqueta(160, 160, "o endereço do arquivo", "amarelo", 12), "amarelo")
d("explorador de arquivos", "Explorador de Arquivos: o programa que mostra as pastas e os arquivos",
  janela(40, 30, 240, 140, "📁 Explorador", "amarelo", pasta_(60, 76, 56) + pasta_(130, 76, 56) + arquivo_(206, 72, "TXT", "azul", 38)), "amarelo")
d("salvar como", "Salvar como: escolher o nome e a pasta onde o arquivo vai ficar",
  janela(40, 34, 240, 130, "💾 Salvar como", "roxo", r(56, 74, 208, 26, "#fff", rx=5, lw=2) + t(64, 92, "Nome: receita_bolo", 12, K, 700, "start")
  + r(176, 116, 88, 30, "#22c55e", rx=7, lw=3) + t(220, 136, "Salvar", 13, "#fff", 900, contorno=K)), "roxo")
d("renomear", "Renomear: trocar o nome de um arquivo ou pasta",
  arquivo_(40, 60, "TXT", "azul", 50) + t(110, 104, "doc1", 18, "vermelho", 800, "start") + seta_dir(160, 98, 196, "azul") + t(204, 104, "receita", 18, "verde", 800, "start")
  + etiqueta(160, 172, "dar um nome novo", "azul", 12))
d("dado|dados", "Dado: qualquer informação que o computador guarda",
  "".join(r(36 + i * 64, 66, 54, 54, V[c_][0], rx=10, lw=3, sombra=3) + t(63 + i * 64, 102, e, 22, K) for i, (c_, e) in enumerate([("azul", "Aa"), ("amarelo", "12"), ("verde", "📅"), ("rosa", "🖼️")]))
  + t(160, 156, "texto, número, data, imagem…", 13, K, 800))
d("tipo de dado", "Tipo de dado: cada dado é de um tipo (texto, número, data, lógico…)",
  r(40, 40, 240, 120, "#fff", rx=10, lw=3, sombra=4) + "".join(t(56, 70 + i * 26, a_, 14, K, 800, "start") + t(260, 70 + i * 26, b_, 14, c_, 900, "end") for i, (a_, b_, c_) in enumerate([("Maria", "texto", "azul"), ("12", "número", "amarelo"), ("10/05/2027", "data", "verde"), ("sim", "lógico", "roxo")])))
d("texto", "Texto: dado feito de letras (e de algarismos que não são para contas, como o telefone)",
  r(60, 60, 200, 60, "#fff", rx=10, lw=3, sombra=4) + t(160, 100, "“Maria”", 26, "azul", 900) + etiqueta(160, 160, "letras e nomes", "azul", 12), "azul")
d("numero", "Número: dado usado em contas",
  r(60, 60, 200, 60, "#fff", rx=10, lw=3, sombra=4) + t(160, 100, "12 + 3 = 15", 24, "amarelo", 900) + etiqueta(160, 160, "serve para fazer contas", "amarelo", 12), "amarelo")
d("logico|verdadeiro ou falso", "Lógico: dado que só pode ser verdadeiro ou falso (sim ou não)",
  r(50, 64, 100, 60, "#22c55e", rx=12, lw=3, sombra=4) + t(100, 102, "SIM", 22, "#fff", 900, contorno=K) + r(170, 64, 100, 60, "#ef4444", rx=12, lw=3, sombra=4) + t(220, 102, "NÃO", 22, "#fff", 900, contorno=K)
  + etiqueta(160, 162, "só dois valores", "roxo", 12), "roxo")
d("colecao", "Coleção: muitos dados juntos, organizados (em lista ou em tabela)",
  "".join(r(60 + i * 14, 40 + i * 14, 150, 90, "#fff", rx=8, lw=3, sombra=3) for i in range(3)) + t(178, 120, "muitos dados juntos", 13, K, 800), "amarelo")
d("lista", "Lista: vários dados em ordem, um depois do outro",
  r(80, 26, 160, 150, "#fff", rx=10, lw=3, sombra=4) + "".join(c(102, 52 + i * 30, 10, V["azul"][0], 2.5) + t(102, 57 + i * 30, str(i + 1), 12, "#fff", 900) + f'<path d="M120 {52+i*30} h{90-(i%2)*24}" stroke="{K}" stroke-width="4" stroke-linecap="round"/>' for i in range(4)), "azul")
d("tabela", "Tabela: dados em linhas e colunas",
  r(40, 36, 240, 128, "#fff", rx=8, lw=3, sombra=4) + r(40, 36, 240, 32, V["amarelo"][0], rx=8, lw=3)
  + "".join(f'<path d="M40 {68+i*32} h240" stroke="{K}" stroke-width="2.5"/>' for i in range(1, 3)) + "".join(f'<path d="M{40+i*80} 36 v128" stroke="{K}" stroke-width="2.5"/>' for i in range(1, 3))
  + t(80, 58, "Time", 13, K, 900) + t(160, 58, "Pontos", 13, K, 900) + t(240, 58, "Gols", 13, K, 900), "amarelo")
d("netiqueta", "Netiqueta: as regras de boa educação na internet",
  r(60, 40, 200, 70, "#fff", rx=14, lw=3, sombra=4) + t(160, 82, "Por favor 🙂", 20, "verde", 900) + p("M100 110 l-10 20 l26 -20", "#fff", 3)
  + etiqueta(160, 166, "educação também na rede", "verde", 12), "verde")
d("postar|publicar", "Postar: colocar uma mensagem, foto ou vídeo na internet",
  r(110, 22, 100, 156, "#334155", rx=14, sombra=5) + r(118, 36, 84, 110, "#fff", rx=4, lw=2) + r(126, 46, 68, 50, "#bfdbfe", rx=4, lw=2)
  + r(126, 112, 68, 24, "#3b82f6", rx=6, lw=2) + t(160, 129, "Postar", 12, "#fff", 900, contorno=K), "azul")
d("dados pessoais|dado pessoal", "Dados pessoais: nome completo, endereço, telefone, escola: não passe para desconhecidos",
  r(70, 40, 180, 110, "#fff", rx=10, lw=3, sombra=4) + "".join(t(88, 70 + i * 22, s_, 13, K, 800, "start") for i, s_ in enumerate(["👤 Nome completo", "🏠 Endereço", "📞 Telefone", "🏫 Escola"]))
  + r(212, 118, 44, 40, "#ef4444", rx=8, lw=3, sombra=3) + p("M222 118 v-10 a12 12 0 0 1 24 0 v10", "none", 4), "vermelho")
d("senha", "Senha: a chave secreta da sua conta, que é só sua",
  r(60, 70, 160, 50, "#fff", rx=10, lw=3, sombra=4) + t(140, 103, "••••••••", 22, K, 900) + r(238, 82, 44, 42, "#22c55e", rx=8, lw=3, sombra=3) + p("M248 82 v-10 a12 12 0 0 1 24 0 v10", "none", 4)
  + etiqueta(160, 164, "só sua, como a chave de casa", "verde", 12), "verde")
d("print|captura de tela", "Print: foto da tela, que guarda uma prova do que apareceu",
  monitor(70, 30, 150, 96, "azul", "texto") + r(220, 40, 60, 46, "#fff", rx=6, lw=3, sombra=3) + c(250, 63, 12, "#93c5fd", 3) + t(250, 160, "📸 foto da tela", 13, K, 800))
d("denunciar", "Denunciar: avisar a rede social sobre uma mensagem ruim ou perigosa",
  r(70, 50, 180, 90, "#fff", rx=10, lw=3, sombra=4) + r(100, 92, 120, 34, "#ef4444", rx=8, lw=3) + t(160, 114, "🚩 Denunciar", 14, "#fff", 900, contorno=K)
  + t(160, 78, "mensagem ofensiva", 12, K, 800), "vermelho")
d("adulto de confianca", "Adulto de confiança: a pessoa a quem você conta quando algo dá errado na internet",
  c(110, 74, 24, "#f1c27d", 3) + r(86, 100, 48, 60, "#3b82f6", rx=14, lw=3) + c(196, 92, 18, "#f1c27d", 3) + r(178, 112, 36, 46, "#f59e0b", rx=12, lw=3)
  + r(130, 30, 70, 30, "#fff", rx=10, lw=2.5) + t(165, 50, "conta!", 12, K, 800) + etiqueta(160, 182, "você não está sozinho", "verde", 12), "verde")
d("digitacao", "Digitação: escrever no teclado usando as duas mãos",
  teclado(60, 90, 200) + p("M96 92 q-6 -30 20 -34 q26 4 18 34", "#f1c27d", 3) + p("M196 92 q-6 -30 20 -34 q26 4 18 34", "#f1c27d", 3), "azul")
d("fileira base", "Fileira base: onde os dedos descansam (ASDF e JKLÇ)",
  "".join(tecla(18 + i * 36, 74, ch, 32, "#fde68a" if ch in "FJ" else "#fff") for i, ch in enumerate("ASDFJKLÇ")) + etiqueta(160, 160, "F e J têm um risquinho", "amarelo", 12), "amarelo")
d("abnt2", "ABNT2: o teclado brasileiro, que tem a tecla Ç",
  teclado(50, 60, 220) + c(244, 92, 18, "#facc15", 3) + t(244, 99, "Ç", 18, K, 900) + etiqueta(160, 172, "teclado brasileiro", "azul", 12), "azul")
d("acento agudo", "Acento agudo: aperte ´ e depois a vogal (á, é, í, ó, ú)",
  tecla(50, 66, "´", 56) + t(126, 98, "+", 26, K, 900) + tecla(150, 66, "a", 56) + t(250, 100, "á", 34, "azul", 900), "azul")
d("til", "Til: aperte ~ e depois a vogal (ã, õ)",
  tecla(50, 66, "~", 56) + t(126, 98, "+", 26, K, 900) + tecla(150, 66, "a", 56) + t(250, 100, "ã", 34, "azul", 900), "azul")
d("acento circunflexo|circunflexo", "Acento circunflexo: Shift + a tecla do til, depois a vogal (â, ê, ô)",
  tecla(26, 66, "⇧", 46) + t(84, 98, "+", 22, K, 900) + tecla(100, 66, "^", 46) + t(158, 98, "+", 22, K, 900) + tecla(174, 66, "e", 46) + t(262, 100, "ê", 34, "azul", 900), "azul")
d("cedilha", "Cedilha: a tecla Ç, ao lado do L", tecla(100, 66, "L", 56) + tecla(164, 66, "Ç", 56, "#fde68a") + t(160, 160, "maçã, coração", 16, K, 800), "amarelo")
d("pontuacao", "Pontuação: ponto, vírgula, interrogação e outros sinais",
  "".join(tecla(30 + i * 66, 66, ch, 56) for i, ch in enumerate([".", ",", "?", "!"])) + etiqueta(160, 160, "sinais que organizam a frase", "azul", 12), "azul")
d("ctrl|tecla ctrl", "Ctrl (Control): a tecla que, segurada com outra, faz um atalho", tecla(110, 66, "Ctrl", 100, "#fde68a") + etiqueta(160, 160, "segure junto com outra tecla", "amarelo", 12), "amarelo")
d("atalho", "Atalho: teclas apertadas juntas para fazer algo rápido",
  tecla(60, 66, "Ctrl", 80) + t(160, 98, "+", 28, K, 900) + tecla(190, 66, "C", 60, "#fde68a") + etiqueta(160, 160, "jeito rápido, sem menu", "amarelo", 12), "amarelo")
d("selecionar", "Selecionar: marcar o que você quer usar (fica pintado de azul)",
  r(40, 70, 240, 50, "#fff", rx=8, lw=3, sombra=4) + r(98, 80, 120, 30, "#93c5fd", rx=3, lw=0) + t(160, 102, "texto marcado", 16, K, 800) + seta_mouse(214, 100, 0.8), "azul")
d("copiar", "Copiar (Ctrl + C): faz uma cópia do que está selecionado",
  arquivo_(60, 50, "TXT", "azul", 56) + seta_dir(128, 96, 180, "azul") + arquivo_(196, 50, "TXT", "azul", 56) + t(160, 172, "Ctrl + C", 18, K, 900, fonte="monospace"), "azul")
d("recortar", "Recortar (Ctrl + X): tira de um lugar para colar em outro",
  t(160, 100, "✂️", 60) + t(160, 160, "Ctrl + X", 18, K, 900, fonte="monospace"), "rosa")
d("colar", "Colar (Ctrl + V): põe no lugar o que você copiou",
  r(110, 40, 100, 110, "#fde68a", rx=8, lw=3, sombra=4) + r(130, 30, 60, 22, "#94a3b8", rx=6, lw=3) + t(160, 106, "📋", 34) + t(160, 180, "Ctrl + V", 18, K, 900, fonte="monospace"), "amarelo")
d("desfazer", "Desfazer (Ctrl + Z): volta o último passo",
  p("M200 120 a50 50 0 1 0 -80 -40", "none", 8) + p("M108 64 l12 22 l14 -22 z", "#1c1f22", 2) + t(160, 172, "Ctrl + Z: “ops, volta!”", 15, K, 900), "roxo")
d("area de transferencia", "Área de transferência: o lugar escondido onde fica guardado o que você copiou",
  r(100, 50, 120, 90, "#fff", rx=10, lw=3, sombra=4) + r(120, 40, 80, 24, "#94a3b8", rx=6, lw=3) + t(160, 106, "copiei!", 16, K, 800)
  + etiqueta(160, 172, "guarda o que você copiou", "roxo", 12), "roxo")
d("zoom", "Zoom: aumentar ou diminuir o tamanho do que aparece na tela",
  c(140, 90, 40, "#cffafe", 5) + p("M170 120 l40 40", "none", 9) + t(140, 104, "A", 38, K, 900) + t(160, 186, "Ctrl + rodinha", 14, K, 800), "ciano")

# ---------------- 7º, 8º e 9º ano · 1º bimestre de 2027 (modelo em espiral, 21/11/2026) ----------------
from termos_2027_1bim import registrar as _reg2027  # noqa: E402
_reg2027(d, D, k)
from termos_2027_2bim import registrar as _reg2027b  # noqa: E402
_reg2027b(d, D, k)
from termos_2027_3bim import registrar as _reg2027c  # noqa: E402
_reg2027c(d, D, k)
from termos_2027_4bim import registrar as _reg2027d  # noqa: E402
_reg2027d(d, D, k)

# ---------------- 📷 fotos reais no lugar do desenho (26/11/2026, pedido do professor) ----------------
# "Data center" aparecia como três retângulos; onde a coisa existe de verdade e o aluno nunca viu, vale a foto real.
# Só fotos que já estão no portal, com licença livre e crédito (as mesmas das apostilas de 2027 e das curiosidades).
foto("data center|datacenter|centro de dados", "data-center", "Foto real: o corredor de um data center, com racks (armários) cheios de servidores dos dois lados.", "Foto: PiDatacenters · Wikimedia Commons · licença CC BY-SA 4.0 (foto recortada)")
foto("servidor|servidores", "data-center", "Foto real: num data center, cada armário (rack) está cheio de servidores, computadores ligados o dia inteiro.", "Foto: PiDatacenters · Wikimedia Commons · licença CC BY-SA 4.0 (foto recortada)")
foto("hd|disco rigido", "hd-aberto", "Foto real: um HD aberto, com o disco prateado (prato) que gira e o braço que lê e grava por cima dele.", "Foto: Zzubnik · Wikimedia Commons · domínio público")
foto("gabinete", "gabinete-aberto", "Foto real: um gabinete aberto, com a placa-mãe e as peças do computador lá dentro.", "Foto: BGN-WMCO · Wikimedia Commons · licença CC BY 3.0 (foto recortada)")
foto("linha braille", "linha-braille", "Foto real: uma linha braille, aparelho com uma fileira de pininhos que sobem e formam as letras em braille.", "Foto: Eddau · Wikimedia Commons · domínio público (CC0) (marca borrada)")
foto("refrigeracao", "data-center", "Foto real: o corredor de um data center; as grades no piso deixam passar o ar frio que impede os servidores de esquentar demais.", "Foto: PiDatacenters · Wikimedia Commons · licença CC BY-SA 4.0 (foto recortada)")
foto("urna eletronica", "curiosidades/urna", "Foto real: uma urna eletrônica brasileira (modelo 2020): o eleitor digita o número e aperta CONFIRMA.", "Foto: TSE · Wikimedia Commons · domínio público")

if __name__ == "__main__":
    raiz = os.path.dirname(os.path.dirname(AQUI))
    js = ("/* 🖼️ Imagens das palavras difíceis — gerado por ferramentas/ilustracoes_2026/termos.py (não edite à mão).\n"
          "   Desenhos em linha clara feitos pelo Claude + fotos reais com crédito. Professor Welington Laignier. */\n"
          f"window.TERMOS_IMG = {json.dumps(D, ensure_ascii=False)};\n")
    open(os.path.join(raiz, "dados", "termos-imagens.js"), "w", encoding="utf-8").write(js)
    print(len(D), "termos com imagem;", len(js) // 1024, "KB")
    print("já tinham figurinha (mantidas):", ", ".join(_reg2027.pulados + _reg2027b.pulados + _reg2027c.pulados + _reg2027d.pulados))

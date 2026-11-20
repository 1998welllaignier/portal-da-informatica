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

if __name__ == "__main__":
    raiz = os.path.dirname(os.path.dirname(AQUI))
    js = ("/* 🖼️ Imagens das palavras difíceis — gerado por ferramentas/ilustracoes_2026/termos.py (não edite à mão).\n"
          "   Desenhos em linha clara feitos pelo Claude + fotos reais com crédito. Professor Welington Laignier. */\n"
          f"window.TERMOS_IMG = {json.dumps(D, ensure_ascii=False)};\n")
    open(os.path.join(raiz, "dados", "termos-imagens.js"), "w", encoding="utf-8").write(js)
    print(len(D), "termos com imagem;", len(js) // 1024, "KB")

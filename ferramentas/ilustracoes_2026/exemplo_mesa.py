"""🖥️ Exemplo do estilo aprovado (23/11/2026): mesa com computador, gabinete e impressora em LINHA CLARA
(contorno preto grosso, cores chapadas, SOMBRA SÓLIDA DESLOCADA). Feito para a Produção 2.0 conferir o estilo.
uso: python3 exemplo_mesa.py saida.svg"""
import os, sys
AQUI = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, AQUI)
from linha_clara import *  # noqa
from linha_clara import V, K, t, r, c, p

W, H = 900, 600
s = ""
# fundo: parede, janela com céu e piso
s += f'<rect width="{W}" height="{H}" fill="#fef9ef"/>'
s += r(60, 60, 210, 140, "#bae6fd", rx=10, lw=4, sombra=6)
s += c(225, 98, 20, "#fde047", 3) + p("M95 152 q20 -26 44 -6 q16 -20 38 -2 q22 0 18 20 h-102 z", "#fff", 3)
s += p("M165 60 V200 M60 130 H270", "none", 4)
s += f'<rect y="470" width="{W}" height="{H-470}" fill="#fcd9a5"/>' + p(f"M0 470 H{W}", "none", 4)
for x in range(0, W + 100, 120): s += p(f"M{x} 470 l-40 130", "none", 2)
# mesa vista um pouco de cima: tampo (com veios), borda da frente e pernas
s += r(150, 410, 26, 140, "#9a5a2b", rx=4, lw=4, sombra=5) + r(704, 410, 26, 140, "#9a5a2b", rx=4, lw=4, sombra=5)
s += p("M150 280 H730 L780 380 H100 Z", "#d08a4c", 4)                     # tampo
s += p("M200 300 q120 -6 240 0 M470 330 q120 -6 240 0 M160 360 q90 -5 180 0", "none", 2)
s += r(100, 380, 680, 30, "#b36a32", rx=6, lw=4, sombra=7)                # borda da frente
# computador: monitor com uma pasta na tela (base apoiada no fundo da mesa), teclado e mouse na frente
s += monitor(290, 110, w=240, h=160, tela="azul", conteudo="pasta")
s += teclado(320, 306, w=180)
s += mouse(540, 314, esc_=0.85, cor="azul")
# impressora no canto da mesa, com uma folha saindo
s += r(612, 214, 82, 40, "#fff", rx=3, lw=3)
s += r(590, 238, 128, 58, "#22c55e", rx=10, lw=4, sombra=5)
s += r(604, 252, 30, 10, "#dcfce7", rx=4, lw=2.5) + c(700, 257, 6, "#fde047", 2.5)
s += r(612, 286, 84, 40, "#fff", rx=3, lw=3) + p("M624 298 h56 M624 307 h40 M624 316 h48", "none", 2.5)
# gabinete no chão, ao lado da mesa (o processador aparece pela janela), com o cabo subindo para a mesa
s += p("M834 390 C 830 340 790 300 730 300", "none", 3)
s += gabinete(790, 390, w=86, h=150)
# etiquetas que ensinam (cores: azul = entrada, amarelo = processa, verde = saída)
s += etiqueta(410, 96, "Monitor (saída)", "verde", 15)
s += etiqueta(330, 442, "Teclado (entrada)", "azul", 15)
s += etiqueta(560, 442, "Mouse (entrada)", "azul", 15)
s += etiqueta(655, 198, "Impressora (saída)", "verde", 15)
s += etiqueta(790, 568, "Gabinete (processa)", "amarelo", 15)
# título
s += r(330, 14, 240, 40, "#f59e0b", rx=12, lw=3.5, sombra=4) + t(450, 41, "Minha mesa de trabalho", 19, "#fff", 900, contorno=K)

svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Mesa com monitor, teclado, mouse, impressora e gabinete">{s}</svg>'
open(sys.argv[1] if len(sys.argv) > 1 else "mesa.svg", "w", encoding="utf-8").write(svg)

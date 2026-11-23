"""Divide painel.png em folhas A4 (em pé) com marcas de corte, faixa de cola, código e mapa de montagem.
uso: python3 folhas.py → Painel-Consciencia-Negra-Brasil-54-folhas-A4.pdf"""
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import io
Image.MAX_IMAGE_PIXELS = None
pdfmetrics.registerFont(TTFont("Baloo", "fontes/Baloo2.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuB", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

PW, PH = 210, 297            # folha A4 em pé (mm)
M = 4                        # margem que a impressora não imprime (mm)
OV = 6                       # sobreposição (faixa de cola) entre folhas vizinhas (mm)
CW, CH = PW - 2 * M, PH - 2 * M      # área impressa de cada folha: 202 × 289 mm
SX, SY = CW - OV, CH - OV            # passo entre folhas: 196 × 283 mm
COLS, ROWS = 9, 6
W_MM, H_MM = (COLS - 1) * SX + CW, (ROWS - 1) * SY + CH   # 1770 × 1704 mm
LETRAS = "ABCDEFGHI"
src = Image.open("painel.png"); K = src.size[0] / W_MM
assert abs(src.size[1] / H_MM - K) < .01, (src.size, W_MM, H_MM)
cod = lambda c, r: f"{LETRAS[c]}{r + 1}"

pdf = canvas.Canvas("Painel-Consciencia-Negra-Brasil-54-folhas-A4.pdf", pagesize=(PW * mm, PH * mm))
pdf.setTitle("Painel Dia da Consciência Negra — 54 folhas A4"); pdf.setAuthor("Prof. Welington Laignier")
ESC = "Escola Municipal de Ensino Fundamental Juscelino Kubitschek · Curionópolis (PA)"
MARROM = (0.24, 0.13, 0.06)

def img_reader(im, q=90):
    b = io.BytesIO(); im.convert("RGB").save(b, "JPEG", quality=q); b.seek(0); return ImageReader(b)

# ---------- página 1: o painel inteiro ----------
pdf.setFillColorRGB(*MARROM); pdf.setFont("Baloo", 22)
pdf.drawCentredString(PW / 2 * mm, 278 * mm, "Painel · Dia da Consciência Negra")
pdf.setFont("DejaVu", 9.5)
pdf.drawCentredString(PW / 2 * mm, 270 * mm, f"Tamanho montado: {W_MM / 10:.0f} cm de largura × {H_MM / 10:.0f} cm de altura · {COLS * ROWS} folhas A4 em pé ({COLS} colunas × {ROWS} fileiras)")
pv = src.resize((1400, round(1400 * H_MM / W_MM)), Image.LANCZOS)
lw = 180; lh = lw * H_MM / W_MM; x0 = (PW - lw) / 2; y0 = 262 - lh
pdf.drawImage(img_reader(pv), x0 * mm, y0 * mm, lw * mm, lh * mm)
pdf.setFont("DejaVu", 8.5)
linhas = ["Imprima todas as folhas em tamanho real (100%, sem “ajustar à página”), em A4, colorido.",
          "Dica: imprima primeiro só a folha A1 para conferir as cores e o tamanho.",
          "Ilustrações: criadas com inteligência artificial (ChatGPT). Títulos, estampas e montagem: Prof. Welington Laignier.", ESC]
for i, t in enumerate(linhas): pdf.drawCentredString(PW / 2 * mm, (y0 - 9 - i * 5.2) * mm, t)
pdf.showPage()

# ---------- página 2: mapa e passo a passo ----------
pdf.setFillColorRGB(*MARROM); pdf.setFont("Baloo", 20); pdf.drawCentredString(PW / 2 * mm, 280 * mm, "Mapa da montagem")
mw = 186; mh = mw * H_MM / W_MM; mx = (PW - mw) / 2; my = 272 - mh
pdf.drawImage(img_reader(pv), mx * mm, my * mm, mw * mm, mh * mm)
s = mw / W_MM
pdf.setStrokeColorRGB(1, 1, 1); pdf.setLineWidth(1.4)
for c in range(COLS):
    for r in range(ROWS):
        x = mx + c * SX * s; y = my + mh - (r * SY + CH) * s
        pdf.rect(x * mm, y * mm, CW * s * mm, CH * s * mm, stroke=1, fill=0)
for c in range(COLS):
    for r in range(ROWS):
        x = mx + (c * SX + CW / 2) * s; y = my + mh - (r * SY + CH / 2) * s
        pdf.setFillAlpha(1); pdf.setFillColorRGB(1, 1, 1); pdf.roundRect((x - 5) * mm, (y - 3.2) * mm, 10 * mm, 6.4 * mm, 1.5 * mm, stroke=0, fill=1)
        pdf.setFillColorRGB(*MARROM); pdf.setFont("DejaVuB", 9); pdf.drawCentredString(x * mm, (y - 1.6) * mm, cod(c, r))
pdf.setFont("DejaVuB", 8)
for c in range(COLS): pdf.drawCentredString((mx + (c * SX + CW / 2) * s) * mm, (my + mh + 1.5) * mm, LETRAS[c])
for r in range(ROWS): pdf.drawCentredString((mx - 3) * mm, (my + mh - (r * SY + CH / 2) * s - 1) * mm, str(r + 1))
passos = [
    ("1. Imprimir", "Todas as folhas em A4, colorido, tamanho real (100%). Cada folha tem o seu código (A1, B1…): a letra é a coluna, o número é a fileira."),
    ("2. Recortar", "Corte na linha pontilhada ✂ (só nos lados que têm a tesourinha). Os lados sem tesourinha ficam inteiros: é por cima deles que a folha vizinha será colada."),
    ("3. Montar cada fileira", "Comece pela fileira 1, da esquerda para a direita: A1, B1, C1… Passe cola na faixa “COLE AQUI” da folha da esquerda e coloque a folha seguinte por cima, encostando a borda recortada na linha tracejada."),
    ("4. Conferir o desenho", "Antes de a cola secar, confira se o desenho continua certinho de uma folha para a outra (as pessoas, o título e as estampas precisam se encaixar)."),
    ("5. Juntar as fileiras", "Com as 6 fileiras prontas, junte de cima para baixo: a fileira 2 vai por cima da faixa de cola da fileira 1, e assim por diante."),
    ("6. Fixar", "Cole na parede ou no papel pardo pelo verso, de cima para baixo. Montado: cerca de %d cm × %d cm." % (W_MM / 10, H_MM / 10)),
]
pdf.setFillAlpha(1); y = my - 9
for tit, txt in passos:
    pdf.setFont("Baloo", 11.5); pdf.setFillColorRGB(0.78, 0.15, 0.12); pdf.drawString(14 * mm, y * mm, tit)
    pdf.setFont("DejaVu", 8.6); pdf.setFillColorRGB(*MARROM)
    palavras, lin, yy = txt.split(), "", y - 4.6
    for p in palavras:
        if pdfmetrics.stringWidth(lin + " " + p, "DejaVu", 8.6) > 180 * mm / 1.0 * 0.995 and lin:
            pdf.drawString(16 * mm, yy * mm, lin); yy -= 4.1; lin = p
        else: lin = (lin + " " + p).strip()
    pdf.drawString(16 * mm, yy * mm, lin); y = yy - 6.2
pdf.showPage()

# ---------- folhas ----------
def tesoura(x, y, rot):
    pdf.saveState(); pdf.translate(x * mm, y * mm); pdf.rotate(rot); pdf.setFillColorRGB(.2, .2, .2); pdf.setFont("DejaVu", 9); pdf.drawCentredString(0, -1.2 * mm, "✂"); pdf.restoreState()
for r in range(ROWS):
    for c in range(COLS):
        x_mm, y_mm = c * SX, r * SY
        tile = src.crop((round(x_mm * K), round(y_mm * K), round((x_mm + CW) * K), round((y_mm + CH) * K)))
        pdf.drawImage(img_reader(tile, 92), M * mm, M * mm, CW * mm, CH * mm)
        L, B, R, T = M, M, M + CW, M + CH   # contorno da área impressa (em mm, origem embaixo à esquerda)
        dir_cola = c < COLS - 1; baixo_cola = r < ROWS - 1
        # faixas de cola (ficam escondidas debaixo da folha vizinha)
        pdf.setFillColorRGB(.55, .55, .55, alpha=.35)
        if dir_cola: pdf.rect((R - OV) * mm, (B if not baixo_cola else B + OV) * mm, OV * mm, (CH - (OV if baixo_cola else 0)) * mm, stroke=0, fill=1)
        if baixo_cola: pdf.rect(L * mm, B * mm, CW * mm, OV * mm, stroke=0, fill=1)
        pdf.setFillColorRGB(.15, .15, .15, alpha=.9); pdf.setFont("DejaVuB", 5.2)
        if dir_cola:
            pdf.saveState(); pdf.translate((R - OV / 2 + .9) * mm, (B + CH / 2) * mm); pdf.rotate(90)
            for dy in (-90, 0, 90): pdf.drawCentredString(dy * mm, 0, f"COLE AQUI · a folha {cod(c + 1, r)} vai por cima")
            pdf.restoreState()
        if baixo_cola:
            for dx in (-60, 60): pdf.drawCentredString((L + CW / 2 + dx) * mm, (B + OV / 2 - .9) * mm, f"COLE AQUI · a folha {cod(c, r + 1)} vai por cima")
        # linha onde encosta a borda da folha vizinha
        pdf.setStrokeColorRGB(.1, .1, .1); pdf.setLineWidth(.4); pdf.setDash(2, 1.5)
        if dir_cola: pdf.line((R - OV) * mm, B * mm, (R - OV) * mm, T * mm)
        if baixo_cola: pdf.line(L * mm, (B + OV) * mm, R * mm, (B + OV) * mm)
        # linhas de corte (tesourinha): esquerda e topo sempre; direita na última coluna; embaixo na última fileira
        pdf.setLineWidth(.6); pdf.setDash(3, 2); pdf.setStrokeColorRGB(0, 0, 0)
        cortes = [("e", L, B, L, T), ("t", L, T, R, T)]
        if not dir_cola: cortes.append(("d", R, B, R, T))
        if not baixo_cola: cortes.append(("b", L, B, R, B))
        for lado, x1, y1, x2, y2 in cortes:
            pdf.line(x1 * mm, y1 * mm, x2 * mm, y2 * mm)
            if lado in "ed": tesoura(x1, (y1 + y2) / 2, 90)
            else: tesoura((x1 + x2) / 2, y1, 0)
        pdf.setDash()
        # código da folha: pequeno, na margem (some quando recorta) e na faixa de cola
        pdf.setFillColorRGB(.15, .15, .15, alpha=1); pdf.setFont("DejaVuB", 6.5)
        pdf.drawString(1.2 * mm, (PH - 3) * mm, f"{cod(c, r)}  ·  coluna {LETRAS[c]}, fileira {r + 1}  ·  folha {r * COLS + c + 1} de {COLS * ROWS}")
        vz = []
        if c > 0: vz.append(f"← {cod(c - 1, r)}")
        if c < COLS - 1: vz.append(f"{cod(c + 1, r)} →")
        if r > 0: vz.append(f"↑ {cod(c, r - 1)}")
        if r < ROWS - 1: vz.append(f"↓ {cod(c, r + 1)}")
        pdf.drawRightString((PW - 1.2) * mm, (PH - 3) * mm, "vizinhas: " + "  ".join(vz))
        if dir_cola or baixo_cola:
            pdf.setFillColorRGB(1, 1, 1); bx, by = (R - OV - 9, B + .6) if baixo_cola else (R - OV + .3, B + 2)
            pdf.setFont("DejaVuB", 7)
            if baixo_cola: pdf.roundRect((R - 15) * mm, (B + .5) * mm, 12 * mm, 4.8 * mm, 1 * mm, stroke=0, fill=1); pdf.setFillColorRGB(0, 0, 0); pdf.drawCentredString((R - 9) * mm, (B + 1.8) * mm, cod(c, r))
        pdf.showPage()
pdf.save()
print("ok", COLS * ROWS + 2, "páginas ·", W_MM, "×", H_MM, "mm")

"""Simulação: a Bia no nível atual x a Bia 'requintada' (nível 2), com o que muda em cada detalhe."""
import sys
from biblioteca import *

T = TINTA
def L(fill, w=3.0):   # contorno de fora (mais grosso)
    return f'fill="{fill}" stroke="{T}" stroke-width="{w}" stroke-linejoin="round" stroke-linecap="round"'
def li(w=1.6, cor=T, op=1):  # linha de dentro (mais fina)
    return f'fill="none" stroke="{cor}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round" opacity="{op}"'

def bia2():
    p = TURMA["bia"]
    pele, pele_s = p["pele"], escurecer(p["pele"], .82)
    cab, cab_l = p["cabelo"], "#5a3a2a"
    cam, cam_s = p["camisa"], escurecer(p["camisa"], .84)
    jeans, jeans_s = "#3a5bd9", escurecer("#3a5bd9", .8)
    o = [sombra_chao(4, 0, 46, 8)]
    # ---- coque com mechas e prendedor ----
    o.append(f'<path d="M-16 -236 q-6 -26 16 -30 q24 -2 22 24 q-2 12 -14 14 Z" {L(cab)}/>')
    o.append(f'<path d="M-8 -256 q8 -6 18 2 M-10 -246 q12 -6 24 2" {li(1.4, cab_l)}/>')
    o.append(f'<path d="M-14 -232 q14 8 30 0 l2 8 q-17 8 -34 0 Z" {L("#ffd34d", 2.4)}/>')
    # ---- pernas (jeans) com leve contrapposto ----
    o.append(f'<path d="M-24 -84 L-26 -12 H-6 L-4 -80 Z" {L(jeans)}/>')
    o.append(f'<path d="M4 -80 Q10 -46 16 -12 H34 Q30 -48 26 -84 Z" {L(jeans)}/>')
    o.append(f'<path d="M-16 -70 L-17 -16 M14 -66 Q20 -40 25 -16" {li(1.3, "#9fb4ff")}/>')       # costura
    o.append(f'<path d="M-25 -22 H-6 M16 -22 H33" {li(1.6)}/>')                                     # barra dobrada
    o.append(f'<path d="M-14 -52 q4 3 8 0 M18 -48 q4 3 8 -1" {li(1.3, jeans_s)}/>')                # dobra do joelho
    # ---- tênis com solado e cadarço ----
    for dx, esp in ((-16, -1), (25, 1)):
        o.append(f'<path d="M{dx - 14} -14 q2 -8 12 -8 h6 q{10 + esp*3} 0 {14 + esp*3} 12 v2 h-{32 + esp*3} Z" {L("#ffffff")}/>')
        o.append(f'<path d="M{dx - 15} -4 h{34 + esp*3}" stroke="{p["camisa"]}" stroke-width="4"/>')
        o.append(f'<path d="M{dx - 4} -18 l6 4 M{dx} -19 l6 4" {li(1.4)}/>')
    # ---- cinto ----
    o.append(f'<path d="M-30 -96 L-28 -80 H30 L32 -96 Z" {L(jeans)}/><rect x="-32" y="-96" width="64" height="7" rx="2" {L("#6b4a2b", 2)}/><rect x="-5" y="-97" width="10" height="9" rx="2" {L("#ffd34d", 1.6)}/>')
    # ---- braço esquerdo (de quem olha), pele com cotovelo e mão com polegar ----
    o.append(f'<path d="M-34 -150 q-12 22 -12 46 q0 14 4 22 l12 -2 q-4 -10 -2 -20 q2 -18 10 -36 Z" {L(pele)}/>')
    o.append(f'<path d="M-46 -84 q-4 10 4 14 q10 2 12 -6 q0 -8 -6 -10 Z" {L(pele, 2.4)}/><path d="M-32 -78 q4 -2 4 -8" {li(1.4)}/>')
    # ---- braço direito acenando ----
    o.append(f'<path d="M34 -150 q16 -6 24 -30 q4 -14 2 -26 l-12 -2 q0 12 -4 22 q-6 14 -16 18 Z" {L(pele)}/>')
    o.append(f'<path d="M48 -206 q-2 -14 8 -16 q2 -8 9 -6 q6 -6 10 2 q8 0 4 12 q-2 10 -14 12 q-12 2 -17 -4 Z" {L(pele, 2.4)}/>')
    o.append(f'<path d="M57 -220 v8 M64 -222 v9 M71 -218 v8" {li(1.3, escurecer(pele,.6))}/>')
    o.append(f'<path d="M66 -232 q8 -4 12 2 M70 -240 q10 -4 14 4" {li(1.6, COR["amarelo"])}/>')  # risquinhos de movimento
    # ---- camiseta com manga, gola canelada, dobras, sombra e estampa ----
    o.append(f'<path d="M-30 -158 q30 -12 60 0 l14 18 l-10 10 l-6 -6 L32 -92 q-32 6 -64 0 L-30 -136 l-6 6 l-10 -10 Z" {L(cam)}/>')
    o.append(f'<path d="M14 -154 q14 2 16 4 l6 8 l-6 2 L32 -94 q-8 2 -14 2 Q22 -120 14 -154 Z" fill="{cam_s}"/>')   # sombra lateral
    o.append(f'<path d="M-36 -130 l6 -6 M36 -130 l-6 -6" {li(1.6)}/>')                                   # barra da manga
    o.append(f'<path d="M-12 -160 q12 10 24 0" {L("#ffffff", 2.2)}/><path d="M-10 -158 q10 7 20 0" {li(1.2, "#c9c9c9")}/>')
    o.append(f'<path d="M-18 -104 q8 4 14 0 M8 -110 q6 4 12 1" {li(1.4, cam_s)}/>')                      # dobras do tecido
    # estampa: cursor do mouse dentro de um balão (tema informática)
    o.append(f'<circle cx="-4" cy="-128" r="12" {L("#ffffff", 2)}/><path d="M-8 -136 v15 l4 -4 l3 6 l3 -1 l-3 -6 h6 Z" {L(T, 1)}/>')
    # ---- pescoço com sombra embaixo do queixo ----
    o.append(f'<path d="M-9 -170 L-8 -154 q8 4 16 0 L9 -170 Z" {L(pele)}/><path d="M-8 -166 q8 6 16 0 L9 -170 H-9 Z" fill="{pele_s}"/>')
    # ---- orelhas com detalhe ----
    for lado in (-1, 1):
        o.append(f'<ellipse cx="{lado*37}" cy="-196" rx="6" ry="9" {L(pele, 2.4)}/><path d="M{lado*38} -200 q{lado*3} 4 0 8" {li(1.3, pele_s)}/>')
    # ---- rosto: queixo mais fino, sombra lateral ----
    o.append(f'<path d="M-36 -204 q0 -38 36 -38 q36 0 36 38 q0 24 -14 34 q-10 8 -22 8 q-12 0 -22 -8 q-14 -10 -14 -34 Z" {L(pele)}/>')
    o.append(f'<path d="M22 -228 q14 10 14 24 q0 24 -14 34 q-8 6 -16 7 q16 -14 18 -32 q2 -18 -2 -33 Z" fill="{pele_s}" opacity=".7"/>')
    # ---- cabelo: franja com mechas, brilho e fios soltos ----
    o.append(f'<path d="M-38 -200 q-2 -46 38 -46 q40 0 38 46 q-6 -14 -14 -20 q-10 10 -26 8 q-8 8 -22 6 q-10 2 -14 6 Z" {L(cab)}/>')
    o.append(f'<path d="M-22 -232 q10 -6 22 -6 M-28 -222 q6 -8 14 -10 M12 -236 q10 2 16 10" {li(1.4, cab_l)}/>')
    o.append(f'<path d="M-14 -238 q12 -6 26 -2 q-12 1 -24 6 Z" fill="#8a6650" opacity=".8"/>')              # brilho
    o.append(f'<path d="M-36 -206 q-6 4 -4 12 M36 -206 q6 4 4 12" {li(1.4, cab)}/>')                       # fios soltos
    # ---- olhos: cílios, íris colorida, dois brilhos ----
    for lado in (-1, 1):
        x = lado * 14
        o.append(f'<path d="M{x - 8} -198 q8 -10 16 0 q-8 9 -16 0 Z" fill="#fff" stroke="{T}" stroke-width="1.4"/>')
        o.append(f'<circle cx="{x}" cy="-197" r="5.2" fill="#6b3d1f"/><circle cx="{x}" cy="-197" r="2.6" fill="{T}"/>')
        o.append(f'<circle cx="{x - 1.8}" cy="-199" r="1.6" fill="#fff"/><circle cx="{x + 1.8}" cy="-195" r=".8" fill="#fff"/>')
        o.append(f'<path d="M{x - 9} -198 q9 -12 18 0" stroke="{T}" stroke-width="3" fill="none" stroke-linecap="round"/>')  # pálpebra/cílios
        o.append(f'<path d="M{x + lado*8} -199 l{lado*4} -3" stroke="{T}" stroke-width="2" stroke-linecap="round"/>')
        o.append(f'<path d="M{x - 8} -212 q8 -5 16 -1" stroke="{cab}" stroke-width="3.2" fill="none" stroke-linecap="round"/>')  # sobrancelha
    # ---- nariz, bochechas, boca aberta com dentes e língua ----
    o.append(f'<path d="M1 -192 q4 6 -1 9" {li(1.8, pele_s)}/>')
    o.append(f'<ellipse cx="-22" cy="-184" rx="7" ry="4" fill="{COR["rosa"]}" opacity=".5"/><ellipse cx="22" cy="-184" rx="7" ry="4" fill="{COR["rosa"]}" opacity=".5"/>')
    o.append(f'<path d="M-11 -178 q11 2 22 0 q-2 14 -11 14 q-9 0 -11 -14 Z" {L("#7a2a2a", 2)}/>')
    o.append(f'<path d="M-9 -177 q9 2 18 0 v3 q-9 2 -18 0 Z" fill="#fff"/><path d="M-5 -168 q5 -4 10 0 q-5 4 -10 0 Z" fill="#ff8f8f"/>')
    return "".join(o)

def chamada(x1, y1, x2, y2, n, txt, cor="azul"):
    return (f'<path d="M{x1} {y1} L{x2} {y2}" stroke="{COR[cor]}" stroke-width="2" marker-end="url(#seta-{cor})"/>'
            f'<circle cx="{x1}" cy="{y1}" r="12" fill="{COR[cor]}"/><text x="{x1}" y="{y1 + 4.5}" font-size="12.5" font-weight="800" text-anchor="middle" fill="#fff">{n}</text>'
            f'<text x="{x1 + (16 if x1 > x2 else -16)}" y="{y1 + 4.5}" font-size="13" fill="{T}" text-anchor="{"start" if x1 > x2 else "end"}">{txt}</text>')

def pagina():
    W, H = 1400, 640
    o = [f'<rect width="{W}" height="{H}" fill="#fffaf2"/>']
    o.append(f'<text x="{W/2}" y="38" font-size="24" font-weight="800" text-anchor="middle" fill="{T}">Simulação: a mesma Bia, do nível atual ao nível "requintado"</text>')
    o.append(f'<rect x="20" y="60" width="300" height="560" rx="16" fill="#fff" stroke="#d7dbe2" stroke-width="2"/><text x="170" y="92" font-size="18" font-weight="800" text-anchor="middle" fill="{T}">NÍVEL ATUAL</text>')
    o.append(aluno("bia", 170, 560, 1.55, bracos=("normal", "acima")))
    o.append(f'<rect x="340" y="60" width="1040" height="560" rx="16" fill="#fff" stroke="{COR["verde"]}" stroke-width="3"/><text x="860" y="92" font-size="18" font-weight="800" text-anchor="middle" fill="{COR["verde"]}">NÍVEL 2 — REQUINTADO</text>')
    o.append(g(860, 575, 1.75, bia2()))
    # chamadas (esquerda e direita da Bia 2)
    o.append(chamada(690, 150, 810, 172, 1, "Cabelo com mechas, brilho e fios soltos"))
    o.append(chamada(690, 205, 820, 228, 2, "Olhos com cílios, íris colorida e 2 brilhos"))
    o.append(chamada(690, 265, 854, 268, 3, "Boca com dentes e língua; nariz desenhado"))
    o.append(chamada(690, 325, 836, 296, 4, "Pescoço com sombra embaixo do queixo"))
    o.append(chamada(690, 395, 828, 360, 5, "Estampa ligada ao tema (cursor)"))
    o.append(chamada(690, 470, 828, 442, 6, "Cinto, costura do jeans e barra dobrada"))
    o.append(chamada(690, 560, 810, 556, 7, "Tênis com solado e cadarço"))
    o.append(chamada(1030, 150, 975, 176, 8, "Mão com dedos e polegar (acenando)", "verde"))
    o.append(chamada(1030, 230, 928, 262, 9, "Sombra de um lado (luz vindo da esquerda)", "verde"))
    o.append(chamada(1030, 320, 920, 340, 10, "Manga, gola e dobras no tecido", "verde"))
    o.append(chamada(1030, 420, 908, 470, 11, "Pose natural: peso numa perna", "verde"))
    o.append(chamada(1030, 520, 920, 500, 12, "Contorno grosso fora, fino dentro", "verde"))
    return cena_svg(W, H, "".join(o), marcadores())

open(sys.argv[1] if len(sys.argv) > 1 else "sim.html", "w").write(f'<!doctype html><meta charset=utf-8><body style="margin:0"><div style="width:1400px">{pagina()}</div>')

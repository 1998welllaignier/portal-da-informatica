"""Bia no NÍVEL 2 (requintado), montada em peças articuladas para animar.

bia_n2(ombro, cotovelo, mao, olhos, inclina, boca) devolve o SVG em coordenadas locais (pés em 0,0):
  ombro, cotovelo, mao = ângulos (graus) do braço direito de quem olha; negativo levanta
  olhos = "abertos" | "fechados";  inclina = inclinação da cabeça (graus);  boca = "sorriso" | "fala"
"""
from biblioteca import TURMA, COR, TINTA as T, escurecer, sombra_chao

def L(fill, w=3.0):
    return f'fill="{fill}" stroke="{T}" stroke-width="{w}" stroke-linejoin="round" stroke-linecap="round"'
def li(w=1.6, cor=T, op=1):
    return f'fill="none" stroke="{cor}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round" opacity="{op}"'

P = TURMA["bia"]
PELE, PELE_S = P["pele"], escurecer(P["pele"], .82)
CAB, CAB_L = P["cabelo"], "#5a3a2a"
CAM, CAM_S = P["camisa"], escurecer(P["camisa"], .84)
JEANS, JEANS_S = "#3a5bd9", escurecer("#3a5bd9", .8)



def _pernas():
    o = []
    o.append(f'<path d="M-24 -84 L-26 -12 H-6 L-4 -80 Z" {L(JEANS)}/>')
    o.append(f'<path d="M4 -80 Q10 -46 16 -12 H34 Q30 -48 26 -84 Z" {L(JEANS)}/>')
    o.append(f'<path d="M-16 -70 L-17 -16 M14 -66 Q20 -40 25 -16" {li(1.3, "#9fb4ff")}/>')
    o.append(f'<path d="M-25 -22 H-6 M16 -22 H33" {li(1.6)}/>')
    o.append(f'<path d="M-14 -52 q4 3 8 0 M18 -48 q4 3 8 -1" {li(1.3, JEANS_S)}/>')
    for dx, esp in ((-16, -1), (25, 1)):
        o.append(f'<path d="M{dx - 14} -14 q2 -8 12 -8 h6 q{10 + esp*3} 0 {14 + esp*3} 12 v2 h-{32 + esp*3} Z" {L("#ffffff")}/>')
        o.append(f'<path d="M{dx - 15} -4 h{34 + esp*3}" stroke="{CAM}" stroke-width="4"/>')
        o.append(f'<path d="M{dx - 4} -18 l6 4 M{dx} -19 l6 4" {li(1.4)}/>')
    o.append(f'<path d="M-30 -96 L-28 -80 H30 L32 -96 Z" {L(JEANS)}/><rect x="-32" y="-96" width="64" height="7" rx="2" {L("#6b4a2b", 2)}/><rect x="-5" y="-97" width="10" height="9" rx="2" {L("#ffd34d", 1.6)}/>')
    return "".join(o)

def _tronco():
    o = [f'<path d="M-30 -158 q30 -12 60 0 q8 6 6 16 L32 -92 q-32 6 -64 0 L-36 -142 q-2 -10 6 -16 Z" {L(CAM)}/>',
         f'<path d="M14 -154 q14 2 18 6 q4 6 2 12 L32 -94 q-8 2 -14 2 Q22 -120 14 -154 Z" fill="{CAM_S}"/>',
         f'<path d="M-12 -160 q12 10 24 0" {L("#ffffff", 2.2)}/><path d="M-10 -158 q10 7 20 0" {li(1.2, "#c9c9c9")}/>',
         f'<path d="M-18 -104 q8 4 14 0 M8 -110 q6 4 12 1" {li(1.4, CAM_S)}/>',
         f'<circle cx="-4" cy="-128" r="12" {L("#ffffff", 2)}/><path d="M-8 -136 v15 l4 -4 l3 6 l3 -1 l-3 -6 h6 Z" {L(T, 1)}/>',
         f'<path d="M-9 -170 L-8 -154 q8 4 16 0 L9 -170 Z" {L(PELE)}/><path d="M-8 -166 q8 6 16 0 L9 -170 H-9 Z" fill="{PELE_S}"/>']
    return "".join(o)

# Braços: os DOIS usam a mesma peça (mesmas medidas), um é o espelho do outro.
# Medidas a partir do ombro: braço 36, antebraço 30, mão ~20 (ponta dos dedos a ~86 do ombro).
REPOUSO = -7          # braço solto ao lado do corpo, levemente afastado do tronco
OMBRO = (36, -150)    # ombro direito (de quem olha); o esquerdo é (-36, -150)
BRACO, ANTEBRACO = 36, 30

def _peca_braco(ombro, cotovelo, mao, aberta, modo):
    """modo "contorno": desenha só o contorno grosso; modo "cor": só o recheio (cobre as emendas por dentro)."""
    if modo == "contorno": est = f'fill="{T}" stroke="{T}" stroke-width="6" stroke-linejoin="round"'
    else: est = f'fill="{PELE}"'
    cot = BRACO; pun = BRACO + ANTEBRACO
    braco = f'<rect x="-7.5" y="-4" width="15" height="{BRACO + 8}" rx="7.5" {est}/>'
    ante = f'<rect x="-6.8" y="{cot - 4}" width="13.6" height="{ANTEBRACO + 8}" rx="6.8" {est}/>'
    if aberta:   # mão aberta: palma + 4 dedos + polegar
        m = f'<ellipse cx="0" cy="{pun + 7}" rx="9" ry="9" {est}/>'
        for i, (dx, comp) in enumerate(((-6, 9), (-2, 11.5), (2, 11.5), (6, 9))):
            m += f'<rect x="{dx - 2}" y="{pun + 9}" width="4" height="{comp}" rx="1.8" {est}/>'
        m += f'<rect x="-3" y="{pun + 1}" width="4" height="11" rx="2" transform="rotate(48 {-1} {pun + 4})" {est}/>'
    else:        # mão relaxada: fechadinha, do mesmo tamanho
        m = f'<ellipse cx="0" cy="{pun + 9}" rx="9" ry="11" {est}/>'
        m += f'<rect x="-3" y="{pun + 1}" width="4" height="10" rx="2" transform="rotate(30 {-1} {pun + 4})" {est}/>'
    return (f'<g transform="rotate({ombro + REPOUSO})">{braco}'
            f'<g transform="rotate({cotovelo} 0 {cot})">{ante}<g transform="rotate({mao} 0 {pun})">{m}</g></g></g>')

def _detalhes_braco(ombro, cotovelo, mao, aberta):
    cot = BRACO; pun = BRACO + ANTEBRACO
    sombra = f'<path d="M3 6 V{BRACO - 2}" stroke="{PELE_S}" stroke-width="3" stroke-linecap="round"/>'
    dobra = f'<path d="M-3 {cot + 1} q3 2 6 0" {li(1.2, PELE_S)}/>'
    if aberta:
        dedos = ''.join(f'<path d="M{dx} {pun + 12} v4" {li(1, PELE_S)}/>' for dx in (-3.6, 0, 3.6))
    else:
        dedos = ''.join(f'<path d="M-6 {pun + y} q6 2 12 0" {li(1.1, PELE_S)}/>' for y in (12, 15.5))
    manga = (f'<path d="M-12.5 -9 Q0 -15 12.5 -9 L11.5 15 Q0 19 -11.5 15 Z" {L(CAM)}/>'
             f'<path d="M-10.5 12 Q0 16 10.5 12" {li(1.4)}/><path d="M4 -8 L5 13" stroke="{CAM_S}" stroke-width="4" opacity=".8"/>')
    return (f'<g transform="rotate({ombro + REPOUSO})">{sombra}'
            f'<g transform="rotate({cotovelo} 0 {cot})">{dobra}<g transform="rotate({mao} 0 {pun})">{dedos}</g></g>{manga}</g>')

def _braco(lado, ombro=0, cotovelo=0, mao=0, aberta=False):
    """lado = 1 (direito de quem olha) ou -1 (esquerdo, espelhado). Ângulo negativo levanta o braço para fora."""
    ox, oy = OMBRO
    ini = f'<g transform="translate({ox * lado} {oy}) scale({lado} 1)">'
    return (ini + _peca_braco(ombro, cotovelo, mao, aberta, "contorno") + _peca_braco(ombro, cotovelo, mao, aberta, "cor")
            + _detalhes_braco(ombro, cotovelo, mao, aberta) + '</g>')

def _cabeca(olhos, inclina, boca):
    o = [f'<g transform="rotate({inclina} 0 -166)">']
    o.append(f'<path d="M-16 -236 q-6 -26 16 -30 q24 -2 22 24 q-2 12 -14 14 Z" {L(CAB)}/>')
    o.append(f'<path d="M-8 -256 q8 -6 18 2 M-10 -246 q12 -6 24 2" {li(1.4, CAB_L)}/>')
    o.append(f'<path d="M-14 -232 q14 8 30 0 l2 8 q-17 8 -34 0 Z" {L("#ffd34d", 2.4)}/>')
    for lado in (-1, 1):
        o.append(f'<ellipse cx="{lado*37}" cy="-196" rx="6" ry="9" {L(PELE, 2.4)}/><path d="M{lado*38} -200 q{lado*3} 4 0 8" {li(1.3, PELE_S)}/>')
    o.append(f'<path d="M-36 -204 q0 -38 36 -38 q36 0 36 38 q0 24 -14 34 q-10 8 -22 8 q-12 0 -22 -8 q-14 -10 -14 -34 Z" {L(PELE)}/>')
    o.append(f'<path d="M22 -228 q14 10 14 24 q0 24 -14 34 q-8 6 -16 7 q16 -14 18 -32 q2 -18 -2 -33 Z" fill="{PELE_S}" opacity=".7"/>')
    o.append(f'<path d="M-38 -200 q-2 -46 38 -46 q40 0 38 46 q-6 -14 -14 -20 q-10 10 -26 8 q-8 8 -22 6 q-10 2 -14 6 Z" {L(CAB)}/>')
    o.append(f'<path d="M-22 -232 q10 -6 22 -6 M-28 -222 q6 -8 14 -10 M12 -236 q10 2 16 10" {li(1.4, CAB_L)}/>')
    o.append(f'<path d="M-14 -238 q12 -6 26 -2 q-12 1 -24 6 Z" fill="#8a6650" opacity=".8"/>')
    o.append(f'<path d="M-36 -206 q-6 4 -4 12 M36 -206 q6 4 4 12" {li(1.4, CAB)}/>')
    for lado in (-1, 1):
        x = lado * 14
        if olhos == "fechados":
            o.append(f'<path d="M{x - 8} -197 q8 7 16 0" stroke="{T}" stroke-width="3" fill="none" stroke-linecap="round"/>')
            o.append(f'<path d="M{x - 5} -193 l-1 3 M{x} -192 v3 M{x + 5} -193 l1 3" {li(1.4)}/>')
        else:
            o.append(f'<path d="M{x - 8} -198 q8 -10 16 0 q-8 9 -16 0 Z" fill="#fff" stroke="{T}" stroke-width="1.4"/>')
            o.append(f'<circle cx="{x}" cy="-197" r="5.2" fill="#6b3d1f"/><circle cx="{x}" cy="-197" r="2.6" fill="{T}"/>')
            o.append(f'<circle cx="{x - 1.8}" cy="-199" r="1.6" fill="#fff"/><circle cx="{x + 1.8}" cy="-195" r=".8" fill="#fff"/>')
            o.append(f'<path d="M{x - 9} -198 q9 -12 18 0" stroke="{T}" stroke-width="3" fill="none" stroke-linecap="round"/>')
            o.append(f'<path d="M{x + lado*8} -199 l{lado*4} -3" stroke="{T}" stroke-width="2" stroke-linecap="round"/>')
        o.append(f'<path d="M{x - 8} {-212 - (2 if olhos == "fechados" else 0)} q8 -5 16 -1" stroke="{CAB}" stroke-width="3.2" fill="none" stroke-linecap="round"/>')
    o.append(f'<path d="M1 -192 q4 6 -1 9" {li(1.8, PELE_S)}/>')
    o.append(f'<ellipse cx="-22" cy="-184" rx="7" ry="4" fill="{COR["rosa"]}" opacity=".5"/><ellipse cx="22" cy="-184" rx="7" ry="4" fill="{COR["rosa"]}" opacity=".5"/>')
    if boca == "fala":
        o.append(f'<ellipse cx="0" cy="-172" rx="7" ry="6" {L("#7a2a2a", 2)}/><path d="M-4 -168 q4 -3 8 0 q-4 3 -8 0 Z" fill="#ff8f8f"/>')
    else:
        o.append(f'<path d="M-11 -178 q11 2 22 0 q-2 14 -11 14 q-9 0 -11 -14 Z" {L("#7a2a2a", 2)}/>')
        o.append(f'<path d="M-9 -177 q9 2 18 0 v3 q-9 2 -18 0 Z" fill="#fff"/><path d="M-5 -168 q5 -4 10 0 q-5 4 -10 0 Z" fill="#ff8f8f"/>')
    o.append('</g>')
    return "".join(o)

def bia_n2(ombro=0, cotovelo=0, mao=0, olhos="abertos", inclina=0, boca="sorriso", sobe=0, esq=(0, 0, 0)):
    """ombro/cotovelo/mao = braço direito (de quem olha); esq = (ombro, cotovelo, mao) do braço esquerdo."""
    aberta = ombro < -40
    return (sombra_chao(4, 0, 46, 8) + _pernas() + f'<g transform="translate(0 {sobe})">'
            + _braco(-1, *esq, aberta=esq[0] < -40) + _braco(1, ombro, cotovelo, mao, aberta=aberta)
            + _tronco() + _cabeca(olhos, inclina, boca) + '</g>')

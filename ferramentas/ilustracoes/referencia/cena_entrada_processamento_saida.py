"""Teste de estilos: cena 'entrada -> processamento -> saída' (6º ano, Missão 1) em dois estilos."""
import sys

def escurecer(h, f=0.78):
    h = h.lstrip('#'); r, g, b = (int(h[i:i+2], 16) for i in (0, 2, 4))
    return '#%02x%02x%02x' % tuple(int(c * f) for c in (r, g, b))

class E:
    def __init__(self, nome):
        self.nome = nome
        self.cartoon = nome == "B"
        self.tinta = "#1c1f22"
        self.lw = 2.6 if self.cartoon else 1.3
        # paleta
        if self.cartoon:
            self.c = dict(parede="#fde9c8", parede2="#f8d9a8", piso="#c98b55", piso2="#b07440", ceu="#7cc8ff", ceu2="#bfe6ff",
                          mesa="#d9a066", mesa2="#b97f45", plastico="#f4f6f8", plastico2="#cfd6de", escuro="#2b3440", escuro2="#1d242d",
                          tela="#2f80ed", tela2="#5aa0ff", camisa="#ff7a45", calca="#3a5bd9", pele="#c68642", cabelo="#2a1a12",
                          cadeira="#e14b4b", azul="#1d6fe0", amarelo="#e09a00", verde="#159a4a", roxo="#7c3aed")
        else:
            self.c = dict(parede="#eef1f6", parede2="#e2e7ef", piso="#d8c3a5", piso2="#c7ae8c", ceu="#a9d8f5", ceu2="#d9effc",
                          mesa="#c8a27a", mesa2="#a9845d", plastico="#f2f4f7", plastico2="#d3d9e1", escuro="#3a4350", escuro2="#2a313b",
                          tela="#3b7fd9", tela2="#6aa3ec", camisa="#2bb3a3", calca="#45506a", pele="#a8714a", cabelo="#2b1d16",
                          cadeira="#5867c9", azul="#2563eb", amarelo="#d97706", verde="#16a34a", roxo="#7c3aed")

    def a(self, fill, contorno=True, lw=None):
        """atributos de preenchimento + contorno"""
        if not contorno:
            return f'fill="{fill}"'
        st = self.tinta if self.cartoon else escurecer(fill, 0.62) if fill.startswith('#') else self.tinta
        return f'fill="{fill}" stroke="{st}" stroke-width="{lw or self.lw}" stroke-linejoin="round" stroke-linecap="round"'

def cena(e):
    c = e.c; A = e.a; s = []
    W, H = 900, 470
    # ---------- PLANO DE FUNDO: parede, janela, piso ----------
    s.append(f'<rect width="{W}" height="300" fill="{c["parede"]}"/>')
    s.append(f'<rect y="282" width="{W}" height="18" {A(c["parede2"], False)}/>')  # rodapé
    s.append(f'<rect y="300" width="{W}" height="{H-300}" fill="{c["piso"]}"/>')
    for k in range(0, W, 90):
        s.append(f'<path d="M{k} 300 L{k-60} {H}" stroke="{c["piso2"]}" stroke-width="2"/>')
    s.append(f'<path d="M0 352 H{W} M0 412 H{W}" stroke="{c["piso2"]}" stroke-width="1.5" opacity=".6"/>')
    # janela
    s.append(f'<rect x="36" y="36" width="150" height="150" rx="4" {A("#ffffff")}/>')
    s.append(f'<rect x="46" y="46" width="130" height="130" fill="{c["ceu"]}"/>')
    s.append(f'<rect x="46" y="120" width="130" height="56" fill="{c["ceu2"]}"/>')
    s.append(f'<circle cx="150" cy="74" r="14" fill="#ffd34d"/>')
    s.append(f'<path d="M62 104 q8-14 22-8 q6-12 20-4 q14 0 12 12 z" fill="#fff"/>')
    s.append(f'<path d="M46 160 q30-22 60-6 q30-20 70 2 v20 h-130z" fill="#5dbb63"/>')
    s.append(f'<path d="M111 46 V176 M46 111 H176" stroke="#fff" stroke-width="6"/>')
    s.append(f'<rect x="30" y="184" width="162" height="10" rx="3" {A("#ffffff")}/>')
    # relógio de parede
    s.append(f'<circle cx="830" cy="70" r="26" {A("#ffffff")}/><path d="M830 70 V54 M830 70 L842 76" stroke="{e.tinta}" stroke-width="2.5" stroke-linecap="round"/>')
    # ---------- PLANO MÉDIO: mesa ----------
    s.append(f'<ellipse cx="350" cy="404" rx="300" ry="10" fill="#000" opacity=".12"/>')  # sombra sólida no chão
    s.append(f'<rect x="76" y="270" width="14" height="132" {A(c["mesa2"])}/><rect x="606" y="270" width="14" height="132" {A(c["mesa2"])}/>')
    s.append(f'<path d="M70 250 H640 L628 262 H58 Z" {A(c["mesa"])}/>')
    s.append(f'<rect x="58" y="262" width="582" height="14" {A(c["mesa2"])}/>')
    s.append(f'<path d="M90 255 H300 M330 258 H520 M150 252 H260" stroke="{c["mesa2"]}" stroke-width="1.2" opacity=".7"/>')
    s.append(f'<path d="M190 250 L270 250 L262 258 L182 258 Z M380 250 H470 L462 256 H372 Z M74 250 H186 L180 256 H68 Z" fill="#000" opacity=".13"/>')
    s.append(f'<rect y="270" width="{W}" height="12" fill="#000" opacity=".04"/>')
    # impressora (saída)
    s.append(f'<rect x="78" y="208" width="104" height="42" rx="6" {A(c["plastico"])}/>')
    s.append(f'<rect x="78" y="236" width="104" height="14" rx="3" {A(c["plastico2"])}/>')
    s.append(f'<path d="M92 208 L96 178 H164 L168 208 Z" {A(c["plastico2"])}/>')
    s.append(f'<path d="M100 236 L96 256 H164 L160 236 Z" {A("#ffffff")}/>')
    s.append(f'<path d="M106 244 H154 M108 250 H146" stroke="#9aa5b1" stroke-width="2"/>')
    s.append(f'<circle cx="170" cy="222" r="3.5" fill="{c["verde"]}"/>')
    # gabinete (processamento)
    s.append(f'<path d="M250 124 L262 116 V242 L250 250 Z" {A(c["escuro2"])}/>')  # lateral
    s.append(f'<rect x="196" y="124" width="54" height="126" rx="4" {A(c["escuro"])}/>')
    s.append(f'<path d="M204 136 H242 M204 146 H242" stroke="#6b7685" stroke-width="2"/>')
    s.append(f'<circle cx="223" cy="166" r="7" fill="{c["escuro2"]}" stroke="#58b4ff" stroke-width="2.5"/>')
    s.append(f'<rect x="209" y="184" width="10" height="5" rx="1" fill="#9aa5b1"/><rect x="227" y="184" width="10" height="5" rx="1" fill="#9aa5b1"/>')
    for k in range(5):
        s.append(f'<path d="M206 {204+k*8} H240" stroke="#56606d" stroke-width="2"/>')
    # caixas de som
    for x in (272, 548):
        s.append(f'<rect x="{x}" y="188" width="32" height="62" rx="5" {A(c["escuro"])}/>')
        s.append(f'<circle cx="{x+16}" cy="206" r="6" fill="#56606d"/><circle cx="{x+16}" cy="230" r="10" fill="#56606d"/><circle cx="{x+16}" cy="230" r="4" fill="{c["escuro2"]}"/>')
    # monitor (moldura, suporte e base da mesma cor)
    s.append(f'<path d="M408 222 H440 L446 244 H402 Z" {A(c["escuro"])}/>')
    s.append(f'<ellipse cx="424" cy="247" rx="40" ry="5" {A(c["escuro"])}/>')
    s.append(f'<rect x="314" y="86" width="220" height="140" rx="7" {A(c["escuro"])}/>')
    s.append(f'<rect x="322" y="94" width="204" height="122" fill="{c["tela"]}"/>')
    s.append(f'<path d="M322 94 h204 v40 q-102 22 -204 0z" fill="{c["tela2"]}" opacity=".55"/>')
    # janela do editor na tela, mostrando o que foi digitado
    s.append(f'<rect x="352" y="112" width="146" height="78" rx="3" fill="#fff"/><rect x="352" y="112" width="146" height="12" rx="3" fill="#dfe6ee"/>')
    s.append(f'<circle cx="490" cy="118" r="2.5" fill="#e5484d"/><circle cx="482" cy="118" r="2.5" fill="#9aa5b1"/>')
    s.append(f'<text x="360" y="146" font-family="DejaVu Sans" font-size="15" font-weight="700" fill="#1c1f22">Olá, turma!</text>')
    s.append(f'<rect x="460" y="134" width="2" height="15" fill="#1c1f22"/>')
    s.append(f'<path d="M360 162 H470 M360 172 H440" stroke="#c4ccd6" stroke-width="3" stroke-linecap="round"/>')
    s.append(f'<rect x="322" y="204" width="204" height="12" fill="#1b2a3d" opacity=".75"/><rect x="326" y="206" width="8" height="8" rx="1.5" fill="#58b4ff"/>')
    s.append(f'<path d="M490 96 L470 214" stroke="#fff" stroke-width="10" opacity=".08"/>')  # reflexo
    s.append(f'<circle cx="424" cy="221" r="2" fill="#58b4ff"/>')
    # teclado (fileiras como no real)
    s.append(f'<path d="M376 250 H530 L522 262 H368 Z" {A(c["plastico2"])}/>')
    for row in range(3):
        y = 252 + row * 3.2; x0 = 380 - row * 2.4
        for k in range(14 - row):
            s.append(f'<rect x="{x0 + k*10.4 + row*3}" y="{y}" width="8" height="2.4" rx=".6" fill="#ffffff"/>')
    s.append(f'<rect x="410" y="261.2" width="56" height="2.2" rx=".6" fill="#ffffff"/>')
    # mouse sobre o mousepad
    s.append(f'<ellipse cx="560" cy="257" rx="22" ry="5" fill="#33405a"/>')
    s.append(f'<ellipse cx="560" cy="254" rx="8" ry="5" {A(c["plastico"])}/><path d="M560 249.5 V253" stroke="#9aa5b1" stroke-width="1.2"/>')
    s.append(f'<path d="M552 254 Q540 248 530 252" stroke="{e.tinta}" stroke-width="1.4" fill="none"/>')
    # microfone de mesa
    s.append(f'<ellipse cx="596" cy="250" rx="12" ry="3.5" {A(c["escuro"])}/><path d="M596 248 V226" stroke="{c["escuro"]}" stroke-width="3"/>')
    s.append(f'<rect x="589" y="204" width="14" height="24" rx="7" {A("#9aa5b1")}/><path d="M591 212 H601 M591 218 H601" stroke="#6b7685" stroke-width="1.4"/>')
    # ---------- PRIMEIRO PLANO: aluna na cadeira ----------
    s.append(f'<ellipse cx="700" cy="420" rx="70" ry="8" fill="#000" opacity=".14"/>')
    s.append(f'<path d="M700 330 V404 M664 412 L700 400 L736 412" stroke="{e.tinta}" stroke-width="5" stroke-linecap="round" fill="none"/>')
    s.append(f'<circle cx="664" cy="414" r="5" fill="{e.tinta}"/><circle cx="736" cy="414" r="5" fill="{e.tinta}"/>')
    s.append(f'<rect x="742" y="196" width="22" height="120" rx="10" {A(c["cadeira"])}/>')
    s.append(f'<rect x="652" y="316" width="104" height="16" rx="8" {A(c["cadeira"])}/>')
    # perna (coxa e canela) — calça
    s.append(f'<path d="M712 296 Q670 294 628 298 L624 318 Q670 320 720 318 Z" {A(c["calca"])}/>')
    s.append(f'<path d="M622 304 L616 386 L636 388 L642 314 Z" {A(c["calca"])}/>')
    s.append(f'<path d="M604 386 Q606 376 618 378 L640 380 Q646 392 638 396 H604 Z" {A("#ffffff")}/><path d="M604 396 H640" stroke="{c["cadeira"]}" stroke-width="3"/>')
    # assento
    # tronco (camisa)
    s.append(f'<path d="M676 216 Q700 200 730 212 Q744 250 736 316 H682 Q672 266 676 216 Z" {A(c["camisa"])}/>')
    s.append(f'<path d="M716 214 Q738 222 740 260 Q742 290 736 316 H722 Q730 262 716 214 Z" fill="{escurecer(c["camisa"],0.82)}"/>')
    s.append(f'<path d="M700 270 Q712 274 724 268" stroke="{escurecer(c["camisa"],0.7)}" stroke-width="2" fill="none"/>')
    # pescoço e cabeça (perfil olhando para a tela)
    s.append(f'<path d="M694 192 L708 192 L710 212 L692 212 Z" {A(c["pele"])}/>')
    s.append(f'<path d="M706 120 Q740 118 742 154 Q744 186 716 196 Q694 200 680 186 L674 176 Q668 172 672 166 L676 160 Q672 150 680 136 Q690 120 706 120 Z" {A(c["pele"])}/>')
    # cabelo (coque + franja)
    s.append(f'<path d="M680 138 Q690 112 720 114 Q752 118 748 156 Q746 176 734 186 Q738 156 718 150 Q712 136 696 140 Q688 142 680 138 Z" {A(c["cabelo"])}/>')
    s.append(f'<circle cx="748" cy="122" r="13" {A(c["cabelo"])}/>')
    s.append(f'<path d="M694 124 Q712 116 730 122" stroke="#6b4a3a" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>')
    s.append(f'<path d="M738 124 Q744 132 746 128" stroke="{c["camisa"]}" stroke-width="4" fill="none"/>')
    # orelha
    s.append(f'<path d="M722 160 q10 -4 10 8 q0 10 -9 8" {A(c["pele"])}/>')
    # olho
    if e.cartoon:
        s.append(f'<ellipse cx="690" cy="156" rx="6" ry="7.5" fill="#fff" stroke="{e.tinta}" stroke-width="2"/><circle cx="687" cy="157" r="3.6" fill="{e.tinta}"/><circle cx="686" cy="155" r="1.2" fill="#fff"/>')
        s.append(f'<path d="M682 146 q8 -5 15 -1" stroke="{e.tinta}" stroke-width="2.4" fill="none" stroke-linecap="round"/>')
        s.append(f'<ellipse cx="700" cy="172" rx="6" ry="3.5" fill="#ff8a8a" opacity=".55"/>')
    else:
        s.append(f'<circle cx="688" cy="157" r="3" fill="{e.tinta}"/>')
        s.append(f'<path d="M682 149 q7 -3 13 0" stroke="{e.cabelo if False else c["cabelo"]}" stroke-width="2" fill="none" stroke-linecap="round"/>')
    s.append(f'<path d="M680 180 q6 4 12 1" stroke="{e.tinta}" stroke-width="2" fill="none" stroke-linecap="round"/>')  # sorriso
    # braço até o mouse
    s.append(f'<path d="M694 222 Q672 246 650 258 L640 246 Q664 232 682 210 Z" {A(c["camisa"])}/>')
    s.append(f'<path d="M648 256 L578 258 L578 248 L644 244 Z" {A(c["pele"])}/>')
    s.append(f'<ellipse cx="572" cy="252" rx="10" ry="6" {A(c["pele"])}/>')
    return W, H, ''.join(s)

def camada_didatica(e, W, H):
    """Setas, etiquetas e lupa: o que faz o desenho ensinar."""
    c = e.c; s = []
    defs = ''.join(f'<marker id="m{n}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="{c[n]}"/></marker>' for n in ("azul", "amarelo", "verde", "roxo"))
    def etiqueta(x, y, num, txt, sub, cor, larg):
        larg = max(len(txt)*10.2, len(sub)*7.0) + 54
        return (f'<g><rect x="{x}" y="{y}" width="{larg}" height="46" rx="10" fill="#fff" stroke="{c[cor]}" stroke-width="2.5"/>'
                f'<circle cx="{x+22}" cy="{y+23}" r="13" fill="{c[cor]}"/><text x="{x+22}" y="{y+28}" font-size="14" font-weight="800" text-anchor="middle" fill="#fff">{num}</text>'
                f'<text x="{x+42}" y="{y+20}" font-size="14" font-weight="800" fill="{c[cor]}">{txt}</text>'
                f'<text x="{x+42}" y="{y+37}" font-size="11.5" fill="#1c1f22">{sub}</text></g>')
    # contornos de destaque (tracejados) nos objetos de cada etapa
    s.append(f'<rect x="364" y="244" width="210" height="24" rx="8" fill="none" stroke="{c["azul"]}" stroke-width="2.5" stroke-dasharray="6 4"/>')
    s.append(f'<rect x="582" y="198" width="30" height="58" rx="8" fill="none" stroke="{c["azul"]}" stroke-width="2.5" stroke-dasharray="6 4"/>')
    s.append(f'<rect x="190" y="112" width="78" height="144" rx="8" fill="none" stroke="{c["amarelo"]}" stroke-width="2.5" stroke-dasharray="6 4"/>')
    s.append(f'<rect x="308" y="80" width="232" height="152" rx="10" fill="none" stroke="{c["verde"]}" stroke-width="2.5" stroke-dasharray="6 4"/>')
    s.append(f'<rect x="72" y="172" width="116" height="90" rx="8" fill="none" stroke="{c["verde"]}" stroke-width="2.5" stroke-dasharray="6 4"/>')
    # ondas de som
    for x, d in ((268, -1), (584, 1)):
        for r in (8, 15):
            s.append(f'<path d="M{x + d*4} {222 - r} q{d*r} {r} 0 {2*r}" stroke="{c["verde"]}" stroke-width="2.5" fill="none" stroke-linecap="round"/>')
    # fluxo: entrada -> gabinete -> saída
    s.append(f'<path d="M420 276 Q330 300 252 262" stroke="{c["azul"]}" stroke-width="4" fill="none" stroke-dasharray="9 6" marker-end="url(#mazul)"/>')
    s.append(f'<path d="M266 150 H306" stroke="{c["verde"]}" stroke-width="4" fill="none" stroke-dasharray="9 6" marker-end="url(#mverde)"/>')
    # lupa: dentro do gabinete
    s.append(f'<path d="M200 118 L186 108 M250 118 L284 108" stroke="{c["amarelo"]}" stroke-width="2" stroke-dasharray="3 3"/>')
    s.append(f'<rect x="146" y="4" width="166" height="104" rx="12" fill="#fff" stroke="{c["amarelo"]}" stroke-width="2.5"/>')
    s.append(f'<text x="229" y="21" font-size="11" font-weight="800" text-anchor="middle" fill="{c["amarelo"]}">DENTRO DO GABINETE</text>')
    s.append(f'<rect x="166" y="32" width="40" height="40" rx="3" fill="#cbd2db" stroke="#6b7685" stroke-width="1.5"/><rect x="174" y="40" width="24" height="24" rx="2" fill="#9aa5b1"/>')
    for k in range(5):
        s.append(f'<path d="M{170+k*8} 32 v-4 M{170+k*8} 72 v4 M166 {36+k*8} h-4 M206 {36+k*8} h4" stroke="#c9a227" stroke-width="1.6"/>')
    s.append(f'<text x="186" y="94" font-size="11" font-weight="800" text-anchor="middle" fill="{c["amarelo"]}">processador</text>')
    s.append(f'<rect x="232" y="42" width="66" height="22" rx="2" fill="#2f6b3a" stroke="#1c3d22" stroke-width="1.2"/><rect x="238" y="46" width="18" height="14" fill="#1c1f22"/><rect x="262" y="46" width="18" height="14" fill="#1c1f22"/><circle cx="291" cy="53" r="3" fill="none" stroke="#c9a227" stroke-width="1.5"/>')
    for k in range(8):
        s.append(f'<rect x="{234+k*3.2}" y="64" width="2" height="4" fill="#c9a227"/>')
    s.append(f'<text x="265" y="94" font-size="11" font-weight="800" text-anchor="middle" fill="{c["roxo"]}">SSD</text>')
    # etiquetas no piso
    s.append(etiqueta(372, 406, "1", "ENTRADA", "teclado, mouse, microfone", "azul", 196))
    s.append(f'<path d="M440 406 V272" stroke="{c["azul"]}" stroke-width="2" marker-end="url(#mazul)"/>')
    s.append(etiqueta(40, 406, "2", "PROCESSAMENTO", "o processador faz as contas", "amarelo", 196))
    s.append(f'<path d="M150 406 Q200 330 220 260" stroke="{c["amarelo"]}" stroke-width="2" fill="none" marker-end="url(#mamarelo)"/>')
    s.append(etiqueta(578, 18, "3", "SAÍDA", "tela, som e papel", "verde", 0))
    s.append(f'<path d="M580 50 L542 82" stroke="{c["verde"]}" stroke-width="2" marker-end="url(#mverde)"/>')
    s.append(etiqueta(326, 8, "4", "ARMAZENAMENTO", "o SSD guarda os arquivos", "roxo", 0))
    s.append(f'<path d="M326 40 Q300 60 290 66" stroke="{c["roxo"]}" stroke-width="2" fill="none" marker-end="url(#mroxo)"/>')
    return defs, ''.join(s)

def svg(e):
    W, H, corpo = cena(e)
    defs, did = camada_didatica(e, W, H)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="DejaVu Sans, sans-serif"><defs>{defs}</defs>{corpo}{did}</svg>'

if __name__ == "__main__":
    for n in ("A", "B"):
        open(f"estilo_{n}.svg", "w").write(svg(E(n)))
        open(f"estilo_{n}.html", "w").write(f'<!doctype html><meta charset=utf-8><body style="margin:0"><div style="width:900px">{svg(E(n))}</div>')

#!/usr/bin/env python3
"""Monta o vídeo do Modo história com a narração do professor (Grok), sem esticar a voz.
Uso: python3 ferramentas/video_historia.py <apostila> <missao> <narracao.mp3> <saida.mp4> [musica.wav]
1) acha as pausas do áudio e encaixa cada parágrafo (fala) numa cena;
2) grava no arquivo da história a sincronia (H.sinc) de cada cena e de cada palavra da legenda;
3) grava a tela (Playwright) no modo auto e junta voz + música baixinha (volume fixo)."""
import sys, os, re, json, subprocess, time, glob, unicodedata, tempfile
from playwright.sync_api import sync_playwright
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
aid, mid, audio, saida = sys.argv[1:5]; musica = sys.argv[5] if len(sys.argv) > 5 else None
dados = os.path.join(RAIZ, "dados/historias", aid + ".js")
LEAD, TAIL = 0.35, 3.0

def dur(f): return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).decode())
TOTAL = dur(audio)
log = subprocess.run(["ffmpeg", "-hide_banner", "-i", audio, "-af", "silencedetect=noise=-35dB:d=0.15", "-f", "null", "-"], capture_output=True, text=True).stderr
ss = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]; se = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
sil = list(zip(ss, se))
if not sil or sil[0][0] > 0.05: sil.insert(0, (0.0, 0.0))
if len(ss) > len(se): sil[-1] = (ss[-1], TOTAL)
if sil[-1][1] < TOTAL - 0.05: sil.append((TOTAL, TOTAL))
ch = [(sil[i][1], sil[i + 1][0]) for i in range(len(sil) - 1) if sil[i + 1][0] - sil[i][1] > 0.05]

# falas das cenas (lidas do próprio arquivo, com um PORTAL de mentira)
js = "global.PORTAL={historias:{},registrarHistoria:(a,d)=>{PORTAL.historias[a]=d}};require(%r);console.log(JSON.stringify(PORTAL.historias[%r][%r].map(c=>({fala:c.fala||'',nome:c.nome||''}))))" % (dados, aid, mid)
cenas = json.loads(subprocess.check_output(["node", "-e", js]).decode())
D = [e - s for s, e in ch]; C = [max(1, len(re.sub(r"[^\w]", "", c["fala"]))) for c in cenas]
rate = sum(D) / sum(C); n, m = len(ch), len(cenas); INF = 1e18
best = [[INF] * (n + 1) for _ in range(m + 1)]; arg = [[0] * (n + 1) for _ in range(m + 1)]; best[0][0] = 0
pre = [0]
for d in D: pre.append(pre[-1] + d)
for j in range(1, m + 1):
    for i in range(1, n + 1):
        gap = (ch[i][0] - ch[i - 1][1]) if i < n else 1
        for k in range(j - 1, i):
            if best[j - 1][k] >= INF: continue
            d = pre[i] - pre[k]; e = rate * C[j - 1]
            v = best[j - 1][k] + (d - e) ** 2 / e - 0.8 * gap
            if v < best[j][i]: best[j][i] = v; arg[j][i] = k
i = n; grupos = []
for j in range(m, 0, -1): k = arg[j][i]; grupos.append((k, i)); i = k
grupos.reverse()
cuts = [(ch[k][0], ch[i - 1][1]) for k, i in grupos]

def silabas(w):
    """Quantas sílabas (aprox.) a palavra tem quando falada."""
    lim = re.sub(r"[^\w/]", "", w)
    if re.fullmatch(r"[A-Z]{2,}(/[A-Z]+)?", lim): return len(lim.replace("/", ""))  # sigla: soletrada
    if re.fullmatch(r"[\d.,]+", lim): return max(1, int(len(re.sub(r"\D", "", lim)) * 1.5))
    s = unicodedata.normalize("NFD", w.lower()).encode("ascii", "ignore").decode()
    return max(1, len(re.findall(r"[aeiouy]+", s)))

def distribuir(ws, cs, S, out):
    """Espalha as palavras ws pelo tempo de fala dos trechos cs (sem contar as pausas), pelo número de sílabas."""
    sp = sum(y - x for x, y in cs) or 0.01; pes = [silabas(w) for w in ws]; tot = sum(pes) or 1; acc = 0
    for p_ in pes:
        st = acc / tot * sp; acc += p_; t0 = 0; r = cs[-1][1]
        for x, y in cs:
            if st <= t0 + (y - x) + 1e-9: r = x + (st - t0); break
            t0 += y - x
        out.append(round(r - S, 2))

def grupos_dp(pesos, n):
    """Divide a lista pesos em n grupos contíguos com proporções parecidas (retorna os cortes)."""
    m = len(pesos); tot = sum(pesos) or 1; alvo = 1.0 / n; INF = 1e18
    pre = [0]
    for x in pesos: pre.append(pre[-1] + x)
    B = [[INF] * (m + 1) for _ in range(n + 1)]; A = [[0] * (m + 1) for _ in range(n + 1)]; B[0][0] = 0
    for g in range(1, n + 1):
        for i in range(g, m + 1):
            for k in range(g - 1, i):
                if B[g - 1][k] >= INF: continue
                v = B[g - 1][k] + ((pre[i] - pre[k]) / tot - alvo) ** 2
                if v < B[g][i]: B[g][i] = v; A[g][i] = k
    cortes = []; i = m
    for g in range(n, 0, -1): k = A[g][i]; cortes.append((k, i)); i = k
    return cortes[::-1]

def alinhar(words, cc, S):
    """Encaixa as palavras na voz: frases (até a pontuação) ↔ trechos de fala (entre pausas); dentro, por sílabas."""
    if not words: return []
    fr = []; ini = 0
    for i, w in enumerate(words):
        if re.search(r"[,.:;!?]$", w) or i == len(words) - 1: fr.append((ini, i + 1)); ini = i + 1
    sil = [sum(silabas(w) for w in words[a:b]) for a, b in fr]
    dur = [y - x for x, y in cc]
    out = []
    if len(fr) >= len(cc):
        # várias frases podem caber num trecho: agrupa frases para cada trecho, pelo tamanho
        tot_d = sum(dur) or 1; tot_s = sum(sil) or 1
        # DP: frases → trechos, custo = diferença entre a fração de sílabas e a fração de tempo
        m, n = len(fr), len(cc); INF = 1e18; pre = [0]
        for x in sil: pre.append(pre[-1] + x)
        B = [[INF] * (m + 1) for _ in range(n + 1)]; A = [[0] * (m + 1) for _ in range(n + 1)]; B[0][0] = 0
        for g in range(1, n + 1):
            for i in range(g, m + 1):
                for k in range(g - 1, i):
                    if B[g - 1][k] >= INF: continue
                    v = B[g - 1][k] + ((pre[i] - pre[k]) / tot_s - dur[g - 1] / tot_d) ** 2
                    if v < B[g][i]: B[g][i] = v; A[g][i] = k
        cortes = []; i = m
        for g in range(n, 0, -1): k = A[g][i]; cortes.append((k, i)); i = k
        cortes.reverse()
        for g, (k, i) in enumerate(cortes):
            distribuir(words[fr[k][0]:fr[i - 1][1]], [cc[g]], S, out)
    else:
        # mais pausas que frases: cada frase ganha um ou mais trechos seguidos
        tot_d = sum(dur) or 1; tot_s = sum(sil) or 1
        m, n = len(cc), len(fr); INF = 1e18; pre = [0]
        for x in dur: pre.append(pre[-1] + x)
        B = [[INF] * (m + 1) for _ in range(n + 1)]; A = [[0] * (m + 1) for _ in range(n + 1)]; B[0][0] = 0
        for g in range(1, n + 1):
            for i in range(g, m + 1):
                for k in range(g - 1, i):
                    if B[g - 1][k] >= INF: continue
                    v = B[g - 1][k] + ((pre[i] - pre[k]) / tot_d - sil[g - 1] / tot_s) ** 2
                    if v < B[g][i]: B[g][i] = v; A[g][i] = k
        cortes = []; i = m
        for g in range(n, 0, -1): k = A[g][i]; cortes.append((k, i)); i = k
        cortes.reverse()
        for g, (k, i) in enumerate(cortes):
            a, b = fr[g]; distribuir(words[a:b], cc[k:i], S, out)
    return out

norm = lambda w: unicodedata.normalize("NFD", w).encode("ascii", "ignore").decode().lower().strip(".,:;!?")
starts = [0.0] + [cuts[k][0] - LEAD for k in range(1, m)]
sinc = []
for k, c in enumerate(cenas):
    S = starts[k]; du = (starts[k + 1] if k + 1 < m else TOTAL + TAIL) - S
    a, b = cuts[k]; cc = [(max(x, a), min(y, b)) for x, y in ch if y > a and x < b]
    words = c["fala"].split(); wt = alinhar(words, cc, S)
    d = {"dur": round(du, 2), "wt": wt}
    if c["nome"]:
        f = norm(c["nome"].split()[0])
        for q, w in enumerate(words):
            if norm(w) == f: d["nomeAt"] = wt[q]; break
    sinc.append(d); print(k, round(S, 2), d["dur"], c["fala"][:50])

txt = open(dados).read()
# troca só a sincronia desta missão (as outras missões continuam)
txt = re.sub(r"\n/\* Sincronia %s[^\n]*\*/\nPORTAL\.historias\[[^\n]*\n?" % mid, "\n", txt).rstrip() + "\n"
txt += "\n/* Sincronia %s com a narração" % mid + " gravada (voz do professor): tempo de cada cena e de cada palavra da legenda. Só é usada no modo auto (gravação do vídeo). */\n"
txt += 'PORTAL.historias["%s"].sinc = Object.assign(PORTAL.historias["%s"].sinc || {}, { %s: %s });\n' % (aid, aid, mid, json.dumps(sinc, separators=(",", ":")))
open(dados, "w").write(txt)

# grava a tela
tmp = tempfile.mkdtemp(); porta = "8931"
srv = subprocess.Popen(["python3", "-m", "http.server", porta, "-d", RAIZ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL); time.sleep(1)
p = sync_playwright().start(); b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
ctx = b.new_context(viewport={"width": 1280, "height": 720}, record_video_dir=tmp, record_video_size={"width": 1280, "height": 720})
pg = ctx.new_page(); pg.route("https://www.gstatic.com/**", lambda r: r.fulfill(body="", content_type="application/javascript"))
t0 = time.time(); pg.goto(f"http://localhost:{porta}/?gravar=1#/historia/{aid}/{mid}/auto"); pg.wait_for_timeout(2500)
ini = time.time() - t0; pg.evaluate("window.__historiaComecar()")
pg.wait_for_function("window.__historiaFim === true", timeout=600000); pg.wait_for_timeout(int(TAIL * 1000) + 2500)
ctx.close(); b.close(); p.stop(); srv.kill()
v = glob.glob(tmp + "/*.webm")[0]; T = TOTAL + TAIL
# início exato = fim da tela preta inicial
bl = subprocess.run(["ffmpeg", "-hide_banner", "-i", v, "-vf", "blackdetect=d=0.3:pix_th=0.05", "-an", "-f", "null", "-"], capture_output=True, text=True).stderr
m0 = re.search(r"black_start:[\d.]+ black_end:([\d.]+)", bl)
if m0: ini = float(m0.group(1)); print("início pela tela preta:", ini)
else: print("aviso: tela preta não encontrada; usando o tempo medido", ini)
if musica:
    fc = "[1:a]aresample=44100,apad[v];[2:a]aresample=44100,volume=-19dB,afade=t=in:d=1.5,afade=t=out:st=%.2f:d=3[m];[v][m]amix=inputs=2:duration=longest:normalize=0[a]" % (T - 3)
    ins = ["-i", v, "-i", audio, "-stream_loop", "-1", "-i", musica]
else:
    fc = "[1:a]aresample=44100,apad[a]"; ins = ["-i", v, "-i", audio]
subprocess.check_call(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-ss", "%.2f" % ini] + ins[:2] + ins[2:] + ["-filter_complex", fc, "-map", "0:v", "-map", "[a]", "-t", "%.2f" % T,
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", saida])
print("OK", saida, round(T, 1), "s")

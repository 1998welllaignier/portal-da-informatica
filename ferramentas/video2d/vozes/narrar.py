"""Narra um vídeo v2 com a voz Gemini (26/11/2026) e passa pelo CRIVO antes de montar.
uso: python3 narrar.py <pasta> <serie 6|7|8|9> [--limite-usd 10] [--montar saida.mp4]

Para cada cena (parágrafo de falas.txt):
 1) monta o texto com DIREÇÕES DE EMOÇÃO entre colchetes ([suspense], [animado], [explicando], [surpresa]),
    que a voz usa e não lê (sobrescrever por cena em <pasta>/emocoes.json: {"3": "[suspense] texto…"});
 2) gera a voz (gemini-2.5-pro-tts, Charon, estilo da série em estilos.json) — fica em cache em <pasta>/voz/cenas/;
 3) CRIVO: transcreve o áudio (Whisper local) e compara palavra por palavra com o texto.
    Palavra a mais, a menos ou trocada → gera de novo (até 3 tentativas); se continuar, PARA e avisa;
 4) confere os SEGUNDOS: duração de cada cena e velocidade (palavras por segundo) dentro da faixa normal;
 5) registra o CUSTO de cada chamada (tokens de texto e de áudio) em vozes/custos.csv e para se passar do limite.
Depois: junta as cenas (voz.mp3 + cortes.json) e, com --montar, chama finalizar.py --usar-cortes."""
import sys, os, re, json, time, hashlib, subprocess, unicodedata, difflib, csv, datetime
import numpy as np
AQUI = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, AQUI)
from gemini_tts import falar
import crivo_verde as CV   # 🟢🔴 27/11/2026: diferença pequena e inofensiva = aceita e ajusta o texto/legenda
pasta = sys.argv[1].rstrip("/"); serie = sys.argv[2]
arg = lambda k, d=None: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
LIMITE = float(arg("--limite-usd", "10")); MODELO = "gemini-2.5-pro-tts"; VOZ = "Charon"
P_TXT, P_AUD = 1.0 / 1e6, 20.0 / 1e6          # US$ por token (texto de entrada, áudio de saída)
CUSTOS = os.path.join(AQUI, "custos.csv")

def gasto_total():
    if not os.path.exists(CUSTOS): return 0.0
    return sum(float(r["usd"]) for r in csv.DictReader(open(CUSTOS)))

BASE = json.load(open(os.path.join(AQUI, "estilos.json")))[serie].replace("Leia exatamente o texto:", "").strip()
DIRECOES = ("\nEmoção por momento: o tom de base é animado onde couber, mas a emoção muda conforme o momento da história. "
 "As palavras entre colchetes, como [suspense], [animado], [explicando] e [surpresa], são só direções de emoção para o trecho que vem depois: NUNCA leia os colchetes em voz alta. "
 "[suspense] = um pouco mais baixo e mais devagar, com pausas que deixam o ouvinte curioso, como quem conta um mistério, sem voz de terror. "
 "[animado] = ritmo vivo e sorriso na voz, como quem mostra uma ideia boa. "
 "[surpresa] = uma subida natural de espanto e alegria na descoberta, como quem diz 'olha só!', sem gritar. "
 "[explicando] = calmo, claro e seguro, como um professor explicando de perto. "
 "Não acrescente, não troque e não tire nenhuma palavra.\n\nLeia exatamente o texto:")
ESTILO = BASE + DIRECOES

SURP = re.compile(r"\b(achou|achei|acertou|chegou|pronto|descobr|funcion|ordenada|consegu|era o|era a|uau|olha)\w*", re.I)
SUSP = re.compile(r"\b(mas|perdeu|sumiu|não achou|não sabia|não conseguia|travou|errou|e agora|como|onde foi|o que fazer|cadê)\b", re.I)
def com_emocoes(i, n, fala, chip):
    frases = [f for f in re.split(r"(?<=[.!?…])\s+", fala) if f.strip()]
    if i == 0 or i == n - 1 or "ONDE EU USO" in chip: return "[animado] " + fala
    if "MISSÃO CUMPRIDA" in chip:
        return " ".join(("[surpresa] " if re.search(r"miss[ãa]o cumprida", f, re.I) else ("[animado] " if k == 0 else "")) + f for k, f in enumerate(frases))
    out, atual = [], None
    for k, f in enumerate(frases):
        if i == 1 and k < len(frases) - 1: e = "[suspense]"
        elif f.endswith("!") and SURP.search(f): e = "[surpresa]"
        elif f.endswith("?") or (SUSP.search(f[:14]) and i == 1): e = "[suspense]"
        else: e = "[explicando]" if i > 1 else "[animado]"
        out.append((e + " " if e != atual else "") + f); atual = e
    return " ".join(out)

# ---------- comparação texto × transcrição ----------
UN = {"zero": 0, "um": 1, "uma": 1, "dois": 2, "duas": 2, "três": 3, "quatro": 4, "cinco": 5, "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10, "onze": 11, "doze": 12, "treze": 13,
      "catorze": 14, "quatorze": 14, "quinze": 15, "dezesseis": 16, "dezessete": 17, "dezoito": 18, "dezenove": 19, "vinte": 20, "trinta": 30, "quarenta": 40, "cinquenta": 50,
      "sessenta": 60, "setenta": 70, "oitenta": 80, "noventa": 90, "cem": 100, "cento": 100, "duzentos": 200, "trezentos": 300, "quatrocentos": 400, "quinhentos": 500, "mil": 1000}
def sem_acento(s): return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")
def tokens(s):
    s = re.sub(r"\[[^\]]*\]", " ", s).lower().replace("º", "").replace("ª", "")
    s = s.replace("+", " mais ").replace("=", " igual ").replace("%", " por cento ").replace("×", " vezes ").replace("−", " menos ")
    s = re.sub(r"(\d)\.(\d{3})", r"\1\2", s)
    p = re.findall(r"[a-zà-úç0-9]+", s); out = []; i = 0
    while i < len(p):   # junta números por extenso ("vinte e sete" → 27) para comparar com algarismos
        if p[i] in UN and not (p[i] in ("um", "uma") and (i + 1 >= len(p) or p[i + 1] not in ("e",) and p[i + 1] not in UN)):
            v = UN[p[i]]; j = i + 1
            while j + 1 < len(p) and p[j] == "e" and p[j + 1] in UN and UN[p[j + 1]] < v: v += UN[p[j + 1]]; j += 2
            out.append(str(v)); i = j
        else: out.append(p[i]); i += 1
    out = [sem_acento(x) for x in out]
    return [LETRA.get(x, x) for x in out]
LETRA = {"a": "a", "be": "b", "ce": "c", "de": "d", "efe": "f", "ge": "g", "aga": "h", "jota": "j", "ca": "k", "ele": "l", "eme": "m", "ene": "n", "pe": "p", "que": "q", "erre": "r", "esse": "s", "te": "t", "ve": "v", "dablio": "w", "xis": "x", "ipsilon": "y", "ze": "z"}
IGNORAR = {"e", "o", "a", "as", "os", "ao", "aos", "de", "da", "do", "das", "dos", "no", "na", "em", "um", "uma", "1"}   # o Whisper costuma comer/acrescentar estes; não contam como erro sozinhos
def diferencas(texto, ouvido):
    a, b = tokens(texto), tokens(ouvido); dif = []
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
        if op == "equal": continue
        x, y = a[i1:i2], b[j1:j2]
        if set(x) | set(y) <= IGNORAR: continue
        if "".join(x) == "".join(y): continue   # sigla soletrada × sigla junta (c p u = cpu)
        if op == "replace" and len(x) == len(y) and all(difflib.SequenceMatcher(None, p, q).ratio() > .7 for p, q in zip(x, y)): continue   # grafia parecida (Léo/Leo, Wayground)
        dif.append({"op": op, "texto": " ".join(x), "ouvido": " ".join(y)})
    return dif

_rec = {}
def transcrever(mp3, modelo="small"):
    import sherpa_onnx, wave
    if modelo not in _rec:
        d = os.path.expanduser(f"~/asr/sherpa-onnx-whisper-{modelo}/")
        _rec[modelo] = sherpa_onnx.OfflineRecognizer.from_whisper(encoder=d + f"{modelo}-encoder.int8.onnx", decoder=d + f"{modelo}-decoder.int8.onnx", tokens=d + f"{modelo}-tokens.txt", language="pt", task="transcribe")
    wav = mp3 + ".16k.wav"; subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", mp3, "-ar", "16000", "-ac", "1", wav], check=True)
    w = wave.open(wav); a = np.frombuffer(w.readframes(w.getnframes()), dtype=np.int16).astype(np.float32) / 32768; os.remove(wav); txt = []
    for i in range(0, len(a), 16000 * 28):
        s = _rec[modelo].create_stream(); s.accept_waveform(16000, a[i:i + 16000 * 28]); _rec[modelo].decode_stream(s); txt.append(s.result.text.strip())
    return " ".join(txt)
TEM_TURBO = os.path.exists(os.path.expanduser("~/asr/sherpa-onnx-whisper-turbo/turbo-tokens.txt"))
def crivo(texto, mp3):
    """1ª escuta com o Whisper small; se achar diferença, 2ª escuta com o Whisper turbo (mais preciso).
    Só conta como erro da VOZ o que as duas escutas acharem (o que só uma achou é erro de escuta)."""
    d1 = diferencas(texto, transcrever(mp3, "small"))
    if not d1 or not TEM_TURBO: return d1
    global OUVIDO_TURBO
    OUVIDO_TURBO = transcrever(mp3, "turbo"); d2 = diferencas(texto, OUVIDO_TURBO)
    return [d for d in d2 if any(d["texto"] == e["texto"] for e in d1)]
OUVIDO_TURBO = ""

dur = lambda f: float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f], capture_output=True, text=True).stdout)

# ---------- principal ----------
falas = [p.strip() for p in open(f"{pasta}/falas.txt").read().split("\n\n") if p.strip()]
html = open(f"{pasta}/video.html", encoding="utf-8").read()
chips = re.findall(r'\{ chip: "([^"]*)"', html); chips += [""] * (len(falas) - len(chips))
over = json.load(open(f"{pasta}/emocoes.json")) if os.path.exists(f"{pasta}/emocoes.json") else {}
os.makedirs(f"{pasta}/voz/cenas", exist_ok=True); rel = []; aceitas = []
for i, fala in enumerate(falas):
    texto = over.get(str(i)) or com_emocoes(i, len(falas), fala, chips[i])
    h = hashlib.sha1((MODELO + VOZ + ESTILO + texto).encode()).hexdigest()[:10]; mp3 = f"{pasta}/voz/cenas/{i:02d}-{h}.mp3"
    ok = False; tent = 0; dif = []
    while not ok and tent < 3:
        if not os.path.exists(mp3) or tent > 0:
            if gasto_total() > LIMITE: print(f"⛔ PAREI: o gasto registrado (US$ {gasto_total():.2f}) passou do limite de US$ {LIMITE:.2f}."); sys.exit(3)
            for r in range(5):
                try: u = falar(texto, VOZ, mp3, MODELO, ESTILO); break
                except Exception as e:
                    if r == 4: raise
                    print("  tentando de novo:", str(e)[:120]); time.sleep(15 * (r + 1))
            tt = int(u.get("promptTokenCount", 0)); ta = int(u.get("candidatesTokenCount", 0)); usd = tt * P_TXT + ta * P_AUD
            novo = not os.path.exists(CUSTOS)
            with open(CUSTOS, "a", newline="") as fcsv:
                w = csv.writer(fcsv); novo and w.writerow(["quando", "pasta", "cena", "tentativa", "tokens_texto", "tokens_audio", "segundos", "usd"])
                w.writerow([datetime.datetime.now().isoformat(timespec="seconds"), os.path.basename(pasta), i, tent + 1, tt, ta, round(dur(mp3), 2), round(usd, 5)])
        globals()["OUVIDO_TURBO"] = ""; dif = crivo(texto, mp3); ok = not dif; tent += 1
        if not ok and OUVIDO_TURBO and "--sem-verde" not in sys.argv:
            verdes, verm = CV.classificar(fala, OUVIDO_TURBO, CV.gatilhos_da_cena(html, i))
            if verdes and not verm:
                nova = CV.aplicar(fala, verdes); extra = {}
                if str(i) in over:
                    o2 = CV.aplicar_em(over[str(i)], fala, verdes)
                    if o2 is None: verm = [{"motivo": "texto com emoções não localizado"}]
                    else: extra["over"] = o2
                if not verm:
                    aceitas.append({"cena": i, "fala_antiga": fala, "fala_nova": nova, "verdes": verdes, "trocas": [{"de": v["de"], "para": v["para"]} for v in verdes], **extra})
                    print(f"  🟢 cena {i}: aceita sem gerar de novo · " + "; ".join(f'"{v["de"]}" → "{v["para"]}"' for v in verdes)); ok = True; dif = []; break
            if verm: print(f"  🔴 cena {i}: " + "; ".join(v.get("motivo", "") for v in verm))
        if not ok: print(f"  cena {i}: CRIVO pegou diferença {dif} → gerando de novo")
    d = dur(mp3); npal = len(tokens(texto)); vel = npal / max(.1, d)
    rel.append({"cena": i, "arquivo": os.path.basename(mp3), "segundos": round(d, 2), "pal_por_s": round(vel, 2), "crivo": "ok" if ok else "DIFERENÇA", "dif": dif, "texto": texto})
    print(f"cena {i:2d} · {d:5.1f}s · {vel:.1f} pal/s · crivo {'ok' if ok else 'DIFERENÇA ' + json.dumps(dif, ensure_ascii=False)}")
# 🟢 trocas aceitas: o texto do vídeo (falas.txt, F e legenda própria em cenas.js/video.html, emoções) passa a ser o que a voz falou
if aceitas:
    arqs = {f: open(f, encoding="utf-8").read() for f in (f"{pasta}/cenas.js", f"{pasta}/video.html") if os.path.exists(f)}
    for ac in aceitas:
        i, velha, nova = ac["cena"], ac["fala_antiga"], ac["fala_nova"]
        for f, txt in arqs.items():
            m = re.search(r'\bF%d = ("(?:[^"\\]|\\.)*")' % i, txt)
            if m and json.loads(m.group(1)) == velha: txt = txt[:m.start(1)] + json.dumps(nova, ensure_ascii=False) + txt[m.end(1):]
            for lit in set(re.findall(r'"((?:[^"\\\n]|\\.){40,})"', txt)):   # legendas próprias (texto longo parecido com a fala)
                try: val = json.loads('"' + lit + '"')
                except Exception: continue
                if val != velha and difflib.SequenceMatcher(None, val, velha).ratio() > .8:
                    novo = CV.aplicar_em(val, velha, ac["verdes"])
                    if novo: txt = txt.replace('"' + lit + '"', json.dumps(novo, ensure_ascii=False))
            arqs[f] = txt
        falas[i] = nova
        if "over" in ac: over[str(i)] = ac["over"]
        # a voz já gravada passa a valer para o texto novo (sem gerar de novo)
        tx2 = over.get(str(i)) or com_emocoes(i, len(falas), nova, chips[i])
        h2 = hashlib.sha1((MODELO + VOZ + ESTILO + tx2).encode()).hexdigest()[:10]; novo_mp3 = f"{pasta}/voz/cenas/{i:02d}-{h2}.mp3"
        import shutil; shutil.copy(f"{pasta}/voz/cenas/{rel[i]['arquivo']}", novo_mp3); rel[i]["arquivo"] = os.path.basename(novo_mp3); rel[i]["texto"] = tx2; rel[i]["crivo"] = "ok (🟢 aceito)"
    for f, txt in arqs.items(): open(f, "w", encoding="utf-8").write(txt)
    open(f"{pasta}/falas.txt", "w", encoding="utf-8").write("\n\n".join(falas) + "\n")
    if over: json.dump(over, open(f"{pasta}/emocoes.json", "w"), ensure_ascii=False, indent=1)
    json.dump(aceitas, open(f"{pasta}/voz/aceitas.json", "w"), ensure_ascii=False, indent=1)
    print("🟢 TROCAS ACEITAS (o texto e a legenda agora mostram o que a voz falou):")
    for ac in aceitas: print(f"   cena {ac['cena']}: " + "; ".join(f'"{t["de"]}" → "{t["para"]}"' for t in ac["trocas"]))
json.dump(rel, open(f"{pasta}/voz/crivo.json", "w"), ensure_ascii=False, indent=1)
ruins = [r for r in rel if r["crivo"] != "ok"]; lentos = [r for r in rel if not (1.4 <= r["pal_por_s"] <= 3.6)]
if lentos: print("⚠️ velocidade fora da faixa (1,4 a 3,6 palavras/s):", [(r["cena"], r["pal_por_s"]) for r in lentos])
if ruins: print("⛔ CRIVO: cenas com diferença depois de 3 tentativas:", [r["cena"] for r in ruins]); sys.exit(4)
# junta as cenas com 0,3 s de silêncio entre elas; os cortes são esses silêncios (finalizar.py ainda põe 0,9 s de respiro)
lista = []; cortes = []; t = 0.0; SIL = .3
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", str(SIL), f"{pasta}/voz/sil.wav"], check=True)
for k, r in enumerate(rel):
    wavc = f"{pasta}/voz/cenas/{k:02d}.wav"; subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", f"{pasta}/voz/cenas/{r['arquivo']}", "-ar", "24000", "-ac", "1", wavc], check=True)
    lista.append(wavc); t += dur(wavc)
    if k < len(rel) - 1: lista.append(f"{pasta}/voz/sil.wav"); cortes.append([round(t, 3), round(t + SIL, 3)]); t += SIL
open(f"{pasta}/voz/lista.txt", "w").write("".join(f"file '{os.path.abspath(x)}'\n" for x in lista))
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", f"{pasta}/voz/lista.txt", "-b:a", "160k", f"{pasta}/voz/voz_gemini.mp3"], check=True)
json.dump(cortes, open(f"{pasta}/voz/cortes.json", "w"))
tot = sum(float(r["usd"]) for r in csv.DictReader(open(CUSTOS)) if r["pasta"] == os.path.basename(pasta))
print(f"✅ voz pronta: {pasta}/voz/voz_gemini.mp3 · {t:.1f}s · custo deste vídeo US$ {tot:.3f} · total registrado US$ {gasto_total():.3f}")
if arg("--montar"):
    r = subprocess.run([sys.executable, os.path.join(os.path.dirname(AQUI), "finalizar.py"), pasta, f"{pasta}/voz/voz_gemini.mp3", arg("--montar"), "--usar-cortes"])
    sys.exit(r.returncode)

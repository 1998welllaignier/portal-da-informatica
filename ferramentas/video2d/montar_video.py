"""uso: python3 montar_video.py <pasta> "<Xº ano · Missão N>" "<Xº ano · Turmas …>"
Junta: cabeçalho comum (do 7º M1) + pecas2.js + <pasta>/cenas.js + motor de tempo/legenda."""
import sys, shutil, os
B = os.path.dirname(os.path.abspath(__file__)); pasta, titulo, selo = sys.argv[1:4]
s = open(f"{B}/7ano-m1/video.html").read().split("\n")  # motor v4 (cabeçalho + tempo/legenda) do 7º M1
head = s[:89]; head[0] = head[0].replace("7º ano · Missão 1", titulo); head[3] = head[3].replace("7º ano · Turmas A, B, C e D", selo)
extra = s[89:111]  # LEO, leo, roteador, rack, pacote, casa, no, linha, ondaAudio, carro
i = [k for k, l in enumerate(s) if "tempo das cenas" in l][0]
open(f"{pasta}/video.html", "w").write("\n".join(head + extra) + "\n" + open(f"{B}/pecas2.js").read() + "\n" + open(f"{pasta}/cenas.js").read() + "\n\n" + "\n".join(s[i:]))
for f in ("lib.js", "audio.py"): shutil.copy(f"{B}/{f}", pasta)
shutil.copy(f"{B}/gravar_v4.py", f"{pasta}/gravar.py")
print("ok", pasta)

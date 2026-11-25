"""Gera o prompt da narração (prompt.txt) e o trecho JS para colar no ChatGPT. uso: python3 fazer_prompt.py <pasta> [idade]"""
import sys, json
pasta = sys.argv[1]; idade = sys.argv[2] if len(sys.argv) > 2 else "10"
f = open(f"{pasta}/falas.txt", encoding="utf-8").read().strip()
p = (f"Gere uma NOVA narração com o Create Speech do HeyGen (só o MP3, sem vídeo nem avatar), mesma voz Murilo - Bright & Articulate, "
     f"português do Brasil, voz natural, animada e bem clara, como um narrador de desenho animado contando uma história para crianças de {idade} anos, "
     "com emoção nas descobertas, sem correr. Faça uma pausa de 2 segundos entre cada parágrafo. Leia exatamente o texto abaixo, sem acrescentar nada. "
     "Depois me mande, em texto puro, o link direto (URL completa) do MP3.\n\n" + f)
open(f"{pasta}/prompt.txt", "w", encoding="utf-8").write(p)
js = ("const T=" + json.dumps(" " + p) + ";\nconst el=document.querySelector('.ProseMirror.ProseMirror-focused')||[...document.querySelectorAll('.ProseMirror')].pop();el.focus();"
      "const dt=new DataTransfer();dt.setData('text/plain',T);el.dispatchEvent(new ClipboardEvent('paste',{clipboardData:dt,bubbles:true,cancelable:true}));"
      "await new Promise(r=>setTimeout(r,600));[el.innerText.length,el.innerText.slice(0,60)]")
open(f"/tmp/colar-{pasta}.js", "w").write(js); print(len(js))

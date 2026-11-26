import sys, json, base64, subprocess, urllib.request, os
KEY = open(os.path.expanduser("~/.segredos/google-gemini.key")).read().strip()
def falar(texto, voz, saida, modelo="gemini-3.1-flash-tts-preview", estilo=""):
    prompt = (estilo + "\n\n" if estilo else "") + texto
    body = {"contents":[{"role":"user","parts":[{"text":prompt}]}],
            "generationConfig":{"responseModalities":["AUDIO"],"speechConfig":{"voiceConfig":{"prebuiltVoiceConfig":{"voiceName":voz}}}}}
    req = urllib.request.Request(f"https://aiplatform.googleapis.com/v1/publishers/google/models/{modelo}:generateContent?key={KEY}",
        data=json.dumps(body).encode(), headers={"Content-Type":"application/json"})
    d = json.load(urllib.request.urlopen(req, timeout=180))
    pcm = base64.b64decode(d["candidates"][0]["content"]["parts"][0]["inlineData"]["data"])
    subprocess.run(["ffmpeg","-loglevel","error","-y","-f","s16le","-ar","24000","-ac","1","-i","-","-b:a","128k",saida], input=pcm, check=True)
    return d.get("usageMetadata", {})
if __name__ == "__main__":
    print(falar(sys.argv[1], sys.argv[2], sys.argv[3], *(sys.argv[4:5] or [])))

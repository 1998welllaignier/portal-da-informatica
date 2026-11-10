import re, json, subprocess
P=open('falas.txt',encoding='utf8').read().strip().split('\n\n')
units=[]  # (paragrafo, palavras) — frases terminadas em . ! ? … :
for pi,p in enumerate(P):
    for u in re.findall(r'[^.!?…:]+[.!?…:]?', p):
        n=len(u.split())
        if n: units.append((pi,n))
S=[tuple(map(float,l.split())) for l in open('voz/silencios.txt')]
tot=float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0","voz/voz.mp3"]))
ini=S[0][1]; fala=sum(b-a for a,b,_ in [(S[i][1],S[i+1][0],0) for i in range(len(S)-1)])+ (tot-S[-1][1])
W=sum(n for _,n in units); rate=W/fala
C=S[1:]+[(tot,tot,1.0)]  # fronteiras possíveis (a última = fim)
U=len(units); INF=1e18
best=[[INF]*len(C) for _ in range(U)]; prv=[[-1]*len(C) for _ in range(U)]
def fala_entre(i0,i1): # tempo de fala entre o fim do silêncio i0 e o início do silêncio i1
    a = ini if i0<0 else C[i0][1]; return C[i1][0]-a
for u,(pi,n) in enumerate(units):
    for j in range(len(C)):
        for k in ([-1] if u==0 else range(j)):
            if u>0 and best[u-1][k]>=INF: continue
            d=fala_entre(k,j); 
            if d<=0: continue
            c=(d-n/rate)**2/(n/rate) - 2.0*C[j][2]
            tot_c=(0 if u==0 else best[u-1][k])+c
            if tot_c<best[u][j]: best[u][j]=tot_c; prv[u][j]=k
j=len(C)-1; fim=[]
for u in range(U-1,-1,-1): fim.append(j); j=prv[u][j]
fim=fim[::-1]
# fronteira de parágrafo = fim da última frase de cada parágrafo
cortes=[]
for u,(pi,n) in enumerate(units):
    if u==U-1 or units[u+1][0]!=pi:
        j=fim[u]; cortes.append((C[j][0],C[j][1]))
for i,c in enumerate(cortes): print(i, c, P[i][:45])
json.dump(cortes,open('voz/cortes.json','w'))

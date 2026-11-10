import re, json
txt=open('falas.txt',encoding='utf8').read().strip().split('\n\n')
w=[len(p.split()) for p in txt]; n=len(w)
S=[tuple(map(float,l.split())) for l in open('voz/silencios.txt')]
tot=110.99; inicio=S[0][1]; fim=S[-1][0]
fala=fim-inicio
cum=[sum(w[:i+1])/sum(w) for i in range(n-1)]
exp=[inicio+c*fala for c in cum]
C=[s for s in S[1:-1]]
import math
INF=1e9
# dp[i][j]: melhor custo usando fronteira i na pausa j
best={}
for i in range(n-1):
    for j,(a,b,d) in enumerate(C):
        m=(a+b)/2; custo=abs(m-exp[i])*1.0 - d*12
        if i==0: best[(i,j)]=(custo,None)
        else:
            cand=[(best[(i-1,k)][0]+custo,k) for k in range(j) if (i-1,k) in best]
            if cand: best[(i,j)]=min(cand)
j=min((best[(n-2,k)][0],k) for k in range(len(C)) if (n-2,k) in best)[1]
esc=[]
for i in range(n-2,-1,-1): esc.append(j); j=best[(i,j)][1]
esc=esc[::-1]
cortes=[ (C[k][0]+C[k][1])/2 for k in esc]
for i,k in enumerate(esc): print(i+1, round(exp[i],1), C[k], txt[i+1][:40])
bordas=[0]+cortes+[tot]
durs=[round(bordas[i+1]-bordas[i],3) for i in range(n)]
json.dump(durs,open('voz/durs.json','w')); print(durs)

# Gera uma musiquinha de fundo leve (violão dedilhado + batida suave), sem direitos autorais.
# Uso: python3 ferramentas/musica_fundo.py <segundos> <saida.wav>
import numpy as np, sys, wave
SR=44100; BPM=104; beat=60/BPM; L=float(sys.argv[1]); out=sys.argv[2]
N=int(L*SR); mix=np.zeros(N)
rng=np.random.default_rng(7)
def pluck(f,d,amp):
    n=int(d*SR); p=int(SR/f); buf=rng.uniform(-1,1,p); y=np.zeros(n)
    for i in range(n):
        y[i]=buf[i%p]; buf[i%p]=0.5*(buf[i%p]+buf[(i+1)%p])*0.996
    return y*amp
def add(sig,t):
    i=int(t*SR); j=min(N,i+len(sig))
    if i<N: mix[i:j]+=sig[:j-i]
def nota(m): return 440*2**((m-69)/12)
chords=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]]  # C G Am F
cache={}
def P(m,d,a):
    k=(m,d,a)
    if k not in cache: cache[k]=pluck(nota(m),d,a)
    return cache[k]
bar=4*beat; t=0; k=0
patt=[0,1,2,1,0,2,1,2]
while t<L:
    ch=chords[k%4]
    for s in range(8):
        m=ch[patt[s]]+12
        add(P(m,0.9,0.35),t+s*beat/2)
    add(P(ch[0]-12,bar,0.55),t); add(P(ch[0]-12,bar/2,0.4),t+2*beat)
    for b in range(4):
        tt=np.arange(int(0.18*SR))/SR
        if b in (0,2): add(np.sin(2*np.pi*(50+70*np.exp(-tt*30))*tt)*np.exp(-tt*18)*0.7,t+b*beat)
        if b in (1,3): add(rng.uniform(-1,1,len(tt))*np.exp(-tt*25)*0.18,t+b*beat)
        hh=rng.uniform(-1,1,int(0.05*SR)); hh=np.diff(hh,prepend=0)*np.exp(-np.arange(len(hh))/SR*80)*0.12
        add(hh,t+b*beat+beat/2)
    t+=bar; k+=1
# suaviza
a=0.25; y=np.zeros(N); acc=0
for i in range(N): acc+=a*(mix[i]-acc); y[i]=acc
y/=np.max(np.abs(y))+1e-9
fi=int(1.5*SR); fo=int(3*SR); y[:fi]*=np.linspace(0,1,fi); y[-fo:]*=np.linspace(1,0,fo)
w=wave.open(out,"wb"); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((y*0.9*32767).astype(np.int16).tobytes()); w.close()

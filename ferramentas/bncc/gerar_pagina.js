// Gera material.html (página pública "De portas abertas") a partir dos mesmos dados do PDF
const fs = require('fs');
const src = fs.readFileSync('gerar.js', 'utf8');
const H = eval('(' + src.slice(src.indexOf('const H = {') + 10, src.indexOf('};', src.indexOf('const H = {')) + 1) + ')');
const map = require('./map.json').filter(x => /2027/.test(x.id) && !/trilha/.test(x.id));
const EIXO = { PC: ['Pensamento Computacional', '#2456c8', '#e8efff'], MD: ['Mundo Digital', '#0f8a5f', '#e3f6ee'], CD: ['Cultura Digital', '#7a3cc8', '#f1e9fd'] };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cov = {}; map.forEach(x => x.cods.forEach(c => (cov[c] = cov[c] || []).push(x)));
const codes = Object.keys(H), anos = ['6', '7', '8', '9'];
if (codes.some(c => !cov[c])) throw 'falta';
const nMis = map.filter(x => /^m\d$/.test(x.mid)).length, vinc = codes.reduce((s, c) => s + cov[c].length, 0);
const tit = t => t.replace(/^Missão \d+ – /, ''), bim = id => id.match(/(\d)ano-2027-(\d)bim/);
const cont = (a, k) => codes.filter(c => c.startsWith('EF0' + a) && H[c][0] === k).length;
const tot = a => codes.filter(c => c.startsWith('EF0' + a)).length;
const icone = k => ({
  PC: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  MD: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  CD: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="16.5" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M2.5 20c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M12.5 16.2c1-.8 2.4-1.2 4-1.2 2.7 0 4.9 1.8 5.5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'
})[k];
const ex = (a, k) => { const v = new Set(), xs = []; codes.filter(c => c.startsWith('EF0' + a) && H[c][0] === k).forEach(c => cov[c].filter(x => !/Extra/.test(x.titulo)).forEach(x => { if (!v.has(x.id + x.mid)) { v.add(x.id + x.mid); xs.push(x); } })); return xs.slice(0, 2).map(x => esc(tit(x.titulo))).join('; '); };
const ano = a => `<details class="ano" ${a === '6' ? 'open' : ''}><summary><span class="ano-n">${a}º</span><span><b>${a}º ano</b><small>${tot(a)} habilidades · ${['PC', 'MD', 'CD'].map(k => `${cont(a, k)} de ${EIXO[k][0]}`).join(' · ')}</small></span><span class="ok">${tot(a)} de ${tot(a)} ✓</span></summary>
  <div class="habs">${codes.filter(c => c.startsWith('EF0' + a)).map(c => { const k = H[c][0]; return `<article class="hab" style="--c:${EIXO[k][1]};--b:${EIXO[k][2]}"><header><b>${c}</b><span class="pill">${icone(k)}${EIXO[k][0]}</span></header><p>${esc(H[c][1])}</p>
    <ul>${cov[c].map(x => { const b = bim(x.id); return `<li><span class="tag">${b[2]}º bim · ${x.mid.toUpperCase()}</span>${esc(tit(x.titulo))}</li>`; }).join('')}</ul></article>`; }).join('')}</div></details>`;

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>O que se aprende aqui · Sala de Informática · Prof. Welington Laignier</title>
<meta name="description" content="O que se aprende aqui: o material de Informática do Prof. Welington Laignier, do 6º ao 9º ano, e como ele trabalha as 42 habilidades e os 3 eixos da BNCC Computação.">
<link rel="icon" href="img/favicon.svg">
<style>
:root{--tinta:#1c2333;--suave:#4a5470;--linha:#dde4f5;--bg:#f4f6fb}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans",sans-serif;color:var(--tinta);background:var(--bg);font-size:17px;line-height:1.55}
a{color:#2456c8}
.topo{background:#1d2233;color:#fff;padding:10px 18px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.topo .marca{font-weight:800;line-height:1.1;text-decoration:none;color:#fff}.topo .marca small{display:block;color:#ffe08a;font-weight:600;font-size:.78rem}
.topo .voltar{color:#fff;text-decoration:none;border:1.5px solid rgba(255,255,255,.4);border-radius:10px;padding:6px 12px;font-weight:700;font-size:.92rem}
main{max-width:1080px;margin:0 auto;padding:20px 16px 50px}
.hero{border-radius:22px;padding:34px 30px;color:#fff;background:radial-gradient(circle at 88% 10%,#3a63d8 0,transparent 45%),radial-gradient(circle at 5% 100%,#7a3cc8 0,transparent 45%),#141a2e;position:relative;overflow:hidden}
.hero .sup{letter-spacing:.16em;text-transform:uppercase;font-size:.78rem;color:#ffd76a;font-weight:800;margin:0}
.hero h1{font-size:clamp(1.8rem,4.6vw,2.9rem);line-height:1.1;margin:10px 0 8px}.hero h1 span{color:#ffd76a}
.hero .prof{color:#ffd76a;font-weight:800;font-size:clamp(1.15rem,2.4vw,1.45rem);margin:0}
.hero .sub{color:#d7defa;max-width:700px;margin:10px 0 0}
.hero .selo{display:inline-block;margin-top:18px;background:#ffd76a;color:#141a2e;font-weight:900;border-radius:99px;padding:8px 18px}
.hero .bts{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.bt{display:inline-flex;align-items:center;gap:8px;border-radius:12px;padding:10px 16px;font-weight:800;text-decoration:none}
.bt.pdf{background:#fff;color:#141a2e}.bt.sec{border:1.5px solid rgba(255,255,255,.5);color:#fff}
h2{font-size:1.55rem;margin:34px 0 6px;line-height:1.2}h2::after{content:"";display:block;width:70px;height:5px;border-radius:3px;margin-top:8px;background:linear-gradient(90deg,#2456c8,#0f8a5f,#7a3cc8)}
.lead{color:var(--suave);font-size:1.05rem;max-width:820px}
.nums{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:18px 0}
.num{background:#fff;border:1px solid var(--linha);border-radius:16px;padding:16px}.num b{display:block;font-size:2.1rem;color:#2456c8;line-height:1}.num span{color:var(--suave);font-size:.92rem}
.tab{overflow-x:auto;background:#fff;border:1px solid var(--linha);border-radius:16px}
table{border-collapse:collapse;width:100%;min-width:560px}th,td{padding:11px 12px;border-bottom:1px solid #e9edf6;text-align:center}th{font-size:.85rem;background:#f3f6fd}td:first-child,th:first-child{text-align:left}
.ok{color:#0f8a5f;font-weight:800}tr.tot td{background:#f8fafc;font-weight:800}
.eixos{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0}
.e3{border-radius:16px;padding:18px;background:var(--b);border-top:6px solid var(--c)}.e3 h3{display:flex;gap:8px;align-items:center;color:var(--c);margin:0 0 6px;font-size:1.12rem}.e3 svg{width:24px;height:24px;flex:none}
.e3 p{margin:6px 0;font-size:.95rem}.e3 .ex{font-size:.9rem}
.nota{font-size:.9rem;color:var(--suave)}
.ano{background:#fff;border:1px solid var(--linha);border-radius:16px;margin:12px 0;overflow:hidden}
.ano summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:14px;padding:14px 16px}.ano summary::-webkit-details-marker{display:none}
.ano summary small{display:block;color:var(--suave);font-weight:500;font-size:.88rem}.ano summary .ok{margin-left:auto;white-space:nowrap}
.ano-n{width:48px;height:48px;border-radius:13px;background:#141a2e;color:#ffd76a;display:grid;place-items:center;font-weight:900;font-size:1.3rem;flex:none}
.ano[open] summary{border-bottom:1px solid var(--linha)}
.habs{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;padding:14px}
.hab{border-radius:14px;border:1px solid var(--linha);border-left:6px solid var(--c);padding:12px 14px;background:linear-gradient(180deg,var(--b),#fff 70px)}
.hab header{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}.hab p{margin:6px 0 8px;font-size:.95rem}
.pill{display:inline-flex;align-items:center;gap:4px;font-size:.74rem;font-weight:800;color:var(--c);border:1.5px solid var(--c);background:#fff;border-radius:99px;padding:1px 9px 1px 6px}.pill svg{width:15px;height:15px}
.hab ul{list-style:none;margin:0;padding:0;font-size:.9rem}.hab li{margin:3px 0}
.tag{display:inline-block;font-size:.74rem;font-weight:800;background:#eef1f8;color:#34405e;border-radius:6px;padding:1px 7px;margin-right:6px}
.recs{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;margin-top:14px}
.rec{background:#fff;border:1px solid var(--linha);border-radius:16px;padding:16px}.rec h3{margin:0 0 4px;color:#2456c8;font-size:1.05rem}.rec p{margin:0;font-size:.95rem}
.caixa{background:#e9f8f0;border:1px solid #9fd9bd;border-radius:16px;padding:16px 18px;margin:18px 0}
footer{text-align:center;color:var(--suave);font-size:.88rem;padding:20px 16px 34px}
@media (max-width:600px){.hero{padding:24px 18px}.ano summary .ok{display:none}main{padding:14px 12px 40px}}
@media print{.topo,.bts{display:none}.ano{break-inside:avoid}details>*{display:block}}
/* ===== história em rolagem ===== */
.cena{position:relative}
.c1{height:260vh}.c2{height:300vh}.c3{height:560vh}.c4{height:240vh}
.palco{position:sticky;top:0;height:100vh;overflow:hidden;display:grid;grid-template-columns:1fr 1.1fr;align-items:center;gap:30px;padding:30px max(20px,calc((100vw - 1100px)/2))}
.cena .sup{letter-spacing:.16em;text-transform:uppercase;font-size:.8rem;color:#c2410c;font-weight:900;margin:0}
.cena h1{font-size:clamp(2rem,5vw,3.4rem);line-height:1.05;margin:10px 0}.cena h1 span{color:#2456c8}
.h2c{font-size:clamp(1.7rem,3.6vw,2.6rem);line-height:1.1;margin:10px 0}
.cena .prof{color:#c2410c;font-weight:900;font-size:1.25rem;margin:0 0 12px}
.cena .sub{color:var(--suave);font-size:1.08rem;max-width:520px}
.c1{background:linear-gradient(180deg,#fff8ec,#f4f6fb)}
.c1-leg{transition:opacity .35s,transform .35s}.c1-leg.fora{opacity:0;transform:translateY(10px);position:absolute;pointer-events:none}
.c1-txt{position:relative}
.c1-pc{width:100%;max-height:72vh;overflow:visible}
.c1-pc g{transform-box:fill-box;transform-origin:center}
.rolar{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);font-weight:800;color:var(--suave);animation:pula 1.4s infinite;margin:0}
@keyframes pula{50%{transform:translate(-50%,6px)}}
.c2{background:#141a2e;color:#fff}.c2 .sub{color:#c9d2f2}.c2 .sup{color:#ffd76a}
.c2-lista{list-style:none;padding:0;margin:16px 0 0}.c2-lista li{border-left:6px solid var(--c);background:rgba(255,255,255,.06);border-radius:10px;padding:8px 12px;margin:8px 0;color:#c9d2f2;font-size:.95rem}
.c2-lista b{display:block;color:#fff}
.c2-anel{width:100%;max-height:70vh;overflow:visible}
.c2-anel .arco{transform-box:view-box;transform-origin:0 0}
.c2-anel .c2-centro text{fill:#fff}.c2-anel .c2-centro text+text{fill:#c9d2f2}
.c2-selo{position:absolute;left:50%;bottom:6vh;transform:translateX(-50%) scale(var(--s,0));background:#ffd76a;color:#141a2e;font-weight:900;border-radius:99px;padding:10px 22px;margin:0;white-space:nowrap}
.c3{background:#f4f6fb}.c3 .palco{grid-template-columns:.8fr 1.4fr}
.c3-passos{list-style:none;padding:0;margin:14px 0 0;counter-reset:p}
.c3-passos li{counter-increment:p;padding:7px 10px 7px 42px;border-radius:12px;position:relative;opacity:.38;transition:opacity .3s,background .3s}
.c3-passos li::before{content:attr(data-n);position:absolute;left:8px;top:8px;width:24px;height:24px;border-radius:50%;background:#cbd5e1;color:#fff;font-weight:900;display:grid;place-items:center;font-size:.8rem}
.c3-passos li span{display:none;color:var(--suave);font-size:.92rem}
.c3-passos li.atual{opacity:1;background:#fff;box-shadow:0 6px 18px rgba(20,26,46,.1)}.c3-passos li.atual::before{background:#2456c8}.c3-passos li.atual span{display:block}
.c3-passos li.feito{opacity:.75}.c3-passos li.feito::before{background:#0f8a5f;content:"✓"}
.c3-janela{background:#fff;border-radius:16px;box-shadow:0 24px 50px rgba(20,26,46,.22);overflow:hidden;border:1px solid var(--linha)}
.c3-barra{display:flex;align-items:center;gap:6px;padding:9px 12px;background:#1d2233;color:#cbd5e1;font-size:.8rem;font-weight:700}
.c3-barra i{width:11px;height:11px;border-radius:50%;background:#ef4444}.c3-barra i+i{background:#f59e0b}.c3-barra i+i+i{background:#22c55e}.c3-barra span{margin-left:8px}
.c3-telas{position:relative;aspect-ratio:1100/620;background:#eef1f8;overflow:hidden}
.c3-telas img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;will-change:transform}
.c4{background:linear-gradient(180deg,#f4f6fb,#fff8ec)}
.c4-escada{display:flex;flex-direction:column-reverse;gap:10px}
.deg{width:var(--w);margin-left:auto;background:#141a2e;color:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 8px 0 #c2410c;will-change:transform}
.deg b{color:#ffd76a;font-size:1.15rem;display:block}.deg span{font-size:.88rem;color:#c9d2f2}
@media (max-width:820px){
  .palco{grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:10px;padding:16px 16px 24px;align-content:start}
  .c3 .palco{grid-template-columns:1fr}
  .c1-pc{max-height:42vh}.c2-anel{max-height:34vh}
  .cena .sub{font-size:.98rem}.c2-lista li{padding:6px 10px;font-size:.85rem}
  .c3-passos li{display:none}.c3-passos li.atual{display:block}
  .deg{width:100%}
  .c2-selo{bottom:3vh;font-size:.9rem}
}
/* quem pediu menos movimento no aparelho vê tudo pronto, sem animação */
.sem-mov .cena{height:auto}.sem-mov .palco{position:static;height:auto;min-height:0;padding-top:40px;padding-bottom:40px}
.sem-mov .c3-telas{aspect-ratio:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;padding:8px}
.sem-mov .c3-telas img{position:static;height:auto;transform:none!important;opacity:1!important}
.sem-mov .c3-passos li{opacity:1;display:block}.sem-mov .c3-passos li span{display:block}.sem-mov .rolar{display:none}

.faixa-pdf{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;background:#141a2e;color:#fff;border-radius:18px;padding:18px 20px;margin-top:6px}
.faixa-pdf b{display:block;color:#ffd76a;font-size:1.1rem}.faixa-pdf span{color:#c9d2f2;font-size:.95rem}.faixa-pdf .bts{display:flex;gap:10px;flex-wrap:wrap}
</style></head><body>
<header class="topo"><a class="marca" href="./">Portal da Informática<small>Professor Welington Laignier</small></a><a class="voltar" href="./">← Voltar ao portal</a></header>
<!-- ===== HISTÓRIA EM ROLAGEM (as peças se encaixam enquanto a página rola) ===== -->
<div class="cena c1" data-cena="c1">
  <div class="palco">
    <div class="c1-txt">
      <p class="sup">O que se aprende aqui</p>
      <h1>A <span>Sala de Informática</span> por dentro</h1>
      <p class="prof">Prof. Welington Laignier</p>
      <p class="sub c1-leg" data-de="0" data-ate=".45">Role a página devagar: o computador vai se montar e contar a história do material.</p>
      <p class="sub c1-leg" data-de=".45" data-ate="1.1">Aqui, cada aluno do 6º ao 9º ano aprende Computação no <b>Portal da Informática</b>, um material digital criado pelo professor.</p>
    </div>
    <svg class="c1-pc" viewBox="0 0 520 420" aria-hidden="true">
      <defs><linearGradient id="tela" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
      <g class="pc-monitor"><rect x="70" y="20" width="380" height="250" rx="18" fill="#0f172a"/><rect x="86" y="36" width="348" height="210" rx="8" fill="#111827"/>
        <g class="pc-tela"><rect x="86" y="36" width="348" height="210" rx="8" fill="url(#tela)"/>
          <text x="260" y="122" text-anchor="middle" fill="#ffd76a" font-size="17" font-weight="800">Portal da Informática</text>
          <text x="260" y="150" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">Prof. Welington Laignier</text>
          <rect x="170" y="172" width="180" height="30" rx="15" fill="#ffd76a"/><text x="260" y="192" text-anchor="middle" fill="#141a2e" font-size="13" font-weight="800">Começar a missão ▶</text></g></g>
      <g class="pc-pe"><rect x="235" y="270" width="50" height="46" fill="#334155"/><rect x="185" y="312" width="150" height="14" rx="7" fill="#475569"/></g>
      <g class="pc-teclado"><rect x="110" y="344" width="250" height="56" rx="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
        <g fill="#94a3b8"><rect x="124" y="356" width="222" height="8" rx="3"/><rect x="124" y="370" width="222" height="8" rx="3"/><rect x="160" y="384" width="150" height="8" rx="3"/></g></g>
      <g class="pc-mouse"><rect x="392" y="346" width="38" height="56" rx="19" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/><line x1="411" y1="350" x2="411" y2="368" stroke="#94a3b8" stroke-width="3"/></g>
      <g class="pc-faisca" fill="#ffd76a"><circle cx="40" cy="60" r="6"/><circle cx="480" cy="90" r="5"/><circle cx="470" cy="20" r="3"/><circle cx="30" cy="200" r="4"/></g>
    </svg>
    <p class="rolar" aria-hidden="true">role ↓</p>
  </div>
</div>

<div class="cena c2" data-cena="c2">
  <div class="palco">
    <div class="c2-txt">
      <p class="sup">A BNCC Computação</p>
      <h2 class="h2c">Três peças que se encaixam</h2>
      <p class="sub">A BNCC Computação divide o que o aluno precisa aprender em <b>três eixos</b>. No material, os três se encaixam ao longo dos anos.</p>
      <ul class="c2-lista">
        <li style="--c:#2456c8"><b>Pensamento Computacional</b> resolver problemas como quem programa</li>
        <li style="--c:#0f8a5f"><b>Mundo Digital</b> como máquinas e redes funcionam</li>
        <li style="--c:#7a3cc8"><b>Cultura Digital</b> viver bem e com ética na tecnologia</li>
      </ul>
    </div>
    <svg class="c2-anel" viewBox="-160 -160 320 320" aria-label="Os três eixos formando um círculo completo: 42 de 42 habilidades">
      <g class="arco a1"><path d="M0 -118 A118 118 0 0 1 102.2 59" fill="none" stroke="#2456c8" stroke-width="40" stroke-linecap="butt"/><text x="78" y="-70" fill="#2456c8" font-size="13" font-weight="800" text-anchor="start">18</text></g>
      <g class="arco a2"><path d="M102.2 59 A118 118 0 0 1 -102.2 59" fill="none" stroke="#0f8a5f" stroke-width="40"/><text x="0" y="150" fill="#0f8a5f" font-size="13" font-weight="800" text-anchor="middle">8</text></g>
      <g class="arco a3"><path d="M-102.2 59 A118 118 0 0 1 0 -118" fill="none" stroke="#7a3cc8" stroke-width="40"/><text x="-80" y="-70" fill="#7a3cc8" font-size="13" font-weight="800" text-anchor="end">16</text></g>
      <g class="c2-centro"><text class="c2-num" x="0" y="10" text-anchor="middle" font-size="62" font-weight="900" fill="#141a2e">0</text>
        <text x="0" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5470">de 42 habilidades</text></g>
    </svg>
    <p class="c2-selo">42 de 42 habilidades · 3 de 3 eixos ✓</p>
  </div>
</div>

<div class="cena c3" data-cena="c3">
  <div class="palco">
    <div class="c3-txt">
      <p class="sup">Por dentro de uma missão</p>
      <h2 class="h2c">Uma aula, passo a passo</h2>
      <ol class="c3-passos">
        <li data-n="1"><b>🔁 Lembra?</b><span>A aula começa com um “show” de perguntas das missões passadas.</span></li>
        <li data-n="2"><b>💡 Para começar</b><span>Explicação curta, com figuras e termos explicados por completo.</span></li>
        <li data-n="3"><b>🖱️ Mão na massa</b><span>Simuladores realistas: aqui, um editor de vídeo no Windows 11.</span></li>
        <li data-n="4"><b>🤖 Programar</b><span>Desafios de lógica com blocos e o robô Bit para ajudar.</span></li>
        <li data-n="5"><b>♾️ Laboratório sem fim</b><span>Joguinho de acertos seguidos para quem termina antes.</span></li>
        <li data-n="6"><b>🛠️ Onde eu uso isso?</b><span>O conteúdo ligado a situações da vida real.</span></li>
        <li data-n="7"><b>👥 Projetos</b><span>Trabalhos em equipe avaliados por critérios claros.</span></li>
      </ol>
    </div>
    <div class="c3-janela"><div class="c3-barra"><i></i><i></i><i></i><span>Portal da Informática</span></div>
      <div class="c3-telas">
        <img src="material/img/lembra.webp" alt="Tela real do portal: o Show do Lembra? com uma pergunta de verdadeiro ou falso" loading="lazy">
        <img src="material/img/comecar.webp" alt="Tela real do portal: o Para começar com uma tabela de dicas para gravar vídeo" loading="lazy">
        <img src="material/img/simulador.webp" alt="Tela real do simulador de editor de vídeo, com linha do tempo e metas" loading="lazy">
        <img src="material/img/programar.webp" alt="Tela real de um desafio de programação: levar o robô até a estrela usando repita" loading="lazy">
        <img src="material/img/laboratorio.webp" alt="Tela real do Laboratório sem fim, com contador de acertos e recorde" loading="lazy">
        <img src="material/img/onde-uso.webp" alt="Tela real do Onde eu uso isso?, ligando problemas de gravação às soluções" loading="lazy">
        <img src="material/img/projeto.webp" alt="Tela real de uma atividade de projeto com a tabela de critérios da avaliação" loading="lazy">
      </div></div>
  </div>
</div>

<div class="cena c4" data-cena="c4">
  <div class="palco">
    <div class="c4-txt">
      <p class="sup">Do 6º ao 9º ano</p>
      <h2 class="h2c">Um degrau de cada vez</h2>
      <p class="sub">Cada ano tem <b>4 bimestres</b> de missões. O que o aluno aprende volta nos anos seguintes, num nível maior: é o ensino <b>em espiral</b>.</p>
    </div>
    <div class="c4-escada">
      <div class="deg" style="--i:0;--w:42%"><b>6º ano</b><span>conhecer o computador · lógica · programar em blocos · dados e redes</span></div>
      <div class="deg" style="--i:1;--w:58%"><b>7º ano</b><span>listas e registros · grafos · protocolos e segurança · criar produtos digitais</span></div>
      <div class="deg" style="--i:2;--w:74%"><b>8º ano</b><span>recursão e busca · internet e nuvem · redes sociais · privacidade</span></div>
      <div class="deg" style="--i:3;--w:90%"><b>9º ano</b><span>árvores e autômatos · malwares e criptografia · sociedade · direitos autorais e fake news</span></div>
    </div>
  </div>
</div>

<main>
<section class="faixa-pdf"><div><b>42 de 42 habilidades · 3 de 3 eixos da BNCC Computação</b><span>O relatório completo, habilidade por habilidade, está em PDF.</span></div>
  <div class="bts"><a class="bt pdf" href="material/Cobertura-BNCC-Computacao-Portal-da-Informatica.pdf" download>⬇️ Baixar o relatório em PDF</a><a class="bt sec" href="#anos">Ver habilidade por habilidade</a></div></section>

<h2>O material</h2>
<p class="lead">As aulas de Informática usam o <b>Portal da Informática</b>, um material digital criado pelo Prof. Welington Laignier. Cada série tem uma apostila interativa por bimestre, dividida em <b>missões</b> (as aulas), com explicação, vídeo, simuladores e atividades corrigidas na hora. O currículo de 2027 tem 4 bimestres para cada ano, do 6º ao 9º.</p>
<div class="nums">
  <div class="num"><b>42/42</b><span>habilidades da BNCC Computação dos Anos Finais trabalhadas</span></div>
  <div class="num"><b>3/3</b><span>eixos: Pensamento Computacional, Mundo Digital e Cultura Digital</span></div>
  <div class="num"><b>${nMis}</b><span>missões em 16 bimestres, além das revisões e recuperações</span></div>
  <div class="num"><b>${(vinc / 42).toFixed(1).replace('.', ',')}</b><span>missões, em média, para cada habilidade</span></div>
</div>
<div class="tab"><table><thead><tr><th>Ano</th>${['PC', 'MD', 'CD'].map(k => `<th style="color:${EIXO[k][1]}">${EIXO[k][0]}</th>`).join('')}<th>Total</th><th>Trabalhadas</th></tr></thead><tbody>
${anos.map(a => `<tr><td><b>${a}º ano</b></td>${['PC', 'MD', 'CD'].map(k => `<td>${cont(a, k)}</td>`).join('')}<td><b>${tot(a)}</b></td><td class="ok">${tot(a)} de ${tot(a)} ✓</td></tr>`).join('')}
<tr class="tot"><td>Total</td>${['PC', 'MD', 'CD'].map(k => `<td>${codes.filter(c => H[c][0] === k).length}</td>`).join('')}<td>42</td><td class="ok">42 de 42 ✓</td></tr></tbody></table></div>

<h2>O que é a BNCC Computação</h2>
<p class="lead">É o complemento à Base Nacional Comum Curricular que define o que os estudantes devem aprender de Computação. Foi aprovada no <b>Parecer CNE/CEB nº 2/2022</b> e instituída pela <b>Resolução CNE/CEB nº 1/2022</b>. Ela se organiza em três eixos:</p>
<div class="eixos">
  <div class="e3" style="--c:${EIXO.PC[1]};--b:${EIXO.PC[2]}"><h3>${icone('PC')}Pensamento Computacional</h3><p>Resolver problemas como quem programa: algoritmos, decomposição, generalização, listas, grafos, recursão e autômatos.</p>${anos.map(a => `<p class="ex"><b>${a}º ano:</b> ${ex(a, 'PC')}</p>`).join('')}</div>
  <div class="e3" style="--c:${EIXO.MD[1]};--b:${EIXO.MD[2]}"><h3>${icone('MD')}Mundo Digital</h3><p>Como máquinas e redes funcionam: arquivos e dados, pacotes, protocolos, internet, nuvem, segurança e criptografia.</p>${anos.map(a => `<p class="ex"><b>${a}º ano:</b> ${ex(a, 'MD')}</p>`).join('')}</div>
  <div class="e3" style="--c:${EIXO.CD[1]};--b:${EIXO.CD[2]}"><h3>${icone('CD')}Cultura Digital</h3><p>Viver bem com a tecnologia: ética e respeito na rede, cyberbullying, privacidade, fontes confiáveis, direitos autorais e consumo consciente.</p>${anos.map(a => `<p class="ex"><b>${a}º ano:</b> ${ex(a, 'CD')}</p>`).join('')}</div>
</div>
<p class="nota">A “cultura digital” também é a <b>Competência Geral 5</b> da BNCC (compreender, utilizar e criar tecnologias digitais de forma crítica, significativa, reflexiva e ética).</p>

<h2 id="anos">Habilidade por habilidade</h2>
<p class="lead">Toque em cada ano para ver todas as habilidades, o que cada uma pede (em resumo) e em quais missões ela é trabalhada.</p>
${anos.map(ano).join('')}

<h2>Como o material trabalha cada habilidade</h2>
<div class="recs">
  <div class="rec"><h3>Explicação completa</h3><p>Linguagem adequada à idade, termos técnicos explicados por completo, ilustrações com papel pedagógico e a seção “Onde eu uso isso?”.</p></div>
  <div class="rec"><h3>Vídeo de cada missão</h3><p>Animação narrada no estilo problema → solução, projetada em sala e disponível no portal para quem estuda em casa.</p></div>
  <div class="rec"><h3>Simuladores</h3><p>A prática no computador é feita em simuladores realistas dentro do portal, com correção automática.</p></div>
  <div class="rec"><h3>Três níveis de atividade</h3><p>Básico (o essencial), Desafio e Turbo (para aprofundar), com correção na hora e placar da turma.</p></div>
  <div class="rec"><h3>Inclusão</h3><p>A Trilha Passo a Passo tem as mesmas missões em versão mais simples, para alunos com PEI ou com dificuldade.</p></div>
  <div class="rec"><h3>Avaliação e acompanhamento</h3><p>Revisão, prova e recuperação no próprio portal, cobrando só o que foi explicado, e o registro do progresso de cada aluno.</p></div>
</div>
<div class="caixa"><b>Em uma frase:</b> o aluno que percorre o material do 6º ao 9º ano passa por todas as habilidades da BNCC Computação dos Anos Finais, com conteúdo explicado, prática e avaliação dentro do próprio portal.</div>
<p class="nota">Levantamento feito em 22/11/2026 a partir dos roteiros de aula do portal (currículo de 2027). Os resumos das habilidades estão em linguagem simples; o texto oficial completo está no anexo do Parecer CNE/CEB nº 2/2022. Esta página não mostra nenhum dado de aluno.</p>
</main>
<footer>Portal da Informática · <b>Prof. Welington Laignier</b> · EMEF Juscelino Kubitschek · Curionópolis – PA</footer>
<script>(function () {
  // 🎬 história em rolagem: cada cena "gruda" na tela e as peças se mexem conforme a rolagem (p vai de 0 a 1)
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lim = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const seg = (p, a, b) => ease(lim((p - a) / (b - a)));
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const C = {
    c1(el, p) {
      const voa = (s, a, b, dx, dy, rot) => { const t = seg(p, a, b), g = $(s, el); g.style.transform = \`translate(\${(1 - t) * dx}px,\${(1 - t) * dy}px) rotate(\${(1 - t) * rot}deg)\`; g.style.opacity = .15 + .85 * t; };
      voa(".pc-monitor", 0, .3, 0, -260, -8); voa(".pc-pe", .12, .38, 0, 220, 0);
      voa(".pc-teclado", .25, .55, -420, 120, -20); voa(".pc-mouse", .35, .62, 380, 160, 30);
      const tl = $(".pc-tela", el); tl.style.opacity = seg(p, .6, .78);
      $(".pc-faisca", el).style.opacity = seg(p, .75, .9);
      $$(".c1-leg", el).forEach(x => x.classList.toggle("fora", !(p >= +x.dataset.de && p < +x.dataset.ate)));
      $(".rolar", el).style.opacity = 1 - seg(p, 0, .15);
    },
    c2(el, p) {
      [[".a1", 0, 220, -60, 0], [".a2", .12, 0, 240, 0], [".a3", .24, -240, -40, 0]].forEach(([s, a, dx, dy]) => {
        const t = seg(p, a, a + .32), g = $(s, el); g.style.transform = \`translate(\${(1 - t) * dx}px,\${(1 - t) * dy}px) rotate(\${(1 - t) * 40}deg)\`; g.style.opacity = t; });
      const n = Math.round(42 * seg(p, .55, .82)); $(".c2-num", el).textContent = n;
      $$(".c2-lista li", el).forEach((li, i) => { const t = seg(p, i * .12, i * .12 + .3); li.style.opacity = t; li.style.transform = \`translateX(\${(1 - t) * -30}px)\`; });
      $(".c2-selo", el).style.setProperty("--s", seg(p, .84, .95));
    },
    c3(el, p) {
      const imgs = $$(".c3-telas img", el), lis = $$(".c3-passos li", el), n = imgs.length, k = p * (n - .2);
      imgs.forEach((im, i) => {
        const t = lim(k - i + 1);               // 0 = ainda fora (embaixo), 1 = no lugar
        const sai = lim(k - i - .15) ;           // depois vai para trás, menor
        const e = ease(t);
        im.style.transform = \`translateY(\${(1 - e) * 105}%) rotate(\${(1 - e) * 4}deg) scale(\${1 - Math.min(sai, 1) * .06})\`;
        im.style.opacity = i === 0 ? 1 : e > 0 ? 1 : 0; im.style.filter = sai > 0 && i < n - 1 ? \`brightness(\${1 - Math.min(sai, 1) * .25})\` : "";
        im.style.zIndex = i;
      });
      const at = lim(Math.floor(k), 0, n - 1);
      lis.forEach((li, i) => { li.classList.toggle("atual", i === at); li.classList.toggle("feito", i < at); });
    },
    c4(el, p) {
      $$(".deg", el).forEach((d, i) => { const t = seg(p, i * .17, i * .17 + .35); d.style.transform = \`translateX(\${(1 - t) * 110}%)\`; d.style.opacity = t; });
    }
  };
  const cenas = $$("[data-cena]");
  if (reduz) { document.documentElement.classList.add("sem-mov"); cenas.forEach(el => C[el.dataset.cena](el, 1)); return; }
  let pedindo = false;
  const atualizar = () => { pedindo = false; const vh = innerHeight;
    cenas.forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < -vh || r.top > 2 * vh) return; const p = lim(-r.top / (r.height - vh)); C[el.dataset.cena](el, p); }); };
  addEventListener("scroll", () => { if (!pedindo) { pedindo = true; requestAnimationFrame(atualizar); } }, { passive: true });
  addEventListener("resize", atualizar); atualizar();
})();
</script>
</body></html>`;
fs.writeFileSync('/home/claude/portal-da-informatica/material.html', html);
console.log('ok', nMis, vinc);

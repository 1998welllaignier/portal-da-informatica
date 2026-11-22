// Gera material.html (página pública de transparência) a partir dos mesmos dados do PDF
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
<title>O material da Sala de Informática · Prof. Welington Laignier</title>
<meta name="description" content="Transparência pedagógica: o material de Informática do Prof. Welington Laignier, do 6º ao 9º ano, e como ele trabalha as 42 habilidades e os 3 eixos da BNCC Computação.">
<link rel="icon" href="img/icone.svg">
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
</style></head><body>
<header class="topo"><a class="marca" href="./">Portal da Informática<small>Professor Welington Laignier</small></a><a class="voltar" href="./">← Voltar ao portal</a></header>
<main>
<section class="hero">
  <p class="sup">Transparência pedagógica</p>
  <h1>O material da <span>Sala de Informática</span></h1>
  <p class="prof">Prof. Welington Laignier</p>
  <p class="sub">O que os alunos do 6º ao 9º ano estudam nas aulas de Informática, com qual material, e como ele cumpre a BNCC Computação. Tudo aberto para famílias, escola e comunidade.</p>
  <span class="selo">42 de 42 habilidades · 3 de 3 eixos da BNCC Computação</span>
  <div class="bts"><a class="bt pdf" href="material/Cobertura-BNCC-Computacao-Portal-da-Informatica.pdf" download>⬇️ Baixar o relatório em PDF</a><a class="bt sec" href="#anos">Ver habilidade por habilidade</a></div>
</section>

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
</body></html>`;
fs.writeFileSync('/home/claude/portal-da-informatica/material.html', html);
console.log('ok', nMis, vinc);

// Gera o PDF "Cobertura da BNCC Computação" do Portal da Informática (currículo de 2027)
const fs = require('fs');
const { chromium } = require('playwright');
const map = require('./map.json').filter(x => /2027/.test(x.id) && !/trilha/.test(x.id));

const EIXO = { PC: ['Pensamento Computacional', '#2456c8', '#e8efff'], MD: ['Mundo Digital', '#0f8a5f', '#e3f6ee'], CD: ['Cultura Digital', '#7a3cc8', '#f1e9fd'] };
// eixo e resumo de cada habilidade (resumo em linguagem simples, feito a partir do texto oficial)
const H = {
  EF06CO01: ['PC', 'Classificar informações em grupos e reconhecer cada grupo como um tipo de dado.'],
  EF06CO02: ['PC', 'Criar algoritmos com sequência, repetição e seleção (se… então…) numa linguagem de programação.'],
  EF06CO03: ['PC', 'Descrever com precisão a solução de um problema e construir o programa que a executa.'],
  EF06CO04: ['PC', 'Resolver problemas dividindo-os em partes menores (decomposição) e automatizar a solução.'],
  EF06CO05: ['PC', 'Identificar as entradas necessárias e as saídas esperadas na resolução de um problema.'],
  EF06CO06: ['PC', 'Comparar casos de um mesmo problema, achar o que têm em comum e generalizar a solução.'],
  EF06CO07: ['MD', 'Entender como a informação é quebrada em pacotes, transmitida e remontada no destino.'],
  EF06CO08: ['MD', 'Armazenar, organizar, compactar e recuperar arquivos, documentos e metadados.'],
  EF06CO09: ['CD', 'Comunicar-se no ambiente digital com conduta e linguagem éticas e respeitosas.'],
  EF06CO10: ['CD', 'Analisar criticamente o consumo de tecnologia: da produção dos recursos ao descarte.'],
  EF07CO01: ['PC', 'Usar registros e matrizes para organizar informações e automatizá-las num programa.'],
  EF07CO02: ['PC', 'Analisar programas para encontrar e corrigir erros (depuração).'],
  EF07CO03: ['PC', 'Construir soluções computacionais para problemas de várias áreas, escolhendo estruturas e técnicas adequadas.'],
  EF07CO04: ['PC', 'Explorar propriedades básicas de grafos (pontos e ligações).'],
  EF07CO05: ['PC', 'Criar algoritmos com decomposição e reaproveitamento (reúso), de forma colaborativa.'],
  EF07CO06: ['MD', 'Compreender o papel dos protocolos na transmissão de dados.'],
  EF07CO07: ['MD', 'Identificar problemas de segurança cibernética e experimentar formas de proteção.'],
  EF07CO08: ['CD', 'Demonstrar empatia diante de opiniões diferentes na internet.'],
  EF07CO09: ['CD', 'Reconhecer e debater o cyberbullying.'],
  EF07CO10: ['CD', 'Identificar os impactos ambientais do descarte de eletrônicos e sua relação com a sustentabilidade.'],
  EF07CO11: ['CD', 'Criar, documentar e publicar produtos digitais (vídeos, podcasts, sites), sozinho ou em grupo.'],
  EF08CO01: ['PC', 'Resolver problemas com a técnica de recursão e automatizar a solução.'],
  EF08CO02: ['PC', 'Usar listas para organizar as informações de um problema e automatizá-las.'],
  EF08CO03: ['PC', 'Usar algoritmos clássicos sobre listas (buscar e ordenar).'],
  EF08CO04: ['PC', 'Construir soluções computacionais para problemas de várias áreas, individualmente e em grupo.'],
  EF08CO05: ['MD', 'Compreender paralelismo, concorrência e armazenamento e processamento distribuídos (nuvem).'],
  EF08CO06: ['MD', 'Entender a estrutura e o funcionamento da internet.'],
  EF08CO07: ['CD', 'Compartilhar informações nas redes sociais de forma responsável, entendendo como elas funcionam.'],
  EF08CO08: ['CD', 'Distinguir os dados pessoais pedidos em espaços digitais e os riscos envolvidos.'],
  EF08CO09: ['CD', 'Analisar criticamente os termos de uso das redes sociais e de outras plataformas.'],
  EF08CO10: ['CD', 'Discutir segurança e privacidade no uso dos ambientes virtuais.'],
  EF08CO11: ['CD', 'Avaliar precisão, relevância e vieses das fontes de informação na internet.'],
  EF09CO01: ['PC', 'Usar árvores e grafos para representar informações de um problema e automatizar a solução.'],
  EF09CO02: ['PC', 'Construir soluções computacionais para problemas de várias áreas, individualmente e em grupo.'],
  EF09CO03: ['PC', 'Usar autômatos (máquinas de estados) para descrever comportamentos e automatizá-los.'],
  EF09CO04: ['MD', 'Compreender como funcionam os malwares e outros ataques cibernéticos.'],
  EF09CO05: ['MD', 'Analisar técnicas de criptografia para guardar e transmitir dados.'],
  EF09CO06: ['CD', 'Analisar problemas sociais da cidade e do estado em ambientes digitais e propor soluções.'],
  EF09CO07: ['CD', 'Avaliar impactos políticos, socioambientais e culturais das tecnologias digitais.'],
  EF09CO08: ['CD', 'Discutir como a distribuição desigual de recursos de computação afeta a equidade e o acesso.'],
  EF09CO09: ['CD', 'Criar e usar conteúdo digital respeitando direitos autorais e questões éticas.'],
  EF09CO10: ['CD', 'Avaliar a veracidade, a credibilidade e a relevância da informação em diferentes formatos.']
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cov = {}; map.forEach(x => x.cods.forEach(c => (cov[c] = cov[c] || []).push(x)));
const codes = Object.keys(H);
const faltam = codes.filter(c => !cov[c]); if (faltam.length) throw new Error('sem missão: ' + faltam);
const nMis = map.filter(x => /^m\d$/.test(x.mid)).length;
const vinculos = codes.reduce((s, c) => s + cov[c].length, 0);
const misComCod = new Set(map.filter(x => x.cods.length).map(x => x.id + x.mid)).size;
const tit = t => t.replace(/^Missão \d+ – /, '');
const bim = id => id.match(/(\d)ano-2027-(\d)bim/);

const icone = k => ({
  PC: '<svg viewBox="0 0 24 24"><path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  MD: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  CD: '<svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="16.5" cy="9" r="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M2.5 20c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M12.5 16.2c1-.8 2.4-1.2 4-1.2 2.7 0 4.9 1.8 5.5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'
})[k];
const pill = k => `<span class="pill" style="--c:${EIXO[k][1]};--b:${EIXO[k][2]}">${icone(k)}${EIXO[k][0]}</span>`;

// grade ano × eixo
const anos = ['6', '7', '8', '9'];
const cont = (a, k) => codes.filter(c => c.startsWith('EF0' + a) && H[c][0] === k).length;
const grade = `<table class="grade"><thead><tr><th>Ano</th>${['PC', 'MD', 'CD'].map(k => `<th style="color:${EIXO[k][1]}">${EIXO[k][0]}</th>`).join('')}<th>Total</th><th>Atendidas</th></tr></thead><tbody>
${anos.map(a => `<tr><td><b>${a}º ano</b></td>${['PC', 'MD', 'CD'].map(k => `<td>${cont(a, k)}</td>`).join('')}<td><b>${codes.filter(c => c.startsWith('EF0' + a)).length}</b></td><td class="ok">${codes.filter(c => c.startsWith('EF0' + a)).length} de ${codes.filter(c => c.startsWith('EF0' + a)).length} ✓</td></tr>`).join('')}
<tr class="tot"><td><b>Total</b></td>${['PC', 'MD', 'CD'].map(k => `<td><b>${codes.filter(c => H[c][0] === k).length}</b></td>`).join('')}<td><b>42</b></td><td class="ok"><b>42 de 42 ✓</b></td></tr></tbody></table>`;

const BIMT = { 6: ['Conhecer o computador', 'Lógica e algoritmos', 'Programar em blocos', 'Dados, redes e consumo'] };
const secaoAno = a => {
  const cs = codes.filter(c => c.startsWith('EF0' + a));
  return `<section class="ano"><div class="ano-cab"><span class="ano-n">${a}º</span><div><h2>${a}º ano</h2><p>${cs.length} habilidades · ${['PC', 'MD', 'CD'].map(k => `${cont(a, k)} de ${EIXO[k][0]}`).join(' · ')}</p></div></div>
  <table class="hab"><thead><tr><th style="width:16%">Habilidade</th><th style="width:31%">O que ela pede (em resumo)</th><th>Onde o material trabalha</th></tr></thead><tbody>
  ${cs.map(c => { const k = H[c][0]; return `<tr style="--c:${EIXO[k][1]};--b:${EIXO[k][2]}"><td class="cod"><b>${c}</b>${pill(k)}</td><td>${esc(H[c][1])}</td><td><ul>${cov[c].map(x => { const b = bim(x.id); return `<li><span class="tag">${b[2]}º bim · ${x.mid.toUpperCase()}</span> ${esc(tit(x.titulo))}${/Extra/.test(x.titulo) ? '' : ''}</li>`; }).join('')}</ul></td></tr>`; }).join('')}
  </tbody></table></section>`;
};

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Cobertura da BNCC Computação — Portal da Informática</title><style>
@page { size: A4; margin: 16mm 14mm 18mm; }
* { box-sizing: border-box; }
body { font-family: Inter, 'DejaVu Sans', sans-serif; color: #1c2333; font-size: 10.2pt; line-height: 1.45; margin: 0; }
h1, h2, h3 { font-family: 'Inter Display', Inter, sans-serif; line-height: 1.15; margin: 0; }
.capa { height: 263mm; display: flex; flex-direction: column; justify-content: space-between; padding: 14mm 12mm; border-radius: 6mm;
  background: radial-gradient(circle at 85% 12%, #3a63d8 0, transparent 45%), radial-gradient(circle at 10% 95%, #7a3cc8 0, transparent 42%), #141a2e; color: #fff; page-break-after: always; position: relative; overflow: hidden; }
.capa .sup { letter-spacing: .18em; text-transform: uppercase; font-size: 9pt; color: #ffd76a; font-weight: 700; }
.capa h1 { font-size: 34pt; font-weight: 800; margin-top: 8mm; }
.capa h1 span { color: #ffd76a; }
.capa .sub { font-size: 13pt; color: #d7defa; margin-top: 4mm; max-width: 150mm; }
.capa .eixos { display: flex; gap: 4mm; margin-top: 12mm; }
.capa .eixo { flex: 1; border-radius: 4mm; padding: 5mm; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18); }
.capa .eixo svg { width: 9mm; height: 9mm; }
.capa .eixo b { display: block; font-size: 12pt; margin-top: 2mm; }
.capa .eixo small { color: #c9d2f2; }
.capa .selo { display: inline-flex; align-items: center; gap: 4mm; background: #ffd76a; color: #141a2e; border-radius: 99px; padding: 3mm 7mm; font-weight: 800; font-size: 15pt; margin-top: 10mm; }
.capa .autor { border-top: 1px solid rgba(255,255,255,.2); padding-top: 6mm; }
.capa .autor .nome { font-size: 17pt; font-weight: 800; color: #ffd76a; }
.capa .autor p { margin: 1mm 0 0; color: #d7defa; }
.pag { page-break-before: always; }
h2.sec { font-size: 18pt; margin: 0 0 3mm; color: #141a2e; }
h2.sec::after { content: ""; display: block; width: 22mm; height: 1.4mm; background: linear-gradient(90deg, #2456c8, #0f8a5f, #7a3cc8); border-radius: 1mm; margin-top: 2mm; }
.lead { font-size: 11pt; color: #3a4460; }
.numeros { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; margin: 6mm 0; }
.num { border-radius: 3mm; padding: 4mm; background: #f3f6fd; border: 1px solid #dde4f5; }
.num b { display: block; font-size: 22pt; font-family: 'Inter Display', Inter; color: #2456c8; line-height: 1; }
.num span { font-size: 8.8pt; color: #4a5470; }
.caixa { border-radius: 3mm; padding: 4mm 5mm; margin: 4mm 0; background: #fff8e1; border: 1px solid #f2d27a; }
.caixa.verde { background: #e9f8f0; border-color: #9fd9bd; }
.eixos3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; margin: 4mm 0; }
.e3 { border-radius: 3mm; padding: 4mm; border-top: 1.6mm solid var(--c); background: var(--b); }
.e3 h3 { color: var(--c); font-size: 11.5pt; display: flex; align-items: center; gap: 2mm; }
.e3 svg { width: 6mm; height: 6mm; }
.e3 p { margin: 2mm 0 0; font-size: 9.6pt; }
.e3 { padding: 5mm; }
.e3 p.ex { font-size: 9pt; margin-top: 2.2mm; }
table { border-collapse: collapse; width: 100%; }
.grade th, .grade td { border-bottom: 1px solid #e1e6f2; padding: 2.4mm 3mm; text-align: center; }
.grade th { font-size: 9pt; background: #f3f6fd; }
.grade td:first-child, .grade th:first-child { text-align: left; }
.grade .ok { color: #0f8a5f; font-weight: 700; }
.grade .tot td { background: #f8fafc; border-top: 2px solid #c8d2ea; }
.ano { page-break-before: always; }
.ano-cab { display: flex; align-items: center; gap: 4mm; margin-bottom: 4mm; }
.ano-n { width: 15mm; height: 15mm; border-radius: 4mm; background: #141a2e; color: #ffd76a; display: grid; place-items: center; font-weight: 800; font-size: 17pt; font-family: 'Inter Display'; }
.ano-cab h2 { font-size: 18pt; }
.ano-cab p { margin: 1mm 0 0; color: #4a5470; }
.hab th { background: #141a2e; color: #fff; font-size: 8.8pt; text-align: left; padding: 2mm 2.5mm; }
.hab td { vertical-align: top; padding: 2.4mm 2.5mm; border-bottom: 1px solid #e1e6f2; font-size: 9pt; }
.hab tr { page-break-inside: avoid; }
.hab td.cod { border-left: 1.4mm solid var(--c); background: var(--b); }
.hab td.cod b { display: block; font-size: 9.6pt; margin-bottom: 1.5mm; }
.pill { display: inline-flex; align-items: center; gap: 1mm; font-size: 7.4pt; font-weight: 700; color: var(--c); background: #fff; border: 1px solid var(--c); border-radius: 99px; padding: .3mm 2mm .3mm 1.2mm; white-space: nowrap; }
.pill svg { width: 3.4mm; height: 3.4mm; }
.hab ul { margin: 0; padding: 0; list-style: none; }
.hab li { margin: 0 0 1mm; }
.tag { display: inline-block; font-size: 7.6pt; font-weight: 700; background: #eef1f8; color: #34405e; border-radius: 1.2mm; padding: .2mm 1.6mm; margin-right: 1mm; }
.recursos { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm; margin-top: 4mm; }
.rec { border: 1px solid #dde4f5; border-radius: 3mm; padding: 3.5mm 4mm; }
.rec h3 { font-size: 10.8pt; color: #2456c8; margin-bottom: 1mm; }
.rec p { margin: 0; font-size: 9.2pt; }
.nota { font-size: 8.6pt; color: #4a5470; }
.nota li { margin: 1mm 0; }
</style></head><body>

<section class="capa">
  <div>
    <div class="sup">Portal da Informática · Relatório pedagógico</div>
    <h1>Cobertura da <span>BNCC Computação</span> no material de Informática</h1>
    <p class="sub">Ensino Fundamental — Anos Finais (6º ao 9º ano) · Currículo de 2027, organizado em 4 bimestres por ano</p>
    <div class="eixos">${['PC', 'MD', 'CD'].map(k => `<div class="eixo" style="color:#fff">${icone(k)}<b>${EIXO[k][0]}</b><small>${codes.filter(c => H[c][0] === k).length} habilidades atendidas</small></div>`).join('')}</div>
    <div class="selo">42 de 42 habilidades · 3 de 3 eixos</div>
  </div>
  <div class="autor"><div class="nome">Prof. Welington Soares Laignier</div><p>Professor de Informática · autor do Portal da Informática</p><p>EMEF Juscelino Kubitschek · Curionópolis – PA · novembro de 2026</p></div>
</section>

<section>
  <h2 class="sec">Resumo</h2>
  <p class="lead">O material de Informática do Portal da Informática, do 6º ao 9º ano, trabalha <b>todas as 42 habilidades</b> da BNCC Computação previstas para os Anos Finais, distribuídas pelos <b>três eixos</b> da norma. Nenhuma habilidade ficou de fora: cada uma tem pelo menos uma missão inteira dedicada a ela, com explicação, atividades e correção.</p>
  <div class="numeros">
    <div class="num"><b>42/42</b><span>habilidades da BNCC Computação atendidas (6º ao 9º ano)</span></div>
    <div class="num"><b>3/3</b><span>eixos: Pensamento Computacional, Mundo Digital e Cultura Digital</span></div>
    <div class="num"><b>${nMis}</b><span>missões (aulas) em 16 bimestres, além das revisões e recuperações</span></div>
    <div class="num"><b>${vinculos}</b><span>ligações entre habilidades e missões (média de ${(vinculos / 42).toFixed(1).replace('.', ',')} missões por habilidade)</span></div>
  </div>
  ${grade}
  <div class="caixa verde"><b>Em uma frase:</b> o aluno que percorre o material do 6º ao 9º ano passa por todas as habilidades da BNCC Computação dos Anos Finais, com conteúdo explicado, prática e avaliação dentro do próprio portal.</div>

  <h2 class="sec pag">O que é a BNCC Computação</h2>
  <p>A BNCC Computação é o <b>complemento à Base Nacional Comum Curricular</b> que define o que os estudantes devem aprender de Computação na Educação Básica. Foi aprovada pelo Conselho Nacional de Educação no <b>Parecer CNE/CEB nº 2/2022</b> e instituída pela <b>Resolução CNE/CEB nº 1/2022</b>. Ela organiza as aprendizagens em três eixos:</p>
  <div class="eixos3">
    <div class="e3" style="--c:${EIXO.PC[1]};--b:${EIXO.PC[2]}"><h3>${icone('PC')}Pensamento Computacional</h3><p>Resolver problemas como quem programa: algoritmos, sequência, repetição e seleção, decomposição, generalização, listas, grafos, recursão e autômatos.</p></div>
    <div class="e3" style="--c:${EIXO.MD[1]};--b:${EIXO.MD[2]}"><h3>${icone('MD')}Mundo Digital</h3><p>Como as máquinas e as redes funcionam por dentro: arquivos e dados, pacotes, protocolos, internet, nuvem, segurança cibernética e criptografia.</p></div>
    <div class="e3" style="--c:${EIXO.CD[1]};--b:${EIXO.CD[2]}"><h3>${icone('CD')}Cultura Digital</h3><p>Viver bem com a tecnologia: ética e respeito na rede, cyberbullying, privacidade e dados pessoais, fontes confiáveis, direitos autorais, consumo consciente e impactos sociais.</p></div>
  </div>
  <p class="nota">A “cultura digital” também aparece na própria BNCC como a <b>Competência Geral 5</b> (compreender, utilizar e criar tecnologias digitais de forma crítica, significativa, reflexiva e ética). No material, ela é trabalhada no eixo Cultura Digital e atravessa as missões dos outros dois eixos.</p>
  <h2 class="sec" style="margin-top:9mm">Os três eixos no material, ano a ano</h2>
  <p>Exemplos de missões de cada eixo (o mapa completo, habilidade por habilidade, está nas páginas seguintes):</p>
  <div class="eixos3">${['PC', 'MD', 'CD'].map(k => `<div class="e3" style="--c:${EIXO[k][1]};--b:${EIXO[k][2]}"><h3>${icone(k)}${EIXO[k][0]}</h3>${anos.map(a => { const vistos = new Set(), xs = []; codes.filter(c => c.startsWith('EF0' + a) && H[c][0] === k).forEach(c => cov[c].filter(x => !/Extra/.test(x.titulo)).forEach(x => { if (!vistos.has(x.id + x.mid)) { vistos.add(x.id + x.mid); xs.push(x); } })); return `<p class="ex"><b>${a}º ano:</b> ${xs.slice(0, 2).map(x => esc(tit(x.titulo))).join('; ')}</p>`; }).join('')}</div>`).join('')}</div>
</section>

${anos.map(secaoAno).join('')}

<section class="pag">
  <h2 class="sec">Como o material trabalha cada habilidade</h2>
  <p class="lead">Cada habilidade não fica só citada: ela vira uma ou mais <b>missões</b>, que são as aulas do portal. Toda missão segue a mesma estrutura, pensada para o aluno aprender fazendo e com o mínimo de dependência do professor.</p>
  <div class="recursos">
    <div class="rec"><h3>Explicação completa, em camadas</h3><p>Texto com linguagem adequada à idade, termos técnicos explicados por completo (palavra que abre o significado), ilustrações com papel pedagógico e a seção “Onde eu uso isso?”, que liga o conteúdo ao dia a dia.</p></div>
    <div class="rec"><h3>Vídeo de cada missão</h3><p>Animação narrada no estilo problema → solução, projetada em sala e disponível no portal para quem estuda em casa.</p></div>
    <div class="rec"><h3>Simuladores e prática</h3><p>A prática que a BNCC pede no computador é feita em simuladores realistas dentro do portal (sistema operacional, arquivos, programação em blocos, editor de vídeo e outros), com correção automática.</p></div>
    <div class="rec"><h3>Atividades em três níveis</h3><p>Básico (o essencial, que vale o visto), Desafio e Turbo (para aprofundar), com correção na hora, pontos e placar da turma.</p></div>
    <div class="rec"><h3>Retomada em espiral</h3><p>As missões começam relembrando o que já foi visto e voltam aos conceitos em níveis maiores ao longo do ano, para a aprendizagem não se perder.</p></div>
    <div class="rec"><h3>Inclusão</h3><p>Cada bimestre tem a Trilha Passo a Passo, uma versão mais simples do mesmo conteúdo para alunos com PEI ou com dificuldade, que cobre as mesmas habilidades.</p></div>
    <div class="rec"><h3>Avaliação no portal</h3><p>Revisão antes da prova, prova bimestral e atividade de recuperação feitas no próprio portal, cobrando só o que foi explicado.</p></div>
    <div class="rec"><h3>Registro de cada aluno</h3><p>O painel do professor guarda presença, progresso em cada missão, notas e relatório individual, o que permite acompanhar o desenvolvimento das habilidades aluno por aluno.</p></div>
  </div>

  <h2 class="sec" style="margin-top:8mm">Notas sobre este levantamento</h2>
  <ul class="nota">
    <li>Levantamento feito em 22/11/2026, a partir dos roteiros de aula do Portal da Informática, que indicam a habilidade da BNCC trabalhada em cada missão do currículo de 2027 (16 bimestres: 4 por ano, do 6º ao 9º).</li>
    <li>As colunas “O que ela pede” trazem um <b>resumo em linguagem simples</b> de cada habilidade. O texto oficial completo está no anexo do Parecer CNE/CEB nº 2/2022 (BNCC Computação).</li>
    <li>Missões marcadas como “Extra” são aulas complementares, usadas quando o calendário permite. Nenhuma habilidade depende só de missão extra: todas as 42 têm pelo menos uma missão regular.</li>
    <li>A Trilha Passo a Passo de cada bimestre tem as mesmas missões da apostila principal e, portanto, cobre as mesmas habilidades.</li>
    <li>Distribuição oficial das habilidades por eixo conferida no documento curricular de Computação do município de Novo Progresso (PA), que reproduz a BNCC Computação.</li>
  </ul>
</section>
</body></html>`;

fs.writeFileSync('bncc.html', html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.setContent(html, { waitUntil: 'load' }); await p.waitForTimeout(300);
  await p.pdf({ path: 'Cobertura-BNCC-Computacao-Portal-da-Informatica.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-family:Inter,sans-serif;font-size:7.5pt;color:#6b7590;padding:0 14mm;display:flex;justify-content:space-between"><span>Prof. Welington Soares Laignier · Portal da Informática · Cobertura da BNCC Computação</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
  await b.close(); console.log('ok', nMis, vinculos);
})();

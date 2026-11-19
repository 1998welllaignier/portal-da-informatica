const {chromium}=require('playwright');const fs=require('fs');
// Varre as telas do aluno (servir o portal com: python3 -m http.server 8765) e lista botões escondidos, rolagem dupla e rolagem lateral.
// Uso: node ferramentas/telas/auditar_telas.js [--shot]  (resultado vazio = tudo certo)
const D=require('os').tmpdir()+'/';
const MOCK=fs.readFileSync(__dirname+'/fb-simulado.js','utf8');
const VPS=[['1366x768',1366,768],['1366@125',1093,614],['1366@150',911,512],['1024x768',1024,768],['1280@125',1024,576],['cel',390,700]];
const SHOT=process.argv.includes('--shot');
const AUD=`(()=>{const out=[];const vis=e=>{const r=e.getBoundingClientRect();const cs=getComputedStyle(e);return r.width>2&&r.height>2&&cs.visibility!=='hidden'&&cs.display!=='none'};
const nome=e=>{let s=e.tagName.toLowerCase();if(e.id)s+='#'+e.id;if(e.className&&typeof e.className==='string')s+='.'+e.className.trim().split(/\\s+/).slice(0,3).join('.');return s};
const dlgs=[...document.querySelectorAll('dialog[open]')];
// rolagem interna (barra dentro de barra)
for(const e of document.querySelectorAll('body *')){const cs=getComputedStyle(e);if(/(auto|scroll)/.test(cs.overflowY)&&e.scrollHeight>e.clientHeight+6&&vis(e)&&e.clientHeight>40&&!e.closest('.sala-dlg')&&!(e.matches('dialog:modal')&&getComputedStyle(document.documentElement).overflowY==='hidden'))out.push('ROLAGEM-INTERNA '+nome(e)+' ('+e.clientHeight+' visíveis de '+e.scrollHeight+')');}
// botões fora da tela dentro de janelas
const raiz=dlgs.length?dlgs[dlgs.length-1]:null;
if(raiz){for(const b of raiz.querySelectorAll('button,a.btn,.btn,input[type=submit]')){if(!vis(b))continue;const r=b.getBoundingClientRect();let fora=r.bottom>innerHeight+1||r.top<-1||r.right>innerWidth+1;let p=b.parentElement;while(!fora&&p&&p!==document.body){const cs=getComputedStyle(p);if(/(auto|scroll|hidden)/.test(cs.overflowY)&&p.scrollHeight>p.clientHeight+6){const q=p.getBoundingClientRect();if(r.top>q.bottom-4||r.bottom<q.top+4)fora=true;}p=p.parentElement;}
 if(fora)out.push('BOTAO-ESCONDIDO na janela '+nome(raiz)+': "'+(b.innerText||b.getAttribute('aria-label')||'').trim().slice(0,40)+'"');}
 const r=raiz.getBoundingClientRect();if(r.height>innerHeight+2)out.push('JANELA-MAIOR-QUE-A-TELA '+nome(raiz));}
if(document.documentElement.scrollWidth>innerWidth+2)out.push('ROLAGEM-LATERAL da página ('+document.documentElement.scrollWidth+'px)');
return out})()`;
(async()=>{const b=await chromium.launch();const res={};
for(const [vn,w,h] of VPS){const pg=await b.newPage({viewport:{width:w,height:h}});const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('dialog',d=>d.dismiss().catch(()=>{}));pg.setDefaultTimeout(15000);console.error('VP',vn);
 await pg.route('**/firebase-app-compat.js',r=>r.fulfill({body:MOCK,contentType:'application/javascript'}));
 await pg.route('**/firebase-*-compat.js',r=>r.request().url().includes('app-compat')?r.fallback():r.fulfill({body:'',contentType:'application/javascript'}));
 await pg.route(/youtube|ytimg/,r=>r.abort());
 await pg.goto('http://localhost:8765/');
 await pg.evaluate(()=>sessionStorage.setItem('portalJK:sessao',JSON.stringify({serie:'8',turma:'8D',modo:'sozinho',nuvem:true,alunoIds:['d1'],nomes:['Aluno Exemplo'],apelidos:[''],avatares:[{tipo:'m'}],entrou:1})));
 const tela=async(nome,fn)=>{console.error(' tela',nome);try{await fn();await pg.waitForTimeout(500);const o=await pg.evaluate(AUD);(res[nome]=res[nome]||{})[vn]=o;if(SHOT)await pg.screenshot({path:D+nome.replace(/\W+/g,'_')+'-'+vn.replace('@','z')+'.png'});}catch(e){(res[nome]=res[nome]||{})[vn]=['ERRO '+e.message.slice(0,80)]}};
 const fecha=()=>pg.evaluate(()=>document.querySelectorAll('dialog[open]').forEach(d=>d.close()));
 const ir=async hsh=>{await pg.evaluate(x=>location.hash=x,hsh);await pg.waitForTimeout(900);await fecha();};
 await ir('#/apostilas');
 await tela('lista-apostilas',async()=>{});
 await tela('missoes',async()=>ir('#/apostila/informatica-8ano-4bim'));
 for(const aid of ['informatica-6ano-4bim','informatica-8ano-4bim']){
  await pg.evaluate(a=>{const s=JSON.parse(sessionStorage.getItem('portalJK:sessao'));s.serie=a.match(/(\d)ano/)[1];s.turma=s.serie+(s.serie==='6'?'A':'D');sessionStorage.setItem('portalJK:sessao',JSON.stringify(s))},aid);
  await ir('#/missao/'+aid+'/m1/comecar');
  const pgs=await pg.evaluate(()=>[...document.querySelectorAll('[data-pg]')].map(e=>e.dataset.pg));
  for(const p of pgs) await tela(aid.slice(11,15)+'-m1-'+p,async()=>ir('#/missao/'+aid+'/m1/'+p));
 }
 await tela('curiosidades-consciencia',async()=>{await fecha();await pg.evaluate(()=>{window.PORTAL.verCuriosidades('consciencia');})});
 await fecha();
 await tela('avatar-editor',async()=>{await pg.evaluate(()=>{window.PORTAL.avatar.editor(html=>{const a=document.getElementById('app');a.innerHTML=html;return a.firstElementChild},{nome:'Aluno',segundos:240})})});
 res['_erros']=res['_erros']||{};res['_erros'][vn]=errs.slice(0,3);
 await pg.close();}
fs.writeFileSync(D+'res.json',JSON.stringify(res,null,1));
// resumo
for(const [t,v] of Object.entries(res)){const linhas=[];for(const [vn,o] of Object.entries(v))for(const x of o)linhas.push(vn+': '+x);if(linhas.length){console.log('## '+t);[...new Set(linhas)].slice(0,14).forEach(l=>console.log('  '+l));}}
await b.close()})();

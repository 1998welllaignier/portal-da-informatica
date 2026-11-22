const fs=require('fs'), vm=require('vm'), R='/home/claude/portal-da-informatica/dados/';
const rot={}, con={};
const PORTAL={registrarRoteiro:(id,o)=>rot[id]=o, registrarConteudo:(id,o)=>con[id]=o};
const ctx={PORTAL, window:{PORTAL}, console}; vm.createContext(ctx);
for (const d of ['conteudo','roteiros']) for (const f of fs.readdirSync(R+d)) { if(!/^informatica-[6-9]ano-(2027-[1-4]bim|4bim)\.js$/.test(f)) continue; try{vm.runInContext(fs.readFileSync(R+d+'/'+f,'utf8'),ctx);}catch(e){console.error(f,e.message)} }
const out=[]; const re=/EF0[6-9]CO\d\d/g;
for (const id of Object.keys(con).sort()) { const C=con[id], Ro=rot[id]||{};
  for (const m of C.missoes||[]) { const s=JSON.stringify(Ro[m.id]||{}); const cods=[...new Set(s.match(re)||[])];
    out.push({id, mid:m.id, titulo:m.titulo, cods}); } }
fs.writeFileSync('map.json', JSON.stringify(out,null,1));
const sem=out.filter(x=>!x.cods.length&&x.mid!=='rc'&&x.mid!=='rv'); console.log('missões', out.length, 'sem código no roteiro', sem.length); console.log(sem.slice(0,15).map(x=>x.id+' '+x.mid).join('\n'));
const cov={}; out.forEach(x=>x.cods.forEach(c=>(cov[c]=cov[c]||[]).push(x.id.replace('informatica-','')+' '+x.mid))); console.log(Object.keys(cov).length, 'códigos com missão');

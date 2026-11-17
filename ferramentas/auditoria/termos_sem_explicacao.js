// Auditoria: termos técnicos usados em cada missão que NÃO estão no 📖 O que significa?
global.window = global; const C = {}; global.PORTAL = { registrarConteudo: (i, d) => C[i] = d };
const fs = require("fs"); fs.readdirSync("dados/conteudo").filter(f => f.endsWith(".js")).forEach(f => require(require("path").resolve("dados/conteudo", f)));
const T = ["switch","roteador","modem","rack","baia","fibra óptica","AP","Wi-Fi","Ethernet","Mbps","Gbps","bit","byte","KB","MB","GB","TB","IP","DNS","URL","HTTP","HTTPS","servidor","provedor","data center","nuvem","backbone","pacote","protocolo","navegador","firewall","antivírus","malware","phishing","senha","criptografia","algoritmo","variável","lista","loop","repetição","condição","bug","depuração","grafo","vértice","aresta","CPU","processador","memória RAM","RAM","HD","SSD","pen drive","sistema operacional","hardware","software","arquivo","pasta","extensão","compactar","ZIP","upload","download","link","cookie","IA","inteligência artificial","deepfake","LGPD","backup","login","app","aplicativo","teclado","mouse","monitor","webcam","Bluetooth","USB","porta","pixel","resolução","frequência","MHz","GHz","Hz"];
const so = s => String(s).replace(/<[^>]+>/g, " ").toLowerCase();
const rows = [];
for (const [aid, ap] of Object.entries(C)) for (const m of ap.missoes || []) {
  const termos = so(JSON.stringify(m.termos || [])); const usa = so(JSON.stringify([m.comecar, m.ondeUso, m.resumo]));
  const falta = T.filter(t => { const re = new RegExp("(^|[^a-zà-ú0-9])" + t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-zà-ú0-9]|$)"); return re.test(usa) && !re.test(termos); });
  if (falta.length && (m.termos || []).length) rows.push(`${aid} ${m.id}: ${falta.join(", ")}`);
}
console.log(rows.length + " missões com termos sem explicação no glossário:\n" + rows.join("\n"));

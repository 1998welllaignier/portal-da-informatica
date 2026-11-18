// Auditoria: termos técnicos usados em cada missão que ainda NÃO foram explicados no 📖 O que significa?
// (vale o glossário da própria missão e o das missões anteriores da mesma apostila, porque o aluno faz em ordem).
// Revisada em 17/11/2026: lê só os textos (não os nomes dos blocos, como "lista" ou "tabela") e aceita
// palavras comuns que já estão explicadas no próprio texto (lista ACEITOS, com o motivo).
global.window = global; const C = {}; global.PORTAL = { registrarConteudo: (i, d) => C[i] = d };
const fs = require("fs"), path = require("path");
fs.readdirSync("dados/conteudo").filter(f => f.endsWith(".js")).forEach(f => require(path.resolve("dados/conteudo", f)));
const T = ["switch","roteador","modem","rack","baia","fibra óptica","AP","Wi-Fi","Ethernet","Mbps","Gbps","bit","byte","KB","MB","GB","TB","IP","DNS","URL","HTTP","HTTPS","servidor","provedor","data center","nuvem","backbone","pacote","protocolo","navegador","firewall","antivírus","malware","phishing","criptografia","algoritmo","variável","lista","loop","repetição","condição","bug","depuração","grafo","vértice","aresta","CPU","processador","memória RAM","RAM","HD","SSD","pen drive","sistema operacional","hardware","software","arquivo","pasta","extensão","compactar","ZIP","upload","download","link","cookie","IA","inteligência artificial","deepfake","LGPD","backup","login","app","aplicativo","webcam","Bluetooth","USB","pixel","resolução","frequência","MHz","GHz","Hz"];
// palavras do dia a dia que não precisam de verbete (ou que o próprio texto já explica no lugar em que aparecem)
const ACEITOS = require("./termos_aceitos.json");
const textos = v => typeof v === "string" ? [v] : Array.isArray(v) ? v.flatMap(textos) : v && typeof v === "object" ? Object.entries(v).filter(([k]) => !["t", "ord", "nivel", "img", "src", "id"].includes(k)).flatMap(([, x]) => textos(x)) : [];
// siglas (IA, IP, HD…) só contam em MAIÚSCULAS, para não confundir com palavras como "ia" (do verbo ir)
const so = s => String(s).replace(/<[^>]+>/g, " ").replace(/[A-Za-zÀ-ú]+/g, w => /^[A-Z]{2,}$/.test(w) ? w : w.toLowerCase());
const rx = t => new RegExp("(^|[^a-zà-ú0-9])" + (/^[A-Z]{2,}$/.test(t) ? t : t.toLowerCase()).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-zà-ú0-9]|$)");
const rows = [];
for (const [aid, ap] of Object.entries(C)) { let vistos = "";
  for (const m of ap.missoes || []) {
    vistos += " " + so(textos(m.termos || []).join(" "));
    const usa = so(textos([m.comecar, m.ondeUso, m.resumo]).join(" "));
    const ok = (ACEITOS[aid.replace(/^informatica-/, "") + " " + m.id] || []).concat(ACEITOS["*"] || []);
    const falta = T.filter(t => rx(t).test(usa) && !rx(t).test(vistos) && !ok.includes(t));
    if (falta.length && (m.termos || []).length) rows.push(`${aid} ${m.id}: ${falta.join(", ")}`);
  }
}
console.log(rows.length + " missões com termos sem explicação no glossário:\n" + rows.join("\n"));

/* 🧪 TURMA SIMULADA (23/11/2026) — servidor de teste da aula ao vivo.
   Serve o portal (arquivos do repositório) e um "Firebase de mentira" COMPARTILHADO entre várias páginas:
   o professor, a janela do projetor e vários alunos, cada um num navegador separado, enxergam os mesmos dados,
   ao vivo (onSnapshot), como no Firebase de verdade. Nada sai do computador; nenhum dado real de aluno.
   Uso: node ferramentas/aula-simulada/servidor.js [porta]   (padrão 8790)
   Rotas: GET /fb/tudo (todos os documentos) · POST /fb/gravar {cli, path, data|null} · GET /fb/eventos (SSE)
          POST /fb/semente (substitui tudo) */
const http = require("http"), fs = require("fs"), path = require("path");
const RAIZ = path.resolve(__dirname, "../.."), PORTA = +process.argv[2] || 8790;
let store = {}; const clientes = new Set();
const TIPOS = { ".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".mp3": "audio/mpeg" };
const corpo = req => new Promise(r => { let b = ""; req.on("data", c => b += c); req.on("end", () => r(b ? JSON.parse(b) : {})); });
function avisar(msg) { const linha = "data: " + JSON.stringify(msg) + "\n\n"; clientes.forEach(c => c.write(linha)); }
http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/fb/tudo") { res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" }); return res.end(JSON.stringify(store)); }
  if (u.pathname === "/fb/gravar" && req.method === "POST") { const m = await corpo(req);
    (m.ops || [m]).forEach(o => { if (o.data == null) delete store[o.path]; else store[o.path] = o.data; avisar({ cli: m.cli, path: o.path, data: o.data == null ? null : o.data }); });
    res.writeHead(200); return res.end("ok"); }
  if (u.pathname === "/fb/semente" && req.method === "POST") { store = await corpo(req); avisar({ tudo: store }); res.writeHead(200); return res.end("ok"); }
  if (u.pathname === "/fb/eventos") { res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-store", connection: "keep-alive" }); res.write(": ok\n\n"); clientes.add(res); req.on("close", () => clientes.delete(res)); return; }
  let f = path.join(RAIZ, decodeURIComponent(u.pathname)); if (!f.startsWith(RAIZ)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end("404"); } res.writeHead(200, { "content-type": TIPOS[path.extname(f)] || "application/octet-stream", "cache-control": "no-store" }); res.end(d); });
}).listen(PORTA, () => console.log("🧪 turma simulada em http://localhost:" + PORTA));

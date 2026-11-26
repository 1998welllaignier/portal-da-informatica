#!/bin/bash
# 🧪 Roda TODOS os roteiros da aula simulada, um por um, e mostra no fim quem passou e quem falhou (26/11/2026).
# Regra combinada com o professor: nada vai para o ar sem passar aqui. Uso: bash ferramentas/aula-simulada/testar-tudo.sh
cd "$(dirname "$0")"
pkill -f servidor.js 2>/dev/null; (node servidor.js > /tmp/srv.log 2>&1 &); sleep 2
ok=0; ruim=""
for f in roteiro-*.js; do
  timeout 240 env NODE_PATH=/opt/npm-tools/node_modules node "$f" > "/tmp/teste-$f.txt" 2>&1; s=$?
  # falha = saída diferente de 0, erro de página (erros [...] com texto dentro) ou conferência com false
  if [ $s -ne 0 ] || grep -qE "erros.*\[ *'|erros.*\[ *\"|pageerror|: false,?$" "/tmp/teste-$f.txt" && grep -qE "CONFERE" "/tmp/teste-$f.txt"; then ruim="$ruim $f"; echo "❌ $f (veja /tmp/teste-$f.txt)"; else ok=$((ok+1)); echo "✅ $f"; fi
done
pkill -f servidor.js 2>/dev/null
echo; echo "Passaram: $ok"; [ -n "$ruim" ] && { echo "FALHARAM:$ruim"; exit 1; } || echo "Tudo certo ✅"

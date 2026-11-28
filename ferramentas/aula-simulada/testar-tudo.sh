#!/bin/bash
# 🧪 Roda TODOS os roteiros da aula simulada, um por um, e mostra no fim quem passou e quem falhou (26/11/2026).
# Regra combinada com o professor: nada vai para o ar sem passar aqui. Uso: bash ferramentas/aula-simulada/testar-tudo.sh
cd "$(dirname "$0")"
pkill -f servidor.js 2>/dev/null; (node servidor.js > /tmp/srv.log 2>&1 &); sleep 2
ok=0; ruim=""
for f in ${SO:-roteiro-*.js}; do
  timeout 240 env NODE_PATH=/opt/npm-tools/node_modules $( [ "$f" = roteiro-vinheta.js ] && echo VINHETA=1 ) node "$f" > "/tmp/teste-$f.txt" 2>&1; s=$?
  falhou=0
  [ $s -ne 0 ] && falhou=1                                                   # o roteiro quebrou ou passou do tempo
  grep -qE "erros.*\[ *['\"]" "/tmp/teste-$f.txt" && falhou=1                # erro de JavaScript na página (lista de erros com texto)
  # conferência com "false": só dentro do bloco CONFERE (outros "false" do relatório podem ser o resultado esperado)
  awk '/CONFERE/{c=1} c&&/: false,?$/{f=1} c&&/^ *}/{c=0} END{exit !f}' "/tmp/teste-$f.txt" && falhou=1
  if [ $falhou -eq 1 ]; then ruim="$ruim $f"; echo "❌ $f (veja /tmp/teste-$f.txt)"; else ok=$((ok+1)); echo "✅ $f"; fi
done
pkill -f servidor.js 2>/dev/null
echo; echo "Passaram: $ok"; [ -n "$ruim" ] && { echo "FALHARAM:$ruim"; exit 1; } || echo "Tudo certo ✅"

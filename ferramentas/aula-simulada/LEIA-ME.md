# 🧪 Turma simulada (teste da 🎤 Aula ao vivo)

Simula uma aula de verdade sem internet e sem nenhum dado real: **o professor (painel), a janela do projetor e alunos fictícios**, cada um num navegador separado, ligados a um **"Firebase de mentira" compartilhado e ao vivo**, com um **YouTube de mentira** (mostra o tempo do vídeo, se está tocando e se está com som).

## Como rodar
```bash
node ferramentas/aula-simulada/servidor.js &                    # sobe em http://localhost:8790
NODE_PATH=/opt/npm-tools/node_modules node ferramentas/aula-simulada/roteiro-1-tela.js
NODE_PATH=/opt/npm-tools/node_modules node ferramentas/aula-simulada/roteiro-2-telas.js
```
Os prints vão para a pasta temporária (`aula-*.png`). O roteiro termina com `erros [] ...` quando nenhuma página deu erro.

## Peças
- `servidor.js`: serve o portal e o Firebase compartilhado (`/fb/tudo`, `/fb/gravar`, `/fb/eventos`, `/fb/semente`).
- `fb-compartilhado.js`: entra no lugar do `firebase-app-compat.js` (documentos, consultas, onSnapshot ao vivo, FieldValue). `window.__fbPapel = "prof" | "aluno"`.
- `yt-simulado.js`: entra no lugar de `iframe_api` do YouTube.
- `turma.js`: `semear()` (turma 9A fictícia com 5 alunos e a aula iniciada com sala de espera), `professor()`, `aluno(i)`, `loja()`.

## O que os roteiros conferem
Sala de espera → leitura (slide igual em todas as telas, risco do pincel chegando ao aluno e ao projetor, palavra difícil, roleta, pergunta que se revela sozinha com quem acertou/errou) → vídeo (alunos tocando juntos e sem som, mudo/som, voltar ao início pausado) → fechar (todos voltam à sala de espera) → largada (aluno vai para a missão).
- `roteiro-pontos.js`: confere que o 🏆 placar e o 🔴 Ao vivo (abertos em outras abas, sem a Aula ao vivo) mostram os MESMOS pontos, com a leitura guiada somada (24/11/2026).

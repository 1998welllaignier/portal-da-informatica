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
- `roteiro-byte.js`: o jogo 🤖 Byte: a Aventura na Sala de espera (história, mapa, fase completa, jogo salvo no aluno, game over, Rei Vírus) e o tema 🎮 Byte 8 bits (25/11/2026).
- `roteiro-helena.js, roteiro-reposicao.js`: 🌟 Modo Helena: carta da vez em dupla (nome do colega, erro, acerto, XP, não repete, sobe para a nuvem), Trilha sozinho (achar, ordem, pausa, descanso, contei) e aluno comum sem mudança (25/11/2026).
- `roteiro-outra-turma.js`: aluno que frequenta a aula de outra turma entra na Sala de espera dessa turma (25/11/2026).
- `roteiro-jogos-5ano.js`: a 🎮 Sala de jogos do 5º ano (botão na apostila, todos os jogos liberados, recorde salvo; desde 25/11/2026 as outras séries também entram) (25/11/2026).
- `roteiro-5ano-aula.js`: aluno do 5º ano entra na aula da turma que está acontecendo (sala de espera → missão da apostila dela) e aparece no painel ao vivo (25/11/2026).
- `roteiro-outra-turma-2.js`: a turma do aluno teve aula mais cedo; vale a aula iniciada mais recentemente (25/11/2026).
- `roteiro-fim-missao.js`: 🏁 fim da missão no Resumo do que fiz (básico concluído: 🎮 Sala de jogos para qualquer série e ⛶ Sair da tela cheia sem contar saída; incompleto: aviso; botão da Sala de jogos na lista de missões de todas as séries) (25/11/2026).
- `roteiro-jogos-aula.js`: 🎮🔒 Sala de jogos na lista de missões de todas as séries: fechada na hora da aula da turma (só abre pelo 🏁 fim da missão) e aberta fora da aula (25/11/2026).
- `roteiro-agregados.js`: 🎒 turma Agregados — juntar o 5º ano (mesmo código, ninguém apagado, desativado continua desativado), aluno novo com série, entrada pelo código na série dele, tarefas abertas sem aula, uma missão por vez, Sala de jogos aberta e Agregados fora das telas de aula (26/11/2026).
- `roteiro-agregados-aula.js`: 🎒 agregado incluído na aula de uma turma (pergunta do painel, sala de espera, largada, missão da turma, leitura guiada ouvindo a turma, fim da aula volta para a série dele; agregado não incluído continua livre) (26/11/2026).
- `roteiro-espera-jogo-video.js`: aluno jogando na Sala de espera + professor começa pelo vídeo: o jogo não fica em tela cheia e o vídeo aparece e toca na tela do aluno (26/11/2026, depois da regressão da tela cheia).
- `roteiro-jogos-cheia-aovivo.js`: 🎮 Sala de jogos em tela cheia (jogar entra, Sair do jogo sai) e, com aluno jogando em tela cheia, o vídeo da Aula ao vivo e a roleta aparecem por cima (o jogo sai da tela cheia sozinho) (26/11/2026).
- `roteiro-agregados-entrada.js`: endereço antigo #/serie/5 vai para os 🎒 Agregados com a turma já marcada; aluno do 5º ainda na turma antiga entra com o código de sempre; agregado entra na série dele (26/11/2026).
- `roteiro-agregados-roleta.js`: Aula ao vivo já aberta + agregado incluído pelo 🎒 → entra na roleta sem reabrir (26/11/2026).
- `roteiro-respostas.js`: aba Aula em todas as missões de todas as apostilas (sem erro, nenhuma atividade sem resposta, faixa do tempo padrão) (26/11/2026).

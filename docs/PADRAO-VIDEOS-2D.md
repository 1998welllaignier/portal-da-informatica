# 🎬 Padrão dos vídeos das missões — estilo 2D com bonequinhos

Aprovado pelo professor em 09/11/2026 ("é disso que eu estou falando desde o começo").
Ficou melhor que o 3D e gasta bem menos. **Todo vídeo novo de missão segue este padrão.**
Modelo de referência: `ferramentas/video2d/modelo-cabo-submarino.html` (8º ano · Missão 2, cena do cabo submarino).

## O que faz o padrão
- **Historinha com bonequinho**, no estilo "problema → solução": o aluno (bonequinho) tem uma dúvida, a câmera vai até onde a coisa acontece e a resposta aparece.
- **Câmera que se mexe e entra nas coisas**: mergulho da superfície até o fundo do mar, câmera andando de lado, zoom que entra dentro do objeto (o cabo, o computador, o roteador…) e mostra o que tem lá dentro.
- **Profundidade sem 3D**: camadas que andam em velocidades diferentes (o que está na frente anda mais rápido), peixes/objetos atravessando, bolhas, luz.
- **Bonequinho vivo**: pisca, mexe os braços, aponta, nada, se surpreende (boca em "O"), comemora. Pode usar acessórios da cena (máscara de mergulho, capacete…).
- **Conceito em letras grandes amarelas** com contorno azul-escuro, entrando com um "pulinho" no momento em que a voz fala dele.
- **Etiquetas amarelas com seta** apontando as partes do desenho (ex.: PROTEÇÃO, AÇO, FIBRA ÓPTICA).
- **Balões de fala brancos** curtos (o que o bonequinho pensa ou diz).
- **Etiqueta da etapa** no canto superior esquerdo (ex.: O PEDIDO, O CABO SUBMARINO, DENTRO DO CABO).
- **Selo do professor sempre visível** no canto superior direito: "Prof. Welington Laignier" + série e turmas. Cartão final com o nome dele. A escola só aparece em segundo plano.
- Visual: cores vivas e chapadas, fonte Poppins bem grossa, formato **horizontal 1280×720 (16:9)**, 30 quadros por segundo.

## Regras que não mudam (de antes)
- Vídeo só para o professor projetar (aba 🎤 Aula do painel); os computadores dos alunos não têm som.
- Voz: o professor gera no HeyGen (ou no ChatGPT) e manda o MP3. **Nunca esticar nem alterar a voz**: as cenas é que se ajustam à voz. Música de fundo baixinha, em volume fixo. Vinheta de abertura e de encerramento.
- Toda sigla e todo termo técnico explicados; "Onde eu uso isso?" no fim.
- Cada vídeo pronto vai para o YouTube (não listado, conteúdo para crianças, playlist da série) e o id entra em `P.videosMissao` (`js/historia.js`).

## Como fazer (para o Claude)
1. Copiar `ferramentas/video2d/modelo-cabo-submarino.html` e reaproveitar as peças prontas: `boneco()`, `balao()`, `palavra()`, `etiqueta()`, `chip()`, `selo()`, cenários e a função `render(t)` com a linha do tempo.
2. Escrever as cenas da missão (falas = as da História em `dados/historias/`), uma ideia por cena, com movimento de câmera.
3. Antes de gravar: desenhar alguns quadros nos momentos mais cheios e conferir (nada cobrindo nada, texto legível).
4. Gravar: `python3 ferramentas/video2d/gravar.py <cena.html> <saida.mp4>` (Chrome sem tela + ffmpeg). Depois juntar a voz e a música com `-c:v copy`.
5. Versão: os vídeos v3 (estilo antigo) estão no YouTube; os refeitos neste padrão são a **v4**.

## Custo
- O primeiro vídeo de cada série gasta um pouco mais (criar cenários novos).
- Os seguintes reaproveitam bonequinho, balões, etiquetas e selo: custo parecido com o da História de antes.
- O 3D foi descartado (gasta muito mais e ficou pior que este).

## Peças prontas e cuidados (6º ano · Missão 1 v4, 09/11/2026)
- `ferramentas/video2d/lib.js`: bonequinho (`boneco`, com `camisa`, `cabelo:"longo"` para meninas), balões, palavras, etiquetas, selo.
- `ferramentas/video2d/6ano-m1/`: o vídeo completo (16 cenas), `audio.py` (música e efeitos sintetizados, sem arquivos de terceiros), `alinhar.py` (acha as pausas da voz e define o tempo de cada cena) e `durs.json` (tempos usados).
- Cuidados aprendidos: o cabelo comprido não pode passar por baixo do queixo (parece barba); mão sempre apontando de lado com os outros dedos dobrados (`maoApontando`), nunca um dedo sozinho em pé (parece gesto obsceno). Nada importante no rodapé, onde fica a legenda.
- Fluxo: falas → o professor gera o MP3 (pausa de 1 s entre parágrafos) → `alinhar.py` → `gravar.py <saida> durs.json` → `audio.py` → mistura com a voz (música cerca de 18 dB abaixo da voz).

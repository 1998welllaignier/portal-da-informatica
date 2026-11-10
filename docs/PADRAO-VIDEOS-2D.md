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
- Cuidados aprendidos: o cabelo comprido não pode passar por baixo do queixo (parece barba); mão sempre de desenho animado (estilo emoji 👉, com contorno macio e dobrinhas), apontando de lado com os outros dedos dobrados (`maoApontando`), nunca um dedo sozinho em pé (parece gesto obsceno). Nada importante no rodapé, onde fica a legenda.
- Fluxo: falas → o professor gera o MP3 (pausa de 1 s entre parágrafos) → `alinhar.py` → `gravar.py <saida> durs.json` → `audio.py` → mistura com a voz (música cerca de 18 dB abaixo da voz).

## Abertura de todo vídeo (pedido do professor em 09/11/2026)
- A abertura tem que ser **"digna de um Oscar"**: enquanto a voz fala o título, o título e o problema da aula aparecem **com destaque e efeito**, numa mini cena criada para o tema daquela missão. **Não precisa ser sobre mistério**: cada vídeo tem a sua ideia própria (aventura, desafio, corrida, viagem, alerta…). O exemplo do 6º ano M1 é um mistério: o nome da missão em cima, uma mini cena do mistério no centro (ex.: no 6º M1, o arquivo pisca e some, fica o contorno tracejado e um "?" grande com interrogações voando) e o **subtítulo do problema em letras grandes amarelas** com uma tremidinha (ex.: "O MISTÉRIO DO TRABALHO QUE SUMIU!").
- Recursos que ajudam: holofote, efeito sonoro curto combinando com o clima da abertura (ex.: `misterio` em `audio.py` para suspense) e o bonequinho reagindo no canto.
- O nome **Prof. Welington Laignier** fica em destaque na abertura (faixa amarela embaixo), além do selo de sempre.

## Pausa entre assuntos (pedido do professor em 09/11/2026, a partir do 8º ano)
- Ao trocar de assunto ou tópico (ex.: do último conceito para o "Onde eu uso isso?"), tem que haver uma **pausa perceptível**.
- No texto para a voz: pedir **2 segundos de pausa entre os parágrafos** (cada parágrafo é uma cena).
- Na montagem: além da pausa da voz, inserir **cerca de 0,7 s de silêncio** em cada troca de cena (só separando os trechos da voz, sem esticar nem alterar a voz), com o "vush" de transição e a troca de cena acontecendo nesse respiro.

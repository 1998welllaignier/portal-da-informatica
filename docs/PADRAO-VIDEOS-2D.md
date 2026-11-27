# 🎬 Padrão dos vídeos das missões — estilo 2D com bonequinhos

Aprovado pelo professor em 09/11/2026 ("é disso que eu estou falando desde o começo").
Ficou melhor que o 3D e gasta bem menos. **Todo vídeo novo de missão segue este padrão.**
Modelo de referência: `ferramentas/video2d/modelo-cabo-submarino.html` (8º ano · Missão 2, cena do cabo submarino).

## Regra nº 1: edutretenimento (pedido do professor em 18/11/2026)
- Referência: o **Especial Teclado** do 6º ano (2027), em que o teclado vira a "Cidade Teclado", com bairros. O professor quer que, quando alguém pensar no Portal da Informática, venha à cabeça esse tipo de vídeo.
- Não é copiar o "bairro": é o **jeito de abordar**. Transformar um assunto que costuma ser explicado de forma tradicional e maçante num "mundo" com regras próprias, personagens, humor e surpresa (cidade, estádio, viagem, caça ao tesouro…). A ferramenta principal é a **metáfora**: explicar o novo por meio de algo que o aluno já conhece.
- O vídeo tem que ser prazeroso de ver e, ao mesmo tempo, rico em conhecimento verificado. O aluno aprende se divertindo, quase sem perceber (**edutretenimento**, *edutainment*; **aprendizagem lúdica**).

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

## 💬 Legenda de UMA linha (26/11/2026, pedido do professor)
A legenda do rodapé tem **uma linha só**: o texto da cena é dividido em trechos que cabem numa linha (primeiro frase por frase, depois nas vírgulas, e só então em partes de tamanho parecido); as palavras acendem conforme a voz e, quando o trecho acaba, entra o próximo. Ocupa só a faixa de baixo (y ≈ 640 a 718) e não cobre metade da tela como a de várias linhas. Está no `modelo-v4.html` (função `legenda`); todo `video.html` é gerado de novo com `novo_video.py` para pegar a mudança.

## 🎙️ Voz Gemini e crivo da narração (26/11/2026)
- **🎯 Voz de referência:** a do 7º ano · Missão 3 (Registros). Marcações de emoção automáticas do `narrar.py` (poucas, por bloco); não marcar frase por frase à mão no `emocoes.json`, que deixa a voz artificial (teste pixel de 27/11).
- **Voz:** `gemini-2.5-pro-tts`, voz **Charon**, a mesma para todos os vídeos; o estilo (sorriso na voz, pausas antes das palavras importantes, sem tom de desenho animado) e o ajuste leve por série estão em `ferramentas/video2d/vozes/estilos.json`. A chave fica só em `~/.segredos/` (nunca no repositório).
- **Emoção por momento:** antes de cada trecho vai uma direção entre colchetes — `[suspense]`, `[animado]`, `[explicando]`, `[surpresa]` — que a voz usa e não lê. `narrar.py` marca sozinho (problema = suspense, descoberta = surpresa, conceito = explicando, abertura, "Onde eu uso isso?" e fim = animado); para acertar uma cena à mão: `<pasta>/emocoes.json` com `{"3": "[suspense] texto…"}`.
- **Comando:** `python3 vozes/narrar.py <pasta> <série> --montar <saida.mp4>` (gera cena por cena, passa pelo crivo, junta as cenas e chama `finalizar.py --usar-cortes`, que põe a vinheta).
- **✅ Crivo obrigatório (não deixar passar nada):**
  1. **Palavras extras, trocadas ou faltando:** cada cena é transcrita (Whisper local) e comparada palavra por palavra com o texto (números por extenso e em algarismos contam como iguais). Diferença → a cena é gerada de novo (até 3 vezes); se continuar, o vídeo **não é montado** e a cena é revista. Ex.: no teste de 26/11 a voz disse "na sétima *gaveta*" sem a palavra estar no texto.
  2. **Segundos:** duração e velocidade (palavras por segundo) de cada cena, numa faixa normal; o custo é por segundo de áudio, e o suspense alonga um pouco.
  3. **Gasto:** toda chamada vai para `vozes/custos.csv` (tokens de texto, tokens de áudio, segundos, US$), com limite de segurança (`--limite-usd`, padrão US$ 10) que interrompe a geração; a cada lote, conferir o gasto real no Google Cloud (Faturamento › Relatórios) e avisar o professor. Preço: US$ 1 por milhão de tokens de texto e US$ 20 por milhão de tokens de áudio (cerca de 25 tokens por segundo).
  4. **🟢🔴 Desvio inofensivo vs. desvio que muda o sentido (27/11/2026, `vozes/crivo_verde.py`):** a voz vem primeiro e o vídeo se encaixa nela. Quando a voz foge do texto, o crivo classifica:
     - 🟢 **verde (aceita sem gerar de novo):** até 2 palavras de apoio a mais ou a menos ("já", "bem", "então", "aí", "agora", "né"…), fora do começo da frase. O `narrar.py` corrige o texto para o que a voz falou: `falas.txt`, `emocoes.json`, as constantes `F<n>` e as legendas próprias parecidas (cenas.js/video.html), e registra tudo em `voz/aceitas.json`. Economiza a chamada e o dinheiro.
     - 🔴 **vermelho (gera de novo, como antes):** número, negação ("não", "nunca", "só"…), termo técnico de `vozes/protegidas.txt`, nome próprio, palavra nova que não é de apoio, palavra trocada, mais de 2 palavras, mudança no começo da frase ou em palavra que dispara efeito/placa (`em(F<n>, "…")`).
     - Na dúvida é vermelho. `--sem-verde` desliga o verde. Testado em 27/11 sem gastar nada: 🟢 "já"/"bem" aceitos e textos corrigidos; 🔴 "link"→"site" barrado e parou no limite; pasta sem diferença ficou idêntica.

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

## A legenda nunca cobre nada (pedido do professor em 09/11/2026)
- A legenda fixa do rodapé **nunca** pode ficar por cima de texto ou informação da cena (no 7º ano, a etiqueta "A NOSSA SALA DE INFORMÁTICA" ficou coberta).
- Regra: **nenhum vídeo é gravado sem passar pelo verificador**: `python3 ferramentas/video2d/verificar_legenda.py <pasta_do_video> <durs.json>`. Ele percorre o vídeo a cada 0,1 s, mede onde a legenda está e onde há texto na cena, e lista cada conflito (texto e segundos). Só gravar quando ele disser "OK".
- O verificador só enxerga textos; para desenhos importantes (bonequinho, telas, objetos), conferir os quadros com `quadros.py` e deixar tudo acima da faixa da legenda (cerca de y = 570 em 720).

## Legenda escrita do jeito certo (pedido do professor em 09/11/2026)
- O texto para a voz pode trazer as siglas escritas do jeito que se fala ("dê ene ésse", "í pê", "tê cê pê barra í pê"), para a narração pronunciar certo.
- A **legenda** do vídeo mostra sempre a forma escrita correta (DNS, IP, TCP/IP, HTTPS, Ctrl + S). Em cada cena: `fala` = texto falado; `legenda` = texto escrito (usado na tela quando existe).

## Legenda sincronizada com a voz (anotado pelo professor em 10/11/2026)
- Nos 8 vídeos de 10/11, voz e efeitos sonoros ficaram no lugar certo, mas **em alguns momentos a legenda ficou fora de sincronia** com a fala.
- Causa: as palavras da legenda acendem num ritmo igual ao longo da cena, e a voz não fala num ritmo igual (respira nas vírgulas e nos pontos, acelera em listas).
- **Feito a partir do vídeo extra do 8º M1 (10/11):** `alinhar_frases.py` alinha cada frase às pausas da voz (rápido, funciona mesmo quando a voz não faz pausa longa entre parágrafos) e confere pelos "núcleos de sílaba" do áudio; `fala_sync.py` grava no `video.html` o início real de cada palavra (`window.FALA`). A legenda acende pela fala real e os desenhos e efeitos são marcados por palavra (`A("palavra")`), então tudo acompanha a voz. Montagem: `alinhar_frases.py` → `fala_sync.py` → `finalizar.py --usar-cortes`.
- Correção para os próximos: usar as pausas que o `finalizar.py` já encontra dentro de cada parágrafo para acender a legenda por trecho (cada trecho entre duas pausas acende no tempo real em que é falado, dividido pelas sílabas) e, antes de entregar, conferir quadros em 2 ou 3 pontos de cada vídeo.

## Vídeo extra "ultra explicado" (combinado em 10/11/2026)
- **Não é o padrão.** O padrão continua sendo o videozinho curto de cada missão.
- O vídeo extra é um reforço que o professor pede **só quando o assunto exigir** (quando ele perceber que a turma vai ter dificuldade mesmo com a explicação e o vídeo curto).
- Como é: explica a missão inteira do começo ao fim, passo a passo, como para uma criança, com historinha (ex.: Bia e o robozinho Bit com cartas numeradas), usando os mesmos exemplos das tarefas do portal. Pode ser mais longo (o do 8º M1 tem cerca de 6 minutos).
- Primeiro: `ferramentas/video2d/8ano-m1-extra/` (Listas: busca sequencial, busca binária e método da bolha).

## ✅ Lista de conferência obrigatória (25/11/2026, cobrança do professor: "não temos motivo para economizar")
Em 25/11/2026 a varredura achou 30 vídeos de 2027 abaixo do padrão (9 a 10 cenas, sem câmera, cara de slide). Nenhum vídeo sai sem cumprir TODOS os itens:

**Roteiro (o vídeo tem que prender E ensinar)**
1. Uma história com começo, meio e fim que atravessa o vídeo inteiro (o personagem tenta, erra, descobre e vence), não só a 1ª e a última cena.
2. Um "mundo" ou metáfora para o tema (ex.: 8º M4 = programa de auditório "Show do Meio"; Especial Teclado = Cidade Teclado).
3. O conteúdo da apostila inteiro e correto: todo conceito, termo e exemplo da missão aparece, explicado e demonstrado (não basta citar).
4. Ritmo: frases curtas, surpresa e humor; uma ideia por cena; 12 a 20 cenas, conforme o conteúdo.

**Visual**
5. Abertura "digna de Oscar": mini cena própria do tema, com o título, o subtítulo do problema e o nome do professor em destaque.
6. Câmera que se mexe: aproxima, afasta, passeia e entra nas coisas (função `camera()`), em quase todas as cenas.
7. Profundidade: cenário em camadas (fundo, meio, frente), luz e objetos atravessando.
8. Mostrar acontecendo: o bonequinho FAZ (as coisas caem, acendem, pulam), em vez de cartão ou tabela de texto. Tabela só como resumo.
9. Bonequinho vivo e presente na maioria das cenas, reagindo (pisca, aponta, comemora, se assusta).
10. Conceito em letras grandes amarelas, etiquetas com seta e balões de fala.
11. Legenda não cobre nada (verificador) e quadros conferidos antes de entregar.
12. **Narração passou no crivo** (`vozes/narrar.py`, 26/11/2026): nenhuma palavra extra, trocada ou faltando; segundos e velocidade de cada cena conferidos; custo registrado em `vozes/custos.csv` e gasto real conferido no Google Cloud a cada lote.

### 🤖 Verificador automático (obrigatório, 25/11/2026)
`python3 ferramentas/video2d/verificador.py <pasta>` (ou `todos`). Desenha o vídeo de verdade e espiona cada texto e cada fundo pintado no canvas. **Só entrega quem sair ✅ APROVADO (zero erros).**
- ❌ Reprova: legenda cobrindo texto; texto maior que o fundo/barra/contorno atrás dele; texto embaixo do selo; abertura sem mini cena; sem cartão final; câmera parada (menos de 40% das cenas); poucos personagens (menos de 30%); poucas palavras-conceito amarelas (menos de 25%); falta "Onde eu uso isso?" em cena própria; cena sem movimento; roteiro curto; conceitos da apostila faltando (mais de 40% das palavras-chave do resumo).
- ⚠️ Avisa: ortografia (dicionário pt-BR do LibreOffice; nomes próprios aceitos ficam em `verificador-palavras.txt`), número por extenso sem legenda em algarismos, texto cortado na borda, textos sobrepostos, poucas setas/balões, cena sem efeito sonoro, sem "Missão cumprida".

Piloto no padrão completo: `ferramentas/video2d/2027-8ano-m4/` (13 cenas, câmera, palco em camadas, plateia que reage).

## 🎮 Vinheta de entrada (aprovada em 25/11/2026: versão de 10 s)
Antes de todo vídeo de missão: o Prof. Welington em pixel art (o do jogo Byte) corre numa mini fase pegando chips com placar, bate no bloco ?, o balão escreve “BEM-VINDO À MISSÃO!” letra por letra, missão e título digitados (acentos desenhados ponto a ponto), o Byte chega e os dois comemoram, START! e a tela se desfaz em quadradinhos. Música e efeitos de 8 bits do jogo. `python3 ferramentas/video2d/vinheta/gerar_vinheta.py "MISSÃO 6" "TÍTULO" "8º ANO · 1º BIM. 2027" vinheta.mp4 [video.mp4 final.mp4]` — é colada ANTES do vídeo, então a voz e a legenda do vídeo não mudam.

### Selo do professor (26/11/2026)
- O verificador reprova qualquer texto que **encoste** no selo (antes só reprovava quando cobria mais de 15% do texto).
- `palavra()` (lib.js) desvia sozinha do selo: desliza para a esquerda ou, se não couber, desce.
- A placa do "MISSÃO CUMPRIDA!" foi para `rr(70, 92, 860, 112)`, com o texto em (500, 148), longe do selo.

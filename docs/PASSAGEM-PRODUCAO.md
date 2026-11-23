# 🏭 Passagem de bastão: Produção → Produção 2.0

> Escrito em **23/11/2026, à noite**, a pedido do Prof. Welington, pela conversa 🏭 Produção.
> Aqui está o que **ainda não está** no `docs/PADRAO-DE-QUALIDADE.md` nem no `docs/PADRAO-VIDEOS-2D.md`.
>
> **Ordem de leitura para a Produção 2.0:**
> 1. `AGENTS.md`: o projeto, onde fica cada coisa e o checklist de cada bimestre.
> 2. `docs/PADRAO-DE-QUALIDADE.md`: a régua de tudo.
> 3. `docs/PADRAO-VIDEOS-2D.md`
> 4. **este arquivo**
> 5. `docs/PLANO-DE-ACAO.md`: vale a seção "📌 SITUAÇÃO REAL" e a seção 6.
> 6. `docs/VIDEOS-A-POSTAR.md`
> 7. `docs/NOVO-MODELO.md`
> 8. `docs/CHECKLIST-DE-MUDANCAS.md`: segue-se no fim de toda mudança.
>
> ⚠️ **Este repositório é público.** Por isso, aqui não entram senhas, endereços de e-mail, gabaritos de prova nem dados de aluno.

---

## 1. ⚠️ O que NÃO passa sozinho para a conversa nova

Cada conversa do Claude tem o seu próprio computador na nuvem. **Os arquivos que ficaram fora do repositório não existem na conversa nova.**

| O quê | Onde estava (só na 🏭 Produção) | O que fazer |
|---|---|---|
| **Gabaritos das provas** (JSON lido por `ferramentas/gerar_provas.js`) | Estavam em `/home/claude/gabaritos/`: só os do 2º bim de 2027 do 6º e do 7º, com Trilha. Os de 2026 já foram usados e as provas estão no portal (só o hash). | ✅ **Copiados em 23/11/2026, com a autorização dele, para o Google Drive pessoal do professor**, na pasta "Portal da Informática — Gabaritos das provas (NÃO compartilhar)", sem compartilhamento herdado. Gabarito novo vai para a mesma pasta, **nunca** para o repositório. |
| MP4 dos vídeos prontos | `/home/claude/videos-prontos`, `videos-2027`, `videos-saida`, e o MP4 do ⚔️ duelo das redes em `/home/claude/` | Os postados estão no YouTube. O duelo das redes **ainda não foi postado**: refazer pelo projeto `ferramentas/video2d/2027-8ano-duelo-redes/` (tudo está lá, inclusive `voz-final.mp3`). |
| Painel da Consciência Negra (54 folhas A4) | `/home/claude/painel-cn2/` (PDF, imagens) | Os **scripts** foram copiados para `ferramentas/painel-a4/` (ver o LEIA-ME de lá). O PDF já foi entregue ao professor. |
| PDFs do Vinícius, dos aulões e do Wi-Fi do AEE | `/home/claude/*.pdf` | Não são da Produção: são da 👨‍🏫 Vinícius e da 🏫 Escola no dia a dia. |
| Modelo de transcrição de voz | instalado na hora | Usar a habilidade **transcrever-audio**: sherpa-onnx + Whisper small, baixado do **GitHub**, porque o HuggingFace é bloqueado. Isso substitui o `ASR_DIR`/`asr2.mjs` citado no `AGENTS.md`, cujo modelo vinha do HuggingFace. |

---

## 2. Em andamento e onde parou (23/11/2026)

### Portal: o que mudou hoje (23/11) e ainda não foi testado numa aula de verdade
Tudo foi publicado e anotado no PADRAO-DE-QUALIDADE.md. O professor dá **Ctrl+F5** no computador dele, no telão e nos PCs dos alunos. Falta a confirmação dele, em aula, destes itens:

1. **Vídeo em sincronia nos PCs dos alunos.**
   - O que acontecia: tela preta e "⏸ Já vai começar" travado, e dois vídeos no projetor.
   - **Causa encontrada:** o `musica.js` mandava o aviso "listening" também para os players do YouTube criados pela API e trocava o canal deles. Já corrigido.
   - O telão agora tem player próprio, **mudo**, preso no tempo do professor.
   - Se algum PC ainda falhar, o professor vê "😕 O vídeo não abriu para: <nomes>". Anotar quais PCs falharam, para saber se é a rede ou o computador.
2. **Música que não tocava.** Duas causas corrigidas:
   - uma aba escondida do painel segurava a música;
   - um player já fechado continuava contando como "vídeo tocando".
   - Se ainda não tocar, pedir print do botão 🎵.
3. **Pincel e laser na leitura guiada:**
   - no telão (3 telas), via BroadcastChannel;
   - na tela dos alunos, via Firebase (`config/lousaLeitura_<turma>`, em texto no campo `j`, no máximo 2 gravações por segundo).
4. **Leitura guiada:**
   - começa pela sala de espera, com a contagem de alunos ao vivo e os botões 📖 Começar pelo texto e 🎬 Começar pelo vídeo;
   - ◀ Voltar para escolher outro começo;
   - a resposta certa aparece sozinha quando todos respondem;
   - as telas dos alunos têm só frases curtas.
5. **Aba Aula:**
   - a barra 🧰 Ferramentas da aula fica presa no alto, com gavetas;
   - o roteiro abre na **Missão de hoje** (antes vinha a Revisão pelo cronograma);
   - o 🔔 sininho voltou a abrir na aba Aula.
6. **Outras mudanças do dia:**
   - transição suave entre telas (entrada escalonada) no portal, em `material.html` e no professorwell.com.br;
   - demonstração do simulador agora **opcional** (🎬 Ver como faz);
   - 20 emojis novos trocados por equivalentes que o **Windows 10** mostra.

### Painel de parede "Brincadeiras que viram arte" (Ivan Cruz): ⏸️ PARADO pelo professor ("deixa quieto sobre o painel", 23/11)
- **Pedido da coordenadora (Tânia Zuqueto, 1º ao 5º):** projeto "Brincadeiras que viram arte". Faixa no alto com esse título, no estilo da faixa "DA CULTURA AFRICANA". Mesmo lugar e tamanho do painel da Consciência Negra: **177 × 170,4 cm, 54 folhas A4, 9 × 6**.
- **Combinado:**
  - **releitura com cenas originais** (12 brincadeiras), crianças sem rosto;
  - no centro, retrato-homenagem **desenhado e sem rosto** (boina, barba branca, camisa de losangos, pião);
  - cantinho "Quem é Ivan Cruz?" com fatos conferidos;
  - crédito "Releitura inspirada na obra de Ivan Cruz".
- **Não se faz:** cópia das telas nem a foto dele. O professor vai explicar isso à coordenadora.
- **Fatos conferidos (Cultura Genial):**
  - nasceu no Rio de Janeiro em 1947 e formou-se em Direito em 1970;
  - começou a pintar em 1986, em Cabo Frio (RJ);
  - série das brincadeiras a partir do início dos anos 1990;
  - figuras sem rosto, para quem olha se imaginar na cena;
  - esculturas em praças de Cabo Frio.
- **Feito:**
  - página (artefato no Claude) com as medidas e um **prompt para o ChatGPT** com botão Copiar;
  - rascunho das cenas por código em `ferramentas/painel-a4/ivan-cruz-cenas-rascunho.py`.
- **Falta:**
  - prévia completa para a aprovação dele e, depois, o PDF das 54 folhas com `folhas.py`;
  - ninguém ouviu o áudio de 16 s da coordenadora;
  - ele ainda não respondeu se imprime colorido na Epson de casa.

### Fila da Produção (do PLANO-DE-ACAO, conferida hoje)
1. 🎬 Cenas de abertura de IA nas apostilas de 2027:
   - o 6º ano 1º bim e o 1º bim do 7º, 8º e 9º já estão feitos;
   - faltam os bimestres seguintes, sempre com a **ficha da turma**.
2. 🌀 Novo modelo em espiral (`docs/NOVO-MODELO.md`): **as 4 etapas estão prontas**, ou seja, o ano de 2027 inteiro, do 6º ao 9º, com Trilhas (commits "Etapa 3" e "Etapa 4"). Também está pronto o 4º bim de 2026 nas missões ainda não dadas. ⚠️ O `NOVO-MODELO.md` ainda dizia "⏳ Etapas 3 e 4": corrigido em 23/11/2026.
3. Seção 6 do PLANO-DE-ACAO, nesta ordem:
   - fechar `#/ver` e `#/testar` sem login;
   - proteger o login por código;
   - backup semanal;
   - painel lendo uma vez por dia, com 🔄 Atualizar agora;
   - alerta de uso do Firebase (junto com ele);
   - carregar mais rápido;
   - códigos da BNCC nos roteiros de 2026;
   - mais cenas em rolagem;
   - script de versões automáticas.
4. Registro no INPI (preparar; login e pagamento são dele). Versão "Em casa" das missões e teste no celular. Início de 2027 em fevereiro.
5. **Daqui a uma semana (≈30/11):** conversar com ele sobre o painel novo (o que usou e o que ficou esquecido).

---

## 3. Pendências por série (4º bimestre de 2026)

**Datas da rede:**
- feriados 27/11 e 30/11;
- **provas de 07 a 10/12** (seg 07, ter 08, qua 09, qui 10);
- Conselho de Classe 14/12;
- formatura do 9º em 15/12;
- aulas até 18/12.

A prova cobra só as missões que a turma estudou: o professor marca no painel no dia. Uma Revisão única antes da prova. A M4 só onde ainda sobra aula.

| Série | Turmas e horário | Situação e pendência |
|---|---|---|
| 5º | Arthur (seg 15h), Pedro e Santiago (ter 9h); atendimento individual, por vontade dele | **Sem prova e fora da revisão.** No dia da prova, outra tarefa. |
| 6º | 6º C seg 7h30 · 6º A qui 13h30 · 6º B qui 15h | 6º C (segunda): caminho A, Revisão em 23/11 e prova só com M1 e M2. 6º A e B: **M4 em 26/11**. Só o 6º vai para o SIGE (frequência quem lança é ele). |
| 7º | 7º C seg · 7º B ter (outros horários no `dados/catalogo.js`) | 7º C (segunda): Revisão em 23/11, prova com M1 e M2. **7º B: M4 em 24/11.** |
| 8º | todas na quarta: C 7h30 · D 9h · A 13h30 · B 15h | **M4 em 25/11.** Em 04/11 ele não deu a M1 (Listas: buscar e ordenar) e disse à turma que foi problema técnico: conferir no Diário o que cada turma estudou antes da prova. |
| 9º | A seg 13h30 · B seg 15h · C ter 9h · D qui 9h | 9º A e B: Revisão em 23/11 (ele deu a **M2** no 9º A nesse dia), prova com M1 e M2. **9º D: M4 em 26/11.** Ajustar o calendário do 9º D, que refez a M1 em 12/11 no lugar da M2. |

**Com o professor:**
- revisar as questões das provas;
- no dia da prova, conferir as missões marcadas e o "3 alternativas";
- revisar o vídeo ⚔️ duelo das redes (8º 2027);
- revisar os temas de 2027 (2º a 4º bim);
- dizer qual editor de vídeo os PCs têm (7º 2027, 4º bim, M4);
- ativar a verificação em duas etapas da conta Google do portal.

**Boletins do 4º bim:** quando chegar a hora, lembrá-lo do boletim + certificado meia folha (colorido para PDF e secretaria, P&B para a sala), com texto verdadeiro.

---

## 4. Onde fica cada coisa (o que o AGENTS.md não diz)

| Coisa | Onde |
|---|---|
| Fontes das apostilas (texto) | `fontes/*.md` → `python3 ferramentas/gerar_conteudo.py` → `dados/conteudo/*.js`. ⚠️ Em 22/11 a saída do gerador **não batia** com o JS publicado de 2027: conferir o `git diff` antes de publicar. Se divergir, editar o JS direto **e** a fonte. |
| Bloco de cena em rolagem dentro da missão | no .md `{{cena:id}}` → bloco `{"t":"cena","id":...}`; as cenas ficam em `js/cenas-missao.js` (classes `cr-`) |
| Página pública "O que se aprende aqui" | `material.html` + `material/` (PDF da cobertura BNCC e prints `img/*.webp`); geradores em `ferramentas/bncc/` (`mapear.js`, `gerar_pdf.js`, `gerar_pagina.js`) |
| Site professorwell.com.br | outro repositório: `1998welllaignier/professorwell` (um `index.html`; cartão "O que se aprende aqui", id `material`) |
| Leitura guiada | `js/leitura.js` (sala de espera, telão `#/telao/<turma>`, roleta, perguntas, XP) |
| Sala ao vivo (vídeo em sincronia, mostrar a tela, quadro) | `js/sala.js` (`config/sala_<turma>`); relógio do servidor em `P.sala.agora()` |
| Pincel, laser e quadro | `js/lousa.js` (espelho para o telão e os alunos: `receberEspelho`) |
| Música do painel | `js/musica.js` (uma aba só: `portal:musica:dono`; abafar entre janelas: `portal:musica:calar`) |
| Barra de ferramentas da aula | `js/painel.js` › `montarCaixa()` (classe `pp-kit`; atenção: `.pp-caixa` é outra coisa, a caixinha de pergunta) |
| Simuladores | `js/simpc.js` e outros; geradores em `ferramentas/simuladores/` |
| Desenhos por código | `ferramentas/ilustracoes/` (Estilo B, `biblioteca.py`) e `ferramentas/ilustracoes_2027/` (cenas de IA + camada de etiquetas) |
| Vídeos 2D | `ferramentas/video2d/` (uma pasta por vídeo; `finalizar.py`, `montar_video.py`, `gravar.py`, `alinhar_frases.py`, `audio.py`) |
| Provas | `node ferramentas/gerar_provas.js <gabarito.json>` → `dados/provas/` (o gabarito fica FORA do repositório) |
| Verificadores | `node ferramentas/verificar_modelo.js` (varredura total, precisa do `python3 -m http.server 8765`), `node ferramentas/verificar_autonomia.js`, `ferramentas/telas/auditar_telas.js` |
| Simulador do Firebase para testar o painel sem login | `ferramentas/telas/fb-simulado.js`: o Playwright troca o `firebase-app-compat.js` por ele (`page.route`); os avisos do dia abrem sozinhos e precisam ser fechados no teste |
| Painel de parede em folhas A4 | `ferramentas/painel-a4/` |
| Regras do Firebase | `docs/firestore.rules` (o professor cola no console) |

---

## 5. Como cada material é feito (passo a passo resumido)

### Apostila (missões)
1. Escrever ou ajustar `fontes/<apostila>.md` no modelo em espiral (`docs/NOVO-MODELO.md`) e as atividades em `dados/atividades/<apostila>.js`.
2. Rodar `gerar_conteudo.py` e conferir o diff.
3. Ilustrações em `dados/ilustracoes/` (`ancora`); roteiro em `dados/roteiros/`; Trilha `-trilha`.
4. Rodar `verificar_autonomia.js` e `verificar_modelo.js` (0 erros).
5. Prints para o professor aprovar: ele prefere **prints de tela** a abrir a apostila.
6. Subir a versão: `PORTAL_VERSAO` + os `?v=` dos arquivos mudados no `index.html`. Os dados das apostilas usam o `PORTAL_VERSAO`.
7. Commit em português com as duas linhas de assinatura e push na `main`, que publica em 1 a 2 minutos.
8. Anotar no PADRAO-DE-QUALIDADE.md tudo o que ele aprovou.

### Vídeo da missão (padrão 2D, ver PADRAO-VIDEOS-2D.md)
1. Escrever a história "problema → solução" (falas em `dados/historias/` ou `falas.txt`/`narracao.txt` na pasta do vídeo).
2. **Voz no ChatGPT:**
   - fica no **computador de casa** (dispositivo CASA, ligado 24 h), numa **conversa específica e fixada** do ChatGPT, a única que gera o MP3;
   - essa conversa usa a integração **HeyGen › Create Speech**, voz **"Murilo – Bright & Articulate"**, a mesma em todos os vídeos;
   - o modelo do prompt está em `ferramentas/video2d/2027-8ano-duelo-redes/prompt.txt`: "Gere uma NOVA narração com o Create Speech do HeyGen (só o MP3)… mesma voz Murilo… pausa de 2 segundos entre cada parágrafo… leia exatamente o texto… me mande o link direto do MP3" + o texto;
   - baixar o MP3 pelo link;
   - **autorização dele (17/11):** o Claude pode usar o computador de casa para gerar a narração.
3. Montar com `finalizar.py <pasta> <voz.mp3> <saida.mp4>`: acha as pausas, alinha frases, põe 0,9 s de respiro entre parágrafos, grava e mistura música e efeitos. **A voz nunca é esticada.** Para encaixar por palavra, usar a habilidade transcrever-audio.
4. Conferir legenda (`verificar_legenda.py`), abertura "digna de Oscar", pausa entre assuntos e nome dele em destaque.
5. **YouTube:**
   - Studio do canal "Prof. Welington Laignier", pelo Chrome do computador de casa;
   - sobe como **privado**; ele revisa e só depois passa para **"Não listado"** (perguntar antes de liberar se ele já revisou);
   - "conteúdo para crianças", playlist "Xº ano · Nº bimestre AAAA";
   - não apagar versões antigas.
6. Ligar no portal (`P.videosMissao` em `js/historia.js`) e mover para "✅ No ar" no `docs/VIDEOS-A-POSTAR.md`.

### Desenhos
> ⭐ **Decisão do professor (23/11/2026):** "os desenhos estão ótimos… o ChatGPT provavelmente vai ficar **apenas para o desenho da capa** (a cena da primeira página da apostila); o resto você está tirando de letra".

- **O estilo que ele aprovou e elogiou** é o das imagens das **palavras pontilhadas** (`ferramentas/ilustracoes_2026/termos.py` → `dados/termos-imagens.js`). As peças ficam em **`ferramentas/ilustracoes_2026/linha_clara.py`**:
  - contorno preto grosso (`#1c1f22`, 3,5 px);
  - cores vivas chapadas;
  - **sombra sólida deslocada** (`sombra=4…7`: um retângulo preto igual, deslocado para baixo e para a direita);
  - objetos como de verdade.
- **Cores com significado:** azul = entrada, amarelo = processa, verde = saída, roxo = guardar, vermelho = perigo, ciano = rede.
- **Exemplo de referência** feito para conferir a passagem: `ferramentas/ilustracoes_2026/exemplo_mesa.py` (mesa com monitor, teclado, mouse, impressora e gabinete). Desenho novo começa copiando esse jeito.
- **Esquemas e explicações:** por código, Estilo B (linha clara), `ferramentas/ilustracoes/`.
- **Capa / cena de abertura da apostila (e só ela, decisão de 23/11):** imagem gerada no **ChatGPT do computador de casa**, sempre com a **ficha da turma** (`ferramentas/ilustracoes/referencia/ia/ficha_da_turma_IA.png`), sem texto na imagem. Etiquetas e setas entram por código (`ferramentas/ilustracoes_2027/cenas.py`).
- Desde 20/11 o Claude pode desenhar por código no estilo aprovado, sem depender sempre do ChatGPT.
- **Nunca:** logos, fotos de figuras públicas, cópia de obras protegidas.

### Prova
1. Montar o banco: 2 de múltipla escolha por missão + as Perguntas rápidas. Trilha: 1 questão de 3 alternativas por missão.
2. Escrever o gabarito JSON **fora do repositório** e rodar `gerar_provas.js`. No site fica só o hash.
3. No dia, o professor marca no painel as missões estudadas.
4. Sem aula dada: trabalho valendo nota que começa e termina na aula.

### Publicação no site
- O portal publica pelo push na `main` de `portal-da-informatica`. O professorwell.com.br, pelo push na `main` de `professorwell`.
- **Push de tag é bloqueado.** Para backup, usar um branch.
- Conferir no celular (CHECKLIST-DE-MUDANCAS).

### Painel de parede em folhas A4
Imagem de 1770 × 1704 mm (~8362 × 8050 px) → `ferramentas/painel-a4/folhas.py` → PDF com 54 folhas, faixa de cola, códigos e mapa.

---

## 6. Logins e acessos (sem senhas; o Claude **nunca digita senha** nem guarda credencial)

| Acesso | Como o Claude usa |
|---|---|
| **GitHub** (conta `1998welllaignier`, repositórios `portal-da-informatica` e `professorwell`) | Pelo git da sessão: clone, commit e push na `main`. |
| **Firebase** (projeto `portal-da-informatica`, na conta Google de professor) | O código do portal usa a chave pública. O **console** exige verificação em duas etapas: o Claude não entra. O professor manda prints do celular (uso, regras). Plano grátis Spark: 50 mil leituras/dia. Blaze: cerca de US$ 0,03 por 100 mil leituras (só com o OK dele; nunca assinar nem pagar). |
| **Painel do professor** (`#/painel`) | Login Google do professor, feito por ele. Para testar, usar o simulador do Firebase. |
| **YouTube** (canal @professorwelllaignier, na conta de professor) | YouTube Studio no Chrome do computador de casa, já logado por ele. |
| **ChatGPT** | Computador de casa, conversa fixada da narração (HeyGen) e geração de cenas. |
| **Dispositivos** | CASA (desktop, ligado 24 h: Produção, SIGE e Estudos, **uma conversa de cada vez**), DELL (notebook: 🏠 Pessoal), PROFLABOINFO (PC da sala: 🏫 Escola; ele prefere não dividir durante a aula). |
| **Gmail e Google Drive** | Conectores no Claude (conta de professor). Endereço na memória do Claude, não aqui. |
| **Registro.br** (professorwell.com.br) | Do professor. Ele paga e configura. |
| **SIGE** | É da conversa 🗂️ SIGE, não da Produção. Ele entra com o login. |

**Regras de segurança:**
- não mexer em configurações de segurança do Windows nem da conta Google: a verificação em duas etapas é **ele** quem ativa;
- PEIs só leitura;
- os códigos dos alunos são pessoais;
- nada de dado real de aluno no repositório;
- o certificado dele tem CPF/RG: nunca vai para o site nem para o repositório.

---

## 7. Combinados feitos com o professor nesta conversa (22 e 23/11/2026)
Os que viraram regra de material já estão no PADRAO-DE-QUALIDADE.md. Aqui ficam os de **jeito de trabalhar**:

### Jeito de trabalhar
- **Respostas em português.** No fim de **toda** resposta, corrigir a ortografia da mensagem dele ou dizer "Na sua mensagem não encontrei nenhum erro de escrita".
- **Ideia com nome:** quando ele explicar com as próprias palavras uma ideia que já tem nome, dizer o nome e anotar em `/topics/conceitos-com-nome.md` (memória do Claude).
- **Depois de cada mudança:**
  - anotar no PADRAO-DE-QUALIDADE.md;
  - subir `?v=` e `PORTAL_VERSAO`;
  - commit (com as linhas Co-Authored-By e Claude-Session) e push;
  - **mandar prints** (sempre);
  - **avisar** tudo o que foi mudado por conta própria.
- **Jogo ou simulador antes do formato tradicional.**
- **Nunca** usar `alert`, `confirm` nem `prompt` do navegador.
- **Só fato verificado** entra nos materiais.
- **Ele está em aula:** responder rápido e direto, consertar primeiro e explicar depois. Ele usa ditado por voz: palavras trocadas são comuns.
- **Autorização de 22/11, 16h31:** ele autorizou todas as mudanças, quer ser informado depois e poder voltar atrás. Para isso, existe o branch de backup.

### Telas, aula e leitura guiada
- **Telas da turma:** só o essencial, frase curta, sem letrinha miúda nem instrução que ele já dá falando.
- **Leitura guiada:**
  - nunca começa sozinha;
  - em 3 telas, os comandos ficam no painel dele e o placar só com tela cheia e som;
  - em 2 telas, os comandos também no placar.
- **Vídeo aberto pela leitura guiada:** o botão é "◀ Encerrar o vídeo e voltar para a leitura guiada". "Encerrar e liberar a turma" só fora da leitura.
- **Ferramentas da aula:** todas juntas, num lugar fácil, sem ocupar a tela (barra presa + gavetas).
- **Transição suave:** nada de efeito exagerado.
- **Demonstração do simulador:** opcional.

### Painel de parede e material público
- **Painel Ivan Cruz:** releitura com cenas originais e retrato desenhado sem rosto. Nada de cópia das obras nem da foto dele.
- **Página pública "O que se aprende aqui":** só amostras e prints, nada para baixar; nunca chamar de "transparência".

### Firebase, conversas e celular
- **Firebase:** ele quer o painel lendo uma vez por dia, com botão de atualizar. Antes de qualquer plano pago, conversar com ele.
- **Conversas:** criar a 🏭 Produção 2.0 (esta passagem). A 🎙️ Áudios foi criada só para transcrever, com a habilidade transcrever-audio.
- **Lembretes:** no celular, ele pede e o Claude cria o lembrete e o evento no calendário (ex.: "Magno", 26/11, 7h).

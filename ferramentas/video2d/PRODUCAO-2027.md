# Produção dos vídeos das missões 2027 (iniciada em 25/11/2026)

Ordem: por bimestre; 5º ano fica de fora (acompanha a turma da sala).
Fluxo: `cenas.js` → `novo_video.py` → `prever.py` → narração no ChatGPT (HeyGen, voz Murilo) → `voz_link.txt` → baixar MP3 → `finalizar.py` → `verificar_legenda.py` → revisão do professor → YouTube (privado → não listado).

⛔ 25/11/2026 (18h): a franquia mensal gratuita de voz do HeyGen acabou (7º M7 em diante). Esperando a decisão do professor (plano pago, outra voz ou esperar o mês virar).

Download (resolvido em 25/11/2026): os MP3 são baixados pelo Chrome de casa (pacote .tar numa origem neutra) e trazidos pela pasta Downloads.


## 📋 INVENTÁRIO OFICIAL (fonte única da verdade — atualizar a CADA mudança; conferido em 25/11/2026 18h50)
Versões: **v1** = feito no modelo simplificado (9 a 12 cenas, sem câmera) → ABAIXO do padrão, será refeito · **v2** = padrão completo (lista de conferência de docs/PADRAO-VIDEOS-2D.md).
Voz: o código é o começo do id do MP3 no HeyGen (arquivo `voz_link.txt` da pasta). MP4: onde está o vídeo montado. "No ar" = id no YouTube e em `js/historia.js`.

| Vídeo | Pasta | Versão atual | Voz | MP4 | YouTube / portal | Situação |
|---|---|---|---|---|---|---|
| 6º 1ºb M1 Primeiros passos | 2027-6ano-m1-v2 (a v1 é 2027-6ano-m1) | v2 ✅ (23 cenas) | sim (16/11) | – | 9sPLQiecnHc no ar (provavelmente a v2; confirmar a duração no YouTube) | no padrão |
| 6º 1ºb Especial Teclado | 2027-6ano-m1-teclado | ✅ (34 cenas) | sim | – | MGRoBzcxwX8 no ar | no padrão |
| 6º 1ºb M2 Entrada, processamento e saída | 2027-6ano-m2 | **v2 ✅** (15 cenas, "Cidade Computador"; a v1 está no histórico do git) | precisa de voz NOVA (texto mudou) | – | oLgO5Zz0Bbg no ar = **v1** (trocar depois da aprovação) | v2 pronta, esperando voz |
| 6º 1ºb M3 Hardware e software | 2027-6ano-m3 | **v2 ✅** (13 cenas, "A Banda do Computador"; v1 no histórico) | precisa de voz NOVA | – | Z7urMeervDQ no ar = **v1** (trocar depois da aprovação) | v2 pronta, esperando voz |
| 6º 1ºb M4 Pastas e arquivos | 2027-6ano-m4 | v1 ❌ | ffe0d453 | /tmp (enviado, não postado) | – | refazer → v2 |
| 6º 1ºb M5 Tipos de dados | 2027-6ano-m5 | v1 ❌ | 9e6d1ec1 | enviado, não postado | – | refazer → v2 |
| 6º 1ºb M6 Boa convivência na rede | 2027-6ano-m6 | v1 ❌ | cbc67eba | enviado, não postado | – | refazer → v2 |
| 6º 1ºb M7 Digitação sem medo | 2027-6ano-m7 | v1 ❌ | 39975661 | enviado, não postado | – | refazer → v2 |
| 6º 1ºb M8 Atalhos | 2027-6ano-m8 | v1 ❌ | 04ed897e | enviado, não postado | – | refazer → v2 |
| 7º 1ºb M1 Programar com blocos | 2027-7ano-m1 | v1 ❌ | sim (antiga) | – | -Y5vRictuKA no ar | refazer → v2 |
| 7º 1ºb M2 Listas no programa | 2027-7ano-m2 | v1 ❌ | sim (antiga) | – | 4Uu1LKUF-YY no ar | refazer → v2 |
| 7º 1ºb M3 Registros | 2027-7ano-m3 | v1 ❌ | a9dcb938 | enviado, não postado | – | refazer → v2 |
| 7º 1ºb M4 Depurar | 2027-7ano-m4 | v1 ❌ | be32b934 | enviado, não postado | – | refazer → v2 |
| 7º 1ºb M5 Decompor e reaproveitar | 2027-7ano-m5 | v1 ❌ | c974346d | enviado, não postado | – | refazer → v2 |
| 7º 1ºb M6 Programar em dupla | 2027-7ano-m6 | v1 ❌ | 467f382b | enviado, não postado | – | refazer → v2 |
| 7º 1ºb M7 Desafios de depuração | 2027-7ano-m7 | v1 ❌ (só cenas) | – | – | – | refazer → v2 |
| 7º 1ºb M8 O placar do quiz | 2027-7ano-m8 | v1 ❌ (só cenas) | – | – | – | refazer → v2 |
| 8º 1ºb M1 a M3, M5 a M8 | 2027-8ano-m1…m8 | v1 ❌ (só cenas) | – | – | – | refazer → v2 |
| 8º 1ºb M4 Busca binária | 2027-8ano-m4 (a v1 ficou fora do repositório) | **v2 ✅ piloto** (13 cenas, câmera) | – | – | – | esperando a opinião do professor e a voz |
| 9º 1ºb M1 a M8 | 2027-9ano-m1…m8 | v1 ❌ (só cenas) | – | – | – | refazer → v2 |
| 6º 2ºb M1 e M2 | 2027-6ano-b2-m1, b2-m2 | v1 ❌ (só cenas) | – | – | – | refazer → v2 |
| 8º 2ºb Curiosidade: duelo das redes | 2027-8ano-duelo-redes | (14 cenas; conferir) | sim | sim | – | esperando revisão |

Regras para não confundir: (1) a pasta é sempre a do vídeo; quando houver versão nova na mesma pasta, a antiga vai para o histórico do git (nunca duas pastas "vivas" para o mesmo vídeo, exceto 6º M1, já marcado); (2) ao refazer um vídeo que está no ar, o id antigo só sai de `js/historia.js` depois que o professor aprovar o novo; (3) esta tabela é atualizada no mesmo commit de cada mudança.

## 1º bimestre 2027
| Pasta | Cenas | Voz (link) | MP4 |
|---|---|---|---|
| 6º M1–M3 (+ Especial Teclado) | ok | ok | ✅ no ar |
| 7º M1–M2 | ok | ok | ✅ no ar |
| 2027-6ano-m4 Pastas e arquivos | ok | ok | ok, esperando revisão |
| 2027-6ano-m5 Tipos de dados | ok | ok | ok, esperando revisão |
| 2027-6ano-m6 Boa convivência na rede | ok | ok | ok, esperando revisão |
| 2027-6ano-m7 Digitação sem medo | ok | ok | ok, esperando revisão |
| 2027-6ano-m8 Atalhos | ok | ok | ok, esperando revisão |
| 2027-7ano-m3 Registros | ok | ok | ok, esperando revisão |
| 2027-7ano-m4 Depurar | ok | ok | ok, esperando revisão |
| 2027-7ano-m5 Decompor e reaproveitar | ok | ok | ok, esperando revisão |
| 2027-7ano-m6 Programar em dupla | ok | ok | ok, esperando revisão |
| 2027-7ano-m7 Desafios de depuração | ok | ⛔ franquia HeyGen | – |
| 2027-7ano-m8 O placar do quiz | ok | ⛔ franquia HeyGen | – |
| 8º M1–M8 (2027-8ano-m1…m8) | ok | ⛔ franquia HeyGen | – |
| 9º M1–M8 (2027-9ano-m1…m8) | ok | ⛔ franquia HeyGen | – |

## 2º, 3º e 4º bimestres 2027
Nenhum vídeo de missão ainda (8 por apostila × 4 séries × 3 bimestres = 96). Pronto à parte: ⚔️ curiosidade "O duelo das redes" (8º, 2º bim.), esperando revisão.

## 🎓 Assuntos difíceis: candidatos a vídeo extra "ultra explicado" (levantamento de 25/11/2026)
Referência: o 8º ano · 4º bim. 2026 · M1 "Listas: buscar e ordenar como um computador" precisou do vídeo passo a passo.
- 🔴 Alta (mesma família do que precisou do extra): 8º 1º bim. M4 Busca binária, M5 Método da bolha, M6 Recursão, M7 Ordenação por seleção, M8 Fractais; 9º 1º bim. M5 Autômatos (máquinas de estados); 9º 2º bim. M4 Criptografia hoje (chaves e HTTPS); 6º 3º bim. M3 Variáveis e M4 Um bloco para muitos casos.
- 🟡 Média: 7º 1º bim. M3 Registros e M4 Depurar; 7º 2º bim. M2 Caminho mais curto; 8º 2º bim. M2 DNS e M5 Paralelismo e concorrência; 9º 1º bim. M2–M3 Árvores e M6 Programação por eventos; 7º 3º bim. M1 Protocolos; 6º 2º bim. M4 Seleção (se… então… senão).
- 🟢 Atenção ao vocabulário (texto bem explicado resolve): 8º 4º bim. M2 LGPD e dados sensíveis; 9º 4º bim. M1 Licenças; 6º 4º bim. M3 Bits e bytes.

## 2º bimestre 2027
| Pasta | Cenas | Voz | MP4 |
|---|---|---|---|
| 2027-6ano-b2-m1 Algoritmos do dia a dia | ok | ⛔ | – |
| 2027-6ano-b2-m2 Sequência | ok | ⛔ | – |
| 6º M3–M8, 7º, 8º e 9º | – | – | – |

Peças reaproveitáveis por série (personagens, fichas, telinha, grafo, robô no tabuleiro): `pecas-2027/helpers-<série>ano.js` — colar no começo do cenas.js.

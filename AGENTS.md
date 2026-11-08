# Instruções para qualquer IA que for mexer neste projeto

> Vale para o Claude, o ChatGPT/Codex ou qualquer outro assistente.
> Leia este arquivo inteiro **antes** de mudar qualquer coisa.

## 1. O que é o projeto

**Portal da Informática**: apostilas digitais interativas de Informática do
**Prof. Welington Laignier**, na **EMEF Juscelino Kubitschek (Escola JK)**, em Curionópolis/PA.
Turmas do 5º ao 9º ano, 4º bimestre de 2026.

- Endereço do portal: https://portal.professorwell.com.br (GitHub Pages deste repositório,
  `1998welllaignier/portal-da-informatica`, branch `main`).
- Página inicial do professor: https://professorwell.com.br (outro repositório:
  `1998welllaignier/professorwell`, um `index.html` só).
- Site **estático** (HTML + CSS + JavaScript puro, sem build, sem framework).
  Cada `git push` na `main` publica sozinho em 1 ou 2 minutos.
- Banco de dados: **Firebase** (projeto `portal-da-informatica`): login dos alunos por código,
  progresso, painel do professor e o **Modo Explorador** (Escola Santos Dumont, Prof. Vinícius).
  A chave do Firebase em `js/nuvem.js` é pública por natureza; a segurança está nas regras
  (`docs/firestore.rules`).

### Como a aula funciona
- Cada missão é uma aula. Páginas: 💡 Para começar → 🎮 Mão na massa (simulação) →
  📖 O que significa? → 🌎 Onde eu uso isso? → 🟢 Básico → 🟡 Desafio → 🔴 Turbo →
  ✅ Perguntas rápidas → 🧠 Resumo.
- **Básico** (obrigatório) = 1,0 ponto por missão e libera os jogos livres no fim da aula.
  **Desafio** = +0,25. **Turbo** = +0,25. Quando o Básico termina, aparece a faixa verde
  "Básico concluído", explicando ao aluno o que fazer depois.
- A correção é automática. **Não existe mais carimbo nem apostila impressa.**
- O professor acompanha pelo Veyon e pelo **Painel do professor** (`#/painel`, login Google).

## 2. Princípios pedagógicos (obrigatórios)
1. **Autonomia do aluno.** Toda resposta de atividade precisa estar escrita no texto da missão
   (Para começar, O que significa?, Onde eu uso isso?) ou no próprio enunciado.
   Nada pode depender de uma explicação do professor. Nada de "chame o professor" para
   continuar ou terminar.
2. **Nada explicado por alto.** Toda sigla e todo termo técnico vêm explicados por completo:
   o que a sigla significa, a tradução (só quando faz sentido, como HD e SSD; hardware e
   software não se traduzem, só se explicam), o que é, onde se vê e para que serve.
3. Toda missão tem o **"Onde eu uso isso?"** (situações do dia a dia).
4. Português do Brasil, linguagem simples, para alunos de 10 a 15 anos.
5. Correção automática sempre que possível (veja `docs/PADRAO-ATIVIDADES.md`).

## 3. Onde fica cada coisa
| Quero mudar… | Arquivo |
|---|---|
| Texto das missões (Para começar, termos, Onde eu uso, V/F, resumo, Como usar) | `fontes/<apostila>.md` e depois rodar `python3 ferramentas/gerar_conteudo.py` (gera `dados/conteudo/*.js`; **nunca edite `dados/conteudo/` à mão**) |
| Atividades (Mão na massa, Básico, Desafio, Turbo, correções do V/F) | `dados/atividades/<apostila>.js` (escrito à mão; modelo em `_MODELO-atividades.js`) |
| Roteiro da "Tela da aula" do professor | `dados/roteiros/<apostila>.js` |
| Ilustrações das apostilas | `dados/ilustracoes/<apostila>.js` |
| Séries, turmas e lista de apostilas | `dados/catalogo.js` |
| Modo Explorador (Santos Dumont): missões | `dados/explorador.js` |
| Telas do aluno, navegação, faixa do Básico | `js/portal.js` |
| Tipos de atividade (escolha, ligar, robô, grafo…) | `js/atividades.js` |
| Simulações da "Mão na massa" (mensagens, rota, lâmpadas…) | `js/simulacoes.js` (nomes com `sim_` quando o nome já existe) |
| Painel do professor e relatório da aula | `js/painel.js` · Tela da aula: `js/aula.js` |
| Login, Firebase, sincronização | `js/nuvem.js` |
| Modo Explorador (telas e painel) | `js/explorador.js` |
| Visual | `css/portal.css` |
| Versão (para os navegadores pegarem a versão nova) | `index.html`: `PORTAL_VERSAO` e todos os `?v=` |

Apostilas (ids): `informatica-5ano-4bim`, `informatica-6ano-4bim`, `informatica-7ano-4bim`,
`informatica-8ano-4bim`, as Trilhas Passo a Passo `informatica-6ano-4bim-trilha`, `informatica-7ano-4bim-trilha`, `informatica-8ano-4bim-trilha` e `informatica-9ano-4bim-trilha`,
`informatica-9ano-4bim`.

### Alunos atípicos (🧩) e Trilha Passo a Passo (👣)
No painel, o professor marca o aluno como atípico (`alunos/{id}.atipico`, só o professor lê; aparece 🧩 na tabela, na presença, no relatório e nos cartões) e, se for o caso, com "👣 Usar a Trilha Passo a Passo". A marcação fica em
`alunos/{id}.trilha` e `acessos/{turma_codigo}.trilha`. Quando esse aluno entra sozinho com o código,
o portal troca a apostila da turma pela Trilha Passo a Passo da série (catálogo: `trilha: true`,
`base: <apostila da turma>`). Toda função que regrava o documento `acessos` precisa manter o campo `trilha`.

### Prova do bimestre (📝)
- Questões em `dados/provas/<apostila>.js` (10 questões, 0,5 cada, até 5,0), geradas por
  `node ferramentas/gerar_provas.js <gabarito.json>`. O gabarito **não** fica no repositório (ele é público):
  no arquivo vai só a impressão digital da resposta certa (`js/prova-hash.js`). Para recuperar o gabarito,
  teste cada alternativa com `provaHash` (o painel faz isso no botão "👁️ Mostrar gabarito").
- O professor liga o "📝 Dia de prova" da turma no painel (`config/prova_<turma>`); o aluno digita o código e
  cai direto na prova (`js/prova.js`, rota `#/prova/<apostila>`). Respostas em `provas/<aluno>_<apostila>_<tentativa>`;
  a nota é recalculada no painel. Recuperação = 2ª tentativa liberada pelo professor.

## 4. Pode fazer
- Corrigir ou melhorar textos, enunciados, dicas, explicações e respostas.
- Acrescentar atividades usando os **tipos que já existem** (veja a lista no topo de
  `dados/atividades/_MODELO-atividades.js`).
- Ajustar visual em `css/portal.css`.
- Ao terminar **qualquer** mudança:
  1. `node --check` em cada `.js` alterado (não pode dar erro);
  2. se mexeu em `fontes/`, rodar `python3 ferramentas/gerar_conteudo.py`;
  3. rodar `node ferramentas/verificar_autonomia.js` (o resumo final deve ficar com
     **0 atividades que dependem do professor** e **0 textos com professor/carimbo/papel**;
     os itens 🔎 são para revisão humana);
  4. trocar a versão no `index.html` (`PORTAL_VERSAO` e todos os `?v=` para a data de hoje,
     por exemplo `20261110a`);
  5. fazer commit com mensagem clara, em português, dizendo o que mudou.

## 5. NÃO pode fazer
- **Nunca** colocar nomes de alunos, códigos de acesso, notas ou qualquer dado pessoal de aluno
  neste repositório (ele é público). Esses dados ficam só no Firebase.
- **Não** mexer em `js/nuvem.js` (login e Firebase), `docs/firestore.rules` ou no console do
  Firebase sem o professor pedir claramente e entender o risco: um erro aqui tranca os alunos
  fora do portal ou expõe dados.
- **Não** apagar nem renomear arquivos, ids de missão (`m1`, `m2`…) ou ids de atividade:
  o progresso dos alunos está ligado a esses ids.
- **Não** criar um tipo de atividade com nome que já existe (`T.grafo`, `T.bolha`, `T.cesar`…):
  o novo apaga o antigo e quebra as atividades que usam o antigo. Antes de criar, procure
  `T.<nome> =` em `js/`. O verificador também acusa isso.
- **Não** mudar a regra de nota (Básico 1,0 · Desafio 0,25 · Turbo 0,25 · prova no portal
  até 5,0) sem o professor pedir.
- **Não** mudar o `CNAME` nem as configurações do GitHub Pages.
- **Não** tirar a correção automática para pôr "o professor confere".
- Na dúvida, **pergunte ao professor antes** e faça a menor mudança possível.

## 6. O que fica fora deste repositório
- **Diário de Classe** (chamada, Básico/Desafio de cada aluno, registro da aula, boletim):
  é uma página dentro da conta do Claude do professor. Outras IAs não conseguem abrir nem
  editar. O professor pode preencher à mão (são botões).
- **Relatório da aula**: no Painel do professor (`#/painel`), em cada dia, há o botão
  "Copiar relatório", com presentes, ausentes e quem concluiu o Básico e o Desafio.
  O professor cola esse texto na conversa com o Claude, que lança tudo no diário.
- Cadastro de alunos (Escola JK e Santos Dumont): pelo painel, guardado no Firebase.

## 7. Plano de ação
O que já está combinado para os próximos bimestres: `docs/PLANO-DE-ACAO.md`.

## 8. Como testar sem publicar
Abra `index.html` direto no navegador (funciona sem internet, no modo antigo) ou rode
`python3 -m http.server 8000` na pasta e abra `http://localhost:8000`.

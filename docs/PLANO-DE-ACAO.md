# Plano de ação — Portal da Informática (combinado em 07/11/2026)

## 📌 Situação atual (atualizado em 08/11/2026, 16h)
Claude Max (5x) assinado por um mês em 08/11 para adiantar tudo. **Voltar ao Pro antes de 08/12** (lembretes no celular em 01/12 e 05/12).

### ✋ O que o professor precisa fazer
- [ ] **Hoje à noite, no computador (≈10 min):** abrir o console do Firebase logado; o Claude cola as regras novas de `docs/firestore.rules` (coleção `provas` + horário-limite) e o professor clica em Publicar. Sem isso, a aba 📝 Prova do painel e o envio da prova não funcionam.
- [ ] Hoje à noite, com o painel aberto no computador: o Claude preenche os **📝 Apoios na aula** dos 4 alunos com 🧩 que já frequentam (texto preparado em 08/11, a partir dos PEIs). Eles aparecem na **Tela da aula** do painel, só para o professor.
- [ ] Depois de publicar: teste rápido da prova com um aluno de teste (ligar o Dia de prova, fazer, conferir a nota no painel, encerrar).
- [ ] Revisar as questões das provas (arquivo “Gabarito-Provas-4bim.md”, enviado no chat em 08/11) e dizer se quer trocar alguma.
- [ ] Decidir a data da prova de cada turma (fim de novembro).

### ✅ Feito
- 07/11: Mão na massa, faixas do Básico, autonomia (sem carimbo), botão Página inicial, aviso da dupla, cartazes da porta, marcação 🧩 (36 alunos) e 👣 (8º B), Trilha do 8º adaptada ao PEI, botão Ouvir retirado.
- 08/11: Trilhas Passo a Passo do 6º, 7º e 9º ano; prova no portal (Dia de prova no painel, cronômetro até o fim da aula, envio automático quando o tempo acaba, recuperação e gabarito no painel); site professorwell (horários Manhã/Tarde, aviso da prova no portal, animações, barra azul); capa do perfil; Caderno Digital com histórico de pagamentos em grupo.

### 🔜 Fila do Claude (nesta ordem)
0. **Revisão com o professor antes de cada aula** (pedido em 08/11): na véspera, uma conversa curta com o que a turma vai fazer, o assunto explicado de forma simples, as respostas de cada atividade e as perguntas que os alunos costumam fazer, para o professor nunca chegar à aula sem saber o que fazer. Pendências já conhecidas:
   - **8º ano, Missão 2 (Internet por dentro):** quarta, 11/11 (8º C 7h30, 8º D 9h, 8º A 13h30, 8º B 15h). Revisar na terça, 10/11.
   - **8º ano, Missão 1 (Listas: busca sequencial, busca binária e método da bolha):** quarta, 18/11. Foi adiada em 04/11 porque o professor ainda não dominava o assunto. Revisar com calma antes de 18/11.
1. ~~Análise dos PEIs e relatório “🧩 atípicos que frequentam”~~ **feito em 08/11** (relatório no painel, aba Presença). Pela chamada da 1ª semana, só 4 alunos com 🧩 vieram (todos do 8º ano): 1 na Trilha (👣) e 3 no caminho A (apostila da turma com apoios). Os outros ainda não vieram ou a turma não teve chamada registrada. **Reavaliar toda semana**, a cada chamada nova.
2. Diário de Classe dentro do painel (presença, vistos e notas da prova automáticos) + transferência do diário atual.
3. Tarefas presas ao dia e à hora da aula + liberação manual + aluno de outra turma + “Missão de hoje”.
4. “Ver como aluno” no painel.
5. Atividade de recuperação de cada série; boletins em PDF; SIGE (com o professor).

## 1. Quinta-feira (renovação do limite do Claude)
- [ ] Levar o Diário de Classe para dentro do Painel do professor (presença e visto de Básico/Desafio/Turbo automáticos, corrigíveis à mão, automático desligável por turma).
- [ ] Transferir tudo do diário atual, conferindo os nomes dos alunos.
- [ ] Lançar os relatórios da semana guardados no painel.
- [ ] Testar com uma turma antes de liberar para todas.
- [ ] Botão "Missão de hoje": o professor escolhe no painel e ela aparece grande para os alunos logo depois do código.
- [ ] Atividades só no dia e na hora da aula da turma (conferido pela hora do servidor, nas regras do Firebase), com tolerância antes e depois; o professor pode liberar fora do horário pelo painel: a turma toda por um tempo escolhido, só um aluno (reposição, recuperação, aluno que estuda em casa), e fechar antes da hora. **Decidido:** os textos de estudo (Para começar, O que significa?, Onde eu uso isso?, Resumo) ficam sempre abertos, inclusive em casa; só as tarefas ficam presas ao horário.
- [ ] **"Ver como aluno" no painel** (pedido em 08/11): o professor abre, dentro do painel, a mesma apostila que os alunos veem, sem aluno fictício, para projetar e ler junto com a turma. As respostas ficam escondidas atrás de um botão "Mostrar resposta" (nunca aparecem de primeira). Não é o roteiro de falas: é a tela do aluno. A apostila continua autossuficiente: tudo o que o aluno precisa para responder está no texto dela.
- [ ] Aluno que frequenta a aula de **outra turma** (curso, karatê, natação…): no painel, marcar "frequenta a aula da turma X". O horário dessa turma libera as tarefas dele; a presença e as notas continuam na turma dele; ele segue a própria apostila.

### Alunos atípicos (🧩) — também na quinta
- [x] Descobrir **quem frequenta**: relatório "🧩 atípicos que frequentam" no painel, aba Presença (feito em 08/11). Material só para os frequentes.
- [ ] Para cada aluno frequente: ler o PEI e escolher um de 3 caminhos — **A)** apostila da turma com apoios (🔊 ouvir, roteiro da aula antecipado, menos itens); **B)** Trilha Passo a Passo da série (👣); **C)** material individual, só quando A e B não servem.
- [x] Rever a Trilha do 8º ano com o PEI da aluna para quem ela foi feita (feito em 07/11: jogo com botões de 1 a 10, conferência por clique, Paint só com quadrados coloridos, sem o botão Ouvir, porque a sala não tem som).
- [x] **(Feito em 07/11, à noite)** **Marcações no painel, feitas pelo Claude** (o professor deixa o painel aberto e logado no computador de casa; o Claude entra e faz): marcar 🧩 em todos os alunos com PEI (lista conferida em 07/11, guardada fora do repositório) e 👣 Trilha Passo a Passo na aluna do 8º B; depois conferir na tabela de cada turma se ficou tudo certo.
- [x] **(Feito em 08/11)** **Trilha Passo a Passo para cada série** (6º, 7º e 9º; a do 8º já existe): uma apostila **genérica**, não feita para um aluno só, para qualquer aluno atípico que não consegue acompanhar a apostila regular. Mesmas missões e mesmos assuntos da turma, porém mais simples: um passo por vez, frases curtas, quase tudo por clique, poucas opções, pouca digitação e Básico curto. A 👣 no painel leva o aluno à Trilha da série dele. Ajustes individuais só quando o PEI pedir.
- [ ] Acompanhar a frequência deles toda semana; quem começar a vir entra na análise.

## 2. Fim do 4º bimestre de 2026
- [x] Prova no próprio portal (feita em 08/11; falta publicar as regras do Firebase): 10 questões de 0,5, sem dicas, uma tentativa, questões embaralhadas, Dia de prova ligado e encerrado pelo painel, cronômetro até o horário-limite da turma (padrão: fim da aula) com envio automático, nota no painel. Falta: nota ir direto para o boletim (vem com o diário no painel).
- [x] Recuperação: liberar a prova de novo só para quem precisa (botão no painel, aba Prova).
- [ ] Boletins em PDF pelo diário.
- [ ] SIGE (sistema da prefeitura), junto com o Claude.

## 3. Cada bimestre seguinte (cerca de 2 semanas antes)
- [ ] Professor passa os assuntos (ou o Claude propõe pela BNCC) e as datas.
- [ ] Um texto-base por série gera:
  - portal (missões com Mão na massa, Básico, Desafio, Turbo, correção automática; rodar `ferramentas/verificar_autonomia.js`);
  - apostila **impressa** ilustrada em PDF, só para alunos que estudam em casa (carimbo só existe no papel);
  - guia do professor, roteiro da aula, prova no portal e atividade de recuperação.
- [ ] Abrir o bimestre no diário com o cronograma de cada turma.
- Durante o bimestre: presença, vistos e boletim automáticos; o professor confere o painel, faz o registro da aula e pede o vídeo da missão na semana da aula.

## 4. Início de 2027
- [ ] Turmas novas, listas de alunos e códigos de acesso.
- [ ] Novo quadro de horários.
- [ ] Kit de diagnóstico do 6º ano.
- [ ] O 4º bimestre de 2026 fica guardado como arquivo.

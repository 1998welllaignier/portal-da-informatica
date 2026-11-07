Olá! Sou o Prof. Welington Laignier, professor de Informática da EMEF Juscelino Kubitschek (Escola JK), em Curionópolis/PA, com turmas do 5º ao 9º ano. Normalmente eu trabalho com o Claude, mas o limite semanal dele acabou e só renova na quinta-feira. Por isso vou precisar da sua ajuda **só por estes dias**, para tarefas pontuais. Quando ele voltar, ele confere o que fizemos.

## O projeto
Tenho um site chamado **Portal da Informática** (https://portal.professorwell.com.br). Ele traz as minhas apostilas de Informática como missões interativas que os alunos fazem sozinhos no computador da sala.
- É um site **estático** (HTML, CSS e JavaScript puro, sem framework e sem build), hospedado no **GitHub Pages**. O repositório é **1998welllaignier/portal-da-informatica**, branch `main`. Cada alteração salva na `main` aparece no site em 1 ou 2 minutos.
- Os alunos entram com a turma e um código de 4 números. O progresso fica no **Firebase**, nunca no GitHub.
- Cada missão é uma aula: 💡 Para começar → 🎮 Mão na massa → 📖 O que significa? → 🌎 Onde eu uso isso? → 🟢 Básico (obrigatório, vale 1,0) → 🟡 Desafio (+0,25) → 🔴 Turbo (+0,25) → ✅ Perguntas rápidas → 🧠 Resumo. A correção é automática.
- Minha página inicial (https://professorwell.com.br) fica em outro repositório: **1998welllaignier/professorwell**.

## Regras que você precisa seguir
1. **Antes de qualquer mudança, leia o arquivo `AGENTS.md`** na raiz do repositório. Ele explica onde fica cada coisa, o que pode e o que não pode ser feito.
2. O aluno precisa fazer tudo **sozinho**: toda resposta precisa estar escrita no texto da missão. Nada de "chame o professor".
3. Toda sigla e todo termo técnico precisam vir explicados por completo, em português simples, para alunos de 10 a 15 anos.
4. **Nunca** coloque nomes de alunos ou qualquer dado de aluno no repositório: ele é público.
5. **Não** mexa no login, no Firebase (`js/nuvem.js`, `docs/firestore.rules`) nem no `CNAME`.
6. **Não** apague nem renomeie arquivos, ids de missão ou ids de atividade.
7. Os textos das missões se editam em `fontes/*.md` e depois é preciso rodar `python3 ferramentas/gerar_conteudo.py`. As atividades se editam em `dados/atividades/*.js`.
8. Depois de mudar, troque a versão no `index.html` (o `PORTAL_VERSAO` e todos os `?v=`).
9. Faça **a menor mudança possível**, uma de cada vez, e me diga exatamente quais arquivos e quais linhas mudaram.
10. Se você **não** tiver acesso direto ao repositório, me diga: qual arquivo abrir no site do GitHub, o trecho exato a procurar e o trecho exato para colocar no lugar. Eu clico no lápis ✏️, colo e salvo.

## O que você NÃO consegue fazer (e tudo bem)
- O meu **Diário de Classe** fica dentro da conta do Claude. Você não consegue abrir nem editar. Eu preencho à mão ou espero o Claude voltar.
- O cadastro e os dados dos alunos ficam no Firebase, e quem cuida deles sou eu, pelo painel.

## Como falar comigo
- Fale em português do Brasil, de forma clara e direta.
- Se eu escrever alguma palavra errada, me mostre a forma certa.
- Na dúvida, **pergunte antes de mudar**.

Agora vou te dizer o que preciso:

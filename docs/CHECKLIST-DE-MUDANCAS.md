# ✅ Checklist de mudanças — nada fica para trás

> Pedido do Prof. Welington em 14/11/2026: **toda vez que algo mudar** (horário, apostila, regra, função do painel),
> **tudo o que depende disso é atualizado junto, automaticamente**, sem ele precisar lembrar.
> Qualquer IA que mexer no portal segue esta lista **no fim de cada mudança**, antes do commit.

## Sempre, em qualquer mudança
- [ ] **❓ "Para que serve esta aba e como usar"** da(s) aba(s) afetada(s) (`AJUDA` em `js/painel.js`) explica o jeito novo.
- [ ] **`docs/PADRAO-DE-QUALIDADE.md`**: a regra nova entra no mesmo dia.
- [ ] **`docs/PLANO-DE-ACAO.md`**: marcar o que foi feito e anotar o que ficou pendente.
- [ ] **Versão** em `index.html` (`PORTAL_VERSAO`: data + letra; depois do z vem za, zb…).
- [ ] **Uma coisa = um nome = um lugar**: não criar algo que já existe com outro nome (ver redundâncias).
- [ ] **Turma sempre com dia e hora** (`rotuloTurma`) e **missão sempre com título** (`rotMis`) em tudo que for novo.
- [ ] **Celular**: conferir a tela nova em 360 px (sem rolar para o lado; botões e campos fáceis de tocar).
- [ ] **Aluno de casa (🏠)** e **aluno atípico (🧩/👣)**: a mudança vale para eles? Ajustar se precisar.
- [ ] Testar as regras afetadas (ex.: trava em `js/trava.js`) e avisar o professor do que precisa conferir com o login dele.

## Mudou o horário de uma turma (dia/hora)
- [ ] `dados/catalogo.js` → `aula: { dia, ini }` da turma.
- [ ] Quadro **🕘 Horários** do painel e da página inicial (`professorwell.com.br`, outro repositório).
- [ ] Datas do Panorama/Prova se recalculam sozinhas pelo calendário da rede — conferir o dia da prova da turma.
- [ ] Avisar os alunos (📣 Avisos para os alunos) se for preciso.
- [ ] Cartaz de entrada (`cartaz.html`) se citar horários.

## Calendário da rede mudou / bimestre novo
- [ ] `dados/catalogo.js` → `calendarioRede` (semana de Avaliação Bimestral, fim das aulas, feriados em `semAula`).
- [ ] `missoes4` (plano inicial de cada turma) do bimestre novo.
- [ ] Avisos de datas (`PRAZOS` no painel) e o SIGE (`docs/PLANO-DE-ACAO.md`).

## Apostila nova (ou missão nova)
- [ ] `dados/catalogo.js` (apostila, série, `base`/`trilha`), `fontes/<apostila>.md` → `ferramentas/gerar_conteudo.py`, `dados/atividades/`, `dados/roteiros/`, `dados/ilustracoes/`, `dados/provas/`.
- [ ] Trilha Passo a Passo (👣) e, quando existir, a versão "Em casa" (🏠) da série.
- [ ] Vídeos: `P.videosMissao` em `js/historia.js` (curto e, se houver, o longo passo a passo, que é o que o aluno de casa vê).
- [ ] Tudo do `PADRAO-DE-QUALIDADE.md` (Onde eu uso isso?, termos explicados, botão de resposta para o professor, placar, celular…).
- [ ] Prova: questões por missão, para a aba 📝 Prova marcar sozinha as missões dadas.

## Mudou uma regra de trava / aula / estudo em casa
- [ ] `js/trava.js` (regra) + mensagens ao aluno em `js/portal.js` + quadro da aba Aula em `js/painel.js`.
- [ ] Tela "🏠 Estudo em casa" (texto "Como funciona") **e o roteiro do vídeo de instruções** (`docs/roteiros/video-estudo-em-casa.md`); se a regra mudou para o aluno de casa, aumentar `catalogo.videoCasaVersao` para ele rever o vídeo.

## Mudou algo do Diário (presença, notas)
- [ ] Frequência, Boletim, Panorama (contagem de quem veio) e Prova (missões dadas) continuam batendo.
- [ ] Boletim em PDF/planilha e o que vai para o SIGE.

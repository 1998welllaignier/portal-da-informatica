# Padrão das atividades do Portal da Informática
Professor Welington Laignier · EMEF Juscelino Kubitschek · definido em novembro de 2026

## Regra principal
**Correção automática sempre que for possível.** "O professor confere" só quando não houver outra forma.
A BNCC não muda: muda o formato da atividade, não a habilidade trabalhada. Cada atividade continua ligada ao código da habilidade no guia do professor.

## Como escolher o formato
1. **Tem uma resposta certa?** (conceito, explicação, "por quê")
   → `escolha`, `vf`, `completar`, `ligar`, `ordenar`, `classificar`, `tabela` com opções.
   Uma pergunta "explique por quê" vira 2 ou 3 perguntas de escolha: *o que é*, *por quê*, *o que acontece se…*
2. **O aluno cria algo com estrutura conhecida?** (SE… ENTÃO… SENÃO, decomposição, crédito de imagem, regras)
   → `aberta` com `conferir`: palavras mínimas, palavras-chave obrigatórias, campos diferentes entre si,
   `blocoDuasVezes` (bloco chamado pelo nome), `vf` (diz se é V ou F).
3. **O aluno faz algo no computador?** (pastas, arquivos, IP, metadados) — só quando o assunto da BNCC é o próprio computador; para digitar, sempre na caixa da tarefa (nada de Bloco de Notas, desde 10/11/2026)
   → `pc` com `conferir`: o aluno digita o que aparece na tela e o portal confere o formato
   (ex.: IP com 4 números separados por pontos; nome do arquivo; programa que abriu).
   Para várias informações, `tabela` com células `re` (expressão regular).
4. **Texto de opinião pessoal** (missão favorita, o que aprendi, mensagem de apoio)
   → `aberta` com `conferir`: tamanho mínimo e palavras-chave do tema (`porCampo` ou `grupos`).
   O professor pode ler tudo no painel (aba Turmas → clicar na célula da missão).
5. **Só fica com o professor:** apresentação oral, desenho no papel (o Paint não é mais usado; o cartaz é feito no próprio portal).

## Não usar mais
- Autoavaliação "folheie a apostila impressa e veja os carimbos" (o portal já mostra ✔ em cada missão).
- Aviso "chame o professor para carimbar" em tarefas que podem ser conferidas pelo portal.

## Referência rápida do `conferir` na `aberta`
```js
conferir: {
  minPalavras: 4,                          // em cada campo
  porCampo: [["algoritmo", "passo"], null], // cada campo precisa de uma dessas palavras (null = livre)
  grupos: [{ dica: "bloquear quem ofende", alts: ["bloque"] }], // assuntos que precisam aparecer
  minGrupos: 3,                            // quantos grupos bastam (padrão: todos)
  diferentes: "todos",                     // ou [1, 2]: campos com respostas diferentes
  blocoDuasVezes: true,                    // 2º campo chama 2 vezes o bloco criado no 1º
  vf: true,                                // cada campo diz se a frase é V ou F
  msg: "Mensagem de acerto"
}
```
As palavras-chave são comparadas sem acento e sem maiúscula; um pedaço da palavra basta (`"recicl"` aceita reciclar, reciclagem…).

## Situação em novembro de 2026
| Apostila | Automáticas | Professor confere |
|---|---|---|
| 5º ano | 27 | 2 (cartaz no Paint, grafo no papel) |
| 6º ano | 24 | 2 (cartaz no Paint, apresentação) |
| 7º ano | 23 | 2 (cartaz no Paint, apresentação) |
| 8º ano | 23 | 1 (apresentação) |
| 8º ano · Trilha | 13 | 1 (desenho no Paint) |
| 9º ano | 25 | 2 (cartaz no Paint, apresentação) |

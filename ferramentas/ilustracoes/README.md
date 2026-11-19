# 🎨 Guia de estilo das ilustrações — Estilo B (aprovado pelo professor em 19/11/2026)

> **Ler antes de desenhar qualquer coisa.** Este guia complementa a **Regra de ouro 4** de `docs/PADRAO-DE-QUALIDADE.md`.

**Decisão:** no teste de estilos, o professor comparou a mesma cena (6º ano, Missão 1: entrada → processamento → saída) em três versões e escolheu o **Estilo B**, porque **o contraste ajuda na visualização**. O teste está em `referencia/teste_de_estilos_19-11-2026.png`, e o desenho aprovado em `referencia/estilo_B_aprovado.png`. O código que gera a cena, para usar como modelo, está em `referencia/cena_entrada_processamento_saida.py`; a função `E("B")` traz a paleta e o traço.

No design, esse estilo se chama **linha clara** (em francês, *ligne claire*): contorno preto da mesma espessura em tudo, cores chapadas e vivas, sem hachuras, como nos quadrinhos do Tintim.

## O traço
- **Contorno preto** (`#1c1f22`) com **2,6 px** em tudo, com cantos e pontas arredondados. Detalhes pequenos (teclas, LEDs) não levam contorno.
- **Cores vivas e chapadas.** Sombra é sempre uma **forma sólida** com um tom mais escuro da mesma cor, **nunca esfumaçada (blur)**, porque blur vira retângulo cinza em alguns PDFs e impressoras.
- **Sombra no chão:** elipse preta com 12–14% de opacidade.

## A cena em planos
1. **Fundo:** parede, janela com céu, sol, nuvem e grama; piso com tábuas. As cores do fundo são mais claras que as do primeiro plano.
2. **Plano médio:** o cenário (mesa com veios, objetos de informática reconhecíveis, sombras sobre a mesa).
3. **Primeiro plano:** personagens e objetos principais.

## Objetos de informática (realismo)
- **Monitor:** moldura, suporte e base **da mesma cor**, tela com reflexo e LED de ligado. Na tela, algo que faça sentido com a cena (por exemplo, o que o aluno digitou).
- **Teclado:** fileiras de teclas como no real, com a barra de espaço maior.
- **Gabinete:** frente e lateral (dá volume), botão de ligar com LED, entradas USB e saídas de ar.
- **Peças por dentro** (processador, SSD, memória): mostradas numa **lupa** ("dentro do gabinete"), nunca soltas no ar.

## Personagens
- Olhos grandes com **branco, pupila e brilho**, sobrancelha que expressa, bochecha rosada e sorriso. Nada de "palito".
- **Turma fixa** (a montar nesta pasta): tons de pele variados, cabelos diferentes, sempre as mesmas roupas e cores em todo o material. O **professor** é sempre o mesmo.

## A camada que ensina
- Cada etapa ou conceito tem **uma cor e um número** (1 azul, 2 amarelo, 3 verde, 4 roxo…).
- **Contorno tracejado** na cor da etapa em volta dos objetos daquela etapa.
- **Etiquetas** brancas com borda colorida, número em círculo, título em negrito e uma linha de explicação, com **seta** apontando para o objeto certo.
- Movimento e efeito desenhados: **ondas de som**, papel saindo da impressora, setas tracejadas mostrando o caminho dos dados.
- O desenho **nunca entrega a resposta** de uma atividade.

## Conferência antes de entregar
Renderizar em imagem, olhar de perto e perguntar: *"parece feito por um ilustrador ou parece rascunho?"* e *"o aluno entende só olhando?"*. Conferir também se **nenhum rótulo está cortado ou sobreposto**.

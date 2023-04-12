# Seja bem vindo Aventureiro!

Esse site lhe permitirá criar fichas e visualizar seus personagens de D&D.

## Funcionalidades em desenvolvimento:
    - Criar personagem

## Linguagens:

 - Javascript e React

# Antes de começar a desenvolver

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:mabiiak/ficheiro-de-bolso.git`
  - Entre na pasta do repositório que você acabou de clonar:

  2. Instale as dependências

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique que você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nomegithub-nomeprojeto`
    - Exemplo: `git checkout -b joaozinho-...`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto ting'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-ting`

  6. Crie um novo `Pull Request` _(PR)_

## Funcionalidades futuras:

    ⬜ Galeria de Personagens já criados

    ⬜ Integração com um banco de dados

    ⬜ Login com validação
    
    ⬜ Layout com foco em mobile

## Obrigada pela visita!

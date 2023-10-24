# Dúvidas frequentes

Abaixo estão algumas orientações e dúvidas comuns ao desenvolvimento do projeto.

Se houver qualquer outra dúvida ou problema, é só procurar a monitoria ou postar uma thread no slack. Estamos juntos! 👍

---

## Git e GitHub

<details>
  <summary>‼️ Antes de começar a desenvolver</summary><br />

1. Clone o repositório

   - Copie o endereço SSH do repositório e use-o para cloná-lo em sua máquina:
     - Por exemplo: `git clone git@github.com:tryber/sd-0x-project-x.git`.

     <details><summary>Local do endereço SSH na página inicial do repositório:</summary>

     ![endereço SSH do repositório](images/github-ssh-repo.png)

     </details>
   - Entre na pasta do repositório que você acabou de clonar:
     - `cd <diretório-do-projeto>`

2. Crie uma branch a partir da branch `main`

   - Verifique que você está na branch `main`
     - Exemplo: `git branch`
   - Se não estiver, mude para a branch `main`
     - Exemplo: `git checkout main`
   - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
     - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
     - Exemplo: `git checkout -b joaozinho-project-x`

3. Para cada etapa do desenvolvimento, adicione as mudanças ao _stage_ do Git e faça um `commit`

   - Verifique que as mudanças ainda não estão no _stage_
     - Exemplo: `git status` (devem aparecer listadas as alterações realizadas em vermelho)
   - Adicione o novo arquivo ao _stage_ do Git
     - Exemplo:
       - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
       - `git status` (devem aparecer listadas as alterações realizadas em verde)
   - Faça o `commit` inicial
     - Exemplo:
       - `git commit -m 'Iniciando o projeto X! #VQV 🚀'` (fazendo o primeiro commit)
       - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

4. Adicione a sua branch com o novo `commit` ao repositório remoto

   - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-x`

5. Crie um novo `Pull Request` _(PR)_

   - Vá até a página de _Pull Requests_ do repositório no GitHub.
      <details><summary>Local da página de Pull Requests no repositório:</summary>

     ![endereço SSH do repositório](images/github-pr-open.png)

     </details>
   - Clique no botão verde _"New pull request"_
   - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
   - Clique no botão verde _"Create pull request"_
   - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
   - **Não se preocupe em preencher mais nada por enquanto!**
   - Volte até a página de _Pull Requests_ do repositório e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary>⌨️ Durante o desenvolvimento</summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>🤝 Depois de terminar o desenvolvimento (opcional)</summary><br />

Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary>🕵🏿 Revisando um pull request</summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

## Maven

<details>
  <summary>🖥️ Instalando as dependências do projeto</summary><br />

Para instalar as dependências do projeto, basta executar o comando `mvn install`. Isso irá fazer download das dependências configuradas no `pom.xml`, além de baixar as dependências indiretas (dependências de dependências).

Caso em um projeto seja necessário fazer alterações no `pom.xml`, você precisará executar novamente o comando.

É possível também fazer essas tarefas através da sua IDE, caso prefira.

</details>

<details>
  <summary>🛠 Rodando os testes com o Maven</summary><br />

### Executando todos os testes

Para poder executar os testes, basta executar o comando `mvn test` e **todos** os seus testes serão executados.

### Executando um teste específico

Para executar um teste expecífico, inicie sua aplicação com `mvn test -Dtest=”TestClassName”`, utilizando o nome da classe de teste que deseja executar.

Em muitos casos você também pode executar os testes diretamente na sua IDE, mas recomendamos que utilize o Maven para fazer uma verificação final antes de entregar o projeto.

</details>

<details>
  <summary>🎛 Rodando o linter (Checkstyle)</summary><br />

Usaremos o [Checkstyle](https://checkstyle.sourceforge.io/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `pom.xml`.

O `Checkstyle` já é executado jutamente aos testes. No entanto, caso deseje rodar o `Checkstyle` manualmente em um projeto, basta executar o comando `mvn checkstyle:check`.

Você pode também instalar e utilizar o plugin do `Checkstyle` na sua IDE, mas recomendamos que utilize o Maven para fazer uma verificação final antes de entregar o projeto.

</details>

## Depois de completar o projeto

<details>
<summary>🗂 Compartilhe seu portfólio!</summary><br />

Após finalizar os requisitos, chegou a hora de mostrar ao mundo que você aprendeu algo novo! 🚀

Esse passo é super importante para ganhar mais visibilidade no mercado de trabalho, mas também é útil para manter um back-up do seu trabalho.

E você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

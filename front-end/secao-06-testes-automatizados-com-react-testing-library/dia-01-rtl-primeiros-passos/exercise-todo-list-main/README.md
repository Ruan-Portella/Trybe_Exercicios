# Boas vindas ao exercício de Lista de Tarefas com testes em RTL

---

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- **OBS:** Ao realizar o fork, o GitHub, por padrão, copia apenas a branch main. Para realizar o fork copiando as demais branches, é necessário desmarcar a opção _copy the `main` branch only_.

![Main branch](images/fork.png)

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Vá para a branch `main` do seu projeto e execute o comando `git branch` ou `git branch -a`.

- Verifique se as seguintes branchs apareceram (cada branch dessas será um exercício):
  - `exercise-one`
  - `exercise-two`
  - `exercise-three`


- Mude para a branch `exercise-one`, com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR, você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Para isso, clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

> 💡 Realize esse processo para cada PR que abrir.

</details>

<br />

<details>
  <summary><strong>🛠️ Rodando a aplicação</strong></summary><br />

Para rodar aplicação existente nesse repositório, siga os seguintes passos:
1) Acesse a branch de cada exercício com o comando:

```bash
git checkout nome-da-branch
```

2) Instale as dependências com o comando:

```bash
npm i
```

3) Inicie a aplicação com o comando: 

```bash
npm start
``` 
</details>

<br />

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste repositório, você encontra uma aplicação simples de Lista de Tarefas que já está funcionando. Dê uma olhada nos arquivos que estão dentro da pasta `src` e tente entender o que cada componente faz.

> A sua tarefa será criar os testes necessários para garantir que as funcionalidades básicas estão se comportando da maneira esperada.

Além de escrever testes, também é importante entender como funcionam testes que já estão escritos. Por esse motivo, você também terá que fazer o caminho "contrário", ou seja, desenvolver algumas funcionalidades para que os testes existentes passem.
</details>

<br />

# Exercícios

## Exercício 1

> ⚠️ Faça o _checkout_ para a _branch_ deste exercício com o comando `git checkout exercise-one`.
> 
>  Utilize o arquivo `src/test/exercise-one.test.js` para adicionar os testes pedidos no exercício.


Implemente os testes para verificar os seguintes comportamentos da aplicação:

<details>
  <summary>A. Verifique que um botão com o texto "Adicionar" está sendo renderizado</summary><br />

- Verifique que existe um elemento com o texto "Adicionar".
- Verifique que o elemento é do tipo `button`.

</details>

<details>
  <summary>B. Verifique o comportamento de adicionar uma tarefa</summary><br />
  
- Verifique que existe um `input` com a `label` "Tarefa:".
- Verifique que existe um botão com o texto "Adicionar".
- Verifique que é possível digitar no `input`.
- Verifique que o texto digitado só é adicionado à lista de tarefas **após** clicar no botão.
- Verifique que, ao clicar no botão "Adicionar", o texto que está digitado no input é adicionado à lista de tarefas renderizada e que o valor do input é limpo.

</details>

<br />

## Exercício 2

> ⚠️ Faça o _checkout_ para a _branch_ deste exercício com o comando `git checkout exercise-two`.
> 
>  Utilize o arquivo `src/test/exercise-two.test.js` para adicionar os testes pedidos no exercício.


<details>
  <summary>A. Verifique o comportamento de adicionar várias tarefas</summary><br />

- Dentro do arquivo `src/test/exercise-two.test.js` já existe um _array_ com diversos itens. Faça com que cada elemento desse _array_ seja um item da lista de tarefas.
- Após adicionar todos os itens, verifique que todos eles estão sendo renderizados na tela.

</details>

<details>
  <summary>B. Teste apenas o componente <code>Item</code></summary><br />

- Renderize apenas o componente `<Item />` no teste.
- Passe uma _string_ como _prop_ para o componente `<Item />` e verifique que esse texto está sendo renderizado na tela.

</details>

<br />

## Exercício 3

> ⚠️ Faça o _checkout_ para a _branch_ deste exercício com o comando `git checkout exercise-three`.
> 
> Diferente dos exercícios anteriores, os testes para esse exercício já estão criados no arquivo `src/test/exercise-three.test.js`. Note que alguns testes não estão passando - você deverá criar a funcionalidade para que os testes passem.

💡 A proposta desse exercício é que você leia os testes e entenda o que precisa ser desenvolvido, por isso, aqui no README você encontrará apenas uma descrição simples de cada funcionalidade.  

<details>
  <summary>A. Adicione as seguintes funcionalidades</summary><br />

- O botão "Adicionar" deve estar habilitado apenas quando há algum texto digitado no input.
- Cada item da lista deve ter um botão com o texto "Remover" ao seu lado. Ao clicar nesse botão, a respectiva tarefa deve ser apagada da lista.

</details>

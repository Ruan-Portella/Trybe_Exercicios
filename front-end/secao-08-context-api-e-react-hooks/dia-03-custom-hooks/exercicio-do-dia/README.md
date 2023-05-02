# Boas vindas ao exercício Applicant Manager

Você precisa dar manutenção em uma aplicação de gestão de Pessoas Candidatas em um processo seletivo. Nessa aplicação você é responsável por refatorar essa aplicação para deixar o código mais limpo e legível. Use hooks customizados para isso! 

---

## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

- Após fazer o fork, clone o repositório criado para o seu computador.

- Rode o comando `npm install`.

- Vá para a branch `main` do seu projeto e execute o comando `git branch` ou `git branch -a`.

> 💡 Observe o que deve ser feito nas instruções para cada exercício.

</details>

<br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a `main`. Sinta-se à vontade!

**Atenção!**: Ao criar o PR,  você irá se deparar com essa tela:

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
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
Nesse repositório, você encontra uma aplicação React funcionando que simula, de forma muito simplificada, um sistema de gerenciamento de candidatos.
Nessa aplicação é possível visualizar as pessoas candidatas através de uma API e aprovar ou reprovar cada uma delas.

O objetivo desse exercício é que você faça a refatoração dessa aplicação, para isso você precisará criar hooks customizáveis para refatorar o código já implementado, deixando-o mais limpo e organizado.

</details>

<br />

# Exercícios

A lógica que você vai usar já está implementada no arquivo `src/App.js`, você deverá se basear nesse código para criar os hooks customizados

### 1. Para consumir nossa API vamos utilizar o hook customizado `useFetch`

<details>
<summary>Siga os passos para criar o Hook Customizado:</summary><br />

> Dica: Lembre-se de olhar a lógica que já está implementada no arquivo `src/App.js` para criar o hook customizado

1. Crie dentro da pasta hooks um arquivo `useFetch.js`. Vamos precisar dos hooks `useEffect` e `useState` para fazer a chamada a API e salvar o seu retorno.

2. O Hook deverá receber como parâmetro a url para onde iremos fazer a requisição.

3. Crie três estados:

   - um estado de carregando, para aguardar enquanto a requisição está sendo feita
   - um estado para salvar o retorno da API
   - e outro estado para caso haja algum error na requisição

4. Crie uma função para fazer o `fetch` da url recebida como parâmetro, utilize o `useEffect` para chamar essa função e faça o tratamento de erro.

5. Retorne um objeto contento os três estados criados e a função que chama o `fetch()`.

Pronto o seu Hook Customizado está feito, agora utilize ele no `App.js` recebendo como parâmetro a url que gera pessoas aleatórias da api [Random User](https://randomuser.me/).

> Atenção: lembre-se de refatorar o código implementado em `App.js` para que sua aplicação continue funcionando corretamente.

</details>

## Bônus

### 2. Para salvar a lista de pessoas aprovadas e reprovadas vamos utilizar o hook customizado `useLocalStorage`

<details>
<summary>Crie um hook <code>useLocalStorage</code> para salvar cada uma das listas</summary><br />

Nossa aplicação renderiza pessoas aleatórias, onde é possível adiciona-las a lista de aprovadas ou reprovadas. Porém, os códigos estão duplicados e você deverá criar um hook customizado para eliminar essas duplicidades.

> Dica: Lembre-se de olhar a lógica que já está implementada no arquivo `src/App.js` para criar o hook customizado

1. Crie o hook customizado `useLocalStorage` dentro da pasta hooks.
2. Esse hook deverá receber como parâmetro a chave do item que será salvo no localStorage e o valor inicial desse item.
3. O hook deverá possuir:

   - um estado para salvar o valor do item (inicialmente deve ser ou o valor salvo no localStorage ou o valor inicial passado como parâmetro)
   - uma função para atualizar o valor do estado e salvar no localStorage
   - uma função para remover a chave do localStorage e resetar o estado para o valor inicial

4. Retorne um array com o valor do estado e as duas funções criadas.s

> Atenção: lembre-se de refatorar o código implementado em `App.js` para que sua aplicação continue funcionando corretamente.

</details>

# Boas-vindas ao repositório do exercício Pokédex State!

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você encontrará nesse repositório uma [pokédex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) que já está funcionando e exibindo uma lista de pokémon usando componentes React.

Sua missão será ~capturar todos os pokémon~ incrementar essa aplicação para que, além de componentes, também seja usado o estado do React, de forma que seja exibido apenas um pokémon por vez e que seja possível filtrar por tipo.

➡ Para percorrer por toda a lista, você deverá criar um botão chamado `Próximo pokémon` e fazer com que, ao clicar nele, um novo pokémon seja exibido.

➡ Além de percorrer a lista, você também deve desenvolver a lógica para filtrar pelo tipo do pokémon.

> 👀 **De olho na dica:** lembre-se que você pode utilizar os componentes já existentes e também criar novos, conforme achar necessário. Você também pode armazenar no estado do componente pai da aplicação o pokemon sobre o qual está iterando no momento e os filtros aplicados sobre a lista.

Depois de desenvolver os requisitos obrigatórios, você encontrará também alguns requisitos extras. Os requisitos extras não são avaliados pelo avaliador automático, mas você deve fazê-los se quiser  ~ganhar todas as insígnias pokémon~ aprender ainda mais sobre estados em React.

Abaixo, um exemplo da aplicação final, considerando inclusive os requisitos extras:

![Pokedex finalizada](images/pokedex.gif)

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;

- Inicializar um componente, dando a ele um estado pré-definido;

- Atualizar o estado de um componente.

- Capturar eventos utilizando a sintaxe do React

</details>


# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-029-a-exercise-pokedex-state`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-029-a-exercise-pokedex-state`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-sd-029-a-exercise-pokedex-state`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-029-a-exercise-pokedex-state`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-029-a-exercise-pokedex-state/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-029-a-exercise-pokedex-state/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

⚠️ **Pull requests com issues de Linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento!** ⚠️

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

</details>


<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Para avaliar o exercício utilizaremos [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos data-testid nos elementos **HTML**. Vamos a um exemplo para deixar evidente essa configuração: se o requisito pedir "crie um botão e adicione o id de teste (ou data-testid) com o valor my-action, você pode escrever:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library(RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes focados no comportamento da aplicação.

⚠ **Atenção:** muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser exatamente igual ao texto descrito no requisito.

Para verificar a solução proposta, você pode executar todos os testes localmente, basta executar:

```bash
npm test
```

💡 **Dica: desativando testes**

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste. Veja um exemplo:

```js
it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![Usando comando .skip para pular um teste](images/skip-image.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test 
```

Uma outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```js
it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![usando comando .only para rodar apenas um teste](images/only-image.png)

⚠️ **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary> <br />

  Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

  [FORMULÁRIO DE AVALIAÇÃO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH29-A&template=betrybe/sd-029-a-exercise-pokedex-state)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## 1 - Faça com que apenas um pokémon seja exibido
<details>
  <summary>Inicialmente, a aplicação renderiza todos os pokémon. Faça com que ela renderize apenas um pokémon por vez</summary><br />

- Faça as alterações necessárias para que somente um pokémon seja exibido, em vez de renderizar toda a lista.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se, ao carregar a página, as informações do primeiro pokémon da lista estão sendo exibidas.
- Será verificado se, ao carregar a página, as informações de nenhum outro pokémon são exibidas. 

</details>


## 2 - Crie um botão chamado `Próximo pokémon` para percorrer todos os pokémon da lista
<details>
  <summary>Crie um botão para percorrer todos os pokémon da lista</summary><br />

- Faça um botão chamado `Próximo pokémon` que, ao ser clicado, exibe as informações do próximo pokémon da lista.

</details>

<details>
  <summary>💡 Dica</summary><br />

- Lembre-se de que [atualizações de State podem ser assíncronas ](https://pt-br.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous).

</details>


<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão chamado `Próximo pokémon`.
- Será verificado se, ao clicar no botão `Próximo pokémon` as informações do próximo pokémon da lista são exibidas.
- Será verificado se, ao clicar no botão `Próximo pokémon` as informações do pokémon atual deixam de ser exibidas.

</details>


## 3 - Faça com que, quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista seja exibido novamente

- Quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista deve ser exibido.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se, quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista é exibido novamente.

</details>



## 4 - Crie dois botões de filtro, de forma que, quando algum deles for clicado, apenas os pokémon do respectivo tipo filtrado sejam exibidos
<details>
  <summary>Crie filtros para os pokémon do tipo `Fire` e `Psychic`</summary><br />

- Crie um botão chamado `Fire` que, ao ser clicado, deve fazer com que somente os pokémon do tipo `Fire` sejam exibidos.
- Crie um botão chamado `Psychic` que, ao ser clicado, deve fazer com que somente os pokémon do tipo `Psychic` sejam exibidos.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Será verificado se existe um botão de filtro chamado `Fire`.
- Será verificado se, ao clicar no botão de filtro `Fire`, o primeiro pokémon do tipo `Fire` será exibido imediatamente.  
- Será verificado se, com o filtro `Fire` ativo, somente os pokémon do tipo `Fire` serão exibidos ao clicar no botão `Próximo pokémon`.
- Será verificado se existe um botão de filtro chamado `Psychic`.
- Será verificado se, ao clicar no botão de filtro `Psychic`, o primeiro pokémon do tipo `Psychic` será exibido imediatamente.  
- Será verificado se, com o filtro `Psychic` ativo, somente os pokémon do tipo `Psychic` serão exibidos ao clicar no botão `Próximo pokémon`.
- 
</details>


# Exercícios extras (não são testados pelo avaliador)

Agora que você ~capturou todos os pokémon~ terminou os requisitos obrigatórios, consegue vencer todos os requistos extras?!


<details>
  <summary>Separe os estilos de CSS por componente</summary><br />
  
- Faça um arquivo `.css` para cada componente da sua aplicação.

</details>

<details>
  <summary>Crie um botão chamado `All` para resetar o estado do filtro</summary><br />
  
- Ao clicar no botão "All", a pokédex deve voltar a circular por todos os pokémon.
- Quando a página for carregada, o filtro selecionado inicialmente deve ser o `All`.

</details>


<details>
  <summary>Caso ainda não tenha feito, crie um componente `Button`</summary><br />

- Faça com que todos os botões da aplicação utilizem esse componente.
- 💡Dica: pesquise sobre `this.props.children` no React.

</details>

<details>
  <summary>Faça os botões de filtro serem dinâmicos</summary><br />

- Faça com que um botão de filtragem seja exibido para cada tipo de pokémon disponível nos dados, independentemente de quantos sejam e sem repetição de tipos. Por exemplo: se na sua pokédex existirem  pokémon do tipo Fire, Psychic, Electric e Normal, sua aplicação deve exibir 4 botões de filtro (um para cada tipo) e também o botão "All". 

</details>

<details>
  <summary>Desabilite o botão `Próximo pokémon` se a lista filtrada tiver apenas um pokémon</summary><br />
  
- Se, depois de aplicar um filtro, a lista tiver apenas um pokémon, faça com que o botão `Próximo pokémon` fique desabilitado.

</details>

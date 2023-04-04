# Exercício 2

Ao executar essa aplicação, você irá se deparar com três carros com as cores _Red_, _Blue_ e _Yellow_. Cada um deles apresenta um botão que, ao ser clicado, deve alterar o valor do estado global. O estado inicial da aplicação é o seguinte:

```js
state = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
}
```

Quando o valor de `cars.red` for `true`, o carro vermelho deverá se mover para a direita. Quando for falso, ele deve mover-se para a esquerda. O mesmo deve ocorrer para os três carros.

Toda a aplicação já está pronta e com o _Redux_ configurado. Seu desafio será implementar o componente `Cars`, no arquivo `./src/Cars.jsx`:

- Implemente a função `mapStateToProps` de modo que o componente tenha acesso às _props_ `redCar`, `blueCar` e `yellowCard`, as quais devem possuir o valor do estado global da sua respectiva cor (como exemplo, `redCar` deve possuir o valor da chave `cars.red`, armazenado no estado global).
- Implemente a função `onClick()` dos botões de modo que, quando clicados, a aplicação realize o `dispatch` da _action_ `moveCarAction`. Quando clicar no botão correspondente ao carro **vermelho**, caso o estado global `cars.red` possuir o valor `true`, ele deverá ser alterado para `false`, e vice-versa.

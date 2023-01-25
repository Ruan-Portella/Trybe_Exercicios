// O nome das pessoas convidadas está salvo em um array chamado names;

// A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((names) => names === name)
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (name, ages) => {
  return name.every((person) => person.age >= ages)
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
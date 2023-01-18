// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie uma função para mostrar o tamanho de um objeto.

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. 



const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
  // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
};

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = (obj) =>  Object.keys(obj);
// O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// O método "Object.assign()" recebe dois parâmetros, um objeto, e o que queremos atribuir à ele. Se no primeiro parâmetro passarmos um objeto vazio ele criará um objeto novo com as caraterísticas do segundo parâmetro.

console.log(allLessons);

const getNumberOfStudents = (obj) => {
  let total = 0;

  const keys = Object.keys(obj);
    
  for (index in keys) {
    total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
  }
  return total; // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));

const verifyPair = (obj, key, value) => {
  const entries = Object.entries(obj);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
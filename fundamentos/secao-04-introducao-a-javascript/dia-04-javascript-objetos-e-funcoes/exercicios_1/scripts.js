// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
// Copiar
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// Copiar
// [2006, 2007, 2008, 2009, 2010, 2018]
// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
  };

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

  player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

  console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');
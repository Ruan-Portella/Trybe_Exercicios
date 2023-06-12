const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua Idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
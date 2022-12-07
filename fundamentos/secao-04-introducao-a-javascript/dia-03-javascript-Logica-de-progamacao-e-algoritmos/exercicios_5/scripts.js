// 1. Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 3;
let symbol = '*';
let inputLine = '';

  // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //   inputline = inputline + simbolo;
  // };
  // for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //   console.log(inputline);
  // }

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

  // for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
  //   console.log(inputline);
  //   inputline = inputline + simbolo;
  // }

// Agora inverta o lado do triângulo. 

let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

// Depois, faça uma pirâmide com n asteriscos de base:

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// Faça um programa que diz se um número definido numa variável é primo ou não.

// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');



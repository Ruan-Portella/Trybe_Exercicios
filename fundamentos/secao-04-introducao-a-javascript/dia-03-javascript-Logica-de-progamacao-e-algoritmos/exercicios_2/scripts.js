// 1. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 

let word = 'Trybe';
let reseveWord = '';

    for (let index = 0; index < word.length; index += 1) {
        reseveWord += word[word.length -1];
    }

console.log(reseveWord);


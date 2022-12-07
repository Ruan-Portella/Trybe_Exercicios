// 1. Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];
let big = array[0];
let small = array[0];

    for (let index = 0; index < array.length; index += 1) {
        if(array[index].length > big.length) {
            big = array[index];
        }
    }
    for (let index = 0; index < array.length; index += 1) {
        if(array[index].length < small.length) {
            small = array[index];
        }
    }

    console.log(big , small);
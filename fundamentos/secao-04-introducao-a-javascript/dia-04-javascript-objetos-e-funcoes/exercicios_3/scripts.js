// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma (a, b) {
    return a + b;
}
function sub (a, b) {
    return a - b;
}
function mult (a, b) {
    return a * b;
}
function div (a, b) {
    return a / b;
}
function mod (a, b) {
    return a % b;
}

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function high (a, b) {
    if (a > b) {
        return a;
    } if (a === b) {
        return `${a} é igual a  ${b}` 
    } else {
        return b;
    }
}

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function highest (a, b, c) {
    if (a > b && a > c) {
        return a;
    } if (b > a && b > c) {
        return b; 
    } if (a === b && a === c) {
            return 'Os valores são iguais';
    } else {
        return c;
    }
}

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function condicao(a){
    if (a > 0) {
        return "positive"
    } if (a < 0) {
        return "negative"
    } else {
        return "zero"
    }
}

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangle(a, b, c){
    let triangleSum = a + b + c;
    let traingleCondicional = a > 0; b > 0; c > 0;
    if (traingleCondicional){
        if (triangleSum === 180){
            return true;
        } else {
            return false;
        }
    } else {
        return 'ERRO'
    }
        
}

const readline = require('readline-sync');


function handleBMI(weight, height) {
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
    const bmi = weight / heightSquared;

    return bmi;
}

const IMC_MAXIMO_E_MINIMO = {
    'Abaixo do peso': {
        imcBaixo: 18.5
    },
    'Peso normal': {
        imcMinimo: 18.5,
        imcMaximo: 25,
    },
    'Acima do peso': {
        imcMinimo: 25,
        imcMaximo: 29.9,
    },
    'Grau 1': {
        imcMinimo: 30,
        imcMaximo: 34.9
    },
    'Grau 2': {
        imcMinimo: 35,
        imcMaximo: 39.9
    },
    'Grau 3': {
        imcMinimo: 18.5,
        imcMaximo: 25,
    },
    'Grau 4': {
        imcMinimo: 40,
    }
}

function calculaSituacao(imc) {
    const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO);

    const situacaoEncontrada = situacoes.find((situacao) => {
        const {imcMaximo, imcMinimo} = IMC_MAXIMO_E_MINIMO[situacao];
        const dentroDoMinimo = imcMinimo ? imc > imcMinimo : true;
        const dentroDoMaximo = imcMaximo ? imc < imcMaximo : true;
        return dentroDoMaximo && dentroDoMinimo;
    })
    return situacaoEncontrada;
}

function main() {
    const peso = readline.questionFloat('Qual o seu peso? (Kg)')
    const altura = readline.questionInt('Qual a sua altura? (cm)' );
    const bmi = handleBMI(peso, altura);
    const situacao = calculaSituacao(bmi);
    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
}

main();
// Teste se o retorno de sum(4, 5) é 9;

// Teste se o retorno de sum(0, 0) é 0.

// Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';

// Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5');

const {
    sum,
    info,
    printMessage,
    } = require('./sum.js');

   describe('Teste da Função sum', () => {
    it('Teste o Retorno de Sum(4,5)', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Teste o Retorno de Sum(0,0)', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Teste se a Função lança um Erro', () => {
        expect(() => sum(4 , '5')).toThrowError()
    })

    it('Teste se a Função lança um mensagem', () => {
        expect(() => sum(4 , '5')).toThrowError('parameters must be numbers')
    })
})

// printMessageTest.test.js

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('teste função printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('teste função printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('teste fluxo de exceção função printMessage', () => {
    expect(printMessage('Margarida')).toThrow('objeto inválido');
  });
})
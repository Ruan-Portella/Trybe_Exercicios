// loginValidation.test.js
const {
  myRemove,
  myFizzBuzz, 
  mapString, 
  encode, 
  decode,
  techList,
  } = require('./exercises.js');

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
  
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
  
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.

describe('testa a função myRemove', () => {
  it('deve retornar um array removendo o item correto', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]); });
  it('deve retornar um array não removendo o item correto', () => { 
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});


// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

describe('testa a função myFizzBuzz', () => {
  it('deve retornar fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  it('deve retornar buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  it('deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('não deve retornar um numero', () => {
    expect(myFizzBuzz('a')).toBe(false)
  })
})



// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('Testa as funções encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});



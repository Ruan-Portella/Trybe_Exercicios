# Seção 06: Testes Automatizados com React Testing Library

>"Essa seção pertence ao módulo [Fundamentos](https://github.com/Ruan-Portella/Trybe_Exercicios/tree/main/front-end) do curso da [Trybe](https://www.betrybe.com/). Nessa seção aprendi sobre Testes com React Testing Library

## Comandos Aprendidos

- 1 `render(Component)` - renderiza o componente para ser testado.
- 2 `screen` - acessa a tela do componente renderizado.
- 3 `getBy` - Procura por apenas um elemento.
- 4 `findBy` - Procura por apenas um elemento, podendo ser assíncrono.
- 5 `queryBy` - Procura por apenas um elemento.
- 6 `getAllBy` - Procura por um ou mais elementos, retornando um array.
- 7 `findAllBy` - Procura por um ou mais elementos, podendo ser assíncrono e retornando um array.
- 8 `queryAllBy` - procura por um ou mais elementos, retornando um array.
- 4 `toBeInTheDocument` - Verifica se o elemento está no documento.
- 5 `toHaveTextContent` - Verifica o texto do elemento.
- 6 `UserEvent` - Evento de Interação do usuário.
- 7 `jest.fn()` - Transforma uma função em uma simulação.
- 8 `jest.mock()` - Transforma varias funções em uma simulação.
- 9 `jest.spyOn()` - 'Espia' a chamada da função simulada, deixando a implementação original ativa.
- 10 `mockReturnValue` - Declara um valor padrão para a função simulada.
- 11 `mockReturnValueOnce` - Declara um valor apenas uma vez para a função simulada, inicia primeiro que o mockReturnValue.   
- 12 `mockImplementation(func)` - Aceita uma função que deve ser usada como implementação.
- 13 `mock.mockClear()` - Limpa os dados de uso de uma simulação.
- 14 `mock.mockReset()` - Chama o mockClear internamente e remove qualquer retorno estipulado ou implementação.
- 15 `mock.mockRestore()` - Chama o mockReset e restaura a implementação original.
- 16 `mockResolvedValue` - Declara um valor padrão para o retorno que o fetch teria.

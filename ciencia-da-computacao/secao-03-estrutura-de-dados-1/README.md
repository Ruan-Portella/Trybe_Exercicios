# Seção 03: Estrutura de Dados I: Listas Lineares

>Essa seção pertence ao módulo [Ciência da Computação](https://github.com/Ruan-Portella/Trybe_Exercicios/tree/main/ciencia-da-computacao) do curso da [Trybe](https://www.betrybe.com/).

## Comandos Aprendidos

- 1 `Tipos Abstratos de Dados (TADs)` - São estruturas de dados que abstraem um tipo de dado, definindo uma coleção de operações que são executadas sobre esse dado. Exemplos: Listas, Pilhas, Filas, Árvores, etc.
- 2 `Estruturas de Dados (EDs)` - São implementações concretas de TADs. Exemplos: Listas encadeadas, Listas duplamente encadeadas, Listas circulares, Pilhas, Filas, Árvores, etc.
- 3 `Nó` - É um elemento de uma lista encadeada. Cada nó possui um valor e um ponteiro para o próximo nó da lista.
- 4 `Lista Encadeada` - É uma estrutura de dados linear e dinâmica. Cada elemento da lista é um nó, que possui um valor e um ponteiro para o próximo nó da lista. O último nó da lista aponta para `NULL`.
- 5 `Lista Duplamente Encadeada` - É uma estrutura de dados linear e dinâmica. Cada elemento da lista é um nó, que possui um valor, um ponteiro para o próximo nó da lista e um ponteiro para o nó anterior. O primeiro nó da lista aponta para `NULL` no ponteiro anterior e o último nó da lista aponta para `NULL` no ponteiro próximo.
- 6 `Pilhas` - É uma estrutura de dados linear e dinâmica. É uma lista encadeada onde a inserção e remoção de elementos ocorre apenas no início da lista.
- 7 `LILO` - Last In, Last Out. É uma sigla que representa o comportamento de uma pilha, onde o último elemento inserido é o primeiro a ser removido.
- 8 `Operações Comuns da Pilha` - `push` (inserir elemento no topo da pilha), `pop` (remover elemento do topo da pilha), `peek` (retornar o elemento do topo da pilha), `isEmpty` (verificar se a pilha está vazia) e `isFull` (verificar se a pilha está cheia).
- 9 `Filas` - É uma estrutura de dados linear e dinâmica. É uma lista encadeada onde a inserção de elementos ocorre no final da lista e a remoção de elementos ocorre no início da lista.
- 10 `FIFO` - First In, First Out. É uma sigla que representa o comportamento de uma fila, onde o primeiro elemento inserido é o primeiro a ser removido.
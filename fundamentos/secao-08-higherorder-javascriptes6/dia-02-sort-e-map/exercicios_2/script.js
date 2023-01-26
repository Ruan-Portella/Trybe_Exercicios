// Para os exercícios propostos, use o seguinte template:


const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//   Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
    const formatedBookNames = () => {
        return books.map((book) => (`${book.name} - ${book.genre} - ${book.author.name}`));
      }
      console.log(formatedBookNames());

//   Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO

    const expectedResult2 = [
    'George R. R. Martin - 1948',
    'J. R. R. Tolkien - 1892',
    'Isaac Asimov - 1920',
    'Frank Herbert - 1920',
    'Stephen King - 1947',
    'H. P. Lovecraft - 1890',
  ];
  
  const formatedAuthorNamesBirth = () => {
        return books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
      }

// Construa um array de objetos a partir do array de livros.

const expectedResult3 = [
    {
      author: 'Isaac Asimov',
      age: 31,
    },
    {
      author: 'H. P. Lovecraft',
      age: 38,
    },
    {
      author: 'Stephen King',
      age: 39,
    },
    {
      author: 'George R. R. Martin',
      age: 43,
    },
    {
      author: 'Frank Herbert',
      age: 45,
    },
    {
      author: 'J. R. R. Tolkien',
      age: 62,
    },
  ];
  
  const nameAndAge = () => {
        return books
          .map((book) => (
            {
              author: book.author.name,
              age: book.releaseYear - book.author.birthYear,
            }
          ))
          .sort((obj1, obj2) => obj1.age - obj2.age);
  }



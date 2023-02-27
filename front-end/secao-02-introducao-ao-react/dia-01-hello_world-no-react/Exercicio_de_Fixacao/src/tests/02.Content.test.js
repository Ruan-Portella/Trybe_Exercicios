import { render, screen } from '@testing-library/react';
import App from '../App';
import Content from '../Content';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi'
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei'
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei'
  },
];

describe('2 - Crie um arquivo chamado Content.js, que representará o componente Content', () => {
  test('O componente Content foi criado na pasta correta e renderiza uma ul', () => {
    render(<Content />);

    const contentList = screen.queryByRole('list');
    expect(contentList).toBeInTheDocument();
  });
  
  test('O componente Content é renderizado no App e com as mensagens corretas', () => {
    render(<App />);
    const contentItems = screen.getAllByRole('listitem');

    contentItems.forEach((item, index) => {
      const { nome, bloco, status } = conteudos[index];

      expect(item).toHaveTextContent(`Eu ${status} o conteúdo ${nome} no bloco ${bloco}`);
    });
  });
});

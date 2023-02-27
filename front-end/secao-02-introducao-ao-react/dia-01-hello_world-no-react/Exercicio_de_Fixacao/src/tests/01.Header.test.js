import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../Header';

describe('1 - Crie um arquivo chamado Header.js, que representará o componente Header', () => {
  test('O componente foi criado na pasta correta e renderiza uma tag h1', () => {
    render(<Header />);

    const heading = screen.queryByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('A tag h1 é renderizada no App com o texto "Conteúdos de Frontend"', () => {
    render(<App />);

    const heading = screen.queryByRole('heading', { level: 1, name: 'Conteúdos de Frontend' });
    expect(heading).toBeInTheDocument();
  });
});

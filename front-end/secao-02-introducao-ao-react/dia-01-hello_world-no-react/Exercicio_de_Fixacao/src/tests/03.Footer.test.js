import { render, screen } from '@testing-library/react';
import App from '../App';
import Footer from '../Footer';

describe('3 - Crie um arquivo chamado Footer.js, que representará o componente Footer', () => {
  test('O componente Footer foi criado na pasta correta', () => {
    render(<Footer />);

    const footer = screen.queryByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  test('O componente Footer é renderizado na tela com a mensagem correta dentro de uma tag h3', () => {
    render(<App />);

    const footer = screen.queryByRole('heading', { level: 3, name: 'E isso é só o começo...'});
    expect(footer).toBeInTheDocument();
  });
});

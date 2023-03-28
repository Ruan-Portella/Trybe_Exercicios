import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  /*
    Exercício 04
  */

  const characterList = [
    {
      id: 1,
      name: 'Chapolin Colorado',
      source: 'Chaves',
      defensePoints: 40,
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(characterList),
  });

  render(<App />);
  const enemyEL = await screen.findByRole('heading', { name: 'Chapolin Colorado', defensePoints: 40 });
  expect(enemyEL).toBeInTheDocument();
});

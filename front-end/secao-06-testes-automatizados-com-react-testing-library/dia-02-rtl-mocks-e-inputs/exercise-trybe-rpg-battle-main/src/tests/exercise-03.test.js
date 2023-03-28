import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');
const enemy = {
  name: 'Chapolin Colorado',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  /*
    Exercício 03
  */

  rollMultipleDice.mockReturnValue(50);
  const resultObject = attackEnemy(2, 20, enemy);
  expect(resultObject.success).toBe(true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  /*
    Exercício 03
  */
  rollMultipleDice.mockReturnValue(25);
  const resultObject = attackEnemy(2, 20, enemy);
  expect(resultObject.success).toBe(false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  /*
    Exercício 03
  */
  rollMultipleDice.mockReturnValue(30);
  const resultObject = attackEnemy(2, 20, enemy);
  expect(resultObject.success).toBe(false);
});

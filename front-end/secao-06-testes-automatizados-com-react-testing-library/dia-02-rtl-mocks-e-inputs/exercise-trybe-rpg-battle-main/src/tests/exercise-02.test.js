import rollDice from '../service/rollDice';
import rollMultipleDice from '../service/rollMultipleDice';

jest.mock('../service/rollDice');
it('testa a função `rollMultipleDice`', () => {
  /*
    Exercício 02
  */
  rollDice.mockReturnValue(6).mockReturnValue(4);
  expect(rollMultipleDice(2, 20)).toBe(8);

  expect(rollDice).toBeCalledTimes(2);
});

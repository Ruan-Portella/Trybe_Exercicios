import rollDice from './rollDice';

const defaultDiceSize = 20;

const rollMultipleDice = (quantity = 1, size = defaultDiceSize) => {
  let result = 0;
  for (let i = 0; i < quantity; i += 1) {
    result += rollDice(size);
  }

  return result;
};

export default rollMultipleDice;

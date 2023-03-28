const defaultDiceSize = 20;

const rollDice = (size = defaultDiceSize) => {
  const maxNumber = Math.floor(size);
  return Math.floor(Math.random() * (maxNumber - 1) + 1);
};

export default rollDice;

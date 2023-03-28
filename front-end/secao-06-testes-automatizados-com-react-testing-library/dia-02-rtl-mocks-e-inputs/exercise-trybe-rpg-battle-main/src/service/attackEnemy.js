import rollMultipleDice from './rollMultipleDice';

const attackEnemy = (diceQuantity, diceSize, enemy) => {
  const attackPoints = rollMultipleDice(diceQuantity, diceSize);
  const { defensePoints } = enemy;
  return {
    attackPoints,
    defensePoints,
    success: attackPoints > defensePoints,
  };
};

export default attackEnemy;

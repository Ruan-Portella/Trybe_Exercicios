// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacate', 'Laranja', 'Sim'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Ruan', 'Portella', 'Morales'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...specialFruit, ...additionalItens]
  return fruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));
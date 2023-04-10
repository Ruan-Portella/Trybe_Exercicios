const maxPokemons = 900;

function randomNumber() {
  return Math.floor(Math.random() * maxPokemons) + 1;
}

export default randomNumber;

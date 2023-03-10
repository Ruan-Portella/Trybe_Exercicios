import '../styles/about.css';

function About() {
  const URL = 'https://archives.bulbagarden.net/media/upload/8/86/Gen_I_Pok%C3%A9dex.png';
  return (
    <section>
      <h1>About Pokédex</h1>
      <section>
        <p>
          Essa aplicação simula uma pokedex,
          uma digital encyclopedia contendo todos pokémons.
        </p>
        <p>
          Você pode filtrar pokémons por tipo,
          e ver mais sobre cada um deles em details,
        </p>
        <img className="pokedex-image" src={ URL } alt="Pokedex" />
      </section>
    </section>
  );
}

export default About;

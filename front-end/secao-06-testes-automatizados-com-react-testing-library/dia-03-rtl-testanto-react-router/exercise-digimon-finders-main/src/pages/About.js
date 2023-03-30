import React from 'react';
import Header from '../components/Header';
import digimonGroup from '../images/digimon_group.jpeg';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>About</h1>
        <div className="about-container">
          <p>
            { `Digimon é uma série japonesa criada
            por Akiyoshi Hongo.` }
          </p>
          <p>
            { `A série possui anime, mangá, brinquedos, 
            videogames e muito mais.` }
          </p>
          <p>
            { `Digimon são monstros de várias formas que 
            vivem em um "Mundo Digital", um universo paralelo
            que se originou das várias redes de comunicação.` }
          </p>
          <p>
            <a href="https://digimon.fandom.com/wiki/Digimon">Acesse esse link</a>
            { ` para conhecer mais sobre o mundo
            Digimon.` }
          </p>
          <img src={ digimonGroup } alt="Grupo dos Digimon da primeira geração" />
        </div>
      </>
    );
  }
}

export default About;

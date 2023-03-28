import React from 'react';
import './App.css';
import attackEnemy from './service/attackEnemy';

class App extends React.Component {
  state = {
    diceQuantity: 1,
    diceSize: 4,
    characters: [],
    selectedCharacterId: 1,
    attackResult: null,
  };

  componentDidMount() {
    fetch('https://api-trybe-characters.vercel.app/api/characters')
      .then((res) => res.json())
      .then((data) => this.setState({ characters: data }));
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value, attackResult: null });
  };

  handleClickAttack = () => {
    const { diceQuantity, diceSize, selectedCharacterId, characters } = this.state;
    const enemy = characters.find(
      (character) => character.id === parseInt(selectedCharacterId, 10),
    );
    this.setState({ attackResult: attackEnemy(diceQuantity, diceSize, enemy) });
  };

  render() {
    const {
      diceQuantity,
      diceSize,
      selectedCharacterId,
      characters,
      attackResult,
    } = this.state;

    const selectedCharacter = characters.length
      ? characters.find(
        (character) => character.id === parseInt(selectedCharacterId, 10),
      )
      : null;

    return (
      <main>
        <h1>⚔️ Trybe RPG Battle</h1>
        <hr />
        <div className="select-item">
          1. Quantos dados você quer usar?
          <select
            name="diceQuantity"
            id="diceQuantity"
            value={ diceQuantity }
            onChange={ this.handleChange }
          >
            <option value="1">1 Dado</option>
            <option value="2">2 Dados</option>
            <option value="3">3 Dados</option>
          </select>
        </div>
        <div className="select-item">
          2. Número de Faces do seu Dado
          <select
            name="diceSize"
            id="diceSize"
            value={ diceSize }
            onChange={ this.handleChange }
          >
            <option value="4">D04</option>
            <option value="6">D06</option>
            <option value="8">D08</option>
            <option value="10">D10</option>
            <option value="12">D12</option>
            <option value="20">D20</option>
          </select>
        </div>
        <div className="select-item">
          3. Escolha um Personagem para Atacar
          <select
            name="selectedCharacterId"
            id="selectedCharacterId"
            value={ selectedCharacterId }
            onChange={ this.handleChange }
          >
            {characters.map((character) => (
              <option key={ character.id } value={ character.id }>
                {character.name}
              </option>
            ))}
          </select>
        </div>
        <hr />
        {selectedCharacter && (
          <>
            <h2>Seu Oponente:</h2>
            <h3>{selectedCharacter.name}</h3>
            <p>
              Origem:
              {' '}
              {selectedCharacter.source}
            </p>
            <p>
              Defesa:
              {' '}
              {selectedCharacter.defensePoints}
            </p>

          </>
        )}
        {attackResult && (
          <div className="battle">
            <hr />
            <h2>Resultado da Batalha</h2>
            <h3 style={ { color: attackResult.success ? 'lightgreen' : 'tomato' } }>
              {attackResult.success ? 'Você Venceu!' : 'Você Perdeu!'}
            </h3>
            <h4>
              Resultado nos dados:
              {' '}
              {attackResult.attackPoints}
            </h4>
            <h4>
              Defesa de
              {' '}
              {selectedCharacter && selectedCharacter.name}
              :
              {' '}
              {attackResult.defensePoints}
            </h4>
          </div>
        )}
        <hr />
        <button type="button" onClick={ this.handleClickAttack }>
          Atacar
        </button>
      </main>
    );
  }
}

export default App;

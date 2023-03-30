import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Digimon from '../components/Digimon';
import '../styles/search.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { searchDigimon: '', isFetched: false, errorMessage: '' };

    this.inputValue = this.inputValue.bind(this);
    this.requestDigimon = this.requestDigimon.bind(this);
  }

  inputValue(searchDigimon) {
    this.setState({ searchDigimon });
  }

  async requestDigimon() {
    const { searchDigimon } = this.state;
    if (searchDigimon) {
      try {
        const URL = 'https://digimon-api.vercel.app/api/digimon/name';
        const result = await fetch(`${URL}/${searchDigimon}`);
        const digimons = await result.json();
        this.setState({
          digimon: digimons[0],
          errorMessage: digimons.ErrorMsg,
          isFetched: true,
        });
      } catch (error) {
        console.log(`Erro ao fazer a requisição: ${error}`);
      }
    }
  }

  render() {
    const { digimon, searchDigimon, isFetched, errorMessage } = this.state;
    return (
      <>
        <Header />
        <h1>Search Digimon</h1>
        <main className="App">
          <label htmlFor="search-input">
            Digimon:
            <input
              id="search-input"
              placeholder="Ex. Greymon"
              value={ searchDigimon }
              onChange={ ({ target }) => this.inputValue(target.value) }
            />
          </label>
          <button
            onClick={ this.requestDigimon }
            type="button"
          >
            Search Digimon
          </button>
          {isFetched && <Digimon digimon={ digimon } error={ errorMessage } /> }
        </main>
      </>
    );
  }
}

export default Home;

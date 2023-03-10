import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import pokemonListData from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonList: pokemonListData,
    };
  }

  render() {
    const { pokemonList } = this.state;

    return (
      <div className="App">
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Pokedex pokemonList={ pokemonList } /> }
          />
          <Route exact path="/about" component={ About } />
          <Route
            path="/pokemon/:id"
            render={ (propsRouter) => (
              <PokemonDetails
                { ...propsRouter }
                pokemons={ pokemonList }
              />
            ) }
          />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;

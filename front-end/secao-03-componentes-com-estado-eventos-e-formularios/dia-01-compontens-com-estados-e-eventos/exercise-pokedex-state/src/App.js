import React from 'react';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemonList={ pokemonList } />
    </div>
  );
}

export default App;

import { render, screen } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';
import pokemonList from '../data';

describe('2 - Crie o componente `<Pokedex />`', () => {
  it('O componente `<Pokedex />` renderiza uma tag `h1` com o texto `Pokédex`', () => {
    render(<Pokedex pokemonList={ pokemonList } />);
    
    const titleElement = screen.getByRole('heading', { level: 1, name: "Pokédex" });
    expect(titleElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` renderiza uma tag `ul`', () => {
    render(<Pokedex pokemonList={ pokemonList } />);
    
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` é renderizado no `App.js`', () => {
    render(<App />);
    
    const titleText = screen.getByText("Pokédex");
    expect(titleText).toBeInTheDocument();
  });
});

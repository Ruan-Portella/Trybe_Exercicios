import { render, screen } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';
import pokemonList from '../data';

describe('3 - Renderize uma lista com as informações de cada pokémon', () => {
  it('Será validado se o componente `<Pokedex />` renderiza a quantidade correta de elementos', () => {
    render(<Pokedex pokemonList={pokemonList} />);
    const pokemonCards = screen.getAllByRole("listitem");

    expect(pokemonCards.length).toBe(pokemonList.length);
  });

  it('Será validado se todos os elementos da lista são renderizados', () => {
    render(<App />);
    
    pokemonList.forEach(({name}) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  })
});

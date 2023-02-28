import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import pokemonList from '../data';

describe('1 - Crie o componente `<Pokemon />`', () => {
  it('Será verificado se o componente possui a tag `li` envolvendo seu conteúdo', () => {
    const pikachuInfo = pokemonList[0];
    render(<Pokemon pokemon={pikachuInfo} />);
    
    const pokemonItem = screen.getByRole('listitem');
    expect(pokemonItem).toBeInTheDocument();
  });

  it('Será verificado se o componente renderiza as informações corretamente', () => {
    const pikachuInfo = pokemonList[0];
    render(<Pokemon pokemon={pikachuInfo} />);
    
    const { name, type, image, averageWeight: { value, measurementUnit } } = pikachuInfo;
    
    const pokemonName = screen.getByText(name);
    const pokemonType = screen.getByText(type);
    const pokemonImage = screen.getByAltText(name);
    const pokemonWeight = screen.getByText(`${value} ${measurementUnit}`);
    

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImage.src).toBe(image);
  });
});

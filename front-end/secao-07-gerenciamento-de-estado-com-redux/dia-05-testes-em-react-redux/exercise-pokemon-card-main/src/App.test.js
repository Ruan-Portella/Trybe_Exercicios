import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';
import userEvent from '@testing-library/user-event'

jest.mock('./utils/randomNumber')

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App/>)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const buttonEl = await screen.findByRole('button')
    expect(buttonEl).toBeInTheDocument()
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const firstPokemonId = 656;
    const firstEndPoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    randomNumber.mockReturnValue(firstPokemonId);

    renderWithRedux(<App />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndPoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const firstPokemonId = 656;
    const firstEndPoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    const secondPokemonId = 96;
    const secondEndPoint = 'https://pokeapi.co/api/v2/pokemon/96/';

    randomNumber.mockReturnValue(secondPokemonId);
    randomNumber.mockReturnValueOnce(firstPokemonId);

    renderWithRedux(<App />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndPoint);

    const buttonEl = await screen.findByRole('button')

    userEvent.click(buttonEl)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(secondEndPoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />)

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

    const pokemonName = screen.getByTestId('pokemon-name')
    const pokemonImage = screen.getByAltText('pokemon')

    expect(pokemonImage).toBeInTheDocument()
    expect(pokemonName).toBeInTheDocument()

  });
});

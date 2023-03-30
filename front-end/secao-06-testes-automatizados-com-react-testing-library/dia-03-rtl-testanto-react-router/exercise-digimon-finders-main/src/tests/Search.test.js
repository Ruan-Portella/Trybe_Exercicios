import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/RenderWithRouter';

describe('Testa as funcionalidades da aplicação', () => {
    afterEach(() => jest.clearAllMocks());
  it('Insere um valor na caixa de busca', () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Agumon');
    expect(searchInput).toHaveValue('Agumon');
  });
  it('Verifica que a tela começa sem digimons renderizados', () => {
    renderWithRouter(<App />);

    const digimonName = screen.queryByTestId('digimonName');
    expect(digimonName).not.toBeInTheDocument();
  });
  t('Busca por um digimon', async () => {
    const digimonMock = [
      {
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      },
    ];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimonMock),
    }));

    renderWithRouter(<App />);

    expect(global.fetch).toBeCalledTimes(0);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, 'Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    const digimonLevel = await screen.findByText('Level: Rookie');
    expect(digimonLevel).toBeInTheDocument();
    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();
    const digimonImage = await screen.findByText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });
  it('Busca por um digimon inexistente', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, 'Pikachu');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    await screen.findByText('Pikachu is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
  });
  it('Caso a caixa de busca esteja vazia, nenhum fetch é realizado', async () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });
  it('A busca falha (erro no servidor)', async () => {
    jest.spyOn(global, 'fetch');
    await global.fetch.mockRejectedValue(
      new Error('Oops! Algo de errado não está certo!'),
    );

    jest.spyOn(global.console, 'log');

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.type(searchInput, 'Teste');
    userEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toBeCalledWith(
        'Erro ao fazer a requisição: Error: Oops! Algo de errado não está certo!',
      );
    });
  });
});
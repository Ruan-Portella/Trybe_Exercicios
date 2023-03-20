import React from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe(`13 - Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece`, () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Avalia se a quantidade de produtos no carrinho da tela de listagem é renderizada corretamente', async () => {
    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();
    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[0]);
    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[1]);
    expect(await screen.findByTestId('shopping-cart-size')).toHaveTextContent(
      '2'
    );
  });

  it('Avalia se a quantidade de produtos no carrinho da tela de detalhes é renderizada corretamente', async () => {
    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();
    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[0]);
    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[1]);
    userEvent.click((await screen.findAllByTestId('product-detail-link'))[0]);
    await waitFor(async () => {
      expect((await screen.findByTestId('shopping-cart-size'))).toHaveTextContent('4');
    })
  });
});

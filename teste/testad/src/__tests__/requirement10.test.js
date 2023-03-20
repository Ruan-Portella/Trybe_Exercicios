import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import * as api from '../services/api';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe(`10 - Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade`, () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Adiciona produtos ao carrinho e manipula suas quantidades', async () => {
    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[0]);
    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[1]);
    userEvent.click(await screen.findByTestId('shopping-cart-button'));

    expect(await screen.findAllByTestId('shopping-cart-product-name'));
    expect(screen.getAllByTestId('shopping-cart-product-name')[0]).toHaveTextContent(
      mockedQueryResult.results[0].title,
    );

    expect(screen.getAllByTestId('shopping-cart-product-quantity')[0]).toHaveTextContent(
      '1',
    );

    expect(screen.getAllByTestId('shopping-cart-product-name')[1]).toHaveTextContent(
      mockedQueryResult.results[1].title,
    );
    expect(screen.getAllByTestId('shopping-cart-product-quantity')[1]).toHaveTextContent(
      '1',
    );

    userEvent.click(screen.getAllByTestId('product-increase-quantity')[0]);
    userEvent.click(screen.getAllByTestId('product-increase-quantity')[0]);
    userEvent.click(screen.getAllByTestId('product-decrease-quantity')[0]);

    userEvent.click(screen.getAllByTestId('product-increase-quantity')[1]);
    userEvent.click(screen.getAllByTestId('product-increase-quantity')[1]);

    expect(screen.getAllByTestId('shopping-cart-product-quantity')[0]).toHaveTextContent(
      '2',
    );
    expect(screen.getAllByTestId('shopping-cart-product-quantity')[1]).toHaveTextContent(
      '3',
    );

    userEvent.click(screen.getAllByTestId('product-decrease-quantity')[0]);
    userEvent.click(screen.getAllByTestId('product-decrease-quantity')[0]);
    expect(screen.getAllByTestId('shopping-cart-product-quantity')[0]).toHaveTextContent(
      '1',
    );
  });

  it('É possível excluir um produto do carrinho', async () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByTestId('shopping-cart-button'));

    await waitFor(async() =>
      expect(screen.getAllByTestId('shopping-cart-product-name')).toHaveLength(
        2
      )
    );

    userEvent.click(screen.getAllByTestId('remove-product')[1]);
    expect(screen.getAllByTestId('shopping-cart-product-name')).toHaveLength(1);
  });
});

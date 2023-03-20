import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe(`14 - Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque`, () => {
  beforeEach(()=> jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it(`Avalia se não é possível adicionar ao carrinho mais produtos do que o disponível em estoque`, async () => {

    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();
    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    userEvent.click((await screen.findAllByTestId('product-add-to-cart'))[1]);
    userEvent.click((await screen.findByTestId('shopping-cart-button')));
    expect((await screen.findAllByTestId('shopping-cart-product-name')));
    expect((await screen.findAllByTestId('shopping-cart-product-name'))[0]).toHaveTextContent(
      mockedQueryResult.results[1].title,
    );
    await waitFor(async () => expect((await screen.findAllByTestId('shopping-cart-product-quantity'))[0]).toHaveTextContent(
      '1',
    ))
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);
    userEvent.click((await screen.findAllByTestId('product-increase-quantity'))[0]);

    expect((await screen.findAllByTestId('shopping-cart-product-quantity'))[0]).toHaveTextContent(
      mockedQueryResult.results[1].available_quantity,
    );
  });
});

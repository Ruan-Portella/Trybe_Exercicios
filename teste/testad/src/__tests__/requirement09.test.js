import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe(`9 - Adicione um produto ao carrinho a partir de sua tela de exibição detalhada`, () => {
  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Adiciona um produto ao carrinho a partir da sua tela de detalhes', async () => {
    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    userEvent.click((await screen.findAllByTestId('product-detail-link'))[0]);

    await waitFor(() =>
      expect(screen.getByTestId('product-detail-name')).toHaveTextContent(
        mockedQueryResult.results[0].title
      )
    );

    userEvent.click(screen.getByTestId('product-detail-add-to-cart'));
    userEvent.click(screen.getByTestId('shopping-cart-button'));
    expect(screen.getAllByTestId('shopping-cart-product-name'));
    expect(
      screen.getAllByTestId('shopping-cart-product-name')[0]
    ).toHaveTextContent(mockedQueryResult.results[0].title);
    expect(
      screen.getAllByTestId('shopping-cart-product-quantity')[0]
    ).toHaveTextContent('1');
  });
});

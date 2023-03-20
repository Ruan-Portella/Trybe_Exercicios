import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe('6 - Selecione uma categoria e mostre somente os produtos daquela categoria', () => {
  beforeEach(()=> jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it(`Filtra corretamente os produtos de uma página para exibir somente os daquela
      categoria`, async () => {

    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();

    const categoriesEl = await screen.findAllByTestId('category');
    userEvent.click(categoriesEl[0]);

    expect(global.fetch).toHaveBeenCalledTimes(2);

    const productsEl = await screen.findAllByTestId('product');
    expect(productsEl.length).toEqual(
      mockedQueryResult.results.length,
    );
  });
});

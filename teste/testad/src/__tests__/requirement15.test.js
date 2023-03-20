import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';
import userEvent from '@testing-library/user-event';

describe('15 - Mostre quais produtos tem o frete grátis', () => {
  beforeEach(()=> jest.spyOn(global, 'fetch').mockImplementation(mockFetch));
  it('Exibe corretmente a informação de frete grátis dos produtos', async () => {

    renderWithRouter(<App />);
    expect(global.fetch).toHaveBeenCalled();
    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect((await screen.findAllByTestId('free-shipping')).length).toBe(1);
  });
});

import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';
import mockLocalStorage from '../__mocks__/localStorage';
import mockDetails from '../__mocks__/details';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe(`11 - Avalie e comente acerca de um produto em sua tela de exibição detalhada`, () => {
  beforeEach(() => jest.spyOn(global, 'fetch').mockImplementation(mockFetch));

  afterEach(jest.clearAllMocks);

  it('Avalia se é possível realizar uma avaliação na tela de detalhes de um produto', async () => {
    const evaluationEmail = `teste@trybe.com`;
    const evaluationContent = `Esta é uma avaliação sobre o primeiro produto realizada na tela de detalhe.`;

    renderWithRouter(<App />);
    
    expect(global.fetch).toHaveBeenCalled();

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    userEvent.click((await screen.findAllByTestId('product-detail-link'))[0]);
    await waitFor(async () =>
      expect(
        await screen.findByTestId('product-detail-name')
      ).toHaveTextContent(mockedQueryResult.results[0].title)
    );

    userEvent.type(screen.getByTestId('product-detail-email'), evaluationEmail);
    
    expect(await screen.findByTestId('product-detail-email')).toHaveValue(
      evaluationEmail
    );

    userEvent.type(
      screen.getByTestId('product-detail-evaluation'),
      evaluationContent
    );

    expect(await screen.findByTestId('product-detail-evaluation')).toHaveValue(
      evaluationContent
    );

    for (let index = 1; index <= 5; index += 1) {
      expect(await screen.findByTestId(`${index}-rating`)).toBeVisible();
    }
    userEvent.click(await screen.findByTestId('3-rating'));

    expect(await screen.findByTestId('submit-review-btn')).toBeVisible();
    userEvent.click(await screen.findByTestId('submit-review-btn'));

    expect(await screen.findByTestId('product-detail-email')).toHaveValue('');
    expect(await screen.findByTestId('product-detail-evaluation')).toHaveValue(
      ''
    );

    await waitFor(async () => {
      expect(await screen.findByText(evaluationEmail)).toBeVisible();
      expect(await screen.findByText(evaluationContent)).toBeVisible();
    });
  });

  it('Avalia se o formulário é validado corretamente', async () => {
    const evaluationEmailError = 'trybe';
    const fullEmail = 'trybe@trybe.com';

    renderWithRouter(<App />);

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    userEvent.click((await screen.findAllByTestId('product-detail-link'))[0]);

    const emailEl = await screen.findByTestId('product-detail-email');

    userEvent.type(emailEl, evaluationEmailError);

    expect(await screen.findByTestId('product-detail-email')).toHaveValue(evaluationEmailError);

    expect(await screen.findByTestId('submit-review-btn')).toBeVisible();
    userEvent.click(await screen.findByTestId('submit-review-btn'));

    await waitFor(async () =>
      expect(await screen.findByTestId('error-msg')).toHaveTextContent('Campos inválidos')
    );

    userEvent.type(await screen.findByTestId('product-detail-email'), fullEmail);

    userEvent.click(await screen.findByTestId('submit-review-btn'));

    expect(await screen.findByTestId('error-msg')).toHaveTextContent('Campos inválidos');

    userEvent.click(screen.getByTestId('3-rating'));
    userEvent.click(screen.getByTestId('submit-review-btn'));

    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
  });

  it('Avalia se a avaliação continua após recarregar a pagina', async () => {
    localStorage.clear();
    localStorage.setItem(mockDetails.id, JSON.stringify(mockLocalStorage));

    renderWithRouter(<App />);

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    userEvent.click((await screen.findAllByTestId('product-detail-link'))[0]);

    expect((await screen.findAllByTestId('review-card-email')).length).toEqual(2);

    expect((await screen.findAllByTestId('review-card-rating')).length).toEqual(2);
    expect((await screen.findAllByTestId('review-card-evaluation')).length).toEqual(2);
  });

  it('Avalia se a avaliação feita para um produto não aparece na tela de detalhes de outro produto', async () => {
    const evaluationEmail = `teste@trybe.com`;
    const evaluationContent = 'Esta é uma avaliação sobre o primeiro produto realizada na tela de detalhe.';

    renderWithRouter(<App />);

    userEvent.click((await screen.findAllByTestId('category'))[0]);
    
    const productLinks = await screen.findAllByTestId('product-detail-link');
    await act(async () => userEvent.click(productLinks[1]));
    
    expect(screen.queryByText(evaluationEmail)).toBeNull();
    expect(screen.queryByText(evaluationContent)).toBeNull();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/RenderWithRouter';

describe('Testa as rotas da aplicação', () => {
    it('Aplicação é renderizada com sucesso', () => {
      renderWithRouter(<App />);
      const headingEl = screen.getByRole('heading', {
        name: /Search Digimon/i,
      });
  
      expect(headingEl).toBeInTheDocument();
  
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const searchLink = screen.getByRole('link', { name: 'Search Digimon' });
      expect(aboutLink).toBeInTheDocument();
      expect(searchLink).toBeInTheDocument();
    });
    it('Ao clicar no link "About", direciona para a rota "/about"', () => {
        const { history } = renderWithRouter(<App />);
    
        const aboutLink = screen.getByRole('link', { name: 'About' });
        expect(aboutLink).toBeInTheDocument();
        userEvent.click(aboutLink);
    
        const { pathname } = history.location;
    
        expect(pathname).toBe('/about');
    
        const aboutTitle = screen.getByRole(
          'heading',
          { name: 'About' },
        );
    
        expect(aboutTitle).toBeInTheDocument();
      });

  it('Renderiza o NotFound caso seja acessada uma rota inexistente', () => {
    const { history } = renderWithRouter(<App />);

    const INVALID_URL = '/xablau';
    act(() => {
      history.push(INVALID_URL);
    });

    const notFoundTitle = screen.getByRole(
      'heading',
      { name: 'Page Not Found' },
    );
    expect(notFoundTitle).toBeInTheDocument();

    const notFoundText = screen.getByText(
      'A página que você está procurando não existe!',
    );
    expect(notFoundText).toBeInTheDocument();
  });
  });
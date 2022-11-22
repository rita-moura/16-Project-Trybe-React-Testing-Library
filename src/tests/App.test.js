import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('Testa se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', {
      name: 'Home',
    });
    expect(home).toBeInTheDocument();
    userEvent.click(home);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testa se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const about = screen.getByRole('link', {
      name: 'About',
    });
    expect(about).toBeInTheDocument();
    userEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação.', () => {
    const { history } = renderWithRouter(<App />);

    const favorites = screen.getByRole('link', {
      name: 'Favorite Pokémon',
    });
    expect(favorites).toBeInTheDocument();
    userEvent.click(favorites);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    });

    const notFoundTitle = screen.getByRole(
      'heading',
      { name: 'Page requested not found', level: 2 },
    );
    expect(notFoundTitle).toBeInTheDocument();
  });
});

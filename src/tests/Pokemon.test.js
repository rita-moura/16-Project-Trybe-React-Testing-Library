import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

const pokemon = {
  id: 143,
  name: 'Snorlax',
  type: 'Normal',
  averageWeight: {
    value: '460.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Vermillion City',
      map: 'https://cdn2.bulbagarden.net/upload/5/54/Kanto_Vermilion_City_Map.png',
    },
  ],
  summary: 'What sounds like its cry may actually be its snores or the rumblings of its hungry belly.',
};

describe('Testa se o componente Pokemon renderiza as informações corretas.', () => {
  test('Testa se é renderizado um card com as informações de determinado Pokémon.', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const name = screen.getByText('Snorlax');
    expect(name).toBeInTheDocument();

    const type = screen.getByText('Normal');
    expect(type).toBeInTheDocument();

    const averageWeight = screen.getByText('Average weight: 460.0 kg');
    expect(averageWeight).toBeInTheDocument();

    const image = screen.getByRole('img', {
      name: 'Snorlax sprite',
    });
    const urlImage = 'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png';
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(urlImage);
  });
  test('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido.', () => {
    const { history } = renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const link = screen.getByRole('link', {
      name: 'More details',
    });
    expect(link).toBeInTheDocument();
    expect(link.href).toBe('http://localhost/pokemon/143');

    userEvent.click(link);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemon/143');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados.', () => {
    renderWithRouter(<Pokemon pokemon={ pokemon } isFavorite />);

    const iconFavorite = screen.getByRole('img', {
      name: 'Snorlax is marked as favorite',
    });
    const urlIcon = 'http://localhost/star-icon.svg';
    expect(iconFavorite).toBeInTheDocument();
    expect(iconFavorite.src).toBe(urlIcon);
  });
});

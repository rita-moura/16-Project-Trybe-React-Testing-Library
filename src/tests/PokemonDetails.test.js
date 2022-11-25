import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import PokemonDetail from '../pages/PokemonDetails';

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

describe('Testa se a página Pokemon Details renderiza as informações corretas', () => {
  test('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(
      <PokemonDetail
        pokemonList={ [pokemon] }
        isPokemonFavoriteById={ {} }
        onUpdateFavoritePokemon={ () => {} }
        match={ { params: { id: '143' } } }
      />,
    );

    const nameDetails = screen.getByRole('heading', {
      name: 'Snorlax Details',
      level: 2,
    });
    expect(nameDetails).toBeInTheDocument();

    const name = screen.getByText('Snorlax');
    expect(name).toBeInTheDocument();

    const heading = screen.getByRole('heading', {
      name: 'Summary',
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(
      /what sounds like its cry may actually be its snores or the rumblings of its hungry belly\./i,
    );
    expect(paragraph).toBeInTheDocument();
  });
  test('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon.', () => {
    renderWithRouter(
      <PokemonDetail
        pokemonList={ [pokemon] }
        isPokemonFavoriteById={ {} }
        onUpdateFavoritePokemon={ () => {} }
        match={ { params: { id: '143' } } }
      />,
    );

    const heading = screen.getByRole('heading', {
      name: 'Game Locations of Snorlax',
      level: 2,
    });
    expect(heading).toBeInTheDocument();

    const location = screen.getByText('Kanto Vermillion City');
    expect(location).toBeInTheDocument();

    const img = screen.getByRole('img', {
      name: 'Snorlax location',
    });
    const urlImg = 'https://cdn2.bulbagarden.net/upload/5/54/Kanto_Vermilion_City_Map.png';
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(urlImg);
    expect(img.alt).toBe('Snorlax location');
  });
  test('Testa se o usuário pode favoritar um Pokémon através da página de detalhes.', () => {
    renderWithRouter(
      <PokemonDetail
        pokemonList={ [pokemon] }
        isPokemonFavoriteById={ {} }
        onUpdateFavoritePokemon={ () => {} }
        match={ { params: { id: '143' } } }
      />,
    );

    const favorite = screen.getByRole('checkbox', {
      name: 'Pokémon favoritado?',
    });
    expect(favorite).toBeInTheDocument();
  });
});

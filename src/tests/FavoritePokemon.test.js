import { render, screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemon } from '../pages';

describe('Testa se as informações corretas são exibidas na página Favorite pokémon.', () => {
  test('Testa se é exibido na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos.', () => {
    render(<FavoritePokemon />);

    const erroMessage = screen.getByText('No favorite Pokémon found');
    expect(erroMessage).toBeInTheDocument();
  });
});

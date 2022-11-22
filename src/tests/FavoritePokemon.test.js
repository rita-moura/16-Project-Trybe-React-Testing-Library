import { render, screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemon } from '../pages';

describe('Testa se as informações corretas são exibidas na página Favorite pokémon.', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos.', () => {
    render(<FavoritePokemon />);

    const erroMessage = screen.getByText(/no favorite pokémon found/i);
    expect(erroMessage).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a página Pokedex renderiza as informações corretas.', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      name: 'Encountered Pokémon',
    });
    expect(title).toBeInTheDocument();
  });
  // test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado.', () => {
  //   renderWithRouter(<App />);

  //   const allButton = screen.getAllByTestId('pokemon-type-button');
  // });
});

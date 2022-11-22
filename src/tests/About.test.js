import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../pages';

describe('Testa se a página contém as informações sobre a Pokédex', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<About />);

    const aboutTitle = screen.getByRole(
      'heading',
      { name: 'About Pokédex',
        level: 2,
      },
    );
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    render(<About />);

    const oneParagraph = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    expect(oneParagraph).toBeInTheDocument();

    const twoParagraph = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);
    expect(twoParagraph).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);

    const URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const img = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(URL);
  });
});

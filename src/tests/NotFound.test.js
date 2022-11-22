import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';

describe('Testa se a página notFound contém as informações corretas', () => {
  test('Testa se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<NotFound />);

    const title = screen.getByRole(
      'heading',
      { name: 'Page requested not found',
        level: 2,
      },
    );
    expect(title).toBeInTheDocument();
  });
  test('Testa se a página mostra a imagem', () => {
    render(<NotFound />);

    const URL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    const img = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found',
    });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(URL);
  });
});

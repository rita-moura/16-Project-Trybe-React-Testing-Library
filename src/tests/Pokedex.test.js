import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import pokemonList from '../data';
import { Pokedex } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testa se a página Pokedex renderiza as informações corretas.', () => {
  test('Testa se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', {
      name: 'Encountered Pokémon',
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });
  test('Testa se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(
      <Pokedex
        pokemonList={ pokemonList }
        isPokemonFavoriteById={ { null: null } }
      />,
    );

    const buttons = screen.getAllByTestId('pokemon-type-button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });

    const eletric = screen.getByRole('button', {
      name: 'Electric',
    });
    expect(eletric).toBeInTheDocument();

    const fire = screen.getByRole('button', {
      name: 'Fire',
    });
    expect(fire).toBeInTheDocument();

    const bug = screen.getByRole('button', {
      name: 'Bug',
    });
    expect(bug).toBeInTheDocument();

    const poison = screen.getByRole('button', {
      name: 'Poison',
    });
    expect(poison).toBeInTheDocument();

    const psychic = screen.getByRole('button', {
      name: 'Psychic',
    });
    expect(psychic).toBeInTheDocument();

    const normal = screen.getByRole('button', {
      name: 'Normal',
    });
    expect(normal).toBeInTheDocument();

    const dragon = screen.getByRole('button', {
      name: 'Dragon',
    });
    expect(dragon).toBeInTheDocument();
  });
  test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado.', () => {
    renderWithRouter(
      <Pokedex
        pokemonList={ pokemonList }
        isPokemonFavoriteById={ { null: null } }
      />,
    );

    const nextButton = screen.getByRole('button', {
      name: 'Próximo Pokémon',
    });
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);
    const pokemon = screen.getByText('Charmander');
    expect(pokemon).toBeInTheDocument();
  });
  test('Testa se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(
      <Pokedex
        pokemonList={ pokemonList }
        isPokemonFavoriteById={ { null: null } }
      />,
    );
    const imgPokemon = screen.getAllByRole('img', {
      name: /sprite/i,
    });
    expect(imgPokemon).toHaveLength(1);
  });
  test('Teste se a Pokédex contém um botão para resetar o filtro.', () => {
    renderWithRouter(
      <Pokedex
        pokemonList={ pokemonList }
        isPokemonFavoriteById={ { null: null } }
      />,
    );

    const buttonAll = screen.getByRole('button', {
      name: 'All',
    });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    const onePokemon = screen.getByText('Pikachu');
    expect(onePokemon).toBeInTheDocument();
  });
});

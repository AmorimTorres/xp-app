import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Pages/Login/Login';

test('if there is 3 fixed nav links ("Home", "About", "Favorite Pokémons")', () => {
  render(<Login />);

  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About' });
  const favPokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favPokemonsLink).toBeInTheDocument();
});

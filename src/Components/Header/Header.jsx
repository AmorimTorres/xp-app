import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from './styles';

function Header() {
  const userEmail = useSelector(({ user }) => user.email);

  return (
    <Container>
      <nav>
        <NavLink to="/investimentos">Investimentos</NavLink>
        <NavLink to="/conta">Conta</NavLink>
      </nav>
      <h3>
        Usuário:
        {userEmail}
      </h3>
    </Container>
  );
}

export default Header;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from './styles';

function Header() {
  const userEmail = useSelector(({ user }) => user.email);
  const user = localStorage.getItem('User');

  return (
    <Container>
      <nav>
        <NavLink to="/investimentos">Investimentos</NavLink>
        <NavLink to="/conta">Conta bancária</NavLink>
      </nav>
      <h3>
        {`Usuário: ${user || userEmail}`}
      </h3>
    </Container>
  );
}

export default Header;

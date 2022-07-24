import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
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
      <div>
        <h3>
          {`Usuário: ${user || userEmail}`}
        </h3>
        <Link to="/">
          <button
            type="button"
            aria-label="logout-button"
            onClick={() => localStorage.setItem('isLoged', false)}
          >
            Logout
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Header;

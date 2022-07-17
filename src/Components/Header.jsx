import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector(({ user }) => user.email);

  return (
    <div>
      <nav>
        <NavLink to="/investimentos">Investimentos</NavLink>
        <NavLink to="/conta">Conta</NavLink>
      </nav>
      <h1> Usuário: {userEmail} </h1>
    </div>
  );
}

export default Header;

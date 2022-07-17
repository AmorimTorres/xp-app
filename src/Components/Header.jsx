import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector(({ user }) => user.email);

  return (
    <div>
      <h1> Usuário: {userEmail} </h1>
    </div>
  );
}

export default Header;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeEmail, changePassword } from '../../Redux/Slicers/user.slicer';

import * as C from './styles';

import logo from '../../Images/logoXp.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 8;
    const regex = /^\S+@\S+\.\S+$/;
    return (
      email !== ''
        && regex.test(email)
        && password.length >= PASSWORD_LENGTH
    );
  }

  const handleClick = () => {
    dispatch(changeEmail(email));
    dispatch(changePassword(password));
  };

  return (
    <C.Container>
      <C.Form>
      <label htmlFor="email">
        <input placeholder="Digite o seu email" type="text" name="email" onChange={({ target }) => setEmail(target.value)} />
      </label>
      <label htmlFor="email">
        <input placeholder="Digite a sua senha" type="password" name="password" onChange={({ target }) => setPassword(target.value)} />
      </label>
      <Link to='/investimentos'>
        <button type="button" disabled={ !isButtonDisabled() } aria-label="login-button" onClick={handleClick}>
          Acessar
        </button>
      </Link>
      </C.Form>
      <C.Aside>
        <img src={logo} alt='logo-xp-investimentos' />
      </C.Aside>
    </C.Container>
  );
}

export default Login;

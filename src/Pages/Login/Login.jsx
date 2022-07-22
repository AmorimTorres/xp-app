import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeEmail } from '../../Redux/Slicers/user.slicer';

import * as C from './styles';

import logo from '../../Images/logoXp.png';

function Login() {
  const date = new Date().toLocaleString();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('User');
    if (user) {
      setEmail(user);
    }
  }, []);

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 8;
    const regex = /^\S+@\S+\.\S+$/;
    return (
      email !== ''
        && regex.test(email)
        && password.length >= PASSWORD_LENGTH
    );
  };

  const handleClick = () => {
    dispatch(changeEmail(email));
    localStorage.setItem('DateAndHour', date);
    localStorage.setItem('User', email);
  };

  return (
    <C.Container>
      <C.Content>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input
              placeholder="Insira um email válido"
              type="text"
              aria-label="email"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Insira a sua senha (mín 8 caracteres)"
              type="password"
              aria-label="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <Link to="/investimentos">
            <button
              type="button"
              disabled={!isButtonDisabled()}
              aria-label="login-button"
              onClick={handleClick}
            >
              Acessar
            </button>
          </Link>
        </form>
      </C.Content>
      <C.Aside>
        <img src={logo} alt="logo-xp-investimentos" />
        <h2>
          Há 20 anos transformando
          o mercado financeiro para melhorar
          a vida das pessoas.
        </h2>
      </C.Aside>
    </C.Container>
  );
}

export default Login;

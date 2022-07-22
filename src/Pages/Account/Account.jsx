import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import { decreaseBalance, increaseBalance } from '../../Redux/Slicers/user.slicer';

import * as C from './styles';

function Account() {
  const balance = useSelector(({ user }) => user.balance);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const depositHandleClick = () => {
    dispatch(increaseBalance(inputValue));
    setInputValue('');
  };

  const withdrawHandleClick = () => {
    dispatch(decreaseBalance(inputValue));
    setInputValue('');
  };

  const checkInputValue = +inputValue === 0 || inputValue === '';
  const disableWithdrawButton = balance <= 0 || inputValue > balance;

  const balanceInRealBR = balance.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <C.Container>
      <Header />
      <h1>
        Saldo em conta:
        {balanceInRealBR}
      </h1>
      <C.Content>
        <label htmlFor="balance-movements">
          <input
            type="number"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder="Insira um valor"
          />
        </label>
        <button
          type="button"
          aria-label="deposit-button"
          onClick={depositHandleClick}
          className="balance-movements-button1"
          disabled={checkInputValue}
        >
          Depositar
        </button>
        <button
          disabled={disableWithdrawButton || checkInputValue}
          type="button"
          aria-label="withdraw-button"
          onClick={withdrawHandleClick}
          className="balance-movements-button"
        >
          Retirar
        </button>
      </C.Content>
    </C.Container>
  );
}

export default Account;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import { decreaseBalance, increaseBalance } from '../../Redux/Slicers/user.slicer';

import * as C from './styles';

function Account() {
  const balance = useSelector(({ user }) => user.balance);
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const depositHandleClick = () => {
    dispatch(increaseBalance(inputValue));
    setInputValue('');
  };

  const withdrawHandleClick = () => {
    dispatch(decreaseBalance(inputValue));
    setInputValue('');
  };

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
          Insira o valor de depósito ou retirada:
          <input
            type="number"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </label>
        <button
          type="button"
          aria-label="deposit-button"
          onClick={depositHandleClick}
          className="balance-movements-button1"
        >
          Depositar
        </button>
        <button
          disabled={!!disableWithdrawButton}
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

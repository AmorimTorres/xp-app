import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { decreaseBalance, increaseBalance } from '../Redux/Slicers/user.slicer';

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
    <div>
      <Header />
      <h1> Saldo em conta: {balanceInRealBR} </h1>
      <input type="number" value={inputValue} onChange={({ target }) => setInputValue(target.value)} />
      <button type="button" aria-label="deposit-button" onClick={depositHandleClick}>
        Depositar
      </button>
      <button disabled={!!disableWithdrawButton} type="button" aria-label="withdraw-button" onClick={withdrawHandleClick}>
        Retirar
      </button>
    </div>
  );
}

export default Account;

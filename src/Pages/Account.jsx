import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header';
import { decreaseBalance, increaseBalance } from '../Redux/Slicers/account.slicer';

function Account() {
  const balance = useSelector(({ account }) => account.balance);
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const depositHandleClick = () => {
    dispatch(increaseBalance(inputValue));
  };

  const withdrawHandleClick = () => {
    dispatch(decreaseBalance(inputValue));
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
      <input type="number" onChange={({ target }) => setInputValue(target.value)} />
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

import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';

function Account() {
  const balance = useSelector(({ account }) => account.balance);

  return (
    <div>
      <Header />
      <h1> Saldo em conta: {balance} </h1>
    </div>
  );
}

export default Account;

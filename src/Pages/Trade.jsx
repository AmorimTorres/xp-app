import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseBalance, insertPurchasedShares } from '../Redux/Slicers/user.slicer';
import Header from '../Components/Header';

function Trade() {
  const [buyInputValue, setBuyInputValue] = useState(0);
  const [sellInputValue, setSellInputValue] = useState(0);

  const shares = useSelector(({ sharesData }) => sharesData.shares);
  const { share } = useParams();

  const dispatch = useDispatch();

  const getShareInfos = shares.filter((item) => item.ticker === share);

  const balance = useSelector(({ user }) => user.balance);

  const balanceInRealBR = balance.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const buyHandleClick = () => {
    const totalValue = buyInputValue * getShareInfos[0].stockPrice;
    dispatch(decreaseBalance(totalValue));
    const buyShareObj = {
      company: getShareInfos[0].company,
      ticker: getShareInfos[0].ticker,
      stockPrice: getShareInfos[0].stockPrice,
      quantity: buyInputValue,
    };
    dispatch(insertPurchasedShares(buyShareObj));
  };

  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Quantidade</th>
            <th>Valor R$</th>
          </tr>
        </thead>
        <tbody>
          {shares &&
            shares
              .filter((item) => item.ticker === share)
              .map((item) => (
                <tr key={item.company}>
                  <td>
                    <button type="button" disabled>
                      {item.ticker}
                    </button>
                  </td>
                  <td>
                    <button type="button" disabled>
                      {item.quantity}
                    </button>
                  </td>
                  <td>
                    <button type="button" disabled>
                      {item.stockPrice}
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <form>
        <button type="button" aria-label="buy-button" onClick={buyHandleClick}>
          COMPRAR
        </button>
        <label htmlFor="input-quantity">
          <input type="text" aria-label="buy-input" value={buyInputValue} onChange={({ target }) => setBuyInputValue(target.value)} placeholder="Informe a quantidade que você deseja comprar" />
        </label>
        <button type="button" aria-label="sell-button">
          VENDER
        </button>
        <label htmlFor="input-quantity">
          <input type="text" aria-label="sell-input" value={sellInputValue} onChange={({ target }) => setSellInputValue(target.value)} placeholder="Informe a quantidade que você deseja vender" />
        </label>
      </form>
      <h2> Saldo atual da sua conta: {balanceInRealBR} </h2>
    </div>
  );
}

export default Trade;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  decreaseBalance,
  deleteShare,
  increaseBalance,
  insertPurchasedShares,
  removePurchasedShares,
} from '../Redux/Slicers/user.slicer';
import Header from '../Components/Header/Header';
import { decreaseMarketShareQtt, increaseMarketShareQtt } from '../Redux/Slicers/shares.slicer';

function Trade() {
  const dispatch = useDispatch();
  const { share } = useParams();

  const [buyInputValue, setBuyInputValue] = useState(0);
  const [sellInputValue, setSellInputValue] = useState(0);

  const allShares = useSelector(({ stockData }) => stockData.shares);
  const portifolioShares = useSelector(({ user }) => user.shares);
  const balance = useSelector(({ user }) => user.balance);

  const balanceInRealBR = balance.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const getSelectedShareInfo = allShares.filter((item) => item.ticker === share);

  const checkSharesPortifolio = portifolioShares
    .map((userShares) => userShares.ticker)
    .some((userShare) => userShare === getSelectedShareInfo[0].ticker);

  const checkBalanceForNewPurchase = buyInputValue * getSelectedShareInfo[0].stockPrice > balance;

  const checkPortifolioSharesInvent = () => {
    const sharesInPortifolio = portifolioShares
      .filter((item) => item.ticker === share);
    if (sellInputValue > sharesInPortifolio[0].quantity) {
      return true;
    }
    return false;
  };

  const checkMarketSharesInvent = () => {
    const marketShare = allShares
      .filter((item) => item.ticker === share);
    if (+buyInputValue > +marketShare[0].quantity) {
      return true;
    }
    return false;
  };

  const sharePayload = {
    id: getSelectedShareInfo[0].id,
    company: getSelectedShareInfo[0].company,
    ticker: getSelectedShareInfo[0].ticker,
    stockPrice: getSelectedShareInfo[0].stockPrice,
    quantity: +buyInputValue,
  };

  const buyHandleClick = () => {
    const totalValue = buyInputValue * getSelectedShareInfo[0].stockPrice;
    dispatch(decreaseBalance(totalValue));
    dispatch(insertPurchasedShares(sharePayload));
    dispatch(decreaseMarketShareQtt({ value: buyInputValue, id: getSelectedShareInfo[0].id - 1 }));
    setBuyInputValue('');
    toast.success('Compra feita com sucesso');
  };

  const sellHandleClick = () => {
    const totalValue = sellInputValue * getSelectedShareInfo[0].stockPrice;
    dispatch(increaseBalance(totalValue));
    const sharesInPortifolio = portifolioShares
      .filter((item) => item.ticker === share);
    if (+sellInputValue === +sharesInPortifolio[0].quantity) {
      dispatch(deleteShare(sharePayload));
    } else {
      dispatch(removePurchasedShares(sharePayload));
    }
    dispatch(increaseMarketShareQtt({ value: sellInputValue, id: getSelectedShareInfo[0].id - 1 }));
    setSellInputValue('');
    toast.success('Venda feita com sucesso');
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
          {allShares
            && allShares
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
        <button
          type="button"
          aria-label="buy-button"
          disabled={!!checkBalanceForNewPurchase || checkMarketSharesInvent()}
          onClick={buyHandleClick}
        >
          COMPRAR
        </button>
        <label htmlFor="input-quantity">
          <input
            type="text"
            aria-label="buy-input"
            value={buyInputValue}
            onChange={({ target }) => setBuyInputValue(target.value)}
            placeholder="Informe a quantidade que você deseja comprar"
          />
        </label>
        <button
          type="button"
          aria-label="sell-button"
          disabled={!checkSharesPortifolio || checkPortifolioSharesInvent()}
          onClick={sellHandleClick}
        >
          VENDER
        </button>
        <label htmlFor="input-quantity">
          <input
            type="text"
            aria-label="sell-input"
            value={sellInputValue}
            onChange={({ target }) => setSellInputValue(target.value)}
            placeholder="Informe a quantidade que você deseja vender"
          />
        </label>
      </form>
      <h2>
        Saldo atual da sua conta:
        {balanceInRealBR}
      </h2>
      <Toaster />
    </div>
  );
}

export default Trade;

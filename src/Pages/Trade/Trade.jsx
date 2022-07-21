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
} from '../../Redux/Slicers/user.slicer';
import Header from '../../Components/Header/Header';
import { decreaseMarketShareQtt, increaseMarketShareQtt } from '../../Redux/Slicers/shares.slicer';

import * as C from './styles';

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

  const toastSuccessId = 'success';

  const notify = (status) => {
    switch (status) {
      case 'noBalance':
        toast.error('Você não tem saldo o suficiente para essa compra', { toastId: toastSuccessId });
        break;
      case 'noSharesQttonPortifolio':
        toast.error('Você não tem essa quantidade de ações na sua carteira');
        break;
      case 'noSharesOnMarketQtt':
        toast.error('Favor verificar a quantidade dessa ação disponível no mercado');
        break;
      default:
        toast('Qualquer dúvida, faça contato com o nosso time de experts');
    }
  };

  const getSelectedShareInfo = allShares.filter((item) => item.ticker === share);

  const checkSharesPortifolio = portifolioShares
    .map((stockData) => stockData.ticker)
    .some((item) => item === getSelectedShareInfo[0].ticker);

  const checkBalanceForNewPurchase = () => {
    if (buyInputValue * getSelectedShareInfo[0].stockPrice > balance) {
      notify('noBalance');
      return true;
    }
    return false;
  };

  const checkPortifolioSharesInvent = () => {
    const sharesInPortifolio = portifolioShares
      .filter((item) => item.ticker === share);
    if (sellInputValue > sharesInPortifolio[0].quantity) {
      notify('noSharesQttonPortifolio');
      return true;
    }
    return false;
  };

  const checkMarketSharesInvent = () => {
    const marketShare = allShares
      .filter((item) => item.ticker === share);
    if (+buyInputValue > +marketShare[0].quantity) {
      notify('noSharesOnMarketQtt');
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
    <C.Container>
      <Header />
      <C.Content>
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
                    <button type="button" disabled className="ticker-button">
                      {item.ticker}
                    </button>
                  </td>
                  <td>
                    <button type="button" disabled className="qtt-value-button">
                      {item.quantity}
                    </button>
                  </td>
                  <td>
                    <button type="button" disabled className="qtt-value-button">
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
            disabled={checkBalanceForNewPurchase() || checkMarketSharesInvent()}
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
              placeholder="Informe a quantidade"
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
              placeholder="Informe a quantidade"
            />
          </label>
        </form>
        <h2>
          Saldo atual da sua conta:
          {balanceInRealBR}
        </h2>
      </C.Content>
      <Toaster />
    </C.Container>
  );
}

export default Trade;

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

  const getSelectedShareInfo = allShares.filter((item) => item.ticker === share);

  const notify = (status) => {
    switch (status) {
      case 'error':
        toast.error('Verifique o saldo da sua conta');
        break;
      case 'error2':
        toast.error(`Verifique a quantidade de açõe ${share} disponíveis no mercado`);
        break;
      case 'noSharesQttonPortifolio':
        toast.error(`Verifique a quantidade de ações ${share} disponíveis na sua carteira`);
        break;
      case 'sellSuccess':
        toast.success('Venda realizada com sucesso');
        break;
      case 'buySuccess':
        toast.success('Compra realizada com sucesso');
        break;
      default:
        toast('Qualquer dúvida, faça contato com o nosso time de experts');
    }
  };

  const checkSharesPortifolio = portifolioShares
    .map((stockData) => stockData.ticker)
    .some((item) => item === getSelectedShareInfo[0].ticker);

  const sharePayload = {
    id: getSelectedShareInfo[0].id,
    company: getSelectedShareInfo[0].company,
    ticker: getSelectedShareInfo[0].ticker,
    stockPrice: getSelectedShareInfo[0].stockPrice,
    quantity: +buyInputValue,
  };

  const buyHandleClick = () => {
    const marketShare = allShares.filter((item) => item.ticker === share);
    const totalBuyValue = buyInputValue * getSelectedShareInfo[0].stockPrice;
    if (balance < totalBuyValue) {
      notify('error');
    } else if (+buyInputValue > +marketShare[0].quantity) {
      notify('error2');
    } else {
      dispatch(decreaseBalance(totalBuyValue));
      dispatch(insertPurchasedShares(sharePayload));
      dispatch(decreaseMarketShareQtt({ value: buyInputValue, id: getSelectedShareInfo[0].id - 1 }));
      setBuyInputValue('');
      notify('buySuccess');
    }
  };

  const sellHandleClick = () => {
    const totalValue = sellInputValue * getSelectedShareInfo[0].stockPrice;
    const sharesInPortifolio = portifolioShares.filter((item) => item.ticker === share);
    if (sellInputValue > sharesInPortifolio[0].quantity) {
      notify('noSharesQttonPortifolio');
    } else if (+sellInputValue === +sharesInPortifolio[0].quantity) {
      dispatch(deleteShare(sharePayload));
      dispatch(increaseBalance(totalValue));
      dispatch(increaseMarketShareQtt({ value: sellInputValue, id: getSelectedShareInfo[0].id - 1 }));
      setSellInputValue('');
      notify('sellSuccess');
    } else {
      dispatch(removePurchasedShares(sharePayload));
      dispatch(increaseBalance(totalValue));
      dispatch(increaseMarketShareQtt({ value: sellInputValue, id: getSelectedShareInfo[0].id - 1 }));
      setSellInputValue('');
      notify('sellSuccess');
    }
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
            disabled={!checkSharesPortifolio}
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
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#058700',
              color: '#fff',
              fontWeight: 'bold',
              border: '1px solid #fff',
              transition: 'all 0.2s',
              width: '20rem',
              padding: '0.7rem',
            },
          },
          error: {
            style: {
              background: '#ff0000',
              color: '#fff',
              fontWeight: 'bold',
              border: '1px solid #fff',
              transition: 'all 0.2s',
              width: '20rem',
              padding: '0.7rem',
            },
          },
        }}
      />
    </C.Container>
  );
}

export default Trade;

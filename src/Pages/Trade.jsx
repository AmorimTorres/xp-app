import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';

function Trade() {
  const shares = useSelector(({ sharesData }) => sharesData.shares);
  const { share } = useParams();

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
      <div>
        <button type="button"> COMPRAR </button>
        <label htmlFor="input-quantity">
          <input type="text" name="input-quantity" placeholder="Informe a quantidade de ações que você deseja comprar" />
        </label>
        <button type="button"> VENDER </button>
        <label htmlFor="input-quantity">
          <input type="text" name="input-quantity" placeholder="Informe a quantidade de ações que você deseja vender" />
        </label>
      </div>
    </div>
  );
}

export default Trade;

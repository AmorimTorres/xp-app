import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MarketShares() {
  const getShares = useSelector(({ sharesData }) => sharesData.shares);

  return (
    <div>
      <h1> Disponíveis para Comprar </h1>
      <table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Quantidade</th>
            <th>Valor R$</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          {getShares
            && getShares.map((item) => (
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
                <td>
                  <Link to={`/trade/${item.ticker}`}>
                    <button type="button">Compra</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketShares;

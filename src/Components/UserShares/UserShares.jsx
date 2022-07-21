import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as C from './styles';

function UserShares() {
  const getUserShares = useSelector(({ user }) => user.shares);
  return (
    <C.Container>
      <h1> Minhas ações </h1>
      <C.Table>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Quantidade</th>
            <th>Valor R$</th>
            <th>Negociar</th>
          </tr>
        </thead>
        <tbody>
          {getUserShares
            && getUserShares.map((item) => (
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
                <td>
                  <Link to={`/trade/${item.ticker}`}>
                    <button type="button" className="sell-buy-button">C</button>
                    <button type="button" className="sell-buy-button">V</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </C.Table>
    </C.Container>
  );
}

export default UserShares;

import React from 'react';
import { useSelector } from 'react-redux';

function UserShares() {
  const getShares = useSelector(({ stock }) => stock.shares);

  return (
    <div>
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
          {getShares &&
            getShares.map((item) => (
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
                  <button type="button" disabled>
                    Compra
                  </button>
                  <button type="button" disabled>
                    Venda
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserShares;

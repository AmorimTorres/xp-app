import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MarketShares from '../../Components/StockMarket/StockMarket';
import UserShares from '../../Components/UserShares';
import * as C from './styles';

function Shares() {
  return (
    <C.Container>
      <C.Content>
        <Header />
        <UserShares />
        <MarketShares />
        <NavLink to="/conta">
          <button className="account-button" type="button" aria-label="go-to-account-button">
            Depósito/Retirada
          </button>
        </NavLink>
      </C.Content>
    </C.Container>
  );
}

export default Shares;

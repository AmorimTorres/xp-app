import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Components/Header/Header';
import MarketShares from '../Components/MarketShares';
import UserShares from '../Components/UserShares';

function Shares() {
  return (
    <div>
      <Header />
      <UserShares />
      <MarketShares />
      <NavLink to="/conta">
        <button type="button" aria-label="go-to-account-button">
          Depósito/Retirada
        </button>
      </NavLink>
    </div>
  );
}

export default Shares;

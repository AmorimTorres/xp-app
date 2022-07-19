import React from 'react';
import Header from '../Components/Header/Header';
import MarketShares from '../Components/MarketShares';
import UserShares from '../Components/UserShares';

function Shares() {
  return (
    <div>
      <Header />
      <UserShares />
      <MarketShares />
    </div>
  );
}

export default Shares;

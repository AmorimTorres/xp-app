import React from 'react';
import Header from '../../Components/Header/Header';
import MarketShares from '../../Components/StockMarket/StockMarket';
import UserShares from '../../Components/UserShares/UserShares';
import * as C from './styles';

function Shares() {
  return (
    <C.Container>
      <C.Content>
        <Header />
        <UserShares />
        <MarketShares />
      </C.Content>
    </C.Container>
  );
}

export default Shares;

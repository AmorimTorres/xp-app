import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Account from './Pages/Account/Account';
import Login from './Pages/Login/Login';
import Shares from './Pages/Shares/Shares';
import Trade from './Pages/Trade/Trade';

import GlobalStyles from './Assets/Styles/global';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/conta" element={<Account />} />
        <Route path="/investimentos" element={<Shares />} />
        <Route path="/trade/:share" element={<Trade />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;

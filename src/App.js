import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Shares from './Pages/Shares';
import Trade from './Pages/Trade';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/conta" element={<Account />} />
        <Route path="/investimentos" element={<Shares />} />
        <Route path="/trade/:share" element={<Trade />} />
      </Routes>
    </Router>
  );
}

export default App;

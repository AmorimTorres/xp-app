import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/conta" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;

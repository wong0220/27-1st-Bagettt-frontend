import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import ListPage from './pages/ListPage/ListPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/list-page" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

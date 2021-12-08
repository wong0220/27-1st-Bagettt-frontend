import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Createid from './pages/Createid/Createid';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ListPage from './pages/ListPage/ListPage';
import Order from './pages/Order/Order';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createid" element={<Createid />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

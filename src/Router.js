import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Createid from './pages/Createid/Createid';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ListPage from './pages/ListPage/ListPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createid" element={<Createid />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/list-page" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

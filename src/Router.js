import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ListPage from './pages/ListPage/ListPage';
import Order from './pages/Order/Order';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route
          path="/list-page/product-detail/:id"
          element={<ProductDetail />}
        />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

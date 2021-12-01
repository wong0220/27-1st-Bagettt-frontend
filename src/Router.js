import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

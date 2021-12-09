import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Createid from './pages/Createid/Createid';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ListPage from './pages/ListPage/ListPage';
import Order from './pages/Order/Order';
import Main from './pages/Main/Main';
import Footer from './Components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createid" element={<Createid />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/list-page" element={<ListPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

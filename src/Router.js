import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import ListPage from './pages/ListPage/ListPage';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/ListPage" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

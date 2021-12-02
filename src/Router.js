import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Login/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

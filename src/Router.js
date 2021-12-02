import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Createid from './pages/Createid/Createid';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createid" element={<Createid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

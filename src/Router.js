import React from 'react';
import Login from './pages/Login/Login';
import Createid from './pages/Createid/Createid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Createid" element={<Createid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

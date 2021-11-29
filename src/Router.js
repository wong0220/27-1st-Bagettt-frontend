import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/Login">
        <Login />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default Router;

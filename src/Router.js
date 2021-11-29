import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageInWoong from './pages/inwoongKang/pageInWoong';
import PageSoYeon from './pages/soyeonWon/pageSoYeon';
import PageJaeHo from './pages/jaehoKim/pageJaeHo';

function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/page-inwoong">
        <PageInWoong />
      </Route>
      <Route path="/page-jaeho">
        <PageJaeHo />
      </Route>
      <Route path="/page-soyeon">
        <PageSoYeon />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default Router;

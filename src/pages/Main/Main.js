import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';

function Main() {
  return (
    <div>
      <Nav />
      <div className="container">메인</div>
      <Footer />
    </div>
  );
}
export default Main;

import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="navHeader">
          <div className="navPhoto">
            <img
              className="brandPhoto"
              src="image\baGETTT_logo.png"
              alt="brandPhoto"
            />
          </div>
          <div className="navList">
            <ul className="list">
              <li className="brandStory">BaGETTT Story</li>
              <li className="subScribe">SUBSCRIBE</li>
              <li className="event">EVENT</li>
              <li className="brand">BRAND</li>
              <li className="review">REVIEW</li>
              <li className="customerCenter">CUSTOMER CENTER</li>
            </ul>
          </div>
          <div className="icons">
            <i className="fas fa-search fa-2x" />
            <i className="fas fa-user fa-2x" />
            <i className="fas fa-shopping-bag fa-2x" />
          </div>
        </div>
        <div className="blindList">
          <ul className="otherList">
            <li className="history">BaGETTT's History</li>
            <li className="cheifPick">Cheif's Pick</li>
            <li className="location">BaGETTT's Location</li>
            <li className="magaZine">BaGETTT's Magazine</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

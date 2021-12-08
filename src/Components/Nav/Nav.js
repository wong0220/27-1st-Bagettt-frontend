import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="navHeader">
        <div className="navPhoto">
          <Link to="/main">
            <img
              className="brandPhoto"
              src="image\baGETTT_logo.png"
              alt="brandPhoto"
            />
          </Link>
        </div>

        <ul className="list">
          <li className="brandStory">
            <div className="story">BaGETTT Story</div>
            <div className="subMenu">
              <div className="subMenuitems">
                <ul className="otherList">
                  <li className="history">BaGETTT's History</li>
                  <li className="cheifPick">Cheif's Pick</li>
                  <li className="location">BaGETTT's Location</li>
                  <li className="magaZine">BaGETTT's Magazine</li>
                </ul>
              </div>
            </div>
          </li>
          <Link to="/list-page">
            <li className="subScribe">SUBSCRIBE</li>
          </Link>
          <li className="event">EVENT</li>
          <li className="brand">BRAND</li>
          <li className="review">REVIEW</li>
          <li className="customerCenter">CUSTOMER CENTER</li>
        </ul>
        <div className="icons">
          <i className="fas fa-search fa-lg" />
          <i className="fas fa-user fa-lg" />
          <Link to="/Cart">
            <i className="fas fa-shopping-bag fa-lg" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

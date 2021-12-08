import React, { useState } from 'react';
import Dropdown from './Dropdown';
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
              <li className="brandStory">
                <div className="story">BaGETTT Story</div>
              </li>
              <li className="subScribe">SUBSCRIBE</li>
              <li className="event">EVENT</li>
              <li className="brand">BRAND</li>
              <li className="review">REVIEW</li>
              <li className="customerCenter">CUSTOMER CENTER</li>
            </ul>
          </div>
          <div className="icons">
            <i className="fas fa-search fa-lg" />
            <i className="fas fa-user fa-lg" />
            <i className="fas fa-shopping-bag fa-lg" />
          </div>
        </div>
        <Dropdown />
      </nav>
    </div>
  );
}

export default Nav;

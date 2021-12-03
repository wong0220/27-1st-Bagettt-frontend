import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="navPhoto">
          <img
            className="brandPhoto"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDJfMTM5%2FMDAxNjA2ODk4OTQ5MDI5.Hz827ierbsGaEg2OTsbeRZyBJk_hhvZnw2ctbEbPWoQg.3pB-sXhL3i6iJDbP1gCAeqp_W2qqrMrN5t9Mdpq75eQg.JPEG.emanaya%2F8447A2E8-D307-432B-8AB9-1BFAAE4B00F9.JPG&type=sc960_832"
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
      </nav>
    </div>
  );
}

export default Nav;

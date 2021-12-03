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
            <li className="brandStory">BaGeTTT Story</li>
            <li className="event">Event</li>
            <li className="brand">입점 브랜드</li>
            <li className="subScribe">구독</li>
            <li className="review">리뷰</li>
            <li className="customerCenter">고객센터</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

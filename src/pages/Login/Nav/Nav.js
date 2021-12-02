import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div>
      <nav className="Nav">
        <div className="NavPhoto">
          <img
            className="brandphoto"
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDJfMTM5%2FMDAxNjA2ODk4OTQ5MDI5.Hz827ierbsGaEg2OTsbeRZyBJk_hhvZnw2ctbEbPWoQg.3pB-sXhL3i6iJDbP1gCAeqp_W2qqrMrN5t9Mdpq75eQg.JPEG.emanaya%2F8447A2E8-D307-432B-8AB9-1BFAAE4B00F9.JPG&type=sc960_832"
            alt="brandPhoto"
          />
        </div>
        <div className="NavList">
          <div className="Brandstory">BaGeTTT Story</div>
        </div>
        <div className="NavOtherlist">
          <ul className="otherlist">
            <li className="Event">Event</li>
            <li className="brand">입점 브랜드</li>
            <li className="subscribe">구독</li>
            <li className="Review">리뷰</li>
            <li className="CustomerCenter">고객센터</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

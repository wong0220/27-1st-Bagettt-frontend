import React from 'react';
import './UserGuide.scss';

function UserGuideTap() {
  return (
    <div className="UserGuideTap">
      <img className="logo" src="logo/baGETTT_logo00.png" alt="logo" />
      <img className="logo" src="logo/baGETTT_logo01.png" alt="logo" />
      <img className="logo" src="logo/baGETTT_logo02.png" alt="logo" />
      <img className="logo" src="logo/baGETTT_logo.png" alt="logo" />
      <img className="logo" src="logo/baGETTT_logo03.png" alt="logo" />
      <p className="contents">
        바겟트는 빵 구독 서비스를 통해 취향을 시도해보고, 탐험해 볼 수 있는
        체험기반 F&B 이커머스입니다. <br />
        직접 먹어보면서 나만의 취향을 발견해보세요!
      </p>
    </div>
  );
}

export default UserGuideTap;

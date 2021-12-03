import React from 'react';
import './BreadList.scss';

function BreadList({ bread }) {
  return (
    <li className="breadList">
      <img src={bread.src} alt="bread" className="breadImage" />
      <h5>{bread.brand}</h5>
      <div className="shortSubscribe">
        <span>단기구독 </span>
        <span>{bread.price} </span>
      </div>
      <div className="longSubscribe">
        <span>장기구독 </span>
        <span>{bread.price2} </span>
      </div>
    </li>
  );
}

export default BreadList;

import React from 'react';
import './BreadList.scss';

function BreadList({ bread }) {
  return (
    <li className="breadList">
      <img src={bread.image} alt="bread" className="breadImage" />
      <h5>{bread.name}</h5>
      <div className="shortSubscribe">
        <span>구독가 </span>
        <span>
          {Number(bread.price).toLocaleString()}원
          <span className="month">/월</span>
        </span>
      </div>
      <div className="anonymouse" />
    </li>
  );
}

export default BreadList;

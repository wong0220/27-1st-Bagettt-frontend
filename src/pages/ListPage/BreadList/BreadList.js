import React from 'react';
import { Link } from 'react-router-dom';
import './BreadList.scss';

function BreadList({ bread }) {
  return (
    <li className="breadList">
      <Link to={`/product-detail/${bread.id}`}>
        <img src={bread.image} alt="bread" className="breadImage" />{' '}
      </Link>
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

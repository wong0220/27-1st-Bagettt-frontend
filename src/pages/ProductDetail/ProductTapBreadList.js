import React from 'react';
import './ProductTapBreadList.scss';

function ProductTapBreadList({ bread }) {
  return (
    <div className="ProductTapBreadList">
      <div className="container">
        <img src={bread.src} alt="bread" className="breadImage" />
        <div className="wrapper">
          <h2 className="breadName">{bread.name}</h2>
          <p className="description">{bread.description}</p>
          <div className="brandName">{bread.brand}</div>
          <div className="calorie">{bread.calorie}</div>
          <div className="nutrition">{bread.nutrition} </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTapBreadList;

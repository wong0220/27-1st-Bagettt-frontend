import React from 'react';
import './ProductTapBreadList.scss';

function ProductTapBreadList({ detailContents }) {
  return (
    <div>
      <div className="ProductTapBreadList">
        <div className="container">
          <img src={detailContents.image} alt="bread" className="breadImage" />
          <div className="wrapper">
            <h2 className="breadName">{detailContents.bread_name}</h2>
            <p className="description">{detailContents.name}</p>
            <div className="brandName">{detailContents.name}</div>
            <div className="calorie">{detailContents.kcal}</div>
            <div className="nutrition">{detailContents.nutrition}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTapBreadList;

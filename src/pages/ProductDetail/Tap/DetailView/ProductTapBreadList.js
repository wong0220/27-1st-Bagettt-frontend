import React from 'react';
import './ProductTapBreadList.scss';

function ProductTapBreadList({ detailContents }) {
  console.log(detailContents);
  return (
    <div className="ProductTapBreadList">
      <div className="container">
        <img src={detailContents.image} alt="bread" className="breadImage" />
        <div className="breadListWrapper">
          <div className="brandName">
            <span className="brand">BRAND</span> {detailContents.brand_name}
          </div>
          <h2 className="breadName">{detailContents.name}</h2>
          <div className="kcal">
            {detailContents.kcal}
            <span>kcal</span>
          </div>
          <div className="nutrition">{detailContents.nutrition}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductTapBreadList;

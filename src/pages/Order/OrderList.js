import React from 'react';
import './OrderList.scss';

function OrderList({ packageItem }) {
  return (
    <div className="orderProductInfoWrapper">
      <div className="orderTitle">구매</div>

      <img src={packageItem.package_image} alt="상품이미지" className="image" />

      <div className="orderInfo">
        <div className="packageName">{packageItem.package_name}</div>
        <div className="option">선택 요일 : {packageItem.option}</div>
        <div className="quantity">수량 : {packageItem.quantity}</div>
      </div>

      <div className="price">
        {Number(packageItem.package_price).toLocaleString()}원
      </div>
    </div>
  );
}

export default OrderList;

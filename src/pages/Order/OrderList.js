import React from 'react';
import './OrderList.scss';

function OrderList({ orderInfo }) {
  return (
    <div className="orderProductInfoWrapper">
      <div className="orderTitle">구매</div>

      <img src={orderInfo.package_image} alt="상품이미지" className="image" />

      <div className="orderInfo">
        <div className="packageName">{orderInfo.package_name}</div>
        <div className="option">선택 요일 : {orderInfo.option}</div>
        <div className="quantity">수량 : {orderInfo.quantity}</div>
      </div>

      <div className="price">
        {Number(orderInfo.package_price).toLocaleString()}원
      </div>
    </div>
  );
}

export default OrderList;

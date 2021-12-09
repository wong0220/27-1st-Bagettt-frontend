import React from 'react';
import './OrderList.scss';

function OrderList({ orderInfo }) {
  return (
    <div className="orderListProductInfoWrapper">
      <div className="orderProductTitle">구매</div>

      <img
        src={orderInfo.package_image}
        alt="상품이미지"
        className="orderListImage"
      />

      <div className="orderListInfo">
        <div className="listPackageName">{orderInfo.package_name}</div>
        <div className="listOption">선택 요일 : {orderInfo.option}</div>
        <div className="listQuantity">수량 : {orderInfo.quantity}</div>
      </div>

      <div className="listPrice">
        {Number(orderInfo.package_price).toLocaleString()}원
      </div>
    </div>
  );
}

export default OrderList;

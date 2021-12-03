import React from 'react';
import './OrderPrice.scss';

function OrderPrice({ selectedBread }) {
  return (
    <div className="toatalContainer">
      <div>
        <button className="button">선택상품 삭제</button>
        <button className="button">전체상품 삭제</button>
      </div>
      <div className="priceWrapper">
        <div className="priceBox">
          <div>총 주문금액</div>
          <div className="price">{selectedBread[0].order_price}</div>
        </div>
        <span>+</span>
        <div className="priceBox">
          <div>배송비</div>
          <div className="price">{selectedBread[0].delivery_price}</div>
        </div>
        <span>+</span>
        <div className="priceBox">
          <div>총 결제금액</div>
          <div className="price">{selectedBread[0].order_price}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderPrice;

import React from 'react';
import './OrderPrice.scss';

function OrderPrice({ price, deleteSelected, deleteAll }) {
  const temp = Object.values(price);
  let result = 0;
  temp.forEach(el => (result += el));

  return (
    <div className="toatalContainer">
      <div>
        <button className="button" onClick={deleteSelected}>
          선택상품 삭제
        </button>
        <button className="button" onClick={deleteAll}>
          전체상품 삭제
        </button>
      </div>
      <div className="priceWrapper">
        <div className="priceBox">
          <div>총 주문금액</div>
          <div className="price">{result.toLocaleString()}원</div>
        </div>
        <span>+</span>
        <div className="priceBox">
          <div>배송비</div>
          <div className="price">무료</div>
        </div>
        <span>+</span>
        <div className="priceBox">
          <div>총 결제금액</div>
          <div className="price">{result.toLocaleString()}원</div>
        </div>
      </div>
    </div>
  );
}

export default OrderPrice;

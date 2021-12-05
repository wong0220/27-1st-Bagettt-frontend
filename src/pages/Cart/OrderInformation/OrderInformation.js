import React from 'react';
import './OrderInformation.scss';

function OrderInformation({ changeAllBox, checkList, numberOfBread }) {
  return (
    <div className="orderInformation">
      <input
        type="checkbox"
        onChange={event => changeAllBox(event.target.checked)}
        checked={checkList.length === numberOfBread ? true : false}
      />
      <h5>주문유형</h5>
      <h5>상품정보</h5>
      <h5>수량</h5>
      <h5>주문금액</h5>
      <h5>배송비</h5>
      <h5>결제금액</h5>
      <div />
    </div>
  );
}

export default OrderInformation;

import React, { useState } from 'react';
import './OrderProducts.scss';

function OrderProducts({ selectedBread, changeSingleBox, data, checkList }) {
  const [quantity, setQuantity] = useState(selectedBread.number);
  const perPrice = parseInt(selectedBread.order_price) / selectedBread.number;
  function quantityPlus() {
    setQuantity(quantity + 1);
  }
  function quantityMinus() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert('최소 1개 이상 주문이 가능합니다');
    }
  }

  return (
    <div className="orderProductList">
      <input
        type="checkbox"
        onChange={event => changeSingleBox(event.target.checked, data.id)}
        checked={checkList.includes(data.id) ? true : false}
      />
      <h5>{selectedBread.order_type}</h5>
      <div className="imageWrapper">
        <img src={selectedBread.src} alt="bread" className="breadImage" />
        <div className="optionWrapper">
          <span className="dayOption">{selectedBread.option}</span>
          <button className="changeOption">옵션변경</button>
        </div>
      </div>
      <div className="quantityWrapper">
        <button className="quantityButton" onClick={quantityMinus}>
          -
        </button>
        <h5>{quantity}</h5>
        <button className="quantityButton" onClick={quantityPlus}>
          +
        </button>
      </div>
      <h5>{perPrice * quantity}원</h5>
      <h5>{selectedBread.delivery_price}</h5>
      <h5>{perPrice * quantity}원</h5>
      <div className="buttonWrapper">
        <button className="button">결제하기</button>
        <button className="button">삭제</button>
      </div>
    </div>
  );
}

export default OrderProducts;

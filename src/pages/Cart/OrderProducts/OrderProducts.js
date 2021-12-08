import React, { useState } from 'react';
import './OrderProducts.scss';

function OrderProducts({
  selectedBread,
  changeSingleBox,
  data,
  checkList,
  setPriceList,
  deletePer,
  orderPerProduct,
}) {
  const [quantities, setQuantities] = useState(selectedBread.quantity);
  const perPrice = parseInt(selectedBread.price) / selectedBread.quantity;
  const price = perPrice * quantities;

  function quantityPlus() {
    setQuantities(quantities + 1);
    setPriceList(perPrice * (quantities + 1), data.id);
    fetch('http://10.58.5.9:8000/shops/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        id: data.id,
        quantity: quantities + 1,
      }),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.MJCyB6QeWaaR8qr997n6l6g-zG_pYoxcJtxi3ev7ZNM',
      },
    });
  }
  function quantityMinus() {
    if (quantities > 1) {
      setQuantities(quantities - 1);
      setPriceList(perPrice * (quantities - 1), data.id);
    } else {
      alert('최소 1개 이상 주문이 가능합니다');
    }
    fetch('http://10.58.5.9:8000/shops/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        id: data.id,
        quantity: quantities - 1,
      }),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.MJCyB6QeWaaR8qr997n6l6g-zG_pYoxcJtxi3ev7ZNM',
      },
    });
  }

  return (
    <div className="orderProductList">
      <input
        type="checkbox"
        onChange={event =>
          changeSingleBox(event.target.checked, data.id, price)
        }
        checked={checkList.includes(data.id) ? true : false}
      />
      <h5>{selectedBread.order_type}</h5>
      <div className="imageWrapper">
        <img src={selectedBread.image} alt="bread" className="breadImage" />
        <div className="optionWrapper">
          <div className="packageName">{selectedBread.name}</div>
          <span className="dayOption">
            <div>{selectedBread.option}요일</div>
          </span>
          <button className="changeOption">옵션변경</button>
        </div>
      </div>
      <div className="quantityWrapper">
        <button className="quantityButton" onClick={quantityMinus}>
          -
        </button>
        <h5>{quantities}</h5>
        <button className="quantityButton" onClick={quantityPlus}>
          +
        </button>
      </div>
      <h5>{price.toLocaleString()}원</h5>
      <h5>{selectedBread.delivery_price}</h5>
      <h5>{price.toLocaleString()}원</h5>
      <div className="buttonWrapper">
        <button className="button" onClick={() => orderPerProduct(data.id)}>
          결제하기
        </button>
        <button className="button" onClick={() => deletePer(data.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default OrderProducts;

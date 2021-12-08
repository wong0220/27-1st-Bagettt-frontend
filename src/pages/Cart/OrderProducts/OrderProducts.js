import React, { useState } from 'react';
import './OrderProducts.scss';

function OrderProducts({
  selectedBread,
  changeSingleBox,
  data,
  checkList,
  setPriceList,
  deletePer,
}) {
  const [quantities, setQuantities] = useState(selectedBread.quantity);
  const perPrice = parseInt(selectedBread.price) / selectedBread.quantity;
  const price = perPrice * quantities;
  let day = '';

  function quantityPlus() {
    setQuantities(quantities + 1);
    setPriceList(perPrice * (quantities + 1), data.id);
    fetch('http://10.58.0.72:8000/shops/cart', {
      method: 'PATCH',
      body: JSON.stringify({
        cart_id: data.id,
        quantity: quantities + 1,
      }),
      headers: {
        Authorization: '',
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
  }

  if (selectedBread.option === 1) {
    day = '월요일';
  } else if (selectedBread.option === 2) {
    day = '화요일';
  } else if (selectedBread.option === 3) {
    day = '수요일';
  } else if (selectedBread.option === 4) {
    day = '목요일';
  } else {
    day = '금요일';
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
          <span className="dayOption">
            <div>{day}</div>
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
        <button className="button">결제하기</button>
        <button className="button" onClick={() => deletePer(data.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default OrderProducts;

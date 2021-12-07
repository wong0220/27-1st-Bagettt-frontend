import React, { useState } from 'react';
import Counter from './Counter/Counter';
import SubscriptionModal from '../Modal/SubscriptionModal';
import './ProductContentInfo.scss';

function ProductContentInfo({ detailContents }) {
  const [number, setNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [shoppingOption, setShoppingOption] = useState('');

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleSubscribe = () => {
    fetch('http://10.58.0.72:8000/shops/cart', {
      method: 'POST',
      body: JSON.stringify({
        quantity: number,
        price: parseFloat(detailContents.price * number).toFixed(2),
        package_id: detailContents.package_id,
        shipping_option: shoppingOption,
      }),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.MJCyB6QeWaaR8qr997n6l6g-zG_pYoxcJtxi3ev7ZNM',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE = 'SUCCESS'
          ? setShowModal(true)
          : alert('장바구니 담기 실패');
      });
  };
  return (
    <div>
      <div className="productContentInfoWrapper">
        <div className="cartPutWrapper">
          <div className="productName">{detailContents.package_name}</div>
          <div className="productInfo">
            {detailContents.packgae_description}
          </div>
          <div className="productPriceWrapper">
            <div className="productPriceText">구독가</div>
            <div className="productPrice">
              월 {Number(detailContents.price).toLocaleString()}
            </div>
          </div>
          <div className="shippingWrapper">
            <div className="shippingText">배송비</div>
            <div className="shippingPrice">무료배송</div>
          </div>
          <div className="dayOption">
            <div>수령요일 선택</div>
            <select
              className="selectBox"
              onChange={e => {
                setShoppingOption(e.target.value);
              }}
            >
              <option value="월" key="mon">
                월요일
              </option>
              <option value="화" key="tue">
                화요일
              </option>
              <option value="수" key="wed">
                수요일
              </option>
              <option value="목" key="thu">
                목요일
              </option>
              <option value="금" key="fri">
                금요일
              </option>
            </select>
          </div>
          <div className="orderWrapper">
            <div className="orderNow">ORDER NOW</div>
            <div className="productCountWrapper">
              <Counter
                increaseNumber={increaseNumber}
                decreaseNumber={decreaseNumber}
                number={number}
              />
            </div>

            <div className="orderCountWrapper">
              <div className="orderCountText">주문수량</div>
              <div className="orderCount">{number}개</div>
            </div>

            <div className="orderPriceWrapper">
              <div className="orderPriceText">총 상품 금액</div>
              <div className="orderPrice">
                {Number(detailContents.price * number).toLocaleString()}원
              </div>
            </div>
            <button
              onClick={handleSubscribe}
              type="button"
              className="subscriptionBtn"
            >
              구독 하기
            </button>

            {showModal ? <SubscriptionModal /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContentInfo;

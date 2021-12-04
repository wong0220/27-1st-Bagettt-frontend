import React, { useState, useEffect } from 'react';
import Counter from './Counter/Counter';
import SubscriptionModal from '../Modal/SubscriptionModal';
import './ProductContentInfo.scss';

function ProductContentInfo() {
  const [number, setNumber] = useState(1);
  const [breadList, setBreadList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    fetch('/data/ProductDetailBreadData.json')
      .then(res => res.json())
      .then(json => {
        setBreadList(json);
      });
  }, []);

  return (
    <div>
      {breadList.length && (
        <div className="productContentInfoWrapper">
          <div className="cartPutWrapper">
            <div className="productName">{breadList[0].name}</div>
            <div className="productInfo">{breadList[0].brand}</div>
            <div className="productPriceWrapper">
              <div className="productPriceText">구독가</div>
              <div className="productPrice">
                월 {Number(breadList[0].price).toLocaleString()}
              </div>
            </div>
            <div className="shippingWrapper">
              <div className="shippingText">배송비</div>
              <div className="shippingPrice">무료배송</div>
            </div>
            <div className="dayOption">
              <div>수령요일 선택</div>
              <select className="selectBox">
                <option key="mon" value="banana">
                  월요일
                </option>
                <option key="tue" value="apple">
                  화요일
                </option>
                <option key="wed" value="orange">
                  수요일
                </option>
                <option key="thu" value="orange">
                  목요일
                </option>
                <option key="fri" value="orange">
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
                  {Number(breadList[0].price * number).toLocaleString()}원
                </div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="subscriptionBtn"
              >
                구독 하기
              </button>

              {showModal ? <SubscriptionModal /> : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductContentInfo;

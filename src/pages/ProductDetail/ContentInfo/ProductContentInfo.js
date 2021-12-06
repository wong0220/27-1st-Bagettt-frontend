import React, { useState } from 'react';
import Counter from './Counter/Counter';
import SubscriptionModal from '../Modal/SubscriptionModal';
import './ProductContentInfo.scss';

function ProductContentInfo({ detailContents }) {
  const [number, setNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  console.log(detailContents);

  return (
    <div>
      {detailContents && (
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
              <select className="selectBox">
                <option value="1" key="mon">
                  월요일
                </option>
                <option value="2" key="tue">
                  화요일
                </option>
                <option value="3" key="wed">
                  수요일
                </option>
                <option value="4" key="thu">
                  목요일
                </option>
                <option value="5" key="fri">
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

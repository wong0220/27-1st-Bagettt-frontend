import React, { useState } from 'react';
import DeliveryData from './DeliveryData';
import DELIVERY_DATA from './deliveryTapData';
import './ProductTap.scss';

function ProductTap() {
  const [isOpen, setIsOpen] = useState(1);

  function tapInfo() {
    setIsOpen(1);
  }

  function tapReview() {
    setIsOpen(2);
  }

  function tapDelivery() {
    setIsOpen(3);
  }

  function tapUserGuide() {
    setIsOpen(4);
  }

  function tapOpen() {
    if (isOpen === 1) {
      return <div>상품 정보 내용</div>;
    } else if (isOpen === 2) {
      return <div>리뷰 내용</div>;
    } else if (isOpen === 3) {
      return (
        <div>
          {DELIVERY_DATA.map(deliveryData => {
            return (
              <DeliveryData
                key={deliveryData.id}
                title={deliveryData.title}
                content={deliveryData.content}
              />
            );
          })}
        </div>
      );
    } else if (isOpen === 4) {
      return <div>이용 안내</div>;
    }
  }

  return (
    <div>
      <ul className="productTab">
        <li className="information tabList">
          <div onClick={tapInfo}>상품정보</div>
        </li>
        <li className="review tabList">
          <div onClick={tapReview}>리뷰</div>
        </li>
        <li className="delivery tabList">
          <div onClick={tapDelivery}>배송정보</div>
        </li>
        <li className="userGuide tabList">
          <div onClick={tapUserGuide}>이용안내</div>
        </li>
      </ul>
      {tapOpen()}
    </div>
  );
}

export default ProductTap;

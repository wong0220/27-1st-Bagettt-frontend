import React, { useState } from 'react';
import ProductInfoTap from './ProductInfoTap';
import ShippingInfoTap from './ShippingInfoTap';
import UserGuideTap from './UserGuideTap';
import './ProductTap.scss';

function ProductTap() {
  const [isOpen, setIsOpen] = useState('1');

  function tapProductInfo(e) {
    setIsOpen(e.target.id);
  }

  function tapOpen() {
    if (isOpen === '1') {
      return <ProductInfoTap />;
    } else if (isOpen === '2') {
      return <ShippingInfoTap />;
    } else if (isOpen === '3') {
      return <UserGuideTap />;
    }
  }

  return (
    <div>
      <ul className="productTab">
        <li className="productInfo tabList">
          <div onClick={tapProductInfo} id="1">
            상품정보
          </div>
        </li>
        <li className="shippingInfo tabList">
          <div onClick={tapProductInfo} id="2">
            배송정보
          </div>
        </li>
        <li className="userGuide tabList">
          <div onClick={tapProductInfo} id="3">
            이용안내
          </div>
        </li>
      </ul>
      {tapOpen()}
    </div>
  );
}

export default ProductTap;

import React, { useState } from 'react';
import ProductInfoTap from './ProductInfoTap';
import ShippingInfoTap from './ShippingInfoTap';
import UserGuideTap from './UserGuideTap';
import './ProductTap.scss';

function ProductTap() {
  const [tapOpen, setTapOpen] = useState('1');

  function tapProductInfo(e) {
    setTapOpen(e.target.id);
  }

  function productTapOpen() {
    if (tapOpen === '1') {
      return <ProductInfoTap />;
    } else if (tapOpen === '2') {
      return <ShippingInfoTap />;
    } else if (tapOpen === '3') {
      return <UserGuideTap />;
    }
  }
  return (
    <div>
      <ul className="productTab">
        <li className="productInfo tabList">
          <div
            className={tapOpen === '1' ? 'tabBorder' : 'tabBorderDisabled'}
            onClick={tapProductInfo}
            id="1"
          >
            상품정보
          </div>
        </li>
        <li className="shippingInfo tabList">
          <div
            className={tapOpen === '2' ? 'tabBorder' : 'tabBorderDisabled'}
            onClick={tapProductInfo}
            id="2"
          >
            배송정보
          </div>
        </li>
        <li className="userGuide tabList">
          <div
            className={tapOpen === '3' ? 'tabBorder' : 'tabBorderDisabled'}
            onClick={tapProductInfo}
            id="3"
          >
            이용안내
          </div>
        </li>
      </ul>
      {productTapOpen()}
    </div>
  );
}

export default ProductTap;

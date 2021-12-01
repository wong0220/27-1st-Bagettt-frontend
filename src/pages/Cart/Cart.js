import React from 'react';
import './Cart.scss';

function Cart() {
  return (
    <div className="Cart">
      <div>
        <span className="homeRoot">HOME</span>
        <span className="homeRoot">></span>
        <span className="shoppingRoot">SHOPPING BAG</span>
      </div>

      <div class="shoppingBag">
        <h1 className="title">SHOPPING BAG</h1>
        <h2 className="title productTitle">쇼핑백 상품</h2>
      </div>
    </div>
  );
}

export default Cart;

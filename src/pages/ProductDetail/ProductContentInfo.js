import React from 'react';
import './ProductContentInfo.scss';

function ProductContentInfo() {
  return (
    <div className="productContentInfoWrapper">
      <div className="cartPutWrapper">
        <div className="productName">EASTERN EDITION</div>
        <div className="productInfo">[EEF] 2-WAY 사이드 테이블</div>
        <div className="productPriceWrapper">
          <div className="productPriceText">구독가</div>
          <div className="productPrice">월 65,000원</div>
        </div>
        <div className="shippingWrapper">
          <div className="shippingText">배송비</div>
          <div className="shippingPrice">
            3,000원 (30,000원 이상 구매 시 무료)
          </div>
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
            ₩
            <option key="fri" value="orange">
              금요일
            </option>
            <option key="sat" value="orange">
              토요일
            </option>
            <option key="sun" value="orange">
              일요일
            </option>
          </select>
        </div>
        <div className="orderWrapper">
          <div className="orderNow">ORDER NOW</div>
          <div className="productCountWrapper">
            <button type="button" className="btnDown" title="감소" value="">
              -
            </button>
            <input type="number" className="productCountInput" />
            <button type="button" className="btnUp" title="증가" value="">
              +
            </button>
          </div>

          <div className="orderCountWrapper">
            <div className="orderCountText">주문수량</div>
            <div className="orderCount">2개</div>
          </div>

          <div className="orderPriceWrapper">
            <div className="orderPriceText">총 상품 금액</div>
            <div className="orderPrice">130,000원</div>
          </div>
          <button type="button" className="btnOrder">
            ORDER NOW
          </button>
          <button type="button" className="btnShoppingBag">
            SHOPPING BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductContentInfo;

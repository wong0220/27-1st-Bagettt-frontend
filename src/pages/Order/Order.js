import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import OrderList from './OrderList';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './Order.scss';

function Order() {
  const location = useLocation();

  const { result } = location.state;
  const packageItem = location.state.result.package;

  console.log(location);
  return (
    <div>
      <Nav />
      <div className="Order">
        <div className="orderTitleWrapper">
          <div className="orderTitle">ORDER COMPLETED</div>
          <ul className="orderTitleLine">
            <li className="orderTitleLineText titleGray">
              쇼핑백&nbsp;&gt;&nbsp;
            </li>
            <li className="orderTitleLineText titleGray">
              주문하기&nbsp;&gt;&nbsp;
            </li>
            <li className="orderTitleLineText orderTitleorderEnd">주문완료</li>
          </ul>
        </div>

        <div className="orderWrapper">
          <div className="orderContaier">
            <h2 className="orderText">
              {result.user_name}님의 주문이
              <br /> 정상적으로 접수 되었습니다.
            </h2>
            <div className="orderInfoWrapper">
              <div className="orderInfoContainer">
                <div className="orderInfoTitle">주문번호</div>
                <div className="orderInfoContents">{result.order_number}</div>
              </div>
              <div className="orderInfoContainer">
                <div className="orderInfoTitle">주문일자</div>
                <div className="orderInfoContents">{result.date}</div>
              </div>
              <div className="orderInfoContainer">
                <div className="orderInfoTitle">휴대폰번호</div>
                <div className="orderInfoContents">{result.phone_number}</div>
              </div>
              <div className="orderInfoContainer">
                <div className="orderInfoTitle">이메일</div>
                <div className="orderInfoContents">{result.email}</div>
              </div>
            </div>

            <div className="orderListWrapper">
              <h3 className="orderListTitle">주문상품</h3>
              <div className="orderContainer">
                <div className="orderTypeTitle">
                  <div className="orderTypeText">주문유형</div>
                  <div className="orderProductInfo">상품정보</div>
                  <div className="orderProductPrice">주문금액</div>
                </div>

                {packageItem.map((product, idx) => {
                  return <OrderList key={idx} orderInfo={product} />;
                })}
              </div>
            </div>

            <div className="shippingInfoWrapper">
              <div className="shippingTitle">배송지 정보</div>
              <div className="shippingInfo">
                <div className="shippingUserInfo">
                  <div className="orderInfoTitle">수령인</div>
                  <div className="orderInfoContents">{result.user_name}</div>
                </div>
                <div className="shippingUserInfo">
                  <div className="orderInfoTitle">연락처</div>
                  <div className="orderInfoContents">{result.phone_number}</div>
                </div>
                <div className="shippingUserInfo">
                  <div className="orderInfoTitle">주소</div>
                  <div className="orderInfoContents">{result.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="orderAside">
            <div className="orderTotalPrice">
              <div className="orderTotalPriceTitle">최종결제금액</div>
              <div className="orderTotalPrice">
                {Number(result.total_price).toLocaleString()}원
              </div>
            </div>

            <div className="orderPriceWrapper">
              <div className="orderShippingContainer">
                <div className="shippingTitleText">주문상품금액</div>
                <div>{Number(result.total_price).toLocaleString()}원</div>
              </div>
              <div className="orderShippingContainer">
                <div className="shippingTitleText">배송비</div>
                <div>무료</div>
              </div>
            </div>
            <Link to="/list-page">
              <button className="shippingBtn">쇼핑 계속하기</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Order;

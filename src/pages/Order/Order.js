import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';

function Order() {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(result => {
        setOrderInfo(result);
      });
  }, []);

  console.log(orderInfo);

  return (
    <div>
      {orderInfo.length && (
        <div className="Order">
          <div className="titleWrapper">
            <div className="title">ORDER COMPLETED</div>
            <ul className="titleLine">
              <li className="titleCart titleGray">쇼핑백&nbsp;&gt;&nbsp;</li>
              <li className="titleorder titleGray">주문하기&nbsp;&gt;&nbsp;</li>
              <li className="titleorderEnd">주문완료</li>
            </ul>
          </div>

          <div className="orderWrapper">
            <div className="orderContaier">
              <h2 className="orderText">
                {orderInfo[0].user_name}님의 주문이
                <br /> 정상적으로 접수 되었습니다.
              </h2>
              <div className="orderInfoWrapper">
                <div className="container">
                  <div className="infoTitle">주문번호</div>
                  <div className="infoContents">
                    {orderInfo[0].order_number}
                  </div>
                </div>
                <div className="container">
                  <div className="infoTitle">주문일자</div>
                  <div className="infoContents">{orderInfo[0].date}</div>
                </div>
                <div className="container">
                  <div className="infoTitle">휴대폰번호</div>
                  <div className="infoContents">
                    {orderInfo[0].phone_number}
                  </div>
                </div>
                <div className="container">
                  <div className="infoTitle">이메일</div>
                  <div className="infoContents">{orderInfo[0].email}</div>
                </div>
              </div>

              <div className="orderListWrapper">
                <h3 className="title">주문상품</h3>
                <div className="container">
                  <div className="typeTitle">
                    <div className="type">주문유형</div>
                    <div className="productInfo">상품정보</div>
                    <div className="price">주문금액</div>
                  </div>

                  <div className="orderProductInfoWrapper">
                    <div className="title">구매</div>

                    <img
                      src={orderInfo[0].package[0].package_image}
                      alt="상품이미지"
                      className="image"
                    />

                    <div className="orderInfo">
                      <div className="packageName">
                        {orderInfo[0].package[0].package_name}
                      </div>
                      <div className="option">
                        선택 요일 : {orderInfo[0].option}
                      </div>
                      <div className="quantity">
                        수량 : {orderInfo[0].package[0].quantity}
                      </div>
                    </div>

                    <div className="price">
                      {orderInfo[0].package[0].package_price}원
                    </div>
                  </div>
                </div>
              </div>

              <div className="shippingInfoWrapper">
                <div className="title">배송지 정보</div>
                <div className="shippingInfo">
                  <div className="userInfo">
                    <div className="infoTitle">수령인</div>
                    <div className="infoContents">{orderInfo[0].user_name}</div>
                  </div>
                  <div className="userInfo">
                    <div className="infoTitle">연락처</div>
                    <div className="infoContents">
                      {orderInfo[0].phone_number}
                    </div>
                  </div>
                  <div className="userInfo">
                    <div className="infoTitle">주소</div>
                    <div className="infoContents">{orderInfo[0].address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="orderAside">
              <div className="orderTotalPrice">
                <div className="totalPriceTitle">최종결제금액</div>
                <div className="totalPrice">
                  {orderInfo[0].package[0].package_price}원
                </div>
              </div>

              <div className="orderPriceWrapper">
                <div className="container">
                  <div className="title">주문상품금액</div>
                  <div>{orderInfo[0].package[0].package_price}원</div>
                </div>
                <div className="container">
                  <div className="title">배송비</div>
                  <div>무료</div>
                </div>
              </div>
              <Link to="/list-page">
                <button className="shippngBtn">쇼핑 계속하기</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;

import React from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';

function Order() {
  // const [orderInfo, setOrderInfo] = useState({});

  // useEffect(() => {
  //   fetch()
  //     .then(res => res.json())
  //     .then(result => {
  //       setOrderInfo(result);
  //     });
  // }, []);

  return (
    //조건부렌더링 !!
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
            이름님의 주문이
            <br /> 정상적으로 접수 되었습니다.
          </h2>
          <div className="orderInfoWrapper">
            <div className="container">
              <div className="infoTitle">주문번호</div>
              <div className="infoContents">12345678912346</div>
            </div>
            <div className="container">
              <div className="infoTitle">주문일자</div>
              <div className="infoContents">2021/12/07/= 15:12:56</div>
            </div>
            <div className="container">
              <div className="infoTitle">휴대폰번호</div>
              <div className="infoContents">010-0000-0000</div>
            </div>
            <div className="container">
              <div className="infoTitle">이메일</div>
              <div className="infoContents">abc@naver.com</div>
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
                <div className="image" />

                <div className="orderInfo">
                  <div className="packageName">상품명</div>
                  <div className="option">선택 요일 : 월요일</div>
                  <div className="quantity">수량 : 1</div>
                </div>

                <div className="price">24,500원</div>
              </div>
            </div>
          </div>

          <div className="shippingInfoWrapper">
            <div className="title">배송지 정보</div>
            <div className="shippingInfo">
              <div className="userInfo">
                <div className="infoTitle">수령인</div>
                <div className="infoContents">이름</div>
              </div>
              <div className="userInfo">
                <div className="infoTitle">연락처</div>
                <div className="infoContents">010-000-0000</div>
              </div>
              <div className="userInfo">
                <div className="infoTitle">주소</div>
                <div className="infoContents">서울특별시 강남구</div>
              </div>
            </div>
          </div>
        </div>

        <div className="orderAside">
          <div className="orderTotalPrice">
            <div className="totalPriceTitle">최종결제금액</div>
            <div className="totalPrice">24,500원</div>
          </div>

          <div className="orderPriceWrapper">
            <div className="container">
              <div className="title">주문상품금액</div>
              <div>24,500원</div>
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
  );
}

export default Order;

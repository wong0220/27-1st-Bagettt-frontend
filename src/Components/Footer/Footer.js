import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="getttCenter">
          <h className="customerCenter">바겟트 고객센터 555-5000</h>
          <p className="centerTime">
            10:00 ~ 17:00 (점심시간 12:00 ~ 13:00 주말, 공휴일 제외)
          </p>
        </div>
        <div className="informationAboutBageTTT">
          <ul className="bagetttInfo">
            <li className="bagetttinformation">ABOUT BAGETTT</li>
            <li className="bagetttinformation">인스타그램</li>
            <li className="bagetttinformation">입점/제휴문의</li>
            <li className="bagetttinformation">개인정보처리방침</li>
            <li className="bagetttinformation">고객센터</li>
            <li className="bagetttinformation">이용약관</li>
          </ul>
          <ul className="bagetttCompanyInfo">
            <li className="companyInfo">회사명 : (주)제일기획</li>
            <li className="companyInfo">대표이사 : 유정근</li>
            <li className="companyInfo">
              주소 : (주) 코드기획 : 서울특별시 행복구 이태원로 212(프리덤)
            </li>
            <li className="companyInfo">대표번호 : 1550-5000</li>
          </ul>
          <ul className="companyDetailinfo">
            <span className="orderSalesreport">
              통신판매업신고 : 제 2019-서울울산-0041
            </span>
            <span className="orderSalesreport">
              사업자등록번호 : 202-99-21550
            </span>
            <span className="orderSalesreport">
              개인정보관리책임자 : 황성재
            </span>
            <span className="companyemail">Email : KimjaeHogu@Bagettt.com</span>
          </ul>
          <ul className="companyDomain">
            <p className="domain">
              COPYRIGHT 2021 BAGETTT.ALL RIGHTS RESERVED,
              <span className="host"> HOSTING BY SOYEON WON</span>
            </p>
          </ul>
        </div>
      </div>
      <div className="footerRight">
        <div className="rightMenu">
          <h className="service">구매안전서비스</h>
          <p className="explainService">
            결제대금예치 고객님은 안전거래를 위해 현금으로 결제시 금액에
            관계없이 구매안전서비스를 이용하실 수 있습니다. <br />
            서비스 제공자 : KG 헤네시스 서비스 등록번호 : A055-1911115-113 호
          </p>
          <button className="searchServicebutton">가입여부 조회하기</button>
          <ul className="rightDownMenu">
            <h className="letKnow">통신판매 의무안내</h>
            <p className="letToKnowCustomer">
              바겟트는 통신판매중계자이며, 통신판매의 당사자가 아닙니다.
              판매자가 겟트에 등록한 상품의 주문, 배송 및 환불등에 대한 의무와
              책임은 각 판매자에게 있으며 바겟트는 이에대한 책임을 지지
              않습니다.단 바겟트 관리 구독상품은 그렇지 않습니다.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;

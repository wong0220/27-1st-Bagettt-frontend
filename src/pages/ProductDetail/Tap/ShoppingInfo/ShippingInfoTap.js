import React from 'react';
import './ShippingInfoTap.scss';

function ShippingInfoTap() {
  return (
    <div className="ShippingInfoTap">
      <div className="shippingInfoTitle">기본 배송정보</div>
      <ul className="contentsWrapper">
        <li>
          ㆍ구독 시 10만원 이상은 배송비가 무료입니다. (일부 제품 제외 / 각 상품
          요약 정보 원칙이 우선 적용됨)
        </li>
        <li>ㆍ전국 배송 (단, 구독은 제주도 및 도서 산간지역 서비스 미시행)</li>
        <li>
          ㆍ제주도를 포함한 도서산간지역 배송의 경우 별도의 배송비가 추가될 수
          있습니다.
        </li>
        <li>
          ㆍ브랜드에 따라 배송비 정책이 상이할 수 있습니다. (제품 상세페이지
          브랜드 배송 안내 참조)
        </li>
      </ul>
    </div>
  );
}

export default ShippingInfoTap;

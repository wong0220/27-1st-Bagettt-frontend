import React from 'react';
import './BrandSort.scss';
import BrandName from './BrandName/BrandName';

function BrandSort({ openBrands, isOpenBrands, selectBrand }) {
  return (
    <div className="brandSort">
      <div className="brandFilter" onClick={openBrands}>
        브랜드별 정렬순
      </div>

      {isOpenBrands && (
        <>
          <BrandName
            name="오월의 종"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="밀도"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="아티장베이커스"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="코끼리 베이글"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="아우어"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="류재은 베이커리"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="성심당"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="파티쉐리 곽"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="외계인 방앗간"
            cssName="brandName"
            selectBrand={selectBrand}
          />
          <BrandName
            name="블랑제리아띠랑"
            cssName="lastName"
            selectBrand={selectBrand}
          />
        </>
      )}
    </div>
  );
}

export default BrandSort;

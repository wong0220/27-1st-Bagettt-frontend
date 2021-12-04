import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTap from './Tap/ProductTap';
import ProductContentInfo from './ContentInfo/ProductContentInfo';
import './ProductDetail.scss';

function ProductDetail() {
  const [breadList, setBreadList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/ProductDetailBreadData.json')
      .then(res => res.json())
      .then(json => {
        setBreadList(json);
      });
  }, []);

  return (
    <div>
      {breadList.length && (
        <div className="ProductDetail">
          <div>
            <img
              src={breadList[0].src}
              alt="상품이미지"
              className="productImage"
            />
            <ProductTap />
          </div>
          <ProductContentInfo />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

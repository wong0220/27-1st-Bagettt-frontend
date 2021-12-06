import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTap from './Tap/ProductTap';
import ProductContentInfo from './ContentInfo/ProductContentInfo';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailContents, setDetailContents] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('http://10.58.0.72:8000/packages/details/1')
      .then(res => res.json())
      .then(result => {
        setDetailContents(result);
      });
  }, []);

  // console.log(detailContents);

  return (
    <div>
      {detailContents[0]?.result && (
        <div className="ProductDetail">
          <div>
            <img
              src={detailContents[0].result[0].product_details[0].image}
              alt="상품이미지"
              className="productImage"
            />
            <ProductTap detailContents={detailContents[0].result[0]} />
          </div>
          <ProductContentInfo detailContents={detailContents[0].result[0]} />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

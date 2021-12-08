import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTap from './Tap/ProductTap';
import ProductContentInfo from './ContentInfo/ProductContentInfo';
import './ProductDetail.scss';

function ProductDetail() {
  const [detailContents, setDetailContents] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.58.0.120:8000/packages/details/${id}`)
      .then(res => res.json())
      .then(result => {
        setDetailContents(result);
      });
  }, [id]);

  return (
    <div>
      {detailContents.result && (
        <div>
          <div className="ProductDetail">
            <div>
              <img
                src={detailContents.result[0].package_thumbnail}
                alt="상품이미지"
                className="productImage"
              />
              <ProductTap detailContents={detailContents.result[0]} />
            </div>
            <ProductContentInfo detailContents={detailContents.result[0]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

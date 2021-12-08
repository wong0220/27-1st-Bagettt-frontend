import React from 'react';
import ProductTapBreadList from './ProductTapBreadList';

function ProductInfoTap({ detailContents }) {
  return (
    <div className="productList">
      {detailContents.product_details.map((product, idx) => {
        return <ProductTapBreadList key={idx} detailContents={product} />;
      })}
    </div>
  );
}

export default ProductInfoTap;

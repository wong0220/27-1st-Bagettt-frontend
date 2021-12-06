import React, { useState, useEffect } from 'react';
import ProductTapBreadList from './ProductTapBreadList';

function ProductInfoTap() {
  const [breadList, setBreadList] = useState([]);

  useEffect(() => {
    fetch('/data/ProductDetailBreadData.json')
      .then(res => res.json())
      .then(json => {
        setBreadList(json);
      });
  }, []);

  return (
    <div className="productList">
      {breadList.map(bread => {
        return <ProductTapBreadList key={bread.id} bread={bread} />;
      })}
    </div>
  );
}

export default ProductInfoTap;

import React from 'react';
import './BrandName.scss';

function BrandName({ name, cssName, selectBrand, brandList }) {
  return (
    <div className={cssName}>
      <label className="sortBrand">
        <input
          type="checkbox"
          name={name}
          onChange={selectBrand}
          checked={brandList.includes(name) ? true : false}
        />
        {name}
      </label>
    </div>
  );
}

export default BrandName;

import React from 'react';
import './BrandName.scss';

function BrandName({ name, cssName, selectBrand }) {
  return (
    <div className={cssName}>
      <label className="sortBrand">
        <input type="checkbox" name={name} onChange={selectBrand} />
        {name}
      </label>
    </div>
  );
}

export default BrandName;

import React, { useEffect, useState } from 'react';
import BreadList from '../ListPage/BreadList/BreadList';
import Filter from '../ListPage/Filter/Filter';
import './ListPage.scss';

function ListPage() {
  const [breadList, setBreadList] = useState([]);
  const [isOpenSortMenu, setisOpenSortMenu] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(false);
  const [sortPrice, setSortPrice] = useState('');
  const [brandList, setBrandList] = useState([]);

  function openProduct() {
    setisOpenSortMenu(!isOpenSortMenu);

    !isOpenSortMenu && setIsOpenBrands(false);
  }

  const openBrands = () => {
    setIsOpenBrands(!isOpenBrands);

    !isOpenBrands && setisOpenSortMenu(false);
  };

  function checkSortPrice(event) {
    setSortPrice(event.target.name);
  }

  function sort() {
    // if (sortPrice === '+price') {
    //   setBreadList(prev =>
    //     [...prev].sort((a, b) => parseInt(b.price) - parseInt(a.price))
    //   );
    // } else {
    //   setBreadList(prev =>
    //     [...prev].sort((a, b) => parseInt(a.price) - parseInt(b.price))
    //   );
    // }
    const a = brandList.map(el => `brand=${el}`).join('&');
    console.log(a);
  }

  function reset() {
    setSortPrice('');
    setBrandList([]);
    setBreadList(prev => [...prev].sort((a, b) => a.id - b.id));
  }

  const selectBrand = event => {
    if (event.target.checked) {
      setBrandList(prev => [...prev, event.target.name]);
    } else {
      setBrandList(prev => prev.filter(el => el !== event.target.name));
    }
  };

  useEffect(() => {
    fetch('http://10.58.0.72:8000/packages/list')
      .then(res => res.json())
      .then(json => {
        setBreadList(json.result);
      });
  }, []);

  return (
    <div>
      {breadList.length && (
        <div className="ListPage">
          <div>
            <span className="homeRoot">HOME</span>
            <span className="sign" />
            <span className="subscribeRoot"> 빵구독</span>
          </div>
          <ul className="breadContainer">
            <Filter
              openProduct={openProduct}
              checkSortPrice={checkSortPrice}
              sort={sort}
              reset={reset}
              isOpenSortMenu={isOpenSortMenu}
              sortPrice={sortPrice}
              openBrands={openBrands}
              isOpenBrands={isOpenBrands}
              selectBrand={selectBrand}
            />

            {breadList.map(bread => {
              return <BreadList key={bread.id} bread={bread} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListPage;

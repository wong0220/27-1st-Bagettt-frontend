import React, { useEffect, useState } from 'react';
import BreadList from '../ListPage/BreadList/BreadList';
import Filter from '../ListPage/Filter/Filter';
import Nav from '../../Components/Nav/Nav';
import { API } from '../../config';
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
    const brandSort = brandList.map(el => `brand=${el}`).join('&');
    let priceSort = '';

    if (sortPrice !== '') {
      priceSort = `&order=${sortPrice}`;
    }

    const allSort = brandSort.concat(priceSort);

    fetch(`${API.GET_LISTPAGE}?${allSort}`)
      .then(res => res.json())
      .then(json => {
        setBreadList(json.result);
      });
  }

  function reset() {
    setSortPrice('');
    setBrandList([]);
    setisOpenSortMenu(false);
    setIsOpenBrands(false);

    fetch(API.GET_LISTPAGE)
      .then(res => res.json())
      .then(json => {
        setBreadList(json.result);
      });
  }

  const selectBrand = event => {
    if (event.target.checked) {
      setBrandList(prev => [...prev, event.target.name]);
    } else {
      setBrandList(prev => prev.filter(el => el !== event.target.name));
    }
  };

  useEffect(() => {
    fetch(API.GET_LISTPAGE)
      .then(res => res.json())
      .then(json => {
        setBreadList(json.result);
      });
  }, []);

  return (
    <div>
      <Nav />
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
              brandList={brandList}
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

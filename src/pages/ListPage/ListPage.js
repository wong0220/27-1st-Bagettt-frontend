import React, { useEffect, useState } from 'react';
import BreadList from '../BreadList/BreadList';
import Filter from '../Filter/Filter';
import './ListPage.scss';

function ListPage() {
  const [bread, setBread] = useState([]);
  const [sortProduction, setSortProduction] = useState(false);
  const [higherPrice, setHigherPrice] = useState(false);
  const [lowerPrice, setLowerPrice] = useState(false);

  function openProduct() {
    sortProduction ? setSortProduction(false) : setSortProduction(true);
  }

  function checkHigherPrice() {
    setHigherPrice(true);
    setLowerPrice(false);
  }

  function checkLowerPrice() {
    setLowerPrice(true);
    setHigherPrice(false);
  }

  function sort() {
    if (higherPrice === true) {
      setBread(prev =>
        [...prev].sort((a, b) => parseInt(b.price) - parseInt(a.price))
      );
    }
    if (lowerPrice === true) {
      setBread(prev =>
        [...prev].sort((a, b) => parseInt(a.price) - parseInt(b.price))
      );
    }
  }

  function reset() {
    setHigherPrice(false);
    setLowerPrice(false);
    setBread(prev => [...prev].sort((a, b) => a.id - b.id));
  }

  useEffect(() => {
    fetch('http://localhost:3000/data/breadData.json')
      .then(res => res.json())
      .then(json => {
        setBread(json);
      });
  }, []);

  return (
    <div className="ListPage">
      <div>
        <span className="homeRoot">HOME</span>
        <span className="sign">></span>
        <span className="subscribeRoot"> 빵구독</span>
      </div>
      <ul className="breadContainer">
        <Filter
          openProduct={openProduct}
          checkHigherPrice={checkHigherPrice}
          checkLowerPrice={checkLowerPrice}
          sort={sort}
          reset={reset}
          sortProduction={sortProduction}
          higherPrice={higherPrice}
          lowerPrice={lowerPrice}
        />

        {bread.map(bread => {
          return <BreadList key={bread.id} bread={bread} />;
        })}
      </ul>
    </div>
  );
}

export default ListPage;

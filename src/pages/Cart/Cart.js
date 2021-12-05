import React, { useState, useEffect } from 'react';
import './Cart.scss';
import OrderInformation from './OrderInformation/OrderInformation';
import OrderProducts from './OrderProducts/OrderProducts';
import OrderPrice from './OrderPrice/OrderPrice';
import OrderButton from './OrderButton/OrderButton';

function Cart() {
  const [selectedBread, setSelectedBread] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const changeSingleBox = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter(el => el !== id));
    }
  };

  const changeAllBox = checked => {
    if (checked) {
      const allCheckBox = [];

      selectedBread.forEach(el => allCheckBox.push(el.id));
      setCheckList(allCheckBox);
    } else {
      setCheckList([]);
    }
  };

  useEffect(() => {
    fetch('/data/breadCart.json')
      .then(res => res.json())
      .then(json => {
        setSelectedBread(json);
      });
  }, []);

  return (
    <div>
      {selectedBread.length && (
        <div className="Cart">
          <div>
            <span className="homeRoot">HOME</span>
            <span className="homeRoot">></span>
            <span className="shoppingRoot">SHOPPING BAG</span>
          </div>

          <div className="shoppingBag">
            <h1 className="title">SHOPPING BAG</h1>
            <h2 className="title productTitle">쇼핑백 상품</h2>
            <div className="orderContainer">
              <OrderInformation
                changeAllBox={changeAllBox}
                checkList={checkList}
                selectedBread={selectedBread}
              />
              {selectedBread.map(selectedBread => (
                <OrderProducts
                  selectedBread={selectedBread}
                  key={selectedBread.id}
                  changeSingleBox={changeSingleBox}
                  data={selectedBread}
                  checkList={checkList}
                />
              ))}
            </div>
            <OrderPrice selectedBread={selectedBread} />
            <div className="orderButtonWrapper">
              <OrderButton content="쇼핑계속하기" name="whiteButton" />
              <OrderButton content="선택 상품 주문" name="whiteButton" />
              <OrderButton content="전체 상품 주문" name="blackButton" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

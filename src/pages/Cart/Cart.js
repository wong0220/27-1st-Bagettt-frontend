import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import OrderInformation from './OrderInformation/OrderInformation';
import OrderProducts from './OrderProducts/OrderProducts';
import OrderPrice from './OrderPrice/OrderPrice';
import OrderButton from './OrderButton/OrderButton';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { API } from '../../config';
import './Cart.scss';

function Cart() {
  const [selectedBread, setSelectedBread] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [totalPrice, setToalPrice] = useState({});
  const [price, setPrice] = useState({});
  const token = sessionStorage.getItem('token');

  const navigate = useNavigate();

  const changeSingleBox = (checked, id, prices) => {
    if (checked) {
      setCheckList([...checkList, id]);
      setPrice({ ...price, [id]: prices });
    } else {
      setCheckList(checkList.filter(el => el !== id));
      setPrice({ ...price, [id]: 0 });
    }
  };

  const changeAllBox = checked => {
    if (checked) {
      const allCheckBox = [];

      selectedBread.forEach(el => allCheckBox.push(el.id));
      setCheckList(allCheckBox);
      setPrice({ ...totalPrice });
    } else {
      setCheckList([]);
      setPrice({});
    }
  };

  const setPriceList = (prices, id) => {
    setToalPrice({ ...totalPrice, [id]: prices });
    if (checkList.includes(id)) {
      setPrice({ ...price, [id]: prices });
    }
  };

  const deleteSelected = () => {
    if (checkList.length === 0) {
      alert('상품을 선택해주세요');
    } else {
      setSelectedBread(selectedBread.filter(el => !checkList.includes(el.id)));

      setPrice({});
      const temp = { ...totalPrice };
      checkList.forEach(el => delete temp[el]);
      setToalPrice({ ...temp });

      setCheckList([]);
    }

    fetch(API.GET_CART, {
      method: 'DELETE',
      body: JSON.stringify({
        id: checkList,
      }),
      headers: {
        Authorization: token,
      },
    });
  };

  const deletePer = identifier => {
    if (checkList.includes(identifier)) {
      const deleteId = [];
      deleteId.push(identifier);
      fetch(API.GET_CART, {
        method: 'DELETE',
        body: JSON.stringify({
          id: deleteId,
        }),
        headers: {
          Authorization: token,
        },
      });

      setSelectedBread(selectedBread.filter(el => identifier !== el.id));

      const temp = { ...price };
      delete temp[identifier];
      setPrice({ ...temp });

      const temp2 = { ...totalPrice };
      delete temp2[identifier];
      setToalPrice({ ...temp2 });

      setCheckList(checkList.filter(el => el !== identifier));
    } else {
      alert('항목을 선택해주세요');
    }
  };

  const deleteAll = () => {
    const tempBreadList = [];
    selectedBread.forEach(el => tempBreadList.push(el.id));

    fetch(API.GET_CART, {
      method: 'DELETE',
      body: JSON.stringify({
        id: tempBreadList,
      }),
      headers: {
        Authorization: token,
      },
    });

    setSelectedBread([]);
    setPrice({});
    setToalPrice({});
  };

  const orderProduct = () => {
    fetch(API.GET_CART_DELETE, {
      method: 'POST',
      body: JSON.stringify({
        cart_id: checkList,
      }),
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        navigate('/order', { state: res });
      });
  };

  const orderPerProduct = identifier => {
    if (checkList.includes(identifier)) {
      const orderId = [];
      orderId.push(identifier);

      fetch(API.GET_CART_DELETE, {
        method: 'POST',
        body: JSON.stringify({
          cart_id: orderId,
        }),
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          navigate('/order', { state: res });
        });
    } else {
      alert('항목을 선택해주세요');
    }
  };

  const orderAllProduct = () => {
    const tempBreadList = [];
    selectedBread.forEach(el => tempBreadList.push(el.id));

    fetch(API.GET_CART_DELETE, {
      method: 'POST',
      body: JSON.stringify({
        cart_id: tempBreadList,
      }),
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        navigate('/order', { state: res });
      });
  };

  useEffect(() => {
    fetch(API.GET_CART, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => {
        setSelectedBread(res.result[0].cart);
        const temp = {};
        res.result[0].cart.forEach(el => (temp[el.id] = parseInt(el.price)));
        setToalPrice({ ...temp });
      });
  }, [token]);

  return (
    <div className="Cart">
      <Nav />
      <div className="cartWrapper">
        <div className="rootWrapper">
          <span className="homeRoot">HOME</span>
          <span className="homeRoot">{'>'}</span>
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

            {selectedBread.length > 0 ? (
              selectedBread.map(selectedBread => (
                <OrderProducts
                  selectedBread={selectedBread}
                  key={selectedBread.id}
                  changeSingleBox={changeSingleBox}
                  data={selectedBread}
                  checkList={checkList}
                  setPriceList={setPriceList}
                  deletePer={deletePer}
                  orderPerProduct={orderPerProduct}
                />
              ))
            ) : (
              <div className="emptyCart">장바구니가 비어있습니다</div>
            )}
          </div>
          <OrderPrice
            price={price}
            deleteSelected={deleteSelected}
            deleteAll={deleteAll}
          />
          <div className="orderButtonWrapper">
            <Link to="/list-page">
              <OrderButton content="쇼핑계속하기" name="whiteButton" />{' '}
            </Link>

            <OrderButton
              content="선택 상품 주문"
              name="whiteButton"
              orderProduct={orderProduct}
            />

            <OrderButton
              content="전체 상품 주문"
              name="blackButton"
              orderProduct={orderAllProduct}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

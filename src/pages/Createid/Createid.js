import React, { useState } from 'react';
import './Createid.scss';

function Createid() {
  const [idInput, setidInput] = useState('');
  const [pwInput, setpwInput] = useState('');
  const [nameInput, setnameInput] = useState('');
  const [phonenumberInput, setphonenumberInput] = useState('');
  const [addressInput, setaddressInput] = useState('');

  const handleidInput = e => {
    setidInput(e.target.value);
  };
  const handlepwInput = e => {
    setpwInput(e.target.value);
  };
  const handlenameInput = e => {
    setnameInput(e.target.value);
  };
  const handlephonenumberInput = e => {
    setphonenumberInput(e.target.value);
  };
  const handleaddressInput = e => {
    setaddressInput(e.target.value);
  };

  return (
    <div className="createAccount">
      <div className="createid">
        <div className="createAccount">
          <div className="create">
            <p className="createtitle">회원가입</p>
          </div>
          <div className="inputEmailid">
            <span className="idEmail">이메일 아이디 *</span>
            <input
              className="inputId"
              type="text"
              onChange={handleidInput}
              value={idInput}
            />
          </div>
          <div className="inputPassword">
            <span className="passWord">비밀번호 *</span>
            <input
              className="inputPw"
              onChange={handlepwInput}
              value={pwInput}
              type="password"
              placeholder="대소문자영어 + 숫자 + 특수문자 조합 필수 입력 8자 이상"
            />
          </div>
          <div className="inputName">
            <span className="name">이름 *</span>
            <input
              className="inputName"
              type="text"
              id="name"
              onChange={handlenameInput}
              value={nameInput}
            />
          </div>
          <div className="inputPhoneNumber">
            <span className="phoneNumber">휴대폰번호 *</span>
            <input
              className="phone"
              onChange={handlephonenumberInput}
              type="text"
              value={phonenumberInput}
              placeholder="-생략"
            />
          </div>
          <div className="inputAddress">
            <p className="address">주소 *</p>
          </div>
          <div className="buttonAddress">
            <input
              className="homeAddress"
              onChange={handleaddressInput}
              value={addressInput}
              type="text"
            />
          </div>

          <div className="submitButton">
            <button type="submit" className="btn">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Createid;

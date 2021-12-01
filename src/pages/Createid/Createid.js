import React, { useState } from 'react';
import './Createid.scss';

function Createid() {
  const [idInput, setidInput] = useState('');
  const [pwInput, setpwInput] = useState('');
  const [agianpwInput, setagianpwInput] = useState('');
  const [phonenumberInput, setphonenumberInput] = useState('');
  const [addressInput, setaddressInput] = useState('');

  const handleidInput = e => {
    setidInput(e.target.value);
  };
  const handlepwInput = e => {
    setpwInput(e.target.value);
  };
  const handleagianpwInput = e => {
    setagianpwInput(e.target.value);
  };
  const handlephonenumberInput = e => {
    setphonenumberInput(e.target.value);
  };
  const handleaddressInput = e => {
    setaddressInput(e.target.value);
  };

  return (
    <div>
      <div className="Createid">
        <div className="CreateAccount">
          <div className="Create">
            <p className="Createtittle">회원가입</p>
          </div>
          <div className="inputEmailid">
            <span className="IDemail">이메일 아이디 *</span>
            <input
              className="inputid"
              type="text,number,email"
              id="id"
              onChange={handleidInput}
              value={idInput}
            />
          </div>
          <div className="inputPassword">
            <span className="Password">비밀번호 *</span>
            <input
              className="inputpw"
              onChange={handlepwInput}
              value={pwInput}
              type="password"
              id="pw"
              placeholder="대소문자영어 + 숫자 + 특수문자 조합 필수 입력 8자 이상"
            />
            <input
              className="inputpw2"
              type="password"
              onChange={handleagianpwInput}
              value={agianpwInput}
              id="pw"
              placeholder="비밀번호 확인"
            />
            <div className="inputName">
              <span className="Name">이름 *</span>
              <input className="inputName" type="text" id="name" />
            </div>
            <div className="inputPhonenumber">
              <span className="Phonenumber">휴대폰번호 *</span>
              <input
                className="Phone"
                onChange={handlephonenumberInput}
                type="text"
                value={phonenumberInput}
                id="Phonenumber"
                placeholder="-생략"
              />
            </div>
            <div className="inputAddress">
              <p className="Address">주소 *</p>
            </div>
            <div className="buttonaddress">
              <input
                className="homeAddress"
                onChange={handleaddressInput}
                value={addressInput}
                type="text"
                id="Address"
              />
            </div>

            <div className="submitbutton">
              <button type="submit" className="btn">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Createid;

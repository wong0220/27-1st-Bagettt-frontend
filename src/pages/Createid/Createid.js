import React from 'react';
import './Createid.scss';

function Createid() {
  return (
    <div>
      <div className="Createid">
        <div className="CreateAccount">
          <div className="Create">
            <p className="Createtittle">회원가입</p>
          </div>
          <div className="inputEmailid">
            <span className="IDemail">이메일 아이디 *</span>
            <input className="inputid" type="text,number,email" id="id" />
          </div>
          <div className="inputPassword">
            <span className="Password">비밀번호 *</span>
            <input
              className="inputpw"
              type="password"
              id="pw"
              placeholder="대소문자영어 + 숫자 + 특수문자 조합 필수 입력 8자 이상"
            />
            <input
              className="inputpw2"
              type="password"
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
                type="text"
                id="Phonenumber"
                placeholder="-생략"
              />
            </div>
            <div className="inputAdress">
              <p className="Adress">주소 *</p>
            </div>
            <div className="buttonadress">
              <input className="homeAdress" type="text" id="Adress" />
              <button type="button" className="adressbutton">
                우편번호검색
              </button>
            </div>
            <div className="moreAdress">
              <input className="detailAdress" type="text" id="detailAdress" />
              <input
                className="realdetailAdress"
                type="text"
                id="realdetailAdress"
              />
            </div>
            <div className="submitbutton">
              <button
                type="submit"
                className="btn"
                onClick={function () {
                  alert('힝!  속았지~~??(찡긋)');
                }}
              >
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

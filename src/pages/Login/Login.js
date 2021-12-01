import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [Member, setMember] = useState(true);

  const [idInput, setIdInput] = useState('');
  const [PWInput, setPassWordInput] = useState('');

  const [numInput, setNumInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const handleNameInput = e => {
    setNameInput(e.target.value);
  };

  const handleNumInput = e => {
    setNumInput(e.target.value);
  };

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePWInput = e => {
    setPassWordInput(e.target.value);
  };

  function onClick() {
    setMember(false);
  }
  function ChangeUser() {
    setMember(true);
  }

  return (
    <div>
      {Member ? (
        <div className="Login">
          <div className="Login-box">
            <div className="title">
              <h className="titleLogin">LOGIN</h>
            </div>
            <ul className="MemberShip">
              <li className="memberLogin">회원 로그인</li>
              <li className="NomemberLogin" onClick={onClick}>
                비회원 주문조회
              </li>
            </ul>
            <div className="Signup">
              <p className="inputemailid">이메일 아이디</p>
              <input
                className="inputId"
                onChange={handleIdInput}
                type="text,number,email"
                id="id"
              />
              <p className="inputpassword">비밀번호</p>
              <input
                className="inputPw"
                onChange={handlePWInput}
                type="password"
                id="pw"
              />
            </div>
            <div className="loginbotton">
              {idInput.includes('@') &&
              idInput.includes('.') &&
              PWInput.length >= 8 ? (
                <button type="submit" className="btn" disabled={false}>
                  로그인
                </button>
              ) : (
                <button type="submit" className="btn" disabled={true}>
                  로그인
                </button>
              )}
            </div>
            <div className="save">
              <input type="checkbox" className="check-box" />
              <span className="saveid">아이디저장</span>
              <div className="find">
                <ul className="forgetlogin">
                  <li className="findid">아이디찾기</li>
                  <li className="findpw">비밀번호 찾기</li>
                </ul>
              </div>
            </div>
            <div className="usesnslogin">
              <p className="loginsns">SNS 로그인</p>
              <div className="icons">
                <i className="fab fa-facebook fa-2x" />
                <i className="fab fa-google fa-2x" />
                <i className="fab fa-line fa-2x" />
              </div>
            </div>
            <div className="createid">
              <div className="createlogin">
                <h className="createuser">회원가입</h>
              </div>
              <p className="givecoupon">
                회원으로 가입하시면 10% 할인쿠폰을 드립니다.
              </p>
              <button type="submit" className="createuserbtn">
                <Link to="/createid">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="UNLogin">
          <div className="unLogin-box">
            <div className="tittle">
              <h className="tittleLogin">LOGIN</h>
            </div>
            <ul className="MemberShip">
              <li className="memberLogin" onClick={ChangeUser}>
                회원 로그인
              </li>
              <li className="NomemberLogin">비회원 주문조회</li>
            </ul>
            <div className="Signup">
              <p className="inputemailid">주문번호</p>
              <input
                className="inputNum"
                onChange={handleNumInput}
                type="text,number"
                id="id"
                value={numInput}
              />
              <p className="inputpassword">이름</p>
              <input
                className="inputName"
                onChange={handleNameInput}
                type="text"
                id="pw"
                value={nameInput}
              />
            </div>
            <div className="loginbutton">
              <button type="submit" className="btn">
                주문조회
              </button>
            </div>
            <div className="createid">
              <div className="createlogin">
                <h className="createuser">주문번호 문의</h>
              </div>
              <p className="givecoupon">
                주문번호를 잊으셨나요? 고객센터(999-9000)로 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;

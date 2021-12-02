import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [member, setMember] = useState(true);

  const [idInput, setIdInput] = useState('');
  const [pWInput, setPassWordInput] = useState('');

  const [numInput, setNumberInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const handleNameInput = e => {
    setNameInput(e.target.value);
  };

  const handleNumberInput = e => {
    setNumberInput(e.target.value);
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

  function changeUser() {
    setMember(true);
  }

  const goToMain = () => {
    if (idInput.includes('@', '.') && pWInput.length > 7) navigate('/main');
    else {
      alert('등록되지 않은 회원입니다 회원가입을 먼저해주세요');
    }
  };

  return (
    <div>
      {member ? (
        <div className="login">
          <div className="loginBox">
            <div className="title">
              <p className="titleLogin">LOGIN</p>
            </div>
            <ul className="memberShip">
              <li className="loginMember">회원 로그인</li>
              <li className="searchOrder" onClick={onClick}>
                비회원 주문조회
              </li>
            </ul>
            <div className="signUp">
              <p className="inputEmailid">이메일 아이디</p>
              <input className="inputId" onChange={handleIdInput} type="text" />
              <p className="inputPassword">비밀번호</p>
              <input
                className="inputPw"
                onChange={handlePWInput}
                type="password"
              />
            </div>
            <div className="loginButton">
              <button type="submit" className="btn" onClick={goToMain}>
                로그인
              </button>
            </div>
            <div className="saveAccount">
              <input type="checkbox" className="checkboxId" />
              <span className="saveId">아이디 저장</span>
              <div className="find">
                <ul className="forgetLogin">
                  <li className="findId">아이디 찾기</li>
                  <li className="findPw">비밀번호 찾기</li>
                </ul>
              </div>
            </div>
            <div className="iconsnsLogin">
              <p className="loginSns">SNS 로그인</p>
              <div className="icons">
                <i className="fab fa-facebook fa-2x" />
                <i className="fab fa-google fa-2x" />
                <i className="fab fa-line fa-2x" />
              </div>
            </div>
            <div className="createId">
              <div className="createLogin">
                <p className="createUser">회원가입</p>
              </div>
              <p className="giveCoupon">
                회원으로 가입하시면 10% 할인쿠폰을 드립니다.
              </p>
              <button type="submit" className="createUserbtn">
                <Link to="/createid">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="unLogin">
          <div className="unLoginbox">
            <div className="title">
              <h className="titleLogin">LOGIN</h>
            </div>
            <ul className="memberShip">
              <li className="memberLogin" onClick={changeUser}>
                회원 로그인
              </li>
              <li className="nomemberSearchOrder">비회원 주문조회</li>
            </ul>
            <div className="signUp">
              <p className="inputEmailid">주문번호</p>
              <input
                className="inputNumber"
                onChange={handleNumberInput}
                type="text"
                value={numInput}
              />
              <p className="inputPassword">이름</p>
              <input
                className="inputName"
                onChange={handleNameInput}
                type="text"
                value={nameInput}
              />
            </div>
            <div className="loginbutton">
              <button type="submit" className="btn">
                주문조회
              </button>
            </div>
            <div className="createId">
              <div className="createLogin">
                <h className="createUser">주문번호 문의</h>
              </div>
              <p className="giveCoupon">
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

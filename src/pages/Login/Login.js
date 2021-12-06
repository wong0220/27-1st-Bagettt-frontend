import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [member, setMember] = useState(true);
  const [inputs, setInputs] = useState({
    idInput: '',
    pwInput: '',
    numberInput: '',
    nameInput: '',
  });

  const { idInput, pwInput, numberInput, nameInput } = inputs;

  const handleInputs = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  function onClickbutton() {
    setMember(false);
  }

  function changeUser() {
    setMember(true);
  }

  const email =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passWord =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailValueCheck = email.test(idInput);
  const passwordValueCheck = passWord.test(pwInput);

  const isUserValid = emailValueCheck && passwordValueCheck;

  const goToList = () => {
    if (isUserValid) {
      fetch('http://10.58.2.30:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            navigate('/list-page');
          } else {
            alert('등록되지 않은 회원입니다 회원가입을 먼저해주세요');
          }
        });
    } else {
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
              <li className="searchOrder" onClick={onClickbutton}>
                비회원 주문조회
              </li>
            </ul>
            <div className="signUp">
              <p className="inputEmailid">이메일 아이디</p>
              <input
                className="inputId"
                onChange={handleInputs}
                type="text"
                name="idInput"
                value={idInput}
              />

              <p className="inputPassword">비밀번호</p>
              <input
                className="inputPw"
                onChange={handleInputs}
                type="password"
                name="pwInput"
                value={pwInput}
              />
            </div>
            <div className="loginButton">
              <button className="btn" onClick={goToList}>
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
              <div className="createLogin">회원가입</div>
              <p className="giveCoupon">
                회원으로 가입하시면 10% 할인쿠폰을 드립니다.
              </p>
              <button className="createUserbtn">
                <Link to="/createid">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="nonMemberLogin">
          <div className="nonMemberLoginbox">
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
                onChange={handleInputs}
                type="text"
                name="numberInput"
                value={numberInput}
              />
              <p className="inputPassword">이름</p>
              <input
                className="inputName"
                onChange={handleInputs}
                type="text"
                name="nameInput"
                value={nameInput}
              />
            </div>
            <div className="loginbutton">
              <button className="btn">주문조회</button>
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

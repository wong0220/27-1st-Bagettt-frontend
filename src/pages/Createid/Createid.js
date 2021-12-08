import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Createid.scss';

function CreateId() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    idInput: '',
    pwInput: '',
    nameInput: '',
    phonenumberInput: '',
    addressInput: '',
  });

  const { idInput, pwInput, nameInput, phonenumberInput, addressInput } = input;

  const handleInput = event => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const email =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passWord =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;

  const emailValueCheck = email.test(idInput);
  const passwordValueCheck = passWord.test(pwInput);

  const isUserValid = emailValueCheck && passwordValueCheck;

  const goToList = () => {
    if (isUserValid) {
      fetch('http://10.58.5.9:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
          name: nameInput,
          address: addressInput,
          phone_number: phonenumberInput,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            alert('회원가입을 축하합니다!');
            navigate('/login');
          } else {
            alert('회원가입 형식에 맞지 않습니다 다시한번 확인해주세요!');
          }
        });
    } else {
      alert('회원가입 형식에 맞지 않습니다 다시한번 확인해주세요!');
    }
  };

  return (
    <div className="createId">
      <div className="createBox">
        <div className="createAccount">
          <div className="create">
            <p className="createTitle">회원가입</p>
          </div>
          <div className="inputEmailid">
            <span className="idEmail">이메일 아이디 *</span>
            <input
              className="inputId"
              name="idInput"
              value={idInput}
              type="text"
              onChange={handleInput}
              placeholder="이메일 필수 입력"
            />
          </div>
          <div className="inputPassword">
            <span className="passWord">비밀번호 *</span>
            <input
              className="inputPw"
              onChange={handleInput}
              name="pwInput"
              value={pwInput}
              type="password"
              placeholder="대소문자영어 + 숫자 + 특수문자 조합 필수 입력 8자 이상"
            />
          </div>
          <div className="inputName">
            <span className="userName">이름 *</span>
            <input
              className="inputName"
              name="nameInput"
              value={nameInput}
              type="text"
              onChange={handleInput}
            />
          </div>
          <div className="inputPhoneNumber">
            <span className="userPhoneNumber">휴대폰번호 *</span>
            <input
              className="phone"
              onChange={handleInput}
              name="phonenumberInput"
              value={phonenumberInput}
              type="text"
              placeholder="-생략"
            />
          </div>
          <div className="inputAddress">
            <p className="address">주소 *</p>
          </div>
          <div className="buttonAddress">
            <input
              className="homeAddress"
              name="addressInput"
              value={addressInput}
              onChange={handleInput}
              type="text"
            />
          </div>

          <div className="submitButton">
            <button className="btn" onClick={goToList}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateId;

import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import "assets/css/UserRegistration.scss";
import Logoimage from "assets/image/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { registerRequest } from "redux/user/userSlice";

export default function UserRegistration() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePW = (e) => {
    setPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onRegisterClick = (e) => {
    e.preventDefault();

    // Form validation
    if (!id || !password || !name || !nickname || !phone) {
      alert(`빈칸을 모두 채워주세요.`);
      return;
    }

    dispatch(
      registerRequest({
        accountId: id,
        password,
        name,
        nickName: nickname,
        phoneNum: phone,
      })
    );
    setSuccess(true);
  };

  return (
    <>
      {
        success ? <Redirect to='/login' /> :
          <div className="register-all-div">
            <img src={Logoimage} alt="LOGO" className="login-logo-image" />
            <div className="register-box">
              <div>
                <h4>회원정보를 입력해주세요</h4>
                <label className="label-box">
                  <AiOutlineMail className="login-icons" />
                  <span className="input-text-box">
                    <input
                      type="text"
                      placeholder="아이디"
                      value={id}
                      onChange={onChangeId}
                      required
                    />
                  </span>
                </label>
                <label className="label-box">
                  <RiLockPasswordLine className="login-icons" />
                  <span className="input-text-box">
                    <input
                      type="password"
                      placeholder="비밀번호"
                      value={password}
                      onChange={onChangePW}
                      required
                    />
                  </span>
                </label>
                <label className="label-box">
                  <BsFillPersonFill className="login-icons" />
                  <span className="input-text-box">
                    <input
                      type="text"
                      placeholder="이름"
                      value={name}
                      onChange={onChangeName}
                      required
                    />
                  </span>
                </label>
                <label className="label-box">
                  <BsPerson className="login-icons" />
                  <span className="input-text-box">
                    <input
                      type="text"
                      placeholder="닉네임"
                      value={nickname}
                      onChange={onChangeNickname}
                      required
                    />
                  </span>
                </label>
                <label className="label-box">
                  <MdPhoneIphone className="login-icons" />
                  <span className="input-text-box">
                    <input
                      type="text"
                      placeholder="휴대폰 번호"
                      value={phone}
                      onChange={onChangePhone}
                      required
                    />
                  </span>
                </label>
              </div>
              <div className="button-box">
                <button id="register-btn" className="btns" onClick={onRegisterClick}>
                  회원가입
                </button>
              </div>
            </div>
          </div>
      }
    </>
  );
}

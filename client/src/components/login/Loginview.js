import React, { useState } from "react";
import "assets/css/Loginview.scss";
import Logoimage from "assets/image/logo.png";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { loginRequest } from "../../redux/user/userSlice";

export default function Loginview() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userinfo = useSelector((state) => state.USER.data);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePW = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    dispatch(
      loginRequest({
        accountId: id,
        password: password,
      })
    );

    // TODO Refactor to saga
    /*
    axios
      .post(
        "/api/user/login",
        {
          accountId: idvalue,
          password: pwvalue,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data === "") alert("잘못된 로그인 정보입니다");
        else dispatch(login(res.data));
      });
      */
  };

  return (
    <>
      {userinfo !== null ? (
        <Redirect to="/" />
      ) : (
        <div className="all-div">
          <img src={Logoimage} alt="LOGO" className="login-logo-image" />
          <div className="login-box">
            <div>
              <label className="label-box">
                <AiOutlineMail className="login-icons" />
                <span className="input-text-box">
                  <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={onChangeId}
                  ></input>
                </span>
              </label>
              <label className="label-box">
                <RiLockPasswordLine className="login-icons" />
                <span className="input-text-box">
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={onChangePW}
                  ></input>
                </span>
              </label>
            </div>
            <div className="button-box">
              <Link to="/register">
                <button id="join-btn" className="btns">
                  회원가입
                </button>
              </Link>
              <button id="login-btn" className="btns" onClick={onLoginClick}>
                로그인
              </button>
              <button id="search-btn" className="btns">
                ID/PW 찾기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

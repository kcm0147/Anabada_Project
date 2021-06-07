import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserInfoRequest,
  modifyUserInfoRequest,
} from "redux/userInfo/userInfoSlice";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const MyInfoContents = () => {
  const dispatch = useDispatch();
  const userInfoLoading = useSelector((s) => s.USER_INFO.loading);
  const userInfoData = useSelector((s) => s.USER_INFO.data);

  const [accountId, setAccountId] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  useEffect(() => {
    if (userInfoData) {
      setAccountId(userInfoData.accountId || "");
      setAddress(userInfoData.address || "");
      setInterest(userInfoData.interest || "");
      setName(userInfoData.name || "");
      setNickName(userInfoData.nickName || "");
      setPhoneNum(userInfoData.phoneNum || "");
      setProfileImage(userInfoData.profileImage || "");
    }
  }, [userInfoData]);

  const handleSaveButtonClick = (e) => {
    e.preventDefault();
    dispatch(
      modifyUserInfoRequest({
        address,
      })
    );
  };

  return (
    <div className="mypage-contents">
      <h4>회원 정보 수정</h4>
      {userInfoLoading ? (
        <p>로딩중...</p>
      ) : (
        <div>
          <label htmlFor="userid">아이디</label>
          <InputGroup className="mb-3">
            <FormControl id="userid" value={accountId} disabled />
          </InputGroup>
          <label htmlFor="name">이름</label>
          <InputGroup className="mb-3">
            <FormControl
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <label htmlFor="nickname">닉네임</label>
          <InputGroup className="mb-3">
            <FormControl
              id="nickname"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </InputGroup>
          <label htmlFor="phoneNum">휴대폰 번호</label>
          <InputGroup className="mb-3">
            <FormControl
              id="phoneNum"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </InputGroup>
          <label htmlFor="address">주소</label>
          <InputGroup className="mb-3">
            <FormControl
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGroup>
          <label htmlFor="interest">관심 카테고리</label>
          <InputGroup className="mb-3">
            <FormControl
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </InputGroup>

          <Button variant="primary" onClick={handleSaveButtonClick}>
            저장
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyInfoContents;

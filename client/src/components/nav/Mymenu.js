import "assets/css/Mymenu.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "../../redux/user/userSlice";

export default function Mymenu(props) {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logoutRequest());
    alert("로그아웃되셨습니다.");
  };

  return (
    <ol
      id="mymenu"
      ref={props.myMenuRef}
      style={{
        display: "none",
      }}
    >
      <Link to={`/mypage/myparticipate`} className="link-style">
        <li>
          경매 참여 현황
          <span>&#62;</span>
        </li>
      </Link>
      <Link to={`/mypage/mysale`} className="link-style">
        <li>
          물품 등록 현황
          <span>&#62;</span>
        </li>
      </Link>
      <Link to={`/mypage/myinfo`} className="link-style">
        <li>
          회원 정보 수정
          <span>&#62;</span>
        </li>
      </Link>
      <li onClick={onClickLogout}>
        로그아웃
        <span>&#62;</span>
      </li>
    </ol>
  );
}

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "assets/css/navbar.scss";
import Logoimage from "assets/image/logo.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Mymenu from "components/nav/Mymenu";
import Loginmenu from "components/nav/Loginmenu";

export default function Navbar({ match }) {
  const myMenuRef = useRef();
  const userInfo = useSelector((state) => state.USER.data);

  const onClickMyProfile = () => {
    myMenuRef.current.style.opacity =
      myMenuRef.current.style.opacity === "0" ||
      myMenuRef.current.style.opacity === ""
        ? "1"
        : "0";
  };

  return (
    <>
      <nav className="nav-style">
        <div>
          <Link to="/">
            <img src={Logoimage} alt="LOGO" className="nav-logo"></img>
          </Link>
        </div>
        <div className="nav-searchbar">
          <input
            className="nav-searchinput"
            type="text"
            placeholder="관심있는 경매품을 검색해보세요!"
          ></input>
          <BiSearchAlt id="input-search-btn" />
        </div>
        <div className="myprofile-icon">
          <BsFillPersonLinesFill
            id="mymenu-icon-img"
            onClick={onClickMyProfile}
          />
          {userInfo === null ? (
            <Loginmenu myMenuRef={myMenuRef} />
          ) : (
            <Mymenu myMenuRef={myMenuRef} match={match} />
          )}
        </div>
      </nav>
    </>
  );
}

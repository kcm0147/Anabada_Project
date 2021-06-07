import { Route } from "react-router-dom";
import "assets/css/MypageView.scss";

import Navbar from "components/nav/Navbar";
import MypageSidebar from "components/mypage/MypageSidebar";
import MyInfoContents from "components/mypage/mypage-contents/MyInfoContents";
import SaleItemContents from "components/mypage/mypage-contents/SaleItemContents";
import ParticipationAuction from "components/mypage/mypage-contents/ParticipationAuction";
import LikeItems from "components/mypage/mypage-contents/LikeItems";
import EnrollItem from "components/mypage/mypage-contents/EnrollItem";
import Footer from "components/Footer";

export default function MypageView({ match }) {
  return (
    <>
      <Navbar match={match} />
      <MypageSidebar match={match} />
      <Route
        path={`${match.path}/myparticipate`}
        component={ParticipationAuction}
      />
      <Route path={`${match.path}/mylike`} component={LikeItems} />
      <Route path={`${match.path}/mysale`} component={SaleItemContents} />
      <Route
        path={`${match.path}/enroll`}
        render={() => <EnrollItem match={match} />}
      />
      <Route path={`${match.path}/myinfo`} component={MyInfoContents} />
      <Footer />
    </>
  );
}

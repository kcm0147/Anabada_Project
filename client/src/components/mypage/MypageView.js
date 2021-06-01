import { Router, Route } from 'react-router-dom'
import 'assets/css/MypageView.scss'

import Navbar from 'components/nav/Navbar'
import MypageSidebar from 'components/mypage/MypageSidebar'
import MyInfoContents from 'components/mypage/mypage-contents/MyInfoContents'
import SaleItemContents from 'components/mypage/mypage-contents/SaleItemContents'
import BuyItemContents from 'components/mypage/mypage-contents/BuyItemContents'


export default function MypageView({ match }) {
    return (
        <>
            <Navbar match={match} />
            <MypageSidebar />
            <Route path={`${match.path}/myinfo`} component={MyInfoContents} />
            <Route path={`${match.path}/mybuy`} component={BuyItemContents} />
            <Route path={`${match.path}/mysale`} component={SaleItemContents} />
        </>
    )
}
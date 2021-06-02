import 'assets/css/MypageSidebar.scss'
import { Link } from 'react-router-dom'

export default function MypageSidebar({ match }) {

    return (
        <div id='mypage-sidebar-section'>
            <Link to={`${match.url}/mybuy`} className='sidebar-item'>
                경매 참여 현황
            </Link>
            <Link to={`${match.url}/mysale`} className='sidebar-item'>
                물품 등록 현황
            </Link>
            <Link to={`${match.url}/myinfo`} className='sidebar-item'>
                회원 정보 수정
            </Link>
        </div>
    )
}
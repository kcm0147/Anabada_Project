import 'assets/css/MypageSidebar.scss'
import { Link } from 'react-router-dom'

export default function MypageSidebar({ match }) {

    return (
        <div id='mypage-sidebar-section'>
            <div className='mypage-subtitle'>경매 참여</div>
            <Link to={`${match.url}/myparticipate`} className='sidebar-item'>
                경매 참여 내역
            </Link>
            <Link to={`${match.url}/mylike`} className='sidebar-item'>
                찜한 목록
            </Link>
            <div className='mypage-subtitle'>경매 등록</div>
            <Link to={`${match.url}/mysale`} className='sidebar-item'>
                물품 등록하기
            </Link>
            <Link to={`${match.url}/mysale`} className='sidebar-item'>
                물품 등록 내역
            </Link>
            <div className='mypage-subtitle'>내 정보</div>
            <Link to={`${match.url}/myinfo`} className='sidebar-item'>
                회원 정보 수정
            </Link>
        </div>
    )
}
import 'assets/css/Mymenu.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'actions/ActionCreaters'

export default function Mymenu(props) {

    const dispatch = useDispatch()
    const matchUrl = props.match.url === '/' ? 'mypage' : props.match.url

    const onClickLogout = () => {
        dispatch(logout())
        alert("로그아웃되셨습니다.")
    }

    return (
        <ol id='mymenu' ref={props.myMenuRef}>
            <Link to={`${matchUrl}/mybuy`} className='link-style'>
                <li>
                    경매 참여 현황
                <span>&#62;</span>
                </li>
            </Link>
            <Link to={`${matchUrl}/mysale`} className='link-style'>
                <li>
                    물품 등록 현황
                <span>&#62;</span>
                </li>
            </Link>
            <Link to={`${matchUrl}/myinfo`} className='link-style'>
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
    )
}
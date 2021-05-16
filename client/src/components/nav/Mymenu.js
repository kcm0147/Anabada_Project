import 'assets/css/Mymenu.scss'

export default function Mymenu(props) {

    return (
        <ol ref={props.myMenuRef}>
            <li>
                경매 참여 현황
                <span>&#62;</span>
            </li>
            <li>
                물품 등록 현황
                <span>&#62;</span>
            </li>
            <li>
                회원 정보 수정
                <span>&#62;</span>
            </li>
            <li>
                로그아웃
                <span>&#62;</span>
            </li>
        </ol>
    )
}
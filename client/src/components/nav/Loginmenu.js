import 'assets/css/Mymenu.scss'
import { Link } from 'react-router-dom'

export default function Loginmenu(props) {
    return (
        <ol id='mymenu' ref={props.myMenuRef}>
            <Link to='/login' className='link-style'>
                <li>
                    로그인
                <span>&#62;</span>
                </li>
            </Link>
        </ol>
    )
}
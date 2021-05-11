import 'assets/css/navbar.css'
import Logoimage from 'assets/image/logo.png'
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {

    return (
        <nav className='nav-style'>
            <div>
                <img src={Logoimage} alt='LOGO' className='nav-logo'></img>
            </div>
            <div className='nav-searchbar'>
                <input className='nav-searchinput' type='text' placeholder='관심있는 경매품을 검색해보세요!'></input>
            </div>
            <div className='nav-icon'>
                <BsFillPersonLinesFill style={{
                    width: '160%',
                    height: '160%'
                }} />
            </div>
        </nav>
    );
}
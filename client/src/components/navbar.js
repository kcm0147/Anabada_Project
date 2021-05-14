import { useRef } from 'react'
import 'assets/css/navbar.css'
import Logoimage from 'assets/image/logo.png'
import { BsFillPersonLinesFill } from "react-icons/bs";
import Sidebar from 'components/Sidebar'

export default function Navbar() {

    const SidebarRef = useRef()

    const onClickMyProfile = () => {
        SidebarRef.current.style.right = '0px'
    }

    return (
        <>
            <Sidebar sidebarref={SidebarRef} />
            <nav className='nav-style'>
                <div>
                    <img src={Logoimage} alt='LOGO' className='nav-logo'></img>
                </div>
                <div className='nav-searchbar'>
                    <input className='nav-searchinput' type='text' placeholder='관심있는 경매품을 검색해보세요!'></input>
                </div>
                <div className='myprofile-icon' onClick={onClickMyProfile}>
                    <BsFillPersonLinesFill style={{
                        width: '160%',
                        height: '160%'
                    }} />
                </div>
            </nav>
        </>
    );
}
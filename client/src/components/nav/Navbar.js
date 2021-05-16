import { useRef } from 'react'
import 'assets/css/navbar.scss'
import Logoimage from 'assets/image/logo.png'
import { BsFillPersonLinesFill } from "react-icons/bs";
import Mymenu from 'components/nav/Mymenu'

export default function Navbar() {

    const myMenuRef = useRef()

    const onClickMyProfile = () => {
        console.log(myMenuRef.current.style.opacity)
        myMenuRef.current.style.opacity = ((myMenuRef.current.style.opacity === '0' || myMenuRef.current.style.opacity === '') ? '1' : '0')
        console.log(myMenuRef.current.style.opacity)
    }

    return (
        <>
            <nav className='nav-style'>
                <div>
                    <img src={Logoimage} alt='LOGO' className='nav-logo'></img>
                </div>
                <div className='nav-searchbar'>
                    <input className='nav-searchinput' type='text' placeholder='관심있는 경매품을 검색해보세요!'></input>
                </div>
                <div className='myprofile-icon'>
                    <BsFillPersonLinesFill id='mymenu-icon-img' onClick={onClickMyProfile} />
                    <Mymenu myMenuRef={myMenuRef} />
                </div>
            </nav>
        </>
    );
}
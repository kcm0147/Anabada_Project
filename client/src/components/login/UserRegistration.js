import 'assets/css/UserRegistration.scss'
import Logoimage from 'assets/image/logo.png'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'

export default function UserRegistration() {

    let idvalue = '', pwvalue = '', namevalue = '', nicknamevalue = '', phonevalue = ''

    const onChangeId = (e) => { idvalue = e.target.value }
    const onChangePW = (e) => { pwvalue = e.target.value }
    const onChangeName = (e) => { namevalue = e.target.value }
    const onChangeNickname = (e) => { nicknamevalue = e.target.value }
    const onChangePhone = (e) => { phonevalue = e.target.value }

    return (
        < div className='register-all-div' >
            <img src={Logoimage} alt='LOGO' className='login-logo-image' />
            <div className='register-box'>
                <div>
                    <h4>회원정보를 입력해주세요</h4>
                    <label className='label-box'>
                        <AiOutlineMail className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='아이디' onChange={onChangeId}></input>
                        </span>
                    </label>
                    <label className='label-box'>
                        <RiLockPasswordLine className='login-icons' />
                        <span className='input-text-box'>
                            <input type='password' placeholder='비밀번호' onChange={onChangePW}></input>
                        </span>
                    </label>
                    <label className='label-box'>
                        <BsFillPersonFill className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='이름' onChange={onChangeName}></input>
                        </span>
                    </label>
                    <label className='label-box'>
                        <BsPerson className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='닉네임' onChange={onChangeNickname}></input>
                        </span>
                    </label>
                    <label className='label-box'>
                        <MdPhoneIphone className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='휴대폰 번호' onChange={onChangePhone}></input>
                        </span>
                    </label>
                </div>
                <div className='button-box'>
                    <button id='register-btn' className='btns'>회원가입</button>
                </div>
            </div>
        </div >
    )
}
import 'assets/css/Loginview.scss'
import Logoimage from 'assets/image/logo.png'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'actions/ActionCreaters'
import { Redirect } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from "react-icons/ri";

export default function Loginview() {

    let idvalue = ''
    let pwvalue = ''

    const dispatch = useDispatch()
    const userinfo = useSelector(state => state.UserReducer.data)

    const onChangeId = (e) => { idvalue = e.target.value }
    const onChangePW = (e) => { pwvalue = e.target.value }

    const onClickLogin = () => {
        axios.post('/api/user/login', {
            'accountId': idvalue,
            'password': pwvalue
        }, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => {
                if (res.data === "") alert("잘못된 로그인 정보입니다")
                else {
                    dispatch(login(res.data))
                    console.log("hi")
                }
            })

    }


    return (
        <>
            { (userinfo !== null) ? <Redirect to='/' /> :
                < div className='all-div' >
                    <img src={Logoimage} alt='LOGO' className='login-logo-image' />
                    <div className='login-box'>
                        <div>
                            <label className='label-box'>
                                <AiOutlineMail className='login-icons' />
                                <span className='input-text-box'>
                                    <input type='text' placeholder='ID' onChange={onChangeId}></input>
                                </span>
                            </label>
                            <label className='label-box'>
                                <RiLockPasswordLine className='login-icons' />
                                <span className='input-text-box'>
                                    <input type='text' placeholder='PASSWORD' onChange={onChangePW}></input>
                                </span>
                            </label>
                        </div>
                        <div className='button-box'>
                            <button id='join-btn' className='btns'>회원가입</button>
                            <button id='login-btn' className='btns' onClick={onClickLogin}>로그인</button>
                            <button id='search-btn' className='btns'>ID/PW 찾기</button>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
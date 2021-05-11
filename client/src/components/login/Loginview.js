import 'assets/css/Loginview.css'
import Logoimage from 'assets/image/logo.png'
import { AiOutlineMail } from 'react-icons/ai'

export default function Loginview() {
    return (
        <div className='all-div'>
            <img src={Logoimage} alt='LOGO' className='login-logo-image' />
            <div className='login-box'>
                <form>
                    <label className='label-box'>
                        <AiOutlineMail className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='ID'></input>
                        </span>
                    </label>
                    <label className='label-box'>
                        <AiOutlineMail className='login-icons' />
                        <span className='input-text-box'>
                            <input type='text' placeholder='PASSWORD'></input>
                        </span>
                    </label>
                </form>
            </div>
        </div>
    )
}
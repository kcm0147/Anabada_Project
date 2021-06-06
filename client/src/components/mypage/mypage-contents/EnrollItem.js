import 'assets/css/EnrollItem.scss'
import { useState } from 'react'
import UploadImg from 'assets/image/upload-image.png'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import { getFormatDate } from 'lib/dateFormer'
import "react-datepicker/dist/react-datepicker.css";

export default function EnrollItem() {

    const [imgBase64, setImgBase64] = useState('')
    const [imgFile, setImgFile] = useState(UploadImg)
    const [startdate, setStartdate] = useState('')

    let starttime;

    const onChangeStartDate = (date) => setStartdate(date)
    const onChangeStartTime = (time) => starttime = time

    const onChangeFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) setImgBase64(base64.toString());
            if (file) setImgFile(base64)
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className='mypage-contents'>
            <h4 style={{ display: 'inline-block' }}>물품 등록하기</h4>
            <div id='required-text'><span className='required-check'>*</span>필수항목</div>
            <ul id='enroll-ul'>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>상품명<span className='required-check'>*</span></div>
                    <div className='li-input-text'>
                        <input type='text' placeholder='상품명을 입력하세요' />
                    </div>
                </li>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>상품이미지<span className='required-check'>*</span></div>
                    <div>
                        <div id='item-img-box'>
                            <img alt='상품이미지' src={imgFile}></img>
                        </div>
                        <div className='li-input-file'>
                            <input type='file' accept='image/jpg, image/png, image/jpeg, image/gif'
                                onChange={onChangeFile} />
                        </div>
                        <div id='img-section-desc'>
                            <div>- 이미지 파일은 jpg, png, jpeg, gif 형식을 사용할 수 있습니다.</div>
                            <div>- 큰 이미지의 경우 이미지가 깨지는 현상이 발생할 수 있습니다.</div>
                            <div>- 가급적 상품의 전체 모습이 나온 이미지를 업로드 해주세요.</div>
                        </div>
                    </div>
                </li>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>상품 소개</div>
                    <div className='li-input-textarea'>
                        <input type='textarea' placeholder='상품 설명을 입력해주세요' />
                    </div>
                </li>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>경매 하한가(원)<span className='required-check'>*</span></div>
                    <div className='li-input-text'>
                        <input type='number' placeholder='경매하한가를 입력하세요 (숫자만 입력해주세요)' />
                    </div>
                </li>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>경매 시작일시<span className='required-check'>*</span></div>
                    <div>날짜</div>
                    <DatePicker selected={startdate} onChange={onChangeStartDate}></DatePicker>
                    <div>시간</div>
                    <TimePicker value={starttime} onChange={(time) => console.log(time)}></TimePicker>
                </li>
                <hr className='sub-hr' />
                <li>
                    <div className='li-title'>경매 종료일시<span className='required-check'>*</span></div>
                </li>
            </ul>
        </div>
    )
}
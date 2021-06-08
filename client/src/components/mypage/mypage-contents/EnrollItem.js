import 'assets/css/EnrollItem.scss'
import { useState } from 'react'
import UploadImg from 'assets/image/upload-image.png'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { getFormatDate } from 'lib/dateFormer'
import { enrollItemAPI } from 'lib/api'
import "react-datepicker/dist/react-datepicker.css";

export default function EnrollItem({ match }) {
    const [itemName, setItemName] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [lowestPrice, setLowestPrice] = useState('')
    const [imgFormData, setImgFormData] = useState(null)
    const [imgFile, setImgFile] = useState(UploadImg)
    const [startdate, setStartdate] = useState(null)
    const [enddate, setEnddate] = useState(null)
    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [submitResult, setSubmitResult] = useState(null)

    const onChangeItemName = (e) => setItemName(e.target.value)
    const onChangeItemDesc = (e) => setItemDesc(e.target.value)
    const onChangeLowestPrice = (e) => setLowestPrice(e.target.value)
    const onChangeStartDate = (date) => setStartdate(date)
    const onChangeEndDate = (date) => setEnddate(date)
    const onChangeStartTime = (time) => setStarttime(time)
    const onChangeEndTime = (time) => setEndtime(time)

    const validationFunc = () => {
        if (itemName === '' || lowestPrice === '' || imgFormData === null || startdate === null
            || starttime === '' || enddate === null || endtime === '')
            return false;
        return true;
    }

    const onClickSubmit = async () => {
        if (!validationFunc()) alert('필수항목을 모두 입력해주세요.')
        else {
            const formdata = new FormData();
            formdata.append('itemName', itemName);
            formdata.append('category', 'ELECTRONIC');
            formdata.append('lowerBoundPrice', lowestPrice);
            formdata.append('auctionStartDate', getFormatDate(startdate) + ' ' + starttime + ':00');
            formdata.append('auctionEndDate', getFormatDate(enddate) + ' ' + endtime + ':00');
            formdata.append('description', itemDesc);
            formdata.append('imagePath', 'default');
            formdata.append('imageFile', imgFormData);

            const result = await enrollItemAPI(formdata)
            setSubmitResult(result)
            alert('경매품 등록이 완료되었습니다.')
        }
    }

    const onChangeFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            const base64 = reader.result;
            if (file) setImgFormData(file);
            if (base64) setImgFile(base64)
        }
        reader.readAsDataURL(file);
    }

    return (
        <>
            {(submitResult !== null) ? <Redirect to={`${match.path}/mysale`} /> :
                <div className='mypage-contents'>
                    <h4 style={{ display: 'inline-block' }}>물품 등록하기</h4>
                    <div id='required-text'><span className='required-check'>*</span>필수항목</div>
                    <ul id='enroll-ul'>
                        <hr className='sub-hr' />
                        <li>
                            <div className='li-title'>상품명<span className='required-check'>*</span></div>
                            <div className='li-input-text'>
                                <input type='text' placeholder='상품명을 입력하세요' onChange={onChangeItemName} />
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
                                <input type='textarea' placeholder='상품 설명을 입력해주세요' onChange={onChangeItemDesc} />
                            </div>
                        </li>
                        <hr className='sub-hr' />
                        <li>
                            <div className='li-title'>경매 하한가(원)<span className='required-check'>*</span></div>
                            <div className='li-input-text'>
                                <input type='number' placeholder='경매하한가를 입력하세요 (숫자만 입력해주세요)' onChange={onChangeLowestPrice} />
                            </div>
                        </li>
                        <hr className='sub-hr' />
                        <li>
                            <div className='li-title'>경매 시작일시<span className='required-check'>*</span></div>
                            <div className='li-time-sub'>
                                <span className='li-sub-title'>날짜</span>
                                <DatePicker selected={startdate} onChange={onChangeStartDate}></DatePicker>
                            </div>
                            <div className='li-time-sub'>
                                <span className='li-sub-title'>시간</span>
                                <TimePicker value={starttime} onChange={onChangeStartTime}></TimePicker>
                            </div>
                        </li>
                        <hr className='sub-hr' />
                        <li>
                            <div className='li-title'>경매 종료일시<span className='required-check'>*</span></div>
                            <div className='li-time-sub'>
                                <span className='li-sub-title'>날짜</span>
                                <DatePicker selected={enddate} onChange={onChangeEndDate}></DatePicker>
                            </div>
                            <div className='li-time-sub'>
                                <span className='li-sub-title'>시간</span>
                                <TimePicker value={endtime} onChange={onChangeEndTime}></TimePicker>
                            </div>
                        </li>
                        <li id='li-submit'>
                            <Button size='lg' variant='danger' onClick={onClickSubmit}>등록하기</Button>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}
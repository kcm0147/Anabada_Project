import 'assets/css/EnrollItem.scss'

export default function EnrollItem() {
    return (
        <div className='mypage-contents'>
            <h4 style={{ display: 'inline-block' }}>물품 등록하기</h4>
            <hr id='top-hr' />
            <div id='required-text'><span className='required-check'>*</span>필수항목</div>
            <ul id='enroll-ul'>
                <li>
                    <div className='li-title'>상품명<span className='required-check'>*</span></div>
                    <div>
                        <input type='text'></input>
                    </div>
                </li>
                <hr className='sub-hr' />
            </ul>
        </div>
    )
}
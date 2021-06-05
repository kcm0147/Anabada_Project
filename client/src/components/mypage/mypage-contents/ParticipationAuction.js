import 'assets/css/ParticipationAuction.scss'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export default function ParticipationAuction() {

    const [startpagenum, setStartpagenum] = useState(1)
    const [curpagenum, setCurpagenum] = useState(1)

    return (
        <div className='mypage-contents'>
            <h4>경매 참여 내역 조회</h4>
            <table className='table-filter'>
                <thead>
                    <tr>
                        <th>상품 사진</th>
                        <th>상품 정보</th>
                        <th>경매 날짜</th>
                        <th>최종 경매가(원)</th>
                        <th>최종 입찰 여부</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>아이폰 max</td>
                        <td>2021.06.05</td>
                        <td>1,000,000</td>
                        <td>입찰 완료</td>
                    </tr>
                </tbody>
            </table>
            <div className='table-page-section'>
                <Button variant='dark' size='sm'><strong>&#60;</strong></Button>
                <span>{startpagenum}</span>
                <span>{startpagenum + 1}</span>
                <span>{startpagenum + 2}</span>
                <span>{startpagenum + 3}</span>
                <span>{startpagenum + 4}</span>
                <Button variant='dark' size='sm'><strong>&#62;</strong></Button>
            </div >
        </div >
    )
}
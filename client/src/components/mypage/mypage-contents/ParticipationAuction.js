import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useState } from 'react'

export default function ParticipationAuction() {

    const [startpagenum, setStartpagenum] = useState(1)
    const [curpagenum, setCurpagenum] = useState(1)

    const headary = ['상품 사진', '상품 정보', '경매 날짜', '최종 경매가(원)', '최종 입찰 여부']
    const contentary = [
        ['1', '아이폰 맥스', '2021.06.05', '1,000,000', '입찰 완료']
    ]   //temporary data

    return (
        <div className='mypage-contents'>
            <h4>경매 참여 내역 조회</h4>
            <Table headary={headary} contentary={contentary} />
            <TablePagenumSection startpagenum={startpagenum} />
        </div >
    )
}
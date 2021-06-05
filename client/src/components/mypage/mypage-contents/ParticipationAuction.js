import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useState, useEffect } from 'react'

import { participationlistAPI } from 'lib/api'

export default function ParticipationAuction() {

    const [startpagenum, setStartpagenum] = useState(1)
    const [curpagenum, setCurpagenum] = useState(1)

    const headary = ['상품 사진', '상품명', '경매 날짜', '최종 경매가(원)', '낙찰 여부']
    const contentary = []

    useEffect(async () => {
        participationlistAPI().then((res) =>
            console.log(res)
        )
    }, [])

    return (
        <div className='mypage-contents'>
            <h4>경매 참여 내역 조회</h4>
            <Table headary={headary} contentary={contentary} />
            <TablePagenumSection startpagenum={startpagenum} curpagenum={curpagenum}
                setCurpagenum={setCurpagenum} />
        </div >
    )
}
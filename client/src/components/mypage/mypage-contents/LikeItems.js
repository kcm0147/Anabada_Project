import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useEffect, useState } from 'react'

export default function LikeItems() {
    const [startpagenum, setStartpagenum] = useState(1)
    const [curpagenum, setCurpagenum] = useState(1)

    const headary = ['상품 사진', '상품명', '카테고리', '경매 하한가(원)', '경매 시작일시', '경매 종료일시']
    const contentary = []

    return (
        <div className='mypage-contents'>
            <h4>나의 찜한 목록 조회</h4>
            <Table headary={headary} contentary={contentary} />
            <TablePagenumSection startpagenum={startpagenum} curpagenum={curpagenum}
                setCurpagenum={setCurpagenum} />
        </div >
    )
}
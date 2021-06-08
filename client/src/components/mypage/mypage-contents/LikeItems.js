import LoadingView from 'components/LoadingView'
import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useEffect, useState } from 'react'
import { wishItemsAPI } from 'lib/api'

export default function LikeItems() {

    const [loading, setLoading] = useState(true)
    const [endpagenum, setEndpagenum] = useState(0)
    const [startpagenum, setStartpagenum] = useState(1)
    const [curpagenum, setCurpagenum] = useState(1)
    const [contentary, setContentary] = useState([])

    const headary = ['상품 사진', '상품명', '카테고리', '경매 하한가(원)', '경매 시작일시', '경매 종료일시']

    const changeCurpagenum = (number) => {
        if (number > endpagenum || number < startpagenum) return
        setCurpagenum(number)
        if (number > startpagenum + 4) setStartpagenum(startpagenum + 5)
    }

    useEffect(() => {
        const axiosing = async () => {
            const result = await wishItemsAPI()
            const endnum = result.length / 10 + ((result.length % 10 > 0) ? 1 : 0)
            setLoading(false)
            setEndpagenum((endnum === 0) ? 1 : endnum)
            setContentary(result)
        }
        axiosing()
    }, [])

    return (
        <div className='mypage-contents'>
            <h4>나의 찜한 목록 조회</h4>
            {
                loading ? <LoadingView /> :
                    <div>
                        <Table headary={headary} contentary={contentary} resultPage={false} />
                        <TablePagenumSection startpagenum={startpagenum} curpagenum={curpagenum}
                            endpagenum={endpagenum} changeCurpagenum={changeCurpagenum} />
                    </div>
            }
        </div>
    )
}
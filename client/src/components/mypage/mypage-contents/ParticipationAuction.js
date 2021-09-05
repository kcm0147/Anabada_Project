import LoadingView from 'components/LoadingView'
import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { participateItemsRequest } from 'redux/item/itemSlice'

export default function ParticipationAuction() {

  const [endpagenum, setEndpagenum] = useState(0)
  const [startpagenum, setStartpagenum] = useState(1)
  const [curpagenum, setCurpagenum] = useState(1)

  const headary = ['상품 사진', '상품명', '카테고리', '입찰 일시', '최종 낙찰가(원)', '최종 입찰가(원)', '낙찰 여부']
  const dispatch = useDispatch()
  let loading = useSelector(state => state.ITEM.loading)
  let contentary = useSelector(state => state.ITEM.data)

  const changeCurpagenum = (number) => {
    if (number > endpagenum || number < startpagenum) return
    setCurpagenum(number)
    if (number > startpagenum + 4) setStartpagenum(startpagenum + 5)
  }

  useEffect(() => {
    dispatch(participateItemsRequest())
    const endnum = contentary.length / 10 + ((contentary.length % 10 > 0) ? 1 : 0)
    setEndpagenum((endnum === 0) ? 1 : endnum)
  }, [dispatch, contentary.length])

  return (
    <div className='mypage-contents'>
      <h4>경매 참여 내역 조회</h4>
      {
        loading ? <LoadingView /> :
          <div>
            <Table headary={headary} contentary={contentary} resultPage={true} />
            <TablePagenumSection startpagenum={startpagenum} curpagenum={curpagenum}
              endpagenum={endpagenum} changeCurpagenum={changeCurpagenum} />
          </div>
      }
    </div >
  )
}
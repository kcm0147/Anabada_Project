import LoadingView from 'components/LoadingView'
import Table from 'components/mypage/mypage-contents/table-components/Table'
import TablePagenumSection from 'components/mypage/mypage-contents/table-components/TablePagenumSection'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishItemsRequest } from 'redux/item/itemSlice'

export default function LikeItems() {

  const [endpagenum, setEndpagenum] = useState(0)
  const [startpagenum, setStartpagenum] = useState(1)
  const [curpagenum, setCurpagenum] = useState(1)

  const headary = ['상품 사진', '상품명', '카테고리', '경매 하한가(원)', '경매 시작일시', '경매 종료일시']
  const dispatch = useDispatch();

  let contentary = useSelector(state => state.ITEM.data)
  let loading = useSelector(state => state.ITEM.loading)

  const changeCurpagenum = (number) => {
    if (number > endpagenum || number < startpagenum) return
    setCurpagenum(number)
    if (number > startpagenum + 4) setStartpagenum(startpagenum + 5)
  }

  useEffect(() => {

    dispatch(getWishItemsRequest());
    const endnum = contentary.length / 10 + ((contentary.length % 10 > 0) ? 1 : 0)
    setEndpagenum((endnum === 0) ? 1 : endnum)
  }, [dispatch, contentary.length])

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
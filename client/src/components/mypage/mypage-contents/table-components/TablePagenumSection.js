import 'assets/css/TablePagenumSection.scss'
import Button from 'react-bootstrap/Button'

export default function TablePagenumSection(props) {

    const onClickNumber = (e) => {
        props.changeCurpagenum(Number(e.target.innerText))
    }

    const onClickLeftbar = () => props.changeCurpagenum(props.curpagenum - 1)
    const onClickRightbar = () => props.changeCurpagenum(props.curpagenum + 1)

    const rederingPagenum = () => {
        let result = [], limit = Math.min(props.startpagenum + 4, props.endpagenum)
        for (let compnum = props.startpagenum; compnum <= limit; compnum++) {
            result.push(<span className={compnum === props.curpagenum ? 'active-span' : 'inactive-span'}
                onClick={onClickNumber} key={compnum}>{compnum}</span>)
        }
        return result
    }

    return (
        <div className='table-page-section'>
            <Button variant='dark' size='sm' onClick={onClickLeftbar}><strong>&#60;</strong></Button>
            {rederingPagenum()}
            <Button variant='dark' size='sm' onClick={onClickRightbar}><strong>&#62;</strong></Button>
        </div >
    )
}
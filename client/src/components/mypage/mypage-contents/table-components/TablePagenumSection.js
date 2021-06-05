import 'assets/css/TablePagenumSection.scss'
import Button from 'react-bootstrap/Button'

export default function TablePagenumSection(props) {

    const onClickNumber = (e) => {
        props.setCurpagenum(Number(e.target.innerText))
    }

    const rederingPagenum = () => {
        let result = [], compnum;
        for (let i = 0; i < 5; i++) {
            compnum = props.startpagenum + i;
            result.push(<span className={compnum === props.curpagenum ? 'active-span' : 'inactive-span'}
                onClick={onClickNumber}>{compnum}</span>)
        }
        return result
    }

    return (
        <div className='table-page-section'>
            <Button variant='dark' size='sm'><strong>&#60;</strong></Button>
            {rederingPagenum()}
            <Button variant='dark' size='sm'><strong>&#62;</strong></Button>
        </div >
    )
}
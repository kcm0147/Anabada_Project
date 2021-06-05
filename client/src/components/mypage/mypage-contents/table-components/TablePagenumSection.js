import 'assets/css/TablePagenumSection.scss'
import Button from 'react-bootstrap/Button'

export default function TablePagenumSection({ startpagenum }) {
    return (
        <div className='table-page-section'>
            <Button variant='dark' size='sm'><strong>&#60;</strong></Button>
            <span>{startpagenum}</span>
            <span>{startpagenum + 1}</span>
            <span>{startpagenum + 2}</span>
            <span>{startpagenum + 3}</span>
            <span>{startpagenum + 4}</span>
            <Button variant='dark' size='sm'><strong>&#62;</strong></Button>
        </div >
    )
}
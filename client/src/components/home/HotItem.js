import { Col } from 'react-bootstrap'
import 'assets/css/Hotitem.scss'
import NoImg from 'assets/image/no-image.png'

export default function Hotitem(props) {
    return (
        <Col className='item-style'>
            <div>
                <img src={NoImg} alt='임시 이미지' />
                <div className='item-description'>
                    {props.name}
                </div>
            </div>
        </Col>
    )
}
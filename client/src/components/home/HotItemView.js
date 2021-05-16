import { Row, Col } from 'react-bootstrap'
import HotItem from 'components/home/HotItem'
import 'assets/css/HotItemView.scss'

export default function HotItemView() {
    return (
        <div id='hot-item-section'>
            <div id='main-title'>인기 경매품 목록</div>
            <Row>
                <Col>
                    <HotItem name='Item 1' />
                    <HotItem name='Item 2' />
                </Col>
            </Row>
        </div>
    )
}
import { Row } from 'react-bootstrap'
import HotItem from 'components/home/HotItem'
import 'assets/css/HotItemView.scss'

export default function HotItemView() {
    return (
        <div id='hot-item-section'>
            <div id='sub-item-section'>
                <div id='main-title'>인기 경매품 목록</div>
                <Row id='row-style'>
                    <HotItem name='Item 1' />
                    <HotItem name='Item 2' />
                    <HotItem name='Item 3' />
                    <HotItem name='Item 4' />
                    <HotItem name='Item 5' />
                    <HotItem name='Item 6' />
                    <HotItem name='Item 7' />
                    <HotItem name='Item 8' />
                </Row>
            </div>
        </div>
    )
}
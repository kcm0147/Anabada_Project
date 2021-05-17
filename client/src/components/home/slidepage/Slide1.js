import 'assets/css/Slide1.scss'
import Slide1Img from 'assets/image/slide1.png'

export default function Slide1() {
    return (
        <div className='entire-slide1'>
            <div id='desc-section'>
                <div id='title'>
                    합리적인 가격에 사고 팔자
                </div>
                <div id='desc'>
                    팔고 싶은 물건을 최대가로, <br />
                    사고 싶은 물건을 합리적인 가격에, <br />
                    아나바다 경매 시스템에서 만나보세요
                </div>
            </div>
            <img src={Slide1Img} />
        </div>
    );
}
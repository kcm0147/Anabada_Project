import 'assets/css/Slide2.scss'
import Slide2Img from 'assets/image/slide2.svg'

export default function Slide1() {
    return (
        <div className='entire-slide2'>
            <img src={Slide2Img} />
            <div>
                <div id='title'>
                    실시간 경매 시스템으로 보다 공정하게
                </div>
                <div id='desc2'>
                    누구나 참여할 수 있고 <br />
                    실시간 경매 중계를 통해 <br />
                    공정한 경매 시장을 경험해보세요
                </div>
            </div>
        </div>
    );
}
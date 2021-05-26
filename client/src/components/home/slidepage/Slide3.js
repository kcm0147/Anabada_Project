import 'assets/css/Slide3.scss'
import Slide3Img from 'assets/image/slide3.svg'

export default function Slide1() {
    return (
        <div className='entire-slide3'>
            <div>
                <div id='title'>
                    나의 물건을 더 값지게
                </div>
                <div>
                    내 쓸모 없는 물건이 <br />
                    누구에겐 필요한 물건으로 <br />
                    내 소장품들을 더 높은 가치로 평가받아보세요
                </div>
            </div>
            <img src={Slide3Img} alt='slide3-img' />
        </div>
    );
}
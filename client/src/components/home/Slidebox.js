import { useEffect, useRef } from 'react'
import 'assets/css/Slidebox.css'

import Slide1 from 'components/home/slidepage/Slide1.js'
import Slide2 from 'components/home/slidepage/Slide2.js'
import Slide3 from 'components/home/slidepage/Slide3.js'

export default function Slidebox() {

    let curslide = 0;   // 현재 slide index (0부터 시작)
    const pagetotals = 3;   // slide page 갯수

    let slide01 = useRef();
    let slide02 = useRef();
    let slide03 = useRef();

    useEffect(() => {
        slide01.current.checked = true;
    }, [])

    const onClickLeftSlide = () => {
        switch (curslide) {
            case 0:
                slide01.current.checked = false;
                slide03.current.checked = true;
                break;
            case 1:
                slide02.current.checked = false;
                slide01.current.checked = true;
                break;
            case 2:
                slide03.current.checked = false;
                slide02.current.checked = true;
                break;
            default:
                slide01.current.checked = true;
        }
        curslide = (curslide + pagetotals - 1) % pagetotals;
    }

    const onClickRightSlide = () => {
        switch (curslide) {
            case 0:
                slide01.current.checked = false;
                slide02.current.checked = true;
                break;
            case 1:
                slide02.current.checked = false;
                slide03.current.checked = true;
                break;
            case 2:
                slide03.current.checked = false;
                slide01.current.checked = true;
                break;
            default:
                slide01.current.checked = true;
        }
        curslide = (curslide + 1) % pagetotals;
    }

    return (
        <div className='slidebox'>
            <input type='radio' name='slide' id='slide01' ref={slide01} />
            <input type='radio' name='slide' id='slide02' ref={slide02} />
            <input type='radio' name='slide' id='slide03' ref={slide03} />
            <ul className='slide-list'>
                <button className='left' onClick={onClickLeftSlide}>&#60;</button>
                <button className='right' onClick={onClickRightSlide}>&#62;</button>
                <li className='slide-item'>
                    <Slide1 />  {/* each slide */}
                </li>
                <li className='slide-item'>
                    <Slide2 />  {/* each slide */}
                </li>
                <li className='slide-item'>
                    <Slide3 />  {/* each slide */}
                </li>
            </ul>
        </div>
    );
}
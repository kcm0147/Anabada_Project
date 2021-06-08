import 'assets/css/Footer.scss'
import { FaGithubSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='footer-section'>
            <div id='footer-first-section'>
                <div>
                    <div id='footer-main-title'>ANABADA</div>
                    <div id='footer-main-desc'>당신의 상품들에 상상하지 못할 가격을 매겨 보세요</div>
                    <div>
                        <a href='https://github.com/kcm0147/Anabada_Project' target='_blank'>
                            <FaGithubSquare id='github-icon' />
                        </a>
                    </div>
                </div>
                <div>
                    <div id='footer-dev'>Developer</div>
                    <div>
                        Changmook
                    </div>
                    <div>
                        Jeongseok
                    </div>
                    <div>
                        Hyunsoo
                    </div>
                    <div>
                        Hyunseung
                    </div>
                </div>
            </div>
            <div id='footer-second-section' >
                Copyright © <span>{new Date().getFullYear()}</span> <strong>Gongdaeguhogwan</strong> @ KNU
            </div>
        </div>
    )
}
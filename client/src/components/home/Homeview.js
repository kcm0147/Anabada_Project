import Footer from 'components/Footer'
import Slidebox from 'components/home/Slidebox'
import HotItemView from 'components/home/HotItemView'
import Navbar from 'components/nav/Navbar'

export default function Homeview() {
    return (
        <div>
            <Navbar />
            <Slidebox />
            <HotItemView />
            <Footer />
        </div>
    )
}
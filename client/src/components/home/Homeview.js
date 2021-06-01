import Footer from 'components/Footer'
import Slidebox from 'components/home/Slidebox'
import HotItemView from 'components/home/HotItemView'
import Navbar from 'components/nav/Navbar'
import PopularSearch from 'components/home/PopularSearch'

export default function Homeview() {
    return (
        <div>
            <Navbar />
            <Slidebox />
            <HotItemView />
            <PopularSearch />
            <Footer />
        </div>
    )
}
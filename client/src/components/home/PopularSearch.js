import 'assets/css/PopularSearch.scss'
import { useState, useEffect } from 'react'
import { bestSearchAPI } from 'lib/api'

export default function PopularSearch() {

    const [favsearch, setFavsearch] = useState([])

    useEffect(async () => {
        bestSearchAPI().then((res) => {
            console.log(res)
        });
    }, [])

    useEffect(() => {
        console.log(favsearch)
    })

    return (
        <div id='popular-search-section'>
            <div id='popular-search-maintitle'>
                인기 경매 검색어
            </div>
            <div id='rank-section'>
            </div>
        </div>
    )
}
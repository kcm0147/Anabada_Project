import 'assets/css/PopularSearch.scss'
import { useState, useEffect } from 'react'
import { bestSearchAPI } from 'lib/api'

export default function PopularSearch() {

    const [favsearch, setFavsearch] = useState([])

    useEffect(() => {
        const axiosing = async () => {
            const searchresult = await bestSearchAPI();
            setFavsearch(searchresult)
        }
        axiosing()
    }, [])

    const renderingSearchWord = () => {
        const result = [];
        let key = 0;
        if (favsearch === null || favsearch === undefined) return result
        for (const comp of favsearch)
            result.push(<span key={key++}>{comp.word}</span>)
        return result;
    }

    return (
        <div id='popular-search-section'>
            <div id='popular-search-maintitle'>
                인기 경매 검색어
            </div>
            <div id='rank-section'>
                {renderingSearchWord()}
            </div>
        </div>
    )
}
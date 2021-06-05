import 'assets/css/PopularSearch.scss'
import { useState, useEffect } from 'react'
import { bestSearchAPI } from 'lib/api'

export default function PopularSearch() {

    const [favsearch, setFavsearch] = useState([])

    useEffect(async () => {
        const searchresult = await bestSearchAPI();
        setFavsearch(searchresult)
    }, [])

    const renderingSearchWord = () => {
        const result = [];
        if (favsearch === null || favsearch === undefined) return result
        for (const comp of favsearch)
            result.push(<span>{comp.word}</span>)
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
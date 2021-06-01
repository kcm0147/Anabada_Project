import 'assets/css/PopularSearch.scss'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function PopularSearch() {

    const [favsearch, setFavsearch] = useState([])

    useEffect(() => {
        axios.post('/api/item/favoriteSearch', {}, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => console.log(res))    // api request testing
    }, [])

    return (
        <div id='popular-search-section'>
            <div id='popular-search-maintitle'>
                인기 경매 검색어
            </div>
            <div id='rank-section'>
                <span>마르지엘라</span>
                <span>자전거</span>
                <span>나이키</span>
                <span>장식품</span>
                <span>신발</span>
                <span>루이비똥</span>
            </div>
        </div>
    )
}
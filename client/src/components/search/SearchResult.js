import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { getAllItemsRequest } from "redux/search/searchSlice";
import Item from "./Item";

const SearchResult = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchLoading = useSelector((s) => s.SEARCH.loading);
  const searchData = useSelector((s) => s.SEARCH.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const search = location.search;
    setSearchQuery(search.split(`=`)[1]);
    dispatch(getAllItemsRequest());
  }, [dispatch, location.search]);

  useEffect(() => {
    if (searchData) {
      setSearchResult(
        searchData.filter((item) => item.itemName.includes(searchQuery))
      );
    }
  }, [searchData, searchQuery]);

  const searchResultNode = useMemo(() => {
    return (
      <ul id="row-style">
        {searchResult.map((item, idx) => (
          <Link to={`/item/${item.itemId}`}>
            <Item name={item.itemName} key={idx} />
          </Link>
        ))}
      </ul>
    );
  }, [searchResult]);

  const noResultNode = useMemo(() => {
    return <p>검색 결과가 없습니다.</p>;
  }, []);

  return (
    <div id="hot-item-section">
      <div id="sub-item-section">
        <div id="main-title">"{decodeURI(searchQuery)}" 검색 결과</div>
        {searchLoading ? "로딩중..." : searchResultNode}
        {!searchLoading && searchResult.length === 0 && noResultNode}
      </div>
    </div>
  );
};

export default SearchResult;

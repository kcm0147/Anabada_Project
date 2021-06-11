import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { getItemsWithNameRequest } from "redux/item/itemSlice";
import Item from "./Item";

const SearchResult = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const itemsSearchLoading = useSelector((s) => s.ITEM.loading);
  const itemsSearchData = useSelector((s) => s.ITEM.data);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const search = location.search;
    setSearchQuery(decodeURI(search.split(`=`)[1]));
    dispatch(getItemsWithNameRequest({ includedName: searchQuery }));
  }, [dispatch, location.search, searchQuery]);

  return (
    <div id="hot-item-section">
      <div id="sub-item-section">
        <div id="main-title">"{searchQuery}" 검색 결과</div>
        {itemsSearchLoading ? (
          <p>로딩중...</p>
        ) : itemsSearchData === null || itemsSearchData.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <ul id="row-style">
            {itemsSearchData.map((item, idx) => (
              <Link to={`/item/${item.itemId}`}>
                <Item
                  name={item.itemName}
                  img={`http://18.222.240.132:8089/images/${item.itemImage}`}
                  key={idx}
                />
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

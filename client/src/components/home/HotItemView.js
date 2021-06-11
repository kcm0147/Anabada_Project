import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBest8ItemsRequest } from "redux/item/itemSlice";
import HotItem from "components/home/HotItem";
import "assets/css/HotItemView.scss";

const HotItemView = () => {
    const dispatch = useDispatch();
    const bestItemsData = useSelector((s) => s.ITEM.data);

    useEffect(() => {
        dispatch(getBest8ItemsRequest());
    }, [dispatch]);

    return (
        <div id="hot-item-section">
            <div id="sub-item-section">
                <div id="main-title">인기 경매품 목록</div>
                <ul id="row-style">
                    {!bestItemsData ? (
                        <p>"인기 경매품 로딩중..."</p>
                    ) : (
                        bestItemsData.map((item, idx) => (
                            <Link to={`/item/${item.itemId}`}>
                                <HotItem
                                    name={item.itemName}
                                    img={`http://18.222.240.132:8089/images/${item.itemImage}`}
                                    key={idx}
                                />
                            </Link>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default HotItemView;

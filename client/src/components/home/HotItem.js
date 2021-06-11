import React from "react";
import { Col } from "react-bootstrap";
import "assets/css/Item.scss";

const HotItem = ({ name, img }) => {
    return (
        <Col className="item-style">
            <div>
                <img src={img} alt="상품 이미지" width="200px" height="200px" />
                <div className="item-description">{name}</div>
            </div>
        </Col>
    );
};

export default HotItem;

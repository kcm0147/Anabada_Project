import React from "react";
import { Col } from "react-bootstrap";
import "assets/css/Item.scss";
import NoImg from "assets/image/no-image.png";

const Item = (props) => {
  return (
    <Col className="item-style">
      <div>
        <img src={NoImg} alt="임시 이미지" />
        <div className="item-description">{props.name}</div>
      </div>
    </Col>
  );
};

export default Item;

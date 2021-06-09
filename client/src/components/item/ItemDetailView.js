import React, { useState, useEffect, useMemo } from "react";
import Footer from "components/Footer";
import Navbar from "components/nav/Navbar";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsRequest } from "redux/item/itemSlice";
import NoImg from "assets/image/no-image.png";
import { BsClock, BsClockHistory, BsHeart, BsHammer } from "react-icons/bs";

const ItemDetailView = ({ match }) => {
  const dispatch = useDispatch();
  const allItemsData = useSelector((s) => s.ITEM.data);
  const [item, setItem] = useState(null);

  useEffect(() => {
    dispatch(getAllItemsRequest());
  }, [dispatch]);

  useEffect(() => {
    setItem(
      allItemsData.find(
        (item) => Number(item.itemId) === Number(match.params.itemId)
      )
    );
    console.log(item);
  }, [match, allItemsData, item]);

  const itemDetailNode = useMemo(() => {
    return !item ? (
      "로딩중..."
    ) : (
      <>
        <Container
          style={{
            maxWidth: "720px",
          }}
        >
          <Row>
            <Col>
              <img src={NoImg} width="256px" height="256px" alt="" />
            </Col>
            <Col
              xs={7}
              style={{
                textAlign: "left",
              }}
            >
              <h1>{item.itemName} </h1>
              <h5>
                <Badge
                  style={{
                    backgroundColor: "pink",
                  }}
                >
                  {item.category}
                </Badge>
              </h5>
              <p>{item.description || "상세 설명이 없습니다."}</p>
              <br />
              <h4>
                시작가{" "}
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {item.lowerBoundPrice}
                </span>
                원 → 현재가{" "}
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {item.currentPrice}
                </span>
                원!
              </h4>
              <br />
              <p>
                <BsClockHistory /> 경매 시작일: {item.auctionStartDate}
                <br />
                <BsClock /> 경매 마감일: {item.auctionEndDate}
              </p>
              <br />
              <ButtonGroup>
                <Button variant="danger" size="lg">
                  <BsHeart /> 찜하기
                </Button>
                <Button variant="danger" size="lg">
                  {item.interestCnt}
                </Button>
              </ButtonGroup>{" "}
              <ButtonGroup>
                <Button variant="success" size="lg">
                  <BsHammer /> 입찰하기
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }, [item]);

  return (
    <div>
      <Navbar />
      <div id="hot-item-section">
        <div id="sub-item-section">{itemDetailNode}</div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemDetailView;

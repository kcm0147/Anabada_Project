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
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsRequest, addWishItemRequest } from "redux/item/itemSlice";
import NoImg from "assets/image/no-image.png";
import { BsClock, BsClockHistory, BsHeart, BsHammer } from "react-icons/bs";

const ItemDetailView = ({ match }) => {
  const dispatch = useDispatch();
  const allItemsData = useSelector((s) => s.ITEM.data);
  const [item, setItem] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyPrice, setBuyPrice] = useState(0);

  useEffect(() => {
    dispatch(getAllItemsRequest());
  }, [dispatch]);

  useEffect(() => {
    setItem(
      allItemsData.find(
        (item) => Number(item.itemId) === Number(match.params.itemId)
      )
    );
    if (item) {
      setBuyPrice(item.currentPrice);
    }
  }, [match, allItemsData, item]);

  const handleOpenBuyModal = () => setShowBuyModal(true);
  const handleCloseBuyModal = () => setShowBuyModal(false);

  const buyModal = useMemo(() => {
    const handleBuyItem = () => {};

    return (
      <Modal show={showBuyModal} onHide={handleCloseBuyModal}>
        <Modal.Header>
          <Modal.Title>{item && item.itemName} 입찰하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          입찰 가격을 입력하세요. 입찰 가격은 현재 가격인{" "}
          {item && item.currentPrice}원 보다 높아야 합니다.
          <br />
          <input
            type="number"
            placeholder="입찰 가격"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseBuyModal}>
            취소
          </Button>
          <Button variant="success" onClick={handleBuyItem}>
            이 가격에 입찰하기
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }, [buyPrice, item, showBuyModal]);

  const itemDetailNode = useMemo(() => {
    const handleInterestButtonClick = () => {
      dispatch(addWishItemRequest({ ItemId: item.itemId }));
    };

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
                <Button
                  variant="danger"
                  size="lg"
                  onClick={handleInterestButtonClick}
                >
                  <BsHeart /> 찜하기
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={handleInterestButtonClick}
                >
                  {item.interestCnt}
                </Button>
              </ButtonGroup>{" "}
              <ButtonGroup>
                <Button
                  variant="success"
                  size="lg"
                  onClick={handleOpenBuyModal}
                >
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
    <>
      <div>
        <Navbar />
        <div id="hot-item-section">
          <div id="sub-item-section">{itemDetailNode}</div>
        </div>
        <Footer />
      </div>
      {buyModal}
    </>
  );
};

export default ItemDetailView;

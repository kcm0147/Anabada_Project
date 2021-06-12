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
import {
  getAllItemsRequest,
  addWishItemRequest,
  buyItemRequest,
} from "redux/item/itemSlice";
import { BsClock, BsClockHistory, BsHeart, BsHammer } from "react-icons/bs";

const ItemDetailView = ({ match }) => {
  const dispatch = useDispatch();
  const allItemsData = useSelector((s) => s.ITEM.data);
  const [item, setItem] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyPrice, setBuyPrice] = useState("");
  const [isEndBid, setIsEndBid] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(getAllItemsRequest());
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    setItem(
      allItemsData.find(
        (item) => Number(item.itemId) === Number(match.params.itemId)
      )
    );
  }, [match, allItemsData]);

  useEffect(() => {
    if (item) {
      setIsEndBid(new Date(item.auctionEndDate) < new Date());
    }
  }, [item]);

  const handleOpenBuyModal = () => setShowBuyModal(true);
  const handleCloseBuyModal = () => setShowBuyModal(false);

  const buyModal = useMemo(() => {
    const handleBuyItem = () => {
      if (item.currentPrice >= Number(buyPrice)) {
        alert("입찰 가격은 현재 가격보다 높아야 합니다.");
        return;
      }
      if (
        new Date(item.auctionStartDate) > new Date() ||
        new Date() > new Date(item.auctionEndDate)
      ) {
        alert("지금은 입찰 기간이 아닙니다.");
        return;
      }
      dispatch(
        buyItemRequest({
          itemId: item.itemId,
          price: Number(buyPrice),
        })
      );
      handleCloseBuyModal();
    };

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
  }, [buyPrice, item, showBuyModal, dispatch]);

  const itemDetailNode = useMemo(() => {
    const handleInterestButtonClick = () => {
      dispatch(addWishItemRequest({ itemId: item.itemId }));
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
              <img
                src={`http://18.222.240.132:8089/images/${item.itemImage}`}
                width="256px"
                height="256px"
                alt=""
              />
            </Col>
            <Col
              xs={7}
              style={{
                textAlign: "left",
              }}
            >
              {isEndBid ? (
                <>
                  <h1>
                    <strike>{item.itemName}</strike>
                  </h1>
                  <h3>종료된 경매입니다.</h3>
                </>
              ) : (
                <h1>{item.itemName} </h1>
              )}
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
              <p
                style={{
                  margin: 0,
                }}
              >
                실시간 갱신 중!
              </p>
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
                  disabled={isEndBid}
                >
                  <BsHeart /> 찜하기
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={handleInterestButtonClick}
                  disabled={isEndBid}
                >
                  {item.interestCnt}
                </Button>
              </ButtonGroup>{" "}
              <ButtonGroup>
                <Button
                  variant="success"
                  size="lg"
                  onClick={handleOpenBuyModal}
                  disabled={isEndBid}
                >
                  <BsHammer /> 입찰하기
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }, [item, isEndBid, dispatch]);

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

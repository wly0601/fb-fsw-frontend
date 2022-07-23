/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container, Row, Card, Col, Button, Alert,
} from 'react-bootstrap';
import { BsBookmark, BsTropicalStorm } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import { createWishlistBuyer } from '../../../redux/actions/createWishlist';
import VerticalModals from '../Modal/Modal';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardBargain({
  productById, categoryName, active, transaction,
}) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [showBtn, setShowBtn] = useState(null);
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);

  const activeButton = () => {
    setShowBtn(active);
  };

  useEffect(() => {
    activeButton();
  }, [active]);

  const handleWhiteBookmark = (e) => {
    setShowBtn(true);
    dispatch(createWishlistBuyer(productById, false));
    setShow(true);
    setAdd(true);
  };

  const handleBlackBookmark = (e) => {
    setShowBtn(false);
    dispatch(createWishlistBuyer(productById, true));
    setShow(true);
    setAdd(false);
  };

  return (
    <>
      {show && (add ? (
        <Alert variant="success" className="alert-wishlist" onClose={() => setShow(false)} dismissible>
          Berhasil Menambahkan Daftar Simpan
        </Alert>
      ) : (
        <Alert variant="warning" className="alert-wishlist" onClose={() => setShow(false)} dismissible>
          Berhasil Menghapus Daftar Simpan
        </Alert>
      ))}
      <Container>
        <Card className="card-bargain" style={{ borderRadius: '16px' }}>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <h5 style={{ fontWeight: 'bold' }}>{productById.name}</h5>
              </Col>
              <Col xs={2}>
                {!productById.disableButton && (!showBtn ? (
                  <Button className="btn-bookmark" onClick={handleWhiteBookmark}>
                    <BsBookmark className="icon-bookmark" />
                  </Button>
                ) : (
                  <Button className="btn-bookmark" onClick={handleBlackBookmark}>
                    <FaBookmark className="icon-bookmark" />
                  </Button>
                ))}
              </Col>
            </Row>
            <p style={{ color: 'grey' }}>{categoryName.name}</p>
            <p>{priceFormat(productById.price)}</p>
            <Row>
              <VerticalModals
                transaction={transaction}
                productById={productById}
                show={modalShow}
                onHide={() => { return setModalShow(false); }}
              />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default CardBargain;

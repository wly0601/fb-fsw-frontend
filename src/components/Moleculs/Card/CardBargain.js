import React, { useState } from 'react';
import {
  Container,
  Row,
  Card,
  Col,
} from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import VerticalModals from '../Modal/Modal';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardBargain({ productById, categoryName }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Card className="card-bargain" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <Row>
            <Col xs={10}>
              <h5 style={{ fontWeight: 'bold' }}>{productById.name}</h5>
            </Col>
            <Col xs={2}>
              <BsBookmark />
            </Col>
          </Row>
          <p style={{ color: 'grey' }}>{categoryName.name}</p>
          <p>{priceFormat(productById.price)}</p>
          <Row>
            <VerticalModals
              productById={productById}
              show={modalShow}
              onHide={() => { return setModalShow(false); }}
            />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardBargain;

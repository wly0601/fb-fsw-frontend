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

function CardBargain({ oneProduct }) {
  console.log(oneProduct.name);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Card className="card-bargain" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <h5 style={{ fontWeight: 'bold' }}>{oneProduct.name}</h5>
          {oneProduct.category && (
            <p style={{ color: 'grey' }}>{oneProduct.category.name}</p>
          )}
          {/* <p style={{ color: 'grey' }}>{categoryName.name}</p> */}
          <p>{priceFormat(oneProduct.price)}</p>
          <Row>
            <VerticalModals
              oneProduct={oneProduct}
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

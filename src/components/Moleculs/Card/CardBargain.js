import React, { useState } from 'react';
import {
  Container,
  Row,
  Card,
} from 'react-bootstrap';
import VerticalModals from '../Modal/Modal';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardBargain({ productById, categoryName }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Card className="card-bargain">
        <Card.Body>
          <h5 style={{ fontWeight: 'bold' }}>{productById.name}</h5>
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

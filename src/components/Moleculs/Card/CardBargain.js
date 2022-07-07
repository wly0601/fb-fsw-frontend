import React, { useState } from 'react';
import {
  Container,
  Row,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalModals from '../Modal/Modal';
import './Card.Module.css';

function CardBargain({ productById, categoryName }) {
  const priceFormat = (data) => {
    const priceStr = data.toString();
    let i = priceStr.length;
    let renderPrice = '';
    let counter = 0;

    while (i > 0) {
      renderPrice = priceStr[i - 1] + renderPrice;
      i -= 1;
      counter += 1;
      if (counter === 3 && i !== 0) {
        renderPrice = `.${renderPrice}`;
        counter = 0;
      }
    }

    return `Rp ${renderPrice}`;
  };
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

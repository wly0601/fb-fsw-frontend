import React, { useState } from 'react';
import {
  Container,
  Row,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalModals from '../Modal/Modal';
import './Card.Module.css';

function CardBargain({ oneProduct }) {
  console.log(oneProduct.name);
  const priceFormat = (data) => {
    if (typeof data === 'undefined') {
      return '';
    }
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

    // eslint-disable-next-line consistent-return
    return `Rp ${renderPrice}`;
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Card className="card-bargain">
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

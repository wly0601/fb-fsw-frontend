import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardBargain from '../../Moleculs/Card/CardBargain';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';

function ProductPage({
  productById, transaction,
}) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <CarouselProduct productById={productById} />
        </Col>
        <Col md={6}>
          <CardBargain
            productById={productById}
            transaction={transaction}
          />
          <CardSeller
            productById={productById}
          />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;

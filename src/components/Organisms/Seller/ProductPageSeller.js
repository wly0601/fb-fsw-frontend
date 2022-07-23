import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardProductBtn from '../../Moleculs/Card/CardProductBtn';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';

function ProductPageSeller({ productById }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <CarouselProduct productById={productById} />
        </Col>
        <Col md={6}>
          <CardProductBtn productById={productById} />
          <CardSeller productById={productById} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPageSeller;

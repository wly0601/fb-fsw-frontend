import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardProduct from '../../Moleculs/Card/CardProduct';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
// import './Input.Module.css';

function ProductPage({ oneProduct }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <CarouselProduct oneProduct={oneProduct} />
        </Col>
        <Col xs={6}>
          <CardProduct oneProduct={oneProduct} />
          <CardSeller oneProductSeller={oneProduct} />
        </Col>
        <CardDescription oneProduct={oneProduct} />
      </Row>
    </Container>
  );
}

export default ProductPage;

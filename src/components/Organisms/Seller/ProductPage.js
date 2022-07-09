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

function ProductPage({
  productById, categoryName, productImage, seller, city,
}) {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <CarouselProduct productImage={productImage} />
        </Col>
        <Col xs={6}>
          <CardProduct productById={productById} categoryName={categoryName} />
          <CardSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;

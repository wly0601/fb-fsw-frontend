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
import IsMobile from '../../../styles/IsMobile';

function ProductPage({
  productById, onClick, onPublish,
}) {
  return (
    <Container className={`${IsMobile ? 'mt-2' : 'mt-5'}`}>
      <Row>
        <Col md={6}>
          <CarouselProduct productById={productById} />
        </Col>
        <Col md={6}>
          <CardProduct productById={productById} onClick={onClick} onPublish={onPublish} />
          <CardSeller productById={productById} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;

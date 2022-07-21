import React, { useEffect, useState } from 'react';
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
// import './Input.Module.css';

function ProductPage({ oneProduct }) {
  return (
    <Container className={`${IsMobile ? 'mt-2' : 'mt-5'}`}>
      <Row>
        <Col md={6}>
          <CarouselProduct oneProduct={oneProduct} />
        </Col>
        <Col md={6}>
          <CardProduct oneProduct={oneProduct} />
          <CardSeller oneProductSeller={oneProduct} />
        </Col>
        <CardDescription oneProduct={oneProduct} />
      </Row>
    </Container>
  );
}

export default ProductPage;

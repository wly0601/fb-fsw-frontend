import React from 'react';
import CarouselProduct from '../../Moleculs/Carousel/CarouselProduct';
import CardBargain from '../../Moleculs/Card/CardBargain';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
// import './Input.Module.css';

const ProductPage = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col xs={6}>
            <CarouselProduct />
          </Col>
          <Col xs={6}>
            <CardBargain />
            <CardSeller />
          </Col>
          <CardDescription />
        </Row>
      </Container>
    </>
  )
}

export default ProductPage;
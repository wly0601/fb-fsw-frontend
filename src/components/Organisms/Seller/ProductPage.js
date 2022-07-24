import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CarouselPreview from '../../Moleculs/Carousel/CarouselPreview';
import CardProduct from '../../Moleculs/Card/CardProduct';
import CardPreviewSeller from '../../Moleculs/Card/CardPreviewSeller';
import CardDescription from '../../Moleculs/Card/CardDescription';
import IsMobile from '../../../styles/IsMobile';

function ProductPage({
  productById, categoryName, productImage, seller, city, onClick, onPublish,
}) {
  return (
    <Container className={`${IsMobile ? 'mt-2' : 'mt-5'}`}>
      <Row>
        <Col md={6}>
          <CarouselPreview productImage={productImage} />
        </Col>
        <Col md={6}>
          <CardProduct productById={productById} categoryName={categoryName} onClick={onClick} onPublish={onPublish} />
          <CardPreviewSeller seller={seller} city={city} />
        </Col>
        <CardDescription productById={productById} />
      </Row>
    </Container>
  );
}

export default ProductPage;

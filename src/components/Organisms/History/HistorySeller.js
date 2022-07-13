import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import BtnProductStatus from '../../Atoms/Button/BtnProductStatus';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import CardHistory from '../../Moleculs/Card/CardHistory';
// import './Product.Module.css';

function HistorySeller() {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Penjualan" />
      </Row>
      <Row>
        <CardSellerBtn />
      </Row>
      <Row>
        <BtnProductStatus />
      </Row>
      <Row>
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <Col>
              <CardHistory
                title="Jam Tangan Casio"
                type="Aksesoris"
                description="SOLD"
                image="https://placeimg.com/165/100/any"
                imageAlt="Gambar jam tangan"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HistorySeller;

import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import CardHistory from '../../Moleculs/Card/CardHistory';
// import './Product.Module.css';

function HistoryBuyer() {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Riwayat Pembelian" />
      </Row>
      <Row>
        <CardSellerBtn />
      </Row>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <Col>
              <CardHistory
                title="Jam Tangan Casio"
                type="Aksesoris"
                description="Sudah Dibeli"
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

export default HistoryBuyer;

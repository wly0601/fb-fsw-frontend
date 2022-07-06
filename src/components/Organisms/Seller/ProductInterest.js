import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import Title from '../../Atoms/Title/Title';
import CardSellerBtn from '../../Moleculs/Card/CardSellerBtn';
import Sidebar from '../../Moleculs/Sidebar/SidebarProduct';
import ItemCard from '../../Moleculs/Card/ItemCard';
import './Product.Module.css';

function ProductInterest() {
  return (
    <Container className="mt-5">
      <Row>
        <Title title="Daftar Produk Yang Diminati" />
      </Row>
      <Row>
        <CardSellerBtn />
      </Row>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        {/* {Array.from({ length: 2 }).map((_, idx) => {
          return (
            <Col>
              <ItemCard
                title="Jam Tangan Casio"
                type="Aksesoris"
                price="Rp 250.000"
                image="https://placeimg.com/165/100/any"
                imageAlt="Gambar jam tangan"
              />
            </Col>
          );
        })} */}
        <Col>
          <img src={`${process.env.PUBLIC_URL}/images/best_interest.png`} style={{ width: '50%' }} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductInterest;

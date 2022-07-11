import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardNotification from '../../Moleculs/Card/CardNotification';
// import './Input.Module.css';

function OfferingInfo() {
  return (
    <Container>
      <Row className="mt-5">
        <Title title="Daftar Notifikasi" />
      </Row>
      <Row>
        {/* <CardSeller /> */}
      </Row>
      <Row md={3} className="g-2">
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <Col>
              <CardNotification
                title="Penawaran Produk"
                name="Jam Tangan Casio"
                price="Rp 250.000"
                offering="Ditawar Rp.200.000"
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

export default OfferingInfo;

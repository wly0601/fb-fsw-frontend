import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../Atoms/Title/Title';
import CardSeller from '../../Moleculs/Card/CardSeller';
import CardNotification from '../../Moleculs/Card/CardNotification';
// import './Input.Module.css';

function UserNotification({ notif }) {
  console.log(notif);
  return (
    <Container>
      <Row className="mt-5">
        <Title title="Daftar Notifikasi" />
      </Row>
      <Row>
        {/* <CardSeller /> */}
      </Row>
      <Row md={3} className="g-2">
        {notif && notif.map((result) => {
          let result2;
          if (result.msg === 'Berhasil Diterbitkan') {
            result2 = (
              <Col xs={12}>
                <CardNotification
                  title={result.msg}
                  name={result.name}
                  price={result.price}
                  image={result.image}
                  imageAlt="Gambar jam tangan"
                />
              </Col>
            );
          } else if (result.msg === 'Penawaran Produk') {
            result2 = (
              <Col xs={12}>
                <CardNotification
                  title={result.msg}
                  name={result.name}
                  price={result.price}
                  offering={`Ditawar ${result.bargainPrice}`}
                  image={result.image}
                  imageAlt="Gambar jam tangan"
                />
              </Col>
            );
          }
          return result2;
        })}
      </Row>
    </Container>
  );
}

export default UserNotification;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Container,
} from 'react-bootstrap';
import {
  FaWhatsapp,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.Module.css';

function VerticalModals(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="card-modal"
      style={{ borderRadius: '100px' }}
    >
      <Modal.Header style={{ borderBottom: 'none' }} closeButton />
      <Modal.Body>
        <p style={{ fontWeight: 'bold' }}>
          Yeay kamu berhasil mendapat harga yang sesuai
        </p>
        <p style={{ color: 'grey' }}>
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>
        <Container className="product">
          <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Product Match
          </p>
          <Row>
            <Col xs={4}>
              <img src={`${process.env.PUBLIC_URL}/images/seller_pic.png`} className="seller mb-3" alt="" />
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>Safira</p>
              <p>Jakarta</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <img src={`${process.env.PUBLIC_URL}/images/first_watch.png`} className="seller" alt="" />
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>Jam Tangan Casio</p>
              <p style={{ textDecoration: 'line-through' }}>Rp.250.000</p>
              <p>Ditawar Rp.200.000</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Button onClick={props.onHide} className="modal-button">
            Hubungi via Whatsapp
            {' '}
            <FaWhatsapp />
          </Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Modals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" className="mt-3 mb-3 button-accept" onClick={() => { return setModalShow(true); }}>
        Terima
      </Button>
      <VerticalModals
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;

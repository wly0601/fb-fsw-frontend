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
import TitleList from '../../Atoms/Title/Title';
import InputList from '../../Atoms/Input/Input';
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
        <TitleList title="Masukkan Harga Tawarmu" />
        <p style={{ color: 'grey' }}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok, kamu akan segera dihubungi penjual.
        </p>
        <Container className="product">
          <Row>
            <Col xs={4}>
              <img src={`${process.env.PUBLIC_URL}/images/first_watch.png`} className="seller" alt="" />
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>Jam Tangan Casio</p>
              <p>Rp.250.000</p>
            </Col>
          </Row>
        </Container>
        <Row>
          <Form.Group className="mb-3" controlId="form">
            <Form.Label className="label">Harga Tawar</Form.Label>
            <InputList type="text" placeholder="Rp 0,00" />
          </Form.Group>
        </Row>
        <Row>
          <Button onClick={props.onHide} className="modal-button">Kirim</Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Modals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" className="mt-3 button-product" onClick={() => { return setModalShow(true); }}>
        Saya Tertarik dan Ingin Nego
      </Button>
      <VerticalModals
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;

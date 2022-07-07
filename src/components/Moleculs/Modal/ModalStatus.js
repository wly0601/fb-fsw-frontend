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
        <p style={{ fontWeight: 'bold' }}>
          Perbarui status penjualan produkmu
        </p>
        <Form>
          <div className="mb-3">
            <Form.Check inline id="inline" type="radio">
              <Form.Check.Input type="radio" isValid />
              <Form.Check.Label>Berhasil Terjual</Form.Check.Label>
              <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>
            </Form.Check>
            <Form.Check inline id="inline">
              <Form.Check.Input type="radio" isInvalid />
              <Form.Check.Label>Batalkan Transaksi</Form.Check.Label>
              <p>Kamu membatalkan transaksi produk ini dengan pembeli</p>
            </Form.Check>
          </div>
        </Form>
        <Row>
          <Button onClick={props.onHide} className="modal-button">
            Kirim
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
      <Button variant="primary" className="mt-3 mb-3 me-2 button-status" onClick={() => { return setModalShow(true); }}>
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

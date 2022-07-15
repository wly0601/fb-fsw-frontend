/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal, Button, Row, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateConfirmation } from '../../../redux/actions/updateTransactionConfirmation';
import './Modal.Module.css';

function ModalStatus(props) {
  const [confirmation, setConfirmation] = useState();
  const dispatch = useDispatch();

  const {
    confirmationLoading,
    confirmationResult,
    confirmationError,
  } = useSelector((state) => { return state.updateTransactionConfirmationReducer; });

  const handleSubmit = async (e) => {
    console.log(confirmation);
    console.log(props.buyerOrder);
    await dispatch(updateConfirmation(props.buyerOrder.id, confirmation));
  };

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
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Group>
              <Form.Check
                inline
                label="Berhasil Terjual"
                name="group1"
                type="radio"
                id="inline-radio-1"
                value={confirmation}
                onChange={() => { setConfirmation(false); }}
                isValid
              />
              <p style={{ marginLeft: '25px' }}>Kamu telah sepakat menjual produk ini kepada pembeli</p>
              <Form.Check
                inline
                label="Batalkan Transaksi"
                name="group1"
                type="radio"
                id="inline-radio-2"
                value={confirmation}
                onChange={() => { setConfirmation(true); }}
                isInvalid
              />
              <p style={{ marginLeft: '25px' }}>Kamu membatalkan transaksi produk ini dengan pembeli</p>
              {/* <Form.Check id="radio1" value={1} label="Sold" name="sold-radio" checked="sold" onChange={() => { setConfirmation('sold'); console.log('awkoakowoak'); }}>
                <Form.Check.Input type="radio" label="sold" isValid />
                <Form.Check.Label>Berhasil Terjual</Form.Check.Label> */}
              {/* <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>
              </Form.Check>
              <Form.Check id="radio2" value={2} label="Cancel" name="cancel-radio" checked="cancel" onChange={() => { setConfirmation('cancel'); console.log('akwoakwo'); }}>
                <Form.Check.Input type="radio" label="canceled" isInvalid />
                {/* <Form.Check.Label>Batalkan Transaksi</Form.Check.Label> */}
              {/* <p>Kamu membatalkan transaksi produk ini dengan pembeli</p> */}
              {/* </Form.Check> */}
            </Form.Group>
          </div>
          <Row>
            <Button onClick={props.onHide} className="modal-button" type="submit">
              Kirim
            </Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Modals(props) {
  console.log(props.buyerOrder);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" className="mt-3 mb-3 me-2 button-status" onClick={() => { return setModalShow(true); }}>
        Status
      </Button>
      <ModalStatus
        buyerNumber={props.buyerNumber}
        buyerOrder={props.buyerOrder}
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;

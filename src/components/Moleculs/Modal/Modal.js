/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../../redux/actions/createTransaction';
import TitleList from '../../Atoms/Title/Title';
import InputList from '../../Atoms/Input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.Module.css';

function VerticalModals(props) {
  console.log(props.productById);
  const [inputBargain, setInputBargain] = useState('');
  const dispatch = useDispatch();
  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.getTransactionProductReducer; });

  const priceFormat = (data) => {
    if (typeof data === 'undefined') {
      return '';
    }
    const priceStr = data.toString();
    let i = priceStr.length;
    let renderPrice = '';
    let counter = 0;

    while (i > 0) {
      renderPrice = priceStr[i - 1] + renderPrice;
      i -= 1;
      counter += 1;
      if (counter === 3 && i !== 0) {
        renderPrice = `.${renderPrice}`;
        counter = 0;
      }
    }

    // eslint-disable-next-line consistent-return
    return `Rp ${renderPrice}`;
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
        <TitleList title="Masukkan Harga Tawarmu" />
        <p style={{ color: 'grey' }}>
          Harga tawaranmu akan diketahui penjual, jika penjual cocok, kamu akan segera dihubungi penjual.
        </p>
        <Container className="product">
          <Row>
            <Col xs={4}>
              {/* {(props.productById.images && props.productById.images).map((result) => {
                return (
                  <img src={result[0]} className="seller" alt="" />
                );
              })} */}
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>{props.productById.name}</p>
              <p>{priceFormat(props.productById.price)}</p>
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
          <Button onClick={props.onClick} className="modal-button">Kirim</Button>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

function Modals({ productById }) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log({ productById });

  return (
    <>
      <Button variant="primary" className="mt-3 button-product" onClick={() => { return setModalShow(true); }}>
        Saya Tertarik dan Ingin Nego
      </Button>
      <VerticalModals
        productById={productById}
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  );
}

export default Modals;

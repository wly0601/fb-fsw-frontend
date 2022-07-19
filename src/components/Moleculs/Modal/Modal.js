/* eslint-disable react/jsx-no-bind */
/* eslint-disable radix */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  Modal, Button, Row, Col, Form, Container,
} from 'react-bootstrap';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../../redux/actions/createTransaction';
import TitleList from '../../Atoms/Title/Title';
import InputList from '../../Atoms/Input/Input';
import priceFormat from '../../../utils/priceFormat';
import getUser from '../../../redux/services/getUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.Module.css';

function VerticalModals(props) {
  const params = useParams();
  const [inputBargain, setInputBargain] = useState('');
  const dispatch = useDispatch();
  const {
    productLoading,
    productResult,
    productError,
  } = useSelector((state) => { return state.getTransactionProductReducer; });

  async function handleSubmit(e) {
    console.log('lewat 34');
    e.preventDefault();
    const body = {
      productId: props.oneProduct.id,
      inputBargain: parseInt(inputBargain),
    };

    console.log(body);
    await dispatch(createTransaction(body));
  }

  const handleChangeBargain = (e) => {
    setInputBargain(parseInt(e));
  };

  useEffect(() => {
    if (productResult) {
      window.location.reload();
    }
  }, [inputBargain]);
  console.log(inputBargain);

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
              {props.oneProduct.images && (
                <img src={props.oneProduct.images[0]} className="seller" alt="" />
              )}
            </Col>
            <Col xs={8}>
              <p style={{ fontWeight: 'bold' }}>{props.oneProduct.name}</p>
              <p>{priceFormat(props.oneProduct.price)}</p>
            </Col>
          </Row>
        </Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label className="label">Harga Tawar</Form.Label>
              <InputList
                type="text"
                placeholder="Masukkan harga tawarmu disini"
                onChange={handleChangeBargain}
                value={props.oneProduct.price}
              />
            </Form.Group>
          </Row>
          <Row>
            <Button className="modal-button" type="submit">Kirim</Button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Modals({ oneProduct }) {
  const [modalShow, setModalShow] = React.useState(false);
  const getToken = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedin] = useState(true);
  const [profile, setProfile] = useState(true);

  const getUserData = async () => {
    const user = await getUser();
    console.log(user);
    if (!user.data.cityId) {
      setProfile(false);
    }
  };

  const isLogin = () => {
    if (!getToken) {
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    isLogin();
    getUserData();
  }, []);

  return isLoggedIn ? (
    <>
      <Button
        variant="primary"
        className="mt-3 button-product"
        onClick={() => { return setModalShow(true); }}
      >
        Saya Tertarik dan Ingin Nego
      </Button>
      <VerticalModals
        oneProduct={oneProduct}
        show={modalShow}
        onHide={() => { return setModalShow(false); }}
      />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Modals;

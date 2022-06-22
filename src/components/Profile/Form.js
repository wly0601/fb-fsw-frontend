import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  Container,
  Form,
  Button,
  Modal
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.Module.css';
import '../../styles/App.css';

function Profile() {
  const [userName, setUserName] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isError, setIsError] = useState('');

  // Modal Pop Up (Error)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    return e.preventDefault();
  }

  const handleUserName = (e) => {
    return setUserName(e.target.value);
  }

  const handleUserCity = (e) => {
    return setUserCity(e.target.value);
  }

  const handleUserAddress = (e) => {
    return setUserAddress(e.target.value)
  }

  const handleUserPhone = (e) => {
    return setUserPhone(e.target.value);
  }

  return (
    <>
      <Container className='profile'>
        <Form className='form-group' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId="profileName">
            <Form.Label >Nama*</Form.Label>
            <Form.Control
              className='text-name'
              type='text'
              placeholder='Nama'
              value={userName}
              onChange={handleUserName}
              required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Kota*</Form.Label>
            <Form.Select className='text-city' value={userCity} onChange={handleUserCity} required>
              <option>Pilih Kota</option>
              <option value='1'>Jakarta</option>
              <option value='2'>Bandung</option>
              <option value='3'>Semarang</option>
              <option value='4'>Malang</option>
              <option value='5'>Medan</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='profileName'>
            <Form.Label>Alamat*</Form.Label>
            <Form.Control
              className='text-address'
              as='textarea'
              placeholder='Jl. Medan Merdeka No.01'
              value={userAddress}
              onChange={handleUserAddress} required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='profilePhone'>
            <Form.Label>No Handphone*</Form.Label>
            <Form.Control
              className='text-phone'
              type='text'
              placeholder='contoh: +628123456789'
              value={userPhone}
              onChange={handleUserPhone}
              required />
          </Form.Group>
          <Button
            variant='primary'
            className='form-button'
            type='submit'
            onClick={handleShow}>
            Simpan
          </Button>
        </Form>
      </Container>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>You must filled all the empty columns!!!</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            <Link to='/profile' style={{ color: 'white', textDecoration: 'none' }}>
              OK
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Profile;
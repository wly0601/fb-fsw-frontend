import React from 'react';
import '@fontsource/poppins';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.Module.css';
import '../../styles/App.css';

function Profile() {
  return (
    <>
      <Container className='profile'>
        <Form className='form-group'>
          <Form.Group className='mb-3' controlId="profileName">
            <Form.Label >Nama*</Form.Label>
            <Form.Control className='text-name' type="text" placeholder="Nama" />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Kota*</Form.Label>
            <Form.Select className='text-city'>
              <option>Pilih Kota</option>
              <option value="1">Jakarta</option>
              <option value="2">Bandung</option>
              <option value="3">Semarang</option>
              <option value="4">Malang</option>
              <option value="5">Medan</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="profileName">
            <Form.Label>Alamat*</Form.Label>
            <Form.Control className='text-address' type="text" placeholder="Jl. Medan Merdeka No.01" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profilePhone">
            <Form.Label>No Handphone*</Form.Label>
            <Form.Control className='text-phone' type="text" placeholder="contoh: +628123456789" />
          </Form.Group>
          <Button variant="primary" className='form-button' type="submit">
            Simpan
          </Button>
        </Form>
      </Container>
    </>
  )
}
export default Profile;
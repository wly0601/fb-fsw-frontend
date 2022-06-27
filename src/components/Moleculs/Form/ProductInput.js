import React from 'react';
import { Form, Row } from 'react-bootstrap';
import InputList from '../../Atoms/Input/Input';
import InputCategory from '../../Atoms/Input/InputCategory';
import './FormInput.Module.css';

const ProductInput = () => {
  return (
    <>
      <div className='mt-5 mb-3 mx-5 profile-input'>
        <Form>
          <Form.Group>
            <Form.Label>Nama Produk</Form.Label>
            <InputList type='name' placeholder='Nama' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga Produk</Form.Label>
            <InputList type='price' placeholder='Rp, 00' />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kategori</Form.Label>
            <InputCategory />
          </Form.Group>
          <Form.Group>
            <Form.Label>Alamat</Form.Label>
            <InputList type='address' placeholder='Contoh: Jl. Medan Merdeka' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='productPhoto'>
            <Row>
              <Form.Label>Foto Produk</Form.Label>
            </Row>
            <Row>
              <Form.Control type='file' className='upload-button' />
            </Row>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default ProductInput;
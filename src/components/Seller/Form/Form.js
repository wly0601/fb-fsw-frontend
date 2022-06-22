import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  Container,
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.Module.css';

function ProductInfo() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [isError, setIsError] = useState('');

  const handleSubmit = (e) => {
    return e.preventDefault();
  }

  const handleProductName = (e) => {
    return setProductName(e.target.value);
  }

  const handleProductPrice = (e) => {
    return setProductPrice(e.target.value);
  }

  const handleProductCategory = (e) => {
    return setProductCategory(e.target.value)
  }

  const handleProductDescription = (e) => {
    return setProductDescription(e.target.value);
  }

  return (
    <>
      <Container className='form-product'>
        <Form className='form-group' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='productName'>
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control
              className='text-name'
              type='text'
              placeholder='Nama Produk'
              value={productName}
              onChange={handleProductName}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='productPrice'>
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control
              className='text-price'
              type='text'
              placeholder='Rp 0,00'
              value={productPrice}
              onChange={handleProductPrice}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Kategori</Form.Label>
            <Form.Select className='text-category' value={productCategory} onChange={handleProductCategory}>
              <option>Pilih Kategori</option>
              <option value='1'>Kendaraan</option>
              <option value='2'>Elektronik</option>
              <option value='3'>Baju</option>
              <option value='4'>Celana</option>
              <option value='5'>Topi</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='productDescription'>
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              className='text-desc'
              as='textarea'
              placeholder='Produk ini adalah jam tangan merk Casio tahun 1950...'
              value={productDescription}
              onChange={handleProductDescription}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='productPhoto'>
            <Row>
              <Form.Label>Foto Produk</Form.Label>
            </Row>
            <Row>
              <Form.Control type='file' className='upload-button' />
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col xs={6}>
                <Link to='/seller/product/:id'>
                  <Button variant='primary' className='preview-button' type='submit'>
                    Preview
                  </Button>
                </Link>
              </Col>
              <Col xs={6}>
                <Link to=''>
                  <Button variant='primary' className='publish-button' type='submit'>
                    Terbitkan
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  )
}
export default ProductInfo;
import React from 'react';
import '@fontsource/poppins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
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
  return (
    <>
      <Container className='form-product'>
        <Row>
          <Col xs={1}>
            <div className='arrow-left'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          </Col>
          <Col xs={11}>
            <Form className='form-group'>
              <Form.Group className='mb-3' controlId="productName">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control className='text-name' type="text" placeholder="Nama Produk" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label>Harga Produk</Form.Label>
                <Form.Control className='text-price' type="text" placeholder="Rp 0,00" />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Kategori</Form.Label>
                <Form.Select className='text-category'>
                  <option>Pilih Kategori</option>
                  <option value="1">Kendaraan</option>
                  <option value="2">Elektronik</option>
                  <option value="3">Baju</option>
                  <option value="4">Celana</option>
                  <option value="5">Topi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="productDescription">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control className='text-desc' as="textarea" placeholder="Produk ini adalah jam tangan merk Casio tahun 1950..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productPhoto">
                <Row>
                  <Form.Label>Foto Produk</Form.Label>
                </Row>
                <Row>
                  <Form.Control type="file" className='upload-button' />
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col xs={6}>
                    <Button variant="primary" className='preview-button' type="submit">
                      Preview
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="primary" className='publish-button' type="submit">
                      Terbitkan
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default ProductInfo;
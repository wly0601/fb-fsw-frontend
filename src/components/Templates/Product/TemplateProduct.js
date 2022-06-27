import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NavbarProduct from '../../Organisms/Navbar/NavbarProduct';
import ProductInput from '../../Moleculs/Form/ProductInput';
// import ButtonList from '../../Atoms/Button/ButtonList';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './TemplateProduct.Module.css';

const TemplateProduct = () => {
  return (
    <>
      <div>
        <NavbarProduct />
        <Container className='form-products'>
          <Row>
            <Col>
              <div style={{ paddingTop: '30px' }}>
                <Link to="/register" style={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </div>
              <ProductInput />
            </Col>
          </Row>
          <Row className='mx-5 mb-5'>
            <Col xs={6}>
              <Link to='/seller/product/:id'>
                <Button variant='primary' className='preview-button' type='submit'>
                  Preview
                </Button>
              </Link>
            </Col>
            <Col xs={6}>
              <Link to='/side'>
                <Button variant='primary' className='publish-button' type='submit'>
                  Terbitkan
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TemplateProduct;
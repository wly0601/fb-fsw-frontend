import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import NavbarProduct from '../../Organisms/Navbar/NavbarProduct';
import ProductInput from '../../Moleculs/Form/ProductInput';
import './TemplateProduct.Module.css';

function TemplateProduct() {
  // Data Input Product
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <NavbarProduct />
      <Container className="form-products">
        <Row>
          <Col>
            <div style={{ paddingTop: '30px' }}>
              <Link to="/" style={{ color: 'black' }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </div>
            <ProductInput />
          </Col>
        </Row>
        <Row className="mx-5 mb-5">
          <Col xs={6}>
            <Link to="/seller/product/:id">
              <Button variant="primary" className="preview-button" type="submit">
                Preview
              </Button>
            </Link>
          </Col>
          <Col xs={6}>
            <Link to="/list/products">
              <Button variant="primary" className="publish-button" type="submit">
                Terbitkan
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TemplateProduct;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroup, Row, Col,
} from 'react-bootstrap';
import {
  FaCube, FaRegHeart, FaDollarSign,
} from 'react-icons/fa';
import './SidebarProduct.Module.css';

function SidebarProduct() {
  const [allProduct, setAllProduct] = useState('link-product');
  const [interestProduct, setInterestProduct] = useState('link-product');
  const [soldProduct, setSoldProduct] = useState('link-product');

  const handleAllProduct = () => {
    setAllProduct('link-product-click');
    setInterestProduct('link-product');
    setSoldProduct('link-product');
  };

  const handleInterestProduct = () => {
    setAllProduct('link-product');
    setInterestProduct('link-product-click');
    setSoldProduct('link-product');
  };

  const handleSoldProduct = () => {
    setAllProduct('link-product');
    setInterestProduct('link-product');
    setSoldProduct('link-product-click');
  };

  return (
    <div className="card-test">
      <div className="card-body">
        <h5 className="px-3 pt-1">Kategori</h5>
        <ListGroup className="py-2 text-decoration" variant="flush">
          <ListGroup.Item className="py-3">
            <Link to="/list/products" className="text-decoration" onClick={handleAllProduct}>
              <i type="button" className={allProduct}>
                <Row>
                  <Col>
                    <FaCube />
                    {' '}
                    Semua Product
                  </Col>
                </Row>
              </i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <Link to="/list/interest" className="text-decoration">
              <i type="button" className={interestProduct} onClick={handleInterestProduct}>
                <Row>
                  <Col>
                    <FaRegHeart style={{ color: '#8A8A8A' }} />
                    {' '}
                    Diminati
                  </Col>
                </Row>
              </i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <Link to="/history/seller" className="text-decoration">
              <i type="button" className={soldProduct} onClick={handleSoldProduct}>
                <Row>
                  <Col>
                    <FaDollarSign style={{ color: '#8A8A8A' }} />
                    {' '}
                    Terjual
                  </Col>
                </Row>
              </i>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
export default SidebarProduct;

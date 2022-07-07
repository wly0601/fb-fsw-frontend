import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';
import {
  ListGroup, Row, Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaCube, FaRegHeart, FaDollarSign, FaAngleRight,
} from 'react-icons/fa';

import './SidebarProduct.Module.css';

function SidebarProduct() {
  return (
    <div className="card-test">
      <div className="card-body">
        <h5 className="px-3 pt-1">Kategori</h5>
        <ListGroup className="py-2 text-decoration" variant="flush">
          <ListGroup.Item className="py-3">
            <Link to="/list/products" className="text-decoration">
              <i type="button" className="link">
                <Row>
                  <Col xs={10}>
                    <FaCube />
                    {' '}
                    Semua Product
                  </Col>
                  <Col xs={2}>
                    <div className="justify-content-end d-flex flex-row-reverse">
                      <FaAngleRight />
                    </div>
                  </Col>
                </Row>
              </i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <Link to="/list/interest" className="text-decoration">
              <i type="button" className="link">
                <Row>
                  <Col xs={10}>
                    <FaRegHeart style={{ color: '#8A8A8A' }} />
                    {' '}
                    Diminati
                  </Col>
                  <Col xs={1}>
                    <div className="justify-content-end">
                      <FaAngleRight />
                    </div>
                  </Col>
                </Row>
              </i>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <Link to="/history/seller" className="text-decoration">
              <i type="button" className="link">
                <Row>
                  <Col xs={10}>
                    <FaDollarSign style={{ color: '#8A8A8A' }} />
                    {' '}
                    Terjual
                  </Col>
                  <Col xs={1}>
                    <div className="justify-content-end me-5">
                      <FaAngleRight />
                    </div>
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

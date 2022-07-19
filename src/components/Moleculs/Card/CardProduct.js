/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardProduct({ oneProduct }) {
  return (
    <Container>
      <Card className="card-product" style={{ borderRadius: '16px' }}>
        <Card.Body>
					<h5 style={{ fontWeight: 'bold' }}>
            {oneProduct.name}
          </h5>
          <p>{oneProduct.price}</p>
          <p>{priceFormat(oneProduct.price)}</p>
          <Row>
            <Link to="/list/products">
              <Button variant="primary" className="button-seller" style={{ borderRadius: '16px', backgroundColor: '#7126B5' }}>Terbitkan</Button>
            </Link>
          </Row>
          <Row>
            <Link to="/seller/sell">
              <Button variant="outline-primary" className="button-seller-outline" style={{ borderRadius: '16px' }}>Edit</Button>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardProduct;

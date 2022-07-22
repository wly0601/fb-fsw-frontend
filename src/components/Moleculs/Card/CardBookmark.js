/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap';
import { FaBookmark } from 'react-icons/fa';
import './Card.Module.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt,
  } = props;

  return (
    <Card className="card-items">
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }} className="item-card-title">{title}</Card.Title>
        <Card.Text className="item-card-type">{type}</Card.Text>
        <Row>
          <Col md={10} xs={9}>
            <Card.Text className="item-card-price">{price}</Card.Text>
          </Col>
          <Col md={2} xs={3}>
            {/* <Link to="/list/bookmark"> */}
            <FaBookmark className="icon-bookmark" />
            {/* </Link> */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;

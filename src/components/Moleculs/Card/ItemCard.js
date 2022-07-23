/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { BsBookmark } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import './Card.Module.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt, active,
  } = props;

  return (
    <Card className="card-items">
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }} className="item-card-title">{title}</Card.Title>
        <Card.Text className="item-card-type">{type}</Card.Text>
        <Row>
          <Col xs={9}>
            <Card.Text className="item-card-price">{price}</Card.Text>
          </Col>
          <Col xs={3}>
            {!active ? (
              <BsBookmark className="icon-bookmark" />
            ) : (
              <FaBookmark className="icon-bookmark" />
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;

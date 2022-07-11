/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.Module.css';

function ItemCard(props) {
  const {
    title, type, price, image, imageAlt,
  } = props;

  return (
    <Card className="card-items">
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} />
      <Card.Body>
        <Card.Title className="item-card-title">{title}</Card.Title>
        <Card.Text className="item-card-type">{type}</Card.Text>
        <Card.Text style={{ fontWeight: '400' }}>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;

/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import './Card.Module.css';

function CardHistory(props) {
  const {
    title, type, image, imageAlt, description,
  } = props;

  return (
    <Card className="card-items">
      <Card.Img src={image} className="mx-auto card-img-top" alt={imageAlt} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Text style={{ color: 'grey' }}>{type}</Card.Text>
        <Card.Text style={{ fontWeight: '400' }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardHistory;

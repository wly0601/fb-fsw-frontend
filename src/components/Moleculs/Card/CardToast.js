/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container, Card, Row, Col,
} from 'react-bootstrap';
import './Card.Module.css';

function CardNotification(props) {
  const {
    title, time, name, price, image, imageAlt, offering,
  } = props;

  return (
    <Container>
      <Card className="card-items-offering" style={{ borderRadius: '16px' }}>
        <Row>
          <Col xs={4}>
            <Card.Img
              src={image}
              className="mt-4 mx-3 card-img-top"
              alt={imageAlt}
              style={{ width: '100%', height: '100px' }}
            />
          </Col>
          <Col xs={8}>
            <Card.Body style={{ height: '150px', width: '100%' }}>
              <Card.Title style={{ fontSize: '10px', color: 'grey' }}>{title}</Card.Title>
              <Card.Title style={{ fontSize: '12px' }}>{name}</Card.Title>
              <Card.Text style={{ fontSize: '12px' }}>{price}</Card.Text>
              <Card.Text style={{ fontSize: '12px' }}>{offering}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default CardNotification;

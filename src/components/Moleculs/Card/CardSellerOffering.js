import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSeller({ buyerInfo, buyerCity, buyerImg }) {
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-offering">
        <Card.Body>
          <Row>
            <Col xs={1}>
              <img src={buyerImg} style={{ width: '100%' }} alt="" className="px-auto" />
            </Col>
            <Col xs={11}>
              <h5 style={{ fontWeight: 'bold' }}>{buyerInfo}</h5>
              <p>{buyerCity}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSeller;

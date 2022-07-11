import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSeller({ buyerInfo, buyerCity }) {
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-offering">
        <Card.Body>
          <Row>
            <Col xs={1}>
              <img src={`${process.env.PUBLIC_URL}/images/seller_pic.png`} style={{ width: '100%' }} alt="" className="px-auto" />
            </Col>
            <Col xs={11}>
              <h5 style={{ fontWeight: 'bold' }}>Safira</h5>
              <p>Jakarta</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSeller;

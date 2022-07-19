import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSeller({ oneProductSeller }) {
  console.log(oneProductSeller.seller);
  return (
    <Container>
      <Card className="mt-4 mb-5 seller-card">
        <Card.Body>
          <Row>
            { oneProductSeller.seller && (
              <>
                <Col xs={2}>
                  <img src={oneProductSeller.seller.photo} style={{ width: '100%' }} alt="" />
                </Col>
                <Col xs={10}>
                  <h5 style={{ fontWeight: 'bold' }}>{oneProductSeller.seller.name}</h5>
                  <p>{oneProductSeller.seller.name}</p>
                </Col>
              </>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSeller;

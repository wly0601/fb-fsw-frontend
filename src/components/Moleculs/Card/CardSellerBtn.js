import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardSellerBtn({ sellerName, sellerCity, sellerPhoto }) {
  return (
    <Container>
      <Card className="mt-3 mb-5 card-seller">
        <Card.Body>
          <Row>
            <Col md={1} xs={2}>
              <img src={sellerPhoto} className="seller-picture" alt="" />
            </Col>
            <Col md={9} xs={7}>
              <h5 style={{ fontWeight: 'bold' }}>{sellerName}</h5>
              <p>{sellerCity}</p>
            </Col>
            <Col xs={2}>
              <Link to="/profile">
                <Button className="seller-btn" variant="primary">
                  Edit
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardSellerBtn;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import './Card.Module.css';

function CardSellerBtn({ seller }) {
  return (
    <Container>
      <Card className="mt-3 mb-5 card-seller">
        <Card.Body>
          <Row>
            <Col xs={2} md={1}>
              <img src={seller.photo} className="seller-picture" alt="" />
            </Col>
            <Col xs={8} md={9}>
              <h5 style={{ fontWeight: 'bold' }}>{seller.name}</h5>
              <p>{seller.address}</p>
            </Col>
            <Col xs={2}>
              <Link to="/profile">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '7126B5',
                    color: 'black',
                    borderRadius: '12px',
                    marginTop: '10px',
                  }}
                >
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

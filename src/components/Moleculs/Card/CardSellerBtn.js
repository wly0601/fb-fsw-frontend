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
            <Col xs={2}>
              <img src={sellerPhoto} style={{ width: '30%', borderRadius: '10px' }} alt="" />
            </Col>
            <Col xs={8}>
              <h5 style={{ fontWeight: 'bold' }}>{sellerName}</h5>
              <p>{sellerCity}</p>
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

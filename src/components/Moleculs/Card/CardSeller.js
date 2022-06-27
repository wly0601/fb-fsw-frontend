import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function Product() {
  return (
    <>
      <Container>
        <Card className='mt-4 mb-5 seller-card'>
          <Card.Body>
            <Row>
              <Col xs={2}>
                <img src={process.env.PUBLIC_URL + '/images/seller_pic.png'} style={{ width: '100%' }} alt='' />
              </Col>
              <Col xs={10}>
                <h5 style={{ fontWeight: 'bold' }}>Safira</h5>
                <p>Jakarta</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default Product;
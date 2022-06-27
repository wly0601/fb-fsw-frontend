import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function Product() {
  return (
    <>
      <Container>
        <Card className='mt-3 mb-5 card-seller'>
          <Card.Body>
            <Row>
              <Col xs={2}>
                <img src={process.env.PUBLIC_URL + '/images/seller_pic.png'} style={{ width: '35%' }} alt='' />
              </Col>
              <Col xs={8}>
                <h5 style={{ fontWeight: 'bold' }}>Safira</h5>
                <p>Jakarta</p>
              </Col>
              <Col xs={2}>
                <Link to='/profile'>
                  <Button className='seller-btn' variant='primary'>Edit</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default Product;
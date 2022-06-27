import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardProduct() {
  return (
    <>
      <Container>
        <Card className='card-product'>
          <Card.Body>
            <h5 style={{ fontWeight: 'bold' }}>Jam Tangan Casio</h5>
            <p style={{ color: 'grey' }}>Aksesoris</p>
            <p>Rp.250.000</p>
            <Row>
              <Link to='/side'>
                <Button variant='primary' className='button-seller'>Terbitkan</Button>
              </Link>
            </Row>
            <Row>
              <Link to='/seller/sell'>
                <Button variant="outline-primary" className='button-seller-outline'>Edit</Button>
              </Link>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default CardProduct;
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import priceFormat from '../../../utils/priceFormat';
import './Card.Module.css';

function CardProductBtn({ productById }) {
  const params = useParams();

  return (
    <Container>
      <Card className="card-product-btn" style={{ borderRadius: '16px' }}>
        <Card.Body>
          <h5 style={{ fontWeight: 'bold' }}>
            {productById.name}
          </h5>
          {productById.category && (
          <p style={{ color: 'grey' }}>{productById.category.name}</p>
          )}
          <p>{priceFormat(productById.price)}</p>
          <Row>
            <Link to={`/seller/product/${params.id}/update`}>
              <Button
                variant="outline-primary"
                className="button-edit-preview"
                style={{
                  color: 'white',
                  backgroundColor: '#7126B5',
                  borderColor: '#7126B5',
                  borderRadius: '16px',
                }}
              >
                Edit
              </Button>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardProductBtn;

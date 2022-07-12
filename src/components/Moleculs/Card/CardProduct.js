/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.Module.css';

function CardProduct(props) {
  const params = useParams();

  const [productById, setProductById] = useState([]);

  const fetchData = useCallback(async () => {
    const productId = `https://second-hand-be.herokuapp.com/api/product/${params.id}`;

    const response = await axios.get(productId);
    console.log(response.data.category);
    setProductById(response.data);
  });

  const priceFormat = (data) => {
    if (typeof data === 'undefined') {
      return '';
    }
    const priceStr = data.toString();
    let i = priceStr.length;
    let renderPrice = '';
    let counter = 0;

    while (i > 0) {
      renderPrice = priceStr[i - 1] + renderPrice;
      i -= 1;
      counter += 1;
      if (counter === 3 && i !== 0) {
        renderPrice = `.${renderPrice}`;
        counter = 0;
      }
    }

    return `Rp ${renderPrice}`;
  };

  useEffect(() => {
    fetchData();
    document.title = 'Produk Pembeli';
  }, []);

  return (
    <Container>
      <Card className="card-product">
        <Card.Body>
					<h5 style={{ fontWeight: 'bold' }}>
            {productById.name}
          </h5>
          <p>{priceFormat(productById.price)}</p>
          <Row>
            <Link to="/list/products">
              <Button variant="primary" className="button-seller" style={{ backgroundColor: '#7126B5' }}>Terbitkan</Button>
            </Link>
          </Row>
          <Row>
            <Link to="/seller/sell">
              <Button variant="outline-primary" className="button-seller-outline">Edit</Button>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardProduct;

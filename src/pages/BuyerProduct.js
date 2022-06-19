import { React, useEffect }  from 'react';
import "@fontsource/poppins";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/Buyer/Carousel/Carousel'

function BuyerProduct() {
  useEffect(() => {
    document.title = "Buyer Product Page";
  }, []);

  return (
    <Container>
      <Row>
        <Carousel />
      </Row>
    </Container>
  )
}

export default BuyerProduct;
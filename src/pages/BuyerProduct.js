import { React, useEffect }  from 'react';
import "@fontsource/poppins";
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogIn from '../components/Navbar/NavbarLogIn';
import Carousel from '../components/Buyer/Carousel/Carousel';

function BuyerProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Buyer Product Page";
  }, []);

  return (
    <>
    <NavbarLogIn />
    <Container>
      <Row>
        <Carousel />
      </Row>
    </Container>
    </>
  )
}

export default BuyerProduct;
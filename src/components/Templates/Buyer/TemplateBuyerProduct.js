import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';

function TemplateBuyerProduct() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductPage />
      </Container>
    </>
  );
}

export default TemplateBuyerProduct;

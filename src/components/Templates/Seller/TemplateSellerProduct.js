import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Seller/ProductPage';

function TemplateSellerProduct() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductPage />
      </Container>
    </>
  );
}

export default TemplateSellerProduct;

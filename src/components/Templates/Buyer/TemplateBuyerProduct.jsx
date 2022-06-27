import NavbarLogin from '../../Organisms/Navbar/NavbarLogin'
import ProductPage from '../../Organisms/Buyer/ProductPage';
import { Container } from 'react-bootstrap';

const TemplateSellerProduct = () => {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductPage />
      </Container>
    </>
  )
};

export default TemplateSellerProduct;
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';
import { Container } from 'react-bootstrap';

const TemplateBuyerProduct = () => {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductPage />
      </Container>
    </>
  )
};

export default TemplateBuyerProduct;
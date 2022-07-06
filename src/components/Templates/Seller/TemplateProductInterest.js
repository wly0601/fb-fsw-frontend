import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductInterest from '../../Organisms/Seller/ProductInterest';

function TemplateProductInterest() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ProductInterest />
      </Container>
    </>
  );
}

export default TemplateProductInterest;

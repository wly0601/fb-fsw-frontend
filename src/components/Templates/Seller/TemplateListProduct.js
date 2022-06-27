import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ListProduct from '../../Organisms/Seller/ListProduct';

function TemplateListProduct() {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ListProduct />
      </Container>
    </>
  );
}

export default TemplateListProduct;

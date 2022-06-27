import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ListProduct from '../../Organisms/Seller/ListProduct';
import { Container } from 'react-bootstrap';

const TemplateListProduct = () => {
  return (
    <>
      <NavbarLogin />
      <Container fluid>
        <ListProduct />
      </Container>
    </>
  )
};

export default TemplateListProduct;
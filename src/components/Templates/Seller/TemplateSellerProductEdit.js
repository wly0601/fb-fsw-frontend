import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPageSeller from '../../Organisms/Seller/ProductPageSeller';

function TemplateSellerProductEdit({ productById, notif }) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPageSeller
          productById={productById}
        />
      </Container>
    </>
  );
}

export default TemplateSellerProductEdit;

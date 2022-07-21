import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Seller/ProductPage';

function TemplateSellerProduct({
  oneProduct, notif,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPage
          oneProduct={oneProduct}
        />
      </Container>
    </>
  );
}

export default TemplateSellerProduct;

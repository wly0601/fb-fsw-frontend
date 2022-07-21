import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPage from '../../Organisms/Buyer/ProductPage';

function TemplateBuyerProduct({
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

export default TemplateBuyerProduct;

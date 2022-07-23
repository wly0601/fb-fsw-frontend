import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPageEdit from '../../Organisms/Seller/ProductPageEdit';

function TemplateSellerProduct({ productById, notif }) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPageEdit
          productById={productById}
        />
      </Container>
    </>
  );
}

export default TemplateSellerProduct;

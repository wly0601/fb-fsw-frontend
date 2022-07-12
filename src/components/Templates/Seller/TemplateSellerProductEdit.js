import { Container } from 'react-bootstrap';
import NavbarLogin from '../../Organisms/Navbar/NavbarLogin';
import ProductPageSeller from '../../Organisms/Seller/ProductPageSeller';

function TemplateSellerProductEdit({
  productById, categoryName, productImage, seller, city, notif,
}) {
  return (
    <>
      <NavbarLogin notif={notif} />
      <Container fluid>
        <ProductPageSeller
          productById={productById}
          categoryName={categoryName}
          productImage={productImage}
          city={city}
          seller={seller}
          notif={notif}
        />
      </Container>
    </>
  );
}

export default TemplateSellerProductEdit;
